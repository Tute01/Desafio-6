console.log("Ejercio c")

var cantidadDeGatos= +prompt("Ingrese la cantidad de gatos"); 

while(isNaN(cantidadDeGatos) ||cantidadDeGatos<1 || cantidadDeGatos % 1 !== 0){
    alert("No se ingresó un numero válido");
     cantidadDeGatos= +prompt("Ingrese la cantidad de gatos"); 
}

var cantidadDepasos= +prompt("Ingrese la cantidad de pasos"); 

while(Number.isNaN(cantidadDepasos) ||cantidadDepasos<1 || cantidadDepasos % 1 !== 0){
    alert("No se ingresó un numero válido");
     cantidadDepasos= +prompt("Ingrese la cantidad de pasos"); 
}


for(  var i=0; i<cantidadDeGatos;i++) {
    var imprimir= "Gato #"+(i+1)+": 🐈";
    if(i%2!=0){
        imprimir+="⬛";
    }
 
   for(var j=0;j<cantidadDepasos;j++){
        imprimir += "🐾";
   }
   console.log(imprimir);
}