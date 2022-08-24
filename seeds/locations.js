/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('locations').del()
  await knex('locations').insert([
    {
      id: 1,
      name: 'The Opera House',
      description:
        'With its stunning architecture, The Opera House is a remarkable performance space that oozes antique charm and drama.',
    },
    {
      id: 2,
      name: 'Sky Stadium',
      description:
        'Sky Stadium is a multi-purpose sport and entertainment venue located in Wellington, New Zealand. ',
    },
    {
      id: 3,
      name: 'St James Theatre',
      description:
        'Classical grandeur lends a sense of occasion to any event at the St James Theatre. Frame your presentations and performances with a magnificent proscenium arch, or host a dinner or social occasion on the stage itself',
    },
  ])
}
