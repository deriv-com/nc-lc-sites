import {
    a as $
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as V
} from "./_oschunk-JF3PYARS.js";
import "./_oschunk-6RCCOD74.js";
import "./_oschunk-7SYLUYK7.js";
import "./_oschunk-UZGD3HJ2.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as X,
    f as y,
    n as U,
    u as A
} from "./_oschunk-VR5BNL2K.js";
import {
    a as re,
    g as N,
    m as K,
    n as q,
    q as Q,
    r as Z,
    s as Y,
    t as k
} from "./_oschunk-4VHUVDBV.js";
import {
    a as j
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as R,
    Sb as I,
    ab as S,
    o as w,
    ub as c,
    xa as G
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as b,
    c as s,
    e as ne,
    m as B,
    n as z,
    p as P,
    w as J
} from "./_oschunk-M5BUVJ72.js";
var ie = {
        "pc9GPFoIxEiHbglz+QNlOA#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "tVHW8065SEOBE5aE4Vy7Lw#Value": "\u0644\u0627",
        "oZs5MJeyeUmr8qxEAR0OLA#Value": "\u0646\u0639\u0645",
        "UKRBMEiqCEC55uJwUSNWtg#Value": "\u0647\u0644 \u062A\u062F\u0641\u0639 \u0627\u0644\u0636\u0631\u0627\u0626\u0628 \u062E\u0627\u0631\u062C \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A\u061F",
        "Vl5Oj+V_gECJKAeriuCbtw#Value.-1037113639.1": "\u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0627\u0644\u064A."
    },
    ee = {
        "ar-001": {
            translations: ie,
            isRTL: !0
        }
    };

function H(m, d, _) {
    m.PutUpdateTaxInformation()
}
s(H, "default");
var r = b; {
    let d = class d extends r.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, ee);
            var o = this.controller;
            this.clientActionProxies = {
                putUpdateTaxInformation$Action: s(function() {
                    return o.executeActionInsideJSNode(o._putUpdateTaxInformation$Action.bind(o), o.callContext(), function(i) {
                        return {}
                    }, function() {}, "PutUpdateTaxInformation")
                }, "putUpdateTaxInformation$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get putUpdateTaxinformation$ServerAction() {
            return this.hasOwnProperty("_putUpdateTaxinformation$ServerAction") || (this._putUpdateTaxinformation$ServerAction = function(e, n, t) {
                var o = this.controller;
                return r.Logger.startActiveSpan("PutUpdateTaxinformation", function(i) {
                    return i && (i.setAttribute("code.function", "PutUpdateTaxinformation"), i.setAttribute("outsystems.function.key", "f8289fee-7331-4fd5-bdb1-ebb2a75092e2"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), r.Flow.tryFinally(function() {
                        var u = {
                            Authorization: r.DataConversion.ServerDataConverter.to(e, r.DataTypes.DataTypes.Text),
                            Request: r.DataConversion.ServerDataConverter.to(n, r.DataTypes.DataTypes.Record)
                        };
                        return o.callServerAction("PutUpdateTaxinformation", "screenservices/uae/OnboardingFlow/PayTaxesOutsideUAE/ActionPutUpdateTaxinformation", "OZTyiktQjNCb5MN3N_A0AA", u, o.callContext(t), void 0, void 0, !0).then(function(v) {
                            var a = new(o.constructor.getVariableGroupType("uae.OnboardingFlow.PayTaxesOutsideUAE$ActionPutUpdateTaxinformation"));
                            return a.responseOut = r.DataConversion.ServerDataConverter.from(v.Response, S), a
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._putUpdateTaxinformation$ServerAction
        }
        set putUpdateTaxinformation$ServerAction(e) {
            this._putUpdateTaxinformation$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "5a478bb5-1583-45d0-bf25-773325cbaaf4"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var u = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(w)));
                        if (c.getis_taxpayer_outside_uae() === r.BuiltinFunctions.nullTextIdentifier())
                            if (c.getgetTaxAPIResponse() !== r.BuiltinFunctions.nullTextIdentifier()) u.value.dataOut = r.JSONUtils.deserializeFromJSON(c.getgetTaxAPIResponse(), w, !1), c.setis_taxpayer_outside_uae(u.value.dataOut.tax_informationAttr.tax_residence_countryAttr === r.BuiltinFunctions.nullTextIdentifier() ? "" : u.value.dataOut.tax_informationAttr.is_foreign_taxpayerAttr ? "yes" : "no");
                            else return;
                        n.variables.selecteditemVar = c.getis_taxpayer_outside_uae()
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _putUpdateTaxInformation$Action() {
            return this.hasOwnProperty("__putUpdateTaxInformation$Action") || (this.__putUpdateTaxInformation$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("PutUpdateTaxInformation", function(i) {
                    return i && (i.setAttribute("code.function", "PutUpdateTaxInformation"), i.setAttribute("outsystems.function.key", "b3ce2f3b-abba-4a09-aeba-b970d92ff882"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("PutUpdateTaxInformation"), e = t.callContext(e);
                        var u = new r.DataTypes.VariableHolder,
                            v = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return v.value = I.getAuth$Action(e), n.flush(), t.putUpdateTaxinformation$ServerAction(v.value.tokenOut, (function() {
                                var a = new G;
                                return a.is_foreign_taxpayerAttr = c.getis_taxpayer_outside_uae() === "yes" ? "True" : "False", a
                            })(), e).then(function(a) {
                                u.value = a
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__putUpdateTaxInformation$Action
        }
        set _putUpdateTaxInformation$Action(e) {
            this.__putUpdateTaxInformation$Action = e
        }
        get _nextStep$Action() {
            return this.hasOwnProperty("__nextStep$Action") || (this.__nextStep$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("NextStep", function(i) {
                    i && (i.setAttribute("code.function", "NextStep"), i.setAttribute("outsystems.function.key", "b400872c-fb83-4f50-bc89-92f028c4680c"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("NextStep"), e = t.callContext(e), c.getis_taxpayer_outside_uae() === "yes" ? r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "tax-info", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.None), e, !0) : c.getemployment_status() === "unemployed" || c.getemployment_status() === "pensioner" ? r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "source-of-income", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.None), e, !0) : r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "employment-details", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__nextStep$Action
        }
        set _nextStep$Action(e) {
            this.__nextStep$Action = e
        }
        get _onClickPrevious$Action() {
            return this.hasOwnProperty("__onClickPrevious$Action") || (this.__onClickPrevious$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnClickPrevious", function(i) {
                    i && (i.setAttribute("code.function", "OnClickPrevious"), i.setAttribute("outsystems.function.key", "c4e78122-3f72-487b-a4d0-8ad5a81e58c8"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickPrevious"), e = t.callContext(e), r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "employment-status", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onClickPrevious$Action
        }
        set _onClickPrevious$Action(e) {
            this.__onClickPrevious$Action = e
        }
        get _itemOnClick$Action() {
            return this.hasOwnProperty("__itemOnClick$Action") || (this.__itemOnClick$Action = function(e, n) {
                var t = this.model,
                    o = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("ItemOnClick", function(u) {
                    u && (u.setAttribute("code.function", "ItemOnClick"), u.setAttribute("outsystems.function.key", "e04803e4-9f17-484f-8019-8ccdf60b895e"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("ItemOnClick"), n = o.callContext(n);
                        var v = new r.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.OnboardingFlow.PayTaxesOutsideUAE.ItemOnClick$vars")));
                        v.value.selectedInLocal = e, t.variables.selecteditemVar = v.value.selectedInLocal, c.setis_taxpayer_outside_uae(t.variables.selecteditemVar), r.Logger.startActiveSpan("PutUpadateTaxInformation", function(a) {
                            a && (a.setAttribute("code.function", "PutUpadateTaxInformation"), a.setAttribute("outsystems.function.key", "d626c634-9e03-4d92-8ade-516875379ba8"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return o.safeExecuteJSNode(H, "PutUpadateTaxInformation", "ItemOnClick", null, function(O) {}, {
                                    PutUpdateTaxInformation: o.clientActionProxies.putUpdateTaxInformation$Action
                                }, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1)
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__itemOnClick$Action
        }
        set _itemOnClick$Action(e) {
            this.__itemOnClick$Action = e
        }
        onReady$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "5a478bb5-1583-45d0-bf25-773325cbaaf4"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        putUpdateTaxInformation$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("PutUpdateTaxInformation__proxy", function(t) {
                return t && (t.setAttribute("code.function", "PutUpdateTaxInformation"), t.setAttribute("outsystems.function.key", "b3ce2f3b-abba-4a09-aeba-b970d92ff882"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._putUpdateTaxInformation$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        nextStep$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("NextStep__proxy", function(t) {
                t && (t.setAttribute("code.function", "NextStep"), t.setAttribute("outsystems.function.key", "b400872c-fb83-4f50-bc89-92f028c4680c"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._nextStep$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickPrevious$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnClickPrevious__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickPrevious"), t.setAttribute("outsystems.function.key", "c4e78122-3f72-487b-a4d0-8ad5a81e58c8"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickPrevious$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        itemOnClick$Action(e, n) {
            var t = this.controller;
            return r.Logger.startActiveSpan("ItemOnClick__proxy", function(o) {
                o && (o.setAttribute("code.function", "ItemOnClick"), o.setAttribute("outsystems.function.key", "e04803e4-9f17-484f-8019-8ccdf60b895e"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._itemOnClick$Action, n, e)
                } finally {
                    o && o.end()
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
                var n = this.controller,
                    t = this.model,
                    o = this.idService;
                return n.onReady$Action(e)
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
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(e) {
            this._onSyncStartEventHandler = e
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(e) {
            this._onSyncCompleteEventHandler = e
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(e) {
            this._onSyncErrorEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return $.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return I.defaultTimeout
        }
    };
    s(d, "ControllerInner");
    let m = d;
    C = m, C.registerVariableGroupType("uae.OnboardingFlow.PayTaxesOutsideUAE$ActionPutUpdateTaxinformation", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new S
        }, "defaultValue"),
        complexType: S
    }]), C.registerVariableGroupType("uae.OnboardingFlow.PayTaxesOutsideUAE.ItemOnClick$vars", [{
        name: "selected",
        attrName: "selectedInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }])
}
var C, F = new r.Controller.ControllerFactory(C, j);
var l = ne(re());
var g = b,
    x = class x extends g.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("selecteditem", "selecteditemVar", "selecteditem", !0, !1, g.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(g.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(d) {
            return new x(new x.RecordClass({
                selecteditemVar: g.DataTypes.ImmutableBase.getData(d)
            }))
        }
    };
s(x, "VariablesRecord");
var E = x;
E.init();
var W = class W extends g.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(W, "WidgetsRecord");
var L = W,
    p = class p extends g.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return E
        }
        static getWidgetsRecordConstructor() {
            return L
        }
        static get hasValidationWidgets() {
            return p._hasValidationWidgetsValue === void 0 && (p._hasValidationWidgetsValue = void 0), p._hasValidationWidgetsValue
        }
        setInputs(d) {}
    };
s(p, "Model");
var T = p;
T._hasValidationWidgetsValue = void 0;
var D = new g.Model.ModelFactory(T);
var oe = N.PlaceholderContent,
    Fe = N.IteratorPlaceholderContent,
    ae = s(function() {
        var m = q(function(d) {
            var _ = d.model,
                e = d.controller,
                n = d.controller.idService,
                t = e.validationService,
                o = e.callContext(),
                i = Y,
                u = k,
                v = {
                    props: d,
                    validateWidget: s(function(f) {
                        d.validateWidget(d, f)
                    }, "validateWidget")
                },
                a = _,
                O = Z,
                h = Q,
                M = K();
            return l.createElement("div", d.rootNodeProperties, l.createElement(V, {
                getOwnerSpan: s(function() {
                    return M.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return M.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    shouldShowProgressBarInMobile: !0,
                    ShouldEmitPreviousEvent: !0,
                    Title: B.resolve(z.TranslationsService).getMessage("Vl5Oj+V_gECJKAeriuCbtw#Value.-1037113639.1", "Financial assessment"),
                    ProgressBarPercentage: 50
                },
                events: {
                    _handleError: s(function(f) {
                        e.handleError(f)
                    }, "_handleError"),
                    onClickPrevious$Action: s(function() {
                        var f = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.onClickPrevious$Action(e.callContext(f))
                    }, "onClickPrevious$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: a,
                placeholders: {
                    content: new oe(function() {
                        return [l.createElement(y, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 48px;"
                            },
                            style: "flex flex-col gap-y-4",
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "FormContainer"
                            },
                            _widgetRecordProvider: a
                        }, l.createElement(y, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "font-size: 24px; font-style: normal; font-weight: 900; line-height: normal; margin-bottom: 16px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "PageHeading"
                            },
                            _widgetRecordProvider: a
                        }, l.createElement(A, {
                            extendedProperties: {
                                style: "font-weight: 900;"
                            },
                            text: [h(u("UKRBMEiqCEC55uJwUSNWtg#Value", "Do you pay taxes outside the UAE?"))],
                            _idProps: {
                                service: n,
                                uuid: "3"
                            },
                            _widgetRecordProvider: a
                        })), l.createElement(y, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: s(function() {
                                    var f = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.itemOnClick$Action("yes", e.callContext(f))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "align-items: center; align-self: stretch; background: var(--bg-secondary, #EFF3F5); border: 1px solid var(--border-primary, rgba(0, 0, 0, 0.04)); border-radius: 8px; display: flex; gap: 16px; min-height: 56px; padding: 8px 16px;"
                            },
                            style: _.getCachedValue(n.getId("NXnS+Ghxt0uERL5YgEg+0A.Style"), function() {
                                return c.getis_taxpayer_outside_uae() === "yes" ? "employment list-item item-selected" : "employment list-item"
                            }, function() {
                                return c.getis_taxpayer_outside_uae()
                            }),
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "4"
                            },
                            _widgetRecordProvider: a
                        }, l.createElement(y, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "5"
                            },
                            _widgetRecordProvider: a
                        }, l.createElement(A, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [h(u("oZs5MJeyeUmr8qxEAR0OLA#Value", "Yes"))],
                            _idProps: {
                                service: n,
                                uuid: "6"
                            },
                            _widgetRecordProvider: a
                        })), l.createElement(y, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex; justify-content: center; margin-inline-start: auto;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "32px"
                            },
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "7"
                            },
                            _widgetRecordProvider: a
                        }, O(c.getis_taxpayer_outside_uae() === "yes", !1, this, function() {
                            return [l.createElement(U, {
                                image: P.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                type: 0,
                                _idProps: {
                                    service: n,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: a
                            })]
                        }, function() {
                            return []
                        }))), l.createElement(y, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: s(function() {
                                    var f = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                    e.itemOnClick$Action("no", e.callContext(f))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "align-items: center; align-self: stretch; background: var(--bg-secondary, #EFF3F5); border: 1px solid var(--border-primary, rgba(0, 0, 0, 0.04)); border-radius: 8px; display: flex; gap: 16px; min-height: 56px; padding: 8px 16px;"
                            },
                            style: _.getCachedValue(n.getId("DzfpoouPB0uQgVDOQKmR7w.Style"), function() {
                                return c.getis_taxpayer_outside_uae() === "no" ? "employment list-item item-selected" : "employment list-item"
                            }, function() {
                                return c.getis_taxpayer_outside_uae()
                            }),
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "9"
                            },
                            _widgetRecordProvider: a
                        }, l.createElement(y, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "10"
                            },
                            _widgetRecordProvider: a
                        }, l.createElement(A, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [h(u("tVHW8065SEOBE5aE4Vy7Lw#Value", "No"))],
                            _idProps: {
                                service: n,
                                uuid: "11"
                            },
                            _widgetRecordProvider: a
                        })), l.createElement(y, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex; justify-content: center; margin-inline-start: auto;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "32px"
                            },
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "12"
                            },
                            _widgetRecordProvider: a
                        }, O(c.getis_taxpayer_outside_uae() === "no", !1, this, function() {
                            return [l.createElement(U, {
                                image: P.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                type: 0,
                                _idProps: {
                                    service: n,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: a
                            })]
                        }, function() {
                            return []
                        }))), l.createElement(y, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 24px; text-align: right;"
                            },
                            style: _.getCachedValue(n.getId("ButtonContainer.Style"), function() {
                                return R.isDesktop$Action(o).isDesktopOut ? "flex justify-content-flex-end" : "fixed bottom-0 left-0 w-full flex justify-center p-4"
                            }),
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "ButtonContainer"
                            },
                            _widgetRecordProvider: a
                        }, l.createElement(X, {
                            enabled: _.getCachedValue(n.getId("NextButton3.Enabled"), function() {
                                return c.getis_taxpayer_outside_uae() !== J.nullTextIdentifier()
                            }, function() {
                                return c.getis_taxpayer_outside_uae()
                            }),
                            extendedProperties: {
                                style: "border-radius: 24px;"
                            },
                            gridProperties: {
                                width: "96px"
                            },
                            isDefault: !1,
                            onClick: s(function() {
                                var f = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                e.nextStep$Action(e.callContext(f))
                            }, "onClick"),
                            style: _.getCachedValue(n.getId("NextButton3.Style"), function() {
                                return R.isDesktop$Action(o).isDesktopOut ? "btn btn-primary" : "btn btn-primary action-button"
                            }),
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "NextButton3"
                            },
                            _widgetRecordProvider: a
                        }, l.createElement(A, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [h(u("pc9GPFoIxEiHbglz+QNlOA#Value", "Next"))],
                            _idProps: {
                                service: n,
                                uuid: "16"
                            },
                            _widgetRecordProvider: a
                        }))))]
                    })
                },
                _dependencies: [i(c.getis_taxpayer_outside_uae())]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: s(function() {
                return {
                    codeFunction: "PayTaxesOutsideUAE",
                    functionKey: "7d594a96-3129-46ab-a31a-c50891f8e5d8",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.PayTaxesOutsideUAE",
            modelFactory: D,
            controllerFactory: F,
            getTitle: s(function() {
                return k("lkpZfSkxq0ajGsUIkfjl2A#Title", "PayTaxesOutsideUAE")
            }, "getTitle")
        });
        return m.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.OnboardingFlow.PayTaxesOutsideUAE.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, m.getJsDependencies = function() {
            return []
        }, m.getBlocks = function() {
            return [V]
        }, m
    }, "componentFactory"),
    se = ae();
export {
    F as controllerModule, D as modelModule, se as viewModule, $ as webFlowControllerModule
};