/**
 * Dau vao
 *  - 5 so thuc
 * Xu ly
 *  - Tinh tong cua 5 so thuc
 *  - Lay tong cua 5 so chia cho 5
 * Dau ra
 *  - Gia tri trung binh cua 5 so thuc
 */
// Khai bao 5 so thuc


function average() {
    // Dau vao
    var realNumber1 = document.getElementById("realNumber1").value;
    var realNumber2 = document.getElementById("realNumber2").value;
    var realNumber3 = document.getElementById("realNumber3").value;
    var realNumber4 = document.getElementById("realNumber4").value;
    var realNumber5 = document.getElementById("realNumber5").value;
    realNumber1 = parseInt(realNumber1);
    realNumber2 = parseInt(realNumber2);
    realNumber3 = parseInt(realNumber3);
    realNumber4 = parseInt(realNumber4);
    realNumber5 = parseInt(realNumber5);
    // Xu ly
    var averageValue = (realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5) / 5;
    var result = "Average Value:" + averageValue;
    if ((document.getElementById("realNumber1").value.length == 0) || (document.getElementById("realNumber2").value.length == 0) || (document.getElementById("realNumber3").value.length == 0) || (document.getElementById("realNumber4").value.length == 0) || (document.getElementById("realNumber5").value.length == 0)){
        alert("The input is empty")
    }
    // Dau ra
    document.getElementById("average").innerHTML = result;

}