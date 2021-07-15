/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export interface IType<Static> {
  key: Symbol;
}

export interface ITypeApi {
  create<Static>(): IType<Static>;
}
