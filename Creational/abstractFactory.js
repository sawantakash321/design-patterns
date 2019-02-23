/*
  Door interface :

  getDescription()
*/

class WoodenDoor {
  getDescription() {
    console.log('I am an Wooden Door');
  }
}

class IronDoor {
  getDescription() {
    console.log('I am an Iron Door');
  }
}

/*
  DoorFittingExpert interface : 
  
  getDescription()
*/

class Welder {
  getDescription() {
    console.log('I can only fit iron doors');
  }
}

class Carpenter {
  getDescription() {
    console.log('I can only fit wooden door');
  }
}

/*
  DoorFactory interface:

  makeDoor()
  makeFittingExpert()
*/

class WoodenDoorFactory {
  makeDoor() {
    return new WoodenDoor();
  }

  makeFittingExpert() {
    return new Carpenter();
  }
}

class IronDoorFactory {
  makeDoor() {
    return new IronDoor();
  }

  makeFittingExpert() {
    return new Welder();
  }
}

const woodenFactory = new WoodenDoorFactory();
const door = woodenFactory.makeDoor();
const expert = woodenFactory.makeFittingExpert();

door.getDescription();
expert.getDescription();
