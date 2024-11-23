import {
    a as m
} from "./_oschunk-YFNTRMC5.js";
import {
    a as _
} from "./_oschunk-6WALBPGV.js";
import {
    a as s,
    p as h
} from "./_oschunk-DW3HXDMW.js";
import {
    a as b
} from "./_oschunk-PNRBOTIK.js";
import {
    qb as y
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as v
} from "./_oschunk-5KJVGEL7.js";
import {
    c as f
} from "./_oschunk-QHO7QY6K.js";
var C = {};
var n = v; {
    let u = class u extends n.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, C);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _residenceSelectorOnClickCountry$Action() {
            return this.hasOwnProperty("__residenceSelectorOnClickCountry$Action") || (this.__residenceSelectorOnClickCountry$Action = function(e, r) {
                var t = this.model,
                    i = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("ResidenceSelectorOnClickCountry", function(a) {
                    a && (a.setAttribute("code.function", "ResidenceSelectorOnClickCountry"), a.setAttribute("outsystems.function.key", "12da125f-cdb5-4a4b-b493-46f8d82c7ea7"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("ResidenceSelectorOnClickCountry"), r = i.callContext(r);
                        var c = new n.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.TaxCountryResidence.ResidenceSelectorOnClickCountry$vars")));
                        return c.value.selectedCountryInLocal = e.clone(), s.setRealSignupTaxResidence(c.value.selectedCountryInLocal.textAttr), n.Navigation.navigateTo(n.Navigation.generateScreenURL("PartnersHub", "EmploymentDetailsInfoScreen", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__residenceSelectorOnClickCountry$Action
        }
        set _residenceSelectorOnClickCountry$Action(e) {
            this.__residenceSelectorOnClickCountry$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(o) {
                    return o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "657c55cc-f129-4753-bc8f-8545aaf6eb30"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var a = new n.DataTypes.VariableHolder,
                            c = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return h.useDevice$Action(e), r.flush(), b.getWebsiteStatus$Action(s.getServer(), s.getAppId(), "en", e).then(function(d) {
                                a.value = d
                            }).then(function() {
                                return r.flush(), b.residenceList$Action(s.getServer(), "1", "en", e).then(function(d) {
                                    c.value = d
                                })
                            }).then(function() {
                                r.variables.websiteStatusResponseVar = a.value.responseOut, r.variables.residenceListResponseVar = c.value.responseOut
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _fullScreenMobileModalOnBack$Action() {
            return this.hasOwnProperty("__fullScreenMobileModalOnBack$Action") || (this.__fullScreenMobileModalOnBack$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("FullScreenMobileModalOnBack", function(o) {
                    o && (o.setAttribute("code.function", "FullScreenMobileModalOnBack"), o.setAttribute("outsystems.function.key", "c9e96f9e-02b4-4ae7-86e3-cdbdcd094f1c"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("FullScreenMobileModalOnBack"), e = t.callContext(e), n.Navigation.navigateTo(n.Navigation.generateScreenURL("PartnersHub", "EmploymentDetailsInfoScreen", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__fullScreenMobileModalOnBack$Action
        }
        set _fullScreenMobileModalOnBack$Action(e) {
            this.__fullScreenMobileModalOnBack$Action = e
        }
        residenceSelectorOnClickCountry$Action(e, r) {
            var t = this.controller;
            return n.Logger.startActiveSpan("ResidenceSelectorOnClickCountry__proxy", function(i) {
                i && (i.setAttribute("code.function", "ResidenceSelectorOnClickCountry"), i.setAttribute("outsystems.function.key", "12da125f-cdb5-4a4b-b493-46f8d82c7ea7"), i.setAttribute("outsystems.function.owner.name", "PartnersHub"), i.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._residenceSelectorOnClickCountry$Action, r, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "657c55cc-f129-4753-bc8f-8545aaf6eb30"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        fullScreenMobileModalOnBack$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("FullScreenMobileModalOnBack__proxy", function(t) {
                t && (t.setAttribute("code.function", "FullScreenMobileModalOnBack"), t.setAttribute("outsystems.function.key", "c9e96f9e-02b4-4ae7-86e3-cdbdcd094f1c"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._fullScreenMobileModalOnBack$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    i = this.idService;
                return r.onReady$Action(e)
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
                return m.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return h.defaultTimeout
        }
    };
    f(u, "ControllerInner");
    let l = u;
    A = l, A.registerVariableGroupType("PartnersHub.RealAccountCreation.TaxCountryResidence.ResidenceSelectorOnClickCountry$vars", [{
        name: "SelectedCountry",
        attrName: "selectedCountryInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Record,
        defaultValue: f(function() {
            return new y
        }, "defaultValue"),
        complexType: y
    }])
}
var A, M = new n.Controller.ControllerFactory(A, _);
export {
    M as a
};