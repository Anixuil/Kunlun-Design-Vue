---
layout: doc
lang: en-US
---

# List component

Generic list.

## When to use

The most basic list display, can carry text, list, pictures, paragraphs, often used for background data display page.

## Basic usage

Base list. You can display the border by setting `bordered`, and use `avatar` to place the avatar,and `actions` to place actions on the list.

:::demo
list/basic
:::

## Simple list

The list is available in five sizes: super, large, medium, small and mini.

By setting `size` to `xlarge`、`large`、`normal` 、 `small`、 `mini` make the list oversized, large, medium,small, and mini, respectively.

If `size` is not set, the size is medium. You can customize the header and tail of the list by setting `header` and `footer`.

:::demo
list/simple
:::

Parameter description type

## API

### List

| Parameters | description                                | type                                                |
| ---------- | ------------------------------------------ | --------------------------------------------------- |
| bordered   | Display border or not                      | boolean                                             |
| dataSource | List data source                           | any\[]                                              |
| footer     | Bottom of list                             | slot                                                |
| header     | List header                                | slot                                                |
| renderItem | List cell content use #renderItem="{item}" | slot                                                |
| size       | Size of list                               | `xlarge` \| `large` \|`normal` \| `small` \| `mini` |

### List.Item

| Parameters | description                                                          | type |
| ---------- | -------------------------------------------------------------------- | ---- |
| content    | The contents of the list cell, located on the far left               | slot |
| actions    | List operation group, located on the far right                       | slot |
| extra      | Additional content is displayed on the far right of the list element | slot |

### List.Item.Meta

| Parameters  | description                                 | type |
| ----------- | ------------------------------------------- | ---- |
| avatar      | The icon of the list element                | slot |
| title       | The title of the list element               | slot |
| description | The description content of the list element | slot |
