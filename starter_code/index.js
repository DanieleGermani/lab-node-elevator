/*jshint esversion: 6 */
const Elevator = require('./elevator.js');
const Person = require('./person.js');
const victor = new Person("Victor", 2, 9, "Up");
// const juan = new Person("Juan", 8, 4, "Down");
 const daniele = new Person("Daniele", 0, 8, "Up");
// const fernanda = new Person("Fernanda", 5, 1, "Down");
 const claudia = new Person("Claudia", 3, 6, "Up");

let elevator = new Elevator();
elevator.start();
elevator.call(victor);
elevator.update();
 //elevator.call(juan);
 elevator.call(daniele);
// elevator.call(fernanda);
 elevator.call(claudia);
