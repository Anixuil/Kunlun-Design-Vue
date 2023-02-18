---
layout: doc
lang: en-US
---

# Drawer

A floating panel that slides out of the edge of the screen.

## Basic usage

Control drawer display and hidden state through `v-model` two-way binding. Set the `direction` property to control the drawer expansion direction. Default slots inside components accept user-defined content.

:::demo
feedback/drawer/basic
:::

## Drawer size

Set the `size` property to customize the drawer size. If `size` is passed as a numeric type, the unit is px, and a percentage string is supported. The default is `30%`.

:::demo
feedback/drawer/size
:::

## Set mask layer z-index

With the `z-index` property, you can change the level of the mask layer. Note: `Drawer level = Mask level + 1`. For example: `If z-index = 299, then mask level = 299, drawer level = 300`. The default value is `1000`.

:::demo
feedback/drawer/z-index
:::

## Whether to lock the scroll bar

By setting the `lock-scroll` property, you can decide whether to lock the scroll bar according to your own requirements. If you lock the scroll bar, you need to handle the page jitter problem caused by the scroll bar switching between display and hide. The default is `true`.

:::demo
feedback/drawer/lock
:::

## Custom mask layer with drawer styles

By setting the `modal-class` and `drawer-class` properties, you can customize the styles of masks and drawers.

**Note: To make a custom class name work, you need to use the `:deep` depth selector**

:::demo
feedback/drawer/custom-class
:::

## API

### Attribute

| name                  | description                                                                                       | type                  | default value | required |
| --------------------- | ------------------------------------------------------------------------------------------------- | --------------------- | ------------- | -------- |
| model-value / v-model | Show drawer or not                                                                                | boolean               |               | yes      |
| size                  | The size of the drawer form, in pixels when using type `number` and `x%` when using type `string` | number/string         | '30%'         | no       |
| direction             | The direction the drawer opens                                                                    | rtl / ltr / ttb / btt | rtl           | no       |
| modal                 | Whether a mask is required                                                                        | boolean               | true          | no       |
| lock-scroll           | Whether to scroll lock the `body` when the drawer appears                                         | boolean               | true          | no       |
| modal-class           | The custom class name of the mask layer                                                           | string                |               | no       |
| drawer-class          | The custom class name of the drawer                                                               | string                |               | no       |
| close-esc             | Can you close the drawer by pressing `ESC`                                                        | boolean               | true          | no       |
| z-index               | Set the `z-index` of the mask layer, `z-index of the drawer = z-index of the mask layer + 1`      | number                | 1000          | no       |

### Slot

| name    | description        |
| ------- | ------------------ |
| default | Contents of drawer |
