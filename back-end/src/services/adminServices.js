const userServices = require('./userServices');

const createUser = async (name, email, password, role) => {
  try {
    const newUser = await userServices.createUser(name, email, password, role);

    return newUser;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createUser };