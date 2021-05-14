const User = require("../models").User

exports.getUsers = async (req, res) => {
  const users = await User.findAll({ order: ["id"]});

  if(!users) {
    return res.status(400).send({
      message: "No users found."
    });
  }

  return res.send(users)
}