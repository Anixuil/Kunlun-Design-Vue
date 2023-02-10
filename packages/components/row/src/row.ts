//存row的props
import { ExtractPropTypes } from 'vue'
export const rowProps = {
    tag: {
        type: String,
        default: 'div'
    },
    justify: {
        type: String,
        default: 'center'
    },
    align: {
        type: String,
        default: 'middle'
    },
    gutter: {
        type: [Number, Array<number>],
        default: 0
    },
    wrap: {
        type: Boolean,
        default: true
    }
}
//type就是指定buttonProps是一个类型
export type rowProps = ExtractPropTypes<typeof rowProps>
