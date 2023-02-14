---
layout: doc
lang: zh-CN
---

# Layout 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构。

## 组件概述

有`<kl-layout>`、`<kl-header>`、`<kl-main>`、`<kl-footer>`、`<kl-aside>`五个组件。

`<kl-layout>`:外层容器。注意：当子元素中包含`<kl-header>`或`<kl-footer>`时，全部子元素会自上而下垂直排列，其余情况水平左右排列。

`<kl-header>`:顶栏容器。

`<kl-main>`：主要内容容器。

`<kl-footer>`：底栏容器。

`<kl-aside>`：侧边栏容器。

其中，`<kl-header>`和`<kl-footer>`可以通过 height 属性名自定义高度，`<kl-aside>`可以通过 width 属性名自定义宽度，详情可看 API 区。

## 常用布局

<style lang="scss"> @use '../../../examples/layout/style/common.scss'; </style>

:::demo
layout/hm
:::

:::demo
layout/hmf
:::

:::demo
layout/am
:::

:::demo
layout/ham
:::

:::demo
layout/hamf
:::

:::demo
layout/ahm
:::

<br>

# Layout API

## Layout Attributes

| 属性名    | 说明             | 类型     | 默认值                                                       |
| :-------- | ---------------- | -------- | ------------------------------------------------------------ |
| direction | 子元素的排列方向 | `string` | 子元素中有`kl-header`或`kl-footer`时为vertical，其余为horizontal |

## Layout Slots

| 插槽名  | 说明       | 子标签                          |
| ------- | ---------- | ------------------------------- |
| default | 自定义内容 | Layout/Header/Footer/Aside/Main |

# Header/Footer API

## Header/Footer Attributes

| 属性名 | 说明     | 类型     | 默认值 |
| ------ | -------- | -------- | ------ |
| height | 顶栏高度 | `string` | 60px   |

## Header/Footer Slots

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 自定义内容 |

# Aside API

## Aside Attributes

| 属性名 | 说明     | 类型     | 默认值 |
| ------ | -------- | -------- | ------ |
| width  | 顶栏宽度 | `string` | 200px  |

## Aside Slots

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 自定义内容 |

# Main API

## Aside Slots

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 自定义内容 |

