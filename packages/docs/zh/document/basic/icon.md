---
layout: doc
lang: zh-CN
---

<script setup>
import icon from "../../../examples/icon/index.vue"
</script>

# Icon 图标

Kunlun Design 提供了一套常用的图标集合。

## 安装

想要使用图标组件，你需要先安装 `@kl-design/icons` 图标组件包：

```shell
# 选择一个你喜欢的包管理器

# NPM
$ npm install @kl-design/icons
# Yarn
$ yarn add @kl-design/icons
# Pnpm
$ pnpm install @kl-design/icons
```

## 注册所有图标

你需要从 `@kl-design/icons` 中导入所有图标并进行全局注册:

```typescript
// main.ts

import * as KlIconCpns from '@kl-design/icons'
import '@kl-design/icons/style.css'

const app = createApp(App)
for (const [key, component] of Object.entries(KlIconCpns)) {
    app.component(key, component)
}
```

完成这一步后，你就可以在项目的任何地方像用例一样使用图标啦。

## 基础用法

通过设置 `color` 和 `size` 属性，自定义图标的颜色和尺寸。

:::demo
icon/basic
:::

**注意：`size` 属性的单位是 px，当你指定`size`属性时，会将图标的宽度和高度都设置为`size`大小。若不设置`size`属性，图标的宽度和高度默认为 `1.5em`。**

## 通过类自定义图标样式

设置`className`属性，自定义图标样式。

:::demo
icon/class
:::

**注意：`size` 和 `color` 属性的优先级大于 `className` 属性。**

## 图标集合

点击图标，一键复制粘贴。

<icon type="KlLogo"></icon>
<icon type="KlArrow"></icon>
<icon type="KlDocument"></icon>
<icon type="KlSystem"></icon>
<icon type="KlMedia"></icon>
<icon type="KlSport"></icon>
<icon type="KlFood"></icon>
<icon type="KlWeather"></icon>
<icon type="KlTraffic"></icon>
<icon type="KlOther"></icon>

## API

### Attributes

| 属性名    | 说明             | 类型          | 默认值   |
| --------- | ---------------- | ------------- | -------- |
| color     | 图标组件颜色     | string        | 继承颜色 |
| size      | 图标组件大小     | number/string | 1.5em    |
| className | 图标组件的 class | string        | 无       |

### [源代码](https://github.com/liliangCS/kunlun-design-icons)
