'use strict';
var express = require('express');
var router = express.Router();
var userModel = require('../models/user');
router.get('/user', function (req, res, next) {
    userModel.find({}, function (err, users) {
        if (err) {
            res.send('error');
            next()
        }
        if (req.isAuthenticated()) {
            console.log(users);
            res.render("users", { users: users });
        } else {
            res.redirect('/login')
        }
    });
});
module.exports = router;
