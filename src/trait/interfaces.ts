import type { IType } from '../type';

export interface ITrait<Definition> extends IType<Definition> {}

export interface ITraitApi {
  create<Definition>(): ITrait<Definition>;
}
