import { singleton } from "tsyringe";
import { HealthV1Router } from "./v1/health.v1.router";
import { Router } from "express";
import { IndexUIRouter } from "./ui/index.ui.router";

@singleton()
export class AppRoutes {
  constructor(
    private readonly healthV1Router: HealthV1Router,
    private readonly indexUIRouter: IndexUIRouter,
  ) {}

  public InitializeV1Routes(): Router {
    const v1Router = Router();

    v1Router.use("/health", this.healthV1Router.Router);

    return v1Router;
  }

  public InitializeUIRoutes(): Router {
    const uiRouter = Router();

    uiRouter.use("/", this.indexUIRouter.Router);

    return uiRouter;
  }
}
