class Burger {
  constructor(builder) {
    this.size = builder.size;
    this.cheeze = builder.size || false;
    this.pepperoni = builder.pepperoni || false;
    this.lettuce = builder.lettuce || false;
    this.tomato = builder.tomato || false;
  }
}

class BurgerBuilder {
  constructor(size) {
    this.size = size;
  }

  addPepperoni() {
    this.pepperoni = true;
    return this;
  }
  addCheeze() {
    this.cheeze = true;
    return this;
  }
  addTomato() {
    this.tomato = true;
    return this;
  }
  addLettuce() {
    this.lettuce = true;
    return this;
  }
  build() {
    return new Burger(this);
  }
}

const myBurger = new BurgerBuilder(12)
  .addCheeze()
  .addLettuce()
  .build();
