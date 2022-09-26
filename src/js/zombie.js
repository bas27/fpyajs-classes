import Character from './character';

export default class Zombie extends Character {
  constructor(name, type = 'Zombie', attack = 40, defens = 10) {
    super(name, type, attack, defens);
  }
}
