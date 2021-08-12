[oxidation-ts](README.md) / Exports

# oxidation-ts

## Table of contents

### Interfaces

- [IDeriveFn](interfaces/IDeriveFn.md)
- [ITrait](interfaces/ITrait.md)

### Type aliases

- [Derivable](modules.md#derivable)

### Variables

- [Trait](modules.md#trait)

### Functions

- [derive](modules.md#derive)

## Type aliases

### Derivable

Ƭ **Derivable**<`Traits`\>: <Type\>(`type`: `Type`) => `Traits` & `Type`

#### Type parameters

| Name |
| :------ |
| `Traits` |

#### Type declaration

▸ <`Type`\>(`type`): `Traits` & `Type`

##### Type parameters

| Name |
| :------ |
| `Type` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `Type` |

##### Returns

`Traits` & `Type`

## Variables

### Trait

• `Const` **Trait**: `ITraitApi`

## Functions

### derive

▸ `Const` **derive**<`Trait`\>(`trait`): [`Derivable`](modules.md#derivable)<`TraitDefinition`<`Trait`\>\>

#### Type parameters

| Name |
| :------ |
| `Trait` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `trait` | `Trait` |

#### Returns

[`Derivable`](modules.md#derivable)<`TraitDefinition`<`Trait`\>\>

▸ `Const` **derive**<`Trait1`, `Trait2`\>(`trait1`, `trait2`): [`Derivable`](modules.md#derivable)<`TraitDefinition`<`Trait1`\> & `TraitDefinition`<`Trait2`\>\>

#### Type parameters

| Name |
| :------ |
| `Trait1` |
| `Trait2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `trait1` | `Trait1` |
| `trait2` | `Trait2` |

#### Returns

[`Derivable`](modules.md#derivable)<`TraitDefinition`<`Trait1`\> & `TraitDefinition`<`Trait2`\>\>

▸ `Const` **derive**<`Trait1`, `Trait2`, `Trait3`\>(`trait1`, `trait2`, `trait3`): [`Derivable`](modules.md#derivable)<`TraitDefinition`<`Trait1`\> & `TraitDefinition`<`Trait2`\> & `TraitDefinition`<`Trait3`\>\>

#### Type parameters

| Name |
| :------ |
| `Trait1` |
| `Trait2` |
| `Trait3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `trait1` | `Trait1` |
| `trait2` | `Trait2` |
| `trait3` | `Trait3` |

#### Returns

[`Derivable`](modules.md#derivable)<`TraitDefinition`<`Trait1`\> & `TraitDefinition`<`Trait2`\> & `TraitDefinition`<`Trait3`\>\>

▸ `Const` **derive**<`Trait1`, `Trait2`, `Trait3`, `Trait4`\>(`trait1`, `trait2`, `trait3`, `trait4`): [`Derivable`](modules.md#derivable)<`TraitDefinition`<`Trait1`\> & `TraitDefinition`<`Trait2`\> & `TraitDefinition`<`Trait3`\> & `TraitDefinition`<`Trait4`\>\>

#### Type parameters

| Name |
| :------ |
| `Trait1` |
| `Trait2` |
| `Trait3` |
| `Trait4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `trait1` | `Trait1` |
| `trait2` | `Trait2` |
| `trait3` | `Trait3` |
| `trait4` | `Trait4` |

#### Returns

[`Derivable`](modules.md#derivable)<`TraitDefinition`<`Trait1`\> & `TraitDefinition`<`Trait2`\> & `TraitDefinition`<`Trait3`\> & `TraitDefinition`<`Trait4`\>\>
