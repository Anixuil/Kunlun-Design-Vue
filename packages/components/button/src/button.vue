<template>
    <button
        :class="[n(), type && n(`--${type}`), size && n(`--${size}`)]"
        :style="{
            color: textColor,
            ...style
        }"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { ButtonProps } from './button'
import { createNamespace } from '@kunlun-design/utils'
import { computed } from 'vue'

const props = defineProps(ButtonProps)
const style = computed(() => {
    return props.color
        ? {
              '--kl-button-bg-color': props.color,
              '--kl-button-text-color': 'var(--kl-text-color-white)'
          }
        : {}
})

defineOptions({
    name: 'KunlunButton'
})

const { n } = createNamespace('button')
</script>

<style scoped lang="scss">
@import url('./button.scss');
</style>
