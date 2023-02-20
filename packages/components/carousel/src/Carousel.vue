<template>
    <div class="kl-carousel">
        <!-- 内容 -->
        <div
            class="kl-carousel-container"
            :style="{
                width: count * 100 + '%',
                left: -(pageIndex - 1) * 100 + '%'
            }"
        >
            <slot></slot>
        </div>

        <!-- 上一页、下一页按钮 -->
        <div class="kl-carousel-btn">
            <button class="arrow arrow-left" @click="prevPage">
                <KlArrowLineLeft />
            </button>
            <button class="arrow arrow-right" @click="nextPage">
                <KlArrowLineRight />
            </button>
        </div>

        <!-- 指示器 -->
        <CarouselIndicator v-model="pageIndex" :count="count"></CarouselIndicator>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, useSlots } from 'vue'
import { KlArrowLineLeft, KlArrowLineRight } from '@kl-design/icons'
import '@kl-design/icons/style.css'
import CarouselIndicator from './cpns/CarouselIndicator.vue'
/**
 * --------------------组件通信--------------------
 */
export interface IPropsType {
    width?: number
    height?: number
    initialIndex?: number
}

const props = withDefaults(defineProps<IPropsType>(), {
    width: 600,
    height: 300,
    initialIndex: 1
})

/**
 * --------------------组件状态--------------------
 */
const pageIndex = ref(props.initialIndex)
// 获取插槽内容中的元素数量
const slots = useSlots()
const count = slots.default ? slots.default().length : 0
// 宽度和高度
const cwidth = computed(() => props.width + 'px')
const cheight = computed(() => props.height + 'px')
/**
 * --------------------功能函数--------------------
 */
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

defineOptions({
    name: 'KlCarousel'
})
</script>

<style lang="scss" scoped>
.kl-carousel {
    width: v-bind(cwidth);
    height: v-bind(cheight);
    position: relative;
    overflow: hidden;
}

.kl-carousel-container {
    display: flex;
    position: relative;
    transition: left 0.5s ease 0s;

    & > :slotted(*) {
        flex: 1;
    }
}

.kl-carousel-btn {
    position: absolute;
    width: 100%;
    top: 50%;
    display: flex;
    justify-content: space-between;
    margin-top: -18px;

    .arrow {
        cursor: pointer;
        width: 36px;
        height: 36px;
        border-radius: 18px;
        color: #fff;
        background: rgba(30, 45, 60, 0.1);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 0;
        outline: 0;
        transition: background-color 0.3s ease;

        &:hover {
            background: rgba(30, 45, 60, 0.2);
        }

        &.arrow-left {
            margin-left: 20px;
        }

        &.arrow-right {
            margin-right: 20px;
        }
    }
}
</style>
