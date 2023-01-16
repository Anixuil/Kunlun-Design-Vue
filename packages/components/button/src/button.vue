<template>
    <button
        :class="[
            n(),
            type && n(`--${type}`),
            size && n(`--${size}`),
            round && 'kl-round',
            plain && 'kl-plain',
            circle && 'kl-circle'
        ]"
        :style="{
            color: textColor,
            ...style
        }"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { ButtonProps, typevalidator } from './button'
import { createNamespace } from '@kunlun-design/utils'
import { computed } from 'vue'
import './button.scss'

const props = defineProps(ButtonProps)
const style = computed(() => {
    return props.color
        ? {
              '--kl-button-bg-color': props.color,
              '--kl-button-text-color': 'var(--kl-text-color-white)'
          }
        : {}
})

//检测type是否符合规范
const type = computed(() => {
    //首先验证的函数不允许是undefined 只允许string类型 如果类型非法就转换到默认类型
    if (props.type === undefined) return 'default'
    return typevalidator(props.type) ? props.type : 'default'
})

defineOptions({
    name: 'KlButton'
})

const { n } = createNamespace('button')
</script>

<style scoped lang="scss"></style>
