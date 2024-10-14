import Car from './10-car'; // Import the Car class

const _range = Symbol('range');
const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent class constructor
    this[_range] = range; // Store the range in a private symbol property
  }

  // Override the cloneCar method to return an instance of Car
  cloneCar() {
    // Return a new instance of Car using the symbols from the parent class
    return new Car(this[_brand], this[_motor], this[_color]);
  }
}
