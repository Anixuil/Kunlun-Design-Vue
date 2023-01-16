import {
    defineComponent as i,
    computed as a,
    openBlock as y,
    createElementBlock as d,
    normalizeClass as m,
    unref as s,
    normalizeStyle as k,
    renderSlot as B
} from 'vue'
const b = n => ['primary', 'info', 'success', 'warning', 'danger'].includes(n),
    S = {
        type: String,
        size: String,
        color: String,
        textColor: {
            type: String
        },
        round: Boolean,
        plain: Boolean,
        circle: Boolean
    }
function $(n) {
    const t = `kl-${n}`
    return {
        n: l => (l ? (l.startsWith('--') ? `${t}${l}` : `${t}__${l}`) : t),
        classes: (...l) =>
            l.map(o => {
                if (Array.isArray(o)) {
                    const [c, p, f = null] = o
                    return c ? p : f
                }
                return o
            })
    }
}
const E = (n, t) => {
    if (
        ((n.install = e => {
            for (const r of [n, ...Object.values(t ?? {})]) e.component(r.name, r)
        }),
        t)
    )
        for (const [e, r] of Object.entries(t)) n[e] = r
    return n
}
const g = i({
        name: 'KlButton'
    }),
    h = /* @__PURE__ */ i({
        ...g,
        props: S,
        setup(n) {
            const t = n,
                e = a(() =>
                    t.color
                        ? {
                              '--kl-button-bg-color': t.color,
                              '--kl-button-text-color': 'var(--kl-text-color-white)'
                          }
                        : {}
                ),
                r = a(() => (t.type === void 0 ? 'default' : b(t.type) ? t.type : 'default')),
                { n: l } = $('button')
            return (o, c) => (
                y(),
                d(
                    'button',
                    {
                        class: m([
                            s(l)(),
                            s(r) && s(l)(`--${s(r)}`),
                            o.size && s(l)(`--${o.size}`),
                            o.round && 'kl-round',
                            o.plain && 'kl-plain',
                            o.circle && 'kl-circle'
                        ]),
                        style: k({
                            color: o.textColor,
                            ...s(e)
                        })
                    },
                    [B(o.$slots, 'default')],
                    6
                    /* CLASS, STYLE */
                )
            )
        }
    }),
    z = E(h),
    u = Symbol('INSTALLED_KEY')
function C(n = []) {
    return {
        install: e => {
            e[u] || ((e[u] = !0), n.forEach(r => e.use(r)))
        }
    }
}
const _ = [z],
    v = C(_),
    K = v.install
export { S as ButtonProps, z as KlButton, v as default, K as install, b as typevalidator }
