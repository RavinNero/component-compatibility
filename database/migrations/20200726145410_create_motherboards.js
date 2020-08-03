
exports.up = function(knex) {
    return knex.schema.createTable('mother_boards', function(table){
        table.increments('id');
     
        table.string('title').notNullable();
        table.string('brand_name').notNullable();
        table.string('model').notNullable();
        table.string('chipset').notNullable();
        table.string('socket').notNullable();
        table.string('memory_compatibility').notNullable();
        table.string('form_factor').notNullable();
        table.string('max_tdp').notNullable();
     
        table.string('user_id').notNullable();
    
        table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('RESTRICT');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('mother_boards');
};
