import {
    a as F
} from "./_oschunk-J6UGFGPZ.js";
import {
    a as H
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as X,
    f as y,
    h as N,
    l as ee,
    o as U,
    p as k,
    u as te
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ie,
    g as R,
    m as z,
    n as Z,
    q as K,
    r as Q,
    s as Y,
    t as I
} from "./_oschunk-4VHUVDBV.js";
import {
    a as G
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Sb as x,
    pb as w,
    ub as P,
    w as D
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as E,
    c as s,
    e as ne,
    m as h,
    n as p,
    v as V
} from "./_oschunk-M5BUVJ72.js";
var oe = {
        "HB3C2l84W0K9tQewE29Ekg#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "75ur4UGtzUaUCJHWQA47Ow#ValueExpression.294371760.1": "+60123456789",
        "kAWxTsuVok+HoR_LEq3jPA#Value": "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u062C\u062F\u064A\u062F",
        "eGJFqnALz02V2uPdeKUYhA#ValueExpression.-280164863.1": "test@email.com",
        "_t15+6Uk_EqIwOD8uASSlw#Value": "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u062C\u062F\u064A\u062F",
        "mGlB_S4DlUCPyekhkT6dIw#ValueExpression.-690508229.1": "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
        "mGlB_S4DlUCPyekhkT6dIw#ValueExpression.1346256203.1": "\u0644\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0625\u0644\u0649 \u062D\u0633\u0627\u0628\u0643",
        "mGlB_S4DlUCPyekhkT6dIw#ValueExpression.774213200.1": "\u0628\u0645\u062C\u0631\u062F \u0627\u0644\u062A\u062D\u062F\u064A\u062B\u060C \u0633\u062A\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062C\u062F\u064A\u062F\u0629 ",
        "UlgQl21ad0ypHA6sgYBtgA#ValueExpression.-1891370416.1": "\u062A\u063A\u064A\u064A\u0631",
        "ZqLSuMZaiU+Zb5dxUIy6uw#Value.144014364.1": "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0635\u062D\u064A\u062D",
        "cmAJmrPrZ0OyEvj2FlT+Jw#Value.936634587.1": "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0635\u062D\u064A\u062D"
    },
    re = {
        "ar-001": {
            translations: oe,
            isRTL: !0
        }
    };

function $(m, v, l, r) {
    var t = m.email,
        a = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        c = a.test(t);
    m.isValid = c
}
s($, "default");

function L(m, v, l, r) {
    var t = m.phone_number,
        a = /^\+?[1-9]\d{1,14}$/,
        c = a.test(t);
    m.isValid = c
}
s(L, "default");
var e = E; {
    let v = class v extends e.Controller.BaseViewController {
        constructor(r, t, a) {
            super(r, t, a, re);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get postUpdateUser$ServerAction() {
            return this.hasOwnProperty("_postUpdateUser$ServerAction") || (this._postUpdateUser$ServerAction = function(r, t, a) {
                var c = this.controller;
                return e.Logger.startActiveSpan("PostUpdateUser", function(n) {
                    return n && (n.setAttribute("code.function", "PostUpdateUser"), n.setAttribute("outsystems.function.key", "3811ee3e-7e80-4f03-a5cd-c661c0d3f54d"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), e.Flow.tryFinally(function() {
                        var g = {
                            Request: e.DataConversion.ServerDataConverter.to(r, e.DataTypes.DataTypes.Record),
                            Authorization: e.DataConversion.ServerDataConverter.to(t, e.DataTypes.DataTypes.Text)
                        };
                        return c.callServerAction("PostUpdateUser", "screenservices/uae/UserProfileFlow/ChangePhoneEmail/ActionPostUpdateUser", "3ZR9QI0swbB8qMcDwX9dNA", g, c.callContext(a), void 0, void 0, !0).then(function(S) {
                            var i = new(c.constructor.getVariableGroupType("uae.UserProfileFlow.ChangePhoneEmail$ActionPostUpdateUser"));
                            return i.responseOut = e.DataConversion.ServerDataConverter.from(S.Response, w), i
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._postUpdateUser$ServerAction
        }
        set postUpdateUser$ServerAction(r) {
            this._postUpdateUser$ServerAction = r
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(r) {
            this._dataFetchActionNames = r
        }
        get _layoutOnboardingcloseEvent$Action() {
            return this.hasOwnProperty("__layoutOnboardingcloseEvent$Action") || (this.__layoutOnboardingcloseEvent$Action = function(r) {
                var t = this.model,
                    a = this.controller,
                    c = this.idService;
                return e.Logger.startActiveSpan("LayoutOnboardingcloseEvent", function(n) {
                    n && (n.setAttribute("code.function", "LayoutOnboardingcloseEvent"), n.setAttribute("outsystems.function.key", "0fea3c8e-765e-4824-a4d8-22f2ada1bb5c"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return a.ensureControllerAlive("LayoutOnboardingcloseEvent"), r = a.callContext(r), e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "user-profile", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__layoutOnboardingcloseEvent$Action
        }
        set _layoutOnboardingcloseEvent$Action(r) {
            this.__layoutOnboardingcloseEvent$Action = r
        }
        get _nextOnClick$Action() {
            return this.hasOwnProperty("__nextOnClick$Action") || (this.__nextOnClick$Action = function(r) {
                var t = this.model,
                    a = this.controller,
                    c = this.idService;
                return e.Logger.startActiveSpan("NextOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "NextOnClick"), n.setAttribute("outsystems.function.key", "c75853c3-8b77-44f3-ab14-b81dad6beee3"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        a.ensureControllerAlive("NextOnClick"), r = a.callContext(r);
                        var g = new e.DataTypes.VariableHolder,
                            S = new e.DataTypes.VariableHolder,
                            i = new e.DataTypes.VariableHolder,
                            A = new e.DataTypes.VariableHolder,
                            _ = new e.DataTypes.VariableHolder;
                        return e.Flow.executeAsyncFlow(function() {
                            return i.value = x.getAuth$Action(r), e.Flow.executeSequence(function() {
                                return t.variables.change_methodIn === "email" ? (A.value = e.Logger.startActiveSpan("JavaScript2", function(o) {
                                    o && (o.setAttribute("code.function", "JavaScript2"), o.setAttribute("outsystems.function.key", "0d589ef2-d5b4-4c8c-9569-584f8a83f0cb"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return a.safeExecuteJSNode($, "JavaScript2", "NextOnClick", {
                                            email: e.DataConversion.JSNodeParamConverter.to(t.variables.emailVar, e.DataTypes.DataTypes.Email),
                                            isValid: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean)
                                        }, function(f) {
                                            var b = new(a.constructor.getVariableGroupType("uae.UserProfileFlow.ChangePhoneEmail.NextOnClick$javaScript2JSResult"));
                                            return b.isValidOut = e.DataConversion.JSNodeParamConverter.from(f.isValid, e.DataTypes.DataTypes.Boolean), b
                                        }, {}, {})
                                    } finally {
                                        o && o.end()
                                    }
                                }, 1), e.Flow.executeSequence(function() {
                                    if (A.value.isValidOut) return P.setemail(t.variables.emailVar), t.variables.is_loadingVar = !0, t.variables.login_requestVar.emailAttr = P.getemail(), t.variables.login_requestVar.refresh_tokenAttr = i.value.refresh_tokenOut, t.variables.login_requestVar.access_tokenAttr = i.value.access_token_without_bearer_prefixOut, t.flush(), a.postUpdateUser$ServerAction(t.variables.login_requestVar, i.value.tokenOut, r).then(function(o) {
                                        S.value = o
                                    }).then(function() {
                                        return t.variables.is_loadingVar = !1, e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "profile-verification-otp", {
                                            is_change_email: e.DataConversion.ServerDataConverter.to(!0, e.DataTypes.DataTypes.Boolean),
                                            email: e.DataConversion.ServerDataConverter.to(t.variables.emailVar, e.DataTypes.DataTypes.Email)
                                        }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0))
                                    });
                                    t.widgets.get(c.getId("InputEmail")).validationMessageAttr = e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("cmAJmrPrZ0OyEvj2FlT+Jw#Value.936634587.1", "Please enter a valid email"), t.widgets.get(c.getId("InputEmail")).validAttr = !1
                                })) : (_.value = e.Logger.startActiveSpan("JavaScript1", function(o) {
                                    o && (o.setAttribute("code.function", "JavaScript1"), o.setAttribute("outsystems.function.key", "f9578cfb-7068-40d5-b56a-e113fc4d3683"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return a.safeExecuteJSNode(L, "JavaScript1", "NextOnClick", {
                                            phone_number: e.DataConversion.JSNodeParamConverter.to(t.variables.phoneVar, e.DataTypes.DataTypes.PhoneNumber),
                                            isValid: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean)
                                        }, function(f) {
                                            var b = new(a.constructor.getVariableGroupType("uae.UserProfileFlow.ChangePhoneEmail.NextOnClick$javaScript1JSResult"));
                                            return b.isValidOut = e.DataConversion.JSNodeParamConverter.from(f.isValid, e.DataTypes.DataTypes.Boolean), b
                                        }, {}, {})
                                    } finally {
                                        o && o.end()
                                    }
                                }, 1), e.Flow.executeSequence(function() {
                                    if (_.value.isValidOut) return P.setphone(t.variables.phoneVar), t.variables.is_loadingVar = !0, t.variables.login_requestVar.phoneAttr = P.getphone(), t.variables.login_requestVar.refresh_tokenAttr = i.value.refresh_tokenOut, t.variables.login_requestVar.access_tokenAttr = i.value.access_token_without_bearer_prefixOut, t.flush(), a.postUpdateUser$ServerAction(t.variables.login_requestVar, i.value.tokenOut, r).then(function(o) {
                                        g.value = o
                                    }).then(function() {
                                        return t.variables.is_loadingVar = !1, e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("uae", "profile-verification-otp", {
                                            isPhoneVerification: e.DataConversion.ServerDataConverter.to(!0, e.DataTypes.DataTypes.Boolean)
                                        }), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0))
                                    });
                                    t.widgets.get(c.getId("PhoneNumberInput")).validationMessageAttr = e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("ZqLSuMZaiU+Zb5dxUIy6uw#Value.144014364.1", "Please enter a valid phone number"), t.widgets.get(c.getId("PhoneNumberInput")).validAttr = !1
                                }))
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__nextOnClick$Action
        }
        set _nextOnClick$Action(r) {
            this.__nextOnClick$Action = r
        }
        layoutOnboardingcloseEvent$Action(r) {
            var t = this.controller;
            return e.Logger.startActiveSpan("LayoutOnboardingcloseEvent__proxy", function(a) {
                a && (a.setAttribute("code.function", "LayoutOnboardingcloseEvent"), a.setAttribute("outsystems.function.key", "0fea3c8e-765e-4824-a4d8-22f2ada1bb5c"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._layoutOnboardingcloseEvent$Action, r)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        nextOnClick$Action(r) {
            var t = this.controller;
            return e.Logger.startActiveSpan("NextOnClick__proxy", function(a) {
                return a && (a.setAttribute("code.function", "NextOnClick"), a.setAttribute("outsystems.function.key", "c75853c3-8b77-44f3-ab14-b81dad6beee3"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._nextOnClick$Action, r)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(r) {
            this._onInitializeEventHandler = r
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(r) {
            this._onReadyEventHandler = r
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(r) {
            this._onRenderEventHandler = r
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(r) {
            this._onDestroyEventHandler = r
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(r) {
            this._onParametersChangedEventHandler = r
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(r) {
            this._onSyncStartEventHandler = r
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(r) {
            this._onSyncCompleteEventHandler = r
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(r) {
            this._onSyncErrorEventHandler = r
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(r) {
                return F.default.handleError(r, this.callContext())
            }), this._handleError
        }
        set handleError(r) {
            this._handleError = r
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return x.defaultTimeout
        }
    };
    s(v, "ControllerInner");
    let m = v;
    C = m, C.registerVariableGroupType("uae.UserProfileFlow.ChangePhoneEmail$ActionPostUpdateUser", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: e.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new w
        }, "defaultValue"),
        complexType: w
    }]), C.registerVariableGroupType("uae.UserProfileFlow.ChangePhoneEmail.NextOnClick$javaScript2JSResult", [{
        name: "isValid",
        attrName: "isValidOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: s(function() {
            return !1
        }, "defaultValue")
    }]), C.registerVariableGroupType("uae.UserProfileFlow.ChangePhoneEmail.NextOnClick$javaScript1JSResult", [{
        name: "isValid",
        attrName: "isValidOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: s(function() {
            return !1
        }, "defaultValue")
    }])
}
var C, J = new e.Controller.ControllerFactory(C, G);
var u = ne(ie());
var d = E,
    B = class B extends d.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("email", "emailVar", "email", !0, !1, d.DataTypes.DataTypes.Email, function() {
                return ""
            }, !1), this.attr("phone", "phoneVar", "phone", !0, !1, d.DataTypes.DataTypes.PhoneNumber, function() {
                return ""
            }, !1), this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, d.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("login_request", "login_requestVar", "login_request", !0, !1, d.DataTypes.DataTypes.Record, function() {
                return d.DataTypes.ImmutableBase.getData(new D)
            }, !1, D), this.attr("change_method", "change_methodIn", "change_method", !0, !1, d.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_change_methodInDataFetchStatus", "_change_methodInDataFetchStatus", "_change_methodInDataFetchStatus", !0, !1, d.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(d.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(B, "VariablesRecord");
var O = B;
O.init();
var q = class q extends d.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form1: d.Model.ValidationWidgetRecord,
            InputEmail: d.Model.ValidationWidgetRecord,
            PhoneNumberInput: d.Model.ValidationWidgetRecord
        }
    }
};
s(q, "WidgetsRecord");
var W = q,
    j = class j extends d.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return O
        }
        static getWidgetsRecordConstructor() {
            return W
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(v) {
            "change_method" in v && (this.variables.change_methodIn = d.DataConversion.ServerDataConverter.from(v.change_method, d.DataTypes.DataTypes.Text))
        }
    };
s(j, "Model");
var T = j;
T._hasValidationWidgetsValue = void 0;
var M = new d.Model.ModelFactory(T);
var ae = R.PlaceholderContent,
    He = R.IteratorPlaceholderContent,
    le = s(function() {
        var m = Z(function(v) {
            var l = v.model,
                r = v.controller,
                t = v.controller.idService,
                a = r.validationService,
                c = r.callContext(),
                n = Y,
                g = I,
                S = {
                    props: v,
                    validateWidget: s(function(f) {
                        v.validateWidget(v, f)
                    }, "validateWidget")
                },
                i = l,
                A = Q,
                _ = K,
                o = z();
            return u.createElement("div", v.rootNodeProperties, u.createElement(H, {
                getOwnerSpan: s(function() {
                    return o.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return o.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    has_back_button: !1,
                    has_close_icon: !0
                },
                events: {
                    _handleError: s(function(f) {
                        r.handleError(f)
                    }, "_handleError"),
                    closeEvent$Action: s(function() {
                        var f = typeof c != "undefined" && c !== null ? c.clone() : r.callContext().clone();
                        r.layoutOnboardingcloseEvent$Action(r.callContext(f))
                    }, "closeEvent$Action")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    content: new ae(function() {
                        return [u.createElement(ee, {
                            _validationProps: {
                                validationService: a
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: '"form card"',
                            _idProps: {
                                service: t,
                                name: "Form1"
                            },
                            _widgetRecordProvider: i
                        }, u.createElement(y, {
                            align: 0,
                            animate: !1,
                            style: "flex flex-col gap-y-4",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "2"
                            },
                            _widgetRecordProvider: i
                        }, u.createElement(y, {
                            align: 0,
                            animate: !1,
                            style: "flex flex-col",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "3"
                            },
                            _widgetRecordProvider: i
                        }, u.createElement(N, {
                            extendedProperties: {
                                style: "font-size: 24px; font-weight: 900;"
                            },
                            value: l.getCachedValue(t.getId("1lduwK4ro0SYenJJIz8yKA.Value"), function() {
                                return h.resolve(p.TranslationsService).getMessage("UlgQl21ad0ypHA6sgYBtgA#ValueExpression.-1891370416.1", "Change ") + (l.variables.change_methodIn === "email" ? "email" : "phone number")
                            }, function() {
                                return l.variables.change_methodIn
                            }),
                            _idProps: {
                                service: t,
                                uuid: "4"
                            },
                            _widgetRecordProvider: i
                        }), u.createElement(N, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            value: l.getCachedValue(t.getId("7PSltIS510qLJrMVU26UrA.Value"), function() {
                                return h.resolve(p.TranslationsService).getMessage("mGlB_S4DlUCPyekhkT6dIw#ValueExpression.774213200.1", "Once updated, you'll use the new ") + (l.variables.change_methodIn === "email" ? "email" : h.resolve(p.TranslationsService).getMessage("mGlB_S4DlUCPyekhkT6dIw#ValueExpression.-690508229.1", "phone number")) + h.resolve(p.TranslationsService).getMessage("mGlB_S4DlUCPyekhkT6dIw#ValueExpression.1346256203.1", " to log in to your account")
                            }, function() {
                                return l.variables.change_methodIn
                            }),
                            _idProps: {
                                service: t,
                                uuid: "5"
                            },
                            _widgetRecordProvider: i
                        })), u.createElement(y, {
                            align: 0,
                            animate: !1,
                            style: "w-full",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "6"
                            },
                            _widgetRecordProvider: i
                        }, A(l.variables.change_methodIn === "email", !1, this, function() {
                            return [u.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col gap-y-2",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: i
                            }, u.createElement(k, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: i
                            }, _(g("_t15+6Uk_EqIwOD8uASSlw#Value", "New email"))), u.createElement(U, {
                                _validationProps: {
                                    validationService: a,
                                    validationParentId: t.getId("Form1")
                                },
                                enabled: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                inputType: 7,
                                mandatory: !0,
                                maxLength: 100,
                                prompt: h.resolve(p.TranslationsService).getMessage("eGJFqnALz02V2uPdeKUYhA#ValueExpression.-280164863.1", "test@email.com"),
                                style: "form-control",
                                variable: l.createVariable(V.DataTypes.Email, l.variables.emailVar, function(f) {
                                    l.variables.emailVar = f
                                }),
                                _idProps: {
                                    service: t,
                                    name: "InputEmail"
                                },
                                _widgetRecordProvider: i
                            }))]
                        }, function() {
                            return [u.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col gap-y-2",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: i
                            }, u.createElement(k, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: i
                            }, _(g("kAWxTsuVok+HoR_LEq3jPA#Value", "New phone number"))), u.createElement(U, {
                                _validationProps: {
                                    validationService: a,
                                    validationParentId: t.getId("Form1")
                                },
                                enabled: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                inputType: 6,
                                mandatory: !0,
                                maxLength: 100,
                                prompt: h.resolve(p.TranslationsService).getMessage("75ur4UGtzUaUCJHWQA47Ow#ValueExpression.294371760.1", "+60123456789"),
                                style: "form-control",
                                variable: l.createVariable(V.DataTypes.PhoneNumber, l.variables.phoneVar, function(f) {
                                    l.variables.phoneVar = f
                                }),
                                _idProps: {
                                    service: t,
                                    name: "PhoneNumberInput"
                                },
                                _widgetRecordProvider: i
                            }))]
                        }))), u.createElement(y, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "background: white; padding: 16px;"
                            },
                            style: "fixed bottom-0 left-0 w-full flex justify-center",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "ActionButton"
                            },
                            _widgetRecordProvider: i
                        }, u.createElement(X, {
                            enabled: l.variables.emailVar !== "" || l.variables.phoneVar !== "",
                            isDefault: !1,
                            onClick: s(function() {
                                return S.validateWidget(t.getId("Form1")), Promise.resolve().then(function() {
                                    var f = typeof c != "undefined" && c !== null ? c.clone() : r.callContext().clone();
                                    return r.nextOnClick$Action(r.callContext(f))
                                })
                            }, "onClick"),
                            style: "btn btn-primary action-button",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "NextButton"
                            },
                            _widgetRecordProvider: i
                        }, u.createElement(te, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [_(g("HB3C2l84W0K9tQewE29Ekg#Value", "Next"))],
                            _idProps: {
                                service: t,
                                uuid: "15"
                            },
                            _widgetRecordProvider: i
                        }))))]
                    }),
                    footer: ae.Empty
                },
                _dependencies: [n(l.variables.phoneVar), n(l.variables.emailVar), n(l.variables.change_methodIn)]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: s(function() {
                return {
                    codeFunction: "ChangePhoneEmail",
                    functionKey: "cc45688b-623b-4049-a2b4-793c0a242e6e",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "UserProfileFlow.ChangePhoneEmail",
            modelFactory: M,
            controllerFactory: J,
            getTitle: s(function() {
                return I("i2hFzDtiSUCitHk8CiQubg#Title", "ChangePhoneEmail")
            }, "getTitle")
        });
        return m.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, m.getJsDependencies = function() {
            return []
        }, m.getBlocks = function() {
            return [H]
        }, m
    }, "componentFactory"),
    ce = le();
export {
    J as controllerModule, M as modelModule, ce as viewModule, F as webFlowControllerModule
};