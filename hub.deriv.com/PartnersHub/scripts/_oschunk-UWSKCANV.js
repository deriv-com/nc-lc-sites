import {
    a as m
} from "./_oschunk-Y7V2YK47.js";
import {
    a as _
} from "./_oschunk-4GXKK3IG.js";
import {
    a as s,
    q as v
} from "./_oschunk-BDI2RWOA.js";
import {
    a as b
} from "./_oschunk-P3RPGEI5.js";
import {
    rb as y
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as A
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as f
} from "./_oschunk-QHO7QY6K.js";
var C = {};
var n = A; {
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
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(o) {
                    return o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "2f473701-20e4-411e-bb45-5f3732b29ddb"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var a = new n.DataTypes.VariableHolder,
                            c = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return r.flush(), b.residenceList$Action(s.getServer(), "1", "en", e).then(function(d) {
                                a.value = d
                            }).then(function() {
                                return r.flush(), b.getWebsiteStatus$Action(s.getServer(), "1", "en", e).then(function(d) {
                                    c.value = d
                                })
                            }).then(function() {
                                r.variables.residenceListResponseVar = a.value.responseOut, r.variables.websiteStatusResponseVar = c.value.responseOut
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
                    o && (o.setAttribute("code.function", "FullScreenMobileModalOnBack"), o.setAttribute("outsystems.function.key", "4255e566-ed21-4c10-9d58-e805b0b064db"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("FullScreenMobileModalOnBack"), e = t.callContext(e), n.Navigation.navigateTo(n.Navigation.generateScreenURL("PartnersHub", "PlaceOfBirthScreen", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__fullScreenMobileModalOnBack$Action
        }
        set _fullScreenMobileModalOnBack$Action(e) {
            this.__fullScreenMobileModalOnBack$Action = e
        }
        get _residenceSelectorOnClickCountry$Action() {
            return this.hasOwnProperty("__residenceSelectorOnClickCountry$Action") || (this.__residenceSelectorOnClickCountry$Action = function(e, r) {
                var t = this.model,
                    i = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("ResidenceSelectorOnClickCountry", function(a) {
                    a && (a.setAttribute("code.function", "ResidenceSelectorOnClickCountry"), a.setAttribute("outsystems.function.key", "7e4e0bd9-70b2-4a8c-a1d5-7a94add9bb1b"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("ResidenceSelectorOnClickCountry"), r = i.callContext(r);
                        var c = new n.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.PlaceOfBirthCountrySelector.ResidenceSelectorOnClickCountry$vars")));
                        return c.value.selectedCountryInLocal = e.clone(), s.setRealSignupPlaceOfBirth(c.value.selectedCountryInLocal.textAttr), n.Navigation.navigateTo(n.Navigation.generateScreenURL("PartnersHub", "PlaceOfBirthScreen", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__residenceSelectorOnClickCountry$Action
        }
        set _residenceSelectorOnClickCountry$Action(e) {
            this.__residenceSelectorOnClickCountry$Action = e
        }
        onReady$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "2f473701-20e4-411e-bb45-5f3732b29ddb"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        fullScreenMobileModalOnBack$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("FullScreenMobileModalOnBack__proxy", function(t) {
                t && (t.setAttribute("code.function", "FullScreenMobileModalOnBack"), t.setAttribute("outsystems.function.key", "4255e566-ed21-4c10-9d58-e805b0b064db"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._fullScreenMobileModalOnBack$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        residenceSelectorOnClickCountry$Action(e, r) {
            var t = this.controller;
            return n.Logger.startActiveSpan("ResidenceSelectorOnClickCountry__proxy", function(i) {
                i && (i.setAttribute("code.function", "ResidenceSelectorOnClickCountry"), i.setAttribute("outsystems.function.key", "7e4e0bd9-70b2-4a8c-a1d5-7a94add9bb1b"), i.setAttribute("outsystems.function.owner.name", "PartnersHub"), i.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._residenceSelectorOnClickCountry$Action, r, e)
                } finally {
                    i && i.end()
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
            return v.defaultTimeout
        }
    };
    f(u, "ControllerInner");
    let l = u;
    h = l, h.registerVariableGroupType("PartnersHub.RealAccountCreation.PlaceOfBirthCountrySelector.ResidenceSelectorOnClickCountry$vars", [{
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
var h, M = new n.Controller.ControllerFactory(h, _);
export {
    M as a
};