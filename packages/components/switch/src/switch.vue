<template>
    <div class="kl-switch" :class="{ 'is-checked': modelValue }" @click="handleClick">
        <span
            class="kl-switch_core"
            :class="[{ 'is-disabled': disabled }, size]"
            :style="switchColor"
        >
            <span class="kl-switch_button"></span>
        </span>
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { computed } from 'vue'

defineOptions({
    name: 'KlSwitch'
})

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    activeColor: {
        type: String,
        default: '#409eff'
    },
    inactiveColor: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: 'default'
    }
})

// 开关颜色
const switchColor = computed(() => ({
    backgroundColor: props.modelValue ? props.activeColor : props.inactiveColor,
    borderColor: props.modelValue ? props.activeColor : props.inactiveColor
}))

const handleClick = () => {
    if (props.disabled) return
    emit('update:modelValue', !props.modelValue)
}

const { n } = createNamespace('switch')
</script>

<style scoped lang="scss">
.kl-switch {
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
    .kl-switch_core {
        margin: 0;
        display: inline-block;
        position: relative;
        border: 1px solid #dcdfe6;
        outline: none;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color 0.3s, background-color 0.3s;
        vertical-align: middle;
        .kl-switch_button {
            position: absolute;
            top: 1px;
            left: 1px;
            border-radius: 100%;
            transition: all 0.3s;
            background-color: #fff;
        }

        // 是否禁用
        &.is-disabled {
            background-color: #e7effc;
            border-color: #e7effc;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
    .default {
        border-radius: 10px;
        width: 40px;
        height: 20px;
        .kl-switch_button {
            width: 16px;
            height: 16px;
        }
    }
    .large {
        border-radius: 12.5px;
        width: 50px;
        height: 25px;
        .kl-switch_button {
            width: 22px;
            height: 22px;
        }
    }
    .small {
        border-radius: 7.5px;
        width: 30px;
        height: 15px;
        .kl-switch_button {
            width: 11px;
            height: 11px;
        }
    }
    // 选中样式
    &.is-checked {
        .default {
            .kl-switch_button {
                transform: translateX(20px);
            }
        }
        .large {
            .kl-switch_button {
                transform: translateX(25px);
            }
        }
        .small {
            .kl-switch_button {
                transform: translateX(15px);
            }
        }
    }
}
</style>
