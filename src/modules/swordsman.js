// eslint-disable-next-line import/extensions
import Character from './character.js';

export default class Swordsman extends Character {
  constructor(name, type = 'Swordsman', attack = 40, defens = 10) {
    super(name, type, attack, defens);
  }
}
