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

<style lang="scss" scoped>
li {
    padding: 0 16px;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        border: 1px solid rgb(103, 194, 58);
    }
    &.is-disabled {
        background-color: #e7effc;
        border-color: #e7effc;
        color: #c0c4cc;
        cursor: not-allowed;
    }
}
.is-checked {
    color: rgb(103, 194, 58);
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
