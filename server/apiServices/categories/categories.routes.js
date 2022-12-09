const express = require('express')
const {createCategory, getAllCategories, getCategory, deleteCategory} = require('./categories.controller')

const categoryRouter = express.Router()

categoryRouter.get('/',  getAllCategories)
categoryRouter.get('/:id', getCategory)
categoryRouter.post('/', createCategory)
categoryRouter.delete('/:id', deleteCategory)

module.exports = {categoryRouter}