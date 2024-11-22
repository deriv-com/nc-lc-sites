import {
    a as V
} from "./_oschunk-AGISAFBQ.js";
import {
    a as E
} from "./_oschunk-Y45M2O2K.js";
import {
    a as o,
    d as h
} from "./_oschunk-27GDEXUT.js";
import {
    Ef as m,
    Pd as p,
    sc as O
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as k
} from "./_oschunk-NTQBNJ73.js";
import {
    c as l
} from "./_oschunk-DVBKI63I.js";
var I = {
        "DbsG4eAw00iUDHHl7ueYvg#Value.-925459353.1": "Pays de r\xE9sidence",
        "n6p+_0cjbkSzOWGYz9OGaA#Value": "Confirmer",
        "MWeiXqNTnka9q3inbFZ9mg#Value": "Annuler",
        "OgMmeF3pdUu8w8pIePT0qw#Value": "Je confirme que j'ai initi\xE9 la demande d'ouverture d'un compte avec Deriv pour trader des produits OTC \xE9mis et offerts exclusivement en dehors du Br\xE9sil. Je comprends que Deriv n'est pas r\xE9glement\xE9 par la CVM et que j'\xE9tablis une relation avec une entreprise \xE9trang\xE8re. Une confirmation est requise.",
        "QbxMAt2pjUS9L6xrI65SSw#Value": "Confirmation",
        "SJ_chKdt+kiCDNK3Szj_cQ#Value": "Suivant",
        "iOuHZkvkTUuFZiee8Sr1lA#Value": "Le pays de r\xE9sidence est requis.",
        "2408L6o770mGuWQSZcKfZg#Value": "Services non disponibles",
        "nLtVd0C+0U6Ot+cJMU65hg#Value.830386192.1": "S\xE9lectionnez votre pays de r\xE9sidence",
        "PwA5m7KEv0+nTrl+mxRorw#Value.-517233753.1": "Aucun r\xE9sultat n'a \xE9t\xE9 trouv\xE9",
        "sR7Yo0m3s0eNLkqsdI+gkA#Value": "Pays de r\xE9sidence",
        "Jff0FqU4F0eDmVVEQUDdIw#Title": "Pays de r\xE9sidence | Deriv",
        "Jff0FqU4F0eDmVVEQUDdIw#TitleExpression.-1003058815.1": "Pays de r\xE9sidence | Deriv"
    },
    L = {
        "fr-FR": {
            translations: I,
            isRTL: !1
        }
    };

function T(d, v, _) {
    cacheTrackEvents.track({
        name: "ce_virtual_signup_form",
        properties: {
            action: "country_selection_screen_back_button_os"
        }
    })
}
l(T, "default");

function w(d, v, _, n) {
    let t = JSON.parse(d.ResidenceList).residence_list.find(a => a.value == d.SelectedCountry);
    d.IsDisabledCountry = !!(t && t.disabled)
}
l(w, "default");

function N(d, v, _, n) {
    var a, i, u, c, b;
    let r = JSON.parse((a = d.ResidenceList) != null ? a : "{}"),
        t = (i = r == null ? void 0 : r.residence_list) == null ? void 0 : i.filter(y => y.value == d.ClientCountry && !y.disabled);
    d.SelectedResidence && (t = (c = (u = r == null ? void 0 : r.residence_list) == null ? void 0 : u.filter(y => y.value == d.SelectedResidence)) != null ? c : {}, d.IsServiceNotAvailable = !!(t && ((b = t[0]) != null && b.disabled))), d.CurrentResidence = JSON.stringify(t)
}
l(N, "default");

function D(d, v, _) {
    cacheTrackEvents.track({
        name: "ce_virtual_signup_form",
        properties: {
            action: "country_selection_screen_opened",
            form_name: "virtual_signup_form_outsystems"
        }
    })
}
l(D, "default");
var e = k; {
    let v = class v extends e.Controller.BaseViewController {
        constructor(n, r, t) {
            super(n, r, t, L);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(n) {
            this._dataFetchActionNames = n
        }
        get _onNextButtonClick$Action() {
            return this.hasOwnProperty("__onNextButtonClick$Action") || (this.__onNextButtonClick$Action = function(n) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return e.Logger.startActiveSpan("OnNextButtonClick", function(i) {
                    i && (i.setAttribute("code.function", "OnNextButtonClick"), i.setAttribute("outsystems.function.key", "2f132623-cebb-41a2-ad6f-e6b3c0f5f29a"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("OnNextButtonClick"), n = t.callContext(n), r.variables.isBrazilVar === !0) r.variables.showPopupVar = !0;
                        else {
                            if (r.variables.isCountrySelectedVar && e.BuiltinFunctions.length(r.variables.selectedResidenceVar) > 0 && !r.variables.showUnavailableServiceErrorVar) return o.setSelectedResidence(r.variables.selectedResidenceVar), o.setSelectedResidenceLabel(r.variables.selectedResidenceLabelVar), o.setSelectedCitizenship(o.getSelectedCitizenship() !== "" ? o.getSelectedCitizenship() : r.variables.selectedResidenceVar), e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "signup/citizenship", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.SlideFromRight), n, !0);
                            r.variables.showErrorVar = !(r.variables.isCountrySelectedVar && e.BuiltinFunctions.length(r.variables.selectedResidenceVar) > 0)
                        }
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onNextButtonClick$Action
        }
        set _onNextButtonClick$Action(n) {
            this.__onNextButtonClick$Action = n
        }
        get _onCancelClick$Action() {
            return this.hasOwnProperty("__onCancelClick$Action") || (this.__onCancelClick$Action = function(n) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return e.Logger.startActiveSpan("OnCancelClick", function(i) {
                    i && (i.setAttribute("code.function", "OnCancelClick"), i.setAttribute("outsystems.function.key", "58d67e92-f051-4c80-abec-e74ddcba0192"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnCancelClick"), n = t.callContext(n), e.Logger.startActiveSpan("RudderStack", function(u) {
                            u && (u.setAttribute("code.function", "RudderStack"), u.setAttribute("outsystems.function.key", "c8904180-b6a1-45b7-bfd7-e01b166085ad"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(T, "RudderStack", "OnCancelClick", null, function(c) {}, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), r.variables.showPopupVar = !1
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onCancelClick$Action
        }
        set _onCancelClick$Action(n) {
            this.__onCancelClick$Action = n
        }
        get _onClickCountry$Action() {
            return this.hasOwnProperty("__onClickCountry$Action") || (this.__onClickCountry$Action = function(n, r) {
                var t = this.model,
                    a = this.controller,
                    i = this.idService;
                return e.Logger.startActiveSpan("OnClickCountry", function(u) {
                    u && (u.setAttribute("code.function", "OnClickCountry"), u.setAttribute("outsystems.function.key", "602d242d-271f-4d4c-b6b3-b85c9ae3a1cf"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnClickCountry"), r = a.callContext(r);
                        var c = new e.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("tradershub.Signup.CountryOfResidence.OnClickCountry$vars")));
                        if (c.value.mobileSelectedResidenceInLocal = n, o.setSelectedResidence(c.value.mobileSelectedResidenceInLocal), t.variables.selectedResidenceVar = c.value.mobileSelectedResidenceInLocal, t.variables.isBrazilVar = c.value.mobileSelectedResidenceInLocal === "br", t.variables.isBrazilVar === !0) t.variables.showPopupVar = !0;
                        else return e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "signup/citizenship", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__onClickCountry$Action
        }
        set _onClickCountry$Action(n) {
            this.__onClickCountry$Action = n
        }
        get _dropdownSearchOnChanged$Action() {
            return this.hasOwnProperty("__dropdownSearchOnChanged$Action") || (this.__dropdownSearchOnChanged$Action = function(n, r, t) {
                var a = this.model,
                    i = this.controller,
                    u = this.idService;
                return e.Logger.startActiveSpan("DropdownSearchOnChanged", function(c) {
                    c && (c.setAttribute("code.function", "DropdownSearchOnChanged"), c.setAttribute("outsystems.function.key", "81e5674e-cf89-4ebe-8e52-1b40ed733a6b"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("DropdownSearchOnChanged"), t = i.callContext(t);
                        var b = new e.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("tradershub.Signup.CountryOfResidence.DropdownSearchOnChanged$vars")));
                        b.value.selectedOptionListInLocal = n.clone(), b.value.selectedCountryInLocal = r;
                        var y = new e.DataTypes.VariableHolder,
                            S = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType);
                        S.value.jSONOut = e.JSONUtils.serializeToJSON(a.variables.residenceListResponseVar, !1, !1), y.value = e.Logger.startActiveSpan("JavaScript1", function(f) {
                            f && (f.setAttribute("code.function", "JavaScript1"), f.setAttribute("outsystems.function.key", "e4a60f5b-ac90-4887-8107-93e935a157aa"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return i.safeExecuteJSNode(w, "JavaScript1", "DropdownSearchOnChanged", {
                                    SelectedCountry: e.DataConversion.JSNodeParamConverter.to(b.value.selectedOptionListInLocal.getCurrent(t.iterationContext).valueAttr, e.DataTypes.DataTypes.Text),
                                    ResidenceList: e.DataConversion.JSNodeParamConverter.to(S.value.jSONOut, e.DataTypes.DataTypes.Text),
                                    IsDisabledCountry: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean)
                                }, function(A) {
                                    var s = new(i.constructor.getVariableGroupType("tradershub.Signup.CountryOfResidence.DropdownSearchOnChanged$javaScript1JSResult"));
                                    return s.isDisabledCountryOut = e.DataConversion.JSNodeParamConverter.from(A.IsDisabledCountry, e.DataTypes.DataTypes.Boolean), s
                                }, {}, {})
                            } finally {
                                f && f.end()
                            }
                        }, 1), o.setSelectedResidence(b.value.selectedOptionListInLocal.getCurrent(t.iterationContext).valueAttr), a.variables.selectedResidenceVar = b.value.selectedOptionListInLocal.getCurrent(t.iterationContext).valueAttr, a.variables.isCountrySelectedVar = e.BuiltinFunctions.length(a.variables.selectedResidenceVar) !== 0, a.variables.showErrorVar = !(a.variables.isCountrySelectedVar && e.BuiltinFunctions.length(a.variables.selectedResidenceVar) > 0), a.variables.isBrazilVar = b.value.selectedCountryInLocal === "br", a.variables.hasUserInteractedVar = !0, a.variables.showUnavailableServiceErrorVar = y.value.isDisabledCountryOut, a.variables.selectedResidenceLabelVar = b.value.selectedOptionListInLocal.getCurrent(t.iterationContext).labelAttr, o.setIsSpain(b.value.selectedCountryInLocal === "es")
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__dropdownSearchOnChanged$Action
        }
        set _dropdownSearchOnChanged$Action(n) {
            this.__dropdownSearchOnChanged$Action = n
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(n) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(i) {
                    return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "9eb2d29d-89e1-4c7e-9b39-0f528b0de5b5"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), n = t.callContext(n);
                        var u = new e.DataTypes.VariableHolder,
                            c = new e.DataTypes.VariableHolder,
                            b = new e.DataTypes.VariableHolder,
                            y = new e.DataTypes.VariableHolder,
                            S = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(p))),
                            f = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(m))),
                            A = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(O)));
                        return e.Flow.executeAsyncFlow(function() {
                            return e.Flow.executeSequence(function() {
                                return e.BuiltinFunctions.length(o.getRawWebsiteStatusResponse()) === 0 ? (r.flush(), h.derivApiSendMessage$Action("", "website_status", !1, n).then(function(s) {
                                    u.value = s
                                }).then(function() {
                                    return r.flush(), h.derivApiSendMessage$Action("", "residence_list", !1, n).then(function(s) {
                                        b.value = s
                                    })
                                }).then(function() {
                                    o.setRawWebsiteStatusResponse(u.value.responseOut), o.setRawResidenceListResponse(b.value.responseOut)
                                })) : e.Flow.executeSequence(function() {
                                    if (e.BuiltinFunctions.length(o.getRawResidenceListResponse()) === 0) return r.flush(), h.derivApiSendMessage$Action("", "residence_list", !1, n).then(function(s) {
                                        c.value = s
                                    }).then(function() {
                                        o.setRawResidenceListResponse(c.value.responseOut)
                                    })
                                })
                            }).then(function() {
                                A.value.dataOut = e.JSONUtils.deserializeFromJSON(o.getRawWebsiteStatusResponse(), O, !1), h.rudderstackIdentifyEvent$Action("", n), y.value = e.Logger.startActiveSpan("GetCurrentResidenceBasedOnWebsiteStatus2", function(s) {
                                    s && (s.setAttribute("code.function", "GetCurrentResidenceBasedOnWebsiteStatus2"), s.setAttribute("outsystems.function.key", "628589c8-dfc9-46fc-bd1d-75f197482e8f"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(N, "GetCurrentResidenceBasedOnWebsiteStatus2", "OnReady", {
                                            SelectedResidence: e.DataConversion.JSNodeParamConverter.to(o.getSelectedResidence(), e.DataTypes.DataTypes.Text),
                                            ClientCountry: e.DataConversion.JSNodeParamConverter.to(A.value.dataOut.website_statusAttr.clients_countryAttr, e.DataTypes.DataTypes.Text),
                                            ResidenceList: e.DataConversion.JSNodeParamConverter.to(o.getRawResidenceListResponse(), e.DataTypes.DataTypes.Text),
                                            CurrentResidence: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                            IsServiceNotAvailable: e.DataConversion.JSNodeParamConverter.to(!1, e.DataTypes.DataTypes.Boolean)
                                        }, function(R) {
                                            var g = new(t.constructor.getVariableGroupType("tradershub.Signup.CountryOfResidence.OnReady$getCurrentResidenceBasedOnWebsiteStatus2JSResult"));
                                            return g.currentResidenceOut = e.DataConversion.JSNodeParamConverter.from(R.CurrentResidence, e.DataTypes.DataTypes.Text), g.isServiceNotAvailableOut = e.DataConversion.JSNodeParamConverter.from(R.IsServiceNotAvailable, e.DataTypes.DataTypes.Boolean), g
                                        }, {}, {})
                                    } finally {
                                        s && s.end()
                                    }
                                }, 1), S.value.dataOut = e.JSONUtils.deserializeFromJSON(o.getRawResidenceListResponse(), p, !1), f.value.dataOut = e.JSONUtils.deserializeFromJSON(y.value.currentResidenceOut, m, !1), r.variables.websiteStatusClientCountryVar = f.value.dataOut, o.setSelectedResidence(e.BuiltinFunctions.length(o.getSelectedResidence()) > 0 ? o.getSelectedResidence() : f.value.dataOut.getCurrent(n.iterationContext).valueAttr), r.variables.selectedResidenceVar = e.BuiltinFunctions.length(o.getSelectedResidence()) > 0 ? o.getSelectedResidence() : f.value.dataOut.getCurrent(n.iterationContext).valueAttr, r.variables.isCountrySelectedVar = !0, o.setSelectedResidenceLabel(e.BuiltinFunctions.length(o.getSelectedResidenceLabel()) > 0 ? o.getSelectedResidenceLabel() : f.value.dataOut.getCurrent(n.iterationContext).labelAttr), r.variables.selectedResidenceLabelVar = e.BuiltinFunctions.length(o.getSelectedResidenceLabel()) > 0 ? o.getSelectedResidenceLabel() : f.value.dataOut.getCurrent(n.iterationContext).labelAttr, r.variables.isLoadingVar = !1, r.variables.residenceListResponseVar = S.value.dataOut, r.variables.showUnavailableServiceErrorVar = y.value.isServiceNotAvailableOut, e.Logger.startActiveSpan("RudderStack", function(s) {
                                    s && (s.setAttribute("code.function", "RudderStack"), s.setAttribute("outsystems.function.key", "b6d595bb-b2cf-434a-98ab-8ba4af531222"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(D, "RudderStack", "OnReady", null, function(R) {}, {}, {})
                                    } finally {
                                        s && s.end()
                                    }
                                }, 1)
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
        onNextButtonClick$Action(n) {
            var r = this.controller;
            return e.Logger.startActiveSpan("OnNextButtonClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnNextButtonClick"), t.setAttribute("outsystems.function.key", "2f132623-cebb-41a2-ad6f-e6b3c0f5f29a"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onNextButtonClick$Action, n)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onCancelClick$Action(n) {
            var r = this.controller;
            return e.Logger.startActiveSpan("OnCancelClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnCancelClick"), t.setAttribute("outsystems.function.key", "58d67e92-f051-4c80-abec-e74ddcba0192"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onCancelClick$Action, n)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickCountry$Action(n, r) {
            var t = this.controller;
            return e.Logger.startActiveSpan("OnClickCountry__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnClickCountry"), a.setAttribute("outsystems.function.key", "602d242d-271f-4d4c-b6b3-b85c9ae3a1cf"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClickCountry$Action, r, n)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        dropdownSearchOnChanged$Action(n, r, t) {
            var a = this.controller;
            return e.Logger.startActiveSpan("DropdownSearchOnChanged__proxy", function(i) {
                i && (i.setAttribute("code.function", "DropdownSearchOnChanged"), i.setAttribute("outsystems.function.key", "81e5674e-cf89-4ebe-8e52-1b40ed733a6b"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._dropdownSearchOnChanged$Action, t, n, r)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onReady$Action(n) {
            var r = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "9eb2d29d-89e1-4c7e-9b39-0f528b0de5b5"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, n)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(n) {
            this._onInitializeEventHandler = n
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(n) {
                var r = this.controller,
                    t = this.model,
                    a = this.idService;
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
                return V.default.handleError(n, this.callContext())
            }), this._handleError
        }
        set handleError(n) {
            this._handleError = n
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return h.defaultTimeout
        }
    };
    l(v, "ControllerInner");
    let d = v;
    C = d, C.registerVariableGroupType("tradershub.Signup.CountryOfResidence.OnClickCountry$vars", [{
        name: "MobileSelectedResidence",
        attrName: "mobileSelectedResidenceInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), C.registerVariableGroupType("tradershub.Signup.CountryOfResidence.DropdownSearchOnChanged$vars", [{
        name: "SelectedOptionList",
        attrName: "selectedOptionListInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.RecordList,
        defaultValue: l(function() {
            return new m
        }, "defaultValue"),
        complexType: m
    }, {
        name: "SelectedCountry",
        attrName: "selectedCountryInLocal",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), C.registerVariableGroupType("tradershub.Signup.CountryOfResidence.DropdownSearchOnChanged$javaScript1JSResult", [{
        name: "IsDisabledCountry",
        attrName: "isDisabledCountryOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: l(function() {
            return !1
        }, "defaultValue")
    }]), C.registerVariableGroupType("tradershub.Signup.CountryOfResidence.OnReady$getCurrentResidenceBasedOnWebsiteStatus2JSResult", [{
        name: "CurrentResidence",
        attrName: "currentResidenceOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "IsServiceNotAvailable",
        attrName: "isServiceNotAvailableOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Boolean,
        defaultValue: l(function() {
            return !1
        }, "defaultValue")
    }])
}
var C, re = new e.Controller.ControllerFactory(C, E);
export {
    re as a
};