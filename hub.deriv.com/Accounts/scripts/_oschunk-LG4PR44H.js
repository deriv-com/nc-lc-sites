import {
    Xj as k,
    di as W,
    dk as q,
    eb as x,
    gk as F,
    hf as C,
    rk as E,
    tj as v,
    vh as A,
    yh as O,
    yk as U,
    zk as P
} from "./_oschunk-UATY3RVV.js";
import {
    ia as w
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a
} from "./_oschunk-QHO7QY6K.js";
var e = w,
    s = class s extends e.Model.DataSourceRecord {
        static attributesToDeclare() {
            return [this.attr("Cfd_experience", "cfd_experienceOut", "Cfd_experience", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
                return e.DataTypes.ImmutableBase.getData(new E)
            }, !0, E)].concat(e.Model.DataSourceRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new s(new s.RecordClass({
                cfd_experienceOut: e.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
a(s, "GetCfd_experienceListDataActRec");
var p = s;
p.init();
var n = class n extends e.Model.DataSourceRecord {
    static attributesToDeclare() {
        return [this.attr("Leverage_trading_high_risk_stop_loss", "leverage_trading_high_risk_stop_lossOut", "Leverage_trading_high_risk_stop_loss", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new F)
        }, !0, F)].concat(e.Model.DataSourceRecord.attributesToDeclare.call(this))
    }
    static fromStructure(t) {
        return new n(new n.RecordClass({
            leverage_trading_high_risk_stop_lossOut: e.DataTypes.ImmutableBase.getData(t)
        }))
    }
};
a(n, "GetLeverage_trading_high_risk_stop_lossDataActRec");
var m = n;
m.init();
var i = class i extends e.Model.DataSourceRecord {
    static attributesToDeclare() {
        return [this.attr("Required_initial_margin", "required_initial_marginOut", "Required_initial_margin", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new O)
        }, !0, O)].concat(e.Model.DataSourceRecord.attributesToDeclare.call(this))
    }
    static fromStructure(t) {
        return new i(new i.RecordClass({
            required_initial_marginOut: e.DataTypes.ImmutableBase.getData(t)
        }))
    }
};
a(i, "GetRequired_initial_marginDataActRec");
var T = i;
T.init();
var o = class o extends e.Model.DataSourceRecord {
    static attributesToDeclare() {
        return [this.attr("Trading_frequency_financial_instruments", "trading_frequency_financial_instrumentsOut", "Trading_frequency_financial_instruments", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new k)
        }, !0, k)].concat(e.Model.DataSourceRecord.attributesToDeclare.call(this))
    }
    static fromStructure(t) {
        return new o(new o.RecordClass({
            trading_frequency_financial_instrumentsOut: e.DataTypes.ImmutableBase.getData(t)
        }))
    }
};
a(o, "GetTrading_frequency_financial_instrumentsDataActRec");
var _ = o;
_.init();
var c = class c extends e.Model.DataSourceRecord {
    static attributesToDeclare() {
        return [this.attr("Cfd_frequency", "cfd_frequencyOut", "Cfd_frequency", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new q)
        }, !0, q)].concat(e.Model.DataSourceRecord.attributesToDeclare.call(this))
    }
    static fromStructure(t) {
        return new c(new c.RecordClass({
            cfd_frequencyOut: e.DataTypes.ImmutableBase.getData(t)
        }))
    }
};
a(c, "GetCfd_frequencyDataActRec");
var g = c;
g.init();
var u = class u extends e.Model.DataSourceRecord {
    static attributesToDeclare() {
        return [this.attr("Cfd_trading_definition", "cfd_trading_definitionOut", "Cfd_trading_definition", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new v)
        }, !0, v)].concat(e.Model.DataSourceRecord.attributesToDeclare.call(this))
    }
    static fromStructure(t) {
        return new u(new u.RecordClass({
            cfd_trading_definitionOut: e.DataTypes.ImmutableBase.getData(t)
        }))
    }
};
a(u, "GetCfd_trading_definitionDataActRec");
var y = u;
y.init();
var d = class d extends e.Model.DataSourceRecord {
    static attributesToDeclare() {
        return [this.attr("Risk_toleranceList", "risk_toleranceListOut", "Risk_toleranceList", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new A)
        }, !0, A)].concat(e.Model.DataSourceRecord.attributesToDeclare.call(this))
    }
    static fromStructure(t) {
        return new d(new d.RecordClass({
            risk_toleranceListOut: e.DataTypes.ImmutableBase.getData(t)
        }))
    }
};
a(d, "GetRiskToleranceListDataActRec");
var b = d;
b.init();
var l = class l extends e.Model.DataSourceRecord {
    static attributesToDeclare() {
        return [this.attr("Trading_experience_financial_instruments", "trading_experience_financial_instrumentsOut", "Trading_experience_financial_instruments", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new U)
        }, !0, U)].concat(e.Model.DataSourceRecord.attributesToDeclare.call(this))
    }
    static fromStructure(t) {
        return new l(new l.RecordClass({
            trading_experience_financial_instrumentsOut: e.DataTypes.ImmutableBase.getData(t)
        }))
    }
};
a(l, "GetTrading_experience_financial_instrumentsDataActRec");
var R = l;
R.init();
var f = class f extends e.Model.DataSourceRecord {
    static attributesToDeclare() {
        return [this.attr("Source_of_experience", "source_of_experienceOut", "Source_of_experience", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new P)
        }, !0, P)].concat(e.Model.DataSourceRecord.attributesToDeclare.call(this))
    }
    static fromStructure(t) {
        return new f(new f.RecordClass({
            source_of_experienceOut: e.DataTypes.ImmutableBase.getData(t)
        }))
    }
};
a(f, "GetSource_of_experienceListDataActRec");
var M = f;
M.init();
var D = class D extends e.Model.DataSourceRecord {
    static attributesToDeclare() {
        return [this.attr("Leverage_impact_trading", "leverage_impact_tradingOut", "Leverage_impact_trading", !0, !1, e.DataTypes.DataTypes.RecordList, function() {
            return e.DataTypes.ImmutableBase.getData(new W)
        }, !0, W)].concat(e.Model.DataSourceRecord.attributesToDeclare.call(this))
    }
    static fromStructure(t) {
        return new D(new D.RecordClass({
            leverage_impact_tradingOut: e.DataTypes.ImmutableBase.getData(t)
        }))
    }
};
a(D, "GetLeverage_impact_tradingDataActRec");
var h = D;
h.init();
var Q = class Q extends e.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FormValues", "formValuesVar", "FormValues", !0, !1, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new C)
        }, !1, C), this.attr("IsUpdate", "isUpdateVar", "IsUpdate", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("IsHintOpen", "isHintOpenVar", "IsHintOpen", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("PreviousScore", "previousScoreVar", "PreviousScore", !0, !1, e.DataTypes.DataTypes.Integer, function() {
            return 0
        }, !1), this.attr("ShowRiskAcceptanceModal", "showRiskAcceptanceModalVar", "ShowRiskAcceptanceModal", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("IsUserAwareOfRisk", "isUserAwareOfRiskVar", "IsUserAwareOfRisk", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("ShowCompletionStatus", "showCompletionStatusVar", "ShowCompletionStatus", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("IsFormDirty", "isFormDirtyVar", "IsFormDirty", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("IsConfirmScreenExit", "isConfirmScreenExitVar", "IsConfirmScreenExit", !0, !1, e.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("CurrentStep", "currentStepVar", "CurrentStep", !0, !1, e.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("QuestionRef", "questionRefVar", "QuestionRef", !0, !1, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new x)
        }, !1, x), this.attr("GetCfd_experienceList", "getCfd_experienceListDataAct", "GetCfd_experienceList", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new p)
        }, !0, p), this.attr("GetLeverage_trading_high_risk_stop_loss", "getLeverage_trading_high_risk_stop_lossDataAct", "GetLeverage_trading_high_risk_stop_loss", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new m)
        }, !0, m), this.attr("GetRequired_initial_margin", "getRequired_initial_marginDataAct", "GetRequired_initial_margin", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new T)
        }, !0, T), this.attr("GetTrading_frequency_financial_instruments", "getTrading_frequency_financial_instrumentsDataAct", "GetTrading_frequency_financial_instruments", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new _)
        }, !0, _), this.attr("GetCfd_frequency", "getCfd_frequencyDataAct", "GetCfd_frequency", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new g)
        }, !0, g), this.attr("GetCfd_trading_definition", "getCfd_trading_definitionDataAct", "GetCfd_trading_definition", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new y)
        }, !0, y), this.attr("GetRiskToleranceList", "getRiskToleranceListDataAct", "GetRiskToleranceList", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new b)
        }, !0, b), this.attr("GetTrading_experience_financial_instruments", "getTrading_experience_financial_instrumentsDataAct", "GetTrading_experience_financial_instruments", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new R)
        }, !0, R), this.attr("GetSource_of_experienceList", "getSource_of_experienceListDataAct", "GetSource_of_experienceList", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new M)
        }, !0, M), this.attr("GetLeverage_impact_trading", "getLeverage_impact_tradingDataAct", "GetLeverage_impact_trading", !0, !0, e.DataTypes.DataTypes.Record, function() {
            return e.DataTypes.ImmutableBase.getData(new h)
        }, !0, h)].concat(e.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
a(Q, "VariablesRecord");
var I = Q;
I.init();
var j = class j extends e.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            TAForm: e.Model.ValidationWidgetRecord,
            Risk_toleranceDropDown: e.Model.ValidationWidgetRecord,
            Source_of_experienceDropDown: e.Model.ValidationWidgetRecord,
            Cfd_experienceDropDown: e.Model.ValidationWidgetRecord,
            Cfd_frequencyDropDown: e.Model.ValidationWidgetRecord,
            Trading_experience_financial_instrumentsDropDown: e.Model.ValidationWidgetRecord,
            Trading_frequency_financial_instrumentsDropDown: e.Model.ValidationWidgetRecord,
            Cfd_trading_definitionDropDown: e.Model.ValidationWidgetRecord,
            Leverage_impact_tradingDropDown: e.Model.ValidationWidgetRecord,
            Leverage_trading_high_risk_stop_lossDropDown: e.Model.ValidationWidgetRecord,
            Required_initial_marginDropDown: e.Model.ValidationWidgetRecord,
            UpdateTA: e.Model.ValidationWidgetRecord
        }
    }
};
a(j, "WidgetsRecord");
var G = j,
    z = class z extends e.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return I
        }
        static getWidgetsRecordConstructor() {
            return G
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {}
    };
a(z, "Model");
var L = z;
L._hasValidationWidgetsValue = void 0;
var ae = new e.Model.ModelFactory(L);
var S = w,
    K = class K extends S.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(S.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(K, "VariablesRecord");
var B = K;
B.init();
var N = class N extends S.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(N, "WidgetsRecord");
var J = N,
    r = class r extends S.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return B
        }
        static getWidgetsRecordConstructor() {
            return J
        }
        static get hasValidationWidgets() {
            return r._hasValidationWidgetsValue === void 0 && (r._hasValidationWidgetsValue = void 0 || void 0 || void 0), r._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
a(r, "Model");
var V = r;
V._hasValidationWidgetsValue = void 0;
var ne = new S.Model.ModelFactory(V);
export {
    ae as a, ne as b
};