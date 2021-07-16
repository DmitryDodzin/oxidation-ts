import type { IBaseType } from '../interfaces';
import type { IType, ImplementedType } from '../type';

export interface ITrait<Definition> extends IBaseType<Definition> {
  implFor<TraitDefinition, Static, Type extends IType<Static>>(
    type: Type,
    definition: ImplementedType<TraitDefinition>,
  ): ImplementedType<TraitDefinition> & Type;
}

export interface ITraitApi {
  create<Definition>(): ITrait<Definition>;
}
