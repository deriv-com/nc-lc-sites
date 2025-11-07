import {
    a as D
} from "./_oschunk-RVD4FS25.js";
import {
    a as P
} from "./_oschunk-YB2J7GTX.js";
import {
    a as k
} from "./_oschunk-HFW3V2GI.js";
import {
    f as y,
    n as C,
    r as U,
    s as z
} from "./_oschunk-VR5BNL2K.js";
import {
    a as tt,
    g as E,
    m as x,
    o as V,
    q as N,
    r as W,
    s as M,
    t as G
} from "./_oschunk-4VHUVDBV.js";
import {
    a as H
} from "./_oschunk-KXORGPRQ.js";
import {
    Sb as S,
    ub as L
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as b,
    W as A,
    c as a,
    e as Y,
    p as w
} from "./_oschunk-M5BUVJ72.js";
var d = A,
    R = class R extends d.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsWalletCreated", "isWalletCreatedVar", "IsWalletCreated", !0, !1, d.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("shouldShowNotify", "shouldShowNotifyVar", "shouldShowNotify", !0, !1, d.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShowBackbutton", "showBackbuttonIn", "ShowBackbutton", !0, !1, d.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showBackbuttonInDataFetchStatus", "_showBackbuttonInDataFetchStatus", "_showBackbuttonInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowClosebutton", "showClosebuttonIn", "ShowClosebutton", !0, !1, d.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showClosebuttonInDataFetchStatus", "_showClosebuttonInDataFetchStatus", "_showClosebuttonInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowInfoButton", "showInfoButtonIn", "ShowInfoButton", !0, !1, d.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showInfoButtonInDataFetchStatus", "_showInfoButtonInDataFetchStatus", "_showInfoButtonInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowLoader", "showLoaderIn", "ShowLoader", !0, !1, d.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showLoaderInDataFetchStatus", "_showLoaderInDataFetchStatus", "_showLoaderInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("shouldShowQuestionInfo", "shouldShowQuestionInfoIn", "shouldShowQuestionInfo", !0, !1, d.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_shouldShowQuestionInfoInDataFetchStatus", "_shouldShowQuestionInfoInDataFetchStatus", "_shouldShowQuestionInfoInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("PreventStyleOverride", "preventStyleOverrideIn", "PreventStyleOverride", !0, !1, d.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_preventStyleOverrideInDataFetchStatus", "_preventStyleOverrideInDataFetchStatus", "_preventStyleOverrideInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(d.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(R, "VariablesRecord");
var O = R;
O.init();
var B = class B extends d.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(B, "WidgetsRecord");
var F = B,
    g = class g extends d.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return O
        }
        static getWidgetsRecordConstructor() {
            return F
        }
        static get hasValidationWidgets() {
            return g._hasValidationWidgetsValue === void 0 && (g._hasValidationWidgetsValue = void 0 || void 0 || void 0), g._hasValidationWidgetsValue
        }
        setInputs(r) {
            "ShowBackbutton" in r && (this.variables.showBackbuttonIn = r.ShowBackbutton, "_showBackbuttonInDataFetchStatus" in r && (this.variables._showBackbuttonInDataFetchStatus = r._showBackbuttonInDataFetchStatus)), "ShowClosebutton" in r && (this.variables.showClosebuttonIn = r.ShowClosebutton, "_showClosebuttonInDataFetchStatus" in r && (this.variables._showClosebuttonInDataFetchStatus = r._showClosebuttonInDataFetchStatus)), "ShowInfoButton" in r && (this.variables.showInfoButtonIn = r.ShowInfoButton, "_showInfoButtonInDataFetchStatus" in r && (this.variables._showInfoButtonInDataFetchStatus = r._showInfoButtonInDataFetchStatus)), "ShowLoader" in r && (this.variables.showLoaderIn = r.ShowLoader, "_showLoaderInDataFetchStatus" in r && (this.variables._showLoaderInDataFetchStatus = r._showLoaderInDataFetchStatus)), "shouldShowQuestionInfo" in r && (this.variables.shouldShowQuestionInfoIn = r.shouldShowQuestionInfo, "_shouldShowQuestionInfoInDataFetchStatus" in r && (this.variables._shouldShowQuestionInfoInDataFetchStatus = r._shouldShowQuestionInfoInDataFetchStatus)), "PreventStyleOverride" in r && (this.variables.preventStyleOverrideIn = r.PreventStyleOverride, "_preventStyleOverrideInDataFetchStatus" in r && (this.variables._preventStyleOverrideInDataFetchStatus = r._preventStyleOverrideInDataFetchStatus))
        }
    };
a(g, "Model");
var p = g;
p._hasValidationWidgetsValue = void 0;
var j = new d.Model.ModelFactory(p);
var l = Y(tt());
var K = {};

function T(v, r, f) {
    function t(n) {
        var e = document.querySelector('meta[name="viewport"]');
        e ? e.content = n : (e = document.createElement("meta"), e.name = "viewport", e.content = n, document.head.appendChild(e))
    }
    a(t, "updateViewportMeta"), t("width=device-width, initial-scale=1.0, maximum-scale=1.0")
}
a(T, "default");

function $(v, r, f) {
    v.GetOnboardingStatus()
}
a($, "default");
var i = A; {
    let r = class r extends i.Controller.BaseViewController {
        constructor(t, n, e) {
            super(t, n, e, K);
            var c = this.controller;
            this.clientActionProxies = {
                getOnboardingStatus$Action: a(function() {
                    return c.executeActionInsideJSNode(c._getOnboardingStatus$Action.bind(c), c.callContext(), function(o) {
                        return {}
                    }, function() {}, "GetOnboardingStatus")
                }, "getOnboardingStatus$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onInfoClick$Action() {
            return this.hasOwnProperty("__onInfoClick$Action") || (this.__onInfoClick$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("OnInfoClick", function(o) {
                    return o && (o.setAttribute("code.function", "OnInfoClick"), o.setAttribute("outsystems.function.key", "069fdf55-291e-49ba-8ea8-1091be891112"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("OnInfoClick"), t = e.callContext(t), i.Flow.executeAsyncFlow(function() {
                            return e.infoBtnEvent$Action(t)
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onInfoClick$Action
        }
        set _onInfoClick$Action(t) {
            this.__onInfoClick$Action = t
        }
        get _leftButtonOnClick$Action() {
            return this.hasOwnProperty("__leftButtonOnClick$Action") || (this.__leftButtonOnClick$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("LeftButtonOnClick", function(o) {
                    return o && (o.setAttribute("code.function", "LeftButtonOnClick"), o.setAttribute("outsystems.function.key", "bdaaa9a0-2018-4e2a-b6c9-597b726ef0a9"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("LeftButtonOnClick"), t = e.callContext(t), i.Flow.executeAsyncFlow(function() {
                            return e.backBtnEvent$Action(t)
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__leftButtonOnClick$Action
        }
        set _leftButtonOnClick$Action(t) {
            this.__leftButtonOnClick$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(o) {
                    o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "c3083ef1-7440-4225-b327-8f31db4a906e"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t);
                        var _ = new i.DataTypes.VariableHolder;
                        _.value = S.getAuth$Action(t), i.Logger.startActiveSpan("AsyncGetOnboardingStatus", function(u) {
                            u && (u.setAttribute("code.function", "AsyncGetOnboardingStatus"), u.setAttribute("outsystems.function.key", "738ef353-8349-4c7e-b6e5-b9bd94a2607e"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode($, "AsyncGetOnboardingStatus", "OnReady", null, function(s) {}, {
                                    GetOnboardingStatus: e.clientActionProxies.getOnboardingStatus$Action
                                }, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), i.Logger.startActiveSpan("UpdateMetatag", function(u) {
                            u && (u.setAttribute("code.function", "UpdateMetatag"), u.setAttribute("outsystems.function.key", "6b20de08-4e48-4378-978d-ac0537b0921b"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(T, "UpdateMetatag", "OnReady", null, function(s) {}, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _getOnboardingStatus$Action() {
            return this.hasOwnProperty("__getOnboardingStatus$Action") || (this.__getOnboardingStatus$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("GetOnboardingStatus", function(o) {
                    return o && (o.setAttribute("code.function", "GetOnboardingStatus"), o.setAttribute("outsystems.function.key", "e5cde482-b44d-4271-aabe-33bd84b6eb82"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        e.ensureControllerAlive("GetOnboardingStatus"), t = e.callContext(t);
                        var _ = new i.DataTypes.VariableHolder,
                            u = new i.DataTypes.VariableHolder,
                            s = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType);
                        return i.Flow.executeAsyncFlow(function() {
                            return u.value = S.getAuth$Action(t), n.flush(), S.getUserOnboardingStatus$Action(t).then(function(I) {
                                _.value = I
                            }).then(function() {
                                s.value.jSONOut = i.JSONUtils.serializeToJSON(_.value.responseOut, !1, !1), n.variables.shouldShowNotifyVar = _.value.responseOut.dataAttr.getCurrent(t.iterationContext).profileAttr.statusAttr === "incomplete" || _.value.responseOut.dataAttr.getCurrent(t.iterationContext).addressAttr.statusAttr === "incomplete" || _.value.responseOut.dataAttr.getCurrent(t.iterationContext).walletAttr.createdAttr && _.value.responseOut.dataAttr.getCurrent(t.iterationContext).kycAttr.main_statusAttr !== "verified", L.setonboardingAPIResponse(s.value.jSONOut), n.variables.isWalletCreatedVar = _.value.responseOut.dataAttr.getCurrent(t.iterationContext).walletAttr.createdAttr === !0
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__getOnboardingStatus$Action
        }
        set _getOnboardingStatus$Action(t) {
            this.__getOnboardingStatus$Action = t
        }
        get _closeOnClick$Action() {
            return this.hasOwnProperty("__closeOnClick$Action") || (this.__closeOnClick$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("CloseOnClick", function(o) {
                    return o && (o.setAttribute("code.function", "CloseOnClick"), o.setAttribute("outsystems.function.key", "f00965d2-621b-42c3-9f6f-cec4d5853dd3"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("CloseOnClick"), t = e.callContext(t), i.Flow.executeAsyncFlow(function() {
                            return e.closeBtnEvent$Action(t)
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__closeOnClick$Action
        }
        set _closeOnClick$Action(t) {
            this.__closeOnClick$Action = t
        }
        onInfoClick$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnInfoClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnInfoClick"), e.setAttribute("outsystems.function.key", "069fdf55-291e-49ba-8ea8-1091be891112"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onInfoClick$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        leftButtonOnClick$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("LeftButtonOnClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "LeftButtonOnClick"), e.setAttribute("outsystems.function.key", "bdaaa9a0-2018-4e2a-b6c9-597b726ef0a9"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._leftButtonOnClick$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        onReady$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "c3083ef1-7440-4225-b327-8f31db4a906e"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        getOnboardingStatus$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("GetOnboardingStatus__proxy", function(e) {
                return e && (e.setAttribute("code.function", "GetOnboardingStatus"), e.setAttribute("outsystems.function.key", "e5cde482-b44d-4271-aabe-33bd84b6eb82"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._getOnboardingStatus$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        closeOnClick$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("CloseOnClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "CloseOnClick"), e.setAttribute("outsystems.function.key", "f00965d2-621b-42c3-9f6f-cec4d5853dd3"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._closeOnClick$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        get backBtnEvent$Action() {
            return this.hasOwnProperty("_backBtnEvent$Action") || (this._backBtnEvent$Action = function() {
                return Promise.resolve()
            }), this._backBtnEvent$Action
        }
        set backBtnEvent$Action(t) {
            this._backBtnEvent$Action = t
        }
        get infoBtnEvent$Action() {
            return this.hasOwnProperty("_infoBtnEvent$Action") || (this._infoBtnEvent$Action = function() {
                return Promise.resolve()
            }), this._infoBtnEvent$Action
        }
        set infoBtnEvent$Action(t) {
            this._infoBtnEvent$Action = t
        }
        get closeBtnEvent$Action() {
            return this.hasOwnProperty("_closeBtnEvent$Action") || (this._closeBtnEvent$Action = function() {
                return Promise.resolve()
            }), this._closeBtnEvent$Action
        }
        set closeBtnEvent$Action(t) {
            this._closeBtnEvent$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var n = this.controller,
                    e = this.model,
                    c = this.idService;
                return n.onReady$Action(t)
            }), this._onReadyEventHandler
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
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(t) {
            this._onSyncStartEventHandler = t
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(t) {
            this._onSyncCompleteEventHandler = t
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(t) {
            this._onSyncErrorEventHandler = t
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
            return S.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let v = r;
    q = v
}
var q, X = new i.Controller.ControllerFactory(q, H);
var Rt = E.PlaceholderContent,
    Bt = E.IteratorPlaceholderContent,
    nt = a(function() {
        var v = V(function(r) {
            var f = r.model,
                t = r.controller,
                n = r.controller.idService,
                e = t.validationService,
                c = t.callContext(),
                o = M,
                _ = G,
                u = {
                    props: r,
                    validateWidget: a(function(h) {
                        r.validateWidget(r, h)
                    }, "validateWidget")
                },
                s = f,
                I = W,
                ot = N,
                m = x();
            return l.createElement("div", r.rootNodeProperties, l.createElement(y, {
                align: 0,
                animate: !1,
                style: "full-width process-layout",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "0"
                },
                _widgetRecordProvider: s
            }, l.createElement(y, {
                align: 0,
                animate: !1,
                style: "full-width display-flex justify-content-center",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "1"
                },
                _widgetRecordProvider: s
            }, l.createElement(y, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "2"
                },
                _widgetRecordProvider: s
            }, l.createElement(y, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "max-width: 608px; z-index: 999;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                style: f.getCachedValue(n.getId("ContentHeader.Style"), function() {
                    return "display-flex align-items-center " + (f.variables.preventStyleOverrideIn ? " desktop-process-layour__header" : " innerHeaderer")
                }, function() {
                    return f.variables.preventStyleOverrideIn
                }),
                visible: !0,
                _idProps: {
                    service: n,
                    name: "ContentHeader"
                },
                _widgetRecordProvider: s,
                style_dataFetchStatus: b.calculateDataFetchStatus(f.variables._preventStyleOverrideInDataFetchStatus)
            }, l.createElement(y, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: n,
                    name: "LeftButton"
                },
                _widgetRecordProvider: s
            }, l.createElement(y, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var h = typeof c != "undefined" && c !== null ? c.clone() : t.callContext().clone();
                            return t.leftButtonOnClick$Action(t.callContext(h))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "back-button cursor-pointer mirror-flip",
                visible: f.variables.showBackbuttonIn,
                _idProps: {
                    service: n,
                    name: "BackButton"
                },
                _widgetRecordProvider: s,
                visible_dataFetchStatus: b.calculateDataFetchStatus(f.variables._showBackbuttonInDataFetchStatus)
            }, l.createElement(C, {
                image: w.VersionedURL.getVersionedUrl("img/uae.backarrow.svg"),
                type: 0,
                _idProps: {
                    service: n,
                    uuid: "6"
                },
                _widgetRecordProvider: s
            }))), l.createElement(y, {
                align: 0,
                animate: !1,
                style: "display-flex right-btn-section justify-content-flex-end column-gap-s",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "RightSection"
                },
                _widgetRecordProvider: s
            }, l.createElement(y, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var h = typeof c != "undefined" && c !== null ? c.clone() : t.callContext().clone();
                            return t.onInfoClick$Action(t.callContext(h))
                        })
                    }, "onClick")
                },
                style: "back-button cursor-pointer",
                visible: f.variables.showInfoButtonIn,
                _idProps: {
                    service: n,
                    name: "InfoButton"
                },
                _widgetRecordProvider: s,
                visible_dataFetchStatus: b.calculateDataFetchStatus(f.variables._showInfoButtonInDataFetchStatus)
            }, I(f.variables.shouldShowQuestionInfoIn, !1, this, function() {
                return [l.createElement(C, {
                    image: w.VersionedURL.getVersionedUrl("img/uae.infoicon.svg"),
                    type: 0,
                    _idProps: {
                        service: n,
                        uuid: "9"
                    },
                    _widgetRecordProvider: s
                })]
            }, function() {
                return [l.createElement(C, {
                    image: w.VersionedURL.getVersionedUrl("img/uae.ic_info.svg"),
                    type: 0,
                    _idProps: {
                        service: n,
                        uuid: "10"
                    },
                    _widgetRecordProvider: s
                })]
            })), l.createElement(y, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var h = typeof c != "undefined" && c !== null ? c.clone() : t.callContext().clone();
                            return t.closeOnClick$Action(t.callContext(h))
                        })
                    }, "onClick")
                },
                style: "close-icon cursor-pointer",
                visible: f.variables.showClosebuttonIn,
                _idProps: {
                    service: n,
                    name: "CloseButton"
                },
                _widgetRecordProvider: s,
                visible_dataFetchStatus: b.calculateDataFetchStatus(f.variables._showClosebuttonInDataFetchStatus)
            }, l.createElement(C, {
                extendedProperties: {
                    style: "font-size: 16px; height: auto;"
                },
                gridProperties: {
                    width: "24px"
                },
                image: w.VersionedURL.getVersionedUrl("img/uae.close.svg"),
                style: "close-icon",
                type: 0,
                _idProps: {
                    service: n,
                    uuid: "12"
                },
                _widgetRecordProvider: s
            })))), l.createElement(z, {
                align: 0,
                content: u.props.placeholders.contentbody,
                extendedProperties: {
                    style: "height: 21px; margin-top: 56px;"
                },
                style: "innerbody",
                _idProps: {
                    service: n,
                    name: "Contentbody"
                },
                _widgetRecordProvider: s
            })))), l.createElement(U, {
                extendedProperties: {
                    style: "background: transparent; box-shadow: none; min-height: unset !important; min-width: unset !important; width: unset;"
                },
                showPopup: f.variables.showLoaderIn,
                style: '"popup-dialog"',
                _idProps: {
                    service: n,
                    uuid: "14"
                },
                _widgetRecordProvider: s,
                showPopup_dataFetchStatus: b.calculateDataFetchStatus(f.variables._showLoaderInDataFetchStatus)
            }, l.createElement(k, {
                getOwnerSpan: a(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<g clip-path='url(#clip0_16507_129853)'>\r
<path d='M16 28.4444C16 21.5716 21.5716 16 28.4444 16H35.5556C42.4284 16 48 21.5716 48 28.4444V35.5556C48 42.4284 42.4284 48 35.5556 48H28.4444C21.5716 48 16 42.4284 16 35.5556V28.4444Z' fill='#FF444F'/>\r
<path d='M36.0744 22.6296L35.0425 28.4813H31.4608C28.1192 28.4813 24.9341 31.1886 24.3438 34.5301L24.0939 35.9524C23.5064 39.294 25.7359 42.0014 29.0775 42.0014H32.0648C34.5003 42.0014 36.8204 40.0298 37.2488 37.5944L40 21.9986L36.0744 22.6296ZM33.5329 37.0425C33.4011 37.7948 32.7238 38.4072 31.9715 38.4072H30.1565C28.6546 38.4072 27.6497 37.188 27.9133 35.6833L28.0698 34.7965C28.3361 33.2946 29.7694 32.0727 31.2713 32.0727H34.4093L33.5329 37.0425Z' fill='white'/>\r
<g>\r
  <path d='M32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62Z' stroke='#EBECEF' stroke-width='4'/>\r
  <path d='M32 62C15.4315 62 2 48.5685 2 32' stroke='#FF444F' stroke-width='4' stroke-linecap='round'>\r
    <animateTransform\r
      attributeName='transform'\r
      attributeType='XML'\r
      type='rotate'\r
      from='0 32 32'\r
      to='360 32 32'\r
      dur='2s'\r
      repeatCount='indefinite'/>\r
  </path>\r
</g>\r
</g>\r
<defs>\r
<clipPath id='clip0_16507_129853'>\r
<rect width='64' height='64' fill='white'/>\r
</clipPath>\r
</defs>\r
</svg>`
                },
                events: {
                    _handleError: a(function(h) {
                        t.handleError(h)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: e
                },
                _idProps: {
                    service: n,
                    uuid: "15",
                    alias: "1"
                },
                _widgetRecordProvider: s,
                _dependencies: []
            })), l.createElement(P, {
                getOwnerSpan: a(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(h) {
                        t.handleError(h)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: e
                },
                _idProps: {
                    service: n,
                    uuid: "16",
                    alias: "2"
                },
                _widgetRecordProvider: s,
                _dependencies: []
            }), l.createElement(y, {
                align: 0,
                animate: !0,
                gridProperties: {
                    classes: "ThemeGrid_Width1 ThemeGrid_MarginGutter"
                },
                visible: f.getCachedValue(n.getId("A5KZSBSATEK3h8eSOqgQHQ.Visible"), function() {
                    return S.getFeatureFlag$Action("MissingData", c).shouldEnableOut
                }),
                _idProps: {
                    service: n,
                    uuid: "17"
                },
                _widgetRecordProvider: s
            }, l.createElement(D, {
                getOwnerSpan: a(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(h) {
                        t.handleError(h)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: e
                },
                _idProps: {
                    service: n,
                    uuid: "18",
                    alias: "3"
                },
                _widgetRecordProvider: s,
                _dependencies: []
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: a(function() {
                return {
                    codeFunction: "DesktopProcessLayout",
                    functionKey: "6caedaa5-1980-4d44-98cb-5d87d04bc680",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Layouts.DesktopProcessLayout",
            modelFactory: j,
            controllerFactory: X
        });
        return v.getCssDependencies = function() {
            return ["css/uae.Layouts.DesktopProcessLayout.css", "css/OutSystemsReactWidgets.css"]
        }, v.getJsDependencies = function() {
            return []
        }, v.getBlocks = function() {
            return [k, P, D]
        }, v
    }, "componentFactory"),
    Tt = nt();
export {
    Tt as a
};