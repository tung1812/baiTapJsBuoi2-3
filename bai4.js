/**
 * Dau vao
 *  - chieu dai, chieu rong cua hinh chu nhat
 * Xu ly
 *  - dien tich = dai * rong
 *  - chu vi = dai + rong
 *  - chu vi = chu vi / 2
 * Dau ra
 *  - chu vi
 *  - Dien tich
 */


function rectangle() {
    // Dau vao
    var recLength = document.getElementById("recLength").value;
    var recWidth = document.getElementById("recWidth").value;
    recLength = parseInt(recLength);
    recWidth = parseInt(recWidth);
    // Xu ly
    var area = recLength * recWidth;
    var perimeter = (recLength + recWidth) * 2;
    var result = "Perimeter:" + " " + perimeter + ";" + " " + "Area:" + " " + area;
    if ((document.getElementById("recLength").value.length == 0) || (document.getElementById("recWidth").value.length == 0)){
        alert("The input is empty")
    }
    // Dau ra
    document.getElementById("result").innerHTML = result;
}