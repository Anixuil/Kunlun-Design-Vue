<template>
    <li class="kl-option" @click="onValue">
        <span v-if="!value && !label">
            <slot></slot>
        </span>
        <span v-else>{{ label ? label : value }}</span>
    </li>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { inject } from 'vue'
defineOptions({
    name: 'KlOption'
})

const props = defineProps({
    value: {
        type: String
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

const onValue = () => {
    handleValue(props.value)
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
}
</style>
