import {
    a as Q,
    b as Z,
    c as ee
} from "./_oschunk-EJVAXX3S.js";
import {
    b as Y
} from "./_oschunk-GPNNXU3M.js";
import {
    b as L,
    d as _,
    f as K,
    k as $,
    n as T,
    o as X,
    p as V,
    r as U
} from "./_oschunk-M2CKCDBB.js";
import {
    a as N
} from "./_oschunk-NQZZDANH.js";
import {
    a as F,
    g as R,
    i as b
} from "./_oschunk-WZHUAZJP.js";
import {
    a as z,
    m as f,
    o as P
} from "./_oschunk-KZFTAIEG.js";
import {
    Eg as k
} from "./_oschunk-UATY3RVV.js";
import {
    ia as h
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s,
    h as D
} from "./_oschunk-QHO7QY6K.js";
var A = D(F());
var m = h; {
    let a = class a extends m.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickCloseIcon$Action() {
            return this.hasOwnProperty("__onClickCloseIcon$Action") || (this.__onClickCloseIcon$Action = function(e, r) {
                var t = this.model,
                    i = this.controller,
                    n = this.idService;
                return m.Logger.startActiveSpan("onClickCloseIcon", function(l) {
                    l && (l.setAttribute("code.function", "onClickCloseIcon"), l.setAttribute("outsystems.function.key", "64415918-7d85-43c2-80eb-d994da6beeda"), l.setAttribute("outsystems.function.owner.name", "Accounts"), l.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("onClickCloseIcon"), r = i.callContext(r);
                        var u = new m.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("Accounts.Layouts.MobileNavigationWizard.onClickCloseIcon$vars")));
                        u.value.isModalOpenInLocal = e, z.getIsWorkflow() ? P.closeTab$Action(r) : t.variables.shouldDisplayExitConfirmModalVar = u.value.isModalOpenInLocal
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__onClickCloseIcon$Action
        }
        set _onClickCloseIcon$Action(e) {
            this.__onClickCloseIcon$Action = e
        }
        get _onClick$Action() {
            return this.hasOwnProperty("__onClick$Action") || (this.__onClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return m.Logger.startActiveSpan("OnClick", function(n) {
                    return n && (n.setAttribute("code.function", "OnClick"), n.setAttribute("outsystems.function.key", "93ad4c00-736d-4396-8843-8a7cdca0ac89"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClick"), e = t.callContext(e), m.Flow.executeAsyncFlow(function() {
                            return m.Flow.executeSequence(function() {
                                if (r.variables.currentStepIn === 1)
                                    if (z.getIsWorkflow()) P.closeTab$Action(e);
                                    else return m.Flow.returnAsync(m.Navigation.navigateBack(null, e, !0));
                                else return t.goToPreviousStep$Action(r.variables.currentStepIn - 1, e)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onClick$Action
        }
        set _onClick$Action(e) {
            this.__onClick$Action = e
        }
        onClickCloseIcon$Action(e, r) {
            var t = this.controller;
            return m.Logger.startActiveSpan("onClickCloseIcon__proxy", function(i) {
                i && (i.setAttribute("code.function", "onClickCloseIcon"), i.setAttribute("outsystems.function.key", "64415918-7d85-43c2-80eb-d994da6beeda"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClickCloseIcon$Action, r, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onClick$Action(e) {
            var r = this.controller;
            return m.Logger.startActiveSpan("OnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClick"), t.setAttribute("outsystems.function.key", "93ad4c00-736d-4396-8843-8a7cdca0ac89"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get goToPreviousStep$Action() {
            return this.hasOwnProperty("_goToPreviousStep$Action") || (this._goToPreviousStep$Action = function() {
                return Promise.resolve()
            }), this._goToPreviousStep$Action
        }
        set goToPreviousStep$Action(e) {
            this._goToPreviousStep$Action = e
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
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return P.defaultTimeout
        }
    };
    s(a, "ControllerInner");
    let v = a;
    W = v, W.registerVariableGroupType("Accounts.Layouts.MobileNavigationWizard.onClickCloseIcon$vars", [{
        name: "IsModalOpen",
        attrName: "isModalOpenInLocal",
        mandatory: !0,
        dataType: m.DataTypes.DataTypes.Boolean,
        defaultValue: s(function() {
            return !1
        }, "defaultValue")
    }])
}
var W, te = new m.Controller.ControllerFactory(W, N);
var g = D(F());
var S = h; {
    let a = class a extends S.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _continueVerificationOnClick$Action() {
            return this.hasOwnProperty("__continueVerificationOnClick$Action") || (this.__continueVerificationOnClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return S.Logger.startActiveSpan("ContinueVerificationOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "ContinueVerificationOnClick"), n.setAttribute("outsystems.function.key", "036a34bc-2b13-415c-b09c-3a2ad47e71d5"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), S.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("ContinueVerificationOnClick"), e = t.callContext(e), S.Flow.executeAsyncFlow(function() {
                            return r.variables.isOpenIn = !1, t.event$Action(r.variables.isOpenIn, e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__continueVerificationOnClick$Action
        }
        set _continueVerificationOnClick$Action(e) {
            this.__continueVerificationOnClick$Action = e
        }
        continueVerificationOnClick$Action(e) {
            var r = this.controller;
            return S.Logger.startActiveSpan("ContinueVerificationOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ContinueVerificationOnClick"), t.setAttribute("outsystems.function.key", "036a34bc-2b13-415c-b09c-3a2ad47e71d5"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), S.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._continueVerificationOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get event$Action() {
            return this.hasOwnProperty("_event$Action") || (this._event$Action = function() {
                return Promise.resolve()
            }), this._event$Action
        }
        set event$Action(e) {
            this._event$Action = e
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
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return P.defaultTimeout
        }
    };
    s(a, "ControllerInner");
    let v = a;
    re = v
}
var re, ne = new S.Controller.ControllerFactory(re, N);
var p = h,
    ke = b.PlaceholderContent,
    $e = b.IteratorPlaceholderContent,
    E = class E extends R.BaseWebBlock {
        static get displayName() {
            return "Common.ExitIdentityVerification"
        }
        static getAttributes() {
            return {
                codeFunction: "ExitIdentityVerification",
                functionKey: "ca7e0972-faf3-45ae-96aa-68a3fe0217b8",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Common.ExitIdentityVerification.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return Q
        }
        get controllerFactory() {
            return ne
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                c = this.controller,
                e = this.idService,
                r = c.validationService,
                t = this.widgetsRecordProvider,
                i = c.callContext(),
                n = E.ifWidget,
                l = E.textWidget,
                u = E.asPrimitiveValue,
                H = E.getTranslation,
                y = this;
            return g.createElement("div", this.getRootNodeProperties(), g.createElement(X, {
                showPopup: a.variables.isOpenIn,
                style: "popup-dialog",
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: p.Model.calculateDataFetchStatus(a.variables._isOpenInDataFetchStatus)
            }, g.createElement(_, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column row-gap-base",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, g.createElement(_, {
                align: 0,
                animate: !1,
                style: "display-flex justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }, g.createElement(K, {
                gridProperties: {
                    marginLeft: "0"
                },
                style: "font-size-h6 font-bold",
                value: a.variables.headingIn,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: p.Model.calculateDataFetchStatus(a.variables._headingInDataFetchStatus)
            }), g.createElement(T, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: s(function() {
                    return Promise.resolve().then(function() {
                        var d = i.clone();
                        return c.continueVerificationOnClick$Action(c.callContext(d))
                    })
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }, g.createElement($, {
                image: p.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneXmarkRegularIcon.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }))), "You will loose your progress.", g.createElement(_, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column row-gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }, g.createElement(L, {
                enabled: !0,
                extendedProperties: {
                    style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: s(function() {
                    return y.validateWidget(""), Promise.resolve().then(function() {
                        var d = i.clone();
                        return c.continueVerificationOnClick$Action(c.callContext(d))
                    })
                }, "onClick"),
                style: "btn btn-primary ",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t
            }, g.createElement(U, {
                extendedProperties: {
                    style: "font-size: 14px;"
                },
                text: ["Continue verification"],
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            })), g.createElement(L, {
                enabled: !0,
                extendedProperties: {
                    style: "border-radius: 100px; height: 40px; margin-top: 0px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: s(function() {
                    try {
                        p.Navigation.navigateTo(p.Navigation.generateScreenURL("Accounts", "Verification", {}), p.Transitions.createTransition(p.Transitions.TransitionAnimation.Fade), null, !0)
                    } catch (d) {
                        if (d.name !== "RedirectOccurredException") throw d
                    }
                }, "onClick"),
                style: "btn",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }, g.createElement(U, {
                extendedProperties: {
                    style: "font-size: 14px;"
                },
                text: ["Go to Account settings"],
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t
            }))))))
        }
    };
s(E, "View");
var B = E,
    M = B;
var w = D(F());
var se = {};

function G(v, a, c, e) {
    v.Initialized = a.InitializedHandler
}
s(G, "default");
var o = h; {
    let a = class a extends o.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, se);
            var i = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: s(function(n) {
                    return n = n === void 0 ? "" : n, i.executeActionInsideJSNode(i._initializedHandler$Action.bind(i, o.DataConversion.JSNodeParamConverter.from(n, o.DataTypes.DataTypes.Text)), i.callContext(), function(l) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "1de7cb36-6298-4f20-a2be-639e58d086c9"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var l = new o.DataTypes.VariableHolder;
                        f.logEvent$Action(k.logType.general, "Going to create ProgressBar", e), l.value = f.generateUniqueId$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, e), r.variables.internal_ConfigsVar.uniqueIdAttr = l.value.unique_IDOut, r.variables.internal_ConfigsVar.progressAttr = r.variables.progressIn, r.variables.internal_ConfigsVar.progressColorAttr = r.variables.progressColorIn, r.variables.internal_ConfigsVar.trailColorAttr = r.variables.trailColorIn, r.variables.internal_ConfigsVar.shapeAttr = r.variables.optionalConfigsIn.shapeAttr, r.variables.internal_ConfigsVar.thicknessAttr = r.variables.thicknessIn, r.variables.internal_ConfigsVar.animateInitialProgressAttr = r.variables.optionalConfigsIn.animateInitialProgressAttr, r.variables.internal_ConfigsVar.typeAttr = k.progressType.bar, r.variables.internal_ConfigsVar.extendedClassAttr = r.variables.extendedClassIn, r.variables.internal_ConfigsVar.initialProgressAttr = r.variables.internal_ConfigsVar.progressAttr, f.progressBarCreate$Action(r.variables.internal_ConfigsVar, e), t._registerCallbacks$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "39dd2971-6630-4971-97e5-f83520dec49e"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), r.variables.progressIn !== r.variables.internal_ConfigsVar.progressAttr && (r.variables.internal_ConfigsVar.progressAttr = r.variables.progressIn, f.progressChangeIntegerProperty$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, "Progress", o.BuiltinFunctions.integerToLongInteger(r.variables.internal_ConfigsVar.progressAttr), e)), r.variables.progressColorIn !== r.variables.internal_ConfigsVar.progressColorAttr && (r.variables.internal_ConfigsVar.progressColorAttr = r.variables.progressColorIn, f.progressChangeTextProperty$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, "ProgressColor", r.variables.internal_ConfigsVar.progressColorAttr, e)), r.variables.trailColorIn !== r.variables.internal_ConfigsVar.trailColorAttr && (r.variables.internal_ConfigsVar.trailColorAttr = r.variables.trailColorIn, f.progressChangeTextProperty$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, "TrailColor", r.variables.internal_ConfigsVar.trailColorAttr, e)), r.variables.thicknessIn !== r.variables.internal_ConfigsVar.thicknessAttr && (r.variables.internal_ConfigsVar.thicknessAttr = r.variables.thicknessIn, f.progressChangeIntegerProperty$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, "Thickness", o.BuiltinFunctions.integerToLongInteger(r.variables.internal_ConfigsVar.thicknessAttr), e)), r.variables.optionalConfigsIn.shapeAttr !== r.variables.internal_ConfigsVar.shapeAttr && (r.variables.internal_ConfigsVar.shapeAttr = r.variables.optionalConfigsIn.shapeAttr, f.progressChangeTextProperty$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, "Shape", r.variables.internal_ConfigsVar.shapeAttr, e)), r.variables.extendedClassIn !== r.variables.internal_ConfigsVar.extendedClassAttr && (r.variables.internal_ConfigsVar.extendedClassAttr = r.variables.extendedClassIn, f.progressChangeTextProperty$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", r.variables.internal_ConfigsVar.extendedClassAttr, e))
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(e, r) {
                var t = this.model,
                    i = this.controller,
                    n = this.idService;
                return o.Logger.startActiveSpan("InitializedHandler", function(l) {
                    return l && (l.setAttribute("code.function", "InitializedHandler"), l.setAttribute("outsystems.function.key", "4e9a6be6-5cee-4691-b501-6be035f94ad7"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        i.ensureControllerAlive("InitializedHandler"), r = i.callContext(r);
                        var u = new o.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("OutSystemsUI.Numbers.ProgressBar.InitializedHandler$vars")));
                        return u.value.progressBarIdInLocal = e, o.Flow.executeAsyncFlow(function() {
                            return i.initialized$Action(u.value.progressBarIdInLocal, r)
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__initializedHandler$Action
        }
        set _initializedHandler$Action(e) {
            this.__initializedHandler$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "55939c57-61a6-493f-9c67-9f80c973aae9"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), f.progressDestroy$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "7c507aba-5536-4c68-874e-506218489593"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), f.progressInitialize$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, e), f.logEvent$Action(k.logType.general, "ProgressBar Created", e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("RegisterCallbacks", function(n) {
                    n && (n.setAttribute("code.function", "RegisterCallbacks"), n.setAttribute("outsystems.function.key", "fca31c93-db44-4023-b3c7-494fd58f2155"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RegisterCallbacks"), e = t.callContext(e);
                        var l = new o.DataTypes.VariableHolder;
                        l.value = o.Logger.startActiveSpan("GetCallbackHandlers", function(u) {
                            u && (u.setAttribute("code.function", "GetCallbackHandlers"), u.setAttribute("outsystems.function.key", "ea056eea-c384-450c-814b-380c830b6bdc"), u.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), u.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(G, "GetCallbackHandlers", "RegisterCallbacks", {
                                    Initialized: o.DataConversion.JSNodeParamConverter.to(null, o.DataTypes.DataTypes.Object)
                                }, function(H) {
                                    var y = new(t.constructor.getVariableGroupType("OutSystemsUI.Numbers.ProgressBar.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return y.initializedOut = o.DataConversion.JSNodeParamConverter.from(H.Initialized, o.DataTypes.DataTypes.Object), y
                                }, {
                                    InitializedHandler: t.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), f.progressRegisterCallback$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, k.registeredCallbackEvents.initialized, l.value.initializedOut, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(e) {
            this.__registerCallbacks$Action = e
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return o.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "1de7cb36-6298-4f20-a2be-639e58d086c9"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var r = this.controller;
            return o.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "39dd2971-6630-4971-97e5-f83520dec49e"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        initializedHandler$Action(e, r) {
            var t = this.controller;
            return o.Logger.startActiveSpan("InitializedHandler__proxy", function(i) {
                return i && (i.setAttribute("code.function", "InitializedHandler"), i.setAttribute("outsystems.function.key", "4e9a6be6-5cee-4691-b501-6be035f94ad7"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._initializedHandler$Action, r, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return o.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "55939c57-61a6-493f-9c67-9f80c973aae9"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return o.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "7c507aba-5536-4c68-874e-506218489593"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        registerCallbacks$Action(e) {
            var r = this.controller;
            return o.Logger.startActiveSpan("RegisterCallbacks__proxy", function(t) {
                t && (t.setAttribute("code.function", "RegisterCallbacks"), t.setAttribute("outsystems.function.key", "fca31c93-db44-4023-b3c7-494fd58f2155"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._registerCallbacks$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get initialized$Action() {
            return this.hasOwnProperty("_initialized$Action") || (this._initialized$Action = function() {
                return Promise.resolve()
            }), this._initialized$Action
        }
        set initialized$Action(e) {
            this._initialized$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    i = this.idService;
                return r.onInitialize$Action(e)
            }), this._onInitializeEventHandler
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    i = this.idService;
                return r.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    i = this.idService;
                return r.onParametersChanged$Action(e)
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
            return f.defaultTimeout
        }
    };
    s(a, "ControllerInner");
    let v = a;
    x = v, x.registerVariableGroupType("OutSystemsUI.Numbers.ProgressBar.InitializedHandler$vars", [{
        name: "ProgressBarId",
        attrName: "progressBarIdInLocal",
        mandatory: !1,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), x.registerVariableGroupType("OutSystemsUI.Numbers.ProgressBar.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Object,
        defaultValue: s(function() {
            return null
        }, "defaultValue")
    }])
}
var x, ae = new o.Controller.ControllerFactory(x, Y);
var je = b.PlaceholderContent,
    Ke = b.IteratorPlaceholderContent,
    I = class I extends R.BaseWebBlock {
        static get displayName() {
            return "Numbers.ProgressBar"
        }
        static getAttributes() {
            return {
                codeFunction: "ProgressBar",
                functionKey: "aa878163-7d92-4bc9-acce-392b67407218",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return ["scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return Z
        }
        get controllerFactory() {
            return ae
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                c = this.controller,
                e = this.idService,
                r = c.validationService,
                t = this.widgetsRecordProvider,
                i = c.callContext(),
                n = I.ifWidget,
                l = I.textWidget,
                u = I.asPrimitiveValue,
                H = I.getTranslation,
                y = this;
            return w.createElement("div", this.getRootNodeProperties(), w.createElement(_, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    name: a.variables.internal_ConfigsVar.uniqueIdAttr
                },
                style: "osui-progress-bar",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProgressBar"
                },
                _widgetRecordProvider: t
            }, w.createElement(_, {
                align: 0,
                animate: !1,
                style: "osui-progress-bar__container",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProgressContainer"
                },
                _widgetRecordProvider: t
            }, w.createElement(_, {
                align: 0,
                animate: !1,
                style: "osui-progress-bar__value",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProgressValue"
                },
                _widgetRecordProvider: t
            }), w.createElement(V, {
                align: 0,
                content: y.props.placeholders.content,
                style: "osui-progress-bar__content ph",
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t
            }))))
        }
    };
s(I, "View");
var q = I,
    J = q;
var C = h,
    ue = b.PlaceholderContent,
    at = b.IteratorPlaceholderContent,
    O = class O extends R.BaseWebBlock {
        static get displayName() {
            return "Layouts.MobileNavigationWizard"
        }
        static getAttributes() {
            return {
                codeFunction: "MobileNavigationWizard",
                functionKey: "c087d134-9f38-4654-abfd-b1c852a29a85",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Layouts.MobileNavigationWizard.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [M, J]
        }
        get modelFactory() {
            return ee
        }
        get controllerFactory() {
            return te
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                c = this.controller,
                e = this.idService,
                r = c.validationService,
                t = this.widgetsRecordProvider,
                i = c.callContext(),
                n = O.ifWidget,
                l = O.textWidget,
                u = O.asPrimitiveValue,
                H = O.getTranslation,
                y = this;
            return A.createElement("div", this.getRootNodeProperties(), A.createElement(M, {
                getOwnerSpan: s(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsOpen: a.variables.shouldDisplayExitConfirmModalVar,
                    Heading: a.variables.displayExitConfirmModalHeadingIn,
                    _headingInDataFetchStatus: C.Model.calculateDataFetchStatus(a.variables._displayExitConfirmModalHeadingInDataFetchStatus)
                },
                events: {
                    _handleError: s(function(d) {
                        c.handleError(d)
                    }, "_handleError"),
                    event$Action: s(function(d) {
                        var le = i.clone();
                        c.onClickCloseIcon$Action(d, c.callContext(le))
                    }, "event$Action")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }), A.createElement(_, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column full-height mobile-navigation-wizard__layout",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, A.createElement(_, {
                align: 0,
                animate: !1,
                style: "full-width mobile-navigation-wizard__header",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }, A.createElement($, {
                extendedEvents: {
                    onClick: s(function() {
                        return Promise.resolve().then(function() {
                            var d = i.clone();
                            return c.onClick$Action(c.callContext(d))
                        })
                    }, "onClick")
                },
                image: C.Navigation.VersionedURL.getVersionedUrl("img/Accounts.iconback.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }), A.createElement(J, {
                getOwnerSpan: s(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Progress: C.BuiltinFunctions.decimalToInteger(C.BuiltinFunctions.trunc(C.BuiltinFunctions.integerToDecimal(a.variables.currentStepIn).div(C.BuiltinFunctions.integerToDecimal(a.variables.stepCountIn)).times(C.BuiltinFunctions.integerToDecimal(100)))),
                    _progressInDataFetchStatus: C.Model.calculateDataFetchStatus(a.variables._currentStepInDataFetchStatus, a.variables._stepCountInDataFetchStatus)
                },
                events: {
                    _handleError: s(function(d) {
                        c.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "4",
                    alias: "2"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: ue.Empty
                },
                _dependencies: []
            }), A.createElement(T, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: s(function() {
                    var d = i.clone();
                    c.onClickCloseIcon$Action(!0, c.callContext(d))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }, A.createElement($, {
                image: C.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneXmarkRegularIcon.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }))), A.createElement(V, {
                align: 0,
                content: y.props.placeholders.section,
                style: "full-height",
                _idProps: {
                    service: e,
                    name: "Section"
                },
                _widgetRecordProvider: t
            })))
        }
    };
s(O, "View");
var j = O,
    lt = j;
export {
    M as a, lt as b
};