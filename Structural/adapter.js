/* 
  Lion Interface :

  roar()
*/

class AfricanLion {
  roar() {}
}

class AsianLion {
  roar() {}
}

class Hunter {
  hunt(lion) {
    lion.roar();
  }
}

class WildDog {
  bark() {}
}

class WildDogAdapter {
  constructor(dog) {
    this.dog = dog;
  }

  roar() {
    this.dog.bark();
  }
}

wildDog = new WildDog();
wildDogAdapter = new WildDogAdapter(WildDog);

hunter = new Hunter();
hunter.hunt(WildDogAdapter);
