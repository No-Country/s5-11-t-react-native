const { categoryCreated } = require('./categories.model')
const { handleHttpError } = require('../../utils/handleError')
const { projection } = require('../../utils/utils')

const createCategory = async (req, res) => {
  try {
    const newCategory = new categoryCreated(
      req.body
    )

    const created = await newCategory.save()

    res.status(200).json(
      created
    )

  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_CATEGORY', 500)

  }
}

const getAllCategories = async (req, res) => {
  try {

    const getCategories = await categoryCreated.find({}, projection)
      .populate('items')
      .populate({
        path: 'items',
        populate: {
          path: 'item',
          select: projection
        }
      })

    res.status(200).json(
      getCategories
    )

  } catch (error) {
    handleHttpError(res, 'ERROR_GET_CATEGORIES', 500)
  }
}


const getCategory = async (req, res) => {
  try {
    const { id } = req.params

    const category = await categoryCreated.findById(id, projection)
      .populate('items')
      .populate({
        path: 'items',
        populate: {
          path: 'item',
          select: projection
        }
      })

    if (!category) {
      handleHttpError(res, 'ERROR_FOUND_CATEGORY')
    }

    res.status(200).json({
      message: 'Category found',
      category
    })

  } catch (error) {
    handleHttpError(res, 'ERROR_GET_CATEGORY', 500)
  }
}

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params

    const category = await categoryCreated.findByIdAndDelete(id)

    if (!category) {
      handleHttpError(res, 'CATEGORY_NOT_FOUND')
    }

    res.status(200).json({
      message: 'Category deleted',
      id
    })

  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_CATEGORY')
  }
}


module.exports = { createCategory, getAllCategories, getCategory, deleteCategory }