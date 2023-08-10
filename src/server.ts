import * as http from "http";
import express from "express";
import helmet from "helmet";
import { container } from "tsyringe";
import { AppRoutes } from "./routes/routes";
import { Database } from "./database/database";

export class AppServer {
  public static async Start(): Promise<http.Server> {
    // Basic Setup
    const app = express();
    app.use(helmet());

    // Database Connection
    const db = container.resolve(Database);
    await db.InitializeDBConnection();

    // Setup Static Dirs & Views
    app.use(express.static("public"));
    app.set("view engine", "ejs");
    app.set("views", "./views");

    // Routing
    const routes = container.resolve(AppRoutes);

    // Initialize V1 API Routes
    app.use("/v1", routes.InitializeV1Routes());

    // Initialize UI Routes
    app.use("/", routes.InitializeUIRoutes());

    return app.listen(8080);
  }
}
