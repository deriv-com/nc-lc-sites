! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("@floating-ui/core")) : "function" == typeof define && define.amd ? define(["exports", "@floating-ui/core"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).FloatingUIDOM = {}, t.FloatingUICore)
}(this, (function(t, e) {
    "use strict";

    function n(t) {
        var e;
        return (null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
    }

    function o(t) {
        return n(t).getComputedStyle(t)
    }

    function i(t) {
        return t instanceof n(t).Node
    }

    function r(t) {
        return i(t) ? (t.nodeName || "").toLowerCase() : ""
    }
    let l;

    function c() {
        if (l) return l;
        const t = navigator.userAgentData;
        return t && Array.isArray(t.brands) ? (l = t.brands.map((t => t.brand + "/" + t.version)).join(" "), l) : navigator.userAgent
    }

    function f(t) {
        return t instanceof n(t).HTMLElement
    }

    function s(t) {
        return t instanceof n(t).Element
    }

    function u(t) {
        if ("undefined" == typeof ShadowRoot) return !1;
        return t instanceof n(t).ShadowRoot || t instanceof ShadowRoot
    }

    function a(t) {
        const {
            overflow: e,
            overflowX: n,
            overflowY: i,
            display: r
        } = o(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + i + n) && !["inline", "contents"].includes(r)
    }

    function d(t) {
        return ["table", "td", "th"].includes(r(t))
    }

    function h(t) {
        const e = /firefox/i.test(c()),
            n = o(t),
            i = n.backdropFilter || n.WebkitBackdropFilter;
        return "none" !== n.transform || "none" !== n.perspective || !!i && "none" !== i || e && "filter" === n.willChange || e && !!n.filter && "none" !== n.filter || ["transform", "perspective"].some((t => n.willChange.includes(t))) || ["paint", "layout", "strict", "content"].some((t => {
            const e = n.contain;
            return null != e && e.includes(t)
        }))
    }

    function p() {
        return /^((?!chrome|android).)*safari/i.test(c())
    }

    function g(t) {
        return ["html", "body", "#document"].includes(r(t))
    }
    const m = Math.min,
        y = Math.max,
        x = Math.round;

    function w(t) {
        const e = o(t);
        let n = parseFloat(e.width),
            i = parseFloat(e.height);
        const r = f(t),
            l = r ? t.offsetWidth : n,
            c = r ? t.offsetHeight : i,
            s = x(n) !== l || x(i) !== c;
        return s && (n = l, i = c), {
            width: n,
            height: i,
            fallback: s
        }
    }

    function b(t) {
        return s(t) ? t : t.contextElement
    }
    const v = {
        x: 1,
        y: 1
    };

    function L(t) {
        const e = b(t);
        if (!f(e)) return v;
        const n = e.getBoundingClientRect(),
            {
                width: o,
                height: i,
                fallback: r
            } = w(e);
        let l = (r ? x(n.width) : n.width) / o,
            c = (r ? x(n.height) : n.height) / i;
        return l && Number.isFinite(l) || (l = 1), c && Number.isFinite(c) || (c = 1), {
            x: l,
            y: c
        }
    }

    function T(t, o, i, r) {
        var l, c;
        void 0 === o && (o = !1), void 0 === i && (i = !1);
        const f = t.getBoundingClientRect(),
            u = b(t);
        let a = v;
        o && (r ? s(r) && (a = L(r)) : a = L(t));
        const d = u ? n(u) : window,
            h = p() && i;
        let g = (f.left + (h && (null == (l = d.visualViewport) ? void 0 : l.offsetLeft) || 0)) / a.x,
            m = (f.top + (h && (null == (c = d.visualViewport) ? void 0 : c.offsetTop) || 0)) / a.y,
            y = f.width / a.x,
            x = f.height / a.y;
        if (u) {
            const t = n(u),
                e = r && s(r) ? n(r) : r;
            let o = t.frameElement;
            for (; o && r && e !== t;) {
                const t = L(o),
                    e = o.getBoundingClientRect(),
                    i = getComputedStyle(o);
                e.x += (o.clientLeft + parseFloat(i.paddingLeft)) * t.x, e.y += (o.clientTop + parseFloat(i.paddingTop)) * t.y, g *= t.x, m *= t.y, y *= t.x, x *= t.y, g += e.x, m += e.y, o = n(o).frameElement
            }
        }
        return e.rectToClientRect({
            width: y,
            height: x,
            x: g,
            y: m
        })
    }

    function O(t) {
        return ((i(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function P(t) {
        return s(t) ? {
            scrollLeft: t.scrollLeft,
            scrollTop: t.scrollTop
        } : {
            scrollLeft: t.pageXOffset,
            scrollTop: t.pageYOffset
        }
    }

    function R(t) {
        return T(O(t)).left + P(t).scrollLeft
    }

    function E(t) {
        if ("html" === r(t)) return t;
        const e = t.assignedSlot || t.parentNode || u(t) && t.host || O(t);
        return u(e) ? e.host : e
    }

    function C(t) {
        const e = E(t);
        return g(e) ? e.ownerDocument.body : f(e) && a(e) ? e : C(e)
    }

    function j(t, e) {
        var o;
        void 0 === e && (e = []);
        const i = C(t),
            r = i === (null == (o = t.ownerDocument) ? void 0 : o.body),
            l = n(i);
        return r ? e.concat(l, l.visualViewport || [], a(i) ? i : []) : e.concat(i, j(i))
    }

    function F(t, i, r) {
        let l;
        if ("viewport" === i) l = function(t, e) {
            const o = n(t),
                i = O(t),
                r = o.visualViewport;
            let l = i.clientWidth,
                c = i.clientHeight,
                f = 0,
                s = 0;
            if (r) {
                l = r.width, c = r.height;
                const t = p();
                (!t || t && "fixed" === e) && (f = r.offsetLeft, s = r.offsetTop)
            }
            return {
                width: l,
                height: c,
                x: f,
                y: s
            }
        }(t, r);
        else if ("document" === i) l = function(t) {
            const e = O(t),
                n = P(t),
                i = t.ownerDocument.body,
                r = y(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth),
                l = y(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight);
            let c = -n.scrollLeft + R(t);
            const f = -n.scrollTop;
            return "rtl" === o(i).direction && (c += y(e.clientWidth, i.clientWidth) - r), {
                width: r,
                height: l,
                x: c,
                y: f
            }
        }(O(t));
        else if (s(i)) l = function(t, e) {
            const n = T(t, !0, "fixed" === e),
                o = n.top + t.clientTop,
                i = n.left + t.clientLeft,
                r = f(t) ? L(t) : {
                    x: 1,
                    y: 1
                };
            return {
                width: t.clientWidth * r.x,
                height: t.clientHeight * r.y,
                x: i * r.x,
                y: o * r.y
            }
        }(i, r);
        else {
            const e = {
                ...i
            };
            if (p()) {
                var c, u;
                const o = n(t);
                e.x -= (null == (c = o.visualViewport) ? void 0 : c.offsetLeft) || 0, e.y -= (null == (u = o.visualViewport) ? void 0 : u.offsetTop) || 0
            }
            l = e
        }
        return e.rectToClientRect(l)
    }

    function S(t, e) {
        const n = E(t);
        return !(n === e || !s(n) || g(n)) && ("fixed" === o(n).position || S(n, e))
    }

    function D(t, e) {
        return f(t) && "fixed" !== o(t).position ? e ? e(t) : t.offsetParent : null
    }

    function W(t, e) {
        const i = n(t);
        if (!f(t)) return i;
        let l = D(t, e);
        for (; l && d(l) && "static" === o(l).position;) l = D(l, e);
        return l && ("html" === r(l) || "body" === r(l) && "static" === o(l).position && !h(l)) ? i : l || function(t) {
            let e = E(t);
            for (; f(e) && !g(e);) {
                if (h(e)) return e;
                e = E(e)
            }
            return null
        }(t) || i
    }

    function A(t, e, n) {
        const o = f(e),
            i = O(e),
            l = T(t, !0, "fixed" === n, e);
        let c = {
            scrollLeft: 0,
            scrollTop: 0
        };
        const s = {
            x: 0,
            y: 0
        };
        if (o || !o && "fixed" !== n)
            if (("body" !== r(e) || a(i)) && (c = P(e)), f(e)) {
                const t = T(e, !0);
                s.x = t.x + e.clientLeft, s.y = t.y + e.clientTop
            } else i && (s.x = R(i));
        return {
            x: l.left + c.scrollLeft - s.x,
            y: l.top + c.scrollTop - s.y,
            width: l.width,
            height: l.height
        }
    }
    const V = {
        getClippingRect: function(t) {
            let {
                element: e,
                boundary: n,
                rootBoundary: i,
                strategy: l
            } = t;
            const c = "clippingAncestors" === n ? function(t, e) {
                    const n = e.get(t);
                    if (n) return n;
                    let i = j(t).filter((t => s(t) && "body" !== r(t))),
                        l = null;
                    const c = "fixed" === o(t).position;
                    let f = c ? E(t) : t;
                    for (; s(f) && !g(f);) {
                        const e = o(f),
                            n = h(f);
                        n || "fixed" !== e.position || (l = null), (c ? !n && !l : !n && "static" === e.position && l && ["absolute", "fixed"].includes(l.position) || a(f) && !n && S(t, f)) ? i = i.filter((t => t !== f)) : l = e, f = E(f)
                    }
                    return e.set(t, i), i
                }(e, this._c) : [].concat(n),
                f = [...c, i],
                u = f[0],
                d = f.reduce(((t, n) => {
                    const o = F(e, n, l);
                    return t.top = y(o.top, t.top), t.right = m(o.right, t.right), t.bottom = m(o.bottom, t.bottom), t.left = y(o.left, t.left), t
                }), F(e, u, l));
            return {
                width: d.right - d.left,
                height: d.bottom - d.top,
                x: d.left,
                y: d.top
            }
        },
        convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
            let {
                rect: e,
                offsetParent: n,
                strategy: o
            } = t;
            const i = f(n),
                l = O(n);
            if (n === l) return e;
            let c = {
                    scrollLeft: 0,
                    scrollTop: 0
                },
                s = {
                    x: 1,
                    y: 1
                };
            const u = {
                x: 0,
                y: 0
            };
            if ((i || !i && "fixed" !== o) && (("body" !== r(n) || a(l)) && (c = P(n)), f(n))) {
                const t = T(n);
                s = L(n), u.x = t.x + n.clientLeft, u.y = t.y + n.clientTop
            }
            return {
                width: e.width * s.x,
                height: e.height * s.y,
                x: e.x * s.x - c.scrollLeft * s.x + u.x,
                y: e.y * s.y - c.scrollTop * s.y + u.y
            }
        },
        isElement: s,
        getDimensions: function(t) {
            return w(t)
        },
        getOffsetParent: W,
        getDocumentElement: O,
        getScale: L,
        async getElementRects(t) {
            let {
                reference: e,
                floating: n,
                strategy: o
            } = t;
            const i = this.getOffsetParent || W,
                r = this.getDimensions;
            return {
                reference: A(e, await i(n), o),
                floating: {
                    x: 0,
                    y: 0,
                    ...await r(n)
                }
            }
        },
        getClientRects: t => Array.from(t.getClientRects()),
        isRTL: t => "rtl" === o(t).direction
    };
    Object.defineProperty(t, "arrow", {
        enumerable: !0,
        get: function() {
            return e.arrow
        }
    }), Object.defineProperty(t, "autoPlacement", {
        enumerable: !0,
        get: function() {
            return e.autoPlacement
        }
    }), Object.defineProperty(t, "detectOverflow", {
        enumerable: !0,
        get: function() {
            return e.detectOverflow
        }
    }), Object.defineProperty(t, "flip", {
        enumerable: !0,
        get: function() {
            return e.flip
        }
    }), Object.defineProperty(t, "hide", {
        enumerable: !0,
        get: function() {
            return e.hide
        }
    }), Object.defineProperty(t, "inline", {
        enumerable: !0,
        get: function() {
            return e.inline
        }
    }), Object.defineProperty(t, "limitShift", {
        enumerable: !0,
        get: function() {
            return e.limitShift
        }
    }), Object.defineProperty(t, "offset", {
        enumerable: !0,
        get: function() {
            return e.offset
        }
    }), Object.defineProperty(t, "shift", {
        enumerable: !0,
        get: function() {
            return e.shift
        }
    }), Object.defineProperty(t, "size", {
        enumerable: !0,
        get: function() {
            return e.size
        }
    }), t.autoUpdate = function(t, e, n, o) {
        void 0 === o && (o = {});
        const {
            ancestorScroll: i = !0,
            ancestorResize: r = !0,
            elementResize: l = !0,
            animationFrame: c = !1
        } = o, f = i || r ? [...s(t) ? j(t) : t.contextElement ? j(t.contextElement) : [], ...j(e)] : [];
        f.forEach((t => {
            const e = !s(t) && t.toString().includes("V");
            !i || c && !e || t.addEventListener("scroll", n, {
                passive: !0
            }), r && t.addEventListener("resize", n)
        }));
        let u, a = null;
        l && (a = new ResizeObserver((() => {
            n()
        })), s(t) && !c && a.observe(t), s(t) || !t.contextElement || c || a.observe(t.contextElement), a.observe(e));
        let d = c ? T(t) : null;
        return c && function e() {
            const o = T(t);
            !d || o.x === d.x && o.y === d.y && o.width === d.width && o.height === d.height || n();
            d = o, u = requestAnimationFrame(e)
        }(), n(), () => {
            var t;
            f.forEach((t => {
                i && t.removeEventListener("scroll", n), r && t.removeEventListener("resize", n)
            })), null == (t = a) || t.disconnect(), a = null, c && cancelAnimationFrame(u)
        }
    }, t.computePosition = (t, n, o) => {
        const i = new Map,
            r = {
                platform: V,
                ...o
            },
            l = {
                ...r.platform,
                _c: i
            };
        return e.computePosition(t, n, {
            ...r,
            platform: l
        })
    }, t.getOverflowAncestors = j, t.platform = V, Object.defineProperty(t, "__esModule", {
        value: !0
    })
}));