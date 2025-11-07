import {
    a as v,
    f as y,
    h as m,
    u as b
} from "./_oschunk-VR5BNL2K.js";
import {
    a as G,
    g as S,
    m as w,
    o as x,
    q as C,
    r as D,
    s as V,
    t as F
} from "./_oschunk-4VHUVDBV.js";
import {
    a as R
} from "./_oschunk-KXORGPRQ.js";
import {
    Sb as O
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as h,
    W as u,
    c as i,
    e as k,
    m as d,
    n as c
} from "./_oschunk-M5BUVJ72.js";
var a = k(G());
var l = u,
    g = class g extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("type", "typeIn", "type", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return "email"
            }, !1), this.attr("_typeInDataFetchStatus", "_typeInDataFetchStatus", "_typeInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(g, "VariablesRecord");
var p = g;
p.init();
var f = class f extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(f, "WidgetsRecord");
var _ = f,
    H = class H extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return p
        }
        static getWidgetsRecordConstructor() {
            return _
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "type" in t && (this.variables.typeIn = t.type, "_typeInDataFetchStatus" in t && (this.variables._typeInDataFetchStatus = t._typeInDataFetchStatus))
        }
    };
i(H, "Model");
var E = H;
E._hasValidationWidgetsValue = void 0;
var I = new l.Model.ModelFactory(E);
var Q = {
        "KdUY+Zq9tUKm_i9av_4EyA#ValueExpression.255605443.1": "\u0633\u062A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649 \u0628\u0639\u062F \u062A\u062D\u062F\u064A\u062B\u0643 \u0644\u0640",
        "_y4HvMGzHEm1_cSWrCpMKQ#ValueExpression.-1067162925.1": "\u0644\u0646 \u062A\u062A\u0645\u0643\u0646 \u0645\u0646 \u0633\u062D\u0628 \u0627\u0644\u0623\u0645\u0648\u0627\u0644 \u0644\u0645\u062F\u0629 24 \u0633\u0627\u0639\u0629 \u0628\u0639\u062F \u062A\u062D\u062F\u064A\u062B\u0643 \u0644\u0640",
        "tId_NEV5R0KjQ0miGx6i6Q#ValueExpression.-182264867.1": "\u0644\u0647\u0630\u0627 \u0627\u0644\u062D\u0633\u0627\u0628 \u0641\u064A \u0627\u0644\u0623\u064A\u0627\u0645 \u0627\u0644\u0640 30 \u0627\u0644\u0642\u0627\u062F\u0645\u0629.",
        "tId_NEV5R0KjQ0miGx6i6Q#ValueExpression.355532609.1": "\u0644\u0646 \u062A\u062A\u0645\u0643\u0646 \u0645\u0646 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0642\u062F\u064A\u0645 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643",
        "kJ0wbH3VxUaAMG0swFRDhw#Value": "\u0623\u0645\u0648\u0631 \u064A\u062C\u0628 \u0645\u0644\u0627\u062D\u0638\u062A\u0647\u0627"
    },
    T = {
        "ar-001": {
            translations: Q,
            isRTL: !0
        }
    };
var W = u; {
    let t = class t extends W.Controller.BaseViewController {
        constructor(e, r, P) {
            super(e, r, P, T);
            var A = this.controller;
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
            return O.defaultTimeout
        }
    };
    i(t, "ControllerInner");
    let o = t;
    M = o
}
var M, N = new W.Controller.ControllerFactory(M, R);
var Se = S.PlaceholderContent,
    ye = S.IteratorPlaceholderContent,
    j = i(function() {
        var o = x(function(t) {
            var s = t.model,
                e = t.controller,
                r = t.controller.idService,
                P = e.validationService,
                A = e.callContext(),
                U = V,
                B = F,
                Y = {
                    props: t,
                    validateWidget: i(function(K) {
                        t.validateWidget(t, K)
                    }, "validateWidget")
                },
                n = s,
                L = D,
                z = C,
                J = w();
            return a.createElement("div", t.rootNodeProperties, a.createElement(y, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "0"
                },
                _widgetRecordProvider: n
            }, a.createElement(y, {
                align: 0,
                animate: !1,
                style: "margin-y-base",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "1"
                },
                _widgetRecordProvider: n
            }, a.createElement(b, {
                extendedProperties: {
                    style: "color: var(--text-prominent, rgba(0, 0, 0, 0.96));"
                },
                style: "font-size-base font-bold",
                text: [z(B("kJ0wbH3VxUaAMG0swFRDhw#Value", "Things to note"))],
                _idProps: {
                    service: r,
                    uuid: "2"
                },
                _widgetRecordProvider: n
            })), a.createElement(v, {
                extendedProperties: {
                    className: "email-bullet-block"
                },
                tag: "ul",
                _idProps: {
                    service: r,
                    uuid: "3"
                },
                _widgetRecordProvider: n
            }, a.createElement(v, {
                tag: "li",
                _idProps: {
                    service: r,
                    uuid: "4"
                },
                _widgetRecordProvider: n
            }, a.createElement(m, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                value: d.resolve(c.TranslationsService).getMessage("tId_NEV5R0KjQ0miGx6i6Q#ValueExpression.355532609.1", "You won\u2019t be able to use your old ") + s.variables.typeIn + d.resolve(c.TranslationsService).getMessage("tId_NEV5R0KjQ0miGx6i6Q#ValueExpression.-182264867.1", " for this account for the next 30 days."),
                _idProps: {
                    service: r,
                    uuid: "5"
                },
                _widgetRecordProvider: n,
                value_dataFetchStatus: h.calculateDataFetchStatus(s.variables._typeInDataFetchStatus)
            })), a.createElement(v, {
                tag: "li",
                _idProps: {
                    service: r,
                    uuid: "6"
                },
                _widgetRecordProvider: n
            }, a.createElement(m, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                value: d.resolve(c.TranslationsService).getMessage("_y4HvMGzHEm1_cSWrCpMKQ#ValueExpression.-1067162925.1", "You won\u2019t be able to withdraw funds for 24 hours after updating your ") + s.variables.typeIn + ".",
                _idProps: {
                    service: r,
                    uuid: "7"
                },
                _widgetRecordProvider: n,
                value_dataFetchStatus: h.calculateDataFetchStatus(s.variables._typeInDataFetchStatus)
            })), a.createElement(v, {
                tag: "li",
                _idProps: {
                    service: r,
                    uuid: "8"
                },
                _widgetRecordProvider: n
            }, a.createElement(m, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                value: d.resolve(c.TranslationsService).getMessage("KdUY+Zq9tUKm_i9av_4EyA#ValueExpression.255605443.1", "You'll need to log in again after updating your ") + s.variables.typeIn + ".",
                _idProps: {
                    service: r,
                    uuid: "9"
                },
                _widgetRecordProvider: n,
                value_dataFetchStatus: h.calculateDataFetchStatus(s.variables._typeInDataFetchStatus)
            })))))
        }, {
            topLevelComponent: !1,
            getAttributes: i(function() {
                return {
                    codeFunction: "BulletBlock",
                    functionKey: "f19dd387-4e44-41d5-aa12-cbbd966d32ef",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.BulletBlock",
            modelFactory: I,
            controllerFactory: N
        });
        return o.getCssDependencies = function() {
            return ["css/uae.Common.BulletBlock.css", "css/OutSystemsReactWidgets.css"]
        }, o.getJsDependencies = function() {
            return []
        }, o.getBlocks = function() {
            return []
        }, o
    }, "componentFactory"),
    _e = j();
export {
    _e as a
};