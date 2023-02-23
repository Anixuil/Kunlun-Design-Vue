---
layout: doc
lang: zh-CN
---

# Carousel 走马灯

在有限空间内，循环播放同一类型的图片、文字等内容。

## 基础用法

使用 click 指示器触发。

:::demo
carousel/basicclick
:::

使用 hover 指示器触发。

:::demo
carousel/basichover
:::

## 指示器的位置

通过设置`indicator-position`为`outside`实现指示器在外面，还可以设置为`none`隐藏指示器

:::demo
carousel/position
:::

## 切换箭头显示时机

通过设置`arrow`属性为`always/hover/never`设置箭头显示时机为总是/只有鼠标在上面浮动时才显示/从不显示。

:::demo
carousel/arrow
:::

<br>

# Carousel API

## Carousel 属性

| 属性名             | 说明                           | 类型                             | 默认值 |
| ------------------ | ------------------------------ | -------------------------------- | ------ |
| height             | 走马灯高度,单位 px             | `number`                         | 300    |
| width              | 走马灯宽度,单位 px             | `number`                         | 600    |
| trigger            | 指示器的触发方式               | `string`(click\|hover)           | click  |
| autoplay           | 是否自动切换                   | `boolean`                        | true   |
| interval           | 自动切换的时间间隔，单位为毫秒 | `number`                         | 3000   |
| indicator-position | 指示器的位置                   | `string`(outside\|none)          | —      |
| arrow              | 切换箭头的显示时机             | `string`（always\|hover\|never） | hover  |
