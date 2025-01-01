import {
    a as _
} from "./_oschunk-ZL2HTVZN.js";
import {
    a as b,
    b as F
} from "./_oschunk-TWAMG3Q4.js";
import {
    b as y,
    d as E,
    f as O
} from "./_oschunk-LWMGEL7F.js";
import {
    a as A,
    g as V,
    i as v
} from "./_oschunk-WZHUAZJP.js";
import {
    ia as o
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as n,
    h as M
} from "./_oschunk-QHO7QY6K.js";
var c = M(A());
var a = o,
    g = class g extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Label", "labelIn", "Label", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_labelInDataFetchStatus", "_labelInDataFetchStatus", "_labelInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsSelected", "isSelectedIn", "IsSelected", !0, !1, a.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isSelectedInDataFetchStatus", "_isSelectedInDataFetchStatus", "_isSelectedInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Icon", "iconIn", "Icon", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return `<svg width="81" height="32" viewBox="0 0 81 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M3.08773 21L0.707734 11.228H1.95373L3.00373 15.932L3.81573 19.586H3.84373L4.75373 15.932L5.98573 11.228H7.32973L8.51973 15.932L9.42973 19.572H9.47173L10.3117 15.932L11.4177 11.228H12.6217L10.1157 21H8.81373L7.53973 16.128L6.64373 12.544H6.61573L5.69173 16.128L4.38973 21H3.08773ZM16.5974 21.168C16.1027 21.168 15.6547 21.0793 15.2534 20.902C14.8614 20.7247 14.5207 20.4727 14.2314 20.146C13.9514 19.81 13.7321 19.4133 13.5734 18.956C13.4241 18.4893 13.3494 17.9667 13.3494 17.388C13.3494 16.8187 13.4241 16.3007 13.5734 15.834C13.7321 15.3673 13.9514 14.9707 14.2314 14.644C14.5207 14.308 14.8614 14.0513 15.2534 13.874C15.6547 13.6967 16.1027 13.608 16.5974 13.608C17.0827 13.608 17.5167 13.6967 17.8994 13.874C18.2821 14.0513 18.6087 14.2987 18.8794 14.616C19.1501 14.924 19.3554 15.2927 19.4954 15.722C19.6447 16.1513 19.7194 16.6227 19.7194 17.136V17.668H14.5254V18.004C14.5254 18.312 14.5721 18.6013 14.6654 18.872C14.7681 19.1333 14.9081 19.362 15.0854 19.558C15.2721 19.754 15.4961 19.908 15.7574 20.02C16.0281 20.132 16.3314 20.188 16.6674 20.188C17.1247 20.188 17.5214 20.0807 17.8574 19.866C18.2027 19.6513 18.4687 19.3433 18.6554 18.942L19.4534 19.516C19.2201 20.0107 18.8561 20.412 18.3614 20.72C17.8667 21.0187 17.2787 21.168 16.5974 21.168ZM16.5974 14.546C16.2894 14.546 16.0094 14.602 15.7574 14.714C15.5054 14.8167 15.2861 14.966 15.0994 15.162C14.9221 15.358 14.7821 15.5913 14.6794 15.862C14.5767 16.1233 14.5254 16.4127 14.5254 16.73V16.828H18.5154V16.674C18.5154 16.03 18.3381 15.5167 17.9834 15.134C17.6381 14.742 17.1761 14.546 16.5974 14.546ZM21.565 10.64H22.685V14.952H22.741C22.9277 14.4947 23.1983 14.1587 23.553 13.944C23.917 13.72 24.351 13.608 24.855 13.608C25.303 13.608 25.709 13.6967 26.073 13.874C26.437 14.0513 26.745 14.3033 26.997 14.63C27.2583 14.9567 27.4543 15.3533 27.585 15.82C27.725 16.2867 27.795 16.8093 27.795 17.388C27.795 17.9667 27.725 18.4893 27.585 18.956C27.4543 19.4227 27.2583 19.8193 26.997 20.146C26.745 20.4727 26.437 20.7247 26.073 20.902C25.709 21.0793 25.303 21.168 24.855 21.168C23.875 21.168 23.1703 20.72 22.741 19.824H22.685V21H21.565V10.64ZM24.547 20.16C25.1817 20.16 25.681 19.964 26.045 19.572C26.409 19.1707 26.591 18.648 26.591 18.004V16.772C26.591 16.128 26.409 15.61 26.045 15.218C25.681 14.8167 25.1817 14.616 24.547 14.616C24.295 14.616 24.0523 14.6533 23.819 14.728C23.595 14.7933 23.399 14.8867 23.231 15.008C23.063 15.1293 22.9277 15.2787 22.825 15.456C22.7317 15.624 22.685 15.806 22.685 16.002V18.69C22.685 18.9233 22.7317 19.1333 22.825 19.32C22.9277 19.4973 23.063 19.6513 23.231 19.782C23.399 19.9033 23.595 19.9967 23.819 20.062C24.0523 20.1273 24.295 20.16 24.547 20.16ZM30.2461 12.082C30.0034 12.082 29.8261 12.026 29.7141 11.914C29.6114 11.7927 29.5601 11.6387 29.5601 11.452V11.27C29.5601 11.0833 29.6114 10.934 29.7141 10.822C29.8261 10.7007 30.0034 10.64 30.2461 10.64C30.4888 10.64 30.6614 10.7007 30.7641 10.822C30.8761 10.934 30.9321 11.0833 30.9321 11.27V11.452C30.9321 11.6387 30.8761 11.7927 30.7641 11.914C30.6614 12.026 30.4888 12.082 30.2461 12.082ZM29.6861 13.776H30.8061V21H29.6861V13.776ZM33.1861 21V13.776H34.3061V14.952H34.3621C34.5394 14.5413 34.7868 14.2147 35.1041 13.972C35.4308 13.7293 35.8648 13.608 36.4061 13.608C37.1528 13.608 37.7408 13.8507 38.1701 14.336C38.6088 14.812 38.8281 15.4887 38.8281 16.366V21H37.7081V16.562C37.7081 15.2647 37.1621 14.616 36.0701 14.616C35.8461 14.616 35.6268 14.644 35.4121 14.7C35.2068 14.756 35.0201 14.84 34.8521 14.952C34.6841 15.064 34.5488 15.2087 34.4461 15.386C34.3528 15.554 34.3061 15.7547 34.3061 15.988V21H33.1861ZM46.3931 21C45.9731 21 45.6698 20.888 45.4831 20.664C45.3058 20.44 45.1938 20.16 45.1471 19.824H45.0771C44.9185 20.272 44.6571 20.608 44.2931 20.832C43.9291 21.056 43.4951 21.168 42.9911 21.168C42.2258 21.168 41.6285 20.972 41.1991 20.58C40.7791 20.188 40.5691 19.656 40.5691 18.984C40.5691 18.3027 40.8165 17.78 41.3111 17.416C41.8151 17.052 42.5945 16.87 43.6491 16.87H45.0771V16.156C45.0771 15.6427 44.9371 15.2507 44.6571 14.98C44.3771 14.7093 43.9478 14.574 43.3691 14.574C42.9305 14.574 42.5618 14.672 42.2631 14.868C41.9738 15.064 41.7311 15.3253 41.5351 15.652L40.8631 15.022C41.0591 14.63 41.3718 14.2987 41.8011 14.028C42.2305 13.748 42.7718 13.608 43.4251 13.608C44.3025 13.608 44.9838 13.8227 45.4691 14.252C45.9545 14.6813 46.1971 15.2787 46.1971 16.044V20.02H47.0231V21H46.3931ZM43.1731 20.216C43.4531 20.216 43.7098 20.1833 43.9431 20.118C44.1765 20.0527 44.3771 19.9593 44.5451 19.838C44.7131 19.7167 44.8438 19.5767 44.9371 19.418C45.0305 19.2593 45.0771 19.0867 45.0771 18.9V17.71H43.5931C42.9491 17.71 42.4778 17.8033 42.1791 17.99C41.8898 18.1767 41.7451 18.4473 41.7451 18.802V19.096C41.7451 19.4507 41.8711 19.726 42.1231 19.922C42.3845 20.118 42.7345 20.216 43.1731 20.216ZM48.6216 21V13.776H49.7416V15.106H49.8116C49.9423 14.7607 50.1756 14.4527 50.5116 14.182C50.8476 13.9113 51.3096 13.776 51.8976 13.776H52.3316V14.896H51.6736C51.067 14.896 50.591 15.0127 50.2456 15.246C49.9096 15.47 49.7416 15.7547 49.7416 16.1V21H48.6216Z" fill="white"/>\r
<path d="M71.9883 13.9258L69.6445 16.2695L71.9688 18.5938C72.1641 18.7695 72.1641 19.0625 71.9688 19.2383C71.793 19.4336 71.5 19.4336 71.3242 19.2383L68.9805 16.9141L66.6562 19.2383C66.4805 19.4336 66.1875 19.4336 66.0117 19.2383C65.8164 19.0625 65.8164 18.7695 66.0117 18.5742L68.3359 16.25L66.0117 13.9258C65.8164 13.75 65.8164 13.457 66.0117 13.2617C66.1875 13.0859 66.4805 13.0859 66.6758 13.2617L69 15.6055L71.3242 13.2812C71.5 13.0859 71.793 13.0859 71.9883 13.2812C72.1641 13.457 72.1641 13.75 71.9883 13.9258Z" fill="white"/>\r
</svg>`
            }, !1), this.attr("_iconInDataFetchStatus", "_iconInDataFetchStatus", "_iconInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(g, "VariablesRecord");
var C = g;
C.init();
var S = class S extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(S, "WidgetsRecord");
var p = S,
    l = class l extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return C
        }
        static getWidgetsRecordConstructor() {
            return p
        }
        static get hasValidationWidgets() {
            return l._hasValidationWidgetsValue === void 0 && (l._hasValidationWidgetsValue = void 0), l._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Label" in t && (this.variables.labelIn = t.Label, "_labelInDataFetchStatus" in t && (this.variables._labelInDataFetchStatus = t._labelInDataFetchStatus)), "IsSelected" in t && (this.variables.isSelectedIn = t.IsSelected, "_isSelectedInDataFetchStatus" in t && (this.variables._isSelectedInDataFetchStatus = t._isSelectedInDataFetchStatus)), "Icon" in t && (this.variables.iconIn = t.Icon, "_iconInDataFetchStatus" in t && (this.variables._iconInDataFetchStatus = t._iconInDataFetchStatus))
        }
    };
n(l, "Model");
var h = l;
h._hasValidationWidgetsValue = void 0;
var w = new a.Model.ModelFactory(h);
var R = o; {
    let t = class t extends R.Controller.BaseViewController {
        constructor(e, f, s) {
            super(e, f, s);
            var m = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get onClickIcon$Action() {
            return this.hasOwnProperty("_onClickIcon$Action") || (this._onClickIcon$Action = function() {
                return Promise.resolve()
            }), this._onClickIcon$Action
        }
        set onClickIcon$Action(e) {
            this._onClickIcon$Action = e
        }
        get onClick$Action() {
            return this.hasOwnProperty("_onClick$Action") || (this._onClick$Action = function() {
                return Promise.resolve()
            }), this._onClick$Action
        }
        set onClick$Action(e) {
            this._onClick$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return b.defaultTimeout
        }
    };
    n(t, "ControllerInner");
    let u = t;
    L = u
}
var L, T = new R.Controller.ControllerFactory(L, F);
var I = o,
    n1 = v.PlaceholderContent,
    a1 = v.IteratorPlaceholderContent,
    r = class r extends V.BaseWebBlock {
        static get displayName() {
            return "Chip.Chip"
        }
        static getAttributes() {
            return {
                codeFunction: "Chip",
                functionKey: "e63764ed-7495-4a73-89de-3babcd0528b1",
                functionOwnerName: "CustomComponentsOfficial",
                functionOwnerKey: "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/CustomComponentsOfficial.Chip.Chip.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [_]
        }
        get modelFactory() {
            return w
        }
        get controllerFactory() {
            return T
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                i = this.controller,
                e = this.idService,
                f = i.validationService,
                s = this.widgetsRecordProvider,
                m = i.callContext(),
                x = r.ifWidget,
                k = r.textWidget,
                W = r.asPrimitiveValue,
                $ = r.getTranslation,
                D = this;
            return c.createElement("div", this.getRootNodeProperties(), c.createElement(y, {
                enabled: !0,
                extendedProperties: {
                    "data-state": t.getCachedValue(e.getId("s1RSbThQ7kWB_VUGu_6Lhg.data-state"), function() {
                        return t.variables.isSelectedIn ? "selected" : ""
                    }, function() {
                        return t.variables.isSelectedIn
                    })
                },
                isDefault: !1,
                onClick: n(function() {
                    var d = m.clone();
                    i.onClick$Action(i.callContext(d))
                }, "onClick"),
                style: "deriv-chip",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: s
            }, c.createElement(O, {
                style: "deriv-chip--label",
                value: t.variables.labelIn,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: s,
                value_dataFetchStatus: I.Model.calculateDataFetchStatus(t.variables._labelInDataFetchStatus)
            }), x(t.variables.iconIn !== I.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return [c.createElement(E, {
                    align: 0,
                    animate: !1,
                    extendedEvents: {
                        onClick: n(function() {
                            var d = m.clone();
                            i.onClickIcon$Action(i.callContext(d))
                        }, "onClick")
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: s
                }, c.createElement(_, {
                    getOwnerSpan: n(function() {
                        return D.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return D.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        SVGCode: t.variables.iconIn,
                        _sVGCodeInDataFetchStatus: I.Model.calculateDataFetchStatus(t.variables._iconInDataFetchStatus)
                    },
                    events: {
                        _handleError: n(function(d) {
                            i.handleError(d)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: f
                    },
                    _idProps: {
                        service: e,
                        uuid: "3",
                        alias: "1"
                    },
                    _widgetRecordProvider: s,
                    _dependencies: []
                }))]
            }, function() {
                return []
            })))
        }
    };
n(r, "View");
var H = r,
    i1 = H;
export {
    i1 as a
};