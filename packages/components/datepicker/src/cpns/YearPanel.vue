<template>
    <div :class="['year-panel', { 'year-range-panel': isRangePicker && src === 'year' }]">
        <div class="left-box">
            <div class="panel-header">
                <div class="cur-time">
                    <span class="year"> {{ yearStart + '-' + yearEnd }} </span>
                </div>
                <div class="control">
                    <span class="prev" @click="yearsSub">＜</span>
                    <span class="next" @click="yearsAdd">＞</span>
                </div>
            </div>
            <div class="panel-body">
                <div
                    class="year-cell"
                    v-for="(item, index) in curYearsData"
                    :key="index"
                    @click="handleCellClick(item)"
                >
                    <span
                        :class="[
                            { 'year-selected': checkSelectYear(item) || checkStartOrEnd(item) },
                            { 'year-default': checkDefaultYear(item) },
                            { 'year-range': checkRangeYear(item) }
                        ]"
                        >{{ item }}</span
                    >
                </div>
            </div>
        </div>
        <div v-if="isRangePicker && src === 'year'" class="right-box">
            <div class="panel-header">
                <div class="cur-time">
                    <span class="year"> {{ yearStart + 10 + '-' + (yearEnd + 10) }} </span>
                </div>
            </div>
            <div class="panel-body">
                <div
                    class="year-cell"
                    v-for="(item, index) in nextYearsData"
                    :key="index"
                    @click="handleCellClick(item)"
                >
                    <span
                        :class="[
                            { 'year-selected': checkSelectYear(item) || checkStartOrEnd(item) },
                            { 'year-default': checkDefaultYear(item) },
                            { 'year-range': checkRangeYear(item) }
                        ]"
                        >{{ item }}</span
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch, inject } from 'vue'
import type { Ref } from 'vue'
import { debounce, calcRangeYear, parseTime } from '../utils'
/**
 * --------------------类型定义--------------------
 */
export interface IPropsType {
    year?: number
    // 来自哪一个面板的点击
    src?: 'year' | 'month' | 'date'
}

/**
 * --------------------组件通信--------------------
 */
const props = withDefaults(defineProps<IPropsType>(), {
    src: 'year'
})
const format = inject<string | undefined>('format') || 'YYYY'

const emit = defineEmits<{
    (e: 'changeYear', year: number, format: string): void
    (e: 'changeYearByMonth', year: number): void
    (e: 'changeYearByDate', year: number): void
    (e: 'changeYearRange', yearRange: number[], formatStr: string): void
}>()

const isRangePicker = inject<boolean>('isRangePicker') as boolean
const yearRange = inject<Ref<string[]>>('yearRange') as Ref<string[]>

/**
 * --------------------组件状态--------------------
 */
// 当前年
const year = ref<number>(0)
// 起始年
const yearStart = ref<number>(0)
// 终止年
const yearEnd = ref<number>(0)
// 当前十二年年数据
const curYearsData = computed(() => {
    const res = []
    for (let i = yearStart.value - 1; i <= yearEnd.value + 1; i++) {
        res.push(i)
    }
    return res
})
// 下一个十二年数据
const nextYearsData = computed(() => {
    const res = []
    for (let i = yearStart.value + 9; i <= yearEnd.value + 11; i++) {
        res.push(i)
    }
    return res
})
// 选择的起始年数据和终止年数据
const selectStartAndEnd = ref<number[]>([])

/**
 * --------------------功能函数--------------------
 */
// 初始化数据
const initState = () => {
    const nowTime = new Date()
    year.value = props.year && verifyYear(props.year) ? props.year : nowTime.getFullYear()
    loadData()
}

// 加载面板数据(确定范围)
const loadData = () => {
    yearStart.value = year.value - (year.value % 10)
    yearEnd.value = year.value - (year.value % 10) + 9
}

// 验证传入的年份是否符合规范
const verifyYear = (year: number) => {
    return year >= 1000 && year <= 9999
}

// 验证范围数据是否合法
const verifyYearRange = () => {
    return yearRange.value.every(item => parseTime(item, format))
}

// 检测来自顶级组件的范围数据是否为空
const yearRangeIsBlank = () => {
    return yearRange.value.every(item => item === '')
}

// 初始化范围数据
const initRangeState = () => {
    const dr = yearRange.value.map(item => {
        const timeObj = parseTime(item, format)
        if (timeObj) {
            const { year } = timeObj
            return year
        } else {
            return console.log('日期解析出错,什么也不做')
        }
    })
    selectStartAndEnd.value = dr as number[]
}

// 检测当前年是否是选中年
const checkSelectYear = (year: number) => {
    if (props.year && verifyYear(props.year)) {
        return year === props.year
    }
}

// 检测当前年是否是选择的起始或者终止年
const checkStartOrEnd = (year: number) => {
    return selectStartAndEnd.value.some(item => {
        return year === item
    })
}

// 检测年是否是当前年
const checkDefaultYear = (year: number) => {
    const nowTime = new Date()
    return year === nowTime.getFullYear()
}

// 检测当前年是否是选择的范围中的年
const checkRangeYear = (year: number) => {
    if (selectStartAndEnd.value.length === 2) {
        const sy = selectStartAndEnd.value[0]
        const ey = selectStartAndEnd.value[1]
        const rangeYears = calcRangeYear(sy, ey)
        return rangeYears.some(item => year === item)
    }
}

/**
 * --------------------生命周期--------------------
 */
onMounted(() => {
    initState()
})

// 监听props.year的变化，防抖优化
watch(
    () => props.year,
    debounce(() => {
        initState()
    }, 200)
)
// 监听monthRange的变化
watch(
    yearRange,
    debounce(() => {
        if (verifyYearRange()) {
            initRangeState()
        } else {
            if (yearRangeIsBlank()) {
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
                return a - b
            })
            // 同步年份数据，使面板进行跳转到选择的开始年份
            year.value = selectStartAndEnd.value[0]
            loadData()
            // 通知父组件改变状态
            emit('changeYearRange', selectStartAndEnd.value, format)
        }
    },
    { deep: true }
)
/**
 * --------------------事件处理--------------------
 */
// 年的范围-10
const yearsSub = () => {
    yearStart.value -= 10
    yearEnd.value -= 10
}
// 年的范围+10
const yearsAdd = () => {
    yearStart.value += 10
    yearEnd.value += 10
}
// 改变年份事件
const handleCellClick = (y: number) => {
    // 如果是范围选择
    if (isRangePicker && props.src === 'year') {
        if (selectStartAndEnd.value.length === 2) {
            selectStartAndEnd.value = []
        }
        selectStartAndEnd.value.push(y)
        return
    }
    year.value = y
    loadData()
    switch (props.src) {
        case 'year':
            // 通知DatePicker组件修改year
            emit('changeYear', y, format)
            break
        case 'month':
            // 通知MonthPanel组件修改year
            emit('changeYearByMonth', y)
            break
        case 'date':
            // 通知DatePanel组件跳转到月面板
            emit('changeYearByDate', y)
            break
    }
}
/**
 * --------------------向外导出--------------------
 */
// 用于时间校准
defineExpose({
    year
})
</script>

<style lang="scss" scoped>
.year-panel {
    width: 320px;
    font-family: '楷体';
    font-size: 16px;
    font-weight: 600;
}

.year-range-panel {
    width: 640px;
    display: flex;

    .left-box {
        width: 320px;

        .panel-header {
            flex-direction: row-reverse;
            padding: 16px 36px 8px 36px;
        }
    }

    .right-box {
        width: 320px;

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

    .year-cell {
        box-sizing: border-box;
        flex-shrink: 0;
        width: 100px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        cursor: pointer;

        &:first-child span,
        &:last-child span {
            color: #aaa !important;
            background-color: #fff !important;
        }

        span {
            padding: 10px;
            transition: all 0.2s;
            border-radius: 100%;
        }

        &:hover span {
            background-color: #eee;
            color: #4096ff;
        }
    }

    /* 选中年的样式 */
    .year-selected {
        background-color: #4096ff !important;
        color: #fff !important;
    }

    /* 今年默认的样式 */
    .year-default {
        border: 1px solid #4096ff;
    }

    /* 选中年份范围中的样式 */
    .year-range {
        background-color: #eee;
        color: #f56c6c;
    }
}
</style>
