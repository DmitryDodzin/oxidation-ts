import type { IType, ImplementedType } from '../type';
import { Type } from '../type';
import type { ITrait, ITraitApi } from './interfaces';

const implFor = <Definition, Static, ImplType extends IType<Static>>(
  type: ImplType,
  definition: ImplementedType<Definition>,
): ImplementedType<Definition> & ImplType => type.impl(definition);

const create = <Definition>(): ITrait<Definition> => Object.assign(Type.create<Definition>(), { implFor });

export const Trait: ITraitApi = {
  create,
};
