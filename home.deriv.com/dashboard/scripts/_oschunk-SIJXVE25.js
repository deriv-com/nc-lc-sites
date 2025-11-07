import {
    h as d,
    q as b,
    v as w
} from "./_oschunk-O5KC3WOL.js";
import {
    a as B,
    g as v,
    m as S,
    o as H,
    q as P,
    r as C,
    s as O,
    t as R
} from "./_oschunk-NVHFAAS2.js";
import {
    a as _
} from "./_oschunk-AW35UT34.js";
import {
    Ka as y
} from "./_oschunk-WCMQG33O.js";
import {
    X as s,
    c as r,
    f as A,
    q as p
} from "./_oschunk-DFKJJKI4.js";
var o = A(B());
var l = s,
    m = class m extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(m, "VariablesRecord");
var c = m;
c.init();
var f = class f extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
r(f, "WidgetsRecord");
var u = f,
    g = class g extends l.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return c
        }
        static getWidgetsRecordConstructor() {
            return u
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {}
    };
r(g, "Model");
var h = g;
h._hasValidationWidgetsValue = void 0;
var x = new l.Model.ModelFactory(h);
var V = {};
var W = s; {
    let t = class t extends W.Controller.BaseViewController {
        constructor(e, a, E) {
            super(e, a, E, V);
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
            return y.defaultTimeout
        }
    };
    r(t, "ControllerInner");
    let n = t;
    D = n
}
var D, F = new W.Controller.ControllerFactory(D, _);
var ue = v.PlaceholderContent,
    me = v.IteratorPlaceholderContent,
    z = r(function() {
        var n = H(function(t) {
            var I = t.model,
                e = t.controller,
                a = t.controller.idService,
                E = e.validationService,
                T = e.callContext(),
                k = O,
                L = R,
                N = {
                    props: t,
                    validateWidget: r(function(M) {
                        t.validateWidget(t, M)
                    }, "validateWidget")
                },
                i = I,
                G = C,
                K = P,
                U = S();
            return o.createElement("div", t.rootNodeProperties, o.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background: rgba(44, 154, 255, 0.08); border-radius: 16px;"
                },
                style: "display-flex items-center column-gap-s padding-base full-width",
                visible: !0,
                _idProps: {
                    service: a,
                    name: "Infobanner"
                },
                _widgetRecordProvider: i
            }, o.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex;"
                },
                visible: !0,
                _idProps: {
                    service: a,
                    uuid: "1"
                },
                _widgetRecordProvider: i
            }, o.createElement(b, {
                image: p.VersionedURL.getVersionedUrl("img/dashboard.iconstatus_1_.svg"),
                type: 0,
                _idProps: {
                    service: a,
                    uuid: "2"
                },
                _widgetRecordProvider: i
            }), o.createElement(d, {
                align: 0,
                animate: !1,
                style: "flex flex-col",
                visible: !0,
                _idProps: {
                    service: a,
                    uuid: "3"
                },
                _widgetRecordProvider: i
            }, o.createElement(d, {
                align: 0,
                animate: !1,
                style: "flex",
                visible: !0,
                _idProps: {
                    service: a,
                    uuid: "4"
                },
                _widgetRecordProvider: i
            }, o.createElement(w, {
                align: 0,
                content: N.props.placeholders.content,
                _idProps: {
                    service: a,
                    name: "Content"
                },
                _widgetRecordProvider: i
            }))))))
        }, {
            topLevelComponent: !1,
            getAttributes: r(function() {
                return {
                    codeFunction: "InfoBanner",
                    functionKey: "432530cc-2de5-4fd5-8bc6-a2d534f04e29",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.InfoBanner",
            modelFactory: x,
            controllerFactory: F
        });
        return n.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, n.getJsDependencies = function() {
            return []
        }, n.getBlocks = function() {
            return []
        }, n
    }, "componentFactory"),
    fe = z();
export {
    fe as a
};