import {
    a as m
} from "./_oschunk-E4K2334A.js";
import {
    a as g
} from "./_oschunk-L5LKVJJU.js";
import "./_oschunk-IAMW2WLL.js";
import {
    a as s
} from "./_oschunk-ZGZGC7WW.js";
import "./_oschunk-GSA6MIEZ.js";
import "./_oschunk-PASQVAVD.js";
import "./_oschunk-TMT5K6IM.js";
import "./_oschunk-U5BVDMC7.js";
import "./_oschunk-GRCLOXGJ.js";
import "./_oschunk-VWJXDAKN.js";
import {
    h as u
} from "./_oschunk-E7JQAU4J.js";
import "./_oschunk-5N5TJ3ES.js";
import {
    a as S,
    g as n,
    i as o
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import "./_oschunk-VADNKVBQ.js";
import "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-KG7LSUIA.js";
import "./_oschunk-5EPHB76O.js";
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