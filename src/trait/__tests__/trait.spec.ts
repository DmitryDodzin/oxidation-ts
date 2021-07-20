import { Trait, Type } from '../../index';

describe('traits', () => {
  it('implements', () => {
    const Foo = Trait.create();

    const Bar = Foo.implFor(Type.create<string>(), {
      foo(): string {
        return 'bar';
      },
    });

    expect(Bar.foo).toBeDefined();
    expect(Bar.foo()).toStrictEqual('bar');
  });
});
