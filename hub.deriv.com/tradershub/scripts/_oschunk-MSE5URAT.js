import {
    a as be
} from "./_oschunk-UFUGSVW6.js";
import {
    a as U
} from "./_oschunk-X2V7XQCM.js";
import "./_oschunk-RAL2ZUKY.js";
import {
    a as ve
} from "./_oschunk-HPW7JK6F.js";
import "./_oschunk-ILTRYJXV.js";
import {
    a as M
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import {
    a as H
} from "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as E,
    e as F,
    h as y,
    i as ce,
    j as k,
    k as de,
    l as ue,
    p as me,
    r as B,
    s as fe,
    t as P,
    u as pe,
    v as ge,
    y as S
} from "./_oschunk-HUOHOHZB.js";
import {
    a as se
} from "./_oschunk-Y45M2O2K.js";
import {
    a as le,
    g as w,
    i as I
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as n,
    d as ae
} from "./_oschunk-27GDEXUT.js";
import {
    a as O
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import {
    Ef as $,
    fd as ne,
    mb as V,
    sb as re,
    wf as W,
    xf as oe
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as R
} from "./_oschunk-NTQBNJ73.js";
import {
    c as l,
    g as ie
} from "./_oschunk-DVBKI63I.js";
var m = ie(le());
var g = ie(le());
var h = R,
    Q = class Q extends h.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ShowTaxConfirmationPopup", "showTaxConfirmationPopupVar", "ShowTaxConfirmationPopup", !0, !1, h.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("TINValidationsResponse", "tINValidationsResponseIn", "TINValidationsResponse", !0, !1, h.DataTypes.DataTypes.Record, function() {
                return h.DataTypes.ImmutableBase.getData(new V)
            }, !1, V), this.attr("_tINValidationsResponseInDataFetchStatus", "_tINValidationsResponseInDataFetchStatus", "_tINValidationsResponseInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("EmploymentStatusList", "employmentStatusListIn", "EmploymentStatusList", !0, !1, h.DataTypes.DataTypes.RecordList, function() {
                return h.DataTypes.ImmutableBase.getData(new W)
            }, !1, W), this.attr("_employmentStatusListInDataFetchStatus", "_employmentStatusListInDataFetchStatus", "_employmentStatusListInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(h.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l(Q, "VariablesRecord");
var T = Q;
T.init();
var K = class K extends h.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
l(K, "WidgetsRecord");
var z = K,
    J = class J extends h.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return T
        }
        static getWidgetsRecordConstructor() {
            return z
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(r) {
            "TINValidationsResponse" in r && (this.variables.tINValidationsResponseIn = r.TINValidationsResponse, "_tINValidationsResponseInDataFetchStatus" in r && (this.variables._tINValidationsResponseInDataFetchStatus = r._tINValidationsResponseInDataFetchStatus)), "EmploymentStatusList" in r && (this.variables.employmentStatusListIn = r.EmploymentStatusList, "_employmentStatusListInDataFetchStatus" in r && (this.variables._employmentStatusListInDataFetchStatus = r._employmentStatusListInDataFetchStatus))
        }
    };
l(J, "Model");
var D = J;
D._hasValidationWidgetsValue = void 0;
var ye = new h.Model.ModelFactory(D);
var Ce = {
        "vpfH7XxuIUaK72wKI4KFng#Value": "Non",
        "UjgOn49vA0i5j0q_u3WkMQ#Value": "Oui",
        "8lnK3Aap7EuKYmmhAQjX3Q#Value": "Avez-vous un num\xE9ro d'identification fiscale ?",
        "dIuE3Avork6tOWGN7Vxl_w#Value": "Informations fiscales",
        "HragfIjHc0Cps6Am_01KOw#Value": "S\xE9lectionnez votre statut d'emploi"
    },
    _e = {
        "fr-FR": {
            translations: Ce,
            isRTL: !1
        }
    };

function j(x, r, d) {
    cacheTrackEvents.track({
        name: "ce_real_account_signup_form",
        properties: {
            action: "step_passed",
            step_num: 2,
            step_codename: "employment_details",
            form_name: "real_account_signup_form_outsystems"
        }
    })
}
l(j, "default");

function G(x, r, d) {
    cacheTrackEvents.track({
        name: "ce_real_account_signup_form",
        properties: {
            action: "step_passed",
            step_num: 1.5,
            step_codename: "employment_details_1",
            form_name: "real_account_signup_form_outsystems"
        }
    })
}
l(G, "default");

function Y(x, r, d) {
    cacheTrackEvents.track({
        name: "ce_real_account_signup_form",
        properties: {
            action: "step_passed",
            step_num: 1.5,
            step_codename: "employment_details_1",
            form_name: "real_account_signup_form_outsystems"
        }
    })
}
l(Y, "default");
var u = R; {
    let r = class r extends u.Controller.BaseViewController {
        constructor(e, s, t) {
            super(e, s, t, _e);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _noOnClick$Action() {
            return this.hasOwnProperty("__noOnClick$Action") || (this.__noOnClick$Action = function(e) {
                var s = this.model,
                    t = this.controller,
                    c = this.idService;
                return u.Logger.startActiveSpan("NoOnClick", function(o) {
                    o && (o.setAttribute("code.function", "NoOnClick"), o.setAttribute("outsystems.function.key", "555d2383-12a3-4cb8-a51b-a675199148c6"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("NoOnClick"), e = t.callContext(e), n.setRealSignupNoTaxInformation(!0), u.Logger.startActiveSpan("RudderStack", function(a) {
                            a && (a.setAttribute("code.function", "RudderStack"), a.setAttribute("outsystems.function.key", "dd37f678-8cef-4156-9b9a-207254e9d6e9"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(j, "RudderStack", "NoOnClick", null, function(f) {}, {}, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1), u.Navigation.navigateTo(u.Navigation.generateScreenURL("tradershub", "address-details", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__noOnClick$Action
        }
        set _noOnClick$Action(e) {
            this.__noOnClick$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var s = this.model,
                    t = this.controller,
                    c = this.idService;
                return u.Logger.startActiveSpan("OnInitialize", function(o) {
                    o && (o.setAttribute("code.function", "OnInitialize"), o.setAttribute("outsystems.function.key", "638d5f52-6058-44e6-8dac-22dcd9a12ab1"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), s.variables.showTaxConfirmationPopupVar = !1
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _yesOnClick$Action() {
            return this.hasOwnProperty("__yesOnClick$Action") || (this.__yesOnClick$Action = function(e) {
                var s = this.model,
                    t = this.controller,
                    c = this.idService;
                return u.Logger.startActiveSpan("YesOnClick", function(o) {
                    o && (o.setAttribute("code.function", "YesOnClick"), o.setAttribute("outsystems.function.key", "7b2de32b-8ad0-46e6-bd9b-90ce2631f6ec"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("YesOnClick"), e = t.callContext(e), n.setRealSignupNoTaxInformation(!1), u.Logger.startActiveSpan("RudderStack", function(a) {
                            a && (a.setAttribute("code.function", "RudderStack"), a.setAttribute("outsystems.function.key", "b4a53941-a376-4adf-9908-f7ce648bbb0a"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(G, "RudderStack", "YesOnClick", null, function(f) {}, {}, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1), u.Navigation.navigateTo(u.Navigation.generateScreenURL("tradershub", "employment-details/form", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__yesOnClick$Action
        }
        set _yesOnClick$Action(e) {
            this.__yesOnClick$Action = e
        }
        get _listItemOnClick$Action() {
            return this.hasOwnProperty("__listItemOnClick$Action") || (this.__listItemOnClick$Action = function(e, s) {
                var t = this.model,
                    c = this.controller,
                    o = this.idService;
                return u.Logger.startActiveSpan("ListItemOnClick", function(a) {
                    a && (a.setAttribute("code.function", "ListItemOnClick"), a.setAttribute("outsystems.function.key", "8fb9ca14-2de1-46ba-91d0-e47772d8e8a4"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        c.ensureControllerAlive("ListItemOnClick"), s = c.callContext(s);
                        var f = new u.DataTypes.VariableHolder(new(c.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.EmploymentDetailsMobileBlock.ListItemOnClick$vars")));
                        f.value.statusInLocal = e;
                        var v = new u.DataTypes.VariableHolder;
                        if (n.setRealSignupEmployementStatus(f.value.statusInLocal), v.value = u.SystemActions.listIndexOf(t.variables.tINValidationsResponseIn.tin_validationsAttr.tin_employment_status_bypassAttr, function(p) {
                                return n.getRealSignupEmployementStatus() === p
                            }, s), v.value.positionOut > -1) t.variables.showTaxConfirmationPopupVar = !0;
                        else return u.Logger.startActiveSpan("RudderStack", function(p) {
                            p && (p.setAttribute("code.function", "RudderStack"), p.setAttribute("outsystems.function.key", "1752a726-f4c1-421c-becb-16ec83cfa759"), p.setAttribute("outsystems.function.owner.name", "tradershub"), p.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), p.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return c.safeExecuteJSNode(Y, "RudderStack", "ListItemOnClick", null, function(i) {}, {}, {})
                            } finally {
                                p && p.end()
                            }
                        }, 1), n.setRealSignupPassedStepCount(n.getRealSignupIsIDVSupported() ? 4 : 3), u.Navigation.navigateTo(u.Navigation.generateScreenURL("tradershub", "employment-details/form", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default), s, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__listItemOnClick$Action
        }
        set _listItemOnClick$Action(e) {
            this.__listItemOnClick$Action = e
        }
        get _popupCloseOnClick$Action() {
            return this.hasOwnProperty("__popupCloseOnClick$Action") || (this.__popupCloseOnClick$Action = function(e) {
                var s = this.model,
                    t = this.controller,
                    c = this.idService;
                return u.Logger.startActiveSpan("PopupCloseOnClick", function(o) {
                    o && (o.setAttribute("code.function", "PopupCloseOnClick"), o.setAttribute("outsystems.function.key", "96c4a22f-ff21-43bd-a194-eb82e2eff670"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("PopupCloseOnClick"), e = t.callContext(e), n.setRealSignupEmployementStatus(u.BuiltinFunctions.nullTextIdentifier()), s.variables.showTaxConfirmationPopupVar = !1
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__popupCloseOnClick$Action
        }
        set _popupCloseOnClick$Action(e) {
            this.__popupCloseOnClick$Action = e
        }
        noOnClick$Action(e) {
            var s = this.controller;
            return u.Logger.startActiveSpan("NoOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "NoOnClick"), t.setAttribute("outsystems.function.key", "555d2383-12a3-4cb8-a51b-a675199148c6"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return s.safeExecuteClientAction(s._noOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var s = this.controller;
            return u.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "638d5f52-6058-44e6-8dac-22dcd9a12ab1"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return s.safeExecuteClientAction(s._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        yesOnClick$Action(e) {
            var s = this.controller;
            return u.Logger.startActiveSpan("YesOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "YesOnClick"), t.setAttribute("outsystems.function.key", "7b2de32b-8ad0-46e6-bd9b-90ce2631f6ec"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return s.safeExecuteClientAction(s._yesOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        listItemOnClick$Action(e, s) {
            var t = this.controller;
            return u.Logger.startActiveSpan("ListItemOnClick__proxy", function(c) {
                c && (c.setAttribute("code.function", "ListItemOnClick"), c.setAttribute("outsystems.function.key", "8fb9ca14-2de1-46ba-91d0-e47772d8e8a4"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._listItemOnClick$Action, s, e)
                } finally {
                    c && c.end()
                }
            }, 0)
        }
        popupCloseOnClick$Action(e) {
            var s = this.controller;
            return u.Logger.startActiveSpan("PopupCloseOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "PopupCloseOnClick"), t.setAttribute("outsystems.function.key", "96c4a22f-ff21-43bd-a194-eb82e2eff670"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return s.safeExecuteClientAction(s._popupCloseOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var s = this.controller,
                    t = this.model,
                    c = this.idService;
                return s.onInitialize$Action(e)
            }), this._onInitializeEventHandler
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
            return ae.defaultTimeout
        }
    };
    l(r, "ControllerInner");
    let x = r;
    X = x, X.registerVariableGroupType("tradershub.RealAccountCreationBlocks.EmploymentDetailsMobileBlock.ListItemOnClick$vars", [{
        name: "Status",
        attrName: "statusInLocal",
        mandatory: !0,
        dataType: u.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }])
}
var X, he = new u.Controller.ControllerFactory(X, se);
var N = R,
    q = I.PlaceholderContent,
    xe = I.IteratorPlaceholderContent,
    A = class A extends w.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationBlocks.EmploymentDetailsMobileBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "EmploymentDetailsMobileBlock",
                functionKey: "240ce745-2028-4274-a608-b6558e6a2b29",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.RealAccountCreationBlocks.EmploymentDetailsMobileBlock.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return ye
        }
        get controllerFactory() {
            return he
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                d = this.controller,
                e = this.idService,
                s = d.validationService,
                t = this.widgetsRecordProvider,
                c = d.callContext(),
                o = A.ifWidget,
                a = A.textWidget,
                f = A.asPrimitiveValue,
                v = A.getTranslation,
                p = this;
            return g.createElement("div", this.getRootNodeProperties(), g.createElement(y, {
                align: 0,
                animate: !1,
                style: "full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, g.createElement(S, {
                extendedProperties: {
                    style: "font-size: 16px; margin-bottom: 0px;"
                },
                text: [a(v("HragfIjHc0Cps6Am_01KOw#Value", "Select your employment status"))],
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }), g.createElement(de, {
                animateItems: !0,
                extendedProperties: {
                    style: "margin-top: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: 0,
                source: r.variables.employmentStatusListIn,
                style: "list list-group display-flex flex-direction-column gap-base",
                tag: "div",
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t,
                source_dataFetchStatus: N.Model.calculateDataFetchStatus(r.variables._employmentStatusListInDataFetchStatus),
                placeholders: {
                    content: new xe(function(i, b) {
                        return [g.createElement(ue, {
                            extendedProperties: {
                                style: "background-color: #F8F9FA; border-color: #F1F3F5; border-radius: 4px; border-style: solid; border-width: 1px; cursor: pointer; padding: 16px;"
                            },
                            onClick: l(function() {
                                var L = b.clone();
                                d.listItemOnClick$Action(r.variables.employmentStatusListIn.getCurrent(b.iterationContext).labelAttr, d.callContext(L))
                            }, "onClick"),
                            style: "list-item",
                            triggerActionOnFullSwipeLeft: !1,
                            triggerActionOnFullSwipeRight: !1,
                            _idProps: {
                                service: i,
                                name: "ListItem1"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                leftActions: q.Empty,
                                content: new q(function() {
                                    return [g.createElement(y, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex justify-content-space-between align-items-center ",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: t
                                    }, g.createElement(k, {
                                        extendedProperties: {
                                            style: "font-weight: 500;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        value: r.variables.employmentStatusListIn.getCurrent(b.iterationContext).labelAttr,
                                        _idProps: {
                                            service: i,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: t,
                                        value_dataFetchStatus: N.Model.calculateDataFetchStatus(r.variables._employmentStatusListInDataFetchStatus)
                                    }), g.createElement(B, {
                                        image: N.Navigation.VersionedURL.getVersionedUrl("img/tradershub.iconarrow.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: i,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: t
                                    }))]
                                }),
                                rightActions: q.Empty
                            },
                            _dependencies: [f(r.variables._employmentStatusListInDataFetchStatus), f(r.variables.employmentStatusListIn.getCurrent(b.iterationContext).labelAttr)]
                        })]
                    }, c, e, "1")
                },
                _dependencies: [f(r.variables._employmentStatusListInDataFetchStatus)]
            })), g.createElement(ge, {
                extendedProperties: {
                    style: "border-radius: 8px; padding: 16px; width: calc(100% - 32px);"
                },
                showPopup: r.variables.showTaxConfirmationPopupVar,
                style: "popup-dialog ",
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t
            }, g.createElement(y, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-base",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }, g.createElement(y, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }, g.createElement(S, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                text: [a(v("dIuE3Avork6tOWGN7Vxl_w#Value", "Tax information"))],
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t
            }), g.createElement(pe, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: l(function() {
                    var i = c.clone();
                    d.popupCloseOnClick$Action(d.callContext(i))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "11"
                },
                _widgetRecordProvider: t
            }, g.createElement(B, {
                image: N.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
                style: "cursor-pointer",
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t
            }))), a(v("8lnK3Aap7EuKYmmhAQjX3Q#Value", "Do you have a tax identification number?")), g.createElement(y, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: t
            }, g.createElement(E, {
                enabled: !0,
                extendedProperties: {
                    style: "height: 32px;"
                },
                isDefault: !1,
                onClick: l(function() {
                    var i = c.clone();
                    d.yesOnClick$Action(d.callContext(i))
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "14"
                },
                _widgetRecordProvider: t
            }, a(v("UjgOn49vA0i5j0q_u3WkMQ#Value", "Yes"))), g.createElement(E, {
                enabled: !0,
                extendedProperties: {
                    style: "border-width: 1px; height: 32px;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                isDefault: !1,
                onClick: l(function() {
                    var i = c.clone();
                    d.noOnClick$Action(d.callContext(i))
                }, "onClick"),
                style: "btn full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: t
            }, a(v("vpfH7XxuIUaK72wKI4KFng#Value", "No")))))))
        }
    };
l(A, "View");
var Z = A,
    ee = Z;
var _ = R,
    Oe = I.PlaceholderContent,
    Ie = I.IteratorPlaceholderContent,
    C = class C extends w.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.EmploymentDetails"
        }
        static getAttributes() {
            return {
                codeFunction: "EmploymentDetails",
                functionKey: "a130d4db-0e20-4fc9-bdc5-c91a5dcbe757",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreation.EmploymentDetails.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [M, H, U, ee]
        }
        get modelFactory() {
            return ve
        }
        get controllerFactory() {
            return be
        }
        get title() {
            let r = this.model,
                d = this.controller,
                e = this.idService,
                s = d.validationService,
                t = d.callContext(),
                c = C.asPrimitiveValue,
                o = C.getTranslation,
                a = this;
            return _.Injector.resolve(_.ServiceNames.TranslationsService).getMessage("29QwoSAOyU+9xckaXcvnVw#TitleExpression.1571453000.1", "Employment details | Deriv")
        }
        internalRender() {
            let r = this.model,
                d = this.controller,
                e = this.idService,
                s = d.validationService,
                t = this.widgetsRecordProvider,
                c = d.callContext(),
                o = C.ifWidget,
                a = C.textWidget,
                f = C.asPrimitiveValue,
                v = C.getTranslation,
                p = this;
            return m.createElement("div", this.getRootNodeProperties(), m.createElement(M, {
                getOwnerSpan: l(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: "Employment details",
                    Analytics: r.getCachedValue(e.getId("7fJAmptkfkee4aRrg0ciVQ.Analytics"), function() {
                        return function() {
                            var i = new re;
                            return i.stepCodenameAttr = O.isDesktop$Action(c).isDesktopOut ? "employment_details" : "employment_details_1", i.stepNumberAttr = _.BuiltinFunctions.decimalToText(O.isDesktop$Action(c).isDesktopOut ? _.BuiltinFunctions.integerToDecimal(2) : new _.DataTypes.Decimal("1.5")), i
                        }()
                    }),
                    HideTitle: r.getCachedValue(e.getId("7fJAmptkfkee4aRrg0ciVQ.HideTitle"), function() {
                        return O.isPhone$Action(c).isPhoneOut
                    })
                },
                events: {
                    _handleError: l(function(i) {
                        d.handleError(i)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: s
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new Oe(function() {
                        return [o(r.variables.isLoadingVar, !1, this, function() {
                            return [m.createElement(H, {
                                getOwnerSpan: l(function() {
                                    return p.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: l(function() {
                                    return p.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: l(function(i) {
                                        d.handleError(i)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: s
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "1",
                                    alias: "2"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            })]
                        }, function() {
                            return [m.createElement(y, {
                                align: 0,
                                animate: !0,
                                style: "full-width employment-details-section__desktop",
                                visible: r.getCachedValue(e.getId("msOK4dFT6U6zD5FQVOI44A.Visible"), function() {
                                    return O.isDesktop$Action(c).isDesktopOut
                                }),
                                _idProps: {
                                    service: e,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(me, {
                                _validationProps: {
                                    validationService: s
                                },
                                extendedProperties: {
                                    style: "margin-top: 24px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                style: "",
                                _idProps: {
                                    service: e,
                                    name: "Form"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(y, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "gap: 16px;"
                                },
                                style: "",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(y, {
                                align: 0,
                                animate: !1,
                                style: "",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "EmploymentStatus"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(P, {
                                extendedProperties: {
                                    style: "font-size: 16px;"
                                },
                                mandatory: !0,
                                targetWidget: "EmployementStatusDropdown",
                                _idProps: {
                                    service: e,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(S, {
                                extendedProperties: {
                                    style: "font-size: 16px;"
                                },
                                text: [a(v("5SP7yQndiUK8ROjQz1PMNQ#Value", "Employment status"))],
                                _idProps: {
                                    service: e,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: t
                            }), m.createElement(S, {
                                extendedProperties: {
                                    style: "color: #DC2020; font-size: 16px;"
                                },
                                text: ["*"],
                                _idProps: {
                                    service: e,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: t
                            })), m.createElement(ce, {
                                _validationProps: {
                                    validationService: s,
                                    validationParentId: e.getId("Form")
                                },
                                dropdownMode: 1,
                                emptyValue: "Select your employment status",
                                enabled: !0,
                                extendedProperties: {
                                    style: "font-size: 16px; margin-top: 8px;"
                                },
                                list: r.variables.employmentStatusLIstVar,
                                mandatory: !0,
                                onChange: l(function() {
                                    var i = c.clone();
                                    d.employementStatusDropdownOnChange$Action(!1, d.callContext(i))
                                }, "onChange"),
                                style: "dropdown",
                                values: l(function(i) {
                                    return i.labelAttr
                                }, "values"),
                                variable: r.createVariable(_.DataTypes.DataTypes.Text, n.getRealSignupEmployementStatus(), function(i) {
                                    n.setRealSignupEmployementStatus(i)
                                }),
                                _idProps: {
                                    service: e,
                                    name: "EmployementStatusDropdown"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    content: new Ie(function(i, b) {
                                        return [m.createElement(k, {
                                            extendedProperties: {
                                                style: "font-size: 16px;"
                                            },
                                            value: r.variables.employmentStatusLIstVar.getCurrent(b.iterationContext).labelAttr,
                                            _idProps: {
                                                service: i,
                                                uuid: "10"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })]
                                    }, c, e, "1")
                                },
                                _dependencies: []
                            })), o(r.variables.canBypassTINStatusVar, !0, this, function() {
                                return [m.createElement(y, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "margin-top: 24px;"
                                    },
                                    style: "display-flex align-items-center checkbox-container",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "11"
                                    },
                                    _widgetRecordProvider: t
                                }, m.createElement(F, {
                                    _validationProps: {
                                        validationService: s,
                                        validationParentId: e.getId("Form")
                                    },
                                    enabled: !0,
                                    onChange: l(function() {
                                        var i = c.clone();
                                        d.noTaxIDNumberAvailableOnChange$Action(d.callContext(i))
                                    }, "onChange"),
                                    style: "checkbox",
                                    variable: r.createVariable(_.DataTypes.DataTypes.Boolean, n.getRealSignupNoTaxInformation(), function(i) {
                                        n.setRealSignupNoTaxInformation(i)
                                    }),
                                    _idProps: {
                                        service: e,
                                        name: "NoTaxIDNumberAvailable"
                                    },
                                    _widgetRecordProvider: t
                                }), m.createElement(P, {
                                    gridProperties: {
                                        classes: "OSFillParent",
                                        marginLeft: "8px"
                                    },
                                    style: "width-auto",
                                    targetWidget: "NoTaxIDNumberAvailable",
                                    _idProps: {
                                        service: e,
                                        uuid: "13"
                                    },
                                    _widgetRecordProvider: t
                                }, a(v("2jh9BaauS0u3Lm1QnLKoaQ#Value", "I don't have tax identification number."))))]
                            }, function() {
                                return []
                            }), m.createElement(y, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 24px;"
                                },
                                style: "",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "TaxResidence"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(P, {
                                extendedProperties: {
                                    style: "font-size: 16px; margin-bottom: 8px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(S, {
                                extendedProperties: {
                                    style: "margin-bottom: 0px;"
                                },
                                text: [a(v("lB26u5rlDUi74ywSgRgf4g#Value", "Country of tax residence"))],
                                _idProps: {
                                    service: e,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: t
                            }))), m.createElement(U, {
                                getOwnerSpan: l(function() {
                                    return p.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: l(function() {
                                    return p.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    OptionsList: r.getCachedValue(e.getId("ZDgxOoJ6BUGBMuO4tAjaWQ.OptionsList"), function() {
                                        return _.DataConversion.JSConversions.typeConvertRecordList(r.variables.residenceListVar, new $, function(i, b) {
                                            return b.valueAttr = i.valueAttr, b.labelAttr = i.textAttr, b
                                        })
                                    }, function() {
                                        return r.variables.residenceListVar
                                    }),
                                    StartingSelection: r.getCachedValue(e.getId("ZDgxOoJ6BUGBMuO4tAjaWQ.StartingSelection"), function() {
                                        return function() {
                                            var i = new $;
                                            return i.pushAll([function() {
                                                var b = new oe;
                                                return b.valueAttr = n.getRealSignupTaxResidence() !== _.BuiltinFunctions.nullTextIdentifier() ? n.getRealSignupTaxResidence() : n.getSelectedResidence(), b.labelAttr = n.getRealSignupTaxResidenceLabel() !== _.BuiltinFunctions.nullTextIdentifier() ? n.getRealSignupTaxResidenceLabel() : n.getSelectedResidenceLabel(), b
                                            }()]), i
                                        }()
                                    }, function() {
                                        return n.getRealSignupTaxResidence()
                                    }, function() {
                                        return n.getSelectedResidence()
                                    }, function() {
                                        return n.getRealSignupTaxResidenceLabel()
                                    }, function() {
                                        return n.getSelectedResidenceLabel()
                                    }),
                                    OptionalConfigs: r.getCachedValue(e.getId("ZDgxOoJ6BUGBMuO4tAjaWQ.OptionalConfigs"), function() {
                                        return function() {
                                            var i = new ne;
                                            return i.allowMultipleSelectionAttr = !1, i.isDisabledAttr = n.getRealSignupNoTaxInformation(), i.noResultsTextAttr = "Nothing to show", i.searchPromptAttr = "Search", i.noOptionsTextAttr = "There are no options to show", i
                                        }()
                                    }, function() {
                                        return n.getRealSignupNoTaxInformation()
                                    })
                                },
                                events: {
                                    _handleError: l(function(i) {
                                        d.handleError(i)
                                    }, "_handleError"),
                                    onChanged$Action: l(function(i, b) {
                                        return Promise.resolve().then(function() {
                                            var L = c.clone();
                                            return d.dropdownSearchOnChanged$Action(b, d.callContext(L))
                                        })
                                    }, "onChanged$Action")
                                },
                                _validationProps: {
                                    validationService: s,
                                    validationParentId: e.getId("Form")
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "17",
                                    alias: "3"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            }), m.createElement(y, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 24px;"
                                },
                                style: "",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "TaxIdentificationNumber"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(P, {
                                mandatory: r.getCachedValue(e.getId("Input_TIDNumber.Mandatory"), function() {
                                    return !!n.getIsEuUser()
                                }, function() {
                                    return n.getIsEuUser()
                                }),
                                targetWidget: "Input_TIDNumber",
                                _idProps: {
                                    service: e,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(S, {
                                extendedProperties: {
                                    style: "font-size: 16px;"
                                },
                                text: [a(v("AocUpANsh0W_CWSiruK04Q#Value", "Tax identification number"))],
                                _idProps: {
                                    service: e,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: t
                            })), m.createElement(fe, {
                                _validationProps: {
                                    validationService: s,
                                    validationParentId: e.getId("Form")
                                },
                                enabled: !n.getRealSignupNoTaxInformation(),
                                extendedProperties: {
                                    style: "font-size: 16px; height: 48px; margin-top: 8px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                inputType: 0,
                                mandatory: r.getCachedValue(e.getId("Input_TIDNumber.Mandatory"), function() {
                                    return !!n.getIsEuUser()
                                }, function() {
                                    return n.getIsEuUser()
                                }),
                                maxLength: 50,
                                onChange: l(function() {
                                    var i = c.clone();
                                    d.input_TIDNumberOnChange$Action(d.callContext(i))
                                }, "onChange"),
                                prompt: "Enter your tax identification number",
                                style: "form-control",
                                variable: r.createVariable(_.DataTypes.DataTypes.Text, n.getRealSignupTIDNumber(), function(i) {
                                    n.setRealSignupTIDNumber(i)
                                }),
                                _idProps: {
                                    service: e,
                                    name: "Input_TIDNumber"
                                },
                                _widgetRecordProvider: t
                            }))), o(n.getRealSignupTIDNumber() !== _.BuiltinFunctions.nullTextIdentifier() && !n.getRealSignupNoTaxInformation(), !1, this, function() {
                                return [m.createElement(y, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "margin-top: 24px;"
                                    },
                                    style: "display-flex gap-s align-items-center checkbox-container",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "22"
                                    },
                                    _widgetRecordProvider: t
                                }, m.createElement(F, {
                                    _validationProps: {
                                        validationService: s,
                                        validationParentId: e.getId("Form")
                                    },
                                    enabled: !0,
                                    style: "checkbox",
                                    variable: r.createVariable(_.DataTypes.DataTypes.Boolean, n.getRealSignupTaxIDConfirmation(), function(i) {
                                        n.setRealSignupTaxIDConfirmation(i)
                                    }),
                                    _idProps: {
                                        service: e,
                                        name: "TaxIDConfirmationCheckbox"
                                    },
                                    _widgetRecordProvider: t
                                }), m.createElement(P, {
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    style: "width-auto",
                                    targetWidget: "TaxIDConfirmationCheckbox",
                                    _idProps: {
                                        service: e,
                                        uuid: "24"
                                    },
                                    _widgetRecordProvider: t
                                }, a(v("GPnJGrYvDkSxDs3mRu7vfQ#Value", "I confirm that my tax information is accurate and complete.")))), o(!r.widgets.get(e.getId("TaxIDConfirmationCheckbox")).validAttr, !1, this, function() {
                                    return [m.createElement(S, {
                                        style: "text-primary",
                                        text: [a(v("ACqa4GSE9US9jN0w8J0CqQ#Value", "This is required."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "25"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                }, function() {
                                    return []
                                })]
                            }, function() {
                                return []
                            }), m.createElement(y, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 24px;"
                                },
                                style: "display-flex justify-content-flex-end",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "26"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(E, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "border-radius: 100px; border-width: 0px;"
                                },
                                gridProperties: {
                                    width: "100px"
                                },
                                isDefault: !0,
                                onClick: l(function() {
                                    p.validateWidget(e.getId("Form"));
                                    var i = c.clone();
                                    d.saveOnClick$Action(d.callContext(i))
                                }, "onClick"),
                                style: "btn btn-primary",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: t
                            }, a(v("wX+DwyzsU0W+0GXXbiOMiQ#Value", "Next")))))), m.createElement(y, {
                                align: 0,
                                animate: !0,
                                style: "full-width employment-details-section__mobile",
                                visible: r.getCachedValue(e.getId("AUqJK2AJRUCSqsrK2QbmRw.Visible"), function() {
                                    return !O.isDesktop$Action(c).isDesktopOut
                                }),
                                _idProps: {
                                    service: e,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: t
                            }, m.createElement(ee, {
                                getOwnerSpan: l(function() {
                                    return p.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: l(function() {
                                    return p.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    EmploymentStatusList: r.variables.employmentStatusLIstVar,
                                    TINValidationsResponse: r.variables.tINValidationsResponseVar
                                },
                                events: {
                                    _handleError: l(function(i) {
                                        d.handleError(i)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: s
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "29",
                                    alias: "4"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            }))]
                        })]
                    })
                },
                _dependencies: [f(r.variables.tINValidationsResponseVar), f(r.widgets.get(e.getId("TaxIDConfirmationCheckbox")).validAttr), f(n.getRealSignupTaxIDConfirmation()), f(n.getRealSignupTIDNumber()), f(n.getIsEuUser()), f(n.getSelectedResidenceLabel()), f(n.getRealSignupTaxResidenceLabel()), f(n.getSelectedResidence()), f(n.getRealSignupTaxResidence()), f(r.variables.residenceListVar), f(n.getRealSignupNoTaxInformation()), f(r.variables.canBypassTINStatusVar), f(r.variables.employmentStatusLIstVar), f(n.getRealSignupEmployementStatus()), f(r.variables.isLoadingVar)]
            }))
        }
    };
l(C, "View");
var te = C,
    ut = te;
export {
    ut as
    default
};