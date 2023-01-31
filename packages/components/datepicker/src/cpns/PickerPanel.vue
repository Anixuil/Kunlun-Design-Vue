<template>
    <Transition name="panel">
        <div v-show="isShow" class="picker-panel" ref="panelRef">
            <!-- 日期面板 -->
            <DatePanel
                v-if="picker === 'date'"
                :date="date"
                @change-date="changeDate"
                @change-date-time="changeDateTime"
                @change-date-range="changeDateRange"
            ></DatePanel>
            <!-- 月面板 -->
            <MonthPanel
                v-else-if="picker === 'month'"
                :month="month"
                @change-month="changeMonth"
                @change-month-range="changeMonthRange"
            ></MonthPanel>
            <!-- 年面板 -->
            <YearPanel
                v-else
                :year="Number(year)"
                @change-year="changeYear"
                @change-year-range="changeYearRange"
            ></YearPanel>
        </div>
    </Transition>
</template>

<script lang="ts" setup>
import { ref, toRefs } from 'vue'
import DatePanel from './DatePanel.vue'
import MonthPanel from './MonthPanel.vue'
import YearPanel from './YearPanel.vue'
/**
 * --------------------类型定义--------------------
 */
export interface IPropsType {
    isShow: Boolean
    datePickerRef: HTMLDivElement | undefined
    date?: string
    month?: string
    year?: string
    // 选择器类型
    picker: 'date' | 'month' | 'year'
}
/**
 * --------------------组件通信--------------------
 */
// 获取父组件传递的props
const props = defineProps<IPropsType>()
// 事件传递
const emit = defineEmits<{
    (e: 'changeDate', year: number, month: number, date: number, formatStr: string): void
    (e: 'changeMonth', year: number, month: number, formatStr: string): void
    (e: 'changeYear', year: number, formatStr: string): void
    (
        e: 'changeDateTime',
        year: number,
        month: number,
        date: number,
        hour: number,
        minute: number,
        second: number,
        formatStr: string,
        close: boolean
    ): void
    (e: 'changeDateRange', dateRange: Array<number[]>, formatStr: string): void
    (e: 'changeMonthRange', monthRange: Array<number[]>, formatStr: string): void
    (e: 'changeYearRange', yearRange: number[], formatStr: string): void
}>()
/**
 * --------------------组件状态--------------------
 */

// 获取dom元素
const panelRef = ref<HTMLDivElement>()

/**
 * --------------------功能函数--------------------
 */
// 检测是否点击在空白处
const isClickBlank = (event: MouseEvent) => {
    const { datePickerRef } = toRefs(props)
    return (
        !datePickerRef.value?.contains(event.target as Node) &&
        !panelRef.value?.contains(event.target as Node)
    )
}
// 设置日期面板的位置
const setPanelPosition = () => {
    const { datePickerRef } = toRefs(props)
    if (datePickerRef.value && panelRef.value) {
        // 计算日期面板的位置
        const panelTop = datePickerRef.value.offsetTop + datePickerRef.value.offsetHeight + 5
        const panelLeft = datePickerRef.value.offsetLeft
        // 设置日期面板的位置
        panelRef.value.style.top = panelTop + 'px'
        panelRef.value.style.left = panelLeft + 'px'
    }
}

/**
 * --------------------事件处理--------------------
 */
//
const changeDate = (year: number, month: number, date: number, formatStr: string) => {
    // 通知父组件改变date状态
    emit('changeDate', year, month, date, formatStr)
}

const changeYear = (year: number, formatStr: string) => {
    // 通知父组件改变year状态
    emit('changeYear', year, formatStr)
}

const changeMonth = (year: number, month: number, formatStr: string) => {
    emit('changeMonth', year, month, formatStr)
}

const changeDateTime = (
    year: number,
    month: number,
    date: number,
    hour: number,
    minute: number,
    second: number,
    formatStr: string,
    close: boolean
) => {
    emit('changeDateTime', year, month, date, hour, minute, second, formatStr, close)
}

const changeDateRange = (dateRange: Array<number[]>, formatStr: string) => {
    emit('changeDateRange', dateRange, formatStr)
}

const changeMonthRange = (monthRange: Array<number[]>, formatStr: string) => {
    emit('changeMonthRange', monthRange, formatStr)
}

const changeYearRange = (yearRange: number[], formatStr: string) => {
    emit('changeYearRange', yearRange, formatStr)
}
/**
 * --------------------导出--------------------
 */
defineExpose({
    setPanelPosition,
    isClickBlank
})
</script>

<style lang="scss" scoped>
.picker-panel {
    position: absolute;
    z-index: 999;
    border-radius: 6px;
    user-select: none;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 6px 3px;
    background-color: #fff;
}

/* 面板进出动画 */
.panel-enter-active,
.panel-leave-active {
    transition: all 0.1s 0.1s linear;
}

.panel-enter-from,
.panel-leave-to {
    transform: scale(0.72);
    opacity: 0;
}
</style>
