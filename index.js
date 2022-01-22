let address ="Hoàng Triệu Minh Quân, BC19-Javascript3"

console.log(address);
// Bai 1
/* *Lương 1 ngày : 100.000
Bước 1 : tạo biến cho lương 1 ngày
Bước 2 : tạo biến và gán giá trị cho số ngày đi làm
Bước 3 : Sử dụng công thức Lương nhân viên =(số ngày đi làm * lương 1 ngày)
Bước 4 : in lương của nhân viên ra console*/

const Bai_1 ="Bai 1"
console.log(Bai_1);

const x = document.getElementById("Address".value);
const AddressEl = document.getElementById("Address");
const resultEl = document.getElementById("result");
resultEl.onclick = function() {
    mul = x * 100000;
    alert(mul);
}




// Bai 2
/*
Bước 1 : tạo biến a,b,c,d,e cho 5 số thực,sum,div
Bước 2 : gán giá trị cho 5 số thực 
Bước 3 : Sử dụng công thức Trung bình = tổng của 5 số / 5
Bước 4 : in kết quả trung bình ra console*/
const Bai_2 ="Bai 2"
console.log(Bai_2);

const a= 2;
const b= 3;
const c= 4;
const d= 5;
const e= 6;
console.log("Nhap vao 5 so thuc:",a,b,c,d,e);

const sum = a + b + c + d + e;
const div = sum / 5;
console.log("Gia tri trung binh la:", div);

//Bai 3
/* 1 USD = 23.500 VND
Bước 1 : tạo biến X,Y, multiply
Bước 2 : gán giá trị cho Y
Bước 3 : Sử dụng công thức số tiến USD * giá VNĐ hiện nay = số tiến VNĐ
Bước 4 : in số tiền sau khi quy đổi sang VNĐ ra console*/
const Bai_3 ="Bai 3"
console.log(Bai_3);

const X = 23500;
console.log("Gia VNĐ hien nay:", X, "VND");
const Y = 50;
console.log("Nhap vao so tien USD:", Y, "USD");
const multiply = X * Y;
console.log("So tien sau khi quy doi sang VND", multiply, "VND");

//Bai 4
/*
Bước 1 : tạo biến 2 biến là chiều dài và chiều rộng HCN
Bước 2 : gán giá trị cho 2 biến 
Bước 3 : Sử dụng công thức :
Diện tích = Dài * Rộng
Chu vi = (Dài + Rộng)*2
Bước 4 : in kết quả diện tích và chu vi ra console*/
const Bai_4 ="Bai 4"
console.log(Bai_4);

const CD = 5;
console.log("Chieu dai HCN:", CD);
const CR = 4;
console.log("Chieu rong HCN:", CR);

const DT = CD * CR;
console.log("Dien tich HCN:", DT);
const CV = (CD + CR)* 2;
console.log("Chu vi HCN:", CV);

//Bai 5
/*
Bước 1 : tạo biến n, ten, unit,Tong
Bước 2 : gán giá trị cho n
Bước 3 : tách số hàng chục theo công thức 
ten = Math.floor(n / 10);
Bước 4 : tách số hàng đơn vị theo công thức 
unit = Math.floor(n % 10);
Bước 5 : in kết quả Tong ra console*/
const Bai_5 ="Bai 5"
console.log(Bai_5);

let ten,unit;
const n= 84;
console.log("Nhap vao so co 2 chu so la:",n);

ten = Math.floor(n / 10);
unit = Math.floor(n % 10);
const Tong = ten + unit;
console.log("Tong cua 2 ky so la:", Tong);
