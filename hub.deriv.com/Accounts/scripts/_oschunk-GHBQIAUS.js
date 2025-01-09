import {
    a as de
} from "./_oschunk-SI24YMBJ.js";
import {
    a as ue,
    b as je
} from "./_oschunk-FSWTA5WV.js";
import {
    b as X
} from "./_oschunk-GPNNXU3M.js";
import {
    b as qe,
    d as _,
    f as B,
    i as Ge,
    j as Q,
    k as L,
    l as w,
    m as U,
    n as Ke,
    p as z,
    r as J
} from "./_oschunk-M2CKCDBB.js";
import {
    a as Ye
} from "./_oschunk-JZPYLYYR.js";
import {
    a as Je
} from "./_oschunk-NQZZDANH.js";
import {
    a as Y,
    g as F,
    i as O
} from "./_oschunk-WZHUAZJP.js";
import {
    a as S,
    h as le,
    m as D,
    n as ce,
    o as W
} from "./_oschunk-KZFTAIEG.js";
import {
    Eg as p,
    Jg as M,
    jd as ze
} from "./_oschunk-UATY3RVV.js";
import {
    ia as I
} from "./_oschunk-3RH6DZJJ.js";
import {
    a as Be,
    c,
    h as j
} from "./_oschunk-QHO7QY6K.js";
var y = j(Y());

function fe(u, n, v, e) {
    let a = yup.string().required("First name is required.").max(50, "Enter no more than 50 characters.").matches(/^(?!.*\s{2,})(?!\s)[\p{L}\s'.-]{1,50}$/u, "Letters, spaces, periods, hyphens, apostrophes only.");
    try {
        a.validateSync(u.FirstNameInput), u.ErrorMessage = "", e.Validation.setWidgetAsValid(u.WidgetId)
    } catch (t) {
        u.ErrorMessage = t.message, e.Validation.setWidgetAsInvalid(u.WidgetId, u.ErrorMessage)
    }
}
c(fe, "default");

function me(u, n, v, e) {
    u.FirstNameError && e.Validation.setWidgetAsInvalid(u.FirstnameWidgetID, u.FirstNameError), u.LastNameError && e.Validation.setWidgetAsInvalid(u.LastNameWidgetID, u.LastNameError)
}
c(me, "default");

function ye(u, n, v, e) {
    let a = dayjs.unix(u.EPOCInput).format("YYYY-MM-DD"),
        t = new Date(a);
    console.log("dateObj: ", t), u.DateString = t
}
c(ye, "default");

function ve(u, n, v, e) {
    console.log("$parameters.DOBInput: ", u.DOBInput);
    let a = yup.string().required("Date of birth is required.").test({
        name: "epocDate",
        test: c(t => !dayjs(t).isBefore(dayjs(0)), "test"),
        message: "Date of birth is required"
    }).test({
        name: "validateDOB",
        test: c(t => dayjs(t).isValid() && dayjs(t).isBefore(dayjs().subtract(18, "years")), "test"),
        message: "You must be 18 years old and above."
    });
    try {
        a.validateSync(u.DOBInput), u.ErrorMessage = ""
    } catch (t) {
        u.ErrorMessage = t.message
    }
}
c(ve, "default");

function he(u, n, v, e) {
    let a = yup.string().required("Last name is required.").max(50, "Enter no more than 50 characters.").matches(/^(?!.*\s{2,})(?!\s)[\p{L}\s'.-]{1,50}$/u, "Letters, spaces, periods, hyphens, apostrophes only.");
    try {
        a.validateSync(u.LastNameInput), u.ErrorMessage = ""
    } catch (t) {
        u.ErrorMessage = t.message
    }
}
c(he, "default");
var o = I; {
    let n = class n extends o.Controller.BaseViewController {
        constructor(e, a, t) {
            super(e, a, t);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _firstNameOnChange$Action() {
            return this.hasOwnProperty("__firstNameOnChange$Action") || (this.__firstNameOnChange$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("FirstNameOnChange", function(r) {
                    r && (r.setAttribute("code.function", "FirstNameOnChange"), r.setAttribute("outsystems.function.key", "26f35730-192c-46de-9074-8a0b17596b84"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("FirstNameOnChange"), e = t.callContext(e);
                        var l = new o.DataTypes.VariableHolder;
                        l.value = o.Logger.startActiveSpan("ValidateFirstName", function(s) {
                            s && (s.setAttribute("code.function", "ValidateFirstName"), s.setAttribute("outsystems.function.key", "1aea8f46-31a4-4811-bf33-60adc6f1406f"), s.setAttribute("outsystems.function.owner.name", "Accounts"), s.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(fe, "ValidateFirstName", "FirstNameOnChange", {
                                    WidgetId: o.DataConversion.JSNodeParamConverter.to(i.getId("Input_FirstName"), o.DataTypes.DataTypes.Text),
                                    FirstNameInput: o.DataConversion.JSNodeParamConverter.to(a.variables.firstNameFieldIn.valueAttr, o.DataTypes.DataTypes.Text),
                                    ErrorMessage: o.DataConversion.JSNodeParamConverter.to("", o.DataTypes.DataTypes.Text)
                                }, function(g) {
                                    var h = new(t.constructor.getVariableGroupType("Accounts.ProofOfIdentity.PersonalDetails.FirstNameOnChange$validateFirstNameJSResult"));
                                    return h.errorMessageOut = o.DataConversion.JSNodeParamConverter.from(g.ErrorMessage, o.DataTypes.DataTypes.Text), h
                                }, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), a.variables.firstNameFieldIn.isDirtyAttr = !0, a.variables.firstNameFieldIn.errorMessageAttr = l.value.errorMessageOut
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__firstNameOnChange$Action
        }
        set _firstNameOnChange$Action(e) {
            this.__firstNameOnChange$Action = e
        }
        get _datePickerOnSelected$Action() {
            return this.hasOwnProperty("__datePickerOnSelected$Action") || (this.__datePickerOnSelected$Action = function(e, a) {
                var t = this.model,
                    i = this.controller,
                    r = this.idService;
                return o.Logger.startActiveSpan("DatePickerOnSelected", function(l) {
                    l && (l.setAttribute("code.function", "DatePickerOnSelected"), l.setAttribute("outsystems.function.key", "2ddf7983-0432-48f1-a3dd-4b95036d06ca"), l.setAttribute("outsystems.function.owner.name", "Accounts"), l.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("DatePickerOnSelected"), a = i.callContext(a);
                        var s = new o.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("Accounts.ProofOfIdentity.PersonalDetails.DatePickerOnSelected$vars")));
                        s.value.selectedDateTimeInLocal = e, t.variables.dateOfBirthFieldIn.valueAttr = o.BuiltinFunctions.dateTimeToDate(s.value.selectedDateTimeInLocal), i._dateOfBirthOnChange$Action(a)
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__datePickerOnSelected$Action
        }
        set _datePickerOnSelected$Action(e) {
            this.__datePickerOnSelected$Action = e
        }
        get _saveOnClick$Action() {
            return this.hasOwnProperty("__saveOnClick$Action") || (this.__saveOnClick$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("SaveOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "SaveOnClick"), r.setAttribute("outsystems.function.key", "5591fbc6-2de7-4375-9110-f269f99bd27e"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        t.ensureControllerAlive("SaveOnClick"), e = t.callContext(e);
                        var l = new o.DataTypes.VariableHolder;
                        return o.Flow.executeAsyncFlow(function() {
                            return o.Flow.executeSequence(function() {
                                if (a.variables.firstNameFieldIn.errorMessageAttr === o.BuiltinFunctions.nullTextIdentifier() && a.variables.lastNameFieldIn.errorMessageAttr === o.BuiltinFunctions.nullTextIdentifier() && a.variables.dateOfBirthFieldIn.errorMessageAttr === o.BuiltinFunctions.nullTextIdentifier()) return o.Flow.executeSequence(function() {
                                    return a.variables.firstNameFieldIn.isDirtyAttr || a.variables.lastNameFieldIn.isDirtyAttr || a.variables.dateOfBirthFieldIn.isDirtyAttr ? (a.flush(), ce.setSettings$Action(S.getServer(), S.getAuthToken(), S.getAppId(), "en", function() {
                                        var s = new ze;
                                        return s.date_of_birthAttr = a.variables.dateOfBirthFieldIn.valueAttr, s.first_nameAttr = a.variables.firstNameFieldIn.valueAttr, s.last_nameAttr = a.variables.lastNameFieldIn.valueAttr, s
                                    }(), e).then(function(s) {
                                        l.value = s
                                    }).then(function() {
                                        W.logger$Action(l.value.responseOut.errorAttr.codeAttr, "Response", e)
                                    }).then(function() {
                                        return o.Flow.executeSequence(function() {
                                            return l.value.responseOut.errorAttr.codeAttr !== o.BuiltinFunctions.nullTextIdentifier() || l.value.responseOut.errorAttr.messageAttr !== o.BuiltinFunctions.nullTextIdentifier() ? (a.variables.errorDataVar = l.value.responseOut.errorAttr, t.handleError$Action(a.variables.errorDataVar, e)) : o.Flow.executeSequence(function() {
                                                return a.variables.isFormUpdateIn ? o.Flow.returnAsync(o.Navigation.navigateTo(o.Navigation.generateScreenURL("Accounts", "ProofOfIdentityStatus", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), e, !0)) : t.nextStep$Action(3, e)
                                            })
                                        })
                                    })) : t.nextStep$Action(3, e)
                                });
                                o.Logger.startActiveSpan("ComputeError", function(s) {
                                    s && (s.setAttribute("code.function", "ComputeError"), s.setAttribute("outsystems.function.key", "5985a225-9237-48dc-bb18-90a1cae52849"), s.setAttribute("outsystems.function.owner.name", "Accounts"), s.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(me, "ComputeError", "SaveOnClick", {
                                            DOBWidgetID: o.DataConversion.JSNodeParamConverter.to(S.getDevice() === "desktop" ? i.getId("DesktopDate") : i.getId("MobileDate"), o.DataTypes.DataTypes.Text),
                                            DOBErrorMessage: o.DataConversion.JSNodeParamConverter.to(a.variables.dateOfBirthFieldIn.errorMessageAttr, o.DataTypes.DataTypes.Text),
                                            LastNameWidgetID: o.DataConversion.JSNodeParamConverter.to(i.getId("Input_LastName"), o.DataTypes.DataTypes.Text),
                                            FirstnameWidgetID: o.DataConversion.JSNodeParamConverter.to(i.getId("Input_FirstName"), o.DataTypes.DataTypes.Text),
                                            FirstNameError: o.DataConversion.JSNodeParamConverter.to(a.variables.firstNameFieldIn.errorMessageAttr, o.DataTypes.DataTypes.Text),
                                            LastNameError: o.DataConversion.JSNodeParamConverter.to(a.variables.lastNameFieldIn.errorMessageAttr, o.DataTypes.DataTypes.Text)
                                        }, function(g) {}, {}, {})
                                    } finally {
                                        s && s.end()
                                    }
                                }, 1)
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__saveOnClick$Action
        }
        set _saveOnClick$Action(e) {
            this.__saveOnClick$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "a75420d3-a869-40b1-a7a2-c1af8080d052"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var l = new o.DataTypes.VariableHolder,
                            s = new o.DataTypes.VariableHolder,
                            g = new o.DataTypes.VariableHolder(new o.DataTypes.JSONSerializeOutputType),
                            h = new o.DataTypes.VariableHolder(new o.DataTypes.JSONSerializeOutputType);
                        return o.Flow.executeAsyncFlow(function() {
                            return a.variables.isLoadingVar = !0, h.value.jSONOut = o.JSONUtils.serializeToJSON(a.variables.firstNameFieldIn, !1, !1), a.flush(), ce.getSettings$Action(S.getServer(), S.getAuthToken(), S.getAppId(), S.getLanguage(), e).then(function(f) {
                                l.value = f
                            }).then(function() {
                                g.value.jSONOut = o.JSONUtils.serializeToJSON(l.value.responseOut.get_settingsAttr.immutable_fieldsAttr, !1, !1, o.DataTypes.DataTypes.Text), s.value = o.Logger.startActiveSpan("TransformEPOCDate", function(f) {
                                    f && (f.setAttribute("code.function", "TransformEPOCDate"), f.setAttribute("outsystems.function.key", "ece32be9-5d4f-47b9-a885-cbd8351edde6"), f.setAttribute("outsystems.function.owner.name", "Accounts"), f.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(ye, "TransformEPOCDate", "OnReady", {
                                            EPOCInput: o.DataConversion.JSNodeParamConverter.to(l.value.responseOut.get_settingsAttr.date_of_birthAttr, o.DataTypes.DataTypes.LongInteger),
                                            DateString: o.DataConversion.JSNodeParamConverter.to(o.DataTypes.DateTime.defaultValue, o.DataTypes.DataTypes.Date)
                                        }, function(P) {
                                            var K = new(t.constructor.getVariableGroupType("Accounts.ProofOfIdentity.PersonalDetails.OnReady$transformEPOCDateJSResult"));
                                            return K.dateStringOut = o.DataConversion.JSNodeParamConverter.from(P.DateString, o.DataTypes.DataTypes.Date), K
                                        }, {}, {})
                                    } finally {
                                        f && f.end()
                                    }
                                }, 1), a.variables.firstNameFieldIn.valueAttr = a.variables.firstNameFieldIn.valueAttr !== o.BuiltinFunctions.nullTextIdentifier() ? a.variables.firstNameFieldIn.valueAttr : l.value.responseOut.get_settingsAttr.first_nameAttr, a.variables.lastNameFieldIn.valueAttr = a.variables.lastNameFieldIn.valueAttr !== o.BuiltinFunctions.nullTextIdentifier() ? a.variables.lastNameFieldIn.valueAttr : l.value.responseOut.get_settingsAttr.last_nameAttr, a.variables.dateOfBirthFieldIn.valueAttr = a.variables.dateOfBirthFieldIn.valueAttr.equals(o.BuiltinFunctions.nullDate()) ? s.value.dateStringOut : a.variables.dateOfBirthFieldIn.valueAttr, a.variables.dateOfBirthFieldIn.isDisabledAttr = o.BuiltinFunctions.index(g.value.jSONOut, "date_of_birth", 0, !1, !0) > -1, a.variables.firstNameFieldIn.isDisabledAttr = o.BuiltinFunctions.index(g.value.jSONOut, "first_name", 0, !1, !0) > -1, a.variables.lastNameFieldIn.isDisabledAttr = o.BuiltinFunctions.index(g.value.jSONOut, "last_name", 0, !1, !0) > -1, a.variables.isLoadingVar = !1
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _dateOfBirthOnChange$Action() {
            return this.hasOwnProperty("__dateOfBirthOnChange$Action") || (this.__dateOfBirthOnChange$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("DateOfBirthOnChange", function(r) {
                    r && (r.setAttribute("code.function", "DateOfBirthOnChange"), r.setAttribute("outsystems.function.key", "bcd10c6c-8c21-4efe-804e-79f26d9f707e"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("DateOfBirthOnChange"), e = t.callContext(e);
                        var l = new o.DataTypes.VariableHolder;
                        l.value = o.Logger.startActiveSpan("DOBValidate", function(s) {
                            s && (s.setAttribute("code.function", "DOBValidate"), s.setAttribute("outsystems.function.key", "9f106150-b796-4970-94c0-e1b498c21638"), s.setAttribute("outsystems.function.owner.name", "Accounts"), s.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ve, "DOBValidate", "DateOfBirthOnChange", {
                                    DOBInput: o.DataConversion.JSNodeParamConverter.to(o.BuiltinFunctions.dateToText(a.variables.dateOfBirthFieldIn.valueAttr), o.DataTypes.DataTypes.Text),
                                    ErrorMessage: o.DataConversion.JSNodeParamConverter.to("", o.DataTypes.DataTypes.Text)
                                }, function(g) {
                                    var h = new(t.constructor.getVariableGroupType("Accounts.ProofOfIdentity.PersonalDetails.DateOfBirthOnChange$dOBValidateJSResult"));
                                    return h.errorMessageOut = o.DataConversion.JSNodeParamConverter.from(g.ErrorMessage, o.DataTypes.DataTypes.Text), h
                                }, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), a.widgets.get(i.getId("DesktopDate")).validAttr = l.value.errorMessageOut === o.BuiltinFunctions.nullTextIdentifier(), a.widgets.get(i.getId("DesktopDate")).validationMessageAttr = l.value.errorMessageOut, a.widgets.get(i.getId("MobileDate")).validAttr = l.value.errorMessageOut === o.BuiltinFunctions.nullTextIdentifier(), a.widgets.get(i.getId("MobileDate")).validationMessageAttr = l.value.errorMessageOut, a.variables.dateOfBirthFieldIn.isDirtyAttr = !0, a.variables.dateOfBirthFieldIn.errorMessageAttr = l.value.errorMessageOut
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__dateOfBirthOnChange$Action
        }
        set _dateOfBirthOnChange$Action(e) {
            this.__dateOfBirthOnChange$Action = e
        }
        get _liveChat_OnClick$Action() {
            return this.hasOwnProperty("__liveChat_OnClick$Action") || (this.__liveChat_OnClick$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("LiveChat_OnClick", function(r) {
                    r && (r.setAttribute("code.function", "LiveChat_OnClick"), r.setAttribute("outsystems.function.key", "bf7a10b8-3643-4514-b32e-a32a5c792481"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("LiveChat_OnClick"), e = t.callContext(e), W.showLiveChat$Action(e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__liveChat_OnClick$Action
        }
        set _liveChat_OnClick$Action(e) {
            this.__liveChat_OnClick$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnDestroy", function(r) {
                    return r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "c232c523-3818-4aa6-8f1d-e5216c3da8a0"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), o.Flow.executeAsyncFlow(function() {
                            return W.hideLiveChatSession$Action(e), t.onPersonalDetailsChange$Action(a.variables.firstNameFieldIn.valueAttr, a.variables.lastNameFieldIn.valueAttr, a.variables.dateOfBirthFieldIn.valueAttr, e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _onClickDatePicker$Action() {
            return this.hasOwnProperty("__onClickDatePicker$Action") || (this.__onClickDatePicker$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnClickDatePicker", function(r) {
                    r && (r.setAttribute("code.function", "OnClickDatePicker"), r.setAttribute("outsystems.function.key", "d8103269-934e-47b6-95a8-edaefcbffc1c"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickDatePicker"), e = t.callContext(e);
                        var l = new o.DataTypes.VariableHolder;
                        l.value = D.datePickerOpen$Action(i.getId("DesktopInteractiveDate"), e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickDatePicker$Action
        }
        set _onClickDatePicker$Action(e) {
            this.__onClickDatePicker$Action = e
        }
        get _lastNameOnChange$Action() {
            return this.hasOwnProperty("__lastNameOnChange$Action") || (this.__lastNameOnChange$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("LastNameOnChange", function(r) {
                    r && (r.setAttribute("code.function", "LastNameOnChange"), r.setAttribute("outsystems.function.key", "d9a3853d-e918-4107-abc9-5137c5bea6a0"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("LastNameOnChange"), e = t.callContext(e);
                        var l = new o.DataTypes.VariableHolder;
                        l.value = o.Logger.startActiveSpan("ValidateLastName", function(s) {
                            s && (s.setAttribute("code.function", "ValidateLastName"), s.setAttribute("outsystems.function.key", "57e3576b-5c3b-464e-bf14-c0fdf513f9ae"), s.setAttribute("outsystems.function.owner.name", "Accounts"), s.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(he, "ValidateLastName", "LastNameOnChange", {
                                    LastNameInput: o.DataConversion.JSNodeParamConverter.to(a.variables.lastNameFieldIn.valueAttr, o.DataTypes.DataTypes.Text),
                                    ErrorMessage: o.DataConversion.JSNodeParamConverter.to("", o.DataTypes.DataTypes.Text)
                                }, function(g) {
                                    var h = new(t.constructor.getVariableGroupType("Accounts.ProofOfIdentity.PersonalDetails.LastNameOnChange$validateLastNameJSResult"));
                                    return h.errorMessageOut = o.DataConversion.JSNodeParamConverter.from(g.ErrorMessage, o.DataTypes.DataTypes.Text), h
                                }, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), a.widgets.get(i.getId("Input_LastName")).validAttr = l.value.errorMessageOut === o.BuiltinFunctions.nullTextIdentifier(), a.widgets.get(i.getId("Input_LastName")).validationMessageAttr = l.value.errorMessageOut, a.variables.lastNameFieldIn.isDirtyAttr = !0, a.variables.lastNameFieldIn.errorMessageAttr = l.value.errorMessageOut
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__lastNameOnChange$Action
        }
        set _lastNameOnChange$Action(e) {
            this.__lastNameOnChange$Action = e
        }
        firstNameOnChange$Action(e) {
            var a = this.controller;
            return o.Logger.startActiveSpan("FirstNameOnChange__proxy", function(t) {
                t && (t.setAttribute("code.function", "FirstNameOnChange"), t.setAttribute("outsystems.function.key", "26f35730-192c-46de-9074-8a0b17596b84"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._firstNameOnChange$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        datePickerOnSelected$Action(e, a) {
            var t = this.controller;
            return o.Logger.startActiveSpan("DatePickerOnSelected__proxy", function(i) {
                i && (i.setAttribute("code.function", "DatePickerOnSelected"), i.setAttribute("outsystems.function.key", "2ddf7983-0432-48f1-a3dd-4b95036d06ca"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._datePickerOnSelected$Action, a, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        saveOnClick$Action(e) {
            var a = this.controller;
            return o.Logger.startActiveSpan("SaveOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SaveOnClick"), t.setAttribute("outsystems.function.key", "5591fbc6-2de7-4375-9110-f269f99bd27e"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._saveOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var a = this.controller;
            return o.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "a75420d3-a869-40b1-a7a2-c1af8080d052"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        dateOfBirthOnChange$Action(e) {
            var a = this.controller;
            return o.Logger.startActiveSpan("DateOfBirthOnChange__proxy", function(t) {
                t && (t.setAttribute("code.function", "DateOfBirthOnChange"), t.setAttribute("outsystems.function.key", "bcd10c6c-8c21-4efe-804e-79f26d9f707e"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._dateOfBirthOnChange$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        liveChat_OnClick$Action(e) {
            var a = this.controller;
            return o.Logger.startActiveSpan("LiveChat_OnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "LiveChat_OnClick"), t.setAttribute("outsystems.function.key", "bf7a10b8-3643-4514-b32e-a32a5c792481"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._liveChat_OnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onDestroy$Action(e) {
            var a = this.controller;
            return o.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "c232c523-3818-4aa6-8f1d-e5216c3da8a0"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onDestroy$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickDatePicker$Action(e) {
            var a = this.controller;
            return o.Logger.startActiveSpan("OnClickDatePicker__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickDatePicker"), t.setAttribute("outsystems.function.key", "d8103269-934e-47b6-95a8-edaefcbffc1c"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onClickDatePicker$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        lastNameOnChange$Action(e) {
            var a = this.controller;
            return o.Logger.startActiveSpan("LastNameOnChange__proxy", function(t) {
                t && (t.setAttribute("code.function", "LastNameOnChange"), t.setAttribute("outsystems.function.key", "d9a3853d-e918-4107-abc9-5137c5bea6a0"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._lastNameOnChange$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onPersonalDetailsChange$Action() {
            return this.hasOwnProperty("_onPersonalDetailsChange$Action") || (this._onPersonalDetailsChange$Action = function() {
                return Promise.resolve()
            }), this._onPersonalDetailsChange$Action
        }
        set onPersonalDetailsChange$Action(e) {
            this._onPersonalDetailsChange$Action = e
        }
        get nextStep$Action() {
            return this.hasOwnProperty("_nextStep$Action") || (this._nextStep$Action = function() {
                return Promise.resolve()
            }), this._nextStep$Action
        }
        set nextStep$Action(e) {
            this._nextStep$Action = e
        }
        get handleError$Action() {
            return this.hasOwnProperty("_handleError$Action") || (this._handleError$Action = function() {
                return Promise.resolve()
            }), this._handleError$Action
        }
        set handleError$Action(e) {
            this._handleError$Action = e
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
                    i = this.idService;
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var a = this.controller,
                    t = this.model,
                    i = this.idService;
                return a.onDestroy$Action(e)
            }), this._onDestroyEventHandler
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
            return W.defaultTimeout
        }
    };
    c(n, "ControllerInner");
    let u = n;
    R = u, R.registerVariableGroupType("Accounts.ProofOfIdentity.PersonalDetails.FirstNameOnChange$validateFirstNameJSResult", [{
        name: "ErrorMessage",
        attrName: "errorMessageOut",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), R.registerVariableGroupType("Accounts.ProofOfIdentity.PersonalDetails.DatePickerOnSelected$vars", [{
        name: "SelectedDateTime",
        attrName: "selectedDateTimeInLocal",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.DateTime,
        defaultValue: c(function() {
            return o.DataTypes.DateTime.defaultValue
        }, "defaultValue")
    }]), R.registerVariableGroupType("Accounts.ProofOfIdentity.PersonalDetails.OnReady$transformEPOCDateJSResult", [{
        name: "DateString",
        attrName: "dateStringOut",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Date,
        defaultValue: c(function() {
            return o.DataTypes.DateTime.defaultValue
        }, "defaultValue")
    }]), R.registerVariableGroupType("Accounts.ProofOfIdentity.PersonalDetails.DateOfBirthOnChange$dOBValidateJSResult", [{
        name: "ErrorMessage",
        attrName: "errorMessageOut",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), R.registerVariableGroupType("Accounts.ProofOfIdentity.PersonalDetails.LastNameOnChange$validateLastNameJSResult", [{
        name: "ErrorMessage",
        attrName: "errorMessageOut",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var R, Xe = new o.Controller.ControllerFactory(R, Je);
var q = j(Y());
var T = I,
    _e = class _e extends T.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("AlignIconRight", "alignIconRightIn", "AlignIconRight", !0, !1, T.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_alignIconRightInDataFetchStatus", "_alignIconRightInDataFetchStatus", "_alignIconRightInDataFetchStatus", !0, !1, T.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, T.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, T.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(T.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(_e, "VariablesRecord");
var Z = _e;
Z.init();
var be = class be extends T.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c(be, "WidgetsRecord");
var ge = be,
    Ae = class Ae extends T.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Z
        }
        static getWidgetsRecordConstructor() {
            return ge
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(n) {
            "AlignIconRight" in n && (this.variables.alignIconRightIn = n.AlignIconRight, "_alignIconRightInDataFetchStatus" in n && (this.variables._alignIconRightInDataFetchStatus = n._alignIconRightInDataFetchStatus)), "ExtendedClass" in n && (this.variables.extendedClassIn = n.ExtendedClass, "_extendedClassInDataFetchStatus" in n && (this.variables._extendedClassInDataFetchStatus = n._extendedClassInDataFetchStatus))
        }
    };
c(Ae, "Model");
var ee = Ae;
ee._hasValidationWidgetsValue = void 0;
var Ze = new T.Model.ModelFactory(ee);
var et = {};
var tt = I; {
    let n = class n extends tt.Controller.BaseViewController {
        constructor(e, a, t) {
            super(e, a, t, et);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
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
            return D.defaultTimeout
        }
    };
    c(n, "ControllerInner");
    let u = n;
    at = u
}
var at, rt = new tt.Controller.ControllerFactory(at, X);
var dt = I,
    fa = O.PlaceholderContent,
    ma = O.IteratorPlaceholderContent,
    N = class N extends F.BaseWebBlock {
        static get displayName() {
            return "Interaction.InputWithIcon"
        }
        static getAttributes() {
            return {
                codeFunction: "InputWithIcon",
                functionKey: "1190fddf-d5b0-4a2d-8d23-355f086907fd",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
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
            return Ze
        }
        get controllerFactory() {
            return rt
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                v = this.controller,
                e = this.idService,
                a = v.validationService,
                t = this.widgetsRecordProvider,
                i = v.callContext(),
                r = N.ifWidget,
                l = N.textWidget,
                s = N.asPrimitiveValue,
                g = N.getTranslation,
                h = this;
            return q.createElement("div", this.getRootNodeProperties(), q.createElement(_, {
                align: 0,
                animate: !1,
                style: n.getCachedValue(e.getId("InputWithIconWrapper.Style"), function() {
                    return "input-with-icon" + (n.variables.alignIconRightIn ? " input-with-icon-right" : "") + " " + n.variables.extendedClassIn
                }, function() {
                    return n.variables.alignIconRightIn
                }, function() {
                    return n.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    name: "InputWithIconWrapper"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: dt.Model.calculateDataFetchStatus(n.variables._alignIconRightInDataFetchStatus, n.variables._extendedClassInDataFetchStatus)
            }, q.createElement(z, {
                align: 0,
                content: h.props.placeholders.icon,
                style: "input-with-icon-content-icon center ph",
                _idProps: {
                    service: e,
                    name: "Icon"
                },
                _widgetRecordProvider: t
            }), q.createElement(z, {
                align: 0,
                content: h.props.placeholders.input,
                style: "input-with-icon-input",
                _idProps: {
                    service: e,
                    name: "Input"
                },
                _widgetRecordProvider: t
            })))
        }
    };
c(N, "View");
var De = N,
    H = De;
var re = j(Y());
var C = I,
    Oe = class Oe extends C.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", !0, !1, C.DataTypes.DataTypes.Record, function() {
                return C.DataTypes.ImmutableBase.getData(new le)
            }, !1, le), this.attr("DateFormat", "dateFormatIn", "DateFormat", !0, !1, C.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_dateFormatInDataFetchStatus", "_dateFormatInDataFetchStatus", "_dateFormatInDataFetchStatus", !0, !1, C.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ShowTodayButton", "showTodayButtonIn", "ShowTodayButton", !0, !1, C.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_showTodayButtonInDataFetchStatus", "_showTodayButtonInDataFetchStatus", "_showTodayButtonInDataFetchStatus", !0, !1, C.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TimeFormat", "timeFormatIn", "TimeFormat", !0, !1, C.DataTypes.DataTypes.Text, function() {
                return p.datePickerTimeFormat.disabled
            }, !1), this.attr("_timeFormatInDataFetchStatus", "_timeFormatInDataFetchStatus", "_timeFormatInDataFetchStatus", !0, !1, C.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", !0, !1, C.DataTypes.DataTypes.Record, function() {
                return C.DataTypes.ImmutableBase.getData(new M)
            }, !1, M), this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", !0, !1, C.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, C.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, C.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(C.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(Oe, "VariablesRecord");
var te = Oe;
te.init();
var pe = class pe extends C.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c(pe, "WidgetsRecord");
var Se = pe,
    Te = class Te extends C.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return te
        }
        static getWidgetsRecordConstructor() {
            return Se
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(n) {
            "DateFormat" in n && (this.variables.dateFormatIn = n.DateFormat, "_dateFormatInDataFetchStatus" in n && (this.variables._dateFormatInDataFetchStatus = n._dateFormatInDataFetchStatus)), "ShowTodayButton" in n && (this.variables.showTodayButtonIn = n.ShowTodayButton, "_showTodayButtonInDataFetchStatus" in n && (this.variables._showTodayButtonInDataFetchStatus = n._showTodayButtonInDataFetchStatus)), "TimeFormat" in n && (this.variables.timeFormatIn = n.TimeFormat, "_timeFormatInDataFetchStatus" in n && (this.variables._timeFormatInDataFetchStatus = n._timeFormatInDataFetchStatus)), "OptionalConfigs" in n && (this.variables.optionalConfigsIn = n.OptionalConfigs, "_optionalConfigsInDataFetchStatus" in n && (this.variables._optionalConfigsInDataFetchStatus = n._optionalConfigsInDataFetchStatus)), "ExtendedClass" in n && (this.variables.extendedClassIn = n.ExtendedClass, "_extendedClassInDataFetchStatus" in n && (this.variables._extendedClassInDataFetchStatus = n._extendedClassInDataFetchStatus))
        }
    };
c(Te, "Model");
var ae = Te;
ae._hasValidationWidgetsValue = void 0;
var it = new C.Model.ModelFactory(ae);
var ft = {
        "68bAUht9Wk2x7G84V6IC7w#Value": "\u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u0641\u062A\u0627\u062D \u0627\u0644\u0633\u0647\u0645 \u0644\u0644\u0623\u0633\u0641\u0644 \u0644\u0641\u062A\u062D \u0627\u0644\u062A\u0642\u0648\u064A\u0645\u061B \u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u0641\u0627\u062A\u064A\u062D \u0627\u0644\u0623\u0633\u0647\u0645 \u0644\u0644\u062A\u0646\u0642\u0644 \u0641\u064A \u0623\u064A\u0627\u0645 \u0627\u0644\u062A\u0642\u0648\u064A\u0645\u061B \u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u0641\u0627\u062A\u064A\u062D cmd \u0623\u0648 ctrl + \u0627\u0644\u0623\u0633\u0647\u0645 \u0627\u0644\u064A\u0645\u064A\u0646 \u0623\u0648 \u0627\u0644\u064A\u0633\u0627\u0631 \u0644\u0644\u062A\u0646\u0642\u0644 \u0641\u064A \u0627\u0644\u0634\u0647\u0648\u0631\u061B \u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u0641\u0627\u062A\u064A\u062D cmd \u0623\u0648 ctrl + \u0627\u0644\u0623\u0633\u0647\u0645 \u0644\u0644\u0623\u0639\u0644\u0649 \u0623\u0648 \u0644\u0644\u0623\u0633\u0641\u0644 \u0644\u0644\u062A\u0646\u0642\u0644 \u0641\u064A \u0627\u0644\u0633\u0646\u0648\u0627\u062A\u061B"
    },
    mt = {
        "68bAUht9Wk2x7G84V6IC7w#Value": "Verwenden Sie die Pfeiltaste nach unten, um den Kalender zu \xF6ffnen; Verwenden Sie die Pfeiltasten, um durch die Kalendertage zu navigieren; Verwenden Sie die Tasten cmd oder Strg + rechte oder linke Pfeiltasten, um durch die Monate zu navigieren; Verwenden Sie die Tasten cmd oder Strg + Pfeiltasten nach oben oder unten, um durch die Jahre zu navigieren;"
    },
    yt = {
        "68bAUht9Wk2x7G84V6IC7w#Value": "Use arrow down key to open the calendar; Use arrow keys to navigate through calendar days; Use cmd or ctrl + right or left arrow keys to navigate through months; Use cmd or ctrl + up or down arrow keys to navigate through years;"
    },
    vt = {
        "68bAUht9Wk2x7G84V6IC7w#Value": "Usa la tecla de flecha hacia abajo para abrir el calendario; Usa las teclas de flecha para navegar por los d\xEDas del calendario; Usa las teclas cmd o ctrl + flechas derecha o izquierda para navegar por los meses; Usa las teclas cmd o ctrl + flecha arriba o abajo para navegar por los a\xF1os;"
    },
    ht = {
        "68bAUht9Wk2x7G84V6IC7w#Value": "Utilisez la touche de fl\xE8che vers le bas pour ouvrir le calendrier ; Utilisez les touches de fl\xE8che pour naviguer dans les jours du calendrier ; Utilisez les touches cmd ou ctrl + fl\xE8ches droite ou gauche pour naviguer dans les mois ; Utilisez les touches cmd ou ctrl + fl\xE8che vers le haut ou vers le bas pour naviguer dans les ann\xE9es;"
    },
    gt = {
        "68bAUht9Wk2x7G84V6IC7w#Value": "Utilisez la touche fl\xE8che vers le bas pour ouvrir le calendrier ; Utilisez les touches fl\xE8ches pour naviguer dans les jours du calendrier ; Utilisez les touches cmd ou ctrl + fl\xE8ches de droite ou de gauche pour naviguer dans les mois ; Utilisez les touches cmd ou ctrl + fl\xE8che vers le haut ou vers le bas pour naviguer dans les ann\xE9es;"
    },
    _t = {
        "68bAUht9Wk2x7G84V6IC7w#Value": "\u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u0916\u094B\u0932\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0928\u0940\u091A\u0947 \u0935\u093E\u0932\u0940 \u0924\u0940\u0930 \u0915\u0941\u0902\u091C\u0940 \u0926\u092C\u093E\u090F\u0902 ;\u0915\u0948\u0932\u0947\u0902\u0921\u0930 \u0915\u0947 \u092A\u094D\u0930\u0924\u093F\u0926\u093F\u0928\u093E\u0902\u0915 \u0915\u094B  \u0928\u0947\u0935\u093F\u0917\u0947\u091F \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0924\u0940\u0930 \u0915\u0941\u0902\u091C\u093F\u092F\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0947\u0902 ; \u092E\u0939\u0940\u0928\u094B\u0902 \u0915\u094B  \u0928\u0947\u0935\u093F\u0917\u0947\u091F \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F Cmd \u092F\u093E Ctrl + \u0926\u093E\u090F\u0901 \u092F\u093E \u092C\u093E\u090F\u0901 \u0924\u0940\u0930 \u0915\u0941\u0902\u091C\u093F\u092F\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0947\u0902; \u0935\u0930\u094D\u0937\u094B\u0902 \u092E\u0947\u0902 \u0928\u0947\u0935\u093F\u0917\u0947\u091F \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F cmd \u092F\u093E Ctrl + \u090A\u092A\u0930 \u092F\u093E \u0928\u0940\u091A\u0947 \u0924\u0940\u0930 \u0915\u0941\u0902\u091C\u093F\u092F\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0947\u0902;"
    },
    bt = {
        "68bAUht9Wk2x7G84V6IC7w#Value": "Usa il tasto freccia gi\xF9 per aprire il calendario; Usa le frecce per navigare tra i giorni del calendario; Usa i tasti cmd o ctrl + frecce destra o sinistra per navigare tra i mesi; Usa i tasti cmd o ctrl + frecce su o gi\xF9 per navigare tra gli anni;"
    },
    At = {
        "68bAUht9Wk2x7G84V6IC7w#Value": "\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u958B\u304F\u306B\u306F\u4E0B\u77E2\u5370\u30AD\u30FC\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30AB\u30EC\u30F3\u30C0\u30FC\u306E\u65E5\u4ED8\u3092\u79FB\u52D5\u3059\u308B\u306B\u306F\u77E2\u5370\u30AD\u30FC\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u6708\u3092\u79FB\u52D5\u3059\u308B\u306B\u306F cmd \u30AD\u30FC\u307E\u305F\u306F ctrl \u30AD\u30FC + \u53F3\u77E2\u5370\u30AD\u30FC\u307E\u305F\u306F\u5DE6\u77E2\u5370\u30AD\u30FC\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u5E74\u3092\u79FB\u52D5\u3059\u308B\u306B\u306F cmd \u30AD\u30FC\u307E\u305F\u306F ctrl \u30AD\u30FC + \u4E0A\u4E0B\u77E2\u5370\u30AD\u30FC\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
    },
    Dt = {
        "68bAUht9Wk2x7G84V6IC7w#Value": "\uB2EC\uB825\uC744 \uC5F4\uB824\uBA74 \uC544\uB798 \uD654\uC0B4\uD45C \uD0A4\uB97C \uC0AC\uC6A9\uD558\uC138\uC694. \uB2EC\uB825 \uB0A0\uC9DC\uB97C \uD0D0\uC0C9\uD558\uB824\uBA74 \uD654\uC0B4\uD0A4\uB97C \uC0AC\uC6A9\uD558\uC138\uC694. \uC6D4\uC744 \uD0D0\uC0C9\uD558\uB824\uBA74 cmd \uD0A4 \uB610\uB294 ctrl \uD0A4 + \uC624\uB978\uCABD \uB610\uB294 \uC67C\uCABD \uD654\uC0B4\uD45C \uD0A4\uB97C \uC0AC\uC6A9\uD558\uC138\uC694. \uC5F0\uB3C4\uB97C \uD0D0\uC0C9\uD558\uB824\uBA74 cmd \uD0A4 \uB610\uB294 ctrl \uD0A4 + \uC704\uC544\uB798 \uD654\uC0B4\uD45C \uD0A4\uB97C \uC0AC\uC6A9\uD558\uC138\uC694."
    },
    It = {
        "68bAUht9Wk2x7G84V6IC7w#Value": "Gebruik de pijltjestoets omlaag om de kalender te openen; Gebruik de pijltjestoetsen om door de kalenderdagen te navigeren; Gebruik cmd of ctrl + rechter of linker pijltjestoetsen om door de maanden te navigeren; Gebruik cmd of ctrl + omhoog of omlaag pijltjestoetsen om door de jaren te navigeren;"
    },
    Ct = {
        "68bAUht9Wk2x7G84V6IC7w#Value": "Use a tecla de seta para baixo para abrir o calend\xE1rio; Use as teclas de seta para navegar pelos dias do calend\xE1rio; Use as teclas cmd ou ctrl + setas direita ou esquerda para navegar pelos meses; Use as teclas cmd ou ctrl + seta para cima ou para baixo para navegar pelos anos;"
    },
    St = {
        "68bAUht9Wk2x7G84V6IC7w#Value": "Use a tecla de seta para baixo para abrir o calend\xE1rio; Use as teclas de seta para navegar pelos dias do calend\xE1rio; Use as teclas cmd ou ctrl + setas direita ou esquerda para navegar pelos meses; Use as teclas cmd ou ctrl + seta para cima ou para baixo para navegar pelos anos;"
    },
    Ot = {
        "68bAUht9Wk2x7G84V6IC7w#Value": "\u4F7F\u7528\u5411\u4E0B\u7BAD\u5934\u952E\u6253\u5F00\u65E5\u5386\uFF1B\u4F7F\u7528\u7BAD\u5934\u952E\u6D4F\u89C8\u65E5\u5386\u65E5\u671F\uFF1B\u4F7F\u7528 cmd \u952E\u6216 ctrl \u952E + \u53F3\u7BAD\u5934\u952E\u6216\u5DE6\u7BAD\u5934\u952E\u6D4F\u89C8\u6708\u4EFD\uFF1B\u4F7F\u7528 cmd \u952E\u6216 ctrl \u952E + \u5411\u4E0A\u6216\u5411\u4E0B\u7BAD\u5934\u952E\u6D4F\u89C8\u5E74\u4EFD\uFF1B"
    },
    pt = {
        "68bAUht9Wk2x7G84V6IC7w#Value": "\u4F7F\u7528\u5411\u4E0B\u7BAD\u5934\u952E\u6253\u5F00\u65E5\u5386\uFF1B\u4F7F\u7528\u7BAD\u5934\u952E\u6D4F\u89C8\u65E5\u5386\u65E5\u671F\uFF1B\u4F7F\u7528 cmd \u952E\u6216 ctrl \u952E + \u53F3\u7BAD\u5934\u952E\u6216\u5DE6\u7BAD\u5934\u952E\u6D4F\u89C8\u6708\u4EFD\uFF1B\u4F7F\u7528 cmd \u952E\u6216 ctrl \u952E + \u5411\u4E0A\u6216\u5411\u4E0B\u7BAD\u5934\u952E\u6D4F\u89C8\u5E74\u4EFD\uFF1B"
    },
    Tt = {
        "68bAUht9Wk2x7G84V6IC7w#Value": "\u4F7F\u7528\u5411\u4E0B\u7BAD\u982D\u9375\u958B\u555F\u65E5\u66C6\uFF1B\u4F7F\u7528\u7BAD\u982D\u9375\u700F\u89BD\u65E5\u66C6\u65E5\u671F\uFF1B\u4F7F\u7528 cmd \u9375\u6216 ctrl \u9375 + \u53F3\u7BAD\u982D\u9375\u6216\u5DE6\u7BAD\u982D\u9375\u700F\u89BD\u6708\u4EFD\uFF1B\u4F7F\u7528 cmd \u9375\u6216 ctrl \u9375 + \u5411\u4E0A\u6216\u5411\u4E0B\u7BAD\u982D\u9375\u700F\u89BD\u5E74\u4EFD\uFF1B"
    },
    ot = {
        ar: {
            translations: ft,
            isRTL: !0
        },
        "de-DE": {
            translations: mt,
            isRTL: !1
        },
        en: {
            translations: yt,
            isRTL: !1
        },
        es: {
            translations: vt,
            isRTL: !1
        },
        "fr-CA": {
            translations: ht,
            isRTL: !1
        },
        "fr-FR": {
            translations: gt,
            isRTL: !1
        },
        "hi-IN": {
            translations: _t,
            isRTL: !1
        },
        "it-IT": {
            translations: bt,
            isRTL: !1
        },
        "ja-JP": {
            translations: At,
            isRTL: !1
        },
        "ko-KR": {
            translations: Dt,
            isRTL: !1
        },
        nl: {
            translations: It,
            isRTL: !1
        },
        pt: {
            translations: Ct,
            isRTL: !1
        },
        "pt-BR": {
            translations: St,
            isRTL: !1
        },
        "zh-CN": {
            translations: Ot,
            isRTL: !1
        },
        "zh-Hans": {
            translations: pt,
            isRTL: !1
        },
        "zh-Hant": {
            translations: Tt,
            isRTL: !1
        }
    };

function Pe(u, n, v, e) {
    u.OnChange = n.OnChangeDateHandler, u.OnInitialize = n.InitializedHandler
}
c(Pe, "default");
var m = I; {
    let n = class n extends m.Controller.BaseViewController {
        constructor(e, a, t) {
            super(e, a, t, ot);
            var i = this.controller;
            this.clientActionProxies = {
                onChangeDateHandler$Action: c(function(r, l) {
                    return r = r === void 0 ? "" : r, l = l === void 0 ? "" : l, i.executeActionInsideJSNode(i._onChangeDateHandler$Action.bind(i, m.DataConversion.JSNodeParamConverter.from(r, m.DataTypes.DataTypes.Text), m.DataConversion.JSNodeParamConverter.from(l, m.DataTypes.DataTypes.Text)), i.callContext(), function(s) {
                        return {}
                    }, function() {}, "OnChangeDateHandler")
                }, "onChangeDateHandler$Action"),
                initializedHandler$Action: c(function(r) {
                    return r = r === void 0 ? "" : r, i.executeActionInsideJSNode(i._initializedHandler$Action.bind(i, m.DataConversion.JSNodeParamConverter.from(r, m.DataTypes.DataTypes.Text)), i.callContext(), function(l) {
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
                var a = this.model,
                    t = this.controller,
                    i = this.idService;
                return m.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "282ed5cb-1998-4ea9-9dfb-3eebc3e7ca43"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var l = new m.DataTypes.VariableHolder,
                            s = new m.DataTypes.VariableHolder(new m.DataTypes.JSONSerializeOutputType);
                        D.logEvent$Action(p.logType.general, "Going to create DatePicker", e), l.value = D.generateUniqueId$Action(a.variables.internal_ConfigsVar.uniqueIdAttr, e), D.setServerDateFormat$Action(e), D.setLocalLanguage$Action(e), a.variables.internal_ConfigsVar.uniqueIdAttr = l.value.unique_IDOut, a.variables.internal_ConfigsVar.dateFormatAttr = a.variables.dateFormatIn, a.variables.internal_ConfigsVar.initialDateAttr = a.variables.optionalConfigsIn.initialDateAttr, a.variables.internal_ConfigsVar.timeFormatAttr = a.variables.timeFormatIn, a.variables.internal_ConfigsVar.showTodayButtonAttr = a.variables.showTodayButtonIn, a.variables.internal_ConfigsVar.firstWeekDayAttr = a.variables.optionalConfigsIn.firstWeekDayAttr, a.variables.internal_ConfigsVar.minDateAttr = a.variables.optionalConfigsIn.minDateAttr, a.variables.internal_ConfigsVar.maxDateAttr = a.variables.optionalConfigsIn.maxDateAttr, a.variables.internal_ConfigsVar.showWeekNumbersAttr = a.variables.optionalConfigsIn.showWeekNumbersAttr, a.variables.internal_ConfigsVar.extendedClassAttr = a.variables.extendedClassIn, a.variables.timeFormatIn === p.datePickerTimeFormat.disabled && (a.variables.internal_ConfigsVar.initialDateAttr = m.BuiltinFunctions.dateTimeToDate(a.variables.optionalConfigsIn.initialDateAttr), a.variables.internal_ConfigsVar.minDateAttr = m.BuiltinFunctions.dateTimeToDate(a.variables.optionalConfigsIn.minDateAttr), a.variables.internal_ConfigsVar.maxDateAttr = m.BuiltinFunctions.dateTimeToDate(a.variables.optionalConfigsIn.maxDateAttr)), s.value.jSONOut = m.JSONUtils.serializeToJSON(a.variables.internal_ConfigsVar, !0, !1), D.datePickerCreate$Action(a.variables.internal_ConfigsVar.uniqueIdAttr, s.value.jSONOut, p.datePickerCalendarType.single, p.datePickerProvider.flatpickr, e), t._registerCallbacks$Action(e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    i = this.idService;
                return m.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "509766f4-8b13-470f-a252-1a6e8cc4e085"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), D.datePickerInitialize$Action(a.variables.internal_ConfigsVar.uniqueIdAttr, e), D.logEvent$Action(p.logType.general, "DatePicker created", e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    i = this.idService;
                return m.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "65299253-a347-4e02-8f7f-b50ec5fa92dc"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), D.datePickerDestroy$Action(a.variables.internal_ConfigsVar.uniqueIdAttr, e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    i = this.idService;
                return m.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "71acdb81-17dd-4977-a11a-b17b0aca3920"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), a.variables.optionalConfigsIn.initialDateAttr.equals(a.variables.internal_ConfigsVar.initialDateAttr) || (a.variables.internal_ConfigsVar.initialDateAttr = a.variables.optionalConfigsIn.initialDateAttr, D.datePickerChangeDateTimeProperty$Action(a.variables.internal_ConfigsVar.uniqueIdAttr, "InitialDate", a.variables.internal_ConfigsVar.initialDateAttr, e)), a.variables.optionalConfigsIn.minDateAttr.equals(a.variables.internal_ConfigsVar.minDateAttr) || (a.variables.internal_ConfigsVar.minDateAttr = a.variables.optionalConfigsIn.minDateAttr, D.datePickerChangeDateTimeProperty$Action(a.variables.internal_ConfigsVar.uniqueIdAttr, "MinDate", a.variables.internal_ConfigsVar.minDateAttr, e)), a.variables.optionalConfigsIn.maxDateAttr.equals(a.variables.internal_ConfigsVar.maxDateAttr) || (a.variables.internal_ConfigsVar.maxDateAttr = a.variables.optionalConfigsIn.maxDateAttr, D.datePickerChangeDateTimeProperty$Action(a.variables.internal_ConfigsVar.uniqueIdAttr, "MaxDate", a.variables.internal_ConfigsVar.maxDateAttr, e)), a.variables.dateFormatIn !== a.variables.internal_ConfigsVar.dateFormatAttr && (a.variables.internal_ConfigsVar.dateFormatAttr = a.variables.dateFormatIn, D.datePickerChangeTextProperty$Action(a.variables.internal_ConfigsVar.uniqueIdAttr, "DateFormat", a.variables.internal_ConfigsVar.dateFormatAttr, e)), a.variables.timeFormatIn !== a.variables.internal_ConfigsVar.timeFormatAttr && (a.variables.internal_ConfigsVar.timeFormatAttr = a.variables.timeFormatIn, D.datePickerChangeTextProperty$Action(a.variables.internal_ConfigsVar.uniqueIdAttr, "TimeFormat", a.variables.internal_ConfigsVar.timeFormatAttr, e)), a.variables.showTodayButtonIn !== a.variables.internal_ConfigsVar.showTodayButtonAttr && (a.variables.internal_ConfigsVar.showTodayButtonAttr = a.variables.showTodayButtonIn, D.datePickerChangeBooleanProperty$Action(a.variables.internal_ConfigsVar.uniqueIdAttr, "ShowTodayButton", a.variables.internal_ConfigsVar.showTodayButtonAttr, e)), a.variables.optionalConfigsIn.firstWeekDayAttr !== a.variables.internal_ConfigsVar.firstWeekDayAttr && (a.variables.internal_ConfigsVar.firstWeekDayAttr = a.variables.optionalConfigsIn.firstWeekDayAttr, D.datePickerChangeIntegerProperty$Action(a.variables.internal_ConfigsVar.uniqueIdAttr, "FirstWeekDay", m.BuiltinFunctions.integerToLongInteger(a.variables.internal_ConfigsVar.firstWeekDayAttr), e)), a.variables.optionalConfigsIn.showWeekNumbersAttr !== a.variables.internal_ConfigsVar.showWeekNumbersAttr && (a.variables.internal_ConfigsVar.showWeekNumbersAttr = a.variables.optionalConfigsIn.showWeekNumbersAttr, D.datePickerChangeBooleanProperty$Action(a.variables.internal_ConfigsVar.uniqueIdAttr, "ShowWeekNumbers", a.variables.internal_ConfigsVar.showWeekNumbersAttr, e)), a.variables.extendedClassIn !== a.variables.internal_ConfigsVar.extendedClassAttr && (a.variables.internal_ConfigsVar.extendedClassAttr = a.variables.extendedClassIn, D.datePickerChangeTextProperty$Action(a.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", a.variables.internal_ConfigsVar.extendedClassAttr, e))
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(e, a) {
                var t = this.model,
                    i = this.controller,
                    r = this.idService;
                return m.Logger.startActiveSpan("InitializedHandler", function(l) {
                    return l && (l.setAttribute("code.function", "InitializedHandler"), l.setAttribute("outsystems.function.key", "84a573e6-39ed-44fb-b867-927d30247b00"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                        i.ensureControllerAlive("InitializedHandler"), a = i.callContext(a);
                        var s = new m.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("OutSystemsUI.Interaction.DatePicker.InitializedHandler$vars")));
                        return s.value.datepickerIdInLocal = e, m.Flow.executeAsyncFlow(function() {
                            return i.initialized$Action(s.value.datepickerIdInLocal, a)
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
        get _onRender$Action() {
            return this.hasOwnProperty("__onRender$Action") || (this.__onRender$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    i = this.idService;
                return m.Logger.startActiveSpan("OnRender", function(r) {
                    r && (r.setAttribute("code.function", "OnRender"), r.setAttribute("outsystems.function.key", "c6c1b635-84ee-446f-a29e-394e452b2937"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnRender"), e = t.callContext(e), D.datePickerOnRender$Action(a.variables.internal_ConfigsVar.uniqueIdAttr, e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onRender$Action
        }
        set _onRender$Action(e) {
            this.__onRender$Action = e
        }
        get _onChangeDateHandler$Action() {
            return this.hasOwnProperty("__onChangeDateHandler$Action") || (this.__onChangeDateHandler$Action = function(e, a, t) {
                var i = this.model,
                    r = this.controller,
                    l = this.idService;
                return m.Logger.startActiveSpan("OnChangeDateHandler", function(s) {
                    return s && (s.setAttribute("code.function", "OnChangeDateHandler"), s.setAttribute("outsystems.function.key", "ebbac88b-1a19-43db-a66d-612813380efe"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnChangeDateHandler"), t = r.callContext(t);
                        var g = new m.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("OutSystemsUI.Interaction.DatePicker.OnChangeDateHandler$vars")));
                        return g.value.datepickerIdInLocal = e, g.value.selectedDateInLocal = a, m.Flow.executeAsyncFlow(function() {
                            return r.onSelected$Action(g.value.datepickerIdInLocal, m.BuiltinFunctions.textToDateTime(g.value.selectedDateInLocal), t)
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__onChangeDateHandler$Action
        }
        set _onChangeDateHandler$Action(e) {
            this.__onChangeDateHandler$Action = e
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    i = this.idService;
                return m.Logger.startActiveSpan("RegisterCallbacks", function(r) {
                    r && (r.setAttribute("code.function", "RegisterCallbacks"), r.setAttribute("outsystems.function.key", "fef1b6c3-ea51-46c3-a116-0f43c5f6d730"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RegisterCallbacks"), e = t.callContext(e);
                        var l = new m.DataTypes.VariableHolder;
                        l.value = m.Logger.startActiveSpan("GetCallbackHandlers", function(s) {
                            s && (s.setAttribute("code.function", "GetCallbackHandlers"), s.setAttribute("outsystems.function.key", "7adc8c68-c78b-47da-9055-ec889687ad27"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Pe, "GetCallbackHandlers", "RegisterCallbacks", {
                                    OnChange: m.DataConversion.JSNodeParamConverter.to(null, m.DataTypes.DataTypes.Object),
                                    OnInitialize: m.DataConversion.JSNodeParamConverter.to(null, m.DataTypes.DataTypes.Object)
                                }, function(g) {
                                    var h = new(t.constructor.getVariableGroupType("OutSystemsUI.Interaction.DatePicker.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return h.onChangeOut = m.DataConversion.JSNodeParamConverter.from(g.OnChange, m.DataTypes.DataTypes.Object), h.onInitializeOut = m.DataConversion.JSNodeParamConverter.from(g.OnInitialize, m.DataTypes.DataTypes.Object), h
                                }, {
                                    OnChangeDateHandler: t.clientActionProxies.onChangeDateHandler$Action,
                                    InitializedHandler: t.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), D.datePickerRegisterCallback$Action(a.variables.internal_ConfigsVar.uniqueIdAttr, p.registeredCallbackEvents.onChange, l.value.onChangeOut, e), D.datePickerRegisterCallback$Action(a.variables.internal_ConfigsVar.uniqueIdAttr, p.registeredCallbackEvents.initialized, l.value.onInitializeOut, e)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(e) {
            this.__registerCallbacks$Action = e
        }
        onInitialize$Action(e) {
            var a = this.controller;
            return m.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "282ed5cb-1998-4ea9-9dfb-3eebc3e7ca43"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var a = this.controller;
            return m.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "509766f4-8b13-470f-a252-1a6e8cc4e085"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onDestroy$Action(e) {
            var a = this.controller;
            return m.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "65299253-a347-4e02-8f7f-b50ec5fa92dc"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var a = this.controller;
            return m.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "71acdb81-17dd-4977-a11a-b17b0aca3920"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        initializedHandler$Action(e, a) {
            var t = this.controller;
            return m.Logger.startActiveSpan("InitializedHandler__proxy", function(i) {
                return i && (i.setAttribute("code.function", "InitializedHandler"), i.setAttribute("outsystems.function.key", "84a573e6-39ed-44fb-b867-927d30247b00"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._initializedHandler$Action, a, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        onRender$Action(e) {
            var a = this.controller;
            return m.Logger.startActiveSpan("OnRender__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnRender"), t.setAttribute("outsystems.function.key", "c6c1b635-84ee-446f-a29e-394e452b2937"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onRender$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onChangeDateHandler$Action(e, a, t) {
            var i = this.controller;
            return m.Logger.startActiveSpan("OnChangeDateHandler__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnChangeDateHandler"), r.setAttribute("outsystems.function.key", "ebbac88b-1a19-43db-a66d-612813380efe"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onChangeDateHandler$Action, t, e, a)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        registerCallbacks$Action(e) {
            var a = this.controller;
            return m.Logger.startActiveSpan("RegisterCallbacks__proxy", function(t) {
                t && (t.setAttribute("code.function", "RegisterCallbacks"), t.setAttribute("outsystems.function.key", "fef1b6c3-ea51-46c3-a116-0f43c5f6d730"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._registerCallbacks$Action, e)
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
        get onSelected$Action() {
            return this.hasOwnProperty("_onSelected$Action") || (this._onSelected$Action = function() {
                return Promise.resolve()
            }), this._onSelected$Action
        }
        set onSelected$Action(e) {
            this._onSelected$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var a = this.controller,
                    t = this.model,
                    i = this.idService;
                return a.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var a = this.controller,
                    t = this.model,
                    i = this.idService;
                return a.onReady$Action(e)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = function(e) {
                var a = this.controller,
                    t = this.model,
                    i = this.idService;
                return a.onRender$Action(e)
            }), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var a = this.controller,
                    t = this.model,
                    i = this.idService;
                return a.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var a = this.controller,
                    t = this.model,
                    i = this.idService;
                return a.onParametersChanged$Action(e)
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
            return D.defaultTimeout
        }
    };
    c(n, "ControllerInner");
    let u = n;
    G = u, G.registerVariableGroupType("OutSystemsUI.Interaction.DatePicker.InitializedHandler$vars", [{
        name: "DatepickerId",
        attrName: "datepickerIdInLocal",
        mandatory: !1,
        dataType: m.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), G.registerVariableGroupType("OutSystemsUI.Interaction.DatePicker.OnChangeDateHandler$vars", [{
        name: "DatepickerId",
        attrName: "datepickerIdInLocal",
        mandatory: !0,
        dataType: m.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "SelectedDate",
        attrName: "selectedDateInLocal",
        mandatory: !0,
        dataType: m.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), G.registerVariableGroupType("OutSystemsUI.Interaction.DatePicker.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "OnChange",
        attrName: "onChangeOut",
        mandatory: !0,
        dataType: m.DataTypes.DataTypes.Object,
        defaultValue: c(function() {
            return null
        }, "defaultValue")
    }, {
        name: "OnInitialize",
        attrName: "onInitializeOut",
        mandatory: !0,
        dataType: m.DataTypes.DataTypes.Object,
        defaultValue: c(function() {
            return null
        }, "defaultValue")
    }])
}
var G, st = new m.Controller.ControllerFactory(G, X);
var wa = O.PlaceholderContent,
    Ra = O.IteratorPlaceholderContent,
    k = class k extends F.BaseWebBlock {
        static get displayName() {
            return "Interaction.DatePicker"
        }
        static getAttributes() {
            return {
                codeFunction: "DatePicker",
                functionKey: "21cf54a0-37ac-4322-adf9-0b8ddc77d237",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return ["scripts/OutSystemsUI.UserScripts.Flatpickr.js", "scripts/OutSystemsUI.UserScripts.FlatpickrLocale.js", "scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return it
        }
        get controllerFactory() {
            return st
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                v = this.controller,
                e = this.idService,
                a = v.validationService,
                t = this.widgetsRecordProvider,
                i = v.callContext(),
                r = k.ifWidget,
                l = k.textWidget,
                s = k.asPrimitiveValue,
                g = k.getTranslation,
                h = this;
            return re.createElement("div", this.getRootNodeProperties(), re.createElement(z, {
                align: 0,
                content: h.props.placeholders.datepicker,
                extendedProperties: {
                    name: n.variables.internal_ConfigsVar.uniqueIdAttr
                },
                style: "osui-datepicker",
                _idProps: {
                    service: e,
                    name: "Datepicker"
                },
                _widgetRecordProvider: t
            }), re.createElement(_, {
                align: 0,
                animate: !1,
                style: "osui-datepicker-a11y wcag-hide-text",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "DatepickerAccessibilityInfo"
                },
                _widgetRecordProvider: t
            }, l(g("68bAUht9Wk2x7G84V6IC7w#Value", "Use arrow down key to open the calendar; Use arrow keys to navigate through calendar days; Use cmd or ctrl + right or left arrow keys to navigate through months; Use cmd or ctrl + up or down arrow keys to navigate through years;"))), r(!0, !1, this, function() {
                return []
            }, function() {
                return []
            }))
        }
    };
c(k, "View");
var Fe = k,
    Ee = Fe;
var E = j(Y());
var A = I,
    Re = class Re extends A.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("DateValue", "dateValueVar", "DateValue", !0, !1, A.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("InputDate", "inputDateIn", "InputDate", !0, !1, A.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_inputDateInDataFetchStatus", "_inputDateInDataFetchStatus", "_inputDateInDataFetchStatus", !0, !1, A.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("MinDate", "minDateIn", "MinDate", !0, !1, A.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_minDateInDataFetchStatus", "_minDateInDataFetchStatus", "_minDateInDataFetchStatus", !0, !1, A.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("MaxDate", "maxDateIn", "MaxDate", !0, !1, A.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_maxDateInDataFetchStatus", "_maxDateInDataFetchStatus", "_maxDateInDataFetchStatus", !0, !1, A.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DateFormat", "dateFormatIn", "DateFormat", !0, !1, A.DataTypes.DataTypes.Text, function() {
                return "yyyy-MM-dd"
            }, !1), this.attr("_dateFormatInDataFetchStatus", "_dateFormatInDataFetchStatus", "_dateFormatInDataFetchStatus", !0, !1, A.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ErrorMessage", "errorMessageIn", "ErrorMessage", !0, !1, A.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", !0, !1, A.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Label", "labelIn", "Label", !0, !1, A.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_labelInDataFetchStatus", "_labelInDataFetchStatus", "_labelInDataFetchStatus", !0, !1, A.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Enabled", "enabledIn", "Enabled", !0, !1, A.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_enabledInDataFetchStatus", "_enabledInDataFetchStatus", "_enabledInDataFetchStatus", !0, !1, A.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Required", "requiredIn", "Required", !0, !1, A.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_requiredInDataFetchStatus", "_requiredInDataFetchStatus", "_requiredInDataFetchStatus", !0, !1, A.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Placeholder", "placeholderIn", "Placeholder", !0, !1, A.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_placeholderInDataFetchStatus", "_placeholderInDataFetchStatus", "_placeholderInDataFetchStatus", !0, !1, A.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsMobile", "isMobileIn", "IsMobile", !0, !1, A.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isMobileInDataFetchStatus", "_isMobileInDataFetchStatus", "_isMobileInDataFetchStatus", !0, !1, A.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(A.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(Re, "VariablesRecord");
var ne = Re;
ne.init();
var Ne = class Ne extends A.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            DateField: A.Model.ValidationWidgetRecord
        }
    }
};
c(Ne, "WidgetsRecord");
var we = Ne,
    ke = class ke extends A.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return ne
        }
        static getWidgetsRecordConstructor() {
            return we
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(n) {
            "InputDate" in n && (this.variables.inputDateIn = n.InputDate, "_inputDateInDataFetchStatus" in n && (this.variables._inputDateInDataFetchStatus = n._inputDateInDataFetchStatus)), "MinDate" in n && (this.variables.minDateIn = n.MinDate, "_minDateInDataFetchStatus" in n && (this.variables._minDateInDataFetchStatus = n._minDateInDataFetchStatus)), "MaxDate" in n && (this.variables.maxDateIn = n.MaxDate, "_maxDateInDataFetchStatus" in n && (this.variables._maxDateInDataFetchStatus = n._maxDateInDataFetchStatus)), "DateFormat" in n && (this.variables.dateFormatIn = n.DateFormat, "_dateFormatInDataFetchStatus" in n && (this.variables._dateFormatInDataFetchStatus = n._dateFormatInDataFetchStatus)), "ErrorMessage" in n && (this.variables.errorMessageIn = n.ErrorMessage, "_errorMessageInDataFetchStatus" in n && (this.variables._errorMessageInDataFetchStatus = n._errorMessageInDataFetchStatus)), "Label" in n && (this.variables.labelIn = n.Label, "_labelInDataFetchStatus" in n && (this.variables._labelInDataFetchStatus = n._labelInDataFetchStatus)), "Enabled" in n && (this.variables.enabledIn = n.Enabled, "_enabledInDataFetchStatus" in n && (this.variables._enabledInDataFetchStatus = n._enabledInDataFetchStatus)), "Required" in n && (this.variables.requiredIn = n.Required, "_requiredInDataFetchStatus" in n && (this.variables._requiredInDataFetchStatus = n._requiredInDataFetchStatus)), "Placeholder" in n && (this.variables.placeholderIn = n.Placeholder, "_placeholderInDataFetchStatus" in n && (this.variables._placeholderInDataFetchStatus = n._placeholderInDataFetchStatus)), "IsMobile" in n && (this.variables.isMobileIn = n.IsMobile, "_isMobileInDataFetchStatus" in n && (this.variables._isMobileInDataFetchStatus = n._isMobileInDataFetchStatus))
        }
    };
c(ke, "Model");
var ie = ke;
ie._hasValidationWidgetsValue = void 0;
var lt = new A.Model.ModelFactory(ie);

function xe(u, n, v, e) {
    console.log("event emitted: ", u.Eventinput)
}
c(xe, "default");

function $e(u, n, v, e) {
    let a = new Date(0).getTime();
    new Date(u.InputDate).getTime() <= a ? u.OutputDate = "" : u.OutputDate = u.InputDate
}
c($e, "default");

function Ve(u, n, v, e) {
    var l, s;
    let a = {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear",
            dateFormat: "mm/dd/yyyy",
            timeFormat: "hh:ii aa",
            firstDay: 0
        },
        t = u.IsMobile ? {
            isMobile: !0,
            autoClose: !0,
            keyboardNav: !1
        } : {},
        i = Be({
            dateFormat: u.DateFormat,
            locale: a,
            minDate: (l = u.MinDate) != null ? l : "",
            maxDate: (s = u.MaxDate) != null ? s : "",
            selectedDates: [u.InputDate],
            onSelect: c(({
                date: g,
                datepicker: h
            }) => {
                var f;
                if (g) n.SetDate(g);
                else {
                    let P = (f = h.focusDate) != null ? f : u.InputDate;
                    h.selectDate(P, {
                        silent: !0
                    }), h.setViewDate(P)
                }
            }, "onSelect")
        }, t),
        r = new AirDatepicker(".date-field", i);
    window.datePickerAPI = r
}
c(Ve, "default");

function Le(u, n, v) {
    window.datePickerAPI && delete window.datePickerAPI
}
c(Le, "default");

function Ue(u, n, v) {
    window.datePickerAPI.show()
}
c(Ue, "default");
var d = I; {
    let n = class n extends d.Controller.BaseViewController {
        constructor(e, a, t) {
            super(e, a, t);
            var i = this.controller;
            this.clientActionProxies = {
                setDate$Action: c(function(r) {
                    return r = r === void 0 ? d.DataTypes.DateTime.defaultValue : r, i.executeActionInsideJSNode(i._setDate$Action.bind(i, d.DataConversion.JSNodeParamConverter.from(r, d.DataTypes.DataTypes.Date)), i.callContext(), function(l) {
                        return {}
                    }, function() {}, "SetDate")
                }, "setDate$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    i = this.idService;
                return d.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "7e9ff121-2f14-4343-aa4d-d610c1759f0d"), r.setAttribute("outsystems.function.owner.name", "UIKit"), r.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), a.widgets.get(i.getId("DateField")).validAttr = a.variables.errorMessageIn === d.BuiltinFunctions.nullTextIdentifier(), a.widgets.get(i.getId("DateField")).validationMessageAttr = a.variables.errorMessageIn
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _setDate$Action() {
            return this.hasOwnProperty("__setDate$Action") || (this.__setDate$Action = function(e, a) {
                var t = this.model,
                    i = this.controller,
                    r = this.idService;
                return d.Logger.startActiveSpan("SetDate", function(l) {
                    return l && (l.setAttribute("code.function", "SetDate"), l.setAttribute("outsystems.function.key", "a476f426-4e58-4f1e-bb17-e51b6791acc4"), l.setAttribute("outsystems.function.owner.name", "UIKit"), l.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        i.ensureControllerAlive("SetDate"), a = i.callContext(a);
                        var s = new d.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("UIKit.Components.DateInput.SetDate$vars")));
                        return s.value.dateInLocal = e, d.Flow.executeAsyncFlow(function() {
                            return d.Logger.startActiveSpan("Logger", function(g) {
                                g && (g.setAttribute("code.function", "Logger"), g.setAttribute("outsystems.function.key", "b2b564d9-4fce-4ad1-bb86-652de44af078"), g.setAttribute("outsystems.function.owner.name", "UIKit"), g.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), g.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return i.safeExecuteJSNode(xe, "Logger", "SetDate", {
                                        Eventinput: d.DataConversion.JSNodeParamConverter.to(d.BuiltinFunctions.dateToText(s.value.dateInLocal), d.DataTypes.DataTypes.Text)
                                    }, function(h) {}, {}, {})
                                } finally {
                                    g && g.end()
                                }
                            }, 1), i.emitDate$Action(s.value.dateInLocal, a)
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__setDate$Action
        }
        set _setDate$Action(e) {
            this.__setDate$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    i = this.idService;
                return d.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "aee77405-2ac3-4930-b4f5-1782fa506925"), r.setAttribute("outsystems.function.owner.name", "UIKit"), r.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var l = new d.DataTypes.VariableHolder;
                        return d.Flow.executeAsyncFlow(function() {
                            return t._loadDependnecy$Action(e).then(function() {
                                l.value = d.Logger.startActiveSpan("SetInitialDate", function(s) {
                                    s && (s.setAttribute("code.function", "SetInitialDate"), s.setAttribute("outsystems.function.key", "5506fc68-f92c-42f5-b823-84d2b66765e2"), s.setAttribute("outsystems.function.owner.name", "UIKit"), s.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode($e, "SetInitialDate", "OnReady", {
                                            InputDate: d.DataConversion.JSNodeParamConverter.to(a.variables.inputDateIn, d.DataTypes.DataTypes.Text),
                                            OutputDate: d.DataConversion.JSNodeParamConverter.to("", d.DataTypes.DataTypes.Text)
                                        }, function(g) {
                                            var h = new(t.constructor.getVariableGroupType("UIKit.Components.DateInput.OnReady$setInitialDateJSResult"));
                                            return h.outputDateOut = d.DataConversion.JSNodeParamConverter.from(g.OutputDate, d.DataTypes.DataTypes.Text), h
                                        }, {}, {})
                                    } finally {
                                        s && s.end()
                                    }
                                }, 1), a.variables.dateValueVar = l.value.outputDateOut, d.Logger.startActiveSpan("InitAirDatePickr", function(s) {
                                    s && (s.setAttribute("code.function", "InitAirDatePickr"), s.setAttribute("outsystems.function.key", "c22275db-ff56-46cc-a976-3ce5038b4b6a"), s.setAttribute("outsystems.function.owner.name", "UIKit"), s.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(Ve, "InitAirDatePickr", "OnReady", {
                                            MinDate: d.DataConversion.JSNodeParamConverter.to(a.variables.minDateIn, d.DataTypes.DataTypes.Text),
                                            IsMobile: d.DataConversion.JSNodeParamConverter.to(a.variables.isMobileIn, d.DataTypes.DataTypes.Boolean),
                                            DateFormat: d.DataConversion.JSNodeParamConverter.to(a.variables.dateFormatIn, d.DataTypes.DataTypes.Text),
                                            MaxDate: d.DataConversion.JSNodeParamConverter.to(a.variables.maxDateIn, d.DataTypes.DataTypes.Text),
                                            InputDate: d.DataConversion.JSNodeParamConverter.to(a.variables.dateValueVar, d.DataTypes.DataTypes.Text)
                                        }, function(g) {}, {
                                            SetDate: t.clientActionProxies.setDate$Action
                                        }, {})
                                    } finally {
                                        s && s.end()
                                    }
                                }, 1)
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _loadDependnecy$Action() {
            return this.hasOwnProperty("__loadDependnecy$Action") || (this.__loadDependnecy$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    i = this.idService;
                return d.Logger.startActiveSpan("LoadDependnecy", function(r) {
                    return r && (r.setAttribute("code.function", "LoadDependnecy"), r.setAttribute("outsystems.function.key", "c7b40f4e-8054-4009-bc73-398597f93c02"), r.setAttribute("outsystems.function.owner.name", "UIKit"), r.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("LoadDependnecy"), e = t.callContext(e), d.Flow.executeAsyncFlow(function() {
                            return a.flush(), d.SystemActions.requireScript("https://cdn.jsdelivr.net/npm/air-datepicker@3.5.3/air-datepicker.min.js", e).then(function() {
                                ue.linkResources$Action("https://cdn.jsdelivr.net/npm/air-datepicker@3.5.3/air-datepicker.min.css", "stylesheet", "text/css", e)
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__loadDependnecy$Action
        }
        set _loadDependnecy$Action(e) {
            this.__loadDependnecy$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    i = this.idService;
                return d.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "d0313581-3686-4f39-82a3-18b815fabb6f"), r.setAttribute("outsystems.function.owner.name", "UIKit"), r.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), d.Logger.startActiveSpan("ClearDatePickerConfig", function(l) {
                            l && (l.setAttribute("code.function", "ClearDatePickerConfig"), l.setAttribute("outsystems.function.key", "1ddc49c5-fd4d-4e37-8a06-152562e93246"), l.setAttribute("outsystems.function.owner.name", "UIKit"), l.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Le, "ClearDatePickerConfig", "OnDestroy", null, function(s) {}, {}, {})
                            } finally {
                                l && l.end()
                            }
                        }, 1)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _openCalendar$Action() {
            return this.hasOwnProperty("__openCalendar$Action") || (this.__openCalendar$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    i = this.idService;
                return d.Logger.startActiveSpan("openCalendar", function(r) {
                    r && (r.setAttribute("code.function", "openCalendar"), r.setAttribute("outsystems.function.key", "ec719837-feb3-4e19-a013-4e5500ab49f3"), r.setAttribute("outsystems.function.owner.name", "UIKit"), r.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("openCalendar"), e = t.callContext(e), d.Logger.startActiveSpan("ShowCalendar", function(l) {
                            l && (l.setAttribute("code.function", "ShowCalendar"), l.setAttribute("outsystems.function.key", "b2c5bfd2-b264-4a7b-a5e7-cf697b0c64d5"), l.setAttribute("outsystems.function.owner.name", "UIKit"), l.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Ue, "ShowCalendar", "openCalendar", null, function(s) {}, {}, {})
                            } finally {
                                l && l.end()
                            }
                        }, 1)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__openCalendar$Action
        }
        set _openCalendar$Action(e) {
            this.__openCalendar$Action = e
        }
        onParametersChanged$Action(e) {
            var a = this.controller;
            return d.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "7e9ff121-2f14-4343-aa4d-d610c1759f0d"), t.setAttribute("outsystems.function.owner.name", "UIKit"), t.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        setDate$Action(e, a) {
            var t = this.controller;
            return d.Logger.startActiveSpan("SetDate__proxy", function(i) {
                return i && (i.setAttribute("code.function", "SetDate"), i.setAttribute("outsystems.function.key", "a476f426-4e58-4f1e-bb17-e51b6791acc4"), i.setAttribute("outsystems.function.owner.name", "UIKit"), i.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._setDate$Action, a, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var a = this.controller;
            return d.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "aee77405-2ac3-4930-b4f5-1782fa506925"), t.setAttribute("outsystems.function.owner.name", "UIKit"), t.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        loadDependnecy$Action(e) {
            var a = this.controller;
            return d.Logger.startActiveSpan("LoadDependnecy__proxy", function(t) {
                return t && (t.setAttribute("code.function", "LoadDependnecy"), t.setAttribute("outsystems.function.key", "c7b40f4e-8054-4009-bc73-398597f93c02"), t.setAttribute("outsystems.function.owner.name", "UIKit"), t.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._loadDependnecy$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var a = this.controller;
            return d.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "d0313581-3686-4f39-82a3-18b815fabb6f"), t.setAttribute("outsystems.function.owner.name", "UIKit"), t.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        openCalendar$Action(e) {
            var a = this.controller;
            return d.Logger.startActiveSpan("openCalendar__proxy", function(t) {
                t && (t.setAttribute("code.function", "openCalendar"), t.setAttribute("outsystems.function.key", "ec719837-feb3-4e19-a013-4e5500ab49f3"), t.setAttribute("outsystems.function.owner.name", "UIKit"), t.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._openCalendar$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get emitDate$Action() {
            return this.hasOwnProperty("_emitDate$Action") || (this._emitDate$Action = function() {
                return Promise.resolve()
            }), this._emitDate$Action
        }
        set emitDate$Action(e) {
            this._emitDate$Action = e
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
                    i = this.idService;
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var a = this.controller,
                    t = this.model,
                    i = this.idService;
                return a.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var a = this.controller,
                    t = this.model,
                    i = this.idService;
                return a.onParametersChanged$Action(e)
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
            return ue.defaultTimeout
        }
    };
    c(n, "ControllerInner");
    let u = n;
    oe = u, oe.registerVariableGroupType("UIKit.Components.DateInput.SetDate$vars", [{
        name: "Date",
        attrName: "dateInLocal",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Date,
        defaultValue: c(function() {
            return d.DataTypes.DateTime.defaultValue
        }, "defaultValue")
    }]), oe.registerVariableGroupType("UIKit.Components.DateInput.OnReady$setInitialDateJSResult", [{
        name: "OutputDate",
        attrName: "outputDateOut",
        mandatory: !0,
        dataType: d.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var oe, ct = new d.Controller.ControllerFactory(oe, je);
var x = I,
    ut = O.PlaceholderContent,
    ur = O.IteratorPlaceholderContent,
    $ = class $ extends F.BaseWebBlock {
        static get displayName() {
            return "Components.DateInput"
        }
        static getAttributes() {
            return {
                codeFunction: "DateInput",
                functionKey: "dd79c213-8949-4a6c-b6c0-b521b6509de8",
                functionOwnerName: "UIKit",
                functionOwnerKey: "895880e5-5422-4df6-a1a2-263897502224",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/UIKit.Components.DateInput.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [H]
        }
        get modelFactory() {
            return lt
        }
        get controllerFactory() {
            return ct
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                v = this.controller,
                e = this.idService,
                a = v.validationService,
                t = this.widgetsRecordProvider,
                i = v.callContext(),
                r = $.ifWidget,
                l = $.textWidget,
                s = $.asPrimitiveValue,
                g = $.getTranslation,
                h = this;
            return E.createElement("div", this.getRootNodeProperties(), E.createElement(_, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, E.createElement(U, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                mandatory: n.variables.requiredIn,
                targetWidget: "DateField",
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t,
                mandatory_dataFetchStatus: x.Model.calculateDataFetchStatus(n.variables._requiredInDataFetchStatus)
            }, E.createElement(B, {
                value: n.variables.labelIn,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: x.Model.calculateDataFetchStatus(n.variables._labelInDataFetchStatus)
            })), E.createElement(H, {
                getOwnerSpan: c(function() {
                    return h.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return h.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "custom-date-picker",
                    AlignIconRight: !0
                },
                events: {
                    _handleError: c(function(f) {
                        v.handleError(f)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: e,
                    uuid: "3",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    icon: new ut(function() {
                        return [E.createElement(Q, {
                            extendedEvents: {
                                onClick: c(function() {
                                    var f = i.clone();
                                    v.openCalendar$Action(v.callContext(f))
                                }, "onClick")
                            },
                            icon: "calendar",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t
                        })]
                    }),
                    input: new ut(function() {
                        return [E.createElement(w, {
                            _validationProps: {
                                validationService: a
                            },
                            enabled: n.variables.enabledIn,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: n.variables.requiredIn,
                            maxLength: 0,
                            prompt: n.getCachedValue(e.getId("DateField.Prompt"), function() {
                                return n.variables.placeholderIn !== x.BuiltinFunctions.nullTextIdentifier() ? n.variables.placeholderIn : n.variables.dateFormatIn
                            }, function() {
                                return n.variables.placeholderIn
                            }, function() {
                                return n.variables.dateFormatIn
                            }),
                            style: "form-control date-field",
                            variable: n.createVariable(x.DataTypes.DataTypes.Text, n.variables.dateValueVar, function(f) {
                                n.variables.dateValueVar = f
                            }),
                            _idProps: {
                                service: e,
                                name: "DateField"
                            },
                            _widgetRecordProvider: t,
                            enabled_dataFetchStatus: x.Model.calculateDataFetchStatus(n.variables._enabledInDataFetchStatus),
                            mandatory_dataFetchStatus: x.Model.calculateDataFetchStatus(n.variables._requiredInDataFetchStatus),
                            prompt_dataFetchStatus: x.Model.calculateDataFetchStatus(n.variables._placeholderInDataFetchStatus, n.variables._dateFormatInDataFetchStatus)
                        })]
                    })
                },
                _dependencies: [s(n.variables.enabledIn), s(n.variables.requiredIn), s(n.variables._enabledInDataFetchStatus), s(n.variables._requiredInDataFetchStatus), s(n.variables._dateFormatInDataFetchStatus), s(n.variables._placeholderInDataFetchStatus), s(n.variables.dateFormatIn), s(n.variables.placeholderIn), s(n.variables.dateValueVar)]
            })))
        }
    };
c($, "View");
var He = $,
    Me = He;
var b = I,
    se = O.PlaceholderContent,
    Or = O.IteratorPlaceholderContent,
    V = class V extends F.BaseWebBlock {
        static get displayName() {
            return "ProofOfIdentity.PersonalDetails"
        }
        static getAttributes() {
            return {
                codeFunction: "PersonalDetails",
                functionKey: "3888429d-b105-440b-8b7f-c214e0a5e018",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.ProofOfIdentity.PersonalDetails.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [de, H, Ee, Me]
        }
        get modelFactory() {
            return Ye
        }
        get controllerFactory() {
            return Xe
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                v = this.controller,
                e = this.idService,
                a = v.validationService,
                t = this.widgetsRecordProvider,
                i = v.callContext(),
                r = V.ifWidget,
                l = V.textWidget,
                s = V.asPrimitiveValue,
                g = V.getTranslation,
                h = this;
            return y.createElement("div", this.getRootNodeProperties(), r(n.variables.isLoadingVar, !1, this, function() {
                return [y.createElement(de, {
                    getOwnerSpan: c(function() {
                        return h.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: c(function() {
                        return h.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: c(function(f) {
                            v.handleError(f)
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
                    _dependencies: []
                })]
            }, function() {
                return [y.createElement(_, {
                    align: 0,
                    animate: !1,
                    style: "display-flex flex-direction-column personal-details__container",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "1"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(_, {
                    align: 0,
                    animate: !1,
                    style: "personal-details__layout ",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "PersonalDetailsContainer"
                    },
                    _widgetRecordProvider: t
                }, r(n.variables.showTitleIn, !1, this, function() {
                    return [y.createElement(_, {
                        align: 0,
                        animate: !1,
                        style: "personal-details--heading",
                        visible: !0,
                        _idProps: {
                            service: e,
                            name: "PersonalDetailsHeader"
                        },
                        _widgetRecordProvider: t
                    }, r(S.getDevice() === "desktop", !1, this, function() {
                        return []
                    }, function() {
                        return [y.createElement(J, {
                            style: "personal-details--heading_text ",
                            text: ["Personal Details"],
                            _idProps: {
                                service: e,
                                name: "PersonalDetailsHeaderContainer"
                            },
                            _widgetRecordProvider: t
                        })]
                    })), y.createElement(_, {
                        align: 0,
                        animate: !1,
                        style: "personal-details--message_container",
                        visible: !0,
                        _idProps: {
                            service: e,
                            name: "MessageInfoContainer"
                        },
                        _widgetRecordProvider: t
                    }, y.createElement(L, {
                        image: b.Navigation.VersionedURL.getVersionedUrl("img/Accounts.Iconinfo.svg"),
                        type: 0,
                        _idProps: {
                            service: e,
                            name: "InfoIcon"
                        },
                        _widgetRecordProvider: t
                    }), y.createElement(_, {
                        align: 0,
                        animate: !1,
                        style: "",
                        visible: !0,
                        _idProps: {
                            service: e,
                            name: "InfoText"
                        },
                        _widgetRecordProvider: t
                    }, "Your ", y.createElement(J, {
                        style: "font-bold",
                        text: ["name"],
                        _idProps: {
                            service: e,
                            uuid: "8"
                        },
                        _widgetRecordProvider: t
                    }), " and ", y.createElement(J, {
                        style: "font-bold",
                        text: ["date of birth"],
                        _idProps: {
                            service: e,
                            uuid: "9"
                        },
                        _widgetRecordProvider: t
                    }), " must match your identity document; you\u2019ll need to provide the document details later.")), y.createElement(_, {
                        align: 0,
                        animate: !0,
                        style: "margin-bottom-m",
                        visible: n.getCachedValue(e.getId("tz1J4VkFQ0e05xCYAtxNIw.Visible"), function() {
                            return n.variables.errorDataVar.codeAttr !== b.BuiltinFunctions.nullTextIdentifier()
                        }, function() {
                            return n.variables.errorDataVar.codeAttr
                        }),
                        _idProps: {
                            service: e,
                            uuid: "10"
                        },
                        _widgetRecordProvider: t
                    }, y.createElement(_, {
                        align: 0,
                        animate: !0,
                        style: "display-flex padding-s align-items-center column-gap-s error-banner",
                        visible: n.getCachedValue(e.getId("Errorbanner.Visible"), function() {
                            return n.variables.errorDataVar.codeAttr !== b.BuiltinFunctions.nullTextIdentifier()
                        }, function() {
                            return n.variables.errorDataVar.codeAttr
                        }),
                        _idProps: {
                            service: e,
                            name: "Errorbanner"
                        },
                        _widgetRecordProvider: t
                    }, y.createElement(L, {
                        image: b.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneTriangleExclamationRegularIcon.svg"),
                        style: "align-self-flex-start",
                        type: 0,
                        _idProps: {
                            service: e,
                            uuid: "12"
                        },
                        _widgetRecordProvider: t
                    }), r(n.variables.errorDataVar.codeAttr === "DuplicateAccount", !1, this, function() {
                        return [y.createElement(_, {
                            align: 0,
                            animate: !0,
                            style: "font-size-xs full-width",
                            visible: n.variables.errorDataVar.codeAttr === "DuplicateAccount",
                            _idProps: {
                                service: e,
                                uuid: "13"
                            },
                            _widgetRecordProvider: t
                        }, "These details match an existing profile. If this is a mistake, contact us via ", y.createElement(Ke, {
                            enabled: !0,
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            onClick: c(function() {
                                var f = i.clone();
                                v.liveChat_OnClick$Action(v.callContext(f))
                            }, "onClick"),
                            style: "font-bold error-banner__link",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: t
                        }, "live chat."))]
                    }, function() {
                        return [y.createElement(_, {
                            align: 0,
                            animate: !1,
                            style: "font-size-xs full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "15"
                            },
                            _widgetRecordProvider: t
                        }, y.createElement(B, {
                            value: n.variables.errorDataVar.messageAttr,
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: t
                        }))]
                    })))]
                }, function() {
                    return []
                }), y.createElement(Ge, {
                    _validationProps: {
                        validationService: a
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    style: "form personal-details__form",
                    _idProps: {
                        service: e,
                        name: "Personaldetailsform"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(_, {
                    align: 0,
                    animate: !1,
                    style: "personal-details__form-input display-flex flex-direction-column",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "DetailsContainer"
                    },
                    _widgetRecordProvider: t
                }, r(n.variables.showNameIn, !1, this, function() {
                    return [y.createElement(_, {
                        align: 0,
                        animate: !1,
                        visible: !0,
                        _idProps: {
                            service: e,
                            name: "FirstNameFiled"
                        },
                        _widgetRecordProvider: t
                    }, y.createElement(_, {
                        align: 0,
                        animate: !1,
                        visible: !0,
                        _idProps: {
                            service: e,
                            name: "FirstName"
                        },
                        _widgetRecordProvider: t
                    }, y.createElement(U, {
                        gridProperties: {
                            classes: "OSFillParent"
                        },
                        mandatory: !1,
                        targetWidget: "Input_FirstName",
                        _idProps: {
                            service: e,
                            uuid: "21"
                        },
                        _widgetRecordProvider: t
                    }, "First name"), y.createElement(w, {
                        _validationProps: {
                            validationService: a,
                            validationParentId: e.getId("Personaldetailsform")
                        },
                        enabled: !n.variables.firstNameFieldIn.isDisabledAttr,
                        gridProperties: {
                            classes: "OSFillParent"
                        },
                        inputType: 0,
                        mandatory: !1,
                        maxLength: 50,
                        onChange: c(function() {
                            var f = i.clone();
                            v.firstNameOnChange$Action(v.callContext(f))
                        }, "onChange"),
                        prompt: "Enter your last name",
                        style: "form-control",
                        variable: n.createVariable(b.DataTypes.DataTypes.Text, n.variables.firstNameFieldIn.valueAttr, function(f) {
                            n.variables.firstNameFieldIn.valueAttr = f
                        }),
                        _idProps: {
                            service: e,
                            name: "Input_FirstName"
                        },
                        _widgetRecordProvider: t,
                        enabled_dataFetchStatus: b.Model.calculateDataFetchStatus(n.variables._firstNameFieldInDataFetchStatus),
                        variable_dataFetchStatus: b.Model.calculateDataFetchStatus(n.variables._firstNameFieldInDataFetchStatus)
                    }))), y.createElement(_, {
                        align: 0,
                        animate: !1,
                        visible: !0,
                        _idProps: {
                            service: e,
                            name: "LastNameFeild"
                        },
                        _widgetRecordProvider: t
                    }, y.createElement(_, {
                        align: 0,
                        animate: !1,
                        visible: !0,
                        _idProps: {
                            service: e,
                            name: "LastName"
                        },
                        _widgetRecordProvider: t
                    }, y.createElement(U, {
                        gridProperties: {
                            classes: "OSFillParent"
                        },
                        mandatory: !1,
                        targetWidget: "Input_LastName",
                        _idProps: {
                            service: e,
                            uuid: "25"
                        },
                        _widgetRecordProvider: t
                    }, "Last name"), y.createElement(w, {
                        _validationProps: {
                            validationService: a,
                            validationParentId: e.getId("Personaldetailsform")
                        },
                        enabled: !n.variables.firstNameFieldIn.isDisabledAttr,
                        gridProperties: {
                            classes: "OSFillParent"
                        },
                        inputType: 0,
                        mandatory: !1,
                        maxLength: 50,
                        onChange: c(function() {
                            var f = i.clone();
                            v.lastNameOnChange$Action(v.callContext(f))
                        }, "onChange"),
                        prompt: "Enter your last name",
                        style: "form-control",
                        variable: n.createVariable(b.DataTypes.DataTypes.Text, n.variables.lastNameFieldIn.valueAttr, function(f) {
                            n.variables.lastNameFieldIn.valueAttr = f
                        }),
                        _idProps: {
                            service: e,
                            name: "Input_LastName"
                        },
                        _widgetRecordProvider: t,
                        enabled_dataFetchStatus: b.Model.calculateDataFetchStatus(n.variables._firstNameFieldInDataFetchStatus),
                        variable_dataFetchStatus: b.Model.calculateDataFetchStatus(n.variables._lastNameFieldInDataFetchStatus)
                    })))]
                }, function() {
                    return []
                }), r(n.variables.showDOBIn, !1, this, function() {
                    return [y.createElement(_, {
                        align: 0,
                        animate: !1,
                        visible: !1,
                        _idProps: {
                            service: e,
                            name: "DOBField"
                        },
                        _widgetRecordProvider: t
                    }, y.createElement(_, {
                        align: 0,
                        animate: !1,
                        visible: !0,
                        _idProps: {
                            service: e,
                            name: "DOB"
                        },
                        _widgetRecordProvider: t
                    }, y.createElement(U, {
                        gridProperties: {
                            classes: "OSFillParent"
                        },
                        mandatory: !1,
                        targetWidget: "MobileDate",
                        _idProps: {
                            service: e,
                            uuid: "29"
                        },
                        _widgetRecordProvider: t
                    }, "Date of birth"), y.createElement(_, {
                        align: 0,
                        animate: !1,
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "30"
                        },
                        _widgetRecordProvider: t
                    }, r(S.getDevice() === "desktop", !1, this, function() {
                        return [y.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: right;"
                            },
                            style: "desktop-dob-field",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "31"
                            },
                            _widgetRecordProvider: t
                        }, y.createElement(H, {
                            getOwnerSpan: c(function() {
                                return h.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: c(function() {
                                return h.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                AlignIconRight: !0
                            },
                            events: {
                                _handleError: c(function(f) {
                                    v.handleError(f)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a,
                                validationParentId: e.getId("Personaldetailsform")
                            },
                            _idProps: {
                                service: e,
                                uuid: "32",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                icon: new se(function() {
                                    return [y.createElement(_, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "33"
                                        },
                                        _widgetRecordProvider: t
                                    }, y.createElement(Q, {
                                        extendedEvents: {
                                            onClick: c(function() {
                                                var f = i.clone();
                                                v.onClickDatePicker$Action(v.callContext(f))
                                            }, "onClick")
                                        },
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        icon: "calendar-o",
                                        iconSize: 1,
                                        style: "icon",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "iconCalendar"
                                        },
                                        _widgetRecordProvider: t
                                    }))]
                                }),
                                input: new se(function() {
                                    return [y.createElement(Ee, {
                                        getOwnerSpan: c(function() {
                                            return h.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: c(function() {
                                            return h.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            OptionalConfigs: n.getCachedValue(e.getId("DesktopInteractiveDate.OptionalConfigs"), function() {
                                                return function() {
                                                    var f = new M;
                                                    return f.initialDateAttr = n.variables.dateOfBirthFieldIn.valueAttr, f.maxDateAttr = b.BuiltinFunctions.addYears(b.BuiltinFunctions.currDate(), -18), f
                                                }()
                                            }, function() {
                                                return n.variables.dateOfBirthFieldIn.valueAttr
                                            }),
                                            _optionalConfigsInDataFetchStatus: b.Model.calculateDataFetchStatus(n.variables._dateOfBirthFieldInDataFetchStatus),
                                            DateFormat: "d/m/Y"
                                        },
                                        events: {
                                            _handleError: c(function(f) {
                                                v.handleError(f)
                                            }, "_handleError"),
                                            onSelected$Action: c(function(f, P) {
                                                var K = i.clone();
                                                v.datePickerOnSelected$Action(P, v.callContext(K))
                                            }, "onSelected$Action")
                                        },
                                        _validationProps: {
                                            validationService: a,
                                            validationParentId: e.getId("Personaldetailsform")
                                        },
                                        _idProps: {
                                            service: e,
                                            name: "DesktopInteractiveDate",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: t,
                                        placeholders: {
                                            datepicker: new se(function() {
                                                return [y.createElement(w, {
                                                    _validationProps: {
                                                        validationService: a,
                                                        validationParentId: e.getId("Personaldetailsform")
                                                    },
                                                    enabled: !0,
                                                    extendedProperties: {
                                                        "aria-label": "Select a date"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    inputType: 4,
                                                    mandatory: !1,
                                                    maxLength: 0,
                                                    onChange: c(function() {
                                                        var f = i.clone();
                                                        v.dateOfBirthOnChange$Action(v.callContext(f))
                                                    }, "onChange"),
                                                    prompt: "dd/mm/yyyy",
                                                    style: "form-control full-width justify-content-flex-start",
                                                    variable: n.createVariable(b.DataTypes.DataTypes.Date, n.variables.dateOfBirthFieldIn.valueAttr, function(f) {
                                                        n.variables.dateOfBirthFieldIn.valueAttr = f
                                                    }),
                                                    _idProps: {
                                                        service: e,
                                                        name: "DesktopDate"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    variable_dataFetchStatus: b.Model.calculateDataFetchStatus(n.variables._dateOfBirthFieldInDataFetchStatus)
                                                })]
                                            }),
                                            placeholder_SSPreview: se.Empty
                                        },
                                        _dependencies: [s(n.variables._dateOfBirthFieldInDataFetchStatus), s(n.variables.dateOfBirthFieldIn.valueAttr)]
                                    })]
                                })
                            },
                            _dependencies: [s(n.variables._dateOfBirthFieldInDataFetchStatus), s(n.variables.dateOfBirthFieldIn.valueAttr)]
                        }))]
                    }, function() {
                        return [y.createElement(_, {
                            align: 0,
                            animate: !1,
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "37"
                            },
                            _widgetRecordProvider: t
                        }, y.createElement(w, {
                            _validationProps: {
                                validationService: a,
                                validationParentId: e.getId("Personaldetailsform")
                            },
                            enabled: !0,
                            extendedProperties: {
                                "aria-label": "Select a date"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 4,
                            mandatory: !1,
                            maxLength: 0,
                            onChange: c(function() {
                                var f = i.clone();
                                v.dateOfBirthOnChange$Action(v.callContext(f))
                            }, "onChange"),
                            prompt: "dd/mm/yyyy",
                            style: "form-control inline-block-display",
                            variable: n.createVariable(b.DataTypes.DataTypes.Date, n.variables.dateOfBirthFieldIn.valueAttr, function(f) {
                                n.variables.dateOfBirthFieldIn.valueAttr = f
                            }),
                            _idProps: {
                                service: e,
                                name: "MobileDate"
                            },
                            _widgetRecordProvider: t,
                            variable_dataFetchStatus: b.Model.calculateDataFetchStatus(n.variables._dateOfBirthFieldInDataFetchStatus)
                        }))]
                    })))), y.createElement(_, {
                        align: 0,
                        animate: !1,
                        visible: !0,
                        _idProps: {
                            service: e,
                            name: "CustomDOB"
                        },
                        _widgetRecordProvider: t
                    }, y.createElement(Me, {
                        getOwnerSpan: c(function() {
                            return h.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: c(function() {
                            return h.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            Enabled: !n.variables.dateOfBirthFieldIn.isDisabledAttr,
                            _enabledInDataFetchStatus: b.Model.calculateDataFetchStatus(n.variables._dateOfBirthFieldInDataFetchStatus),
                            Required: !1,
                            InputDate: b.BuiltinFunctions.dateToText(n.variables.dateOfBirthFieldIn.valueAttr),
                            _inputDateInDataFetchStatus: b.Model.calculateDataFetchStatus(n.variables._dateOfBirthFieldInDataFetchStatus),
                            DateFormat: "dd/MM/yyyy",
                            Label: "Date of Birth",
                            ErrorMessage: n.variables.dateOfBirthFieldIn.errorMessageAttr,
                            _errorMessageInDataFetchStatus: b.Model.calculateDataFetchStatus(n.variables._dateOfBirthFieldInDataFetchStatus),
                            IsMobile: S.getDevice() !== "desktop",
                            MaxDate: n.getCachedValue(e.getId("UEbDK7wI5E6lFuS0xNS8Ug.MaxDate"), function() {
                                return b.BuiltinFunctions.dateTimeToText(b.BuiltinFunctions.addYears(b.BuiltinFunctions.currDate(), -18))
                            })
                        },
                        events: {
                            _handleError: c(function(f) {
                                v.handleError(f)
                            }, "_handleError"),
                            emitDate$Action: c(function(f) {
                                var P = i.clone();
                                v.datePickerOnSelected$Action(f, v.callContext(P))
                            }, "emitDate$Action")
                        },
                        _validationProps: {
                            validationService: a,
                            validationParentId: e.getId("Personaldetailsform")
                        },
                        _idProps: {
                            service: e,
                            uuid: "40",
                            alias: "4"
                        },
                        _widgetRecordProvider: t,
                        _dependencies: []
                    }))]
                }, function() {
                    return []
                })), y.createElement(_, {
                    align: 0,
                    animate: !1,
                    style: "personal-details__example display-flex flex-direction-column",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "ExampleContainer"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(J, {
                    style: "font-size-s",
                    text: ["Example :"],
                    _idProps: {
                        service: e,
                        uuid: "42"
                    },
                    _widgetRecordProvider: t
                }), r(n.variables.showNameIn && n.variables.showDOBIn, !1, this, function() {
                    return [y.createElement(L, {
                        gridProperties: {
                            classes: "OSFillParent"
                        },
                        image: b.Navigation.VersionedURL.getVersionedUrl("img/Accounts.Sampleimage.svg"),
                        type: 0,
                        _idProps: {
                            service: e,
                            uuid: "43"
                        },
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [r(n.variables.showNameIn, !1, this, function() {
                        return [y.createElement(L, {
                            image: b.Navigation.VersionedURL.getVersionedUrl("img/Accounts.DerivLightNamePoiIcon.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "44"
                            },
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return [y.createElement(L, {
                            image: b.Navigation.VersionedURL.getVersionedUrl("img/Accounts.DerivLightDobPoiIcon.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "45"
                            },
                            _widgetRecordProvider: t
                        })]
                    })]
                })))), y.createElement(_, {
                    align: 0,
                    animate: !1,
                    style: "personal_details__btn_container btn_footer",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "ButtonContainer"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(qe, {
                    enabled: !0,
                    extendedProperties: {
                        style: "border-radius: 20px;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    isDefault: !1,
                    onClick: c(function() {
                        return h.validateWidget(""), Promise.resolve().then(function() {
                            var f = i.clone();
                            return v.saveOnClick$Action(v.callContext(f))
                        })
                    }, "onClick"),
                    style: "btn btn-primary personal_details__btn",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "47"
                    },
                    _widgetRecordProvider: t
                }, y.createElement(B, {
                    style: "justify-content-center",
                    value: n.getCachedValue(e.getId("FQKXqe25b0u9RCbpr8gJWA.Value"), function() {
                        return n.variables.buttonTextIn !== b.BuiltinFunctions.nullTextIdentifier() ? n.variables.buttonTextIn : "Next"
                    }, function() {
                        return n.variables.buttonTextIn
                    }),
                    _idProps: {
                        service: e,
                        uuid: "48"
                    },
                    _widgetRecordProvider: t,
                    value_dataFetchStatus: b.Model.calculateDataFetchStatus(n.variables._buttonTextInDataFetchStatus)
                }))))]
            }))
        }
    };
c(V, "View");
var We = V,
    pr = We;
export {
    H as a, Ee as b, Me as c, pr as d
};