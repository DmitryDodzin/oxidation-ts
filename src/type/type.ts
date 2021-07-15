import type { IType, ITypeApi } from './interfaces';

const create = <Static>(): IType<Static> => ({
  key: Symbol(),
});

export const Type: ITypeApi = {
  create,
};
