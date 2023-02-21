<template>
    <div
        :class="['picker-input', { 'picker-input-selected': isShow }]"
        :style="{ width: isDateTime ? '220px' : '156px' }"
    >
        <input
            type="text"
            :value="timeValue"
            @input="changeInputHandle"
            :placeholder="placeholder || transformLang(placeholderDefault)"
        />
        <span @click="handleIconClick">
            <svg v-show="!isShow" viewBox="0 0 1024 1024" fill="currentColor">
                <path
                    d="M950.86 969.14H73.14c-34.57 0-62.69-28.12-62.69-62.69V237.71c0-34.57 28.12-62.69 62.69-62.69h877.71c34.57 0 62.69 28.12 62.69 62.69v668.73c0.01 34.58-28.11 62.7-62.68 62.7zM73.14 216.82c-11.52 0-20.9 9.37-20.9 20.9v668.73c0 11.53 9.38 20.9 20.9 20.9h877.71c11.52 0 20.9-9.37 20.9-20.9V237.71c0-11.53-9.38-20.9-20.9-20.9H73.14z"
                ></path>
                <path
                    d="M261.22 305.63c-11.54 0-20.9-9.35-20.9-20.9V75.76c0-11.55 9.36-20.9 20.9-20.9s20.9 9.35 20.9 20.9v208.98c0 11.55-9.35 20.89-20.9 20.89zM762.78 305.63c-11.54 0-20.9-9.35-20.9-20.9V75.76c0-11.55 9.36-20.9 20.9-20.9s20.9 9.35 20.9 20.9v208.98c-0.01 11.55-9.36 20.89-20.9 20.89zM626.94 493.71H208.98c-11.54 0-20.9-9.35-20.9-20.9 0-11.55 9.36-20.9 20.9-20.9h417.96c11.54 0 20.9 9.35 20.9 20.9 0 11.56-9.36 20.9-20.9 20.9zM815.02 723.59H208.98c-11.54 0-20.9-9.35-20.9-20.9 0-11.55 9.36-20.9 20.9-20.9h606.04c11.54 0 20.9 9.35 20.9 20.9 0 11.55-9.36 20.9-20.9 20.9z"
                ></path>
            </svg>
            <svg v-show="isShow" viewBox="0 0 1024 1024" fill="currentColor">
                <path
                    d="M544 64C279.04 64 64 279.04 64 544S279.04 1024 544 1024c264.96 0 480-215.04 480-480S808.96 64 544 64zM759.04 758.4c-12.8 12.8-33.28 12.8-45.44 0L542.08 585.6l-174.08 172.16c-12.8 12.8-33.28 12.8-46.08 0-12.8-12.8-12.8-33.28 0-45.44l174.72-172.8L331.52 374.4c-12.8-12.8-12.8-33.28 0-45.44 12.8-12.8 33.28-12.8 45.44 0l165.12 165.76 167.68-165.76c12.8-12.8 33.28-12.8 46.08 0 12.8 12.8 12.8 33.28 0 45.44l-168.32 166.4 170.88 172.16C771.2 725.12 771.2 745.6 759.04 758.4z"
                ></path>
            </svg>
        </span>
    </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { ch2en } from '../utils'

/**
 * --------------------类型定义--------------------
 */
export interface IPropsType {
    placeholder?: string
    picker: 'date' | 'month' | 'year'
    timeValue: string
    isShow: boolean
    isDateTime: boolean
}
/**
 * --------------------组件通信--------------------
 */
const props = defineProps<IPropsType>()
const emit = defineEmits<{
    (e: 'inputChange', value: string): void
    (e: 'inputClear'): void
}>()

// 语言
const lang = inject<'ch' | 'en'>('lang') as 'ch' | 'en'

/**
 * --------------------组件状态--------------------
 */
const placeholderDefault = computed(() => {
    switch (props.picker) {
        case 'date':
            return '请选择日期'
        case 'month':
            return '请选择月份'
        case 'year':
            return '请选择年份'
        default:
            return '???'
    }
})

/**
 * --------------------功能函数--------------------
 */
// 语言转换
const transformLang = (value: string) => {
    if (lang === 'en') {
        return ch2en(value)
    } else {
        return value
    }
}

/**
 * --------------------事件处理--------------------
 */
const changeInputHandle = (e: Event) => {
    emit('inputChange', (<HTMLInputElement>e.target).value)
}

const handleIconClick = (e: Event) => {
    // 阻止冒泡
    e.stopPropagation()
    if (props.isShow) {
        emit('inputClear')
    }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/common.scss';
.picker-input {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 156px;
    height: 32px;
    line-height: 22px;
    padding: 4px 11px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    font-size: 14px;
    transition: 0.2s;

    &:hover {
        /* border-color: #4096ff; */
        border-color: $theme-color;
    }

    & > input {
        outline: none;
        border: none;
        padding: 0;
        vertical-align: bottom;
        box-sizing: border-box;
        width: 114px;
        flex: 1;
        height: 22px;

        &::-webkit-input-placeholder {
            color: #bfbfbf;
        }
        &:-moz-placeholder {
            color: #bfbfbf;
        }
        &:-ms-input-placeholder {
            color: #bfbfbf;
        }
    }

    span {
        transform: translateY(-1.5px);
        width: 14px;
        height: 14px;
        margin-left: 4px;
        color: #bfbfbf;
        cursor: pointer;
        user-select: none;

        &:hover {
            color: #aeaeae;
        }
    }
}

/* input框选中样式 */
.picker-input-selected {
    /* border-color: #4096ff; */
    border-color: $theme-color;
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
    outline: 0;
}
</style>
