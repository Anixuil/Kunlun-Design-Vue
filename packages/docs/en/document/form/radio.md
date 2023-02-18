---
layout: doc
lang: en-US
---

# Radio

Single selection in a set of alternatives

## Basic usage

Radio boxes should not have too many options, and if you have a lot of options you should use select boxes instead of
radio boxes.

Radio must be used with RadioGroup, to use the Radio component, you only need to set the 'v-model' binding variable,
checked means that the value of the variable is the corresponding Radio
The value of the value attribute, 'value' can be String, Number or Boolean.

:::demo
radio/basic
:::

## Disabled state

The 'disabled' property can be used to control the disabled state of the radio box.

You only need to set the 'disabled' attribute for radio-group to control all option disabled states.

:::demo
radio/disabled
:::

## Disable option

Setting the 'disabled' attribute for radio disables the option.

:::demo
radio/disabled-option
:::

## With a border

Set the border property to true to render as a radio box with a border.

:::demo
radio/border
:::

## API

### Radio attribute

| Property name | Description                                                        | Type                               | Default value |
|---------------|--------------------------------------------------------------------|------------------------------------|---------------|
| value         | The value of the option                                            | string / number / boolean / object | —             |
| label         | The label of the option, if not set, defaults to the same as value | string/number                      | —             |
| disabled      | Whether to disable the option                                      | boolean                            | false         |
| border	       | Whether to display a border                                        | boolean                            | false         |

### RadioGroup attribute

| Property name | Description                           | Type    | Default value |
|---------------|---------------------------------------|---------|---------------|
| v-model       | Binding value                         | boolean | —             |
| disabled      | Whether to disable all options        | boolean | false         |
| border	       | Whether to display all option borders | boolean | false         |

### RadioGroup event

| Event Name | Description | Callback parameters                       |
|------------|-------------|-------------------------------------------|
| change     |             | Triggers only when modelValue changes val |