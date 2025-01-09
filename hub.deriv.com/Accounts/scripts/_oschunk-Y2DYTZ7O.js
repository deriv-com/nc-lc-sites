import {
    b as xe
} from "./_oschunk-AFO3ZMSV.js";
import {
    a as ot,
    b as ct
} from "./_oschunk-LG4PR44H.js";
import {
    a as lt
} from "./_oschunk-HO7JAG6U.js";
import "./_oschunk-EJVAXX3S.js";
import {
    a as Oe
} from "./_oschunk-SI24YMBJ.js";
import {
    a as Ee
} from "./_oschunk-FSPIWF67.js";
import "./_oschunk-VZCHS3W5.js";
import "./_oschunk-ENDX3VJY.js";
import "./_oschunk-FTYAL2B7.js";
import {
    a as ce
} from "./_oschunk-GPNNXU3M.js";
import {
    b as F,
    d as m,
    e as W,
    f as R,
    g as it,
    h as at,
    i as Pe,
    k as O,
    m as q,
    n as G,
    o as oe,
    p as st,
    r as y
} from "./_oschunk-M2CKCDBB.js";
import "./_oschunk-DSZRJG3L.js";
import "./_oschunk-FX7ZCYVH.js";
import {
    a as M
} from "./_oschunk-NQZZDANH.js";
import {
    a as se,
    g as k,
    i as P
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-TGM73NNA.js";
import "./_oschunk-4PNSWRUJ.js";
import "./_oschunk-BTXBTSZ3.js";
import "./_oschunk-5MMGFCSA.js";
import "./_oschunk-ZHFHVHFO.js";
import "./_oschunk-P7KMMADX.js";
import {
    a as N,
    n as _e,
    o as $
} from "./_oschunk-KZFTAIEG.js";
import {
    Gj as b,
    Nh as x,
    hf as rt,
    uh as nt
} from "./_oschunk-UATY3RVV.js";
import {
    ia as p
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a,
    h as ae
} from "./_oschunk-QHO7QY6K.js";
var de = ae(se());
var l = ae(se());

function Fe(C, r, d, e) {
    C.Value ? e.Validation.setWidgetAsValid(C.WidgetId) : e.Validation.setWidgetAsInvalid(C.WidgetId, "This is required")
}
a(Fe, "default");
var v = p; {
    let r = class r extends v.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getCfd_experienceList$DataActRefresh: 0,
                getLeverage_trading_high_risk_stop_loss$DataActRefresh: 0,
                getRequired_initial_margin$DataActRefresh: 0,
                getTrading_frequency_financial_instruments$DataActRefresh: 0,
                getCfd_frequency$DataActRefresh: 0,
                getCfd_trading_definition$DataActRefresh: 0,
                getRiskToleranceList$DataActRefresh: 0,
                getTrading_experience_financial_instruments$DataActRefresh: 0,
                getSource_of_experienceList$DataActRefresh: 0,
                getLeverage_impact_trading$DataActRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getCfd_experienceList$DataActRefresh: [],
                getLeverage_trading_high_risk_stop_loss$DataActRefresh: [],
                getRequired_initial_margin$DataActRefresh: [],
                getTrading_frequency_financial_instruments$DataActRefresh: [],
                getCfd_frequency$DataActRefresh: [],
                getCfd_trading_definition$DataActRefresh: [],
                getRiskToleranceList$DataActRefresh: [],
                getTrading_experience_financial_instruments$DataActRefresh: [],
                getSource_of_experienceList$DataActRefresh: [],
                getLeverage_impact_trading$DataActRefresh: []
            }, this.shouldSendClientVarsToDataSources = !1
        }
        get getCfd_experienceList$DataActRefresh() {
            return this.hasOwnProperty("_getCfd_experienceList$DataActRefresh") || (this._getCfd_experienceList$DataActRefresh = function() {
                var e = function(c) {
                    var t = this.model,
                        s = this.controller,
                        c = s.callContext(c);
                    return s.callDataAction("DataActionGetCfd_experienceList", "screenservices/Accounts/Assessments/TradingAssessmentForm/DataActionGetCfd_experienceList", "KGYcspqA1ykez2yYW4R_qA", function(f) {
                        t.variables.getCfd_experienceListDataAct.dataFetchStatusAttr = f
                    }, function(f) {
                        t.variables.getCfd_experienceListDataAct.replaceWith(v.DataConversion.ServerDataConverter.from(f, t.variables.getCfd_experienceListDataAct.constructor))
                    }, void 0, void 0, void 0, c, void 0, !1)
                }.bind(this);
                return v.Logger.startActiveSpan("GetCfd_experienceList", function(i) {
                    return i && (i.setAttribute("code.function", "GetCfd_experienceList"), i.setAttribute("outsystems.function.key", "1368097b-fa7d-4261-824f-8f5483ffc904"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_DATA_ACTION_CALL")), v.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._getCfd_experienceList$DataActRefresh
        }
        set getCfd_experienceList$DataActRefresh(e) {
            this._getCfd_experienceList$DataActRefresh = e
        }
        get getLeverage_trading_high_risk_stop_loss$DataActRefresh() {
            return this.hasOwnProperty("_getLeverage_trading_high_risk_stop_loss$DataActRefresh") || (this._getLeverage_trading_high_risk_stop_loss$DataActRefresh = function() {
                var e = function(c) {
                    var t = this.model,
                        s = this.controller,
                        c = s.callContext(c);
                    return s.callDataAction("DataActionGetLeverage_trading_high_risk_stop_loss", "screenservices/Accounts/Assessments/TradingAssessmentForm/DataActionGetLeverage_trading_high_risk_stop_loss", "9yNdfqcJVceFsIJFnzPKEQ", function(f) {
                        t.variables.getLeverage_trading_high_risk_stop_lossDataAct.dataFetchStatusAttr = f
                    }, function(f) {
                        t.variables.getLeverage_trading_high_risk_stop_lossDataAct.replaceWith(v.DataConversion.ServerDataConverter.from(f, t.variables.getLeverage_trading_high_risk_stop_lossDataAct.constructor))
                    }, void 0, void 0, void 0, c, void 0, !1)
                }.bind(this);
                return v.Logger.startActiveSpan("GetLeverage_trading_high_risk_stop_loss", function(i) {
                    return i && (i.setAttribute("code.function", "GetLeverage_trading_high_risk_stop_loss"), i.setAttribute("outsystems.function.key", "1504800f-dfb3-4dbc-9a3c-dd077a81afb9"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_DATA_ACTION_CALL")), v.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._getLeverage_trading_high_risk_stop_loss$DataActRefresh
        }
        set getLeverage_trading_high_risk_stop_loss$DataActRefresh(e) {
            this._getLeverage_trading_high_risk_stop_loss$DataActRefresh = e
        }
        get getRequired_initial_margin$DataActRefresh() {
            return this.hasOwnProperty("_getRequired_initial_margin$DataActRefresh") || (this._getRequired_initial_margin$DataActRefresh = function() {
                var e = function(c) {
                    var t = this.model,
                        s = this.controller,
                        c = s.callContext(c);
                    return s.callDataAction("DataActionGetRequired_initial_margin", "screenservices/Accounts/Assessments/TradingAssessmentForm/DataActionGetRequired_initial_margin", "0P+8BAuhZ5N15Ye6ir5vvg", function(f) {
                        t.variables.getRequired_initial_marginDataAct.dataFetchStatusAttr = f
                    }, function(f) {
                        t.variables.getRequired_initial_marginDataAct.replaceWith(v.DataConversion.ServerDataConverter.from(f, t.variables.getRequired_initial_marginDataAct.constructor))
                    }, void 0, void 0, void 0, c, void 0, !1)
                }.bind(this);
                return v.Logger.startActiveSpan("GetRequired_initial_margin", function(i) {
                    return i && (i.setAttribute("code.function", "GetRequired_initial_margin"), i.setAttribute("outsystems.function.key", "62891a6f-5e05-4959-8859-65b75858053c"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_DATA_ACTION_CALL")), v.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._getRequired_initial_margin$DataActRefresh
        }
        set getRequired_initial_margin$DataActRefresh(e) {
            this._getRequired_initial_margin$DataActRefresh = e
        }
        get getTrading_frequency_financial_instruments$DataActRefresh() {
            return this.hasOwnProperty("_getTrading_frequency_financial_instruments$DataActRefresh") || (this._getTrading_frequency_financial_instruments$DataActRefresh = function() {
                var e = function(c) {
                    var t = this.model,
                        s = this.controller,
                        c = s.callContext(c);
                    return s.callDataAction("DataActionGetTrading_frequency_financial_instruments", "screenservices/Accounts/Assessments/TradingAssessmentForm/DataActionGetTrading_frequency_financial_instruments", "Zs710xfCyEeA6BhC8huM0A", function(f) {
                        t.variables.getTrading_frequency_financial_instrumentsDataAct.dataFetchStatusAttr = f
                    }, function(f) {
                        t.variables.getTrading_frequency_financial_instrumentsDataAct.replaceWith(v.DataConversion.ServerDataConverter.from(f, t.variables.getTrading_frequency_financial_instrumentsDataAct.constructor))
                    }, void 0, void 0, void 0, c, void 0, !1)
                }.bind(this);
                return v.Logger.startActiveSpan("GetTrading_frequency_financial_instruments", function(i) {
                    return i && (i.setAttribute("code.function", "GetTrading_frequency_financial_instruments"), i.setAttribute("outsystems.function.key", "ace920f6-9cbe-45ba-8e65-056fbd493349"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_DATA_ACTION_CALL")), v.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._getTrading_frequency_financial_instruments$DataActRefresh
        }
        set getTrading_frequency_financial_instruments$DataActRefresh(e) {
            this._getTrading_frequency_financial_instruments$DataActRefresh = e
        }
        get getCfd_frequency$DataActRefresh() {
            return this.hasOwnProperty("_getCfd_frequency$DataActRefresh") || (this._getCfd_frequency$DataActRefresh = function() {
                var e = function(c) {
                    var t = this.model,
                        s = this.controller,
                        c = s.callContext(c);
                    return s.callDataAction("DataActionGetCfd_frequency", "screenservices/Accounts/Assessments/TradingAssessmentForm/DataActionGetCfd_frequency", "27pT2G+S1vJWsZu3u3eMBw", function(f) {
                        t.variables.getCfd_frequencyDataAct.dataFetchStatusAttr = f
                    }, function(f) {
                        t.variables.getCfd_frequencyDataAct.replaceWith(v.DataConversion.ServerDataConverter.from(f, t.variables.getCfd_frequencyDataAct.constructor))
                    }, void 0, void 0, void 0, c, void 0, !1)
                }.bind(this);
                return v.Logger.startActiveSpan("GetCfd_frequency", function(i) {
                    return i && (i.setAttribute("code.function", "GetCfd_frequency"), i.setAttribute("outsystems.function.key", "ae8e3c92-873f-43e8-937c-d618ab4feb2b"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_DATA_ACTION_CALL")), v.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._getCfd_frequency$DataActRefresh
        }
        set getCfd_frequency$DataActRefresh(e) {
            this._getCfd_frequency$DataActRefresh = e
        }
        get getCfd_trading_definition$DataActRefresh() {
            return this.hasOwnProperty("_getCfd_trading_definition$DataActRefresh") || (this._getCfd_trading_definition$DataActRefresh = function() {
                var e = function(c) {
                    var t = this.model,
                        s = this.controller,
                        c = s.callContext(c);
                    return s.callDataAction("DataActionGetCfd_trading_definition", "screenservices/Accounts/Assessments/TradingAssessmentForm/DataActionGetCfd_trading_definition", "3yIFRUkgMgIcHPIYEFXing", function(f) {
                        t.variables.getCfd_trading_definitionDataAct.dataFetchStatusAttr = f
                    }, function(f) {
                        t.variables.getCfd_trading_definitionDataAct.replaceWith(v.DataConversion.ServerDataConverter.from(f, t.variables.getCfd_trading_definitionDataAct.constructor))
                    }, void 0, void 0, void 0, c, void 0, !1)
                }.bind(this);
                return v.Logger.startActiveSpan("GetCfd_trading_definition", function(i) {
                    return i && (i.setAttribute("code.function", "GetCfd_trading_definition"), i.setAttribute("outsystems.function.key", "afb248d9-2924-4547-a28b-4d7e53be7a76"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_DATA_ACTION_CALL")), v.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._getCfd_trading_definition$DataActRefresh
        }
        set getCfd_trading_definition$DataActRefresh(e) {
            this._getCfd_trading_definition$DataActRefresh = e
        }
        get getRiskToleranceList$DataActRefresh() {
            return this.hasOwnProperty("_getRiskToleranceList$DataActRefresh") || (this._getRiskToleranceList$DataActRefresh = function() {
                var e = function(c) {
                    var t = this.model,
                        s = this.controller,
                        c = s.callContext(c);
                    return s.callDataAction("DataActionGetRiskToleranceList", "screenservices/Accounts/Assessments/TradingAssessmentForm/DataActionGetRiskToleranceList", "91kMfZeGPLUbDPeDN3QgPw", function(f) {
                        t.variables.getRiskToleranceListDataAct.dataFetchStatusAttr = f
                    }, function(f) {
                        t.variables.getRiskToleranceListDataAct.replaceWith(v.DataConversion.ServerDataConverter.from(f, t.variables.getRiskToleranceListDataAct.constructor))
                    }, void 0, void 0, void 0, c, void 0, !1)
                }.bind(this);
                return v.Logger.startActiveSpan("GetRiskToleranceList", function(i) {
                    return i && (i.setAttribute("code.function", "GetRiskToleranceList"), i.setAttribute("outsystems.function.key", "c067e5f4-da46-405f-86f4-98c7b48c2f00"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_DATA_ACTION_CALL")), v.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._getRiskToleranceList$DataActRefresh
        }
        set getRiskToleranceList$DataActRefresh(e) {
            this._getRiskToleranceList$DataActRefresh = e
        }
        get getTrading_experience_financial_instruments$DataActRefresh() {
            return this.hasOwnProperty("_getTrading_experience_financial_instruments$DataActRefresh") || (this._getTrading_experience_financial_instruments$DataActRefresh = function() {
                var e = function(c) {
                    var t = this.model,
                        s = this.controller,
                        c = s.callContext(c);
                    return s.callDataAction("DataActionGetTrading_experience_financial_instruments", "screenservices/Accounts/Assessments/TradingAssessmentForm/DataActionGetTrading_experience_financial_instruments", "pq7PulFVPmZPXTV87VeQ1Q", function(f) {
                        t.variables.getTrading_experience_financial_instrumentsDataAct.dataFetchStatusAttr = f
                    }, function(f) {
                        t.variables.getTrading_experience_financial_instrumentsDataAct.replaceWith(v.DataConversion.ServerDataConverter.from(f, t.variables.getTrading_experience_financial_instrumentsDataAct.constructor))
                    }, void 0, void 0, void 0, c, void 0, !1)
                }.bind(this);
                return v.Logger.startActiveSpan("GetTrading_experience_financial_instruments", function(i) {
                    return i && (i.setAttribute("code.function", "GetTrading_experience_financial_instruments"), i.setAttribute("outsystems.function.key", "d41982af-ae88-4293-b1c1-dc12b280377d"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_DATA_ACTION_CALL")), v.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._getTrading_experience_financial_instruments$DataActRefresh
        }
        set getTrading_experience_financial_instruments$DataActRefresh(e) {
            this._getTrading_experience_financial_instruments$DataActRefresh = e
        }
        get getSource_of_experienceList$DataActRefresh() {
            return this.hasOwnProperty("_getSource_of_experienceList$DataActRefresh") || (this._getSource_of_experienceList$DataActRefresh = function() {
                var e = function(c) {
                    var t = this.model,
                        s = this.controller,
                        c = s.callContext(c);
                    return s.callDataAction("DataActionGetSource_of_experienceList", "screenservices/Accounts/Assessments/TradingAssessmentForm/DataActionGetSource_of_experienceList", "JE+WqwCMEhACRk19EjKuVw", function(f) {
                        t.variables.getSource_of_experienceListDataAct.dataFetchStatusAttr = f
                    }, function(f) {
                        t.variables.getSource_of_experienceListDataAct.replaceWith(v.DataConversion.ServerDataConverter.from(f, t.variables.getSource_of_experienceListDataAct.constructor))
                    }, void 0, void 0, void 0, c, void 0, !1)
                }.bind(this);
                return v.Logger.startActiveSpan("GetSource_of_experienceList", function(i) {
                    return i && (i.setAttribute("code.function", "GetSource_of_experienceList"), i.setAttribute("outsystems.function.key", "f68d5304-84ef-4974-9e29-9381c8e888d4"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_DATA_ACTION_CALL")), v.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._getSource_of_experienceList$DataActRefresh
        }
        set getSource_of_experienceList$DataActRefresh(e) {
            this._getSource_of_experienceList$DataActRefresh = e
        }
        get getLeverage_impact_trading$DataActRefresh() {
            return this.hasOwnProperty("_getLeverage_impact_trading$DataActRefresh") || (this._getLeverage_impact_trading$DataActRefresh = function() {
                var e = function(c) {
                    var t = this.model,
                        s = this.controller,
                        c = s.callContext(c);
                    return s.callDataAction("DataActionGetLeverage_impact_trading", "screenservices/Accounts/Assessments/TradingAssessmentForm/DataActionGetLeverage_impact_trading", "Sj2I8UiUM9y5Ezbmw02vEA", function(f) {
                        t.variables.getLeverage_impact_tradingDataAct.dataFetchStatusAttr = f
                    }, function(f) {
                        t.variables.getLeverage_impact_tradingDataAct.replaceWith(v.DataConversion.ServerDataConverter.from(f, t.variables.getLeverage_impact_tradingDataAct.constructor))
                    }, void 0, void 0, void 0, c, void 0, !1)
                }.bind(this);
                return v.Logger.startActiveSpan("GetLeverage_impact_trading", function(i) {
                    return i && (i.setAttribute("code.function", "GetLeverage_impact_trading"), i.setAttribute("outsystems.function.key", "fcedfbd8-5e5c-49f0-ad07-07a9dee3faa3"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_DATA_ACTION_CALL")), v.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._getLeverage_impact_trading$DataActRefresh
        }
        set getLeverage_impact_trading$DataActRefresh(e) {
            this._getLeverage_impact_trading$DataActRefresh = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = ["getCfd_experienceList$DataActRefresh", "getLeverage_trading_high_risk_stop_loss$DataActRefresh", "getRequired_initial_margin$DataActRefresh", "getTrading_frequency_financial_instruments$DataActRefresh", "getCfd_frequency$DataActRefresh", "getCfd_trading_definition$DataActRefresh", "getRiskToleranceList$DataActRefresh", "getTrading_experience_financial_instruments$DataActRefresh", "getSource_of_experienceList$DataActRefresh", "getLeverage_impact_trading$DataActRefresh"]), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return v.Logger.startActiveSpan("OnReady", function(c) {
                    return c && (c.setAttribute("code.function", "OnReady"), c.setAttribute("outsystems.function.key", "0250c6bc-23b4-48af-ad80-9c874e240525"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var f = new v.DataTypes.VariableHolder,
                            u = new v.DataTypes.VariableHolder,
                            A = new v.DataTypes.VariableHolder;
                        return v.Flow.executeAsyncFlow(function() {
                            return i.variables.isLoadingVar = !0, i.flush(), _e.getAccountStatus$Action(N.getServer(), N.getAuthToken(), N.getAppId(), "en", e).then(function(g) {
                                A.value = g
                            }).then(function() {
                                return u.value = v.SystemActions.listFilter(A.value.responseOut.getAccountStatusAttr.statusAttr, function(g) {
                                    return g === "trading_experience_not_complete"
                                }, e), i.variables.isUpdateVar = u.value.filteredListOut.isEmpty, i.flush(), _e.getFinancialAssessement$Action(N.getServer(), N.getAuthToken(), N.getAppId(), "en", e).then(function(g) {
                                    f.value = g
                                })
                            }).then(function() {
                                i.variables.formValuesVar.cfd_experienceAttr = f.value.responseOut.get_financial_assessmentAttr.cfd_experienceAttr, i.variables.formValuesVar.cfd_frequencyAttr = f.value.responseOut.get_financial_assessmentAttr.cfd_frequencyAttr, i.variables.formValuesVar.cfd_trading_definitionAttr = f.value.responseOut.get_financial_assessmentAttr.cfd_trading_definitionAttr, i.variables.formValuesVar.leverage_impact_tradingAttr = f.value.responseOut.get_financial_assessmentAttr.leverage_impact_tradingAttr, i.variables.formValuesVar.leverage_trading_high_risk_stop_lossAttr = f.value.responseOut.get_financial_assessmentAttr.leverage_trading_high_risk_stop_lossAttr, i.variables.formValuesVar.required_initial_marginAttr = f.value.responseOut.get_financial_assessmentAttr.required_initial_marginAttr, i.variables.formValuesVar.risk_toleranceAttr = f.value.responseOut.get_financial_assessmentAttr.risk_toleranceAttr, i.variables.formValuesVar.source_of_experienceAttr = f.value.responseOut.get_financial_assessmentAttr.source_of_experienceAttr, i.variables.formValuesVar.trading_experience_financial_instrumentsAttr = f.value.responseOut.get_financial_assessmentAttr.trading_experience_financial_instrumentsAttr, i.variables.formValuesVar.trading_frequency_financial_instrumentsAttr = f.value.responseOut.get_financial_assessmentAttr.trading_frequency_financial_instrumentsAttr, i.variables.previousScoreVar = f.value.responseOut.get_financial_assessmentAttr.trading_scoreAttr, i.variables.isLoadingVar = !1, i.variables.isUserAwareOfRiskVar = i.variables.isUpdateVar ? i.variables.formValuesVar.risk_toleranceAttr === "Yes" : !0
                            })
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onAcceptRisk$Action() {
            return this.hasOwnProperty("__onAcceptRisk$Action") || (this.__onAcceptRisk$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return v.Logger.startActiveSpan("OnAcceptRisk", function(c) {
                    c && (c.setAttribute("code.function", "OnAcceptRisk"), c.setAttribute("outsystems.function.key", "3ed2c806-ae9d-4649-ab51-0baf64606025"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnAcceptRisk"), e = t.callContext(e), i.variables.showRiskAcceptanceModalVar = !1, t._showStatusPage$Action(e)
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__onAcceptRisk$Action
        }
        set _onAcceptRisk$Action(e) {
            this.__onAcceptRisk$Action = e
        }
        get _onClickBackInAnswerChangeForm$Action() {
            return this.hasOwnProperty("__onClickBackInAnswerChangeForm$Action") || (this.__onClickBackInAnswerChangeForm$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return v.Logger.startActiveSpan("OnClickBackInAnswerChangeForm", function(c) {
                    c && (c.setAttribute("code.function", "OnClickBackInAnswerChangeForm"), c.setAttribute("outsystems.function.key", "41c2b16c-be6c-4f92-a9c1-c752719b9e92"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickBackInAnswerChangeForm"), e = t.callContext(e), i.variables.questionRefVar.showQuestionAttr = !1
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__onClickBackInAnswerChangeForm$Action
        }
        set _onClickBackInAnswerChangeForm$Action(e) {
            this.__onClickBackInAnswerChangeForm$Action = e
        }
        get _risk_toleranceDropDownOnChange$Action() {
            return this.hasOwnProperty("__risk_toleranceDropDownOnChange$Action") || (this.__risk_toleranceDropDownOnChange$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return v.Logger.startActiveSpan("Risk_toleranceDropDownOnChange", function(c) {
                    c && (c.setAttribute("code.function", "Risk_toleranceDropDownOnChange"), c.setAttribute("outsystems.function.key", "4eae1017-0541-4b8d-99bc-f106bb096bff"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("Risk_toleranceDropDownOnChange"), e = t.callContext(e), i.variables.isFormDirtyVar = !0, i.variables.formValuesVar.risk_toleranceAttr === "No" ? (i.widgets.get(s.getId("Risk_toleranceDropDown")).validAttr = !1, i.widgets.get(s.getId("Risk_toleranceDropDown")).validationMessageAttr = "To continue, you'll need to confirm that you understand the risk to your capital.", i.variables.isUserAwareOfRiskVar = !1) : (i.widgets.get(s.getId("Risk_toleranceDropDown")).validAttr = !0, i.widgets.get(s.getId("Risk_toleranceDropDown")).validationMessageAttr = v.BuiltinFunctions.nullTextIdentifier(), i.variables.isUserAwareOfRiskVar = !0)
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__risk_toleranceDropDownOnChange$Action
        }
        set _risk_toleranceDropDownOnChange$Action(e) {
            this.__risk_toleranceDropDownOnChange$Action = e
        }
        get _validateField$Action() {
            return this.hasOwnProperty("__validateField$Action") || (this.__validateField$Action = function(e, i, t) {
                var s = this.model,
                    c = this.controller,
                    f = this.idService;
                return v.Logger.startActiveSpan("ValidateField", function(u) {
                    u && (u.setAttribute("code.function", "ValidateField"), u.setAttribute("outsystems.function.key", "546f659d-c1dc-4a0a-a234-bbd028b7f838"), u.setAttribute("outsystems.function.owner.name", "Accounts"), u.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        c.ensureControllerAlive("ValidateField"), t = c.callContext(t);
                        var A = new v.DataTypes.VariableHolder(new(c.constructor.getVariableGroupType("Accounts.Assessments.TradingAssessmentForm.ValidateField$vars")));
                        A.value.fieldIDInLocal = e, A.value.valueInLocal = i, v.Logger.startActiveSpan("JavaScript1", function(g) {
                            g && (g.setAttribute("code.function", "JavaScript1"), g.setAttribute("outsystems.function.key", "27a3e0fa-8f3d-47cd-8492-011aab292715"), g.setAttribute("outsystems.function.owner.name", "Accounts"), g.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), g.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return c.safeExecuteJSNode(Fe, "JavaScript1", "ValidateField", {
                                    WidgetId: v.DataConversion.JSNodeParamConverter.to(A.value.fieldIDInLocal, v.DataTypes.DataTypes.Text),
                                    Value: v.DataConversion.JSNodeParamConverter.to(A.value.valueInLocal, v.DataTypes.DataTypes.Text)
                                }, function(n) {}, {}, {})
                            } finally {
                                g && g.end()
                            }
                        }, 1), c._makeFormDirty$Action(t)
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__validateField$Action
        }
        set _validateField$Action(e) {
            this.__validateField$Action = e
        }
        get _mobileUpdateFormData$Action() {
            return this.hasOwnProperty("__mobileUpdateFormData$Action") || (this.__mobileUpdateFormData$Action = function(e, i, t) {
                var s = this.model,
                    c = this.controller,
                    f = this.idService;
                return v.Logger.startActiveSpan("MobileUpdateFormData", function(u) {
                    return u && (u.setAttribute("code.function", "MobileUpdateFormData"), u.setAttribute("outsystems.function.key", "76c61733-11f1-4318-822c-583efdbd7528"), u.setAttribute("outsystems.function.owner.name", "Accounts"), u.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                        c.ensureControllerAlive("MobileUpdateFormData"), t = c.callContext(t);
                        var A = new v.DataTypes.VariableHolder(new(c.constructor.getVariableGroupType("Accounts.Assessments.TradingAssessmentForm.MobileUpdateFormData$vars")));
                        return A.value.selectedItemInLocal = e, A.value.refInLocal = i, v.Flow.executeAsyncFlow(function() {
                            return c._makeFormDirty$Action(t), A.value.refInLocal === "risk_tolerance" && (s.variables.formValuesVar.risk_toleranceAttr = A.value.selectedItemInLocal, s.variables.isUserAwareOfRiskVar = s.variables.formValuesVar.risk_toleranceAttr === "Yes", !s.variables.isUserAwareOfRiskVar) ? v.Flow.returnAsync() : (s.variables.currentStepVar = s.variables.currentStepVar + 1, v.Flow.executeSequence(function() {
                                if (s.variables.currentStepVar > 10) return s.variables.formValuesVar.required_initial_marginAttr = A.value.selectedItemInLocal, c._saveChangesOnClick$Action(t);
                                A.value.refInLocal === "cfd_experience" ? s.variables.formValuesVar.cfd_experienceAttr = A.value.selectedItemInLocal : A.value.refInLocal === "cfd_frequency" ? s.variables.formValuesVar.cfd_frequencyAttr = A.value.selectedItemInLocal : A.value.refInLocal === "cfd_trading_definition" ? s.variables.formValuesVar.cfd_trading_definitionAttr = A.value.selectedItemInLocal : A.value.refInLocal === "leverage_impact_trading" ? s.variables.formValuesVar.leverage_impact_tradingAttr = A.value.selectedItemInLocal : A.value.refInLocal === "leverage_trading_high_risk_stop_loss" ? s.variables.formValuesVar.leverage_trading_high_risk_stop_lossAttr = A.value.selectedItemInLocal : A.value.refInLocal === "source_of_experience" ? s.variables.formValuesVar.source_of_experienceAttr = A.value.selectedItemInLocal : A.value.refInLocal === "trading_experience_financial_instruments" ? s.variables.formValuesVar.trading_experience_financial_instrumentsAttr = A.value.selectedItemInLocal : s.variables.formValuesVar.trading_frequency_financial_instrumentsAttr = A.value.selectedItemInLocal
                            }))
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 1)
            }), this.__mobileUpdateFormData$Action
        }
        set _mobileUpdateFormData$Action(e) {
            this.__mobileUpdateFormData$Action = e
        }
        get _saveChangesOnClick$Action() {
            return this.hasOwnProperty("__saveChangesOnClick$Action") || (this.__saveChangesOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return v.Logger.startActiveSpan("SaveChangesOnClick", function(c) {
                    return c && (c.setAttribute("code.function", "SaveChangesOnClick"), c.setAttribute("outsystems.function.key", "866011e9-5589-42f9-b7b4-c77f603ca140"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                        t.ensureControllerAlive("SaveChangesOnClick"), e = t.callContext(e);
                        var f = new v.DataTypes.VariableHolder;
                        return v.Flow.executeAsyncFlow(function() {
                            return v.Flow.executeSequence(function() {
                                if (i.widgets.get(s.getId("TAForm")).validAttr) return i.flush(), _e.tradingAssessment$Action(N.getServer(), N.getAuthToken(), N.getAppId(), "en", function() {
                                    var u = new nt;
                                    return u.trading_experience_regulatedAttr = function() {
                                        var A = new rt;
                                        return A.cfd_experienceAttr = i.variables.formValuesVar.cfd_experienceAttr, A.cfd_frequencyAttr = i.variables.formValuesVar.cfd_frequencyAttr, A.cfd_trading_definitionAttr = i.variables.formValuesVar.cfd_trading_definitionAttr, A.leverage_impact_tradingAttr = i.variables.formValuesVar.leverage_impact_tradingAttr, A.leverage_trading_high_risk_stop_lossAttr = i.variables.formValuesVar.leverage_trading_high_risk_stop_lossAttr, A.required_initial_marginAttr = i.variables.formValuesVar.required_initial_marginAttr, A.risk_toleranceAttr = i.variables.formValuesVar.risk_toleranceAttr, A.source_of_experienceAttr = i.variables.formValuesVar.source_of_experienceAttr, A.trading_experience_financial_instrumentsAttr = i.variables.formValuesVar.trading_experience_financial_instrumentsAttr, A.trading_frequency_financial_instrumentsAttr = i.variables.formValuesVar.trading_frequency_financial_instrumentsAttr, A
                                    }(), u
                                }(), e).then(function(u) {
                                    f.value = u
                                }).then(function() {
                                    i.variables.previousScoreVar > 0 && f.value.responseOut.set_Financial_AssessmentAttr.trading_ScoreAttr === 0 ? i.variables.showRiskAcceptanceModalVar = !0 : t._showStatusPage$Action(e)
                                })
                            })
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__saveChangesOnClick$Action
        }
        set _saveChangesOnClick$Action(e) {
            this.__saveChangesOnClick$Action = e
        }
        get _onClickBack$Action() {
            return this.hasOwnProperty("__onClickBack$Action") || (this.__onClickBack$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return v.Logger.startActiveSpan("OnClickBack", function(c) {
                    c && (c.setAttribute("code.function", "OnClickBack"), c.setAttribute("outsystems.function.key", "93ca287f-3f4e-45ed-a58f-b3d0a18de289"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("OnClickBack"), e = t.callContext(e), i.variables.isFormDirtyVar) i.variables.isConfirmScreenExitVar = !0;
                        else return v.Navigation.navigateTo(v.Navigation.generateScreenURL("Accounts", "Assessments", {}), v.Transitions.createTransition(v.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__onClickBack$Action
        }
        set _onClickBack$Action(e) {
            this.__onClickBack$Action = e
        }
        get _exitAssessmentEvent$Action() {
            return this.hasOwnProperty("__exitAssessmentEvent$Action") || (this.__exitAssessmentEvent$Action = function(e, i) {
                var t = this.model,
                    s = this.controller,
                    c = this.idService;
                return v.Logger.startActiveSpan("ExitAssessmentEvent", function(f) {
                    f && (f.setAttribute("code.function", "ExitAssessmentEvent"), f.setAttribute("outsystems.function.key", "aa61c1b0-3d49-4b6c-bd67-18b5d5b351c9"), f.setAttribute("outsystems.function.owner.name", "Accounts"), f.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("ExitAssessmentEvent"), i = s.callContext(i);
                        var u = new v.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("Accounts.Assessments.TradingAssessmentForm.ExitAssessmentEvent$vars")));
                        u.value.isModalOpenInLocal = e, t.variables.isConfirmScreenExitVar = u.value.isModalOpenInLocal
                    } finally {
                        f && f.end()
                    }
                }, 1)
            }), this.__exitAssessmentEvent$Action
        }
        set _exitAssessmentEvent$Action(e) {
            this.__exitAssessmentEvent$Action = e
        }
        get _onChangeAnswer$Action() {
            return this.hasOwnProperty("__onChangeAnswer$Action") || (this.__onChangeAnswer$Action = function(e, i) {
                var t = this.model,
                    s = this.controller,
                    c = this.idService;
                return v.Logger.startActiveSpan("OnChangeAnswer", function(f) {
                    f && (f.setAttribute("code.function", "OnChangeAnswer"), f.setAttribute("outsystems.function.key", "c4244575-d400-48ed-b32c-cfc5d10eca2e"), f.setAttribute("outsystems.function.owner.name", "Accounts"), f.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("OnChangeAnswer"), i = s.callContext(i);
                        var u = new v.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("Accounts.Assessments.TradingAssessmentForm.OnChangeAnswer$vars")));
                        u.value.questionNumberInLocal = e, t.variables.questionRefVar.showQuestionAttr = !0, t.variables.questionRefVar.questionNumberAttr = u.value.questionNumberInLocal
                    } finally {
                        f && f.end()
                    }
                }, 1)
            }), this.__onChangeAnswer$Action
        }
        set _onChangeAnswer$Action(e) {
            this.__onChangeAnswer$Action = e
        }
        get _toggleHint$Action() {
            return this.hasOwnProperty("__toggleHint$Action") || (this.__toggleHint$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return v.Logger.startActiveSpan("ToggleHint", function(c) {
                    c && (c.setAttribute("code.function", "ToggleHint"), c.setAttribute("outsystems.function.key", "c8b5ce67-af59-41e7-b98d-314462c5624e"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("ToggleHint"), e = t.callContext(e), i.variables.isHintOpenVar = !i.variables.isHintOpenVar
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__toggleHint$Action
        }
        set _toggleHint$Action(e) {
            this.__toggleHint$Action = e
        }
        get _makeFormDirty$Action() {
            return this.hasOwnProperty("__makeFormDirty$Action") || (this.__makeFormDirty$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return v.Logger.startActiveSpan("MakeFormDirty", function(c) {
                    c && (c.setAttribute("code.function", "MakeFormDirty"), c.setAttribute("outsystems.function.key", "d2a83100-5d7b-4d42-aefd-d9b21487c92b"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("MakeFormDirty"), e = t.callContext(e), i.variables.isFormDirtyVar = !0
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__makeFormDirty$Action
        }
        set _makeFormDirty$Action(e) {
            this.__makeFormDirty$Action = e
        }
        get _goToPreviousStep$Action() {
            return this.hasOwnProperty("__goToPreviousStep$Action") || (this.__goToPreviousStep$Action = function(e, i) {
                var t = this.model,
                    s = this.controller,
                    c = this.idService;
                return v.Logger.startActiveSpan("GoToPreviousStep", function(f) {
                    f && (f.setAttribute("code.function", "GoToPreviousStep"), f.setAttribute("outsystems.function.key", "d8be4e21-ea2c-45d4-8a8e-74b4a6bb1ee3"), f.setAttribute("outsystems.function.owner.name", "Accounts"), f.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("GoToPreviousStep"), i = s.callContext(i);
                        var u = new v.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("Accounts.Assessments.TradingAssessmentForm.GoToPreviousStep$vars")));
                        u.value.stepInLocal = e, t.variables.currentStepVar = u.value.stepInLocal
                    } finally {
                        f && f.end()
                    }
                }, 1)
            }), this.__goToPreviousStep$Action
        }
        set _goToPreviousStep$Action(e) {
            this.__goToPreviousStep$Action = e
        }
        get _updateTAFormAnswer$Action() {
            return this.hasOwnProperty("__updateTAFormAnswer$Action") || (this.__updateTAFormAnswer$Action = function(e, i, t) {
                var s = this.model,
                    c = this.controller,
                    f = this.idService;
                return v.Logger.startActiveSpan("UpdateTAFormAnswer", function(u) {
                    return u && (u.setAttribute("code.function", "UpdateTAFormAnswer"), u.setAttribute("outsystems.function.key", "e2cbf1fc-f148-4a64-8e6b-447f2867b905"), u.setAttribute("outsystems.function.owner.name", "Accounts"), u.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                        c.ensureControllerAlive("UpdateTAFormAnswer"), t = c.callContext(t);
                        var A = new v.DataTypes.VariableHolder(new(c.constructor.getVariableGroupType("Accounts.Assessments.TradingAssessmentForm.UpdateTAFormAnswer$vars")));
                        return A.value.selectedItemInLocal = e, A.value.refInLocal = i, v.Flow.executeAsyncFlow(function() {
                            return c._mobileUpdateFormData$Action(A.value.selectedItemInLocal, A.value.refInLocal, t).then(function() {
                                s.variables.questionRefVar.showQuestionAttr = !1
                            })
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 1)
            }), this.__updateTAFormAnswer$Action
        }
        set _updateTAFormAnswer$Action(e) {
            this.__updateTAFormAnswer$Action = e
        }
        get _showStatusPage$Action() {
            return this.hasOwnProperty("__showStatusPage$Action") || (this.__showStatusPage$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return v.Logger.startActiveSpan("ShowStatusPage", function(c) {
                    c && (c.setAttribute("code.function", "ShowStatusPage"), c.setAttribute("outsystems.function.key", "e3eafd23-7441-47bb-966a-64dcd0f38795"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("ShowStatusPage"), e = t.callContext(e), i.variables.isUpdateVar ? v.FeedbackMessageService.showFeedbackMessage("You have successfully updated your trading assessment.", 1) : i.variables.showCompletionStatusVar = !0
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__showStatusPage$Action
        }
        set _showStatusPage$Action(e) {
            this.__showStatusPage$Action = e
        }
        onReady$Action(e) {
            var i = this.controller;
            return v.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "0250c6bc-23b4-48af-ad80-9c874e240525"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onAcceptRisk$Action(e) {
            var i = this.controller;
            return v.Logger.startActiveSpan("OnAcceptRisk__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnAcceptRisk"), t.setAttribute("outsystems.function.key", "3ed2c806-ae9d-4649-ab51-0baf64606025"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onAcceptRisk$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickBackInAnswerChangeForm$Action(e) {
            var i = this.controller;
            return v.Logger.startActiveSpan("OnClickBackInAnswerChangeForm__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickBackInAnswerChangeForm"), t.setAttribute("outsystems.function.key", "41c2b16c-be6c-4f92-a9c1-c752719b9e92"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickBackInAnswerChangeForm$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        risk_toleranceDropDownOnChange$Action(e) {
            var i = this.controller;
            return v.Logger.startActiveSpan("Risk_toleranceDropDownOnChange__proxy", function(t) {
                t && (t.setAttribute("code.function", "Risk_toleranceDropDownOnChange"), t.setAttribute("outsystems.function.key", "4eae1017-0541-4b8d-99bc-f106bb096bff"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._risk_toleranceDropDownOnChange$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        validateField$Action(e, i, t) {
            var s = this.controller;
            return v.Logger.startActiveSpan("ValidateField__proxy", function(c) {
                c && (c.setAttribute("code.function", "ValidateField"), c.setAttribute("outsystems.function.key", "546f659d-c1dc-4a0a-a234-bbd028b7f838"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return s.safeExecuteClientAction(s._validateField$Action, t, e, i)
                } finally {
                    c && c.end()
                }
            }, 0)
        }
        mobileUpdateFormData$Action(e, i, t) {
            var s = this.controller;
            return v.Logger.startActiveSpan("MobileUpdateFormData__proxy", function(c) {
                return c && (c.setAttribute("code.function", "MobileUpdateFormData"), c.setAttribute("outsystems.function.key", "76c61733-11f1-4318-822c-583efdbd7528"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                    return s.safeExecuteClientAction(s._mobileUpdateFormData$Action, t, e, i)
                }, function() {
                    c && c.end()
                })
            }, 0)
        }
        saveChangesOnClick$Action(e) {
            var i = this.controller;
            return v.Logger.startActiveSpan("SaveChangesOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SaveChangesOnClick"), t.setAttribute("outsystems.function.key", "866011e9-5589-42f9-b7b4-c77f603ca140"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._saveChangesOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickBack$Action(e) {
            var i = this.controller;
            return v.Logger.startActiveSpan("OnClickBack__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickBack"), t.setAttribute("outsystems.function.key", "93ca287f-3f4e-45ed-a58f-b3d0a18de289"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickBack$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        exitAssessmentEvent$Action(e, i) {
            var t = this.controller;
            return v.Logger.startActiveSpan("ExitAssessmentEvent__proxy", function(s) {
                s && (s.setAttribute("code.function", "ExitAssessmentEvent"), s.setAttribute("outsystems.function.key", "aa61c1b0-3d49-4b6c-bd67-18b5d5b351c9"), s.setAttribute("outsystems.function.owner.name", "Accounts"), s.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._exitAssessmentEvent$Action, i, e)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        onChangeAnswer$Action(e, i) {
            var t = this.controller;
            return v.Logger.startActiveSpan("OnChangeAnswer__proxy", function(s) {
                s && (s.setAttribute("code.function", "OnChangeAnswer"), s.setAttribute("outsystems.function.key", "c4244575-d400-48ed-b32c-cfc5d10eca2e"), s.setAttribute("outsystems.function.owner.name", "Accounts"), s.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onChangeAnswer$Action, i, e)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        toggleHint$Action(e) {
            var i = this.controller;
            return v.Logger.startActiveSpan("ToggleHint__proxy", function(t) {
                t && (t.setAttribute("code.function", "ToggleHint"), t.setAttribute("outsystems.function.key", "c8b5ce67-af59-41e7-b98d-314462c5624e"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._toggleHint$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        makeFormDirty$Action(e) {
            var i = this.controller;
            return v.Logger.startActiveSpan("MakeFormDirty__proxy", function(t) {
                t && (t.setAttribute("code.function", "MakeFormDirty"), t.setAttribute("outsystems.function.key", "d2a83100-5d7b-4d42-aefd-d9b21487c92b"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._makeFormDirty$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        goToPreviousStep$Action(e, i) {
            var t = this.controller;
            return v.Logger.startActiveSpan("GoToPreviousStep__proxy", function(s) {
                s && (s.setAttribute("code.function", "GoToPreviousStep"), s.setAttribute("outsystems.function.key", "d8be4e21-ea2c-45d4-8a8e-74b4a6bb1ee3"), s.setAttribute("outsystems.function.owner.name", "Accounts"), s.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._goToPreviousStep$Action, i, e)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        updateTAFormAnswer$Action(e, i, t) {
            var s = this.controller;
            return v.Logger.startActiveSpan("UpdateTAFormAnswer__proxy", function(c) {
                return c && (c.setAttribute("code.function", "UpdateTAFormAnswer"), c.setAttribute("outsystems.function.key", "e2cbf1fc-f148-4a64-8e6b-447f2867b905"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                    return s.safeExecuteClientAction(s._updateTAFormAnswer$Action, t, e, i)
                }, function() {
                    c && c.end()
                })
            }, 0)
        }
        showStatusPage$Action(e) {
            var i = this.controller;
            return v.Logger.startActiveSpan("ShowStatusPage__proxy", function(t) {
                t && (t.setAttribute("code.function", "ShowStatusPage"), t.setAttribute("outsystems.function.key", "e3eafd23-7441-47bb-966a-64dcd0f38795"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._showStatusPage$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    s = this.idService;
                return i.onReady$Action(e)
            }), this._onReadyEventHandler
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
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
            return $.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let C = r;
    z = C, z.registerVariableGroupType("Accounts.Assessments.TradingAssessmentForm.ValidateField$vars", [{
        name: "FieldID",
        attrName: "fieldIDInLocal",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Value",
        attrName: "valueInLocal",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }]), z.registerVariableGroupType("Accounts.Assessments.TradingAssessmentForm.MobileUpdateFormData$vars", [{
        name: "SelectedItem",
        attrName: "selectedItemInLocal",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Ref",
        attrName: "refInLocal",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }]), z.registerVariableGroupType("Accounts.Assessments.TradingAssessmentForm.ExitAssessmentEvent$vars", [{
        name: "IsModalOpen",
        attrName: "isModalOpenInLocal",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }]), z.registerVariableGroupType("Accounts.Assessments.TradingAssessmentForm.OnChangeAnswer$vars", [{
        name: "QuestionNumber",
        attrName: "questionNumberInLocal",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Integer,
        defaultValue: a(function() {
            return 0
        }, "defaultValue")
    }]), z.registerVariableGroupType("Accounts.Assessments.TradingAssessmentForm.GoToPreviousStep$vars", [{
        name: "Step",
        attrName: "stepInLocal",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Integer,
        defaultValue: a(function() {
            return 0
        }, "defaultValue")
    }]), z.registerVariableGroupType("Accounts.Assessments.TradingAssessmentForm.UpdateTAFormAnswer$vars", [{
        name: "SelectedItem",
        attrName: "selectedItemInLocal",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Ref",
        attrName: "refInLocal",
        mandatory: !0,
        dataType: v.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var z, dt = new v.Controller.ControllerFactory(z, M);
var J = ae(se());
var U = p,
    Te = class Te extends U.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsOpen", "isOpenIn", "IsOpen", !0, !1, U.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isOpenInDataFetchStatus", "_isOpenInDataFetchStatus", "_isOpenInDataFetchStatus", !0, !1, U.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ContentBody", "contentBodyIn", "ContentBody", !0, !1, U.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_contentBodyInDataFetchStatus", "_contentBodyInDataFetchStatus", "_contentBodyInDataFetchStatus", !0, !1, U.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(U.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Te, "VariablesRecord");
var ve = Te;
ve.init();
var Ve = class Ve extends U.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(Ve, "WidgetsRecord");
var Ie = Ve,
    ke = class ke extends U.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return ve
        }
        static getWidgetsRecordConstructor() {
            return Ie
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(r) {
            "IsOpen" in r && (this.variables.isOpenIn = r.IsOpen, "_isOpenInDataFetchStatus" in r && (this.variables._isOpenInDataFetchStatus = r._isOpenInDataFetchStatus)), "ContentBody" in r && (this.variables.contentBodyIn = r.ContentBody, "_contentBodyInDataFetchStatus" in r && (this.variables._contentBodyInDataFetchStatus = r._contentBodyInDataFetchStatus))
        }
    };
a(ke, "Model");
var me = ke;
me._hasValidationWidgetsValue = void 0;
var ut = new U.Model.ModelFactory(me);
var K = p; {
    let r = class r extends K.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _continueVerificationOnClick$Action() {
            return this.hasOwnProperty("__continueVerificationOnClick$Action") || (this.__continueVerificationOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return K.Logger.startActiveSpan("ContinueVerificationOnClick", function(c) {
                    return c && (c.setAttribute("code.function", "ContinueVerificationOnClick"), c.setAttribute("outsystems.function.key", "7dd18ce0-8dd5-433b-ad2d-41db1532da2c"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), K.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("ContinueVerificationOnClick"), e = t.callContext(e), K.Flow.executeAsyncFlow(function() {
                            return i.variables.isOpenIn = !1, t.event$Action(i.variables.isOpenIn, e)
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__continueVerificationOnClick$Action
        }
        set _continueVerificationOnClick$Action(e) {
            this.__continueVerificationOnClick$Action = e
        }
        continueVerificationOnClick$Action(e) {
            var i = this.controller;
            return K.Logger.startActiveSpan("ContinueVerificationOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ContinueVerificationOnClick"), t.setAttribute("outsystems.function.key", "7dd18ce0-8dd5-433b-ad2d-41db1532da2c"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), K.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._continueVerificationOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get event$Action() {
            return this.hasOwnProperty("_event$Action") || (this._event$Action = function() {
                return Promise.resolve()
            }), this._event$Action
        }
        set event$Action(e) {
            this._event$Action = e
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
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
            return $.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let C = r;
    ft = C
}
var ft, _t = new K.Controller.ControllerFactory(ft, M);
var gt = p,
    Zt = P.PlaceholderContent,
    Xt = P.IteratorPlaceholderContent,
    Y = class Y extends k.BaseWebBlock {
        static get displayName() {
            return "Assessments.AssessmentInfoModal"
        }
        static getAttributes() {
            return {
                codeFunction: "AssessmentInfoModal",
                functionKey: "1a35c70e-df5c-4bb4-8398-6a494332667b",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Assessments.AssessmentInfoModal.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return ut
        }
        get controllerFactory() {
            return _t
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                d = this.controller,
                e = this.idService,
                i = d.validationService,
                t = this.widgetsRecordProvider,
                s = d.callContext(),
                c = Y.ifWidget,
                f = Y.textWidget,
                u = Y.asPrimitiveValue,
                A = Y.getTranslation,
                g = this;
            return J.createElement("div", this.getRootNodeProperties(), J.createElement(oe, {
                showPopup: r.variables.isOpenIn,
                style: "popup-dialog popup-layout",
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: gt.Model.calculateDataFetchStatus(r.variables._isOpenInDataFetchStatus)
            }, J.createElement(m, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column row-gap-base",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, J.createElement(R, {
                style: "text-align-center",
                value: r.variables.contentBodyIn,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: gt.Model.calculateDataFetchStatus(r.variables._contentBodyInDataFetchStatus)
            }), J.createElement(m, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column row-gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }, J.createElement(F, {
                enabled: !0,
                extendedProperties: {
                    style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: a(function() {
                    return g.validateWidget(""), Promise.resolve().then(function() {
                        var n = s.clone();
                        return d.continueVerificationOnClick$Action(d.callContext(n))
                    })
                }, "onClick"),
                style: "btn btn-primary ",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }, J.createElement(y, {
                extendedProperties: {
                    style: "font-size: 14px;"
                },
                text: ["Ok"],
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }))))))
        }
    };
a(Y, "View");
var Le = Y,
    fe = Le;
var I = ae(se());
var Q = p,
    We = class We extends Q.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsOpen", "isOpenIn", "IsOpen", !0, !1, Q.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isOpenInDataFetchStatus", "_isOpenInDataFetchStatus", "_isOpenInDataFetchStatus", !0, !1, Q.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Title", "titleIn", "Title", !0, !1, Q.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, Q.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(Q.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(We, "VariablesRecord");
var he = We;
he.init();
var qe = class qe extends Q.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(qe, "WidgetsRecord");
var $e = qe,
    He = class He extends Q.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return he
        }
        static getWidgetsRecordConstructor() {
            return $e
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(r) {
            "IsOpen" in r && (this.variables.isOpenIn = r.IsOpen, "_isOpenInDataFetchStatus" in r && (this.variables._isOpenInDataFetchStatus = r._isOpenInDataFetchStatus)), "Title" in r && (this.variables.titleIn = r.Title, "_titleInDataFetchStatus" in r && (this.variables._titleInDataFetchStatus = r._titleInDataFetchStatus))
        }
    };
a(He, "Model");
var pe = He;
pe._hasValidationWidgetsValue = void 0;
var vt = new Q.Model.ModelFactory(pe);
var j = p; {
    let r = class r extends j.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _continueAssessmentOnClick$Action() {
            return this.hasOwnProperty("__continueAssessmentOnClick$Action") || (this.__continueAssessmentOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return j.Logger.startActiveSpan("ContinueAssessmentOnClick", function(c) {
                    return c && (c.setAttribute("code.function", "ContinueAssessmentOnClick"), c.setAttribute("outsystems.function.key", "7433ca81-0de2-46f9-b9e5-dd79ecfac143"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), j.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("ContinueAssessmentOnClick"), e = t.callContext(e), j.Flow.executeAsyncFlow(function() {
                            return i.variables.isOpenIn = !1, t.event$Action(i.variables.isOpenIn, e)
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__continueAssessmentOnClick$Action
        }
        set _continueAssessmentOnClick$Action(e) {
            this.__continueAssessmentOnClick$Action = e
        }
        continueAssessmentOnClick$Action(e) {
            var i = this.controller;
            return j.Logger.startActiveSpan("ContinueAssessmentOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ContinueAssessmentOnClick"), t.setAttribute("outsystems.function.key", "7433ca81-0de2-46f9-b9e5-dd79ecfac143"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), j.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._continueAssessmentOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get event$Action() {
            return this.hasOwnProperty("_event$Action") || (this._event$Action = function() {
                return Promise.resolve()
            }), this._event$Action
        }
        set event$Action(e) {
            this._event$Action = e
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
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
            return $.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let C = r;
    mt = C
}
var mt, At = new j.Controller.ControllerFactory(mt, M);
var Z = p,
    Ar = P.PlaceholderContent,
    hr = P.IteratorPlaceholderContent,
    X = class X extends k.BaseWebBlock {
        static get displayName() {
            return "Assessments.ExitAssessment"
        }
        static getAttributes() {
            return {
                codeFunction: "ExitAssessment",
                functionKey: "86ebba58-b8dd-4b06-9b67-baa05aa0bb1e",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Assessments.ExitAssessment.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return vt
        }
        get controllerFactory() {
            return At
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                d = this.controller,
                e = this.idService,
                i = d.validationService,
                t = this.widgetsRecordProvider,
                s = d.callContext(),
                c = X.ifWidget,
                f = X.textWidget,
                u = X.asPrimitiveValue,
                A = X.getTranslation,
                g = this;
            return I.createElement("div", this.getRootNodeProperties(), I.createElement(oe, {
                showPopup: r.variables.isOpenIn,
                style: "popup-dialog",
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: Z.Model.calculateDataFetchStatus(r.variables._isOpenInDataFetchStatus)
            }, I.createElement(m, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column row-gap-base",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, I.createElement(m, {
                align: 0,
                animate: !1,
                style: "display-flex justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }, I.createElement(R, {
                style: "font-size-h6 font-bold",
                value: r.variables.titleIn,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: Z.Model.calculateDataFetchStatus(r.variables._titleInDataFetchStatus)
            }), I.createElement(G, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var n = s.clone();
                        return d.continueAssessmentOnClick$Action(d.callContext(n))
                    })
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }, I.createElement(O, {
                image: Z.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneXmarkRegularIcon.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }))), "You will lose your progress.", I.createElement(m, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column row-gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }, I.createElement(F, {
                enabled: !0,
                extendedProperties: {
                    style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: a(function() {
                    return g.validateWidget(""), Promise.resolve().then(function() {
                        var n = s.clone();
                        return d.continueAssessmentOnClick$Action(d.callContext(n))
                    })
                }, "onClick"),
                style: "btn btn-primary ",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t
            }, I.createElement(y, {
                extendedProperties: {
                    style: "font-size: 14px;"
                },
                text: ["Continue assessment"],
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            })), I.createElement(F, {
                enabled: !0,
                extendedProperties: {
                    style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: a(function() {
                    try {
                        Z.Navigation.navigateTo(Z.Navigation.generateScreenURL("Accounts", "Assessments", {}), Z.Transitions.createTransition(Z.Transitions.TransitionAnimation.Fade), null, !0)
                    } catch (n) {
                        if (n.name !== "RedirectOccurredException") throw n
                    }
                }, "onClick"),
                style: "btn",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }, I.createElement(y, {
                extendedProperties: {
                    style: "font-size: 14px;"
                },
                text: ["Go to Account settings"],
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t
            }))))))
        }
    };
a(X, "View");
var Ne = X,
    Me = Ne;
var T = ae(se());
var w = p,
    Ue = class Ue extends w.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsValueChanged", "isValueChangedVar", "IsValueChanged", !0, !1, w.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("Question", "questionIn", "Question", !0, !1, w.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_questionInDataFetchStatus", "_questionInDataFetchStatus", "_questionInDataFetchStatus", !0, !1, w.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ListData", "listDataIn", "ListData", !0, !1, w.DataTypes.DataTypes.RecordList, function() {
                return w.DataTypes.ImmutableBase.getData(new b)
            }, !1, b), this.attr("_listDataInDataFetchStatus", "_listDataInDataFetchStatus", "_listDataInDataFetchStatus", !0, !1, w.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SelectedValue", "selectedValueIn", "SelectedValue", !0, !1, w.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_selectedValueInDataFetchStatus", "_selectedValueInDataFetchStatus", "_selectedValueInDataFetchStatus", !0, !1, w.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("FieldRef", "fieldRefIn", "FieldRef", !0, !1, w.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_fieldRefInDataFetchStatus", "_fieldRefInDataFetchStatus", "_fieldRefInDataFetchStatus", !0, !1, w.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsError", "isErrorIn", "IsError", !0, !1, w.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isErrorInDataFetchStatus", "_isErrorInDataFetchStatus", "_isErrorInDataFetchStatus", !0, !1, w.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShouldSubmitOnSelection", "shouldSubmitOnSelectionIn", "ShouldSubmitOnSelection", !0, !1, w.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_shouldSubmitOnSelectionInDataFetchStatus", "_shouldSubmitOnSelectionInDataFetchStatus", "_shouldSubmitOnSelectionInDataFetchStatus", !0, !1, w.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(w.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Ue, "VariablesRecord");
var ye = Ue;
ye.init();
var Qe = class Qe extends w.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(Qe, "WidgetsRecord");
var Be = Qe,
    Ge = class Ge extends w.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return ye
        }
        static getWidgetsRecordConstructor() {
            return Be
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(r) {
            "Question" in r && (this.variables.questionIn = r.Question, "_questionInDataFetchStatus" in r && (this.variables._questionInDataFetchStatus = r._questionInDataFetchStatus)), "ListData" in r && (this.variables.listDataIn = r.ListData, "_listDataInDataFetchStatus" in r && (this.variables._listDataInDataFetchStatus = r._listDataInDataFetchStatus)), "SelectedValue" in r && (this.variables.selectedValueIn = r.SelectedValue, "_selectedValueInDataFetchStatus" in r && (this.variables._selectedValueInDataFetchStatus = r._selectedValueInDataFetchStatus)), "FieldRef" in r && (this.variables.fieldRefIn = r.FieldRef, "_fieldRefInDataFetchStatus" in r && (this.variables._fieldRefInDataFetchStatus = r._fieldRefInDataFetchStatus)), "IsError" in r && (this.variables.isErrorIn = r.IsError, "_isErrorInDataFetchStatus" in r && (this.variables._isErrorInDataFetchStatus = r._isErrorInDataFetchStatus)), "ShouldSubmitOnSelection" in r && (this.variables.shouldSubmitOnSelectionIn = r.ShouldSubmitOnSelection, "_shouldSubmitOnSelectionInDataFetchStatus" in r && (this.variables._shouldSubmitOnSelectionInDataFetchStatus = r._shouldSubmitOnSelectionInDataFetchStatus))
        }
    };
a(Ge, "Model");
var be = Ge;
be._hasValidationWidgetsValue = void 0;
var pt = new w.Model.ModelFactory(be);
var E = p; {
    let r = class r extends E.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onItemSelect$Action() {
            return this.hasOwnProperty("__onItemSelect$Action") || (this.__onItemSelect$Action = function(e, i) {
                var t = this.model,
                    s = this.controller,
                    c = this.idService;
                return E.Logger.startActiveSpan("OnItemSelect", function(f) {
                    return f && (f.setAttribute("code.function", "OnItemSelect"), f.setAttribute("outsystems.function.key", "38776d3b-4a54-4d0f-b39e-5cd30aa161dd"), f.setAttribute("outsystems.function.owner.name", "Accounts"), f.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), E.Flow.tryFinally(function() {
                        s.ensureControllerAlive("OnItemSelect"), i = s.callContext(i);
                        var u = new E.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("Accounts.Assessments.MobileTAQuestion.OnItemSelect$vars")));
                        return u.value.selectedDataInLocal = e, E.Flow.executeAsyncFlow(function() {
                            return $.logger$Action(u.value.selectedDataInLocal + " " + t.variables.fieldRefIn, "SelectedData", i), t.variables.isValueChangedVar = t.variables.selectedValueIn !== u.value.selectedDataInLocal, t.variables.selectedValueIn = u.value.selectedDataInLocal, t.variables.fieldRefIn === "risk_tolerance" && u.value.selectedDataInLocal === "No" ? t.variables.isErrorIn = !0 : t.variables.isErrorIn = !1, E.Flow.executeSequence(function() {
                                if (t.variables.shouldSubmitOnSelectionIn) return s.selectedItem$Action(t.variables.selectedValueIn, t.variables.fieldRefIn, i)
                            })
                        })
                    }, function() {
                        f && f.end()
                    })
                }, 1)
            }), this.__onItemSelect$Action
        }
        set _onItemSelect$Action(e) {
            this.__onItemSelect$Action = e
        }
        get _onButtonClick$Action() {
            return this.hasOwnProperty("__onButtonClick$Action") || (this.__onButtonClick$Action = function(e, i) {
                var t = this.model,
                    s = this.controller,
                    c = this.idService;
                return E.Logger.startActiveSpan("OnButtonClick", function(f) {
                    return f && (f.setAttribute("code.function", "OnButtonClick"), f.setAttribute("outsystems.function.key", "76515be1-6986-4a23-8316-76411359da4e"), f.setAttribute("outsystems.function.owner.name", "Accounts"), f.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), E.Flow.tryFinally(function() {
                        s.ensureControllerAlive("OnButtonClick"), i = s.callContext(i);
                        var u = new E.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("Accounts.Assessments.MobileTAQuestion.OnButtonClick$vars")));
                        return u.value.selectedDataInLocal = e, E.Flow.executeAsyncFlow(function() {
                            return t.variables.selectedValueIn = u.value.selectedDataInLocal, s.selectedItem$Action(t.variables.selectedValueIn, t.variables.fieldRefIn, i)
                        })
                    }, function() {
                        f && f.end()
                    })
                }, 1)
            }), this.__onButtonClick$Action
        }
        set _onButtonClick$Action(e) {
            this.__onButtonClick$Action = e
        }
        onItemSelect$Action(e, i) {
            var t = this.controller;
            return E.Logger.startActiveSpan("OnItemSelect__proxy", function(s) {
                return s && (s.setAttribute("code.function", "OnItemSelect"), s.setAttribute("outsystems.function.key", "38776d3b-4a54-4d0f-b39e-5cd30aa161dd"), s.setAttribute("outsystems.function.owner.name", "Accounts"), s.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), E.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onItemSelect$Action, i, e)
                }, function() {
                    s && s.end()
                })
            }, 0)
        }
        onButtonClick$Action(e, i) {
            var t = this.controller;
            return E.Logger.startActiveSpan("OnButtonClick__proxy", function(s) {
                return s && (s.setAttribute("code.function", "OnButtonClick"), s.setAttribute("outsystems.function.key", "76515be1-6986-4a23-8316-76411359da4e"), s.setAttribute("outsystems.function.owner.name", "Accounts"), s.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), E.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onButtonClick$Action, i, e)
                }, function() {
                    s && s.end()
                })
            }, 0)
        }
        get selectedItem$Action() {
            return this.hasOwnProperty("_selectedItem$Action") || (this._selectedItem$Action = function() {
                return Promise.resolve()
            }), this._selectedItem$Action
        }
        set selectedItem$Action(e) {
            this._selectedItem$Action = e
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
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
            return $.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let C = r;
    Se = C, Se.registerVariableGroupType("Accounts.Assessments.MobileTAQuestion.OnItemSelect$vars", [{
        name: "SelectedData",
        attrName: "selectedDataInLocal",
        mandatory: !0,
        dataType: E.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }]), Se.registerVariableGroupType("Accounts.Assessments.MobileTAQuestion.OnButtonClick$vars", [{
        name: "SelectedData",
        attrName: "selectedDataInLocal",
        mandatory: !0,
        dataType: E.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var Se, yt = new E.Controller.ControllerFactory(Se, M);
var ee = p,
    ze = P.PlaceholderContent,
    Dt = P.IteratorPlaceholderContent,
    te = class te extends k.BaseWebBlock {
        static get displayName() {
            return "Assessments.MobileTAQuestion"
        }
        static getAttributes() {
            return {
                codeFunction: "MobileTAQuestion",
                functionKey: "f4893504-8950-433a-a557-33dad2594433",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Assessments.MobileTAQuestion.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return pt
        }
        get controllerFactory() {
            return yt
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                d = this.controller,
                e = this.idService,
                i = d.validationService,
                t = this.widgetsRecordProvider,
                s = d.callContext(),
                c = te.ifWidget,
                f = te.textWidget,
                u = te.asPrimitiveValue,
                A = te.getTranslation,
                g = this;
            return T.createElement("div", this.getRootNodeProperties(), T.createElement(m, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column full-height",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, T.createElement(m, {
                align: 0,
                animate: !1,
                style: "question",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, T.createElement(R, {
                value: r.variables.questionIn,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: ee.Model.calculateDataFetchStatus(r.variables._questionInDataFetchStatus)
            })), T.createElement(m, {
                align: 0,
                animate: !1,
                style: "padding-base answers",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }, T.createElement(it, {
                animateItems: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: 0,
                source: r.variables.listDataIn,
                style: "list list-group display-flex flex-direction-column row-gap-base",
                tag: "div",
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t,
                source_dataFetchStatus: ee.Model.calculateDataFetchStatus(r.variables._listDataInDataFetchStatus),
                placeholders: {
                    content: new Dt(function(n, o) {
                        return [T.createElement(at, {
                            onClick: a(function() {
                                return Promise.resolve().then(function() {
                                    var h = o.clone();
                                    return d.onItemSelect$Action(r.variables.listDataIn.getCurrent(o.iterationContext).valueAttr, d.callContext(h))
                                })
                            }, "onClick"),
                            style: r.getCachedValue(n.getId("ListItem1.Style"), function() {
                                return "list-item item-layout" + (r.variables.selectedValueIn === r.variables.listDataIn.getCurrent(o.iterationContext).valueAttr ? r.variables.isErrorIn ? " error-item" : " selected-item" : "")
                            }, function() {
                                return r.variables.selectedValueIn
                            }, function() {
                                return r.variables.listDataIn.getCurrent(o.iterationContext).valueAttr
                            }, function() {
                                return r.variables.isErrorIn
                            }),
                            triggerActionOnFullSwipeLeft: !1,
                            triggerActionOnFullSwipeRight: !1,
                            _idProps: {
                                service: n,
                                name: "ListItem1"
                            },
                            _widgetRecordProvider: t,
                            style_dataFetchStatus: ee.Model.calculateDataFetchStatus(r.variables._selectedValueInDataFetchStatus, r.variables._listDataInDataFetchStatus, r.variables._isErrorInDataFetchStatus),
                            placeholders: {
                                leftActions: ze.Empty,
                                content: new ze(function() {
                                    return [T.createElement(R, {
                                        value: r.variables.listDataIn.getCurrent(o.iterationContext).textAttr,
                                        _idProps: {
                                            service: n,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: t,
                                        value_dataFetchStatus: ee.Model.calculateDataFetchStatus(r.variables._listDataInDataFetchStatus)
                                    })]
                                }),
                                rightActions: ze.Empty
                            },
                            _dependencies: [u(r.variables._listDataInDataFetchStatus), u(r.variables.listDataIn.getCurrent(o.iterationContext).textAttr)]
                        })]
                    }, s, e, "1")
                },
                _dependencies: [u(r.variables._isErrorInDataFetchStatus), u(r.variables._listDataInDataFetchStatus), u(r.variables._selectedValueInDataFetchStatus), u(r.variables.isErrorIn), u(r.variables.selectedValueIn)]
            }), T.createElement(m, {
                align: 0,
                animate: !0,
                visible: r.variables.isErrorIn,
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: ee.Model.calculateDataFetchStatus(r.variables._isErrorInDataFetchStatus)
            }, T.createElement(st, {
                align: 0,
                content: g.props.placeholders.errorDetails,
                _idProps: {
                    service: e,
                    name: "ErrorDetails"
                },
                _widgetRecordProvider: t
            }))), T.createElement(m, {
                align: 0,
                animate: !0,
                style: "padding-base trading-assessment__footer",
                visible: !r.variables.shouldSubmitOnSelectionIn,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: ee.Model.calculateDataFetchStatus(r.variables._shouldSubmitOnSelectionInDataFetchStatus)
            }, T.createElement(F, {
                enabled: r.variables.isValueChangedVar && !r.variables.isErrorIn,
                isDefault: !1,
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var n = s.clone();
                        return d.onButtonClick$Action(r.variables.selectedValueIn, d.callContext(n))
                    })
                }, "onClick"),
                style: "btn btn-primary full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t,
                enabled_dataFetchStatus: ee.Model.calculateDataFetchStatus(r.variables._isErrorInDataFetchStatus)
            }, "Save changes"))))
        }
    };
a(te, "View");
var Je = te,
    D = Je;
var le = ae(se());
var V = p,
    Ye = class Ye extends V.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("DisplayValue", "displayValueVar", "DisplayValue", !0, !1, V.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("SelectedValue", "selectedValueIn", "SelectedValue", !0, !1, V.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_selectedValueInDataFetchStatus", "_selectedValueInDataFetchStatus", "_selectedValueInDataFetchStatus", !0, !1, V.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ListData", "listDataIn", "ListData", !0, !1, V.DataTypes.DataTypes.RecordList, function() {
                return V.DataTypes.ImmutableBase.getData(new x)
            }, !1, x), this.attr("_listDataInDataFetchStatus", "_listDataInDataFetchStatus", "_listDataInDataFetchStatus", !0, !1, V.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("QuestionRef", "questionRefIn", "QuestionRef", !0, !1, V.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_questionRefInDataFetchStatus", "_questionRefInDataFetchStatus", "_questionRefInDataFetchStatus", !0, !1, V.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(V.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Ye, "VariablesRecord");
var Ce = Ye;
Ce.init();
var je = class je extends V.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(je, "WidgetsRecord");
var Ke = je,
    Ze = class Ze extends V.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Ce
        }
        static getWidgetsRecordConstructor() {
            return Ke
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(r) {
            "SelectedValue" in r && (this.variables.selectedValueIn = r.SelectedValue, "_selectedValueInDataFetchStatus" in r && (this.variables._selectedValueInDataFetchStatus = r._selectedValueInDataFetchStatus)), "ListData" in r && (this.variables.listDataIn = r.ListData, "_listDataInDataFetchStatus" in r && (this.variables._listDataInDataFetchStatus = r._listDataInDataFetchStatus)), "QuestionRef" in r && (this.variables.questionRefIn = r.QuestionRef, "_questionRefInDataFetchStatus" in r && (this.variables._questionRefInDataFetchStatus = r._questionRefInDataFetchStatus))
        }
    };
a(Ze, "Model");
var De = Ze;
De._hasValidationWidgetsValue = void 0;
var bt = new V.Model.ModelFactory(De);
var H = p; {
    let r = class r extends H.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return H.Logger.startActiveSpan("OnReady", function(c) {
                    c && (c.setAttribute("code.function", "OnReady"), c.setAttribute("outsystems.function.key", "22da0e23-2efe-4dff-9fa3-71aec8a69d39"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var f = new H.DataTypes.VariableHolder;
                        f.value = H.SystemActions.listFilter(i.variables.listDataIn, function(u) {
                            return i.variables.selectedValueIn === u.valueAttr
                        }, e), i.variables.displayValueVar = f.value.filteredListOut.getCurrent(e.iterationContext).textAttr
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onClick$Action() {
            return this.hasOwnProperty("__onClick$Action") || (this.__onClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    s = this.idService;
                return H.Logger.startActiveSpan("OnClick", function(c) {
                    return c && (c.setAttribute("code.function", "OnClick"), c.setAttribute("outsystems.function.key", "dfdd16d3-7a40-4d8c-9bba-39f7ab78feb8"), c.setAttribute("outsystems.function.owner.name", "Accounts"), c.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), H.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClick"), e = t.callContext(e), H.Flow.executeAsyncFlow(function() {
                            return t.interactedQuestion$Action(i.variables.questionRefIn, e)
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__onClick$Action
        }
        set _onClick$Action(e) {
            this.__onClick$Action = e
        }
        onReady$Action(e) {
            var i = this.controller;
            return H.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "22da0e23-2efe-4dff-9fa3-71aec8a69d39"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClick$Action(e) {
            var i = this.controller;
            return H.Logger.startActiveSpan("OnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClick"), t.setAttribute("outsystems.function.key", "dfdd16d3-7a40-4d8c-9bba-39f7ab78feb8"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), H.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get interactedQuestion$Action() {
            return this.hasOwnProperty("_interactedQuestion$Action") || (this._interactedQuestion$Action = function() {
                return Promise.resolve()
            }), this._interactedQuestion$Action
        }
        set interactedQuestion$Action(e) {
            this._interactedQuestion$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    s = this.idService;
                return i.onReady$Action(e)
            }), this._onReadyEventHandler
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
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
            return $.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let C = r;
    St = C
}
var St, Ct = new H.Controller.ControllerFactory(St, M);
var Rt = p,
    Zr = P.PlaceholderContent,
    Xr = P.IteratorPlaceholderContent,
    re = class re extends k.BaseWebBlock {
        static get displayName() {
            return "Assessments.MobileDropDown"
        }
        static getAttributes() {
            return {
                codeFunction: "MobileDropDown",
                functionKey: "b7554e1d-83ab-4f7f-ba24-d7c8ac74f5b9",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Assessments.MobileDropDown.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return bt
        }
        get controllerFactory() {
            return Ct
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                d = this.controller,
                e = this.idService,
                i = d.validationService,
                t = this.widgetsRecordProvider,
                s = d.callContext(),
                c = re.ifWidget,
                f = re.textWidget,
                u = re.asPrimitiveValue,
                A = re.getTranslation,
                g = this;
            return le.createElement("div", this.getRootNodeProperties(), le.createElement(m, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var n = s.clone();
                            return d.onClick$Action(d.callContext(n))
                        })
                    }, "onClick")
                },
                style: "display-flex justify-content-space-between trading-assessment__mobile-field align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, le.createElement(m, {
                align: 0,
                animate: !1,
                style: "trading-assessment__mobile-field--text",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, le.createElement(R, {
                style: "trading-assessment__mobile-update--question font-size-base",
                value: r.variables.displayValueVar,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            })), le.createElement(O, {
                image: Rt.Navigation.VersionedURL.getVersionedUrl("img/Accounts.iconarrow.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            })))
        }
    };
a(re, "View");
var Xe = re,
    L = Xe;
var _ = p,
    S = P.PlaceholderContent,
    B = P.IteratorPlaceholderContent,
    ne = class ne extends k.BaseWebBlock {
        static get displayName() {
            return "Assessments.TradingAssessmentForm"
        }
        static getAttributes() {
            return {
                codeFunction: "TradingAssessmentForm",
                functionKey: "0ada6d7f-c26d-42c2-9b6c-5fd8a6440279",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Assessments.TradingAssessmentForm.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [Oe, ce, fe, Me, D, L, xe]
        }
        get modelFactory() {
            return ot
        }
        get controllerFactory() {
            return dt
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                d = this.controller,
                e = this.idService,
                i = d.validationService,
                t = this.widgetsRecordProvider,
                s = d.callContext(),
                c = ne.ifWidget,
                f = ne.textWidget,
                u = ne.asPrimitiveValue,
                A = ne.getTranslation,
                g = this;
            return l.createElement("div", this.getRootNodeProperties(), c(r.variables.isLoadingVar, !1, this, function() {
                return [l.createElement(Oe, {
                    getOwnerSpan: a(function() {
                        return g.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return g.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(n) {
                            d.handleError(n)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: i
                    },
                    _idProps: {
                        service: e,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })]
            }, function() {
                return [l.createElement(ce, {
                    getOwnerSpan: a(function() {
                        return g.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return g.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(n) {
                            d.handleError(n)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: i
                    },
                    _idProps: {
                        service: e,
                        uuid: "1",
                        alias: "2"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        desktopLayout: new S(function() {
                            return [l.createElement(fe, {
                                getOwnerSpan: a(function() {
                                    return g.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: a(function() {
                                    return g.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    IsOpen: r.variables.isHintOpenVar,
                                    ContentBody: "To assess your trading experience and if our products are suitable for you, please provide accurate and complete answers. Your responses may affect the outcome of this assessment."
                                },
                                events: {
                                    _handleError: a(function(n) {
                                        d.handleError(n)
                                    }, "_handleError"),
                                    event$Action: a(function(n) {
                                        var o = s.clone();
                                        d.toggleHint$Action(d.callContext(o))
                                    }, "event$Action")
                                },
                                _validationProps: {
                                    validationService: i
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "2",
                                    alias: "3"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            }), c(r.variables.showCompletionStatusVar, !1, this, function() {
                                return [l.createElement(m, {
                                    align: 0,
                                    animate: !0,
                                    style: "display-flex flex-direction-column trading-assessment__status margin-top-m",
                                    visible: r.variables.showCompletionStatusVar,
                                    _idProps: {
                                        service: e,
                                        name: "CompletionStatus_Desktop"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "padding-base display-flex flex-direction-column align-items-center row-gap-m assessment-status justify-content-center completion-status__body",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "4"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(O, {
                                    image: _.Navigation.VersionedURL.getVersionedUrl("img/Accounts.DerivLightOrdersSuccessIcon.svg"),
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "5"
                                    },
                                    _widgetRecordProvider: t
                                }), l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "display-flex flex-direction-column align-items-center row-gap-s",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "6"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "7"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(y, {
                                    style: "heading6",
                                    text: ["Trading assesment complete"],
                                    _idProps: {
                                        service: e,
                                        uuid: "8"
                                    },
                                    _widgetRecordProvider: t
                                })), l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "text-align-center",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "9"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(y, {
                                    style: "font-size-base",
                                    text: ["You have successfully submitted your trading assessment."],
                                    _idProps: {
                                        service: e,
                                        uuid: "10"
                                    },
                                    _widgetRecordProvider: t
                                })))), l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "display-flex justify-content-center",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "11"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(F, {
                                    enabled: !0,
                                    isDefault: !1,
                                    onClick: a(function() {
                                        try {
                                            _.Navigation.navigateTo(_.Navigation.generateScreenURL("Accounts", "Assessments", {}), _.Transitions.createTransition(_.Transitions.TransitionAnimation.Default), null, !0)
                                        } catch (n) {
                                            if (n.name !== "RedirectOccurredException") throw n
                                        }
                                    }, "onClick"),
                                    style: "btn btn-primary trading-assessment__btn completion-status__btn",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "12"
                                    },
                                    _widgetRecordProvider: t
                                }, "OK")))]
                            }, function() {
                                return [l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "display-flex flex-direction-column row-gap-m",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "13"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "align-items-center display-flex full-width column-gap-s",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "14"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(G, {
                                    enabled: !0,
                                    onClick: a(function() {
                                        var n = s.clone();
                                        d.onClickBack$Action(d.callContext(n))
                                    }, "onClick"),
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "15"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(O, {
                                    image: _.Navigation.VersionedURL.getVersionedUrl("img/Accounts.iconback.svg"),
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "16"
                                    },
                                    _widgetRecordProvider: t
                                })), l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "display-flex justify-content-center desktop-content-header__text",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "17"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(y, {
                                    style: "font-size-h5 font-bold trading-assessment-form__header",
                                    text: ["Trading assessment"],
                                    _idProps: {
                                        service: e,
                                        uuid: "18"
                                    },
                                    _widgetRecordProvider: t
                                })), l.createElement(G, {
                                    enabled: !0,
                                    onClick: a(function() {
                                        var n = s.clone();
                                        d.toggleHint$Action(d.callContext(n))
                                    }, "onClick"),
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "19"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(O, {
                                    image: _.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneCircleQuestionBoldIcon.svg"),
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "20"
                                    },
                                    _widgetRecordProvider: t
                                }))), l.createElement(Pe, {
                                    _validationProps: {
                                        validationService: i
                                    },
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    style: "form",
                                    _idProps: {
                                        service: e,
                                        name: "TAForm"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "full-width trading-assessment__layout--wrapper",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "FormLayoutWrapper"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "trading-assessment__layout",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "Formlayout"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "RiskTolerance"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(q, {
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mandatory: !0,
                                    style: "not-required",
                                    targetWidget: "Risk_toleranceDropDown",
                                    _idProps: {
                                        service: e,
                                        uuid: "25"
                                    },
                                    _widgetRecordProvider: t
                                }, "Are you aware there is a possibility of losing 100% of the funds you use for trading?"), l.createElement(W, {
                                    _validationProps: {
                                        validationService: i,
                                        validationParentId: e.getId("TAForm")
                                    },
                                    dropdownMode: 1,
                                    emptyValue: "Select your answer",
                                    enabled: !0,
                                    list: r.variables.getRiskToleranceListDataAct.risk_toleranceListOut,
                                    mandatory: !0,
                                    onChange: a(function() {
                                        var n = s.clone();
                                        d.risk_toleranceDropDownOnChange$Action(d.callContext(n))
                                    }, "onChange"),
                                    style: "dropdown",
                                    values: a(function(n) {
                                        return n.valueAttr
                                    }, "values"),
                                    variable: r.createVariable(_.DataTypes.DataTypes.Text, r.variables.formValuesVar.risk_toleranceAttr, function(n) {
                                        r.variables.formValuesVar.risk_toleranceAttr = n
                                    }),
                                    _idProps: {
                                        service: e,
                                        name: "Risk_toleranceDropDown"
                                    },
                                    _widgetRecordProvider: t,
                                    list_dataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getRiskToleranceListDataAct.dataFetchStatusAttr),
                                    placeholders: {
                                        content: new B(function(n, o) {
                                            return [l.createElement(R, {
                                                value: r.variables.getRiskToleranceListDataAct.risk_toleranceListOut.getCurrent(o.iterationContext).textAttr,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "27"
                                                },
                                                _widgetRecordProvider: t,
                                                value_dataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getRiskToleranceListDataAct.dataFetchStatusAttr),
                                                _dependencies: []
                                            })]
                                        }, s, e, "1")
                                    },
                                    _dependencies: [u(r.variables.getRiskToleranceListDataAct.dataFetchStatusAttr)]
                                }), l.createElement(m, {
                                    align: 0,
                                    animate: !0,
                                    style: "display-flex column-gap-s align-items-flex-start risk-assessment-warning padding-s",
                                    visible: r.variables.formValuesVar.risk_toleranceAttr === "No",
                                    _idProps: {
                                        service: e,
                                        uuid: "28"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(O, {
                                    image: _.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneTriangleExclamationRegularIcon.svg"),
                                    style: "risk-assessment-warning__icon",
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "29"
                                    },
                                    _widgetRecordProvider: t
                                }), "CFDs and other financial instruments carry a high risk of rapid financial loss due to leverage. It is important to carefully consider whether you fully understand how these products work and whether you can afford to take on the significant risk of losing your funds.")), l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "SourceOfExperience"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(q, {
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mandatory: !0,
                                    style: "not-required",
                                    targetWidget: "Source_of_experienceDropDown",
                                    _idProps: {
                                        service: e,
                                        uuid: "31"
                                    },
                                    _widgetRecordProvider: t
                                }, "How much knowledge and experience do you have in relation to online trading?"), l.createElement(W, {
                                    _validationProps: {
                                        validationService: i,
                                        validationParentId: e.getId("TAForm")
                                    },
                                    dropdownMode: 1,
                                    emptyValue: "Select your answer",
                                    enabled: !0,
                                    list: r.variables.getSource_of_experienceListDataAct.source_of_experienceOut,
                                    mandatory: !0,
                                    onChange: a(function() {
                                        var n = s.clone();
                                        d.validateField$Action(e.getId("Source_of_experienceDropDown"), r.variables.formValuesVar.source_of_experienceAttr, d.callContext(n))
                                    }, "onChange"),
                                    style: "dropdown",
                                    values: a(function(n) {
                                        return n.valueAttr
                                    }, "values"),
                                    variable: r.createVariable(_.DataTypes.DataTypes.Text, r.variables.formValuesVar.source_of_experienceAttr, function(n) {
                                        r.variables.formValuesVar.source_of_experienceAttr = n
                                    }),
                                    _idProps: {
                                        service: e,
                                        name: "Source_of_experienceDropDown"
                                    },
                                    _widgetRecordProvider: t,
                                    list_dataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getSource_of_experienceListDataAct.dataFetchStatusAttr),
                                    placeholders: {
                                        content: new B(function(n, o) {
                                            return [l.createElement(R, {
                                                value: r.variables.getSource_of_experienceListDataAct.source_of_experienceOut.getCurrent(o.iterationContext).textAttr,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "33"
                                                },
                                                _widgetRecordProvider: t,
                                                value_dataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getSource_of_experienceListDataAct.dataFetchStatusAttr),
                                                _dependencies: []
                                            })]
                                        }, s, e, "2")
                                    },
                                    _dependencies: [u(r.variables.getSource_of_experienceListDataAct.dataFetchStatusAttr)]
                                })), l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "CfdExperience"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(q, {
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mandatory: !0,
                                    style: "not-required",
                                    targetWidget: "Cfd_experienceDropDown",
                                    _idProps: {
                                        service: e,
                                        uuid: "35"
                                    },
                                    _widgetRecordProvider: t
                                }, "How much experience do you have in CFDs trading?"), l.createElement(W, {
                                    _validationProps: {
                                        validationService: i,
                                        validationParentId: e.getId("TAForm")
                                    },
                                    dropdownMode: 1,
                                    emptyValue: "Select your answer",
                                    enabled: !0,
                                    list: r.variables.getCfd_experienceListDataAct.cfd_experienceOut,
                                    mandatory: !0,
                                    onChange: a(function() {
                                        var n = s.clone();
                                        d.validateField$Action(e.getId("Cfd_experienceDropDown"), r.variables.formValuesVar.cfd_experienceAttr, d.callContext(n))
                                    }, "onChange"),
                                    style: "dropdown",
                                    values: a(function(n) {
                                        return n.valueAttr
                                    }, "values"),
                                    variable: r.createVariable(_.DataTypes.DataTypes.Text, r.variables.formValuesVar.cfd_experienceAttr, function(n) {
                                        r.variables.formValuesVar.cfd_experienceAttr = n
                                    }),
                                    _idProps: {
                                        service: e,
                                        name: "Cfd_experienceDropDown"
                                    },
                                    _widgetRecordProvider: t,
                                    list_dataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getCfd_experienceListDataAct.dataFetchStatusAttr),
                                    placeholders: {
                                        content: new B(function(n, o) {
                                            return [l.createElement(R, {
                                                value: r.variables.getCfd_experienceListDataAct.cfd_experienceOut.getCurrent(o.iterationContext).textAttr,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "37"
                                                },
                                                _widgetRecordProvider: t,
                                                value_dataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getCfd_experienceListDataAct.dataFetchStatusAttr),
                                                _dependencies: []
                                            })]
                                        }, s, e, "3")
                                    },
                                    _dependencies: [u(r.variables.getCfd_experienceListDataAct.dataFetchStatusAttr)]
                                })), l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "CfdFrequency"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(q, {
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mandatory: !0,
                                    style: "not-required",
                                    targetWidget: "Cfd_frequencyDropDown",
                                    _idProps: {
                                        service: e,
                                        uuid: "39"
                                    },
                                    _widgetRecordProvider: t
                                }, "How many CFDs trades have you placed in the past 12 months?"), l.createElement(W, {
                                    _validationProps: {
                                        validationService: i,
                                        validationParentId: e.getId("TAForm")
                                    },
                                    dropdownMode: 1,
                                    emptyValue: "Select your answer",
                                    enabled: !0,
                                    list: r.variables.getCfd_frequencyDataAct.cfd_frequencyOut,
                                    mandatory: !0,
                                    onChange: a(function() {
                                        var n = s.clone();
                                        d.validateField$Action(e.getId("Cfd_frequencyDropDown"), r.variables.formValuesVar.cfd_frequencyAttr, d.callContext(n))
                                    }, "onChange"),
                                    style: "dropdown",
                                    values: a(function(n) {
                                        return n.valueAttr
                                    }, "values"),
                                    variable: r.createVariable(_.DataTypes.DataTypes.Text, r.variables.formValuesVar.cfd_frequencyAttr, function(n) {
                                        r.variables.formValuesVar.cfd_frequencyAttr = n
                                    }),
                                    _idProps: {
                                        service: e,
                                        name: "Cfd_frequencyDropDown"
                                    },
                                    _widgetRecordProvider: t,
                                    list_dataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getCfd_frequencyDataAct.dataFetchStatusAttr),
                                    placeholders: {
                                        content: new B(function(n, o) {
                                            return [l.createElement(R, {
                                                value: r.variables.getCfd_frequencyDataAct.cfd_frequencyOut.getCurrent(o.iterationContext).textAttr,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "41"
                                                },
                                                _widgetRecordProvider: t,
                                                value_dataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getCfd_frequencyDataAct.dataFetchStatusAttr),
                                                _dependencies: []
                                            })]
                                        }, s, e, "4")
                                    },
                                    _dependencies: [u(r.variables.getCfd_frequencyDataAct.dataFetchStatusAttr)]
                                })), l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "Trading_experience_financial_instruments2"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(q, {
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mandatory: !0,
                                    style: "not-required",
                                    targetWidget: "Trading_experience_financial_instrumentsDropDown",
                                    _idProps: {
                                        service: e,
                                        uuid: "43"
                                    },
                                    _widgetRecordProvider: t
                                }, "How much experience do you have with other financial instruments?"), l.createElement(W, {
                                    _validationProps: {
                                        validationService: i,
                                        validationParentId: e.getId("TAForm")
                                    },
                                    dropdownMode: 1,
                                    emptyValue: "Select your answer",
                                    enabled: !0,
                                    list: r.variables.getTrading_experience_financial_instrumentsDataAct.trading_experience_financial_instrumentsOut,
                                    mandatory: !0,
                                    onChange: a(function() {
                                        var n = s.clone();
                                        d.validateField$Action(e.getId("Trading_experience_financial_instrumentsDropDown"), r.variables.formValuesVar.trading_experience_financial_instrumentsAttr, d.callContext(n))
                                    }, "onChange"),
                                    style: "dropdown",
                                    values: a(function(n) {
                                        return n.valueAttr
                                    }, "values"),
                                    variable: r.createVariable(_.DataTypes.DataTypes.Text, r.variables.formValuesVar.trading_experience_financial_instrumentsAttr, function(n) {
                                        r.variables.formValuesVar.trading_experience_financial_instrumentsAttr = n
                                    }),
                                    _idProps: {
                                        service: e,
                                        name: "Trading_experience_financial_instrumentsDropDown"
                                    },
                                    _widgetRecordProvider: t,
                                    list_dataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getTrading_experience_financial_instrumentsDataAct.dataFetchStatusAttr),
                                    placeholders: {
                                        content: new B(function(n, o) {
                                            return [l.createElement(R, {
                                                value: r.variables.getTrading_experience_financial_instrumentsDataAct.trading_experience_financial_instrumentsOut.getCurrent(o.iterationContext).textAttr,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "45"
                                                },
                                                _widgetRecordProvider: t,
                                                value_dataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getTrading_experience_financial_instrumentsDataAct.dataFetchStatusAttr),
                                                _dependencies: []
                                            })]
                                        }, s, e, "5")
                                    },
                                    _dependencies: [u(r.variables.getTrading_experience_financial_instrumentsDataAct.dataFetchStatusAttr)]
                                })), l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "Trading_frequency_financial_instruments2"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(q, {
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mandatory: !0,
                                    style: "not-required",
                                    targetWidget: "Trading_frequency_financial_instrumentsDropDown",
                                    _idProps: {
                                        service: e,
                                        uuid: "47"
                                    },
                                    _widgetRecordProvider: t
                                }, "How many trades have you placed with other financial instruments in the past 12 months?"), l.createElement(W, {
                                    _validationProps: {
                                        validationService: i,
                                        validationParentId: e.getId("TAForm")
                                    },
                                    dropdownMode: 1,
                                    emptyValue: "Select your answer",
                                    enabled: !0,
                                    list: r.variables.getTrading_frequency_financial_instrumentsDataAct.trading_frequency_financial_instrumentsOut,
                                    mandatory: !0,
                                    onChange: a(function() {
                                        var n = s.clone();
                                        d.validateField$Action(e.getId("Trading_frequency_financial_instrumentsDropDown"), r.variables.formValuesVar.trading_frequency_financial_instrumentsAttr, d.callContext(n))
                                    }, "onChange"),
                                    style: "dropdown",
                                    values: a(function(n) {
                                        return n.valueAttr
                                    }, "values"),
                                    variable: r.createVariable(_.DataTypes.DataTypes.Text, r.variables.formValuesVar.trading_frequency_financial_instrumentsAttr, function(n) {
                                        r.variables.formValuesVar.trading_frequency_financial_instrumentsAttr = n
                                    }),
                                    _idProps: {
                                        service: e,
                                        name: "Trading_frequency_financial_instrumentsDropDown"
                                    },
                                    _widgetRecordProvider: t,
                                    list_dataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getTrading_frequency_financial_instrumentsDataAct.dataFetchStatusAttr),
                                    placeholders: {
                                        content: new B(function(n, o) {
                                            return [l.createElement(R, {
                                                value: r.variables.getTrading_frequency_financial_instrumentsDataAct.trading_frequency_financial_instrumentsOut.getCurrent(o.iterationContext).textAttr,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "49"
                                                },
                                                _widgetRecordProvider: t,
                                                value_dataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getTrading_frequency_financial_instrumentsDataAct.dataFetchStatusAttr),
                                                _dependencies: []
                                            })]
                                        }, s, e, "6")
                                    },
                                    _dependencies: [u(r.variables.getTrading_frequency_financial_instrumentsDataAct.dataFetchStatusAttr)]
                                })), l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "Cfd_trading_definitionField"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(q, {
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mandatory: !0,
                                    style: "not-required",
                                    targetWidget: "Cfd_trading_definitionDropDown",
                                    _idProps: {
                                        service: e,
                                        uuid: "51"
                                    },
                                    _widgetRecordProvider: t
                                }, "In your understanding, CFDs trading allows you to:"), l.createElement(W, {
                                    _validationProps: {
                                        validationService: i,
                                        validationParentId: e.getId("TAForm")
                                    },
                                    dropdownMode: 1,
                                    emptyValue: "Select your answer",
                                    enabled: !0,
                                    list: r.variables.getCfd_trading_definitionDataAct.cfd_trading_definitionOut,
                                    mandatory: !0,
                                    onChange: a(function() {
                                        var n = s.clone();
                                        d.validateField$Action(e.getId("Cfd_trading_definitionDropDown"), r.variables.formValuesVar.cfd_trading_definitionAttr, d.callContext(n))
                                    }, "onChange"),
                                    style: "dropdown",
                                    values: a(function(n) {
                                        return n.valueAttr
                                    }, "values"),
                                    variable: r.createVariable(_.DataTypes.DataTypes.Text, r.variables.formValuesVar.cfd_trading_definitionAttr, function(n) {
                                        r.variables.formValuesVar.cfd_trading_definitionAttr = n
                                    }),
                                    _idProps: {
                                        service: e,
                                        name: "Cfd_trading_definitionDropDown"
                                    },
                                    _widgetRecordProvider: t,
                                    list_dataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getCfd_trading_definitionDataAct.dataFetchStatusAttr),
                                    placeholders: {
                                        content: new B(function(n, o) {
                                            return [l.createElement(R, {
                                                value: r.variables.getCfd_trading_definitionDataAct.cfd_trading_definitionOut.getCurrent(o.iterationContext).textAttr,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "53"
                                                },
                                                _widgetRecordProvider: t,
                                                value_dataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getCfd_trading_definitionDataAct.dataFetchStatusAttr),
                                                _dependencies: []
                                            })]
                                        }, s, e, "7")
                                    },
                                    _dependencies: [u(r.variables.getCfd_trading_definitionDataAct.dataFetchStatusAttr)]
                                })), l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "Leverage_impact_tradingField"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(q, {
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mandatory: !0,
                                    style: "not-required",
                                    targetWidget: "Leverage_impact_tradingDropDown",
                                    _idProps: {
                                        service: e,
                                        uuid: "55"
                                    },
                                    _widgetRecordProvider: t
                                }, "How does leverage affect CFDs trading?"), l.createElement(W, {
                                    _validationProps: {
                                        validationService: i,
                                        validationParentId: e.getId("TAForm")
                                    },
                                    dropdownMode: 1,
                                    emptyValue: "Select your answer",
                                    enabled: !0,
                                    list: r.variables.getLeverage_impact_tradingDataAct.leverage_impact_tradingOut,
                                    mandatory: !0,
                                    onChange: a(function() {
                                        var n = s.clone();
                                        d.validateField$Action(e.getId("Leverage_impact_tradingDropDown"), r.variables.formValuesVar.leverage_impact_tradingAttr, d.callContext(n))
                                    }, "onChange"),
                                    style: "dropdown",
                                    values: a(function(n) {
                                        return n.valueAttr
                                    }, "values"),
                                    variable: r.createVariable(_.DataTypes.DataTypes.Text, r.variables.formValuesVar.leverage_impact_tradingAttr, function(n) {
                                        r.variables.formValuesVar.leverage_impact_tradingAttr = n
                                    }),
                                    _idProps: {
                                        service: e,
                                        name: "Leverage_impact_tradingDropDown"
                                    },
                                    _widgetRecordProvider: t,
                                    list_dataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getLeverage_impact_tradingDataAct.dataFetchStatusAttr),
                                    placeholders: {
                                        content: new B(function(n, o) {
                                            return [l.createElement(R, {
                                                value: r.variables.getLeverage_impact_tradingDataAct.leverage_impact_tradingOut.getCurrent(o.iterationContext).textAttr,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "57"
                                                },
                                                _widgetRecordProvider: t,
                                                value_dataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getLeverage_impact_tradingDataAct.dataFetchStatusAttr),
                                                _dependencies: []
                                            })]
                                        }, s, e, "8")
                                    },
                                    _dependencies: [u(r.variables.getLeverage_impact_tradingDataAct.dataFetchStatusAttr)]
                                })), l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "Leverage_trading_high_risk_stop_lossField"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(q, {
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mandatory: !0,
                                    style: "not-required",
                                    targetWidget: "Leverage_trading_high_risk_stop_lossDropDown",
                                    _idProps: {
                                        service: e,
                                        uuid: "59"
                                    },
                                    _widgetRecordProvider: t
                                }, "Leverage trading involves significant risk, so it's wise to use risk management tools such as stop loss. Stop loss allows you to:"), l.createElement(W, {
                                    _validationProps: {
                                        validationService: i,
                                        validationParentId: e.getId("TAForm")
                                    },
                                    dropdownMode: 1,
                                    emptyValue: "Select your answer",
                                    enabled: !0,
                                    list: r.variables.getLeverage_trading_high_risk_stop_lossDataAct.leverage_trading_high_risk_stop_lossOut,
                                    mandatory: !0,
                                    onChange: a(function() {
                                        var n = s.clone();
                                        d.validateField$Action(e.getId("Leverage_trading_high_risk_stop_lossDropDown"), r.variables.formValuesVar.leverage_trading_high_risk_stop_lossAttr, d.callContext(n))
                                    }, "onChange"),
                                    style: "dropdown",
                                    values: a(function(n) {
                                        return n.valueAttr
                                    }, "values"),
                                    variable: r.createVariable(_.DataTypes.DataTypes.Text, r.variables.formValuesVar.leverage_trading_high_risk_stop_lossAttr, function(n) {
                                        r.variables.formValuesVar.leverage_trading_high_risk_stop_lossAttr = n
                                    }),
                                    _idProps: {
                                        service: e,
                                        name: "Leverage_trading_high_risk_stop_lossDropDown"
                                    },
                                    _widgetRecordProvider: t,
                                    list_dataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getLeverage_trading_high_risk_stop_lossDataAct.dataFetchStatusAttr),
                                    placeholders: {
                                        content: new B(function(n, o) {
                                            return [l.createElement(R, {
                                                value: r.variables.getLeverage_trading_high_risk_stop_lossDataAct.leverage_trading_high_risk_stop_lossOut.getCurrent(o.iterationContext).textAttr,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "61"
                                                },
                                                _widgetRecordProvider: t,
                                                value_dataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getLeverage_trading_high_risk_stop_lossDataAct.dataFetchStatusAttr),
                                                _dependencies: []
                                            })]
                                        }, s, e, "9")
                                    },
                                    _dependencies: [u(r.variables.getLeverage_trading_high_risk_stop_lossDataAct.dataFetchStatusAttr)]
                                })), l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "Required_initial_marginField"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(q, {
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    mandatory: !0,
                                    style: "not-required",
                                    targetWidget: "Required_initial_marginDropDown",
                                    _idProps: {
                                        service: e,
                                        uuid: "63"
                                    },
                                    _widgetRecordProvider: t
                                }, "When are you required to pay an initial margin?"), l.createElement(W, {
                                    _validationProps: {
                                        validationService: i,
                                        validationParentId: e.getId("TAForm")
                                    },
                                    dropdownMode: 1,
                                    emptyValue: "Select your answer",
                                    enabled: !0,
                                    list: r.variables.getRequired_initial_marginDataAct.required_initial_marginOut,
                                    mandatory: !0,
                                    onChange: a(function() {
                                        var n = s.clone();
                                        d.validateField$Action(e.getId("Required_initial_marginDropDown"), r.variables.formValuesVar.required_initial_marginAttr, d.callContext(n))
                                    }, "onChange"),
                                    style: "dropdown",
                                    values: a(function(n) {
                                        return n.valueAttr
                                    }, "values"),
                                    variable: r.createVariable(_.DataTypes.DataTypes.Text, r.variables.formValuesVar.required_initial_marginAttr, function(n) {
                                        r.variables.formValuesVar.required_initial_marginAttr = n
                                    }),
                                    _idProps: {
                                        service: e,
                                        name: "Required_initial_marginDropDown"
                                    },
                                    _widgetRecordProvider: t,
                                    list_dataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getRequired_initial_marginDataAct.dataFetchStatusAttr),
                                    placeholders: {
                                        content: new B(function(n, o) {
                                            return [l.createElement(R, {
                                                value: r.variables.getRequired_initial_marginDataAct.required_initial_marginOut.getCurrent(o.iterationContext).textAttr,
                                                _idProps: {
                                                    service: n,
                                                    uuid: "65"
                                                },
                                                _widgetRecordProvider: t,
                                                value_dataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getRequired_initial_marginDataAct.dataFetchStatusAttr),
                                                _dependencies: []
                                            })]
                                        }, s, e, "10")
                                    },
                                    _dependencies: [u(r.variables.getRequired_initial_marginDataAct.dataFetchStatusAttr)]
                                })))), l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "trading-assessment__footer new-form__footer",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "Footer"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(F, {
                                    enabled: r.getCachedValue(e.getId("MlNeCzj4gkqLc7CXaKh2tA.Enabled"), function() {
                                        return r.variables.isUpdateVar ? r.variables.isUserAwareOfRiskVar && r.widgets.get(e.getId("TAForm")).validAttr && r.variables.isFormDirtyVar : r.variables.isUserAwareOfRiskVar
                                    }, function() {
                                        return r.variables.isUpdateVar
                                    }, function() {
                                        return r.variables.isUserAwareOfRiskVar
                                    }, function() {
                                        return r.widgets.get(e.getId("TAForm")).validAttr
                                    }, function() {
                                        return r.variables.isFormDirtyVar
                                    }),
                                    isDefault: !0,
                                    onClick: a(function() {
                                        return g.validateWidget(e.getId("TAForm")), Promise.resolve().then(function() {
                                            var n = s.clone();
                                            return d.saveChangesOnClick$Action(d.callContext(n))
                                        })
                                    }, "onClick"),
                                    style: "btn btn-primary trading-assessment__btn",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "67"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(R, {
                                    value: r.getCachedValue(e.getId("ITqJbfleSkmXpoS0_PAyjw.Value"), function() {
                                        return r.variables.isUpdateVar ? "Save changes" : "Submit"
                                    }, function() {
                                        return r.variables.isUpdateVar
                                    }),
                                    _idProps: {
                                        service: e,
                                        uuid: "68"
                                    },
                                    _widgetRecordProvider: t
                                })))))]
                            }), l.createElement(oe, {
                                showPopup: r.variables.showRiskAcceptanceModalVar,
                                style: "popup-dialog appropriateness-warning-modal",
                                _idProps: {
                                    service: e,
                                    uuid: "69"
                                },
                                _widgetRecordProvider: t
                            }, l.createElement(m, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column row-gap-base",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "70"
                                },
                                _widgetRecordProvider: t
                            }, l.createElement(y, {
                                style: "heading6 font-bold",
                                text: ["Appropriateness Test warning"],
                                _idProps: {
                                    service: e,
                                    uuid: "71"
                                },
                                _widgetRecordProvider: t
                            }), l.createElement(y, {
                                style: "appropriateness-warning-modal__body",
                                text: ["In providing our services to you, we are required to ask you for some information to assess if a given product or service is appropriate for you and whether you have the experience and knowledge to understand the risks involved.", l.createElement("br"), l.createElement("br"), "Based on your answers, it looks like you have insufficient knowledge and experience in trading CFDs. CFD trading is risky and you could potentially lose all of your capital.", l.createElement("br"), l.createElement("br"), "Please note that by clicking \u2018OK\u2019, you may be exposing yourself to risks. You may not have the knowledge or experience to properly assess or mitigate these risks, which may be significant, including the risk of losing the entire sum you have invested."],
                                _idProps: {
                                    service: e,
                                    uuid: "72"
                                },
                                _widgetRecordProvider: t
                            }), l.createElement(m, {
                                align: 0,
                                animate: !1,
                                style: "display-flex flex-direction-column row-gap-s",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "73"
                                },
                                _widgetRecordProvider: t
                            }, l.createElement(F, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                isDefault: !1,
                                onClick: a(function() {
                                    g.validateWidget("");
                                    var n = s.clone();
                                    d.onAcceptRisk$Action(d.callContext(n))
                                }, "onClick"),
                                style: "btn btn-primary ",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "74"
                                },
                                _widgetRecordProvider: t
                            }, l.createElement(y, {
                                extendedProperties: {
                                    style: "font-size: 14px;"
                                },
                                text: ["Ok"],
                                _idProps: {
                                    service: e,
                                    uuid: "75"
                                },
                                _widgetRecordProvider: t
                            }))))), l.createElement(Me, {
                                getOwnerSpan: a(function() {
                                    return g.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: a(function() {
                                    return g.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    IsOpen: r.variables.isConfirmScreenExitVar,
                                    Title: "Exit trading assessment"
                                },
                                events: {
                                    _handleError: a(function(n) {
                                        d.handleError(n)
                                    }, "_handleError"),
                                    event$Action: a(function(n) {
                                        var o = s.clone();
                                        d.exitAssessmentEvent$Action(n, d.callContext(o))
                                    }, "event$Action")
                                },
                                _validationProps: {
                                    validationService: i
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "76",
                                    alias: "4"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            })]
                        }),
                        tabletLayout: S.Empty,
                        defaultLayout: new S(function() {
                            return [c(r.variables.showCompletionStatusVar || r.variables.showRiskAcceptanceModalVar, !1, this, function() {
                                return [l.createElement(m, {
                                    align: 0,
                                    animate: !0,
                                    style: "display-flex flex-direction-column full-height trading-assessment__status",
                                    visible: r.variables.showCompletionStatusVar,
                                    _idProps: {
                                        service: e,
                                        name: "CompletionStatus"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "padding-base display-flex flex-direction-column align-items-center row-gap-m assessment-status justify-content-center",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "78"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(O, {
                                    image: _.Navigation.VersionedURL.getVersionedUrl("img/Accounts.DerivLightOrdersSuccessIcon.svg"),
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "79"
                                    },
                                    _widgetRecordProvider: t
                                }), l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "display-flex flex-direction-column align-items-center row-gap-s",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "80"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "81"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(y, {
                                    style: "heading6",
                                    text: ["Trading assesment complete"],
                                    _idProps: {
                                        service: e,
                                        uuid: "82"
                                    },
                                    _widgetRecordProvider: t
                                })), l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "text-align-center",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "83"
                                    },
                                    _widgetRecordProvider: t
                                }, "You have successfully submitted your trading assessment."))), l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "padding-base trading-assessment__footer",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "84"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(F, {
                                    enabled: !0,
                                    isDefault: !1,
                                    onClick: a(function() {
                                        try {
                                            _.Navigation.navigateTo(_.Navigation.generateScreenURL("Accounts", "Assessments", {}), _.Transitions.createTransition(_.Transitions.TransitionAnimation.Default), null, !0)
                                        } catch (n) {
                                            if (n.name !== "RedirectOccurredException") throw n
                                        }
                                    }, "onClick"),
                                    style: "btn btn-primary full-width",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "85"
                                    },
                                    _widgetRecordProvider: t
                                }, "Ok"))), l.createElement(m, {
                                    align: 0,
                                    animate: !0,
                                    style: "display-flex flex-direction-column full-height",
                                    visible: r.variables.showRiskAcceptanceModalVar,
                                    _idProps: {
                                        service: e,
                                        name: "RiskAcceptanceModal"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "appropriateness-warning-modal__mobile--header",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "87"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(y, {
                                    style: "heading5 font-bold",
                                    text: ["Appropriateness Test warning"],
                                    _idProps: {
                                        service: e,
                                        uuid: "88"
                                    },
                                    _widgetRecordProvider: t
                                })), l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "padding-base full-height assessment-status",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "89"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(y, {
                                    style: "appropriateness-warning-modal__body",
                                    text: ["In providing our services to you, we are required to ask you for some information to assess if a given product or service is appropriate for you and whether you have the experience and knowledge to understand the risks involved.", l.createElement("br"), l.createElement("br"), "Based on your answers, it looks like you have insufficient knowledge and experience in trading CFDs. CFD trading is risky and you could potentially lose all of your capital.", l.createElement("br"), l.createElement("br"), "Please note that by clicking \u2018OK\u2019, you may be exposing yourself to risks. You may not have the knowledge or experience to properly assess or mitigate these risks, which may be significant, including the risk of losing the entire sum you have invested."],
                                    _idProps: {
                                        service: e,
                                        uuid: "90"
                                    },
                                    _widgetRecordProvider: t
                                })), l.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    style: "padding-base trading-assessment__footer",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "91"
                                    },
                                    _widgetRecordProvider: t
                                }, l.createElement(F, {
                                    enabled: !0,
                                    isDefault: !1,
                                    onClick: a(function() {
                                        var n = s.clone();
                                        d.onAcceptRisk$Action(d.callContext(n))
                                    }, "onClick"),
                                    style: "btn btn-primary full-width",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "92"
                                    },
                                    _widgetRecordProvider: t
                                }, "Ok")))]
                            }, function() {
                                return [c(r.variables.isUpdateVar, !1, this, function() {
                                    return [c(r.variables.questionRefVar.showQuestionAttr, !1, this, function() {
                                        return [l.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column row-gap-base full-height",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "93"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: "padding-base trading-assessment__mobile-update--question-answer__header",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                name: "NavigationHeader"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(O, {
                                            extendedEvents: {
                                                onClick: a(function() {
                                                    var n = s.clone();
                                                    d.onClickBackInAnswerChangeForm$Action(d.callContext(n))
                                                }, "onClick")
                                            },
                                            image: _.Navigation.VersionedURL.getVersionedUrl("img/Accounts.iconback.svg"),
                                            type: 0,
                                            _idProps: {
                                                service: e,
                                                uuid: "95"
                                            },
                                            _widgetRecordProvider: t
                                        })), l.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: "trading-assessment__mobile-update--question-answer__body",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "96"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(m, {
                                            align: 0,
                                            animate: !0,
                                            style: "full-height",
                                            visible: r.variables.questionRefVar.questionNumberAttr === 1,
                                            _idProps: {
                                                service: e,
                                                uuid: "97"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(D, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                FieldRef: "risk_tolerance",
                                                ListData: r.getCachedValue(e.getId("epKgXWilLkGlR95ig4l9fQ.ListData"), function() {
                                                    return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getRiskToleranceListDataAct.risk_toleranceListOut, new b, function(n, o) {
                                                        return o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                    })
                                                }, function() {
                                                    return r.variables.getRiskToleranceListDataAct.risk_toleranceListOut
                                                }),
                                                _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getRiskToleranceListDataAct.dataFetchStatusAttr),
                                                ShouldSubmitOnSelection: !1,
                                                IsError: !r.variables.isUserAwareOfRiskVar,
                                                Question: "Are you aware there is a possibility of losing 100% of the funds you use for trading?",
                                                SelectedValue: r.variables.formValuesVar.risk_toleranceAttr
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError"),
                                                selectedItem$Action: a(function(n, o) {
                                                    return Promise.resolve().then(function() {
                                                        var h = s.clone();
                                                        return d.updateTAFormAnswer$Action(n, o, d.callContext(h))
                                                    })
                                                }, "selectedItem$Action")
                                            },
                                            _validationProps: {
                                                validationService: i
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "98",
                                                alias: "5"
                                            },
                                            _widgetRecordProvider: t,
                                            placeholders: {
                                                errorDetails: new S(function() {
                                                    return [l.createElement(m, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex flex-direction-column row-gap-s margin-top-s",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: e,
                                                            uuid: "99"
                                                        },
                                                        _widgetRecordProvider: t
                                                    }, l.createElement(y, {
                                                        style: "error-text",
                                                        text: ["To continue, you'll need to confirm that you understand the risk to your capital."],
                                                        _idProps: {
                                                            service: e,
                                                            uuid: "100"
                                                        },
                                                        _widgetRecordProvider: t
                                                    }), l.createElement(m, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex column-gap-s align-items-flex-start risk-assessment-warning padding-s",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: e,
                                                            uuid: "101"
                                                        },
                                                        _widgetRecordProvider: t
                                                    }, l.createElement(O, {
                                                        image: _.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneTriangleExclamationRegularIcon.svg"),
                                                        style: "risk-assessment-warning__icon",
                                                        type: 0,
                                                        _idProps: {
                                                            service: e,
                                                            uuid: "102"
                                                        },
                                                        _widgetRecordProvider: t
                                                    }), "CFDs and other financial instruments carry a high risk of rapid financial loss due to leverage. It is important to carefully consider whether you fully understand how these products work and whether you can afford to take on the significant risk of losing your funds."))]
                                                })
                                            },
                                            _dependencies: []
                                        })), l.createElement(m, {
                                            align: 0,
                                            animate: !0,
                                            style: "full-height",
                                            visible: r.variables.questionRefVar.questionNumberAttr === 2,
                                            _idProps: {
                                                service: e,
                                                uuid: "103"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(D, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                FieldRef: "source_of_experience",
                                                Question: "How much knowledge and experience do you have in relation to online trading?",
                                                ListData: r.getCachedValue(e.getId("qD_t4PbhtUKGfzcttgJk8A.ListData"), function() {
                                                    return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getSource_of_experienceListDataAct.source_of_experienceOut, new b, function(n, o) {
                                                        return o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                    })
                                                }, function() {
                                                    return r.variables.getSource_of_experienceListDataAct.source_of_experienceOut
                                                }),
                                                _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getSource_of_experienceListDataAct.dataFetchStatusAttr),
                                                ShouldSubmitOnSelection: !1,
                                                SelectedValue: r.variables.formValuesVar.source_of_experienceAttr
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError"),
                                                selectedItem$Action: a(function(n, o) {
                                                    return Promise.resolve().then(function() {
                                                        var h = s.clone();
                                                        return d.updateTAFormAnswer$Action(n, o, d.callContext(h))
                                                    })
                                                }, "selectedItem$Action")
                                            },
                                            _validationProps: {
                                                validationService: i
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "104",
                                                alias: "6"
                                            },
                                            _widgetRecordProvider: t,
                                            placeholders: {
                                                errorDetails: S.Empty
                                            },
                                            _dependencies: []
                                        })), l.createElement(m, {
                                            align: 0,
                                            animate: !0,
                                            style: "full-height",
                                            visible: r.variables.questionRefVar.questionNumberAttr === 3,
                                            _idProps: {
                                                service: e,
                                                uuid: "105"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(D, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                FieldRef: "cfd_experience",
                                                SelectedValue: r.variables.formValuesVar.cfd_experienceAttr,
                                                ListData: r.getCachedValue(e.getId("5+OElmHN206s2SkR3iDKrw.ListData"), function() {
                                                    return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getCfd_experienceListDataAct.cfd_experienceOut, new b, function(n, o) {
                                                        return o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                    })
                                                }, function() {
                                                    return r.variables.getCfd_experienceListDataAct.cfd_experienceOut
                                                }),
                                                _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getCfd_experienceListDataAct.dataFetchStatusAttr),
                                                Question: "How much experience do you have in CFDs trading?",
                                                ShouldSubmitOnSelection: !1
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError"),
                                                selectedItem$Action: a(function(n, o) {
                                                    return Promise.resolve().then(function() {
                                                        var h = s.clone();
                                                        return d.updateTAFormAnswer$Action(n, o, d.callContext(h))
                                                    })
                                                }, "selectedItem$Action")
                                            },
                                            _validationProps: {
                                                validationService: i
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "106",
                                                alias: "7"
                                            },
                                            _widgetRecordProvider: t,
                                            placeholders: {
                                                errorDetails: S.Empty
                                            },
                                            _dependencies: []
                                        })), l.createElement(m, {
                                            align: 0,
                                            animate: !0,
                                            style: "full-height",
                                            visible: r.variables.questionRefVar.questionNumberAttr === 4,
                                            _idProps: {
                                                service: e,
                                                uuid: "107"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(D, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                SelectedValue: r.variables.formValuesVar.cfd_frequencyAttr,
                                                ListData: r.getCachedValue(e.getId("Zr8yJzgpLUeiGzIg019svg.ListData"), function() {
                                                    return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getCfd_frequencyDataAct.cfd_frequencyOut, new b, function(n, o) {
                                                        return o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                    })
                                                }, function() {
                                                    return r.variables.getCfd_frequencyDataAct.cfd_frequencyOut
                                                }),
                                                _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getCfd_frequencyDataAct.dataFetchStatusAttr),
                                                ShouldSubmitOnSelection: !1,
                                                FieldRef: "cfd_frequency",
                                                Question: "How many CFDs trades have you placed in the past 12 months?"
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError"),
                                                selectedItem$Action: a(function(n, o) {
                                                    return Promise.resolve().then(function() {
                                                        var h = s.clone();
                                                        return d.updateTAFormAnswer$Action(n, o, d.callContext(h))
                                                    })
                                                }, "selectedItem$Action")
                                            },
                                            _validationProps: {
                                                validationService: i
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "108",
                                                alias: "8"
                                            },
                                            _widgetRecordProvider: t,
                                            placeholders: {
                                                errorDetails: S.Empty
                                            },
                                            _dependencies: []
                                        })), l.createElement(m, {
                                            align: 0,
                                            animate: !0,
                                            style: "full-height",
                                            visible: r.variables.questionRefVar.questionNumberAttr === 5,
                                            _idProps: {
                                                service: e,
                                                uuid: "109"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(D, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                SelectedValue: r.variables.formValuesVar.trading_experience_financial_instrumentsAttr,
                                                ListData: r.getCachedValue(e.getId("gcN0RQka1k2oZ6vM5HoU+w.ListData"), function() {
                                                    return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getTrading_experience_financial_instrumentsDataAct.trading_experience_financial_instrumentsOut, new b, function(n, o) {
                                                        return o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                    })
                                                }, function() {
                                                    return r.variables.getTrading_experience_financial_instrumentsDataAct.trading_experience_financial_instrumentsOut
                                                }),
                                                _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getTrading_experience_financial_instrumentsDataAct.dataFetchStatusAttr),
                                                Question: "How much experience do you have with other financial instruments?",
                                                ShouldSubmitOnSelection: !1,
                                                FieldRef: "trading_experience_financial_instruments"
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError"),
                                                selectedItem$Action: a(function(n, o) {
                                                    return Promise.resolve().then(function() {
                                                        var h = s.clone();
                                                        return d.updateTAFormAnswer$Action(n, o, d.callContext(h))
                                                    })
                                                }, "selectedItem$Action")
                                            },
                                            _validationProps: {
                                                validationService: i
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "110",
                                                alias: "9"
                                            },
                                            _widgetRecordProvider: t,
                                            placeholders: {
                                                errorDetails: S.Empty
                                            },
                                            _dependencies: []
                                        })), l.createElement(m, {
                                            align: 0,
                                            animate: !0,
                                            style: "full-height",
                                            visible: r.variables.questionRefVar.questionNumberAttr === 6,
                                            _idProps: {
                                                service: e,
                                                uuid: "111"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(D, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                SelectedValue: r.variables.formValuesVar.trading_frequency_financial_instrumentsAttr,
                                                ListData: r.getCachedValue(e.getId("+AsmRqMIR0aw815TAsPFHg.ListData"), function() {
                                                    return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getTrading_frequency_financial_instrumentsDataAct.trading_frequency_financial_instrumentsOut, new b, function(n, o) {
                                                        return o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                    })
                                                }, function() {
                                                    return r.variables.getTrading_frequency_financial_instrumentsDataAct.trading_frequency_financial_instrumentsOut
                                                }),
                                                _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getTrading_frequency_financial_instrumentsDataAct.dataFetchStatusAttr),
                                                ShouldSubmitOnSelection: !1,
                                                FieldRef: "trading_frequency_financial_instruments",
                                                Question: "How many trades have you placed with other financial instruments in the past 12 months?"
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError"),
                                                selectedItem$Action: a(function(n, o) {
                                                    return Promise.resolve().then(function() {
                                                        var h = s.clone();
                                                        return d.updateTAFormAnswer$Action(n, o, d.callContext(h))
                                                    })
                                                }, "selectedItem$Action")
                                            },
                                            _validationProps: {
                                                validationService: i
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "112",
                                                alias: "10"
                                            },
                                            _widgetRecordProvider: t,
                                            placeholders: {
                                                errorDetails: S.Empty
                                            },
                                            _dependencies: []
                                        })), l.createElement(m, {
                                            align: 0,
                                            animate: !0,
                                            style: "full-height",
                                            visible: r.variables.questionRefVar.questionNumberAttr === 7,
                                            _idProps: {
                                                service: e,
                                                uuid: "113"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(D, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                Question: "In your understanding, CFDs trading allows you to:",
                                                FieldRef: "cfd_trading_definition",
                                                ShouldSubmitOnSelection: !1,
                                                ListData: r.getCachedValue(e.getId("eiP0RoYQpEWWa8ReYBwtlQ.ListData"), function() {
                                                    return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getCfd_trading_definitionDataAct.cfd_trading_definitionOut, new b, function(n, o) {
                                                        return o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                    })
                                                }, function() {
                                                    return r.variables.getCfd_trading_definitionDataAct.cfd_trading_definitionOut
                                                }),
                                                _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getCfd_trading_definitionDataAct.dataFetchStatusAttr),
                                                SelectedValue: r.variables.formValuesVar.cfd_trading_definitionAttr
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError"),
                                                selectedItem$Action: a(function(n, o) {
                                                    return Promise.resolve().then(function() {
                                                        var h = s.clone();
                                                        return d.updateTAFormAnswer$Action(n, o, d.callContext(h))
                                                    })
                                                }, "selectedItem$Action")
                                            },
                                            _validationProps: {
                                                validationService: i
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "114",
                                                alias: "11"
                                            },
                                            _widgetRecordProvider: t,
                                            placeholders: {
                                                errorDetails: S.Empty
                                            },
                                            _dependencies: []
                                        })), l.createElement(m, {
                                            align: 0,
                                            animate: !0,
                                            style: "full-height",
                                            visible: r.variables.questionRefVar.questionNumberAttr === 8,
                                            _idProps: {
                                                service: e,
                                                uuid: "115"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(D, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                ListData: r.getCachedValue(e.getId("5KCoGk+etUi_rHgK2iE6Kw.ListData"), function() {
                                                    return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getLeverage_impact_tradingDataAct.leverage_impact_tradingOut, new b, function(n, o) {
                                                        return o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                    })
                                                }, function() {
                                                    return r.variables.getLeverage_impact_tradingDataAct.leverage_impact_tradingOut
                                                }),
                                                _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getLeverage_impact_tradingDataAct.dataFetchStatusAttr),
                                                ShouldSubmitOnSelection: !1,
                                                Question: "How does leverage affect CFDs trading?",
                                                SelectedValue: r.variables.formValuesVar.leverage_impact_tradingAttr,
                                                FieldRef: "leverage_impact_trading"
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError"),
                                                selectedItem$Action: a(function(n, o) {
                                                    return Promise.resolve().then(function() {
                                                        var h = s.clone();
                                                        return d.updateTAFormAnswer$Action(n, o, d.callContext(h))
                                                    })
                                                }, "selectedItem$Action")
                                            },
                                            _validationProps: {
                                                validationService: i
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "116",
                                                alias: "12"
                                            },
                                            _widgetRecordProvider: t,
                                            placeholders: {
                                                errorDetails: S.Empty
                                            },
                                            _dependencies: []
                                        })), l.createElement(m, {
                                            align: 0,
                                            animate: !0,
                                            style: "full-height",
                                            visible: r.variables.questionRefVar.questionNumberAttr === 9,
                                            _idProps: {
                                                service: e,
                                                uuid: "117"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(D, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                ListData: r.getCachedValue(e.getId("QJShaZZggEifkSTk4EHY2w.ListData"), function() {
                                                    return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getLeverage_trading_high_risk_stop_lossDataAct.leverage_trading_high_risk_stop_lossOut, new b, function(n, o) {
                                                        return o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                    })
                                                }, function() {
                                                    return r.variables.getLeverage_trading_high_risk_stop_lossDataAct.leverage_trading_high_risk_stop_lossOut
                                                }),
                                                _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getLeverage_trading_high_risk_stop_lossDataAct.dataFetchStatusAttr),
                                                FieldRef: "leverage_trading_high_risk_stop_loss",
                                                Question: "Leverage trading involves significant risk, so it's wise to use risk management tools such as stop loss. Stop loss allows you to:",
                                                ShouldSubmitOnSelection: !1,
                                                SelectedValue: r.variables.formValuesVar.leverage_trading_high_risk_stop_lossAttr
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError"),
                                                selectedItem$Action: a(function(n, o) {
                                                    return Promise.resolve().then(function() {
                                                        var h = s.clone();
                                                        return d.updateTAFormAnswer$Action(n, o, d.callContext(h))
                                                    })
                                                }, "selectedItem$Action")
                                            },
                                            _validationProps: {
                                                validationService: i
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "118",
                                                alias: "13"
                                            },
                                            _widgetRecordProvider: t,
                                            placeholders: {
                                                errorDetails: S.Empty
                                            },
                                            _dependencies: []
                                        })), l.createElement(m, {
                                            align: 0,
                                            animate: !0,
                                            style: "full-height",
                                            visible: r.variables.questionRefVar.questionNumberAttr === 10,
                                            _idProps: {
                                                service: e,
                                                uuid: "119"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(D, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                ShouldSubmitOnSelection: !1,
                                                ListData: r.getCachedValue(e.getId("Vn7UEH0NIUGSCq+qnlSD3A.ListData"), function() {
                                                    return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getRequired_initial_marginDataAct.required_initial_marginOut, new b, function(n, o) {
                                                        return o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                    })
                                                }, function() {
                                                    return r.variables.getRequired_initial_marginDataAct.required_initial_marginOut
                                                }),
                                                _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getRequired_initial_marginDataAct.dataFetchStatusAttr),
                                                Question: "When are you required to pay an initial margin?",
                                                SelectedValue: r.variables.formValuesVar.required_initial_marginAttr,
                                                FieldRef: "required_initial_margin"
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError"),
                                                selectedItem$Action: a(function(n, o) {
                                                    return Promise.resolve().then(function() {
                                                        var h = s.clone();
                                                        return d.updateTAFormAnswer$Action(n, o, d.callContext(h))
                                                    })
                                                }, "selectedItem$Action")
                                            },
                                            _validationProps: {
                                                validationService: i
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "120",
                                                alias: "14"
                                            },
                                            _widgetRecordProvider: t,
                                            placeholders: {
                                                errorDetails: S.Empty
                                            },
                                            _dependencies: []
                                        }))))]
                                    }, function() {
                                        return [l.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "121"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(fe, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                ContentBody: "To assess your trading experience and if our products are suitable for you, please provide accurate and complete answers. Your responses may affect the outcome of this assessment.",
                                                IsOpen: r.variables.isHintOpenVar
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError"),
                                                event$Action: a(function(n) {
                                                    var o = s.clone();
                                                    d.toggleHint$Action(d.callContext(o))
                                                }, "event$Action")
                                            },
                                            _validationProps: {
                                                validationService: i
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "122",
                                                alias: "15"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        }), l.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex column-gap-s align-items-center padding-base",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                name: "MobileTAUpdateHeader"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(G, {
                                            enabled: !0,
                                            transition: _.Transitions.createTransition(_.Transitions.TransitionAnimation.Default),
                                            url: _.Navigation.generateScreenURL("Accounts", "Assessments", {}),
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "124"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(O, {
                                            image: _.Navigation.VersionedURL.getVersionedUrl("img/Accounts.iconback.svg"),
                                            type: 0,
                                            _idProps: {
                                                service: e,
                                                uuid: "125"
                                            },
                                            _widgetRecordProvider: t
                                        })), l.createElement(y, {
                                            style: "font-size-h5 font-bold trading-assessment-form__header",
                                            text: ["Trading assessment"],
                                            _idProps: {
                                                service: e,
                                                uuid: "126"
                                            },
                                            _widgetRecordProvider: t
                                        }), l.createElement(G, {
                                            enabled: !0,
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            onClick: a(function() {
                                                var n = s.clone();
                                                d.toggleHint$Action(d.callContext(n))
                                            }, "onClick"),
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "127"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(O, {
                                            image: _.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneCircleQuestionBoldIcon.svg"),
                                            type: 0,
                                            _idProps: {
                                                service: e,
                                                uuid: "128"
                                            },
                                            _widgetRecordProvider: t
                                        }))), l.createElement(Pe, {
                                            _validationProps: {
                                                validationService: i
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            style: "form display-flex flex-direction-column",
                                            _idProps: {
                                                service: e,
                                                name: "UpdateTA"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column row-gap-m padding-base overflow-vertical trading-assessment__mobile--form",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "130"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column row-gap-s",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "131"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(y, {
                                            style: "font-size-base trading-assessment__mobile-update--question",
                                            text: ["Do you understand that you could potentially lose 100% of the money you use to trade?"],
                                            _idProps: {
                                                service: e,
                                                uuid: "132"
                                            },
                                            _widgetRecordProvider: t
                                        }), l.createElement(L, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                QuestionRef: 1,
                                                SelectedValue: r.variables.formValuesVar.risk_toleranceAttr,
                                                ListData: r.getCachedValue(e.getId("9_wUaG7Jfkux4M_g8F6GMg.ListData"), function() {
                                                    return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getRiskToleranceListDataAct.risk_toleranceListOut, new x, function(n, o) {
                                                        return o.idAttr = n.idAttr, o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                    })
                                                }, function() {
                                                    return r.variables.getRiskToleranceListDataAct.risk_toleranceListOut
                                                }),
                                                _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getRiskToleranceListDataAct.dataFetchStatusAttr)
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError"),
                                                interactedQuestion$Action: a(function(n) {
                                                    var o = s.clone();
                                                    d.onChangeAnswer$Action(n, d.callContext(o))
                                                }, "interactedQuestion$Action")
                                            },
                                            _validationProps: {
                                                validationService: i,
                                                validationParentId: e.getId("UpdateTA")
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "133",
                                                alias: "16"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })), l.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column row-gap-s",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "134"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(y, {
                                            style: "font-size-base trading-assessment__mobile-update--question",
                                            text: ["How much knowledge and experience do you have in relation to online trading?"],
                                            _idProps: {
                                                service: e,
                                                uuid: "135"
                                            },
                                            _widgetRecordProvider: t
                                        }), l.createElement(L, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                QuestionRef: 2,
                                                SelectedValue: r.variables.formValuesVar.source_of_experienceAttr,
                                                ListData: r.getCachedValue(e.getId("OhPdfpLi10WBx+b124Copw.ListData"), function() {
                                                    return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getSource_of_experienceListDataAct.source_of_experienceOut, new x, function(n, o) {
                                                        return o.idAttr = n.idAttr, o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                    })
                                                }, function() {
                                                    return r.variables.getSource_of_experienceListDataAct.source_of_experienceOut
                                                }),
                                                _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getSource_of_experienceListDataAct.dataFetchStatusAttr)
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError"),
                                                interactedQuestion$Action: a(function(n) {
                                                    var o = s.clone();
                                                    d.onChangeAnswer$Action(n, d.callContext(o))
                                                }, "interactedQuestion$Action")
                                            },
                                            _validationProps: {
                                                validationService: i,
                                                validationParentId: e.getId("UpdateTA")
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "136",
                                                alias: "17"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })), l.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column row-gap-s",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "137"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(y, {
                                            style: "font-size-base trading-assessment__mobile-update--question",
                                            text: ["How much experience do you have in CFD trading?"],
                                            _idProps: {
                                                service: e,
                                                uuid: "138"
                                            },
                                            _widgetRecordProvider: t
                                        }), l.createElement(L, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                ListData: r.getCachedValue(e.getId("HvMs_Tam7E2kPiR5XDlH2g.ListData"), function() {
                                                    return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getCfd_experienceListDataAct.cfd_experienceOut, new x, function(n, o) {
                                                        return o.idAttr = n.idAttr, o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                    })
                                                }, function() {
                                                    return r.variables.getCfd_experienceListDataAct.cfd_experienceOut
                                                }),
                                                _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getCfd_experienceListDataAct.dataFetchStatusAttr),
                                                SelectedValue: r.variables.formValuesVar.cfd_experienceAttr,
                                                QuestionRef: 3
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError"),
                                                interactedQuestion$Action: a(function(n) {
                                                    var o = s.clone();
                                                    d.onChangeAnswer$Action(n, d.callContext(o))
                                                }, "interactedQuestion$Action")
                                            },
                                            _validationProps: {
                                                validationService: i,
                                                validationParentId: e.getId("UpdateTA")
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "139",
                                                alias: "18"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })), l.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column row-gap-s",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "140"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(y, {
                                            style: "font-size-base trading-assessment__mobile-update--question",
                                            text: ["How many CFD trades have you placed in the past 12 months?"],
                                            _idProps: {
                                                service: e,
                                                uuid: "141"
                                            },
                                            _widgetRecordProvider: t
                                        }), l.createElement(L, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                QuestionRef: 4,
                                                ListData: r.getCachedValue(e.getId("IAQ6aTGPH0muIKYAg6lhnQ.ListData"), function() {
                                                    return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getCfd_frequencyDataAct.cfd_frequencyOut, new x, function(n, o) {
                                                        return o.idAttr = n.idAttr, o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                    })
                                                }, function() {
                                                    return r.variables.getCfd_frequencyDataAct.cfd_frequencyOut
                                                }),
                                                _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getCfd_frequencyDataAct.dataFetchStatusAttr),
                                                SelectedValue: r.variables.formValuesVar.cfd_frequencyAttr
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError"),
                                                interactedQuestion$Action: a(function(n) {
                                                    var o = s.clone();
                                                    d.onChangeAnswer$Action(n, d.callContext(o))
                                                }, "interactedQuestion$Action")
                                            },
                                            _validationProps: {
                                                validationService: i,
                                                validationParentId: e.getId("UpdateTA")
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "142",
                                                alias: "19"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })), l.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column row-gap-s",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "143"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(y, {
                                            style: "font-size-base trading-assessment__mobile-update--question",
                                            text: ["How much experience do you have with other financial instruments?"],
                                            _idProps: {
                                                service: e,
                                                uuid: "144"
                                            },
                                            _widgetRecordProvider: t
                                        }), l.createElement(L, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                QuestionRef: 5,
                                                ListData: r.getCachedValue(e.getId("BqzQV2Pvy0WAQxf2akHVmg.ListData"), function() {
                                                    return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getTrading_experience_financial_instrumentsDataAct.trading_experience_financial_instrumentsOut, new x, function(n, o) {
                                                        return o.idAttr = n.idAttr, o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                    })
                                                }, function() {
                                                    return r.variables.getTrading_experience_financial_instrumentsDataAct.trading_experience_financial_instrumentsOut
                                                }),
                                                _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getTrading_experience_financial_instrumentsDataAct.dataFetchStatusAttr),
                                                SelectedValue: r.variables.formValuesVar.trading_experience_financial_instrumentsAttr
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError"),
                                                interactedQuestion$Action: a(function(n) {
                                                    var o = s.clone();
                                                    d.onChangeAnswer$Action(n, d.callContext(o))
                                                }, "interactedQuestion$Action")
                                            },
                                            _validationProps: {
                                                validationService: i,
                                                validationParentId: e.getId("UpdateTA")
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "145",
                                                alias: "20"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })), l.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column row-gap-s",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "146"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(y, {
                                            style: "font-size-base trading-assessment__mobile-update--question",
                                            text: ["How many trades have you placed with other financial instruments in the past 12 months?"],
                                            _idProps: {
                                                service: e,
                                                uuid: "147"
                                            },
                                            _widgetRecordProvider: t
                                        }), l.createElement(L, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                QuestionRef: 6,
                                                SelectedValue: r.variables.formValuesVar.trading_frequency_financial_instrumentsAttr,
                                                ListData: r.getCachedValue(e.getId("2BHG24zPAUC_pbX3M0aO4A.ListData"), function() {
                                                    return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getTrading_frequency_financial_instrumentsDataAct.trading_frequency_financial_instrumentsOut, new x, function(n, o) {
                                                        return o.idAttr = n.idAttr, o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                    })
                                                }, function() {
                                                    return r.variables.getTrading_frequency_financial_instrumentsDataAct.trading_frequency_financial_instrumentsOut
                                                }),
                                                _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getTrading_frequency_financial_instrumentsDataAct.dataFetchStatusAttr)
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError"),
                                                interactedQuestion$Action: a(function(n) {
                                                    var o = s.clone();
                                                    d.onChangeAnswer$Action(n, d.callContext(o))
                                                }, "interactedQuestion$Action")
                                            },
                                            _validationProps: {
                                                validationService: i,
                                                validationParentId: e.getId("UpdateTA")
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "148",
                                                alias: "21"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })), l.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column row-gap-s",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "149"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(y, {
                                            style: "font-size-base trading-assessment__mobile-update--question",
                                            text: ["In your understanding, CFD trading allows you to:"],
                                            _idProps: {
                                                service: e,
                                                uuid: "150"
                                            },
                                            _widgetRecordProvider: t
                                        }), l.createElement(L, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                QuestionRef: 7,
                                                ListData: r.getCachedValue(e.getId("pMstPnOssEusue2cEqQ3Yw.ListData"), function() {
                                                    return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getCfd_trading_definitionDataAct.cfd_trading_definitionOut, new x, function(n, o) {
                                                        return o.idAttr = n.idAttr, o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                    })
                                                }, function() {
                                                    return r.variables.getCfd_trading_definitionDataAct.cfd_trading_definitionOut
                                                }),
                                                _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getCfd_trading_definitionDataAct.dataFetchStatusAttr),
                                                SelectedValue: r.variables.formValuesVar.cfd_trading_definitionAttr
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError"),
                                                interactedQuestion$Action: a(function(n) {
                                                    var o = s.clone();
                                                    d.onChangeAnswer$Action(n, d.callContext(o))
                                                }, "interactedQuestion$Action")
                                            },
                                            _validationProps: {
                                                validationService: i,
                                                validationParentId: e.getId("UpdateTA")
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "151",
                                                alias: "22"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })), l.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column row-gap-s",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "152"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(y, {
                                            style: "font-size-base trading-assessment__mobile-update--question",
                                            text: ["How does leverage affect CFD trading?"],
                                            _idProps: {
                                                service: e,
                                                uuid: "153"
                                            },
                                            _widgetRecordProvider: t
                                        }), l.createElement(L, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                SelectedValue: r.variables.formValuesVar.leverage_impact_tradingAttr,
                                                ListData: r.getCachedValue(e.getId("g7FoN_9QMEKJpnm0pKFLVg.ListData"), function() {
                                                    return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getLeverage_impact_tradingDataAct.leverage_impact_tradingOut, new x, function(n, o) {
                                                        return o.idAttr = n.idAttr, o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                    })
                                                }, function() {
                                                    return r.variables.getLeverage_impact_tradingDataAct.leverage_impact_tradingOut
                                                }),
                                                _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getLeverage_impact_tradingDataAct.dataFetchStatusAttr),
                                                QuestionRef: 8
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError"),
                                                interactedQuestion$Action: a(function(n) {
                                                    var o = s.clone();
                                                    d.onChangeAnswer$Action(n, d.callContext(o))
                                                }, "interactedQuestion$Action")
                                            },
                                            _validationProps: {
                                                validationService: i,
                                                validationParentId: e.getId("UpdateTA")
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "154",
                                                alias: "23"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })), l.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column row-gap-s",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "155"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(y, {
                                            style: "font-size-base trading-assessment__mobile-update--question",
                                            text: ["Leverage trading is high-risk, so it\u2019s a good idea to use risk management features such as stop loss. Stop loss allows you to: "],
                                            _idProps: {
                                                service: e,
                                                uuid: "156"
                                            },
                                            _widgetRecordProvider: t
                                        }), l.createElement(L, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                SelectedValue: r.variables.formValuesVar.leverage_trading_high_risk_stop_lossAttr,
                                                ListData: r.getCachedValue(e.getId("lvcYt_2NPkidIkmp3HM69w.ListData"), function() {
                                                    return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getLeverage_trading_high_risk_stop_lossDataAct.leverage_trading_high_risk_stop_lossOut, new x, function(n, o) {
                                                        return o.idAttr = n.idAttr, o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                    })
                                                }, function() {
                                                    return r.variables.getLeverage_trading_high_risk_stop_lossDataAct.leverage_trading_high_risk_stop_lossOut
                                                }),
                                                _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getLeverage_trading_high_risk_stop_lossDataAct.dataFetchStatusAttr),
                                                QuestionRef: 9
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError"),
                                                interactedQuestion$Action: a(function(n) {
                                                    var o = s.clone();
                                                    d.onChangeAnswer$Action(n, d.callContext(o))
                                                }, "interactedQuestion$Action")
                                            },
                                            _validationProps: {
                                                validationService: i,
                                                validationParentId: e.getId("UpdateTA")
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "157",
                                                alias: "24"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })), l.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column row-gap-s",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "158"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(y, {
                                            style: "font-size-base trading-assessment__mobile-update--question",
                                            text: ["When are you required to pay an initial margin?"],
                                            _idProps: {
                                                service: e,
                                                uuid: "159"
                                            },
                                            _widgetRecordProvider: t
                                        }), l.createElement(L, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                QuestionRef: 10,
                                                ListData: r.getCachedValue(e.getId("bug5aNb5uUmhuaZ0LjR4Kw.ListData"), function() {
                                                    return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getRequired_initial_marginDataAct.required_initial_marginOut, new x, function(n, o) {
                                                        return o.idAttr = n.idAttr, o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                    })
                                                }, function() {
                                                    return r.variables.getRequired_initial_marginDataAct.required_initial_marginOut
                                                }),
                                                _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getRequired_initial_marginDataAct.dataFetchStatusAttr),
                                                SelectedValue: r.variables.formValuesVar.required_initial_marginAttr
                                            },
                                            events: {
                                                _handleError: a(function(n) {
                                                    d.handleError(n)
                                                }, "_handleError"),
                                                interactedQuestion$Action: a(function(n) {
                                                    var o = s.clone();
                                                    d.onChangeAnswer$Action(n, d.callContext(o))
                                                }, "interactedQuestion$Action")
                                            },
                                            _validationProps: {
                                                validationService: i,
                                                validationParentId: e.getId("UpdateTA")
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "160",
                                                alias: "25"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        }))), l.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            style: "padding-base trading-assessment__footer",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "161"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(F, {
                                            enabled: r.variables.isFormDirtyVar,
                                            isDefault: !0,
                                            onClick: a(function() {
                                                return g.validateWidget(e.getId("UpdateTA")), Promise.resolve().then(function() {
                                                    var n = s.clone();
                                                    return d.saveChangesOnClick$Action(d.callContext(n))
                                                })
                                            }, "onClick"),
                                            style: "btn btn-primary full-width",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "162"
                                            },
                                            _widgetRecordProvider: t
                                        }, "Save changes"))))]
                                    })]
                                }, function() {
                                    return [l.createElement(m, {
                                        align: 0,
                                        animate: !1,
                                        style: "full-height",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "163"
                                        },
                                        _widgetRecordProvider: t
                                    }, l.createElement(xe, {
                                        getOwnerSpan: a(function() {
                                            return g.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: a(function() {
                                            return g.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            CurrentStep: r.variables.currentStepVar,
                                            StepCount: 10
                                        },
                                        events: {
                                            _handleError: a(function(n) {
                                                d.handleError(n)
                                            }, "_handleError"),
                                            goToPreviousStep$Action: a(function(n) {
                                                var o = s.clone();
                                                d.goToPreviousStep$Action(n, d.callContext(o))
                                            }, "goToPreviousStep$Action")
                                        },
                                        _validationProps: {
                                            validationService: i
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "164",
                                            alias: "26"
                                        },
                                        _widgetRecordProvider: t,
                                        placeholders: {
                                            section: new S(function() {
                                                return [l.createElement(fe, {
                                                    getOwnerSpan: a(function() {
                                                        return g.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: a(function() {
                                                        return g.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        ContentBody: "To assess your trading experience and if our products are suitable for you, please provide accurate and complete answers. Your responses may affect the outcome of this assessment.",
                                                        IsOpen: r.variables.isHintOpenVar
                                                    },
                                                    events: {
                                                        _handleError: a(function(n) {
                                                            d.handleError(n)
                                                        }, "_handleError"),
                                                        event$Action: a(function(n) {
                                                            var o = s.clone();
                                                            d.toggleHint$Action(d.callContext(o))
                                                        }, "event$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: i
                                                    },
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "165",
                                                        alias: "27"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    _dependencies: []
                                                }), l.createElement(m, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex flex-direction-column row-gap-base",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "166"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, l.createElement(m, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "align-items-center display-flex full-width column-gap-s padding-base",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "167"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, l.createElement(m, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex justify-content-center desktop-content-header__text",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "168"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, l.createElement(y, {
                                                    style: "font-size-h5 font-bold trading-assessment-form__header",
                                                    text: ["Trading assessment"],
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "169"
                                                    },
                                                    _widgetRecordProvider: t
                                                })), l.createElement(G, {
                                                    enabled: !0,
                                                    onClick: a(function() {
                                                        var n = s.clone();
                                                        d.toggleHint$Action(d.callContext(n))
                                                    }, "onClick"),
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "170"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, l.createElement(O, {
                                                    image: _.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneCircleQuestionBoldIcon.svg"),
                                                    type: 0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "171"
                                                    },
                                                    _widgetRecordProvider: t
                                                }))), l.createElement(m, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex flex-direction-column row-gap-base",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "172"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, l.createElement(m, {
                                                    align: 0,
                                                    animate: !0,
                                                    style: "full-height",
                                                    visible: r.variables.currentStepVar === 1,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "173"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, l.createElement(D, {
                                                    getOwnerSpan: a(function() {
                                                        return g.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: a(function() {
                                                        return g.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        Question: "Are you aware there is a possibility of losing 100% of the funds you use for trading?",
                                                        FieldRef: "risk_tolerance",
                                                        ListData: r.getCachedValue(e.getId("qwKD88k71E2y9oAmIlW5VA.ListData"), function() {
                                                            return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getRiskToleranceListDataAct.risk_toleranceListOut, new b, function(n, o) {
                                                                return o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                            })
                                                        }, function() {
                                                            return r.variables.getRiskToleranceListDataAct.risk_toleranceListOut
                                                        }),
                                                        _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getRiskToleranceListDataAct.dataFetchStatusAttr),
                                                        IsError: !r.variables.isUserAwareOfRiskVar,
                                                        SelectedValue: r.variables.formValuesVar.risk_toleranceAttr
                                                    },
                                                    events: {
                                                        _handleError: a(function(n) {
                                                            d.handleError(n)
                                                        }, "_handleError"),
                                                        selectedItem$Action: a(function(n, o) {
                                                            return Promise.resolve().then(function() {
                                                                var h = s.clone();
                                                                return d.mobileUpdateFormData$Action(n, o, d.callContext(h))
                                                            })
                                                        }, "selectedItem$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: i
                                                    },
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "174",
                                                        alias: "28"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    placeholders: {
                                                        errorDetails: new S(function() {
                                                            return [l.createElement(m, {
                                                                align: 0,
                                                                animate: !0,
                                                                style: "display-flex flex-direction-column row-gap-s margin-top-s",
                                                                visible: r.variables.formValuesVar.risk_toleranceAttr === "No",
                                                                _idProps: {
                                                                    service: e,
                                                                    uuid: "175"
                                                                },
                                                                _widgetRecordProvider: t
                                                            }, l.createElement(y, {
                                                                style: "error-text",
                                                                text: ["To continue, you'll need to confirm that you understand the risk to your capital."],
                                                                _idProps: {
                                                                    service: e,
                                                                    uuid: "176"
                                                                },
                                                                _widgetRecordProvider: t
                                                            }), l.createElement(m, {
                                                                align: 0,
                                                                animate: !0,
                                                                style: "display-flex column-gap-s align-items-flex-start risk-assessment-warning padding-s",
                                                                visible: r.variables.formValuesVar.risk_toleranceAttr === "No",
                                                                _idProps: {
                                                                    service: e,
                                                                    uuid: "177"
                                                                },
                                                                _widgetRecordProvider: t
                                                            }, l.createElement(O, {
                                                                image: _.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneTriangleExclamationRegularIcon.svg"),
                                                                style: "risk-assessment-warning__icon",
                                                                type: 0,
                                                                _idProps: {
                                                                    service: e,
                                                                    uuid: "178"
                                                                },
                                                                _widgetRecordProvider: t
                                                            }), "CFDs and other financial instruments carry a high risk of rapid financial loss due to leverage. It is important to carefully consider whether you fully understand how these products work and whether you can afford to take on the significant risk of losing your funds."))]
                                                        })
                                                    },
                                                    _dependencies: [u(r.variables.formValuesVar.risk_toleranceAttr)]
                                                })), l.createElement(m, {
                                                    align: 0,
                                                    animate: !0,
                                                    style: "full-height",
                                                    visible: r.variables.currentStepVar === 2,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "179"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, l.createElement(D, {
                                                    getOwnerSpan: a(function() {
                                                        return g.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: a(function() {
                                                        return g.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        FieldRef: "source_of_experience",
                                                        Question: "How much knowledge and experience do you have in relation to online trading?",
                                                        ListData: r.getCachedValue(e.getId("NUQDJuQLnEmRSDWkfxLoYQ.ListData"), function() {
                                                            return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getSource_of_experienceListDataAct.source_of_experienceOut, new b, function(n, o) {
                                                                return o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                            })
                                                        }, function() {
                                                            return r.variables.getSource_of_experienceListDataAct.source_of_experienceOut
                                                        }),
                                                        _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getSource_of_experienceListDataAct.dataFetchStatusAttr),
                                                        SelectedValue: r.variables.formValuesVar.source_of_experienceAttr
                                                    },
                                                    events: {
                                                        _handleError: a(function(n) {
                                                            d.handleError(n)
                                                        }, "_handleError"),
                                                        selectedItem$Action: a(function(n, o) {
                                                            return Promise.resolve().then(function() {
                                                                var h = s.clone();
                                                                return d.mobileUpdateFormData$Action(n, o, d.callContext(h))
                                                            })
                                                        }, "selectedItem$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: i
                                                    },
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "180",
                                                        alias: "29"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    placeholders: {
                                                        errorDetails: S.Empty
                                                    },
                                                    _dependencies: []
                                                })), l.createElement(m, {
                                                    align: 0,
                                                    animate: !0,
                                                    style: "full-height",
                                                    visible: r.variables.currentStepVar === 3,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "181"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, l.createElement(D, {
                                                    getOwnerSpan: a(function() {
                                                        return g.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: a(function() {
                                                        return g.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        ListData: r.getCachedValue(e.getId("5nN9kTKVYE2dt2tKj0oHXw.ListData"), function() {
                                                            return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getCfd_experienceListDataAct.cfd_experienceOut, new b, function(n, o) {
                                                                return o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                            })
                                                        }, function() {
                                                            return r.variables.getCfd_experienceListDataAct.cfd_experienceOut
                                                        }),
                                                        _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getCfd_experienceListDataAct.dataFetchStatusAttr),
                                                        FieldRef: "cfd_experience",
                                                        Question: "How much experience do you have in CFDs trading?",
                                                        SelectedValue: r.variables.formValuesVar.cfd_experienceAttr
                                                    },
                                                    events: {
                                                        _handleError: a(function(n) {
                                                            d.handleError(n)
                                                        }, "_handleError"),
                                                        selectedItem$Action: a(function(n, o) {
                                                            return Promise.resolve().then(function() {
                                                                var h = s.clone();
                                                                return d.mobileUpdateFormData$Action(n, o, d.callContext(h))
                                                            })
                                                        }, "selectedItem$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: i
                                                    },
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "182",
                                                        alias: "30"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    placeholders: {
                                                        errorDetails: S.Empty
                                                    },
                                                    _dependencies: []
                                                })), l.createElement(m, {
                                                    align: 0,
                                                    animate: !0,
                                                    style: "full-height",
                                                    visible: r.variables.currentStepVar === 4,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "183"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, l.createElement(D, {
                                                    getOwnerSpan: a(function() {
                                                        return g.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: a(function() {
                                                        return g.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        Question: "How many CFDs trades have you placed in the past 12 months?",
                                                        FieldRef: "cfd_frequency",
                                                        ListData: r.getCachedValue(e.getId("gKC2fib2NUCoYCDL+Bn1EQ.ListData"), function() {
                                                            return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getCfd_frequencyDataAct.cfd_frequencyOut, new b, function(n, o) {
                                                                return o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                            })
                                                        }, function() {
                                                            return r.variables.getCfd_frequencyDataAct.cfd_frequencyOut
                                                        }),
                                                        _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getCfd_frequencyDataAct.dataFetchStatusAttr),
                                                        SelectedValue: r.variables.formValuesVar.cfd_frequencyAttr
                                                    },
                                                    events: {
                                                        _handleError: a(function(n) {
                                                            d.handleError(n)
                                                        }, "_handleError"),
                                                        selectedItem$Action: a(function(n, o) {
                                                            return Promise.resolve().then(function() {
                                                                var h = s.clone();
                                                                return d.mobileUpdateFormData$Action(n, o, d.callContext(h))
                                                            })
                                                        }, "selectedItem$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: i
                                                    },
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "184",
                                                        alias: "31"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    placeholders: {
                                                        errorDetails: S.Empty
                                                    },
                                                    _dependencies: []
                                                })), l.createElement(m, {
                                                    align: 0,
                                                    animate: !0,
                                                    style: "full-height",
                                                    visible: r.variables.currentStepVar === 5,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "185"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, l.createElement(D, {
                                                    getOwnerSpan: a(function() {
                                                        return g.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: a(function() {
                                                        return g.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        ListData: r.getCachedValue(e.getId("kxV_yAGMwE2ACQOodYBzjQ.ListData"), function() {
                                                            return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getTrading_experience_financial_instrumentsDataAct.trading_experience_financial_instrumentsOut, new b, function(n, o) {
                                                                return o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                            })
                                                        }, function() {
                                                            return r.variables.getTrading_experience_financial_instrumentsDataAct.trading_experience_financial_instrumentsOut
                                                        }),
                                                        _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getTrading_experience_financial_instrumentsDataAct.dataFetchStatusAttr),
                                                        SelectedValue: r.variables.formValuesVar.trading_experience_financial_instrumentsAttr,
                                                        Question: "How much experience do you have with other financial instruments?",
                                                        FieldRef: "trading_experience_financial_instruments"
                                                    },
                                                    events: {
                                                        _handleError: a(function(n) {
                                                            d.handleError(n)
                                                        }, "_handleError"),
                                                        selectedItem$Action: a(function(n, o) {
                                                            return Promise.resolve().then(function() {
                                                                var h = s.clone();
                                                                return d.mobileUpdateFormData$Action(n, o, d.callContext(h))
                                                            })
                                                        }, "selectedItem$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: i
                                                    },
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "186",
                                                        alias: "32"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    placeholders: {
                                                        errorDetails: S.Empty
                                                    },
                                                    _dependencies: []
                                                })), l.createElement(m, {
                                                    align: 0,
                                                    animate: !0,
                                                    style: "full-height",
                                                    visible: r.variables.currentStepVar === 6,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "187"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, l.createElement(D, {
                                                    getOwnerSpan: a(function() {
                                                        return g.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: a(function() {
                                                        return g.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        ListData: r.getCachedValue(e.getId("2pytNiNEx0G7mvCttIVTMQ.ListData"), function() {
                                                            return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getTrading_frequency_financial_instrumentsDataAct.trading_frequency_financial_instrumentsOut, new b, function(n, o) {
                                                                return o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                            })
                                                        }, function() {
                                                            return r.variables.getTrading_frequency_financial_instrumentsDataAct.trading_frequency_financial_instrumentsOut
                                                        }),
                                                        _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getTrading_frequency_financial_instrumentsDataAct.dataFetchStatusAttr),
                                                        Question: "How many trades have you placed with other financial instruments in the past 12 months?",
                                                        FieldRef: "trading_frequency_financial_instruments",
                                                        SelectedValue: r.variables.formValuesVar.trading_frequency_financial_instrumentsAttr
                                                    },
                                                    events: {
                                                        _handleError: a(function(n) {
                                                            d.handleError(n)
                                                        }, "_handleError"),
                                                        selectedItem$Action: a(function(n, o) {
                                                            return Promise.resolve().then(function() {
                                                                var h = s.clone();
                                                                return d.mobileUpdateFormData$Action(n, o, d.callContext(h))
                                                            })
                                                        }, "selectedItem$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: i
                                                    },
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "188",
                                                        alias: "33"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    placeholders: {
                                                        errorDetails: S.Empty
                                                    },
                                                    _dependencies: []
                                                })), l.createElement(m, {
                                                    align: 0,
                                                    animate: !0,
                                                    style: "full-height",
                                                    visible: r.variables.currentStepVar === 7,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "189"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, l.createElement(D, {
                                                    getOwnerSpan: a(function() {
                                                        return g.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: a(function() {
                                                        return g.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        FieldRef: "cfd_trading_definition",
                                                        ListData: r.getCachedValue(e.getId("qN_A2HdI9kS1OAuPjg9GPA.ListData"), function() {
                                                            return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getCfd_trading_definitionDataAct.cfd_trading_definitionOut, new b, function(n, o) {
                                                                return o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                            })
                                                        }, function() {
                                                            return r.variables.getCfd_trading_definitionDataAct.cfd_trading_definitionOut
                                                        }),
                                                        _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getCfd_trading_definitionDataAct.dataFetchStatusAttr),
                                                        Question: "In your understanding, CFDs trading allows you to:",
                                                        SelectedValue: r.variables.formValuesVar.cfd_trading_definitionAttr
                                                    },
                                                    events: {
                                                        _handleError: a(function(n) {
                                                            d.handleError(n)
                                                        }, "_handleError"),
                                                        selectedItem$Action: a(function(n, o) {
                                                            return Promise.resolve().then(function() {
                                                                var h = s.clone();
                                                                return d.mobileUpdateFormData$Action(n, o, d.callContext(h))
                                                            })
                                                        }, "selectedItem$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: i
                                                    },
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "190",
                                                        alias: "34"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    placeholders: {
                                                        errorDetails: S.Empty
                                                    },
                                                    _dependencies: []
                                                })), l.createElement(m, {
                                                    align: 0,
                                                    animate: !0,
                                                    style: "full-height",
                                                    visible: r.variables.currentStepVar === 8,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "191"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, l.createElement(D, {
                                                    getOwnerSpan: a(function() {
                                                        return g.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: a(function() {
                                                        return g.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        Question: "How does leverage affect CFDs trading?",
                                                        SelectedValue: r.variables.formValuesVar.leverage_impact_tradingAttr,
                                                        ListData: r.getCachedValue(e.getId("UBfA0icx8EyRSrJmI1phnw.ListData"), function() {
                                                            return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getLeverage_impact_tradingDataAct.leverage_impact_tradingOut, new b, function(n, o) {
                                                                return o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                            })
                                                        }, function() {
                                                            return r.variables.getLeverage_impact_tradingDataAct.leverage_impact_tradingOut
                                                        }),
                                                        _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getLeverage_impact_tradingDataAct.dataFetchStatusAttr),
                                                        FieldRef: "leverage_impact_trading"
                                                    },
                                                    events: {
                                                        _handleError: a(function(n) {
                                                            d.handleError(n)
                                                        }, "_handleError"),
                                                        selectedItem$Action: a(function(n, o) {
                                                            return Promise.resolve().then(function() {
                                                                var h = s.clone();
                                                                return d.mobileUpdateFormData$Action(n, o, d.callContext(h))
                                                            })
                                                        }, "selectedItem$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: i
                                                    },
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "192",
                                                        alias: "35"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    placeholders: {
                                                        errorDetails: S.Empty
                                                    },
                                                    _dependencies: []
                                                })), l.createElement(m, {
                                                    align: 0,
                                                    animate: !0,
                                                    style: "full-height",
                                                    visible: r.variables.currentStepVar === 9,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "193"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, l.createElement(D, {
                                                    getOwnerSpan: a(function() {
                                                        return g.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: a(function() {
                                                        return g.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        SelectedValue: r.variables.formValuesVar.leverage_trading_high_risk_stop_lossAttr,
                                                        ListData: r.getCachedValue(e.getId("OjiWpIPzEEmkWZ+jVASUQg.ListData"), function() {
                                                            return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getLeverage_trading_high_risk_stop_lossDataAct.leverage_trading_high_risk_stop_lossOut, new b, function(n, o) {
                                                                return o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                            })
                                                        }, function() {
                                                            return r.variables.getLeverage_trading_high_risk_stop_lossDataAct.leverage_trading_high_risk_stop_lossOut
                                                        }),
                                                        _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getLeverage_trading_high_risk_stop_lossDataAct.dataFetchStatusAttr),
                                                        Question: "Leverage trading involves significant risk, so it's wise to use risk management tools such as stop loss. Stop loss allows you to:",
                                                        FieldRef: "leverage_trading_high_risk_stop_loss"
                                                    },
                                                    events: {
                                                        _handleError: a(function(n) {
                                                            d.handleError(n)
                                                        }, "_handleError"),
                                                        selectedItem$Action: a(function(n, o) {
                                                            return Promise.resolve().then(function() {
                                                                var h = s.clone();
                                                                return d.mobileUpdateFormData$Action(n, o, d.callContext(h))
                                                            })
                                                        }, "selectedItem$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: i
                                                    },
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "194",
                                                        alias: "36"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    placeholders: {
                                                        errorDetails: S.Empty
                                                    },
                                                    _dependencies: []
                                                })), l.createElement(m, {
                                                    align: 0,
                                                    animate: !0,
                                                    style: "full-height",
                                                    visible: r.variables.currentStepVar >= 10,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "195"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, l.createElement(D, {
                                                    getOwnerSpan: a(function() {
                                                        return g.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: a(function() {
                                                        return g.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        ListData: r.getCachedValue(e.getId("3+gDZc0AcEOW3iVU5WOlSw.ListData"), function() {
                                                            return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.getRequired_initial_marginDataAct.required_initial_marginOut, new b, function(n, o) {
                                                                return o.textAttr = n.textAttr, o.valueAttr = n.valueAttr, o
                                                            })
                                                        }, function() {
                                                            return r.variables.getRequired_initial_marginDataAct.required_initial_marginOut
                                                        }),
                                                        _listDataInDataFetchStatus: _.Model.calculateDataFetchStatus(r.variables.getRequired_initial_marginDataAct.dataFetchStatusAttr),
                                                        SelectedValue: r.variables.formValuesVar.required_initial_marginAttr,
                                                        Question: "When are you required to pay an initial margin?",
                                                        FieldRef: "required_initial_margin"
                                                    },
                                                    events: {
                                                        _handleError: a(function(n) {
                                                            d.handleError(n)
                                                        }, "_handleError"),
                                                        selectedItem$Action: a(function(n, o) {
                                                            return Promise.resolve().then(function() {
                                                                var h = s.clone();
                                                                return d.mobileUpdateFormData$Action(n, o, d.callContext(h))
                                                            })
                                                        }, "selectedItem$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: i
                                                    },
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "196",
                                                        alias: "37"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    placeholders: {
                                                        errorDetails: S.Empty
                                                    },
                                                    _dependencies: []
                                                }))))]
                                            })
                                        },
                                        _dependencies: [u(r.variables.getRequired_initial_marginDataAct.required_initial_marginOut), u(r.variables.getLeverage_trading_high_risk_stop_lossDataAct.leverage_trading_high_risk_stop_lossOut), u(r.variables.getLeverage_impact_tradingDataAct.leverage_impact_tradingOut), u(r.variables.getCfd_trading_definitionDataAct.cfd_trading_definitionOut), u(r.variables.getTrading_frequency_financial_instrumentsDataAct.trading_frequency_financial_instrumentsOut), u(r.variables.getTrading_experience_financial_instrumentsDataAct.trading_experience_financial_instrumentsOut), u(r.variables.getCfd_frequencyDataAct.cfd_frequencyOut), u(r.variables.getCfd_experienceListDataAct.cfd_experienceOut), u(r.variables.getSource_of_experienceListDataAct.source_of_experienceOut), u(r.variables.formValuesVar.required_initial_marginAttr), u(r.variables.formValuesVar.leverage_trading_high_risk_stop_lossAttr), u(r.variables.formValuesVar.leverage_impact_tradingAttr), u(r.variables.formValuesVar.cfd_trading_definitionAttr), u(r.variables.formValuesVar.trading_frequency_financial_instrumentsAttr), u(r.variables.formValuesVar.trading_experience_financial_instrumentsAttr), u(r.variables.formValuesVar.cfd_frequencyAttr), u(r.variables.formValuesVar.cfd_experienceAttr), u(r.variables.formValuesVar.source_of_experienceAttr), u(r.variables.formValuesVar.risk_toleranceAttr), u(r.variables.isUserAwareOfRiskVar), u(r.variables.getRequired_initial_marginDataAct.dataFetchStatusAttr), u(r.variables.getLeverage_trading_high_risk_stop_lossDataAct.dataFetchStatusAttr), u(r.variables.getLeverage_impact_tradingDataAct.dataFetchStatusAttr), u(r.variables.getCfd_trading_definitionDataAct.dataFetchStatusAttr), u(r.variables.getTrading_frequency_financial_instrumentsDataAct.dataFetchStatusAttr), u(r.variables.getTrading_experience_financial_instrumentsDataAct.dataFetchStatusAttr), u(r.variables.getCfd_frequencyDataAct.dataFetchStatusAttr), u(r.variables.getCfd_experienceListDataAct.dataFetchStatusAttr), u(r.variables.getSource_of_experienceListDataAct.dataFetchStatusAttr), u(r.variables.getRiskToleranceListDataAct.dataFetchStatusAttr), u(r.variables.getRiskToleranceListDataAct.risk_toleranceListOut), u(r.variables.currentStepVar), u(r.variables.isHintOpenVar)]
                                    }))]
                                })]
                            })]
                        })
                    },
                    _dependencies: [u(r.variables.currentStepVar), u(r.variables.questionRefVar.questionNumberAttr), u(r.variables.questionRefVar.showQuestionAttr), u(r.variables.isConfirmScreenExitVar), u(r.variables.showRiskAcceptanceModalVar), u(r.variables.isFormDirtyVar), u(r.widgets.get(e.getId("TAForm")).validAttr), u(r.variables.isUserAwareOfRiskVar), u(r.variables.isUpdateVar), u(r.variables.getRequired_initial_marginDataAct.required_initial_marginOut), u(r.variables.getLeverage_trading_high_risk_stop_lossDataAct.leverage_trading_high_risk_stop_lossOut), u(r.variables.getLeverage_impact_tradingDataAct.leverage_impact_tradingOut), u(r.variables.getCfd_trading_definitionDataAct.cfd_trading_definitionOut), u(r.variables.getTrading_frequency_financial_instrumentsDataAct.trading_frequency_financial_instrumentsOut), u(r.variables.getTrading_experience_financial_instrumentsDataAct.trading_experience_financial_instrumentsOut), u(r.variables.getCfd_frequencyDataAct.cfd_frequencyOut), u(r.variables.getCfd_experienceListDataAct.cfd_experienceOut), u(r.variables.getSource_of_experienceListDataAct.source_of_experienceOut), u(r.variables.getRequired_initial_marginDataAct.dataFetchStatusAttr), u(r.variables.getLeverage_trading_high_risk_stop_lossDataAct.dataFetchStatusAttr), u(r.variables.getLeverage_impact_tradingDataAct.dataFetchStatusAttr), u(r.variables.getCfd_trading_definitionDataAct.dataFetchStatusAttr), u(r.variables.getTrading_frequency_financial_instrumentsDataAct.dataFetchStatusAttr), u(r.variables.getTrading_experience_financial_instrumentsDataAct.dataFetchStatusAttr), u(r.variables.getCfd_frequencyDataAct.dataFetchStatusAttr), u(r.variables.getCfd_experienceListDataAct.dataFetchStatusAttr), u(r.variables.getSource_of_experienceListDataAct.dataFetchStatusAttr), u(r.variables.getRiskToleranceListDataAct.dataFetchStatusAttr), u(r.variables.getRiskToleranceListDataAct.risk_toleranceListOut), u(r.variables.formValuesVar.required_initial_marginAttr), u(r.variables.formValuesVar.leverage_trading_high_risk_stop_lossAttr), u(r.variables.formValuesVar.leverage_impact_tradingAttr), u(r.variables.formValuesVar.cfd_trading_definitionAttr), u(r.variables.formValuesVar.trading_frequency_financial_instrumentsAttr), u(r.variables.formValuesVar.trading_experience_financial_instrumentsAttr), u(r.variables.formValuesVar.cfd_frequencyAttr), u(r.variables.formValuesVar.cfd_experienceAttr), u(r.variables.formValuesVar.source_of_experienceAttr), u(r.variables.formValuesVar.risk_toleranceAttr), u(r.variables.showCompletionStatusVar), u(r.variables.isHintOpenVar)]
                })]
            }))
        }
    };
a(ne, "View");
var et = ne,
    Re = et;
var we = P.PlaceholderContent,
    On = P.IteratorPlaceholderContent,
    ie = class ie extends k.BaseWebScreen {
        static get displayName() {
            return "MainFlow.TradingAssessment"
        }
        static getAttributes() {
            return {
                codeFunction: "TradingAssessment",
                functionKey: "7d8c63d3-bcfa-4db8-94ba-f88683126434",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/Accounts.DerivAccounts.css", "css/Accounts.DerivAccounts.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [ce, Ee, Re]
        }
        get modelFactory() {
            return ct
        }
        get controllerFactory() {
            return lt
        }
        get title() {
            return "TradingAssessment"
        }
        internalRender() {
            let r = this.model,
                d = this.controller,
                e = this.idService,
                i = d.validationService,
                t = this.widgetsRecordProvider,
                s = d.callContext(),
                c = ie.ifWidget,
                f = ie.textWidget,
                u = ie.asPrimitiveValue,
                A = ie.getTranslation,
                g = this;
            return de.createElement("div", this.getRootNodeProperties(), de.createElement(ce, {
                getOwnerSpan: a(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(n) {
                        d.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    desktopLayout: new we(function() {
                        return [de.createElement(Ee, {
                            getOwnerSpan: a(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SelectedSection: "assessment"
                            },
                            events: {
                                _handleError: a(function(n) {
                                    d.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                content: new we(function() {
                                    return [de.createElement(Re, {
                                        getOwnerSpan: a(function() {
                                            return g.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: a(function() {
                                            return g.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: a(function(n) {
                                                d.handleError(n)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: i
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "2",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: []
                                    })]
                                })
                            },
                            _dependencies: []
                        })]
                    }),
                    tabletLayout: we.Empty,
                    defaultLayout: new we(function() {
                        return [de.createElement(Re, {
                            getOwnerSpan: a(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: a(function(n) {
                                    d.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                uuid: "3",
                                alias: "4"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: []
            }))
        }
    };
a(ie, "View");
var tt = ie,
    xn = tt;
export {
    xn as
    default
};