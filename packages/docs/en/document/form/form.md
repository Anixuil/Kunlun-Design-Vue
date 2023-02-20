---
layout: doc
lang: en-US
---

# Form

The form contains 'input box', 'radio box', 'drop selection', 'multiple check box' and other user-input components. Using forms, you can collect, validate, and submit data.

## Basic usage

In each 'form' component, you need a 'form-item' field as a container for inputs to get and validate values.

:::demo
form/basic
:::

## Classic form

The most basic form includes various input form items, such as input, select, radio, checkbox, etc.

In each form component, you need a form-item field as a container for the input item to get the value.

:::demo
form/classic
:::

## API

### Form property

| Property name | Description   | Type    | Default value |
| ------------- | ------------- | ------- | ------------- |
| v-model       | Binding value | boolean | —             |
| label-width   | label wide    | String  | 80px          |

### FormItem property

| Property name | Description                                                        | Type          | Default value |
| ------------- | ------------------------------------------------------------------ | ------------- | ------------- |
| label         | The label of the option, if not set, defaults to the same as value | string/number | —             |
