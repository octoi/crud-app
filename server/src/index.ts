import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { createConnection } from 'typeorm';
import { mySqlConfig } from './config/database';
import { schema } from './graphql';
import { Users } from './entities/Users';

const main = async () => {
  await createConnection({
    type: 'mysql',
    database: mySqlConfig.database,
    username: mySqlConfig.username,
    password: mySqlConfig.password,
    logging: true,
    synchronize: false,
    entities: [Users],
  });

  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use('/graphql', graphqlHTTP({ graphiql: true, schema }));

  const port = process.env.PORT || 5000;
  app.listen(port, () =>
    console.log(`[+] SERVER RUNNING AT http://localhost:${port}`)
  );
};

main().catch((err) => {
  console.log('[-] MAIN FUNCTION EXCEPTION \n');
  console.log(err);
});
