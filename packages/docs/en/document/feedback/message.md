---
layout: doc
lang: en-US
---

# Message Prompt

It is often used as a feedback prompt after active operations. The difference with **Notification** is that the latter is more of a passive reminder for system-level notifications.

## Basic usage

It appears from the top and disappears after 3 seconds.

**Message** is very similar in configuration to **Notifications**, so some of the options are not explained here.

:::demo
feedback/message/basic
:::

## Different states

Used to display operational feedback for the [Success, Warning, Message, Error] class.

Message can also interface an object as an argument when more properties need to be customized.

For example, setting the `type` field can define different states, defaulting to `info`. The body content is passed in with the value `message`.

We have also registered methods for the various types of Message that can be called without passing the type field.

:::demo
feedback/message/status
:::

## Message prompt that can be turned off

Can be used to add a close button

The default Message cannot be manually closed. If you need to turn the function off manually, you can set `close` to true. Message has a controlled `duration` with a default shutdown time of 3000 ms. Setting this property to `0` means that the message will not be automatically closed.

:::demo
feedback/message/close
:::

## Scrollable message prompt

Can be used to display very long message prompt text content

The default Message does not support text scrolling, and when text goes beyond the message prompt, it is hidden as `...`, you can set `scroll` to true. Message automatically scrolls based on the actual length of the text.

Of course, Message will decide for itself, so even if you set `scroll` to true, as long as the text doesn't exceed the Message box it won't scroll, so Message will run.

With `scroll` set to true, `duration` will be the length of the scroll animation, at which point the text will remain stationary for 2000ms before the scroll begins, 1000ms after the scroll animation ends, and then disappear.

**`Note: Test this feature on Windows with narrow width dimensions, and it is not recommended that the text be too long. Other notification prompt components can be used for long text`**

:::demo
feedback/message/scroll
:::
