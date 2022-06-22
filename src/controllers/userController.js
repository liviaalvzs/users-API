const users = require('../mocks/users')

module.exports = {
    listUsers(request, response){
        const { order } = request.query;
        const sortedUsers = users.sort((a, b) => {
            if (order === 'desc') {
                return a.id < b.id ? 1 : - 1;
            }
            return a.id > b.id ? 1 : -1 ;
            
        });
        
        response.send(200, sortedUsers);
    },
    getUserById(request, response){
        const { id } = request.params;
        const user = users.find((user) => user.id == id);
        
        if (!user){
            response.send(400, {error: 'user not found'});
        }else{
            response.send(200, user);
        }
        
        
    }
};
