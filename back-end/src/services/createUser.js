const crypto = require('crypto-js');

const { user } = require('../database/models');

module.exports = async (name, email, password) => {
  const encryptedPass = crypto.MD5(password);

  const newUser = await user.create({ name, email, password: encryptedPass, role: 'customer' });

  if (!newUser) {
    return false;
  }

  return true;
};
