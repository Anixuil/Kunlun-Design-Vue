<template>
    <div class="one-radio-group">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { provide } from 'vue'

defineOptions({
    name: 'KlRadioGroup'
})

const emit = defineEmits(['update:modelValue', 'change'])

const props = defineProps({
    modelValue: {
        type: [String, Number, Boolean]
    },
    label: {
        type: String,
        default: ''
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

provide('model', {
    getModelValue: () => props.modelValue,
    'update:modelValue': (val: any) => {
        emit('update:modelValue', val)
        emit('change', val)
    },
    disabled: props.disabled,
    border: props.border
})

const { n } = createNamespace('radio-group')
</script>
