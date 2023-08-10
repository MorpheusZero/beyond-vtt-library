import { singleton } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { BaseV1Router } from "./base.v1.router";
import { Database } from "../../database/database";

@singleton()
export class HealthV1Router extends BaseV1Router {
  constructor(private readonly database: Database) {
    super();
    this.buildRoutes();
  }

  public async getHealth(_req: Request, res: Response, next: NextFunction) {
    try {
      await this.database.DBConnection.db().collection("beyondvtt").insertOne({
        identity: "this is a test",
      });

      res.json({
        status: "ok",
      });
    } catch (error) {
      next(error);
    }
  }

  private buildRoutes() {
    this.Router.get("/", this.getHealth.bind(this));
  }
}
