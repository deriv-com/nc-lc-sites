import {
    a as F
} from "./_oschunk-NCOVYEGH.js";
import "./_oschunk-FIJGADJY.js";
import {
    a as W
} from "./_oschunk-OVJQ7JKG.js";
import {
    a as E
} from "./_oschunk-SUJQFUF5.js";
import "./_oschunk-LJVZHBJJ.js";
import "./_oschunk-SZLIT7QD.js";
import "./_oschunk-DNFEHUWC.js";
import "./_oschunk-BHZNFATE.js";
import {
    b,
    h as i,
    p as S,
    r as x,
    s as w,
    u as y,
    y as l
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as T,
    g as f,
    i as _
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import {
    a as u
} from "./_oschunk-XMOR6XCC.js";
import "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-44PT7RP7.js";
import {
    ia as C
} from "./_oschunk-NTQBNJ73.js";
import {
    c,
    g as V
} from "./_oschunk-DVBKI63I.js";
var t = V(T());
var n = C,
    k = _.PlaceholderContent,
    z = _.IteratorPlaceholderContent,
    m = class m extends f.BaseWebScreen {
        static get displayName() {
            return "ForgotAndResetPassword.ForgotPassword"
        }
        static getAttributes() {
            return {
                codeFunction: "ForgotPassword",
                functionKey: "f935cd27-63c5-471a-8cd3-928424115a1d",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.ForgotAndResetPassword.ForgotPassword.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [E]
        }
        get modelFactory() {
            return W
        }
        get controllerFactory() {
            return F
        }
        get title() {
            return f.BaseWebScreen.getTranslation("J801+cVjGkeM05KEJBFaHQ#Title", "ForgotPassword")
        }
        internalRender() {
            let g = this.model,
                s = this.controller,
                e = this.idService,
                p = s.validationService,
                r = this.widgetsRecordProvider,
                v = s.callContext(),
                O = m.ifWidget,
                o = m.textWidget,
                R = m.asPrimitiveValue,
                d = m.getTranslation,
                P = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(E, {
                getOwnerSpan: c(function() {
                    return P.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return P.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: g.getCachedValue(e.getId("R1o8uxgmpk+pfxcbcqtTPA.ExtendedClass"), function() {
                        return u.getResetPasswordEmailSent() ? "background-secondary-lightest" : "background-neutral"
                    }, function() {
                        return u.getResetPasswordEmailSent()
                    })
                },
                events: {
                    _handleError: c(function(a) {
                        s.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: p
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    mainContent: new k(function() {
                        return [t.createElement(i, {
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
                        }, O(u.getResetPasswordLinkExpired(), !1, this, function() {
                            return [t.createElement(i, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: r
                            }, t.createElement(i, {
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
                                    name: "HeaderContainer2"
                                },
                                _widgetRecordProvider: r
                            }, t.createElement(i, {
                                align: 0,
                                animate: !1,
                                style: "bord display-flex align-items-center justify-content-space-between",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: r
                            }, t.createElement(l, {
                                extendedProperties: {
                                    style: "font-size: 18px; font-weight: bold;"
                                },
                                text: [o(d("Pxzixhjcl0S05rq_pbc7ZA#Value", "Link expired"))],
                                _idProps: {
                                    service: e,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(y, {
                                enabled: !0,
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                onClick: c(function() {
                                    var a = v.clone();
                                    s.clickOnClose$Action(s.callContext(a))
                                }, "onClick"),
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: r
                            }, t.createElement(x, {
                                image: n.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: r
                            })))), t.createElement(i, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "color: #F1F3F5; height: 2px; margin-bottom: 24px; margin-top: 12px;"
                                },
                                style: "border-bottom-s divider",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "Divider2"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(i, {
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
                                    name: "ContentContainer2"
                                },
                                _widgetRecordProvider: r
                            }, t.createElement(i, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: r
                            }, t.createElement(l, {
                                extendedProperties: {
                                    style: "color: #4F575E;"
                                },
                                text: [o(d("T4vKH2zfpEmuS3eFMNHQng#Value", "Make sure you're using the link in our latest email. Or enter your email below to receive a new link."))],
                                _idProps: {
                                    service: e,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: r
                            })), t.createElement(S, {
                                _validationProps: {
                                    validationService: p
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                style: '"form card"',
                                _idProps: {
                                    service: e,
                                    name: "Form2"
                                },
                                _widgetRecordProvider: r
                            }, t.createElement(i, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: r
                            }, t.createElement(l, {
                                extendedProperties: {
                                    style: "margin-top: px;"
                                },
                                text: [o(d("XM4pjsgDxESM9R3bguC1Ag#Value", "Email"))],
                                _idProps: {
                                    service: e,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: r
                            }), t.createElement(w, {
                                _validationProps: {
                                    validationService: p,
                                    validationParentId: e.getId("Form2")
                                },
                                enabled: !0,
                                extendedProperties: {
                                    style: "margin-bottom: 0px; margin-top: 8px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                inputType: 7,
                                mandatory: !1,
                                maxLength: 50,
                                prompt: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("8hADf5elLkudl1qmCaGIqA#ValueExpression.-374653993.1", "Enter your email"),
                                style: "form-control",
                                variable: g.createVariable(n.DataTypes.DataTypes.Email, g.variables.emailVar, function(a) {
                                    g.variables.emailVar = a
                                }),
                                _idProps: {
                                    service: e,
                                    name: "Email_Input2"
                                },
                                _widgetRecordProvider: r
                            })), t.createElement(i, {
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
                            }, t.createElement(b, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                isDefault: !1,
                                onClick: c(function() {
                                    return P.validateWidget(e.getId("Form2")), Promise.resolve().then(function() {
                                        var a = v.clone();
                                        return s.sendEmailOnClick$Action(s.callContext(a))
                                    })
                                }, "onClick"),
                                style: "btn btn-primary ",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: r
                            }, t.createElement(l, {
                                extendedProperties: {
                                    style: "font-size: 14px;"
                                },
                                text: [o(d("Gk_WKj61ak+6jvGljsSOJg#Value", "Resend email"))],
                                _idProps: {
                                    service: e,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: r
                            }))))))]
                        }, function() {
                            return [O(u.getResetPasswordEmailSent(), !1, this, function() {
                                return [t.createElement(i, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "margin-right: 16px; text-align: left;"
                                    },
                                    gridProperties: {
                                        marginLeft: "16px"
                                    },
                                    style: "display-flex justify-content-center flex-direction-column align-items-center gap-m",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "19"
                                    },
                                    _widgetRecordProvider: r
                                }, t.createElement(l, {
                                    extendedProperties: {
                                        style: "font-size: 24px; font-weight: bold;"
                                    },
                                    text: [o(d("up3wQNU3ZEqij9XsmzAtCQ#Value", "We\u2019ve sent you an email"))],
                                    _idProps: {
                                        service: e,
                                        uuid: "20"
                                    },
                                    _widgetRecordProvider: r
                                }), t.createElement(x, {
                                    gridProperties: {
                                        classes: "ThemeGrid_MarginGutter",
                                        width: "128px"
                                    },
                                    image: n.Navigation.VersionedURL.getVersionedUrl("img/tradershub.email.png"),
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "21"
                                    },
                                    _widgetRecordProvider: r
                                }), t.createElement(i, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "margin-bottom: 1px; text-align: center;"
                                    },
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "22"
                                    },
                                    _widgetRecordProvider: r
                                }, t.createElement(l, {
                                    extendedProperties: {
                                        style: "font-size: 16px;"
                                    },
                                    text: [o(d("hEgP0XzXt0GFIZ+GN6xHLw#Value", "Click the link in the email to reset your password."))],
                                    _idProps: {
                                        service: e,
                                        uuid: "23"
                                    },
                                    _widgetRecordProvider: r
                                })), t.createElement(i, {
                                    align: 0,
                                    animate: !1,
                                    extendedEvents: {
                                        onClick: c(function() {
                                            var a = v.clone();
                                            s.reset$Action(s.callContext(a))
                                        }, "onClick")
                                    },
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "24"
                                    },
                                    _widgetRecordProvider: r
                                }, t.createElement(l, {
                                    extendedProperties: {
                                        style: "font-weight: bold; text-decoration: underline;"
                                    },
                                    text: [o(d("5pu5z3ZK+EiWjaMEqLXNGg#Value", "Didn\u2019t receive the email?"))],
                                    _idProps: {
                                        service: e,
                                        uuid: "25"
                                    },
                                    _widgetRecordProvider: r
                                })))]
                            }, function() {
                                return [t.createElement(i, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "26"
                                    },
                                    _widgetRecordProvider: r
                                }, t.createElement(i, {
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
                                }, t.createElement(i, {
                                    align: 0,
                                    animate: !1,
                                    style: "bord",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "28"
                                    },
                                    _widgetRecordProvider: r
                                }, t.createElement(y, {
                                    enabled: !0,
                                    transition: n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default),
                                    url: n.Navigation.generateScreenURL("tradershub", "login", {}),
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "29"
                                    },
                                    _widgetRecordProvider: r
                                }, t.createElement(x, {
                                    extendedProperties: {
                                        style: "height: 14px; margin-right: 16px;"
                                    },
                                    image: n.Navigation.VersionedURL.getVersionedUrl("img/tradershub.backicon2.png"),
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "30"
                                    },
                                    _widgetRecordProvider: r
                                })), t.createElement(l, {
                                    extendedProperties: {
                                        style: "font-size: 18px; font-weight: bold;"
                                    },
                                    text: [o(d("0IkcMMYNI0GR1RUiDfqppQ#Value", "Forgot password"))],
                                    _idProps: {
                                        service: e,
                                        uuid: "31"
                                    },
                                    _widgetRecordProvider: r
                                }))), t.createElement(i, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "color: #F1F3F5; height: 2px; margin-bottom: 24px; margin-top: 12px;"
                                    },
                                    style: "border-bottom-s divider",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "Divider"
                                    },
                                    _widgetRecordProvider: r
                                }), t.createElement(i, {
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
                                }, t.createElement(i, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "34"
                                    },
                                    _widgetRecordProvider: r
                                }, o(d("Iajy_eY9VE2jhnVtWwOoJA#Value", "We\u2019ll email you instructions to reset your password."))), t.createElement(S, {
                                    _validationProps: {
                                        validationService: p
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
                                }, t.createElement(i, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "36"
                                    },
                                    _widgetRecordProvider: r
                                }, t.createElement(l, {
                                    extendedProperties: {
                                        style: "margin-top: px;"
                                    },
                                    text: [o(d("tnc4I59H8EWTUtsAmaUo3g#Value", "Email"))],
                                    _idProps: {
                                        service: e,
                                        uuid: "37"
                                    },
                                    _widgetRecordProvider: r
                                }), t.createElement(w, {
                                    _validationProps: {
                                        validationService: p,
                                        validationParentId: e.getId("Form")
                                    },
                                    enabled: !0,
                                    extendedProperties: {
                                        style: "margin-bottom: 0px; margin-top: 8px;"
                                    },
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    inputType: 7,
                                    mandatory: !1,
                                    maxLength: 50,
                                    prompt: n.Injector.resolve(n.ServiceNames.TranslationsService).getMessage("tfgAz1CTZEqDT0xqPoAasw#ValueExpression.-374653993.1", "Enter your email"),
                                    style: "form-control",
                                    variable: g.createVariable(n.DataTypes.DataTypes.Email, g.variables.emailVar, function(a) {
                                        g.variables.emailVar = a
                                    }),
                                    _idProps: {
                                        service: e,
                                        name: "Email_Input"
                                    },
                                    _widgetRecordProvider: r
                                })), t.createElement(i, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "margin-top: 24px;"
                                    },
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "39"
                                    },
                                    _widgetRecordProvider: r
                                }, t.createElement(b, {
                                    enabled: !0,
                                    extendedProperties: {
                                        style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                                    },
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    isDefault: !1,
                                    onClick: c(function() {
                                        return P.validateWidget(e.getId("Form")), Promise.resolve().then(function() {
                                            var a = v.clone();
                                            return s.sendEmailOnClick$Action(s.callContext(a))
                                        })
                                    }, "onClick"),
                                    style: "btn btn-primary ",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "40"
                                    },
                                    _widgetRecordProvider: r
                                }, t.createElement(l, {
                                    extendedProperties: {
                                        style: "font-size: 14px;"
                                    },
                                    text: [o(d("09iHoosI3EOO1J1ZuaNREQ#Value", "Send email"))],
                                    _idProps: {
                                        service: e,
                                        uuid: "41"
                                    },
                                    _widgetRecordProvider: r
                                }))))))]
                            })]
                        }))]
                    })
                },
                _dependencies: [R(u.getResetPasswordEmailSent()), R(g.variables.emailVar), R(u.getResetPasswordLinkExpired())]
            }))
        }
    };
c(m, "View");
var h = m,
    G = h;
export {
    G as
    default
};