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

## API

### 属性

| 名称             | 描述                                                  | 类型            | 默认值     | 必填 |
| ---------------- | ----------------------------------------------------- | --------------- | ---------- | ---- |
| placeholder      | 输入框占位文本                                        | string          |            | 否   |
| placeholderRange | 范围选择输入框占位文本                                | string[]        |            | 否   |
| picker           | 选择器类型                                            | year/month/date | date       | 否   |
| format           | 展示的日期格式，配置参考 [dayjs](https://day.js.org/) | string          | YYYY-MM-DD | 否   |
| isDateTime       | 支持时间选择                                          | boolean         | false      | 否   |
| isRangePicker    | 选择一段时间                                          | boolean         | false      | 否   |
| disabledDate     | 设置不可选日期                                        | Array<number[]> |            | 否   |
| disabledTime     | 设置不可选时间                                        | Array<number[]> |            | 否   |
| showHolidays     | 农历，节假日显示                                      | boolean         | false      | 否   |
| lang             | 语言设置                                              | zh / en         | zh         | 否   |

### 事件

| 事件名 | 说明                                 | 回调参数                   |
| ------ | ------------------------------------ | -------------------------- |
| change | input 框值改变时触发，用于获取输入值 | (value: string / string[]) |

## FAQ

### 关于日期选择框组件数据获取

`日期选择框组件`是一个非受控组件，即其状态由组件内部维护，可以通过`ref`获取组件的模板引用，通过`.value`获取组件日期数据。例：

```vue
<template>
    <div>
        <kl-date-picker ref="datePickerRef"></kl-date-picker>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { KlDatePicker } from 'kunlun-design'
const datePickerRef = ref<InstanceType<typeof KlDatePicker> | null>(null)
// 打印日期数据
console.log(datePickerRef.value?.value)
</script>
```

在后续，我们会根据用户体验来评判这种设计是否合理。对于不合理的设计，我们将会在后续版本迭代中进行相应的重构。
