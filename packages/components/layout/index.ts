// export * from './src/layout'
import Layout from './src/layout.vue'
import Header from './src/header.vue'
import Footer from './src/footer.vue'
import Aside from './src/aside.vue'
import Main from './src/main.vue'
import { withInstall } from '@kunlun-design/utils'
export const KlLayout = withInstall(Layout)
export const KlHeader = withInstall(Header)
export const KlFooter = withInstall(Footer)
export const KlAside = withInstall(Aside)
export const KlMain = withInstall(Main)
export default KlLayout
