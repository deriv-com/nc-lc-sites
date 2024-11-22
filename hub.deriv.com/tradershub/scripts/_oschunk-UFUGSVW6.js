import {
    a as x
} from "./_oschunk-ILTRYJXV.js";
import {
    a as E
} from "./_oschunk-Y45M2O2K.js";
import {
    a,
    d as g
} from "./_oschunk-27GDEXUT.js";
import {
    a as R
} from "./_oschunk-D2MH3QEK.js";
import {
    Df as w,
    Ef as T,
    Pd as C,
    Qc as S,
    Ue as p
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as N
} from "./_oschunk-NTQBNJ73.js";
import {
    c as m
} from "./_oschunk-DVBKI63I.js";
var L = {
        "wX+DwyzsU0W+0GXXbiOMiQ#Value": "Suivant",
        "ACqa4GSE9US9jN0w8J0CqQ#Value": "Cela est requis.",
        "GPnJGrYvDkSxDs3mRu7vfQ#Value": "Je confirme que mes informations fiscales sont exactes et compl\xE8tes.",
        "AocUpANsh0W_CWSiruK04Q#Value": "Num\xE9ro d'identification fiscale",
        "lB26u5rlDUi74ywSgRgf4g#Value": "Pays de r\xE9sidence fiscale",
        "2jh9BaauS0u3Lm1QnLKoaQ#Value": "Je n'ai pas de num\xE9ro d'identification fiscale.",
        "5SP7yQndiUK8ROjQz1PMNQ#Value": "Statut d'emploi",
        "29QwoSAOyU+9xckaXcvnVw#Title": "D\xE9tails de l'emploi | Deriv",
        "29QwoSAOyU+9xckaXcvnVw#TitleExpression.1571453000.1": "D\xE9tails de l'emploi | Deriv"
    },
    $ = {
        "fr-FR": {
            translations: L,
            isRTL: !1
        }
    };

function O(c, A, k, n) {
    var u, f, l, y, b, I;
    let r = (l = (f = (u = JSON.parse(c.Validations)) == null ? void 0 : u.tin_validations) == null ? void 0 : f.invalid_patterns) != null ? l : [],
        e = (I = (b = (y = JSON.parse(c.Validations)) == null ? void 0 : y.tin_validations) == null ? void 0 : b.tin_format) != null ? I : [],
        o = {
            TaxResidenceCountry: c.TaxResidenceCountry,
            TIDNumber: c.TIDNumber,
            EmployementStatus: c.EmployementStatus,
            TaxIDConfirmation: c.TaxIDConfirmation
        },
        i = yup.object().shape({
            TaxResidenceCountry: yup.string().required("Tax residence country is required."),
            TIDNumber: yup.string().max(25, "Tax Identification Number can't be longer than 25 characters.").matches(/^(?!^$|\s+)[A-Za-z0-9.\/\s-]{0,25}$/, {
                excludeEmptyString: !0,
                message: "Only letters, numbers, space, hyphen, period, and forward slash are allowed."
            }).test("tin-format", "Tax identification number format is incorrect.", v => v ? r.length && r.some(h => RegExp(h).test(v)) ? !1 : e.length ? e.some(h => RegExp(h).test(v)) : !0 : !0),
            EmployementStatus: yup.string().required("Employment status is required."),
            TaxIDConfirmation: yup.bool().when("TIDNumber", (v, h) => v ? h.oneOf([!0], "This is required.").required("This is required.") : h)
        }),
        {
            errors: s,
            validFields: d
        } = validate(i, o);
    c.ValidationErrors = JSON.stringify(s), c.ValidFields = JSON.stringify(d)
}
m(O, "default");

function D(c, A, k) {
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
m(D, "default");
var t = N; {
    let A = class A extends t.Controller.BaseViewController {
        constructor(n, r, e) {
            super(n, r, e, $);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(n) {
            this._dataFetchActionNames = n
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(n) {
                var r = this.model,
                    e = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "12b91ec0-2b97-4a7b-850b-4422e6a0e893"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), n = e.callContext(n);
                        var s = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(C)));
                        a.setRealSignupCurrentStep(a.getRealSignupIsIDVSupported() ? 4 : 3), r.variables.isLoadingVar = !0, R.isPhone$Action(n).isPhoneOut || (s.value.dataOut = t.JSONUtils.deserializeFromJSON(a.getRawResidenceListResponse(), C, !1), r.variables.residenceListVar = t.DataConversion.JSConversions.typeConvertRecordList(s.value.dataOut.residence_listAttr, new w, function(d, u) {
                            return u.valueAttr = d.valueAttr, u.textAttr = d.textAttr, u
                        }))
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(n) {
            this.__onInitialize$Action = n
        }
        get _noTaxIDNumberAvailableOnChange$Action() {
            return this.hasOwnProperty("__noTaxIDNumberAvailableOnChange$Action") || (this.__noTaxIDNumberAvailableOnChange$Action = function(n) {
                var r = this.model,
                    e = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("NoTaxIDNumberAvailableOnChange", function(i) {
                    i && (i.setAttribute("code.function", "NoTaxIDNumberAvailableOnChange"), i.setAttribute("outsystems.function.key", "25393702-4014-47c0-88a1-cbd8414c85ea"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("NoTaxIDNumberAvailableOnChange"), n = e.callContext(n), a.setRealSignupTIDNumber(t.BuiltinFunctions.nullTextIdentifier()), a.setRealSignupTaxIDConfirmation(!1), r.widgets.get(o.getId("Input_TIDNumber")).validationMessageAttr = t.BuiltinFunctions.nullTextIdentifier()
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__noTaxIDNumberAvailableOnChange$Action
        }
        set _noTaxIDNumberAvailableOnChange$Action(n) {
            this.__noTaxIDNumberAvailableOnChange$Action = n
        }
        get _employementStatusDropdownOnChange$Action() {
            return this.hasOwnProperty("__employementStatusDropdownOnChange$Action") || (this.__employementStatusDropdownOnChange$Action = function(n, r) {
                var e = this.model,
                    o = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("EmployementStatusDropdownOnChange", function(s) {
                    s && (s.setAttribute("code.function", "EmployementStatusDropdownOnChange"), s.setAttribute("outsystems.function.key", "5c3fe63a-7063-4d2f-a968-f844c93ed07a"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("EmployementStatusDropdownOnChange"), r = o.callContext(r);
                        var d = new t.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.RealAccountCreation.EmploymentDetails.EmployementStatusDropdownOnChange$vars")));
                        d.value.onReadyInLocal = n;
                        var u = new t.DataTypes.VariableHolder;
                        u.value = t.SystemActions.listIndexOf(e.variables.tINValidationsResponseVar.tin_validationsAttr.tin_employment_status_bypassAttr, function(f) {
                            return a.getRealSignupEmployementStatus() === f
                        }, r), u.value.positionOut > -1 ? (a.setRealSignupNoTaxInformation(a.getRealSignupNoTaxInformation() && d.value.onReadyInLocal ? a.getRealSignupNoTaxInformation() : !1), e.variables.canBypassTINStatusVar = !0) : (e.variables.canBypassTINStatusVar = !1, a.setRealSignupNoTaxInformation(!1))
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__employementStatusDropdownOnChange$Action
        }
        set _employementStatusDropdownOnChange$Action(n) {
            this.__employementStatusDropdownOnChange$Action = n
        }
        get _saveOnClick$Action() {
            return this.hasOwnProperty("__saveOnClick$Action") || (this.__saveOnClick$Action = function(n) {
                var r = this.model,
                    e = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("SaveOnClick", function(i) {
                    i && (i.setAttribute("code.function", "SaveOnClick"), i.setAttribute("outsystems.function.key", "967368aa-7881-4cf8-adf0-ca95a73bbf28"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("SaveOnClick"), n = e.callContext(n);
                        var s = new t.DataTypes.VariableHolder,
                            d = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            u = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(p))),
                            f = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(S)));
                        if (d.value.jSONOut = t.JSONUtils.serializeToJSON(r.variables.tINValidationsResponseVar, !1, !1), s.value = t.Logger.startActiveSpan("Validate", function(l) {
                                l && (l.setAttribute("code.function", "Validate"), l.setAttribute("outsystems.function.key", "0959b7e9-6afc-491f-9dd1-505db42f50fb"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return e.safeExecuteJSNode(O, "Validate", "SaveOnClick", {
                                        TaxResidenceCountry: t.DataConversion.JSNodeParamConverter.to(a.getRealSignupTaxResidence() !== "" ? a.getRealSignupTaxResidence() : a.getSelectedResidence(), t.DataTypes.DataTypes.Text),
                                        TIDNumber: t.DataConversion.JSNodeParamConverter.to(a.getRealSignupTIDNumber(), t.DataTypes.DataTypes.Text),
                                        TaxIDConfirmation: t.DataConversion.JSNodeParamConverter.to(a.getRealSignupTaxIDConfirmation() ? "True" : "False", t.DataTypes.DataTypes.Text),
                                        Validations: t.DataConversion.JSNodeParamConverter.to(d.value.jSONOut, t.DataTypes.DataTypes.Text),
                                        EmployementStatus: t.DataConversion.JSNodeParamConverter.to(a.getRealSignupEmployementStatus(), t.DataTypes.DataTypes.Text),
                                        ValidationErrors: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                        ValidFields: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                    }, function(y) {
                                        var b = new(e.constructor.getVariableGroupType("tradershub.RealAccountCreation.EmploymentDetails.SaveOnClick$validateJSResult"));
                                        return b.validationErrorsOut = t.DataConversion.JSNodeParamConverter.from(y.ValidationErrors, t.DataTypes.DataTypes.Text), b.validFieldsOut = t.DataConversion.JSNodeParamConverter.from(y.ValidFields, t.DataTypes.DataTypes.Text), b
                                    }, {}, {})
                                } finally {
                                    l && l.end()
                                }
                            }, 1), f.value.dataOut = t.JSONUtils.deserializeFromJSON(s.value.validationErrorsOut, S, !1), u.value.dataOut = t.JSONUtils.deserializeFromJSON(s.value.validFieldsOut, p, !1), r.widgets.get(o.getId("EmployementStatusDropdown")).validAttr = u.value.dataOut.employementStatusAttr, r.widgets.get(o.getId("EmployementStatusDropdown")).validationMessageAttr = f.value.dataOut.employementStatusAttr, r.widgets.get(o.getId("Input_TIDNumber")).validAttr = u.value.dataOut.tIDNumberAttr, r.widgets.get(o.getId("Input_TIDNumber")).validationMessageAttr = f.value.dataOut.tIDNumberAttr, r.widgets.get(o.getId("TaxIDConfirmationCheckbox")).validAttr = u.value.dataOut.taxIDConfirmationAttr, r.widgets.get(o.getId("TaxIDConfirmationCheckbox")).validationMessageAttr = t.BuiltinFunctions.nullTextIdentifier(), r.widgets.get(o.getId("Form")).validAttr) return t.Logger.startActiveSpan("RudderStack", function(l) {
                            l && (l.setAttribute("code.function", "RudderStack"), l.setAttribute("outsystems.function.key", "0e6d4c53-6f1f-4008-b8f6-c2c38220b9d8"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(D, "RudderStack", "SaveOnClick", null, function(y) {}, {}, {})
                            } finally {
                                l && l.end()
                            }
                        }, 1), a.setRealSignupPassedStepCount(a.getRealSignupIsIDVSupported() ? 4 : 3), t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "address-details", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), n, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__saveOnClick$Action
        }
        set _saveOnClick$Action(n) {
            this.__saveOnClick$Action = n
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(n) {
                var r = this.model,
                    e = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("OnReady", function(i) {
                    return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "b63b795c-2759-4212-8294-793275c1fd54"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        e.ensureControllerAlive("OnReady"), n = e.callContext(n);
                        var s = new t.DataTypes.VariableHolder,
                            d = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return r.flush(), g.fetchEmploymentStatusList$Action(n).then(function(u) {
                                s.value = u
                            }).then(function() {
                                return a.setRealSignupTaxResidence(a.getRealSignupTaxResidence() !== t.BuiltinFunctions.nullTextIdentifier() ? a.getRealSignupTaxResidence() : a.getSelectedResidence()), r.variables.employmentStatusLIstVar = s.value.employmentStatusListOut, r.flush(), g.tINValidations$Action(a.getRealSignupTaxResidence(), n).then(function(u) {
                                    d.value = u
                                })
                            }).then(function() {
                                r.variables.tINValidationsResponseVar = d.value.responseOut
                            }).then(function() {
                                a.getRealSignupEmployementStatus() !== t.BuiltinFunctions.nullTextIdentifier() && e._employementStatusDropdownOnChange$Action(!0, n), r.variables.isLoadingVar = !1
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(n) {
            this.__onReady$Action = n
        }
        get _dropdownSearchOnChanged$Action() {
            return this.hasOwnProperty("__dropdownSearchOnChanged$Action") || (this.__dropdownSearchOnChanged$Action = function(n, r) {
                var e = this.model,
                    o = this.controller,
                    i = this.idService;
                return t.Logger.startActiveSpan("DropdownSearchOnChanged", function(s) {
                    return s && (s.setAttribute("code.function", "DropdownSearchOnChanged"), s.setAttribute("outsystems.function.key", "de806b75-d72c-4699-92e5-0f8164bb29fe"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        o.ensureControllerAlive("DropdownSearchOnChanged"), r = o.callContext(r);
                        var d = new t.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.RealAccountCreation.EmploymentDetails.DropdownSearchOnChanged$vars")));
                        d.value.selectedOptionListInLocal = n.clone();
                        var u = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return a.setRealSignupTaxResidenceLabel(d.value.selectedOptionListInLocal.getCurrent(r.iterationContext).labelAttr), a.setRealSignupTaxResidence(d.value.selectedOptionListInLocal.getCurrent(r.iterationContext).valueAttr), e.flush(), g.tINValidations$Action(a.getRealSignupTaxResidence(), r).then(function(f) {
                                u.value = f
                            }).then(function() {
                                e.variables.tINValidationsResponseVar = u.value.responseOut
                            }).then(function() {
                                a.getRealSignupEmployementStatus() !== t.BuiltinFunctions.nullTextIdentifier() && o._employementStatusDropdownOnChange$Action(!1, r), e.variables.isLoadingVar = !1
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__dropdownSearchOnChanged$Action
        }
        set _dropdownSearchOnChanged$Action(n) {
            this.__dropdownSearchOnChanged$Action = n
        }
        get _input_TIDNumberOnChange$Action() {
            return this.hasOwnProperty("__input_TIDNumberOnChange$Action") || (this.__input_TIDNumberOnChange$Action = function(n) {
                var r = this.model,
                    e = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("Input_TIDNumberOnChange", function(i) {
                    i && (i.setAttribute("code.function", "Input_TIDNumberOnChange"), i.setAttribute("outsystems.function.key", "ed32e0ce-3aa2-46f9-a6c3-1e676288e816"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("Input_TIDNumberOnChange"), n = e.callContext(n), a.getRealSignupTIDNumber() === t.BuiltinFunctions.nullTextIdentifier() && a.setRealSignupTaxIDConfirmation(!1)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__input_TIDNumberOnChange$Action
        }
        set _input_TIDNumberOnChange$Action(n) {
            this.__input_TIDNumberOnChange$Action = n
        }
        onInitialize$Action(n) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "12b91ec0-2b97-4a7b-850b-4422e6a0e893"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, n)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        noTaxIDNumberAvailableOnChange$Action(n) {
            var r = this.controller;
            return t.Logger.startActiveSpan("NoTaxIDNumberAvailableOnChange__proxy", function(e) {
                e && (e.setAttribute("code.function", "NoTaxIDNumberAvailableOnChange"), e.setAttribute("outsystems.function.key", "25393702-4014-47c0-88a1-cbd8414c85ea"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._noTaxIDNumberAvailableOnChange$Action, n)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        employementStatusDropdownOnChange$Action(n, r) {
            var e = this.controller;
            return t.Logger.startActiveSpan("EmployementStatusDropdownOnChange__proxy", function(o) {
                o && (o.setAttribute("code.function", "EmployementStatusDropdownOnChange"), o.setAttribute("outsystems.function.key", "5c3fe63a-7063-4d2f-a968-f844c93ed07a"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._employementStatusDropdownOnChange$Action, r, n)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        saveOnClick$Action(n) {
            var r = this.controller;
            return t.Logger.startActiveSpan("SaveOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "SaveOnClick"), e.setAttribute("outsystems.function.key", "967368aa-7881-4cf8-adf0-ca95a73bbf28"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._saveOnClick$Action, n)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(n) {
            var r = this.controller;
            return t.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "b63b795c-2759-4212-8294-793275c1fd54"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, n)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        dropdownSearchOnChanged$Action(n, r) {
            var e = this.controller;
            return t.Logger.startActiveSpan("DropdownSearchOnChanged__proxy", function(o) {
                return o && (o.setAttribute("code.function", "DropdownSearchOnChanged"), o.setAttribute("outsystems.function.key", "de806b75-d72c-4699-92e5-0f8164bb29fe"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._dropdownSearchOnChanged$Action, r, n)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        input_TIDNumberOnChange$Action(n) {
            var r = this.controller;
            return t.Logger.startActiveSpan("Input_TIDNumberOnChange__proxy", function(e) {
                e && (e.setAttribute("code.function", "Input_TIDNumberOnChange"), e.setAttribute("outsystems.function.key", "ed32e0ce-3aa2-46f9-a6c3-1e676288e816"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._input_TIDNumberOnChange$Action, n)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(n) {
                var r = this.controller,
                    e = this.model,
                    o = this.idService;
                return r.onInitialize$Action(n)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(n) {
            this._onInitializeEventHandler = n
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(n) {
                var r = this.controller,
                    e = this.model,
                    o = this.idService;
                return r.onReady$Action(n)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(n) {
            this._onReadyEventHandler = n
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(n) {
            this._onRenderEventHandler = n
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(n) {
            this._onDestroyEventHandler = n
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(n) {
            this._onParametersChangedEventHandler = n
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(n) {
                return x.default.handleError(n, this.callContext())
            }), this._handleError
        }
        set handleError(n) {
            this._handleError = n
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return g.defaultTimeout
        }
    };
    m(A, "ControllerInner");
    let c = A;
    _ = c, _.registerVariableGroupType("tradershub.RealAccountCreation.EmploymentDetails.EmployementStatusDropdownOnChange$vars", [{
        name: "OnReady",
        attrName: "onReadyInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Boolean,
        defaultValue: m(function() {
            return !1
        }, "defaultValue")
    }]), _.registerVariableGroupType("tradershub.RealAccountCreation.EmploymentDetails.SaveOnClick$validateJSResult", [{
        name: "ValidationErrors",
        attrName: "validationErrorsOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: m(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "ValidFields",
        attrName: "validFieldsOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: m(function() {
            return ""
        }, "defaultValue")
    }]), _.registerVariableGroupType("tradershub.RealAccountCreation.EmploymentDetails.DropdownSearchOnChanged$vars", [{
        name: "SelectedOptionList",
        attrName: "selectedOptionListInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.RecordList,
        defaultValue: m(function() {
            return new T
        }, "defaultValue"),
        complexType: T
    }])
}
var _, Z = new t.Controller.ControllerFactory(_, E);
export {
    Z as a
};