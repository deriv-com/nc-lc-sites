import {
    a as _,
    b as O
} from "./_oschunk-4YFBPYRH.js";
import {
    b as C,
    f as y
} from "./_oschunk-OO36B6PN.js";
import {
    a as P,
    g,
    i as f
} from "./_oschunk-IL57OEHH.js";
import {
    a as v
} from "./_oschunk-RFCNRBVT.js";
import {
    ia as c
} from "./_oschunk-5KJVGEL7.js";
import {
    c as a,
    h as p
} from "./_oschunk-QHO7QY6K.js";
var d = p(P());
var o = c; {
    let n = class n extends o.Controller.BaseViewController {
        constructor(t, s, e) {
            super(t, s, e);
            var h = this.controller;
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
                var s = this.model,
                    e = this.controller,
                    h = this.idService;
                return o.Logger.startActiveSpan("TriggerOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "TriggerOnClick"), r.setAttribute("outsystems.function.key", "16930f7a-957e-4228-98c3-4738d2d56bed"), r.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), r.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("TriggerOnClick"), t = e.callContext(t), o.Flow.executeAsyncFlow(function() {
                            return e.onClick$Action(t)
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
            var s = this.controller;
            return o.Logger.startActiveSpan("TriggerOnClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "TriggerOnClick"), e.setAttribute("outsystems.function.key", "16930f7a-957e-4228-98c3-4738d2d56bed"), e.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), e.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return s.safeExecuteClientAction(s._triggerOnClick$Action, t)
                }, function() {
                    e && e.end()
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
            return _.defaultTimeout
        }
    };
    a(n, "ControllerInner");
    let u = n;
    E = u
}
var E, b = new o.Controller.ControllerFactory(E, O);
var S = c,
    L = f.PlaceholderContent,
    M = f.IteratorPlaceholderContent,
    i = class i extends g.BaseWebBlock {
        static get displayName() {
            return "ButtonVariants.SecondaryButton"
        }
        static getAttributes() {
            return {
                codeFunction: "SecondaryButton",
                functionKey: "f07e1b9b-59dd-49fc-b89e-ea7edf36f009",
                functionOwnerName: "CustomComponentsOfficial",
                functionOwnerKey: "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/CustomComponentsOfficial.ButtonVariants.SecondaryButton.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return v
        }
        get controllerFactory() {
            return b
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                l = this.controller,
                t = this.idService,
                s = l.validationService,
                e = this.widgetsRecordProvider,
                h = l.callContext(),
                r = i.ifWidget,
                w = i.textWidget,
                H = i.asPrimitiveValue,
                k = i.getTranslation,
                R = this;
            return d.createElement("div", this.getRootNodeProperties(), d.createElement(C, {
                enabled: !0,
                extendedProperties: {
                    style: "width: " + n.variables.widthIn + ";height: " + n.variables.heightIn + ";border-color: " + n.variables.borderColorIn + ";border-radius: " + n.variables.borderRadiusIn + ";"
                },
                isDefault: !1,
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var A = h.clone();
                        return l.triggerOnClick$Action(l.callContext(A))
                    })
                }, "onClick"),
                style: "secondary-button",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: e
            }, d.createElement(y, {
                extendedProperties: {
                    style: "color: #000;" + ("font-weight: " + (n.variables.isTitleBoldIn ? "bold" : "normal") + ";color: " + n.variables.textColorIn + ";")
                },
                style: "secondary-label",
                value: n.variables.titleIn,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: e,
                value_dataFetchStatus: S.Model.calculateDataFetchStatus(n.variables._titleInDataFetchStatus)
            })))
        }
    };
a(i, "View");
var m = i,
    K = m;
export {
    K as a
};