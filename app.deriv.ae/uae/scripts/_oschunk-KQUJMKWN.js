import {
    a as R
} from "./_oschunk-N5BINZCQ.js";
import {
    a as M
} from "./_oschunk-4ZYYVQOE.js";
import {
    a as x
} from "./_oschunk-4SYOXZNK.js";
import {
    a as N
} from "./_oschunk-HFW3V2GI.js";
import {
    f as _,
    h as D,
    m as k,
    n as ye,
    o as be,
    p as ve,
    q as me,
    u as Se
} from "./_oschunk-VR5BNL2K.js";
import {
    a as Oe,
    g as F,
    m as ce,
    o as ue,
    q as le,
    r as de,
    s as fe,
    t as he
} from "./_oschunk-4VHUVDBV.js";
import {
    a as se
} from "./_oschunk-KXORGPRQ.js";
import {
    C as O,
    Fb as ie,
    Lb as P,
    Pb as ae,
    Qb as I,
    Sb as T,
    a as oe
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as m,
    K as re,
    W as E,
    c as u,
    e as pe,
    m as w,
    n as g,
    v as te,
    w as v,
    x as ne
} from "./_oschunk-M5BUVJ72.js";
var y = pe(Oe());
var h = E,
    J = class J extends h.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("FieldValue", "fieldValueVar", "FieldValue", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("showPhoneNumberSection", "showPhoneNumberSectionVar", "showPhoneNumberSection", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ShowCountrySection", "showCountrySectionVar", "ShowCountrySection", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("showLoader", "showLoaderVar", "showLoader", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("CurrentSelectedCountry", "currentSelectedCountryVar", "CurrentSelectedCountry", !0, !1, h.DataTypes.DataTypes.Record, function() {
                return h.DataTypes.ImmutableBase.getData(new O)
            }, !1, O), this.attr("FilteredCountryList", "filteredCountryListVar", "FilteredCountryList", !0, !1, h.DataTypes.DataTypes.RecordList, function() {
                return h.DataTypes.ImmutableBase.getData(new(h.GenericTypeCache.getGenericList(O)))
            }, !1, h.GenericTypeCache.getGenericList(O)), this.attr("IsDropdownOpen", "isDropdownOpenVar", "IsDropdownOpen", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("FieldUpdated", "fieldUpdatedVar", "FieldUpdated", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("SelectedCountry", "selectedCountryIn", "SelectedCountry", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_selectedCountryInDataFetchStatus", "_selectedCountryInDataFetchStatus", "_selectedCountryInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("CountryList", "countryListIn", "CountryList", !0, !1, h.DataTypes.DataTypes.RecordList, function() {
                return h.DataTypes.ImmutableBase.getData(new(h.GenericTypeCache.getGenericList(O)))
            }, !1, h.GenericTypeCache.getGenericList(O)), this.attr("_countryListInDataFetchStatus", "_countryListInDataFetchStatus", "_countryListInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ErrorMessage", "errorMessageIn", "ErrorMessage", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowOnlyPhoneNumber", "showOnlyPhoneNumberIn", "ShowOnlyPhoneNumber", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showOnlyPhoneNumberInDataFetchStatus", "_showOnlyPhoneNumberInDataFetchStatus", "_showOnlyPhoneNumberInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("LabelTitle", "labelTitleIn", "LabelTitle", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_labelTitleInDataFetchStatus", "_labelTitleInDataFetchStatus", "_labelTitleInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("showLiveChatMessage", "showLiveChatMessageIn", "showLiveChatMessage", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showLiveChatMessageInDataFetchStatus", "_showLiveChatMessageInDataFetchStatus", "_showLiveChatMessageInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("OldNumber", "oldNumberIn", "OldNumber", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_oldNumberInDataFetchStatus", "_oldNumberInDataFetchStatus", "_oldNumberInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsVerified", "isVerifiedIn", "IsVerified", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isVerifiedInDataFetchStatus", "_isVerifiedInDataFetchStatus", "_isVerifiedInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(h.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
u(J, "VariablesRecord");
var V = J;
V.init();
var H = class H extends h.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            EmailOrPhoneField: h.Model.ValidationWidgetRecord
        }
    }
};
u(H, "WidgetsRecord");
var B = H,
    W = class W extends h.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return V
        }
        static getWidgetsRecordConstructor() {
            return B
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(l) {
            "SelectedCountry" in l && (this.variables.selectedCountryIn = l.SelectedCountry, "_selectedCountryInDataFetchStatus" in l && (this.variables._selectedCountryInDataFetchStatus = l._selectedCountryInDataFetchStatus)), "CountryList" in l && (this.variables.countryListIn = l.CountryList, "_countryListInDataFetchStatus" in l && (this.variables._countryListInDataFetchStatus = l._countryListInDataFetchStatus)), "ErrorMessage" in l && (this.variables.errorMessageIn = l.ErrorMessage, "_errorMessageInDataFetchStatus" in l && (this.variables._errorMessageInDataFetchStatus = l._errorMessageInDataFetchStatus)), "ShowOnlyPhoneNumber" in l && (this.variables.showOnlyPhoneNumberIn = l.ShowOnlyPhoneNumber, "_showOnlyPhoneNumberInDataFetchStatus" in l && (this.variables._showOnlyPhoneNumberInDataFetchStatus = l._showOnlyPhoneNumberInDataFetchStatus)), "LabelTitle" in l && (this.variables.labelTitleIn = l.LabelTitle, "_labelTitleInDataFetchStatus" in l && (this.variables._labelTitleInDataFetchStatus = l._labelTitleInDataFetchStatus)), "showLiveChatMessage" in l && (this.variables.showLiveChatMessageIn = l.showLiveChatMessage, "_showLiveChatMessageInDataFetchStatus" in l && (this.variables._showLiveChatMessageInDataFetchStatus = l._showLiveChatMessageInDataFetchStatus)), "OldNumber" in l && (this.variables.oldNumberIn = l.OldNumber, "_oldNumberInDataFetchStatus" in l && (this.variables._oldNumberInDataFetchStatus = l._oldNumberInDataFetchStatus)), "IsVerified" in l && (this.variables.isVerifiedIn = l.IsVerified, "_isVerifiedInDataFetchStatus" in l && (this.variables._isVerifiedInDataFetchStatus = l._isVerifiedInDataFetchStatus))
        }
    };
u(W, "Model");
var L = W;
L._hasValidationWidgetsValue = void 0;
var _e = new h.Model.ModelFactory(L);
var De = {
        "JLhSYEY2TUmS_4O3wm5jZQ#ValueExpression.1914659542.1": "\u0644\u0644\u0645\u0633\u0627\u0639\u062F\u0629.",
        "8DOO6e9eBUS2uzKdHa5X3A#Value": "\u0627\u0644\u062F\u0631\u062F\u0634\u0629 \u0627\u0644\u062D\u064A\u0629",
        "3H+knApaOUq4vlJ7sFt9uQ#ValueExpression.209072888.1": "\u0644\u0645 \u0646\u062A\u0645\u0643\u0646 \u0645\u0646 \u0625\u0636\u0627\u0641\u0629 \u0647\u0630\u0627 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641. \u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0639\u0628\u0631",
        "uKftAclNN0auba1skM3eBw#ValueExpression.-1563739715.1": "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0623\u0648 \u0627\u0644\u0647\u0627\u062A\u0641 (\u0628\u062F\u0648\u0646 \u0631\u0645\u0632 \u0627\u0644\u0628\u0644\u062F)",
        "uKftAclNN0auba1skM3eBw#ValueExpression.-1980427613.1": "\u0623\u062F\u062E\u0644 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
        "axOv0wB_tUSzbrDGQkhILg#Value.974258437.1": "\u0644\u0627 \u062A\u0648\u062C\u062F \u062E\u064A\u0627\u0631\u0627\u062A \u0644\u0644\u0639\u0631\u0636.",
        "kRKQxwuSy0ilI6MMK8aq1w#Value.-1822469688.1": "\u0627\u0644\u0628\u062D\u062B",
        "tpdLouMxB0uVUdWG9S+7IQ#Value.974258437.1": "\u0644\u0627 \u062A\u0648\u062C\u062F \u062E\u064A\u0627\u0631\u0627\u062A \u0644\u0644\u0639\u0631\u0636.",
        "eZM19XDrN0OaQrU54_vW7A#ValueExpression.-24381260.1": "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0623\u0648 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641"
    },
    Ce = {
        "ar-001": {
            translations: De,
            isRTL: !0
        }
    };

function U(b, l, i) {
    var e;
    if (event && (["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab", "Enter", "Home", "End"].includes(event.key) || event.ctrlKey || event.metaKey)) return;
    /^\d$/.test(event && event.key) || event.preventDefault();
    let n = event.target;
    n && ((e = n.value) == null ? void 0 : e.length) >= 15 && n.selectionStart === n.selectionEnd && (event == null || event.preventDefault())
}
u(U, "default");

function G(b, l, i, t) {
    let n = u(() => {
        var r;
        let e = event == null ? void 0 : event.target;
        e && ((r = e.value) == null ? void 0 : r.length) >= 15 && e.selectionStart === e.selectionEnd && (event == null || event.preventDefault())
    }, "maxLengthRestrict");
    b.ShowPhoneNumberSection && n()
}
u(G, "default");

function z(b, l, i, t) {
    function n(e) {
        /^[0-9]{3,}$/.test(e) ? b.ShowValue = !0 : b.ShowValue = !1
    }
    u(n, "onInputChange"), n(b.InputValue)
}
u(z, "default");

function K(b, l, i) {}
u(K, "default");

function j(b, l, i, t) {
    window.handleOutsidePhoneDropdownClickAdded || (window.handleOutsidePhoneDropdownClick = function(n) {
        var e = document.getElementById(b.WidgetId),
            r = document.querySelector(".vscomp-dropbox-container"),
            o = e ? e.querySelector(".osui-inline-svg") : null;
        e && !e.contains(n.target) && r && !r.contains(n.target) && (o && o.classList.remove("rotate"), typeof l != "undefined" && l.DropdownCloseArrow && typeof l.DropdownCloseArrow == "function" && l.DropdownCloseArrow())
    }, document.addEventListener("mousedown", window.handleOutsidePhoneDropdownClick), window.handleOutsidePhoneDropdownClickAdded = !0)
}
u(j, "default");

function q(b, l, i) {
    setTimeout(function() {
        let t = document.getElementsByClassName("vscomp-toggle-button");
        t.length > 0 ? t[0].click() : console.warn("No .vscomp-toggle-button found")
    }, 100)
}
u(q, "default");

function Q(b, l, i) {
    window.handleDocumentMouseDownAdded && (document.removeEventListener("mousedown", window.handleDocumentMouseDown), delete window.handleDocumentMouseDown, window.handleDocumentMouseDownAdded = !1), window.handleOutsidePhoneDropdownClickAdded && (document.removeEventListener("mousedown", window.handleOutsidePhoneDropdownClick), delete window.handleOutsidePhoneDropdownClick, window.handleOutsidePhoneDropdownClickAdded = !1)
}
u(Q, "default");

function Z(b, l, i, t) {
    var n = document.getElementById(b.WidgetId);
    n && n.addEventListener("paste", function(e) {
        var r = e.clipboardData || window.clipboardData,
            o = r.getData("text");
        /^\d+$/.test(o) || e.preventDefault()
    })
}
u(Z, "default");

function Y(b, l, i, t) {
    window.handleDocumentMouseDownAdded || (window.handleDocumentMouseDown = function(n) {
        let e = document.getElementById(b.WidgetId),
            r = e == null ? void 0 : e.querySelector(".osui-inline-svg"),
            s = document.querySelector(".vscomp-dropbox-container");
        e && !e.contains(n.target) && s && !s.contains(n.target) && (r && r.classList.remove("rotate"), typeof l != "undefined" && l.DropdownCloseArrow && typeof l.DropdownCloseArrow == "function" && l.DropdownCloseArrow())
    }, document.addEventListener("mousedown", window.handleDocumentMouseDown), window.handleDocumentMouseDownAdded = !0)
}
u(Y, "default");

function X(b, l, i) {
    window.intlTelInputUtils && typeof window.intlTelInputUtils.isValidNumber == "function" && (window.isValidNumber = function(t, n) {
        return window.intlTelInputUtils.isValidNumber(t, n)
    })
}
u(X, "default");
var a = E; {
    let l = class l extends a.Controller.BaseViewController {
        constructor(t, n, e) {
            super(t, n, e, Ce);
            var r = this.controller;
            this.clientActionProxies = {
                dropdownCloseArrow$Action: u(function() {
                    return r.executeActionInsideJSNode(r._dropdownCloseArrow$Action.bind(r), r.callContext(), function(o) {
                        return {}
                    }, function() {}, "DropdownCloseArrow")
                }, "dropdownCloseArrow$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onKeydown$Action() {
            return this.hasOwnProperty("__onKeydown$Action") || (this.__onKeydown$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    r = this.idService;
                return a.Logger.startActiveSpan("OnKeydown", function(o) {
                    o && (o.setAttribute("code.function", "OnKeydown"), o.setAttribute("outsystems.function.key", "19decc49-d9b1-48f3-8fe6-418101f47172"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnKeydown"), t = e.callContext(t), n.variables.showOnlyPhoneNumberIn ? a.Logger.startActiveSpan("JavaScript1", function(s) {
                            s && (s.setAttribute("code.function", "JavaScript1"), s.setAttribute("outsystems.function.key", "4da3160c-984d-412e-abc4-0fb5da57224a"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(U, "JavaScript1", "OnKeydown", null, function(c) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1) : a.Logger.startActiveSpan("JavaScript2", function(s) {
                            s && (s.setAttribute("code.function", "JavaScript2"), s.setAttribute("outsystems.function.key", "c81cf00c-28a5-4d28-8a51-6e35fb1c929e"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(G, "JavaScript2", "OnKeydown", {
                                    ShowPhoneNumberSection: a.DataConversion.JSNodeParamConverter.to(n.variables.showPhoneNumberSectionVar, a.DataTypes.DataTypes.Boolean)
                                }, function(c) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onKeydown$Action
        }
        set _onKeydown$Action(t) {
            this.__onKeydown$Action = t
        }
        get _input_FieldValueOnChange$Action() {
            return this.hasOwnProperty("__input_FieldValueOnChange$Action") || (this.__input_FieldValueOnChange$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    r = this.idService;
                return a.Logger.startActiveSpan("Input_FieldValueOnChange", function(o) {
                    return o && (o.setAttribute("code.function", "Input_FieldValueOnChange"), o.setAttribute("outsystems.function.key", "26866285-3186-4566-9f13-5cdbbca50966"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        e.ensureControllerAlive("Input_FieldValueOnChange"), t = e.callContext(t);
                        var s = new a.DataTypes.VariableHolder;
                        return a.Flow.executeAsyncFlow(function() {
                            return n.variables.showOnlyPhoneNumberIn ? a.Logger.startActiveSpan("JavaScript2", function(c) {
                                c && (c.setAttribute("code.function", "JavaScript2"), c.setAttribute("outsystems.function.key", "faf01c19-adf5-48b4-ae5d-859819da79e1"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return e.safeExecuteJSNode(K, "JavaScript2", "Input_FieldValueOnChange", null, function(d) {}, {}, {})
                                } finally {
                                    c && c.end()
                                }
                            }, 1) : (s.value = a.Logger.startActiveSpan("JavaScript1", function(c) {
                                c && (c.setAttribute("code.function", "JavaScript1"), c.setAttribute("outsystems.function.key", "0300250e-f5fe-455d-b9d4-c2eaa8acd187"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return e.safeExecuteJSNode(z, "JavaScript1", "Input_FieldValueOnChange", {
                                        InputValue: a.DataConversion.JSNodeParamConverter.to(n.variables.fieldValueVar, a.DataTypes.DataTypes.Text),
                                        ShowValue: a.DataConversion.JSNodeParamConverter.to(!1, a.DataTypes.DataTypes.Boolean)
                                    }, function(d) {
                                        var S = new(e.constructor.getVariableGroupType("uae.Common.EmailOrPhoneNumBlock.Input_FieldValueOnChange$javaScript1JSResult"));
                                        return S.showValueOut = a.DataConversion.JSNodeParamConverter.from(d.ShowValue, a.DataTypes.DataTypes.Boolean), S
                                    }, {}, {})
                                } finally {
                                    c && c.end()
                                }
                            }, 1), e._setShowPhoneNumberSection$Action(s.value.showValueOut, t)), e.fieldValueChangeEvent$Action(n.variables.fieldValueVar, t)
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__input_FieldValueOnChange$Action
        }
        set _input_FieldValueOnChange$Action(t) {
            this.__input_FieldValueOnChange$Action = t
        }
        get _internationalPhoneSelectorMobileOnClickCountry$Action() {
            return this.hasOwnProperty("__internationalPhoneSelectorMobileOnClickCountry$Action") || (this.__internationalPhoneSelectorMobileOnClickCountry$Action = function(t, n) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return a.Logger.startActiveSpan("InternationalPhoneSelectorMobileOnClickCountry", function(s) {
                    return s && (s.setAttribute("code.function", "InternationalPhoneSelectorMobileOnClickCountry"), s.setAttribute("outsystems.function.key", "26880ec9-c509-4614-a10a-e9d2ed79864e"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        r.ensureControllerAlive("InternationalPhoneSelectorMobileOnClickCountry"), n = r.callContext(n);
                        var c = new a.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("uae.Common.EmailOrPhoneNumBlock.InternationalPhoneSelectorMobileOnClickCountry$vars")));
                        c.value.countryInLocal = t;
                        var d = new a.DataTypes.VariableHolder;
                        return a.Flow.executeAsyncFlow(function() {
                            return d.value = a.SystemActions.listFilter(e.variables.countryListIn, function(S) {
                                return S.alpha2Attr === c.value.countryInLocal
                            }, n), e.variables.selectedCountryIn = c.value.countryInLocal, e.variables.showCountrySectionVar = !1, e.variables.currentSelectedCountryVar = d.value.filteredListOut.getCurrent(n.iterationContext), r.countrySelectEvent$Action(c.value.countryInLocal, n)
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__internationalPhoneSelectorMobileOnClickCountry$Action
        }
        set _internationalPhoneSelectorMobileOnClickCountry$Action(t) {
            this.__internationalPhoneSelectorMobileOnClickCountry$Action = t
        }
        get _dropdownCloseArrow$Action() {
            return this.hasOwnProperty("__dropdownCloseArrow$Action") || (this.__dropdownCloseArrow$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    r = this.idService;
                return a.Logger.startActiveSpan("DropdownCloseArrow", function(o) {
                    o && (o.setAttribute("code.function", "DropdownCloseArrow"), o.setAttribute("outsystems.function.key", "38c8ea88-2451-4250-a198-30a44e77492c"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("DropdownCloseArrow"), t = e.callContext(t), n.variables.isDropdownOpenVar = !1
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__dropdownCloseArrow$Action
        }
        set _dropdownCloseArrow$Action(t) {
            this.__dropdownCloseArrow$Action = t
        }
        get _closeDropdown$Action() {
            return this.hasOwnProperty("__closeDropdown$Action") || (this.__closeDropdown$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    r = this.idService;
                return a.Logger.startActiveSpan("CloseDropdown", function(o) {
                    o && (o.setAttribute("code.function", "CloseDropdown"), o.setAttribute("outsystems.function.key", "4077d237-5462-4a91-9c28-90b199d38ec8"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("CloseDropdown"), t = e.callContext(t), n.variables.showCountrySectionVar = !1
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__closeDropdown$Action
        }
        set _closeDropdown$Action(t) {
            this.__closeDropdown$Action = t
        }
        get _toggleLoader$Action() {
            return this.hasOwnProperty("__toggleLoader$Action") || (this.__toggleLoader$Action = function(t, n) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return a.Logger.startActiveSpan("ToggleLoader", function(s) {
                    s && (s.setAttribute("code.function", "ToggleLoader"), s.setAttribute("outsystems.function.key", "48ca78a6-4cf7-4bb1-9916-22b3f738cb03"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("ToggleLoader"), n = r.callContext(n);
                        var c = new a.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("uae.Common.EmailOrPhoneNumBlock.ToggleLoader$vars")));
                        c.value.shouldShowInLocal = t, e.variables.showLoaderVar = c.value.shouldShowInLocal
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__toggleLoader$Action
        }
        set _toggleLoader$Action(t) {
            this.__toggleLoader$Action = t
        }
        get _setShowPhoneNumberSection$Action() {
            return this.hasOwnProperty("__setShowPhoneNumberSection$Action") || (this.__setShowPhoneNumberSection$Action = function(t, n) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return a.Logger.startActiveSpan("SetShowPhoneNumberSection", function(s) {
                    s && (s.setAttribute("code.function", "SetShowPhoneNumberSection"), s.setAttribute("outsystems.function.key", "55028464-fbdb-496b-b90a-25712b14819f"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("SetShowPhoneNumberSection"), n = r.callContext(n);
                        var c = new a.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("uae.Common.EmailOrPhoneNumBlock.SetShowPhoneNumberSection$vars")));
                        c.value.shouldShowInLocal = t, e.variables.showPhoneNumberSectionVar = c.value.shouldShowInLocal, c.value.shouldShowInLocal && a.Logger.startActiveSpan("JavaScript2", function(d) {
                            d && (d.setAttribute("code.function", "JavaScript2"), d.setAttribute("outsystems.function.key", "5850360b-e67d-4efc-9d5b-510b0e60bb36"), d.setAttribute("outsystems.function.owner.name", "uae"), d.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(j, "JavaScript2", "SetShowPhoneNumberSection", {
                                    WidgetId: a.DataConversion.JSNodeParamConverter.to(o.getId("OverlayInput"), a.DataTypes.DataTypes.Text)
                                }, function(S) {}, {
                                    DropdownCloseArrow: r.clientActionProxies.dropdownCloseArrow$Action
                                }, {})
                            } finally {
                                d && d.end()
                            }
                        }, 1)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__setShowPhoneNumberSection$Action
        }
        set _setShowPhoneNumberSection$Action(t) {
            this.__setShowPhoneNumberSection$Action = t
        }
        get _onClickContainer$Action() {
            return this.hasOwnProperty("__onClickContainer$Action") || (this.__onClickContainer$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    r = this.idService;
                return a.Logger.startActiveSpan("OnClickContainer", function(o) {
                    o && (o.setAttribute("code.function", "OnClickContainer"), o.setAttribute("outsystems.function.key", "7d8d9b25-a96d-496f-9bc0-cbcd8f499a19"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnClickContainer"), t = e.callContext(t), I.isDesktop$Action(t).isDesktopOut ? (a.Logger.startActiveSpan("JavaScript1", function(s) {
                            s && (s.setAttribute("code.function", "JavaScript1"), s.setAttribute("outsystems.function.key", "66f13969-ea50-4ebc-b91d-ebfa8c2193b7"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(q, "JavaScript1", "OnClickContainer", null, function(c) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), n.variables.isDropdownOpenVar = !n.variables.isDropdownOpenVar) : n.variables.showCountrySectionVar = !0
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onClickContainer$Action
        }
        set _onClickContainer$Action(t) {
            this.__onClickContainer$Action = t
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    r = this.idService;
                return a.Logger.startActiveSpan("OnParametersChanged", function(o) {
                    o && (o.setAttribute("code.function", "OnParametersChanged"), o.setAttribute("outsystems.function.key", "988a2989-b991-4599-a8f7-328dd05c6b4b"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnParametersChanged"), t = e.callContext(t);
                        var s = new a.DataTypes.VariableHolder,
                            c = new a.DataTypes.VariableHolder;
                        n.variables.oldNumberIn !== a.BuiltinFunctions.nullTextIdentifier() && !n.variables.fieldUpdatedVar && (n.variables.fieldValueVar = n.variables.oldNumberIn, n.variables.fieldUpdatedVar = !0), n.variables.filteredCountryListVar.isEmpty && !n.variables.countryListIn.isEmpty && (s.value = a.SystemActions.listFilter(n.variables.countryListIn, function(d) {
                            return d.twilioAttr.supportedAttr
                        }, t), n.variables.countryListIn = s.value.filteredListOut), n.variables.currentSelectedCountryVar.alpha2Attr === a.BuiltinFunctions.nullTextIdentifier() && !n.variables.countryListIn.isEmpty && (c.value = a.SystemActions.listFilter(n.variables.countryListIn, function(d) {
                            return d.alpha2Attr === n.variables.selectedCountryIn
                        }, t), n.variables.currentSelectedCountryVar = c.value.filteredListOut.getCurrent(t.iterationContext)), n.widgets.get(r.getId("EmailOrPhoneField")).validAttr = n.variables.errorMessageIn === a.BuiltinFunctions.nullTextIdentifier()
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    r = this.idService;
                return a.Logger.startActiveSpan("OnDestroy", function(o) {
                    o && (o.setAttribute("code.function", "OnDestroy"), o.setAttribute("outsystems.function.key", "c2f31ff6-3936-4152-80f3-6b936bca366c"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDestroy"), t = e.callContext(t), a.Logger.startActiveSpan("JavaScript1", function(s) {
                            s && (s.setAttribute("code.function", "JavaScript1"), s.setAttribute("outsystems.function.key", "14ce3719-4c01-4024-aea2-818788a8f1cb"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(Q, "JavaScript1", "OnDestroy", null, function(c) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(t) {
            this.__onDestroy$Action = t
        }
        get _dropdownSearchOnChanged$Action() {
            return this.hasOwnProperty("__dropdownSearchOnChanged$Action") || (this.__dropdownSearchOnChanged$Action = function(t, n, e) {
                var r = this.model,
                    o = this.controller,
                    s = this.idService;
                return a.Logger.startActiveSpan("DropdownSearchOnChanged", function(c) {
                    return c && (c.setAttribute("code.function", "DropdownSearchOnChanged"), c.setAttribute("outsystems.function.key", "cde9beb9-9abc-4cf6-b4f5-e268e8dd7e16"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        o.ensureControllerAlive("DropdownSearchOnChanged"), e = o.callContext(e);
                        var d = new a.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.Common.EmailOrPhoneNumBlock.DropdownSearchOnChanged$vars")));
                        d.value.dropdownSearchIdInLocal = t, d.value.selectedOptionListInLocal = n.clone();
                        var S = new a.DataTypes.VariableHolder;
                        return a.Flow.executeAsyncFlow(function() {
                            return S.value = a.SystemActions.listFilter(r.variables.countryListIn, function($) {
                                return $.alpha2Attr === d.value.selectedOptionListInLocal.getCurrent(e.iterationContext).valueAttr
                            }, e), r.variables.currentSelectedCountryVar = S.value.filteredListOut.getCurrent(e.iterationContext), r.variables.isDropdownOpenVar = !1, o.countrySelectEvent$Action(r.variables.currentSelectedCountryVar.alpha2Attr, e)
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__dropdownSearchOnChanged$Action
        }
        set _dropdownSearchOnChanged$Action(t) {
            this.__dropdownSearchOnChanged$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    r = this.idService;
                return a.Logger.startActiveSpan("OnReady", function(o) {
                    o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "e4f79fd9-1a65-413c-b283-1005e106b097"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t);
                        var s = new a.DataTypes.VariableHolder;
                        n.variables.oldNumberIn !== a.BuiltinFunctions.nullTextIdentifier() && (n.variables.fieldValueVar = n.variables.oldNumberIn, n.variables.fieldUpdatedVar = !0), s.value = a.SystemActions.listFilter(n.variables.countryListIn, function(c) {
                            return c.alpha2Attr === n.variables.selectedCountryIn
                        }, t), n.variables.currentSelectedCountryVar = s.value.filteredListOut.getCurrent(t.iterationContext), n.variables.showOnlyPhoneNumberIn && (a.Logger.startActiveSpan("JavaScript2", function(c) {
                            c && (c.setAttribute("code.function", "JavaScript2"), c.setAttribute("outsystems.function.key", "2579744a-cebf-4461-9de6-77c140e6ed29"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(Y, "JavaScript2", "OnReady", {
                                    WidgetId: a.DataConversion.JSNodeParamConverter.to(r.getId("OverlayInput"), a.DataTypes.DataTypes.Text)
                                }, function(d) {}, {
                                    DropdownCloseArrow: e.clientActionProxies.dropdownCloseArrow$Action
                                }, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1), a.Logger.startActiveSpan("JavaScript1", function(c) {
                            c && (c.setAttribute("code.function", "JavaScript1"), c.setAttribute("outsystems.function.key", "1fb56a3b-e642-452b-b3e8-37ddb2a33996"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(Z, "JavaScript1", "OnReady", {
                                    WidgetId: a.DataConversion.JSNodeParamConverter.to(r.getId("EmailOrPhoneField"), a.DataTypes.DataTypes.Text)
                                }, function(d) {}, {}, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1)), a.Logger.startActiveSpan("LoadValidFunction", function(c) {
                            c && (c.setAttribute("code.function", "LoadValidFunction"), c.setAttribute("outsystems.function.key", "dd7c9243-0e15-41e8-bdd2-bb8b106ac1f3"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(X, "LoadValidFunction", "OnReady", null, function(d) {}, {}, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _onDropdownOpen$Action() {
            return this.hasOwnProperty("__onDropdownOpen$Action") || (this.__onDropdownOpen$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    r = this.idService;
                return a.Logger.startActiveSpan("OnDropdownOpen", function(o) {
                    o && (o.setAttribute("code.function", "OnDropdownOpen"), o.setAttribute("outsystems.function.key", "f1ee20ae-f227-464b-a7ac-8cf653c155fa"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnDropdownOpen"), t = e.callContext(t), I.isDesktop$Action(t).isDesktopOut || (n.variables.showCountrySectionVar = !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onDropdownOpen$Action
        }
        set _onDropdownOpen$Action(t) {
            this.__onDropdownOpen$Action = t
        }
        get _dropdownSearchInitialized$Action() {
            return this.hasOwnProperty("__dropdownSearchInitialized$Action") || (this.__dropdownSearchInitialized$Action = function(t, n) {
                var e = this.model,
                    r = this.controller,
                    o = this.idService;
                return a.Logger.startActiveSpan("DropdownSearchInitialized", function(s) {
                    s && (s.setAttribute("code.function", "DropdownSearchInitialized"), s.setAttribute("outsystems.function.key", "fdc11134-7df7-424c-ae21-f79f391d17c1"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("DropdownSearchInitialized"), n = r.callContext(n);
                        var c = new a.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("uae.Common.EmailOrPhoneNumBlock.DropdownSearchInitialized$vars")));
                        c.value.dropdownSearchIdInLocal = t;
                        var d = new a.DataTypes.VariableHolder;
                        d.value = I.setVirtualSelectConfigs$Action(c.value.dropdownSearchIdInLocal, (function() {
                            var S = new ae;
                            return S.searchNormalizeAttr = oe.booleanTypes.false, S
                        })(), n)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__dropdownSearchInitialized$Action
        }
        set _dropdownSearchInitialized$Action(t) {
            this.__dropdownSearchInitialized$Action = t
        }
        get _onClickClear$Action() {
            return this.hasOwnProperty("__onClickClear$Action") || (this.__onClickClear$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    r = this.idService;
                return a.Logger.startActiveSpan("OnClickClear", function(o) {
                    return o && (o.setAttribute("code.function", "OnClickClear"), o.setAttribute("outsystems.function.key", "fff6765a-5ac7-4cb7-b486-9e73b1167139"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("OnClickClear"), t = e.callContext(t), a.Flow.executeAsyncFlow(function() {
                            return n.variables.fieldValueVar = a.BuiltinFunctions.nullTextIdentifier(), e._setShowPhoneNumberSection$Action(!1, t), e.fieldValueChangeEvent$Action(n.variables.fieldValueVar, t)
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onClickClear$Action
        }
        set _onClickClear$Action(t) {
            this.__onClickClear$Action = t
        }
        onKeydown$Action(t) {
            var n = this.controller;
            return a.Logger.startActiveSpan("OnKeydown__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnKeydown"), e.setAttribute("outsystems.function.key", "19decc49-d9b1-48f3-8fe6-418101f47172"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onKeydown$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        input_FieldValueOnChange$Action(t) {
            var n = this.controller;
            return a.Logger.startActiveSpan("Input_FieldValueOnChange__proxy", function(e) {
                return e && (e.setAttribute("code.function", "Input_FieldValueOnChange"), e.setAttribute("outsystems.function.key", "26866285-3186-4566-9f13-5cdbbca50966"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._input_FieldValueOnChange$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        internationalPhoneSelectorMobileOnClickCountry$Action(t, n) {
            var e = this.controller;
            return a.Logger.startActiveSpan("InternationalPhoneSelectorMobileOnClickCountry__proxy", function(r) {
                return r && (r.setAttribute("code.function", "InternationalPhoneSelectorMobileOnClickCountry"), r.setAttribute("outsystems.function.key", "26880ec9-c509-4614-a10a-e9d2ed79864e"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._internationalPhoneSelectorMobileOnClickCountry$Action, n, t)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        dropdownCloseArrow$Action(t) {
            var n = this.controller;
            return a.Logger.startActiveSpan("DropdownCloseArrow__proxy", function(e) {
                e && (e.setAttribute("code.function", "DropdownCloseArrow"), e.setAttribute("outsystems.function.key", "38c8ea88-2451-4250-a198-30a44e77492c"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._dropdownCloseArrow$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        closeDropdown$Action(t) {
            var n = this.controller;
            return a.Logger.startActiveSpan("CloseDropdown__proxy", function(e) {
                e && (e.setAttribute("code.function", "CloseDropdown"), e.setAttribute("outsystems.function.key", "4077d237-5462-4a91-9c28-90b199d38ec8"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._closeDropdown$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        toggleLoader$Action(t, n) {
            var e = this.controller;
            return a.Logger.startActiveSpan("ToggleLoader__proxy", function(r) {
                r && (r.setAttribute("code.function", "ToggleLoader"), r.setAttribute("outsystems.function.key", "48ca78a6-4cf7-4bb1-9916-22b3f738cb03"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._toggleLoader$Action, n, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        setShowPhoneNumberSection$Action(t, n) {
            var e = this.controller;
            return a.Logger.startActiveSpan("SetShowPhoneNumberSection__proxy", function(r) {
                r && (r.setAttribute("code.function", "SetShowPhoneNumberSection"), r.setAttribute("outsystems.function.key", "55028464-fbdb-496b-b90a-25712b14819f"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._setShowPhoneNumberSection$Action, n, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onClickContainer$Action(t) {
            var n = this.controller;
            return a.Logger.startActiveSpan("OnClickContainer__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnClickContainer"), e.setAttribute("outsystems.function.key", "7d8d9b25-a96d-496f-9bc0-cbcd8f499a19"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickContainer$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onParametersChanged$Action(t) {
            var n = this.controller;
            return a.Logger.startActiveSpan("OnParametersChanged__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnParametersChanged"), e.setAttribute("outsystems.function.key", "988a2989-b991-4599-a8f7-328dd05c6b4b"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onDestroy$Action(t) {
            var n = this.controller;
            return a.Logger.startActiveSpan("OnDestroy__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnDestroy"), e.setAttribute("outsystems.function.key", "c2f31ff6-3936-4152-80f3-6b936bca366c"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDestroy$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        dropdownSearchOnChanged$Action(t, n, e) {
            var r = this.controller;
            return a.Logger.startActiveSpan("DropdownSearchOnChanged__proxy", function(o) {
                return o && (o.setAttribute("code.function", "DropdownSearchOnChanged"), o.setAttribute("outsystems.function.key", "cde9beb9-9abc-4cf6-b4f5-e268e8dd7e16"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._dropdownSearchOnChanged$Action, e, t, n)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        onReady$Action(t) {
            var n = this.controller;
            return a.Logger.startActiveSpan("OnReady__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "e4f79fd9-1a65-413c-b283-1005e106b097"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onDropdownOpen$Action(t) {
            var n = this.controller;
            return a.Logger.startActiveSpan("OnDropdownOpen__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnDropdownOpen"), e.setAttribute("outsystems.function.key", "f1ee20ae-f227-464b-a7ac-8cf653c155fa"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDropdownOpen$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        dropdownSearchInitialized$Action(t, n) {
            var e = this.controller;
            return a.Logger.startActiveSpan("DropdownSearchInitialized__proxy", function(r) {
                r && (r.setAttribute("code.function", "DropdownSearchInitialized"), r.setAttribute("outsystems.function.key", "fdc11134-7df7-424c-ae21-f79f391d17c1"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._dropdownSearchInitialized$Action, n, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onClickClear$Action(t) {
            var n = this.controller;
            return a.Logger.startActiveSpan("OnClickClear__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnClickClear"), e.setAttribute("outsystems.function.key", "fff6765a-5ac7-4cb7-b486-9e73b1167139"), e.setAttribute("outsystems.function.owner.name", "uae"), e.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), a.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onClickClear$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        get countrySelectEvent$Action() {
            return this.hasOwnProperty("_countrySelectEvent$Action") || (this._countrySelectEvent$Action = function() {
                return Promise.resolve()
            }), this._countrySelectEvent$Action
        }
        set countrySelectEvent$Action(t) {
            this._countrySelectEvent$Action = t
        }
        get fieldValueChangeEvent$Action() {
            return this.hasOwnProperty("_fieldValueChangeEvent$Action") || (this._fieldValueChangeEvent$Action = function() {
                return Promise.resolve()
            }), this._fieldValueChangeEvent$Action
        }
        set fieldValueChangeEvent$Action(t) {
            this._fieldValueChangeEvent$Action = t
        }
        get triggerLiveChat$Action() {
            return this.hasOwnProperty("_triggerLiveChat$Action") || (this._triggerLiveChat$Action = function() {
                return Promise.resolve()
            }), this._triggerLiveChat$Action
        }
        set triggerLiveChat$Action(t) {
            this._triggerLiveChat$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var n = this.controller,
                    e = this.model,
                    r = this.idService;
                return n.onReady$Action(t)
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
                var n = this.controller,
                    e = this.model,
                    r = this.idService;
                return n.onDestroy$Action(t)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(t) {
                var n = this.controller,
                    e = this.model,
                    r = this.idService;
                return n.onParametersChanged$Action(t)
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
            return T.defaultTimeout
        }
    };
    u(l, "ControllerInner");
    let b = l;
    p = b, p.registerVariableGroupType("uae.Common.EmailOrPhoneNumBlock.Input_FieldValueOnChange$javaScript1JSResult", [{
        name: "ShowValue",
        attrName: "showValueOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }]), p.registerVariableGroupType("uae.Common.EmailOrPhoneNumBlock.InternationalPhoneSelectorMobileOnClickCountry$vars", [{
        name: "Country",
        attrName: "countryInLocal",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), p.registerVariableGroupType("uae.Common.EmailOrPhoneNumBlock.ToggleLoader$vars", [{
        name: "shouldShow",
        attrName: "shouldShowInLocal",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }]), p.registerVariableGroupType("uae.Common.EmailOrPhoneNumBlock.SetShowPhoneNumberSection$vars", [{
        name: "ShouldShow",
        attrName: "shouldShowInLocal",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Boolean,
        defaultValue: u(function() {
            return !1
        }, "defaultValue")
    }]), p.registerVariableGroupType("uae.Common.EmailOrPhoneNumBlock.DropdownSearchOnChanged$vars", [{
        name: "DropdownSearchId",
        attrName: "dropdownSearchIdInLocal",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "SelectedOptionList",
        attrName: "selectedOptionListInLocal",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.RecordList,
        defaultValue: u(function() {
            return new(a.GenericTypeCache.getGenericList(P))
        }, "defaultValue"),
        complexType: a.GenericTypeCache.getGenericList(P)
    }]), p.registerVariableGroupType("uae.Common.EmailOrPhoneNumBlock.DropdownSearchInitialized$vars", [{
        name: "DropdownSearchId",
        attrName: "dropdownSearchIdInLocal",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }])
}
var p, Ae = new a.Controller.ControllerFactory(p, se);
var we = F.PlaceholderContent,
    $t = F.IteratorPlaceholderContent,
    Ne = u(function() {
        var b = ue(function(l) {
            var i = l.model,
                t = l.controller,
                n = l.controller.idService,
                e = t.validationService,
                r = t.callContext(),
                o = fe,
                s = he,
                c = {
                    props: l,
                    validateWidget: u(function(f) {
                        l.validateWidget(l, f)
                    }, "validateWidget")
                },
                d = i,
                S = de,
                $ = le,
                C = ce();
            return y.createElement("div", l.rootNodeProperties, y.createElement(_, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "0"
                },
                _widgetRecordProvider: d
            }, y.createElement(ve, {
                extendedProperties: {
                    style: "margin-bottom: 4px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: n,
                    uuid: "1"
                },
                _widgetRecordProvider: d
            }, y.createElement(D, {
                value: i.getCachedValue(n.getId("Hkpm6CeDqESjmN3mV3+ANA.Value"), function() {
                    return i.variables.labelTitleIn !== v.nullTextIdentifier() ? i.variables.labelTitleIn : w.resolve(g.TranslationsService).getMessage("eZM19XDrN0OaQrU54_vW7A#ValueExpression.-24381260.1", "Email or phone number")
                }, function() {
                    return i.variables.labelTitleIn
                }),
                _idProps: {
                    service: n,
                    uuid: "2"
                },
                _widgetRecordProvider: d,
                value_dataFetchStatus: m.calculateDataFetchStatus(i.variables._labelTitleInDataFetchStatus)
            })), y.createElement(_, {
                align: 0,
                animate: !0,
                style: "email-or-phone-num-block__mobile-full-page",
                visible: i.getCachedValue(n.getId("gYk4oUqrLkWdGNYU_Bja7g.Visible"), function() {
                    return i.variables.showCountrySectionVar && !I.isDesktop$Action(r).isDesktopOut
                }, function() {
                    return i.variables.showCountrySectionVar
                }),
                _idProps: {
                    service: n,
                    uuid: "3"
                },
                _widgetRecordProvider: d
            }, y.createElement(R, {
                getOwnerSpan: u(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: u(function() {
                    return C.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    CurrentResidence: i.variables.selectedCountryIn,
                    _currentResidenceInDataFetchStatus: m.calculateDataFetchStatus(i.variables._selectedCountryInDataFetchStatus),
                    CountriesList: i.variables.countryListIn,
                    _countriesListInDataFetchStatus: m.calculateDataFetchStatus(i.variables._countryListInDataFetchStatus)
                },
                events: {
                    _handleError: u(function(f) {
                        t.handleError(f)
                    }, "_handleError"),
                    onClickCountry$Action: u(function(f, A, ee) {
                        return Promise.resolve().then(function() {
                            var ge = typeof r != "undefined" && r !== null ? r.clone() : t.callContext().clone();
                            return t.internationalPhoneSelectorMobileOnClickCountry$Action(A, t.callContext(ge))
                        })
                    }, "onClickCountry$Action"),
                    closeDropdown$Action: u(function() {
                        var f = typeof r != "undefined" && r !== null ? r.clone() : t.callContext().clone();
                        t.closeDropdown$Action(t.callContext(f))
                    }, "closeDropdown$Action")
                },
                _validationProps: {
                    validationService: e
                },
                _idProps: {
                    service: n,
                    uuid: "4",
                    alias: "1"
                },
                _widgetRecordProvider: d,
                _dependencies: []
            })), y.createElement(_, {
                align: 0,
                animate: !1,
                style: "display-flex gap-s full-width position-relative",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "5"
                },
                _widgetRecordProvider: d
            }, S(i.variables.showLoaderVar, !1, this, function() {
                return [y.createElement(_, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "height: 40px;"
                    },
                    style: "w-full",
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "6"
                    },
                    _widgetRecordProvider: d
                }, y.createElement(_, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "height: 40px;"
                    },
                    style: "w-full h-full animate-pulse rounded-lg skelton-loader-bg",
                    visible: !0,
                    _idProps: {
                        service: n,
                        name: "Loader2"
                    },
                    _widgetRecordProvider: d
                }))]
            }, function() {
                return [y.createElement(_, {
                    align: 0,
                    animate: !0,
                    extendedEvents: {
                        onClick: u(function() {
                            var f = typeof r != "undefined" && r !== null ? r.clone() : t.callContext().clone();
                            t.onClickContainer$Action(t.callContext(f))
                        }, "onClick")
                    },
                    extendedProperties: {
                        style: "background: #fff; border: var(--border-size-s) solid var(--color-neutral-5); border-radius: 4px; height: 40px; z-index: 2;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "127px"
                    },
                    style: i.getCachedValue(n.getId("OverlayInput.Style"), function() {
                        return "position-absolute display-flex align-items-center justify-content-space-between padding-x-base " + (i.variables.isVerifiedIn ? "email-or-phone-num-block--verified pointer-events-none " : "") + (i.variables.showLiveChatMessageIn || i.variables.errorMessageIn !== v.nullTextIdentifier() ? "error-border" : "")
                    }, function() {
                        return i.variables.isVerifiedIn
                    }, function() {
                        return i.variables.showLiveChatMessageIn
                    }, function() {
                        return i.variables.errorMessageIn
                    }),
                    visible: i.variables.showPhoneNumberSectionVar || i.variables.showOnlyPhoneNumberIn,
                    _idProps: {
                        service: n,
                        name: "OverlayInput"
                    },
                    _widgetRecordProvider: d,
                    style_dataFetchStatus: m.calculateDataFetchStatus(i.variables._isVerifiedInDataFetchStatus, i.variables._showLiveChatMessageInDataFetchStatus, i.variables._errorMessageInDataFetchStatus),
                    visible_dataFetchStatus: m.calculateDataFetchStatus(i.variables._showOnlyPhoneNumberInDataFetchStatus)
                }, y.createElement(_, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "display-flex align-items-center gap-s",
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "9"
                    },
                    _widgetRecordProvider: d
                }, y.createElement(ye, {
                    type: 1,
                    url: "https://flagcdn.com/w20/" + i.variables.currentSelectedCountryVar.alpha2Attr + ".png",
                    _idProps: {
                        service: n,
                        uuid: "10"
                    },
                    _widgetRecordProvider: d
                }), y.createElement(D, {
                    extendedProperties: {
                        dir: "ltr"
                    },
                    gridProperties: {
                        marginLeft: "0 !important"
                    },
                    value: i.getCachedValue(n.getId("nF4h2cTp0UqGiekysyrVrg.Value"), function() {
                        return v.index(i.variables.currentSelectedCountryVar.country_calling_codesAttr.getCurrent(r.iterationContext), " ", 0, !1, !1) === -1 ? i.variables.currentSelectedCountryVar.country_calling_codesAttr.getCurrent(r.iterationContext) : v.substr(i.variables.currentSelectedCountryVar.country_calling_codesAttr.getCurrent(r.iterationContext), 0, v.index(i.variables.currentSelectedCountryVar.country_calling_codesAttr.getCurrent(r.iterationContext), " ", 0, !1, !1))
                    }, function() {
                        return i.variables.currentSelectedCountryVar.country_calling_codesAttr.getCurrent(r.iterationContext)
                    }),
                    _idProps: {
                        service: n,
                        uuid: "11"
                    },
                    _widgetRecordProvider: d
                })), y.createElement(_, {
                    align: 0,
                    animate: !1,
                    visible: !1,
                    _idProps: {
                        service: n,
                        uuid: "12"
                    },
                    _widgetRecordProvider: d
                }, y.createElement(k, {
                    icon: "angle-down",
                    iconSize: 0,
                    style: "icon",
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "13"
                    },
                    _widgetRecordProvider: d
                })), y.createElement(N, {
                    getOwnerSpan: u(function() {
                        return C.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: u(function() {
                        return C.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ExtendedClass: i.getCachedValue(n.getId("VMUQ0Aglj0WLNIay77v2Kg.ExtendedClass"), function() {
                            return i.variables.isDropdownOpenVar ? "rotate" : ""
                        }, function() {
                            return i.variables.isDropdownOpenVar
                        }),
                        SVGCode: `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>\r
  <path fill-rule='evenodd' clip-rule='evenodd' d='M17.1243 9.60268C17.1913 9.66964 17.2248 9.74665 17.2248 9.83371C17.2248 9.92076 17.1913 9.99777 17.1243 10.0647L12.4435 14.7455C12.3765 14.8125 12.2995 14.846 12.2125 14.846C12.1254 14.846 12.0484 14.8125 11.9814 14.7455L7.30064 10.0647C7.23368 9.99777 7.2002 9.92076 7.2002 9.83371C7.2002 9.74665 7.23368 9.66964 7.30064 9.60268L7.80287 9.10045C7.86984 9.03348 7.94685 9 8.0339 9C8.12096 9 8.19796 9.03348 8.26493 9.10045L12.2125 13.048L16.16 9.10045C16.227 9.03348 16.304 9 16.391 9C16.4781 9 16.5551 9.03348 16.6221 9.10045L17.1243 9.60268Z' fill='black' fill-opacity='0.96'/>\r
</svg>`
                    },
                    events: {
                        _handleError: u(function(f) {
                            t.handleError(f)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: e
                    },
                    _idProps: {
                        service: n,
                        uuid: "14",
                        alias: "2"
                    },
                    _widgetRecordProvider: d,
                    _dependencies: []
                })), y.createElement(_, {
                    align: 0,
                    animate: !0,
                    extendedProperties: {
                        style: "height: 40px; z-index: 1;"
                    },
                    style: i.getCachedValue(n.getId("Q8wgYJyD3kOqosKCgivsag.Style"), function() {
                        return i.variables.isVerifiedIn ? "display-none" : ""
                    }, function() {
                        return i.variables.isVerifiedIn
                    }),
                    visible: i.variables.showPhoneNumberSectionVar || i.variables.showOnlyPhoneNumberIn,
                    _idProps: {
                        service: n,
                        uuid: "15"
                    },
                    _widgetRecordProvider: d,
                    style_dataFetchStatus: m.calculateDataFetchStatus(i.variables._isVerifiedInDataFetchStatus),
                    visible_dataFetchStatus: m.calculateDataFetchStatus(i.variables._showOnlyPhoneNumberInDataFetchStatus)
                }, y.createElement(x, {
                    getOwnerSpan: u(function() {
                        return C.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: u(function() {
                        return C.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ExtendedClass: "position-absolute",
                        OptionsList: i.getCachedValue(n.getId("2yyMOqoqjUq6kkmjcCwcew.OptionsList"), function() {
                            return ne.JSConversions.typeConvertRecordList(i.variables.countryListIn, new(re.getGenericList(P)), function(f, A) {
                                return A.valueAttr = f.alpha2Attr, A.labelAttr = v.toLower(T.languageMapper$Action(r).charCodeOut) === "en" ? f.nameAttr + " +" + v.replace(v.index(f.country_calling_codesAttr.getCurrent(r.iterationContext), " ", 0, !1, !1) === -1 ? f.country_calling_codesAttr.getCurrent(r.iterationContext) : v.substr(f.country_calling_codesAttr.getCurrent(r.iterationContext), 0, v.index(f.country_calling_codesAttr.getCurrent(r.iterationContext), " ", 0, !1, !1)), "+", "") : f.nameArAttr + " " + v.replace(v.index(f.country_calling_codesAttr.getCurrent(r.iterationContext), " ", 0, !1, !1) === -1 ? f.country_calling_codesAttr.getCurrent(r.iterationContext) : v.substr(f.country_calling_codesAttr.getCurrent(r.iterationContext), 0, v.index(f.country_calling_codesAttr.getCurrent(r.iterationContext), " ", 0, !1, !1)), "+", "") + "+", A.imageUrlOrIconClassAttr = "https://flagcdn.com/w20/" + f.alpha2Attr + ".png", A
                            })
                        }, function() {
                            return i.variables.countryListIn
                        }),
                        _optionsListInDataFetchStatus: m.calculateDataFetchStatus(i.variables._countryListInDataFetchStatus),
                        OptionalConfigs: i.getCachedValue(n.getId("2yyMOqoqjUq6kkmjcCwcew.OptionalConfigs"), function() {
                            return (function() {
                                var f = new ie;
                                return f.noResultsTextAttr = w.resolve(g.TranslationsService).getMessage("tpdLouMxB0uVUdWG9S+7IQ#Value.974258437.1", "There are no options to show."), f.searchPromptAttr = w.resolve(g.TranslationsService).getMessage("kRKQxwuSy0ilI6MMK8aq1w#Value.-1822469688.1", "Search"), f.noOptionsTextAttr = w.resolve(g.TranslationsService).getMessage("axOv0wB_tUSzbrDGQkhILg#Value.974258437.1", "There are no options to show."), f
                            })()
                        })
                    },
                    events: {
                        _handleError: u(function(f) {
                            t.handleError(f)
                        }, "_handleError"),
                        initialized$Action: u(function(f) {
                            var A = typeof r != "undefined" && r !== null ? r.clone() : t.callContext().clone();
                            t.dropdownSearchInitialized$Action(f, t.callContext(A))
                        }, "initialized$Action"),
                        onChanged$Action: u(function(f, A) {
                            return Promise.resolve().then(function() {
                                var ee = typeof r != "undefined" && r !== null ? r.clone() : t.callContext().clone();
                                return t.dropdownSearchOnChanged$Action(f, A, t.callContext(ee))
                            })
                        }, "onChanged$Action")
                    },
                    _validationProps: {
                        validationService: e
                    },
                    _idProps: {
                        service: n,
                        uuid: "16",
                        alias: "3"
                    },
                    _widgetRecordProvider: d,
                    _dependencies: []
                })), y.createElement(_, {
                    align: 0,
                    animate: !1,
                    style: "full-width",
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "17"
                    },
                    _widgetRecordProvider: d
                }, y.createElement(M, {
                    getOwnerSpan: u(function() {
                        return C.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: u(function() {
                        return C.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ExtendedClass: i.getCachedValue(n.getId("alU+aVnz00G+HjEGvxKf4g.ExtendedClass"), function() {
                            return "w-full " + (i.variables.showPhoneNumberSectionVar || i.variables.showOnlyPhoneNumberIn ? i.variables.isVerifiedIn ? "field--verified" : "field" : "")
                        }, function() {
                            return i.variables.showPhoneNumberSectionVar
                        }, function() {
                            return i.variables.showOnlyPhoneNumberIn
                        }, function() {
                            return i.variables.isVerifiedIn
                        }),
                        _extendedClassInDataFetchStatus: m.calculateDataFetchStatus(i.variables._showOnlyPhoneNumberInDataFetchStatus, i.variables._isVerifiedInDataFetchStatus),
                        AlignIconRight: i.getCachedValue(n.getId("alU+aVnz00G+HjEGvxKf4g.AlignIconRight"), function() {
                            return v.toLower(T.languageMapper$Action(r).charCodeOut) === "en"
                        })
                    },
                    events: {
                        _handleError: u(function(f) {
                            t.handleError(f)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: e
                    },
                    _idProps: {
                        service: n,
                        uuid: "18",
                        alias: "4"
                    },
                    _widgetRecordProvider: d,
                    placeholders: {
                        icon: new we(function() {
                            return [y.createElement(_, {
                                align: 0,
                                animate: !0,
                                visible: i.getCachedValue(n.getId("B4Fg6dzBaEGBSZkT8XTFtg.Visible"), function() {
                                    return i.variables.fieldValueVar !== v.nullTextIdentifier()
                                }, function() {
                                    return i.variables.fieldValueVar
                                }),
                                _idProps: {
                                    service: n,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: d
                            }, S(i.variables.isVerifiedIn, !1, this, function() {
                                return [y.createElement(N, {
                                    getOwnerSpan: u(function() {
                                        return C.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: u(function() {
                                        return C.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        SVGCode: `<svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M12 20.5C9.125 20.5 6.5 19 5.0625 16.5C3.625 14.0312 3.625 11 5.0625 8.5C6.5 6.03125 9.125 4.5 12 4.5C14.8438 4.5 17.4688 6.03125 18.9062 8.5C20.3438 11 20.3438 14.0312 18.9062 16.5C17.4688 19 14.8438 20.5 12 20.5ZM15.5312 11.0312H15.5C15.8125 10.75 15.8125 10.2812 15.5 9.96875C15.2188 9.6875 14.75 9.6875 14.4688 9.96875L11 13.4688L9.53125 12C9.21875 11.6875 8.75 11.6875 8.46875 12C8.15625 12.2812 8.15625 12.75 8.46875 13.0312L10.4688 15.0312C10.75 15.3438 11.2188 15.3438 11.5312 15.0312L15.5312 11.0312Z' fill='#007A22'/>\r
</svg>`
                                    },
                                    events: {
                                        _handleError: u(function(f) {
                                            t.handleError(f)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: e
                                    },
                                    _idProps: {
                                        service: n,
                                        uuid: "20",
                                        alias: "5"
                                    },
                                    _widgetRecordProvider: d,
                                    _dependencies: []
                                })]
                            }, function() {
                                return [y.createElement(k, {
                                    extendedEvents: {
                                        onClick: u(function() {
                                            return Promise.resolve().then(function() {
                                                var f = typeof r != "undefined" && r !== null ? r.clone() : t.callContext().clone();
                                                return t.onClickClear$Action(t.callContext(f))
                                            })
                                        }, "onClick")
                                    },
                                    icon: "times-circle",
                                    iconSize: 0,
                                    style: "icon cursor-pointer",
                                    visible: !0,
                                    _idProps: {
                                        service: n,
                                        uuid: "21"
                                    },
                                    _widgetRecordProvider: d
                                })]
                            }))]
                        }),
                        input: new we(function() {
                            return [y.createElement(be, {
                                _validationProps: {
                                    validationService: e
                                },
                                enabled: !i.variables.isVerifiedIn,
                                extendedEvents: {
                                    onKeyDown: u(function() {
                                        var f = typeof r != "undefined" && r !== null ? r.clone() : t.callContext().clone();
                                        t.onKeydown$Action(t.callContext(f))
                                    }, "onKeyDown")
                                },
                                extendedProperties: {
                                    inputmode: i.getCachedValue(n.getId("EmailOrPhoneField.inputmode"), function() {
                                        return i.variables.showOnlyPhoneNumberIn ? "numeric" : "text"
                                    }, function() {
                                        return i.variables.showOnlyPhoneNumberIn
                                    }),
                                    style: "font-size: var(--font-size-s);"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                inputType: 0,
                                mandatory: !1,
                                maxLength: 100,
                                onChange: u(function() {
                                    return Promise.resolve().then(function() {
                                        var f = typeof r != "undefined" && r !== null ? r.clone() : t.callContext().clone();
                                        return t.input_FieldValueOnChange$Action(t.callContext(f))
                                    })
                                }, "onChange"),
                                prompt: i.getCachedValue(n.getId("EmailOrPhoneField.Prompt"), function() {
                                    return i.variables.showOnlyPhoneNumberIn ? w.resolve(g.TranslationsService).getMessage("uKftAclNN0auba1skM3eBw#ValueExpression.-1980427613.1", "Enter phone number") : w.resolve(g.TranslationsService).getMessage("uKftAclNN0auba1skM3eBw#ValueExpression.-1563739715.1", "Email or phone (without country code)")
                                }, function() {
                                    return i.variables.showOnlyPhoneNumberIn
                                }),
                                style: i.getCachedValue(n.getId("EmailOrPhoneField.Style"), function() {
                                    return "form-control font-size-s " + (i.variables.errorMessageIn !== v.nullTextIdentifier() || i.variables.showLiveChatMessageIn ? "not-valid" : "")
                                }, function() {
                                    return i.variables.errorMessageIn
                                }, function() {
                                    return i.variables.showLiveChatMessageIn
                                }),
                                variable: i.createVariable(te.DataTypes.Text, i.variables.fieldValueVar, function(f) {
                                    i.variables.fieldValueVar = f
                                }),
                                _idProps: {
                                    service: n,
                                    name: "EmailOrPhoneField"
                                },
                                _widgetRecordProvider: d,
                                enabled_dataFetchStatus: m.calculateDataFetchStatus(i.variables._isVerifiedInDataFetchStatus),
                                prompt_dataFetchStatus: m.calculateDataFetchStatus(i.variables._showOnlyPhoneNumberInDataFetchStatus),
                                style_dataFetchStatus: m.calculateDataFetchStatus(i.variables._errorMessageInDataFetchStatus, i.variables._showLiveChatMessageInDataFetchStatus)
                            })]
                        })
                    },
                    _dependencies: [o(i.variables.showLiveChatMessageIn), o(i.variables.errorMessageIn), o(i.variables.showOnlyPhoneNumberIn), o(i.variables._showLiveChatMessageInDataFetchStatus), o(i.variables._errorMessageInDataFetchStatus), o(i.variables._showOnlyPhoneNumberInDataFetchStatus), o(i.variables._isVerifiedInDataFetchStatus), o(i.variables.isVerifiedIn), o(i.variables.fieldValueVar)]
                }), y.createElement(_, {
                    align: 0,
                    animate: !0,
                    visible: i.getCachedValue(n.getId("3pU5ZLMD+EeslBP80y6Vsw.Visible"), function() {
                        return i.variables.errorMessageIn !== v.nullTextIdentifier()
                    }, function() {
                        return i.variables.errorMessageIn
                    }),
                    _idProps: {
                        service: n,
                        uuid: "23"
                    },
                    _widgetRecordProvider: d,
                    visible_dataFetchStatus: m.calculateDataFetchStatus(i.variables._errorMessageInDataFetchStatus)
                }, y.createElement(D, {
                    style: "validation-message",
                    value: i.variables.errorMessageIn,
                    _idProps: {
                        service: n,
                        uuid: "24"
                    },
                    _widgetRecordProvider: d,
                    value_dataFetchStatus: m.calculateDataFetchStatus(i.variables._errorMessageInDataFetchStatus)
                })), y.createElement(_, {
                    align: 0,
                    animate: !0,
                    visible: i.variables.showLiveChatMessageIn,
                    _idProps: {
                        service: n,
                        uuid: "25"
                    },
                    _widgetRecordProvider: d,
                    visible_dataFetchStatus: m.calculateDataFetchStatus(i.variables._showLiveChatMessageInDataFetchStatus)
                }, y.createElement(D, {
                    style: "validation-message",
                    value: w.resolve(g.TranslationsService).getMessage("3H+knApaOUq4vlJ7sFt9uQ#ValueExpression.209072888.1", "We couldn't add this phone number. Contact us via "),
                    _idProps: {
                        service: n,
                        uuid: "26"
                    },
                    _widgetRecordProvider: d
                }), y.createElement(me, {
                    enabled: !0,
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    onClick: u(function() {
                        var f = typeof r != "undefined" && r !== null ? r.clone() : t.callContext().clone();
                        t.triggerLiveChat$Action(t.callContext(f))
                    }, "onClick"),
                    style: "live-chat-link cursor-pointer",
                    visible: !0,
                    _idProps: {
                        service: n,
                        uuid: "27"
                    },
                    _widgetRecordProvider: d
                }, y.createElement(Se, {
                    extendedProperties: {
                        style: "text-decoration: underline;"
                    },
                    style: "validation-message",
                    text: [$(s("8DOO6e9eBUS2uzKdHa5X3A#Value", "live chat"))],
                    _idProps: {
                        service: n,
                        uuid: "28"
                    },
                    _widgetRecordProvider: d
                })), y.createElement(D, {
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    style: "validation-message",
                    value: w.resolve(g.TranslationsService).getMessage("JLhSYEY2TUmS_4O3wm5jZQ#ValueExpression.1914659542.1", " for help."),
                    _idProps: {
                        service: n,
                        uuid: "29"
                    },
                    _widgetRecordProvider: d
                })))]
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: u(function() {
                return {
                    codeFunction: "EmailOrPhoneNumBlock",
                    functionKey: "fbce1e1d-4757-43b5-b890-8a752ce2f6d7",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.EmailOrPhoneNumBlock",
            modelFactory: _e,
            controllerFactory: Ae
        });
        return b.getCssDependencies = function() {
            return ["css/uae.Common.EmailOrPhoneNumBlock.css", "css/OutSystemsReactWidgets.css"]
        }, b.getJsDependencies = function() {
            return []
        }, b.getBlocks = function() {
            return [R, N, x, M]
        }, b
    }, "componentFactory"),
    Ft = Ne();
export {
    Ft as a
};