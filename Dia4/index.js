// #############################################
// P.O.O (Programación Orientada a Objetossssss)
// #############################################

// ¿Qué es la P.O.O?
/*
Es un paradigma de programación que se basa en el 
uso de "objetos" para representar entidades del mundo real dentro del software.
Cada objeto es una instancia de una clase, donde una clase es una plantilla
que define las propiedades (atributos) y comportamientos (métodos) que los objetos de este
tipo tendrán.


En términos generales, los pilares de la P.O.O son:
Abstracción : Representar entidades del mundo real con sus características esenciales.

Encapsulamiento : Ocultar los detalles internos y exponer solo lo necesario.

Herencia: Reutilizar código mediante una relación de tipo "es-un".

Polimorfismo: Permite que un mismo método se comporte de diferentes formas según el
contexto.

*/

const Persona = require('./models/Persona');
const CuentaBancaria = require('./models/CuentaBancaria'); 
const Perro = require('./models/Perro'); 
const Gato = require('./models/Gato');
const Pajaro = require('./models/Pajaro'); // Importamos la clase Pajaro
const pedro = new Persona('Pedro', 25);
pedro.saludar();


const cuenta = new CuentaBancaria('Pedro', 1000);
cuenta.depositar(500);
console.log(cuenta.verSaldo())// 1500


const animal1 = new Perro('Paco');
animal1.hablar(); // Paco esta haciendo un ruido.

const animal2 = new Gato('Abel');
animal2.hablar();

const animal3 = new Pajaro("Piolin","Canario"); // Creamos una instancia de Pajaro
animal3.hablar(); // Piolin es un Canario!!!!

/// Asociación
const Pedido = require('./models/Pedido');
const LineItem = require('./models/LineItem');

const pedido1 = new Pedido('P-001');
pedido1.addItem(new LineItem('Manzanas',3,1.2));
pedido1.addItem(new LineItem('Peras',2,1.5));

console.log('Total Pedido:',pedido1.total());

// Un LineItem no sabe de su pedido

const item= pedido1.items[0];
console.log('Item conoce el ID del pedido?:','id' in item);

//Bidireccional
const Autor = require('./models/Autor');
const Libro = require('./models/Libro');

const autor1 = new Autor(1,'Gabriel Garcia Marquez');
const libro1= new Libro('9786287641587','100 años de soledad');
const libro2= new Libro('9789580600015','Amor en los tiempos de cólera');

console.log(libro1);
console.log(autor1);
autor1.agregarLibro(libro1);
autor1.agregarLibro(libro2);
console.log(autor1);
console.log(libro1);

