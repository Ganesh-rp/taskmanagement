const project = require("../model/project.model");
const dao = require("../dao/base.dao");
const response = require("../utils/response");

exports.createProject = async (req) => {
  let result = await dao.create(project, req);
  if (!result) {
    return response.badRequest();
  }
  return response.success(result);
};

exports.updateProject = async (id, req) => {
  let result = await dao.findOneAndUpdate(project, id, req);
  if (!result) {
    return response.notFound();
  }
  return response.success(result);
};

exports.getAllProject = async () => {
  let result = await dao.findAll(project);
  if (!result) {
    return response.error();
  }
  return response.success(result);
};

exports.deleteProject = async (id) => {
  const body = { isDeleted: true };
  let result = await dao.findOneAndUpdate(project, id, body);
  if (!result) {
    return response.notFound();
  }
  return response.deleted();
};
