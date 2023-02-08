<template>
    <div class="kl-select">
        <select
            class="kl-select_inner"
            :disabled="disabled"
            :placeholder="placeholder"
            :multiple="multiple"
            v-model="t"
        >
            <slot></slot>
        </select>
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { ref, watch } from 'vue'

defineOptions({
    name: 'KlSelect'
})

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        required: false,
        default: ''
    },
    multiple: {
        type: Boolean,
        required: false,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    optionList: Array
})

const t = ref('')

watch(t, value => {
    emit('update:modelValue', value)
})

const { n } = createNamespace('select')
</script>

<style scoped lang="scss">
.kl-select {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .kl-select_inner {
        background-color: #fff;
        background-image: none;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
        width: 100%;
        &:focus {
            outline: none;
            border-color: #409eff;
        }
        // input禁用样式
        &.is-disabled {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
}
</style>
