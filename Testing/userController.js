const User = require('./models/User')



// Create user
const createUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
  
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }
  
        user = new User({ username, email, password });

        await user.save();
        res.status(201).json({ 
            status: true,
            msg: 'User registered successfully',
            
         });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};


const login = async (req, res) => {
    const {username, password} = req.body
    const user = await User.findOne({ username: username });
    if (!user) {
        return res.status(401).json({ 
            message: 'Invalid username or password' 
        });
    }
    const validPassword = user.password == password
    if (!validPassword) {
        return res.status(401).json({ 
            message: 'Invalid username or password' 
        });
    }
    // const token = jwt.sign({ userId: user._id }, 'secret');
    delete user.password
    res.status(200).json({ 
        msg: 'Login successful',
        user: user });;
};

module.exports = {
    createUser,
    login
}