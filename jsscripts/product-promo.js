'use strict';


// 0 = Name, 1 = Descriçao, 2 = Preço anterior, 3 = Preço


const products = {
    Chill: ["Chill Pimenta", "","R$19,90", "R$17,90"],

    Rufalo: ["Rufalo Sauce American", "","R$21,90","R$20"],

    Uruguaio: ["Sal Uruguaio","","R$26,90","R$22,90"],

    Fumaca: ["Fumaça em pó","","R$21","R$20"],

    Kitapimentado: ["Kit apimentado","","R$82,99","R$79,99"],

    Chimo: ["Sal entrefino","","R$24,99","R$19,90"],

    Cordeiro: ["Sal para cordeiro","","R$29,99","R$25,99"],

    Saldefumado: ["Parrila defumado","","R$","R$ "],

    Chimichurri: ["Chimichurri","","R$","R$ "],

    Salpimenta: ["Sal apimentado","","R$","R$ "],

    Salsacriola: ["Salsa criola","","R$","R$ "],

    novo: ["","","R$","R$"], 

 
}

document.getElementById("nameRufalo").innerHTML = products.Rufalo[0];
document.getElementById("descricaoRufalo").innerHTML = products.Rufalo[1];
document.getElementById("subpriceRufalo").innerHTML = products.Rufalo[2];
document.getElementById("priceRufalo").innerHTML = products.Rufalo[3];

document.getElementById("nameKitapimentado").innerHTML = products.Kitapimentado[0];
document.getElementById("descricaoKitapimentado").innerHTML = products.Kitapimentado[1];
document.getElementById("subpriceKitapimentado").innerHTML = products.Kitapimentado[2];
document.getElementById("priceKitapimentado").innerHTML = products.Kitapimentado[3];

document.getElementById("nameChimo").innerHTML = products.Chimo[0];
document.getElementById("descricaoChimo").innerHTML = products.Chimo[1];
document.getElementById("subpriceChimo").innerHTML = products.Chimo[2];
document.getElementById("priceChimo").innerHTML = products.Chimo[3];

document.getElementById("nameUruguaio").innerHTML = products.Uruguaio[0];
document.getElementById("descricaoUruguaio").innerHTML = products.Uruguaio[1];
document.getElementById("subpriceUruguaio").innerHTML = products.Uruguaio[2];
document.getElementById("priceUruguaio").innerHTML = products.Uruguaio[3];

