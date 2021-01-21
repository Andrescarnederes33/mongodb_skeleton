const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.get('/:id', async (req, res) => {
    const users = await User.findById(req.params.id);
    res.json(users);
});

router.post("/", async (req, res) => {
    const { name, age } = req.body;
    const users = new User({ name, age });
    await users.save();
    res.json({ status: "User saved" });
});

router.put("/:id", async (req, res) => {
    const { name, age } = req.body;
    const newUser = { name, age };
    await User.findByIdAndUpdate(req.params.id, newUser);
    res.json({ status: "User updated" });
});

router.delete('/:id', async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({ status: 'User Deleted' });
});


module.exports = router;