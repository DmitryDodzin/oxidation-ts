import type { Runtype } from 'runtypes';
import type { ITrait, ITraitApi, StaticDefinition } from './interfaces';

export const Trait: ITraitApi = {
  create: <Definition>(): ITrait<Definition> => ({
    impl<Type extends Runtype>(type: Type, definition: StaticDefinition<Definition>): Type & StaticDefinition<Definition> {
      return Object.assign(type, definition);
    }
  }),
};
