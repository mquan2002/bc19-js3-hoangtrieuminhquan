let address ="Hoàng Triệu Minh Quân, BC19-Javascript5"

console.log(address);

document.getElementById("result").onclick = function calc() {
    let day = Number(document.querySelector("#day").value);
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);let num3 = Number(document.querySelector("#num3").value);
    const total = num1 + num2 + num3;
    const areaEL = document.getElementById("area").value;
    if(areaEL === "A"){
        total + 2;
        return;
    }else if(total === "B"){
        total + 1;
    }else if(total === "C"){
        total + 0.5;
    }
    const typeEL = document.getElementById("type").value;
    if(typeEL === "1"){
        total + 2.5;
    }else if(typeEL === "2"){
        total + 1.5;
    }else if(typeEL === "3"){
        total + 1;
    }
    
    if (total >= day) {
        return result ="đậu";
    }else if (total < day) {
        return result="rớt";
    }

    console.log("Tổng điểm thi:",result);
    document.getElementById("bai1").innerHTML = `Thí sinh : ${result}` 
}
