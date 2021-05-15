const User = require("../models").User
import jwt from "jsonwebtoken"

exports.getUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({where: {id}});

  if (!user) {
    return res.status(400).send({message: `User with id ${id} not found.`})
  }

  return res.send(user)
}

exports.getUsers = async (req, res) => {
  const users = await User.findAll({order: ["id"]});

  if (!users) {
    return res.status(400).send({
      message: "No users found."
    });
  }

  return res.send(users)
}

exports.registerUser = async (req, res) => {
  const {email, password} = req.body;

  if (!email || !password) {
    return res.status(400).send({message: "You need to include a username & password to create an account."});
  }

  let userAlreadyExists = await User.findOne({where: {email}})

  if (userAlreadyExists) {
    return res.status(400).send({message: "User already exists."});
  }

  try {
    let newUser = await User.create({email, password});
    return res.send(newUser)
  } catch (error) {
    return res.status(500).send({message: `Error ${error.message}`})
  }
}

exports.loginUser = async (req, res) => {
  const {email, password} = req.body;

  const userWithEmail = await User.findOne({where: {email}})

  if (!userWithEmail) {
    return res.send({message: "Email or password does not match."});
  }

  if (userWithEmail.password !== password) {
    return res.send({message: "Email or password does not match."});
  }

  const jwtToken = jwt.sign({
        id: userWithEmail.id,
        email: userWithEmail.email
      },
      process.env.JWT_SECRET
  );

  res.send({message: "Welcome Back!", token: jwtToken })
}