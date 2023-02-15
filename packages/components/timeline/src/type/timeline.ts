//存row的props
import { ExtractPropTypes } from 'vue'
export const timelineProps = {
    mode: {
        type: String,
        values: ['left', 'center', 'right'],
        default: 'left'
    },
    reverse: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        value: ['default', 'message'],
        default: 'default'
    }
}
//type就是指定timelineProps是一个类型
export type timelineProps = ExtractPropTypes<typeof timelineProps>
