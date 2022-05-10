const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf8').trim();

const jwtValidation = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Token não encontrado' });
    }

    jwt.verify(authorization, SECRET, (err) => {
      if (err) {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .json({ message: 'Token inválido' });
      }
      next();
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { jwtValidation };
