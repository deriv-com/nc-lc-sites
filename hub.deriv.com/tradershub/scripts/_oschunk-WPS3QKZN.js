import {
    a as h
} from "./_oschunk-NBPMWPDS.js";
import {
    a as I
} from "./_oschunk-EZ7O4ORZ.js";
import {
    a as V
} from "./_oschunk-IYMZCYTL.js";
import "./_oschunk-EFUSIMB4.js";
import {
    a as P
} from "./_oschunk-XFSPMJPV.js";
import "./_oschunk-MZYHHGAU.js";
import {
    a as x
} from "./_oschunk-5RFODUCB.js";
import "./_oschunk-DMYYSU2E.js";
import "./_oschunk-OW5V4P4X.js";
import "./_oschunk-DNFEHUWC.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as E,
    h as o,
    p as C,
    r as W,
    s as w,
    t as f,
    u as b,
    y as m
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as F,
    g as O,
    i as S
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import "./_oschunk-27GDEXUT.js";
import "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as R
} from "./_oschunk-NTQBNJ73.js";
import {
    c as n,
    g as T
} from "./_oschunk-DVBKI63I.js";
var t = T(F());
var d = R,
    A = S.PlaceholderContent,
    Q = S.IteratorPlaceholderContent,
    u = class u extends O.BaseWebScreen {
        static get displayName() {
            return "MainFlow.LoginScreen"
        }
        static getAttributes() {
            return {
                codeFunction: "LoginScreen",
                functionKey: "d6079e1b-8d08-4eb5-98a7-3f0e576b5c05",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.MainFlow.LoginScreen.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [x, P, h]
        }
        get modelFactory() {
            return I
        }
        get controllerFactory() {
            return V
        }
        get title() {
            let i = this.model,
                s = this.controller,
                e = this.idService,
                g = s.validationService,
                r = s.callContext(),
                _ = u.asPrimitiveValue,
                L = u.getTranslation,
                l = this;
            return d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("G54H1giNtU6Ypz8OV2tcBQ#TitleExpression.73596745.1", "Login")
        }
        internalRender() {
            let i = this.model,
                s = this.controller,
                e = this.idService,
                g = s.validationService,
                r = this.widgetsRecordProvider,
                _ = s.callContext(),
                L = u.ifWidget,
                l = u.textWidget,
                v = u.asPrimitiveValue,
                p = u.getTranslation,
                c = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(x, {
                getOwnerSpan: n(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(a) {
                        s.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: g
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    mainContent: new A(function() {
                        return [t.createElement(o, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: left;"
                            },
                            style: "display-flex justify-content-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: "login-content-container full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(o, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "color: #414652; font-size: 14px; margin-bottom: 24px; margin-right: 16px; margin-top: 16px; text-align: left;"
                            },
                            gridProperties: {
                                marginLeft: "16px"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(o, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: 700; margin-bottom: 24px;"
                            },
                            text: [l(p("Cy8Rl6UZF0yj09NopdCIpA#Value", `Welcome back
`))],
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        }))), t.createElement(C, {
                            _validationProps: {
                                validationService: g
                            },
                            extendedProperties: {
                                style: "border-width: 0px; padding: 0px 16px 0px 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "form card",
                            _idProps: {
                                service: e,
                                name: "LoginForm"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: i.getCachedValue(e.getId("jG8BgVJONkKZLh8llmcyiA.Style"), function() {
                                return i.widgets.get(e.getId("Input_Email")).validAttr ? "" : "margin-bottom-l"
                            }, function() {
                                return i.widgets.get(e.getId("Input_Email")).validAttr
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(f, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !0,
                            targetWidget: "Input_Email",
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: r
                        }, l(p("pC81f5qO0U2B5caMMpZ00Q#Value", "Email"))), t.createElement(w, {
                            _validationProps: {
                                validationService: g,
                                validationParentId: e.getId("LoginForm")
                            },
                            enabled: !0,
                            extendedProperties: {
                                style: "margin-bottom: 6px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 7,
                            mandatory: !0,
                            maxLength: 0,
                            prompt: d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("hgpdLHxjiUSlkc5NLW4ZKg#ValueExpression.-374653993.1", "Enter your email"),
                            style: "form-control",
                            variable: i.createVariable(d.DataTypes.DataTypes.Email, i.variables.emailVar, function(a) {
                                i.variables.emailVar = a
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_Email"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(o, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 10px;"
                            },
                            style: i.getCachedValue(e.getId("5wu2tfuqV0KLDrEwLqvGzg.Style"), function() {
                                return i.widgets.get(e.getId("Input_password")).validAttr ? "" : "margin-bottom-l"
                            }, function() {
                                return i.widgets.get(e.getId("Input_password")).validAttr
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "10"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(f, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !0,
                            targetWidget: "Input_password",
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: r
                        }, l(p("V7tX5SVSL0ueY8hezbDI2A#Value", "Password"))), t.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: "position-relative",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "12"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(w, {
                            _validationProps: {
                                validationService: g,
                                validationParentId: e.getId("LoginForm")
                            },
                            enabled: !0,
                            extendedProperties: {
                                type: i.getCachedValue(e.getId("Input_password.type"), function() {
                                    return i.variables.showPasswordVar ? "text" : "password"
                                }, function() {
                                    return i.variables.showPasswordVar
                                }),
                                style: "margin-bottom: 10px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 1,
                            mandatory: !0,
                            maxLength: 50,
                            prompt: "Enter your password",
                            style: "form-control",
                            variable: i.createVariable(d.DataTypes.DataTypes.Text, i.variables.passwordVar, function(a) {
                                i.variables.passwordVar = a
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_password"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(W, {
                            extendedEvents: {
                                onClick: n(function() {
                                    var a = _.clone();
                                    s.onClickShowPassword$Action(s.callContext(a))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "cursor: pointer; right: 16px; top: 40%;"
                            },
                            image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.eyeslashsm.svg"),
                            style: "position-absolute absolute-center-right ",
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: r
                        }))), t.createElement(o, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 24px; text-align: right;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "15"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(b, {
                            enabled: !0,
                            transition: d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default),
                            url: d.Navigation.generateScreenURL("tradershub", "ForgotPassword", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            extendedProperties: {
                                style: "color: #222; font-weight: bold; text-decoration: underline;"
                            },
                            text: [l(p("q4RWlIJ8qUyKMCK+0o+IEA#Value", "Forgot password?"))],
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: r
                        }))), t.createElement(o, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "18"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(E, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-radius: 100px;"
                            },
                            isDefault: !0,
                            onClick: n(function() {
                                c.validateWidget(e.getId("LoginForm"));
                                var a = _.clone();
                                s.onClickLogin$Action(s.callContext(a))
                            }, "onClick"),
                            style: "btn btn-primary full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: r
                        }, l(p("i4ybhJdLMUWcznpWDEmjcQ#Value", "Log in"))))), t.createElement(o, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "20"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: "flex-1",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "21"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(P, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: e,
                                uuid: "22",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        })), t.createElement(m, {
                            extendedProperties: {
                                style: "margin-left: 16px; margin-right: 16px;"
                            },
                            text: [l(p("bUtExnuixk2gqiAekR1nog#Value", "Or continue with"))],
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: "flex-1",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "24"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(P, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: e,
                                uuid: "25",
                                alias: "3"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }))), t.createElement(o, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "26"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(h, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                showPasskey: !0
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: e,
                                uuid: "27",
                                alias: "4"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        })), t.createElement(o, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 16px; padding: 16px;"
                            },
                            style: "display-flex justify-content-center column-gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: r
                        }, l(p("dqgwmfMZeUO6XqFQXxzSaA#Value", "Don't have an account yet?")), t.createElement(b, {
                            enabled: !0,
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            transition: d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default),
                            url: d.Navigation.generateScreenURL("tradershub", "signup", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(m, {
                            extendedProperties: {
                                style: "color: #222; font-weight: bold; text-decoration: underline;"
                            },
                            text: [l(p("hdQFn5_3IECkwU+bSdVyug#Value", "Create a new account"))],
                            _idProps: {
                                service: e,
                                uuid: "30"
                            },
                            _widgetRecordProvider: r
                        })))))]
                    })
                },
                _dependencies: [v(i.variables.showPasswordVar), v(i.variables.passwordVar), v(i.widgets.get(e.getId("Input_password")).validAttr), v(i.variables.emailVar), v(i.widgets.get(e.getId("Input_Email")).validAttr)]
            }))
        }
    };
n(u, "View");
var y = u,
    Z = y;
export {
    Z as
    default
};