---
layout: doc
lang: zh-CN
---

# Select 下拉选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础单选 `v-model` 的值为当前被选中的 `kl-option` 的 `value` 属性值,通过`placeholder`
属性可以设置展位文字，不设置默认为：`Please enter a keyword`

:::demo
select/basic
:::

## 禁用状态

禁用整个选择器组件, 添加 `disabled` 属性，则整个选择器不可用。

:::demo
select/disabled
:::

## 有禁用选项

在 `kl-option` 中，设定 `disabled` 值为 `true`，即可禁用该选项

:::demo
select/disabled-option
:::

## 选项标签

通过 `kl-option` 的 `label` 属性可以设置 `kl-option` 的标签,也可以写在 `kl-option` 内，不设置默认为 `value` 的值。

:::demo
select/label
:::

## 尺寸

使用 `size` 属性改变下拉选择框大小。 除了默认大小外，还有另外两个选项： `large`, `small`。

:::demo
select/size
:::

## 可清空单选

您可以使用清除图标来清除选择。

为 `kl-select` 设置 `clearable` 属性，则可将选择器清空。

:::demo
select/clearable
:::

## API

### Select 属性

| 属性名      | 说明                            | 类型    | 默认值  |
| ----------- | ------------------------------- | ------- | ------- |
| v-model     | 绑定值                          | boolean | —       |
| disabled    | 是否禁用                        | boolean | fales   |
| size        | 输入框尺寸(large/default/small) | string  | default |
| clearable   | 是否可以清空选项                | boolean | false   |
| placeholder | 占位文字                        | string  | —       |

### Option 属性

| 属性名   | 说明                                    | 类型                               | 默认值 |
| -------- | --------------------------------------- | ---------------------------------- | ------ |
| value    | 选项的值                                | string / number / boolean / object | —      |
| label    | 选项的标签，若不设置则默认与 value 相同 | string/number                      | —      |
| disabled | 是否禁用该选项                          | boolean                            | false  |
