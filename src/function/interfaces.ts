import type { IBaseType } from '../interfaces';

export interface IFunction<Definition = () => void> extends IBaseType<Definition> {}
