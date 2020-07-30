const mbRepo = require('../repositories/motherBoardsRepository');

module.exports = {
    async index(request, response){
        const user = await mbRepo.listAllMb();

        return response.json(user);
    },

    async show(request, response){
        const mb = await mbRepo.findMbById(request.params.id)

        return response.json(mb);
    },

    async store(request, response){
        const {model, chipset} = await request.body;

        const mb = await mbRepo.hasMbByName(model);

        if(mb){
            return response.json({status: "Placa mãe já cadastrada"});
        }
        
        const mb_stored = await mbRepo.storeMb(model, chipset);
        
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
}