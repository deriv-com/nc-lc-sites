import {
    a as m
} from "./_oschunk-2ATFG4OZ.js";
import {
    a as g
} from "./_oschunk-H5RPCVS5.js";
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
    g as o,
    i
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