import {
    a as l
} from "./_oschunk-FP5BGOWP.js";
import {
    a as S
} from "./_oschunk-L72PKX5L.js";
import "./_oschunk-EOC7K7MG.js";
import {
    a as C
} from "./_oschunk-WABSGITR.js";
import {
    a as s
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
    g as i,
    i as a
} from "./_oschunk-IL57OEHH.js";
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