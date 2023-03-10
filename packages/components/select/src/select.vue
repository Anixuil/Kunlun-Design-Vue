<template>
    <!-- 下拉框 -->
    <div class="kl-select" :class="{ 'is-disabled': disabled }">
        <div
            ref="select_button"
            class="kl-select-button"
            :class="size"
            @click.stop="selectOpen = !selectOpen"
        >
            <!-- 选中内容 -->
            <template v-if="label">
                <Component v-if="isIcon" :is="label" />
                <template v-else>
                    {{ label }}
                </template>
            </template>
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
import { computed, onBeforeUnmount, onMounted, provide, ref, watch } from 'vue'
import './select.scss'

defineOptions({
    name: 'KlSelect'
})

const emit = defineEmits(['update:modelValue', 'change', 'clear'])

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

// select选框显示
const label = ref<String>('')
const isIcon = ref<Boolean>(false)

const icon = ref('KlSystemPullDown')

provide('handleModelValue', (val: any, lab: { isIcon: Boolean; label: String }) => {
    emit('update:modelValue', val)
    emit('change', val)
    label.value = lab.label
    isIcon.value = lab.isIcon
    selectOpen.value = false
})

provide('size', props.size)

provide('getValue', () => props.modelValue)

const selectOpen = ref(false)

const select_button = ref()

// 清空选项
const clearValue = () => {
    emit('update:modelValue', null)
    emit('clear')
    label.value = ''
}

// 下拉框是否打开
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

// 计算下拉框位置
const calculateLocation = () => {
    let select_button_dom = select_button.value.getBoundingClientRect()
    dropdownPosition.value.w = select_button_dom.width
    dropdownPosition.value.x = select_button_dom.left
    dropdownPosition.value.y = select_button_dom.top + select_button_dom.height + 5
}

// 下拉框失焦时消失
const showDrop = () => {
    if (selectOpen.value) {
        selectOpen.value = false
    }
}

// 浏览器页面滚动时重新计算下拉框位置
const handleScroll = () => {
    calculateLocation()
}

onMounted(() => {
    document.body.addEventListener('click', showDrop)
    document.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    document.body.removeEventListener('click', showDrop)
    document.removeEventListener('scroll', handleScroll)
})

const { n } = createNamespace('select')
</script>
