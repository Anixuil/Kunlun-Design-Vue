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
import { computed, inject, onMounted } from 'vue'

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

const attribute = computed(() => {
    return {
        checked: isChecked(),
        disabled: props.disabled || (group ? group.disabled : false),
        border: props.border || (group ? group.border : false)
    }
})

const isChecked = () => {
    if (group) {
        return model.value.find((item: string | number | boolean) => props.value === item)
    } else {
        return props.value === model.value
    }
}

const emit = defineEmits(['update:modelValue'])
const group = inject('is-group', null) as unknown as {
    getModelValue: Function
    'update:modelValue': Function
    disabled: Boolean
    border: Boolean
}

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

<style scoped lang="scss">
.kl-checkbox {
    color: #606266;
    border: none;
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
    .kl-checkbox_input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
        .kl-checkbox_inner {
            border: 1px solid #dcdfe6;
            border-radius: 2px;
            box-sizing: border-box;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;
            &:after {
                box-sizing: content-box;
                content: '';
                border: 1px solid #ffffff;
                border-left: 0;
                border-top: 0;
                height: 7px;
                left: 4px;
                position: absolute;
                top: 1px;
                transform: rotate(45deg) scaleY(0);
                width: 3px;
                transition: transform 0.15s ease-in 0.05s;
                transform-origin: center;
            }
        }
        .kl-checkbox_original {
            opacity: 0;
            outline: none;
            position: absolute;
            left: 10px;
            margin: 0;
            width: 0;
            height: 0;
            z-index: -1;
        }
    }
    .kl-checkbox_label {
        display: inline-block;
        padding-left: 10px;
        line-height: 19px;
        font-size: 14px;
    }
}
// 选中的样式
.kl-checkbox.is-checked {
    .kl-checkbox_input {
        .kl-checkbox_inner {
            background-color: #409eff;
            border-color: #409eff;
        }
        &:after {
            transform: rotate(45deg) scaleY(1);
        }
    }
    .kl-checkbox_label {
        color: #409eff;
    }
}

.is-border {
    border: 1px solid #9ea3a7;
    padding: 0 12px 0 10px;
}

// 禁用样式
.is-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    .kl-checkbox_input {
        .kl-checkbox_inner {
            cursor: not-allowed;
        }
    }
}
</style>
