import type { IBaseType, Reflect } from '../interfaces';

export type ImplementedType<Definition> = { [Key in keyof Definition]: Reflect<Definition[Key]> };

export interface IType<Static> extends IBaseType<Static> {
  impl<Definition>(implmintation: ImplementedType<Definition>): ImplementedType<Definition> & this;
}

export interface ITypeApi {
  create<Static>(): IType<Static>;
}
