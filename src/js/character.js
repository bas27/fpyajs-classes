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

export default class Character {
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
