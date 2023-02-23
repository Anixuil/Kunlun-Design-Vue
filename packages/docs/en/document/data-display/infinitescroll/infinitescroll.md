---
layout: doc
lang: en-US
---

# InfiniteScroll

Implement scrolling to the bottom, load more data.

## Basic usage

Add `v-infinite-scroll` on the list you want to implement scroll loading and assign the corresponding load method to automatically execute the load method when scrolling to the bottom.

<style lang="scss"> @use '../../../../examples/infinitescroll/scroll.scss'; </style>

:::demo
infinitescroll/basic
:::

## Disable loading

<style lang="scss"> @use '../../../../examples/infinitescroll/scroll.scss'; </style>

:::demo
infinitescroll/disabled
:::

<br>

# InfiniteScroll API

## InfiniteScroll Attribute

| Attribute Name            | Description                                                                 | type      | Default Value |
| ------------------------- | --------------------------------------------------------------------------- | --------- | ------------- |
| infinite-scroll-disabled  | Disable scrolling bottoming                                                 | `boolean` | false         |
| infinite-scroll-immediate | The load method executes as soon as the content does not fill the container | `boolean` | true          |
| infinite-scroll-delay     | Throttling delay in ms                                                      | `number`  | 200           |
| infinite-scroll-distance  | The distance threshold at which the load is triggered, in px                | number    | 0             |
