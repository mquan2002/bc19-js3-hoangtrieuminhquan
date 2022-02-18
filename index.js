let address ="Hoàng Triệu Minh Quân, BC19-Javascript5"

console.log(address);
// Bai 1
const area_A = 2;
const area_B = 1;
const area_C = 0.5;
const area_D = 0;
const type_1 = 2.5;
const type_2 = 1.5;
const type_3 = 1;
const type_4 = 0;

document.getElementById("result").onclick = function calc() {
    const standardPoint = document.getElementById("standard").value;
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    
    const areaA = document.getElementById("areaA");
    const areaB = document.getElementById("areaB");
    const areaC = document.getElementById("areaC");
    const areaD = document.getElementById("areaD");

    const type1 = document.getElementById("type1");
    const type2 = document.getElementById("type2");
    const type3 = document.getElementById("type3");
    const type4 = document.getElementById("type4");

    const priorityArea = checkPriorityArea(areaA, areaB, areaC, areaD);
    const prioritySubject = checkPrioritySubject(type1, type2, type3, type4);

    const finalPoint = calcFinalPoint(num1, num2, num3, priorityArea, prioritySubject);

    if(finalPoint >= standardPoint){
        document.getElementById("result").innerHTML = 
          "Thí sinh đậu với " + finalPoint + " điểm.";
    }else{
        document.getElementById("result").innerHTML = 
          "Thí sinh rớt với " + finalPoint + " điểm.";
}
}

function calcFinalPoint(num1, num2, num3, priorityArea, prioritySubject) {
    let finalPoint = 0;

    finalPoint = num1 + num2 + num3 + priorityArea + prioritySubject;

    return finalPoint;
}

function checkPriorityArea(areaA, areaB, areaC, areaD){
    if(areaA.checked){
        return area_A;
    }else if(areaB.checked){
        return area_B;
    }else if (areaC.checked){
        return area_C;
    }else if (areaD.checked){
        return area_D;
    }else{
        return 0;
    }
}
function checkPrioritySubject(type1, type2, type3, type4){
    if(type1.checked){
        return type_1;
    }else if(type2.checked){
        return type_2;
    }else if (type3.checked){
        return type_3;
    }else if(type4.checked){
        return type_4;
    }else{
        return 0;
    }
}
// Bài 2
const BillEl = document.getElementById("btnBill").onclick = function () {
    const electricityEl = document.getElementById ("electricity").value;
    const price50 = 500
    const price100 = 650
    const price200 = 850
    const price350 = 1100
    const priceAfter = 1300
    if (electricityEl <= 50) {
      const bill = price50 * electricityEl;
      document.getElementById("giaTien").innerHTML = ` Số tiền điện phải đóng là: ${bill} VNĐ`
    } else if (electricityEl<= 100) {
      const bill = price100 * electricityEl;
      document.getElementById("giaTien").innerHTML = ` Số tiền điện phải đóng là: ${bill} VNĐ`
    } else if (electricityEl<= 200) {
      const bill = price200 * electricityEl;
      document.getElementById("giaTien").innerHTML = ` Số tiền điện phải đóng là: ${bill} VNĐ`
    } else if (electricityEl<= 350) {
      const bill = price350 * electricityEl;
      document.getElementById("giaTien").innerHTML = ` Số tiền điện phải đóng là: ${bill} VNĐ`
    } else if (electricityEl >350) {
      const bill = priceAfter * electricityEl;
      document.getElementById("giaTien").innerHTML = ` Số tiền điện phải đóng là: ${bill} VNĐ`
    }
  }