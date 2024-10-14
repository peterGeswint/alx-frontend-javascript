// 7-airport.js
export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Override the toString method to return [object CODE]
  toString() {
    return `[object ${this._code}]`;
  }
}
