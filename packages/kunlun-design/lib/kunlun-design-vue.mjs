import {
    defineComponent as u,
    computed as p,
    openBlock as f,
    createElementBlock as y,
    Fragment as b,
    createElementVNode as d,
    normalizeClass as E,
    unref as l,
    normalizeStyle as S,
    renderSlot as $,
    createCommentVNode as k
} from 'vue'
const B = {
    type: String,
    size: String,
    color: String,
    textColor: {
        type: String
    }
}
function g(e) {
    const n = `kl-${e}`
    return {
        n: t => (t ? (t.startsWith('--') ? `${n}${t}` : `${n}__${t}`) : n),
        classes: (...t) =>
            t.map(s => {
                if (Array.isArray(s)) {
                    const [a, i, m = null] = s
                    return a ? i : m
                }
                return s
            })
    }
}
const h = (e, n) => {
    if (
        ((e.install = r => {
            for (const o of [e, ...Object.values(n ?? {})]) r.component(o.name, o)
        }),
        n)
    )
        for (const [r, o] of Object.entries(n)) e[r] = o
    return e
}
const C = u({
        name: 'KunlunButton'
    }),
    _ = /* @__PURE__ */ u({
        ...C,
        props: B,
        setup(e) {
            const n = e,
                r = p(() =>
                    n.color
                        ? {
                              '--kl-button-bg-color': n.color,
                              '--kl-button-text-color': 'var(--kl-text-color-white)'
                          }
                        : {}
                ),
                { n: o } = g('button')
            return (t, s) => (
                f(),
                y(
                    b,
                    null,
                    [
                        d(
                            'button',
                            {
                                class: E([
                                    l(o)(),
                                    t.type && l(o)(`--${t.type}`),
                                    t.size && l(o)(`--${t.size}`)
                                ]),
                                style: S({
                                    color: t.textColor,
                                    ...l(r)
                                })
                            },
                            [$(t.$slots, 'default')],
                            6
                            /* CLASS, STYLE */
                        ),
                        k(` <button>
        <slot></slot>
    </button> `)
                    ],
                    2112
                    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                )
            )
        }
    }),
    z = h(_),
    c = Symbol('INSTALLED_KEY')
function A(e = []) {
    return {
        install: r => {
            r[c] || ((r[c] = !0), e.forEach(o => r.use(o)))
        }
    }
}
const K = [z],
    L = A(K),
    N = L.install
export { B as ButtonProps, z as KlButton, L as default, N as install }
