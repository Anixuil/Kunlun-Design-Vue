<template>
    <div class="kl-switch" :class="{ 'is-checked': modelValue }" @click="handleClick">
        <span
            class="kl-switch-inactive"
            v-if="inactiveText"
            :style="{ ...textStyle, color: !props.modelValue ? '#409eff' : '#000' }"
            >{{ inactiveText }}</span
        >
        <span
            class="kl-switch_core"
            :class="[{ 'is-disabled': disabled }, size]"
            :style="switchColor"
        >
            <span class="kl-switch_button"></span>
        </span>
        <span
            class="kl-switch-active"
            v-if="activeText"
            :style="{ ...textStyle, color: !props.modelValue ? '#000' : '#409eff' }"
            >{{ activeText }}</span
        >
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { computed } from 'vue'
import './switch.scss'

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
    activeText: {
        type: String
    },
    inactiveText: {
        type: String
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

// 字体大小
const textStyle = computed(() => {
    let fontSize
    let lineHeight
    switch (props.size) {
        case 'small':
            fontSize = '14px'
            lineHeight = '20px'
            break
        case 'large':
            fontSize = '18px'
            lineHeight = '30px'
            break
        case 'default':
            fontSize = '16px'
            lineHeight = '25px'
            break
    }
    return { lineHeight, fontSize }
})

const handleClick = () => {
    if (props.disabled) return
    emit('update:modelValue', !props.modelValue)
}

const { n } = createNamespace('switch')
</script>
