<template>
    <div v-show="curPanelType === 'date'" :class="['date-panel', { 'show-date-time': isDateTime }]">
        <TimePanel
            ref="timePanelRef"
            v-if="isDateTime"
            @go-today="goToday"
            :formatStr="format"
        ></TimePanel>
        <div :class="['date-box', { 'range-date-box': isRangePicker && !isDateTime }]">
            <div class="left-box">
                <div class="panel-header">
                    <div class="cur-time">
                        <span class="year" @click="checkoutYearPanel">{{
                            year + transformLang('年')
                        }}</span>
                        <span class="month" @click="checkoutMonthPanel">{{
                            transformLang(month + '月')
                        }}</span>
                    </div>
                    <div class="control">
                        <span class="prev" @click="monthSub">＜</span>
                        <span class="next" @click="monthAdd">＞</span>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="weeks">
                        <span v-for="(item, index) in weeks" :key="index">{{
                            transformLang(item)
                        }}</span>
                    </div>
                    <div class="days">
                        <div
                            class="days-row"
                            v-for="(rowData, index) in curMonthDataCp"
                            :key="index"
                        >
                            <div
                                :class="[
                                    'days-cell',
                                    { 'day-hidden': cellData.hidden },
                                    { 'day-default': checkDefaultDate(year, month, cellData.date) },
                                    {
                                        'day-selected':
                                            checkSelectDate(year, month, cellData.date) ||
                                            checkStartOrEnd(year, month, cellData.date)
                                    },
                                    {
                                        'day-range': checkSelectDateRange(
                                            year,
                                            month,
                                            cellData.date
                                        )
                                    },
                                    {
                                        'day-unselect': checkUnselectDate(
                                            year,
                                            month,
                                            cellData.date
                                        )
                                    },
                                    {
                                        'day-holiday': showHolidays
                                    }
                                ]"
                                v-for="(cellData, indey) in rowData"
                                :key="indey"
                                @click="handleCellClick(year, month, cellData.date)"
                            >
                                <span>{{ cellData.hidden ? '' : cellData.date }}</span>
                                <span v-if="showHolidays">{{
                                    cellData.hidden ? '' : calcHoliday(year, month, cellData.date)
                                }}</span>
                            </div>
                        </div>
                    </div>
                    <div v-if="!isRangePicker || isDateTime" class="today" @click="toToday">
                        {{ isDateTime ? transformLang('确定') : transformLang('今天') }}
                    </div>
                </div>
            </div>
            <div
                v-if="isRangePicker && !isDateTime"
                class="right-box"
                style="padding-left: 14px; border-left: 2px solid #eee"
            >
                <div class="panel-header" style="justify-content: center">
                    <div class="cur-time">
                        <span class="year" @click="checkoutYearPanel">{{
                            nextMonthMY[0] + transformLang('年')
                        }}</span>
                        <span class="month" @click="checkoutMonthPanel">{{
                            transformLang(nextMonthMY[1] + '月')
                        }}</span>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="weeks">
                        <span v-for="(item, index) in weeks" :key="index">{{
                            transformLang(item)
                        }}</span>
                    </div>
                    <div class="days">
                        <div
                            class="days-row"
                            v-for="(rowData, index) in nextMonthDataCp"
                            :key="index"
                        >
                            <div
                                :class="[
                                    'days-cell',
                                    { 'day-hidden': cellData.hidden },
                                    {
                                        'day-default': checkDefaultDate(
                                            nextMonthMY[0],
                                            nextMonthMY[1],
                                            cellData.date
                                        )
                                    },
                                    {
                                        'day-selected':
                                            checkSelectDate(
                                                nextMonthMY[0],
                                                nextMonthMY[1],
                                                cellData.date
                                            ) ||
                                            checkStartOrEnd(
                                                nextMonthMY[0],
                                                nextMonthMY[1],
                                                cellData.date
                                            )
                                    },
                                    {
                                        'day-range': checkSelectDateRange(
                                            nextMonthMY[0],
                                            nextMonthMY[1],
                                            cellData.date
                                        )
                                    },
                                    {
                                        'day-unselect': checkUnselectDate(
                                            nextMonthMY[0],
                                            nextMonthMY[1],
                                            cellData.date
                                        )
                                    },
                                    {
                                        'day-holiday': showHolidays
                                    }
                                ]"
                                v-for="(cellData, indey) in rowData"
                                :key="indey"
                                @click="
                                    handleCellClick(nextMonthMY[0], nextMonthMY[1], cellData.date)
                                "
                            >
                                <span>{{ cellData.hidden ? '' : cellData.date }}</span>
                                <span v-if="showHolidays">{{
                                    cellData.hidden
                                        ? ''
                                        : calcHoliday(nextMonthMY[0], nextMonthMY[1], cellData.date)
                                }}</span>
                            </div>
                        </div>
                    </div>
                    <div v-if="!isRangePicker" class="today" @click="toToday">
                        {{ isDateTime ? transformLang('确定') : transformLang('今天') }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <MonthPanel
        ref="monthPanelRef"
        v-show="curPanelType === 'month'"
        src="date"
        @change-month-by-date="changeMonth"
    ></MonthPanel>
    <YearPanel
        ref="yearPanelRef"
        v-show="curPanelType === 'year'"
        src="date"
        @change-year-by-date="changeYear"
    ></YearPanel>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, watch, inject } from 'vue'
import type { Ref } from 'vue'

import MonthPanel from './MonthPanel.vue'
import YearPanel from './YearPanel.vue'
import TimePanel from './TimePanel.vue'
import {
    debounce,
    calcDaysByMonth,
    parseTime,
    monthCalc,
    calcRangeDate,
    solarToLunar,
    ch2en
} from '../utils'
/**
 * --------------------类型定义--------------------
 */
export interface IPropsType {
    date?: string
}

// 每天的数据类型
interface IDateType {
    date: number
    hidden?: boolean
    desc?: string
}

interface HTMLElementEnhanceYM extends HTMLElement {
    year: number
    month?: number
}

interface HTMLElementEnhanceHMS extends HTMLElement {
    hour: number
    minute: number
    second: number
}

/**
 * --------------------组件通信--------------------
 */
// 获取父组件传递的props
const props = defineProps<IPropsType>()
// 事件传递
const emit = defineEmits<{
    (e: 'changeDate', year: number, month: number, date: number, formatStr: string): void
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
}>()
// 是否为时间日期面板
const isDateTime = inject('isDateTime') as boolean
// 时间格式化，默认为"YYYY-MM-DD"
const format =
    inject<string | undefined>('format') || (isDateTime ? 'YYYY-MM-DD  HH:mm:ss' : 'YYYY-MM-DD')
// 是否为范围选择器
const isRangePicker = inject<boolean>('isRangePicker')
// 获取顶级组件的范围日期数据
const dateRange = inject<Ref<string[]>>('dateRange') as Ref<string[]>
const pickerInputRangeRef = inject<any>('pickerInputRangeRef')
// 不可选日期
const disabledDate = inject<Array<number>[]>('disabledDate') || []
// 是否展示节假日视图
const showHolidays = inject<boolean>('showHolidays') as boolean
// 语言
const lang = inject<'ch' | 'en'>('lang') as 'ch' | 'en'
/**
 * --------------------组件状态--------------------
 */
const weeks = ['一', '二', '三', '四', '五', '六', '日']
// 当前月份
const month = ref<number>(0)
// 当前年份
const year = ref<number>(0)
// 当前日期
const date = ref<number>(0)
// 下一个月的年月数据
const nextMonthMY = computed(() => {
    const [y, m] = monthCalc(year.value, month.value, 'add')
    return [y, m]
})
// 当前月份每天的数据
const curMonthData = ref<IDateType[]>([])
// 下一个月的每天的数据
const nextMonthData = ref<IDateType[]>([])
// 当前月份每天的数据预处理
const curMonthDataCp = computed(() => {
    const res = []
    for (let i = 0; i < curMonthData.value.length; i += 7) {
        const slice = curMonthData.value.slice(i, i + 7)
        res.push(slice)
    }
    return res
})
// 下一个月份每天的数据预处理
const nextMonthDataCp = computed(() => {
    const res = []
    for (let i = 0; i < nextMonthData.value.length; i += 7) {
        const slice = nextMonthData.value.slice(i, i + 7)
        res.push(slice)
    }
    return res
})
// 当前展示面板类型
const curPanelType = ref<'date' | 'month' | 'year'>('date')
// 月面板dom元素
const monthPanelRef = ref<HTMLElementEnhanceYM>()
// 年面板dom元素
const yearPanelRef = ref<HTMLElementEnhanceYM>()
// 时间面板dom元素
const timePanelRef = ref<HTMLElementEnhanceHMS>()
// 选择的起始日期和结束日期
const selectStartAndEnd = ref<Array<number[]>>([])

/**
 * --------------------功能函数--------------------
 */
// 数据初始化
const initState = (today = false) => {
    let nowTime: Date
    if (today) {
        nowTime = new Date()
    } else {
        nowTime = props.date && parseTime(props.date, format) ? new Date(props.date) : new Date()
    }
    year.value = nowTime.getFullYear()
    month.value = nowTime.getMonth() + 1
    date.value = nowTime.getDate()
}

// 验证范围数据是否合法
const verifyDateRange = () => {
    return dateRange.value.every(item => parseTime(item, format))
}

// 检测来自顶级组件的范围数据是否为空
const dateRangeIsBlank = () => {
    return dateRange.value.every(item => item === '')
}

// 初始化范围日期数据
const initRangeState = () => {
    const dr = dateRange.value.map(item => {
        const timeObj = parseTime(item, format)
        if (timeObj) {
            const { year, month, date } = timeObj
            return [year, month, date]
        } else {
            return console.log('日期解析出错,什么也不做')
        }
    })
    selectStartAndEnd.value = dr as number[][]
}

// 加载当月数据
const loadData = () => {
    curMonthData.value = []
    // 当前月有多少天
    let curMonthDays = calcDaysByMonth(year.value, month.value)
    // 上一月有多少天
    let lastMonthDays = calcDaysByMonth(year.value, month.value - 1 || 12)
    // 计算星期一距离这个月第一天的天数
    let intervalDays = (new Date(year.value + '/' + month.value).getDay() || 7) - 1
    //   循环添加上一个月数据
    for (let i = 1; i <= intervalDays; i++) {
        // +9999：防止隐藏的数据被选中
        curMonthData.value.push({ date: lastMonthDays - intervalDays + i + 9999, hidden: true })
    }
    // 循环添加当月数据
    for (let i = 1; i <= curMonthDays; i++) {
        curMonthData.value.push({ date: i })
    }
    // 循环添加下一个月数据
    if (curMonthData.value.length !== 42) {
        let surplusDays = 42 - curMonthData.value.length
        for (let i = 1; i <= surplusDays; i++) {
            // +9999：防止隐藏的数据被选中
            curMonthData.value.push({ date: i + 9999, hidden: true })
        }
    }

    // 如果为范围选择器，择还需要加载下一个月的数据
    if (isRangePicker) {
        nextMonthData.value = []
        // 下一个月的天数
        const [y, m] = monthCalc(year.value, month.value, 'add')
        let nextMonthDays = calcDaysByMonth(y, m)
        // 计算下一个月星期一距离下一个月第一天的天数
        let intervalDays = (new Date(y + '/' + m).getDay() || 7) - 1
        // 循环添加当前月的数据
        for (let i = 1; i <= intervalDays; i++) {
            nextMonthData.value.push({ date: curMonthDays - intervalDays + i + 9999, hidden: true })
        }
        // 循环添加下一个月的数据
        for (let i = 1; i <= nextMonthDays; i++) {
            nextMonthData.value.push({ date: i })
        }
        // 循环添加下下个月数据
        if (nextMonthData.value.length !== 42) {
            let surplusDays = 42 - nextMonthData.value.length
            for (let i = 1; i <= surplusDays; i++) {
                // +9999：防止隐藏的数据被选中
                nextMonthData.value.push({ date: i + 9999, hidden: true })
            }
        }
    }
}

// 检测是否为今天
const checkDefaultDate = (year: number, month: number, date: number) => {
    const nowTime = new Date()
    return (
        year === nowTime.getFullYear() &&
        month === nowTime.getMonth() + 1 &&
        date === nowTime.getDate()
    )
}

// 检测当前天是否是选中的天
const checkSelectDate = (year: number, month: number, date: number) => {
    if (props.date) {
        const timeObj = parseTime(props.date, format)
        if (timeObj) {
            const { year: y, month: m, date: d } = timeObj
            return year === y && month === m && date === d
        }
    }
    if (isDateTime && isRangePicker) {
        const startTimeObj = parseTime(dateRange.value[0], format)
        const endTimeObj = parseTime(dateRange.value[1], format)
        if (startTimeObj) {
            const { year: y, month: m, date: d } = startTimeObj
            return year === y && month === m && date === d
        }
        if (endTimeObj) {
            const { year: y, month: m, date: d } = endTimeObj
            return year === y && month === m && date === d
        }
    }
}

// 检测当前天是否是选择的起始或者终止天
const checkStartOrEnd = (year: number, month: number, date: number) => {
    return selectStartAndEnd.value.some(item => {
        return year === item[0] && month === item[1] && date === item[2]
    })
}

// 检测当前天是否是选择的日期范围中的天
const checkSelectDateRange = (year: number, month: number, date: number) => {
    if (selectStartAndEnd.value.length === 2) {
        const [sy, sm, sd] = selectStartAndEnd.value[0]
        const [ey, em, ed] = selectStartAndEnd.value[1]
        const rangeDates = calcRangeDate(
            { year: sy, month: sm, date: sd },
            { year: ey, month: em, date: ed }
        )
        return rangeDates.some(
            item => year === item.year && month === item.month && date === item.date
        )
    }
}

// 检测当前天是否是不可选的日期
const checkUnselectDate = (year: number, month: number, date: number) => {
    if (!disabledDate.length) return false
    return disabledDate.some(item => {
        return year === item[0] && month === item[1] && date === item[2]
    })
}

// 计算节假日
const calcHoliday = (year: number, month: number, date: number) => {
    const { dayCn, festival } = solarToLunar(year, month, date)
    return festival === '' ? dayCn : festival
}

// 语言转换
const transformLang = (value: string) => {
    if (lang === 'en') {
        return ch2en(value)
    } else {
        return value
    }
}

/**
 * --------------------生命周期--------------------
 */
onMounted(() => {
    initState()
    loadData()
})
// 监听props.date的变化，防抖优化性能
watch(
    () => props.date,
    debounce(() => {
        initState()
        loadData()
    }, 200)
)

// 监听dateRange的变化
watch(
    dateRange,
    debounce(() => {
        if (verifyDateRange()) {
            initRangeState()
            loadData()
        } else {
            // 若来自顶级组件的范围数据为空,则清空数据
            if (dateRangeIsBlank()) {
                selectStartAndEnd.value = []
            }
        }
    }, 200),
    {
        deep: true
    }
)

// 监听selectStartAndEnd的变化
watch(
    selectStartAndEnd,
    () => {
        if (isDateTime && isRangePicker) return
        if (selectStartAndEnd.value.length === 2) {
            // 排序
            selectStartAndEnd.value.sort((a, b) => {
                return a[0] - b[0] || a[1] - b[1] || a[2] - b[2]
            })
            // 同步日期数据,使面板进行跳转到选择的开始日期
            year.value = selectStartAndEnd.value[0][0]
            month.value = selectStartAndEnd.value[0][1]
            date.value = selectStartAndEnd.value[0][2]
            loadData()
            // 通知父组件改变状态
            emit('changeDateRange', selectStartAndEnd.value, format)
        }
    },
    { deep: true }
)
/**
 * --------------------事件处理--------------------
 */
// 月份-1
const monthSub = () => {
    month.value--
    if (month.value === 0) {
        year.value--
        month.value = 12
    }
    loadData()
}
// 月份+1
const monthAdd = () => {
    month.value++
    if (month.value === 13) {
        year.value++
        month.value = 1
    }
    loadData()
}
// 回到今天/确定
const toToday = () => {
    if (!isDateTime) {
        initState(true)
        loadData()
        // 通知父组件改变date状态
        emit('changeDate', year.value, month.value, date.value, format)
    } else {
        if (isDateTime && isRangePicker) {
            const index = pickerInputRangeRef.value.focusIndex
            const timeObj = parseTime(dateRange.value[index], format)
            if (timeObj) {
                const { year: y, month: m, date: d } = timeObj
                handleCellClick(y, m, d, true)
            }
        } else {
            handleCellClick(year.value, month.value, date.value, true)
        }
    }
}
// 日期选择
const handleCellClick = (year: number, month: number, date: number, close = false) => {
    // 范围选择面板
    if (isRangePicker && !isDateTime) {
        if (selectStartAndEnd.value.length === 2) {
            selectStartAndEnd.value = []
        }
        selectStartAndEnd.value.push([year, month, date])
        return
    }
    if (!isDateTime) {
        // 通知父组件改变date状态
        emit('changeDate', year, month, date, format)
    } else {
        if (timePanelRef.value) {
            emit(
                'changeDateTime',
                year,
                month,
                date,
                timePanelRef.value.hour,
                timePanelRef.value.minute,
                timePanelRef.value.second,
                format,
                close
            )
        }
    }
}
// 切换到年面板
const checkoutYearPanel = () => {
    curPanelType.value = 'year'
    // 时间校准
    if (yearPanelRef.value) {
        yearPanelRef.value.year = year.value
    }
}

// 切换到月面板
const checkoutMonthPanel = () => {
    curPanelType.value = 'month'
    // 时间校准
    if (monthPanelRef.value) {
        monthPanelRef.value.year = year.value
        monthPanelRef.value.month = month.value
    }
}

// 切换到日期面板
const checkoutDatePanel = () => {
    curPanelType.value = 'date'
}

// 改变年并且切换到月面板
const changeYear = (y: number) => {
    year.value = y
    checkoutMonthPanel()
}

// 改变年、月并且切换到日期面板
const changeMonth = (y: number, m: number) => {
    year.value = y
    month.value = m
    checkoutDatePanel()
    // 重新加载数据
    loadData()
}

// 此刻
const goToday = (hour: number, minute: number, second: number, onlyTime: boolean) => {
    initState(!onlyTime)
    loadData()
    if (isDateTime && isRangePicker && onlyTime) {
        const index = pickerInputRangeRef.value.focusIndex
        const timeObj = parseTime(dateRange.value[index], format)
        if (timeObj) {
            const { year: y, month: m, date: d } = timeObj
            emit('changeDateTime', y, m, d, hour, minute, second, format, false)
        }
    } else {
        // 通知父组件改时间日期
        emit(
            'changeDateTime',
            year.value,
            month.value,
            date.value,
            hour,
            minute,
            second,
            format,
            false
        )
    }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/common.scss';

/* 时间选择器样式 */
.show-date-time {
    display: flex;
    width: 520px;

    .date-box {
        border-left: 1px solid #eee;
    }
}

.date-panel {
    /* font-family: '楷体'; */
    font-size: 16px;
    font-weight: 600;
}

.date-box {
    width: 320px;
}
/* 范围选择 */
.range-date-box {
    width: 640px;
    height: 350px;
    display: flex;
    justify-content: space-around;

    .panel-header {
        display: flex;
        flex-direction: row-reverse;
        padding: 16px 12px 8px 12px;
    }
}

.date-time-box {
    display: none;
}

.panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    height: 54px;
    padding: 16px 24px 8px 24px;
    font-size: 18px;

    .cur-time {
        span {
            cursor: pointer;
            transition: 0.2s;
            &:hover {
                color: $theme-color;
            }
        }
        .year {
            margin-right: 5px;
        }
    }

    .control {
        display: flex;
        span {
            cursor: pointer;
            &:hover {
                color: $theme-color;
            }
        }
        .prev {
            margin-right: 20px;
        }
    }
}

.panel-body {
    /* height: 320px; */
    .weeks {
        display: flex;
        justify-content: center;

        span {
            box-sizing: border-box;
            text-align: center;
            width: 36px;
            height: 40px;
            line-height: 40px;
            margin: 0 3px;
        }
    }

    .days {
        overflow: hidden;
        width: 100%;
        height: 240px;

        .days-row {
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            width: 100%;
            height: 40px;
            padding: 2px 0;

            .days-cell {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                width: 36px;
                height: 36px;
                margin: 0 3px;
                cursor: pointer;
                transition: all 0.2s;
                border-radius: 100%;

                > span {
                    line-height: 16px;
                }

                &:hover {
                    background-color: #eee;
                    color: $theme-color;
                }
            }
        }
    }

    /* 隐藏日期样式 */
    .day-hidden {
        pointer-events: none;
    }

    /* 默认今天的日期样式 */
    .day-default {
        border: 1px solid $theme-color;
    }

    /* 选中日期样式 */
    .day-selected {
        background-color: $theme-color !important;
        color: #fff !important;
    }

    /* 范围内日期样式 */
    .day-range {
        background-color: #eee;
        color: #f56c6c;
    }

    /* 不可选日期样式 */
    .day-unselect {
        background-color: #f5f5f5;
        color: #b8b8b8;
        cursor: auto;
        pointer-events: none;
        border: none;
    }

    /* 节假日视图样式 */
    .day-holiday {
        font-size: 12px;
    }

    .today {
        box-sizing: border-box;
        border-top: 1px solid #eee;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;

        &:hover {
            color: $theme-color;
        }
    }
}
</style>
