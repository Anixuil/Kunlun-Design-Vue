//存col的props
import { ExtractPropTypes } from 'vue'

export const colProps = {
    tag: {
        type: String,
        default: 'div'
    },
    span: {
        type: Number,
        default: 24
    },
    offset: {
        type: Number,
        default: 0
    },
    pull: {
        type: Number,
        default: 0
    },
    push: {
        type: Number,
        default: 0
    },
    xs: {
        type: [Number, Object] //让prop可以满足多个类型必须写成这种数组形式
    },
    sm: {
        type: Number || Object
    },
    md: {
        type: Number || Object
    },
    lg: {
        type: Number || Object
    },
    xl: {
        type: Number || Object
    },
    order: {
        type: Number,
        default: 0
    },
    flex: {
        type: [Number, String]
    }
}
//type就是指定buttonProps是一个类型
export type colProps = ExtractPropTypes<typeof colProps>
