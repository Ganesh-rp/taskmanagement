const router = require("express").Router();
const projects = require("../controller/project.controller");

// Create a new Project
router.post("/", projects.createProject);

// Update a Project  by id
router.put("/:id", projects.updateProject);

// Get all Projects
router.get("/", projects.getAllProject);

// Delete a Project by id
router.delete("/:id", projects.deleteProject);

module.exports = router;
