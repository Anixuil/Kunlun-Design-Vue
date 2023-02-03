import type { PropType } from 'vue'

export const typevalidator = (type: string): boolean => {
    return ['primary', 'info', 'success', 'warning', 'danger', 'default', ''].includes(type)
}

export const sizeValidator = (size: string): boolean => {
    return ['normal', 'mini', 'small', 'large', 'xlarge'].includes(size)
}

export const ButtonProps = {
    type: String as PropType<
        'primary' | 'info' | 'success' | 'warning' | 'danger' | 'default' | ''
    >,
    size: String as PropType<'mini' | 'small' | 'normal' | 'large' | 'xlarge'>,
    color: String,
    textColor: {
        type: String
    },
    round: Boolean,
    plain: Boolean,
    circle: Boolean,
    disabled: Boolean,
    link: Boolean
}
