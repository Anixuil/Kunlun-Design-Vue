import type { PropType } from 'vue'

export const modeValidator = (mode: string): boolean => {
    return ['kunlun', 'default'].includes(mode)
}

export const DialogProps = {
    //对话框显示与隐藏
    modelValue: Boolean,
    //对话框的宽度自定义
    width: String,
    //对话框模式
    mode: {
        type: String as PropType<'default' | 'kunlun'>,
        default: 'default'
    },
    //对话框位置
    left: String,
    top: String,
    //对话框内容对齐方式
    cxtPosition: {
        type: String as PropType<'left' | 'center' | 'right'>,
        default: 'center'
    },
    //底部对齐方式
    footPosition: {
        type: String as PropType<'left' | 'center' | 'right'>,
        default: 'center'
    },
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
