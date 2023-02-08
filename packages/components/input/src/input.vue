<template>
    <div v-if="type !== 'textarea'" class="kl-input" :class="{ 'kl-input_suffix': showSuffix }">
        <input
            class="kl-input_inner"
            :class="{ 'is-disabled': disabled }"
            :placeholder="placeholder"
            :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
            :name="name"
            :value="modelValue"
            @input="handleInput"
            :disabled="disabled"
        />
        <span class="kl-input_suffix">
            <i class="on-input_icon kl-icon-cancel" v-if="clearable && modelValue" @click="clear"
                >X</i
            >
            <i
                class="on-input_icon kl-icon-visible"
                v-if="showPassword && type === 'password'"
                @click="handlePassword"
                >👀</i
            >
        </span>
    </div>
    <div v-else class="kl-input" :class="{ 'kl-input_suffix': showSuffix }">
        <textarea
            class="kl-textarea_inner"
            :class="{ 'is-disabled': disabled }"
            :placeholder="placeholder"
            :name="name"
            :value="modelValue"
            @input="handleInput"
            :disabled="disabled"
            :rows="rows"
        />
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { computed, ref } from 'vue'

defineOptions({
    name: 'KlInput'
})

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
    placeholder: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    name: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    modelValue: {},
    clearable: {
        type: Boolean,
        default: false
    },
    showPassword: {
        type: Boolean,
        default: false
    },
    rows: {
        type: Number,
        default: 4
    }
})

const showSuffix = computed(() => props.clearable || props.showPassword)

const passwordVisible = ref(false)
const handleInput = (e: { target: { value: any } }) => {
    emit('update:modelValue', e.target.value)
}

const clear = (e: { target: { value: any } }) => {
    emit('update:modelValue', '')
}

const handlePassword = () => {
    passwordVisible.value = !passwordVisible.value
}
const { n } = createNamespace('input')
</script>

<style scoped lang="scss">
.kl-input {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .kl-input_inner {
        -webkit-appearance: none;
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
        // 禁用样式
        &.is-disabled {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
    // textarea样式
    .kl-textarea_inner {
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
        width: 100%;
        &:focus {
            outline: none;
            border-color: #409eff;
        }
        // 禁用样式
        &.is-disabled {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
}
// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.kl-input_suffix {
    .kl-input_inner {
        padding-right: 30px;
    }
    .kl-input_suffix {
        position: absolute;
        right: 10px;
        height: 100%;
        top: 0;
        line-height: 40px;
        text-align: center;
        color: #c0c4cc;
        transition: all 0.3s;
        z-index: 900;
        i {
            color: #c0c4cc;
            font-size: 14px;
            cursor: pointer;
            transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
    }
}
</style>
