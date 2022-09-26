const typeList = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

export default class Character {
  #min = 2;

  #max = 10;

  constructor(name, type, attack, defens, health = 100, level = 1) {
    this.name = name;
    if (name.length < this.#min || name.length > this.#max) {
      throw new Error('Ошибка: длина name превышает допустимое значение');
    }
    if (typeof name !== 'string') {
      throw new Error('Ошибка: установите строковое значение полю name');
    }
    this.type = type;
    if (!typeList.includes(type)) {
      throw new Error('Ошибка: тип персонажа не соответствует заданному');
    }
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defens = defens;
  }
}
