---
layout: doc
lang: en-US
---

# Input

Enter characters with a mouse or keyboard.

## Basic usage

The 'placeholder' attribute allows you to customize the input box prompt

:::demo
input/basic
:::

## Password

By setting the 'type' property to 'password', you can set it as a password box, and add the 'showPassword' property to
control whether the password can be viewed(The 'showPassword' attribute depends on icon, please import the icon library before using it, see [icon](https://anixuil.github.io/zh/document/basic/icon.html)) for details).

:::demo
input/password
:::

## Disable usage

Add the 'disabled' attribute to set the input box to the disabled state.

:::demo
input/disabled
:::

## Size

Use the size property to change the size of the input box. In addition to the default size, there are two other options:
large, small.

:::demo
input/size
:::

## Textarea

By setting the 'type' property to 'textarea', it can be customized as a text box; The 'rows' property can set the height
of the text box, which defaults to 4 rows; The 'disabled' attribute disables the text box

:::demo
input/textarea
:::

## API

### Attributes

| name          | Description                                                          | Type                          | Default |
| ------------- | -------------------------------------------------------------------- | ----------------------------- | ------- |
| placeholder   | placeholder of Input                                                 | String                        | —       |
| type          | type of input                                                        | String                        | text    |
| v-model       | binding value                                                        | string/number                 | —       |
| clearable     | whether to show clear button, only works when type is not 'textarea' | boolean                       | fales   |
| show-password | whether to show clear button, only works when type is not 'textarea' | boolean                       | fales   |
| disabled      | whether Input is disabled                                            | boolean                       | fales   |
| rows          | number of rows of textarea, only works when type is 'textarea'       | number                        | 4       |
| name          | same as name in native input                                         | string                        | —       |
| readonly      | same as readonly in native input                                     | boolean                       | false   |
| size          | size of Input, works when type is not 'textarea'                     | 'large' / 'default' / 'small' | default |
| max           | same as max in native input                                          | —                             | —       |
| min           | same as min in native input                                          | —                             | —       |
| step          | same as step in native input                                         | —                             | —       |
| autofocus     | same as autofocus in native input                                    | boolean                       | false   |
| form          | same as form in native input                                         | string                        | —       |
| input-style   | the style of the input element or textarea element                   | string/object                 | {}      |

### Event

| Name   | Description                                                                | Callback parameters |
| ------ | -------------------------------------------------------------------------- | ------------------- |
| change | Triggered only when the modelValue changes                                 | val                 |
| clear  | Fires when the Clear button generated by the clearable property is clicked | —                   |
