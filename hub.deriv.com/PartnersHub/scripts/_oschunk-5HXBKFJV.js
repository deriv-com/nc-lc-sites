import {
    a as fe,
    b as ai,
    c as ve,
    e as k,
    f as q,
    h as be,
    i as m,
    k as we
} from "./_oschunk-2Q3BG5XZ.js";
import {
    _ as K,
    c as de,
    e as ue,
    h as ge,
    m as me,
    n as _t,
    v as W,
    y as Y
} from "./_oschunk-5KJVGEL7.js";
import {
    c as l,
    h as Xt
} from "./_oschunk-QHO7QY6K.js";
var c = Xt(fe()),
    Ke = Xt(fe()),
    Je = Xt(ai());

function Se(r, t) {
    var e = {};
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && t.indexOf(i) < 0 && (e[i] = r[i]);
    if (r != null && typeof Object.getOwnPropertySymbols == "function") {
        var s = 0;
        for (i = Object.getOwnPropertySymbols(r); s < i.length; s++) t.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[s]) && (e[i[s]] = r[i[s]])
    }
    return e
}
l(Se, "b");

function x(r, t, e, i) {
    var s, n = arguments.length,
        o = n < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, e) : i;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(r, t, e, i);
    else
        for (var h = r.length - 1; h >= 0; h--)(s = r[h]) && (o = (n < 3 ? s(o) : n > 3 ? s(t, e, o) : s(t, e)) || o);
    return n > 3 && o && Object.defineProperty(t, e, o), o
}
l(x, "w");
var Z, ye = (Z = class extends m.Widget {
    render() {
        let t = c.createElement.bind(null, this.props.tag);
        if (t) {
            let e = {
                "data-advancedhtml": ""
            };
            return this.fillWithBuiltinProperties(e), t(e, this.props.children)
        }
        return null
    }
}, l(Z, "S"), Z);
ye = x([m.WidgetSpec], ye);
var tt, Ee = (tt = class extends m.Widget {
    handleClick(t) {
        t.preventDefault(), t.stopPropagation();
        let {
            onClick: e
        } = this.props, i = l(() => e == null ? void 0 : e(), "i");
        if (this.props.confirmationMessage && this.props.confirmationMessage.length) {
            let s = navigator.notification;
            s ? s.confirm(this.props.confirmationMessage, n => {
                n === 1 && this.executeWithActiveClassOn(i)
            }, "") : window.confirm(this.props.confirmationMessage) && this.executeWithActiveClassOn(i)
        } else this.executeWithActiveClassOn(i)
    }
    render() {
        let t = {
            "data-button": "",
            className: this.props.style,
            type: this.props.isDefault ? "submit" : "button",
            disabled: !this.props.enabled,
            onClick: l(e => this.handleClick(e), "onClick")
        };
        return this.fillWithBuiltinProperties(t), c.createElement(k.HtmlTags.button, t, this.props.children)
    }
}, l(tt, "y"), tt);
Ee = x([m.WidgetSpec], Ee);
var ae = class ae extends m.InputWithVariableWidget {
    constructor() {
        super(...arguments), this.selectedValue = null
    }
    syncSelectedValueWithProps() {
        this.selectedValue = null;
        let t = !1;
        c.Children.forEach(this.props.children, e => {
            t = t || e && e.props && W.equals(this.props.variable.value, e.props.value)
        }), this.selectedValue = t ? this.props.variable.value : null
    }
    componentDidMount() {
        this.syncSelectedValueWithProps()
    }
    componentDidUpdate() {
        this.syncSelectedValueWithProps()
    }
    updateValue(t) {
        W.equals(this.props.variable.value, t) || (this.selectedValue = t, this.props.variable.value = t, this.props.onChange && this.executeAfterPaint(() => {
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
            e = c.Children.map(this.props.children, (s, n) => (s && s.props && (s = c.cloneElement(s, Object.assign({
                isSelected: W.equals(this.props.variable.value, s.props.value),
                enabled: s.props.enabled && this.props.enabled,
                updateValueInParent: l(o => {
                    this.updateValue(o)
                }, "updateValueInParent"),
                key: n
            }, this.getAdditionalPropsToChild()))), s)),
            i = {
                [t]: "",
                className: this.props.style,
                role: "radiogroup",
                "aria-activedescendant": this.selectedValue
            };
        return this.fillWithBuiltinProperties(i), c.createElement("div", Object.assign({}, i), c.createElement("div", null, e), this.createValidationElement())
    }
};
l(ae, "E");
var qt = ae,
    et, Ce = (et = class extends qt {
        getAdditionalPropsToChild() {
            return {}
        }
        getDataAttribute() {
            return "data-button-group"
        }
    }, l(et, "C"), et);
Ce = x([m.WidgetSpec], Ce);
var it, xe = (it = class extends m.Widget {
    handleClick(t) {
        this.executeWithActiveClassOn(() => this.props.updateValueInParent(this.props.value))
    }
    render() {
        let t = {
            "data-button-group-item": "",
            className: this.props.style + (this.props.isSelected ? " button-group-selected-item" : ""),
            disabled: !this.props.enabled,
            "aria-checked": `${this.props.isSelected}`,
            role: "radio",
            onClick: l(e => this.handleClick(e), "onClick")
        };
        return this.fillWithBuiltinProperties(t), c.createElement("button", Object.assign({}, t), this.props.children)
    }
}, l(it, "x"), it);
xe = x([m.WidgetSpec], xe);
var st, Te = (st = class extends m.InputWithVariableWidget {
    constructor(t, e) {
        super(t, e), this.state = {
            value: t.variable.value
        }
    }
    onChange(t) {
        let e = t.target;
        this.props.variable.value = e.checked, this.setState({
            value: e.checked
        }, () => {
            this.props.onChange && this.executeAfterPaint(() => {
                this.executeWithActiveClassOn(() => this.props.onChange())
            })
        })
    }
    get htmlElement() {
        return this.getHTMLNode()
    }
    get inputedValue() {
        return this.htmlElement.checked
    }
    get inputedValueValidity() {
        return this.htmlElement.validity
    }
    get variable() {
        return this.props.variable
    }
    updateValue(t) {
        this.setState({
            value: t
        })
    }
    UNSAFE_componentWillReceiveProps(t) {
        this.props.variable.value !== t.variable.value && this.updateValue(t.variable.value)
    }
    render() {
        let t = {
            "data-checkbox": "",
            className: this.props.style,
            disabled: !this.props.enabled,
            type: "checkbox",
            onChange: l(e => this.onChange(e), "onChange"),
            onClick: l(e => e.stopPropagation(), "onClick"),
            checked: this.state.value
        };
        return this.fillWithBuiltinProperties(t), c.createElement(k.HtmlTags.span, null, c.createElement(k.HtmlTags.input, Object.assign({}, t)), this.createValidationElement())
    }
}, l(st, "T"), st);
Te = x([m.WidgetSpec], Te);
var rt, Pe = (rt = class extends qt {
    getAdditionalPropsToChild() {
        return {
            groupName: this.getId()
        }
    }
    getDataAttribute() {
        return "data-radio-group"
    }
}, l(rt, "P"), rt);
Pe = x([m.WidgetSpec], Pe);
var nt, Le = (nt = class extends m.Widget {
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
                    value: Y.JSConversions.convertTo(this.props.value, W.DataTypes.Text),
                    hidden: !this.props.visible,
                    disabled: !this.props.enabled,
                    checked: this.props.isSelected,
                    onChange: l(() => this.handleClick(), "onChange")
                },
                s = {
                    htmlFor: t
                };
            return this.fillWithBuiltinProperties(e), c.createElement("div", Object.assign({}, e), c.createElement("input", Object.assign({}, i)), c.createElement("label", Object.assign({}, s), this.props.children))
        }
    }, l(nt, "L"), nt),
    te;
Le = x([m.WidgetSpec], Le);
var ot, Re = te = (ot = class extends m.Widget {
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
        serializeCustomStateProperties() {
            return q.serializeScrollProperties(this.getHTMLNode())
        }
        loadCustomStateProperties(t) {
            q.loadScrollProperties(this.getHTMLNode(), t)
        }
        get skipRenderWhenHidden() {
            return !1
        }
        render() {
            let t = null;
            if (this.props.visible) {
                let e = {
                        textAlign: te.toHtmlAlign(this.props.align),
                        cursor: this.props.extendedEvents && this.props.extendedEvents.onClick ? "pointer" : void 0
                    },
                    i = {
                        "data-container": "",
                        className: this.props.style,
                        style: e
                    };
                this.fillWithBuiltinProperties(i), t = c.createElement(k.HtmlTags.div, i, this.props.children)
            }
            return t
        }
    }, l(ot, "R"), ot),
    C;
Re = te = x([m.WidgetSpec], Re);
var at, I = C = (at = class extends m.InputWithVariableWidget {
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
                    if (W.equals(i, t)) return !0
                }
            return !1
        }
        setVariable() {
            if (this.props.list && this.props.list.length > 0 && !this.isValueInList(this.variable.value) && !this.isEmptyValueDefined()) {
                let t = this.props.values(this.props.list.getItem(0));
                W.equals(t, this.variable.value) || (this.variable.value = t, this.props.onChange && this.props.onChange())
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
                s = t.getBoundingClientRect();
            return {
                left: Math.round(s.left + i),
                right: Math.round(s.right + i),
                top: Math.round(s.top + e),
                bottom: Math.round(s.bottom + e)
            }
        }
        updateState() {
            let t = this.getHTMLNode(),
                e = t.childNodes[0],
                i = e.childNodes[0],
                s = t.childNodes[1];
            if (s || (t.classList.remove(C.DropdownExpandedDown), t.classList.remove(C.DropdownExpandedUp), t.classList.remove(C.DropdownExpanded)), t && e && s && i) {
                let n = {
                        left: "",
                        top: "",
                        width: "",
                        height: ""
                    },
                    o = window.pageYOffset,
                    h = window.pageXOffset,
                    v = this.getOffset(i),
                    w = this.getOffset(e),
                    A = v.left,
                    M = v.right,
                    j = w.top,
                    $ = w.bottom,
                    u = s.getBoundingClientRect(),
                    g = Math.round(u.height),
                    D = Math.round(u.width),
                    T = o + window.innerHeight,
                    S = (A + M) / 2,
                    y, a, p, d;
                window.innerWidth <= C.SmartphonePortraitWidth ? (y = window.innerWidth - 2 * C.PopupBoxMargin, n.width = Math.round(y) + "px", a = h + C.PopupBoxMargin) : (y = D, a = this.state.listVisible ? this.offsetLeft : Math.max(h, S - y / 2));
                let f = document.querySelector("[data-popup]"),
                    b = f ? f.getBoundingClientRect() : null,
                    B = b ? b.top : o;
                j - B > T - $ ? (t.classList.add(C.DropdownExpanded, C.DropdownExpandedUp), t.classList.remove(C.DropdownExpandedDown), p = j - g, p < B - C.PopupBoxMargin && (p = B + C.PopupBoxMargin, d = j - B - C.PopupBoxMargin, n.height = Math.round(d) + "px")) : (t.classList.add(C.DropdownExpanded, C.DropdownExpandedDown), t.classList.remove(C.DropdownExpandedUp), p = $, p + g > T - C.PopupBoxMargin && (d = T - $ - C.PopupBoxMargin, n.height = Math.round(d) + "px")), n.left = Math.round(a) + "px", n.top = Math.round(p) + "px", (this.state.position.left !== n.left || this.state.position.top !== n.top || this.state.position.width !== n.width || this.state.position.height !== n.height && n.height !== "") && this.setState({
                    position: n
                })
            }
        }
        isEmptyValueDefined() {
            return this.props.emptyValue && this.props.emptyValue.length > 0
        }
        prepareDropdownContainerAttributes() {
            let t = {
                "data-dropdown": "",
                className: C.DropdownContainer + " " + this.props.style
            };
            return this.fillWithBuiltinProperties(t), t
        }
        prepareDropdownDisplayAttributes() {
            return {
                className: C.DropdownDisplay + (this.props.enabled ? "" : " " + C.DropdownDisabled),
                onClick: l(t => {
                    t.stopPropagation(), this.props.enabled && this.show()
                }, "onClick")
            }
        }
        renderEmptyValue() {
            let t = null,
                e = null;
            if (this.isEmptyValueDefined()) {
                let i = this.isValueInList(this.variable.value),
                    s = c.createElement("span", null, this.props.emptyValue),
                    n = {
                        className: `${C.DropdownPopUpRow} ${C.DropdownEmptyValueRow} ${i?"":C.DropdownPopUpRowSelected}`,
                        onClick: l(o => {
                            let h = Y.JSConversions.convertTo(null, this.variable.type);
                            this.variable.value = h, this.selectedValue = h, this.props.onChange && this.props.onChange(), this.setState({
                                listVisible: !1
                            })
                        }, "onClick")
                    };
                e = c.createElement("div", Object.assign({}, n), s), i || (t = s)
            }
            return {
                selectedElement: t,
                emptyValueItem: e
            }
        }
        renderDropdownList(t) {
            let e = null,
                i = null,
                s = {
                    className: C.DropdownList,
                    style: this.state.position
                };
            return e = c.createElement("div", Object.assign({}, s), c.createElement("div", {
                className: C.ScrollableList + " " + C.ScrollableListWithScroll
            }, t, this.props.placeholders && this.props.placeholders.content.render(this, this.props.list, (n, o) => {
                let h = null;
                h = this.props.values(this.props.list.getItem(o));
                let v = {
                    onClick: l(w => this.select(h), "onClick"),
                    className: C.DropdownPopUpRow
                };
                return W.equals(h, this.variable.value) && (i = n, this.selectedValue = this.variable.value, v.className = v.className + " " + C.DropdownPopUpRowSelected), c.createElement("div", Object.assign({}, v), n)
            }))), {
                list: e,
                selectedElement: i
            }
        }
        scrollIntoSelectedElement() {
            let t = this.getHTMLNode().childNodes[1];
            if (t) {
                let e = t.getElementsByClassName(C.DropdownPopUpRowSelected)[0];
                if (e) {
                    let i = this.getScrollParent(e, t);
                    if (i && (t === i || t.contains(i))) {
                        let s = e.offsetTop,
                            n = i.offsetTop;
                        i.scrollTop = s - n
                    }
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
                return c.createElement("div", {
                    className: C.DropdownBackgroundWindow,
                    style: t,
                    onClick: l(e => this.hide(e), "onClick")
                })
            }
            return null
        }
        render() {
            let t = this.renderEmptyValue(),
                e = this.renderDropdownList(t ? t.emptyValueItem : null),
                i = this.prepareDropdownDisplayAttributes(),
                s = c.createElement("div", Object.assign({}, i), c.createElement("div", {
                    className: C.DropdownDisplayContent
                }, e.selectedElement ? e.selectedElement : t ? t.selectedElement : null));
            return c.createElement("div", Object.assign({}, this.prepareDropdownContainerAttributes()), s, this.state.listVisible ? e.list : null, this.renderDropdownBackground(), this.createValidationElement())
        }
    }, l(at, "W"), at),
    G;
I.SmartphonePortraitWidth = 420, I.PopupBoxMargin = 10, I.DropdownList = "dropdown-list", I.DropdownContainer = "dropdown-container", I.DropdownDisplay = "dropdown-display", I.DropdownDisplayContent = "dropdown-display-content", I.DropdownDisabled = "dropdown-disabled", I.DropdownPopUpRow = "dropdown-popup-row", I.DropdownPopUpRowSelected = "dropdown-popup-row-selected", I.DropdownEmptyValueRow = "drowpdown-empty-value-row", I.DropdownBackgroundWindow = "dropdown-background-window", I.ScrollableList = "scrollable-list", I.ScrollableListWithScroll = "scrollable-list-with-scroll", I.DropdownExpanded = "dropdown-expanded", I.DropdownExpandedUp = "dropdown-expanded-up", I.DropdownExpandedDown = "dropdown-expanded-down", I = C = x([m.WidgetSpec], I);
var lt, X = G = (lt = class extends m.InputWithVariableWidget {
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
                if (W.equals(i, t)) return !0
            }
        return !1
    }
    setVariable() {
        if (this.props.list && this.props.list.length > 0 && !this.isValueInList(this.variable.value) && !this.isEmptyValueDefined()) {
            let t = this.props.values(this.props.list.getItem(0));
            W.equals(t, this.variable.value) || (this.variable.value = t, this.props.onChange && this.props.onChange())
        }
    }
    isEmptyValueDefined() {
        return this.props.emptyValue && this.props.emptyValue.length > 0
    }
    getSelectedValueAndOptions() {
        var t, e;
        let i = 0,
            s = [];
        if (this.isEmptyValueDefined() && (i = G.EmptyValue, s.push(c.createElement("option", {
                key: G.EmptyValue,
                value: G.EmptyValue
            }, this.props.emptyValue))), this.props.list && this.props.list.length > 0)
            for (let n = 0; n < this.props.list.length; n++) {
                let o = this.props.list.getItem(n);
                W.equals(this.variable.value, this.props.values(o)) && (i = n, this.selectedValue = this.variable.value);
                let h = Y.JSConversions.convertTo((e = (t = this.props).labels) === null || e === void 0 ? void 0 : e.call(t, o), W.DataTypes.Text);
                s.push(c.createElement("option", {
                    key: n,
                    value: n
                }, h))
            }
        return {
            selectedValue: i,
            options: s
        }
    }
    handleChange(t) {
        let e = parseInt(t.target.value, 10),
            i = e >= 0 ? this.props.values(this.props.list.getItem(e)) : Y.JSConversions.convertTo(null, this.variable.type);
        this.variable.value = i, this.selectedValue = i, this.props.onChange && this.props.onChange()
    }
    render() {
        let t = {
                id: this.getId() + "-container",
                className: G.DropdownContainer + (this.props.enabled ? "" : " " + G.DropdownDisabled),
                "data-dropdown": ""
            },
            e = {
                className: G.DropdownDisplay + " " + this.props.style,
                onChange: this.handleChange.bind(this),
                disabled: !this.props.enabled,
                required: this.props.mandatory,
                "aria-disabled": !this.props.enabled
            };
        this.fillWithBuiltinProperties(t);
        let {
            selectedValue: i,
            options: s
        } = this.getSelectedValueAndOptions(), {
            style: n
        } = t;
        return c.createElement("div", Object.assign({}, t, {
            style: void 0
        }), c.createElement("select", Object.assign({}, e, {
            id: this.getId(),
            style: n,
            value: i
        }), s), this.createValidationElement())
    }
}, l(lt, "D"), lt);
X.DropdownContainer = "dropdown-container", X.DropdownDisplay = "dropdown-display", X.DropdownDisabled = "dropdown-disabled", X.EmptyValue = -1, X = G = x([m.WidgetSpec], X);
var pt, Ae = (pt = class extends m.InputWithVariableWidget {
    render() {
        return this.props.dropdownMode === 1 ? c.createElement(I, Object.assign({}, this.props)) : c.createElement(X, Object.assign({}, this.props))
    }
}, l(pt, "I"), pt);
Ae = x([m.WidgetSpec], Ae);
var ht, We = (ht = class extends m.Widget {
    render() {
        let t = {
            "data-expression": "",
            className: this.props.style
        };
        return this.fillWithBuiltinProperties(t), c.createElement(k.HtmlTags.span, t, this.props.value)
    }
}, l(ht, "O"), ht);
We = x([m.WidgetSpec], We);
var Qe = {
    exports: {}
};

function Ze() {}
l(Ze, "H");

function ti() {}
l(ti, "B");
ti.resetWarningCache = Ze;
Qe.exports = function() {
    function r(i, s, n, o, h, v) {
        if (v !== "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED") {
            var w = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw w.name = "Invariant Violation", w
        }
    }
    l(r, "t");

    function t() {
        return r
    }
    l(t, "e"), r.isRequired = r;
    var e = {
        array: r,
        bigint: r,
        bool: r,
        func: r,
        number: r,
        object: r,
        string: r,
        symbol: r,
        any: r,
        arrayOf: t,
        element: r,
        elementType: r,
        instanceOf: t,
        node: r,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: ti,
        resetWarningCache: Ze
    };
    return e.PropTypes = e, e
}();
var _, Nt = Qe.exports,
    Ve = "scroll",
    De = "resize",
    ke = "orientationchange",
    ct, J = _ = (ct = class extends m.Widget {
        constructor(t, e) {
            super(t, e), this.previousListLength = 0, this.shouldLoadState = !1, this.isScrollEndingEventHandlerRunning = !1, this.scrollViewerRef = c.createRef(), this.isVirtualizationEnabled = _.shouldVirtualizeList(t), this.shouldLoadState = super.getScreenStateCache().shouldLoad
        }
        serializeCustomStateProperties() {
            let t = this.getScrollHostInfo(),
                e = q.getScrollInfo(t.scrollHost);
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
                let s = this.getScrollHostInfo().scrollHost;
                q.setScrollOffset(s, e.left, e.top)
            }
        }
        getInfiniteScrollThreshold() {
            if (this.infiniteScrollThreshold === void 0 && (this.infiniteScrollThreshold = 2e3, this.props.extendedProperties)) {
                let t = this.props.extendedProperties[_.InfiniteScrollThresholdName];
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
                getScreenStateCache: l(() => this.getScreenStateCache(), "getScreenStateCache"),
                locale: this.context.locale
            }
        }
        getScrollHostInfo() {
            return this.scrollHostInfo || (this.scrollHostInfo = q.getScrollHostInfo(this.getHTMLNode())), this.scrollHostInfo
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
                    t.addEventListener(Ve, this.scrollHandler, {
                        capture: !0
                    }), t.addEventListener(De, this.scrollHandler, {
                        capture: !0
                    }), window.addEventListener(ke, this.deferredScrollHandler)
                }
            }), this.storeListLength()
        }
        componentDidUpdate() {
            this.props.onScrollEnding && this.previousListLength !== this.props.source.length && this.tryFireScrollEndingEvent(), this.storeListLength()
        }
        UNSAFE_componentWillUpdate(t, e) {
            this.isVirtualizationEnabled = _.shouldVirtualizeList(t)
        }
        storeListLength() {
            this.props.source_dataFetchStatus !== 0 && this.props.source.length > 0 && (this.previousListLength = this.props.source.length)
        }
        componentWillUnmount() {
            if (this.scrollHandler) {
                let t = this.getScrollHostInfo().scrollHost;
                t.removeEventListener(Ve, this.scrollHandler), t.removeEventListener(De, this.scrollHandler)
            }
            this.deferredScrollHandler && window.removeEventListener(ke, this.deferredScrollHandler), this.scrollHostInfo = null
        }
        tryFireScrollEndingEvent() {
            let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
            var e, i;
            if (!this.isScrollEndingEventHandlerRunning) {
                let s = this.getInfiniteScrollThreshold(),
                    n = this.getScrollHostInfo(),
                    o = q.getScrollInfo(n.scrollHost);
                o && o.scroll.y > 0 && (o == null ? void 0 : o.scroll.y) > this.lastScrollTop || t ? o && o.scroll.height <= o.scroll.y + o.viewport.height + s && this.executeScrollEndingEventHandler() : (o && o.scroll.x > 0 && o.scroll.x > this.lastScrollLeft || t) && o && o.scroll.width <= o.scroll.x + o.viewport.width + s && this.executeScrollEndingEventHandler(), this.lastScrollTop = (e = o == null ? void 0 : o.scroll.y) !== null && e !== void 0 ? e : 0, this.lastScrollLeft = (i = o == null ? void 0 : o.scroll.x) !== null && i !== void 0 ? i : 0
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
            return c.createElement(this.props.tag, t, e)
        }
        render() {
            let t = "";
            switch (this.props.source_dataFetchStatus) {
                case 0:
                    t = " list-loading";
                    break;
                case 2:
                    t = " list-error"
            }
            let e = {
                "data-list": "",
                "data-virtualization-disabled": this.isVirtualizationEnabled ? null : "",
                "data-animation-disabled": this.props.animateItems ? null : "",
                className: this.props.style + t
            };
            if (this.fillWithBuiltinProperties(e), this.isVirtualizationEnabled) {
                let i, s;
                this.props.extendedProperties && (i = parseInt(this.props.extendedProperties[_.ViewportSafetyMarginBefore], 10), s = parseInt(this.props.extendedProperties[_.ViewportSafetyMarginAfter], 10));
                let n = {
                    renderWrapper: l(o => this.renderListWrapper(e, o), "renderWrapper"),
                    renderItems: l((o, h) => {
                        var v;
                        return (v = this.renderListItems) === null || v === void 0 ? void 0 : v.call(this, o, h)
                    }, "renderItems"),
                    length: this.props.source.length,
                    ref: this.scrollViewerRef,
                    viewportSafetyMarginBefore: i,
                    viewportSafetyMarginAfter: s,
                    initializationCompleted: l(() => {
                        this.shouldLoadState = !1
                    }, "initializationCompleted")
                };
                return c.createElement(ve, K.assign({}, e, n))
            }
            return this.renderListWrapper(e, this.renderListItems())
        }
    }, l(ct, "M"), ct);
J.InfiniteScrollThresholdName = "infinite-scroll-threshold", J.ViewportSafetyMarginBefore = "virtualization-threshold-before", J.ViewportSafetyMarginAfter = "virtualization-threshold-after", J.childContextTypes = K.assign({
    getScreenStateCache: Nt.func
}, m.Widget.childContextTypes), J = _ = x([m.WidgetSpec], J);
var ei = {
    exports: {}
};
(function(r, t) {
    function e(p) {
        if (p && p.__esModule) return p;
        var d = Object.create(null);
        return p && Object.keys(p).forEach(function(f) {
            if (f !== "default") {
                var b = Object.getOwnPropertyDescriptor(p, f);
                Object.defineProperty(d, f, b.get ? b : {
                    enumerable: !0,
                    get: l(function() {
                        return p[f]
                    }, "get")
                })
            }
        }), d.default = p, d
    }
    l(e, "i");
    var i = e(t);

    function s() {
        return s = Object.assign || function(p) {
            for (var d = 1; d < arguments.length; d++) {
                var f = arguments[d];
                for (var b in f) Object.prototype.hasOwnProperty.call(f, b) && (p[b] = f[b])
            }
            return p
        }, s.apply(this, arguments)
    }
    l(s, "r");
    var n = "Left",
        o = "Right",
        h = "Up",
        v = "Down",
        w = {
            delta: 10,
            preventDefaultTouchmoveEvent: !1,
            rotationAngle: 0,
            trackMouse: !1,
            trackTouch: !0
        },
        A = {
            first: !0,
            initial: [0, 0],
            start: 0,
            swiping: !1,
            xy: [0, 0]
        },
        M = "mousemove",
        j = "mouseup",
        $ = "touchend",
        u = "touchmove",
        g = "touchstart";

    function D(p, d, f, b) {
        return p > d ? f > 0 ? o : n : b > 0 ? v : h
    }
    l(D, "f");

    function T(p, d) {
        if (d === 0) return p;
        var f = Math.PI / 180 * d;
        return [p[0] * Math.cos(f) + p[1] * Math.sin(f), p[1] * Math.cos(f) - p[0] * Math.sin(f)]
    }
    l(T, "v");

    function S(p, d) {
        var f = l(function(E) {
                E && "touches" in E && E.touches.length > 1 || p(function(R, P) {
                    P.trackMouse && (document.addEventListener(M, b), document.addEventListener(j, Ht));
                    var N = "touches" in E ? E.touches[0] : E,
                        F = T([N.clientX, N.clientY], P.rotationAngle);
                    return s({}, R, A, {
                        initial: [].concat(F),
                        xy: F,
                        start: E.timeStamp || 0
                    })
                })
            }, "i"),
            b = l(function(E) {
                p(function(R, P) {
                    if ("touches" in E && E.touches.length > 1) return R;
                    var N = "touches" in E ? E.touches[0] : E,
                        F = T([N.clientX, N.clientY], P.rotationAngle),
                        Vt = F[0],
                        Dt = F[1],
                        Ft = Vt - R.xy[0],
                        Mt = Dt - R.xy[1],
                        kt = Math.abs(Ft),
                        It = Math.abs(Mt),
                        $t = (E.timeStamp || 0) - R.start,
                        ni = Math.sqrt(kt * kt + It * It) / ($t || 1),
                        oi = [Ft / ($t || 1), Mt / ($t || 1)],
                        Gt = D(kt, It, Ft, Mt),
                        he = typeof P.delta == "number" ? P.delta : P.delta[Gt.toLowerCase()] || w.delta;
                    if (kt < he && It < he && !R.swiping) return R;
                    var Ut = {
                        absX: kt,
                        absY: It,
                        deltaX: Ft,
                        deltaY: Mt,
                        dir: Gt,
                        event: E,
                        first: R.first,
                        initial: R.initial,
                        velocity: ni,
                        vxvy: oi
                    };
                    Ut.first && P.onSwipeStart && P.onSwipeStart(Ut), P.onSwiping && P.onSwiping(Ut);
                    var ce = !1;
                    return (P.onSwiping || P.onSwiped || "onSwiped" + Gt in P) && (ce = !0), ce && P.preventDefaultTouchmoveEvent && P.trackTouch && E.cancelable && E.preventDefault(), s({}, R, {
                        first: !1,
                        eventData: Ut,
                        swiping: !0
                    })
                })
            }, "s"),
            B = l(function(E) {
                p(function(R, P) {
                    var N;
                    if (R.swiping && R.eventData) {
                        N = s({}, R.eventData, {
                            event: E
                        }), P.onSwiped && P.onSwiped(N);
                        var F = P["onSwiped" + N.dir];
                        F && F(N)
                    } else P.onTap && P.onTap({
                        event: E
                    });
                    return s({}, R, A, {
                        eventData: N
                    })
                })
            }, "n"),
            Wt = l(function() {
                document.removeEventListener(M, b), document.removeEventListener(j, Ht)
            }, "o"),
            Ht = l(function(E) {
                Wt(), B(E)
            }, "a"),
            Bt = l(function(E, R) {
                var P = l(function() {}, "r");
                if (E && E.addEventListener) {
                    var N = [
                        [g, f],
                        [u, b],
                        [$, B]
                    ];
                    N.forEach(function(F) {
                        var Vt = F[0],
                            Dt = F[1];
                        return E.addEventListener(Vt, Dt, {
                            passive: R
                        })
                    }), P = l(function() {
                        return N.forEach(function(F) {
                            var Vt = F[0],
                                Dt = F[1];
                            return E.removeEventListener(Vt, Dt)
                        })
                    }, "r")
                }
                return P
            }, "l"),
            pe = {
                ref: l(function(E) {
                    E !== null && p(function(R, P) {
                        if (R.el === E) return R;
                        var N = {};
                        return R.el && R.el !== E && R.cleanUpTouch && (R.cleanUpTouch(), N.cleanUpTouch = void 0), P.trackTouch && E && (N.cleanUpTouch = Bt(E, !P.preventDefaultTouchmoveEvent)), s({}, R, {
                            el: E
                        }, N)
                    })
                }, "ref")
            };
        return d.trackMouse && (pe.onMouseDown = f), [pe, Bt]
    }
    l(S, "b");

    function y(p, d, f) {
        var b = {};
        return !d.trackTouch && p.cleanUpTouch ? (p.cleanUpTouch(), b.cleanUpTouch = void 0) : d.trackTouch && !p.cleanUpTouch && p.el && (b.cleanUpTouch = f(p.el, !d.preventDefaultTouchmoveEvent)), s({}, p, b)
    }
    l(y, "w");

    function a(p) {
        var d = p.trackMouse,
            f = i.useRef(s({}, A)),
            b = i.useRef(s({}, w));
        b.current = s({}, w, p, {
            delta: p.delta === void 0 ? w.delta : p.delta,
            rotationAngle: p.rotationAngle === void 0 ? w.rotationAngle : p.rotationAngle,
            trackTouch: p.trackTouch === void 0 ? w.trackTouch : p.trackTouch
        });
        var B = i.useMemo(function() {
                return S(function(Bt) {
                    return f.current = Bt(f.current, b.current)
                }, {
                    trackMouse: d
                })
            }, [d]),
            Wt = B[0],
            Ht = B[1];
        return f.current = y(f.current, b.current, Ht), Wt
    }
    l(a, "S"), r.DOWN = v, r.LEFT = n, r.RIGHT = o, r.UP = h, r.useSwipeable = a
})(ei.exports, Ke.default);
var li = ei.exports,
    pi = l(r => {
        var {
            children: t,
            onSwipingLeft: e,
            onSwipingRight: i,
            onSwiped: s
        } = r, n = Se(r, ["children", "onSwipingLeft", "onSwipingRight", "onSwiped"]);
        let o = l(w => {
                let A = w.event,
                    [M] = w.initial;
                w.dir === "Left" ? e(A, -w.deltaX, M) : w.dir === "Right" && i(A, w.deltaX, M)
            }, "o"),
            h = li.useSwipeable({
                delta: n.delta,
                onSwiped: s,
                onSwiping: o,
                onSwipeStart: o,
                trackTouch: !0,
                trackMouse: !0
            }),
            v = Se(n, ["onSwiping", "onSwipedUp", "onSwipedRight", "onSwipedDown", "onSwipedLeft", "delta"]);
        return c.createElement("div", Object.assign({}, h, v), t)
    }, "G"),
    V;
(function(r) {
    var t, e;
    (t = r.Actions || (r.Actions = {}))[t.RightVisible = 0] = "RightVisible", t[t.RightAction = 1] = "RightAction", t[t.LeftVisible = 2] = "LeftVisible", t[t.LeftAction = 3] = "LeftAction", (e = r.Directions || (r.Directions = {}))[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
})(V || (V = {}));
var le = class le extends c.Component {
    render() {
        let t = {
            "data-list-item": "",
            "data-not-scrollable": "",
            onClick: this.props.containerClick,
            className: this.props.classProperty
        };
        return this.props.fillWithParentProperties(t), c.createElement("div", Object.assign({}, t), this.props.placeholderContent.render())
    }
};
l(le, "Y");
var ee = le,
    L = class L extends c.Component {
        constructor(t, e) {
            var i;
            super(t, e), this.leftRef = c.createRef(), this.rightRef = c.createRef(), this.swipeRef = c.createRef(), this.touchWindowEventListener = s => {
                this.unregisterTouchWindowEventListener(), this.animate()
            }, this.handleTouch = s => {
                this.propagateTouch || s.stopPropagation()
            }, this.registerTouchWindowEventListener = () => {
                this.propagateTouch = !1, window.addEventListener(L.TouchStartEvent, this.touchWindowEventListener)
            }, this.unregisterTouchWindowEventListener = () => {
                this.propagateTouch = !0, window.removeEventListener(L.TouchStartEvent, this.touchWindowEventListener)
            }, this.onSwipingLeft = (s, n, o) => {
                this.handleSwiping(!1, s, n, o)
            }, this.onSwipingRight = (s, n, o) => {
                this.handleSwiping(!0, s, n, o)
            }, this.onSwiped = () => {
                var s, n;
                let o = !1,
                    h = !1;
                switch (this.setState({
                        showRightButtons: !1,
                        showLeftButtons: !1
                    }), this.state.action) {
                    case V.Actions.RightVisible:
                        this.registerTouchWindowEventListener(), o = !0;
                        break;
                    case V.Actions.LeftVisible:
                        this.registerTouchWindowEventListener(), h = !0;
                        break;
                    case V.Actions.LeftAction:
                        let v = (s = this.leftRef.current) === null || s === void 0 ? void 0 : s.children[0];
                        v && (this.timeoutClickHandle = setTimeout(() => v.click(), this.props.animationTimeout));
                        break;
                    case V.Actions.RightAction:
                        let w = (n = this.rightRef.current) === null || n === void 0 ? void 0 : n.children;
                        if (w.length > 0) {
                            let A = w[w.length - 1];
                            A && (this.timeoutClickHandle = setTimeout(() => A.click(), this.props.animationTimeout))
                        }
                }
                this.setState({
                    deltaPixels: 0,
                    action: null,
                    showRightButtons: o,
                    showLeftButtons: h,
                    swipingLeft: !1,
                    swipingRight: !1,
                    animating: !0,
                    animatingFullSwipeRight: this.state.action === V.Actions.LeftAction,
                    animatingFullSwipeLeft: this.state.action === V.Actions.RightAction
                }), this.startAnimationTimeout()
            }, this.handleActionContainerClick = s => {
                this.animate(), s.stopPropagation()
            }, this.handleContentClick = s => {
                this.state.showRightButtons || this.state.showLeftButtons || this.state.animating || this.props.containerClick(s)
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
                shouldRenderActions: (i = t.isExpandedInWebEditor) !== null && i !== void 0 && i,
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
                let t = this.props.extendedProperties[L.SwipeLeftEdgeThresholdExtended],
                    e = this.props.extendedProperties[L.SwipeRightEdgeThresholdExtended];
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
            this.leftActionsCount = t.getElementsByClassName(L.LeftActions)[0].getElementsByTagName(L.Button).length, this.rightActionsCount = t.getElementsByClassName(L.RightActions)[0].getElementsByTagName(L.Button).length;
            let e = t.querySelector("[data-list-item-content]");
            e && (this.contentWidth = e.clientWidth), L.deviceWidth = window.innerWidth || document.documentElement.clientWidth
        }
        showFullSwipe() {
            return this.state.action === V.Actions.LeftAction || this.state.action === V.Actions.RightAction || this.state.animatingFullSwipeLeft || this.state.animatingFullSwipeRight
        }
        getSwipeLeftEdgeThreshold() {
            return this.swipeLeftEdgeThreshold ? this.swipeLeftEdgeThreshold : L.SwipeLeftEdgeDefaultThreshold
        }
        getSwipeRightEdgeThreshold() {
            return this.swipeRightEdgeThreshold ? this.swipeRightEdgeThreshold : L.SwipeRightEdgeDefaultThreshold
        }
        getSwipeThresholdToTriggerAction(t) {
            return this.state.showLeftButtons || this.state.showRightButtons ? .75 * this.actionsMaxWidth : t === V.Directions.Right ? this.actionsMaxWidth * (Math.min(2, this.leftActionsCount) + .75) : this.actionsMaxWidth * (Math.min(2, this.rightActionsCount) + .75)
        }
        handleSwiping(t, e, i, s) {
            this.updateElementCachedInfo(), this.setState({
                shouldRenderActions: !0
            });
            let n = t ? V.Directions.Right : V.Directions.Left;
            if (this.swipingHandleStylesAndDelta(i, n, s)) return;
            let o = null;
            i > this.props.visibilityThreshold && (o = t ? V.Actions.LeftVisible : V.Actions.RightVisible), (t ? this.props.callActionWhenSwipingFarRight : this.props.callActionWhenSwipingFarLeft) && i > this.getSwipeThresholdToTriggerAction(n) && (o = t ? V.Actions.LeftAction : V.Actions.RightAction);
            let h = i - L.SwipeStartThreshold;
            this.setState({
                deltaPixels: t ? h : -h,
                action: o,
                swipingLeft: !t,
                swipingRight: t
            })
        }
        getStateForPlaceholderStyle(t) {
            var e;
            let i = !t;
            return {
                swiping: i && this.state.swipingRight || t && this.state.swipingLeft,
                showingButtons: i && this.state.showLeftButtons || t && this.state.showRightButtons || (e = this.props.isExpandedInWebEditor) !== null && e !== void 0 && e,
                animatingFullSwipe: i && this.state.animatingFullSwipeRight || t && this.state.animatingFullSwipeLeft
            }
        }
        getActionsPlaceholderStyle(t) {
            let {
                swiping: e,
                showingButtons: i,
                animatingFullSwipe: s
            } = this.getStateForPlaceholderStyle(t), n = t ? this.rightActionsCount : this.leftActionsCount;
            if (e) {
                let o = 0;
                return i && !this.state.animating && (o = n * this.actionsMaxWidth), {
                    width: Math.abs(this.state.deltaPixels) + o + "px"
                }
            }
            return i ? {
                width: this.props.isExpandedInWebEditor ? "auto" : n * this.actionsMaxWidth + "px"
            } : s ? {
                width: this.contentWidth + "px"
            } : void 0
        }
        swipingHandleStylesAndDelta(t, e, i) {
            return !!this.shouldAbort(e, i) || (this.tryAnimate(e), !1)
        }
        shouldAbort(t, e) {
            if (t === V.Directions.Right) {
                if (e < this.getSwipeRightEdgeThreshold()) return !0
            } else if (e > L.deviceWidth - this.getSwipeLeftEdgeThreshold()) return !0;
            return !!this.state.animating || (t === V.Directions.Right ? !this.leftActionsCount && !this.state.showRightButtons || this.state.showLeftButtons && !this.props.callActionWhenSwipingFarRight : !this.rightActionsCount && !this.state.showLeftButtons || this.state.showRightButtons && !this.props.callActionWhenSwipingFarLeft)
        }
        tryAnimate(t) {
            (t === V.Directions.Right && this.state.showRightButtons || t === V.Directions.Left && this.state.showLeftButtons) && this.animate()
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
            return t = this.state.showRightButtons ? L.FloatRight : this.state.showLeftButtons ? L.FloatLeft : this.state.deltaPixels < 0 ? L.FloatRight : L.FloatLeft, t
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
            let t = L.Container + (this.showFullSwipe() ? " " + L.FullSwipe : "");
            this.state.animating && (t += " " + L.Animating), this.state.showRightButtons && (t += " " + L.ShowRightButtons), this.state.showLeftButtons && (t += " " + L.ShowLeftButtons);
            let e = {
                "data-list-item-content": "",
                "data-not-scrollable": "",
                className: this.props.classProperty,
                onSwipingLeft: this.onSwipingLeft,
                onClick: this.handleContentClick,
                onSwipingRight: this.onSwipingRight,
                delta: L.SwipeStartThreshold,
                onSwiped: this.onSwiped
            };
            this.props.fillWithParentProperties(e);
            let i = e.ref;
            return e.ref = null, c.createElement("div", {
                "data-list-item": "",
                "data-not-scrollable": "",
                ref: i
            }, c.createElement("div", {
                className: t + " " + this.lastContainerClass,
                ref: this.swipeRef,
                onTouchStart: this.handleTouch
            }, c.createElement("div", {
                className: L.LeftActions,
                style: this.getActionsPlaceholderStyle(!1),
                onClick: this.handleActionContainerClick,
                ref: this.leftRef
            }, this.getRenderedLeftPlaceholder()), c.createElement(pi, Object.assign({}, e), this.getRenderedContentPlaceholder()), c.createElement("div", {
                className: L.RightActions,
                style: this.getActionsPlaceholderStyle(!0),
                onClick: this.handleActionContainerClick,
                ref: this.rightRef
            }, this.getRenderedRightPlaceholder())))
        }
    };
l(L, "J");
var O = L;
O.TouchStartEvent = "touchstart", O.Button = "button", O.Container = "list-item-container", O.LeftActions = "list-item-left-actions", O.RightActions = "list-item-right-actions", O.FloatRight = "list-item-float-right", O.FloatLeft = "list-item-float-left", O.FullSwipe = "list-item-full-swipe", O.Animating = "list-item-animating", O.ShowRightButtons = "list-item-show-right-buttons", O.ShowLeftButtons = "list-item-show-left-buttons", O.SwipeStartThreshold = 15, O.SwipeLeftEdgeThresholdExtended = "list-item-swipe-left-edge-threshold", O.SwipeRightEdgeThresholdExtended = "list-item-swipe-right-edge-threshold", O.SwipeLeftEdgeDefaultThreshold = 15, O.SwipeRightEdgeDefaultThreshold = 15;
var dt, Ie = (dt = class extends m.Widget {
    constructor() {
        super(...arguments), this.handleClick = t => {
            this.props.onClick && (t.stopPropagation(), this.executeWithActiveClassOn(() => this.props.onClick()))
        }
    }
    render() {
        var t, e;
        let i = this.props.placeholders.leftActions === m.PlaceholderContent.Empty,
            s = this.props.placeholders.rightActions === m.PlaceholderContent.Empty;
        if (i && s) return c.createElement(ee, {
            containerClick: this.handleClick,
            placeholderContent: this.props.placeholders.content,
            fillWithParentProperties: l(n => this.fillWithBuiltinProperties(n), "fillWithParentProperties"),
            classProperty: this.props.style
        }); {
            let n = {
                extendedProperties: (t = this.props.extendedProperties) !== null && t !== void 0 ? t : {},
                visibilityThreshold: 35,
                animationTimeout: 400,
                placeholderContent: this.props.placeholders.content,
                placeholderLeftActions: this.props.placeholders.leftActions,
                placeholderRightActions: this.props.placeholders.rightActions,
                callActionWhenSwipingFarRight: this.props.triggerActionOnFullSwipeRight,
                callActionWhenSwipingFarLeft: this.props.triggerActionOnFullSwipeLeft,
                isExpandedInWebEditor: (e = this.props.expandedInWebEditor) !== null && e !== void 0 && e,
                containerClick: this.handleClick,
                fillWithParentProperties: l(o => this.fillWithBuiltinProperties(o), "fillWithParentProperties"),
                classProperty: this.props.style
            };
            return c.createElement(O, Object.assign({}, n))
        }
    }
}, l(dt, "K"), dt);
Ie = x([m.WidgetSpec], Ie);
var ut, Oe = (ut = class extends m.Widget {
    constructor(t, e) {
        super(t, e), this.disableSpamProtect = this.disableSpamProtection(t)
    }
    handleClick(t) {
        this.alreadyTriggered && !this.disableSpamProtect || (this.executeWithActiveClassOn(() => this.props.onClick()), this.alreadyTriggered = !0)
    }
    render() {
        let t = {
            "data-list-item-action": "",
            className: this.props.style,
            onClick: l(e => this.handleClick(e), "onClick")
        };
        return this.fillWithBuiltinProperties(t), c.createElement(k.HtmlTags.button, t, this.props.children)
    }
    disableSpamProtection(t) {
        return !!t.extendedProperties && (t.extendedProperties["disable-spam-protection"] + "").toLowerCase() !== "true"
    }
}, l(ut, "Q"), ut);
Oe = x([m.WidgetSpec], Oe);
var gt, Yt = (gt = class extends m.Widget {
    constructor() {
        super(...arguments), this.state = {
            sortAttribute: ""
        }
    }
    setDataHeaderInRowCells() {
        var t, e;
        let i = this.body ? this.body.children : [],
            s = this.header ? this.header.getElementsByTagName("th") : [];
        for (let n = 0; n < s.length; n++) {
            let o = s[n];
            for (let h = 0; h < i.length; h++)(t = i[h].children[n]) === null || t === void 0 || t.setAttribute("data-header", (e = o.innerText) !== null && e !== void 0 ? e : o.textContent)
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
        return this.props.showHeader ? c.createElement("thead", {
            ref: l(e => this.header = e, "ref")
        }, c.createElement("tr", Object.assign({}, t), this.props.placeholders.headerRow.render())) : null
    }
    renderRows() {
        let t = {
            className: this.props.styleRow
        };
        return this.props.source.length > 0 ? c.createElement("tbody", {
            ref: l(e => this.body = e, "ref")
        }, this.props.placeholders.row.render(this, this.props.source, (e, i) => c.createElement("tr", Object.assign({}, t), e))) : null
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
        return this.fillWithBuiltinProperties(t), c.createElement("table", Object.assign({}, t), this.renderHeader(), this.renderRows())
    }
}, l(gt, "Z"), gt);
Yt.childContextTypes = K.assign({
    onTableRecordsSort: Nt.func,
    tableRecordsCurrentSortAttribute: Nt.string
}, m.Widget.childContextTypes), Yt = x([m.WidgetSpec], Yt);
var mt, Kt = (mt = class extends m.Widget {
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
        let t, e = this.props.style || "",
            i = {
                className: "sortable-icon"
            };
        this.props.style !== "sortable" && this.props.sortAttribute && (e += " sortable", t = c.createElement("div", Object.assign({}, i)));
        let s = this.context;
        this.props.style !== "sorted" && s && this.props.sortAttribute && this.props.sortAttribute === s.tableRecordsCurrentSortAttribute && (e += " sorted"), e = e.trim();
        let n = {
            className: e,
            tabIndex: 0
        };
        return this.onSort && this.props.sortAttribute && (n.onClick = this.handleInteractive, n.onKeyDown = h => h.keyCode === 13 && this.handleInteractive(h)), this.fillWithBuiltinProperties(n), c.createElement("th", Object.assign({}, n), this.props.children, t)
    }
}, l(mt, "tt"), mt);
Kt.contextTypes = K.assign({
    onTableRecordsSort: Nt.func,
    tableRecordsCurrentSortAttribute: Nt.string
}, m.Widget.contextTypes), Kt = x([m.WidgetSpec], Kt);
var ft, Ne = (ft = class extends m.Widget {
    render() {
        let t = {
            className: this.props.style
        };
        return this.fillWithBuiltinProperties(t), c.createElement("td", Object.assign({}, t), this.props.children)
    }
}, l(ft, "et"), ft);
Ne = x([m.WidgetSpec], Ne);
var vt, He = (vt = class extends m.ValidationWidget {
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
            onSubmit: l(s => s.preventDefault(), "onSubmit")
        };
        return this.fillWithBuiltinProperties(i), c.createElement("form", Object.assign({}, i), this.props.children)
    }
}, l(vt, "it"), vt);
He = x([m.WidgetSpec], He);
var bt, Be = (bt = class extends m.Widget {
        render() {
            let t = "";
            switch (this.props.iconSize) {
                case 0:
                default:
                    t = "1x";
                    break;
                case 1:
                    t = "2x";
                    break;
                case 2:
                    t = "3x";
                    break;
                case 3:
                    t = "4x"
            }
            let e = {
                "data-icon": "",
                className: (this.props.style ? this.props.style : "") + " fa fa-" + this.props.icon + " fa-" + t
            };
            return this.fillWithBuiltinProperties(e), c.createElement(k.HtmlTags.i, e)
        }
    }, l(bt, "st"), bt),
    z, Ot;
Be = x([m.WidgetSpec], Be),
    function(r) {
        r.TTL = 12e4, r.GC_INTERVAL = 1e4, r.GC_HIGH_PRESSURE = 52428800, r.map = new Map, r.interval = setInterval(r.gc, r.GC_INTERVAL);
        let t = 0;

        function e() {
            let i = Date.now(),
                s = r.GC_HIGH_PRESSURE < t;
            r.map.forEach((n, o, h) => {
                n.referenceCount <= 0 && (s || n.expireDate < i) && (URL.revokeObjectURL(n.cachedObjectURL), h.delete(o), t -= n.size)
            })
        }
        l(e, "i"), r.gc = e, r.releaseURL = function(i) {
            var s;
            let n = (s = i.content) !== null && s !== void 0 ? s : i.url,
                o = r.map.get(n);
            o !== void 0 && (o.referenceCount--, o.expireDate = Date.now() + r.TTL, r.map.set(n, o), r.GC_HIGH_PRESSURE < t && e())
        }, r.requestURL = function(i) {
            var s;
            let n = (s = i.content) !== null && s !== void 0 ? s : i.url,
                o = r.map.get(n);
            if (!n) return null;
            if (o === void 0) {
                let h = i.toBlob();
                if (!h) return null;
                o = {
                    expireDate: 0,
                    referenceCount: 0,
                    cachedObjectURL: URL.createObjectURL(h),
                    size: h.size
                }, t += o.size
            }
            return o.referenceCount++, r.map.set(n, o), o.cachedObjectURL
        }
    }(Ot || (Ot = {}));
var wt, Fe = z = (wt = class extends m.Widget {
    constructor(t, e) {
        super(t, e), this.state = {
            objectURL: null,
            hasError: !1
        }
    }
    loadBinary(t) {
        let e = this.props.imageContent.content,
            i = this.props.imageContent.url;
        t.loadContent().then(s => {
            let n = s.content,
                o = s.url;
            if (!this.state.objectURL || n !== e || o !== i) {
                let h = Ot.requestURL(t);
                this.setState({
                    objectURL: h,
                    hasError: !1
                })
            }
        })
    }
    UNSAFE_componentWillMount() {
        z.isBinary(this.props) && this.loadBinary(this.props.imageContent)
    }
    UNSAFE_componentWillReceiveProps(t) {
        z.isBinary(t) ? t.imageContent.fastEquals(this.props.imageContent) || (Ot.releaseURL(this.props.imageContent), this.loadBinary(t.imageContent)) : this.setState({
            hasError: !1
        })
    }
    static isBinary(t) {
        var e;
        return t.type === 2 && t.imageContent && !t.imageContent.url || ((e = t == null ? void 0 : t.imageContent) === null || e === void 0 ? void 0 : e.needsAuthentication())
    }
    componentWillUnmount() {
        z.isBinary(this.props) && Ot.releaseURL(this.props.imageContent)
    }
    static getBasePath() {
        return de.getBasePath()
    }
    static getBinaryImgAbsoluteURL(t) {
        let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z.getBasePath;
        if (t) return new RegExp("^(blob:)?(?:[a-z]+:)?//|^/", "i").test(t) ? t : `/${e()}/${t}`.replace(new RegExp("/(/)+", "g"), "/")
    }
    prepareImageAttributes() {
        let t = {
            "data-image": "",
            className: this.props.style,
            src: ""
        };
        if (this.state.hasError) t.src = z.getBinaryImgAbsoluteURL(this.props.defaultImage);
        else {
            switch (this.props.type) {
                case 1:
                    t.src = this.props.url;
                    break;
                case 2:
                    this.state.objectURL ? t.src = this.state.objectURL : this.props.imageContent && this.props.imageContent.hasContent() ? t.src = z.getBinaryImgAbsoluteURL(this.props.imageContent.url) : t.src = z.getBinaryImgAbsoluteURL(this.props.defaultImage);
                    break;
                default:
                    t.src = this.props.image
            }
            t.onError = () => {
                this.props.defaultImage && this.setState({
                    hasError: !0
                })
            }
        }
        return this.fillWithBuiltinProperties(t), t
    }
    render() {
        return c.createElement(k.HtmlTags.img, this.prepareImageAttributes())
    }
}, l(wt, "rt"), wt);
Fe = z = x([m.WidgetSpec], Fe);
var zt = class zt {
    constructor() {
        this.last = 0
    }
    dispose() {
        clearTimeout(this.deferTimerHandle), this.timeoutFunction && this.timeoutFunction()
    }
    throttle(t) {
        let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zt.DefaultThrottlingInterval,
            i = new Date().valueOf();
        this.last && i < this.last + e ? (clearTimeout(this.deferTimerHandle), this.timeoutFunction = () => {
            this.last = i, this.timeoutFunction = null, t()
        }, this.deferTimerHandle = setTimeout(this.timeoutFunction, e)) : (this.last = i, t())
    }
};
l(zt, "at");
var U = zt,
    H;
U.DefaultThrottlingInterval = 200, U.CustomThrottlingProperty = "onchange-throttle-milliseconds";
var St, Q = H = (St = class extends m.InputWithVariableWidget {
    constructor(t, e) {
        if (super(t, e), this.props.extendedProperties) {
            let i = this.props.extendedProperties[U.CustomThrottlingProperty];
            i !== void 0 && (this.throttleValue = parseInt(i, 10))
        }
        this.ShowDefaultValue = H.getShowDefaultValue(t), this.state = {
            value: this.convertFromModel(t.variable.value)
        }, this.throttling = new U
    }
    static getShowDefaultValue(t) {
        if (t.extendedProperties) {
            let e = t.extendedProperties[H.ShowDefaultValueProperty];
            if (e !== void 0) return e.toLowerCase() === "true"
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
                return H.isNullDate(t) && !this.ShowDefaultValue ? "" : this.getCorrectDatePartForType(t, this.props.inputType);
            case 2:
                return parseFloat(t) !== 0 || this.ShowDefaultValue ? t : "";
            default:
                return t
        }
    }
    static isNullDate(t) {
        return t.equals(W.DateTime.defaultValue)
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
                e.placeholder = W.Constants.FORMAT.defaultDateTimeFormat.dateFormat;
                break;
            case 3:
                e.placeholder = W.Constants.FORMAT.defaultDateTimeFormat.timeFormat;
                break;
            case 5:
                e.placeholder = W.Constants.FORMAT.defaultDateTimeFormat.dateTimeFormat
        }
    }
    componentDidMount() {
        let t = this.props.inputType;
        H.supportsHTML5Inputs === void 0 && (this.htmlElement.type !== H.toInputHtmlType(t) ? H.supportsHTML5Inputs = !1 : H.supportsHTML5Inputs = !0), this.props.prompt !== void 0 || t !== 4 && t !== 5 && t !== 3 || H.supportsHTML5Inputs || this.preparePromptForBrowsersThatDontSupportHTML5(t)
    }
    UNSAFE_componentWillReceiveProps(t) {
        let e = this.getHTMLNode(),
            i = t.variable.value.valueOf().toString(),
            s = Y.JSConversions.convertTo(e.value, this.variable.type).valueOf().toString() === i,
            n = H.getShowDefaultValue(t);
        (this.shouldUpdateValue(t.variable) && !s || n !== this.ShowDefaultValue) && (this.ShowDefaultValue = n, this.updateValue(t.variable.value))
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
            type: H.toInputHtmlType(this.props.inputType),
            placeholder: this.props.prompt,
            onChange: l(i => this.onChange(i), "onChange"),
            value: this.state.value.toString(),
            "aria-required": this.props.mandatory
        };
        switch (this.ShowDefaultValue !== H.ShowDefaultValueDefault && (t[H.ShowDefaultValueRuntimeAttribute] = this.ShowDefaultValue), this.hasValidationMessage() && (t["aria-describedby"] = this.getId() + H.DescribedBySuffix), this.props.inputType) {
            case 2:
                switch (this.props.variable.type) {
                    case W.DataTypes.Integer:
                        this.shouldUseDefaultProperty("pattern") && (t.pattern = "[0-9]*"), t.max = W.Constants.MAX_INTEGER_VALUE;
                        break;
                    case W.DataTypes.LongInteger:
                        this.shouldUseDefaultProperty("pattern") && (t.pattern = "[0-9]*"), t.max = W.Constants.MAX_LONGINTEGER_VALUE.toString();
                        break;
                    case W.DataTypes.Currency:
                    case W.DataTypes.Decimal:
                        this.shouldUseDefaultProperty("pattern") && (t.pattern = "[0-9]+.[0-9]*"), this.shouldUseDefaultProperty("step") && (t.step = "any")
                }
                break;
            case 3:
            case 5:
            case 4:
                break;
            default:
                this.props.maxLength > 0 && (t.maxLength = this.props.maxLength)
        }
        this.fillWithBuiltinProperties(t), delete t[U.CustomThrottlingProperty];
        let e = {
            className: "input-" + t.type
        };
        return c.createElement("span", Object.assign({}, e), c.createElement("input", Object.assign({}, t)), this.createValidationElement())
    }
}, l(St, "lt"), St);
Q.ShowDefaultValueDefault = !1, Q.ShowDefaultValueRuntimeAttribute = "data-show-default-value", Q.ShowDefaultValueProperty = "show-default-value", Q.supportsHTML5Inputs = void 0, Q = H = x([m.WidgetSpec], Q);
var yt, Me = (yt = class extends m.Widget {
    render() {
        let t = {
            "data-label": "",
            className: this.props.style,
            htmlFor: this.getSiblingWidgetId(this.props.targetWidget)
        };
        return this.props.mandatory && (t.className = (t.className === void 0 ? "" : t.className + " ") + "mandatory"), this.props.gridProperties && this.props.gridProperties.width && (t.className = (t.className === void 0 ? "" : t.className + " ") + "OSInline"), this.fillWithBuiltinProperties(t), c.createElement(k.HtmlTags.label, t, this.props.children)
    }
}, l(yt, "pt"), yt);
Me = x([m.WidgetSpec], Me);
var ii = {},
    hi = l(r => encodeURIComponent(r).replace(/[!'()*]/g, t => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), "dt"),
    si = "%[a-f0-9]{2}",
    Ue = new RegExp("(" + si + ")|([^%]+?)", "gi"),
    je = new RegExp("(" + si + ")+", "gi");

function ie(r, t) {
    try {
        return [decodeURIComponent(r.join(""))]
    } catch (s) {}
    if (r.length === 1) return r;
    t = t || 1;
    var e = r.slice(0, t),
        i = r.slice(t);
    return Array.prototype.concat.call([], ie(e), ie(i))
}
l(ie, "ft");

function ci(r) {
    try {
        return decodeURIComponent(r)
    } catch (i) {
        for (var t = r.match(Ue) || [], e = 1; e < t.length; e++) t = (r = ie(t, e).join("")).match(Ue) || [];
        return r
    }
}
l(ci, "vt");
var se, re, di = l(function(r) {
        if (typeof r != "string") throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof r + "`");
        try {
            return r = r.replace(/\+/g, " "), decodeURIComponent(r)
        } catch (t) {
            return function(e) {
                for (var i = {
                        "%FE%FF": "\uFFFD\uFFFD",
                        "%FF%FE": "\uFFFD\uFFFD"
                    }, s = je.exec(e); s;) {
                    try {
                        i[s[0]] = decodeURIComponent(s[0])
                    } catch (w) {
                        var n = ci(s[0]);
                        n !== s[0] && (i[s[0]] = n)
                    }
                    s = je.exec(e)
                }
                i["%C2"] = "\uFFFD";
                for (var o = Object.keys(i), h = 0; h < o.length; h++) {
                    var v = o[h];
                    e = e.replace(new RegExp(v, "g"), i[v])
                }
                return e
            }(r)
        }
    }, "St"),
    ui = l((r, t) => {
        if (typeof r != "string" || typeof t != "string") throw new TypeError("Expected the arguments to be of type `string`");
        if (t === "") return [r];
        let e = r.indexOf(t);
        return e === -1 ? [r] : [r.slice(0, e), r.slice(e + t.length)]
    }, "yt"),
    gi = l(function(r, t) {
        for (var e = {}, i = Object.keys(r), s = Array.isArray(t), n = 0; n < i.length; n++) {
            var o = i[n],
                h = r[o];
            (s ? t.indexOf(o) !== -1 : t(o, h, r)) && (e[o] = h)
        }
        return e
    }, "Et");

function qe() {
    if (typeof globalThis != "undefined") return globalThis;
    if (typeof window != "undefined") return window;
    if (typeof global != "undefined") return global;
    if (typeof self != "undefined") return self;
    throw new Error("Unable to locate global object")
}
l(qe, "Ct");

function ri(r) {
    let {
        message: t,
        onConfirm: e,
        onCancel: i,
        globalObj: s = qe(),
        getNative: n = l(() => function() {
            let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : qe();
            var v;
            let w = (v = h == null ? void 0 : h.navigator) === null || v === void 0 ? void 0 : v.notification;
            if (A = w, typeof A == "object" && A !== null && "confirm" in A && typeof A.confirm == "function") return w;
            var A
        }(s), "r")
    } = r, o = n();
    o ? o.confirm(t, h => {
        h === se.ok ? e == null || e() : i == null || i()
    }, "") : s.confirm(t) ? e == null || e() : i == null || i()
}
l(ri, "xt");
(function(r) {
    let t = hi,
        e = di,
        i = ui,
        s = gi,
        n = Symbol("encodeFragmentIdentifier");

    function o(u) {
        if (typeof u != "string" || u.length !== 1) throw new TypeError("arrayFormatSeparator must be single character string")
    }
    l(o, "o");

    function h(u, g) {
        return g.encode ? g.strict ? t(u) : encodeURIComponent(u) : u
    }
    l(h, "a");

    function v(u, g) {
        return g.decode ? e(u) : u
    }
    l(v, "l");

    function w(u) {
        return Array.isArray(u) ? u.sort() : typeof u == "object" ? w(Object.keys(u)).sort((g, D) => Number(g) - Number(D)).map(g => u[g]) : u
    }
    l(w, "h");

    function A(u) {
        let g = u.indexOf("#");
        return g !== -1 && (u = u.slice(0, g)), u
    }
    l(A, "p");

    function M(u) {
        let g = (u = A(u)).indexOf("?");
        return g === -1 ? "" : u.slice(g + 1)
    }
    l(M, "c");

    function j(u, g) {
        return g.parseNumbers && !Number.isNaN(Number(u)) && typeof u == "string" && u.trim() !== "" ? u = Number(u) : !g.parseBooleans || u === null || u.toLowerCase() !== "true" && u.toLowerCase() !== "false" || (u = u.toLowerCase() === "true"), u
    }
    l(j, "d");

    function $(u, g) {
        o((g = Object.assign({
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1
        }, g)).arrayFormatSeparator);
        let D = function(S) {
                let y;
                switch (S.arrayFormat) {
                    case "index":
                        return (a, p, d) => {
                            y = /\[(\d*)\]$/.exec(a), a = a.replace(/\[\d*\]$/, ""), y ? (d[a] === void 0 && (d[a] = {}), d[a][y[1]] = p) : d[a] = p
                        };
                    case "bracket":
                        return (a, p, d) => {
                            y = /(\[\])$/.exec(a), a = a.replace(/\[\]$/, ""), y ? d[a] !== void 0 ? d[a] = [].concat(d[a], p) : d[a] = [p] : d[a] = p
                        };
                    case "colon-list-separator":
                        return (a, p, d) => {
                            y = /(:list)$/.exec(a), a = a.replace(/:list$/, ""), y ? d[a] !== void 0 ? d[a] = [].concat(d[a], p) : d[a] = [p] : d[a] = p
                        };
                    case "comma":
                    case "separator":
                        return (a, p, d) => {
                            let f = typeof p == "string" && p.includes(S.arrayFormatSeparator),
                                b = typeof p == "string" && !f && v(p, S).includes(S.arrayFormatSeparator);
                            p = b ? v(p, S) : p;
                            let B = f || b ? p.split(S.arrayFormatSeparator).map(Wt => v(Wt, S)) : p === null ? p : v(p, S);
                            d[a] = B
                        };
                    case "bracket-separator":
                        return (a, p, d) => {
                            let f = /(\[\])$/.test(a);
                            if (a = a.replace(/\[\]$/, ""), !f) return void(d[a] = p && v(p, S));
                            let b = p === null ? [] : p.split(S.arrayFormatSeparator).map(B => v(B, S));
                            d[a] !== void 0 ? d[a] = [].concat(d[a], b) : d[a] = b
                        };
                    default:
                        return (a, p, d) => {
                            d[a] !== void 0 ? d[a] = [].concat(d[a], p) : d[a] = p
                        }
                }
            }(g),
            T = Object.create(null);
        if (typeof u != "string" || !(u = u.trim().replace(/^[?#&]/, ""))) return T;
        for (let S of u.split("&")) {
            if (S === "") continue;
            let [y, a] = i(g.decode ? S.replace(/\+/g, " ") : S, "=");
            a = a === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(g.arrayFormat) ? a : v(a, g), D(v(y, g), a, T)
        }
        for (let S of Object.keys(T)) {
            let y = T[S];
            if (typeof y == "object" && y !== null)
                for (let a of Object.keys(y)) y[a] = j(y[a], g);
            else T[S] = j(y, g)
        }
        return g.sort === !1 ? T : (g.sort === !0 ? Object.keys(T).sort() : Object.keys(T).sort(g.sort)).reduce((S, y) => {
            let a = T[y];
            return a && typeof a == "object" && !Array.isArray(a) ? S[y] = w(a) : S[y] = a, S
        }, Object.create(null))
    }
    l($, "u"), r.extract = M, r.parse = $, r.stringify = (u, g) => {
        if (!u) return "";
        o((g = Object.assign({
            encode: !0,
            strict: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ","
        }, g)).arrayFormatSeparator);
        let D = l(a => g.skipNull && u[a] == null || g.skipEmptyString && u[a] === "", "i"),
            T = function(a) {
                switch (a.arrayFormat) {
                    case "index":
                        return p => (d, f) => {
                            let b = d.length;
                            return f === void 0 || a.skipNull && f === null || a.skipEmptyString && f === "" ? d : f === null ? [...d, [h(p, a), "[", b, "]"].join("")] : [...d, [h(p, a), "[", h(b, a), "]=", h(f, a)].join("")]
                        };
                    case "bracket":
                        return p => (d, f) => f === void 0 || a.skipNull && f === null || a.skipEmptyString && f === "" ? d : f === null ? [...d, [h(p, a), "[]"].join("")] : [...d, [h(p, a), "[]=", h(f, a)].join("")];
                    case "colon-list-separator":
                        return p => (d, f) => f === void 0 || a.skipNull && f === null || a.skipEmptyString && f === "" ? d : f === null ? [...d, [h(p, a), ":list="].join("")] : [...d, [h(p, a), ":list=", h(f, a)].join("")];
                    case "comma":
                    case "separator":
                    case "bracket-separator": {
                        let p = a.arrayFormat === "bracket-separator" ? "[]=" : "=";
                        return d => (f, b) => b === void 0 || a.skipNull && b === null || a.skipEmptyString && b === "" ? f : (b = b === null ? "" : b, f.length === 0 ? [
                            [h(d, a), p, h(b, a)].join("")
                        ] : [
                            [f, h(b, a)].join(a.arrayFormatSeparator)
                        ])
                    }
                    default:
                        return p => (d, f) => f === void 0 || a.skipNull && f === null || a.skipEmptyString && f === "" ? d : f === null ? [...d, h(p, a)] : [...d, [h(p, a), "=", h(f, a)].join("")]
                }
            }(g),
            S = {};
        for (let a of Object.keys(u)) D(a) || (S[a] = u[a]);
        let y = Object.keys(S);
        return g.sort !== !1 && y.sort(g.sort), y.map(a => {
            let p = u[a];
            return p === void 0 ? "" : p === null ? h(a, g) : Array.isArray(p) ? p.length === 0 && g.arrayFormat === "bracket-separator" ? h(a, g) + "[]" : p.reduce(T(a), []).join("&") : h(a, g) + "=" + h(p, g)
        }).filter(a => a.length > 0).join("&")
    }, r.parseUrl = (u, g) => {
        g = Object.assign({
            decode: !0
        }, g);
        let [D, T] = i(u, "#");
        return Object.assign({
            url: D.split("?")[0] || "",
            query: $(M(u), g)
        }, g && g.parseFragmentIdentifier && T ? {
            fragmentIdentifier: v(T, g)
        } : {})
    }, r.stringifyUrl = (u, g) => {
        g = Object.assign({
            encode: !0,
            strict: !0,
            [n]: !0
        }, g);
        let D = A(u.url).split("?")[0] || "",
            T = r.extract(u.url),
            S = r.parse(T, {
                sort: !1
            }),
            y = Object.assign(S, u.query),
            a = r.stringify(y, g);
        a && (a = `?${a}`);
        let p = function(d) {
            let f = "",
                b = d.indexOf("#");
            return b !== -1 && (f = d.slice(b)), f
        }(u.url);
        return u.fragmentIdentifier && (p = `#${g[n]?h(u.fragmentIdentifier,g):u.fragmentIdentifier}`), `${D}${a}${p}`
    }, r.pick = (u, g, D) => {
        D = Object.assign({
            parseFragmentIdentifier: !0,
            [n]: !1
        }, D);
        let {
            url: T,
            query: S,
            fragmentIdentifier: y
        } = r.parseUrl(u, D);
        return r.stringifyUrl({
            url: T,
            query: s(S, g),
            fragmentIdentifier: y
        }, D)
    }, r.exclude = (u, g, D) => {
        let T = Array.isArray(g) ? S => !g.includes(S) : (S, y) => !g(S, y);
        return r.pick(u, T, D)
    }
})(ii),
function(r) {
    r[r.nothing = 0] = "nothing", r[r.ok = 1] = "ok", r[r.cancel = 2] = "cancel"
}(se || (se = {}));
var Et, Jt = re = (Et = class extends m.Widget {
        constructor() {
            super(...arguments), this.handleClickForAction = t => {
                t.preventDefault(), t.stopPropagation();
                let {
                    onClick: e
                } = this.props, i = l(() => this.executeWithActiveClassOn(() => e == null ? void 0 : e()), "i"), s = this.props.confirmationMessage;
                s ? ri({
                    message: s,
                    onConfirm: i
                }) : i()
            }
        }
        render() {
            var t;
            let {
                url: e,
                enabled: i,
                style: s,
                transition: n,
                children: o
            } = this.props, h = {
                "data-link": "",
                className: s,
                disabled: !i,
                href: void 0
            };
            if (i)
                if (e) {
                    h.onClick = w => re.handleClickForUrl({
                        event: w,
                        message: this.props.confirmationMessage,
                        transition: n,
                        to: h.to || e
                    });
                    let v = _t.getUrlInfo(e);
                    if (v.isInternal) return h.to = {
                        pathname: v.path,
                        search: Object.keys((t = v.queryParams) !== null && t !== void 0 ? t : {}).length > 0 ? `?${ii.stringify(v.queryParams)}` : "",
                        state: {
                            transition: n
                        }
                    }, h.state = {
                        transition: n
                    }, h.activeClassName = "active", h.isActive = (w, A) => !!w && w.isExact && h.to.search === A.search, this.fillWithBuiltinProperties(h), c.createElement(Je.NavLink, Object.assign({}, h), o);
                    h.href = e
                } else h.onClick = this.handleClickForAction, h.href = "#";
            return this.fillWithBuiltinProperties(h), c.createElement("a", Object.assign({}, h), o)
        }
    }, l(Et, "wt"), Et),
    jt;
Jt.handleClickForUrl = r => {
    let {
        event: t,
        to: e,
        message: i,
        transition: s,
        navTo: n = l((h, v) => _t.navigateTo(h, v), "r"),
        askConfirm: o = ri
    } = r;
    t.stopPropagation(), i && (t.preventDefault(), o({
        message: i,
        onConfirm: l(() => {
            var h;
            let v = typeof e == "string" ? e : `${e.pathname}${(h=e.search)!==null&&h!==void 0?h:""}`;
            n(v, s)
        }, "onConfirm")
    }))
}, Jt = re = x([m.WidgetSpec], Jt);
var ze = "reactContainer",
    Ct, Qt = jt = (Ct = class extends m.Widget {
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
            t ? document.documentElement.classList.add(jt.DisableScrollClass) : document.documentElement.classList.remove(jt.DisableScrollClass)
        }
        updateMainContainerAriaHiddenAttr() {
            var t, e;
            this.props.showPopup ? (t = document.getElementById(ze)) === null || t === void 0 || t.setAttribute("aria-hidden", "true") : (e = document.getElementById(ze)) === null || e === void 0 || e.removeAttribute("aria-hidden")
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
                return this.fillWithBuiltinProperties(t), c.createElement(we.Portal, null, c.createElement("div", {
                    className: "popup-backdrop",
                    "data-popup-backdrop": ""
                }, c.createElement("div", Object.assign({}, t), c.createElement("div", {
                    className: "popup-content"
                }, this.props.children))))
            }
            return null
        }
    }, l(Ct, "Pt"), Ct),
    ne;
Qt.DisableScrollClass = "popup-disable-scroll", Qt = jt = x([m.WidgetSpec], Qt);
var xt, $e = ne = (xt = class extends m.Widget {
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
        return q.serializeScrollProperties(this.getHTMLNode())
    }
    loadCustomStateProperties(t) {
        q.loadScrollProperties(this.getHTMLNode(), t)
    }
    render() {
        let t = {
                textAlign: ne.toHtmlAlign(this.props.align),
                minHeight: this.props.height,
                cursor: this.props.extendedEvents && this.props.extendedEvents.onClick ? "pointer" : void 0
            },
            e = {
                className: this.props.style,
                style: t
            };
        return this.fillWithBuiltinProperties(e), c.createElement(k.HtmlTags.div, e, be.wrapElements(this.props.content.render()))
    }
}, l(xt, "At"), xt);
$e = ne = x([m.WidgetSpec], $e);
var Tt, Ge = (Tt = class extends m.Widget {
    constructor(t, e) {
        super(t, e), this.bottomPlaceholderRef = c.createRef(), this.popoverRef = c.createRef(), this.outerOnClickHander = i => {
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
        return !!e && t && (t === e || e.contains(t))
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
            onClick: l(t => this.show(t), "onClick")
        }
    }
    preparePopoverBottomPlaceholderAttributes() {
        return {
            className: "popover-bottom ",
            onClick: l(t => this.hide(t), "onClick"),
            style: {
                width: this.props.popoverWidth ? this.props.popoverWidth + "px" : ""
            },
            ref: this.bottomPlaceholderRef
        }
    }
    render() {
        let t = c.createElement("div", Object.assign({}, this.preparePopoverTopPlaceholderAttributes()), this.props.placeholders.topContent.render()),
            e = this.state.expanded ? c.createElement("div", Object.assign({}, this.preparePopoverBottomPlaceholderAttributes()), this.props.placeholders.bottomContent.render()) : null,
            i = Object.assign(Object.assign({}, this.preparePopoverAttributes()), {
                ref: this.popoverRef
            });
        return c.createElement("div", Object.assign({}, i), t, e)
    }
}, l(Tt, "Vt"), Tt);
Ge = x([m.WidgetSpec], Ge);
var Pt, Xe = (Pt = class extends m.InputWithVariableWidget {
    constructor(t, e) {
        super(t, e), this.state = {
            value: t.variable.value
        }
    }
    onChange(t) {
        let e = t.target;
        this.props.variable.value = e.checked, this.setState({
            value: e.checked
        }, () => {
            this.props.onChange && this.executeAfterPaint(() => {
                this.executeWithActiveClassOn(() => this.props.onChange())
            })
        })
    }
    get htmlElement() {
        return this.getHTMLNode()
    }
    get inputedValue() {
        return this.htmlElement.checked
    }
    get inputedValueValidity() {
        return this.htmlElement.validity
    }
    get variable() {
        return this.props.variable
    }
    updateValue(t) {
        this.setState({
            value: t
        })
    }
    UNSAFE_componentWillReceiveProps(t) {
        this.props.variable.value !== t.variable.value && this.updateValue(t.variable.value)
    }
    render() {
        let t = {
            "data-switch": "",
            className: this.props.style,
            disabled: !this.props.enabled,
            type: "checkbox",
            onChange: l(e => this.onChange(e), "onChange"),
            checked: this.state.value
        };
        return this.fillWithBuiltinProperties(t), c.createElement(k.HtmlTags.span, null, c.createElement(k.HtmlTags.input, t), this.createValidationElement())
    }
}, l(Pt, "Dt"), Pt);
Xe = x([m.WidgetSpec], Xe);
var Lt, _e = (Lt = class extends m.Widget {
    render() {
        let t = {
            className: this.props.style
        };
        return this.fillWithBuiltinProperties(t), c.createElement(k.HtmlTags.span, t, ...this.props.text)
    }
    shouldComponentUpdate(t, e, i) {
        return !K.arrayShallowEquals(this.props.text, t.text) || super.shouldComponentUpdate(t, e, i)
    }
}, l(Lt, "kt"), Lt);
_e = x([m.WidgetSpec], _e);
var Rt, Ye = (Rt = class extends m.InputWithVariableWidget {
        constructor(t, e) {
            super(t, e), this.state = {
                value: ""
            }, this.throttling = new U
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
                let t = this.props.extendedProperties[U.CustomThrottlingProperty];
                t !== void 0 && (this.throttleValue = parseInt(t, 10))
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
                onChange: l(e => this.onChange(e), "onChange"),
                value: this.state.value.toString()
            };
            return this.props.maxLength > 0 && (t.maxLength = this.props.maxLength), this.fillWithBuiltinProperties(t), delete t[U.CustomThrottlingProperty], c.createElement(k.HtmlTags.span, null, c.createElement(k.HtmlTags.textarea, t), this.createValidationElement())
        }
    }, l(Rt, "It"), Rt),
    oe;
Ye = x([m.WidgetSpec], Ye);
var At, Zt = oe = (At = class extends m.InputWithVariableWidget {
    constructor(t, e) {
        super(t, e), this.hiddenInputRef = c.createRef(), this.state = {
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
            s = i == null ? void 0 : i.name,
            n = this.state.filename;
        if (i && s && n !== s) {
            let o = new FileReader;
            o.onload = h => {
                let v = h.target.result,
                    w = v.indexOf(";base64,"),
                    A = v.substr(w + 8),
                    M = new W.BinaryData(A);
                this.props.fileName && (this.props.fileName.value = s), this.variable.value = M, this.setState({
                    filename: s,
                    value: M
                }), this.props.onChange && this.props.onChange()
            }, o.readAsDataURL(i)
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
        let t = {
                type: "file",
                accept: this.getAcceptProperty(),
                style: {
                    display: "none"
                },
                onChange: l(o => this.handleFileSelect(o), "onChange"),
                ref: this.hiddenInputRef,
                required: this.props.mandatory
            },
            e = this.props.extendedProperties;
        if (e)
            for (let o in e) this.shouldIncludeOnExtendedProperty(o) && (t[o] = e[o]);
        let i = {
            "data-upload": "",
            className: this.props.style
        };
        this.variable.value.hasContent() && (i.className += " uploaded"), this.fillWithBuiltinProperties(i);
        let s = {
                className: "upload-" + t.type
            },
            n = c.createElement(k.HtmlTags.label, i, c.createElement(k.HtmlTags.input, t), this.props.children);
        return c.createElement(k.HtmlTags.span, s, n, this.createValidationElement())
    }
    shouldIncludeOnExtendedProperty(t) {
        if (t === "style") return !1;
        if (t === oe.Capture && me.isRunningOnNative()) {
            let e = window;
            if (e.device && e.device.platform.toLowerCase() === "android" && /^[7-9](\..*)?$/.test(e.device.version)) return !1
        }
        return !0
    }
}, l(At, "Ot"), At);
Zt.Capture = "capture", Zt = oe = x([m.WidgetSpec], Zt);
var mi = "6.3.6";
ue.registerPackage("client-runtime-widgets", mi);
export {
    ye as a, Ee as b, Te as c, Re as d, Ae as e, We as f, J as g, Ie as h, Yt as i, Kt as j, Ne as k, He as l, Be as m, Fe as n, Q as o, Me as p, Jt as q, Qt as r, $e as s, Xe as t, _e as u
};