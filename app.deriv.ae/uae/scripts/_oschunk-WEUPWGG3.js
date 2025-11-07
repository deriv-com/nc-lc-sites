import {
    a as I,
    b as H
} from "./_oschunk-ET63S57K.js";
import "./_oschunk-JQ2HBHMK.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-YVFTECWM.js";
import {
    f as g,
    h as K,
    i as Q,
    j as X,
    n as Z
} from "./_oschunk-VR5BNL2K.js";
import {
    a as re,
    g as x,
    m as z,
    n as U,
    q as j,
    r as q,
    s as J,
    t as k
} from "./_oschunk-4VHUVDBV.js";
import {
    a as G
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    $ as T,
    Sb as h,
    Z as P,
    kb as w,
    ub as y,
    xa as B
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as C,
    c as s,
    e as ne,
    p as M
} from "./_oschunk-M5BUVJ72.js";
var Y = {};
var t = C; {
    let f = class f extends t.Controller.BaseViewController {
        constructor(e, i, r) {
            super(e, i, r, Y);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getOnboardingConfig$ServerAction() {
            return this.hasOwnProperty("_getOnboardingConfig$ServerAction") || (this._getOnboardingConfig$ServerAction = function(e, i, r) {
                var o = this.controller;
                return t.Logger.startActiveSpan("GetOnboardingConfig", function(n) {
                    return n && (n.setAttribute("code.function", "GetOnboardingConfig"), n.setAttribute("outsystems.function.key", "86c7c527-d6b4-4110-af68-13e28071a825"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), t.Flow.tryFinally(function() {
                        var l = {
                            country: t.DataConversion.ServerDataConverter.to(e, t.DataTypes.DataTypes.Text),
                            authorization: t.DataConversion.ServerDataConverter.to(i, t.DataTypes.DataTypes.Text)
                        };
                        return o.callServerAction("GetOnboardingConfig", "screenservices/uae/V2Onboarding/EmploymentStatus_V2/ActionGetOnboardingConfig", "9mxHf9W_0f9gxqO_bFIMsA", l, o.callContext(r), void 0, void 0, !0).then(function(v) {
                            var a = new(o.constructor.getVariableGroupType("uae.V2Onboarding.EmploymentStatus_V2$ActionGetOnboardingConfig"));
                            return a.responseOut = t.DataConversion.ServerDataConverter.from(v.Response, T), a
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._getOnboardingConfig$ServerAction
        }
        set getOnboardingConfig$ServerAction(e) {
            this._getOnboardingConfig$ServerAction = e
        }
        get postTaxinformation$ServerAction() {
            return this.hasOwnProperty("_postTaxinformation$ServerAction") || (this._postTaxinformation$ServerAction = function(e, i, r) {
                var o = this.controller;
                return t.Logger.startActiveSpan("PostTaxinformation", function(n) {
                    return n && (n.setAttribute("code.function", "PostTaxinformation"), n.setAttribute("outsystems.function.key", "b20f3bcc-fc7d-4545-a9e1-fc166f9fa3d8"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), t.Flow.tryFinally(function() {
                        var l = {
                            Authorization: t.DataConversion.ServerDataConverter.to(e, t.DataTypes.DataTypes.Text),
                            Request: t.DataConversion.ServerDataConverter.to(i, t.DataTypes.DataTypes.Record)
                        };
                        return o.callServerAction("PostTaxinformation", "screenservices/uae/V2Onboarding/EmploymentStatus_V2/ActionPostTaxinformation", "9FQ7ykGbZEqCAB_Hert0qg", l, o.callContext(r), void 0, void 0, !0).then(function(v) {
                            var a = new(o.constructor.getVariableGroupType("uae.V2Onboarding.EmploymentStatus_V2$ActionPostTaxinformation"));
                            return a.responseOut = t.DataConversion.ServerDataConverter.from(v.Response, w), a
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._postTaxinformation$ServerAction
        }
        set postTaxinformation$ServerAction(e) {
            this._postTaxinformation$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var i = this.model,
                    r = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "7f3e103c-988e-4fe4-a39a-0091e2eec951"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e);
                        var l = new t.DataTypes.VariableHolder,
                            v = new t.DataTypes.VariableHolder,
                            a = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType);
                        return t.Flow.executeAsyncFlow(function() {
                            return v.value = h.getAuth$Action(e), i.flush(), r.getOnboardingConfig$ServerAction(y.getresidence(), v.value.tokenOut, e).then(function(b) {
                                l.value = b
                            }).then(function() {
                                a.value.jSONOut = t.JSONUtils.serializeToJSON(l.value.responseOut.dataAttr.getCurrent(e.iterationContext).employment_statusAttr, !1, !1), i.variables.employment_status_listVar = l.value.responseOut.dataAttr.getItem(0).employment_statusAttr
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
        get _onClickBack$Action() {
            return this.hasOwnProperty("__onClickBack$Action") || (this.__onClickBack$Action = function(e) {
                var i = this.model,
                    r = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("OnClickBack", function(n) {
                    n && (n.setAttribute("code.function", "OnClickBack"), n.setAttribute("outsystems.function.key", "af95d523-099b-4588-b3ef-3ab4aa17e0a2"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return r.ensureControllerAlive("OnClickBack"), e = r.callContext(e), t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "FinancialAssessmentSetup_V2", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClickBack$Action
        }
        set _onClickBack$Action(e) {
            this.__onClickBack$Action = e
        }
        get _listItemOnClick$Action() {
            return this.hasOwnProperty("__listItemOnClick$Action") || (this.__listItemOnClick$Action = function(e, i) {
                var r = this.model,
                    o = this.controller,
                    n = this.idService;
                return t.Logger.startActiveSpan("ListItemOnClick", function(l) {
                    return l && (l.setAttribute("code.function", "ListItemOnClick"), l.setAttribute("outsystems.function.key", "f08a9eee-d995-47eb-9068-f1519047f520"), l.setAttribute("outsystems.function.owner.name", "uae"), l.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        o.ensureControllerAlive("ListItemOnClick"), i = o.callContext(i);
                        var v = new t.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.V2Onboarding.EmploymentStatus_V2.ListItemOnClick$vars")));
                        v.value.selectedInLocal = e;
                        var a = new t.DataTypes.VariableHolder,
                            b = new t.DataTypes.VariableHolder;
                        return t.Flow.executeAsyncFlow(function() {
                            return b.value = h.getAuth$Action(i), y.setemployment_status(v.value.selectedInLocal), r.flush(), o.postTaxinformation$ServerAction(b.value.tokenOut, (function() {
                                var A = new B;
                                return A.employment_statusAttr = y.getemployment_status(), A
                            })(), i).then(function(A) {
                                a.value = A
                            }).then(function() {
                                return r.variables.is_loadingVar = !0, r.variables.is_loadingVar = !1, t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("uae", "FinancialAssessment_V2", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), i, !0))
                            })
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__listItemOnClick$Action
        }
        set _listItemOnClick$Action(e) {
            this.__listItemOnClick$Action = e
        }
        onReady$Action(e) {
            var i = this.controller;
            return t.Logger.startActiveSpan("OnReady__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "7f3e103c-988e-4fe4-a39a-0091e2eec951"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onReady$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onClickBack$Action(e) {
            var i = this.controller;
            return t.Logger.startActiveSpan("OnClickBack__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnClickBack"), r.setAttribute("outsystems.function.key", "af95d523-099b-4588-b3ef-3ab4aa17e0a2"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickBack$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        listItemOnClick$Action(e, i) {
            var r = this.controller;
            return t.Logger.startActiveSpan("ListItemOnClick__proxy", function(o) {
                return o && (o.setAttribute("code.function", "ListItemOnClick"), o.setAttribute("outsystems.function.key", "f08a9eee-d995-47eb-9068-f1519047f520"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._listItemOnClick$Action, i, e)
                }, function() {
                    o && o.end()
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
                var i = this.controller,
                    r = this.model,
                    o = this.idService;
                return i.onReady$Action(e)
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
                return I.default.handleError(e, this.callContext())
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
    s(f, "ControllerInner");
    let p = f;
    O = p, O.registerVariableGroupType("uae.V2Onboarding.EmploymentStatus_V2$ActionGetOnboardingConfig", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: t.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new T
        }, "defaultValue"),
        complexType: T
    }]), O.registerVariableGroupType("uae.V2Onboarding.EmploymentStatus_V2$ActionPostTaxinformation", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: t.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new w
        }, "defaultValue"),
        complexType: w
    }]), O.registerVariableGroupType("uae.V2Onboarding.EmploymentStatus_V2.ListItemOnClick$vars", [{
        name: "selected",
        attrName: "selectedInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }])
}
var O, D = new t.Controller.ControllerFactory(O, G);
var c = ne(re());
var _ = C,
    N = class N extends _.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, _.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("employment_status_list", "employment_status_listVar", "employment_status_list", !0, !1, _.DataTypes.DataTypes.RecordList, function() {
                return _.DataTypes.ImmutableBase.getData(new(_.GenericTypeCache.getGenericList(P)))
            }, !1, _.GenericTypeCache.getGenericList(P))].concat(_.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(N, "VariablesRecord");
var V = N;
V.init();
var F = class F extends _.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(F, "WidgetsRecord");
var L = F,
    S = class S extends _.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return V
        }
        static getWidgetsRecordConstructor() {
            return L
        }
        static get hasValidationWidgets() {
            return S._hasValidationWidgetsValue === void 0 && (S._hasValidationWidgetsValue = void 0), S._hasValidationWidgetsValue
        }
        setInputs(f) {}
    };
s(S, "Model");
var R = S;
R._hasValidationWidgetsValue = void 0;
var $ = new _.Model.ModelFactory(R);
var E = x.PlaceholderContent,
    ae = x.IteratorPlaceholderContent,
    se = s(function() {
        var p = U(function(f) {
            var u = f.model,
                e = f.controller,
                i = f.controller.idService,
                r = e.validationService,
                o = e.callContext(),
                n = J,
                l = k,
                v = {
                    props: f,
                    validateWidget: s(function(d) {
                        f.validateWidget(f, d)
                    }, "validateWidget")
                },
                a = u,
                b = q,
                A = j,
                W = z();
            return c.createElement("div", f.rootNodeProperties, c.createElement(H, {
                getOwnerSpan: s(function() {
                    return W.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return W.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Heading: "Employment status",
                    Progress: 30
                },
                events: {
                    _handleError: s(function(d) {
                        e.handleError(d)
                    }, "_handleError"),
                    event_ClickBtnBack$Action: s(function() {
                        var d = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.onClickBack$Action(e.callContext(d))
                    }, "event_ClickBtnBack$Action")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: i,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: a,
                placeholders: {
                    content: new E(function() {
                        return [c.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "w-full flex flex-col gap-4",
                            visible: !0,
                            _idProps: {
                                service: i,
                                name: "FormContainer2"
                            },
                            _widgetRecordProvider: a
                        }, b(u.variables.is_loadingVar, !1, this, function() {
                            return [c.createElement(g, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 4px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "animate-pulse w-full employment list-container",
                                visible: !0,
                                _idProps: {
                                    service: i,
                                    name: "LoaderContainer"
                                },
                                _widgetRecordProvider: a
                            }, c.createElement(g, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: #e5e7eb; border-radius: 8px; height: 56px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "w-full",
                                visible: !0,
                                _idProps: {
                                    service: i,
                                    name: "ListItemPlaceholder"
                                },
                                _widgetRecordProvider: a
                            }), c.createElement(g, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: #e5e7eb; border-radius: 8px; height: 56px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "w-full",
                                visible: !0,
                                _idProps: {
                                    service: i,
                                    name: "ListItemPlaceholder2"
                                },
                                _widgetRecordProvider: a
                            }), c.createElement(g, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: #e5e7eb; border-radius: 8px; height: 56px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "w-full",
                                visible: !0,
                                _idProps: {
                                    service: i,
                                    name: "ListItemPlaceholder3"
                                },
                                _widgetRecordProvider: a
                            }), c.createElement(g, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: #e5e7eb; border-radius: 8px; height: 56px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "w-full",
                                visible: !0,
                                _idProps: {
                                    service: i,
                                    name: "ListItemPlaceholder4"
                                },
                                _widgetRecordProvider: a
                            }))]
                        }, function() {
                            return [c.createElement(g, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: i,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: a
                            }, c.createElement(Q, {
                                animateItems: !0,
                                extendedProperties: {
                                    style: "align-self: stretch; display: flex; flex-direction: column; gap: var(--component-list-spacing-sm, 8px);"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: u.variables.employment_status_listVar,
                                style: "employment list-container list list-group",
                                tag: "div",
                                _idProps: {
                                    service: i,
                                    name: "EmploymentStatusList"
                                },
                                _widgetRecordProvider: a,
                                placeholders: {
                                    content: new ae(function(d, m) {
                                        return [c.createElement(X, {
                                            extendedProperties: {
                                                style: "background: var(--component-list-bg-selectionControl-default, rgba(0, 0, 0, 0.04)); border-radius: var(--component-list-border-radius, 8px);"
                                            },
                                            onClick: s(function() {
                                                return Promise.resolve().then(function() {
                                                    var te = typeof m != "undefined" && m !== null ? m.clone() : e.callContext().clone();
                                                    return e.listItemOnClick$Action(u.variables.employment_status_listVar.getCurrent(m.iterationContext).valueAttr, e.callContext(te))
                                                })
                                            }, "onClick"),
                                            style: u.getCachedValue(d.getId("ListItem.Style"), function() {
                                                return u.variables.employment_status_listVar.getCurrent(m.iterationContext).valueAttr === y.getemployment_status() ? "employment list-item item-selected" : "employment list-item"
                                            }, function() {
                                                return u.variables.employment_status_listVar.getCurrent(m.iterationContext).valueAttr
                                            }, function() {
                                                return y.getemployment_status()
                                            }),
                                            triggerActionOnFullSwipeLeft: !1,
                                            triggerActionOnFullSwipeRight: !1,
                                            _idProps: {
                                                service: d,
                                                name: "ListItem"
                                            },
                                            _widgetRecordProvider: a,
                                            placeholders: {
                                                leftActions: E.Empty,
                                                content: new E(function() {
                                                    return [c.createElement(g, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "align-items: center; display: flex;"
                                                        },
                                                        gridProperties: {
                                                            classes: "OSInline",
                                                            width: "100%"
                                                        },
                                                        visible: !0,
                                                        _idProps: {
                                                            service: d,
                                                            uuid: "10"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }, c.createElement(K, {
                                                        value: u.getCachedValue(d.getId("74dHmucWzEOjBuXLeoNIgA.Value"), function() {
                                                            return h.translate$Action(u.variables.employment_status_listVar.getCurrent(m.iterationContext).labelAttr, m).translatedTextOut
                                                        }, function() {
                                                            return u.variables.employment_status_listVar.getCurrent(m.iterationContext).labelAttr
                                                        }),
                                                        _idProps: {
                                                            service: d,
                                                            uuid: "11"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }), c.createElement(g, {
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
                                                            service: d,
                                                            uuid: "12"
                                                        },
                                                        _widgetRecordProvider: a
                                                    }, b(u.variables.employment_status_listVar.getCurrent(m.iterationContext).valueAttr === y.getemployment_status(), !1, this, function() {
                                                        return [c.createElement(Z, {
                                                            image: M.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: d,
                                                                uuid: "13"
                                                            },
                                                            _widgetRecordProvider: a
                                                        })]
                                                    }, function() {
                                                        return []
                                                    })))]
                                                }),
                                                rightActions: E.Empty
                                            },
                                            _dependencies: [n(y.getemployment_status()), n(u.variables.employment_status_listVar.getCurrent(m.iterationContext).valueAttr), n(u.variables.employment_status_listVar.getCurrent(m.iterationContext).labelAttr)]
                                        })]
                                    }, o, i, "1")
                                },
                                _dependencies: [n(y.getemployment_status())]
                            }))]
                        }))]
                    }),
                    buttonContainer: E.Empty
                },
                _dependencies: [n(y.getemployment_status()), n(u.variables.employment_status_listVar), n(u.variables.is_loadingVar)]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: s(function() {
                return {
                    codeFunction: "EmploymentStatus_V2",
                    functionKey: "ddccbea9-d540-4943-8fcd-1b34c86cf98c",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "V2Onboarding.EmploymentStatus_V2",
            modelFactory: $,
            controllerFactory: D,
            getTitle: s(function() {
                return k("qb7M3UDVQ0mPzRs0yGz5jA#Title", "EmploymentStatus_V2")
            }, "getTitle")
        });
        return p.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, p.getJsDependencies = function() {
            return []
        }, p.getBlocks = function() {
            return [H]
        }, p
    }, "componentFactory"),
    le = se();
export {
    D as controllerModule, $ as modelModule, le as viewModule, I as webFlowControllerModule
};