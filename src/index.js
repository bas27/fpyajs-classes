// eslint-disable-next-line import/extensions
import Bowman from './js/bowman.js';
// eslint-disable-next-line import/extensions
import Daemon from './js/daemon.js';
// eslint-disable-next-line import/extensions
import Magician from './js/magician.js';
// eslint-disable-next-line import/extensions
import Swordsman from './js/swordsman.js';
// eslint-disable-next-line import/extensions
import Undead from './js/undead.js';
// eslint-disable-next-line import/extensions
import Zombie from './js/zombie.js';

const ch1 = new Bowman('Nik');
const ch2 = new Swordsman('Zulu');
const ch3 = new Daemon('Luc');
const ch4 = new Magician('Mag');
const ch5 = new Undead('Dai');
const ch6 = new Zombie('Zuma');

// eslint-disable-next-line no-console
console.log('Персонаж 1:', ch1, ch2, ch3, ch4, ch5, ch6);
