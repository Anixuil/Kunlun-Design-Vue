//存row的props
import { ExtractPropTypes } from 'vue'
export const timelineItemProps = {
    timestamp: {
        string: String,
        default: ''
    },
    timeplace: {
        type: String,
        value: ['top', 'bottom'],
        default: 'bottom'
    },
    center: {
        type: Boolean,
        default: false
    },
    dottype: {
        type: String,
        value: ['primary', 'success', 'warning', 'danger', 'info', 'default']
    },
    dotcolor: {
        type: String
    },
    dotsolid: {
        type: Boolean,
        default: false
    },
    dotsize: {
        type: String,
        value: ['normal', 'large'],
        default: 'normal'
    }
}
//type就是指定timelineProps是一个类型
export type timelineItemProps = ExtractPropTypes<typeof timelineItemProps>
