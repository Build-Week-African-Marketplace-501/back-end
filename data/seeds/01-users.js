// eslint-disable-next-line
exports.seed = (knex, Promise) => {
  return knex('users').insert([
    {
      username: 'lambda',
      password: '$2a$08$5NqMdHaMIuzrj6qW8Vvg0enw771d6QGopjClKX5qkeFrPBY8f1Zri',
    },
  ])
}
