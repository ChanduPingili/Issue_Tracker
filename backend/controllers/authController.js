const user = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'abhishek@12';
const { hashPassword, comparePassword } = require('../helpers/auth');

const test = (req, res) => {
    res.json("working");
};

const registerUser = async (req, res) => {
    try {
        const { orgId, orgName, orgEmail, orgPassword, serviceIds } = req.body;

        if (!orgId) {
            return res.status(400).json({ error: "orgId is required" });
        }
        if (!orgName) {
            return res.status(400).json({ error: "orgName is required" });
        }
        if (!orgPassword || orgPassword.length < 6) {
            return res.status(400).json({ error: "Password is required and should be at least 6 characters long" });
        }
        if (!serviceIds || serviceIds.length === 0) {
            return res.status(400).json({ error: "serviceIds is required" });
        }

        const existingUser = await user.findOne({ orgEmail });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }

        const hashedPassword = await hashPassword(orgPassword);
        const newUser = await user.create({
            orgId,
            orgName,
            orgEmail,
            orgPassword: hashedPassword,
            serviceIds
        });

        const token = jwt.sign({ orgEmail, orgId }, SECRET_KEY, { expiresIn: '1h' });
        return res.status(201).json({
            success: true,
            user: newUser,
            token
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
};

const loginUser = async (req, res) => {
    try {
        const { orgEmail, orgPassword } = req.body;

        const User = await user.findOne({ orgEmail });
        if (!User) {
            return res.status(400).json({ error: "User not found" });
        }

        const match = await comparePassword(orgPassword, User.orgPassword);
        if (!match) {
            return res.status(400).json({ error: "Password is incorrect" });
        }

        const token = jwt.sign({ orgEmail, orgId: User.orgId }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({
            success: true,
            user: User,
            token
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
};

module.exports = { test, registerUser, loginUser };
