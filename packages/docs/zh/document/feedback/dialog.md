---
layout: doc
lang: zh-CN
---

# Dialog 对话框

在保留当前页面的情况下，告知用户并承载相关操作。

## 基础用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

需要设置 `model-value / v-model` 属性，它接收 `Boolean` ，当为 `true` 时显示 Dialog 。Dialog 分为三个部分: `header` 、 `container` 和 `footer` ，`footer` 需要具名为 `footer` 的 `slot` 。`title` 属性用于定义标题，他是可选的，默认值为空。本组件对话框还展现了完全不一样的 对话框 UI 。

:::demo
feedback/dialog/basic
:::

## Mode

kunlun design 新模式

Dialog 变成了横向出现，跨越全屏的弹窗提示，动画更加丝滑。您只需要对 `mode` 属性配置为 `kunlun`，就可以将 Dialog 变化成实例那样。

:::demo
feedback/dialog/mode
:::

## 自定义内容

kunlun design 支持您设置内容的对齐方式，甚至支持您自己完全自定义 Dialog 内容。

您可以通过设置 `ctxPosition` 属性来达到 `left` 左对齐 、 `right` 右对齐和 `center` 居中对齐

:::demo
feedback/dialog/container
:::

## 自定义头部

kunlun design 支持您自定义 Dialog 的头部

:::demo
feedback/dialog/head
:::

## 关闭前回调

kunlun design 支持您在关闭对话框前，执行一些您业务上所想执行的事情，您只需要添加 `before-close` 属性即可。

`before-close` 属性接收一个方法为参数。

:::demo
feedback/dialog/beforeClose
:::

## 自定义对话框基本样式

kunlun design 支持您在属性上对对话框基本样式进行快速设置。

您可以通过 `width` 属性对对话框宽度进行设置，如不设置，组件宽度则是被内容撑开。您可以通过 `top` 和 `left` 对对话框位置进行设置，让对话框出现在您想要它出现在的位置。您还可以通过 `bgColor` 属性对对话框背景颜色进行配置。

:::demo
feedback/dialog/position
:::

## 属性

| 属性                 | 说明                     | 类型     | 默认值  | 可选值                  |
| -------------------- | ------------------------ | -------- | ------- | ----------------------- |
| modelValue / v-model | 是否显示 Dialog          | boolean  |         |                         |
| width                | 对话框宽度               | string   |         |                         |
| mode                 | 对话框模式               | string   | default | kunlun                  |
| left \| top          | 对话框位置               | string   |         | 带单位的值              |
| cxtPosition          | 对话框内容对齐方式       | string   | center  | left \| center \| right |
| footPosition         | 对话框底部对齐方式       | string   | center  | left \| center \| right |
| bgColor              | 对话框颜色               | string   | white   | 任何代表颜色的值        |
| show-close           | 是否显示关闭按钮         | boolean  | true    | false                   |
| before-close         | 对话框关闭前的回调       | function |         |                         |
| close-on-click-modal | 点击模态框是否关闭对话框 | boolean  | true    | false                   |
