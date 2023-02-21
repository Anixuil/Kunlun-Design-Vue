import type { PropType } from 'vue'
export const shapevalidator = (type: string): boolean => {
    return ['circle', 'square'].includes(type)
}
export const AvatarProps = {
    shape: String as PropType<'circle' | 'square'>,
    size: {
        type: [Number, String],
        values: ['mini', 'small', 'normal', 'large', 'max'],
        default: 'normal'
    },
    src: {
        type: String,
        default: ''
    },
    alt: String,
    srcSet: String
}
