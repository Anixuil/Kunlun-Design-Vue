<template>
    <Transition name="wrapper">
        <!-- 容器模态框 -->
        <div class="kl-dialog-wrapper" v-if="visiable" @click.self="handleModalClose">
            <!-- 对话框主体 -->
            <div
                :class="[
                    n(),
                    mode && n(`--${mode}`),
                    left && 'dialog-left',
                    right && 'dialog-right',
                    center && 'dialog-center'
                ]"
                :style="{
                    ...style
                }"
            >
                <!-- 对话框头部 -->
                <div class="kl-dialog-header">
                    <slot name="header" :close="handleClose"></slot>
                    <KlOtherError v-if="showClose" @click="handleClose" />
                </div>
                <!-- 对话框内容 -->
                <div :class="['kl-dialog-container', cxtPosition && n(`--${cxtPosition}`)]">
                    <slot></slot>
                </div>
                <!-- 对话框底部 -->
                <div
                    :class="['kl-dialog-footer', footPosition && n(`--${footPosition}`)]"
                    v-if="$slots.footer"
                >
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { DialogProps, modeValidator, positionValidator } from './dialog'
import { computed } from 'vue'
import './dialog.scss'

const props = defineProps(DialogProps)
const emit = defineEmits(['update:modelValue'])
//对话框显示与隐藏
const visiable = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})
//对话框mode属性
const mode = computed(() => {
    if (props.mode === undefined) return 'default'
    return modeValidator(props.mode) ? props.mode : 'default'
})

//自定义背景颜色
const style = computed(() => {
    return {
        'background-color': props.bgColor
    }
})
//复用关闭方法
const done = () => {
    visiable.value = false
}
//关闭之前的回调函数
const handleClose = () => {
    if (props.beforeClose !== undefined) {
        props.beforeClose(done)
    } else {
        done()
    }
}
//点击模态框关闭
const handleModalClose = () => {
    if (props.closeOnClickModal) {
        if (props.beforeClose !== undefined) {
            props.beforeClose(done)
        } else {
            done()
        }
    }
}
//内容对齐方式
const cxtPosition = computed(() => {
    if (props.cxtPosition === undefined) return 'left'
    return positionValidator(props.cxtPosition) ? props.cxtPosition : 'left'
})
//尾部对齐方式
const footPosition = computed(() => {
    if (props.footPosition === undefined) return 'center'
    return positionValidator(props.footPosition) ? props.footPosition : 'center'
})

defineOptions({
    name: 'KlDialog'
})

const { n } = createNamespace('dialog')
</script>

<style scoped lang="scss">
// 容器过渡动画
.wrapper-enter-active,
.wrapper-leave-active {
    transition: all 0.3s ease-in-out;
}

.wrapper-enter-from,
.wrapper-leave-to {
    opacity: 0;

    .kl-dialog {
        &.kl-dialog--kunlun {
            left: 150%;
            opacity: 0;
            transform: translate(-50%, -50%);
        }

        &.kl-dialog--default {
            transform: translate(-50%, -75%);
        }
    }
}

.wrapper-leave-to {
    .kl-dialog {
        &.kl-dialog--kunlun {
            left: -50%;
        }
    }
}
</style>
