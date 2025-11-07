import {
    f as s,
    s as m
} from "./_oschunk-VR5BNL2K.js";
import {
    a as L,
    g as h,
    m as P,
    o as O,
    q as w,
    r as R,
    s as x,
    t as b
} from "./_oschunk-4VHUVDBV.js";
import {
    a as C
} from "./_oschunk-KXORGPRQ.js";
import {
    Qb as _,
    Sb as H
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as d,
    c as r,
    e as N
} from "./_oschunk-M5BUVJ72.js";
var l = d,
    g = class g extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(g, "VariablesRecord");
var c = g;
c.init();
var f = class f extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
r(f, "WidgetsRecord");
var v = f,
    p = class p extends l.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return c
        }
        static getWidgetsRecordConstructor() {
            return v
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {}
    };
r(p, "Model");
var u = p;
u._hasValidationWidgetsValue = void 0;
var V = new l.Model.ModelFactory(u);
var i = N(L());
var D = {};
var W = d; {
    let t = class t extends W.Controller.BaseViewController {
        constructor(e, a, y) {
            super(e, a, y, D);
            var E = this.controller;
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
            return H.defaultTimeout
        }
    };
    r(t, "ControllerInner");
    let n = t;
    F = n
}
var F, I = new W.Controller.ControllerFactory(F, C);
var ye = h.PlaceholderContent,
    Ee = h.IteratorPlaceholderContent,
    k = r(function() {
        var n = O(function(t) {
            var T = t.model,
                e = t.controller,
                a = t.controller.idService,
                y = e.validationService,
                E = e.callContext(),
                z = x,
                B = b,
                S = {
                    props: t,
                    validateWidget: r(function(M) {
                        t.validateWidget(t, M)
                    }, "validateWidget")
                },
                o = T,
                A = R,
                K = w,
                U = P();
            return i.createElement("div", t.rootNodeProperties, A(_.isDesktop$Action(E).isDesktopOut, !1, this, function() {
                return [i.createElement(s, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: radial-gradient(108.21% 50% at 52.05% 0%, rgba(255, 68, 79, 0.24) 0%, rgba(255, 68, 79, 0.00) 100%), var(--semantic-color-slate-solid-surface-static-high, #181C25); height: 100%;"
                    },
                    style: "display-flex flex-direction-column align-items-flex-start align-self-stretch",
                    visible: !0,
                    _idProps: {
                        service: a,
                        uuid: "0"
                    },
                    _widgetRecordProvider: o
                }, i.createElement(s, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-self: center; gap: 24px; height: 100%; justify-content: center; padding: 24px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "608px"
                    },
                    style: "display-flex flex-direction-column align-items-center",
                    visible: !0,
                    _idProps: {
                        service: a,
                        uuid: "1"
                    },
                    _widgetRecordProvider: o
                }, i.createElement(m, {
                    align: 0,
                    content: S.props.placeholders.content,
                    style: "",
                    _idProps: {
                        service: a,
                        name: "Content"
                    },
                    _widgetRecordProvider: o
                })))]
            }, function() {
                return [i.createElement(s, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background: radial-gradient(108.21% 50% at 52.05% 0%, rgba(255, 68, 79, 0.24) 0%, rgba(255, 68, 79, 0.00) 100%), var(--semantic-color-slate-solid-surface-static-high, #181C25); height: 100%;"
                    },
                    style: "display-flex flex-direction-column align-items-flex-start align-self-stretch",
                    visible: !0,
                    _idProps: {
                        service: a,
                        uuid: "3"
                    },
                    _widgetRecordProvider: o
                }, i.createElement(s, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-self: center; gap: 24px; height: 80%; justify-content: center; padding: 24px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "390px"
                    },
                    style: "display-flex flex-direction-column align-items-center",
                    visible: !0,
                    _idProps: {
                        service: a,
                        uuid: "4"
                    },
                    _widgetRecordProvider: o
                }, i.createElement(m, {
                    align: 0,
                    content: S.props.placeholders.content2,
                    style: "",
                    _idProps: {
                        service: a,
                        name: "Content2"
                    },
                    _widgetRecordProvider: o
                })))]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: r(function() {
                return {
                    codeFunction: "LayoutKYCStatus",
                    functionKey: "0b6e6197-b76b-4a6a-8b1c-f82068da8eaa",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Layouts.LayoutKYCStatus",
            modelFactory: V,
            controllerFactory: I
        });
        return n.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, n.getJsDependencies = function() {
            return []
        }, n.getBlocks = function() {
            return []
        }, n
    }, "componentFactory"),
    Se = k();
export {
    Se as a
};