(function(global, factory) {
    if (typeof define === "function" && define.amd) {
        define("@outsystems/runtime-view-js", ["exports", "@outsystems/runtime-core-js", "react", "react-dom", "react-router-dom", "react-router-dom", "react-router"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("@outsystems/runtime-core-js"), require("react"), require("react-dom"), require("react-router-dom"), require("react-router-dom"), require("react-router"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.runtimeCoreJs, global.react, global.reactDom, global.deprecatedReactRouterDom, global.v6ReactRouterDom, global.v6ReactRouter);
        global.outsystemsRuntimeViewJs = mod.exports;
    }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function(_exports, _runtimeCoreJs, _react, _reactDom, _deprecatedReactRouterDom, _v6ReactRouterDom, _v6ReactRouter) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.routerV6 = _exports.fc = _exports.WidgetHelpers = _exports.Widget = _exports.VirtualizedScrollViewer = _exports.Version = _exports.ScrollExtensions = _exports.Router = _exports.RouteComponents = _exports.Portal = _exports.HtmlTags = _exports.FeedbackMessage = _exports.BaseView = _exports.AnimatedGroup = void 0;
    _react = _interopRequireWildcard(_react);
    var O = _react;
    _reactDom = _interopRequireWildcard(_reactDom);
    var B = _reactDom;

    function _getRequireWildcardCache(e) {
        if ("function" != typeof WeakMap) return null;
        var r = new WeakMap(),
            t = new WeakMap();
        return (_getRequireWildcardCache = function(e) {
            return e ? t : r;
        })(e);
    }

    function _interopRequireWildcard(e, r) {
        if (!r && e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var t = _getRequireWildcardCache(r);
        if (t && t.has(e)) return t.get(e);
        var n = {
                __proto__: null
            },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
            if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
                var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
                i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
            } return n.default = e, t && t.set(e, n), n;
    }
    var se, ae;
    ! function(e) {
        const t = /(auto|scroll)/;
        let n;
        ! function(e) {
            e[e.Horizontal = 0] = "Horizontal", e[e.Vertical = 1] = "Vertical", e[e.None = 2] = "None";
        }(n = e.ScrollDirection || (e.ScrollDirection = {})), e.getScrollHostInfo = function e(r, o) {
            if (null == r || r instanceof Document) return {
                scrollHost: window,
                scrollDirection: n.Vertical
            };
            const i = getComputedStyle(r);
            if (!(o = o || "absolute" === i.position) || "static" !== i.position) {
                if (t.test(i.overflow + i.overflowY + i.overflowX) && !r.hasAttribute("data-not-scrollable")) return {
                    scrollHost: r === document.documentElement ? window : r,
                    scrollDirection: t.test(i.overflowY) ? n.Vertical : n.Horizontal
                };
            }
            return e(r.parentElement, o);
        }, e.getScrollInfo = function(e) {
            return e instanceof Window ? {
                scrollHost: e,
                scroll: {
                    x: document.documentElement.scrollLeft,
                    y: document.documentElement.scrollTop,
                    height: document.documentElement.scrollHeight,
                    width: document.documentElement.scrollWidth
                },
                viewport: {
                    x: 0,
                    y: 0,
                    height: e.innerHeight,
                    width: e.innerWidth
                }
            } : e instanceof HTMLElement ? {
                scrollHost: e,
                scroll: {
                    x: e.scrollLeft,
                    y: e.scrollTop,
                    height: e.scrollHeight,
                    width: e.scrollWidth
                },
                viewport: {
                    x: 0,
                    y: 0,
                    height: e.clientHeight,
                    width: e.clientWidth
                }
            } : null;
        }, e.setScrollOffset = function(e, t, n) {
            let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
            e instanceof Window && (e = document.body);
            const o = e;
            n && !isNaN(n) && (r && (n += o.scrollTop), o.scrollTop = n), t && !isNaN(t) && (r && (t += o.scrollLeft), o.scrollLeft = t);
        };
    }(se || (se = {})),
    function(e) {
        e.assign = function(e) {
            if (null === e) throw new TypeError("Cannot convert undefined or null to object");
            e = Object(e);
            for (let t = 1; t < arguments.length; t++) {
                const n = arguments[t];
                if (null !== n)
                    for (const t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
            }
            return e;
        };
    }(ae || (ae = {}));
    var le = {
            exports: {}
        },
        ce = {};
    Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
    ! function() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            var r = Object.getOwnPropertyNames(t).map(function(e) {
                return t[e];
            });
            if ("0123456789" !== r.join("")) return !1;
            var o = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                o[e] = e;
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("");
        } catch (e) {
            return !1;
        }
    }() || Object.assign;
    /** @license React v17.0.2
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var de = _react.default,
        ue = 60103;
    if (ce.Fragment = 60107, "function" == typeof Symbol && Symbol.for) {
        var pe = Symbol.for;
        ue = pe("react.element"), ce.Fragment = pe("react.fragment");
    }
    var he = de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        me = Object.prototype.hasOwnProperty,
        ve = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function fe(e, t, n) {
        var r,
            o = {},
            i = null,
            s = null;
        for (r in void 0 !== n && (i = "" + n), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (s = t.ref), t) me.call(t, r) && !ve.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps)
            for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
        return {
            $$typeof: ue,
            type: e,
            key: i,
            ref: s,
            props: o,
            _owner: he.current
        };
    }
    ce.jsx = fe, ce.jsxs = fe, le.exports = ce;
    var ge = le.exports;

    function Se() {
        return Se = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, Se.apply(null, arguments);
    }

    function ye(e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
            if ({}.hasOwnProperty.call(e, r)) {
                if (t.includes(r)) continue;
                n[r] = e[r];
            }
        return n;
    }

    function we(e, t) {
        return we = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t, e;
        }, we(e, t);
    }

    function Ce(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, we(e, t);
    }
    var Ee = {
        exports: {}
    };

    function be() {}

    function xe() {}
    xe.resetWarningCache = be;
    Ee.exports = function() {
        function e(e, t, n, r, o, i) {
            if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== i) {
                var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw s.name = "Invariant Violation", s;
            }
        }

        function t() {
            return e;
        }
        e.isRequired = e;
        var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: xe,
            resetWarningCache: be
        };
        return n.PropTypes = n, n;
    }();
    var Ne = Ee.exports;

    function Oe(e, t) {
        return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
    }
    var Re = !1,
        Ie = _react.default.createContext(null),
        De = function(e) {
            return e.scrollTop;
        },
        Pe = "unmounted",
        Me = "exited",
        Te = "entering",
        Le = "entered",
        ke = "exiting",
        je = function(e) {
            function t(t, n) {
                var r;
                r = e.call(this, t, n) || this;
                var o,
                    i = n && !n.isMounting ? t.enter : t.appear;
                return r.appearStatus = null, t.in ? i ? (o = Me, r.appearStatus = Te) : o = Le : o = t.unmountOnExit || t.mountOnEnter ? Pe : Me, r.state = {
                    status: o
                }, r.nextCallback = null, r;
            }
            Ce(t, e), t.getDerivedStateFromProps = function(e, t) {
                return e.in && t.status === Pe ? {
                    status: Me
                } : null;
            };
            var n = t.prototype;
            return n.componentDidMount = function() {
                this.updateStatus(!0, this.appearStatus);
            }, n.componentDidUpdate = function(e) {
                var t = null;
                if (e !== this.props) {
                    var n = this.state.status;
                    this.props.in ? n !== Te && n !== Le && (t = Te) : n !== Te && n !== Le || (t = ke);
                }
                this.updateStatus(!1, t);
            }, n.componentWillUnmount = function() {
                this.cancelNextCallback();
            }, n.getTimeouts = function() {
                var e,
                    t,
                    n,
                    r = this.props.timeout;
                return e = t = n = r, null != r && "number" != typeof r && (e = r.exit, t = r.enter, n = void 0 !== r.appear ? r.appear : t), {
                    exit: e,
                    enter: t,
                    appear: n
                };
            }, n.updateStatus = function(e, t) {
                if (void 0 === e && (e = !1), null !== t) {
                    if (this.cancelNextCallback(), t === Te) {
                        if (this.props.unmountOnExit || this.props.mountOnEnter) {
                            var n = this.props.nodeRef ? this.props.nodeRef.current : _reactDom.default.findDOMNode(this);
                            n && De(n);
                        }
                        this.performEnter(e);
                    } else this.performExit();
                } else this.props.unmountOnExit && this.state.status === Me && this.setState({
                    status: Pe
                });
            }, n.performEnter = function(e) {
                var t = this,
                    n = this.props.enter,
                    r = this.context ? this.context.isMounting : e,
                    o = this.props.nodeRef ? [r] : [_reactDom.default.findDOMNode(this), r],
                    i = o[0],
                    s = o[1],
                    a = this.getTimeouts(),
                    l = r ? a.appear : a.enter;
                !e && !n || Re ? this.safeSetState({
                    status: Le
                }, function() {
                    t.props.onEntered(i);
                }) : (this.props.onEnter(i, s), this.safeSetState({
                    status: Te
                }, function() {
                    t.props.onEntering(i, s), t.onTransitionEnd(l, function() {
                        t.safeSetState({
                            status: Le
                        }, function() {
                            t.props.onEntered(i, s);
                        });
                    });
                }));
            }, n.performExit = function() {
                var e = this,
                    t = this.props.exit,
                    n = this.getTimeouts(),
                    r = this.props.nodeRef ? void 0 : _reactDom.default.findDOMNode(this);
                t && !Re ? (this.props.onExit(r), this.safeSetState({
                    status: ke
                }, function() {
                    e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
                        e.safeSetState({
                            status: Me
                        }, function() {
                            e.props.onExited(r);
                        });
                    });
                })) : this.safeSetState({
                    status: Me
                }, function() {
                    e.props.onExited(r);
                });
            }, n.cancelNextCallback = function() {
                null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null);
            }, n.safeSetState = function(e, t) {
                t = this.setNextCallback(t), this.setState(e, t);
            }, n.setNextCallback = function(e) {
                var t = this,
                    n = !0;
                return this.nextCallback = function(r) {
                    n && (n = !1, t.nextCallback = null, e(r));
                }, this.nextCallback.cancel = function() {
                    n = !1;
                }, this.nextCallback;
            }, n.onTransitionEnd = function(e, t) {
                this.setNextCallback(t);
                var n = this.props.nodeRef ? this.props.nodeRef.current : _reactDom.default.findDOMNode(this),
                    r = null == e && !this.props.addEndListener;
                if (n && !r) {
                    if (this.props.addEndListener) {
                        var o = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                            i = o[0],
                            s = o[1];
                        this.props.addEndListener(i, s);
                    }
                    null != e && setTimeout(this.nextCallback, e);
                } else setTimeout(this.nextCallback, 0);
            }, n.render = function() {
                var e = this.state.status;
                if (e === Pe) return null;
                var t = this.props,
                    n = t.children;
                t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef;
                var r = ye(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
                return _react.default.createElement(Ie.Provider, {
                    value: null
                }, "function" == typeof n ? n(e, r) : _react.default.cloneElement(_react.default.Children.only(n), r));
            }, t;
        }(_react.default.Component);

    function Ae() {}
    je.contextType = Ie, je.propTypes = {}, je.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: Ae,
        onEntering: Ae,
        onEntered: Ae,
        onExit: Ae,
        onExiting: Ae,
        onExited: Ae
    }, je.UNMOUNTED = Pe, je.EXITED = Me, je.ENTERING = Te, je.ENTERED = Le, je.EXITING = ke;
    var We = function(e, t) {
            return e && t && t.split(" ").forEach(function(t) {
                return r = t, void((n = e).classList ? n.classList.add(r) : function(e, t) {
                    return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ");
                }(n, r) || ("string" == typeof n.className ? n.className = n.className + " " + r : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + r)));
                var n, r;
            });
        },
        Fe = function(e, t) {
            return e && t && t.split(" ").forEach(function(t) {
                return r = t, void((n = e).classList ? n.classList.remove(r) : "string" == typeof n.className ? n.className = Oe(n.className, r) : n.setAttribute("class", Oe(n.className && n.className.baseVal || "", r)));
                var n, r;
            });
        },
        Ue = function(e) {
            function t() {
                for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                return (t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
                    appear: {},
                    enter: {},
                    exit: {}
                }, t.onEnter = function(e, n) {
                    var r = t.resolveArguments(e, n),
                        o = r[0],
                        i = r[1];
                    t.removeClasses(o, "exit"), t.addClass(o, i ? "appear" : "enter", "base"), t.props.onEnter && t.props.onEnter(e, n);
                }, t.onEntering = function(e, n) {
                    var r = t.resolveArguments(e, n),
                        o = r[0],
                        i = r[1] ? "appear" : "enter";
                    t.addClass(o, i, "active"), t.props.onEntering && t.props.onEntering(e, n);
                }, t.onEntered = function(e, n) {
                    var r = t.resolveArguments(e, n),
                        o = r[0],
                        i = r[1] ? "appear" : "enter";
                    t.removeClasses(o, i), t.addClass(o, i, "done"), t.props.onEntered && t.props.onEntered(e, n);
                }, t.onExit = function(e) {
                    var n = t.resolveArguments(e)[0];
                    t.removeClasses(n, "appear"), t.removeClasses(n, "enter"), t.addClass(n, "exit", "base"), t.props.onExit && t.props.onExit(e);
                }, t.onExiting = function(e) {
                    var n = t.resolveArguments(e)[0];
                    t.addClass(n, "exit", "active"), t.props.onExiting && t.props.onExiting(e);
                }, t.onExited = function(e) {
                    var n = t.resolveArguments(e)[0];
                    t.removeClasses(n, "exit"), t.addClass(n, "exit", "done"), t.props.onExited && t.props.onExited(e);
                }, t.resolveArguments = function(e, n) {
                    return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
                }, t.getClassNames = function(e) {
                    var n = t.props.classNames,
                        r = "string" == typeof n,
                        o = r ? "" + (r && n ? n + "-" : "") + e : n[e];
                    return {
                        baseClassName: o,
                        activeClassName: r ? o + "-active" : n[e + "Active"],
                        doneClassName: r ? o + "-done" : n[e + "Done"]
                    };
                }, t;
            }
            Ce(t, e);
            var n = t.prototype;
            return n.addClass = function(e, t, n) {
                var r = this.getClassNames(t)[n + "ClassName"],
                    o = this.getClassNames("enter").doneClassName;
                "appear" === t && "done" === n && o && (r += " " + o), "active" === n && e && De(e), r && (this.appliedClasses[t][n] = r, We(e, r));
            }, n.removeClasses = function(e, t) {
                var n = this.appliedClasses[t],
                    r = n.base,
                    o = n.active,
                    i = n.done;
                this.appliedClasses[t] = {}, r && Fe(e, r), o && Fe(e, o), i && Fe(e, i);
            }, n.render = function() {
                var e = this.props;
                e.classNames;
                var t = ye(e, ["classNames"]);
                return _react.default.createElement(je, Se({}, t, {
                    onEnter: this.onEnter,
                    onEntered: this.onEntered,
                    onEntering: this.onEntering,
                    onExit: this.onExit,
                    onExiting: this.onExiting,
                    onExited: this.onExited
                }));
            }, t;
        }(_react.default.Component);

    function _e(e, t) {
        var n = Object.create(null);
        return e && _react.Children.map(e, function(e) {
            return e;
        }).forEach(function(e) {
            n[e.key] = function(e) {
                return t && (0, _react.isValidElement)(e) ? t(e) : e;
            }(e);
        }), n;
    }

    function He(e, t, n) {
        return null != n[t] ? n[t] : e.props[t];
    }

    function Ve(e, t, n) {
        var r = _e(e.children),
            o = function(e, t) {
                function n(n) {
                    return n in t ? t[n] : e[n];
                }
                e = e || {}, t = t || {};
                var r,
                    o = Object.create(null),
                    i = [];
                for (var s in e) s in t ? i.length && (o[s] = i, i = []) : i.push(s);
                var a = {};
                for (var l in t) {
                    if (o[l])
                        for (r = 0; r < o[l].length; r++) {
                            var c = o[l][r];
                            a[o[l][r]] = n(c);
                        }
                    a[l] = n(l);
                }
                for (r = 0; r < i.length; r++) a[i[r]] = n(i[r]);
                return a;
            }(t, r);
        return Object.keys(o).forEach(function(i) {
            var s = o[i];
            if ((0, _react.isValidElement)(s)) {
                var a = i in t,
                    l = i in r,
                    c = t[i],
                    d = (0, _react.isValidElement)(c) && !c.props.in;
                !l || a && !d ? l || !a || d ? l && a && (0, _react.isValidElement)(c) && (o[i] = (0, _react.cloneElement)(s, {
                    onExited: n.bind(null, s),
                    in: c.props.in,
                    exit: He(s, "exit", e),
                    enter: He(s, "enter", e)
                })) : o[i] = (0, _react.cloneElement)(s, {
                    in: !1
                }) : o[i] = (0, _react.cloneElement)(s, {
                    onExited: n.bind(null, s),
                    in: !0,
                    exit: He(s, "exit", e),
                    enter: He(s, "enter", e)
                });
            }
        }), o;
    }
    Ue.defaultProps = {
        classNames: ""
    }, Ue.propTypes = {};
    var ze = Object.values || function(e) {
            return Object.keys(e).map(function(t) {
                return e[t];
            });
        },
        Be = function(e) {
            function t(t, n) {
                var r,
                    o = (r = e.call(this, t, n) || this).handleExited.bind(function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    }(r));
                return r.state = {
                    contextValue: {
                        isMounting: !0
                    },
                    handleExited: o,
                    firstRender: !0
                }, r;
            }
            Ce(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                this.mounted = !0, this.setState({
                    contextValue: {
                        isMounting: !1
                    }
                });
            }, n.componentWillUnmount = function() {
                this.mounted = !1;
            }, t.getDerivedStateFromProps = function(e, t) {
                var n,
                    r,
                    o = t.children,
                    i = t.handleExited;
                return {
                    children: t.firstRender ? (n = e, r = i, _e(n.children, function(e) {
                        return (0, _react.cloneElement)(e, {
                            onExited: r.bind(null, e),
                            in: !0,
                            appear: He(e, "appear", n),
                            enter: He(e, "enter", n),
                            exit: He(e, "exit", n)
                        });
                    })) : Ve(e, o, i),
                    firstRender: !1
                };
            }, n.handleExited = function(e, t) {
                var n = _e(this.props.children);
                e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState(function(t) {
                    var n = Se({}, t.children);
                    return delete n[e.key], {
                        children: n
                    };
                }));
            }, n.render = function() {
                var e = this.props,
                    t = e.component,
                    n = e.childFactory,
                    r = ye(e, ["component", "childFactory"]),
                    o = this.state.contextValue,
                    i = ze(this.state.children).map(n);
                return delete r.appear, delete r.enter, delete r.exit, null === t ? _react.default.createElement(Ie.Provider, {
                    value: o
                }, i) : _react.default.createElement(Ie.Provider, {
                    value: o
                }, _react.default.createElement(t, r, i));
            }, t;
        }(_react.default.Component);
    Be.propTypes = {}, Be.defaultProps = {
        component: "div",
        childFactory: function(e) {
            return e;
        }
    };
    let $e = class extends O.Component {
        getAnimatedItem() {
            return Ge;
        }
        render() {
            const e = this.getAnimatedItem(),
                t = !!this.props.shouldSuspendAnimations && this.props.shouldSuspendAnimations(),
                n = {
                    appear: `${this.props.transitionName}-appear`,
                    appearActive: `${this.props.transitionName}-appear-active`,
                    appearDone: `${this.props.transitionName}-appear-done`,
                    enter: `${this.props.transitionName}-enter`,
                    enterActive: `${this.props.transitionName}-enter-active`,
                    enterDone: `${this.props.transitionName}-enter-done`,
                    exit: `${this.props.transitionName}-leave`,
                    exitActive: `${this.props.transitionName}-leave-active`,
                    exitDone: `${this.props.transitionName}-leave-done`
                },
                r = O.Children.map(this.props.children, r => ge.jsx(e, {
                    enter: !t,
                    exit: !t,
                    classNames: n,
                    onEnter: this.props.onEnter,
                    onEntering: this.props.onEnterStarted,
                    onExit: this.props.onLeave,
                    onExiting: this.props.onLeaveStarted,
                    timeout: {
                        enter: 17,
                        exit: 17
                    },
                    children: r
                }, r.key));
            return ge.jsx(Be, {
                component: this.props.component,
                className: this.props.className,
                children: r
            });
        }
    };
    class Ge extends O.Component {
        render() {
            return ge.jsx(Ue, Object.assign({}, this.props));
        }
    }
    const Ke = "px";
    class qe extends $e {
        getAnimatedItem() {
            return Je;
        }
    }
    class Je extends O.Component {
        constructor() {
            super(...arguments), this.previousWidth = 0, this.previousHeight = 0, this.previousStyleWidth = "", this.previousStyleHeight = "", this.storeStyleSize = e => {
                this.previousStyleWidth = e.style.width, this.previousStyleHeight = e.style.height;
            }, this.restorePreviousStyleSize = e => {
                e.style.width = this.previousStyleWidth, e.style.height = this.previousStyleHeight;
            }, this.onEnter = e => {
                if (!this.props.enter) return;
                this.props.onEnter && this.props.onEnter();
                const t = e.getBoundingClientRect();
                this.previousWidth = t.width, this.previousHeight = t.height;
            }, this.onEntering = e => {
                if (!this.props.enter) return;
                this.props.onEntering && this.props.onEntering(), this.storeStyleSize(e);
                const t = e.getBoundingClientRect();
                t.width !== this.previousWidth && (e.style.width = this.previousWidth + Ke), t.height !== this.previousHeight && (e.style.height = this.previousHeight + Ke);
            }, this.onExit = e => {
                if (!this.props.exit) return;
                this.props.onExit && this.props.onExit(), this.storeStyleSize(e);
                const t = e.getBoundingClientRect();
                e.style.width = t.width + Ke, e.style.height = t.height + Ke;
            }, this.onExiting = e => {
                this.props.exit && (this.props.onExiting && this.props.onExiting(), this.restorePreviousStyleSize(e));
            }, this.onExited = e => {
                this.props.exit && (this.props.onExited && this.props.onExited(), this.restorePreviousStyleSize(e));
            };
        }
        render() {
            return ge.jsx(Ue, Object.assign({}, this.props, {
                onEnter: this.onEnter,
                onEntering: this.onEntering,
                onExit: this.onExit,
                onExiting: this.onExiting,
                onExited: this.onExited
            }));
        }
    }
    const Qe = void 0 === document.createElement("p").style.flex ? "-webkit-flex" : "flex";
    class Xe extends O.Component {
        render() {
            const e = "100%",
                t = {
                    display: Qe
                },
                {
                    scrollDirection: n,
                    dimension: r,
                    childKey: o
                } = this.props;
            return n === se.ScrollDirection.Horizontal ? (t.width = r + "px", t.height = e) : n === se.ScrollDirection.Vertical && (t.height = r + "px", t.width = e), ge.jsx("script", {
                style: t
            }, o);
        }
    }
    const Ye = "scroll",
        Ze = "resize",
        et = "px",
        tt = 10;
    class nt extends O.Component {
        constructor(e, t) {
            var _this;
            super(e, t), _this = this, this.scrollDirection = se.ScrollDirection.Vertical, this.hasPendingPropertiesUpdate = !1, this.pendingScrollAsyncUpdateHandle = 0, this.isScrollOngoing = !1, this.isComponentInitialized = !1, this.getScrollHostInfo = () => (this.scrollHostInfo || (this.scrollHostInfo = se.getScrollHostInfo(this.itemsContainer)), this.scrollHostInfo), this.getScrollInfo = () => {
                const e = this.getScrollHostInfo().scrollHost,
                    t = se.getScrollInfo(e),
                    n = {
                        scrollHost: e,
                        scrollOffset: t ? this.getDimension(t.scroll.y, t.scroll.x) : 0,
                        viewportSize: t ? this.getDimension(t.viewport.height, t.viewport.width) : 0,
                        viewportLowerBound: 0,
                        viewportUpperBound: 0
                    };
                if (e instanceof Window) n.viewportLowerBound = t ? this.getDimension(t.viewport.y, t.viewport.x) : 0, n.viewportUpperBound = t ? this.getDimension(t.viewport.height, t.viewport.width) : 0;
                else if (e instanceof HTMLElement) {
                    const t = e.getBoundingClientRect();
                    n.viewportLowerBound = this.getDimension(t.top, t.left), n.viewportUpperBound = this.getDimension(t.bottom, t.right);
                }
                return n;
            }, this.addScrollHandler = () => {
                if (this.isDisposed) return;
                this.scrollHostInfo = null;
                const e = this.getScrollHostInfo();
                e.scrollHost.addEventListener(Ye, this.onScroll, {
                    capture: !0
                }), window.addEventListener(Ze, this.onScroll), this.scrollDirection = e.scrollDirection;
            }, this.removeScrollHandler = () => {
                this.getScrollHostInfo().scrollHost.removeEventListener(Ye, this.onScroll), window.removeEventListener(Ze, this.onScroll);
            }, this.onWindowScrollOrResize = () => {
                this.removeWindowScrollHandlers(), this.addScrollHandler();
            }, this.removeWindowScrollHandlers = () => {
                window.removeEventListener(Ye, this.onWindowScrollOrResize, !0), window.removeEventListener(Ze, this.onWindowScrollOrResize, !0);
            }, this.setPadHeight = (e, t) => {
                const n = null == e ? void 0 : e.item(0),
                    r = null == e ? void 0 : e.item(t - 1);
                n && (n.style.height = this.state.scrollOffset + et), r && (r.style.height = this.getRemainingSize(this.state.firstRenderedItemIndex, this.state.lastRenderedItemIndex) + et);
            }, this.renderOffScreenBuffer = () => {
                var e;
                if (this.scrollDirection !== se.ScrollDirection.Vertical) return void(this.state.offScreenItemsCount > 0 && console.warn("Virtualization attempting offscreen items with horizontal stacking..."));
                this.itemsContainer && (this.itemsContainer.style.position = "relative");
                const t = null === (e = this.itemsContainer) || void 0 === e ? void 0 : e.children,
                    n = this.itemsContainer ? this.itemsContainer.childElementCount : 0;
                this.setPadHeight(t, n);
                for (let e = 1; e < this.state.offScreenItemsCount + 1; e++) {
                    const n = null == t ? void 0 : t.item(e);
                    void 0 !== (null == n ? void 0 : n.style) && (n.style.width || (n.style.width = "100%"), n.style.position = "absolute", n.style.top = "-10000px");
                }
                for (let e = this.state.offScreenItemsCount + 1; e < n - 1; e++) {
                    const n = null == t ? void 0 : t.item(e);
                    void 0 !== (null == n ? void 0 : n.style) && (n.style.position = "", n.style.top = "", n.style.width = "");
                }
            }, this.onScroll = e => {
                this.pendingScrollAsyncUpdateHandle || (this.pendingScrollAsyncUpdateHandle = requestAnimationFrame(() => {
                    if (!this.isDisposed) {
                        try {
                            const t = this.getCurrentScrollViewerState(this.props.length, this.state, this.props, this.itemsContainer, e.type !== Ze);
                            t !== this.state && (this.isScrollOngoing = !0, this.setState(t, () => this.isScrollOngoing = !1));
                        } finally {
                            this.pendingScrollAsyncUpdateHandle = 0;
                        }
                        this.props.scrollChanged && this.props.scrollChanged();
                    }
                }));
            }, this.getRemainingSize = (e, t) => {
                const n = Math.min(this.props.length, t - e + 1);
                let r = 0;
                const o = Math.max(tt, this.state.averageItemSize);
                if (t < this.props.length - 1) {
                    r = o * this.props.length - (o * (n - this.state.offScreenItemsCount) + this.state.scrollOffset);
                }
                return r;
            }, this.renderList = (e, t) => {
                const n = Math.min(this.props.length, t - e + 1),
                    r = this.state.scrollOffset,
                    o = this.getRemainingSize(e, t),
                    i = this.props.renderItems(e, n),
                    s = Math.max(tt, this.state.averageItemSize),
                    a = [];
                return this.scrollDirection !== se.ScrollDirection.None && a.push(this.renderSpacer("first-spacer", r, s, e => this.firstSpacer = e)), i && i.length > 0 ? i.forEach(e => a.push(e)) : a.push(i), this.scrollDirection !== se.ScrollDirection.None && a.push(this.renderSpacer("last-spacer", o, s, e => this.lastSpacer = e)), this.props.renderWrapper(a);
            }, this.renderSpacer = (e, t, n, r) => ge.jsx(Xe, {
                childKey: e,
                dimension: t,
                averageItemSize: n,
                scrollDirection: this.scrollDirection,
                ref: e => r(B.findDOMNode(e))
            }, e), this.getListItems = e => {
                const t = [],
                    n = e.children;
                if (n.length > 0) {
                    const r = this.isSpacer(n[0]) ? 1 : 0,
                        o = this.isSpacer(n[n.length - 1]) ? n.length - 2 : n.length - 1;
                    for (let n = r; n <= o; n++) {
                        const r = e.children[n];
                        t.push(r);
                    }
                }
                return t;
            }, this.isSpacer = e => e === this.firstSpacer || e === this.lastSpacer, this.getItemBounds = e => {
                const t = e.getBoundingClientRect(),
                    n = {
                        width: t.width,
                        height: t.height,
                        left: t.left,
                        right: t.right,
                        top: t.top,
                        bottom: t.bottom
                    };
                return this.scrollDirection === se.ScrollDirection.Horizontal ? n.width < tt && (n.width = tt, n.right = n.left + n.width) : this.scrollDirection === se.ScrollDirection.Vertical && n.height < tt && (n.height = tt, n.bottom = n.top + n.height), n;
            }, this.areElementsStacked = e => {
                if (e.length < 2) return !1;
                const t = e[e.length - 2],
                    n = e[e.length - 1],
                    r = t.getBoundingClientRect(),
                    o = n.getBoundingClientRect();
                return Math.floor(this.getDimension(o.top, 0)) >= Math.floor(this.getDimension(r.bottom, 1));
            }, this.calculateItemsSize = function(e) {
                let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e.length - 1;
                let r = 0;
                const o = new Array(n - t + 1);
                for (let i = t; i <= n; i++) {
                    const n = _this.getItemBounds(e[i]),
                        s = _this.getDimension(n.height, n.width);
                    r += s, o[i - t] = s;
                }
                return {
                    total: r,
                    sizes: o
                };
            }, this.countItemsAndSizeThatFitIn = function(e, t) {
                let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
                let o = 0,
                    i = 0;
                const s = r ? t => e.length - 1 - t : e => e;
                for (; o < e.length; o++) {
                    const r = e[s(o)];
                    if (i + r > t) {
                        n && (o++, i += r);
                        break;
                    }
                    i += r;
                }
                return {
                    size: i,
                    count: o
                };
            }, this.getCurrentScrollViewerState = function(e, t, n) {
                let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _this.itemsContainer;
                let o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
                var i, s;
                const a = _this.getScrollInfo();
                let l = n.viewportSafetyMarginBefore || 7500;
                l = Math.min(a.scrollOffset, l);
                const c = n.viewportSafetyMarginAfter || 7500;
                let d = !1;
                a.scrollOffset < a.viewportSize / 4 && (t.firstRenderedItemIndex > 0 || t.offScreenItemsCount > 0) && (d = !0);
                const u = r ? _this.getListItems(r) : [];
                if (u.length >= 2 && !_this.areElementsStacked(u) && (_this.scrollDirection = se.ScrollDirection.None), _this.scrollDirection !== se.ScrollDirection.Vertical || u.length < 2) return {
                    firstRenderedItemIndex: 0,
                    lastRenderedItemIndex: Math.max(1, n.length - 1),
                    averageItemSize: 0,
                    scrollOffset: 0,
                    offScreenItemsCount: 0,
                    effectiveScrollOffset: a.scrollOffset
                };
                const p = null === (i = null == r ? void 0 : r.lastElementChild) || void 0 === i ? void 0 : i.getBoundingClientRect();
                if ((p ? _this.getDimension(p.bottom, p.right) : 0) < -100) return t;
                const h = _this.calculateItemsSize(u);
                let m = t.offScreenItemsCount;
                const v = h.sizes.slice(m),
                    f = v.reduce((e, t) => e + t);
                let g = f / (1 * v.length);
                0 !== t.averageItemSize && (g = .8 * t.averageItemSize + .2 * g);
                const S = Math.ceil(a.viewportSize / g),
                    y = S,
                    w = Math.ceil(l / g),
                    C = Math.ceil(c / g),
                    E = Math.min(e, S + w + C + m);
                let b = t.scrollOffset,
                    x = t.firstRenderedItemIndex;
                const N = a.viewportLowerBound - l,
                    O = null === (s = null == r ? void 0 : r.firstElementChild) || void 0 === s ? void 0 : s.getBoundingClientRect(),
                    R = O ? _this.getDimension(O.bottom, O.right) : 0;
                if (!d && Math.abs(R - N) <= f) {
                    if (R < N) {
                        const e = _this.countItemsAndSizeThatFitIn(v, Math.abs(N - R));
                        if (e.count > 0 && (b += e.size, m += e.count, m > y)) {
                            x += m - y, m = y;
                        }
                    } else if (R > N) {
                        let e = Math.abs(R - N);
                        const t = h.sizes.slice(0, m),
                            n = _this.countItemsAndSizeThatFitIn(t, e, !0, !0);
                        if (n.count > 0 && (b = Math.max(0, b - n.size), m -= n.count, e -= n.size), e > 0) {
                            if (0 !== m) throw "offScreenItemsCount should be 0";
                            const t = Math.min(x, Math.ceil(e / g));
                            x -= t, b -= t * g;
                        }
                        if (m < y) {
                            const e = Math.min(x, y - m);
                            x -= e, m += e;
                        }
                    }
                } else {
                    let t = O ? _this.getDimension(O.top, O.left) : 0;
                    t = t < a.viewportLowerBound ? Math.abs(t - a.viewportLowerBound) : 0, x = Math.max(0, Math.floor(t / g) - 1), m = 0, x > 0 && (x = Math.max(0, x - Math.ceil(l / g))), x = Math.max(0, Math.min(x, e - 1 - E)), b = x * g;
                }
                0 === x && 0 === m && (b = 0);
                const I = Math.max(Math.ceil(b / g), 0),
                    D = Math.min(e, S + Math.min(w, I) + C + m);
                return {
                    firstRenderedItemIndex: x,
                    lastRenderedItemIndex: Math.min(e - 1, x + D),
                    averageItemSize: g,
                    scrollOffset: b,
                    offScreenItemsCount: m,
                    effectiveScrollOffset: a.scrollOffset
                };
            }, this.scrollToIndex = e => {
                this.internalSetScrollOffset(() => {
                    const t = this.getScrollInfo(),
                        n = t.scrollHost;
                    let r = this.state.averageItemSize * e;
                    const o = t.scrollOffset;
                    let i = !1;
                    if (r < o) i = !0;
                    else {
                        const e = o + t.viewportSize - this.state.averageItemSize;
                        r > e && (r -= e - o, i = !0);
                    }
                    if (!i) return;
                    const s = this.getDimension(0, r),
                        a = this.getDimension(r, 0);
                    se.setScrollOffset(n, s, a, !1);
                });
            }, this.scrollToOffset = (e, t) => {
                this.internalSetScrollOffset(() => {
                    const n = this.getScrollInfo().scrollHost,
                        r = this.getDimension(0, e),
                        o = this.getDimension(t, 0);
                    se.setScrollOffset(n, r, o);
                });
            }, this.setScrollOffset = this.scrollToOffset, this.internalSetScrollOffset = e => {
                this.isInitialized ? e() : this.setPendingScroll = e;
            }, this.state = {
                firstRenderedItemIndex: 0,
                lastRenderedItemIndex: 1,
                averageItemSize: 0,
                scrollOffset: 0,
                offScreenItemsCount: 0,
                effectiveScrollOffset: Number.MIN_VALUE
            }, this.scrollHostInfo = null, this.itemsContainer = null, this.setPendingScroll = null, this.firstSpacer = null, this.lastSpacer = null;
        }
        componentDidMount() {
            this.itemsContainer = B.findDOMNode(this), requestAnimationFrame(() => {
                this.isDisposed || (window.addEventListener(Ye, this.onWindowScrollOrResize, !0), window.addEventListener(Ze, this.onWindowScrollOrResize, !0));
            }), this.setState(this.getCurrentScrollViewerState(this.props.length, this.state, this.props));
        }
        componentWillUnmount() {
            this.removeWindowScrollHandlers(), this.removeScrollHandler(), this.scrollHostInfo = null, this.itemsContainer = null;
        }
        UNSAFE_componentWillReceiveProps(e) {
            this.setState(this.getCurrentScrollViewerState(e.length, this.state, this.props)), this.hasPendingPropertiesUpdate = !0;
        }
        setState(e, t) {
            super.setState(e, () => {
                this.onDidUpdate(), t && t();
            });
        }
        onDidUpdate() {
            this.itemsContainer = B.findDOMNode(this), this.renderOffScreenBuffer(), this.setPendingScroll && requestAnimationFrame(() => {
                !this.isDisposed && this.setPendingScroll && (this.setPendingScroll(), this.setPendingScroll = null);
            }), this.isComponentInitialized || (this.isComponentInitialized = !0, this.props.initializationCompleted && this.props.initializationCompleted()), this.hasPendingPropertiesUpdate && (this.hasPendingPropertiesUpdate = !1, this.setState(this.getCurrentScrollViewerState(this.props.length, this.state, this.props)));
        }
        shouldComponentUpdate(e, t) {
            return t.firstRenderedItemIndex !== this.state.firstRenderedItemIndex || t.lastRenderedItemIndex !== this.state.lastRenderedItemIndex || t.scrollOffset !== this.state.scrollOffset || e !== this.props;
        }
        render() {
            return this.renderList(this.state.firstRenderedItemIndex, this.state.lastRenderedItemIndex);
        }
        getDimension(e, t) {
            return this.scrollDirection === se.ScrollDirection.Vertical ? e : t;
        }
        get isScrolling() {
            return this.isScrollOngoing;
        }
        get isInitialized() {
            return this.isComponentInitialized;
        }
        get isDisposed() {
            return !this.itemsContainer;
        }
    }
    _exports.VirtualizedScrollViewer = nt;
    var rt = _exports.AnimatedGroup = Object.freeze({
        __proto__: null,
        AnimatedGroup: class extends qe {
            getDefaultTransitionName() {
                return "os-animated";
            }
        }
    });

    function ot(e, t, n, r) {
        return new(n || (n = Promise))(function(o, i) {
            function s(e) {
                try {
                    l(r.next(e));
                } catch (e) {
                    i(e);
                }
            }

            function a(e) {
                try {
                    l(r.throw(e));
                } catch (e) {
                    i(e);
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                    e(t);
                })).then(s, a);
            }
            l((r = r.apply(e, t || [])).next());
        });
    }

    function it(e, t, n, r) {
        if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
    }

    function st(e, t, n, r, o) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === r ? o.call(e, n) : o ? o.value = n : t.set(e, n), n;
    }
    "function" == typeof SuppressedError && SuppressedError;
    const at = "CSSHelper";
    let lt = 0;

    function ct(e, t) {
        if (0 === e.length) return {
            loadStylesPromise: Promise.resolve(),
            triggerRemoveStyles: () => {}
        };
        const n = document.head || document.querySelector("head"),
            r = [].slice.call(document.querySelectorAll("link[data-os]") || []).reverse(),
            [o, i, s] = function(e, t, n) {
                const r = [],
                    o = [],
                    i = [];
                let s,
                    a = 0;
                t.reverse();
                for (const l of t) {
                    const [t, c] = dt(e, l, a);
                    if (t) {
                        s = t, o.push(t), a = c + 1;
                        continue;
                    }
                    const d = vt(l, r, n);
                    i.push({
                        beforeElement: s,
                        element: d
                    }), s = d;
                }
                return [i, o, Promise.all(r)];
            }(r, e, t);
        ut("Adding", o);
        for (const {
                beforeElement: e,
                element: t
            } of o) pt("Adding", t.id), e ? n.insertBefore(t, e) : n.appendChild(t);
        lt += 1;
        const a = function(e, t, n) {
            return () => {
                if (lt === e) {
                    ut("Retaining", t);
                    for (const e of t) pt("Retaining", e.id);
                    for (const e of n) e.parentNode && -1 === t.indexOf(e) && (pt("Removing", e.id), e.parentNode.removeChild(e));
                }
            };
        }(lt, i, r);
        return {
            loadStylesPromise: s,
            triggerRemoveStyles: a
        };
    }

    function dt(e, t, n) {
        for (let r = n; r < e.length; r++) {
            const n = e[r];
            if (n.id === t) return [n, r];
        }
        return [void 0, n];
    }

    function ut(n, r) {
        const o = _runtimeCoreJs.UrlUtils.removeQueryParametersFromUrls(document.baseURI);
        _runtimeCoreJs.Logger.debug(at, `${n} ${r.length} stylesheets : document '${o}':`);
    }

    function pt(n, r) {
        const o = _runtimeCoreJs.UrlUtils.removeQueryParametersFromUrls(document.baseURI);
        _runtimeCoreJs.Logger.debug(at, `${n} stylesheet '${r}' : document '${o}'`);
    }
    let ht = !1;

    function mt(t) {
        _runtimeCoreJs.Logger.debug(at, `Setting ignore load errors to ${t}`), ht = t;
    }

    function vt(t, n, r) {
        _runtimeCoreJs.Logger.debug(at, `Loading stylesheet '${t}'`);
        const o = document.createElement("link");
        return o.type = "text/css", o.rel = "stylesheet", o.id = t, o.href = t, o.setAttribute("data-os", "true"), n.push(new Promise(n => {
            o.onerror = o.onabort = i => {
                var s;
                ht ? _runtimeCoreJs.Logger.debug(at, `Ignored error while loading stylesheet '${t}'`) : r("Error loading stylesheet: " + t, "OS-CLRT-60500"), null === (s = o.parentNode) || void 0 === s || s.removeChild(o), n(i);
            }, o.onload = n;
        })), o;
    }
    let ft = class extends O.Component {
        constructor(e) {
            super(e), this.state = {
                hasError: !1
            };
        }
        static getDerivedStateFromError(e) {
            return {
                hasError: !0
            };
        }
        componentDidCatch(e, t) {
            const {
                onError: n
            } = this.props;
            n && n(e);
        }
        render() {
            const {
                hasError: e
            } = this.state;
            return e ? null : this.props.children;
        }
    };
    var gt;
    ! function(e) {
        e.a = "a", e.button = "button", e.div = "div", e.form = "form", e.i = "i", e.img = "img", e.input = "input", e.label = "label", e.span = "span", e.textarea = "textarea";
    }(gt || (gt = {}));
    var St = _exports.HtmlTags = Object.freeze({
        __proto__: null,
        get HtmlTags() {
            return gt;
        }
    });

    function yt(e) {
        const t = {};
        if (!e) return t;
        const n = e.scrollLeft,
            r = e.scrollTop;
        return n && (t.scrollLeft = n), r && (t.scrollTop = r), t;
    }

    function wt(e, t) {
        e && (t.scrollLeft && (e.scrollLeft = t.scrollLeft), t.scrollTop && (e.scrollTop = t.scrollTop));
    }
    var Ct,
        Et = _exports.ScrollExtensions = Object.freeze({
            __proto__: null,
            getScrollHostInfo: function(e, t) {
                return se.getScrollHostInfo(e.parentElement, t);
            },
            getScrollInfo: function(e) {
                return se.getScrollInfo(e);
            },
            loadScrollProperties: wt,
            serializeScrollProperties: yt,
            setScrollOffset: function(e, t, n) {
                se.setScrollOffset(e, t, n);
            }
        });

    function bt(e, t, n) {
        var r, o, i;
        return t && n && (t.setAttribute("code.function", n.codeFunction), t.setAttribute("outsystems.function.key", null !== (r = n.functionKey) && void 0 !== r ? r : ""), t.setAttribute("outsystems.function.owner.name", null !== (o = n.functionOwnerName) && void 0 !== o ? o : ""), t.setAttribute("outsystems.function.owner.key", null !== (i = n.functionOwnerKey) && void 0 !== i ? i : ""), t.setAttribute("outsystems.function.type", e), n.screen && t.setAttribute("outsystems.runtime.screen", n.screen)), t;
    }! function(e) {
        e[e.Internal = 0] = "Internal", e[e.External = 1] = "External", e[e.Client = 2] = "Client";
    }(Ct || (Ct = {}));
    var xt = Ct;
    const Nt = "_screen";
    class Ot extends O.Component {
        constructor() {
            super(...arguments), this.originalNavigationKey = "";
        }
        componentDidMount() {
            var e, t;
            this.injectId();
            const r = this.getScreenStateCache();
            if (this.originalNavigationKey = r.navigationKey, r.shouldLoad) {
                const o = null === (e = r.state) || void 0 === e ? void 0 : e.components[null !== (t = this.getComponentKey()) && void 0 !== t ? t : ""];
                o && !_runtimeCoreJs.ObjectExtensions.isEmptyObject(o.customProperties) && this.loadCustomStateProperties(o.customProperties);
            }
        }
        componentDidUpdate() {
            this.injectId();
        }
        componentWillUnmount() {
            var e;
            if (this.getScreenStateCache().shouldSave) {
                const t = this.serializeState(),
                    o = this.serializeCustomStateProperties();
                _runtimeCoreJs.ObjectExtensions.isEmptyObject(t) && _runtimeCoreJs.ObjectExtensions.isEmptyObject(o) || _runtimeCoreJs.ScreenStateCache.ScreenStateCache.save(this.originalNavigationKey, null !== (e = this.getComponentKey()) && void 0 !== e ? e : "", t, o);
            }
        }
        serializeState() {
            return this.state;
        }
        serializeCustomStateProperties() {
            return null;
        }
        loadCustomStateProperties(e) {}
        getComponentKey() {
            var e, t;
            const n = this.idServiceProperties,
                r = n.service;
            return null == r ? void 0 : r.getId(null !== (t = null !== (e = n.name) && void 0 !== e ? e : n.uuid) && void 0 !== t ? t : "");
        }
        get idServiceProperties() {
            return this.props._idProps;
        }
        injectId() {
            const e = this.getId();
            if ("" !== e) {
                const t = this.getHTMLNode();
                t && !t.hasAttribute("id") && t.setAttribute("id", e);
            }
        }
        getId() {
            var e, t;
            const n = this.idServiceProperties,
                r = n.service;
            return null !== (t = null == r ? void 0 : r.getId(null !== (e = this.getName(n)) && void 0 !== e ? e : "")) && void 0 !== t ? t : "";
        }
        getName(e) {
            return e.name;
        }
        getScreenStateCache() {
            const e = this.context;
            return e.getScreenStateCache ? e.getScreenStateCache() : {
                navigationKey: "",
                shouldLoad: !1,
                shouldSave: !1,
                state: {}
            };
        }
        getSiblingWidgetId(e) {
            var t;
            return null === (t = this.idServiceProperties.service) || void 0 === t ? void 0 : t.getId(e);
        }
        findDOMNode(e) {
            return B.findDOMNode(e);
        }
    }
    Ot.contextTypes = {
        getScreenStateCache: Ne.func
    };
    class Rt extends Ot {
        constructor(t, n) {
            super(t, n), this.onError = t => {
                const n = Rt.isLoopError(t);
                _runtimeCoreJs.Logger.error("View", t, n ? "OS-CLRT-60501" : "OS-CLRT-60500", t instanceof Error ? t : void 0, xt.External), n ? Rt.handleError(Rt.createRenderLoopError(this.viewName)) : (this.exception = t, this.controllerInstance.handleError(this.exception));
            };
            const r = {
                model: t.model
            };
            if (!r.model) {
                const e = this.controllerFactory.activeScreenController,
                    t = e ? e.modelContext : void 0,
                    n = {
                        viewName: this.viewName,
                        navigatedFromHistory: !!t && t.navigatedFromHistory,
                        viewWasRestoredFromCache: !1
                    };
                r.model = this.modelFactory.create(n);
            }
            r.model && (this.state = {
                model: r.model
            }), this.setInputs(t, !0), this.controllerInstance = t.controller ? t.controller : this.controllerFactory.create(this.state.model, this.createIdService()), this.navigationEventListenerId = _runtimeCoreJs.EventDispatcher.EventDispatcher.listenOnce(_runtimeCoreJs.EventDispatcher.EventType.NavigationStart, () => this.onNavigationStart()), this.hasScreenRendered() || (this.transitionEventStartListenerId = _runtimeCoreJs.EventDispatcher.EventDispatcher.listenOnce(_runtimeCoreJs.EventDispatcher.EventType.TransitionStart, () => this.onTransitionStart()));
        }
        static ifWidget(e, t, n, r, o) {
            let i, s;
            return e ? i = r.call(n) : s = o.call(n), O.createElement(O.Fragment, null, i ? O.createElement(O.Fragment, null, ...i) : null, s ? O.createElement(O.Fragment, null, ...s) : null);
        }
        static textWidget(e) {
            const t = [];
            if (0 !== e.length) {
                const n = e.split("\n");
                for (const e of n.slice(0, n.length - 1)) 0 !== e.length && t.push(e), t.push(O.createElement("br"));
                const r = n[n.length - 1];
                0 !== r.length && t.push(r);
            }
            return t;
        }
        static getTranslation(e, t) {
            const n = _runtimeCoreJs.Injector.resolve(_runtimeCoreJs.ServiceNames.TranslationsService);
            return n ? n.getMessage(e, t) : t;
        }
        static asPrimitiveValue(e) {
            return null == e ? e : e.valueOf();
        }
        createIdService() {
            return new _runtimeCoreJs.WidgetNaming.WidgetIdService(null);
        }
        onNavigationStart() {
            this.saveModelStateForCache();
        }
        onTransitionStart() {
            this.transitionEventStartListenerId = null, this.pendingModel && Mt(() => {
                this.pendingModel && this.onModelChanged(this.pendingModel);
            });
        }
        setInputs(e, t) {}
        subscribeModelChanges() {
            this.model.subscribeWrites(e => this.onModelChanged(e));
        }
        savePreviousModelState() {
            this.previousModelData = this.model.toImmutableData();
        }
        saveModelStateForCache() {
            this.cachedModelData = this.previousModelData;
        }
        shouldComponentUpdate(e, t, n) {
            return this.previousModelData !== t.model.toImmutableData();
        }
        componentWillUnmount() {
            this.model.clearSubscriptions(), super.componentWillUnmount(), _runtimeCoreJs.EventDispatcher.EventDispatcher.unregister(this.navigationEventListenerId), this.transitionEventStartListenerId && _runtimeCoreJs.EventDispatcher.EventDispatcher.unregister(this.transitionEventStartListenerId), this.onDestroy(), setTimeout(() => this.controller.dispose());
        }
        componentDidMount() {
            super.componentDidMount(), this.onReady();
        }
        componentDidUpdate() {
            super.componentDidUpdate(), this.onRender();
        }
        serializeState() {
            const e = this.cachedModelData || this.previousModelData;
            return this.model.sanitize(e);
        }
        UNSAFE_componentWillUpdate(e) {
            this.savePreviousModelState();
        }
        onReady() {
            this.controller.fireAfterViewReady();
        }
        onRender() {
            const e = this.controller.fireAfterViewRender();
            e && e.catch(e => {
                Rt.isLoopError(e) && Rt.handleError(Rt.createRenderLoopError(this.viewName, this.constructor.displayName));
            });
        }
        onDestroy() {
            this.controller.fireAfterViewDestroy();
        }
        hasScreenRendered() {
            const e = this.context;
            return !(null == e ? void 0 : e.hasScreenRendered) || (null == e ? void 0 : e.hasScreenRendered());
        }
        onModelChanged(e) {
            this.hasScreenRendered() ? (this.pendingModel = null, this.setState({
                model: e
            }, () => {
                this.onSetState();
            })) : this.pendingModel = e;
        }
        onSetState() {}
        get model() {
            return this.state.model;
        }
        get controller() {
            return this.controllerInstance;
        }
        get idService() {
            return this.controller.idService;
        }
        get viewName() {
            return this.constructor.displayName;
        }
        get title() {
            throw new Error("@abstract");
        }
        get modelFactory() {
            throw new Error("@abstract");
        }
        get controllerFactory() {
            throw new Error("@abstract");
        }
        static getCssDependencies() {
            return [];
        }
        static getJsDependencies() {
            return [];
        }
        static getBlocks() {
            return [];
        }
        get widgetsRecordProvider() {
            return this.model;
        }
        static isLoopError(e) {
            return /Maximum update depth exceeded/gi.test(null == e ? void 0 : e.message);
        }
        static createRenderLoopError(e, t) {
            return new Error(`Render loop avoided. This is likely due to variables of ${t ? `block '${t}' on ` : ""}screen '${e}' being changed inside its 'On Render' event handler. Avoid changing variables inside 'On Render' event handlers.`);
        }
        render() {
            return this.exception = void 0, ge.jsx(ft, {
                onError: this.onError,
                children: this.internalRender()
            });
        }
        internalRender() {
            throw new Error("@abstract");
        }
        validateWidget(e) {
            this.controller.validationService.validate(e);
        }
        static handleError(e) {
            _runtimeCoreJs.ErrorHandling.handleError(e);
        }
    }
    Rt.contextTypes = _runtimeCoreJs.ObjectExtensions.assign({
        hasScreenRendered: Ne.func,
        locale: Ne.string
    }, Ot.contextTypes);
    class It extends Rt {
        get span() {
            return this.localRootSpan || this.loadLocalRootSpan(!0), this.localRootSpan;
        }
        get disposeSpan() {
            return this.getDisposeRootSpan();
        }
        get ownerSpan() {
            var e;
            return null === (e = this.getOwnerSpan) || void 0 === e ? void 0 : e.call(this);
        }
        get ownerDisposeSpan() {
            var e;
            return null === (e = this.getOwnerDisposeSpan) || void 0 === e ? void 0 : e.call(this);
        }
        constructor(e, t, n) {
            let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Map();
            super(e, t), this.getOwnerSpan = e.getOwnerSpan, this.getOwnerDisposeSpan = e.getOwnerDisposeSpan, this.loadLocalRootSpan(n), this.childSpans = r;
        }
        endLocalSpan() {
            var e;
            null === (e = this.localRootSpan) || void 0 === e || e.end(), this.localRootSpan = void 0;
        }
        endLocalDisposeSpan() {
            var e;
            null === (e = this.localDisposeRootSpan) || void 0 === e || e.end(), this.localDisposeRootSpan = void 0;
        }
        static getSpanType() {
            let {
                disposeSpan: e = !1
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return e ? "SCREEN_DISPOSE" : "SCREEN";
        }
        loadLocalRootSpan(e) {
            this.localRootSpan || (this.localRootSpan = this.constructor.getRootSpan(e, this.ownerSpan));
        }
        getChildSpanName(e) {
            return this.constructor.getChildSpanName(e);
        }
        doWithChildSpan(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : bt;
            return this.executeInChildSpan({
                type: "main",
                childName: e,
                fn: t,
                setSpanAttributes: n
            });
        }
        doWithChildDisposeSpan(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : bt;
            return this.executeInChildSpan({
                type: "dispose",
                childName: e,
                fn: t,
                setSpanAttributes: n
            });
        }
        executeInChildSpan(_ref) {
            let {
                type: t,
                childName: n,
                fn: r,
                setSpanAttributes: o
            } = _ref;
            const i = "main" === t ? this.span : this.disposeSpan,
                s = this.constructor.getAttributes(),
                a = this.constructor.getSpanType({
                    disposeSpan: "dispose" === t
                });
            return _runtimeCoreJs.Logger.startActiveSpan(this.getChildSpanName(n), e => (e && (null == o || o(a, e, s), this.childSpans.set(n, e)), r(e)), xt.Internal, i);
        }
        getDisposeRootSpan() {
            if (this.localDisposeRootSpan) return this.localDisposeRootSpan;
            const t = this.constructor,
                n = t.getAttributes(),
                r = t.getSpanType({
                    disposeSpan: !0
                });
            if (!n || !n.codeFunction) return;
            const o = _runtimeCoreJs.Logger.startSpan(n.codeFunction, xt.External, this.ownerDisposeSpan);
            return this.localDisposeRootSpan = bt(r, o, n), this.localDisposeRootSpan;
        }
        getChildSpan(e) {
            return this.childSpans.get(e);
        }
        static getAttributes() {}
        static getChildSpanName(e) {
            var t;
            return `${null === (t = this.getAttributes()) || void 0 === t ? void 0 : t.codeFunction}__${e}`;
        }
        static getRootSpan(t, n) {
            if (this.screenSpan && !t) return this.screenSpan;
            const r = this.getAttributes();
            if (!(null == r ? void 0 : r.codeFunction)) return;
            const o = _runtimeCoreJs.Logger.startSpan(r.codeFunction, xt.External, n);
            return this.screenSpan = bt(this.getSpanType(), o, r), this.screenSpan;
        }
        render() {
            return this.doWithChildSpan("render", () => super.render());
        }
        componentDidUpdate() {
            var e;
            null === (e = this.getChildSpan("render")) || void 0 === e || e.end(), super.componentDidUpdate();
        }
        componentDidMount() {
            var e;
            null === (e = this.getChildSpan("render")) || void 0 === e || e.end(), super.componentDidMount();
        }
        componentWillUnmount() {
            super.componentWillUnmount(), this.endLocalDisposeSpan();
        }
    }
    class Dt extends It {
        static getSpanType() {
            let {
                disposeSpan: e = !1
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return e ? "BLOCK_DISPOSE" : "BLOCK";
        }
        constructor(e, t) {
            var r, o;
            if (super(e, t, !0), this.isValid = !0, this.generationNode = t.ancestorGenerationNode.addChild(), e.events)
                for (const t of Object.keys(e.events)) {
                    let n = t;
                    "_" === n.charAt(0) && (n = n.substring(1));
                    const r = e.events[t];
                    this.controller.registerClientAction(n, function() {
                        for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
                            e[_key] = arguments[_key];
                        }
                        return _runtimeCoreJs.Flow.executeSequence(() => r(...e));
                    });
                }
            const i = this.getScreenStateCache();
            if (i.shouldLoad) {
                const e = null === (r = i.state) || void 0 === r ? void 0 : r.components[null !== (o = this.getComponentKey()) && void 0 !== o ? o : ""];
                e && !_runtimeCoreJs.ObjectExtensions.isEmptyObject(e.state) && (this.state.model.fromImmutableData(e.state), this.state.model.context.viewWasRestoredFromCache = !0, this.setInputs(this.props, !0));
            }
            this.parentValidationService && this.parentValidationService.register(this), this.doWithChildSpan("initialize", e => {
                try {
                    this.controller.fireInitialize();
                } finally {
                    null == e || e.end();
                }
            }), this.subscribeModelChanges(), this.savePreviousModelState();
        }
        componentDidMount() {
            this.doWithChildSpan("ready", e => {
                try {
                    super.componentDidMount();
                } finally {
                    null == e || e.end();
                }
            }), this.endLocalSpan();
        }
        componentDidUpdate() {
            super.componentDidUpdate(), this.endLocalSpan();
        }
        getChildContext() {
            return {
                ancestorGenerationNode: this.generationNode,
                locale: this.context.locale
            };
        }
        createIdService() {
            var e;
            const t = this.idServiceProperties;
            return new _runtimeCoreJs.WidgetNaming.WidgetIdService(null !== (e = t.service) && void 0 !== e ? e : null, t.alias, _runtimeCoreJs.WidgetNaming.NamespaceKind.Block);
        }
        setInputs(e, t) {
            e.inputs && Object.keys(e.inputs).length > 0 && (this.model.setInputs(e.inputs), t && this.model.flush());
        }
        getName(e) {
            return super.getName(e) || "$b" + e.alias;
        }
        UNSAFE_componentWillUpdate(t) {
            if (!_runtimeCoreJs.ObjectExtensions.shallowEquals(this.props.inputs, t.inputs)) {
                _runtimeCoreJs.Logger.debug(this, () => `Inputs of '${this.getId()}' changed`), this.setInputs(t, !1);
                try {
                    this.controller.fireAfterInputsChanged();
                } finally {
                    _runtimeCoreJs.Logger.debug(this, () => "InputsChanged event fired on '" + this.getId() + "'");
                }
            }
            super.UNSAFE_componentWillUpdate(t);
        }
        shouldComponentUpdate(e, t, r) {
            return !(!super.shouldComponentUpdate(e, t, r) && _runtimeCoreJs.ObjectExtensions.shallowEquals(this.props.inputs, e.inputs)) || !(e._dependencies || !e.placeholders) || !(!this.generationNode || r.isGenerationUpToDate(this.generationNode.generation)) || !(!this.props._dependencies || !e._dependencies) && !_runtimeCoreJs.ObjectExtensions.arrayShallowEquals(this.props._dependencies, e._dependencies);
        }
        get viewName() {
            return this.context.viewName;
        }
        getRootNodeProperties() {
            return {
                "data-block": this.constructor.displayName,
                ref: Dt.ReferenceName,
                className: "OSBlockWidget"
            };
        }
        onSetState() {
            this.context.refreshCurrentGeneration();
        }
        get parentValidationServiceProperties() {
            return this.props._validationProps;
        }
        get validationParentId() {
            var e;
            const t = this.parentValidationServiceProperties;
            return t && null !== (e = t.validationParentId) && void 0 !== e ? e : null;
        }
        get parentValidationService() {
            const e = this.parentValidationServiceProperties;
            return e ? e.validationService : null;
        }
        get valid() {
            return this.isValid;
        }
        set valid(e) {
            this.isValid = void 0 === e || e;
        }
        get isValidationAggregator() {
            return !1;
        }
        get isWebBlockInstance() {
            return !0;
        }
        validate() {
            return new _runtimeCoreJs.Validation.ValidationResult(this.controller.validationService.validate(""));
        }
        componentWillUnmount() {
            this.doWithChildDisposeSpan("destroy", e => {
                try {
                    super.componentWillUnmount();
                } finally {
                    null == e || e.end();
                }
                this.parentValidationService && this.parentValidationService.unregister(this.getId());
            });
        }
        validateWidget(e) {
            var t, n;
            e ? super.validateWidget(e) : null === (t = this.parentValidationService) || void 0 === t || t.validate(null !== (n = this.validationParentId) && void 0 !== n ? n : void 0);
        }
        getHTMLNode() {
            const e = this.refs[Dt.ReferenceName];
            return e && this.findDOMNode(e) || this.findDOMNode(this);
        }
    }
    Dt.ReferenceName = "block-reference", Dt.contextTypes = _runtimeCoreJs.ObjectExtensions.assign({
        ancestorGenerationNode: Ne.object,
        refreshCurrentGeneration: Ne.func,
        isGenerationUpToDate: Ne.func,
        viewName: Ne.string
    }, Rt.contextTypes), Dt.childContextTypes = {
        ancestorGenerationNode: Ne.object,
        locale: Ne.string
    };
    class Pt extends It {
        constructor(e, t) {
            super(e, t), this.isUnloading = !1, this.isLoadingFromHistory = !1, this.screenElement = void 0, e.controller || this.doWithChildSpan("initialize", e => {
                try {
                    this.controller.fireInitialize();
                } finally {
                    null == e || e.end();
                }
            }), this.subscribeModelChanges(), this.savePreviousModelState(), this.isLoadingFromHistory = !!e.cachedScreenState;
        }
        serializeCustomStateProperties() {
            return yt(document.body);
        }
        loadCustomStateProperties(e) {
            wt(document.body, e);
        }
        getScreenStateCache() {
            return {
                navigationKey: this.props.navigationKey,
                shouldSave: this.isUnloading && this.props.shallSaveStateOnLeave,
                shouldLoad: this.isLoadingFromHistory,
                state: this.props.cachedScreenState
            };
        }
        getChildContext() {
            var e;
            const t = _runtimeCoreJs.Injector.resolve(_runtimeCoreJs.ServiceNames.LocaleService);
            return {
                ancestorGenerationNode: null === (e = this.model.widgetsGenerationsTree) || void 0 === e ? void 0 : e.root,
                isGenerationUpToDate: e => e <= this.currentGeneration,
                refreshCurrentGeneration: () => this.refreshCurrentGeneration(),
                viewName: this.viewName,
                getScreenStateCache: () => this.getScreenStateCache(),
                locale: null == t ? void 0 : t.getCurrentLocale()
            };
        }
        getRootNodeProperties() {
            return {
                className: _runtimeCoreJs.Public.View.ActiveScreenCssClass + " screen-container"
            };
        }
        get idServiceProperties() {
            return {
                service: this.idService,
                uuid: Nt
            };
        }
        getComponentKey() {
            return Nt;
        }
        static collectResourcesOrderedByPriority(e, t) {
            const n = {},
                r = [],
                o = e => {
                    const i = e.getBlocks();
                    for (const e of i) o(e);
                    for (const o of t(e)) n[o] || (r.push(o), n[o] = !0);
                };
            return o(e), r;
        }
        static getJavascriptsOrderedByPriority(e) {
            return Pt.collectResourcesOrderedByPriority(e, e => e.getJsDependencies());
        }
        static getStylesheetsOrderedByPriority(e) {
            return Pt.collectResourcesOrderedByPriority(e, e => e.getCssDependencies());
        }
        componentDidMount() {
            const e = () => {
                this.screenElement = this.findDOMNode(this), super.componentDidMount(), this.exception || (document.title = this.title, Pt.updateHTMLLang(), Pt.updateRightToLeftStyleClass(), this.refreshCurrentGeneration(), this.isLoadingFromHistory = !1, _runtimeCoreJs.ScreenStateCache.ScreenStateCache.clear(this.getScreenStateCache().navigationKey));
            };
            this.doWithChildSpan("ready", t => {
                try {
                    e();
                } finally {
                    null == t || t.end();
                }
            }), this.endLocalSpan();
        }
        componentDidUpdate() {
            this.screenElement = this.findDOMNode(this), super.componentDidUpdate(), this.exception || (document.title = this.title, Pt.updateHTMLLang(), Pt.updateRightToLeftStyleClass(), this.refreshCurrentGeneration(), this.endLocalSpan());
        }
        static updateHTMLLang() {
            const e = _runtimeCoreJs.Injector.resolve(_runtimeCoreJs.ServiceNames.LocaleService);
            if (e) {
                const t = document.getElementsByTagName("html");
                if (1 === t.length) {
                    const n = t.item(0);
                    null == n || n.setAttribute("lang", e.getCurrentLocale());
                }
            }
        }
        componentWillUnmount() {
            this.doWithChildDisposeSpan("destroy", e => {
                try {
                    this.isUnloading = !0, super.componentWillUnmount();
                } finally {
                    null == e || e.end();
                }
            });
        }
        refreshCurrentGeneration() {
            var e, t;
            this.currentGeneration = null !== (t = null === (e = this.model.widgetsGenerationsTree) || void 0 === e ? void 0 : e.root.generation) && void 0 !== t ? t : 0;
        }
        injectId() {}
        getHTMLNode() {
            throw new Error("@abstract");
        }
        onNavigationStart() {
            super.onNavigationStart(), this.screenElement && this.screenElement.classList.remove(_runtimeCoreJs.Public.View.ActiveScreenCssClass);
        }
        static loadResources(t, n) {
            return ot(this, arguments, void 0, function(t, n) {
                let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ct;
                let i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _runtimeCoreJs.ScriptsManager.scheduleCustomJsLoading;
                let s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _runtimeCoreJs.ApplicationInfo.isWebApplication();
                return function*() {
                    const a = Pt.getStylesheetsOrderedByPriority(t).map(e => _runtimeCoreJs.Navigation.VersionedURL.getVersionedUrl(e)),
                        l = Pt.getJavascriptsOrderedByPriority(t).map(e => _runtimeCoreJs.Navigation.VersionedURL.getVersionedUrl(e)),
                        c = r(a, (t, n) => _runtimeCoreJs.Logger.error("BaseWebScreen", t, n, t instanceof Error ? t : void 0, xt.Client)),
                        d = c.triggerRemoveStyles;
                    _runtimeCoreJs.EventDispatcher.EventDispatcher.listenOnce(_runtimeCoreJs.EventDispatcher.EventType.TransitionEnd, e => {
                        e === _runtimeCoreJs.EventDispatcher.TransitionEndResult.Success && d();
                    }), yield i(l, t => _runtimeCoreJs.Logger.error("BaseWebScreen", t, "OS-CLRT-60500", t instanceof Error ? t : void 0, xt.External), {
                        parentSpan: n
                    }), s && (yield c.loadStylesPromise);
                }();
            });
        }
        static updateRightToLeftStyleClass() {
            const e = _runtimeCoreJs.Injector.resolve(_runtimeCoreJs.ServiceNames.LocaleService);
            if (e) {
                const t = document.body;
                t && (e.isCurrentLocaleRTL() ? t.classList.add("is-rtl") : t.classList.remove("is-rtl"));
            }
        }
    }

    function Mt(e) {
        requestAnimationFrame(() => setTimeout(e, 1));
    }
    Pt.childContextTypes = {
        ancestorGenerationNode: Ne.object,
        isGenerationUpToDate: Ne.func,
        refreshCurrentGeneration: Ne.func,
        viewName: Ne.string,
        getScreenStateCache: Ne.func,
        locale: Ne.string
    };
    var Tt = _exports.BaseView = Object.freeze({
        __proto__: null,
        BaseWebBlock: Dt,
        BaseWebScreen: Pt,
        SCREEN_UUID: Nt,
        TraceableView: It,
        View: Rt,
        ViewComponent: Ot,
        executeAfterPaint: Mt
    });

    function Lt(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "i-default";
        if (Array.isArray(e)) {
            const n = {};
            for (let t = 0; t < e.length; t++) n["i" + t] = e[t];
            return O.createElement(O.Fragment, {
                key: t
            }, Object.keys(n).map(e => O.createElement(O.Fragment, {
                key: e
            }, n[e])));
        }
        return e;
    }
    var kt = _exports.WidgetHelpers = Object.freeze({
        __proto__: null,
        wrapElements: Lt
    });
    const jt = e => {
        var t;
        return (t = class extends e {
            makeCallOriginalMethod(e, t) {
                for (var _len2 = arguments.length, n = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                    n[_key2 - 2] = arguments[_key2];
                }
                return () => {
                    var r;
                    return null === (r = e.prototype[t]) || void 0 === r ? void 0 : r.call(this, ...n);
                };
            }
            componentDidMount() {
                for (var _len3 = arguments.length, t = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                    t[_key3] = arguments[_key3];
                }
                return this.internalComponentDidMount(this.makeCallOriginalMethod(e, "componentDidMount", ...t), ...t);
            }
            componentDidUpdate() {
                for (var _len4 = arguments.length, t = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                    t[_key4] = arguments[_key4];
                }
                return this.internalComponentDidUpdate(this.makeCallOriginalMethod(e, "componentDidUpdate", ...t), ...t);
            }
            UNSAFE_componentWillMount() {
                for (var _len5 = arguments.length, t = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                    t[_key5] = arguments[_key5];
                }
                return this.internalComponentWillMount(this.makeCallOriginalMethod(e, "UNSAFE_componentWillMount", ...t), ...t);
            }
            componentWillUnmount() {
                for (var _len6 = arguments.length, t = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                    t[_key6] = arguments[_key6];
                }
                return this.internalComponentWillUnmount(this.makeCallOriginalMethod(e, "componentWillUnmount", ...t), ...t);
            }
            UNSAFE_componentWillUpdate() {
                for (var _len7 = arguments.length, t = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
                    t[_key7] = arguments[_key7];
                }
                return this.internalComponentWillUpdate(this.makeCallOriginalMethod(e, "UNSAFE_componentWillUpdate", ...t), ...t);
            }
            render() {
                for (var _len8 = arguments.length, t = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
                    t[_key8] = arguments[_key8];
                }
                return this.internalRender(this.makeCallOriginalMethod(e, "render", ...t), ...t);
            }
        }).__hasWidgetSpec = !0, t.displayName = e.name, t;
    };
    class At extends Ot {
        constructor(e, t) {
            super(e, t), this.ref = O.createRef();
            const n = this.constructor;
            if (this.exception = null, this.isDisposed = !1, !n.__hasWidgetSpec) throw new Error("Invalid widget. The widget must be decorated with WidgetSpec.");
            this.props._dependencies && (this._generationNode = t.ancestorGenerationNode.addChild());
        }
        getChildContext() {
            return {
                ancestorGenerationNode: this._generationNode ? this._generationNode : this.context.ancestorGenerationNode,
                locale: this.context.locale
            };
        }
        componentDidMount() {}
        internalComponentDidMount(e) {
            e.apply(this), super.componentDidMount(), this.customComponentDidMountHandler && this.customComponentDidMountHandler();
        }
        UNSAFE_componentWillMount() {}
        internalComponentWillMount(e) {
            e.apply(this);
        }
        componentDidUpdate() {}
        internalComponentDidUpdate(e, t) {
            e.apply(this, t), super.componentDidUpdate(), this.customComponentDidUpdateHandler && this.customComponentDidUpdateHandler();
        }
        componentWillUnmount() {}
        internalComponentWillUnmount(e) {
            e.apply(this), super.componentWillUnmount(), this.isDisposed = !0, this.customComponentWillUnmountHandler && this.customComponentWillUnmountHandler();
        }
        internalComponentWillUpdate(e, t) {
            e.apply(this, t), this.customComponentWillUpdateHandler && this.customComponentWillUpdateHandler();
        }
        get skipRenderWhenHidden() {
            return !0;
        }
        internalRender(e) {
            return this.skipRenderWhenHidden && void 0 !== this.props.visible && !0 !== this.props.visible ? null : e.apply(this);
        }
        static formatCssPropertyName(e) {
            return e = e.replace(/-([\da-z])/gi, (e, t) => t.toUpperCase()), /^(?:Webkit|Moz|O)[A-Z]/.test(e) ? e : e.substring(0, 1).toLowerCase() + e.substring(1);
        }
        static fillWithStyleProperties(e, t) {
            e.split(";").forEach(e => {
                const n = e.indexOf(":");
                if (n > 0) {
                    const r = e.substr(0, n).trim(),
                        o = e.substr(n + 1).trim(),
                        i = At.formatCssPropertyName(r);
                    t[i] = _runtimeCoreJs.StringUtils.StringUtils.safeParseInt(o);
                }
            });
        }
        fillWithBuiltinProperties(e) {
            var t;
            e.style = null !== (t = e.style) && void 0 !== t ? t : {}, e.ref = this.ref;
            const n = this.props.gridProperties;
            if (n) {
                n.classes && (e.className ? e.className = e.className + " " + n.classes : e.className = n.classes);
                const t = e.style;
                n.width && (t.width = _runtimeCoreJs.StringUtils.StringUtils.safeParseInt(n.width)), n.marginLeft && (t.marginLeft = _runtimeCoreJs.StringUtils.StringUtils.safeParseInt(n.marginLeft));
            }
            const r = this.props.extendedProperties;
            if (r) {
                for (const t in r) t !== At.StyleAttribute && (e[t.valueOf()] = r[t]);
                const t = r[At.StyleAttribute];
                t && At.fillWithStyleProperties(t, e.style);
            }
            const o = this.props.extendedEvents;
            if (o)
                for (const t in o) {
                    const n = o[t];
                    switch (t.toLowerCase()) {
                        case "componentdidmount":
                            this.customComponentDidMountHandler = n;
                            break;
                        case "componentdidupdate":
                            this.customComponentDidUpdateHandler = n;
                            break;
                        case "unsafe_componentwillupdate":
                        case "componentwillupdate":
                            this.customComponentWillUpdateHandler = n;
                            break;
                        case "componentwillunmount":
                            this.customComponentWillUnmountHandler = n;
                            break;
                        default:
                            e[t.valueOf()] = n;
                    }
                }
        }
        hasOrWillHaveChildren(e) {
            return !!e.placeholders || O.Children.count(this.props.children) > 0 || O.Children.count(e.children) > 0;
        }
        get displayName() {
            return this.constructor.displayName;
        }
        shouldComponentUpdate(e, t, r) {
            var o, i;
            return !(e._dependencies || !this.hasOrWillHaveChildren(e)) || !(!this._generationNode || r.isGenerationUpToDate(this._generationNode.generation)) || !_runtimeCoreJs.ObjectExtensions.arrayShallowEquals(null !== (o = this.props._dependencies) && void 0 !== o ? o : [], null !== (i = e._dependencies) && void 0 !== i ? i : []) || !_runtimeCoreJs.ObjectExtensions.shallowEquals(this.props, e, At.affectsRender) || !_runtimeCoreJs.ObjectExtensions.shallowEquals(this.state, t) || !_runtimeCoreJs.ObjectExtensions.shallowEquals(this.props.extendedProperties, e.extendedProperties) || this.context.locale !== r.locale;
        }
        static affectsRender(e, t) {
            if ("_" === t.charAt(0)) return !1;
            switch (t) {
                case "children":
                case "placeholders":
                case "gridProperties":
                case "extendedEvents":
                case "extendedProperties":
                    return !1;
                default:
                    const n = e[t],
                        r = typeof n;
                    if ("string" === r || "number" === r || "boolean" === r) return !0;
                    if (n) {
                        if (n.fastEquals instanceof Function) return !0;
                        if (n.equals instanceof Function) return console.warn("Consider implementing fastEquals for improved performance when comparing type: " + n.constructor.name), !0;
                    }
                    return !1;
            }
        }
        executeAfterPaint(e) {
            Mt(() => {
                this.isDisposed || e();
            });
        }
        executeWithActiveClassOn(e) {
            const t = "active",
                n = this.getHTMLNode();
            let r;
            n.classList.add(t);
            try {
                r = e();
            } finally {
                const e = () => {
                    this.isDisposed || n.classList.remove(t);
                };
                r instanceof Promise ? r.then(e).catch(e) : e();
            }
        }
        getHTMLNode() {
            const e = this.ref.current;
            return this.findDOMNode(null != e ? e : this);
        }
    }
    At.StyleAttribute = "style", At.contextTypes = _runtimeCoreJs.ObjectExtensions.assign({
        isGenerationUpToDate: Ne.func,
        ancestorGenerationNode: Ne.object,
        locale: Ne.string
    }, Ot.contextTypes), At.childContextTypes = {
        ancestorGenerationNode: Ne.object,
        locale: Ne.string
    };
    class Wt extends At {
        constructor(e, t) {
            var n;
            super(e, t), this._generationNode || (this._generationNode = null === (n = t.ancestorGenerationNode) || void 0 === n ? void 0 : n.addChild());
        }
        get validationServiceProperties() {
            return this.props._validationProps;
        }
        get validationParentId() {
            var e;
            const t = this.validationServiceProperties;
            return t && null !== (e = null == t ? void 0 : t.validationParentId) && void 0 !== e ? e : null;
        }
        get isValidationAggregator() {
            return !1;
        }
        get isWebBlockInstance() {
            return !1;
        }
        get validationService() {
            const e = this.validationServiceProperties;
            return e ? e.validationService : null;
        }
        get isMandatory() {
            return !1;
        }
        validate() {
            return new _runtimeCoreJs.Validation.ValidationResult();
        }
        internalComponentWillMount(e) {
            super.internalComponentWillMount(e), this.validationService && this.validationService.register(this);
        }
        internalComponentWillUnmount(e) {
            super.internalComponentWillUnmount(e), this.validationService && this.validationService.unregister(this.getId());
        }
        get widgetRecordProvider() {
            return this.props._widgetRecordProvider;
        }
        getValidationRecord() {
            return this.widgetRecordProvider.getReadOnlyWidgetRecord(this.getId());
        }
        get generationNode() {
            return this._generationNode;
        }
        createValidationElement() {
            var e, t;
            return this.hasValidationMessage() ? O.createElement(gt.span, {
                id: this.getId() + Wt.DescribedBySuffix,
                className: "validation-message"
            }, null !== (t = null === (e = this.getValidationRecord()) || void 0 === e ? void 0 : e.validationMessageAttr) && void 0 !== t ? t : "") : null;
        }
        hasValidationMessage() {
            const e = this.getValidationRecord();
            return !(null == e ? void 0 : e.validAttr) && "" !== (null == e ? void 0 : e.validationMessageAttr);
        }
        fillWithBuiltinProperties(e) {
            super.fillWithBuiltinProperties(e), this.hasValidationMessage() && (e.className = void 0 === e.className ? "not-valid" : e.className + " not-valid");
        }
    }
    Wt.DescribedBySuffix = "_DescribedBy";
    class Ft extends Wt {
        get variable() {
            throw new Error("InputWithVariableWidget.variable not implemented");
        }
        get inputedValue() {
            throw new Error("InputWithVariableWidget.inputedValue not implemented");
        }
        get inputedValueValidity() {
            return {
                valid: !0,
                badInput: !1
            };
        }
        isTextVariable(e) {
            switch (e.type) {
                case _runtimeCoreJs.DataTypes.DataTypes.Text:
                case _runtimeCoreJs.DataTypes.DataTypes.Email:
                case _runtimeCoreJs.DataTypes.DataTypes.PhoneNumber:
                    return !0;
                default:
                    return !1;
            }
        }
        shouldUpdateValue(e) {
            if (!!_runtimeCoreJs.DataTypes.equals(this.variable.value, e.value)) return !1;
            const t = !_runtimeCoreJs.DataConversion.JSConversions.isDefault(e.value),
                n = this.isTextVariable(this.variable),
                r = !this.inputedValueValidity || this.inputedValueValidity.valid;
            return t || n || r;
        }
        isValueReallyEmpty() {
            var e;
            const t = this.inputedValue;
            return !!Ft.isEmptyValue(t) && !(null === (e = this.inputedValueValidity) || void 0 === e ? void 0 : e.badInput);
        }
        validate() {
            var e, t;
            const n = super.validate();
            if (!1 === n.valid) return n;
            if (this.isValueReallyEmpty()) {
                if (this.isMandatory) return new _runtimeCoreJs.Validation.ValidationResult(!1, null === (e = this.validationService) || void 0 === e ? void 0 : e.getMandatoryValueMessage());
            } else if (this.inputedValueValidity && !this.inputedValueValidity.valid || !this.variable.isAcceptable(this.inputedValue)) return new _runtimeCoreJs.Validation.ValidationResult(!1, null === (t = this.validationService) || void 0 === t ? void 0 : t.getInvalidValueMessage(this.variable.type));
            return n;
        }
        static isEmptyValue(e) {
            return null == e || "" === e || e.trim && "" === e.trim();
        }
    }
    class Ut {
        constructor(e) {
            this.renderPlaceholder = e;
        }
        static get Empty() {
            return Ut._empty;
        }
        render() {
            return Lt(this.renderPlaceholder());
        }
    }
    Ut._empty = new Ut(() => null);
    class _t extends Error {
        constructor(e) {
            super("Widget iteration contexts are immutable: " + e), this.messageDetail = e;
        }
    }
    class Ht {
        constructor(e, t, n) {
            this.parentContext = e, this.list = t, this.currentRowNumber = n;
        }
        getCurrentRowNumber(e) {
            return e.modelId === this.list.modelId ? this.currentRowNumber : this.parentContext.getCurrentRowNumber(e);
        }
        clone() {
            const e = this.parentContext.clone();
            return e.setCurrentRowNumber(this.list, this.currentRowNumber), e;
        }
        isBeingIterated(e) {
            return !1;
        }
        setCurrentRowNumber(e) {
            throw new _t("unable to set a new CurrentRowNumber");
        }
        registerIterationStart(e) {
            throw new _t("unable to register the start of a new iteration");
        }
        registerIterationEnd(e) {
            throw new _t("unable to register the end of an iteration");
        }
        getIterator(e) {
            throw new _t("unable to get an iterator state");
        }
    }
    class Vt {
        constructor(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : void 0;
            let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
            if (this.renderItem = e, this.parentCallContext = t, this.parentIdService = n, this.ownerAlias = r, !t) throw new Error("Parent call context cannot be undefined");
        }
        render(e, t, n) {
            let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            let o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Number.MAX_VALUE;
            var i;
            if (!t) return null;
            if (!e) throw new Error("Owner widget cannot be null");
            if (n) {
                const e = n;
                n = (t, n, r) => e(Lt(t, `i-${r}`), n);
            } else n = (e, t, n) => Lt(e, `i-${n}`);
            const s = this.getItemContextCachePropertyName();
            let l = e[s];
            l || (l = {});
            const c = {},
                d = {},
                u = Math.min(t.length, r + o);
            for (let e = r; e < u; e++) {
                const r = t.idOf(e),
                    o = this.createOrUpdateItemContext(t, r, e, l, c),
                    s = new _runtimeCoreJs.WidgetNaming.WidgetIdService(null !== (i = this.parentIdService) && void 0 !== i ? i : null, this.ownerAlias, _runtimeCoreJs.WidgetNaming.NamespaceKind.IteratorItem, r);
                d["i" + r] = n(this.renderItem(s, o.callContext), e, r);
            }
            return e[s] = c, O.createElement(O.Fragment, {
                key: "fragmentKey"
            }, Object.keys(d).map(e => O.createElement(O.Fragment, {
                key: e
            }, d[e])));
        }
        createOrUpdateItemContext(e, t, n, r, o) {
            const i = new Ht(this.parentCallContext.iterationContext, e, n);
            let s = r[t];
            return s || (s = {
                callContext: this.parentCallContext.clone()
            }), s.callContext.iterationContext = i, s.callContext.iterationContext = s.callContext.clone().iterationContext, o[t] = s, s;
        }
        getItemContextCachePropertyName() {
            return Vt.ItemContextCachePropertyName + this.ownerAlias;
        }
    }
    Vt.ItemContextCachePropertyName = "__itemContextCache";
    var zt,
        Bt = _exports.Widget = Object.freeze({
            __proto__: null,
            InputWithVariableWidget: Ft,
            IteratorPlaceholderContent: Vt,
            PlaceholderContent: Ut,
            ValidationWidget: Wt,
            Widget: At,
            WidgetSpec: jt,
            executeAfterPaint: Mt
        });
    class $t {
        constructor() {
            if ($t.instance) throw new Error("Error: Instantiation failed, use FeedbackMessageService.getInstance() instead of new.");
            $t.instance = this;
        }
        static get Instance() {
            return $t.instance;
        }
        showMessage(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
            let r = arguments.length > 3 ? arguments[3] : undefined;
            let o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
            let i = arguments.length > 5 ? arguments[5] : undefined;
            let s = document.getElementById($t.FeedbackMessageId);
            s ? B.unmountComponentAtNode(s) : (s = document.createElement("div"), s.id = $t.FeedbackMessageId, s.className = "feedback-message-wrapper", document.body.insertBefore(s, document.body.firstChild));
            const l = {
                message: e,
                messageType: t,
                encodeHTML: n,
                extraCssClasses: r,
                closeOnClick: o,
                onClick: i,
                _idProps: {
                    service: new _runtimeCoreJs.WidgetNaming.WidgetIdService(null)
                }
            };
            B.render(O.createElement(Gt, l), s);
        }
        closeMessage() {
            const e = document.getElementById($t.FeedbackMessageId);
            e && (B.unmountComponentAtNode(e), e.remove());
        }
    }
    $t.FeedbackMessageId = "feedbackMessageContainer", $t.instance = new $t();
    let Gt = zt = class extends At {
        closeMessage(e) {
            this.feedbackMessageElement && ($t.Instance.closeMessage(), e.preventDefault(), this.feedbackMessageElement = null);
        }
        componentDidMount() {
            var e;
            this.feedbackMessageElement = this.getHTMLNode(), -1 !== (null === (e = this.feedbackMessageElement.getAttribute("class")) || void 0 === e ? void 0 : e.indexOf(zt.AUTOCLOSE_CLASS)) && this.feedbackMessageElement.addEventListener("animationend", this.closeMessage.bind(this), !1);
        }
        static getMessageType(e) {
            switch (e) {
                case 0:
                    return "info";
                case 1:
                    return "success";
                case 2:
                    return "warning";
                case 3:
                    return "error";
                default:
                    throw new Error("Unknown MessageType: " + e);
            }
        }
        render() {
            let e = "feedback-message feedback-message-" + zt.getMessageType(this.props.messageType);
            0 !== this.props.messageType && 1 !== this.props.messageType || (e += zt.AUTOCLOSE_CLASS), this.props.extraCssClasses && (e += " " + this.props.extraCssClasses);
            const t = {
                className: e
            };
            this.props.onClick ? this.props.closeOnClick ? t.onClick = e => {
                var t, n;
                null === (n = (t = this.props).onClick) || void 0 === n || n.call(t), this.closeMessage(e);
            } : t.onClick = this.props.onClick : this.props.closeOnClick && (t.onClick = this.closeMessage.bind(this)), this.fillWithBuiltinProperties(t);
            const n = {
                className: "feedback-message-text"
            };
            return this.props.encodeHTML ? n.children = this.props.message : n.dangerouslySetInnerHTML = {
                __html: this.props.message
            }, O.createElement(gt.div, t, O.createElement(gt.i), O.createElement(gt.div, n));
        }
    };
    Gt.AUTOCLOSE_CLASS = " feedback-message-autoclose", Gt = zt = function(e, t, n, r) {
        var o,
            i = arguments.length,
            s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
        else
            for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
        return i > 3 && s && Object.defineProperty(t, n, s), s;
    }([jt], Gt), _runtimeCoreJs.FeedbackMessageService.registerFeedbackMessageService($t.Instance);
    var Kt = _exports.FeedbackMessage = Object.freeze({
        __proto__: null
    });
    class qt extends O.Component {
        constructor(e) {
            super(null != e ? e : {}), this.portalContainer = document.createElement("div"), this.portalContainer.style.display = "inline", this.portalContainer.className = qt.PortalClassName, document.body.appendChild(this.portalContainer);
        }
        componentWillUnmount() {
            setTimeout(() => document.body.removeChild(this.portalContainer));
        }
        render() {
            return B.createPortal(O.createElement(gt.div, {
                context: this.context
            }, this.props.children), this.portalContainer);
        }
    }
    qt.PortalClassName = "portal-class";
    var Jt = _exports.Portal = Object.freeze({
        __proto__: null,
        Portal: qt
    });
    class Qt extends O.Component {
        getErrorMessage() {
            var e;
            const t = _runtimeCoreJs.ApplicationInfo.getErrorPageConfig();
            return (null === (e = null == t ? void 0 : t.messages) || void 0 === e ? void 0 : e.defaultMessage) || "There was an error processing your request.";
        }
        getExtraErrorMessage() {
            const e = _runtimeCoreJs.ApplicationInfo.getErrorPageConfig();
            return (null == e ? void 0 : e.extraMessage) || "";
        }
        static getCssDependencies() {
            return [];
        }
        static getJsDependencies() {
            return [];
        }
        static getBlocks() {
            return [];
        }
        render() {
            return O.createElement(gt.div);
        }
        componentDidMount() {
            _runtimeCoreJs.ErrorHandling.navigateToErrorPage(void 0, this.getErrorMessage(), this.getExtraErrorMessage());
        }
    }
    let Xt = class extends Qt {
            getErrorMessage() {
                var e;
                const t = _runtimeCoreJs.ApplicationInfo.getErrorPageConfig();
                return (null === (e = null == t ? void 0 : t.messages) || void 0 === e ? void 0 : e.screenNotFound) || `Screen not found: ${this.props.location.pathname || "(none)"}`;
            }
        },
        Yt = class extends Qt {
            getErrorMessage() {
                var e;
                const t = _runtimeCoreJs.ApplicationInfo.getErrorPageConfig();
                return (null === (e = null == t ? void 0 : t.messages) || void 0 === e ? void 0 : e.noDefaultScreen) || "This application does not contain a default entry.";
            }
        };

    function Zt(e, t, n, r, o) {
        return class extends O.Component {
            render() {
                var i;
                const s = {
                    controller: t,
                    model: n,
                    navigationKey: null !== (i = this.props.location.key) && void 0 !== i ? i : "",
                    cachedScreenState: r,
                    shallSaveStateOnLeave: o
                };
                return O.createElement(e, s);
            }
        };
    }
    var en = _exports.RouteComponents = Object.freeze({
        __proto__: null,
        AbstractErrorComponent: Qt,
        NoDefaultScreen: Yt,
        NotFoundScreen: Xt,
        createView: Zt
    });
    const tn = _ref2 => {
        let {
            url: e = window.location.href,
            resumeAction: t,
            getBasePath: n = _runtimeCoreJs.ApplicationInfo.getBasePath
        } = _ref2;
        const [r, o] = (0, _react.useState)(),
        [i, s] = (0, _react.useState)();
        if ((0, _react.useEffect)(() => {
                ot(void 0, void 0, void 0, function*() {
                    s(void 0);
                    try {
                        const r = yield t({
                            url: e
                        });
                        if (r) {
                            const e = (e => {
                                const t = e.replace("outsystems://", "https://");
                                if (!t.startsWith("http")) return t;
                                const n = new URL(t),
                                    r = n.searchParams ? `?${n.searchParams}` : "";
                                return `${n.pathname}${r}`;
                            })(r);
                            o(e);
                        } else o(n());
                    } catch (e) {
                        s(e);
                    }
                });
            }, [e, o, n]), i) throw i;
        return r ? ge.jsx(_deprecatedReactRouterDom.Redirect, {
            push: !0,
            to: r
        }) : ge.jsx(_react.Fragment, {});
    };
    var nn = {},
        rn = e => encodeURIComponent(e).replace(/[!'()*]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`),
        on = "%[a-f0-9]{2}",
        sn = new RegExp("(" + on + ")|([^%]+?)", "gi"),
        an = new RegExp("(" + on + ")+", "gi");

    function ln(e, t) {
        try {
            return [decodeURIComponent(e.join(""))];
        } catch (e) {}
        if (1 === e.length) return e;
        t = t || 1;
        var n = e.slice(0, t),
            r = e.slice(t);
        return Array.prototype.concat.call([], ln(n), ln(r));
    }

    function cn(e) {
        try {
            return decodeURIComponent(e);
        } catch (r) {
            for (var t = e.match(sn) || [], n = 1; n < t.length; n++) t = (e = ln(t, n).join("")).match(sn) || [];
            return e;
        }
    }
    var dn = function(e) {
            if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
            try {
                return e = e.replace(/\+/g, " "), decodeURIComponent(e);
            } catch (t) {
                return function(e) {
                    for (var t = {
                            "%FE%FF": "��",
                            "%FF%FE": "��"
                        }, n = an.exec(e); n;) {
                        try {
                            t[n[0]] = decodeURIComponent(n[0]);
                        } catch (e) {
                            var r = cn(n[0]);
                            r !== n[0] && (t[n[0]] = r);
                        }
                        n = an.exec(e);
                    }
                    t["%C2"] = "�";
                    for (var o = Object.keys(t), i = 0; i < o.length; i++) {
                        var s = o[i];
                        e = e.replace(new RegExp(s, "g"), t[s]);
                    }
                    return e;
                }(e);
            }
        },
        un = (e, t) => {
            if ("string" != typeof e || "string" != typeof t) throw new TypeError("Expected the arguments to be of type `string`");
            if ("" === t) return [e];
            const n = e.indexOf(t);
            return -1 === n ? [e] : [e.slice(0, n), e.slice(n + t.length)];
        },
        pn = function(e, t) {
            for (var n = {}, r = Object.keys(e), o = Array.isArray(t), i = 0; i < r.length; i++) {
                var s = r[i],
                    a = e[s];
                (o ? -1 !== t.indexOf(s) : t(s, a, e)) && (n[s] = a);
            }
            return n;
        };
    ! function(e) {
        const t = rn,
            n = dn,
            r = un,
            o = pn,
            i = Symbol("encodeFragmentIdentifier");

        function s(e) {
            if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string");
        }

        function a(e, n) {
            return n.encode ? n.strict ? t(e) : encodeURIComponent(e) : e;
        }

        function l(e, t) {
            return t.decode ? n(e) : e;
        }

        function c(e) {
            return Array.isArray(e) ? e.sort() : "object" == typeof e ? c(Object.keys(e)).sort((e, t) => Number(e) - Number(t)).map(t => e[t]) : e;
        }

        function d(e) {
            const t = e.indexOf("#");
            return -1 !== t && (e = e.slice(0, t)), e;
        }

        function u(e) {
            const t = (e = d(e)).indexOf("?");
            return -1 === t ? "" : e.slice(t + 1);
        }

        function p(e, t) {
            return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e;
        }

        function h(e, t) {
            s((t = Object.assign({
                decode: !0,
                sort: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
                parseNumbers: !1,
                parseBooleans: !1
            }, t)).arrayFormatSeparator);
            const n = function(e) {
                    let t;
                    switch (e.arrayFormat) {
                        case "index":
                            return (e, n, r) => {
                                t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === r[e] && (r[e] = {}), r[e][t[1]] = n) : r[e] = n;
                            };
                        case "bracket":
                            return (e, n, r) => {
                                t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n;
                            };
                        case "colon-list-separator":
                            return (e, n, r) => {
                                t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n;
                            };
                        case "comma":
                        case "separator":
                            return (t, n, r) => {
                                const o = "string" == typeof n && n.includes(e.arrayFormatSeparator),
                                    i = "string" == typeof n && !o && l(n, e).includes(e.arrayFormatSeparator);
                                n = i ? l(n, e) : n;
                                const s = o || i ? n.split(e.arrayFormatSeparator).map(t => l(t, e)) : null === n ? n : l(n, e);
                                r[t] = s;
                            };
                        case "bracket-separator":
                            return (t, n, r) => {
                                const o = /(\[\])$/.test(t);
                                if (t = t.replace(/\[\]$/, ""), !o) return void(r[t] = n ? l(n, e) : n);
                                const i = null === n ? [] : n.split(e.arrayFormatSeparator).map(t => l(t, e));
                                void 0 !== r[t] ? r[t] = [].concat(r[t], i) : r[t] = i;
                            };
                        default:
                            return (e, t, n) => {
                                void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t;
                            };
                    }
                }(t),
                o = Object.create(null);
            if ("string" != typeof e) return o;
            if (!(e = e.trim().replace(/^[?#&]/, ""))) return o;
            for (const i of e.split("&")) {
                if ("" === i) continue;
                let [e, s] = r(t.decode ? i.replace(/\+/g, " ") : i, "=");
                s = void 0 === s ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? s : l(s, t), n(l(e, t), s, o);
            }
            for (const e of Object.keys(o)) {
                const n = o[e];
                if ("object" == typeof n && null !== n)
                    for (const e of Object.keys(n)) n[e] = p(n[e], t);
                else o[e] = p(n, t);
            }
            return !1 === t.sort ? o : (!0 === t.sort ? Object.keys(o).sort() : Object.keys(o).sort(t.sort)).reduce((e, t) => {
                const n = o[t];
                return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? e[t] = c(n) : e[t] = n, e;
            }, Object.create(null));
        }
        e.extract = u, e.parse = h, e.stringify = (e, t) => {
            if (!e) return "";
            s((t = Object.assign({
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ","
            }, t)).arrayFormatSeparator);
            const n = n => t.skipNull && null == e[n] || t.skipEmptyString && "" === e[n],
                r = function(e) {
                    switch (e.arrayFormat) {
                        case "index":
                            return t => (n, r) => {
                                const o = n.length;
                                return void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, [a(t, e), "[", o, "]"].join("")] : [...n, [a(t, e), "[", a(o, e), "]=", a(r, e)].join("")];
                            };
                        case "bracket":
                            return t => (n, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, [a(t, e), "[]"].join("")] : [...n, [a(t, e), "[]=", a(r, e)].join("")];
                        case "colon-list-separator":
                            return t => (n, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, [a(t, e), ":list="].join("")] : [...n, [a(t, e), ":list=", a(r, e)].join("")];
                        case "comma":
                        case "separator":
                        case "bracket-separator": {
                            const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                            return n => (r, o) => void 0 === o || e.skipNull && null === o || e.skipEmptyString && "" === o ? r : (o = null === o ? "" : o, 0 === r.length ? [
                                [a(n, e), t, a(o, e)].join("")
                            ] : [
                                [r, a(o, e)].join(e.arrayFormatSeparator)
                            ]);
                        }
                        default:
                            return t => (n, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, a(t, e)] : [...n, [a(t, e), "=", a(r, e)].join("")];
                    }
                }(t),
                o = {};
            for (const t of Object.keys(e)) n(t) || (o[t] = e[t]);
            const i = Object.keys(o);
            return !1 !== t.sort && i.sort(t.sort), i.map(n => {
                const o = e[n];
                return void 0 === o ? "" : null === o ? a(n, t) : Array.isArray(o) ? 0 === o.length && "bracket-separator" === t.arrayFormat ? a(n, t) + "[]" : o.reduce(r(n), []).join("&") : a(n, t) + "=" + a(o, t);
            }).filter(e => e.length > 0).join("&");
        }, e.parseUrl = (e, t) => {
            t = Object.assign({
                decode: !0
            }, t);
            const [n, o] = r(e, "#");
            return Object.assign({
                url: n.split("?")[0] || "",
                query: h(u(e), t)
            }, t && t.parseFragmentIdentifier && o ? {
                fragmentIdentifier: l(o, t)
            } : {});
        }, e.stringifyUrl = (t, n) => {
            n = Object.assign({
                encode: !0,
                strict: !0,
                [i]: !0
            }, n);
            const r = d(t.url).split("?")[0] || "",
                o = e.extract(t.url),
                s = e.parse(o, {
                    sort: !1
                }),
                l = Object.assign(s, t.query);
            let c = e.stringify(l, n);
            c && (c = `?${c}`);
            let u = function(e) {
                let t = "";
                const n = e.indexOf("#");
                return -1 !== n && (t = e.slice(n)), t;
            }(t.url);
            return t.fragmentIdentifier && (u = `#${n[i] ? a(t.fragmentIdentifier, n) : t.fragmentIdentifier}`), `${r}${c}${u}`;
        }, e.pick = (t, n, r) => {
            r = Object.assign({
                parseFragmentIdentifier: !0,
                [i]: !1
            }, r);
            const {
                url: s,
                query: a,
                fragmentIdentifier: l
            } = e.parseUrl(t, r);
            return e.stringifyUrl({
                url: s,
                query: o(a, n),
                fragmentIdentifier: l
            }, r);
        }, e.exclude = (t, n, r) => {
            const o = Array.isArray(n) ? e => !n.includes(e) : (e, t) => !n(e, t);
            return e.pick(t, o, r);
        };
    }(nn);
    const hn = e => ({
        appear: `${e}-appear`,
        appearActive: `${e}-appear-active`,
        appearDone: `${e}-appear-done`,
        enter: `${e}-enter`,
        enterActive: `${e}-enter-active`,
        enterDone: `${e}-enter-done`,
        exit: `${e}-leave`,
        exitActive: `${e}-leave-active`,
        exitDone: `${e}-leave-done`
    });
    var mn;
    ! function(e) {
        let t = [];

        function n() {
            const e = {
                width: window.innerWidth || document.documentElement.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight
            };
            let t, n;
            if (e.width < 768) n = "phone";
            else if (e.width <= 1024) n = "tablet";
            else {
                if (!_runtimeCoreJs.ApplicationInfo.isWebApplication()) return [];
                n = "desktop";
            }
            return t = e.width > e.height ? "landscape" : "portrait", [n, t];
        }
        let r = _runtimeCoreJs.Injector.resolve(_runtimeCoreJs.ServiceNames.DeviceHelperClassProvider) || n;

        function o() {
            t.forEach(e => document.body.classList.remove(e));
        }
        _runtimeCoreJs.Injector.addRegistrationListener(_runtimeCoreJs.ServiceNames.DeviceHelperClassProvider, (e, t) => r = t || n), e.clearDeviceClasses = o, e.setDeviceClasses = function() {
            o(), t = r(), t.forEach(e => document.body.classList.add(e));
        };
    }(mn || (mn = {}));
    let vn = class n extends O.Component {
        constructor(e, t) {
            super(e, t), this.hasScreenRendered = !1, this.state = {
                transition: new _runtimeCoreJs.Transitions.Transition(""),
                animate: !1,
                firstRender: !0
            };
        }
        static getPreviousTransition(e) {
            var t;
            return (null === (t = null == e ? void 0 : e.state) || void 0 === t ? void 0 : t.transition) ? _runtimeCoreJs.Transitions.sanitizeTransition(e.state.transition) : new _runtimeCoreJs.Transitions.Transition("");
        }
        static getTransition(e, t, r) {
            var o;
            return n.transitionOverride ? _runtimeCoreJs.Transitions.sanitizeTransition(n.transitionOverride) : _runtimeCoreJs.Navigation.locationReachedFromHistory(Object.assign({
                action: e
            }, t)) ? _runtimeCoreJs.Transitions.reverseTransition(n.getPreviousTransition(r)) : (null === (o = t.state) || void 0 === o ? void 0 : o.transition) ? _runtimeCoreJs.Transitions.sanitizeTransition(t.state.transition) : new _runtimeCoreJs.Transitions.Transition("");
        }
        static onBeforeNavigation(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _runtimeCoreJs.Navigation.onBeforeNavigate;
            return !!n(e, t) && (mt(!0), !0);
        }
        static onAfterNavigation(n) {
            let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _runtimeCoreJs.Navigation.hasPendingReload;
            if (mt(!1), n.isShowingSplashScreen || r()) return;
            const o = _runtimeCoreJs.UrlUtils.removeQueryParametersFromUrls(_runtimeCoreJs.Navigation.getCurrentLocation().href);
            _runtimeCoreJs.Logger.debug("Root", `Navigated to: ${o}`);
            const i = _runtimeCoreJs.Application.ApplicationStorage.pendingUpgradeFeedback.get();
            i && (n.showUpgradeFeedback(i), _runtimeCoreJs.Application.ApplicationStorage.pendingUpgradeFeedback.remove());
        }
        getChildContext() {
            return {
                hasScreenRendered: () => this.hasScreenRendered
            };
        }
        UNSAFE_componentWillReceiveProps(e) {
            const t = n.getTransition(e.history.action, e.location, this.props.location);
            this.props.location !== e.location && this.setState(() => ({
                transition: t,
                animate: !!t.name,
                firstRender: !1
            }));
        }
        UNSAFE_componentWillMount() {
            mn.setDeviceClasses();
            const e = "onorientationchange" in window ? "orientationchange" : "resize",
                t = () => this.handleOrientationChanges();
            window.addEventListener(e, t, !1), this.handleDispose = () => {
                window.removeEventListener(e, t);
            };
        }
        componentDidMount() {
            this.state.animate || this.onTransitionStarted(), n.transitionOverride = null, n.onAfterNavigation(this.props.runtime);
        }
        componentDidUpdate() {
            this.onTransitionStarted(), n.transitionOverride = null, n.onAfterNavigation(this.props.runtime);
        }
        UNSAFE_componentWillUpdate() {
            this.hasScreenRendered = !1;
        }
        componentWillUnmount() {
            this.handleDispose && this.handleDispose();
        }
        handleOrientationChanges() {
            setTimeout(() => {
                mn.setDeviceClasses();
            }, 300);
        }
        onTransitionStarted() {
            this.hasScreenRendered = !0, setTimeout(() => {
                _runtimeCoreJs.EventDispatcher.EventDispatcher.dispatch({
                    type: _runtimeCoreJs.EventDispatcher.EventType.TransitionStart
                });
            });
        }
        onTransitionEnded() {
            setTimeout(() => {
                _runtimeCoreJs.EventDispatcher.EventDispatcher.dispatch({
                    type: _runtimeCoreJs.EventDispatcher.EventType.TransitionEnd,
                    args: _runtimeCoreJs.EventDispatcher.TransitionEndResult.Success
                });
            });
        }
        render() {
            const {
                children: e,
                location: t,
                history: n,
                screenLoader: r
            } = this.props, {
                    transition: o,
                    firstRender: i,
                    animate: s
                } = this.state,
                a = hn(o.name);
            if (i) {
                const e = r.load(t, n.action, n);
                return e && e.then(() => this.setState(() => ({
                    firstRender: !1
                }))).catch(() => {}), null;
            }
            return ge.jsx(Be, {
                component: "div",
                id: "transitionContainer",
                childFactory: e => O.cloneElement(e, {
                    classNames: a,
                    timeout: s ? 300 : 0
                }),
                children: ge.jsx(Ue, {
                    classNames: a,
                    timeout: s ? 300 : 0,
                    onEnter: () => this.onTransitionStarted(),
                    onExited: () => this.onTransitionEnded(),
                    children: ge.jsx(O.Fragment, {
                        children: e
                    })
                }, t.key)
            });
        }
    };
    vn.childContextTypes = {
        hasScreenRendered: Ne.func
    };
    let fn = class e {
        constructor(e, t) {
            this.currentHistory = e, this.currentRuntime = t;
        }
        static urlToLocationDescriptor(e, t) {
            return {
                pathname: e.path,
                search: nn.stringify(e.queryParams),
                state: {
                    transition: t
                },
                hash: e.hash ? "#" + e.hash : ""
            };
        }
        push(e) {
            this.currentHistory.push(e);
        }
        replace(e) {
            this.currentHistory.replace(e);
        }
        goTo(t, n, r) {
            var o;
            const i = e.urlToLocationDescriptor(t, n);
            r || (null === (o = this.currentRuntime) || void 0 === o ? void 0 : o.isShowingSplashScreen) ? this.replace(i) : this.push(i);
        }
        goBack(e) {
            e && (vn.transitionOverride = e), this.currentHistory.goBack();
        }
        goForward(e) {
            e && (vn.transitionOverride = e), this.currentHistory.goForward();
        }
        dispose(e) {}
    };

    function gn(e) {
        return "/" === e.charAt(0);
    }

    function Sn(e, t) {
        for (var n = t, r = n + 1, o = e.length; r < o; n += 1, r += 1) e[n] = e[r];
        e.pop();
    }
    var yn = "Invariant failed";

    function wn(e, t, n, r) {
        var o;
        "string" == typeof e ? (o = function(e) {
            var t = e || "/",
                n = "",
                r = "",
                o = t.indexOf("#"); -
            1 !== o && (r = t.substr(o), t = t.substr(0, o));
            var i = t.indexOf("?");
            return -1 !== i && (n = t.substr(i), t = t.substr(0, i)), {
                pathname: t,
                search: "?" === n ? "" : n,
                hash: "#" === r ? "" : r
            };
        }(e), o.state = t) : (void 0 === (o = Se({}, e)).pathname && (o.pathname = ""), o.search ? "?" !== o.search.charAt(0) && (o.search = "?" + o.search) : o.search = "", o.hash ? "#" !== o.hash.charAt(0) && (o.hash = "#" + o.hash) : o.hash = "", void 0 !== t && void 0 === o.state && (o.state = t));
        try {
            o.pathname = decodeURI(o.pathname);
        } catch (e) {
            throw e instanceof URIError ? new URIError('Pathname "' + o.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : e;
        }
        return n && (o.key = n), r ? o.pathname ? "/" !== o.pathname.charAt(0) && (o.pathname = function(e, t) {
            void 0 === t && (t = "");
            var n,
                r = e && e.split("/") || [],
                o = t && t.split("/") || [],
                i = e && gn(e),
                s = t && gn(t),
                a = i || s;
            if (e && gn(e) ? o = r : r.length && (o.pop(), o = o.concat(r)), !o.length) return "/";
            if (o.length) {
                var l = o[o.length - 1];
                n = "." === l || ".." === l || "" === l;
            } else n = !1;
            for (var c = 0, d = o.length; d >= 0; d--) {
                var u = o[d];
                "." === u ? Sn(o, d) : ".." === u ? (Sn(o, d), c++) : c && (Sn(o, d), c--);
            }
            if (!a)
                for (; c--; c) o.unshift("..");
            !a || "" === o[0] || o[0] && gn(o[0]) || o.unshift("");
            var p = o.join("/");
            return n && "/" !== p.substr(-1) && (p += "/"), p;
        }(o.pathname, r.pathname)) : o.pathname = r.pathname : o.pathname || (o.pathname = "/"), o;
    }
    var Cn = !("undefined" == typeof window || !window.document || !window.document.createElement);

    function En(e, t) {
        t(window.confirm(e));
    }
    var bn = "popstate",
        xn = "hashchange";

    function Nn() {
        try {
            return window.history.state || {};
        } catch (e) {
            return {};
        }
    }

    function On(e) {
        void 0 === e && (e = {}), Cn || function() {
            throw new Error(yn);
        }();
        var t,
            n,
            r = window.history,
            o = (-1 === (t = window.navigator.userAgent).indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
            i = !(-1 === window.navigator.userAgent.indexOf("Trident")),
            s = e,
            a = s.forceRefresh,
            l = void 0 !== a && a,
            c = s.getUserConfirmation,
            d = void 0 === c ? En : c,
            u = s.keyLength,
            p = void 0 === u ? 6 : u,
            h = e.basename ? function(e) {
                return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
            }("/" === (n = e.basename).charAt(0) ? n : "/" + n) : "";

        function m(e) {
            var t = e || {},
                n = t.key,
                r = t.state,
                o = window.location,
                i = o.pathname + o.search + o.hash;
            return h && (i = function(e, t) {
                return function(e, t) {
                    return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== "/?#".indexOf(e.charAt(t.length));
                }(e, t) ? e.substr(t.length) : e;
            }(i, h)), wn(i, r, n);
        }

        function v() {
            return Math.random().toString(36).substr(2, p);
        }
        var f,
            g,
            S = (f = null, g = [], {
                setPrompt: function(e) {
                    return f = e,
                        function() {
                            f === e && (f = null);
                        };
                },
                confirmTransitionTo: function(e, t, n, r) {
                    if (null != f) {
                        var o = "function" == typeof f ? f(e, t) : f;
                        "string" == typeof o ? "function" == typeof n ? n(o, r) : r(!0) : r(!1 !== o);
                    } else r(!0);
                },
                appendListener: function(e) {
                    var t = !0;

                    function n() {
                        t && e.apply(void 0, arguments);
                    }
                    return g.push(n),
                        function() {
                            t = !1, g = g.filter(function(e) {
                                return e !== n;
                            });
                        };
                },
                notifyListeners: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    g.forEach(function(e) {
                        return e.apply(void 0, t);
                    });
                }
            });

        function y(e) {
            Se(M, e), M.length = r.length, S.notifyListeners(M.location, M.action);
        }

        function w(e) {
            (function(e) {
                return void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS");
            })(e) || b(m(e.state));
        }

        function C() {
            b(m(Nn()));
        }
        var E = !1;

        function b(e) {
            if (E) E = !1, y();
            else {
                S.confirmTransitionTo(e, "POP", d, function(t) {
                    t ? y({
                        action: "POP",
                        location: e
                    }) : function(e) {
                        var t = M.location,
                            n = N.indexOf(t.key); -
                        1 === n && (n = 0);
                        var r = N.indexOf(e.key); -
                        1 === r && (r = 0);
                        var o = n - r;
                        o && (E = !0, R(o));
                    }(e);
                });
            }
        }
        var x = m(Nn()),
            N = [x.key];

        function O(e) {
            return h + function(e) {
                var t = e.pathname,
                    n = e.search,
                    r = e.hash,
                    o = t || "/";
                return n && "?" !== n && (o += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (o += "#" === r.charAt(0) ? r : "#" + r), o;
            }(e);
        }

        function R(e) {
            r.go(e);
        }
        var I = 0;

        function D(e) {
            1 === (I += e) && 1 === e ? (window.addEventListener(bn, w), i && window.addEventListener(xn, C)) : 0 === I && (window.removeEventListener(bn, w), i && window.removeEventListener(xn, C));
        }
        var P = !1;
        var M = {
            length: r.length,
            action: "POP",
            location: x,
            createHref: O,
            push: function(e, t) {
                var n = "PUSH",
                    i = wn(e, t, v(), M.location);
                S.confirmTransitionTo(i, n, d, function(e) {
                    if (e) {
                        var t = O(i),
                            s = i.key,
                            a = i.state;
                        if (o) {
                            if (r.pushState({
                                    key: s,
                                    state: a
                                }, null, t), l) window.location.href = t;
                            else {
                                var c = N.indexOf(M.location.key),
                                    d = N.slice(0, c + 1);
                                d.push(i.key), N = d, y({
                                    action: n,
                                    location: i
                                });
                            }
                        } else window.location.href = t;
                    }
                });
            },
            replace: function(e, t) {
                var n = "REPLACE",
                    i = wn(e, t, v(), M.location);
                S.confirmTransitionTo(i, n, d, function(e) {
                    if (e) {
                        var t = O(i),
                            s = i.key,
                            a = i.state;
                        if (o) {
                            if (r.replaceState({
                                    key: s,
                                    state: a
                                }, null, t), l) window.location.replace(t);
                            else {
                                var c = N.indexOf(M.location.key); -
                                1 !== c && (N[c] = i.key), y({
                                    action: n,
                                    location: i
                                });
                            }
                        } else window.location.replace(t);
                    }
                });
            },
            go: R,
            goBack: function() {
                R(-1);
            },
            goForward: function() {
                R(1);
            },
            block: function(e) {
                void 0 === e && (e = !1);
                var t = S.setPrompt(e);
                return P || (D(1), P = !0),
                    function() {
                        return P && (P = !1, D(-1)), t();
                    };
            },
            listen: function(e) {
                var t = S.appendListener(e);
                return D(1),
                    function() {
                        D(-1), t();
                    };
            }
        };
        return M;
    }
    const Rn = function() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => !0;
        let t = arguments.length > 1 ? arguments[1] : undefined;
        let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e => On(e);
        const r = {},
            o = n({
                getUserConfirmation(e, n) {
                    return ot(this, void 0, void 0, function*() {
                        const i = r[e];
                        let s = !1;
                        try {
                            if (i) {
                                const e = null == t ? void 0 : t.load(i.location, i.action, o);
                                e && (yield e), s = !0;
                            }
                        } catch (e) {} finally {
                            delete r[e];
                        }
                        n(s);
                    });
                }
            });
        if (o.location && !o.location.state) {
            const e = Object.assign(Object.assign({}, o.location), {
                state: {
                    age: 0
                }
            });
            o.push(e);
        }
        return o.block((t, n) => {
            var i;
            const s = null !== (i = t.key) && void 0 !== i ? i : "";
            return e(o.location, t, n) && (r[s] = {
                location: t,
                action: n
            }), s;
        }), o;
    };
    let In = class extends _react.Component {
        constructor(e, t) {
            super(e, t);
        }
        componentDidMount() {
            const {
                onEnter: e
            } = this.props;
            e && e();
        }
        componentWillUnmount() {
            const {
                onLeave: e
            } = this.props;
            e && e();
        }
        render() {
            const {
                component: e
            } = this.props;
            return e ? (0, _react.createElement)(e, this.props) : null;
        }
    };
    const Dn = (e, t, n, r) => {
            switch (n) {
                case "PUSH":
                    return r + 1;
                case "POP":
                    return !!t && !e ? r + 1 : null != e ? e : 0;
                case "REPLACE":
                    return r;
                default:
                    throw new Error(`Missing case for ${n} in setLocationAge`);
            }
        },
        Pn = (e, t, n) => {
            switch (t) {
                case "POP":
                    return n >= e;
                case "PUSH":
                case "REPLACE":
                    return !1;
                default:
                    throw new Error(`Missing case for ${t} in isBackNavigation`);
            }
        };
    class Mn extends fn {
        constructor(e, t) {
            super(e, t);
        }
        goTo(e, t, n) {
            const r = fn.urlToLocationDescriptor(e, t);
            this.push(r);
        }
        dispose(e) {}
    }

    function Tn() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var n;
        const r = function(e) {
                return Object.keys(e).reduce((t, n) => (t[n] = decodeURIComponent(e[n]), t), {});
            }(function(e) {
                return Object.keys(e).filter(e => isNaN(Number(e))).reduce((t, n) => (t[n] = e[n], t), {});
            }((n = e, Object.keys(n).filter(e => null !== n[e] && void 0 !== n[e]).reduce((e, t) => (e[t] = n[t], e), {})))),
            o = nn.parse(t);
        return Object.assign(Object.assign({}, o), r);
    }
    const Ln = "ScreenLoader";
    let kn = class {
        constructor(e, t, n) {
            this.runtime = e, this.routes = t, this.splashRoute = n, this.isFirstNavigation = !0, this.loadedComponents = [];
        }
        getLoadedComponent(e) {
            for (let t = this.loadedComponents.length - 1; t >= 0; t--)
                if (this.loadedComponents[t] && this.loadedComponents[t].key === e) return this.loadedComponents[t].component;
            return null;
        }
        freeLoadedComponent(e) {
            for (let t = this.loadedComponents.length - 1; t >= 0; t--) this.loadedComponents[t] && this.loadedComponents[t].key === e && (this.loadedComponents = this.loadedComponents.slice(t + 1, this.loadedComponents.length));
        }
        load(t, n, i) {
            let s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _runtimeCoreJs.RequireManager.loadModule;
            var a;
            const l = function(e, t) {
                if (!e || !t) return null;
                let n = null;
                return e.some(e => {
                    if (!e) return !1;
                    const r = (0, _deprecatedReactRouterDom.matchPath)(t.pathname, {
                        path: e.pathname,
                        exact: !0
                    });
                    return !(!r || n || (n = {
                        routeInfo: e,
                        matchedParams: Tn(r.params, t.search)
                    }, 0));
                }), n;
            }((null === (a = this.runtime) || void 0 === a ? void 0 : a.shouldRenderSplashScreen()) && this.splashRoute ? [this.splashRoute] : this.routes, t);
            if (!l) return null;
            const {
                routeInfo: c,
                matchedParams: d
            } = l, {
                component: u,
                lazyComponentInfo: h
            } = c;
            if (u) return Promise.resolve(u);
            const m = {
                key: t.key,
                component: null
            };
            return this.loadedComponents.push(m), new Promise((a, l) => {
                if (!h) throw _runtimeCoreJs.Logger.log(Ln, "Component to load was empty.", xt.Internal), new Error("There was a problem loading routes.");
                let u;
                if (h.useESM) {
                    if (void 0 === h.modelModule.importer || void 0 === h.controllerModule.importer || void 0 === h.webFlowControllerModule.importer || void 0 === h.viewModule.importer) throw _runtimeCoreJs.Logger.debug(Ln, "Lazy component module importer was missing.", xt.Internal), new Error("There was a problem loading routes.");
                    u = [h.modelModule.importer, h.controllerModule.importer, h.webFlowControllerModule.importer, h.viewModule.importer];
                } else u = [h.modelModule.name, h.controllerModule.name, h.webFlowControllerModule.name, h.viewModule.name];
                s(u, (s, u, v, f) => {
                    var g;
                    const S = new fn(i, this.runtime),
                        y = f.getRootSpan(!0);
                    null == y || y.activate();
                    const w = new Mn(i, this.runtime);
                    let C = null,
                        E = !1;
                    const b = !this.isFirstNavigation && _runtimeCoreJs.Navigation.locationReachedFromHistory(Object.assign(Object.assign({}, t), {
                        action: n
                    }));
                    if (b && (C = _runtimeCoreJs.ScreenStateCache.ScreenStateCache.loadScreenCache(null !== (g = t.key) && void 0 !== g ? g : ""), C)) {
                        const e = C.components[Nt].state;
                        if (e) {
                            const t = s;
                            s = {
                                create: n => {
                                    const r = t.create(n);
                                    return r.fromImmutableData(e), r;
                                }
                            }, E = !0;
                        }
                    }
                    if (!E) {
                        const e = s;
                        s = {
                            create: t => {
                                const n = e.create(t);
                                return n.setInputs(d), n;
                            }
                        };
                    }
                    u.initialize({
                        viewName: c.screenName,
                        navigatedFromHistory: b,
                        viewWasRestoredFromCache: E
                    }, s, v.default, S, w, y).then(t => {
                        if (!t.permissionsOk) return _runtimeCoreJs.EventDispatcher.EventDispatcher.dispatch({
                            type: _runtimeCoreJs.EventDispatcher.EventType.TransitionEnd,
                            args: _runtimeCoreJs.EventDispatcher.TransitionEndResult.Failure
                        }), void l(new Error("Invalid Permissions"));
                        if (0 === this.loadedComponents.length || this.loadedComponents[this.loadedComponents.length - 1] !== m) return void l(new Error("No longer on screen"));
                        if (!t.controller || !t.model) return void l(new Error("Error loading screen dependencies"));
                        if (c.screenName !== t.controller.constructor.activeScreen.viewName) return void l(new Error("Screen is no longer active"));
                        C || _runtimeCoreJs.Logger.debug(Ln, "No screen state cache found.");
                        const n = Zt(f, t.controller, t.model, C, h.shallSaveStateOnLeave);
                        Pt.loadResources(f, y).then(() => {
                            this.isFirstNavigation = !1, m.component = n, a(n);
                        });
                    });
                });
            });
        }
    };
    const jn = "Router",
        An = "screen-route-key",
        Wn = function(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            return `${An}${t ? "-default-" : "-"}${e}`;
        },
        Fn = (_ref3, o) => {
            let {
                pathname: e,
                forDefaultPath: t,
                screenName: n,
                component: r
            } = _ref3;
            return ge.jsx(_deprecatedReactRouterDom.Route, {
                path: e,
                exact: !0,
                location: o,
                component: r
            }, Wn(n, t));
        },
        Un = (_ref4, r, o, i, s) => {
            let {
                screenName: e,
                forDefaultPath: t,
                pathname: n
            } = _ref4;
            return ge.jsx(_deprecatedReactRouterDom.Route, {
                exact: !0,
                path: n,
                location: o,
                render: e => {
                    var t;
                    const n = r.getLoadedComponent(null !== (t = e.location.key) && void 0 !== t ? t : "");
                    return ge.jsx(In, Object.assign({
                        onEnter: i,
                        onLeave: () => {
                            var t;
                            r.freeLoadedComponent(null !== (t = e.location.key) && void 0 !== t ? t : ""), s && s();
                        },
                        component: null != n ? n : void 0
                    }, e));
                }
            }, Wn(e, t));
        },
        _n = (e, t, n) => e.map(e => e.component ? Fn(e, n) : Un(e, t, n)),
        Hn = {
            currentAge: new _runtimeCoreJs.StorageProvider.StorageObject(_runtimeCoreJs.StorageProvider.StorageType.Session, "RouterHistoryAge", 0)
        };
    const Vn = function(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _runtimeCoreJs.ApplicationInfo.useESM;
            let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _runtimeCoreJs.ApplicationInfo.getScreensDefinition;
            var o;
            const i = {
                shallSaveStateOnLeave: e,
                viewModule: {
                    name: t.viewModuleName
                },
                modelModule: {
                    name: t.modelModuleName
                },
                controllerModule: {
                    name: t.controllerModuleName
                },
                webFlowControllerModule: {
                    name: t.webFlowControllerModuleName
                }
            };
            if (n()) {
                const e = null === (o = r()) || void 0 === o ? void 0 : o.find(e => e.screenKey === t.screenKey);
                e && (i.viewModule.importer = e.viewModuleImporter, i.modelModule.importer = e.modelModuleImporter, i.controllerModule.importer = e.controllerModuleImporter, i.webFlowControllerModule.importer = e.webFlowControllerModuleImporter), i.useESM = !0;
            }
            return i;
        },
        zn = function() {
            let {
                getModules: t = _runtimeCoreJs.ApplicationInfo.getModules,
                getHomeModuleDefinition: n = _runtimeCoreJs.ApplicationInfo.getHomeModuleDefinition,
                getBasePath: r = _runtimeCoreJs.ApplicationInfo.getBasePath
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            _runtimeCoreJs.Logger.debug(jn, "Creating application routes.");
            const o = [],
                i = t(),
                s = r().replace(/\/$/, "");
            for (const t in i)
                if (i.hasOwnProperty(t)) {
                    const r = i[t];
                    if (r === n()) {
                        const t = r.homeScreenName ? _runtimeCoreJs.ApplicationInfo.getScreenDefinitionFromScreenName(r, r.homeScreenName) : void 0,
                            n = t ? {
                                pathname: s,
                                forDefaultPath: !0,
                                screenName: t.screenName,
                                lazyComponentInfo: Vn(!0, t)
                            } : {
                                pathname: s,
                                forDefaultPath: !0,
                                screenName: "no-default-screen",
                                component: Yt
                            };
                        o.push(n), _runtimeCoreJs.Logger.debug(jn, `Created default application route for ${n.pathname}`), o.push(...r.screens.map(e => ({
                            pathname: `${s}/${e.screenUrl}`,
                            forDefaultPath: !1,
                            screenName: e.screenName,
                            lazyComponentInfo: Vn(!0, e)
                        })));
                    }
                }
            return o;
        },
        Bn = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _runtimeCoreJs.ApplicationInfo.getBasePath;
            const t = e().replace(/\/$/, "");
            return ge.jsx(_deprecatedReactRouterDom.Route, {
                exact: !0,
                path: `${t}/${_runtimeCoreJs.Authentication.LOGIN_REDIRECT_PATH}`,
                component: () => ge.jsx(tn, {
                    resumeAction: _runtimeCoreJs.Authentication.resumeLogin
                })
            }, "authentication-redirect-login");
        },
        $n = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _runtimeCoreJs.ApplicationInfo.getBasePath;
            const t = e().replace(/\/$/, "");
            return ge.jsx(_deprecatedReactRouterDom.Route, {
                exact: !0,
                path: `${t}/${_runtimeCoreJs.Authentication.LOGOUT_REDIRECT_PATH}`,
                component: () => ge.jsx(tn, {
                    resumeAction: _runtimeCoreJs.Authentication.resumeLogout
                })
            }, "authentication-redirect-logout");
        };
    var Gn = _exports.Router = Object.freeze({
        __proto__: null,
        createApplicationRoutes: _n,
        createLazyScreenRoute: Un,
        createScreenRoute: Fn,
        getAppRouteInfos: zn,
        getBuiltInLoginRoute: Bn,
        getBuiltInLogoutRoute: $n,
        load: function(t, n, r) {
            var i;
            _runtimeCoreJs.Logger.debug(jn, "Loading Router.");
            const s = _runtimeCoreJs.ApplicationInfo.getHomeModuleDefinition();
            if (!s) throw new Error("No Home Module definition was found.");
            const a = _runtimeCoreJs.ApplicationInfo.getScreenDefinitionFromScreenName(s, null !== (i = s.splashScreenName) && void 0 !== i ? i : "");
            let l;
            a && (l = {
                pathname: "*",
                forDefaultPath: !1,
                screenName: a.screenName,
                lazyComponentInfo: Vn(!1, a)
            });
            const c = zn(),
                d = new kn(t, c, l),
                u = Rn((e, n, r) => function(e, t, n) {
                    var r, i, s, a, l, c;
                    const d = null !== (r = Hn.currentAge.get()) && void 0 !== r ? r : 0,
                        u = Dn(null !== (s = null === (i = t.state) || void 0 === i ? void 0 : i.age) && void 0 !== s ? s : 0, t.hash, n, d);
                    t.state = Object.assign(Object.assign({}, null !== (a = t.state) && void 0 !== a ? a : {}), {
                        age: u
                    });
                    const h = Pn(null !== (l = t.state.age) && void 0 !== l ? l : 0, n, d);
                    return !!vn.onBeforeNavigation(Object.assign(Object.assign({}, t), {
                        action: n
                    }), h) && (h && !t.key ? (_runtimeCoreJs.Navigation.navigateBack(null), e.exit()) : (Hn.currentAge.set(null !== (c = t.state.age) && void 0 !== c ? c : 0), _runtimeCoreJs.EventDispatcher.EventDispatcher.dispatch({
                        type: _runtimeCoreJs.EventDispatcher.EventType.NavigationStart,
                        args: t
                    }), !0));
                }(t, n, r), d, r);
            _runtimeCoreJs.Navigation.setNavigationCallbacks(new fn(u, t)), B.render(ge.jsx(ft, {
                onError: e => {
                    t.handleError(e);
                },
                children: ge.jsxs(_deprecatedReactRouterDom.Router, {
                    history: u,
                    children: [Bn(), $n(), ge.jsx(_deprecatedReactRouterDom.Route, {
                        render: e => {
                            const n = t.shouldRenderSplashScreen() && a && l ? [Un(l, d, e.location, () => t.isShowingSplashScreen = !0, () => t.isShowingSplashScreen = !1)] : _n(c, d, e.location);
                            return ge.jsx(_deprecatedReactRouterDom.Route, {
                                path: "/",
                                location: e.location,
                                render: e => {
                                    const r = Object.assign({
                                        runtime: t,
                                        screenLoader: d
                                    }, e);
                                    return ge.jsx(vn, Object.assign({}, r, {
                                        children: ge.jsxs(_deprecatedReactRouterDom.Switch, {
                                            location: e.location,
                                            children: [n, ge.jsx(_deprecatedReactRouterDom.Route, {
                                                location: e.location,
                                                component: Xt
                                            }, "not-found-screen")]
                                        })
                                    }));
                                }
                            }, An);
                        }
                    }, `module-route-key-${s.moduleName}`)]
                })
            }), document.getElementById("reactContainer"), () => {
                _runtimeCoreJs.Performance.end("Router load triggered render"), "function" == typeof n && n();
            });
        },
        makeLazyComponentInfo: Vn
    });
    class Kn extends _react.Component {
        constructor(e, t) {
            super(e, t), this.innerContext = Object.keys(Kn.childContextTypes).reduce((t, n) => (void 0 !== e[n] && (t[n] = e[n]), t), {});
        }
        getChildContext() {
            return Object.assign(Object.assign({}, this.context), this.innerContext);
        }
        render() {
            return this.props.children;
        }
    }
    Kn.contextTypes = {
        ancestorGenerationNode: Ne.object,
        refreshCurrentGeneration: Ne.func,
        isGenerationUpToDate: Ne.func,
        viewName: Ne.string,
        hasScreenRendered: Ne.func,
        getScreenStateCache: Ne.func,
        locale: Ne.string
    }, Kn.childContextTypes = {
        ancestorGenerationNode: Ne.object,
        refreshCurrentGeneration: Ne.func,
        isGenerationUpToDate: Ne.func,
        viewName: Ne.string,
        hasScreenRendered: Ne.func,
        getScreenStateCache: Ne.func,
        locale: Ne.string
    };
    const qn = (0, _react.createContext)(void 0),
        Jn = _ref5 => {
            let {
                children: e,
                value: t
            } = _ref5;
            return ge.jsx(qn.Provider, {
                value: t,
                children: e
            });
        },
        Qn = e => {
            const t = (0, _react.useContext)(qn),
                n = (0, _react.useRef)(void 0),
                r = (0, _react.useRef)(!1);
            return e && !r.current && t && (n.current = t.addChild()), (0, _react.useEffect)(() => {
                r.current = !0;
            }, []), n.current;
        },
        Xn = "style",
        Yn = "not-valid",
        Zn = e => (e = e.replace(/-([\da-z])/gi, (e, t) => t.toUpperCase()), /^(?:Webkit|Moz|O)[A-Z]/.test(e) ? e : e.charAt(0).toLowerCase() + e.slice(1)),
        er = (e, t) => {
            e.split(";").forEach(e => {
                const n = e.indexOf(":");
                if (n > 0) {
                    const r = e.substring(0, n).trim(),
                        o = e.substring(n + 1).trim(),
                        i = Zn(r);
                    t[i] = _runtimeCoreJs.StringUtils.StringUtils.safeParseInt(o);
                }
            });
        },
        tr = e => void 0 !== e && !e.validAttr && "" !== e.validationMessageAttr,
        nr = (e, t) => {
            if (t.startsWith("_")) return !1;
            let n, r;
            switch (t) {
                case "children":
                case "placeholders":
                case "gridProperties":
                case "extendedEvents":
                case "extendedProperties":
                    return !1;
                default:
                    if (n = e[t], r = typeof n, "string" === r || "number" === r || "boolean" === r) return !0;
                    if (n) {
                        if (n.fastEquals instanceof Function) return !0;
                        if (n.equals instanceof Function) return console.warn(`Consider implementing fastEquals for improved performance when comparing type: ${n.constructor.name}`), !0;
                    }
                    return !1;
            }
        },
        rr = e => null == e || "" === e || e.trim && "" === e.trim();
    var or = Object.freeze({
        __proto__: null,
        affectsRender: nr,
        fillWithBuiltinProperties: (e, t) => {
            var n;
            e.style = null !== (n = e.style) && void 0 !== n ? n : {}, ((e, t) => {
                const {
                    gridProperties: n
                } = null != t ? t : {};
                if (n) {
                    n.classes && (e.className ? e.className = e.className + " " + n.classes : e.className = n.classes);
                    const t = e.style;
                    t && (n.width && (t.width = _runtimeCoreJs.StringUtils.StringUtils.safeParseInt(n.width)), n.marginLeft && (t.marginLeft = _runtimeCoreJs.StringUtils.StringUtils.safeParseInt(n.marginLeft)));
                }
            })(e, t), ((e, t) => {
                const {
                    extendedProperties: n
                } = null != t ? t : {};
                if (n) {
                    for (const t in n) t !== Xn && (e[t.valueOf()] = n[t]);
                    const t = n[Xn];
                    t && e.style && er(t, e.style);
                }
            })(e, t);
        },
        fillWithStyleProperties: er,
        fillWithValidationProperties: (e, t) => {
            tr(t) && (e.className = e.className ? `${e.className} ${Yn}` : Yn);
        },
        formatCssPropertyName: Zn,
        hasValidationMessage: tr,
        isEmptyValue: rr
    });
    const ir = {
            navigationKey: "",
            shouldLoad: !1,
            shouldSave: !1,
            state: null
        },
        sr = (0, _react.createContext)(ir),
        ar = (e, t) => n => {
            var r;
            const o = null !== (r = null == t ? void 0 : t.screenState) && void 0 !== r ? r : ir;
            return ge.jsx(sr.Provider, {
                value: o,
                children: ge.jsx(e, Object.assign({}, n))
            });
        },
        lr = (0, _react.createContext)(null),
        cr = {
            didCatch: !1,
            error: null
        };
    class dr extends _react.Component {
        constructor(e) {
            super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = cr;
        }
        static getDerivedStateFromError(e) {
            return {
                didCatch: !0,
                error: e
            };
        }
        resetErrorBoundary() {
            const {
                error: e
            } = this.state;
            if (null !== e) {
                for (var t, n, r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
                    args: o,
                    reason: "imperative-api"
                }), this.setState(cr);
            }
        }
        componentDidCatch(e, t) {
            var n, r;
            null === (n = (r = this.props).onError) || void 0 === n || n.call(r, e, t);
        }
        componentDidUpdate(e, t) {
            const {
                didCatch: n
            } = this.state, {
                resetKeys: r
            } = this.props;
            var o, i;
            n && null !== t.error && function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]));
            }(e.resetKeys, r) && (null === (o = (i = this.props).onReset) || void 0 === o || o.call(i, {
                next: r,
                prev: e.resetKeys,
                reason: "keys"
            }), this.setState(cr));
        }
        render() {
            const {
                children: e,
                fallbackRender: t,
                FallbackComponent: n,
                fallback: r
            } = this.props, {
                didCatch: o,
                error: i
            } = this.state;
            let s = e;
            if (o) {
                const e = {
                    error: i,
                    resetErrorBoundary: this.resetErrorBoundary
                };
                if ("function" == typeof t) s = t(e);
                else if (n) s = (0, _react.createElement)(n, e);
                else {
                    if (null !== r && !(0, _react.isValidElement)(r)) throw i;
                    s = r;
                }
            }
            return (0, _react.createElement)(lr.Provider, {
                value: {
                    didCatch: o,
                    error: i,
                    resetErrorBoundary: this.resetErrorBoundary
                }
            }, s);
        }
    }
    const ur = (0, _react.createContext)(void 0),
        pr = (0, _react.createContext)({
            controllerFactory: void 0,
            modelFactory: void 0
        }),
        hr = (0, _react.createContext)({
            viewName: void 0
        }),
        mr = (e, t, n, r) => {
            const {
                controllerFactory: o,
                modelFactory: i
            } = (0, _react.useContext)(pr), {
                viewName: s = t
            } = (0, _react.useContext)(hr),
            [a, l] = (0, _react.useState)(() => {
                var t;
                if (e) return {
                    model: e
                }; {
                    if (!o) throw new Error("No model was provided, and the controllerFactory was not set.");
                    if (!i) throw new Error("No model was provided, and the modelFactory was not set.");
                    const e = o.activeScreenController,
                        n = e ? e.modelContext : void 0,
                        r = {
                            viewName: s,
                            navigatedFromHistory: null !== (t = null == n ? void 0 : n.navigatedFromHistory) && void 0 !== t && t,
                            viewWasRestoredFromCache: !1
                        };
                    return {
                        model: i.create(r)
                    };
                }
            }),
            c = (0, _react.useRef)(null != n ? n : null == o ? void 0 : o.create(a.model, r));
            if (!c.current) throw new Error("Unable to assign or create a new ControllerFactory instance.");
            return {
                modelState: a,
                setModel: l,
                controller: c.current
            };
        },
        vr = e => {
            var t, n, r;
            return null === (t = null == e ? void 0 : e.service) || void 0 === t ? void 0 : t.getId(null !== (r = null !== (n = e.name) && void 0 !== n ? n : e.uuid) && void 0 !== r ? r : "");
        },
        fr = e => {
            const t = (0, _react.useContext)(sr),
                o = (0, _react.useRef)(""),
                {
                    _idProps: i,
                    serializeCustomProperties: s,
                    serializeState: a,
                    onLoad: l
                } = e;
            (0, _react.useEffect)(() => {
                var e, c;
                if (o.current = t.navigationKey, t.shouldLoad && l) {
                    const r = null === (e = t.state) || void 0 === e ? void 0 : e.components[null !== (c = vr(i)) && void 0 !== c ? c : ""];
                    !r || _runtimeCoreJs.ObjectExtensions.isEmptyObject(r.customProperties) && _runtimeCoreJs.ObjectExtensions.isEmptyObject(r.state) || l(r.customProperties, r.state);
                }
                return () => {
                    var e;
                    if (t.shouldSave) {
                        const t = null == s ? void 0 : s(),
                            l = null == a ? void 0 : a();
                        _runtimeCoreJs.ObjectExtensions.isEmptyObject(l) && _runtimeCoreJs.ObjectExtensions.isEmptyObject(t) || _runtimeCoreJs.ScreenStateCache.ScreenStateCache.save(o.current, null !== (e = vr(i)) && void 0 !== e ? e : "", l, t);
                    }
                };
            }, []);
        },
        gr = e => /Maximum update depth exceeded/gi.test(e.message),
        Sr = (e, t) => new Error(`Render loop avoided. This is likely due to variables of ${t ? `block '${t}' on ` : ""}screen '${e}' being changed inside its 'On Render' event handler. Avoid changing variables inside 'On Render' event handlers.`),
        yr = () => new _runtimeCoreJs.WidgetNaming.WidgetIdService(null),
        wr = (t, n) => {
            const r = (0, _react.forwardRef)((r, i) => {
                    var s, a;
                    const {
                        _idProps: c,
                        createIdService: d = yr,
                        screenStateCacheOverrides: u
                    } = r,
                    p = (0, _react.useRef)(void 0),
                        h = (0, _react.useRef)(void 0),
                        m = (0, _react.useRef)(void 0), {
                            modelState: v,
                            setModel: f,
                            controller: g
                        } = mr(r.model, n.displayName, r.controller, d()),
                        S = v.model;
                    (0, _react.useEffect)(() => {
                        S.subscribeWrites(e => {
                            var t;
                            f({
                                model: e
                            }), null === (t = r.setModelState) || void 0 === t || t.call(r, {
                                model: e
                            });
                        });
                    }, []), (0, _react.useEffect)(() => (m.current = _runtimeCoreJs.EventDispatcher.EventDispatcher.listenOnce(_runtimeCoreJs.EventDispatcher.EventType.NavigationStart, () => C()), () => {
                        m.current && _runtimeCoreJs.EventDispatcher.EventDispatcher.unregister(m.current);
                    }), []);
                    const y = {
                        name: "View",
                        service: d()
                    };
                    fr({
                        _idProps: null != c ? c : y,
                        onLoad: null == u ? void 0 : u.onLoad,
                        serializeState: null !== (s = null == u ? void 0 : u.serializeState) && void 0 !== s ? s : () => w(),
                        serializeCustomProperties: null == u ? void 0 : u.serializeCustomProperties
                    });
                    const w = () => {
                            var e;
                            const t = null !== (e = h.current) && void 0 !== e ? e : p.current;
                            return S.sanitize(t);
                        },
                        C = () => {
                            h.current = p.current;
                        },
                        E = (0, _react.useContext)(ur);
                    var b, x;
                    b = null === (a = n.getId) || void 0 === a ? void 0 : a.call(n, r._idProps), x = () => {
                        var e;
                        return null === (e = n.rootNodeReference) || void 0 === e ? void 0 : e.current;
                    }, (0, _react.useEffect)(() => {
                        if (b) {
                            const e = x();
                            e && !e.hasAttribute("id") && e.setAttribute("id", b);
                        }
                    }, [b, x]), (0, _react.useEffect)(() => {
                        var e;
                        (null !== (e = r.onReady) && void 0 !== e ? e : e => e())(() => {
                            g.fireAfterViewReady();
                        });
                    }, []), (0, _react.useEffect)(() => {
                        var e;
                        (null !== (e = r.onRender) && void 0 !== e ? e : e => e())(() => {
                            const e = g.fireAfterViewRender();
                            e && e.catch(e => {
                                gr(e) && _runtimeCoreJs.ErrorHandling.handleError(Sr(n.displayName, null == E ? void 0 : E.viewName));
                            });
                        });
                    }), (0, _react.useEffect)(() => () => {
                        var e;
                        (null !== (e = r.onDestroy) && void 0 !== e ? e : e => e())(() => {
                            S.clearSubscriptions(), g.fireAfterViewDestroy(), setTimeout(() => g.dispose());
                        });
                    }, []);
                    return p.current = S.toImmutableData(), ge.jsx(Kn, {
                        viewName: n.displayName,
                        children: ge.jsx(dr, {
                            onError: t => {
                                const r = gr(t);
                                _runtimeCoreJs.Logger.error("View", t, r ? "OS-CLRT-60501" : "OS-CLRT-60500", t, xt.External), r ? _runtimeCoreJs.ErrorHandling.handleError(Sr(n.displayName)) : g.handleError(t);
                            },
                            fallbackRender: () => null,
                            children: ge.jsx(t, Object.assign({
                                ref: i
                            }, r, {
                                children: r.children
                            }))
                        })
                    });
                }),
                i = e => ge.jsx(pr.Provider, {
                    value: n,
                    children: ge.jsx(r, Object.assign({}, e))
                });
            return i.displayName = n.displayName, i;
        },
        Cr = (0, _react.createContext)(void 0),
        Er = (0, _react.createContext)(void 0),
        br = () => (0, _react.useContext)(Er);
    class xr {
        constructor(_ref6) {
            let {
                viewSpanProvider: t,
                getOwnerSpan: n,
                getOwnerDisposeSpan: r,
                forceRefresh: o,
                localRootSpan: i,
                localDisposeRootSpan: s,
                childSpans: a = new Map(),
                startSpan: l = _runtimeCoreJs.Logger.startSpan,
                startActiveSpan: c = _runtimeCoreJs.Logger.startActiveSpan
            } = _ref6;
            this.viewSpanProvider = t, this.getOwnerSpan = n, this.getOwnerDisposeSpan = r, this.localRootSpan = i, this.localDisposeRootSpan = s, this.childSpans = a, this.startSpan = l, this.startActiveSpan = c, this.loadLocalRootSpan(o);
        }
        get span() {
            return this.localRootSpan || this.loadLocalRootSpan(!0), this.localRootSpan;
        }
        get disposeSpan() {
            return this.getDisposeRootSpan();
        }
        get ownerSpan() {
            var e;
            return null === (e = this.getOwnerSpan) || void 0 === e ? void 0 : e.call(this);
        }
        get ownerDisposeSpan() {
            var e;
            return null === (e = this.getOwnerDisposeSpan) || void 0 === e ? void 0 : e.call(this);
        }
        endLocalSpan() {
            var e;
            null === (e = this.localRootSpan) || void 0 === e || e.end(), this.localRootSpan = void 0;
        }
        endLocalDisposeSpan() {
            var e;
            null === (e = this.localDisposeRootSpan) || void 0 === e || e.end(), this.localDisposeRootSpan = void 0;
        }
        loadLocalRootSpan(e) {
            this.localRootSpan || (this.localRootSpan = this.viewSpanProvider.getRootSpan(e, this.ownerSpan));
        }
        getChildSpanName(e) {
            return this.viewSpanProvider.getChildSpanName(e);
        }
        doWithChildSpan(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : bt;
            return this.executeInChildSpan({
                type: "main",
                childName: e,
                fn: t,
                setSpanAttributes: n
            });
        }
        doWithChildDisposeSpan(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : bt;
            return this.executeInChildSpan({
                type: "dispose",
                childName: e,
                fn: t,
                setSpanAttributes: n
            });
        }
        executeInChildSpan(_ref7) {
            let {
                type: e,
                childName: t,
                fn: n,
                setSpanAttributes: r
            } = _ref7;
            const o = "main" === e ? this.span : this.disposeSpan,
                i = this.viewSpanProvider.getAttributes(),
                s = this.viewSpanProvider.getSpanType("dispose" === e);
            return this.startActiveSpan(this.getChildSpanName(t), e => (e && (null == r || r(s, e, i), this.childSpans.set(t, e)), n(e)), xt.Internal, o);
        }
        getDisposeRootSpan() {
            if (this.localDisposeRootSpan) return this.localDisposeRootSpan;
            const e = this.viewSpanProvider.getAttributes(),
                t = this.viewSpanProvider.getSpanType(!0);
            if (!(null == e ? void 0 : e.codeFunction)) return;
            const n = this.startSpan(e.codeFunction, xt.External, this.ownerDisposeSpan);
            return this.localDisposeRootSpan = bt(t, n, e), this.localDisposeRootSpan;
        }
        getChildSpan(e) {
            return this.childSpans.get(e);
        }
    }
    class Nr {
        constructor(_ref8) {
            let {
                getAttributes: t = () => {},
                getSpanType: n,
                screenSpan: r,
                startSpan: o = _runtimeCoreJs.Logger.startSpan
            } = _ref8;
            this.getAttributes = t, this.getSpanType = n, this.screenSpan = r, this.startSpan = o;
        }
        getChildSpanName(e) {
            var t;
            return `${null === (t = this.getAttributes()) || void 0 === t ? void 0 : t.codeFunction}__${e}`;
        }
        getRootSpan(e, t) {
            var n;
            if (this.screenSpan && !e) return this.screenSpan;
            const r = this.getAttributes();
            if (!(null == r ? void 0 : r.codeFunction)) return;
            const o = this.startSpan(r.codeFunction, xt.External, t);
            return null === (n = this.screenSpan) || void 0 === n || n.end(), this.screenSpan = bt(this.getSpanType(), o, r), this.screenSpan;
        }
        makeProviderForInstance(_ref9) {
            let {
                getOwnerSpan: e,
                getOwnerDisposeSpan: t,
                forceRefresh: n
            } = _ref9;
            return new xr({
                viewSpanProvider: this,
                getOwnerSpan: e,
                getOwnerDisposeSpan: t,
                forceRefresh: n
            });
        }
    }
    const Or = (e, _ref10) => {
            let {
                topLevelComponent: t,
                getAttributes: n,
                getSpanType: r,
                makeSpanProvider: o = function() {
                    for (var _len9 = arguments.length, e = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
                        e[_key9] = arguments[_key9];
                    }
                    return new Nr(...e);
                }
            } = _ref10;
            const i = o({
                getAttributes: n,
                getSpanType: r
            });
            return {
                TraceableView: (0, _react.forwardRef)((n, r) => {
                    const o = (0, _react.useMemo)(() => i.makeProviderForInstance({
                            forceRefresh: !t,
                            getOwnerSpan: n.getOwnerSpan,
                            getOwnerDisposeSpan: n.getOwnerDisposeSpan
                        }), []),
                        s = (0, _react.useCallback)(e => {
                            var t;
                            (null !== (t = n.onReady) && void 0 !== t ? t : e => e())(() => {
                                e();
                            });
                        }, [n.onReady]),
                        a = (0, _react.useCallback)(e => {
                            var t;
                            (null !== (t = n.onRender) && void 0 !== t ? t : e => e())(() => {
                                o.doWithChildSpan("postrender", t => {
                                    try {
                                        e();
                                    } finally {
                                        null == t || t.end();
                                    }
                                }), o.endLocalSpan();
                            });
                        }, [n.onRender, o]),
                        l = (0, _react.useCallback)(e => {
                            o.doWithChildDisposeSpan("destroy", t => {
                                var r;
                                try {
                                    (null !== (r = n.onDestroy) && void 0 !== r ? r : e => e())(() => {
                                        e();
                                    });
                                } finally {
                                    null == t || t.end(), o.endLocalDisposeSpan();
                                }
                            });
                        }, [n.onDestroy, o]);
                    return ge.jsx(Er.Provider, {
                        value: o,
                        children: ge.jsx(e, Object.assign({}, n, {
                            onReady: s,
                            onRender: a,
                            onDestroy: l,
                            ref: r
                        }))
                    });
                }),
                viewSpanProvider: i
            };
        },
        Rr = () => yt(document.body),
        Ir = e => wt(document.body, e),
        Dr = (e, t) => {
            var n;
            null === (n = e.controller) || void 0 === n || n.validationService.validate(t);
        },
        Pr = (e, _ref11) => {
            let {
                isWebBlockInstance: t,
                isValidationAggregator: n,
                validationServiceProperties: r,
                id: o
            } = _ref11;
            const {
                validationService: i,
                validationParentId: s
            } = null != r ? r : {},
                a = (0, _react.useRef)({
                    validate: e,
                    isWebBlockInstance: null != t && t,
                    isValidationAggregator: null != n && n,
                    validationParentId: null != s ? s : null,
                    getId: () => o
                }),
                l = (0, _react.useRef)(!1);
            let c = !!t || void 0;
            Object.defineProperty(a.current, "valid", {
                configurable: !0,
                get: function() {
                    return c;
                },
                set: function(e) {
                    c = void 0 === e || e;
                }
            }), !l.current && i && i.register(a.current), (0, _react.useEffect)(() => (l.current = !0, () => {
                a.current && i && i.unregister(a.current.getId());
            }), []);
        },
        Mr = (e, t) => {
            const {
                inputs: n,
                model: r
            } = e;
            n && Object.keys(n).length > 0 && r && (r.setInputs(n), t && r.flush());
        },
        Tr = _ref12 => {
            let {
                _idProps: e
            } = _ref12;
            var t;
            return new _runtimeCoreJs.WidgetNaming.WidgetIdService(null !== (t = null == e ? void 0 : e.service) && void 0 !== t ? t : null, null == e ? void 0 : e.alias, _runtimeCoreJs.WidgetNaming.NamespaceKind.Block);
        },
        Lr = (e, t) => {
            var n;
            if (t) null === (n = e.controller) || void 0 === n || n.validationService.validate(t);
            else {
                const t = e._validationProps;
                null == t || t.validationService.validate(null == t ? void 0 : t.validationParentId);
            }
        },
        kr = e => {
            var t, n;
            return null !== (n = null === (t = null == e ? void 0 : e.service) || void 0 === t ? void 0 : t.getId(e.name || "$b" + e.alias)) && void 0 !== n ? n : "";
        },
        jr = _ref13 => {
            let {
                condition: e,
                thisArg: t,
                trueBranch: n,
                falseBranch: r
            } = _ref13;
            let o, i;
            return e ? o = n.call(t) : i = r.call(t), ge.jsxs(ge.Fragment, {
                children: [o && ge.jsx(ge.Fragment, {
                    children: o
                }), i && ge.jsx(ge.Fragment, {
                    children: i
                })]
            });
        };
    var Ar = _exports.fc = Object.freeze({
        __proto__: null,
        WidgetUtils: or,
        asPrimitiveValue: e => null == e ? e : e.valueOf(),
        getTranslation: (e, t) => {
            const n = _runtimeCoreJs.Injector.resolve(_runtimeCoreJs.ServiceNames.TranslationsService);
            return n ? n.getMessage(e, t) : t;
        },
        ifWidget: (e, t, n, r, o) => (0, _react.createElement)(jr, {
            condition: e,
            thisArg: n,
            trueBranch: r,
            falseBranch: o
        }),
        textWidget: e => {
            const t = [];
            if (0 !== e.length) {
                const n = e.split("\n");
                for (const e of n.slice(0, n.length - 1)) 0 !== e.length && t.push(e), t.push(ge.jsx("br", {}));
                const r = n[n.length - 1];
                0 !== r.length && t.push(r);
            }
            return t;
        },
        useInputValidation: _ref14 => {
            let {
                inputedValue: e,
                mandatory: t,
                variable: n,
                validationService: r,
                id: o
            } = _ref14;
            var i;
            const s = (0, _react.useRef)({
                    value: e.value,
                    validity: null !== (i = e.validity) && void 0 !== i ? i : {
                        valid: !0,
                        badInput: !1
                    }
                }),
                a = s.current.validity;
            return Pr(() => {
                if ((e => {
                        var t;
                        const n = e.value;
                        return !!rr(n) && !(null === (t = e.validity) || void 0 === t ? void 0 : t.badInput);
                    })(s.current)) {
                    if (t) return new _runtimeCoreJs.Validation.ValidationResult(!1, null == r ? void 0 : r.getMandatoryValueMessage());
                } else if (a && !a.valid || !n.isAcceptable(s.current)) return new _runtimeCoreJs.Validation.ValidationResult(!1, null == r ? void 0 : r.getInvalidValueMessage(n.type));
                return new _runtimeCoreJs.Validation.ValidationResult();
            }, {
                validationServiceProperties: {
                    validationService: r
                },
                id: o
            }), e => {
                if (!!_runtimeCoreJs.DataTypes.equals(n.value, e.value)) return !1;
                const t = !_runtimeCoreJs.DataConversion.JSConversions.isDefault(e.value),
                    r = (e => e.type === _runtimeCoreJs.DataTypes.DataTypes.Text || e.type === _runtimeCoreJs.DataTypes.DataTypes.Email || e.type === _runtimeCoreJs.DataTypes.DataTypes.PhoneNumber)(n),
                    o = !a || a.valid;
                return t || r || o;
            };
        },
        useScreenStateCache: fr,
        useTracing: br,
        useValidation: Pr,
        withBaseWebBlock: (t, r) => {
            const o = (0, _react.createRef)(),
                i = wr(t, Object.assign(Object.assign({}, r), {
                    getId: kr,
                    rootNodeReference: o
                })),
                s = (0, _react.memo)(e => {
                    const t = br();
                    if (!t) throw new Error("Web blocks must have tracing");
                    const n = (0, _react.useRef)(!1);
                    n.current || (Mr(e, !0), n.current = !0), fr({
                        _idProps: e._idProps,
                        onLoad: (t, n) => {
                            e.model.fromImmutableData(n), e.model.context.viewWasRestoredFromCache = !0, Mr(e, !0);
                        }
                    }), Pr(() => (e => {
                        var t;
                        return new _runtimeCoreJs.Validation.ValidationResult(null === (t = e.controller) || void 0 === t ? void 0 : t.validationService.validate(""));
                    })(e), {
                        isValidationAggregator: !1,
                        isWebBlockInstance: !0,
                        id: kr(e._idProps),
                        validationServiceProperties: e._validationProps
                    }), (0, _react.useMemo)(() => {
                        var n;
                        if (e.events)
                            for (const t of Object.keys(e.events)) {
                                let r = t;
                                "_" === r.charAt(0) && (r = r.substring(1));
                                const o = e.events[t];
                                null === (n = e.controller) || void 0 === n || n.registerClientAction(r, function() {
                                    for (var _len10 = arguments.length, e = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
                                        e[_key10] = arguments[_key10];
                                    }
                                    return ot(void 0, void 0, void 0, function*() {
                                        return yield o(...e);
                                    });
                                });
                            }
                        t.doWithChildSpan("initialize", t => {
                            try {
                                e.controller.fireInitialize();
                            } finally {
                                null == t || t.end();
                            }
                        });
                    }, []);
                    const r = (0, _react.useCallback)(n => {
                        var r;
                        (null !== (r = e.onReady) && void 0 !== r ? r : e => e())(() => {
                            t.doWithChildSpan("ready", e => {
                                try {
                                    n();
                                } finally {
                                    null == e || e.end();
                                }
                            });
                        });
                    }, []);
                    return e.onWillUpdate(e.model), t.doWithChildSpan("render", t => {
                        try {
                            return ge.jsx(i, Object.assign({}, e, {
                                createIdService: () => Tr(e),
                                onReady: r
                            }));
                        } finally {
                            null == t || t.end();
                        }
                    });
                }, (t, r) => {
                    if (r.previousModelData !== r.model.toImmutableData()) return !1;
                    if (!_runtimeCoreJs.ObjectExtensions.shallowEquals(t.inputs, r.inputs)) return (t => {
                        var n;
                        _runtimeCoreJs.Logger.debug("BaseWebBlock", () => `Inputs of '${kr(t._idProps)}' changed`), Mr(t, !1);
                        try {
                            null === (n = t.controller) || void 0 === n || n.fireAfterInputsChanged();
                        } finally {
                            _runtimeCoreJs.Logger.debug("BaseWebBlock", () => "InputsChanged event fired on '" + kr(t._idProps) + "'");
                        }
                    })(r), !1;
                    if (!r._dependencies && r.placeholders) return !1;
                    if (t.generationNode && !r.isGenerationUpToDate) return !1;
                    return !(!(!t._dependencies || !r._dependencies) && !_runtimeCoreJs.ObjectExtensions.arrayShallowEquals(t._dependencies, r._dependencies));
                }),
                a = e => {
                    const {
                        controller: t,
                        setModel: n,
                        modelState: o
                    } = mr(e.model, r.displayName, e.controller, Tr(e)),
                        i = Qn(!!e._dependencies),
                        a = (0, _react.useContext)(qn),
                        l = (0, _react.useRef)(void 0),
                        c = (0, _react.useContext)(Cr),
                        d = !(!a || !i) && i.generation >= a.generation;
                    (0, _react.useEffect)(() => {
                        null == c || c();
                    }, [o]);
                    return ge.jsx(Kn, {
                        ancestorGenerationNode: i,
                        children: ge.jsx(Jn, {
                            value: i,
                            children: ge.jsx(s, Object.assign({}, e, {
                                generationNode: i,
                                isGenerationUpToDate: d,
                                previousModelData: l.current,
                                onWillUpdate: e => {
                                    l.current = e.toImmutableData();
                                },
                                controller: t,
                                model: o.model,
                                setModelState: e => {
                                    n({
                                        model: e.model
                                    });
                                },
                                validateWidget: Lr
                            }))
                        })
                    });
                },
                l = ar(e => ge.jsx(pr.Provider, {
                    value: r,
                    children: ge.jsx(a, Object.assign({}, e))
                }), r),
                c = Object.assign({
                    getSpanType: e => e ? "BLOCK_DISPOSE" : "BLOCK"
                }, r),
                {
                    TraceableView: u
                } = Or(l, c),
                p = u;
            return p.getRootNodeProperties = () => {
                var e;
                return {
                    "data-block": null !== (e = i.displayName) && void 0 !== e ? e : "",
                    className: "OSBlockWidget",
                    ref: o
                };
            }, p;
        },
        withBaseWebScreen: (e, t) => {
            const n = wr(e, t),
                a = (0, _react.memo)((0, _react.forwardRef)((e, r) => {
                    var a, l, c;
                    const d = br();
                    if (!d) throw new Error("Screens must be traceable.");
                    const {
                        createIdService: p = yr,
                        _idProps: h,
                        cachedScreenState: m,
                        navigationKey: v,
                        shallSaveStateOnLeave: f,
                        isLoadingFromHistory: g,
                        isUnloading: S,
                        controller: y
                    } = e,
                    w = (0, _react.useRef)(void 0),
                        C = (0, _react.useRef)(null),
                        E = (0, _react.useRef)(0),
                        b = (0, _react.useCallback)(() => {
                            var t, n, r, o;
                            E.current = null !== (o = null === (r = null === (n = null === (t = e.model) || void 0 === t ? void 0 : t.widgetsGenerationsTree) || void 0 === n ? void 0 : n.root) || void 0 === r ? void 0 : r.generation) && void 0 !== o ? o : 0;
                        }, [e.model]);
                    (0, _react.useEffect)(() => {
                        b();
                    }), (0, _react.useEffect)(() => (w.current = _runtimeCoreJs.EventDispatcher.EventDispatcher.listenOnce(_runtimeCoreJs.EventDispatcher.EventType.NavigationStart, () => {
                        C.current && C.current.classList.remove(_runtimeCoreJs.Public.View.ActiveScreenCssClass);
                    }), () => {
                        w.current && _runtimeCoreJs.EventDispatcher.EventDispatcher.unregister(w.current);
                    }), []);
                    const x = ge.jsx(hr.Provider, {
                            value: {
                                viewName: t.displayName
                            },
                            children: ge.jsx(pr.Provider, {
                                value: t,
                                children: ge.jsx(Jn, {
                                    value: null === (l = null === (a = e.model) || void 0 === a ? void 0 : a.widgetsGenerationsTree) || void 0 === l ? void 0 : l.root,
                                    children: ge.jsx(Cr.Provider, {
                                        value: b,
                                        children: ge.jsx(n, Object.assign({}, e, {
                                            ref: C,
                                            _idProps: {
                                                service: null !== (c = null == h ? void 0 : h.service) && void 0 !== c ? c : p(),
                                                uuid: Nt
                                            },
                                            screenStateCacheOverrides: {
                                                onLoad: Ir,
                                                serializeCustomProperties: Rr
                                            }
                                        }))
                                    })
                                })
                            })
                        }),
                        N = (0, _react.useMemo)(() => ({
                            navigationKey: v,
                            shouldSave: S && f,
                            shouldLoad: g.current,
                            state: m
                        }), [v, S, f, g.current, m]);
                    return (0, _react.useEffect)(() => () => {
                        S.current = !0;
                    }), (0, _react.useMemo)(() => {
                        e.controller || d.doWithChildSpan("initialize", e => {
                            try {
                                y.fireInitialize();
                            } finally {
                                null == e || e.end();
                            }
                        });
                    }, []), e.onWillUpdate(), d.doWithChildSpan("render", t => {
                        var n, r, o;
                        try {
                            return ge.jsx(Kn, {
                                ancestorGenerationNode: null === (r = null === (n = e.model) || void 0 === n ? void 0 : n.widgetsGenerationsTree) || void 0 === r ? void 0 : r.root,
                                isGenerationUpToDate: e => e <= E.current,
                                refreshCurrentGeneration: b,
                                getScreenStateCache: () => N,
                                locale: null === (o = _runtimeCoreJs.Injector.resolve(_runtimeCoreJs.ServiceNames.LocaleService)) || void 0 === o ? void 0 : o.getCurrentLocale(),
                                children: ge.jsx(sr.Provider, {
                                    value: N,
                                    children: x
                                })
                            });
                        } finally {
                            null == t || t.end();
                        }
                    });
                }), (e, t) => e.previousModelData === t.model.toImmutableData()),
                l = Object.assign({
                    getSpanType: e => e ? "SCREEN_DISPOSE" : "SCREEN",
                    topLevelComponent: !0
                }, t),
                {
                    TraceableView: c,
                    viewSpanProvider: d
                } = Or(n => {
                    const o = br();
                    if (!o) throw new Error("Web screens must have tracing");
                    const {
                        createIdService: l = yr,
                        model: c,
                        controller: d,
                        cachedScreenState: u,
                        navigationKey: p
                    } = n, {
                        modelState: h,
                        setModel: m,
                        controller: v
                    } = mr(c, t.displayName, d, l()),
                        f = (0, _react.useRef)(void 0),
                        g = (0, _react.useRef)(!1),
                        S = (0, _react.useRef)(!!u),
                        y = (0, _react.useRef)(!1),
                        w = () => {
                            var t, r;
                            document.title = null !== (r = null === (t = e.title) || void 0 === t ? void 0 : t.call(e, n)) && void 0 !== r ? r : document.title, (() => {
                                const e = _runtimeCoreJs.Injector.resolve(_runtimeCoreJs.ServiceNames.LocaleService);
                                if (e) {
                                    const t = document.documentElement;
                                    null == t || t.setAttribute("lang", e.getCurrentLocale());
                                }
                            })(), (() => {
                                const e = _runtimeCoreJs.Injector.resolve(_runtimeCoreJs.ServiceNames.LocaleService);
                                if (e) {
                                    const t = document.body;
                                    t && (e.isCurrentLocaleRTL() ? t.classList.add("is-rtl") : t.classList.remove("is-rtl"));
                                }
                            })();
                        },
                        C = (0, _react.useCallback)(e => {
                            var t;
                            (null !== (t = n.onReady) && void 0 !== t ? t : e => e())(() => {
                                o.doWithChildSpan("ready", t => {
                                    try {
                                        e(), w(), S.current = !1, _runtimeCoreJs.ScreenStateCache.ScreenStateCache.clear(p);
                                    } finally {
                                        null == t || t.end();
                                    }
                                });
                            });
                        }, []);
                    return (0, _react.useEffect)(() => {
                        g.current ? w() : g.current = !0;
                    }), ge.jsx(a, Object.assign({}, n, {
                        previousModelData: f.current,
                        model: h.model,
                        onWillUpdate: () => {
                            f.current = h.model.toImmutableData();
                        },
                        isLoadingFromHistory: S,
                        isUnloading: y,
                        setModelState: m,
                        controller: v,
                        onReady: C,
                        validateWidget: Dr
                    }));
                }, l),
                p = c;
            return p.getRootNodeProperties = () => ({
                className: `${_runtimeCoreJs.Public.View.ActiveScreenCssClass} screen-container`
            }), p.getRootSpan = function() {
                return d.getRootSpan(...arguments);
            }, p;
        },
        withScreenStateCache: ar,
        withView: wr,
        withWidget: function(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                skipRenderWhenHidden: !0
            };
            const r = (0, _react.memo)(n => !t.skipRenderWhenHidden || void 0 === n.visible || !0 === n.visible ? ge.jsx(e, Object.assign({}, n)) : null, (e, t) => {
                var r, o;
                return !(!t._dependencies && ((e, t) => !!t.placeholders || _react.Children.count(e.children) > 0 || _react.Children.count(t.children) > 0)(e, t)) && !(e.generationNode && !t.isGenerationUpToDate) && !!_runtimeCoreJs.ObjectExtensions.arrayShallowEquals(null !== (r = e._dependencies) && void 0 !== r ? r : [], null !== (o = t._dependencies) && void 0 !== o ? o : []) && !!_runtimeCoreJs.ObjectExtensions.shallowEquals(e, t, nr) && !!_runtimeCoreJs.ObjectExtensions.shallowEquals(e.extendedProperties, t.extendedProperties);
            });
            return ar(e => {
                const t = Qn(!!e._dependencies),
                    n = (0, _react.useContext)(qn),
                    o = !(!n || !t) && t.generation >= n.generation;
                return ge.jsx(Kn, {
                    ancestorGenerationNode: t,
                    children: ge.jsx(Jn, {
                        value: t,
                        children: ge.jsx(r, Object.assign({}, e, {
                            generationNode: t,
                            isGenerationUpToDate: o
                        }))
                    })
                });
            });
        }
    });
    const Wr = _ref15 => {
            let {
                errorMessage: e,
                extraErrorMessage: t
            } = _ref15;
            return (0, _react.useEffect)(() => {
                const n = e || (() => {
                        const e = _runtimeCoreJs.ApplicationInfo.getErrorPageConfig();
                        return (null == e ? void 0 : e.messages.defaultMessage) || "There was an error processing your request.";
                    })(),
                    r = t || (() => {
                        const e = _runtimeCoreJs.ApplicationInfo.getErrorPageConfig();
                        return (null == e ? void 0 : e.extraMessage) || "";
                    })();
                _runtimeCoreJs.ErrorHandling.navigateToErrorPage(void 0, n, r);
            }, []), ge.jsx("div", {});
        },
        Fr = () => {
            const e = _runtimeCoreJs.ApplicationInfo.getErrorPageConfig(),
                t = (null == e ? void 0 : e.messages.noDefaultScreen) || "This application does not contain a default entry.";
            return ge.jsx(Wr, {
                errorMessage: t
            });
        },
        Ur = e => {
            const t = `Screen not found: ${e.location.pathname || "(none)"}`,
                n = _runtimeCoreJs.ApplicationInfo.getErrorPageConfig(),
                r = (null == n ? void 0 : n.messages.screenNotFound) || t;
            return ge.jsx(Wr, {
                errorMessage: r
            });
        },
        _r = e => {
            const {
                component: t,
                onEnter: n,
                onLeave: r
            } = e;
            return (0, _react.useEffect)(() => (n && n(), () => {
                r && r();
            }), []), t ? (0, _react.createElement)(t, e) : null;
        };
    let Hr = [];

    function Vr() {
        const e = {
            width: window.innerWidth || document.documentElement.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight
        };
        let t, n;
        if (e.width < 768) n = "phone";
        else if (e.width <= 1024) n = "tablet";
        else {
            if (!_runtimeCoreJs.ApplicationInfo.isWebApplication()) return [];
            n = "desktop";
        }
        return t = e.width > e.height ? "landscape" : "portrait", [n, t];
    }
    let zr = _runtimeCoreJs.Injector.resolve(_runtimeCoreJs.ServiceNames.DeviceHelperClassProvider) || Vr;

    function Br() {
        Hr.forEach(e => document.body.classList.remove(e)), Hr = zr(), Hr.forEach(e => document.body.classList.add(e));
    }

    function $r(n) {
        let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _runtimeCoreJs.Navigation.hasPendingReload;
        if (mt(!1), n.isShowingSplashScreen || r()) return;
        const o = _runtimeCoreJs.UrlUtils.removeQueryParametersFromUrls(_runtimeCoreJs.Navigation.getCurrentLocation().href);
        _runtimeCoreJs.Logger.debug("Root", `Navigated to: ${o}`);
        const i = _runtimeCoreJs.Application.ApplicationStorage.pendingUpgradeFeedback.get();
        i && (n.showUpgradeFeedback(i), _runtimeCoreJs.Application.ApplicationStorage.pendingUpgradeFeedback.remove());
    }
    _runtimeCoreJs.Injector.addRegistrationListener(_runtimeCoreJs.ServiceNames.DeviceHelperClassProvider, (e, t) => zr = t || Vr);
    const Gr = (0, _react.createContext)(!0);
    let Kr = null;

    function qr(e) {
        Kr = e;
    }
    const Jr = _ref16 => {
        let {
            runtime: e,
            screenLoader: t,
            children: n,
            onBeforeNavigate: r
        } = _ref16;
        var i, s;
        const a = (0, _v6ReactRouterDom.useLocation)(),
            l = (0, _v6ReactRouterDom.useNavigate)(),
            c = (0, _v6ReactRouterDom.useNavigationType)(),
            [d, u] = (0, _react.useState)(!1),
            [h, m] = (0, _react.useState)(null !== (s = null === (i = a.state) || void 0 === i ? void 0 : i.transition) && void 0 !== s ? s : new _runtimeCoreJs.Transitions.Transition("")),
            [v, f] = (0, _react.useState)(!1),
            [g, S] = (0, _react.useState)(!0),
            w = (0, _react.useRef)(!1),
            C = (0, _react.useRef)(void 0),
            E = "onorientationchange" in window ? "orientationchange" : "resize",
            b = (e, n) => ot(void 0, void 0, void 0, function*() {
                try {
                    return yield null == t ? void 0 : t.load({
                        action: n,
                        location: e,
                        navigate: l
                    }), !0;
                } catch (e) {}
                return !1;
            }),
            x = (0, _v6ReactRouterDom.useBlocker)(_ref17 => {
                let {
                    nextLocation: t,
                    historyAction: n
                } = _ref17;
                return r(e, t, n) && (C.current = e => b(t, n).then(t => {
                    var n, r;
                    return t ? null === (n = e.proceed) || void 0 === n ? void 0 : n.call(e) : null === (r = e.reset) || void 0 === r ? void 0 : r.call(e);
                })), !0;
            }),
            N = () => {
                setTimeout(() => {
                    Br();
                }, 300);
            },
            O = () => {
                u(!0), setTimeout(() => {
                    _runtimeCoreJs.EventDispatcher.EventDispatcher.dispatch({
                        type: _runtimeCoreJs.EventDispatcher.EventType.TransitionStart
                    });
                });
            };
        if (w.current || (Br(), window.addEventListener(E, N, !1)), (0, _react.useEffect)(() => (w.current = !0, v || O(), $r(e), () => {
                window.removeEventListener(E, N);
            }), []), (0, _react.useEffect)(() => {
                w.current && (O(), $r(e));
            }), (0, _react.useEffect)(() => {
                var e;
                "blocked" === x.state && (null === (e = C.current) || void 0 === e || e.call(C, x));
            }, [x]), (0, _react.useEffect)(() => {
                const e = ((e, t, n) => {
                    var r;
                    return Kr ? _runtimeCoreJs.Transitions.sanitizeTransition(Kr) : _runtimeCoreJs.Navigation.locationReachedFromHistory(Object.assign({
                        action: e
                    }, t)) ? _runtimeCoreJs.Transitions.reverseTransition(_runtimeCoreJs.Transitions.sanitizeTransition(n)) : (null === (r = t.state) || void 0 === r ? void 0 : r.transition) ? _runtimeCoreJs.Transitions.sanitizeTransition(t.state.transition) : new _runtimeCoreJs.Transitions.Transition("");
                })(c, a, h);
                m(e), f(!!e.name), u(!1);
            }, [a.key]), g) return b(a, c).then(e => {
            e && S(!1);
        }), null;
        const R = hn(h.name);
        return ge.jsx(Gr.Provider, {
            value: d,
            children: ge.jsx(Be, {
                component: "div",
                id: "transitionContainer",
                childFactory: e => (0, _react.cloneElement)(e, {
                    classNames: R,
                    timeout: v ? 300 : 0
                }),
                children: ge.jsx(Ue, {
                    classNames: R,
                    timeout: v ? 300 : 0,
                    onEnter: () => O(),
                    onExited: () => {
                        setTimeout(() => {
                            _runtimeCoreJs.EventDispatcher.EventDispatcher.dispatch({
                                type: _runtimeCoreJs.EventDispatcher.EventType.TransitionEnd,
                                args: _runtimeCoreJs.EventDispatcher.TransitionEndResult.Success
                            });
                        });
                    },
                    children: ge.jsx(_react.Fragment, {
                        children: n
                    })
                }, a.key)
            })
        });
    };
    class Qr {
        constructor(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : qr;
            this.navigate = e, this.currentRuntime = t, this.setTransition = n;
        }
        static urlToLocationDescriptor(e, t) {
            return [{
                pathname: e.path,
                search: nn.stringify(e.queryParams),
                hash: e.hash ? "#" + e.hash : ""
            }, {
                transition: t
            }];
        }
        push(e, t) {
            this.navigate(e, {
                state: {
                    user: t
                }
            });
        }
        replace(e, t) {
            this.navigate(e, {
                state: {
                    user: t
                },
                replace: !0
            });
        }
        goTo(e, t, n) {
            var r;
            const [o, i] = Qr.urlToLocationDescriptor(e, t);
            n || (null === (r = this.currentRuntime) || void 0 === r ? void 0 : r.isShowingSplashScreen) ? this.replace(o, i) : this.push(o, i);
        }
        goBack(e) {
            e && this.setTransition(e), this.navigate(-1);
        }
        goForward(e) {
            e && this.setTransition(e), this.navigate(1);
        }
        dispose(e) {}
    }
    class Xr extends Qr {
        constructor(e, t) {
            super(e, t);
        }
        goTo(e, t) {
            const [n, r] = Qr.urlToLocationDescriptor(e, t);
            this.push(n, r);
        }
    }
    const Yr = (e, t) => {
            const n = {},
                r = [],
                o = e => {
                    const i = e.getBlocks();
                    for (const e of i) o(e);
                    for (const o of t(e)) n[o] || (r.push(o), n[o] = !0);
                };
            return o(e), r;
        },
        Zr = function(t, n) {
            for (var _len11 = arguments.length, r = new Array(_len11 > 2 ? _len11 - 2 : 0), _key11 = 2; _key11 < _len11; _key11++) {
                r[_key11 - 2] = arguments[_key11];
            }
            return ot(void 0, [t, n, ...r], void 0, function(t, n) {
                let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ct;
                let i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _runtimeCoreJs.ScriptsManager.scheduleCustomJsLoading;
                let s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _runtimeCoreJs.ApplicationInfo.isWebApplication();
                return function*() {
                    const a = "#loadResources",
                        l = (c = t, Yr(c, e => e.getCssDependencies())).map(e => _runtimeCoreJs.Navigation.VersionedURL.getVersionedUrl(e));
                    var c;
                    const d = (e => Yr(e, e => e.getJsDependencies()))(t).map(e => _runtimeCoreJs.Navigation.VersionedURL.getVersionedUrl(e)),
                        u = r(l, (t, n) => _runtimeCoreJs.Logger.error(a, t, n, t instanceof Error ? t : void 0, xt.Client)),
                        v = u.triggerRemoveStyles;
                    _runtimeCoreJs.EventDispatcher.EventDispatcher.listenOnce(_runtimeCoreJs.EventDispatcher.EventType.TransitionEnd, e => {
                        e === _runtimeCoreJs.EventDispatcher.TransitionEndResult.Success && v();
                    }), yield i(d, t => _runtimeCoreJs.Logger.error(a, t, "OS-CLRT-60500", t instanceof Error ? t : void 0, xt.External), {
                        parentSpan: n
                    }), s && (yield u.loadStylesPromise);
                }();
            });
        };
    var eo, to, no, ro, oo, io, so;
    class ao {
        constructor() {
            eo.set(this, new Map()), to.set(this, []);
        }
        push(e, t) {
            const n = this.calculateKey(e);
            if (it(this, eo, "f").has(n)) throw new Error(`Component already exists for key: ${n}`);
            it(this, eo, "f").set(n, {
                key: n,
                component: t
            }), it(this, to, "f").push(n);
        }
        update(e, t) {
            const n = this.calculateKey(e);
            if (!it(this, eo, "f").has(n)) throw new Error(`Component does not exist for key: ${n}`);
            it(this, eo, "f").set(n, {
                key: n,
                component: t
            });
        }
        get(e) {
            const t = this.calculateKey(e),
                n = it(this, eo, "f").get(t);
            return null == n ? void 0 : n.component;
        }
        release(e) {
            if (0 === it(this, eo, "f").size) return;
            const t = this.calculateKey(e),
                n = it(this, to, "f").indexOf(t);
            if (void 0 === n) return;
            const r = it(this, to, "f").slice(0, n + 1);
            st(this, to, it(this, to, "f").slice(n + 1), "f");
            for (const e of r) it(this, eo, "f").delete(e);
        }
        isLast(e) {
            const t = this.calculateKey(e);
            return it(this, to, "f")[it(this, to, "f").length - 1] === t;
        }
        calculateKey(e) {
            return `${e.pathname}${e.search}${e.hash}`;
        }
    }

    function lo(e, t) {
        let {
            useCurrentLocation: n = _v6ReactRouter.useLocation
        } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return () => {
            var r;
            const o = n();
            return O.createElement(e, Object.assign(Object.assign({}, t), {
                navigationKey: null !== (r = o.key) && void 0 !== r ? r : ""
            }));
        };
    }

    function co(e) {
        return ot(this, arguments, void 0, function(_ref18) {
            let {
                componentInfo: e,
                loadModules: t = _runtimeCoreJs.RequireManager.loadModule
            } = _ref18;
            return function*() {
                if (!e) return {
                    success: !1,
                    error: "Component info is not defined."
                };
                if (void 0 === e.modelModule.importer) return {
                    success: !1,
                    error: "Model module for component is not defined."
                };
                if (void 0 === e.viewModule.importer) return {
                    success: !1,
                    error: "View module for component is not defined."
                };
                if (void 0 === e.controllerModule.importer) return {
                    success: !1,
                    error: "Controller module for component is not defined."
                };
                if (void 0 === e.webFlowControllerModule.importer) return {
                    success: !1,
                    error: "Web Flow Controller module for component is not defined."
                };
                const n = [e.modelModule.importer, e.controllerModule.importer, e.webFlowControllerModule.importer, e.viewModule.importer];
                try {
                    return {
                        success: !0,
                        modules: yield new Promise((e, r) => {
                            t(n, function() {
                                for (var _len12 = arguments.length, t = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
                                    t[_key12] = arguments[_key12];
                                }
                                return e(t);
                            }, r);
                        })
                    };
                } catch (e) {
                    return {
                        success: !1,
                        error: `Error loading component modules: ${e}`
                    };
                }
            }();
        });
    }

    function uo(_ref19) {
        let {
            cacheKey: e,
            location: t,
            modelFactory: n,
            action: o,
            isFirstNavigation: i,
            routeParams: s,
            loadScreenCache: a = _runtimeCoreJs.ScreenStateCache.ScreenStateCache.loadScreenCache,
            checkReachedFromHistory: l = _runtimeCoreJs.Navigation.locationReachedFromHistory
        } = _ref19;
        var c;
        const d = !i && l(Object.assign(Object.assign({}, t), {
            action: o
        }));
        if (!d) return {
            isNavFromHistory: d,
            isRestoredFromCache: !1,
            newModelFactory: n
        };
        const u = a(e),
            h = null === (c = null == u ? void 0 : u.components[Nt]) || void 0 === c ? void 0 : c.state,
            m = !!h,
            v = m ? function(e, t) {
                return {
                    create: n => {
                        const r = e.create(n);
                        return r.fromImmutableData(t), r;
                    }
                };
            }(n, h) : function(e, t) {
                return {
                    create: n => {
                        const r = e.create(n);
                        return r.setInputs(t), r;
                    }
                };
            }(n, s);
        return {
            isNavFromHistory: d,
            isRestoredFromCache: m,
            newModelFactory: v,
            value: u
        };
    }

    function po(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        return Object.assign(Object.assign({}, function(e) {
            const t = {};
            for (const [n, r] of Object.entries(e)) null != r && isNaN(Number(n)) && (t[n] = decodeURIComponent(r));
            return t;
        }(e)), nn.parse(t));
    }

    function ho() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        let t = arguments.length > 1 ? arguments[1] : undefined;
        if (0 !== e.length && t)
            for (const n of e) {
                const e = (0, _v6ReactRouterDom.matchPath)({
                    path: n.pathname
                }, t.pathname);
                if (e) return {
                    routeInfo: n,
                    matchedParams: po(e.params, t.search)
                };
            }
    }
    eo = new WeakMap(), to = new WeakMap();
    const mo = "ScreenLoader";
    class vo {
        get isFirstNavigation() {
            return it(this, ro, "f");
        }
        constructor() {
            let {
                runtime: e,
                appRoutes: t,
                splashRoute: n,
                componentCache: r
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            no.set(this, void 0), ro.set(this, !0), oo.set(this, void 0), io.set(this, void 0), so.set(this, void 0), st(this, oo, e, "f"), st(this, so, null != t ? t : [], "f"), st(this, io, n, "f"), st(this, no, null != r ? r : new ao(), "f");
        }
        getLoadedComponent(e) {
            return it(this, no, "f").get(e);
        }
        freeLoadedComponent(e) {
            it(this, no, "f").release(e);
        }
        load(t) {
            return ot(this, arguments, void 0, function(_ref20) {
                var _this2 = this;
                let {
                    location: t,
                    action: n,
                    navigate: r,
                    loadModules: i = _runtimeCoreJs.RequireManager.loadModule,
                    findRoute: s = ho,
                    loadComponentModules: a = co,
                    loadScreenStateCache: l = uo,
                    loadScreenResources: c = Zr,
                    createScreenWrapper: d = lo,
                    dispatchEvent: u = _runtimeCoreJs.EventDispatcher.EventDispatcher.dispatch
                } = _ref20;
                return function*() {
                    var p, h;
                    const m = s((null === (p = it(_this2, oo, "f")) || void 0 === p ? void 0 : p.shouldRenderSplashScreen()) && it(_this2, io, "f") ? [it(_this2, io, "f")] : it(_this2, so, "f"), t);
                    if (!m) return;
                    const {
                        component: v,
                        lazyComponentInfo: f
                    } = m.routeInfo;
                    if (v) return v;
                    it(_this2, no, "f").push(t);
                    const g = yield a({
                        componentInfo: f,
                        loadModules: i
                    });
                    if (!g.success) throw _runtimeCoreJs.Logger.log(mo, g.error, xt.Internal), new Error("Error while loading application routes");
                    const [S, y, w, E] = g.modules,
                        b = new Qr(r, it(_this2, oo, "f")),
                        x = new Xr(r, it(_this2, oo, "f")),
                        N = E.getRootSpan(!0);
                    null == N || N.activate();
                    const O = l({
                            action: n,
                            location: t,
                            modelFactory: S,
                            routeParams: m.matchedParams,
                            isFirstNavigation: it(_this2, ro, "f"),
                            cacheKey: it(_this2, no, "f").calculateKey(t)
                        }),
                        R = yield y.initialize({
                            viewName: m.routeInfo.screenName,
                            navigatedFromHistory: O.isNavFromHistory,
                            viewWasRestoredFromCache: O.isRestoredFromCache
                        }, O.newModelFactory, w.default, b, x, N);
                    if (!R.permissionsOk) throw u({
                        type: _runtimeCoreJs.EventDispatcher.EventType.TransitionEnd,
                        args: _runtimeCoreJs.EventDispatcher.TransitionEndResult.Failure
                    }), new Error("Invalid Permissions");
                    if (!it(_this2, no, "f").isLast(t)) throw new Error("No longer on screen");
                    if (!R.model || !R.controller) throw new Error("Error loading screen dependencies");
                    if (m.routeInfo.screenName !== R.controller.constructor.activeScreen.viewName) throw new Error("Screen is no longer active");
                    O.value || _runtimeCoreJs.Logger.debug(mo, "No screen state cache found.");
                    const I = d(E, {
                        controller: R.controller,
                        model: R.model,
                        cachedScreenState: O.value,
                        shallSaveStateOnLeave: null !== (h = null == f ? void 0 : f.shallSaveStateOnLeave) && void 0 !== h && h
                    });
                    return yield c(E, N), st(_this2, ro, !1, "f"), it(_this2, no, "f").update(t, I), I;
                }();
            });
        }
    }
    no = new WeakMap(), ro = new WeakMap(), oo = new WeakMap(), io = new WeakMap(), so = new WeakMap();
    const fo = "Router",
        go = (e, t, n, r) => e.map(e => e.component ? (_ref21 => {
            let {
                pathname: e,
                component: t
            } = _ref21;
            return {
                path: e,
                Component: t
            };
        })(e) : ((e, t, n, r) => ({
            path: e.pathname,
            Component: e => {
                const o = (0, _v6ReactRouterDom.useLocation)(),
                    i = t.getLoadedComponent(o);
                return console.log(`Rendering ${o.key} with component loaded from key ${o.key}: ${i}`), ge.jsx(_r, Object.assign({
                    onEnter: n,
                    onLeave: () => {
                        t.freeLoadedComponent(o), r && r();
                    },
                    component: null != i ? i : void 0
                }, e));
            }
        }))(e, t, n, r)),
        So = {
            currentAge: new _runtimeCoreJs.StorageProvider.StorageObject(_runtimeCoreJs.StorageProvider.StorageType.Session, "RouterHistoryAge", 0)
        };

    function yo(e, t, n) {
        var r, i, s, a, l, c;
        const d = null !== (r = So.currentAge.get()) && void 0 !== r ? r : 0,
            u = Dn(null !== (s = null === (i = t.state) || void 0 === i ? void 0 : i.age) && void 0 !== s ? s : 0, t.hash, n, d);
        t.state = Object.assign(Object.assign({}, null !== (a = t.state) && void 0 !== a ? a : {}), {
            age: u
        });
        const h = Pn(null !== (l = t.state.age) && void 0 !== l ? l : 0, n, d),
            m = function(e, t) {
                let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _runtimeCoreJs.Navigation.onBeforeNavigate;
                return !!n(e, t) && (mt(!0), !0);
            }(Object.assign(Object.assign({}, t), {
                action: n
            }), h);
        return !!m && (h && !t.key ? (_runtimeCoreJs.Navigation.navigateBack(null), e.exit()) : (So.currentAge.set(null !== (c = t.state.age) && void 0 !== c ? c : 0), _runtimeCoreJs.EventDispatcher.EventDispatcher.dispatch({
            type: _runtimeCoreJs.EventDispatcher.EventType.NavigationStart,
            args: t
        }), !0));
    }
    const wo = function(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _runtimeCoreJs.ApplicationInfo.useESM;
            let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _runtimeCoreJs.ApplicationInfo.getScreensDefinition;
            var o;
            const i = {
                shallSaveStateOnLeave: e,
                viewModule: {
                    name: t.viewModuleName
                },
                modelModule: {
                    name: t.modelModuleName
                },
                controllerModule: {
                    name: t.controllerModuleName
                },
                webFlowControllerModule: {
                    name: t.webFlowControllerModuleName
                }
            };
            if (n()) {
                const e = null === (o = r()) || void 0 === o ? void 0 : o.find(e => e.screenKey === t.screenKey);
                e && (i.viewModule.importer = e.viewModuleImporter, i.modelModule.importer = e.modelModuleImporter, i.controllerModule.importer = e.controllerModuleImporter, i.webFlowControllerModule.importer = e.webFlowControllerModuleImporter), i.useESM = !0;
            }
            return i;
        },
        Co = function() {
            let {
                getModules: t = _runtimeCoreJs.ApplicationInfo.getModules,
                getHomeModuleDefinition: n = _runtimeCoreJs.ApplicationInfo.getHomeModuleDefinition,
                getBasePath: r = _runtimeCoreJs.ApplicationInfo.getBasePath
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            _runtimeCoreJs.Logger.debug(fo, "Creating application routes.");
            const o = [],
                i = t(),
                s = r().replace(/\/$/, "");
            for (const t in i)
                if (i.hasOwnProperty(t)) {
                    const r = i[t];
                    if (r === n()) {
                        const t = r.homeScreenName ? _runtimeCoreJs.ApplicationInfo.getScreenDefinitionFromScreenName(r, r.homeScreenName) : void 0,
                            n = t ? {
                                pathname: s,
                                forDefaultPath: !0,
                                screenName: t.screenName,
                                lazyComponentInfo: wo(!0, t)
                            } : {
                                pathname: s,
                                forDefaultPath: !0,
                                screenName: "no-default-screen",
                                component: Fr
                            };
                        o.push(n), _runtimeCoreJs.Logger.debug(fo, `Created default application route for ${n.pathname}`), o.push(...r.screens.map(e => ({
                            pathname: `${s}/${e.screenUrl}`,
                            forDefaultPath: !1,
                            screenName: e.screenName,
                            lazyComponentInfo: wo(!0, e)
                        })));
                    }
                }
            return o;
        },
        Eo = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _runtimeCoreJs.ApplicationInfo.getBasePath;
            return {
                path: `${e().replace(/\/$/, "")}/${_runtimeCoreJs.Authentication.LOGIN_REDIRECT_PATH}`,
                Component: () => ge.jsx(tn, {
                    resumeAction: _runtimeCoreJs.Authentication.resumeLogin
                })
            };
        },
        bo = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _runtimeCoreJs.ApplicationInfo.getBasePath;
            return {
                path: `${e().replace(/\/$/, "")}/${_runtimeCoreJs.Authentication.LOGOUT_REDIRECT_PATH}`,
                Component: () => ge.jsx(tn, {
                    resumeAction: _runtimeCoreJs.Authentication.resumeLogout
                })
            };
        };
    var xo = _exports.routerV6 = Object.freeze({
        __proto__: null,
        load: function(t, n) {
            let {
                render: r = B.render,
                getHomeModuleDefinition: o = _runtimeCoreJs.ApplicationInfo.getHomeModuleDefinition,
                createRouter: i = _v6ReactRouterDom.createBrowserRouter,
                getAppRouteInfosMethod: s = Co,
                getBasePath: a = _runtimeCoreJs.ApplicationInfo.getBasePath,
                makeScreenLoader: l = function() {
                    for (var _len13 = arguments.length, e = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
                        e[_key13] = arguments[_key13];
                    }
                    return new vo(...e);
                }
            } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var c;
            _runtimeCoreJs.Logger.debug(fo, "Loading Router.");
            const d = o();
            if (!d) throw new Error("No Home Module definition was found.");
            const u = s(),
                h = _runtimeCoreJs.ApplicationInfo.getScreenDefinitionFromScreenName(d, null !== (c = d.splashScreenName) && void 0 !== c ? c : "");
            let v;
            h && (v = {
                pathname: "*",
                forDefaultPath: !1,
                screenName: h.screenName,
                lazyComponentInfo: wo(!1, h)
            });
            const f = l({
                    runtime: t,
                    appRoutes: u,
                    splashRoute: v
                }),
                g = i([Eo(a), bo(a), {
                    path: "/",
                    element: ge.jsx(Jr, {
                        runtime: t,
                        screenLoader: f,
                        onBeforeNavigate: yo,
                        children: ge.jsx(_v6ReactRouterDom.Outlet, {})
                    }),
                    children: [...go(u, f, () => {
                        t.shouldRenderSplashScreen() && (t.isShowingSplashScreen = !0);
                    }, () => {
                        t.shouldRenderSplashScreen() && (t.isShowingSplashScreen = !1);
                    }), {
                        path: "*",
                        Component: Ur
                    }]
                }]);
            _runtimeCoreJs.Navigation.setNavigationCallbacks(new Qr(g.navigate, t)), r(ge.jsx(ft, {
                onError: e => {
                    t.handleError(e);
                },
                children: ge.jsx(_v6ReactRouterDom.RouterProvider, {
                    router: g
                })
            }), document.getElementById("reactContainer"), () => {
                _runtimeCoreJs.Performance.end("Router load triggered render"), "function" == typeof n && n();
            });
        }
    });
    const No = _exports.Version = "6.5.10";
    _runtimeCoreJs.VersionDefinition.registerPackage("client-runtime-view-framework-react", No);
});