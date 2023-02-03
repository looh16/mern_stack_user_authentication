const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser)
          return res
            .status(200)
            .send({ success: false, message: "User Already Registered" });

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;

        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send({ success: true, message: "User Registed SUccessfully" })

    } catch (error) {
        res.status(400).send(error);
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        });
        if (user) {
            res.status(200).send({ success: true, message: "User Login SUccessfully", data: user })
        } else {
            res.status(200).send({ success: true, message: "User Login Failed", data: null })
        }

    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router


