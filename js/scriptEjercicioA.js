console.log("Ejercio a")

var cantidadDeGatos= +prompt("Ingrese la cantidad de gatos"); 

while(isNaN(cantidadDeGatos) ||cantidadDeGatos<1 || cantidadDeGatos % 1 !== 0){

    alert("No se ingresó un numero válido");
    cantidadDeGatos= +prompt("Ingrese la cantidad de gatos"); 

}

var cantidadDeEmojis=3; 

for(  var i=0; i<cantidadDeGatos;i++) {

    switch(i%cantidadDeEmojis){

        case 0: console.log("Gato #"+(i+1)+":😺"); break;
        case 1: console.log("Gato #"+(i+1)+":😸"); break;
        case 2: console.log("Gato #"+(i+1)+":😹"); break;

    }

}