<template>
    <label
        class="kl-radio"
        :class="{
            'is-checked': attribute.checked,
            'is-disabled': attribute.disabled,
            'is-border': attribute.border
        }"
    >
        <span class="kl-radio_input">
            <span class="kl-radio_inner"></span>
            <input
                type="radio"
                :disabled="attribute.disabled"
                class="kl-radio_original"
                :name="name"
                :value="value"
                v-model="model"
            />
        </span>
        <span class="kl-radio_label">
            <slot></slot>
            <!-- 如果没有插槽，就把label或value作为文本显示 -->
            <template v-if="!$slots.default">{{ label ? label : value }}</template>
        </span>
    </label>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { computed, inject } from 'vue'
import './radio.scss'

defineOptions({
    name: 'KlRadio'
})

const props = defineProps({
    modelValue: [String, Number, Boolean],
    label: {
        type: String,
        default: ''
    },
    value: {
        type: [String, Number, Boolean]
    },
    name: {
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

// 组件状态管理
const attribute = computed(() => {
    return {
        checked: props.value === model.value,
        disabled: props.disabled || (group ? group.disabled : null),
        border: props.border || (group ? group.border : null)
    }
})

const emit = defineEmits(['update:modelValue'])

const group = inject('is-group', null) as unknown as {
    getModelValue: Function
    'update:modelValue': Function
    disabled: Boolean
    border: Boolean
}

// 数据绑定
const model = computed({
    get: () => {
        return group ? group.getModelValue() : props.modelValue
    },
    set: val => {
        if (group) {
            group['update:modelValue'](val)
        } else {
            emit('update:modelValue', val)
        }
    }
})

const { n } = createNamespace('radio')
</script>
