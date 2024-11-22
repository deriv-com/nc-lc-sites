import {
    a as I
} from "./_oschunk-ILTRYJXV.js";
import {
    a as E
} from "./_oschunk-Y45M2O2K.js";
import {
    a as m,
    d as D
} from "./_oschunk-27GDEXUT.js";
import {
    a as A
} from "./_oschunk-D2MH3QEK.js";
import {
    ia as k
} from "./_oschunk-NTQBNJ73.js";
import {
    c
} from "./_oschunk-DVBKI63I.js";
var N = {
        "X78ePeC7k0+pE9zc8bR0qA#Value": "Suivant",
        "OjWV19XHkke+IHNk9a6DPA#Value": "Date de naissance",
        "F2iGiak390yOUQ_i6I53Wg#Value": "Nom de famille",
        "clYNjfu1dkOhXZJB3r4UgA#Value": "Pr\xE9nom (et nom de famille)",
        "qq6Km8_IEkuiasFzTgXf+g#Value": "Non",
        "RIXFfJtQLE2NpEEP8WlAPQ#Value": "Oui",
        "Q4lyuhnNSEqoHjQAqLgX7w#Value": "exactement comme il appara\xEEt sur votre document d'identit\xE9.",
        "aWWMvx89EkSvdbAnWPKLxQ#Value": "date de naissance",
        "9vFpd9z6yE2EOaqTW3jrhQ#Value": "et",
        "ZE4ihfYDwUGA+3lD68twQg#Value": "nom",
        "qCkbiF5mmEmfN1dAd5fEEQ#Value": "Entrez votre",
        "X1vGH2Op40ipeUYbGABbZw#Title": "D\xE9tails personnels | Deriv",
        "X1vGH2Op40ipeUYbGABbZw#TitleExpression.-545367396.1": "D\xE9tails personnels | Deriv"
    },
    p = {
        "fr-FR": {
            translations: N,
            isRTL: !1
        }
    };

function v(u, d, h) {
    window.fp && window.fp.open && !fp.isOpen && fp.open()
}
c(v, "default");

function C(u, d, h, t) {
    var a = new Date;
    a.setFullYear(a.getFullYear() - 18);

    function e(o) {
        let n = o.getDate(),
            s = o.getMonth() + 1,
            r = o.getFullYear();
        return n < 10 && (n = "0" + n), s < 10 && (s = "0" + s), n + "/" + s + "/" + r
    }
    c(e, "formatDate"), flatpickr && document.getElementsByClassName("input_dateofbirth").length && (window.fp = flatpickr(".input-flatpickr", {
        disableMobile: "true",
        yearSelectorType: "select",
        maxDate: a.toISOString(),
        positionElement: document.getElementsByClassName("input_dateofbirth")[0],
        dateFormat: "d/m/Y",
        altFormat: "d/m/Y",
        defaultDate: u.Date,
        onChange: c(function(o) {
            d.DatePickerOnSelected(e(o[0]))
        }, "onChange"),
        allowInput: !0
    }))
}
c(C, "default");

function S(u, d, h) {
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
c(S, "default");

function O(u, d, h, t) {
    let a = {
        FirstName: u.FirstName,
        LastName: u.LastName,
        DateOfBirth: u.DateOfBirth
    };

    function e(l, f, b) {
        let y = new Date(b, f - 1, l);
        return y.getFullYear() === b && y.getMonth() === f - 1 && y.getDate() === l
    }
    c(e, "isValidDate");
    let o = new Date,
        n = new Date(o.getFullYear() - 18, o.getMonth(), o.getDate()),
        s = yup.object().shape({
            FirstName: yup.string().noConsecutiveSpaces("First name must not contain consecutive spaces.").validCharacters("First name can only include letters, spaces, apostrophes, periods, and hyphens.").max(50, "First name must be at most 50 characters long.").required("First (and middle) name is required."),
            LastName: yup.string().noConsecutiveSpaces("Last name must not contain consecutive spaces.").validCharacters("Last name can only include letters, spaces, apostrophes, periods, and hyphens.").max(50, "Last name must be at most 50 characters long.").required("Last name is required."),
            DateOfBirth: yup.string().required("Date of birth is required.").trim().matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, "Date of birth must be in the dd/mm/yyyy format.").test("is-valid-date", "Date of birth is not a valid calendar date.", function(l) {
                if (!l) return !1;
                let [f, b, y] = l.split("/").map(Number);
                return e(f, b, y)
            }).test("min-year", "Year of birth must be 1924 or later.", function(l) {
                if (!l) return !1;
                let [, , f] = l.split("/").map(Number);
                return f >= 1924
            }).test("is-18-years-old", "You must be at least 18 years old.", function(l) {
                if (!l) return !1;
                let [f, b, y] = l.split("/").map(Number);
                return new Date(y, b - 1, f) <= n
            })
        }),
        {
            errors: r,
            validFields: _
        } = validate(s, a);
    r.FirstName && t.Validation.setWidgetAsInvalid(u.InputFirstNameWidgetId, r.FirstName), r.LastName && t.Validation.setWidgetAsInvalid(u.InputLastNameWidgetId, r.LastName), r.DateOfBirth && t.Validation.setWidgetAsInvalid(u.InputDateOfBirthWidgetId, r.DateOfBirth)
}
c(O, "default");
var i = k; {
    let d = class d extends i.Controller.BaseViewController {
        constructor(t, a, e) {
            super(t, a, e, p);
            var o = this.controller;
            this.clientActionProxies = {
                datePickerOnSelected$Action: c(function(n) {
                    return n = n === void 0 ? "" : n, o.executeActionInsideJSNode(o._datePickerOnSelected$Action.bind(o, i.DataConversion.JSNodeParamConverter.from(n, i.DataTypes.DataTypes.Text)), o.callContext(), function(s) {
                        return {}
                    }, function() {}, "DatePickerOnSelected")
                }, "datePickerOnSelected$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _datePickerOnSelected$Action() {
            return this.hasOwnProperty("__datePickerOnSelected$Action") || (this.__datePickerOnSelected$Action = function(t, a) {
                var e = this.model,
                    o = this.controller,
                    n = this.idService;
                return i.Logger.startActiveSpan("DatePickerOnSelected", function(s) {
                    s && (s.setAttribute("code.function", "DatePickerOnSelected"), s.setAttribute("outsystems.function.key", "068b843a-9009-4c8d-93d8-c73f2d859495"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("DatePickerOnSelected"), a = o.callContext(a);
                        var r = new i.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.RealAccountCreation.PersonalDetails.DatePickerOnSelected$vars")));
                        r.value.selectedDateTimeInLocal = t, m.setRealSignupDateofBirth(r.value.selectedDateTimeInLocal === i.BuiltinFunctions.nullTextIdentifier() ? i.BuiltinFunctions.nullTextIdentifier() : r.value.selectedDateTimeInLocal)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__datePickerOnSelected$Action
        }
        set _datePickerOnSelected$Action(t) {
            this.__datePickerOnSelected$Action = t
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "100a36e0-a410-49e2-8a9c-9833cde84b88"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnInitialize"), t = e.callContext(t), m.setRealSignupCurrentStep(2)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(t) {
            this.__onInitialize$Action = t
        }
        get _iconOnClick$Action() {
            return this.hasOwnProperty("__iconOnClick$Action") || (this.__iconOnClick$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("IconOnClick", function(n) {
                    n && (n.setAttribute("code.function", "IconOnClick"), n.setAttribute("outsystems.function.key", "134e1f49-eb4a-4f38-a928-464d7a8c0d00"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("IconOnClick"), t = e.callContext(t), i.Logger.startActiveSpan("OpenDatePicker", function(s) {
                            s && (s.setAttribute("code.function", "OpenDatePicker"), s.setAttribute("outsystems.function.key", "7f0a9091-99eb-4d34-98d5-2345c0378e1e"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(v, "OpenDatePicker", "IconOnClick", null, function(r) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__iconOnClick$Action
        }
        set _iconOnClick$Action(t) {
            this.__iconOnClick$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "3509508d-1e90-4cd2-832c-62b725f57f20"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t);
                        var s = new i.DataTypes.VariableHolder;
                        s.value = A.setFocus$Action(o.getId("Input_FirstName"), t), A.isDesktop$Action(t).isDesktopOut && i.Logger.startActiveSpan("InitializeFlatpickr", function(r) {
                            r && (r.setAttribute("code.function", "InitializeFlatpickr"), r.setAttribute("outsystems.function.key", "702dfc7d-f688-453f-af2d-4047eddd24c6"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(C, "InitializeFlatpickr", "OnReady", {
                                    Date: i.DataConversion.JSNodeParamConverter.to(m.getRealSignupDateofBirth(), i.DataTypes.DataTypes.Text)
                                }, function(_) {}, {
                                    DatePickerOnSelected: e.clientActionProxies.datePickerOnSelected$Action
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
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _saveOnClick$Action() {
            return this.hasOwnProperty("__saveOnClick$Action") || (this.__saveOnClick$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("SaveOnClick", function(n) {
                    n && (n.setAttribute("code.function", "SaveOnClick"), n.setAttribute("outsystems.function.key", "552a1e9e-dd29-4979-9c1e-505af5b57cbb"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("SaveOnClick"), t = e.callContext(t);
                        var s = new i.DataTypes.VariableHolder;
                        if (i.Logger.startActiveSpan("Validate", function(r) {
                                r && (r.setAttribute("code.function", "Validate"), r.setAttribute("outsystems.function.key", "d6e47b07-5527-488c-956b-6461b8200a89"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return e.safeExecuteJSNode(O, "Validate", "SaveOnClick", {
                                        InputDateOfBirthWidgetId: i.DataConversion.JSNodeParamConverter.to(o.getId("Input_Date"), i.DataTypes.DataTypes.Text),
                                        DateOfBirth: i.DataConversion.JSNodeParamConverter.to(m.getRealSignupDateofBirth(), i.DataTypes.DataTypes.Text),
                                        InputFirstNameWidgetId: i.DataConversion.JSNodeParamConverter.to(o.getId("Input_FirstName"), i.DataTypes.DataTypes.Text),
                                        FirstName: i.DataConversion.JSNodeParamConverter.to(m.getRealSignupFirstName(), i.DataTypes.DataTypes.Text),
                                        LastName: i.DataConversion.JSNodeParamConverter.to(m.getRealSignupLastName(), i.DataTypes.DataTypes.Text),
                                        InputLastNameWidgetId: i.DataConversion.JSNodeParamConverter.to(o.getId("Input_LastName"), i.DataTypes.DataTypes.Text)
                                    }, function(_) {}, {}, {})
                                } finally {
                                    r && r.end()
                                }
                            }, 1), a.widgets.get(o.getId("DesktopForm")).validAttr) return i.Logger.startActiveSpan("RudderStack", function(r) {
                            r && (r.setAttribute("code.function", "RudderStack"), r.setAttribute("outsystems.function.key", "532db969-8e06-4e6a-b559-11bf23ccad06"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(S, "RudderStack", "SaveOnClick", null, function(_) {}, {}, {})
                            } finally {
                                r && r.end()
                            }
                        }, 1), m.setRealSignupPassedStepCount(2), i.Navigation.navigateTo(i.Navigation.generateScreenURL("tradershub", "personal-details/additional", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), t, !0);
                        s.value = A.focusFirstInvalidInput$Action(o.getId("DesktopForm"), !0, "", t)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__saveOnClick$Action
        }
        set _saveOnClick$Action(t) {
            this.__saveOnClick$Action = t
        }
        datePickerOnSelected$Action(t, a) {
            var e = this.controller;
            return i.Logger.startActiveSpan("DatePickerOnSelected__proxy", function(o) {
                o && (o.setAttribute("code.function", "DatePickerOnSelected"), o.setAttribute("outsystems.function.key", "068b843a-9009-4c8d-93d8-c73f2d859495"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._datePickerOnSelected$Action, a, t)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onInitialize$Action(t) {
            var a = this.controller;
            return i.Logger.startActiveSpan("OnInitialize__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnInitialize"), e.setAttribute("outsystems.function.key", "100a36e0-a410-49e2-8a9c-9833cde84b88"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onInitialize$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        iconOnClick$Action(t) {
            var a = this.controller;
            return i.Logger.startActiveSpan("IconOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "IconOnClick"), e.setAttribute("outsystems.function.key", "134e1f49-eb4a-4f38-a928-464d7a8c0d00"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._iconOnClick$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(t) {
            var a = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "3509508d-1e90-4cd2-832c-62b725f57f20"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onReady$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        saveOnClick$Action(t) {
            var a = this.controller;
            return i.Logger.startActiveSpan("SaveOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "SaveOnClick"), e.setAttribute("outsystems.function.key", "552a1e9e-dd29-4979-9c1e-505af5b57cbb"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._saveOnClick$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(t) {
                var a = this.controller,
                    e = this.model,
                    o = this.idService;
                return a.onInitialize$Action(t)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var a = this.controller,
                    e = this.model,
                    o = this.idService;
                return a.onReady$Action(t)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return I.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return D.defaultTimeout
        }
    };
    c(d, "ControllerInner");
    let u = d;
    g = u, g.registerVariableGroupType("tradershub.RealAccountCreation.PersonalDetails.DatePickerOnSelected$vars", [{
        name: "SelectedDateTime",
        attrName: "selectedDateTimeInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var g, K = new i.Controller.ControllerFactory(g, E);
export {
    K as a
};