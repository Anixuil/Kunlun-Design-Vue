---
layout: doc
lang: en-US
---

# Select

When there are too many options, use the drop-down menu to display and select content.

## Basic usage

The value of the widely applicable base radio 'v-model' is the value of the 'value' attribute of the currently
selected 'kl-option', via 'placeholder'
The property can set the booth text, not set the default to: 'Please enter a keyword'

:::demo
select/basic
:::

## Disabled select

Disable the entire selector component, add the 'disabled' attribute, and the entire selector is unavailable.

:::demo
select/disabled
:::

## Disabled option

In 'kl-option', set the 'disabled' value to 'true' to disable the option

:::demo
select/disabled-option
:::

## Option label

The label of 'kl-option' can be set via the 'label' attribute of 'kl-option', or it can be written inside 'kl-option'
without setting the default value of 'value'.

:::demo
select/label
:::

## Size

Use the 'size' property to change the size of the drop-down selection box. In addition to the default size, there are
two other options: 'large', 'small'.

:::demo
select/size
:::

## Singles can be cleared

You can use the clear icon to clear the selection.

Set the 'clearable' property for 'kl-select' to empty the selector.

:::demo
select/clearable
:::

## API

### Select 属性

| name        | Description                        | Type    | The default value is |
| ----------- | ---------------------------------- | ------- | -------------------- |
| v-model     | binding value                      | boolean | —                    |
| disabled    | whether Select is disabled         | boolean | fales                |
| size        | size of Input(large/default/small) | string  | default              |
| clearable   | whether select can be cleared      | boolean | false                |
| placeholder | placeholder                        | string  | —                    |

### Option 属性

| name     | Description                               | Type                               | The default value is |
| -------- | ----------------------------------------- | ---------------------------------- | -------------------- |
| value    | value of option                           | string / number / boolean / object | —                    |
| label    | label of option, same as value if omitted | string/number                      | —                    |
| disabled | whether option is disabled                | boolean                            | false                |

### Select Event

| Name   | Description                                                                | Callback parameters |
| ------ | -------------------------------------------------------------------------- | ------------------- |
| change | Triggered only when the modelValue changes                                 | val                 |
| clear  | Fires when the Clear button generated by the clearable property is clicked | —                   |