---
layout: doc
lang: en-US
---

# QRCode

A component that converts links to generate QR codes.

## Basic usage

Set the `link` property to generate the linked QR code.

:::demo
qrcode/basic
:::

## QRCode size

Set `size` property to customize the size of QR code, in unit `px`. Set the `padding` property to customize the size of the white space.

:::demo
qrcode/size
:::

## Custom color

Customize the color of QR code through the `dark-color` and `light-color` properties.

**Note: Only hexadecimal colors are supported. For example, `dark-color="red"` is not supported.**

:::demo
qrcode/color
:::

## Error correction ratio

Adjust different fault tolerance levels by setting `error-level`.

-   **The fault tolerance rate of `L(Low)` is about 7%**
-   **The fault tolerance rate of `M(Medium)` is about 15%**
-   **The fault tolerance rate of `Q(Quartile)` is about 25%**
-   **The fault tolerance rate of `H(High)` is about 30%**

:::demo
qrcode/error
:::

## API

### Attribute

| name        | description                                 | type   | default value | required |
| ----------- | ------------------------------------------- | ------ | ------------- | -------- |
| link        | The scanned address                         | string |               | yes      |
| size        | The qrcode size                             | number | 120           | no       |
| padding     | Size of the white margin area of the qrcode | number | 3             | no       |
| dark-color  | The qrcode color                            | string | #000          | no       |
| light-color | The qrcode background color                 | string | #fff          | no       |
