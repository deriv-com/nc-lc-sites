import {
    a as p
} from "./_oschunk-YB2J7GTX.js";
import {
    a as E
} from "./_oschunk-HFW3V2GI.js";
import {
    f as h,
    n as w,
    r as V,
    s as W
} from "./_oschunk-VR5BNL2K.js";
import {
    a as K,
    g as A,
    m as T,
    o as $,
    q as H,
    r as L,
    s as x,
    t as N
} from "./_oschunk-4VHUVDBV.js";
import {
    a as B
} from "./_oschunk-KXORGPRQ.js";
import {
    Sb as R
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as _,
    W as b,
    c as i,
    e as j,
    p as S
} from "./_oschunk-M5BUVJ72.js";
var l = b,
    k = class k extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ShowBackbutton", "showBackbuttonIn", "ShowBackbutton", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showBackbuttonInDataFetchStatus", "_showBackbuttonInDataFetchStatus", "_showBackbuttonInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowClosebutton", "showClosebuttonIn", "ShowClosebutton", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showClosebuttonInDataFetchStatus", "_showClosebuttonInDataFetchStatus", "_showClosebuttonInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowInfoButton", "showInfoButtonIn", "ShowInfoButton", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showInfoButtonInDataFetchStatus", "_showInfoButtonInDataFetchStatus", "_showInfoButtonInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowLoader", "showLoaderIn", "ShowLoader", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showLoaderInDataFetchStatus", "_showLoaderInDataFetchStatus", "_showLoaderInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("shouldShowQuestionInfo", "shouldShowQuestionInfoIn", "shouldShowQuestionInfo", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_shouldShowQuestionInfoInDataFetchStatus", "_shouldShowQuestionInfoInDataFetchStatus", "_shouldShowQuestionInfoInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("PreventStyleOverride", "preventStyleOverrideIn", "PreventStyleOverride", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_preventStyleOverrideInDataFetchStatus", "_preventStyleOverrideInDataFetchStatus", "_preventStyleOverrideInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(k, "VariablesRecord");
var C = k;
C.init();
var P = class P extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(P, "WidgetsRecord");
var O = P,
    m = class m extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return C
        }
        static getWidgetsRecordConstructor() {
            return O
        }
        static get hasValidationWidgets() {
            return m._hasValidationWidgetsValue === void 0 && (m._hasValidationWidgetsValue = void 0 || void 0), m._hasValidationWidgetsValue
        }
        setInputs(o) {
            "ShowBackbutton" in o && (this.variables.showBackbuttonIn = o.ShowBackbutton, "_showBackbuttonInDataFetchStatus" in o && (this.variables._showBackbuttonInDataFetchStatus = o._showBackbuttonInDataFetchStatus)), "ShowClosebutton" in o && (this.variables.showClosebuttonIn = o.ShowClosebutton, "_showClosebuttonInDataFetchStatus" in o && (this.variables._showClosebuttonInDataFetchStatus = o._showClosebuttonInDataFetchStatus)), "ShowInfoButton" in o && (this.variables.showInfoButtonIn = o.ShowInfoButton, "_showInfoButtonInDataFetchStatus" in o && (this.variables._showInfoButtonInDataFetchStatus = o._showInfoButtonInDataFetchStatus)), "ShowLoader" in o && (this.variables.showLoaderIn = o.ShowLoader, "_showLoaderInDataFetchStatus" in o && (this.variables._showLoaderInDataFetchStatus = o._showLoaderInDataFetchStatus)), "shouldShowQuestionInfo" in o && (this.variables.shouldShowQuestionInfoIn = o.shouldShowQuestionInfo, "_shouldShowQuestionInfoInDataFetchStatus" in o && (this.variables._shouldShowQuestionInfoInDataFetchStatus = o._shouldShowQuestionInfoInDataFetchStatus)), "PreventStyleOverride" in o && (this.variables.preventStyleOverrideIn = o.PreventStyleOverride, "_preventStyleOverrideInDataFetchStatus" in o && (this.variables._preventStyleOverrideInDataFetchStatus = o._preventStyleOverrideInDataFetchStatus))
        }
    };
i(m, "Model");
var I = m;
I._hasValidationWidgetsValue = void 0;
var U = new l.Model.ModelFactory(I);
var s = j(K());
var Q = {};

function D(v, o, u) {
    function t(n) {
        var e = document.querySelector('meta[name="viewport"]');
        e ? e.content = n : (e = document.createElement("meta"), e.name = "viewport", e.content = n, document.head.appendChild(e))
    }
    i(t, "updateViewportMeta"), t("width=device-width, initial-scale=1.0, maximum-scale=1.0")
}
i(D, "default");
var a = b; {
    let o = class o extends a.Controller.BaseViewController {
        constructor(t, n, e) {
            super(t, n, e, Q);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _closeOnClick$Action() {
            return this.hasOwnProperty("__closeOnClick$Action") || (this.__closeOnClick$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    d = this.idService;
                return a.Logger.startActiveSpan("CloseOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "CloseOnClick"), r.setAttribute("outsystems.function.key", "7cc77a79-9739-4e47-b4f5-4731fb167fa5"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("CloseOnClick"), t = e.callContext(t), a.Flow.executeAsyncFlow(function() {
                            return e.closeBtnEvent$Action(t)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__closeOnClick$Action
        }
        set _closeOnClick$Action(t) {
            this.__closeOnClick$Action = t
        }
        get _leftButtonOnClick$Action() {
            return this.hasOwnProperty("__leftButtonOnClick$Action") || (this.__leftButtonOnClick$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    d = this.idService;
                return a.Logger.startActiveSpan("LeftButtonOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "LeftButtonOnClick"), r.setAttribute("outsystems.function.key", "7d8ee4dc-e419-4510-87b3-e53697ef74e9"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("LeftButtonOnClick"), t = e.callContext(t), a.Flow.executeAsyncFlow(function() {
                            return e.backBtnEvent$Action(t)
                        })
                    }, function() {
                        r && r.end()
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
                    d = this.idService;
                return a.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "88780293-3719-4a77-bca6-64ec81c3b647"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t), a.Logger.startActiveSpan("UpdateMetatag", function(y) {
                            y && (y.setAttribute("code.function", "UpdateMetatag"), y.setAttribute("outsystems.function.key", "a4ac2387-1ceb-4187-afd1-bcddfcb650ec"), y.setAttribute("outsystems.function.owner.name", "uae"), y.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), y.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(D, "UpdateMetatag", "OnReady", null, function(F) {}, {}, {})
                            } finally {
                                y && y.end()
                            }
                        }, 1)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _onInfoClick$Action() {
            return this.hasOwnProperty("__onInfoClick$Action") || (this.__onInfoClick$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    d = this.idService;
                return a.Logger.startActiveSpan("OnInfoClick", function(r) {
                    return r && (r.setAttribute("code.function", "OnInfoClick"), r.setAttribute("outsystems.function.key", "f72bf9fc-21d9-459c-84ad-a6e319d2dfee"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("OnInfoClick"), t = e.callContext(t), a.Flow.executeAsyncFlow(function() {
                            return e.infoBtnEvent$Action(t)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onInfoClick$Action
        }
        set _onInfoClick$Action(t) {
            this.__onInfoClick$Action = t
        }
        closeOnClick$Action(t) {
            var n = this.controller;
            return a.Logger.startActiveSpan("CloseOnClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "CloseOnClick"), e.setAttribute("outsystems.function.key", "7cc77a79-9739-4e47-b4f5-4731fb167fa5"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._closeOnClick$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        leftButtonOnClick$Action(t) {
            var n = this.controller;
            return a.Logger.startActiveSpan("LeftButtonOnClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "LeftButtonOnClick"), e.setAttribute("outsystems.function.key", "7d8ee4dc-e419-4510-87b3-e53697ef74e9"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._leftButtonOnClick$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        onReady$Action(t) {
            var n = this.controller;
            return a.Logger.startActiveSpan("OnReady__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "88780293-3719-4a77-bca6-64ec81c3b647"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onInfoClick$Action(t) {
            var n = this.controller;
            return a.Logger.startActiveSpan("OnInfoClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnInfoClick"), e.setAttribute("outsystems.function.key", "f72bf9fc-21d9-459c-84ad-a6e319d2dfee"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onInfoClick$Action, t)
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
        get closeBtnEvent$Action() {
            return this.hasOwnProperty("_closeBtnEvent$Action") || (this._closeBtnEvent$Action = function() {
                return Promise.resolve()
            }), this._closeBtnEvent$Action
        }
        set closeBtnEvent$Action(t) {
            this._closeBtnEvent$Action = t
        }
        get infoBtnEvent$Action() {
            return this.hasOwnProperty("_infoBtnEvent$Action") || (this._infoBtnEvent$Action = function() {
                return Promise.resolve()
            }), this._infoBtnEvent$Action
        }
        set infoBtnEvent$Action(t) {
            this._infoBtnEvent$Action = t
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
                    d = this.idService;
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
            return R.defaultTimeout
        }
    };
    i(o, "ControllerInner");
    let v = o;
    G = v
}
var G, J = new a.Controller.ControllerFactory(G, B);
var Et = A.PlaceholderContent,
    pt = A.IteratorPlaceholderContent,
    q = i(function() {
        var v = $(function(o) {
            var u = o.model,
                t = o.controller,
                n = o.controller.idService,
                e = t.validationService,
                d = t.callContext(),
                r = x,
                y = N,
                F = {
                    props: o,
                    validateWidget: i(function(f) {
                        o.validateWidget(o, f)
                    }, "validateWidget")
                },
                c = u,
                Z = L,
                X = H,
                g = T();
            return s.createElement("div", o.rootNodeProperties, s.createElement(h, {
                align: 0,
                animate: !1,
                style: "full-width process-layout",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "0"
                },
                _widgetRecordProvider: c
            }, s.createElement(h, {
                align: 0,
                animate: !1,
                style: "full-width display-flex justify-content-center",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "1"
                },
                _widgetRecordProvider: c
            }, s.createElement(h, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "2"
                },
                _widgetRecordProvider: c
            }, s.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "max-width: 608px; z-index: 999;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                style: u.getCachedValue(n.getId("ContentHeader.Style"), function() {
                    return "display-flex align-items-center " + (u.variables.preventStyleOverrideIn ? " desktop-process-layour__header" : " innerHeaderer")
                }, function() {
                    return u.variables.preventStyleOverrideIn
                }),
                visible: !0,
                _idProps: {
                    service: n,
                    name: "ContentHeader"
                },
                _widgetRecordProvider: c,
                style_dataFetchStatus: _.calculateDataFetchStatus(u.variables._preventStyleOverrideInDataFetchStatus)
            }, s.createElement(h, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: n,
                    name: "LeftButton"
                },
                _widgetRecordProvider: c
            }, s.createElement(h, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: i(function() {
                        return Promise.resolve().then(function() {
                            var f = typeof d != "undefined" && d !== null ? d.clone() : t.callContext().clone();
                            return t.leftButtonOnClick$Action(t.callContext(f))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "back-button cursor-pointer mirror-flip",
                visible: u.variables.showBackbuttonIn,
                _idProps: {
                    service: n,
                    name: "BackButton"
                },
                _widgetRecordProvider: c,
                visible_dataFetchStatus: _.calculateDataFetchStatus(u.variables._showBackbuttonInDataFetchStatus)
            }, s.createElement(w, {
                image: S.VersionedURL.getVersionedUrl("img/uae.backarrow.svg"),
                type: 0,
                _idProps: {
                    service: n,
                    uuid: "6"
                },
                _widgetRecordProvider: c
            }))), s.createElement(h, {
                align: 0,
                animate: !1,
                style: "display-flex right-btn-section justify-content-flex-end column-gap-s",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "RightSection"
                },
                _widgetRecordProvider: c
            }, s.createElement(h, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: i(function() {
                        return Promise.resolve().then(function() {
                            var f = typeof d != "undefined" && d !== null ? d.clone() : t.callContext().clone();
                            return t.onInfoClick$Action(t.callContext(f))
                        })
                    }, "onClick")
                },
                style: "back-button cursor-pointer",
                visible: u.variables.showInfoButtonIn,
                _idProps: {
                    service: n,
                    name: "InfoButton"
                },
                _widgetRecordProvider: c,
                visible_dataFetchStatus: _.calculateDataFetchStatus(u.variables._showInfoButtonInDataFetchStatus)
            }, Z(u.variables.shouldShowQuestionInfoIn, !1, this, function() {
                return [s.createElement(w, {
                    image: S.VersionedURL.getVersionedUrl("img/uae.infoicon.svg"),
                    type: 0,
                    _idProps: {
                        service: n,
                        uuid: "9"
                    },
                    _widgetRecordProvider: c
                })]
            }, function() {
                return [s.createElement(w, {
                    image: S.VersionedURL.getVersionedUrl("img/uae.ic_info.svg"),
                    type: 0,
                    _idProps: {
                        service: n,
                        uuid: "10"
                    },
                    _widgetRecordProvider: c
                })]
            })), s.createElement(h, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: i(function() {
                        return Promise.resolve().then(function() {
                            var f = typeof d != "undefined" && d !== null ? d.clone() : t.callContext().clone();
                            return t.closeOnClick$Action(t.callContext(f))
                        })
                    }, "onClick")
                },
                style: "close-icon cursor-pointer",
                visible: u.variables.showClosebuttonIn,
                _idProps: {
                    service: n,
                    name: "CloseButton"
                },
                _widgetRecordProvider: c,
                visible_dataFetchStatus: _.calculateDataFetchStatus(u.variables._showClosebuttonInDataFetchStatus)
            }, s.createElement(w, {
                extendedProperties: {
                    style: "font-size: 16px; height: auto;"
                },
                gridProperties: {
                    width: "24px"
                },
                image: S.VersionedURL.getVersionedUrl("img/uae.close.svg"),
                style: "close-icon",
                type: 0,
                _idProps: {
                    service: n,
                    uuid: "12"
                },
                _widgetRecordProvider: c
            })))), s.createElement(W, {
                align: 0,
                content: F.props.placeholders.contentbody,
                extendedProperties: {
                    style: "height: 21px; margin-top: 56px;"
                },
                style: "innerbody",
                _idProps: {
                    service: n,
                    name: "Contentbody"
                },
                _widgetRecordProvider: c
            })))), s.createElement(V, {
                extendedProperties: {
                    style: "background: transparent; box-shadow: none; min-height: unset !important; min-width: unset !important; width: unset;"
                },
                showPopup: u.variables.showLoaderIn,
                style: '"popup-dialog"',
                _idProps: {
                    service: n,
                    uuid: "14"
                },
                _widgetRecordProvider: c,
                showPopup_dataFetchStatus: _.calculateDataFetchStatus(u.variables._showLoaderInDataFetchStatus)
            }, s.createElement(E, {
                getOwnerSpan: i(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return g.getChildSpan("destroy")
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
                    _handleError: i(function(f) {
                        t.handleError(f)
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
                _widgetRecordProvider: c,
                _dependencies: []
            })), s.createElement(p, {
                getOwnerSpan: i(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: i(function(f) {
                        t.handleError(f)
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
                _widgetRecordProvider: c,
                _dependencies: []
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: i(function() {
                return {
                    codeFunction: "DesktopProcessLayoutNotAuthorized",
                    functionKey: "d614e012-f428-473e-a1da-bdd7ba5b08b5",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Layouts.DesktopProcessLayoutNotAuthorized",
            modelFactory: U,
            controllerFactory: J
        });
        return v.getCssDependencies = function() {
            return ["css/uae.Layouts.DesktopProcessLayoutNotAuthorized.css", "css/OutSystemsReactWidgets.css"]
        }, v.getJsDependencies = function() {
            return []
        }, v.getBlocks = function() {
            return [E, p]
        }, v
    }, "componentFactory"),
    Ot = q();
export {
    Ot as a
};