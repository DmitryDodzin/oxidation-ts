import { Type } from '../../index';

describe('types', () => {
  it('key', () => {
    const Bar = Type.create<string>();
    const Baz = Type.create<number>();

    expect(Bar.key).not.toStrictEqual(Baz.key);
  });

  it('reflect', () => {
    const Bar = Type.create<string>();

    expect(() => Bar._reflect).toThrow();
  });

  it('implements', () => {
    const Bar = Type.create<string>().impl({
      foo(): string {
        return 'bar';
      },
    });

    expect(Bar.foo).toBeDefined();
    expect(Bar.foo()).toStrictEqual('bar');
  });
});
