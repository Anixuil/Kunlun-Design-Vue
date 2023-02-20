<template>
    <div class="time-panel">
        <div class="header">
            <span>{{ curTime }}</span>
        </div>
        <div class="panel-main">
            <div class="hour-list" ref="hourRef">
                <div
                    :class="[
                        'hour-item',
                        { 'time-selected': checkSelectTime('hour', index) },
                        { 'time-unselect': checkUnselectTime('hour', index) }
                    ]"
                    v-for="(hour, index) in hourList"
                    :key="hour"
                    @click="changeTime('hour', index)"
                >
                    {{ hour }}
                </div>
            </div>
            <div class="minute-list" ref="minuteRef">
                <div
                    :class="[
                        'minute-item',
                        { 'time-selected': checkSelectTime('minute', index) },
                        { 'time-unselect': checkUnselectTime('minute', index) }
                    ]"
                    v-for="(minute, index) in minuteList"
                    :key="minute"
                    @click="changeTime('minute', index)"
                >
                    {{ minute }}
                </div>
            </div>
            <div class="second-list" ref="secondRef">
                <div
                    :class="[
                        'second-item',
                        { 'time-selected': checkSelectTime('second', index) },
                        { 'time-unselect': checkUnselectTime('second', index) }
                    ]"
                    v-for="(second, index) in secondList"
                    :key="second"
                    @click="changeTime('second', index)"
                >
                    {{ second }}
                </div>
            </div>
        </div>
        <div class="footer" @click="handleCurTimeClick">{{ transformLang('此刻') }}</div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, inject, watch } from 'vue'
import type { Ref } from 'vue'
import { debounce, parseTime, ch2en } from '../utils'
/**
 * --------------------类型定义--------------------
 */
export interface IPropsType {
    formatStr?: string
}
/**
 * --------------------组件通信--------------------
 */
const emit = defineEmits<{
    (e: 'goToday', hour: number, minute: number, second: number, onlyTime: boolean): void
}>()
const props = defineProps<IPropsType>()
// DatePicker组件的input值
const datetime = inject('datetime') as Ref<string>
// 不可选日期时间
const disabledTime = inject<Array<number[]>>('disabledTime') || []
// 语言
const lang = inject<'ch' | 'en'>('lang') as 'ch' | 'en'

/**
 * --------------------组件状态--------------------
 */
// 小时数据
const hourList = new Array(24).fill(0).map((_, index) => String(index).padStart(2, '0'))
// 分钟数据
const minuteList = new Array(60).fill(0).map((_, index) => String(index).padStart(2, '0'))
// 秒数据
const secondList = minuteList
// 当前小时
const curHour = ref<number>(0)
// 当前分钟
const curMinute = ref<number>(0)
// 当前秒钟
const curSecond = ref<number>(0)
// 当前时间
const curTime = computed(() => {
    return (
        String(curHour.value).padStart(2, '0') +
        ':' +
        String(curMinute.value).padStart(2, '0') +
        ':' +
        String(curSecond.value).padStart(2, '0')
    )
})
// 获取dom元素
const hourRef = ref<HTMLDivElement>()
const minuteRef = ref<HTMLDivElement>()
const secondRef = ref<HTMLDivElement>()

/**
 * --------------------功能函数--------------------
 */
// 初始化数据
const initState = () => {
    if (datetime.value && props.formatStr) {
        const timeObj = parseTime(datetime.value, props.formatStr)
        if (timeObj) {
            const { hour, minute, second } = timeObj
            curHour.value = hour
            curMinute.value = minute
            curSecond.value = second
            autoSlide('hour')
            autoSlide('minute')
            autoSlide('second')
        }
    }
}

// 将选择的时间标注为true
const checkSelectTime = (timeType: 'hour' | 'minute' | 'second', value: number) => {
    switch (timeType) {
        case 'hour':
            return curHour.value === value
        case 'minute':
            return curMinute.value === value
        case 'second':
            return curSecond.value === value
    }
}

// 不可选日期时间
const checkUnselectTime = (timeType: 'hour' | 'minute' | 'second', value: number) => {
    if (!disabledTime.length) return false
    const [hours, minutes, seconds] = disabledTime
    switch (timeType) {
        case 'hour':
            return hours.some(hour => value === hour)
        case 'minute':
            return minutes.some(minute => value === minute)
        case 'second':
            return seconds.some(second => value === second)
    }
}

// 选择时间，自动滚动效果
const autoSlide = (slideType: 'hour' | 'minute' | 'second') => {
    switch (slideType) {
        case 'hour':
            if (hourRef.value) {
                emit('goToday', curHour.value, curMinute.value, curSecond.value, true)
                hourRef.value.scrollTop = 30 * curHour.value
            }
            break
        case 'minute':
            if (minuteRef.value) {
                emit('goToday', curHour.value, curMinute.value, curSecond.value, true)
                minuteRef.value.scrollTop = 30 * curMinute.value
            }
            break
        case 'second':
            if (secondRef.value) {
                emit('goToday', curHour.value, curMinute.value, curSecond.value, true)
                secondRef.value.scrollTop = 30 * curSecond.value
            }
            break
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

// 监听datetime的变化
watch(
    datetime,
    debounce(() => {
        initState()
    }, 200)
)

/**
 * --------------------事件处理--------------------
 */
// 改变时间
const changeTime = (timeType: 'hour' | 'minute' | 'second', value: number) => {
    switch (timeType) {
        case 'hour':
            curHour.value = value
            autoSlide('hour')
            break
        case 'minute':
            curMinute.value = value
            autoSlide('minute')
            break
        case 'second':
            curSecond.value = value
            autoSlide('second')
            break
    }
}
// 此刻的点击事件
const handleCurTimeClick = () => {
    // 改变时间
    const nowTime = new Date()
    curHour.value = nowTime.getHours()
    autoSlide('hour')
    curMinute.value = nowTime.getMinutes()
    autoSlide('minute')
    curSecond.value = nowTime.getSeconds()
    autoSlide('second')
    // 通知DatePanel组件改变日期
    emit('goToday', curHour.value, curMinute.value, curSecond.value, false)
}

/**
 * --------------------向外暴露--------------------
 */
defineExpose({
    hour: curHour,
    minute: curMinute,
    second: curSecond
})
</script>

<style lang="scss" scoped>
/* 选中的时间的样式 */
.time-selected {
    background-color: #4096ff !important;
    color: #fff !important;
}

/* 不可选时间样式 */
.time-unselect {
    background-color: #f5f5f5;
    color: #b8b8b8;
    cursor: auto;
    pointer-events: none;
}

.time-panel {
    display: block;
    height: 374px;
    width: 200px;

    .header {
        box-sizing: border-box;
        height: 54px;
        line-height: 54px;
        text-align: center;
        border-bottom: 1px solid #eee;
        font-size: 18px;
    }

    .panel-main {
        display: flex;
        height: 280px;

        & > div {
            flex: 1;
            overflow: auto;
            scroll-behavior: smooth;

            /* 滚动条样式 */
            &::-webkit-scrollbar {
                width: 5px;
            }

            &::-webkit-scrollbar-track {
                background-color: #eee;
            }

            & > div {
                height: 30px;
                line-height: 30px;
                text-align: center;
                cursor: pointer;

                &:last-child {
                    margin-bottom: 250px;
                }

                &:hover {
                    background-color: #eee;
                    color: #4096ff;
                }
            }
        }
    }

    .footer {
        box-sizing: border-box;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-top: 1px solid #eee;
        font-size: 16px;
        cursor: pointer;

        &:hover {
            color: #4096ff;
        }
    }
}
</style>
