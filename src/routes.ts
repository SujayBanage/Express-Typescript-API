import { Express, Request, Response } from "express";
function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) =>
    res.status(200).json({
      message: "All is Well!!",
    })
  );
}
export default routes;
