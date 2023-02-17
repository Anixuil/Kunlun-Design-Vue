---
layout: doc
lang: zh-CN
---

# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量。

:::demo
switch/basic
:::

## 颜色设置

可以使用 `active-color` 属性与 `inactive-color` 属性来设置开关的背景色。

:::demo
switch/color
:::

## 尺寸

使用 size 属性改变开关大小。 除了默认大小外，还有另外两个选项： large, small。

:::demo
switch/size
:::

## 禁用状态

添加`disabled`属性，可设置为禁用状态的开关。

:::demo
switch/disabled
:::

## 文字描述

使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。

:::demo
switch/text
:::

## 绑定数据类型

使用`active-value`属性与`inactive-value`属性来设置开关的文字描述。

:::demo
switch/type
:::

## 显示自定义图标

使用 inactive-icon 和 active-icon 属性来添加图标。 使用 inline-prompt 属性来控制图标显示在点内。

:::demo
switch/icon
:::

## API

### 属性

| 属性名         | 说明                                           | 类型                      | 默认值 |
| -------------- | ---------------------------------------------- | ------------------------- | ------ |
| v-model        | 绑定值                                         | boolean                   | —      |
| disabled       | 是否禁用                                       | boolean                   | fales  |
| active-value   | switch 状态为 on 时的值                        | boolean / string / number | true   |
| inactive-value | switch 的状态为 off 时的值                     | boolean / string / number | false  |
| active-icon    | switch 状态为 on 时所显示图标，结合 Icon 使用  | string                    | —      |
| inactive-icon  | switch 状态为 off 时所显示图标，结合 Icon 使用 | string                    | —      |
| active-text    | switch 打开时的文字描述                        | string                    | —      |
| inactive-text  | switch 关闭时的文字描述                        | string                    | —      |
| active-color   | 当在 on 状态时的背景颜色                       | string                    | —      |
| inactive-color | off 状态时的背景颜色                           | string                    | —      |
| name           | 等价于原生 input name 属性                     | string                    | —      |

### 事件

| 事件名 | 说明                       | 回调参数 |
| ------ | -------------------------- | -------- |
| change | 仅当 modelValue 改变时触发 | val      |
