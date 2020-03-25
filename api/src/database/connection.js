const knex = require('knex');
const conf = require('../../knexfile.js');

const connection = knex(conf.development);

module.exports = connection;
