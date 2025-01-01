import {
    a as l
} from "./_oschunk-OLSJ4DSK.js";
import {
    a as P
} from "./_oschunk-MOAO3VKS.js";
import {
    a as c
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
    g as a,
    i as s
} from "./_oschunk-WZHUAZJP.js";
import {
    a as S
} from "./_oschunk-ANWAFYK2.js";
import "./_oschunk-RZPIDSGQ.js";
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
var i = g(f());
var C = s.PlaceholderContent,
    N = s.IteratorPlaceholderContent,
    n = class n extends a.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.PersonalDetailsScreen"
        }
        static getAttributes() {
            return {
                codeFunction: "PersonalDetailsScreen",
                functionKey: "0641e435-ab1d-4d90-8b53-4bc39ba7d98a",
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
            return [c, l]
        }
        get modelFactory() {
            return S
        }
        get controllerFactory() {
            return P
        }
        get title() {
            return a.BaseWebScreen.getTranslation("NeRBBh2rkE2LU0vDm6fZig#Title", "PersonalDetailsScreen")
        }
        internalRender() {
            let b = this.model,
                t = this.controller,
                u = this.idService,
                m = t.validationService,
                p = this.widgetsRecordProvider,
                v = t.callContext(),
                _ = n.ifWidget,
                h = n.textWidget,
                w = n.asPrimitiveValue,
                O = n.getTranslation,
                o = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(c, {
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
                        var r = v.clone();
                        t.realAccountCreationLayoutScreenBasedonClickBack2$Action(t.callContext(r))
                    }, "onClickBack2$Action")
                },
                _validationProps: {
                    validationService: m
                },
                _idProps: {
                    service: u,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: p,
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
                                _handleError: e(function(r) {
                                    t.handleError(r)
                                }, "_handleError"),
                                onClickNextStep$Action: e(function() {
                                    var r = v.clone();
                                    t.personalDetailsBlockOnClickNextStep$Action(t.callContext(r))
                                }, "onClickNextStep$Action")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: u,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: p,
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: []
            }))
        }
    };
e(n, "View");
var d = n,
    T = d;
export {
    T as
    default
};