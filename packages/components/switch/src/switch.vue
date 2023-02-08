<template>
    <div class="kl-switch" :class="{ 'is-checked': modelValue }" @click="handleClick">
        <span class="kl-switch_core" ref="core" :style="switchColor">
            <span class="kl-switch_button"></span>
        </span>
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { computed, ref } from 'vue'

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
        default: ''
    },
    inactiveColor: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    }
})

const core = ref(null)

// 开关颜色
const switchColor = computed(() => ({
    backgroundColor: props.modelValue ? props.activeColor : props.inactiveColor,
    borderColor: props.modelValue ? props.activeColor : props.inactiveColor
}))

const handleClick = () => {
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
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
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
            width: 16px;
            height: 16px;
            background-color: #fff;
        }
    }
}
// 选中样式
.is-checked {
    .kl-switch_core {
        border-color: #409eff;
        background-color: #409eff;
        .kl-switch_button {
            transform: translateX(20px);
        }
    }
}
</style>
