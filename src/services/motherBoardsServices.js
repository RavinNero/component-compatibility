const connection = require('../../database/connection');

module.exports = {
    async getCpusCompatible(mother_board){
        const cpus = await connection('cpus')
        .select('*')
        .where(function(){
            this.where('socket_compatibility', '=' , mother_board.socket)
            .andWhere('memory_compatibility', '=', mother_board.memory_compatibility)
            /* .andWhere('tdp', '<=', mother_board.max_tdp) */
            /* .andWhere('bios_compatibility', '<=', mother_board.bios) */;
        }).then(function(rows){
            if(rows){
                console.log(rows);
                return rows;
            }else{
                return 0;
            }
        }).catch(function(error){
            return error;
        });

        return cpus;
    },
}