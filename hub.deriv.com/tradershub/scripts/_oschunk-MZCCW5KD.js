import {
    a as R
} from "./_oschunk-ZVAEEY5Q.js";
import {
    h,
    w as S
} from "./_oschunk-E7JQAU4J.js";
import {
    a as g
} from "./_oschunk-5N5TJ3ES.js";
import {
    a as D,
    g as E,
    i as f
} from "./_oschunk-T77XORCW.js";
import {
    d as A
} from "./_oschunk-VADNKVBQ.js";
import {
    l
} from "./_oschunk-OOUVJ7PM.js";
import {
    ia as u
} from "./_oschunk-5EPHB76O.js";
import {
    c,
    g as p
} from "./_oschunk-DVBKI63I.js";
var d = p(D());
var C = {};
var i = u; {
    let o = class o extends i.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, C);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    s = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "33212a96-82aa-4973-9d38-6b8189a7cc62"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var b = new i.DataTypes.VariableHolder,
                            _ = new i.DataTypes.VariableHolder;
                        return i.Flow.executeAsyncFlow(function() {
                            return n.flush(), l.layoutReady$Action(e).then(function() {
                                b.value = l.setLang$Action("", e), _.value = l.addFavicon$Action("favicon.png", e)
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    s = this.idService;
                return i.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "aff1aa24-f5a3-4c46-8433-88e29377f085"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), l.layoutDestroy$Action(e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        onReady$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "33212a96-82aa-4973-9d38-6b8189a7cc62"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "aff1aa24-f5a3-4c46-8433-88e29377f085"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    s = this.idService;
                return n.onReady$Action(e)
            }), this._onReadyEventHandler
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    s = this.idService;
                return n.onDestroy$Action(e)
            }), this._onDestroyEventHandler
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
            return A.defaultTimeout
        }
    };
    c(o, "ControllerInner");
    let y = o;
    O = y
}
var O, w = new i.Controller.ControllerFactory(O, g);
var H = u,
    ee = f.PlaceholderContent,
    te = f.IteratorPlaceholderContent,
    a = class a extends E.BaseWebBlock {
        static get displayName() {
            return "Layouts.LayoutBlank"
        }
        static getAttributes() {
            return {
                codeFunction: "LayoutBlank",
                functionKey: "d1f8fc2e-cccb-4a3a-8b10-6e9f5346d872",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return R
        }
        get controllerFactory() {
            return w
        }
        get title() {
            return ""
        }
        internalRender() {
            let o = this.model,
                v = this.controller,
                e = this.idService,
                n = v.validationService,
                t = this.widgetsRecordProvider,
                s = v.callContext(),
                r = a.ifWidget,
                b = a.textWidget,
                _ = a.asPrimitiveValue,
                I = a.getTranslation,
                P = this;
            return d.createElement("div", this.getRootNodeProperties(), d.createElement(h, {
                align: 0,
                animate: !1,
                style: o.getCachedValue(e.getId("8lEy+z8iXUqB3svMwRxbLw.Style"), function() {
                    return "layout blank" + (o.variables.enableAccessibilityFeaturesIn ? " has-accessible-features" : "") + (o.variables.extendedClassIn === "" ? "" : " " + o.variables.extendedClassIn)
                }, function() {
                    return o.variables.enableAccessibilityFeaturesIn
                }, function() {
                    return o.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: H.Model.calculateDataFetchStatus(o.variables._enableAccessibilityFeaturesInDataFetchStatus, o.variables._extendedClassInDataFetchStatus)
            }, d.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    role: "main"
                },
                style: "content",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, d.createElement(S, {
                align: 0,
                content: P.props.placeholders.content,
                style: "main-content",
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t
            }))))
        }
    };
c(a, "View");
var m = a,
    re = m;
export {
    re as a
};