<template>
    <ul :class="[n()]">
        <slot />
    </ul>
</template>
<script lang="ts">
export default {
    name: 'kl-timeline'
}
</script>
<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { timelineProps } from './type/timeline'
import { provide, defineProps, useSlots } from 'vue'
import './style/timeline.scss'
const { n } = createNamespace('timeline')
const props = defineProps(timelineProps)
const slots = useSlots()
if (props.reverse) {
    if (slots && slots.default) {
        slots.default().reverse()
    }
}
provide('mode', props.mode)
provide('type', props.type)
//mode时间轴位置
//节点倒序
</script>
<style></style>
