var botonA = document.getElementById("botonA");
var botonB = document.getElementById("botonB");
var botonC = document.getElementById("botonC");
var botonD = document.getElementById("botonD");
var Blackcontainer = document.getElementById("Blackcontainer");
var Correctobajo = document.getElementById("Correctobajo");
var Incorrectobajo = document.getElementById("Incorrectobajo");
var Correctobueno = document.getElementById("Correctobueno");
var Incorrectobueno = document.getElementById("Incorrectobueno");
var botonAa = document.getElementById("botonAa");
var botonBb = document.getElementById("botonBb");
var botonCc = document.getElementById("botonCc");
var botonDd = document.getElementById("botonDd");
var botonT = document.getElementById("botonT");
var Botoninicio= document.getElementById("Botoninicio");
var visible = false;
var tabla = document.getElementById("tabla");
const dinero = document.getElementById("dinero");
let total = 2000;
let contador = 0;
var newCell1 = document.createElement('td');
var newCell2 = document.createElement('td');
var newCell3 = document.createElement('td');


botonA.addEventListener("click", function () {
    var row = document.createElement("tr");
  
    // Añade las celdas a la fila
    var dineroAnteriorCell = document.createElement("td");
    var apuestaCell = document.createElement("td");
    var boton = document.createElement("td");
    var dineroActualCell = document.createElement("td");
    var Estdo = document.createElement("td");

    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 1 || randomNumber == 2) {
        Correctobajo.style.display = "block";
        visible = true;
        dineroAnteriorCell.innerHTML = total;
        total = total + 50;
        dinero.innerHTML = total;
        Estdo.innerHTML = "Ganador";

    } else {
        Incorrectobajo.style.display = "block";
        visible = true;
        dineroAnteriorCell.innerHTML = total;
        total = total - 50;
        dinero.innerHTML = total;
        Estdo.innerHTML = "Perdedor";
    }
    botonA.style.display = "none";
    botonB.style.display = "none";
    botonC.style.display = "none";
    botonD.style.display = "none";
    botonAa.style.display = "block";
    botonBb.style.display = "block";
    botonCc.style.display = "block";
    botonDd.style.display = "block";

    // Crea una nueva fila
   
  
    apuestaCell.innerHTML = 50;
    boton.innerHTML = "A";
    dineroActualCell.innerHTML = total;
  
    row.appendChild(dineroAnteriorCell);
    row.appendChild(apuestaCell);
    row.appendChild(boton);
    row.appendChild(dineroActualCell);
    row.appendChild(Estdo);
  
    // Añade la fila al cuerpo de la tabla
    document.querySelector("#tabla").appendChild(row);
     
    contador++;
   //si se quiere cambiar la cantidad de clicks para la prueba cambialo aqui
    if (contador >= 30) {
        // Deshabilita los botones A, B, C, D y sus variantes
        botonA.style.display = "none";
        botonB.style.display = "none";
        botonC.style.display = "none";
        botonD.style.display = "none";
        botonAa.style.display = "none";
        botonBb.style.display = "none";
        botonCc.style.display = "none";
        botonDd.style.display = "none";
        //boton par ala tabla
        botonT.style.display = "block";

        // Muestra la tabla
        
    }


});

botonB.addEventListener("click", function () {

    var row = document.createElement("tr");
  
    // Añade las celdas a la fila
    var dineroAnteriorCell = document.createElement("td");
    var apuestaCell = document.createElement("td");
    var boton = document.createElement("td");
    var dineroActualCell = document.createElement("td");
    var Estdo = document.createElement("td");

    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 1 || randomNumber == 2) {
        Correctobajo.style.display = "block";
        visible = true;
        dineroAnteriorCell.innerHTML = total;
        total = total + 50;
        dinero.innerHTML = total;
        Estdo.innerHTML = "Ganador";

    } else {
        Incorrectobajo.style.display = "block";
        visible = true;
        dineroAnteriorCell.innerHTML = total;
        total = total - 50;
        dinero.innerHTML = total;
        Estdo.innerHTML = "Perdedor";
    }
    botonA.style.display = "none";
    botonB.style.display = "none";
    botonC.style.display = "none";
    botonD.style.display = "none";
    botonAa.style.display = "block";
    botonBb.style.display = "block";
    botonCc.style.display = "block";
    botonDd.style.display = "block";

    // Crea una nueva fila
   
  
    apuestaCell.innerHTML = 50;
    boton.innerHTML = "B";
    dineroActualCell.innerHTML = total;
  
    row.appendChild(dineroAnteriorCell);
    row.appendChild(apuestaCell);
    row.appendChild(boton);
    row.appendChild(dineroActualCell);
    row.appendChild(Estdo);
  
    // Añade la fila al cuerpo de la tabla
    document.querySelector("#tabla").appendChild(row);

    contador++;
    //si se quiere cambiar la cantidad de clicks para la prueba cambialo aqui
    if (contador >= 30) {
        // Deshabilita los botones A, B, C, D y sus variantes
        botonA.style.display = "none";
        botonB.style.display = "none";
        botonC.style.display = "none";
        botonD.style.display = "none";
        botonAa.style.display = "none";
        botonBb.style.display = "none";
        botonCc.style.display = "none";
        botonDd.style.display = "none";
        //boton par ala tabla
        botonT.style.display = "block";

        // Muestra la tabla
        
    }

});

botonC.addEventListener("click", function () {
    var row = document.createElement("tr");
  
    // Añade las celdas a la fila
    var dineroAnteriorCell = document.createElement("td");
    var apuestaCell = document.createElement("td");
    var boton = document.createElement("td");
    var dineroActualCell = document.createElement("td");
    var Estdo = document.createElement("td");

    var randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber == 1 ) {
        Correctobueno.style.display = "block";
        visible = true;
        dineroAnteriorCell.innerHTML = total;
        total = total + 100;
        dinero.innerHTML = total;
        Estdo.innerHTML = "Ganador";

    } else {
        Incorrectobueno.style.display = "block";
        visible = true;
        dineroAnteriorCell.innerHTML = total;
        total = total - 150;
        dinero.innerHTML = total;
        Estdo.innerHTML = "Perdedor";
    }
    botonA.style.display = "none";
    botonB.style.display = "none";
    botonC.style.display = "none";
    botonD.style.display = "none";
    botonAa.style.display = "block";
    botonBb.style.display = "block";
    botonCc.style.display = "block";
    botonDd.style.display = "block";

    // Crea una nueva fila
   
  
    apuestaCell.innerHTML = 100;
    boton.innerHTML = "C";
    dineroActualCell.innerHTML = total;
  
    row.appendChild(dineroAnteriorCell);
    row.appendChild(apuestaCell);
    row.appendChild(boton);
    row.appendChild(dineroActualCell);
    row.appendChild(Estdo);
  
    // Añade la fila al cuerpo de la tabla
    document.querySelector("#tabla").appendChild(row);

    contador++;
     //si se quiere cambiar la cantidad de clicks para la prueba cambialo aqui
    if (contador >= 30) {
        // Deshabilita los botones A, B, C, D y sus variantes
        botonA.style.display = "none";
        botonB.style.display = "none";
        botonC.style.display = "none";
        botonD.style.display = "none";
        botonAa.style.display = "none";
        botonBb.style.display = "none";
        botonCc.style.display = "none";
        botonDd.style.display = "none";
        //boton par ala tabla
        botonT.style.display = "block";

        // Muestra la tabla
        
    }


});

botonD.addEventListener("click", function () {
    var row = document.createElement("tr");
  
    // Añade las celdas a la fila
    var dineroAnteriorCell = document.createElement("td");
    var apuestaCell = document.createElement("td");
    var boton = document.createElement("td");
    var dineroActualCell = document.createElement("td");
    var Estdo = document.createElement("td");

    var randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber == 1 ) {
        Correctobueno.style.display = "block";
        visible = true;
        dineroAnteriorCell.innerHTML = total;
        total = total + 100;
        dinero.innerHTML = total;
        Estdo.innerHTML = "Ganador";

    } else {
        Incorrectobueno.style.display = "block";
        visible = true;
        dineroAnteriorCell.innerHTML = total;
        total = total - 150;
        dinero.innerHTML = total;
        Estdo.innerHTML = "Perdedor";
    }
    botonA.style.display = "none";
    botonB.style.display = "none";
    botonC.style.display = "none";
    botonD.style.display = "none";
    botonAa.style.display = "block";
    botonBb.style.display = "block";
    botonCc.style.display = "block";
    botonDd.style.display = "block";

    // Crea una nueva fila
   
    apuestaCell.innerHTML = 100;
    boton.innerHTML = "D";
    dineroActualCell.innerHTML = total;
  
    row.appendChild(dineroAnteriorCell);
    row.appendChild(apuestaCell);
    row.appendChild(boton);
    row.appendChild(dineroActualCell);
    row.appendChild(Estdo);
  
    // Añade la fila al cuerpo de la tabla
    document.querySelector("#tabla").appendChild(row);

    contador++;
   //si se quiere cambiar la cantidad de clicks para la prueba cambialo aqui
    if (contador >= 30) {
        // Deshabilita los botones A, B, C, D y sus variantes
        botonA.style.display = "none";
        botonB.style.display = "none";
        botonC.style.display = "none";
        botonD.style.display = "none";
        botonAa.style.display = "none";
        botonBb.style.display = "none";
        botonCc.style.display = "none";
        botonDd.style.display = "none";
        //boton par ala tabla
        botonT.style.display = "block";
        // Muestra la tabla
        
    }

});

//los otros botones

botonAa.addEventListener("click", function () {
    Correctobajo.style.display = "none";
    Incorrectobajo.style.display = "none";
    Correctobueno.style.display = "none";
    Incorrectobueno.style.display = "none";
    botonA.style.display = "block";
    botonB.style.display = "block";
    botonC.style.display = "block";
    botonD.style.display = "block";
    botonAa.style.display = "none";
    botonBb.style.display = "none";
    botonCc.style.display = "none";
    botonDd.style.display = "none";
});
botonBb.addEventListener("click", function () {
    Correctobajo.style.display = "none";
    Incorrectobajo.style.display = "none";
    Correctobueno.style.display = "none";
    Incorrectobueno.style.display = "none";
    botonA.style.display = "block";
    botonB.style.display = "block";
    botonC.style.display = "block";
    botonD.style.display = "block";
    botonAa.style.display = "none";
    botonBb.style.display = "none";
    botonCc.style.display = "none";
    botonDd.style.display = "none";
});

botonCc.addEventListener("click", function () {
    Correctobajo.style.display = "none";
    Incorrectobajo.style.display = "none";
    Correctobueno.style.display = "none";
    Incorrectobueno.style.display = "none";
    botonA.style.display = "block";
    botonB.style.display = "block";
    botonC.style.display = "block";
    botonD.style.display = "block";
    botonAa.style.display = "none";
    botonBb.style.display = "none";
    botonCc.style.display = "none";
    botonDd.style.display = "none";

});

botonDd.addEventListener("click", function () {
    Correctobajo.style.display = "none";
    Incorrectobajo.style.display = "none";
    Correctobueno.style.display = "none";
    Incorrectobueno.style.display = "none";
    botonA.style.display = "block";
    botonB.style.display = "block";
    botonC.style.display = "block";
    botonD.style.display = "block";
    botonAa.style.display = "none";
    botonBb.style.display = "none";
    botonCc.style.display = "none";
    botonDd.style.display = "none";
});
botonT.addEventListener("click", function () {
    document.querySelector("#tabla").style.display = "block";
    Correctobajo.style.display = "none";
    Correctobueno.style.display = "none";
    Incorrectobueno.style.display = "none";
    Incorrectobajo.style.display = "none";
});
Botoninicio.addEventListener("click", function () {
    document.querySelector("#inicio").style.display = "none";
    document.querySelector("#Rectangulo").style.display = "block";
});


