import {
    a as O
} from "./_oschunk-J7J5D6JH.js";
import {
    a as R
} from "./_oschunk-6Y6HK4H4.js";
import {
    d as P,
    f as h,
    i as p,
    j as y,
    k as F,
    u as H
} from "./_oschunk-5HXBKFJV.js";
import {
    a as w
} from "./_oschunk-6WALBPGV.js";
import {
    a as W,
    g as I,
    i as D
} from "./_oschunk-2Q3BG5XZ.js";
import {
    a as C,
    p as E
} from "./_oschunk-FZ6FUHBV.js";
import {
    Me as _
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as g
} from "./_oschunk-5KJVGEL7.js";
import {
    c as d,
    h as V
} from "./_oschunk-QHO7QY6K.js";
var o = V(W());
var k = {
        "AiMBRsM2QEmookT5xpWXPg#Value": "\u0627\u0644\u0623\u0635\u0644"
    },
    N = {
        "AiMBRsM2QEmookT5xpWXPg#Value": "Verm\xF6genswert"
    },
    M = {
        "AiMBRsM2QEmookT5xpWXPg#Value": "Tipo de Opci\xF3n"
    },
    G = {
        "AiMBRsM2QEmookT5xpWXPg#Value": "Actif"
    },
    Q = {
        "AiMBRsM2QEmookT5xpWXPg#Value": "Asset"
    },
    X = {
        "AiMBRsM2QEmookT5xpWXPg#Value": "Aktywa"
    },
    z = {
        "AiMBRsM2QEmookT5xpWXPg#Value": "Ativo"
    },
    J = {
        "AiMBRsM2QEmookT5xpWXPg#Value": "\u0410\u043A\u0442\u0438\u0432"
    },
    B = {
        "ar-001": {
            translations: k,
            isRTL: !0
        },
        "de-DE": {
            translations: N,
            isRTL: !1
        },
        "es-ES": {
            translations: M,
            isRTL: !1
        },
        "fr-FR": {
            translations: G,
            isRTL: !1
        },
        "it-IT": {
            translations: Q,
            isRTL: !1
        },
        "pl-PL": {
            translations: X,
            isRTL: !1
        },
        "pt-PT": {
            translations: z,
            isRTL: !1
        },
        "ru-RU": {
            translations: J,
            isRTL: !1
        }
    };
var s = g; {
    let i = class i extends s.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, B);
            var b = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh: -1,
                getCFDsPlansTableDataByCFDsAllPlanId$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh: [],
                getCFDsPlansTableDataByCFDsAllPlanId$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !0
        }
        get getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh() {
            return this.hasOwnProperty("_getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh") || (this._getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh = function() {
                var e = function(r, t, a) {
                    var n = this.model,
                        l = this.controller,
                        a = l.callContext(a);
                    return l.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCFDsPlansTableDataByCFDsAllSubPlanId", "screenservices/PartnersHub/CFDs/PlanDetailsTable/ScreenDataSetGetCFDsPlansTableDataByCFDsAllSubPlanId", "loLIe5JEKYIrmp278twNnw", r, t, function(c) {
                        n.variables.getCFDsPlansTableDataByCFDsAllSubPlanIdAggr.dataFetchStatusAttr = c
                    }, function(c) {
                        n.variables.getCFDsPlansTableDataByCFDsAllSubPlanIdAggr.replaceWith(s.DataConversion.ServerDataConverter.from(c, n.variables.getCFDsPlansTableDataByCFDsAllSubPlanIdAggr.constructor))
                    }, void 0, void 0, void 0, a, C, !0).then(function() {
                        l._onAfterFetchSubPlan$Action(l.callContext(a))
                    })
                }.bind(this);
                return s.Logger.startActiveSpan("GetCFDsPlansTableDataByCFDsAllSubPlanId", function(r) {
                    return r && (r.setAttribute("code.function", "GetCFDsPlansTableDataByCFDsAllSubPlanId"), r.setAttribute("outsystems.function.key", "1509782f-a37a-4813-a46e-b7b91c092c47"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), s.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        r && r.end()
                    })
                }, 0)
            }), this._getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh
        }
        set getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh(e) {
            this._getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh = e
        }
        get getCFDsPlansTableDataByCFDsAllPlanId$AggrRefresh() {
            return this.hasOwnProperty("_getCFDsPlansTableDataByCFDsAllPlanId$AggrRefresh") || (this._getCFDsPlansTableDataByCFDsAllPlanId$AggrRefresh = function() {
                var e = function(r, t, a) {
                    var n = this.model,
                        l = this.controller,
                        a = l.callContext(a);
                    return l.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCFDsPlansTableDataByCFDsAllPlanId", "screenservices/PartnersHub/CFDs/PlanDetailsTable/ScreenDataSetGetCFDsPlansTableDataByCFDsAllPlanId", "MXLFQfrLREAGPDL9oIBz+g", r, t, function(c) {
                        n.variables.getCFDsPlansTableDataByCFDsAllPlanIdAggr.dataFetchStatusAttr = c
                    }, function(c) {
                        n.variables.getCFDsPlansTableDataByCFDsAllPlanIdAggr.replaceWith(s.DataConversion.ServerDataConverter.from(c, n.variables.getCFDsPlansTableDataByCFDsAllPlanIdAggr.constructor))
                    }, void 0, void 0, void 0, a, C, !0).then(function() {
                        return l._onAfterFetchAllPlan$Action(l.callContext(a))
                    })
                }.bind(this);
                return s.Logger.startActiveSpan("GetCFDsPlansTableDataByCFDsAllPlanId", function(r) {
                    return r && (r.setAttribute("code.function", "GetCFDsPlansTableDataByCFDsAllPlanId"), r.setAttribute("outsystems.function.key", "ae77d259-63cd-423f-96bd-d8ce2eae05ba"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), s.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        r && r.end()
                    })
                }, 0)
            }), this._getCFDsPlansTableDataByCFDsAllPlanId$AggrRefresh
        }
        set getCFDsPlansTableDataByCFDsAllPlanId$AggrRefresh(e) {
            this._getCFDsPlansTableDataByCFDsAllPlanId$AggrRefresh = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = ["getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh", "getCFDsPlansTableDataByCFDsAllPlanId$AggrRefresh"]), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    b = this.idService;
                return s.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    return n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "1bb88eaa-297f-452b-a5ee-2b9f8fe07d36"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), s.Flow.executeAsyncFlow(function() {
                            return s.Flow.executeSequence(function() {
                                if (r.variables.isSubPlanIn) {
                                    var l = t.getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh(50, 0, e);
                                    return r.flush(), l
                                } else {
                                    var l = t.getCFDsPlansTableDataByCFDsAllPlanId$AggrRefresh(50, 0, e);
                                    return r.flush(), l
                                }
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _onAfterFetchSubPlan$Action() {
            return this.hasOwnProperty("__onAfterFetchSubPlan$Action") || (this.__onAfterFetchSubPlan$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    b = this.idService;
                return s.Logger.startActiveSpan("OnAfterFetchSubPlan", function(n) {
                    n && (n.setAttribute("code.function", "OnAfterFetchSubPlan"), n.setAttribute("outsystems.function.key", "8952edfb-4d36-47c1-922a-05257e467452"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnAfterFetchSubPlan"), e = t.callContext(e), r.variables.dataVar = s.DataConversion.JSConversions.typeConvertRecordList(r.variables.getCFDsPlansTableDataByCFDsAllSubPlanIdAggr.listOut, new _, function(l, a) {
                            return a = l.cFDsPlansTableDataAttr, a
                        }), r.variables.isLoadingVar = !1
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onAfterFetchSubPlan$Action
        }
        set _onAfterFetchSubPlan$Action(e) {
            this.__onAfterFetchSubPlan$Action = e
        }
        get _onAfterFetchAllPlan$Action() {
            return this.hasOwnProperty("__onAfterFetchAllPlan$Action") || (this.__onAfterFetchAllPlan$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    b = this.idService;
                return s.Logger.startActiveSpan("OnAfterFetchAllPlan", function(n) {
                    return n && (n.setAttribute("code.function", "OnAfterFetchAllPlan"), n.setAttribute("outsystems.function.key", "c84c0f9e-798b-492a-a1e6-18415501bed6"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnAfterFetchAllPlan"), e = t.callContext(e), s.Flow.executeAsyncFlow(function() {
                            return s.Flow.executeSequence(function() {
                                if (r.variables.isSubPlanIn) {
                                    var l = t.getCFDsPlansTableDataByCFDsAllSubPlanId$AggrRefresh(50, 0, e);
                                    return r.flush(), l
                                } else r.variables.dataVar = s.DataConversion.JSConversions.typeConvertRecordList(r.variables.getCFDsPlansTableDataByCFDsAllPlanIdAggr.listOut, new _, function(a, c) {
                                    return c = a.cFDsPlansTableDataAttr, c
                                }), r.variables.isLoadingVar = !1
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onAfterFetchAllPlan$Action
        }
        set _onAfterFetchAllPlan$Action(e) {
            this.__onAfterFetchAllPlan$Action = e
        }
        onParametersChanged$Action(e) {
            var r = this.controller;
            return s.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "1bb88eaa-297f-452b-a5ee-2b9f8fe07d36"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onParametersChanged$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onAfterFetchSubPlan$Action(e) {
            var r = this.controller;
            return s.Logger.startActiveSpan("OnAfterFetchSubPlan__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnAfterFetchSubPlan"), t.setAttribute("outsystems.function.key", "8952edfb-4d36-47c1-922a-05257e467452"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onAfterFetchSubPlan$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onAfterFetchAllPlan$Action(e) {
            var r = this.controller;
            return s.Logger.startActiveSpan("OnAfterFetchAllPlan__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnAfterFetchAllPlan"), t.setAttribute("outsystems.function.key", "c84c0f9e-798b-492a-a1e6-18415501bed6"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onAfterFetchAllPlan$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    b = this.idService;
                return r.onParametersChanged$Action(e)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return E.defaultTimeout
        }
    };
    d(i, "ControllerInner");
    let v = i;
    x = v
}
var x, $ = new s.Controller.ControllerFactory(x, w);
var K = g,
    L = D.PlaceholderContent,
    q = D.IteratorPlaceholderContent,
    f = class f extends I.BaseWebBlock {
        static get displayName() {
            return "CFDs.PlanDetailsTable"
        }
        static getAttributes() {
            return {
                codeFunction: "PlanDetailsTable",
                functionKey: "6b4795a8-34a7-46cd-95e9-60a753a1af43",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.CFDs.PlanDetailsTable.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [R]
        }
        get modelFactory() {
            return O
        }
        get controllerFactory() {
            return $
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                m = this.controller,
                e = this.idService,
                r = m.validationService,
                t = this.widgetsRecordProvider,
                b = m.callContext(),
                n = f.ifWidget,
                l = f.textWidget,
                a = f.asPrimitiveValue,
                c = f.getTranslation,
                T = this;
            return o.createElement("div", this.getRootNodeProperties(), o.createElement(R, {
                getOwnerSpan: d(function() {
                    return T.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: d(function() {
                    return T.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsLoading: i.variables.isLoadingVar
                },
                events: {
                    _handleError: d(function(u) {
                        m.handleError(u)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new L(function() {
                        return [o.createElement(p, {
                            showHeader: !0,
                            source: i.variables.dataVar,
                            style: "table",
                            styleHeader: "table-header",
                            styleRow: "table-row to-description",
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                headerRow: new L(function() {
                                    return [o.createElement(y, {
                                        style: "header-color",
                                        _idProps: {
                                            service: e,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: []
                                    }, o.createElement(P, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: center;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: t
                                    }, o.createElement(H, {
                                        extendedProperties: {
                                            style: "color: #222;"
                                        },
                                        text: [l(c("AiMBRsM2QEmookT5xpWXPg#Value", "Asset"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: t
                                    }))), o.createElement(y, {
                                        _idProps: {
                                            service: e,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: [a(i.variables._commissionTypeInDataFetchStatus), a(i.variables.commissionTypeIn)]
                                    }, o.createElement(P, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: center;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: t
                                    }, o.createElement(h, {
                                        extendedProperties: {
                                            style: "color: #222;"
                                        },
                                        value: i.variables.commissionTypeIn,
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: t,
                                        value_dataFetchStatus: K.Model.calculateDataFetchStatus(i.variables._commissionTypeInDataFetchStatus)
                                    })))]
                                }),
                                row: new q(function(u, A) {
                                    return [o.createElement(F, {
                                        style: "table-row-even",
                                        _idProps: {
                                            service: u,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: [a(i.variables.dataVar.getCurrent(A.iterationContext).assetAttr)]
                                    }, o.createElement(P, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: center;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: u,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: t
                                    }, o.createElement(h, {
                                        value: i.variables.dataVar.getCurrent(A.iterationContext).assetAttr,
                                        _idProps: {
                                            service: u,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: t
                                    }))), o.createElement(F, {
                                        style: "table-row",
                                        _idProps: {
                                            service: u,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: [a(i.variables.dataVar.getCurrent(A.iterationContext).commissionAttr)]
                                    }, o.createElement(P, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: center;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: u,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: t
                                    }, o.createElement(h, {
                                        value: i.variables.dataVar.getCurrent(A.iterationContext).commissionAttr,
                                        _idProps: {
                                            service: u,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: t
                                    })))]
                                }, b, e, "1_0")
                            },
                            _dependencies: [a(i.variables._commissionTypeInDataFetchStatus), a(i.variables.commissionTypeIn)]
                        })]
                    })
                },
                _dependencies: [a(i.variables._commissionTypeInDataFetchStatus), a(i.variables.commissionTypeIn), a(i.variables.dataVar)]
            }))
        }
    };
d(f, "View");
var S = f,
    be = S;
export {
    be as a
};