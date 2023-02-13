import type { PropType } from 'vue'

type colorObj = {
    color: string
    percentage: number
}

export const ProgressProps = {
    //进度百分比
    percentage: {
        type: Number,
        require: true,
        default: 0,
        validator: (val: Number) => val >= 0 && val <= 100
    },
    //环形大小
    cw: {
        type: Number,
        default: 125
    },
    //进度条类型
    type: {
        type: String as PropType<'line' | 'circle' | 'dashboard'>,
        default: 'line'
    },
    textInside: {
        type: Boolean,
        default: false
    },
    //进度条宽度
    storkeWidth: {
        type: Number,
        default: 10
    },
    //进度条当前状态
    status: String as PropType<'success' | 'exception' | 'warning'>,
    //是否为动画进度条
    indeterminate: {
        type: Boolean,
        default: false
    },
    //动画进度条速度
    duration: {
        type: Number,
        default: 0.3
    },
    //进度条颜色
    color: {
        type: [String, Array<colorObj>],
        default: ''
    },
    //条形进度条宽度
    width: {
        type: String,
        default: '300px'
    },
    //是否显示进度条文字内容
    showText: {
        type: Boolean,
        default: true
    },
    //进度条的形状
    storkeLineCap: {
        type: String as PropType<'round' | 'square'>,
        default: 'round'
    },
    //指定文字内容
    format: Function
}
