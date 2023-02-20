---
layout: doc
lang: zh-CN
---

# Timeline 时间轴

可视化地呈现时间流信息。

## 基础用法
可通过给`timeline`组件设置`reverse`属性值来改变内容的排布顺序，true为倒序，false为正序，默认false。

<style lang="scss"> @use '../../../../examples/timeline/styles/common.scss'; </style>

:::demo
timeline/basic
:::

## 自定义节点样式

可根据实际场景⾃定义节点颜色、尺寸，实/空心或直接使⽤图标。

:::demo
timeline/custom
:::

## 自定义节点类型

圆圈颜色类型，`success`绿色表示已完成、成功状态，`danger`红色表示告警或错误状态，`primary`蓝色表示正在进行状态，`warning`黄色表示警告状态，`info`灰色表示失效状态，`default`表示默认状态。

:::demo
timeline/type
:::

## 时间戳与时间戳位置

在`timeline-item`组件上使用`timestamp`属性值即可在页面上展示时间戳，若不想展示时间戳不添加`timestamp`属性值即可。

在`timeline-item`组件上使用`timeplace`属性值可以调整时间戳在内容上方或下方展示。

:::demo
timeline/time
:::

## 时间轴位置

实现时间轴在右边内容在左边以及时间轴在中间，内容交替展现。

在`timeline`组件上使用`mode`属性,值为right即时间轴在右边，center即时间轴在中间，默认为left。

:::demo
timeline/mode
:::

## 内容为对话框

实现以对话框的形式展示内容，更加美观。

在`timeline`组件上使用`type`属性,值设置为message即可实现对话框展示，默认值为default。

:::demo
timeline/message
:::

<br>

# Timeline API

## Timeline 属性

| 属性名  | 说明                       | 类型                             | 默认值  |
| ------- | -------------------------- | -------------------------------- | ------- |
| mode    | 改变时间轴和内容的相对位置 | `string`（left\|center\|right ） | left    |
| type    | 改变内容框的样式类型       | `string`(message\|default)       | default |
| reverse | 改变内容的顺序             | `boolean`                        | false   |



## Timeline 插槽

| 插槽名  | 说明       | 子标签       |
| ------- | ---------- | ------------ |
| default | 自定义内容 | TimelineItem |

# TimelineItem API

## TimelineItem 属性

| 属性名    | 说明               | 类型                                          | 默认值     |
| --------- | ------------------ | --------------------------------------------- | ---------- |
| dotcolor  | 节点颜色           | `string`                                      | —          |
| dotsolid  | 节点是否实心       | `boolean`                                     | false      |
| dotsize   | 节点尺寸           | `string`                                      | normal     |
| dottype   | 节点类型           | `primary/success/warning/danger/info/default` | default    |
| timestamp | 时间戳             | `string`                                      | 0000/00/00 |
| timeplace | 时间戳相对内容位置 | `string`                                      | bottom     |

## TimelineItem 插槽

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 自定义内容 |
| dot     | 自定义节点 |

