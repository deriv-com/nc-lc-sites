import {
    a as l
} from "./_oschunk-YGOKWTUN.js";
import {
    a as P
} from "./_oschunk-2C7GYTMO.js";
import {
    a as c
} from "./_oschunk-T235ANIR.js";
import "./_oschunk-3YBO6G6W.js";
import "./_oschunk-SLDZWO3Q.js";
import "./_oschunk-22UUXQ4S.js";
import "./_oschunk-QCCZFQH6.js";
import "./_oschunk-4YFBPYRH.js";
import "./_oschunk-NR4KXK35.js";
import "./_oschunk-OO36B6PN.js";
import "./_oschunk-YFNTRMC5.js";
import "./_oschunk-7BKGLZMI.js";
import "./_oschunk-6WALBPGV.js";
import {
    a as f,
    g as a,
    i as s
} from "./_oschunk-IL57OEHH.js";
import {
    a as S
} from "./_oschunk-F6GS6EBP.js";
import "./_oschunk-TCJOEMRR.js";
import "./_oschunk-BFQJHNK7.js";
import "./_oschunk-RO5KMNGS.js";
import "./_oschunk-4XEIQ5YX.js";
import "./_oschunk-RFCNRBVT.js";
import "./_oschunk-Y3C3IKDF.js";
import "./_oschunk-CMUJJDSY.js";
import "./_oschunk-DW3HXDMW.js";
import "./_oschunk-PNRBOTIK.js";
import "./_oschunk-JXJHSAQS.js";
import "./_oschunk-5KJVGEL7.js";
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