const jwt = require('jsonwebtoken');
const fs = require('fs');

const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf8').trim();

const JWT_CONFIG = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  const token = jwt.sign(payload, SECRET, JWT_CONFIG);

  return token;
};

module.exports = { generateToken };