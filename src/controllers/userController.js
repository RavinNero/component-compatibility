const connection = require('../../database/connection');
const userRepo = require('../repositories/userRepository');
const userServ = require('../services/userServices');

module.exports = {
    async index(request, response){
        const users = await userRepo.listAllUsers();
        
        return response.json(users); 
    },

    async show(request, response){
        const user = await userRepo.findUserById(request.params.id);

        return response.json(user);
    },

    async store(request, response){
        const {name, email, password, city, uf} = request.body;

        let user = await userRepo.hasUserByEmail(email);

        if(user == true){
            return response.json({status: "Email já cadastrado"});
        }

        let userStored = await userRepo.storeUser(name, email, password, city, uf);

        if(userStored == false){
            return response.json({status: "ERRO"});
        }
    
        return response.json(userStored);
        
    },
    
    async update(request, response){
        const user = await userRepo.updateUser(request.params.id, request.body);

        if(!user){
            return user;
        }
        
        return response.json(user);
    },

    async delete(request, response){
        const user = await userRepo.deleteUser(request.params.id);

        return response.json(user);
    },
}