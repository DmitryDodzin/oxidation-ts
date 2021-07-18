import { Type } from '../../type';
import { Trait } from '../trait';

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
