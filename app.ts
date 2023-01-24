import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routers/user.route";

export const appConfig = (app: Application) => {
  // middleware configuration
  app
    .use(express.json())
    .use(cors())
    .use(morgan("dev"))

    // router configuration
    .use("/api", router);
};
