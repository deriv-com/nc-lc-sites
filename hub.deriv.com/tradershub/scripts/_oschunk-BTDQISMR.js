import {
    a as C
} from "./_oschunk-VLBZQM3C.js";
import {
    a as W
} from "./_oschunk-JOXXEI3O.js";
import "./_oschunk-JXJYV6ZB.js";
import "./_oschunk-ZSU2JK2M.js";
import {
    a as p
} from "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import {
    b as x,
    h as o,
    j as y,
    r as h,
    u as O,
    v as b,
    y as l
} from "./_oschunk-42NACYKQ.js";
import "./_oschunk-2M7PXTSQ.js";
import {
    a as k,
    g as _,
    i as v
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import "./_oschunk-DOFMR6EA.js";
import "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-MSUVGI3L.js";
import {
    ia as w
} from "./_oschunk-2JKANR6M.js";
import {
    c as n,
    g as E
} from "./_oschunk-DVBKI63I.js";
var e = E(k());
var m = w,
    N = v.PlaceholderContent,
    z = v.IteratorPlaceholderContent,
    s = class s extends _.BaseWebScreen {
        static get displayName() {
            return "MainFlow.Redirect"
        }
        static getAttributes() {
            return {
                codeFunction: "Redirect",
                functionKey: "6a8e0613-4971-4362-bac0-cb2c96573e78",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.MainFlow.Redirect.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [p]
        }
        get modelFactory() {
            return C
        }
        get controllerFactory() {
            return W
        }
        get title() {
            let u = this.model,
                i = this.controller,
                t = this.idService,
                f = i.validationService,
                r = i.callContext(),
                g = s.asPrimitiveValue,
                R = s.getTranslation,
                a = this;
            return m.Injector.resolve(m.ServiceNames.TranslationsService).getMessage("EwaOanFJYkO6wMssllc+eA#TitleExpression.-708286336.1", "Redirecting | Deriv")
        }
        internalRender() {
            let u = this.model,
                i = this.controller,
                t = this.idService,
                f = i.validationService,
                r = this.widgetsRecordProvider,
                g = i.callContext(),
                R = s.ifWidget,
                a = s.textWidget,
                V = s.asPrimitiveValue,
                d = s.getTranslation,
                S = this;
            return e.createElement("div", this.getRootNodeProperties(), R(u.variables.isCoolingOffPopupOpenVar, !1, this, function() {
                return [e.createElement(b, {
                    extendedProperties: {
                        style: "padding: 16px;"
                    },
                    showPopup: u.variables.isCoolingOffPopupOpenVar,
                    style: "popup-dialog",
                    _idProps: {
                        service: t,
                        uuid: "0"
                    },
                    _widgetRecordProvider: r
                }, e.createElement(o, {
                    align: 0,
                    animate: !1,
                    style: "content-wrapper",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "ContentWrapper"
                    },
                    _widgetRecordProvider: r
                }, e.createElement(o, {
                    align: 0,
                    animate: !1,
                    style: "",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "2"
                    },
                    _widgetRecordProvider: r
                }, e.createElement(o, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "text-align: right;"
                    },
                    style: "full-width",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "3"
                    },
                    _widgetRecordProvider: r
                }, e.createElement(O, {
                    enabled: !0,
                    onClick: n(function() {
                        var c = g.clone();
                        i.okOnClick$Action(i.callContext(c))
                    }, "onClick"),
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "4"
                    },
                    _widgetRecordProvider: r
                }, e.createElement(h, {
                    image: m.Navigation.VersionedURL.getVersionedUrl("img/tradershub.xmarksm.svg"),
                    type: 0,
                    _idProps: {
                        service: t,
                        uuid: "5"
                    },
                    _widgetRecordProvider: r
                }))), e.createElement(o, {
                    align: 0,
                    animate: !1,
                    style: "display-flex flex-direction-column gap-base",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "6"
                    },
                    _widgetRecordProvider: r
                }, e.createElement(o, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "7"
                    },
                    _widgetRecordProvider: r
                }, e.createElement(l, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [a(d("8XXsAxkvVUCdXwqvWrpo+w#Value", "Sorry, you're unable to create an account at this time. As you declined our previous risk warnings, we need you to wait for 24 hours after your first account creation attempt before you can proceed."))],
                    _idProps: {
                        service: t,
                        uuid: "8"
                    },
                    _widgetRecordProvider: r
                })), e.createElement(o, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "9"
                    },
                    _widgetRecordProvider: r
                }, e.createElement(l, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [a(d("sYNqsSZmlE2WXRmrzDktLg#Value", "We take your financial well-being seriously and want to ensure you are fully aware of the risks before trading."))],
                    _idProps: {
                        service: t,
                        uuid: "10"
                    },
                    _widgetRecordProvider: r
                })), e.createElement(o, {
                    align: 0,
                    animate: !1,
                    style: "display-block",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "11"
                    },
                    _widgetRecordProvider: r
                }, e.createElement(l, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [a(d("Jm6gTdowi0yaSSy1aJv7fA#Value", "Thank you for your understanding. You can create your account on "))],
                    _idProps: {
                        service: t,
                        uuid: "12"
                    },
                    _widgetRecordProvider: r
                }), e.createElement(y, {
                    gridProperties: {
                        marginLeft: "0px"
                    },
                    value: u.variables.timestampVar,
                    _idProps: {
                        service: t,
                        uuid: "13"
                    },
                    _widgetRecordProvider: r
                }), e.createElement(l, {
                    extendedProperties: {
                        style: "font-size: 14px;"
                    },
                    text: [a(d("S9hQ1O_oCEWQ1ydlm0jjkg#Value", " or later."))],
                    _idProps: {
                        service: t,
                        uuid: "14"
                    },
                    _widgetRecordProvider: r
                })))), e.createElement(o, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "margin-top: 16px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "15"
                    },
                    _widgetRecordProvider: r
                }, e.createElement(x, {
                    enabled: !0,
                    extendedProperties: {
                        style: "height: 32px;"
                    },
                    isDefault: !1,
                    onClick: n(function() {
                        var c = g.clone();
                        i.okOnClick$Action(i.callContext(c))
                    }, "onClick"),
                    style: "btn btn-primary full-width",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "16"
                    },
                    _widgetRecordProvider: r
                }, a(d("jdt5E6jUOUOpxBFBIj8EmA#Value", "OK"))))))]
            }, function() {
                return [e.createElement(p, {
                    getOwnerSpan: n(function() {
                        return S.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return S.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: n(function(c) {
                            i.handleError(c)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: f
                    },
                    _idProps: {
                        service: t,
                        uuid: "17",
                        alias: "1"
                    },
                    _widgetRecordProvider: r,
                    _dependencies: []
                })]
            }))
        }
    };
n(s, "View");
var P = s,
    L = P;
export {
    L as
    default
};