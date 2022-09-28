import Bowman from '../js/bowman';

describe('Создание персонажа Лучник', () => {
  test('проверка характеристик', () => {
    try {
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
    } catch (Error) {
      expect('Ошибка: длина name имеет недопустимое значение').toContain(Error.message);
    }
  });

  test('проверка длины имени менее 2', () => {
    try {
      const recived = new Bowman('Q');
      const expected = {
        name: 'Q',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defens: 25,
      };
      expect(recived).toEqual(expected);
    } catch (Error) {
      expect('Ошибка: длина name имеет недопустимое значение').toContain(Error.message);
    }
  });

  test('проверка длины имени более 10', () => {
    try {
      const recived = new Bowman('Qwertyasdfg');
      const expected = {
        name: 'Qwertyasdfg',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defens: 25,
      };
      expect(recived).toEqual(expected);
    } catch (Error) {
      expect('Ошибка: длина name имеет недопустимое значение').toContain(Error.message);
    }
  });

  test('проверка типа поля name', () => {
    try {
      const recived = new Bowman(456);
      const expected = {
        name: 456,
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defens: 25,
      };
      expect(recived).toEqual(expected);
    } catch (Error) {
      expect('Ошибка: установите строковое значение полю name').toContain(Error.message);
    }
  });

  test('проверка типа персонажа', () => {
    try {
      const recived = new Bowman('Tady', 'Boy');
      const expected = {
        name: 'Tady',
        type: 'Boy',
        health: 100,
        level: 1,
        attack: 25,
        defens: 25,
      };
      expect(recived).toEqual(expected);
    } catch (e) {
      expect('Ошибка: тип персонажа не соответствует заданному').toContain(e.message);
    }
  });
});
