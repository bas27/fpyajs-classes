// eslint-disable-next-line import/extensions
import Character from './character.js';

export default class Bowman extends Character {
  constructor(name, type = 'Bowman', attack = 25, defens = 25) {
    super(name, type, attack, defens);
  }
}
