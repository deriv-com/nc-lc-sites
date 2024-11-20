! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define("@outsystems/settings-js", ["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self)["@outsystems/settings-js"] = {})
}(this, (function(e) {
    "use strict";
    var t;
    e.FeatureKeys = void 0, (t = e.FeatureKeys || (e.FeatureKeys = {})).WebHttpClientForNative = "WebHttpClientForNative", t.OpenTelemetryTraces = "OpenTelemetryTraces", t.NoInstrumentationFactoryLogs = "NoInstrumentationFactoryLogs", t.WriteLogsOnConsoles = "WriteLogsOnConsoles", t.ServiceWorkerTraces = "ServiceWorkerTraces", t.EnableOTLV2TraceFormat = "EnableOTLV2TraceFormat";
    const r = {
        ServiceWorkerTraces: "true",
        EnableOTLV2TraceFormat: "true"
    };
    const o = function() {
            if ("undefined" != typeof window) return window;
            if ("undefined" != typeof global) return global;
            if ("undefined" != typeof globalThis) return globalThis;
            if ("undefined" != typeof self) return self;
            throw new Error("unable to locate global object")
        }().sessionStorage,
        n = [];
    class s {
        static readValue(e, t = o) {
            var r;
            return null !== (r = null == t ? void 0 : t.getItem(this.getFeatureKey(e))) && void 0 !== r ? r : void 0
        }
        static isEnabled(e, {
            featuresStorage: t = o,
            features: s = n,
            defaultValues: a = r
        } = {}) {
            var i;
            const l = a[e],
                u = null !== (i = this.readValue(e, t)) && void 0 !== i ? i : l,
                d = "true" === (null == u ? void 0 : u.toLowerCase()),
                f = d !== ("true" === (null == l ? void 0 : l.toLowerCase()));
            return f && !s.includes(e) ? (console.warn(`FeaturesManager: Experimental flag "${e}" is overridden with value "${u}"`), s.push(e)) : !f && s.includes(e) && s.splice(s.indexOf(e), 1), d
        }
    }
    s.getFeatureKey = e => `ft-${e}`;
    e.FeaturesManager = s, e.Version = "0.4.3", Object.defineProperty(e, "__esModule", {
        value: !0
    })
}));