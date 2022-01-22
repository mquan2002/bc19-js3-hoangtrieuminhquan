let address ="Hoàng Triệu Minh Quân, BC19-Javascript3"

console.log(address);
// Bai 1
/* *Lương 1 ngày : 100.000
Bước 1 : tạo input và button để người dùng nhập và xuất kết quả
Bước 2 : Cho người dùng nhập vào số ngày làm việc 
Bước 3 : Sử dụng công thức Lương nhân viên =(số ngày đi làm * lương 1 ngày)
Bước 4 : in lương của nhân viên ra console và html*/

document.getElementById("pay").onclick = function () {
    let dayEl = document.getElementById("day").value;
    let pay = dayEl * 100000;
    console.log("Tien luong nhan duoc la:",pay);
    document.getElementById("bai1").innerHTML = `Tien luong cua ban la: ${pay}`
}






// Bai 2
/*
Bước 1 : tạo biến cho 5 số thực
Bước 2 : Cho người dùng nhập vào 5 số thực
Bước 3 : Sử dụng công thức Trung bình = tổng của 5 số / 5
Bước 4 : in kết quả trung bình ra console và html*/


document.getElementById("total").onclick = function calc() {
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);let num3 = Number(document.querySelector("#num3").value);let num4 = Number(document.querySelector("#num4").value);let num5 = Number(document.querySelector("#num5").value);
    let total = (num1 + num2 + num3 + num4 + num5) / 5;
    console.log("Trung binh cong la:",total);
    document.getElementById("bai2").innerHTML = `Trung binh cong la: ${total}` 
}



//Bai 3
/* 1 USD = 23.500 VND
Bước 1 : tạo biến 
Bước 2 : Cho người dùng nhập vào số tiền muốn đổi
Bước 3 : Sử dụng công thức số tiến USD * giá VNĐ hiện nay = số tiến VNĐ
Bước 4 : in số tiền sau khi quy đổi sang VNĐ ra console và html*/

document.getElementById("exchange").onclick = function () {
    let moneyEl = document.getElementById("money").value;
    let exchange = moneyEl * 23500;
    console.log("So tien sau khi quy doi la:",exchange);
    document.getElementById("bai3").innerHTML = `So tien sau khi quy doi la: ${exchange}`
}

//Bai 4
/*
Bước 1 : tạo 2 biến là chiều dài và chiều rộng HCN
Bước 2 : Cho người dùng nhập vào CD và CR 
Bước 3 : Sử dụng công thức :
Diện tích = Dài * Rộng
Chu vi = (Dài + Rộng)*2
Bước 4 : in kết quả diện tích và chu vi ra console và html*/

document.getElementById("result").onclick = function () {
    let CD = Number(document.querySelector("#CD").value);
    let CR = Number(document.querySelector("#CR").value);
    let dientich = CD * CR;
    let chuvi = (CD + CR) / 2;
    console.log("Dien tich hinh chu nhat:",dientich);
    console.log("Chu vi hinh chu nhat:",chuvi);
    document.getElementById("bai4").innerHTML = `Diện tích hình chữ nhật là: ${dientich}`
    document.getElementById("bai4.").innerHTML = `Chu vi hinh chu nhat la: ${chuvi}`

}

//Bai 5
/*
Bước 1 : tạo biến ten, unit,Tong,number
Bước 2 : Cho người dùng nhập vào số 
Bước 3 : tách số hàng chục theo công thức 
ten = Math.floor(n / 10);
Bước 4 : tách số hàng đơn vị theo công thức 
unit = Math.floor(n % 10);
Bước 5 : in kết quả Tong ra console và html*/

document.getElementById("Final").onclick = function () {
    let number = Number(document.querySelector("#number").value);
    let ten = Math.floor(number / 10);
    let unit = Math.floor(number % 10 );
    let Tong = ten + unit;
    console.log("Số hàng chục là:",ten);
    console.log("Số hàng đơn vị là:",unit);
    console.log("Tổng của 2 kỳ số là:",Tong);
    document.getElementById("bai5").innerHTML = `Tổng của 2 ký số là: ${Tong}`
}
