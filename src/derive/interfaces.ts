import type { TraitDefinition } from '../trait';

export type Derivable<Traits> = <Type>(type: Type) => Traits & Type;

export interface IDeriveFn {
  <Trait>(trait: Trait): Derivable<TraitDefinition<Trait>>;
  <Trait1, Trait2>(trait1: Trait1, trait2: Trait2): Derivable<TraitDefinition<Trait1> & TraitDefinition<Trait2>>;
}
