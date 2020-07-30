
exports.up = function(knex) {
    return knex.schema.createTable('mother_boards', function(table){
        table.increments('id');
     
        table.string('model').notNullable();
        table.string('chipset').notNullable();
     
        table.string('user_id').notNullable();
    
        table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE').onUpdate('RESTRICT');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('mother_boards');
};
