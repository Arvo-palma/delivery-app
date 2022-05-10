const { getUsers } = require('../services');

const OK = 200;

module.exports = async (_req, res) => {
  try {
    const allUsers = await getUsers();

    return res.status(OK).json(allUsers);
  } catch (error) {
    console.log(error);
  }
};