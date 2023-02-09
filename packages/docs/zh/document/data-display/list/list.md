---
layout: doc
lang: zh-CN
---

# List 组件

通用列表。

## 何时使用

最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。

## 基础用法

基础列表。可通过设置`bordered`来展示边框，使用`avatar`来放置头像，使用`actions`来放置对列表的操作。

:::demo
list/basic
:::

## 简单列表

列表拥有超大、大、中、小、迷你五种尺寸。

通过设置`size`为 `xlarge`、`large`、`normal`、`small`、`mini`
分别把列表尺寸设为超大、大、中、小、迷你。

若不设置 `size`,则列表尺寸为中。还可通过设置 `header`和 `footer`,来自定义列表头部和尾部。

:::demo
list/simple
:::
