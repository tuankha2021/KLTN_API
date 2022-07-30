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

const createSanPham = async (rawData) => {
    try {
        console.log(">>>> check rawdata: ", rawData);
        if(rawData){
            let loaiSanPham = rawData.valueObjLoaiSP;
            let sanPham = rawData.valueObj;

            if(loaiSanPham && loaiSanPham.id !== ''){
                await db.LoaiSanPham.create({
                    id: loaiSanPham.LoaiSanPhamId,
                    TenLoai: loaiSanPham.TenLoai,
                    MinDate: loaiSanPham.MinDate,
                    HSD: loaiSanPham.HSD,
                    TrangThai: loaiSanPham.TrangThai
                })

                await db.SanPham.create({
                    id: sanPham.id,
                    LoaiSanPhamId: loaiSanPham.LoaiSanPhamId,
                    TenSanPham: sanPham.TenSanPham,
                    MaxTon: sanPham.MaxTon,
                    MinTon: sanPham.MinTon,
                    Loc: sanPham.Loc,
                    Thung: sanPham.Thung,
                    Khay: sanPham.Khay,
                    GiaBan: sanPham.GiaBan,
                    GiaSanPham: sanPham.GiaSanPham,
                    MoTa: sanPham.MoTa,
                    TrangThai: sanPham.TrangThai
                })
            }
            else {
                await db.SanPham.create({
                    id: sanPham.id,
                    LoaiSanPhamId: sanPham.LoaiSanPhamId,
                    TenSanPham: sanPham.TenSanPham,
                    MaxTon: sanPham.MaxTon,
                    MinTon: sanPham.MinTon,
                    Loc: sanPham.Loc,
                    Thung: sanPham.Thung,
                    Khay: sanPham.Khay,
                    GiaBan: sanPham.GiaBan,
                    GiaSanPham: sanPham.GiaSanPham,
                    MoTa: sanPham.MoTa,
                    TrangThai: sanPham.TrangThai
                })
            }

            
            return {
                EM: "Dữ liệu đã được cập nhật thành công !",
                EC: 0,
                DT: []
            }
        }

    } catch (error) {
        console.log(error)
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