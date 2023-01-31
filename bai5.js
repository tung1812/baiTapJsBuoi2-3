/**
 * Dau vao
 *  - Nhap vao 1 so co 2 chu so
 * Xu ly
 *  - Lay so hang don vi: so % 10
 *  - Lay so hang chuc:  so / 10
 *  - Tong 2 so
 * Dau ra
 *  - tong 2 ky so
 */
// Khai bao
var twoDigitNumber = 44;
var unitsDigit, tensDigit, value = 0;
// Xu ly
unitsDigit = parseInt(twoDigitNumber % 10);
tensDigit = parseInt(twoDigitNumber / 10);
value = tensDigit + unitsDigit;
// Dau ra
console.log("Tong 2 ky so", value);

function sumOfDigit() {
    // Dau vao
    var twoDigitNumber = document.getElementById("twoDigitNumber").value;
    twoDigitNumber = parseInt(twoDigitNumber);
    // Xu ly
    var unitsDigit = parseInt(twoDigitNumber % 10);
    var tensDigit = parseInt(twoDigitNumber / 10);
    var value = tensDigit + unitsDigit;
    var result = "The sum of 2 digit of this number is:" + " " + value;
    if ((document.getElementById("twoDigitNumber").value.length == 0)){
        alert("The input is empty")
    }
    if ((document.getElementById("twoDigitNumber").value.length != 2)){
        alert("Please enter a number with 2 digit!")
    }
    // Dau ra
    document.getElementById("sumOfDigit").innerHTML = result;

}