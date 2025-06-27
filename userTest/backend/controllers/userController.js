const User = require("../models/userModel");

const addUser = async (req, res) => {
  const user = req.body;
  console.log(req.body);
  if (!user.username || !user.password) {
    return res
      .status(400)
      .json({ error: "Username and password are required." });
  }

  try {
    const response = await User.create({
      username: user.username,
      password: user.password,
    });
    res.status(201).json({ user: response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = addUser;
