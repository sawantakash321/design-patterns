/* Door 
   getWidth()
   getHeight()
*/

class WoodenDoor {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
}

const DoorFactory = {
  makeDoor: (width, height) => new WoodenDoor(width, height),
};

const door = DoorFactory.makeDoor(10, 20);
console.log(door.getWidth());
console.log(door.getHeight());
