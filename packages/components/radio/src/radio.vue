<template>
    <label
        class="kl-radio"
        :class="{
            'is-checked': value === model,
            'is-disabled': disabled || mv.disabled,
            'is-border': border || mv.border
        }"
    >
        <span class="kl-radio_input">
            <span class="kl-radio_inner"></span>
            <input
                type="radio"
                :disabled="disabled || mv.disabled"
                class="kl-radio_original"
                :name="name"
                :value="value"
                v-model="model"
            />
        </span>
        <span class="kl-radio_label">
            <template v-if="label">{{ label }}</template>
            <template v-else>
                <slot></slot>
            </template>
            <!-- 如果没有label,也没有插槽，就把value作为文本显示 -->
            <template v-if="!$slots.default && !label">{{ value }}</template>
        </span>
    </label>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { computed, inject } from 'vue'

defineOptions({
    name: 'KlRadio'
})

const props = defineProps({
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

const mv = inject('model') as {
    getModelValue: Function
    'update:modelValue': Function
    disabled: Boolean
    border: Boolean
}

const model = computed({
    get: () => mv.getModelValue(),
    set: val => {
        mv['update:modelValue'](val)
    }
})

const { n } = createNamespace('radio')
</script>

<style scoped lang="scss">
.kl-radio {
    color: #606266;
    font-weight: 500;
    height: 30px;
    line-height: 30px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    .kl-radio_input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
        .kl-radio_inner {
            border: 1px solid #dcdfe6;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;
            &:after {
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: #fff;
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(0);
                transition: transform 0.15s ease-in;
            }
        }
        .kl-radio_original {
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0px;
            right: 0;
            bottom: 0;
            margin: 0;
        }
    }
    .kl-radio_label {
        font-size: 14px;
        padding-left: 10px;
    }
}

// 选中的样式
.kl-radio.is-checked {
    border-color: #409eff;
    .kl-radio_input {
        .kl-radio_inner {
            border-color: #409eff;
            background-color: #409eff;
            &:after {
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }
    .kl-radio_label {
        color: #409eff;
    }
}

.is-border {
    border: 1px solid #778899;
    padding: 0 12px 0 10px;
}
// 禁用样式
.is-disabled {
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
    .kl-radio_input {
        .kl-radio_inner {
            cursor: not-allowed;
        }
    }
}
</style>
