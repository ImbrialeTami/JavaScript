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
    eleccion = parseInt(prompt(
        "Bienvenido a nuestra página de entrenamiento. Elija su objetivo: \n1. Aumento masa muscular. \n2. Disminución de grasa corporal \n3. Mayor resistencia \n4. Salir"
    ));

    switch (eleccion) {
        case 1:
            total += 15000;
            console.log("Agregaste Aumento de masa muscular (+$15.000).");
            console.log("Tu total acumulado es de $" + total);
            break;

        case 2:
            total += 18000;
            console.log("Agregaste Disminución de grasa corporal (+$18.000).");
            console.log("Tu total acumulado es de $" + total);
            break;

        case 3:
            total += 12000;
            console.log("Agregaste Mayor resistencia (+$12.000).");
            console.log("Tu total acumulado es de $" + total);
            break;

        case 4:
            console.log("Gracias por su visita!");
            console.log("El total final de tu plan es de $" + total);
            break;

        default:
            console.log("El número ingresado no es válido");
            break;
    }

} while (eleccion !== 4);



alert = alert ("Vuelve pronto");   
console.log(alert);
