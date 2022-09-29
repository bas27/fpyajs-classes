import Swordsman from '../js/swordsman';

test('Создание персонажа Daemon', () => {
  const recived = new Swordsman('Boby');
  const expected = {
    name: 'Boby',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(recived).toEqual(expected);
});
