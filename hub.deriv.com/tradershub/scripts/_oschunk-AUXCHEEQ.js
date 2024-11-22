import {
    a as p
} from "./_oschunk-5RFODUCB.js";
import {
    a as P
} from "./_oschunk-AVF2XRLN.js";
import "./_oschunk-DMYYSU2E.js";
import {
    a as _
} from "./_oschunk-3CANV6J7.js";
import "./_oschunk-OW5V4P4X.js";
import "./_oschunk-DNFEHUWC.js";
import {
    a as g
} from "./_oschunk-TTT3OLGZ.js";
import "./_oschunk-XSPTP7OT.js";
import "./_oschunk-BHZNFATE.js";
import {
    h as c,
    y as S
} from "./_oschunk-HUOHOHZB.js";
import "./_oschunk-Y45M2O2K.js";
import {
    a as R,
    g as f,
    i as m
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import "./_oschunk-27GDEXUT.js";
import "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-HQOLQB4T.js";
import {
    ia as h
} from "./_oschunk-NTQBNJ73.js";
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