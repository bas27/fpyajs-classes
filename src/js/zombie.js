// eslint-disable-next-line import/extensions
import Character from './character.js';

export default class Zombie extends Character {
  constructor(name, type = 'Zombie', attack = 40, defens = 10) {
    super(name, type, attack, defens);
  }
}
