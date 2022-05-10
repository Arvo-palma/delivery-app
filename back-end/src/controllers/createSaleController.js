const { createSale } = require('../services');

const INTERNAL_SERVER_ERROR = 500;
const CREATED = 201;

module.exports = async (req, res) => {
  try {
    const { sale } = req.body;
    const created = await createSale(sale);
    if (!created) return res.status(INTERNAL_SERVER_ERROR).json({ message: 'Sale not created' });
    return res.status(CREATED).json(created);
  } catch (error) {
    console.log(error);
  }
};