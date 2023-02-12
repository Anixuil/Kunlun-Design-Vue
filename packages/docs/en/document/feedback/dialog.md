---
layout: doc
lang: en-US
---

# Dialog

Inform the user and host the actions while keeping the current page.

## Basic usage

Dialog brings up a dialog box for scenarios that require greater customization.

You need to set the `model-value/v-model` property, which accepts`Boolean`and displays Dialog when it is` true`. Dialog is divided into three parts: `header`, `container`, and `footer`. `footer` needs a `slot` named `footer`. The `title` attribute is used to define the title. It is optional and defaults to null. This component dialog also presents a completely different dialog UI.

:::demo
feedback/dialog/basic
:::

## Mode

kunlun design New model

Dialog becomes a landscape popover across the full screen, and the animation is silky. You only need to configure the `mode` property to `kunlun` to change the Dialog to that of the instance.

:::demo
feedback/dialog/mode
:::

## Custom content

kunlun design allows you to set the alignment of content and even completely customize the Dialog content yourself.

You can achieve left, left, right, and center alignment by setting the `ctxPosition` property

:::demo
feedback/dialog/container
:::

## Custom header

kunlun design allows you to customize the header of the Dialog

:::demo
feedback/dialog/head
:::

## Call back before closing

Call back before closing

The `before-close` property accepts a method as an argument.

:::demo
feedback/dialog/beforeClose
:::

## Customize the basic style of the dialog box

kunlun design supports you to quickly set basic dialog box styles on the property.

You can set the width of the dialog box with the `width` property. If not, the component width is stretched by the content. You can set the dialog box position with `top` and `left` to make the dialog appear where you want it to appear. You can also configure the dialog background color through the `bgColor` property.

:::demo
feedback/dialog/position
:::

## Attribute

| attribute            | description                            | type     | default | Optional value                    |
| -------------------- | -------------------------------------- | -------- | ------- | --------------------------------- |
| modelValue / v-model | Show Dialog or not                     | boolean  |         |                                   |
| width                | Dialog width                           | string   |         |                                   |
| mode                 | Dialog mode                            | string   | default | kunlun                            |
| left \| top          | Dialog box location                    | string   |         | Values with units                 |
| cxtPosition          | Dialog box content alignment           | string   | center  | left \| center \| right           |
| footPosition         | Dialog box bottom alignment            | string   | center  | left \| center \| right           |
| bgColor              | Dialog color                           | string   | white   | Any value that represents a color |
| show-close           | Whether the close button is displayed  | boolean  | true    | false                             |
| before-close         | The callback before the dialog closes  | function |         |                                   |
| close-on-click-modal | Click Mode box to close the dialog box | boolean  | true    | false                             |
