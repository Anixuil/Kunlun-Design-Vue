---
layout: doc
lang: zh-CN
---

# Drawer 抽屉

屏幕边缘滑出的浮层面板。

## 基础用法

通过 `v-model` 双向绑定控制抽屉显示与隐藏的状态。设置`direction`属性，控制抽屉展开方向。组件内部的默认插槽接受用户自定义的内容。

:::demo
feedback/drawer/basic
:::

## 抽屉尺寸

设置`size`属性，自定义抽屉尺寸。若传递`size`为数值类型，则单位为 px，同时支持传入百分比字符串。默认为 `30%`。

:::demo
feedback/drawer/size
:::

## 设置遮罩层 z-index

通过`z-index`属性，你可以改变遮罩层的层级。注意：`抽屉层级 = 遮罩层层级 + 1`。例如：`如果z-index = 299，那么，遮罩层层级 = 299，抽屉层级 = 300`。默认值为 `1000`。

:::demo
feedback/drawer/z-index
:::

## 是否锁定滚动条

通过设置`lock-scroll`属性，根据自己的需求决定是否锁定滚动条。若锁定滚动条，需要自行处理滚动条在显示与隐藏之间切换导致的页面抖动的问题。默认为`true`。

:::demo
feedback/drawer/lock
:::

## 自定义遮罩层与抽屉样式

通过设置`modal-class`、`drawer-class`属性，你可以自定义遮罩层和抽屉的样式。

**注意：想要使自定义类名生效，你需要使用`:deep`深度选择器**

:::demo
feedback/drawer/custom-class
:::

## API

### 属性

| 名称                  | 描述                                                                                      | 类型                  | 默认值 | 必填 |
| --------------------- | ----------------------------------------------------------------------------------------- | --------------------- | ------ | ---- |
| model-value / v-model | 是否显示抽屉                                                                              | boolean               |        | 是   |
| size                  | 抽屉窗体的大小, 当使用 `number` 类型时, 以像素为单位, 当使用 `string` 类型时, 请传入 `x%` | number/string         | '30%'  | 否   |
| direction             | 抽屉打开的方向                                                                            | rtl / ltr / ttb / btt | rtl    | 否   |
| modal                 | 是否需要遮罩层                                                                            | boolean               | true   | 否   |
| lock-scroll           | 是否在抽屉出现时将 `body` 滚动锁定                                                        | boolean               | true   | 否   |
| modal-class           | 遮罩层的自定义类名                                                                        | string                |        | 否   |
| drawer-class          | 抽屉的自定义类名                                                                          | string                |        | 否   |
| close-esc             | 是否可以通过按下 `ESC` 关闭抽屉                                                           | boolean               | true   | 否   |
| z-index               | 设置遮罩层的`z-index`，`抽屉的z-index = 遮罩层的z-index + 1`                              | number                | 1000   | 否   |

### 插槽

| 名称    | 描述       |
| ------- | ---------- |
| default | 抽屉的内容 |
