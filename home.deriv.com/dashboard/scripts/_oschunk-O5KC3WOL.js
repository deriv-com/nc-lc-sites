import {
    a as ve,
    b as ii,
    c as be,
    d as we,
    e as J,
    f as ye,
    g as S,
    h as Se,
    j as G,
    k as D,
    l as U,
    p as $t,
    u as zt
} from "./_oschunk-NVHFAAS2.js";
import {
    K as Pt,
    c as a,
    f as _t,
    h as pe,
    j as fe,
    l as ge,
    p as me,
    q as qt,
    w as O,
    y as it
} from "./_oschunk-DFKJJKI4.js";
var P = _t(ve()),
    L = _t(ve()),
    He = _t(ii());
var ni = (0, L.forwardRef)((n, t) => {
        let {
            tag: e,
            children: i
        } = n, r = L.createElement.bind(null, e);
        if (r) {
            let s = {
                "data-advancedhtml": ""
            };
            return D.fillWithBuiltinProperties(s, t, n), r(s, i)
        }
        return null
    }),
    qi = U(ni),
    ri = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
    Ue = {
        exports: {}
    },
    Lt = {};
var Ce = Object.getOwnPropertySymbols,
    si = Object.prototype.hasOwnProperty,
    oi = Object.prototype.propertyIsEnumerable;

function ai(n) {
    if (n == null) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(n)
}
a(ai, "toObject");

function li() {
    try {
        if (!Object.assign) return !1;
        var n = new String("abc");
        if (n[5] = "de", Object.getOwnPropertyNames(n)[0] === "5") return !1;
        for (var t = {}, e = 0; e < 10; e++) t["_" + String.fromCharCode(e)] = e;
        var i = Object.getOwnPropertyNames(t).map(function(s) {
            return t[s]
        });
        if (i.join("") !== "0123456789") return !1;
        var r = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(s) {
            r[s] = s
        }), Object.keys(Object.assign({}, r)).join("") === "abcdefghijklmnopqrst"
    } catch (s) {
        return !1
    }
}
a(li, "shouldUseNative");
li();
var ci = L.default,
    _e = 60103;
Lt.Fragment = 60107;
typeof Symbol == "function" && Symbol.for && (Yt = Symbol.for, _e = Yt("react.element"), Lt.Fragment = Yt("react.fragment"));
var Yt, di = ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    hi = Object.prototype.hasOwnProperty,
    ui = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function qe(n, t, e) {
    var i, r = {},
        s = null,
        o = null;
    e !== void 0 && (s = "" + e), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (i in t) hi.call(t, i) && !ui.hasOwnProperty(i) && (r[i] = t[i]);
    if (n && n.defaultProps)
        for (i in t = n.defaultProps, t) r[i] === void 0 && (r[i] = t[i]);
    return {
        $$typeof: _e,
        type: n,
        key: s,
        ref: o,
        props: r,
        _owner: di.current
    }
}
a(qe, "q");
Lt.jsx = qe;
Lt.jsxs = qe;
Ue.exports = Lt;
var v = Ue.exports,
    pi = (0, L.forwardRef)((n, t) => {
        let {
            confirmationMessage: e,
            onClick: i,
            style: r,
            isDefault: s,
            enabled: o,
            children: h
        } = n, y = {
            "data-button": "",
            className: r,
            type: s ? "submit" : "button",
            disabled: !o,
            onClick: a(b => {
                b.preventDefault(), b.stopPropagation();
                let C = a(() => i == null ? void 0 : i(), "onClickAction"),
                    j = a(() => t.current, "getHtmlNode");
                if (e && e.length) {
                    let H = navigator.notification;
                    H ? H.confirm(e, _ => {
                        _ === 1 && D.executeWithActiveClassOn(C, j)
                    }, "") : window.confirm(e) && D.executeWithActiveClassOn(C, j)
                } else D.executeWithActiveClassOn(C, j)
            }, "handleClick")
        };
        return D.fillWithBuiltinProperties(y, t, n), v.jsx("button", Object.assign({}, y, {
            children: h
        }))
    }),
    $i = U(pi);

function xe(n, t) {
    var e = {};
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && t.indexOf(i) < 0 && (e[i] = n[i]);
    if (n != null && typeof Object.getOwnPropertySymbols == "function")
        for (var r = 0, i = Object.getOwnPropertySymbols(n); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[r]) && (e[i[r]] = n[i[r]]);
    return e
}
a(xe, "__rest");

function N(n, t, e, i) {
    var r = arguments.length,
        s = r < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, e) : i,
        o;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(n, t, e, i);
    else
        for (var h = n.length - 1; h >= 0; h--)(o = n[h]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, e, s) : o(t, e)) || s);
    return r > 3 && s && Object.defineProperty(t, e, s), s
}
a(N, "__decorate");

function fi(n, t, e, i) {
    function r(s) {
        return s instanceof e ? s : new e(function(o) {
            o(s)
        })
    }
    return a(r, "adopt"), new(e || (e = Promise))(function(s, o) {
        function h(b) {
            try {
                y(i.next(b))
            } catch (C) {
                o(C)
            }
        }
        a(h, "fulfilled");

        function m(b) {
            try {
                y(i.throw(b))
            } catch (C) {
                o(C)
            }
        }
        a(m, "rejected");

        function y(b) {
            b.done ? s(b.value) : r(b.value).then(h, m)
        }
        a(y, "step"), y((i = i.apply(n, t || [])).next())
    })
}
a(fi, "__awaiter");
var le = class le extends S.InputWithVariableWidget {
    constructor() {
        super(...arguments), this.selectedValue = null
    }
    syncSelectedValueWithProps() {
        this.selectedValue = null;
        let t = !1;
        P.Children.forEach(this.props.children, e => {
            t = t || e && e.props && O.equals(this.props.variable.value, e.props.value)
        }), this.selectedValue = t ? this.props.variable.value : null
    }
    componentDidMount() {
        this.syncSelectedValueWithProps()
    }
    componentDidUpdate() {
        this.syncSelectedValueWithProps()
    }
    updateValue(t) {
        O.equals(this.props.variable.value, t) || (this.selectedValue = t, this.props.variable.value = t, this.props.onChange && this.executeAfterPaint(() => {
            this.props.onChange()
        }))
    }
    get variable() {
        return this.props.variable
    }
    get htmlElement() {
        return this.getHTMLNode()
    }
    get isMandatory() {
        return this.props.mandatory
    }
    get inputedValue() {
        return this.selectedValue
    }
    render() {
        let t = this.getDataAttribute(),
            e = P.Children.map(this.props.children, (r, s) => (r && r.props && (r = P.cloneElement(r, Object.assign({
                isSelected: O.equals(this.props.variable.value, r.props.value),
                enabled: r.props.enabled && this.props.enabled,
                updateValueInParent: a(o => {
                    this.updateValue(o)
                }, "updateValueInParent"),
                key: s
            }, this.getAdditionalPropsToChild()))), r)),
            i = {
                [t]: "",
                className: this.props.style,
                role: "radiogroup",
                "aria-activedescendant": this.selectedValue
            };
        return this.fillWithBuiltinProperties(i), v.jsxs("div", Object.assign({}, i, {
            children: [v.jsx("div", {
                children: e
            }), this.createValidationElement()]
        }))
    }
};
a(le, "AbstractButtonGroup");
var Nt = le,
    nt, Ee = (nt = class extends Nt {
        getAdditionalPropsToChild() {
            return {}
        }
        getDataAttribute() {
            return "data-button-group"
        }
    }, a(nt, "ButtonGroup"), nt);
Ee = N([S.WidgetSpec], Ee);
var gi = (0, L.forwardRef)((n, t) => {
        let {
            value: e,
            style: i,
            enabled: r,
            isSelected: s,
            children: o
        } = n, h = a(y => {
            D.executeWithActiveClassOn(() => n.updateValueInParent(e), () => t == null ? void 0 : t.current)
        }, "handleClick"), m = {
            "data-button-group-item": "",
            className: i + (s ? " button-group-selected-item" : ""),
            disabled: !r,
            "aria-checked": `${s}`,
            role: "radio",
            onClick: h
        };
        return D.fillWithBuiltinProperties(m, t, n), v.jsx("button", Object.assign({}, m, {
            children: o
        }))
    }),
    zi = U(gi),
    mi = (0, L.forwardRef)((n, t) => {
        var e;
        let {
            variable: i,
            enabled: r,
            style: s,
            onChange: o
        } = n, [h, m] = $t({
            widgetProps: n
        });
        h.current = i, m.current = {
            value: i.value,
            validity: (e = t.current) === null || e === void 0 ? void 0 : e.validity
        };
        let b = {
            "data-checkbox": "",
            className: s,
            disabled: !r,
            type: "checkbox",
            onChange: a(C => {
                i.value = C.currentTarget.checked, o && D.executeAfterPaint(() => {
                    D.executeWithActiveClassOn(o, () => t.current)
                })
            }, "handleChange"),
            onClick: a(C => C.stopPropagation(), "onClick"),
            checked: i.value
        };
        return D.fillWithBuiltinProperties(b, t, n), D.fillWithValidationProperties(b, n), v.jsxs("span", {
            children: [v.jsx("input", Object.assign({}, b)), v.jsx(zt, Object.assign({}, n))]
        })
    }),
    Yi = U(mi, {
        isValidationWidget: !0
    }),
    rt, Ae = (rt = class extends Nt {
        getAdditionalPropsToChild() {
            return {
                groupName: this.getId()
            }
        }
        getDataAttribute() {
            return "data-radio-group"
        }
    }, a(rt, "RadioGroup"), rt);
Ae = N([S.WidgetSpec], Ae);
var st, Te = (st = class extends S.Widget {
    handleClick() {
        this.executeWithActiveClassOn(() => this.props.updateValueInParent(this.props.value))
    }
    render() {
        let t = this.getId() + "-input",
            e = {
                "data-radio-button": ""
            },
            i = {
                type: "radio",
                id: t,
                className: this.props.style,
                name: this.props.groupName,
                value: it.JSConversions.convertTo(this.props.value, O.DataTypes.Text),
                hidden: !this.props.visible,
                disabled: !this.props.enabled,
                checked: this.props.isSelected,
                onChange: a(() => this.handleClick(), "onChange")
            },
            r = {
                htmlFor: t
            };
        return this.fillWithBuiltinProperties(e), v.jsxs("div", Object.assign({}, e, {
            children: [v.jsx("input", Object.assign({}, i)), v.jsx("label", Object.assign({}, r, {
                children: this.props.children
            }))]
        }))
    }
}, a(st, "RadioButton"), st);
Te = N([S.WidgetSpec], Te);
var Gt, ot, Pe = Gt = (ot = class extends S.Widget {
    static toHtmlAlign(t) {
        switch (t) {
            case 2:
                return "center";
            case 1:
                return "left";
            case 3:
                return "right";
            case 0:
                return;
            default:
                return
        }
    }
    serializeCustomStateProperties() {
        return G.serializeScrollProperties(this.getHTMLNode())
    }
    loadCustomStateProperties(t) {
        G.loadScrollProperties(this.getHTMLNode(), t)
    }
    get skipRenderWhenHidden() {
        return !1
    }
    render() {
        let t = null;
        if (this.props.visible) {
            let i = {
                    textAlign: Gt.toHtmlAlign(this.props.align),
                    cursor: this.props.extendedEvents && this.props.extendedEvents.onClick ? "pointer" : void 0
                },
                r = {
                    "data-container": "",
                    className: this.props.style,
                    style: i
                };
            this.fillWithBuiltinProperties(r), t = P.createElement(J.HtmlTags.div, r, this.props.children)
        }
        return !!0 && this.props.animate ? P.createElement(we, {}, t) : t
    }
}, a(ot, "Container"), ot);
Pe = Gt = N([S.WidgetSpec], Pe);
var E, at, k = E = (at = class extends S.InputWithVariableWidget {
    constructor(t, e) {
        super(t, e), this.selectedValue = null, this.state = {
            listVisible: !1,
            position: {
                left: "0px",
                top: "0px",
                width: "0px",
                height: "0px"
            }
        }
    }
    select(t) {
        this.variable.value === t ? this.hide() : (this.variable.value = t, this.selectedValue = t, this.setState({
            listVisible: !1
        }), this.props.onChange && this.props.onChange())
    }
    get variable() {
        return this.props.variable
    }
    get htmlElement() {
        return this.element
    }
    get isMandatory() {
        return this.props.mandatory
    }
    get inputedValue() {
        return this.isValueInList(this.selectedValue) ? this.selectedValue : null
    }
    get inputedValueValidity() {
        return {
            valid: this.isValueInList(this.selectedValue),
            badInput: !1
        }
    }
    componentDidMount() {
        this.setVariable(), this.element = this.getHTMLNode(), this.updateState(), this.scrollIntoSelectedElement()
    }
    componentDidUpdate() {
        var t, e;
        (e = (t = this.props).onComponentDidUpdate) === null || e === void 0 || e.call(t), this.setVariable(), this.updateState(), this.scrollIntoSelectedElement()
    }
    isValueInList(t) {
        if (this.props.list && this.props.list.length > 0)
            for (let e = 0; e < this.props.list.length; e++) {
                let i = this.props.values(this.props.list.getItem(e));
                if (O.equals(i, t)) return !0
            }
        return !1
    }
    setVariable() {
        if (!(!this.props.list || this.props.list.length === 0 || this.isValueInList(this.variable.value)))
            if (this.isEmptyValueDefined()) this.selectedValue = this.variable.value;
            else {
                let t = this.props.values(this.props.list.getItem(0));
                O.equals(t, this.variable.value) || (this.variable.value = t, this.props.onChange && this.props.onChange())
            }
    }
    show() {
        this.offsetLeft = this.htmlElement.getBoundingClientRect().left, this.setState({
            listVisible: !0
        })
    }
    hide() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        t && t.stopPropagation(), this.setState({
            listVisible: !1
        })
    }
    getOffset(t) {
        let e = window.pageYOffset,
            i = window.pageXOffset,
            r = t.getBoundingClientRect(),
            s = Math.round(r.left + i),
            o = Math.round(r.right + i),
            h = Math.round(r.top + e),
            m = Math.round(r.bottom + e);
        return {
            left: s,
            right: o,
            top: h,
            bottom: m
        }
    }
    updateState() {
        let t = this.getHTMLNode(),
            e = t.childNodes[0],
            i = e.childNodes[0],
            r = t.childNodes[1];
        if (r || (t.classList.remove(E.DropdownExpandedDown), t.classList.remove(E.DropdownExpandedUp), t.classList.remove(E.DropdownExpanded)), t && e && r && i) {
            let s = {
                    left: "",
                    top: "",
                    width: "",
                    height: ""
                },
                o = window.pageYOffset,
                h = window.pageXOffset,
                m = this.getOffset(i),
                y = this.getOffset(e),
                b = m.left,
                C = m.right,
                j = y.top,
                H = y.bottom,
                _ = r.getBoundingClientRect(),
                B = Math.round(_.height),
                Y = Math.round(_.width),
                q = o + window.innerHeight,
                l = (b + C) / 2,
                c, u;
            window.innerWidth <= E.SmartphonePortraitWidth ? (c = window.innerWidth - 2 * E.PopupBoxMargin, s.width = Math.round(c) + "px", u = h + E.PopupBoxMargin) : (c = Y, this.state.listVisible ? u = this.offsetLeft : u = Math.max(h, l - c / 2));
            let d, p, f = document.querySelector("[data-popup]"),
                g = f ? f.getBoundingClientRect() : null,
                w = g ? g.top : o;
            j - w > q - H ? (t.classList.add(E.DropdownExpanded, E.DropdownExpandedUp), t.classList.remove(E.DropdownExpandedDown), d = j - B, d < w - E.PopupBoxMargin && (d = w + E.PopupBoxMargin, p = j - w - E.PopupBoxMargin, s.height = Math.round(p) + "px")) : (t.classList.add(E.DropdownExpanded, E.DropdownExpandedDown), t.classList.remove(E.DropdownExpandedUp), d = H, d + B > q - E.PopupBoxMargin && (p = q - H - E.PopupBoxMargin, s.height = Math.round(p) + "px")), s.left = Math.round(u) + "px", s.top = Math.round(d) + "px", (this.state.position.left !== s.left || this.state.position.top !== s.top || this.state.position.width !== s.width || this.state.position.height !== s.height && s.height !== "") && this.setState({
                position: s
            })
        }
    }
    isEmptyValueDefined() {
        return this.props.emptyValue && this.props.emptyValue.length > 0
    }
    prepareDropdownContainerAttributes() {
        let t = {
            "data-dropdown": "",
            className: E.DropdownContainer + " " + this.props.style
        };
        return this.fillWithBuiltinProperties(t), t
    }
    prepareDropdownDisplayAttributes() {
        return {
            className: E.DropdownDisplay + (this.props.enabled ? "" : " " + E.DropdownDisabled),
            onClick: a(e => {
                e.stopPropagation(), this.props.enabled && this.show()
            }, "onClick")
        }
    }
    renderEmptyValue() {
        let t = null,
            e = null;
        if (this.isEmptyValueDefined()) {
            let i = this.isValueInList(this.variable.value),
                r = v.jsx("span", {
                    children: this.props.emptyValue
                }),
                s = {
                    className: `${E.DropdownPopUpRow} ${E.DropdownEmptyValueRow} ${i?"":E.DropdownPopUpRowSelected}`,
                    onClick: a(o => {
                        let h = it.JSConversions.convertTo(null, this.variable.type);
                        this.variable.value = h, this.selectedValue = h, this.props.onChange && this.props.onChange(), this.setState({
                            listVisible: !1
                        })
                    }, "onClick")
                };
            e = v.jsx("div", Object.assign({}, s, {
                children: r
            })), i || (t = r)
        }
        return {
            selectedElement: t,
            emptyValueItem: e
        }
    }
    renderDropdownList(t) {
        let e = null,
            i = null,
            r = {
                className: E.DropdownList,
                style: this.state.position
            };
        return e = v.jsx("div", Object.assign({}, r, {
            children: v.jsxs("div", {
                className: E.ScrollableList + " " + E.ScrollableListWithScroll,
                children: [t, this.props.placeholders && this.props.placeholders.content.render(this, this.props.list, (s, o) => {
                    let h = null;
                    h = this.props.values(this.props.list.getItem(o));
                    let m = {
                        onClick: a(y => this.select(h), "onClick"),
                        className: E.DropdownPopUpRow
                    };
                    return O.equals(h, this.variable.value) && (i = s, this.selectedValue = this.variable.value, m.className = m.className + " " + E.DropdownPopUpRowSelected), v.jsx("div", Object.assign({}, m, {
                        children: s
                    }))
                })]
            })
        })), {
            list: e,
            selectedElement: i
        }
    }
    scrollIntoSelectedElement() {
        let t = this.getHTMLNode().childNodes[1];
        if (t) {
            let e = t.getElementsByClassName(E.DropdownPopUpRowSelected)[0];
            if (e) {
                let i = this.getScrollParent(e, t);
                i && (t === i || t.contains(i)) && (i.scrollTop = e.offsetTop)
            }
        }
    }
    getScrollParent(t, e) {
        return t === null ? null : t.scrollHeight > t.clientHeight ? t : t === e ? null : this.getScrollParent(t.parentElement, e)
    }
    renderDropdownBackground() {
        if (this.state.listVisible) {
            let t = {
                width: "100%",
                height: "100%",
                position: "fixed",
                top: "0px",
                left: "0px"
            };
            return v.jsx("div", {
                className: E.DropdownBackgroundWindow,
                style: t,
                onClick: a(i => this.hide(i), "onClick")
            })
        } else return null
    }
    render() {
        let t = this.renderEmptyValue(),
            e = this.renderDropdownList(t ? t.emptyValueItem : null),
            i = this.prepareDropdownDisplayAttributes(),
            r = v.jsx("div", Object.assign({}, i, {
                children: v.jsx("div", {
                    className: E.DropdownDisplayContent,
                    children: e.selectedElement ? e.selectedElement : t ? t.selectedElement : null
                })
            }));
        return v.jsxs("div", Object.assign({}, this.prepareDropdownContainerAttributes(), {
            children: [r, this.state.listVisible ? e.list : null, this.renderDropdownBackground(), this.createValidationElement()]
        }))
    }
}, a(at, "DropdownCustom"), at);
k.SmartphonePortraitWidth = 420;
k.PopupBoxMargin = 10;
k.DropdownList = "dropdown-list";
k.DropdownContainer = "dropdown-container";
k.DropdownDisplay = "dropdown-display";
k.DropdownDisplayContent = "dropdown-display-content";
k.DropdownDisabled = "dropdown-disabled";
k.DropdownPopUpRow = "dropdown-popup-row";
k.DropdownPopUpRowSelected = "dropdown-popup-row-selected";
k.DropdownEmptyValueRow = "drowpdown-empty-value-row";
k.DropdownBackgroundWindow = "dropdown-background-window";
k.ScrollableList = "scrollable-list";
k.ScrollableListWithScroll = "scrollable-list-with-scroll";
k.DropdownExpanded = "dropdown-expanded";
k.DropdownExpandedUp = "dropdown-expanded-up";
k.DropdownExpandedDown = "dropdown-expanded-down";
k = E = N([S.WidgetSpec], k);
var Q, lt, Ct = Q = (lt = class extends S.InputWithVariableWidget {
    constructor(t, e) {
        super(t, e), this.selectedValue = null
    }
    get variable() {
        return this.props.variable
    }
    get isMandatory() {
        return this.props.mandatory
    }
    get inputedValue() {
        return this.isValueInList(this.selectedValue) ? this.selectedValue : null
    }
    get inputedValueValidity() {
        return {
            valid: this.isValueInList(this.selectedValue),
            badInput: !1
        }
    }
    componentDidMount() {
        this.setVariable()
    }
    componentDidUpdate() {
        this.setVariable()
    }
    isValueInList(t) {
        if (this.props.list && this.props.list.length > 0)
            for (let e = 0; e < this.props.list.length; e++) {
                let i = this.props.values(this.props.list.getItem(e));
                if (O.equals(i, t)) return !0
            }
        return !1
    }
    setVariable() {
        if (!(!this.props.list || this.props.list.length === 0 || this.isValueInList(this.variable.value)))
            if (this.isEmptyValueDefined()) this.selectedValue = this.variable.value;
            else {
                let t = this.props.values(this.props.list.getItem(0));
                O.equals(t, this.variable.value) || (this.variable.value = t, this.props.onChange && this.props.onChange())
            }
    }
    isEmptyValueDefined() {
        return this.props.emptyValue && this.props.emptyValue.length > 0
    }
    getSelectedValueAndOptions() {
        var t, e;
        let i = 0,
            r = [];
        if (this.isEmptyValueDefined() && (i = Q.EmptyValue, r.push(v.jsx("option", {
                value: Q.EmptyValue,
                children: this.props.emptyValue
            }, Q.EmptyValue))), this.props.list && this.props.list.length > 0)
            for (let s = 0; s < this.props.list.length; s++) {
                let o = this.props.list.getItem(s);
                O.equals(this.variable.value, this.props.values(o)) && (i = s, this.selectedValue = this.variable.value);
                let h = it.JSConversions.convertTo((e = (t = this.props).labels) === null || e === void 0 ? void 0 : e.call(t, o), O.DataTypes.Text);
                r.push(v.jsx("option", {
                    value: s,
                    children: h
                }, s))
            }
        return {
            selectedValue: i,
            options: r
        }
    }
    handleChange(t) {
        let e = parseInt(t.target.value, 10),
            i = e >= 0 ? this.props.values(this.props.list.getItem(e)) : it.JSConversions.convertTo(null, this.variable.type);
        this.variable.value = i, this.selectedValue = i, this.props.onChange && this.props.onChange()
    }
    render() {
        let t = {
                id: this.getId() + "-container",
                className: Q.DropdownContainer + (this.props.enabled ? "" : " " + Q.DropdownDisabled),
                "data-dropdown": ""
            },
            e = {
                className: Q.DropdownDisplay + " " + this.props.style,
                onChange: this.handleChange.bind(this),
                disabled: !this.props.enabled,
                required: this.props.mandatory,
                "aria-disabled": !this.props.enabled
            };
        this.fillWithBuiltinProperties(t);
        let {
            selectedValue: i,
            options: r
        } = this.getSelectedValueAndOptions(), {
            style: s
        } = t;
        return v.jsxs("div", Object.assign({}, t, {
            style: void 0,
            children: [v.jsx("select", Object.assign({}, e, {
                id: this.getId(),
                style: s,
                value: i,
                children: r
            })), this.createValidationElement()]
        }))
    }
}, a(lt, "DropdownNative"), lt);
Ct.DropdownContainer = "dropdown-container";
Ct.DropdownDisplay = "dropdown-display";
Ct.DropdownDisabled = "dropdown-disabled";
Ct.EmptyValue = -1;
Ct = Q = N([S.WidgetSpec], Ct);
var vi = (0, L.forwardRef)((n, t) => {
        let {
            value: e,
            style: i
        } = n, r = {
            "data-expression": "",
            className: i
        };
        return D.fillWithBuiltinProperties(r, t, n), v.jsx("span", Object.assign({}, r, {
            children: e
        }))
    }),
    Xi = U(vi),
    $e = {
        exports: {}
    },
    bi = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    wi = bi,
    yi = wi;

function ze() {}
a(ze, "emptyFunction");

function Ye() {}
a(Ye, "emptyFunctionWithReset");
Ye.resetWarningCache = ze;
var Si = a(function() {
    function n(i, r, s, o, h, m) {
        if (m !== yi) {
            var y = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw y.name = "Invariant Violation", y
        }
    }
    a(n, "shim"), n.isRequired = n;

    function t() {
        return n
    }
    a(t, "getShim");
    var e = {
        array: n,
        bigint: n,
        bool: n,
        func: n,
        number: n,
        object: n,
        string: n,
        symbol: n,
        any: n,
        arrayOf: t,
        element: n,
        elementType: n,
        instanceOf: t,
        node: n,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: Ye,
        resetWarningCache: ze
    };
    return e.PropTypes = e, e
}, "factoryWithThrowingShims");
$e.exports = Si();
var Rt = $e.exports,
    tt, Re = "scroll",
    Le = "resize",
    Ve = "orientationchange",
    ct, xt = tt = (ct = class extends S.Widget {
        constructor(t, e) {
            super(t, e), this.previousListLength = 0, this.shouldLoadState = !1, this.isScrollEndingEventHandlerRunning = !1, this.scrollViewerRef = P.createRef(), this.isVirtualizationEnabled = tt.shouldVirtualizeList(t), this.shouldLoadState = super.getScreenStateCache().shouldLoad
        }
        serializeCustomStateProperties() {
            let t = this.getScrollHostInfo(),
                e = G.getScrollInfo(t.scrollHost);
            return {
                top: e == null ? void 0 : e.scroll.y,
                left: e == null ? void 0 : e.scroll.x
            }
        }
        loadCustomStateProperties(t) {
            let e = t,
                i = this.getScrollViewer();
            if (i) i.scrollToOffset(e.left, e.top);
            else {
                let r = this.getScrollHostInfo().scrollHost;
                G.setScrollOffset(r, e.left, e.top)
            }
        }
        getInfiniteScrollThreshold() {
            if (this.infiniteScrollThreshold === void 0 && (this.infiniteScrollThreshold = 2e3, this.props.extendedProperties)) {
                let t = this.props.extendedProperties[tt.InfiniteScrollThresholdName];
                t !== void 0 && (this.infiniteScrollThreshold = parseInt(t, 10))
            }
            return this.infiniteScrollThreshold
        }
        getScreenStateCache() {
            let t = super.getScreenStateCache();
            return {
                navigationKey: t.navigationKey,
                shouldSave: t.shouldSave,
                shouldLoad: this.isVirtualizationEnabled ? this.shouldLoadState : t.shouldLoad,
                state: t.state
            }
        }
        getChildContext() {
            return {
                ancestorGenerationNode: this._generationNode,
                getScreenStateCache: a(() => this.getScreenStateCache(), "getScreenStateCache"),
                locale: this.context.locale
            }
        }
        getScrollHostInfo() {
            return this.scrollHostInfo || (this.scrollHostInfo = G.getScrollHostInfo(this.getHTMLNode())), this.scrollHostInfo
        }
        static shouldVirtualizeList(t) {
            return !t.extendedProperties || (t.extendedProperties["disable-virtualization"] + "").toLowerCase() !== "true"
        }
        componentDidMount() {
            this.props.onScrollEnding && this.executeAfterPaint(() => {
                if (!this.isDisposed) {
                    this.scrollHandler = () => {
                        this.isDisposed || this.tryFireScrollEndingEvent()
                    }, this.deferredScrollHandler = () => this.tryFireScrollEndingEvent(!0);
                    let t = this.getScrollHostInfo().scrollHost;
                    t.addEventListener(Re, this.scrollHandler, {
                        capture: !0
                    }), t.addEventListener(Le, this.scrollHandler, {
                        capture: !0
                    }), window.addEventListener(Ve, this.deferredScrollHandler)
                }
            }), this.storeListLength()
        }
        componentDidUpdate() {
            this.props.onScrollEnding && this.previousListLength !== this.props.source.length && this.tryFireScrollEndingEvent(), this.storeListLength()
        }
        UNSAFE_componentWillUpdate(t, e) {
            this.isVirtualizationEnabled = tt.shouldVirtualizeList(t)
        }
        storeListLength() {
            this.props.source_dataFetchStatus !== 0 && this.props.source.length > 0 && (this.previousListLength = this.props.source.length)
        }
        componentWillUnmount() {
            if (this.scrollHandler) {
                let t = this.getScrollHostInfo().scrollHost;
                t.removeEventListener(Re, this.scrollHandler), t.removeEventListener(Le, this.scrollHandler)
            }
            this.deferredScrollHandler && window.removeEventListener(Ve, this.deferredScrollHandler), this.scrollHostInfo = null
        }
        tryFireScrollEndingEvent() {
            let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
            var e, i;
            if (!this.isScrollEndingEventHandlerRunning) {
                let r = this.getInfiniteScrollThreshold(),
                    s = this.getScrollHostInfo(),
                    o = G.getScrollInfo(s.scrollHost);
                o && o.scroll.y > 0 && (o == null ? void 0 : o.scroll.y) > this.lastScrollTop || t ? o && o.scroll.height <= o.scroll.y + o.viewport.height + r && this.executeScrollEndingEventHandler() : (o && o.scroll.x > 0 && o.scroll.x > this.lastScrollLeft || t) && o && o.scroll.width <= o.scroll.x + o.viewport.width + r && this.executeScrollEndingEventHandler(), this.lastScrollTop = (e = o == null ? void 0 : o.scroll.y) !== null && e !== void 0 ? e : 0, this.lastScrollLeft = (i = o == null ? void 0 : o.scroll.x) !== null && i !== void 0 ? i : 0
            }
        }
        executeScrollEndingEventHandler() {
            this.props.onScrollEnding !== null && (this.isScrollEndingEventHandlerRunning = !0, ge.tryFinally(this.props.onScrollEnding, () => {
                this.isScrollEndingEventHandlerRunning = !1
            }))
        }
        renderListItems(t, e) {
            return this.props.source.length > 0 ? this.props.placeholders.content.render(this, this.props.source, void 0, t, e) : null
        }
        getScrollViewer() {
            return this.scrollViewerRef.current
        }
        shouldSuspendAnimations() {
            if (Math.abs(this.previousListLength - this.props.source.length) !== 1) return !0;
            if (this.isVirtualizationEnabled) {
                let t = this.getScrollViewer();
                return !t || !t.isInitialized || t.isScrolling
            }
            return !1
        }
        renderListWrapper(t, e) {
            return P.createElement(this.props.tag, t, e)
        }
        render() {
            let t = "";
            switch (this.props.source_dataFetchStatus) {
                case 0:
                    t = " list-loading";
                    break;
                case 2:
                    t = " list-error";
                    break
            }
            let e = {
                "data-list": "",
                "data-virtualization-disabled": this.isVirtualizationEnabled ? null : "",
                "data-animation-disabled": this.props.animateItems ? null : "",
                className: this.props.style + t
            };
            if (this.fillWithBuiltinProperties(e), this.isVirtualizationEnabled) {
                let i, r;
                this.props.extendedProperties && (i = parseInt(this.props.extendedProperties[tt.ViewportSafetyMarginBefore], 10), r = parseInt(this.props.extendedProperties[tt.ViewportSafetyMarginAfter], 10));
                let s = {
                    renderWrapper: a(o => this.renderListWrapper(e, o), "renderWrapper"),
                    renderItems: a((o, h) => {
                        var m;
                        return (m = this.renderListItems) === null || m === void 0 ? void 0 : m.call(this, o, h)
                    }, "renderItems"),
                    length: this.props.source.length,
                    ref: this.scrollViewerRef,
                    viewportSafetyMarginBefore: i,
                    viewportSafetyMarginAfter: r,
                    initializationCompleted: a(() => {
                        this.shouldLoadState = !1
                    }, "initializationCompleted")
                };
                return P.createElement(be, Pt.assign({}, e, s))
            } else return this.renderListWrapper(e, this.renderListItems())
        }
    }, a(ct, "List"), ct);
xt.InfiniteScrollThresholdName = "infinite-scroll-threshold";
xt.ViewportSafetyMarginBefore = "virtualization-threshold-before";
xt.ViewportSafetyMarginAfter = "virtualization-threshold-after";
xt.childContextTypes = Pt.assign({
    getScreenStateCache: Rt.func
}, S.Widget.childContextTypes);
xt = tt = N([S.WidgetSpec], xt);
var Kt = {
    exports: {}
};
(function(n, t) {
    (function(e, i) {
        i(t, L.default)
    })(ri, function(e, i) {
        function r(f) {
            if (f && f.__esModule) return f;
            var g = Object.create(null);
            return f && Object.keys(f).forEach(function(w) {
                if (w !== "default") {
                    var V = Object.getOwnPropertyDescriptor(f, w);
                    Object.defineProperty(g, w, V.get ? V : {
                        enumerable: !0,
                        get: a(function() {
                            return f[w]
                        }, "get")
                    })
                }
            }), g.default = f, g
        }
        a(r, "_interopNamespace");
        var s = r(i);

        function o() {
            return o = Object.assign || function(f) {
                for (var g = 1; g < arguments.length; g++) {
                    var w = arguments[g];
                    for (var V in w) Object.prototype.hasOwnProperty.call(w, V) && (f[V] = w[V])
                }
                return f
            }, o.apply(this, arguments)
        }
        a(o, "_extends");
        var h = "Left",
            m = "Right",
            y = "Up",
            b = "Down",
            C = {
                delta: 10,
                preventDefaultTouchmoveEvent: !1,
                rotationAngle: 0,
                trackMouse: !1,
                trackTouch: !0
            },
            j = {
                first: !0,
                initial: [0, 0],
                start: 0,
                swiping: !1,
                xy: [0, 0]
            },
            H = "mousemove",
            _ = "mouseup",
            B = "touchend",
            Y = "touchmove",
            q = "touchstart";

        function l(f, g, w, V) {
            return f > g ? w > 0 ? m : h : V > 0 ? b : y
        }
        a(l, "getDirection");

        function c(f, g) {
            if (g === 0) return f;
            var w = Math.PI / 180 * g,
                V = f[0] * Math.cos(w) + f[1] * Math.sin(w),
                Z = f[1] * Math.cos(w) - f[0] * Math.sin(w);
            return [V, Z]
        }
        a(c, "rotateXYByAngle");

        function u(f, g) {
            var w = a(function(x) {
                    x && "touches" in x && x.touches.length > 1 || f(function(R, A) {
                        A.trackMouse && (document.addEventListener(H, V), document.addEventListener(_, Vt));
                        var F = "touches" in x ? x.touches[0] : x,
                            $ = F.clientX,
                            K = F.clientY,
                            X = c([$, K], A.rotationAngle);
                        return o({}, R, j, {
                            initial: [].concat(X),
                            xy: X,
                            start: x.timeStamp || 0
                        })
                    })
                }, "onStart"),
                V = a(function(x) {
                    f(function(R, A) {
                        if ("touches" in x && x.touches.length > 1) return R;
                        var F = "touches" in x ? x.touches[0] : x,
                            $ = F.clientX,
                            K = F.clientY,
                            X = c([$, K], A.rotationAngle),
                            Bt = X[0],
                            Ze = X[1],
                            Ot = Bt - R.xy[0],
                            Wt = Ze - R.xy[1],
                            At = Math.abs(Ot),
                            Tt = Math.abs(Wt),
                            Ht = (x.timeStamp || 0) - R.start,
                            ti = Math.sqrt(At * At + Tt * Tt) / (Ht || 1),
                            ei = [Ot / (Ht || 1), Wt / (Ht || 1)],
                            Ut = l(At, Tt, Ot, Wt),
                            he = typeof A.delta == "number" ? A.delta : A.delta[Ut.toLowerCase()] || C.delta;
                        if (At < he && Tt < he && !R.swiping) return R;
                        var jt = {
                            absX: At,
                            absY: Tt,
                            deltaX: Ot,
                            deltaY: Wt,
                            dir: Ut,
                            event: x,
                            first: R.first,
                            initial: R.initial,
                            velocity: ti,
                            vxvy: ei
                        };
                        jt.first && A.onSwipeStart && A.onSwipeStart(jt), A.onSwiping && A.onSwiping(jt);
                        var ue = !1;
                        return (A.onSwiping || A.onSwiped || "onSwiped" + Ut in A) && (ue = !0), ue && A.preventDefaultTouchmoveEvent && A.trackTouch && x.cancelable && x.preventDefault(), o({}, R, {
                            first: !1,
                            eventData: jt,
                            swiping: !0
                        })
                    })
                }, "onMove"),
                Z = a(function(x) {
                    f(function(R, A) {
                        var F;
                        if (R.swiping && R.eventData) {
                            F = o({}, R.eventData, {
                                event: x
                            }), A.onSwiped && A.onSwiped(F);
                            var $ = A["onSwiped" + F.dir];
                            $ && $(F)
                        } else A.onTap && A.onTap({
                            event: x
                        });
                        return o({}, R, j, {
                            eventData: F
                        })
                    })
                }, "onEnd"),
                Mt = a(function() {
                    document.removeEventListener(H, V), document.removeEventListener(_, Vt)
                }, "cleanUpMouse"),
                Vt = a(function(x) {
                    Mt(), Z(x)
                }, "onUp"),
                Dt = a(function(x, R) {
                    var A = a(function() {}, "cleanup");
                    if (x && x.addEventListener) {
                        var F = [
                            [q, w],
                            [Y, V],
                            [B, Z]
                        ];
                        F.forEach(function($) {
                            var K = $[0],
                                X = $[1];
                            return x.addEventListener(K, X, {
                                passive: R
                            })
                        }), A = a(function() {
                            return F.forEach(function(K) {
                                var X = K[0],
                                    Bt = K[1];
                                return x.removeEventListener(X, Bt)
                            })
                        }, "cleanup")
                    }
                    return A
                }, "attachTouch"),
                Qe = a(function(x) {
                    x !== null && f(function(R, A) {
                        if (R.el === x) return R;
                        var F = {};
                        return R.el && R.el !== x && R.cleanUpTouch && (R.cleanUpTouch(), F.cleanUpTouch = void 0), A.trackTouch && x && (F.cleanUpTouch = Dt(x, !A.preventDefaultTouchmoveEvent)), o({}, R, {
                            el: x
                        }, F)
                    })
                }, "onRef"),
                de = {
                    ref: Qe
                };
            return g.trackMouse && (de.onMouseDown = w), [de, Dt]
        }
        a(u, "getHandlers");

        function d(f, g, w) {
            var V = {};
            return !g.trackTouch && f.cleanUpTouch ? (f.cleanUpTouch(), V.cleanUpTouch = void 0) : g.trackTouch && !f.cleanUpTouch && f.el && (V.cleanUpTouch = w(f.el, !g.preventDefaultTouchmoveEvent)), o({}, f, V)
        }
        a(d, "updateTransientState");

        function p(f) {
            var g = f.trackMouse,
                w = s.useRef(o({}, j)),
                V = s.useRef(o({}, C));
            V.current = o({}, C, f, {
                delta: f.delta === void 0 ? C.delta : f.delta,
                rotationAngle: f.rotationAngle === void 0 ? C.rotationAngle : f.rotationAngle,
                trackTouch: f.trackTouch === void 0 ? C.trackTouch : f.trackTouch
            });
            var Z = s.useMemo(function() {
                    return u(function(Dt) {
                        return w.current = Dt(w.current, V.current)
                    }, {
                        trackMouse: g
                    })
                }, [g]),
                Mt = Z[0],
                Vt = Z[1];
            return w.current = d(w.current, V.current, Vt), Mt
        }
        a(p, "useSwipeable"), e.DOWN = b, e.LEFT = h, e.RIGHT = m, e.UP = y, e.useSwipeable = p
    })
})(Kt, Kt.exports);
var Ci = Kt.exports,
    xi = a(n => {
        var {
            children: t,
            onSwipingLeft: e,
            onSwipingRight: i,
            onSwiped: r
        } = n, s = xe(n, ["children", "onSwipingLeft", "onSwipingRight", "onSwiped"]);
        let o = a(B => {
                let Y = B.event,
                    [q] = B.initial;
                B.dir === "Left" ? e(Y, -B.deltaX, q) : B.dir === "Right" && i(Y, B.deltaX, q)
            }, "handleSwipe"),
            h = Ci.useSwipeable({
                delta: s.delta,
                onSwiped: r,
                onSwiping: o,
                onSwipeStart: o,
                trackTouch: !0,
                trackMouse: !0
            }),
            {
                onSwiping: m,
                onSwipedUp: y,
                onSwipedRight: b,
                onSwipedDown: C,
                onSwipedLeft: j,
                delta: H
            } = s,
            _ = xe(s, ["onSwiping", "onSwipedUp", "onSwipedRight", "onSwipedDown", "onSwipedLeft", "delta"]);
        return v.jsx("div", Object.assign({}, h, _, {
            children: t
        }))
    }, "Swipeable"),
    W;
(function(n) {
    (function(t) {
        t[t.RightVisible = 0] = "RightVisible", t[t.RightAction = 1] = "RightAction", t[t.LeftVisible = 2] = "LeftVisible", t[t.LeftAction = 3] = "LeftAction"
    })(n.Actions || (n.Actions = {})), (function(t) {
        t[t.Left = 0] = "Left", t[t.Right = 1] = "Right"
    })(n.Directions || (n.Directions = {}))
})(W || (W = {}));
var ce = class ce extends P.Component {
    render() {
        let t = {
            "data-list-item": "",
            "data-not-scrollable": "",
            onClick: this.props.containerClick,
            className: this.props.classProperty
        };
        return this.props.fillWithParentProperties(t), v.jsx("div", Object.assign({}, t, {
            children: this.props.placeholderContent.render()
        }))
    }
};
a(ce, "ListItemBasic");
var Jt = ce,
    T = class T extends P.Component {
        constructor(t, e) {
            var i;
            super(t, e), this.leftRef = P.createRef(), this.rightRef = P.createRef(), this.swipeRef = P.createRef(), this.touchWindowEventListener = r => {
                this.unregisterTouchWindowEventListener(), this.animate()
            }, this.handleTouch = r => {
                this.propagateTouch || r.stopPropagation()
            }, this.registerTouchWindowEventListener = () => {
                this.propagateTouch = !1, window.addEventListener(T.TouchStartEvent, this.touchWindowEventListener)
            }, this.unregisterTouchWindowEventListener = () => {
                this.propagateTouch = !0, window.removeEventListener(T.TouchStartEvent, this.touchWindowEventListener)
            }, this.onSwipingLeft = (r, s, o) => {
                this.handleSwiping(!1, r, s, o)
            }, this.onSwipingRight = (r, s, o) => {
                this.handleSwiping(!0, r, s, o)
            }, this.onSwiped = () => {
                var r, s;
                let o = !1,
                    h = !1;
                switch (this.setState({
                        showRightButtons: !1,
                        showLeftButtons: !1
                    }), this.state.action) {
                    case W.Actions.RightVisible:
                        this.registerTouchWindowEventListener(), o = !0;
                        break;
                    case W.Actions.LeftVisible:
                        this.registerTouchWindowEventListener(), h = !0;
                        break;
                    case W.Actions.LeftAction:
                        let m = (r = this.leftRef.current) === null || r === void 0 ? void 0 : r.children[0];
                        m && (this.timeoutClickHandle = setTimeout(() => m.click(), this.props.animationTimeout));
                        break;
                    case W.Actions.RightAction:
                        let y = (s = this.rightRef.current) === null || s === void 0 ? void 0 : s.children;
                        if (y.length > 0) {
                            let b = y[y.length - 1];
                            b && (this.timeoutClickHandle = setTimeout(() => b.click(), this.props.animationTimeout))
                        }
                        break
                }
                this.setState({
                    deltaPixels: 0,
                    action: null,
                    showRightButtons: o,
                    showLeftButtons: h,
                    swipingLeft: !1,
                    swipingRight: !1,
                    animating: !0,
                    animatingFullSwipeRight: this.state.action === W.Actions.LeftAction,
                    animatingFullSwipeLeft: this.state.action === W.Actions.RightAction
                }), this.startAnimationTimeout()
            }, this.handleActionContainerClick = r => {
                this.animate(), r.stopPropagation()
            }, this.handleContentClick = r => {
                this.state.showRightButtons || this.state.showLeftButtons || this.state.animating || this.props.containerClick(r)
            }, this.state = {
                deltaPixels: 0,
                showRightButtons: !1,
                showLeftButtons: !1,
                swipingLeft: !1,
                swipingRight: !1,
                animating: !1,
                action: null,
                callActionWhenSwipingFarRight: !1,
                callActionWhenSwipingFarLeft: !1,
                lastContainerClass: "",
                shouldRenderActions: (i = t.isExpandedInWebEditor) !== null && i !== void 0 ? i : !1,
                animatingFullSwipeRight: !1,
                animatingFullSwipeLeft: !1
            }, this.propagateTouch = !0, this.actionsMaxWidth = 0, this.leftPlaceholderCache = null, this.rightPlaceholderCache = null, this.contentPlaceholderCache = null
        }
        startAnimationTimeout() {
            this.clearAnimationTimeout(), this.animationTimeoutHandle = setTimeout(() => {
                this.setState({
                    animating: !1,
                    action: null,
                    animatingFullSwipeRight: !1,
                    animatingFullSwipeLeft: !1,
                    shouldRenderActions: this.state.showLeftButtons || this.state.showRightButtons
                })
            }, this.props.animationTimeout)
        }
        clearAnimationTimeout() {
            this.animationTimeoutHandle && clearTimeout(this.animationTimeoutHandle)
        }
        clearClickTimeout() {
            this.timeoutClickHandle && clearTimeout(this.timeoutClickHandle)
        }
        UNSAFE_componentWillReceiveProps(t) {
            this.leftPlaceholderCache = null, this.rightPlaceholderCache = null, this.contentPlaceholderCache = null
        }
        componentDidMount() {
            if (this.props.extendedProperties) {
                let t = this.props.extendedProperties[T.SwipeLeftEdgeThresholdExtended],
                    e = this.props.extendedProperties[T.SwipeRightEdgeThresholdExtended];
                t && (this.swipeLeftEdgeThreshold = parseInt(t, 10)), e && (this.swipeRightEdgeThreshold = parseInt(e, 10))
            }
        }
        componentDidUpdate() {
            this.state.lastContainerClass !== this.lastContainerClass && this.setState({
                lastContainerClass: this.lastContainerClass
            })
        }
        componentWillUnmount() {
            this.clearAnimationTimeout(), this.clearClickTimeout(), this.unregisterTouchWindowEventListener()
        }
        updateElementCachedInfo() {
            let t = this.swipeRef.current;
            if (t === null) return;
            if (!this.actionsMaxWidth) {
                let i = t.querySelector("[data-list-item-action]");
                i && (this.actionsMaxWidth = parseInt(window.getComputedStyle(i, null).getPropertyValue("max-width"), 10))
            }
            this.leftActionsCount = t.getElementsByClassName(T.LeftActions)[0].getElementsByTagName(T.Button).length, this.rightActionsCount = t.getElementsByClassName(T.RightActions)[0].getElementsByTagName(T.Button).length;
            let e = t.querySelector("[data-list-item-content]");
            e && (this.contentWidth = e.clientWidth), T.deviceWidth = window.innerWidth || document.documentElement.clientWidth
        }
        showFullSwipe() {
            return this.state.action === W.Actions.LeftAction || this.state.action === W.Actions.RightAction || this.state.animatingFullSwipeLeft || this.state.animatingFullSwipeRight
        }
        getSwipeLeftEdgeThreshold() {
            return this.swipeLeftEdgeThreshold ? this.swipeLeftEdgeThreshold : T.SwipeLeftEdgeDefaultThreshold
        }
        getSwipeRightEdgeThreshold() {
            return this.swipeRightEdgeThreshold ? this.swipeRightEdgeThreshold : T.SwipeRightEdgeDefaultThreshold
        }
        getSwipeThresholdToTriggerAction(t) {
            return this.state.showLeftButtons || this.state.showRightButtons ? this.actionsMaxWidth * .75 : t === W.Directions.Right ? this.actionsMaxWidth * (Math.min(2, this.leftActionsCount) + .75) : this.actionsMaxWidth * (Math.min(2, this.rightActionsCount) + .75)
        }
        handleSwiping(t, e, i, r) {
            this.updateElementCachedInfo(), this.setState({
                shouldRenderActions: !0
            });
            let s = t ? W.Directions.Right : W.Directions.Left;
            if (this.swipingHandleStylesAndDelta(i, s, r)) return;
            let o = null;
            i > this.props.visibilityThreshold && (o = t ? W.Actions.LeftVisible : W.Actions.RightVisible), (t ? this.props.callActionWhenSwipingFarRight : this.props.callActionWhenSwipingFarLeft) && i > this.getSwipeThresholdToTriggerAction(s) && (o = t ? W.Actions.LeftAction : W.Actions.RightAction);
            let m = i - T.SwipeStartThreshold;
            this.setState({
                deltaPixels: t ? m : -m,
                action: o,
                swipingLeft: !t,
                swipingRight: t
            })
        }
        getStateForPlaceholderStyle(t) {
            var e;
            let i = !t,
                r = i && this.state.swipingRight || t && this.state.swipingLeft,
                s = i && this.state.showLeftButtons || t && this.state.showRightButtons || ((e = this.props.isExpandedInWebEditor) !== null && e !== void 0 ? e : !1),
                o = i && this.state.animatingFullSwipeRight || t && this.state.animatingFullSwipeLeft;
            return {
                swiping: r,
                showingButtons: s,
                animatingFullSwipe: o
            }
        }
        getActionsPlaceholderStyle(t) {
            let {
                swiping: e,
                showingButtons: i,
                animatingFullSwipe: r
            } = this.getStateForPlaceholderStyle(t), s = t ? this.rightActionsCount : this.leftActionsCount;
            if (e) {
                let o = 0;
                return i && !this.state.animating && (o = s * this.actionsMaxWidth), {
                    width: Math.abs(this.state.deltaPixels) + o + "px"
                }
            }
            if (i) return {
                width: this.props.isExpandedInWebEditor ? "auto" : s * this.actionsMaxWidth + "px"
            };
            if (r) return {
                width: this.contentWidth + "px"
            }
        }
        swipingHandleStylesAndDelta(t, e, i) {
            return this.shouldAbort(e, i) ? !0 : (this.tryAnimate(e), !1)
        }
        shouldAbort(t, e) {
            if (t === W.Directions.Right) {
                if (e < this.getSwipeRightEdgeThreshold()) return !0
            } else if (e > T.deviceWidth - this.getSwipeLeftEdgeThreshold()) return !0;
            return this.state.animating ? !0 : t === W.Directions.Right ? !this.leftActionsCount && !this.state.showRightButtons || this.state.showLeftButtons && !this.props.callActionWhenSwipingFarRight : !this.rightActionsCount && !this.state.showLeftButtons || this.state.showRightButtons && !this.props.callActionWhenSwipingFarLeft
        }
        tryAnimate(t) {
            (t === W.Directions.Right && this.state.showRightButtons || t === W.Directions.Left && this.state.showLeftButtons) && this.animate()
        }
        animate() {
            this.setState({
                showLeftButtons: !1,
                showRightButtons: !1,
                animating: !0
            }), this.startAnimationTimeout()
        }
        getContainerClass() {
            if (this.state.animating) return this.state.lastContainerClass;
            let t = null;
            return this.state.showRightButtons ? t = T.FloatRight : this.state.showLeftButtons ? t = T.FloatLeft : t = this.state.deltaPixels < 0 ? T.FloatRight : T.FloatLeft, t
        }
        getRenderedLeftPlaceholder() {
            return this.state.shouldRenderActions ? (this.leftPlaceholderCache === null && (this.leftPlaceholderCache = this.props.placeholderLeftActions.render()), this.leftPlaceholderCache) : null
        }
        getRenderedRightPlaceholder() {
            return this.state.shouldRenderActions ? (this.rightPlaceholderCache === null && (this.rightPlaceholderCache = this.props.placeholderRightActions.render()), this.rightPlaceholderCache) : null
        }
        getRenderedContentPlaceholder() {
            return this.contentPlaceholderCache === null && (this.contentPlaceholderCache = this.props.placeholderContent.render()), this.contentPlaceholderCache
        }
        render() {
            this.lastContainerClass = this.getContainerClass();
            let t = T.Container + (this.showFullSwipe() ? " " + T.FullSwipe : "");
            this.state.animating && (t += " " + T.Animating), this.state.showRightButtons && (t += " " + T.ShowRightButtons), this.state.showLeftButtons && (t += " " + T.ShowLeftButtons);
            let e = {
                "data-list-item-content": "",
                "data-not-scrollable": "",
                className: this.props.classProperty,
                onSwipingLeft: this.onSwipingLeft,
                onClick: this.handleContentClick,
                onSwipingRight: this.onSwipingRight,
                delta: T.SwipeStartThreshold,
                onSwiped: this.onSwiped
            };
            this.props.fillWithParentProperties(e);
            let i = e.ref;
            return e.ref = null, v.jsx("div", {
                "data-list-item": "",
                "data-not-scrollable": "",
                ref: i,
                children: v.jsxs("div", {
                    className: t + " " + this.lastContainerClass,
                    ref: this.swipeRef,
                    onTouchStart: this.handleTouch,
                    children: [v.jsx("div", {
                        className: T.LeftActions,
                        style: this.getActionsPlaceholderStyle(!1),
                        onClick: this.handleActionContainerClick,
                        ref: this.leftRef,
                        children: this.getRenderedLeftPlaceholder()
                    }), v.jsx(xi, Object.assign({}, e, {
                        children: this.getRenderedContentPlaceholder()
                    })), v.jsx("div", {
                        className: T.RightActions,
                        style: this.getActionsPlaceholderStyle(!0),
                        onClick: this.handleActionContainerClick,
                        ref: this.rightRef,
                        children: this.getRenderedRightPlaceholder()
                    })]
                })
            })
        }
    };
a(T, "ListItemSwipeable");
var I = T;
I.TouchStartEvent = "touchstart";
I.Button = "button";
I.Container = "list-item-container";
I.LeftActions = "list-item-left-actions";
I.RightActions = "list-item-right-actions";
I.FloatRight = "list-item-float-right";
I.FloatLeft = "list-item-float-left";
I.FullSwipe = "list-item-full-swipe";
I.Animating = "list-item-animating";
I.ShowRightButtons = "list-item-show-right-buttons";
I.ShowLeftButtons = "list-item-show-left-buttons";
I.SwipeStartThreshold = 15;
I.SwipeLeftEdgeThresholdExtended = "list-item-swipe-left-edge-threshold";
I.SwipeRightEdgeThresholdExtended = "list-item-swipe-right-edge-threshold";
I.SwipeLeftEdgeDefaultThreshold = 15;
I.SwipeRightEdgeDefaultThreshold = 15;
var dt, De = (dt = class extends S.Widget {
    constructor() {
        super(...arguments), this.handleClick = t => {
            this.props.onClick && (t.stopPropagation(), this.executeWithActiveClassOn(() => this.props.onClick()))
        }
    }
    render() {
        var t, e;
        let i = this.props.placeholders.leftActions === S.PlaceholderContent.Empty,
            r = this.props.placeholders.rightActions === S.PlaceholderContent.Empty;
        if (i && r) return v.jsx(Jt, {
            containerClick: this.handleClick,
            placeholderContent: this.props.placeholders.content,
            fillWithParentProperties: a(s => this.fillWithBuiltinProperties(s), "fillWithParentProperties"),
            classProperty: this.props.style
        }); {
            let s = {
                extendedProperties: (t = this.props.extendedProperties) !== null && t !== void 0 ? t : {},
                visibilityThreshold: 35,
                animationTimeout: 400,
                placeholderContent: this.props.placeholders.content,
                placeholderLeftActions: this.props.placeholders.leftActions,
                placeholderRightActions: this.props.placeholders.rightActions,
                callActionWhenSwipingFarRight: this.props.triggerActionOnFullSwipeRight,
                callActionWhenSwipingFarLeft: this.props.triggerActionOnFullSwipeLeft,
                isExpandedInWebEditor: (e = this.props.expandedInWebEditor) !== null && e !== void 0 ? e : !1,
                containerClick: this.handleClick,
                fillWithParentProperties: a(o => this.fillWithBuiltinProperties(o), "fillWithParentProperties"),
                classProperty: this.props.style
            };
            return v.jsx(I, Object.assign({}, s))
        }
    }
}, a(dt, "ListItem"), dt);
De = N([S.WidgetSpec], De);
var Ei = a(n => {
        var t, e;
        return n && ((e = (t = n.extendedProperties) === null || t === void 0 ? void 0 : t["disable-spam-protection"]) === null || e === void 0 ? void 0 : e.toLowerCase()) === "true"
    }, "isSpamProtectionDisabled"),
    Ai = (0, L.forwardRef)((n, t) => {
        let {
            style: e,
            children: i,
            onClick: r
        } = n, s = a(() => t.current, "getHtmlNode"), o = !Ei(n), [h, m] = (0, L.useState)(!1);

        function y() {
            if (o && h) return;
            let C = a(() => r == null ? void 0 : r(), "onClickAction");
            D.executeWithActiveClassOn(C, s), m(!0)
        }
        a(y, "handleClick");
        let b = {
            "data-list-item-action": "",
            className: e,
            onClick: a(() => y(), "onClick")
        };
        return D.fillWithBuiltinProperties(b, t, n), v.jsx("button", Object.assign({}, b, {
            children: i
        }))
    }),
    Gi = U(Ai),
    ht, Qt = (ht = class extends S.Widget {
        constructor() {
            super(...arguments), this.state = {
                sortAttribute: ""
            }
        }
        setDataHeaderInRowCells() {
            var t, e;
            let i = this.body ? this.body.children : [],
                r = this.header ? this.header.getElementsByTagName("th") : [];
            for (let s = 0; s < r.length; s++) {
                let o = r[s];
                for (let h = 0; h < i.length; h++)(t = i[h].children[s]) === null || t === void 0 || t.setAttribute("data-header", (e = o.innerText) !== null && e !== void 0 ? e : o.textContent)
            }
        }
        componentDidMount() {
            this.setDataHeaderInRowCells()
        }
        componentDidUpdate() {
            this.setDataHeaderInRowCells()
        }
        renderHeader() {
            let t = {
                className: this.props.styleHeader
            };
            return this.props.showHeader ? v.jsx("thead", {
                ref: a(e => this.header = e, "ref"),
                children: v.jsx("tr", Object.assign({}, t, {
                    children: this.props.placeholders.headerRow.render()
                }))
            }) : null
        }
        renderRows() {
            let t = {
                className: this.props.styleRow
            };
            return this.props.source.length > 0 ? v.jsx("tbody", {
                ref: a(e => this.body = e, "ref"),
                children: this.props.placeholders.row.render(this, this.props.source, (e, i) => v.jsx("tr", Object.assign({}, t, {
                    children: e
                })))
            }) : null
        }
        onSort(t) {
            this.setState({
                sortAttribute: t
            }), this.props.onSort(t)
        }
        getChildContext() {
            let t = super.getChildContext();
            return this.props.onSort && (t.onTableRecordsSort = e => this.onSort(e), t.tableRecordsCurrentSortAttribute = this.state.sortAttribute), t
        }
        render() {
            let t = {
                className: this.props.style,
                role: "grid"
            };
            return this.fillWithBuiltinProperties(t), v.jsxs("table", Object.assign({}, t, {
                children: [this.renderHeader(), this.renderRows()]
            }))
        }
    }, a(ht, "TableRecords"), ht);
Qt.childContextTypes = Pt.assign({
    onTableRecordsSort: Rt.func,
    tableRecordsCurrentSortAttribute: Rt.string
}, S.Widget.childContextTypes);
Qt = N([S.WidgetSpec], Qt);
var ut, Zt = (ut = class extends S.Widget {
    constructor() {
        super(...arguments), this.handleInteractive = t => {
            t.preventDefault(), t.stopPropagation(), this.executeWithActiveClassOn(() => {
                var e;
                return (e = this.onSort) === null || e === void 0 ? void 0 : e.call(this, this.props.sortAttribute)
            })
        }
    }
    get onSort() {
        return this.context.onTableRecordsSort
    }
    shouldComponentUpdate(t, e, i) {
        return this.context.tableRecordsCurrentSortAttribute !== i.tableRecordsCurrentSortAttribute || super.shouldComponentUpdate(t, e, i)
    }
    render() {
        let t = this.props.style || "",
            e, i = {
                className: "sortable-icon"
            };
        this.props.style !== "sortable" && this.props.sortAttribute && (t += " sortable", e = v.jsx("div", Object.assign({}, i)));
        let r = this.context;
        this.props.style !== "sorted" && r && this.props.sortAttribute && this.props.sortAttribute === r.tableRecordsCurrentSortAttribute && (t += " sorted"), t = t.trim();
        let s = {
            className: t,
            tabIndex: 0
        };
        return this.onSort && this.props.sortAttribute && (s.onClick = this.handleInteractive, s.onKeyDown = h => h.keyCode === 13 && this.handleInteractive(h)), this.fillWithBuiltinProperties(s), v.jsxs("th", Object.assign({}, s, {
            children: [this.props.children, e]
        }))
    }
}, a(ut, "HeaderCell"), ut);
Zt.contextTypes = Pt.assign({
    onTableRecordsSort: Rt.func,
    tableRecordsCurrentSortAttribute: Rt.string
}, S.Widget.contextTypes);
Zt = N([S.WidgetSpec], Zt);
var pt, Oe = (pt = class extends S.Widget {
    render() {
        let t = {
            className: this.props.style
        };
        return this.fillWithBuiltinProperties(t), v.jsx("td", Object.assign({}, t, {
            children: this.props.children
        }))
    }
}, a(pt, "RowCell"), pt);
Oe = N([S.WidgetSpec], Oe);
var ft, We = (ft = class extends S.ValidationWidget {
    get isValidationAggregator() {
        return !0
    }
    render() {
        var t, e;
        let i = {
            "data-form": "",
            action: (e = (t = this.props.extendedProperties) === null || t === void 0 ? void 0 : t.action) !== null && e !== void 0 ? e : "",
            noValidate: !0,
            className: this.props.style,
            onSubmit: a(r => r.preventDefault(), "onSubmit")
        };
        return this.fillWithBuiltinProperties(i), v.jsx("form", Object.assign({}, i, {
            children: this.props.children
        }))
    }
}, a(ft, "Form"), ft);
We = N([S.WidgetSpec], We);
var Ti = (0, L.forwardRef)((n, t) => {
        let {
            icon: e,
            iconSize: i,
            style: r
        } = n, s = "";
        switch (i) {
            case 0:
                s = "1x";
                break;
            case 1:
                s = "2x";
                break;
            case 2:
                s = "3x";
                break;
            case 3:
                s = "4x";
                break;
            default:
                s = "1x";
                break
        }
        let o = {
            "data-icon": "",
            className: (r != null ? r : "") + " fa fa-" + e + " fa-" + s
        };
        return D.fillWithBuiltinProperties(o, t, n), v.jsx("i", Object.assign({}, o))
    }),
    Ki = U(Ti),
    Pi = fe.getBasePath;

function je(n) {
    var t;
    return n.type === 2 && n.imageContent && !n.imageContent.url || ((t = n.imageContent) === null || t === void 0 ? void 0 : t.needsAuthentication())
}
a(je, "isBinary");

function Xt(n) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pi;
    return n ? /^(blob:)?(?:[a-z]+:)?\/\/|^\//i.test(n) ? n : `/${t()}/${n}`.replace(/\/(\/)+/g, "/") : void 0
}
a(Xt, "getBinaryImgAbsoluteURL");

function Ri(n, t, e) {
    var i;
    let r = {
        "data-image": "",
        className: n.style,
        src: "",
        alt: ""
    };
    if (e.hasError) r.src = Xt(n.defaultImage);
    else {
        switch (n.type) {
            case 1:
                r.src = n.url;
                break;
            case 2:
                e.objectUrl ? r.src = e.objectUrl : !((i = n.imageContent) === null || i === void 0) && i.hasContent() ? r.src = Xt(n.imageContent.url) : r.src = Xt(n.defaultImage);
                break;
            default:
                r.src = n.image;
                break
        }
        r.onError = () => {
            n.defaultImage && e.setHasError(!0)
        }
    }
    return D.fillWithBuiltinProperties(r, t, n), r
}
a(Ri, "prepareImageAttributes");
var Li = (0, L.forwardRef)((n, t) => {
        var e, i;
        let [r, s] = (0, L.useState)(null), [o, h] = (0, L.useState)(!1), m = a(b => fi(void 0, void 0, void 0, function*() {
            let C = yield b.requestUrl();
            s(C || null), h(!1)
        }), "loadImageUrlFromBinary");
        (0, L.useEffect)(() => (je(n) ? m(n.imageContent) : o && h(!1), () => {
            je(n) && n.imageContent.releaseUrl()
        }), [(e = n.imageContent) === null || e === void 0 ? void 0 : e.url, (i = n.imageContent) === null || i === void 0 ? void 0 : i.content]);
        let y = Ri(n, t, {
            objectUrl: r,
            setObjectUrl: s,
            hasError: o,
            setHasError: h
        });
        return v.jsx("img", Object.assign({}, y))
    }),
    Ji = U(Li),
    kt = class kt {
        constructor() {
            this.last = 0
        }
        dispose() {
            clearTimeout(this.deferTimerHandle), this.timeoutFunction && this.timeoutFunction()
        }
        throttle(t) {
            let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kt.DefaultThrottlingInterval,
                i = new Date().valueOf();
            this.last && i < this.last + e ? (clearTimeout(this.deferTimerHandle), this.timeoutFunction = () => {
                this.last = i, this.timeoutFunction = null, t()
            }, this.deferTimerHandle = setTimeout(this.timeoutFunction, e)) : (this.last = i, t())
        }
    };
a(kt, "Throttling");
var z = kt;
z.DefaultThrottlingInterval = 200;
z.CustomThrottlingProperty = "onchange-throttle-milliseconds";
var M, gt, Et = M = (gt = class extends S.InputWithVariableWidget {
    constructor(t, e) {
        if (super(t, e), this.props.extendedProperties) {
            let i = this.props.extendedProperties[z.CustomThrottlingProperty];
            typeof i != "undefined" && (this.throttleValue = parseInt(i, 10))
        }
        this.ShowDefaultValue = M.getShowDefaultValue(t), this.state = {
            value: this.convertFromModel(t.variable.value)
        }, this.throttling = new z
    }
    static getShowDefaultValue(t) {
        if (t.extendedProperties) {
            let e = t.extendedProperties[M.ShowDefaultValueProperty];
            if (typeof e != "undefined") return e.toLowerCase() === "true"
        }
        return !1
    }
    getCorrectDatePartForType(t, e) {
        switch (this.props.inputType) {
            case 5:
                return t.toString("yyyy-MM-ddTHH:mm");
            case 4:
                return t.toString("yyyy-MM-dd");
            case 3:
                return t.toString("HH:mm")
        }
        throw new Error("A correct datetime type is required")
    }
    convertFromModel(t) {
        switch (this.props.inputType) {
            case 5:
            case 4:
            case 3:
                return M.isNullDate(t) && !this.ShowDefaultValue ? "" : this.getCorrectDatePartForType(t, this.props.inputType);
            case 2:
                return parseFloat(t) === 0 && !this.ShowDefaultValue ? "" : t;
            default:
                return t
        }
    }
    static isNullDate(t) {
        return t.equals(O.DateTime.defaultValue)
    }
    get isMandatory() {
        return this.props.mandatory
    }
    get variable() {
        return this.props.variable
    }
    get htmlElement() {
        return this.getHTMLNode()
    }
    get inputedValue() {
        return this.htmlElement.value
    }
    get inputedValueValidity() {
        return this.htmlElement.validity
    }
    onChange(t) {
        var e;
        let i = t.target;
        this.props.inputType === 5 && (!((e = this.inputedValueValidity) === null || e === void 0) && e.stepMismatch) && (i.value = i.value.substr(0, 16)), this.variable.value = i.value, this.setState({
            value: i.value
        }), this.props.onChange && this.throttling.throttle(() => this.props.onChange(), this.throttleValue)
    }
    preparePromptForBrowsersThatDontSupportHTML5(t) {
        let e = this.htmlElement;
        switch (t) {
            case 4:
                e.placeholder = O.Constants.FORMAT.defaultDateTimeFormat.dateFormat;
                break;
            case 3:
                e.placeholder = O.Constants.FORMAT.defaultDateTimeFormat.timeFormat;
                break;
            case 5:
                e.placeholder = O.Constants.FORMAT.defaultDateTimeFormat.dateTimeFormat;
                break
        }
    }
    componentDidMount() {
        let t = this.props.inputType;
        M.supportsHTML5Inputs === void 0 && (this.htmlElement.type !== M.toInputHtmlType(t) ? M.supportsHTML5Inputs = !1 : M.supportsHTML5Inputs = !0), this.props.prompt === void 0 && (t === 4 || t === 5 || t === 3) && (M.supportsHTML5Inputs || this.preparePromptForBrowsersThatDontSupportHTML5(t))
    }
    UNSAFE_componentWillReceiveProps(t) {
        let e = this.getHTMLNode(),
            i = t.variable.value.valueOf().toString(),
            s = it.JSConversions.convertTo(e.value, this.variable.type).valueOf().toString() === i,
            o = M.getShowDefaultValue(t);
        (this.shouldUpdateValue(t.variable) && !s || o !== this.ShowDefaultValue) && (this.ShowDefaultValue = o, this.updateValue(t.variable.value))
    }
    componentWillUnmount() {
        this.throttling.dispose()
    }
    updateValue(t) {
        this.setState({
            value: this.convertFromModel(t)
        })
    }
    static toInputHtmlType(t) {
        switch (t) {
            case 0:
                return "text";
            case 1:
                return "password";
            case 2:
                return "number";
            case 3:
                return "time";
            case 4:
                return "date";
            case 5:
                return "datetime-local";
            case 6:
                return "tel";
            case 7:
                return "email";
            case 8:
                return "search";
            default:
                return ""
        }
    }
    shouldUseDefaultProperty(t) {
        return !this.props.extendedProperties || !this.props.extendedProperties.hasOwnProperty(t)
    }
    render() {
        let t = {
            "data-input": "",
            className: this.props.style,
            disabled: !this.props.enabled,
            required: this.props.mandatory,
            type: M.toInputHtmlType(this.props.inputType),
            placeholder: this.props.prompt,
            onChange: a(i => this.onChange(i), "onChange"),
            value: this.state.value.toString(),
            "aria-required": this.props.mandatory
        };
        switch (this.ShowDefaultValue !== M.ShowDefaultValueDefault && (t[M.ShowDefaultValueRuntimeAttribute] = this.ShowDefaultValue), this.hasValidationMessage() && (t["aria-describedby"] = this.getId() + M.DescribedBySuffix), this.props.inputType) {
            case 2:
                switch (this.props.variable.type) {
                    case O.DataTypes.Integer:
                        this.shouldUseDefaultProperty("pattern") && (t.pattern = "[0-9]*"), t.max = O.Constants.MAX_INTEGER_VALUE;
                        break;
                    case O.DataTypes.LongInteger:
                        this.shouldUseDefaultProperty("pattern") && (t.pattern = "[0-9]*"), t.max = O.Constants.MAX_LONGINTEGER_VALUE.toString();
                        break;
                    case O.DataTypes.Currency:
                    case O.DataTypes.Decimal:
                        this.shouldUseDefaultProperty("pattern") && (t.pattern = "[0-9]+.[0-9]*"), this.shouldUseDefaultProperty("step") && (t.step = "any");
                        break
                }
                break;
            case 3:
            case 5:
            case 4:
                break;
            default:
                this.props.maxLength > 0 && (t.maxLength = this.props.maxLength);
                break
        }
        this.fillWithBuiltinProperties(t), delete t[z.CustomThrottlingProperty];
        let e = {
            className: "input-" + t.type
        };
        return v.jsxs("span", Object.assign({}, e, {
            children: [v.jsx("input", Object.assign({}, t)), this.createValidationElement()]
        }))
    }
}, a(gt, "Input"), gt);
Et.ShowDefaultValueDefault = !1;
Et.ShowDefaultValueRuntimeAttribute = "data-show-default-value";
Et.ShowDefaultValueProperty = "show-default-value";
Et.supportsHTML5Inputs = void 0;
Et = M = N([S.WidgetSpec], Et);
var Vi = (0, L.forwardRef)((n, t) => {
        let {
            style: e,
            gridProperties: i,
            mandatory: r,
            children: s
        } = n, o = {
            "data-label": "",
            className: e,
            htmlFor: D.getSiblingWidgetId(n)
        };
        return r && (o.className = (o.className === void 0 ? "" : o.className + " ") + "mandatory"), i != null && i.width && (o.className = (o.className === void 0 ? "" : o.className + " ") + "OSInline"), D.fillWithBuiltinProperties(o, t, n), v.jsx("label", Object.assign({}, o, {
            children: s
        }))
    }),
    Qi = U(Vi),
    Xe = {},
    Di = a(n => encodeURIComponent(n).replace(/[!'()*]/g, t => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), "strictUriEncode"),
    Ge = "%[a-f0-9]{2}",
    Ie = new RegExp("(" + Ge + ")|([^%]+?)", "gi"),
    Ne = new RegExp("(" + Ge + ")+", "gi");

function te(n, t) {
    try {
        return [decodeURIComponent(n.join(""))]
    } catch (r) {}
    if (n.length === 1) return n;
    t = t || 1;
    var e = n.slice(0, t),
        i = n.slice(t);
    return Array.prototype.concat.call([], te(e), te(i))
}
a(te, "decodeComponents");

function Oi(n) {
    try {
        return decodeURIComponent(n)
    } catch (i) {
        for (var t = n.match(Ie) || [], e = 1; e < t.length; e++) n = te(t, e).join(""), t = n.match(Ie) || [];
        return n
    }
}
a(Oi, "decode");

function Wi(n) {
    for (var t = {
            "%FE%FF": "\uFFFD\uFFFD",
            "%FF%FE": "\uFFFD\uFFFD"
        }, e = Ne.exec(n); e;) {
        try {
            t[e[0]] = decodeURIComponent(e[0])
        } catch (h) {
            var i = Oi(e[0]);
            i !== e[0] && (t[e[0]] = i)
        }
        e = Ne.exec(n)
    }
    t["%C2"] = "\uFFFD";
    for (var r = Object.keys(t), s = 0; s < r.length; s++) {
        var o = r[s];
        n = n.replace(new RegExp(o, "g"), t[o])
    }
    return n
}
a(Wi, "customDecodeURIComponent");
var ji = a(function(n) {
        if (typeof n != "string") throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof n + "`");
        try {
            return n = n.replace(/\+/g, " "), decodeURIComponent(n)
        } catch (t) {
            return Wi(n)
        }
    }, "decodeUriComponent"),
    Ii = a((n, t) => {
        if (!(typeof n == "string" && typeof t == "string")) throw new TypeError("Expected the arguments to be of type `string`");
        if (t === "") return [n];
        let e = n.indexOf(t);
        return e === -1 ? [n] : [n.slice(0, e), n.slice(e + t.length)]
    }, "splitOnFirst"),
    Ni = a(function(n, t) {
        for (var e = {}, i = Object.keys(n), r = Array.isArray(t), s = 0; s < i.length; s++) {
            var o = i[s],
                h = n[o];
            (r ? t.indexOf(o) !== -1 : t(o, h, n)) && (e[o] = h)
        }
        return e
    }, "filterObj");
(function(n) {
    let t = Di,
        e = ji,
        i = Ii,
        r = Ni,
        s = a(l => l == null, "isNullOrUndefined"),
        o = Symbol("encodeFragmentIdentifier");

    function h(l) {
        switch (l.arrayFormat) {
            case "index":
                return c => (u, d) => {
                    let p = u.length;
                    return d === void 0 || l.skipNull && d === null || l.skipEmptyString && d === "" ? u : d === null ? [...u, [b(c, l), "[", p, "]"].join("")] : [...u, [b(c, l), "[", b(p, l), "]=", b(d, l)].join("")]
                };
            case "bracket":
                return c => (u, d) => d === void 0 || l.skipNull && d === null || l.skipEmptyString && d === "" ? u : d === null ? [...u, [b(c, l), "[]"].join("")] : [...u, [b(c, l), "[]=", b(d, l)].join("")];
            case "colon-list-separator":
                return c => (u, d) => d === void 0 || l.skipNull && d === null || l.skipEmptyString && d === "" ? u : d === null ? [...u, [b(c, l), ":list="].join("")] : [...u, [b(c, l), ":list=", b(d, l)].join("")];
            case "comma":
            case "separator":
            case "bracket-separator": {
                let c = l.arrayFormat === "bracket-separator" ? "[]=" : "=";
                return u => (d, p) => p === void 0 || l.skipNull && p === null || l.skipEmptyString && p === "" ? d : (p = p === null ? "" : p, d.length === 0 ? [
                    [b(u, l), c, b(p, l)].join("")
                ] : [
                    [d, b(p, l)].join(l.arrayFormatSeparator)
                ])
            }
            default:
                return c => (u, d) => d === void 0 || l.skipNull && d === null || l.skipEmptyString && d === "" ? u : d === null ? [...u, b(c, l)] : [...u, [b(c, l), "=", b(d, l)].join("")]
        }
    }
    a(h, "encoderForArrayFormat");

    function m(l) {
        let c;
        switch (l.arrayFormat) {
            case "index":
                return (u, d, p) => {
                    if (c = /\[(\d*)\]$/.exec(u), u = u.replace(/\[\d*\]$/, ""), !c) {
                        p[u] = d;
                        return
                    }
                    p[u] === void 0 && (p[u] = {}), p[u][c[1]] = d
                };
            case "bracket":
                return (u, d, p) => {
                    if (c = /(\[\])$/.exec(u), u = u.replace(/\[\]$/, ""), !c) {
                        p[u] = d;
                        return
                    }
                    if (p[u] === void 0) {
                        p[u] = [d];
                        return
                    }
                    p[u] = [].concat(p[u], d)
                };
            case "colon-list-separator":
                return (u, d, p) => {
                    if (c = /(:list)$/.exec(u), u = u.replace(/:list$/, ""), !c) {
                        p[u] = d;
                        return
                    }
                    if (p[u] === void 0) {
                        p[u] = [d];
                        return
                    }
                    p[u] = [].concat(p[u], d)
                };
            case "comma":
            case "separator":
                return (u, d, p) => {
                    let f = typeof d == "string" && d.includes(l.arrayFormatSeparator),
                        g = typeof d == "string" && !f && C(d, l).includes(l.arrayFormatSeparator);
                    d = g ? C(d, l) : d;
                    let w = f || g ? d.split(l.arrayFormatSeparator).map(V => C(V, l)) : d === null ? d : C(d, l);
                    p[u] = w
                };
            case "bracket-separator":
                return (u, d, p) => {
                    let f = /(\[\])$/.test(u);
                    if (u = u.replace(/\[\]$/, ""), !f) {
                        p[u] = d && C(d, l);
                        return
                    }
                    let g = d === null ? [] : d.split(l.arrayFormatSeparator).map(w => C(w, l));
                    if (p[u] === void 0) {
                        p[u] = g;
                        return
                    }
                    p[u] = [].concat(p[u], g)
                };
            default:
                return (u, d, p) => {
                    if (p[u] === void 0) {
                        p[u] = d;
                        return
                    }
                    p[u] = [].concat(p[u], d)
                }
        }
    }
    a(m, "parserForArrayFormat");

    function y(l) {
        if (typeof l != "string" || l.length !== 1) throw new TypeError("arrayFormatSeparator must be single character string")
    }
    a(y, "validateArrayFormatSeparator");

    function b(l, c) {
        return c.encode ? c.strict ? t(l) : encodeURIComponent(l) : l
    }
    a(b, "encode");

    function C(l, c) {
        return c.decode ? e(l) : l
    }
    a(C, "decode");

    function j(l) {
        return Array.isArray(l) ? l.sort() : typeof l == "object" ? j(Object.keys(l)).sort((c, u) => Number(c) - Number(u)).map(c => l[c]) : l
    }
    a(j, "keysSorter");

    function H(l) {
        let c = l.indexOf("#");
        return c !== -1 && (l = l.slice(0, c)), l
    }
    a(H, "removeHash");

    function _(l) {
        let c = "",
            u = l.indexOf("#");
        return u !== -1 && (c = l.slice(u)), c
    }
    a(_, "getHash");

    function B(l) {
        l = H(l);
        let c = l.indexOf("?");
        return c === -1 ? "" : l.slice(c + 1)
    }
    a(B, "extract");

    function Y(l, c) {
        return c.parseNumbers && !Number.isNaN(Number(l)) && typeof l == "string" && l.trim() !== "" ? l = Number(l) : c.parseBooleans && l !== null && (l.toLowerCase() === "true" || l.toLowerCase() === "false") && (l = l.toLowerCase() === "true"), l
    }
    a(Y, "parseValue");

    function q(l, c) {
        c = Object.assign({
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1
        }, c), y(c.arrayFormatSeparator);
        let u = m(c),
            d = Object.create(null);
        if (typeof l != "string" || (l = l.trim().replace(/^[?#&]/, ""), !l)) return d;
        for (let p of l.split("&")) {
            if (p === "") continue;
            let [f, g] = i(c.decode ? p.replace(/\+/g, " ") : p, "=");
            g = g === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(c.arrayFormat) ? g : C(g, c), u(C(f, c), g, d)
        }
        for (let p of Object.keys(d)) {
            let f = d[p];
            if (typeof f == "object" && f !== null)
                for (let g of Object.keys(f)) f[g] = Y(f[g], c);
            else d[p] = Y(f, c)
        }
        return c.sort === !1 ? d : (c.sort === !0 ? Object.keys(d).sort() : Object.keys(d).sort(c.sort)).reduce((p, f) => {
            let g = d[f];
            return g && typeof g == "object" && !Array.isArray(g) ? p[f] = j(g) : p[f] = g, p
        }, Object.create(null))
    }
    a(q, "parse"), n.extract = B, n.parse = q, n.stringify = (l, c) => {
        if (!l) return "";
        c = Object.assign({
            encode: !0,
            strict: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ","
        }, c), y(c.arrayFormatSeparator);
        let u = a(g => c.skipNull && s(l[g]) || c.skipEmptyString && l[g] === "", "shouldFilter"),
            d = h(c),
            p = {};
        for (let g of Object.keys(l)) u(g) || (p[g] = l[g]);
        let f = Object.keys(p);
        return c.sort !== !1 && f.sort(c.sort), f.map(g => {
            let w = l[g];
            return w === void 0 ? "" : w === null ? b(g, c) : Array.isArray(w) ? w.length === 0 && c.arrayFormat === "bracket-separator" ? b(g, c) + "[]" : w.reduce(d(g), []).join("&") : b(g, c) + "=" + b(w, c)
        }).filter(g => g.length > 0).join("&")
    }, n.parseUrl = (l, c) => {
        c = Object.assign({
            decode: !0
        }, c);
        let [u, d] = i(l, "#");
        return Object.assign({
            url: u.split("?")[0] || "",
            query: q(B(l), c)
        }, c && c.parseFragmentIdentifier && d ? {
            fragmentIdentifier: C(d, c)
        } : {})
    }, n.stringifyUrl = (l, c) => {
        c = Object.assign({
            encode: !0,
            strict: !0,
            [o]: !0
        }, c);
        let u = H(l.url).split("?")[0] || "",
            d = n.extract(l.url),
            p = n.parse(d, {
                sort: !1
            }),
            f = Object.assign(p, l.query),
            g = n.stringify(f, c);
        g && (g = `?${g}`);
        let w = _(l.url);
        return l.fragmentIdentifier && (w = `#${c[o]?b(l.fragmentIdentifier,c):l.fragmentIdentifier}`), `${u}${g}${w}`
    }, n.pick = (l, c, u) => {
        u = Object.assign({
            parseFragmentIdentifier: !0,
            [o]: !1
        }, u);
        let {
            url: d,
            query: p,
            fragmentIdentifier: f
        } = n.parseUrl(l, u);
        return n.stringifyUrl({
            url: d,
            query: r(p, c),
            fragmentIdentifier: f
        }, u)
    }, n.exclude = (l, c, u) => {
        let d = Array.isArray(c) ? p => !c.includes(p) : (p, f) => !c(p, f);
        return n.pick(l, d, u)
    }
})(Xe);

function Ke() {
    if (typeof globalThis != "undefined") return globalThis;
    if (typeof window != "undefined") return window;
    if (typeof global != "undefined") return global;
    if (typeof self != "undefined") return self;
    throw new Error("Unable to locate global object")
}
a(Ke, "getGlobalObject");

function Je(n) {
    let {
        message: t,
        onConfirm: e,
        onCancel: i,
        globalObj: r = Ke(),
        getNative: s = a(() => Fi(r), "getNative")
    } = n, o = s();
    o ? o.confirm(t, h => {
        h === ee.ok ? e == null || e() : i == null || i()
    }, "") : r.confirm(t) ? e == null || e() : i == null || i()
}
a(Je, "askConfirmation");

function Fi() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ke();
    var t;
    let e = (t = n == null ? void 0 : n.navigator) === null || t === void 0 ? void 0 : t.notification;
    if (ki(e)) return e
}
a(Fi, "getCordovaNotification");
var ee;
(function(n) {
    n[n.nothing = 0] = "nothing", n[n.ok = 1] = "ok", n[n.cancel = 2] = "cancel"
})(ee || (ee = {}));

function ki(n) {
    return typeof n == "object" && n !== null && "confirm" in n && typeof n.confirm == "function"
}
a(ki, "isCordovaNotification");
var ie, mt, ne = ie = (mt = class extends S.Widget {
    constructor() {
        super(...arguments), this.handleClickForAction = t => {
            t.preventDefault(), t.stopPropagation();
            let {
                onClick: e
            } = this.props, i = a(() => this.executeWithActiveClassOn(() => e == null ? void 0 : e()), "click"), r = this.props.confirmationMessage;
            r ? Je({
                message: r,
                onConfirm: i
            }) : i()
        }
    }
    render() {
        var t;
        let {
            url: e,
            enabled: i,
            style: r,
            transition: s,
            children: o
        } = this.props, h = {
            "data-link": "",
            className: r,
            disabled: !i,
            href: void 0
        };
        if (i)
            if (e) {
                h.onClick = y => ie.handleClickForUrl({
                    event: y,
                    message: this.props.confirmationMessage,
                    transition: s,
                    to: h.to || e
                });
                let m = qt.getUrlInfo(e);
                if (m.isInternal) return h.to = {
                    pathname: m.path,
                    search: Object.keys((t = m.queryParams) !== null && t !== void 0 ? t : {}).length > 0 ? `?${Xe.stringify(m.queryParams)}` : "",
                    state: {
                        transition: s
                    }
                }, h.state = {
                    transition: s
                }, h.activeClassName = "active", h.isActive = (y, b) => y ? y.isExact && h.to.search === b.search : !1, this.fillWithBuiltinProperties(h), v.jsx(He.NavLink, Object.assign({}, h, {
                    children: o
                }));
                h.href = e
            } else h.onClick = this.handleClickForAction, h.href = "#";
        return this.fillWithBuiltinProperties(h), v.jsx("a", Object.assign({}, h, {
            children: o
        }))
    }
}, a(mt, "Link"), mt);
ne.handleClickForUrl = n => {
    let {
        event: t,
        to: e,
        message: i,
        transition: r,
        navTo: s = a((h, m) => qt.navigateTo(h, m), "navTo"),
        askConfirm: o = Je
    } = n;
    t.stopPropagation(), i && (t.preventDefault(), o({
        message: i,
        onConfirm: a(() => {
            var m;
            let y = typeof e == "string" ? e : `${e.pathname}${(m=e.search)!==null&&m!==void 0?m:""}`;
            s(y, r)
        }, "onConfirm")
    }))
};
ne = ie = N([S.WidgetSpec], ne);
var It, Fe = "reactContainer",
    vt, re = It = (vt = class extends S.Widget {
        constructor(t, e) {
            super(t, e), this.updateMainContainerAriaHiddenAttr(), this.focusFirstFocusableElement = this.focusFirstFocusableElement.bind(this)
        }
        componentDidMount() {
            this.focusFirstFocusableElement()
        }
        componentWillUnmount() {
            this.disableScroll(!1), this.updateMainContainerAriaHiddenAttr()
        }
        UNSAFE_componentWillMount() {
            this.disableScroll(this.props.showPopup)
        }
        UNSAFE_componentWillUpdate(t) {
            this.disableScroll(t.showPopup)
        }
        componentDidUpdate() {
            this.updateMainContainerAriaHiddenAttr()
        }
        disableScroll(t) {
            t ? document.documentElement.classList.add(It.DisableScrollClass) : document.documentElement.classList.remove(It.DisableScrollClass)
        }
        updateMainContainerAriaHiddenAttr() {
            var t, e;
            this.props.showPopup ? (t = document.getElementById(Fe)) === null || t === void 0 || t.setAttribute("aria-hidden", "true") : (e = document.getElementById(Fe)) === null || e === void 0 || e.removeAttribute("aria-hidden")
        }
        focusFirstFocusableElement() {
            if (this.props.showPopup) {
                let t = this.getHTMLNode();
                if (t) {
                    let e = t.querySelector("input, button, textarea, select, a");
                    e && e.focus()
                }
            }
        }
        render() {
            if (this.props.showPopup) {
                let t = {
                    "data-popup": "",
                    className: "popup-dialog " + this.props.style,
                    role: "dialog",
                    "aria-modal": !0
                };
                return this.fillWithBuiltinProperties(t), v.jsx(Se, {
                    children: v.jsx("div", {
                        className: "popup-backdrop",
                        "data-popup-backdrop": "",
                        children: v.jsx("div", Object.assign({}, t, {
                            children: v.jsx("div", {
                                className: "popup-content",
                                children: this.props.children
                            })
                        }))
                    })
                })
            } else return null
        }
    }, a(vt, "Popup"), vt);
re.DisableScrollClass = "popup-disable-scroll";
re = It = N([S.WidgetSpec], re);
var se, bt, ke = se = (bt = class extends S.Widget {
    static toHtmlAlign(t) {
        switch (t) {
            case 2:
                return "center";
            case 1:
                return "left";
            case 3:
                return "right";
            default:
                return
        }
    }
    hasOrWillHaveChildren(t) {
        return !0
    }
    serializeCustomStateProperties() {
        return G.serializeScrollProperties(this.getHTMLNode())
    }
    loadCustomStateProperties(t) {
        G.loadScrollProperties(this.getHTMLNode(), t)
    }
    render() {
        let t = {
                textAlign: se.toHtmlAlign(this.props.align),
                minHeight: this.props.height,
                cursor: this.props.extendedEvents && this.props.extendedEvents.onClick ? "pointer" : void 0
            },
            e = {
                className: this.props.style,
                style: t
            };
        return this.fillWithBuiltinProperties(e), P.createElement(J.HtmlTags.div, e, ye.wrapElements(this.props.content.render()))
    }
}, a(bt, "Placeholder"), bt);
ke = se = N([S.WidgetSpec], ke);
var wt, Me = (wt = class extends S.Widget {
    constructor(t, e) {
        super(t, e), this.bottomPlaceholderRef = P.createRef(), this.popoverRef = P.createRef(), this.outerOnClickHander = i => {
            this.isElementInsidePopover(i.target) || (this.unregisterOuterOnClickEvent(), this.setState({
                expanded: !1
            }))
        }, this.state = {
            expanded: !1
        }
    }
    show(t) {
        t.stopPropagation(), this.registerOuterOnClickEvent(), this.setState({
            expanded: !0
        })
    }
    hide(t) {
        t.stopPropagation(), this.setState({
            expanded: !1
        })
    }
    registerOuterOnClickEvent() {
        document.addEventListener("click", this.outerOnClickHander, {
            capture: !0
        })
    }
    unregisterOuterOnClickEvent() {
        document.removeEventListener("click", this.outerOnClickHander, {
            capture: !0
        })
    }
    isElementInsidePopover(t) {
        let e = this.popoverRef.current;
        return e ? t && (t === e || e.contains(t)) : !1
    }
    adjustPositionBasedOnViewport() {
        if (this.state.expanded) {
            let t = this.bottomPlaceholderRef.current;
            if (t === null) return;
            let e = t.getBoundingClientRect();
            e.left < 0 ? t.classList.add("align-left") : e.right > window.innerWidth ? t.classList.add("align-right") : t.classList.add("align-center"), e.bottom > window.innerHeight && t.classList.add("align-bottom")
        }
    }
    componentDidUpdate() {
        this.adjustPositionBasedOnViewport()
    }
    componentDidMount() {
        this.adjustPositionBasedOnViewport()
    }
    componentWillUnmount() {
        this.unregisterOuterOnClickEvent()
    }
    preparePopoverAttributes() {
        let t = {
            "data-popover": "",
            className: this.props.style
        };
        return this.fillWithBuiltinProperties(t), this.state.expanded && (t.className += " popover-expanded"), t
    }
    preparePopoverTopPlaceholderAttributes() {
        return {
            className: "popover-top",
            onClick: a(e => this.show(e), "onClick")
        }
    }
    preparePopoverBottomPlaceholderAttributes() {
        let t = {
            width: this.props.popoverWidth ? this.props.popoverWidth + "px" : ""
        };
        return {
            className: "popover-bottom ",
            onClick: a(i => this.hide(i), "onClick"),
            style: t,
            ref: this.bottomPlaceholderRef
        }
    }
    render() {
        let t = v.jsx("div", Object.assign({}, this.preparePopoverTopPlaceholderAttributes(), {
                children: this.props.placeholders.topContent.render()
            })),
            e = this.state.expanded ? v.jsx("div", Object.assign({}, this.preparePopoverBottomPlaceholderAttributes(), {
                children: this.props.placeholders.bottomContent.render()
            })) : null,
            i = Object.assign(Object.assign({}, this.preparePopoverAttributes()), {
                ref: this.popoverRef
            });
        return v.jsxs("div", Object.assign({}, i, {
            children: [t, e]
        }))
    }
}, a(wt, "Popover"), wt);
Me = N([S.WidgetSpec], Me);
var Mi = (0, L.forwardRef)((n, t) => {
        var e;
        let {
            variable: i,
            style: r,
            enabled: s
        } = n, o = (0, L.useRef)(!1);
        (0, L.useEffect)(() => () => {
            o.current = !0
        }, []);
        let [h, m] = $t({
            widgetProps: n
        });
        h.current = n.variable, m.current = {
            value: i.value,
            validity: (e = t == null ? void 0 : t.current) === null || e === void 0 ? void 0 : e.validity
        };
        let y = a(C => {
                let j = C.target;
                i.value = j.checked, D.executeAfterPaint(() => {
                    o.current || D.executeWithActiveClassOn(() => n.onChange(), () => t == null ? void 0 : t.current)
                })
            }, "onChange"),
            b = {
                "data-switch": "",
                className: r,
                disabled: !s,
                type: "checkbox",
                onChange: a(C => y(C), "onChange"),
                checked: i.value
            };
        return D.fillWithBuiltinProperties(b, t, n), D.fillWithValidationProperties(b, n), v.jsxs("span", {
            children: [v.jsx("input", Object.assign({}, b)), v.jsx(zt, Object.assign({}, n))]
        })
    }),
    Zi = U(Mi, {
        isValidationWidget: !0
    }),
    Bi = (0, L.forwardRef)((n, t) => {
        let {
            text: e,
            style: i
        } = n, r = {
            className: i
        };
        return D.fillWithBuiltinProperties(r, t, n), v.jsx("span", Object.assign({}, r, {
            children: e
        }))
    }),
    tn = U(Bi),
    yt, Be = (yt = class extends S.InputWithVariableWidget {
        constructor(t, e) {
            super(t, e), this.state = {
                value: ""
            }, this.throttling = new z
        }
        onChange(t) {
            let e = t.target;
            this.variable.value = e.value, this.setState({
                value: e.value
            }), this.props.onChange && this.throttling.throttle(() => this.props.onChange(), this.throttleValue)
        }
        get htmlElement() {
            return this.getHTMLNode()
        }
        get inputedValue() {
            return this.htmlElement.value
        }
        get inputedValueValidity() {
            return this.htmlElement.validity
        }
        get isMandatory() {
            return this.props.mandatory
        }
        get variable() {
            return this.props.variable
        }
        componentDidMount() {
            if (this.updateValue(this.props.variable.value), this.props.extendedProperties) {
                let t = this.props.extendedProperties[z.CustomThrottlingProperty];
                typeof t != "undefined" && (this.throttleValue = parseInt(t, 10))
            }
        }
        updateValue(t) {
            this.setState({
                value: t
            })
        }
        UNSAFE_componentWillReceiveProps(t) {
            this.props.variable.value !== t.variable.value && this.updateValue(t.variable.value)
        }
        componentWillUnmount() {
            this.throttling.dispose()
        }
        render() {
            let t = {
                "data-textarea": "",
                className: this.props.style,
                disabled: !this.props.enabled,
                required: this.props.mandatory,
                rows: this.props.textLines,
                placeholder: this.props.prompt,
                onChange: a(e => this.onChange(e), "onChange"),
                value: this.state.value.toString()
            };
            return this.props.maxLength > 0 && (t.maxLength = this.props.maxLength), this.fillWithBuiltinProperties(t), delete t[z.CustomThrottlingProperty], P.createElement(J.HtmlTags.span, null, P.createElement(J.HtmlTags.textarea, t), this.createValidationElement())
        }
    }, a(yt, "TextArea"), yt);
Be = N([S.WidgetSpec], Be);
var Ft;
(function(n) {
    n.ENTER_KEY = "Enter", n.SPACE_KEY = " "
})(Ft || (Ft = {}));
var oe, St, ae = oe = (St = class extends S.InputWithVariableWidget {
    constructor(t, e) {
        super(t, e), this.hiddenInputRef = P.createRef(), this.state = {
            filename: null,
            value: null
        }
    }
    get isMandatory() {
        return this.props.mandatory
    }
    get variable() {
        return this.props.fileContent
    }
    get hiddenInput() {
        return this.hiddenInputRef.current
    }
    get inputedValue() {
        return this.variable
    }
    get inputedValueValidity() {
        return this.hiddenInput.validity
    }
    getAcceptProperty() {
        let t;
        switch (this.props.accept) {
            case 0:
                t = "image/*";
                break;
            case 1:
                t = "video/*";
                break;
            default:
                t = ""
        }
        return t
    }
    handleFileSelect(t) {
        var e;
        let i = (e = t.target.files) === null || e === void 0 ? void 0 : e[0],
            r = i == null ? void 0 : i.name,
            s = this.state.filename;
        if (i && r && s !== r) {
            let h = new FileReader;
            h.onload = m => {
                let y = m.target.result,
                    b = y.indexOf(";base64,"),
                    C = y.substr(b + 8),
                    j = new O.BinaryData(C);
                this.props.fileName && (this.props.fileName.value = r), this.variable.value = j, this.setState({
                    filename: r,
                    value: j
                }), this.props.onChange && this.props.onChange()
            }, h.readAsDataURL(i)
        }
    }
    UNSAFE_componentWillReceiveProps(t) {
        this.shouldUpdateValue(t.fileContent) && this.updateValue(t.fileName.value, t.fileContent.value)
    }
    updateValue(t, e) {
        this.setState({
            filename: t,
            value: e
        }), e.content === null && this.hiddenInputRef.current && (this.hiddenInputRef.current.value = "")
    }
    render() {
        let i = {
                type: "file",
                accept: this.getAcceptProperty(),
                style: {
                    display: "none"
                },
                onChange: a(m => this.handleFileSelect(m), "onChange"),
                ref: this.hiddenInputRef,
                required: this.props.mandatory
            },
            r = this.props.extendedProperties;
        if (r)
            for (let m in r) this.shouldIncludeOnExtendedProperty(m) && (i[m] = r[m]);
        let s = {
            "data-upload": "",
            className: this.props.style,
            onKeyDown: a(m => {
                (m.key === Ft.ENTER_KEY || m.key === Ft.SPACE_KEY) && this.hiddenInput.click()
            }, "onKeyDown"),
            tabIndex: 0
        };
        this.variable.value.hasContent() && (s.className += " uploaded"), this.fillWithBuiltinProperties(s);
        let o = {
                className: "upload-" + i.type
            },
            h = P.createElement(J.HtmlTags.label, s, P.createElement(J.HtmlTags.input, i), this.props.children);
        return P.createElement(J.HtmlTags.span, o, h, this.createValidationElement())
    }
    shouldIncludeOnExtendedProperty(t) {
        if (t === "style") return !1;
        if (t === oe.Capture && me.isRunningOnNative()) {
            let e = window;
            if (e.device && e.device.platform.toLowerCase() === "android" && /^[7-9](\..*)?$/.test(e.device.version)) return !1
        }
        return !0
    }
}, a(St, "Upload"), St);
ae.Capture = "capture";
ae = oe = N([S.WidgetSpec], ae);
var Hi = "6.13.1";
pe.registerPackage("client-runtime-widgets", Hi);
export {
    qi as a, $i as b, Ee as c, zi as d, Yi as e, Ae as f, Te as g, Pe as h, Xi as i, xt as j, De as k, Qt as l, Zt as m, Oe as n, We as o, Ki as p, Ji as q, Et as r, Qi as s, ne as t, re as u, ke as v, Zi as w, tn as x
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */