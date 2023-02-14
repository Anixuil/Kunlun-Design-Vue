---
layout: doc
lang: zh-CN
---

# Grid 栅格

布局的栅格化系统，通过24等分区域原则，基于行`row`和列`col`来定义信息区块的外部框架，实现快捷的页面排版。

## 组件概述

`<kl-row>`:行组件。

`<kl-col>`:列组件。

使用单一的组`kl-row`和`kl-col`栅格组件就可以创建一个基本的栅格系统。注意：所有的列（`kl-col`）必须放在行（`kl-row`）内。
<style lang="scss"> @use '../../../examples/grid/style/common.scss'; </style>
## 基础栅格

通过给列`kl-col`设置`span`值来实现区域的排布。

需要注意的是栅格系统中的列用1到24的值来表示其跨越的范围，如果一个`kl-row`中的`kl-col`总和超过24，多余的`kl-col`会另起一行。

:::demo
grid/basic
:::

## 栅格自动换行

通过给行`kl-row`设置wrap属性值来实现列栅格区域的换行设置。

`:wrap:true`表示栅格自动换行，否则不换行，默认值是`false`。

:::demo
grid/wrap
:::

## 区域间隔

通过给列`kl-row`设置`gutter`属性值来实现区域的间隔。

推荐使用（16+8n）px作为栅格间隔（n是自然数）。

如果需要垂直间隔，可以写成数组[水平间隔，垂直间隔]的形式。

:::demo
grid/gutter
:::

## 区域偏移

通过给列`kl-col`设置`offset`属性值来实现区域的偏移。

:::demo
grid/offset
:::

## 栅格排序

通过给列`kl-col`设置`push`和`pull`属性值来实现列栅格区域的排序。

`pull`属性值表示向左移动的格数。

`push`属性值表示向右移动的格数

:::demo
grid/pullpush
:::

## 对齐方式

使用flex布局来对分栏进行灵活的对齐。

通过给`kl-row`设置`justify`属性定义子元素的水平排版方式，可设置`start/center/end/space-between/space-around/space-evenly`。

通过给`kl-row`设置`align`属性定义子元素的垂直排版方式，可设置`top/middle/bottom`。

### 列对齐

:::demo
grid/flexcol
:::

### 行对齐

:::demo
grid/flexrow
:::

## Flex排序

通过`order`来改变元素的排序。

:::demo
grid/order
:::

## 响应式布局

参照Bootstrap的响应式设计，预设五个响应式尺寸：`xm/sm/md/lg/xl`

:::demo
grid/media
:::

<br>

# Row API

## Row Attributes

| 属性名  | 说明                     | 类型      | 默认值 |
| :------ | ------------------------ | --------- | ------ |
| gutter  | 栅间隔                   | `number`  | 0      |
| justify | flex布局下的水平排列方式 | `string`  | start  |
| align   | flex布局下的垂直排列方式 | `string`  | top    |
| wrap    | 溢出是否自动换行         | `boolean` | false  |
| tag     | 自定义元素标签           | `string`  | div    |

## Row Slots

| 插槽名  | 说明       | 子标签 |
| ------- | ---------- | ------ |
| default | 自定义内容 | Col    |

# Col API

## Col Attributes

| 属性名 | 说明                   | 类型            | 默认值 |
| ------ | ---------------------- | --------------- | ------ |
| span   | 栅格占据的列数         | `number`        | 24     |
| offset | 栅格左侧的间隔格数     | `number`        | 0      |
| pull   | 栅格向左移动格数       | `number`        | 0      |
| push   | 栅格向右移动格数       | `number`        | 0      |
| order  | flex布局下子元素的排序 | `number`        | 0      |
| xs     | <768px                 | `number/object` | —      |
| sm     | >=768px                | `number/object` | —      |
| md     | >=992px                | `number/object` | —      |
| lg     | >=1200px               | `number/object` | —      |
| xl     | >=1920px               | `number/object` | —      |
| tag    | 自定义元素标签         | `string`        | div    |

## Col Slots

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 自定义内容 |

