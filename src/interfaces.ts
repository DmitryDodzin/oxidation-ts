export interface IBaseType<T> {
  readonly key: Symbol;
  readonly _reflect: T;
}

export type Reflect<T> = T extends IBaseType<infer R> ? R : T;
