const express = require('express')
const {createItem,getAllItems, getItems, updateItem, deleteItem} = require('./items.controller')
const {uploadFile} = require('../../utils/multer')
const {itemValidator} = require('./middlewares/items.validator')


const itemRouter = express.Router()


itemRouter.get('/', getAllItems)
itemRouter.get('/:id', getItems)
itemRouter.post('/', uploadFile.single('image'), itemValidator, createItem)
itemRouter.put('/:id', uploadFile.single('image'), updateItem)
itemRouter.delete('/:id', deleteItem)

module.exports = {itemRouter}

