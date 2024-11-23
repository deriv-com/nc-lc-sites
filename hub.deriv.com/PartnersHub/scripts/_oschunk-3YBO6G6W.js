import {
    a as I
} from "./_oschunk-NR4KXK35.js";
import {
    d as O,
    s as v
} from "./_oschunk-OO36B6PN.js";
import {
    a as x,
    g as b,
    i as h
} from "./_oschunk-IL57OEHH.js";
import {
    a as k,
    b as z
} from "./_oschunk-RO5KMNGS.js";
import {
    o as _
} from "./_oschunk-DW3HXDMW.js";
import {
    hd as S
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as u
} from "./_oschunk-5KJVGEL7.js";
import {
    c as s,
    h as H
} from "./_oschunk-QHO7QY6K.js";
var E = H(x());
var N = {};
var W = u; {
    let r = class r extends W.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, N);
            var c = this.controller;
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
            return _.defaultTimeout
        }
    };
    s(r, "ControllerInner");
    let l = r;
    $ = l
}
var $, T = new W.Controller.ControllerFactory($, I);
var M = u,
    ne = h.PlaceholderContent,
    ie = h.IteratorPlaceholderContent,
    m = class m extends b.BaseWebBlock {
        static get displayName() {
            return "Navigation.Wizard"
        }
        static getAttributes() {
            return {
                codeFunction: "Wizard",
                functionKey: "d77eab3d-b0dd-4236-8453-6d0a8c9a770f",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
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
            return k
        }
        get controllerFactory() {
            return T
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                d = this.controller,
                e = this.idService,
                i = d.validationService,
                t = this.widgetsRecordProvider,
                c = d.callContext(),
                n = m.ifWidget,
                o = m.textWidget,
                A = m.asPrimitiveValue,
                V = m.getTranslation,
                g = this;
            return E.createElement("div", this.getRootNodeProperties(), E.createElement(v, {
                align: 0,
                content: g.props.placeholders.content,
                extendedProperties: {
                    role: "tablist",
                    "aria-orientation": r.getCachedValue(e.getId("Content.aria-orientation"), function() {
                        return r.variables.isVerticalIn ? "vertical" : "horizontal"
                    }, function() {
                        return r.variables.isVerticalIn
                    })
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: r.getCachedValue(e.getId("Content.Style"), function() {
                    return "wizard-wrapper display-flex " + (r.variables.isVerticalIn ? "wizard-vertical flex-direction-column" : "flex-direction-row") + (r.variables.extendedClassIn === "" ? "" : " " + r.variables.extendedClassIn)
                }, function() {
                    return r.variables.isVerticalIn
                }, function() {
                    return r.variables.extendedClassIn
                }),
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: M.Model.calculateDataFetchStatus(r.variables._isVerticalInDataFetchStatus, r.variables._extendedClassInDataFetchStatus)
            }))
        }
    };
s(m, "View");
var p = m,
    oe = p;
var f = H(x());
var F = {};

function w(l, r, d, e) {
    var i = document.getElementById(l.WidgetId),
        t = i.querySelector(".wizard-item-label").textContent;
    i.setAttribute("aria-label", t)
}
s(w, "default");

function P(l, r, d) {
    event.keyCode === 13 && l.TriggerClick()
}
s(P, "default");
var a = u; {
    let r = class r extends a.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, F);
            var c = this.controller;
            this.clientActionProxies = {
                triggerClick$Action: s(function() {
                    return c.executeActionInsideJSNode(c._triggerClick$Action.bind(c), c.callContext(), function(n) {
                        return {}
                    }, function() {}, "TriggerClick")
                }, "triggerClick$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    c = this.idService;
                return a.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "134be174-3029-4947-8cb2-316417ab0c04"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), a.Logger.startActiveSpan("SetAriaLabel", function(o) {
                            o && (o.setAttribute("code.function", "SetAriaLabel"), o.setAttribute("outsystems.function.key", "5e15b99f-7182-4f9e-b579-f7aed8d10959"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(w, "SetAriaLabel", "OnReady", {
                                    WidgetId: a.DataConversion.JSNodeParamConverter.to(c.getId("WizardWrapperItem"), a.DataTypes.DataTypes.Text)
                                }, function(A) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _triggerClick$Action() {
            return this.hasOwnProperty("__triggerClick$Action") || (this.__triggerClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    c = this.idService;
                return a.Logger.startActiveSpan("TriggerClick", function(n) {
                    return n && (n.setAttribute("code.function", "TriggerClick"), n.setAttribute("outsystems.function.key", "34244f6e-370e-4c05-a372-278b11ab20f8"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("TriggerClick"), e = t.callContext(e), a.Flow.executeAsyncFlow(function() {
                            return t.onClick$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__triggerClick$Action
        }
        set _triggerClick$Action(e) {
            this.__triggerClick$Action = e
        }
        get _wizardItemOnKeypress$Action() {
            return this.hasOwnProperty("__wizardItemOnKeypress$Action") || (this.__wizardItemOnKeypress$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    c = this.idService;
                return a.Logger.startActiveSpan("WizardItemOnKeypress", function(n) {
                    n && (n.setAttribute("code.function", "WizardItemOnKeypress"), n.setAttribute("outsystems.function.key", "7ec5b89d-888b-4353-b4b7-acc68a58ee22"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("WizardItemOnKeypress"), e = t.callContext(e), a.Logger.startActiveSpan("OnKeyPress_CheckEnter", function(o) {
                            o && (o.setAttribute("code.function", "OnKeyPress_CheckEnter"), o.setAttribute("outsystems.function.key", "42174d82-1844-4efd-9901-f8b9db0600e7"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(P, "OnKeyPress_CheckEnter", "WizardItemOnKeypress", null, function(A) {}, {
                                    TriggerClick: t.clientActionProxies.triggerClick$Action
                                }, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__wizardItemOnKeypress$Action
        }
        set _wizardItemOnKeypress$Action(e) {
            this.__wizardItemOnKeypress$Action = e
        }
        onReady$Action(e) {
            var i = this.controller;
            return a.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "134be174-3029-4947-8cb2-316417ab0c04"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        triggerClick$Action(e) {
            var i = this.controller;
            return a.Logger.startActiveSpan("TriggerClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "TriggerClick"), t.setAttribute("outsystems.function.key", "34244f6e-370e-4c05-a372-278b11ab20f8"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._triggerClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        wizardItemOnKeypress$Action(e) {
            var i = this.controller;
            return a.Logger.startActiveSpan("WizardItemOnKeypress__proxy", function(t) {
                t && (t.setAttribute("code.function", "WizardItemOnKeypress"), t.setAttribute("outsystems.function.key", "7ec5b89d-888b-4353-b4b7-acc68a58ee22"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._wizardItemOnKeypress$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    c = this.idService;
                return i.onReady$Action(e)
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
            return _.defaultTimeout
        }
    };
    s(r, "ControllerInner");
    let l = r;
    D = l
}
var D, U = new a.Controller.ControllerFactory(D, I);
var L = u,
    Oe = h.PlaceholderContent,
    Ee = h.IteratorPlaceholderContent,
    y = class y extends b.BaseWebBlock {
        static get displayName() {
            return "Navigation.WizardItem"
        }
        static getAttributes() {
            return {
                codeFunction: "WizardItem",
                functionKey: "a464a45b-2897-42b1-ab7d-a8ca3ccc3d1c",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
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
            return z
        }
        get controllerFactory() {
            return U
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                d = this.controller,
                e = this.idService,
                i = d.validationService,
                t = this.widgetsRecordProvider,
                c = d.callContext(),
                n = y.ifWidget,
                o = y.textWidget,
                A = y.asPrimitiveValue,
                V = y.getTranslation,
                g = this;
            return f.createElement("div", this.getRootNodeProperties(), f.createElement(O, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: s(function() {
                        return Promise.resolve().then(function() {
                            var C = c.clone();
                            return d.triggerClick$Action(d.callContext(C))
                        })
                    }, "onClick"),
                    onKeyPress: s(function() {
                        var C = c.clone();
                        d.wizardItemOnKeypress$Action(d.callContext(C))
                    }, "onKeyPress")
                },
                extendedProperties: {
                    role: "tab",
                    tabIndex: r.getCachedValue(e.getId("WizardWrapperItem.tabindex"), function() {
                        return (r.variables.statusIn === S.steps.next ? -1 : 0).toString()
                    }, function() {
                        return r.variables.statusIn
                    })
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: r.getCachedValue(e.getId("WizardWrapperItem.Style"), function() {
                    return "wizard-wrapper-item" + (r.variables.statusIn === L.BuiltinFunctions.nullTextIdentifier() ? "" : " " + r.variables.statusIn) + (r.variables.useTopLabelIn ? " label-top" : " label-bottom") + " " + r.variables.extendedClassIn
                }, function() {
                    return r.variables.statusIn
                }, function() {
                    return r.variables.useTopLabelIn
                }, function() {
                    return r.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    name: "WizardWrapperItem"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: L.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus, r.variables._useTopLabelInDataFetchStatus, r.variables._extendedClassInDataFetchStatus)
            }, f.createElement(O, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "wizard-item-icon-wrapper",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, f.createElement(v, {
                align: 0,
                content: g.props.placeholders.icon,
                style: "wizard-item-icon",
                _idProps: {
                    service: e,
                    name: "Icon"
                },
                _widgetRecordProvider: t
            })), f.createElement(v, {
                align: 0,
                content: g.props.placeholders.label,
                extendedProperties: {
                    "aria-current": r.getCachedValue(e.getId("Label.aria-current"), function() {
                        return r.variables.statusIn === S.steps.active ? "step" : ""
                    }, function() {
                        return r.variables.statusIn
                    })
                },
                style: "wizard-item-label ph",
                _idProps: {
                    service: e,
                    name: "Label"
                },
                _widgetRecordProvider: t
            })))
        }
    };
s(y, "View");
var R = y,
    pe = R;
export {
    oe as a, pe as b
};