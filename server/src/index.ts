import express, { Express, Request, Response } from "express";
import { loadRoutes } from "./app";
import dotenv from "dotenv";
import bodyParser from 'body-parser'

dotenv.config();

const app: Express = express();
app.use(bodyParser.urlencoded({ extended: false }))
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});


async function init(){
  loadRoutes(app)
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
  
}

init()
