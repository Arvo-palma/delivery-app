const { user } = require('../database/models');

module.exports = async (name, email) => {
  const users = await user.findAll();
  const exists = users.some((userInfo) => userInfo.name === name || userInfo.email === email);

  if (exists) return true;

  return false;
};
