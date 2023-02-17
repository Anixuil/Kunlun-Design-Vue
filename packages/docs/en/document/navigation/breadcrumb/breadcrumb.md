---
layout: doc
lang: en-US
---

# Breadcrumb component

Breadcrumbs: Displays the position of the current page in the system hierarchy and can be returned up.

## When to use

-   When the system has more than two levels of hierarchy;
-   When the user needs to be told "where you are";
-   When you need the ability to navigate up.

## Basic

The simplest use.

:::demo
breadcrumb/basic
:::

## routed

Used together with `vue-router`,(After the vue-router is installed, configure the route in the route configuration file.)

:::demo
breadcrumb/router
:::

## separator

The separator can be customized by setting the separator preperty: separator=">" .

:::demo
breadcrumb/separator
:::

## withiconed

The icon should be placed in front of the text.

:::demo
breadcrumb/withicon
:::

## API

| Parameters | Description            | Type   | Default value |
| ---------- | ---------------------- | ------ | ------------- |
| separator  | Delimiter user-defined | string | '/'           |

### Breadcrumb.Item

| Parameters | Description                                                                    | Type          | Default value |
| ---------- | ------------------------------------------------------------------------------ | ------------- | ------------- |
| to         | The destination of the route is the same as the to attribute of the vue-router | string/object | -             |
| replace    | If this property is set to true, the navigation will leave no history          | boolean       | -             |
