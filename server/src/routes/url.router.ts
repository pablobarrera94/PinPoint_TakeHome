import express from "express";
import UrlController from "../controllers/url.controller";

const router = express.Router();

router.get("/:page/:perPage", async (req, res) => {
    const controller = new UrlController();
    const response = await controller.getUrls(req.params.page, req.params.perPage);
    return res.send(response);
});

router.post("/", async (req, res) => {
    const controller = new UrlController();
    const response = await controller.createUrl(req.body);
    return res.send(response);
});

// router.get("/:id", async (req, res) => {
//     const controller = new UrlController();
//     const response = await controller.getUrl(req.params.id);
//     if (!response) res.status(404).send({ message: "No url found" });
//     return res.send(response);
// });

router.delete("/", async (req, res) => {
    const controller = new UrlController();
    const response = await controller.deleteUrl(req.body.id);
    if (!response) res.status(404).send({ message: "No url found" });
    return res.send(response);
});

export default router;