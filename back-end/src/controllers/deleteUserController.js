const { deleteUser } = require('../services');

const OK = 200;
const NOT_FOUND = 404;

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUser(id);

    if (!deletedUser) {
      return res.status(NOT_FOUND).json({ message: 'User not found' });
    }

    return res.status(OK).json({ message: 'User deleted' });
  } catch (error) {
    console.log(error);
  }
};