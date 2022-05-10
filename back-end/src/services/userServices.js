const crypto = require('crypto-js');
const { user } = require('../database/models');

const findUserByEmail = async (email) => {
  try {
    const getUser = await user.findOne({ where: { email } });

    if (!getUser) {
      return false;
    }

    return getUser;
  } catch (err) {
    console.log(err);
  }
};

const findUserByName = async (name) => {
  try {
    const getUser = await user.findOne({ where: { name } });

    if (!getUser) {
      return false;
    }

    return getUser;
  } catch (err) {
    console.log(err);
  }
};

const findUserByID = async (id) => {
  try {
    const getUser = await user.findByPk(id);

    if (!getUser) {
      return false;
    }

    return getUser;
  } catch (err) {
    console.log(err);
  }
};

const createUser = async (name, email, password, role = 'customer') => {
  try {
    const encryptedPass = crypto.MD5(password).toString();

    const newUser = await user.create({ name, email, password: encryptedPass, role });

    if (!newUser) {
      return false;
    }
    
    return newUser;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { findUserByEmail, createUser, findUserByName, findUserByID };