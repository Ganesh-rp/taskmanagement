const userService = require("../service/user.service");


exports.createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(user.statusCode).json(user);
};

exports.loginUser = async (req, res) => {
  const user = await userService.loginUser(req.body);
  res.status(user.statusCode).json(user)
}


