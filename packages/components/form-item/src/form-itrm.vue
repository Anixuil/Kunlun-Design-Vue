<template>
    <div class="kl-form-item">
        <label :style="{ width: labelWidth }" class="kl-form-item_label">{{ label }}</label>
        <div class="kl-form-item_content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { inject } from 'vue'

defineOptions({
    name: 'KlFormItem'
})

const props = defineProps({
    label: {
        type: String,
        default: ''
    }
})

const labelWidth = inject<String>('labelWidth')

const { n } = createNamespace('form-item')
</script>

<style scoped lang="scss">
.kl-form-item {
    margin-bottom: 25px;

    .kl-form-item_label {
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box;
    }

    .kl-form-item_content {
        line-height: 40px;
        position: relative;
        font-size: 14px;
        overflow: hidden;
    }
}
</style>
