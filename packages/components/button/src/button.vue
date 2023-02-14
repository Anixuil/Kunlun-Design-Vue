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
            link && 'kl-link',
            text && 'kl-text',
            bg && 'kl-bg'
        ]"
        :style="{
            ...style
        }"
    >
        <Component class="button-icon" :is="icon" />
        <span v-if="link" tabindex="0">
            <slot></slot>
        </span>
        <slot v-else></slot>
    </button>
</template>

<script setup lang="ts">
import { ButtonProps } from './button'
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

const type = computed(() => {
    if (props.type === null || props.type === undefined) {
        return 'default'
    }
    return props.type
})

defineOptions({
    name: 'KlButton'
})

const { n } = createNamespace('button')
</script>

<style scoped lang="scss"></style>
