import { Request, Response, NextFunction } from "express";
import authRoute from "./routes/account/auth";


export function loadRoutes(app: any) {
  app.use("/api/auth", authRoute);
  app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500).json({
      error: {
        message: error.message,
      },
    });
  });
  return app;
}


