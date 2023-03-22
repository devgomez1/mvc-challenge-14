const { Sequelize, Model, Datatypes } = require("sequelize");
const sequelize = require("../config/config");

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

module.exports = Comment;
