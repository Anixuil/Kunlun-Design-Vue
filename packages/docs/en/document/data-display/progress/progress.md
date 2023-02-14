---
layout: doc
lang: zh-CN
---

# Progress

Displays the operation progress and informs the user of the current status and expectations.

## Linear progress bar

Set the 'percentage' property on the Progress component to represent the percentage of the progress bar. This attribute **must be**, and must be in the range of 0 to 100. You can customize the format of text display by setting 'format'.

:::demo
datadisplay/progress/basic
:::

## The percentage is displayed in the progress bar

Percentage does not require additional controls and is applicable to scenarios such as file uploading.

The Progress component can change the height of the progress bar through the 'storke-width' property, and can change the text inside the progress bar through the 'text-inside' property.

:::demo
datadisplay/progress/textinside
:::

## Customize the progress bar color

You can set the color of the progress bar through the 'color' property. This property can accept hexadecimal color values.

:::demo
datadisplay/progress/color
:::

## Circular progress bar

The Progress component can specify the use of a circular progress bar through the 'type' property, and within the circular progress bar, its size can also be set through the 'width' property.

:::demo
datadisplay/progress/circle
:::

## Dashboard-shaped progress bar

You can specify the 'type' property to the 'dashboard' using the Control Panel progress bar.

:::demo
datadisplay/progress/dashboard
:::

## Custom content

Add custom content through the default slot.

:::demo
datadisplay/progress/container
:::

## Animation progress bar

Use the 'intermediate' property to set the indefinite progress and 'duration' to control the animation duration.

:::demo
datadisplay/progress/animate
:::

## Attribute

| attribute       | description                               | type            | optional                        | default |
| --------------- | ----------------------------------------- | --------------- | ------------------------------- | ------- |
| percentage      | **Must be**, percentage                   | number          | 0-100                           | 0       |
| cw              | Ring size                                 | number          |                                 | 125     |
| type            | Progress bar type                         | string          | line \| circle \| dashboard     | line    |
| text-inside     | Text inside display                       | boolean         |                                 | false   |
| storke-width    | Progress bar width                        | number          |                                 | 10      |
| status          | Current state                             | string          | success \| exception \| warning |         |
| indeterminate   | Animation progress bar                    | boolean         |                                 | false   |
| duration        | The progress bar speed \| animation speed | number          |                                 | 0.3     |
| color           | Progress bar color                        | string \| array |                                 | ''      |
| width           | Bar progress bar length                   | string          |                                 | 300px   |
| show-text       | Whether to display progress bar text      | boolean         |                                 | true    |
| storke-line-cap | Shape of the progress bar                 | string          | round \| square                 | round   |
| format          | Specified text content                    | function        |                                 |         |
