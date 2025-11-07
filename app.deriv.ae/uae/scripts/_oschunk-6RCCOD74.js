import {
    a as H
} from "./_oschunk-YVFTECWM.js";
import {
    f as R,
    s as g
} from "./_oschunk-VR5BNL2K.js";
import {
    a as q,
    g as S,
    m as C,
    o as I,
    q as p,
    r as O,
    s as A,
    t as w
} from "./_oschunk-4VHUVDBV.js";
import {
    Qb as E,
    vb as G
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as b,
    W as f,
    c as s,
    e as B,
    w as J
} from "./_oschunk-M5BUVJ72.js";
var y = f,
    k = class k extends y.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVertical", "isVerticalIn", "IsVertical", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVerticalInDataFetchStatus", "_isVerticalInDataFetchStatus", "_isVerticalInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, y.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(y.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(k, "VariablesRecord");
var D = k;
D.init();
var V = class V extends y.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(V, "WidgetsRecord");
var F = V,
    W = class W extends y.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return D
        }
        static getWidgetsRecordConstructor() {
            return F
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(n) {
            "IsVertical" in n && (this.variables.isVerticalIn = n.IsVertical, "_isVerticalInDataFetchStatus" in n && (this.variables._isVerticalInDataFetchStatus = n._isVerticalInDataFetchStatus)), "ExtendedClass" in n && (this.variables.extendedClassIn = n.ExtendedClass, "_extendedClassInDataFetchStatus" in n && (this.variables._extendedClassInDataFetchStatus = n._extendedClassInDataFetchStatus))
        }
    };
s(W, "Model");
var x = W;
x._hasValidationWidgetsValue = void 0;
var j = new y.Model.ModelFactory(x);
var u = f,
    $ = class $ extends u.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Status", "statusIn", "Status", !0, !1, u.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_statusInDataFetchStatus", "_statusInDataFetchStatus", "_statusInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("UseTopLabel", "useTopLabelIn", "UseTopLabel", !0, !1, u.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_useTopLabelInDataFetchStatus", "_useTopLabelInDataFetchStatus", "_useTopLabelInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, u.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(u.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s($, "VariablesRecord");
var P = $;
P.init();
var N = class N extends u.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(N, "WidgetsRecord");
var z = N,
    L = class L extends u.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return P
        }
        static getWidgetsRecordConstructor() {
            return z
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(n) {
            "Status" in n && (this.variables.statusIn = n.Status, "_statusInDataFetchStatus" in n && (this.variables._statusInDataFetchStatus = n._statusInDataFetchStatus)), "UseTopLabel" in n && (this.variables.useTopLabelIn = n.UseTopLabel, "_useTopLabelInDataFetchStatus" in n && (this.variables._useTopLabelInDataFetchStatus = n._useTopLabelInDataFetchStatus)), "ExtendedClass" in n && (this.variables.extendedClassIn = n.ExtendedClass, "_extendedClassInDataFetchStatus" in n && (this.variables._extendedClassInDataFetchStatus = n._extendedClassInDataFetchStatus))
        }
    };
s(L, "Model");
var T = L;
T._hasValidationWidgetsValue = void 0;
var Q = new u.Model.ModelFactory(T);
var U = B(q());
var X = {};
var Y = f; {
    let n = class n extends Y.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, X);
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
            return E.defaultTimeout
        }
    };
    s(n, "ControllerInner");
    let o = n;
    Z = o
}
var Z, ee = new Y.Controller.ControllerFactory(Z, H);
var De = S.PlaceholderContent,
    xe = S.IteratorPlaceholderContent,
    de = s(function() {
        var o = I(function(n) {
            var a = n.model,
                e = n.controller,
                r = n.controller.idService,
                t = e.validationService,
                c = e.callContext(),
                i = A,
                l = w,
                m = {
                    props: n,
                    validateWidget: s(function(h) {
                        n.validateWidget(n, h)
                    }, "validateWidget")
                },
                v = a,
                ae = O,
                ie = p,
                se = C();
            return U.createElement("div", n.rootNodeProperties, U.createElement(g, {
                align: 0,
                content: m.props.placeholders.content,
                extendedProperties: {
                    role: "tablist",
                    "aria-orientation": a.getCachedValue(r.getId("Content.aria-orientation"), function() {
                        return a.variables.isVerticalIn ? "vertical" : "horizontal"
                    }, function() {
                        return a.variables.isVerticalIn
                    })
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: a.getCachedValue(r.getId("Content.Style"), function() {
                    return "wizard-wrapper display-flex " + (a.variables.isVerticalIn ? "wizard-vertical flex-direction-column" : "flex-direction-row") + (a.variables.extendedClassIn === "" ? "" : " " + a.variables.extendedClassIn)
                }, function() {
                    return a.variables.isVerticalIn
                }, function() {
                    return a.variables.extendedClassIn
                }),
                _idProps: {
                    service: r,
                    name: "Content"
                },
                _widgetRecordProvider: v,
                style_dataFetchStatus: b.calculateDataFetchStatus(a.variables._isVerticalInDataFetchStatus, a.variables._extendedClassInDataFetchStatus)
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: s(function() {
                return {
                    codeFunction: "Wizard",
                    functionKey: "d77eab3d-b0dd-4236-8453-6d0a8c9a770f",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Navigation.Wizard",
            modelFactory: j,
            controllerFactory: ee
        });
        return o.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, o.getJsDependencies = function() {
            return []
        }, o.getBlocks = function() {
            return []
        }, o
    }, "componentFactory"),
    Pe = de();
var _ = B(q());
var te = {};

function K(o, n, a, e) {
    var r = document.getElementById(o.WidgetId),
        t = r.querySelector(".wizard-item-label").textContent;
    r.setAttribute("aria-label", t)
}
s(K, "default");

function M(o, n, a) {
    event.keyCode === 13 && o.TriggerClick()
}
s(M, "default");
var d = f; {
    let n = class n extends d.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, te);
            var c = this.controller;
            this.clientActionProxies = {
                triggerClick$Action: s(function() {
                    return c.executeActionInsideJSNode(c._triggerClick$Action.bind(c), c.callContext(), function(i) {
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
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return d.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "134be174-3029-4947-8cb2-316417ab0c04"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), d.Logger.startActiveSpan("SetAriaLabel", function(l) {
                            l && (l.setAttribute("code.function", "SetAriaLabel"), l.setAttribute("outsystems.function.key", "5e15b99f-7182-4f9e-b579-f7aed8d10959"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(K, "SetAriaLabel", "OnReady", {
                                    WidgetId: d.DataConversion.JSNodeParamConverter.to(c.getId("WizardWrapperItem"), d.DataTypes.DataTypes.Text)
                                }, function(m) {}, {}, {})
                            } finally {
                                l && l.end()
                            }
                        }, 1)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _triggerClick$Action() {
            return this.hasOwnProperty("__triggerClick$Action") || (this.__triggerClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return d.Logger.startActiveSpan("TriggerClick", function(i) {
                    return i && (i.setAttribute("code.function", "TriggerClick"), i.setAttribute("outsystems.function.key", "34244f6e-370e-4c05-a372-278b11ab20f8"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("TriggerClick"), e = t.callContext(e), d.Flow.executeAsyncFlow(function() {
                            return t.onClick$Action(e)
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__triggerClick$Action
        }
        set _triggerClick$Action(e) {
            this.__triggerClick$Action = e
        }
        get _wizardItemOnKeypress$Action() {
            return this.hasOwnProperty("__wizardItemOnKeypress$Action") || (this.__wizardItemOnKeypress$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return d.Logger.startActiveSpan("WizardItemOnKeypress", function(i) {
                    i && (i.setAttribute("code.function", "WizardItemOnKeypress"), i.setAttribute("outsystems.function.key", "7ec5b89d-888b-4353-b4b7-acc68a58ee22"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("WizardItemOnKeypress"), e = t.callContext(e), d.Logger.startActiveSpan("OnKeyPress_CheckEnter", function(l) {
                            l && (l.setAttribute("code.function", "OnKeyPress_CheckEnter"), l.setAttribute("outsystems.function.key", "42174d82-1844-4efd-9901-f8b9db0600e7"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(M, "OnKeyPress_CheckEnter", "WizardItemOnKeypress", null, function(m) {}, {
                                    TriggerClick: t.clientActionProxies.triggerClick$Action
                                }, {})
                            } finally {
                                l && l.end()
                            }
                        }, 1)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__wizardItemOnKeypress$Action
        }
        set _wizardItemOnKeypress$Action(e) {
            this.__wizardItemOnKeypress$Action = e
        }
        onReady$Action(e) {
            var r = this.controller;
            return d.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "134be174-3029-4947-8cb2-316417ab0c04"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        triggerClick$Action(e) {
            var r = this.controller;
            return d.Logger.startActiveSpan("TriggerClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "TriggerClick"), t.setAttribute("outsystems.function.key", "34244f6e-370e-4c05-a372-278b11ab20f8"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._triggerClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        wizardItemOnKeypress$Action(e) {
            var r = this.controller;
            return d.Logger.startActiveSpan("WizardItemOnKeypress__proxy", function(t) {
                t && (t.setAttribute("code.function", "WizardItemOnKeypress"), t.setAttribute("outsystems.function.key", "7ec5b89d-888b-4353-b4b7-acc68a58ee22"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._wizardItemOnKeypress$Action, e)
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
                var r = this.controller,
                    t = this.model,
                    c = this.idService;
                return r.onReady$Action(e)
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
            return E.defaultTimeout
        }
    };
    s(n, "ControllerInner");
    let o = n;
    ne = o
}
var ne, re = new d.Controller.ControllerFactory(ne, H);
var Xe = S.PlaceholderContent,
    Ye = S.IteratorPlaceholderContent,
    ue = s(function() {
        var o = I(function(n) {
            var a = n.model,
                e = n.controller,
                r = n.controller.idService,
                t = e.validationService,
                c = e.callContext(),
                i = A,
                l = w,
                m = {
                    props: n,
                    validateWidget: s(function(h) {
                        n.validateWidget(n, h)
                    }, "validateWidget")
                },
                v = a,
                ae = O,
                ie = p,
                se = C();
            return _.createElement("div", n.rootNodeProperties, _.createElement(R, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: s(function() {
                        return Promise.resolve().then(function() {
                            var h = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                            return e.triggerClick$Action(e.callContext(h))
                        })
                    }, "onClick"),
                    onKeyPress: s(function() {
                        var h = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                        e.wizardItemOnKeypress$Action(e.callContext(h))
                    }, "onKeyPress")
                },
                extendedProperties: {
                    role: "tab",
                    tabIndex: "0"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: a.getCachedValue(r.getId("WizardWrapperItem.Style"), function() {
                    return "wizard-wrapper-item" + (a.variables.statusIn === J.nullTextIdentifier() ? "" : " " + a.variables.statusIn) + (a.variables.useTopLabelIn ? " label-top" : " label-bottom") + " " + a.variables.extendedClassIn
                }, function() {
                    return a.variables.statusIn
                }, function() {
                    return a.variables.useTopLabelIn
                }, function() {
                    return a.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: r,
                    name: "WizardWrapperItem"
                },
                _widgetRecordProvider: v,
                style_dataFetchStatus: b.calculateDataFetchStatus(a.variables._statusInDataFetchStatus, a.variables._useTopLabelInDataFetchStatus, a.variables._extendedClassInDataFetchStatus)
            }, _.createElement(R, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "wizard-item-icon-wrapper",
                visible: !0,
                _idProps: {
                    service: r,
                    uuid: "1"
                },
                _widgetRecordProvider: v
            }, _.createElement(g, {
                align: 0,
                content: m.props.placeholders.icon,
                style: "wizard-item-icon",
                _idProps: {
                    service: r,
                    name: "Icon"
                },
                _widgetRecordProvider: v
            })), _.createElement(g, {
                align: 0,
                content: m.props.placeholders.label,
                extendedProperties: {
                    "aria-current": a.getCachedValue(r.getId("Label.aria-current"), function() {
                        return a.variables.statusIn === G.steps.active ? "step" : ""
                    }, function() {
                        return a.variables.statusIn
                    })
                },
                style: "wizard-item-label ph",
                _idProps: {
                    service: r,
                    name: "Label"
                },
                _widgetRecordProvider: v
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: s(function() {
                return {
                    codeFunction: "WizardItem",
                    functionKey: "a464a45b-2897-42b1-ab7d-a8ca3ccc3d1c",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Navigation.WizardItem",
            modelFactory: Q,
            controllerFactory: re
        });
        return o.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, o.getJsDependencies = function() {
            return []
        }, o.getBlocks = function() {
            return []
        }, o
    }, "componentFactory"),
    Ze = ue();
export {
    Pe as a, Ze as b
};