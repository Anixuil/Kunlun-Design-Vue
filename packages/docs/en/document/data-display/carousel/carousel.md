---
layout: doc
lang: en-US
---

# Carousel 

In a limited space, play the same type of pictures, text, etc. in a loop.

## Basic Usage

Triggered using the click indicator.

:::demo
carousel/basicclick
:::

Triggered using the hover indicator.

:::demo
carousel/basichover
:::

## The position of the indicator

By setting 'indicator-position' to 'outside' to implement the indicator outside, you can also set it to 'none' to hide the indicator

:::demo
carousel/position
:::

## The toggle arrow shows the timing

Set the arrow display timing to always/only when the mouse is floating over it by setting the `arrow` property to `always/hover/never`.

:::demo
carousel/arrow
:::

<br>

# Carousel API

## Carousel Attribute

| The property name             | Desprition                           | Type                             | Default Value |
| ------------------ | ------------------------------ | -------------------------------- | ------ |
| height             | Marquee height, in px             | `number`                         | 300    |
| width              | Marquee width, in px              | `number`                         | 600    |
| trigger            | How the indicator is triggered               | `string`(click\|hover)           | click  |
| autoplay           | Whether to switch automatically                   | `boolean`                        | true   |
| interval           | The interval for automatic switching, in milliseconds | `number`                         | 3000   |
| indicator-position | The position of the indicator                   | `string`(outside\|none)          | —      |
| arrow              | Toggles when the arrows are displayed             | `string`（always\|hover\|never） | hover  |
