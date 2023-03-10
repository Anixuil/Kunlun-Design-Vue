---
layout: doc
lang: en-US
---

# DatePicker

Control to enter or select a date.

## Basic usage

Specify the selection box type by setting the `picker` property. Optional values: `date`, `month`, `year`, default is `date`.

:::demo
datepicker/basic
:::

## Date and time selection

Add `isDateTime` property to add time selection function. The default value is `false`.

:::demo
datepicker/datetime
:::

## Range selector

Add the `isRangePicker` property and select a period of time. The default value is `false`.

:::demo
datepicker/range
:::

## Date format

Using the `format` attribute, you can customize the date display format.

:::demo
datepicker/format
:::

## Input box prompt text

Through `placeholder`, `placeholderRange` attribute, the custom input message text.

:::demo
datepicker/placeholder
:::

## An optional date and time

The value of `disabledDate` and `disabledTime` disables partial date and time selection, respectively. The value of `disabledTime` and `isDateTime` are used together.

:::demo
datepicker/disabled
:::

## Holiday view

Add the `showHolidays` property to open the holiday view, default is `false`.

:::demo
datepicker/holiday
:::

## Internationalization

Set `lang` property to `en` and switch to English with one click. The default value is `ch`.

:::demo
datepicker/lang
:::

## API

### Attribute

| name             | description                                                               | type            | default value | required |
| ---------------- | ------------------------------------------------------------------------- | --------------- | ------------- | -------- |
| placeholder      | Input box placeholder text                                                | string          |               | no       |
| placeholderRange | Range selection input box placeholder text                                | string[]        |               | no       |
| picker           | Selector type                                                             | year/month/date | date          | no       |
| format           | Display date format, configuration reference [dayjs](https://day.js.org/) | string          | YYYY-MM-DD    | no       |
| isDateTime       | Support time selection                                                    | boolean         | false         | no       |
| isRangePicker    | Choose a period of time                                                   | boolean         | false         | no       |
| disabledDate     | Set an optional date                                                      | Array<number[]> |               | no       |
| disabledTime     | Set an optional time                                                      | Array<number[]> |               | no       |
| showHolidays     | Lunar calendar, holidays show                                             | boolean         | false         | no       |
| lang             | Language setting                                                          | zh / en         | zh            | no       |

### Event

| name   | description                                                                      | callback parameter         |
| ------ | -------------------------------------------------------------------------------- | -------------------------- |
| change | Triggered when the input box value changes. It is used to obtain the input value | (value: string / string[]) |

## FAQ

### About the date selection box component data acquisition

The `date selector box component` is an uncontrolled component, that is, its state is maintained internally by the component. The template reference of the component can be obtained by `ref` and the date data of the component can be obtained by `.value `. For example:

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
// Print date data
console.log(datePickerRef.value?.value)
</script>
```

In the future, we will judge the design based on the user experience. For designs that don't make sense, we will refactor them in subsequent iterations.
