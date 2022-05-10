const { updateStatus } = require('../services');

const INTERNAL_SERVER_ERROR = 500;
const OK = 200;

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedStatus = await updateStatus(id);

    if (!updatedStatus) {
      return res.status(INTERNAL_SERVER_ERROR).json({ message: 'Update problem' });
    }

    return res.status(OK).json({ message: 'Updated status' });
  } catch (error) {
    console.log(error);
  }
};