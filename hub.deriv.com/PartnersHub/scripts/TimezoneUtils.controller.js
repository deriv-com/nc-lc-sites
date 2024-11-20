define("TimezoneUtils.controller$ConvertDateTimeByTimezoneOffset", ["exports", "@outsystems/runtime-core-js", "TimezoneUtils.model", "TimezoneUtils.controller", "TimezoneUtils.controller$ConvertDateTimeToUTC"], function(exports, OSRuntimeCore, TimezoneUtilsModel, TimezoneUtilsController) {
    var OS = OSRuntimeCore;
    TimezoneUtilsController.default.convertDateTimeByTimezoneOffset$Action = function(dateTimeIn, timezoneOffsetIn, callContext) {
        return OS.Logger.startActiveSpan("ConvertDateTimeByTimezoneOffset", function(span) {
            if (span) {
                span.setAttribute("code.function", "ConvertDateTimeByTimezoneOffset");
                span.setAttribute("outsystems.function.key", "e939a8a2-45e3-4cbd-a4e7-916647178c01");
                span.setAttribute("outsystems.function.owner.name", "TimezoneUtils");
                span.setAttribute("outsystems.function.owner.key", "a7d4bd5d-980d-4938-8921-5b4da6a74293");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("TimezoneUtils.ConvertDateTimeByTimezoneOffset$vars"))());
                vars.value.dateTimeInLocal = dateTimeIn;
                vars.value.timezoneOffsetInLocal = timezoneOffsetIn;
                var convertDateTimeToUTCVar = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("TimezoneUtils.ConvertDateTimeByTimezoneOffset$outVars"))());
                // Execute Action: ConvertDateTimeToUTC
                convertDateTimeToUTCVar.value = TimezoneUtilsController.default.convertDateTimeToUTC$Action(vars.value.dateTimeInLocal, callContext);

                // DatetimeWithOffSet = AddMinutes
                outVars.value.datetimeWithOffSetOut = OS.BuiltinFunctions.addMinutes(convertDateTimeToUTCVar.value.datetimeUTCOut, vars.value.timezoneOffsetInLocal);
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = TimezoneUtilsController.default;
    TimezoneUtilsController.default.constructor.registerVariableGroupType("TimezoneUtils.ConvertDateTimeByTimezoneOffset$vars", [{
        name: "DateTime",
        attrName: "dateTimeInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.DateTime,
        defaultValue: function() {
            return OS.DataTypes.DateTime.defaultValue;
        }
    }, {
        name: "TimezoneOffset",
        attrName: "timezoneOffsetInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Integer,
        defaultValue: function() {
            return 0;
        }
    }]);
    TimezoneUtilsController.default.constructor.registerVariableGroupType("TimezoneUtils.ConvertDateTimeByTimezoneOffset$outVars", [{
        name: "DatetimeWithOffSet",
        attrName: "datetimeWithOffSetOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.DateTime,
        defaultValue: function() {
            return OS.DataTypes.DateTime.defaultValue;
        }
    }]);
    TimezoneUtilsController.default.clientActionProxies.convertDateTimeByTimezoneOffset$Action = function(dateTimeIn, timezoneOffsetIn) {
        dateTimeIn = (dateTimeIn === undefined) ? OS.DataTypes.DateTime.defaultValue : dateTimeIn;
        timezoneOffsetIn = (timezoneOffsetIn === undefined) ? 0 : timezoneOffsetIn;
        return controller.executeActionInsideJSNode(TimezoneUtilsController.default.convertDateTimeByTimezoneOffset$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(dateTimeIn, OS.DataTypes.DataTypes.DateTime), OS.DataConversion.JSNodeParamConverter.from(timezoneOffsetIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                DatetimeWithOffSet: OS.DataConversion.JSNodeParamConverter.to(actionResults.datetimeWithOffSetOut, OS.DataTypes.DataTypes.DateTime)
            };
        });
    };
});


define("TimezoneUtils.controller$ConvertDateTimeToUTC", ["exports", "@outsystems/runtime-core-js", "TimezoneUtils.model", "TimezoneUtils.controller", "TimezoneUtils.controller$GetCurrentTimezoneOffset"], function(exports, OSRuntimeCore, TimezoneUtilsModel, TimezoneUtilsController) {
    var OS = OSRuntimeCore;
    TimezoneUtilsController.default.convertDateTimeToUTC$Action = function(dateTimeIn, callContext) {
        return OS.Logger.startActiveSpan("ConvertDateTimeToUTC", function(span) {
            if (span) {
                span.setAttribute("code.function", "ConvertDateTimeToUTC");
                span.setAttribute("outsystems.function.key", "4194e8ff-fb85-4518-aaec-849c50976f23");
                span.setAttribute("outsystems.function.owner.name", "TimezoneUtils");
                span.setAttribute("outsystems.function.owner.key", "a7d4bd5d-980d-4938-8921-5b4da6a74293");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("TimezoneUtils.ConvertDateTimeToUTC$vars"))());
                vars.value.dateTimeInLocal = dateTimeIn;
                var getCurrentTimezoneOffsetVar = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("TimezoneUtils.ConvertDateTimeToUTC$outVars"))());
                // Execute Action: GetCurrentTimezoneOffset
                getCurrentTimezoneOffsetVar.value = TimezoneUtilsController.default.getCurrentTimezoneOffset$Action(callContext);

                // DatetimeUTC = AddMinutes
                outVars.value.datetimeUTCOut = OS.BuiltinFunctions.addMinutes(vars.value.dateTimeInLocal, OS.BuiltinFunctions.textToInteger(getCurrentTimezoneOffsetVar.value.currentTimezoneOffsetOut));
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = TimezoneUtilsController.default;
    TimezoneUtilsController.default.constructor.registerVariableGroupType("TimezoneUtils.ConvertDateTimeToUTC$vars", [{
        name: "DateTime",
        attrName: "dateTimeInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.DateTime,
        defaultValue: function() {
            return OS.DataTypes.DateTime.defaultValue;
        }
    }]);
    TimezoneUtilsController.default.constructor.registerVariableGroupType("TimezoneUtils.ConvertDateTimeToUTC$outVars", [{
        name: "DatetimeUTC",
        attrName: "datetimeUTCOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.DateTime,
        defaultValue: function() {
            return OS.DataTypes.DateTime.defaultValue;
        }
    }]);
    TimezoneUtilsController.default.clientActionProxies.convertDateTimeToUTC$Action = function(dateTimeIn) {
        dateTimeIn = (dateTimeIn === undefined) ? OS.DataTypes.DateTime.defaultValue : dateTimeIn;
        return controller.executeActionInsideJSNode(TimezoneUtilsController.default.convertDateTimeToUTC$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(dateTimeIn, OS.DataTypes.DataTypes.DateTime)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                DatetimeUTC: OS.DataConversion.JSNodeParamConverter.to(actionResults.datetimeUTCOut, OS.DataTypes.DataTypes.DateTime)
            };
        });
    };
});


define("TimezoneUtils.controller$GetCurrentTimezoneOffset", ["exports", "@outsystems/runtime-core-js", "TimezoneUtils.model", "TimezoneUtils.controller", "TimezoneUtils.controller$GetCurrentTimezoneOffset.GetTimezoneOffsetJS"], function(exports, OSRuntimeCore, TimezoneUtilsModel, TimezoneUtilsController, TimezoneUtils_controller_GetCurrentTimezoneOffset_GetTimezoneOffsetJS) {
    var OS = OSRuntimeCore;
    TimezoneUtilsController.default.getCurrentTimezoneOffset$Action = function(callContext) {
        return OS.Logger.startActiveSpan("GetCurrentTimezoneOffset", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetCurrentTimezoneOffset");
                span.setAttribute("outsystems.function.key", "6f98d167-2eaa-4b99-b64b-5359ae599663");
                span.setAttribute("outsystems.function.owner.name", "TimezoneUtils");
                span.setAttribute("outsystems.function.owner.key", "a7d4bd5d-980d-4938-8921-5b4da6a74293");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var getTimezoneOffsetJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("TimezoneUtils.GetCurrentTimezoneOffset$outVars"))());
                getTimezoneOffsetJSResult.value = OS.Logger.startActiveSpan("GetTimezoneOffset", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetTimezoneOffset");
                        span.setAttribute("outsystems.function.key", "b0fc1cad-de29-4c16-bfa4-ef722ea03d1f");
                        span.setAttribute("outsystems.function.owner.name", "TimezoneUtils");
                        span.setAttribute("outsystems.function.owner.key", "a7d4bd5d-980d-4938-8921-5b4da6a74293");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(TimezoneUtils_controller_GetCurrentTimezoneOffset_GetTimezoneOffsetJS, "GetTimezoneOffset", "GetCurrentTimezoneOffset", {
                            timezone_offset: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("TimezoneUtils.GetCurrentTimezoneOffset$getTimezoneOffsetJSResult"))();
                            jsNodeResult.timezone_offsetOut = OS.DataConversion.JSNodeParamConverter.from($parameters.timezone_offset, OS.DataTypes.DataTypes.Text);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // CurrentTimezoneOffset = GetTimezoneOffset.timezone_offset
                outVars.value.currentTimezoneOffsetOut = getTimezoneOffsetJSResult.value.timezone_offsetOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = TimezoneUtilsController.default;
    TimezoneUtilsController.default.constructor.registerVariableGroupType("TimezoneUtils.GetCurrentTimezoneOffset$getTimezoneOffsetJSResult", [{
        name: "timezone_offset",
        attrName: "timezone_offsetOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    TimezoneUtilsController.default.constructor.registerVariableGroupType("TimezoneUtils.GetCurrentTimezoneOffset$outVars", [{
        name: "CurrentTimezoneOffset",
        attrName: "currentTimezoneOffsetOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    TimezoneUtilsController.default.clientActionProxies.getCurrentTimezoneOffset$Action = function() {
        return controller.executeActionInsideJSNode(TimezoneUtilsController.default.getCurrentTimezoneOffset$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                CurrentTimezoneOffset: OS.DataConversion.JSNodeParamConverter.to(actionResults.currentTimezoneOffsetOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("TimezoneUtils.controller$GetCurrentTimezoneOffset.GetTimezoneOffsetJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        var now = new Date();
        var timezone = now.getTimezoneOffset();

        $parameters.timezone_offset = timezone;
    };
});


define("TimezoneUtils.controller$GetTimeInTimezone", ["exports", "@outsystems/runtime-core-js", "TimezoneUtils.model", "TimezoneUtils.controller", "TimezoneUtils.controller$GetUTCDateTime"], function(exports, OSRuntimeCore, TimezoneUtilsModel, TimezoneUtilsController) {
    var OS = OSRuntimeCore;
    TimezoneUtilsController.default.getTimeInTimezone$Action = function(timezoneRawOffsetIn, timezoneRawDSTOffsetIn, callContext) {
        return OS.Logger.startActiveSpan("GetTimeInTimezone", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetTimeInTimezone");
                span.setAttribute("outsystems.function.key", "186f66fa-1f68-4e76-a458-21de3c49c12c");
                span.setAttribute("outsystems.function.owner.name", "TimezoneUtils");
                span.setAttribute("outsystems.function.owner.key", "a7d4bd5d-980d-4938-8921-5b4da6a74293");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("TimezoneUtils.GetTimeInTimezone$vars"))());
                vars.value.timezoneRawOffsetInLocal = timezoneRawOffsetIn;
                vars.value.timezoneRawDSTOffsetInLocal = timezoneRawDSTOffsetIn;
                var getUTCDateTimeVar = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("TimezoneUtils.GetTimeInTimezone$outVars"))());
                // Execute Action: GetUTCDateTime
                getUTCDateTimeVar.value = TimezoneUtilsController.default.getUTCDateTime$Action(callContext);

                // CurrTime = NewTime
                outVars.value.currTimeOut = OS.BuiltinFunctions.newTime(OS.BuiltinFunctions.hour(OS.BuiltinFunctions.addHours(getUTCDateTimeVar.value.uTCTimeOut, OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(OS.BuiltinFunctions.integerToDecimal((vars.value.timezoneRawOffsetInLocal + vars.value.timezoneRawDSTOffsetInLocal)).div(OS.BuiltinFunctions.integerToDecimal(3600)))))), OS.BuiltinFunctions.minute(getUTCDateTimeVar.value.uTCTimeOut), OS.BuiltinFunctions.second(getUTCDateTimeVar.value.uTCTimeOut));
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = TimezoneUtilsController.default;
    TimezoneUtilsController.default.constructor.registerVariableGroupType("TimezoneUtils.GetTimeInTimezone$vars", [{
        name: "TimezoneRawOffset",
        attrName: "timezoneRawOffsetInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Integer,
        defaultValue: function() {
            return 0;
        }
    }, {
        name: "TimezoneRawDSTOffset",
        attrName: "timezoneRawDSTOffsetInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Integer,
        defaultValue: function() {
            return 0;
        }
    }]);
    TimezoneUtilsController.default.constructor.registerVariableGroupType("TimezoneUtils.GetTimeInTimezone$outVars", [{
        name: "CurrTime",
        attrName: "currTimeOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Time,
        defaultValue: function() {
            return OS.DataTypes.DateTime.defaultValue;
        }
    }]);
    TimezoneUtilsController.default.clientActionProxies.getTimeInTimezone$Action = function(timezoneRawOffsetIn, timezoneRawDSTOffsetIn) {
        timezoneRawOffsetIn = (timezoneRawOffsetIn === undefined) ? 0 : timezoneRawOffsetIn;
        timezoneRawDSTOffsetIn = (timezoneRawDSTOffsetIn === undefined) ? 0 : timezoneRawDSTOffsetIn;
        return controller.executeActionInsideJSNode(TimezoneUtilsController.default.getTimeInTimezone$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(timezoneRawOffsetIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(timezoneRawDSTOffsetIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                CurrTime: OS.DataConversion.JSNodeParamConverter.to(actionResults.currTimeOut, OS.DataTypes.DataTypes.Time)
            };
        });
    };
});


define("TimezoneUtils.controller$GetUTCDateTime", ["exports", "@outsystems/runtime-core-js", "TimezoneUtils.model", "TimezoneUtils.controller", "TimezoneUtils.controller$GetUTCDateTime.GetUTCTimeJS"], function(exports, OSRuntimeCore, TimezoneUtilsModel, TimezoneUtilsController, TimezoneUtils_controller_GetUTCDateTime_GetUTCTimeJS) {
    var OS = OSRuntimeCore;
    TimezoneUtilsController.default.getUTCDateTime$Action = function(callContext) {
        return OS.Logger.startActiveSpan("GetUTCDateTime", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetUTCDateTime");
                span.setAttribute("outsystems.function.key", "e12f8974-44aa-45b0-bbbc-711733faacd8");
                span.setAttribute("outsystems.function.owner.name", "TimezoneUtils");
                span.setAttribute("outsystems.function.owner.key", "a7d4bd5d-980d-4938-8921-5b4da6a74293");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var getUTCTimeJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("TimezoneUtils.GetUTCDateTime$outVars"))());
                getUTCTimeJSResult.value = OS.Logger.startActiveSpan("GetUTCTime", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetUTCTime");
                        span.setAttribute("outsystems.function.key", "9ea70a54-0c86-40e1-ace5-72badd9ec7ab");
                        span.setAttribute("outsystems.function.owner.name", "TimezoneUtils");
                        span.setAttribute("outsystems.function.owner.key", "a7d4bd5d-980d-4938-8921-5b4da6a74293");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(TimezoneUtils_controller_GetUTCDateTime_GetUTCTimeJS, "GetUTCTime", "GetUTCDateTime", {
                            utc_datetime: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.DateTime.defaultValue, OS.DataTypes.DataTypes.DateTime)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("TimezoneUtils.GetUTCDateTime$getUTCTimeJSResult"))();
                            jsNodeResult.utc_datetimeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.utc_datetime, OS.DataTypes.DataTypes.DateTime);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // UTCTime = GetUTCTime.utc_datetime
                outVars.value.uTCTimeOut = getUTCTimeJSResult.value.utc_datetimeOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = TimezoneUtilsController.default;
    TimezoneUtilsController.default.constructor.registerVariableGroupType("TimezoneUtils.GetUTCDateTime$getUTCTimeJSResult", [{
        name: "utc_datetime",
        attrName: "utc_datetimeOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.DateTime,
        defaultValue: function() {
            return OS.DataTypes.DateTime.defaultValue;
        }
    }]);
    TimezoneUtilsController.default.constructor.registerVariableGroupType("TimezoneUtils.GetUTCDateTime$outVars", [{
        name: "UTCTime",
        attrName: "uTCTimeOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.DateTime,
        defaultValue: function() {
            return OS.DataTypes.DateTime.defaultValue;
        }
    }]);
    TimezoneUtilsController.default.clientActionProxies.getUTCDateTime$Action = function() {
        return controller.executeActionInsideJSNode(TimezoneUtilsController.default.getUTCDateTime$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                UTCTime: OS.DataConversion.JSNodeParamConverter.to(actionResults.uTCTimeOut, OS.DataTypes.DataTypes.DateTime)
            };
        });
    };
});

define("TimezoneUtils.controller$GetUTCDateTime.GetUTCTimeJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        var now = new Date();
        var utc_time = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
        $parameters.utc_datetime = utc_time;
    };
});


define("TimezoneUtils.controller", ["exports", "@outsystems/runtime-core-js", "TimezoneUtils.model"], function(exports, OSRuntimeCore, TimezoneUtilsModel) {
    var OS = OSRuntimeCore;
    var TimezoneUtilsController = exports;
    class Controller extends
    OS.Controller.BaseModuleController {
        constructor(model, messagesProvider, idService, translationResources) {
            super(model, messagesProvider, idService, translationResources);
        }

        get clientActionProxies() {
            if (!(this.hasOwnProperty("_clientActionProxies"))) {
                this._clientActionProxies = {};
            }

            return this._clientActionProxies;
        }
        set clientActionProxies(value) {
            this._clientActionProxies = value;
        }


        get roles() {
            if (!(this.hasOwnProperty("_roles"))) {
                this._roles = {};
            }

            return this._roles;
        }
        set roles(value) {
            this._roles = value;
        }

        get defaultTimeout() {
            if (!(this.hasOwnProperty("_defaultTimeout"))) {
                this._defaultTimeout = 10;
            }

            return this._defaultTimeout;
        }
        set defaultTimeout(value) {
            this._defaultTimeout = value;
        }

        getDefaultTimeout() {
            return TimezoneUtilsController.default.defaultTimeout;
        }

    }

    TimezoneUtilsController.default = new Controller();
});