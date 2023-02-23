<template>
    <div class="kl-carousel" @mouseenter="timeStop" @mouseleave="timeStar">
        <!-- 内容 -->
        <div
            class="kl-carousel-container"
            :style="{
                width: count * 100 + '%',
                left: -(pageIndex - 1) * 100 + '%'
            }"
        >
            <slot></slot>
            <!-- 上一页、下一页按钮 -->
        </div>
        <button
            class="kl-carousel-arrow kl-carousel-arrow-left"
            @click="prevPage"
            v-show="arrow === 'always' || arrow === 'hover'"
        >
            <KlArrowLineLeft />
        </button>
        <button
            class="kl-carousel-arrow kl-carousel-arrow-right"
            @click="nextPage"
            v-show="arrow === 'always' || arrow === 'hover'"
        >
            <KlArrowLineRight />
        </button>

        <!-- 指示器 -->
        <CarouselIndicator
            :indicatorPosition="indicatorPosition"
            :trigger="trigger"
            v-model="pageIndex"
            :count="count"
            @on-set-page-index="setPageIndex"
        ></CarouselIndicator>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, useSlots, onUnmounted } from 'vue'
import { carouselProps } from './type'
import { KlArrowLineLeft, KlArrowLineRight } from '@kl-design/icons'
import '@kl-design/icons/style.css'
import CarouselIndicator from './cpns/CarouselIndicator.vue'
defineOptions({
    name: 'KlCarousel'
})
const props = defineProps(carouselProps)

const pageIndex = ref(props.initialIndex)
// 获取插槽内容中的元素数量
const slots = useSlots()
const count = slots.default ? slots.default().length : 0
// 宽度和高度
const cwidth = computed(() => props.width + 'px')
const cheight = computed(() => props.height + 20 + 'px')
/**
 * --------------------功能函数--------------------
 */
// //loop循环播放
// // 初始化复制第一张放最后，最后一张放第一张前
// onMounted(() => {
//     let doms = document.querySelector('.kl-carousel-container')
//     //复制
//     let firstItem = doms?.firstElementChild?.cloneNode(true)
//     let lastItem = doms?.lastElementChild?.cloneNode(true)
//     doms?.appendChild(firstItem as Node) //在最后加第一张
//     doms?.insertBefore(lastItem as Node, doms.firstElementChild) //在第一张前面加最后一张
//     console.log(doms?.children)
// })
// 上一页
const prevPage = () => {
    pageIndex.value === 1 ? (pageIndex.value = count) : (pageIndex.value -= 1)
}
// 下一页
const nextPage = () => {
    pageIndex.value === count ? (pageIndex.value = 1) : (pageIndex.value += 1)
}
// 跳到第几页
const setPageIndex = (index: number) => {
    pageIndex.value = index
}

//自动播放
let timer: any

const timeStar = () => {
    if (props.autoplay && !timer) {
        timer = setInterval(() => {
            nextPage()
        }, props.interval)
    }
}
const timeStop = () => {
    if (props.autoplay && timer) {
        clearInterval(timer)
        timer = null
    }
}
if (props.autoplay) {
    timeStar()
}
onUnmounted(() => {
    timeStop()
})

//箭头的显示时机
//透明度
const aOpacity = computed(() => {
    if (props.arrow === 'always') {
        return 100 + '%'
    } else {
        return 0
    }
})
const aLeftRight = computed(() => {
    if (props.arrow === 'always') {
        return 20 + 'px'
    } else {
        return -35 + 'px'
    }
})
</script>

<style lang="scss" scoped>
.kl-carousel {
    width: v-bind(cwidth);
    height: v-bind(cheight);
    position: relative;
    overflow: hidden;
    &:hover .kl-carousel-arrow-left {
        opacity: 100%;
        left: 20px;
        transition: all 0.3s linear;
    }
    &:hover .kl-carousel-arrow-right {
        opacity: 100%;
        right: 20px;
        transition: all 0.3s linear;
    }
}

.kl-carousel-container {
    display: flex;
    position: relative;
    transition: left 0.5s ease 0s;

    & > :slotted(*) {
        flex: 1;
    }
}
.kl-carousel-arrow {
    cursor: pointer;
    width: 36px;
    height: 36px;
    border-radius: 18px;
    color: #fff;
    background: rgba(30, 45, 60, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    outline: 0;
    transition: all 0.3s ease;
    position: absolute;
    top: calc(50% - 20px);
    transform: translateY(-50%);

    &:hover {
        background: rgba(30, 45, 60, 0.2);
    }

    &.kl-carousel-arrow-left {
        opacity: v-bind(aOpacity);
        left: v-bind(aLeftRight);
    }
    &.kl-carousel-arrow-right {
        opacity: v-bind(aOpacity);
        right: v-bind(aLeftRight);
    }
}
</style>
