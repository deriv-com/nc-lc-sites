import {
    a as I
} from "./_oschunk-CG5G6CEJ.js";
import {
    a as H
} from "./_oschunk-HQC2F5UY.js";
import {
    a as O
} from "./_oschunk-D46IXCWP.js";
import "./_oschunk-EP2LOIZ7.js";
import "./_oschunk-FMR3POBY.js";
import "./_oschunk-6AFKWBZG.js";
import "./_oschunk-N6CDNE7S.js";
import "./_oschunk-WBJVRGUU.js";
import "./_oschunk-MKEU6QPR.js";
import {
    a as w
} from "./_oschunk-JNIYO5MF.js";
import "./_oschunk-I6UUKQBK.js";
import "./_oschunk-C75U7DRJ.js";
import "./_oschunk-JHXZLUP2.js";
import "./_oschunk-F2QOJGMT.js";
import "./_oschunk-IYRDNBIZ.js";
import "./_oschunk-6BFNTJQ7.js";
import "./_oschunk-VDU6C3OQ.js";
import "./_oschunk-TWAMG3Q4.js";
import "./_oschunk-LDY7XNSJ.js";
import {
    a as v,
    d as a,
    f as _,
    i as A,
    j as f,
    k as b,
    n as h,
    p as T,
    u as c
} from "./_oschunk-LWMGEL7F.js";
import "./_oschunk-KWCHY67Z.js";
import "./_oschunk-4GXKK3IG.js";
import {
    a as D,
    g as R,
    i as S
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-QPRDDNSX.js";
import "./_oschunk-5VU7DWFQ.js";
import "./_oschunk-RILYVCVH.js";
import "./_oschunk-BDI2RWOA.js";
import "./_oschunk-P3RPGEI5.js";
import "./_oschunk-7WCOCYFU.js";
import {
    ia as W
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as d,
    h as F
} from "./_oschunk-QHO7QY6K.js";
var e = F(D());
var m = W,
    x = S.PlaceholderContent,
    L = S.IteratorPlaceholderContent,
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
                E = g.validationService,
                t = this.widgetsRecordProvider,
                C = g.callContext(),
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
                    validationService: E
                },
                _idProps: {
                    service: r,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    placeholder1: new x(function() {
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
                                    validationService: E
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
                                text: [n(o("fyasCJmTFESaYvzYAMTkGw#Value", "RevShare"))],
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
                                        var s = C.clone();
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
                                text: [n(o("GHrOsZ8F3EWC92FMCErTHA#Value", "If your RevShare plan isn't activated, contact your account manager."))],
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
                                text: [n(o("Kv0jmjcLjEG3Q_daKvvjCg#Value", "Earn based on the monthly net revenue generated by your clients."))],
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
                            }, e.createElement(A, {
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
                                        return [e.createElement(f, {
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
                                            text: [n(o("GjjixG_mVEG8pXMvW856Ug#Value", "Type of Rev Share Info Table"))],
                                            _idProps: {
                                                service: r,
                                                uuid: "18"
                                            },
                                            _widgetRecordProvider: t
                                        }))), e.createElement(f, {
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
                                            text: [n(o("fQBNLmH530KRPlo92hogRg#Value", "Commission"))],
                                            _idProps: {
                                                service: r,
                                                uuid: "21"
                                            },
                                            _widgetRecordProvider: t
                                        })))]
                                    }),
                                    row: new L(function(s, P) {
                                        return [e.createElement(b, {
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
                                        }))), e.createElement(b, {
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
                                    }, C, r, "1_0")
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
                                text: [n(o("cka18ZorJEODoIkO6XH2Ag#Value", "Disclaimer: "))],
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
                            }, n(o("x3UzWLDPX0ifTRjS1itKnw#Value", "Affiliates residing in the EU can sign up for the Revenue Share plan but can only refer clients residing outside the EU."))), e.createElement(v, {
                                tag: "li",
                                _idProps: {
                                    service: r,
                                    uuid: "32"
                                },
                                _widgetRecordProvider: t
                            }, n(o("vFNh85XtSEKQyd5REZ78yw#Value", "Affiliates will earn commission from clients who trade on both official Deriv platforms (Deriv Trader, SmartTrader, Deriv Bot, etc) and third-party platforms via Deriv API."))), e.createElement(v, {
                                tag: "li",
                                _idProps: {
                                    service: r,
                                    uuid: "33"
                                },
                                _widgetRecordProvider: t
                            }, n(o("Dr0vIick4kufvS_3Ja6xUw#Value", "All products are entitled to generate commission except Multiplier Financials.")))))]
                        }))]
                    })
                },
                _dependencies: [l(i.variables.getRevShareInfoTablesAggr.dataFetchStatusAttr), l(i.variables.getRevShareInfoTablesAggr.listOut), l(i.variables.isLoadingVar)]
            }))
        }
    };
d(u, "View");
var y = u,
    Q = y;
export {
    Q as
    default
};