const { user } = require('../database/models');

module.exports = async (userInfo) => {
  try {
    const createdUser = await user.create(userInfo);

    return createdUser;
  } catch (error) {
    console.log(error);
    return false;
  }
};