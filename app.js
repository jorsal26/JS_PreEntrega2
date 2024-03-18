
//OBJETOS

// //OBJETOS LITERALES
// const miPerro = {
//     nombre: "Lio",
//     raza: "Golden Retriever",
//     edad: "6",
//     peso: "36"
// }

// // CONSTRUCTORES - USO DE THIS
// function Persona(nombre, edad, calle) {
//     this.nombre = nombre;
//     this.edad 	 = edad;
//     this.calle  = calle;
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");


// console.log(persona1);
// console.log(persona2);
// alert("Datos de Personas\n"+persona1.nombre+", tiene "+persona1.edad+" y viven en la calle "+persona1.calle+".\n"+persona2.nombre+", tiene "+persona2.edad+" y viven en la calle "+persona2.calle);


// // METODOS EN OBJETOS JS
// let cadena = "HOLA CODER";
// //Propiedad de objeto String: Largo de la cadena.
// console.log(cadena.length);
// //Método de objeto String: Pasar a minúscula.
// console.log(cadena.toLowerCase());
// //Método de objeto String: Pasar a mayúscula.
// console.log(cadena.toUpperCase());



// // METODOS PERSONALIZADOS
// function Persona(nombre, edad, calle) {
//     this.nombre = nombre;
//     this.edad   = edad;
//     this.calle  = calle;
//     this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
// alert("Datos de Personas\n"+persona1.nombre+", tiene "+persona1.edad+" y viven en la calle "+persona1.calle+".\n"+persona2.nombre+", tiene "+persona2.edad+" y viven en la calle "+persona2.calle);
// persona1.hablar();
// persona2.hablar();


// // OPERADOR IN y FOR ... IN
// const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
// //devuelve true porque la clave "nombre" existe en el objeto persona1
// console.log( "nombre" in persona1);
// //devuelve false porque la clave "origen" no existe en el objeto persona1
// console.log( "origen" in persona1);
// //recorremos todas las propiedades del objeto con el ciclo for...in
// for (const propiedad in persona1) {
//     console.log(persona1[propiedad]);
// }

// CLASES
// class Persona{
//     constructor(nombre, edad, calle) {
//         this.nombre = nombre;
//         this.edad   = edad;
//         this.calle  = calle;
//     }
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
// alert("Datos de Personas\n"+persona1.nombre+", tiene "+persona1.edad+" y viven en la calle "+persona1.calle+".\n"+persona2.nombre+", tiene "+persona2.edad+" y viven en la calle "+persona2.calle);

// CLASES Y METODOS
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");
producto1.sumaIva();
producto2.sumaIva();
alert("PRODUCTOS\n"+producto1.nombre+" - Precio + IVA "+parseInt(producto1.precio)+" - Fue Vendido: "+producto1.vendido+".\n"+producto2.nombre+" - Precio "+parseInt(producto2.precio)+" - Fue Vendido: "+producto2.vendido);
producto1.vender();
alert("PRODUCTOS\n"+producto1.nombre+" - Precio + IVA "+parseInt(producto1.precio)+" - Fue Vendido: "+producto1.vendido+".\n"+producto2.nombre+" - Precio "+parseInt(producto2.precio)+" - Fue Vendido: "+producto2.vendido);

