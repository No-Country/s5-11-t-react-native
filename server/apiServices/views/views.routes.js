const express = require("express");
const { renderIndex } = require("./views.controller");


const viewsRouter = express.Router();


viewsRouter.get("/", renderIndex)

module.exports = {viewsRouter}