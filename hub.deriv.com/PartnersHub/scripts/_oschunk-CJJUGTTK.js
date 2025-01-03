import {
    a as S
} from "./_oschunk-EMSMVC6R.js";
import {
    a as C
} from "./_oschunk-NEKUIIIU.js";
import "./_oschunk-5HZACWW7.js";
import {
    a as w
} from "./_oschunk-JNJIRRY4.js";
import "./_oschunk-XTWMU4PO.js";
import {
    a as g
} from "./_oschunk-RNYL55HD.js";
import "./_oschunk-UOGDTLIS.js";
import "./_oschunk-I7KZQPH5.js";
import "./_oschunk-CXWYKNLS.js";
import {
    a as P
} from "./_oschunk-5FKAOJ4S.js";
import "./_oschunk-S4T4FX3G.js";
import "./_oschunk-RL72664U.js";
import "./_oschunk-SELPP7T7.js";
import "./_oschunk-AP2LGV3I.js";
import "./_oschunk-QM6TPNLS.js";
import "./_oschunk-XLHEEBMK.js";
import "./_oschunk-ANY3DTL7.js";
import "./_oschunk-22UUXQ4S.js";
import "./_oschunk-QCCZFQH6.js";
import "./_oschunk-4YFBPYRH.js";
import "./_oschunk-NR4KXK35.js";
import {
    d as p,
    f as m
} from "./_oschunk-OO36B6PN.js";
import "./_oschunk-7BKGLZMI.js";
import "./_oschunk-6WALBPGV.js";
import {
    a as R,
    g as u,
    i as v
} from "./_oschunk-IL57OEHH.js";
import "./_oschunk-RFCNRBVT.js";
import "./_oschunk-Y3C3IKDF.js";
import "./_oschunk-CMUJJDSY.js";
import "./_oschunk-DW3HXDMW.js";
import "./_oschunk-PNRBOTIK.js";
import "./_oschunk-JXJHSAQS.js";
import {
    ia as f
} from "./_oschunk-5KJVGEL7.js";
import {
    c as e,
    h as O
} from "./_oschunk-QHO7QY6K.js";
var i = O(R());
var h = f,
    x = v.PlaceholderContent,
    K = v.IteratorPlaceholderContent,
    o = class o extends u.BaseWebScreen {
        static get displayName() {
            return "CFDs.PlanDetails"
        }
        static getAttributes() {
            return {
                codeFunction: "PlanDetails",
                functionKey: "e1e7a077-5e8d-42ff-8c6b-8f67c70de48d",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.CFDs.PlanDetails.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [P, g, S]
        }
        get modelFactory() {
            return C
        }
        get controllerFactory() {
            return w
        }
        get title() {
            return u.BaseWebScreen.getTranslation("d6Dn4Y1e_0KMa49nxw3kjQ#Title", "PlanDetails")
        }
        internalRender() {
            let t = this.model,
                r = this.controller,
                s = this.idService,
                d = r.validationService,
                a = this.widgetsRecordProvider,
                b = r.callContext(),
                D = o.ifWidget,
                I = o.textWidget,
                c = o.asPrimitiveValue,
                y = o.getTranslation,
                l = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(P, {
                getOwnerSpan: e(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: e(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HasFixedHeader: !0
                },
                events: {
                    _handleError: e(function(n) {
                        r.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: d
                },
                _idProps: {
                    service: s,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: a,
                placeholders: {
                    mainContent: new x(function() {
                        return [i.createElement(p, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                className: "partners-hub-dashboard"
                            },
                            gridProperties: {
                                classes: "OSInline"
                            },
                            visible: !0,
                            _idProps: {
                                service: s,
                                uuid: "1"
                            },
                            _widgetRecordProvider: a
                        }, i.createElement(g, {
                            getOwnerSpan: e(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: e(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Title: t.variables.titleIn,
                                ShowLeftButton: !0
                            },
                            events: {
                                _handleError: e(function(n) {
                                    r.handleError(n)
                                }, "_handleError"),
                                rightButtonAction$Action: e(function() {
                                    var n = b.clone();
                                    r.onClickCloseButton$Action(r.callContext(n))
                                }, "rightButtonAction$Action"),
                                leftButtonAction$Action: e(function() {
                                    var n = b.clone();
                                    r.onClickBackButton$Action(r.callContext(n))
                                }, "leftButtonAction$Action")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: s,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: a,
                            _dependencies: []
                        }), i.createElement(p, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: left;"
                            },
                            visible: !0,
                            _idProps: {
                                service: s,
                                uuid: "3"
                            },
                            _widgetRecordProvider: a
                        }, i.createElement(m, {
                            style: "to-description",
                            value: h.Injector.resolve(h.ServiceNames.TranslationsService).getMessage("aC4kQT+wFEeu8+08_0GxHw#ValueExpression.-1076200185.1", "All commission rates are quoted in USD, per round trade."),
                            _idProps: {
                                service: s,
                                uuid: "4"
                            },
                            _widgetRecordProvider: a
                        })), i.createElement(S, {
                            getOwnerSpan: e(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: e(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsSubPlan: t.variables.isSubPlanIn,
                                CommissionType: t.variables.commissionTypeIn,
                                PlanId: t.variables.planIdIn
                            },
                            events: {
                                _handleError: e(function(n) {
                                    r.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: s,
                                uuid: "5",
                                alias: "3"
                            },
                            _widgetRecordProvider: a,
                            _dependencies: []
                        }), i.createElement(m, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "to-description",
                            value: t.variables.noteIn,
                            _idProps: {
                                service: s,
                                uuid: "6"
                            },
                            _widgetRecordProvider: a
                        }))]
                    })
                },
                _dependencies: [c(t.variables.noteIn), c(t.variables.planIdIn), c(t.variables.commissionTypeIn), c(t.variables.isSubPlanIn), c(t.variables.titleIn)]
            }))
        }
    };
e(o, "View");
var _ = o,
    L = _;
export {
    L as
    default
};