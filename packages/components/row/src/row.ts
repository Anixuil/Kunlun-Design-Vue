//存row的props
import { ExtractPropTypes } from 'vue'
export const rowProps = {
    tag: {
        type: String,
        default: 'div'
    },
    justify: {
        type: String,
        default: ''
    },
    align: {
        type: String,
        default: ''
    },
    gutter: {
        type: [Number, Array<number>],
        default: 0
    },
    wrap: {
        type: Boolean,
        default: false
    }
}
//type就是指定buttonProps是一个类型
export type rowProps = ExtractPropTypes<typeof rowProps>
