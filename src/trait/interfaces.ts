import type { Runtype, Static } from 'runtypes';

export interface ITrait<Definition> {
  impl<Type extends Runtype>(type: Type, definition: StaticDefinition<Definition>): StaticDefinition<Definition> & Type;
}

export interface ITraitApi {
  create<Definition>(): ITrait<Definition>;
}

export type TraitDefinition<Trait> = Trait extends ITrait<infer Definition>
  ? StaticDefinition<Definition>
  : StaticDefinition<Trait>;

export type StaticDefinition<Definition> = Definition extends Runtype
  ? Static<Definition>
  : Definition extends () => infer Result
  ? () => StaticDefinition<Result>
  : Definition extends (arg1: infer Arg1) => infer Result
  ? (arg1: StaticDefinition<Arg1>) => StaticDefinition<Result>
  : Definition extends (arg1: infer Arg1, arg2: infer Arg2) => infer Result
  ? (arg1: StaticDefinition<Arg1>, arg2: StaticDefinition<Arg2>) => StaticDefinition<Result>
  : Definition extends (arg1: infer Arg1, arg2: infer Arg2, arg3: infer Arg3) => infer Result
  ? (
      arg1: StaticDefinition<Arg1>,
      arg2: StaticDefinition<Arg2>,
      arg3: StaticDefinition<Arg3>,
    ) => StaticDefinition<Result>
  : Definition extends (arg1: infer Arg1, arg2: infer Arg2, arg3: infer Arg3, arg4: infer Arg4) => infer Result
  ? (
      arg1: StaticDefinition<Arg1>,
      arg2: StaticDefinition<Arg2>,
      arg3: StaticDefinition<Arg3>,
      arg4: StaticDefinition<Arg4>,
    ) => StaticDefinition<Result>
  : Definition extends (
      arg1: infer Arg1,
      arg2: infer Arg2,
      arg3: infer Arg3,
      arg4: infer Arg4,
      arg5: infer Arg5,
    ) => infer Result
  ? (
      arg1: StaticDefinition<Arg1>,
      arg2: StaticDefinition<Arg2>,
      arg3: StaticDefinition<Arg3>,
      arg4: StaticDefinition<Arg4>,
      arg5: StaticDefinition<Arg5>,
    ) => StaticDefinition<Result>
  : Definition extends (
      arg1: infer Arg1,
      arg2: infer Arg2,
      arg3: infer Arg3,
      arg4: infer Arg4,
      arg5: infer Arg5,
      arg6: infer Arg6,
    ) => infer Result
  ? (
      arg1: StaticDefinition<Arg1>,
      arg2: StaticDefinition<Arg2>,
      arg3: StaticDefinition<Arg3>,
      arg4: StaticDefinition<Arg4>,
      arg5: StaticDefinition<Arg5>,
      arg6: StaticDefinition<Arg6>,
    ) => StaticDefinition<Result>
  : Definition extends (
      arg1: infer Arg1,
      arg2: infer Arg2,
      arg3: infer Arg3,
      arg4: infer Arg4,
      arg5: infer Arg5,
      arg6: infer Arg6,
      arg7: infer Arg7,
    ) => infer Result
  ? (
      arg1: StaticDefinition<Arg1>,
      arg2: StaticDefinition<Arg2>,
      arg3: StaticDefinition<Arg3>,
      arg4: StaticDefinition<Arg4>,
      arg5: StaticDefinition<Arg5>,
      arg6: StaticDefinition<Arg6>,
      arg7: StaticDefinition<Arg7>,
    ) => StaticDefinition<Result>
  : Definition extends (...args: infer Args) => infer Result
  ? (...args: StaticDefinition<Args[keyof Args]>[]) => StaticDefinition<Result>
  : /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  Definition extends Record<string, any>
  ? { [Key in keyof Definition]: StaticDefinition<Definition[Key]> }
  : unknown;
