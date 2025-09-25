alert = alert ("Bienvenido!");   
console.log(alert);



let nombreIngresado = prompt("Ingrese su nombre")  //PROMPT
console.log ("Hola" + nombreIngresado);

let apellido = prompt("Ingrese su apellido")
console.log (apellido);

let edad = prompt("Ingrese su edad")
console.log (apellido);


let objetivo = prompt ("Ingrese su objetivo: aumento masa muscular / disminucion grasa ")
console.log(objetivo);

if (objetivo == "aumento masa muscular") {
    console.log("Rutina aumento masa muscular"); 
}
if (objetivo == "disminucion grasa") {
    console.log("Rutina disminucion de grasa"); 
}



let total = 0;
let eleccion;
do {
    eleccion = prompt (
        "Bienvenido a nuestra página de entrenamiento. Elija su objetivo: \n1. Aumento masa muscular. \n2. Disminucion de grasa corporal \n3. Mayor resistencia \n4. Salir"
    );
switch (eleccion) {
    case "1":
        total = total + $15000;
        console.log("Su total es de $15.000");
    break;

    case "2":
        total = total + $18000;
        console.log("Su total es de $18.000");
    break;

    case "3":
        total = total + $12000;
        console.log("Su total es de $12.000");
    break;

        case "4":
        console.log("Gracias por su visita!");
    break;

    default:
    console.log("El numero ingresado no es valido");
        break;
}
} while (eleccion !== "4");


alert = alert ("Vuelve pronto");   
console.log(alert);
