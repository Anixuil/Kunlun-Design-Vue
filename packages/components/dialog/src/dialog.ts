import type { PropType } from 'vue'

export const modeValidator = (mode: string): boolean => {
    return ['kunlun', 'default'].includes(mode)
}

export const positionValidator = (position: string): boolean => {
    return ['left', 'center', 'right'].includes(position)
}

export const DialogProps = {
    //对话框显示与隐藏
    modelValue: Boolean,
    //对话框模式
    mode: String as PropType<'default' | 'kunlun'>,
    //对话框位置
    left: Boolean,
    right: Boolean,
    center: Boolean,
    //对话框内容对齐方式
    cxtPosition: String as PropType<'left' | 'center' | 'right'>,
    //头部对齐方式
    headPosition: String as PropType<'left' | 'center' | 'right'>,
    //底部对齐方式
    footPosition: String as PropType<'left' | 'center' | 'right'>,
    //对话框背景颜色
    bgColor: String,
    //是否显示关闭按钮
    showClose: {
        type: Boolean,
        default: true
    },
    //对话框关闭前的回调函数
    beforeClose: Function,
    //是否点击模态框能关闭
    closeOnClickModal: {
        type: Boolean,
        default: true
    }
}
