import {
    a as b
} from "./_oschunk-QSZML4CO.js";
import {
    a as C
} from "./_oschunk-5T2FCAUH.js";
import "./_oschunk-5ZHXT6XI.js";
import {
    a as m
} from "./_oschunk-WOX7Q6N2.js";
import "./_oschunk-4IZMLZ3O.js";
import "./_oschunk-HMQSENZ4.js";
import "./_oschunk-PISKEOZB.js";
import "./_oschunk-SOFSRMHQ.js";
import {
    a as u
} from "./_oschunk-3FJD3ZUN.js";
import "./_oschunk-GPU7XYUR.js";
import "./_oschunk-4YFBPYRH.js";
import "./_oschunk-NR4KXK35.js";
import {
    d as g
} from "./_oschunk-OO36B6PN.js";
import "./_oschunk-7BKGLZMI.js";
import "./_oschunk-6WALBPGV.js";
import {
    a as _,
    g as l,
    i as d
} from "./_oschunk-IL57OEHH.js";
import "./_oschunk-CMUJJDSY.js";
import "./_oschunk-DW3HXDMW.js";
import "./_oschunk-PNRBOTIK.js";
import "./_oschunk-JXJHSAQS.js";
import "./_oschunk-5KJVGEL7.js";
import {
    c as e,
    h as R
} from "./_oschunk-QHO7QY6K.js";
var i = R(_());
var w = d.PlaceholderContent,
    $ = d.IteratorPlaceholderContent,
    n = class n extends l.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreationFlow.TaxResidenceList"
        }
        static getAttributes() {
            return {
                codeFunction: "TaxResidenceList",
                functionKey: "37d4276d-19e9-429c-81be-f0a8f0fae683",
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
            return [u, m]
        }
        get modelFactory() {
            return b
        }
        get controllerFactory() {
            return C
        }
        get title() {
            return l.BaseWebScreen.getTranslation("bSfUN+kZnEKBvvCo8Prmgw#Title", "TaxResidenceList")
        }
        internalRender() {
            let o = this.model,
                t = this.controller,
                a = this.idService,
                v = t.validationService,
                c = this.widgetsRecordProvider,
                f = t.callContext(),
                O = n.ifWidget,
                h = n.textWidget,
                S = n.asPrimitiveValue,
                x = n.getTranslation,
                s = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(u, {
                getOwnerSpan: e(function() {
                    return s.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: e(function() {
                    return s.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HasBackButton: !0,
                    Title: "Country of tax residence"
                },
                events: {
                    _handleError: e(function(r) {
                        t.handleError(r)
                    }, "_handleError"),
                    onBack$Action: e(function() {
                        var r = f.clone();
                        t.fullScreenMobileModalOnBack$Action(t.callContext(r))
                    }, "onBack$Action")
                },
                _validationProps: {
                    validationService: v
                },
                _idProps: {
                    service: a,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: c,
                placeholders: {
                    content: new w(function() {
                        return [i.createElement(g, {
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
                            _widgetRecordProvider: c
                        }, i.createElement(m, {
                            getOwnerSpan: e(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: e(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                WebsiteStatus: o.variables.websiteStatusResponseVar.website_statusAttr,
                                ResidenceList: o.variables.residenceListResponseVar.residence_listAttr
                            },
                            events: {
                                _handleError: e(function(r) {
                                    t.handleError(r)
                                }, "_handleError"),
                                onClickCountry$Action: e(function(r) {
                                    var P = f.clone();
                                    t.residenceSelectorOnClickCountry$Action(r, t.callContext(P))
                                }, "onClickCountry$Action")
                            },
                            _validationProps: {
                                validationService: v
                            },
                            _idProps: {
                                service: a,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: c,
                            _dependencies: []
                        }))]
                    })
                },
                _dependencies: [S(o.variables.residenceListResponseVar.residence_listAttr), S(o.variables.websiteStatusResponseVar.website_statusAttr)]
            }))
        }
    };
e(n, "View");
var p = n,
    D = p;
export {
    D as
    default
};