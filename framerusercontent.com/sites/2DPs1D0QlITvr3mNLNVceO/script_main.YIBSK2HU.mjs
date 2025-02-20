import {
  Fa as S,
  I as g,
  J as m,
  K as u,
  L as b,
  M as _,
  N as y,
  O as k,
  R as v,
  U as F,
  W as E,
  e as c,
  ga as P,
  h,
  ja as I,
  ua as w,
} from "./chunk-A6F4P65O.mjs";
import "./chunk-JR5VT52U.mjs";
import { c as t } from "./chunk-RIUMFBNJ.mjs";
var T = "default" in m ? g : m,
  d = {},
  N = T;
d.createRoot = N.createRoot;
d.hydrateRoot = N.hydrateRoot;
var x = d.createRoot,
  O = d.hydrateRoot;
var p = {
    augiA20Il: {
      elements: {
        Gea9hnNe9: "contact",
        Jow5OoU99: "hero",
        Kug6_bJnl: "watch",
        ozxJgCNle: "faq-1",
        PQJk_pe7z: "buy",
        pRJapcRGE: "Trade",
        sAtTLi0l9: "faq",
        XoqnsNSqu: "about",
      },
      page: u(() =>
        import("./QGiifpygVySS5MM2lSNfS3vmPc3ZhG7AQy6wLQPziCA.ZT5TYAGF.mjs")
      ),
      path: "/",
    },
  },
  J = [{ code: "en", id: "default", name: "English", slug: "" }];
async function z({ routeId: a, pathVariables: o, localeId: r }) {
  await p[a].page.preload();
  let n = c(I, {
      isWebsite: !0,
      routeId: a,
      pathVariables: o,
      routes: p,
      collectionUtils: {},
      framerSiteId:
        "2394c983464c420745398ed8b01254e950982b5fdbe7b3c2558e20cf76a4b690",
      notFoundPage: u(() => import("./SitesNotFoundPage.js@1.1-GFV7VSPK.mjs")),
      isReducedMotion: void 0,
      localeId: r,
      locales: J,
      preserveQueryParams: void 0,
    }),
    s = c(P, {
      children: n,
      value: {
        enableAsyncURLUpdates: !0,
        replaceNestedLinks: !0,
        useGranularSuspense: !0,
        wrapUpdatesInTransitions: !1,
      },
    });
  return c(b, { children: s, value: { routes: {} } });
}
var M = typeof document < "u";
if (M) {
  (t.__framer_importFromPackage = (o, r) => () =>
    c(F, {
      error: 'Package component not supported: "' + r + '" in "' + o + '"',
    })),
    (t.process = {
      ...t.process,
      env: { ...(t.process ? t.process.env : void 0), NODE_ENV: "production" },
    }),
    (t.__framer_events = t.__framer_events || []),
    E();
  let a = document.getElementById("main");
  "framerHydrateV2" in a.dataset ? D(!0, a) : D(!1, a);
}
function V() {
  M && t.__framer_events.push(arguments);
}
async function D(a, o) {
  try {
    let R = function (e, U) {
        let l = U?.componentStack;
        console.warn(
          "Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches.",
          e,
          l
        ),
          !(Math.random() > 0.01) &&
            V("published_site_load_recoverable_error", {
              message: String(e),
              componentStack: l,
              stack: l
                ? void 0
                : e instanceof Error && typeof e.stack == "string"
                ? e.stack
                : null,
            });
      },
      r,
      n,
      s,
      i;
    if (a) {
      let e = JSON.parse(o.dataset.framerHydrateV2);
      (r = e.routeId),
        (n = e.localeId),
        (s = e.pathVariables),
        (i = e.breakpoints);
    } else {
      let e = v(p, decodeURIComponent(location.pathname), !0, J);
      (r = e.routeId), (n = e.localeId), (s = e.pathVariables);
    }
    let f = await z({ routeId: r, localeId: n, pathVariables: s });
    a
      ? (S("framer-rewrite-breakpoints", () => {
          w(i), t.__framer_onRewriteBreakpoints?.(i);
        }),
        h(() => {
          _(), k(), y(), O(o, f, { onRecoverableError: R });
        }))
      : x(o, { onRecoverableError: R }).render(f);
  } catch (r) {
    throw (
      (V("published_site_load_error", {
        message: String(r),
        stack:
          r instanceof Error && typeof r.stack == "string" ? r.stack : null,
      }),
      r)
    );
  }
}
export { z as getPageRoot };
//# sourceMappingURL=script_main.YIBSK2HU.mjs.map
