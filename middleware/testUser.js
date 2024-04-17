const { BadRequestError } = require("../errors");

module.exports = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError("Demo user. Read only!");
  }
  next();
};
