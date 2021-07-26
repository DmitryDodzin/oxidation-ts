import type { Runtype } from 'runtypes';
import type { ITrait, ITraitApi, StaticDefinition } from './interfaces';

export const Trait: ITraitApi = {
  create: <Definition>(): ITrait<Definition> => ({
    impl<Type extends Runtype>(
      type: Type,
      definition: StaticDefinition<Definition>,
    ): StaticDefinition<Definition> & Type {
      return Object.assign(type, definition);
    },
  }),
};
