<template>
    <li
        class="kl-option"
        @click="saveValue"
        :class="[{ 'is-disabled': disabled, 'is-checked': props.value === getValue() }, size]"
    >
        <slot></slot>
        <template v-if="!$slots.default">{{ label ? label : value }}</template>
    </li>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { inject, ref, useSlots } from 'vue'
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
    }
})

const handleValue = inject('handleModelValue') as Function

const size = inject('size')
const getValue = inject('getValue')

const slot = useSlots()
// 修改数据
const saveValue = (event: { target: { innerText: String } }) => {
    if (props.disabled) return
    let isIcon = slot.default()[0].type.name ? true : false
    handleValue(props.value, {
        isIcon,
        label: isIcon ? slot.default()[0].type.name : event.target.innerText
    })
}

const { n } = createNamespace('option')
</script>

<style lang="scss" scoped>
li {
    padding: 0 16px;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        border: 1px solid #409eff;
    }
    &.is-disabled {
        background-color: #e7effc;
        border-color: #e7effc;
        color: #c0c4cc;
        cursor: not-allowed;
    }
}
.is-checked {
    color: #409eff;
}
.default {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
}
.large {
    height: 55px;
    line-height: 55px;
    font-size: 16px;
}
.small {
    height: 33px;
    line-height: 33px;
    font-size: 12px;
}
</style>
