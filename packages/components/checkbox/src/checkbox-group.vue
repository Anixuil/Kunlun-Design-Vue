<template>
    <div class="one-checkbox-group">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { provide } from 'vue'

defineOptions({
    name: 'KlCheckboxGroup'
})

const emit = defineEmits(['update:modelValue', 'change'])

const props = defineProps({
    modelValue: {
        type: Array
    },
    disabled: {
        type: Boolean,
        default: false
    },
    border: {
        type: Boolean,
        default: false
    }
})

// 数据注入
provide('is-group', {
    getModelValue: () => props.modelValue,
    'update:modelValue': (val: any) => {
        emit('update:modelValue', val)
        emit('change')
    },
    disabled: props.disabled,
    border: props.border
})

const { n } = createNamespace('checkbox-group')
</script>
