import {
    a as T
} from "./_oschunk-WSNUVXT3.js";
import {
    a as O
} from "./_oschunk-4GXKK3IG.js";
import {
    a as l,
    q as d
} from "./_oschunk-BDI2RWOA.js";
import {
    a as H
} from "./_oschunk-P3RPGEI5.js";
import {
    Lf as E,
    ga as R,
    rb as _
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as C
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as u
} from "./_oschunk-QHO7QY6K.js";
var w = {};

function v(f, y, k, e) {
    let r = localStorage.getItem("token");
    r && (f.token = r)
}
u(v, "default");
var n = C; {
    let y = class y extends n.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, w);
            var a = this.controller;
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
                    a = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("ResidenceSelectorOnClickCountry", function(s) {
                    s && (s.setAttribute("code.function", "ResidenceSelectorOnClickCountry"), s.setAttribute("outsystems.function.key", "10541cca-193b-4a44-8fb3-662624a68e16"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("ResidenceSelectorOnClickCountry"), r = a.callContext(r);
                        var b = new n.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.TaxResidenceList.ResidenceSelectorOnClickCountry$vars")));
                        return b.value.selectedCountryInLocal = e.clone(), l.setRealSignupTaxResidence(b.value.selectedCountryInLocal.textAttr), l.setRealSignupEmploymentDetailMobileScreen("employment_details"), n.Navigation.navigateTo(n.Navigation.generateScreenURL("PartnersHub", "RealAccountCreation", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__residenceSelectorOnClickCountry$Action
        }
        set _residenceSelectorOnClickCountry$Action(e) {
            this.__residenceSelectorOnClickCountry$Action = e
        }
        get _fullScreenMobileModalOnBack$Action() {
            return this.hasOwnProperty("__fullScreenMobileModalOnBack$Action") || (this.__fullScreenMobileModalOnBack$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("FullScreenMobileModalOnBack", function(i) {
                    i && (i.setAttribute("code.function", "FullScreenMobileModalOnBack"), i.setAttribute("outsystems.function.key", "656fcfa9-f037-49e0-a221-891d0a16c7cd"), i.setAttribute("outsystems.function.owner.name", "PartnersHub"), i.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("FullScreenMobileModalOnBack"), e = t.callContext(e), l.setRealSignupEmploymentDetailMobileScreen("employment_details"), n.Navigation.navigateTo(n.Navigation.generateScreenURL("PartnersHub", "RealAccountCreation", {}), n.Transitions.createTransition(n.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__fullScreenMobileModalOnBack$Action
        }
        set _fullScreenMobileModalOnBack$Action(e) {
            this.__fullScreenMobileModalOnBack$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(i) {
                    return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "fa0181ca-7839-4e73-88a5-7b08dcdbe44d"), i.setAttribute("outsystems.function.owner.name", "PartnersHub"), i.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var s = new n.DataTypes.VariableHolder,
                            b = new n.DataTypes.VariableHolder,
                            h = new n.DataTypes.VariableHolder,
                            m = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return d.mountDerivAPIClient$Action(e), m.value = n.Logger.startActiveSpan("JavaScript1", function(o) {
                                o && (o.setAttribute("code.function", "JavaScript1"), o.setAttribute("outsystems.function.key", "b27f5095-5c6b-4713-9f28-534080f2fe3a"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(v, "JavaScript1", "OnReady", {
                                        token: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text)
                                    }, function(c) {
                                        var S = new(t.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.TaxResidenceList.OnReady$javaScript1JSResult"));
                                        return S.tokenOut = n.DataConversion.JSNodeParamConverter.from(c.token, n.DataTypes.DataTypes.Text), S
                                    }, {}, {})
                                } finally {
                                    o && o.end()
                                }
                            }, 1), r.flush(), d.sendAuthorize$Action(function() {
                                var o = new E;
                                return o.authorizeAttr = m.value.tokenOut, o
                            }(), e).then(function(o) {
                                b.value = o
                            }).then(function() {
                                return d.useDevice$Action(e), r.flush(), H.getWebsiteStatus$Action(l.getServer(), l.getAppId(), "en", e).then(function(o) {
                                    h.value = o
                                })
                            }).then(function() {
                                return r.flush(), d.sendResidenceList$Action(e).then(function(o) {
                                    s.value = o
                                })
                            }).then(function() {
                                r.variables.websiteStatusResponseVar = n.DataConversion.JSConversions.typeConvertRecord(h.value.responseOut, new R, function(o, c) {
                                    return c.echo_reqAttr.website_statusAttr = o.echo_reqAttr.website_statusAttr, c.msg_typeAttr = o.msg_typeAttr, c.website_statusAttr.broker_codesAttr = o.website_statusAttr.broker_codesAttr, c.website_statusAttr.clients_countryAttr = o.website_statusAttr.clients_countryAttr, c.website_statusAttr.supported_languagesAttr = o.website_statusAttr.supported_languagesAttr, c.website_statusAttr.terms_conditions_versionAttr = o.website_statusAttr.terms_conditions_versionAttr, c
                                }), r.variables.residenceListResponseVar = s.value.residenceListResponseOut
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        residenceSelectorOnClickCountry$Action(e, r) {
            var t = this.controller;
            return n.Logger.startActiveSpan("ResidenceSelectorOnClickCountry__proxy", function(a) {
                a && (a.setAttribute("code.function", "ResidenceSelectorOnClickCountry"), a.setAttribute("outsystems.function.key", "10541cca-193b-4a44-8fb3-662624a68e16"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._residenceSelectorOnClickCountry$Action, r, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        fullScreenMobileModalOnBack$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("FullScreenMobileModalOnBack__proxy", function(t) {
                t && (t.setAttribute("code.function", "FullScreenMobileModalOnBack"), t.setAttribute("outsystems.function.key", "656fcfa9-f037-49e0-a221-891d0a16c7cd"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._fullScreenMobileModalOnBack$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "fa0181ca-7839-4e73-88a5-7b08dcdbe44d"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
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
                    a = this.idService;
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
                return T.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return d.defaultTimeout
        }
    };
    u(y, "ControllerInner");
    let f = y;
    A = f, A.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.TaxResidenceList.ResidenceSelectorOnClickCountry$vars", [{
        name: "SelectedCountry",
        attrName: "selectedCountryInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Record,
        defaultValue: u(function() {
            return new _
        }, "defaultValue"),
        complexType: _
    }]), A.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.TaxResidenceList.OnReady$javaScript1JSResult", [{
        name: "token",
        attrName: "tokenOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }])
}
var A, J = new n.Controller.ControllerFactory(A, O);
export {
    J as a
};