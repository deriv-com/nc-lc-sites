import {
    a as k
} from "./_oschunk-ILTRYJXV.js";
import {
    a as R
} from "./_oschunk-Y45M2O2K.js";
import {
    a as u,
    d as O
} from "./_oschunk-27GDEXUT.js";
import {
    a as h
} from "./_oschunk-D2MH3QEK.js";
import {
    Ef as m,
    Pd as C,
    yd as S,
    yf as _
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as P
} from "./_oschunk-NTQBNJ73.js";
import {
    c as y
} from "./_oschunk-DVBKI63I.js";
var N = {
        "4HG04M3yyUCexTUnbew7iQ#Value": "Lieu de naissance",
        "+k9kMWO1RUGw6xs5GGMd3A#Value": "Suivant",
        "PIW+CcE_v0K9LPp3h3klkA#Value": "Object du compte",
        "A7lrn7aDcUmg6dqEz_HCsA#Value": "Num\xE9ro de t\xE9l\xE9phone",
        "EHR40idFyUC47faET5+B_w#Value": "Lieu de naissance",
        "qDHs1fw250SJ4B1s+ZEOzA#Title": "D\xE9tails personnels | Deriv",
        "qDHs1fw250SJ4B1s+ZEOzA#TitleExpression.-545367396.1": "D\xE9tails personnels | Deriv"
    },
    w = {
        "fr-FR": {
            translations: N,
            isRTL: !1
        }
    };

function g(f, A, E) {
    cacheTrackEvents.track({
        name: "ce_real_account_signup_form",
        properties: {
            action: "step_passed",
            step_num: f.IsDesktop().IsDesktop ? 1 : .75,
            step_codename: f.IsDesktop().IsDesktop ? "personal_details" : "personal_details_3",
            form_name: "real_account_signup_form_outsystems"
        }
    })
}
y(g, "default");

function T(f, A, E, e) {
    function o(...d) {
        let [a, ...b] = d;
        return b.reduce((I, D) => I.concat(D), a)
    }
    y(o, "mergeSchema");
    let t = {
        PlaceOfBirth: f.PlaceOfBirth,
        Phone: f.Phone
    };
    f.IsDesktop && (t.AccountOpeningReason = f.AccountOpeningReason);
    let i = /^\+\d{9,20}$/,
        n = yup.object().shape({
            PlaceOfBirth: yup.string().required("Place of birth is required."),
            Phone: yup.string().trim().required("Phone number is required.").matches(i, "Enter 9-20 digits, starting with '+'.")
        }),
        l = yup.object().shape({
            AccountOpeningReason: yup.string().required("Account purpose is required.")
        }),
        {
            errors: s,
            validFields: c
        } = validate(f.IsDesktop ? o(n, l) : n, t);
    f.ValidationErrors = JSON.stringify(s), f.ValidFields = JSON.stringify(c)
}
y(T, "default");
var r = P; {
    let A = class A extends r.Controller.BaseViewController {
        constructor(e, o, t) {
            super(e, o, t, w);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _openCountrySelectorPopup$Action() {
            return this.hasOwnProperty("__openCountrySelectorPopup$Action") || (this.__openCountrySelectorPopup$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("OpenCountrySelectorPopup", function(n) {
                    n && (n.setAttribute("code.function", "OpenCountrySelectorPopup"), n.setAttribute("outsystems.function.key", "194280fd-32ba-4e31-b25f-157e7c2f87fa"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OpenCountrySelectorPopup"), e = t.callContext(e), o.variables.isCountrySelectorPopupOpenVar = !0
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__openCountrySelectorPopup$Action
        }
        set _openCountrySelectorPopup$Action(e) {
            this.__openCountrySelectorPopup$Action = e
        }
        get _dropdownSearchOnChanged$Action() {
            return this.hasOwnProperty("__dropdownSearchOnChanged$Action") || (this.__dropdownSearchOnChanged$Action = function(e, o) {
                var t = this.model,
                    i = this.controller,
                    n = this.idService;
                return r.Logger.startActiveSpan("DropdownSearchOnChanged", function(l) {
                    l && (l.setAttribute("code.function", "DropdownSearchOnChanged"), l.setAttribute("outsystems.function.key", "34ea8ac3-6502-4236-b1d2-e31d6acb6c5e"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("DropdownSearchOnChanged"), o = i.callContext(o);
                        var s = new r.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("tradershub.RealAccountCreation.PersonalDetailsAdditional.DropdownSearchOnChanged$vars")));
                        s.value.selectedOptionListInLocal = e.clone();
                        var c = new r.DataTypes.VariableHolder;
                        c.value = r.SystemActions.listFilter(t.variables.residenceListVar, function(d) {
                            return d.valueAttr === s.value.selectedOptionListInLocal.getCurrent(o.iterationContext).valueAttr
                        }, o), t.variables.selectedPlaceOfBirth_MobileVar = s.value.selectedOptionListInLocal.getCurrent(o.iterationContext).labelAttr, t.variables.isCountrySelectorPopupOpenVar = !1, u.setRealSignupPlaceOfBirth(s.value.selectedOptionListInLocal.getCurrent(o.iterationContext).valueAttr), u.setRealSignupPhone(r.BuiltinFunctions.length(u.getRealSignupPhone()) > 1 ? u.getRealSignupPhone() : "+" + c.value.filteredListOut.getCurrent(o.iterationContext).phone_iddAttr)
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__dropdownSearchOnChanged$Action
        }
        set _dropdownSearchOnChanged$Action(e) {
            this.__dropdownSearchOnChanged$Action = e
        }
        get _saveOnClick$Action() {
            return this.hasOwnProperty("__saveOnClick$Action") || (this.__saveOnClick$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("SaveOnClick", function(n) {
                    n && (n.setAttribute("code.function", "SaveOnClick"), n.setAttribute("outsystems.function.key", "43df2115-a17d-4a23-8e9e-be11d81eebab"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("SaveOnClick"), e = t.callContext(e);
                        var l = new r.DataTypes.VariableHolder,
                            s = new r.DataTypes.VariableHolder,
                            c = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(_))),
                            d = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(S)));
                        if (s.value = r.Logger.startActiveSpan("Validate", function(a) {
                                a && (a.setAttribute("code.function", "Validate"), a.setAttribute("outsystems.function.key", "a85d97fa-173b-418c-87ad-f3731134858e"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(T, "Validate", "SaveOnClick", {
                                        Phone: r.DataConversion.JSNodeParamConverter.to(u.getRealSignupPhone(), r.DataTypes.DataTypes.Text),
                                        AccountOpeningReason: r.DataConversion.JSNodeParamConverter.to(u.getRealSignupAccountOpeningReason(), r.DataTypes.DataTypes.Text),
                                        IsDesktop: r.DataConversion.JSNodeParamConverter.to(h.isDesktop$Action(e).isDesktopOut, r.DataTypes.DataTypes.Boolean),
                                        PlaceOfBirth: r.DataConversion.JSNodeParamConverter.to(u.getRealSignupPlaceOfBirth(), r.DataTypes.DataTypes.Text),
                                        ValidationErrors: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text),
                                        ValidFields: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                    }, function(b) {
                                        var p = new(t.constructor.getVariableGroupType("tradershub.RealAccountCreation.PersonalDetailsAdditional.SaveOnClick$validateJSResult"));
                                        return p.validationErrorsOut = r.DataConversion.JSNodeParamConverter.from(b.ValidationErrors, r.DataTypes.DataTypes.Text), p.validFieldsOut = r.DataConversion.JSNodeParamConverter.from(b.ValidFields, r.DataTypes.DataTypes.Text), p
                                    }, {}, {})
                                } finally {
                                    a && a.end()
                                }
                            }, 1), d.value.dataOut = r.JSONUtils.deserializeFromJSON(s.value.validationErrorsOut, S, !1), c.value.dataOut = r.JSONUtils.deserializeFromJSON(s.value.validFieldsOut, _, !1), o.widgets.get(i.getId("Input_PlaceOfBirth")).validAttr = c.value.dataOut.placeOfBirthAttr, o.widgets.get(i.getId("Input_PlaceOfBirth")).validationMessageAttr = d.value.dataOut.placeOfBirthAttr, o.widgets.get(i.getId("Input_Phonenumber")).validAttr = c.value.dataOut.phoneAttr, o.widgets.get(i.getId("Input_Phonenumber")).validationMessageAttr = d.value.dataOut.phoneAttr, o.widgets.get(i.getId("Dropdown_AccountPurpose")).validAttr = c.value.dataOut.accountOpeningReasonAttr, o.widgets.get(i.getId("Dropdown_AccountPurpose")).validationMessageAttr = d.value.dataOut.accountOpeningReasonAttr, o.widgets.get(i.getId("DesktopForm")).validAttr) return r.Logger.startActiveSpan("RudderStack", function(a) {
                            a && (a.setAttribute("code.function", "RudderStack"), a.setAttribute("outsystems.function.key", "2ac7b053-e643-4da8-8263-a19432556260"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(g, "RudderStack", "SaveOnClick", null, function(b) {}, {
                                    IsDesktop: h.clientActionProxies.isDesktop$Action
                                }, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1), u.setRealSignupPassedStepCount(2), h.isDesktop$Action(e).isDesktopOut ? u.getRealSignupIsIDVSupported() ? r.Navigation.navigateTo(r.Navigation.generateScreenURL("tradershub", "identity-verification", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0) : r.Navigation.navigateTo(r.Navigation.generateScreenURL("tradershub", "employment-details", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0) : r.Navigation.navigateTo(r.Navigation.generateScreenURL("tradershub", "personal-details/account-purpose", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0);
                        l.value = h.focusFirstInvalidInput$Action(i.getId("DesktopForm"), !0, "real-account-signup-layout__placeholder", e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__saveOnClick$Action
        }
        set _saveOnClick$Action(e) {
            this.__saveOnClick$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "7000d486-e19b-41c5-8d8d-a6dd0dc2ccd8"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), u.setRealSignupCurrentStep(2)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "ad92a466-5ae2-48e2-a6ad-6fbae909100c"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var l = new r.DataTypes.VariableHolder,
                            s = new r.DataTypes.VariableHolder,
                            c = new r.DataTypes.VariableHolder,
                            d = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(C)));
                        return r.Flow.executeAsyncFlow(function() {
                            return c.value = h.setFocus$Action(i.getId("Input_Phonenumber"), e), d.value.dataOut = r.JSONUtils.deserializeFromJSON(u.getRawResidenceListResponse(), C, !1), s.value = r.SystemActions.listFilter(d.value.dataOut.residence_listAttr, function(a) {
                                return u.getRealSignupPlaceOfBirth() !== r.BuiltinFunctions.nullTextIdentifier() ? a.valueAttr === u.getRealSignupPlaceOfBirth() : a.valueAttr === u.getSelectedResidence()
                            }, e), o.variables.residenceListVar = d.value.dataOut.residence_listAttr, u.setRealSignupPhone(r.BuiltinFunctions.length(u.getRealSignupPhone()) > 1 ? u.getRealSignupPhone() : "+" + s.value.filteredListOut.getCurrent(e.iterationContext).phone_iddAttr), o.variables.currentResidenceVar = s.value.filteredListOut.getCurrent(e.iterationContext), o.variables.selectedPlaceOfBirth_MobileVar = s.value.filteredListOut.getCurrent(e.iterationContext).textAttr, u.setRealSignupPlaceOfBirth(s.value.filteredListOut.getCurrent(e.iterationContext).valueAttr), r.Flow.executeSequence(function() {
                                if (h.isDesktop$Action(e).isDesktopOut) return o.flush(), O.fetchAccountPurposeList$Action(e).then(function(a) {
                                    l.value = a
                                }).then(function() {
                                    o.variables.accountPurposeListVar = l.value.accontPurposeListOut
                                })
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _closeStateSelectionPopupOnClick$Action() {
            return this.hasOwnProperty("__closeStateSelectionPopupOnClick$Action") || (this.__closeStateSelectionPopupOnClick$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("CloseStateSelectionPopupOnClick", function(n) {
                    n && (n.setAttribute("code.function", "CloseStateSelectionPopupOnClick"), n.setAttribute("outsystems.function.key", "cd8d00cd-5695-42cf-a926-5b029b8e97bd"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("CloseStateSelectionPopupOnClick"), e = t.callContext(e), o.variables.isCountrySelectorPopupOpenVar = !1
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__closeStateSelectionPopupOnClick$Action
        }
        set _closeStateSelectionPopupOnClick$Action(e) {
            this.__closeStateSelectionPopupOnClick$Action = e
        }
        get _placeofBirthSelectorOnClickCountry$Action() {
            return this.hasOwnProperty("__placeofBirthSelectorOnClickCountry$Action") || (this.__placeofBirthSelectorOnClickCountry$Action = function(e, o, t) {
                var i = this.model,
                    n = this.controller,
                    l = this.idService;
                return r.Logger.startActiveSpan("PlaceofBirthSelectorOnClickCountry", function(s) {
                    s && (s.setAttribute("code.function", "PlaceofBirthSelectorOnClickCountry"), s.setAttribute("outsystems.function.key", "e5cc2d79-f3f1-4be5-91f9-0bab03d6c3f1"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("PlaceofBirthSelectorOnClickCountry"), t = n.callContext(t);
                        var c = new r.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("tradershub.RealAccountCreation.PersonalDetailsAdditional.PlaceofBirthSelectorOnClickCountry$vars")));
                        c.value.placeValueInLocal = e, c.value.labelInLocal = o;
                        var d = new r.DataTypes.VariableHolder;
                        d.value = r.SystemActions.listFilter(i.variables.residenceListVar, function(a) {
                            return a.valueAttr === c.value.placeValueInLocal
                        }, t), i.variables.selectedPlaceOfBirth_MobileVar = c.value.labelInLocal, i.variables.isCountrySelectorPopupOpenVar = !1, u.setRealSignupPlaceOfBirth(c.value.placeValueInLocal), u.setRealSignupPhone(r.BuiltinFunctions.length(u.getRealSignupPhone()) > 1 ? u.getRealSignupPhone() : "+" + d.value.filteredListOut.getCurrent(t.iterationContext).phone_iddAttr)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__placeofBirthSelectorOnClickCountry$Action
        }
        set _placeofBirthSelectorOnClickCountry$Action(e) {
            this.__placeofBirthSelectorOnClickCountry$Action = e
        }
        openCountrySelectorPopup$Action(e) {
            var o = this.controller;
            return r.Logger.startActiveSpan("OpenCountrySelectorPopup__proxy", function(t) {
                t && (t.setAttribute("code.function", "OpenCountrySelectorPopup"), t.setAttribute("outsystems.function.key", "194280fd-32ba-4e31-b25f-157e7c2f87fa"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._openCountrySelectorPopup$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        dropdownSearchOnChanged$Action(e, o) {
            var t = this.controller;
            return r.Logger.startActiveSpan("DropdownSearchOnChanged__proxy", function(i) {
                i && (i.setAttribute("code.function", "DropdownSearchOnChanged"), i.setAttribute("outsystems.function.key", "34ea8ac3-6502-4236-b1d2-e31d6acb6c5e"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._dropdownSearchOnChanged$Action, o, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        saveOnClick$Action(e) {
            var o = this.controller;
            return r.Logger.startActiveSpan("SaveOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "SaveOnClick"), t.setAttribute("outsystems.function.key", "43df2115-a17d-4a23-8e9e-be11d81eebab"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._saveOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var o = this.controller;
            return r.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "7000d486-e19b-41c5-8d8d-a6dd0dc2ccd8"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var o = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "ad92a466-5ae2-48e2-a6ad-6fbae909100c"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        closeStateSelectionPopupOnClick$Action(e) {
            var o = this.controller;
            return r.Logger.startActiveSpan("CloseStateSelectionPopupOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "CloseStateSelectionPopupOnClick"), t.setAttribute("outsystems.function.key", "cd8d00cd-5695-42cf-a926-5b029b8e97bd"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._closeStateSelectionPopupOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        placeofBirthSelectorOnClickCountry$Action(e, o, t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("PlaceofBirthSelectorOnClickCountry__proxy", function(n) {
                n && (n.setAttribute("code.function", "PlaceofBirthSelectorOnClickCountry"), n.setAttribute("outsystems.function.key", "e5cc2d79-f3f1-4be5-91f9-0bab03d6c3f1"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._placeofBirthSelectorOnClickCountry$Action, t, e, o)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var o = this.controller,
                    t = this.model,
                    i = this.idService;
                return o.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var o = this.controller,
                    t = this.model,
                    i = this.idService;
                return o.onReady$Action(e)
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
                return k.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return O.defaultTimeout
        }
    };
    y(A, "ControllerInner");
    let f = A;
    v = f, v.registerVariableGroupType("tradershub.RealAccountCreation.PersonalDetailsAdditional.DropdownSearchOnChanged$vars", [{
        name: "SelectedOptionList",
        attrName: "selectedOptionListInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.RecordList,
        defaultValue: y(function() {
            return new m
        }, "defaultValue"),
        complexType: m
    }]), v.registerVariableGroupType("tradershub.RealAccountCreation.PersonalDetailsAdditional.SaveOnClick$validateJSResult", [{
        name: "ValidationErrors",
        attrName: "validationErrorsOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: y(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "ValidFields",
        attrName: "validFieldsOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: y(function() {
            return ""
        }, "defaultValue")
    }]), v.registerVariableGroupType("tradershub.RealAccountCreation.PersonalDetailsAdditional.PlaceofBirthSelectorOnClickCountry$vars", [{
        name: "PlaceValue",
        attrName: "placeValueInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: y(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Label",
        attrName: "labelInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: y(function() {
            return ""
        }, "defaultValue")
    }])
}
var v, Q = new r.Controller.ControllerFactory(v, R);
export {
    Q as a
};