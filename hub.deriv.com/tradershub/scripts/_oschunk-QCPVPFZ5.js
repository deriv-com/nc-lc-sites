import {
    a as V
} from "./_oschunk-EAMY7WHP.js";
import {
    a as E
} from "./_oschunk-2JYQ3SSW.js";
import "./_oschunk-WKKWUEOJ.js";
import {
    a as b
} from "./_oschunk-5ZGJAYBW.js";
import {
    a as w
} from "./_oschunk-HQUSBNRM.js";
import "./_oschunk-VU54BC6V.js";
import "./_oschunk-LT6VIXXX.js";
import "./_oschunk-JGA2446S.js";
import "./_oschunk-VWJXDAKN.js";
import {
    b as x,
    h as o,
    p as y,
    r as P,
    s as S,
    u as C,
    y as O
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as T,
    g as m,
    i as v
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import "./_oschunk-VADNKVBQ.js";
import "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-KG7LSUIA.js";
import {
    ia as h
} from "./_oschunk-5EPHB76O.js";
import {
    c as a,
    g as W
} from "./_oschunk-DVBKI63I.js";
var t = W(T());
var d = h,
    A = v.PlaceholderContent,
    z = v.IteratorPlaceholderContent,
    l = class l extends m.BaseWebScreen {
        static get displayName() {
            return "ForgotAndResetPassword.ResetPassword"
        }
        static getAttributes() {
            return {
                codeFunction: "ResetPassword",
                functionKey: "8c12b147-48a6-4e00-b186-7fe617ec42b2",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.ForgotAndResetPassword.ResetPassword.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [w, b]
        }
        get modelFactory() {
            return E
        }
        get controllerFactory() {
            return V
        }
        get title() {
            return m.BaseWebScreen.getTranslation("R7ESjKZIAE6xhn_mF+xCsg#Title", "ResetPassword")
        }
        internalRender() {
            let i = this.model,
                n = this.controller,
                e = this.idService,
                c = n.validationService,
                r = this.widgetsRecordProvider,
                p = n.callContext(),
                F = l.ifWidget,
                _ = l.textWidget,
                u = l.asPrimitiveValue,
                f = l.getTranslation,
                g = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(w, {
                getOwnerSpan: a(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(s) {
                        n.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: c
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
                                style: "background: ; height: auto; text-align: left;"
                            },
                            style: "modal ",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "MainContainer"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(o, {
                            align: 0,
                            animate: !1,
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
                                style: "margin-right: 16px;"
                            },
                            gridProperties: {
                                marginLeft: "16px"
                            },
                            style: "display-flex flex-direction-column header-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "HeaderContainer"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: "bord",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(C, {
                            enabled: !0,
                            transition: d.Transitions.createTransition(d.Transitions.TransitionAnimation.Default),
                            url: d.Navigation.generateScreenURL("tradershub", "login", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(P, {
                            extendedProperties: {
                                style: "height: 14px; margin-right: 16px;"
                            },
                            image: d.Navigation.VersionedURL.getVersionedUrl("img/tradershub.backicon2.png"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: r
                        })), t.createElement(O, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: bold;"
                            },
                            text: [_(f("dyHdmnqwXUiccPCTPcJsdg#Value", "Reset Password"))],
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: r
                        }))), t.createElement(o, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "color: #F1F3F5; height: 2px; margin-bottom: 12px; margin-top: 12px;"
                            },
                            style: "border-bottom-s divider",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Divider"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(o, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-right: 16px;"
                            },
                            gridProperties: {
                                marginLeft: "16px"
                            },
                            style: "display-flex flex-direction-column gap-m",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "ContentContainer"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(y, {
                            _validationProps: {
                                validationService: c
                            },
                            extendedProperties: {
                                style: "border-width: 0px; margin-top: 8px; padding: 0px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: '"form card"',
                            _idProps: {
                                service: e,
                                name: "Form"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(o, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            style: i.getCachedValue(e.getId("05mDpShmJUGOd30rPGLsww.Style"), function() {
                                return i.widgets.get(e.getId("Input_password")).validAttr ? "" : "margin-bottom-l"
                            }, function() {
                                return i.widgets.get(e.getId("Input_password")).validAttr
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: "position-relative",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "12"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(S, {
                            _validationProps: {
                                validationService: c,
                                validationParentId: e.getId("Form")
                            },
                            enabled: !0,
                            extendedProperties: {
                                type: i.getCachedValue(e.getId("Input_password.type"), function() {
                                    return i.variables.showPasswordVar ? "text" : "password"
                                }, function() {
                                    return i.variables.showPasswordVar
                                }),
                                style: "margin-bottom: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 1,
                            mandatory: !0,
                            maxLength: 50,
                            prompt: d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("fq35Yi31zUOZwPG7wc7QRQ#ValueExpression.1758829696.1", "Enter your password"),
                            style: "form-control",
                            variable: i.createVariable(d.DataTypes.DataTypes.Text, i.variables.passwordVar, function(s) {
                                i.variables.passwordVar = s
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_password"
                            },
                            _widgetRecordProvider: r
                        }), t.createElement(P, {
                            extendedEvents: {
                                onClick: a(function() {
                                    var s = p.clone();
                                    n.onClickShowPassword$Action(n.callContext(s))
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
                        }))), t.createElement(b, {
                            getOwnerSpan: a(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Type: "CREATE",
                                Length: 8,
                                Password: i.variables.passwordVar
                            },
                            events: {
                                _handleError: a(function(s) {
                                    n.handleError(s)
                                }, "_handleError"),
                                compliant$Action: a(function(s) {
                                    var I = p.clone();
                                    n.passwordPolicyCompliant$Action(s, n.callContext(I))
                                }, "compliant$Action")
                            },
                            _validationProps: {
                                validationService: c,
                                validationParentId: e.getId("Form")
                            },
                            _idProps: {
                                service: e,
                                uuid: "15",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(o, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(x, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-radius: 100px;"
                            },
                            isDefault: !0,
                            onClick: a(function() {
                                return Promise.resolve().then(function() {
                                    var s = p.clone();
                                    return n.resetMyPasswordOnClick$Action(n.callContext(s))
                                })
                            }, "onClick"),
                            style: "btn btn-primary full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: r
                        }, _(f("kOrypI4zEkCt9ac3Ju1B1Q#Value", "Reset my password"))))))))]
                    })
                },
                _dependencies: [u(i.variables.showPasswordVar), u(i.variables.passwordVar), u(i.widgets.get(e.getId("Input_password")).validAttr)]
            }))
        }
    };
a(l, "View");
var R = l,
    G = R;
export {
    G as
    default
};