import {
    a as F
} from "./_oschunk-DMYYSU2E.js";
import {
    a as x
} from "./_oschunk-OW5V4P4X.js";
import {
    a as D,
    b as A,
    h as u,
    j as C,
    r as _,
    w as U,
    y as b
} from "./_oschunk-HUOHOHZB.js";
import {
    a as L
} from "./_oschunk-Y45M2O2K.js";
import {
    a as H,
    g as $,
    i as R
} from "./_oschunk-6LASTRK7.js";
import {
    a as k,
    d as y
} from "./_oschunk-27GDEXUT.js";
import {
    a as m
} from "./_oschunk-D2MH3QEK.js";
import {
    cb as S
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as E
} from "./_oschunk-NTQBNJ73.js";
import {
    c as f,
    g as V
} from "./_oschunk-DVBKI63I.js";
var o = V(H());
var N = {};
var s = E; {
    let n = class n extends s.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, N);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getEUCountries$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getEUCountries$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !1
        }
        get getEUCountries$AggrRefresh() {
            return this.hasOwnProperty("_getEUCountries$AggrRefresh") || (this._getEUCountries$AggrRefresh = function() {
                var e = function(i, t, g) {
                    var r = this.model,
                        d = this.controller,
                        g = d.callContext(g);
                    return d.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetEUCountries", "screenservices/tradershub/Layouts/SignupLayoutTopMenu/ScreenDataSetGetEUCountries", "F1VjkazjO8NBvKDTxwWdCA", i, t, function(p) {
                        r.variables.getEUCountriesAggr.dataFetchStatusAttr = p
                    }, function(p) {
                        r.variables.getEUCountriesAggr.replaceWith(s.DataConversion.ServerDataConverter.from(p, r.variables.getEUCountriesAggr.constructor))
                    }, void 0, void 0, void 0, g, void 0, !0).then(function() {
                        d._getEUCountriesOnAfterFetch$Action(d.callContext(g))
                    })
                }.bind(this);
                return s.Logger.startActiveSpan("GetEUCountries", function(i) {
                    return i && (i.setAttribute("code.function", "GetEUCountries"), i.setAttribute("outsystems.function.key", "01a85540-6e89-4ded-a165-af682e5344dc"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), s.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._getEUCountries$AggrRefresh
        }
        set getEUCountries$AggrRefresh(e) {
            this._getEUCountries$AggrRefresh = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = ["getEUCountries$AggrRefresh"]), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    a = this.idService;
                return s.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    return r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "0e7d004b-2499-4727-be88-d20a593be567"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), s.Flow.executeAsyncFlow(function() {
                            return s.Flow.executeSequence(function() {
                                if (y.textToBoolean$Action(i.variables.clientCountryIn, !0, e).resultOut) {
                                    t._getEUCountriesOnAfterFetch$Action(e);
                                    var d = t.getEUCountries$AggrRefresh(1, 0, e);
                                    return i.flush(), d
                                }
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _toggleTopDisclaimerOnClick$Action() {
            return this.hasOwnProperty("__toggleTopDisclaimerOnClick$Action") || (this.__toggleTopDisclaimerOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    a = this.idService;
                return s.Logger.startActiveSpan("ToggleTopDisclaimerOnClick", function(r) {
                    r && (r.setAttribute("code.function", "ToggleTopDisclaimerOnClick"), r.setAttribute("outsystems.function.key", "38fa1510-1b13-48cd-aed5-dbe1c10e1d94"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("ToggleTopDisclaimerOnClick"), e = t.callContext(e), i.variables.isTopDisclaimerExpandedVar = !i.variables.isTopDisclaimerExpandedVar
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__toggleTopDisclaimerOnClick$Action
        }
        set _toggleTopDisclaimerOnClick$Action(e) {
            this.__toggleTopDisclaimerOnClick$Action = e
        }
        get _onLogoClick$Action() {
            return this.hasOwnProperty("__onLogoClick$Action") || (this.__onLogoClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    a = this.idService;
                return s.Logger.startActiveSpan("OnLogoClick", function(r) {
                    r && (r.setAttribute("code.function", "OnLogoClick"), r.setAttribute("outsystems.function.key", "49b8119d-aaa7-4369-811b-950faa5f175f"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("OnLogoClick"), e = t.callContext(e), i.variables.hasLinkIn) return s.Navigation.navigateTo(s.Navigation.generateScreenURL("https://deriv.com", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onLogoClick$Action
        }
        set _onLogoClick$Action(e) {
            this.__onLogoClick$Action = e
        }
        get _onClickPolicy$Action() {
            return this.hasOwnProperty("__onClickPolicy$Action") || (this.__onClickPolicy$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    a = this.idService;
                return s.Logger.startActiveSpan("OnClickPolicy", function(r) {
                    r && (r.setAttribute("code.function", "OnClickPolicy"), r.setAttribute("outsystems.function.key", "81d9e60f-72c7-49d2-b751-12399bc13859"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickPolicy"), e = t.callContext(e), y.redirectToExternalURL$Action("https://docs.deriv.com/tnc/eu/security-and-privacy.pdf", !0, e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickPolicy$Action
        }
        set _onClickPolicy$Action(e) {
            this.__onClickPolicy$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    a = this.idService;
                return s.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "8416e772-06fc-4f38-af2b-0c0e899244e0"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), m.layoutDestroy$Action(e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _buttonOnClick$Action() {
            return this.hasOwnProperty("__buttonOnClick$Action") || (this.__buttonOnClick$Action = function(e, i) {
                var t = this.model,
                    a = this.controller,
                    r = this.idService;
                return s.Logger.startActiveSpan("ButtonOnClick", function(d) {
                    d && (d.setAttribute("code.function", "ButtonOnClick"), d.setAttribute("outsystems.function.key", "c21c0c5a-70be-4995-b5d0-73039266c95e"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("ButtonOnClick"), i = a.callContext(i);
                        var g = new s.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("tradershub.Layouts.SignupLayoutTopMenu.ButtonOnClick$vars")));
                        g.value.agreeInLocal = e, y.setEUTrackingCookies$Action(g.value.agreeInLocal, i), t.variables.showCookieConcentVar = !1
                    } finally {
                        d && d.end()
                    }
                }, 1)
            }), this.__buttonOnClick$Action
        }
        set _buttonOnClick$Action(e) {
            this.__buttonOnClick$Action = e
        }
        get _getEUCountriesOnAfterFetch$Action() {
            return this.hasOwnProperty("__getEUCountriesOnAfterFetch$Action") || (this.__getEUCountriesOnAfterFetch$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    a = this.idService;
                return s.Logger.startActiveSpan("GetEUCountriesOnAfterFetch", function(r) {
                    r && (r.setAttribute("code.function", "GetEUCountriesOnAfterFetch"), r.setAttribute("outsystems.function.key", "e0e40948-87da-4c68-a8bd-5b74475f3ce4"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("GetEUCountriesOnAfterFetch"), e = t.callContext(e);
                        var d = new s.DataTypes.VariableHolder,
                            g = new s.DataTypes.VariableHolder(new(s.Controller.BaseController.getJSONDeserializeOutputType(S)));
                        y.textToBoolean$Action(i.variables.clientCountryIn, !0, e).resultOut && (g.value.dataOut = s.JSONUtils.deserializeFromJSON(k.getRawWebsiteStatusResponse(), S, !1), i.variables.isEUVar = i.variables.getEUCountriesAggr.countOut.gt(s.BuiltinFunctions.integerToLongInteger(0)), k.setIsEuUser(i.variables.getEUCountriesAggr.countOut.gt(s.BuiltinFunctions.integerToLongInteger(0))), i.variables.getEUCountriesAggr.countOut.gt(s.BuiltinFunctions.integerToLongInteger(0)) && (d.value = y.checkEUTrackingCookies$Action(e), i.variables.showCookieConcentVar = !d.value.isAvailableOut))
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__getEUCountriesOnAfterFetch$Action
        }
        set _getEUCountriesOnAfterFetch$Action(e) {
            this.__getEUCountriesOnAfterFetch$Action = e
        }
        onParametersChanged$Action(e) {
            var i = this.controller;
            return s.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "0e7d004b-2499-4727-be88-d20a593be567"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onParametersChanged$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        toggleTopDisclaimerOnClick$Action(e) {
            var i = this.controller;
            return s.Logger.startActiveSpan("ToggleTopDisclaimerOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "ToggleTopDisclaimerOnClick"), t.setAttribute("outsystems.function.key", "38fa1510-1b13-48cd-aed5-dbe1c10e1d94"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._toggleTopDisclaimerOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onLogoClick$Action(e) {
            var i = this.controller;
            return s.Logger.startActiveSpan("OnLogoClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnLogoClick"), t.setAttribute("outsystems.function.key", "49b8119d-aaa7-4369-811b-950faa5f175f"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onLogoClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickPolicy$Action(e) {
            var i = this.controller;
            return s.Logger.startActiveSpan("OnClickPolicy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickPolicy"), t.setAttribute("outsystems.function.key", "81d9e60f-72c7-49d2-b751-12399bc13859"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickPolicy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onDestroy$Action(e) {
            var i = this.controller;
            return s.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "8416e772-06fc-4f38-af2b-0c0e899244e0"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        buttonOnClick$Action(e, i) {
            var t = this.controller;
            return s.Logger.startActiveSpan("ButtonOnClick__proxy", function(a) {
                a && (a.setAttribute("code.function", "ButtonOnClick"), a.setAttribute("outsystems.function.key", "c21c0c5a-70be-4995-b5d0-73039266c95e"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._buttonOnClick$Action, i, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        getEUCountriesOnAfterFetch$Action(e) {
            var i = this.controller;
            return s.Logger.startActiveSpan("GetEUCountriesOnAfterFetch__proxy", function(t) {
                t && (t.setAttribute("code.function", "GetEUCountriesOnAfterFetch"), t.setAttribute("outsystems.function.key", "e0e40948-87da-4c68-a8bd-5b74475f3ce4"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._getEUCountriesOnAfterFetch$Action, e)
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    a = this.idService;
                return i.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    a = this.idService;
                return i.onParametersChanged$Action(e)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return y.defaultTimeout
        }
    };
    f(n, "ControllerInner");
    let P = n;
    w = P, w.registerVariableGroupType("tradershub.Layouts.SignupLayoutTopMenu.ButtonOnClick$vars", [{
        name: "Agree",
        attrName: "agreeInLocal",
        mandatory: !1,
        dataType: s.DataTypes.DataTypes.Boolean,
        defaultValue: f(function() {
            return !1
        }, "defaultValue")
    }])
}
var w, W = new s.Controller.ControllerFactory(w, L);
var v = E,
    T = R.PlaceholderContent,
    le = R.IteratorPlaceholderContent,
    h = class h extends $.BaseWebBlock {
        static get displayName() {
            return "Layouts.SignupLayoutTopMenu"
        }
        static getAttributes() {
            return {
                codeFunction: "SignupLayoutTopMenu",
                functionKey: "01086c7f-d882-4603-8f4c-fb6f48272f94",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.Layouts.SignupLayoutTopMenu.css"]
        }
        static getJsDependencies() {
            return ["scripts/tradershub.UserScripts.DerivUTM.js", "scripts/tradershub.UserScripts.JSCookie.js"]
        }
        static getBlocks() {
            return [x]
        }
        get modelFactory() {
            return F
        }
        get controllerFactory() {
            return W
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                c = this.controller,
                e = this.idService,
                i = c.validationService,
                t = this.widgetsRecordProvider,
                a = c.callContext(),
                r = h.ifWidget,
                d = h.textWidget,
                g = h.asPrimitiveValue,
                p = h.getTranslation,
                O = this;
            return o.createElement("div", this.getRootNodeProperties(), o.createElement(u, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: f(function() {
                        var l = a.clone();
                        c.toggleTopDisclaimerOnClick$Action(c.callContext(l))
                    }, "onClick")
                },
                extendedProperties: {
                    style: "color: rgba(0, 0, 0, 0.72); padding-bottom: 0;"
                },
                style: "background-neutral-2 full-width padding-base padding-bottom-none sticky-top",
                visible: n.getCachedValue(e.getId("cwffvAeq8EuomzWt9UYMOw.Visible"), function() {
                    return m.isPhone$Action(a).isPhoneOut && n.variables.isEUVar
                }, function() {
                    return n.variables.isEUVar
                }),
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, o.createElement(u, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, r(n.variables.isTopDisclaimerExpandedVar, !1, this, function() {
                return [o.createElement(C, {
                    value: n.variables.riskWarningVar,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return [o.createElement(C, {
                    style: "",
                    value: n.getCachedValue(e.getId("xK7pr_cPA0qMfJK4ofGUIA.Value"), function() {
                        return v.BuiltinFunctions.substr(n.variables.riskWarningVar, 0, 116)
                    }, function() {
                        return n.variables.riskWarningVar
                    }),
                    _idProps: {
                        service: e,
                        uuid: "3"
                    },
                    _widgetRecordProvider: t
                })]
            })), o.createElement(u, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: center;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }, r(n.variables.isTopDisclaimerExpandedVar, !1, this, function() {
                return [o.createElement(_, {
                    extendedProperties: {
                        height: "32"
                    },
                    image: v.Navigation.VersionedURL.getVersionedUrl("img/tradershub.chevronupmd.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return [o.createElement(_, {
                    extendedProperties: {
                        height: "32",
                        style: "transform: rotateX(180deg);"
                    },
                    image: v.Navigation.VersionedURL.getVersionedUrl("img/tradershub.chevronupmd.svg"),
                    style: "",
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: t
                })]
            }))), o.createElement(u, {
                align: 0,
                animate: !1,
                style: n.getCachedValue(e.getId("LayoutWrapper.Style"), function() {
                    return "layout layout-top" + (n.variables.hasFixedHeaderIn ? " fixed-header" : "") + (n.variables.enableAccessibilityFeaturesIn ? " has-accessible-features" : "") + (n.variables.extendedClassIn === "" ? "" : " " + n.variables.extendedClassIn)
                }, function() {
                    return n.variables.hasFixedHeaderIn
                }, function() {
                    return n.variables.enableAccessibilityFeaturesIn
                }, function() {
                    return n.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    name: "LayoutWrapper"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: v.Model.calculateDataFetchStatus(n.variables._hasFixedHeaderInDataFetchStatus, n.variables._enableAccessibilityFeaturesInDataFetchStatus, n.variables._extendedClassInDataFetchStatus)
            }, o.createElement(u, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #fff;"
                },
                style: "main",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }, o.createElement(D, {
                extendedProperties: {
                    role: "banner"
                },
                tag: "header",
                _idProps: {
                    service: e,
                    name: "Header2"
                },
                _widgetRecordProvider: t
            }, o.createElement(u, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-bottom: 16px; margin-top: 16px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t
            }, o.createElement(x, {
                getOwnerSpan: f(function() {
                    return O.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: f(function() {
                    return O.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: f(function(l) {
                        c.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "11",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    onDesktop: new T(function() {
                        return [o.createElement(u, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            style: "desktop-signup-layout-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "12"
                            },
                            _widgetRecordProvider: t
                        }, o.createElement(_, {
                            extendedEvents: {
                                onClick: f(function() {
                                    var l = a.clone();
                                    c.onLogoClick$Action(c.callContext(l))
                                }, "onClick")
                            },
                            image: v.Navigation.VersionedURL.getVersionedUrl("img/tradershub.deriv25years.svg"),
                            style: n.getCachedValue(e.getId("n81waxLPr0uB25twmSJo5w.Style"), function() {
                                return n.variables.hasLinkIn ? "cursor-pointer" : ""
                            }, function() {
                                return n.variables.hasLinkIn
                            }),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "13"
                            },
                            _widgetRecordProvider: t,
                            style_dataFetchStatus: v.Model.calculateDataFetchStatus(n.variables._hasLinkInDataFetchStatus)
                        }))]
                    }),
                    onTablet: new T(function() {
                        return [o.createElement(u, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: t
                        }, o.createElement(_, {
                            extendedEvents: {
                                onClick: f(function() {
                                    var l = a.clone();
                                    c.onLogoClick$Action(c.callContext(l))
                                }, "onClick")
                            },
                            image: v.Navigation.VersionedURL.getVersionedUrl("img/tradershub.deriv25yearsresponsive.svg"),
                            style: n.getCachedValue(e.getId("UNBD65eZPUar2QzZj7SNmQ.Style"), function() {
                                return n.variables.hasLinkIn ? "cursor-pointer" : ""
                            }, function() {
                                return n.variables.hasLinkIn
                            }),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "15"
                            },
                            _widgetRecordProvider: t,
                            style_dataFetchStatus: v.Model.calculateDataFetchStatus(n.variables._hasLinkInDataFetchStatus)
                        }))]
                    }),
                    onPhone: new T(function() {
                        return [o.createElement(u, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: t
                        }, o.createElement(_, {
                            extendedEvents: {
                                onClick: f(function() {
                                    var l = a.clone();
                                    c.onLogoClick$Action(c.callContext(l))
                                }, "onClick")
                            },
                            image: v.Navigation.VersionedURL.getVersionedUrl("img/tradershub.deriv25yearsresponsive.svg"),
                            style: n.getCachedValue(e.getId("CHJ8CvjrvEenNG7AaWbimA.Style"), function() {
                                return n.variables.hasLinkIn ? "cursor-pointer" : ""
                            }, function() {
                                return n.variables.hasLinkIn
                            }),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: t,
                            style_dataFetchStatus: v.Model.calculateDataFetchStatus(n.variables._hasLinkInDataFetchStatus)
                        }))]
                    })
                },
                _dependencies: [g(n.variables._hasLinkInDataFetchStatus), g(n.variables.hasLinkIn)]
            }))), o.createElement(u, {
                align: 0,
                animate: !1,
                style: "content layout-main-content " + n.variables.extendedClassIn,
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: v.Model.calculateDataFetchStatus(n.variables._extendedClassInDataFetchStatus)
            }, o.createElement(u, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    role: "main",
                    style: "padding: 0px;"
                },
                style: "main-content ThemeGrid_Container",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "MainContentWrapper"
                },
                _widgetRecordProvider: t
            }, o.createElement(U, {
                align: 0,
                content: O.props.placeholders.mainContent,
                extendedProperties: {
                    style: "height: 100%;"
                },
                style: n.getCachedValue(e.getId("MainContent.Style"), function() {
                    return (n.variables.noContentMiddleIn ? "" : "content-middle") + " signup-layout-content-container"
                }, function() {
                    return n.variables.noContentMiddleIn
                }),
                _idProps: {
                    service: e,
                    name: "MainContent"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: v.Model.calculateDataFetchStatus(n.variables._noContentMiddleInDataFetchStatus)
            }), " ")))), o.createElement(u, {
                align: 0,
                animate: !0,
                style: "background-neutral-2 padding-base cookie-concent-bottom-banner display-flex flex-direction-column gap-base a",
                visible: n.getCachedValue(e.getId("TTOKgrjjw0K0YP5fyo6iKQ.Visible"), function() {
                    return m.isPhone$Action(a).isPhoneOut && n.variables.isEUVar && n.variables.showCookieConcentVar
                }, function() {
                    return n.variables.isEUVar
                }, function() {
                    return n.variables.showCookieConcentVar
                }),
                _idProps: {
                    service: e,
                    uuid: "21"
                },
                _widgetRecordProvider: t
            }, o.createElement(u, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "22"
                },
                _widgetRecordProvider: t
            }, o.createElement(b, {
                extendedProperties: {
                    style: "color: rgba(0, 0, 0, 0.72);"
                },
                style: "",
                text: ["We use cookies to improve and personalise your experience. By clicking Accept, you agree to our cookie use.\xA0"],
                _idProps: {
                    service: e,
                    uuid: "23"
                },
                _widgetRecordProvider: t
            }), o.createElement(C, {
                extendedEvents: {
                    onClick: f(function() {
                        var l = a.clone();
                        c.onClickPolicy$Action(c.callContext(l))
                    }, "onClick")
                },
                extendedProperties: {
                    style: "text-decoration: underline;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                style: "cursor-pointer",
                value: "See our policy.",
                _idProps: {
                    service: e,
                    uuid: "24"
                },
                _widgetRecordProvider: t
            })), o.createElement(u, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center column-gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "25"
                },
                _widgetRecordProvider: t
            }, o.createElement(A, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: transparent; height: 32px;"
                },
                isDefault: !1,
                onClick: f(function() {
                    var l = a.clone();
                    c.buttonOnClick$Action(!0, c.callContext(l))
                }, "onClick"),
                style: "btn full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "26"
                },
                _widgetRecordProvider: t
            }, o.createElement(b, {
                extendedProperties: {
                    style: "font-weight: 500;"
                },
                style: "font-size-xs",
                text: ["Accept"],
                _idProps: {
                    service: e,
                    uuid: "27"
                },
                _widgetRecordProvider: t
            })), o.createElement(A, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: transparent; height: 32px; margin-top: 0px;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                isDefault: !1,
                onClick: f(function() {
                    var l = a.clone();
                    c.buttonOnClick$Action(!1, c.callContext(l))
                }, "onClick"),
                style: "btn full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "28"
                },
                _widgetRecordProvider: t
            }, o.createElement(b, {
                extendedProperties: {
                    style: "font-weight: 500;"
                },
                style: "font-size-xs",
                text: ["Reject"],
                _idProps: {
                    service: e,
                    uuid: "29"
                },
                _widgetRecordProvider: t
            })))), o.createElement(u, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "min-height: 110px; text-align: center;"
                },
                style: "background-neutral-2 padding-base cookie-concent-bottom-banner display-flex flex-direction-column gap-base align-items-center justify-content-center",
                visible: n.getCachedValue(e.getId("ojBJ_16l20OX_encdCrpdw.Visible"), function() {
                    return !m.isPhone$Action(a).isPhoneOut && n.variables.isEUVar
                }, function() {
                    return n.variables.isEUVar
                }),
                _idProps: {
                    service: e,
                    uuid: "30"
                },
                _widgetRecordProvider: t
            }, r(n.variables.showCookieConcentVar, !1, this, function() {
                return [o.createElement(u, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "31"
                    },
                    _widgetRecordProvider: t
                }, o.createElement(b, {
                    extendedProperties: {
                        style: "color: rgba(0, 0, 0, 0.72);"
                    },
                    style: "",
                    text: ["We use cookies to improve and personalise your experience. By clicking Accept, you agree to our cookie use.\xA0"],
                    _idProps: {
                        service: e,
                        uuid: "32"
                    },
                    _widgetRecordProvider: t
                }), o.createElement(C, {
                    extendedEvents: {
                        onClick: f(function() {
                            var l = a.clone();
                            c.onClickPolicy$Action(c.callContext(l))
                        }, "onClick")
                    },
                    extendedProperties: {
                        style: "text-decoration: underline;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter"
                    },
                    style: "cursor-pointer",
                    value: "See our policy.",
                    _idProps: {
                        service: e,
                        uuid: "33"
                    },
                    _widgetRecordProvider: t
                })), o.createElement(u, {
                    align: 0,
                    animate: !1,
                    style: "display-flex align-items-center column-gap-s justify-content-center",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "34"
                    },
                    _widgetRecordProvider: t
                }, o.createElement(A, {
                    enabled: !0,
                    extendedProperties: {
                        style: "background-color: transparent;"
                    },
                    gridProperties: {
                        width: "136px"
                    },
                    isDefault: !1,
                    onClick: f(function() {
                        var l = a.clone();
                        c.buttonOnClick$Action(!0, c.callContext(l))
                    }, "onClick"),
                    style: "btn",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "35"
                    },
                    _widgetRecordProvider: t
                }, o.createElement(b, {
                    extendedProperties: {
                        style: "font-weight: 500;"
                    },
                    style: "font-size-xs",
                    text: ["Accept"],
                    _idProps: {
                        service: e,
                        uuid: "36"
                    },
                    _widgetRecordProvider: t
                })), o.createElement(A, {
                    enabled: !0,
                    extendedProperties: {
                        style: "background-color: transparent; margin-top: 0px;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_MarginGutter",
                        width: "136px"
                    },
                    isDefault: !1,
                    onClick: f(function() {
                        var l = a.clone();
                        c.buttonOnClick$Action(!1, c.callContext(l))
                    }, "onClick"),
                    style: "btn ",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "37"
                    },
                    _widgetRecordProvider: t
                }, o.createElement(b, {
                    extendedProperties: {
                        style: "font-weight: 500;"
                    },
                    style: "font-size-xs",
                    text: ["Reject"],
                    _idProps: {
                        service: e,
                        uuid: "38"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return [o.createElement(u, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "max-width: 985px; text-align: left;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "39"
                    },
                    _widgetRecordProvider: t
                }, o.createElement(C, {
                    value: n.variables.riskWarningVar,
                    _idProps: {
                        service: e,
                        uuid: "40"
                    },
                    _widgetRecordProvider: t
                }))]
            })))
        }
    };
f(h, "View");
var I = h,
    de = I;
export {
    de as a
};