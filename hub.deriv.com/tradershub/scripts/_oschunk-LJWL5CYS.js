import {
    a as O,
    b as E
} from "./_oschunk-34QHXKVM.js";
import {
    a as y
} from "./_oschunk-ZRAK2GIO.js";
import {
    b as _,
    h as v,
    j as b
} from "./_oschunk-E7JQAU4J.js";
import {
    a as F,
    g as C,
    i as f
} from "./_oschunk-T77XORCW.js";
import {
    ia as u
} from "./_oschunk-5EPHB76O.js";
import {
    c as l,
    g as S
} from "./_oschunk-DVBKI63I.js";
var s = S(F());
var i = u; {
    let e = class e extends i.Controller.BaseViewController {
        constructor(t, o, n) {
            super(t, o, n);
            var m = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _triggerOnClick$Action() {
            return this.hasOwnProperty("__triggerOnClick$Action") || (this.__triggerOnClick$Action = function(t) {
                var o = this.model,
                    n = this.controller,
                    m = this.idService;
                return i.Logger.startActiveSpan("TriggerOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "TriggerOnClick"), r.setAttribute("outsystems.function.key", "6fdf31f4-58ea-4197-a3b9-bfee6f8f557d"), r.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), r.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        return n.ensureControllerAlive("TriggerOnClick"), t = n.callContext(t), i.Flow.executeAsyncFlow(function() {
                            return n.onClick$Action(t)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__triggerOnClick$Action
        }
        set _triggerOnClick$Action(t) {
            this.__triggerOnClick$Action = t
        }
        triggerOnClick$Action(t) {
            var o = this.controller;
            return i.Logger.startActiveSpan("TriggerOnClick__proxy", function(n) {
                return n && (n.setAttribute("code.function", "TriggerOnClick"), n.setAttribute("outsystems.function.key", "6fdf31f4-58ea-4197-a3b9-bfee6f8f557d"), n.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), n.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._triggerOnClick$Action, t)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        get onClick$Action() {
            return this.hasOwnProperty("_onClick$Action") || (this._onClick$Action = function() {
                return Promise.resolve()
            }), this._onClick$Action
        }
        set onClick$Action(t) {
            this._onClick$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return O.defaultTimeout
        }
    };
    l(e, "ControllerInner");
    let h = e;
    p = h
}
var p, P = new i.Controller.ControllerFactory(p, E);
var c = u,
    z = f.PlaceholderContent,
    K = f.IteratorPlaceholderContent,
    a = class a extends C.BaseWebBlock {
        static get displayName() {
            return "ButtonVariants.PrimaryButton"
        }
        static getAttributes() {
            return {
                codeFunction: "PrimaryButton",
                functionKey: "dbee8560-5f72-4b2c-8726-d7e24c09e061",
                functionOwnerName: "CustomComponentsOfficial",
                functionOwnerKey: "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/CustomComponentsOfficial.ButtonVariants.PrimaryButton.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return y
        }
        get controllerFactory() {
            return P
        }
        get title() {
            return ""
        }
        internalRender() {
            let e = this.model,
                d = this.controller,
                t = this.idService,
                o = d.validationService,
                n = this.widgetsRecordProvider,
                m = d.callContext(),
                r = a.ifWidget,
                R = a.textWidget,
                w = a.asPrimitiveValue,
                k = a.getTranslation,
                H = this;
            return s.createElement("div", this.getRootNodeProperties(), s.createElement(_, {
                enabled: e.variables.enabledIn,
                extendedProperties: {
                    style: "width: " + e.variables.widthIn + ";height: " + e.variables.heightIn + ";background: " + e.variables.backgroundColorIn + ";border-radius: " + e.variables.borderRadiusIn + ";",
                    type: e.variables.buttonTypeIn,
                    "data-button": e.variables.builtInValidationIn ? "True" : "False"
                },
                isDefault: !1,
                onClick: l(function() {
                    return Promise.resolve().then(function() {
                        var A = m.clone();
                        return d.triggerOnClick$Action(d.callContext(A))
                    })
                }, "onClick"),
                style: "primary-button " + e.variables.classIn,
                visible: e.variables.visibleIn,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: n,
                enabled_dataFetchStatus: c.Model.calculateDataFetchStatus(e.variables._enabledInDataFetchStatus),
                style_dataFetchStatus: c.Model.calculateDataFetchStatus(e.variables._classInDataFetchStatus),
                visible_dataFetchStatus: c.Model.calculateDataFetchStatus(e.variables._visibleInDataFetchStatus)
            }, s.createElement(v, {
                align: 0,
                animate: !1,
                style: "primary-label",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: n
            }, s.createElement(v, {
                align: 0,
                animate: !0,
                style: "primary-button-loading",
                visible: e.variables.isLoadingIn,
                _idProps: {
                    service: t,
                    name: "LoadingContainer"
                },
                _widgetRecordProvider: n,
                visible_dataFetchStatus: c.Model.calculateDataFetchStatus(e.variables._isLoadingInDataFetchStatus)
            }), s.createElement(b, {
                value: e.variables.titleIn,
                _idProps: {
                    service: t,
                    uuid: "3"
                },
                _widgetRecordProvider: n,
                value_dataFetchStatus: c.Model.calculateDataFetchStatus(e.variables._titleInDataFetchStatus)
            }))))
        }
    };
l(a, "View");
var g = a,
    G = g;
export {
    G as a
};