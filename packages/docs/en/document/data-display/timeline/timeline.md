---
layout: doc
lang: en-US
---

# Timeline

Visualize time-stream information.

## Basic usage

You can change the order in which the content is arranged by setting the value of the 'reverse' attribute to the 'timeline' component, true is the reverse order, false is the positive order, and the default is false.

<style lang="scss"> @use '../../../../examples/timeline/styles/common.scss'; </style>

:::demo
timeline/basic
:::

## Customize node styles

You can customize the node color, size, solid/hollow or directly use the icon according to the actual scene.

:::demo
timeline/custom
:::

## Custom node type

Circle color type,`success`Green indicates completed, success status,`danger`Red indicates an alarm or error status,`primary`Blue indicates the In Progress state,`warning`Yellow indicates warning status,`info`Gray indicates the failure state,`default`Represents the default state.

:::demo
timeline/type
:::

## Timestamp vs. timestamp location

Use the `timestamp` attribute value on the `timeline-item` component to display the timestamp on the page, if you don't want to display the timestamp, don't add the `timestamp` attribute value.

Use the `timeplace` attribute value on the `timeline-item` component to adjust the timestamp to appear above or below the content.

:::demo
timeline/time
:::

## Timeline position

Realize that the timeline is on the right, the content is on the left, and the timeline is in the middle, and the content is displayed alternately.

Use the `mode` property on the `timeline`component, the value is right ,and the timeline is on the right, center is the timeline in the middle, and the default is left.

:::demo
timeline/mode
:::

## The content is a dialog box

Realize the presentation of content in the form of a dialog box, which is more beautiful.

Use the `type`attribute on the `timeline` component, and the value is set to message to realize the dialog box display, and the default value is default.

:::demo
timeline/message
:::

<br>

# Timeline API

## Timeline Attribute

| attribute | description                                              | type                             | default value |
| --------- | -------------------------------------------------------- | -------------------------------- | ------------- |
| mode      | Change the relative position of the timeline and content | `string`（left\|center\|right ） | left          |
| type      | Change the style type of the content box                 | `string`(message\|default)       | default       |
| reverse   | Change the order of content                              | `boolean`                        | false         |

## Timeline Slots

| slot name | description       | Sublabels    |
| --------- | ----------------- | ------------ |
| default   | Customize content | TimelineItem |

# TimelineItem API

## TimelineItem Attribute

| attribute | description                                    | type                                          | default    |
| --------- | ---------------------------------------------- | --------------------------------------------- | ---------- |
| dotcolor  | Node color                                     | `string`                                      | —          |
| dotsolid  | Whether the node is solid                      | `boolean`                                     | false      |
| dotsize   | Node size                                      | `string`                                      | normal     |
| dottype   | Node type                                      | `primary/success/warning/danger/info/default` | default    |
| timestamp | timestamp                                      | `string`                                      | 0000/00/00 |
| timeplace | The timestamp relative to the content location | `string`                                      | bottom     |

## TimelineItem Slots

| slot name | description       |
| --------- | ----------------- |
| default   | Customize content |
| dot       | Customize node    |
