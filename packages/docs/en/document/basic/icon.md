---
layout: doc
lang: en-US
---

<script setup>
import icon from "../../../examples/icon/index.vue"
</script>

# Icon

Kunlun Design provides a set of common icons.

## Install

To use icons, you need to install the `@kl-design/icons` icon package:

```shell
# Choose a package manager you like

# NPM
$ npm install @kl-design/icons
# Yarn
$ yarn add @kl-design/icons
# Pnpm
$ pnpm install @kl-design/icons
```

## Register all icons

You need to import all the icons from `@kl-design/icons` and globally register them:

```typescript
// main.ts

import * as KlIconCpns from '@kl-design/icons'
import '@kl-design/icons/style.css'

const app = createApp(App)
for (const [key, component] of Object.entries(KlIconCpns)) {
    app.component(key, component)
}
```

Once this is done, you can use the icon as a use case anywhere in your project.

## Basic usage

Customize the color and size of the icon by setting the `color` and `size` properties.

:::demo
icon/basic
:::

**Note: The unit of the `size` property is px. When you specify the `size` property, it sets the width and height of the icon to the size. If the `size` attribute is not set, the width and height of the icon default to `1.5em`.**

## Customize icon styles through classes

Set the `className` property to customize the icon style.

:::demo
icon/class
:::

**Note: The 'size' and 'color' attributes have higher precedence than the 'className' attributes.**

## Icon set

Click on the icon and copy and paste with one click.

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

| Attribute name | description                 | type          | Default value   |
| -------------- | --------------------------- | ------------- | --------------- |
| color          | Icon component color        | string        | Inherited color |
| size           | Icon component size         | number/string | 1.5em           |
| className      | class of the icon component | string        | none            |

### [Source code](https://github.com/liliangCS/kunlun-design-icons)
