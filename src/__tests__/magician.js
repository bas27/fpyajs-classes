import Magician from '../js/magician';

test('Создание персонажа Daemon', () => {
  const recived = new Magician('Boby');
  const expected = {
    name: 'Boby',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(recived).toEqual(expected);
});
