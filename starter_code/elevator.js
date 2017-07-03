/*jshint esversion: 6 */
class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "Up";
    this.waitingList = [];
    this.passengers = [];
    this.destinations = [];
    this.servedPassengers = [];

  }

  start() {
    this.intervalID = setInterval(() => this.update(), 1000);
  }

  stop() {
    clearInterval(this.intervalID);
  }

  update() {
    this.log();
    this.floorDown();
  }

  _passengersEnter(indexOf) {
    this.passengers.push(this.requests[indexOf]);
    this.requests.splice(indexOf, 1);
  }

  _passengersLeave() {
    this.servedPassengers.push(this.passengers[indexOf]);
    this.passengers.splice(indexOf, 1);
  }

  floorUp() {
    this.floor++;
    if (this.floor > this.MAXFLOOR) {
      this.floor = this.MAXFLOOR;
      this.direction = "Up";
    }

  }
  floorDown() {
    this.floor--;
    if (this.floor < 0) {
      this.floor = 0;
      this.direction = "Down";
    }

  }
  call(person) {
    this.requests.push(person);

  }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
    console.log("Personas en espera:");
    console.log(this.requests);
    console.log(" has enter the elevator:");
    console.log(this.passengers);
    console.log("Los pasajeros depositados en destino son: ");
    console.log(this.servedPassengers + "\n");
  }
}


module.exports = Elevator;
