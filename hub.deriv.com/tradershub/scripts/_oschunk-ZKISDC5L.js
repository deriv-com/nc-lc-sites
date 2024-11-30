import {
    a as m
} from "./_oschunk-VHDP7A4R.js";
import {
    a as g
} from "./_oschunk-PPJBXMOY.js";
import "./_oschunk-S244237N.js";
import {
    a as s
} from "./_oschunk-ODSHDLTB.js";
import "./_oschunk-HBEXL7KK.js";
import "./_oschunk-GEKOGHNU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    h as u
} from "./_oschunk-WAXNMQCP.js";
import "./_oschunk-LHY3WMNC.js";
import {
    a as S,
    g as n,
    i as o
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import "./_oschunk-XMOR6XCC.js";
import "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-44PT7RP7.js";
import "./_oschunk-NTQBNJ73.js";
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