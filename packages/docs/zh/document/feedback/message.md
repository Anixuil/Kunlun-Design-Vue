---
layout: doc
lang: zh-CN
---

# Message 消息提示

常用于主动操作后的反馈提示。与 **Notification** 的区别是后者更多用于系统级通知的被动提醒。

## 基础用法

从顶部出现，3 秒后自动消失。

**Message** 在配置上与 **Notifications** 非常相似，所以部分 options 在此不做详尽解释。

:::demo
feedback/message-normal
:::

## 不同状态

用来显示 [成功、警告、消息、错误]类的操作反馈。
当需要自定义更多属性时，Message 也可以接口一个对象为参数。
