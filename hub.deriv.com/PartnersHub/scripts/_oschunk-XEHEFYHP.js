import {
    a as l
} from "./_oschunk-WZVDE5J5.js";
import {
    a as S
} from "./_oschunk-PC3W5Y32.js";
import "./_oschunk-SMNEJQCO.js";
import {
    a as C
} from "./_oschunk-JJK4QEGN.js";
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
    a as f,
    g as i,
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
    h as g
} from "./_oschunk-QHO7QY6K.js";
var c = g(f());
var P = a.PlaceholderContent,
    $ = a.IteratorPlaceholderContent,
    n = class n extends i.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.AccountCurrencyScreen"
        }
        static getAttributes() {
            return {
                codeFunction: "AccountCurrencyScreen",
                functionKey: "f8009d0d-3ea3-4b6a-958b-5fdbd9bd4ca8",
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
            return S
        }
        get controllerFactory() {
            return C
        }
        get title() {
            return i.BaseWebScreen.getTranslation("DZ0A+KM+akuVi1_b2b1MqA#Title", "AccountCurrencyScreen")
        }
        internalRender() {
            let b = this.model,
                t = this.controller,
                d = this.idService,
                m = t.validationService,
                v = this.widgetsRecordProvider,
                p = t.callContext(),
                _ = n.ifWidget,
                h = n.textWidget,
                y = n.asPrimitiveValue,
                w = n.getTranslation,
                o = this;
            return c.createElement("div", this.getRootNodeProperties(), c.createElement(s, {
                getOwnerSpan: e(function() {
                    return o.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: e(function() {
                    return o.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: e(function(r) {
                        t.handleError(r)
                    }, "_handleError"),
                    onClickBack2$Action: e(function() {
                        var r = p.clone();
                        t.realAccountCreationLayoutScreenBasedonClickBack2$Action(t.callContext(r))
                    }, "onClickBack2$Action")
                },
                _validationProps: {
                    validationService: m
                },
                _idProps: {
                    service: d,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: v,
                placeholders: {
                    content: new P(function() {
                        return [c.createElement(l, {
                            getOwnerSpan: e(function() {
                                return o.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: e(function() {
                                return o.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: e(function(r) {
                                    t.handleError(r)
                                }, "_handleError"),
                                nextStepEvent$Action: e(function() {
                                    var r = p.clone();
                                    t.accountCurrencyBlockNextStepEvent$Action(t.callContext(r))
                                }, "nextStepEvent$Action")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: d,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: v,
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: []
            }))
        }
    };
e(n, "View");
var u = n,
    D = u;
export {
    D as
    default
};