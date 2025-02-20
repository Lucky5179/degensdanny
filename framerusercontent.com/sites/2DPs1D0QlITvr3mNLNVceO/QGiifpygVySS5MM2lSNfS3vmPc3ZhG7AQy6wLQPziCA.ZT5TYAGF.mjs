import { a as Dr } from "./chunk-FJIXWODB.mjs";
import {
  $ as ze,
  A as wr,
  Aa as Ge,
  B as Me,
  Ba as be,
  C as pt,
  Ca as Ie,
  D as ht,
  Da as Pe,
  E as qe,
  Ea as Ze,
  F as ut,
  G as gt,
  H as xt,
  P as ia,
  Q as Ve,
  S as Be,
  T as je,
  V as s,
  Y as xe,
  Z as ve,
  _ as yt,
  aa as W,
  b as Je,
  ba as Re,
  c as w,
  d as gr,
  da as Fe,
  ea as oa,
  f as xr,
  fa as sa,
  g as ge,
  i as yr,
  ia as Z,
  j as De,
  k as $,
  ka as te,
  l as Se,
  la as He,
  m as aa,
  n as mt,
  o as J,
  oa as la,
  p as dt,
  q as N,
  r as ce,
  s as na,
  sa as Ye,
  ta as fa,
  u as r,
  v as k,
  va as Ue,
  w as Er,
  wa as Ke,
  x as me,
  xa as Le,
  y as m,
  ya as E,
  z as re,
} from "./chunk-A6F4P65O.mjs";
import "./chunk-JR5VT52U.mjs";
import { b as S, c as v } from "./chunk-RIUMFBNJ.mjs";
var er = (e) => e;
var Br = { ms: (e) => 1e3 * e, s: (e) => e / 1e3 };
function wt(e, t) {
  return t ? e * (1e3 / t) : 0;
}
var ca = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  dn = 1e-7,
  pn = 12;
function hn(e, t, n, a, i) {
  let f,
    c,
    y = 0;
  do (c = t + (n - t) / 2), (f = ca(c, a, i) - e), f > 0 ? (n = c) : (t = c);
  while (Math.abs(f) > dn && ++y < pn);
  return c;
}
function vr(e, t, n, a) {
  if (e === t && n === a) return er;
  let i = (f) => hn(f, 0, 1, e, n);
  return (f) => (f === 0 || f === 1 ? f : ca(i(f), t, a));
}
var Vf = {
  ease: vr(0.25, 0.1, 0.25, 1),
  "ease-in": vr(0.42, 0, 1, 1),
  "ease-in-out": vr(0.42, 0, 0.58, 1),
  "ease-out": vr(0, 0, 0.58, 1),
};
function ma(e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) &&
      t.indexOf(a) < 0 &&
      (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (a = Object.getOwnPropertySymbols(e); i < a.length; i++)
      t.indexOf(a[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, a[i]) &&
        (n[a[i]] = e[a[i]]);
  }
  return n;
}
var lr = {};
Object.defineProperty(lr, "__esModule", { value: !0 });
lr.warning = function () {};
lr.invariant = function () {};
var Af = lr.__esModule,
  Mf = lr.warning,
  vn = lr.invariant;
var bn = 5;
function jr(e, t, n) {
  let a = Math.max(t - bn, 0);
  return wt(n - e(a), t - a);
}
var fr = { stiffness: 100, damping: 10, mass: 1 },
  Cn = (e = fr.stiffness, t = fr.damping, n = fr.mass) =>
    t / (2 * Math.sqrt(e * n));
function kn(e, t, n) {
  return (e < t && n >= t) || (e > t && n <= t);
}
var bt = ({
    stiffness: e = fr.stiffness,
    damping: t = fr.damping,
    mass: n = fr.mass,
    from: a = 0,
    to: i = 1,
    velocity: f = 0,
    restSpeed: c = 2,
    restDistance: y = 0.5,
  } = {}) => {
    f = f ? Br.s(f) : 0;
    let d = { done: !1, hasReachedTarget: !1, current: a, target: i },
      o = i - a,
      u = Math.sqrt(e / n) / 1e3,
      g = Cn(e, t, n),
      R;
    if (g < 1) {
      let h = u * Math.sqrt(1 - g * g);
      R = (C) =>
        i -
        Math.exp(-g * u * C) *
          (((g * u * o - f) / h) * Math.sin(h * C) + o * Math.cos(h * C));
    } else R = (h) => i - Math.exp(-u * h) * (o + (u * o - f) * h);
    return (h) => {
      d.current = R(h);
      let C = h === 0 ? f : jr(R, h, d.current),
        j = Math.abs(C) <= c,
        F = Math.abs(i - d.current) <= y;
      return (d.done = j && F), (d.hasReachedTarget = kn(a, i, d.current)), d;
    };
  },
  da = ({
    from: e = 0,
    velocity: t = 0,
    power: n = 0.8,
    decay: a = 0.325,
    bounceDamping: i,
    bounceStiffness: f,
    changeTarget: c,
    min: y,
    max: d,
    restDistance: o = 0.5,
    restSpeed: u,
  }) => {
    a = Br.ms(a);
    let g = { hasReachedTarget: !1, done: !1, current: e, target: e },
      R = (x) => (y !== void 0 && x < y) || (d !== void 0 && x > d),
      h = (x) =>
        y === void 0
          ? d
          : d === void 0 || Math.abs(y - x) < Math.abs(d - x)
          ? y
          : d,
      C = n * t,
      j = e + C,
      F = c === void 0 ? j : c(j);
    (g.target = F), F !== j && (C = F - e);
    let P = (x) => -C * Math.exp(-x / a),
      p = (x) => F + P(x),
      _ = (x) => {
        let D = P(x),
          U = p(x);
        (g.done = Math.abs(D) <= o), (g.current = g.done ? F : U);
      },
      T,
      A,
      b = (x) => {
        R(g.current) &&
          ((T = x),
          (A = bt({
            from: g.current,
            to: h(g.current),
            velocity: jr(p, x, g.current),
            damping: i,
            stiffness: f,
            restDistance: o,
            restSpeed: u,
          })));
      };
    return (
      b(0),
      (x) => {
        let D = !1;
        return (
          !A && T === void 0 && ((D = !0), _(x), b(x)),
          T !== void 0 && x > T
            ? ((g.hasReachedTarget = !0), A(x - T))
            : ((g.hasReachedTarget = !1), !D && _(x), g)
        );
      }
    );
  },
  vt = 10,
  Sn = 1e4;
function pa(e, t = er) {
  let n,
    a = vt,
    i = e(0),
    f = [t(i.current)];
  for (; !i.done && a < Sn; )
    (i = e(a)),
      f.push(t(i.done ? i.target : i.current)),
      n === void 0 && i.hasReachedTarget && (n = a),
      (a += vt);
  let c = a - vt;
  return (
    f.length === 1 && f.push(i.current),
    { keyframes: f, duration: c / 1e3, overshootDuration: (n ?? c) / 1e3 }
  );
}
var Vn = ["", "X", "Y", "Z"],
  Rn = ["translate", "scale", "rotate", "skew"];
var ha = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (e) => e + "deg",
  },
  Fn = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (e) => e + "px",
    },
    rotate: ha,
    scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: er },
    skew: ha,
  },
  In = new Map(),
  Nn = (e) => `--motion-${e}`,
  wa = ["x", "y", "z"];
Rn.forEach((e) => {
  Vn.forEach((t) => {
    wa.push(e + t), In.set(Nn(e + t), Fn[e]);
  });
});
var tc = new Set(wa);
var ua = (e) => document.createElement("div").animate(e, { duration: 0.001 }),
  ga = {
    cssRegisterProperty: () =>
      typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        ua({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!ua({ opacity: [0, 1] }).finished,
  },
  Ct = {},
  An = {};
for (let e in ga) An[e] = () => (Ct[e] === void 0 && (Ct[e] = ga[e]()), Ct[e]);
function va(e, t) {
  var n;
  return (
    typeof e == "string"
      ? t
        ? (((n = t[e]) !== null && n !== void 0) ||
            (t[e] = document.querySelectorAll(e)),
          (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function ba(e) {
  let t = new WeakMap();
  return (n = {}) => {
    let a = new Map(),
      i = (c = 0, y = 100, d = 0, o = !1) => {
        let u = `${c}-${y}-${d}-${o}`;
        return (
          a.has(u) ||
            a.set(
              u,
              e(
                Object.assign(
                  {
                    from: c,
                    to: y,
                    velocity: d,
                    restSpeed: o ? 0.05 : 2,
                    restDistance: o ? 0.01 : 0.5,
                  },
                  n
                )
              )
            ),
          a.get(u)
        );
      },
      f = (c) => (t.has(c) || t.set(c, pa(c)), t.get(c));
    return {
      createAnimation: (c, y, d, o, u) => {
        var g, R;
        let h,
          C = c.length;
        if (d && C <= 2 && c.every(Mn)) {
          let F = c[C - 1],
            P = C === 1 ? null : c[0],
            p = 0,
            _ = 0,
            T = u?.generator;
          if (T) {
            let { animation: x, generatorStartTime: D } = u,
              U = x?.startTime || D || 0,
              Y = x?.currentTime || performance.now() - U,
              L = T(Y).current;
            (_ = (g = P) !== null && g !== void 0 ? g : L),
              (C === 1 || (C === 2 && c[0] === null)) &&
                (p = jr((z) => T(z).current, Y, L));
          } else _ = (R = P) !== null && R !== void 0 ? R : parseFloat(y());
          let A = i(_, F, p, o?.includes("scale")),
            b = f(A);
          (h = Object.assign(Object.assign({}, b), { easing: "linear" })),
            u &&
              ((u.generator = A), (u.generatorStartTime = performance.now()));
        } else h = { easing: "ease", duration: f(i(0, 100)).overshootDuration };
        return h;
      },
    };
  };
}
var Mn = (e) => typeof e != "string",
  ac = ba(bt),
  nc = ba(da),
  Pn = { any: 0, all: 1 };
function _n(e, t, { root: n, margin: a, amount: i = "any" } = {}) {
  if (typeof IntersectionObserver > "u") return () => {};
  let f = va(e),
    c = new WeakMap(),
    y = (o) => {
      o.forEach((u) => {
        let g = c.get(u.target);
        if (u.isIntersecting !== !!g)
          if (u.isIntersecting) {
            let R = t(u);
            typeof R == "function" ? c.set(u.target, R) : d.unobserve(u.target);
          } else g && (g(u), c.delete(u.target));
      });
    },
    d = new IntersectionObserver(y, {
      root: n,
      rootMargin: a,
      threshold: typeof i == "number" ? i : Pn[i],
    });
  return f.forEach((o) => d.observe(o)), () => d.disconnect();
}
var zr = new WeakMap(),
  Xe;
function Tn(e, t) {
  if (t) {
    let { inlineSize: n, blockSize: a } = t[0];
    return { width: n, height: a };
  }
  return e instanceof SVGElement && "getBBox" in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function En({ target: e, contentRect: t, borderBoxSize: n }) {
  var a;
  (a = zr.get(e)) === null ||
    a === void 0 ||
    a.forEach((i) => {
      i({
        target: e,
        contentSize: t,
        get size() {
          return Tn(e, n);
        },
      });
    });
}
function Dn(e) {
  e.forEach(En);
}
function Bn() {
  typeof ResizeObserver < "u" && (Xe = new ResizeObserver(Dn));
}
function jn(e, t) {
  Xe || Bn();
  let n = va(e);
  return (
    n.forEach((a) => {
      let i = zr.get(a);
      i || ((i = new Set()), zr.set(a, i)), i.add(t), Xe?.observe(a);
    }),
    () => {
      n.forEach((a) => {
        let i = zr.get(a);
        i?.delete(t), i?.size || Xe?.unobserve(a);
      });
    }
  );
}
var Ur = new Set(),
  br;
function zn() {
  (br = () => {
    let e = { width: v.innerWidth, height: v.innerHeight },
      t = { target: v, size: e, contentSize: e };
    Ur.forEach((n) => n(t));
  }),
    v.addEventListener("resize", br);
}
function Un(e) {
  return (
    Ur.add(e),
    br || zn(),
    () => {
      Ur.delete(e), !Ur.size && br && (br = void 0);
    }
  );
}
function Lr(e, t) {
  return typeof e == "function" ? Un(e) : jn(e, t);
}
function kt(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function xa(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var Ln = {
    isActive: (e) => !!e.inView,
    subscribe: (e, { enable: t, disable: n }, { inViewOptions: a = {} }) => {
      let { once: i } = a,
        f = ma(a, ["once"]);
      return _n(
        e,
        (c) => {
          if ((t(), xa(e, "viewenter", c), !i))
            return (y) => {
              n(), xa(e, "viewleave", y);
            };
        },
        f
      );
    },
  },
  ya = (e, t, n) => (a) => {
    (!a.pointerType || a.pointerType === "mouse") && (n(), kt(e, t, a));
  },
  On = {
    isActive: (e) => !!e.hover,
    subscribe: (e, { enable: t, disable: n }) => {
      let a = ya(e, "hoverstart", t),
        i = ya(e, "hoverend", n);
      return (
        e.addEventListener("pointerenter", a),
        e.addEventListener("pointerleave", i),
        () => {
          e.removeEventListener("pointerenter", a),
            e.removeEventListener("pointerleave", i);
        }
      );
    },
  },
  qn = {
    isActive: (e) => !!e.press,
    subscribe: (e, { enable: t, disable: n }) => {
      let a = (f) => {
          n(), kt(e, "pressend", f), v.removeEventListener("pointerup", a);
        },
        i = (f) => {
          t(), kt(e, "pressstart", f), v.addEventListener("pointerup", a);
        };
      return (
        e.addEventListener("pointerdown", i),
        () => {
          e.removeEventListener("pointerdown", i),
            v.removeEventListener("pointerup", a);
        }
      );
    },
  },
  Wn = { inView: Ln, hover: On, press: qn },
  ic = ["initial", "animate", ...Object.keys(Wn), "exit"];
var Qn = 100,
  Hn = {
    left: (e) => `translateX(-${e}px)`,
    right: (e) => `translateX(${e}px)`,
    top: (e) => `translateY(-${e}px)`,
    bottom: (e) => `translateY(${e}px)`,
  },
  St =
    typeof Animation < "u" &&
    typeof Animation.prototype.updatePlaybackRate == "function";
function cr(e) {
  let {
      slots: t,
      gap: n,
      padding: a,
      paddingPerSide: i,
      paddingTop: f,
      paddingRight: c,
      paddingBottom: y,
      paddingLeft: d,
      speed: o,
      hoverFactor: u,
      direction: g,
      alignment: R,
      sizingOptions: h,
      fadeOptions: C,
      style: j,
    } = e,
    {
      fadeContent: F,
      overflow: P,
      fadeWidth: p,
      fadeInset: _,
      fadeAlpha: T,
    } = C,
    { widthType: A, heightType: b } = h,
    x = i ? `${f}px ${c}px ${y}px ${d}px` : `${a}px`,
    D = je.current() === je.canvas,
    U = t.filter(Boolean),
    Y = Je.count(U),
    L = Y > 0;
  g === !0 && (g = "left");
  let z = g === "left" || g === "right",
    ie = wr(0),
    G = Hn[g],
    Ce = Me(ie, G),
    ye = N(null),
    ae = J(() => [xr(), xr()], []),
    [l, I] = ce({ parent: null, children: null }),
    oe = [],
    se = [],
    Ee = 0,
    de = 0;
  D && ((Ee = Y ? Math.floor(10 / Y) : 0), (de = 1)),
    !D &&
      L &&
      l.parent &&
      ((Ee = Math.round((l.parent / l.children) * 2) + 1),
      (Ee = Math.min(Ee, Qn)),
      (de = 1));
  let We = yr(() => {
      if (L && ye.current) {
        let O = z ? ye.current.offsetWidth : ye.current.offsetHeight,
          q = ae[0].current
            ? z
              ? ae[0].current.offsetLeft
              : ae[0].current.offsetTop
            : 0,
          he =
            (ae[1].current
              ? z
                ? ae[1].current.offsetLeft + ae[1].current.offsetWidth
                : ae[1].current.offsetTop + ae[1].current.offsetHeight
              : 0) -
            q +
            n;
        I({ parent: O, children: he });
      }
    }, []),
    le = D ? { contentVisibility: "auto" } : {};
  if (L) {
    if (!D) {
      let O = N(!0);
      $(
        () => (
          Er.read(We),
          Lr(ye.current, ({ contentSize: q }) => {
            !O.current && (q.width || q.height) && Er.read(We),
              (O.current = !1);
          })
        ),
        []
      );
    }
    oe = Je.map(U, (O, q) => {
      var ke, he, ne, H;
      let ue;
      q === 0 && (ue = ae[0]), q === U.length - 1 && (ue = ae[1]);
      let B = {
        width: A
          ? (ke = O.props) === null || ke === void 0
            ? void 0
            : ke.width
          : "100%",
        height: b
          ? (he = O.props) === null || he === void 0
            ? void 0
            : he.height
          : "100%",
      };
      return r(re, {
        inherit: "id",
        children: r("li", {
          ref: ue,
          style: B,
          children: gr(
            O,
            {
              style: {
                ...((ne = O.props) === null || ne === void 0
                  ? void 0
                  : ne.style),
                ...B,
                flexShrink: 0,
                ...le,
              },
              layoutId: O.props.layoutId
                ? O.props.layoutId + "-original-" + q
                : void 0,
            },
            (H = O.props) === null || H === void 0 ? void 0 : H.children
          ),
        }),
      });
    });
  }
  if (!D)
    for (let O = 0; O < Ee; O++)
      se = [
        ...se,
        ...Je.map(U, (q, ke) => {
          var he, ne, H, ue, B, Qe;
          let $e = {
            width: A
              ? (he = q.props) === null || he === void 0
                ? void 0
                : he.width
              : "100%",
            height: b
              ? (ne = q.props) === null || ne === void 0
                ? void 0
                : ne.height
              : "100%",
            willChange: "transform",
          };
          return r(
            re,
            {
              inherit: "id",
              children: r(
                "li",
                {
                  style: $e,
                  "aria-hidden": !0,
                  children: gr(
                    q,
                    {
                      key: O + " " + ke,
                      style: {
                        ...((H = q.props) === null || H === void 0
                          ? void 0
                          : H.style),
                        width: A
                          ? (ue = q.props) === null || ue === void 0
                            ? void 0
                            : ue.width
                          : "100%",
                        height: b
                          ? (B = q.props) === null || B === void 0
                            ? void 0
                            : B.height
                          : "100%",
                        flexShrink: 0,
                        ...le,
                      },
                      layoutId: q.props.layoutId
                        ? q.props.layoutId + "-dupe-" + O
                        : void 0,
                    },
                    (Qe = q.props) === null || Qe === void 0
                      ? void 0
                      : Qe.children
                  ),
                },
                O + "li" + ke
              ),
            },
            O + "lg" + ke
          );
        }),
      ];
  let fe = l.children + l.children * Math.round(l.parent / l.children),
    mr = N(null),
    dr = N(null),
    tr = N(0),
    pr = N(!1),
    Fr = ht(),
    Ir = N(null),
    pe = N(null);
  if (!D) {
    let O = gt(ye);
    St
      ? ($(() => {
          if (!(Fr || !fe || !o))
            return (
              (pe.current = Ir.current.animate(
                { transform: [G(0), G(fe)] },
                {
                  duration: (Math.abs(fe) / o) * 1e3,
                  iterations: 1 / 0,
                  easing: "linear",
                }
              )),
              () => pe.current.cancel()
            );
        }, [u, fe, o]),
        $(() => {
          pe.current &&
            (O && pe.current.playState === "paused"
              ? pe.current.play()
              : !O && pe.current.playState === "running" && pe.current.pause());
        }, [O]))
      : pt((q) => {
          if (!fe || Fr || St) return;
          mr.current === null && (mr.current = q), (q = q - mr.current);
          let he = (dr.current === null ? 0 : q - dr.current) * (o / 1e3);
          pr.current && (he *= u),
            (tr.current += he),
            (tr.current = qe(0, fe, tr.current)),
            (dr.current = q),
            O && ie.set(tr.current);
        });
  }
  let Nr = z ? "to right" : "to bottom",
    Ar = p / 2,
    Jr = 100 - p / 2,
    Kr = $n(_, 0, Ar),
    et = 100 - _,
    hr = `linear-gradient(${Nr}, rgba(0, 0, 0, ${T}) ${Kr}%, rgba(0, 0, 0, 1) ${Ar}%, rgba(0, 0, 0, 1) ${Jr}%, rgba(0, 0, 0, ${T}) ${et}%)`;
  return L
    ? r("section", {
        style: {
          ...Ca,
          opacity: de,
          WebkitMaskImage: F ? hr : void 0,
          MozMaskImage: F ? hr : void 0,
          maskImage: F ? hr : void 0,
          overflow: P ? "visible" : "hidden",
          padding: x,
        },
        ref: ye,
        children: k(m.ul, {
          ref: Ir,
          style: {
            ...Ca,
            gap: n,
            top: g === "bottom" && ka(fe) ? -fe : void 0,
            left: g === "right" && ka(fe) ? -fe : void 0,
            placeItems: R,
            position: "relative",
            flexDirection: z ? "row" : "column",
            ...j,
            willChange: D ? "auto" : "transform",
            transform: St ? G(0) : Ce,
          },
          onMouseEnter: () => {
            (pr.current = !0), pe.current && (pe.current.playbackRate = u);
          },
          onMouseLeave: () => {
            (pr.current = !1), pe.current && (pe.current.playbackRate = 1);
          },
          children: [oe, se],
        }),
      })
    : k("section", {
        style: Yn,
        children: [
          r("div", { style: Gn, children: "\u2728" }),
          r("p", { style: Zn, children: "Connect to Content" }),
          r("p", {
            style: Xn,
            children:
              "Add layers or components to infinitely loop on your page.",
          }),
        ],
      });
}
cr.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: !0, heightType: !0 },
  fadeOptions: {
    fadeContent: !0,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  direction: !0,
};
xe(cr, {
  slots: {
    type: s.Array,
    title: "Children",
    control: { type: s.ComponentInstance },
  },
  speed: {
    type: s.Number,
    title: "Speed",
    min: 0,
    max: 1e3,
    defaultValue: 100,
    unit: "%",
    displayStepper: !0,
    step: 5,
  },
  direction: {
    type: s.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    defaultValue: "left",
    displaySegmentedControl: !0,
  },
  alignment: {
    type: s.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  gap: { type: s.Number, title: "Gap" },
  padding: {
    title: "Padding",
    type: s.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  sizingOptions: {
    type: s.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: s.Boolean,
        title: "Width",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
      heightType: {
        type: s.Boolean,
        title: "Height",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
    },
  },
  fadeOptions: {
    type: s.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: s.Boolean, title: "Fade", defaultValue: !0 },
      overflow: {
        type: s.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(e) {
          return e.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: s.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
      fadeInset: {
        type: s.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: s.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
    },
  },
  hoverFactor: {
    type: s.Number,
    title: "Hover",
    min: 0,
    max: 1,
    unit: "x",
    defaultValue: 1,
    step: 0.1,
    displayStepper: !0,
    description: "Slows down the speed while you are hovering.",
  },
});
var Ca = {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  Yn = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  Gn = { fontSize: 32, marginBottom: 10 },
  Zn = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  Xn = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: "center",
  },
  $n = (e, t, n) => Math.min(Math.max(e, t), n),
  ka = (e) => typeof e == "number" && !isNaN(e);
var Or = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Vt = {
    ...Or,
    borderRadius: 6,
    background: "rgba(136, 85, 255, 0.3)",
    color: "#85F",
    border: "1px dashed #85F",
    flexDirection: "column",
  },
  Rt = {
    onClick: { type: s.EventHandler },
    onMouseEnter: { type: s.EventHandler },
    onMouseLeave: { type: s.EventHandler },
  },
  Jn = {
    type: s.Number,
    title: "Font Size",
    min: 2,
    max: 200,
    step: 1,
    displayStepper: !0,
  },
  Kn = {
    font: {
      type: s.Boolean,
      title: "Font",
      defaultValue: !1,
      disabledTitle: "Default",
      enabledTitle: "Custom",
    },
    fontFamily: {
      type: s.String,
      title: "Family",
      placeholder: "Inter",
      hidden: ({ font: e }) => !e,
    },
    fontWeight: {
      type: s.Enum,
      title: "Weight",
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      optionTitles: [
        "Thin",
        "Extra-light",
        "Light",
        "Regular",
        "Medium",
        "Semi-bold",
        "Bold",
        "Extra-bold",
        "Black",
      ],
      hidden: ({ font: e }) => !e,
    },
  };
function Ft() {
  return J(() => je.current() === je.canvas, []);
}
function It(e) {
  let {
    borderRadius: t,
    isMixedBorderRadius: n,
    topLeftRadius: a,
    topRightRadius: i,
    bottomRightRadius: f,
    bottomLeftRadius: c,
  } = e;
  return J(
    () => (n ? `${a}px ${i}px ${f}px ${c}px` : `${t}px`),
    [t, n, a, i, f, c]
  );
}
var Nt = {
  borderRadius: {
    title: "Radius",
    type: s.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius",
    ],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0,
  },
};
var ti = {
  padding: {
    type: s.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding",
  },
};
var Pt;
(function (e) {
  (e.Normal = "Off"), (e.Auto = "On"), (e.Loop = "Loop");
})(Pt || (Pt = {}));
var _t;
(function (e) {
  (e.High = "High Quality"),
    (e.Medium = "Medium Quality"),
    (e.Low = "Low Quality"),
    (e.Off = "Off");
})(_t || (_t = {}));
var Va;
(function (e) {
  (e.WebP = "webp"), (e.JPG = "jpg");
})(Va || (Va = {}));
var At = null;
function ai() {
  return (
    At === null &&
      (At = /bot|-Google|Google-|yandex|ia_archiver/iu.test(S.userAgent)),
    At
  );
}
var ni = () => () => {};
function _e({
  url: e,
  play: t,
  shouldMute: n,
  thumbnail: a,
  isRed: i,
  onClick: f,
  onMouseEnter: c,
  onMouseLeave: y,
  onMouseDown: d,
  onMouseUp: o,
  title: u,
  ...g
}) {
  let R = Ft(),
    h = t !== "Off",
    C = R || (a !== "Off" && !h),
    [j, F] = dt(() => !0, !1),
    [P, p] = dt(() => !0, !C),
    [_, T] = ce(!1),
    A = na(
      ni,
      () => ai(),
      () => !1
    ),
    b = It(g),
    x = b !== "0px 0px 0px 0px" && b !== "0px";
  if (e === "") return r(fi, {});
  let D = oi(e);
  if (D === void 0) return r(ci, { message: "Invalid Youtube URL." });
  let [U, Y] = D,
    L = si(U, a, li() ? "webp" : "jpg"),
    z = Y.searchParams;
  return (
    z.set("iv_load_policy", "3"),
    z.set("rel", "0"),
    z.set("modestbranding", "1"),
    z.set("playsinline", "1"),
    !A && (h || (C && P)) && z.set("autoplay", "1"),
    h && n && z.set("mute", "1"),
    t === "Loop" && (z.set("loop", "1"), z.set("playlist", U)),
    i || z.set("color", "white"),
    k("article", {
      onPointerEnter: () => T(!0),
      onPointerLeave: () => T(!1),
      onPointerOver: F,
      onKeyDown: p,
      onClick: p,
      style: {
        ...pi,
        borderRadius: b,
        transform: x && (P || R) ? "translateZ(0.000001px)" : "unset",
        cursor: "pointer",
        overflow: "hidden",
      },
      role: "presentation",
      children: [
        j && r("link", { rel: "preconnect", href: "https://www.youtube.com" }),
        j && r("link", { rel: "preconnect", href: "https://www.google.com" }),
        r("div", {
          style: {
            ...Fa,
            background: C ? `center / cover url(${L}) no-repeat` : void 0,
          },
        }),
        R
          ? null
          : r("iframe", {
              title: u || "Youtube Video",
              style: { ...Fa, display: P || A ? void 0 : "none" },
              src: Y.href,
              frameBorder: "0",
              allow:
                "presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
              onClick: f,
              onMouseEnter: c,
              onMouseLeave: y,
              onMouseDown: d,
              onMouseUp: o,
              loading: "lazy",
            }),
        P || A ? null : r(mi, { onClick: p, isHovered: _, isRed: i }),
      ],
    })
  );
}
_e.displayName = "YouTube";
xe(_e, {
  url: { type: s.String, title: "Video" },
  play: { type: s.Enum, title: "Autoplay", options: Object.values(Pt) },
  shouldMute: {
    title: "Mute",
    type: s.Boolean,
    enabledTitle: "Yes",
    disabledTitle: "No",
    hidden(e) {
      return e.play === "Off";
    },
  },
  thumbnail: {
    title: "Thumbnail",
    description: "Showing a thumbnail improves performance.",
    type: s.Enum,
    options: Object.values(_t),
    hidden(e) {
      return e.play !== "Off";
    },
  },
  isRed: {
    title: "Color",
    type: s.Boolean,
    enabledTitle: "Red",
    disabledTitle: "White",
  },
  ...Nt,
  ...Rt,
});
var ii = {
  url: "https://youtu.be/smPos0mJvh8",
  play: "Off",
  shouldMute: !0,
  thumbnail: "Medium Quality",
  isRed: !0,
};
_e.defaultProps = ii;
function oi(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    let n = Mt(e);
    return [e, n];
  }
  if (
    t.hostname === "youtube.com" ||
    t.hostname === "www.youtube.com" ||
    t.hostname === "youtube-nocookie.com" ||
    t.hostname === "www.youtube-nocookie.com"
  ) {
    let n = t.pathname.slice(1).split("/");
    if (n[0] === "watch") {
      let a = t.searchParams.get("v"),
        i = Mt(a);
      return [a, i];
    }
    if (n[0] === "embed") return [n[1], t];
  }
  if (t.hostname === "youtu.be") {
    let n = t.pathname.slice(1),
      a = Mt(n);
    return [n, a];
  }
}
function Mt(e) {
  return new URL(`https://www.youtube.com/embed/${e}`);
}
function si(e, t, n = "jpg") {
  let a = n === "webp",
    i = a ? "https://i.ytimg.com/vi_webp/" : "https://i.ytimg.com/vi/",
    f = a ? "webp" : "jpg";
  switch (t) {
    case "Low Quality":
      return `${i}${e}/hqdefault.${f}`;
    case "Medium Quality":
      return `${i}${e}/sddefault.${f}`;
    case "High Quality":
      return `${i}${e}/maxresdefault.${f}`;
    default:
      return `${i}${e}/0.${f}`;
  }
}
var Ra;
function li() {
  if (!v) return !0;
  if (Ra !== void 0) return Ra;
  let e = document.createElement("canvas");
  return e.getContext && e.getContext("2d")
    ? e.toDataURL("image/webp").indexOf("data:image/webp") === 0
    : !1;
}
function fi() {
  return r("div", {
    style: { ...Vt, overflow: "hidden" },
    children: r("div", {
      style: Ia,
      children:
        "To embed a Youtube video, add the URL to the properties\xA0panel.",
    }),
  });
}
function ci({ message: e }) {
  return r("div", {
    className: "framerInternalUI-errorPlaceholder",
    style: { ...Or, overflow: "hidden" },
    children: k("div", { style: Ia, children: ["Error: ", e] }),
  });
}
function mi({ onClick: e, isHovered: t, isRed: n }) {
  return r("button", {
    onClick: e,
    "aria-label": "Play",
    style: di,
    children: k("svg", {
      height: "100%",
      version: "1.1",
      viewBox: "0 0 68 48",
      width: "100%",
      children: [
        r("path", {
          d: "M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",
          fill: t ? (n ? "#f00" : "#000") : "#212121",
          fillOpacity: t && n ? 1 : 0.8,
          style: {
            transition:
              "fill .1s cubic-bezier(0.4, 0, 1, 1), fill-opacity .1s cubic-bezier(0.4, 0, 1, 1)",
          },
        }),
        r("path", { d: "M 45,24 27,14 27,34", fill: "#fff" }),
      ],
    }),
  });
}
var di = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 68,
    height: 48,
    padding: 0,
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },
  pi = { position: "relative", width: "100%", height: "100%" },
  Ia = { textAlign: "center", minWidth: 140 },
  Fa = { position: "absolute", top: 0, left: 0, height: "100%", width: "100%" };
var qr = () => typeof document == "object";
function hi() {
  if (qr()) {
    if (typeof document.hidden < "u") return "visibilitychange";
    if (typeof document.msHidden < "u") return "msvisibilitychange";
    if (typeof document.webkitHidden < "u") return "webkitvisibilitychange";
  }
}
function ui() {
  if (qr()) {
    if (typeof document.hidden < "u") return "hidden";
    if (typeof document.msHidden < "u") return "msHidden";
    if (typeof document.webkitHidden < "u") return "webkitHidden";
  }
}
function Na() {
  if (qr()) return !document[ui()];
}
function Aa() {
  if (!qr()) return;
  let [e, t] = ce(Na()),
    n = () => t(Na());
  return (
    $(() => {
      let a = hi();
      return (
        document.addEventListener(a, n, !1),
        () => {
          document.removeEventListener(a, n);
        }
      );
    }),
    e
  );
}
var Tt = 0.001;
function K(e) {
  let {
      slots: t,
      startFrom: n,
      direction: a,
      effectsOptions: i,
      autoPlayControl: f,
      dragControl: c,
      alignment: y,
      gap: d,
      padding: o,
      paddingPerSide: u,
      paddingTop: g,
      paddingRight: R,
      paddingBottom: h,
      paddingLeft: C,
      itemAmount: j,
      fadeOptions: F,
      intervalControl: P,
      transitionControl: p,
      arrowOptions: _,
      borderRadius: T,
      progressOptions: A,
      style: b,
    } = e,
    {
      effectsOpacity: x,
      effectsScale: D,
      effectsRotate: U,
      effectsPerspective: Y,
      effectsHover: L,
    } = i,
    {
      fadeContent: z,
      overflow: ie,
      fadeWidth: G,
      fadeInset: Ce,
      fadeAlpha: ye,
    } = F,
    {
      showMouseControls: ae,
      arrowSize: l,
      arrowRadius: I,
      arrowFill: oe,
      leftArrow: se,
      rightArrow: Ee,
      arrowShouldSpace: de = !0,
      arrowShouldFadeIn: We = !1,
      arrowPosition: le,
      arrowPadding: fe,
      arrowGap: mr,
      arrowPaddingTop: dr,
      arrowPaddingRight: tr,
      arrowPaddingBottom: pr,
      arrowPaddingLeft: Fr,
    } = _,
    {
      showProgressDots: Ir,
      dotSize: pe,
      dotsInset: Nr,
      dotsRadius: Ar,
      dotsPadding: Jr,
      dotsGap: Kr,
      dotsFill: et,
      dotsBackground: hr,
      dotsActiveOpacity: O,
      dotsOpacity: q,
      dotsBlur: ke,
    } = A,
    he = u ? `${g}px ${R}px ${h}px ${C}px` : `${o}px`,
    ne = je.current() === je.canvas,
    H = t.filter(Boolean),
    ue = Je.count(H) > 0,
    B = a === "left" || a === "right",
    Qe = a === "right" || a === "bottom";
  if (!ue)
    return k("section", {
      style: gi,
      children: [
        r("div", { style: xi, children: "\u2B50\uFE0F" }),
        r("p", { style: yi, children: "Connect to Content" }),
        r("p", {
          style: wi,
          children:
            "Add layers or components to make infinite auto-playing slideshows.",
        }),
      ],
    });
  let $e = N(null),
    ee = J(() => H.map((M) => xr()), [H]),
    rt = N(void 0),
    [Q, La] = ce({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
    }),
    [Oa, Ot] = ce(!1),
    [qa, qt] = ce(f),
    [Wa, Wt] = ce(!1),
    [ar, Qt] = ce(!1),
    tt = [],
    Ht = 4;
  ne && (Ht = 1);
  let Yt = yr(() => {
    xt.read(() => {
      if (ue && $e.current) {
        let M = H.length - 1,
          Ae = B ? $e.current.offsetWidth : $e.current.offsetHeight,
          we = ee[0].current
            ? B
              ? ee[0].current.offsetLeft
              : ee[0].current.offsetTop
            : 0,
          sr =
            (ee[M].current
              ? B
                ? ee[M].current.offsetLeft + ee[M].current.offsetWidth
                : ee[M].current.offsetTop + ee[M].current.offsetHeight
              : 0) -
            we +
            d,
          _r = ee[0].current
            ? B
              ? ee[0].current.offsetWidth
              : ee[0].current.offsetHeight
            : 0,
          ft = ee[0].current ? ee[0].current.offsetWidth : 0,
          ct = ee[0].current ? ee[0].current.offsetHeight : 0;
        La({
          parent: Ae,
          children: sr,
          item: _r,
          itemWidth: ft,
          itemHeight: ct,
        });
      }
    });
  }, [ue]);
  mt(() => {
    ue && Yt();
  }, [ue, j]);
  let at = N(!0);
  $(
    () =>
      Lr($e.current, ({ contentSize: M }) => {
        !at.current && (M.width || M.height) && (Yt(), Qt(!0)),
          (at.current = !1);
      }),
    []
  ),
    $(() => {
      if (ar) {
        let M = setTimeout(() => Qt(!1), 500);
        return () => clearTimeout(M);
      }
    }, [ar]);
  let nr = H?.length,
    Mr = ne ? 0 : Q?.children,
    nt = Q?.item + d,
    Qa = n * nt,
    [Ne, ur] = ce(n + nr),
    [Ha, Gt] = ce(!1),
    Zt = Aa(),
    Xt = Qe ? 1 : -1,
    ir = wr(Mr),
    $t = B ? -n * (Q?.itemWidth + d) : -n * (Q?.itemHeight + d),
    it = () => Xt * Ne * nt,
    ot = ne
      ? 0
      : Me(ir, (M) => {
          let Ae = qe(-Mr, -Mr * 2, M);
          return isNaN(Ae) ? 0 : Ae;
        }),
    Ya = qe(0, nr, Ne),
    Ga = qe(0, -nr, Ne);
  mt(() => {
    Q?.children !== null && !at.current && ar && ir.set(it());
  }, [Q, Mr, Xt, Qa, Ne, nt, ar]);
  let Jt = () => {
      ne ||
        !ue ||
        !Q.parent ||
        Ha ||
        (ir.get() !== it() && ut(ir, it(), p),
        f &&
          qa &&
          (rt.current = setTimeout(() => {
            ur(Ne + 1), Jt();
          }, P * 1e3)));
    },
    or = (M) => {
      ur(Qe ? Ne - M : Ne + M);
    },
    Za = (M) => {
      let Ae = qe(0, nr, Ne),
        we = qe(0, -nr, Ne),
        Oe = M - Ae,
        sr = M - Math.abs(we);
      ur(Qe ? Ne - sr : Ne + Oe);
    },
    Xa = () => {
      Gt(!0);
    },
    $a = (M, { offset: Ae, velocity: we }) => {
      Gt(!1);
      let Oe = B ? Ae.x : Ae.y,
        sr = 200,
        _r = B ? we.x : we.y,
        ft = Oe < -Q.item / 2,
        ct = Oe > Q.item / 2,
        fn = Math.abs(Oe),
        Tr = Math.round(fn / Q.item),
        ta = Tr === 0 ? 1 : Tr;
      _r > sr ? or(-ta) : _r < -sr ? or(ta) : (ft && or(Tr), ct && or(-Tr));
    };
  $(() => {
    if (!(!Zt || ar)) return Jt(), () => rt.current && clearTimeout(rt.current);
  }, [tt, Zt, ar]);
  let Ja = 0,
    Kt = `calc(${100 / j}% - ${d}px + ${d / j}px)`;
  for (let M = 0; M < Ht; M++)
    tt.push(
      ...Je.map(H, (Ae, we) => {
        let Oe;
        return (
          we === 0 && (Oe = ee[0]),
          we === H.length - 1 && (Oe = ee[1]),
          r(
            Ci,
            {
              ref: ee[we],
              slideKey: M + we + "lg",
              index: M,
              width: B && j > 1 ? Kt : "100%",
              height: B ? "100%" : j > 1 ? Kt : "100%",
              size: Q,
              child: Ae,
              numChildren: H?.length,
              wrappedValue: ot,
              childCounter: Ja++,
              gap: d,
              isCanvas: ne,
              isHorizontal: B,
              effectsOpacity: x,
              effectsScale: D,
              effectsRotate: U,
              children: M + we,
            },
            M + we + "lg"
          )
        );
      })
    );
  let Ka = B ? "to right" : "to bottom",
    ea = G / 2,
    en = 100 - G / 2,
    rn = bi(Ce, 0, ea),
    tn = 100 - Ce,
    st = `linear-gradient(${Ka}, rgba(0, 0, 0, ${ye}) ${rn}%, rgba(0, 0, 0, 1) ${ea}%, rgba(0, 0, 0, 1) ${en}%, rgba(0, 0, 0, ${ye}) ${tn}%)`,
    lt = [],
    Pr = {};
  if (Ir) {
    for (let M = 0; M < H?.length; M++)
      lt.push(
        r(
          ki,
          {
            dotStyle: { ...Vi, width: pe, height: pe, backgroundColor: et },
            buttonStyle: Et,
            selectedOpacity: O,
            opacity: q,
            onClick: () => Za(M),
            wrappedIndex: Ya,
            wrappedIndexInverted: Ga,
            total: nr,
            index: M,
            gap: Kr,
            padding: Jr,
            isHorizontal: B,
            isInverted: Qe,
          },
          M
        )
      );
    ke > 0 &&
      (Pr.backdropFilter =
        Pr.WebkitBackdropFilter =
        Pr.MozBackdropFilter =
          `blur(${ke}px)`);
  }
  let an = c
      ? {
          drag: B ? "x" : "y",
          onDragStart: Xa,
          onDragEnd: $a,
          dragDirectionLock: !0,
          values: { x: ir, y: ir },
          dragMomentum: !1,
        }
      : {},
    nn = le === "top-left" || le === "top-mid" || le === "top-right",
    on = le === "bottom-left" || le === "bottom-mid" || le === "bottom-right",
    sn = le === "top-left" || le === "bottom-left",
    ln = le === "top-right" || le === "bottom-right",
    ra = le === "top-mid" || le === "bottom-mid" || le === "auto";
  return k("section", {
    style: {
      ...Ma,
      padding: he,
      WebkitMaskImage: z ? st : void 0,
      MozMaskImage: z ? st : void 0,
      maskImage: z ? st : void 0,
      opacity: Q?.item !== null ? 1 : Tt,
      userSelect: "none",
    },
    onMouseEnter: () => {
      Ot(!0), L || qt(!1);
    },
    onMouseLeave: () => {
      Ot(!1), L || qt(!0);
    },
    onMouseDown: (M) => {
      M.preventDefault(), Wt(!0);
    },
    onMouseUp: () => Wt(!1),
    children: [
      r("div", {
        style: {
          width: "100%",
          height: "100%",
          margin: 0,
          padding: "inherit",
          position: "absolute",
          inset: 0,
          overflow: ie ? "visible" : "hidden",
          borderRadius: T,
          userSelect: "none",
          perspective: ne ? "none" : Y,
        },
        children: r(m.ul, {
          ref: $e,
          ...an,
          style: {
            ...Ma,
            gap: d,
            placeItems: y,
            x: B ? (ne ? $t : ot) : 0,
            y: B ? 0 : ne ? $t : ot,
            flexDirection: B ? "row" : "column",
            transformStyle: U !== 0 && !ne ? "preserve-3d" : void 0,
            cursor: c ? (Wa ? "grabbing" : "grab") : "auto",
            userSelect: "none",
            ...b,
          },
          children: tt,
        }),
      }),
      k("fieldset", {
        style: { ...vi },
        "aria-label": "Slideshow pagination controls",
        className: "framer--slideshow-controls",
        children: [
          k(m.div, {
            style: {
              position: "absolute",
              display: "flex",
              flexDirection: B ? "row" : "column",
              justifyContent: de ? "space-between" : "center",
              gap: de ? "unset" : mr,
              opacity: We ? Tt : 1,
              alignItems: "center",
              inset: fe,
              top: de ? fe : nn ? dr : "unset",
              left: de ? fe : sn ? Fr : ra ? 0 : "unset",
              right: de ? fe : ln ? tr : ra ? 0 : "unset",
              bottom: de ? fe : on ? pr : "unset",
            },
            animate: We && { opacity: Oa ? 1 : Tt },
            transition: p,
            children: [
              r(m.button, {
                type: "button",
                style: {
                  ...Et,
                  backgroundColor: oe,
                  width: l,
                  height: l,
                  borderRadius: I,
                  rotate: B ? 0 : 90,
                  display: ae ? "block" : "none",
                  pointerEvents: "auto",
                },
                onClick: () => or(-1),
                "aria-label": "Previous",
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: r("img", {
                  width: l,
                  height: l,
                  src:
                    se ||
                    "/framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg",
                  alt: "Back Arrow",
                }),
              }),
              r(m.button, {
                type: "button",
                style: {
                  ...Et,
                  backgroundColor: oe,
                  width: l,
                  height: l,
                  borderRadius: I,
                  rotate: B ? 0 : 90,
                  display: ae ? "block" : "none",
                  pointerEvents: "auto",
                },
                onClick: () => or(1),
                "aria-label": "Next",
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: r("img", {
                  width: l,
                  height: l,
                  src:
                    Ee ||
                    "/framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg",
                  alt: "Next Arrow",
                }),
              }),
            ],
          }),
          lt.length > 1
            ? r("div", {
                style: {
                  ...Si,
                  left: B ? "50%" : Nr,
                  top: B ? "unset" : "50%",
                  transform: B ? "translateX(-50%)" : "translateY(-50%)",
                  flexDirection: B ? "row" : "column",
                  bottom: B ? Nr : "unset",
                  borderRadius: Ar,
                  backgroundColor: hr,
                  userSelect: "none",
                  ...Pr,
                },
                children: lt,
              })
            : null,
        ],
      }),
    ],
  });
}
K.defaultProps = {
  direction: "left",
  dragControl: !1,
  startFrom: 0,
  itemAmount: 1,
  infinity: !0,
  gap: 10,
  padding: 10,
  autoPlayControl: !0,
  effectsOptions: {
    effectsOpacity: 1,
    effectsScale: 1,
    effectsRotate: 0,
    effectsPerspective: 1200,
    effectsHover: !0,
  },
  transitionControl: { type: "spring", stiffness: 200, damping: 40 },
  fadeOptions: {
    fadeContent: !1,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  arrowOptions: {
    showMouseControls: !0,
    arrowShouldFadeIn: !1,
    arrowShouldSpace: !0,
    arrowFill: "rgba(0,0,0,0.2)",
    arrowSize: 40,
  },
  progressOptions: { showProgressDots: !0 },
};
xe(K, {
  slots: {
    type: s.Array,
    title: "Content",
    control: { type: s.ComponentInstance },
  },
  direction: {
    type: s.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    displaySegmentedControl: !0,
    defaultValue: K.defaultProps.direction,
  },
  autoPlayControl: { type: s.Boolean, title: "Auto Play", defaultValue: !0 },
  intervalControl: {
    type: s.Number,
    title: "Interval",
    defaultValue: 1.5,
    min: 0.5,
    max: 10,
    step: 0.1,
    displayStepper: !0,
    unit: "s",
    hidden: (e) => !e.autoPlayControl,
  },
  dragControl: { type: s.Boolean, title: "Draggable", defaultValue: !1 },
  startFrom: {
    type: s.Number,
    title: "Current",
    min: 0,
    max: 10,
    displayStepper: !0,
    defaultValue: K.defaultProps.startFrom,
  },
  effectsOptions: {
    type: s.Object,
    title: "Effects",
    controls: {
      effectsOpacity: {
        type: s.Number,
        title: "Opacity",
        defaultValue: K.defaultProps.effectsOptions.effectsOpacity,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: !0,
      },
      effectsScale: {
        type: s.Number,
        title: "Scale",
        defaultValue: K.defaultProps.effectsOptions.effectsScale,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: !0,
      },
      effectsPerspective: {
        type: s.Number,
        title: "Perspective",
        defaultValue: K.defaultProps.effectsOptions.effectsPerspective,
        min: 200,
        max: 2e3,
        step: 1,
      },
      effectsRotate: {
        type: s.Number,
        title: "Rotate",
        defaultValue: K.defaultProps.effectsOptions.effectsRotate,
        min: -180,
        max: 180,
        step: 1,
      },
      effectsHover: {
        type: s.Boolean,
        title: "On Hover",
        enabledTitle: "Play",
        disabledTitle: "Pause",
        defaultValue: K.defaultProps.effectsOptions.effectsHover,
      },
    },
  },
  alignment: {
    type: s.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  itemAmount: {
    type: s.Number,
    title: "Items",
    min: 1,
    max: 10,
    displayStepper: !0,
    defaultValue: K.defaultProps.itemAmount,
  },
  gap: { type: s.Number, title: "Gap", min: 0 },
  padding: {
    title: "Padding",
    type: s.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    defaultValue: 0,
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  borderRadius: {
    type: s.Number,
    title: "Radius",
    min: 0,
    max: 500,
    displayStepper: !0,
    defaultValue: 0,
  },
  transitionControl: {
    type: s.Transition,
    defaultValue: K.defaultProps.transitionControl,
    title: "Transition",
  },
  fadeOptions: {
    type: s.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: s.Boolean, title: "Fade", defaultValue: !1 },
      overflow: {
        type: s.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(e) {
          return e.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: s.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
      fadeInset: {
        type: s.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: s.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
    },
  },
  arrowOptions: {
    type: s.Object,
    title: "Arrows",
    controls: {
      showMouseControls: {
        type: s.Boolean,
        title: "Show",
        defaultValue: K.defaultProps.arrowOptions.showMouseControls,
      },
      arrowFill: {
        type: s.Color,
        title: "Fill",
        hidden: (e) => !e.showMouseControls,
        defaultValue: K.defaultProps.arrowOptions.arrowFill,
      },
      leftArrow: {
        type: s.Image,
        title: "Previous",
        hidden: (e) => !e.showMouseControls,
      },
      rightArrow: {
        type: s.Image,
        title: "Next",
        hidden: (e) => !e.showMouseControls,
      },
      arrowSize: {
        type: s.Number,
        title: "Size",
        min: 0,
        max: 200,
        displayStepper: !0,
        defaultValue: K.defaultProps.arrowOptions.arrowSize,
        hidden: (e) => !e.showMouseControls,
      },
      arrowRadius: {
        type: s.Number,
        title: "Radius",
        min: 0,
        max: 500,
        defaultValue: 40,
        hidden: (e) => !e.showMouseControls,
      },
      arrowShouldFadeIn: {
        type: s.Boolean,
        title: "Fade In",
        defaultValue: !1,
        hidden: (e) => !e.showMouseControls,
      },
      arrowShouldSpace: {
        type: s.Boolean,
        title: "Distance",
        enabledTitle: "Space",
        disabledTitle: "Group",
        defaultValue: K.defaultProps.arrowOptions.arrowShouldSpace,
        hidden: (e) => !e.showMouseControls,
      },
      arrowPosition: {
        type: s.Enum,
        title: "Position",
        options: [
          "auto",
          "top-left",
          "top-mid",
          "top-right",
          "bottom-left",
          "bottom-mid",
          "bottom-right",
        ],
        optionTitles: [
          "Center",
          "Top Left",
          "Top Middle",
          "Top Right",
          "Bottom Left",
          "Bottom Middle",
          "Bottom Right",
        ],
        hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
      },
      arrowPadding: {
        type: s.Number,
        title: "Inset",
        min: -100,
        max: 100,
        defaultValue: 20,
        displayStepper: !0,
        hidden: (e) => !e.showMouseControls || !e.arrowShouldSpace,
      },
      arrowPaddingTop: {
        type: s.Number,
        title: "Top",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (e) =>
          !e.showMouseControls ||
          e.arrowShouldSpace ||
          e.arrowPosition === "auto" ||
          e.arrowPosition === "bottom-mid" ||
          e.arrowPosition === "bottom-left" ||
          e.arrowPosition === "bottom-right",
      },
      arrowPaddingBottom: {
        type: s.Number,
        title: "Bottom",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (e) =>
          !e.showMouseControls ||
          e.arrowShouldSpace ||
          e.arrowPosition === "auto" ||
          e.arrowPosition === "top-mid" ||
          e.arrowPosition === "top-left" ||
          e.arrowPosition === "top-right",
      },
      arrowPaddingRight: {
        type: s.Number,
        title: "Right",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (e) =>
          !e.showMouseControls ||
          e.arrowShouldSpace ||
          e.arrowPosition === "auto" ||
          e.arrowPosition === "top-left" ||
          e.arrowPosition === "top-mid" ||
          e.arrowPosition === "bottom-left" ||
          e.arrowPosition === "bottom-mid",
      },
      arrowPaddingLeft: {
        type: s.Number,
        title: "Left",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (e) =>
          !e.showMouseControls ||
          e.arrowShouldSpace ||
          e.arrowPosition === "auto" ||
          e.arrowPosition === "top-right" ||
          e.arrowPosition === "top-mid" ||
          e.arrowPosition === "bottom-right" ||
          e.arrowPosition === "bottom-mid",
      },
      arrowGap: {
        type: s.Number,
        title: "Gap",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
      },
    },
  },
  progressOptions: {
    type: s.Object,
    title: "Dots",
    controls: {
      showProgressDots: { type: s.Boolean, title: "Show", defaultValue: !1 },
      dotSize: {
        type: s.Number,
        title: "Size",
        min: 1,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsInset: {
        type: s.Number,
        title: "Inset",
        min: -100,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsGap: {
        type: s.Number,
        title: "Gap",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsPadding: {
        type: s.Number,
        title: "Padding",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsFill: {
        type: s.Color,
        title: "Fill",
        defaultValue: "#fff",
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsBackground: {
        type: s.Color,
        title: "Backdrop",
        defaultValue: "rgba(0,0,0,0.2)",
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsRadius: {
        type: s.Number,
        title: "Radius",
        min: 0,
        max: 200,
        defaultValue: 50,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsOpacity: {
        type: s.Number,
        title: "Opacity",
        min: 0,
        max: 1,
        defaultValue: 0.5,
        step: 0.1,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsActiveOpacity: {
        type: s.Number,
        title: "Current",
        min: 0,
        max: 1,
        defaultValue: 1,
        step: 0.1,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsBlur: {
        type: s.Number,
        title: "Blur",
        min: 0,
        max: 50,
        defaultValue: 0,
        step: 1,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
    },
  },
});
var Ma = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  gi = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  xi = { fontSize: 32, marginBottom: 10 },
  yi = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  wi = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 180,
    lineHeight: 1.5,
    textAlign: "center",
  },
  Et = {
    border: "none",
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    background: "transparent",
    cursor: "pointer",
    margin: 0,
    padding: 0,
  },
  vi = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    pointerEvents: "none",
    userSelect: "none",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 0,
    padding: 0,
    margin: 0,
  },
  bi = (e, t, n) => Math.min(Math.max(e, t), n),
  Ci = ge(function (t, n) {
    var a, i;
    let {
        slideKey: f,
        width: c,
        height: y,
        child: d,
        size: o,
        gap: u,
        wrappedValue: g,
        numChildren: R,
        childCounter: h,
        isCanvas: C,
        effects: j,
        effectsOpacity: F,
        effectsScale: P,
        effectsRotate: p,
        isHorizontal: _,
        isLast: T,
        index: A,
      } = t,
      b = (o?.item + u) * h,
      x = [-o?.item, 0, o?.parent - o?.item + u, o?.parent].map((G) => G - b),
      D = !C && Me(g, x, [-p, 0, 0, p]),
      U = !C && Me(g, x, [p, 0, 0, -p]),
      Y = !C && Me(g, x, [F, 1, 1, F]),
      L = !C && Me(g, x, [P, 1, 1, P]),
      z = !C && Me(g, x, [1, 1, 0, 0]),
      ie = !C && Me(g, (G) => G >= x[1] && G <= x[2]);
    return (
      $(() => {
        if (ie)
          return ie.onChange((G) => {
            var Ce;
            (Ce = n.current) === null ||
              Ce === void 0 ||
              Ce.setAttribute("aria-hidden", !G);
          });
      }, []),
      r(re, {
        inherit: "id",
        children: r("li", {
          style: { display: "contents" },
          "aria-hidden": A !== 0,
          children: gr(
            d,
            {
              ref: n,
              key: f + "child",
              style: {
                ...((a = d.props) === null || a === void 0 ? void 0 : a.style),
                flexShrink: 0,
                userSelect: "none",
                width: c,
                height: y,
                opacity: Y,
                scale: L,
                originX: _ ? z : 0.5,
                originY: _ ? 0.5 : z,
                rotateY: _ ? D : 0,
                rotateX: _ ? 0 : U,
              },
              layoutId: d.props.layoutId
                ? d.props.layoutId + "-original-" + A
                : void 0,
            },
            (i = d.props) === null || i === void 0 ? void 0 : i.children
          ),
        }),
      })
    );
  });
function ki({
  selectedOpacity: e,
  opacity: t,
  total: n,
  index: a,
  wrappedIndex: i,
  wrappedIndexInverted: f,
  dotStyle: c,
  buttonStyle: y,
  gap: d,
  padding: o,
  isHorizontal: u,
  isInverted: g,
  ...R
}) {
  let h = i === a;
  g && (h = Math.abs(f) === a);
  let C = d / 2,
    j = !u && a > 0 ? C : o,
    F = !u && a !== n - 1 ? C : o,
    P = u && a !== n - 1 ? C : o,
    p = u && a > 0 ? C : o;
  return r("button", {
    "aria-label": `Scroll to page ${a + 1}`,
    type: "button",
    ...R,
    style: { ...y, padding: `${j}px ${P}px ${F}px ${p}px` },
    children: r(m.div, {
      style: { ...c },
      initial: !1,
      animate: { opacity: h ? e : t },
      transition: { duration: 0.3 },
    }),
  });
}
var Si = {
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    position: "absolute",
    pointerEvents: "auto",
  },
  Vi = {
    borderRadius: "50%",
    background: "white",
    cursor: "pointer",
    border: "none",
    placeContent: "center",
    placeItems: "center",
    padding: 0,
  };
var Ri = { hQPYyQVa_: { hover: !0 } },
  Fi = ["hQPYyQVa_", "zRPQQjy0y"],
  Ii = "framer-yFsp7",
  Ni = { hQPYyQVa_: "framer-v-1bc6gt5", zRPQQjy0y: "framer-v-oy9x9s" };
function Ai(e, ...t) {
  let n = {};
  return t?.forEach((a) => a && Object.assign(n, e[a])), n;
}
var Mi = { delay: 0, duration: 0.3, ease: [0.12, 0.23, 0.5, 1], type: "tween" },
  Pi = ({ value: e, children: t }) => {
    let n = De(me),
      a = e ?? n.transition,
      i = J(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return r(me.Provider, { value: i, children: t });
  },
  _i = m.create(w),
  Ti = { Main: "hQPYyQVa_", Mobile: "zRPQQjy0y" },
  Ei = ({ click: e, height: t, id: n, link: a, text: i, width: f, ...c }) => {
    var y, d, o;
    return {
      ...c,
      Efd077iVv:
        (y = i ?? c.Efd077iVv) !== null && y !== void 0 ? y : "Nav Link",
      heJNUU0WE: e ?? c.heJNUU0WE,
      TP2V67kCk: a ?? c.TP2V67kCk,
      variant:
        (o = (d = Ti[c.variant]) !== null && d !== void 0 ? d : c.variant) !==
          null && o !== void 0
          ? o
          : "hQPYyQVa_",
    };
  },
  Di = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  Bi = ge(function (e, t) {
    let { activeLocale: n, setLocale: a } = Ve(),
      {
        style: i,
        className: f,
        layoutId: c,
        variant: y,
        TP2V67kCk: d,
        Efd077iVv: o,
        heJNUU0WE: u,
        ...g
      } = Ei(e),
      {
        baseVariant: R,
        classNames: h,
        clearLoadingGesture: C,
        gestureHandlers: j,
        gestureVariant: F,
        isLoading: P,
        setGestureState: p,
        setVariant: _,
        variants: T,
      } = Ue({
        cycleOrder: Fi,
        defaultVariant: "hQPYyQVa_",
        enabledGestures: Ri,
        variant: y,
        variantClassNames: Ni,
      }),
      A = Di(e, T),
      { activeVariantCallback: b, delay: x } = Ye(R),
      D = b(async (...ie) => {
        if ((p({ isPressed: !1 }), u && (await u(...ie)) === !1)) return !1;
      }),
      U = N(null),
      Y = Se(),
      L = [],
      z = ze();
    return r(re, {
      id: c ?? Y,
      children: r(_i, {
        animate: T,
        initial: !1,
        children: r(Pi, {
          value: Mi,
          children: r(Z, {
            href: d,
            nodeId: "hQPYyQVa_",
            openInNewTab: !1,
            smoothScroll: !0,
            children: r(m.a, {
              ...g,
              ...j,
              className: `${ve(
                Ii,
                ...L,
                "framer-1bc6gt5",
                f,
                h
              )} framer-1kl5gij`,
              "data-framer-name": "Main",
              "data-highlight": !0,
              layoutDependency: A,
              layoutId: "hQPYyQVa_",
              onTap: D,
              ref: t ?? U,
              style: {
                backgroundColor: "rgba(225, 225, 225, 0)",
                borderBottomLeftRadius: 100,
                borderBottomRightRadius: 100,
                borderTopLeftRadius: 100,
                borderTopRightRadius: 100,
                ...i,
              },
              variants: {
                "hQPYyQVa_-hover": {
                  backgroundColor:
                    "var(--token-8997574d-0b9a-4e68-8456-ddd0f788a8a5, rgb(227, 228, 222))",
                },
                zRPQQjy0y: {
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                },
              },
              ...Ai(
                {
                  "hQPYyQVa_-hover": { "data-framer-name": void 0 },
                  zRPQQjy0y: { "data-framer-name": "Mobile" },
                },
                R,
                F
              ),
              children: r(E, {
                __fromCanvasComponent: !0,
                children: r(w, {
                  children: r(m.p, {
                    style: {
                      "--font-selector": "RlM7TWFucm9wZS1ib2xk",
                      "--framer-font-family":
                        '"Manrope", "Manrope Placeholder", sans-serif',
                      "--framer-font-weight": "700",
                      "--framer-line-height": "16px",
                      "--framer-text-alignment": "center",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-34f2fca6-59e0-489a-9f06-3c3a8bbd36c7, rgb(29, 31, 19)))",
                    },
                    children: "Nav Link",
                  }),
                }),
                className: "framer-1sf4ran",
                "data-framer-name": "About",
                fonts: ["FS;Manrope-bold"],
                layoutDependency: A,
                layoutId: "JIFSmn7oN",
                style: {
                  "--extracted-r6o4lv":
                    "var(--token-34f2fca6-59e0-489a-9f06-3c3a8bbd36c7, rgb(29, 31, 19))",
                  "--framer-paragraph-spacing": "0px",
                },
                text: o,
                verticalAlignment: "top",
                withExternalLayout: !0,
              }),
            }),
          }),
        }),
      }),
    });
  }),
  ji = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-yFsp7.framer-1kl5gij, .framer-yFsp7 .framer-1kl5gij { display: block; }",
    ".framer-yFsp7.framer-1bc6gt5 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 16px 10px 16px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-yFsp7 .framer-1sf4ran { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yFsp7.framer-1bc6gt5 { gap: 0px; } .framer-yFsp7.framer-1bc6gt5 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-yFsp7.framer-1bc6gt5 > :first-child { margin-left: 0px; } .framer-yFsp7.framer-1bc6gt5 > :last-child { margin-right: 0px; } }",
  ],
  Cr = Fe(Bi, ji, "framer-yFsp7"),
  Te = Cr;
Cr.displayName = "Navigation / Nav Link";
Cr.defaultProps = { height: 36, width: 96 };
xe(Cr, {
  variant: {
    options: ["hQPYyQVa_", "zRPQQjy0y"],
    optionTitles: ["Main", "Mobile"],
    title: "Variant",
    type: s.Enum,
  },
  TP2V67kCk: { title: "Link", type: s.Link },
  Efd077iVv: {
    defaultValue: "Nav Link",
    displayTextArea: !1,
    placeholder: "",
    title: "Text",
    type: s.String,
  },
  heJNUU0WE: { title: "Click", type: s.EventHandler },
});
Ie(
  Cr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Manrope",
          source: "fontshare",
          style: "normal",
          url: "/framerusercontent.com/third-party-assets/fontshare/wf/NGBUP45ES3F7RD5XGKPEDJ6QEPO4TMOK/EXDVWJ2EDDVVV65UENMX33EDDYBX6OF7/6P4FPMFQH7CCC7RZ4UU4NKSGJ2RLF7V5.woff2",
          weight: "700",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var zi = Pe(Te),
  Ui = ["hR7MQrVPd", "pdtcUSEoM", "NV1LHw5tE", "J7hVu1Dti"],
  Li = "framer-pwABc",
  Oi = {
    hR7MQrVPd: "framer-v-14gnlmm",
    J7hVu1Dti: "framer-v-1sn3ibj",
    NV1LHw5tE: "framer-v-n6qfe1",
    pdtcUSEoM: "framer-v-ipsj",
  };
function X(e, ...t) {
  let n = {};
  return t?.forEach((a) => a && Object.assign(n, e[a])), n;
}
var qi = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Wi = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Qi = (e, t) => `translateX(-50%) ${t}`,
  Hi = ({ value: e, children: t }) => {
    let n = De(me),
      a = e ?? n.transition,
      i = J(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return r(me.Provider, { value: i, children: t });
  },
  Yi = m.create(w),
  Gi = {
    "Mobile / Closed": "NV1LHw5tE",
    "Mobile Open": "J7hVu1Dti",
    Desktop: "hR7MQrVPd",
    Tablet: "pdtcUSEoM",
  },
  Zi = ({ height: e, id: t, width: n, ...a }) => {
    var i, f;
    return {
      ...a,
      variant:
        (f = (i = Gi[a.variant]) !== null && i !== void 0 ? i : a.variant) !==
          null && f !== void 0
          ? f
          : "hR7MQrVPd",
    };
  },
  Xi = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  $i = ge(function (e, t) {
    let { activeLocale: n, setLocale: a } = Ve(),
      { style: i, className: f, layoutId: c, variant: y, ...d } = Zi(e),
      {
        baseVariant: o,
        classNames: u,
        clearLoadingGesture: g,
        gestureHandlers: R,
        gestureVariant: h,
        isLoading: C,
        setGestureState: j,
        setVariant: F,
        variants: P,
      } = Ue({
        cycleOrder: Ui,
        defaultVariant: "hR7MQrVPd",
        variant: y,
        variantClassNames: Oi,
      }),
      p = Xi(e, P),
      { activeVariantCallback: _, delay: T } = Ye(o),
      A = _(async (...I) => {
        await T(() => F("NV1LHw5tE"), 100);
      }),
      b = _(async (...I) => {
        F("NV1LHw5tE");
      }),
      x = _(async (...I) => {
        F("GiXi2QuAm");
      }),
      D = _(async (...I) => {
        F("J7hVu1Dti");
      }),
      U = _(async (...I) => {
        F("NV1LHw5tE");
      }),
      Y = N(null),
      L = () => o !== "NV1LHw5tE",
      z = ia(),
      ie = () => o === "J7hVu1Dti",
      G = () => !!["NV1LHw5tE", "J7hVu1Dti"].includes(o),
      Ce = () => o !== "J7hVu1Dti",
      ye = Se(),
      ae = [],
      l = ze();
    return r(re, {
      id: c ?? ye,
      children: r(Yi, {
        animate: P,
        initial: !1,
        children: r(Hi, {
          value: qi,
          ...X({ NV1LHw5tE: { value: Wi } }, o, h),
          children: r(m.nav, {
            ...d,
            ...R,
            className: ve(Li, ...ae, "framer-14gnlmm", f, u),
            "data-framer-name": "Desktop",
            layoutDependency: p,
            layoutId: "hR7MQrVPd",
            ref: t ?? Y,
            style: { ...i },
            ...X(
              {
                J7hVu1Dti: { "data-framer-name": "Mobile Open" },
                NV1LHw5tE: { "data-framer-name": "Mobile / Closed" },
                pdtcUSEoM: { "data-framer-name": "Tablet" },
              },
              o,
              h
            ),
            children: k(m.div, {
              className: "framer-1izmp81",
              "data-border": !0,
              "data-framer-name": "Stack",
              layoutDependency: p,
              layoutId: "msPrd_crr",
              style: {
                "--border-bottom-width": "1px",
                "--border-color": "rgb(255, 255, 255)",
                "--border-left-width": "1px",
                "--border-right-width": "1px",
                "--border-style": "solid",
                "--border-top-width": "1px",
                backdropFilter: "blur(0px)",
                backgroundColor: "rgba(255, 255, 255, 0.75)",
                borderBottomLeftRadius: 100,
                borderBottomRightRadius: 100,
                borderTopLeftRadius: 100,
                borderTopRightRadius: 100,
                WebkitBackdropFilter: "blur(0px)",
              },
              variants: {
                J7hVu1Dti: {
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                  backgroundColor:
                    "var(--token-c94b46c6-8a2c-413b-9ab8-71322910b077, rgb(247, 247, 247))",
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                },
                NV1LHw5tE: {
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                  backgroundColor:
                    "var(--token-c94b46c6-8a2c-413b-9ab8-71322910b077, rgb(247, 247, 247))",
                  borderBottomLeftRadius: 16,
                  borderBottomRightRadius: 16,
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                },
              },
              children: [
                L() &&
                  k(m.div, {
                    className: "framer-1po9m1v",
                    "data-framer-name": "Stack",
                    layoutDependency: p,
                    layoutId: "uUoFEopeW",
                    children: [
                      r(He, {
                        links: [
                          {
                            href: {
                              hash: ":XoqnsNSqu",
                              webPageId: "augiA20Il",
                            },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: {
                              hash: ":XoqnsNSqu",
                              webPageId: "augiA20Il",
                            },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: {
                              hash: ":XoqnsNSqu",
                              webPageId: "augiA20Il",
                            },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (I) =>
                          r(W, {
                            height: 36,
                            y: (l?.y || 0) + 24 + 0 + 15 + 0,
                            ...X(
                              {
                                J7hVu1Dti: {
                                  width: `calc(min(${
                                    l?.width || "100vw"
                                  } * 0.6768, 928px) - 40px)`,
                                  y: (l?.y || 0) + 0 + 0 + 12 + 36 + 0 + 220,
                                },
                                pdtcUSEoM: { y: (l?.y || 0) + 20 + 0 + 4 + 0 },
                              },
                              o,
                              h
                            ),
                            children: r(m.div, {
                              className: "framer-1johs1w-container",
                              layoutDependency: p,
                              layoutId: "Ew4Xpv3FZ-container",
                              children: r(Te, {
                                Efd077iVv: "About",
                                height: "100%",
                                id: "Ew4Xpv3FZ",
                                layoutId: "Ew4Xpv3FZ",
                                TP2V67kCk: I[0],
                                variant: "hQPYyQVa_",
                                width: "100%",
                                ...X(
                                  {
                                    J7hVu1Dti: {
                                      heJNUU0WE: A,
                                      style: { width: "100%" },
                                      TP2V67kCk: I[2],
                                      variant: "zRPQQjy0y",
                                    },
                                    pdtcUSEoM: { TP2V67kCk: I[1] },
                                  },
                                  o,
                                  h
                                ),
                              }),
                            }),
                          }),
                      }),
                      r(He, {
                        links: [
                          {
                            href: {
                              hash: ":ozxJgCNle",
                              webPageId: "augiA20Il",
                            },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: {
                              hash: ":ozxJgCNle",
                              webPageId: "augiA20Il",
                            },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: {
                              hash: ":ozxJgCNle",
                              webPageId: "augiA20Il",
                            },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (I) =>
                          r(W, {
                            height: 36,
                            y: (l?.y || 0) + 24 + 0 + 15 + 0,
                            ...X(
                              {
                                J7hVu1Dti: {
                                  width: `calc(min(${
                                    l?.width || "100vw"
                                  } * 0.6768, 928px) - 40px)`,
                                  y: (l?.y || 0) + 0 + 0 + 12 + 36 + 0 + 88,
                                },
                                pdtcUSEoM: { y: (l?.y || 0) + 20 + 0 + 4 + 0 },
                              },
                              o,
                              h
                            ),
                            children: r(m.div, {
                              className: "framer-k1f344-container",
                              layoutDependency: p,
                              layoutId: "RKVTCw_Kx-container",
                              children: r(Te, {
                                Efd077iVv: "FAQ",
                                height: "100%",
                                id: "RKVTCw_Kx",
                                layoutId: "RKVTCw_Kx",
                                TP2V67kCk: I[0],
                                variant: "hQPYyQVa_",
                                width: "100%",
                                ...X(
                                  {
                                    J7hVu1Dti: {
                                      heJNUU0WE: A,
                                      style: { width: "100%" },
                                      TP2V67kCk: I[2],
                                      variant: "zRPQQjy0y",
                                    },
                                    pdtcUSEoM: { TP2V67kCk: I[1] },
                                  },
                                  o,
                                  h
                                ),
                              }),
                            }),
                          }),
                      }),
                      ie() &&
                        r(He, {
                          links: [
                            {
                              href: {
                                hash: ":PQJk_pe7z",
                                webPageId: "augiA20Il",
                              },
                              implicitPathVariables: void 0,
                            },
                            {
                              href: {
                                hash: ":PQJk_pe7z",
                                webPageId: "augiA20Il",
                              },
                              implicitPathVariables: void 0,
                            },
                          ],
                          children: (I) =>
                            r(W, {
                              ...X(
                                {
                                  J7hVu1Dti: {
                                    height: 36,
                                    y: (l?.y || 0) + 0 + 0 + 12 + 36 + 0 + 44,
                                  },
                                },
                                o,
                                h
                              ),
                              children: r(m.div, {
                                className: "framer-18k3vn8-container",
                                layoutDependency: p,
                                layoutId: "NBTtdzRdg-container",
                                children: r(Te, {
                                  Efd077iVv: "Buy",
                                  height: "100%",
                                  heJNUU0WE: b,
                                  id: "NBTtdzRdg",
                                  layoutId: "NBTtdzRdg",
                                  TP2V67kCk: I[0],
                                  variant: "hQPYyQVa_",
                                  width: "100%",
                                  ...X(
                                    { J7hVu1Dti: { TP2V67kCk: I[1] } },
                                    o,
                                    h
                                  ),
                                }),
                              }),
                            }),
                        }),
                      r(He, {
                        links: [
                          {
                            href: {
                              hash: ":Kug6_bJnl",
                              webPageId: "augiA20Il",
                            },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: {
                              hash: ":Kug6_bJnl",
                              webPageId: "augiA20Il",
                            },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: {
                              hash: ":Kug6_bJnl",
                              webPageId: "augiA20Il",
                            },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (I) =>
                          r(W, {
                            height: 36,
                            y: (l?.y || 0) + 24 + 0 + 15 + 0,
                            ...X(
                              {
                                J7hVu1Dti: {
                                  width: `calc(min(${
                                    l?.width || "100vw"
                                  } * 0.6768, 928px) - 40px)`,
                                  y: (l?.y || 0) + 0 + 0 + 12 + 36 + 0 + 132,
                                },
                                pdtcUSEoM: { y: (l?.y || 0) + 20 + 0 + 4 + 0 },
                              },
                              o,
                              h
                            ),
                            children: r(m.div, {
                              className: "framer-yqr6z3-container",
                              layoutDependency: p,
                              layoutId: "iuidu6Ihr-container",
                              children: r(Te, {
                                Efd077iVv: "Watch",
                                height: "100%",
                                id: "iuidu6Ihr",
                                layoutId: "iuidu6Ihr",
                                TP2V67kCk: I[0],
                                variant: "hQPYyQVa_",
                                width: "100%",
                                ...X(
                                  {
                                    J7hVu1Dti: {
                                      heJNUU0WE: A,
                                      style: { width: "100%" },
                                      TP2V67kCk: I[2],
                                      variant: "zRPQQjy0y",
                                    },
                                    pdtcUSEoM: { TP2V67kCk: I[1] },
                                  },
                                  o,
                                  h
                                ),
                              }),
                            }),
                          }),
                      }),
                      ie() &&
                        r(He, {
                          links: [
                            {
                              href: {
                                hash: ":pRJapcRGE",
                                webPageId: "augiA20Il",
                              },
                              implicitPathVariables: void 0,
                            },
                            {
                              href: {
                                hash: ":pRJapcRGE",
                                webPageId: "augiA20Il",
                              },
                              implicitPathVariables: void 0,
                            },
                          ],
                          children: (I) =>
                            r(W, {
                              ...X(
                                {
                                  J7hVu1Dti: {
                                    height: 36,
                                    y: (l?.y || 0) + 0 + 0 + 12 + 36 + 0 + 0,
                                  },
                                },
                                o,
                                h
                              ),
                              children: r(m.div, {
                                className: "framer-r1z56v-container",
                                layoutDependency: p,
                                layoutId: "a5aMuki7R-container",
                                children: r(Te, {
                                  Efd077iVv: "Trade",
                                  height: "100%",
                                  heJNUU0WE: b,
                                  id: "a5aMuki7R",
                                  layoutId: "a5aMuki7R",
                                  TP2V67kCk: I[0],
                                  variant: "hQPYyQVa_",
                                  width: "100%",
                                  ...X(
                                    { J7hVu1Dti: { TP2V67kCk: I[1] } },
                                    o,
                                    h
                                  ),
                                }),
                              }),
                            }),
                        }),
                      ie() &&
                        r(W, {
                          ...X(
                            {
                              J7hVu1Dti: {
                                height: 36,
                                y: (l?.y || 0) + 0 + 0 + 12 + 36 + 0 + 176,
                              },
                            },
                            o,
                            h
                          ),
                          children: r(m.div, {
                            className: "framer-13azb0b-container",
                            layoutDependency: p,
                            layoutId: "kZmnA0TDN-container",
                            children: r(Te, {
                              Efd077iVv: "Studios",
                              height: "100%",
                              id: "kZmnA0TDN",
                              layoutId: "kZmnA0TDN",
                              TP2V67kCk: "https://www.dannystudios.xyz/",
                              variant: "hQPYyQVa_",
                              width: "100%",
                            }),
                          }),
                        }),
                    ],
                  }),
                k(m.div, {
                  className: "framer-15l6m88",
                  layoutDependency: p,
                  layoutId: "UWg_q8Nx_",
                  children: [
                    r(Z, {
                      href: { hash: ":Jow5OoU99", webPageId: "augiA20Il" },
                      nodeId: "qPttn6g9f",
                      openInNewTab: !1,
                      children: r(Le, {
                        as: "a",
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 666.6666666666666,
                          intrinsicWidth: 666.6666666666666,
                          loading: be((l?.y || 0) + 24 + 0 + 33 + 0 - 65),
                          pixelHeight: 1e3,
                          pixelWidth: 1e3,
                          src: "/framerusercontent.com/images/BunBOyUWA3GkSa2fNA3dI84FN4.png",
                          srcSet:
                            "/framerusercontent.com/images/BunBOyUWA3GkSa2fNA3dI84FN4.png?scale-down-to=512 512w,/framerusercontent.com/images/BunBOyUWA3GkSa2fNA3dI84FN4.png 1000w",
                        },
                        className: "framer-1rau2du framer-zv0mfm",
                        "data-framer-name": "DegenDanny-Head",
                        layoutDependency: p,
                        layoutId: "qPttn6g9f",
                        ...X(
                          {
                            J7hVu1Dti: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 666.6666666666666,
                                intrinsicWidth: 666.6666666666666,
                                loading: be(
                                  (l?.y || 0) + 0 + 0 + 12 + 0 + -280
                                ),
                                pixelHeight: 1e3,
                                pixelWidth: 1e3,
                                sizes: "85px",
                                src: "/framerusercontent.com/images/BunBOyUWA3GkSa2fNA3dI84FN4.png",
                                srcSet:
                                  "/framerusercontent.com/images/BunBOyUWA3GkSa2fNA3dI84FN4.png?scale-down-to=512 512w,/framerusercontent.com/images/BunBOyUWA3GkSa2fNA3dI84FN4.png 1000w",
                              },
                            },
                            NV1LHw5tE: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 666.6666666666666,
                                intrinsicWidth: 666.6666666666666,
                                loading: be((l?.y || 0) + 21 + 0 + 0 + 0 + -14),
                                pixelHeight: 1e3,
                                pixelWidth: 1e3,
                                sizes: "41px",
                                src: "/framerusercontent.com/images/BunBOyUWA3GkSa2fNA3dI84FN4.png",
                                srcSet:
                                  "/framerusercontent.com/images/BunBOyUWA3GkSa2fNA3dI84FN4.png?scale-down-to=512 512w,/framerusercontent.com/images/BunBOyUWA3GkSa2fNA3dI84FN4.png 1000w",
                              },
                              transformTemplate: Qi,
                            },
                            pdtcUSEoM: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 666.6666666666666,
                                intrinsicWidth: 666.6666666666666,
                                loading: be((l?.y || 0) + 20 + 0 + 22 + -6),
                                pixelHeight: 1e3,
                                pixelWidth: 1e3,
                                src: "/framerusercontent.com/images/BunBOyUWA3GkSa2fNA3dI84FN4.png",
                                srcSet:
                                  "/framerusercontent.com/images/BunBOyUWA3GkSa2fNA3dI84FN4.png?scale-down-to=512 512w,/framerusercontent.com/images/BunBOyUWA3GkSa2fNA3dI84FN4.png 1000w",
                              },
                            },
                          },
                          o,
                          h
                        ),
                      }),
                    }),
                    G() &&
                      k(m.div, {
                        "aria-label": "Navigation menu icon",
                        className: "framer-3h6ajo",
                        "data-framer-name": "Nav Icon",
                        "data-highlight": !0,
                        layoutDependency: p,
                        layoutId: "rIBVnjehk",
                        onTap: x,
                        ...X(
                          { J7hVu1Dti: { onTap: U }, NV1LHw5tE: { onTap: D } },
                          o,
                          h
                        ),
                        children: [
                          r(m.div, {
                            className: "framer-1cu41wy",
                            "data-framer-name": "Bottom",
                            layoutDependency: p,
                            layoutId: "sqD8swU7y",
                            style: {
                              backgroundColor:
                                "var(--token-34f2fca6-59e0-489a-9f06-3c3a8bbd36c7, rgb(29, 31, 19))",
                              borderBottomLeftRadius: 10,
                              borderBottomRightRadius: 10,
                              borderTopLeftRadius: 10,
                              borderTopRightRadius: 10,
                              rotate: 0,
                            },
                            variants: { J7hVu1Dti: { rotate: -45 } },
                          }),
                          r(m.div, {
                            className: "framer-3tw0s9",
                            "data-framer-name": "Top",
                            layoutDependency: p,
                            layoutId: "NHaSLHMG3",
                            style: {
                              backgroundColor:
                                "var(--token-34f2fca6-59e0-489a-9f06-3c3a8bbd36c7, rgb(29, 31, 19))",
                              borderBottomLeftRadius: 10,
                              borderBottomRightRadius: 10,
                              borderTopLeftRadius: 10,
                              borderTopRightRadius: 10,
                              rotate: 0,
                            },
                            variants: { J7hVu1Dti: { rotate: 45 } },
                          }),
                        ],
                      }),
                  ],
                }),
                Ce() &&
                  k(m.div, {
                    className: "framer-1q0gppl",
                    "data-framer-name": "Stack",
                    layoutDependency: p,
                    layoutId: "obiDrWJJ7",
                    children: [
                      L() &&
                        r(He, {
                          links: [
                            {
                              href: {
                                hash: ":pRJapcRGE",
                                webPageId: "augiA20Il",
                              },
                              implicitPathVariables: void 0,
                            },
                            {
                              href: {
                                hash: ":pRJapcRGE",
                                webPageId: "augiA20Il",
                              },
                              implicitPathVariables: void 0,
                            },
                          ],
                          children: (I) =>
                            r(W, {
                              height: 36,
                              y: (l?.y || 0) + 24 + 0 + 15 + 0,
                              ...X(
                                {
                                  pdtcUSEoM: {
                                    y: (l?.y || 0) + 20 + 0 + 4 + 0,
                                  },
                                },
                                o,
                                h
                              ),
                              children: r(m.div, {
                                className: "framer-6jubn6-container",
                                layoutDependency: p,
                                layoutId: "N0R7p04GX-container",
                                children: r(Te, {
                                  Efd077iVv: "Trade",
                                  height: "100%",
                                  id: "N0R7p04GX",
                                  layoutId: "N0R7p04GX",
                                  TP2V67kCk: I[0],
                                  variant: "hQPYyQVa_",
                                  width: "100%",
                                  ...X(
                                    { pdtcUSEoM: { TP2V67kCk: I[1] } },
                                    o,
                                    h
                                  ),
                                }),
                              }),
                            }),
                        }),
                      L() &&
                        r(He, {
                          links: [
                            {
                              href: {
                                hash: ":PQJk_pe7z",
                                webPageId: "augiA20Il",
                              },
                              implicitPathVariables: void 0,
                            },
                            {
                              href: {
                                hash: ":PQJk_pe7z",
                                webPageId: "augiA20Il",
                              },
                              implicitPathVariables: void 0,
                            },
                          ],
                          children: (I) =>
                            r(W, {
                              height: 36,
                              y: (l?.y || 0) + 24 + 0 + 15 + 0,
                              ...X(
                                {
                                  pdtcUSEoM: {
                                    y: (l?.y || 0) + 20 + 0 + 4 + 0,
                                  },
                                },
                                o,
                                h
                              ),
                              children: r(m.div, {
                                className: "framer-k5vxi6-container",
                                layoutDependency: p,
                                layoutId: "qQmA6QJ8Y-container",
                                children: r(Te, {
                                  Efd077iVv: "Buy",
                                  height: "100%",
                                  id: "qQmA6QJ8Y",
                                  layoutId: "qQmA6QJ8Y",
                                  TP2V67kCk: I[0],
                                  variant: "hQPYyQVa_",
                                  width: "100%",
                                  ...X(
                                    { pdtcUSEoM: { TP2V67kCk: I[1] } },
                                    o,
                                    h
                                  ),
                                }),
                              }),
                            }),
                        }),
                      L() &&
                        r(W, {
                          height: 36,
                          y: (l?.y || 0) + 24 + 0 + 15 + 0,
                          ...X(
                            { pdtcUSEoM: { y: (l?.y || 0) + 20 + 0 + 4 + 0 } },
                            o,
                            h
                          ),
                          children: r(m.div, {
                            className: "framer-mo67gp-container",
                            layoutDependency: p,
                            layoutId: "i2x3SmtLG-container",
                            children: r(Te, {
                              Efd077iVv: "Twitter/X",
                              height: "100%",
                              id: "i2x3SmtLG",
                              layoutId: "i2x3SmtLG",
                              TP2V67kCk: "https://x.com/danny_erc20",
                              variant: "hQPYyQVa_",
                              width: "100%",
                            }),
                          }),
                        }),
                    ],
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Ji = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-pwABc.framer-zv0mfm, .framer-pwABc .framer-zv0mfm { display: block; }",
    ".framer-pwABc.framer-14gnlmm { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 24px 40px 31px 40px; position: relative; width: 1200px; }",
    ".framer-pwABc .framer-1izmp81 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 928px; overflow: visible; padding: 15px; position: relative; width: 68%; }",
    ".framer-pwABc .framer-1po9m1v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-pwABc .framer-1johs1w-container, .framer-pwABc .framer-k1f344-container, .framer-pwABc .framer-18k3vn8-container, .framer-pwABc .framer-yqr6z3-container, .framer-pwABc .framer-r1z56v-container, .framer-pwABc .framer-13azb0b-container, .framer-pwABc .framer-6jubn6-container, .framer-pwABc .framer-k5vxi6-container, .framer-pwABc .framer-mo67gp-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-pwABc .framer-15l6m88 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 32px; min-width: 94px; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-pwABc .framer-1rau2du { aspect-ratio: 1 / 1; bottom: -41px; flex: none; height: var(--framer-aspect-ratio-supported, 106px); left: -6px; overflow: visible; position: absolute; right: -6px; text-decoration: none; z-index: 1; }",
    ".framer-pwABc .framer-3h6ajo { cursor: pointer; flex: none; height: 32px; overflow: hidden; position: relative; width: 32px; }",
    ".framer-pwABc .framer-1cu41wy { bottom: 10px; flex: none; height: 2px; left: calc(50.00000000000002% - 22px / 2); overflow: hidden; position: absolute; width: 22px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-pwABc .framer-3tw0s9 { flex: none; height: 2px; left: calc(50.00000000000002% - 22px / 2); overflow: hidden; position: absolute; top: 10px; width: 22px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-pwABc .framer-1q0gppl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-pwABc.framer-14gnlmm, .framer-pwABc .framer-1po9m1v, .framer-pwABc .framer-15l6m88, .framer-pwABc .framer-1q0gppl { gap: 0px; } .framer-pwABc.framer-14gnlmm > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-pwABc.framer-14gnlmm > :first-child { margin-top: 0px; } .framer-pwABc.framer-14gnlmm > :last-child { margin-bottom: 0px; } .framer-pwABc .framer-1po9m1v > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-pwABc .framer-1po9m1v > :first-child, .framer-pwABc .framer-15l6m88 > :first-child, .framer-pwABc .framer-1q0gppl > :first-child { margin-left: 0px; } .framer-pwABc .framer-1po9m1v > :last-child, .framer-pwABc .framer-15l6m88 > :last-child, .framer-pwABc .framer-1q0gppl > :last-child { margin-right: 0px; } .framer-pwABc .framer-15l6m88 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-pwABc .framer-1q0gppl > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } }",
    ".framer-pwABc.framer-v-ipsj.framer-14gnlmm { padding: 20px 32px 57px 32px; width: 810px; }",
    ".framer-pwABc.framer-v-ipsj .framer-1izmp81 { padding: 4px 15px 4px 15px; width: 80%; }",
    ".framer-pwABc.framer-v-ipsj .framer-1po9m1v { gap: 4px; }",
    ".framer-pwABc.framer-v-ipsj .framer-15l6m88 { min-height: 66px; min-width: 66px; }",
    ".framer-pwABc.framer-v-ipsj .framer-1rau2du { bottom: unset; height: var(--framer-aspect-ratio-supported, 78px); top: -6px; }",
    ".framer-pwABc.framer-v-ipsj .framer-1q0gppl { gap: 11px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-pwABc.framer-v-ipsj .framer-1po9m1v, .framer-pwABc.framer-v-ipsj .framer-1q0gppl { gap: 0px; } .framer-pwABc.framer-v-ipsj .framer-1po9m1v > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-pwABc.framer-v-ipsj .framer-1po9m1v > :first-child, .framer-pwABc.framer-v-ipsj .framer-1q0gppl > :first-child { margin-left: 0px; } .framer-pwABc.framer-v-ipsj .framer-1po9m1v > :last-child, .framer-pwABc.framer-v-ipsj .framer-1q0gppl > :last-child { margin-right: 0px; } .framer-pwABc.framer-v-ipsj .framer-1q0gppl > * { margin: 0px; margin-left: calc(11px / 2); margin-right: calc(11px / 2); } }",
    ".framer-pwABc.framer-v-n6qfe1.framer-14gnlmm { padding: 21px 0px 31px 0px; width: 390px; }",
    ".framer-pwABc.framer-v-n6qfe1 .framer-1izmp81 { flex-direction: column; gap: 5px; justify-content: flex-start; order: 0; padding: 0px 20px 0px 20px; }",
    ".framer-pwABc.framer-v-n6qfe1 .framer-15l6m88 { gap: unset; justify-content: space-between; min-width: unset; order: 0; width: 100%; }",
    ".framer-pwABc.framer-v-n6qfe1 .framer-1rau2du { bottom: -27px; height: unset; left: 49%; order: 0; right: unset; top: -14px; width: var(--framer-aspect-ratio-supported, 73px); }",
    ".framer-pwABc.framer-v-n6qfe1 .framer-3h6ajo { bottom: -8px; order: 1; position: absolute; right: 0px; z-index: 1; }",
    ".framer-pwABc.framer-v-n6qfe1 .framer-1cu41wy { bottom: 8px; }",
    ".framer-pwABc.framer-v-n6qfe1 .framer-1q0gppl { min-height: 11px; min-width: 286px; order: 2; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-pwABc.framer-v-n6qfe1 .framer-1izmp81, .framer-pwABc.framer-v-n6qfe1 .framer-15l6m88 { gap: 0px; } .framer-pwABc.framer-v-n6qfe1 .framer-1izmp81 > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } .framer-pwABc.framer-v-n6qfe1 .framer-1izmp81 > :first-child { margin-top: 0px; } .framer-pwABc.framer-v-n6qfe1 .framer-1izmp81 > :last-child { margin-bottom: 0px; } .framer-pwABc.framer-v-n6qfe1 .framer-15l6m88 > *, .framer-pwABc.framer-v-n6qfe1 .framer-15l6m88 > :first-child, .framer-pwABc.framer-v-n6qfe1 .framer-15l6m88 > :last-child { margin: 0px; } }",
    ".framer-pwABc.framer-v-1sn3ibj.framer-14gnlmm { padding: 0px 0px 31px 0px; width: 390px; }",
    ".framer-pwABc.framer-v-1sn3ibj .framer-1izmp81 { flex-direction: column; gap: 4px; justify-content: flex-start; order: 0; padding: 12px 20px 4px 20px; }",
    ".framer-pwABc.framer-v-1sn3ibj .framer-1po9m1v { flex-direction: column; order: 1; width: 100%; }",
    ".framer-pwABc.framer-v-1sn3ibj .framer-1johs1w-container { order: 5; width: 100%; }",
    ".framer-pwABc.framer-v-1sn3ibj .framer-k1f344-container { order: 2; width: 100%; }",
    ".framer-pwABc.framer-v-1sn3ibj .framer-18k3vn8-container, .framer-pwABc.framer-v-1sn3ibj .framer-3h6ajo { order: 1; }",
    ".framer-pwABc.framer-v-1sn3ibj .framer-yqr6z3-container { order: 3; width: 100%; }",
    ".framer-pwABc.framer-v-1sn3ibj .framer-r1z56v-container { order: 0; }",
    ".framer-pwABc.framer-v-1sn3ibj .framer-13azb0b-container { order: 4; }",
    ".framer-pwABc.framer-v-1sn3ibj .framer-15l6m88 { gap: unset; justify-content: space-between; min-height: unset; min-width: unset; order: 0; width: 100%; }",
    ".framer-pwABc.framer-v-1sn3ibj .framer-1rau2du { bottom: unset; height: var(--framer-aspect-ratio-supported, 85px); left: -11px; order: 0; right: unset; top: -280px; width: 85px; }",
    ".framer-pwABc.framer-v-1sn3ibj .framer-1cu41wy, .framer-pwABc.framer-v-1sn3ibj .framer-3tw0s9 { bottom: 15px; height: unset; top: 15px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-pwABc.framer-v-1sn3ibj .framer-1izmp81, .framer-pwABc.framer-v-1sn3ibj .framer-1po9m1v, .framer-pwABc.framer-v-1sn3ibj .framer-15l6m88 { gap: 0px; } .framer-pwABc.framer-v-1sn3ibj .framer-1izmp81 > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-pwABc.framer-v-1sn3ibj .framer-1izmp81 > :first-child, .framer-pwABc.framer-v-1sn3ibj .framer-1po9m1v > :first-child { margin-top: 0px; } .framer-pwABc.framer-v-1sn3ibj .framer-1izmp81 > :last-child, .framer-pwABc.framer-v-1sn3ibj .framer-1po9m1v > :last-child { margin-bottom: 0px; } .framer-pwABc.framer-v-1sn3ibj .framer-1po9m1v > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-pwABc.framer-v-1sn3ibj .framer-15l6m88 > *, .framer-pwABc.framer-v-1sn3ibj .framer-15l6m88 > :first-child, .framer-pwABc.framer-v-1sn3ibj .framer-15l6m88 > :last-child { margin: 0px; } }",
    '.framer-pwABc[data-border="true"]::after, .framer-pwABc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  kr = Fe($i, Ji, "framer-pwABc"),
  Dt = kr;
kr.displayName = "Navigation / Navigation Bar";
kr.defaultProps = { height: 121, width: 1200 };
xe(kr, {
  variant: {
    options: ["hR7MQrVPd", "pdtcUSEoM", "NV1LHw5tE", "J7hVu1Dti"],
    optionTitles: ["Desktop", "Tablet", "Mobile / Closed", "Mobile Open"],
    title: "Variant",
    type: s.Enum,
  },
});
Ie(kr, [{ explicitInter: !0, fonts: [] }, ...zi], {
  supportsExplicitInterCodegen: !0,
});
Ke.loadFonts(["FS;Manrope-regular", "FS;Manrope-bold"]);
var Wr = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Manrope",
          source: "fontshare",
          style: "normal",
          url: "/framerusercontent.com/third-party-assets/fontshare/wf/2TYFCBHUANEXS6QGR5EQDUNAFH6LSWM3/AYNOU3VEA4LRTDNKJQUFNVNUTYSGOUOP/UXO4O7K2G3HI3D2VKD7UXVJVJD26P4BQ.woff2",
          weight: "400",
        },
        {
          family: "Manrope",
          source: "fontshare",
          style: "normal",
          url: "/framerusercontent.com/third-party-assets/fontshare/wf/NGBUP45ES3F7RD5XGKPEDJ6QEPO4TMOK/EXDVWJ2EDDVVV65UENMX33EDDYBX6OF7/6P4FPMFQH7CCC7RZ4UU4NKSGJ2RLF7V5.woff2",
          weight: "700",
        },
      ],
    },
  ],
  Qr = [
    '.framer-wtCv0 .framer-styles-preset-19883eq:not(.rich-text-wrapper), .framer-wtCv0 .framer-styles-preset-19883eq.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 20px; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-34f2fca6-59e0-489a-9f06-3c3a8bbd36c7, #1d1f13); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
  ],
  Hr = "framer-wtCv0";
var Ki = { QrkL5QToF: { hover: !0 }, Y1MCu4hyz: { hover: !0 } },
  eo = ["QrkL5QToF", "Y1MCu4hyz"],
  ro = "framer-gUpB4",
  to = { QrkL5QToF: "framer-v-1rnbh43", Y1MCu4hyz: "framer-v-wdxb3z" };
function ao(e, ...t) {
  let n = {};
  return t?.forEach((a) => a && Object.assign(n, e[a])), n;
}
var no = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" },
  io = ({ value: e, children: t }) => {
    let n = De(me),
      a = e ?? n.transition,
      i = J(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return r(me.Provider, { value: i, children: t });
  },
  oo = m(w),
  so = { Closed: "QrkL5QToF", Open: "Y1MCu4hyz" },
  lo = ({ answer: e, height: t, id: n, question: a, width: i, ...f }) => {
    var c, y, d, o;
    return {
      ...f,
      QAlonVxd6:
        (c = a ?? f.QAlonVxd6) !== null && c !== void 0 ? c : "Question",
      QfiyqFHRv: (y = e ?? f.QfiyqFHRv) !== null && y !== void 0 ? y : "Answer",
      variant:
        (o = (d = so[f.variant]) !== null && d !== void 0 ? d : f.variant) !==
          null && o !== void 0
          ? o
          : "QrkL5QToF",
    };
  },
  fo = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  co = ge(function (e, t) {
    let { activeLocale: n, setLocale: a } = Ve(),
      {
        style: i,
        className: f,
        layoutId: c,
        variant: y,
        QAlonVxd6: d,
        QfiyqFHRv: o,
        ...u
      } = lo(e),
      {
        baseVariant: g,
        classNames: R,
        clearLoadingGesture: h,
        gestureHandlers: C,
        gestureVariant: j,
        isLoading: F,
        setGestureState: P,
        setVariant: p,
        variants: _,
      } = Ue({
        cycleOrder: eo,
        defaultVariant: "QrkL5QToF",
        enabledGestures: Ki,
        variant: y,
        variantClassNames: to,
      }),
      T = fo(e, _),
      { activeVariantCallback: A, delay: b } = Ye(g),
      x = A(async (...G) => {
        P({ isPressed: !1 }), p("Y1MCu4hyz");
      }),
      D = A(async (...G) => {
        P({ isPressed: !1 }), p("QrkL5QToF");
      }),
      U = N(null),
      Y = () => j === "Y1MCu4hyz-hover" || g === "Y1MCu4hyz",
      L = Se(),
      z = [Hr],
      ie = ze();
    return r(re, {
      id: c ?? L,
      children: r(oo, {
        animate: _,
        initial: !1,
        children: r(io, {
          value: no,
          children: k(m.div, {
            ...u,
            ...C,
            className: ve(ro, ...z, "framer-1rnbh43", f, R),
            "data-framer-name": "Closed",
            "data-highlight": !0,
            layoutDependency: T,
            layoutId: "QrkL5QToF",
            onTap: x,
            ref: t ?? U,
            style: {
              backdropFilter: "blur(4px)",
              backgroundColor:
                "var(--token-c94b46c6-8a2c-413b-9ab8-71322910b077, rgb(248, 248, 246))",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              WebkitBackdropFilter: "blur(4px)",
              ...i,
            },
            variants: {
              "QrkL5QToF-hover": {
                backgroundColor:
                  "var(--token-8997574d-0b9a-4e68-8456-ddd0f788a8a5, rgb(225, 225, 225))",
              },
              "Y1MCu4hyz-hover": {
                backgroundColor:
                  "var(--token-8997574d-0b9a-4e68-8456-ddd0f788a8a5, rgb(225, 225, 225))",
              },
            },
            ...ao(
              {
                "QrkL5QToF-hover": { "data-framer-name": void 0 },
                "Y1MCu4hyz-hover": { "data-framer-name": void 0 },
                Y1MCu4hyz: { "data-framer-name": "Open", onTap: D },
              },
              g,
              j
            ),
            children: [
              k(m.div, {
                className: "framer-1otn1ql",
                layoutDependency: T,
                layoutId: "bIojxx8Q8",
                children: [
                  r(E, {
                    __fromCanvasComponent: !0,
                    children: r(w, {
                      children: r(m.h3, {
                        style: {
                          "--font-selector": "RlM7TWFucm9wZS1tZWRpdW0=",
                          "--framer-font-family":
                            '"Manrope", "Manrope Placeholder", sans-serif',
                          "--framer-font-size": "18px",
                          "--framer-font-weight": "500",
                          "--framer-line-height": "26px",
                          "--framer-text-alignment": "left",
                          "--framer-text-color":
                            "var(--extracted-a0htzi, rgb(29, 31, 19))",
                        },
                        children: "Question",
                      }),
                    }),
                    className: "framer-1ceqju6",
                    fonts: ["FS;Manrope-medium"],
                    layoutDependency: T,
                    layoutId: "q6JFpBTHR",
                    style: {
                      "--extracted-a0htzi": "rgb(29, 31, 19)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    text: d,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  r(Ge, {
                    className: "framer-1n7yghk",
                    "data-framer-name": "Arrow Icon",
                    fill: "rgba(0,0,0,1)",
                    intrinsicHeight: 20,
                    intrinsicWidth: 20,
                    layoutDependency: T,
                    layoutId: "ic8qKQv6i",
                    style: { rotate: 180 },
                    svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16684 12.0833L10.0002 6.24992L15.8335 12.0833" stroke="#1D2013" stroke-width="2" stroke-linecap="square"/>
</svg>
`,
                    variants: {
                      "Y1MCu4hyz-hover": { rotate: 0 },
                      Y1MCu4hyz: { rotate: 0 },
                    },
                    withExternalLayout: !0,
                  }),
                ],
              }),
              Y() &&
                r(E, {
                  __fromCanvasComponent: !0,
                  children: r(w, {
                    children: r(m.p, {
                      className: "framer-styles-preset-19883eq",
                      "data-styles-preset": "D4oaMJloZ",
                      children:
                        "The timeline for results varies depending on the project's complexity and scope. Typically, clients start seeing initial results within the first few months.",
                    }),
                  }),
                  className: "framer-1xlzsbz",
                  fonts: ["Inter"],
                  layoutDependency: T,
                  layoutId: "sE9LCFkg7",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  text: o,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
            ],
          }),
        }),
      }),
    });
  }),
  mo = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-gUpB4.framer-8xrp5r, .framer-gUpB4 .framer-8xrp5r { display: block; }",
    ".framer-gUpB4.framer-1rnbh43 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 24px 20px 24px; position: relative; width: 544px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-gUpB4 .framer-1otn1ql { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-gUpB4 .framer-1ceqju6 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-gUpB4 .framer-1n7yghk { flex: none; height: 20px; position: relative; width: 20px; }",
    ".framer-gUpB4 .framer-1xlzsbz { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-gUpB4.framer-1rnbh43, .framer-gUpB4 .framer-1otn1ql { gap: 0px; } .framer-gUpB4.framer-1rnbh43 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-gUpB4.framer-1rnbh43 > :first-child { margin-top: 0px; } .framer-gUpB4.framer-1rnbh43 > :last-child { margin-bottom: 0px; } .framer-gUpB4 .framer-1otn1ql > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-gUpB4 .framer-1otn1ql > :first-child { margin-left: 0px; } .framer-gUpB4 .framer-1otn1ql > :last-child { margin-right: 0px; } }",
    ...Qr,
  ],
  Sr = Fe(co, mo, "framer-gUpB4"),
  Vr = Sr;
Sr.displayName = "FAQ / FAQ Card";
Sr.defaultProps = { height: 66, width: 544 };
xe(Sr, {
  variant: {
    options: ["QrkL5QToF", "Y1MCu4hyz"],
    optionTitles: ["Closed", "Open"],
    title: "Variant",
    type: s.Enum,
  },
  QAlonVxd6: {
    defaultValue: "Question",
    displayTextArea: !1,
    title: "Question",
    type: s.String,
  },
  QfiyqFHRv: {
    defaultValue: "Answer",
    displayTextArea: !0,
    title: "Answer",
    type: s.String,
  },
});
Ie(
  Sr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Manrope",
          source: "fontshare",
          style: "normal",
          url: "/framerusercontent.com/third-party-assets/fontshare/wf/BNWG6MUI4RTC6WEND2VPDH4MHMIVU3XZ/R5YXY5FMVG6PXU36GNEEA24MIPMEPGSM/CIM4KQCLZSMMLWPVH25IDDSTY4ENPHEY.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "/framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "/framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "/framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...Ze(Wr),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var po = Pe(Vr),
  ho = "framer-lxNb6",
  uo = { d6PuTwweI: "framer-v-rum5j0" };
var go = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" },
  xo = ({ value: e, children: t }) => {
    let n = De(me),
      a = e ?? n.transition,
      i = J(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return r(me.Provider, { value: i, children: t });
  },
  yo = m.create(w),
  wo = ({ height: e, id: t, width: n, ...a }) => ({ ...a }),
  vo = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  bo = ge(function (e, t) {
    let { activeLocale: n, setLocale: a } = Ve(),
      { style: i, className: f, layoutId: c, variant: y, ...d } = wo(e),
      {
        baseVariant: o,
        classNames: u,
        clearLoadingGesture: g,
        gestureHandlers: R,
        gestureVariant: h,
        isLoading: C,
        setGestureState: j,
        setVariant: F,
        variants: P,
      } = Ue({
        defaultVariant: "d6PuTwweI",
        variant: y,
        variantClassNames: uo,
      }),
      p = vo(e, P),
      _ = N(null),
      T = Se(),
      A = [],
      b = ze();
    return r(re, {
      id: c ?? T,
      children: r(yo, {
        animate: P,
        initial: !1,
        children: r(xo, {
          value: go,
          children: k(m.div, {
            ...d,
            ...R,
            className: ve(ho, ...A, "framer-rum5j0", f, u),
            "data-framer-name": "Main",
            layoutDependency: p,
            layoutId: "d6PuTwweI",
            ref: t ?? _,
            style: { ...i },
            children: [
              r(W, {
                height: 66,
                width: b?.width || "100vw",
                y: (b?.y || 0) + 0 + 0,
                children: r(m.div, {
                  className: "framer-14j41ik-container",
                  layoutDependency: p,
                  layoutId: "XkGyPmAch-container",
                  children: r(Vr, {
                    height: "100%",
                    id: "XkGyPmAch",
                    layoutId: "XkGyPmAch",
                    QAlonVxd6: "Who is Danny?",
                    QfiyqFHRv:
                      "Danny is a degenerate gambler living on the Ethereum Blockchain. Watch Danny's adventures through his episodes that are released throughout the month.",
                    style: { width: "100%" },
                    variant: "QrkL5QToF",
                    width: "100%",
                  }),
                }),
              }),
              r(W, {
                height: 66,
                width: b?.width || "100vw",
                y: (b?.y || 0) + 0 + 74,
                children: r(m.div, {
                  className: "framer-1d2f46j-container",
                  layoutDependency: p,
                  layoutId: "wfoixa__t-container",
                  children: r(Vr, {
                    height: "100%",
                    id: "wfoixa__t",
                    layoutId: "wfoixa__t",
                    QAlonVxd6: "Should I invest in $DANNY ?",
                    QfiyqFHRv: `Disclaimer*  $DANNY is a memecoin and has no utility. Don't risk money you are afraid of losing.

The price may go up or it may go down. We are not responsible for the price of the token.`,
                    style: { width: "100%" },
                    variant: "QrkL5QToF",
                    width: "100%",
                  }),
                }),
              }),
              r(W, {
                height: 66,
                width: b?.width || "100vw",
                y: (b?.y || 0) + 0 + 148,
                children: r(m.div, {
                  className: "framer-1xex5uv-container",
                  layoutDependency: p,
                  layoutId: "M3R9Driql-container",
                  children: r(Vr, {
                    height: "100%",
                    id: "M3R9Driql",
                    layoutId: "M3R9Driql",
                    QAlonVxd6: "How do I get $DANNY ? ",
                    QfiyqFHRv:
                      "You can easily buy $DANNY on the Uniswap DEX (app.uniswap.org) by swapping Ethereum for $DANNY. Alternatively, download the Metamask app from the App Store and purchase directly within the app!",
                    style: { width: "100%" },
                    variant: "QrkL5QToF",
                    width: "100%",
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Co = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-lxNb6.framer-12x3cv, .framer-lxNb6 .framer-12x3cv { display: block; }",
    ".framer-lxNb6.framer-rum5j0 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 544px; }",
    ".framer-lxNb6 .framer-14j41ik-container, .framer-lxNb6 .framer-1d2f46j-container, .framer-lxNb6 .framer-1xex5uv-container { flex: none; height: auto; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-lxNb6.framer-rum5j0 { gap: 0px; } .framer-lxNb6.framer-rum5j0 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-lxNb6.framer-rum5j0 > :first-child { margin-top: 0px; } .framer-lxNb6.framer-rum5j0 > :last-child { margin-bottom: 0px; } }",
  ],
  Yr = Fe(bo, Co, "framer-lxNb6"),
  Bt = Yr;
Yr.displayName = "FAQ / FAQs";
Yr.defaultProps = { height: 214, width: 544 };
Ie(Yr, [{ explicitInter: !0, fonts: [] }, ...po], {
  supportsExplicitInterCodegen: !0,
});
Ke.loadFonts([]);
var Gr = [{ explicitInter: !0, fonts: [] }],
  Zr = [
    ".framer-SVw5N .framer-styles-preset-wvlk38:not(.rich-text-wrapper), .framer-SVw5N .framer-styles-preset-wvlk38.rich-text-wrapper a { --framer-link-current-text-decoration: none; --framer-link-hover-text-color: #738d0c; --framer-link-hover-text-decoration: underline; --framer-link-text-decoration: none; transition: color 0.3s cubic-bezier(0.12, 0.23, 0.5, 1) 0s; }",
  ],
  Xr = "framer-SVw5N";
var ko = ["mSwtkHQbX", "Qhpn97F2L", "KIfhDFPen"],
  So = "framer-Uecsh",
  Vo = {
    KIfhDFPen: "framer-v-1679v6z",
    mSwtkHQbX: "framer-v-m8mbwm",
    Qhpn97F2L: "framer-v-3eq463",
  };
function jt(e, ...t) {
  let n = {};
  return t?.forEach((a) => a && Object.assign(n, e[a])), n;
}
var Ro = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Fo = ({ value: e, children: t }) => {
    let n = De(me),
      a = e ?? n.transition,
      i = J(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return r(me.Provider, { value: i, children: t });
  },
  Io = m.create(w),
  No = { Desktop: "mSwtkHQbX", Phone: "KIfhDFPen", Tablet: "Qhpn97F2L" },
  Ao = ({ height: e, id: t, width: n, ...a }) => {
    var i, f;
    return {
      ...a,
      variant:
        (f = (i = No[a.variant]) !== null && i !== void 0 ? i : a.variant) !==
          null && f !== void 0
          ? f
          : "mSwtkHQbX",
    };
  },
  Mo = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  Po = ge(function (e, t) {
    let { activeLocale: n, setLocale: a } = Ve(),
      { style: i, className: f, layoutId: c, variant: y, ...d } = Ao(e),
      {
        baseVariant: o,
        classNames: u,
        clearLoadingGesture: g,
        gestureHandlers: R,
        gestureVariant: h,
        isLoading: C,
        setGestureState: j,
        setVariant: F,
        variants: P,
      } = Ue({
        cycleOrder: ko,
        defaultVariant: "mSwtkHQbX",
        variant: y,
        variantClassNames: Vo,
      }),
      p = Mo(e, P),
      { activeVariantCallback: _, delay: T } = Ye(o),
      A = _(async (...L) => {
        F("KIfhDFPen");
      }),
      b = N(null),
      x = () => o !== "KIfhDFPen",
      D = Se(),
      U = [Xr, Hr],
      Y = ze();
    return r(re, {
      id: c ?? D,
      children: r(Io, {
        animate: P,
        initial: !1,
        children: r(Fo, {
          value: Ro,
          children: k(m.footer, {
            ...d,
            ...R,
            className: ve(So, ...U, "framer-m8mbwm", f, u),
            "data-border": !0,
            "data-framer-name": "Desktop",
            layoutDependency: p,
            layoutId: "mSwtkHQbX",
            ref: t ?? b,
            style: {
              "--border-bottom-width": "0px",
              "--border-color":
                "var(--token-8997574d-0b9a-4e68-8456-ddd0f788a8a5, rgb(227, 228, 222))",
              "--border-left-width": "0px",
              "--border-right-width": "0px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor: "rgb(107, 5, 5)",
              ...i,
            },
            ...jt(
              {
                KIfhDFPen: { "data-framer-name": "Phone" },
                Qhpn97F2L: { "data-framer-name": "Tablet" },
              },
              o,
              h
            ),
            children: [
              x() &&
                r(E, {
                  __fromCanvasComponent: !0,

                  className: "framer-ir2ne1",
                  fonts: ["FS;Manrope-bold"],
                  layoutDependency: p,
                  layoutId: "bijQxilqU",
                  style: {
                    "--extracted-r6o4lv": "rgb(255, 255, 255)",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              r(m.div, {
                className: "framer-1ssqy38",
                layoutDependency: p,
                layoutId: "wzCzKtnpq",
                children: k(m.div, {
                  className: "framer-16xqwi6",
                  layoutDependency: p,
                  layoutId: "b0PmeMtTc",
                  children: [
                    r(E, {
                      __fromCanvasComponent: !0,
                      children: r(w, {
                        children: r(m.p, {
                          style: {
                            "--font-selector": "RlM7TWFucm9wZS1ib2xk",
                            "--framer-font-family":
                              '"Manrope", "Manrope Placeholder", sans-serif',
                            "--framer-font-size": "14px",
                            "--framer-font-weight": "700",
                            "--framer-line-height": "14px",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                          },
                          children: "\xA9 2025 Degen Danny",
                        }),
                      }),
                      className: "framer-75ihab",
                      "data-framer-name": "Made by Sebadam",
                      fonts: ["FS;Manrope-bold"],
                      layoutDependency: p,
                      layoutId: "hJOZFhnJk",
                      style: {
                        "--extracted-r6o4lv": "rgb(255, 255, 255)",
                        "--framer-paragraph-spacing": "0px",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    r(m.div, {
                      className: "framer-zuvk8v",
                      layoutDependency: p,
                      layoutId: "gZ9nGW7BP",
                      ...jt(
                        { KIfhDFPen: { "data-highlight": !0, onTap: A } },
                        o,
                        h
                      ),
                      children: r(E, {
                        __fromCanvasComponent: !0,
                        children: r(w, {
                          children: k(m.p, {
                            style: {
                              "--font-selector": "RlM7TWFucm9wZS1ib2xk",
                              "--framer-font-family":
                                '"Manrope", "Manrope Placeholder", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "700",
                              "--framer-line-height": "14px",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                            },
                            children: [
                              "Made by danny",
                              
                            ],
                          }),
                        }),
                        className: "framer-l30fmi",
                        "data-framer-name": "Made by Sebadam",
                        fonts: ["FS;Manrope-bold"],
                        layoutDependency: p,
                        layoutId: "V25RPIRmp",
                        style: {
                          "--extracted-r6o4lv": "rgb(255, 255, 255)",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
              }),
              r(E, {
                __fromCanvasComponent: !0,
                children: k(w, {
                  children: [
                    r(m.p, {
                      className: "framer-styles-preset-19883eq",
                      "data-styles-preset": "D4oaMJloZ",
                      style: {
                        "--framer-text-alignment": "center",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                      },
                      children:
                        "Disclaimer* $DANNY is a memecoin and has no utility. Don't risk money you are afraid of losing.",
                    }),
                    r(m.p, {
                      className: "framer-styles-preset-19883eq",
                      "data-styles-preset": "D4oaMJloZ",
                      style: {
                        "--framer-text-alignment": "center",
                        "--framer-text-color":
                          "var(--extracted-2gxw0f, rgb(255, 255, 255))",
                      },
                      children:
                        "The price may go up or it may go down. We are not responsible for the price of the token.",
                    }),
                  ],
                }),
                className: "framer-1r79o3q",
                fonts: ["Inter"],
                layoutDependency: p,
                layoutId: "GYLl4Yhqa",
                style: {
                  "--extracted-2gxw0f": "rgb(255, 255, 255)",
                  "--extracted-r6o4lv": "rgb(255, 255, 255)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                variants: {
                  KIfhDFPen: {
                    "--extracted-14qxiz": "rgb(255, 255, 255)",
                    "--extracted-1iakedh": "rgb(255, 255, 255)",
                  },
                },
                verticalAlignment: "top",
                withExternalLayout: !0,
                ...jt(
                  {
                    KIfhDFPen: {
                      children: k(w, {
                        children: [
                          r(m.p, {
                            style: {
                              "--font-selector": "RlM7TWFucm9wZS1yZWd1bGFy",
                              "--framer-font-family":
                                '"Manrope", "Manrope Placeholder", sans-serif',
                              "--framer-font-size": "13px",
                              "--framer-line-height": "20px",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                            },
                            children:
                              "Disclaimer* $DANNY is a memecoin and has no utility. ",
                          }),
                          r(m.p, {
                            style: {
                              "--font-selector": "RlM7TWFucm9wZS1yZWd1bGFy",
                              "--framer-font-family":
                                '"Manrope", "Manrope Placeholder", sans-serif',
                              "--framer-font-size": "13px",
                              "--framer-line-height": "20px",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-2gxw0f, rgb(255, 255, 255))",
                            },
                            children:
                              "Don't risk money you are afraid of losing.",
                          }),
                          r(m.p, {
                            style: {
                              "--font-selector": "RlM7TWFucm9wZS1yZWd1bGFy",
                              "--framer-font-family":
                                '"Manrope", "Manrope Placeholder", sans-serif',
                              "--framer-font-size": "13px",
                              "--framer-line-height": "20px",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-1iakedh, rgb(255, 255, 255))",
                            },
                            children: "The price may go up or it may go down. ",
                          }),
                          r(m.p, {
                            style: {
                              "--font-selector": "RlM7TWFucm9wZS1yZWd1bGFy",
                              "--framer-font-family":
                                '"Manrope", "Manrope Placeholder", sans-serif',
                              "--framer-font-size": "13px",
                              "--framer-line-height": "20px",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-14qxiz, rgb(255, 255, 255))",
                            },
                            children:
                              "We are not responsible for the price of the token.",
                          }),
                        ],
                      }),
                      fonts: ["FS;Manrope-regular"],
                    },
                  },
                  o,
                  h
                ),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  _o = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Uecsh.framer-ufu6la, .framer-Uecsh .framer-ufu6la { display: block; }",
    ".framer-Uecsh.framer-m8mbwm { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 22px 40px 22px 40px; position: relative; width: 1200px; }",
    ".framer-Uecsh .framer-ir2ne1, .framer-Uecsh .framer-75ihab, .framer-Uecsh .framer-l30fmi, .framer-Uecsh .framer-1r79o3q { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-Uecsh .framer-1ssqy38 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1120px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-Uecsh .framer-16xqwi6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-Uecsh .framer-zuvk8v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Uecsh.framer-m8mbwm, .framer-Uecsh .framer-1ssqy38, .framer-Uecsh .framer-zuvk8v { gap: 0px; } .framer-Uecsh.framer-m8mbwm > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-Uecsh.framer-m8mbwm > :first-child, .framer-Uecsh .framer-1ssqy38 > :first-child { margin-top: 0px; } .framer-Uecsh.framer-m8mbwm > :last-child, .framer-Uecsh .framer-1ssqy38 > :last-child { margin-bottom: 0px; } .framer-Uecsh .framer-1ssqy38 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-Uecsh .framer-zuvk8v > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-Uecsh .framer-zuvk8v > :first-child { margin-left: 0px; } .framer-Uecsh .framer-zuvk8v > :last-child { margin-right: 0px; } }",
    ".framer-Uecsh.framer-v-3eq463.framer-m8mbwm { padding: 22px 32px 22px 32px; width: 810px; }",
    ".framer-Uecsh.framer-v-1679v6z.framer-m8mbwm { padding: 22px 20px 48px 20px; width: 390px; }",
    ".framer-Uecsh.framer-v-1679v6z .framer-1ssqy38, .framer-Uecsh.framer-v-1679v6z .framer-75ihab { order: 1; }",
    ".framer-Uecsh.framer-v-1679v6z .framer-16xqwi6 { flex-direction: column; gap: 32px; justify-content: flex-start; }",
    ".framer-Uecsh.framer-v-1679v6z .framer-zuvk8v { align-content: flex-start; align-items: flex-start; cursor: pointer; flex-direction: column; gap: 24px; order: 0; }",
    ".framer-Uecsh.framer-v-1679v6z .framer-1r79o3q { order: 2; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Uecsh.framer-v-1679v6z .framer-16xqwi6, .framer-Uecsh.framer-v-1679v6z .framer-zuvk8v { gap: 0px; } .framer-Uecsh.framer-v-1679v6z .framer-16xqwi6 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-Uecsh.framer-v-1679v6z .framer-16xqwi6 > :first-child, .framer-Uecsh.framer-v-1679v6z .framer-zuvk8v > :first-child { margin-top: 0px; } .framer-Uecsh.framer-v-1679v6z .framer-16xqwi6 > :last-child, .framer-Uecsh.framer-v-1679v6z .framer-zuvk8v > :last-child { margin-bottom: 0px; } .framer-Uecsh.framer-v-1679v6z .framer-zuvk8v > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } }",
    ...Zr,
    ...Qr,
    '.framer-Uecsh[data-border="true"]::after, .framer-Uecsh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Rr = Fe(Po, _o, "framer-Uecsh"),
  zt = Rr;
Rr.displayName = "Navigation / Footer";
Rr.defaultProps = { height: 174, width: 1200 };
xe(Rr, {
  variant: {
    options: ["mSwtkHQbX", "Qhpn97F2L", "KIfhDFPen"],
    optionTitles: ["Desktop", "Tablet", "Phone"],
    title: "Variant",
    type: s.Enum,
  },
});
Ie(
  Rr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Manrope",
          source: "fontshare",
          style: "normal",
          url: "/framerusercontent.com/third-party-assets/fontshare/wf/NGBUP45ES3F7RD5XGKPEDJ6QEPO4TMOK/EXDVWJ2EDDVVV65UENMX33EDDYBX6OF7/6P4FPMFQH7CCC7RZ4UU4NKSGJ2RLF7V5.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "/framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "/framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "/framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
        {
          family: "Manrope",
          source: "fontshare",
          style: "normal",
          url: "/framerusercontent.com/third-party-assets/fontshare/wf/2TYFCBHUANEXS6QGR5EQDUNAFH6LSWM3/AYNOU3VEA4LRTDNKJQUFNVNUTYSGOUOP/UXO4O7K2G3HI3D2VKD7UXVJVJD26P4BQ.woff2",
          weight: "400",
        },
      ],
    },
    ...Ze(Gr),
    ...Ze(Wr),
  ],
  { supportsExplicitInterCodegen: !0 }
);
Ke.loadFonts(["FS;Manrope-semibold", "FS;Manrope-bold"]);
var Ta = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Manrope",
          source: "fontshare",
          style: "normal",
          url: "/framerusercontent.com/third-party-assets/fontshare/wf/6U2SGH566NSNERG6RGEV3DSNEK7DL2RF/JRDYRKMSAW2H35IWEQIPL67HAJQ35MG5/JNU3GNMUBPWW6V6JTED3S27XL5HN7NM5.woff2",
          weight: "600",
        },
        {
          family: "Manrope",
          source: "fontshare",
          style: "normal",
          url: "/framerusercontent.com/third-party-assets/fontshare/wf/NGBUP45ES3F7RD5XGKPEDJ6QEPO4TMOK/EXDVWJ2EDDVVV65UENMX33EDDYBX6OF7/6P4FPMFQH7CCC7RZ4UU4NKSGJ2RLF7V5.woff2",
          weight: "700",
        },
      ],
    },
  ],
  Ea = [
    '.framer-lv5bi .framer-styles-preset-zo5y89:not(.rich-text-wrapper), .framer-lv5bi .framer-styles-preset-zo5y89.rich-text-wrapper h2 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 56px; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-lv5bi .framer-styles-preset-zo5y89:not(.rich-text-wrapper), .framer-lv5bi .framer-styles-preset-zo5y89.rich-text-wrapper h2 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 48px; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-lv5bi .framer-styles-preset-zo5y89:not(.rich-text-wrapper), .framer-lv5bi .framer-styles-preset-zo5y89.rich-text-wrapper h2 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 44px; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  Da = "framer-lv5bi";
var Eo = Pe(Dt),
  Do = Pe(cr),
  Bo = la(m.div),
  jo = Pe(Bt),
  zo = Pe(_e),
  Uo = Pe(K),
  Lo = yt(Re),
  Oo = yt(E),
  qo = Pe(zt),
  Wo = {
    fT7x1vrZs: "(max-width: 809px)",
    FVjP19y4Z: "(min-width: 810px) and (max-width: 1199px)",
    WQLkyLRf1: "(min-width: 1200px)",
  },
  Ut = () => typeof document < "u",
  Ba = "framer-hrf1i",
  Qo = {
    fT7x1vrZs: "framer-v-1b32nha",
    FVjP19y4Z: "framer-v-1smhgvb",
    WQLkyLRf1: "framer-v-72rtr7",
  },
  Ho = { delay: 0.5, duration: 0.5, ease: [0.12, 0.23, 0.5, 1], type: "tween" },
  Yo = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ho,
    x: 0,
    y: 0,
  },
  Go = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Zo = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.5,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  za = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  Xo = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.5,
    skewX: 0,
    skewY: 0,
    transition: za,
    x: 0,
    y: 0,
  },
  $o = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 20,
  },
  Ua = { damping: 40, delay: 0.2, mass: 1, stiffness: 400, type: "spring" },
  Jo = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ua,
    x: 0,
    y: 20,
  },
  Ko = { delay: 0, duration: 0.3, ease: [0.12, 0.23, 0.5, 1], type: "tween" },
  ja = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ko,
  },
  Lt = Dr(),
  es = { Desktop: "WQLkyLRf1", Phone: "fT7x1vrZs", Tablet: "FVjP19y4Z" },
  rs = ({ height: e, id: t, width: n, ...a }) => {
    var i, f;
    return {
      ...a,
      variant:
        (f = (i = es[a.variant]) !== null && i !== void 0 ? i : a.variant) !==
          null && f !== void 0
          ? f
          : "WQLkyLRf1",
    };
  },
  ts = ge(function (e, t) {
    let { activeLocale: n, setLocale: a } = Ve(),
      { style: i, className: f, layoutId: c, variant: y, ...d } = rs(e);
    $(() => {
      let oe = Dr(void 0, n);
      if (oe.robots) {
        let se = document.querySelector('meta[name="robots"]');
        se
          ? se.setAttribute("content", oe.robots)
          : ((se = document.createElement("meta")),
            se.setAttribute("name", "robots"),
            se.setAttribute("content", oe.robots),
            document.head.appendChild(se));
      }
    }, [void 0, n]),
      aa(() => {
        let oe = Dr(void 0, n);
        if (((document.title = oe.title || ""), oe.viewport)) {
          var se;
          (se = document.querySelector('meta[name="viewport"]')) === null ||
            se === void 0 ||
            se.setAttribute("content", oe.viewport);
        }
        let Ee = oe.bodyClassName;
        if (Ee) {
          let de = document.body;
          de.classList.forEach(
            (We) => We.startsWith("framer-body-") && de.classList.remove(We)
          ),
            de.classList.add(`${oe.bodyClassName}-framer-hrf1i`);
        }
        return () => {
          Ee &&
            document.body.classList.remove(`${oe.bodyClassName}-framer-hrf1i`);
        };
      }, [void 0, n]);
    let [o, u] = fa(y, Wo, !1),
      g = void 0,
      R = N(null),
      h = Be("Jow5OoU99"),
      C = N(null),
      j = Be("tD_Iyp3PT"),
      F = N(null),
      P = Be("XoqnsNSqu"),
      p = N(null),
      _ = Be("pRJapcRGE"),
      T = N(null),
      A = Be("PQJk_pe7z"),
      b = N(null),
      x = () => (Ut() ? !["FVjP19y4Z", "fT7x1vrZs"].includes(o) : !0),
      D = () => !Ut() || o === "FVjP19y4Z",
      U = () => !Ut() || o === "fT7x1vrZs",
      Y = Be("sAtTLi0l9"),
      L = N(null),
      z = Be("ozxJgCNle"),
      ie = N(null),
      G = Be("Kug6_bJnl"),
      Ce = N(null),
      ye = Be("Gea9hnNe9"),
      ae = N(null),
      l = Se(),
      I = [Xr, Da];
    return (
      oa({}),
      r(sa.Provider, {
        value: { primaryVariantId: "WQLkyLRf1", variantClassNames: Qo },
        children: k(re, {
          id: c ?? l,
          children: [
            k(m.div, {
              ...d,
              className: ve(Ba, ...I, "framer-72rtr7", f),
              ref: t ?? R,
              style: { ...i },
              children: [
                r(W, {
                  height: 121,
                  width: "100vw",
                  y: 0,
                  children: r(Re, {
                    className: "framer-i0feli-container",
                    layoutScroll: !0,
                    children: r(te, {
                      breakpoint: o,
                      overrides: {
                        fT7x1vrZs: { variant: "NV1LHw5tE" },
                        FVjP19y4Z: { variant: "pdtcUSEoM" },
                      },
                      children: r(Dt, {
                        height: "100%",
                        id: "aZT1lxqN_",
                        layoutId: "aZT1lxqN_",
                        style: { width: "100%" },
                        variant: "hR7MQrVPd",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                r("section", {
                  className: "framer-10bgij6",
                  "data-framer-name": "Hero Section",
                  id: h,
                  name: "Hero Section",
                  ref: C,
                  children: r(te, {
                    breakpoint: o,
                    overrides: {
                      fT7x1vrZs: {
                        background: {
                          alt: "",
                          fit: "fit",
                          loading: be(65),
                          pixelHeight: 1e3,
                          pixelWidth: 3e3,
                          positionX: "center",
                          positionY: "center",
                          src: "/framerusercontent.com/images/sd5qiCxuRAoQVBS8zHPhjGggnQ8.png",
                        },
                      },
                    },
                    children: r(Le, {
                      "aria-label": "Square pattern background",
                      background: {
                        alt: "",
                        fit: "fit",
                        pixelHeight: 1e3,
                        pixelWidth: 3e3,
                        positionX: "center",
                        positionY: "center",
                        src: "/framerusercontent.com/images/sd5qiCxuRAoQVBS8zHPhjGggnQ8.png",
                      },
                      className: "framer-1gt7b0y",
                      "data-framer-name": "Background",
                      id: j,
                      name: "Background",
                      ref: F,
                    }),
                  }),
                }),
                r("section", {
                  className: "framer-xqb08w",
                  "data-framer-name": "Logos",
                  name: "Logos",
                  children: r(Bo, {
                    animate: Yo,
                    className: "framer-fg4g4l",
                    "data-framer-appear-id": "fg4g4l",
                    initial: Go,
                    optimized: !0,
                    children: r(W, {
                      children: r(Re, {
                        className: "framer-14ipqi3-container",
                        children: r(te, {
                          breakpoint: o,
                          overrides: { fT7x1vrZs: { speed: 40 } },
                          children: r(cr, {
                            alignment: "center",
                            direction: "left",
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !0,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !1,
                            },
                            gap: 32,
                            height: "100%",
                            hoverFactor: 1,
                            id: "HyNUvXU8o",
                            layoutId: "HyNUvXU8o",
                            padding: 10,
                            paddingBottom: 10,
                            paddingLeft: 10,
                            paddingPerSide: !1,
                            paddingRight: 10,
                            paddingTop: 10,
                            sizingOptions: { heightType: !0, widthType: !0 },
                            slots: [
                              r(m.div, {
                                className: "framer-1ry4wkq",
                                children: r(E, {
                                  __fromCanvasComponent: !0,
                                  children: r(w, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7TWFuc2FsdmEtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Mansalva", sans-serif',
                                        "--framer-font-size": "38px",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: "$DANNY",
                                    }),
                                  }),
                                  className: "framer-1b5ko6y",
                                  fonts: ["GF;Mansalva-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              r(m.div, {
                                className: "framer-jcafa7",
                                children: r(E, {
                                  __fromCanvasComponent: !0,
                                  children: r(w, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7TWFuc2FsdmEtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Mansalva", sans-serif',
                                        "--framer-font-size": "38px",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: "$DANNY",
                                    }),
                                  }),
                                  className: "framer-5xsabq",
                                  fonts: ["GF;Mansalva-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              r(m.div, {
                                className: "framer-1ciw845",
                                children: r(E, {
                                  __fromCanvasComponent: !0,
                                  children: r(w, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7TWFuc2FsdmEtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Mansalva", sans-serif',
                                        "--framer-font-size": "38px",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: "$DANNY",
                                    }),
                                  }),
                                  className: "framer-sn2x1t",
                                  fonts: ["GF;Mansalva-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              r(m.div, {
                                className: "framer-1c5jxsc",
                                children: r(E, {
                                  __fromCanvasComponent: !0,
                                  children: r(w, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7TWFuc2FsdmEtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Mansalva", sans-serif',
                                        "--framer-font-size": "38px",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: "$DANNY",
                                    }),
                                  }),
                                  className: "framer-saebz1",
                                  fonts: ["GF;Mansalva-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              r(m.div, {
                                className: "framer-dnlmaa",
                                children: r(E, {
                                  __fromCanvasComponent: !0,
                                  children: r(w, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7TWFuc2FsdmEtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Mansalva", sans-serif',
                                        "--framer-font-size": "38px",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: "$DANNY",
                                    }),
                                  }),
                                  className: "framer-zd6mmt",
                                  fonts: ["GF;Mansalva-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              r(m.div, {
                                className: "framer-s9kb07",
                                children: r(E, {
                                  __fromCanvasComponent: !0,
                                  children: r(w, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7TWFuc2FsdmEtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Mansalva", sans-serif',
                                        "--framer-font-size": "38px",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: "$DANNY",
                                    }),
                                  }),
                                  className: "framer-1wezlkd",
                                  fonts: ["GF;Mansalva-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                            speed: 25,
                            style: { height: "100%", width: "100%" },
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
                r("div", {
                  className: "framer-11rszsq",
                  children: r(te, {
                    breakpoint: o,
                    overrides: {
                      fT7x1vrZs: {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 4e3,
                          intrinsicWidth: 2250,
                          loading: be(369.5),
                          pixelHeight: 637,
                          pixelWidth: 1273,
                          sizes: "calc((100vw - 24px) * 1.0385)",
                          src: "/framerusercontent.com/images/d2QEEXGyVovvOOn9gd9XhZjn6CA.png",
                          srcSet:
                            "/framerusercontent.com/images/d2QEEXGyVovvOOn9gd9XhZjn6CA.png?scale-down-to=512 512w,/framerusercontent.com/images/d2QEEXGyVovvOOn9gd9XhZjn6CA.png?scale-down-to=1024 1024w,/framerusercontent.com/images/d2QEEXGyVovvOOn9gd9XhZjn6CA.png 1273w",
                        },
                      },
                      FVjP19y4Z: {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 4e3,
                          intrinsicWidth: 2250,
                          pixelHeight: 637,
                          pixelWidth: 1273,
                          sizes: "calc((100vw - 24px) / 1.024)",
                          src: "/framerusercontent.com/images/d2QEEXGyVovvOOn9gd9XhZjn6CA.png",
                          srcSet:
                            "/framerusercontent.com/images/d2QEEXGyVovvOOn9gd9XhZjn6CA.png?scale-down-to=512 512w,/framerusercontent.com/images/d2QEEXGyVovvOOn9gd9XhZjn6CA.png?scale-down-to=1024 1024w,/framerusercontent.com/images/d2QEEXGyVovvOOn9gd9XhZjn6CA.png 1273w",
                        },
                      },
                    },
                    children: r(Le, {
                      as: "header",
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 4e3,
                        intrinsicWidth: 2250,
                        pixelHeight: 637,
                        pixelWidth: 1273,
                        sizes: "calc((100vw - 24px) * 0.7866)",
                        src: "/framerusercontent.com/images/d2QEEXGyVovvOOn9gd9XhZjn6CA.png",
                        srcSet:
                          "/framerusercontent.com/images/d2QEEXGyVovvOOn9gd9XhZjn6CA.png?scale-down-to=512 512w,/framerusercontent.com/images/d2QEEXGyVovvOOn9gd9XhZjn6CA.png?scale-down-to=1024 1024w,/framerusercontent.com/images/d2QEEXGyVovvOOn9gd9XhZjn6CA.png 1273w",
                      },
                      className: "framer-13q0w3x",
                      "data-framer-name": "Header Image",
                      id: P,
                      name: "Header Image",
                      ref: p,
                      children: r("div", {
                        className: "framer-14wc5t4",
                        "data-framer-name": "Overlay",
                        name: "Overlay",
                      }),
                    }),
                  }),
                }),
                r("div", {
                  className: "framer-fmah12",
                  "data-framer-name": "Features Large",
                  id: _,
                  name: "Features Large",
                  ref: T,
                  children: k("div", {
                    className: "framer-1z0ir6y",
                    "data-framer-name": "Features",
                    name: "Features",
                    children: [
                      k("div", {
                        className: "framer-1d3vzg4",
                        children: [
                          k("div", {
                            className: "framer-1kuokn2",
                            "data-framer-name": "Content",
                            name: "Content",
                            children: [
                              r(te, {
                                breakpoint: o,
                                overrides: {
                                  fT7x1vrZs: {
                                    children: r(w, {
                                      children: r("h1", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7TWFuc2FsdmEtcmVndWxhcg==",
                                          "--framer-font-family":
                                            '"Mansalva", sans-serif',
                                          "--framer-font-size": "55px",
                                          "--framer-letter-spacing": "-2px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Trade $DANNY",
                                      }),
                                    }),
                                  },
                                  FVjP19y4Z: {
                                    children: r(w, {
                                      children: r("h1", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7TWFuc2FsdmEtcmVndWxhcg==",
                                          "--framer-font-family":
                                            '"Mansalva", sans-serif',
                                          "--framer-font-size": "53px",
                                          "--framer-letter-spacing": "-2px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Trade $DANNY",
                                      }),
                                    }),
                                  },
                                },
                                children: r(E, {
                                  __fromCanvasComponent: !0,
                                  children: r(w, {
                                    children: r("h1", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7TWFuc2FsdmEtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Mansalva", sans-serif',
                                        "--framer-font-size": "59px",
                                        "--framer-letter-spacing": "-2px",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: "Trade $DANNY",
                                    }),
                                  }),
                                  className: "framer-hs0r9r",
                                  fonts: ["GF;Mansalva-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              r(te, {
                                breakpoint: o,
                                overrides: {
                                  FVjP19y4Z: {
                                    children: r(w, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector": "R0Y7SW50ZXItNTAw",
                                          "--framer-font-family":
                                            '"Inter", "Inter Placeholder", sans-serif',
                                          "--framer-font-size": "22px",
                                          "--framer-font-weight": "500",
                                          "--framer-letter-spacing": "-0.5px",
                                          "--framer-line-height": "1.5em",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "$DANNY is available to Trade on Streamflow. Please Click below to learn more.",
                                      }),
                                    }),
                                  },
                                },
                                children: r(E, {
                                  __fromCanvasComponent: !0,
                                  children: r(w, {
                                    children: r("h2", {
                                      style: {
                                        "--font-selector": "R0Y7SW50ZXItNTAw",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "24px",
                                        "--framer-font-weight": "500",
                                        "--framer-letter-spacing": "-0.5px",
                                        "--framer-line-height": "1.5em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children:
                                        "$DANNY is available to Trade on Dexscreener and Dextools. Please Click below.",
                                    }),
                                  }),
                                  className: "framer-1obdz0p",
                                  fonts: ["GF;Inter-500"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              k("div", {
                                className: "framer-oaw3xh",
                                children: [
                                  r("div", {
                                    className: "framer-npqqku",
                                    "data-framer-name": "Button",
                                    name: "Button",
                                    children: r(E, {
                                      __fromCanvasComponent: !0,
                                      children: r(w, {
                                        children: r("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7SW50ZXItNzAw",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "700",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(51, 51, 51)",
                                          },
                                          children: r(Z, {
                                            href: "https://dexscreener.com/ethereum/0xcomingsoon",
                                            nodeId: "lJYJtksJK",
                                            openInNewTab: !0,
                                            smoothScroll: !1,
                                            children: r("a", {
                                              className:
                                                "framer-styles-preset-wvlk38",
                                              "data-styles-preset": "uqTNjxj1f",
                                              children: "Dexscreener",
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: "framer-aa9atq",
                                      fonts: ["GF;Inter-700"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  r("div", {
                                    className: "framer-1neh2hy",
                                    "data-framer-name": "Button",
                                    name: "Button",
                                    children: r(E, {
                                      __fromCanvasComponent: !0,
                                      children: r(w, {
                                        children: r("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7SW50ZXItNzAw",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "14px",
                                            "--framer-font-weight": "700",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: r(Z, {
                                            href: "https://www.dextools.io/",
                                            nodeId: "nyL4g2K3U",
                                            openInNewTab: !0,
                                            smoothScroll: !1,
                                            children: r("a", {
                                              className:
                                                "framer-styles-preset-wvlk38",
                                              "data-styles-preset": "uqTNjxj1f",
                                              children: "Dextools",
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: "framer-oy5nrz",
                                      fonts: ["GF;Inter-700"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r(te, {
                            breakpoint: o,
                            overrides: {
                              fT7x1vrZs: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 720,
                                  intrinsicWidth: 960,
                                  loading: be(822),
                                  pixelHeight: 800,
                                  pixelWidth: 800,
                                  sizes: "min(max(100vw - 40px, 1px), 1000px)",
                                  src: "/framerusercontent.com/images/VUTHLEm1sN457KhyRSNq5D8v6eA.png",
                                  srcSet:
                                    "/framerusercontent.com/images/VUTHLEm1sN457KhyRSNq5D8v6eA.png?scale-down-to=512 512w,/framerusercontent.com/images/VUTHLEm1sN457KhyRSNq5D8v6eA.png 800w",
                                },
                              },
                              FVjP19y4Z: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 720,
                                  intrinsicWidth: 960,
                                  pixelHeight: 800,
                                  pixelWidth: 800,
                                  sizes: "min(max(100vw - 80px, 1px), 1000px)",
                                  src: "/framerusercontent.com/images/VUTHLEm1sN457KhyRSNq5D8v6eA.png",
                                  srcSet:
                                    "/framerusercontent.com/images/VUTHLEm1sN457KhyRSNq5D8v6eA.png?scale-down-to=512 512w,/framerusercontent.com/images/VUTHLEm1sN457KhyRSNq5D8v6eA.png 800w",
                                },
                              },
                            },
                            children: r(Le, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 720,
                                intrinsicWidth: 960,
                                pixelHeight: 800,
                                pixelWidth: 800,
                                sizes: "min(max(100vw, 1px), 1000px)",
                                src: "/framerusercontent.com/images/VUTHLEm1sN457KhyRSNq5D8v6eA.png",
                                srcSet:
                                  "/framerusercontent.com/images/VUTHLEm1sN457KhyRSNq5D8v6eA.png?scale-down-to=512 512w,/framerusercontent.com/images/VUTHLEm1sN457KhyRSNq5D8v6eA.png 800w",
                              },
                              className: "framer-13vt6kp",
                              "data-framer-name": "Image",
                              name: "Image",
                            }),
                          }),
                        ],
                      }),
                      k("div", {
                        className: "framer-1fhdalx",
                        children: [
                          r(te, {
                            breakpoint: o,
                            overrides: {
                              fT7x1vrZs: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 720,
                                  intrinsicWidth: 960,
                                  loading: be(1545.4),
                                  pixelHeight: 3e3,
                                  pixelWidth: 3e3,
                                  sizes: "min(max(100vw - 40px, 1px), 1000px)",
                                  src: "/framerusercontent.com/images/lTj6usgqg5pG8mIdEgNjBklgM.png?scale-down-to=1024",
                                  srcSet:
                                    "/framerusercontent.com/images/lTj6usgqg5pG8mIdEgNjBklgM.png?scale-down-to=512 512w,/framerusercontent.com/images/lTj6usgqg5pG8mIdEgNjBklgM.png?scale-down-to=1024 1024w,/framerusercontent.com/images/lTj6usgqg5pG8mIdEgNjBklgM.png?scale-down-to=2048 2048w,/framerusercontent.com/images/lTj6usgqg5pG8mIdEgNjBklgM.png 3000w",
                                },
                              },
                              FVjP19y4Z: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 720,
                                  intrinsicWidth: 960,
                                  pixelHeight: 3e3,
                                  pixelWidth: 3e3,
                                  sizes: "min(max(100vw - 80px, 1px), 1000px)",
                                  src: "/framerusercontent.com/images/lTj6usgqg5pG8mIdEgNjBklgM.png?scale-down-to=1024",
                                  srcSet:
                                    "/framerusercontent.com/images/lTj6usgqg5pG8mIdEgNjBklgM.png?scale-down-to=512 512w,/framerusercontent.com/images/lTj6usgqg5pG8mIdEgNjBklgM.png?scale-down-to=1024 1024w,/framerusercontent.com/images/lTj6usgqg5pG8mIdEgNjBklgM.png?scale-down-to=2048 2048w,/framerusercontent.com/images/lTj6usgqg5pG8mIdEgNjBklgM.png 3000w",
                                },
                              },
                            },
                            children: r(Le, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 720,
                                intrinsicWidth: 960,
                                pixelHeight: 3e3,
                                pixelWidth: 3e3,
                                sizes: "min(max(100vw, 1px), 1000px)",
                                src: "/framerusercontent.com/images/lTj6usgqg5pG8mIdEgNjBklgM.png?scale-down-to=1024",
                                srcSet:
                                  "/framerusercontent.com/images/lTj6usgqg5pG8mIdEgNjBklgM.png?scale-down-to=512 512w,/framerusercontent.com/images/lTj6usgqg5pG8mIdEgNjBklgM.png?scale-down-to=1024 1024w,/framerusercontent.com/images/lTj6usgqg5pG8mIdEgNjBklgM.png?scale-down-to=2048 2048w,/framerusercontent.com/images/lTj6usgqg5pG8mIdEgNjBklgM.png 3000w",
                              },
                              className: "framer-wqjtmn",
                              "data-framer-name": "Image",
                              id: A,
                              name: "Image",
                              ref: b,
                            }),
                          }),
                          k("div", {
                            className: "framer-kn7dvp",
                            "data-framer-name": "Content",
                            name: "Content",
                            children: [
                              r(te, {
                                breakpoint: o,
                                overrides: {
                                  fT7x1vrZs: {
                                    children: r(w, {
                                      children: r("h1", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7TWFuc2FsdmEtcmVndWxhcg==",
                                          "--framer-font-family":
                                            '"Mansalva", sans-serif',
                                          "--framer-font-size": "47px",
                                          "--framer-letter-spacing": "-2px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Buy $DANNY on..",
                                      }),
                                    }),
                                  },
                                  FVjP19y4Z: {
                                    children: r(w, {
                                      children: r("h1", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7TWFuc2FsdmEtcmVndWxhcg==",
                                          "--framer-font-family":
                                            '"Mansalva", sans-serif',
                                          "--framer-font-size": "50px",
                                          "--framer-letter-spacing": "-2px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Buy $DANNY on..",
                                      }),
                                    }),
                                  },
                                },
                                children: r(E, {
                                  __fromCanvasComponent: !0,
                                  children: r(w, {
                                    children: r("h1", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7TWFuc2FsdmEtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Mansalva", sans-serif',
                                        "--framer-font-size": "59px",
                                        "--framer-letter-spacing": "-2px",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: "Buy $DANNY on..",
                                    }),
                                  }),
                                  className: "framer-1nhnei",
                                  fonts: ["GF;Mansalva-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              r(E, {
                                __fromCanvasComponent: !0,
                                children: r(w, {
                                  children: r("h2", {
                                    style: {
                                      "--font-selector": "R0Y7SW50ZXItNTAw",
                                      "--framer-font-family":
                                        '"Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-size": "24px",
                                      "--framer-font-weight": "500",
                                      "--framer-letter-spacing": "-0.5px",
                                      "--framer-line-height": "1.5em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children:
                                      "$DANNY is available on Uniswap and soon much more.",
                                  }),
                                }),
                                className: "framer-pil1oa",
                                fonts: ["GF;Inter-500"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              k("div", {
                                className: "framer-f2b2wm",
                                children: [
                                  r(Z, {
                                    href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon",
                                    nodeId: "AUOhY_DFG",
                                    children: r("a", {
                                      className: "framer-1km9mrr framer-lux5qc",
                                      "data-framer-name": "Button",
                                      name: "Button",
                                      children: r(E, {
                                        __fromCanvasComponent: !0,
                                        children: r(w, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7SW50ZXItNzAw",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "700",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Buy on Uniswap",
                                          }),
                                        }),
                                        className: "framer-1f2wf16",
                                        fonts: ["GF;Inter-700"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              D() &&
                                r("div", {
                                  className:
                                    "framer-1e962cn hidden-72rtr7 hidden-1b32nha",
                                  children: r(Z, {
                                    href: "https://www.ourbit.com/",
                                    nodeId: "Zb7rZtm4Q",
                                    openInNewTab: !0,
                                    children: r("a", {
                                      className: "framer-1x13cbj framer-lux5qc",
                                      "data-framer-name": "Button",
                                      name: "Button",
                                      children: r(E, {
                                        __fromCanvasComponent: !0,
                                        children: r(w, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7SW50ZXItNzAw",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "700",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Buy on Ourbit",
                                          }),
                                        }),
                                        className: "framer-6el1wd",
                                        fonts: ["GF;Inter-700"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              U() &&
                                r("div", {
                                  className:
                                    "framer-hmnaua hidden-72rtr7 hidden-1smhgvb",
                                  children: r(Z, {
                                    href: "https://www.ourbit.com/exchange/DANNY_USDT?_from=market",
                                    nodeId: "sbJuzDArF",
                                    openInNewTab: !0,
                                    children: r("a", {
                                      className: "framer-1jb5hcq framer-lux5qc",
                                      "data-framer-name": "Button",
                                      name: "Button",
                                      children: r(E, {
                                        __fromCanvasComponent: !0,
                                        children: r(w, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7SW50ZXItNzAw",
                                              "--framer-font-family":
                                                '"Inter", "Inter Placeholder", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-font-weight": "700",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Buy on Ourbit",
                                          }),
                                        }),
                                        className: "framer-18a69eo",
                                        fonts: ["GF;Inter-700"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                r("section", {
                  className: "framer-egq3uz",
                  "data-framer-name": "FAQ Section",
                  id: Y,
                  name: "FAQ Section",
                  ref: L,
                  children: k("div", {
                    className: "framer-1fayl9v",
                    id: z,
                    ref: ie,
                    children: [
                      r("div", {
                        className: "framer-1ih3jp1",
                        children: r("div", {
                          className: "framer-t5ucoi",
                          children: r(E, {
                            __fromCanvasComponent: !0,
                            children: r(w, {
                              children: r("h2", {
                                className: "framer-styles-preset-zo5y89",
                                "data-styles-preset": "XTfJQu4hD",
                                style: { "--framer-text-alignment": "center" },
                                children: "Have any Questions?",
                              }),
                            }),
                            className: "framer-vwn1ak",
                            "data-framer-name":
                              "Revolutionize Your Operations with our Web3 Expertise",
                            fonts: ["Inter"],
                            name: "Revolutionize Your Operations with our Web3 Expertise",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      }),
                      r(te, {
                        breakpoint: o,
                        overrides: {
                          fT7x1vrZs: {
                            width: "min(min(100vw - 40px, 1120px), 544px)",
                            y: 2107.4,
                          },
                          FVjP19y4Z: {
                            width: "min(min(100vw - 64px, 1120px) * 3, 544px)",
                          },
                        },
                        children: r(W, {
                          height: 214,
                          width: "min(min(100vw - 80px, 1120px) * 3, 544px)",
                          children: r(Re, {
                            className: "framer-julawe-container",
                            children: r(Bt, {
                              height: "100%",
                              id: "wioI0YNWM",
                              layoutId: "wioI0YNWM",
                              style: { maxWidth: "100%", width: "100%" },
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
 
                r("header", {
                  className: "framer-n86yqr",
                  "data-framer-name": "Header",
                  name: "Header",
                  children: k("div", {
                    className: "framer-b5lrq4",
                    children: [
                      r("div", {
                        className: "framer-ilsdql",
                        children: r(te, {
                          breakpoint: o,
                          overrides: {
                            fT7x1vrZs: {
                              children: r(w, {
                                children: r("h1", {
                                  style: {
                                    "--font-selector": "R0Y7SW50ZXItNzAw",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "31px",
                                    "--framer-font-weight": "700",
                                    "--framer-letter-spacing": "-2.1px",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: "Follow Danny",
                                }),
                              }),
                            },
                            FVjP19y4Z: {
                              children: r(w, {
                                children: r("h1", {
                                  style: {
                                    "--font-selector": "R0Y7SW50ZXItNzAw",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "40px",
                                    "--framer-font-weight": "700",
                                    "--framer-letter-spacing": "-2.1px",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: "Follow Danny",
                                }),
                              }),
                            },
                          },
                          children: r(Oo, {
                            __framer__animate: { transition: Ua },
                            __framer__animateOnce: !0,
                            __framer__enter: $o,
                            __framer__exit: Jo,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: r(w, {
                              children: r("h1", {
                                style: {
                                  "--font-selector": "R0Y7SW50ZXItNzAw",
                                  "--framer-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "50px",
                                  "--framer-font-weight": "700",
                                  "--framer-letter-spacing": "-2.1px",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: "Follow Danny",
                              }),
                            }),
                            className: "framer-ov10nv",
                            fonts: ["GF;Inter-700"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      }),
                      k("div", {
                        className: "framer-irljwm",
                        children: [
                          r("div", {
                            className: "framer-1miy836",
                            "data-framer-name": "Social",
                            name: "Social",
                            children: r(Z, {
                              href: "x.com/danny_erc20",
                              nodeId: "llqKfz5dE",
                              openInNewTab: !0,
                              children: r(m.a, {
                                "aria-label": "Twitter",
                                className: "framer-incfsu framer-lux5qc",
                                "data-framer-name": "Icon",
                                "data-reset": "button",
                                name: "Icon",
                                whileHover: ja,
                                children: r(Ge, {
                                  className: "framer-14i3lsa",
                                  "data-framer-name": "Twitter",
                                  layout: "position",
                                  name: "Twitter",
                                  opacity: 1,
                                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g transform="translate(0 0)" id="ss11460946046_1"><path d="M 0 20 L 0 0 L 20 0 L 20 20 Z" fill="transparent"></path><path d="M 20 3.799 C 19.256 4.125 18.463 4.342 17.637 4.447 C 18.487 3.939 19.136 3.142 19.441 2.18 C 18.648 2.653 17.773 2.987 16.841 3.173 C 16.088 2.372 15.016 1.875 13.846 1.875 C 11.576 1.875 9.749 3.718 9.749 5.977 C 9.749 6.302 9.776 6.614 9.844 6.912 C 6.435 6.745 3.419 5.112 1.392 2.623 C 1.039 3.237 0.831 3.939 0.831 4.695 C 0.831 6.115 1.562 7.374 2.652 8.103 C 1.994 8.09 1.347 7.899 0.8 7.598 C 0.8 7.61 0.8 7.627 0.8 7.643 C 0.8 9.635 2.221 11.29 4.085 11.671 C 3.751 11.763 3.387 11.806 3.01 11.806 C 2.747 11.806 2.482 11.791 2.234 11.736 C 2.765 13.36 4.272 14.554 6.065 14.593 C 4.67 15.684 2.899 16.341 0.981 16.341 C 0.645 16.341 0.322 16.326 0 16.285 C 1.816 17.456 3.969 18.125 6.29 18.125 C 13.835 18.125 17.96 11.875 17.96 6.458 C 17.96 6.277 17.953 6.102 17.945 5.928 C 18.758 5.35 19.442 4.629 20 3.799 Z" fill="var(--token-34f2fca6-59e0-489a-9f06-3c3a8bbd36c7, rgb(29, 31, 19)) /* {&quot;name&quot;:&quot;Very Dark Green&quot;} */"></path></g></svg>',
                                  svgContentId: 11460946046,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                          }),
                          r("div", {
                            className: "framer-k9ipzx",
                            "data-framer-name": "Social",
                            name: "Social",
                            children: r(Z, {
                              href: "https://dexscreener.com/ethereum/0xcomingsoon",
                              nodeId: "X8Y0CbnLV",
                              children: r(te, {
                                breakpoint: o,
                                overrides: {
                                  fT7x1vrZs: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 266.6666666666667,
                                      intrinsicWidth: 266.6666666666667,
                                      loading: be(2904.4),
                                      pixelHeight: 400,
                                      pixelWidth: 400,
                                      src: "/framerusercontent.com/images/XqlEwrG51dX8FVgiO19sm3MZhE.png",
                                    },
                                  },
                                },
                                children: r(Le, {
                                  as: "a",
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 266.6666666666667,
                                    intrinsicWidth: 266.6666666666667,
                                    pixelHeight: 400,
                                    pixelWidth: 400,
                                    src: "/framerusercontent.com/images/XqlEwrG51dX8FVgiO19sm3MZhE.png",
                                  },
                                  className: "framer-1n7oji1 framer-lux5qc",
                                  "data-framer-name":
                                    "661375b92a7e161501f4b5e5 dexscreener.322a5a2d (1)",
                                  name: "661375b92a7e161501f4b5e5 dexscreener.322a5a2d (1)",
                                }),
                              }),
                            }),
                          }),
                          r("div", {
                            className: "framer-659pkw",
                            "data-framer-name": "Social",
                            name: "Social",
                            children: r(Z, {
                              href: "https://t.me/danny_erc20",
                              nodeId: "Ypo53EeVN",
                              openInNewTab: !0,
                              children: r(m.a, {
                                "aria-label": "LinkedIn",
                                className: "framer-yt6ktd framer-lux5qc",
                                "data-framer-name": "Icon",
                                "data-reset": "button",
                                name: "Icon",
                                whileHover: ja,
                                children: r(Ge, {
                                  className: "framer-6eepoq",
                                  "data-framer-name": "Telegram",
                                  fill: "rgb(0, 0, 0)",
                                  intrinsicHeight: 800,
                                  intrinsicWidth: 800,
                                  name: "Telegram",
                                  svg: '<svg width="800" height="800" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.42 7.309s3.885-1.515 3.56 2.164c-.107 1.515-1.078 6.818-1.834 12.553l-2.59 16.99s-.216 2.489-2.159 2.922c-1.942.432-4.856-1.515-5.396-1.948-.432-.325-8.094-5.195-10.792-7.575-.756-.65-1.62-1.948.108-3.463L33.648 18.13c1.295-1.298 2.59-4.328-2.806-.649l-15.11 10.28s-1.727 1.083-4.964.109l-7.016-2.165s-2.59-1.623 1.835-3.246c10.793-5.086 24.068-10.28 35.831-15.15Z" fill="#000"/></svg>',
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                r("section", {
                  className: "framer-19v8wew",
                  "data-framer-name": "CTA Section",
                  id: ye,
                  name: "CTA Section",
                  ref: ae,
                  children: r(te, {
                    breakpoint: o,
                    overrides: {
                      fT7x1vrZs: {
                        background: {
                          alt: "",
                          fit: "fill",
                          loading: be(3031.4),
                          pixelHeight: 1e3,
                          pixelWidth: 3e3,
                          sizes: "calc(min(100vw, 1232px) + 822px)",
                          src: "/framerusercontent.com/images/nFDadFCc4YKSSZVQW6H6aGkWLng.png",
                          srcSet:
                            "/framerusercontent.com/images/nFDadFCc4YKSSZVQW6H6aGkWLng.png?scale-down-to=512 512w,/framerusercontent.com/images/nFDadFCc4YKSSZVQW6H6aGkWLng.png?scale-down-to=1024 1024w,/framerusercontent.com/images/nFDadFCc4YKSSZVQW6H6aGkWLng.png?scale-down-to=2048 2048w,/framerusercontent.com/images/nFDadFCc4YKSSZVQW6H6aGkWLng.png 3000w",
                        },
                      },
                    },
                    children: r(Le, {
                      background: {
                        alt: "",
                        fit: "fill",
                        pixelHeight: 1e3,
                        pixelWidth: 3e3,
                        sizes: "calc((min(100vw, 1232px) - 32px) * 1.2175)",
                        src: "/framerusercontent.com/images/nFDadFCc4YKSSZVQW6H6aGkWLng.png",
                        srcSet:
                          "/framerusercontent.com/images/nFDadFCc4YKSSZVQW6H6aGkWLng.png?scale-down-to=512 512w,/framerusercontent.com/images/nFDadFCc4YKSSZVQW6H6aGkWLng.png?scale-down-to=1024 1024w,/framerusercontent.com/images/nFDadFCc4YKSSZVQW6H6aGkWLng.png?scale-down-to=2048 2048w,/framerusercontent.com/images/nFDadFCc4YKSSZVQW6H6aGkWLng.png 3000w",
                      },
                      className: "framer-1ndp60g",
                      children: r(te, {
                        breakpoint: o,
                        overrides: {
                          fT7x1vrZs: {
                            background: {
                              alt: "",
                              backgroundSize: 1,
                              fit: "tile",
                              loading: be(3031.4),
                              pixelHeight: 256,
                              pixelWidth: 256,
                              positionX: "left",
                              positionY: "top",
                              src: "/framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png",
                            },
                          },
                        },
                        children: r(Le, {
                          "aria-label": "Background grain texture",
                          background: {
                            alt: "",
                            backgroundSize: 1,
                            fit: "tile",
                            pixelHeight: 256,
                            pixelWidth: 256,
                            positionX: "left",
                            positionY: "top",
                            src: "/framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png",
                          },
                          className: "framer-1vgea3",
                        }),
                      }),
                    }),
                  }),
                }),
                r(te, {
                  breakpoint: o,
                  overrides: { fT7x1vrZs: { y: 3395.4 } },
                  children: r(W, {
                    height: 174,
                    width: "100vw",
                    children: r(Re, {
                      className: "framer-2f4cpt-container",
                      children: r(te, {
                        breakpoint: o,
                        overrides: {
                          fT7x1vrZs: { variant: "KIfhDFPen" },
                          FVjP19y4Z: { variant: "Qhpn97F2L" },
                        },
                        children: r(zt, {
                          height: "100%",
                          id: "otFsjtIkD",
                          layoutId: "otFsjtIkD",
                          style: { width: "100%" },
                          variant: "mSwtkHQbX",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            }),
            r("div", { className: ve(Ba, ...I), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  as = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${Lt.bodyClassName}-framer-hrf1i { background: rgb(20, 20, 20); }`,
    ".framer-hrf1i.framer-lux5qc, .framer-hrf1i .framer-lux5qc { display: block; }",
    ".framer-hrf1i.framer-72rtr7 { align-content: center; align-items: center; background-color: #141414; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }",
    ".framer-hrf1i .framer-i0feli-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 10; }",
    ".framer-hrf1i .framer-10bgij6 { align-content: center; align-items: center; background-color: #13181b; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 360px; overflow: hidden; padding: 350px 40px 160px 40px; position: relative; width: 100%; }",
    ".framer-hrf1i .framer-1gt7b0y { bottom: -69px; flex: none; left: -5px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 0; }",
    ".framer-hrf1i .framer-xqb08w { align-content: center; align-items: center; background-color: #520000; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 40px 0px 40px; position: relative; width: 100%; }",
    ".framer-hrf1i .framer-fg4g4l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; max-width: 1120px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-hrf1i .framer-14ipqi3-container { flex: none; height: 69px; position: relative; width: 100%; }",
    ".framer-hrf1i .framer-1ry4wkq, .framer-hrf1i .framer-jcafa7, .framer-hrf1i .framer-1ciw845, .framer-hrf1i .framer-1c5jxsc, .framer-hrf1i .framer-dnlmaa, .framer-hrf1i .framer-s9kb07 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 160px; }",
    ".framer-hrf1i .framer-1b5ko6y, .framer-hrf1i .framer-5xsabq, .framer-hrf1i .framer-sn2x1t, .framer-hrf1i .framer-saebz1, .framer-hrf1i .framer-zd6mmt, .framer-hrf1i .framer-1wezlkd { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-hrf1i .framer-11rszsq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 605px; justify-content: center; overflow: hidden; padding: 12px; position: relative; width: 100%; }",
    ".framer-hrf1i .framer-13q0w3x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 79%; justify-content: center; overflow: hidden; padding: 70px; position: relative; width: 79%; }",
    ".framer-hrf1i .framer-14wc5t4 { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }",
    ".framer-hrf1i .framer-fmah12 { align-content: center; align-items: center; background-color: #141414; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 35px 0px 105px 0px; position: relative; width: 100%; }",
    ".framer-hrf1i .framer-1z0ir6y { align-content: center; align-items: center; background-color: #141414; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; max-width: 1000px; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-hrf1i .framer-1d3vzg4 { align-content: center; align-items: center; background-color: #141414; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 80px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-hrf1i .framer-1kuokn2, .framer-hrf1i .framer-kn7dvp { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }",
    ".framer-hrf1i .framer-hs0r9r, .framer-hrf1i .framer-1nhnei { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 427px; word-break: break-word; word-wrap: break-word; }",
    ".framer-hrf1i .framer-1obdz0p { --framer-paragraph-spacing: 0px; flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 380px; word-break: break-word; word-wrap: break-word; }",
    ".framer-hrf1i .framer-oaw3xh, .framer-hrf1i .framer-f2b2wm, .framer-hrf1i .framer-1e962cn, .framer-hrf1i .framer-hmnaua, .framer-hrf1i .framer-1gyttzb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-hrf1i .framer-npqqku { align-content: center; align-items: center; background-color: #ebebeb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: visible; padding: 15px; position: relative; width: min-content; }",
    ".framer-hrf1i .framer-aa9atq, .framer-hrf1i .framer-oy5nrz, .framer-hrf1i .framer-1cxm60k { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-hrf1i .framer-1neh2hy { align-content: center; align-items: center; background-color: #8c0000; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-shadow: 0px 0.7065919983928324px 0.7065919983928324px -0.625px rgba(0, 0, 0, 0.15), 0px 1.8065619053231785px 1.8065619053231785px -1.25px rgba(0, 0, 0, 0.14398), 0px 3.6217592146567767px 3.6217592146567767px -1.875px rgba(0, 0, 0, 0.13793), 0px 6.8655999097303715px 6.8655999097303715px -2.5px rgba(0, 0, 0, 0.12711), 0px 13.646761411524492px 13.646761411524492px -3.125px rgba(0, 0, 0, 0.10451), 0px 30px 30px -3.75px rgba(0, 0, 0, 0.05); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: visible; padding: 15px; position: relative; width: min-content; }",
    ".framer-hrf1i .framer-13vt6kp { align-content: center; align-items: center; aspect-ratio: 1.2 / 1; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: var(--framer-aspect-ratio-supported, 383px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-hrf1i .framer-1fhdalx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 80px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-hrf1i .framer-wqjtmn { align-content: center; align-items: center; aspect-ratio: 1.2 / 1; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: var(--framer-aspect-ratio-supported, 384px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-hrf1i .framer-pil1oa { --framer-paragraph-spacing: 0px; flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 412px; word-break: break-word; word-wrap: break-word; }",
    ".framer-hrf1i .framer-1km9mrr, .framer-hrf1i .framer-1x5h7ok, .framer-hrf1i .framer-1x13cbj, .framer-hrf1i .framer-1jb5hcq { align-content: center; align-items: center; background-color: #008c3a; border-bottom-left-radius: 9px; border-bottom-right-radius: 9px; border-top-left-radius: 9px; border-top-right-radius: 9px; box-shadow: 0px 0.7065919983928324px 0.7065919983928324px -0.625px rgba(0, 0, 0, 0.15), 0px 1.8065619053231785px 1.8065619053231785px -1.25px rgba(0, 0, 0, 0.14398), 0px 3.6217592146567767px 3.6217592146567767px -1.875px rgba(0, 0, 0, 0.13793), 0px 6.8655999097303715px 6.8655999097303715px -2.5px rgba(0, 0, 0, 0.12711), 0px 13.646761411524492px 13.646761411524492px -3.125px rgba(0, 0, 0, 0.10451), 0px 30px 30px -3.75px rgba(0, 0, 0, 0.05); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: visible; padding: 15px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-hrf1i .framer-1f2wf16, .framer-hrf1i .framer-1hhify5, .framer-hrf1i .framer-rwpylw, .framer-hrf1i .framer-6el1wd, .framer-hrf1i .framer-18a69eo { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-hrf1i .framer-1d4adn { align-content: center; align-items: center; background-color: #ebebeb; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: visible; padding: 15px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-hrf1i .framer-egq3uz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 96px; height: min-content; justify-content: center; overflow: visible; padding: 0px 40px 95px 40px; position: relative; scroll-margin-top: 32px; width: 100%; }",
    ".framer-hrf1i .framer-1fayl9v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; max-width: 1120px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-hrf1i .framer-1ih3jp1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-hrf1i .framer-t5ucoi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-hrf1i .framer-vwn1ak { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-hrf1i .framer-julawe-container { flex: none; height: auto; max-width: 544px; position: relative; width: 300%; }",
    ".framer-hrf1i .framer-1f3u5zf { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 659px; height: 839px; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 100%; }",
    ".framer-hrf1i .framer-1h2fykq { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }",
    ".framer-hrf1i .framer-1steuf3 { align-content: center; align-items: center; background-color: #8c0000; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: visible; padding: 15px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-hrf1i .framer-3hdq9w-container { flex: none; height: 566px; left: calc(50.00000000000002% - 1007px / 2); position: absolute; top: calc(48.86769964243149% - 566px / 2); width: 1007px; z-index: 1; }",
    ".framer-hrf1i .framer-aifkwa-container, .framer-hrf1i .framer-1elisxp-container, .framer-hrf1i .framer-ma6fn7-container, .framer-hrf1i .framer-6yutr0-container, .framer-hrf1i .framer-1ob9901-container { height: 437px; position: relative; width: 776px; }",
    ".framer-hrf1i .framer-1qqqk3g-container { height: 437px; opacity: 0.5; position: relative; width: 776px; }",
    ".framer-hrf1i .framer-n86yqr { align-content: center; align-items: center; background-color: #141414; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 272px; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 101%; }",
    ".framer-hrf1i .framer-b5lrq4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 50px; position: relative; width: 100%; }",
    ".framer-hrf1i .framer-ilsdql { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-hrf1i .framer-ov10nv { --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; overflow: hidden; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-hrf1i .framer-irljwm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 27px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-hrf1i .framer-1miy836, .framer-hrf1i .framer-plx5hc, .framer-hrf1i .framer-ome91z, .framer-hrf1i .framer-ms5rfr, .framer-hrf1i .framer-k9ipzx, .framer-hrf1i .framer-659pkw { align-content: center; align-items: center; background-color: #f3f3f3; border-bottom-left-radius: 21px; border-bottom-right-radius: 21px; border-top-left-radius: 21px; border-top-right-radius: 21px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 40px; }",
    ".framer-hrf1i .framer-incfsu, .framer-hrf1i .framer-yt6ktd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; opacity: 0.6; overflow: hidden; padding: 4px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-hrf1i .framer-14i3lsa { flex: none; height: 20px; position: relative; width: 20px; }",
    ".framer-hrf1i .framer-5pclod { background-color: rgba(0, 0, 0, 0); flex: none; height: 20px; position: relative; text-decoration: none; width: 20px; }",
    ".framer-hrf1i .framer-1sbifig { flex: none; height: 20px; position: relative; text-decoration: none; width: 20px; }",
    ".framer-hrf1i .framer-1ra9vom { flex: none; height: 24px; position: relative; text-decoration: none; width: 24px; }",
    ".framer-hrf1i .framer-1n7oji1 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 29px); overflow: visible; position: relative; text-decoration: none; width: 29px; }",
    ".framer-hrf1i .framer-6eepoq { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 28px); position: relative; width: 28px; }",
    ".framer-hrf1i .framer-19v8wew { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 96px; height: 364px; justify-content: center; max-width: 1232px; overflow: visible; padding: 0px 16px 0px 16px; position: relative; scroll-margin-top: 32px; width: 100%; }",
    ".framer-hrf1i .framer-1ndp60g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: 128%; justify-content: center; overflow: hidden; padding: 182px 606px 182px 606px; position: relative; width: 122%; }",
    ".framer-hrf1i .framer-1vgea3 { bottom: 0px; flex: none; left: 0px; opacity: 0.1; position: absolute; right: 0px; top: 0px; z-index: 0; }",
    ".framer-hrf1i .framer-2f4cpt-container { flex: none; height: auto; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-hrf1i.framer-72rtr7, .framer-hrf1i .framer-10bgij6, .framer-hrf1i .framer-xqb08w, .framer-hrf1i .framer-fg4g4l, .framer-hrf1i .framer-1ry4wkq, .framer-hrf1i .framer-jcafa7, .framer-hrf1i .framer-1ciw845, .framer-hrf1i .framer-1c5jxsc, .framer-hrf1i .framer-dnlmaa, .framer-hrf1i .framer-s9kb07, .framer-hrf1i .framer-11rszsq, .framer-hrf1i .framer-13q0w3x, .framer-hrf1i .framer-fmah12, .framer-hrf1i .framer-1z0ir6y, .framer-hrf1i .framer-1d3vzg4, .framer-hrf1i .framer-1kuokn2, .framer-hrf1i .framer-oaw3xh, .framer-hrf1i .framer-npqqku, .framer-hrf1i .framer-1neh2hy, .framer-hrf1i .framer-13vt6kp, .framer-hrf1i .framer-1fhdalx, .framer-hrf1i .framer-wqjtmn, .framer-hrf1i .framer-kn7dvp, .framer-hrf1i .framer-f2b2wm, .framer-hrf1i .framer-1km9mrr, .framer-hrf1i .framer-1d4adn, .framer-hrf1i .framer-1x5h7ok, .framer-hrf1i .framer-1e962cn, .framer-hrf1i .framer-1x13cbj, .framer-hrf1i .framer-hmnaua, .framer-hrf1i .framer-1jb5hcq, .framer-hrf1i .framer-egq3uz, .framer-hrf1i .framer-1fayl9v, .framer-hrf1i .framer-1ih3jp1, .framer-hrf1i .framer-t5ucoi, .framer-hrf1i .framer-1f3u5zf, .framer-hrf1i .framer-1gyttzb, .framer-hrf1i .framer-1steuf3, .framer-hrf1i .framer-n86yqr, .framer-hrf1i .framer-b5lrq4, .framer-hrf1i .framer-ilsdql, .framer-hrf1i .framer-irljwm, .framer-hrf1i .framer-1miy836, .framer-hrf1i .framer-incfsu, .framer-hrf1i .framer-plx5hc, .framer-hrf1i .framer-ome91z, .framer-hrf1i .framer-ms5rfr, .framer-hrf1i .framer-k9ipzx, .framer-hrf1i .framer-659pkw, .framer-hrf1i .framer-yt6ktd, .framer-hrf1i .framer-19v8wew, .framer-hrf1i .framer-1ndp60g { gap: 0px; } .framer-hrf1i.framer-72rtr7 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-hrf1i.framer-72rtr7 > :first-child, .framer-hrf1i .framer-10bgij6 > :first-child, .framer-hrf1i .framer-xqb08w > :first-child, .framer-hrf1i .framer-fg4g4l > :first-child, .framer-hrf1i .framer-13q0w3x > :first-child, .framer-hrf1i .framer-1z0ir6y > :first-child, .framer-hrf1i .framer-1kuokn2 > :first-child, .framer-hrf1i .framer-13vt6kp > :first-child, .framer-hrf1i .framer-wqjtmn > :first-child, .framer-hrf1i .framer-kn7dvp > :first-child, .framer-hrf1i .framer-egq3uz > :first-child, .framer-hrf1i .framer-1fayl9v > :first-child, .framer-hrf1i .framer-1ih3jp1 > :first-child, .framer-hrf1i .framer-t5ucoi > :first-child, .framer-hrf1i .framer-1f3u5zf > :first-child, .framer-hrf1i .framer-n86yqr > :first-child, .framer-hrf1i .framer-b5lrq4 > :first-child, .framer-hrf1i .framer-ilsdql > :first-child, .framer-hrf1i .framer-incfsu > :first-child, .framer-hrf1i .framer-yt6ktd > :first-child, .framer-hrf1i .framer-19v8wew > :first-child, .framer-hrf1i .framer-1ndp60g > :first-child { margin-top: 0px; } .framer-hrf1i.framer-72rtr7 > :last-child, .framer-hrf1i .framer-10bgij6 > :last-child, .framer-hrf1i .framer-xqb08w > :last-child, .framer-hrf1i .framer-fg4g4l > :last-child, .framer-hrf1i .framer-13q0w3x > :last-child, .framer-hrf1i .framer-1z0ir6y > :last-child, .framer-hrf1i .framer-1kuokn2 > :last-child, .framer-hrf1i .framer-13vt6kp > :last-child, .framer-hrf1i .framer-wqjtmn > :last-child, .framer-hrf1i .framer-kn7dvp > :last-child, .framer-hrf1i .framer-egq3uz > :last-child, .framer-hrf1i .framer-1fayl9v > :last-child, .framer-hrf1i .framer-1ih3jp1 > :last-child, .framer-hrf1i .framer-t5ucoi > :last-child, .framer-hrf1i .framer-1f3u5zf > :last-child, .framer-hrf1i .framer-n86yqr > :last-child, .framer-hrf1i .framer-b5lrq4 > :last-child, .framer-hrf1i .framer-ilsdql > :last-child, .framer-hrf1i .framer-incfsu > :last-child, .framer-hrf1i .framer-yt6ktd > :last-child, .framer-hrf1i .framer-19v8wew > :last-child, .framer-hrf1i .framer-1ndp60g > :last-child { margin-bottom: 0px; } .framer-hrf1i .framer-10bgij6 > *, .framer-hrf1i .framer-xqb08w > *, .framer-hrf1i .framer-incfsu > *, .framer-hrf1i .framer-yt6ktd > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-hrf1i .framer-fg4g4l > *, .framer-hrf1i .framer-1fayl9v > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-hrf1i .framer-1ry4wkq > *, .framer-hrf1i .framer-jcafa7 > *, .framer-hrf1i .framer-1ciw845 > *, .framer-hrf1i .framer-1c5jxsc > *, .framer-hrf1i .framer-dnlmaa > *, .framer-hrf1i .framer-s9kb07 > *, .framer-hrf1i .framer-11rszsq > *, .framer-hrf1i .framer-fmah12 > *, .framer-hrf1i .framer-npqqku > *, .framer-hrf1i .framer-1neh2hy > *, .framer-hrf1i .framer-1km9mrr > *, .framer-hrf1i .framer-1d4adn > *, .framer-hrf1i .framer-1x5h7ok > *, .framer-hrf1i .framer-1x13cbj > *, .framer-hrf1i .framer-1jb5hcq > *, .framer-hrf1i .framer-1steuf3 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-hrf1i .framer-1ry4wkq > :first-child, .framer-hrf1i .framer-jcafa7 > :first-child, .framer-hrf1i .framer-1ciw845 > :first-child, .framer-hrf1i .framer-1c5jxsc > :first-child, .framer-hrf1i .framer-dnlmaa > :first-child, .framer-hrf1i .framer-s9kb07 > :first-child, .framer-hrf1i .framer-11rszsq > :first-child, .framer-hrf1i .framer-fmah12 > :first-child, .framer-hrf1i .framer-1d3vzg4 > :first-child, .framer-hrf1i .framer-oaw3xh > :first-child, .framer-hrf1i .framer-npqqku > :first-child, .framer-hrf1i .framer-1neh2hy > :first-child, .framer-hrf1i .framer-1fhdalx > :first-child, .framer-hrf1i .framer-f2b2wm > :first-child, .framer-hrf1i .framer-1km9mrr > :first-child, .framer-hrf1i .framer-1d4adn > :first-child, .framer-hrf1i .framer-1x5h7ok > :first-child, .framer-hrf1i .framer-1e962cn > :first-child, .framer-hrf1i .framer-1x13cbj > :first-child, .framer-hrf1i .framer-hmnaua > :first-child, .framer-hrf1i .framer-1jb5hcq > :first-child, .framer-hrf1i .framer-1gyttzb > :first-child, .framer-hrf1i .framer-1steuf3 > :first-child, .framer-hrf1i .framer-irljwm > :first-child, .framer-hrf1i .framer-1miy836 > :first-child, .framer-hrf1i .framer-plx5hc > :first-child, .framer-hrf1i .framer-ome91z > :first-child, .framer-hrf1i .framer-ms5rfr > :first-child, .framer-hrf1i .framer-k9ipzx > :first-child, .framer-hrf1i .framer-659pkw > :first-child { margin-left: 0px; } .framer-hrf1i .framer-1ry4wkq > :last-child, .framer-hrf1i .framer-jcafa7 > :last-child, .framer-hrf1i .framer-1ciw845 > :last-child, .framer-hrf1i .framer-1c5jxsc > :last-child, .framer-hrf1i .framer-dnlmaa > :last-child, .framer-hrf1i .framer-s9kb07 > :last-child, .framer-hrf1i .framer-11rszsq > :last-child, .framer-hrf1i .framer-fmah12 > :last-child, .framer-hrf1i .framer-1d3vzg4 > :last-child, .framer-hrf1i .framer-oaw3xh > :last-child, .framer-hrf1i .framer-npqqku > :last-child, .framer-hrf1i .framer-1neh2hy > :last-child, .framer-hrf1i .framer-1fhdalx > :last-child, .framer-hrf1i .framer-f2b2wm > :last-child, .framer-hrf1i .framer-1km9mrr > :last-child, .framer-hrf1i .framer-1d4adn > :last-child, .framer-hrf1i .framer-1x5h7ok > :last-child, .framer-hrf1i .framer-1e962cn > :last-child, .framer-hrf1i .framer-1x13cbj > :last-child, .framer-hrf1i .framer-hmnaua > :last-child, .framer-hrf1i .framer-1jb5hcq > :last-child, .framer-hrf1i .framer-1gyttzb > :last-child, .framer-hrf1i .framer-1steuf3 > :last-child, .framer-hrf1i .framer-irljwm > :last-child, .framer-hrf1i .framer-1miy836 > :last-child, .framer-hrf1i .framer-plx5hc > :last-child, .framer-hrf1i .framer-ome91z > :last-child, .framer-hrf1i .framer-ms5rfr > :last-child, .framer-hrf1i .framer-k9ipzx > :last-child, .framer-hrf1i .framer-659pkw > :last-child { margin-right: 0px; } .framer-hrf1i .framer-13q0w3x > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-hrf1i .framer-1z0ir6y > *, .framer-hrf1i .framer-1ndp60g > * { margin: 0px; margin-bottom: calc(100px / 2); margin-top: calc(100px / 2); } .framer-hrf1i .framer-1d3vzg4 > *, .framer-hrf1i .framer-1fhdalx > * { margin: 0px; margin-left: calc(80px / 2); margin-right: calc(80px / 2); } .framer-hrf1i .framer-1kuokn2 > *, .framer-hrf1i .framer-13vt6kp > *, .framer-hrf1i .framer-wqjtmn > *, .framer-hrf1i .framer-kn7dvp > *, .framer-hrf1i .framer-n86yqr > *, .framer-hrf1i .framer-ilsdql > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-hrf1i .framer-oaw3xh > *, .framer-hrf1i .framer-f2b2wm > *, .framer-hrf1i .framer-1e962cn > *, .framer-hrf1i .framer-hmnaua > *, .framer-hrf1i .framer-1gyttzb > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } .framer-hrf1i .framer-egq3uz > *, .framer-hrf1i .framer-19v8wew > * { margin: 0px; margin-bottom: calc(96px / 2); margin-top: calc(96px / 2); } .framer-hrf1i .framer-1ih3jp1 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-hrf1i .framer-t5ucoi > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-hrf1i .framer-1f3u5zf > * { margin: 0px; margin-bottom: calc(659px / 2); margin-top: calc(659px / 2); } .framer-hrf1i .framer-b5lrq4 > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-hrf1i .framer-irljwm > * { margin: 0px; margin-left: calc(27px / 2); margin-right: calc(27px / 2); } .framer-hrf1i .framer-1miy836 > *, .framer-hrf1i .framer-plx5hc > *, .framer-hrf1i .framer-ome91z > *, .framer-hrf1i .framer-ms5rfr > *, .framer-hrf1i .framer-k9ipzx > *, .framer-hrf1i .framer-659pkw > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }",
    `@media (min-width: 810px) and (max-width: 1199px) { .${Lt.bodyClassName}-framer-hrf1i { background: rgb(20, 20, 20); } .framer-hrf1i.framer-72rtr7 { width: 810px; } .framer-hrf1i .framer-10bgij6 { padding: 160px 32px 160px 32px; } .framer-hrf1i .framer-1gt7b0y { -webkit-mask: radial-gradient(75% 52% at 50% 33.300000000000004%, #000000 0%, rgba(0, 0, 0, 0) 100%) add; bottom: -145px; mask: radial-gradient(75% 52% at 50% 33.300000000000004%, #000000 0%, rgba(0, 0, 0, 0) 100%) add; } .framer-hrf1i .framer-xqb08w { padding: 0px 32px 0px 32px; } .framer-hrf1i .framer-11rszsq { height: 493px; } .framer-hrf1i .framer-13q0w3x { height: 422px; width: 98%; } .framer-hrf1i .framer-fmah12 { padding: 60px 40px 60px 40px; } .framer-hrf1i .framer-hs0r9r { width: 367px; } .framer-hrf1i .framer-1obdz0p { width: 326px; } .framer-hrf1i .framer-13vt6kp, .framer-hrf1i .framer-wqjtmn { height: var(--framer-aspect-ratio-supported, 271px); } .framer-hrf1i .framer-1nhnei { width: 368px; } .framer-hrf1i .framer-pil1oa { width: 344px; } .framer-hrf1i .framer-1km9mrr, .framer-hrf1i .framer-1x13cbj, .framer-hrf1i .framer-1h2fykq { order: 0; } .framer-hrf1i .framer-1d4adn { order: 2; } .framer-hrf1i .framer-egq3uz { gap: 64px; padding: 0px 32px 95px 32px; } .framer-hrf1i .framer-1f3u5zf { gap: 478px; height: 665px; } .framer-hrf1i .framer-1gyttzb { order: 1; } .framer-hrf1i .framer-3hdq9w-container { height: 408px; left: calc(50.00000000000002% - 718px / 2); order: 2; top: calc(50.07518796992484% - 408px / 2); width: 718px; } .framer-hrf1i .framer-n86yqr { height: 236px; width: 101%; } .framer-hrf1i .framer-19v8wew { gap: 64px; height: min-content; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-hrf1i .framer-egq3uz, .framer-hrf1i .framer-1f3u5zf, .framer-hrf1i .framer-19v8wew { gap: 0px; } .framer-hrf1i .framer-egq3uz > *, .framer-hrf1i .framer-19v8wew > * { margin: 0px; margin-bottom: calc(64px / 2); margin-top: calc(64px / 2); } .framer-hrf1i .framer-egq3uz > :first-child, .framer-hrf1i .framer-1f3u5zf > :first-child, .framer-hrf1i .framer-19v8wew > :first-child { margin-top: 0px; } .framer-hrf1i .framer-egq3uz > :last-child, .framer-hrf1i .framer-1f3u5zf > :last-child, .framer-hrf1i .framer-19v8wew > :last-child { margin-bottom: 0px; } .framer-hrf1i .framer-1f3u5zf > * { margin: 0px; margin-bottom: calc(478px / 2); margin-top: calc(478px / 2); } }}`,
    `@media (max-width: 809px) { .${Lt.bodyClassName}-framer-hrf1i { background: rgb(20, 20, 20); } .framer-hrf1i.framer-72rtr7 { width: 390px; } .framer-hrf1i .framer-10bgij6 { padding: 120px 20px 160px 20px; } .framer-hrf1i .framer-1gt7b0y { -webkit-mask: radial-gradient(100% 52% at 50% 33.300000000000004%, #000000 0%, rgba(0, 0, 0, 0) 100%) add; bottom: 0px; left: -322px; mask: radial-gradient(100% 52% at 50% 33.300000000000004%, #000000 0%, rgba(0, 0, 0, 0) 100%) add; right: -95px; top: 65px; } .framer-hrf1i .framer-xqb08w { padding: 0px 20px 0px 20px; } .framer-hrf1i .framer-11rszsq { height: 225px; } .framer-hrf1i .framer-13q0w3x { height: 184px; width: 104%; } .framer-hrf1i .framer-fmah12 { gap: 20px; padding: 35px 20px 60px 20px; } .framer-hrf1i .framer-1z0ir6y { gap: 60px; } .framer-hrf1i .framer-1d3vzg4 { flex-direction: column; gap: 31px; order: 0; } .framer-hrf1i .framer-1kuokn2, .framer-hrf1i .framer-kn7dvp { flex: none; order: 0; width: 100%; } .framer-hrf1i .framer-hs0r9r { width: 373px; } .framer-hrf1i .framer-1obdz0p { width: 341px; } .framer-hrf1i .framer-13vt6kp { flex: none; gap: 3px; height: var(--framer-aspect-ratio-supported, 292px); order: 1; width: 100%; } .framer-hrf1i .framer-1fhdalx { flex-direction: column; gap: 31px; order: 1; } .framer-hrf1i .framer-wqjtmn { flex: none; height: var(--framer-aspect-ratio-supported, 292px); order: 1; width: 100%; } .framer-hrf1i .framer-1nhnei { width: 372px; } .framer-hrf1i .framer-pil1oa { width: 360px; } .framer-hrf1i .framer-1jb5hcq, .framer-hrf1i .framer-1h2fykq { order: 0; } .framer-hrf1i .framer-egq3uz { gap: 64px; padding: 6px 20px 100px 20px; } .framer-hrf1i .framer-1fayl9v { gap: 40px; } .framer-hrf1i .framer-1ih3jp1 { gap: 24px; } .framer-hrf1i .framer-t5ucoi { gap: 20px; } .framer-hrf1i .framer-julawe-container { width: 100%; } .framer-hrf1i .framer-1f3u5zf { gap: 261px; height: 385px; padding: 60px; } .framer-hrf1i .framer-1gyttzb { order: 1; } .framer-hrf1i .framer-3hdq9w-container { height: 204px; left: calc(50.00000000000002% - 354px / 2); order: 2; top: calc(47.272727272727295% - 204px / 2); width: 354px; } .framer-hrf1i .framer-n86yqr { height: 225px; padding: 60px; width: 101%; } .framer-hrf1i .framer-b5lrq4 { gap: 0px; padding: 80px 50px 80px 50px; } .framer-hrf1i .framer-ilsdql { min-height: 74px; } .framer-hrf1i .framer-ov10nv { left: -61px; order: 0; position: absolute; right: -61px; top: -2px; width: unset; z-index: 1; } .framer-hrf1i .framer-irljwm { gap: 7px; } .framer-hrf1i .framer-19v8wew { gap: 64px; padding: 0px; } .framer-hrf1i .framer-1ndp60g { bottom: 0px; height: unset; left: -367px; order: 0; position: absolute; right: -455px; top: 0px; width: unset; z-index: 1; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-hrf1i .framer-fmah12, .framer-hrf1i .framer-1z0ir6y, .framer-hrf1i .framer-1d3vzg4, .framer-hrf1i .framer-13vt6kp, .framer-hrf1i .framer-1fhdalx, .framer-hrf1i .framer-egq3uz, .framer-hrf1i .framer-1fayl9v, .framer-hrf1i .framer-1ih3jp1, .framer-hrf1i .framer-t5ucoi, .framer-hrf1i .framer-1f3u5zf, .framer-hrf1i .framer-b5lrq4, .framer-hrf1i .framer-irljwm, .framer-hrf1i .framer-19v8wew { gap: 0px; } .framer-hrf1i .framer-fmah12 > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-hrf1i .framer-fmah12 > :first-child, .framer-hrf1i .framer-irljwm > :first-child { margin-left: 0px; } .framer-hrf1i .framer-fmah12 > :last-child, .framer-hrf1i .framer-irljwm > :last-child { margin-right: 0px; } .framer-hrf1i .framer-1z0ir6y > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-hrf1i .framer-1z0ir6y > :first-child, .framer-hrf1i .framer-1d3vzg4 > :first-child, .framer-hrf1i .framer-13vt6kp > :first-child, .framer-hrf1i .framer-1fhdalx > :first-child, .framer-hrf1i .framer-egq3uz > :first-child, .framer-hrf1i .framer-1fayl9v > :first-child, .framer-hrf1i .framer-1ih3jp1 > :first-child, .framer-hrf1i .framer-t5ucoi > :first-child, .framer-hrf1i .framer-1f3u5zf > :first-child, .framer-hrf1i .framer-b5lrq4 > :first-child, .framer-hrf1i .framer-19v8wew > :first-child { margin-top: 0px; } .framer-hrf1i .framer-1z0ir6y > :last-child, .framer-hrf1i .framer-1d3vzg4 > :last-child, .framer-hrf1i .framer-13vt6kp > :last-child, .framer-hrf1i .framer-1fhdalx > :last-child, .framer-hrf1i .framer-egq3uz > :last-child, .framer-hrf1i .framer-1fayl9v > :last-child, .framer-hrf1i .framer-1ih3jp1 > :last-child, .framer-hrf1i .framer-t5ucoi > :last-child, .framer-hrf1i .framer-1f3u5zf > :last-child, .framer-hrf1i .framer-b5lrq4 > :last-child, .framer-hrf1i .framer-19v8wew > :last-child { margin-bottom: 0px; } .framer-hrf1i .framer-1d3vzg4 > *, .framer-hrf1i .framer-1fhdalx > * { margin: 0px; margin-bottom: calc(31px / 2); margin-top: calc(31px / 2); } .framer-hrf1i .framer-13vt6kp > * { margin: 0px; margin-bottom: calc(3px / 2); margin-top: calc(3px / 2); } .framer-hrf1i .framer-egq3uz > *, .framer-hrf1i .framer-19v8wew > * { margin: 0px; margin-bottom: calc(64px / 2); margin-top: calc(64px / 2); } .framer-hrf1i .framer-1fayl9v > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-hrf1i .framer-1ih3jp1 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-hrf1i .framer-t5ucoi > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-hrf1i .framer-1f3u5zf > * { margin: 0px; margin-bottom: calc(261px / 2); margin-top: calc(261px / 2); } .framer-hrf1i .framer-b5lrq4 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-hrf1i .framer-irljwm > * { margin: 0px; margin-left: calc(7px / 2); margin-right: calc(7px / 2); } }}`,
    ...Zr,
    ...Ea,
  ],
  $r = Fe(ts, as, "framer-hrf1i"),
  sp = $r;
$r.displayName = "Home";
$r.defaultProps = { height: 4253, width: 1200 };
Ie(
  $r,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Mansalva",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/mansalva/v14/aWB4m0aacbtDfvq5NJlgI47vdyBg.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZ1rib2Bg-4.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZ1rib2Bg-4.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "/framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "/framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "/framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...Eo,
    ...Do,
    ...jo,
    ...zo,
    ...Uo,
    ...qo,
    ...Ze(Gr),
    ...Ze(Ta),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var lp = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerResponsiveScreen: "",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"FVjP19y4Z":{"layout":["fixed","auto"]},"fT7x1vrZs":{"layout":["fixed","auto"]}}}',
        framerIntrinsicHeight: "4253",
        framerImmutableVariables: "true",
        framerContractVersion: "1",
        framerIntrinsicWidth: "1200",
        framerComponentViewportWidth: "true",
        framerDisplayContentsDiv: "false",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { lp as __FramerMetadata__, sp as default };
//# sourceMappingURL=QGiifpygVySS5MM2lSNfS3vmPc3ZhG7AQy6wLQPziCA.ZT5TYAGF.mjs.map
