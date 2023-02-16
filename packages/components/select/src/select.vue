<template>
    <!-- 下拉框 -->
    <div class="kl-select" :class="{ 'is-disabled': disabled }">
        <div ref="select_button" class="kl-select-button" @click="selectOpen = !selectOpen">
            <!-- 选中内容 -->
            <span v-if="label">{{ label }}</span>
            <span class="placeholder" v-else>{{
                placeholder ? placeholder : 'Please enter a keyword'
            }}</span>
            <div class="select-icon" :class="{ selectOpen: selectOpen }">
                <KlSystemPullDown />
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

defineOptions({
    name: 'KlSelect'
})

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        required: false,
        default: ''
    },
    multiple: {
        type: Boolean,
        required: false,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const label = ref('')

provide('handleModelValue', (val: any, lab: any) => {
    emit('update:modelValue', val)
    label.value = lab
    selectOpen.value = false
})

const selectOpen = ref(false)

const select_button = ref()

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

<style scoped lang="scss">
.kl-select {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    cursor: pointer;
    .kl-select-button {
        background-color: #fff;
        background-image: none;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        height: 40px;
        padding: 0 16px;
        font-size: 14px;
        font-weight: 500;
        line-height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .placeholder {
            color: #ccc;
        }
        &:hover {
            outline: none;
            border-color: #409eff;
        }
    }

    .kl-select-button span {
        font-weight: 500;
        user-select: none;
    }

    // icon
    .select-icon {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: #e6e8ec 2px solid;
        transition: all 0.2s;
    }

    .select-icon.selectOpen {
        transform: rotate(180deg);
    }

    // 下拉框
    .kl-select-dropdown {
        position: fixed;
        background-color: #fcfcfd;
    }

    .kl-select-dropdown ul {
        overflow: hidden;
        border-radius: 5px;
        border: #e6e8ec 2px solid;
        box-shadow: 0 4px 12px rgba(35, 38, 47, 0.1);
    }

    .select-enter-from,
    .select-leave-to {
        opacity: 0;
        transform: scale(0.9);
    }

    .select-enter-active,
    .select-leave-active {
        transform-origin: top center;
        transition: opacity 0.4s cubic-bezier(0.5, 0, 0, 1.25),
            transform 0.2s cubic-bezier(0.5, 0, 0, 1.25);
    }
    // 是否禁用
    &.is-disabled {
        background-color: #e7effc;
        border-color: #e7effc;
        color: #c0c4cc;
        cursor: not-allowed;
        .kl-select-button {
            pointer-events: none;
        }
    }
}
</style>
