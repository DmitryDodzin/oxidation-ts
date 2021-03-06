import type { Static } from 'runtypes';
import { Record, String } from 'runtypes';

import { Trait } from '../..';

describe('traits', () => {
  it('create', () => {
    const Foo = Trait.create<{
      print(): typeof String;
    }>();

    expect(Foo).toBeDefined();
  });

  it('impl', () => {
    const Foo = Trait.create<{
      print(self: any): string;
    }>();

    const MyType = Foo.impl(
      Record({
        foobar: String,
      }),
      {
        print(self: Static<typeof MyType>) {
          return self.foobar;
        },
      },
    );

    expect(MyType.print).toBeDefined();
    expect(MyType.print({ foobar: 'baz' })).toStrictEqual('baz');
  });
});
