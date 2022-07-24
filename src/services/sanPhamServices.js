import db from "../models/index";

const getAllSP = async () => {
    try {

        let data = [];

        let loaisp = await db.LoaiSanPham.findAll({
            attributes: ['id', 'TenLoai', 'MinDate', 'HSD'],
        })

        for (let i in loaisp) {

            let obj = {
                AddData: function (loaisanpham, sanpham) {
                    this.loaisanpham = loaisanpham;
                    this.sanpham = sanpham;
                }
            };

            let user = await db.SanPham.findAll({
                where: { LoaiSanPhamId: loaisp[i].id },
            });

            obj.sanpham = user;
            obj.loaisanpham = loaisp[i];
            data.push(obj);

        }

        if (data) {
            // let data = user.get({ plain: true })
            return {
                EM: "get data success",
                EC: 0,
                DT: data
            }
        } else {
            return {
                EM: "get data success",
                EC: 0,
                DT: []
            }
        }
    } catch (error) {
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}

const createSanPham = async () => {
    try {

        // let user = await db.SanPham.findAll({
        //     include: { model: db.LoaiSanPham },
        // });

        if (user) {
            // let data = user.get({ plain: true })
            return {
                EM: "get data success",
                EC: 0,
                DT: user
            }
        } else {
            return {
                EM: "get data success",
                EC: 0,
                DT: []
            }
        }
    } catch (error) {
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}


module.exports = {
    getAllSP, createSanPham
}