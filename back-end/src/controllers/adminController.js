const { StatusCodes } = require('http-status-codes');
const adminServices = require('../services/adminServices');

const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    
    const data = await adminServices.createUser(name, email, password, role);

    if (!data) {
      return res.status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Unable to create user. Verify typed data and try again ' });
    }

    return res.status(StatusCodes.CREATED).json({ data });
  } catch (err) {
    console.log(err);
}
};

module.exports = { createUser };