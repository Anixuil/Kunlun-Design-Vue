<template>
    <!-- 下拉框 -->
    <div class="kl-select" :class="{ 'is-disabled': disabled }">
        <div
            ref="select_button"
            class="kl-select-button"
            :class="size"
            @click="selectOpen = !selectOpen"
        >
            <!-- 选中内容 -->
            <span v-if="label">{{ label }}</span>
            <span class="placeholder" v-else>{{
                placeholder ? placeholder : 'Please enter a keyword'
            }}</span>
            <div class="select-icon" :class="{ selectOpen: selectOpen && !clearable }">
                <Component
                    v-if="clearable"
                    @mousemove="icon = 'KlOtherError'"
                    @mouseleave="icon = 'KlSystemPullDown'"
                    :is="icon"
                    @click.stop="clearValue"
                />
                <KlSystemPullDown v-else />
            </div>
        </div>
        <!-- 下拉框 -->
        <transition name="select">
            <div
                ref="select_dropdown"
                v-show="selectOpen"
                :style="dropdownStyle"
                class="kl-select-dropdown"
            >
                <ul>
                    <slot></slot>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { KlSystemPullDown } from '@kl-design/icons'
import { computed, provide, ref, watch } from 'vue'
import './select.scss'

defineOptions({
    name: 'KlSelect'
})

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
    modelValue: {
        type: [String, Boolean, Number],
        default: ''
    },
    placeholder: {
        type: String,
        required: false,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: 'default'
    },
    clearable: {
        type: Boolean,
        default: false
    }
})

const label = ref('')

const icon = ref('KlSystemPullDown')

provide('handleModelValue', (val: any, lab: any) => {
    emit('update:modelValue', val)
    label.value = lab
    selectOpen.value = false
})

provide('size', props.size)

const selectOpen = ref(false)

const select_button = ref()

// 清空选项
const clearValue = () => {
    emit('update:modelValue', null)
    label.value = ''
}

watch(selectOpen, val => {
    if (val)
        // 计算位置
        calculateLocation()
})

// 下拉框位置
const dropdownPosition = ref({ x: 0, y: 0, w: 0 })
const dropdownStyle = computed(() => {
    return {
        left: `${dropdownPosition.value.x}px`,
        top: `${dropdownPosition.value.y}px`,
        width: `${dropdownPosition.value.w}px`,
        zIndex: 999
    }
})

// 计算位置
const calculateLocation = () => {
    let select_button_dom = select_button.value.getBoundingClientRect()
    dropdownPosition.value.w = select_button_dom.width
    dropdownPosition.value.x = select_button_dom.left
    dropdownPosition.value.y = select_button_dom.top + select_button_dom.height + 5
}

const { n } = createNamespace('select')
</script>
