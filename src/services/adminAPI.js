import axiosClient from './axiosClient';

const adminAPI = {
    //Admin User
    getUserList: () => {
        const params = {
            maNhom: "GP08",
        }
        return axiosClient.get("/QuanLyNguoiDung/LayDanhSachNguoiDung", {params})
    },
    getUser: (values) => {
        const params ={
            tuKhoa:values,
            maNhom: "GP08"
        }
        return axiosClient.get("/QuanLyNguoiDung/TimKiemNguoiDung", {params})
    },
    addUser: (data) => {
        return axiosClient.post("/QuanLyNguoiDung/ThemNguoiDung", data)
    },
    updateUser: (data) => {
        const user = {...data, maNhom:'GP08'}
        return axiosClient.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", user)
    },
    deleteUser: (values) => {
        const params={
            taiKhoan: values,
        }
        return axiosClient.delete("/QuanLyNguoiDung/XoaNguoiDung",{params})
    }
    ,
    getListCourses: () => {
        const params = {
            maNhom: "GP08",
        }
        return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc", {params})
    },
    addCourse: (data) => {
        return axiosClient.post("/QuanLyKhoaHoc/ThemKhoaHoc", data)
    },
    deleteCourse: (data) => {
        const params = {
            maKhoaHoc: data
        }
        return axiosClient.delete("/QuanLyKhoaHoc/XoaKhoaHoc", {params})
    },
    updateCourse: (data) => {
        const params = {
            ...data,
            maNhom: 'GP08'
        }
        return axiosClient.put("/QuanLyKhoaHoc/CapNhatKhoatHoc", {params})
    },
    getOneCourse: (courseId) => {
        return axiosClient.get("/QuanLyKhoaHoc/LayThongTinKhoaHoc", courseId)
    },
    getCourseCategory: () => {
        return axiosClient.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc")
    }
}

export default adminAPI;