const { validationResult } = require("express-validator");
const { user, student, student_user, role, role_user } = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken')

let self = {};

self.login = async (req, res) => {
   const error = validationResult(req);
   if (!error.isEmpty()) {
     return res.status(422).json(error);
   }

   const options = {
    expiresIn: '24h'
   }

   const secret = "PI_JAYA"

   const userData = user.findOne({
    where: {
      username: req.body.username
    }
   }) 

   const token = jwt.sign({
    data: this.user,
   },secret, options)

   res.status(200).json({
    messege: 'login success',
    token: token
   })
}

self.save = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(422).json(error);
  }

  try {
    const {
      username,
      email,
      password,
      firstName,
      lastName,
      classes,
      major_id,
      gender,
    } = req.body;
    

    const passwordHash = await bcryptjs.hash(password, 10);

    const userData = await user.create({
        username: username,
        email: email,
        password: passwordHash
    })

    const studentData = await student.create({
        firstName: firstName,
        lastName: lastName,
        classes: classes,
        major_id: major_id,
        gender: gender,
    })

    await student_user.create({
      user_id: userData.id,
      student_id: studentData.id
    })

    const roleUserRegister = await role.findOne ({
      where: {
        role_name: 'Student'
      },
      attributes: ['id']
    })

    await role_user.create({
      user_id: userData.id,
      role_id: roleUserRegister.id
    })

    res.status(201).json({
      message: "Register Success!",
      data: userData
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = self;