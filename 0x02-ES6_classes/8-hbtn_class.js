// 8-hbtn_class.js
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Override valueOf to return the size when cast to Number
  valueOf() {
    return this._size;
  }

  // Override toString to return the location when cast to String
  toString() {
    return this._location;
  }
}
