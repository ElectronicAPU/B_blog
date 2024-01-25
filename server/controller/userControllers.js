// @desc    Login user & get token
// @route   POST/ api/users/login
// @access  Public
const loginUser = (req, res) => {
res.json('login a user');
};

// @desc    Register a user
// @route   POST/ api/users
// @access  Public
const registerUser = (req, res) => {
res.json('register a user');
};

module.exports = { loginUser, registerUser };
