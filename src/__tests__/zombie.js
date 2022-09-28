import Zombie from '../js/zombie';

test('Создание персонажа Daemon', () => {
  const recived = new Zombie('Boby');
  const expected = {
    name: 'Boby',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defens: 10,
  };
  expect(recived).toEqual(expected);
});
