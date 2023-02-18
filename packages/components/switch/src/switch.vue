<template>
    <div
        class="kl-switch"
        :class="{ 'is-checked': modelValue === activeValue }"
        @click="handleClick"
    >
        <Component
            class="kl-switch-inactiveIcon"
            v-if="inactiveIcon"
            :size="textStyle.fontSize"
            :is="inactiveIcon"
        />
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
        <Component
            class="kl-switch-activeIcon"
            v-if="activeIcon"
            :size="textStyle.fontSize"
            :is="activeIcon"
        />
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
import { computed, onMounted } from 'vue'
import './switch.scss'

defineOptions({
    name: 'KlSwitch'
})

const emit = defineEmits(['update:modelValue', 'change'])

const props = defineProps({
    modelValue: {
        type: [Boolean, String, Number]
    },
    activeValue: {
        type: [Boolean, String, Number],
        default: true
    },
    inactiveValue: {
        type: [Boolean, String, Number],
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
    activeIcon: {
        type: String
    },
    inactiveIcon: {
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
    backgroundColor:
        props.modelValue == props.activeValue ? props.activeColor : props.inactiveColor,
    borderColor: props.modelValue == props.activeValue ? props.activeColor : props.inactiveColor
}))

onMounted(() => {
    emit('update:modelValue', props.inactiveValue)
})

// 字体大小
const textStyle = computed(() => {
    let size
    let lineHeight
    switch (props.size) {
        case 'small':
            size = 14
            lineHeight = '20px'
            break
        case 'large':
            size = 18
            lineHeight = '30px'
            break
        case 'default':
            size = 16
            lineHeight = '25px'
            break
    }
    return { lineHeight, fontSize: `${size}px` }
})

// 修改数据
const handleClick = () => {
    if (props.disabled) return
    let val = props.modelValue === props.activeValue ? props.inactiveValue : props.activeValue
    emit('update:modelValue', val)
    emit('change', val)
}

const { n } = createNamespace('switch')
</script>
