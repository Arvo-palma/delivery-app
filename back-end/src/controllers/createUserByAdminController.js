const { createUserByAdmin, findUserByAdmin } = require('../services');

const CREATED = 201;
const INTERNAL_SERVER_ERROR = 500;
const CONFLICT = 409;

module.exports = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await findUserByAdmin(name, email);

    if (user) {
      return res.status(CONFLICT).json({ message: 'Usuário encontrado' });
    }

    const createdUser = await createUserByAdmin({ name, email, password, role });

    if (!createdUser) {
      return res.status(INTERNAL_SERVER_ERROR).json({ message: 'User creation problem' });
    }

    return res.status(CREATED).json(createdUser);
  } catch (error) {
    console.log(error);
  }
};