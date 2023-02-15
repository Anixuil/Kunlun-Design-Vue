---
layout: doc
lang: zh-CN
---

# Upload 上传

文件选择上传和拖拽上传控件。

## 基础用法

用户点击按钮弹出文件选择框。插槽`trigger`用于传入触发文件选择的内容，插槽`tip`用户传入提示信息。

:::demo
upload/basic
:::

## 限制上传文件数量

通过`limit`属性限制上传文件数量，当超过限制时，会触发 `onExceed` 事件。

:::demo
upload/limit
:::

## 用户头像

在`on-before-upload` 钩子中限制用户上传文件的格式和大小。

:::demo
upload/avatar
:::

## 拖拽上传

设置 `drag`属性为 true，你可以将文件拖拽到特定区域以进行上传。

`name` 为`trigger`的插槽会传递一个`dragging`属性，`boolean` 类型，用于判断拖拽元素是否处于拖拽区域中，你可以基于此特性自定义拽入样式。

:::demo
upload/drag
:::

## 上传 API

### 属性

| 名称             | 描述                                                            | 类型                                                                     | 默认值 | 必填 |
| ---------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------ | ------ | ---- |
| files            | 文件列表                                                        | FileItem[]                                                               | []     | 是   |
| name             | 上传的文件字段名，需要和后端约定                                | string                                                                   | file   | 否   |
| action           | 请求 URL                                                        | string                                                                   |        | 是   |
| method           | 请求方法                                                        | string                                                                   | post   | 否   |
| headers          | 设置上传的请求头部                                              | Record<string, string>                                                   |        | 否   |
| limit            | 允许上传文件的最大数量                                          | number                                                                   |        | 否   |
| multiple         | 是否支持多选文件                                                | boolean                                                                  | false  | 否   |
| show-file-list   | 是否显示已上传文件列表                                          | boolean                                                                  | true   | 否   |
| data             | 上传时附带的额外参数                                            | Record<string, any>                                                      |        | 否   |
| drag             | 是否启用拖拽上传                                                | boolean                                                                  | flase  | 否   |
| on-exceed        | 当超出限制时，执行的钩子函数                                    | (files: FileItem[], uploadFiles: FileItem[]) => void                     |        | 否   |
| on-change        | 文件状态改变时的钩子，上传成功和上传失败时都会被调用            | (uploadFile: FileItem, uploadFiles: FileItem[]) => void                  |        | 否   |
| on-before-upload | 上传文件之前的钩子，参数为上传的文件， 若返回 false，则取消上传 | (uploadFile: FileItem) => void                                           |        | 否   |
| on-preview       | 点击文件列表中已上传的文件时的钩子                              | (file: FileItem) => void                                                 |        | 否   |
| on-before-remove | 文件列表移除文件之前的钩子，若返回 false，则取消移除操作        | (file: FileItem, files: FileItem[]) => boolean                           |        | 否   |
| on-remove        | 文件列表移除文件时的钩子                                        | (file: FileItem, files: FileItem[]) => void                              |        | 否   |
| on-success       | 文件上传成功时的钩子                                            | (response: any, uploadFile: FileItem, uploadFiles: FileItem[]) => void   |        | 否   |
| on-error         | 文件上传失败时的钩子                                            | (error: Error, uploadFile: FileItem, uploadFiles: FileItem[]) => void    |        | 否   |
| on-progress      | 文件上传时的钩子                                                | (percent: number, uploadFile: FileItem, uploadFiles: FileItem[]) => void |        | 否   |

### 插槽

| 名称    | 描述                 |
| ------- | -------------------- |
| trigger | 触发文件选择框的内容 |
| tip     | 提示说明文字         |
