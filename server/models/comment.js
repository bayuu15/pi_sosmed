'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  comment.init(
    {
      id: {
        // post_id: DataTypes.UUID,
        allowNull:false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: uuidv4,
      },
      content_text_comment: DataTypes.STRING,
      content_image_comment: DataTypes.STRING,
      user_id: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};