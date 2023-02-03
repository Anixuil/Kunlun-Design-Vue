<template>
    <button
        :class="[
            n(),
            type && n(`--${type}`),
            size && n(`--${size}`),
            round && 'kl-round',
            plain && 'kl-plain',
            circle && 'kl-circle',
            disabled && 'kl-disabled',
            link && 'kl-link'
        ]"
        :style="{
            ...style
        }"
    >
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script setup lang="ts">
import { ButtonProps, typevalidator, sizeValidator } from './button'
import { createNamespace } from '@kunlun-design/utils'
import { computed } from 'vue'
import './button.scss'

const props = defineProps(ButtonProps)
const style = computed(() => {
    return props.color || props.textColor
        ? {
              '--kl-bg-color': props.color,
              '--kl-font-color': props.textColor,
              '--kl-border-color': props.color,
              '--kl-border': `var(--kl-border-width) var(--kl-border-style) var(--kl-border-color) var(--kl-border-style)`
          }
        : {}
})

//检测type是否符合规范
const type = computed(() => {
    //首先验证的函数不允许是undefined 只允许string类型 如果类型非法就转换到默认类型
    if (props.type === undefined || props.type === '') return 'default'
    return typevalidator(props.type) ? props.type : 'default'
})

//检测size是否符合规范
const size = computed(() => {
    if (props.size === undefined) return 'normal'
    return sizeValidator(props.size) ? props.size : 'normal'
})

defineOptions({
    name: 'KlButton'
})

const { n } = createNamespace('button')
</script>

<style scoped lang="scss"></style>
