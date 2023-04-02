const Joi = require('joi')


const bookAddSchema = Joi.object({
    title: Joi.string()
        .min(5)
        .max(255)
        .trim()
        .required(),
    author: Joi.string()
        .max(255)
        .trim()
        .required(),
    year: Joi.number()
        .integer()
        .required()
        .max(2023),
    genre: Joi.string()
        .max(255)
        .trim()
        .required(),
    price: Joi.number()
        .min(0)
        .required()
})

const bookUpdateSchema = Joi.object({
    title: Joi.string()
        .min(5)
        .max(255)
        .trim(),
    author: Joi.string()
        .max(255)
        .trim(),
    year: Joi.number()
        .integer()
        .max(2023),
    genre: Joi.string()
        .max(255)
        .trim(),
    price: Joi.number()
        .min(0)
})

async function AddBookValidationMW(req, res, next) {
    const bookPayLoad = req.body

    try {
        await bookAddSchema.validateAsync(bookPayLoad)
        next()
    } catch (error) {
        next({
            message: error.message,
            status: 400
        })
    }
}

async function UpdateBookValidationMW(req, res, next) {
    const bookPayLoad = req.body

    try {
        await bookUpdateSchema.validateAsync(bookPayLoad)
        next()
    } catch (error) {
        next({
            message: error.message,
            status: 400
        })
    }
}


module.exports = {
    AddBookValidationMW,
    UpdateBookValidationMW
}
