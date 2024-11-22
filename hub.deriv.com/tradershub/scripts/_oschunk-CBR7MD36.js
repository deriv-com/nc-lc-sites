import {
    a as ae
} from "./_oschunk-MBUK2ETH.js";
import {
    a as ne
} from "./_oschunk-KUAO4WRF.js";
import "./_oschunk-ILTRYJXV.js";
import {
    a as z
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as T,
    f as re,
    g as H,
    h as s,
    p as I,
    r as x,
    s as O,
    t as C,
    u as ie,
    y
} from "./_oschunk-HUOHOHZB.js";
import {
    a as ee
} from "./_oschunk-Y45M2O2K.js";
import {
    a as te,
    g as N,
    i as w
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as m,
    d as Z
} from "./_oschunk-27GDEXUT.js";
import {
    a as A
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import {
    g as V,
    nb as L,
    sb as Y
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as R
} from "./_oschunk-NTQBNJ73.js";
import {
    c,
    g as j
} from "./_oschunk-DVBKI63I.js";
var r = j(te());
var d = j(te());
var S = R,
    $ = class $ extends S.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(S.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c($, "VariablesRecord");
var W = $;
W.init();
var U = class U extends S.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            NameForm: S.Model.ValidationWidgetRecord,
            Input_FirstName: S.Model.ValidationWidgetRecord,
            Input_LastName: S.Model.ValidationWidgetRecord
        }
    }
};
c(U, "WidgetsRecord");
var M = U,
    B = class B extends S.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return W
        }
        static getWidgetsRecordConstructor() {
            return M
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(v) {}
    };
c(B, "Model");
var F = B;
F._hasValidationWidgetsValue = void 0;
var oe = new S.Model.ModelFactory(F);
var le = {
        "LpW2OGqeaUiOXtNYVMfCYQ#Value": "Suivant",
        "HnUKgbuKnk2ntHPgutrthQ#Value": "exactement tel qu'il appara\xEEt sur votre document d'identit\xE9.",
        "HNzGxxooR02wz0iCoXz5XA#Value": "nom",
        "3szrtOFgn0SyvVNBVKprTQ#Value": "Nom de famille",
        "zoWitfJS5UayquvqrK5HXA#Value": "Pr\xE9nom (et deuxi\xE8me pr\xE9nom)"
    },
    se = {
        "fr-FR": {
            translations: le,
            isRTL: !1
        }
    };

function J(b, v, f, e) {
    let i = {
            FirstName: b.FirstName,
            LastName: b.LastName
        },
        t = yup.object().shape({
            FirstName: yup.string().noConsecutiveSpaces("First name must not contain consecutive spaces.").validCharacters("First name can only include letters, spaces, apostrophes, periods, and hyphens.").max(50, "First name must be at most 50 characters long.").required("First (and middle) name is required."),
            LastName: yup.string().noConsecutiveSpaces("Last name must not contain consecutive spaces.").validCharacters("Last name can only include letters, spaces, apostrophes, periods, and hyphens.").max(50, "Last name must be at most 50 characters long.").required("Last name is required.")
        }),
        {
            errors: g,
            validFields: n
        } = validate(t, i);
    b.ValidationErrors = JSON.stringify(g), b.ValidFields = JSON.stringify(n)
}
c(J, "default");

function q(b, v, f) {
    cacheTrackEvents.track({
        name: "ce_real_account_signup_form",
        properties: {
            action: "step_passed",
            step_num: .25,
            step_codename: "personal_details_1",
            form_name: "real_account_signup_form_outsystems"
        }
    })
}
c(q, "default");
var a = R; {
    let v = class v extends a.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, se);
            var g = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
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
                    t = this.controller,
                    g = this.idService;
                return a.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "224d9b63-ed59-4406-b3b7-3430d4029436"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var u = new a.DataTypes.VariableHolder;
                        u.value = A.setFocus$Action(g.getId("Input_FirstName"), e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onClickNext$Action() {
            return this.hasOwnProperty("__onClickNext$Action") || (this.__onClickNext$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    g = this.idService;
                return a.Logger.startActiveSpan("OnClickNext", function(n) {
                    n && (n.setAttribute("code.function", "OnClickNext"), n.setAttribute("outsystems.function.key", "873f0137-9df0-4178-8980-9bb0a2b6560d"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickNext"), e = t.callContext(e);
                        var u = new a.DataTypes.VariableHolder,
                            _ = new a.DataTypes.VariableHolder(new(a.Controller.BaseController.getJSONDeserializeOutputType(L))),
                            p = new a.DataTypes.VariableHolder(new(a.Controller.BaseController.getJSONDeserializeOutputType(V)));
                        if (u.value = a.Logger.startActiveSpan("Validate", function(l) {
                                l && (l.setAttribute("code.function", "Validate"), l.setAttribute("outsystems.function.key", "ac22c591-ee80-438a-8a1c-8b9ced1bfb28"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(J, "Validate", "OnClickNext", {
                                        FirstName: a.DataConversion.JSNodeParamConverter.to(m.getRealSignupFirstName(), a.DataTypes.DataTypes.Text),
                                        LastName: a.DataConversion.JSNodeParamConverter.to(m.getRealSignupLastName(), a.DataTypes.DataTypes.Text),
                                        ValidationErrors: a.DataConversion.JSNodeParamConverter.to("", a.DataTypes.DataTypes.Text),
                                        ValidFields: a.DataConversion.JSNodeParamConverter.to("", a.DataTypes.DataTypes.Text)
                                    }, function(o) {
                                        var k = new(t.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.PersonalDetailsMobile.OnClickNext$validateJSResult"));
                                        return k.validationErrorsOut = a.DataConversion.JSNodeParamConverter.from(o.ValidationErrors, a.DataTypes.DataTypes.Text), k.validFieldsOut = a.DataConversion.JSNodeParamConverter.from(o.ValidFields, a.DataTypes.DataTypes.Text), k
                                    }, {}, {})
                                } finally {
                                    l && l.end()
                                }
                            }, 1), p.value.dataOut = a.JSONUtils.deserializeFromJSON(u.value.validationErrorsOut, V, !1), _.value.dataOut = a.JSONUtils.deserializeFromJSON(u.value.validFieldsOut, L, !1), i.widgets.get(g.getId("Input_FirstName")).validAttr = _.value.dataOut.firstNameAttr, i.widgets.get(g.getId("Input_FirstName")).validationMessageAttr = p.value.dataOut.firstNameAttr, i.widgets.get(g.getId("Input_LastName")).validAttr = _.value.dataOut.lastNameAttr, i.widgets.get(g.getId("Input_LastName")).validationMessageAttr = p.value.dataOut.lastNameAttr, i.widgets.get(g.getId("NameForm")).validAttr) return a.Logger.startActiveSpan("RudderStack", function(l) {
                            l && (l.setAttribute("code.function", "RudderStack"), l.setAttribute("outsystems.function.key", "c48ebec9-653b-4310-bca5-d103b331f154"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(q, "RudderStack", "OnClickNext", null, function(o) {}, {}, {})
                            } finally {
                                l && l.end()
                            }
                        }, 1), m.setRealSignupPassedStepCount(2), a.Navigation.navigateTo(a.Navigation.generateScreenURL("tradershub", "personal-details/dob", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClickNext$Action
        }
        set _onClickNext$Action(e) {
            this.__onClickNext$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    g = this.idService;
                return a.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "9b3981ef-5a57-4398-b62b-7b3d215e2933"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        onReady$Action(e) {
            var i = this.controller;
            return a.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "224d9b63-ed59-4406-b3b7-3430d4029436"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickNext$Action(e) {
            var i = this.controller;
            return a.Logger.startActiveSpan("OnClickNext__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickNext"), t.setAttribute("outsystems.function.key", "873f0137-9df0-4178-8980-9bb0a2b6560d"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickNext$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var i = this.controller;
            return a.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "9b3981ef-5a57-4398-b62b-7b3d215e2933"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    g = this.idService;
                return i.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    g = this.idService;
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
            return Z.defaultTimeout
        }
    };
    c(v, "ControllerInner");
    let b = v;
    Q = b, Q.registerVariableGroupType("tradershub.RealAccountCreationBlocks.PersonalDetailsMobile.OnClickNext$validateJSResult", [{
        name: "ValidationErrors",
        attrName: "validationErrorsOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "ValidFields",
        attrName: "validFieldsOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var Q, de = new a.Controller.ControllerFactory(Q, ee);
var D = R,
    Ue = w.PlaceholderContent,
    Be = w.IteratorPlaceholderContent,
    E = class E extends N.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationBlocks.PersonalDetailsMobile"
        }
        static getAttributes() {
            return {
                codeFunction: "PersonalDetailsMobile",
                functionKey: "dbfca696-91b3-42d4-9476-b0c44b06bc53",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return oe
        }
        get controllerFactory() {
            return de
        }
        get title() {
            return ""
        }
        internalRender() {
            let v = this.model,
                f = this.controller,
                e = this.idService,
                i = f.validationService,
                t = this.widgetsRecordProvider,
                g = f.callContext(),
                n = E.ifWidget,
                u = E.textWidget,
                _ = E.asPrimitiveValue,
                p = E.getTranslation,
                l = this;
            return d.createElement("div", this.getRootNodeProperties(), d.createElement(s, {
                align: 0,
                animate: !1,
                style: "full-width personal-details-section__mobile",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, d.createElement(I, {
                _validationProps: {
                    validationService: i
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "",
                _idProps: {
                    service: e,
                    name: "NameForm"
                },
                _widgetRecordProvider: t
            }, d.createElement(s, {
                align: 0,
                animate: !1,
                style: "",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }, d.createElement(s, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "gap: 16px;"
                },
                style: "flex-1 display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }, d.createElement(s, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }, d.createElement(C, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                mandatory: !0,
                targetWidget: "Input_FirstName",
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }, d.createElement(y, {
                extendedProperties: {
                    style: "margin-bottom: 0px;"
                },
                text: [u(p("zoWitfJS5UayquvqrK5HXA#Value", "First (and middle) name"))],
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            })), d.createElement(O, {
                _validationProps: {
                    validationService: i,
                    validationParentId: e.getId("NameForm")
                },
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 0,
                mandatory: !0,
                maxLength: 50,
                prompt: "Enter your first (and middle) name",
                style: "form-control",
                variable: v.createVariable(D.DataTypes.DataTypes.Text, m.getRealSignupFirstName(), function(o) {
                    m.setRealSignupFirstName(o)
                }),
                _idProps: {
                    service: e,
                    name: "Input_FirstName"
                },
                _widgetRecordProvider: t
            })), d.createElement(s, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 0px;"
                },
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }, d.createElement(C, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                mandatory: !0,
                targetWidget: "Input_LastName",
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }, u(p("3szrtOFgn0SyvVNBVKprTQ#Value", "Last name"))), d.createElement(O, {
                _validationProps: {
                    validationService: i,
                    validationParentId: e.getId("NameForm")
                },
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 0,
                mandatory: !0,
                maxLength: 50,
                prompt: "Enter your last name",
                style: "form-control",
                variable: v.createVariable(D.DataTypes.DataTypes.Text, m.getRealSignupLastName(), function(o) {
                    m.setRealSignupLastName(o)
                }),
                _idProps: {
                    service: e,
                    name: "Input_LastName"
                },
                _widgetRecordProvider: t
            }))), d.createElement(s, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #E5F5FC; border-radius: 4px; margin-top: 16px; padding: 16px;"
                },
                style: "display-flex full-width gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "11"
                },
                _widgetRecordProvider: t
            }, d.createElement(x, {
                image: D.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_black.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t
            }), d.createElement(s, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: t
            }, d.createElement(y, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                text: ["Enter your "],
                _idProps: {
                    service: e,
                    uuid: "14"
                },
                _widgetRecordProvider: t
            }), d.createElement(y, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold;"
                },
                text: [u(p("HNzGxxooR02wz0iCoXz5XA#Value", "name"))],
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: t
            }), d.createElement(y, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                text: [u(p("HnUKgbuKnk2ntHPgutrthQ#Value", " exactly as it appears on your identity document."))],
                _idProps: {
                    service: e,
                    uuid: "16"
                },
                _widgetRecordProvider: t
            }))), d.createElement(s, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 16px;"
                },
                style: "full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "17"
                },
                _widgetRecordProvider: t
            }, d.createElement(y, {
                extendedProperties: {
                    style: "font-size: 10px; font-weight: bold;"
                },
                text: ["Example:"],
                _idProps: {
                    service: e,
                    uuid: "18"
                },
                _widgetRecordProvider: t
            }), d.createElement(s, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 8px; text-align: center;"
                },
                style: "full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "19"
                },
                _widgetRecordProvider: t
            }, d.createElement(x, {
                image: D.Navigation.VersionedURL.getVersionedUrl("img/tradershub.content.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "20"
                },
                _widgetRecordProvider: t
            })))), d.createElement(s, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 24px;"
                },
                style: "full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "21"
                },
                _widgetRecordProvider: t
            }, d.createElement(T, {
                enabled: !0,
                extendedProperties: {
                    style: "border-radius: 100px; border-width: 0px;"
                },
                isDefault: !0,
                onClick: c(function() {
                    l.validateWidget(e.getId("NameForm"));
                    var o = g.clone();
                    f.onClickNext$Action(f.callContext(o))
                }, "onClick"),
                style: "btn btn-primary full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "22"
                },
                _widgetRecordProvider: t
            }, d.createElement(y, {
                style: "",
                text: [u(p("LpW2OGqeaUiOXtNYVMfCYQ#Value", "Next"))],
                _idProps: {
                    service: e,
                    uuid: "23"
                },
                _widgetRecordProvider: t
            }))))))
        }
    };
c(E, "View");
var X = E,
    G = X;
var P = R,
    pe = w.PlaceholderContent,
    et = w.IteratorPlaceholderContent,
    h = class h extends N.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.PersonalDetails"
        }
        static getAttributes() {
            return {
                codeFunction: "PersonalDetails",
                functionKey: "1fc65b5f-a963-48e3-a979-461b18005b67",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreation.PersonalDetails.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [z, G]
        }
        get modelFactory() {
            return ae
        }
        get controllerFactory() {
            return ne
        }
        get title() {
            let v = this.model,
                f = this.controller,
                e = this.idService,
                i = f.validationService,
                t = f.callContext(),
                g = h.asPrimitiveValue,
                n = h.getTranslation,
                u = this;
            return P.Injector.resolve(P.ServiceNames.TranslationsService).getMessage("X1vGH2Op40ipeUYbGABbZw#TitleExpression.-545367396.1", "Personal details | Deriv")
        }
        internalRender() {
            let v = this.model,
                f = this.controller,
                e = this.idService,
                i = f.validationService,
                t = this.widgetsRecordProvider,
                g = f.callContext(),
                n = h.ifWidget,
                u = h.textWidget,
                _ = h.asPrimitiveValue,
                p = h.getTranslation,
                l = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(z, {
                getOwnerSpan: c(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Analytics: v.getCachedValue(e.getId("cctcHV2MfkKJDt67Hgs5TA.Analytics"), function() {
                        return function() {
                            var o = new Y;
                            return o.stepCodenameAttr = "personal_details_1", o.stepNumberAttr = "0.25", o
                        }()
                    }),
                    Title: "Personal details"
                },
                events: {
                    _handleError: c(function(o) {
                        f.handleError(o)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new pe(function() {
                        return [r.createElement(s, {
                            align: 0,
                            animate: !0,
                            style: "full-width personal-details-section__desktop ",
                            visible: v.getCachedValue(e.getId("wyspHXC0QECSxiMx+W123w.Visible"), function() {
                                return A.isDesktop$Action(g).isDesktopOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "background-color: #E5F5FC; border-radius: 4px; height: 54px; padding: 16px;"
                            },
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "BlueContainer"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(x, {
                            image: P.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_black.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: t
                        }), r.createElement(s, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                marginLeft: "7px"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(y, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            text: [u(p("qCkbiF5mmEmfN1dAd5fEEQ#Value", "Enter your "))],
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: t
                        }), r.createElement(y, {
                            extendedProperties: {
                                style: "font-size: 12px; font-weight: bold;"
                            },
                            text: [u(p("ZE4ihfYDwUGA+3lD68twQg#Value", "name"))],
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: t
                        }), r.createElement(y, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            text: [u(p("9vFpd9z6yE2EOaqTW3jrhQ#Value", " and "))],
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: t
                        }), r.createElement(y, {
                            extendedProperties: {
                                style: "font-size: 12px; font-weight: bold;"
                            },
                            text: [u(p("aWWMvx89EkSvdbAnWPKLxQ#Value", "date of birth"))],
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: t
                        }), r.createElement(y, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            text: [u(p("Q4lyuhnNSEqoHjQAqLgX7w#Value", " exactly as it appears on your identity document."))],
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: t
                        }))), n(m.getIsEuUser(), !1, this, function() {
                            return [r.createElement(s, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 24px; text-align: left;"
                                },
                                style: "",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(re, {
                                _validationProps: {
                                    validationService: i
                                },
                                enabled: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mandatory: !1,
                                style: "radio-group",
                                variable: v.createVariable(P.DataTypes.DataTypes.Text, m.getSalutation(), function(o) {
                                    m.setSalutation(o)
                                }),
                                _idProps: {
                                    service: e,
                                    name: "salutation"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(H, {
                                enabled: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                style: "radio-button",
                                value: "Mr",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "Mr"
                                },
                                _widgetRecordProvider: t
                            }, u(p("RIXFfJtQLE2NpEEP8WlAPQ#Value", "Mr"))), r.createElement(H, {
                                enabled: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                style: "radio-button",
                                value: "Ms",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "Ms"
                                },
                                _widgetRecordProvider: t
                            }, u(p("qq6Km8_IEkuiasFzTgXf+g#Value", "Ms")))))]
                        }, function() {
                            return []
                        }), r.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "FormContainer"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(I, {
                            _validationProps: {
                                validationService: i
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "",
                            _idProps: {
                                service: e,
                                name: "DesktopForm"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(s, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Form"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "gap: 16px;"
                            },
                            style: "display-flex flex-direction-column flex-1",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(s, {
                            align: 0,
                            animate: !1,
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "FirstName"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(C, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !0,
                            targetWidget: "Input_FirstName",
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(y, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [u(p("clYNjfu1dkOhXZJB3r4UgA#Value", "First (and middle) name"))],
                            _idProps: {
                                service: e,
                                uuid: "20"
                            },
                            _widgetRecordProvider: t
                        })), r.createElement(O, {
                            _validationProps: {
                                validationService: i,
                                validationParentId: e.getId("DesktopForm")
                            },
                            enabled: !0,
                            extendedProperties: {
                                style: "font-size: 16px; height: 48px; margin-top: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !0,
                            maxLength: 50,
                            prompt: "Enter your first (and middle) name",
                            style: "form-control",
                            variable: v.createVariable(P.DataTypes.DataTypes.Text, m.getRealSignupFirstName(), function(o) {
                                m.setRealSignupFirstName(o)
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_FirstName"
                            },
                            _widgetRecordProvider: t
                        })), r.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "LastName"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(C, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !0,
                            targetWidget: "Input_LastName",
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(y, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [u(p("F2iGiak390yOUQ_i6I53Wg#Value", "Last name"))],
                            _idProps: {
                                service: e,
                                uuid: "24"
                            },
                            _widgetRecordProvider: t
                        })), r.createElement(O, {
                            _validationProps: {
                                validationService: i,
                                validationParentId: e.getId("DesktopForm")
                            },
                            enabled: !0,
                            extendedProperties: {
                                style: "font-size: 16px; height: 48px; margin-top: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !0,
                            maxLength: 50,
                            prompt: "Enter your last name",
                            style: "form-control",
                            variable: v.createVariable(P.DataTypes.DataTypes.Text, m.getRealSignupLastName(), function(o) {
                                m.setRealSignupLastName(o)
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_LastName"
                            },
                            _widgetRecordProvider: t
                        })), r.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            style: "display-flex flex-direction-column gap-s position-relative date-input",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Birthdate"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(C, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !0,
                            targetWidget: "Input_Date",
                            _idProps: {
                                service: e,
                                uuid: "27"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(y, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [u(p("OjWV19XHkke+IHNk9a6DPA#Value", "Date of birth"))],
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: t
                        })), r.createElement(s, {
                            align: 0,
                            animate: !1,
                            style: "input-flatpickr position-relative",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(O, {
                            _validationProps: {
                                validationService: i,
                                validationParentId: e.getId("DesktopForm")
                            },
                            enabled: !0,
                            extendedProperties: {
                                style: "font-size: 16px; height: 48px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !0,
                            maxLength: 0,
                            prompt: "dd/mm/yyyy",
                            style: "form-control input_dateofbirth",
                            variable: v.createVariable(P.DataTypes.DataTypes.Text, m.getRealSignupDateofBirth(), function(o) {
                                m.setRealSignupDateofBirth(o)
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_Date"
                            },
                            _widgetRecordProvider: t
                        }), r.createElement(ie, {
                            enabled: !0,
                            onClick: c(function() {
                                var o = g.clone();
                                f.iconOnClick$Action(f.callContext(o))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "31"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(x, {
                            extendedProperties: {
                                style: "right: 16px; top: 12px;"
                            },
                            image: P.Navigation.VersionedURL.getVersionedUrl("img/tradershub.calendar.svg"),
                            style: "position-absolute cursor-pointer",
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "32"
                            },
                            _widgetRecordProvider: t
                        }))))), r.createElement(s, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                marginLeft: "24px"
                            },
                            style: "display-flex align-items-center justify-content-center flex-1",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "33"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(x, {
                            image: P.Navigation.VersionedURL.getVersionedUrl("img/tradershub.namedob2.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "34"
                            },
                            _widgetRecordProvider: t
                        }))), r.createElement(s, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            style: "display-flex justify-content-flex-end",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "35"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(T, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-radius: 100px; border-width: 0px;"
                            },
                            gridProperties: {
                                width: "100px"
                            },
                            isDefault: !0,
                            onClick: c(function() {
                                l.validateWidget(e.getId("DesktopForm"));
                                var o = g.clone();
                                f.saveOnClick$Action(f.callContext(o))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "36"
                            },
                            _widgetRecordProvider: t
                        }, u(p("X78ePeC7k0+pE9zc8bR0qA#Value", "Next"))))))), r.createElement(s, {
                            align: 0,
                            animate: !0,
                            style: "full-width personal-details-section__mobile",
                            visible: v.getCachedValue(e.getId("LifJMx9T4kq6GQm0jnLl7g.Visible"), function() {
                                return !A.isDesktop$Action(g).isDesktopOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "37"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(G, {
                            getOwnerSpan: c(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: c(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: c(function(o) {
                                    f.handleError(o)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                uuid: "38",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }))]
                    })
                },
                _dependencies: [_(m.getRealSignupDateofBirth()), _(m.getRealSignupLastName()), _(m.getRealSignupFirstName()), _(m.getSalutation()), _(m.getIsEuUser())]
            }))
        }
    };
c(h, "View");
var K = h,
    tt = K;
export {
    tt as
    default
};