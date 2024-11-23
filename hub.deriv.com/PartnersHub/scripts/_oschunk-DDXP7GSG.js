import {
    a as g
} from "./_oschunk-WVJ2OR6E.js";
import {
    a as f
} from "./_oschunk-TVQJUXH2.js";
import "./_oschunk-5ZHXT6XI.js";
import {
    a as u
} from "./_oschunk-4RO7HU2J.js";
import "./_oschunk-HMQSENZ4.js";
import "./_oschunk-PISKEOZB.js";
import "./_oschunk-62UR2MMH.js";
import "./_oschunk-SOFSRMHQ.js";
import {
    a as d
} from "./_oschunk-3FJD3ZUN.js";
import "./_oschunk-GPU7XYUR.js";
import "./_oschunk-4YFBPYRH.js";
import "./_oschunk-NR4KXK35.js";
import {
    d as v
} from "./_oschunk-OO36B6PN.js";
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
var o = C(b());
var _ = l.PlaceholderContent,
    T = l.IteratorPlaceholderContent,
    n = class n extends c.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreationFlow.StatesListScreen"
        }
        static getAttributes() {
            return {
                codeFunction: "StatesListScreen",
                functionKey: "b1865a3a-871f-421e-a318-234e8a857beb",
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
            return g
        }
        get controllerFactory() {
            return f
        }
        get title() {
            return c.BaseWebScreen.getTranslation("OlqGsR+HHkKjGCNOioV76w#Title", "StatesListScreen")
        }
        internalRender() {
            let w = this.model,
                t = this.controller,
                a = this.idService,
                S = t.validationService,
                s = this.widgetsRecordProvider,
                p = t.callContext(),
                O = n.ifWidget,
                h = n.textWidget,
                R = n.asPrimitiveValue,
                H = n.getTranslation,
                i = this;
            return o.createElement("div", this.getRootNodeProperties(), o.createElement(d, {
                getOwnerSpan: e(function() {
                    return i.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: e(function() {
                    return i.getChildSpan("destroy")
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
                        var r = p.clone();
                        t.fullScreenMobileModalOnBack$Action(t.callContext(r))
                    }, "onBack$Action")
                },
                _validationProps: {
                    validationService: S
                },
                _idProps: {
                    service: a,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: s,
                placeholders: {
                    content: new _(function() {
                        return [o.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 10px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: a,
                                uuid: "1"
                            },
                            _widgetRecordProvider: s
                        }, o.createElement(u, {
                            getOwnerSpan: e(function() {
                                return i.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: e(function() {
                                return i.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: e(function(r) {
                                    t.handleError(r)
                                }, "_handleError"),
                                onClickState$Action: e(function(r) {
                                    var P = p.clone();
                                    t.statesListOnClickCountry$Action(r, t.callContext(P))
                                }, "onClickState$Action")
                            },
                            _validationProps: {
                                validationService: S
                            },
                            _idProps: {
                                service: a,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: s,
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
    $ = m;
export {
    $ as
    default
};