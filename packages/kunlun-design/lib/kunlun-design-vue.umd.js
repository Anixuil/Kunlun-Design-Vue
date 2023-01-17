;(function (o, t) {
    typeof exports == 'object' && typeof module < 'u'
        ? t(exports, require('vue'))
        : typeof define == 'function' && define.amd
        ? define(['exports', 'vue'], t)
        : ((o = typeof globalThis < 'u' ? globalThis : o || self),
          t((o['Kunlun-Design'] = {}), o.vue))
})(this, function (o, t) {
    'use strict'
    const $ = '',
        i = e => ['primary', 'info', 'success', 'warning', 'danger'].includes(e),
        u = {
            type: String,
            size: String,
            color: String,
            textColor: { type: String },
            round: Boolean,
            plain: Boolean,
            circle: Boolean
        }
    function y(e) {
        const n = `kl-${e}`
        return {
            n: c => (c ? (c.startsWith('--') ? `${n}${c}` : `${n}__${c}`) : n),
            classes: (...c) =>
                c.map(r => {
                    if (Array.isArray(r)) {
                        const [p, g, h = null] = r
                        return p ? g : h
                    }
                    return r
                })
        }
    }
    const m = (e, n) => {
            if (
                ((e.install = l => {
                    for (const s of [e, ...Object.values(n ?? {})]) l.component(s.name, s)
                }),
                n)
            )
                for (const [l, s] of Object.entries(n)) e[l] = s
            return e
        },
        E = '',
        B = t.defineComponent({ name: 'KlButton' }),
        b = t.defineComponent({
            ...B,
            props: u,
            setup(e) {
                const n = e,
                    l = t.computed(() =>
                        n.color
                            ? {
                                  '--kl-button-bg-color': n.color,
                                  '--kl-button-text-color': 'var(--kl-text-color-white)'
                              }
                            : {}
                    ),
                    s = t.computed(() =>
                        n.type === void 0 ? 'default' : i(n.type) ? n.type : 'default'
                    ),
                    { n: c } = y('button')
                return (r, p) => (
                    t.openBlock(),
                    t.createElementBlock(
                        'button',
                        {
                            class: t.normalizeClass([
                                t.unref(c)(),
                                t.unref(s) && t.unref(c)(`--${t.unref(s)}`),
                                r.size && t.unref(c)(`--${r.size}`),
                                r.round && 'kl-round',
                                r.plain && 'kl-plain',
                                r.circle && 'kl-circle'
                            ]),
                            style: t.normalizeStyle({ color: r.textColor, ...t.unref(l) })
                        },
                        [t.renderSlot(r.$slots, 'default')],
                        6
                    )
                )
            }
        }),
        a = m(b),
        f = Symbol('INSTALLED_KEY')
    function S(e = []) {
        return {
            install: l => {
                l[f] || ((l[f] = !0), e.forEach(s => l.use(s)))
            }
        }
    }
    const d = S([a]),
        k = d.install
    ;(o.ButtonProps = u),
        (o.KlButton = a),
        (o.default = d),
        (o.install = k),
        (o.typevalidator = i),
        Object.defineProperties(o, {
            __esModule: { value: !0 },
            [Symbol.toStringTag]: { value: 'Module' }
        })
})