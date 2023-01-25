import { defineComponent as u, computed as a, openBlock as f, createElementBlock as y, normalizeClass as m, unref as s, normalizeStyle as B, renderSlot as b } from "vue";
const k = (n) => ["primary", "info", "success", "warning", "danger"].includes(n), S = {
  type: String,
  size: String,
  color: String,
  textColor: {
    type: String
  },
  round: Boolean,
  plain: Boolean,
  circle: Boolean,
  disabled: Boolean
};
function $(n) {
  const t = `kl-${n}`;
  return {
    n: (l) => l ? l.startsWith("--") ? `${t}${l}` : `${t}__${l}` : t,
    classes: (...l) => l.map((o) => {
      if (Array.isArray(o)) {
        const [c, p, d = null] = o;
        return c ? p : d;
      }
      return o;
    })
  };
}
const E = (n, t) => {
  if (n.install = (e) => {
    for (const r of [n, ...Object.values(t ?? {})])
      e.component(r.name, r);
  }, t)
    for (const [e, r] of Object.entries(t))
      n[e] = r;
  return n;
};
const g = u({
  name: "KlButton"
}), h = /* @__PURE__ */ u({
  ...g,
  props: S,
  setup(n) {
    const t = n, e = a(() => t.color ? {
      "--kl-button-bg-color": t.color,
      "--kl-button-text-color": "var(--kl-text-color-white)"
    } : {}), r = a(() => t.type === void 0 ? "default" : k(t.type) ? t.type : "default"), { n: l } = $("button");
    return (o, c) => (f(), y(
      "button",
      {
        class: m([
          s(l)(),
          s(r) && s(l)(`--${s(r)}`),
          o.size && s(l)(`--${o.size}`),
          o.round && "kl-round",
          o.plain && "kl-plain",
          o.circle && "kl-circle"
        ]),
        style: B({
          color: o.textColor,
          ...s(e)
        })
      },
      [
        b(o.$slots, "default")
      ],
      6
      /* CLASS, STYLE */
    ));
  }
}), z = E(h), i = Symbol("INSTALLED_KEY");
function C(n = []) {
  return {
    install: (e) => {
      e[i] || (e[i] = !0, n.forEach((r) => e.use(r)));
    }
  };
}
const _ = [z], v = C(_), K = v.install;
export {
  S as ButtonProps,
  z as KlButton,
  v as default,
  K as install,
  k as typevalidator
};
