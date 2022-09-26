import Bowman from '../js/bowman';

describe('Лучник', () => {
  test('проверка характеристик', () => {
    const result = new Bowman('Nik');
    expect(result.type).toBe('Bowman');
    expect(result.attack).toBe(25);
    expect(result.defens).toBe(25);
  });
  
  test('проверка длины имени', () => {
    const result = new Bowman('Q');
    
  });

  test('проверка типа поля name', () => {

  });

  test('проверка типа поля name', () => {

  });
});
