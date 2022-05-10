const { StatusCodes } = require('http-status-codes');
const userServices = require('../services/userServices');
const { generateToken } = require('../services/tokenServices');

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await userServices.createUser(name, email, password);

    if (!newUser) {
      return res.status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Unable to create user. Verify typed data and try again ' });
    }

    const token = generateToken({ email, password });

    return res.status(StatusCodes.CREATED).json({ token });
  } catch (err) {
    console.log(err);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = generateToken({ email, password });

    const { dataValues: { id, name, email: userEmail, role } } = await userServices
      .findUserByEmail(email);

    return res.status(StatusCodes.OK)
      .json({ token, userInfo: { id, name, email: userEmail, role } });
  } catch (err) {
    console.log(err);
  }
};

const getUserByID = async (req, res) => {
  try {
    const { id } = req.params;

    const findUser = await userServices.findUserByID(id);
    return res.status(StatusCodes.OK).json({ user: findUser });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createUser, loginUser, getUserByID };