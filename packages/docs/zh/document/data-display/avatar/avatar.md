---
layout: doc
lang: zh-CN
---

# Avatar 组件

展示用户头像的控件。

## 基础用法

使用`shape`来定义样式，使用`size`来调整大小。

:::demo
avatar/basic
:::

## 展示类型

支持使用图片，图标或者文字作为 Avatar。

:::demo
avatar/type
:::

## API

### Avatar

| 参数   | 说明                           | 类型              |
| ------ | ------------------------------ | ----------------- |
| size   | Avatar 大小                    | `string`/`number` |
| shape  | Avatar 形状                    | `string`          |
| src    | Avatar 图片的源地址            | `string`          |
| srcset | 图片 Avatar 的原生 srcset 属性 | `string`          |
| alt    | 图片 Avatar 的原生 alt 属性    | `string`          |

### Slots

| 插槽名  | 说明                 |
| ------- | -------------------- |
| default | 自定义头像展示的内容 |
