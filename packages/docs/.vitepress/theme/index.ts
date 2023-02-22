// import DefaultTheme from 'vitepress/theme'
import { define } from '../utils/types'
import type { Theme as ThemeType } from 'vitepress'
import Theme from 'vitepress/dist/client/theme-default/index'
import { globals } from '../vitepress'
import * as KunlunDesign from '@kunlun-design/components'
import { KlInfiniteScroll } from '@kunlun-design/components'
import { registerIcons } from '@kunlun-design/utils'

export default define<ThemeType>({
    ...Theme,
    enhanceApp: ({ app }) => {
        Object.keys(KunlunDesign).forEach(key => {
            if (key.startsWith('Kl') && KunlunDesign[key].name) {
                app.component(KunlunDesign[key].name, KunlunDesign[key])
            }
        })
        app.use(KlInfiniteScroll)

        globals.forEach(([name, comp]) => app.component(name, comp))
        // 注册全部图标
        registerIcons(app)
    }
})
