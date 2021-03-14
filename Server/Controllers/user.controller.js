const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./../Models/user.model');
const SECRET_KEY = './../config';

const create = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    return res
      .status(409)
      .send({ error: '409', message: 'User already exist' });
  }
  try {
    if (password === '') throw new Error();
    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({ ...req.body, password: hash });
    const { _id } = await newUser.save();
    const accessToken = jtw.sign({ _id }, SECRET_KEY);
    res.statue(201).send({ accessToken });
  } catch (error) {
    res.status(400).send({ error, message: 'Could not create user' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    const validatePass = await bcrypt.compare(password, user.password);
    if (!validatePass) throw new Error();
    const accessToken = jtw.sign({ _id }, SECRET_KEY);
    res.status(200).send({ accessToken });
  } catch (error) {
    res.status(401).send({ error, message: 'Resource not found' });
  }
};

const profile = async (req, res) => {
  try {
    const { _id, firstName, lastName } = req.user;
    const user = { _id, firstName, lastName };
    res.status(200).send(user);
  } catch {
    res.status(404).send({ error, message: 'Resource not found' });
  }
};

const logout = (req, res) => {
  // delete the token client side upon logout.
  // you would invalidate the token here.
};

module.exports = { create, login, profile, logout };
