import type { RouteLocationRaw } from 'vue-router'
import type { PropType } from 'vue'
const definePropType = <T>(val: any): PropType<T> => val

export const BreadCrumbItemProps = {
    to: {
        type: definePropType<RouteLocationRaw>([String, Object]),
        default: '',
    },
    replace: {
        type: Boolean,
        default: false
    }
}
