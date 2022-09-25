import Bowman from './modules/bowman.js';
import Daemon from './modules/daemon.js';
import Magician from './modules/magician.js';
import Swordsman from './modules/swordsman.js';
import Undead from './modules/undead.js';
import Zombie from './modules/zombie.js';

const ch1 = new Bowman('Nik');
const ch2 = new Swordsman('Zulu');
const ch3 = new Daemon('Luc');
const ch4 = new Magician('Mag');
const ch5 = new Undead('Dai');
const ch6 = new Zombie('Zuma');

console.log('Персонаж 1:', ch1, ch2, ch3, ch4, ch5, ch6);
