export * from './src/index'
import InfiniteScroll from './src/index'
import type { App } from 'vue'
import type { SFCWithInstall } from '@kunlun-design/utils'
const _InfiniteScroll = InfiniteScroll as SFCWithInstall<typeof InfiniteScroll>

;(_InfiniteScroll as any).install = (app: App) => {
    app.directive('InfiniteScroll', _InfiniteScroll)
}
export default _InfiniteScroll
export const KlInfiniteScroll = _InfiniteScroll
