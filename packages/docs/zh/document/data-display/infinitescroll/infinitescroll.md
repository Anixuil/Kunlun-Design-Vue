---
layout: doc
lang: zh-CN
---

# InfiniteScroll 无限滚动

实现滚动至底部时，加载更多数据。

## 基础用法

在要实现滚动加载的列表上上添加`v-infinite-scroll`，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。

<style lang="scss"> @use '../../../../examples/infinitescroll/scroll.scss'; </style>

:::demo
infinitescroll/basic
:::

## 禁用加载

在要实现滚动加载的列表上上添加`v-infinite-scroll`，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。

<style lang="scss"> @use '../../../../examples/infinitescroll/scroll.scss'; </style>

:::demo
infinitescroll/disabled
:::

<br>

# InfiniteScroll API

## InfiniteScroll 属性

| 属性名                    | 说明                                 | 类型      | 默认值 |
| ------------------------- | ------------------------------------ | --------- | ------ |
| infinite-scroll-disabled  | 禁用滚动触底加载                     | `boolean` | false  |
| infinite-scroll-immediate | 在内容没有填满容器时立即执行加载方法 | `boolean` | true   |
| infinite-scroll-delay     | 节流时延，单位 ms                    | `number`  | 200    |
| infinite-scroll-distance  | 触发加载的距离阈值，单位为 px        | number    | 0      |
