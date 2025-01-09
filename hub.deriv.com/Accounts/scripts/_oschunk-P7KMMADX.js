import {
    o as f
} from "./_oschunk-KZFTAIEG.js";
import {
    ia as a
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as u
} from "./_oschunk-QHO7QY6K.js";
var e = a,
    i = class i extends e.Controller.BaseController {
        getDefaultTimeout() {
            return f.defaultTimeout
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(r, n) {
                var b = this.controller;
                return e.Logger.startActiveSpan("OnException", function(o) {
                    o && (o.setAttribute("code.function", "OnException"), o.setAttribute("outsystems.function.key", "1a118907-e7fa-4938-90a2-703c8abe0fca.#FlowExceptionHandler"), o.setAttribute("outsystems.function.owner.name", "Accounts"), o.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), o.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                    try {
                        var l = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                            d = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                            c = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType),
                            E = new e.DataTypes.VariableHolder(new e.DataTypes.ErrorHandlerOutputType);
                        if (e.Logger.debug("Common.OnException", e.Exceptions.getMessage(r)), e.ErrorHandling.ignoreError(r, n)) return e.ErrorHandling.IGNORED_ERROR_RESULT;
                        try {
                            if (e.Logger.debug("Common.OnException", e.Exceptions.getMessage(r)), e.Exceptions.isInstanceOf(r, e.Exceptions.Exceptions.UserException, "Accounts.UnAuthorizedRouteAccess")) return e.Logger.error(null, r, null, null, 1), c.value.exceptionMessageAttr = e.Exceptions.getMessage(r), e.Logger.startActiveSpan("UnAuthorizedRouteAccess", function(t) {
                                t && (t.setAttribute("code.function", "UnAuthorizedRouteAccess"), t.setAttribute("outsystems.function.key", "5f37ac72-057b-497f-a83f-6b3688768e3c"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    return e.FeedbackMessageService.showFeedbackMessage(c.value.exceptionMessageAttr, 3), e.Navigation.navigateBack(null, n, !0)
                                } finally {
                                    t && t.end()
                                }
                            }, 1);
                            if (e.Exceptions.isInstanceOf(r, e.Exceptions.Exceptions.DataBaseException)) return e.Logger.error(null, r, null, null, 1), d.value.exceptionMessageAttr = e.Exceptions.getMessage(r), e.Logger.startActiveSpan("DataBaseException", function(t) {
                                t && (t.setAttribute("code.function", "DataBaseException"), t.setAttribute("outsystems.function.key", "44c56eca-8792-4354-8872-391470dce2a3"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    e.FeedbackMessageService.showFeedbackMessage("There was a problem with the database request. Please contact the administrator", 3);
                                    return
                                } finally {
                                    t && t.end()
                                }
                            }, 1);
                            if (e.Exceptions.isInstanceOf(r, e.Exceptions.Exceptions.CommunicationException)) return e.Logger.error(null, r, null, null, 1), E.value.exceptionMessageAttr = e.Exceptions.getMessage(r), e.Logger.startActiveSpan("CommunicationException", function(t) {
                                t && (t.setAttribute("code.function", "CommunicationException"), t.setAttribute("outsystems.function.key", "9f3a4c50-96da-4e7b-99b9-25a7b45412e3"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    e.FeedbackMessageService.showFeedbackMessage("There was a problem communicating with the server. Please try again or contact your administrator", 3);
                                    return
                                } finally {
                                    t && t.end()
                                }
                            }, 1);
                            if (!e.Exceptions.isSystem(r)) return e.Logger.error(null, r, null, null, 1), l.value.exceptionMessageAttr = e.Exceptions.getMessage(r), e.Logger.startActiveSpan("AllExceptions", function(t) {
                                t && (t.setAttribute("code.function", "AllExceptions"), t.setAttribute("outsystems.function.key", "22e99060-a32a-4cfa-acb6-7bd2cacb7ce1"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER"));
                                try {
                                    e.FeedbackMessageService.showFeedbackMessage("There was a problem. Please contact the administrator", 3);
                                    return
                                } finally {
                                    t && t.end()
                                }
                            }, 1);
                            throw r
                        } catch (t) {
                            return e.Logger.debug("Common.OnException", e.Exceptions.getMessage(r)), e.ErrorHandling.defaultErrorHandler(t, n)
                        }
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this._handleError
        }
        set handleError(r) {
            this._handleError = r
        }
    };
u(i, "Controller");
var s = i,
    p = new s;
export {
    p as a
};