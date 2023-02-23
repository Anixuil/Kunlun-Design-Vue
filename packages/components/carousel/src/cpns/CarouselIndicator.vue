<template>
    <div class="kl-carousel-indicator">
        <div
            :class="['kl-carousel-indicator-item', { active: modelValue === item }]"
            v-for="item in count"
            :key="item"
            @click="trigger === 'click' ? setPageIndex(item) : ''"
            @mouseenter="trigger === 'hover' ? setPageIndex(item) : ''"
        ></div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

/**
 * --------------------组件通信--------------------
 */
export interface IPropsType {
    modelValue: number
    count: number
    trigger: string
    indicatorPosition: string
}
export interface IEmitType {
    (e: 'update:modelValue', value: number): void
    (e: 'on-setPageIndex', value: number): void
}
const props = defineProps<IPropsType>()
const emit = defineEmits<IEmitType>()
//点击跳转到对应页面
const setPageIndex = (index: number) => {
    emit('on-setPageIndex', index)
}
//处理指示器的位置
let cBottom = computed(() => {
    return props.indicatorPosition === 'outside' ? 0 + 'px' : 32 + 'px'
})
//处理指示器的隐藏
let cDisplay = computed(() => {
    return props.indicatorPosition === 'none' ? 'none' : 'flex'
})
</script>

<style lang="scss" scoped>
.kl-carousel-indicator {
    display: v-bind(cDisplay);
    position: absolute;
    bottom: v-bind(cBottom);
    justify-content: center;
    width: 100%;

    .kl-carousel-indicator-item {
        cursor: pointer;
        width: 6px;
        height: 6px;
        border-radius: 3px;
        margin-right: 8px;
        background: rgba(30, 45, 60, 0.2);

        &.active {
            width: 12px;
            background: #5e7ce0;
            transition: all 0.3s ease;
        }
    }
}
</style>
