import {
    a as m
} from "./_oschunk-HFW3V2GI.js";
import {
    f as S
} from "./_oschunk-VR5BNL2K.js";
import {
    a as A,
    g as p,
    m as O,
    o as P,
    q as D,
    r as V,
    s as F,
    t as R
} from "./_oschunk-4VHUVDBV.js";
import {
    a as H
} from "./_oschunk-KXORGPRQ.js";
import {
    Sb as C
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as y,
    W as c,
    c as n,
    e as B
} from "./_oschunk-M5BUVJ72.js";
var o = c,
    _ = class _ extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("show", "showIn", "show", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showInDataFetchStatus", "_showInDataFetchStatus", "_showInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(_, "VariablesRecord");
var f = _;
f.init();
var w = class w extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(w, "WidgetsRecord");
var E = w,
    i = class i extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return f
        }
        static getWidgetsRecordConstructor() {
            return E
        }
        static get hasValidationWidgets() {
            return i._hasValidationWidgetsValue === void 0 && (i._hasValidationWidgetsValue = void 0), i._hasValidationWidgetsValue
        }
        setInputs(t) {
            "show" in t && (this.variables.showIn = t.show, "_showInDataFetchStatus" in t && (this.variables._showInDataFetchStatus = t._showInDataFetchStatus))
        }
    };
n(i, "Model");
var g = i;
g._hasValidationWidgetsValue = void 0;
var x = new o.Model.ModelFactory(g);
var s = B(A());
var L = {};
var M = c; {
    let t = class t extends M.Controller.BaseViewController {
        constructor(e, a, h) {
            super(e, a, h, L);
            var T = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
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
            return C.defaultTimeout
        }
    };
    n(t, "ControllerInner");
    let r = t;
    W = r
}
var W, b = new M.Controller.ControllerFactory(W, H);
var me = p.PlaceholderContent,
    fe = p.IteratorPlaceholderContent,
    G = n(function() {
        var r = P(function(t) {
            var l = t.model,
                e = t.controller,
                a = t.controller.idService,
                h = e.validationService,
                T = e.callContext(),
                N = F,
                k = R,
                U = {
                    props: t,
                    validateWidget: n(function(d) {
                        t.validateWidget(t, d)
                    }, "validateWidget")
                },
                u = l,
                z = V,
                Z = D,
                v = O();
            return s.createElement("div", t.rootNodeProperties, s.createElement(S, {
                align: 0,
                animate: !1,
                style: l.getCachedValue(a.getId("BM6yxoB5A0efwU6lnlX0GA.Style"), function() {
                    return l.variables.showIn ? "flex w-full h-full justify-center items-center" : "hidden"
                }, function() {
                    return l.variables.showIn
                }),
                visible: !0,
                _idProps: {
                    service: a,
                    uuid: "0"
                },
                _widgetRecordProvider: u,
                style_dataFetchStatus: y.calculateDataFetchStatus(l.variables._showInDataFetchStatus)
            }, s.createElement(S, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 64px; position: relative;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "64px"
                },
                visible: !0,
                _idProps: {
                    service: a,
                    uuid: "1"
                },
                _widgetRecordProvider: u
            }, s.createElement(m, {
                getOwnerSpan: n(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "loader-circle",
                    SVGCode: `<svg xmlns='http://www.w3.org/2000/svg' width='64' height='65' viewBox='0 0 64 65' fill='none'>\r
  <path d='M32 62.5C48.5685 62.5 62 49.0685 62 32.5C62 15.9315 48.5685 2.5 32 2.5C15.4315 2.5 2 15.9315 2 32.5C2 49.0685 15.4315 62.5 32 62.5Z' stroke='#EBECEF' stroke-width='4'/>\r
  <path d='M32 62.5C15.4315 62.5 2 49.0685 2 32.5' stroke='#FF444F' stroke-width='4' stroke-linecap='round'/>\r
</svg>`
                },
                events: {
                    _handleError: n(function(d) {
                        e.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: h
                },
                _idProps: {
                    service: a,
                    name: "Ring",
                    alias: "1"
                },
                _widgetRecordProvider: u,
                _dependencies: []
            }), s.createElement(m, {
                getOwnerSpan: n(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "loader-logo",
                    SVGCode: `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='33' viewBox='0 0 32 33' fill='none'>\r
  <path d='M0 12.9444C0 6.07157 5.57157 0.5 12.4444 0.5H19.5556C26.4284 0.5 32 6.07157 32 12.9444V20.0556C32 26.9284 26.4284 32.5 19.5556 32.5H12.4444C5.57157 32.5 0 26.9284 0 20.0556V12.9444Z' fill='#FF444F'/>\r
  <path d='M20.0744 7.12965L19.0425 12.9813H15.4608C12.1192 12.9813 8.93414 15.6886 8.34382 19.0301L8.09395 20.4524C7.50637 23.794 9.7359 26.5014 13.0775 26.5014H16.0648C18.5003 26.5014 20.8204 24.5298 21.2488 22.0944L24 6.49859L20.0744 7.12965ZM17.5329 21.5425C17.4011 22.2948 16.7238 22.9072 15.9715 22.9072H14.1565C12.6546 22.9072 11.6497 21.688 11.9133 20.1833L12.0698 19.2965C12.3361 17.7946 13.7694 16.5727 15.2713 16.5727H18.4093L17.5329 21.5425Z' fill='white'/>\r
</svg>`
                },
                events: {
                    _handleError: n(function(d) {
                        e.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: h
                },
                _idProps: {
                    service: a,
                    name: "Logo",
                    alias: "2"
                },
                _widgetRecordProvider: u,
                _dependencies: []
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: n(function() {
                return {
                    codeFunction: "DerivLogoLoader",
                    functionKey: "ebf4090d-889f-4f4f-8057-0642bdf04053",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.DerivLogoLoader",
            modelFactory: x,
            controllerFactory: b
        });
        return r.getCssDependencies = function() {
            return ["css/uae.Common.DerivLogoLoader.css", "css/OutSystemsReactWidgets.css"]
        }, r.getJsDependencies = function() {
            return []
        }, r.getBlocks = function() {
            return [m]
        }, r
    }, "componentFactory"),
    ge = G();
export {
    ge as a
};