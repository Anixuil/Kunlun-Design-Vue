<template>
    <Transition :name="transitionName">
        <div v-if="modelValue" :class="['kl-drawer', direClass, drawerClass]">
            <slot></slot>
        </div>
    </Transition>
    <Transition name="overlay">
        <div v-if="modal && modelValue" :class="['kl-overlay', modalClass]" @click="onClose"></div>
    </Transition>
</template>

<script lang="ts" setup>
import { computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { lockScroll, unlockScroll, listenEsc, unlistenEsc } from './utils'
/**
 * --------------------组件通信--------------------
 */
export interface IPropsType {
    modelValue: boolean
    size?: string | number
    direction?: 'rtl' | 'ltr' | 'ttb' | 'btt'
    model?: boolean
    lockScroll?: boolean
    modal?: boolean
    modalClass?: string
    drawerClass?: string
    zIndex?: number
    closeEsc?: boolean
}
export interface IEmitType {
    (e: 'update:modelValue', value: boolean): void
}
const props = withDefaults(defineProps<IPropsType>(), {
    size: '30%',
    direction: 'rtl',
    model: true,
    lockScroll: true,
    modal: true,
    zIndex: 1000,
    closeEsc: true
})
const emit = defineEmits<IEmitType>()
/**
 * --------------------组件状态--------------------
 */
const cSize = computed(() => {
    const init = props.direction === 'ltr' || props.direction === 'rtl' ? 'vw' : 'vh'
    return typeof props.size === 'number' ? props.size + 'px' : props.size.replace('%', init)
})
// 展开方向
const direClass = computed(() => {
    switch (props.direction) {
        case 'ltr':
            return 'drawer-ltr'
        case 'ttb':
            return 'drawer-ttb'
        case 'btt':
            return 'drawer-btt'
        default:
            return 'drawer-rtl'
    }
})
// 过渡方向: lr: 左右  tb: 上下
const transitionName = computed(() => {
    switch (props.direction) {
        case 'ltr':
        case 'rtl':
            return 'lr'
        default:
            return 'tb'
    }
})
// drawer的z-index
const drawerZX = computed(() => props.zIndex + 1)
/**
 * --------------------事件处理--------------------
 */
// 关闭抽屉
const onClose = () => {
    emit('update:modelValue', false)
}
/**
 * --------------------生命周期--------------------
 */
// 监听modelValue的变化
watch(
    () => props.modelValue,
    newValue => {
        if (props.lockScroll) {
            newValue ? lockScroll() : unlockScroll()
        }
    },
    {
        immediate: true
    }
)
// 挂载
onMounted(() => {
    if (props.closeEsc) listenEsc(onClose)
})
// 卸载之前
onBeforeUnmount(() => {
    if (props.closeEsc) unlistenEsc(onClose)
})
</script>

<style lang="scss" scoped>
/* 禁止底层滚动 */
:global(.lock-scroll) {
    position: fixed;
    top: 0;
    height: 100%;
    overflow: hidden;
}
.drawer-rtl {
    top: 0;
    right: 0;
    height: 100vh;
    width: v-bind(cSize);
}
.drawer-ltr {
    top: 0;
    left: 0;
    height: 100vh;
    width: v-bind(cSize);
}
.drawer-ttb {
    left: 0;
    top: 0;
    height: v-bind(cSize);
    width: 100vw;
}
.drawer-btt {
    left: 0;
    bottom: 0;
    height: v-bind(cSize);
    width: 100vw;
}
.kl-drawer {
    position: fixed;
    background-color: #fff;
    overflow: auto;
    z-index: v-bind(drawerZX);
}
/* 遮罩 */
.kl-overlay {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: v-bind(zIndex);
}

/* 水平方向 */
.lr-enter-active,
.lr-leave-active {
    transition: width 0.4s ease, opacity 0.4s ease;
}
.lr-enter-from,
.lr-leave-to {
    width: 0;
    opacity: 0;
}
/* 垂直方向 */
.tb-enter-active,
.tb-leave-active {
    transition: heigth 0.4s ease, opacity 0.4s ease;
}
.tb-enter-from,
.tb-leave-to {
    height: 0;
    opacity: 0;
}

/* 遮罩层 */
.overlay-enter-active,
.overlay-leave-active {
    transition: opacity 0.4s ease;
}

.overlay-enter-from,
.overlay-leave-to {
    opacity: 0;
}
</style>
