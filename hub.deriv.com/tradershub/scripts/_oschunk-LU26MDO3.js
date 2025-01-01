import {
    a as m
} from "./_oschunk-3R6HAWZX.js";
import {
    a as g
} from "./_oschunk-UEEOBBKH.js";
import "./_oschunk-JXJYV6ZB.js";
import "./_oschunk-ZSU2JK2M.js";
import {
    b as s
} from "./_oschunk-G7GFWP74.js";
import "./_oschunk-5ETXRNLC.js";
import "./_oschunk-O5AQVDN2.js";
import "./_oschunk-4SG3ZAXH.js";
import "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import "./_oschunk-EROCOLS7.js";
import {
    h as u
} from "./_oschunk-42NACYKQ.js";
import "./_oschunk-2M7PXTSQ.js";
import {
    a as S,
    g as n,
    i as o
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import "./_oschunk-DOFMR6EA.js";
import "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-MSUVGI3L.js";
import "./_oschunk-2JKANR6M.js";
import {
    c as t,
    g as f
} from "./_oschunk-DVBKI63I.js";
var r = f(S());
var w = o.PlaceholderContent,
    k = o.IteratorPlaceholderContent,
    e = class e extends n.BaseWebScreen {
        static get displayName() {
            return "MainFlow.Hub"
        }
        static getAttributes() {
            return {
                codeFunction: "Hub",
                functionKey: "139a9115-a0e8-4e26-953e-1c203099859a",
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
            return [s]
        }
        get modelFactory() {
            return m
        }
        get controllerFactory() {
            return g
        }
        get title() {
            return n.BaseWebScreen.getTranslation("FZGaE+igJk6VPhwgMJmFmg#Title", "Hub")
        }
        internalRender() {
            let O = this.model,
                i = this.controller,
                c = this.idService,
                v = i.validationService,
                d = this.widgetsRecordProvider,
                y = i.callContext(),
                C = e.ifWidget,
                h = e.textWidget,
                P = e.asPrimitiveValue,
                p = e.getTranslation,
                l = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(s, {
                getOwnerSpan: t(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: t(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: t(function(b) {
                        i.handleError(b)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: v
                },
                _idProps: {
                    service: c,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: d,
                placeholders: {
                    content: new w(function() {
                        return [r.createElement(u, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: c,
                                uuid: "1"
                            },
                            _widgetRecordProvider: d
                        }, h(p("dyaJiXHbZkyyymUH8Znkog#Value", "Hubs")))]
                    })
                },
                _dependencies: []
            }))
        }
    };
t(e, "View");
var a = e,
    I = a;
export {
    I as
    default
};