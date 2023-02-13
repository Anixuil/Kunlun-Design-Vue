<template>
    <component
        :is="tag"
        :class="[
            n(),
            wrap && 'kl-wrap',
            'center' === justify && 'kl-justify-center',
            'start' === justify && 'kl-justify-start',
            'end' === justify && 'kl-justify-end',
            'space-between' === justify && 'kl-justify-space-between',
            'space-around' === justify && 'kl-justify-space-around',
            'space-evenly' === justify && 'kl-justify-space-evenly',
            'middle' === align && 'kl-align-middle',
            'bottom' === align && 'kl-align-bottom',
            'top' === align && 'kl-align-top'
        ]"
        :style="gutterStyle"
    >
        <slot />
    </component>
</template>
<script lang="ts">
export default {
    name: 'kl-row'
}
</script>
<script setup lang="ts">
import { rowProps } from './row'
import { defineProps, computed, CSSProperties, provide } from 'vue'
import { createNamespace } from '@kunlun-design/utils'
import { isArray, isNumber } from 'lodash'
import './row.scss'
const props = defineProps(rowProps)
const { n } = createNamespace('row')
const gutterStyle = computed(() => {
    let value = props.gutter
    let styles: CSSProperties = {} //ts定义为css样式类型
    if (value && isNumber(value)) {
        value = value / 2
        styles.marginLeft = styles.marginRight = `-${value}px`
    } else if (isArray(value) && value.length > 0) {
        styles.marginLeft = styles.marginRight = `-${value[0] / 2}px`
        if (value.length > 1) {
            styles['row-gap'] = `${value[1]}px`
        }
    }
    return styles
})
provide('gutter', props.gutter)
</script>
