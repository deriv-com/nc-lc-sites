import {
    a as Q,
    b as G
} from "./_oschunk-I6DX7COY.js";
import {
    a as X
} from "./_oschunk-YI4WEWLG.js";
import "./_oschunk-FCTT25EN.js";
import {
    a as T
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as U,
    h as g,
    p as K,
    r as R,
    s as q,
    t as Y,
    y as C
} from "./_oschunk-HUOHOHZB.js";
import {
    a as J
} from "./_oschunk-Y45M2O2K.js";
import {
    a as z,
    g as P,
    i as O
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as _,
    d as M
} from "./_oschunk-27GDEXUT.js";
import "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import {
    g as w,
    nb as x,
    sb as L
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as A
} from "./_oschunk-NTQBNJ73.js";
import {
    c,
    g as H
} from "./_oschunk-DVBKI63I.js";
var E = H(z());
var l = H(z());
var te = {
        "0S7g+gp47kO+DUh8oIzCdQ#Value": "Suivant",
        "S7KIjno+mUurNZSFq644Mw#Value": "exactement tel qu'il appara\xEEt sur votre document d'identit\xE9.",
        "k1pAqtTKXky+JzLcuZkOfQ#Value": "date de naissance",
        "DHVSSPqKjkKqmVIniWiXxA#Value": "Entrez votre",
        "h20nWPcKL0ygWpUvX9RZQA#Value": "Date de naissance"
    },
    Z = {
        "fr-FR": {
            translations: te,
            isRTL: !1
        }
    };

function N(v, f, u, e) {
    let a = {
        DateOfBirth: v.DateOfBirth
    };

    function t(s, d, y) {
        let p = new Date(y, d - 1, s);
        return p.getFullYear() === y && p.getMonth() === d - 1 && p.getDate() === s
    }
    c(t, "isValidDate");
    let o = new Date,
        n = new Date(o.getFullYear() - 18, o.getMonth(), o.getDate()),
        r = yup.object().shape({
            DateOfBirth: yup.string().required("Date of birth is required.").trim().matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, "Date of birth must be in the dd/mm/yyyy format.").test("is-valid-date", "Date of birth is not a valid calendar date.", function(s) {
                if (!s) return !1;
                let [d, y, p] = s.split("/").map(Number);
                return t(d, y, p)
            }).test("min-year", "Year of birth must be 1924 or later.", function(s) {
                if (!s) return !1;
                let [, , d] = s.split("/").map(Number);
                return d >= 1924
            }).test("is-18-years-old", "You must be at least 18 years old.", function(s) {
                if (!s) return !1;
                let [d, y, p] = s.split("/").map(Number);
                return new Date(p, y - 1, d) <= n
            })
        }),
        {
            errors: m,
            validFields: b
        } = validate(r, a);
    v.ValidationErrors = JSON.stringify(m), v.ValidFields = JSON.stringify(b)
}
c(N, "default");

function V(v, f, u) {
    cacheTrackEvents.track({
        name: "ce_real_account_signup_form",
        properties: {
            action: "step_passed",
            step_num: .5,
            step_codename: "personal_details_2",
            form_name: "real_account_signup_form_outsystems"
        }
    })
}
c(V, "default");

function F(v, f, u) {
    window.fp && window.fp.open && !fp.isOpen && fp.open()
}
c(F, "default");

function B(v, f, u, e) {
    var a = new Date;
    a.setFullYear(a.getFullYear() - 18);

    function t(o) {
        let n = o.getDate(),
            r = o.getMonth() + 1,
            m = o.getFullYear();
        return n < 10 && (n = "0" + n), r < 10 && (r = "0" + r), n + "/" + r + "/" + m
    }
    c(t, "formatDate"), flatpickr && document.getElementsByClassName("input_dateofbirth__mobile").length && (window.fp = flatpickr(".input-flatpickr_mobile", {
        disableMobile: "true",
        maxDate: a.toISOString(),
        dateFormat: "d/m/Y",
        positionElement: document.getElementsByClassName("input_dateofbirth__mobile")[0],
        defaultDate: v.Date,
        onChange: c(function(o) {
            f.DatePickerOnSelected(t(o[0]))
        }, "onChange")
    }))
}
c(B, "default");
var i = A; {
    let f = class f extends i.Controller.BaseViewController {
        constructor(e, a, t) {
            super(e, a, t, Z);
            var o = this.controller;
            this.clientActionProxies = {
                datePickerOnSelected$Action: c(function(n) {
                    return n = n === void 0 ? "" : n, o.executeActionInsideJSNode(o._datePickerOnSelected$Action.bind(o, i.DataConversion.JSNodeParamConverter.from(n, i.DataTypes.DataTypes.Text)), o.callContext(), function(r) {
                        return {}
                    }, function() {}, "DatePickerOnSelected")
                }, "datePickerOnSelected$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _saveOnClick$Action() {
            return this.hasOwnProperty("__saveOnClick$Action") || (this.__saveOnClick$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("SaveOnClick", function(n) {
                    n && (n.setAttribute("code.function", "SaveOnClick"), n.setAttribute("outsystems.function.key", "4349b087-b7a0-45f1-a603-7117297661c3"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("SaveOnClick"), e = t.callContext(e);
                        var r = new i.DataTypes.VariableHolder,
                            m = new i.DataTypes.VariableHolder(new(i.Controller.BaseController.getJSONDeserializeOutputType(x))),
                            b = new i.DataTypes.VariableHolder(new(i.Controller.BaseController.getJSONDeserializeOutputType(w)));
                        if (r.value = i.Logger.startActiveSpan("Validate", function(s) {
                                s && (s.setAttribute("code.function", "Validate"), s.setAttribute("outsystems.function.key", "27e9e74a-6605-4a54-a7f1-7b960d353826"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(N, "Validate", "SaveOnClick", {
                                        DateOfBirth: i.DataConversion.JSNodeParamConverter.to(_.getRealSignupDateofBirth(), i.DataTypes.DataTypes.Text),
                                        ValidationErrors: i.DataConversion.JSNodeParamConverter.to("", i.DataTypes.DataTypes.Text),
                                        ValidFields: i.DataConversion.JSNodeParamConverter.to("", i.DataTypes.DataTypes.Text)
                                    }, function(d) {
                                        var y = new(t.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.SaveOnClick$validateJSResult"));
                                        return y.validationErrorsOut = i.DataConversion.JSNodeParamConverter.from(d.ValidationErrors, i.DataTypes.DataTypes.Text), y.validFieldsOut = i.DataConversion.JSNodeParamConverter.from(d.ValidFields, i.DataTypes.DataTypes.Text), y
                                    }, {}, {})
                                } finally {
                                    s && s.end()
                                }
                            }, 1), b.value.dataOut = i.JSONUtils.deserializeFromJSON(r.value.validationErrorsOut, w, !1), m.value.dataOut = i.JSONUtils.deserializeFromJSON(r.value.validFieldsOut, x, !1), a.widgets.get(o.getId("Input_date")).validAttr = m.value.dataOut.dateOfBirthAttr, a.widgets.get(o.getId("Input_date")).validationMessageAttr = b.value.dataOut.dateOfBirthAttr, a.widgets.get(o.getId("DobForm")).validAttr) return i.Logger.startActiveSpan("RudderStack", function(s) {
                            s && (s.setAttribute("code.function", "RudderStack"), s.setAttribute("outsystems.function.key", "36489585-237b-4642-9647-7c9fabd0cc30"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(V, "RudderStack", "SaveOnClick", null, function(d) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), _.setRealSignupPassedStepCount(2), i.Navigation.navigateTo(i.Navigation.generateScreenURL("tradershub", "personal-details/additional", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__saveOnClick$Action
        }
        set _saveOnClick$Action(e) {
            this.__saveOnClick$Action = e
        }
        get _onClick$Action() {
            return this.hasOwnProperty("__onClick$Action") || (this.__onClick$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnClick", function(n) {
                    n && (n.setAttribute("code.function", "OnClick"), n.setAttribute("outsystems.function.key", "62796204-4d60-4569-8db3-df4e5dd95d59"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClick"), e = t.callContext(e), i.Logger.startActiveSpan("OpenDatePicker", function(r) {
                            r && (r.setAttribute("code.function", "OpenDatePicker"), r.setAttribute("outsystems.function.key", "1fa0e14c-813e-4011-abf0-87a0cfeae5bc"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(F, "OpenDatePicker", "OnClick", null, function(m) {}, {}, {})
                            } finally {
                                r && r.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClick$Action
        }
        set _onClick$Action(e) {
            this.__onClick$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "8be16776-ba94-418f-aaf3-80100df2265c"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), i.Logger.startActiveSpan("InitializeFlatpickr", function(r) {
                            r && (r.setAttribute("code.function", "InitializeFlatpickr"), r.setAttribute("outsystems.function.key", "8e04fc49-92e5-458e-b9f4-63600a22775d"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(B, "InitializeFlatpickr", "OnReady", {
                                    Date: i.DataConversion.JSNodeParamConverter.to(_.getRealSignupDateofBirth(), i.DataTypes.DataTypes.Text)
                                }, function(m) {}, {
                                    DatePickerOnSelected: t.clientActionProxies.datePickerOnSelected$Action
                                }, {})
                            } finally {
                                r && r.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _datePickerOnSelected$Action() {
            return this.hasOwnProperty("__datePickerOnSelected$Action") || (this.__datePickerOnSelected$Action = function(e, a) {
                var t = this.model,
                    o = this.controller,
                    n = this.idService;
                return i.Logger.startActiveSpan("DatePickerOnSelected", function(r) {
                    r && (r.setAttribute("code.function", "DatePickerOnSelected"), r.setAttribute("outsystems.function.key", "b4425647-fc18-4104-8d5c-babc95095013"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("DatePickerOnSelected"), a = o.callContext(a);
                        var m = new i.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.DatePickerOnSelected$vars")));
                        m.value.selectedDateTimeInLocal = e, _.setRealSignupDateofBirth(m.value.selectedDateTimeInLocal)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__datePickerOnSelected$Action
        }
        set _datePickerOnSelected$Action(e) {
            this.__datePickerOnSelected$Action = e
        }
        saveOnClick$Action(e) {
            var a = this.controller;
            return i.Logger.startActiveSpan("SaveOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "SaveOnClick"), t.setAttribute("outsystems.function.key", "4349b087-b7a0-45f1-a603-7117297661c3"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._saveOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClick$Action(e) {
            var a = this.controller;
            return i.Logger.startActiveSpan("OnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClick"), t.setAttribute("outsystems.function.key", "62796204-4d60-4569-8db3-df4e5dd95d59"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var a = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "8be16776-ba94-418f-aaf3-80100df2265c"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        datePickerOnSelected$Action(e, a) {
            var t = this.controller;
            return i.Logger.startActiveSpan("DatePickerOnSelected__proxy", function(o) {
                o && (o.setAttribute("code.function", "DatePickerOnSelected"), o.setAttribute("outsystems.function.key", "b4425647-fc18-4104-8d5c-babc95095013"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._datePickerOnSelected$Action, a, e)
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
                var a = this.controller,
                    t = this.model,
                    o = this.idService;
                return a.onReady$Action(e)
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
            return M.defaultTimeout
        }
    };
    c(f, "ControllerInner");
    let v = f;
    D = v, D.registerVariableGroupType("tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.SaveOnClick$validateJSResult", [{
        name: "ValidationErrors",
        attrName: "validationErrorsOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "ValidFields",
        attrName: "validFieldsOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), D.registerVariableGroupType("tradershub.RealAccountCreationBlocks.PersonalDetailsMobileDOBForm.DatePickerOnSelected$vars", [{
        name: "SelectedDateTime",
        attrName: "selectedDateTimeInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var D, j = new i.Controller.ControllerFactory(D, J);
var k = A,
    xe = O.PlaceholderContent,
    Te = O.IteratorPlaceholderContent,
    S = class S extends P.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationBlocks.PersonalDetailsMobileDOBForm"
        }
        static getAttributes() {
            return {
                codeFunction: "PersonalDetailsMobileDOBForm",
                functionKey: "e61c528b-91e6-4fff-aa46-dcc9d93cf83c",
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
            return Q
        }
        get controllerFactory() {
            return j
        }
        get title() {
            return ""
        }
        internalRender() {
            let f = this.model,
                u = this.controller,
                e = this.idService,
                a = u.validationService,
                t = this.widgetsRecordProvider,
                o = u.callContext(),
                n = S.ifWidget,
                r = S.textWidget,
                m = S.asPrimitiveValue,
                b = S.getTranslation,
                s = this;
            return l.createElement("div", this.getRootNodeProperties(), l.createElement(K, {
                _validationProps: {
                    validationService: a
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "display-flex flex-direction-column ",
                _idProps: {
                    service: e,
                    name: "DobForm"
                },
                _widgetRecordProvider: t
            }, l.createElement(g, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, l.createElement(g, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "gap: 16px;"
                },
                style: "flex-1 display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }, l.createElement(g, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 0px;"
                },
                style: "display-flex flex-direction-column gap-s position-relative",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }, l.createElement(Y, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                mandatory: !0,
                targetWidget: "Input_date",
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }, r(b("h20nWPcKL0ygWpUvX9RZQA#Value", "Date of birth"))), l.createElement(g, {
                align: 0,
                animate: !1,
                style: "input-flatpickr_mobile",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }, l.createElement(q, {
                _validationProps: {
                    validationService: a,
                    validationParentId: e.getId("DobForm")
                },
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 0,
                mandatory: !0,
                maxLength: 0,
                prompt: "dd/mm/yyyy",
                style: "form-control input_dateofbirth__mobile",
                variable: f.createVariable(k.DataTypes.DataTypes.Text, _.getRealSignupDateofBirth(), function(d) {
                    _.setRealSignupDateofBirth(d)
                }),
                _idProps: {
                    service: e,
                    name: "Input_date"
                },
                _widgetRecordProvider: t
            }), l.createElement(R, {
                extendedEvents: {
                    onClick: c(function() {
                        var d = o.clone();
                        u.onClick$Action(u.callContext(d))
                    }, "onClick")
                },
                extendedProperties: {
                    style: "right: 16px; top: 40px;"
                },
                gridProperties: {
                    width: "24px"
                },
                image: k.Navigation.VersionedURL.getVersionedUrl("img/tradershub.calendar.svg"),
                style: "position-absolute",
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t
            })))), l.createElement(g, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #E5F5FC; border-radius: 4px; margin-top: 16px; padding: 16px;"
                },
                style: "display-flex full-width align-items-center gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }, l.createElement(R, {
                image: k.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_black.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }), l.createElement(g, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t
            }, l.createElement(C, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                text: [r(b("DHVSSPqKjkKqmVIniWiXxA#Value", "Enter your "))],
                _idProps: {
                    service: e,
                    uuid: "11"
                },
                _widgetRecordProvider: t
            }), l.createElement(C, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold;"
                },
                text: [r(b("k1pAqtTKXky+JzLcuZkOfQ#Value", "date of birth"))],
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t
            }), l.createElement(C, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                text: [r(b("S7KIjno+mUurNZSFq644Mw#Value", " exactly as it appears on your identity document."))],
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: t
            }))), l.createElement(g, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 16px;"
                },
                style: "full-width ",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "14"
                },
                _widgetRecordProvider: t
            }, l.createElement(C, {
                extendedProperties: {
                    style: "font-size: 10px; font-weight: bold;"
                },
                text: ["Example:"],
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: t
            }), l.createElement(g, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 8px; text-align: center;"
                },
                style: "full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "16"
                },
                _widgetRecordProvider: t
            }, l.createElement(R, {
                image: k.Navigation.VersionedURL.getVersionedUrl("img/tradershub.content_1_.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "17"
                },
                _widgetRecordProvider: t
            })))), l.createElement(g, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 24px;"
                },
                style: "full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "18"
                },
                _widgetRecordProvider: t
            }, l.createElement(U, {
                enabled: !0,
                extendedProperties: {
                    style: "border-radius: 100px; border-width: 0px;"
                },
                isDefault: !0,
                onClick: c(function() {
                    s.validateWidget(e.getId("DobForm"));
                    var d = o.clone();
                    u.saveOnClick$Action(u.callContext(d))
                }, "onClick"),
                style: "btn btn-primary full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "19"
                },
                _widgetRecordProvider: t
            }, r(b("0S7g+gp47kO+DUh8oIzCdQ#Value", "Next"))))))
        }
    };
c(S, "View");
var I = S,
    $ = I;
var ee = A,
    ne = O.PlaceholderContent,
    Je = O.IteratorPlaceholderContent,
    h = class h extends P.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreationMobile.PersonalDetailsDateOfBirth"
        }
        static getAttributes() {
            return {
                codeFunction: "PersonalDetailsDateOfBirth",
                functionKey: "994ebea7-c4e9-47ec-9a00-6c82c5510a1f",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreationMobile.PersonalDetailsDateOfBirth.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [T, $]
        }
        get modelFactory() {
            return G
        }
        get controllerFactory() {
            return X
        }
        get title() {
            let f = this.model,
                u = this.controller,
                e = this.idService,
                a = u.validationService,
                t = u.callContext(),
                o = h.asPrimitiveValue,
                n = h.getTranslation,
                r = this;
            return ee.Injector.resolve(ee.ServiceNames.TranslationsService).getMessage("p75OmenE7EeaAGyCxVEKHw#TitleExpression.-545367396.1", "Personal details | Deriv")
        }
        internalRender() {
            let f = this.model,
                u = this.controller,
                e = this.idService,
                a = u.validationService,
                t = this.widgetsRecordProvider,
                o = u.callContext(),
                n = h.ifWidget,
                r = h.textWidget,
                m = h.asPrimitiveValue,
                b = h.getTranslation,
                s = this;
            return E.createElement("div", this.getRootNodeProperties(), E.createElement(T, {
                getOwnerSpan: c(function() {
                    return s.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return s.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: "Personal details",
                    Analytics: f.getCachedValue(e.getId("DGx2YQYde02QgC4Jz6W3NQ.Analytics"), function() {
                        return function() {
                            var d = new L;
                            return d.stepCodenameAttr = "personal_details_2", d.stepNumberAttr = "0.5", d
                        }()
                    })
                },
                events: {
                    _handleError: c(function(d) {
                        u.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new ne(function() {
                        return [E.createElement($, {
                            getOwnerSpan: c(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: c(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: c(function(d) {
                                    u.handleError(d)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: []
            }))
        }
    };
c(h, "View");
var W = h,
    ze = W;
export {
    ze as
    default
};