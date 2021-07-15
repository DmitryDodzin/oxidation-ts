import type { IBaseType } from '../interfaces';

export interface ITrait<Definition> extends IBaseType<Definition> {}

export interface ITraitApi {
  create<Definition>(): ITrait<Definition>;
}
