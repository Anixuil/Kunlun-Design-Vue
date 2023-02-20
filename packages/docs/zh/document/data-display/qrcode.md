---
layout: doc
lang: zh-CN
---

# QRCode 二维码

能够将链接转换生成二维码的组件。

## 基础用法

设置`link`属性，生成链接的二维码。

:::demo
qrcode/basic
:::

## 二维码尺寸

设置`size`属性，自定义二维码大小，单位为 `px`。设置`padding`属性，自定义空白区域大小。

:::demo
qrcode/size
:::

## 自定义颜色

通过`dark-color`和`light-color`属性，自定义二维码颜色。

**注意：仅支持十六进制颜色，例如 `dark-color="red"` 是不被支持的。**

:::demo
qrcode/color
:::

## 纠错比例

通过设置 `error-level` 调整不同的容错等级。

-   **`L(Low)`容错率为 `7%` 左右**
-   **`M(Medium)`容错率为 `15%` 左右**
-   **`Q(Quartile)`容错率为 `25%` 左右**
-   **`H(High)`容错率为 `30%` 左右**

:::demo
qrcode/error
:::

## API

### 属性

| 名称        | 描述               | 类型   | 默认值 | 必填 |
| ----------- | ------------------ | ------ | ------ | ---- |
| link        | 扫描后的地址       | string |        | 是   |
| size        | 二维码尺寸         | number | 120    | 否   |
| padding     | 二维码白边区域大小 | number | 3      | 否   |
| dark-color  | 二维码颜色         | string | #000   | 否   |
| light-color | 二维码背景色       | string | #fff   | 否   |
