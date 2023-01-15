;(function (r, t) {
    typeof exports == 'object' && typeof module < 'u'
        ? t(exports, require('vue'))
        : typeof define == 'function' && define.amd
        ? define(['exports', 'vue'], t)
        : ((r = typeof globalThis < 'u' ? globalThis : r || self),
          t((r['Kunlun-Design'] = {}), r.vue))
})(this, function (r, t) {
    'use strict'
    const $ = '',
        i = { type: String, size: String, color: String, textColor: { type: String } }
    function p(s) {
        const e = `kl-${s}`
        return {
            n: n => (n ? (n.startsWith('--') ? `${e}${n}` : `${e}__${n}`) : e),
            classes: (...n) =>
                n.map(c => {
                    if (Array.isArray(c)) {
                        const [h, B, E = null] = c
                        return h ? B : E
                    }
                    return c
                })
        }
    }
    const d = (s, e) => {
            if (
                ((s.install = l => {
                    for (const o of [s, ...Object.values(e ?? {})]) l.component(o.name, o)
                }),
                e)
            )
                for (const [l, o] of Object.entries(e)) s[l] = o
            return s
        },
        g = '',
        m = t.defineComponent({ name: 'KunlunButton' }),
        y = t.defineComponent({
            ...m,
            props: i,
            setup(s) {
                const e = s,
                    l = t.computed(() =>
                        e.color
                            ? {
                                  '--kl-button-bg-color': e.color,
                                  '--kl-button-text-color': 'var(--kl-text-color-white)'
                              }
                            : {}
                    ),
                    { n: o } = p('button')
                return (n, c) => (
                    t.openBlock(),
                    t.createElementBlock(
                        t.Fragment,
                        null,
                        [
                            t.createElementVNode(
                                'button',
                                {
                                    class: t.normalizeClass([
                                        t.unref(o)(),
                                        n.type && t.unref(o)(`--${n.type}`),
                                        n.size && t.unref(o)(`--${n.size}`)
                                    ]),
                                    style: t.normalizeStyle({ color: n.textColor, ...t.unref(l) })
                                },
                                [t.renderSlot(n.$slots, 'default')],
                                6
                            ),
                            t.createCommentVNode(` <button>
        <slot></slot>
    </button> `)
                        ],
                        2112
                    )
                )
            }
        }),
        u = d(y),
        a = Symbol('INSTALLED_KEY')
    function b(s = []) {
        return {
            install: l => {
                l[a] || ((l[a] = !0), s.forEach(o => l.use(o)))
            }
        }
    }
    const f = b([u]),
        S = f.install
    ;(r.ButtonProps = i),
        (r.KlButton = u),
        (r.default = f),
        (r.install = S),
        Object.defineProperties(r, {
            __esModule: { value: !0 },
            [Symbol.toStringTag]: { value: 'Module' }
        })
})
