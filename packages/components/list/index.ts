export * from './src/list'
import { withInstall } from '@kunlun-design/utils'
import List from './src/list.vue'
import ListItem from './src/list-item.vue'
import ListItemMeta from './src/list-item-meta.vue'

export const KlList = withInstall(List)
export const KlListItem = withInstall(ListItem)
export const KlListItemMeta = withInstall(ListItemMeta)

export default { KlList, KlListItem, KlListItemMeta }
