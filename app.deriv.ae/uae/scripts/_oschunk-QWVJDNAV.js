import {
    a as L
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as V
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as D
} from "./_oschunk-TLJXDQWQ.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as j,
    f as b,
    o as Z,
    p as ee,
    u as P
} from "./_oschunk-VR5BNL2K.js";
import {
    a as re,
    g as T,
    m as J,
    n as K,
    q as X,
    r as Y,
    s as x,
    t as R
} from "./_oschunk-4VHUVDBV.js";
import {
    a as z
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Sb as C,
    pb as A,
    ub as p,
    w
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as h,
    c as o,
    e as ne,
    m as q,
    n as B,
    v as Q,
    w as G
} from "./_oschunk-M5BUVJ72.js";
var ie = {
        "0g9kTZua3k2E_+jCEGcQ5Q#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "7025FBg4a0qqLWMyo5wsDA#Value": "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
        "Y2A4qpMuJ06Jhdbny4KxuA#Value": "\u0645\u0627 \u0647\u0648 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u061F",
        "Tha8obRn6kurKQtYd6XQIQ#Title": "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A | Deriv",
        "Tha8obRn6kurKQtYd6XQIQ#TitleExpression.-1882365034.1": "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A | Deriv"
    },
    te = {
        "ar-001": {
            translations: ie,
            isRTL: !0
        }
    };

function N(y, u, d) {
    sessionStorage.setItem("previousUrl", window.location.href)
}
o(N, "default");
var t = h; {
    let u = class u extends t.Controller.BaseViewController {
        constructor(e, r, n) {
            super(e, r, n, te);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get postUpdateUser$ServerAction() {
            return this.hasOwnProperty("_postUpdateUser$ServerAction") || (this._postUpdateUser$ServerAction = function(e, r, n) {
                var a = this.controller;
                return t.Logger.startActiveSpan("PostUpdateUser", function(i) {
                    return i && (i.setAttribute("code.function", "PostUpdateUser"), i.setAttribute("outsystems.function.key", "3811ee3e-7e80-4f03-a5cd-c661c0d3f54d"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), t.Flow.tryFinally(function() {
                        var v = {
                            Request: t.DataConversion.ServerDataConverter.to(e, t.DataTypes.DataTypes.Record),
                            Authorization: t.DataConversion.ServerDataConverter.to(r, t.DataTypes.DataTypes.Text)
                        };
                        return a.callServerAction("PostUpdateUser", "screenservices/uae/OnboardingFlow/Email/ActionPostUpdateUser", "3ZR9QI0swbB8qMcDwX9dNA", v, a.callContext(n), void 0, void 0, !0).then(function(_) {
                            var s = new(a.constructor.getVariableGroupType("uae.OnboardingFlow.Email$ActionPostUpdateUser"));
                            return s.responseOut = t.DataConversion.ServerDataConverter.from(_.Response, A), s
                        })
                    }, function() {
                        i && i.end()
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
            return this.hasOwnProperty("__nextOnClick$Action") || (this.__nextOnClick$Action = function(e, r) {
                var n = this.model,
                    a = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("NextOnClick", function(v) {
                    return v && (v.setAttribute("code.function", "NextOnClick"), v.setAttribute("outsystems.function.key", "63d87aae-2c9e-48fb-aa94-7e0a5c7c27ed"), v.setAttribute("outsystems.function.owner.name", "uae"), v.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), v.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        a.ensureControllerAlive("NextOnClick"), r = a.callContext(r);
                        var _ = new t.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("uae.OnboardingFlow.Email.NextOnClick$vars")));
                        _.value.email3InLocal = e;
                        var s = new t.DataTypes.VariableHolder(new t.DataTypes.ErrorHandlerOutputType),
                            W = new t.DataTypes.VariableHolder,
                            g = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return g.value = C.getAuth$Action(r), p.setemail(_.value.email3InLocal), n.variables.is_loadingVar = !0, n.variables.login_requestVar.emailAttr = p.getemail(), n.variables.login_requestVar.refresh_tokenAttr = g.value.refresh_tokenOut, n.variables.login_requestVar.access_tokenAttr = g.value.access_token_without_bearer_prefixOut, n.flush(), a.postUpdateUser$ServerAction(n.variables.login_requestVar, g.value.tokenOut, r).then(function(l) {
                                W.value = l
                            }).then(function() {
                                return n.variables.is_loadingVar = !1, t.Logger.startActiveSpan("StoreNavigationUrl", function(l) {
                                    l && (l.setAttribute("code.function", "StoreNavigationUrl"), l.setAttribute("outsystems.function.key", "12659423-0a76-4a93-b07c-c15e8bc407bb"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return a.safeExecuteJSNode(N, "StoreNavigationUrl", "NextOnClick", null, function(c) {}, {}, {})
                                    } finally {
                                        l && l.end()
                                    }
                                }, 1), t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "otp", {
                                    is_email_verification: t.DataConversion.ServerDataConverter.to(!0, t.DataTypes.DataTypes.Boolean)
                                }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.None), r, !0))
                            })
                        }).catch(function(l) {
                            if (t.Logger.debug("Email.NextOnClick", t.Exceptions.getMessage(l)), !t.Exceptions.isSystem(l)) return t.Logger.error(null, l, null, null, 1), s.value.exceptionMessageAttr = t.Exceptions.getMessage(l), t.Logger.startActiveSpan("AllExceptions", function(c) {
                                return c && (c.setAttribute("code.function", "AllExceptions"), c.setAttribute("outsystems.function.key", "8db04289-e48b-4a11-8eea-e9a6954fcf06"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), t.Flow.tryFinally(function() {
                                    return t.Flow.executeAsyncFlow(function() {
                                        return n.variables.is_loadingVar = !1, t.FeedbackMessageService.showFeedbackMessage(s.value.exceptionMessageAttr, 3), t.Flow.returnAsync()
                                    })
                                }, function() {
                                    c && c.end()
                                })
                            }, 1);
                            throw l
                        })
                    }, function() {
                        v && v.end()
                    })
                }, 1)
            }), this.__nextOnClick$Action
        }
        set _nextOnClick$Action(e) {
            this.__nextOnClick$Action = e
        }
        get _layoutOnboardingOnLeftActionEvent$Action() {
            return this.hasOwnProperty("__layoutOnboardingOnLeftActionEvent$Action") || (this.__layoutOnboardingOnLeftActionEvent$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("LayoutOnboardingOnLeftActionEvent", function(i) {
                    i && (i.setAttribute("code.function", "LayoutOnboardingOnLeftActionEvent"), i.setAttribute("outsystems.function.key", "d8565ead-874d-4228-8705-21f8e445b719"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("LayoutOnboardingOnLeftActionEvent"), e = n.callContext(e), t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "phone-and-email", {
                            verification_type: t.DataConversion.ServerDataConverter.to("email", t.DataTypes.DataTypes.Text)
                        }), t.Transitions.createTransition(t.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__layoutOnboardingOnLeftActionEvent$Action
        }
        set _layoutOnboardingOnLeftActionEvent$Action(e) {
            this.__layoutOnboardingOnLeftActionEvent$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    n = this.controller,
                    a = this.idService;
                return t.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "fa4a5e5f-c1a2-4c2f-8bb1-58e832219e19"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnReady"), e = n.callContext(e), p.setemail("")
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        nextOnClick$Action(e, r) {
            var n = this.controller;
            return t.Logger.startActiveSpan("NextOnClick__proxy", function(a) {
                return a && (a.setAttribute("code.function", "NextOnClick"), a.setAttribute("outsystems.function.key", "63d87aae-2c9e-48fb-aa94-7e0a5c7c27ed"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._nextOnClick$Action, r, e)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        layoutOnboardingOnLeftActionEvent$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("LayoutOnboardingOnLeftActionEvent__proxy", function(n) {
                n && (n.setAttribute("code.function", "LayoutOnboardingOnLeftActionEvent"), n.setAttribute("outsystems.function.key", "d8565ead-874d-4228-8705-21f8e445b719"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._layoutOnboardingOnLeftActionEvent$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnReady__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "fa4a5e5f-c1a2-4c2f-8bb1-58e832219e19"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    n && n.end()
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
                var r = this.controller,
                    n = this.model,
                    a = this.idService;
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
                return L.default.handleError(e, this.callContext())
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
    o(u, "ControllerInner");
    let y = u;
    E = y, E.registerVariableGroupType("uae.OnboardingFlow.Email$ActionPostUpdateUser", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: t.DataTypes.DataTypes.Record,
        defaultValue: o(function() {
            return new A
        }, "defaultValue"),
        complexType: A
    }]), E.registerVariableGroupType("uae.OnboardingFlow.Email.NextOnClick$vars", [{
        name: "email3",
        attrName: "email3InLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var E, H = new t.Controller.ControllerFactory(E, z);
var f = ne(re());
var m = h,
    $ = class $ extends m.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("email", "emailVar", "email", !0, !1, m.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("login_request", "login_requestVar", "login_request", !0, !1, m.DataTypes.DataTypes.Record, function() {
                return m.DataTypes.ImmutableBase.getData(new w)
            }, !1, w)].concat(m.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o($, "VariablesRecord");
var S = $;
S.init();
var I = class I extends m.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Email2: m.Model.ValidationWidgetRecord
        }
    }
};
o(I, "WidgetsRecord");
var k = I,
    U = class U extends m.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return S
        }
        static getWidgetsRecordConstructor() {
            return k
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(u) {}
    };
o(U, "Model");
var O = U;
O._hasValidationWidgetsValue = void 0;
var F = new m.Model.ModelFactory(O);
var M = T.PlaceholderContent,
    Le = T.IteratorPlaceholderContent,
    oe = o(function() {
        var y = K(function(u) {
            var d = u.model,
                e = u.controller,
                r = u.controller.idService,
                n = e.validationService,
                a = e.callContext(),
                i = x,
                v = R,
                _ = {
                    props: u,
                    validateWidget: o(function(c) {
                        u.validateWidget(u, c)
                    }, "validateWidget")
                },
                s = d,
                W = Y,
                g = X,
                l = J();
            return f.createElement("div", u.rootNodeProperties, f.createElement(V, {
                getOwnerSpan: o(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    has_back_button: !0
                },
                events: {
                    _handleError: o(function(c) {
                        e.handleError(c)
                    }, "_handleError"),
                    onLeftActionEvent$Action: o(function() {
                        var c = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                        e.layoutOnboardingOnLeftActionEvent$Action(e.callContext(c))
                    }, "onLeftActionEvent$Action")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: r,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: s,
                placeholders: {
                    content: new M(function() {
                        return [f.createElement(b, {
                            align: 0,
                            animate: !1,
                            style: "relative",
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "1"
                            },
                            _widgetRecordProvider: s
                        }, f.createElement(b, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal; margin-bottom: 48px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "PageHeading"
                            },
                            _widgetRecordProvider: s
                        }, f.createElement(P, {
                            extendedProperties: {
                                style: "font-weight: 900;"
                            },
                            text: [g(v("Y2A4qpMuJ06Jhdbny4KxuA#Value", "What's your email?"))],
                            _idProps: {
                                service: r,
                                uuid: "3"
                            },
                            _widgetRecordProvider: s
                        })), f.createElement(b, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 48px;"
                            },
                            style: "flex flex-col gap-y-4",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "FormContainer"
                            },
                            _widgetRecordProvider: s
                        }, f.createElement(b, {
                            align: 0,
                            animate: !1,
                            style: "flex flex-col gap-2",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "FieldContainer"
                            },
                            _widgetRecordProvider: s
                        }, f.createElement(ee, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: r,
                                name: "FieldLabel"
                            },
                            _widgetRecordProvider: s
                        }, g(v("7025FBg4a0qqLWMyo5wsDA#Value", "Email"))), f.createElement(Z, {
                            _validationProps: {
                                validationService: n
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !0,
                            maxLength: 0,
                            style: "form-control",
                            variable: d.createVariable(Q.DataTypes.Text, d.variables.emailVar, function(c) {
                                d.variables.emailVar = c
                            }),
                            _idProps: {
                                service: r,
                                name: "Email2"
                            },
                            _widgetRecordProvider: s
                        }))), f.createElement(b, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "background: white; padding: 16px;"
                            },
                            style: "fixed bottom-0 left-0 w-full flex justify-center",
                            visible: !0,
                            _idProps: {
                                service: r,
                                name: "ActionButton"
                            },
                            _widgetRecordProvider: s
                        }, f.createElement(b, {
                            align: 0,
                            animate: !1,
                            style: "w-full",
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "9"
                            },
                            _widgetRecordProvider: s
                        }, f.createElement(D, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsLoading: d.variables.is_loadingVar
                            },
                            events: {
                                _handleError: o(function(c) {
                                    e.handleError(c)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: r,
                                uuid: "10",
                                alias: "2"
                            },
                            _widgetRecordProvider: s,
                            placeholders: {
                                button: new M(function() {
                                    return [f.createElement(j, {
                                        enabled: d.getCachedValue(r.getId("48aCo3Jov0GlWilfvlR7dA.Enabled"), function() {
                                            return d.variables.emailVar !== G.nullTextIdentifier() && d.variables.is_loadingVar === !1
                                        }, function() {
                                            return d.variables.emailVar
                                        }, function() {
                                            return d.variables.is_loadingVar
                                        }),
                                        extendedProperties: {
                                            style: "border: none; border-radius: 96px;"
                                        },
                                        isDefault: !1,
                                        onClick: o(function() {
                                            return Promise.resolve().then(function() {
                                                var c = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                                                return e.nextOnClick$Action(d.variables.emailVar, e.callContext(c))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary action-button",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: s
                                    }, f.createElement(b, {
                                        align: 0,
                                        animate: !1,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: s
                                    }), f.createElement(P, {
                                        extendedProperties: {
                                            style: "font-size: 16px; font-weight: bold;"
                                        },
                                        text: [g(v("0g9kTZua3k2E_+jCEGcQ5Q#Value", "Next"))],
                                        _idProps: {
                                            service: r,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: s
                                    }))]
                                })
                            },
                            _dependencies: [i(d.variables.is_loadingVar), i(d.variables.emailVar)]
                        }))))]
                    }),
                    footer: M.Empty
                },
                _dependencies: [i(d.variables.is_loadingVar), i(d.variables.emailVar)]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: o(function() {
                return {
                    codeFunction: "Email",
                    functionKey: "a1bc164e-67b4-4bea-ab29-0b5877a5d021",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.Email",
            modelFactory: F,
            controllerFactory: H,
            getTitle: o(function(u) {
                var d = u.model,
                    e = u.controller,
                    r = u.controller.idService,
                    n = e.validationService,
                    a = e.callContext(),
                    i = x,
                    v = R,
                    _ = {
                        props: u,
                        validateWidget: o(function(s) {
                            u.validateWidget(u, s)
                        }, "validateWidget")
                    };
                return q.resolve(B.TranslationsService).getMessage("Tha8obRn6kurKQtYd6XQIQ#TitleExpression.-1882365034.1", "Email | Deriv")
            }, "getTitle")
        });
        return y.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, y.getJsDependencies = function() {
            return []
        }, y.getBlocks = function() {
            return [V, D]
        }, y
    }, "componentFactory"),
    se = oe();
export {
    H as controllerModule, F as modelModule, se as viewModule, L as webFlowControllerModule
};