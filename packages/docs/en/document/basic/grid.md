---
layout: doc
lang: en-US
---

# Grid

The rasterization system of the layout, through the principle of 24 and other regions, defines the outer framework of the information block based on row 'row' and column 'col', and realizes fast page layout.

## Overview of components

`<kl-row>`:Row component.

`<kl-col>`:Col component.

A basic grid system can be created using a single group of `kl-row` and `kl-col'`raster components. Note: All columns (`kl-col`) must be placed inside rows (`kl-row`).

<style lang="scss"> @use '../../../examples/grid/style/common.scss'; </style>

## The underlying raster

The arrangement of regions is achieved by setting the `span` value to column `kl-col`.

Note that columns in a raster system use values from 1 to 24 to represent the extent they span, and if the sum of `kl-col`in a `kl-row` exceeds 24, the extra `kl-col` will start on a new line.

:::demo
grid/basic
:::

## Grid word wrapping

Wrap settings for column raster areas are implemented by setting the wrap property value to row `kl-row`.

`:wrap:true` means that the raster wraps automatically, otherwise it does not wrap, the default value is `false`.

:::demo
grid/wrap
:::

## Area spacing

The interval between ranges is achieved by setting the value of the `gutter`attribute to the column `kl-row`.

(16+8n)px is recommended as the raster interval (n is the natural number).

If you need a vertical interval, you can write it in the form of an array [horizontal interval, vertical interval].

:::demo
grid/gutter
:::

## Region offset

The offset of the range is achieved by setting the value of the `offset` attribute to the column `kl-col`.

:::demo
grid/offset
:::

## Raster sorting

Sort the column raster area by setting the `push` and `pull` attribute values to the column `kl-col`.

The `pull` attribute value represents the number of bins shifted to the left.

The `push` attribute value represents the number of bins shifted to the right

:::demo
grid/pullpush
:::

## Alignment

Use flex layouts for flexible alignment of columns.

By setting the `justify` attribute to `kl-row` to define the horizontal layout of the child elements, you can set `start/center/end/space-between/space-around/space-evenly`.

You can set `top/middle/bottom` by setting the `align` attribute to `kl-row` to define the vertical layout of the child elements.

### Column alignment

:::demo
grid/flexcol
:::

### Line alignment

:::demo
grid/flexrow
:::

## Flex sorting

Change the order of elements by `order`.

:::demo
grid/order
:::

## Responsive layout

Referring to Bootstrap's responsive design, five responsive sizes are preset: `xm/sm/md/lg/xl`

:::demo
grid/media
:::

<br>

# Row API

## Row Attributes

| The property name | description                                   | type      | Default value |
| :---------------- | --------------------------------------------- | --------- | ------------- |
| gutter            | Gate spacing                                  | `number`  | 0             |
| justify           | Horizontal arrangement under flex layout      | `string`  | start         |
| align             | Vertical arrangement under flex layout        | `string`  | top           |
| wrap              | Whether the overflow wraps word automatically | `boolean` | false         |
| tag               | Custom element labels                         | `string`  | div           |

## Row Slots

| Slot name | description       | Sublabels |
| --------- | ----------------- | --------- |
| default   | Customize content | Col       |

# Col API

## Col Attributes

| Slot name | description                                        | type            | Default value |
| --------- | -------------------------------------------------- | --------------- | ------------- |
| span      | The number of columns occupied by the raster       | `number`        | 24            |
| offset    | The number of compartments to the left of the grid | `number`        | 0             |
| pull      | The grid moves the number of tiles to the left     | `number`        | 0             |
| push      | The grid moves the number of tiles to the right    | `number`        | 0             |
| order     | The ordering of child elements under a flex layout | `number`        | 0             |
| xs        | <768px                                             | `number/object` | —             |
| sm        | >=768px                                            | `number/object` | —             |
| md        | >=992px                                            | `number/object` | —             |
| lg        | >=1200px                                           | `number/object` | —             |
| xl        | >=1920px                                           | `number/object` | —             |
| tag       | Custom element labels                              | `string`        | div           |

## Col Slots

| Slot name | description       |
| --------- | ----------------- |
| default   | Customize content |
