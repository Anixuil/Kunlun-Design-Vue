import type { UserConfig } from 'vitepress'

export const config: UserConfig = {
    outDir: './dist',
    themeConfig: {
        logo: '/images/logo-transprent.png',
        footer: {
            message: 'Released under the MIT License.',
            copyright: `Copyright &copy; 2023-PRESENT Kunlun-Designer and Kunlun-Design contributors`
        },
        algolia: {},
        socialLinks: [{ icon: 'github', link: 'https://github.com/Anixuil/Kunlun-Design-Vue' }],
        lastUpdatedText: '文档最近更新时间'
    },
    lastUpdated: true,
    //国际化
    locales: {
        root: {
            lang: 'zh-CN',
            title: 'Kunlun Design',
            description: '一个基于 vue 3 的组件库',
            label: '简体中文',
            link: '/',
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
    }
}

function getEnglishThemeConfig() {
    return {
        nav: [
            {
                text: 'Guide',
                link: '/en/guide/what-is-kunlun-design',
                activeMatch: '/en/guide/what-is-kunlun-design'
            },
            {
                text: 'About',
                items: [
                    { text: 'Dev Team', link: '/' },
                    { text: 'Contact Us', link: 'https://github.com/Anixuil/Kunlun-Design-Vue' }
                ]
            }
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'Intro', link: '/en/guide/what-is-kunlun-design' },
                    { text: 'Start', link: '/en/guide/test' }
                ],
                collapsible: true,
                collapsed: true
            }
        ],
        docFooter: {
            prev: 'Prev Document',
            next: 'Next Document'
        },
        editLink: {
            pattern: 'https://github.com/Anixuil/Kunlun-Design-Vue/packages/docs/:path',
            text: 'Edit this page on Github'
        }
    }
}

function getChineseThemeConfig() {
    return {
        nav: [
            {
                text: '指南',
                link: '/guide/what-is-kunlun-design',
                activeMatch: '/guide/what-is-kunlun-design'
            },
            {
                text: '关于',
                items: [
                    { text: '开发团队', link: '/' },
                    { text: '联系我们', link: '/https://github.com/Anixuil/Kunlun-Design-Vue' }
                ]
            }
        ],
        sidebar: [
            {
                text: '指南',
                items: [
                    { text: '介绍', link: '/guide/what-is-kunlun-design' },
                    { text: '开始', link: '/guide/test' }
                ],
                collapsible: true,
                collapsed: true
            }
        ],
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        editLink: {
            pattern: 'https://github.com/Anixuil/Kunlun-Design-Vue/packages/docs/:path',
            text: '在github上编辑此页'
        }
    }
}

export default config
