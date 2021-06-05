import bcrypt from "bcrypt";

const User = require("../models").User
import jwt from "jsonwebtoken"

exports.getUser = async (req, res) => {
  const {id} = req.params;
  const user = await User.findOne({where: {id}});

  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (Number(id) !== decoded.id) {
      return res.status(400).send({message: "Unauthorized"})
    } else {
      return res.send(user)
    }
  });
}

exports.getUsers = async (req, res) => {
  const users = await User.findAll({order: ["id"]});

  if (!users.length) {
    return res.status(400).send({message: "No users found."});
  }

  return res.send(users)
}

exports.registerUser = async (req, res) => {
  const {email} = req.body;

  if (!email || !req.body.password) {
    return res.status(400).send({message: "You need to include a username & password to create an account."});
  }

  const salt = await bcrypt.genSalt(10)
  const password = await bcrypt.hash(req.body.password, salt);

  let userAlreadyExists = await User.findOne({where: {email}})

  if (userAlreadyExists) {
    return res.status(400).send({message: "User already exists."});
  }

  try {
    let newUser = await User.create({email, password});
    const jwtToken = jwt.sign({
          id: newUser.id,
          email: newUser.email
        },
        process.env.JWT_SECRET
    );
    res.status(201).send({
      id: newUser.id,
      email: newUser.email,
      token: jwtToken
    })
  } catch (error) {
    return res.status(500).send({message: `Error ${error.message}`})
  }
}

exports.loginUser = async (req, res) => {
  console.log(req.body)
  const {email} = req.body;

  const user = await User.findOne({where: {email}})

  if (!user) {
    return res.status(401).send({message: "Email or password does not match."});
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password)

  if (!validPassword) return res.status(401).send({message: "Email or password does not match."})

  const jwtToken = jwt.sign({
        id: user.id,
        email: user.email
      },
      process.env.JWT_SECRET
  );

  res.status(200).send({
    id: user.id,
    email: user.email,
    token: jwtToken
  })

}