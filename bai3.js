/**
 * Dau vao
 *  - So tien USD
 *  - Hang so (Ty gia USD) = 23.500 VND
 * Xu ly
 *  - So tien USD * ty gia USD
 * Dau ra
 *  - So tien sau quy doi
 */
// Khai bao so tien USD

function exchange () {
    // Dau vao
    var usdAmount = document.getElementById("usdAmount").value;
    const exchangeRate = 23500;
    usdAmount = parseInt(usdAmount);
    // Xu ly
    var exchangeValue = usdAmount * exchangeRate;
    var result = "Exchanged Value:" + " " + exchangeValue + "VND"
    if ((document.getElementById("usdAmount").value.length == 0)){
        alert("The input is empty")
    }
    // Dau ra
    document.getElementById("exchangeValue").innerHTML = result;
}