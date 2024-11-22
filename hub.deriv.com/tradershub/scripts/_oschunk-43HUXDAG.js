import {
    a as D
} from "./_oschunk-FCTT25EN.js";
import {
    a as I
} from "./_oschunk-Y45M2O2K.js";
import {
    a as s,
    d as _
} from "./_oschunk-27GDEXUT.js";
import {
    Pd as p,
    Qc as h,
    Ue as T
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as N
} from "./_oschunk-NTQBNJ73.js";
import {
    c as f
} from "./_oschunk-DVBKI63I.js";
var w = {
        "ShgNhbHOO0yw0oREmi8uGg#Value": "Pays de r\xE9sidence fiscale",
        "rCVIeWryX0mkEeuLZFiPaw#Value": "Suivant",
        "isWmNsmdLEW1wfFg_Hf_DA#Value": "Ceci est requis.",
        "xElRVABJckWYpqQKe3AYDw#Value": "Je confirme que mes informations fiscales sont exactes et compl\xE8tes.",
        "SDAz2eej7kKk2dlZUvZTQA#Value": "Num\xE9ro d'identification fiscale",
        "sIti02rdk0SUqtm_huV6CA#Value": "Pays de r\xE9sidence fiscale",
        "whfLQWHd4kWoMpsFqiCuJg#Value": "Passer",
        "p+_xQizsGk2ycU2im806yA#Value": "D\xE9tails de l'emploi",
        "0rK82E5ELUGWAt438LMshQ#Title": "D\xE9tails de l'emploi | Deriv",
        "0rK82E5ELUGWAt438LMshQ#TitleExpression.1571453000.1": "D\xE9tails de l'emploi | Deriv"
    },
    x = {
        "fr-FR": {
            translations: w,
            isRTL: !1
        }
    };

function O(d, b, R) {
    cacheTrackEvents.track({
        name: "ce_real_account_signup_form",
        properties: {
            action: "step_passed",
            step_num: 2,
            step_codename: "employment_details",
            form_name: "real_account_signup_form_outsystems"
        }
    })
}
f(O, "default");

function g(d, b, R) {
    cacheTrackEvents.track({
        name: "ce_real_account_signup_form",
        properties: {
            action: "step_passed",
            step_num: 2,
            step_codename: "employment_details",
            form_name: "real_account_signup_form_outsystems"
        }
    })
}
f(g, "default");

function k(d, b, R, t) {
    var l, y, a, m, A, E;
    let i = (a = (y = (l = JSON.parse(d.Validations)) == null ? void 0 : l.tin_validations) == null ? void 0 : y.invalid_patterns) != null ? a : [],
        e = (E = (A = (m = JSON.parse(d.Validations)) == null ? void 0 : m.tin_validations) == null ? void 0 : A.tin_format) != null ? E : [],
        o = {
            TaxResidenceCountry: d.TaxResidenceCountry,
            TIDNumber: d.TIDNumber,
            EmployementStatus: d.EmployementStatus,
            TaxIDConfirmation: d.TaxIDConfirmation
        },
        r = yup.object().shape({
            TaxResidenceCountry: yup.string().required("Tax residence country is required."),
            TIDNumber: yup.string().max(25, "Tax Identification Number can't be longer than 25 characters.").matches(/^(?!^$|\s+)[A-Za-z0-9.\/\s-]{0,25}$/, {
                excludeEmptyString: !0,
                message: "Only letters, numbers, space, hyphen, period, and forward slash are allowed."
            }).test("tin-format", "Tax identification number format is incorrect.", v => v ? i.length && i.some(C => RegExp(C).test(v)) ? !1 : e.length ? e.some(C => RegExp(C).test(v)) : !0 : !0),
            EmployementStatus: yup.string().required("Employment status is required."),
            TaxIDConfirmation: yup.bool().when("TIDNumber", (v, C) => v ? C.oneOf([!0], "This is required.").required("This is required.") : C)
        }),
        {
            errors: u,
            validFields: c
        } = validate(r, o);
    d.ValidationErrors = JSON.stringify(u), d.ValidFields = JSON.stringify(c)
}
f(k, "default");
var n = N; {
    let b = class b extends n.Controller.BaseViewController {
        constructor(t, i, e) {
            super(t, i, e, x);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "0ab39a42-0c62-4252-9c01-bb852186643d"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t);
                        var u = new n.DataTypes.VariableHolder,
                            c = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return c.value = n.SystemActions.listFilter(i.variables.residenceListVar, function(l) {
                                return s.getRealSignupTaxResidence() !== n.BuiltinFunctions.nullTextIdentifier() ? l.valueAttr === s.getRealSignupTaxResidence() : l.valueAttr === s.getSelectedResidence()
                            }, t), s.setRealSignupTaxResidenceLabel(c.value.filteredListOut.getCurrent(t.iterationContext).textAttr), s.setRealSignupTaxResidence(c.value.filteredListOut.getCurrent(t.iterationContext).valueAttr), i.flush(), _.tINValidations$Action(s.getRealSignupTaxResidence(), t).then(function(l) {
                                u.value = l
                            }).then(function() {
                                i.variables.tINValidationsResponseVar = u.value.responseOut
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _countryOfTaxResidenceSelectorOnClickCountry$Action() {
            return this.hasOwnProperty("__countryOfTaxResidenceSelectorOnClickCountry$Action") || (this.__countryOfTaxResidenceSelectorOnClickCountry$Action = function(t, i, e) {
                var o = this.model,
                    r = this.controller,
                    u = this.idService;
                return n.Logger.startActiveSpan("CountryOfTaxResidenceSelectorOnClickCountry", function(c) {
                    return c && (c.setAttribute("code.function", "CountryOfTaxResidenceSelectorOnClickCountry"), c.setAttribute("outsystems.function.key", "2f7d65eb-5ec0-4731-b1b6-4128cccdd09a"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        r.ensureControllerAlive("CountryOfTaxResidenceSelectorOnClickCountry"), e = r.callContext(e);
                        var l = new n.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("tradershub.RealAccountCreationMobile.EmploymentDetailsForm.CountryOfTaxResidenceSelectorOnClickCountry$vars")));
                        l.value.residenceInLocal = t, l.value.labelInLocal = i;
                        var y = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return s.setRealSignupTaxResidence(l.value.residenceInLocal), s.setRealSignupTaxResidenceLabel(l.value.labelInLocal), o.variables.isCountrySelectorPopupOpenVar = !1, o.flush(), _.tINValidations$Action(s.getRealSignupTaxResidence(), e).then(function(a) {
                                y.value = a
                            }).then(function() {
                                o.variables.tINValidationsResponseVar = y.value.responseOut
                            })
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__countryOfTaxResidenceSelectorOnClickCountry$Action
        }
        set _countryOfTaxResidenceSelectorOnClickCountry$Action(t) {
            this.__countryOfTaxResidenceSelectorOnClickCountry$Action = t
        }
        get _openCountrySelectorPopup$Action() {
            return this.hasOwnProperty("__openCountrySelectorPopup$Action") || (this.__openCountrySelectorPopup$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("OpenCountrySelectorPopup", function(r) {
                    r && (r.setAttribute("code.function", "OpenCountrySelectorPopup"), r.setAttribute("outsystems.function.key", "a375951f-c3fd-471e-9f49-c2e22b3946a7"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OpenCountrySelectorPopup"), t = e.callContext(t), i.variables.isCountrySelectorPopupOpenVar = !0
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__openCountrySelectorPopup$Action
        }
        set _openCountrySelectorPopup$Action(t) {
            this.__openCountrySelectorPopup$Action = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "c029f176-d763-46bc-b25b-973e09639be5"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), t = e.callContext(t);
                        var u = new n.DataTypes.VariableHolder(new(n.Controller.BaseController.getJSONDeserializeOutputType(p)));
                        u.value.dataOut = n.JSONUtils.deserializeFromJSON(s.getRawResidenceListResponse(), p, !1), i.variables.residenceListVar = u.value.dataOut.residence_listAttr
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        get _skipOnClick$Action() {
            return this.hasOwnProperty("__skipOnClick$Action") || (this.__skipOnClick$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("SkipOnClick", function(r) {
                    r && (r.setAttribute("code.function", "SkipOnClick"), r.setAttribute("outsystems.function.key", "c8f8cdab-fbe3-4dad-ad53-67a755cd6a86"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return e.ensureControllerAlive("SkipOnClick"), t = e.callContext(t), n.Logger.startActiveSpan("RudderStack", function(u) {
                            u && (u.setAttribute("code.function", "RudderStack"), u.setAttribute("outsystems.function.key", "306e05f0-4b1d-4e6c-afb9-380086dcb2be"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(O, "RudderStack", "SkipOnClick", null, function(c) {}, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), s.setRealSignupTIDNumber(n.BuiltinFunctions.nullTextIdentifier()), s.setRealSignupTaxIDConfirmation(!1), n.Navigation.navigateTo(n.Navigation.generateScreenURL("tradershub", "address-details", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__skipOnClick$Action
        }
        set _skipOnClick$Action(t) {
            this.__skipOnClick$Action = t
        }
        get _saveOnClick$Action() {
            return this.hasOwnProperty("__saveOnClick$Action") || (this.__saveOnClick$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("SaveOnClick", function(r) {
                    r && (r.setAttribute("code.function", "SaveOnClick"), r.setAttribute("outsystems.function.key", "d7d147a9-6722-40b0-a1ef-6d6f6faf5ac0"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("SaveOnClick"), t = e.callContext(t);
                        var u = new n.DataTypes.VariableHolder,
                            c = new n.DataTypes.VariableHolder(new n.DataTypes.JSONSerializeOutputType),
                            l = new n.DataTypes.VariableHolder(new(n.Controller.BaseController.getJSONDeserializeOutputType(h))),
                            y = new n.DataTypes.VariableHolder(new(n.Controller.BaseController.getJSONDeserializeOutputType(T)));
                        if (c.value.jSONOut = n.JSONUtils.serializeToJSON(i.variables.tINValidationsResponseVar, !1, !1), u.value = n.Logger.startActiveSpan("Validate", function(a) {
                                a && (a.setAttribute("code.function", "Validate"), a.setAttribute("outsystems.function.key", "67bcd104-b248-4a04-9756-69be0f8059d8"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return e.safeExecuteJSNode(k, "Validate", "SaveOnClick", {
                                        EmployementStatus: n.DataConversion.JSNodeParamConverter.to(s.getRealSignupEmployementStatus(), n.DataTypes.DataTypes.Text),
                                        TIDNumber: n.DataConversion.JSNodeParamConverter.to(s.getRealSignupTIDNumber(), n.DataTypes.DataTypes.Text),
                                        Validations: n.DataConversion.JSNodeParamConverter.to(c.value.jSONOut, n.DataTypes.DataTypes.Text),
                                        TaxResidenceCountry: n.DataConversion.JSNodeParamConverter.to(s.getRealSignupTaxResidence() !== "" ? s.getRealSignupTaxResidence() : s.getSelectedResidence(), n.DataTypes.DataTypes.Text),
                                        TaxIDConfirmation: n.DataConversion.JSNodeParamConverter.to(s.getRealSignupTaxIDConfirmation() ? "True" : "False", n.DataTypes.DataTypes.Text),
                                        ValidationErrors: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text),
                                        ValidFields: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text)
                                    }, function(m) {
                                        var A = new(e.constructor.getVariableGroupType("tradershub.RealAccountCreationMobile.EmploymentDetailsForm.SaveOnClick$validateJSResult"));
                                        return A.validationErrorsOut = n.DataConversion.JSNodeParamConverter.from(m.ValidationErrors, n.DataTypes.DataTypes.Text), A.validFieldsOut = n.DataConversion.JSNodeParamConverter.from(m.ValidFields, n.DataTypes.DataTypes.Text), A
                                    }, {}, {})
                                } finally {
                                    a && a.end()
                                }
                            }, 1), l.value.dataOut = n.JSONUtils.deserializeFromJSON(u.value.validationErrorsOut, h, !1), y.value.dataOut = n.JSONUtils.deserializeFromJSON(u.value.validFieldsOut, T, !1), i.widgets.get(o.getId("Input_TIDNumber")).validAttr = y.value.dataOut.tIDNumberAttr, i.widgets.get(o.getId("Input_TIDNumber")).validationMessageAttr = l.value.dataOut.tIDNumberAttr, i.widgets.get(o.getId("TaxIDConfirmationCheckbox")).validAttr = y.value.dataOut.taxIDConfirmationAttr, i.widgets.get(o.getId("TaxIDConfirmationCheckbox")).validationMessageAttr = n.BuiltinFunctions.nullTextIdentifier(), i.widgets.get(o.getId("Form")).validAttr) return n.Logger.startActiveSpan("RudderStack", function(a) {
                            a && (a.setAttribute("code.function", "RudderStack"), a.setAttribute("outsystems.function.key", "3650942f-9af4-4a48-892b-bd9416a46f37"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(g, "RudderStack", "SaveOnClick", null, function(m) {}, {}, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1), s.setRealSignupNoTaxInformation(!1), s.setRealSignupPassedStepCount(s.getRealSignupIsIDVSupported() ? 4 : 3), n.Navigation.navigateTo(n.Navigation.generateScreenURL("tradershub", "address-details", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__saveOnClick$Action
        }
        set _saveOnClick$Action(t) {
            this.__saveOnClick$Action = t
        }
        get _closeStateSelectionPopupOnClick$Action() {
            return this.hasOwnProperty("__closeStateSelectionPopupOnClick$Action") || (this.__closeStateSelectionPopupOnClick$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("CloseStateSelectionPopupOnClick", function(r) {
                    r && (r.setAttribute("code.function", "CloseStateSelectionPopupOnClick"), r.setAttribute("outsystems.function.key", "f8f88e84-eef4-4570-b2f3-35774583b45e"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("CloseStateSelectionPopupOnClick"), t = e.callContext(t), i.variables.isCountrySelectorPopupOpenVar = !1
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__closeStateSelectionPopupOnClick$Action
        }
        set _closeStateSelectionPopupOnClick$Action(t) {
            this.__closeStateSelectionPopupOnClick$Action = t
        }
        onReady$Action(t) {
            var i = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "0ab39a42-0c62-4252-9c01-bb852186643d"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onReady$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        countryOfTaxResidenceSelectorOnClickCountry$Action(t, i, e) {
            var o = this.controller;
            return n.Logger.startActiveSpan("CountryOfTaxResidenceSelectorOnClickCountry__proxy", function(r) {
                return r && (r.setAttribute("code.function", "CountryOfTaxResidenceSelectorOnClickCountry"), r.setAttribute("outsystems.function.key", "2f7d65eb-5ec0-4731-b1b6-4128cccdd09a"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._countryOfTaxResidenceSelectorOnClickCountry$Action, e, t, i)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        openCountrySelectorPopup$Action(t) {
            var i = this.controller;
            return n.Logger.startActiveSpan("OpenCountrySelectorPopup__proxy", function(e) {
                e && (e.setAttribute("code.function", "OpenCountrySelectorPopup"), e.setAttribute("outsystems.function.key", "a375951f-c3fd-471e-9f49-c2e22b3946a7"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._openCountrySelectorPopup$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onInitialize$Action(t) {
            var i = this.controller;
            return n.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "c029f176-d763-46bc-b25b-973e09639be5"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onInitialize$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        skipOnClick$Action(t) {
            var i = this.controller;
            return n.Logger.startActiveSpan("SkipOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "SkipOnClick"), e.setAttribute("outsystems.function.key", "c8f8cdab-fbe3-4dad-ad53-67a755cd6a86"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._skipOnClick$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        saveOnClick$Action(t) {
            var i = this.controller;
            return n.Logger.startActiveSpan("SaveOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "SaveOnClick"), e.setAttribute("outsystems.function.key", "d7d147a9-6722-40b0-a1ef-6d6f6faf5ac0"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._saveOnClick$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        closeStateSelectionPopupOnClick$Action(t) {
            var i = this.controller;
            return n.Logger.startActiveSpan("CloseStateSelectionPopupOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "CloseStateSelectionPopupOnClick"), e.setAttribute("outsystems.function.key", "f8f88e84-eef4-4570-b2f3-35774583b45e"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._closeStateSelectionPopupOnClick$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(t) {
                var i = this.controller,
                    e = this.model,
                    o = this.idService;
                return i.onInitialize$Action(t)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var i = this.controller,
                    e = this.model,
                    o = this.idService;
                return i.onReady$Action(t)
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
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return D.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return _.defaultTimeout
        }
    };
    f(b, "ControllerInner");
    let d = b;
    S = d, S.registerVariableGroupType("tradershub.RealAccountCreationMobile.EmploymentDetailsForm.CountryOfTaxResidenceSelectorOnClickCountry$vars", [{
        name: "Residence",
        attrName: "residenceInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: f(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Label",
        attrName: "labelInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: f(function() {
            return ""
        }, "defaultValue")
    }]), S.registerVariableGroupType("tradershub.RealAccountCreationMobile.EmploymentDetailsForm.SaveOnClick$validateJSResult", [{
        name: "ValidationErrors",
        attrName: "validationErrorsOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: f(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "ValidFields",
        attrName: "validFieldsOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: f(function() {
            return ""
        }, "defaultValue")
    }])
}
var S, Z = new n.Controller.ControllerFactory(S, I);
export {
    Z as a
};