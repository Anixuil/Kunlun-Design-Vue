---
layout: doc
lang: en-US
---

# Switch

Switch is used for switching between two opposing states.

## Basic usage

Bind 'v-model' to a variable of type 'Boolean'.

:::demo
switch/basic
:::

## Color settings

You can use the 'active-color' property and the 'inactive-color' property to set the background color of the switch.

:::demo
switch/color
:::

## Size

Use the size property to change the size of the switch. In addition to the default size, there are two other options:
large, small.

:::demo
switch/size
:::

## Disabled state

Add the 'disabled' attribute to set the switch to the disabled state.

:::demo
switch/disabled
:::

## Text description

Text description

:::demo
switch/text
:::

## Bind the data type

Use the 'active-value' attribute and the 'inactive-value' property to set the text description of the switch.

:::demo
switch/type
:::

## Display the custom icon

Use the inactive-icon and active-icon properties to add icons. Use the inline-prompt property to control the display of
icons within points.

:::demo
switch/icon
:::

## API

### Attribute

| name            | Description                                            | Type                       | The default value is |
|-----------------|--------------------------------------------------------|----------------------------|----------------------|
| v-model         | Binding value                                          | boolean                    | —                    |
| disabled        | Whether to disable                                     | boolean                    | fales                |
| active-value	   | The value when the switch state is on	                 | boolean / string / number  | 	true                |
| inactive-value	 | The value when the status of the switch is off	        | boolean / string / number	 | 	false               |
| active-icon     | The icon displayed when the switch state is on, using  | with Icon string           | —                    |
| inactive-icon   | The icon displayed when the switch state is off, using | with Icon string           | —                    |
| active-text     | The text description when the switch is opened is      | string                     | —                    |
| inactive-text   | The text description when the switch is turned off     | string                     | —                    |
| active-color    | When in the on state, the background color             | string                     | —                    |
| inactive-color  | The background color of the off state is               | string                     | —                    |
| name            | Equivalent to the native input name attribute          | string                     | —                    |
