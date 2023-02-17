// import { PropType } from 'vue'

export interface Route {
    path: string
    breadcrumbName: string
    children?: Omit<Route, 'children'>[]
}

export const BreadCrumbProps = {
    // routes: { type: Array as PropType<Route[]> }, 后面再加动态的routes
    // params: Object,
    separator: {
        type: String,
        default: '/'
    }
}
