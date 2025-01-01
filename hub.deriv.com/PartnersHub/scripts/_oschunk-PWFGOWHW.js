import {
    a as _
} from "./_oschunk-WGVN77AS.js";
import {
    a as I
} from "./_oschunk-27AA5OA4.js";
import {
    a as O
} from "./_oschunk-3K3XDNHJ.js";
import "./_oschunk-X5K54WGF.js";
import "./_oschunk-SFFUATHH.js";
import {
    b as D
} from "./_oschunk-ZL2HTVZN.js";
import "./_oschunk-P2MIYWR2.js";
import {
    a as F
} from "./_oschunk-6AFKWBZG.js";
import "./_oschunk-N6CDNE7S.js";
import "./_oschunk-WBJVRGUU.js";
import "./_oschunk-MKEU6QPR.js";
import {
    a as m
} from "./_oschunk-JNIYO5MF.js";
import "./_oschunk-I6UUKQBK.js";
import "./_oschunk-F2QOJGMT.js";
import "./_oschunk-IYRDNBIZ.js";
import "./_oschunk-6BFNTJQ7.js";
import "./_oschunk-VDU6C3OQ.js";
import "./_oschunk-TWAMG3Q4.js";
import "./_oschunk-LDY7XNSJ.js";
import {
    d as u,
    f as P,
    g as p,
    m as f
} from "./_oschunk-LWMGEL7F.js";
import "./_oschunk-KWCHY67Z.js";
import "./_oschunk-4GXKK3IG.js";
import {
    a as R,
    g as C,
    i as b
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-QPRDDNSX.js";
import "./_oschunk-5VU7DWFQ.js";
import "./_oschunk-RILYVCVH.js";
import "./_oschunk-BDI2RWOA.js";
import "./_oschunk-P3RPGEI5.js";
import "./_oschunk-7WCOCYFU.js";
import {
    ia as h
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s,
    h as E
} from "./_oschunk-QHO7QY6K.js";
var t = E(R());
var o = h,
    w = b.PlaceholderContent,
    x = b.IteratorPlaceholderContent,
    g = class g extends C.BaseWebScreen {
        static get displayName() {
            return "CFDs.Plans"
        }
        static getAttributes() {
            return {
                codeFunction: "Plans",
                functionKey: "1608bde4-be09-4000-9bb7-3da3bae7fc7c",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.CFDs.Plans.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [F, D, m, _]
        }
        get modelFactory() {
            return I
        }
        get controllerFactory() {
            return O
        }
        get title() {
            return C.BaseWebScreen.getTranslation("5L0IFgm+AECbtz2juuf8fA#Title", "Plans")
        }
        internalRender() {
            let e = this.model,
                d = this.controller,
                n = this.idService,
                A = d.validationService,
                r = this.widgetsRecordProvider,
                v = d.callContext(),
                B = g.ifWidget,
                T = g.textWidget,
                l = g.asPrimitiveValue,
                W = g.getTranslation,
                c = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(F, {
                getOwnerSpan: s(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HasFixedHeader: !0
                },
                events: {
                    _handleError: s(function(a) {
                        d.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: A
                },
                _idProps: {
                    service: n,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    mainContent: new w(function() {
                        return [t.createElement(u, {
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
                                service: n,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, t.createElement(D, {
                            getOwnerSpan: s(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ShowLeftButton: !0,
                                Title: e.variables.titleIn
                            },
                            events: {
                                _handleError: s(function(a) {
                                    d.handleError(a)
                                }, "_handleError"),
                                rightButtonAction$Action: s(function() {
                                    var a = v.clone();
                                    d.onClickCloseButton$Action(d.callContext(a))
                                }, "rightButtonAction$Action"),
                                leftButtonAction$Action: s(function() {
                                    var a = v.clone();
                                    d.onClickBackButton$Action(d.callContext(a))
                                }, "leftButtonAction$Action")
                            },
                            _validationProps: {
                                validationService: A
                            },
                            _idProps: {
                                service: n,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }), t.createElement(m, {
                            getOwnerSpan: s(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsLoading: e.variables.isLoadingVar,
                                ClassName: "gap"
                            },
                            events: {
                                _handleError: s(function(a) {
                                    d.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: A
                            },
                            _idProps: {
                                service: n,
                                uuid: "3",
                                alias: "3"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                content: new w(function() {
                                    return [B(e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.length > 2, !1, this, function() {
                                        return [t.createElement(u, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "display: flex; flex-direction: column; gap: 16px;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: n,
                                                uuid: "4"
                                            },
                                            _widgetRecordProvider: r
                                        }, t.createElement(u, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: n,
                                                uuid: "5"
                                            },
                                            _widgetRecordProvider: r
                                        }, t.createElement(P, {
                                            style: "to-description",
                                            value: o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("y+zwjIEM6EG8K95g4EkklA#ValueExpression.-486072707.1", "Earn when your clients trade on a ") + e.variables.titleIn + o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("y+zwjIEM6EG8K95g4EkklA#ValueExpression.153852865.1", " account."),
                                            _idProps: {
                                                service: n,
                                                uuid: "6"
                                            },
                                            _widgetRecordProvider: r
                                        }))), t.createElement(p, {
                                            animateItems: !1,
                                            extendedProperties: {
                                                "disable-virtualization": "True"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            mode: 0,
                                            source: e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut,
                                            style: e.getCachedValue(n.getId("8YmvIp3dGUua+oSKT8ESwA.Style"), function() {
                                                return "action-box-container " + (e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.length <= 4 ? "two-column-container" : "three-column-container")
                                            }, function() {
                                                return e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.length
                                            }),
                                            tag: "div",
                                            _idProps: {
                                                service: n,
                                                uuid: "7"
                                            },
                                            _widgetRecordProvider: r,
                                            source_dataFetchStatus: o.Model.calculateDataFetchStatus(e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr),
                                            style_dataFetchStatus: o.Model.calculateDataFetchStatus(e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr),
                                            placeholders: {
                                                content: new x(function(a, i) {
                                                    return [t.createElement(u, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedEvents: {
                                                            onClick: s(function() {
                                                                var S = i.clone();
                                                                d.onClickActionBox$Action(e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(i.iterationContext).cFDsAllSubPlansAttr.idAttr, e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(i.iterationContext).commissionTypeAttr.typeAttr, e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(i.iterationContext).cFDsAllSubPlansAttr.nameAttr, d.callContext(S))
                                                            }, "onClick")
                                                        },
                                                        style: "action-box",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: a,
                                                            uuid: "8"
                                                        },
                                                        _widgetRecordProvider: r,
                                                        _dependencies: [l(e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr), l(e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(i.iterationContext).cFDsAllSubPlansAttr.nameAttr)]
                                                    }, t.createElement(P, {
                                                        value: e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(i.iterationContext).cFDsAllSubPlansAttr.nameAttr,
                                                        _idProps: {
                                                            service: a,
                                                            uuid: "9"
                                                        },
                                                        _widgetRecordProvider: r,
                                                        value_dataFetchStatus: o.Model.calculateDataFetchStatus(e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr)
                                                    }), t.createElement(f, {
                                                        gridProperties: {
                                                            classes: "ThemeGrid_MarginGutter"
                                                        },
                                                        icon: "angle-right",
                                                        iconSize: 1,
                                                        style: "icon",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: a,
                                                            uuid: "10"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }))]
                                                }, v, n, "1")
                                            },
                                            _dependencies: [l(e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr)]
                                        })]
                                    }, function() {
                                        return [t.createElement(u, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: n,
                                                uuid: "11"
                                            },
                                            _widgetRecordProvider: r
                                        }, t.createElement(P, {
                                            style: "to-description",
                                            value: o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("bDkZC7_u4UCx5mkeEqXmZA#ValueExpression.-1076200185.1", "All commission rates are quoted in USD, per round trade."),
                                            _idProps: {
                                                service: n,
                                                uuid: "12"
                                            },
                                            _widgetRecordProvider: r
                                        })), t.createElement(p, {
                                            animateItems: !0,
                                            extendedProperties: {
                                                "disable-virtualization": "True",
                                                style: "display: flex; flex-direction: column; gap: 16px;"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            mode: 0,
                                            source: e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut,
                                            style: "list list-group",
                                            tag: "div",
                                            _idProps: {
                                                service: n,
                                                uuid: "13"
                                            },
                                            _widgetRecordProvider: r,
                                            source_dataFetchStatus: o.Model.calculateDataFetchStatus(e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr),
                                            placeholders: {
                                                content: new x(function(a, i) {
                                                    return [t.createElement(u, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "display: flex; flex-direction: column; gap: 16px;"
                                                        },
                                                        visible: !0,
                                                        _idProps: {
                                                            service: a,
                                                            uuid: "14"
                                                        },
                                                        _widgetRecordProvider: r,
                                                        _dependencies: [l(e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr), l(e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(i.iterationContext).commissionTypeAttr.typeAttr), l(e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(i.iterationContext).cFDsAllSubPlansAttr.idAttr), l(e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(i.iterationContext).cFDsAllSubPlansAttr.nameAttr)]
                                                    }, t.createElement(P, {
                                                        style: "sub-title",
                                                        value: e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(i.iterationContext).cFDsAllSubPlansAttr.nameAttr,
                                                        _idProps: {
                                                            service: a,
                                                            uuid: "15"
                                                        },
                                                        _widgetRecordProvider: r,
                                                        value_dataFetchStatus: o.Model.calculateDataFetchStatus(e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr)
                                                    }), t.createElement(_, {
                                                        getOwnerSpan: s(function() {
                                                            return c.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: s(function() {
                                                            return c.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            PlanId: e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(i.iterationContext).cFDsAllSubPlansAttr.idAttr,
                                                            _planIdInDataFetchStatus: o.Model.calculateDataFetchStatus(e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr),
                                                            CommissionType: e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut.getCurrent(i.iterationContext).commissionTypeAttr.typeAttr,
                                                            _commissionTypeInDataFetchStatus: o.Model.calculateDataFetchStatus(e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr),
                                                            IsSubPlan: !0
                                                        },
                                                        events: {
                                                            _handleError: s(function(S) {
                                                                d.handleError(S)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: A
                                                        },
                                                        _idProps: {
                                                            service: a,
                                                            uuid: "16",
                                                            alias: "4"
                                                        },
                                                        _widgetRecordProvider: r,
                                                        _dependencies: []
                                                    }))]
                                                }, v, n, "2")
                                            },
                                            _dependencies: [l(e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr)]
                                        })]
                                    })]
                                })
                            },
                            _dependencies: [l(e.variables.titleIn), l(e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr), l(e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut)]
                        }))]
                    })
                },
                _dependencies: [l(e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.dataFetchStatusAttr), l(e.variables.getCFDsAllSubPlansByCFDsAllPlanIdAggr.listOut), l(e.variables.isLoadingVar), l(e.variables.titleIn)]
            }))
        }
    };
s(g, "View");
var y = g,
    q = y;
export {
    q as
    default
};