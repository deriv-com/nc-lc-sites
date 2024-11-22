import {
    a as pt,
    g as nt,
    i as R
} from "./_oschunk-6LASTRK7.js";
import {
    ia as f,
    v as r
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s,
    g as ft
} from "./_oschunk-DVBKI63I.js";
var yt = {
        staticEntities: {}
    },
    mt = yt.staticEntities;
var N = class N extends r.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("InputId", "inputIdAttr", "InputId", !0, !1, r.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DecimalDigits", "decimalDigitsAttr", "DecimalDigits", !0, !1, r.DataTypes.Decimal, function() {
            return r.Decimal.defaultValue
        }, !0), this.attr("DecimalSeparator", "decimalSeparatorAttr", "DecimalSeparator", !0, !1, r.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("AlwaysShowDecimalDigits", "alwaysShowDecimalDigitsAttr", "AlwaysShowDecimalDigits", !1, !1, r.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("UseNumericInput", "useNumericInputAttr", "UseNumericInput", !1, !1, r.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(r.GenericRecord.attributesToDeclare.call(this))
    }
};
s(N, "ST_24a815c55c9c656019e7cf20944fbe4eStructure");
var h = N;
h.init();
var A = class A extends r.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PercentageMaskValues", "percentageMaskValuesAttr", "PercentageMaskValues", !1, !1, r.DataTypes.Record, function() {
            return r.ImmutableBase.getData(new h)
        }, !0, h)].concat(r.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(e) {
        return new A(new A.RecordClass({
            percentageMaskValuesAttr: r.ImmutableBase.getData(e)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "063213c8-5e1a-ebd6-6730-c3f87d5e4cbe"
    }
};
s(A, "RC_063213c85e1aebd66730c3f87d5e4cbe");
var b = A;
b.init();
var V = class V extends r.GenericRecordList {
    static getItemType() {
        return h
    }
};
s(V, "RL_080a9082de406518a1324b7cddc3a331");
var F = V;
var E = class E extends r.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("InputId", "inputIdAttr", "InputId", !0, !1, r.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DecimalDigits", "decimalDigitsAttr", "DecimalDigits", !0, !1, r.DataTypes.Decimal, function() {
            return r.Decimal.defaultValue
        }, !0), this.attr("PrefixText", "prefixTextAttr", "PrefixText", !0, !1, r.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("SuffixText", "suffixTextAttr", "SuffixText", !0, !1, r.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DecimalSeparator", "decimalSeparatorAttr", "DecimalSeparator", !0, !1, r.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("GroupSeparator", "groupSeparatorAttr", "GroupSeparator", !0, !1, r.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("AlwaysShowDecimalDigits", "alwaysShowDecimalDigitsAttr", "AlwaysShowDecimalDigits", !1, !1, r.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("UseNumericInput", "useNumericInputAttr", "UseNumericInput", !1, !1, r.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(r.GenericRecord.attributesToDeclare.call(this))
    }
};
s(E, "ST_ce5b612459264c1f9583bf02cc9136d1Structure");
var y = E;
y.init();
var L = class L extends r.GenericRecordList {
    static getItemType() {
        return y
    }
};
s(L, "RL_5600aa875559efd40c138f22aad2c483");
var P = L;
var $ = class $ extends r.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("InputId", "inputIdAttr", "InputId", !0, !1, r.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DecimalDigits", "decimalDigitsAttr", "DecimalDigits", !0, !1, r.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("DecimalSeparator", "decimalSeparatorAttr", "DecimalSeparator", !0, !1, r.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("GroupSeparator", "groupSeparatorAttr", "GroupSeparator", !0, !1, r.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("AlwaysShowDecimalDigits", "alwaysShowDecimalDigitsAttr", "AlwaysShowDecimalDigits", !1, !1, r.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("UseNumericInput", "useNumericInputAttr", "UseNumericInput", !1, !1, r.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(r.GenericRecord.attributesToDeclare.call(this))
    }
};
s($, "ST_6dc48f57b69315164d4b025a3b89eb18Structure");
var I = $;
I.init();
var x = class x extends r.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("NumberMaskValues", "numberMaskValuesAttr", "NumberMaskValues", !1, !1, r.DataTypes.Record, function() {
            return r.ImmutableBase.getData(new I)
        }, !0, I)].concat(r.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(e) {
        return new x(new x.RecordClass({
            numberMaskValuesAttr: r.ImmutableBase.getData(e)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "82572fa2-6ea4-d116-677b-cad6b6525f6f"
    }
};
s(x, "RC_82572fa26ea4d116677bcad6b6525f6f");
var v = x;
v.init();
var B = class B extends r.GenericRecordList {
    static getItemType() {
        return I
    }
};
s(B, "RL_918695fdb410715b3269fc0a5d81c771");
var G = B;
var _ = class _ extends r.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CurrencyMaskValues", "currencyMaskValuesAttr", "CurrencyMaskValues", !1, !1, r.DataTypes.Record, function() {
            return r.ImmutableBase.getData(new y)
        }, !0, y)].concat(r.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(e) {
        return new _(new _.RecordClass({
            currencyMaskValuesAttr: r.ImmutableBase.getData(e)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a4a25ff3-9ac3-3916-3035-37cd430496c1"
    }
};
s(_, "RC_a4a25ff39ac33916303537cd430496c1");
var g = _;
g.init();
var J = class J extends r.GenericRecordList {
    static getItemType() {
        return b
    }
};
s(J, "RL_edd162f6a0afd76eb267c101521d10e8");
var H = J;
var z = class z extends r.GenericRecordList {
    static getItemType() {
        return v
    }
};
s(z, "RL_f8f8f4f1bb30283f310ce967e8e94d1a");
var U = z;
var j = class j extends r.GenericRecordList {
    static getItemType() {
        return g
    }
};
s(j, "RL_ffea1ea587d1c554c0ee954b9cdb0b54");
var W = j;

function q(u, e, c, a) {
    var t = document.getElementById(u.InputId);
    t && t.inputmask && (t.inputmask.remove(), t.placeholder = "", t.dataset.osPattern && (t.pattern = t.dataset.osPattern, delete t.dataset.osPattern), t.dataset.osType && (t.type = t.dataset.osType, delete t.dataset.osType))
}
s(q, "default");
var d = f,
    K = class K extends d.Controller.BaseModuleController {
        constructor(e, c, a, t) {
            super(e, c, a, t)
        }
        get clientActionProxies() {
            return this.hasOwnProperty("_clientActionProxies") || (this._clientActionProxies = {}), this._clientActionProxies
        }
        set clientActionProxies(e) {
            this._clientActionProxies = e
        }
        get roles() {
            return this.hasOwnProperty("_roles") || (this._roles = {}), this._roles
        }
        set roles(e) {
            this._roles = e
        }
        get defaultTimeout() {
            return this.hasOwnProperty("_defaultTimeout") || (this._defaultTimeout = 10), this._defaultTimeout
        }
        set defaultTimeout(e) {
            this._defaultTimeout = e
        }
        getDefaultTimeout() {
            return this.defaultTimeout
        }
    };
s(K, "Controller");
var Y = K,
    m = new Y,
    S = m;
m.inputMask_GetServerDateFormat$Action = function(u) {
    return d.Logger.startActiveSpan("InputMask_GetServerDateFormat", function(e) {
        e && (e.setAttribute("code.function", "InputMask_GetServerDateFormat"), e.setAttribute("outsystems.function.key", "a74449d0-bfd9-40bb-8043-3f68c071a151"), e.setAttribute("outsystems.function.owner.name", "InputMasksLibrary"), e.setAttribute("outsystems.function.owner.key", "c616ffa7-c700-45da-ac8d-44bec05336e7"), e.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            u = S.callContext(u);
            var c = new d.DataTypes.VariableHolder(new(S.constructor.getVariableGroupType("InputMasksLibrary.InputMask_GetServerDateFormat$outVars")));
            return c.value.dateFormatOut = d.BuiltinFunctions.dateToText(d.BuiltinFunctions.newDate(1900, 11, 23)), c.value.dateFormatOut = d.BuiltinFunctions.replace(c.value.dateFormatOut, "1900", "yyyy"), c.value.dateFormatOut = d.BuiltinFunctions.replace(c.value.dateFormatOut, "11", "mm"), c.value.dateFormatOut = d.BuiltinFunctions.replace(c.value.dateFormatOut, "23", "dd"), c.value
        } finally {
            e && e.end()
        }
    }, 1)
};
m.constructor.registerVariableGroupType("InputMasksLibrary.InputMask_GetServerDateFormat$outVars", [{
    name: "DateFormat",
    attrName: "dateFormatOut",
    mandatory: !1,
    dataType: d.DataTypes.DataTypes.Text,
    defaultValue: s(function() {
        return ""
    }, "defaultValue")
}]);
m.clientActionProxies.inputMask_GetServerDateFormat$Action = function() {
    return S.executeActionInsideJSNode(m.default.inputMask_GetServerDateFormat$Action.bind(S), d.Controller.BaseViewController.activeScreen ? d.Controller.BaseViewController.activeScreen.callContext() : void 0, function(u) {
        return {
            DateFormat: d.DataConversion.JSNodeParamConverter.to(u.dateFormatOut, d.DataTypes.DataTypes.Text)
        }
    })
};
m.inputMask_RemoveInputMask$Action = function(u, e) {
    return d.Logger.startActiveSpan("InputMask_RemoveInputMask", function(c) {
        c && (c.setAttribute("code.function", "InputMask_RemoveInputMask"), c.setAttribute("outsystems.function.key", "457ad69e-6b98-4158-a630-8cd9bd6075ad"), c.setAttribute("outsystems.function.owner.name", "InputMasksLibrary"), c.setAttribute("outsystems.function.owner.key", "c616ffa7-c700-45da-ac8d-44bec05336e7"), c.setAttribute("outsystems.function.type", "CLIENT_ACTION"));
        try {
            e = S.callContext(e);
            var a = new d.DataTypes.VariableHolder(new(S.constructor.getVariableGroupType("InputMasksLibrary.InputMask_RemoveInputMask$vars")));
            a.value.inputIdInLocal = u, d.Logger.startActiveSpan("RemoveInputMask", function(t) {
                t && (t.setAttribute("code.function", "RemoveInputMask"), t.setAttribute("outsystems.function.key", "65bc9efe-2ccc-4037-bd57-40341d320973"), t.setAttribute("outsystems.function.owner.name", "InputMasksLibrary"), t.setAttribute("outsystems.function.owner.key", "c616ffa7-c700-45da-ac8d-44bec05336e7"), t.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                try {
                    return S.safeExecuteJSNode(q, "RemoveInputMask", "InputMask_RemoveInputMask", {
                        InputId: d.DataConversion.JSNodeParamConverter.to(a.value.inputIdInLocal, d.DataTypes.DataTypes.Text)
                    }, function(i) {}, {}, {})
                } finally {
                    t && t.end()
                }
            }, 1);
            return
        } finally {
            c && c.end()
        }
    }, 1)
};
m.constructor.registerVariableGroupType("InputMasksLibrary.InputMask_RemoveInputMask$vars", [{
    name: "InputId",
    attrName: "inputIdInLocal",
    mandatory: !0,
    dataType: d.DataTypes.DataTypes.Text,
    defaultValue: s(function() {
        return ""
    }, "defaultValue")
}]);
m.clientActionProxies.inputMask_RemoveInputMask$Action = function(u) {
    return u = u === void 0 ? "" : u, S.executeActionInsideJSNode(m.default.inputMask_RemoveInputMask$Action.bind(S, d.DataConversion.JSNodeParamConverter.from(u, d.DataTypes.DataTypes.Text)), d.Controller.BaseViewController.activeScreen ? d.Controller.BaseViewController.activeScreen.callContext() : void 0, function(e) {
        return {}
    })
};
var M = m;
var dt = ft(pt());
var l = f,
    Q = class Q extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("LocalCurrencyMask", "localCurrencyMaskVar", "LocalCurrencyMask", !0, !1, l.DataTypes.DataTypes.Record, function() {
                return l.DataTypes.ImmutableBase.getData(new y)
            }, !1, y), this.attr("InputId", "inputIdIn", "InputId", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_inputIdInDataFetchStatus", "_inputIdInDataFetchStatus", "_inputIdInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DecimalDigits", "decimalDigitsIn", "DecimalDigits", !0, !1, l.DataTypes.DataTypes.Decimal, function() {
                return l.DataTypes.Decimal.defaultValue
            }, !1), this.attr("_decimalDigitsInDataFetchStatus", "_decimalDigitsInDataFetchStatus", "_decimalDigitsInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("PrefixText", "prefixTextIn", "PrefixText", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_prefixTextInDataFetchStatus", "_prefixTextInDataFetchStatus", "_prefixTextInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("SuffixText", "suffixTextIn", "SuffixText", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_suffixTextInDataFetchStatus", "_suffixTextInDataFetchStatus", "_suffixTextInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DecimalSeparator", "decimalSeparatorIn", "DecimalSeparator", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_decimalSeparatorInDataFetchStatus", "_decimalSeparatorInDataFetchStatus", "_decimalSeparatorInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("GroupSeparator", "groupSeparatorIn", "GroupSeparator", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_groupSeparatorInDataFetchStatus", "_groupSeparatorInDataFetchStatus", "_groupSeparatorInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("AlwaysShowDecimalDigits", "alwaysShowDecimalDigitsIn", "AlwaysShowDecimalDigits", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_alwaysShowDecimalDigitsInDataFetchStatus", "_alwaysShowDecimalDigitsInDataFetchStatus", "_alwaysShowDecimalDigitsInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("UseNumericInput", "useNumericInputIn", "UseNumericInput", !0, !1, l.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_useNumericInputInDataFetchStatus", "_useNumericInputInDataFetchStatus", "_useNumericInputInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(Q, "VariablesRecord");
var C = Q;
C.init();
var Z = class Z extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(Z, "WidgetsRecord");
var X = Z,
    tt = class tt extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return C
        }
        static getWidgetsRecordConstructor() {
            return X
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "InputId" in e && (this.variables.inputIdIn = e.InputId, "_inputIdInDataFetchStatus" in e && (this.variables._inputIdInDataFetchStatus = e._inputIdInDataFetchStatus)), "DecimalDigits" in e && (this.variables.decimalDigitsIn = e.DecimalDigits, "_decimalDigitsInDataFetchStatus" in e && (this.variables._decimalDigitsInDataFetchStatus = e._decimalDigitsInDataFetchStatus)), "PrefixText" in e && (this.variables.prefixTextIn = e.PrefixText, "_prefixTextInDataFetchStatus" in e && (this.variables._prefixTextInDataFetchStatus = e._prefixTextInDataFetchStatus)), "SuffixText" in e && (this.variables.suffixTextIn = e.SuffixText, "_suffixTextInDataFetchStatus" in e && (this.variables._suffixTextInDataFetchStatus = e._suffixTextInDataFetchStatus)), "DecimalSeparator" in e && (this.variables.decimalSeparatorIn = e.DecimalSeparator, "_decimalSeparatorInDataFetchStatus" in e && (this.variables._decimalSeparatorInDataFetchStatus = e._decimalSeparatorInDataFetchStatus)), "GroupSeparator" in e && (this.variables.groupSeparatorIn = e.GroupSeparator, "_groupSeparatorInDataFetchStatus" in e && (this.variables._groupSeparatorInDataFetchStatus = e._groupSeparatorInDataFetchStatus)), "AlwaysShowDecimalDigits" in e && (this.variables.alwaysShowDecimalDigitsIn = e.AlwaysShowDecimalDigits, "_alwaysShowDecimalDigitsInDataFetchStatus" in e && (this.variables._alwaysShowDecimalDigitsInDataFetchStatus = e._alwaysShowDecimalDigitsInDataFetchStatus)), "UseNumericInput" in e && (this.variables.useNumericInputIn = e.UseNumericInput, "_useNumericInputInDataFetchStatus" in e && (this.variables._useNumericInputInDataFetchStatus = e._useNumericInputInDataFetchStatus))
        }
    };
s(tt, "Model");
var O = tt;
O._hasValidationWidgetsValue = void 0;
var ut = new l.Model.ModelFactory(O);
var ht = f,
    at = class at extends ht.LanguageResources.BaseMessagesProvider {
        constructor(e) {
            super(e), this.setMessage("Validation.Mandatory", "Required field!"), this.setMessage("Validation.Integer", "Integer expected!"), this.setMessage("Validation.LongInteger", "Integer expected!"), this.setMessage("Validation.Decimal", "Decimal expected!"), this.setMessage("Validation.Currency", "Currency expected!"), this.setMessage("Validation.Date", "Date expected!"), this.setMessage("Validation.Time", "Time expected!"), this.setMessage("Validation.DateTime", "DateTime expected!"), this.setMessage("Validation.Text", "Text expected!"), this.setMessage("Validation.PhoneNumber", "Phone Number expected!"), this.setMessage("Validation.Email", "Email expected!"), this.setMessage("UpgradeComplete", "Your application has been updated to the latest version."), this.setMessage("AppInitError.Generic", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.Resources", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.DataModel", "An error occurred while trying to update the app. If you want to retry the update, restart the app. If the problem persists you can reinstall, but all local data will be lost."), this.setMessage("UpgradeRequired", "Your application needs to be updated. Tap here to update."), this.setMessage("UpgradeRequiredDataLoss", "Your application needs to be updated. Unsaved data will be lost. Tap here to update.")
        }
    };
s(at, "MessagesProvider");
var et = at,
    ct = new et;

function rt(u, e, c, a) {
    var t = document.getElementById(u.Input);
    t && (t.tagName === "TEXTAREA" || t.tagName === "INPUT") && (t.dataset.osType = t.type, t.dataset.osPattern = t.pattern, t.type = "text", t.removeAttribute("pattern"), Inputmask("currency", getCurrencyConf(u.DecimalDigits, u.PrefixText, u.SuffixText, u.DecimalSeparator, u.GroupSeparator, u.OptionalDisplayDecimalDigits, u.UseNumericInput)).mask(t))
}
s(rt, "default");
var n = f; {
    let e = class e extends n.Controller.BaseViewController {
        constructor(a, t, i) {
            super(a, t, i);
            var D = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(a) {
            this._dataFetchActionNames = a
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(a) {
                var t = this.model,
                    i = this.controller,
                    D = this.idService;
                return n.Logger.startActiveSpan("OnInitialize", function(o) {
                    o && (o.setAttribute("code.function", "OnInitialize"), o.setAttribute("outsystems.function.key", "3edd4514-eda3-4b5c-a40b-305fdde62919"), o.setAttribute("outsystems.function.owner.name", "InputMasksLibrary"), o.setAttribute("outsystems.function.owner.key", "c616ffa7-c700-45da-ac8d-44bec05336e7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnInitialize"), a = i.callContext(a), t.variables.localCurrencyMaskVar.inputIdAttr = t.variables.inputIdIn, t.variables.localCurrencyMaskVar.decimalDigitsAttr = t.variables.decimalDigitsIn.lte(n.BuiltinFunctions.integerToDecimal(0)) ? n.BuiltinFunctions.integerToDecimal(0) : t.variables.decimalDigitsIn, t.variables.localCurrencyMaskVar.prefixTextAttr = t.variables.prefixTextIn, t.variables.localCurrencyMaskVar.suffixTextAttr = t.variables.suffixTextIn, t.variables.localCurrencyMaskVar.decimalSeparatorAttr = t.variables.decimalSeparatorIn, t.variables.localCurrencyMaskVar.groupSeparatorAttr = t.variables.groupSeparatorIn, t.variables.localCurrencyMaskVar.alwaysShowDecimalDigitsAttr = t.variables.alwaysShowDecimalDigitsIn, t.variables.localCurrencyMaskVar.useNumericInputAttr = t.variables.useNumericInputIn
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(a) {
            this.__onInitialize$Action = a
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(a) {
                var t = this.model,
                    i = this.controller,
                    D = this.idService;
                return n.Logger.startActiveSpan("OnParametersChanged", function(o) {
                    o && (o.setAttribute("code.function", "OnParametersChanged"), o.setAttribute("outsystems.function.key", "41bf7d32-c423-4a0b-bc18-dc9dbfda011f"), o.setAttribute("outsystems.function.owner.name", "InputMasksLibrary"), o.setAttribute("outsystems.function.owner.key", "c616ffa7-c700-45da-ac8d-44bec05336e7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnParametersChanged"), a = i.callContext(a);
                        var p = new n.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("InputMasksLibrary.InputMaskReactFlow.MaskCurrency.OnParametersChanged$vars"))),
                            k = new n.DataTypes.VariableHolder(new n.DataTypes.JSONSerializeOutputType),
                            w = new n.DataTypes.VariableHolder(new n.DataTypes.JSONSerializeOutputType);
                        p.value.newLocalCurrencyMaskValuesVar.inputIdAttr = t.variables.inputIdIn, p.value.newLocalCurrencyMaskValuesVar.decimalDigitsAttr = t.variables.decimalDigitsIn.lte(n.BuiltinFunctions.integerToDecimal(0)) ? n.BuiltinFunctions.integerToDecimal(0) : t.variables.decimalDigitsIn, p.value.newLocalCurrencyMaskValuesVar.prefixTextAttr = t.variables.prefixTextIn, p.value.newLocalCurrencyMaskValuesVar.suffixTextAttr = t.variables.suffixTextIn, p.value.newLocalCurrencyMaskValuesVar.decimalSeparatorAttr = t.variables.decimalSeparatorIn, p.value.newLocalCurrencyMaskValuesVar.groupSeparatorAttr = t.variables.groupSeparatorIn, p.value.newLocalCurrencyMaskValuesVar.alwaysShowDecimalDigitsAttr = t.variables.alwaysShowDecimalDigitsIn, p.value.newLocalCurrencyMaskValuesVar.useNumericInputAttr = t.variables.useNumericInputIn, k.value.jSONOut = n.JSONUtils.serializeToJSON(p.value.newLocalCurrencyMaskValuesVar, !1, !1), w.value.jSONOut = n.JSONUtils.serializeToJSON(t.variables.localCurrencyMaskVar, !1, !1), k.value.jSONOut !== w.value.jSONOut && (M.inputMask_RemoveInputMask$Action(t.variables.inputIdIn, a), t.variables.localCurrencyMaskVar = p.value.newLocalCurrencyMaskValuesVar, i._onReady$Action(a))
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(a) {
            this.__onParametersChanged$Action = a
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(a) {
                var t = this.model,
                    i = this.controller,
                    D = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(o) {
                    o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "4ef8f20c-0dae-4479-93c7-50c4ef266e91"), o.setAttribute("outsystems.function.owner.name", "InputMasksLibrary"), o.setAttribute("outsystems.function.owner.key", "c616ffa7-c700-45da-ac8d-44bec05336e7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnReady"), a = i.callContext(a), n.Logger.startActiveSpan("Mask_Currency", function(p) {
                            p && (p.setAttribute("code.function", "Mask_Currency"), p.setAttribute("outsystems.function.key", "4ce62570-b21d-4c6e-bf8a-fa072d7a6b04"), p.setAttribute("outsystems.function.owner.name", "InputMasksLibrary"), p.setAttribute("outsystems.function.owner.key", "c616ffa7-c700-45da-ac8d-44bec05336e7"), p.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return i.safeExecuteJSNode(rt, "Mask_Currency", "OnReady", {
                                    GroupSeparator: n.DataConversion.JSNodeParamConverter.to(t.variables.localCurrencyMaskVar.groupSeparatorAttr, n.DataTypes.DataTypes.Text),
                                    PrefixText: n.DataConversion.JSNodeParamConverter.to(t.variables.localCurrencyMaskVar.prefixTextAttr, n.DataTypes.DataTypes.Text),
                                    SuffixText: n.DataConversion.JSNodeParamConverter.to(t.variables.localCurrencyMaskVar.suffixTextAttr, n.DataTypes.DataTypes.Text),
                                    DecimalSeparator: n.DataConversion.JSNodeParamConverter.to(t.variables.localCurrencyMaskVar.decimalSeparatorAttr, n.DataTypes.DataTypes.Text),
                                    Input: n.DataConversion.JSNodeParamConverter.to(t.variables.localCurrencyMaskVar.inputIdAttr, n.DataTypes.DataTypes.Text),
                                    UseNumericInput: n.DataConversion.JSNodeParamConverter.to(t.variables.localCurrencyMaskVar.useNumericInputAttr, n.DataTypes.DataTypes.Boolean),
                                    DecimalDigits: n.DataConversion.JSNodeParamConverter.to(n.BuiltinFunctions.decimalToInteger(n.BuiltinFunctions.trunc(t.variables.localCurrencyMaskVar.decimalDigitsAttr)), n.DataTypes.DataTypes.Integer),
                                    OptionalDisplayDecimalDigits: n.DataConversion.JSNodeParamConverter.to(!0, n.DataTypes.DataTypes.Boolean)
                                }, function(k) {}, {}, {})
                            } finally {
                                p && p.end()
                            }
                        }, 1)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(a) {
            this.__onReady$Action = a
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(a) {
                var t = this.model,
                    i = this.controller,
                    D = this.idService;
                return n.Logger.startActiveSpan("OnDestroy", function(o) {
                    o && (o.setAttribute("code.function", "OnDestroy"), o.setAttribute("outsystems.function.key", "6f3c1a9b-dd4d-4464-ab88-cab3d671aca0"), o.setAttribute("outsystems.function.owner.name", "InputMasksLibrary"), o.setAttribute("outsystems.function.owner.key", "c616ffa7-c700-45da-ac8d-44bec05336e7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnDestroy"), a = i.callContext(a), M.inputMask_RemoveInputMask$Action(t.variables.inputIdIn, a)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(a) {
            this.__onDestroy$Action = a
        }
        onInitialize$Action(a) {
            var t = this.controller;
            return n.Logger.startActiveSpan("OnInitialize__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "3edd4514-eda3-4b5c-a40b-305fdde62919"), i.setAttribute("outsystems.function.owner.name", "InputMasksLibrary"), i.setAttribute("outsystems.function.owner.key", "c616ffa7-c700-45da-ac8d-44bec05336e7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onInitialize$Action, a)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onParametersChanged$Action(a) {
            var t = this.controller;
            return n.Logger.startActiveSpan("OnParametersChanged__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnParametersChanged"), i.setAttribute("outsystems.function.key", "41bf7d32-c423-4a0b-bc18-dc9dbfda011f"), i.setAttribute("outsystems.function.owner.name", "InputMasksLibrary"), i.setAttribute("outsystems.function.owner.key", "c616ffa7-c700-45da-ac8d-44bec05336e7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onParametersChanged$Action, a)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onReady$Action(a) {
            var t = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "4ef8f20c-0dae-4479-93c7-50c4ef266e91"), i.setAttribute("outsystems.function.owner.name", "InputMasksLibrary"), i.setAttribute("outsystems.function.owner.key", "c616ffa7-c700-45da-ac8d-44bec05336e7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onReady$Action, a)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onDestroy$Action(a) {
            var t = this.controller;
            return n.Logger.startActiveSpan("OnDestroy__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnDestroy"), i.setAttribute("outsystems.function.key", "6f3c1a9b-dd4d-4464-ab88-cab3d671aca0"), i.setAttribute("outsystems.function.owner.name", "InputMasksLibrary"), i.setAttribute("outsystems.function.owner.key", "c616ffa7-c700-45da-ac8d-44bec05336e7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onDestroy$Action, a)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(a) {
                var t = this.controller,
                    i = this.model,
                    D = this.idService;
                return t.onInitialize$Action(a)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(a) {
            this._onInitializeEventHandler = a
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(a) {
                var t = this.controller,
                    i = this.model,
                    D = this.idService;
                return t.onReady$Action(a)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(a) {
            this._onReadyEventHandler = a
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(a) {
            this._onRenderEventHandler = a
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(a) {
                var t = this.controller,
                    i = this.model,
                    D = this.idService;
                return t.onDestroy$Action(a)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(a) {
            this._onDestroyEventHandler = a
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(a) {
                var t = this.controller,
                    i = this.model,
                    D = this.idService;
                return t.onParametersChanged$Action(a)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(a) {
            this._onParametersChangedEventHandler = a
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(a) {
                return controller.handleError(a)
            }), this._handleError
        }
        set handleError(a) {
            this._handleError = a
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return M.defaultTimeout
        }
    };
    s(e, "ControllerInner");
    let u = e;
    it = u, it.registerVariableGroupType("InputMasksLibrary.InputMaskReactFlow.MaskCurrency.OnParametersChanged$vars", [{
        name: "NewLocalCurrencyMaskValues",
        attrName: "newLocalCurrencyMaskValuesVar",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new y
        }, "defaultValue"),
        complexType: y
    }])
}
var it, lt = new n.Controller.ControllerFactory(it, ct);
var $e = R.PlaceholderContent,
    Ge = R.IteratorPlaceholderContent,
    T = class T extends nt.BaseWebBlock {
        static get displayName() {
            return "InputMaskReactFlow.MaskCurrency"
        }
        static getAttributes() {
            return {
                codeFunction: "MaskCurrency",
                functionKey: "92e12bcb-fbf3-43e6-b5d0-e0c450ed345b",
                functionOwnerName: "InputMasksLibrary",
                functionOwnerKey: "c616ffa7-c700-45da-ac8d-44bec05336e7",
                screen: ""
            }
        }
        static getCssDependencies() {
            return []
        }
        static getJsDependencies() {
            return ["scripts/InputMasksLibrary.UserScripts.inputmask_min.js", "scripts/InputMasksLibrary.UserScripts.InputMaskAuxFunctions_min.js"]
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return ut
        }
        get controllerFactory() {
            return lt
        }
        get title() {
            return ""
        }
        internalRender() {
            let e = this.model,
                c = this.controller,
                a = this.idService,
                t = c.validationService,
                i = this.widgetsRecordProvider,
                D = c.callContext(),
                o = T.ifWidget,
                p = T.textWidget,
                k = T.asPrimitiveValue,
                w = T.getTranslation,
                It = this;
            return dt.createElement("div", this.getRootNodeProperties(), o(!1, !1, this, function() {
                return []
            }, function() {
                return []
            }))
        }
    };
s(T, "View");
var st = T,
    Be = st;
export {
    Be as a
};