const projectService = require("../service/project.service");



exports.createProject = async (req, res) => {
  const project = await projectService.createProject(req.body);
  res.status(project.statusCode).json(project);
};

exports.updateProject = async (req, res) => {
  const project = await projectService.updateProject(req.params.id, req.body);
  res.status(project.statusCode).json(project);
};


exports.getAllProject = async (req, res) => {
  const project = await projectService.getAllProject();
  res.status(project.statusCode).json(project);
};


exports.deleteProject = async (req, res) => {
  const project = await projectService.deleteProject(req.params.id);
  res.status(project.statusCode).json(project);
};
