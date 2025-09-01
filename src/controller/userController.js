
const userModel = require('../model/userModel');

//Controlador para listar todos os usuarios
const getAllUsers = (req, res) => {
    const users = userModel.findAll();
    res.status(200).json(users); 
}

const getUserById = (req, res) => {
    const users = userModel.findById();
    res.status(200).json(users);
}

module.exports = {
    getAllUsers,
    getUserById
}