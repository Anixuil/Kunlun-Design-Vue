---
layout: doc
---

# Fast start

This section describes how to use **Kunlun Design** in a project.

## Usage

### Complete introduction

If you don't care about the size of the packaged file, it's easier to use a full import.

```ts
//main.ts
import { createApp } from 'vue'
import KunlunDesign from 'kunlun-design'
import 'kunlun-design/lib/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(KunlunDesign)
app.mount('#app')
```

## Import on demand

```ts
//main.ts
import 'kunlun-design/lib/style.css'
```

```vue
//component.vue
<template>
    <kl-button @click="handleClick">default</kl-button>
</template>
<script lang="ts" setup>
import { KlButton, KlMessage } from 'kunlun-design'
const handleClick = () => {
    KlMessage.success('test success')
}
</script>
```

## Come into use

You can start your project now. For usage of each component, refer to the documentation for the individual component.
