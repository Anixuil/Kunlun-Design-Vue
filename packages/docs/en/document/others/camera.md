---
layout: doc
lang: en-US
---

# Camera

Controls to control the local camera/microphone and provide shooting and recording functions.

## When to use

In some specific situations, such as in a invigilator system, where you may need to monitor the examinee on the screen in real time, the Camera component may help you.

## Basic usage

The `Camera` component exposes `openCamera` and `closeCamera` methods to open and close the camera, respectively. You need to invoke them through the component's template reference.

-   **`const openCamera: () => Promise<[status: boolean, message: string]>`**
-   **`const closeCamera: () => [status: boolean, message: string]`**

**status indicates the status of the operation, true indicates success, false indicates failure, and message indicates the message text of the operation.**

:::demo
camera/basic
:::

## Photo function

The `Camera` component exposes the `takePhoto` method. By calling this method, you can take a photo.

-   **`const openCamera: () => [status: boolean, message: string]`**

**status indicates the status of the operation, true indicates success, false indicates failure, and message indicates the message text of the operation. If status is true, message is the base64 data of the photo.**

:::demo
camera/photo
:::

## Recording function

The `Camera` component exposes the `startRecord`, `pauseRecord`, `resumeRecord` and `stopRecord` methods externally, with functions of start recording, pause recording, continue recording and end recording respectively. You can get the current recording status through the `Camera` component's exposed `recorderState` property, which has three values: `inactive` means not recording, `recording` means recording, and `paused` means paused.

-   **`const startRecord: () => [status: boolean, message: string]`**
-   **`const pauseRecord: () => [status: boolean, message: string]`**
-   **`const resumeRecord: () => [status: boolean, message: string]`**
-   **`const stopRecord: () => [status: boolean, message: string | Blob]`**

:::demo
camera/record
:::

## API

### Attribute

| name             | description                          | type    | default value | required |
| ---------------- | ------------------------------------ | ------- | ------------- | -------- |
| width            | Component width                      | number  | 320           | 否       |
| height           | Component height                     | number  | 180           | 否       |
| background-color | Component background color           | string  | #000          | 否       |
| audio            | Add audio tracks to the media stream | boolean | false         | 否       |

### Event

| name            | description                                         | callback function        |
| --------------- | --------------------------------------------------- | ------------------------ |
| start-record    | Triggered when recording starts                     | (): void                 |
| pause-record    | Triggered when recording is paused                  | (): void                 |
| resume-record   | Triggered when recording continues                  | (): void                 |
| stop-record     | Triggered when recording ends                       | (): void                 |
| error-record    | Triggered when recording errors occur               | (): void                 |
| progress-record | Trigger during recording (about 100ms trigger once) | (event: BlobEvent): void |

### Function provision

| name          | description              | type                                            |
| ------------- | ------------------------ | ----------------------------------------------- |
| openCamera    | Start the camera         | `() => [status: boolean, message: string]`      |
| closeCamera   | Turn off the camera      | `() => [status: boolean, message: string]`      |
| takePhoto     | Take pictures            | `() => [status: boolean, message: string]`      |
| startRecord   | Start recording          | `() => [status: boolean, message: string]`      |
| pauseRecord   | Pause recording          | `() => [status: boolean, message: string]`      |
| resumeRecord  | Continue recording       | `() => [status: boolean, message: string]`      |
| stopRecord    | Stop recording           | `() => [status: boolean, message: string/Blob]` |
| recorderState | Current recording status | `inactive/recording/paused`                     |
