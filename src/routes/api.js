import express, { Router } from "express";

import { checkUserCookies, checkUserPermission } from "../middleware/jwtAction";

import apiController from "../controllers/apiController";
import userController from "../controllers/userController";
import sanPhamController from "../controllers/sanPhamController";
import khoHangController from "../controllers/khoHangController";
import nhapKhoController from "../controllers/nhapKhoController";
import xuatKhoController from "../controllers/xuatKhoController";
import selectController from "../controllers/secectController";
import reportController from "../controllers/reportController";
const router = express.Router();

// const checkUser = (req, res, next) => {
//     const nonSecruePaths = ['/login'];
//     if (nonSecruePaths.includes(req.path)) {
//         return nonSecruePaths();
//     }
//     next();
// }

const initApiRoutes = (app) => {

    // router.all('*', checkUserCookies, checkUserPermission,);

    router.post("/login", apiController.onSubmitLogin);
    //  user CRUD 
    router.get("/user/show", userController.readFunc);
    router.post("/user/shows", userController.readOneFunc);
    router.post("/user/create", userController.createFunc);
    router.put("/user/update", userController.updateFunc);
    // router.delete("user/delete", userController.deleteFunc);

    router.get("/sanpham/show", sanPhamController.getAllSP);
    router.post("/sanpham/create", sanPhamController.createSanPham);

    router.get("/khohang/tongquan/loaisanpham", khoHangController.getLoaiSanPham);
    router.get("/khohang/tongquan/piechartdata", khoHangController.getPieChartData);
    router.post("/khohang/tongquan/danhsachsanpham", khoHangController.getAllData);
    router.post("/khohang/tongquan/chitiet", khoHangController.getSanPham);
    router.post("/khohang/search", khoHangController.search);

    router.get("/xuatnhap/nhapkho/admin", nhapKhoController.getAllData);
    router.post("/xuatnhap/nhapkho/user", nhapKhoController.getUserData);
    router.get("/xuatnhap/xuatkho/admin", xuatKhoController.getAllData);
    router.post("/xuatnhap/xuatkho/user", xuatKhoController.getUserData);

    router.post("/xuatnhap/xuatkho/tongquan/loaisanphamlinechart", xuatKhoController.getLoaiSPLineChart);
    router.post("/xuatnhap/xuatkho/tongquan/loaisanphamlinecharts", xuatKhoController.getLoaiSPLineCharts);
    router.post("/xuatnhap/xuatkho/tongquan/sanphamlinechart", xuatKhoController.getSPLineChart);
    router.post("/xuatnhap/xuatkho/tongquan/sanphamlinecharts", xuatKhoController.getSPLineCharts);
    router.post("/xuatnhap/xuatkho/tongquan/listloaisanpham", xuatKhoController.getLoaiSanPhamData);

    router.get("/xuatnhap/tongquan/dudoansoluong", xuatKhoController.predictSL);
    router.get("/xuatnhap/tongquan/dudoansanpham", xuatKhoController.predictSP);
    router.get("/thongbao", khoHangController.notify);
    router.post("/nhaphang", nhapKhoController.importData);
    router.post("/xuathang/getdata", khoHangController.findSanPham);
    router.post("/xuathang", khoHangController.xuatHang);

    router.get("/baocao", reportController.resport);

    router.post("/select/sanpham", selectController.getSanPham);
    router.get("/select/loaisanpham", selectController.getLoaiSanPham);
    router.get("/select/group", selectController.getLevel);


    router.put("/user/setvang", userController.setVang);

    return app.use("/api/v1/", router);
}
export default initApiRoutes;