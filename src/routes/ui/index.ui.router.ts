import { singleton } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { BaseUIRouter } from "./base.ui.router";

@singleton()
export class IndexUIRouter extends BaseUIRouter {
  constructor() {
    super();
    this.buildRoutes();
  }

  public getIndexPage(_req: Request, res: Response, next: NextFunction) {
    try {
      res.render("index");
    } catch (error) {
      next(error);
    }
  }

  private buildRoutes() {
    this.Router.get("/", this.getIndexPage.bind(this));
  }
}
