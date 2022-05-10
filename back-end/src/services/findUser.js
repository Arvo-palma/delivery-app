const crypto = require('crypto-js');

const { user } = require('../database/models');

module.exports = async (email, password) => {
  const searchedUser = await user.findOne({ where: { email } });
  const encryptedPass = crypto.MD5(password).toString();

  if (searchedUser && searchedUser.password === encryptedPass) {
    return searchedUser;
  }
  return false;
};
