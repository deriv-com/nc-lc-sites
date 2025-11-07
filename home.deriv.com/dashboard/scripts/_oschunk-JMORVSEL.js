import {
    a as $
} from "./_oschunk-QU7KZ3WA.js";
import {
    b as W,
    h as C,
    i as Z,
    q as we,
    r as Oe,
    v as Ve
} from "./_oschunk-O5KC3WOL.js";
import {
    a as te,
    g as D,
    m as x,
    o as R,
    q as N,
    r as w,
    s as O,
    t as V
} from "./_oschunk-NVHFAAS2.js";
import {
    a as J
} from "./_oschunk-AW35UT34.js";
import {
    Ga as ee,
    Ka as I,
    a as k,
    d as U,
    t as Y
} from "./_oschunk-WCMQG33O.js";
import {
    J as H,
    X as _,
    c as u,
    f as X,
    n as F,
    o as L,
    q as Re,
    w as Ne,
    x as T
} from "./_oschunk-DFKJJKI4.js";
var P = X(te());
var Xe = {
        staticEntities: {}
    },
    Ye = Xe.staticEntities;
var m = _,
    ne = class ne extends m.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("MaskObject", "maskObjectVar", "MaskObject", !0, !1, m.DataTypes.DataTypes.Object, function() {
                return null
            }, !1), this.attr("MaskOptions", "maskOptionsVar", "MaskOptions", !0, !1, m.DataTypes.DataTypes.Object, function() {
                return null
            }, !1), this.attr("MaskedValue", "maskedValueVar", "MaskedValue", !0, !1, m.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Currency", "currencyIn", "Currency", !0, !1, m.DataTypes.DataTypes.Text, function() {
                return "\u20AC"
            }, !1), this.attr("_currencyInDataFetchStatus", "_currencyInDataFetchStatus", "_currencyInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowCurrencyAsSuffix", "showCurrencyAsSuffixIn", "ShowCurrencyAsSuffix", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_showCurrencyAsSuffixInDataFetchStatus", "_showCurrencyAsSuffixInDataFetchStatus", "_showCurrencyAsSuffixInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DecimalDigits", "decimalDigitsIn", "DecimalDigits", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 2
            }, !1), this.attr("_decimalDigitsInDataFetchStatus", "_decimalDigitsInDataFetchStatus", "_decimalDigitsInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("AllowNegative", "allowNegativeIn", "AllowNegative", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_allowNegativeInDataFetchStatus", "_allowNegativeInDataFetchStatus", "_allowNegativeInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ThousandsSeparator", "thousandsSeparatorIn", "ThousandsSeparator", !0, !1, m.DataTypes.DataTypes.Text, function() {
                return " "
            }, !1), this.attr("_thousandsSeparatorInDataFetchStatus", "_thousandsSeparatorInDataFetchStatus", "_thousandsSeparatorInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DecimalSeparator", "decimalSeparatorIn", "DecimalSeparator", !0, !1, m.DataTypes.DataTypes.Text, function() {
                return ","
            }, !1), this.attr("_decimalSeparatorInDataFetchStatus", "_decimalSeparatorInDataFetchStatus", "_decimalSeparatorInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("MinValue", "minValueIn", "MinValue", !0, !1, m.DataTypes.DataTypes.LongInteger, function() {
                return m.BuiltinFunctions.integerToLongInteger(0)
            }, !1), this.attr("_minValueInDataFetchStatus", "_minValueInDataFetchStatus", "_minValueInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowInitialValueIfZero", "showInitialValueIfZeroIn", "ShowInitialValueIfZero", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_showInitialValueIfZeroInDataFetchStatus", "_showInitialValueIfZeroInDataFetchStatus", "_showInitialValueIfZeroInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("PadFractionalZeros", "padFractionalZerosIn", "PadFractionalZeros", !0, !1, m.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_padFractionalZerosInDataFetchStatus", "_padFractionalZerosInDataFetchStatus", "_padFractionalZerosInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(m.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
u(ne, "VariablesRecord");
var j = ne;
j.init();
var re = class re extends m.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_MaskedValue: m.Model.ValidationWidgetRecord
        }
    }
};
u(re, "WidgetsRecord");
var ae = re,
    oe = class oe extends m.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return j
        }
        static getWidgetsRecordConstructor() {
            return ae
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(i) {
            "Currency" in i && (this.variables.currencyIn = i.Currency, "_currencyInDataFetchStatus" in i && (this.variables._currencyInDataFetchStatus = i._currencyInDataFetchStatus)), "ShowCurrencyAsSuffix" in i && (this.variables.showCurrencyAsSuffixIn = i.ShowCurrencyAsSuffix, "_showCurrencyAsSuffixInDataFetchStatus" in i && (this.variables._showCurrencyAsSuffixInDataFetchStatus = i._showCurrencyAsSuffixInDataFetchStatus)), "DecimalDigits" in i && (this.variables.decimalDigitsIn = i.DecimalDigits, "_decimalDigitsInDataFetchStatus" in i && (this.variables._decimalDigitsInDataFetchStatus = i._decimalDigitsInDataFetchStatus)), "AllowNegative" in i && (this.variables.allowNegativeIn = i.AllowNegative, "_allowNegativeInDataFetchStatus" in i && (this.variables._allowNegativeInDataFetchStatus = i._allowNegativeInDataFetchStatus)), "ThousandsSeparator" in i && (this.variables.thousandsSeparatorIn = i.ThousandsSeparator, "_thousandsSeparatorInDataFetchStatus" in i && (this.variables._thousandsSeparatorInDataFetchStatus = i._thousandsSeparatorInDataFetchStatus)), "DecimalSeparator" in i && (this.variables.decimalSeparatorIn = i.DecimalSeparator, "_decimalSeparatorInDataFetchStatus" in i && (this.variables._decimalSeparatorInDataFetchStatus = i._decimalSeparatorInDataFetchStatus)), "MinValue" in i && (this.variables.minValueIn = i.MinValue, "_minValueInDataFetchStatus" in i && (this.variables._minValueInDataFetchStatus = i._minValueInDataFetchStatus)), "ShowInitialValueIfZero" in i && (this.variables.showInitialValueIfZeroIn = i.ShowInitialValueIfZero, "_showInitialValueIfZeroInDataFetchStatus" in i && (this.variables._showInitialValueIfZeroInDataFetchStatus = i._showInitialValueIfZeroInDataFetchStatus)), "PadFractionalZeros" in i && (this.variables.padFractionalZerosIn = i.PadFractionalZeros, "_padFractionalZerosInDataFetchStatus" in i && (this.variables._padFractionalZerosInDataFetchStatus = i._padFractionalZerosInDataFetchStatus))
        }
    };
u(oe, "Model");
var q = oe;
q._hasValidationWidgetsValue = void 0;
var Pe = new m.Model.ModelFactory(q);
var et = _,
    se = class se extends et.Controller.BaseModuleController {
        constructor(i, l, t, a) {
            super(i, l, t, a)
        }
        get clientActionProxies() {
            return this.hasOwnProperty("_clientActionProxies") || (this._clientActionProxies = {}), this._clientActionProxies
        }
        set clientActionProxies(i) {
            this._clientActionProxies = i
        }
        get roles() {
            return this.hasOwnProperty("_roles") || (this._roles = {}), this._roles
        }
        set roles(i) {
            this._roles = i
        }
        get defaultTimeout() {
            return this.hasOwnProperty("_defaultTimeout") || (this._defaultTimeout = 10), this._defaultTimeout
        }
        set defaultTimeout(i) {
            this._defaultTimeout = i
        }
        getDefaultTimeout() {
            return this.defaultTimeout
        }
    };
u(se, "Controller");
var ie = se,
    tt = new ie;
var Me = tt;
var nt = _,
    ue = class ue extends nt.LanguageResources.BaseMessagesProvider {
        constructor(i) {
            super(i), this.setMessage("Validation.Mandatory", "Required field!"), this.setMessage("Validation.Integer", "Integer expected!"), this.setMessage("Validation.LongInteger", "Integer expected!"), this.setMessage("Validation.Decimal", "Decimal expected!"), this.setMessage("Validation.Currency", "Currency expected!"), this.setMessage("Validation.Date", "Date expected!"), this.setMessage("Validation.Time", "Time expected!"), this.setMessage("Validation.DateTime", "DateTime expected!"), this.setMessage("Validation.Text", "Text expected!"), this.setMessage("Validation.PhoneNumber", "Phone Number expected!"), this.setMessage("Validation.Email", "Email expected!"), this.setMessage("UpgradeComplete", "Your application has been updated to the latest version."), this.setMessage("AppInitError.Generic", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.Resources", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.DataModel", "An error occurred while trying to update the app. If you want to retry the update, restart the app. If the problem persists you can reinstall, but all local data will be lost."), this.setMessage("UpgradeRequired", "Your application needs to be updated. Tap here to update."), this.setMessage("UpgradeRequiredDataLoss", "Your application needs to be updated. Unsaved data will be lost. Tap here to update.")
        }
    };
u(ue, "MessagesProvider");
var ce = ue,
    Fe = new ce;

function le(c, i, l, t) {
    var a = document.getElementById(c.InputPlaceholderId).getElementsByTagName("input")[0],
        e = document.getElementById(c.MaskedInputId);
    a && e && /^0?(\.0+)?$/.test(a.value) && (a.value = "", e.value = "")
}
u(le, "default");

function de(c, i, l, t) {
    c.MaskObject && c.MaskObject.destroy()
}
u(de, "default");

function fe(c, i, l, t) {
    var a = document.getElementById(c.InputPlaceholderId).getElementsByTagName("input")[0],
        e = document.getElementById(c.MaskedInputId),
        s = document.getElementById(c.InputPlaceholderId).getElementsByClassName("validation-message")[0],
        n = document.getElementById(c.MaskedInputContainerId).getElementsByClassName("validation-message")[0];
    if (a && e) {
        a.hasAttribute("required") ? e.setAttribute("required", "") : e.removeAttribute("required"), a.hasAttribute("disabled") ? e.setAttribute("disabled", "") : e.removeAttribute("disabled"), a.classList.contains("not-valid") ? (e.classList.add("not-valid"), s && (e.parentElement.appendChild(s.cloneNode(!1)), s.style.display = "none")) : (e.classList.remove("not-valid"), n && n.remove());
        var o = a.getAttribute("class");
        o && e.setAttribute("class", o);
        var d = a.getAttribute("style");
        d && e.setAttribute("style", d), c.MaskObject && c.MaskObject.unmaskedValue != a.value && (c.MaskObject.value = IMask.pipe(a.value.toString(), c.MaskOptions), c.MaskObject.updateValue())
    }
}
u(fe, "default");

function ye(c, i, l, t) {
    var a = document.getElementById(c.InputPlaceholderId).getElementsByTagName("input")[0],
        e = document.getElementById(c.MaskedInputId);
    let s = parseInt(c.DecimalDigits, 10),
        n = 13;
    if (a && e) {
        let o = e.value.trim();
        o === "" && (o = "0"), o.startsWith(".") && (o = "0" + o);
        let [d, f = ""] = o.split(".");
        d = d.replace(/^0+(?!\b)/, "") || "0";
        let A = n - (s > 0 ? s + 1 : 0);
        d = d.slice(0, A), f = (f + "0".repeat(s)).slice(0, s);
        let E = s > 0 ? `${d}.${f}` : d,
            p = E.replace(/,/g, "");
        a.value = p, e.value = E
    }
}
u(ye, "default");

function he(c, i, l, t) {
    var a = document.getElementById(c.InputPlaceholderId).getElementsByTagName("input")[0],
        e = document.getElementById(c.MaskedInputId);
    if (a && e) {
        c.AllowNegative == !1 && parseFloat(a.value) < 0 && (a.value = "0"), e.value = a.value;
        var s;
        c.Currency === "" ? s = "num" : c.ShowCurrencyAsSuffix === !0 ? s = "num " + c.Currency : s = c.Currency + " num";
        let A = 13,
            E = c.DecimalDigits || 0,
            p = A - (E > 0 ? E + 1 : 0);
        var n = c.MinValue,
            o = parseFloat("9".repeat(p) + (E > 0 ? "." + "9".repeat(E) : ""));
        (c.AllowNegative = !1) && (n = 0), n < Number.MIN_SAFE_INTEGER && (n = Number.MIN_SAFE_INTEGER), o > Number.MAX_SAFE_INTEGER && (o = Number.MAX_SAFE_INTEGER);
        var d = {
                mask: s,
                lazy: !1,
                blocks: {
                    num: {
                        mask: Number,
                        scale: E,
                        signed: c.AllowNegative,
                        thousandsSeparator: c.ThousandsSeparator,
                        padFractionalZeros: c.PadFractionalZeros,
                        normalizeZeros: !1,
                        radix: c.DecimalSeparator,
                        mapToRadix: ["."],
                        min: n,
                        max: o
                    }
                }
            },
            f = IMask(e, d).on("accept", function() {
                i.InputWidget_UpdateUnmaskedValue()
            });
        c.Out_MaskObject = f, c.Out_MaskOptions = d
    }
}
u(he, "default");

function me(c, i, l, t) {
    var a = document.getElementById(c.InputPlaceholderId).getElementsByTagName("input")[0],
        e = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
    e.call(a, c.MaskObject.unmaskedValue);
    var s = new Event("input", {
        bubbles: !0
    });
    a.dispatchEvent(s)
}
u(me, "default");

function ve(c, i, l, t) {
    var a;
    c.Currency === "" ? a = "num" : c.ShowCurrencyAsSuffix === !0 ? a = "num " + c.Currency : a = c.Currency + " num";
    let e = 13,
        s = c.DecimalDigits || 0,
        n = e - (s > 0 ? s + 1 : 0);
    var o = c.MinValue,
        d = parseFloat("9".repeat(n) + (s > 0 ? "." + "9".repeat(s) : ""));
    (c.AllowNegative = !1) && (o = 0), o < Number.MIN_SAFE_INTEGER && (o = Number.MIN_SAFE_INTEGER), d > Number.MAX_SAFE_INTEGER && (d = Number.MAX_SAFE_INTEGER);
    var f = {
        mask: a,
        lazy: !1,
        blocks: {
            num: {
                mask: Number,
                scale: s,
                signed: c.AllowNegative,
                thousandsSeparator: c.ThousandsSeparator,
                padFractionalZeros: c.PadFractionalZeros,
                normalizeZeros: !1,
                radix: c.DecimalSeparator,
                mapToRadix: ["."],
                min: o,
                max: d
            }
        }
    };
    c.MaskObject.updateOptions(f), c.Out_MaskOptions = f
}
u(ve, "default");
var r = _; {
    let i = class i extends r.Controller.BaseViewController {
        constructor(t, a, e) {
            super(t, a, e);
            var s = this.controller;
            this.clientActionProxies = {
                inputWidget_UpdateUnmaskedValue$Action: u(function() {
                    return s.executeActionInsideJSNode(s._inputWidget_UpdateUnmaskedValue$Action.bind(s), s.callContext(), function(n) {
                        return {}
                    }, function() {}, "InputWidget_UpdateUnmaskedValue")
                }, "inputWidget_UpdateUnmaskedValue$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "1f8502b3-7b69-4f6b-a0aa-80d4231fa148"), n.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), n.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnParametersChanged"), t = e.callContext(t), e._mask_Update$Action(t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        get _event_OnFocus$Action() {
            return this.hasOwnProperty("__event_OnFocus$Action") || (this.__event_OnFocus$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("Event_OnFocus", function(n) {
                    return n && (n.setAttribute("code.function", "Event_OnFocus"), n.setAttribute("outsystems.function.key", "209b4a2b-ba83-49ac-9401-36755f0e4e1b"), n.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), n.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("Event_OnFocus"), t = e.callContext(t), r.Flow.executeAsyncFlow(function() {
                            return e.onFocus$Action(t).then(function() {
                                r.Logger.startActiveSpan("emptyValue", function(o) {
                                    o && (o.setAttribute("code.function", "emptyValue"), o.setAttribute("outsystems.function.key", "9e0c466e-b8dc-4c11-bfdd-0c5f75d6db00"), o.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), o.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return e.safeExecuteJSNode(le, "emptyValue", "Event_OnFocus", {
                                            MaskedInputId: r.DataConversion.JSNodeParamConverter.to(s.getId("Input_MaskedValue"), r.DataTypes.DataTypes.Text),
                                            InputPlaceholderId: r.DataConversion.JSNodeParamConverter.to(s.getId("Placeholder_Input"), r.DataTypes.DataTypes.Text)
                                        }, function(d) {}, {}, {})
                                    } finally {
                                        o && o.end()
                                    }
                                }, 1)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__event_OnFocus$Action
        }
        set _event_OnFocus$Action(t) {
            this.__event_OnFocus$Action = t
        }
        get _mask_Destroy$Action() {
            return this.hasOwnProperty("__mask_Destroy$Action") || (this.__mask_Destroy$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("Mask_Destroy", function(n) {
                    n && (n.setAttribute("code.function", "Mask_Destroy"), n.setAttribute("outsystems.function.key", "381d95da-68f3-4dcf-9002-827489f66cb6"), n.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), n.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("Mask_Destroy"), t = e.callContext(t), r.Logger.startActiveSpan("DestroyMask", function(o) {
                            o && (o.setAttribute("code.function", "DestroyMask"), o.setAttribute("outsystems.function.key", "e90dd42b-180c-4aec-be1b-6208897930fd"), o.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), o.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(de, "DestroyMask", "Mask_Destroy", {
                                    MaskObject: r.DataConversion.JSNodeParamConverter.to(a.variables.maskObjectVar, r.DataTypes.DataTypes.Object)
                                }, function(d) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1), a.variables.maskObjectVar = r.BuiltinFunctions.nullObject(), a.variables.maskOptionsVar = r.BuiltinFunctions.nullObject()
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__mask_Destroy$Action
        }
        set _mask_Destroy$Action(t) {
            this.__mask_Destroy$Action = t
        }
        get _inputMasked_UpdateDisplay$Action() {
            return this.hasOwnProperty("__inputMasked_UpdateDisplay$Action") || (this.__inputMasked_UpdateDisplay$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("InputMasked_UpdateDisplay", function(n) {
                    n && (n.setAttribute("code.function", "InputMasked_UpdateDisplay"), n.setAttribute("outsystems.function.key", "3ec5244b-79b9-4fc5-ab37-80d61ab4e36b"), n.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), n.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("InputMasked_UpdateDisplay"), t = e.callContext(t), r.Logger.startActiveSpan("UpdateInputMaskedDisplay", function(o) {
                            o && (o.setAttribute("code.function", "UpdateInputMaskedDisplay"), o.setAttribute("outsystems.function.key", "d1a03b93-6022-4c71-9733-9a942223a5ee"), o.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), o.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(fe, "UpdateInputMaskedDisplay", "InputMasked_UpdateDisplay", {
                                    MaskObject: r.DataConversion.JSNodeParamConverter.to(a.variables.maskObjectVar, r.DataTypes.DataTypes.Object),
                                    MaskOptions: r.DataConversion.JSNodeParamConverter.to(a.variables.maskOptionsVar, r.DataTypes.DataTypes.Object),
                                    MaskedInputId: r.DataConversion.JSNodeParamConverter.to(s.getId("Input_MaskedValue"), r.DataTypes.DataTypes.Text),
                                    InputPlaceholderId: r.DataConversion.JSNodeParamConverter.to(s.getId("Placeholder_Input"), r.DataTypes.DataTypes.Text),
                                    MaskedInputContainerId: r.DataConversion.JSNodeParamConverter.to(s.getId("MaskedInputContainer"), r.DataTypes.DataTypes.Text)
                                }, function(d) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__inputMasked_UpdateDisplay$Action
        }
        set _inputMasked_UpdateDisplay$Action(t) {
            this.__inputMasked_UpdateDisplay$Action = t
        }
        get _onPlaceholderUpdate$Action() {
            return this.hasOwnProperty("__onPlaceholderUpdate$Action") || (this.__onPlaceholderUpdate$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("OnPlaceholderUpdate", function(n) {
                    n && (n.setAttribute("code.function", "OnPlaceholderUpdate"), n.setAttribute("outsystems.function.key", "404df670-d4fd-4d04-82fe-5f92c923f6dc"), n.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), n.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnPlaceholderUpdate"), t = e.callContext(t), e._inputMasked_UpdateDisplay$Action(t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onPlaceholderUpdate$Action
        }
        set _onPlaceholderUpdate$Action(t) {
            this.__onPlaceholderUpdate$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "45ada299-f508-4668-9137-8a3ff40c7033"), n.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), n.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t), e._mask_Initialize$Action(t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _event_OnBlur$Action() {
            return this.hasOwnProperty("__event_OnBlur$Action") || (this.__event_OnBlur$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("Event_OnBlur", function(n) {
                    return n && (n.setAttribute("code.function", "Event_OnBlur"), n.setAttribute("outsystems.function.key", "6b2d61bd-816c-4038-89eb-c5b90944f22d"), n.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), n.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("Event_OnBlur"), t = e.callContext(t), r.Flow.executeAsyncFlow(function() {
                            return e.onBlur$Action(t).then(function() {
                                r.Logger.startActiveSpan("emptyValue", function(o) {
                                    o && (o.setAttribute("code.function", "emptyValue"), o.setAttribute("outsystems.function.key", "854ad2b2-7d6e-4b0d-91de-e6cf89f820f8"), o.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), o.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return e.safeExecuteJSNode(ye, "emptyValue", "Event_OnBlur", {
                                            MaskedInputId: r.DataConversion.JSNodeParamConverter.to(s.getId("Input_MaskedValue"), r.DataTypes.DataTypes.Text),
                                            DecimalDigits: r.DataConversion.JSNodeParamConverter.to(a.variables.decimalDigitsIn, r.DataTypes.DataTypes.Integer),
                                            InputPlaceholderId: r.DataConversion.JSNodeParamConverter.to(s.getId("Placeholder_Input"), r.DataTypes.DataTypes.Text)
                                        }, function(d) {}, {}, {})
                                    } finally {
                                        o && o.end()
                                    }
                                }, 1)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__event_OnBlur$Action
        }
        set _event_OnBlur$Action(t) {
            this.__event_OnBlur$Action = t
        }
        get _mask_Initialize$Action() {
            return this.hasOwnProperty("__mask_Initialize$Action") || (this.__mask_Initialize$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("Mask_Initialize", function(n) {
                    n && (n.setAttribute("code.function", "Mask_Initialize"), n.setAttribute("outsystems.function.key", "792ebfbb-1fb5-4c10-bfbb-7736a82f0536"), n.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), n.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("Mask_Initialize"), t = e.callContext(t);
                        var o = new r.DataTypes.VariableHolder;
                        o.value = r.Logger.startActiveSpan("InitializeMask", function(d) {
                            d && (d.setAttribute("code.function", "InitializeMask"), d.setAttribute("outsystems.function.key", "a9690d24-6ac9-4125-95ce-e34d466459bb"), d.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), d.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(he, "InitializeMask", "Mask_Initialize", {
                                    Currency: r.DataConversion.JSNodeParamConverter.to(a.variables.currencyIn, r.DataTypes.DataTypes.Text),
                                    ThousandsSeparator: r.DataConversion.JSNodeParamConverter.to(a.variables.thousandsSeparatorIn, r.DataTypes.DataTypes.Text),
                                    InputPlaceholderId: r.DataConversion.JSNodeParamConverter.to(s.getId("Placeholder_Input"), r.DataTypes.DataTypes.Text),
                                    DecimalSeparator: r.DataConversion.JSNodeParamConverter.to(a.variables.decimalSeparatorIn, r.DataTypes.DataTypes.Text),
                                    PadFractionalZeros: r.DataConversion.JSNodeParamConverter.to(a.variables.padFractionalZerosIn, r.DataTypes.DataTypes.Boolean),
                                    MinValue: r.DataConversion.JSNodeParamConverter.to(a.variables.minValueIn, r.DataTypes.DataTypes.LongInteger),
                                    MaskedInputId: r.DataConversion.JSNodeParamConverter.to(s.getId("Input_MaskedValue"), r.DataTypes.DataTypes.Text),
                                    DecimalDigits: r.DataConversion.JSNodeParamConverter.to(a.variables.decimalDigitsIn, r.DataTypes.DataTypes.Integer),
                                    AllowNegative: r.DataConversion.JSNodeParamConverter.to(a.variables.allowNegativeIn, r.DataTypes.DataTypes.Boolean),
                                    ShowInitialValueIfZero: r.DataConversion.JSNodeParamConverter.to(a.variables.showInitialValueIfZeroIn, r.DataTypes.DataTypes.Boolean),
                                    ShowCurrencyAsSuffix: r.DataConversion.JSNodeParamConverter.to(a.variables.showCurrencyAsSuffixIn, r.DataTypes.DataTypes.Boolean),
                                    Out_MaskObject: r.DataConversion.JSNodeParamConverter.to(null, r.DataTypes.DataTypes.Object),
                                    Out_MaskOptions: r.DataConversion.JSNodeParamConverter.to(null, r.DataTypes.DataTypes.Object)
                                }, function(f) {
                                    var A = new(e.constructor.getVariableGroupType("DeriviMaskJs.NumberMasks.CurrencyMask.Mask_Initialize$initializeMaskJSResult"));
                                    return A.out_MaskObjectOut = r.DataConversion.JSNodeParamConverter.from(f.Out_MaskObject, r.DataTypes.DataTypes.Object), A.out_MaskOptionsOut = r.DataConversion.JSNodeParamConverter.from(f.Out_MaskOptions, r.DataTypes.DataTypes.Object), A
                                }, {
                                    InputWidget_UpdateUnmaskedValue: e.clientActionProxies.inputWidget_UpdateUnmaskedValue$Action
                                }, {})
                            } finally {
                                d && d.end()
                            }
                        }, 1), e._inputMasked_UpdateDisplay$Action(t), a.variables.maskObjectVar = o.value.out_MaskObjectOut, a.variables.maskOptionsVar = o.value.out_MaskOptionsOut
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__mask_Initialize$Action
        }
        set _mask_Initialize$Action(t) {
            this.__mask_Initialize$Action = t
        }
        get _inputWidget_UpdateUnmaskedValue$Action() {
            return this.hasOwnProperty("__inputWidget_UpdateUnmaskedValue$Action") || (this.__inputWidget_UpdateUnmaskedValue$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("InputWidget_UpdateUnmaskedValue", function(n) {
                    n && (n.setAttribute("code.function", "InputWidget_UpdateUnmaskedValue"), n.setAttribute("outsystems.function.key", "8a3aba46-949e-40c1-887f-2672fac90ccc"), n.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), n.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("InputWidget_UpdateUnmaskedValue"), t = e.callContext(t), r.Logger.startActiveSpan("UpdateUnmaskedValue", function(o) {
                            o && (o.setAttribute("code.function", "UpdateUnmaskedValue"), o.setAttribute("outsystems.function.key", "568f97bb-d0e5-43ba-8df8-8105273c4b31"), o.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), o.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(me, "UpdateUnmaskedValue", "InputWidget_UpdateUnmaskedValue", {
                                    MaskObject: r.DataConversion.JSNodeParamConverter.to(a.variables.maskObjectVar, r.DataTypes.DataTypes.Object),
                                    InputPlaceholderId: r.DataConversion.JSNodeParamConverter.to(s.getId("Placeholder_Input"), r.DataTypes.DataTypes.Text)
                                }, function(d) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__inputWidget_UpdateUnmaskedValue$Action
        }
        set _inputWidget_UpdateUnmaskedValue$Action(t) {
            this.__inputWidget_UpdateUnmaskedValue$Action = t
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "a0d0f4bb-1161-40e4-881b-f231616c5fb3"), n.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), n.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDestroy"), t = e.callContext(t), e._mask_Destroy$Action(t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(t) {
            this.__onDestroy$Action = t
        }
        get _mask_Update$Action() {
            return this.hasOwnProperty("__mask_Update$Action") || (this.__mask_Update$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("Mask_Update", function(n) {
                    n && (n.setAttribute("code.function", "Mask_Update"), n.setAttribute("outsystems.function.key", "aae25b4e-d624-4448-b4bc-bfb597cc0680"), n.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), n.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("Mask_Update"), t = e.callContext(t);
                        var o = new r.DataTypes.VariableHolder;
                        o.value = r.Logger.startActiveSpan("UpdateMask", function(d) {
                            d && (d.setAttribute("code.function", "UpdateMask"), d.setAttribute("outsystems.function.key", "e96b1d4f-e979-4384-a4d5-a0b2cd8dde3b"), d.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), d.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(ve, "UpdateMask", "Mask_Update", {
                                    DecimalDigits: r.DataConversion.JSNodeParamConverter.to(a.variables.decimalDigitsIn, r.DataTypes.DataTypes.Integer),
                                    MaskObject: r.DataConversion.JSNodeParamConverter.to(a.variables.maskObjectVar, r.DataTypes.DataTypes.Object),
                                    DecimalSeparator: r.DataConversion.JSNodeParamConverter.to(a.variables.decimalSeparatorIn, r.DataTypes.DataTypes.Text),
                                    ThousandsSeparator: r.DataConversion.JSNodeParamConverter.to(a.variables.thousandsSeparatorIn, r.DataTypes.DataTypes.Text),
                                    PadFractionalZeros: r.DataConversion.JSNodeParamConverter.to(a.variables.padFractionalZerosIn, r.DataTypes.DataTypes.Boolean),
                                    Currency: r.DataConversion.JSNodeParamConverter.to(a.variables.currencyIn, r.DataTypes.DataTypes.Text),
                                    AllowNegative: r.DataConversion.JSNodeParamConverter.to(a.variables.allowNegativeIn, r.DataTypes.DataTypes.Boolean),
                                    MinValue: r.DataConversion.JSNodeParamConverter.to(a.variables.minValueIn, r.DataTypes.DataTypes.LongInteger),
                                    ShowCurrencyAsSuffix: r.DataConversion.JSNodeParamConverter.to(a.variables.showCurrencyAsSuffixIn, r.DataTypes.DataTypes.Boolean),
                                    Out_MaskOptions: r.DataConversion.JSNodeParamConverter.to(null, r.DataTypes.DataTypes.Object)
                                }, function(f) {
                                    var A = new(e.constructor.getVariableGroupType("DeriviMaskJs.NumberMasks.CurrencyMask.Mask_Update$updateMaskJSResult"));
                                    return A.out_MaskOptionsOut = r.DataConversion.JSNodeParamConverter.from(f.Out_MaskOptions, r.DataTypes.DataTypes.Object), A
                                }, {}, {})
                            } finally {
                                d && d.end()
                            }
                        }, 1), a.variables.maskOptionsVar = o.value.out_MaskOptionsOut
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__mask_Update$Action
        }
        set _mask_Update$Action(t) {
            this.__mask_Update$Action = t
        }
        get _event_OnChange$Action() {
            return this.hasOwnProperty("__event_OnChange$Action") || (this.__event_OnChange$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("Event_OnChange", function(n) {
                    return n && (n.setAttribute("code.function", "Event_OnChange"), n.setAttribute("outsystems.function.key", "b31d9003-a221-4f00-b076-8ea7ab2a11c7"), n.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), n.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("Event_OnChange"), t = e.callContext(t), r.Flow.executeAsyncFlow(function() {
                            return e.onChange$Action(t)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__event_OnChange$Action
        }
        set _event_OnChange$Action(t) {
            this.__event_OnChange$Action = t
        }
        onParametersChanged$Action(t) {
            var a = this.controller;
            return r.Logger.startActiveSpan("OnParametersChanged__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnParametersChanged"), e.setAttribute("outsystems.function.key", "1f8502b3-7b69-4f6b-a0aa-80d4231fa148"), e.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), e.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onParametersChanged$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        event_OnFocus$Action(t) {
            var a = this.controller;
            return r.Logger.startActiveSpan("Event_OnFocus__proxy", function(e) {
                return e && (e.setAttribute("code.function", "Event_OnFocus"), e.setAttribute("outsystems.function.key", "209b4a2b-ba83-49ac-9401-36755f0e4e1b"), e.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), e.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._event_OnFocus$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        mask_Destroy$Action(t) {
            var a = this.controller;
            return r.Logger.startActiveSpan("Mask_Destroy__proxy", function(e) {
                e && (e.setAttribute("code.function", "Mask_Destroy"), e.setAttribute("outsystems.function.key", "381d95da-68f3-4dcf-9002-827489f66cb6"), e.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), e.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._mask_Destroy$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        inputMasked_UpdateDisplay$Action(t) {
            var a = this.controller;
            return r.Logger.startActiveSpan("InputMasked_UpdateDisplay__proxy", function(e) {
                e && (e.setAttribute("code.function", "InputMasked_UpdateDisplay"), e.setAttribute("outsystems.function.key", "3ec5244b-79b9-4fc5-ab37-80d61ab4e36b"), e.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), e.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._inputMasked_UpdateDisplay$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onPlaceholderUpdate$Action(t) {
            var a = this.controller;
            return r.Logger.startActiveSpan("OnPlaceholderUpdate__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnPlaceholderUpdate"), e.setAttribute("outsystems.function.key", "404df670-d4fd-4d04-82fe-5f92c923f6dc"), e.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), e.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onPlaceholderUpdate$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var a = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "45ada299-f508-4668-9137-8a3ff40c7033"), e.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), e.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onReady$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        event_OnBlur$Action(t) {
            var a = this.controller;
            return r.Logger.startActiveSpan("Event_OnBlur__proxy", function(e) {
                return e && (e.setAttribute("code.function", "Event_OnBlur"), e.setAttribute("outsystems.function.key", "6b2d61bd-816c-4038-89eb-c5b90944f22d"), e.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), e.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._event_OnBlur$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        mask_Initialize$Action(t) {
            var a = this.controller;
            return r.Logger.startActiveSpan("Mask_Initialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "Mask_Initialize"), e.setAttribute("outsystems.function.key", "792ebfbb-1fb5-4c10-bfbb-7736a82f0536"), e.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), e.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._mask_Initialize$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        inputWidget_UpdateUnmaskedValue$Action(t) {
            var a = this.controller;
            return r.Logger.startActiveSpan("InputWidget_UpdateUnmaskedValue__proxy", function(e) {
                e && (e.setAttribute("code.function", "InputWidget_UpdateUnmaskedValue"), e.setAttribute("outsystems.function.key", "8a3aba46-949e-40c1-887f-2672fac90ccc"), e.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), e.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._inputWidget_UpdateUnmaskedValue$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onDestroy$Action(t) {
            var a = this.controller;
            return r.Logger.startActiveSpan("OnDestroy__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnDestroy"), e.setAttribute("outsystems.function.key", "a0d0f4bb-1161-40e4-881b-f231616c5fb3"), e.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), e.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onDestroy$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        mask_Update$Action(t) {
            var a = this.controller;
            return r.Logger.startActiveSpan("Mask_Update__proxy", function(e) {
                e && (e.setAttribute("code.function", "Mask_Update"), e.setAttribute("outsystems.function.key", "aae25b4e-d624-4448-b4bc-bfb597cc0680"), e.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), e.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._mask_Update$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        event_OnChange$Action(t) {
            var a = this.controller;
            return r.Logger.startActiveSpan("Event_OnChange__proxy", function(e) {
                return e && (e.setAttribute("code.function", "Event_OnChange"), e.setAttribute("outsystems.function.key", "b31d9003-a221-4f00-b076-8ea7ab2a11c7"), e.setAttribute("outsystems.function.owner.name", "DeriviMaskJs"), e.setAttribute("outsystems.function.owner.key", "895efd1a-4dd5-4752-b98f-9c414447eba8"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._event_OnChange$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        get onChange$Action() {
            return this.hasOwnProperty("_onChange$Action") || (this._onChange$Action = function() {
                return Promise.resolve()
            }), this._onChange$Action
        }
        set onChange$Action(t) {
            this._onChange$Action = t
        }
        get onBlur$Action() {
            return this.hasOwnProperty("_onBlur$Action") || (this._onBlur$Action = function() {
                return Promise.resolve()
            }), this._onBlur$Action
        }
        set onBlur$Action(t) {
            this._onBlur$Action = t
        }
        get onFocus$Action() {
            return this.hasOwnProperty("_onFocus$Action") || (this._onFocus$Action = function() {
                return Promise.resolve()
            }), this._onFocus$Action
        }
        set onFocus$Action(t) {
            this._onFocus$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var a = this.controller,
                    e = this.model,
                    s = this.idService;
                return a.onReady$Action(t)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(t) {
                var a = this.controller,
                    e = this.model,
                    s = this.idService;
                return a.onDestroy$Action(t)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(t) {
                var a = this.controller,
                    e = this.model,
                    s = this.idService;
                return a.onParametersChanged$Action(t)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(t) {
            this._onSyncStartEventHandler = t
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(t) {
            this._onSyncCompleteEventHandler = t
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(t) {
            this._onSyncErrorEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return Me.defaultTimeout
        }
    };
    u(i, "ControllerInner");
    let c = i;
    B = c, B.registerVariableGroupType("DeriviMaskJs.NumberMasks.CurrencyMask.Mask_Initialize$initializeMaskJSResult", [{
        name: "Out_MaskObject",
        attrName: "out_MaskObjectOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Object,
        defaultValue: u(function() {
            return null
        }, "defaultValue")
    }, {
        name: "Out_MaskOptions",
        attrName: "out_MaskOptionsOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Object,
        defaultValue: u(function() {
            return null
        }, "defaultValue")
    }]), B.registerVariableGroupType("DeriviMaskJs.NumberMasks.CurrencyMask.Mask_Update$updateMaskJSResult", [{
        name: "Out_MaskOptions",
        attrName: "out_MaskOptionsOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Object,
        defaultValue: u(function() {
            return null
        }, "defaultValue")
    }])
}
var B, Le = new r.Controller.ControllerFactory(B, Fe);
var Sa = D.PlaceholderContent,
    pa = D.IteratorPlaceholderContent,
    ot = u(function() {
        var c = R(function(i) {
            var l = i.model,
                t = i.controller,
                a = i.controller.idService,
                e = t.validationService,
                s = t.callContext(),
                n = O,
                o = V,
                d = {
                    props: i,
                    validateWidget: u(function(v) {
                        i.validateWidget(i, v)
                    }, "validateWidget")
                },
                f = l,
                A = w,
                E = N,
                p = x();
            return P.createElement("div", i.rootNodeProperties, P.createElement(C, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: a,
                    uuid: "0"
                },
                _widgetRecordProvider: f
            }, P.createElement(C, {
                align: 0,
                animate: !1,
                style: "input-masked",
                visible: !0,
                _idProps: {
                    service: a,
                    name: "MaskedInputContainer"
                },
                _widgetRecordProvider: f
            }, P.createElement(Oe, {
                _validationProps: {
                    validationService: e
                },
                enabled: !0,
                extendedEvents: {
                    onBlur: u(function() {
                        return Promise.resolve().then(function() {
                            var v = typeof s != "undefined" && s !== null ? s.clone() : t.callContext().clone();
                            return t.event_OnBlur$Action(t.callContext(v))
                        })
                    }, "onBlur"),
                    onFocus: u(function() {
                        return Promise.resolve().then(function() {
                            var v = typeof s != "undefined" && s !== null ? s.clone() : t.callContext().clone();
                            return t.event_OnFocus$Action(t.callContext(v))
                        })
                    }, "onFocus")
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 0,
                mandatory: !1,
                maxLength: 13,
                onChange: u(function() {
                    return Promise.resolve().then(function() {
                        var v = typeof s != "undefined" && s !== null ? s.clone() : t.callContext().clone();
                        return t.event_OnChange$Action(t.callContext(v))
                    })
                }, "onChange"),
                style: "form-control text-align-right",
                variable: l.createVariable(Ne.DataTypes.Text, l.variables.maskedValueVar, function(v) {
                    l.variables.maskedValueVar = v
                }),
                _idProps: {
                    service: a,
                    name: "Input_MaskedValue"
                },
                _widgetRecordProvider: f
            })), P.createElement(Ve, {
                align: 0,
                content: d.props.placeholders.placeholder_Input,
                extendedEvents: {
                    componentDidUpdate: u(function() {
                        var v = typeof s != "undefined" && s !== null ? s.clone() : t.callContext().clone();
                        t.onPlaceholderUpdate$Action(t.callContext(v))
                    }, "componentDidUpdate")
                },
                style: "input-widget-hidden",
                _idProps: {
                    service: a,
                    name: "Placeholder_Input"
                },
                _widgetRecordProvider: f
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: u(function() {
                return {
                    codeFunction: "CurrencyMask",
                    functionKey: "8264fb0e-d234-40e9-827c-4276b1741878",
                    functionOwnerName: "DeriviMaskJs",
                    functionOwnerKey: "895efd1a-4dd5-4752-b98f-9c414447eba8",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "NumberMasks.CurrencyMask",
            modelFactory: Pe,
            controllerFactory: Le
        });
        return c.getCssDependencies = function() {
            return ["css/DeriviMaskJs.NumberMasks.CurrencyMask.css", "css/OutSystemsReactWidgets.css"]
        }, c.getJsDependencies = function() {
            return ["scripts/DeriviMaskJs.UserScripts.iMaskJs_7_6_0.js"]
        }, c.getBlocks = function() {
            return []
        }, c
    }, "componentFactory"),
    Ca = ot();
var b = X(te());
var g = _,
    be = class be extends g.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("FromAccount", "fromAccountIn", "FromAccount", !0, !1, g.DataTypes.DataTypes.Record, function() {
                return g.DataTypes.ImmutableBase.getData(new U)
            }, !1, U), this.attr("_fromAccountInDataFetchStatus", "_fromAccountInDataFetchStatus", "_fromAccountInDataFetchStatus", !0, !1, g.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ToAccount", "toAccountIn", "ToAccount", !0, !1, g.DataTypes.DataTypes.Record, function() {
                return g.DataTypes.ImmutableBase.getData(new U)
            }, !1, U), this.attr("_toAccountInDataFetchStatus", "_toAccountInDataFetchStatus", "_toAccountInDataFetchStatus", !0, !1, g.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TransferAmount", "transferAmountIn", "TransferAmount", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_transferAmountInDataFetchStatus", "_transferAmountInDataFetchStatus", "_transferAmountInDataFetchStatus", !0, !1, g.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("AmountReceived", "amountReceivedIn", "AmountReceived", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_amountReceivedInDataFetchStatus", "_amountReceivedInDataFetchStatus", "_amountReceivedInDataFetchStatus", !0, !1, g.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(g.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
u(be, "VariablesRecord");
var G = be;
G.init();
var Ae = class Ae extends g.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
u(Ae, "WidgetsRecord");
var _e = Ae,
    M = class M extends g.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return G
        }
        static getWidgetsRecordConstructor() {
            return _e
        }
        static get hasValidationWidgets() {
            return M._hasValidationWidgetsValue === void 0 && (M._hasValidationWidgetsValue = void 0), M._hasValidationWidgetsValue
        }
        setInputs(i) {
            "FromAccount" in i && (this.variables.fromAccountIn = i.FromAccount, "_fromAccountInDataFetchStatus" in i && (this.variables._fromAccountInDataFetchStatus = i._fromAccountInDataFetchStatus)), "ToAccount" in i && (this.variables.toAccountIn = i.ToAccount, "_toAccountInDataFetchStatus" in i && (this.variables._toAccountInDataFetchStatus = i._toAccountInDataFetchStatus)), "TransferAmount" in i && (this.variables.transferAmountIn = i.TransferAmount, "_transferAmountInDataFetchStatus" in i && (this.variables._transferAmountInDataFetchStatus = i._transferAmountInDataFetchStatus)), "AmountReceived" in i && (this.variables.amountReceivedIn = i.AmountReceived, "_amountReceivedInDataFetchStatus" in i && (this.variables._amountReceivedInDataFetchStatus = i._amountReceivedInDataFetchStatus))
        }
    };
u(M, "Model");
var z = M;
z._hasValidationWidgetsValue = void 0;
var Je = new g.Model.ModelFactory(z);
var it = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "\u0631\u0628\u0645\u0627 \u0644\u0627\u062D\u0642\u064B\u0627",
        "H+EhVKseJEOGHRod11gUog#Value": "\u0627\u0628\u062F\u0623 \u0627\u0644\u062A\u062F\u0627\u0648\u0644",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "\u062A\u0645",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}} \u0623\u064F\u0631\u0633\u0644 \u0625\u0644\u0649 \u062D\u0633\u0627\u0628\u0643 {{2}}.",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}} \u0623\u064F\u0631\u0633\u0644 \u0625\u0644\u0649 {{2}} Wallet \u0627\u0644\u062E\u0627\u0635 \u0628\u0643.",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}} \u0623\u064F\u0631\u0633\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u062D\u0641\u0638\u0629 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643.",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "\u062A\u0645 \u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0628\u0646\u062C\u0627\u062D"
    },
    st = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "\u09B9\u09AF\u09BC\u09A4\u09CB \u09AA\u09B0\u09C7",
        "H+EhVKseJEOGHRod11gUog#Value": "\u099F\u09CD\u09B0\u09C7\u09A1\u09BF\u0982 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C1\u09A8",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "\u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}} \u0986\u09AA\u09A8\u09BE\u09B0 {{2}} \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u09C7 \u09B8\u09CD\u09A5\u09BE\u09A8\u09BE\u09A8\u09CD\u09A4\u09B0\u09BF\u09A4 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}} \u0986\u09AA\u09A8\u09BE\u09B0 {{2}} Wallet-\u098F \u09B8\u09CD\u09A5\u09BE\u09A8\u09BE\u09A8\u09CD\u09A4\u09B0\u09BF\u09A4 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}} \u0986\u09AA\u09A8\u09BE\u09B0 Wallet-\u098F \u09B8\u09CD\u09A5\u09BE\u09A8\u09BE\u09A8\u09CD\u09A4\u09B0\u09BF\u09A4 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "\u09B8\u09CD\u09A5\u09BE\u09A8\u09BE\u09A8\u09CD\u09A4\u09B0 \u09B8\u09AB\u09B2 \u09B9\u09DF\u09C7\u099B\u09C7"
    },
    ct = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "Vielleicht sp\xE4ter",
        "H+EhVKseJEOGHRod11gUog#Value": "Mit dem Handel beginnen",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "Fertig",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}} wurde auf dein {{2}}-Konto \xFCbertragen.",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}} wurde auf dein {{2}} Wallet \xFCbertragen.",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}} wurde auf deine Wallet \xFCbertragen.",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "\xDCberweisung erfolgreich"
    },
    ut = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "Quiz\xE1 m\xE1s tarde",
        "H+EhVKseJEOGHRod11gUog#Value": "Comenzar a operar",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "Hecho",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}} transferido a tu cuenta de {{2}}.",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}} transferido a tu Wallet de {{2}}.",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}} transferido a tu Wallet.",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "Transferencia exitosa"
    },
    lt = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "Peut-\xEAtre plus tard",
        "H+EhVKseJEOGHRod11gUog#Value": "Commencer \xE0 trader",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "Fait",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}} transf\xE9r\xE9(e) vers votre compte {{2}}.",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}} transf\xE9r\xE9(e) vers votre Wallet {{2}}.",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}} transf\xE9r\xE9(e) vers votre Wallet.",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "Transfert r\xE9ussi"
    },
    dt = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "Forse pi\xF9 tardi",
        "H+EhVKseJEOGHRod11gUog#Value": "Inizia a fare trading",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "Completato",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}} trasferito nel tuo account {{2}}.",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}} trasferito nel tuo Wallet {{2}}.",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}} trasferito nel tuo Wallet.",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "Trasferimento riuscito"
    },
    ft = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "\u1794\u17D2\u179A\u17A0\u17C2\u179B\u1787\u17B6\u1796\u17C1\u179B\u1780\u17D2\u179A\u17C4\u1799",
        "H+EhVKseJEOGHRod11gUog#Value": "\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u1787\u17BD\u1789\u178A\u17BC\u179A",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "\u1794\u17B6\u1793\u1792\u17D2\u179C\u17BE\u179F\u1798\u17D2\u179A\u17C1\u1785",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}} \u1794\u17B6\u1793\u1795\u17D2\u1791\u17C1\u179A\u1791\u17C5\u1782\u178E\u1793\u17B8 {{2}} \u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780\u17D4",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}} \u1794\u17B6\u1793\u1795\u17D2\u1791\u17C1\u179A\u1791\u17C5 Wallet \u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780 {{2}}\u17D4",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}} \u1794\u17B6\u1793\u1795\u17D2\u1791\u17C1\u179A\u1791\u17C5 Wallet \u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780\u17D4",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "\u1780\u17B6\u179A\u1795\u17D2\u1791\u17C1\u179A\u1787\u17C4\u1782\u1787\u17D0\u1799"
    },
    yt = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "\uB098\uC911\uC5D0 \uB2E4\uC2DC \uBCF4\uAE30",
        "H+EhVKseJEOGHRod11gUog#Value": "\uAC70\uB798 \uC2DC\uC791",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "\uC644\uB8CC",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}}\uC774(\uAC00) \uADC0\uD558\uC758 {{2}} \uACC4\uC88C\uB85C \uC774\uCCB4\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}}\uC774(\uAC00) \uADC0\uD558\uC758 {{2}} Wallet\uB85C \uC774\uCCB4\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}}\uC774(\uAC00) Wallet\uB85C \uC774\uCCB4\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "\uC774\uCCB4 \uC131\uACF5"
    },
    ht = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "\u041C\u0430\u0433\u0430\u0434\u0433\u04AF\u0439 \u0445\u043E\u0436\u0438\u043C",
        "H+EhVKseJEOGHRod11gUog#Value": "\u0425\u0443\u0434\u0430\u043B\u0434\u0430\u0430\u0433\u0430\u0430 \u044D\u0445\u043B\u04AF\u04AF\u043B\u044D\u044D\u0440\u044D\u0439",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "\u0411\u043E\u043B\u0441\u043E\u043D",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}} \u0442\u0430\u043D\u044B {{2}} \u0434\u0430\u043D\u0441 \u0440\u0443\u0443 \u0448\u0438\u043B\u0436\u043B\u044D\u044D",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}} \u0442\u0430\u043D\u044B {{2}} Wallet \u0440\u0443\u0443 \u0448\u0438\u043B\u0436\u043B\u044D\u044D",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}} \u0442\u0430\u043D\u044B Wallet \u0440\u0443\u0443 \u0448\u0438\u043B\u0436\u043B\u044D\u044D",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "\u0428\u0438\u043B\u0436\u04AF\u04AF\u043B\u0433\u044D\u044D \u0430\u043C\u0436\u0438\u043B\u0442\u0442\u0430\u0439"
    },
    mt = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "Mo\u017Ce p\xF3\u017Aniej",
        "H+EhVKseJEOGHRod11gUog#Value": "Rozpocznij handel",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "Zrobione",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}} zosta\u0142o przelane na Twoje konto {{2}}.",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}} zosta\u0142o przelane na Tw\xF3j Wallet {{2}}.",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}} zosta\u0142o przelane na Tw\xF3j Wallet.",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "Przelew zako\u0144czony pomy\u015Blnie"
    },
    vt = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "Talvez mais tarde",
        "H+EhVKseJEOGHRod11gUog#Value": "Come\xE7ar a negociar",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "Conclu\xEDdo",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}} transferido para a sua conta {{2}}.",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}} transferido para sua Wallet {{2}}.",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}} transferido para sua Wallet.",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "Transfer\xEAncia bem-sucedida"
    },
    _t = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "\u041C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u043E\u0437\u0436\u0435",
        "H+EhVKseJEOGHRod11gUog#Value": "\u041D\u0430\u0447\u0430\u0442\u044C \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044E",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "\u0413\u043E\u0442\u043E\u0432\u043E",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}} \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043D\u043E \u043D\u0430 \u0432\u0430\u0448 \u0441\u0447\u0435\u0442 {{2}}.",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}} \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043D\u043E \u043D\u0430 \u0432\u0430\u0448 Wallet {{2}}.",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}} \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043D\u043E \u043D\u0430 \u0432\u0430\u0448 Wallet.",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D"
    },
    bt = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "\u0DC3\u0DB8\u0DC4\u0DBB \u0DC0\u0DD2\u0DA7 \u0DB4\u0DC3\u0DD4\u0DC0",
        "H+EhVKseJEOGHRod11gUog#Value": "\u0DC0\u0DCF\u0DAB\u09BF\u099C\u0DCA\u200D\u0DBA \u0D86\u0DBB\u0DB8\u0DCA\u0DB7 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "\u0DC3\u0DD2\u0DAF\u0DD4\u0D9A\u0DD9\u0DBB\u0DD2\u0DAB\u0DD2",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}} \u0D94\u0DB6\u0DDA {{2}} \u0D9C\u0DD2\u0DAB\u0DD4\u0DB8\u0DA7 \u0DB8\u0DCF\u0DBB\u0DD4\u0DC0\u0DD2\u0DBA.",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}} \u0D94\u0DB6\u0DDA {{2}} Wallet \u0D91\u0D9A\u0DA7 \u0DB8\u0DCF\u0DBB\u0DD4\u0DC0\u0DD3\u0DBA.",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}} \u0D94\u0DB6\u0DDA Wallet \u0D91\u0D9A\u0DA7 \u0DB8\u0DCF\u0DBB\u0DD4\u0DC0\u0DD3\u0DBA.",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "\u0DB8\u0DCF\u0DBB\u0DD4 \u0D9A\u0DD2\u0DBB\u0DD3\u0DB8 \u0DC3\u0DCF\u0DBB\u0DCA\u0DAE\u0D9A\u0DBA\u0DD2"
    },
    At = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "Pengine Baadaye",
        "H+EhVKseJEOGHRod11gUog#Value": "Anza biashara",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "Imekamilika",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}} yamehamishwa kwenye akaunti yako ya {{2}}.",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}} yamehamishwa kwenye Wallet yako ya {{2}}.",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}} yamehamishwa kwa Wallet yako.",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "Uhamisho umefanikiwa"
    },
    gt = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "\u0BAA\u0BBF\u0BA9\u0BCD\u0BA9\u0BB0\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BAF\u0BC1\u0BAE\u0BCD",
        "H+EhVKseJEOGHRod11gUog#Value": "\u0BB5\u0BA3\u0BBF\u0B95\u0BA4\u0BCD\u0BA4\u0BC8 \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "\u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}} \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD {{2}} \u0B95\u0BA3\u0B95\u0BCD\u0B95\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1.",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}} \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD {{2}} Wallet\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1.",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}} \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD Wallet\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA9.",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "\u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BAE\u0BCD \u0BB5\u0BC6\u0BB1\u0BCD\u0BB1\u0BBF \u0BAA\u0BC6\u0BB1\u0BCD\u0BB1\u0BA4\u0BC1"
    },
    Et = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "\u0E2D\u0E32\u0E08\u0E08\u0E30\u0E20\u0E32\u0E22\u0E2B\u0E25\u0E31\u0E07",
        "H+EhVKseJEOGHRod11gUog#Value": "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E17\u0E23\u0E14",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E34\u0E49\u0E19",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}} \u0E16\u0E39\u0E01\u0E42\u0E2D\u0E19\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E1A\u0E31\u0E0D\u0E0A\u0E35 {{2}} \u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E41\u0E25\u0E49\u0E27",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}} \u0E16\u0E39\u0E01\u0E42\u0E2D\u0E19\u0E44\u0E1B\u0E22\u0E31\u0E07 Wallet \u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 {{2}} \u0E41\u0E25\u0E49\u0E27",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}} \u0E16\u0E39\u0E01\u0E42\u0E2D\u0E19\u0E44\u0E1B\u0E22\u0E31\u0E07 Wallet \u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E41\u0E25\u0E49\u0E27",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "\u0E01\u0E32\u0E23\u0E42\u0E2D\u0E19\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08"
    },
    St = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "Belki daha sonra",
        "H+EhVKseJEOGHRod11gUog#Value": "Al\u0131m sat\u0131ma ba\u015Fla",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "Tamamland\u0131",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}} {{2}} hesab\u0131n\u0131za transfer edildi.",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}} {{2}} Wallet'\u0131n\u0131za transfer edildi.",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}} c\xFCzdan\u0131n\u0131za transfer edildi.",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "Transfer ba\u015Far\u0131yla tamamland\u0131"
    },
    pt = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "Ehtimol keyinroq",
        "H+EhVKseJEOGHRod11gUog#Value": "Savdo qilishni boshlang",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "Bajarildi",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}} {{2}} hisobiingizga o'tkazildi.",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}} {{2}} Walletingizga o'tkazildi.",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}} Walletingizga o'tkazildi.",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "O\u2018tkazma muvaffaqiyatli amalga oshirildi"
    },
    Ct = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "Ehtimol keyinroq",
        "H+EhVKseJEOGHRod11gUog#Value": "Savdo qilishni boshlang",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "Bajarildi",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}} {{2}} hisobiingizga o'tkazildi.",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}} {{2}} Walletingizga o'tkazildi.",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}} Walletingizga o'tkazildi.",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "O\u2018tkazma muvaffaqiyatli amalga oshirildi"
    },
    It = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "C\xF3 th\u1EC3 sau n\xE0y",
        "H+EhVKseJEOGHRod11gUog#Value": "B\u1EAFt \u0111\u1EA7u giao d\u1ECBch",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "Ho\xE0n t\u1EA5t",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}} \u0111\xE3 chuy\u1EC3n v\xE0o t\xE0i kho\u1EA3n {{2}} c\u1EE7a b\u1EA1n.",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}} \u0111\xE3 chuy\u1EC3n v\xE0o Wallet c\u1EE7a b\u1EA1n {{2}}.",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}} \u0111\xE3 chuy\u1EC3n v\xE0o Wallet c\u1EE7a b\u1EA1n.",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "Chuy\u1EC3n kho\u1EA3n th\xE0nh c\xF4ng"
    },
    Dt = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "\u4E5F\u8BB8\u4EE5\u540E",
        "H+EhVKseJEOGHRod11gUog#Value": "\u5F00\u59CB\u4EA4\u6613",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "\u5B8C\u6210",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}} \u5DF2\u8F6C\u5165\u60A8\u7684 {{2}} \u8D26\u6237\u3002",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}} \u5DF2\u8F6C\u5165\u60A8\u7684 {{2}} Wallet\u3002",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}} \u5DF2\u8F6C\u5165\u60A8\u7684Wallet\u3002",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "\u8F6C\u8D26\u6210\u529F"
    },
    Tt = {
        "5868Lo8CfEWSSgjPMK9c4g#Value": "\u6216\u8A31\u7A0D\u5F8C",
        "H+EhVKseJEOGHRod11gUog#Value": "\u958B\u59CB\u4EA4\u6613",
        "xhC+Nm_CcECwf4IqQh9N1Q#Value": "\u5B8C\u6210",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1": "{{0}} {{1}} \u5DF2\u8F49\u5165\u60A8\u7684 {{2}}\u5E33\u6236\u3002",
        "qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1": "{{0}} {{1}} \u5DF2\u8F49\u5165\u60A8\u7684 {{2}} Wallet\u3002",
        "5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1": "{{0}} {{1}} \u5DF2\u8F49\u5165\u60A8\u7684Wallet\u3002",
        "KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1": "\u8F49\u5E33\u6210\u529F"
    },
    We = {
        "ar-001": {
            translations: it,
            isRTL: !0
        },
        "bn-BD": {
            translations: st,
            isRTL: !1
        },
        "de-DE": {
            translations: ct,
            isRTL: !1
        },
        "es-ES": {
            translations: ut,
            isRTL: !1
        },
        "fr-FR": {
            translations: lt,
            isRTL: !1
        },
        "it-IT": {
            translations: dt,
            isRTL: !1
        },
        "km-KH": {
            translations: ft,
            isRTL: !1
        },
        "ko-KR": {
            translations: yt,
            isRTL: !1
        },
        "mn-MN": {
            translations: ht,
            isRTL: !1
        },
        "pl-PL": {
            translations: mt,
            isRTL: !1
        },
        "pt-PT": {
            translations: vt,
            isRTL: !1
        },
        "ru-RU": {
            translations: _t,
            isRTL: !1
        },
        "si-LK": {
            translations: bt,
            isRTL: !1
        },
        "sw-KE": {
            translations: At,
            isRTL: !1
        },
        "ta-IN": {
            translations: gt,
            isRTL: !1
        },
        "th-TH": {
            translations: Et,
            isRTL: !1
        },
        "tr-TR": {
            translations: St,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: pt,
            isRTL: !1
        },
        "uz-UZ": {
            translations: Ct,
            isRTL: !1
        },
        "vi-VN": {
            translations: It,
            isRTL: !1
        },
        "zh-CN": {
            translations: Dt,
            isRTL: !1
        },
        "zh-TW": {
            translations: Tt,
            isRTL: !1
        }
    };
var y = _; {
    let i = class i extends y.Controller.BaseViewController {
        constructor(t, a, e) {
            super(t, a, e, We);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _maybeLaterOnClick$Action() {
            return this.hasOwnProperty("__maybeLaterOnClick$Action") || (this.__maybeLaterOnClick$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    s = this.idService;
                return y.Logger.startActiveSpan("MaybeLaterOnClick", function(n) {
                    n && (n.setAttribute("code.function", "MaybeLaterOnClick"), n.setAttribute("outsystems.function.key", "028c5fa5-117b-4744-9fa8-ab5cef578ad4"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return e.ensureControllerAlive("MaybeLaterOnClick"), t = e.callContext(t), a.variables.toAccountIn.typeAttr === "wallet" || a.variables.toAccountIn.typeAttr === "p2p" ? y.Navigation.navigateTo(y.Navigation.generateScreenURL("dashboard", "portfolio", {}), y.Transitions.createTransition(y.Transitions.TransitionAnimation.Default), t, !0) : a.variables.toAccountIn.typeAttr === "options" ? y.Navigation.navigateTo(y.Navigation.generateScreenURL("dashboard", "options", {}), y.Transitions.createTransition(y.Transitions.TransitionAnimation.Default), t, !0) : y.Navigation.navigateTo(y.Navigation.generateScreenURL("dashboard", "cfds/account", {
                            account_id: y.DataConversion.ServerDataConverter.to(a.variables.toAccountIn.accountIdAttr, y.DataTypes.DataTypes.Text)
                        }), y.Transitions.createTransition(y.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__maybeLaterOnClick$Action
        }
        set _maybeLaterOnClick$Action(t) {
            this.__maybeLaterOnClick$Action = t
        }
        get _tradingOnClick$Action() {
            return this.hasOwnProperty("__tradingOnClick$Action") || (this.__tradingOnClick$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    s = this.idService;
                return y.Logger.startActiveSpan("TradingOnClick", function(n) {
                    n && (n.setAttribute("code.function", "TradingOnClick"), n.setAttribute("outsystems.function.key", "519b0d40-79c2-49bd-b988-759ad3fb1ddf"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return e.ensureControllerAlive("TradingOnClick"), t = e.callContext(t), a.variables.fromAccountIn.typeAttr === "options" || a.variables.toAccountIn.typeAttr === "options" ? y.Navigation.navigateTo(y.Navigation.generateScreenURL("dashboard", "options", {}), y.Transitions.createTransition(y.Transitions.TransitionAnimation.Default), t, !0) : y.Navigation.navigateTo(y.Navigation.generateScreenURL("dashboard", "cfds/account", {
                            open_trade: y.DataConversion.ServerDataConverter.to(!0, y.DataTypes.DataTypes.Boolean),
                            account_id: y.DataConversion.ServerDataConverter.to(a.variables.fromAccountIn.typeAttr === "wallet" ? a.variables.toAccountIn.accountIdAttr : a.variables.fromAccountIn.accountIdAttr, y.DataTypes.DataTypes.Text)
                        }), y.Transitions.createTransition(y.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__tradingOnClick$Action
        }
        set _tradingOnClick$Action(t) {
            this.__tradingOnClick$Action = t
        }
        maybeLaterOnClick$Action(t) {
            var a = this.controller;
            return y.Logger.startActiveSpan("MaybeLaterOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "MaybeLaterOnClick"), e.setAttribute("outsystems.function.key", "028c5fa5-117b-4744-9fa8-ab5cef578ad4"), e.setAttribute("outsystems.function.owner.name", "dashboard"), e.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._maybeLaterOnClick$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        tradingOnClick$Action(t) {
            var a = this.controller;
            return y.Logger.startActiveSpan("TradingOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "TradingOnClick"), e.setAttribute("outsystems.function.key", "519b0d40-79c2-49bd-b988-759ad3fb1ddf"), e.setAttribute("outsystems.function.owner.name", "dashboard"), e.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._tradingOnClick$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(t) {
            this._onSyncStartEventHandler = t
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(t) {
            this._onSyncCompleteEventHandler = t
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(t) {
            this._onSyncErrorEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return I.defaultTimeout
        }
    };
    u(i, "ControllerInner");
    let c = i;
    je = c
}
var je, qe = new y.Controller.ControllerFactory(je, J);
var ge = D.PlaceholderContent,
    za = D.IteratorPlaceholderContent,
    kt = u(function() {
        var c = R(function(i) {
            var l = i.model,
                t = i.controller,
                a = i.controller.idService,
                e = t.validationService,
                s = t.callContext(),
                n = O,
                o = V,
                d = {
                    props: i,
                    validateWidget: u(function(v) {
                        i.validateWidget(i, v)
                    }, "validateWidget")
                },
                f = l,
                A = w,
                E = N,
                p = x();
            return b.createElement("div", i.rootNodeProperties, b.createElement(C, {
                align: 0,
                animate: !1,
                style: "transfer-success-popup desktop-max-width",
                visible: !0,
                _idProps: {
                    service: a,
                    uuid: "0"
                },
                _widgetRecordProvider: f
            }, b.createElement(C, {
                align: 0,
                animate: !1,
                style: "transfer-success-popup__header",
                visible: !0,
                _idProps: {
                    service: a,
                    name: "Header"
                },
                _widgetRecordProvider: f
            }, b.createElement($, {
                getOwnerSpan: u(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: u(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Delay: 1e3,
                    Speed: k.speed.normal,
                    AnimationType: k.animationType.bottomToTop
                },
                events: {
                    _handleError: u(function(v) {
                        t.handleError(v)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: e
                },
                _idProps: {
                    service: a,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: f,
                placeholders: {
                    content: new ge(function() {
                        return [b.createElement(we, {
                            extendedProperties: {
                                style: "height: auto;"
                            },
                            gridProperties: {
                                width: "250px"
                            },
                            image: Re.VersionedURL.getVersionedUrl("img/dashboard.transfer_success.png"),
                            type: 0,
                            _idProps: {
                                service: a,
                                uuid: "3"
                            },
                            _widgetRecordProvider: f
                        })]
                    })
                },
                _dependencies: []
            })), b.createElement(C, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: a,
                    name: "Content"
                },
                _widgetRecordProvider: f
            }, b.createElement($, {
                getOwnerSpan: u(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: u(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Speed: k.speed.slow,
                    AnimationType: k.animationType.fadeIn,
                    Delay: 1500
                },
                events: {
                    _handleError: u(function(v) {
                        t.handleError(v)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: e
                },
                _idProps: {
                    service: a,
                    uuid: "5",
                    alias: "2"
                },
                _widgetRecordProvider: f,
                placeholders: {
                    content: new ge(function() {
                        return [b.createElement(C, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            style: "display-flex flex-direction-column align-items-center gap-s",
                            visible: !0,
                            _idProps: {
                                service: a,
                                uuid: "6"
                            },
                            _widgetRecordProvider: f
                        }, b.createElement(Z, {
                            extendedProperties: {
                                style: "color: #fff; font-size: 24px; font-weight: 800;"
                            },
                            value: F.resolve(L.TranslationsService).getMessage("KLsdDac3Rkmpwl8IAA0x0g#ValueExpression.-712932913.1", "Transfer successful"),
                            _idProps: {
                                service: a,
                                uuid: "7"
                            },
                            _widgetRecordProvider: f
                        }), A(l.variables.fromAccountIn.typeAttr === "wallet" && l.variables.toAccountIn.typeAttr === "wallet", !1, this, function() {
                            return [b.createElement(Z, {
                                extendedProperties: {
                                    style: "color: #fff;"
                                },
                                style: "full-width text-align-center",
                                value: l.getCachedValue(a.getId("yrJk5Fs95UGCLMD_gluneA.Value"), function() {
                                    return I.localize$Action(F.resolve(L.TranslationsService).getMessage("5Jkrs0xnAUuRULgIEvoy+A#ValueExpression.718174036.1", "{{0}} {{1}} transferred to your Wallet."), T.formatDecimal(T.textToDecimal(l.variables.amountReceivedIn), l.variables.fromAccountIn.fractionalDigitsAttr, ".", ","), l.variables.fromAccountIn.currencyAttr, "", "", "", s).translatedStringOut
                                }, function() {
                                    return l.variables.amountReceivedIn
                                }, function() {
                                    return l.variables.fromAccountIn.fractionalDigitsAttr
                                }, function() {
                                    return l.variables.fromAccountIn.currencyAttr
                                }),
                                _idProps: {
                                    service: a,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: f,
                                value_dataFetchStatus: H.calculateDataFetchStatus(l.variables._amountReceivedInDataFetchStatus, l.variables._fromAccountInDataFetchStatus)
                            })]
                        }, function() {
                            return [b.createElement(Z, {
                                extendedProperties: {
                                    style: "color: #fff;"
                                },
                                style: "full-width text-align-center",
                                value: l.getCachedValue(a.getId("3YvJTc3gfk+9z9qUTCv++Q.Value"), function() {
                                    return l.variables.toAccountIn.typeAttr === "wallet" || l.variables.toAccountIn.typeAttr === "p2p" ? I.localize$Action(F.resolve(L.TranslationsService).getMessage("qs3NZud7NEyZMGsSlojlTg#ValueExpression.2113809894.1", "{{0}} {{1}} transferred to your {{2}} Wallet."), T.formatDecimal(T.textToDecimal(l.variables.transferAmountIn), l.variables.fromAccountIn.fractionalDigitsAttr, ".", ","), l.variables.fromAccountIn.currencyAttr, l.variables.toAccountIn.currencyAttr, "", "", s).translatedStringOut : I.localize$Action(F.resolve(L.TranslationsService).getMessage("qs3NZud7NEyZMGsSlojlTg#ValueExpression.-1422547184.1", "{{0}} {{1}} transferred to your {{2}} account."), T.formatDecimal(T.textToDecimal(l.variables.transferAmountIn), l.variables.fromAccountIn.fractionalDigitsAttr, ".", ","), l.variables.fromAccountIn.currencyAttr, l.variables.toAccountIn.currencyNameAttr, "", "", s).translatedStringOut
                                }, function() {
                                    return l.variables.toAccountIn.typeAttr
                                }, function() {
                                    return l.variables.transferAmountIn
                                }, function() {
                                    return l.variables.fromAccountIn.fractionalDigitsAttr
                                }, function() {
                                    return l.variables.fromAccountIn.currencyAttr
                                }, function() {
                                    return l.variables.toAccountIn.currencyAttr
                                }, function() {
                                    return l.variables.toAccountIn.currencyNameAttr
                                }),
                                _idProps: {
                                    service: a,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: f,
                                value_dataFetchStatus: H.calculateDataFetchStatus(l.variables._toAccountInDataFetchStatus, l.variables._transferAmountInDataFetchStatus, l.variables._fromAccountInDataFetchStatus)
                            })]
                        }))]
                    })
                },
                _dependencies: [n(l.variables.transferAmountIn), n(l.variables.amountReceivedIn), n(l.variables._transferAmountInDataFetchStatus), n(l.variables._amountReceivedInDataFetchStatus), n(l.variables._toAccountInDataFetchStatus), n(l.variables._fromAccountInDataFetchStatus), n(l.variables.toAccountIn.currencyNameAttr), n(l.variables.toAccountIn.currencyAttr), n(l.variables.toAccountIn.typeAttr), n(l.variables.fromAccountIn.currencyAttr), n(l.variables.fromAccountIn.fractionalDigitsAttr), n(l.variables.fromAccountIn.typeAttr)]
            })), b.createElement(C, {
                align: 0,
                animate: !1,
                style: l.getCachedValue(a.getId("Footer.Style"), function() {
                    return "transfer-success-popup__footer" + (l.variables.fromAccountIn.typeAttr === "wallet" && l.variables.toAccountIn.typeAttr === "wallet" || l.variables.fromAccountIn.typeAttr !== "wallet" && l.variables.toAccountIn.typeAttr === "wallet" ? " wallet-to-wallet-transfer" : "")
                }, function() {
                    return l.variables.fromAccountIn.typeAttr
                }, function() {
                    return l.variables.toAccountIn.typeAttr
                }),
                visible: !0,
                _idProps: {
                    service: a,
                    name: "Footer"
                },
                _widgetRecordProvider: f,
                style_dataFetchStatus: H.calculateDataFetchStatus(l.variables._fromAccountInDataFetchStatus, l.variables._toAccountInDataFetchStatus)
            }, b.createElement($, {
                getOwnerSpan: u(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: u(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Speed: k.speed.slow,
                    AnimationType: k.animationType.fadeIn,
                    Delay: 2e3
                },
                events: {
                    _handleError: u(function(v) {
                        t.handleError(v)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: e
                },
                _idProps: {
                    service: a,
                    uuid: "11",
                    alias: "3"
                },
                _widgetRecordProvider: f,
                placeholders: {
                    content: new ge(function() {
                        return [A(l.variables.toAccountIn.typeAttr === "wallet" || l.variables.toAccountIn.typeAttr === "p2p", !1, this, function() {
                            return [b.createElement(C, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "text-align: center;"
                                },
                                style: l.getCachedValue(a.getId("wr31pubpx0W2J9N+su0+Fg.Style"), function() {
                                    return "display-flex gap-s full-width" + (ee.isDesktop$Action(s).isDesktopOut ? " flex-direction-row-reverse" : " flex-direction-column")
                                }),
                                visible: !0,
                                _idProps: {
                                    service: a,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: f
                            }, b.createElement(W, {
                                enabled: !0,
                                gridProperties: {
                                    marginLeft: "0px"
                                },
                                isDefault: !1,
                                onClick: u(function() {
                                    var v = typeof s != "undefined" && s !== null ? s.clone() : t.callContext().clone();
                                    t.maybeLaterOnClick$Action(t.callContext(v))
                                }, "onClick"),
                                style: "btn btn-rounded btn-primary full-width",
                                visible: !0,
                                _idProps: {
                                    service: a,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: f
                            }, E(o("xhC+Nm_CcECwf4IqQh9N1Q#Value", "Done"))))]
                        }, function() {
                            return [b.createElement(C, {
                                align: 0,
                                animate: !1,
                                style: l.getCachedValue(a.getId("cSSOaKgEeUCJijB_IEn7xg.Style"), function() {
                                    return "display-flex gap-s full-width" + (ee.isDesktop$Action(s).isDesktopOut ? " flex-direction-row-reverse" : " flex-direction-column")
                                }),
                                visible: !0,
                                _idProps: {
                                    service: a,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: f
                            }, b.createElement(W, {
                                enabled: !0,
                                isDefault: !1,
                                onClick: u(function() {
                                    var v = typeof s != "undefined" && s !== null ? s.clone() : t.callContext().clone();
                                    t.tradingOnClick$Action(t.callContext(v))
                                }, "onClick"),
                                style: "btn btn-rounded btn-primary full-width",
                                visible: !0,
                                _idProps: {
                                    service: a,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: f
                            }, E(o("H+EhVKseJEOGHRod11gUog#Value", "Start trading"))), b.createElement(W, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                                },
                                gridProperties: {
                                    marginLeft: "0px"
                                },
                                isDefault: !1,
                                onClick: u(function() {
                                    var v = typeof s != "undefined" && s !== null ? s.clone() : t.callContext().clone();
                                    t.maybeLaterOnClick$Action(t.callContext(v))
                                }, "onClick"),
                                style: "btn btn-rounded btn-white full-width",
                                visible: !0,
                                _idProps: {
                                    service: a,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: f
                            }, E(o("5868Lo8CfEWSSgjPMK9c4g#Value", "Maybe Later"))))]
                        })]
                    })
                },
                _dependencies: [n(l.variables._toAccountInDataFetchStatus), n(l.variables.toAccountIn.typeAttr)]
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: u(function() {
                return {
                    codeFunction: "TransferSuccess",
                    functionKey: "6a1d22fd-8af3-43ad-8f78-00263f9585fc",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Portfolio.TransferSuccess",
            modelFactory: Je,
            controllerFactory: qe
        });
        return c.getCssDependencies = function() {
            return ["css/dashboard.Portfolio.TransferSuccess.css", "css/OutSystemsReactWidgets.css"]
        }, c.getJsDependencies = function() {
            return []
        }, c.getBlocks = function() {
            return [$]
        }, c
    }, "componentFactory"),
    Ka = kt();
var Qe = X(te());
var S = _,
    Se = class Se extends S.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Seconds", "secondsVar", "Seconds", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 30
            }, !1), this.attr("ExchangeRate", "exchangeRateVar", "ExchangeRate", !0, !1, S.DataTypes.DataTypes.Decimal, function() {
                return S.DataTypes.Decimal.defaultValue
            }, !1), this.attr("RateToken", "rateTokenVar", "RateToken", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("CurrentSource", "currentSourceVar", "CurrentSource", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("CurrentDestination", "currentDestinationVar", "CurrentDestination", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ExchangeRateRequest", "exchangeRateRequestIn", "ExchangeRateRequest", !0, !1, S.DataTypes.DataTypes.Record, function() {
                return S.DataTypes.ImmutableBase.getData(new Y)
            }, !1, Y), this.attr("_exchangeRateRequestInDataFetchStatus", "_exchangeRateRequestInDataFetchStatus", "_exchangeRateRequestInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(S.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
u(Se, "VariablesRecord");
var K = Se;
K.init();
var pe = class pe extends S.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
u(pe, "WidgetsRecord");
var Ee = pe,
    Ce = class Ce extends S.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return K
        }
        static getWidgetsRecordConstructor() {
            return Ee
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(i) {
            "ExchangeRateRequest" in i && (this.variables.exchangeRateRequestIn = i.ExchangeRateRequest, "_exchangeRateRequestInDataFetchStatus" in i && (this.variables._exchangeRateRequestInDataFetchStatus = i._exchangeRateRequestInDataFetchStatus))
        }
    };
u(Ce, "Model");
var Q = Ce;
Q._hasValidationWidgetsValue = void 0;
var Be = new S.Model.ModelFactory(Q);
var Ge = {};

function Ie(c, i, l) {
    window.clearInterval(window.__EXCHANGE_RATE_INTERNAL), window.clearInterval(window.__UPDATE_SECONDS_INTERVAL), window.__EXCHANGE_RATE_INTERNAL = null, window.__UPDATE_SECONDS_INTERVAL = null
}
u(Ie, "default");

function De(c, i, l) {
    window.clearInterval(window.__EXCHANGE_RATE_INTERNAL), window.clearInterval(window.__UPDATE_SECONDS_INTERVAL), window.__EXCHANGE_RATE_INTERNAL = null, window.__UPDATE_SECONDS_INTERVAL = null
}
u(De, "default");

function Te(c, i, l, t) {
    c.ExchangeRate == 0 && i.FetchExchangeRate(), window.__EXCHANGE_RATE_INTERNAL = setInterval(() => {
        i.FetchExchangeRate()
    }, 30 * 1e3), window.__UPDATE_SECONDS_INTERVAL = setInterval(() => {
        i.UpdateSeconds()
    }, 1e3)
}
u(Te, "default");

function ke(c, i, l) {
    c.FetchExchangeRate(), window.__EXCHANGE_RATE_INTERNAL = setInterval(() => {
        c.FetchExchangeRate()
    }, 30 * 1e3), window.__UPDATE_SECONDS_INTERVAL = setInterval(() => {
        c.UpdateSeconds()
    }, 1e3)
}
u(ke, "default");

function xe(c, i, l) {
    window.clearInterval(window.__EXCHANGE_RATE_INTERNAL), window.clearInterval(window.__UPDATE_SECONDS_INTERVAL), window.__EXCHANGE_RATE_INTERNAL = null, window.__UPDATE_SECONDS_INTERVAL = null
}
u(xe, "default");
var h = _; {
    let i = class i extends h.Controller.BaseViewController {
        constructor(t, a, e) {
            super(t, a, e, Ge);
            var s = this.controller;
            this.clientActionProxies = {
                fetchExchangeRate$Action: u(function() {
                    return s.executeActionInsideJSNode(s._fetchExchangeRate$Action.bind(s), s.callContext(), function(n) {
                        return {}
                    }, function() {}, "FetchExchangeRate")
                }, "fetchExchangeRate$Action"),
                updateSeconds$Action: u(function() {
                    return s.executeActionInsideJSNode(s._updateSeconds$Action.bind(s), s.callContext(), function(n) {
                        return {}
                    }, function() {}, "UpdateSeconds")
                }, "updateSeconds$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    s = this.idService;
                return h.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "3d3f6f22-675d-44fa-8fdb-84d50e9a13c1"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDestroy"), t = e.callContext(t), h.Logger.startActiveSpan("JSDisposeTimerExchangeRate", function(o) {
                            o && (o.setAttribute("code.function", "JSDisposeTimerExchangeRate"), o.setAttribute("outsystems.function.key", "82514ca4-3f65-4cbb-bb70-9e04636c11c2"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(Ie, "JSDisposeTimerExchangeRate", "OnDestroy", null, function(d) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(t) {
            this.__onDestroy$Action = t
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    s = this.idService;
                return h.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "5faace96-7404-4ed0-9ea4-fd4f73c93e1e"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnParametersChanged"), t = e.callContext(t), h.Logger.startActiveSpan("JSDisposeTimerExchangeRate", function(o) {
                            o && (o.setAttribute("code.function", "JSDisposeTimerExchangeRate"), o.setAttribute("outsystems.function.key", "ee0a7ef1-7802-43e4-b047-46b7d3b60fc4"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(xe, "JSDisposeTimerExchangeRate", "OnParametersChanged", null, function(d) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1), a.variables.secondsVar = 30, h.Logger.startActiveSpan("ExchangeRateInterval", function(o) {
                            o && (o.setAttribute("code.function", "ExchangeRateInterval"), o.setAttribute("outsystems.function.key", "85cf8d13-2186-40fe-8698-8eba4633c049"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(Te, "ExchangeRateInterval", "OnParametersChanged", {
                                    ExchangeRate: h.DataConversion.JSNodeParamConverter.to(h.BuiltinFunctions.decimalToInteger(h.BuiltinFunctions.trunc(a.variables.exchangeRateVar)), h.DataTypes.DataTypes.Integer)
                                }, function(d) {}, {
                                    FetchExchangeRate: e.clientActionProxies.fetchExchangeRate$Action,
                                    UpdateSeconds: e.clientActionProxies.updateSeconds$Action
                                }, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1), (a.variables.exchangeRateRequestIn.sourceCurrencyAttr !== a.variables.currentSourceVar || a.variables.exchangeRateRequestIn.destinationCurrencyAttr !== a.variables.currentDestinationVar) && (h.Logger.startActiveSpan("JSDisposeTimerExchangeRate2", function(o) {
                            o && (o.setAttribute("code.function", "JSDisposeTimerExchangeRate2"), o.setAttribute("outsystems.function.key", "36aa7cf9-4569-4732-a66f-34ff606bac93"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(De, "JSDisposeTimerExchangeRate2", "OnParametersChanged", null, function(d) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1), a.variables.secondsVar = 30, a.variables.currentSourceVar = a.variables.exchangeRateRequestIn.sourceCurrencyAttr, a.variables.currentDestinationVar = a.variables.exchangeRateRequestIn.destinationCurrencyAttr, h.Logger.startActiveSpan("ExchangeRateInterval2", function(o) {
                            o && (o.setAttribute("code.function", "ExchangeRateInterval2"), o.setAttribute("outsystems.function.key", "d4acdf97-7eb1-42cc-a31d-88f11c4b06b4"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(ke, "ExchangeRateInterval2", "OnParametersChanged", null, function(d) {}, {
                                    FetchExchangeRate: e.clientActionProxies.fetchExchangeRate$Action,
                                    UpdateSeconds: e.clientActionProxies.updateSeconds$Action
                                }, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1))
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        get _fetchExchangeRate$Action() {
            return this.hasOwnProperty("__fetchExchangeRate$Action") || (this.__fetchExchangeRate$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    s = this.idService;
                return h.Logger.startActiveSpan("FetchExchangeRate", function(n) {
                    return n && (n.setAttribute("code.function", "FetchExchangeRate"), n.setAttribute("outsystems.function.key", "790797ff-c083-4c39-804a-2a4d5b84a276"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), h.Flow.tryFinally(function() {
                        e.ensureControllerAlive("FetchExchangeRate"), t = e.callContext(t);
                        var o = new h.DataTypes.VariableHolder;
                        return h.Flow.executeAsyncFlow(function() {
                            return h.Flow.executeSequence(function() {
                                if (!(a.variables.exchangeRateRequestIn.sourceCurrencyAttr === h.BuiltinFunctions.nullTextIdentifier() || a.variables.exchangeRateRequestIn.destinationCurrencyAttr === h.BuiltinFunctions.nullTextIdentifier())) return a.flush(), I.gET_ExchangeRate$Action(a.variables.exchangeRateRequestIn.sourceCurrencyAttr, a.variables.exchangeRateRequestIn.destinationCurrencyAttr, t).then(function(d) {
                                    o.value = d
                                }).then(function() {
                                    return a.variables.exchangeRateVar = h.BuiltinFunctions.textToDecimal(o.value.responseOut.dataAttr.exchange_rateAttr), a.variables.rateTokenVar = o.value.responseOut.dataAttr.rate_tokenAttr, e.exchangeRateEvent$Action(a.variables.exchangeRateVar, a.variables.secondsVar, a.variables.rateTokenVar, t)
                                })
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__fetchExchangeRate$Action
        }
        set _fetchExchangeRate$Action(t) {
            this.__fetchExchangeRate$Action = t
        }
        get _updateSeconds$Action() {
            return this.hasOwnProperty("__updateSeconds$Action") || (this.__updateSeconds$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    s = this.idService;
                return h.Logger.startActiveSpan("UpdateSeconds", function(n) {
                    return n && (n.setAttribute("code.function", "UpdateSeconds"), n.setAttribute("outsystems.function.key", "e04d664f-3f9b-43cb-8e6a-7c8963ab7acb"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), h.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("UpdateSeconds"), t = e.callContext(t), h.Flow.executeAsyncFlow(function() {
                            return a.variables.secondsVar = a.variables.secondsVar === 0 ? 30 : a.variables.secondsVar - 1, e.exchangeRateEvent$Action(a.variables.exchangeRateVar, a.variables.secondsVar, a.variables.rateTokenVar, t)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__updateSeconds$Action
        }
        set _updateSeconds$Action(t) {
            this.__updateSeconds$Action = t
        }
        onDestroy$Action(t) {
            var a = this.controller;
            return h.Logger.startActiveSpan("OnDestroy__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnDestroy"), e.setAttribute("outsystems.function.key", "3d3f6f22-675d-44fa-8fdb-84d50e9a13c1"), e.setAttribute("outsystems.function.owner.name", "dashboard"), e.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onDestroy$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onParametersChanged$Action(t) {
            var a = this.controller;
            return h.Logger.startActiveSpan("OnParametersChanged__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnParametersChanged"), e.setAttribute("outsystems.function.key", "5faace96-7404-4ed0-9ea4-fd4f73c93e1e"), e.setAttribute("outsystems.function.owner.name", "dashboard"), e.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onParametersChanged$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        fetchExchangeRate$Action(t) {
            var a = this.controller;
            return h.Logger.startActiveSpan("FetchExchangeRate__proxy", function(e) {
                return e && (e.setAttribute("code.function", "FetchExchangeRate"), e.setAttribute("outsystems.function.key", "790797ff-c083-4c39-804a-2a4d5b84a276"), e.setAttribute("outsystems.function.owner.name", "dashboard"), e.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), h.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._fetchExchangeRate$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        updateSeconds$Action(t) {
            var a = this.controller;
            return h.Logger.startActiveSpan("UpdateSeconds__proxy", function(e) {
                return e && (e.setAttribute("code.function", "UpdateSeconds"), e.setAttribute("outsystems.function.key", "e04d664f-3f9b-43cb-8e6a-7c8963ab7acb"), e.setAttribute("outsystems.function.owner.name", "dashboard"), e.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), h.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._updateSeconds$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        get exchangeRateEvent$Action() {
            return this.hasOwnProperty("_exchangeRateEvent$Action") || (this._exchangeRateEvent$Action = function() {
                return Promise.resolve()
            }), this._exchangeRateEvent$Action
        }
        set exchangeRateEvent$Action(t) {
            this._exchangeRateEvent$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var a = this.controller,
                    e = this.model,
                    s = this.idService;
                return a.onParametersChanged$Action(t)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(t) {
                var a = this.controller,
                    e = this.model,
                    s = this.idService;
                return a.onDestroy$Action(t)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(t) {
                var a = this.controller,
                    e = this.model,
                    s = this.idService;
                return a.onParametersChanged$Action(t)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(t) {
            this._onSyncStartEventHandler = t
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(t) {
            this._onSyncCompleteEventHandler = t
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(t) {
            this._onSyncErrorEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return I.defaultTimeout
        }
    };
    u(i, "ControllerInner");
    let c = i;
    ze = c
}
var ze, Ke = new h.Controller.ControllerFactory(ze, J);
var Pn = D.PlaceholderContent,
    Mn = D.IteratorPlaceholderContent,
    xt = u(function() {
        var c = R(function(i) {
            var l = i.model,
                t = i.controller,
                a = i.controller.idService,
                e = t.validationService,
                s = t.callContext(),
                n = O,
                o = V,
                d = {
                    props: i,
                    validateWidget: u(function(v) {
                        i.validateWidget(i, v)
                    }, "validateWidget")
                },
                f = l,
                A = w,
                E = N,
                p = x();
            return Qe.createElement("div", i.rootNodeProperties)
        }, {
            topLevelComponent: !1,
            getAttributes: u(function() {
                return {
                    codeFunction: "ExchangeRate",
                    functionKey: "d222ebf3-e164-4485-82a7-f975869e4468",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Portfolio.ExchangeRate",
            modelFactory: Be,
            controllerFactory: Ke
        });
        return c.getCssDependencies = function() {
            return []
        }, c.getJsDependencies = function() {
            return []
        }, c.getBlocks = function() {
            return []
        }, c
    }, "componentFactory"),
    Fn = xt();
export {
    Ca as a, Ka as b, Fn as c
};