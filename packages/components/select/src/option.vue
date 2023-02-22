<template>
    <li
        class="kl-option"
        @click="saveValue"
        :class="[{ 'is-disabled': disabled, 'is-checked': props.value === getValue() }, size]"
    >
        <Component v-if="icon" :is="icon" />
        <template v-else>
            <slot></slot>
            <template v-if="!$slots.default">{{ label ? label : value }}</template>
        </template>
    </li>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { inject, useSlots } from 'vue'
import './option.scss'

defineOptions({
    name: 'KlOption'
})

const props = defineProps({
    value: {
        type: [String, Boolean, Number]
    },
    label: {
        type: String
    },
    disabled: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: ''
    }
})

const handleValue = inject('handleModelValue') as Function

const size = inject('size')
const getValue = inject('getValue')

const slot = useSlots()
// 修改数据
const saveValue = (event: { target: { innerText: String } }) => {
    if (props.disabled) return
    let isIcon = !!props.icon
    handleValue(props.value, {
        isIcon,
        label: isIcon ? props.icon : event.target.innerText
    })
}

const { n } = createNamespace('option')
</script>
