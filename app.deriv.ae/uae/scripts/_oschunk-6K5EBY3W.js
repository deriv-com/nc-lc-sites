import {
    b as V,
    f as c,
    h as m
} from "./_oschunk-VR5BNL2K.js";
import {
    a as z,
    g as E,
    m as D,
    o as F,
    q as x,
    r as w,
    s as R,
    t as T
} from "./_oschunk-4VHUVDBV.js";
import {
    a as P
} from "./_oschunk-KXORGPRQ.js";
import {
    Sb as H
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as S,
    W as d,
    c as n,
    e as N,
    m as h,
    n as v,
    w as f
} from "./_oschunk-M5BUVJ72.js";
var o = d,
    I = class I extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Header", "headerIn", "Header", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_headerInDataFetchStatus", "_headerInDataFetchStatus", "_headerInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Body", "bodyIn", "Body", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_bodyInDataFetchStatus", "_bodyInDataFetchStatus", "_bodyInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Footer", "footerIn", "Footer", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_footerInDataFetchStatus", "_footerInDataFetchStatus", "_footerInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(I, "VariablesRecord");
var y = I;
y.init();
var O = class O extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(O, "WidgetsRecord");
var p = O,
    b = class b extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return y
        }
        static getWidgetsRecordConstructor() {
            return p
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "Header" in t && (this.variables.headerIn = t.Header, "_headerInDataFetchStatus" in t && (this.variables._headerInDataFetchStatus = t._headerInDataFetchStatus)), "Body" in t && (this.variables.bodyIn = t.Body, "_bodyInDataFetchStatus" in t && (this.variables._bodyInDataFetchStatus = t._bodyInDataFetchStatus)), "Footer" in t && (this.variables.footerIn = t.Footer, "_footerInDataFetchStatus" in t && (this.variables._footerInDataFetchStatus = t._footerInDataFetchStatus))
        }
    };
n(b, "Model");
var _ = b;
_._hasValidationWidgetsValue = void 0;
var A = new o.Model.ModelFactory(_);
var i = N(z());
var L = {
        "5Bf7WizS_UqI83f9OE_k1A#ValueExpression.2524.1": "\u062D\u0633\u0646\u064B\u0627",
        "pEg5KCl+dkG93pOXdgwY+Q#ValueExpression.-916360633.1": "\u062D\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649 \u0641\u064A \u0648\u0642\u062A \u0644\u0627\u062D\u0642.",
        "uYAqolLMe0aYSNLuQL0GmA#ValueExpression.164916731.1": "\u0627\u0644\u0643\u062B\u064A\u0631 \u0645\u0646 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0627\u062A"
    },
    W = {
        "ar-001": {
            translations: L,
            isRTL: !0
        }
    };
var M = d; {
    let t = class t extends M.Controller.BaseViewController {
        constructor(e, r, C) {
            super(e, r, C, W);
            var u = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get buttonClick$Action() {
            return this.hasOwnProperty("_buttonClick$Action") || (this._buttonClick$Action = function() {
                return Promise.resolve()
            }), this._buttonClick$Action
        }
        set buttonClick$Action(e) {
            this._buttonClick$Action = e
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
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(e) {
            this._onSyncStartEventHandler = e
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(e) {
            this._onSyncCompleteEventHandler = e
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(e) {
            this._onSyncErrorEventHandler = e
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
            return H.defaultTimeout
        }
    };
    n(t, "ControllerInner");
    let s = t;
    k = s
}
var k, B = new M.Controller.ControllerFactory(k, P);
var ye = E.PlaceholderContent,
    _e = E.IteratorPlaceholderContent,
    U = n(function() {
        var s = F(function(t) {
            var a = t.model,
                e = t.controller,
                r = t.controller.idService,
                C = e.validationService,
                u = e.callContext(),
                $ = R,
                K = T,
                Y = {
                    props: t,
                    validateWidget: n(function(g) {
                        t.validateWidget(t, g)
                    }, "validateWidget")
                },
                l = a,
                G = w,
                Q = x,
                q = D();
            return i.createElement("div", t.rootNodeProperties, i.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: start !important;"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "w-full",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "0"
                },
                _widgetRecordProvider: l
            }, i.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: start;"
                },
                visible: !0,
                _idProps: {
                    service: r,
                    name: "Title"
                },
                _widgetRecordProvider: l
            }, i.createElement(m, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: 700;"
                },
                style: "text-neutral-10",
                value: a.getCachedValue(r.getId("SJX7xFYeIU+xxtOdKJSetA.Value"), function() {
                    return a.variables.headerIn !== f.nullTextIdentifier() ? a.variables.headerIn : h.resolve(v.TranslationsService).getMessage("uYAqolLMe0aYSNLuQL0GmA#ValueExpression.164916731.1", "Too many attempts")
                }, function() {
                    return a.variables.headerIn
                }),
                _idProps: {
                    service: r,
                    uuid: "2"
                },
                _widgetRecordProvider: l,
                value_dataFetchStatus: S.calculateDataFetchStatus(a.variables._headerInDataFetchStatus)
            })), i.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: start;"
                },
                style: "margin-y-m",
                visible: !0,
                _idProps: {
                    service: r,
                    name: "Content"
                },
                _widgetRecordProvider: l
            }, i.createElement(m, {
                style: "font-size-base text-neutral-10",
                value: a.getCachedValue(r.getId("8nWxrkU_+0e4pW_4URYqXA.Value"), function() {
                    return a.variables.bodyIn !== f.nullTextIdentifier() ? a.variables.bodyIn : h.resolve(v.TranslationsService).getMessage("pEg5KCl+dkG93pOXdgwY+Q#ValueExpression.-916360633.1", "Try again later.")
                }, function() {
                    return a.variables.bodyIn
                }),
                _idProps: {
                    service: r,
                    uuid: "4"
                },
                _widgetRecordProvider: l,
                value_dataFetchStatus: S.calculateDataFetchStatus(a.variables._bodyInDataFetchStatus)
            })), i.createElement(c, {
                align: 0,
                animate: !1,
                style: "w-full",
                visible: !0,
                _idProps: {
                    service: r,
                    name: "Action"
                },
                _widgetRecordProvider: l
            }, i.createElement(V, {
                enabled: !0,
                isDefault: !1,
                onClick: n(function() {
                    var g = typeof u != "undefined" && u !== null ? u.clone() : e.callContext().clone();
                    e.buttonClick$Action(e.callContext(g))
                }, "onClick"),
                style: "btn btn-primary border-radius-rounded w-full",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "6"
                },
                _widgetRecordProvider: l
            }, i.createElement(m, {
                value: a.getCachedValue(r.getId("eiw0AgK510OHzJNQ_KE4iQ.Value"), function() {
                    return a.variables.footerIn !== f.nullTextIdentifier() ? a.variables.footerIn : h.resolve(v.TranslationsService).getMessage("5Bf7WizS_UqI83f9OE_k1A#ValueExpression.2524.1", "OK")
                }, function() {
                    return a.variables.footerIn
                }),
                _idProps: {
                    service: r,
                    uuid: "7"
                },
                _widgetRecordProvider: l,
                value_dataFetchStatus: S.calculateDataFetchStatus(a.variables._footerInDataFetchStatus)
            })))))
        }, {
            topLevelComponent: !1,
            getAttributes: n(function() {
                return {
                    codeFunction: "ErrorPopUp",
                    functionKey: "68dacc28-dae3-43a2-8aef-fbcde5b5f2db",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.ErrorPopUp",
            modelFactory: A,
            controllerFactory: B
        });
        return s.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, s.getJsDependencies = function() {
            return []
        }, s.getBlocks = function() {
            return []
        }, s
    }, "componentFactory"),
    ge = U();
export {
    ge as a
};