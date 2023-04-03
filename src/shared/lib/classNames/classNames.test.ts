import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional', () => {
    const expecting = 'someClass param1 param2';

    expect(classNames('someClass', {}, ['param1', 'param2'])).toBe(expecting);
  });

  test('with mods', () => {
    const expecting = 'someClass param1 param2 mod1 mod2';

    expect(classNames('someClass', { mod1: true, mod2: true }, ['param1', 'param2'])).toBe(expecting);
  });

  test('with mods false', () => {
    const expecting = 'someClass param1 param2 mod2';

    expect(classNames('someClass', { mod1: false, mod2: true }, ['param1', 'param2'])).toBe(expecting);
  });

  test('with mods undefined', () => {
    const expecting = 'someClass param1 param2 mod1';

    expect(classNames('someClass', { mod1: true, mod2: undefined }, ['param1', 'param2'])).toBe(expecting);
  });
});
