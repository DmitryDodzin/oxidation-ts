import type { IFunction } from '../function';
import type { IType, ITypeApi, ImplementedType } from './interfaces';

const create = <Static>(): IType<Static> => ({
  key: Symbol(),
  get _reflect(): Static {
    throw new Error('Should not be called');
  },
  impl<Definition extends Record<string, IFunction>>(
    implmintation: ImplementedType<Definition>,
  ): ImplementedType<Definition> & IType<Static> {
    return Object.assign(this, implmintation);
  },
});

export const Type: ITypeApi = {
  create,
};
