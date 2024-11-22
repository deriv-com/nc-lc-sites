import {
    a as I
} from "./_oschunk-ZDFI7XLO.js";
import {
    a as L
} from "./_oschunk-5JKVXBH2.js";
import "./_oschunk-AGISAFBQ.js";
import {
    a as w
} from "./_oschunk-NBPMWPDS.js";
import {
    a as S
} from "./_oschunk-XFSPMJPV.js";
import "./_oschunk-MZYHHGAU.js";
import {
    a as h
} from "./_oschunk-5RFODUCB.js";
import "./_oschunk-DMYYSU2E.js";
import "./_oschunk-OW5V4P4X.js";
import "./_oschunk-DNFEHUWC.js";
import {
    a as R
} from "./_oschunk-DOI3HIHZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as W,
    h as r,
    j as T,
    p as V,
    r as x,
    s as k,
    t as U,
    u as _,
    y as l
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as z,
    g as C,
    i as y
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as P
} from "./_oschunk-27GDEXUT.js";
import {
    a as O
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as E
} from "./_oschunk-NTQBNJ73.js";
import {
    c as n,
    g as A
} from "./_oschunk-DVBKI63I.js";
var t = A(z());
var c = E,
    F = y.PlaceholderContent,
    q = y.IteratorPlaceholderContent,
    u = class u extends C.BaseWebScreen {
        static get displayName() {
            return "Signup.EUSignup"
        }
        static getAttributes() {
            return {
                codeFunction: "EUSignup",
                functionKey: "a8054016-31cd-4e13-b9f9-016532625872",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.Signup.EUSignup.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [h, R, S, w]
        }
        get modelFactory() {
            return L
        }
        get controllerFactory() {
            return I
        }
        get title() {
            let m = this.model,
                o = this.controller,
                e = this.idService,
                p = o.validationService,
                i = o.callContext(),
                v = u.asPrimitiveValue,
                D = u.getTranslation,
                a = this;
            return c.Injector.resolve(c.ServiceNames.TranslationsService).getMessage("FkAFqM0xE065+QFlMmJYcg#TitleExpression.2133226043.1", "Easy And Free Sign Up | Online Trading | Hub.Deriv.com")
        }
        internalRender() {
            let m = this.model,
                o = this.controller,
                e = this.idService,
                p = o.validationService,
                i = this.widgetsRecordProvider,
                v = o.callContext(),
                D = u.ifWidget,
                a = u.textWidget,
                f = u.asPrimitiveValue,
                d = u.getTranslation,
                g = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(h, {
                getOwnerSpan: n(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HasLink: !0,
                    ClientCountry: P.getClientCountry()
                },
                events: {
                    _handleError: n(function(s) {
                        o.handleError(s)
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
                _widgetRecordProvider: i,
                placeholders: {
                    mainContent: new F(function() {
                        return [t.createElement(r, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "color: #414652; font-size: 14px; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; padding: 16px; text-align: left;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            style: "main-container full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "MainContainer"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(r, {
                            align: 0,
                            animate: !0,
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "486px"
                            },
                            style: "content-container",
                            visible: m.getCachedValue(e.getId("ContentContainer.Visible"), function() {
                                return O.isDesktop$Action(v).isDesktopOut
                            }),
                            _idProps: {
                                service: e,
                                name: "ContentContainer"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(r, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column gap-base ",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "ContentWrapper"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(r, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(l, {
                            extendedProperties: {
                                style: "font-family: 'Ubuntu'; font-size: 32px; font-weight: bold; margin-bottom: 0px;"
                            },
                            text: [a(d("F64XxsEC80ypnRKs+2DXOQ#Value", "Trusted for 25 years"))],
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(r, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(r, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-right: 0px; padding: 0px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "IconListContainer2"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(x, {
                            extendedProperties: {
                                style: "height: 16px; margin-right: 8px;"
                            },
                            gridProperties: {
                                width: "16px"
                            },
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.checkmark.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(l, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [a(d("jArPalEju0eZL+HgJ5ymVA#Value", "Unique trade types"))],
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(r, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-right: 0px; padding: 0px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "IconListContainer3"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(x, {
                            extendedProperties: {
                                style: "height: 16px; margin-right: 8px;"
                            },
                            gridProperties: {
                                width: "16px"
                            },
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.checkmark.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(l, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [a(d("r7rG1gEr7kSsy7JKpLm4Fw#Value", "Hundreds of instruments"))],
                            _idProps: {
                                service: e,
                                uuid: "12"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(r, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-right: 0px; padding: 0px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "IconListContainer"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(x, {
                            extendedProperties: {
                                style: "height: 16px; margin-right: 8px;"
                            },
                            gridProperties: {
                                width: "16px"
                            },
                            image: c.Navigation.VersionedURL.getVersionedUrl("img/tradershub.checkmark.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(l, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [a(d("GFsgudxbk0q6DwAHVnmXHQ#Value", "Financial and derived markets"))],
                            _idProps: {
                                service: e,
                                uuid: "15"
                            },
                            _widgetRecordProvider: i
                        }))), t.createElement(r, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(l, {
                            extendedProperties: {
                                style: "font-size: 20px;"
                            },
                            text: [a(d("JDNCstSMOEmuqZa708daBw#Value", `Trade anywhere, anytime. 
`))],
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(r, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "font-size: 20px; font-weight: bold;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "18"
                            },
                            _widgetRecordProvider: i
                        }, a(d("eJ_8ZW44tECsuVJyhA8MBA#Value", "Get your free demo account today. "))))), t.createElement(r, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: left;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "486px"
                            },
                            style: "sign-up-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "SignUpContainer"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(l, {
                            extendedProperties: {
                                style: "font-weight: 700; margin-bottom: 0px;"
                            },
                            style: "sign-up-header",
                            text: [a(d("ELYPhzuj3k+9yt5SFTagNw#Value", `Join over 2.5 million traders
`))],
                            _idProps: {
                                service: e,
                                uuid: "20"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(V, {
                            _validationProps: {
                                validationService: p
                            },
                            extendedProperties: {
                                style: "margin-top: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: '"form card"',
                            _idProps: {
                                service: e,
                                name: "Form"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(r, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "22"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(U, {
                            extendedProperties: {
                                style: "margin-bottom: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !0,
                            targetWidget: "Input_Email",
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: i
                        }, a(d("WRRMOhzgcUGfKMbStruX_A#Value", "Email"))), t.createElement(k, {
                            _validationProps: {
                                validationService: p,
                                validationParentId: e.getId("Form")
                            },
                            enabled: !0,
                            extendedEvents: {
                                onBlur: n(function() {
                                    var s = v.clone();
                                    o.validate$Action(o.callContext(s))
                                }, "onBlur")
                            },
                            extendedProperties: {
                                style: "height: 40px; padding: 0px 16px 0px 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !0,
                            maxLength: 0,
                            prompt: c.Injector.resolve(c.ServiceNames.TranslationsService).getMessage("yF8cEKbcxUaOlH9ylne2QQ#ValueExpression.-374653993.1", "Enter your email"),
                            style: "form-control",
                            variable: m.createVariable(c.DataTypes.DataTypes.Text, P.getSignupEmail(), function(s) {
                                P.setSignupEmail(s)
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_Email"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(r, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 16px;"
                            },
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "25"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(l, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            style: "text-neutral-9",
                            text: [a(d("rXtNkvhkaEaHS7yFhnwtFg#Value", "By creating an account, you confirm you are 18+ and understand we may send you updates and marketing materials (see "))],
                            _idProps: {
                                service: e,
                                uuid: "26"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(_, {
                            enabled: !0,
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            onClick: n(function() {
                                g.validateWidget(e.getId("Form"));
                                var s = v.clone();
                                o.linkOnClick$Action(o.callContext(s))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "27"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(T, {
                            extendedProperties: {
                                style: "font-size: 12px; font-weight: bold; text-decoration: underline;"
                            },
                            style: "text-neutral-9",
                            value: "Security and privacy policy",
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(l, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            style: "text-neutral-9",
                            text: [a(d("2fJvOwaWWUmrhLCTXpGdjQ#Value", `). Unsubscribe in your account settings anytime.
By signing up, you agree to our `))],
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(_, {
                            enabled: !0,
                            extendedProperties: {
                                target: "_blank",
                                style: "font-size: 12px;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            style: "text-neutral-9",
                            transition: c.Transitions.createTransition(c.Transitions.TransitionAnimation.Default),
                            url: c.Navigation.generateScreenURL("https://deriv.com/terms-and-conditions/#clients", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "30"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(l, {
                            extendedProperties: {
                                style: "color: #272B30; font-weight: bold; text-decoration: underline;"
                            },
                            style: "text-neutral-9",
                            text: [a(d("fETa_D8xhkG3TyJDcHNr+w#Value", "Terms and conditions"))],
                            _idProps: {
                                service: e,
                                name: "ClientTncLink"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(l, {
                            style: "text-neutral-9",
                            text: [a(d("Wlh71Z9bc0KUSa4kmDKh_g#Value", "."))],
                            _idProps: {
                                service: e,
                                uuid: "32"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(r, {
                            align: 0,
                            animate: !1,
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "33"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(R, {
                            getOwnerSpan: n(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsLoading: m.variables.isSubmittingVar,
                                ShowLabelOnLoading: !0
                            },
                            events: {
                                _handleError: n(function(s) {
                                    o.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p,
                                validationParentId: e.getId("Form")
                            },
                            _idProps: {
                                service: e,
                                uuid: "34",
                                alias: "2"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                button: new F(function() {
                                    return [t.createElement(W, {
                                        enabled: !m.variables.isSubmittingVar,
                                        extendedProperties: {
                                            style: "border-radius: 100px; height: 40px; margin-top: 24px;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        isDefault: !0,
                                        onClick: n(function() {
                                            return g.validateWidget(e.getId("Form")), Promise.resolve().then(function() {
                                                var s = v.clone();
                                                return o.submitOnClick$Action(o.callContext(s))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-primary full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "35"
                                        },
                                        _widgetRecordProvider: i
                                    }, t.createElement(r, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "font-size: 14px;"
                                        },
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "36"
                                        },
                                        _widgetRecordProvider: i
                                    }), t.createElement(l, {
                                        extendedProperties: {
                                            style: "font-size: 14px;"
                                        },
                                        text: [a(d("3naFX9uKU0aE8_79mMTKag#Value", "Create account"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "37"
                                        },
                                        _widgetRecordProvider: i
                                    }))]
                                })
                            },
                            _dependencies: [f(m.variables.isSubmittingVar)]
                        }))), t.createElement(r, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-right: 0px; margin-top: 24px; padding: 0px;"
                            },
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "38"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(r, {
                            align: 0,
                            animate: !1,
                            style: "flex-1",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "39"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(S, {
                            getOwnerSpan: n(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(s) {
                                    o.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "40",
                                alias: "3"
                            },
                            _widgetRecordProvider: i,
                            _dependencies: []
                        })), t.createElement(l, {
                            extendedProperties: {
                                style: "font-size: 12px; margin-left: 16px; margin-right: 16px;"
                            },
                            text: [a(d("O56+jipAfE+aU6be+VlLfQ#Value", "Or sign up with"))],
                            _idProps: {
                                service: e,
                                uuid: "41"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(r, {
                            align: 0,
                            animate: !1,
                            style: "flex-1",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "42"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(S, {
                            getOwnerSpan: n(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(s) {
                                    o.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "43",
                                alias: "4"
                            },
                            _widgetRecordProvider: i,
                            _dependencies: []
                        }))), t.createElement(r, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 24px; margin-top: 24px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "44"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(w, {
                            getOwnerSpan: n(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                showPasskey: !1
                            },
                            events: {
                                _handleError: n(function(s) {
                                    o.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: e,
                                uuid: "45",
                                alias: "5"
                            },
                            _widgetRecordProvider: i,
                            _dependencies: []
                        })), t.createElement(r, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "46"
                            },
                            _widgetRecordProvider: i
                        }, a(d("flfhQzisOk+ZymHc1m3y_w#Value", "Already have an account? ")), t.createElement(_, {
                            enabled: !0,
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            transition: c.Transitions.createTransition(c.Transitions.TransitionAnimation.Default),
                            url: c.Navigation.generateScreenURL("https://oauth.deriv.com/oauth2/authorize?app_id=16929&l=en&brand=deriv&platform=", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "LoginLink"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(l, {
                            extendedProperties: {
                                style: "color: #101213; font-weight: bold; text-decoration: underline;"
                            },
                            text: [a(d("d34maTX7wE28Z5PYuw9DRA#Value", "Log in"))],
                            _idProps: {
                                service: e,
                                uuid: "48"
                            },
                            _widgetRecordProvider: i
                        })))))]
                    })
                },
                _dependencies: [f(m.variables.isSubmittingVar), f(P.getSignupEmail())]
            }))
        }
    };
n(u, "View");
var b = u,
    Y = b;
export {
    Y as
    default
};