const { user } = require('../database/models');

module.exports = async () => {
  const allUsers = await user.findAll();

  return allUsers;
};