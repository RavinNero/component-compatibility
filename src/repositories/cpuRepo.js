const connection = require('../../database/connection');

module.exports = {
    async listAllCpus(){
        const cpus = await connection('cpus')
        .select('*')
        .then(function(rows){
            if(rows){
                return rows;
            }else{
                return 0;
            }
        })
        .catch(function(error){
            return error;
        });

        return cpus;
    },

    async hasCpuByFamilyModel(family, model){
        const cpu = await connection('cpus')
        .select('*')
        .where({
            family: family
        })
        .andWhere({
            model_number: model
        })
        .then(function(row){
            if(row){
                return row;
            }else{
                return 0;
            }
        })
        .catch(function(error){
            return error;
        });

        return cpu;
    },

    async storeCpu(request){
        const cpu = await connection('cpus')
        .insert({
            brand_name: request.brand_name,
            family: request.family,
            model_number: request.model_number,
            socket_compatibility: request.socket_compatibility,
            memory_compatibility: request.memory_compatibility,
            tdp: request.tdp,
            user_id: request.user_id
        }).then(function(row){
            if(row){
                return 1;
            }else{
                return 0;
            }
        })
        .catch(function(error){
            console.error(error);
            return error;
        });

        return cpu;
    },

    async findCpuById(id){
        const cpu = await connection('cpus')
        .select('*')
        .where({
            id: id
        })
        .then(function(row){
            if(row){
                return row;
            }else{
                return 0;
            }
        })
        .catch(function(error){
            return error;
        });

        return cpu;
    },

    async updateCpu(id, request){
        const cpu = await connection('cpus')
        .update({
            brand_name: request.brand_name,
            family: request.family,
            model_number: request.model_number,
            socket_compatibility: request.socket_compatibility,
            memory_compatibility: request.memory_compatibility,
            tdp: request.tdp
        }).where({
            id: id
        }).then(function(row){
            if(row){
                return 1;
            }else{
                return 0;
            }
        }).catch(function(error){
            return error;
        });

        return cpu;
    },

    async deleteCpu(id){
        const cpu = await connection('cpus')
        .where({
            id: id
        })
        .del()
        .then(function(row){
            if(row){
                return 1;
            }else{
                return 0;
            }
        }).catch(function(error){
            return error;
        });

        return cpu;
    }
}