import {
    a as u
} from "./_oschunk-4RO7HU2J.js";
import "./_oschunk-HMQSENZ4.js";
import "./_oschunk-PISKEOZB.js";
import {
    a as f
} from "./_oschunk-VFRBNCTC.js";
import "./_oschunk-62UR2MMH.js";
import {
    a as g
} from "./_oschunk-BCVI6WBC.js";
import "./_oschunk-SOFSRMHQ.js";
import {
    a as d
} from "./_oschunk-3FJD3ZUN.js";
import "./_oschunk-GPU7XYUR.js";
import "./_oschunk-4YFBPYRH.js";
import "./_oschunk-NR4KXK35.js";
import {
    d as p
} from "./_oschunk-OO36B6PN.js";
import "./_oschunk-YFNTRMC5.js";
import "./_oschunk-7BKGLZMI.js";
import "./_oschunk-6WALBPGV.js";
import {
    a as b,
    g as c,
    i as l
} from "./_oschunk-IL57OEHH.js";
import "./_oschunk-CMUJJDSY.js";
import "./_oschunk-DW3HXDMW.js";
import "./_oschunk-PNRBOTIK.js";
import "./_oschunk-JXJHSAQS.js";
import "./_oschunk-5KJVGEL7.js";
import {
    c as e,
    h as C
} from "./_oschunk-QHO7QY6K.js";
var i = C(b());
var _ = l.PlaceholderContent,
    $ = l.IteratorPlaceholderContent,
    n = class n extends c.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.StatesListScreenMobile"
        }
        static getAttributes() {
            return {
                codeFunction: "StatesListScreenMobile",
                functionKey: "3f9ff1ef-c312-4875-ad26-73ca318bc818",
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
            return [d, u]
        }
        get modelFactory() {
            return f
        }
        get controllerFactory() {
            return g
        }
        get title() {
            return c.BaseWebScreen.getTranslation("7_GfPxLDdUitJnPKMYvIGA#Title", "StatesListScreenMobile")
        }
        internalRender() {
            let O = this.model,
                t = this.controller,
                s = this.idService,
                S = t.validationService,
                a = this.widgetsRecordProvider,
                v = t.callContext(),
                h = n.ifWidget,
                w = n.textWidget,
                R = n.asPrimitiveValue,
                x = n.getTranslation,
                o = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(d, {
                getOwnerSpan: e(function() {
                    return o.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: e(function() {
                    return o.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: "State/Province",
                    HasBackButton: !0
                },
                events: {
                    _handleError: e(function(r) {
                        t.handleError(r)
                    }, "_handleError"),
                    onBack$Action: e(function() {
                        var r = v.clone();
                        t.fullScreenMobileModalOnBack$Action(t.callContext(r))
                    }, "onBack$Action")
                },
                _validationProps: {
                    validationService: S
                },
                _idProps: {
                    service: s,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: a,
                placeholders: {
                    content: new _(function() {
                        return [i.createElement(p, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 10px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: s,
                                uuid: "1"
                            },
                            _widgetRecordProvider: a
                        }, i.createElement(u, {
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
                                onClickState$Action: e(function(r) {
                                    var P = v.clone();
                                    t.statesListOnClickCountry$Action(r, t.callContext(P))
                                }, "onClickState$Action")
                            },
                            _validationProps: {
                                validationService: S
                            },
                            _idProps: {
                                service: s,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: a,
                            _dependencies: []
                        }))]
                    })
                },
                _dependencies: []
            }))
        }
    };
e(n, "View");
var m = n,
    D = m;
export {
    D as
    default
};