---
layout: doc
lang: zh-CN
---

# Radio 单选框

在一组备选项中进行单选

## 基础用法

单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。

要使用 Radio 组件，只需要设置`v-model`绑定变量， 选中意味着变量的值为相应 Radio
value属性的值， `value` 可以是String、Number 或 Boolean。

:::demo
radio/basic
:::

## Radio 单独使用

Radio 也可以单独使用，需要为所有radio绑定同一个数据。

:::demo
radio/alone
:::

## 禁用状态

`disabled` 属性可以用来控制单选框的禁用状态。

你只需要为radio-group设置 `disabled` 属性就能控制所有option禁用状态。

:::demo
radio/disabled
:::

## 禁用选项

为radio设置 `disabled` 属性就能禁用选项。

:::demo
radio/disabled-option
:::

## 带有边框

设置 border 属性为 true 可以渲染为带有边框的单选框。

:::demo
radio/border
:::

## API

### Radio 属性

| 属性名      | 说明                      | 类型                                 | 默认值   |
|----------|-------------------------|------------------------------------|-------|
| v-model  | 绑定值        | boolean | —     |
| value    | 选项的值                    | string / number / boolean / object | —     |
| label    | 选项的标签，若不设置则默认与 value 相同 | string/number                      | —     |
| disabled | 是否禁用该选项                 | boolean                            | false |
| border	  | 是否显示边框                  | boolean                            | false |

### RadioGroup 属性

| 属性名      | 说明         | 类型      | 默认值   |
|----------|------------|---------|-------|
| v-model  | 绑定值        | boolean | —     |
| disabled | 是否禁用所有选项   | boolean | false |
| border	  | 是否显示所有选项边框 | boolean | false |

### RadioGroup 事件

| 事件名    | 说明                  | 回调参数 |
|--------|---------------------|------|
| change | 仅当 modelValue 改变时触发 | val  |
