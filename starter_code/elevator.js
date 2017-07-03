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
    if (this.passengers.length > 0) {
      if (this.floor < this.passengers[0].destinationFloor) {
        this.floorUp();
        this.passengers.forEach((elem, indexOf, arr) => {
          if (elem.destinationFloor === this.floor && elem.direction === this.direction) {
            this._passengersLeave(indexOf);
          }
        });
        this.requests.forEach((elem, indexOf, arr) => {
          if (elem.originFloor === this.floor && elem.direction === this.direction) {
            this._passengersEnter(indexOf);
          }
        });
      } else if (this.floor > this.passengers[0].destinationFloor) {
        this.floorDown();
        this.passengers.forEach((elem, indexOf, arr) => {
          if (elem.destinationFloor === this.floor && elem.direction === this.direction) {
            this._passengersLeave(indexOf);
          }
        });
        this.requests.forEach((elem, indexOf, arr) => {
          if (elem.originFloor === this.floor && elem.direction === this.direction) {
            this._passengersEnter(indexOf);
          }
        });
      }
    } else {
      if (this.requests.length > 0) {
        if (this.floor < this.requests[0].originFloor) {
          this.floorUp();
        } else if (this.floor > this.requests[0].originFloor) {
          this.floorDown();
        } else {
          this._passengersEnter(0);
        }
      }
    }
    this.log();
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
    console.log(`direction: ${this.direction} | floor: ${this.floor} | passengers: ${this.passengers.length} | requests: ${this.requests.length}`);
  }
}


module.exports = Elevator;
