import type { IDeriveFn } from './interfaces';

export const derive: IDeriveFn = () => () => {
  throw new Error('Derive Not Implemented yet');
};
