<template>
    <section :class="[n(), isVertical && 'kl-vertical']">
        <slot />
    </section>
</template>
<script lang="ts">
export default {
    name: 'kl-layout'
}
</script>
<script setup lang="ts">
import './styles/layout.scss'
import { defineProps, computed } from 'vue'
import { createNamespace } from '@kunlun-design/utils'
const props = defineProps<{
    direction?: string
}>()
const { n } = createNamespace('layout') //命名

//通过计算属性判断props传入的值是不是vertical，如果是就要添加class
const isVertical = computed(() => {
    if (props.direction === 'vertical') {
        return true
    } else if (props.direction === 'horizontal') {
        return false
    } else {
        return false
    }
})
</script>
<style></style>
