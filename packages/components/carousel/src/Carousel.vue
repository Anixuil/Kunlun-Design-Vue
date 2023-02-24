<template>
    <div class="kl-carousel" @mouseenter="timeStop" @mouseleave="timeStar">
        <!-- 内容 -->
        <div
            class="kl-carousel-container"
            ref="containerRef"
            :style="{ width: (count + 2) * 100 + '%' }"
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
import { ref, computed, useSlots, onUnmounted, onMounted } from 'vue'
import { carouselProps } from './type'
import { KlArrowLineLeft, KlArrowLineRight } from '@kl-design/icons'
import '@kl-design/icons/style.css'
import CarouselIndicator from './cpns/CarouselIndicator.vue'
defineOptions({
    name: 'KlCarousel'
})
// 组件通信
const props = defineProps(carouselProps)
/**
 * --------------------组件状态--------------------
 */
const pageIndex = ref(props.initialIndex)
// 获取插槽内容中的元素数量
const slots = useSlots()
const count = slots.default ? slots.default().length : 0
// 宽度和高度
const cwidth = computed(() => props.width + 'px')
const cheight = computed(() => props.height + 20 + 'px')
const containerRef = ref<HTMLDivElement | null>(null)
// 是否正在滑动
let isActive = false
/**
 * --------------------功能函数--------------------
 */
// 滑动函数
const move = (direction: 'left' | 'right', step = 1) => {
    isActive = true
    // 每16毫秒滚动的距离
    const distance = (props.width / (400 / step)) * 16
    return new Promise(resolve => {
        const containerEl = containerRef.value
        if (!containerEl) return
        // 记录滑动之前的距离
        const initLeft = parseInt(containerEl.style.left)
        // 开始滑动
        const timer = setInterval(() => {
            if (direction === 'right') {
                if (parseInt(containerEl.style.left) - distance <= initLeft - step * props.width) {
                    // 滑动到终点，清除定时器
                    clearInterval(timer)
                    isActive = false
                    containerEl.style.left = initLeft - step * props.width + 'px'
                    resolve(true)
                } else {
                    containerEl.style.left = parseInt(containerEl.style.left) - distance + 'px'
                }
            } else {
                if (parseInt(containerEl.style.left) + distance >= initLeft + step * props.width) {
                    clearInterval(timer)
                    isActive = false
                    containerEl.style.left = initLeft + step * props.width + 'px'
                    resolve(true)
                } else {
                    containerEl.style.left = parseInt(containerEl.style.left) + distance + 'px'
                }
            }
        }, 16)
    })
}
// 上一页
const prevPage = async () => {
    if (isActive) return
    if (pageIndex.value === 1) {
        pageIndex.value = count
        await move('left')
        initIndex()
        return
    }
    pageIndex.value--
    move('left')
}
// 下一页
const nextPage = async () => {
    if (isActive) return
    if (pageIndex.value === count) {
        pageIndex.value = 1
        await move('right')
        initIndex()
        return
    }
    pageIndex.value++
    move('right')
}
// 跳到第几页
const setPageIndex = (index: number) => {
    if (isActive) return
    // 记录跳转之前的页码
    const step = index - pageIndex.value
    const direction = step > 0 ? 'right' : 'left'
    pageIndex.value = index
    move(direction, Math.abs(step))
}

// 初始化continer位置
const initIndex = () => {
    if (containerRef.value) {
        containerRef.value.style.left = -pageIndex.value * props.width + 'px'
    }
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
/**
 *--------------------生命周期--------------------
 */
//loop循环播放
// 初始化复制第一张放最后，最后一张放第一张前
onMounted(() => {
    initIndex()
    //复制
    let firstItem = containerRef.value?.firstElementChild?.cloneNode(true)
    let lastItem = containerRef.value?.lastElementChild?.cloneNode(true)
    containerRef.value?.appendChild(firstItem as Node) //在最后加第一张
    containerRef.value?.insertBefore(lastItem as Node, containerRef.value.firstElementChild) //在第一张前面加最后一张
    console.log(containerRef.value?.children)
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
    position: absolute;

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
