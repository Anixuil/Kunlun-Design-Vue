import type { PropType } from 'vue'
// 类型验证器
const typevalidator = (type: string): boolean => {
    return ['primary', 'info', 'success', 'warning', 'danger', 'default'].includes(type)
}

const sizeValidator = (size: string): boolean => {
    return ['normal', 'mini', 'small', 'large', 'xlarge'].includes(size)
}

export const ButtonProps = {
    type: {
        type: String as PropType<'primary' | 'info' | 'success' | 'warning' | 'danger' | 'default'>,
        validator: typevalidator,
        default: 'default'
    },
    size: {
        type: String as PropType<'mini' | 'small' | 'normal' | 'large' | 'xlarge'>,
        validator: sizeValidator,
        default: 'normal'
    },
    color: String,
    textColor: {
        type: String
    },
    round: Boolean,
    plain: Boolean,
    circle: Boolean,
    disabled: Boolean,
    link: Boolean,
    text: Boolean,
    bg: Boolean,
    icon: Object
}
