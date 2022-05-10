const { StatusCodes } = require('http-status-codes');
const crypto = require('crypto-js');

const userServices = require('../services/userServices');

const userAlreadyExists = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    const getUserByEmail = await userServices.findUserByEmail(email);
    const getUserByName = await userServices.findUserByName(name);

    if (getUserByEmail || getUserByName) {
      return res.status(StatusCodes.CONFLICT).json({ message: 'User already exists' });
    }

    next();
  } catch (err) {
    console.log(err);
  }
};

const userNotFound = async (req, res, next) => {
  try {
    const { email } = req.body;

    const findUser = await userServices.findUserByEmail(email);

    if (!findUser) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'User not found in database' });
    }

    next();
  } catch (err) {
    console.log(err);
  }
};

const passwordsDoesntMatch = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const encryptedPass = crypto.MD5(password).toString(crypto.enc.Hex);  

    const { dataValues: { password: userPassword } } = await userServices.findUserByEmail(email);

    if (encryptedPass !== userPassword) {
      return res.status(StatusCodes.FORBIDDEN).json({ message: 'Incorrect Password' });
    }

    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  userAlreadyExists,
  userNotFound,
  passwordsDoesntMatch,
};
