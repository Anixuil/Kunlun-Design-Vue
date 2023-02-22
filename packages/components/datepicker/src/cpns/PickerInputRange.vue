<template>
    <div
        :class="[
            'picker-input-range',
            {
                'picker-input-range-selected': isShow
            },
            {
                'show-date-time': isDateTime
            }
        ]"
    >
        <input
            ref="startInputRef"
            class="start-input"
            type="text"
            :value="rangeTimeValue[0]"
            :placeholder="
                placeholderRange ? placeholderRange[0] : transformLang(placeholderDefault[0])
            "
            @input="changeInputHandle('start')"
            @focus="focusInputHandle('start')"
        />
        <span class="separator">
            <svg viewBox="0 0 1024 1024" fill="currentColor" width="16" height="16">
                <path
                    d="M62.6 806.8L0.1 744.3l232.2-232.2L0.1 279.9l62.5-62.5 294.7 294.7L62.6 806.8z"
                ></path>
                <path
                    d="M729.4 806.8l-62.5-62.5 232.2-232.2-232.2-232.2 62.5-62.5 294.7 294.7-294.7 294.7z"
                ></path>
                <path
                    d="M396 806.8l-62.5-62.5 232.2-232.2-232.2-232.2 62.5-62.5 294.7 294.7L396 806.8z"
                ></path>
            </svg>
        </span>
        <input
            ref="endInputRef"
            class="end-input"
            type="text"
            :value="rangeTimeValue[1]"
            :placeholder="
                placeholderRange ? placeholderRange[1] : transformLang(placeholderDefault[1])
            "
            @input="changeInputHandle('end')"
            @focus="focusInputHandle('end')"
        />
        <span class="suffix" @click="handleIconClick">
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
import { ref, computed, inject } from 'vue'
import { ch2en } from '../utils'

/**
 * --------------------类型定义--------------------
 */
export interface IPropsType {
    placeholder?: string
    picker: 'date' | 'month' | 'year'
    rangeTimeValue: string[]
    isShow: boolean
    isDateTime: boolean
}
/**
 * --------------------组件通信--------------------
 */
const props = defineProps<IPropsType>()
const emit = defineEmits<{
    (e: 'inputChangeStart', value: Array<string>): void
    (e: 'inputChangeEnd', value: Array<string>): void
    (e: 'inputClear'): void
}>()
// 语言
const lang = inject<'ch' | 'en'>('lang') as 'ch' | 'en'
// 范围placeholder
const placeholderRange = inject<string[]>('placeholderRange')
/**
 * --------------------组件状态--------------------
 */
const startInputRef = ref<HTMLInputElement>()
const endInputRef = ref<HTMLInputElement>()
// 计算placeholder值
const placeholderDefault = computed(() => {
    switch (props.picker) {
        case 'date':
            return ['开始日期', '结束日期']
        case 'month':
            return ['开始月份', '结束月份']
        case 'year':
            return ['开始年份', '结束年份']
        default:
            return ['???', '???']
    }
})
// 焦点状态
const focusIndex = ref<number>(-1)

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
const changeInputHandle = (flag: 'start' | 'end') => {
    if (startInputRef.value && endInputRef.value) {
        if (flag === 'start') {
            emit('inputChangeStart', [startInputRef.value.value, endInputRef.value.value])
        } else {
            emit('inputChangeEnd', [startInputRef.value.value, endInputRef.value.value])
        }
    }
}
const handleIconClick = (e: Event) => {
    // 阻止冒泡
    e.stopPropagation()
    if (props.isShow) {
        emit('inputClear')
    }
}

// 获得焦点事件处理
const focusInputHandle = (flag: 'start' | 'end') => {
    if (startInputRef.value && endInputRef.value) {
        if (flag === 'start') {
            focusIndex.value = 0
        } else {
            focusIndex.value = 1
        }
    }
}

/**
 * --------------------导出--------------------
 */
defineExpose({
    focusIndex
})
</script>

<style lang="scss" scoped>
@import '../../../styles/common.scss';

/* 时间选择器样式 */
.show-date-time {
    width: 420px !important;
}

.picker-input-range {
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 312px;
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

    & > span {
        color: #bfbfbf;
        user-select: none;
    }

    .separator {
        padding: 0 10px;
        /* width: 16px; */
        height: 16px;
    }

    .suffix {
        transform: translateY(-1.5px);
        width: 14px;
        height: 14px;
        margin-left: 4px;
        cursor: pointer;

        &:hover {
            color: #aeaeae;
        }
    }
}

/* 选中样式 */
.picker-input-range-selected {
    /* border-color: #4096ff; */
    border-color: $theme-color;
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
    outline: 0;
}
</style>
