---
layout: doc
lang: zh-CN
---

# Checkbox 单选框

在一组备选项中进行单选

## 基础用法

单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。

要使用 Checkbox 组件，只需要设置`v-model`绑定变量， 选中意味着变量的值为相应 Checkbox
value 属性的值， `value` 可以是 String、Number 或 Boolean。

:::demo
checkbox/basic
:::

## Checkbox 单独使用

<<<<<<< HEAD
checkbox 也可以单独使用，需要为所有 Checkbox 绑定同一个数据。
=======
checkbox 也可以单独使用，绑定数据为`boolean`，多个 checkbox 绑定同一个 value 不会互斥。

> > > > > > > maindev

:::demo
checkbox/alone
:::

## 禁用状态

`disabled` 属性可以用来控制单选框的禁用状态。

你只需要为 Checkbox-group 设置 `disabled` 属性就能控制所有 option 禁用状态。

:::demo
checkbox/disabled
:::

## 禁用选项

为 Checkbox 设置 `disabled` 属性就能禁用选项。

:::demo
checkbox/disabled-option
:::

## 带有边框

设置 border 属性为 true 可以渲染为带有边框的单选框。

:::demo
checkbox/border
:::

## 图标

可以在插槽内传入图标

:::demo
checkbox/icon
:::

## API

### Checkbox 属性

| 属性名   | 说明                                    | 类型                               | 默认值 |
| -------- | --------------------------------------- | ---------------------------------- | ------ |
| v-model  | 绑定值                                  | boolean                            | —      |
| value    | 选项的值                                | string / number / boolean / object | —      |
| label    | 选项的标签，若不设置则默认与 value 相同 | string/number                      | —      |
| disabled | 是否禁用该选项                          | boolean                            | false  |
| border   | 是否显示边框                            | boolean                            | false  |

## Checkbox 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认插槽 |

### CheckboxGroup 属性

| 属性名   | 说明                 | 类型    | 默认值 |
| -------- | -------------------- | ------- | ------ |
| v-model  | 绑定值               | boolean | —      |
| disabled | 是否禁用所有选项     | boolean | false  |
| border   | 是否显示所有选项边框 | boolean | false  |

### CheckboxGroup 事件

| 事件名 | 说明                       | 回调参数 |
| ------ | -------------------------- | -------- |
| change | 仅当 modelValue 改变时触发 | —        |
