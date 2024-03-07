const { Pool } = require('pg');

const pool = new Pool({
  user: 'amit',
  host: 'localhost',
  database: 'servers',
  password: 'malegaon',
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;