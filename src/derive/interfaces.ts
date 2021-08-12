import type { TraitDefinition } from '../trait';

export type Derivable<Traits> = <Type>(type: Type) => Traits & Type;

export interface IDeriveFn {
  <Trait>(trait: Trait): Derivable<TraitDefinition<Trait>>;
  <Trait1, Trait2>(trait1: Trait1, trait2: Trait2): Derivable<TraitDefinition<Trait1> & TraitDefinition<Trait2>>;
  <Trait1, Trait2, Trait3>(trait1: Trait1, trait2: Trait2, trait3: Trait3): Derivable<
    TraitDefinition<Trait1> & TraitDefinition<Trait2> & TraitDefinition<Trait3>
  >;
  <Trait1, Trait2, Trait3, Trait4>(trait1: Trait1, trait2: Trait2, trait3: Trait3, trait4: Trait4): Derivable<
    TraitDefinition<Trait1> & TraitDefinition<Trait2> & TraitDefinition<Trait3> & TraitDefinition<Trait4>
  >;
}
