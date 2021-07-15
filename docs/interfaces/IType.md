[oxidation-ts](../README.md) / [Exports](../modules.md) / IType

# Interface: IType<Static\>

## Type parameters

| Name |
| :------ |
| `Static` |

## Hierarchy

- `IBaseType`<`Static`\>

  ↳ **`IType`**

## Table of contents

### Properties

- [\_reflect](IType.md#_reflect)
- [key](IType.md#key)

### Methods

- [impl](IType.md#impl)

## Properties

### \_reflect

• `Readonly` **\_reflect**: `Static`

#### Inherited from

IBaseType.\_reflect

___

### key

• `Readonly` **key**: `Symbol`

#### Inherited from

IBaseType.key

## Methods

### impl

▸ **impl**<`Definition`\>(`implmintation`): `ImplementedType`<`Definition`\> & [`IType`](IType.md)<`Static`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Definition` | extends `Record`<`string`, [`IFunction`](IFunction.md)<`fn`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `implmintation` | `ImplementedType`<`Definition`\> |

#### Returns

`ImplementedType`<`Definition`\> & [`IType`](IType.md)<`Static`\>
