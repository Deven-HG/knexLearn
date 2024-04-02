/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet_food_type').del()
  await knex('pet_food_type').insert([
    {id: 1, name: 'Meow Mix'},
    {id: 2, name: 'Pedigree'},
    {id: 3, name: 'Kaytee'},
    {id: 4, name: 'Tetra'}
  ]);
};
