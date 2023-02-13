---
layout: doc
lang: zh-CN
---

# Button 组件

常用的操作按钮。

## 基础用法

使用 `type`, `plain`,`round` 和 `circle` 来定义样式。

:::demo
button/basic
:::

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。该属性接受一个 `Boolean` 类型的值。

:::demo
button/disabled
:::

## 链接按钮

你可以使用 `link` 属性来定义按钮是否为链接按钮。

使用 `link` 属性来控制按钮是否为链接按钮。该属性接收一个 `Boolean` 类型的值。

:::demo
button/link
:::

## 文字按钮

没有边框和背景颜色的按钮。

使用 `text` 属性来控制按钮是否为文字按钮。该属性接受一个 `Boolean` 类型的值。

:::demo
button/text
:::

## 调整尺寸

除了默认的带下，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `mini` `small` `normal` `large` 和 `xlarge` 五种值。

:::demo
button/size
:::

## 属性

| 属性      | 说明                       | 类型    | 可选                                             | 默认    |
| --------- | -------------------------- | ------- | ------------------------------------------------ | ------- |
| type      | 按钮类型                   | string  | primary\|info\|success\|warning\|danger\|default | default |
| size      | 按钮尺寸                   | string  | mini\|small\|normal\|large\|xlarge               | normal  |
| color     | 按钮背景颜色               | string  |                                                  |         |
| textColor | 按钮文字颜色               | string  |                                                  |         |
| round     | 是否圆角                   | boolean |                                                  | false   |
| plain     | 纯色按钮                   | boolean |                                                  | false   |
| circle    | 圆                         | boolean |                                                  | false   |
| disabled  | 禁用按钮                   | boolean |                                                  | false   |
| link      | 链接按钮                   | boolean |                                                  | false   |
| text      | 文字按钮                   | boolean |                                                  | false   |
| bg        | 文字按钮模式下是否显示背景 | boolean |                                                  | false   |
| icon      | 字体图标                   | object  |                                                  |         |
