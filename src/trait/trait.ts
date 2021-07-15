import type { ITrait, ITraitApi } from './interfaces';

const create = <Definition>(): ITrait<Definition> => ({
  key: Symbol(),
});

export const Trait: ITraitApi = {
  create,
};
