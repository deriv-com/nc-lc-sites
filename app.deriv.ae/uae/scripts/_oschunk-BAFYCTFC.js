import {
    a as S
} from "./_oschunk-HFW3V2GI.js";
import {
    f as g,
    h as F
} from "./_oschunk-VR5BNL2K.js";
import {
    a as G,
    g as f,
    m as O,
    o as P,
    q as V,
    r as R,
    s as D,
    t as I
} from "./_oschunk-4VHUVDBV.js";
import {
    a as w
} from "./_oschunk-KXORGPRQ.js";
import {
    Sb as H
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as y,
    W as l,
    c as n,
    e as A
} from "./_oschunk-M5BUVJ72.js";
var a = l,
    E = class E extends a.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Content", "contentIn", "Content", !0, !1, a.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_contentInDataFetchStatus", "_contentInDataFetchStatus", "_contentInDataFetchStatus", !0, !1, a.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(a.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(E, "VariablesRecord");
var c = E;
c.init();
var _ = class _ extends a.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(_, "WidgetsRecord");
var p = _,
    i = class i extends a.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return c
        }
        static getWidgetsRecordConstructor() {
            return p
        }
        static get hasValidationWidgets() {
            return i._hasValidationWidgetsValue === void 0 && (i._hasValidationWidgetsValue = void 0), i._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Content" in t && (this.variables.contentIn = t.Content, "_contentInDataFetchStatus" in t && (this.variables._contentInDataFetchStatus = t._contentInDataFetchStatus))
        }
    };
n(i, "Model");
var u = i;
u._hasValidationWidgetsValue = void 0;
var b = new a.Model.ModelFactory(u);
var s = A(G());
var W = {};
var T = l; {
    let t = class t extends T.Controller.BaseViewController {
        constructor(e, o, v) {
            super(e, o, v, W);
            var N = this.controller;
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
    n(t, "ControllerInner");
    let r = t;
    M = r
}
var M, B = new T.Controller.ControllerFactory(M, w);
var fe = f.PlaceholderContent,
    ge = f.IteratorPlaceholderContent,
    z = n(function() {
        var r = P(function(t) {
            var h = t.model,
                e = t.controller,
                o = t.controller.idService,
                v = e.validationService,
                N = e.callContext(),
                U = D,
                k = I,
                Z = {
                    props: t,
                    validateWidget: n(function(m) {
                        t.validateWidget(t, m)
                    }, "validateWidget")
                },
                d = h,
                L = R,
                K = V,
                C = O();
            return s.createElement("div", t.rootNodeProperties, s.createElement(g, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; background: rgba(44, 154, 255, 0.08); border-radius: 16px; display: flex; gap: 8px; margin-bottom: 0px; padding: 16px;"
                },
                visible: !0,
                _idProps: {
                    service: o,
                    uuid: "0"
                },
                _widgetRecordProvider: d
            }, s.createElement(S, {
                getOwnerSpan: n(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return C.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M12.0742 5.5C9.73047 5.5 7.60547 6.75 6.41797 8.75C5.26172 10.7812 5.26172 13.25 6.41797 15.25C7.60547 17.2812 9.73047 18.5 12.0742 18.5C14.3867 18.5 16.5117 17.2812 17.6992 15.25C18.8555 13.25 18.8555 10.7812 17.6992 8.75C16.5117 6.75 14.3867 5.5 12.0742 5.5ZM12.0742 20C9.19922 20 6.57422 18.5 5.13672 16C3.69922 13.5312 3.69922 10.5 5.13672 8C6.57422 5.53125 9.19922 4 12.0742 4C14.918 4 17.543 5.53125 18.9805 8C20.418 10.5 20.418 13.5312 18.9805 16C17.543 18.5 14.918 20 12.0742 20ZM10.8242 14.5H11.5742V12.5H10.8242C10.3867 12.5 10.0742 12.1875 10.0742 11.75C10.0742 11.3438 10.3867 11 10.8242 11H12.3242C12.7305 11 13.0742 11.3438 13.0742 11.75V14.5H13.3242C13.7305 14.5 14.0742 14.8438 14.0742 15.25C14.0742 15.6875 13.7305 16 13.3242 16H10.8242C10.3867 16 10.0742 15.6875 10.0742 15.25C10.0742 14.8438 10.3867 14.5 10.8242 14.5ZM12.0742 10C11.5117 10 11.0742 9.5625 11.0742 9C11.0742 8.46875 11.5117 8 12.0742 8C12.6055 8 13.0742 8.46875 13.0742 9C13.0742 9.5625 12.6055 10 12.0742 10Z' fill='#0777C4'/>\r
</svg>`
                },
                events: {
                    _handleError: n(function(m) {
                        e.handleError(m)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: v
                },
                _idProps: {
                    service: o,
                    uuid: "1",
                    alias: "1"
                },
                _widgetRecordProvider: d,
                _dependencies: []
            }), s.createElement(g, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: o,
                    uuid: "2"
                },
                _widgetRecordProvider: d
            }, s.createElement(F, {
                value: h.variables.contentIn,
                _idProps: {
                    service: o,
                    uuid: "3"
                },
                _widgetRecordProvider: d,
                value_dataFetchStatus: y.calculateDataFetchStatus(h.variables._contentInDataFetchStatus)
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: n(function() {
                return {
                    codeFunction: "InfoBanner",
                    functionKey: "ac6f6605-1571-4ea5-9a9d-cd8af518b9c8",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.InfoBanner",
            modelFactory: b,
            controllerFactory: B
        });
        return r.getCssDependencies = function() {
            return ["css/uae.Common.InfoBanner.css", "css/OutSystemsReactWidgets.css"]
        }, r.getJsDependencies = function() {
            return []
        }, r.getBlocks = function() {
            return [S]
        }, r
    }, "componentFactory"),
    Se = z();
export {
    Se as a
};