import express from "express";
import PingController from "../controllers/ping.controller";
import UrlRouter from "./url.router";

const router = express.Router();

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.use("/urls", UrlRouter);

export default router;