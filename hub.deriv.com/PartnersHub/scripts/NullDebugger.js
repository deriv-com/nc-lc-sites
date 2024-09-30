(function(global, factory) {
    if (typeof define === "function" && define.amd) {
        define("@outsystems/runtime-core-js/debugger", ["exports", "@outsystems/runtime-core-js"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("@outsystems/runtime-core-js"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.runtimeCoreJs);
        global.outsystemsRuntimeCoreJsDebugger = mod.exports;
    }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function(_exports, _runtimeCoreJs) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.Version = _exports.NullDebugger = void 0;
    var BreakpointType;
    (function(BreakpointType) {
        BreakpointType[BreakpointType["Normal"] = 0] = "Normal";
        BreakpointType[BreakpointType["AtFunctionReturn"] = 1] = "AtFunctionReturn";
        BreakpointType[BreakpointType["BetweenAssignments"] = 2] = "BetweenAssignments";
    })(BreakpointType || (BreakpointType = {}));
    class NullDebugger {
        startSession() {}
        endSession() {}
        getThreadStack(callContextId) {
            return null;
        }
        addBreakpoint(breakpointId) {}
        addBreakpoints(breakpointIds) {}
        allowBreakpointsFromModule(key) {}
        removeBreakpoint(breakpointId) {}
        clearBreakpoints() {}
        continue (callContextId) {}
        continueToHere(breakpointId, callContextId) {}
        stepInto(callContextId) {}
        stepOver(callContextId) {}
        stepOut(callContextId) {}
        pauseOnAllExceptions(isEnabled) {}
        evaluateVariable(callContextId, stackLevel, actionKey, variableKey, path, depth) {
            return null;
        }
        get version() {
            return 0;
        }
        isSessionActive() {
            return false;
        }
        isPausedOnException() {
            return false;
        }
        getExceptionMessage(callContextId) {
            return null;
        }
        getThreadStartName(callContextId) {
            return null;
        }
        initialize(waitForClient) {
            return Promise.resolve();
        }
        registerMetaInfo(variablesMapping) {}
        getRequestHeaders(callContextId) {
            return null;
        }
        processResponseHeaders(callContextId, headers) {}
        setThreadStartName(callContextId, threadStartName) {}
        push(breakpointIdStr, moduleName, elementName, elementType, callContextId, varBag) {}
        pop(breakpointIdStr, callContextId) {}
        handleFunctionCall(functionCaller, resultType, callContextId) {
            return functionCaller();
        }
        handleBreakpoint(breakpointIdStr, callContextId, breakpointType, extraInfo) {
            BreakpointType.Normal;
            return true;
        }
        handleException(error, callContextId) {}
        parse(breakpointIdStr) {
            return null;
        }
        get BreakpointType() {
            return BreakpointType;
        }
    }
    _exports.NullDebugger = NullDebugger;
    const Version = _exports.Version = "6.19.2";
    _runtimeCoreJs.VersionDefinition.registerPackage("client-runtime-core", Version);
    const globalObj = typeof window !== "undefined" ? window : global;
    globalObj.OutSystemsDebugger = new NullDebugger();
});