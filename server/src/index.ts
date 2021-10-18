import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { mySqlConfig } from './config/database';

const main = async () => {
  await createConnection({
    type: 'mysql',
    database: mySqlConfig.database,
    username: mySqlConfig.username,
    password: mySqlConfig.password,
    logging: true,
    synchronize: true,
    entities: [],
  });

  const app = express();

  app.use(cors());
  app.use(express.json());
  // app.use('/graphql', graphqlHTTP({ graphiql: true }));

  const port = process.env.PORT || 5000;
  app.listen(port, () =>
    console.log(`[+] SERVER RUNNING AT http://localhost:${port}`)
  );
};

main().catch((err) => {
  console.log('[-] MAIN FUNCTION EXCEPTION \n');
  console.log(err);
});
