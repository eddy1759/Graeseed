const userModel = require('./user')
const logger = require('./Middlewares/logger')


const registerUser = async(req, res) => {
    const userBody = req.body
    try {
        const user = await userModel.create(userBody)
        res.status(201).json({
            status: true,
            msg: "user registered successfully",
        })
    } catch (error) {
        logger.error("An error occurred", error)
    }
}

const login = async(req, res) => {
    const {username, password} = req.body
    try {
        const user = await userModel.findOne({username: username})
        if (!user) {
            return res.status(404).json("username not found")
        }
        const match = await user.comparePassword(password)
        if (!match) {
            return res.status(404).json({
                status: false,
                msg: "Wrong password"
            })
        } 
        res.status(200).json({ 
            status: true, 
            msg: "Logged in succesfully",
            user
        })
    } catch (error) {
        logger.error("An error occurred", error)
    }
}


module.exports = {
    registerUser,
    login
}

