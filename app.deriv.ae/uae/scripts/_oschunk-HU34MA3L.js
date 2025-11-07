import {
    a as D
} from "./_oschunk-73TFAYXQ.js";
import {
    a as x
} from "./_oschunk-TLJXDQWQ.js";
import {
    a as H
} from "./_oschunk-GKANWGN5.js";
import "./_oschunk-YVFTECWM.js";
import {
    a as K,
    b as Q,
    f as v,
    l as J,
    n as X,
    o as Y,
    p as Z,
    q as ee
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ne,
    g as b,
    m as q,
    n as z,
    q as G,
    r as j,
    s as A,
    t as V
} from "./_oschunk-4VHUVDBV.js";
import {
    a as B
} from "./_oschunk-KXORGPRQ.js";
import {
    a as T
} from "./_oschunk-ZM75JAVW.js";
import {
    Sb as $
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as _,
    c as i,
    e as re,
    h as P,
    m as R,
    n as C,
    p as O,
    v as U
} from "./_oschunk-M5BUVJ72.js";
var ae = {
        "jE2i+SQhBUiXpgaKzt6rDg#Value.1537763987.1": "\u0627\u0646\u062A\u0642\u0644 \u0625\u0644\u0649 \u0635\u0641\u062D\u0629 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
        "3cAzE2Oh9ECwxvvUAuXtsg#Value": "\u0627\u0646\u062A\u0642\u0644 \u0625\u0644\u0649 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644.",
        "SSZdvN4LY0mknFVm_QDoDA#Value": "\u0644\u0633\u062A \u0641\u064A \u0627\u0644\u0645\u0643\u0627\u0646 \u0627\u0644\u0635\u062D\u064A\u062D\u061F",
        "g2hmwzo5HUW5So+cLVujgw#Value": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
        "9KAkoQwQdUqTW+OsCHiWkA#Value": "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
        "70mE3canp0eMGAjJbbLBUg#Value": "\u0644\u0627 \u062A\u0642\u0644\u0642\u060C \u0633\u0646\u0631\u0633\u0644 \u0644\u0643 \u0631\u0633\u0627\u0644\u0629 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0645\u0639 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u0627\u062A.",
        "YkmG5_QATkSEW2787SKgvg#Value": "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F",
        "qoNiCjEVUkS1_L0CWzdF+w#Message.553463793.1": "\u062D\u062F\u062B \u062E\u0637\u0623. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649 \u0644\u0627\u062D\u0642\u0627\u064B.",
        "ppvqP2sM50+rLmUCKpg5wA#Title": "\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
        "ppvqP2sM50+rLmUCKpg5wA#TitleExpression.1539801591.1": "\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"
    },
    te = {
        "ar-001": {
            translations: ae,
            isRTL: !0
        }
    };
var r = _; {
    let l = class l extends r.Controller.BaseViewController {
        constructor(e, t, a) {
            super(e, t, a, te);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get sendResetPasswordEmail$ServerAction() {
            return this.hasOwnProperty("_sendResetPasswordEmail$ServerAction") || (this._sendResetPasswordEmail$ServerAction = function(e, t, a) {
                var c = this.controller;
                return r.Logger.startActiveSpan("SendResetPasswordEmail", function(o) {
                    return o && (o.setAttribute("code.function", "SendResetPasswordEmail"), o.setAttribute("outsystems.function.key", "82e5273e-87b6-4b68-8444-51cff0af2c32"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), r.Flow.tryFinally(function() {
                        var d = {
                            ApplicationName: r.DataConversion.ServerDataConverter.to(e, r.DataTypes.DataTypes.Text),
                            CustomerEmail: r.DataConversion.ServerDataConverter.to(t, r.DataTypes.DataTypes.Email)
                        };
                        return c.callServerAction("SendResetPasswordEmail", "screenservices/uae/Common/RecoverPasswordRequest/ActionSendResetPasswordEmail", "ZQ3JIWE5Y0g+GWpXfIJc8A", d, c.callContext(a), void 0, void 0, !0).then(function(p) {
                            var n = new(c.constructor.getVariableGroupType("uae.Common.RecoverPasswordRequest$ActionSendResetPasswordEmail"));
                            return n.successOut = r.DataConversion.ServerDataConverter.from(p.Success, r.DataTypes.DataTypes.Boolean), n
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 0)
            }), this._sendResetPasswordEmail$ServerAction
        }
        set sendResetPasswordEmail$ServerAction(e) {
            this._sendResetPasswordEmail$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _resetPasswordOnClick$Action() {
            return this.hasOwnProperty("__resetPasswordOnClick$Action") || (this.__resetPasswordOnClick$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    c = this.idService;
                return r.Logger.startActiveSpan("ResetPasswordOnClick", function(o) {
                    return o && (o.setAttribute("code.function", "ResetPasswordOnClick"), o.setAttribute("outsystems.function.key", "3aad2e06-92b3-4cc7-8b61-e9d6e85af93b"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        a.ensureControllerAlive("ResetPasswordOnClick"), e = a.callContext(e);
                        var d = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return r.Flow.executeSequence(function() {
                                if (t.widgets.get(c.getId("RecoverPasswordForm")).validAttr) return t.variables.isExecutingVar = !0, t.flush(), a.sendResetPasswordEmail$ServerAction(r.BuiltinFunctions.getAppName(), t.variables.emailVar, e).then(function(p) {
                                    d.value = p
                                }).then(function() {
                                    if (d.value.successOut) return t.variables.isExecutingVar = !1, r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "RecoverPasswordReset", {
                                        Email: r.DataConversion.ServerDataConverter.to(t.variables.emailVar, r.DataTypes.DataTypes.Email)
                                    }), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0));
                                    r.FeedbackMessageService.showFeedbackMessage(r.Injector.resolve(r.ServiceNames.TranslationsService).getMessage("qoNiCjEVUkS1_L0CWzdF+w#Message.553463793.1", "An error has occured. Please try again later."), 3), t.variables.isExecutingVar = !1
                                })
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__resetPasswordOnClick$Action
        }
        set _resetPasswordOnClick$Action(e) {
            this.__resetPasswordOnClick$Action = e
        }
        resetPasswordOnClick$Action(e) {
            var t = this.controller;
            return r.Logger.startActiveSpan("ResetPasswordOnClick__proxy", function(a) {
                return a && (a.setAttribute("code.function", "ResetPasswordOnClick"), a.setAttribute("outsystems.function.key", "3aad2e06-92b3-4cc7-8b61-e9d6e85af93b"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._resetPasswordOnClick$Action, e)
                }, function() {
                    a && a.end()
                })
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
                return T.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return $.defaultTimeout
        }
    };
    i(l, "ControllerInner");
    let f = l;
    F = f, F.registerVariableGroupType("uae.Common.RecoverPasswordRequest$ActionSendResetPasswordEmail", [{
        name: "Success",
        attrName: "successOut",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Boolean,
        defaultValue: i(function() {
            return !1
        }, "defaultValue")
    }])
}
var F, W = new r.Controller.ControllerFactory(F, B);
var s = re(ne());
var g = _,
    L = class L extends g.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsExecuting", "isExecutingVar", "IsExecuting", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Email", "emailVar", "Email", !0, !1, g.DataTypes.DataTypes.Email, function() {
                return ""
            }, !1)].concat(g.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(L, "VariablesRecord");
var h = L;
h.init();
var N = class N extends g.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            RecoverPasswordForm: g.Model.ValidationWidgetRecord,
            Input_Email: g.Model.ValidationWidgetRecord
        }
    }
};
i(N, "WidgetsRecord");
var I = N,
    M = class M extends g.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return I
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(l) {}
    };
i(M, "Model");
var w = M;
w._hasValidationWidgetsValue = void 0;
var k = new g.Model.ModelFactory(w);
var y = b.PlaceholderContent,
    De = b.IteratorPlaceholderContent,
    ie = i(function() {
        var f = z(function(l) {
            var m = l.model,
                e = l.controller,
                t = l.controller.idService,
                a = e.validationService,
                c = e.callContext(),
                o = A,
                d = V,
                p = {
                    props: l,
                    validateWidget: i(function(u) {
                        l.validateWidget(l, u)
                    }, "validateWidget")
                },
                n = m,
                se = j,
                S = G,
                E = q();
            return s.createElement("div", l.rootNodeProperties, s.createElement(H, {
                getOwnerSpan: i(function() {
                    return E.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return E.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: i(function(u) {
                        e.handleError(u)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    content: new y(function() {
                        return [s.createElement(v, {
                            align: 0,
                            animate: !1,
                            style: "login-screen",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "1"
                            },
                            _widgetRecordProvider: n
                        }, s.createElement(J, {
                            _validationProps: {
                                validationService: a
                            },
                            style: "login-form",
                            _idProps: {
                                service: t,
                                name: "RecoverPasswordForm"
                            },
                            _widgetRecordProvider: n
                        }, s.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            style: "login-logo",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "3"
                            },
                            _widgetRecordProvider: n
                        }, s.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "4"
                            },
                            _widgetRecordProvider: n
                        }, s.createElement(X, {
                            extendedProperties: {
                                alt: "",
                                style: "height: 100px;"
                            },
                            image: O.VersionedURL.getVersionedUrl("img/uae.Logo.png"),
                            type: 0,
                            _idProps: {
                                service: t,
                                uuid: "5"
                            },
                            _widgetRecordProvider: n
                        })), s.createElement(K, {
                            extendedProperties: {
                                className: "margin-top-base text-neutral-8"
                            },
                            tag: "h5",
                            _idProps: {
                                service: t,
                                uuid: "6"
                            },
                            _widgetRecordProvider: n
                        }, S(d("YkmG5_QATkSEW2787SKgvg#Value", "Forgot your password?"))), s.createElement(v, {
                            align: 0,
                            animate: !1,
                            style: "margin-top-s",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "7"
                            },
                            _widgetRecordProvider: n
                        }, s.createElement(v, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "8"
                            },
                            _widgetRecordProvider: n
                        }, S(d("70mE3canp0eMGAjJbbLBUg#Value", "Don't worry, we'll send you an email with instructions."))))), s.createElement(v, {
                            align: 0,
                            animate: !1,
                            style: "login-inputs margin-top-m",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "9"
                            },
                            _widgetRecordProvider: n
                        }, s.createElement(D, {
                            getOwnerSpan: i(function() {
                                return E.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return E.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: i(function(u) {
                                    e.handleError(u)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a,
                                validationParentId: t.getId("RecoverPasswordForm")
                            },
                            _idProps: {
                                service: t,
                                uuid: "10",
                                alias: "2"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                label: new y(function() {
                                    return [s.createElement(Z, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mandatory: !0,
                                        targetWidget: "Input_Email",
                                        _idProps: {
                                            service: t,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: n
                                    }, S(d("9KAkoQwQdUqTW+OsCHiWkA#Value", "Email")))]
                                }),
                                input: new y(function() {
                                    return [s.createElement(Y, {
                                        _validationProps: {
                                            validationService: a,
                                            validationParentId: t.getId("RecoverPasswordForm")
                                        },
                                        enabled: !0,
                                        extendedProperties: {
                                            tabIndex: "1"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        inputType: 7,
                                        mandatory: !0,
                                        maxLength: 250,
                                        style: "form-control",
                                        variable: m.createVariable(U.DataTypes.Email, m.variables.emailVar, function(u) {
                                            m.variables.emailVar = u
                                        }),
                                        _idProps: {
                                            service: t,
                                            name: "Input_Email"
                                        },
                                        _widgetRecordProvider: n
                                    })]
                                })
                            },
                            _dependencies: [o(m.variables.emailVar)]
                        })), s.createElement(v, {
                            align: 0,
                            animate: !1,
                            style: "login-button margin-top-l",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "13"
                            },
                            _widgetRecordProvider: n
                        }, s.createElement(x, {
                            getOwnerSpan: i(function() {
                                return E.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return E.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "full-width",
                                IsLoading: m.variables.isExecutingVar
                            },
                            events: {
                                _handleError: i(function(u) {
                                    e.handleError(u)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a,
                                validationParentId: t.getId("RecoverPasswordForm")
                            },
                            _idProps: {
                                service: t,
                                uuid: "14",
                                alias: "3"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                button: new y(function() {
                                    return [s.createElement(Q, {
                                        enabled: !0,
                                        extendedProperties: {
                                            tabIndex: "2"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        isDefault: !0,
                                        onClick: i(function() {
                                            return p.validateWidget(t.getId("RecoverPasswordForm")), Promise.resolve().then(function() {
                                                var u = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                                                return e.resetPasswordOnClick$Action(e.callContext(u))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: n
                                    }, s.createElement(v, {
                                        align: 0,
                                        animate: !1,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: n
                                    }), S(d("g2hmwzo5HUW5So+cLVujgw#Value", "Reset password")))]
                                })
                            },
                            _dependencies: []
                        })), s.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            style: "margin-top-m",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "17"
                            },
                            _widgetRecordProvider: n
                        }, S(d("SSZdvN4LY0mknFVm_QDoDA#Value", "Not in the right place?")), s.createElement(ee, {
                            enabled: !0,
                            extendedProperties: {
                                tabIndex: "3",
                                "aria-label": R.resolve(C.TranslationsService).getMessage("jE2i+SQhBUiXpgaKzt6rDg#Value.1537763987.1", "Go to login page")
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            transition: P.createTransition(P.TransitionAnimation.Default),
                            url: O.generateScreenURL("uae", "signup", {}),
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "18"
                            },
                            _widgetRecordProvider: n
                        }, S(d("3cAzE2Oh9ECwxvvUAuXtsg#Value", "Go to login."))))))]
                    })
                },
                _dependencies: [o(m.variables.isExecutingVar), o(m.variables.emailVar)]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: i(function() {
                return {
                    codeFunction: "RecoverPasswordRequest",
                    functionKey: "3fea9ba6-0c6b-4fe7-ab2e-65022a9839c0",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.RecoverPasswordRequest",
            modelFactory: k,
            controllerFactory: W,
            getTitle: i(function(l) {
                var m = l.model,
                    e = l.controller,
                    t = l.controller.idService,
                    a = e.validationService,
                    c = e.callContext(),
                    o = A,
                    d = V,
                    p = {
                        props: l,
                        validateWidget: i(function(n) {
                            l.validateWidget(l, n)
                        }, "validateWidget")
                    };
                return R.resolve(C.TranslationsService).getMessage("ppvqP2sM50+rLmUCKpg5wA#TitleExpression.1539801591.1", "Recover password")
            }, "getTitle")
        });
        return f.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, f.getJsDependencies = function() {
            return []
        }, f.getBlocks = function() {
            return [H, D, x]
        }, f
    }, "componentFactory"),
    oe = ie();
export {
    W as controllerModule, k as modelModule, oe as viewModule, T as webFlowControllerModule
};