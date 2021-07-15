import { Type } from '../type';

describe('types', () => {
  it('key', () => {
    const Bar = Type.create<string>();
    const Baz = Type.create<number>();

    expect(Bar.key).not.toStrictEqual(Baz.key);
  });

  it('implements', () => {
    const Bar = Type.create<string>().impl({
      foo(): string {
        return 'bar';
      },
    });

    expect(Bar.foo).toBeDefined();
    /* eslint-disable-next-line @typescript-eslint/no-confusing-void-expression */
    expect(Bar.foo()).toStrictEqual('bar');
  });
});
