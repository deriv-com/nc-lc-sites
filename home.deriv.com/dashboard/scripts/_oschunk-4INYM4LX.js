import {
    v as O
} from "./_oschunk-O5KC3WOL.js";
import {
    a as $,
    g as f,
    m as w,
    o as b,
    q as H,
    r as C,
    s as A,
    t as F
} from "./_oschunk-NVHFAAS2.js";
import {
    a as p
} from "./_oschunk-AW35UT34.js";
import {
    Ka as _
} from "./_oschunk-WCMQG33O.js";
import {
    X as d,
    c as a,
    f as V
} from "./_oschunk-DFKJJKI4.js";
var l = d,
    v = class v extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsFromSignup", "isFromSignupIn", "IsFromSignup", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isFromSignupInDataFetchStatus", "_isFromSignupInDataFetchStatus", "_isFromSignupInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(v, "VariablesRecord");
var u = v;
u.init();
var S = class S extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(S, "WidgetsRecord");
var m = S,
    y = class y extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return u
        }
        static getWidgetsRecordConstructor() {
            return m
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(t) {
            "IsFromSignup" in t && (this.variables.isFromSignupIn = t.IsFromSignup, "_isFromSignupInDataFetchStatus" in t && (this.variables._isFromSignupInDataFetchStatus = t._isFromSignupInDataFetchStatus))
        }
    };
a(y, "Model");
var g = y;
g._hasValidationWidgetsValue = void 0;
var P = new l.Model.ModelFactory(g);
var E = V($());
var L = {};
var n = d; {
    let t = class t extends n.Controller.BaseViewController {
        constructor(e, s, r) {
            super(e, s, r, L);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _triggerLanguageSwitcher$Action() {
            return this.hasOwnProperty("__triggerLanguageSwitcher$Action") || (this.__triggerLanguageSwitcher$Action = function(e) {
                var s = this.model,
                    r = this.controller,
                    c = this.idService;
                return n.Logger.startActiveSpan("TriggerLanguageSwitcher", function(i) {
                    return i && (i.setAttribute("code.function", "TriggerLanguageSwitcher"), i.setAttribute("outsystems.function.key", "16062e3a-3d85-499a-8271-0aa213300cf8"), i.setAttribute("outsystems.function.owner.name", "dashboard"), i.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        return r.ensureControllerAlive("TriggerLanguageSwitcher"), e = r.callContext(e), n.Flow.executeAsyncFlow(function() {
                            return n.Flow.executeSequence(function() {
                                return s.variables.isFromSignupIn ? r.triggerLanguageSwticher$Action(e) : n.Flow.returnAsync(n.Navigation.navigateTo(n.Navigation.generateScreenURL("dashboard", "language", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0))
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__triggerLanguageSwitcher$Action
        }
        set _triggerLanguageSwitcher$Action(e) {
            this.__triggerLanguageSwitcher$Action = e
        }
        triggerLanguageSwitcher$Action(e) {
            var s = this.controller;
            return n.Logger.startActiveSpan("TriggerLanguageSwitcher__proxy", function(r) {
                return r && (r.setAttribute("code.function", "TriggerLanguageSwitcher"), r.setAttribute("outsystems.function.key", "16062e3a-3d85-499a-8271-0aa213300cf8"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return s.safeExecuteClientAction(s._triggerLanguageSwitcher$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        get triggerLanguageSwticher$Action() {
            return this.hasOwnProperty("_triggerLanguageSwticher$Action") || (this._triggerLanguageSwticher$Action = function() {
                return Promise.resolve()
            }), this._triggerLanguageSwticher$Action
        }
        set triggerLanguageSwticher$Action(e) {
            this._triggerLanguageSwticher$Action = e
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
            return _.defaultTimeout
        }
    };
    a(t, "ControllerInner");
    let o = t;
    T = o
}
var T, D = new n.Controller.ControllerFactory(T, p);
var ue = f.PlaceholderContent,
    ge = f.IteratorPlaceholderContent,
    N = a(function() {
        var o = b(function(t) {
            var R = t.model,
                e = t.controller,
                s = t.controller.idService,
                r = e.validationService,
                c = e.callContext(),
                i = A,
                W = F,
                I = {
                    props: t,
                    validateWidget: a(function(h) {
                        t.validateWidget(t, h)
                    }, "validateWidget")
                },
                x = R,
                M = C,
                k = H,
                B = w();
            return E.createElement("div", t.rootNodeProperties, E.createElement(O, {
                align: 0,
                content: I.props.placeholders.content,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var h = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                            return e.triggerLanguageSwitcher$Action(e.callContext(h))
                        })
                    }, "onClick")
                },
                style: "cursor-pointer",
                _idProps: {
                    service: s,
                    name: "Content"
                },
                _widgetRecordProvider: x
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: a(function() {
                return {
                    codeFunction: "LanguageSwitcherWrapper",
                    functionKey: "0b8f873b-566c-4416-88e8-07876646f163",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.LanguageSwitcherWrapper",
            modelFactory: P,
            controllerFactory: D
        });
        return o.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, o.getJsDependencies = function() {
            return []
        }, o.getBlocks = function() {
            return []
        }, o
    }, "componentFactory"),
    he = N();
export {
    he as a
};