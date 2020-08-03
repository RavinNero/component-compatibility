const mbRepo = require('../repositories/motherBoardsRepository');
const mbServ = require('../services/motherBoardsServices');

module.exports = {


    // Http Methods

    async index(request, response){
        const user = await mbRepo.listAllMb();

        return response.json(user);
    },

    async show(request, response){
        const mb = await mbRepo.findMbById(request.params.id)

        return response.json(mb);
    },

    async store(request, response){
        const mb = await mbRepo.hasMbByName(request.body.model);

        if(mb){
            return response.json({status: "Placa mãe já cadastrada"});
        }
        
        const mb_stored = await mbRepo.storeMb(request.body);
        
        return response.json(mb_stored);
        
    },

    async update(request, response){
        const mb = await mbRepo.updateMb(request.params.id, request.body);

        return response.json(mb);
    },

    async delete(request, response){
        const mb = await mbRepo.deleteMb(request.params.id);

        return response.json(mb);
    },


    // Services

    async listCpusCompatible(request, response){
        const mb = await mbRepo.findMbByTitle(request.body.title);

        if(!mb){
            return response.json({status: "Nenhuma placa registrada com esse titulo"});
        }

        const cpus = await mbServ.getCpusCompatible(mb);

        return response.json(cpus);
    },

}