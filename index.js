'use strict';

class Cat {
  #breed;
  #nickname;
  #amountOfCatchedMouses;
  #successChance;
  constructor(nickname, breed, successChance = 0.5) {
    this.#breed = breed;
    this.#nickname = nickname;
    this.#amountOfCatchedMouses = 0;
    this.#successChance = successChance;
  };

  get successChance() {
    return this.#successChance;
  };

  get breed() {
    return this.#breed;
  };

  get nickname() {
    return this.#nickname;
  };

  #setNickname(newNickname) {
    if(typeof newNickname !== 'string') {
      throw new TypeError('Type of nickname must be string');
    };

    this.#nickname = newNickname;
  };

  get amountOfCatchedMouses() {
    return this.#amountOfCatchedMouses;
  };

  mew() {
    console.log('Meow');
  };

  eat() {
    console.log(`${this.#nickname} is eating`);
  };

  sleep() {
    console.log(`${this.#nickname} is sleeping`);
  };

  cathingMouses() {
    if(Math.random() > this.#successChance) {
      this.#amountOfCatchedMouses += 10;
      return this.#amountOfCatchedMouses;
    } else {
      return this.#amountOfCatchedMouses;
    }
  };
};

const cat1 = new Cat('British Shinshila', 'Myrzik');

class StrayCat extends Cat {
  #eatedMousesAmount;
  #amountOfCatchedMouses;
  constructor(nickname) {
    super(nickname, 'stray', 0.7);
    this.#amountOfCatchedMouses = 0;
    this.#eatedMousesAmount = 0;
  };

  get amountOfCatchedMouses() {
    return this.#amountOfCatchedMouses;
  }

  eat() {
    if(this.#eatedMousesAmount <= this.#amountOfCatchedMouses) {
    this.#eatedMousesAmount += 5;
    this.#amountOfCatchedMouses -= 5;
  } else {
    throw new Error('Go hunt');
  };
  return this.#eatedMousesAmount;
};
};

const cat2 = new StrayCat('Barsik');
