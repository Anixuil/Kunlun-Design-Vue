<template>
    <Transition name="wrapper">
        <!-- 容器模态框 -->
        <div class="kl-dialog-wrapper" v-if="visiable" @click.self="visiable = false">
            <!-- 对话框主体 -->
            <div :class="[n(), mode && n(`--${mode}`)]">
                <!-- 对话框头部 -->
                <div class="kl-dialog-header">
                    <slot name="header"></slot>
                </div>
                <!-- 对话框内容 -->
                <div class="kl-dialog-container">
                    <slot></slot>
                </div>
                <!-- 对话框底部 -->
                <div class="kl-dialog-footer" v-if="$slots.footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { DialogProps, modeValidator } from './dialog'
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

defineOptions({
    name: 'KlDialog'
})

const { n } = createNamespace('dialog')
</script>

<style scoped lang="scss">
// 容器过渡动画
.wrapper-enter-active,
.wrapper-leave-active {
    transition: all 0.3s ease;
}

.wrapper-enter-from,
.wrapper-leave-to {
    opacity: 0;

    .kl-dialog {
        &.kl-dialog--default {
            left: 150%;
            opacity: 0;
        }

        &.kl-dialog--normal {
            transform: translate(-50%, -100%) rotateX(90deg);
        }
    }
}
</style>
