import {
    a as H
} from "./_oschunk-3OXJ3663.js";
import {
    a as A
} from "./_oschunk-D46IXCWP.js";
import {
    a as T
} from "./_oschunk-5UEDNY4Z.js";
import "./_oschunk-EP2LOIZ7.js";
import "./_oschunk-FMR3POBY.js";
import "./_oschunk-6AFKWBZG.js";
import "./_oschunk-N6CDNE7S.js";
import "./_oschunk-WBJVRGUU.js";
import "./_oschunk-MKEU6QPR.js";
import {
    a as f
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
    a as x,
    d as o,
    f as P,
    i as y,
    j as m,
    k as _,
    n as h,
    p as V,
    u as l
} from "./_oschunk-LWMGEL7F.js";
import "./_oschunk-KWCHY67Z.js";
import "./_oschunk-4GXKK3IG.js";
import {
    a as I,
    g as S,
    i as w
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
    c as g,
    h as M
} from "./_oschunk-QHO7QY6K.js";
var e = M(I());
var u = W,
    R = w.PlaceholderContent,
    D = w.IteratorPlaceholderContent,
    p = class p extends S.BaseWebScreen {
        static get displayName() {
            return "CommissionPlans.Turnover"
        }
        static getAttributes() {
            return {
                codeFunction: "Turnover",
                functionKey: "0a878630-745b-41d9-a638-56cd8748905d",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.CommissionPlans.Turnover.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return ["scripts/PartnersHub.UserScripts.DerivAnalytics.js"]
        }
        static getBlocks() {
            return [A, f]
        }
        get modelFactory() {
            return T
        }
        get controllerFactory() {
            return H
        }
        get title() {
            return S.BaseWebScreen.getTranslation("MIaHClt02UGmOFbNh0iQXQ#Title", "Turnover")
        }
        internalRender() {
            let i = this.model,
                v = this.controller,
                r = this.idService,
                C = v.validationService,
                t = this.widgetsRecordProvider,
                b = v.callContext(),
                F = p.ifWidget,
                n = p.textWidget,
                a = p.asPrimitiveValue,
                d = p.getTranslation,
                O = this;
            return e.createElement("div", this.getRootNodeProperties(), e.createElement(A, {
                getOwnerSpan: g(function() {
                    return O.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: g(function() {
                    return O.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: g(function(s) {
                        v.handleError(s)
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
                    placeholder1: new R(function() {
                        return [e.createElement(o, {
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
                        }, F(i.variables.isLoadingVar, !1, this, function() {
                            return [e.createElement(f, {
                                getOwnerSpan: g(function() {
                                    return O.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: g(function() {
                                    return O.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    IsLoading: i.variables.isLoadingVar
                                },
                                events: {
                                    _handleError: g(function(s) {
                                        v.handleError(s)
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
                                    content: R.Empty
                                },
                                _dependencies: []
                            })]
                        }, function() {
                            return [e.createElement(o, {
                                align: 0,
                                animate: !1,
                                style: "partners-hub-title-container",
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    name: "TurnoverTitle"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(o, {
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
                            }, e.createElement(l, {
                                style: "cp-title",
                                text: [n(d("rQd397MKsEWbfcZG7092ww#Value", "Turnover"))],
                                _idProps: {
                                    service: r,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: t
                            })), e.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: g(function() {
                                        var s = b.clone();
                                        v.onClick$Action(v.callContext(s))
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
                                image: u.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.closenormal.png"),
                                type: 0,
                                _idProps: {
                                    service: r,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: t
                            }))), e.createElement(o, {
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
                                image: u.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.info_black.svg"),
                                type: 0,
                                _idProps: {
                                    service: r,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: t
                            }), e.createElement(V, {
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
                            }, e.createElement(l, {
                                style: "to-description",
                                text: [n(d("7JYPvZDGG0WOQKfHWo5Dag#Value", "If your Turnover plan isn't activated, contact your account manager."))],
                                _idProps: {
                                    service: r,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: t
                            }))), e.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: column; gap: 8px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(l, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                style: "to-subtitle",
                                text: [n(d("rvZrk7_KUEyjPqHS+gd_9Q#Value", "Options"))],
                                _idProps: {
                                    service: r,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: t
                            }), e.createElement(l, {
                                extendedProperties: {
                                    style: "font-weight: 400; line-height: 22px;"
                                },
                                text: [n(d("Vq0ugYT1TEOgWNZ9anjvVA#Value", "Earn based on the type of Option your clients trade."))],
                                _idProps: {
                                    service: r,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: t
                            })), e.createElement(o, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(y, {
                                showHeader: !0,
                                source: i.variables.getOptionsAggr.listOut,
                                style: "table",
                                styleHeader: "table-header",
                                styleRow: "table-row to-description",
                                _idProps: {
                                    service: r,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: t,
                                source_dataFetchStatus: u.Model.calculateDataFetchStatus(i.variables.getOptionsAggr.dataFetchStatusAttr),
                                placeholders: {
                                    headerRow: new R(function() {
                                        return [e.createElement(m, {
                                            style: "header-color",
                                            _idProps: {
                                                service: r,
                                                uuid: "17"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        }, e.createElement(o, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                uuid: "18"
                                            },
                                            _widgetRecordProvider: t
                                        }, e.createElement(l, {
                                            extendedProperties: {
                                                style: "color: #222;"
                                            },
                                            text: [n(d("SzdKVyUs+0uIkBrIDMjblw#Value", "Type of Option"))],
                                            _idProps: {
                                                service: r,
                                                uuid: "19"
                                            },
                                            _widgetRecordProvider: t
                                        }))), e.createElement(m, {
                                            _idProps: {
                                                service: r,
                                                uuid: "20"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        }, e.createElement(o, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: r,
                                                uuid: "21"
                                            },
                                            _widgetRecordProvider: t
                                        }, e.createElement(l, {
                                            extendedProperties: {
                                                style: "color: #222;"
                                            },
                                            text: [n(d("JU9js7cTyEm_QnMhYCVO3g#Value", "Commission"))],
                                            _idProps: {
                                                service: r,
                                                uuid: "22"
                                            },
                                            _widgetRecordProvider: t
                                        })))]
                                    }),
                                    row: new D(function(s, c) {
                                        return [e.createElement(_, {
                                            style: "table-row-even",
                                            _idProps: {
                                                service: s,
                                                uuid: "23"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: [a(i.variables.getOptionsAggr.dataFetchStatusAttr), a(i.variables.getOptionsAggr.listOut.getCurrent(c.iterationContext).optionsAttr.typeoOptionAttr)]
                                        }, e.createElement(o, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: s,
                                                uuid: "24"
                                            },
                                            _widgetRecordProvider: t
                                        }, e.createElement(P, {
                                            value: i.variables.getOptionsAggr.listOut.getCurrent(c.iterationContext).optionsAttr.typeoOptionAttr,
                                            _idProps: {
                                                service: s,
                                                uuid: "25"
                                            },
                                            _widgetRecordProvider: t,
                                            value_dataFetchStatus: u.Model.calculateDataFetchStatus(i.variables.getOptionsAggr.dataFetchStatusAttr)
                                        }))), e.createElement(_, {
                                            style: "table-row",
                                            _idProps: {
                                                service: s,
                                                uuid: "26"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: [a(i.variables.getOptionsAggr.dataFetchStatusAttr), a(i.variables.getOptionsAggr.listOut.getCurrent(c.iterationContext).optionsAttr.commissionAttr)]
                                        }, e.createElement(o, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: s,
                                                uuid: "27"
                                            },
                                            _widgetRecordProvider: t
                                        }, e.createElement(P, {
                                            value: i.variables.getOptionsAggr.listOut.getCurrent(c.iterationContext).optionsAttr.commissionAttr,
                                            _idProps: {
                                                service: s,
                                                uuid: "28"
                                            },
                                            _widgetRecordProvider: t,
                                            value_dataFetchStatus: u.Model.calculateDataFetchStatus(i.variables.getOptionsAggr.dataFetchStatusAttr)
                                        })))]
                                    }, b, r, "1_0")
                                },
                                _dependencies: [a(i.variables.getOptionsAggr.dataFetchStatusAttr)]
                            })), e.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: column; gap: 8px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "29"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(l, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                style: "to-subtitle",
                                text: [n(d("BiZlHUo9Q0uNvhnLL2IlbQ#Value", "Digital Options"))],
                                _idProps: {
                                    service: r,
                                    uuid: "30"
                                },
                                _widgetRecordProvider: t
                            }), e.createElement(l, {
                                extendedProperties: {
                                    style: "font-weight: 400; line-height: 22px;"
                                },
                                text: [n(d("QV5uuy5nCUiP2iFo6cckoQ#Value", "Earn based on the payout probability of your clients contracts."))],
                                _idProps: {
                                    service: r,
                                    uuid: "31"
                                },
                                _widgetRecordProvider: t
                            })), e.createElement(o, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "text-align: center;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: r,
                                    uuid: "32"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(y, {
                                showHeader: !0,
                                source: i.variables.getDigitalOptionsAggr.listOut,
                                style: "table",
                                styleHeader: "table-header",
                                styleRow: "table-row to-description",
                                _idProps: {
                                    service: r,
                                    uuid: "33"
                                },
                                _widgetRecordProvider: t,
                                source_dataFetchStatus: u.Model.calculateDataFetchStatus(i.variables.getDigitalOptionsAggr.dataFetchStatusAttr),
                                placeholders: {
                                    headerRow: new R(function() {
                                        return [e.createElement(m, {
                                            extendedProperties: {
                                                style: "color: #222; text-align: center;"
                                            },
                                            sortAttribute: "DigitalOptions.Probability",
                                            style: "header-color",
                                            _idProps: {
                                                service: r,
                                                uuid: "34"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        }, n(d("V0IQMLaXMkCM9B2Bsaw1vA#Value", "Probability"))), e.createElement(m, {
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            sortAttribute: "DigitalOptions.Commission",
                                            style: "header-color",
                                            _idProps: {
                                                service: r,
                                                uuid: "35"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        }, e.createElement(l, {
                                            extendedProperties: {
                                                style: "color: #222;"
                                            },
                                            text: [n(d("2Tc4EkW8Q0uywU2ddVf5ZQ#Value", "Commission"))],
                                            _idProps: {
                                                service: r,
                                                uuid: "36"
                                            },
                                            _widgetRecordProvider: t
                                        }))]
                                    }),
                                    row: new D(function(s, c) {
                                        return [e.createElement(_, {
                                            _idProps: {
                                                service: s,
                                                uuid: "37"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: [a(i.variables.getDigitalOptionsAggr.dataFetchStatusAttr), a(i.variables.getDigitalOptionsAggr.listOut.getCurrent(c.iterationContext).digitalOptionsAttr.probabilityAttr)]
                                        }, e.createElement(P, {
                                            value: i.variables.getDigitalOptionsAggr.listOut.getCurrent(c.iterationContext).digitalOptionsAttr.probabilityAttr,
                                            _idProps: {
                                                service: s,
                                                uuid: "38"
                                            },
                                            _widgetRecordProvider: t,
                                            value_dataFetchStatus: u.Model.calculateDataFetchStatus(i.variables.getDigitalOptionsAggr.dataFetchStatusAttr)
                                        })), e.createElement(_, {
                                            _idProps: {
                                                service: s,
                                                uuid: "39"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: [a(i.variables.getDigitalOptionsAggr.dataFetchStatusAttr), a(i.variables.getDigitalOptionsAggr.listOut.getCurrent(c.iterationContext).digitalOptionsAttr.commissionAttr)]
                                        }, e.createElement(P, {
                                            value: i.variables.getDigitalOptionsAggr.listOut.getCurrent(c.iterationContext).digitalOptionsAttr.commissionAttr,
                                            _idProps: {
                                                service: s,
                                                uuid: "40"
                                            },
                                            _widgetRecordProvider: t,
                                            value_dataFetchStatus: u.Model.calculateDataFetchStatus(i.variables.getDigitalOptionsAggr.dataFetchStatusAttr)
                                        }))]
                                    }, b, r, "2_0")
                                },
                                _dependencies: [a(i.variables.getDigitalOptionsAggr.dataFetchStatusAttr)]
                            })), e.createElement(o, {
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
                                    uuid: "41"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(l, {
                                style: "to-subtitle",
                                text: [n(d("W2ZKpumJr0m8cVXRaEMX2g#Value", "Disclaimer: "))],
                                _idProps: {
                                    service: r,
                                    uuid: "42"
                                },
                                _widgetRecordProvider: t
                            }), e.createElement(x, {
                                extendedProperties: {
                                    style: "padding-inline-start: 30px"
                                },
                                tag: "ul",
                                _idProps: {
                                    service: r,
                                    uuid: "43"
                                },
                                _widgetRecordProvider: t
                            }, e.createElement(x, {
                                tag: "li",
                                _idProps: {
                                    service: r,
                                    uuid: "44"
                                },
                                _widgetRecordProvider: t
                            }, n(d("YMqHHRVn+0ymuMDX+Gg42g#Value", "Affiliates residing in the EU can sign up for the Turnover plan but can only refer clients residing outside the EU.")))))]
                        }))]
                    })
                },
                _dependencies: [a(i.variables.getDigitalOptionsAggr.listOut), a(i.variables.getDigitalOptionsAggr.dataFetchStatusAttr), a(i.variables.getOptionsAggr.dataFetchStatusAttr), a(i.variables.getOptionsAggr.listOut), a(i.variables.isLoadingVar)]
            }))
        }
    };
g(p, "View");
var E = p,
    G = E;
export {
    G as
    default
};