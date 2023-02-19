---
layout: doc
lang: en-US
---

# Checkbox radio box

Single selection in a set of alternatives

## Basic usage

Radio boxes should not have too many options, and if you have a lot of options you should use select boxes instead of radio boxes.

To use the Checkbox component, simply set the 'v-model' binding variable, which means that the value of the variable is the corresponding Checkbox
The value of the value attribute, 'value' can be String, Number or Boolean.

:::demo
checkbox/basic
:::

## Checkbox is used alone

Checkbox can also be used separately, the binding data is 'boolean', multiple checkboxes bound to the same value will not be mutually exclusive.

:::demo
checkbox/alone
:::

## Disabled state

The 'disabled' property can be used to control the disabled state of the radio box.

You only need to set the 'disabled' attribute for Checkbox-group to control all option disabled states.

:::demo
checkbox/disabled
:::

## Disable the option

Setting the 'disabled' property for the Checkbox disables the option.

:::demo
checkbox/disabled-option
:::

## With border

Set the border property to true to render as a radio box with a border.

:::demo
checkbox/border
:::

## Icon

Icons can be passed in within a slot

:::demo
checkbox/icon
:::

## API

### Checkbox attribute

| Property name | Description                                                        | Type                               | Default value |
|---------------|--------------------------------------------------------------------|------------------------------------|---------------|
| v-model       | Binding value                                                      | boolean                            | —             |
| value         | The value of the option                                            | string / number / boolean / object | —             |
| label         | The label of the option, if not set, defaults to the same as value | string/number                      | —             |
| disabled      | Whether to disable the option                                      | boolean                            | false         |
| border	       | Whether to display a border                                        | boolean                            | false         |

## Checkbox slot

| Slot name | Description |
| ------- |------|
| default | Default slot |

### CheckboxGroup attribute

| Property name | Description                           | Type    | Default value |
|---------------|---------------------------------------|---------|---------------|
| v-model       | Binding value                         | boolean | —             |
| disabled      | Whether to disable all options        | boolean | false         |
| border	       | Whether to display all option borders | boolean | false         |


### CheckboxGroup event

| Event Name | Description | Callback parameters |
|------------|-------------|---------------------|
| change     |    Triggers only when modelValue changes         | —                   |


