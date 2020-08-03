const connection = require('../../database/connection');

module.exports = {
    async listAllMb(){
        const mb = await connection('mother_boards')
        .select('*').
        then(function(rows){
            if(rows){
                return rows;
            }else{
                return 0;
            }
        })
        .catch(function(error){
            return error;
        });

        return mb;
    },

    async hasMbByName(model){
        const mb = await connection('mother_boards')
        .select('*')
        .where({
            model:model
        })
        .then(function(row){
            if(row[0]){
                return 1;
            }else{
                return 0;
            }
        })
        .catch(function(error){
            return error;
        });

        return mb;
    },

    async findMbById(id){
        const mb = await connection('mother_boards')
        .select('*')
        .where({
            id:id
        })
        .then(function(row){
            if(row){
                return row;
            }else{
                return 0;
            }
        }).catch(function(error){
            return error;
        });

        return mb;
    },

    async findMbByTitle(mother_board){
        const mb = await connection('mother_boards')
        .select('*')
        .where({
            title: mother_board
        }).then(function(rows){
            if(rows){
                return rows[0];
            }else{
                return 0;
            }
        }).catch(function(error){
            return error;
        });

        return mb;
    },

    async storeMb(request){
        const mb = await connection('mother_boards')
        .insert({
            user_id: request.user_id,
            title: request.title,
            brand_name: request.brand_name,
            model: request.model,
            chipset: request.chipset,
            socket: request.socket,
            memory_compatibility: request.memory_compatibility,
            form_factor: request.form_factor,
            max_tdp: request.max_tdp
        }).then(function(row){
            if(row){
                return 1;
            }else{
                return 0;
            }
            
        }).catch(function(error){
            console.error(error);
            return error;
        });

        return mb;
    },

    async updateMb(id, request){
        const mb = await connection('mother_boards')
        .update({
            title: request.title,
            brand_name: request.brand_name,
            model: request.model,
            chipset: request.chipset,
            socket: request.socket,
            memory_compatibility: request.memory_compatibility,
            form_factor: request.form_factor,
            max_tdp: request.max_tdp
        })
        .where({
            id:id
        })
        .then(function(row){
            if(row){
                return 1;
            }else{
                return 0;
            }
        }).catch(function(error){
            return error;
        });

        return mb;
    },

    async deleteMb(id){
        const mb = await connection('mother_boards')
        .del()
        .where({
            id:id
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

        return mb;
    },
}