import { String } from 'runtypes';
import { Trait, derive } from '../..';

describe.skip('derive', () => {
  it('simple', () => {
    const Foo = Trait.create<{
      print(self: typeof String): typeof String;
    }>();

    const MyString = derive(Foo)(String);

    expect(MyString).toBeDefined();
    expect(MyString.print).toBeDefined();
  });

  it('multiple', () => {
    const Foo = Trait.create<{
      print(self: typeof String): typeof String;
    }>();

    const Foo2 = Trait.create<{
      print2(self: typeof String): typeof String;
    }>();

    const MyString = derive(Foo, Foo2)(String);

    expect(MyString).toBeDefined();
    expect(MyString.print).toBeDefined();
    expect(MyString.print2).toBeDefined();
  });
});
