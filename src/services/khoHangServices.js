import db from "../models/index";
import { Op } from 'sequelize';
import sequelize from "sequelize";

const getLoaiSanPham = async () => {
    try {

        let data = await db.Khohang.findAll({
            attributes: ['LoaiSanPhamId'],
            where: { SoLuong: { [Op.gt]: 0 } },
            group: 'LoaiSanPhamId',
            include: { model: db.LoaiSanPham, attributes: ['TenLoai'] },
        });

        if (data) {
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
        console.log(error);
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}

const getAllData = async (rawdata) => {
    try {
        // MaLoai = "F"
        // console.log(">>>> check ma loai: ", rawdata.MaLoai)
        let data = await db.Khohang.findAll({
            attributes: ['SanPhamId', [sequelize.fn('SUM', sequelize.col('SoLuong')), 'SoLuong']],
            where: { SoLuong: { [Op.gt]: 0 }, LoaiSanPhamId: rawdata.MaLoai },
            group: 'SanPhamId',
            include: { model: db.SanPham, attributes: ['TenSanPham'] },
        });

        if (data) {
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
        console.log(error);
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}

const getPieChartData = async () => {
    // let MaLoai = 'F';
    try {
        let data = [];

        let loaiSP = await db.Khohang.findAll({
            attributes: ['LoaiSanPhamId'],
            where: { SoLuong: { [Op.gt]: 0 } },
            group: 'LoaiSanPhamId',
            include: { model: db.LoaiSanPham, attributes: ['TenLoai'] },
        });

        for (let i in loaiSP) {
            let obj = {
                AddData: function (loaisp, tablesp, tensp, soluong) {
                    this.loaisp = loaisp;
                    this.tablesp = tablesp;
                    this.tensp = tensp;
                    this.soluong = soluong;
                }
            };
            let getdata = await db.Khohang.findAll({
                attributes: [[sequelize.fn('SUM', sequelize.col('SoLuong')), 'SoLuong'], 'SanPhamId'],
                where: { SoLuong: { [Op.gt]: 0 }, LoaiSanPhamId: loaiSP[i].LoaiSanPhamId },
                group: 'SanPhamId',
                include: { model: db.SanPham, attributes: ['TenSanPham'] },
            });

            let listTable = [];
            let listTensp = [];
            let listSoluong = [];
            for (let i in getdata) {
                let obj = {
                    AddData: function (masp, tensp, soluong) {
                        this.masp = masp;
                        this.tensp = tensp;
                        this.soluong = soluong;
                    }
                };

                obj.masp = getdata[i].SanPhamId;
                obj.tensp = getdata[i].SanPham.TenSanPham;
                obj.soluong = getdata[i].SoLuong;

                listTable.push(obj);
                listTensp.push(getdata[i].SanPham.TenSanPham);
                listSoluong.push(getdata[i].SoLuong);
            }

            obj.tablesp = listTable;
            obj.loaisp = loaiSP[i];
            obj.tensp = listTensp;
            obj.soluong = listSoluong;

            data.push(obj);

        }
        if (data) {
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
        console.log(error);
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}

const getSanPham = async (id) => {
    try {
        id = 'F35';
        let data = await db.Khohang.findAll({
            attributes: ['SanPhamId', 'NSX', 'HSD', 'SoLuong', 'ViTri'],
            where: { SanPhamId: id, SoLuong: { [Op.gt]: 0 } },
            include: { model: db.SanPham, attributes: ['TenSanPham'] },
        });

        if (data) {
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
        console.log(error);
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}

const notify = async () => {
    try {

        let day = '2022/6/18'

        let data = {
            AddData: function (hetHan, sapHet, duTon, thieuTon) {
                this.hetHan = hetHan;
                this.sapHet = sapHet;
                this.duTon = duTon;
                this.thieuTon = thieuTon;
            }
        };

        //Find products that have expired.
        let hetHSD = await db.Khohang.findAll({
            attributes: ['SanPhamId', 'NSX', 'HSD', [sequelize.fn('SUM', sequelize.col('SoLuong')), 'SoLuong'], 'ViTri'],
            where: { SoLuong: { [Op.gt]: 0 }, HSD: { [Op.lte]: day } },
            include: { model: db.SanPham, attributes: ['TenSanPham'] },
            group: ['SanPhamId'],
        });
        data.hetHan = hetHSD;

        //Find products that have expired.
        Date.prototype.subDays = function (day, days) {
            var date = new Date(day);
            date.setDate(date.getDate() + days);
            return date;
        }

        let minDate = await db.SanPham.findAll({
            attributes: ['id', 'LoaiSanPhamId', 'MaxTon', 'MinTon'],
            include: { model: db.LoaiSanPham, attributes: ['MinDate'] },
        })

        let listSapHet = [];
        for (let i in minDate) {

            let date = new Date();
            date = date.subDays(day, minDate[i].LoaiSanPham.MinDate);

            let sapHetHSD = await db.Khohang.findAll({
                attributes: ['SanPhamId', 'NSX', 'HSD', [sequelize.fn('SUM', sequelize.col('SoLuong')), 'SoLuong'], 'ViTri'],
                where: { SanPhamId: minDate[i].id, SoLuong: { [Op.gt]: 0 }, HSD: date },
                include: { model: db.SanPham, attributes: ['TenSanPham'] },
                group: ['SanPhamId'],
            });

            let obj = {
                AddData: function (SanPhamId, NSX, HSD, SoLuong, SanPham, ViTri) {
                    this.SanPhamId = SanPhamId;
                    this.NSX = NSX;
                    this.HSD = HSD;
                    this.SoLuong = SoLuong;
                    this.SanPham = SanPham;
                    this.ViTri = ViTri;
                }
            };

            if (sapHetHSD && sapHetHSD.length > 0) {
                for (let i in sapHetHSD) {
                    obj.SanPhamId = sapHetHSD[i].SanPhamId;
                    obj.NSX = sapHetHSD[i].NSX;
                    obj.HSD = sapHetHSD[i].HSD;
                    obj.SoLuong = sapHetHSD[i].SoLuong;
                    obj.SanPham = sapHetHSD[i].SanPham;
                    obj.ViTri = sapHetHSD[i].ViTri;
                }
                listSapHet.push(obj);
            }

        }
        data.sapHet = listSapHet;

        //Find products that need to be added

        let getSoLuong = await db.Khohang.findAll({
            attributes: [[sequelize.fn('SUM', sequelize.col('SoLuong')), 'SoLuong'], 'SanPhamId', 'ViTri'],
            where: { SoLuong: { [Op.gt]: 0 }, HSD: { [Op.gt]: day } },
            include: { model: db.SanPham, attributes: ['TenSanPham'] },
            group: 'SanPhamId',
        });

        let listMaxTon = [];
        for (let i in getSoLuong) {
            for (let j in minDate) {
                let obj = {
                    AddData: function (SanPhamId, SoLuong, SanPham) {
                        this.SanPhamId = SanPhamId;
                        this.SoLuong = SoLuong;
                        this.SanPham = SanPham;
                    }
                };

                if (getSoLuong[i].SanPhamId === minDate[j].id) {
                    if (parseInt(getSoLuong[i].SoLuong) > parseInt(minDate[j].MaxTon)) {
                        obj.SanPhamId = getSoLuong[i].SanPhamId;
                        obj.SoLuong = getSoLuong[i].SoLuong;
                        obj.SanPham = getSoLuong[i].SanPham;
                        listMaxTon.push(obj);
                    }
                }
            }
        }
        data.duTon = listMaxTon;

        //Find products that exceed the quota
        let listMinTon = [];
        for (let i in getSoLuong) {
            for (let j in minDate) {
                let obj = {
                    AddData: function (SanPhamId, SoLuong, SanPham) {
                        this.SanPhamId = SanPhamId;
                        this.SoLuong = SoLuong;
                        this.SanPham = SanPham;
                    }
                };

                if (getSoLuong[i].SanPhamId === minDate[j].id) {
                    if (parseInt(getSoLuong[i].SoLuong) < parseInt(minDate[j].MinTon)) {
                        obj.SanPhamId = getSoLuong[i].SanPhamId;
                        obj.SoLuong = getSoLuong[i].SoLuong;
                        obj.SanPham = getSoLuong[i].SanPham;
                        listMinTon.push(obj);
                    }
                }
            }
        }
        data.thieuTon = listMinTon;

        if (data) {
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
        console.log(error);
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}


module.exports = {
    getAllData, getSanPham, getLoaiSanPham, getPieChartData, notify
}