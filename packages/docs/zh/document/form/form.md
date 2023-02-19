---
layout: doc
lang: zh-CN
---

# Form 表单

表单包含 `输入框`, `单选框`, `下拉选择`, `多选框` 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。

## 基础用法

在每一个 `form` 组件中，你需要一个 `form-item` 字段作为输入项的容器，用于获取值与验证值。

:::demo
form/basic
:::

## 经典表单

最基础的表单包括各种输入表单项，比如input、select、radio、checkbox等。

在每一个 form 组件中，你需要一个 form-item 字段作为输入项的容器，用于获取值。

:::demo
form/classic
:::

## API

### Form 属性

| 属性名      | 说明     | 类型    | 默认值 |
| ----------- | -------- | ------- | ------ |
| v-model     | 绑定值   | boolean | —      |
| label-width | label 宽 | String  | 80px   |

### FormItem 属性

| 属性名 | 说明                                    | 类型          | 默认值 |
| ------ | --------------------------------------- | ------------- | ------ |
| label  | 选项的标签，若不设置则默认与 value 相同 | string/number | —      |
