---
layout: doc
lang: en-US
---

# Layout

Container components for layouts to quickly build the basic structure of a page.

## Overview of components

There are five components: `<kl-layout>`,`<kl-header>`,`<kl-main>`,`<kl-footer>`,and `<kl-aside>`.

`<kl-layout>`:Outer container. Note: When a child element contains ` <kl-header>`or `<kl-footer>`, all child elements are arranged vertically from top to bottom, and the rest horizontally left and right.

`<kl-header>`:Topbar container。

`<kl-main>`：The primary content container。

`<kl-footer>`：Bottom bar container。

`<kl-aside>`：Sidebar container。

Among them, `<kl-header> `and `<kl-footer>`can customize the height through the height property name, `<kl-aside>` can customize the width through the width property name, see the API area for details。

## Common layouts

<style lang="scss"> @use '../../../examples/layout/style/common.scss'; </style>

:::demo
layout/hm
:::

:::demo
layout/hmf
:::

:::demo
layout/am
:::

:::demo
layout/ham
:::

:::demo
layout/hamf
:::

:::demo
layout/ahm
:::

<br>

# Layout API

## Layout Attributes

| The property name | description                                        | type     | Default value                                                                                   |
| :---------------- | -------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------- |
| direction         | The direction in which child elements are arranged | `string` | If there are `kl-header` or `kl-footer` in the child elements, vertical and the rest horizontal |

## Layout Slots

| Slot name | description       | Sublabels                       |
| --------- | ----------------- | ------------------------------- |
| default   | Customize content | Layout/Header/Footer/Aside/Main |

# Header/Footer API

## Header/Footer Attributes

| The property name | description    | type     | Default value |
| ----------------- | -------------- | -------- | ------------- |
| height            | Top bar height | `string` | 60px          |

## Header/Footer Slots

| Slot name | description       |
| --------- | ----------------- |
| default   | Customize content |

# Aside API

## Aside Attributes

| The property name | description   | type     | Default value |
| ----------------- | ------------- | -------- | ------------- |
| width             | Top bar width | `string` | 200px         |

## Aside Slots

| Slot name | description       |
| --------- | ----------------- |
| default   | Customize content |

# Main API

## Aside Slots

| Slot name | description       |
| --------- | ----------------- |
| default   | Customize content |
