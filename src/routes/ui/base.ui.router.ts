import { Router } from "express";

export class BaseUIRouter {
  public Router: Router;

  constructor() {
    this.Router = Router();
  }
}
