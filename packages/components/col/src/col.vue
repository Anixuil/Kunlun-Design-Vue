<template>
    <component :is="tag" :class="colClass" :style="colStyle">
        <slot />
    </component>
</template>
<script lang="ts">
export default {
    name: 'kl-col'
}
</script>
<script setup lang="ts">
import { colProps } from './col'
import { defineProps, computed, inject, CSSProperties } from 'vue'
import { createNamespace } from '@kunlun-design/utils'
import { isArray, isNumber } from 'lodash'
import './col.scss'
const props = defineProps(colProps)
const { n } = createNamespace('col') //命名
const gutter: any = inject('gutter', 0) //从row中接收gutter，0是默认值
//主要是处理传入的gutter
const colStyle = computed(() => {
    const styles: CSSProperties = {}
    if (gutter && isNumber(gutter)) {
        styles.paddingLeft = styles.paddingRight = `${gutter / 2}px`
    } else if (isArray(gutter)) {
        styles.paddingLeft = styles.paddingRight = `${gutter[0] / 2}px`
    }
    return styles
})
//col按照props生成class
const colClass = computed(() => {
    const classes: string[] = [] //先定义一个[]存储classes
    //
    const key = ['span', 'offset', 'pull', 'push', 'xs', 'sm', 'md', 'lg', 'xl', 'order'] as const
    key.forEach(prop => {
        const value = props[prop] //得到值
        if (isNumber(value)) {
            //先判断传入的值是number
            if (prop === 'span') {
                classes.push(n(`--${value}`))
            } else if (value > 0) {
                classes.push(n(`--${prop}-${value}`))
            }
            //以下几个可能是object,写法是
        } else if (
            (prop === 'xs' || prop === 'sm' || prop === 'md' || prop === 'lg' || prop === 'xl') &&
            Object.prototype.hasOwnProperty.call(prop, 'order')
        ) {
            classes.push(n(`--${prop}-order-${prop[<any>'order']}`))
        }
    })
    return [n(), gutter && 'kl-guttered', classes]
})
</script>
