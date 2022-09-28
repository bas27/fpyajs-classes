import Daemon from '../js/daemon';

test('Создание персонажа Daemon', () => {
  const recived = new Daemon('Boby');
  const expected = {
    name: 'Boby',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defens: 40,
  };
  expect(recived).toEqual(expected);
});
