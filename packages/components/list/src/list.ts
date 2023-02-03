import { PropType } from 'vue'


export const ListProps = {
    dataSource: {
        type: Array<string>,
        default: []
    },
    size: String as PropType<'mini' | 'small' | 'normal' | 'large' | 'xlarge'>,
    color: String,
    textColor: {
        type: String
    },
    disabled: Boolean
}

// size验证器
export const sizeValidatorList = (size: string): boolean => {
    return ['mini', 'normal', 'large', 'small', 'xlarge'].includes(size)
}

