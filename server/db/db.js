import knex from 'knex';
import dotenv from 'dotenv';
dotenv.config();

const db = knex({
  client: 'pg',
  connection: {
      host: process.env.PGdashHOST,
      port: process.env.PGdashPORT,
      user: process.env.PGdashUSER,
      password: process.env.PGdashPASSWORD,
      database: process.env.PGdashDATABASE
  }
});

export default db;