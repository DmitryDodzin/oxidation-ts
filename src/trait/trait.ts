import { Type } from '../type';
import type { ITrait, ITraitApi } from './interfaces';

const create = <Definition>(): ITrait<Definition> => Type.create<Definition>();

export const Trait: ITraitApi = {
  create,
};
