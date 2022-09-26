// eslint-disable-next-line import/extensions
import Character from './character.js';

export default class Magician extends Character {
  constructor(name, type = 'Magician', attack = 10, defens = 40) {
    super(name, type, attack, defens);
  }
}
