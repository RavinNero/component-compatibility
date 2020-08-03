const cpuRepo = require('../repositories/cpuRepo')

module.exports = {
    async index(request, response){
        const cpu = await cpuRepo.listAllCpus();
        
        return response.json(cpu);
    },

    async show(request, response){
        const cpu = await cpuRepo.findCpuById(request.params.id);

        return response.json(cpu);
    },

    async store(request, response){
        const cpu = await cpuRepo.hasCpuByFamilyModel(request.body.family, request.body.model_number);

        if(cpu == true){
            return response.json({status: "Processador já cadastrado"});
        }

        const cpu_stored = await cpuRepo.storeCpu(request.body);

        return response.json(cpu_stored);
    },

    async update(request, response){
        const cpu = await cpuRepo.updateCpu(request.params.id, request.body);

        return response.json(cpu);
    },

    async delete(request, response){
        const cpu = await cpuRepo.deleteCpu(request.params.id);

        return response.json(cpu);
    }
}