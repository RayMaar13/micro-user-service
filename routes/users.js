const express = require('express');
const router = express.Router();

const usersHandler = require("./handler/users");
/* GET users listing. */
router.get('/', usersHandler.getUsers);
router.post('/register', usersHandler.register);
router.post('/login', usersHandler.login);
router.post('/logout', usersHandler.logout);
router.get('/:id', usersHandler.getUser);
router.put('/:id', usersHandler.update);

module.exports = router;
