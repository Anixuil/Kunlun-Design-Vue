---
layout: doc
lang: zh-CN
---

# Carousel 走马灯

在有限空间内，循环播放同一类型的图片、文字等内容。

## 基础用法

:::demo
carousel/basic
:::


<br>

# Carousel API

## Carousel 属性

| 属性名             | 说明                           | 类型                             | 默认值 |
| ------------------ | ------------------------------ | -------------------------------- | ------ |
| height             | 走马灯高度,单位px              | `number`                         | 300    |
| width              | 走马灯宽度,单位px              | `number`                         | 600    |
| trigger            | 指示器的触发方式               | `string`(click\|hover)           | click  |
| autoplay           | 是否自动切换                   | `boolean`                        | true   |
| interval           | 自动切换的时间间隔，单位为毫秒 | `number`                         | 3000   |
| indicator-position | 指示器的位置                   | `string`(outside\|none)          | —      |
| arrow              | 切换箭头的显示时机             | `string`（always\|hover\|never） | hover  |
