const User = require("../models/userModel");

// GET all users or get by id
exports.getUsers = (req, res) => {
    const id = req.query.id;

    if (id) {
        User.getById(id, (err, data) => {
            if (err) return res.status(500).json(err);

            if (data.length === 0) {
                return res.status(404).json({ message: "User not found" });
            }

            res.json(data[0]);
        });
    } else {
        User.getAll((err, data) => {
            if (err) return res.status(500).json(err);
            res.json(data);
        });
    }
};

exports.createUser = (req, res) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
    };

    User.create(newUser, (err, data) => {
        if (err) return res.status(500).json(err);

        res.json({
            message: "User created",
            id: data.insertId
        });
    });
};

// UPDATE user
exports.updateUser = (req, res) => {
    const id = req.query.id;

    if (!id) {
        return res.status(400).json({
            message: "User id is required"
        });
    }

    User.getById(id, (err, data) => {
        if (err) return res.status(500).json(err);

        if (data.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const updatedUser = {
            name: req.body.name,
            email: req.body.email,
        };

        User.update(id, updatedUser, (err) => {
            if (err) return res.status(500).json(err);

            res.json({
                message: "User updated successfully"
            });
        });
    });
};

// DELETE user
exports.deleteUser = (req, res) => {
    const id = req.query.id;

    if (!id) {
        return res.status(400).json({
            message: "User id is required"
        });
    }

    User.getById(id, (err, data) => {
        if (err) return res.status(500).json(err);

        if (data.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        User.delete(id, (err) => {
            if (err) return res.status(500).json(err);

            res.json({
                message: "User deleted successfully"
            });
        });
    });
};