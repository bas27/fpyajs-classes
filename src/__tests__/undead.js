import Undead from '../js/undead';

test('Создание персонажа Daemon', () => {
  const recived = new Undead('Boby');
  const expected = {
    name: 'Boby',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defens: 25,
  };
  expect(recived).toEqual(expected);
});
