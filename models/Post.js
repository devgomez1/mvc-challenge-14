const { Sequelize, Model, Datatypes } = require("sequelize");
const sequelize = require("../config/config");

class Post extends Model {}

Post.init(
  {
    title: Datatypes.STRING,
    body: Datatypes.STRING,
  },
  {
    sequelize,
  }
);

module.exports = Post;
