<template>
    <div class="date-picker" ref="datePickerRef" @click="showPanel">
        <!-- 输入框1:选择日期 -->
        <PickerInput
            v-if="!isRangePicker"
            :picker="picker"
            :placeholder="placeholder"
            :timeValue="timeValue"
            :isDateTime="isDateTime"
            :isShow="isShow"
            @input-change="handleInputChange"
            @input-clear="handleInputClear"
        />
        <!-- 输入框2:选择日期范围 -->
        <PickerInputRange
            v-else
            ref="pickerInputRangeRef"
            :picker="picker"
            :placeholder="placeholder"
            :rangeTimeValue="rangeTimeValue"
            :isDateTime="isDateTime"
            :isShow="isShow"
            @input-change-start="handleInputRangeChange"
            @input-change-end="handleInputRangeChange"
            @input-clear="handleInputClear"
        />
        <!-- 日期面板 -->
        <Teleport to="body">
            <!-- 面板1：选择日期 -->
            <PickerPanel
                ref="pickerPanelRef"
                :datePickerRef="datePickerRef"
                :isShow="isShow"
                :picker="picker"
                :date="date"
                :month="month"
                :year="year"
                @change-date="changeDate"
                @change-month="changeMonth"
                @change-year="changeYear"
                @change-date-time="changeDateTime"
                @change-date-range="changeDateRange"
                @change-month-range="changeMonthRange"
                @change-year-range="changeYearRange"
            />
        </Teleport>
    </div>
</template>

<script lang="ts" setup>
import { ref, provide, computed, watch } from 'vue'
import type { Ref } from 'vue'
import PickerInput from './cpns/PickerInput.vue'
import PickerPanel from './cpns/PickerPanel.vue'
import PickerInputRange from './cpns/PickerInputRange.vue'
import { formatTime } from './utils'
/**
 * --------------------类型定义--------------------
 */
export interface HTMLDivElementEnhance extends HTMLDivElement {
    setPanelPosition: () => void
    isClickBlank: (event: MouseEvent) => Boolean
}

// props类型
export interface IPropsType {
    picker?: 'date' | 'month' | 'year'
    isDateTime?: boolean
    format?: string
    placeholder?: string
    placeholderRange?: string[]
    isRangePicker?: boolean
    disabledDate?: Array<number[]>
    disabledTime?: Array<number[]>
    showHolidays?: boolean
    lang?: 'ch' | 'en'
}

/**
 * --------------------组件状态--------------------
 */
// 获取dom元素
const datePickerRef = ref<HTMLDivElement>()
const pickerPanelRef = ref<HTMLDivElementEnhance>()
const isShow = ref<boolean>(false)
// ----------特定日期数据----------
// 日期数据
const date = ref<string>('')
// 月数据
const month = ref<string>('')
// 年份数据
const year = ref<string>('')
// ----------范围日期数据----------
// 范围日期数据
const dateRange = ref<string[]>(['', ''])
// 范围月数据
const monthRange = ref<string[]>(['', ''])
// 范围年数据
const yearRange = ref<string[]>(['', ''])
// 当前输入框展示数据
const timeValue = computed(() => {
    switch (props.picker) {
        case 'date':
            return date.value
        case 'month':
            return month.value
        case 'year':
            return year.value
        default:
            return '???'
    }
})
const rangeTimeValue = computed(() => {
    switch (props.picker) {
        case 'date':
            return dateRange.value
        case 'month':
            return monthRange.value
        case 'year':
            return yearRange.value
        default:
            return ['???', '???']
    }
})

// 获取PickerInputRange组件dom元素
const pickerInputRangeRef = ref<InstanceType<typeof PickerInputRange> | null>(null)

/**
 * --------------------组件通信--------------------
 */
const props = withDefaults(defineProps<IPropsType>(), {
    picker: 'date',
    isDateTime: false,
    isRangePicker: false,
    showHolidays: false,
    lang: 'ch'
})

const emit = defineEmits<{
    (e: 'change', value: string | string[]): void
}>()
// 全局数据提供
// 日期选择器/日期时间选择器
provide<boolean>('isDateTime', props.isDateTime)
// 日期时间数据
provide<Ref<string>>('datetime', date)
// 格式化(参数)
provide<string | undefined>('format', props.format)
// 范围选择器
provide<boolean>('isRangePicker', props.isRangePicker)
// 范围时间数据
provide<Ref<string[]>>('dateRange', dateRange)
provide<Ref<string[]>>('monthRange', monthRange)
provide<Ref<string[]>>('yearRange', yearRange)
// 传递出索引
provide<Ref<InstanceType<typeof PickerInputRange> | null>>(
    'pickerInputRangeRef',
    pickerInputRangeRef
)
// 不可选日期
provide<Array<number[]> | undefined>('disabledDate', props.disabledDate)
// 不可选日期时间
provide<Array<number[]> | undefined>('disabledTime', props.disabledTime)
// 是否展示节假日视图
provide<boolean>('showHolidays', props.showHolidays)
// 语言
provide<'ch' | 'en'>('lang', props.lang)
// 范围placeholder
provide<string[] | undefined>('placeholderRange', props.placeholderRange)
/**
 * --------------------事件处理--------------------
 */
// 关闭面板动作
const closeAction = () => {
    // 关闭面板
    isShow.value = false
    // 移除点击事件
    document.removeEventListener('click', closePanel)
}

// 展示面板
const showPanel = () => {
    if (isShow.value) return
    // 设置面板位置
    pickerPanelRef.value?.setPanelPosition()
    isShow.value = true
    document.addEventListener('click', closePanel)
}
// 点击空白关闭面板
const closePanel = (event: MouseEvent) => {
    if (pickerPanelRef.value?.isClickBlank(event)) {
        closeAction()
    }
}
// 改变日期
const changeDate = (y: number, m: number, d: number, formatStr: string) => {
    date.value = formatTime('y-m-d', { year: y, month: m, date: d }, formatStr)
    if (!props.isDateTime) {
        closeAction()
    }
}
// 改变月份
const changeMonth = (y: number, m: number, formatStr: string) => {
    month.value = formatTime('y-m', { year: y, month: m }, formatStr)
    closeAction()
}
// 改变年份
const changeYear = (y: number, formatStr: string) => {
    year.value = formatTime('y', { year: y }, formatStr)
    closeAction()
}
// 改变日期时间
const changeDateTime = (
    y: number,
    m: number,
    d: number,
    hour: number,
    minute: number,
    second: number,
    formatStr: string,
    close: boolean
) => {
    // 如果是范围选择器
    if (props.isRangePicker) {
        if (pickerInputRangeRef.value) {
            const index = pickerInputRangeRef.value.focusIndex
            dateRange.value[index] = formatTime(
                'y-m-d-hms',
                { year: y, month: m, date: d, hour, minute, second },
                formatStr
            )
        }
    } else {
        date.value = formatTime(
            'y-m-d-hms',
            { year: y, month: m, date: d, hour, minute, second },
            formatStr
        )
    }

    if (close) {
        closeAction()
    }
}
// input框值改变事件
const handleInputChange = (value: string) => {
    switch (props.picker) {
        case 'date':
            date.value = value
            break
        case 'month':
            month.value = value
            break
        case 'year':
            year.value = value
            break
    }
}
// input框值清除事件
const handleInputClear = () => {
    if (props.isRangePicker) {
        switch (props.picker) {
            case 'date':
                dateRange.value = ['', '']
                break
            case 'month':
                monthRange.value = ['', '']
                break
            case 'year':
                yearRange.value = ['', '']
                break
        }
    } else {
        switch (props.picker) {
            case 'date':
                date.value = ''
                break
            case 'month':
                month.value = ''
                break
            case 'year':
                year.value = ''
                break
        }
    }
    closeAction()
}
// 范围input框值改变事件（开始日期）
const handleInputRangeChange = (value: string[]) => {
    switch (props.picker) {
        case 'date':
            dateRange.value = value
            break
        case 'month':
            monthRange.value = value
            break
        case 'year':
            yearRange.value = value
            break
    }
}

// 改变日期范围
const changeDateRange = (dr: Array<number[]>, formatStr: string) => {
    const [sy, sm, sd] = dr[0]
    const [ey, em, ed] = dr[1]
    dateRange.value[0] = formatTime('y-m-d', { year: sy, month: sm, date: sd }, formatStr)
    dateRange.value[1] = formatTime('y-m-d', { year: ey, month: em, date: ed }, formatStr)
    closeAction()
}

// 改变月份范围
const changeMonthRange = (mr: Array<number[]>, formatStr: string) => {
    const [sy, sm] = mr[0]
    const [ey, em] = mr[1]
    monthRange.value[0] = formatTime('y-m', { year: sy, month: sm }, formatStr)
    monthRange.value[1] = formatTime('y-m', { year: ey, month: em }, formatStr)
    closeAction()
}

// 改变年份范围
const changeYearRange = (yr: number[], formatStr: string) => {
    const [sy, ey] = yr
    yearRange.value[0] = formatTime('y', { year: sy }, formatStr)
    yearRange.value[1] = formatTime('y', { year: ey }, formatStr)
    closeAction()
}

/**
 * --------------------生命周期--------------------
 */
watch(timeValue, value => {
    emit('change', value)
})
watch(
    rangeTimeValue,
    value => {
        emit('change', JSON.parse(JSON.stringify(value)))
    },
    { deep: true }
)

defineOptions({
    name: 'KlDatePicker'
})
</script>

<style lang="scss" scoped>
.date-picker {
    display: inline-block;
    position: relative;
    color: rgba(0, 0, 0, 0.88);
}
</style>
