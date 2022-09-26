import Bowman from '../js/bowman.js';

const testData = {
  name: 'Nik',
  type: 'Bowman',
  health: 100,
  level: 1,
  attack: 25,
  defens: 25,
};

const result = new Bowman('Nik');

describe('Лучник', () => {
  test('Один и тот же:', () => {
    expect(testData).toEqual(result);
  });
});
