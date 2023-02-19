<template>
    <li class="kl-option" @click="saveValue" :class="[{ 'is-disabled': disabled }, size]">
        <span v-if="!label && slotDefault">
            <slot></slot>
        </span>
        <span v-else>{{ label ? label : value }}</span>
    </li>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { inject, useSlots } from 'vue'
defineOptions({
    name: 'KlOption'
})

const slotDefault = !!useSlots().default

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

// 修改数据
const saveValue = (event: { target: { innerText: String } }) => {
    if (props.disabled) return
    handleValue(props.value, event.target.innerText)
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
