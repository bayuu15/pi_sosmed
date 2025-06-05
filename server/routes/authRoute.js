const { body } = require('express-validator');
const auth_ctrl = require('../controllers/auth_ctrl');
const { major, user } = require('../models')
const bcrypt = require("bcryptjs");
const { authenticateJWT } = require("../middleware/authMiddleware");


module.exports = (app) => {
    const router = app.Router()

    router.get( "/me", authenticateJWT, (req, res) => {
      res.status(200).json({
        messege: 'token is valid',
        data: req?.user
      })
    })

    router.post( "/login",
      [
        body("username")
          .notEmpty().withMessage('username is required')
          .isLength({ min: 4, max: 20 })
          .custom(async (value) => {
            let userData = await user.findOne({
              where: {
                username: value,
              },
            });

            if (!!userData == false) {
              throw new Error("Username has not registed!");
            }

            // req?.user = userData
            this.user = userData;

          }),

        body("password").notEmpty().withMessage('password required').isLength({ min: 6, max: 20 }).custom(async (value) => {
          if (!!this.user) {
            let isCorrectPass = await bcrypt.compare(
              value,
              this.user?.password
            ); 
                    // console.log(isCorrectPass);

                    if (!isCorrectPass) {
                      throw new Error("Invalid password!");
                    }
          }

  
        })
  
      ],
      auth_ctrl.login
      );
    

    router.post(
      "/register",

      [
        body("username")
          .notEmpty()
          .isLength({ min: 4, max: 20 })
          .custom(async (value) => {
            let userData = await user.findOne({
              where: {
                username: value,
              },
            });
            if (userData) {
              throw new Error("Username has been registed!");
            }
          }),

        body("email")
          .notEmpty()
          .isEmail()
          .custom(async (value) => {
            let emailData = await user.findOne({
              where: {
                email: value,
              },
            });
            if (emailData) {
              throw new Error("Username has been registed!");
            }
          }),

        body("password").notEmpty().isLength({ min: 6, max: 20 }),
        body("firstName").isString().notEmpty(),
        body("lastName").isString().notEmpty(),
        body("classes").isString().notEmpty().custom(async (value) => {
            const classValue = ["X", "XI", "XII", "XII"];
            const isValid = classValue.includes(value);

            if (!isValid) {
              throw new Error("classes is not registered!");
            }
          }),
          body("major_id").isString().notEmpty().custom(async (value) => {
            const majorValue = await major.findByPk(value);
            if (!!majorValue == false) {
              throw new Error("major id is not registered!");
            }
          }),
          body("gender")
            .isString()
            .notEmpty()
            .custom(async (value) => {
              const genderVal = ["M", "F"];
              const isValid = await genderVal.includes(value);
  
              if (!isValid) {
                throw new Error("gender is not registered!");
              }
            }),
      ],
      auth_ctrl.save
    );
          
  

    return router
}

// const { body } = require("express-validator");
// const { major, user } = require("../models");
// const auth_ctrl = require("../controllers/auth_ctrl");

// module.exports = (app) => {
//   const router = app.Router();

//   router.post(
//     "/register",
//     [
//       body("username")
//         .notEmpty()
//         .isLength({ min: 4, max: 20 })
//         .custom(async (value) => {
//           let userData = await user.findOne({
//             where: {
//               username: value,
//             },
//           });

//           if (userData) {
//             throw new Error("Username has been registered!");
//           }
//         }),
//       body("email")
//         .notEmpty()
//         .isEmail()
//         .custom(async (value) => {
//           let emailData = await user.findOne({
//             where: {
//               email: value,
//             },
//           });

//           if (emailData) {
//             throw new Error("email has been registered!");
//           }
//         }),
//       body("password").notEmpty().isLength({ min: 6, max: 20 }),
//       body("firstName").notEmpty(),
//       body("lastName").notEmpty(),
//       body("classes")
//         .notEmpty()
//         .custom(async (values) => {
//           const classList = ["X", "XI", "XII", "XII"];
//           const isValid = classList.includes(values);
//           if (!isValid) {
//             throw new Error("classes is not registered!");
//           }
//         }),
//       body("major_id")
//         .notEmpty()
//         .custom(async (values) => {
//           let majorData = await major.findByPk(values);
//           if (!!majorData == false) {
//             throw new Error("major is not registered!");
//           }
//         }),
//       body("gender")
//         .notEmpty()
//         .custom(async (values) => {
//           const genderList = ["M", "F"];
//           const isValid = genderList.includes(values);
//           if (!isValid) {
//             throw new Error("gender is not registered!");
//           }
//         }),
//     ],
//     auth_ctrl.save
//   );

//   return router;
// };