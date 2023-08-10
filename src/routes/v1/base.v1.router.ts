import { Router } from "express";

export class BaseV1Router {
  public Router: Router;

  constructor() {
    this.Router = Router();
  }
}
