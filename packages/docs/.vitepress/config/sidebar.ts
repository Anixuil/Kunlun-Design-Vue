//用于配置生成不同的sidebar
import guideLocale from '../auto/guide-sidebar.json'
import documentLocale from '../auto/Document-sidebar.json'

const getGuideSidebar = () => {
    const result = {}
    Object.entries(guideLocale).map(([lang, val]) => {
        result[`/${lang}/guide/`] = Object.values(val).map(item => mapPrefix(item, lang, '/guide'))
    })
    return result
}

const getDocumentSideBar = () => {
    const result = {}
    Object.entries(documentLocale).map(([lang, val]) => {
        result[`/${lang}/document/`] = Object.values(val).map(item =>
            mapPrefix(item, lang, '/document')
        )
    })
    return result
}

const getSidebars = () => {
    return Object.assign(getGuideSidebar(), getDocumentSideBar())
    // return getGuideSidebar()
}

type Item = {
    text: string
    items?: Item[]
    children?: Item[]
    link?: string
}

const mapPrefix = (item: Item, lang: string, prefix = '') => {
    if (item.children && item.children.length > 0) {
        const res = {
            ...item,
            items: item.children.map(child => mapPrefix(child, lang, prefix))
        }
        delete res.children
        return res
    }
    return {
        ...item,
        link: `/${lang}${prefix}${item.link}`
    }
}

export const sidebar = getSidebars()
// console.log(JSON.stringify(sidebar),'sidebar');
