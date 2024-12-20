import {
    a as E
} from "./_oschunk-EV62MSHU.js";
import {
    a as O
} from "./_oschunk-J3XYBNGS.js";
import "./_oschunk-DB5DDJ2A.js";
import {
    a as S
} from "./_oschunk-HQUSBNRM.js";
import "./_oschunk-VU54BC6V.js";
import "./_oschunk-LT6VIXXX.js";
import "./_oschunk-JGA2446S.js";
import "./_oschunk-VWJXDAKN.js";
import {
    a as c,
    h as a,
    j as p,
    r as w,
    u as y,
    y as l
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as k,
    g as _,
    i as v
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import {
    a as g
} from "./_oschunk-VADNKVBQ.js";
import "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-KG7LSUIA.js";
import {
    ia as R
} from "./_oschunk-5EPHB76O.js";
import {
    c as o,
    g as V
} from "./_oschunk-DVBKI63I.js";
var e = V(k());
var u = R,
    T = v.PlaceholderContent,
    L = v.IteratorPlaceholderContent,
    i = class i extends _.BaseWebScreen {
        static get displayName() {
            return "Signup.EmailSentScreen"
        }
        static getAttributes() {
            return {
                codeFunction: "EmailSentScreen",
                functionKey: "3146f3bd-5d42-4ed3-9262-8aba7f98e312",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.Signup.EmailSentScreen.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [S]
        }
        get modelFactory() {
            return E
        }
        get controllerFactory() {
            return O
        }
        get title() {
            let b = this.model,
                n = this.controller,
                t = this.idService,
                h = n.validationService,
                r = n.callContext(),
                x = i.asPrimitiveValue,
                C = i.getTranslation,
                s = this;
            return u.Injector.resolve(u.ServiceNames.TranslationsService).getMessage("vfNGMUJd006SYoq6f5jjEg#TitleExpression.-1132290137.1", "Check your email")
        }
        internalRender() {
            let b = this.model,
                n = this.controller,
                t = this.idService,
                h = n.validationService,
                r = this.widgetsRecordProvider,
                x = n.callContext(),
                C = i.ifWidget,
                s = i.textWidget,
                W = i.asPrimitiveValue,
                d = i.getTranslation,
                f = this;
            return e.createElement("div", this.getRootNodeProperties(), e.createElement(S, {
                getOwnerSpan: o(function() {
                    return f.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return f.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    NoContentMiddle: !0,
                    HasLink: !0
                },
                events: {
                    _handleError: o(function(m) {
                        n.handleError(m)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: h
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    mainContent: new T(function() {
                        return [e.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "height: auto; margin-bottom: 0px; padding: 16px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "auto"
                            },
                            style: "email-sent-container",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(a, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "2"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(w, {
                            gridProperties: {
                                width: "96px"
                            },
                            image: u.Navigation.VersionedURL.getVersionedUrl("img/tradershub.email.png"),
                            type: 0,
                            _idProps: {
                                service: t,
                                uuid: "3"
                            },
                            _widgetRecordProvider: r
                        })), e.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "352px"
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(p, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: 700; line-height: 24px; text-align: center;"
                            },
                            style: "break-word",
                            value: u.Injector.resolve(u.ServiceNames.TranslationsService).getMessage("i5X5nJsCMk+a7Z3SQ9IFSQ#ValueExpression.-1309903677.1", "We\u2019ve sent a verification link to "),
                            _idProps: {
                                service: t,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        }), e.createElement(p, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: 700; line-height: 24px; text-align: center;"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            style: "break-word",
                            value: g.getSignupEmail(),
                            _idProps: {
                                service: t,
                                uuid: "6"
                            },
                            _widgetRecordProvider: r
                        })), e.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "352px"
                            },
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "7"
                            },
                            _widgetRecordProvider: r
                        }, s(d("OlUhS96640KlAujAwJX3GQ#Value", "Didn't get an email? ")), e.createElement(y, {
                            enabled: !0,
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            onClick: o(function() {
                                return Promise.resolve().then(function() {
                                    var m = x.clone();
                                    return n.resendVerifyEmail$Action(g.getSignupEmail(), n.callContext(m))
                                })
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "8"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(l, {
                            extendedProperties: {
                                style: "color: #101213; font-weight: 700; line-height: 22px; text-decoration: underline;"
                            },
                            text: [s(d("sPGv4u2Vf0GhWnR2F+88Lg#Value", "Resend email"))],
                            _idProps: {
                                service: t,
                                name: "Resendemaillink"
                            },
                            _widgetRecordProvider: r
                        })), e.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: left;"
                            },
                            gridProperties: {
                                marginLeft: "0px"
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "10"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(c, {
                            tag: "ul",
                            _idProps: {
                                service: t,
                                uuid: "11"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(c, {
                            tag: "li",
                            _idProps: {
                                service: t,
                                uuid: "12"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(l, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            text: [s(d("61zNHxNu502gHhifmmz4IA#Value", "Make sure you\u2019ve entered your email correctly."))],
                            _idProps: {
                                service: t,
                                uuid: "13"
                            },
                            _widgetRecordProvider: r
                        })), e.createElement(c, {
                            tag: "li",
                            _idProps: {
                                service: t,
                                uuid: "14"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(l, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            text: [s(d("oemHAbU4pUWSudfKsqyVzg#Value", "Check your spam folder."))],
                            _idProps: {
                                service: t,
                                uuid: "15"
                            },
                            _widgetRecordProvider: r
                        })), e.createElement(c, {
                            tag: "li",
                            _idProps: {
                                service: t,
                                uuid: "16"
                            },
                            _widgetRecordProvider: r
                        }, e.createElement(l, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            text: [s(d("z31ULyxXE0iDZK+ggzIy7w#Value", "Make sure the email isn\u2019t blocked by firewalls or filters."))],
                            _idProps: {
                                service: t,
                                uuid: "17"
                            },
                            _widgetRecordProvider: r
                        }))))))]
                    })
                },
                _dependencies: [W(g.getSignupEmail())]
            }))
        }
    };
o(i, "View");
var P = i,
    j = P;
export {
    j as
    default
};