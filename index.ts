import express, { Application } from "express";
import { appConfig } from "./app";
import { dbConfig } from "./config/DB";

const app: Application = express();

const port: number = 4040;

appConfig(app);

dbConfig();

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
