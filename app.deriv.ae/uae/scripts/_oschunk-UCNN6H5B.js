import {
    a as R
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as T
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as x
} from "./_oschunk-TLJXDQWQ.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as G,
    f as m,
    o as j,
    p as K,
    u as Z
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ee,
    g as w,
    m as M,
    n as B,
    q,
    r as z,
    s as J,
    t as P
} from "./_oschunk-4VHUVDBV.js";
import {
    a as W
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Sb as C,
    pb as _,
    ub as b,
    w as O
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as p,
    c as i,
    e as X,
    v as $
} from "./_oschunk-M5BUVJ72.js";
var te = {
        "w7i33_bEN0ijv+tm57drhA#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "5Me5oKJTYkCfecLO89fZQg#Value": "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
        "1N4dwT6eCkuvwkA2bgvBZg#Value": "\u0645\u0627 \u0647\u0648 \u0631\u0642\u0645 \u0647\u0627\u062A\u0641\u0643\u061F"
    },
    Q = {
        "ar-001": {
            translations: te,
            isRTL: !0
        }
    };

function N(v, l, d) {
    sessionStorage.setItem("previousUrl", window.location.href)
}
i(N, "default");
var t = p; {
    let l = class l extends t.Controller.BaseViewController {
        constructor(e, n, r) {
            super(e, n, r, Q);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get postUpdateUser$ServerAction() {
            return this.hasOwnProperty("_postUpdateUser$ServerAction") || (this._postUpdateUser$ServerAction = function(e, n, r) {
                var c = this.controller;
                return t.Logger.startActiveSpan("PostUpdateUser", function(o) {
                    return o && (o.setAttribute("code.function", "PostUpdateUser"), o.setAttribute("outsystems.function.key", "3811ee3e-7e80-4f03-a5cd-c661c0d3f54d"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), t.Flow.tryFinally(function() {
                        var y = {
                            Request: t.DataConversion.ServerDataConverter.to(e, t.DataTypes.DataTypes.Record),
                            Authorization: t.DataConversion.ServerDataConverter.to(n, t.DataTypes.DataTypes.Text)
                        };
                        return c.callServerAction("PostUpdateUser", "screenservices/uae/OnboardingFlow/PhoneNumberInput/ActionPostUpdateUser", "3ZR9QI0swbB8qMcDwX9dNA", y, c.callContext(r), void 0, void 0, !0).then(function(h) {
                            var a = new(c.constructor.getVariableGroupType("uae.OnboardingFlow.PhoneNumberInput$ActionPostUpdateUser"));
                            return a.responseOut = t.DataConversion.ServerDataConverter.from(h.Response, _), a
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 0)
            }), this._postUpdateUser$ServerAction
        }
        set postUpdateUser$ServerAction(e) {
            this._postUpdateUser$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _nextOnClick$Action() {
            return this.hasOwnProperty("__nextOnClick$Action") || (this.__nextOnClick$Action = function(e) {
                var n = this.model,
                    r = this.controller,
                    c = this.idService;
                return t.Logger.startActiveSpan("NextOnClick", function(o) {
                    return o && (o.setAttribute("code.function", "NextOnClick"), o.setAttribute("outsystems.function.key", "31f57a60-123d-4f54-94a2-e0bf2103954e"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        r.ensureControllerAlive("NextOnClick"), e = r.callContext(e);
                        var y = new t.DataTypes.VariableHolder,
                            h = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return h.value = C.getAuth$Action(e), b.setphone(n.variables.phone_numberVar), n.variables.is_loadingVar = !0, n.variables.login_requestVar.phoneAttr = b.getphone(), n.variables.login_requestVar.refresh_tokenAttr = h.value.refresh_tokenOut, n.variables.login_requestVar.access_tokenAttr = h.value.access_token_without_bearer_prefixOut, n.flush(), r.postUpdateUser$ServerAction(n.variables.login_requestVar, h.value.tokenOut, e).then(function(a) {
                                y.value = a
                            }).then(function() {
                                return n.variables.is_loadingVar = !1, t.Logger.startActiveSpan("StoreNavigationUrl", function(a) {
                                    a && (a.setAttribute("code.function", "StoreNavigationUrl"), a.setAttribute("outsystems.function.key", "e89cbcd5-cc92-45ff-a2aa-7743ff3453d6"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return r.safeExecuteJSNode(N, "StoreNavigationUrl", "NextOnClick", null, function(Y) {}, {}, {})
                                    } finally {
                                        a && a.end()
                                    }
                                }, 1), t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "otp", {
                                    phone: t.DataConversion.ServerDataConverter.to(b.getphone(), t.DataTypes.DataTypes.PhoneNumber),
                                    is_phone_verification: t.DataConversion.ServerDataConverter.to(!0, t.DataTypes.DataTypes.Boolean)
                                }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.None), e, !0))
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__nextOnClick$Action
        }
        set _nextOnClick$Action(e) {
            this.__nextOnClick$Action = e
        }
        get _layoutOnboardingOnLeftActionEvent$Action() {
            return this.hasOwnProperty("__layoutOnboardingOnLeftActionEvent$Action") || (this.__layoutOnboardingOnLeftActionEvent$Action = function(e) {
                var n = this.model,
                    r = this.controller,
                    c = this.idService;
                return t.Logger.startActiveSpan("LayoutOnboardingOnLeftActionEvent", function(o) {
                    o && (o.setAttribute("code.function", "LayoutOnboardingOnLeftActionEvent"), o.setAttribute("outsystems.function.key", "c9fdeaef-67ba-42fd-8c14-2f3d66f3caf5"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return r.ensureControllerAlive("LayoutOnboardingOnLeftActionEvent"), e = r.callContext(e), t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "phone-and-email", {
                            verification_type: t.DataConversion.ServerDataConverter.to("phone", t.DataTypes.DataTypes.Text)
                        }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__layoutOnboardingOnLeftActionEvent$Action
        }
        set _layoutOnboardingOnLeftActionEvent$Action(e) {
            this.__layoutOnboardingOnLeftActionEvent$Action = e
        }
        nextOnClick$Action(e) {
            var n = this.controller;
            return t.Logger.startActiveSpan("NextOnClick__proxy", function(r) {
                return r && (r.setAttribute("code.function", "NextOnClick"), r.setAttribute("outsystems.function.key", "31f57a60-123d-4f54-94a2-e0bf2103954e"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._nextOnClick$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        layoutOnboardingOnLeftActionEvent$Action(e) {
            var n = this.controller;
            return t.Logger.startActiveSpan("LayoutOnboardingOnLeftActionEvent__proxy", function(r) {
                r && (r.setAttribute("code.function", "LayoutOnboardingOnLeftActionEvent"), r.setAttribute("outsystems.function.key", "c9fdeaef-67ba-42fd-8c14-2f3d66f3caf5"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._layoutOnboardingOnLeftActionEvent$Action, e)
                } finally {
                    r && r.end()
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
                return R.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return C.defaultTimeout
        }
    };
    i(l, "ControllerInner");
    let v = l;
    D = v, D.registerVariableGroupType("uae.OnboardingFlow.PhoneNumberInput$ActionPostUpdateUser", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: t.DataTypes.DataTypes.Record,
        defaultValue: i(function() {
            return new _
        }, "defaultValue"),
        complexType: _
    }])
}
var D, H = new t.Controller.ControllerFactory(D, W);
var s = X(ee());
var f = p,
    k = class k extends f.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("phone_number", "phone_numberVar", "phone_number", !0, !1, f.DataTypes.DataTypes.PhoneNumber, function() {
                return ""
            }, !1), this.attr("login_request", "login_requestVar", "login_request", !0, !1, f.DataTypes.DataTypes.Record, function() {
                return f.DataTypes.ImmutableBase.getData(new O)
            }, !1, O), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(f.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(k, "VariablesRecord");
var S = k;
S.init();
var F = class F extends f.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            PhoneNumber: f.Model.ValidationWidgetRecord
        }
    }
};
i(F, "WidgetsRecord");
var V = F,
    U = class U extends f.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return S
        }
        static getWidgetsRecordConstructor() {
            return V
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(l) {}
    };
i(U, "Model");
var A = U;
A._hasValidationWidgetsValue = void 0;
var L = new f.Model.ModelFactory(A);
var I = w.PlaceholderContent,
    Re = w.IteratorPlaceholderContent,
    re = i(function() {
        var v = B(function(l) {
            var d = l.model,
                e = l.controller,
                n = l.controller.idService,
                r = e.validationService,
                c = e.callContext(),
                o = J,
                y = P,
                h = {
                    props: l,
                    validateWidget: i(function(u) {
                        l.validateWidget(l, u)
                    }, "validateWidget")
                },
                a = d,
                Y = z,
                E = q,
                g = M();
            return s.createElement("div", l.rootNodeProperties, s.createElement(T, {
                getOwnerSpan: i(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    has_back_button: !0
                },
                events: {
                    _handleError: i(function(u) {
                        e.handleError(u)
                    }, "_handleError"),
                    onLeftActionEvent$Action: i(function() {
                        var u = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                        e.layoutOnboardingOnLeftActionEvent$Action(e.callContext(u))
                    }, "onLeftActionEvent$Action")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: n,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: a,
                placeholders: {
                    content: new I(function() {
                        return [s.createElement(m, {
                            align: 0,
                            animate: !1,
                            style: "relative",
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "1"
                            },
                            _widgetRecordProvider: a
                        }, s.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal; margin-bottom: 48px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "PageHeading"
                            },
                            _widgetRecordProvider: a
                        }, s.createElement(Z, {
                            extendedProperties: {
                                style: "font-weight: 900;"
                            },
                            text: [E(y("1N4dwT6eCkuvwkA2bgvBZg#Value", "What's your phone number?"))],
                            _idProps: {
                                service: n,
                                uuid: "3"
                            },
                            _widgetRecordProvider: a
                        })), s.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 48px;"
                            },
                            style: "flex flex-col gap-y-4",
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "FormContainer"
                            },
                            _widgetRecordProvider: a
                        }, s.createElement(m, {
                            align: 0,
                            animate: !1,
                            style: "flex flex-col gap-2",
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "FieldContainer"
                            },
                            _widgetRecordProvider: a
                        }, s.createElement(K, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: n,
                                name: "FieldLabel"
                            },
                            _widgetRecordProvider: a
                        }, E(y("5Me5oKJTYkCfecLO89fZQg#Value", "Phone number"))), s.createElement(j, {
                            _validationProps: {
                                validationService: r
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 6,
                            mandatory: !0,
                            maxLength: 0,
                            style: "form-control",
                            variable: d.createVariable($.DataTypes.PhoneNumber, d.variables.phone_numberVar, function(u) {
                                d.variables.phone_numberVar = u
                            }),
                            _idProps: {
                                service: n,
                                name: "PhoneNumber"
                            },
                            _widgetRecordProvider: a
                        }))), s.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "background: white; padding: 16px;"
                            },
                            style: "fixed bottom-0 left-0 w-full flex justify-center",
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "ActionButton"
                            },
                            _widgetRecordProvider: a
                        }, s.createElement(m, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "9"
                            },
                            _widgetRecordProvider: a
                        }, s.createElement(x, {
                            getOwnerSpan: i(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsLoading: d.variables.is_loadingVar,
                                ExtendedClass: "w-full"
                            },
                            events: {
                                _handleError: i(function(u) {
                                    e.handleError(u)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: n,
                                uuid: "10",
                                alias: "2"
                            },
                            _widgetRecordProvider: a,
                            placeholders: {
                                button: new I(function() {
                                    return [s.createElement(G, {
                                        enabled: d.variables.phone_numberVar !== "",
                                        extendedProperties: {
                                            style: "border: none; border-radius: 96px;"
                                        },
                                        isDefault: !1,
                                        onClick: i(function() {
                                            return Promise.resolve().then(function() {
                                                var u = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                                                return e.nextOnClick$Action(e.callContext(u))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary action-button",
                                        visible: !0,
                                        _idProps: {
                                            service: n,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: a
                                    }, s.createElement(m, {
                                        align: 0,
                                        animate: !1,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: !0,
                                        _idProps: {
                                            service: n,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: a
                                    }), E(y("w7i33_bEN0ijv+tm57drhA#Value", "Next")))]
                                })
                            },
                            _dependencies: [o(d.variables.phone_numberVar)]
                        }))))]
                    }),
                    footer: I.Empty
                },
                _dependencies: [o(d.variables.is_loadingVar), o(d.variables.phone_numberVar)]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: i(function() {
                return {
                    codeFunction: "PhoneNumberInput",
                    functionKey: "4a465126-cd31-4ce4-8c35-a0708d1b8abc",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.PhoneNumberInput",
            modelFactory: L,
            controllerFactory: H,
            getTitle: i(function() {
                return P("JlFGSjHN5EyMNaBwjRuKvA#Title", "PhoneNumberInput")
            }, "getTitle")
        });
        return v.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, v.getJsDependencies = function() {
            return []
        }, v.getBlocks = function() {
            return [T, x]
        }, v
    }, "componentFactory"),
    oe = re();
export {
    H as controllerModule, L as modelModule, oe as viewModule, R as webFlowControllerModule
};