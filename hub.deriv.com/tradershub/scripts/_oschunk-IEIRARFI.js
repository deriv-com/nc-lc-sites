import {
    a as m
} from "./_oschunk-AGISAFBQ.js";
import {
    a as v
} from "./_oschunk-Y45M2O2K.js";
import {
    a as c,
    d as _
} from "./_oschunk-27GDEXUT.js";
import {
    Ef as b,
    Pd as y,
    sc as h
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as C
} from "./_oschunk-NTQBNJ73.js";
import {
    c as u
} from "./_oschunk-DVBKI63I.js";
var g = {
        "blkXWiGKT0uJHE1RdxiTOQ#Value.-592606844.1": "Citizenship",
        "7LgpL4BSAka2liJWskadYw#Value": "Suivant",
        "LOLRMSrY+0STYMwg3tc+hg#Value": "Choisissez la citoyennet\xE9/nationalit\xE9 indiqu\xE9e sur votre pi\xE8ce d'identit\xE9 officielle.",
        "i8wRNVo2iU+f8e08+rEzZQ#Value": "La citoyennet\xE9 est requise.",
        "_ce41NHWk0mv6T36Ie1qJA#Value.-1726996070.1": "Services non disponibles",
        "l3R1llsvN0mc9mXAOH+jJg#Value.-1726996070.1": "Services non disponibles",
        "haOyGh2Q20yyS8jV_7GaTA#Value.-122289221.1": "S\xE9lectionnez votre nationalit\xE9",
        "2gz5iEh21EiJAuCNx36XTw#Value": "Citoyennet\xE9",
        "9sKlaElx80+kK1JC5qyXEw#Title": "Citoyennet\xE9 | Deriv",
        "9sKlaElx80+kK1JC5qyXEw#TitleExpression.-930018914.1": "Citoyennet\xE9 | Deriv"
    },
    S = {
        "fr-FR": {
            translations: g,
            isRTL: !1
        }
    };

function A(d, l, O) {
    cacheTrackEvents.track({
        name: "ce_virtual_signup_form",
        properties: {
            action: "citizenship_selection_screen_opened",
            form_name: "virtual_signup_form_outsystems"
        }
    })
}
u(A, "default");
var i = C; {
    let l = class l extends i.Controller.BaseViewController {
        constructor(t, n, e) {
            super(t, n, e, S);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onClickCountry$Action() {
            return this.hasOwnProperty("__onClickCountry$Action") || (this.__onClickCountry$Action = function(t, n) {
                var e = this.model,
                    o = this.controller,
                    r = this.idService;
                return i.Logger.startActiveSpan("OnClickCountry", function(s) {
                    s && (s.setAttribute("code.function", "OnClickCountry"), s.setAttribute("outsystems.function.key", "144fb604-b5d5-4c9f-b0dd-69ccd5f55160"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnClickCountry"), n = o.callContext(n);
                        var a = new i.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.Signup.Citizenship.OnClickCountry$vars")));
                        return a.value.residenceInLocal = t, c.setSelectedCitizenship(a.value.residenceInLocal), i.Navigation.navigateTo(i.Navigation.generateScreenURL("tradershub", "signup/create-password", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), n, !0)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__onClickCountry$Action
        }
        set _onClickCountry$Action(t) {
            this.__onClickCountry$Action = t
        }
        get _residenceSelectorOnClickBack$Action() {
            return this.hasOwnProperty("__residenceSelectorOnClickBack$Action") || (this.__residenceSelectorOnClickBack$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("ResidenceSelectorOnClickBack", function(r) {
                    r && (r.setAttribute("code.function", "ResidenceSelectorOnClickBack"), r.setAttribute("outsystems.function.key", "21739951-6c88-4d95-b016-16e19456ac0a"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return e.ensureControllerAlive("ResidenceSelectorOnClickBack"), t = e.callContext(t), i.Navigation.navigateTo(i.Navigation.generateScreenURL("tradershub", "signup/country-of-residence", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__residenceSelectorOnClickBack$Action
        }
        set _residenceSelectorOnClickBack$Action(t) {
            this.__residenceSelectorOnClickBack$Action = t
        }
        get _dropdownSearchOnChanged$Action() {
            return this.hasOwnProperty("__dropdownSearchOnChanged$Action") || (this.__dropdownSearchOnChanged$Action = function(t, n) {
                var e = this.model,
                    o = this.controller,
                    r = this.idService;
                return i.Logger.startActiveSpan("DropdownSearchOnChanged", function(s) {
                    s && (s.setAttribute("code.function", "DropdownSearchOnChanged"), s.setAttribute("outsystems.function.key", "58739ea7-4204-4687-ace1-f484a0e11247"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("DropdownSearchOnChanged"), n = o.callContext(n);
                        var a = new i.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.Signup.Citizenship.DropdownSearchOnChanged$vars")));
                        a.value.selectedOptionListInLocal = t.clone(), c.setSelectedCitizenship(a.value.selectedOptionListInLocal.getCurrent(n.iterationContext).valueAttr), e.variables.selectedCitizenshipVar = a.value.selectedOptionListInLocal.getCurrent(n.iterationContext).valueAttr, e.variables.hasUserInteractedVar = !0, e.variables.isCountrySelectedVar = !(e.variables.selectedCitizenshipVar === "" || c.getSelectedResidence() === ""), e.variables.showErrorVar = !e.variables.isCountrySelectedVar
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__dropdownSearchOnChanged$Action
        }
        set _dropdownSearchOnChanged$Action(t) {
            this.__dropdownSearchOnChanged$Action = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "b85aa2d0-fb97-431e-93b1-7b59b043bcbc"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), t = e.callContext(t);
                        var s = new i.DataTypes.VariableHolder(new(i.Controller.BaseController.getJSONDeserializeOutputType(y))),
                            a = new i.DataTypes.VariableHolder(new(i.Controller.BaseController.getJSONDeserializeOutputType(h)));
                        n.variables.selectedCitizenshipVar = c.getSelectedCitizenship(), i.BuiltinFunctions.length(c.getRawResidenceListResponse()) > 0 ? (s.value.dataOut = i.JSONUtils.deserializeFromJSON(c.getRawResidenceListResponse(), y, !1), n.variables.residenceListResponseVar = s.value.dataOut) : i.BuiltinFunctions.length(c.getRawWebsiteStatusResponse()) > 0 ? (a.value.dataOut = i.JSONUtils.deserializeFromJSON(c.getRawWebsiteStatusResponse(), h, !1), n.variables.websiteStatusResponseVar = a.value.dataOut) : (c.setSelectedCitizenship(c.getSelectedResidence()), n.variables.selectedCitizenshipVar = c.getSelectedResidence())
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        get _onNextButtonClick$Action() {
            return this.hasOwnProperty("__onNextButtonClick$Action") || (this.__onNextButtonClick$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnNextButtonClick", function(r) {
                    r && (r.setAttribute("code.function", "OnNextButtonClick"), r.setAttribute("outsystems.function.key", "d79acf93-0787-4c8f-ad15-b93506cb3c93"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (e.ensureControllerAlive("OnNextButtonClick"), t = e.callContext(t), n.variables.isCountrySelectedVar && i.BuiltinFunctions.length(n.variables.selectedCitizenshipVar) > 0 || i.BuiltinFunctions.length(c.getSelectedResidence()) > 0 && !n.variables.showErrorVar) return c.setSelectedCitizenship(n.variables.selectedCitizenshipVar), i.Navigation.navigateTo(i.Navigation.generateScreenURL("tradershub", "signup/create-password", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.SlideFromRight), t, !0);
                        n.variables.showErrorVar = !0
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onNextButtonClick$Action
        }
        set _onNextButtonClick$Action(t) {
            this.__onNextButtonClick$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var n = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "f848048d-61de-4a7f-adf7-597d81fe1722"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t), i.Logger.startActiveSpan("RudderStack", function(s) {
                            s && (s.setAttribute("code.function", "RudderStack"), s.setAttribute("outsystems.function.key", "e6b5fd7c-ba94-4bac-9af4-1f06461ec70f"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(A, "RudderStack", "OnReady", null, function(a) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        onClickCountry$Action(t, n) {
            var e = this.controller;
            return i.Logger.startActiveSpan("OnClickCountry__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnClickCountry"), o.setAttribute("outsystems.function.key", "144fb604-b5d5-4c9f-b0dd-69ccd5f55160"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onClickCountry$Action, n, t)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        residenceSelectorOnClickBack$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("ResidenceSelectorOnClickBack__proxy", function(e) {
                e && (e.setAttribute("code.function", "ResidenceSelectorOnClickBack"), e.setAttribute("outsystems.function.key", "21739951-6c88-4d95-b016-16e19456ac0a"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._residenceSelectorOnClickBack$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        dropdownSearchOnChanged$Action(t, n) {
            var e = this.controller;
            return i.Logger.startActiveSpan("DropdownSearchOnChanged__proxy", function(o) {
                o && (o.setAttribute("code.function", "DropdownSearchOnChanged"), o.setAttribute("outsystems.function.key", "58739ea7-4204-4687-ace1-f484a0e11247"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._dropdownSearchOnChanged$Action, n, t)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onInitialize$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "b85aa2d0-fb97-431e-93b1-7b59b043bcbc"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onNextButtonClick$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnNextButtonClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnNextButtonClick"), e.setAttribute("outsystems.function.key", "d79acf93-0787-4c8f-ad15-b93506cb3c93"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onNextButtonClick$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "f848048d-61de-4a7f-adf7-597d81fe1722"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(t) {
                var n = this.controller,
                    e = this.model,
                    o = this.idService;
                return n.onInitialize$Action(t)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var n = this.controller,
                    e = this.model,
                    o = this.idService;
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
                return m.default.handleError(t, this.callContext())
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
    u(l, "ControllerInner");
    let d = l;
    f = d, f.registerVariableGroupType("tradershub.Signup.Citizenship.OnClickCountry$vars", [{
        name: "Residence",
        attrName: "residenceInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), f.registerVariableGroupType("tradershub.Signup.Citizenship.DropdownSearchOnChanged$vars", [{
        name: "SelectedOptionList",
        attrName: "selectedOptionListInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.RecordList,
        defaultValue: u(function() {
            return new b
        }, "defaultValue"),
        complexType: b
    }])
}
var f, x = new i.Controller.ControllerFactory(f, v);
export {
    x as a
};