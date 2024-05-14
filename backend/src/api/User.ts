const express = require('express');
const router = express.Router();

// Mongoose user model
const User = require('../models/User');

// Password handler
const bcrypt = require('bcrypt');

// Signup
router.post('/signup', (req, res) => {
    let {email, password} = req.body;
    email = email.trim();
    password = password.trim();

    if (!email || !password) {
        return res.status(400).json({message: 'Invalid email or password!'});
    } else if (password.length < 6) {
        return res.status(400).json({message: 'Password must be at least 6 characters!'});
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({message: 'Invalid email!'});
    } else {
        // Check if user already exists
        user.find({ email }).then(result => {
            // Handle the result
            if (result && result.length > 0) {
                // User already exists
                return res.status(400).json({message: 'User already exists!'});
            } else {
                // Try to crete new user

                // password handling
                const saltRounds = 10;
                bcrypt.hash(password, saltRounds)
                    .then((hashedPassword: string) => {
                        const newUser = new User({
                            email,
                            password: hashedPassword
                        });

                        newUser.save().then(result => {
                            return res.status(201).json({message: 'User created successfully!',
                                data: result,
                            });
                        })
                        .catch((err: Error) => {
                            console.log(err);
                            return res.status(500).json({message: 'An error occurred while saving user!'});
                        });
                    })
                    .catch((err: Error) => {
                        console.log(err);
                        return res.status(500).json({ message: 'An error occurred while hashing password!' });
                    });
            }
        })
        .catch((err: Error) => {
            console.log(err);
            return res.status(500).json({ message: 'Internal server error!' });
        });
    }
});


// Signin
router.post('/signin', (req, res) => {
    1
});

module.exports = router;