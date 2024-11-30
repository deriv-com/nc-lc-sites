import {
    a as g
} from "./_oschunk-EAAIWL2C.js";
import {
    a as m
} from "./_oschunk-U6I7IVTT.js";
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
    g as o,
    i
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
    g as b
} from "./_oschunk-DVBKI63I.js";
var r = b(S());
var w = i.PlaceholderContent,
    I = i.IteratorPlaceholderContent,
    e = class e extends o.BaseWebScreen {
        static get displayName() {
            return "MainFlow.Account"
        }
        static getAttributes() {
            return {
                codeFunction: "Account",
                functionKey: "c3993b6c-7ac6-4929-96ee-dbcca71898bb",
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
            return o.BaseWebScreen.getTranslation("bDuZw8Z6KUmW7tvMpxiYuw#Title", "Account")
        }
        internalRender() {
            let C = this.model,
                n = this.controller,
                a = this.idService,
                v = n.validationService,
                d = this.widgetsRecordProvider,
                O = n.callContext(),
                _ = e.ifWidget,
                p = e.textWidget,
                P = e.asPrimitiveValue,
                h = e.getTranslation,
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
                    _handleError: t(function(f) {
                        n.handleError(f)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: v
                },
                _idProps: {
                    service: a,
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
                                service: a,
                                uuid: "1"
                            },
                            _widgetRecordProvider: d
                        }, p(h("3HINaGK4+EaJbhMsruccCw#Value", "Account")))]
                    })
                },
                _dependencies: []
            }))
        }
    };
t(e, "View");
var c = e,
    D = c;
export {
    D as
    default
};