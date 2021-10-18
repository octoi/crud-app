interface MySqlConfig {
  database: string;
  username: string;
  password: string;
}

export const mySqlConfig: MySqlConfig = {
  database: process.env.DATABASE || 'CRUDAPP',
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'password',
};
