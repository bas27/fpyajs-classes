/* eslint-disable no-console */
// eslint-disable-next-line max-classes-per-file
const typeList = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];
const lenName = {
  min: 2,
  max: 10,
};

class Character {
  constructor(name, type, attack, defens, health = 100, level = 1) {
    if (name.length < lenName.min || name.length > lenName.max) {
      throw new Error('Ошибка: длина name имеет недопустимое значение');
    } else if (typeof name !== 'string') {
      throw new Error('Ошибка: установите строковое значение полю name');
    } else {
      this.name = name;
    }

    if (!typeList.includes(type)) {
      throw new Error('Ошибка: тип персонажа не соответствует заданному');
    } else {
      this.type = type;
    }

    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defens = defens;
  }

  levelUp(level = 1, attack = 0.2, defens = 0.2) {
    if (this.health > 0) {
      this.level += level;
      this.attack += this.attack * attack;
      this.defens += this.defens * defens;
      this.health = 100;
    } else {
      throw new Error('Ошибка: нельзя повысить левел умершего');
    }
    return this;
  }
}

// function aaa(key, val) {
//   aaa[key] = val
// }
// // eslint-disable-next-line no-return-assign
// Character.prototype.levelUp = () => this;

class Bowman extends Character {
  constructor(name, type = 'Bowman', attack = 25, defens = 25) {
    super(name, type, attack, defens);
  }
}

const bow1 = new Bowman('Nik');

// console.log(bow1);

console.log(bow1.levelUp());
console.log(bow1.levelUp())
