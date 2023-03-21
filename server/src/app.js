import express from "express";
import routes from './routes';
import cors from 'cors';

class App {
  constructor() {
    this.server = express();
    this.routes();
  }
  routes() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(routes);
  }
}

export default new App().server;