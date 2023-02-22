---
layout: doc
lang: en-US
---

# Avatar component

A control that displays the user's avatar.

## 基础用法

Use `shape` to define the style and `size` to adjust the size.

:::demo
avatar/basic
:::

## Display type

Support the use of images, icons or text as Avatar.

:::demo
avatar/type
:::

## API

### Avatar

| parameter | Explain                                 | Ttpe              |
| --------- | --------------------------------------- | ----------------- |
| size      | Avatar size                             | `string`/`number` |
| shape     | Avatar shape                            | `string`          |
| src       | Source address of Avatar image          | `string`          |
| srcset    | Native srcset attribute of image Avatar | `string`          |
| alt       | Native alt attribute of image Avatar    | `string`          |

### Slots

| Slot name | Explain                                       |
| --------- | --------------------------------------------- |
| default   | Customize the content displayed by the avatar |
