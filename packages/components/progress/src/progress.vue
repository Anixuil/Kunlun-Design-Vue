<template>
    <div
        :class="[
            n(),
            status && n(`--${status}`),
            type && n(`--${type}`),
            indeterminate && n(`--animate`)
        ]"
        :style="{ ...wrapperStyle }"
        v-if="type === 'line'"
    >
        <div
            :class="['progress-line', storkeLineCap && n(`--${storkeLineCap}`)]"
            :style="{ ...lineStyle }"
        >
            <div class="progress-line-slider" :style="{ ...sliderStyle }">
                <span v-if="isShow" class="progress-line-innertext">{{ percentage }}</span>
                <slot v-if="storkeWidth > 20"></slot>
            </div>
        </div>
        <span
            v-if="!textInside && showText && !$slots.default && !status"
            class="progress-line-outtertext"
            >{{ percentage }}</span
        >
        <slot v-if="storkeWidth <= 20"></slot>
        <KlOtherCorrectCircleFill
            v-if="status === 'success' && !textInside"
            class="progress-line-outtertext"
        />
        <KlOtherAlertFill
            v-if="status === 'warning' && !textInside"
            class="progress-line-outtertext"
        />
        <KlOtherError
            v-if="status === 'exception' && !textInside"
            class="progress-line-outtertext"
        />
    </div>
    <div
        :class="[n(), status && n(`--${status}`), type && n(`--${type}`)]"
        :style="{ ...circleStyle }"
        v-else
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            :style="{ width: circleW, height: circleW }"
            :viewBox="viewBox"
        >
            <path
                class="circle-bg"
                :d="trackPath"
                :style="type === 'circle' ? '' : bgDashPathStyle"
                :stroke-linecap="storkeLineCap"
                :stroke-width="relativeStrokeWidth"
                fill="none"
            />
            <path
                class="circle-path"
                :d="trackPath"
                :style="circlePathStyle"
                v-if="type === 'circle'"
                :stroke-linecap="storkeLineCap"
                :stroke-width="relativeStrokeWidth"
                fill="none"
            />
            <path
                class="circle-path"
                :d="trackPath"
                :style="dashboardPathStyle"
                v-else
                fill="none"
                :stroke-width="relativeStrokeWidth"
                stroke-linecap="round"
            ></path>
        </svg>
        <div>
            <slot :percentage="percentage"></slot>
        </div>
        <div class="progress-circle-text" v-if="!status && !slotDefault">{{ percentage }}</div>
        <KlOtherCorrectCircleFill
            v-if="status === 'success' && !slotDefault"
            class="progress-circle-text"
        />
        <KlOtherAlertFill
            v-if="status === 'warning' && !slotDefault"
            class="progress-circle-text"
        />
        <KlOtherError v-if="status === 'exception' && !slotDefault" class="progress-circle-text" />
    </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import './progress.scss'
import { ProgressProps } from './progress'
import { computed, useSlots } from 'vue'
import { KlOtherCorrectCircleFill, KlOtherError, KlOtherAlertFill } from '@kl-design/icons'

const props = defineProps(ProgressProps)

const slotDefault = computed(() => {
    return !!useSlots().default
})

//监听百分比
const percentage = computed(() => {
    if (props.format) {
        return props.format(props.percentage)
    }
    return props.percentage + '%'
})

const color = computed(() => {
    if (typeof props.color === 'object' && props.color instanceof Array) {
        let index = props.color.findIndex((item: any, index, arr) => {
            if (index == arr.length - 1) {
                return true
            }
            return (
                props.percentage >= arr[index].percentage &&
                props.percentage < arr[index + 1].percentage
            )
        })
        let color = ''
        if (index != -1) {
            color = props.color[index].color
        }
        return color
    } else {
        return props.color
    }
})

//容器样式
const wrapperStyle = computed(() => {
    //判断width是纯数字还是带单位的
    let width = props.width
    if (!isNaN(Number(width))) {
        width = width + 'px'
    }
    return {
        width: `${width}`,
        '--progress-color': color.value,
        '--progress-duration': `${props.duration}s`
    }
})
const circleStyle = computed(() => {
    return {
        '--progress-color': color.value,
        '--progress-duration': `${props.duration}s`
    }
})

//线性样式
const lineStyle = computed(() => {
    return {
        height: `${props.storkeWidth}px`
    }
})

//进度条样式
const sliderStyle = computed(() => {
    return {
        width: props.percentage + '%'
    }
})

//监听是否显示
const isShow = computed(() => {
    return props.textInside && props.storkeWidth >= 20 && props.showText && !slotDefault.value
})

//环形进度条属性配置
// svg 大小
const circleW = computed(() => {
    return props.cw + 'px'
})
const viewBox = computed(() => {
    return `
        ${props.cw / 2} ${props.cw / 2} ${props.cw} ${props.cw}
    `
})
const trackPath = computed(() => {
    const radius = (props.cw - props.storkeWidth * 2) / 2
    return `
        M ${props.cw} ${props.cw}
        m 0 -${radius}
        a ${radius} ${radius} 0 1 1 0 ${radius * 2}
        a ${radius} ${radius} 0 1 1 0 -${radius * 2}
    `
})
const relativeStrokeWidth = computed(() => {
    return (props.storkeWidth * 100) / props.cw
})
const perimeter = computed(() => {
    const radius = (props.cw - props.storkeWidth * 2) / 2
    return 2 * Math.PI * radius
})
const circlePathStyle = computed(() => {
    return {
        strokeDasharray: `${perimeter.value}px,${perimeter.value}px`,
        strokeDashoffset: (1 - props.percentage / 100) * perimeter.value + 'px'
    }
})
const dashPerimeter = computed(() => {
    const radius = (props.cw - props.storkeWidth * 2) / 2
    return 2 * Math.PI * radius
})
const bgDashPathStyle = computed(() => {
    return {
        strokeDasharray: `${dashPerimeter.value}px,${dashPerimeter.value}px`,
        strokeDashoffset: (1 - 100 / 145) * dashPerimeter.value + 'px'
    }
})
const dashboardPathStyle = computed(() => {
    return {
        strokeDasharray: `${dashPerimeter.value}px,${dashPerimeter.value}px`,
        strokeDashoffset: (1 - props.percentage / 145) * dashPerimeter.value + 'px'
    }
})

defineOptions({
    name: 'KlProgress'
})

const { n } = createNamespace('progress')
</script>

<style scoped></style>
