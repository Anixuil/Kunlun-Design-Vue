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


## API

### List

| 参数       | 说明                                   | 类型                                                |
| ---------- | -------------------------------------- | --------------------------------------------------- |
| bordered   | 是否展示边框                           | boolean                                             |
| dataSource | 列表数据源                             | any\[]                                              |
| footer     | 列表底部                               | slot                                                |
| header     | 列表头部                               | slot                                                |
| renderItem | 列表单元内容 使用 #renderItem="{item}" | slot                                                |
| size       | list 的尺寸                            | `xlarge` \| `large` \|`normal` \| `small` \| `mini` |



### List.Item

| 参数    | 说明                             | 类型 |
| ------- | -------------------------------- | ---- |
| content | 列表单元内容，位置在最左边       | slot |
| actions | 列表操作组，位置在最右侧         | slot |
| extra   | 额外内容, 展展示在列表元素最右侧 | slot |

### List.Item.Meta

| 参数        | 说明               | 类型 |
| ----------- | ------------------ | ---- |
| avatar      | 列表元素的图标     | slot |
| title       | 列表元素的标题     | slot |
| description | 列表元素的描述内容 | slot |

