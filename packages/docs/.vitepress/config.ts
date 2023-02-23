import type { UserConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
import { sidebar } from './config/sidebar'

export const config: UserConfig = {
    outDir: './dist',
    title: 'KunLun Design',
    head: [['link', { rel: 'icon', href: '/images/logo.svg' }]],
    themeConfig: {
        nav: [
            {
                text: '指南',
                link: '/zh/guide/intro',
                activeMatch: '/guide/intro'
            },
            {
                text: '文档',
                link: '/zh/document/basic/button',
                activeMatch: '/zh/document/*'
            },
            {
                text: '关于',
                items: [
                    { text: '开发团队', link: '/zh/team' },
                    { text: '联系我们', link: 'https://github.com/Anixuil/Kunlun-Design-Vue' }
                ]
            }
        ],
        logo: '/images/logo-transprent.png',
        footer: {
            message: 'Released under the MIT License.',
            copyright: `Copyright &copy; 湘ICP备2022024189号-1 2023-PRESENT Kunlun-Designer and Kunlun-Design contributors`
        },
        algolia: {},
        socialLinks: [{ icon: 'github', link: 'https://github.com/Anixuil/Kunlun-Design-Vue' }]
        // lastUpdatedText: '文档最近更新时间'
    },
    lastUpdated: true,
    //国际化
    locales: {
        zh: {
            lang: 'zh-CN',
            title: 'Kunlun Design',
            description: '一个基于 vue 3 的组件库',
            label: '简体中文',
            link: '/zh/',
            themeConfig: getChineseThemeConfig()
        },
        en: {
            lang: 'en-US',
            title: 'Kunlun Design',
            description: 'A component library based on vue 3',
            label: 'English',
            link: '/en/',
            themeConfig: getEnglishThemeConfig()
        }
    },
    markdown: {
        config: md => mdPlugin(md)
    }
}

function getEnglishThemeConfig() {
    return {
        nav: [
            {
                text: 'Guide',
                link: '/en/guide/intro',
                activeMatch: 'guide'
            },
            {
                text: 'Document',
                link: '/en/document/basic/button',
                activeMatch: 'document'
            },
            {
                text: 'About',
                items: [
                    { text: 'Dev Team', link: '/en/team' },
                    { text: 'Contact Us', link: 'https://github.com/Anixuil/Kunlun-Design-Vue' }
                ]
            }
        ],
        sidebar,
        docFooter: {
            prev: 'Prev Document',
            next: 'Next Document'
        },
        editLink: {
            pattern: 'https://github.com/Anixuil/Kunlun-Design-Vue/packages/docs/:path',
            text: 'Edit this page on Github'
        },
        lastUpdatedText: 'Last update time of the document'
    }
}

function getChineseThemeConfig() {
    return {
        nav: [
            {
                text: '指南',
                link: '/zh/guide/intro',
                activeMatch: 'guide'
            },
            {
                text: '文档',
                link: '/zh/document/basic/button',
                activeMatch: 'document'
            },
            {
                text: '关于',
                items: [
                    { text: '开发团队', link: '/zh/team' },
                    { text: '联系我们', link: 'https://github.com/Anixuil/Kunlun-Design-Vue' }
                ]
            }
        ],
        sidebar,
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        editLink: {
            pattern: 'https://github.com/Anixuil/Kunlun-Design-Vue/packages/docs/:path',
            text: '在github上编辑此页'
        },
        lastUpdatedText: '文档最近更新时间'
    }
}

export default config
