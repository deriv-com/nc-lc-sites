import {
    a as l
} from "./_oschunk-TBTB4IUP.js";
import {
    a as v
} from "./_oschunk-2WWSGKPF.js";
import "./_oschunk-P3ZVXXLF.js";
import {
    a as S
} from "./_oschunk-7Y53ISCZ.js";
import {
    a as s
} from "./_oschunk-XSYDT34B.js";
import "./_oschunk-K6KZ63LW.js";
import "./_oschunk-O4ORPF6H.js";
import "./_oschunk-6BFNTJQ7.js";
import "./_oschunk-VDU6C3OQ.js";
import "./_oschunk-TWAMG3Q4.js";
import "./_oschunk-LDY7XNSJ.js";
import "./_oschunk-LWMGEL7F.js";
import "./_oschunk-Y7V2YK47.js";
import "./_oschunk-KWCHY67Z.js";
import "./_oschunk-4GXKK3IG.js";
import {
    a as P,
    g as c,
    i as a
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-PDLV67M2.js";
import "./_oschunk-3LDAHYP5.js";
import "./_oschunk-ZO3X5EQS.js";
import "./_oschunk-QPRDDNSX.js";
import "./_oschunk-5VU7DWFQ.js";
import "./_oschunk-RILYVCVH.js";
import "./_oschunk-BDI2RWOA.js";
import "./_oschunk-P3RPGEI5.js";
import "./_oschunk-7WCOCYFU.js";
import "./_oschunk-3RH6DZJJ.js";
import {
    c as e,
    h as f
} from "./_oschunk-QHO7QY6K.js";
var i = f(P());
var C = a.PlaceholderContent,
    D = a.IteratorPlaceholderContent,
    t = class t extends c.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.AccountTypeScreen"
        }
        static getAttributes() {
            return {
                codeFunction: "AccountTypeScreen",
                functionKey: "928b03ff-65f0-420b-b506-106b8e9bda09",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [s, l]
        }
        get modelFactory() {
            return v
        }
        get controllerFactory() {
            return S
        }
        get title() {
            return c.BaseWebScreen.getTranslation("_wOLkvBlC0K1BhBrjpvaCQ#Title", "AccountTypeScreen")
        }
        internalRender() {
            let b = this.model,
                r = this.controller,
                u = this.idService,
                p = r.validationService,
                m = this.widgetsRecordProvider,
                g = r.callContext(),
                _ = t.ifWidget,
                h = t.textWidget,
                w = t.asPrimitiveValue,
                y = t.getTranslation,
                o = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(s, {
                getOwnerSpan: e(function() {
                    return o.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: e(function() {
                    return o.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: e(function(n) {
                        r.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: p
                },
                _idProps: {
                    service: u,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: m,
                placeholders: {
                    content: new C(function() {
                        return [i.createElement(l, {
                            getOwnerSpan: e(function() {
                                return o.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: e(function() {
                                return o.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: e(function(n) {
                                    r.handleError(n)
                                }, "_handleError"),
                                onClickEvent$Action: e(function() {
                                    var n = g.clone();
                                    r.accountTypeBlockOnClickEvent$Action(r.callContext(n))
                                }, "onClickEvent$Action")
                            },
                            _validationProps: {
                                validationService: p
                            },
                            _idProps: {
                                service: u,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: m,
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: []
            }))
        }
    };
e(t, "View");
var d = t,
    F = d;
export {
    F as
    default
};