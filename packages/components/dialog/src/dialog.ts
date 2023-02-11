import type { PropType } from 'vue'

export const modeValidator = (mode: string): boolean => {
    return ['normal', 'default'].includes(mode)
}

export const DialogProps = {
    modelValue: Boolean,
    mode: String as PropType<'normal' | 'default'>
}
