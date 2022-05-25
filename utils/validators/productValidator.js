const slugify = require('slugify');
const { check, body } = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');
// const Category = require('../../models/categoryModel');
// const SubCategory = require('../../models/subCategoryModel');

exports.createProductValidator = [
  check('name')
    .isLength({ min: 3 })
    .withMessage('must be at least 3 chars')
    .notEmpty()
    .withMessage('Product name required'),
  check('amount')
    .notEmpty()
    .withMessage('Product amount is required')
    .isNumeric()
     .withMessage('Product amount must be a number'),

  check('price')
    .notEmpty()
    .withMessage('Product price is required')
    .isNumeric()
    .withMessage('Product price must be a number')
    .isLength({ max: 32 })
    .withMessage('To long price'),

    check('colors')
    .optional()
    .isArray()
    .withMessage('availableColors should be array of string'),

    check('size')
    .notEmpty()
    .isArray()
    .withMessage('availableSizes should be array of string'),

    check('season')
    .optional()
    .isArray()
    .withMessage('availableSeasons should be array of string'),

  check('imageSrc')
  .notEmpty()
  .withMessage('Product imageSrc is required'),


  check('rate')
    .optional()
    .isNumeric()
    .withMessage('rate must be a number'),

  validatorMiddleware,
];

exports.getProductValidator = [
  check('id').isMongoId().withMessage('Invalid ID formate'),
  validatorMiddleware,
];

exports.updateProductValidator = [
  check('id').isMongoId().withMessage('Invalid ID formate'),
  body('name')
    .optional(),
  validatorMiddleware,
];

exports.deleteProductValidator = [
  check('id').isMongoId().withMessage('Invalid ID formate'),
  validatorMiddleware,
];
