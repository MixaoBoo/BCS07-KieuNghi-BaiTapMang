var arr = [];
if (localStorage.getItem("array")) {
    arr = localStorage.getItem("array").split(',').map(number => number*1);
} 
document.getElementById("ketQua").innerHTML = arr;
function laySoNguoiDung() {
    // Lấy dữ liệu
    var soN = document.getElementById("soN").value * 1;
    // Thêm số vào mảng
    arr.push(soN);
    document.getElementById("ketQua").innerHTML = arr;
    document.getElementById("soN").value = '';
    localStorage.setItem('array', arr);
};
// CÂU 1
function tongCacSoDuong() {
    var tongCacSoDuong = 0;
    arr.forEach(function (item, index) {
        if (item > 0) {
            tongCacSoDuong += item;
        }
    });
    document.getElementById("ketQua1").innerHTML = tongCacSoDuong;
}
// CÂU 2
function demCacSoDuong() {
    var dem = 0;
    arr.forEach(function (item, index) {
        if (item > 0) {
            dem++;
        }
    });
    document.getElementById("ketQua2").innerHTML = dem;
};
// CÂU 3
function timSoNhoNhat() {
    if (arr.length > 0) {
        var index = 0;
        var bienMin = 0;
        bienMin = arr[index];
        for (var i = 1; i < arr.length; i++) {
            var dem = arr[i];
            if (dem < bienMin) {
                bienMin = dem;
                index = i;
            }
        }
        document.getElementById("ketQua3").innerHTML = bienMin;
    } else {
        document.getElementById("ketQua3").innerHTML = "Vui lòng nhập số vào mảng";
    }
}
// CÂU 4
function timSoDuongNhoNhat() {
    if (arr.length > 0) {
        var mangSoDuong = arr.filter(number => number > 0);
        var bienMin = mangSoDuong[0];
        mangSoDuong.forEach((soDuong) => {
            var dem = soDuong;
            if (dem < bienMin) {
                bienMin = dem;
            }
        })
        document.getElementById("ketQua4").innerHTML = bienMin;
    } else {
        document.getElementById("ketQua4").innerHTML = "Vui lòng nhập số vào mảng";
    }
}
// CÂU 5
function timSoChanCuoiCung() {
    if (arr.length > 0) {
        var mangSoChan = arr.filter(number => number % 2 === 0);
        var doDaiMang = mangSoChan.length;
        document.getElementById("ketQua5").innerHTML = mangSoChan[doDaiMang - 1];
    } else {
        document.getElementById("ketQua5").innerHTML = "Vui lòng nhập số vào mảng";
    }
}
// CÂU 6
function doChoTrongMang() {
    var viTri1 = document.getElementById("viTri1").value * 1;
    var viTri2 = document.getElementById("viTri2").value * 1;
    if (arr.length > 0) {
        var temp = arr[viTri1];
        arr[viTri1] = arr[viTri2];
        arr[viTri2] = temp;
        console.log(arr)
        document.getElementById("ketQua6").innerHTML = arr;
    } else {
        document.getElementById("ketQua6").innerHTML = "Vui lòng nhập số vào mảng";
    }
}
// CÂU 7
function sapXepTangDan() {
    if (arr.length > 0) {
        document.getElementById("ketQua7").innerHTML = arr.sort((a, b) => a - b);
    } else {
        document.getElementById("ketQua7").innerHTML = "Vui lòng nhập số vào mảng";
    }
}
// CÂU 8
function timSoNguyenToDauTien() {
    if (arr.length > 0) {
        var soNguyenTo = arr.find(number => number === 2 || number % 2 !== 0);
        if (soNguyenTo) {
            document.getElementById("ketQua8").innerHTML = soNguyenTo;
        } else {
            document.getElementById("ketQua8").innerHTML = "Không tìm thấy số nguyên tố trong mảng"
        }
    } else {
        document.getElementById("ketQua8").innerHTML = "Vui lòng nhập số vào mảng";
    }
}
// CÂU 9
var arrBai9 = [];
function themMangBai9() {
    var soN = document.getElementById("themSoNguyen").value * 1;
    arrBai9.push(soN);
    document.getElementById("ketQuaSoNguyen").innerHTML = arrBai9;
    document.getElementById("themSoNguyen").value = '';
}

function demSoNguyen() {
    if (arrBai9.length > 0) {
        var mangSoNguyen = arrBai9.filter(number => Number.isInteger(number));
        document.getElementById("ketQua9").innerHTML = `Số nguyên: ${mangSoNguyen.length}`;
    } else {
        document.getElementById("ketQua9").innerHTML = "Vui lòng nhập số vào mảng";
    }
}
// CÂU 10
function soSanhSoLuongAmVaDuong() {
    if (arr.length > 0) {
        var soLuongSoAm = arr.filter(number => number < 0).length;
        var soLuongSoDuong = arr.filter(number => number > 0).length;
        if (soLuongSoAm === soLuongSoDuong) {
            document.getElementById("ketQua10").innerHTML = "Số lượng số âm bằng với số lượng số dương";
        } else if (soLuongSoAm > soLuongSoDuong) {
            document.getElementById("ketQua10").innerHTML = "Số lượng số dương nhỏ hơn số lượng số âm";
        } else {
            document.getElementById("ketQua10").innerHTML = "Số lượng số dương lớn hơn số lượng số âm";
        }
    } else {
        document.getElementById("ketQua10").innerHTML = "Vui lòng nhập số vào mảng";
    }
}