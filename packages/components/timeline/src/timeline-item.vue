<template>
    <li :class="itemClasses">
        <div :class="[n('--tail')]"></div>
        <!-- 没有dot插槽时展示 -->
        <div v-if="!slots.dot" :class="dotClasses" :style="dotStyles"></div>
        <div v-if="slots.dot" :class="[n('--dot--customer')]">
            <slot name="dot" />
        </div>
        <div :class="[(type === 'message' && n('--message')) || n('--wrapper')]">
            <div>
                <div v-if="timestamp && timeplace === 'top'" :class="[n('--timestamp')]">
                    {{ timestamp }}
                </div>
                <div :class="[n('--content')]">
                    <slot name="default" />
                </div>
                <div v-if="timestamp && timeplace === 'bottom'" :class="[n('--timestamp')]">
                    {{ timestamp }}
                </div>
            </div>
        </div>
    </li>
</template>
<script lang="ts">
export default {
    name: 'kl-timeline-item'
}
</script>
<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { timelineItemProps } from './type/timeline-item'
import { defineProps, useSlots, inject, computed, CSSProperties } from 'vue'
import './style/timelineitem.scss'
const { n } = createNamespace('timeline-item')
const props = defineProps(timelineItemProps)
const slots: any = useSlots()

const mode: any = inject('mode', 'left')
const type: any = inject('type', 'nomal')
//mode方位
const itemClasses = computed(() => {
    let classes: any[] = [n()]
    if (mode === 'right') {
        classes.push(n('--right'))
    } else if (mode === 'center') {
        classes.push(n('--center'))
    } else {
        classes.push(n('--left'))
    }
    return classes
})
//空心实心，尺寸
const dotClasses = computed(() => {
    let classes: any[] = []
    classes.push(n(`--dot`))
    if (props.dotsize === 'large') {
        classes.push(n(`--dot--large`))
    } else {
        classes.push(n(`--dot--normal`))
    }
    //是空心的
    if (!props.dotsolid) {
        if (props.dottype) {
            classes.push(n(`--dot--blank--${props.dottype}`))
        } else {
            classes.push(n(`--dot--blank--default`))
        }
        //是实心的
    } else {
        if (props.dottype) {
            classes.push(n(`--dot--solid--${props.dottype}`))
        } else {
            classes.push(n(`--dot--solid--default`))
        }
    }

    return classes
})
//dotcolor
const dotStyles = computed(() => {
    let styles: CSSProperties = {} //ts定义为css样式类型
    if (props.dotcolor) {
        if (props.dotsolid) {
            //实心的情况
            styles.borderColor = `${props.dotcolor}`
            styles.backgroundColor = `${props.dotcolor}`
        } else {
            styles.borderColor = `${props.dotcolor}`
        }
    }
    return styles
})
</script>
<style></style>
