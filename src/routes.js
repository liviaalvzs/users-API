
const userController = require('./controllers/userController');

module.exports = [
    {
        endpoint: '/users',
        method: 'GET',
        handler: userController.listUsers, // passa só a referência, nao está com '()' então não está executando
    }, 
    {
        endpoint: '/users/:id', //placeholder
        method: 'GET',
        handler: userController.getUserById,
    },
    {
        endpoint: '/users', //placeholder
        method: 'POST',
        handler: userController.createUser,
    },
]