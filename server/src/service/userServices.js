const { v4: uuidv4 } = require('uuid');
const { NotFoundError } = require('../errors');

const users = [

    {
        "_id": "dfc1e13f-bc4d-445b-858f-b16e9c552523",
        "name": "John Doe",
        "email": "johndoe@example.com",
        "age": 30,
        "role": "Admin"
    },
    {
        "_id": "dbb00ffe-83d1-4be5-9f4b-8d76e797c7d7",
        "name": "Jane Smith",
        "email": "janesmith@example.com",
        "age": 28,
        "role": "Editor"
    },
    {
        "_id": "388237b5-332c-4578-8b18-3c7901934c90",
        "name": "Alice Johnson",
        "email": "alicejohnson@example.com",
        "age": 25,
        "role": "Viewer"
    },
    {
        "_id": "a5248219-0a28-429c-aea7-4c6ebdd7afcf",
        "name": "Bob Brown",
        "email": "bobbrown@example.com",
        "age": 35,
        "role": "Moderator"
    }
];

const getAllUsers = () => users;

const createUser = (userPayload) => {
    const newUser = { _id: uuidv4(), ...userPayload };
    users.unshift(newUser);
    return newUser;
}

const updatedUser = (id, payload) => {
    const updatedUserIndex = users.findIndex((user) => user._id === id);

    if (updatedUserIndex === -1) {
        throw new NotFoundError(` No user with id ${id}`);
    }

    users[updatedUserIndex] = { ...users[updatedUserIndex], ...payload };
    return users[updatedUserIndex];
}

const deleteUser = (id) => {
    const deleteUserIndex = users.findIndex((user) => user._id === id);

    if (deleteUserIndex === -1) {
        throw new NotFoundError(` No user with id ${id}`);
    }

    users.splice(deleteUserIndex, 1);
    return users;
}

module.exports = {
    getAllUsers,
    createUser,
    updatedUser,
    deleteUser,
};