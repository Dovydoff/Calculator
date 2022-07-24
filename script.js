


let total;
let sum = function (){
    let pirmas = document.getElementById("pirmas").value;
    let antras = document.getElementById("antras").value;
    document.getElementById("total").innerHTML = parseInt(pirmas) + parseInt(antras);
};
let sub = function (){
    let pirmas = document.getElementById("pirmas").value;
    let antras = document.getElementById("antras").value;
    document.getElementById("total").innerHTML = parseInt(pirmas) - parseInt(antras);
};

let div = function (){
    let pirmas = document.getElementById("pirmas").value;
    let antras = document.getElementById("antras").value;
    document.getElementById("total").innerHTML = parseInt(pirmas) / parseInt(antras);
};
let mul = function (){
    let pirmas = document.getElementById("pirmas").value;
    let antras = document.getElementById("antras").value;
    document.getElementById("total").innerHTML = parseInt(pirmas) * parseInt(antras);
};
  
let mod = function (){
    let pirmas = document.getElementById("pirmas").value;
    let antras = document.getElementById("antras").value;
    document.getElementById("total").innerHTML = parseInt(pirmas) % parseInt(antras);
};

function empty() {
    document.getElementById("pirmas").value = "";
    document.getElementById("antras").value = "";
    document.getElementById("total").value = "";

}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}



// let switchCalculate;

// switch (switchCalculate) {
//     case 0:
//     document.getElementById("total").innerHTML = parseInt(pirmas) + parseInt(antras);
//     alert.sum();   
//     break;
//     case 1:      
//      document.getElementById("total").innerHTML = parseInt(pirmas) - parseInt(antras);
//     break; 
//     case 2:      
//      document.getElementById("total").innerHTML = parseInt(pirmas) / parseInt(antras);
//     break; 

//     case 3:      
//     document.getElementById("total").innerHTML = parseInt(pirmas) * parseInt(antras);
//    break; 

//    case 4:      
//    document.getElementById("total").innerHTML = parseInt(pirmas) % parseInt(antras);
//   break; 

//     default:
//         break;
// }
