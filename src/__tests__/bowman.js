import Bowman from '../js/bowman';

test('Создание персонажа Лучник', () => {
  const recived = new Bowman('Nik');
  const expected = {
    name: 'Nik',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defens: 25,
  };
  expect(recived).toEqual(expected);
});
