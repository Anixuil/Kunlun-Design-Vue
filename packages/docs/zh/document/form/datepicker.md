---
layout: doc
lang: zh-CN
---

# DatePicker 日期选择框

输入或选择日期的控件。

## 基础用法

通过设置 `picker` 属性，指定选择框类型。可选值：`date`、`month`、`year`，默认值为`date`。

:::demo
datepicker/basic
:::

## 日期时间选择

添加 `isDateTime` 属性，增加选择时间功能。默认值为`false`。

:::demo
datepicker/datetime
:::

## 范围选择器

添加 `isRangePicker` 属性，选择一段时间。默认值为`false`。

:::demo
datepicker/range
:::

## 日期格式

使用`format`属性，可以自定义日期显示格式。

:::demo
datepicker/format
:::

## 输入框提示文字

通过`placeholder`、`placeholderRange`属性，自定义输入框提示文字。

:::demo
datepicker/placeholder
:::

## 不可选择的日期和时间

可用 `disabledDate` 和 `disabledTime` 分别禁止选择部分日期和时间，其中 disabledTime 需要和 `isDateTime` 一起使用。

:::demo
datepicker/disabled
:::

## 节假日视图

添加`showHolidays`属性，开启节假日视图，默认值为`false`。

:::demo
datepicker/holiday
:::

## 国际化

设置`lang`属性为`en`，一键切换为英文。默认值为`ch`。

:::demo
datepicker/lang
:::
