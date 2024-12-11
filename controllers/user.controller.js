const { User } = require("../models");

const register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  let errors = [];

  if (!name || !email || !password || !confirmPassword) {
    errors.push({ msg: "Please fill out all fields" });
  }

  if (password.length < 8) {
    errors.push({ msg: "Password must be at least 8 characters" });
  }

  if (password !== confirmPassword) {
    errors.push({ msg: "Passwords do not match" });
  }

  if (errors.length > 0) {
    return res.render("pages/register", {
      errors,
      name,
      email,
    });
  }

  try {
    await User.register(name, email, password);
    res.redirect("/login");
  } catch (error) {
    errors.push({ msg: error.message });
    res.render("/register", {
      errors,
      name,
      email,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    req.session.user = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    res.redirect("/");
  } catch (error) {
    res.status(401).json({ error: "Invalid email or password" });
  }
};

module.exports = { register, login };
