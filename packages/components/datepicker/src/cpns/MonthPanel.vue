<template>
    <div>
        <div
            v-show="!isShowYearPanel"
            :class="['month-panel', { 'range-month-panel': isRangePicker && src === 'month' }]"
        >
            <div class="left-box">
                <div class="panel-header">
                    <div class="cur-time">
                        <span class="year" @click="checkoutYearPanel">{{
                            year + transformLang('年')
                        }}</span>
                    </div>
                    <div class="control">
                        <span class="prev" @click="yearSub">＜</span>
                        <span class="next" @click="yearAdd">＞</span>
                    </div>
                </div>
                <div class="panel-body">
                    <div
                        class="month-cell"
                        v-for="(item, index) in curMonthsData"
                        :key="index"
                        @click="handleCellClick(year, index + 1)"
                    >
                        <span
                            :class="[
                                {
                                    'month-selected':
                                        checkSelectMonth(year, index + 1) ||
                                        checkStartOrEnd(year, index + 1)
                                },
                                { 'month-default': checkDefaultMonth(year, index + 1) },
                                { 'month-range': checkRangeMonth(year, index + 1) }
                            ]"
                            >{{ transformLang(item) }}</span
                        >
                    </div>
                </div>
            </div>
            <div v-if="isRangePicker && src === 'month'" class="right-box">
                <div class="panel-header">
                    <div class="cur-time">
                        <span class="year" @click="checkoutYearPanel">{{
                            year + 1 + transformLang('年')
                        }}</span>
                    </div>
                </div>
                <div class="panel-body">
                    <div
                        class="month-cell"
                        v-for="(item, index) in curMonthsData"
                        :key="index"
                        @click="handleCellClick(year + 1, index + 1)"
                    >
                        <span
                            :class="[
                                {
                                    'month-selected':
                                        checkSelectMonth(year + 1, index + 1) ||
                                        checkStartOrEnd(year + 1, index + 1)
                                },
                                { 'month-default': checkDefaultMonth(year + 1, index + 1) },
                                { 'month-range': checkRangeMonth(year + 1, index + 1) }
                            ]"
                            >{{ transformLang(item) }}</span
                        >
                    </div>
                </div>
            </div>
        </div>
        <YearPanel
            v-show="isShowYearPanel"
            src="month"
            @change-year-by-month="changeYear"
        ></YearPanel>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch, inject } from 'vue'
import type { Ref } from 'vue'
import YearPanel from './YearPanel.vue'
import { debounce, parseTime, calcRangeMonth, ch2en } from '../utils'
/**
 * --------------------类型定义--------------------
 */
export interface IPropsType {
    month?: string
    src?: 'month' | 'date'
}
/**
 * --------------------组件通信--------------------
 */
const props = withDefaults(defineProps<IPropsType>(), {
    src: 'month'
})
const emit = defineEmits<{
    (e: 'changeMonth', year: number, month: number, formatStr: string): void
    (e: 'changeMonthByDate', year: number, month: number): void
    (e: 'changeMonthRange', monthRange: Array<number[]>, formatStr: string): void
}>()
// 时间格式化
const format = inject<string | undefined>('format') || 'YYYY-MM'
const isRangePicker = inject<boolean>('isRangePicker') as boolean
// 范围月份数据
const monthRange = inject<Ref<string[]>>('monthRange') as Ref<string[]>
// 语言
const lang = inject<'ch' | 'en'>('lang') as 'ch' | 'en'
/**
 * --------------------组件状态--------------------
 */
const month = ref<number>(0)
const year = ref<number>(0)
// 是否展示年面板
const isShowYearPanel = ref<boolean>(false)
const curMonthsData = [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月'
]

// 选择的起始与结束的月份数据
const selectStartAndEnd = ref<Array<number[]>>([])

/**
 * --------------------功能函数--------------------
 */
// 初始化数据
const initState = () => {
    const nowTime =
        props.month && parseTime(props.month, format) ? new Date(props.month) : new Date()
    year.value = nowTime.getFullYear()
    month.value = nowTime.getMonth() + 1
}

// 验证范围数据是否合法
const verifyMonthRange = () => {
    return monthRange.value.every(item => parseTime(item, format))
}

// 检测来自顶级组件的范围数据是否为空
const monthRangeIsBlank = () => {
    return monthRange.value.every(item => item === '')
}

// 初始化范围数据
const initRangeState = () => {
    const dr = monthRange.value.map(item => {
        const timeObj = parseTime(item, format)
        if (timeObj) {
            const { year, month } = timeObj
            return [year, month]
        } else {
            return console.log('日期解析出错,什么也不做')
        }
    })
    selectStartAndEnd.value = dr as number[][]
}

// 检测当前月是否是选中月
const checkSelectMonth = (year: number, month: number) => {
    if (props.month) {
        const timeObj = parseTime(props.month, format)
        if (timeObj) {
            const { year: y, month: m } = timeObj
            return year === y && month === m
        }
    }
}

// 检测当前月是否是选择的起始或者终止月
const checkStartOrEnd = (year: number, month: number) => {
    return selectStartAndEnd.value.some(item => {
        return year === item[0] && month === item[1]
    })
}

// 检测月是否是当前月
const checkDefaultMonth = (year: number, month: number) => {
    const nowTime = new Date()
    return year === nowTime.getFullYear() && month === nowTime.getMonth() + 1
}

// 检测当前月是否是选择的月份范围中的月
const checkRangeMonth = (year: number, month: number) => {
    if (selectStartAndEnd.value.length === 2) {
        const [sy, sm] = selectStartAndEnd.value[0]
        const [ey, em] = selectStartAndEnd.value[1]
        const rangeMonths = calcRangeMonth({ year: sy, month: sm }, { year: ey, month: em })
        return rangeMonths.some(item => year === item.year && month === item.month)
    }
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
})
watch(
    () => props.month,
    debounce(() => {
        initState()
    }, 200)
)

// 监听monthRange的变化
watch(
    monthRange,
    debounce(() => {
        if (verifyMonthRange()) {
            initRangeState()
        } else {
            if (monthRangeIsBlank()) {
                selectStartAndEnd.value = []
            }
        }
    }, 200)
)

// 监听selectStartAndEnd的改变
watch(
    selectStartAndEnd,
    () => {
        if (selectStartAndEnd.value.length === 2) {
            // 排序
            selectStartAndEnd.value.sort((a, b) => {
                return a[0] - b[0] || a[1] - b[1]
            })
            // 同步月份数据，使面板进行跳转到选择的开始月份
            year.value = selectStartAndEnd.value[0][0]
            month.value = selectStartAndEnd.value[0][1]
            // 通知父组件改变状态
            emit('changeMonthRange', selectStartAndEnd.value, format)
        }
    },
    { deep: true }
)
/**
 * --------------------事件处理--------------------
 */
// 点击月份
const handleCellClick = (y: number, m: number) => {
    // 如果是范围选择
    if (isRangePicker && props.src === 'month') {
        if (selectStartAndEnd.value.length === 2) {
            selectStartAndEnd.value = []
        }
        selectStartAndEnd.value.push([y, m])
        return
    }
    month.value = m
    switch (props.src) {
        case 'month':
            // 通知DatePicker组件改变month
            emit('changeMonth', year.value, m, format)
            break
        case 'date':
            // 通知DatePanel组件改变month
            emit('changeMonthByDate', year.value, m)
            break
    }
}
// 年-1
const yearSub = () => {
    year.value--
}
// 年+1
const yearAdd = () => {
    year.value++
}
// 切换到年面板
const checkoutYearPanel = () => {
    isShowYearPanel.value = true
}
// 改变年
const changeYear = (y: number) => {
    year.value = y
    isShowYearPanel.value = false
}

/**
 * --------------------向外导出--------------------
 */
// 用于时间校准
defineExpose({
    year,
    month
})
</script>

<style lang="scss" scoped>
.month-panel {
    width: 320px;
    font-family: '楷体';
    font-size: 16px;
    font-weight: 600;
}

.range-month-panel {
    display: flex;
    width: 640px;

    .panel-header {
        flex-direction: row-reverse;
        padding: 16px 36px 8px 36px;
    }

    .right-box {
        /* border-left: 2px solid #eee; */
        .panel-header {
            justify-content: center;
        }
    }
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
                color: #4096ff;
            }
        }
    }

    .control {
        display: flex;
        span {
            cursor: pointer;
            &:hover {
                color: #4096ff;
            }
        }
        .prev {
            margin-right: 20px;
        }
    }
}

.panel-body {
    display: flex;
    flex-wrap: wrap;
    height: 280px;
    padding: 0 10px;

    .month-cell {
        box-sizing: border-box;
        flex-shrink: 0;
        width: 100px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        cursor: pointer;

        span {
            transition: all 0.2s;
            padding: 8px;
            border-radius: 100%;
        }

        &:hover span {
            background-color: #eee;
            color: #4096ff;
        }
    }

    /* 选中月的样式 */
    .month-selected {
        background-color: #4096ff !important;
        color: #fff !important;
    }

    /* 默认当前月的样式 */
    .month-default {
        border: 1px solid #4096ff;
    }

    /* 选中月份范围中的样式 */
    .month-range {
        background-color: #eee;
        color: #f56c6c;
    }
}
</style>
