---
layout: doc
---

# 快速开始

本节将介绍如何在项目中使用 **Kunlun Design** 。

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

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

## 按需导入

## 开始使用

您可以从现在起启动您的项目。对于每个组件的用法，请参考单个组件对应的文档。
