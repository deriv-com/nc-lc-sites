import {
    a as E
} from "./_oschunk-ILTRYJXV.js";
import {
    a as R
} from "./_oschunk-Y45M2O2K.js";
import {
    a as l,
    d as v
} from "./_oschunk-27GDEXUT.js";
import {
    Ef as _,
    cd as m,
    te as h,
    vb as C
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as k
} from "./_oschunk-NTQBNJ73.js";
import {
    c as y
} from "./_oschunk-DVBKI63I.js";
var N = {
        "8Pnh1OZ9xEqJ+TUX87m6BA#Value": "\xC9tat/Province",
        "w38dbPW8mUGI0DeQhHYdmg#Value": "Suivant",
        "XcQhG2GCtk2su3luQZGIXA#Value": "Code postal",
        "mYN8wVUc2UK27u4F3fXjCg#Value": "\xC9tat/Province",
        "hbG5YV4ub0upRZHLQdGEgA#Value": "Ville",
        "I9ASAW8xR0Ggye8Pc48FEg#Value": "Adresse",
        "yMGSwV1DFkKTgBF4Yx_L4w#Title": "D\xE9tails d'adresse | Deriv",
        "yMGSwV1DFkKTgBF4Yx_L4w#TitleExpression.445684752.1": "D\xE9tails d'adresse | Deriv"
    },
    D = {
        "fr-FR": {
            translations: N,
            isRTL: !1
        }
    };

function O(f, b, T) {
    cacheTrackEvents.track({
        name: "ce_real_account_signup_form",
        properties: {
            action: "step_passed",
            step_num: 3,
            step_codename: "address_details",
            form_name: "real_account_signup_form_outsystems"
        }
    })
}
y(O, "default");

function g(f, b, T, r) {
    let o = {
            Address: f.Address,
            Town: f.Town,
            State: f.State,
            PostCode: f.PostCode
        },
        t = {
            town: new RegExp("^\\p{L}[\\p{L}\\s'.-]{0,99}$", "u"),
            address: /^[\p{L}\p{Nd}\s'.,:;()\u00b0@#/-]{1,70}$/u,
            state: /^[\w\s\W'.;,-]{0,99}$/,
            postCode: /^(?! )[a-zA-Z0-9\s-]{0,20}$/,
            containsAtLeastOneLetter: /^(?=.*[A-Za-z]).*$/
        },
        n = yup.object().shape({
            Address: yup.string().required("Address is required.").trim().test("containsAtLeastOneLetter", "Address must contain at least one letter.", c => t.containsAtLeastOneLetter.test(c)).test("addressFormat", "Use only the following special characters: " + ". , ' : ; ( ) \xB0 @ # / -", c => t.address.test(c)),
            Town: yup.string().required("Town/city is required.").trim().matches(t.town, "Only letters, periods, hyphens, apostrophes, and spaces, please."),
            State: yup.string().trim().matches(t.state, "State is not in a proper format."),
            PostCode: yup.string().trim().max(20, "Please enter a Postal/ZIP code under 20 characters.").matches(t.postCode, "Only letters, numbers, space and hyphen are allowed.")
        }),
        {
            errors: s,
            validFields: a
        } = validate(n, o);
    f.ValidationErrors = JSON.stringify(s), f.ValidFields = JSON.stringify(a)
}
y(g, "default");

function p(f, b, T, r) {
    f.Payload = JSON.stringify({
        states_list: f.CountryCode
    })
}
y(p, "default");
var e = k; {
    let b = class b extends e.Controller.BaseViewController {
        constructor(r, o, t) {
            super(r, o, t, D);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(r) {
            this._dataFetchActionNames = r
        }
        get _stateSelectorOnClickCountry$Action() {
            return this.hasOwnProperty("__stateSelectorOnClickCountry$Action") || (this.__stateSelectorOnClickCountry$Action = function(r, o, t) {
                var i = this.model,
                    n = this.controller,
                    s = this.idService;
                return e.Logger.startActiveSpan("StateSelectorOnClickCountry", function(a) {
                    a && (a.setAttribute("code.function", "StateSelectorOnClickCountry"), a.setAttribute("outsystems.function.key", "0f230078-93e3-4945-bd55-38507a65b06f"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("StateSelectorOnClickCountry"), t = n.callContext(t);
                        var c = new e.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("tradershub.RealAccountCreation.AddressDetails.StateSelectorOnClickCountry$vars")));
                        c.value.stateInLocal = r, c.value.labelInLocal = o, l.setRealSignupAddressState(c.value.stateInLocal), i.variables.isStateSelectionPopopOpenVar = !1, l.setRealSignupAddressStateLabel(c.value.labelInLocal)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__stateSelectorOnClickCountry$Action
        }
        set _stateSelectorOnClickCountry$Action(r) {
            this.__stateSelectorOnClickCountry$Action = r
        }
        get _stateOnClickMobile$Action() {
            return this.hasOwnProperty("__stateOnClickMobile$Action") || (this.__stateOnClickMobile$Action = function(r) {
                var o = this.model,
                    t = this.controller,
                    i = this.idService;
                return e.Logger.startActiveSpan("StateOnClickMobile", function(n) {
                    n && (n.setAttribute("code.function", "StateOnClickMobile"), n.setAttribute("outsystems.function.key", "32d4e090-d996-425c-9ed5-8cc1f9ccd643"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("StateOnClickMobile"), r = t.callContext(r), o.variables.isStateSelectionPopopOpenVar = !0
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__stateOnClickMobile$Action
        }
        set _stateOnClickMobile$Action(r) {
            this.__stateOnClickMobile$Action = r
        }
        get _closeStateSelectionPopupOnClick$Action() {
            return this.hasOwnProperty("__closeStateSelectionPopupOnClick$Action") || (this.__closeStateSelectionPopupOnClick$Action = function(r) {
                var o = this.model,
                    t = this.controller,
                    i = this.idService;
                return e.Logger.startActiveSpan("CloseStateSelectionPopupOnClick", function(n) {
                    n && (n.setAttribute("code.function", "CloseStateSelectionPopupOnClick"), n.setAttribute("outsystems.function.key", "5d27ad3b-e9dd-4e48-8894-4a824c4e4ba9"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("CloseStateSelectionPopupOnClick"), r = t.callContext(r), o.variables.isStateSelectionPopopOpenVar = !1
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__closeStateSelectionPopupOnClick$Action
        }
        set _closeStateSelectionPopupOnClick$Action(r) {
            this.__closeStateSelectionPopupOnClick$Action = r
        }
        get _saveOnClick$Action() {
            return this.hasOwnProperty("__saveOnClick$Action") || (this.__saveOnClick$Action = function(r) {
                var o = this.model,
                    t = this.controller,
                    i = this.idService;
                return e.Logger.startActiveSpan("SaveOnClick", function(n) {
                    n && (n.setAttribute("code.function", "SaveOnClick"), n.setAttribute("outsystems.function.key", "6f9e94d4-3c62-4c4f-a37c-41fb176ce39f"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("SaveOnClick"), r = t.callContext(r);
                        var s = new e.DataTypes.VariableHolder,
                            a = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(C))),
                            c = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(m)));
                        if (s.value = e.Logger.startActiveSpan("Validate", function(u) {
                                u && (u.setAttribute("code.function", "Validate"), u.setAttribute("outsystems.function.key", "81a637db-5c06-428b-8f7f-25faab977fbf"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(g, "Validate", "SaveOnClick", {
                                        Address: e.DataConversion.JSNodeParamConverter.to(l.getRealSignupAddress(), e.DataTypes.DataTypes.Text),
                                        PostCode: e.DataConversion.JSNodeParamConverter.to(l.getRealSignupAddressPostCode(), e.DataTypes.DataTypes.Text),
                                        Town: e.DataConversion.JSNodeParamConverter.to(l.getRealSignupAddressTown(), e.DataTypes.DataTypes.Text),
                                        State: e.DataConversion.JSNodeParamConverter.to(l.getRealSignupAddressState(), e.DataTypes.DataTypes.Text),
                                        ValidationErrors: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        ValidFields: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                    }, function(d) {
                                        var S = new(t.constructor.getVariableGroupType("tradershub.RealAccountCreation.AddressDetails.SaveOnClick$validateJSResult"));
                                        return S.validationErrorsOut = e.DataConversion.JSNodeParamConverter.from(d.ValidationErrors, e.DataTypes.DataTypes.Text), S.validFieldsOut = e.DataConversion.JSNodeParamConverter.from(d.ValidFields, e.DataTypes.DataTypes.Text), S
                                    }, {}, {})
                                } finally {
                                    u && u.end()
                                }
                            }, 1), c.value.dataOut = e.JSONUtils.deserializeFromJSON(s.value.validationErrorsOut, m, !1), a.value.dataOut = e.JSONUtils.deserializeFromJSON(s.value.validFieldsOut, C, !1), o.widgets.get(i.getId("Input_Address")).validAttr = a.value.dataOut.addressAttr, o.widgets.get(i.getId("Input_Address")).validationMessageAttr = c.value.dataOut.addressAttr, o.widgets.get(i.getId("Input_Town")).validAttr = a.value.dataOut.townAttr, o.widgets.get(i.getId("Input_Town")).validationMessageAttr = c.value.dataOut.townAttr, o.widgets.get(i.getId("Input_PostCode")).validAttr = a.value.dataOut.postCodeAttr, o.widgets.get(i.getId("Input_PostCode")).validationMessageAttr = c.value.dataOut.postCodeAttr, o.widgets.get(i.getId("AddressForm")).validAttr) return e.Logger.startActiveSpan("RudderStack", function(u) {
                            u && (u.setAttribute("code.function", "RudderStack"), u.setAttribute("outsystems.function.key", "6cb03280-85b0-49f1-bc16-25ed89122ab2"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(O, "RudderStack", "SaveOnClick", null, function(d) {}, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), l.getIsEuUser() ? (l.setRealSignupPassedStepCount(4), e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "trading-assessment", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0)) : e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "terms-of-use", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__saveOnClick$Action
        }
        set _saveOnClick$Action(r) {
            this.__saveOnClick$Action = r
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(r) {
                var o = this.model,
                    t = this.controller,
                    i = this.idService;
                return e.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "83ae9daa-d5d3-4dbc-8353-32289f447ff2"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), r = t.callContext(r);
                        var s = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(h)));
                        l.setRealSignupCurrentStep(l.getRealSignupIsIDVSupported() ? 5 : 4), l.getRealSignupStateList() !== e.BuiltinFunctions.nullTextIdentifier() && (s.value.dataOut = e.JSONUtils.deserializeFromJSON(l.getRealSignupStateList(), h, !1), o.variables.stateListVar = s.value.dataOut.states_listAttr)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(r) {
            this.__onInitialize$Action = r
        }
        get _dropdownSearchOnChanged$Action() {
            return this.hasOwnProperty("__dropdownSearchOnChanged$Action") || (this.__dropdownSearchOnChanged$Action = function(r, o) {
                var t = this.model,
                    i = this.controller,
                    n = this.idService;
                return e.Logger.startActiveSpan("DropdownSearchOnChanged", function(s) {
                    s && (s.setAttribute("code.function", "DropdownSearchOnChanged"), s.setAttribute("outsystems.function.key", "b8756b88-cabb-44d4-8b4a-67ec03e34bbc"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("DropdownSearchOnChanged"), o = i.callContext(o);
                        var a = new e.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("tradershub.RealAccountCreation.AddressDetails.DropdownSearchOnChanged$vars")));
                        a.value.selectedOptionListInLocal = r.clone(), l.setRealSignupAddressState(a.value.selectedOptionListInLocal.getCurrent(o.iterationContext).valueAttr), l.setRealSignupAddressStateLabel(a.value.selectedOptionListInLocal.getCurrent(o.iterationContext).labelAttr)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__dropdownSearchOnChanged$Action
        }
        set _dropdownSearchOnChanged$Action(r) {
            this.__dropdownSearchOnChanged$Action = r
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(r) {
                var o = this.model,
                    t = this.controller,
                    i = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "c2350cf8-4bc5-446c-8649-331397ef63ae"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), r = t.callContext(r);
                        var s = new e.DataTypes.VariableHolder,
                            a = new e.DataTypes.VariableHolder,
                            c = new e.DataTypes.VariableHolder,
                            u = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(h)));
                        return e.Flow.executeAsyncFlow(function() {
                            return o.flush(), v.sendGetSetting$Action(r).then(function(d) {
                                s.value = d
                            }).then(function() {
                                return c.value = e.Logger.startActiveSpan("GenerateStatesListPayload", function(d) {
                                    d && (d.setAttribute("code.function", "GenerateStatesListPayload"), d.setAttribute("outsystems.function.key", "57f35cac-0dec-4626-b2c8-7c6c500728f1"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(p, "GenerateStatesListPayload", "OnReady", {
                                            CountryCode: e.DataConversion.JSNodeParamConverter.to(s.value.getSettingResponseOut.country_codeAttr, e.DataTypes.DataTypes.Text),
                                            Payload: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                        }, function(S) {
                                            var w = new(t.constructor.getVariableGroupType("tradershub.RealAccountCreation.AddressDetails.OnReady$generateStatesListPayloadJSResult"));
                                            return w.payloadOut = e.DataConversion.JSNodeParamConverter.from(S.Payload, e.DataTypes.DataTypes.Text), w
                                        }, {}, {})
                                    } finally {
                                        d && d.end()
                                    }
                                }, 1), o.flush(), v.derivApiSendMessage$Action(c.value.payloadOut, "", !1, r).then(function(d) {
                                    a.value = d
                                })
                            }).then(function() {
                                u.value.dataOut = e.JSONUtils.deserializeFromJSON(a.value.responseOut, h, !1), o.variables.stateListVar = u.value.dataOut.states_listAttr, l.setRealSignupStateList(a.value.responseOut)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(r) {
            this.__onReady$Action = r
        }
        stateSelectorOnClickCountry$Action(r, o, t) {
            var i = this.controller;
            return e.Logger.startActiveSpan("StateSelectorOnClickCountry__proxy", function(n) {
                n && (n.setAttribute("code.function", "StateSelectorOnClickCountry"), n.setAttribute("outsystems.function.key", "0f230078-93e3-4945-bd55-38507a65b06f"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._stateSelectorOnClickCountry$Action, t, r, o)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        stateOnClickMobile$Action(r) {
            var o = this.controller;
            return e.Logger.startActiveSpan("StateOnClickMobile__proxy", function(t) {
                t && (t.setAttribute("code.function", "StateOnClickMobile"), t.setAttribute("outsystems.function.key", "32d4e090-d996-425c-9ed5-8cc1f9ccd643"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._stateOnClickMobile$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        closeStateSelectionPopupOnClick$Action(r) {
            var o = this.controller;
            return e.Logger.startActiveSpan("CloseStateSelectionPopupOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "CloseStateSelectionPopupOnClick"), t.setAttribute("outsystems.function.key", "5d27ad3b-e9dd-4e48-8894-4a824c4e4ba9"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._closeStateSelectionPopupOnClick$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        saveOnClick$Action(r) {
            var o = this.controller;
            return e.Logger.startActiveSpan("SaveOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "SaveOnClick"), t.setAttribute("outsystems.function.key", "6f9e94d4-3c62-4c4f-a37c-41fb176ce39f"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._saveOnClick$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(r) {
            var o = this.controller;
            return e.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "83ae9daa-d5d3-4dbc-8353-32289f447ff2"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onInitialize$Action, r)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        dropdownSearchOnChanged$Action(r, o) {
            var t = this.controller;
            return e.Logger.startActiveSpan("DropdownSearchOnChanged__proxy", function(i) {
                i && (i.setAttribute("code.function", "DropdownSearchOnChanged"), i.setAttribute("outsystems.function.key", "b8756b88-cabb-44d4-8b4a-67ec03e34bbc"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._dropdownSearchOnChanged$Action, o, r)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onReady$Action(r) {
            var o = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "c2350cf8-4bc5-446c-8649-331397ef63ae"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onReady$Action, r)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(r) {
                var o = this.controller,
                    t = this.model,
                    i = this.idService;
                return o.onInitialize$Action(r)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(r) {
            this._onInitializeEventHandler = r
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(r) {
                var o = this.controller,
                    t = this.model,
                    i = this.idService;
                return o.onReady$Action(r)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(r) {
            this._onReadyEventHandler = r
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(r) {
            this._onRenderEventHandler = r
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(r) {
            this._onDestroyEventHandler = r
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(r) {
            this._onParametersChangedEventHandler = r
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(r) {
                return E.default.handleError(r, this.callContext())
            }), this._handleError
        }
        set handleError(r) {
            this._handleError = r
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return v.defaultTimeout
        }
    };
    y(b, "ControllerInner");
    let f = b;
    A = f, A.registerVariableGroupType("tradershub.RealAccountCreation.AddressDetails.StateSelectorOnClickCountry$vars", [{
        name: "State",
        attrName: "stateInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: y(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Label",
        attrName: "labelInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: y(function() {
            return ""
        }, "defaultValue")
    }]), A.registerVariableGroupType("tradershub.RealAccountCreation.AddressDetails.SaveOnClick$validateJSResult", [{
        name: "ValidationErrors",
        attrName: "validationErrorsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: y(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "ValidFields",
        attrName: "validFieldsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: y(function() {
            return ""
        }, "defaultValue")
    }]), A.registerVariableGroupType("tradershub.RealAccountCreation.AddressDetails.DropdownSearchOnChanged$vars", [{
        name: "SelectedOptionList",
        attrName: "selectedOptionListInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.RecordList,
        defaultValue: y(function() {
            return new _
        }, "defaultValue"),
        complexType: _
    }]), A.registerVariableGroupType("tradershub.RealAccountCreation.AddressDetails.OnReady$generateStatesListPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: y(function() {
            return ""
        }, "defaultValue")
    }])
}
var A, K = new e.Controller.ControllerFactory(A, R);
export {
    K as a
};