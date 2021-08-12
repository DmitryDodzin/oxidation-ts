import type { Derivable, IDeriveFn } from './interfaces';

export const derive: IDeriveFn =
  <T>() =>
  () =>
    ({} as ReturnType<Derivable<T>>);
