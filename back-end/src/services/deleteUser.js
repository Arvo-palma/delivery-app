const { user } = require('../database/models');

module.exports = async (id) => {
  try {
    const deletedUser = await user.destroy({
      where: { id },
    });
  
    return deletedUser;
  } catch (error) {
    console.log(error);
    return false;
  }
};