import {
    a as p
} from "./_oschunk-HQUSBNRM.js";
import {
    a as P
} from "./_oschunk-2B6P52FY.js";
import "./_oschunk-VU54BC6V.js";
import {
    a as _
} from "./_oschunk-WSAXW2RI.js";
import "./_oschunk-LT6VIXXX.js";
import "./_oschunk-JGA2446S.js";
import {
    a as g
} from "./_oschunk-MZCCW5KD.js";
import "./_oschunk-ZVAEEY5Q.js";
import "./_oschunk-VWJXDAKN.js";
import {
    h as c,
    y as S
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as R,
    g as f,
    i as m
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
    c as t,
    g as O
} from "./_oschunk-DVBKI63I.js";
var r = O(R());
var b = h,
    y = m.PlaceholderContent,
    D = m.IteratorPlaceholderContent,
    e = class e extends f.BaseWebScreen {
        static get displayName() {
            return "Common.PageNotFound"
        }
        static getAttributes() {
            return {
                codeFunction: "PageNotFound",
                functionKey: "aa94d450-66c1-4d97-9e1f-f7e02b9cea78",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [g, p]
        }
        get modelFactory() {
            return P
        }
        get controllerFactory() {
            return _
        }
        get title() {
            let C = this.model,
                n = this.controller,
                i = this.idService,
                d = n.validationService,
                o = n.callContext(),
                w = e.asPrimitiveValue,
                x = e.getTranslation,
                a = this;
            return b.Injector.resolve(b.ServiceNames.TranslationsService).getMessage("UNSUqsFml02eH_fgK5zqeA#TitleExpression.1091591615.1", "404 - Page Not Found")
        }
        internalRender() {
            let C = this.model,
                n = this.controller,
                i = this.idService,
                d = n.validationService,
                o = this.widgetsRecordProvider,
                w = n.callContext(),
                x = e.ifWidget,
                a = e.textWidget,
                W = e.asPrimitiveValue,
                l = e.getTranslation,
                s = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(g, {
                getOwnerSpan: t(function() {
                    return s.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: t(function() {
                    return s.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: t(function(u) {
                        n.handleError(u)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: d
                },
                _idProps: {
                    service: i,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    content: new y(function() {
                        return [r.createElement(c, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: i,
                                uuid: "1"
                            },
                            _widgetRecordProvider: o
                        }), r.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: !0,
                            _idProps: {
                                service: i,
                                uuid: "2"
                            },
                            _widgetRecordProvider: o
                        }), r.createElement(p, {
                            getOwnerSpan: t(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                HasLink: !0
                            },
                            events: {
                                _handleError: t(function(u) {
                                    n.handleError(u)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: i,
                                uuid: "3",
                                alias: "2"
                            },
                            _widgetRecordProvider: o,
                            placeholders: {
                                mainContent: new y(function() {
                                    return [r.createElement(c, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "color: #414652; font-size: 14px; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; padding: 16px; text-align: center;"
                                        },
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        style: "main-container full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "MainContainer"
                                        },
                                        _widgetRecordProvider: o
                                    }, r.createElement(S, {
                                        extendedProperties: {
                                            style: "font-size: 24px; font-weight: bold;"
                                        },
                                        text: [a(l("stOWzv_CDkKd6Bu+k37e7w#Value", `

We couldn\u2019t find that page
`))],
                                        _idProps: {
                                            service: i,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: o
                                    }), a(l("Og0eU7daFE28e51Sg0JB6w#Value", "It may not be available in your country, or a broken link has brought you here.")), a(l("qP+gusWZAEy3JrN6qtLweQ#Value", `We couldn\u2019t find that page
It may not be available in your country, or a broken link has brought you here.

`)))]
                                })
                            },
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: []
            }), "ton")
        }
    };
t(e, "View");
var v = e,
    U = v;
export {
    U as
    default
};