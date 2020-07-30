const connection = require('../../database/connection');

module.exports = {
    async hasUserById(id){
        const line = await connection('users')
        .select('*')
        .where({
            id: id,
        }).then(function(row){
            if(row){
                return 1;
            }else{
                return 0;
            }
        }).catch(function(error){
            console.log(error);
            return 0;
        }); 

        return line;
    },

    async hasUserByEmail(email){
        const user = await connection('users')
        .select('*')
        .where({
            email: email
        }).then(function(rows){
            if(rows[0]){
                return 1;
            }else{
                return 0;
            }
        })
        .catch(function(error) { 
            return 0;
        });

        return user;
    },

    async findUserById(id){
        const user = await connection('users')
        .select('*')
        .where({
            id:id
        })
        .then(function(row){
            if(row[0]){
                return row[0];
            }else{
                return 404;
            }
        })
        .catch(function(error){
            return error;
        });

        return user;
    },

    async findUserByEmail(email){
        const user = await connection('users')
        .select('*')
        .where({
            email: email
        }).then(function(rows){
            return rows[0];
        })
        .catch(function(error) {
            return error;
        });

        return user;
    },

    async listAllUsers(){
        const users = await connection('users')
        .select('*')
        .then(function(rows){
            return rows;
        })
        .catch(function(error) { 
            return error;
        });

        return users;
    },

    async storeUser(name, email, password, city, uf){
        const response = await connection('users').insert({
            name,
            email,
            password,
            city,
            uf
        }).then(function(rspns){
            if(rspns){
                return 1;
            }else{
                return 0;
            }
        }).catch(function(error){
            return error;
        });

        return response;
    },

    async updateUser(id, request){
        const user = await connection('users')
        .update({
            name: request.name,
            city: request.city,
            uf: request.uf
        })
        .where({
            id: id,
        })
        .then(function(row){
            if(row){
                return 1;
            }else{
                return 0;
            }
        })
        .catch(function(error){
            return error;
        });

        return user;
    },

    async deleteUser(id){
        const user = await connection('users')
        .del()
        .where({
            id:id,
        })
        .then(function(row){
            if(row){
                return 1;
            }else{
                return 0;
            }
        })
        .catch(function(error){
            return error;
        });

        return user;
    },
}
