[oxidation-ts](../README.md) / [Exports](../modules.md) / ITrait

# Interface: ITrait<Definition\>

## Type parameters

| Name |
| :------ |
| `Definition` |

## Hierarchy

- `IBaseType`<`Definition`\>

  ↳ **`ITrait`**

## Table of contents

### Properties

- [\_reflect](ITrait.md#_reflect)
- [key](ITrait.md#key)

### Methods

- [implFor](ITrait.md#implfor)

## Properties

### \_reflect

• `Readonly` **\_reflect**: `Definition`

#### Inherited from

IBaseType.\_reflect

___

### key

• `Readonly` **key**: `Symbol`

#### Inherited from

IBaseType.key

## Methods

### implFor

▸ **implFor**<`TraitDefinition`, `Static`, `Type`\>(`type`, `definition`): `ImplementedType`<`TraitDefinition`\> & `Type`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TraitDefinition` | `TraitDefinition` |
| `Static` | `Static` |
| `Type` | extends [`IType`](IType.md)<`Static`, `Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `Type` |
| `definition` | `ImplementedType`<`TraitDefinition`\> |

#### Returns

`ImplementedType`<`TraitDefinition`\> & `Type`
