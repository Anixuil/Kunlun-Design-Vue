<template>
    <main :class="[n()]">
        <slot />
    </main>
</template>
<script lang="ts">
export default {
    name: 'kl-main'
}
</script>
<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import './styles/main.scss'
const { n } = createNamespace('main') //命名
</script>
<style></style>
