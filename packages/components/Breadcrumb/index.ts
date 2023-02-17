export * from './src/breadcrumb'
import { withInstall } from '@kunlun-design/utils'
import BreadCrumb from './src/breadcrumb.vue'
import BreadCrumbItem from './src/breadcrumb-item.vue'

export const KlBreadCrumb = withInstall(BreadCrumb)
export const KlBreadCrumbItem = withInstall(BreadCrumbItem)

export default { KlBreadCrumb, KlBreadCrumbItem }
