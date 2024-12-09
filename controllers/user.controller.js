const { User } = require("../models");

const register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  let errors = [];

  if (password !== confirmPassword) {
    errors.push({ msg: "Passwords do not match" });
  }

  if (password.length < 6) {
    errors.push({ msg: "Password must be at least 8 characters" });
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
    res.redirect("pages/login");
  } catch (error) {
    errors.push({ msg: error.message });
    res.render("pages/register", {
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
    res.status(400).json({ error: error.message });
  }
};

const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session");
    }
    res.redirect("/");
  });
};

module.exports = { register, login, logout };
