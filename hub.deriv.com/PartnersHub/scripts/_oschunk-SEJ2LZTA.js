import {
    b as g
} from "./_oschunk-QQXZTESH.js";
import {
    a as h
} from "./_oschunk-M3TFBONB.js";
import {
    a as w
} from "./_oschunk-RU7S7V54.js";
import {
    a as v
} from "./_oschunk-XNSKYLKO.js";
import "./_oschunk-YRIYJHWP.js";
import "./_oschunk-QTRZEJSW.js";
import "./_oschunk-Q5BYWPWW.js";
import {
    b as m,
    c as p
} from "./_oschunk-NDFBNANG.js";
import "./_oschunk-KMIPHFQV.js";
import "./_oschunk-G4AEHOYU.js";
import "./_oschunk-WGHHTA53.js";
import "./_oschunk-4GL2OV66.js";
import "./_oschunk-B5ZMBNKS.js";
import "./_oschunk-KURWLJI2.js";
import "./_oschunk-ROAU47YI.js";
import "./_oschunk-2MST7FR4.js";
import "./_oschunk-ZL2HTVZN.js";
import "./_oschunk-CLRE6NFZ.js";
import "./_oschunk-P2MIYWR2.js";
import "./_oschunk-N6CDNE7S.js";
import "./_oschunk-MKEU6QPR.js";
import "./_oschunk-JNIYO5MF.js";
import "./_oschunk-I6UUKQBK.js";
import "./_oschunk-C75U7DRJ.js";
import "./_oschunk-JHXZLUP2.js";
import "./_oschunk-VDU6C3OQ.js";
import "./_oschunk-TWAMG3Q4.js";
import "./_oschunk-LDY7XNSJ.js";
import {
    d as u,
    u as S
} from "./_oschunk-LWMGEL7F.js";
import "./_oschunk-KWCHY67Z.js";
import "./_oschunk-4GXKK3IG.js";
import {
    a as E,
    g as d,
    i as l
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-5VU7DWFQ.js";
import "./_oschunk-RILYVCVH.js";
import "./_oschunk-BDI2RWOA.js";
import "./_oschunk-P3RPGEI5.js";
import {
    a as f
} from "./_oschunk-7WCOCYFU.js";
import "./_oschunk-3RH6DZJJ.js";
import {
    c as e,
    h as b
} from "./_oschunk-QHO7QY6K.js";
var t = b(E());
var P = l.PlaceholderContent,
    K = l.IteratorPlaceholderContent,
    o = class o extends d.BaseWebScreen {
        static get displayName() {
            return "PhNavigation.Education"
        }
        static getAttributes() {
            return {
                codeFunction: "Education",
                functionKey: "87d36720-83ce-4a30-9dec-984edc5f2f60",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.PhNavigation.Education.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return ["scripts/PartnersHub.UserScripts.DerivAnalytics.js"]
        }
        static getBlocks() {
            return [v, p, g, m]
        }
        get modelFactory() {
            return h
        }
        get controllerFactory() {
            return w
        }
        get title() {
            return d.BaseWebScreen.getTranslation("IGfTh86DMEqd7JhO3F8vYA#Title", "Education")
        }
        internalRender() {
            let O = this.model,
                s = this.controller,
                i = this.idService,
                c = s.validationService,
                n = this.widgetsRecordProvider,
                C = s.callContext(),
                R = o.ifWidget,
                H = o.textWidget,
                y = o.asPrimitiveValue,
                N = o.getTranslation,
                r = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(v, {
                getOwnerSpan: e(function() {
                    return r.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: e(function() {
                    return r.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    CurrentScreen: f.navigation.education
                },
                events: {
                    _handleError: e(function(a) {
                        s.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: c
                },
                _idProps: {
                    service: i,
                    name: "Navigation",
                    alias: "1"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    customMobileHeader: P.Empty,
                    placeholder: new P(function() {
                        return [t.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "ph-education-main-container",
                            visible: !0,
                            _idProps: {
                                service: i,
                                uuid: "1"
                            },
                            _widgetRecordProvider: n
                        }, t.createElement(S, {
                            style: "ph-main-title",
                            text: ["Education"],
                            _idProps: {
                                service: i,
                                uuid: "2"
                            },
                            _widgetRecordProvider: n
                        }), t.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "affiliate-programme-block",
                            visible: !0,
                            _idProps: {
                                service: i,
                                name: "AffiliateProgramme"
                            },
                            _widgetRecordProvider: n
                        }, t.createElement(p, {
                            getOwnerSpan: e(function() {
                                return r.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: e(function() {
                                return r.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: e(function(a) {
                                    s.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: c
                            },
                            _idProps: {
                                service: i,
                                uuid: "4",
                                alias: "2"
                            },
                            _widgetRecordProvider: n,
                            _dependencies: []
                        })), t.createElement(g, {
                            getOwnerSpan: e(function() {
                                return r.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: e(function() {
                                return r.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                NoImage: !0,
                                CustomTitle: "Commission plans"
                            },
                            events: {
                                _handleError: e(function(a) {
                                    s.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: c
                            },
                            _idProps: {
                                service: i,
                                uuid: "5",
                                alias: "3"
                            },
                            _widgetRecordProvider: n,
                            _dependencies: []
                        }), t.createElement(m, {
                            getOwnerSpan: e(function() {
                                return r.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: e(function() {
                                return r.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: e(function(a) {
                                    s.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: c
                            },
                            _idProps: {
                                service: i,
                                uuid: "6",
                                alias: "4"
                            },
                            _widgetRecordProvider: n,
                            _dependencies: []
                        }))]
                    }),
                    customMobileFooter: P.Empty
                },
                _dependencies: []
            }))
        }
    };
e(o, "View");
var _ = o,
    $ = _;
export {
    $ as
    default
};