import * as http from "http";
import express from "express";
import helmet from "helmet";

export class AppServer {

    public static async Start(): Promise<http.Server> {
        const app = express();
        app.use(helmet());

        app.get("/health", (_req, res, _next) => {
            res.send("ok");
        });

        return app.listen(8080);
    }

}