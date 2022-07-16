import express from "express";
import apiController from "../controllers/apiController";
import userController from "../controllers/userController";

const router = express.Router();


const initApiRoutes = (app) => {

    router.post("/login", apiController.onSubmitLogin);

    //  user CRUD 
    router.get("/user/show", userController.readFunc);
    router.get("/user/shows", userController.readOneFunc);
    router.post("/user/create", userController.createFunc);
    router.put("/user/update", userController.updateFunc);
    router.delete("user/delete", userController.deleteFunc);

    return app.use("/api/v1/", router);
}
export default initApiRoutes;