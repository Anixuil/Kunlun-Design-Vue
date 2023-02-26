---
layout: doc
lang: zh-CN
---

# Camera 组件

操控本地摄像头/麦克风，提供拍摄和录制功能的控件。

## 何时使用

在一些特定场景，例如在监考系统中，你可能需要实时监控屏幕前的考生，Camera 组件可能会帮到你。

## 基础用法

`Camera` 组件向外暴露`openCamera`和`closeCamera`方法，分别用来打开摄像头和关闭摄像头。你需要通过组件的模板引用来调用它们。

-   **`const openCamera: () => Promise<[status: boolean, message: string]>`**
-   **`const closeCamera: () => [status: boolean, message: string]`**

**status 代表本次操作的状态，true 表示成功，false 表示失败，message 为本次操作的信息文本。**

:::demo
camera/basic
:::

## 拍照功能

`Camera` 组件向外暴露`takePhoto`方法，通过调用此方法，你可以实现拍照功能。

-   **`const openCamera: () => [status: boolean, message: string]`**

**status 代表本次操作的状态，true 表示成功，false 表示失败，message 为本次操作的信息文本。若 status 为 true，则 message 为照片的 base64 数据。**

:::demo
camera/photo
:::

## 录制功能

`Camera`组件向外暴露了`startRecord`、`pauseRecord`、`resumeRecord`和`stopRecord`方法，功能分别为：开始录制、暂停录制、继续录制和结束录制。你可以通过`Camera`组件暴露的`recorderState`属性拿到当前的录制状态，`recorderState`属性有三个取值，`inactive`代表未录制，`recording`代表正在录制，`paused`代表暂停状态。

-   **`const startRecord: () => [status: boolean, message: string]`**
-   **`const pauseRecord: () => [status: boolean, message: string]`**
-   **`const resumeRecord: () => [status: boolean, message: string]`**
-   **`const stopRecord: () => [status: boolean, message: string | Blob]`**

:::demo
camera/record
:::

## API

### 属性

| 名称             | 描述                 | 类型    | 默认值 | 必填 |
| ---------------- | -------------------- | ------- | ------ | ---- |
| width            | 组件宽度             | number  | 320    | 否   |
| height           | 组件高度             | number  | 180    | 否   |
| background-color | 组件背景色           | string  | #000   | 否   |
| audio            | 为媒体流添加音频轨道 | boolean | false  | 否   |

### 事件

| 名称            | 描述                          | 回调函数                 |
| --------------- | ----------------------------- | ------------------------ |
| start-record    | 开始录制时触发                | (): void                 |
| pause-record    | 暂停录制时触发                | (): void                 |
| resume-record   | 继续录制时触发                | (): void                 |
| stop-record     | 结束录制时触发                | (): void                 |
| error-record    | 录制发生错误时触发            | (): void                 |
| progress-record | 录制时触发(约 100ms 触发一次) | (event: BlobEvent): void |

### 功能提供

| 名称          | 描述         | 类型                                            |
| ------------- | ------------ | ----------------------------------------------- |
| openCamera    | 开启摄像头   | `() => [status: boolean, message: string]`      |
| closeCamera   | 关闭摄像头   | `() => [status: boolean, message: string]`      |
| takePhoto     | 拍照         | `() => [status: boolean, message: string]`      |
| startRecord   | 开始录制     | `() => [status: boolean, message: string]`      |
| pauseRecord   | 暂停录制     | `() => [status: boolean, message: string]`      |
| resumeRecord  | 继续录制     | `() => [status: boolean, message: string]`      |
| stopRecord    | 停止录制     | `() => [status: boolean, message: string/Blob]` |
| recorderState | 当前录制状态 | `inactive/recording/paused`                     |
