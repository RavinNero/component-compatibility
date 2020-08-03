
exports.up = function(knex) {
    return knex.schema.createTable('cpus', function(table){
        table.increments('id');

        table.string('brand_name').notNullable();
        table.string('family').notNullable();
        table.string('model_number').notNullable();
        table.string('socket_compatibility').notNullable();
        table.string('memory_compatibility').notNullable();
        table.string('tdp').notNullable();

        table.string('user_id').notNullable();

        table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('RESTRICT');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('cpus');
};
