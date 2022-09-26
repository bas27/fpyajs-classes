// eslint-disable-next-line import/extensions
import Character from './character.js';

export default class Daemon extends Character {
  constructor(name, type = 'Daemon', attack = 10, defens = 40) {
    super(name, type, attack, defens);
  }
}