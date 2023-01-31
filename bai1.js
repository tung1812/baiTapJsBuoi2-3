/**
 * Mo hinh 3 khoi
 * Dau vao
 *  - So ngay lam
 *  - hang so (Luong 1 ngay): 100.000
 * Xu ly
 *  - luong 1 ngay * so ngay lam
 * Dau ra
 *  - Luong nhan vien
 */

// Khai bao bien va hang so

function salary() {
    // Dau vao
    var workingDays = document.getElementById("workingDays").value;
    var payPerDay = document.getElementById("payPerDay").value;
    workingDays = parseInt(workingDays);
    payPerDay = parseInt(payPerDay);
    // Xu ly
    var salary = workingDays * payPerDay;
    var result = "Salary:" + " " + salary + "VND";
    if ((document.getElementById("workingDays").value.length == 0) || (document.getElementById("payPerDay").value.length == 0)){
        alert("The input is empty")
    }
    // Dau ra
    document.getElementById("salary").innerHTML = result;
}