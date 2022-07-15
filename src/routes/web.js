import express from "express";
import createAccountController from "../controllers/createAccountController";
import apiController from "../controllers/apiController";

const router = express.Router();


const url = (app) => {
    router.get("/", createAccountController.login)
    router.get("/api/testApi", apiController.testApi)
    // router.

    return app.use("/", router);
}
export default url;