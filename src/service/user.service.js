const user = require("../model/user.model");
const dao = require("../dao/base.dao");
const response = require("../utils/response");



exports.createUser = async (req) => {
  let createUser = await dao.create(user, req);
  if (!createUser) {
    return response.badRequest();
  }
  return response.success(createUser);
};

exports.loginUser = async (req) => {
  let loginUser = await dao.findOne(user, req)
  if(loginUser) {
    if(loginUser.password === req.password) {
      return response.success(loginUser)
    } else {
      return response.error('invalid credendials')
    }
  } else {
    return response.error('Email is not registered')
  }
}



