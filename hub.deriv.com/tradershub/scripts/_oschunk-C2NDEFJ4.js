import {
    a as L
} from "./_oschunk-PPAFPXCR.js";
import {
    a as U
} from "./_oschunk-TP7YNMH3.js";
import "./_oschunk-RETOQD5Z.js";
import {
    a as w
} from "./_oschunk-ESEQF2RQ.js";
import {
    a as S
} from "./_oschunk-5ETXRNLC.js";
import "./_oschunk-4SG3ZAXH.js";
import {
    a as R
} from "./_oschunk-YSRNYYPJ.js";
import "./_oschunk-7MRMUFUM.js";
import "./_oschunk-BWDLGS7Q.js";
import {
    a as h
} from "./_oschunk-ALAP5CBN.js";
import "./_oschunk-QVXOCHAU.js";
import "./_oschunk-EROCOLS7.js";
import {
    b as W,
    h as r,
    j as T,
    p as V,
    r as x,
    s as I,
    t as k,
    u as _,
    y as c
} from "./_oschunk-42NACYKQ.js";
import "./_oschunk-I4RPHWEA.js";
import "./_oschunk-2M7PXTSQ.js";
import {
    a as F,
    g as E,
    i as f
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import {
    a as P
} from "./_oschunk-DOFMR6EA.js";
import {
    l as C
} from "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-MSUVGI3L.js";
import {
    ia as O
} from "./_oschunk-2JKANR6M.js";
import {
    c as n,
    g as D
} from "./_oschunk-DVBKI63I.js";
var t = D(F());
var l = O,
    z = f.PlaceholderContent,
    Y = f.IteratorPlaceholderContent,
    u = class u extends E.BaseWebScreen {
        static get displayName() {
            return "Signup.signup"
        }
        static getAttributes() {
            return {
                codeFunction: "signup",
                functionKey: "f4903b81-e88f-4884-80d0-b21c8f25905e",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.Signup.signup.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [R, h, S, w]
        }
        get modelFactory() {
            return L
        }
        get controllerFactory() {
            return U
        }
        get title() {
            let m = this.model,
                o = this.controller,
                e = this.idService,
                p = o.validationService,
                i = o.callContext(),
                v = u.asPrimitiveValue,
                A = u.getTranslation,
                a = this;
            return l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("gTuQ9I_ohEiA0LIcjyWQXg#TitleExpression.2133226043.1", "Easy And Free Sign Up | Online Trading | Hub.Deriv.com")
        }
        internalRender() {
            let m = this.model,
                o = this.controller,
                e = this.idService,
                p = o.validationService,
                i = this.widgetsRecordProvider,
                v = o.callContext(),
                A = u.ifWidget,
                a = u.textWidget,
                y = u.asPrimitiveValue,
                d = u.getTranslation,
                g = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(R, {
                getOwnerSpan: n(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ClientCountry: P.getClientCountry(),
                    HasLink: !0
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
                    mainContent: new z(function() {
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
                                return C.isDesktop$Action(v).isDesktopOut
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
                        }, t.createElement(c, {
                            extendedProperties: {
                                style: "font-size: 32px; font-weight: bold; margin-bottom: 0px;"
                            },
                            text: [a(d("i9tEIXEhU0SZAJgfbQhMEw#Value", "Trusted for 25 years"))],
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
                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.checkmark.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(c, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [a(d("7qeQtH+RUESDvCAUPupY2w#Value", "Unique trade types"))],
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
                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.checkmark.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(c, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [a(d("sG77cWVczkyLtY7iklbKtg#Value", "Hundreds of instruments"))],
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
                            image: l.Navigation.VersionedURL.getVersionedUrl("img/tradershub.checkmark.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: i
                        }), t.createElement(c, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [a(d("3H4XoNMBIkKebT6I3Z916g#Value", "Financial and derived markets"))],
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
                        }, t.createElement(c, {
                            extendedProperties: {
                                style: "font-size: 20px;"
                            },
                            text: [a(d("TAX2+ef6aUO1CPCHQQzvrw#Value", `Trade anywhere, anytime. 
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
                        }, a(d("1nhQquO+GE2mj__O6_cQ0g#Value", "Get your free demo account today. "))))), t.createElement(r, {
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
                        }, t.createElement(c, {
                            extendedProperties: {
                                style: "font-weight: 700; margin-bottom: 0px;"
                            },
                            style: "sign-up-header",
                            text: [a(d("qXp+BbsXL06sD7rGH2PhTQ#Value", `Join over 2.5 million traders
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
                        }, t.createElement(k, {
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
                        }, a(d("CyqOLsdkakiKuMkhWyextw#Value", "Email"))), t.createElement(I, {
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
                            prompt: l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("53iIrc8ky0epygNbeCYIXw#ValueExpression.-374653993.1", "Enter your email"),
                            style: "form-control",
                            variable: m.createVariable(l.DataTypes.DataTypes.Text, P.getSignupEmail(), function(s) {
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
                        }, t.createElement(c, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            style: "text-neutral-9",
                            text: [a(d("W_n9gEV6oE+etpdg5GqhcA#Value", "By creating an account, you confirm you are 18+ and understand we may send you updates and marketing materials (see "))],
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
                            value: l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("JglQNzp+ZkeXKys+efeb_A#ValueExpression.1739998963.1", "Security and privacy policy"),
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(c, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            style: "text-neutral-9",
                            text: [a(d("C0qoxFXHAEaRBSNzTQIjUA#Value", `). Unsubscribe in your account settings anytime.
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
                            transition: l.Transitions.createTransition(l.Transitions.TransitionAnimation.Default),
                            url: l.Navigation.generateScreenURL("https://deriv.com/terms-and-conditions/#clients", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "30"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(c, {
                            extendedProperties: {
                                style: "color: #272B30; font-weight: bold; text-decoration: underline;"
                            },
                            style: "text-neutral-9",
                            text: [a(d("O73j_Yx0TEaTLpcDzVvCdA#Value", "Terms and conditions"))],
                            _idProps: {
                                service: e,
                                name: "ClientTncLink"
                            },
                            _widgetRecordProvider: i
                        })), t.createElement(c, {
                            style: "text-neutral-9",
                            text: [a(d("D4fzBOIpWkih+3xKbmxbFA#Value", "."))],
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
                        }, t.createElement(h, {
                            getOwnerSpan: n(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ShowLabelOnLoading: !0,
                                IsLoading: m.variables.isSubmittingVar
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
                                button: new z(function() {
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
                                    }), t.createElement(c, {
                                        extendedProperties: {
                                            style: "font-size: 14px;"
                                        },
                                        text: [a(d("XDpXamh050uW+TdMLWF1vw#Value", "Create account"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "37"
                                        },
                                        _widgetRecordProvider: i
                                    }))]
                                })
                            },
                            _dependencies: [y(m.variables.isSubmittingVar)]
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
                        })), t.createElement(c, {
                            extendedProperties: {
                                style: "font-size: 12px; margin-left: 16px; margin-right: 16px;"
                            },
                            text: [a(d("4J8Ai1AzCUOxYayzXXC_pQ#Value", "Or sign up with"))],
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
                        }, a(d("h7XhVO804k+k71VcKAnPIA#Value", "Already have an account? ")), t.createElement(_, {
                            enabled: !0,
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            transition: l.Transitions.createTransition(l.Transitions.TransitionAnimation.Default),
                            url: l.Navigation.generateScreenURL("https://oauth.deriv.com/oauth2/authorize?app_id=61554&l=en&brand=deriv&platform=deriv", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "LoginLink"
                            },
                            _widgetRecordProvider: i
                        }, t.createElement(c, {
                            extendedProperties: {
                                style: "color: #101213; font-weight: bold; text-decoration: underline;"
                            },
                            text: [a(d("zyBlByP5F0CgLHNTc6KlOQ#Value", "Log in"))],
                            _idProps: {
                                service: e,
                                uuid: "48"
                            },
                            _widgetRecordProvider: i
                        })))))]
                    })
                },
                _dependencies: [y(m.variables.isSubmittingVar), y(P.getSignupEmail())]
            }))
        }
    };
n(u, "View");
var b = u,
    Z = b;
export {
    Z as
    default
};