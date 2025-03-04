const express = require('express');
const { userServices } = require('../service');
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send(userServices.getAllUsers());
});

userRouter.post('/', (req, res) => {
    const payload = req.body;
    res.send(userServices.createUser(payload));
});

userRouter.put('/:id', (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    res.send(userServices.updatedUser(id, payload));
});

userRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.send(userServices.deleteUser(id));
});

module.exports = userRouter;