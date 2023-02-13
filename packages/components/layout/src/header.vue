<template>
    <header :class="[n()]" :style="{ height }">
        <slot />
    </header>
</template>
<script lang="ts">
export default {
    name: 'kl-header'
}
</script>
<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { defineProps, withDefaults } from 'vue'
import './styles/header.scss'
type Props = {
    height: string
}
withDefaults(defineProps<Props>(), {
    height: '60px'
})
const { n } = createNamespace('header') //命名
</script>
<style></style>
