---
layout: doc
lang: zh-CN
---

# Select 下拉选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础单选 `v-model` 的值为当前被选中的 `kl-option` 的 `value` 属性值,通过`placeholder`属性可以设置展位文字，不设置默认为：`Please enter a keyword`

:::demo
select/basic
:::

## 禁用状态

禁用整个选择器组件, 添加 `disabled` 属性，则整个选择器不可用。

:::demo
select/disabled
:::

## 选项标签

通过 `kl-option` 的 `label` 属性可以设置 `kl-option` 的标签,也可以写在 `kl-option` 内，不设置默认为 `value` 的值。

:::demo
select/label
:::

## API

### 属性

| 属性名             | 说明                               | 类型                         | 默认值    |
|-----------------|----------------------------------|----------------------------|--------|
| v-model         | 绑定值                              | boolean                    | —      |
| disabled        | 是否禁用                             | boolean                    | fales  |
