
// Simulação de um banco de dados em memória
let users = [
    {id:1, name: 'Alice', email: 'alice@gmail.com'},
    {id:2, name: 'Oswald', email: 'oswald@gmail.com'},
    {id:3, name: 'Noé', email: 'noe@gmail.com'}
];

// Função para buscar todos os usuários
const findAll = () => {
    return users;
} 

// Função para buscar um usuário por ID
const findById = (id) => {
    return users.find(user => user.id === id);
}

//Função que adiciona um novo usuário
const create = (newUser) => {
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    const userWithId = {id: newId, ...newUser}
    users.push(userWithId);
    return userWithId
} //... = Spread, Vulgo tu vai pegar de um array objetos e tacar em um outro array sem afetar o array antigos

//Exportar as funções
module.exports = {
    findAll,
    findById,
    create
}