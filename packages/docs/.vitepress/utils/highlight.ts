//高亮处理
import escapeHtml from 'escape-html'
import prism from 'prismjs'
let loadLanguages

const load = async lans => {
    if (!loadLanguages) {
        const mod = await import('prismjs/components/index.js')
        loadLanguages = mod.default
        loadLanguages(lans)
    } else {
        loadLanguages(lans)
    }
}

load(['markup', 'css', 'javascript'])

const wrap = (code: string, lang: string): string => {
    if (lang === 'text') {
        code == escapeHtml(code)
    }
    return `<pre v-pre><code>${code}</code></pre>`
}

export const highlight = (str: string, lang: string) => {
    if (!lang) {
        return wrap(str, 'text')
    }
    lang = lang.toLowerCase()
    const rawLang = lang
    if (lang === 'vue' || lang === 'html') {
        lang = 'markup'
    }
    if (lang === 'md') {
        lang = 'markdown'
    }
    if (lang === 'ts') {
        lang = 'typescript'
    }
    if (lang === 'py') {
        lang = 'python'
    }
    if (!prism.languages[lang]) {
        try {
            load([lang])
        } catch {
            console.warn(
                `[vitepress] Syntax hightlight for language "${lang}" is not supported.`,
                `[vitepress] 不支持 "${lang}" 语言的高亮显示`
            )
        }
    }
    if (prism.languages[lang]) {
        const code = prism.highlight(str, prism.languages[lang], lang)
        return wrap(code, rawLang)
    }
    return wrap(str, 'text')
}
