<template>
    <label
        class="kl-checkbox"
        :class="{
            'is-checked': attribute.checked,
            'is-disabled': attribute.disabled,
            'is-border': attribute.border
        }"
    >
        <span class="kl-checkbox_input">
            <span class="kl-checkbox_inner"></span>
            <input
                type="checkbox"
                :disabled="attribute.disabled"
                class="kl-checkbox_original"
                :id="value"
                :name="name"
                :value="value"
                v-model="model"
            />
        </span>
        <span class="kl-checkbox_label">
            <slot></slot>
            <!-- 如果没有插槽，就把label或value作为文本显示 -->
            <template v-if="!$slots.default">{{ label ? label : value }}</template>
        </span>
    </label>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { computed, inject } from 'vue'
import './checkbox.scss'

defineOptions({
    name: 'KlCheckbox'
})

const props = defineProps({
    modelValue: [String, Number, Boolean],
    label: {
        type: String,
        default: ''
    },
    value: {
        type: [String, Number, Boolean],
        default: true
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

// 组件状态
const attribute = computed(() => {
    return {
        checked: isChecked(),
        disabled: props.disabled || (group ? group.disabled : false),
        border: props.border || (group ? group.border : false)
    }
})

// 是否选中
const isChecked = () => {
    if (group) {
        return model.value.find((item: string | number | boolean) => props.value === item)
    } else {
        return props.value === model.value
    }
}

const emit = defineEmits(['update:modelValue'])

// 注入数据
const group = inject('is-group', null) as unknown as {
    getModelValue: Function
    'update:modelValue': Function
    disabled: Boolean
    border: Boolean
}

// 绑定的数据
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

const { n } = createNamespace('checkbox')
</script>
