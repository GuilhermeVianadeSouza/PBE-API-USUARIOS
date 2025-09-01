
const userModel = require('../model/userModel');

//Controlador para listar todos os usuarios
const getAllUsers = (req, res) => {
    const users = userModel.findAll();
    res.status(200).json(users); 
}

//Metodo do controlador para obter um usuário por id
const getUserById = (req, res) => {
    
    //Pegando o id que foi enviado na requisicao
    const id = parseInt(req.params.id);

    //chamando o metodo findByID do userModel
    const user = userModel.findById(id);
    
    if(user){
        //Responder com status code de 200 (Sucesso!)
        //e devolver os dados do usuário em formato Json
        res.status(200).json(user);
    } else {
        res.status(404).json({mensagem: 'Erro ao encontrar o usuário, usuário não encontrado.'});
    }
};

//Método do controlador para criar um novo usuário
const createUser = (req, res) => {

    //Pegando os dados que foram enviados pelo Body(Corpo) da Requisição
    const {name, email} = req.body;

    //Validar se foram enviados
    if (!name || !email){
        return res.status(400).json({mensagem: 'Nome e Email são obrigatórios.'});
    } else {
        const newUser = userModel.create({name, email});
        res.status(201).json(newUser);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
};