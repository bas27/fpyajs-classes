// eslint-disable-next-line import/extensions
import Character from './character.js';

export default class Undead extends Character {
  constructor(name, type = 'Undead', attack = 25, defens = 25) {
    super(name, type, attack, defens);
  }
}
