import {
    Bd as L,
    Fa as re,
    He as h,
    Kb as N,
    Uf as ie,
    ib as se,
    tb as R,
    vc as ne
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as n,
    v as T
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var S = n,
    v = class v extends S.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("isExitModalOpen", "isExitModalOpenVar", "isExitModalOpen", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(S.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(t) {
            return new v(new v.RecordClass({
                isExitModalOpenVar: S.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
e(v, "VariablesRecord");
var F = v;
F.init();
var ue = class ue extends S.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(ue, "WidgetsRecord");
var le = ue,
    _ = class _ extends S.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return F
        }
        static getWidgetsRecordConstructor() {
            return le
        }
        static get hasValidationWidgets() {
            return _._hasValidationWidgetsValue === void 0 && (_._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0), _._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
e(_, "Model");
var J = _;
J._hasValidationWidgetsValue = void 0;
var Ct = new S.Model.ModelFactory(J);
var u = n,
    me = class me extends u.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("SupportedDocuments", "supportedDocumentsVar", "SupportedDocuments", !0, !1, u.DataTypes.DataTypes.RecordList, function() {
                return u.DataTypes.ImmutableBase.getData(new ie)
            }, !1, ie), this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", !0, !1, u.DataTypes.DataTypes.Record, function() {
                return u.DataTypes.ImmutableBase.getData(new re)
            }, !1, re), this.attr("GetSettingsResponse", "getSettingsResponseVar", "GetSettingsResponse", !0, !1, u.DataTypes.DataTypes.Record, function() {
                return u.DataTypes.ImmutableBase.getData(new ne)
            }, !1, ne), this.attr("AdditionalDocumentLabel", "additionalDocumentLabelVar", "AdditionalDocumentLabel", !0, !1, u.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(u.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(me, "VariablesRecord");
var H = me;
H.init();
var pe = class pe extends u.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            IDVDesktop: u.Model.ValidationWidgetRecord,
            Dropdown1: u.Model.ValidationWidgetRecord,
            Input_DocumentNumber: u.Model.ValidationWidgetRecord,
            Input_DocumentNumber2: u.Model.ValidationWidgetRecord,
            MobileNumberForm: u.Model.ValidationWidgetRecord,
            Input_DocumentNumber3: u.Model.ValidationWidgetRecord,
            Input_DocumentNumber4: u.Model.ValidationWidgetRecord
        }
    }
};
e(pe, "WidgetsRecord");
var de = pe,
    ye = class ye extends u.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return H
        }
        static getWidgetsRecordConstructor() {
            return de
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {}
    };
e(ye, "Model");
var k = ye;
k._hasValidationWidgetsValue = void 0;
var ht = new u.Model.ModelFactory(k);
var i = n,
    W = class W extends i.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(i.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return N
        }
        static fromStructure(t) {
            return new W(new W.RecordClass({
                RecordListType: i.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
e(W, "GetEmploymentStatusesAggrRec");
var P = W;
P.init();
var be = class be extends i.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("NoTaxIdentificationNumber", "noTaxIdentificationNumberVar", "NoTaxIdentificationNumber", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("ConfirmTaxInformation", "confirmTaxInformationVar", "ConfirmTaxInformation", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("ResidenceListResponse", "residenceListResponseIn", "ResidenceListResponse", !0, !1, i.DataTypes.DataTypes.Record, function() {
            return i.DataTypes.ImmutableBase.getData(new R)
        }, !1, R), this.attr("_residenceListResponseInDataFetchStatus", "_residenceListResponseInDataFetchStatus", "_residenceListResponseInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
            return 1
        }, !1), this.attr("GetEmploymentStatuses", "getEmploymentStatusesAggr", "GetEmploymentStatuses", !0, !0, i.DataTypes.DataTypes.Record, function() {
            return i.DataTypes.ImmutableBase.getData(new P)
        }, !0, P)].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
e(be, "VariablesRecord");
var G = be;
G.init();
var De = class De extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form1: i.Model.ValidationWidgetRecord,
            Dropdown1: i.Model.ValidationWidgetRecord,
            Checkbox1: i.Model.ValidationWidgetRecord,
            TaxResidence: i.Model.ValidationWidgetRecord,
            TaxIdentificationNumber: i.Model.ValidationWidgetRecord,
            Checkbox2: i.Model.ValidationWidgetRecord
        }
    }
};
e(De, "WidgetsRecord");
var ge = De,
    Ce = class Ce extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return G
        }
        static getWidgetsRecordConstructor() {
            return ge
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "ResidenceListResponse" in t && (this.variables.residenceListResponseIn = t.ResidenceListResponse, "_residenceListResponseInDataFetchStatus" in t && (this.variables._residenceListResponseInDataFetchStatus = t._residenceListResponseInDataFetchStatus))
        }
    };
e(Ce, "Model");
var U = Ce;
U._hasValidationWidgetsValue = void 0;
var Vt = new i.Model.ModelFactory(U);
var m = n,
    O = class O extends m.Model.AggregateRecord {
        static attributesToDeclare() {
            return [].concat(m.Model.AggregateRecord.attributesToDeclare.call(this))
        }
        static get RecordListType() {
            return N
        }
        static fromStructure(t) {
            return new O(new O.RecordClass({
                RecordListType: m.DataTypes.ImmutableBase.getData(t)
            }))
        }
    };
e(O, "GetEmploymentStatusesAggrRec");
var w = O;
w.init();
var Re = class Re extends m.DataTypes.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("isTaxInfoModalOpen", "isTaxInfoModalOpenVar", "isTaxInfoModalOpen", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
            return !1
        }, !1), this.attr("GetEmploymentStatuses", "getEmploymentStatusesAggr", "GetEmploymentStatuses", !0, !0, m.DataTypes.DataTypes.Record, function() {
            return m.DataTypes.ImmutableBase.getData(new w)
        }, !0, w)].concat(m.DataTypes.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Re, "VariablesRecord");
var j = Re;
j.init();
var Le = class Le extends m.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            TaxInfoForm: m.Model.ValidationWidgetRecord,
            Input1: m.Model.ValidationWidgetRecord,
            TaxIdentificationNumber: m.Model.ValidationWidgetRecord,
            Checkbox1: m.Model.ValidationWidgetRecord
        }
    }
};
e(Le, "WidgetsRecord");
var Me = Le,
    he = class he extends m.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return j
        }
        static getWidgetsRecordConstructor() {
            return Me
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {}
    };
e(he, "Model");
var z = he;
z._hasValidationWidgetsValue = void 0;
var xt = new m.Model.ModelFactory(z);
var p = n,
    Ve = class Ve extends p.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("StatesListResponse", "statesListResponseIn", "StatesListResponse", !0, !1, p.DataTypes.DataTypes.Record, function() {
                return p.DataTypes.ImmutableBase.getData(new h)
            }, !1, h), this.attr("_statesListResponseInDataFetchStatus", "_statesListResponseInDataFetchStatus", "_statesListResponseInDataFetchStatus", !0, !1, p.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(p.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Ve, "VariablesRecord");
var q = Ve;
q.init();
var ve = class ve extends p.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form1: p.Model.ValidationWidgetRecord,
            Address: p.Model.ValidationWidgetRecord,
            TownCity: p.Model.ValidationWidgetRecord,
            Dropdown1: p.Model.ValidationWidgetRecord,
            Input2: p.Model.ValidationWidgetRecord,
            Input1: p.Model.ValidationWidgetRecord
        }
    }
};
e(ve, "WidgetsRecord");
var _e = ve,
    Ae = class Ae extends p.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return q
        }
        static getWidgetsRecordConstructor() {
            return _e
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "StatesListResponse" in t && (this.variables.statesListResponseIn = t.StatesListResponse, "_statesListResponseInDataFetchStatus" in t && (this.variables._statesListResponseInDataFetchStatus = t._statesListResponseInDataFetchStatus))
        }
    };
e(Ae, "Model");
var K = Ae;
K._hasValidationWidgetsValue = void 0;
var Ot = new p.Model.ModelFactory(K);
var E = {
    staticEntities: {}
};
E.staticEntities.consoleErrorType = {};
Object.defineProperty(E.staticEntities.consoleErrorType, "error", {
    get: e(function() {
        return 2
    }, "get")
});
Object.defineProperty(E.staticEntities.consoleErrorType, "warning", {
    get: e(function() {
        return 1
    }, "get")
});
Object.defineProperty(E.staticEntities.consoleErrorType, "information", {
    get: e(function() {
        return 0
    }, "get")
});
var M = E.staticEntities;
var We = class We extends T.GenericRecordList {
    static getItemType() {
        return L
    }
};
e(We, "RL_389fedb389f062cabae44513c3a5330f");
var xe = We;
var B = class B extends T.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ConsoleErrorType", "consoleErrorTypeAttr", "ConsoleErrorType", !1, !1, T.DataTypes.Record, function() {
            return T.ImmutableBase.getData(new L)
        }, !0, L)].concat(T.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(t) {
        return new B(new B.RecordClass({
            consoleErrorTypeAttr: T.ImmutableBase.getData(t)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f045d5e7-dbbf-fce8-6c51-999e90634954"
    }
};
e(B, "RC_f045d5e7dbbffce86c51999e90634954");
var I = B;
I.init();
var Oe = class Oe extends T.GenericRecordList {
    static getItemType() {
        return I
    }
};
e(Oe, "RL_441c5b272aa90d830e05d5f4bd551e45");
var Pe = Oe;

function we(s, t, d, l) {
    console.error(s.Message)
}
e(we, "default");

function Ee(s, t, d, l) {
    console.warn(s.Message)
}
e(Ee, "default");

function Be(s, t, d, l) {
    console.log(s.Message)
}
e(Be, "default");

function Ne(s, t, d, l) {
    console.warn(s.Message, JSON.parse(s.JSON))
}
e(Ne, "default");

function Fe(s, t, d, l) {
    console.error(s.Message, JSON.parse(s.JSON))
}
e(Fe, "default");

function Je(s, t, d, l) {
    console.log(s.Message, JSON.parse(s.JSON))
}
e(Je, "default");
var o = n,
    ke = class ke extends o.Controller.BaseModuleController {
        constructor(t, d, l, c) {
            super(t, d, l, c)
        }
        get clientActionProxies() {
            return this.hasOwnProperty("_clientActionProxies") || (this._clientActionProxies = {}), this._clientActionProxies
        }
        set clientActionProxies(t) {
            this._clientActionProxies = t
        }
        get roles() {
            return this.hasOwnProperty("_roles") || (this._roles = {}), this._roles
        }
        set roles(t) {
            this._roles = t
        }
        get defaultTimeout() {
            return this.hasOwnProperty("_defaultTimeout") || (this._defaultTimeout = 10), this._defaultTimeout
        }
        set defaultTimeout(t) {
            this._defaultTimeout = t
        }
        getDefaultTimeout() {
            return this.defaultTimeout
        }
    };
e(ke, "Controller");
var He = ke,
    b = new He,
    y = b;
b.consoleLog$Action = function(s, t, d) {
    return o.Logger.startActiveSpan("ConsoleLog", function(l) {
        l && (l.setAttribute("code.function", "ConsoleLog"), l.setAttribute("outsystems.function.key", "e2f8b8a5-ee74-4626-a173-bbe216185bcf"), l.setAttribute("outsystems.function.owner.name", "DerivLogger"), l.setAttribute("outsystems.function.owner.key", "f82f9453-1490-4d2f-af92-09c673f6ed5c"), l.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            d = y.callContext(d);
            var c = new o.DataTypes.VariableHolder(new(y.constructor.getVariableGroupType("DerivLogger.ConsoleLog$vars")));
            if (c.value.messageInLocal = s, c.value.consoleErrorTypeIdInLocal = t, c.value.consoleErrorTypeIdInLocal === M.consoleErrorType.warning) o.Logger.startActiveSpan("ConsoleWarning", function(a) {
                a && (a.setAttribute("code.function", "ConsoleWarning"), a.setAttribute("outsystems.function.key", "bf6592bc-1aef-4870-8ad7-45751683c39b"), a.setAttribute("outsystems.function.owner.name", "DerivLogger"), a.setAttribute("outsystems.function.owner.key", "f82f9453-1490-4d2f-af92-09c673f6ed5c"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return y.safeExecuteJSNode(Ee, "ConsoleWarning", "ConsoleLog", {
                        Message: o.DataConversion.JSNodeParamConverter.to(c.value.messageInLocal, o.DataTypes.DataTypes.Text)
                    }, function(r) {}, {}, {})
                } finally {
                    a && a.end()
                }
            }, 1);
            else if (c.value.consoleErrorTypeIdInLocal === M.consoleErrorType.error) o.Logger.startActiveSpan("ConsoleError", function(a) {
                a && (a.setAttribute("code.function", "ConsoleError"), a.setAttribute("outsystems.function.key", "15283603-ef47-43b3-8c56-62dc688de6fb"), a.setAttribute("outsystems.function.owner.name", "DerivLogger"), a.setAttribute("outsystems.function.owner.key", "f82f9453-1490-4d2f-af92-09c673f6ed5c"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return y.safeExecuteJSNode(we, "ConsoleError", "ConsoleLog", {
                        Message: o.DataConversion.JSNodeParamConverter.to(c.value.messageInLocal, o.DataTypes.DataTypes.Text)
                    }, function(r) {}, {}, {})
                } finally {
                    a && a.end()
                }
            }, 1);
            else if (c.value.consoleErrorTypeIdInLocal === M.consoleErrorType.information) o.Logger.startActiveSpan("ConsoleLog", function(a) {
                a && (a.setAttribute("code.function", "ConsoleLog"), a.setAttribute("outsystems.function.key", "d0a74f3e-fc2e-4714-8a43-c9d2c1d8afbc"), a.setAttribute("outsystems.function.owner.name", "DerivLogger"), a.setAttribute("outsystems.function.owner.key", "f82f9453-1490-4d2f-af92-09c673f6ed5c"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return y.safeExecuteJSNode(Be, "ConsoleLog", "ConsoleLog", {
                        Message: o.DataConversion.JSNodeParamConverter.to(c.value.messageInLocal, o.DataTypes.DataTypes.Text)
                    }, function(r) {}, {}, {})
                } finally {
                    a && a.end()
                }
            }, 1);
            else throw new o.Exceptions.Exceptions.AbortActivityChangeException("Unknown Console Error Type");
            return
        } finally {
            l && l.end()
        }
    }, 1)
};
b.constructor.registerVariableGroupType("DerivLogger.ConsoleLog$vars", [{
    name: "Message",
    attrName: "messageInLocal",
    mandatory: !0,
    dataType: o.DataTypes.DataTypes.Text,
    defaultValue: e(function() {
        return ""
    }, "defaultValue")
}, {
    name: "ConsoleErrorTypeId",
    attrName: "consoleErrorTypeIdInLocal",
    mandatory: !1,
    dataType: o.DataTypes.DataTypes.Integer,
    defaultValue: e(function() {
        return 0
    }, "defaultValue")
}]);
b.clientActionProxies.consoleLog$Action = function(s, t) {
    return s = s === void 0 ? "" : s, t = t === void 0 ? 0 : t, y.executeActionInsideJSNode(b.default.consoleLog$Action.bind(y, o.DataConversion.JSNodeParamConverter.from(s, o.DataTypes.DataTypes.Text), t), o.Controller.BaseViewController.activeScreen ? o.Controller.BaseViewController.activeScreen.callContext() : void 0, function(d) {
        return {}
    })
};
b.consoleLogWithJSON$Action = function(s, t, d, l) {
    return o.Logger.startActiveSpan("ConsoleLogWithJSON", function(c) {
        c && (c.setAttribute("code.function", "ConsoleLogWithJSON"), c.setAttribute("outsystems.function.key", "78d556b2-b25c-4559-a937-2c0f92d16178"), c.setAttribute("outsystems.function.owner.name", "DerivLogger"), c.setAttribute("outsystems.function.owner.key", "f82f9453-1490-4d2f-af92-09c673f6ed5c"), c.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            l = y.callContext(l);
            var a = new o.DataTypes.VariableHolder(new(y.constructor.getVariableGroupType("DerivLogger.ConsoleLogWithJSON$vars")));
            if (a.value.messageInLocal = s, a.value.jSONInLocal = t, a.value.consoleErrorTypeIdInLocal = d, a.value.consoleErrorTypeIdInLocal === M.consoleErrorType.warning) o.Logger.startActiveSpan("ConsoleWarning", function(r) {
                r && (r.setAttribute("code.function", "ConsoleWarning"), r.setAttribute("outsystems.function.key", "5820d063-aeb6-4024-a596-19767ed071b2"), r.setAttribute("outsystems.function.owner.name", "DerivLogger"), r.setAttribute("outsystems.function.owner.key", "f82f9453-1490-4d2f-af92-09c673f6ed5c"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return y.safeExecuteJSNode(Ne, "ConsoleWarning", "ConsoleLogWithJSON", {
                        JSON: o.DataConversion.JSNodeParamConverter.to(a.value.jSONInLocal, o.DataTypes.DataTypes.Text),
                        Message: o.DataConversion.JSNodeParamConverter.to(a.value.messageInLocal, o.DataTypes.DataTypes.Text)
                    }, function(it) {}, {}, {})
                } finally {
                    r && r.end()
                }
            }, 1);
            else if (a.value.consoleErrorTypeIdInLocal === M.consoleErrorType.error) o.Logger.startActiveSpan("ConsoleError", function(r) {
                r && (r.setAttribute("code.function", "ConsoleError"), r.setAttribute("outsystems.function.key", "70d0bf71-aa95-4209-8fe7-975d172058b4"), r.setAttribute("outsystems.function.owner.name", "DerivLogger"), r.setAttribute("outsystems.function.owner.key", "f82f9453-1490-4d2f-af92-09c673f6ed5c"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return y.safeExecuteJSNode(Fe, "ConsoleError", "ConsoleLogWithJSON", {
                        JSON: o.DataConversion.JSNodeParamConverter.to(a.value.jSONInLocal, o.DataTypes.DataTypes.Text),
                        Message: o.DataConversion.JSNodeParamConverter.to(a.value.messageInLocal, o.DataTypes.DataTypes.Text)
                    }, function(it) {}, {}, {})
                } finally {
                    r && r.end()
                }
            }, 1);
            else if (a.value.consoleErrorTypeIdInLocal === M.consoleErrorType.information) o.Logger.startActiveSpan("ConsoleLog", function(r) {
                r && (r.setAttribute("code.function", "ConsoleLog"), r.setAttribute("outsystems.function.key", "fbae0ce4-79c8-49c2-8029-f03b2e611bfb"), r.setAttribute("outsystems.function.owner.name", "DerivLogger"), r.setAttribute("outsystems.function.owner.key", "f82f9453-1490-4d2f-af92-09c673f6ed5c"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return y.safeExecuteJSNode(Je, "ConsoleLog", "ConsoleLogWithJSON", {
                        JSON: o.DataConversion.JSNodeParamConverter.to(a.value.jSONInLocal, o.DataTypes.DataTypes.Text),
                        Message: o.DataConversion.JSNodeParamConverter.to(a.value.messageInLocal, o.DataTypes.DataTypes.Text)
                    }, function(it) {}, {}, {})
                } finally {
                    r && r.end()
                }
            }, 1);
            else throw new o.Exceptions.Exceptions.AbortActivityChangeException("Unknown Console Error Type");
            return
        } finally {
            c && c.end()
        }
    }, 1)
};
b.constructor.registerVariableGroupType("DerivLogger.ConsoleLogWithJSON$vars", [{
    name: "Message",
    attrName: "messageInLocal",
    mandatory: !0,
    dataType: o.DataTypes.DataTypes.Text,
    defaultValue: e(function() {
        return ""
    }, "defaultValue")
}, {
    name: "JSON",
    attrName: "jSONInLocal",
    mandatory: !0,
    dataType: o.DataTypes.DataTypes.Text,
    defaultValue: e(function() {
        return ""
    }, "defaultValue")
}, {
    name: "ConsoleErrorTypeId",
    attrName: "consoleErrorTypeIdInLocal",
    mandatory: !1,
    dataType: o.DataTypes.DataTypes.Integer,
    defaultValue: e(function() {
        return 0
    }, "defaultValue")
}]);
b.clientActionProxies.consoleLogWithJSON$Action = function(s, t, d) {
    return s = s === void 0 ? "" : s, t = t === void 0 ? "" : t, d = d === void 0 ? 0 : d, y.executeActionInsideJSNode(b.default.consoleLogWithJSON$Action.bind(y, o.DataConversion.JSNodeParamConverter.from(s, o.DataTypes.DataTypes.Text), o.DataConversion.JSNodeParamConverter.from(t, o.DataTypes.DataTypes.Text), d), o.Controller.BaseViewController.activeScreen ? o.Controller.BaseViewController.activeScreen.callContext() : void 0, function(l) {
        return {}
    })
};
var Ro = b;
var D = n,
    Ue = class Ue extends D.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("websiteAddress", "websiteAddressVar", "websiteAddress", !0, !1, D.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("isMobileLayout", "isMobileLayoutIn", "isMobileLayout", !0, !1, D.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isMobileLayoutInDataFetchStatus", "_isMobileLayoutInDataFetchStatus", "_isMobileLayoutInDataFetchStatus", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(D.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Ue, "VariablesRecord");
var Q = Ue;
Q.init();
var je = class je extends D.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            FormWebsiteAddress: D.Model.ValidationWidgetRecord,
            Input_WebsiteAddress: D.Model.ValidationWidgetRecord
        }
    }
};
e(je, "WidgetsRecord");
var $e = je,
    ze = class ze extends D.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Q
        }
        static getWidgetsRecordConstructor() {
            return $e
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "isMobileLayout" in t && (this.variables.isMobileLayoutIn = t.isMobileLayout, "_isMobileLayoutInDataFetchStatus" in t && (this.variables._isMobileLayoutInDataFetchStatus = t._isMobileLayoutInDataFetchStatus))
        }
    };
e(ze, "Model");
var X = ze;
X._hasValidationWidgetsValue = void 0;
var Ao = new D.Model.ModelFactory(X);
var C = n,
    Qe = class Qe extends C.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(C.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(Qe, "VariablesRecord");
var Y = Qe;
Y.init();
var Xe = class Xe extends C.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Form1: C.Model.ValidationWidgetRecord,
            CompanyNameInput: C.Model.ValidationWidgetRecord,
            CompanyRegistrationNumberInput: C.Model.ValidationWidgetRecord,
            CompanyWebsiteInput: C.Model.ValidationWidgetRecord
        }
    }
};
e(Xe, "WidgetsRecord");
var qe = Xe,
    Ye = class Ye extends C.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return Y
        }
        static getWidgetsRecordConstructor() {
            return qe
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {}
    };
e(Ye, "Model");
var Z = Ye;
Z._hasValidationWidgetsValue = void 0;
var Oo = new C.Model.ModelFactory(Z);
var f = n,
    tt = class tt extends f.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsTermsOfUseButtonDisabled", "isTermsOfUseButtonDisabledVar", "IsTermsOfUseButtonDisabled", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("PEPCheckbox", "pEPCheckboxVar", "PEPCheckbox", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("TermsandConditions", "termsandConditionsVar", "TermsandConditions", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("AffiliateTermandConditions", "affiliateTermandConditionsVar", "AffiliateTermandConditions", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ConsentPromotional", "consentPromotionalVar", "ConsentPromotional", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("isMobileLayout", "isMobileLayoutIn", "isMobileLayout", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isMobileLayoutInDataFetchStatus", "_isMobileLayoutInDataFetchStatus", "_isMobileLayoutInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(f.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(tt, "VariablesRecord");
var ee = tt;
ee.init();
var ot = class ot extends f.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Checkbox1: f.Model.ValidationWidgetRecord,
            Checkbox2: f.Model.ValidationWidgetRecord,
            Checkbox3: f.Model.ValidationWidgetRecord,
            Checkbox4: f.Model.ValidationWidgetRecord
        }
    }
};
e(ot, "WidgetsRecord");
var Ze = ot,
    at = class at extends f.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return ee
        }
        static getWidgetsRecordConstructor() {
            return Ze
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "isMobileLayout" in t && (this.variables.isMobileLayoutIn = t.isMobileLayout, "_isMobileLayoutInDataFetchStatus" in t && (this.variables._isMobileLayoutInDataFetchStatus = t._isMobileLayoutInDataFetchStatus))
        }
    };
e(at, "Model");
var te = at;
te._hasValidationWidgetsValue = void 0;
var No = new f.Model.ModelFactory(te);
var g = n,
    st = class st extends g.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("isExitModalOpen", "isExitModalOpenVar", "isExitModalOpen", !0, !1, g.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("WebsiteStatusResponse", "websiteStatusResponseVar", "WebsiteStatusResponse", !0, !1, g.DataTypes.DataTypes.Record, function() {
                return g.DataTypes.ImmutableBase.getData(new se)
            }, !1, se), this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", !0, !1, g.DataTypes.DataTypes.Record, function() {
                return g.DataTypes.ImmutableBase.getData(new R)
            }, !1, R), this.attr("Country", "countryVar", "Country", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("StatesListResponse", "statesListResponseVar", "StatesListResponse", !0, !1, g.DataTypes.DataTypes.Record, function() {
                return g.DataTypes.ImmutableBase.getData(new h)
            }, !1, h)].concat(g.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
e(st, "VariablesRecord");
var oe = st;
oe.init();
var nt = class nt extends g.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
e(nt, "WidgetsRecord");
var rt = nt,
    V = class V extends g.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return oe
        }
        static getWidgetsRecordConstructor() {
            return rt
        }
        static get hasValidationWidgets() {
            return V._hasValidationWidgetsValue === void 0 && (V._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), V._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
e(V, "Model");
var ae = V;
ae._hasValidationWidgetsValue = void 0;
var $o = new g.Model.ModelFactory(ae);
export {
    Ct as a, ht as b, Vt as c, xt as d, Ot as e, Ro as f, Ao as g, Oo as h, No as i, $o as j
};