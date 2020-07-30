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

    async storeMb(model, chipset){
        const mb = await connection('mother_boards')
        .insert({
            user_id: 1,
            model: model,
            chipset: chipset
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

    async updateMb(id, request){
        const mb = await connection('mother_boards')
        .update({
            model: request.model,
            chipset: request.chipset
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