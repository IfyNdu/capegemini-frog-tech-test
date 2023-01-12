import { Api } from "./api";
import { mongodb } from "./db";

const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const CLUSTER = process.env.DB_CLUSTER;
const NAME = process.env.DB_NAME;

const uri = `mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}/${NAME}?retryWrites=true&w=majority`;

(async () => {
  const db = await mongodb.init(uri);
  Api.init(db);
})();
