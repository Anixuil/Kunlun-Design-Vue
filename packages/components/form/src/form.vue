<template>
    <div class="kl-form">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { createNamespace } from '@kunlun-design/utils'

defineOptions({
    name: 'KlForm'
})

const props = defineProps({
    model: {
        type: Object,
        required: true
    },
    labelWidth: {
        type: String,
        default: '80px'
    }
})
provide('model', props.model)
provide('labelWidth', props.labelWidth)

const { n } = createNamespace('form')
</script>

<style scoped lang="scss"></style>
