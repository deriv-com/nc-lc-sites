import {
    a as I
} from "./_oschunk-KCGFKCXP.js";
import {
    a as H
} from "./_oschunk-H6DFQ24Y.js";
import {
    a as O
} from "./_oschunk-K6JXNTSB.js";
import "./_oschunk-CDQG5BIU.js";
import "./_oschunk-4ZTC5CFM.js";
import "./_oschunk-5FKAOJ4S.js";
import "./_oschunk-S4T4FX3G.js";
import "./_oschunk-RL72664U.js";
import "./_oschunk-SELPP7T7.js";
import {
    a as w
} from "./_oschunk-AP2LGV3I.js";
import "./_oschunk-QM6TPNLS.js";
import "./_oschunk-HMQSENZ4.js";
import "./_oschunk-PISKEOZB.js";
import "./_oschunk-XLHEEBMK.js";
import "./_oschunk-ANY3DTL7.js";
import "./_oschunk-22UUXQ4S.js";
import "./_oschunk-QCCZFQH6.js";
import "./_oschunk-4YFBPYRH.js";
import "./_oschunk-NR4KXK35.js";
import {
    a as v,
    d as a,
    f as _,
    i as W,
    j as b,
    k as f,
    n as h,
    p as T,
    u as c
} from "./_oschunk-OO36B6PN.js";
import "./_oschunk-7BKGLZMI.js";
import "./_oschunk-6WALBPGV.js";
import {
    a as D,
    g as R,
    i as S
} from "./_oschunk-IL57OEHH.js";
import "./_oschunk-RFCNRBVT.js";
import "./_oschunk-Y3C3IKDF.js";
import "./_oschunk-CMUJJDSY.js";
import "./_oschunk-DW3HXDMW.js";
import "./_oschunk-PNRBOTIK.js";
import "./_oschunk-JXJHSAQS.js";
import {
    ia as A
} from "./_oschunk-5KJVGEL7.js";
import {
    c as d,
    h as F
} from "./_oschunk-QHO7QY6K.js";
var e = F(D());
var m = A,
    x = S.PlaceholderContent,
    U = S.IteratorPlaceholderContent,
    u = class u extends R.BaseWebScreen {
        static get displayName() {
            return "CommissionPlans.RevShare"
        }
        static getAttributes() {
            return {
                codeFunction: "RevShare",
                functionKey: "a2764afc-e820-4bf9-bca5-c0c8db44f699",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.CommissionPlans.RevShare.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return ["scripts/PartnersHub.UserScripts.DerivAnalytics.js"]
        }
        static getBlocks() {
            return [O, w]
        }
        get modelFactory() {
            return I
        }
        get controllerFactory() {
            return H
        }
        get title() {
            return R.BaseWebScreen.getTranslation("_Ep2oiDo+Uu8pcDI20T2mQ#Title", "RevShare")
        }
        internalRender() {
            let i = this.model,
                g = this.controller,
                r = this.idService,
                C = g.validationService,
                t = this.widgetsRecordProvider,
                E = g.callContext(),
                V = u.ifWidget,
                n = u.textWidget,
                l = u.asPrimitiveValue,
                o = u.getTranslation,
                p = this;
            return e.createElement("div", this.getRootNodeProperties(), e.createElement(O, {
                getOwnerSpan: d(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: d(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: d(function(s) {
                        g.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: C
                },
                _idProps: {
                    service: r,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    placeholder: new x(function() {
                        return [e.createElement(a, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "partners-hub-dashboard",
                            visible: !0,
                            _idProps: {
                                service: r,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t
                        }, V(i.variables.isLoadingVar, !1, this, function() {
                            return [e.createElement(w, {
                                getOwnerSpan: d(function() {
                                    return p.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: d(function() {
                                    return p.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    IsLoading: i.variables.isLoadingVar
                                },
                                events: {
                                    _handleError: d(function(s) {
                                        g.handleError(s)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: C
                                },
                                _idProps: {
                                    service: r,
                                    uuid: "2",
                                    alias: "2"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    content: x.Empty
                                },
                                _dependencies: []
                            })]
                        }, function() {
                            return [e.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "partners-hub-title-container",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "TurnoverTitle"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(a, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; display: flex; gap: 24px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(c, {
                                style: "cp-title",
                                text: [n(o("s9pqGOVl00iD1dADMgQtiw#Value", "RevShare"))],
                                _idProps: {
                                    service: r,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: t
                            })), e.createElement(a, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: d(function() {
                                        var s = E.clone();
                                        g.onClick$Action(g.callContext(s))
                                    }, "onClick")
                                },
                                extendedProperties: {
                                    style: "cursor: pointer;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(h, {
                                image: m.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.closenormal.png"),
                                type: 0,
                                _idProps: {
                                    service: r,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: t
                            }))), e.createElement(a, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "notification-banner",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(h, {
                                extendedProperties: {
                                    style: "color: #3c33bf; font-size: 8px;"
                                },
                                gridProperties: {
                                    width: "20px"
                                },
                                image: m.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.info_black.svg"),
                                type: 0,
                                _idProps: {
                                    service: r,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: t
                            }), e.createElement(T, {
                                extendedProperties: {
                                    style: "font-size: 12px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: r,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(c, {
                                style: "to-description",
                                text: [n(o("XZS5Poz6MUOvYs_ziqCUqw#Value", "If your RevShare plan isn't activated, contact your account manager."))],
                                _idProps: {
                                    service: r,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: t
                            }))), e.createElement(a, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: column; gap: 6px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(c, {
                                extendedProperties: {
                                    style: "font-weight: 400; line-height: 22px;"
                                },
                                text: [n(o("9Zdy9b9wYUWWuJlHxC+iPw#Value", "Earn based on the monthly net revenue generated by your clients."))],
                                _idProps: {
                                    service: r,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: t
                            })), e.createElement(a, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(W, {
                                showHeader: !0,
                                source: i.variables.getRevShareInfoTablesAggr.listOut,
                                style: "table",
                                styleHeader: "table-header",
                                styleRow: "table-row to-description",
                                _idProps: {
                                    service: r,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: t,
                                source_dataFetchStatus: m.Model.calculateDataFetchStatus(i.variables.getRevShareInfoTablesAggr.dataFetchStatusAttr),
                                placeholders: {
                                    headerRow: new x(function() {
                                        return [e.createElement(b, {
                                            style: "header-color",
                                            _idProps: {
                                                service: r,
                                                uuid: "16"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        }, e.createElement(a, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                uuid: "17"
                                            },
                                            _widgetRecordProvider: t
                                        }, e.createElement(c, {
                                            extendedProperties: {
                                                style: "color: #222;"
                                            },
                                            text: [n(o("GFBjklqv7EW8A9tmR+_OZA#Value", "Type of Rev Share Info Table"))],
                                            _idProps: {
                                                service: r,
                                                uuid: "18"
                                            },
                                            _widgetRecordProvider: t
                                        }))), e.createElement(b, {
                                            _idProps: {
                                                service: r,
                                                uuid: "19"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        }, e.createElement(a, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                uuid: "20"
                                            },
                                            _widgetRecordProvider: t
                                        }, e.createElement(c, {
                                            extendedProperties: {
                                                style: "color: #222;"
                                            },
                                            text: [n(o("NC1H66bU50ambG0cvMKHwA#Value", "Commission"))],
                                            _idProps: {
                                                service: r,
                                                uuid: "21"
                                            },
                                            _widgetRecordProvider: t
                                        })))]
                                    }),
                                    row: new U(function(s, P) {
                                        return [e.createElement(f, {
                                            style: "table-row-even",
                                            _idProps: {
                                                service: s,
                                                uuid: "22"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: [l(i.variables.getRevShareInfoTablesAggr.dataFetchStatusAttr), l(i.variables.getRevShareInfoTablesAggr.listOut.getCurrent(P.iterationContext).revShareInfoTableAttr.netRevenueAttr)]
                                        }, e.createElement(a, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: s,
                                                uuid: "23"
                                            },
                                            _widgetRecordProvider: t
                                        }, e.createElement(_, {
                                            value: i.variables.getRevShareInfoTablesAggr.listOut.getCurrent(P.iterationContext).revShareInfoTableAttr.netRevenueAttr,
                                            _idProps: {
                                                service: s,
                                                uuid: "24"
                                            },
                                            _widgetRecordProvider: t,
                                            value_dataFetchStatus: m.Model.calculateDataFetchStatus(i.variables.getRevShareInfoTablesAggr.dataFetchStatusAttr)
                                        }))), e.createElement(f, {
                                            style: "table-row",
                                            _idProps: {
                                                service: s,
                                                uuid: "25"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: [l(i.variables.getRevShareInfoTablesAggr.dataFetchStatusAttr), l(i.variables.getRevShareInfoTablesAggr.listOut.getCurrent(P.iterationContext).revShareInfoTableAttr.commissionAttr)]
                                        }, e.createElement(a, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: s,
                                                uuid: "26"
                                            },
                                            _widgetRecordProvider: t
                                        }, e.createElement(_, {
                                            value: i.variables.getRevShareInfoTablesAggr.listOut.getCurrent(P.iterationContext).revShareInfoTableAttr.commissionAttr,
                                            _idProps: {
                                                service: s,
                                                uuid: "27"
                                            },
                                            _widgetRecordProvider: t,
                                            value_dataFetchStatus: m.Model.calculateDataFetchStatus(i.variables.getRevShareInfoTablesAggr.dataFetchStatusAttr)
                                        })))]
                                    }, E, r, "1_0")
                                },
                                _dependencies: [l(i.variables.getRevShareInfoTablesAggr.dataFetchStatusAttr)]
                            })), e.createElement(a, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: column;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(c, {
                                style: "to-subtitle",
                                text: [n(o("3k_vyXaYkUaJluG3eodJcg#Value", "Disclaimer: "))],
                                _idProps: {
                                    service: r,
                                    uuid: "29"
                                },
                                _widgetRecordProvider: t
                            }), e.createElement(v, {
                                extendedProperties: {
                                    style: "padding-inline-start: 30px",
                                    className: "disclaimer-container"
                                },
                                tag: "ul",
                                _idProps: {
                                    service: r,
                                    uuid: "30"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(v, {
                                tag: "li",
                                _idProps: {
                                    service: r,
                                    uuid: "31"
                                },
                                _widgetRecordProvider: t
                            }, n(o("bjWhOwELk0OeQLkqvuXTeA#Value", "Affiliates residing in the EU can sign up for the Revenue Share plan but can only refer clients residing outside the EU."))), e.createElement(v, {
                                tag: "li",
                                _idProps: {
                                    service: r,
                                    uuid: "32"
                                },
                                _widgetRecordProvider: t
                            }, n(o("Xvzd3UHz6kGih3LmruLScA#Value", "Affiliates will earn commission from clients who trade on both official Deriv platforms (Deriv Trader, SmartTrader, Deriv Bot, etc) and third-party platforms via Deriv API."))), e.createElement(v, {
                                tag: "li",
                                _idProps: {
                                    service: r,
                                    uuid: "33"
                                },
                                _widgetRecordProvider: t
                            }, n(o("CudTBGZIt0iacS02+KY08w#Value", "All products are entitled to generate commission except Multiplier Financials.")))))]
                        }))]
                    })
                },
                _dependencies: [l(i.variables.getRevShareInfoTablesAggr.dataFetchStatusAttr), l(i.variables.getRevShareInfoTablesAggr.listOut), l(i.variables.isLoadingVar)]
            }))
        }
    };
d(u, "View");
var y = u,
    X = y;
export {
    X as
    default
};