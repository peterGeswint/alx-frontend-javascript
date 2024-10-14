// 6-sky_high.js
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Call the parent class constructor to set sqft
    super(sqft);

    // Validate that floors is a number
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }

    // Set floors as a private attribute
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
