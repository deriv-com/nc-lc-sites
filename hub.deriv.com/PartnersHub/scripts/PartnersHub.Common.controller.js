define("PartnersHub.Common.controller", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.clientVariables", "PartnersHub.Common.controller$translationsResources", "PartnersHub.controller$RedirectToOauth"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubClientVariables, PartnersHub_Common_Controller_translationsResources) {
    var OS = OSRuntimeCore;
    var PartnersHub_CommonController = exports;
    class Controller extends
    OS.Controller.BaseController {
        getDefaultTimeout() {
            return PartnersHubController.default.defaultTimeout;
        }

        get handleError() {
            if (!(this.hasOwnProperty("_handleError"))) {
                this._handleError = function(ex, callContext) {
                    var controller = this.controller;
                    return OS.Logger.startActiveSpan("OnException", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "OnException");
                            span.setAttribute("outsystems.function.key", "1a118907-e7fa-4938-90a2-703c8abe0fca.#FlowExceptionHandler");
                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                            span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                        }

                        try {
                            var securityExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                            var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                            var dataBaseExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                            var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                            OS.Logger.debug("Common.OnException", OS.Exceptions.getMessage(ex));
                            if (OS.ErrorHandling.ignoreError(ex, callContext)) {
                                return OS.ErrorHandling.IGNORED_ERROR_RESULT;
                            }

                            try {
                                OS.Logger.debug("Common.OnException", OS.Exceptions.getMessage(ex));
                                // Handle Error: SecurityException
                                if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.SecurityException)) {
                                    securityExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                                    return OS.Logger.startActiveSpan("SecurityException", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "SecurityException");
                                            span.setAttribute("outsystems.function.key", "1db0d2fa-26aa-479a-9520-99a3a5d75a3a");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                                        }

                                        try { // Logged User?
                                            if (((((OS.BuiltinFunctions.getUserId()).toString()) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
                                                // Destination: /PartnersHub/PartnersHubDashboard
                                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "PartnersHubDashboard", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                            } else {
                                                // LastRequest
                                                // LastURL = GetBookmarkableURL
                                                PartnersHubClientVariables.setLastURL(OS.BuiltinFunctions.getBookmarkableURL());
                                                // Execute Action: RedirectToOauth
                                                PartnersHubController.default.redirectToOauth$Action(callContext);
                                                return;

                                            }

                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                }

                                // Handle Error: DataBaseException
                                if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.DataBaseException)) {
                                    OS.Logger.error(null, ex, null, null, 1);
                                    dataBaseExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                                    return OS.Logger.startActiveSpan("DataBaseException", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "DataBaseException");
                                            span.setAttribute("outsystems.function.key", "44c56eca-8792-4354-8872-391470dce2a3");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                                        }

                                        try {
                                            OS.FeedbackMessageService.showFeedbackMessage(OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("h3fWDwmg3UeT0Bqt_cQgxw#Message.878067834.1", "There was a problem with the database request. Please contact the administrator"), /*Error*/ 3);
                                            return;

                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                }

                                // Handle Error: CommunicationException
                                if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
                                    OS.Logger.error(null, ex, null, null, 1);
                                    communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                                    return OS.Logger.startActiveSpan("CommunicationException", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "CommunicationException");
                                            span.setAttribute("outsystems.function.key", "9f3a4c50-96da-4e7b-99b9-25a7b45412e3");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                                        }

                                        try {
                                            OS.FeedbackMessageService.showFeedbackMessage(OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("ZW2tO1gq9ke3K4B8INEM6w#Message.-1991744483.1", "There was a problem communicating with the server. Please try again or contact your administrator"), /*Error*/ 3);
                                            return;

                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                }

                                // Handle Error: AllExceptions
                                if (!(OS.Exceptions.isSystem(ex))) {
                                    OS.Logger.error(null, ex, null, null, 1);
                                    allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                                    return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "AllExceptions");
                                            span.setAttribute("outsystems.function.key", "22e99060-a32a-4cfa-acb6-7bd2cacb7ce1");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                                        }

                                        try {
                                            OS.FeedbackMessageService.showFeedbackMessage(OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("hd35JhN3zEmey3w4Y9h7LQ#Message.-1973574713.1", "There was a problem. Please contact the administrator"), /*Error*/ 3);
                                            return;

                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                }

                                throw ex;
                            } catch (unhandledEx) {
                                OS.Logger.debug("Common.OnException", OS.Exceptions.getMessage(ex));
                                return OS.ErrorHandling.defaultErrorHandler(unhandledEx, callContext);
                            }

                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);


                };
            }

            return this._handleError;
        }
        set handleError(value) {
            this._handleError = value;
        }

    }



    PartnersHub_CommonController.default = new Controller(PartnersHub_Common_Controller_translationsResources);
});


define("PartnersHub.Common.controller$translationsResources.ar-001", [], function() {
    return {
        "ZW2tO1gq9ke3K4B8INEM6w#Message.-1991744483.1": "حدثت مشكلة في التواصل مع الخادم. يرجى المحاولة مرة أخرى أو التواصل مع المسؤول.",
        "hd35JhN3zEmey3w4Y9h7LQ#Message.-1973574713.1": "حدثت مشكلة. يرجى التواصل مع المسؤول.",
        "h3fWDwmg3UeT0Bqt_cQgxw#Message.878067834.1": "حدثت مشكلة في طلب قاعدة البيانات. يرجى التواصل مع المسؤول."
    };
});

define("PartnersHub.Common.controller$translationsResources.de-DE", [], function() {
    return {
        "ZW2tO1gq9ke3K4B8INEM6w#Message.-1991744483.1": "Es gab ein Problem bei der Kommunikation mit dem Server. Bitte versuchen Sie es erneut oder kontaktieren Sie Ihren Administrator.",
        "hd35JhN3zEmey3w4Y9h7LQ#Message.-1973574713.1": "Es gab ein Problem. Bitte kontaktieren Sie den Administrator.",
        "h3fWDwmg3UeT0Bqt_cQgxw#Message.878067834.1": "Es gab ein Problem mit der Datenbankanfrage. Bitte kontaktieren Sie den Administrator."
    };
});

define("PartnersHub.Common.controller$translationsResources.es-ES", [], function() {
    return {
        "ZW2tO1gq9ke3K4B8INEM6w#Message.-1991744483.1": "Hubo un problema al comunicarse con el servidor. Por favor, inténtalo de nuevo o contacta a tu administrador.",
        "hd35JhN3zEmey3w4Y9h7LQ#Message.-1973574713.1": "Hubo un problema. Por favor, contacta al administrador.",
        "h3fWDwmg3UeT0Bqt_cQgxw#Message.878067834.1": "Hubo un problema con la solicitud de la base de datos. Por favor, contacta al administrador."
    };
});

define("PartnersHub.Common.controller$translationsResources.fr-FR", [], function() {
    return {
        "ZW2tO1gq9ke3K4B8INEM6w#Message.-1991744483.1": "Un problème est survenu lors de la communication avec le serveur. Veuillez réessayer ou contacter votre administrateur.",
        "hd35JhN3zEmey3w4Y9h7LQ#Message.-1973574713.1": "Un problème est survenu. Veuillez contacter l\'administrateur.",
        "h3fWDwmg3UeT0Bqt_cQgxw#Message.878067834.1": "Un problème est survenu avec la demande de base de données. Veuillez contacter l\'administrateur."
    };
});

define("PartnersHub.Common.controller$translationsResources.it-IT", [], function() {
    return {
        "ZW2tO1gq9ke3K4B8INEM6w#Message.-1991744483.1": "C\'è stato un problema nella comunicazione con il server. Riprova o contatta l\'amministratore.",
        "hd35JhN3zEmey3w4Y9h7LQ#Message.-1973574713.1": "C\'è stato un problema. Contatta l\'amministratore.",
        "h3fWDwmg3UeT0Bqt_cQgxw#Message.878067834.1": "C\'è stato un problema con la richiesta del database. Contatta l\'amministratore."
    };
});

define("PartnersHub.Common.controller$translationsResources.pl-PL", [], function() {
    return {
        "ZW2tO1gq9ke3K4B8INEM6w#Message.-1991744483.1": "Wystąpił problem z komunikacją z serwerem. Proszę spróbować ponownie lub skontaktować się z administratorem.",
        "hd35JhN3zEmey3w4Y9h7LQ#Message.-1973574713.1": "Wystąpił problem. Proszę skontaktować się z administratorem.",
        "h3fWDwmg3UeT0Bqt_cQgxw#Message.878067834.1": "Wystąpił problem z żądaniem bazy danych. Proszę skontaktować się z administratorem."
    };
});

define("PartnersHub.Common.controller$translationsResources.pt-PT", [], function() {
    return {
        "ZW2tO1gq9ke3K4B8INEM6w#Message.-1991744483.1": "Ocorreu um erro na comunicação com o servidor. Por favor, tente novamente ou contacte o administrador.",
        "hd35JhN3zEmey3w4Y9h7LQ#Message.-1973574713.1": "Ocorreu um erro. Por favor, contacte o administrador.",
        "h3fWDwmg3UeT0Bqt_cQgxw#Message.878067834.1": "Ocorreu um erro com o pedido à base de dados. Por favor, contacte o administrador."
    };
});

define("PartnersHub.Common.controller$translationsResources.ru-RU", [], function() {
    return {
        "ZW2tO1gq9ke3K4B8INEM6w#Message.-1991744483.1": "Произошла ошибка при соединении с сервером. Попробуйте снова или свяжитесь с администратором.",
        "hd35JhN3zEmey3w4Y9h7LQ#Message.-1973574713.1": "Произошла ошибка. Свяжитесь с администратором.",
        "h3fWDwmg3UeT0Bqt_cQgxw#Message.878067834.1": "Произошла ошибка запроса к базе данных. Свяжитесь с администратором."
    };
});

define("PartnersHub.Common.controller$translationsResources", ["exports", "PartnersHub.Common.controller$translationsResources.ar-001", "PartnersHub.Common.controller$translationsResources.de-DE", "PartnersHub.Common.controller$translationsResources.es-ES", "PartnersHub.Common.controller$translationsResources.fr-FR", "PartnersHub.Common.controller$translationsResources.it-IT", "PartnersHub.Common.controller$translationsResources.pl-PL", "PartnersHub.Common.controller$translationsResources.pt-PT", "PartnersHub.Common.controller$translationsResources.ru-RU"], function(exports, PartnersHub_Common_controller_translationsResources_ar001, PartnersHub_Common_controller_translationsResources_deDE, PartnersHub_Common_controller_translationsResources_esES, PartnersHub_Common_controller_translationsResources_frFR, PartnersHub_Common_controller_translationsResources_itIT, PartnersHub_Common_controller_translationsResources_plPL, PartnersHub_Common_controller_translationsResources_ptPT, PartnersHub_Common_controller_translationsResources_ruRU) {
    return {
        "ar-001": {
            "translations": PartnersHub_Common_controller_translationsResources_ar001,
            "isRTL": true
        },
        "de-DE": {
            "translations": PartnersHub_Common_controller_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Common_controller_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Common_controller_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Common_controller_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Common_controller_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Common_controller_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Common_controller_translationsResources_ruRU,
            "isRTL": false
        }
    };
});