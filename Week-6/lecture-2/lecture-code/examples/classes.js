class Rectangle {

  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
}

class Box extends Rectangle {
  constructor(length, width, height) {
    super(length, width);
    this.height = height;
  }

  volume() {
    return this.area() * this.height;
  }

}

const rec = new Rectangle(3, 4);
console.log(rec);
console.log("area = ", rec.area());

const box = new Box(3, 4, 5);
console.log(box);
console.log("area = ", box.area());
console.log("volume = ", box.volume());