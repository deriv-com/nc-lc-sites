import {
    a as m
} from "./_oschunk-VORCTAGJ.js";
import {
    a as P
} from "./_oschunk-VXCGQAK4.js";
import "./_oschunk-7WIPGOVP.js";
import {
    a as g
} from "./_oschunk-FHYBHEW2.js";
import "./_oschunk-C75U7DRJ.js";
import "./_oschunk-JHXZLUP2.js";
import "./_oschunk-H5EDH4AY.js";
import {
    a as _
} from "./_oschunk-GEKR2PWI.js";
import "./_oschunk-N5HEACS4.js";
import "./_oschunk-TWAMG3Q4.js";
import "./_oschunk-LDY7XNSJ.js";
import {
    d as R
} from "./_oschunk-LWMGEL7F.js";
import "./_oschunk-Y7V2YK47.js";
import "./_oschunk-KWCHY67Z.js";
import "./_oschunk-4GXKK3IG.js";
import {
    a as O,
    g as l,
    i as u
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-RILYVCVH.js";
import "./_oschunk-BDI2RWOA.js";
import "./_oschunk-P3RPGEI5.js";
import {
    fa as C,
    sb as S
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as b
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as r,
    h as w
} from "./_oschunk-QHO7QY6K.js";
var a = w(O());
var x = b,
    h = u.PlaceholderContent,
    q = u.IteratorPlaceholderContent,
    s = class s extends l.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.TaxCountryResidence"
        }
        static getAttributes() {
            return {
                codeFunction: "TaxCountryResidence",
                functionKey: "e8af1951-644b-409c-abf7-e0bc97b96af8",
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
            return [_, m]
        }
        get modelFactory() {
            return P
        }
        get controllerFactory() {
            return g
        }
        get title() {
            return l.BaseWebScreen.getTranslation("URmv6EtknECr9+C8l7lq+A#Title", "TaxCountryResidence")
        }
        internalRender() {
            let n = this.model,
                i = this.controller,
                o = this.idService,
                v = i.validationService,
                d = this.widgetsRecordProvider,
                f = i.callContext(),
                y = s.ifWidget,
                H = s.textWidget,
                A = s.asPrimitiveValue,
                V = s.getTranslation,
                c = this;
            return a.createElement("div", this.getRootNodeProperties(), a.createElement(_, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HasBackButton: !0,
                    Title: "Country of tax residence"
                },
                events: {
                    _handleError: r(function(e) {
                        i.handleError(e)
                    }, "_handleError"),
                    onBack$Action: r(function() {
                        var e = f.clone();
                        i.fullScreenMobileModalOnBack$Action(i.callContext(e))
                    }, "onBack$Action")
                },
                _validationProps: {
                    validationService: v
                },
                _idProps: {
                    service: o,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: d,
                placeholders: {
                    content: new h(function() {
                        return [a.createElement(R, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 10px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: o,
                                uuid: "1"
                            },
                            _widgetRecordProvider: d
                        }, a.createElement(m, {
                            getOwnerSpan: r(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                WebsiteStatus: n.getCachedValue(o.getId("TuvSb3HNr0GD_VOBxPNm4g.WebsiteStatus"), function() {
                                    return x.DataConversion.JSConversions.typeConvertRecord(n.variables.websiteStatusResponseVar.website_statusAttr, new C, function(e, t) {
                                        return t.broker_codesAttr = e.broker_codesAttr, t.clients_countryAttr = e.clients_countryAttr, t.dxtrade_statusAttr.allAttr = e.dxtrade_statusAttr.allAttr, t.dxtrade_statusAttr.demoAttr = e.dxtrade_statusAttr.demoAttr, t.dxtrade_statusAttr.realAttr = e.dxtrade_statusAttr.realAttr, t.supported_languagesAttr = e.supported_languagesAttr, t.terms_conditions_versionAttr = e.terms_conditions_versionAttr, t
                                    })
                                }, function() {
                                    return n.variables.websiteStatusResponseVar.website_statusAttr
                                }),
                                ResidenceList: n.getCachedValue(o.getId("TuvSb3HNr0GD_VOBxPNm4g.ResidenceList"), function() {
                                    return x.DataConversion.JSConversions.typeConvertRecordList(n.variables.residenceListResponseVar.residence_listAttr, new S, function(e, t) {
                                        return t.phone_iddAttr = e.phone_iddAttr, t.textAttr = e.textAttr, t.valueAttr = e.valueAttr, t.tin_formatAttr = e.tin_formatAttr, t.disabledAttr = e.disabledAttr, t.selectedAttr = e.selectedAttr, t.account_opening_self_declaration_requiredAttr = e.account_opening_self_declaration_requiredAttr, t
                                    })
                                }, function() {
                                    return n.variables.residenceListResponseVar.residence_listAttr
                                })
                            },
                            events: {
                                _handleError: r(function(e) {
                                    i.handleError(e)
                                }, "_handleError"),
                                onClickCountry$Action: r(function(e) {
                                    var t = f.clone();
                                    i.residenceSelectorOnClickCountry$Action(e, i.callContext(t))
                                }, "onClickCountry$Action")
                            },
                            _validationProps: {
                                validationService: v
                            },
                            _idProps: {
                                service: o,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: d,
                            _dependencies: []
                        }))]
                    })
                },
                _dependencies: [A(n.variables.residenceListResponseVar.residence_listAttr), A(n.variables.websiteStatusResponseVar.website_statusAttr)]
            }))
        }
    };
r(s, "View");
var p = s,
    J = p;
export {
    J as
    default
};