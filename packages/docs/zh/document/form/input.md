---
layout: doc
lang: zh-CN
---

# Input 输入框

通过鼠标或键盘输入字符。

## 基础用法

通过`placeholder`属性，可自定义输入框提示

:::demo
input/basic
:::

## 密码框

通过设置`type`属性为`password`，可设置为密码框，添加`showPassword`属性可以控制密码是否可查看(`showPassword`属性依赖于 icon，使用之前请先导入 icon 图标库，详细请看[icon](https://anixuil.github.io/zh/document/basic/icon.html))。

:::demo
input/password
:::

## 禁用状态

添加`disabled`属性，可设置为禁用状态的输入框。

:::demo
input/disabled
:::

## 尺寸

使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项： large, small。

:::demo
input/size
:::

## 文本框

通过设置`type`属性为`textarea`，可以自定义为文本框；`rows`属性可以设置文本框的高度，默认为 4 行；`disabled`属性可以禁用文本框

:::demo
input/textarea
:::

## API

### 属性

| 属性名        | 说明                                               | 类型                          | 默认值  |
| ------------- | -------------------------------------------------- | ----------------------------- | ------- |
| placeholder   | 自定义输入框提示                                   | String                        | —       |
| type          | 类型                                               | String                        | text    |
| v-model       | 绑定值                                             | string/number                 | —       |
| clearable     | 是否显示清除按钮，只有当 type 不是 textarea 时生效 | boolean                       | fales   |
| show-password | 是否显示切换密码图标                               | boolean                       | fales   |
| disabled      | 是否禁用                                           | boolean                       | fales   |
| rows          | 输入框行数，仅 type 为 'textarea' 时有效           | number                        | 4       |
| name          | 等价于原生 input name 属性                         | string                        | —       |
| readonly      | 原生 readonly 属性，是否只读                       | boolean                       | false   |
| size          | 输入框尺寸，只在 type 不为 'textarea' 时有效       | 'large' / 'default' / 'small' | default |
| max           | 原生 max 属性，设置最大值                          | —                             | —       |
| min           | 原生属性，设置最小值                               | —                             | —       |
| step          | 原生属性，设置输入字段的合法数字间隔               | —                             | —       |
| autofocus     | 原生属性，自动获取焦点                             | boolean                       | false   |
| form          | 原生属性                                           | string                        | —       |
| input-style   | input 元素或 textarea 元素的 style                 | string/object                 | {}      |

### 事件

| 事件名 | 说明                                        | 回调参数 |
| ------ | ------------------------------------------- | -------- |
| change | 仅当 modelValue 改变时触发                  | val      |
| clear  | 在点击由 clearable 属性生成的清空按钮时触发 | —        |
