import { Type } from '..';

describe('types', () => {
  it('key', () => {
    const Bar = Type.create<string>();
    const Baz = Type.create<number>();

    expect(Bar.key).not.toEqual(Baz.key);
  });
});
