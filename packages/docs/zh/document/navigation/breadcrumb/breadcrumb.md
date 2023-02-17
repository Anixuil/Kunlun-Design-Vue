---
layout: doc
lang: zh-CN
---

# Breadcrumb 组件

面包屑：显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

-   当系统拥有超过两级以上的层级结构时；
-   当需要告知用户『你在哪里』时；
-   当需要向上导航的功能时。

## 基本

最简单的用法。

:::demo
breadcrumb/basic
:::

## 使用路由的

和 `vue-router` 进行结合使用。(安装 vue-router 后，自行在 route 配置文件里配置路由即可实现效果)

:::demo
breadcrumb/router
:::

## 分隔符

用`separator=">"`可以自定义分隔符。

:::demo
breadcrumb/separator
:::

## 带有图标的

图标放在文字前面。

:::demo
breadcrumb/withicon
:::

## API

| 参数      | 说明         | 类型   | 默认值 |
| --------- | ------------ | ------ | ------ |
| separator | 分隔符自定义 | string | '/'    |

### Breadcrumb.Item

| 参数    | 参数                                          | 类型          | 默认值 |
| ------- | --------------------------------------------- | ------------- | ------ |
| to      | 路由跳转目标，同 vue-router 的 to 属性        | string/object | -      |
| replace | 如果设置该属性为 true, 导航将不会留下历史记录 | boolean       | -      |
