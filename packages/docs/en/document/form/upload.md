---
layout: doc
lang: en-US
---

# Upload

File select Upload and drag and drop upload controls.

## Basic usage

The user clicks the button and the file selection box pops up. The slot `trigger` is used to pass in the content that triggers the file selection, and the slot `tip` user passes in the prompt.

:::demo
upload/basic
:::

## Limit the number of files to be uploaded

The number of uploaded files is limited by the `limit` attribute, and an `on-exceed` event is triggered when the limit is exceeded.

:::demo
upload/limit
:::

## User profile picture

Limits the format and size of the file that users upload in the `on-before-upload` hook.

:::demo
upload/avatar
:::

## Drag-and-drop upload

Setting the `drag` property to true allows you to drag and drop files to a specific area for uploading.

Slots with a `trigger` name pass a `drag` property, a `boolean` type that determines whether the drag element is in the drag zone. You can customize the drop in style based on this property.

:::demo
upload/drag
:::

## Upload API

### Attribute

| name             | description                                                                                                            | type                                                                     | Default value | required |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------- | -------- |
| files            | File list                                                                                                              | FileItem[]                                                               | []            | yes      |
| name             | The field name of the file to be uploaded must be the same as that of the back-end                                     | string                                                                   | file          | no       |
| action           | Request URL                                                                                                            | string                                                                   |               | yes      |
| method           | Request method                                                                                                         | string                                                                   | post          | no       |
| headers          | Set the request header for upload                                                                                      | Record<string, string>                                                   |               | no       |
| limit            | The maximum number of files that can be uploaded                                                                       | number                                                                   |               | no       |
| multiple         | Whether multiple files are supported                                                                                   | boolean                                                                  | false         | no       |
| show-file-list   | Whether to display the list of uploaded files                                                                          | boolean                                                                  | true          | no       |
| data             | Additional parameters that come with the upload                                                                        | Record<string, any>                                                      |               | no       |
| drag             | Whether to enable drag-and-drop upload                                                                                 | boolean                                                                  | flase         | no       |
| on-exceed        | Hook function to execute when the limit is exceeded                                                                    | (files: FileItem[], uploadFiles: FileItem[]) => void                     |               | no       |
| on-change        | Hooks that are called when the file state changes and when the upload succeeds and fails                               | (uploadFile: FileItem, uploadFiles: FileItem[]) => void                  |               | no       |
| on-before-upload | The hook before the file is uploaded. The parameter is the uploaded file. If false is returned, the upload is canceled | (uploadFile: FileItem) => void                                           |               | no       |
| on-preview       | Click on the hook for the uploaded file in the file list                                                               | (file: FileItem) => void                                                 |               | no       |
| on-before-remove | The hook before the file is removed. If false is returned, the removal is canceled                                     | (file: FileItem, files: FileItem[]) => boolean                           |               | no       |
| on-remove        | File list The hook for removing a file                                                                                 | (file: FileItem, files: FileItem[]) => void                              |               | no       |
| on-success       | The hook when the file is successfully uploaded                                                                        | (response: any, uploadFile: FileItem, uploadFiles: FileItem[]) => void   |               | no       |
| on-error         | The hook for file uploading failure                                                                                    | (error: Error, uploadFile: FileItem, uploadFiles: FileItem[]) => void    |               | no       |
| on-progress      | The hook for file upload                                                                                               | (percent: number, uploadFile: FileItem, uploadFiles: FileItem[]) => void |               | no       |

### 插槽

| name    | description                                     |
| ------- | ----------------------------------------------- |
| trigger | Triggers the contents of the file selection box |
| tip     | Prompt caption                                  |
