/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('events').del()
  await knex('events').insert([
    {
      id: 1,
      name: 'Franks Franks',
      type: 'food festival',
      price: 50,
      date: '19/08/2022',
      location_id: '1',
      description:
        'Franks Franks are generous, satisfying, and lip-smackingly luscious, serving up the best of the brat, including their best wurst - an Island Bay Butchery frank, Esther sauerkraut and bread,butter, pickles, Al Brown Old Yella habanero mustard, cheese and t-sauce all nestled in a Shelly Bay overnight fermented roll.',
    },
    {
      id: 2,
      name: 'Beervana',
      type: 'music festival',
      price: 70,
      date: '19/08/2022',
      location_id: '2',
      description:
        'Beervana is a mind-bending, palate expanding Beer wonderland. From outrageous brewery displays to the best culinary bites, from exciting live music to weird street performance, there is something new to discover around every corner and Sky Stadium is one big corner!',
    },
    {
      id: 3,
      name: 'Songs without Jokes Tour',
      type: 'comedy',
      price: 30,
      date: '26/08/2022',
      location_id: '3',
      description:
        'Bret McKenzie —whom you know from such modern musical treasures as comedy duo Flight of the Conchords, the Muppets movie reboots and other ace family friendly soundtracks, Lord of the Rings fan blogs, guest songs for The Simpsons, cycling around the streets of Wellington, and more— has a new solo record coming out filled with songs that ARE NOT COMEDY SONGS!',
    },
  ])
}
