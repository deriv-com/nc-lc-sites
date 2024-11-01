(function(global, factory) {
    if (typeof define === "function" && define.amd) {
        define("@outsystems/runtime-core-js", ["exports", "@outsystems/logger-js", "@outsystems/settings-js", "@outsystems/auth-js", "@outsystems/communication-js"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("@outsystems/logger-js"), require("@outsystems/settings-js"), require("@outsystems/auth-js"), require("@outsystems/communication-js"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.loggerJs, global.settingsJs, global.authJs, global.communicationJs);
        global.outsystemsRuntimeCoreJs = mod.exports;
    }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function(_exports, _loggerJs, _settingsJs, _authJs, _communicationJs) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.useVersionsManager = _exports.useSettingsManager = _exports.useBaseApplication = _exports.useAuthConfigsManager = _exports.runPreInitialization = _exports.runPostInitialization = _exports.WidgetNaming = _exports.WebSQLUtils = _exports.WebSQLSerializer = _exports.VersionDefinition = _exports.Version = _exports.Validation = _exports.UrlUtils = _exports.Transitions = _exports.TransitionAnimation = _exports.TableInfoUtils = _exports.SystemStructures = _exports.SystemActions = _exports.StringUtils = _exports.StorageProvider = _exports.SettingsNames = _exports.ServiceNames = _exports.ScriptsManager = _exports.ScreenStateCache = _exports.RequireManager = _exports.Public = _exports.Performance = _exports.ObjectExtensions = _exports.Navigation = _exports.NativeHelper = _exports.Model = _exports.MappingWithDefaultService = _exports.Logger = _exports.LocaleService = _exports.LightImmutable = _exports.LanguageResources = _exports.JSONUtils = _exports.Interfaces = _exports.Injector = _exports.IndexedDBUtils = _exports.IndexedDBSerializer = _exports.Format = _exports.Flow = _exports.FeedbackMessageService = _exports.Exceptions = _exports.EventDispatcher = _exports.ErrorScreen = _exports.ErrorHandling = _exports.Entities = _exports.DebuggerBase = _exports.DebuggerAPI = _exports.DataTypes = _exports.DataConversion = _exports.Controller = _exports.CommunicationHeaders = _exports.Communication = _exports.ClientVariables = _exports.BuiltinFunctions = _exports.Authorization = _exports.Authentication = _exports.ApplicationInfo = _exports.Application = void 0;

    function y(e, t, n, r) {
        var i,
            s = arguments.length,
            a = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
            for (var o = e.length - 1; o >= 0; o--)(i = e[o]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, n, a) : i(t, n)) || a);
        return s > 3 && a && Object.defineProperty(t, n, a), a;
    }

    function b(e, t, n, r) {
        return new(n || (n = Promise))(function(i, s) {
            function a(e) {
                try {
                    l(r.next(e));
                } catch (e) {
                    s(e);
                }
            }

            function o(e) {
                try {
                    l(r.throw(e));
                } catch (e) {
                    s(e);
                }
            }

            function l(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                    e(t);
                })).then(a, o);
            }
            l((r = r.apply(e, t || [])).next());
        });
    }

    function T(e, t, n, r) {
        if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
    }

    function w(e, t, n, r, i) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
    }
    var E;
    "function" == typeof SuppressedError && SuppressedError,
        function(e) {
            e[e.None = 0] = "None", e[e.Default = 1] = "Default", e[e.Fade = 2] = "Fade", e[e.SlideFromLeft = 3] = "SlideFromLeft", e[e.SlideFromRight = 4] = "SlideFromRight", e[e.SlideFromBottom = 5] = "SlideFromBottom", e[e.SlideFromTop = 6] = "SlideFromTop";
        }(E || (E = {}));
    var I = _exports.TransitionAnimation = Object.freeze({
        __proto__: null,
        get TransitionAnimation() {
            return E;
        }
    });
    const A = E;
    class N {
        constructor() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            this.name = e;
        }
    }
    const S = new N(),
        D = new N("fade"),
        R = new N("slide-from-left"),
        C = new N("slide-from-right"),
        x = new N("slide-from-bottom"),
        L = new N("slide-from-top");
    let O = new N();

    function _(e) {
        O = e;
    }

    function M(e, t) {
        if ("string" == typeof e) return new N(e);
        switch (e) {
            case A.None:
                return S;
            case A.Fade:
                return D;
            case A.SlideFromLeft:
                return R;
            case A.SlideFromRight:
                return C;
            case A.SlideFromBottom:
                return x;
            case A.SlideFromTop:
                return L;
            case A.Default:
                return O;
            default:
                return t;
        }
    }
    var U = _exports.Transitions = Object.freeze({
        __proto__: null,
        get Default() {
            return O;
        },
        Transition: N,
        TransitionAnimation: A,
        createTransition: M,
        reverseTransition: function(e) {
            if (!(null == e ? void 0 : e.name)) return new N("");
            switch (e.name) {
                case D.name:
                    return new N(D.name);
                case x.name:
                    return new N(L.name);
                case R.name:
                    return new N(C.name);
                case C.name:
                    return new N(R.name);
                case L.name:
                    return new N(x.name);
                default:
                    return new N(e.name + "-back");
            }
        },
        sanitizeTransition: function(e) {
            return new N(e ? e.name : "");
        },
        setDefaultTransition: _
    });
    const F = "";
    let $ = {
        applicationKey: F,
        applicationName: F,
        userProviderName: F,
        debugEnabled: !1,
        debugUseWebSockets: !1,
        homeModuleName: F,
        homeModuleKey: F,
        modules: {},
        homeModuleControllerName: F,
        homeModuleLanguageResourcesName: F,
        clientEntitiesModules: [],
        serverRequestTimeoutOverrideInSeconds: void 0,
        isWeb: !1,
        frontendBuildWorkerVersion: F,
        clientRuntimeVersion: F,
        appVersion: ""
    };

    function P(e) {
        $ = e;
    }

    function V() {
        return $.applicationKey;
    }

    function B() {
        return $.applicationName;
    }

    function k() {
        var e;
        return null !== (e = $.databaseName) && void 0 !== e ? e : "";
    }

    function z(e) {
        $.modules = e;
    }

    function H() {
        var e;
        return null !== (e = $.modules) && void 0 !== e ? e : {};
    }

    function j(e) {
        const t = $.modules;
        return !(null == t ? void 0 : t[e]) && t && (t[e] = {
            moduleName: null,
            homeScreenName: null,
            splashScreenName: null,
            screens: [],
            staticEntities: {}
        }), null == t ? void 0 : t[e];
    }

    function q(e) {
        return (null == e ? void 0 : e.homeScreenName) ? Z(e, e.homeScreenName) : (null == e ? void 0 : e.screens) && e.screens.length > 0 ? e.screens[0] : null;
    }

    function G() {
        return $.clientEntitiesModules;
    }

    function W() {
        return $.clientEntitiesModuleImporter;
    }

    function K(e) {
        $.clientEntitiesModules = e;
    }

    function J(e) {
        $.databaseName = e;
    }

    function Y() {
        return $.homeModuleName;
    }

    function X() {
        return $.homeModuleKey;
    }

    function Q() {
        if ($.homeModuleName && $.modules) {
            const e = $.modules[$.homeModuleKey];
            return e || null;
        }
        return null;
    }

    function Z(e, t) {
        for (const n of e.screens)
            if (n.screenName === t) return n;
        return null;
    }

    function ee() {
        return $.userProviderName;
    }

    function te() {
        var e;
        return null !== (e = $.debugEnabled) && void 0 !== e && e;
    }

    function ne() {
        var e;
        return null !== (e = $.debugUseWebSockets) && void 0 !== e && e;
    }

    function re() {
        return $.homeModuleControllerName;
    }

    function ie() {
        return $.homeModuleControllerImporter;
    }

    function se() {
        return $.homeModuleLanguageResourcesName;
    }

    function ae() {
        return $.homeModuleLanguageResourcesImporter;
    }

    function oe() {
        return $.serverRequestTimeoutOverrideInSeconds;
    }

    function le(e) {
        $.serverRequestTimeoutOverrideInSeconds = e;
    }

    function ue() {
        var e;
        return M(A[null !== (e = $.defaultTransition) && void 0 !== e ? e : A.None]);
    }

    function ce() {
        return $.errorPageConfig;
    }

    function de() {
        var e;
        return null !== (e = $.isWeb) && void 0 !== e && e;
    }

    function he() {
        var e;
        return null !== (e = $.frontendBuildWorkerVersion) && void 0 !== e ? e : F;
    }

    function ge() {
        var e;
        return null !== (e = $.clientRuntimeVersion) && void 0 !== e ? e : F;
    }

    function pe() {
        var e;
        return null !== (e = $.useESM) && void 0 !== e && e;
    }

    function fe() {
        let {
            applicationHomeModule: e = Y
        } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t, n;
        return `/${null !== (n = null === (t = ("undefined" != typeof window ? window : globalThis).OutSystemsApp) || void 0 === t ? void 0 : t.basePath) && void 0 !== n ? n : e()}/`.replace(/\/(\/)+/gm, "/");
    }

    function me() {
        let {
            windowLocation: e = window.location,
            applicationHomeModule: t = Y
        } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return `${e.protocol}//${e.host}${fe({
      applicationHomeModule: t
    })}`;
    }

    function ve() {
        return $.appVersion;
    }
    var ye = _exports.ApplicationInfo = Object.freeze({
        __proto__: null,
        debugUseWebSockets: ne,
        getAppUrl: me,
        getAppVersion: ve,
        getApplicationKey: V,
        getApplicationName: B,
        getBasePath: fe,
        getClientEntitiesModuleImporter: W,
        getClientEntitiesModules: G,
        getClientRuntimeVersion: ge,
        getDatabaseName: k,
        getDefaultModuleHomeScreenURL: function() {
            const e = Q(),
                t = q(e);
            return t ? `/${null == e ? void 0 : e.moduleName}/${t.screenUrl}` : null;
        },
        getDefaultTransition: ue,
        getErrorPageConfig: ce,
        getFrontendBuildWorkerVersion: he,
        getHomeModuleControllerImporter: ie,
        getHomeModuleControllerName: re,
        getHomeModuleDefinition: Q,
        getHomeModuleKey: X,
        getHomeModuleLanguageResourcesImporter: ae,
        getHomeModuleLanguageResourcesName: se,
        getHomeModuleName: Y,
        getHomeScreen: q,
        getModuleFromKey: j,
        getModules: H,
        getScreenDefinitionFromScreenName: Z,
        getScreensDefinition: function() {
            return $.screensDefinition;
        },
        getServerRequestTimeoutOverrideInSeconds: oe,
        getUserProviderName: ee,
        isDebugEnabled: te,
        isWebApplication: de,
        moduleBelongsToApp: function(e) {
            var t, n;
            const r = null !== (t = $.modules) && void 0 !== t ? t : {};
            return (null === (n = Object.keys(r).map(e => r[e]).filter(t => t.moduleName === e)[0]) || void 0 === n ? void 0 : n.ownerAppKey) === V();
        },
        setApplicationDefinition: P,
        setClientEntitiesModules: K,
        setDatabaseName: J,
        setModules: z,
        setServerRequestTimeoutOverrideInSeconds: le,
        useESM: pe
    });

    function be(e) {
        if ("undefined" == typeof require) throw new Error("requirejs is not defined");
        return require;
    }

    function Te(e) {
        return be().defined(e);
    }
    const we = new Proxy({}, {
            get: (e, t) => {
                var n, r;
                return null === (r = null === (n = be()) || void 0 === n ? void 0 : n.s) || void 0 === r ? void 0 : r[t];
            }
        }),
        Ee = "$";

    function Ie(e) {
        return e.filter(e => "string" == typeof e).length === e.length;
    }
    const Ae = new class {
        constructor() {
            this.scriptMap = {}, this.baseUrl = "";
        }
        setErrorHandler(e) {
            this.errorHandler = e;
        }
        loadModule(e, t, n) {
            return b(this, arguments, void 0, function(e, t, n) {
                var _this = this;
                let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e => import(e);
                return function*() {
                    var i;
                    try {
                        let n;
                        if (Ie(e)) n = e.map(e => {
                            var t;
                            return r(null !== (t = _this.scriptMap[e]) && void 0 !== t ? t : `${_this.baseUrl ? _this.baseUrl + "/" : ""}${e}`);
                        });
                        else {
                            if (! function(e) {
                                    return e.filter(e => "function" == typeof e).length === e.length;
                                }(e)) throw new Error("'moduleNames' must be either a list of module names or module loaders. The list contains mixed elements.");
                            n = e.map(e => e());
                        }
                        const i = yield Promise.all(n);
                        null == t || t(...i);
                    } catch (e) {
                        null === (i = null != n ? n : _this.errorHandler) || void 0 === i || i(e);
                    }
                }();
            });
        }
        configure(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "scripts";
            this.scriptMap = e, this.baseUrl = t;
        }
    }();

    function Ne() {
        pe() || Se();
    }

    function Se() {
        ! function() {
            var e;
            const t = null !== (e = we.contexts) && void 0 !== e ? e : {};
            Object.keys(t).forEach(e => {
                const n = t[e];
                if (!n._osNameToUrlPatched) {
                    const e = n.nameToUrl;
                    n.nameToUrl = function(t, r, i) {
                        return t.indexOf(Ee) > 0 && -1 === t.indexOf("?") && (t = t.split(Ee, 2)[0]), e.apply(n, [t, r, i]);
                    }, n._osNameToUrlPatched = !0;
                }
            });
        }();
    }

    function De(e) {
        pe() ? Ae.setErrorHandler(e) : function(e) {
            be().onError = e;
        }(e);
    }

    function Re(e, t, n) {
        let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : require;
        let i = arguments.length > 4 ? arguments[4] : undefined;
        var s;
        if (pe()) Ae.loadModule(e, t, n, i);
        else if (Ie(e)) r(e, t, n);
        else {
            const e = new Error("A list of module names is required when ESM is switched off. The list of modules to load contains other type of elements.");
            null === (s = null != n ? n : be().onError) || void 0 === s || s(e);
        }
    }

    function Ce(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "scripts";
        if (pe()) Ae.configure(e, t);
        else {
            const r = {
                baseUrl: t,
                paths: {},
                waitSeconds: 30
            };
            if (e) {
                for (const t in e) n = t, (be().specified(n) || Te(t)) && delete e[t];
                r.paths = e;
            }! function(e) {
                be().config(e);
            }(r), Se();
        }
        var n;
    }
    var xe = _exports.RequireManager = Object.freeze({
        __proto__: null,
        configure: Ce,
        initialize: Ne,
        loadModule: Re,
        setErrorHandler: De
    });
    const Le = new Map(),
        Oe = "Client Runtime Packages";
    let _e;

    function Me(e, t) {
        _e = null, Le.set(e, t);
    }
    const Ue = _ref => {
        let {
            versionsMap: e = Le,
            packageKey: t
        } = _ref;
        var n;
        return null !== (n = null == e ? void 0 : e.get(t)) && void 0 !== n ? n : null;
    };
    var Fe,
        $e = _exports.VersionDefinition = Object.freeze({
            __proto__: null,
            clientRuntimeKey: Oe,
            getPackageVersion: Ue,
            registerPackage: Me,
            toObject: function() {
                if (!_e) {
                    const e = {
                        "Client Runtime Packages": ""
                    };
                    Le.forEach((t, n) => {
                        t && n && (e[Oe] += `${n}= ${t};`);
                    }), _e = e;
                }
                return _e;
            }
        });
    ! function(e) {
        e[e.Persistent = 0] = "Persistent", e[e.Session = 1] = "Session";
    }(Fe || (Fe = {}));
    var Pe = Fe;
    class Ve {
        get length() {
            return Object.keys(this.storageObj).length;
        }
        clear() {
            this.storageObj = {};
        }
        getItem(e) {
            return this.storageObj.hasOwnProperty(e) ? this.storageObj[e] : null;
        }
        key(e) {
            const t = Object.keys(this.storageObj);
            return e < t.length ? t[e] : null;
        }
        removeItem(e) {
            this.storageObj.hasOwnProperty(e) && delete this.storageObj[e];
        }
        setItem(e, t) {
            this.storageObj[e] = t;
        }
        constructor(e) {
            if (this.storageObj = {}, e) {
                let t = 0,
                    n = e.key(t);
                for (; null !== n;) this.storageObj[n] = e.getItem(n), n = e.key(++t);
            }
        }
    }
    const Be = "$OS_";
    let ke = "OS";

    function ze() {
        return ke;
    }

    function He(e) {
        ke = e;
    }
    const je = "undefined" == typeof window ? void 0 : window.localStorage,
        qe = "undefined" == typeof window ? void 0 : window.sessionStorage,
        Ge = e => e === Pe.Persistent ? je : qe;
    let We = Je(Pe.Persistent) ? Ge(Pe.Persistent) : new Ve(),
        Ke = Je(Pe.Session) ? Ge(Pe.Session) : new Ve();

    function Je(e) {
        const t = Be + "test";
        try {
            const n = Ge(e);
            n.setItem(t, "1");
            const r = "1" === n.getItem(t);
            return n.removeItem(t), r;
        } catch (e) {
            return !1;
        }
    }

    function Ye() {
        return We;
    }

    function Xe() {
        return Ke;
    }
    const Qe = Object.freeze(Object());
    class Ze {
        constructor(e, t, n, r) {
            this.storageType = e, this.key = t, this.defaultValue = n, this.getStorageName = () => ze(), this.clearCache(), r && (this.getStorageName = r);
        }
        get() {
            return this.getValue();
        }
        set(e) {
            this.setValueInStorage(e);
        }
        remove() {
            this.storage.removeItem(this.storageKey), this.clearCache();
        }
        isDefined() {
            const e = this.storage.getItem(this.storageKey);
            return null != e && "undefined" !== e;
        }
        get storageKey() {
            return Be + this.getStorageName() + "$" + this.key;
        }
        get storage() {
            return this.storageType === Pe.Persistent ? Ye() : Xe();
        }
        getValue() {
            return this.cachedValue === Qe && (this.cachedValue = this.getValueFromStorage()), this.cachedValue;
        }
        getValueFromStorage() {
            const e = this.storage.getItem(this.storageKey);
            return null === e ? this.defaultValue : "undefined" === e || void 0 === e ? void 0 : JSON.parse(e);
        }
        setValueInStorage(e) {
            const t = this.storageKey,
                n = JSON.stringify(e),
                r = this.storage;
            if (!(null == r ? void 0 : r.setItem)) throw Error("The storage object for " + this.key + " is invalid.");
            try {
                r.setItem(t, n), this.cachedValue = e;
            } catch (e) {
                if (!((i = this.storageType) === Pe.Persistent && We !== je ? (console.warn("The localStorage is full... Proceding with a static Javascript object"), We = new Ve(We), 1) : i === Pe.Session && Ke !== qe && (console.warn("The sessionStorage is full... Proceding with a static Javascript object"), Ke = new Ve(Ke), 1))) throw e;
                this.storage.setItem(t, n);
            }
            var i;
        }
        clearCache() {
            this.cachedValue = Qe;
        }
    }
    var et,
        tt = _exports.StorageProvider = Object.freeze({
            __proto__: null,
            DummyStorage: Ve,
            StorageObject: Ze,
            StorageType: Pe,
            getDefaultStorageNamespace: ze,
            getPersistentStorage: Ye,
            getSessionStorage: Xe,
            setCustomPersistentStorage: function(e) {
                We = e;
            },
            setCustomSessionStorage: function(e) {
                Ke = e;
            },
            setDefaultStorageNamespace: He
        });
    class nt {
        constructor(e) {
            this._device = e;
        }
        get device() {
            return this._device;
        }
    }
    class rt {
        constructor(e, t, n, r, i, s, a, o) {
            this._platform = e, this._version = t, this._manufacturer = n, this._model = r, this._uuid = i, this._serial = s, this._cordova = a, this._isVirtual = o;
        }
        get platform() {
            return this._platform;
        }
        get version() {
            return this._version;
        }
        get manufacturer() {
            return this._manufacturer;
        }
        get model() {
            return this._model;
        }
        get uuid() {
            return this._uuid;
        }
        get serial() {
            return this._serial;
        }
        get cordova() {
            return this._cordova;
        }
        get isVirtual() {
            return this._isVirtual;
        }
    }! function(e) {
        function t(e) {
            if (e) return {
                platform: e.platform,
                version: e.version,
                manufacturer: e.manufacturer,
                model: e.model,
                uuid: e.uuid,
                serial: e.serial,
                cordova: e.cordova,
                isVirtual: e.isVirtual
            };
        }
        e.serializeClientInfo = function(e) {
            const n = function(e) {
                if (!e) return;
                return {
                    device: e.device ? t(e.device) : void 0
                };
            }(e);
            if (n) return JSON.stringify(n);
        }, e.deserializeClientInfo = function(e) {
            let t;
            try {
                t = JSON.parse(e);
            } catch (e) {}
            if (t) return function(e) {
                if (!e) return;
                return new nt(function(e) {
                    if (!e) return;
                    return new rt("string" == typeof e.platform ? e.platform : void 0, "string" == typeof e.version ? e.version : void 0, "string" == typeof e.manufacturer ? e.manufacturer : void 0, "string" == typeof e.model ? e.model : void 0, "string" == typeof e.uuid ? e.uuid : void 0, "string" == typeof e.serial ? e.serial : void 0, "string" == typeof e.cordova ? e.cordova : void 0, "boolean" == typeof e.isVirtual ? e.isVirtual : void 0);
                }(e.device));
            }(t);
        };
    }(et || (et = {}));
    const it = new Ze(Pe.Persistent, "ClientInfo");
    var st;

    function at(e, t) {
        let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        return t === st.Exception || e instanceof t && ("" === n || !!e.specificType && e.specificType === n);
    }

    function ot(e) {
        if (void 0 === e) return "";
        if (e instanceof Error) return e.message; {
            const t = e.toString();
            return "[object SQLError]" === t ? e.message.toString() : t;
        }
    }

    function lt(e) {
        return (void 0 !== e.extraStack ? e.extraStack + "\r\n " : "") + (e.stack || "") || "";
    }

    function ut(e) {
        var t, n, r;
        return {
            name: e.name,
            message: ot(e),
            stack: lt(e),
            extraStack: null !== (t = e.extraStack) && void 0 !== t ? t : void 0,
            errorCode: null !== (n = e.errorCode) && void 0 !== n ? n : "OS-CLRT-00000",
            category: null !== (r = e.category) && void 0 !== r ? r : void 0
        };
    }

    function ct(e) {
        return e.name ? e.specificType ? new st[e.name](e.specificType, e.message, e.extraStack, e.errorCode, e.category) : new st[e.name](e.message, e.extraStack, e.errorCode, e.category) : new st.Exception(e.message, e.extraStack, e.errorCode, e.category);
    }

    function dt(e) {
        return at(e, st.SystemException);
    }

    function ht(e) {
        return at(e, st.LicensingException);
    }! function(e) {
        e.CustomError = function(e) {
            const t = Error.call(this, e);
            "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf(t, this.constructor.prototype) : t.__proto__ = this.constructor.prototype, "stack" in this && "" !== this.stack || (Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = t.stack);
        }, e.CustomError.prototype = Error.prototype;
        class t extends e.CustomError {
            constructor(e, t, n, r) {
                super(null != e ? e : ""), this.extraStack = t, this.message = null != e ? e : "", this.name = "Exception", this.errorCode = n, this.category = r;
            }
        }
        e.Exception = t;
        e.ServerException = class extends t {
            constructor(e, t, n, r) {
                super(t, n, r), this.specificType = e, this.name = e;
            }
        };
        class n extends t {
            constructor(e, t, n, r) {
                super(t, n, r), this.specificType = e, this.name = e;
            }
        }
        e.DataBaseException = n;
        e.OpenDatabaseException = class extends n {
            constructor(e, t, n) {
                super("OpenDatabaseException", e, t, n);
            }
        };
        e.CommunicationException = class extends t {
            constructor(e, t, n, r) {
                super(e, t, n, r), this.name = "CommunicationException";
            }
        };
        e.NumberOverflowException = class extends t {
            constructor(e, t) {
                super(e, t), this.name = "NumberOverflowException";
            }
            valueOf() {
                return this.name + ": " + this.message;
            }
        };
        e.InvalidJavascriptType = class extends t {
            constructor(e, t) {
                super(e, t), this.name = "InvalidJavascriptType";
            }
            valueOf() {
                return this.name + ": " + this.message;
            }
        };
        class r extends t {
            constructor(e, t, n) {
                super(e, t, n), this.name = "SecurityException";
            }
        }
        e.SecurityException = r;
        e.InvalidLoginException = class extends r {
            constructor(e, t, n) {
                super(e, t, n), this.name = "InvalidLoginException";
            }
        };
        e.NotRegisteredException = class extends r {
            constructor(e, t, n, r) {
                super(t, n, r), this.specificType = e, this.name = e;
            }
        };
        class i extends t {
            constructor(e, t) {
                super(e, t), this.name = "SystemException";
            }
        }
        e.SystemException = i;
        class s extends i {
            constructor(e, t) {
                super(e, t), this.name = "IgnorableSystemException";
            }
        }
        e.IgnorableSystemException = s;
        e.ViewHasChangedException = class extends s {
            constructor(e, t) {
                super(e, t), this.name = "ViewHasChangedException";
            }
        };
        e.OutOfContextException = class extends s {
            constructor(e, t) {
                super(e, t), this.name = "OutOfContextException";
            }
        };
        e.RedirectOccurredException = class extends s {
            constructor(e, t) {
                super(e, t), this.name = "RedirectOccurredException";
            }
        };
        class a extends s {
            constructor(e, t) {
                super(e, t), this.name = "UnhandledOrIgnoredErrorInEventException";
            }
            get handleErrorResult() {
                return this._handleErrorResult;
            }
            static create(e, t, n) {
                const r = new a(t, n);
                return r._handleErrorResult = e, r;
            }
            static ignore(e) {
                if (!at(e, a)) throw e;
            }
        }
        e.UnhandledOrIgnoredErrorInEventException = a;
        e.AbortedRequestException = class extends s {
            constructor(e, t) {
                super(e, t), this.name = "AbortedRequestException";
            }
        };
        e.ApplicationBackendUnavailableException = class extends i {
            constructor(e, t) {
                super(e, t), this.name = "ApplicationBackendUnavailableException";
            }
        };
        e.LicensingException = class extends i {
            constructor(e, t) {
                super(e, t), this.name = "LicensingException";
            }
        };
        e.IncompatibleProducerException = class extends i {
            constructor(e, t) {
                super(e, t), this.name = "IncompatibleProducerException";
            }
        };
        e.ControllerDisposedException = class extends s {
            constructor(e, t) {
                super(e, t), this.name = "ControllerDisposedException";
            }
        };
        e.AbortActivityChangeException = class extends t {
            constructor(e, t, n) {
                super(e, t, n), this.name = "AbortActivityChangeException";
            }
        };
        e.UserException = class extends t {
            constructor(e, t, n, r, i) {
                super(t, n, r, i), this.specificType = e, this.name = e;
            }
        };
    }(st || (st = {}));
    var gt = _exports.Exceptions = Object.freeze({
        __proto__: null,
        get Exceptions() {
            return st;
        },
        getException: ct,
        getExceptionInfo: ut,
        getMessage: ot,
        getStack: lt,
        isApplicationOffline: ht,
        isInstanceOf: at,
        isSystem: dt
    });
    class pt {
        constructor(e) {
            this.returnValue = e;
        }
    }
    const ft = new Object(),
        mt = new Object();

    function vt(e) {
        const t = e;
        return t && "function" == typeof t.then && "function" == typeof t.catch;
    }

    function yt(e, t) {
        switch (t) {
            case mt:
                return e();
            case ft:
                return;
            default:
                return Promise.reject(t);
        }
    }

    function bt(e) {
        return e() ? Promise.resolve(void 0) : Et();
    }

    function Tt(e) {
        return new Promise(e);
    }

    function wt(e) {
        return Promise.resolve(e);
    }

    function Et() {
        return Promise.reject(ft);
    }

    function It(e) {
        return At(e);
    }

    function At(e, t) {
        let n, r;
        const i = () => {
                throw r;
            },
            s = () => {
                clearTimeout(t), t = window.setTimeout(i, 0);
            };

        function a(e, a) {
            return r ? a ? (clearTimeout(t), At(() => a(r))) : (s(), At(i, t)) : At(e ? () => e(n) : () => n);
        }
        try {
            n = e();
        } catch (e) {
            r = e, s();
        }
        return vt(n) ? n : {
            then: (e, t) => a(e, t),
            catch: e => a(void 0, e)
        };
    }

    function Nt(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e => Promise.reject(e);
        let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : () => Promise.resolve(void 0);
        return It(e).catch(t).then(e => It(n).then(t => null != t ? t : e), e => It(n).then(() => Promise.reject(e)));
    }

    function St(e, t) {
        return Nt(e, t, void 0);
    }

    function Dt(e, t) {
        return Nt(e, void 0, t);
    }

    function Rt(e, t) {
        return function n() {
            return bt(e).then(t).then(n, yt.bind(null, n));
        }();
    }
    const Ct = Rt.bind(null, () => !0);

    function xt(e) {
        return e instanceof pt ? e.returnValue : Promise.reject(e);
    }
    var Lt,
        Ot = _exports.Flow = Object.freeze({
            __proto__: null,
            breakAsync: Et,
            continueAsync: function() {
                return Promise.reject(mt);
            },
            doWhileAsync: function(e, t) {
                function n() {
                    return bt(e).then(r, yt.bind(null, r));
                }

                function r() {
                    return It(t).then(() => bt(e)).then(r, yt.bind(null, n));
                }
                return r();
            },
            executeAsyncFlow: function() {
                let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
                return It(e).catch(xt);
            },
            executeSequence: It,
            forEachAsync: function(e, t) {
                let n = 0;
                return Rt(() => n < e.length, () => {
                    const r = e[n++];
                    return t(r);
                });
            },
            isPromiseCompatible: vt,
            promise: Tt,
            resolve: wt,
            returnAsync: function(e) {
                return Promise.reject(new pt(e));
            },
            throwAsync: function(e) {
                return Promise.reject(e);
            },
            tryCatch: St,
            tryCatchFinally: Nt,
            tryFinally: Dt,
            whileAsync: Rt,
            whileTrueAsync: Ct
        });
    ! function(e) {
        e[e.No = 0] = "No", e[e.Yes = 1] = "Yes", e[e.YesIfEmpty = 2] = "YesIfEmpty";
    }(Lt || (Lt = {}));
    var _t,
        Mt = Lt;
    ! function(e) {
        e[e.TEXT = 0] = "TEXT", e[e.BINARY_DATA = 1] = "BINARY_DATA", e[e.BOOLEAN = 2] = "BOOLEAN", e[e.INTEGER = 3] = "INTEGER", e[e.LONGINTEGER = 4] = "LONGINTEGER", e[e.DECIMAL = 5] = "DECIMAL", e[e.DATE_TIME = 6] = "DATE_TIME", e[e.DATE = 7] = "DATE", e[e.TIME = 8] = "TIME", e[e.UNKNOWN = 9] = "UNKNOWN";
    }(_t || (_t = {}));
    var Ut,
        Ft,
        $t,
        Pt,
        Vt = _t;
    ! function(e) {
        var t;
        (t = e.InitializationType || (e.InitializationType = {}))[t.Full = 0] = "Full", t[t.Minimal = 1] = "Minimal";
    }(Ut || (Ut = {})),
    function(e) {
        e.AutoNumber = Mt, e.DBDataType = Vt;
    }(Ft || (Ft = {})),
    function(e) {
        var t;
        (t = e.DataFetchStatus || (e.DataFetchStatus = {}))[t.Fetching = 0] = "Fetching", t[t.Fetched = 1] = "Fetched", t[t.Error = 2] = "Error";
    }($t || ($t = {})),
    function(e) {
        ! function(e) {
            e[e.Info = 0] = "Info", e[e.Success = 1] = "Success", e[e.Warning = 2] = "Warning", e[e.Error = 3] = "Error";
        }(e.FeedbackMessageType || (e.FeedbackMessageType = {}));
    }(Pt || (Pt = {}));
    var Bt = _exports.Interfaces = Object.freeze({
        __proto__: null,
        get Application() {
            return Ut;
        },
        get ClientDB() {
            return Ft;
        },
        get FeedbackMessage() {
            return Pt;
        },
        get Model() {
            return $t;
        }
    });

    function kt(e, t) {
        void 0 === t && (t = {});
        for (var n = function(e) {
                for (var t = [], n = 0; n < e.length;) {
                    var r = e[n];
                    if ("*" !== r && "+" !== r && "?" !== r) {
                        if ("\\" !== r) {
                            if ("{" !== r) {
                                if ("}" !== r) {
                                    if (":" !== r) {
                                        if ("(" !== r) t.push({
                                            type: "CHAR",
                                            index: n,
                                            value: e[n++]
                                        });
                                        else {
                                            var i = 1,
                                                s = "";
                                            if ("?" === e[o = n + 1]) throw new TypeError('Pattern cannot start with "?" at '.concat(o));
                                            for (; o < e.length;)
                                                if ("\\" !== e[o]) {
                                                    if (")" === e[o]) {
                                                        if (0 == --i) {
                                                            o++;
                                                            break;
                                                        }
                                                    } else if ("(" === e[o] && (i++, "?" !== e[o + 1])) throw new TypeError("Capturing groups are not allowed at ".concat(o));
                                                    s += e[o++];
                                                } else s += e[o++] + e[o++];
                                            if (i) throw new TypeError("Unbalanced pattern at ".concat(n));
                                            if (!s) throw new TypeError("Missing pattern at ".concat(n));
                                            t.push({
                                                type: "PATTERN",
                                                index: n,
                                                value: s
                                            }), n = o;
                                        }
                                    } else {
                                        for (var a = "", o = n + 1; o < e.length;) {
                                            var l = e.charCodeAt(o);
                                            if (!(l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || 95 === l)) break;
                                            a += e[o++];
                                        }
                                        if (!a) throw new TypeError("Missing parameter name at ".concat(n));
                                        t.push({
                                            type: "NAME",
                                            index: n,
                                            value: a
                                        }), n = o;
                                    }
                                } else t.push({
                                    type: "CLOSE",
                                    index: n,
                                    value: e[n++]
                                });
                            } else t.push({
                                type: "OPEN",
                                index: n,
                                value: e[n++]
                            });
                        } else t.push({
                            type: "ESCAPED_CHAR",
                            index: n++,
                            value: e[n++]
                        });
                    } else t.push({
                        type: "MODIFIER",
                        index: n,
                        value: e[n++]
                    });
                }
                return t.push({
                    type: "END",
                    index: n,
                    value: ""
                }), t;
            }(e), r = t.prefixes, i = void 0 === r ? "./" : r, s = t.delimiter, a = void 0 === s ? "/#?" : s, o = [], l = 0, u = 0, c = "", d = function(e) {
                if (u < n.length && n[u].type === e) return n[u++].value;
            }, h = function(e) {
                var t = d(e);
                if (void 0 !== t) return t;
                var r = n[u],
                    i = r.type,
                    s = r.index;
                throw new TypeError("Unexpected ".concat(i, " at ").concat(s, ", expected ").concat(e));
            }, g = function() {
                for (var e, t = ""; e = d("CHAR") || d("ESCAPED_CHAR");) t += e;
                return t;
            }, p = function(e) {
                var t = o[o.length - 1],
                    n = e || (t && "string" == typeof t ? t : "");
                if (t && !n) throw new TypeError('Must have text between two parameters, missing text after "'.concat(t.name, '"'));
                return !n || function(e) {
                    for (var t = 0, n = a; t < n.length; t++) {
                        var r = n[t];
                        if (e.indexOf(r) > -1) return !0;
                    }
                    return !1;
                }(n) ? "[^".concat(Ht(a), "]+?") : "(?:(?!".concat(Ht(n), ")[^").concat(Ht(a), "])+?");
            }; u < n.length;) {
            var f = d("CHAR"),
                m = d("NAME"),
                v = d("PATTERN");
            if (m || v) {
                var y = f || ""; -
                1 === i.indexOf(y) && (c += y, y = ""), c && (o.push(c), c = ""), o.push({
                    name: m || l++,
                    prefix: y,
                    suffix: "",
                    pattern: v || p(y),
                    modifier: d("MODIFIER") || ""
                });
            } else {
                var b = f || d("ESCAPED_CHAR");
                if (b) c += b;
                else if (c && (o.push(c), c = ""), d("OPEN")) {
                    y = g();
                    var T = d("NAME") || "",
                        w = d("PATTERN") || "",
                        E = g();
                    h("CLOSE"), o.push({
                        name: T || (w ? l++ : ""),
                        pattern: T && !w ? p(y) : w,
                        prefix: y,
                        suffix: E,
                        modifier: d("MODIFIER") || ""
                    });
                } else h("END");
            }
        }
        return o;
    }

    function zt(e, t) {
        return function(e, t) {
            void 0 === t && (t = {});
            var n = jt(t),
                r = t.encode,
                i = void 0 === r ? function(e) {
                    return e;
                } : r,
                s = t.validate,
                a = void 0 === s || s,
                o = e.map(function(e) {
                    if ("object" == typeof e) return new RegExp("^(?:".concat(e.pattern, ")$"), n);
                });
            return function(t) {
                for (var n = "", r = 0; r < e.length; r++) {
                    var s = e[r];
                    if ("string" != typeof s) {
                        var l = t ? t[s.name] : void 0,
                            u = "?" === s.modifier || "*" === s.modifier,
                            c = "*" === s.modifier || "+" === s.modifier;
                        if (Array.isArray(l)) {
                            if (!c) throw new TypeError('Expected "'.concat(s.name, '" to not repeat, but got an array'));
                            if (0 === l.length) {
                                if (u) continue;
                                throw new TypeError('Expected "'.concat(s.name, '" to not be empty'));
                            }
                            for (var d = 0; d < l.length; d++) {
                                var h = i(l[d], s);
                                if (a && !o[r].test(h)) throw new TypeError('Expected all "'.concat(s.name, '" to match "').concat(s.pattern, '", but got "').concat(h, '"'));
                                n += s.prefix + h + s.suffix;
                            }
                        } else if ("string" != typeof l && "number" != typeof l) {
                            if (!u) {
                                var g = c ? "an array" : "a string";
                                throw new TypeError('Expected "'.concat(s.name, '" to be ').concat(g));
                            }
                        } else {
                            h = i(String(l), s);
                            if (a && !o[r].test(h)) throw new TypeError('Expected "'.concat(s.name, '" to match "').concat(s.pattern, '", but got "').concat(h, '"'));
                            n += s.prefix + h + s.suffix;
                        }
                    } else n += s;
                }
                return n;
            };
        }(kt(e, t), t);
    }

    function Ht(e) {
        return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }

    function jt(e) {
        return e && e.sensitive ? "" : "i";
    }

    function qt(e, t, n) {
        return function(e, t, n) {
            void 0 === n && (n = {});
            for (var r = n.strict, i = void 0 !== r && r, s = n.start, a = void 0 === s || s, o = n.end, l = void 0 === o || o, u = n.encode, c = void 0 === u ? function(e) {
                    return e;
                } : u, d = n.delimiter, h = void 0 === d ? "/#?" : d, g = n.endsWith, p = "[".concat(Ht(void 0 === g ? "" : g), "]|$"), f = "[".concat(Ht(h), "]"), m = a ? "^" : "", v = 0, y = e; v < y.length; v++) {
                var b = y[v];
                if ("string" == typeof b) m += Ht(c(b));
                else {
                    var T = Ht(c(b.prefix)),
                        w = Ht(c(b.suffix));
                    if (b.pattern) {
                        if (T || w) {
                            if ("+" === b.modifier || "*" === b.modifier) {
                                var E = "*" === b.modifier ? "?" : "";
                                m += "(?:".concat(T, "((?:").concat(b.pattern, ")(?:").concat(w).concat(T, "(?:").concat(b.pattern, "))*)").concat(w, ")").concat(E);
                            } else m += "(?:".concat(T, "(").concat(b.pattern, ")").concat(w, ")").concat(b.modifier);
                        } else {
                            if ("+" === b.modifier || "*" === b.modifier) throw new TypeError('Can not repeat "'.concat(b.name, '" without a prefix and suffix'));
                            m += "(".concat(b.pattern, ")").concat(b.modifier);
                        }
                    } else m += "(?:".concat(T).concat(w, ")").concat(b.modifier);
                }
            }
            if (l) i || (m += "".concat(f, "?")), m += n.endsWith ? "(?=".concat(p, ")") : "$";
            else {
                var I = e[e.length - 1],
                    A = "string" == typeof I ? f.indexOf(I[I.length - 1]) > -1 : void 0 === I;
                i || (m += "(?:".concat(f, "(?=").concat(p, "))?")), A || (m += "(?=".concat(f, "|").concat(p, ")"));
            }
            return new RegExp(m, jt(n));
        }(kt(e, n), 0, n);
    }

    function Gt(e, t, n) {
        return e instanceof RegExp ? function(e) {
            return e;
        }(e) : Array.isArray(e) ? function(e, t, n) {
            var r = e.map(function(e) {
                return Gt(e, t, n).source;
            });
            return new RegExp("(?:".concat(r.join("|"), ")"), jt(n));
        }(e, t, n) : qt(e, 0, n);
    }
    const Wt = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator;
            var t;
            return null !== (t = null == e ? void 0 : e.userAgent) && void 0 !== t ? t : "";
        },
        Kt = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalThis;
            return null != e ? e : t;
        };
    class Jt {
        constructor(e, t) {
            this._groups = e, this._index = t - this._groups[0].length;
        }
        get value() {
            return this._groups[0];
        }
        get index() {
            return this._index;
        }
        get length() {
            return this._groups[0].length;
        }
        get groups() {
            return this._groups;
        }
    }

    function Yt(e, t) {
        let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        const r = [],
            i = new RegExp(t, "g" + (n ? "i" : ""));
        let s = i.exec(e);
        for (; s;) r.push(new Jt(s, i.lastIndex)), s = i.exec(e);
        return r;
    }

    function Xt(e, t, n, r) {
        const i = Yt(e, t, n);
        let s = e,
            a = 0;
        for (let e = 0; e < i.length; e++) {
            const t = i[e],
                n = r(t);
            s = s.substr(0, t.index + a) + n + s.substr(a + t.index + t.length), a += n.length - t.length;
        }
        return s;
    }

    function Qt(e) {
        return e ? e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") : e;
    }
    const Zt = (e, t, n) => {
            if (t.toLowerCase() === n.toLowerCase()) return e;
            const r = new RegExp(`^${Qt(t)}`, "i");
            return e.replace(r, n);
        },
        en = (e, t) => `${e}${t}`,
        tn = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
            var t, n;
            return null !== (n = null === (t = null == e ? void 0 : e.location) || void 0 === t ? void 0 : t.href) && void 0 !== n ? n : "";
        },
        nn = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
            var t, n, r;
            return null !== (r = null === (n = null === (t = null == e ? void 0 : e.location) || void 0 === t ? void 0 : t.protocol) || void 0 === n ? void 0 : n.replace(/:/g, "")) && void 0 !== r ? r : "";
        },
        rn = e => e.replace(/([^:]\/)\/+/g, "$1"),
        sn = e => e.replace(/((outsystems|https|http):\/\/[^ ]*?)\?[^ ]*/g, "$1");
    var an = _exports.UrlUtils = Object.freeze({
        __proto__: null,
        buildURLFromVersionedResource: en,
        getCurrentUrl: tn,
        getHttpScheme: nn,
        removeQueryParametersFromUrls: sn,
        replaceBasePath: Zt,
        sanitizeUrl: rn
    });

    function on(e) {
        return !!(null == e ? void 0 : e.OutSystemsNative);
    }
    const ln = "Injector",
        un = {},
        cn = {};

    function dn(e, t) {
        try {
            pi(ln, `Registering ${e} service`);
            const n = t();
            return un[e] = n, e in cn && cn[e].forEach(t => t(e, n)), !0;
        } catch (t) {
            return mi(ln, `Failed to initialize ${e} service: ${t}`), !1;
        }
    }

    function hn(e) {
        return un[e];
    }
    const gn = _exports.Injector = {
        register: dn,
        unregister: function(e) {
            delete un[e];
        },
        resolve: hn,
        addRegistrationListener: function(e, t) {
            e in cn ? cn[e].push(t) : cn[e] = [t];
        },
        removeRegistrationListener: function(e, t) {
            e in cn && (cn[e] = cn[e].filter(e => e !== t));
        }
    };
    var pn;
    ! function(e) {
        e.DeviceHelperClassProvider = "DeviceHelperClassProvider", e.ClientVariablesService = "ClientVariablesService", e.TranslationsService = "TranslationsService", e.LocaleService = "LocaleService", e.EntityService = "EntityService", e.GlobalExceptionHandler = "GlobalExceptionHandler", e.SettingsManager = "SettingsManager", e.AuthConfigsManager = "AuthConfigsManager", e.Auth = "Auth", e.HttpClient = "HttpClient", e.UnauthenticatedHttpClient = "UnauthenticatedHttpClient", e.DebuggerHttpClient = "DebuggerHttpClient", e.NonDebuggerHttpClient = "NonDebuggerHttpClient", e.LoggerHttpClient = "LoggerHttpClient", e.NativeStatus = "NativeStatus", e.LifecycleEventsManager = "LifecycleEventsManager", e.Debugger = "Debugger", e.InstrumentationFactory = "InstrumentationFactory";
    }(pn || (_exports.ServiceNames = pn = {}));
    const fn = "NativeStatus";
    class mn {
        constructor() {
            let {
                win: e = window,
                isRunningOnNativeFn: t = bn,
                deviceReadyPromise: n = An
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.cachedReadyValue = null, this.win = e, this.isRunningOnNativeFn = t, this.deviceReadyPromise = n;
        }
        raiseCordovaNotLoadedError() {
            const t = "Running on native but cordova wasn't loaded";
            throw vi(fn, t, "OS-CLRT-00000", void 0, _loggerJs.Visibility.External), new Error(t);
        }
        ensureIsReady() {
            return b(this, void 0, void 0, function*() {
                return null === this.cachedReadyValue ? (pi(fn, "Waiting for 'deviceready' event"), this.isRunningOnNativeFn() ? void 0 === this.win.cordova ? (this.cachedReadyValue = !1, this.raiseCordovaNotLoadedError()) : (yield this.deviceReadyPromise(), this.cachedReadyValue = !0, !0) : (pi(fn, "'deviceready' event wait ignored"), this.cachedReadyValue = !0, !0)) : !!this.cachedReadyValue || this.raiseCordovaNotLoadedError();
            });
        }
    }
    const vn = "Android",
        yn = "iOS",
        bn = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator;
            return !(!e || !new RegExp("OutSystemsApp", "i").test(e.userAgent));
        },
        Tn = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
            var t;
            return null === (t = null == e ? void 0 : e.device) || void 0 === t ? void 0 : t.platform;
        },
        wn = function(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : bn;
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;
            return t() && Tn(n) === e;
        },
        En = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : bn;
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
            return wn(vn, e, t);
        },
        In = function(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
            return !!(null == n ? void 0 : n.addEventListener) && (n.addEventListener(e, t), !0);
        },
        An = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
            return new Promise((t, n) => {
                In("deviceready", () => t(), e) || t();
            });
        },
        Nn = () => {
            let e = gn.resolve(pn.NativeStatus);
            return e || (gn.register(pn.NativeStatus, () => new mn()), e = gn.resolve(pn.NativeStatus)), e.ensureIsReady();
        },
        Sn = function(e, t) {
            for (var _len = arguments.length, n = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                n[_key - 2] = arguments[_key];
            }
            return b(void 0, [e, t, ...n], void 0, function(e, t) {
                let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Nn;
                let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : In;
                return function*() {
                    yield n(), r(e, t);
                }();
            });
        },
        Dn = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : En;
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : navigator;
            return !!e() && (t.app.exitApp(), !0);
        },
        Rn = function() {
            for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                e[_key2] = arguments[_key2];
            }
            return b(void 0, [...e], void 0, function() {
                let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Nn;
                let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Cn;
                return function*() {
                    var n, r;
                    try {
                        yield e();
                        const i = t();
                        return null !== (r = null === (n = null == i ? void 0 : i.OutSystemsNative) || void 0 === n ? void 0 : n.OTLogger) && void 0 !== r ? r : null;
                    } catch (e) {
                        return console.error("Native is not ready", e), null;
                    }
                }();
            });
        },
        Cn = () => window;
    var xn = _exports.NativeHelper = Object.freeze({
        __proto__: null,
        addNativeEventListener: Sn,
        ensureNativeReady: Nn,
        exitApp: Dn,
        getNativeOTLogger: Rn,
        getPlatformName: Tn,
        isAndroid: En,
        isIOS: function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : bn;
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
            return wn(yn, e, t);
        },
        isRunningOnNative: bn,
        whenDeviceReady: An
    });
    const Ln = e => b(void 0, [e], void 0, function(_ref2) {
            let {
                url: e,
                redirectUri: t,
                w: n,
                awaitNative: r
            } = _ref2;
            return function*() {
                var i;
                const s = yield(e => b(void 0, [e], void 0, function(_ref3) {
                    let {
                        w: e = window,
                        awaitNative: t = Nn
                    } = _ref3;
                    return function*() {
                        if (yield t(), on(e) && e.OutSystemsNative.Auth) return e.OutSystemsNative.Auth;
                        throw new Error("Could not find the OSAuth plugin.");
                    }();
                }))({
                    w: n,
                    awaitNative: r
                });
                try {
                    return yield s.startFlow(e, t);
                } catch (e) {
                    throw vi("NativeAuthPlugin", null !== (i = e.message) && void 0 !== i ? i : "Error starting the external auth flow", "OS-CLRT-40100", e instanceof Error ? e : void 0), new Error("Error starting the external auth flow");
                }
            }();
        }),
        On = "Navigation",
        _n = new RegExp("/([^/]*)"),
        Mn = new RegExp(/\/(\/)+/gm),
        Un = 10,
        Fn = 1e3,
        $n = ["localhost", "10.0.2.2"],
        Pn = "POP",
        Vn = [],
        Bn = [],
        kn = new class {
            constructor() {
                this.stack = [], this.map = {}, this.counter = 0;
            }
            push(e) {
                const t = this.counter++;
                return this.stack.push(t), this.map[t] = e, t;
            }
            remove(e) {
                const t = this.stack.indexOf(e),
                    n = t > -1;
                return n && (this.stack.splice(t, 1), delete this.map[e]), n;
            }
            pop() {
                if (0 === this.stack.length) throw new Error("IndexedStack: pop from empty stack.");
                const e = this.stack.pop(),
                    t = this.map[e];
                return delete this.map[e], t;
            }
            clear() {
                this.stack = [], this.map = {};
            }
            get isEmpty() {
                return 0 === this.stack.length;
            }
        }();
    let zn;

    function Hn(e) {
        if (!jn(e)) throw new st.OutOfContextException();
    }

    function jn(e) {
        return !e || !e.isOutOfContext;
    }

    function qn(e) {
        if (e) throw new st.RedirectOccurredException();
    }

    function Gn(e) {
        Bn.push(e);
    }

    function Wn() {
        return Bn[Bn.length - 1];
    }

    function Kn() {
        return Bn.pop();
    }
    let Jn = !1,
        Yn = !1;

    function Xn() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        pi(On, "Next navigation will force a reload..."), Jn = !0, Yn = e;
    }
    let Qn = () => {
        const {
            protocol: e,
            pathname: t,
            href: n,
            search: r
        } = window.location;
        return {
            protocol: e,
            pathname: t,
            href: n,
            search: r,
            hostname: window.location.hostname || window.location.host.split(":")[0]
        };
    };
    const Zn = e => {
        if (void 0 === e) return null;
        return gr(window.location.search.substr(1))[e];
    };
    let er = function(e) {
            let {
                getLocation: t = Qn,
                getBasePath: n = fe
            } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            if (!("http:" === e.protocol || "https:" === e.protocol || "outsystems:" === e.protocol)) return !1;
            const r = t().hostname;
            if (r !== ("" !== e.hostname ? e.hostname : r)) return !1;
            const i = _n.exec(e.pathname);
            if (!i || i.length < 2) return !1;
            return new RegExp(`^${Qt(n())}`, "i").test(`${e.pathname}/`);
        },
        tr = function(e) {
            const t = document.createElement("a");
            return t.href = e, t;
        },
        nr = !1;

    function rr() {
        return nr;
    }
    let ir = function(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Kt();
        t && (e = ar(e));
        const i = sn(e);
        pi(On, `Reloading application with url: '${i}' (replace = ${n})`);
        const s = () => {
            n ? r.location.replace(e) : r.location.href = e;
        };
        return nr = !0, Ti().then(s).catch(s);
    };

    function sr() {
        return "undefined" != typeof window && window.location.search.indexOf("_ts") >= 0;
    }

    function ar(e) {
        const t = `${e.indexOf("?") < 0 ? "?" : "&"}_ts=${new Date().valueOf()}`,
            n = e.indexOf("#");
        return n >= 0 ? [e.slice(0, n), t, e.slice(n)].join("") : `${e}${t}`;
    }

    function or() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        const t = Ar();
        ir(t, e);
    }

    function lr() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        ir(Qn().href, e, !0);
    }

    function ur(e) {
        return kn.push(e);
    }

    function cr(e) {
        kn.remove(e);
    }

    function dr(e) {
        zn = e;
    }
    const hr = function(e) {
        let t,
            n = !1,
            r = "",
            i = e;
        const s = -1 !== e.indexOf(":") || 0 === e.indexOf("/"),
            a = i.indexOf("#"); -
        1 !== a && (t = i.substr(a + 1).trim(), i = i.substr(0, a));
        const o = i.indexOf("?");
        if (-1 !== o && (r = i.substr(o + 1).trim(), i = i.substr(0, o)), s) {
            const e = tr(i);
            n = er(e), n && (i = e.pathname);
        } else i = function(e) {
            return Ar(fe(), e);
        }(i), n = !0;
        return {
            url: e,
            isInternal: n,
            path: i,
            queryParams: gr(r),
            hash: t
        };
    };

    function gr(e) {
        const t = {};
        return e.length > 0 && e.split("&").forEach(e => {
            const n = e.split("=");
            if (2 === n.length) {
                const e = pr(n[0]),
                    r = pr(n[1]);
                t[e] = r;
            }
        }), t;
    }

    function pr(e) {
        return decodeURIComponent(e.replace(/\+/g, " "));
    }

    function fr(e, t, n) {
        return t.replace(/\/$/, "") === e || n.screens.some(n => Gt(Ar(t, n.screenUrl)).test(e));
    }

    function mr() {
        de() && window.stop && "complete" === document.readyState && (pi(On, "Stopping all currently pending resources."), window.stop());
    }

    function vr(t, n) {
        let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        let i = arguments.length > 3 ? arguments[3] : undefined;
        let s = arguments.length > 4 ? arguments[4] : undefined;
        if (Hn(r), function(t) {
                const n = new Date().getTime(),
                    r = n - Fn;
                for (; Vn.length > 0 && Vn[0].timestamp < r;) Vn.shift();
                if (Vn.reduce(function(e, n) {
                        return n.url === t ? e + 1 : e;
                    }, 0) < Un) return Vn.push({
                    timestamp: n,
                    url: t
                }), !1; {
                    const n = sn(t);
                    return fi(On, `Identified a recursive navigation to '${n}'.`, _loggerJs.Visibility.Internal), !0;
                }
            }(t)) throw Error("Too many redirects.");
        i || mr();
        const a = hr(t);
        if (Bn && Wn().goTo && a.isInternal) Wn().goTo(a, n, s);
        else {
            if (bn() && Jr({
                    url: t
                })) return function(e) {
                return b(this, void 0, void 0, function*() {
                    var t, n, r;
                    const i = null !== (t = e.queryParams.redirect_uri) && void 0 !== t ? t : e.queryParams.post_logout_redirect_uri;
                    if (!i) throw new Error("Can't perform an external login without a redirect URI");
                    const s = yield Ln({
                            url: e.url,
                            redirectUri: i
                        }),
                        [a] = i.split("?"),
                        o = fe(),
                        l = null !== (r = null === (n = a.match(new RegExp(`${o}.*`))) || void 0 === n ? void 0 : n[0]) && void 0 !== r ? r : "";
                    ir(s ? `${l}?${s}` : l);
                });
            }(a);
            ir(t);
        }
        qn(i);
    }

    function yr(e, t, n) {
        Hn(t), n || mr(), Bn && Wn().goBack ? Wn().goBack(e) : window.history.back(), qn(n);
    }

    function br(e, t, n) {
        Hn(t), n || mr(), Bn && Wn().goForward ? Wn().goForward(e) : window.history.forward(), qn(n);
    }

    function Tr(e, t, n) {
        return n + e.substring(t.length);
    }

    function wr() {
        const e = Qn();
        if ("http:" === e.protocol.toLocaleLowerCase()) {
            const t = e.hostname.toLocaleLowerCase();
            if (!$n.includes(t)) {
                const t = Tr(e.href, e.protocol, "https:");
                return ir(t, !1, !0), !0;
            }
            console.warn(On, `Accessing through http://${t} is not supported. Please access the application using the hostname instead.`);
        }
        return !1;
    }

    function Er(e) {
        return e.action.toUpperCase() === Pn;
    }

    function Ir(e) {
        return "" === e || null == e;
    }

    function Ar() {
        for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            e[_key3] = arguments[_key3];
        }
        return (0 === e.length ? fe() : "/" + e.join("/")).replace(Mn, "/");
    }
    var Nr;
    ! function(e) {
        let t = e => e;
        e.setUrlVersionProvider = function(e) {
            t = e;
        }, e.getVersionedUrl = function(e) {
            return t(e);
        };
    }(Nr || (Nr = {}));
    var Sr = _exports.Navigation = Object.freeze({
        __proto__: null,
        NAVIGATE_FROM_HISTORY_ACTION: Pn,
        NAVIGATE_TO_URL_ACTION: "PUSH",
        SCREEN_URL_PART_SEPARATOR: "-",
        get VersionedURL() {
            return Nr;
        },
        addInvalidationSuffixToUrl: ar,
        buildApplicationRelativeUrl: Ar,
        changeWindowLocation: ir,
        currentLocationHasTimestamp: sr,
        ensureRequestSecurity: wr,
        forceReloadOnNextNavigation: Xn,
        generateScreenURL: function(e, t, n) {
            let r,
                i = e,
                s = e;
            return "string" == typeof t ? (s = t, r = function(e, t, n) {
                const r = function(e, t) {
                        const n = kt(t);
                        return Object.keys(e).filter(e => !n.some(t => "string" != typeof t && t.name === e)).reduce((t, n) => (t[n] = e[n], t), {});
                    }(null != n ? n : {}, t),
                    i = (s = null != n ? n : {}, a = r, Object.keys(s).filter(e => "" !== s[e] && !(e in a)).reduce((e, t) => (e[t] = s[t], e), {}));
                var s, a;
                return function(e, t) {
                        const n = kt(t),
                            r = n.filter(e => "string" != typeof e && "?" === e.modifier).map(t => {
                                var n;
                                return {
                                    name: t.name,
                                    value: null !== (n = e[t.name]) && void 0 !== n ? n : ""
                                };
                            });
                        let i,
                            s = !1;
                        r.forEach(e => {
                            if (s && !Ir(e.value)) throw new Error(`Error processing optional parameters on path ${t}. The parameter ${i.name} has an empty value while ${e.name} has a non-empty value. All optional parameters before ${e.name} must have a value when ${e.name} has a value.`);
                            Ir(e.value) && (i = e, s = !0);
                        });
                    }(i, t),
                    function(e, t, n, r) {
                        const i = Object.keys(r).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(r[e])}`).join("&");
                        try {
                            const r = zt(t, {
                                encode: e => encodeURIComponent(e),
                                validate: !1
                            })(n);
                            return function(e, t) {
                                const n = fe(),
                                    r = t.replace(/^\//, ""),
                                    i = Y();
                                return e === i ? `${n}${r}` : `/${e}/${r}`;
                            }(e, `${r}${i.length > 0 ? `?${i}` : ""}`);
                        } catch (n) {
                            const r = new RegExp('^Expected "(.*)" to be a string$', "g").exec(n.message);
                            if (r) {
                                const i = r[1];
                                return void xi({
                                    category: e,
                                    errorCode: "OS-CLRT-00000",
                                    clientMessage: `Error building URL for ${t}. Parameter ${i} is missing or has an empty value`,
                                    internalMessage: `Error building URL: parameter ${i} is missing or has an empty value`,
                                    errorObj: n instanceof Error ? n : void 0
                                });
                            }
                            throw n;
                        }
                    }(e, t, i, r);
            }(i, s, n)) : (i = "", r = function(e, t) {
                const n = Object.keys(t).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&"),
                    r = `${e}${n.length > 0 ? `?${n}` : ""}`;
                return r;
            }(s, n = t)), r;
        },
        getCurrentLocation: Qn,
        getLocationFromUrl: tr,
        getNavigationCallbacks: Wn,
        getSearchParameterValue: Zn,
        getUrlInfo: hr,
        hasPendingReload: rr,
        isValidContext: jn,
        locationReachedFromHistory: Er,
        navigateBack: yr,
        navigateForward: br,
        navigateTo: vr,
        onBeforeNavigate: function(e, t) {
            if (! function(e) {
                    var t;
                    if (e && zn) try {
                        const n = (e, t, n) => vr(e, M(t, O), null, !1, n);
                        return null !== (t = zn(e, n)) && void 0 !== t && t;
                    } catch (e) {
                        const t = "Error while executing navigation callback";
                        return xi({
                            category: Y(),
                            errorCode: "OS-CLRT-00000",
                            clientMessage: t,
                            internalMessage: t,
                            errorObj: e instanceof Error ? e : void 0
                        }), !1;
                    }
                    return !0;
                }(e.pathname + e.search)) return !1;
            const n = Jn;
            if (Jn && (Jn = !1), t && !kn.isEmpty) {
                return St(kn.pop(), e => {
                    vi(Y(), "Error while navigating back without an empty stack", "OS-CLRT-00000", e);
                }), !1;
            }
            const r = Er(e);
            if (r || n) {
                const t = hr(e.pathname),
                    i = H(),
                    s = fe();
                let a;
                if (t.isInternal) {
                    a = !0;
                    for (const e in i)
                        if (i.hasOwnProperty(e)) {
                            const n = t.url.replace(/\/$/, ""),
                                r = i[e];
                            if (fr(n, Ar(s), r) || r.moduleName !== Y() && r.moduleName && fr(n, r.moduleName, r)) {
                                a = !1;
                                break;
                            }
                        }
                } else a = !1;
                if (n || a) {
                    let t;
                    if (a) t = Ar();
                    else {
                        const n = e.search || "";
                        t = s === e.pathname && "" === n ? /\/$/.test(e.pathname) ? e.pathname : `${e.pathname}/` : e.pathname + n;
                    }
                    return ir(t, Yn, r), !a;
                }
            }
            return kn.clear(), !0;
        },
        registerBackNavigationHandler: ur,
        registerNavigationHandler: dr,
        reloadApplication: or,
        reloadCurrentLocation: lr,
        removeNavigationCallbacks: Kn,
        resetReloadState: function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            Jn = e, Yn = t;
        },
        setNavigationCallbacks: Gn,
        switchUrlProtocol: Tr,
        throwRedirectOccurredExceptionIfNeeded: qn,
        unregisterBackNavigationHandler: cr,
        urlBelongsToCurrentApplication: er,
        urlBelongsToPrefix: fr,
        validateContext: Hn,
        willReloadInNextNavigation: function() {
            return Jn;
        }
    });

    function Dr() {
        var e;
        const t = window;
        if (null === (e = null == t ? void 0 : t.OutSystemsNative) || void 0 === e ? void 0 : e.ApplicationInfo) return t.OutSystemsNative.ApplicationInfo;
    }
    const Rr = "Authentication",
        Cr = "_RedirectLogin",
        xr = "_RedirectLogout",
        Lr = e => b(void 0, [e], void 0, function(_ref4) {
            let {
                path: e,
                params: t = {
                    isRunningOnNative: bn,
                    getAppUrl: me,
                    getHost: () => {
                        var e;
                        return null === (e = null === window || void 0 === window ? void 0 : window.location) || void 0 === e ? void 0 : e.host;
                    },
                    getPlatform: () => Tn(),
                    getPackageId: () => b(void 0, void 0, void 0, function*() {
                        return (yield function() {
                            for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                                e[_key4] = arguments[_key4];
                            }
                            return b(void 0, [...e], void 0, function() {
                                let {
                                    nativeReady: e = Nn,
                                    nativeApplicationInfo: t = Dr
                                } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                                return function*() {
                                    return yield e(), new Promise((e, n) => {
                                        const r = t();
                                        return r ? r.getAppPackageIdentifier(e, n) : n(new Error("NativeAppInfo API is not available"));
                                    });
                                }();
                            });
                        }()).toLowerCase();
                    }),
                    getBasePath: fe
                }
            } = _ref4;
            return function*() {
                var n, r, i, s, a;
                if (t.isRunningOnNative()) {
                    const a = yield null === (n = t.getPackageId) || void 0 === n ? void 0 : n.call(t),
                        o = null === (r = t.getHost) || void 0 === r ? void 0 : r.call(t),
                        l = null === (i = t.getPlatform) || void 0 === i ? void 0 : i.call(t),
                        u = null === (s = t.getBasePath) || void 0 === s ? void 0 : s.call(t);
                    if (!a) throw new Error("Could not get the package id");
                    if (!o) throw new Error("Could not get host name");
                    if (!l) throw new Error("Could not get the platform");
                    if (!u) throw new Error("Could not get the base path");
                    return rn(`${a}://${o}/${l}/${u}/${e}`);
                } {
                    const n = null === (a = t.getAppUrl) || void 0 === a ? void 0 : a.call(t);
                    if (!n) throw new Error("Could not get the application url");
                    return rn(`${n}/${e}`);
                }
            }();
        }),
        Or = e => b(void 0, void 0, void 0, function*() {
            return Lr({
                path: Cr,
                params: e
            });
        }),
        _r = e => b(void 0, void 0, void 0, function*() {
            return Lr({
                path: xr,
                params: e
            });
        }),
        Mr = e => b(void 0, void 0, void 0, function*() {
            var t, {
                callbackUrl: n = "",
                redirectUrlParams: r,
                redirectUri: i = Or(r),
                authConfigs: s,
                auth: a = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.External, s),
                actionName: l = "getExternalLoginUrl"
            } = void 0 === e ? {} : e;
            try {
                if (pi(Rr, "Retrieving the external login url."), !a) throw Yr(l);
                const e = Xr(l, a),
                    t = yield i;
                return e.getLoginUrl({
                    redirectUri: t,
                    callbackUrl: n
                });
            } catch (e) {
                throw vi(Rr, "Error retrieving the external login url.", "OS-CLRT-40100", e), e;
            }
        }),
        Ur = e => b(void 0, void 0, void 0, function*() {
            var t, {
                callbackUrl: n = "",
                redirectUrlParams: r,
                redirectUri: i = Or(r),
                auth: s = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.External),
                actionName: a = "externalLogin"
            } = void 0 === e ? {} : e;
            try {
                if (pi(Rr, "External login flow started."), !s) throw Yr(a);
                const e = Xr(a, s),
                    t = yield i;
                yield e.login({
                    redirectUri: t,
                    callbackUrl: n,
                    navigationHandler: vr
                });
            } catch (e) {
                throw vi(Rr, "Error in the external login flow.", "OS-CLRT-40100", e), new st.InvalidLoginException("Login Failed", lt(e));
            }
        }),
        Fr = e => b(void 0, void 0, void 0, function*() {
            var t,
                n, {
                    username: r,
                    password: i,
                    persistLogin: s,
                    auth: a = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.Builtin),
                    actionName: l = "builtinLogin"
                } = e;
            try {
                if (pi(Rr, "Builtin login flow started."), !a) throw Yr(l);
                return yield Qr(l, a).login({
                    username: r,
                    password: i,
                    persistLogin: s
                });
            } catch (e) {
                throw vi(Rr, "Error in the builtin login flow.", null !== (n = e.errorCode) && void 0 !== n ? n : "OS-CLRT-40100", e), e;
            }
        }),
        $r = e => b(void 0, void 0, void 0, function*() {
            var t, {
                callbackUrl: n = "",
                redirectUrlParams: r,
                redirectUri: i = _r(r),
                auth: s = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance(),
                actionName: a = "logout"
            } = void 0 === e ? {} : e;
            try {
                if (pi(Rr, "Logout flow started."), !s) throw Yr(a);
                const e = yield i;
                yield Qr(a, s, "Use GetExternalLogoutURL instead.").logout({
                    redirectUri: e
                });
            } catch (e) {
                throw vi(Rr, "Error in the logout flow.", "OS-CLRT-40100", e), e;
            }
        }),
        Pr = e => b(void 0, void 0, void 0, function*() {
            var t, {
                callbackUrl: n = "",
                redirectUrlParams: r,
                redirectUri: i = _r(r),
                auth: s = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.External),
                actionName: a = "getExternalLogoutUrl"
            } = void 0 === e ? {} : e;
            try {
                if (pi(Rr, "Retrieving the external logout url."), !s) throw Yr(a);
                const e = yield i;
                return yield Xr(a, s).getLogoutUrl({
                    redirectUri: e,
                    callbackUrl: n
                });
            } catch (e) {
                throw vi(Rr, "Error retrieving the external logout url.", "OS-CLRT-40100", e), e;
            }
        }),
        Vr = e => b(void 0, void 0, void 0, function*() {
            var t, {
                auth: n = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance()
            } = void 0 === e ? {} : e;
            try {
                if (pi(Rr, "Refresh flow started."), !n) throw Yr("refreshTokens");
                yield n.refreshTokens();
            } catch (e) {
                throw vi(Rr, "Error in the refresh flow.", "OS-CLRT-40103", e), e;
            }
        }),
        Br = e => {
            var t,
                n, {
                    auth: r = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance()
                } = void 0 === e ? {} : e;
            return null !== (n = null == r ? void 0 : r.getUserId()) && void 0 !== n ? n : "";
        },
        kr = e => {
            var t,
                n, {
                    auth: r = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance()
                } = void 0 === e ? {} : e;
            return null !== (n = null == r ? void 0 : r.isAuthenticated()) && void 0 !== n && n;
        },
        zr = e => {
            var t, {
                auth: n = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.Builtin),
                actionName: r = "getPasswordComplexityPolicy"
            } = void 0 === e ? {} : e;
            try {
                if (!n) throw Yr(r);
                return Qr(r, n).getPasswordComplexityPolicy();
            } catch (e) {
                throw vi(Rr, "Error getting the password complexity policy", "OS-CLRT-40100", e), e;
            }
        },
        Hr = e => {
            var t, {
                password: n,
                auth: r = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.Builtin),
                actionName: i = "validatePasswordComplexity"
            } = e;
            try {
                if (!r) throw Yr("validatePasswordComplexity");
                return Qr(i, r).validatePasswordComplexityPolicy(n);
            } catch (e) {
                throw vi(Rr, "Error validating the password complexity", "OS-CLRT-40100", e), e;
            }
        },
        jr = e => b(void 0, void 0, void 0, function*() {
            var t, {
                username: n,
                resetToken: r,
                newPassword: i,
                auth: s = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.Builtin),
                actionName: a = "finishResetPassword"
            } = e;
            try {
                if (!s) throw Yr(a);
                return yield Qr(a, s).finishResetPassword({
                    username: n,
                    resetToken: r,
                    newPassword: i
                });
            } catch (e) {
                throw vi(Rr, "Error finishing reset password", "OS-CLRT-40100", e), e;
            }
        }),
        qr = e => {
            var t, {
                auth: n = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance(),
                actionName: r = "isExternalUser"
            } = void 0 === e ? {} : e;
            try {
                if (!n) throw Yr(r);
                return n.isExternalUser();
            } catch (e) {
                throw vi(Rr, "Error determining if user is external", "OS-CLRT-40100", e), e;
            }
        },
        Gr = e => b(void 0, void 0, void 0, function*() {
            var t, {
                username: n,
                password: r,
                temporaryPassword: i,
                auth: s = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.Builtin),
                actionName: a = "finishUserRegistration"
            } = e;
            try {
                if (!s) throw Yr(a);
                return yield Qr(a, s).confirmRegistration({
                    username: n,
                    password: r,
                    code: i
                });
            } catch (e) {
                throw vi(Rr, "Error completing user registration", "OS-CLRT-40100", e), e;
            }
        }),
        Wr = e => b(void 0, void 0, void 0, function*() {
            var t, {
                username: n,
                oldPassword: r,
                newPassword: i,
                auth: s = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.Builtin),
                actionName: a = "changePassword"
            } = e;
            try {
                if (!s) throw Yr("changePassword");
                return yield Qr(a, s).changePassword({
                    username: n,
                    oldPassword: r,
                    newPassword: i
                });
            } catch (e) {
                throw vi(Rr, "Error changing password", "OS-CLRT-40100", e), e;
            }
        }),
        Kr = e => b(void 0, void 0, void 0, function*() {
            var t, {
                auth: n = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance(),
                actionName: r = "getUserProfile"
            } = void 0 === e ? {} : e;
            try {
                if (!n) throw Yr(r);
                return yield n.getUserInfo();
            } catch (e) {
                throw vi(Rr, "Error getting user profile", "OS-CLRT-40100", e), e;
            }
        }),
        Jr = e => {
            var t,
                n, {
                    url: r,
                    auth: i = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance(),
                    actionName: s = "isAuthEndpoint"
                } = e;
            try {
                return null !== (n = null == i ? void 0 : i.isAuthEndpoint(r)) && void 0 !== n && n;
            } catch (e) {
                throw vi(Rr, "Error checking if a url corresponds to an auth endpoint", "OS-CLRT-40100", e), e;
            }
        },
        Yr = t => {
            const n = `Error '${t}': User is not authenticated.`,
                r = new Error(n);
            return vi(Rr, n, "OS-CLRT-40100", r, _loggerJs.Visibility.External), r;
        },
        Xr = (t, n, r) => {
            if (!(e => void 0 !== e.resumeLogin)(n)) {
                const n = `Error '${t}': only supported for external authentication. ${r}`,
                    i = new Error(n);
                throw vi(Rr, n, "OS-CLRT-40100", i, _loggerJs.Visibility.External), i;
            }
            return n;
        },
        Qr = (t, n, r) => {
            if (!(e => void 0 !== e.finishResetPassword)(n)) {
                const n = `Error '${t}': only supported for builtin authentication. ${r}`,
                    i = new Error(n);
                throw vi(Rr, n, "OS-CLRT-40100", i, _loggerJs.Visibility.External), i;
            }
            return n;
        };
    var Zr,
        ei = _exports.Authentication = Object.freeze({
            __proto__: null,
            LOGIN_REDIRECT_PATH: Cr,
            LOGOUT_REDIRECT_PATH: xr,
            builtinLogin: Fr,
            changePassword: Wr,
            externalLogin: Ur,
            finishResetPassword: jr,
            finishUserRegistration: Gr,
            getExternalLoginUrl: Mr,
            getExternalLogoutUrl: Pr,
            getPasswordComplexityPolicy: zr,
            getUserId: Br,
            getUserProfile: Kr,
            isAuthEndpoint: Jr,
            isAuthenticated: kr,
            isExternalUser: qr,
            logout: $r,
            refreshTokens: Vr,
            resetPassword: e => b(void 0, void 0, void 0, function*() {
                var t, {
                    username: n,
                    resetToken: r,
                    newPassword: i,
                    auth: s = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.Builtin),
                    actionName: a = "resetPassword"
                } = e;
                try {
                    if (!s) throw Yr(a);
                    return yield Qr(a, s).resetPassword({
                        username: n,
                        resetToken: r,
                        newPassword: i
                    });
                } catch (e) {
                    throw vi(Rr, "Error resetting password", "OS-CLRT-40100", e), e;
                }
            }),
            resumeLogin: e => b(void 0, void 0, void 0, function*() {
                var t, {
                    url: n,
                    redirectUrlParams: r,
                    redirectUri: i = Or(r),
                    auth: s = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.External),
                    actionName: a = "resumeLogin"
                } = e;
                try {
                    if (pi(Rr, "Login flow resumed."), !s) throw Yr(a);
                    const e = yield i;
                    return yield Xr(a, s).resumeLogin({
                        url: n,
                        redirectUri: e
                    });
                } catch (e) {
                    throw vi(Rr, "Error while resuming login.", "OS-CLRT-40100", e), new st.InvalidLoginException("Login Failed", lt(e));
                }
            }),
            resumeLogout: e => b(void 0, void 0, void 0, function*() {
                var t, {
                    url: n,
                    auth: r = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.External),
                    actionName: i = "resumeLogout"
                } = e;
                try {
                    if (pi(Rr, "Logout flow resumed."), !r) throw Yr("resumeLogout");
                    return yield Xr(i, r).resumeLogout({
                        url: n
                    });
                } catch (e) {
                    throw vi(Rr, "Error while resuming logout.", "OS-CLRT-40100", e), new st.InvalidLoginException("Logout Failed", lt(e));
                }
            }),
            sendResetPasswordEmail: e => b(void 0, void 0, void 0, function*() {
                var t, {
                    username: n,
                    auth: r = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.Builtin),
                    actionName: i = "sendResetPasswordEmail"
                } = e;
                try {
                    if (!r) throw Yr(i);
                    return yield Qr(i, r).sendResetPasswordEmail({
                        username: n
                    });
                } catch (e) {
                    throw vi(Rr, "Error sending reset password email", "OS-CLRT-40100", e), e;
                }
            }),
            updateUser: e => b(void 0, void 0, void 0, function*() {
                var t, {
                    username: n,
                    name: r,
                    pictureUrl: i,
                    auth: s = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.Builtin),
                    actionName: a = "updateUser"
                } = e;
                try {
                    if (!s) throw Yr(a);
                    return yield Qr(a, s).updateUser({
                        username: n,
                        name: r,
                        pictureUrl: i
                    });
                } catch (e) {
                    throw vi(Rr, "Error updating user", "OS-CLRT-40100", e), e;
                }
            }),
            validatePasswordComplexity: Hr
        });

    function ti() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Kt;
        var t;
        const n = e();
        return (null == n ? void 0 : n.cordova) && (null === (t = null == n ? void 0 : n.navigator) || void 0 === t ? void 0 : t.connection) ? "none" !== n.navigator.connection.type : n.navigator.onLine;
    }

    function ni(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
        t.addEventListener("online", e);
    }! function(e) {
        e.AuthNConfigs = "AuthNConfigs", e.ForceXhrCommunication = "ForceXhrCommunication", e.CanDisableAutoUpgrade = "CanDisableAutoUpgrade", e.LogLevel = "LogLevel", e.EnvironmentKey = "EnvironmentKey", e.TenantID = "TenantID", e.LoggerApiKey = "LoggerApiKey", e.LoggingTagID = "LoggingTagID", e.LoggerSchedulerTimeInterval = "LoggerSchedulerTimeInterval", e.EnableOpenTelemetryTraces = "EnableOpenTelemetryTraces", e.EnableSpanAggregation = "EnableSpanAggregation", e.HealthCheckInterval = "HealthCheckInterval";
    }(Zr || (_exports.SettingsNames = Zr = {}));
    const ri = {
            HealthCheckInterval: "1800",
            LogLevel: "Information"
        },
        ii = "os_default_id",
        si = "DEV_";

    function ai(e, t) {
        const n = function(e) {
            return Object.entries(e).reduce((e, _ref5) => {
                let [t, n] = _ref5;
                return t.startsWith(si) && "string" == typeof n && (e[t.replace(si, "")] = n), e;
            }, {});
        }(t);
        return Object.assign(Object.assign({}, e), n);
    }
    var oi;
    const li = "SettingsManager",
        ui = !1,
        ci = {
            Debug: _loggerJs.LogType.Debug,
            Information: _loggerJs.LogType.Info,
            Warning: _loggerJs.LogType.Warning,
            Error: _loggerJs.LogType.Error
        };
    class di {
        constructor() {
            let {
                getBasePath: e,
                httpClient: t = gn.resolve(pn.UnauthenticatedHttpClient),
                getAppKey: n = V,
                initialSettings: r = ri,
                settingsHash: i = "",
                overrideStorage: s = sessionStorage,
                cacheName: a = `${n()}-clientsettings`,
                cacheStorage: o = localStorage,
                onSettingsUpdated: l
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            oi.set(this, void 0), this.getBasePath = null != e ? e : () => fe(), this.httpClient = t, this.settingsValue = ai(r, s), this.settingsHash = i, this.overrideStorage = s, this.cacheName = a, this.cacheStorage = o, w(this, oi, l, "f");
        }
        update(e) {
            return b(this, void 0, void 0, function*() {
                var t, n;
                try {
                    if (!e || this.settingsHash !== e) {
                        const e = yield this.httpClient.get({
                            url: "/moduleservices/clientsettingsinfo",
                            baseURL: null === (t = this.getBasePath) || void 0 === t ? void 0 : t.call(this)
                        });
                        if (e) {
                            const {
                                clientSettingsHash: t,
                                clientSettings: r
                            } = e;
                            this.settingsHash = t;
                            const i = ai(r, this.overrideStorage);
                            this.settingsValue = Object.assign(Object.assign({}, this.settingsValue), i), this.cacheSettings(r), null === (n = T(this, oi, "f")) || void 0 === n || n.call(this, this);
                        } else this.fetchCachedSettings();
                    }
                } catch (e) {
                    vi(li, `Error retrieving settings from endpoint: ${e.message}`, "OS-CLRT-61001"), this.fetchCachedSettings();
                }
            });
        }
        settingExists(e) {
            return Object.keys(this.settingsValue).includes(e);
        }
        cacheSettings(e) {
            this.cacheStorage.setItem(this.cacheName, JSON.stringify(e));
        }
        fetchCachedSettings() {
            try {
                const e = this.cacheStorage.getItem(this.cacheName);
                if (e) {
                    pi(li, "Loading client settings from cache");
                    const t = ai(JSON.parse(e), this.overrideStorage);
                    this.settingsValue = Object.assign(Object.assign({}, this.settingsValue), t);
                } else mi(li, "No settings stored in cache, keeping previous values");
            } catch (e) {
                vi(li, "Error retrieving settings from cache, keeping previous values", "OS-CLRT-61000", e);
            }
        }
        readString(e) {
            var t;
            return this.settingExists(e) ? null !== (t = this.settingsValue[e]) && void 0 !== t ? t : "" : (pi(li, `Value for setting ${e} was not found.`), "");
        }
        readNumber(e) {
            var t;
            return this.settingExists(e) ? null !== (t = Number(this.settingsValue[e])) && void 0 !== t ? t : 0 : (pi(li, `Value for setting ${e} was not found.`), 0);
        }
        readBool(e) {
            var t;
            return this.settingExists(e) ? "true" === (null !== (t = this.settingsValue[e]) && void 0 !== t ? t : "false").toLowerCase() : (pi(li, `Value for setting ${e} was not found.`), ui);
        }
        readLogLevel() {
            const e = this.settingsValue.LogLevel,
                n = ci[e];
            return null != n ? n : _loggerJs.LogType.Info;
        }
    }
    oi = new WeakMap();
    const hi = function() {
            for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                e[_key5] = arguments[_key5];
            }
            return b(void 0, [...e], void 0, function() {
                let {
                    isRunningOnNative: e = bn(),
                    basePath: t = fe,
                    frontendBuildWorkerVersion: n = he,
                    getUserId: i = Br,
                    getLibVersion: s = Ue,
                    getHttpScheme: a = nn,
                    getUserAgent: o = Wt,
                    getCurrentUrl: l = tn,
                    getNativeLogger: u = Rn,
                    getDatabaseSuffix: c = V,
                    isOnlineMethod: d = ti,
                    httpClient: h = gn.resolve(pn.LoggerHttpClient)
                } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return function*() {
                    try {
                        const g = Object.assign(Object.assign({}, Si(i, s, n)), {
                                "http.scheme": a,
                                "http.url": l,
                                "http.user_agent": o
                            }),
                            p = new _loggerJs.InstrumentationFactory({
                                databaseNameSuffix: c(),
                                isOnline: d,
                                baseLogAttributes: g,
                                baseSpanAttributes: g,
                                staticSpanAttributes: ["http.scheme", "http.user_agent", "outsystems.client.runtime.core.version", "outsystems.client.runtime.widgets.version", "outsystems.client.runtime.reactview.version", "outsystems.compiler.version"]
                            });
                        gn.register(pn.InstrumentationFactory, () => p), yield p.init();
                        const f = ci[ri.LogLevel];
                        if (e) {
                            const e = yield u();
                            e && p.useNativeLoggerTransport({
                                plugin: e,
                                logTypeBaseline: f
                            });
                        } else p.useOpenTelemetryLoggerTransport({
                            resourceAttributes: {},
                            logTypeBaseline: f,
                            collectorBaseUrl: t(),
                            tagId: "",
                            httpClient: h
                        });
                        p.useConsoleLoggerTransport(f);
                    } catch (e) {
                        console.error("Error while initializing the logger.", e);
                    }
                }();
            });
        },
        gi = e => b(void 0, [e], void 0, function(_ref6) {
            let {
                version: e,
                getCurrentScreenName: t = () => "",
                applicationName: n = B,
                applicationKey: r = V,
                clientRuntimeVersion: i = ge,
                basePath: o = fe,
                getAppVersionMethod: l = ve,
                isWebApplication: u = de,
                usePwaServiceWorkerTracer: c = _settingsJs.FeaturesManager.isEnabled(_settingsJs.FeatureKeys.ServiceWorkerTraces),
                serviceWorkerContainer: d = navigator.serviceWorker,
                settingsManager: h = gn.resolve(pn.SettingsManager),
                instrumentationFactory: g = gn.resolve(pn.InstrumentationFactory),
                httpClient: p = gn.resolve(pn.LoggerHttpClient)
            } = _ref6;
            return function*() {
                try {
                    g || (yield hi(), g = gn.resolve(pn.InstrumentationFactory)), g.setAggregateSpansStatus(null == h ? void 0 : h.readBool("EnableSpanAggregation")), g.setLogLevel(null == h ? void 0 : h.readLogLevel());
                    const s = (null == h ? void 0 : h.readString("LoggingTagID")) || (null == h ? void 0 : h.readString("LoggerApiKey"));
                    g.setTagId(s), g.getTracer().addBaseSpanAttributes({
                        "outsystems.runtime.screen": t
                    });
                    const a = {
                        "service.name": "ClientRuntime",
                        "service.version": i(),
                        "outsystems.app.name": n(),
                        "outsystems.app.versiontoken": e,
                        "outsystems.app.key": r(),
                        "outsystems.env.key": null == h ? void 0 : h.readString("EnvironmentKey"),
                        "outsystems.tenant.key": null == h ? void 0 : h.readString("TenantID"),
                        "outsystems.app.version": l()
                    };
                    g.setResourceAttributes(a), u() && (null == h ? void 0 : h.readBool("EnableOpenTelemetryTraces")) && (c && void 0 !== d ? g.useServiceWorkerTracerTransport({
                        resourceAttributes: a,
                        collectorBaseUrl: o(),
                        tagId: s,
                        enabled: !0,
                        aggregateSpans: null == h ? void 0 : h.readBool("EnableSpanAggregation")
                    }) : g.useOpenTelemetryTracerTransport({
                        resourceAttributes: a,
                        collectorBaseUrl: o(),
                        tagId: s,
                        enabled: !0,
                        httpClient: p
                    }));
                    const f = null == h ? void 0 : h.readNumber("LoggerSchedulerTimeInterval");
                    f > 0 && Ei(f, g);
                } catch (e) {
                    console.error("Error while updating the logger configurations.", e);
                }
            }();
        }),
        pi = function(e, t, n, r) {
            for (var _len6 = arguments.length, i = new Array(_len6 > 4 ? _len6 - 4 : 0), _key6 = 4; _key6 < _len6; _key6++) {
                i[_key6 - 4] = arguments[_key6];
            }
            return b(void 0, [e, t, n, r, ...i], void 0, function(e, t, n, r) {
                let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : gn.resolve(pn.InstrumentationFactory);
                return function*() {
                    const s = Di(e),
                        a = Ri(t);
                    yi(i, null == i ? void 0 : i.logDebug, null != s ? s : "", null != a ? a : "") || (yield null == i ? void 0 : i.logDebug({
                        category: s,
                        message: Ri(t),
                        visibility: n,
                        attributes: r
                    }));
                }();
            });
        },
        fi = function(e, t, n, r) {
            for (var _len7 = arguments.length, i = new Array(_len7 > 4 ? _len7 - 4 : 0), _key7 = 4; _key7 < _len7; _key7++) {
                i[_key7 - 4] = arguments[_key7];
            }
            return b(void 0, [e, t, n, r, ...i], void 0, function(e, t, n, r) {
                let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : gn.resolve(pn.InstrumentationFactory);
                return function*() {
                    yi(i, null == i ? void 0 : i.logInfo, e, t) || (yield null == i ? void 0 : i.logInfo({
                        category: e,
                        message: t,
                        visibility: n,
                        attributes: r
                    }));
                }();
            });
        },
        mi = function(e, t, n, r) {
            for (var _len8 = arguments.length, i = new Array(_len8 > 4 ? _len8 - 4 : 0), _key8 = 4; _key8 < _len8; _key8++) {
                i[_key8 - 4] = arguments[_key8];
            }
            return b(void 0, [e, t, n, r, ...i], void 0, function(e, t, n, r) {
                let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : gn.resolve(pn.InstrumentationFactory);
                return function*() {
                    yi(i, null == i ? void 0 : i.logWarning, e, t) || (yield null == i ? void 0 : i.logWarning({
                        category: e,
                        message: t,
                        visibility: n,
                        attributes: r
                    }));
                }();
            });
        },
        vi = function(t, n, r, i, s, a) {
            for (var _len9 = arguments.length, o = new Array(_len9 > 6 ? _len9 - 6 : 0), _key9 = 6; _key9 < _len9; _key9++) {
                o[_key9 - 6] = arguments[_key9];
            }
            return b(void 0, [t, n, r, i, s, a, ...o], void 0, function(t, n, r, i, s, a) {
                let o = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : gn.resolve(pn.InstrumentationFactory);
                return function*() {
                    var l;
                    const {
                        error: u,
                        message: c
                    } = Ci(n, i);
                    if (!yi(o, null == o ? void 0 : o.logError, t, null != c ? c : "")) {
                        const n = ("OS-CLRT-00000" === r || null == r) && null !== (l = u.errorCode) && void 0 !== l ? l : r;
                        t = null != t ? t : u.category, at(u, st.UserException) && (s = _loggerJs.Visibility.Client), yield null == o ? void 0 : o.logError({
                            category: t,
                            message: c,
                            error: u,
                            errorCode: n,
                            visibility: s,
                            attributes: a
                        });
                    }
                }();
            });
        },
        yi = (e, t, n, r) => (!e && _settingsJs.FeaturesManager.isEnabled(_settingsJs.FeatureKeys.NoInstrumentationFactoryLogs) ? console.warn(`No instrumentation factory: ${n} - ${r}`) : !t && _settingsJs.FeaturesManager.isEnabled(_settingsJs.FeatureKeys.NoInstrumentationFactoryLogs) && console.warn(`Factory function not defined: ${n} - ${r}`), !e || !t),
        bi = function() {
            for (var _len10 = arguments.length, e = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
                e[_key10] = arguments[_key10];
            }
            return b(void 0, [...e], void 0, function() {
                let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : gn.resolve(pn.InstrumentationFactory);
                return function*() {
                    yield null == e ? void 0 : e.flushInstrumentationData();
                }();
            });
        },
        Ti = function() {
            for (var _len11 = arguments.length, e = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
                e[_key11] = arguments[_key11];
            }
            return b(void 0, [...e], void 0, function() {
                let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : gn.resolve(pn.InstrumentationFactory);
                return function*() {
                    yield null == e ? void 0 : e.flushLogs();
                }();
            });
        },
        wi = function(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : gn.resolve(pn.InstrumentationFactory);
            null == t || t.setLogLevel(e);
        },
        Ei = function(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : gn.resolve(pn.InstrumentationFactory);
            null == t || t.setSchedulerTimerInterval(e);
        };

    function Ii(e, t, n, r, i) {
        let s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : gn.resolve(pn.InstrumentationFactory);
        return s ? s.startActiveSpan(e, t, n, r, i) : t(void 0);
    }

    function Ai() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : gn.resolve(pn.InstrumentationFactory);
        const t = null == e ? void 0 : e.getActiveSpan();
        null == t || t.setAttribute(_loggerJs.KnownAttributes.IsNonAggregable, "true");
    }

    function Ni(e, t, n, r) {
        let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : gn.resolve(pn.InstrumentationFactory);
        return null == i ? void 0 : i.startSpan(e, t, n, r);
    }
    const Si = (e, t, n) => ({
            "enduser.id": e,
            "outsystems.client.runtime.core.version": () => {
                var e;
                return null !== (e = t({
                    packageKey: "client-runtime-core"
                })) && void 0 !== e ? e : "";
            },
            "outsystems.client.runtime.widgets.version": () => {
                var e;
                return null !== (e = t({
                    packageKey: "client-runtime-widgets"
                })) && void 0 !== e ? e : "";
            },
            "outsystems.client.runtime.reactview.version": () => {
                var e;
                return null !== (e = t({
                    packageKey: "client-runtime-view-framework-react"
                })) && void 0 !== e ? e : "";
            },
            "outsystems.compiler.version": () => {
                var e;
                return null !== (e = n()) && void 0 !== e ? e : "";
            }
        }),
        Di = e => {
            if (e) {
                if ("string" == typeof e) return e; {
                    const t = e.constructor.name;
                    return "Function" === t ? e.name : t;
                }
            }
        },
        Ri = e => {
            if (e) return "string" == typeof e ? e : e();
        },
        Ci = (e, t) => {
            const n = null != t ? t : "string" == typeof e ? new Error(e) : e;
            let r = t && "string" == typeof e ? e : void 0;
            return n.message === r && (r = void 0), {
                error: n,
                message: r
            };
        },
        xi = _ref7 => {
            let {
                category: t,
                errorCode: n,
                clientMessage: r,
                internalMessage: i,
                instrumentationFactory: s = gn.resolve(pn.InstrumentationFactory),
                errorObj: a,
                attributes: o
            } = _ref7;
            return Promise.all([vi(t, r, n, a, _loggerJs.Visibility.Client, o, s), vi(t, i, n, void 0, _loggerJs.Visibility.Internal, o, s)]);
        };
    var Li = _exports.Logger = Object.freeze({
        __proto__: null,
        clientError: xi,
        debug: pi,
        error: vi,
        flush: bi,
        flushLogs: Ti,
        log: fi,
        registerInstrumentationFactory: hi,
        setActiveSpanAsNonAggregable: Ai,
        setLogLevel: wi,
        setSchedulerTimerInterval: Ei,
        startActiveSpan: Ii,
        startSpan: Ni,
        updateInstrumentationFactory: gi,
        warning: mi
    });
    class Oi {
        constructor(e) {
            this.callback = e;
        }
    }
    class _i extends Oi {
        constructor(e) {
            super(e), this.callback = e;
        }
    }
    class Mi extends Oi {
        constructor(e) {
            super(e), this.callback = e;
        }
    }
    const Ui = "TxExecutor";
    class Fi {
        constructor(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            this.tx = e, this.allowTraces = t, this.chain = [], this.pendingResult = null, this.hasPendingResult = !1, this.pendingError = null, this.hasPendingError = !1, this.parent = null;
        }
        cloneForNext() {
            const e = new Fi(this.tx, this.allowTraces);
            return e.parent = this, e;
        }
        andThen(e) {
            return this.hasPendingError || (this.chain.push(new _i(e)), this.triggerPendingResults()), this;
        }
        withoutTraces(e) {
            return this.andThen((t, n) => (t.allowTraces = !1, e(t, n)));
        }
        andThenAll(e) {
            return this.andThen((t, n) => {
                const r = e(n);
                let i = t.feed(void 0);
                if (r)
                    for (let e = 0; e < r.length; e++) i = i.andThen(r[e]);
                return i.andThen(() => {});
            });
        }
        extractScalar(e) {
            const t = Object.keys(e);
            if (1 === t.length) {
                return e[t[0]];
            }
            throw new st.DataBaseException("", `Invalid use of 'extractScalar': the row should have a single column, but found '${t.join("', '")}'`);
        }
        executeScalar(e, t) {
            return this.executeQueryRaw(e, t).andThen((e, t) => 0 === (null == t ? void 0 : t.rows.length) ? void 0 : this.extractScalar(null == t ? void 0 : t.rows.item(0)));
        }
        executeQuery(e, t, n) {
            return this.executeQueryRaw(e, n).andThen((e, n) => {
                const r = new Array(n.rows.length);
                for (let e = 0; e < n.rows.length; e++) {
                    const i = n.rows.item(e);
                    r[e] = t(i);
                }
                return r;
            });
        }
        executeNonQuery(e, t) {
            return this.executeQueryRaw(e, t).andThen((e, t) => {});
        }
        executeQueryRaw(e, t) {
            const n = Fi.queryCount++,
                r = null != t ? t : [];
            return this.traceQuery(n, e, r), this.tx.executeSql(e, t, (e, t) => {
                try {
                    this.continueWithNext(t);
                } catch (t) {
                    this.abortExplicitly(e, t);
                }
            }, (e, t) => (mi(Ui, `SQL command #${n} failed with error ${t.message}`), this.abort(t))), this;
        }
        feed(e) {
            return this.hasPendingResult = !0, this.pendingResult = e, this;
        }
        onError(e) {
            return this.chain.push(new Mi(e)), this.triggerPendingError(), this;
        }
        nextCallback(e) {
            for (let t = 0; t < this.chain.length; t++)
                if (e(this.chain[t])) {
                    const e = this.chain[t].callback;
                    return this.chain = this.chain.slice(t + 1, this.chain.length), e;
                }
            return null;
        }
        nextErrorCallback() {
            return this.nextCallback(e => e instanceof Mi);
        }
        hasErrorCallback() {
            return this.chain.some(e => e instanceof Mi);
        }
        nextSuccessCallback() {
            return this.nextCallback(e => e instanceof _i);
        }
        abort(e) {
            const t = this.nextErrorCallback();
            if (t) {
                this.pendingError = null, this.hasPendingError = !1;
                try {
                    let n = !1;
                    const r = t(e, () => {
                        n = !0;
                    });
                    return n ? this.chain = [] : this.continueWithNext(r), n;
                } catch (e) {
                    if (this.hasErrorCallback()) return this.abort(e);
                    if (this.parent) return this.parent.abort(e);
                    throw e;
                }
            } else this.pendingError = e, this.hasPendingError = !0;
            return !this.parent || this.parent.abort(e);
        }
        abortExplicitly(e, t) {
            this.abort(t) && e.executeSql("ABORT_TRANSACTION", void 0, () => {}, () => !0);
        }
        continueWithNext(e) {
            if (this.hasPendingResult = !1, e instanceof Fi) e.andThen((e, t) => {
                this.continueWithNext(t);
            });
            else if (e instanceof Array && 0 !== e.length && e[0] instanceof Fi) {
                let t = 0;
                const n = () => {
                    t < e.length ? (e[t].andThen(n), t++) : this.continueWithNext(e);
                };
                n();
            } else {
                if (this.chain.length > 0) {
                    const t = this.nextSuccessCallback();
                    if (t) return void this.continueWithNext(this.tryNextItem(t, this.cloneForNext(), e));
                }
                this.hasPendingResult = !0, this.pendingResult = e;
            }
        }
        tryNextItem(e, t, n) {
            try {
                return e(t, n);
            } catch (e) {
                this.abortExplicitly(this.tx, e);
            }
        }
        triggerPendingResults() {
            this.hasPendingResult && (this.hasPendingResult = !1, this.continueWithNext(this.pendingResult));
        }
        triggerPendingError() {
            this.hasPendingError && (this.hasPendingError = !1, this.abort(this.pendingError));
        }
        traceQuery(t, n, r) {
            this.allowTraces && pi(Ui, () => {
                const e = (r || []).map(e => String(e).substring(0, 80));
                return `Executing SQL command #${t}: ${n} with arguments ${e}`;
            }, _loggerJs.Visibility.Client);
        }
        static
        for (e) {
            return new Fi(e);
        }
    }
    Fi.queryCount = 0;
    const $i = "SqlDatabase";
    class Pi {
        constructor(e, t) {
            this.dbName = e, this.db = t, this.txCount = 0, this.setDispose();
        }
        setDispose() {
            const e = this.db;
            window && e && e.close && window.addEventListener("unload", () => {
                this.debug(`Closing database ${this.name}`), e.close(() => this.debug(`Database ${this.name} closed successfully`), e => vi("SqlDatabase", `Database ${this.name} failed to close`, "OS-CLRT-60400", e));
            }, !1);
        }
        get name() {
            return this.dbName;
        }
        get isMock() {
            return !1;
        }
        executeTransaction(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            return this.innerExecuteTransaction(e, !1, t);
        }
        executeReadTransaction(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            return this.innerExecuteTransaction(e, !0, t);
        }
        innerExecuteTransaction(e, t, n) {
            const r = t ? "READ" : "WRITE",
                i = t ? this.db.readTransaction : this.db.transaction,
                s = ++this.txCount;
            return Tt((t, a) => {
                let o, l;
                this.debug(`Opening local storage ${r} transaction #${s} on database ${this.name}`, n), i.call(this.db, t => {
                    this.debug(`Executing local storage ${r} transaction #${s} on database ${this.name}`, n);
                    let i = Fi.for(t).feed(void 0);
                    return i = n ? i.andThen(e) : i.withoutTraces(e), i.andThen((e, t) => o = t).onError((e, t) => {
                        l = e, t();
                    });
                }, e => {
                    l = l || e;
                    const t = (null == l ? void 0 : l.message) ? l : new Error(l),
                        i = `Rolled back local storage ${r} transaction #${s} on database ${this.name}: ${t.message}`;
                    return n && mi($i, i), a(new st.DataBaseException("", t.message.toString())), !0;
                }, () => {
                    this.debug(`Committed local storage ${r} transaction #${s} on database ${this.name}`, n), t(o);
                });
            });
        }
        testConnection() {
            let t = 0;
            return fi($i, "Starting to test on database connections. Performing #5 test queries.", _loggerJs.Visibility.Internal), Promise.all(Array.apply(null, {
                length: 5
            }).map((e, n) => new Promise(e => {
                this.executeTransaction(e => e.executeQueryRaw("SELECT 1").onError((e, n) => {
                    Bi(e), t++;
                })).catch(e => {
                    Bi(e), t++;
                }).then(() => {
                    e();
                });
            }))).then(() => {
                fi($i, `Finished tests on database connections. #${5 - t} out of #5 successfull queries.`, _loggerJs.Visibility.Internal);
            });
        }
        debug(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            t && pi($i, e);
        }
    }
    class Vi {
        constructor(e) {
            this.dbName = e;
        }
        get name() {
            return this.dbName;
        }
        get isMock() {
            return !0;
        }
        executeTransaction(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            return wt();
        }
        executeReadTransaction(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            return wt();
        }
        testConnection() {
            return Promise.resolve();
        }
    }

    function Bi(e) {
        vi("Database", "Failed to execute canary query (probably due to zombie transaction)", "OS-CLRT-60407"), "undefined" != typeof SQLError && e instanceof SQLError ? vi("Database", `SQLError ${e.code}: ${e.message}`, "OS-CLRT-60407") : vi("Database", "Error while executing a transaction", "OS-CLRT-60400", e);
    }
    const ki = "Could not open database",
        zi = "SqlDbProviderClass";
    const Hi = new class {
        constructor() {
            this.dbCache = {};
        }
        debug(e) {
            pi(zi, e);
        }
        asSafeDbName(e) {
            return e || "";
        }
        openDb(e) {
            return e = this.asSafeDbName(e), Tt((t, n) => {
                this.dbCache[e] ? t(this.dbCache[e]) : Nn().then(() => {
                    if ("undefined" == typeof window) return n(new st.SystemException("Database is only available in the browser/web view"));
                    const r = window;
                    if (bn()) {
                        if (r.sqlitePlugin) {
                            this.debug(`Opening database '${e}'`);
                            try {
                                r.sqlitePlugin.openDatabase({
                                    name: e,
                                    location: "default"
                                }, r => {
                                    r ? (this.debug(`Database '${e}' opened successfully`), this.dbCache[e] = new Pi(e, r), t(this.dbCache[e])) : (mi(zi, `Error opening database '${e}'`), n(new st.OpenDatabaseException(`${ki} '${e}'`)));
                                }, t => {
                                    mi(zi, `Error opening database '${e}' : ${t.message}`), n(new st.OpenDatabaseException(`${ki} '${e}': ${t.message.toString()}`));
                                });
                            } catch (t) {
                                n(new st.OpenDatabaseException(`${ki} '${e}': ${t.message.toString()}`));
                            }
                        } else n(new st.OpenDatabaseException("No database driver available"));
                    } else if (r.openDatabase) try {
                        this.debug(`Opening database '${e}'`);
                        const i = r.openDatabase(e, "1.0", e, 5242880);
                        i ? (this.debug(`Database '${e}' opened successfully`), this.dbCache[e] = new Pi(e, i), t(this.dbCache[e])) : (mi(zi, `Error opening database '${e}'`), n(new st.OpenDatabaseException(`${ki} '${e}'`)));
                    } catch (t) {
                        n(new st.OpenDatabaseException(`${ki} '${e}': ${t.message.toString()}`));
                    } else {
                        const e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                            t = !!r.chrome,
                            i = "Your app requires native access to a Local Storage database that is not available in your browser.\n\nPlease test your app in your mobile device" + (e || t ? "" : ", or use Google Chrome or Safari web browsers") + ".";
                        alert(i), n(new st.SystemException(i));
                    }
                }).catch(n);
            });
        }
        mockDb(e) {
            return wt(new Vi(e));
        }
    }();
    var ji;
    ! function(e) {
        e[e.Full = 0] = "Full", e[e.Type = 1] = "Type", e[e.Length = 3] = "Length", e[e.Decimals = 5] = "Decimals";
    }(ji || (ji = {}));
    const qi = new class {
        tableExists(e, t) {
            return e.executeReadTransaction(e => e.executeScalar("SELECT COUNT(*) FROM sqlite_master WHERE type = 'table' AND name = UPPER(?)", [t]).andThen((e, t) => 0 !== t));
        }
        columnExists(e, t, n) {
            return e.executeReadTransaction(e => e.executeScalar(`SELECT "${t}"."${n}" FROM "${t}" LIMIT 1`)).then(() => !0).catch(() => !1);
        }
        dbTypeFromSchemaType(e) {
            switch ((e = e || "").toUpperCase()) {
                case "INTEGER":
                    return Ft.DBDataType.INTEGER;
                case "BIGINT":
                    return Ft.DBDataType.LONGINTEGER;
                case "REAL":
                    return Ft.DBDataType.DECIMAL;
                case "BOOLEAN":
                    return Ft.DBDataType.BOOLEAN;
                case "TEXT":
                    return Ft.DBDataType.TEXT;
                case "DATE":
                    return Ft.DBDataType.DATE;
                case "TIME":
                    return Ft.DBDataType.TIME;
                case "DATETIME":
                    return Ft.DBDataType.DATE_TIME;
                case "BLOB":
                    return Ft.DBDataType.BINARY_DATA;
                default:
                    return Ft.DBDataType.UNKNOWN;
            }
        }
        pragmaToTableInfo(e, t, n) {
            return {
                tableName: e,
                idIsAutoNumber: (t = t || "").search(/INTEGER PRIMARY KEY AUTOINCREMENT/i) >= 0 ? Ft.AutoNumber.YesIfEmpty : Ft.AutoNumber.No,
                attributes: n.map(e => {
                    const t = Yt(e.type, "^([a-z]+)(\\(([0-9]+)(\\,([0-9]+))?\\))?$", !0).shift();
                    if (t) {
                        const n = this.dbTypeFromSchemaType(t.groups[1]);
                        return {
                            name: e.name,
                            columnName: e.name ? e.name.toUpperCase() : null,
                            type: n,
                            length: t.groups[3] ? parseInt(t.groups[3], 10) : void 0,
                            decimals: t.groups[5] ? parseInt(t.groups[5], 10) : void 0,
                            isEntityReference: "NULL" === e.dflt_value && this.isIdentifierUnderlyingType(n),
                            isPrimaryKey: 1 === e.pk
                        };
                    }
                })
            };
        }
        isIdentifierUnderlyingType(e) {
            switch (e) {
                case Ft.DBDataType.INTEGER:
                case Ft.DBDataType.LONGINTEGER:
                case Ft.DBDataType.TEXT:
                    return !0;
                default:
                    return !1;
            }
        }
        introspectTableInfo(e, t) {
            if (!bn()) return e.feed(null);
            let n;
            return e.executeScalar(`SELECT sql FROM sqlite_master WHERE type = 'table' AND name = '${t}'`).andThen((e, t) => n = t).andThen((e, n) => e.executeQuery(`PRAGMA table_info('${t}')`, e => e)).andThen((e, r) => this.pragmaToTableInfo(t, n, r));
        }
    }();
    /*!
     *  decimal.js v10.4.3
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     */
    var Gi,
        Wi,
        Ki = 9e15,
        Ji = 1e9,
        Yi = "0123456789abcdef",
        Xi = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
        Qi = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
        Zi = {
            precision: 20,
            rounding: 4,
            modulo: 1,
            toExpNeg: -7,
            toExpPos: 21,
            minE: -Ki,
            maxE: Ki,
            crypto: !1
        },
        es = !0,
        ts = "[DecimalError] ",
        ns = ts + "Invalid argument: ",
        rs = ts + "Precision limit exceeded",
        is = ts + "crypto unavailable",
        ss = "[object Decimal]",
        as = Math.floor,
        os = Math.pow,
        ls = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        us = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        cs = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        ds = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        hs = 1e7,
        gs = 7,
        ps = Xi.length - 1,
        fs = Qi.length - 1,
        ms = {
            toStringTag: ss
        };

    function vs(e) {
        var t,
            n,
            r,
            i = e.length - 1,
            s = "",
            a = e[0];
        if (i > 0) {
            for (s += a, t = 1; t < i; t++) r = e[t] + "", (n = gs - r.length) && (s += Rs(n)), s += r;
            a = e[t], (n = gs - (r = a + "").length) && (s += Rs(n));
        } else if (0 === a) return "0";
        for (; a % 10 == 0;) a /= 10;
        return s + a;
    }

    function ys(e, t, n) {
        if (e !== ~~e || e < t || e > n) throw Error(ns + e);
    }

    function bs(e, t, n, r) {
        var i, s, a, o;
        for (s = e[0]; s >= 10; s /= 10) --t;
        return --t < 0 ? (t += gs, i = 0) : (i = Math.ceil((t + 1) / gs), t %= gs), s = os(10, gs - t), o = e[i] % s | 0, null == r ? t < 3 ? (0 == t ? o = o / 100 | 0 : 1 == t && (o = o / 10 | 0), a = n < 4 && 99999 == o || n > 3 && 49999 == o || 5e4 == o || 0 == o) : a = (n < 4 && o + 1 == s || n > 3 && o + 1 == s / 2) && (e[i + 1] / s / 100 | 0) == os(10, t - 2) - 1 || (o == s / 2 || 0 == o) && !(e[i + 1] / s / 100 | 0) : t < 4 ? (0 == t ? o = o / 1e3 | 0 : 1 == t ? o = o / 100 | 0 : 2 == t && (o = o / 10 | 0), a = (r || n < 4) && 9999 == o || !r && n > 3 && 4999 == o) : a = ((r || n < 4) && o + 1 == s || !r && n > 3 && o + 1 == s / 2) && (e[i + 1] / s / 1e3 | 0) == os(10, t - 3) - 1, a;
    }

    function Ts(e, t, n) {
        for (var r, i, s = [0], a = 0, o = e.length; a < o;) {
            for (i = s.length; i--;) s[i] *= t;
            for (s[0] += Yi.indexOf(e.charAt(a++)), r = 0; r < s.length; r++) s[r] > n - 1 && (void 0 === s[r + 1] && (s[r + 1] = 0), s[r + 1] += s[r] / n | 0, s[r] %= n);
        }
        return s.reverse();
    }
    ms.absoluteValue = ms.abs = function() {
        var e = new this.constructor(this);
        return e.s < 0 && (e.s = 1), Es(e);
    }, ms.ceil = function() {
        return Es(new this.constructor(this), this.e + 1, 2);
    }, ms.clampedTo = ms.clamp = function(e, t) {
        var n = this,
            r = n.constructor;
        if (e = new r(e), t = new r(t), !e.s || !t.s) return new r(NaN);
        if (e.gt(t)) throw Error(ns + t);
        return n.cmp(e) < 0 ? e : n.cmp(t) > 0 ? t : new r(n);
    }, ms.comparedTo = ms.cmp = function(e) {
        var t,
            n,
            r,
            i,
            s = this,
            a = s.d,
            o = (e = new s.constructor(e)).d,
            l = s.s,
            u = e.s;
        if (!a || !o) return l && u ? l !== u ? l : a === o ? 0 : !a ^ l < 0 ? 1 : -1 : NaN;
        if (!a[0] || !o[0]) return a[0] ? l : o[0] ? -u : 0;
        if (l !== u) return l;
        if (s.e !== e.e) return s.e > e.e ^ l < 0 ? 1 : -1;
        for (t = 0, n = (r = a.length) < (i = o.length) ? r : i; t < n; ++t)
            if (a[t] !== o[t]) return a[t] > o[t] ^ l < 0 ? 1 : -1;
        return r === i ? 0 : r > i ^ l < 0 ? 1 : -1;
    }, ms.cosine = ms.cos = function() {
        var e,
            t,
            n = this,
            r = n.constructor;
        return n.d ? n.d[0] ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + gs, r.rounding = 1, n = function(e, t) {
            var n, r, i;
            if (t.isZero()) return t;
            r = t.d.length, r < 32 ? i = (1 / $s(4, n = Math.ceil(r / 3))).toString() : (n = 16, i = "2.3283064365386962890625e-10");
            e.precision += n, t = Fs(e, 1, t.times(i), new e(1));
            for (var s = n; s--;) {
                var a = t.times(t);
                t = a.times(a).minus(a).times(8).plus(1);
            }
            return e.precision -= n, t;
        }(r, Ps(r, n)), r.precision = e, r.rounding = t, Es(2 == Wi || 3 == Wi ? n.neg() : n, e, t, !0)) : new r(1) : new r(NaN);
    }, ms.cubeRoot = ms.cbrt = function() {
        var e,
            t,
            n,
            r,
            i,
            s,
            a,
            o,
            l,
            u,
            c = this,
            d = c.constructor;
        if (!c.isFinite() || c.isZero()) return new d(c);
        for (es = !1, (s = c.s * os(c.s * c, 1 / 3)) && Math.abs(s) != 1 / 0 ? r = new d(s.toString()) : (n = vs(c.d), (s = ((e = c.e) - n.length + 1) % 3) && (n += 1 == s || -2 == s ? "0" : "00"), s = os(n, 1 / 3), e = as((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), (r = new d(n = s == 1 / 0 ? "5e" + e : (n = s.toExponential()).slice(0, n.indexOf("e") + 1) + e)).s = c.s), a = (e = d.precision) + 3;;)
            if (u = (l = (o = r).times(o).times(o)).plus(c), r = ws(u.plus(c).times(o), u.plus(l), a + 2, 1), vs(o.d).slice(0, a) === (n = vs(r.d)).slice(0, a)) {
                if ("9999" != (n = n.slice(a - 3, a + 1)) && (i || "4999" != n)) {
                    +n && (+n.slice(1) || "5" != n.charAt(0)) || (Es(r, e + 1, 1), t = !r.times(r).times(r).eq(c));
                    break;
                }
                if (!i && (Es(o, e + 1, 0), o.times(o).times(o).eq(c))) {
                    r = o;
                    break;
                }
                a += 4, i = 1;
            }
        return es = !0, Es(r, e, d.rounding, t);
    }, ms.decimalPlaces = ms.dp = function() {
        var e,
            t = this.d,
            n = NaN;
        if (t) {
            if (n = ((e = t.length - 1) - as(this.e / gs)) * gs, e = t[e])
                for (; e % 10 == 0; e /= 10) n--;
            n < 0 && (n = 0);
        }
        return n;
    }, ms.dividedBy = ms.div = function(e) {
        return ws(this, new this.constructor(e));
    }, ms.dividedToIntegerBy = ms.divToInt = function(e) {
        var t = this.constructor;
        return Es(ws(this, new t(e), 0, 1, 1), t.precision, t.rounding);
    }, ms.equals = ms.eq = function(e) {
        return 0 === this.cmp(e);
    }, ms.floor = function() {
        return Es(new this.constructor(this), this.e + 1, 3);
    }, ms.greaterThan = ms.gt = function(e) {
        return this.cmp(e) > 0;
    }, ms.greaterThanOrEqualTo = ms.gte = function(e) {
        var t = this.cmp(e);
        return 1 == t || 0 === t;
    }, ms.hyperbolicCosine = ms.cosh = function() {
        var e,
            t,
            n,
            r,
            i,
            s = this,
            a = s.constructor,
            o = new a(1);
        if (!s.isFinite()) return new a(s.s ? 1 / 0 : NaN);
        if (s.isZero()) return o;
        n = a.precision, r = a.rounding, a.precision = n + Math.max(s.e, s.sd()) + 4, a.rounding = 1, (i = s.d.length) < 32 ? t = (1 / $s(4, e = Math.ceil(i / 3))).toString() : (e = 16, t = "2.3283064365386962890625e-10"), s = Fs(a, 1, s.times(t), new a(1), !0);
        for (var l, u = e, c = new a(8); u--;) l = s.times(s), s = o.minus(l.times(c.minus(l.times(c))));
        return Es(s, a.precision = n, a.rounding = r, !0);
    }, ms.hyperbolicSine = ms.sinh = function() {
        var e,
            t,
            n,
            r,
            i = this,
            s = i.constructor;
        if (!i.isFinite() || i.isZero()) return new s(i);
        if (t = s.precision, n = s.rounding, s.precision = t + Math.max(i.e, i.sd()) + 4, s.rounding = 1, (r = i.d.length) < 3) i = Fs(s, 2, i, i, !0);
        else {
            e = (e = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | e, i = Fs(s, 2, i = i.times(1 / $s(5, e)), i, !0);
            for (var a, o = new s(5), l = new s(16), u = new s(20); e--;) a = i.times(i), i = i.times(o.plus(a.times(l.times(a).plus(u))));
        }
        return s.precision = t, s.rounding = n, Es(i, t, n, !0);
    }, ms.hyperbolicTangent = ms.tanh = function() {
        var e,
            t,
            n = this,
            r = n.constructor;
        return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 7, r.rounding = 1, ws(n.sinh(), n.cosh(), r.precision = e, r.rounding = t)) : new r(n.s);
    }, ms.inverseCosine = ms.acos = function() {
        var e,
            t = this,
            n = t.constructor,
            r = t.abs().cmp(1),
            i = n.precision,
            s = n.rounding;
        return -1 !== r ? 0 === r ? t.isNeg() ? Ss(n, i, s) : new n(0) : new n(NaN) : t.isZero() ? Ss(n, i + 4, s).times(.5) : (n.precision = i + 6, n.rounding = 1, t = t.asin(), e = Ss(n, i + 4, s).times(.5), n.precision = i, n.rounding = s, e.minus(t));
    }, ms.inverseHyperbolicCosine = ms.acosh = function() {
        var e,
            t,
            n = this,
            r = n.constructor;
        return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, es = !1, n = n.times(n).minus(1).sqrt().plus(n), es = !0, r.precision = e, r.rounding = t, n.ln()) : new r(n);
    }, ms.inverseHyperbolicSine = ms.asinh = function() {
        var e,
            t,
            n = this,
            r = n.constructor;
        return !n.isFinite() || n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, es = !1, n = n.times(n).plus(1).sqrt().plus(n), es = !0, r.precision = e, r.rounding = t, n.ln());
    }, ms.inverseHyperbolicTangent = ms.atanh = function() {
        var e,
            t,
            n,
            r,
            i = this,
            s = i.constructor;
        return i.isFinite() ? i.e >= 0 ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = s.precision, t = s.rounding, r = i.sd(), Math.max(r, e) < 2 * -i.e - 1 ? Es(new s(i), e, t, !0) : (s.precision = n = r - i.e, i = ws(i.plus(1), new s(1).minus(i), n + e, 1), s.precision = e + 4, s.rounding = 1, i = i.ln(), s.precision = e, s.rounding = t, i.times(.5))) : new s(NaN);
    }, ms.inverseSine = ms.asin = function() {
        var e,
            t,
            n,
            r,
            i = this,
            s = i.constructor;
        return i.isZero() ? new s(i) : (t = i.abs().cmp(1), n = s.precision, r = s.rounding, -1 !== t ? 0 === t ? ((e = Ss(s, n + 4, r).times(.5)).s = i.s, e) : new s(NaN) : (s.precision = n + 6, s.rounding = 1, i = i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan(), s.precision = n, s.rounding = r, i.times(2)));
    }, ms.inverseTangent = ms.atan = function() {
        var e,
            t,
            n,
            r,
            i,
            s,
            a,
            o,
            l,
            u = this,
            c = u.constructor,
            d = c.precision,
            h = c.rounding;
        if (u.isFinite()) {
            if (u.isZero()) return new c(u);
            if (u.abs().eq(1) && d + 4 <= fs) return (a = Ss(c, d + 4, h).times(.25)).s = u.s, a;
        } else {
            if (!u.s) return new c(NaN);
            if (d + 4 <= fs) return (a = Ss(c, d + 4, h).times(.5)).s = u.s, a;
        }
        for (c.precision = o = d + 10, c.rounding = 1, e = n = Math.min(28, o / gs + 2 | 0); e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
        for (es = !1, t = Math.ceil(o / gs), r = 1, l = u.times(u), a = new c(u), i = u; - 1 !== e;)
            if (i = i.times(l), s = a.minus(i.div(r += 2)), i = i.times(l), void 0 !== (a = s.plus(i.div(r += 2))).d[t])
                for (e = t; a.d[e] === s.d[e] && e--;);
        return n && (a = a.times(2 << n - 1)), es = !0, Es(a, c.precision = d, c.rounding = h, !0);
    }, ms.isFinite = function() {
        return !!this.d;
    }, ms.isInteger = ms.isInt = function() {
        return !!this.d && as(this.e / gs) > this.d.length - 2;
    }, ms.isNaN = function() {
        return !this.s;
    }, ms.isNegative = ms.isNeg = function() {
        return this.s < 0;
    }, ms.isPositive = ms.isPos = function() {
        return this.s > 0;
    }, ms.isZero = function() {
        return !!this.d && 0 === this.d[0];
    }, ms.lessThan = ms.lt = function(e) {
        return this.cmp(e) < 0;
    }, ms.lessThanOrEqualTo = ms.lte = function(e) {
        return this.cmp(e) < 1;
    }, ms.logarithm = ms.log = function(e) {
        var t,
            n,
            r,
            i,
            s,
            a,
            o,
            l,
            u = this,
            c = u.constructor,
            d = c.precision,
            h = c.rounding;
        if (null == e) e = new c(10), t = !0;
        else {
            if (n = (e = new c(e)).d, e.s < 0 || !n || !n[0] || e.eq(1)) return new c(NaN);
            t = e.eq(10);
        }
        if (n = u.d, u.s < 0 || !n || !n[0] || u.eq(1)) return new c(n && !n[0] ? -1 / 0 : 1 != u.s ? NaN : n ? 0 : 1 / 0);
        if (t)
            if (n.length > 1) s = !0;
            else {
                for (i = n[0]; i % 10 == 0;) i /= 10;
                s = 1 !== i;
            }
        if (es = !1, a = _s(u, o = d + 5), r = t ? Ns(c, o + 10) : _s(e, o), bs((l = ws(a, r, o, 1)).d, i = d, h))
            do {
                if (a = _s(u, o += 10), r = t ? Ns(c, o + 10) : _s(e, o), l = ws(a, r, o, 1), !s) {
                    +vs(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = Es(l, d + 1, 0));
                    break;
                }
            } while (bs(l.d, i += 10, h));
        return es = !0, Es(l, d, h);
    }, ms.minus = ms.sub = function(e) {
        var t,
            n,
            r,
            i,
            s,
            a,
            o,
            l,
            u,
            c,
            d,
            h,
            g = this,
            p = g.constructor;
        if (e = new p(e), !g.d || !e.d) return g.s && e.s ? g.d ? e.s = -e.s : e = new p(e.d || g.s !== e.s ? g : NaN) : e = new p(NaN), e;
        if (g.s != e.s) return e.s = -e.s, g.plus(e);
        if (u = g.d, h = e.d, o = p.precision, l = p.rounding, !u[0] || !h[0]) {
            if (h[0]) e.s = -e.s;
            else {
                if (!u[0]) return new p(3 === l ? -0 : 0);
                e = new p(g);
            }
            return es ? Es(e, o, l) : e;
        }
        if (n = as(e.e / gs), c = as(g.e / gs), u = u.slice(), s = c - n) {
            for ((d = s < 0) ? (t = u, s = -s, a = h.length) : (t = h, n = c, a = u.length), s > (r = Math.max(Math.ceil(o / gs), a) + 2) && (s = r, t.length = 1), t.reverse(), r = s; r--;) t.push(0);
            t.reverse();
        } else {
            for ((d = (r = u.length) < (a = h.length)) && (a = r), r = 0; r < a; r++)
                if (u[r] != h[r]) {
                    d = u[r] < h[r];
                    break;
                }
            s = 0;
        }
        for (d && (t = u, u = h, h = t, e.s = -e.s), a = u.length, r = h.length - a; r > 0; --r) u[a++] = 0;
        for (r = h.length; r > s;) {
            if (u[--r] < h[r]) {
                for (i = r; i && 0 === u[--i];) u[i] = hs - 1;
                --u[i], u[r] += hs;
            }
            u[r] -= h[r];
        }
        for (; 0 === u[--a];) u.pop();
        for (; 0 === u[0]; u.shift()) --n;
        return u[0] ? (e.d = u, e.e = As(u, n), es ? Es(e, o, l) : e) : new p(3 === l ? -0 : 0);
    }, ms.modulo = ms.mod = function(e) {
        var t,
            n = this,
            r = n.constructor;
        return e = new r(e), !n.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || n.d && !n.d[0] ? Es(new r(n), r.precision, r.rounding) : (es = !1, 9 == r.modulo ? (t = ws(n, e.abs(), 0, 3, 1)).s *= e.s : t = ws(n, e, 0, r.modulo, 1), t = t.times(e), es = !0, n.minus(t));
    }, ms.naturalExponential = ms.exp = function() {
        return Os(this);
    }, ms.naturalLogarithm = ms.ln = function() {
        return _s(this);
    }, ms.negated = ms.neg = function() {
        var e = new this.constructor(this);
        return e.s = -e.s, Es(e);
    }, ms.plus = ms.add = function(e) {
        var t,
            n,
            r,
            i,
            s,
            a,
            o,
            l,
            u,
            c,
            d = this,
            h = d.constructor;
        if (e = new h(e), !d.d || !e.d) return d.s && e.s ? d.d || (e = new h(e.d || d.s === e.s ? d : NaN)) : e = new h(NaN), e;
        if (d.s != e.s) return e.s = -e.s, d.minus(e);
        if (u = d.d, c = e.d, o = h.precision, l = h.rounding, !u[0] || !c[0]) return c[0] || (e = new h(d)), es ? Es(e, o, l) : e;
        if (s = as(d.e / gs), r = as(e.e / gs), u = u.slice(), i = s - r) {
            for (i < 0 ? (n = u, i = -i, a = c.length) : (n = c, r = s, a = u.length), i > (a = (s = Math.ceil(o / gs)) > a ? s + 1 : a + 1) && (i = a, n.length = 1), n.reverse(); i--;) n.push(0);
            n.reverse();
        }
        for ((a = u.length) - (i = c.length) < 0 && (i = a, n = c, c = u, u = n), t = 0; i;) t = (u[--i] = u[i] + c[i] + t) / hs | 0, u[i] %= hs;
        for (t && (u.unshift(t), ++r), a = u.length; 0 == u[--a];) u.pop();
        return e.d = u, e.e = As(u, r), es ? Es(e, o, l) : e;
    }, ms.precision = ms.sd = function(e) {
        var t,
            n = this;
        if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e) throw Error(ns + e);
        return n.d ? (t = Ds(n.d), e && n.e + 1 > t && (t = n.e + 1)) : t = NaN, t;
    }, ms.round = function() {
        var e = this,
            t = e.constructor;
        return Es(new t(e), e.e + 1, t.rounding);
    }, ms.sine = ms.sin = function() {
        var e,
            t,
            n = this,
            r = n.constructor;
        return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + gs, r.rounding = 1, n = function(e, t) {
            var n,
                r = t.d.length;
            if (r < 3) return t.isZero() ? t : Fs(e, 2, t, t);
            n = (n = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | n, t = t.times(1 / $s(5, n)), t = Fs(e, 2, t, t);
            for (var i, s = new e(5), a = new e(16), o = new e(20); n--;) i = t.times(t), t = t.times(s.plus(i.times(a.times(i).minus(o))));
            return t;
        }(r, Ps(r, n)), r.precision = e, r.rounding = t, Es(Wi > 2 ? n.neg() : n, e, t, !0)) : new r(NaN);
    }, ms.squareRoot = ms.sqrt = function() {
        var e,
            t,
            n,
            r,
            i,
            s,
            a = this,
            o = a.d,
            l = a.e,
            u = a.s,
            c = a.constructor;
        if (1 !== u || !o || !o[0]) return new c(!u || u < 0 && (!o || o[0]) ? NaN : o ? a : 1 / 0);
        for (es = !1, 0 == (u = Math.sqrt(+a)) || u == 1 / 0 ? (((t = vs(o)).length + l) % 2 == 0 && (t += "0"), u = Math.sqrt(t), l = as((l + 1) / 2) - (l < 0 || l % 2), r = new c(t = u == 1 / 0 ? "5e" + l : (t = u.toExponential()).slice(0, t.indexOf("e") + 1) + l)) : r = new c(u.toString()), n = (l = c.precision) + 3;;)
            if (r = (s = r).plus(ws(a, s, n + 2, 1)).times(.5), vs(s.d).slice(0, n) === (t = vs(r.d)).slice(0, n)) {
                if ("9999" != (t = t.slice(n - 3, n + 1)) && (i || "4999" != t)) {
                    +t && (+t.slice(1) || "5" != t.charAt(0)) || (Es(r, l + 1, 1), e = !r.times(r).eq(a));
                    break;
                }
                if (!i && (Es(s, l + 1, 0), s.times(s).eq(a))) {
                    r = s;
                    break;
                }
                n += 4, i = 1;
            }
        return es = !0, Es(r, l, c.rounding, e);
    }, ms.tangent = ms.tan = function() {
        var e,
            t,
            n = this,
            r = n.constructor;
        return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 10, r.rounding = 1, (n = n.sin()).s = 1, n = ws(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0), r.precision = e, r.rounding = t, Es(2 == Wi || 4 == Wi ? n.neg() : n, e, t, !0)) : new r(NaN);
    }, ms.times = ms.mul = function(e) {
        var t,
            n,
            r,
            i,
            s,
            a,
            o,
            l,
            u,
            c = this,
            d = c.constructor,
            h = c.d,
            g = (e = new d(e)).d;
        if (e.s *= c.s, !(h && h[0] && g && g[0])) return new d(!e.s || h && !h[0] && !g || g && !g[0] && !h ? NaN : h && g ? 0 * e.s : e.s / 0);
        for (n = as(c.e / gs) + as(e.e / gs), (l = h.length) < (u = g.length) && (s = h, h = g, g = s, a = l, l = u, u = a), s = [], r = a = l + u; r--;) s.push(0);
        for (r = u; --r >= 0;) {
            for (t = 0, i = l + r; i > r;) o = s[i] + g[r] * h[i - r - 1] + t, s[i--] = o % hs | 0, t = o / hs | 0;
            s[i] = (s[i] + t) % hs | 0;
        }
        for (; !s[--a];) s.pop();
        return t ? ++n : s.shift(), e.d = s, e.e = As(s, n), es ? Es(e, d.precision, d.rounding) : e;
    }, ms.toBinary = function(e, t) {
        return Vs(this, 2, e, t);
    }, ms.toDecimalPlaces = ms.toDP = function(e, t) {
        var n = this,
            r = n.constructor;
        return n = new r(n), void 0 === e ? n : (ys(e, 0, Ji), void 0 === t ? t = r.rounding : ys(t, 0, 8), Es(n, e + n.e + 1, t));
    }, ms.toExponential = function(e, t) {
        var n,
            r = this,
            i = r.constructor;
        return void 0 === e ? n = Is(r, !0) : (ys(e, 0, Ji), void 0 === t ? t = i.rounding : ys(t, 0, 8), n = Is(r = Es(new i(r), e + 1, t), !0, e + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
    }, ms.toFixed = function(e, t) {
        var n,
            r,
            i = this,
            s = i.constructor;
        return void 0 === e ? n = Is(i) : (ys(e, 0, Ji), void 0 === t ? t = s.rounding : ys(t, 0, 8), n = Is(r = Es(new s(i), e + i.e + 1, t), !1, e + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
    }, ms.toFraction = function(e) {
        var t,
            n,
            r,
            i,
            s,
            a,
            o,
            l,
            u,
            c,
            d,
            h,
            g = this,
            p = g.d,
            f = g.constructor;
        if (!p) return new f(g);
        if (u = n = new f(1), r = l = new f(0), a = (s = (t = new f(r)).e = Ds(p) - g.e - 1) % gs, t.d[0] = os(10, a < 0 ? gs + a : a), null == e) e = s > 0 ? t : u;
        else {
            if (!(o = new f(e)).isInt() || o.lt(u)) throw Error(ns + o);
            e = o.gt(t) ? s > 0 ? t : u : o;
        }
        for (es = !1, o = new f(vs(p)), c = f.precision, f.precision = s = p.length * gs * 2; d = ws(o, t, 0, 1, 1), 1 != (i = n.plus(d.times(r))).cmp(e);) n = r, r = i, i = u, u = l.plus(d.times(i)), l = i, i = t, t = o.minus(d.times(i)), o = i;
        return i = ws(e.minus(n), r, 0, 1, 1), l = l.plus(i.times(u)), n = n.plus(i.times(r)), l.s = u.s = g.s, h = ws(u, r, s, 1).minus(g).abs().cmp(ws(l, n, s, 1).minus(g).abs()) < 1 ? [u, r] : [l, n], f.precision = c, es = !0, h;
    }, ms.toHexadecimal = ms.toHex = function(e, t) {
        return Vs(this, 16, e, t);
    }, ms.toNearest = function(e, t) {
        var n = this,
            r = n.constructor;
        if (n = new r(n), null == e) {
            if (!n.d) return n;
            e = new r(1), t = r.rounding;
        } else {
            if (e = new r(e), void 0 === t ? t = r.rounding : ys(t, 0, 8), !n.d) return e.s ? n : e;
            if (!e.d) return e.s && (e.s = n.s), e;
        }
        return e.d[0] ? (es = !1, n = ws(n, e, 0, t, 1).times(e), es = !0, Es(n)) : (e.s = n.s, n = e), n;
    }, ms.toNumber = function() {
        return +this;
    }, ms.toOctal = function(e, t) {
        return Vs(this, 8, e, t);
    }, ms.toPower = ms.pow = function(e) {
        var t,
            n,
            r,
            i,
            s,
            a,
            o = this,
            l = o.constructor,
            u = +(e = new l(e));
        if (!(o.d && e.d && o.d[0] && e.d[0])) return new l(os(+o, u));
        if ((o = new l(o)).eq(1)) return o;
        if (r = l.precision, s = l.rounding, e.eq(1)) return Es(o, r, s);
        if ((t = as(e.e / gs)) >= e.d.length - 1 && (n = u < 0 ? -u : u) <= 9007199254740991) return i = Cs(l, o, n, r), e.s < 0 ? new l(1).div(i) : Es(i, r, s);
        if ((a = o.s) < 0) {
            if (t < e.d.length - 1) return new l(NaN);
            if (1 & e.d[t] || (a = 1), 0 == o.e && 1 == o.d[0] && 1 == o.d.length) return o.s = a, o;
        }
        return (t = 0 != (n = os(+o, u)) && isFinite(n) ? new l(n + "").e : as(u * (Math.log("0." + vs(o.d)) / Math.LN10 + o.e + 1))) > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? a / 0 : 0) : (es = !1, l.rounding = o.s = 1, n = Math.min(12, (t + "").length), (i = Os(e.times(_s(o, r + n)), r)).d && bs((i = Es(i, r + 5, 1)).d, r, s) && (t = r + 10, +vs((i = Es(Os(e.times(_s(o, t + n)), t), t + 5, 1)).d).slice(r + 1, r + 15) + 1 == 1e14 && (i = Es(i, r + 1, 0))), i.s = a, es = !0, l.rounding = s, Es(i, r, s));
    }, ms.toPrecision = function(e, t) {
        var n,
            r = this,
            i = r.constructor;
        return void 0 === e ? n = Is(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (ys(e, 1, Ji), void 0 === t ? t = i.rounding : ys(t, 0, 8), n = Is(r = Es(new i(r), e, t), e <= r.e || r.e <= i.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + n : n;
    }, ms.toSignificantDigits = ms.toSD = function(e, t) {
        var n = this.constructor;
        return void 0 === e ? (e = n.precision, t = n.rounding) : (ys(e, 1, Ji), void 0 === t ? t = n.rounding : ys(t, 0, 8)), Es(new n(this), e, t);
    }, ms.toString = function() {
        var e = this,
            t = e.constructor,
            n = Is(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
        return e.isNeg() && !e.isZero() ? "-" + n : n;
    }, ms.truncated = ms.trunc = function() {
        return Es(new this.constructor(this), this.e + 1, 1);
    }, ms.valueOf = ms.toJSON = function() {
        var e = this,
            t = e.constructor,
            n = Is(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
        return e.isNeg() ? "-" + n : n;
    };
    var ws = function() {
        function e(e, t, n) {
            var r,
                i = 0,
                s = e.length;
            for (e = e.slice(); s--;) r = e[s] * t + i, e[s] = r % n | 0, i = r / n | 0;
            return i && e.unshift(i), e;
        }

        function t(e, t, n, r) {
            var i, s;
            if (n != r) s = n > r ? 1 : -1;
            else
                for (i = s = 0; i < n; i++)
                    if (e[i] != t[i]) {
                        s = e[i] > t[i] ? 1 : -1;
                        break;
                    }
            return s;
        }

        function n(e, t, n, r) {
            for (var i = 0; n--;) e[n] -= i, i = e[n] < t[n] ? 1 : 0, e[n] = i * r + e[n] - t[n];
            for (; !e[0] && e.length > 1;) e.shift();
        }
        return function(r, i, s, a, o, l) {
            var u,
                c,
                d,
                h,
                g,
                p,
                f,
                m,
                v,
                y,
                b,
                T,
                w,
                E,
                I,
                A,
                N,
                S,
                D,
                R,
                C = r.constructor,
                x = r.s == i.s ? 1 : -1,
                L = r.d,
                O = i.d;
            if (!(L && L[0] && O && O[0])) return new C(r.s && i.s && (L ? !O || L[0] != O[0] : O) ? L && 0 == L[0] || !O ? 0 * x : x / 0 : NaN);
            for (l ? (g = 1, c = r.e - i.e) : (l = hs, g = gs, c = as(r.e / g) - as(i.e / g)), D = O.length, N = L.length, y = (v = new C(x)).d = [], d = 0; O[d] == (L[d] || 0); d++);
            if (O[d] > (L[d] || 0) && c--, null == s ? (E = s = C.precision, a = C.rounding) : E = o ? s + (r.e - i.e) + 1 : s, E < 0) y.push(1), p = !0;
            else {
                if (E = E / g + 2 | 0, d = 0, 1 == D) {
                    for (h = 0, O = O[0], E++;
                        (d < N || h) && E--; d++) I = h * l + (L[d] || 0), y[d] = I / O | 0, h = I % O | 0;
                    p = h || d < N;
                } else {
                    for ((h = l / (O[0] + 1) | 0) > 1 && (O = e(O, h, l), L = e(L, h, l), D = O.length, N = L.length), A = D, T = (b = L.slice(0, D)).length; T < D;) b[T++] = 0;
                    (R = O.slice()).unshift(0), S = O[0], O[1] >= l / 2 && ++S;
                    do {
                        h = 0, (u = t(O, b, D, T)) < 0 ? (w = b[0], D != T && (w = w * l + (b[1] || 0)), (h = w / S | 0) > 1 ? (h >= l && (h = l - 1), 1 == (u = t(f = e(O, h, l), b, m = f.length, T = b.length)) && (h--, n(f, D < m ? R : O, m, l))) : (0 == h && (u = h = 1), f = O.slice()), (m = f.length) < T && f.unshift(0), n(b, f, T, l), -1 == u && (u = t(O, b, D, T = b.length)) < 1 && (h++, n(b, D < T ? R : O, T, l)), T = b.length) : 0 === u && (h++, b = [0]), y[d++] = h, u && b[0] ? b[T++] = L[A] || 0 : (b = [L[A]], T = 1);
                    } while ((A++ < N || void 0 !== b[0]) && E--);
                    p = void 0 !== b[0];
                }
                y[0] || y.shift();
            }
            if (1 == g) v.e = c, Gi = p;
            else {
                for (d = 1, h = y[0]; h >= 10; h /= 10) d++;
                v.e = d + c * g - 1, Es(v, o ? s + v.e + 1 : s, a, p);
            }
            return v;
        };
    }();

    function Es(e, t, n, r) {
        var i,
            s,
            a,
            o,
            l,
            u,
            c,
            d,
            h,
            g = e.constructor;
        e: if (null != t) {
            if (!(d = e.d)) return e;
            for (i = 1, o = d[0]; o >= 10; o /= 10) i++;
            if ((s = t - i) < 0) s += gs, a = t, l = (c = d[h = 0]) / os(10, i - a - 1) % 10 | 0;
            else if ((h = Math.ceil((s + 1) / gs)) >= (o = d.length)) {
                if (!r) break e;
                for (; o++ <= h;) d.push(0);
                c = l = 0, i = 1, a = (s %= gs) - gs + 1;
            } else {
                for (c = o = d[h], i = 1; o >= 10; o /= 10) i++;
                l = (a = (s %= gs) - gs + i) < 0 ? 0 : c / os(10, i - a - 1) % 10 | 0;
            }
            if (r = r || t < 0 || void 0 !== d[h + 1] || (a < 0 ? c : c % os(10, i - a - 1)), u = n < 4 ? (l || r) && (0 == n || n == (e.s < 0 ? 3 : 2)) : l > 5 || 5 == l && (4 == n || r || 6 == n && (s > 0 ? a > 0 ? c / os(10, i - a) : 0 : d[h - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !d[0]) return d.length = 0, u ? (t -= e.e + 1, d[0] = os(10, (gs - t % gs) % gs), e.e = -t || 0) : d[0] = e.e = 0, e;
            if (0 == s ? (d.length = h, o = 1, h--) : (d.length = h + 1, o = os(10, gs - s), d[h] = a > 0 ? (c / os(10, i - a) % os(10, a) | 0) * o : 0), u)
                for (;;) {
                    if (0 == h) {
                        for (s = 1, a = d[0]; a >= 10; a /= 10) s++;
                        for (a = d[0] += o, o = 1; a >= 10; a /= 10) o++;
                        s != o && (e.e++, d[0] == hs && (d[0] = 1));
                        break;
                    }
                    if (d[h] += o, d[h] != hs) break;
                    d[h--] = 0, o = 1;
                }
            for (s = d.length; 0 === d[--s];) d.pop();
        }
        return es && (e.e > g.maxE ? (e.d = null, e.e = NaN) : e.e < g.minE && (e.e = 0, e.d = [0])), e;
    }

    function Is(e, t, n) {
        if (!e.isFinite()) return Ms(e);
        var r,
            i = e.e,
            s = vs(e.d),
            a = s.length;
        return t ? (n && (r = n - a) > 0 ? s = s.charAt(0) + "." + s.slice(1) + Rs(r) : a > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (s = "0." + Rs(-i - 1) + s, n && (r = n - a) > 0 && (s += Rs(r))) : i >= a ? (s += Rs(i + 1 - a), n && (r = n - i - 1) > 0 && (s = s + "." + Rs(r))) : ((r = i + 1) < a && (s = s.slice(0, r) + "." + s.slice(r)), n && (r = n - a) > 0 && (i + 1 === a && (s += "."), s += Rs(r))), s;
    }

    function As(e, t) {
        var n = e[0];
        for (t *= gs; n >= 10; n /= 10) t++;
        return t;
    }

    function Ns(e, t, n) {
        if (t > ps) throw es = !0, n && (e.precision = n), Error(rs);
        return Es(new e(Xi), t, 1, !0);
    }

    function Ss(e, t, n) {
        if (t > fs) throw Error(rs);
        return Es(new e(Qi), t, n, !0);
    }

    function Ds(e) {
        var t = e.length - 1,
            n = t * gs + 1;
        if (t = e[t]) {
            for (; t % 10 == 0; t /= 10) n--;
            for (t = e[0]; t >= 10; t /= 10) n++;
        }
        return n;
    }

    function Rs(e) {
        for (var t = ""; e--;) t += "0";
        return t;
    }

    function Cs(e, t, n, r) {
        var i,
            s = new e(1),
            a = Math.ceil(r / gs + 4);
        for (es = !1;;) {
            if (n % 2 && Bs((s = s.times(t)).d, a) && (i = !0), 0 === (n = as(n / 2))) {
                n = s.d.length - 1, i && 0 === s.d[n] && ++s.d[n];
                break;
            }
            Bs((t = t.times(t)).d, a);
        }
        return es = !0, s;
    }

    function xs(e) {
        return 1 & e.d[e.d.length - 1];
    }

    function Ls(e, t, n) {
        for (var r, i = new e(t[0]), s = 0; ++s < t.length;) {
            if (!(r = new e(t[s])).s) {
                i = r;
                break;
            }
            i[n](r) && (i = r);
        }
        return i;
    }

    function Os(e, t) {
        var n,
            r,
            i,
            s,
            a,
            o,
            l,
            u = 0,
            c = 0,
            d = 0,
            h = e.constructor,
            g = h.rounding,
            p = h.precision;
        if (!e.d || !e.d[0] || e.e > 17) return new h(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
        for (null == t ? (es = !1, l = p) : l = t, o = new h(.03125); e.e > -2;) e = e.times(o), d += 5;
        for (l += r = Math.log(os(2, d)) / Math.LN10 * 2 + 5 | 0, n = s = a = new h(1), h.precision = l;;) {
            if (s = Es(s.times(e), l, 1), n = n.times(++c), vs((o = a.plus(ws(s, n, l, 1))).d).slice(0, l) === vs(a.d).slice(0, l)) {
                for (i = d; i--;) a = Es(a.times(a), l, 1);
                if (null != t) return h.precision = p, a;
                if (!(u < 3 && bs(a.d, l - r, g, u))) return Es(a, h.precision = p, g, es = !0);
                h.precision = l += 10, n = s = o = new h(1), c = 0, u++;
            }
            a = o;
        }
    }

    function _s(e, t) {
        var n,
            r,
            i,
            s,
            a,
            o,
            l,
            u,
            c,
            d,
            h,
            g = 1,
            p = e,
            f = p.d,
            m = p.constructor,
            v = m.rounding,
            y = m.precision;
        if (p.s < 0 || !f || !f[0] || !p.e && 1 == f[0] && 1 == f.length) return new m(f && !f[0] ? -1 / 0 : 1 != p.s ? NaN : f ? 0 : p);
        if (null == t ? (es = !1, c = y) : c = t, m.precision = c += 10, r = (n = vs(f)).charAt(0), !(Math.abs(s = p.e) < 15e14)) return u = Ns(m, c + 2, y).times(s + ""), p = _s(new m(r + "." + n.slice(1)), c - 10).plus(u), m.precision = y, null == t ? Es(p, y, v, es = !0) : p;
        for (; r < 7 && 1 != r || 1 == r && n.charAt(1) > 3;) r = (n = vs((p = p.times(e)).d)).charAt(0), g++;
        for (s = p.e, r > 1 ? (p = new m("0." + n), s++) : p = new m(r + "." + n.slice(1)), d = p, l = a = p = ws(p.minus(1), p.plus(1), c, 1), h = Es(p.times(p), c, 1), i = 3;;) {
            if (a = Es(a.times(h), c, 1), vs((u = l.plus(ws(a, new m(i), c, 1))).d).slice(0, c) === vs(l.d).slice(0, c)) {
                if (l = l.times(2), 0 !== s && (l = l.plus(Ns(m, c + 2, y).times(s + ""))), l = ws(l, new m(g), c, 1), null != t) return m.precision = y, l;
                if (!bs(l.d, c - 10, v, o)) return Es(l, m.precision = y, v, es = !0);
                m.precision = c += 10, u = a = p = ws(d.minus(1), d.plus(1), c, 1), h = Es(p.times(p), c, 1), i = o = 1;
            }
            l = u, i += 2;
        }
    }

    function Ms(e) {
        return String(e.s * e.s / 0);
    }

    function Us(e, t) {
        var n, r, i;
        for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; 48 === t.charCodeAt(r); r++);
        for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
        if (t = t.slice(r, i)) {
            if (i -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % gs, n < 0 && (r += gs), r < i) {
                for (r && e.d.push(+t.slice(0, r)), i -= gs; r < i;) e.d.push(+t.slice(r, r += gs));
                t = t.slice(r), r = gs - t.length;
            } else r -= i;
            for (; r--;) t += "0";
            e.d.push(+t), es && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
        } else e.e = 0, e.d = [0];
        return e;
    }

    function Fs(e, t, n, r, i) {
        var s,
            a,
            o,
            l,
            u = e.precision,
            c = Math.ceil(u / gs);
        for (es = !1, l = n.times(n), o = new e(r);;) {
            if (a = ws(o.times(l), new e(t++ * t++), u, 1), o = i ? r.plus(a) : r.minus(a), r = ws(a.times(l), new e(t++ * t++), u, 1), void 0 !== (a = o.plus(r)).d[c]) {
                for (s = c; a.d[s] === o.d[s] && s--;);
                if (-1 == s) break;
            }
            s = o, o = r, r = a, a = s;
        }
        return es = !0, a.d.length = c + 1, a;
    }

    function $s(e, t) {
        for (var n = e; --t;) n *= e;
        return n;
    }

    function Ps(e, t) {
        var n,
            r = t.s < 0,
            i = Ss(e, e.precision, 1),
            s = i.times(.5);
        if ((t = t.abs()).lte(s)) return Wi = r ? 4 : 1, t;
        if ((n = t.divToInt(i)).isZero()) Wi = r ? 3 : 2;
        else {
            if ((t = t.minus(n.times(i))).lte(s)) return Wi = xs(n) ? r ? 2 : 3 : r ? 4 : 1, t;
            Wi = xs(n) ? r ? 1 : 4 : r ? 3 : 2;
        }
        return t.minus(i).abs();
    }

    function Vs(e, t, n, r) {
        var i,
            s,
            a,
            o,
            l,
            u,
            c,
            d,
            h,
            g = e.constructor,
            p = void 0 !== n;
        if (p ? (ys(n, 1, Ji), void 0 === r ? r = g.rounding : ys(r, 0, 8)) : (n = g.precision, r = g.rounding), e.isFinite()) {
            for (p ? (i = 2, 16 == t ? n = 4 * n - 3 : 8 == t && (n = 3 * n - 2)) : i = t, (a = (c = Is(e)).indexOf(".")) >= 0 && (c = c.replace(".", ""), (h = new g(1)).e = c.length - a, h.d = Ts(Is(h), 10, i), h.e = h.d.length), s = l = (d = Ts(c, 10, i)).length; 0 == d[--l];) d.pop();
            if (d[0]) {
                if (a < 0 ? s-- : ((e = new g(e)).d = d, e.e = s, d = (e = ws(e, h, n, r, 0, i)).d, s = e.e, u = Gi), a = d[n], o = i / 2, u = u || void 0 !== d[n + 1], u = r < 4 ? (void 0 !== a || u) && (0 === r || r === (e.s < 0 ? 3 : 2)) : a > o || a === o && (4 === r || u || 6 === r && 1 & d[n - 1] || r === (e.s < 0 ? 8 : 7)), d.length = n, u)
                    for (; ++d[--n] > i - 1;) d[n] = 0, n || (++s, d.unshift(1));
                for (l = d.length; !d[l - 1]; --l);
                for (a = 0, c = ""; a < l; a++) c += Yi.charAt(d[a]);
                if (p) {
                    if (l > 1)
                        if (16 == t || 8 == t) {
                            for (a = 16 == t ? 4 : 3, --l; l % a; l++) c += "0";
                            for (l = (d = Ts(c, i, t)).length; !d[l - 1]; --l);
                            for (a = 1, c = "1."; a < l; a++) c += Yi.charAt(d[a]);
                        } else c = c.charAt(0) + "." + c.slice(1);
                    c = c + (s < 0 ? "p" : "p+") + s;
                } else if (s < 0) {
                    for (; ++s;) c = "0" + c;
                    c = "0." + c;
                } else if (++s > l)
                    for (s -= l; s--;) c += "0";
                else s < l && (c = c.slice(0, s) + "." + c.slice(s));
            } else c = p ? "0p+0" : "0";
            c = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + c;
        } else c = Ms(e);
        return e.s < 0 ? "-" + c : c;
    }

    function Bs(e, t) {
        if (e.length > t) return e.length = t, !0;
    }

    function ks(e) {
        return new this(e).abs();
    }

    function zs(e) {
        return new this(e).acos();
    }

    function Hs(e) {
        return new this(e).acosh();
    }

    function js(e, t) {
        return new this(e).plus(t);
    }

    function qs(e) {
        return new this(e).asin();
    }

    function Gs(e) {
        return new this(e).asinh();
    }

    function Ws(e) {
        return new this(e).atan();
    }

    function Ks(e) {
        return new this(e).atanh();
    }

    function Js(e, t) {
        e = new this(e), t = new this(t);
        var n,
            r = this.precision,
            i = this.rounding,
            s = r + 4;
        return e.s && t.s ? e.d || t.d ? !t.d || e.isZero() ? (n = t.s < 0 ? Ss(this, r, i) : new this(0)).s = e.s : !e.d || t.isZero() ? (n = Ss(this, s, 1).times(.5)).s = e.s : t.s < 0 ? (this.precision = s, this.rounding = 1, n = this.atan(ws(e, t, s, 1)), t = Ss(this, s, 1), this.precision = r, this.rounding = i, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(ws(e, t, s, 1)) : (n = Ss(this, s, 1).times(t.s > 0 ? .25 : .75)).s = e.s : n = new this(NaN), n;
    }

    function Ys(e) {
        return new this(e).cbrt();
    }

    function Xs(e) {
        return Es(e = new this(e), e.e + 1, 2);
    }

    function Qs(e, t, n) {
        return new this(e).clamp(t, n);
    }

    function Zs(e) {
        if (!e || "object" != typeof e) throw Error(ts + "Object expected");
        var t,
            n,
            r,
            i = !0 === e.defaults,
            s = ["precision", 1, Ji, "rounding", 0, 8, "toExpNeg", -Ki, 0, "toExpPos", 0, Ki, "maxE", 0, Ki, "minE", -Ki, 0, "modulo", 0, 9];
        for (t = 0; t < s.length; t += 3)
            if (n = s[t], i && (this[n] = Zi[n]), void 0 !== (r = e[n])) {
                if (!(as(r) === r && r >= s[t + 1] && r <= s[t + 2])) throw Error(ns + n + ": " + r);
                this[n] = r;
            }
        if (n = "crypto", i && (this[n] = Zi[n]), void 0 !== (r = e[n])) {
            if (!0 !== r && !1 !== r && 0 !== r && 1 !== r) throw Error(ns + n + ": " + r);
            if (r) {
                if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw Error(is);
                this[n] = !0;
            } else this[n] = !1;
        }
        return this;
    }

    function ea(e) {
        return new this(e).cos();
    }

    function ta(e) {
        return new this(e).cosh();
    }

    function na(e, t) {
        return new this(e).div(t);
    }

    function ra(e) {
        return new this(e).exp();
    }

    function ia(e) {
        return Es(e = new this(e), e.e + 1, 3);
    }

    function sa() {
        var e,
            t,
            n = new this(0);
        for (es = !1, e = 0; e < arguments.length;)
            if ((t = new this(arguments[e++])).d) n.d && (n = n.plus(t.times(t)));
            else {
                if (t.s) return es = !0, new this(1 / 0);
                n = t;
            }
        return es = !0, n.sqrt();
    }

    function aa(e) {
        return e instanceof Da || e && e.toStringTag === ss || !1;
    }

    function oa(e) {
        return new this(e).ln();
    }

    function la(e, t) {
        return new this(e).log(t);
    }

    function ua(e) {
        return new this(e).log(2);
    }

    function ca(e) {
        return new this(e).log(10);
    }

    function da() {
        return Ls(this, arguments, "lt");
    }

    function ha() {
        return Ls(this, arguments, "gt");
    }

    function ga(e, t) {
        return new this(e).mod(t);
    }

    function pa(e, t) {
        return new this(e).mul(t);
    }

    function fa(e, t) {
        return new this(e).pow(t);
    }

    function ma(e) {
        var t,
            n,
            r,
            i,
            s = 0,
            a = new this(1),
            o = [];
        if (void 0 === e ? e = this.precision : ys(e, 1, Ji), r = Math.ceil(e / gs), this.crypto) {
            if (crypto.getRandomValues)
                for (t = crypto.getRandomValues(new Uint32Array(r)); s < r;)(i = t[s]) >= 429e7 ? t[s] = crypto.getRandomValues(new Uint32Array(1))[0] : o[s++] = i % 1e7;
            else {
                if (!crypto.randomBytes) throw Error(is);
                for (t = crypto.randomBytes(r *= 4); s < r;)(i = t[s] + (t[s + 1] << 8) + (t[s + 2] << 16) + ((127 & t[s + 3]) << 24)) >= 214e7 ? crypto.randomBytes(4).copy(t, s) : (o.push(i % 1e7), s += 4);
                s = r / 4;
            }
        } else
            for (; s < r;) o[s++] = 1e7 * Math.random() | 0;
        for (r = o[--s], e %= gs, r && e && (i = os(10, gs - e), o[s] = (r / i | 0) * i); 0 === o[s]; s--) o.pop();
        if (s < 0) n = 0, o = [0];
        else {
            for (n = -1; 0 === o[0]; n -= gs) o.shift();
            for (r = 1, i = o[0]; i >= 10; i /= 10) r++;
            r < gs && (n -= gs - r);
        }
        return a.e = n, a.d = o, a;
    }

    function va(e) {
        return Es(e = new this(e), e.e + 1, this.rounding);
    }

    function ya(e) {
        return (e = new this(e)).d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }

    function ba(e) {
        return new this(e).sin();
    }

    function Ta(e) {
        return new this(e).sinh();
    }

    function wa(e) {
        return new this(e).sqrt();
    }

    function Ea(e, t) {
        return new this(e).sub(t);
    }

    function Ia() {
        var e = 0,
            t = arguments,
            n = new this(t[e]);
        for (es = !1; n.s && ++e < t.length;) n = n.plus(t[e]);
        return es = !0, Es(n, this.precision, this.rounding);
    }

    function Aa(e) {
        return new this(e).tan();
    }

    function Na(e) {
        return new this(e).tanh();
    }

    function Sa(e) {
        return Es(e = new this(e), e.e + 1, 1);
    }
    ms[Symbol.for("nodejs.util.inspect.custom")] = ms.toString, ms[Symbol.toStringTag] = "Decimal";
    var Da = ms.constructor = function e(t) {
        var n, r, i;

        function s(e) {
            var t,
                n,
                r,
                i = this;
            if (!(i instanceof s)) return new s(e);
            if (i.constructor = s, aa(e)) return i.s = e.s, void(es ? !e.d || e.e > s.maxE ? (i.e = NaN, i.d = null) : e.e < s.minE ? (i.e = 0, i.d = [0]) : (i.e = e.e, i.d = e.d.slice()) : (i.e = e.e, i.d = e.d ? e.d.slice() : e.d));
            if ("number" === (r = typeof e)) {
                if (0 === e) return i.s = 1 / e < 0 ? -1 : 1, i.e = 0, void(i.d = [0]);
                if (e < 0 ? (e = -e, i.s = -1) : i.s = 1, e === ~~e && e < 1e7) {
                    for (t = 0, n = e; n >= 10; n /= 10) t++;
                    return void(es ? t > s.maxE ? (i.e = NaN, i.d = null) : t < s.minE ? (i.e = 0, i.d = [0]) : (i.e = t, i.d = [e]) : (i.e = t, i.d = [e]));
                }
                return 0 * e != 0 ? (e || (i.s = NaN), i.e = NaN, void(i.d = null)) : Us(i, e.toString());
            }
            if ("string" !== r) throw Error(ns + e);
            return 45 === (n = e.charCodeAt(0)) ? (e = e.slice(1), i.s = -1) : (43 === n && (e = e.slice(1)), i.s = 1), ds.test(e) ? Us(i, e) : function(e, t) {
                var n, r, i, s, a, o, l, u, c;
                if (t.indexOf("_") > -1) {
                    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), ds.test(t)) return Us(e, t);
                } else if ("Infinity" === t || "NaN" === t) return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
                if (us.test(t)) n = 16, t = t.toLowerCase();
                else if (ls.test(t)) n = 2;
                else {
                    if (!cs.test(t)) throw Error(ns + t);
                    n = 8;
                }
                for ((s = t.search(/p/i)) > 0 ? (l = +t.slice(s + 1), t = t.substring(2, s)) : t = t.slice(2), a = (s = t.indexOf(".")) >= 0, r = e.constructor, a && (s = (o = (t = t.replace(".", "")).length) - s, i = Cs(r, new r(n), s, 2 * s)), s = c = (u = Ts(t, n, hs)).length - 1; 0 === u[s]; --s) u.pop();
                return s < 0 ? new r(0 * e.s) : (e.e = As(u, c), e.d = u, es = !1, a && (e = ws(e, i, 4 * o)), l && (e = e.times(Math.abs(l) < 54 ? os(2, l) : Da.pow(2, l))), es = !0, e);
            }(i, e);
        }
        if (s.prototype = ms, s.ROUND_UP = 0, s.ROUND_DOWN = 1, s.ROUND_CEIL = 2, s.ROUND_FLOOR = 3, s.ROUND_HALF_UP = 4, s.ROUND_HALF_DOWN = 5, s.ROUND_HALF_EVEN = 6, s.ROUND_HALF_CEIL = 7, s.ROUND_HALF_FLOOR = 8, s.EUCLID = 9, s.config = s.set = Zs, s.clone = e, s.isDecimal = aa, s.abs = ks, s.acos = zs, s.acosh = Hs, s.add = js, s.asin = qs, s.asinh = Gs, s.atan = Ws, s.atanh = Ks, s.atan2 = Js, s.cbrt = Ys, s.ceil = Xs, s.clamp = Qs, s.cos = ea, s.cosh = ta, s.div = na, s.exp = ra, s.floor = ia, s.hypot = sa, s.ln = oa, s.log = la, s.log10 = ca, s.log2 = ua, s.max = da, s.min = ha, s.mod = ga, s.mul = pa, s.pow = fa, s.random = ma, s.round = va, s.sign = ya, s.sin = ba, s.sinh = Ta, s.sqrt = wa, s.sub = Ea, s.sum = Ia, s.tan = Aa, s.tanh = Na, s.trunc = Sa, void 0 === t && (t = {}), t && !0 !== t.defaults)
            for (i = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < i.length;) t.hasOwnProperty(r = i[n++]) || (t[r] = this[r]);
        return s.config(t), s;
    }(Zi);
    Xi = new Da(Xi), Qi = new Da(Qi);
    var Ra = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function Ca(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }
    var xa,
        La,
        Oa = {
            exports: {}
        };
    xa = Oa,
        function(e) {
            function t(e) {
                return e.prototype.toFormat = function(e, t, n) {
                    if (!this.e && 0 !== this.e) return this.toString();
                    var r,
                        i,
                        s,
                        a,
                        o,
                        l,
                        u,
                        c,
                        d,
                        h,
                        g,
                        p,
                        f,
                        m,
                        v,
                        y = this.format || {},
                        b = this.constructor.format || {};
                    if (e != o ? "object" == typeof e ? (n = e, e = o) : t != o ? "object" == typeof t ? (n = t, t = o) : "object" != typeof n && (n = {}) : n = {} : n = {}, c = (r = this.toFixed(e, t).split("."))[0], d = r[1], l = (u = this.s < 0 ? c.slice(1) : c).length, (h = n.decimalSeparator) == o && (h = y.decimalSeparator) == o && (h = b.decimalSeparator) == o && (h = "."), (g = n.groupSeparator) == o && (g = y.groupSeparator) == o && (g = b.groupSeparator), g && ((p = n.groupSize) == o && (p = y.groupSize) == o && (p = b.groupSize) == o && (p = 0), (f = n.secondaryGroupSize) == o && (f = y.secondaryGroupSize) == o && (f = b.secondaryGroupSize) == o && (f = 0), f ? (i = +f, l -= s = +p) : (i = +p, s = +f), i > 0 && l > 0)) {
                        for (a = l % i || i, c = u.substr(0, a); a < l; a += i) c += g + u.substr(a, i);
                        s > 0 && (c += g + u.slice(a)), this.s < 0 && (c = "-" + c);
                    }
                    return d ? ((m = n.fractionGroupSeparator) == o && (m = y.fractionGroupSeparator) == o && (m = b.fractionGroupSeparator), m && ((v = n.fractionGroupSize) == o && (v = y.fractionGroupSize) == o && (v = b.fractionGroupSize) == o && (v = 0), (v = +v) && (d = d.replace(new RegExp("\\d{" + v + "}\\B", "g"), "$&" + m))), c + h + d) : c;
                }, e.format = {
                    decimalSeparator: ".",
                    groupSeparator: ",",
                    groupSize: 3,
                    secondaryGroupSize: 0,
                    fractionGroupSeparator: "",
                    fractionGroupSize: 0
                }, e;
            }
            xa.exports ? xa.exports = t : (e || (e = "undefined" != typeof self && self && self.self == self ? self : window), noConflict = e.toFormat, t.noConflict = function() {
                return e.toFormat = noConflict, t;
            }, e.toFormat = t);
        }(Ra), Ca(Oa.exports)(Da),
        function(e) {
            e[e.roundUp = 0] = "roundUp", e[e.roundDown = 1] = "roundDown", e[e.roundCeil = 2] = "roundCeil", e[e.roundFloor = 3] = "roundFloor", e[e.roundHalfUp = 4] = "roundHalfUp", e[e.roundHalfDown = 5] = "roundHalfDown", e[e.roundHalfEven = 6] = "roundHalfEven", e[e.roundHalfCeil = 7] = "roundHalfCeil", e[e.roundHalfFloor = 8] = "roundHalfFloor";
        }(La || (La = {}));
    const _a = Da.config({
        precision: 30,
        toExpNeg: -1024,
        toExpPos: 1024,
        rounding: Da.ROUND_HALF_EVEN
    });
    class Ma {
        constructor(e) {
            this.add = this.plus, this.sub = this.minus, this.eq = this.equals, this.lt = this.lessThan, this.lte = this.lessThanOrEqualTo, this.gt = this.greaterThan, this.gte = this.greaterThanOrEqualTo;
            const t = Ma.unwrapInputValue(e);
            this.internalValue = new _a(t);
        }
        static unwrapInputValue(e) {
            return "string" == typeof e || "number" == typeof e ? e : "internalValue" in e ? e.internalValue : e;
        }
        static max(e, t) {
            const [n, r] = [Ma.unwrapInputValue(e), Ma.unwrapInputValue(t)],
            i = _a.max(n, r);
            return new Ma(i);
        }
        static min(e, t) {
            const [n, r] = [Ma.unwrapInputValue(e), Ma.unwrapInputValue(t)],
            i = _a.min(n, r);
            return new Ma(i);
        }
        abs() {
            const e = this.internalValue.abs();
            return new Ma(e);
        }
        neg() {
            const e = this.internalValue.neg();
            return new Ma(e);
        }
        sqrt() {
            const e = this.internalValue.sqrt();
            return new Ma(e);
        }
        trunc() {
            const e = this.internalValue.trunc();
            return new Ma(e);
        }
        round() {
            const e = this.internalValue.round();
            return new Ma(e);
        }
        isNaN() {
            return this.internalValue.isNaN();
        }
        isInteger() {
            return this.internalValue.isInteger();
        }
        decimalPlaces() {
            return this.internalValue.decimalPlaces();
        }
        plus(e) {
            const t = Ma.unwrapInputValue(e),
                n = this.internalValue.plus(t);
            return new Ma(n);
        }
        minus(e) {
            const t = Ma.unwrapInputValue(e),
                n = this.internalValue.minus(t);
            return new Ma(n);
        }
        times(e) {
            const t = Ma.unwrapInputValue(e),
                n = this.internalValue.times(t);
            return new Ma(n);
        }
        div(e) {
            const t = Ma.unwrapInputValue(e),
                n = this.internalValue.div(t);
            return new Ma(n);
        }
        pow(e) {
            const t = Ma.unwrapInputValue(e),
                n = this.internalValue.pow(t);
            return new Ma(n);
        }
        mod(e) {
            const t = Ma.unwrapInputValue(e),
                n = this.internalValue.mod(t);
            return new Ma(n);
        }
        equals(e) {
            const t = Ma.unwrapInputValue(e);
            return this.internalValue.equals(t);
        }
        lessThan(e) {
            const t = Ma.unwrapInputValue(e);
            return this.internalValue.lessThan(t);
        }
        lessThanOrEqualTo(e) {
            const t = Ma.unwrapInputValue(e);
            return this.internalValue.lessThanOrEqualTo(t);
        }
        greaterThan(e) {
            const t = Ma.unwrapInputValue(e);
            return this.internalValue.greaterThan(t);
        }
        greaterThanOrEqualTo(e) {
            const t = Ma.unwrapInputValue(e);
            return this.internalValue.greaterThanOrEqualTo(t);
        }
        toString() {
            return this.internalValue.toString();
        }
        toNumber() {
            return this.internalValue.toNumber();
        }
        valueOf() {
            return this.internalValue.valueOf();
        }
        toFixed(e) {
            return this.internalValue.toFixed(e);
        }
        toFormat() {
            return this.internalValue.toFormat(...arguments);
        }
        toDecimalPlaces(e) {
            const t = this.internalValue.toDecimalPlaces(e);
            return new Ma(t);
        }
    }
    Ma.rounding = _a.rounding, Ma.defaultValue = new Ma(0);
    const Ua = {};

    function Fa(e, t) {
        const n = Ua[e];
        if (void 0 !== n) return n;
        const r = e.replace(new RegExp("[" + t.join("") + "]", "gi"), "").substr(0, 1),
            i = [];
        let s;
        for (s = 0; s < t.length; s++) i.push({
            index: e.toLowerCase().indexOf(t[s]),
            character: t[s],
            length: e.replace(new RegExp("[^" + t[s] + "]", "gi"), "").length
        });
        i.sort((e, t) => e.index < t.index ? -1 : 1);
        const a = {
            format: e,
            separator: r,
            parts: {},
            regExp: "^"
        };
        for (s = 0; s < i.length; s++) {
            let t = "";
            switch (i[s].character.toLowerCase()) {
                case "h":
                case "m":
                case "d":
                    t = "1,2";
                    break;
                case "s":
                    a.regExp += "(?" + r, t = "1,2";
                    break;
                default:
                    t = i[s].length;
            }
            s > 0 && (a.regExp += "\\" + r), a.regExp += "([0-9]{" + t + "})" + ("s" === i[s].character ? ")?" : ""), a.parts[i[s].character + "Index"] = s, a.parts[i[s].character + "Format"] = e.slice(i[s].index, i[s].index + i[s].length);
        }
        return a.regExp += "$", Ua[e] = a, a;
    }
    class $a {
        static getDayName(e) {
            return $a.DayNames[e];
        }
        static getShortDayName(e) {
            return $a.DayNames[e].slice(0, 3);
        }
        static getMonthName(e) {
            return $a.MonthNames[e - 1];
        }
        static getShortMonthName(e) {
            return $a.MonthNames[e - 1].slice(0, 3);
        }
        static get12HourNotation(e) {
            return e < 12 ? "AM" : "PM";
        }
        static getTimezoneInformationFull(e) {
            return e = -e, $a.getTimezoneSignal(e) + $a.padLeadingZeros(Math.floor(e / 60).toString(), 2) + ":" + $a.padLeadingZeros(Math.floor(e % 60).toString(), 2);
        }
        static getTimezoneInformationHoursFull(e) {
            return e = -e, $a.getTimezoneSignal(e) + $a.padLeadingZeros(Math.floor(e / 60).toString(), 2);
        }
        static getTimezoneInformationHoursShort(e) {
            return e = -e, $a.getTimezoneSignal(e) + Math.floor(e / 60);
        }
        static getTimezoneSignal(e) {
            return e < 0 ? "-" : "+";
        }
        static padLeadingZeros(e, t) {
            let n = e || "";
            for (; n.length < t;) n = "0" + n;
            return n;
        }
        static removeTrailingZeros(e) {
            return (e || "").replace(/0+$/gm, "");
        }
        constructor(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : " ";
            let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
            this.dateFmt = function(e) {
                return Fa(e, ["y", "m", "d"]);
            }(e), this.timeFmt = function(e) {
                return Fa(e, ["h", "m", "s"]);
            }(t), this.dateTimeSep = n, this.tzInformation = r;
        }
        get dateFormat() {
            return this.dateFmt.format;
        }
        get timeFormat() {
            return this.timeFmt.format;
        }
        get dateTimeFormat() {
            return this.dateFmt.format + this.dateTimeSeparator + this.timeFmt.format;
        }
        getRegExpForDate() {
            return new RegExp(this.dateFmt.regExp, "i");
        }
        get yearIndexForDate() {
            return this.dateFmt.parts.yIndex;
        }
        get monthIndexForDate() {
            return this.dateFmt.parts.mIndex;
        }
        get dayIndexForDate() {
            return this.dateFmt.parts.dIndex;
        }
        get yearFormatForDate() {
            return this.dateFmt.parts.yFormat;
        }
        get monthFormatForDate() {
            return this.dateFmt.parts.mFormat;
        }
        get dayFormatForDate() {
            return this.dateFmt.parts.dFormat;
        }
        get dateSeparator() {
            return this.dateFmt.separator;
        }
        getRegExpForTime() {
            return new RegExp(this.timeFmt.regExp, "i");
        }
        get hoursIndexForTime() {
            return this.timeFmt.parts.hIndex;
        }
        get minutesIndexForTime() {
            return this.timeFmt.parts.mIndex;
        }
        get secondsIndexForTime() {
            return this.timeFmt.parts.sIndex;
        }
        get timeSeparator() {
            return this.timeFmt.separator;
        }
        get dateTimeSeparator() {
            return this.dateTimeSep;
        }
        getRegExpForDateTime() {
            return new RegExp(this.dateFmt.regExp.substring(0, this.dateFmt.regExp.length - 1) + this.dateTimeSeparator + this.timeFmt.regExp.substring(1, this.timeFmt.regExp.length - 1) + this.tzInformation + "$", "i");
        }
        get yearIndexForDateTime() {
            return this.dateFmt.parts.yIndex;
        }
        get monthIndexForDateTime() {
            return this.dateFmt.parts.mIndex;
        }
        get dayIndexForDateTime() {
            return this.dateFmt.parts.dIndex;
        }
        get hoursIndexForDateTime() {
            return this.timeFmt.parts.hIndex + 3;
        }
        get hoursFormatForTime() {
            return this.timeFmt.parts.hFormat;
        }
        get minutesFormatForTime() {
            return this.timeFmt.parts.mFormat;
        }
        get secondsFormatForTime() {
            return this.timeFmt.parts.sFormat;
        }
        get minutesIndexForDateTime() {
            return this.timeFmt.parts.mIndex + 3;
        }
        get secondsIndexForDateTime() {
            return this.timeFmt.parts.sIndex + 3;
        }
    }
    $a.DayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], $a.MonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    class Pa {
        constructor(e, t) {
            this.decimalSep = e, this.groupSep = t, this.generateFormatRegExps(e, t);
        }
        generateFormatRegExps(e, t) {
            const n = "\\" + e,
                r = "(([0-9]{1,3}(" + (t ? "\\" + t : "") + "[0-9]{3})*)|([0-9]+))",
                i = "[0-9]+";
            this.integerFmtRegExp = "^[-]?" + r + "$", this.decimalFmtRegExp = "^[-]?((" + r + "(" + n + "(" + i + ")?)?)|((" + r + ")?" + n + i + "))$";
        }
        get decimalSeparator() {
            return this.decimalSep;
        }
        get groupSeparator() {
            return this.groupSep;
        }
        getRegExpForInteger() {
            return new RegExp(this.integerFmtRegExp, "i");
        }
        getRegExpForDecimal() {
            return new RegExp(this.decimalFmtRegExp, "i");
        }
        getRegExpForJSNumber() {
            return new RegExp("^-?(?:0|[1-9]\\d*)(?:\\.\\d+)?(?:[eE][+-]?\\d+)?$", "i");
        }
    }
    class Va {
        constructor(e, t) {
            this.defaultDateTimeFormats = [new $a("yyyy-MM-dd", "HH:mm:ss"), new $a("yyyy-MM-dd", "HH:mm:ss"), new $a("yyyy/MM/dd", "HH:mm:ss"), new $a("yyyy.MM.dd", "HH:mm:ss")], this.defaultNumberFmt = t, this.currentNumberFmt = t, this.defaultDateTimeFormats[0] = e;
        }
        get defaultDateTimeFormat() {
            return this.defaultDateTimeFormats[0];
        }
        get dateTimeFormats() {
            return this.defaultDateTimeFormats;
        }
        set dateTimeFormat(e) {
            this.defaultDateTimeFormats[0] = e;
        }
        get defaultNumberFormat() {
            return this.defaultNumberFmt;
        }
        get numberFormat() {
            return this.currentNumberFmt;
        }
        set numberFormat(e) {
            this.currentNumberFmt = e;
        }
    }
    var Ba = _exports.Format = Object.freeze({
        __proto__: null,
        ApplicationFormatInfo: Va,
        DateTimeFormatInfo: $a,
        NumberFormatInfo: Pa
    });

    function ka(e) {
        let t = e.length;
        const n = new Array(t);
        for (; t-- > 0;) n[t] = e[t];
        return n;
    }

    function za(e) {
        const t = Object.keys(e);

        function n(e) {
            t.forEach(t => {
                this[t] = e[t];
            });
        }
        const r = class {
            constructor(t) {
                this._ = null != t ? t : e;
            }
            get(e) {
                return this._[e];
            }
            set(e, t) {
                const i = new n(this._);
                return i[e] = t, new r(i);
            }
            toJS() {
                const e = {};
                return t.forEach(t => {
                    e[t] = this._[t];
                }), e;
            }
        };
        return r;
    }
    const Ha = 128;
    class ja {
        constructor(e, t) {
            if (void 0 !== t) this._values = e, this._lengths = t;
            else if (void 0 !== e) {
                const t = ja.fromJS(e);
                this._values = t._values, this._lengths = t._lengths;
            } else this._values = [], this._lengths = [];
        }
        clear() {
            return new ja();
        }
        clone() {
            return this;
        }
        count() {
            let e = 0,
                t = this._lengths.length;
            for (; t-- > 0;) e += this._lengths[t];
            return e;
        }
        isEmpty() {
            return 0 === this._lengths.length;
        }
        get(e) {
            let t = 0,
                n = e;
            const r = this._lengths.length;
            for (; t < r && e >= 0;) {
                if (n < this._lengths[t]) return this._values[t][n];
                n -= this._lengths[t], t++;
            }
        }
        set(e, t) {
            let n = 0,
                r = e;
            const i = ka(this._values),
                s = this._lengths,
                a = s.length;
            for (; n < a && e >= 0;) {
                if (r < this._lengths[n]) return i[n] = ka(i[n]), i[n][r] = t, new ja(i, s);
                r -= s[n], n++;
            }
        }
        push(e) {
            let t,
                n,
                r = this._values.length - 1;
            r < 0 ? (r = 0, t = [
                []
            ], n = [0]) : (t = ka(this._values), n = ka(this._lengths));
            const i = t[r];
            if (i.length < Ha) {
                const s = i.length,
                    a = new Array(s + 1);
                let o = s;
                for (; o-- > 0;) a[o] = i[o];
                a[s] = e, t[r] = a, n[r]++;
            } else {
                const r = [e];
                t.push(r), n.push(1);
            }
            return new ja(t, n);
        }
        insert(e, t) {
            let n = 0,
                r = e;
            const i = ka(this._values),
                s = ka(this._lengths);
            let a = s.length;
            for (; n < a && r >= 0;) {
                if (r < s[n]) {
                    if (s[n] === Ha) {
                        const e = 64,
                            t = Ha - e;
                        s.splice(n, 1, e, t);
                        const r = new Array(e),
                            o = new Array(t);
                        for (let t = 0; t < e; t++) r[t] = i[n][t];
                        for (let r = 0, s = e; r < t;) o[r++] = i[n][s++];
                        i.splice(n, 1, r, o), a++;
                        continue;
                    }
                    let e = 0;
                    const o = s[n],
                        l = new Array(o + 1),
                        u = i[n];
                    for (; e < r; e++) l[e] = u[e];
                    l[r] = t;
                    let c = e + 1;
                    for (; e < o;) l[c++] = u[e++];
                    return s[n]++, i[n] = l, new ja(i, s);
                }
                r -= s[n], n++;
            }
            return s.push(1), i.push([t]), new ja(i, s);
        }
        remove(e) {
            let t = 0,
                n = e;
            const r = ka(this._lengths),
                i = ka(this._values),
                s = r.length;
            for (; t < s && n >= 0;) {
                if (n < r[t]) {
                    const e = --r[t],
                        s = new Array(e);
                    let a = 0,
                        o = 0;
                    for (; a < e;) a === n && o++, s[a++] = i[t][o++];
                    return i[t] = s, 0 === r[t] && (r.splice(t, 1), i.splice(t, 1)), new ja(i, r);
                }
                n -= r[t], t++;
            }
        }
        reduce(e, t) {
            for (let n = 0; n < this._values.length; n++) {
                const r = this._values[n];
                for (let n = 0; n < r.length; n++) t = e(t, r[n]);
            }
            return t;
        }
        map(e) {
            const t = new Array(this.count());
            let n = 0;
            for (let r = 0; r < this._values.length; r++) {
                const i = this._values[r];
                for (let r = 0; r < i.length; r++) t[n] = e(i[r], n), n++;
            }
            return t;
        }
        pushAll(e) {
            if (0 === e.length) return this;
            const t = new ja(e),
                n = this._values.concat(t._values),
                r = this._lengths.concat(t._lengths);
            return new ja(n, r);
        }
        forEach(e) {
            for (let t = 0; t < this._values.length; t++) {
                const n = this._values[t];
                for (let t = 0; t < n.length; t++) e(n[t]);
            }
        }
        addFromOther(e) {
            if (0 === e.count()) return this;
            if (0 === this._values.length) return e;
            const t = new Array(this._lengths.length + e._lengths.length),
                n = new Array(this._values.length + e._values.length);
            let r = 0,
                i = 0;
            for (; r < this._values.length;) n[r] = this._values[r], t[r] = this._lengths[r], r++;
            for (; i < e._values.length;) n[r] = e._values[i], t[r] = e._lengths[i], r++, i++;
            return new ja(n, t);
        }
        static fromJS(e) {
            const t = 0 | Math.ceil(e.length / Ha),
                n = new Array(t),
                r = new Array(t);
            let i = 0,
                s = 0;
            for (let a = 0; a < t; a++) {
                s = e.length - i;
                const t = s > Ha ? Ha : s;
                r[a] = t, n[a] = new Array(t);
                for (let r = 0; r < t; r++) n[a][r] = e[i + r];
                i += t;
            }
            return new ja(n, r);
        }
    }
    var qa = _exports.LightImmutable = Object.freeze({
            __proto__: null,
            ImmutableList: ja,
            defineRecordClass: za
        }),
        Ga = Ka,
        Wa = null;
    try {
        Wa = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
    } catch (e) {}

    function Ka(e, t, n) {
        this.low = 0 | e, this.high = 0 | t, this.unsigned = !!n;
    }

    function Ja(e) {
        return !0 === (e && e.__isLong__);
    }
    Ka.prototype.__isLong__, Object.defineProperty(Ka.prototype, "__isLong__", {
        value: !0
    }), Ka.isLong = Ja;
    var Ya = {},
        Xa = {};

    function Qa(e, t) {
        var n, r, i;
        return t ? (i = 0 <= (e >>>= 0) && e < 256) && (r = Xa[e]) ? r : (n = eo(e, (0 | e) < 0 ? -1 : 0, !0), i && (Xa[e] = n), n) : (i = -128 <= (e |= 0) && e < 128) && (r = Ya[e]) ? r : (n = eo(e, e < 0 ? -1 : 0, !1), i && (Ya[e] = n), n);
    }

    function Za(e, t) {
        if (isNaN(e)) return t ? uo : lo;
        if (t) {
            if (e < 0) return uo;
            if (e >= so) return fo;
        } else {
            if (e <= -ao) return mo;
            if (e + 1 >= ao) return po;
        }
        return e < 0 ? Za(-e, t).neg() : eo(e % io | 0, e / io | 0, t);
    }

    function eo(e, t, n) {
        return new Ka(e, t, n);
    }
    Ka.fromInt = Qa, Ka.fromNumber = Za, Ka.fromBits = eo;
    var to = Math.pow;

    function no(e, t, n) {
        if (0 === e.length) throw Error("empty string");
        if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return lo;
        if ("number" == typeof t ? (n = t, t = !1) : t = !!t, (n = n || 10) < 2 || 36 < n) throw RangeError("radix");
        var r;
        if ((r = e.indexOf("-")) > 0) throw Error("interior hyphen");
        if (0 === r) return no(e.substring(1), t, n).neg();
        for (var i = Za(to(n, 8)), s = lo, a = 0; a < e.length; a += 8) {
            var o = Math.min(8, e.length - a),
                l = parseInt(e.substring(a, a + o), n);
            if (o < 8) {
                var u = Za(to(n, o));
                s = s.mul(u).add(Za(l));
            } else s = (s = s.mul(i)).add(Za(l));
        }
        return s.unsigned = t, s;
    }

    function ro(e, t) {
        return "number" == typeof e ? Za(e, t) : "string" == typeof e ? no(e, t) : eo(e.low, e.high, "boolean" == typeof t ? t : e.unsigned);
    }
    Ka.fromString = no, Ka.fromValue = ro;
    var io = 4294967296,
        so = io * io,
        ao = so / 2,
        oo = Qa(1 << 24),
        lo = Qa(0);
    Ka.ZERO = lo;
    var uo = Qa(0, !0);
    Ka.UZERO = uo;
    var co = Qa(1);
    Ka.ONE = co;
    var ho = Qa(1, !0);
    Ka.UONE = ho;
    var go = Qa(-1);
    Ka.NEG_ONE = go;
    var po = eo(-1, 2147483647, !1);
    Ka.MAX_VALUE = po;
    var fo = eo(-1, -1, !0);
    Ka.MAX_UNSIGNED_VALUE = fo;
    var mo = eo(0, -2147483648, !1);
    Ka.MIN_VALUE = mo;
    var vo = Ka.prototype;
    vo.toInt = function() {
        return this.unsigned ? this.low >>> 0 : this.low;
    }, vo.toNumber = function() {
        return this.unsigned ? (this.high >>> 0) * io + (this.low >>> 0) : this.high * io + (this.low >>> 0);
    }, vo.toString = function(e) {
        if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
        if (this.isZero()) return "0";
        if (this.isNegative()) {
            if (this.eq(mo)) {
                var t = Za(e),
                    n = this.div(t),
                    r = n.mul(t).sub(this);
                return n.toString(e) + r.toInt().toString(e);
            }
            return "-" + this.neg().toString(e);
        }
        for (var i = Za(to(e, 6), this.unsigned), s = this, a = "";;) {
            var o = s.div(i),
                l = (s.sub(o.mul(i)).toInt() >>> 0).toString(e);
            if ((s = o).isZero()) return l + a;
            for (; l.length < 6;) l = "0" + l;
            a = "" + l + a;
        }
    }, vo.getHighBits = function() {
        return this.high;
    }, vo.getHighBitsUnsigned = function() {
        return this.high >>> 0;
    }, vo.getLowBits = function() {
        return this.low;
    }, vo.getLowBitsUnsigned = function() {
        return this.low >>> 0;
    }, vo.getNumBitsAbs = function() {
        if (this.isNegative()) return this.eq(mo) ? 64 : this.neg().getNumBitsAbs();
        for (var e = 0 != this.high ? this.high : this.low, t = 31; t > 0 && !(e & 1 << t); t--);
        return 0 != this.high ? t + 33 : t + 1;
    }, vo.isZero = function() {
        return 0 === this.high && 0 === this.low;
    }, vo.eqz = vo.isZero, vo.isNegative = function() {
        return !this.unsigned && this.high < 0;
    }, vo.isPositive = function() {
        return this.unsigned || this.high >= 0;
    }, vo.isOdd = function() {
        return !(1 & ~this.low);
    }, vo.isEven = function() {
        return !(1 & this.low);
    }, vo.equals = function(e) {
        return Ja(e) || (e = ro(e)), (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && this.high === e.high && this.low === e.low;
    }, vo.eq = vo.equals, vo.notEquals = function(e) {
        return !this.eq(e);
    }, vo.neq = vo.notEquals, vo.ne = vo.notEquals, vo.lessThan = function(e) {
        return this.comp(e) < 0;
    }, vo.lt = vo.lessThan, vo.lessThanOrEqual = function(e) {
        return this.comp(e) <= 0;
    }, vo.lte = vo.lessThanOrEqual, vo.le = vo.lessThanOrEqual, vo.greaterThan = function(e) {
        return this.comp(e) > 0;
    }, vo.gt = vo.greaterThan, vo.greaterThanOrEqual = function(e) {
        return this.comp(e) >= 0;
    }, vo.gte = vo.greaterThanOrEqual, vo.ge = vo.greaterThanOrEqual, vo.compare = function(e) {
        if (Ja(e) || (e = ro(e)), this.eq(e)) return 0;
        var t = this.isNegative(),
            n = e.isNegative();
        return t && !n ? -1 : !t && n ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1;
    }, vo.comp = vo.compare, vo.negate = function() {
        return !this.unsigned && this.eq(mo) ? mo : this.not().add(co);
    }, vo.neg = vo.negate, vo.add = function(e) {
        Ja(e) || (e = ro(e));
        var t = this.high >>> 16,
            n = 65535 & this.high,
            r = this.low >>> 16,
            i = 65535 & this.low,
            s = e.high >>> 16,
            a = 65535 & e.high,
            o = e.low >>> 16,
            l = 0,
            u = 0,
            c = 0,
            d = 0;
        return c += (d += i + (65535 & e.low)) >>> 16, u += (c += r + o) >>> 16, l += (u += n + a) >>> 16, l += t + s, eo((c &= 65535) << 16 | (d &= 65535), (l &= 65535) << 16 | (u &= 65535), this.unsigned);
    }, vo.subtract = function(e) {
        return Ja(e) || (e = ro(e)), this.add(e.neg());
    }, vo.sub = vo.subtract, vo.multiply = function(e) {
        if (this.isZero()) return lo;
        if (Ja(e) || (e = ro(e)), Wa) return eo(Wa.mul(this.low, this.high, e.low, e.high), Wa.get_high(), this.unsigned);
        if (e.isZero()) return lo;
        if (this.eq(mo)) return e.isOdd() ? mo : lo;
        if (e.eq(mo)) return this.isOdd() ? mo : lo;
        if (this.isNegative()) return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
        if (e.isNegative()) return this.mul(e.neg()).neg();
        if (this.lt(oo) && e.lt(oo)) return Za(this.toNumber() * e.toNumber(), this.unsigned);
        var t = this.high >>> 16,
            n = 65535 & this.high,
            r = this.low >>> 16,
            i = 65535 & this.low,
            s = e.high >>> 16,
            a = 65535 & e.high,
            o = e.low >>> 16,
            l = 65535 & e.low,
            u = 0,
            c = 0,
            d = 0,
            h = 0;
        return d += (h += i * l) >>> 16, c += (d += r * l) >>> 16, d &= 65535, c += (d += i * o) >>> 16, u += (c += n * l) >>> 16, c &= 65535, u += (c += r * o) >>> 16, c &= 65535, u += (c += i * a) >>> 16, u += t * l + n * o + r * a + i * s, eo((d &= 65535) << 16 | (h &= 65535), (u &= 65535) << 16 | (c &= 65535), this.unsigned);
    }, vo.mul = vo.multiply, vo.divide = function(e) {
        if (Ja(e) || (e = ro(e)), e.isZero()) throw Error("division by zero");
        var t, n, r;
        if (Wa) return this.unsigned || -2147483648 !== this.high || -1 !== e.low || -1 !== e.high ? eo((this.unsigned ? Wa.div_u : Wa.div_s)(this.low, this.high, e.low, e.high), Wa.get_high(), this.unsigned) : this;
        if (this.isZero()) return this.unsigned ? uo : lo;
        if (this.unsigned) {
            if (e.unsigned || (e = e.toUnsigned()), e.gt(this)) return uo;
            if (e.gt(this.shru(1))) return ho;
            r = uo;
        } else {
            if (this.eq(mo)) return e.eq(co) || e.eq(go) ? mo : e.eq(mo) ? co : (t = this.shr(1).div(e).shl(1)).eq(lo) ? e.isNegative() ? co : go : (n = this.sub(e.mul(t)), r = t.add(n.div(e)));
            if (e.eq(mo)) return this.unsigned ? uo : lo;
            if (this.isNegative()) return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
            if (e.isNegative()) return this.div(e.neg()).neg();
            r = lo;
        }
        for (n = this; n.gte(e);) {
            t = Math.max(1, Math.floor(n.toNumber() / e.toNumber()));
            for (var i = Math.ceil(Math.log(t) / Math.LN2), s = i <= 48 ? 1 : to(2, i - 48), a = Za(t), o = a.mul(e); o.isNegative() || o.gt(n);) o = (a = Za(t -= s, this.unsigned)).mul(e);
            a.isZero() && (a = co), r = r.add(a), n = n.sub(o);
        }
        return r;
    }, vo.div = vo.divide, vo.modulo = function(e) {
        return Ja(e) || (e = ro(e)), Wa ? eo((this.unsigned ? Wa.rem_u : Wa.rem_s)(this.low, this.high, e.low, e.high), Wa.get_high(), this.unsigned) : this.sub(this.div(e).mul(e));
    }, vo.mod = vo.modulo, vo.rem = vo.modulo, vo.not = function() {
        return eo(~this.low, ~this.high, this.unsigned);
    }, vo.and = function(e) {
        return Ja(e) || (e = ro(e)), eo(this.low & e.low, this.high & e.high, this.unsigned);
    }, vo.or = function(e) {
        return Ja(e) || (e = ro(e)), eo(this.low | e.low, this.high | e.high, this.unsigned);
    }, vo.xor = function(e) {
        return Ja(e) || (e = ro(e)), eo(this.low ^ e.low, this.high ^ e.high, this.unsigned);
    }, vo.shiftLeft = function(e) {
        return Ja(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? eo(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : eo(0, this.low << e - 32, this.unsigned);
    }, vo.shl = vo.shiftLeft, vo.shiftRight = function(e) {
        return Ja(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? eo(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : eo(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned);
    }, vo.shr = vo.shiftRight, vo.shiftRightUnsigned = function(e) {
        if (Ja(e) && (e = e.toInt()), 0 === (e &= 63)) return this;
        var t = this.high;
        return e < 32 ? eo(this.low >>> e | t << 32 - e, t >>> e, this.unsigned) : eo(32 === e ? t : t >>> e - 32, 0, this.unsigned);
    }, vo.shru = vo.shiftRightUnsigned, vo.shr_u = vo.shiftRightUnsigned, vo.toSigned = function() {
        return this.unsigned ? eo(this.low, this.high, !1) : this;
    }, vo.toUnsigned = function() {
        return this.unsigned ? this : eo(this.low, this.high, !0);
    }, vo.toBytes = function(e) {
        return e ? this.toBytesLE() : this.toBytesBE();
    }, vo.toBytesLE = function() {
        var e = this.high,
            t = this.low;
        return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24];
    }, vo.toBytesBE = function() {
        var e = this.high,
            t = this.low;
        return [e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t];
    }, Ka.fromBytes = function(e, t, n) {
        return n ? Ka.fromBytesLE(e, t) : Ka.fromBytesBE(e, t);
    }, Ka.fromBytesLE = function(e, t) {
        return new Ka(e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24, e[4] | e[5] << 8 | e[6] << 16 | e[7] << 24, t);
    }, Ka.fromBytesBE = function(e, t) {
        return new Ka(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7], e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], t);
    };
    var yo = Ca(Ga);
    class bo {
        constructor(e, t, n) {
            this.neg = this.negate, this.eq = this.equals, this.lt = this.lessThan, this.lte = this.lessThanOrEqual, this.gt = this.greaterThan, this.gte = this.greaterThanOrEqual, this.internalValue = new yo(e, t, n);
        }
        static fromNumber(e) {
            const t = new bo(0);
            return t.internalValue = yo.fromNumber(e), t;
        }
        static fromString(e) {
            const t = new bo(0);
            return t.internalValue = yo.fromString(e), t;
        }
        static fromValue(e) {
            const t = "object" == typeof e ? e.internalValue : e,
                n = new bo(0);
            return n.internalValue = yo.fromValue(t), n;
        }
        static fromObject(e) {
            const t = yo.fromValue(e);
            return bo.fromString(t.toString());
        }
        static unwrapInputValue(e) {
            return "string" == typeof e || "number" == typeof e ? e : "internalValue" in e ? e.internalValue : e;
        }
        negate() {
            const e = this.internalValue.negate();
            return bo.fromObject(e);
        }
        add(e) {
            const t = bo.unwrapInputValue(e),
                n = this.internalValue.add(t);
            return bo.fromObject(n);
        }
        sub(e) {
            const t = bo.unwrapInputValue(e),
                n = this.internalValue.sub(t);
            return bo.fromObject(n);
        }
        mul(e) {
            const t = bo.unwrapInputValue(e),
                n = this.internalValue.mul(t);
            return bo.fromObject(n);
        }
        div(e) {
            const t = bo.unwrapInputValue(e),
                n = this.internalValue.div(t);
            return bo.fromObject(n);
        }
        and(e) {
            const t = bo.unwrapInputValue(e),
                n = this.internalValue.and(t);
            return bo.fromObject(n);
        }
        equals(e) {
            const t = bo.unwrapInputValue(e);
            return this.internalValue.equals(t);
        }
        lessThan(e) {
            const t = bo.unwrapInputValue(e);
            return this.internalValue.lessThan(t);
        }
        lessThanOrEqual(e) {
            const t = bo.unwrapInputValue(e);
            return this.internalValue.lessThanOrEqual(t);
        }
        greaterThan(e) {
            const t = bo.unwrapInputValue(e);
            return this.internalValue.greaterThan(t);
        }
        greaterThanOrEqual(e) {
            const t = bo.unwrapInputValue(e);
            return this.internalValue.greaterThanOrEqual(t);
        }
        toNumber() {
            return this.internalValue.toNumber();
        }
        toString() {
            return this.internalValue.toString();
        }
        valueOf() {
            return this.internalValue.valueOf();
        }
    }
    bo.defaultValue = bo.fromObject(yo.ZERO), bo.MIN_VALUE = bo.fromObject(yo.MIN_VALUE), bo.MAX_VALUE = bo.fromObject(yo.MAX_VALUE);
    const To = "outsystems-";

    function wo(e, t) {
        if (t = null != t ? t : To, "object" != typeof e || null === e) return;
        const n = {};
        for (const [r, i] of Object.entries(e)) n[t + r] = i;
        return n;
    }

    function Eo(e, t) {
        const n = (t = null != t ? t : To).toLowerCase();
        if ("object" != typeof e || null === e) return {};
        const r = {};
        for (const [i, s] of Object.entries(e)) i.toLowerCase().startsWith(n) && (r[i.substring(t.length)] = s);
        return r;
    }
    var Io = _exports.CommunicationHeaders = Object.freeze({
        __proto__: null,
        buildCustomHeaders: wo,
        extractCustomHeaders: Eo
    });
    const Ao = "Communication",
        No = e => b(void 0, [e], void 0, function(_ref8) {
            let {
                url: e,
                params: t,
                headers: n,
                responseType: r,
                useLocaleInfo: i,
                timeout: s,
                timeoutHandler: a,
                baseURL: o,
                httpClient: l = gn.resolve(pn.HttpClient)
            } = _ref8;
            return function*() {
                if (!l) throw new Error("Could not resolve the http client instance.");
                try {
                    return yield l.get({
                        url: e,
                        params: t,
                        headers: n,
                        responseType: r,
                        useLocaleInfo: i,
                        timeout: s,
                        timeoutHandler: a,
                        baseURL: o
                    });
                } catch (e) {
                    throw Oo(e);
                }
            }();
        }),
        So = e => Ro(e) || Co(e),
        Do = e => null !== e && "object" == typeof e && "boolean" == typeof e.hasApiVersionChanged && "boolean" == typeof e.hasModuleVersionChanged,
        Ro = e => null !== e && "object" == typeof e && (!e.hasOwnProperty("exception") || void 0 === e.exception) && "string" == typeof e.clientSettingsHash && "boolean" == typeof e.shouldRefreshToken && Do(e.versionInfo),
        Co = e => null !== e && "object" == typeof e && "object" == typeof e.exception && "string" == typeof e.clientSettingsHash && ("number" == typeof e.status || void 0 === e.status) && "boolean" == typeof e.shouldRefreshToken && Do(e.versionInfo),
        xo = t => b(void 0, [t], void 0, function(_ref9) {
            let {
                url: t,
                payload: n,
                params: r,
                headers: i,
                contentType: s,
                timeout: a,
                timeoutHandler: o,
                useLocaleInfo: l,
                baseURL: u,
                responseHandler: h,
                refreshAuthTokens: g = Vr,
                httpClient: p = gn.resolve(pn.HttpClient),
                lifecycleEventsManager: f = gn.resolve(pn.LifecycleEventsManager),
                actionOrAggregateName: m
            } = _ref9;
            return function*() {
                if (!p) throw new Error("Could not resolve the http client instance.");
                const v = wo(i),
                    y = Object.assign(Object.assign({}, v), {
                        "content-type": "application/json; charset=UTF-8"
                    });
                let b = [];
                try {
                    const i = yield p.post({
                        url: t,
                        payload: n,
                        params: r,
                        headers: y,
                        contentType: null != s ? s : _communicationJs.ContentType.Json,
                        timeout: a,
                        timeoutHandler: o,
                        useLocaleInfo: l,
                        baseURL: u,
                        responseHandler: Lo(h)
                    });
                    if ((null == i ? void 0 : i.shouldRefreshToken) && (fi(Ao, "Refresh Tokens initiated: Response from the server indicates that tokens should be refreshed.", _loggerJs.Visibility.Internal), yield g()), b = (e => {
                            const t = [];
                            if (So(e) && !e.versionInfo.hasModuleVersionChanged && e.versionInfo.hasApiVersionChanged) {
                                const e = "The application was unable to make a request to the server - the API version changed, but the module version did not.";
                                t.push({
                                    clientMessage: e,
                                    internalMessage: e
                                });
                            }
                            return t;
                        })(i), So(i) && _o(i, (e, t) => null == f ? void 0 : f.onNewVersion(e, t)), Co(i)) throw Mo(i, m);
                    return null == i ? void 0 : i.data;
                } catch (e) {
                    throw Oo(e);
                } finally {
                    for (const {
                            clientMessage: e,
                            internalMessage: t
                        } of b) xi({
                        category: Ao,
                        clientMessage: e,
                        internalMessage: t,
                        errorCode: _communicationJs.ErrorCodes.Communication_Internal_Server_Error
                    });
                }
            }();
        }),
        Lo = e => {
            if ("function" == typeof e) return _ref10 => {
                let {
                    data: t,
                    responseHeaders: n
                } = _ref10;
                const r = Eo(n);
                e({
                    data: t,
                    responseHeaders: r
                });
            };
        },
        Oo = t => {
            var n, r, i, s, a, o;
            if ("OS-CLRT-40103" === t.errorCode) throw vi(Ao, "User is not logged in", t.errorCode, t, _loggerJs.Visibility.Internal), new st.SecurityException("Not authorized", lt(t));
            if ((o = t.errorCode) && Object.values(_communicationJs.ErrorCodes).includes(o)) {
                const e = null !== (r = null === (n = t.response) || void 0 === n ? void 0 : n.exception) && void 0 !== r ? r : t;
                throw new st.CommunicationException(`CommunicationException: ${null !== (i = e.message) && void 0 !== i ? i : t.message}`, lt(e), t.errorCode, t.category);
            }
            return t.errorCode = null !== (s = t.errorCode) && void 0 !== s ? s : _communicationJs.ErrorCodes.Communication_Default, t.category = null !== (a = t.category) && void 0 !== a ? a : Ao, t;
        },
        _o = (e, t) => {
            if (e.versionInfo.hasModuleVersionChanged) {
                if (e.versionInfo.hasApiVersionChanged) throw t(!0, !!e.versionInfo.isAutoUpgradeEnabled), new st.ViewHasChangedException("View has changed.");
                t(!1, !!e.versionInfo.isAutoUpgradeEnabled);
            }
        },
        Mo = (t, n) => {
            var r, i;
            const s = ct(t.exception),
                a = `Post request ${n ? `issued by '${n}' ` : ""}failed: ${s.message}`,
                o = "Post request failed",
                l = {};
            return t.status && (l["http.status_code"] = t.status), 250 === t.status ? vi(Ao, o, null !== (r = s.errorCode) && void 0 !== r ? r : _communicationJs.ErrorCodes.Communication_Default, void 0, _loggerJs.Visibility.Internal, l) : xi({
                category: Ao,
                clientMessage: a,
                internalMessage: o,
                errorCode: null !== (i = s.errorCode) && void 0 !== i ? i : _communicationJs.ErrorCodes.Communication_Default,
                errorObj: s,
                attributes: l
            }), s;
        };
    var Uo = _exports.Communication = Object.freeze({
        __proto__: null,
        SCREEN_SERVICES_EXCEPTION_HTTP_STATUS_CODE: 250,
        get: No,
        getResponseUrl: e => b(void 0, [e], void 0, function(_ref11) {
            let {
                url: e,
                params: t,
                headers: n,
                useLocaleInfo: r,
                timeout: i,
                timeoutHandler: s,
                baseURL: a,
                httpClient: o = gn.resolve(pn.HttpClient)
            } = _ref11;
            return function*() {
                if (!o) throw new Error("Could not resolve the http client instance.");
                return o.getResponseUrl({
                    url: e,
                    params: t,
                    headers: n,
                    useLocaleInfo: r,
                    timeout: i,
                    timeoutHandler: s,
                    baseURL: a
                });
            }();
        }),
        post: xo
    });
    const Fo = "__cache";

    function $o(e, t) {
        return null == e ? t : e;
    }
    var Po;
    ! function(e) {
        e[e.Integer = 0] = "Integer", e[e.LongInteger = 1] = "LongInteger", e[e.Decimal = 2] = "Decimal", e[e.Currency = 3] = "Currency", e[e.Text = 4] = "Text", e[e.PhoneNumber = 5] = "PhoneNumber", e[e.Email = 6] = "Email", e[e.Boolean = 7] = "Boolean", e[e.Date = 8] = "Date", e[e.DateTime = 9] = "DateTime", e[e.Time = 10] = "Time", e[e.Record = 11] = "Record", e[e.RecordList = 12] = "RecordList", e[e.BinaryData = 13] = "BinaryData", e[e.Object = 14] = "Object";
    }(Po || (Po = {}));
    const Vo = e => {
        switch (e) {
            case Po.Integer:
                return "Integer";
            case Po.LongInteger:
                return "Long Integer";
            case Po.Decimal:
                return "Decimal";
            case Po.Currency:
                return "Currency";
            case Po.Text:
                return "Text";
            case Po.PhoneNumber:
                return "Phone Number";
            case Po.Email:
                return "Email";
            case Po.Boolean:
                return "Boolean";
            case Po.Date:
                return "Date";
            case Po.DateTime:
                return "Date Time";
            case Po.Time:
                return "Time";
            case Po.Record:
                return "Record";
            case Po.RecordList:
                return "List";
            case Po.BinaryData:
                return "Binary Data";
            case Po.Object:
                return "Object";
            default:
                return `Unknown: ${e}`;
        }
    };
    class Bo {
        constructor(e, t, n) {
            this._url = t, this.getOfflineContent = n, this._cachedBlob = null, this.authenticatedUrlsRegex = [/screenservices\/.*\/_BinaryContent\/.*/], "undefined" != typeof Blob && e instanceof Blob ? (this._cachedBlob = e, this.getOfflineContent = () => this._content ? Promise.resolve(this._content) : Bo.blobToBase64(this._cachedBlob)) : this._content = e || null;
        }
        get url() {
            return this._url;
        }
        set url(e) {
            this._url = e, this.clearCachedBlob();
        }
        get cachedBlob() {
            return this._cachedBlob;
        }
        get content() {
            return this._content;
        }
        set content(e) {
            this._content = e, this.clearCachedBlob();
        }
        needsAuthentication() {
            var e;
            const t = null !== (e = this._url) && void 0 !== e ? e : "";
            return this.authenticatedUrlsRegex.some(e => e.test(t));
        }
        loadBlobData() {
            return b(this, void 0, void 0, function*() {
                var e;
                const t = yield No({
                    url: null !== (e = this._url) && void 0 !== e ? e : "",
                    responseType: "blob"
                });
                return null != t ? t : new Blob();
            });
        }
        loadContent() {
            return b(this, void 0, void 0, function*() {
                return this.needsAuthentication() ? this.loadBlobData().then(e => (this._cachedBlob = e, Promise.resolve(this))) : this.getOfflineContent ? this.getOfflineContent().then(e => (this.content = e, Promise.resolve(this))) : It(() => this);
            });
        }
        hasContent() {
            return !!(this._url && !this.needsAuthentication() || this._content);
        }
        fastEquals(e) {
            return e && this.constructor === e.constructor && this._url === e._url && this._content === e._content && (!!this.getOfflineContent && !!e.getOfflineContent || !this.getOfflineContent && !e.getOfflineContent);
        }
        base64toHex(e) {
            const t = atob(e);
            let n = "";
            for (let e = 0; e < t.length; e++) {
                const r = t.charCodeAt(e).toString(16);
                n += 2 === r.length ? r : "0" + r;
            }
            return n;
        }
        getContentType() {
            if (this._content) {
                const e = this.base64toHex(this._content.substr(0, 16));
                return "00000100" === e.substr(0, 8) ? "image/x-icon" : "ffd8ffdb" === e.substr(0, 8) || "ffd8ffe0" === e.substr(0, 8) || "ffd8ffe1" === e.substr(0, 8) ? "image/jpeg" : "49492a00" === e.substr(0, 8) || "4d4d002a" === e.substr(0, 8) ? "image/tiff" : "424d" === e.substr(0, 4) ? "image/bmp" : "474946" === e.substr(0, 6) ? "image/gif" : "89504e47" === e.substr(0, 8) ? "image/png" : "application/octet-stream";
            }
            return null;
        }
        toDataURI() {
            return this._content ? `data:${this.getContentType()};base64,${this._content}` : null;
        }
        toBlob() {
            var e;
            if (!this._cachedBlob && this._content) {
                const t = null !== (e = this.getContentType()) && void 0 !== e ? e : void 0;
                this._cachedBlob = Bo.base64toBlob(this._content, t);
            }
            return this._cachedBlob;
        }
        toArrayBuffer() {
            return this._content ? Bo.base64ToArrayBuffer(this._content) : null;
        }
        get length() {
            const e = this.toBlob();
            return e ? e.size : 0;
        }
        static blobToBase64(e) {
            return new Promise((t, n) => {
                const r = new FileReader();
                r.readAsDataURL(e), r.onload = () => {
                    const e = r.result;
                    t(e.substring(e.indexOf(",") + 1));
                }, r.onerror = () => {
                    n(r.error);
                };
            });
        }
        static base64toBlob(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;
            const r = atob((e || "").replace(/\s/g, "")),
                i = [];
            for (let e = 0; e < r.length; e += n) {
                const t = r.slice(e, e + n),
                    s = new Array(t.length);
                for (let e = 0; e < t.length; e++) s[e] = t.charCodeAt(e);
                const a = new Uint8Array(s);
                i.push(a);
            }
            return new Blob(i, {
                type: t
            });
        }
        static base64ToArrayBuffer(e) {
            return Uint8Array.from(atob(e), e => e.charCodeAt(0)).buffer;
        }
        clearCachedBlob() {
            this._cachedBlob = null;
        }
    }
    Bo.defaultValue = new Bo();
    class ko {
        static get defaultValue() {
            return ko.defaultValueField;
        }
        constructor(e, t, n, r, i, s, a) {
            if (0 === arguments.length) this.date = new Date(1900, 0, 1, 0, 0, 0, 0);
            else if (1 === arguments.length) {
                if (e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)) {
                    const t = e.getTime();
                    isNaN(t) ? this.date = new Date(1900, 0, 1, 0, 0, 0, 0) : this.date = new Date(t);
                } else this.date = new Date(e);
            } else $o(e, 1900) < 100 ? (this.date = new Date(100, 0, 1, 0, 0, 0, 0), this.date.setFullYear($o(e, 1900)), this.date.setMonth($o(t, 1) - 1), this.date.setDate($o(n, 1)), this.date.setHours($o(r, 0)), this.date.setMinutes($o(i, 0)), this.date.setSeconds($o(s, 0)), this.date.setMilliseconds($o(a, 0))) : this.date = new Date($o(e, 1900), $o(t, 1) - 1, $o(n, 1), $o(r, 0), $o(i, 0), $o(s, 0), $o(a, 0));
        }
        get year() {
            return this.date.getFullYear();
        }
        get month() {
            return this.date.getMonth() + 1;
        }
        get day() {
            return this.date.getDate();
        }
        get hours() {
            return this.date.getHours();
        }
        get minutes() {
            return this.date.getMinutes();
        }
        get seconds() {
            return this.date.getSeconds();
        }
        get milliseconds() {
            return this.date.getMilliseconds();
        }
        get weekDay() {
            return this.date.getDay();
        }
        addYears(e) {
            const t = new ko(this.year + e, this.month, this.day, this.hours, this.minutes, this.seconds, this.milliseconds);
            return 2 === this.month && 29 === this.day && 3 === t.month ? new ko(t.year, 2, 28, t.hours, t.minutes, t.seconds, t.milliseconds) : t;
        }
        daysInMonth(e, t) {
            return new Date(t, e, 0).getDate();
        }
        addMonths(e) {
            const t = new ko(this.year, this.month + e, this.day, this.hours, this.minutes, this.seconds, this.milliseconds);
            return t.day === this.day ? t : new ko(t.year, t.month - 1, this.daysInMonth(t.month - 1, t.year), t.hours, t.minutes, t.seconds, t.milliseconds);
        }
        addDays(e) {
            return new ko(this.year, this.month, this.day + e, this.hours, this.minutes, this.seconds, this.milliseconds);
        }
        addHours(e) {
            return new ko(this.year, this.month, this.day, this.hours + e, this.minutes, this.seconds, this.milliseconds);
        }
        addMinutes(e) {
            return new ko(this.year, this.month, this.day, this.hours, this.minutes + e, this.seconds, this.milliseconds);
        }
        addSeconds(e) {
            return new ko(this.year, this.month, this.day, this.hours, this.minutes, this.seconds + e, this.milliseconds);
        }
        addMilliseconds(e) {
            return new ko(this.year, this.month, this.day, this.hours, this.minutes, this.seconds, this.milliseconds + e);
        }
        equals(e) {
            return !!e && this.date.getTime() === e.date.getTime();
        }
        eq(e) {
            return this.equals(e);
        }
        greaterThan(e) {
            return this.date > e.date;
        }
        gt(e) {
            return this.greaterThan(e);
        }
        greaterThanOrEqualTo(e) {
            return this.date >= e.date;
        }
        gte(e) {
            return this.greaterThanOrEqualTo(e);
        }
        lessThan(e) {
            return this.date < e.date;
        }
        lt(e) {
            return this.lessThan(e);
        }
        lessThanOrEqualTo(e) {
            return this.date <= e.date;
        }
        lte(e) {
            return this.lessThanOrEqualTo(e);
        }
        toNative() {
            return new Date(this.date.getTime());
        }
        getTime() {
            return this.date.getTime();
        }
        valueOf() {
            return this.date.valueOf();
        }
        static fromISODate(e) {
            return zo.RFC3339_DATEPART.test(e) ? ko.internalFromUTCWithoutConversion(e + "T00:00:00Z") : ko.defaultValue;
        }
        toISODate() {
            return this.toString(zo.RFC3339_DATEPART_FORMAT);
        }
        static fromISOTime(e) {
            return zo.RFC3339_TIMEPART.test(e) ? ko.internalFromUTCWithoutConversion("1900-01-01T" + e + "Z") : ko.defaultValue;
        }
        toISOTime() {
            return this.toString(zo.RFC3339_TIMEPART_FORMAT);
        }
        static fromISODateTime(e) {
            if ("" === (e = e || "") || e.indexOf("1900-01-01") >= 0 && e.indexOf("00:00:00") >= 0) return ko.defaultValue;
            if (e.indexOf("T") > 0 && !/([+\-]\d{2}((:\d{2})|(\d{2})?)|Z)$/.test(e)) return ko.internalFromUTCWithoutConversion(e.trim() + "Z");
            e = e.replace(/([+-]\d{2})$/, function(e) {
                return e + "00";
            });
            const t = Date.parse(e);
            return isNaN(t) ? ko.defaultValue : new ko(t);
        }
        static internalFromUTCWithoutConversion(e) {
            const t = Date.parse(e);
            if (!isNaN(t)) {
                const e = new Date(t);
                return new ko(e.getUTCFullYear(), e.getUTCMonth() + 1, e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds());
            }
            return ko.defaultValue;
        }
        getMillisecondsString() {
            return (this.milliseconds / 1e3).toFixed(3).substring(2, 5);
        }
        toString(e) {
            return void 0 === e ? this.equals(ko.defaultValue) ? "1900-01-01T00:00:00" : this.date.toISOString() : e.replace(/(\\.)|dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|ff?f?|FF?F?|\.FF?F?|tt?|zz?z?/g, e => {
                if (0 === e.indexOf("\\")) return e.substring(1);
                switch (e) {
                    case "hh":
                    case "h":
                        const t = this.hours < 13 ? this.hours : this.hours - 12;
                        return $a.padLeadingZeros((0 === this.hours ? 12 : t).toString(), e.length);
                    case "HH":
                    case "H":
                        return $a.padLeadingZeros(this.hours.toString(), e.length);
                    case "mm":
                    case "m":
                        return $a.padLeadingZeros(this.minutes.toString(), e.length);
                    case "ss":
                    case "s":
                        return $a.padLeadingZeros(this.seconds.toString(), e.length);
                    case "fff":
                        return this.getMillisecondsString();
                    case "ff":
                        return this.getMillisecondsString().substring(0, 2);
                    case "f":
                        return this.getMillisecondsString().substring(0, 1);
                    case ".FFF":
                    case ".FF":
                    case ".F":
                        return 0 === this.milliseconds ? "" : "." + $a.removeTrailingZeros(this.getMillisecondsString());
                    case "FFF":
                        return $a.removeTrailingZeros(this.getMillisecondsString());
                    case "FF":
                        return $a.removeTrailingZeros(this.getMillisecondsString()).substring(0, 2);
                    case "F":
                        return $a.removeTrailingZeros(this.getMillisecondsString()).substring(0, 1);
                    case "yyyy":
                    case "yyy":
                        const n = this.year.toString();
                        return "0" === n.charAt(0) ? this.year.toString().substring(1) : n;
                    case "yy":
                        return this.year.toString().substring(2, 4);
                    case "y":
                        return Number(this.year.toString().substring(2, 4)).toString();
                    case "dddd":
                        return $a.getDayName(this.weekDay);
                    case "ddd":
                        return $a.getShortDayName(this.weekDay);
                    case "dd":
                    case "d":
                        return $a.padLeadingZeros(this.day.toString(), e.length);
                    case "MMMM":
                        return $a.getMonthName(this.month);
                    case "MMM":
                        return $a.getShortMonthName(this.month);
                    case "MM":
                    case "M":
                        return $a.padLeadingZeros(this.month.toString(), e.length);
                    case "t":
                        return $a.get12HourNotation(this.hours).substring(0, 1);
                    case "tt":
                        return $a.get12HourNotation(this.hours);
                    case "zzz":
                        return $a.getTimezoneInformationFull(this.date.getTimezoneOffset());
                    case "zz":
                        return $a.getTimezoneInformationHoursFull(this.date.getTimezoneOffset());
                    case "z":
                        return $a.getTimezoneInformationHoursShort(this.date.getTimezoneOffset());
                    default:
                        return e;
                }
            });
        }
    }
    var zo;
    ko.defaultValueField = new ko(),
        function(e) {
            e.RFC3339_TIMEPART = /^([01][0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9](\.\d+)?)?$/, e.RFC3339_DATEPART = /^\d{4,}-(0\d|1[012])-([0-2]\d|3[01])$/, e.RFC3339_TIMEPART_FORMAT = "HH:mm:ss", e.RFC3339_DATEPART_FORMAT = "yyyy-MM-dd", e.MIN_INTEGER_VALUE = -2147483648, e.MAX_INTEGER_VALUE = 2147483647, e.MIN_LONGINTEGER_VALUE = bo.MIN_VALUE, e.MAX_LONGINTEGER_VALUE = bo.MAX_VALUE, e.MIN_DECIMAL_VALUE = new Ma("2").pow(96).neg(), e.MAX_DECIMAL_VALUE = new Ma("2").pow(96).minus(1), e.MIN_DATE_VALUE = new ko(1753, 1, 1), e.MAX_DATE_VALUE = new ko(9999, 12, 31), e.MIN_TIME_VALUE = ko.defaultValue, e.MAX_TIME_VALUE = ko.defaultValue.addHours(23).addMinutes(59).addSeconds(59), e.MIN_DATETIME_VALUE = new ko(1753, 1, 1, 0, 0, 0), e.MAX_DATETIME_VALUE = new ko(9999, 12, 31, 23, 59, 59), e.DEFAULT_INTEGER = 0, e.DEFAULT_LONGINTEGER = bo.defaultValue, e.DEFAULT_DECIMAL = Ma.defaultValue, e.DEFAULT_CURRENCY = Ma.defaultValue, e.DEFAULT_TEXT = "", e.DEFAULT_PHONENUMBER = "", e.DEFAULT_EMAIL = "", e.DEFAULT_BOOLEAN = !1, e.DEFAULT_DATE = ko.defaultValue, e.DEFAULT_DATETIME = ko.defaultValue, e.DEFAULT_TIME = ko.defaultValue, e.DEFAULT_BINARYDATA = Bo.defaultValue, e.DEFAULT_OBJECT = null, e.FORMAT = new Va(new $a("yyyy-MM-dd", "HH:mm:ss"), new Pa(".", "")), e.ISO_DATE_FORMAT_REGEXP = /^\d{4,}-(0\d|1[012])-([0-2]\d|3[01])([T ]\d{2}:\d{2}(:\d{2}(\.\d+)?(([+\-]\d{2}((:\d{2})|(\d{2})?))|Z)?)?)?$/i;
        }(zo || (zo = {}));
    class Ho {
        constructor() {
            this.map = {};
        }
        getItem(e) {
            return this.map[e];
        }
        setItem(e, t) {
            this.map[e] = t;
        }
        invalidate(e) {
            void 0 === e ? this.map = {} : this.setItem(e, void 0);
        }
        clone() {
            const e = new Ho();
            for (const t in this.map) e.setItem(t, this.map[t]);
            return e;
        }
    }
    class jo {
        constructor() {
            this.list = [];
        }
        getItem(e) {
            if (!(e >= this.length)) return this.list[e];
        }
        append(e) {
            this.list.push(e);
        }
        appendMultiple(e) {
            this.list = this.list.concat(new Array(e));
        }
        setItem(e, t) {
            this.list[e] = t;
        }
        insert(e, t) {
            this.list.splice(e, 0, t);
        }
        invalidate(e) {
            void 0 === e ? this.list = [] : this.list.splice(e, 1);
        }
        get length() {
            return this.list.length;
        }
    }

    function qo(e, t) {
        if ("string" == typeof e) {
            const n = t;
            return e.localeCompare(n);
        }
        return "number" == typeof e ? e - t : "boolean" == typeof e ? !e && t ? -1 : e && !t ? 1 : 0 : e.lessThan(t) ? -1 : e.greaterThan(t) ? 1 : 0;
    }

    function Go(e, t) {
        return e && t && t.equals instanceof Function ? t.equals(e) : t === e;
    }

    function Wo(e) {
        switch (e) {
            case Po.Integer:
                return zo.DEFAULT_INTEGER;
            case Po.LongInteger:
                return zo.DEFAULT_LONGINTEGER;
            case Po.Decimal:
                return zo.DEFAULT_DECIMAL;
            case Po.Currency:
                return zo.DEFAULT_CURRENCY;
            case Po.Text:
                return zo.DEFAULT_TEXT;
            case Po.PhoneNumber:
                return zo.DEFAULT_PHONENUMBER;
            case Po.Email:
                return zo.DEFAULT_EMAIL;
            case Po.Date:
                return zo.DEFAULT_DATE;
            case Po.DateTime:
                return zo.DEFAULT_DATETIME;
            case Po.Time:
                return zo.DEFAULT_TIME;
            case Po.Boolean:
                return zo.DEFAULT_BOOLEAN;
            case Po.BinaryData:
                return zo.DEFAULT_BINARYDATA;
            case Po.Object:
                return zo.DEFAULT_OBJECT;
            default:
                throw new TypeError("Records and Record lists are not basic types");
        }
    }
    class Ko {
        constructor(e, t, n, r, i) {
            if (this.emptyListItem = e, this.data = null != t ? t : new ja(), this.itemIds = null != n ? n : new ja(), this._itemIdSeed = null != r ? r : 0, this._modelId = i || Ko.nextModelId++, t && !n)
                for (let e = 0, t = this.data.count(); e < t; e++) this.itemIds = this.itemIds.push(this._itemIdSeed), this._itemIdSeed = this._itemIdSeed + 1 | 0;
        }
        get modelId() {
            return this._modelId;
        }
        push(e) {
            return new Ko(this.emptyListItem, this.data.push(e), this.itemIds.push(this._itemIdSeed), this._itemIdSeed + 1 | 0, this._modelId);
        }
        addFromOther(e) {
            return new Ko(this.emptyListItem, this.data.addFromOther(e.data), this.itemIds.pushAll(e.data.map(() => this._itemIdSeed++)), this._itemIdSeed, this._modelId);
        }
        pushAll(e) {
            return new Ko(this.emptyListItem, this.data.pushAll(e), this.itemIds.pushAll(e.map(() => this._itemIdSeed++)), this._itemIdSeed, this._modelId);
        }
        remove(e) {
            return new Ko(this.emptyListItem, this.data.remove(e), this.itemIds.remove(e), this._itemIdSeed, this._modelId);
        }
        insert(e, t) {
            return new Ko(this.emptyListItem, this.data.insert(e, t), this.itemIds.insert(e, this._itemIdSeed), this._itemIdSeed + 1 | 0, this._modelId);
        }
        sort(e, t, n) {
            const r = this.data.map((n, r) => ({
                    item: e(r),
                    itemId: this.itemIds.get(r),
                    by: t(e(r))
                })),
                i = n ? 1 : -1;
            r.sort((e, t) => i * qo(e.by, t.by));
            const s = ja.fromJS(r.map(e => e.item)),
                a = ja.fromJS(r.map(e => e.itemId));
            return new Ko(this.emptyListItem, s, a, this._itemIdSeed, this._modelId);
        }
        getEmptyListItem() {
            return this.emptyListItem;
        }
        setEmptyListItem(e) {
            return new Ko(e, this.data, this.itemIds, this._itemIdSeed, this._modelId);
        }
        get(e) {
            return this.data.get(e);
        }
        getId(e) {
            return `${this.modelId}_${this.itemIds.get(e)}`;
        }
        count() {
            return this.data.count();
        }
        isEmpty() {
            return this.data.isEmpty();
        }
        set(e, t) {
            return new Ko(this.emptyListItem, this.data.set(e, t), this.itemIds, this._itemIdSeed, this._modelId);
        }
        clear() {
            return new Ko(this.emptyListItem, this.data.clear(), this.itemIds.clear(), this._itemIdSeed, this._modelId);
        }
        forEach(e) {
            this.data.forEach(e);
        }
        reduce(e, t) {
            return this.data.reduce(e, t);
        }
        static fromJS(e, t) {
            return new Ko(t, ja.fromJS(e));
        }
        static fromJSON(e, t) {
            return new Ko(t, ja.fromJS(e));
        }
        clone() {
            return new Ko(this.emptyListItem, this.data.clone(), this.itemIds.clone(), this._itemIdSeed);
        }
    }
    Ko.nextModelId = 1;
    class Jo {
        constructor() {
            this.writePropagateHandler = this.defaultWritePropagate, this.propagationParent = this;
        }
        static getData(e) {
            if (void 0 !== e && e.constructor !== Ko) return e.data;
        }
        static setPropagationHandler(e, t, n, r) {
            e.writePropagateHandler = r, Jo.setPropagationParent(e, t), Jo.setPropagationKey(e, n);
        }
        static setPropagationParent(e, t) {
            e.propagationParent = t;
        }
        static setPropagationKey(e, t) {
            e.propagationKey = t;
        }
        writePropagate(e, t) {
            var n;
            if ((null === (n = this.data) || void 0 === n ? void 0 : n.constructor) !== (null == e ? void 0 : e.constructor)) throw new Error("Unexpected new data type");
            this.data = e, this.writePropagateHandler.apply(this.propagationParent, [this.propagationKey, e, t]);
        }
        defaultWritePropagate(e, t, n) {
            this.onDefaultWritePropagate(n);
        }
        onDefaultWritePropagate(e) {}
    }
    class Yo extends Jo {
        constructor(e, t) {
            super(), this.cache = null != t ? t : new Ho(), this.data = e || this.constructor.createDefaultData();
        }
        static createDefaultData() {
            const e = this.RecordClass;
            if (e) return new e();
        }
        getBasicProperty(e) {
            return this.data.get(e);
        }
        setBasicProperty(e, t, n, r) {
            this.data.get(e) !== t && (Yo.checkType(n, t, r), this.writePropagate(this.data.set(e, t), this.cache), this.onPropertyValueChanged(e));
        }
        onPropertyValueChanged(e) {}
        getComplexProperty(e, t) {
            let n = this.cache.getItem(e);
            if (n) return Yo.setPropagationParent(n, this), n;
            const r = this.data.get(e),
                i = this.cache.getItem(e + Fo);
            return n = new t(r, i || null), this.cache.setItem(e, n), i && this.cache.invalidate(e + Fo), Yo.setPropagationHandler(n, this, e, this.internalSetComplexProperty), n;
        }
        setComplexProperty(e, t, n, r) {
            this.setProperties([{
                name: e,
                value: t,
                expectedType: n,
                valueType: r,
                isBasicType: !1
            }]);
        }
        internalSetComplexProperty(e, t, n) {
            this.internalSetProperties([{
                name: e,
                value: t,
                isBasicType: !1
            }], n);
        }
        setProperties(e) {
            var t;
            const n = [];
            for (const r of e) {
                const e = null !== (t = Yo.getData(r.value)) && void 0 !== t ? t : r.value;
                this.data.get(r.name) !== e && (void 0 !== r.expectedType && Yo.checkType(r.expectedType, r.value, r.valueType), n.push({
                    name: r.name,
                    value: e,
                    isBasicType: r.isBasicType
                }));
            }
            n.length > 0 && this.internalSetProperties(n);
        }
        internalSetProperties(e, t) {
            let n = this.data;
            const r = this.cloneCache();
            for (const i of e) n = n.set(i.name, i.value), i.isBasicType || (r.invalidate(i.name), r.invalidate(i.name + Fo), t && r.setItem(i.name + Fo, t));
            this.writePropagate(n, r);
            for (const t of e) this.onPropertyValueChanged(t.name);
        }
        cloneCache() {
            return this.cache.clone();
        }
        onDefaultWritePropagate(e) {
            this.cache = e;
        }
        static checkType(e, t, n) {
            switch (e) {
                case Po.Integer:
                    Yo.ensureValidInteger(t);
                    break;
                case Po.LongInteger:
                    Yo.ensureValidLongInteger(t);
                    break;
                case Po.Decimal:
                case Po.Currency:
                    Yo.ensureValidDecimal(t);
                    break;
                case Po.Text:
                case Po.PhoneNumber:
                    Yo.ensureValidText(t);
                    break;
                case Po.Email:
                    Yo.ensureValidEmail(t);
                    break;
                case Po.Boolean:
                    Yo.ensureValidBoolean(t);
                    break;
                case Po.Date:
                    Yo.ensureValidDate(t);
                    break;
                case Po.Time:
                    Yo.ensureValidTime(t);
                    break;
                case Po.DateTime:
                    Yo.ensureValidDateTime(t);
                    break;
                case Po.Record:
                case Po.RecordList:
                    Yo.ensureValidComplexType(t, n);
                    break;
                case Po.BinaryData:
                    Yo.ensureValidBinaryData(t);
                    break;
                case Po.Object:
                    break;
                default:
                    throw new TypeError("Unexpected data type: " + e);
            }
        }
        static ensureValidBinaryData(e) {
            if (!("string" == typeof e || e instanceof Bo)) throw new TypeError("Expecting a Binary Data, found: " + e);
        }
        static ensureValidInteger(e) {
            if ("number" != typeof e || isNaN(e) || e % 1 != 0) throw new TypeError("Expecting an Integer, found: " + e);
            if (e < zo.MIN_INTEGER_VALUE) throw new TypeError("Integers must be greater than " + zo.MIN_INTEGER_VALUE + ", found: " + e);
            if (e > zo.MAX_INTEGER_VALUE) throw new TypeError("Integers must be lower than " + zo.MAX_INTEGER_VALUE + ", found: " + e);
        }
        static ensureValidLongInteger(e) {
            if (!e || e.constructor !== bo) throw new TypeError("Expecting a LongInteger, found: " + e);
            if (e.lessThan(zo.MIN_LONGINTEGER_VALUE)) throw new TypeError("Long Integers must be greater than " + zo.MIN_LONGINTEGER_VALUE.toString() + ", found: " + e.toString());
            if (e.greaterThan(zo.MAX_LONGINTEGER_VALUE)) throw new TypeError("Long Integers must be lower than " + zo.MAX_LONGINTEGER_VALUE.toString() + ", found: " + e.toString());
        }
        static ensureValidDecimal(e) {
            if (!e || e.constructor !== Ma) throw new TypeError(`Expecting a Decimal, found: ${e}`);
            if (e.lessThan(zo.MIN_DECIMAL_VALUE)) throw new TypeError("Decimals must be greater than " + zo.MIN_DECIMAL_VALUE.toString() + ", found: " + e.toString());
            if (e.greaterThan(zo.MAX_DECIMAL_VALUE)) throw new TypeError("Decimals must be lower than " + zo.MAX_DECIMAL_VALUE.toString() + ", found: " + e.toString());
        }
        static ensureValidText(e) {
            if ("string" != typeof e) throw new TypeError(`Expecting a Text, found: ${e}`);
        }
        static ensureValidEmail(e) {
            if ("string" != typeof e) throw new TypeError(`Expecting an Email, found: ${e}`);
        }
        static ensureValidBoolean(e) {
            if ("boolean" != typeof e) throw new TypeError(`Expecting a Boolean, found: ${e}`);
        }
        static ensureValidDate(e) {
            if (!e || e.constructor !== ko) throw new TypeError(`Expecting a Date, found: ${e}`);
        }
        static ensureValidTime(e) {
            if (!e || e.constructor !== ko) throw new TypeError(`Expecting a Time, found: ${e}`);
        }
        static ensureValidDateTime(e) {
            if (!e || e.constructor !== ko) throw new TypeError(`Expecting a DateTime, found: ${e}`);
        }
        static ensureValidComplexType(e, t) {
            if (e) {
                if (e.constructor === t) return;
                if (void 0 !== e.isCompatibleWith) {
                    if (e.isCompatibleWith(t)) return;
                    throw new TypeError(`Expecting a ${t.name} type, found:  ${e.constructor.name}`);
                }
            }
            throw new TypeError(`Expecting a Record or RecordList, found: ${e}`);
        }
        replaceWith(e) {
            const t = Yo.getData(e);
            this.writePropagate(t, new Ho());
        }
        fastEquals(e) {
            return this === e;
        }
        equals(e) {
            return !(!e || this.constructor !== e.constructor);
        }
        static defineRecordClass(e) {
            return za(e);
        }
        clone() {
            return new(0, this.constructor)(this.data, this.cloneCache());
        }
    }
    class Xo {
        constructor(e, t, n, r, i, s, a, o, l) {
            this.name = e, this.attrName = t, this.nameForJson = n, this.mandatory = r, this.ignoreForServer = i, this.dataType = s, this.optimizeList = o, this.complexType = l, this.defaultValue = a();
        }
    }
    class Qo {
        constructor(e, t, n, r, i, s, a, o, l) {
            this.name = e, this.attrName = t, this.nameForJson = n, this.mandatory = r, this.ignoreForServer = i, this.dataType = s, this.defaultValueGetter = a, this.optimizeList = o, this.complexType = l;
        }
        get defaultValue() {
            return this.defaultValueGetter();
        }
    }
    class Zo extends Yo {
        static get isGenericRecordType() {
            return !0;
        }
        getAttributes() {
            return this.constructor.Attributes || [];
        }
        static getAttributes() {
            return this.Attributes || [];
        }
        static isAnonymousRecord() {
            return this._isAnonymousRecord;
        }
        constructor(e, t) {
            super(e, t);
        }
        static attr(e, t, n, r, i, s, a) {
            let o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !0;
            let l = arguments.length > 8 ? arguments[8] : undefined;
            let u;
            return "boolean" != typeof o ? (l = o, u = !0) : u = o, s === Po.DateTime || s === Po.Date || s === Po.Time ? new Qo(e, t, n, r, i, s, a, u, l) : new Xo(e, t, n, r, i, s, a, u, l);
        }
        static attributesToDeclare() {
            return [];
        }
        static init() {
            const e = this,
                t = e.attributesToDeclare();
            e.Attributes = t, t.forEach(t => {
                t.attrName in e.prototype || (t.dataType === Po.Record || t.dataType === Po.RecordList ? e.defineComplexProperty(t.attrName, t.dataType, t.complexType) : e.defineBasicProperty(t.attrName, t.dataType));
            }), e.RecordClass = Yo.defineRecordClass(t.reduce((e, t) => (e[t.attrName] = null, e), {})), e.prototype.equals = function(e) {
                let n = Zo.prototype.equals.call(this, e);
                return t.forEach(t => {
                    var r;
                    (r = t.dataType) === Po.Record || r === Po.RecordList || r === Po.LongInteger || r === Po.Decimal || r === Po.Currency || r === Po.DateTime || r === Po.Time || r === Po.Date ? n && (n = this[t.attrName].equals(e[t.attrName])) : n && (n = this[t.attrName] === e[t.attrName]);
                }), n;
            };
        }
        static createDefaultData() {
            const e = this,
                t = e.RecordClass;
            if (t) {
                const n = {};
                for (const t of e.Attributes) t.dataType === Po.Record || t.dataType === Po.RecordList ? n[t.attrName] = Yo.getData(t.defaultValue) : n[t.attrName] = t.defaultValue;
                return new t(n);
            }
        }
        static defineBasicProperty(e, t) {
            Object.defineProperty(this.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get() {
                    return this.getBasicProperty(e);
                },
                set(n) {
                    this.setBasicProperty(e, n, t);
                }
            });
        }
        static defineComplexProperty(e, t, n) {
            Object.defineProperty(this.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get() {
                    return this.getComplexProperty(e, n);
                },
                set(r) {
                    this.setComplexProperty(e, r, t, n);
                }
            });
        }
        static isCompatibleWith(e) {
            return this === e || this.isAnonymousRecord() && e.isAnonymousRecord() && this.UniqueId === e.UniqueId;
        }
        isCompatibleWith(e) {
            return e.prototype instanceof Zo && this.constructor.isCompatibleWith(e);
        }
        getNonSerializableAttributes() {
            return this.getAttributes().filter(e => e.dataType === Po.Object).map(e => e.attrName);
        }
    }
    Zo.UniqueId = "", Zo._isAnonymousRecord = !1;
    class el extends Jo {
        static getItemType() {
            return this.itemType;
        }
        getCache() {
            return null;
        }
        newItem(e) {
            throw new Error("@abstract");
        }
        resetEmptyListItem() {
            this.data = this.data.setEmptyListItem(this.newItem());
        }
        get emptyListItem() {
            return this.isEmpty ? this.data.getEmptyListItem() : this.data.get(0);
        }
        set emptyListItem(e) {
            if (this.isEmpty) {
                if (this.data.getEmptyListItem() === e) return;
                this.writePropagate(this.data.setEmptyListItem(e), this.getCache());
            } else {
                if (this.data.get(0) === e) return;
                this.writePropagate(this.data.set(0, e), this.getCache());
            }
        }
        get modelId() {
            return this.data.modelId;
        }
        get isEmpty() {
            return this.data.isEmpty();
        }
        get length() {
            return this.data.count();
        }
        isValidIndex(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            return e % 1 == 0 && e >= 0 && e < this.length + (t ? 1 : 0);
        }
        checkIndex(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            if (!this.isValidIndex(e, t)) {
                let t = "Index out of bounds. Index " + e + " for ";
                throw this.isEmpty ? t += "empty list." : t += "bounds [0, " + (this.length - 1) + "].", new Error(t);
            }
        }
        idOf(e) {
            return this.checkIndex(e), this.data.getId(e);
        }
        append(e) {
            this.writePropagate(this.data.push(e), this.getCache());
        }
        appendAll(e) {
            e.length > 0 && this.writePropagate(this.data.addFromOther(e.data), this.getCache());
        }
        pushAll(e) {
            e.length > 0 && this.writePropagate(this.data.pushAll(e), this.getCache());
        }
        insert(e, t) {
            this.checkIndex(e, !0), this.writePropagate(this.data.insert(e, t), this.getCache());
        }
        remove(e) {
            this.checkIndex(e), 1 === this.length && this.resetEmptyListItem(), this.writePropagate(this.data.remove(e), this.getCache());
        }
        clear() {
            this.resetEmptyListItem(), this.writePropagate(this.data.clear(), this.getCache());
        }
        indexOf(e) {
            for (let t = 0; t < this.length; t++)
                if (e(this.getItem(t))) return t;
            return -1;
        }
        any(e) {
            return -1 !== this.indexOf(e);
        }
        all(e) {
            return !this.any(t => !e(t));
        }
        filter(e) {
            const t = new this.constructor(),
                n = [];
            for (let t = 0; t < this.length; t++) {
                const r = this.getItem(t);
                e(r) && n.push(r);
            }
            return t.pushAll(n), t;
        }
        distinct() {
            const e = new this.constructor(),
                t = new Array();
            for (let n = 0; n < this.length; n++) {
                const r = this.getItem(n);
                let i = !0;
                for (let e = 0; e < t.length; e++)
                    if (Go(r, this.getItem(t[e]))) {
                        i = !1;
                        break;
                    }
                i && (t.push(n), e.append(r));
            }
            return e;
        }
        sort(e, t) {
            const n = [];
            for (let e = 0; e < this.length; e++) n[e] = this.getItem(e);
            const r = t ? 1 : -1;
            n.sort((t, n) => r * qo(e(t), e(n))), this.clear(), this.pushAll(n);
        }
        getCurrent(e) {
            if (this.isEmpty) return this.emptyListItem; {
                const t = this.getCurrentRowNumber(e);
                return this.getItem(t);
            }
        }
        getCurrentRowNumber(e) {
            return e.getCurrentRowNumber(this);
        }
        getItem(e) {
            return this.checkIndex(e), this.data.get(e);
        }
        setCurrent(e, t) {
            if (this.isEmpty) this.emptyListItem = t;
            else {
                const n = this.getCurrentRowNumber(e);
                this.setItem(n, t);
            }
        }
        setItem(e, t) {
            this.checkIndex(e), this.data.get(e) !== t && this.writePropagate(this.data.set(e, t), this.getCache());
        }
        fastEquals(e) {
            return this === e;
        }
        equals(e) {
            if (!e || this.constructor !== e.constructor || this.length !== e.length) return !1;
            if (this.isEmpty) {
                return Go(this.emptyListItem, e.emptyListItem);
            }
            for (let t = 0; t < this.length; t++) {
                if (!Go(this.getItem(t), e.getItem(t))) return !1;
            }
            return !0;
        }
    }
    class tl extends el {
        constructor(e) {
            super(), this.data = e || new Ko(this.newItem());
        }
        static get isBasicTypeListType() {
            return !0;
        }
        static getTypeDefaultValue() {
            throw new Error("Not implemented: getTypeDefaultValue");
        }
        newItem() {
            return this.constructor.getTypeDefaultValue();
        }
        clone() {
            return new(0, this.constructor)(this.data.clone());
        }
    }
    class nl extends el {
        constructor(e, t) {
            if (super(), this._recordType = this.constructor.getItemType(), !this._recordType) throw new TypeError("GenericRecordLists must define a RecordType");
            this.data = e || new Ko(Zo.getData(this.newItem())), this.cache = null != t ? t : new jo();
        }
        static get isGenericRecordListType() {
            return !0;
        }
        getCache() {
            return this.cache;
        }
        newItem(e) {
            return new(this.getRecordType())(e);
        }
        resetEmptyListItem() {
            this.data = this.data.setEmptyListItem(Zo.getData(this.newItem()));
        }
        getRecordType() {
            return this._recordType;
        }
        get emptyListItem() {
            return this.internalGetItem(0, this.isEmpty);
        }
        set emptyListItem(e) {
            this.isEmpty ? this.internalSetEmptyListItem(0, e) : this.internalSetItem(0, e);
        }
        append(e) {
            this.isEmpty && this.cache.invalidate(0), super.append(Zo.getData(e)), this.cache.append(void 0);
        }
        appendAll(e) {
            this.isEmpty && this.cache.invalidate(0), super.appendAll(e), this.cache.appendMultiple(e.length);
        }
        pushAll(e) {
            this.isEmpty && this.cache.invalidate(0), super.pushAll(e.map(e => Yo.getData(e))), this.cache.appendMultiple(e.length);
        }
        insert(e, t) {
            this.checkIndex(e, !0), this.isEmpty && this.cache.invalidate(0), super.insert(e, Zo.getData(t)), this.cache.insert(e, void 0);
        }
        getItem(e) {
            return this.internalGetItem(e, !1);
        }
        internalGetItem(e, t) {
            t || this.checkIndex(e);
            let n = this.cache.getItem(e);
            return n ? (nl.setPropagationParent(n, this), nl.setPropagationKey(n, e), n) : (t ? (n = this.newItem(this.data.getEmptyListItem()), nl.setPropagationHandler(n, this, e, this.internalSetEmptyListItem)) : (n = this.newItem(this.data.get(e)), nl.setPropagationHandler(n, this, e, this.internalSetItem)), this.cache.setItem(e, n), n);
        }
        setItem(e, t) {
            this.internalSetItem(e, t);
        }
        internalSetItem(e, t, n) {
            var r;
            const i = null !== (r = Zo.getData(t)) && void 0 !== r ? r : t;
            this.checkIndex(e), this.data.get(e) !== i && (this.writePropagate(this.data.set(e, i), this.cache), this.cache.setItem(e, void 0));
        }
        internalSetEmptyListItem(e, t, n) {
            var r;
            const i = null !== (r = Zo.getData(t)) && void 0 !== r ? r : t;
            this.data.getEmptyListItem() !== i && (this.writePropagate(this.data.setEmptyListItem(i), this.cache), this.cache.setItem(e, void 0));
        }
        remove(e) {
            super.remove(e), this.cache.invalidate(e);
        }
        clear() {
            super.clear(), this.cache.invalidate();
        }
        readAll(e, t) {
            const n = [];
            for (let r = 0; r < t.length; r++) {
                const i = this.newItem();
                e(i, t.item(r)), n.push(i);
            }
            this.pushAll(n);
        }
        clone() {
            return new(0, this.constructor)(this.data.clone());
        }
        static isCompatibleWith(e) {
            return this === e || this.getItemType().isCompatibleWith(e.getItemType());
        }
        isCompatibleWith(e) {
            return e.prototype instanceof nl && this.constructor.isCompatibleWith(e);
        }
    }
    class rl extends tl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return zo.DEFAULT_INTEGER;
        }
    }
    rl.itemType = Po.Integer;
    class il extends tl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return zo.DEFAULT_LONGINTEGER;
        }
    }
    il.itemType = Po.LongInteger;
    class sl extends tl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return zo.DEFAULT_DATE;
        }
    }
    sl.itemType = Po.Date;
    class al extends tl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return zo.DEFAULT_DATETIME;
        }
    }
    al.itemType = Po.DateTime;
    class ol extends tl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return zo.DEFAULT_TIME;
        }
    }
    ol.itemType = Po.Time;
    class ll extends tl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return zo.DEFAULT_DECIMAL;
        }
    }
    ll.itemType = Po.Decimal;
    class ul extends tl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return zo.DEFAULT_CURRENCY;
        }
    }
    ul.itemType = Po.Currency;
    class cl extends tl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return zo.DEFAULT_EMAIL;
        }
    }
    cl.itemType = Po.Email;
    class dl extends tl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return zo.DEFAULT_PHONENUMBER;
        }
    }
    dl.itemType = Po.PhoneNumber;
    class hl extends tl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return zo.DEFAULT_BOOLEAN;
        }
    }
    hl.itemType = Po.Boolean;
    class gl extends tl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return zo.DEFAULT_BINARYDATA;
        }
    }
    gl.itemType = Po.BinaryData;
    class pl extends tl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return zo.DEFAULT_TEXT;
        }
    }
    pl.itemType = Po.Text;
    class fl {
        constructor(e) {
            this.varValue = e;
        }
        get value() {
            return this.varValue;
        }
        set value(e) {
            this.setValue(e);
        }
        setValue(e) {
            this.varValue = e;
        }
    }

    function ml() {
        return e => {
            const t = e;
            void 0 !== t.init && t.init();
        };
    }
    let vl = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("JSON", "jSONOut", "jSONOut", !0, !0, Po.Text, () => Wo(Po.Text))].concat(super.attributesToDeclare());
        }
    };
    vl = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], vl);
    let yl = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("ExceptionMessage", "exceptionMessageAttr", "exceptionMessageAttr", !0, !0, Po.Text, () => Wo(Po.Text))].concat(super.attributesToDeclare());
        }
    };
    yl = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], yl);
    class bl {
        constructor() {
            this.typeDefinitions = new Map(), this.typeCache = new Map();
        }
        isTypeRegistered(e) {
            return void 0 !== this.typeDefinitions.get(e);
        }
        registerTypeDefinition(e, t) {
            this.typeDefinitions.set(e, t);
        }
        getType(e) {
            const t = this.typeCache.get(e);
            if (t) return t;
            const n = this.typeDefinitions.get(e);
            if (!n) throw new TypeError(`Type ${e} was not registered`);
            let r = class extends Zo {
                constructor(e, t) {
                    super(e, t);
                }
                static attributesToDeclare() {
                    return n ? n.map(e => {
                        var t, n, r;
                        return this.attr(e.name, e.attrName, e.nameForJson || e.attrName, null !== (t = e.mandatory) && void 0 !== t && t, null === (n = e.ignoreForServer) || void 0 === n || n, e.dataType, e.defaultValue, null === (r = e.optimizeList) || void 0 === r || r, e.complexType);
                    }).concat(super.attributesToDeclare()) : [];
                }
            };
            return r = y([e => {
                const t = e;
                void 0 !== t.init && t.init();
            }], r), this.typeCache.set(e, r), r;
        }
    }
    class Tl extends bl {
        constructor(e, t, n) {
            super(), this.mainAttributeName = e, this.mainAttributeAttrName = t, this.additionalAttributes = n;
        }
        registerTypeDefinition(e, t) {
            throw new Error("Invalid operation");
        }
        createMainAttributeInfo(e) {
            return {
                name: this.mainAttributeName,
                attrName: this.mainAttributeAttrName,
                mandatory: !0,
                dataType: this.getDataType(e),
                defaultValue: this.getDefaultValue(e),
                complexType: this.getComplexType(e)
            };
        }
        registerTypeIfNeeded(e) {
            if (!this.isTypeRegistered(e)) {
                let t = [this.createMainAttributeInfo(e)];
                this.additionalAttributes && (t = t.concat(this.additionalAttributes)), super.registerTypeDefinition(e, t);
            }
        }
        getType(e) {
            return this.registerTypeIfNeeded(e), super.getType(e);
        }
    }
    class wl extends Tl {
        constructor(e, t, n) {
            super(e, t, n);
        }
        getDataType(e) {
            return e;
        }
        getDefaultValue(e) {
            return () => Wo(e);
        }
        getComplexType(e) {}
    }
    class El extends Tl {
        constructor(e, t, n) {
            super(e, t, n);
        }
        getDataType(e) {
            return Po.Record;
        }
        getDefaultValue(e) {
            return () => Jo.getData(new e());
        }
        getComplexType(e) {
            return e;
        }
    }
    var Il;
    ! function(e) {
        function t(e) {
            return e && e.constructor === Ma;
        }

        function n(e) {
            return "string" == typeof e;
        }

        function r(e) {
            return "boolean" == typeof e;
        }

        function i(e) {
            return s(e) && !isNaN(e);
        }

        function s(e) {
            return "number" == typeof e;
        }

        function a(e) {
            return e && e.constructor === bo;
        }

        function o(e) {
            return e instanceof ko;
        }

        function l(e) {
            return o(e) && !isNaN(e.getTime());
        }

        function u(e) {
            return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
        }
        e.isDecimal = t, e.isBinaryData = function(e) {
            var t;
            return (null === (t = null == e ? void 0 : e.value) || void 0 === t ? void 0 : t.constructor) === Bo;
        }, e.isValidDecimal = function(e) {
            return t(e) && !e.isNaN();
        }, e.isWithinDecimalRange = function(e) {
            return zo.MIN_DECIMAL_VALUE.lessThanOrEqualTo(e) && zo.MAX_DECIMAL_VALUE.greaterThanOrEqualTo(e);
        }, e.isText = n, e.isBoolean = r, e.isBasicType = function(e) {
            return n(e) || s(e) || r(e) || o(e) || a(e) || t(e);
        }, e.isValidInteger = function(e) {
            return i(e) && e % 1 == 0;
        }, e.isValidJsNumber = i, e.isJsNumber = s, e.isWithinIntegerRange = function(e) {
            return e >= zo.MIN_INTEGER_VALUE && e <= zo.MAX_INTEGER_VALUE;
        }, e.isValidLongInteger = function(e) {
            return a(e);
        }, e.isLongInteger = a, e.isValidDate = function(e) {
            return l(e) && e.hours === zo.DEFAULT_DATE.hours && e.minutes === zo.DEFAULT_DATE.minutes && e.seconds === zo.DEFAULT_DATE.seconds;
        }, e.isValidTime = function(e) {
            return l(e) && e.year === zo.DEFAULT_TIME.year && e.month === zo.DEFAULT_TIME.month && e.day === zo.DEFAULT_TIME.day;
        }, e.isDateTime = o, e.isValidDateTime = l, e.isJsDate = u, e.isValidJsDate = function(e) {
            return u(e) && !isNaN(e.getTime());
        }, e.hasBinaryDataInterface = function(e) {
            return !!e && (void 0 !== e.content || void 0 !== e.url);
        };
        const c = 9007199254740991,
            d = -9007199254740991;
        e.ensureNumberInsideBounds = function(e) {
            let t = "",
                n = "";
            if (e.greaterThan(c)) t = "maximum", n = c.toString();
            else {
                if (!e.lessThan(d)) return;
                t = "minimum", n = d.toString();
            }
            const r = `Unable to convert ${e.toString()} to the Javascript Number type since exceeds the ${t} value allowed which is ${n}.`;
            throw new st.NumberOverflowException(r);
        }, e.ensureNumberPrecision = function(e) {
            if (e.decimalPlaces() > 16) {
                const t = `Unable to convert ${e.toString()} to the Javascript Number type because it will lead to precision loss. The maximum safe number of digits after the decimal point is 16.`;
                throw new st.NumberOverflowException(t);
            }
        };
        class h {
            static get None() {
                return "";
            }
            static get Minimum() {
                return "minimum";
            }
            static get Maximum() {
                return "maximum";
            }
        }

        function g(e, t, n, r) {
            let i = h.None,
                s = "";
            const a = Math.max(t, d),
                o = Math.min(n, c);
            if (e < a) i = h.Minimum, s = a.toString();
            else {
                if (!(e > o)) return;
                i = h.Maximum, s = o.toString();
            }
            throw new st.NumberOverflowException(function(e, t, n, r) {
                return `Unable to convert ${e} to the ${t} type since it exceeds the ${n} value allowed which is ${r}.`;
            }(e.toString(), r, i, s));
        }
        e.ensureIntegerInsideBounds = function(e) {
            g(e, zo.MIN_INTEGER_VALUE, zo.MAX_INTEGER_VALUE, "Integer");
        }, e.ensureLongIntegerInsideBounds = function(e) {
            g(e, zo.MIN_LONGINTEGER_VALUE.toNumber(), zo.MAX_LONGINTEGER_VALUE.toNumber(), "Long Integer");
        }, e.ensureDecimalInsideBounds = function(e) {
            g(e, zo.MIN_DECIMAL_VALUE.toNumber(), zo.MAX_DECIMAL_VALUE.toNumber(), "Decimal");
        };
    }(Il || (Il = {}));
    var Al = _exports.DataTypes = Object.freeze({
        __proto__: null,
        BasicTypeKeyedTypeFactory: wl,
        BasicTypeList: tl,
        BasicVariableHolder: fl,
        BinaryData: Bo,
        BinaryDataList: gl,
        BooleanList: hl,
        Cache: Ho,
        ComplexTypeKeyedTypeFactory: El,
        get Constants() {
            return zo;
        },
        CurrencyList: ul,
        get DataTypes() {
            return Po;
        },
        DateList: sl,
        DateTime: ko,
        DateTimeList: al,
        Decimal: Ma,
        DecimalList: ll,
        EmailList: cl,
        get ErrorHandlerOutputType() {
            return yl;
        },
        GenericRecord: Zo,
        GenericRecordList: nl,
        ImmutableBase: Jo,
        ImmutableListWithTracking: Ko,
        IntegerList: rl,
        get JSONSerializeOutputType() {
            return vl;
        },
        List: el,
        ListCache: jo,
        LongInteger: bo,
        LongIntegerList: il,
        PhoneNumberList: dl,
        Record: Yo,
        RecordTypeFactory: bl,
        RecordWithStaticConstructor: ml,
        TextList: pl,
        TimeList: ol,
        TypeKeyedTypeFactory: Tl,
        get TypeValidations() {
            return Il;
        },
        VariableHolder: class extends fl {
            constructor(e) {
                super(e);
            }
            setValue(e) {
                super.setValue(e ? e.clone() : e);
            }
        },
        areBinaryNulls: function(e, t) {
            return !e.hasContent() && !t.hasContent();
        },
        compare: qo,
        defaultForType: Wo,
        equals: Go,
        mapDataTypeToName: Vo
    });
    const Nl = "Authorization";
    var Sl = _exports.Authorization = Object.freeze({
        __proto__: null,
        ensureUserHasRole: e => {
            var t,
                n,
                r, {
                    roles: i,
                    auth: s = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance()
                } = e;
            if (!(null == s ? void 0 : s.isAuthenticated())) throw pi(Nl, "Not authorized: User is not logged in"), new st.SecurityException("Not authorized", "User is not logged in");
            if (!i.find(e => !!e && s.hasRole(e.roleKey))) throw pi(Nl, "Not authorized: No roles found on current user"), null !== (r = null === (n = i[i.length - 1]) || void 0 === n ? void 0 : n.roleException) && void 0 !== r ? r : new st.SecurityException("Not authorized", "User doesn't have the required role");
        },
        hasRole: e => {
            var t, {
                roleKey: n,
                auth: r = null === (t = gn.resolve(pn.Auth)) || void 0 === t ? void 0 : t.getInstance()
            } = e;
            return (null == r ? void 0 : r.isAuthenticated()) ? r.hasRole(n) : (pi(Nl, "Not authorized: User is not logged in"), !1);
        }
    });

    function Dl() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : zo.FORMAT.defaultDateTimeFormat;
        return {
            year: parseInt(RegExp["$" + (e.yearIndexForDate + 1)], 10),
            month: parseInt(RegExp["$" + (e.monthIndexForDate + 1)], 10),
            day: parseInt(RegExp["$" + (e.dayIndexForDate + 1)], 10)
        };
    }

    function Rl() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : zo.FORMAT.defaultDateTimeFormat;
        const t = parseInt(RegExp["$" + (e.secondsIndexForTime + 1)], 10);
        return {
            hours: parseInt(RegExp["$" + (e.hoursIndexForTime + 1)], 10),
            minutes: parseInt(RegExp["$" + (e.minutesIndexForTime + 1)], 10),
            seconds: isNaN(t) ? 0 : t
        };
    }

    function Cl() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : zo.FORMAT.defaultDateTimeFormat;
        const t = parseInt(RegExp["$" + (e.secondsIndexForDateTime + 1)], 10);
        return {
            year: parseInt(RegExp["$" + (e.yearIndexForDateTime + 1)], 10),
            month: parseInt(RegExp["$" + (e.monthIndexForDateTime + 1)], 10),
            day: parseInt(RegExp["$" + (e.dayIndexForDateTime + 1)], 10),
            hours: parseInt(RegExp["$" + (e.hoursIndexForDateTime + 1)], 10),
            minutes: parseInt(RegExp["$" + (e.minutesIndexForDateTime + 1)], 10),
            seconds: isNaN(t) ? 0 : t
        };
    }
    const xl = `[${String.fromCharCode(55296)}-${String.fromCharCode(56319)}]`,
        Ll = new RegExp(xl, "g");

    function Ol(e) {
        const t = e.match(Ll);
        return e.length - (t ? t.length : 0);
    }

    function _l(e, t, n) {
        var r;
        let i = Ol(e);
        if (!(t >= 0 && n > 0 && i > t)) return zo.DEFAULT_TEXT;
        i = Math.min(i - t, n);
        const s = e.match(Ll) ? null === (r = e.match(new RegExp("(" + xl + ".|.){" + t + "}((" + xl + ".|.){" + i + "})"))) || void 0 === r ? void 0 : r[2] : e.substring(t, t + i);
        return null != s ? s : "";
    }

    function Ml(e) {
        const t = new Date(e.getTime());
        return t.setMinutes(e.getMinutes() - e.getTimezoneOffset()), t.getTime();
    }

    function Ul(e, t, n) {
        let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
        const i = n <= 36e5,
            s = n <= 6e4,
            a = n <= 1e3,
            o = Fl(e, i, s, a).toNative(),
            l = Fl(t, i, s, a).toNative(),
            u = Date.UTC(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate(), o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), 0),
            c = Date.UTC(l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate(), l.getUTCHours(), l.getUTCMinutes(), l.getUTCSeconds(), 0),
            d = r ? Ml(l) - Ml(o) : c - u;
        return Math.floor(d / n);
    }

    function Fl(e, t, n, r) {
        return new ko(e.year, e.month, e.day, t ? e.hours : 0, n ? e.minutes : 0, r ? e.seconds : 0);
    }

    function $l(e, t, n) {
        const r = new ko(1900, 1, 1, e, t, n);
        return r.hours === e && r.minutes === t && r.seconds === n;
    }

    function Pl(e, t, n, r, i, s) {
        const a = new ko(e, t, n, r, i, s);
        return a.year === e && a.month === t && a.day === n && a.hours === r && a.minutes === i && a.seconds === s;
    }

    function Vl(e) {
        return e ? 1 : 0;
    }

    function Bl(e) {
        return e ? bo.fromNumber(1) : bo.fromNumber(0);
    }

    function kl(e) {
        return new Ma(e ? 1 : 0);
    }

    function zl(e) {
        return !0 === e ? "True" : !1 === e ? "False" : zo.DEFAULT_TEXT;
    }

    function Hl(e) {
        return new ko(e.year, e.month, e.day);
    }

    function jl(e) {
        return new ko(1900, 1, 1, e.hours, e.minutes, e.seconds);
    }

    function ql(e) {
        return e.toString(zo.FORMAT.defaultDateTimeFormat.dateTimeFormat);
    }

    function Gl(e) {
        return e.toString(zo.FORMAT.defaultDateTimeFormat.dateFormat);
    }

    function Wl(e) {
        return Il.isValidDecimal(e) ? e.toString() : zo.DEFAULT_TEXT;
    }

    function Kl(e) {
        return e.gte(zo.MIN_INTEGER_VALUE) && e.lte(zo.MAX_INTEGER_VALUE);
    }

    function Jl(e) {
        return Kl(e) ? e.round().toNumber() : zo.DEFAULT_INTEGER;
    }

    function Yl(e) {
        return e.gte(zo.MIN_LONGINTEGER_VALUE.toString()) && e.lte(zo.MAX_LONGINTEGER_VALUE.toString());
    }

    function Xl(e) {
        return Yl(e) ? bo.fromString(e.round().toString()) : zo.DEFAULT_LONGINTEGER;
    }

    function Ql(e) {
        return Il.isWithinIntegerRange(e.toNumber());
    }

    function Zl(e) {
        return Il.isValidLongInteger(e) ? e.toString() : zo.DEFAULT_TEXT;
    }

    function eu(e) {
        return Il.isValidInteger(e) ? e.toString() : zo.DEFAULT_TEXT;
    }

    function tu(e, t) {
        let n = t.getRegExpForDate().test(e);
        if (n) {
            const e = Dl(t),
                r = new ko(e.year, e.month, e.day);
            n = r.year === e.year && r.month === e.month && r.day === e.day;
        }
        return n;
    }

    function nu(e, t) {
        if (!tu(e, t)) return ko.defaultValue;
        const n = Dl(t);
        return new ko(n.year, n.month, n.day);
    }

    function ru(e, t) {
        let n = t.getRegExpForDateTime().test(e);
        if (n) {
            const e = Cl(t);
            n = Pl(e.year, e.month, e.day, e.hours, e.minutes, e.seconds);
        }
        return n;
    }

    function iu(e, t) {
        if (!ru(e, t)) return ko.defaultValue;
        const n = Cl(t);
        return new ko(n.year, n.month, n.day, n.hours, n.minutes, n.seconds);
    }

    function su(e) {
        return -1 !== e.toUpperCase().indexOf("T");
    }

    function au(e) {
        return -1 !== e.indexOf(" ");
    }

    function ou(e) {
        const t = e.toUpperCase().search("T| ");
        return -1 !== t && (e = e.substring(0, t)), e;
    }

    function lu(e) {
        const t = zo.FORMAT.dateTimeFormats;
        e = ou(e);
        for (let n = 0; n < t.length; ++n)
            if (tu(e, t[n])) return !0;
        return !1;
    }

    function uu(e) {
        const t = zo.FORMAT.dateTimeFormats;
        e = ou(e);
        for (let n = 0; n < t.length; ++n) {
            const r = nu(e, t[n]);
            if (!r.eq(ko.defaultValue)) return r;
        }
        return ko.defaultValue;
    }

    function cu(e) {
        return !su(e) || !isNaN(Date.parse(e));
    }

    function du(e) {
        const t = zo.FORMAT.dateTimeFormats;
        if (su(e)) return cu(e);
        au(e) || (e += " 00:00:00");
        for (let n = 0; n < t.length; ++n)
            if (ru(e, t[n])) return !0;
        return !1;
    }

    function hu(e) {
        const t = zo.FORMAT.dateTimeFormats;
        if (su(e)) return ko.fromISODateTime(e);
        au(e) || (e += " 00:00:00");
        for (let n = 0; n < t.length; ++n) {
            const r = iu(e, t[n]);
            if (!r.eq(ko.defaultValue)) return r;
        }
        return ko.defaultValue;
    }

    function gu(e) {
        const t = e.indexOf(" ");
        return -1 !== t && (e = e.substring(t + 1, e.length)), e;
    }

    function pu(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : zo.FORMAT.defaultDateTimeFormat;
        if (su(e)) return cu(e);
        au(e) && (e = gu(e));
        let n = t.getRegExpForTime().test(e);
        if (n) {
            const e = Rl(t);
            n = $l(e.hours, e.minutes, e.seconds);
        }
        return n;
    }

    function fu(e) {
        if (su(e)) {
            const t = ko.fromISODateTime(e);
            return new ko(1900, 1, 1, t.hours, t.minutes, t.seconds, t.milliseconds);
        }
        return au(e) && (e = gu(e)),
            function(e, t) {
                if (!pu(e, t)) return ko.defaultValue;
                const n = Rl(t);
                return new ko(1900, 1, 1, n.hours, n.minutes, n.seconds);
            }(e, zo.FORMAT.defaultDateTimeFormat);
    }

    function mu(e) {
        return e.toString(zo.FORMAT.defaultDateTimeFormat.timeFormat);
    }

    function vu(e) {
        if (zo.FORMAT.numberFormat.getRegExpForInteger().test(e)) {
            const t = parseInt(e, 10);
            if (!isNaN(t) && t >= zo.MIN_INTEGER_VALUE && t <= zo.MAX_INTEGER_VALUE) return t;
        }
        return null;
    }

    function yu(e) {
        if (zo.FORMAT.numberFormat.getRegExpForDecimal().test(e)) {
            const t = new Ma(e);
            if (!t.isNaN() && t.gte(zo.MIN_DECIMAL_VALUE) && t.lte(zo.MAX_DECIMAL_VALUE)) return t;
        }
        return null;
    }

    function bu(e) {
        if (!zo.FORMAT.numberFormat.getRegExpForInteger().test(e)) return null;
        const t = "-" === e.charAt(0);
        if (t && e.length < zo.MIN_LONGINTEGER_VALUE.toString().length || !t && e.length < zo.MAX_LONGINTEGER_VALUE.toString().length || Yl(new Ma(e))) try {
            return bo.fromString(e);
        } catch (e) {}
        return null;
    }

    function Tu(e) {
        return null !== yu(e);
    }

    function wu(e) {
        return null === yu(e) ? zo.DEFAULT_DECIMAL : new Ma(e);
    }

    function Eu(e) {
        return null !== vu(e);
    }

    function Iu(e) {
        const t = vu(e);
        return null === t ? zo.DEFAULT_INTEGER : t;
    }

    function Au(e) {
        return null !== bu(e);
    }

    function Nu(e) {
        const t = bu(e);
        return null === t ? zo.DEFAULT_LONGINTEGER : t;
    }

    function Su(e) {
        return "true" === e.toLowerCase();
    }

    function Du(e) {
        if ("number" == typeof e || Il.isLongInteger(e) || Il.isDecimal(e)) return new Ma(e.toString()).round().toNumber();
        throw new TypeError("Cannot convert type '" + typeof e + "' to 'Integer'");
    }

    function Ru(e) {
        if ("number" == typeof e || Il.isLongInteger(e) || Il.isDecimal(e)) return bo.fromString(new Ma(e.toString()).round().toString());
        throw new TypeError("Cannot convert type '" + typeof e + "' to 'LongInteger'");
    }

    function Cu(e) {
        if ("number" == typeof e || Il.isLongInteger(e) || Il.isDecimal(e)) return new Ma(e.toString());
        throw new TypeError("Cannot convert type '" + typeof e + "' to 'Decimal'");
    }

    function xu(e, t, n) {
        if (e instanceof ko || "[object Date]" === Object.prototype.toString.call(e)) {
            const r = new ko(e.getTime()),
                i = t ? r.year : 1900,
                s = t ? r.month : 1,
                a = t ? r.day : 1,
                o = n ? r.hours : 0,
                l = n ? r.minutes : 0,
                u = n ? r.seconds : 0;
            return new ko(i, s, a, o, l, u);
        }
        throw new TypeError("Cannot convert type '" + typeof e + "' to 'DateTime'");
    }

    function Lu(e, t, n, r) {
        return t < 0 ? zo.DEFAULT_TEXT : (n.length > 1 && (n = n.substr(0, 1)), r.length > 1 && (r = r.substr(0, 1)), e.toFormat(t, Ma.rounding, {
            decimalSeparator: n,
            groupSeparator: r
        }));
    }
    const Ou = "[a-zA-Z0-9.!#$%&'*+\\-/=?^_`{|}~]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*",
        _u = "([0-9a-zA-Z\\\\= ]*|=\\?([^?]*)\\?([qQbB])\\?([^?]*)\\?=)",
        Mu = new RegExp("^" + Ou + "$"),
        Uu = new RegExp("^" + _u + "[ ]*<" + Ou + ">$"),
        Fu = new RegExp('^\\"' + _u + '\\"[ ]*<' + Ou + ">$");
    var $u = _exports.BuiltinFunctions = Object.freeze({
        __proto__: null,
        abs: function(e) {
            const t = e.abs();
            return t.isNaN() ? zo.DEFAULT_DECIMAL : t;
        },
        addDays: function(e, t) {
            return e.addDays(t);
        },
        addHours: function(e, t) {
            return e.addHours(t);
        },
        addMinutes: function(e, t) {
            return e.addMinutes(t);
        },
        addMonths: function(e, t) {
            return e.addMonths(t);
        },
        addSeconds: function(e, t) {
            return e.addSeconds(t);
        },
        addYears: function(e, t) {
            return e.addYears(t);
        },
        booleanToDecimal: kl,
        booleanToInteger: Vl,
        booleanToLongInteger: Bl,
        booleanToText: zl,
        buildDateTime: function(e, t) {
            return new ko(e.year, e.month, e.day, t.hours, t.minutes, t.seconds, t.milliseconds);
        },
        chr: function(e) {
            return e >= 0 && e <= 65535 ? String.fromCharCode(e) : zo.DEFAULT_TEXT;
        },
        concat: function(e, t) {
            return (e || "") + (t || "");
        },
        currDate: function() {
            const e = new ko(new Date());
            return new ko(e.year, e.month, e.day);
        },
        currDateTime: function() {
            return new ko(new Date());
        },
        currTime: function() {
            const e = new ko(new Date());
            return new ko(1900, 1, 1, e.hours, e.minutes, e.seconds);
        },
        dateTimeToDate: Hl,
        dateTimeToText: ql,
        dateTimeToTime: jl,
        dateToDateTime: function(e) {
            return e;
        },
        dateToText: Gl,
        day: function(e) {
            return e.day;
        },
        dayOfWeek: function(e) {
            return e.weekDay;
        },
        decimalToBoolean: function(e) {
            return !e.eq(new Ma(0));
        },
        decimalToInteger: Jl,
        decimalToIntegerValidate: Kl,
        decimalToLongInteger: Xl,
        decimalToLongIntegerValidate: Yl,
        decimalToText: Wl,
        diffDays: function(e, t) {
            return Ul(e, t, 864e5, !0);
        },
        diffHours: function(e, t) {
            return Ul(e, t, 36e5);
        },
        diffMinutes: function(e, t) {
            return Ul(e, t, 6e4);
        },
        diffSeconds: function(e, t) {
            return Ul(e, t, 1e3);
        },
        emailAddressValidate: function(e) {
            return "" === e || !/\.@/.test(e) && (Mu.test(e) || Uu.test(e) || Fu.test(e));
        },
        encodeHtml: function(e) {
            return void 0 === e ? "" : function(e) {
                if (void 0 === e || "" === e) return e;
                const t = [],
                    n = " ".charCodeAt(0),
                    r = "\n".charCodeAt(0);
                e.charCodeAt(0) === n ? t[0] = " " : t[0] = e.charAt(0);
                for (let i = 1; i < e.length - 1; ++i) e.charCodeAt(i) !== n || e.charCodeAt(i - 1) !== r && e.charCodeAt(i + 1) !== n ? t[i] = e.charAt(i) : t[i] = " ";
                return 1 !== e.length && (e.charCodeAt(e.length - 1) === n ? t[e.length - 1] = " " : t[e.length - 1] = e.charAt(e.length - 1)), t.join("");
            }(function(e) {
                const t = [];
                for (let n = 0; n < e.length; ++n) {
                    const r = e.charCodeAt(n);
                    60 === r ? t.push("&lt;") : 62 === r ? t.push("&gt;") : 38 === r ? t.push("&amp;") : 34 === r ? t.push("&quot;") : 39 === r ? t.push("&#39;") : r >= 160 && r <= 255 ? t.push("&#" + r + ";") : t.push(e.charAt(n));
                }
                return t.join("");
            }(e)).replace(/\r/g, "").replace(/&#13;/g, "").replace(/\n/g, "<br/>").replace(/&#10;/g, "<br/>");
        },
        encodeJavascript: function(e) {
            return e.replace(/\\/g, "\\x5c").replace(/'/g, "\\x27").replace(/\"/g, "\\x22").replace("&", "\\x26").replace("<", "\\x3c").replace(/>/g, "\\x3e").replace(/\r/g, "\\r").replace(/\n/g, "\\n");
        },
        encodeUrl: function(e) {
            return encodeURIComponent(e).replace(/'/g, "%27").replace(/%20/g, "+");
        },
        formatCurrency: function(e, t, n, r, i) {
            const s = Lu(e, n, r, i);
            return s === zo.DEFAULT_TEXT ? zo.DEFAULT_TEXT : t + s;
        },
        formatDateTime: function(e, t) {
            return e.toString(t);
        },
        formatDecimal: Lu,
        formatPercent: function(e, t, n) {
            try {
                return t < 0 ? "" : (n.length > 1 && (n = n.substr(0, 1)), e.times(100).toFormat(t, Ma.rounding, {
                    decimalSeparator: n,
                    groupSeparator: ""
                }) + "%");
            } catch (e) {
                return "";
            }
        },
        formatPhoneNumber: function(e, t, n, r, i, s, a) {
            try {
                return /^\d+$/.test(e) ? e.length !== t + n + r ? e : i + e.substr(0, t) + s + e.substr(t, n) + a + e.substr(t + n, r) : e;
            } catch (e) {
                return "";
            }
        },
        formatText: function(e, t, n, r, i) {
            try {
                const s = Ol(e);
                if (s < t) {
                    i = _l(i, 0, 1);
                    let n = t - s;
                    for (; n-- > 0;) r ? e = i + e : e += i;
                    return e;
                }
                return s > n ? _l(e, r ? s - n : 0, n) : e;
            } catch (e) {
                return "";
            }
        },
        getAppName: function() {
            return B();
        },
        getBookmarkableURL: function() {
            return window.location.href;
        },
        getCurrentLocale: function() {
            let {
                localeService: e = hn(pn.LocaleService)
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return e ? e.getCurrentLocale() : zo.DEFAULT_TEXT;
        },
        getOwnerURLPath: function() {
            return Ar();
        },
        getUserAgent: function() {
            return navigator.userAgent;
        },
        getUserId: function() {
            const e = Br();
            return pi("RolesInfo", `Checking User's ID: ${e}`), e;
        },
        hour: function(e) {
            return e.hours;
        },
        identifierToInteger: function(e) {
            return e;
        },
        identifierToLongInteger: function(e) {
            return e;
        },
        identifierToText: function(e) {
            return e;
        },
        iif: function(e, t, n) {
            return e ? t : n;
        },
        index: function(e, t, n, r, i) {
            var s;
            try {
                if (0 === t.length || n < 0 || n > Ol(e)) return -1;
                let a;
                i && (e = e.toLocaleLowerCase(), t = t.toLocaleLowerCase()), n && n > 0 && (a = null === (s = e.match(new RegExp("(" + xl + ".|.){" + n + "}"))) || void 0 === s ? void 0 : s[0].length);
                const o = r ? e.lastIndexOf(t, a || e.length) : e.indexOf(t, a || 0);
                return o < 0 ? -1 : Ol(e.substr(0, o));
            } catch (e) {
                return -1;
            }
        },
        integerToBoolean: function(e) {
            return 0 !== e;
        },
        integerToDecimal: function(e) {
            return new Ma(e);
        },
        integerToIdentifier: function(e) {
            return e;
        },
        integerToLongInteger: function(e) {
            return bo.fromNumber(e);
        },
        integerToText: eu,
        length: Ol,
        like: function(e, t) {
            if (!t) return !1;
            const n = t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&").replace(/%/g, ".*").replace(/_/g, ".");
            return RegExp(`^${n}$`, "gi").test(e);
        },
        longIntegerToDecimal: function(e) {
            return new Ma(e.toString());
        },
        longIntegerToIdentifier: function(e) {
            return e;
        },
        longIntegerToInteger: function(e) {
            const t = e.toNumber();
            return Il.isWithinIntegerRange(t) ? t : zo.DEFAULT_INTEGER;
        },
        longIntegerToIntegerValidate: Ql,
        longIntegerToText: Zl,
        max: function(e, t) {
            const n = Ma.max(e, t);
            return n.isNaN() ? zo.DEFAULT_DECIMAL : n;
        },
        min: function(e, t) {
            const n = Ma.min(e, t);
            return n.isNaN() ? zo.DEFAULT_DECIMAL : n;
        },
        minute: function(e) {
            return e.minutes;
        },
        mod: function(e, t) {
            const n = e.mod(t);
            return n.isNaN() ? zo.DEFAULT_DECIMAL : n;
        },
        month: function(e) {
            return e.month;
        },
        newDate: function(e, t, n) {
            return Pl(e, t, n, 0, 0, 0) ? new ko(e, t, n) : zo.DEFAULT_DATE;
        },
        newDateTime: function(e, t, n, r, i, s) {
            return Pl(e, t, n, r, i, s) ? new ko(e, t, n, r, i, s) : zo.DEFAULT_DATETIME;
        },
        newTime: function(e, t, n) {
            return $l(e, t, n) ? new ko(1900, 1, 1, e, t, n) : zo.DEFAULT_TIME;
        },
        nullBinary: function() {
            return zo.DEFAULT_BINARYDATA;
        },
        nullDate: function() {
            return zo.DEFAULT_DATE;
        },
        nullIdentifier: function() {
            return 0;
        },
        nullObject: function() {
            return null;
        },
        nullTextIdentifier: function() {
            return "";
        },
        objectToBoolean: function(e) {
            if ("boolean" == typeof e) return e;
            throw new TypeError("Cannot convert type '" + typeof e + "' to 'Boolean'");
        },
        objectToDate: function(e) {
            return xu(e, !0, !1);
        },
        objectToDateTime: function(e) {
            return xu(e, !0, !0);
        },
        objectToDecimal: Cu,
        objectToInteger: Du,
        objectToLongInteger: Ru,
        objectToText: function(e) {
            if ("string" == typeof e) return e;
            throw new TypeError("Cannot convert type '" + typeof e + "' to 'Text'");
        },
        objectToTime: function(e) {
            return xu(e, !1, !0);
        },
        power: function(e, t) {
            const n = e.pow(t);
            return n.isNaN() ? zo.DEFAULT_DECIMAL : n;
        },
        replace: function(e, t, n) {
            const r = t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
            return e.replace(new RegExp(r, "g"), n);
        },
        round: function(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            const n = e.toDecimalPlaces(t);
            return n.isNaN() ? zo.DEFAULT_DECIMAL : n;
        },
        second: function(e) {
            return e.seconds;
        },
        sign: function(e) {
            const t = new Ma(0);
            return e.eq(t) || e.isNaN() ? zo.DEFAULT_INTEGER : e > t ? 1 : -1;
        },
        sqrt: function(e) {
            try {
                const t = e.sqrt();
                return t.isNaN() ? zo.DEFAULT_DECIMAL : t;
            } catch (e) {
                return zo.DEFAULT_DECIMAL;
            }
        },
        substr: _l,
        textToBoolean: Su,
        textToDate: uu,
        textToDateTime: hu,
        textToDateTimeValidate: du,
        textToDateValidate: lu,
        textToDecimal: wu,
        textToDecimalValidate: Tu,
        textToIdentifier: function(e) {
            return e;
        },
        textToInteger: Iu,
        textToIntegerValidate: Eu,
        textToLongInteger: Nu,
        textToLongIntegerValidate: Au,
        textToTime: fu,
        textToTimeValidate: pu,
        timeToText: mu,
        toLower: function(e) {
            return e.toLowerCase();
        },
        toObject: function(e) {
            return e;
        },
        toUpper: function(e) {
            return e.toUpperCase();
        },
        trim: function(e) {
            return e.trim();
        },
        trimEnd: function(e) {
            let t = e.length - 1;
            for (;
                " " === e[t];) t--;
            return e.substr(0, t + 1);
        },
        trimStart: function(e) {
            let t = 0;
            for (;
                " " === e[t];) t++;
            return e.substr(t);
        },
        trunc: function(e) {
            const t = e.trunc();
            return t.isNaN() ? zo.DEFAULT_DECIMAL : t;
        },
        year: function(e) {
            return e.year;
        }
    });
    const Pu = {
        [Po.Integer]: Vt.INTEGER,
        [Po.LongInteger]: Vt.LONGINTEGER,
        [Po.Decimal]: Vt.DECIMAL,
        [Po.Currency]: Vt.DECIMAL,
        [Po.Text]: Vt.TEXT,
        [Po.PhoneNumber]: Vt.TEXT,
        [Po.Email]: Vt.TEXT,
        [Po.Boolean]: Vt.BOOLEAN,
        [Po.Date]: Vt.DATE,
        [Po.DateTime]: Vt.DATE_TIME,
        [Po.Time]: Vt.TIME,
        [Po.Record]: Vt.UNKNOWN,
        [Po.RecordList]: Vt.UNKNOWN,
        [Po.BinaryData]: Vt.BINARY_DATA,
        [Po.Object]: Vt.UNKNOWN
    };

    function Vu(e) {
        switch (e) {
            case Vt.INTEGER:
            case Vt.LONGINTEGER:
            case Vt.DECIMAL:
            case Vt.TEXT:
            case Vt.BOOLEAN:
            case Vt.DATE:
            case Vt.DATE_TIME:
            case Vt.TIME:
            case Vt.BINARY_DATA:
                return Wo(Bu(e));
            default:
                throw new st.DataBaseException("", `Unable to determine default value for type ${ku(e)}`);
        }
    }

    function Bu(e) {
        switch (e) {
            case Vt.TEXT:
                return Po.Text;
            case Vt.BINARY_DATA:
                return Po.BinaryData;
            case Vt.BOOLEAN:
                return Po.Boolean;
            case Vt.DATE:
                return Po.Date;
            case Vt.DATE_TIME:
                return Po.DateTime;
            case Vt.TIME:
                return Po.Time;
            case Vt.DECIMAL:
                return Po.Decimal;
            case Vt.INTEGER:
                return Po.Integer;
            case Vt.LONGINTEGER:
                return Po.LongInteger;
            default:
                throw new Error(`Missing case for conversion of DB data type '${e}' to a model data type.`);
        }
    }

    function ku(e) {
        const t = Bu(e);
        return Po[t];
    }

    function zu(e) {
        const t = Pu[e];
        return null != t ? t : Vt.UNKNOWN;
    }

    function Hu(e) {
        return !!e.isGenericRecordType;
    }

    function ju(e) {
        return !!e.isGenericRecordListType;
    }

    function qu(e) {
        return !!e.isBasicTypeListType;
    }
    var Gu, Wu, Ku, Ju, Yu;
    ! function(e) {
        const t = new Map(),
            n = new Map();

        function r(e, t) {
            switch (t) {
                case Po.Integer:
                    return e;
                case Po.LongInteger:
                    return Zl(e);
                case Po.Decimal:
                case Po.Currency:
                    return Wl(e);
                case Po.Text:
                case Po.PhoneNumber:
                case Po.Email:
                    return e;
                case Po.Date:
                    return e.toISODate();
                case Po.DateTime:
                    return e.toString();
                case Po.Time:
                    return e.toISOTime();
                case Po.Boolean:
                    return e;
                case Po.Record:
                case Po.RecordList:
                    throw new TypeError("Records and Record lists are not basic types");
                case Po.BinaryData:
                    return "string" == typeof e ? e : e.content;
                case Po.Object:
                default:
                    return e;
            }
        }

        function i(e, t) {
            switch (t) {
                case Po.Integer:
                    return Il.ensureIntegerInsideBounds(e), 0 | e;
                case Po.LongInteger:
                    return "string" == typeof e ? bo.fromString(e) : bo.fromNumber(e);
                case Po.Decimal:
                case Po.Currency:
                    return new Ma(e || "0");
                case Po.Boolean:
                    return "string" == typeof e ? Su(e) : e;
                case Po.Text:
                case Po.PhoneNumber:
                case Po.Email:
                    return void 0 === e ? "" : e + "";
                case Po.Date:
                    return e instanceof Date ? new ko(e) : ko.fromISODate(e);
                case Po.DateTime:
                    return e instanceof Date ? new ko(e) : ko.fromISODateTime(e);
                case Po.Time:
                    return e instanceof Date ? new ko(e) : ko.fromISOTime(e);
                case Po.Record:
                case Po.RecordList:
                    throw new TypeError("Records and Record lists are not basic types");
                case Po.BinaryData:
                    return Il.hasBinaryDataInterface(e) ? new Bo(e.content, e.url) : new Bo(e);
                case Po.Object:
                default:
                    return e;
            }
        }
        e.to = function e(n) {
            let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Po.Record;
            let s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            let a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
            if (null == n) return;
            let o,
                l = Po.Record;
            if ("number" != typeof i ? (a = !0 === s, o = i, l = Po.Record) : (l = i, "boolean" != typeof s && (o = s)), n instanceof Zo) {
                const i = n,
                    s = i.constructor;
                let l = t.get(s);
                if (!l) {
                    const n = i.getAttributes();
                    l = (t, i, s) => n.reduce((a, o, l) => (o.ignoreForServer || (o.dataType === Po.Record || o.dataType === Po.RecordList ? a[o.name] = e(t[o.attrName], i, o.optimizeList && s) : o.dataType !== Po.Object && (a[o.name] = r(t[o.attrName], n[l].dataType))), a), {}), t.set(s, l);
                }
                return l(n, o, a);
            }
            if (n instanceof el) {
                const t = n,
                    r = t.constructor.getItemType(),
                    i = {
                        List: []
                    };
                if (a && o) {
                    if (t.length > 0 && o) {
                        const s = o.iterationContext.getCurrentRowNumber(n);
                        i.List.push(e(t.getItem(s), r, o, a));
                    }
                } else
                    for (let n = 0; n < t.length; n++) i.List.push(e(t.getItem(n), r));
                return t.isEmpty && (i.EmptyListItem = e(t.emptyListItem, r, o, a)), i;
            }
            return l !== Po.Object ? r(n, l) : void 0;
        }, e.from = function e(t, r) {
            if (Hu(r)) {
                const s = r;
                let a = n.get(s);
                if (!a) {
                    const t = s.getAttributes();
                    a = n => {
                        null != n || (n = {});
                        const r = t.reduce((r, s, a) => (s.dataType === Po.Record || s.dataType === Po.RecordList ? r[s.attrName] = Zo.getData(e(n[s.name], t[a].complexType)) : s.dataType === Po.BinaryData ? r[s.attrName] = i({
                            content: n[s.name],
                            url: n[`_${s.name}URL`]
                        }, t[a].dataType) : r[s.attrName] = i(n[s.name], t[a].dataType), r), {});
                        return new s(new s.RecordClass(r));
                    }, n.set(s, a);
                }
                return a(t);
            }
            if (ju(r) || qu(r)) {
                if (void 0 === r.getItemType() || null === r.getItemType()) throw Error("A List can only be deserialized if its ItemType is defined.");
                const n = new r();
                return 0 === t.List.length ? n.emptyListItem = e(t.EmptyListItem, r.getItemType()) : n.pushAll(t.List.map(t => e(t, r.getItemType()))), n;
            }
            return i(t, r);
        };
    }(Gu || (Gu = {})),
    function(e) {
        function t(e) {
            return !!(Il.isValidJsNumber(e) && e >= zo.MIN_INTEGER_VALUE && e <= zo.MAX_INTEGER_VALUE) || (Il.isLongInteger(e) ? Ql(e) : Il.isDecimal(e) ? Kl(e) : Il.isText(e) ? Eu(e) : !!Il.isBoolean(e));
        }

        function n(e) {
            return !!Il.isValidJsNumber(e) || !!Il.isValidLongInteger(e) || (Il.isValidDecimal(e) ? Yl(e) : Il.isText(e) ? Au(e) : !!Il.isBoolean(e));
        }

        function r(e) {
            return !!Il.isValidJsNumber(e) || !!(Il.isValidDecimal(e) && zo.MIN_DECIMAL_VALUE.lte(e) && zo.MAX_DECIMAL_VALUE.gte(e)) || !!Il.isValidLongInteger(e) || (Il.isText(e) ? Tu(e) : !!Il.isBoolean(e));
        }

        function i(e) {
            return Il.isJsNumber(e) ? Il.isValidJsNumber(e) : Il.isLongInteger(e) ? Il.isValidLongInteger(e) : Il.isDecimal(e) ? Il.isValidDecimal(e) : !!Il.isText(e) || !!Il.isBoolean(e) || (Il.isDateTime(e) ? Il.isValidDateTime(e) : !!Il.isJsDate(e) && Il.isValidJsDate(e));
        }

        function s(e) {
            return i(e);
        }

        function a(e) {
            return Il.isJsNumber(e) ? Il.isValidJsNumber(e) : Il.isLongInteger(e) ? Il.isValidLongInteger(e) : Il.isDecimal(e) ? Il.isValidDecimal(e) : Il.isText(e) ? /^(true|false)$/gi.test(e) : !!Il.isBoolean(e);
        }

        function o(e) {
            if (Il.isValidDateTime(e) && e.gte(zo.MIN_DATE_VALUE) && e.lte(zo.MAX_DATE_VALUE)) return !0;
            if (Il.isValidJsDate(e) && new ko(e).gte(zo.MIN_DATE_VALUE) && new ko(e).lte(zo.MAX_DATE_VALUE)) return !0;
            if (Il.isText(e)) {
                if (zo.ISO_DATE_FORMAT_REGEXP.test(e)) {
                    const t = new ko(new Date(e));
                    return t.gte(zo.MIN_DATE_VALUE) && t.lte(zo.MAX_DATE_VALUE);
                }
                if (lu(e)) {
                    const t = uu(e);
                    return t.gte(zo.MIN_DATE_VALUE) && t.lte(zo.MAX_DATE_VALUE);
                }
                return !1;
            }
            return !1;
        }

        function l(e) {
            return !!Il.isValidDateTime(e) || !!Il.isValidJsDate(e) || !!Il.isText(e) && (!(!zo.RFC3339_TIMEPART.test(e) && !zo.ISO_DATE_FORMAT_REGEXP.test(e)) || pu(e));
        }

        function u(e) {
            if (Il.isValidDateTime(e) && e.gte(zo.MIN_DATETIME_VALUE) && e.lte(zo.MAX_DATETIME_VALUE)) return !0;
            if (Il.isValidJsDate(e) && new ko(e).gte(zo.MIN_DATETIME_VALUE) && new ko(e).lte(zo.MAX_DATETIME_VALUE)) return !0;
            if (Il.isText(e)) {
                if (zo.ISO_DATE_FORMAT_REGEXP.test(e)) {
                    const t = new ko(new Date(e));
                    return t.gte(zo.MIN_DATETIME_VALUE) && t.lte(zo.MAX_DATETIME_VALUE);
                }
                if (du(e)) {
                    const t = hu(e);
                    return t.gte(zo.MIN_DATETIME_VALUE) && t.lte(zo.MAX_DATETIME_VALUE);
                }
                return !1;
            }
            return !1;
        }

        function c(e) {
            if (r(e)) {
                if (Il.isJsNumber(e)) return Cu(e);
                if (Il.isLongInteger(e)) return Cu(e);
                if (Il.isDecimal(e)) return Cu(e);
                if (Il.isText(e) && "" !== e) return wu(e);
                if (Il.isBoolean(e)) return kl(e);
            }
            return zo.DEFAULT_DECIMAL;
        }

        function d(e) {
            if (i(e)) {
                if (Il.isJsNumber(e)) return Il.isValidInteger(e) ? eu(e) : Wl(new Ma(e));
                if (Il.isLongInteger(e)) return Zl(e);
                if (Il.isDecimal(e)) return Wl(e);
                if (Il.isText(e)) return e;
                if (Il.isBoolean(e)) return zl(e);
                if (Il.isValidDate(e)) return Gl(e);
                if (Il.isValidTime(e)) return mu(e);
                if (Il.isDateTime(e)) return ql(e);
                if (Il.isJsDate(e)) {
                    const t = new ko(e);
                    return Il.isValidDate(t) ? Gl(t) : Il.isValidTime(t) ? mu(t) : ql(t);
                }
            }
            return zo.DEFAULT_TEXT;
        }
        e.isConvertibleTo = function(e, c) {
            switch (c) {
                case Po.Integer:
                    return t(e);
                case Po.LongInteger:
                    return n(e);
                case Po.Decimal:
                    return r(e);
                case Po.Currency:
                    return function(e) {
                        return r(e);
                    }(e);
                case Po.Text:
                    return i(e);
                case Po.PhoneNumber:
                    return function(e) {
                        return i(e);
                    }(e);
                case Po.Email:
                    return s(e);
                case Po.Boolean:
                    return a(e);
                case Po.Date:
                    return o(e);
                case Po.Time:
                    return l(e);
                case Po.DateTime:
                    return u(e);
                case Po.BinaryData:
                    return function(e) {
                        return Il.isBinaryData(e);
                    }(e);
                default:
                    return !1;
            }
        }, e.isDefault = function(e) {
            return Il.isValidJsNumber(e) && e === zo.DEFAULT_INTEGER || Il.isValidLongInteger(e) && e.equals(zo.DEFAULT_LONGINTEGER) || Il.isValidDecimal(e) && e.equals(zo.DEFAULT_DECIMAL) || Il.isText(e) && e === zo.DEFAULT_TEXT || Il.isBoolean(e) && e === zo.DEFAULT_BOOLEAN || Il.isValidDateTime(e) && e.equals(zo.DEFAULT_DATETIME);
        }, e.convertTo = function(e, r) {
            switch (r) {
                case Po.Integer:
                    return function(e) {
                        if (t(e)) {
                            if (Il.isJsNumber(e)) return Du(e);
                            if (Il.isLongInteger(e)) return Du(e);
                            if (Il.isDecimal(e)) return Du(e);
                            if (Il.isText(e) && "" !== e) return Iu(e);
                            if (Il.isBoolean(e)) return Vl(e);
                        }
                        return zo.DEFAULT_INTEGER;
                    }(e);
                case Po.LongInteger:
                    return function(e) {
                        if (n(e)) {
                            if (Il.isJsNumber(e)) return Ru(e);
                            if (Il.isLongInteger(e)) return Ru(e);
                            if (Il.isDecimal(e)) return Ru(e);
                            if (Il.isText(e) && "" !== e) return Nu(e);
                            if (Il.isBoolean(e)) return Bl(e);
                        }
                        return zo.DEFAULT_LONGINTEGER;
                    }(e);
                case Po.Decimal:
                    return c(e);
                case Po.Currency:
                    return function(e) {
                        return c(e);
                    }(e);
                case Po.Text:
                    return d(e);
                case Po.PhoneNumber:
                    return function(e) {
                        return d(e);
                    }(e);
                case Po.Email:
                    return function(e) {
                        return s(e) && Il.isText(e) ? e : zo.DEFAULT_EMAIL;
                    }(e);
                case Po.Boolean:
                    return function(e) {
                        if (a(e)) {
                            if (Il.isJsNumber(e)) return 0 !== e;
                            if (Il.isLongInteger(e)) return !e.eq(0);
                            if (Il.isDecimal(e)) return !e.eq(0);
                            if (Il.isText(e) && "" !== e) return !/^(false)$/gi.test(e);
                            if (Il.isBoolean(e)) return e;
                        }
                        return zo.DEFAULT_BOOLEAN;
                    }(e);
                case Po.Date:
                    return function(e) {
                        if (o(e)) {
                            if (Il.isDateTime(e)) {
                                const t = e;
                                return new ko(t.year, t.month, t.day);
                            }
                            if (Il.isJsDate(e)) {
                                const t = e;
                                return new ko(t.getFullYear(), t.getMonth() + 1, t.getDate());
                            }
                            if (Il.isText(e) && "" !== e) return zo.RFC3339_DATEPART.test(e) ? ko.fromISODate(e) : zo.ISO_DATE_FORMAT_REGEXP.test(e) ? Hl(ko.fromISODateTime(e)) : uu(e);
                        }
                        return zo.DEFAULT_DATE;
                    }(e);
                case Po.Time:
                    return function(e) {
                        if (l(e)) {
                            if (Il.isDateTime(e)) {
                                const t = e;
                                return new ko(null, null, null, t.hours, t.minutes, t.seconds, t.milliseconds);
                            }
                            if (Il.isJsDate(e)) {
                                const t = e;
                                return new ko(null, null, null, t.getHours(), t.getMinutes(), t.getSeconds());
                            }
                            if (Il.isText(e) && "" !== e) return zo.RFC3339_TIMEPART.test(e) ? ko.fromISOTime(e) : zo.ISO_DATE_FORMAT_REGEXP.test(e) ? jl(ko.fromISODateTime(e)) : fu(e);
                        }
                        return zo.DEFAULT_TIME;
                    }(e);
                case Po.DateTime:
                    return function(e) {
                        if (u(e)) {
                            if (Il.isDateTime(e)) {
                                const t = e;
                                return new ko(t.year, t.month, t.day, t.hours, t.minutes, t.seconds, t.milliseconds);
                            }
                            if (Il.isJsDate(e)) return new ko(e);
                            if (Il.isText(e) && "" !== e) return zo.ISO_DATE_FORMAT_REGEXP.test(e) ? ko.fromISODateTime(e) : hu(e);
                        }
                        return zo.DEFAULT_DATETIME;
                    }(e);
                case Po.BinaryData:
                    return e;
                default:
                    return null;
            }
        }, e.typeConvertRecord = function(e, t, n) {
            return n(e, t);
        }, e.typeConvertRecordList = function(e, t, n) {
            let r = 0;
            for (; r < e.length;) t.append(n(e.getItem(r), t.newItem())), r++;
            return t;
        };
    }(Wu || (Wu = {})),
    function(e) {
        function t(e) {
            return e - e % 1;
        }
        e.to = function(e, t) {
            return function(e, t) {
                switch (t) {
                    case Po.Integer:
                        return e;
                    case Po.LongInteger:
                        const t = e;
                        return Il.ensureNumberInsideBounds(t), t.toNumber();
                    case Po.Decimal:
                    case Po.Currency:
                        const n = e;
                        return Il.ensureNumberPrecision(n), Il.ensureNumberInsideBounds(n), n.toNumber();
                    case Po.Text:
                    case Po.PhoneNumber:
                    case Po.Email:
                        return e;
                    case Po.Date:
                    case Po.DateTime:
                    case Po.Time:
                        return e.toNative();
                    case Po.Boolean:
                        return e;
                    case Po.Record:
                    case Po.RecordList:
                        throw new TypeError("Records and Record lists are not basic types");
                    case Po.BinaryData:
                        return "string" == typeof e ? e : e.content;
                    case Po.Object:
                    default:
                        return e;
                }
            }(e, t);
        }, e.from = function(e, n) {
            return function(e, n) {
                switch (n) {
                    case Po.Integer:
                        if (Il.isValidJsNumber(e)) return Il.ensureIntegerInsideBounds(e), t(e);
                        break;
                    case Po.LongInteger:
                        if (Il.isValidJsNumber(e)) return Il.ensureLongIntegerInsideBounds(e), bo.fromNumber(t(e));
                        break;
                    case Po.Decimal:
                    case Po.Currency:
                        if (Il.isValidJsNumber(e)) return Il.ensureDecimalInsideBounds(e), new Ma(e);
                        break;
                    case Po.Boolean:
                        if (Il.isBoolean(e)) return e;
                        break;
                    case Po.Text:
                    case Po.PhoneNumber:
                    case Po.Email:
                        if (Il.isText(e)) return e;
                        if (Il.isValidJsNumber(e)) return Il.ensureDecimalInsideBounds(e), Wl(new Ma(e));
                        if (Il.isBoolean(e)) return zl(e);
                        break;
                    case Po.Date:
                        if (Il.isValidJsDate(e)) {
                            const t = e;
                            return new ko(t.getFullYear(), t.getMonth() + 1, t.getDate());
                        }
                        break;
                    case Po.DateTime:
                        if (Il.isValidJsDate(e)) return new ko(e);
                        break;
                    case Po.Time:
                        if (Il.isValidJsDate(e)) {
                            const t = e;
                            return new ko(null, null, null, t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds());
                        }
                        break;
                    case Po.BinaryData:
                        return Il.hasBinaryDataInterface(e) ? new Bo(e.content, e.url) : new Bo(e);
                    case Po.Object:
                        return e;
                }
                throw new st.InvalidJavascriptType(`Cannot assign a JavaScript ${typeof e} with value ${null == e ? JSON.stringify(e) : e.toString()} to an output parameter of type ${Po[n]}`);
            }(e, n);
        };
    }(Ku || (Ku = {})),
    function(e) {
        const t = new Map();

        function n(e, t, n) {
            let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
            let i = arguments.length > 4 ? arguments[4] : undefined;
            let s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
            if (!1 !== r || s || !Go(e, n)) switch (t) {
                case Po.Time:
                    return e.toISOTime();
                case Po.Date:
                    return e.toISODate();
                case Po.DateTime:
                    return !0 === i ? "" + Math.floor(e.getTime() / 1e3) : e.toString().replace(/\.\d+/, "");
                case Po.LongInteger:
                    const t = e;
                    return Il.ensureNumberInsideBounds(t), t.toNumber();
                case Po.Decimal:
                case Po.Currency:
                    const n = e;
                    return Il.ensureNumberPrecision(n), Il.ensureNumberInsideBounds(n), n.toNumber();
                case Po.Record:
                case Po.RecordList:
                    throw new TypeError("Records and Record lists are not basic types");
                case Po.BinaryData:
                    return "string" == typeof e ? e : e.content;
                default:
                    return e;
            }
        }

        function r(_ref12) {
            let {
                value: e,
                serializeDefaultValues: t = !0,
                useUnixDateFormat: i = !1,
                dataType: s = Po.Record,
                defaultValue: a,
                enforceDefaultValueSerializationAtThisLevel: o = !1
            } = _ref12;
            if (null != e) return e instanceof Zo ? function(e, t, i) {
                let s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
                const a = e.getAttributes().reduce((s, a) => {
                    if (a.dataType === Po.Record || a.dataType === Po.RecordList) {
                        const n = r({
                            value: e[a.attrName],
                            serializeDefaultValues: t,
                            useUnixDateFormat: i
                        });
                        n && (s[a.nameForJson] = n);
                    } else {
                        const r = n(e[a.attrName], a.dataType, a.defaultValue, t, i);
                        void 0 !== r && (s[a.nameForJson] = r);
                    }
                    return s;
                }, {});
                if (0 !== Object.keys(a).length || s) return a;
            }(e, null != t && t, null != i && i, o) : e instanceof el ? function(e, t, n) {
                let i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
                const s = [],
                    a = e.constructor.getItemType();
                for (let i = 0; i < e.length; i++) s.push(r({
                    value: e.getItem(i),
                    serializeDefaultValues: t,
                    useUnixDateFormat: n,
                    dataType: a,
                    enforceDefaultValueSerializationAtThisLevel: !0
                }));
                if (s.length > 0 || t || i) return s;
            }(e, null != t && t, null != i && i, o) : n(e, s, null != a ? a : Wo(s), t, i, o);
        }

        function i(e, t, n, r) {
            if (null == e) return n;
            switch (t) {
                case Po.Integer:
                    return function(e) {
                        let t;
                        zo.FORMAT.numberFormat.getRegExpForInteger().test(e) ? t = new Ma(e) : zo.FORMAT.numberFormat.getRegExpForJSNumber().test(e) && (t = new Ma(+e));
                        if (void 0 === t || !t.isInteger() || !Kl(t)) throw new st.Exception("Could not convert '" + e + "' to Integer");
                        return Jl(t);
                    }(e);
                case Po.LongInteger:
                    return function(e) {
                        let t;
                        zo.FORMAT.numberFormat.getRegExpForInteger().test(e) ? t = new Ma(e) : zo.FORMAT.numberFormat.getRegExpForJSNumber().test(e) && (t = new Ma(+e));
                        if (void 0 === t || !t.isInteger() || !Yl(t)) throw new st.Exception("Could not convert '" + e + "' to Long Integer");
                        return Xl(t);
                    }(e);
                case Po.Currency:
                case Po.Decimal:
                    return function(e) {
                        let t;
                        zo.FORMAT.numberFormat.getRegExpForInteger().test(e) ? t = new Ma(e) : zo.FORMAT.numberFormat.getRegExpForJSNumber().test(e) && (t = new Ma(+e));
                        if (void 0 === t || t.lt(zo.MIN_DECIMAL_VALUE) || t.gt(zo.MAX_DECIMAL_VALUE)) throw new st.Exception("Could not convert '" + e + "' to Decimal");
                        return t;
                    }(e);
                case Po.DateTime:
                    return function(e, t) {
                        if (!t) {
                            if (!Wu.isConvertibleTo(e, Po.DateTime)) throw new st.Exception("Could not convert '" + e + "' to DateTime");
                            return Gu.from(e, Po.DateTime);
                        }
                        e instanceof Date && (e = new ko(e.getTime()));
                        try {
                            return new ko(1e3 * +e);
                        } catch (t) {
                            throw new st.Exception("Could not convert '" + e + "' to DateTime");
                        }
                    }(e, r);
                default:
                    return Gu.from(e, t);
            }
        }
        e.to = r, e.from = function e(n, r, s, a) {
            if (Hu(r)) {
                const a = r;
                let o = t.get(a);
                if (!o) {
                    const n = a.getAttributes();
                    o = (t, s) => {
                        null != t || (t = {});
                        const a = n.reduce((r, a, o) => ("" !== a.nameForJson && (a.dataType === Po.Record || a.dataType === Po.RecordList ? r[a.attrName] = Zo.getData(e(t[a.nameForJson], n[o].complexType, s)) : r[a.attrName] = i(t[a.nameForJson], n[o].dataType, n[o].defaultValue, s)), r), {});
                        return new r(new r.RecordClass(a));
                    }, t.set(a, o);
                }
                return o(n, s);
            }
            if (ju(r) || qu(r)) {
                if (void 0 === r.getItemType() || null === r.getItemType()) throw Error("A List can only be deserialized if its ItemType is defined.");
                let t = n;
                if (null == t && (t = []), t.constructor !== Array) throw new TypeError("Could not convert '" + t + "' to List");
                const i = new r();
                return i.pushAll(t.map(t => e(t, r.getItemType(), s))), i;
            }
            return i(n, r, void 0 === a ? Wo(r) : a, s);
        };
    }(Ju || (Ju = {})),
    function(e) {
        e.typeDefaultValue = Vu, e.convertToModelDataType = Bu, e.typeDisplayName = ku;
        const t = "1900-01-01 00:00:00",
            n = new Map();

        function r(e) {
            const t = Pu[e];
            return void 0 === t ? Ft.DBDataType.UNKNOWN : t;
        }

        function i(t, n, i, s) {
            return e.deserializeFromDB(t["o" + n], r(s));
        }

        function s(t, n, i, s) {
            return e.deserializeFromDB(t[i], r(s));
        }

        function a(e, t) {
            const n = t.length,
                r = e.toString();
            return t.substr(0, Math.max(0, n - r.length)) + r;
        }
        e.from = function e(t, r, a, o) {
            var l;
            if (Hu(r)) {
                const l = t,
                    u = r,
                    c = a;
                let d = n.get(u);
                if (!d) {
                    const t = u.getAttributes();
                    d = (n, i, s, a) => {
                        const o = {};
                        return a && a.length > 0 ? (t.forEach(e => {
                            e.dataType !== Po.RecordList && (o[e.attrName] = null);
                        }), a.forEach(r => {
                            const a = t.filter(e => e.attrName === r)[0];
                            a.complexType ? o[r] = e(n, a.complexType, i) : o[r] = s(n, i.value++, a.name, a.dataType);
                        })) : t.forEach((a, l) => {
                            a.dataType !== Po.RecordList && (a.dataType === Po.Record && r.isAnonymousRecord() ? o[a.attrName] = e(n, t[l].complexType, i) : o[a.attrName] = s(n, i.value++, t[l].name, t[l].dataType));
                        }), new r.RecordClass(o);
                    }, n.set(u, d);
                }
                return d(l, c, r.isAnonymousRecord() ? s : i, o);
            }
            if (ju(r)) {
                if (void 0 === r.getItemType() || null === r.getItemType()) throw Error("A List can only be deserialized if its ItemType is defined.");
                const e = t,
                    n = r.getItemType(),
                    i = a,
                    s = new r(),
                    o = [];
                for (let t = 0; t < e.length; t++) o.push(new n(i(null, e.item(t))));
                return s.pushAll(o), s;
            } {
                const e = r;
                throw new Error(`Unable to read data from Local Storage. Unknown type ${null !== (l = null == e ? void 0 : e.name) && void 0 !== l ? l : e}`);
            }
        }, e.serializeToDB = function(n, r) {
            if (r.isEntityReference && Go(n, e.typeDefaultValue(r.type))) return null;
            switch (r.type) {
                case Ft.DBDataType.INTEGER:
                    return n;
                case Ft.DBDataType.LONGINTEGER:
                    return n ? n.toString() : null;
                case Ft.DBDataType.DECIMAL:
                    const e = n;
                    return r.decimals ? e.toFixed(r.decimals) : e.toString();
                case Ft.DBDataType.TEXT:
                    return n;
                case Ft.DBDataType.BOOLEAN:
                    return n ? 1 : 0;
                case Ft.DBDataType.DATE_TIME:
                    let i = n.toNative();
                    return n.eq(ko.defaultValue) ? t : (i = n.toNative(), a(i.getUTCFullYear(), "0000") + "-" + a(i.getUTCMonth() + 1, "00") + "-" + a(i.getUTCDate(), "00") + " " + a(i.getUTCHours(), "00") + ":" + a(i.getUTCMinutes(), "00") + ":" + a(i.getUTCSeconds(), "00"));
                case Ft.DBDataType.DATE:
                    const s = n.toNative();
                    return a(s.getFullYear(), "0000") + "-" + a(s.getMonth() + 1, "00") + "-" + a(s.getDate(), "00");
                case Ft.DBDataType.TIME:
                    const o = n.toNative();
                    return "1900-01-01 " + a(o.getHours(), "00") + ":" + a(o.getMinutes(), "00") + ":" + a(o.getSeconds(), "00");
                case Ft.DBDataType.BINARY_DATA:
                    const l = n;
                    return void 0 === l.content ? null : l.content;
                default:
                    throw new st.DataBaseException("", `Unable to serialize ${n} to a database value.`);
            }
        }, e.deserializeFromDB = function(n, r) {
            if (null === n) return e.typeDefaultValue(r);
            switch (r) {
                case Ft.DBDataType.INTEGER:
                    return n;
                case Ft.DBDataType.LONGINTEGER:
                    return bo.fromValue(n);
                case Ft.DBDataType.DECIMAL:
                    return new Ma(n);
                case Ft.DBDataType.TEXT:
                    return n;
                case Ft.DBDataType.BOOLEAN:
                    return 0 !== n;
                case Ft.DBDataType.DATE_TIME:
                case Ft.DBDataType.DATE:
                case Ft.DBDataType.TIME:
                    const e = /^((\d{4})-(\d{2})-(\d{2}))?\s?((\d{2}):(\d{2}):(\d{2}))?$/.exec(n),
                        i = new Date();
                    switch (r) {
                        case Ft.DBDataType.DATE_TIME:
                            if (n === t) return ko.defaultValue;
                            i.setUTCFullYear(parseInt(e[2], 10), parseInt(e[3], 10) - 1, parseInt(e[4], 10)), i.setUTCHours(parseInt(e[6], 10) || 0, parseInt(e[7], 10) || 0, parseInt(e[8], 10) || 0, 0);
                            break;
                        case Ft.DBDataType.DATE:
                            i.setFullYear(parseInt(e[2], 10), parseInt(e[3], 10) - 1, parseInt(e[4], 10)), i.setHours(0, 0, 0, 0);
                            break;
                        case Ft.DBDataType.TIME:
                            i.setFullYear(1900, 0, 1), i.setHours(parseInt(e[6], 10) || 0, parseInt(e[7], 10) || 0, parseInt(e[8], 10) || 0, 0);
                    }
                    return new ko(i);
                case Ft.DBDataType.BINARY_DATA:
                    return new Bo(n);
                default:
                    throw new st.DataBaseException("", "Unable to deserialize " + n + " to a runtime value.");
            }
        }, e.deserializeLazyBinaryFromDB = function(e) {
            return new Bo(void 0, void 0, e);
        };
    }(Yu || (Yu = {}));
    var Xu = _exports.DataConversion = Object.freeze({
        __proto__: null,
        get JSConversions() {
            return Wu;
        },
        get JSNodeParamConverter() {
            return Ku;
        },
        get JSONConverter() {
            return Ju;
        },
        get LocalStorageConverter() {
            return Yu;
        },
        get ServerDataConverter() {
            return Gu;
        }
    });
    const Qu = "BACKUP_";

    function Zu(e) {}
    var ec, tc, nc, rc;
    ! function(e) {
        e[e.Unchanged = 0] = "Unchanged", e[e.Deleted = 1] = "Deleted", e[e.Recreated = 2] = "Recreated", e[e.New = 3] = "New";
    }(ec || (ec = {})),
    function(e) {
        const t = [{
            columnName: "Id",
            options: "INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL"
        }, {
            columnName: "Key",
            options: "UNIQUE NOT NULL"
        }, {
            columnName: "Value"
        }];
        e.TABLE_NAME = "OSSYS_PERSISTENTKEYVALUE";
        const n = `"${t.map(e => e.columnName).join('", "')}"`,
            r = t.map(e => "'" + e.columnName + (e.options ? "' " + e.options : "'")).join(", ");

        function i(t) {
            return t.executeNonQuery(`CREATE TABLE IF NOT EXISTS "${e.TABLE_NAME}" (${r})`);
        }
        e.initialize = function(t, n) {
            return e.storage = new s(n), i(t);
        }, e.create = i;
        class s {
            constructor(e) {
                this.db = e;
            }
            isReady() {
                return Promise.resolve(!0);
            }
            getValue(t) {
                return this.db.executeTransaction(n => n.executeScalar(`SELECT VALUE FROM ${e.TABLE_NAME} WHERE Key = ?`, [t]));
            }
            setValue(t, r) {
                return this.db.executeTransaction(i => i.executeNonQuery(`INSERT OR REPLACE INTO ${e.TABLE_NAME} (${n}) VALUES (COALESCE((SELECT Id FROM ${e.TABLE_NAME} WHERE Key = ?), null), ?, ?)`, [t, t, r]));
            }
        }
        e.PersistentKeyValueStorage = s;
    }(tc || (tc = {})),
    function(e) {
        const t = "Metamodel";

        function n(e, t) {
            return !! function(e, t) {
                if (void 0 === e) return !0;
                if (e === t) return !1;
                switch (e) {
                    case Ft.DBDataType.BOOLEAN:
                        return t !== Ft.DBDataType.INTEGER && t !== Ft.DBDataType.LONGINTEGER;
                    case Ft.DBDataType.INTEGER:
                        return t !== Ft.DBDataType.LONGINTEGER && t !== Ft.DBDataType.TEXT;
                    case Ft.DBDataType.LONGINTEGER:
                        return t !== Ft.DBDataType.TEXT;
                    default:
                        return !0;
                }
            }(e.type, t.type) || !e.isEntityReference != !t.isEntityReference || void 0 !== e.length && void 0 !== t.length && (void 0 !== e.decimals && void 0 !== t.decimals ? e.length - e.decimals > t.length - t.decimals : e.length > t.length);
        }

        function r(t, n, r, i) {
            if (r) {
                const s = function(e, t) {
                    const n = e.name.toLowerCase(),
                        r = t.attributes.filter(e => e.name.toLowerCase() === n);
                    return 0 === r.length ? null : r[0];
                }(n, r);
                if (null !== s) {
                    if (i && (null == s ? void 0 : s.type) === Ft.DBDataType.DATE_TIME) {
                        const r = i.attrs[n.name.toLowerCase()];
                        if (r) return e.upgradeDbValue(t, r, n);
                    }
                    return e.upgradeDbValue(t, s, n);
                }
            }
            const s = i.attrs[n.name.toLowerCase()];
            return s ? e.upgradeDbValue(t, s, n) : t;
        }

        function i(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            let i,
                s = t;
            return r && t.type === Ft.DBDataType.DATE_TIME && (s = r), i = e.isPrimaryKey && s.isPrimaryKey && n ? !!(Ft.DBDataType.INTEGER !== e.type && Ft.DBDataType.LONGINTEGER !== e.type || Ft.DBDataType.INTEGER !== s.type && Ft.DBDataType.LONGINTEGER !== s.type) : e.type !== s.type, i || s.type !== Ft.DBDataType.DECIMAL && s.length !== e.length || s.type !== Ft.DBDataType.DECIMAL && s.decimals !== e.decimals || !s.isEntityReference != !e.isEntityReference && !e.isPrimaryKey;
        }! function(e) {
            const n = "OSSYS_ENTITY",
                r = `${Qu}${n}`,
                i = [{
                    name: "SS_Key"
                }, {
                    name: "Module_SS_Key"
                }, {
                    name: "Name"
                }, {
                    name: "Physical_Table_name"
                }, {
                    name: "Hash"
                }, {
                    name: "Extra_Info",
                    defaultValue: "'{\"attrs\":{}}'"
                }, {
                    name: "Upgrade_Status",
                    defaultValue: 0.toString()
                }],
                s = `"${i.map(e => e.name).join('", "')}"`;

            function a(e, t) {
                return e.executeNonQuery(`CREATE TABLE IF NOT EXISTS "${t}" (${s}, UNIQUE (SS_Key, Module_SS_Key))`);
            }

            function o(e, t) {
                let n = !0;
                const r = i.map(e => `"ent"."${e.name}"`);
                return e.executeQueryRaw(`SELECT ${r.join(", ")} FROM "${t}" "ent" LIMIT 0`).onError(e => {
                    n = !1;
                }).andThen(() => n);
            }

            function l(e, t, i) {
                return u(e, n, t, i).andThen(e => u(e, r, t, i));
            }

            function u(e, t, n, r) {
                let i = !1;
                return e.feed(null).andThenAll(() => [e => e.executeNonQuery(`SELECT "ent"."${n}" FROM ${t} "ent" LIMIT 0`).onError(e => {
                    i = !0;
                }), e => i ? e.executeNonQuery(`ALTER TABLE ${t} ADD "${n}"`).andThen(e => r ? e.executeNonQuery(`UPDATE ${t} SET "${n}" = ${r}`) : e.feed(null)) : e.feed(null)]);
            }

            function c(e) {
                pi(t, `Extracting metadata for table ${e.tableName} (${e.name})`);
                const n = {
                    v: 0,
                    idIsAutoNumber: e.idIsAutoNumber,
                    attrs: {}
                };
                for (const t of e.attributes) n.attrs[t.name.toLowerCase()] = d(t);
                return n;
            }

            function d(e) {
                const t = {
                    type: e.type
                };
                return void 0 !== e.decimals && (t.decimals = e.decimals), void 0 !== e.length && (t.length = e.length), e.isPrimaryKey && (t.isPrimaryKey = e.isPrimaryKey), e.isEntityReference && (t.isEntityReference = e.isEntityReference), t;
            }
            e.getDefaultMetaData = function() {
                return {
                    v: -1,
                    attrs: {}
                };
            }, e.create = function(e) {
                return a(e, n).andThen(e => a(e, `${Qu}${n}`));
            }, e.innerCreate = a, e.verifyColumns = function(e) {
                return o(e, n).andThen(e => o(e, r));
            }, e.innerVerifyColumns = o, e.addMissingColumns = function(e) {
                return e.feed(null).andThenAll(e => i.map(e => t => l(t, e.name, e.defaultValue)));
            }, e.addColumnIfNeeded = l, e.copyMetaInfo = function(e, t, i) {
                const a = i ? r : n,
                    o = i ? n : r;
                let l = e.executeNonQuery(`DELETE FROM ${o} WHERE Physical_Table_name = ?`, [t]).andThen(e => e.executeNonQuery(`INSERT INTO ${o}(${s}) SELECT ${s} FROM ${a} WHERE Physical_Table_name = ?`, [t]));
                return i && (l = l.andThen(e => e.executeNonQuery(`DELETE FROM ${a} WHERE Physical_Table_name = ?`, [t]))), l;
            }, e.extractEntityMetadata = c, e.updateEntity = function(e, r, i) {
                const s = c(r);
                pi(t, `Updating metadata for table ${r.tableName} (${r.name})`);
                const a = new dc();
                return a.add("Hash", Ft.DBDataType.TEXT, r.hash), a.add("Name", Ft.DBDataType.TEXT, r.name), a.add("Physical_Table_name", Ft.DBDataType.TEXT, r.tableName), a.add("Extra_Info", Ft.DBDataType.TEXT, JSON.stringify(s)), a.add("Key", Ft.DBDataType.TEXT, r.key), a.add("ModuleKey", Ft.DBDataType.TEXT, i), e.executeNonQuery(`UPDATE ${n} SET Hash = ?, Name = ?, Physical_Table_name = ?, Extra_Info = ? WHERE SS_Key = ? AND Module_SS_Key = ?`, a.toArray());
            }, e.insertEntity = function(e, t, r) {
                const i = c(t),
                    s = new dc();
                return s.add("Key", Ft.DBDataType.TEXT, t.key), s.add("ModuleKey", Ft.DBDataType.TEXT, r), s.add("Name", Ft.DBDataType.TEXT, t.name), s.add("TableName", Ft.DBDataType.TEXT, t.tableName), s.add("Hash", Ft.DBDataType.TEXT, t.hash), s.add("Extra_Info", Ft.DBDataType.TEXT, JSON.stringify(i)), s.add("Upgrade_Status", Ft.DBDataType.TEXT, 3), e.executeNonQuery(`INSERT INTO ${n}(SS_Key, Module_SS_Key, Name, Physical_Table_name, Hash, Extra_Info, Upgrade_Status) VALUES (?, ?, ?, ?, ?, ?, ?)`, s.toArray());
            };
        }(e.Metamodel || (e.Metamodel = {})), e.upgradeDbValue = function(e, t, r) {
            if (n(t, r)) {
                const n = Yu.deserializeFromDB(e, t.type),
                    i = Yu.convertToModelDataType(r.type),
                    s = function(e, t, n, r) {
                        let i = e,
                            s = t;
                        const a = function(e) {
                                switch (e) {
                                    case Ft.DBDataType.TEXT:
                                        return "Text";
                                    case Ft.DBDataType.BINARY_DATA:
                                        return "Binary Data";
                                    case Ft.DBDataType.BOOLEAN:
                                        return "Boolean";
                                    case Ft.DBDataType.INTEGER:
                                        return "Integer";
                                    case Ft.DBDataType.LONGINTEGER:
                                        return "Long Integer";
                                    case Ft.DBDataType.DECIMAL:
                                        return "Decimal";
                                    case Ft.DBDataType.DATE_TIME:
                                        return "DateTime";
                                    case Ft.DBDataType.DATE:
                                        return "Date";
                                    case Ft.DBDataType.TIME:
                                        return "Time";
                                    default:
                                        return "Unknown";
                                }
                            }(n),
                            o = Po[r];
                        "string" == typeof e && e && (i = e.substr(0, 50) + ` (length:${e.length})`);
                        if (Il.isText(t)) {
                            const e = t;
                            s = e.substr(0, 50) + ` (length:${e.length})`;
                        }
                        if (t instanceof Bo) {
                            const e = t.content;
                            s = e.substr(0, 50) + ` (length:${e.length})`;
                        }
                        return `convert databaseValue:'${i}'/deserializedValue:'${s}' from type ${a} to ${o}`;
                    }(e, n, t.type, i);
                if (Wu.isConvertibleTo(n, i)) {
                    const e = Wu.convertTo(n, i),
                        t = Yu.serializeToDB(e, r);
                    return cc(t, r, s), t;
                }
                throw new st.DataBaseException("", `Unable to ${s}.`);
            }
            return e;
        }, e.upgradeDbRecord = function(e, t, n, i) {
            const s = {};
            for (const t of Object.keys(e)) s[t.toLowerCase()] = e[t];
            ! function(e, t) {
                var n;
                for (const r of t.attributes) {
                    const t = r.name.toLowerCase();
                    if (void 0 === e[t]) {
                        const i = null !== (n = r.default) && void 0 !== n ? n : Yu.typeDefaultValue(r.type);
                        e[t] = Yu.serializeToDB(i, r);
                    }
                }
            }(s, t);
            const a = {};
            for (const e of t.attributes) try {
                const t = e.name.toLowerCase(),
                    o = s[t];
                a[t] = r(o, e, n, i);
            } catch (t) {
                throw new st.DataBaseException("", `Unable to upgrade attribute '${e.name}' data type to '${Yu.typeDisplayName(e.type)}':\n${ot(t)}`);
            }
            return a;
        }, e.requiresFullUpgrade = function(e, t, n) {
            let r;
            if (r = t ? t.idIsAutoNumber : n.idIsAutoNumber, r !== e.idIsAutoNumber) return !0;
            return function(e, t, n) {
                const r = {};
                for (const t of e.attributes) {
                    const e = t.name.toLowerCase();
                    r[e] = {}, r[e].entityAttribute = t;
                }
                for (const e of Object.keys(n.attrs)) {
                    const t = e.toLowerCase();
                    r[t] = r[t] || {}, r[t].dbMetaAttribute = n.attrs[e];
                }
                if (t)
                    for (const e of t.attributes) {
                        const t = null == e ? void 0 : e.name.toLowerCase();
                        r[t] = r[t] || {}, r[t].dbAttribute = e;
                    }
                return Object.keys(r).map(e => r[e]);
            }(e, t, n).some(e => !e.entityAttribute || (e.dbAttribute || e.dbMetaAttribute ? function(e, t, n) {
                let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
                if (t) {
                    return !(void 0 === n || void 0 === n.type || n.type === e.type) || i(e, t, r, n) || !t.isPrimaryKey != !e.isPrimaryKey;
                }
                return i(e, n, r) || !n.isPrimaryKey != !e.isPrimaryKey;
            }(e.entityAttribute, e.dbAttribute, e.dbMetaAttribute, r !== Ft.AutoNumber.No) : e.entityAttribute.isPrimaryKey));
        };
    }(nc || (nc = {})),
    function(e) {
        e[e.Auto = 0] = "Auto", e[e.Single = 1] = "Single", e[e.Bulk = 2] = "Bulk";
    }(rc || (rc = {}));
    const ic = new wl("Id", "idOut"),
        sc = new El("Record", "recordOut"),
        ac = "WebSQLStorage";
    class oc {
        constructor() {}
        getDatabase() {
            return this._db ? Promise.resolve(this._db) : (this.dbReadyPromise || (this.dbReadyPromise = new Promise(e => {
                this.onDbInit = () => e(this._db);
            })), this.dbReadyPromise);
        }
        initDb(e) {
            pi(ac, `Setting platform database to '${e ? e.name : "none"}'`), this._db = e, this.onDbInit && (this.onDbInit(), this.onDbInit = null);
        }
        clearDb() {
            this._db = null;
        }
        initModule(e, t, n) {
            return this.recoverBackupTables(t, e, n).andThen(t => 0 === e.length ? t.feed(null) : this.dropInconsistentTables(t, e, n)).andThen(t => this.backupDeletedTables(t, e, n)).andThen(e => {
                const t = new dc();
                return t.add("ModuleKey", Ft.DBDataType.TEXT, n), e.executeQuery("SELECT SS_Key, Hash, Extra_Info FROM OSSYS_ENTITY WHERE Module_SS_Key = ?", e => ({
                    hash: e.Hash,
                    extraInfo: JSON.parse(e.Extra_Info || "{}"),
                    ssKey: e.SS_Key
                }), t.toArray());
            }).andThenAll(t => e.map(e => {
                const r = t.filter(t => t.ssKey === e.key);
                return t => this.createOrUpgradeTable(t, e, 1 === r.length ? r[0] : void 0, n);
            }));
        }
        initMetamodel(e) {
            return nc.Metamodel.create(e).andThen(e => nc.Metamodel.verifyColumns(e)).andThen((e, t) => {
                if (!t) return nc.Metamodel.addMissingColumns(e);
            });
        }
        createOrUpgradeTable(e, t, n, r) {
            pi(ac, `Checking the status of table ${t.tableName} (${t.name})`), n || (n = {
                hash: null,
                extraInfo: nc.Metamodel.getDefaultMetaData()
            });
            const {
                hash: i,
                extraInfo: s
            } = n;
            return i ? i !== t.hash ? qi.introspectTableInfo(e, t.tableName).andThen((e, n) => nc.requiresFullUpgrade(t, n, s) ? (pi(ac, `Table ${t.tableName} (${t.name}) exists and will be fully upgraded`), this.recreateTable(e, t, n, r, s)) : (pi(this, `Table ${t.tableName} (${t.name}) exists and will be incrementally upgraded`), this.upgradeTable(e, t, n, r, s))) : (pi(ac, `Table ${t.tableName} (${t.name}) exists and is up to date`), null) : (pi(ac, `Table ${t.tableName} (${t.name}) does not exist and will be created`), this.createTable(e, t, r).andThen(e => nc.Metamodel.insertEntity(e, t, r)));
        }
        recreateTable(e, t, n, r, i) {
            return e.executeQuery(`SELECT * FROM "${t.tableName}"`, e => e).onError(e => {
                throw mi(ac, `Unable to upgrade the definition of entity '${t.name}':\n${ot(e)}`), new st.DataBaseException("", `Unable to upgrade the definition of entity '${t.name}':\n${ot(e)}`);
            }).andThen((e, s) => this.backupTable(e, t.tableName, 2).andThen(e => this.createTable(e, t, r)).andThenAll(() => s.map(e => {
                const r = nc.upgradeDbRecord(e, t, n, i),
                    s = new dc(!0);
                for (const e of t.attributes) s.add(e.name, e.type, r[e.name.toLowerCase()]);
                return e => e.executeNonQuery(t.insert.sql, s.toArray());
            }))).andThen(e => nc.Metamodel.updateEntity(e, t, r));
        }
        upgradeTable(e, t, n, r, i) {
            let s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            return e.feed(null).andThenAll(() => {
                const e = t.attributes.filter(e => n ? !n.attributes.some(t => e.name === t.name) : !Object.keys(i.attrs).some(t => t === e.name.toLowerCase()));
                return pi(this, `Entity '${t.name}' - newAttributes - ${JSON.stringify(e)} - hash - ${s} - info.hash - ${t.hash}`), e.map(e => n => {
                    let r = n.executeNonQuery(e.addColumn.sql);
                    if (void 0 !== e.default) {
                        const n = new dc();
                        n.add("value", e.type, e.default), r = r.andThen(r => r.executeNonQuery(`UPDATE "${t.tableName}" SET "${e.name}" = ?`, n.toArray()));
                    }
                    return r;
                });
            }).andThen(e => nc.Metamodel.updateEntity(e, t, r));
        }
        switchModule(e, t) {
            return this.dropBackupTables(e, t);
        }
        recoverBackupTables(e, t, n) {
            return this.doForEachTable(e, e => (pi(ac, `Recovering table ${e}`), t.filter(t => t.tableName === e), t => this.recoverBackupTable(t, e)), n, "Upgrade_Status <> 0");
        }
        dropInconsistentTables(e, t, n) {
            return this.doForEachTable(e, e => (pi(this, `Dropping inconsistent table ${e} (same key, different physical table name)`), t => this.dropTableIfExists(t, e).andThen(t => t.executeNonQuery(`DELETE FROM OSSYS_ENTITY WHERE upper(Physical_Table_name) = '${e}'`))), n, "Upgrade_Status = 0" + (0 === t.length ? "" : ` AND SS_Key IN (${t.map(e => "'" + e.key + "'").join(", ")}) AND Physical_Table_name NOT IN (${t.map(e => "'" + e.tableName + "'").join(", ")})`));
        }
        dropBackupTables(e, t) {
            return this.doForEachTable(e, e => (pi(ac, `Dropping table ${e}`), t => this.dropBackupTable(t, e)), t, "Upgrade_Status <> 0");
        }
        backupDeletedTables(e, t, n) {
            return this.doForEachTable(e, e => (pi(ac, `Backing up old table ${e}`), t => this.backupTable(t, e, 1)), n, "Upgrade_Status = 0" + (0 === t.length ? "" : ` AND Physical_Table_name NOT IN (${t.map(e => "'" + e.tableName + "'").join(", ")})`));
        }
        doForEachTable(e, t, n, r) {
            let i = `SELECT Physical_Table_name as name FROM OSSYS_ENTITY WHERE Module_SS_Key = '${n}'`;
            return r && (i += " AND " + r), e.executeQuery(i, e => e.name).andThenAll(e => {
                const n = [];
                return e.forEach(e => {
                    n.push(t(e));
                }), n;
            });
        }
        dropTableIfExists(e, t) {
            return e.executeNonQuery(`DROP TABLE IF EXISTS "${t}"`);
        }
        createTable(e, t, n) {
            return pi(ac, `createTable '${t.createTable.sql}'`), e.executeNonQuery(t.createTable.sql);
        }
        backupTable(e, t, n) {
            return pi(ac, `backupTable '${t}'`), nc.Metamodel.copyMetaInfo(e, t, !1).andThen(e => this.dropTableIfExists(e, this.getBackupTableName(t))).andThen(e => this.renameTableAndSetStatus(e, t, this.getBackupTableName(t), t, n));
        }
        recoverBackupTable(e, t) {
            let n = !0;
            return this.dropTableIfExists(e, t).andThen(e => e.executeScalar(`SELECT 1 FROM ${this.getBackupTableName(t)}`)).onError(e => {
                e && (n = !1);
            }).andThen(e => {
                if (n) return this.renameTableAndSetStatus(e, this.getBackupTableName(t), t, t, 0);
            }).andThen(e => nc.Metamodel.copyMetaInfo(e, t, !0));
        }
        dropBackupTable(e, t) {
            return this.dropTableIfExists(e, this.getBackupTableName(t)).andThen(e => e.executeScalar(`SELECT Upgrade_Status FROM OSSYS_ENTITY WHERE upper(Physical_Table_name) = '${t}'`)).andThen((e, n) => e.executeNonQuery(1 === n ? `DELETE FROM OSSYS_ENTITY WHERE upper(Physical_Table_name) = '${t}'` : `UPDATE OSSYS_ENTITY SET Upgrade_Status = 0 WHERE upper(Physical_Table_name) = '${t}'`)).andThen(e => e.executeNonQuery(`DELETE FROM ${Qu}OSSYS_ENTITY WHERE Physical_Table_name = ?`, [t]));
        }
        renameTableAndSetStatus(e, t, n, r, i) {
            return pi(ac, `renameTableAndSetStatus '${r} to ${n}'`), this.renameTable(e, t, n).andThen(e => this.setTableUpgradeStatus(e, r, i));
        }
        renameTable(e, t, n) {
            return e.executeNonQuery(`ALTER TABLE "${t}" RENAME TO "${n}"`);
        }
        setTableUpgradeStatus(e, t, n) {
            return e.executeNonQuery(`UPDATE OSSYS_ENTITY SET Upgrade_Status = ${n} WHERE upper(Physical_Table_name) = '${t}'`);
        }
        getBackupTableName(e) {
            return Qu + e;
        }
        executeNonQuery(e, t) {
            return this.getDatabase().then(n => n.executeTransaction(n => n.executeNonQuery(e, null == t ? void 0 : t.toArray())));
        }
        executeQuery(e, t, n, r) {
            return this.getDatabase().then(i => i.executeReadTransaction(i => i.executeQueryRaw(e, null == r ? void 0 : r.toArray()).andThen((e, r) => Yu.from(r.rows, t, n))));
        }
        rawExecuteQuery(e, t, n) {
            return this.getDatabase().then(r => r.executeReadTransaction(r => r.executeQueryRaw(e, null == n ? void 0 : n.toArray()).andThen((e, n) => {
                const r = new Array(n.rows.length);
                for (let e = 0; e < n.rows.length; e++) {
                    const i = n.rows.item(e);
                    r[e] = t(i);
                }
                return r;
            })));
        }
        executeCount(e, t) {
            return this.getDatabase().then(n => n.executeReadTransaction(n => n.executeScalar(e, null == t ? void 0 : t.toArray()).andThen((e, t) => Yu.deserializeFromDB(t, Ft.DBDataType.LONGINTEGER))));
        }
        rawExecuteScalar(e, t) {
            return this.getDatabase().then(n => n.executeReadTransaction(n => n.executeQueryRaw(e, null == t ? void 0 : t.toArray()).andThen((e, t) => 0 === t.rows.length ? null : function(e) {
                for (const t in e)
                    if (e.hasOwnProperty(t)) return e[t];
                return null;
            }(t.rows.item(0)))));
        }
        create(e, t) {
            return uc(e, t, "create"), this.getDatabase().then(n => n.executeTransaction(n => this.createInner(n, e, t, !0)));
        }
        createInner(e, t, n, r) {
            var i, s;
            const a = null === (s = (i = t.insert).getArguments) || void 0 === s ? void 0 : s.call(i, n);
            return e.executeQueryRaw(t.insert.sql, null == a ? void 0 : a.toArray()).andThen((e, i) => {
                if (null === t.getIdAttribute()) return null;
                (t.idIsAutoNumber === Ft.AutoNumber.No || t.idIsAutoNumber === Ft.AutoNumber.YesIfEmpty && !t.hasNullId(n)) && (r = !1);
                const s = t.getIdAttribute().type,
                    a = Yu.convertToModelDataType(s),
                    o = new(ic.getType(a))();
                let l;
                return l = r ? Yu.deserializeFromDB(i.insertId, s) : t.getIdFromRecord(n), o.idOut = l, o;
            });
        }
        update(e, t) {
            var n, r;
            uc(e, t, "update");
            const i = null === (r = (n = e.update).getArguments) || void 0 === r ? void 0 : r.call(n, t);
            return this.executeNonQuery(e.update.sql, i);
        }
        createOrUpdate(e, t) {
            return this.getDatabase().then(n => n.executeTransaction(n => this.createOrUpdateInner(n, e, t, !0)));
        }
        createOrUpdateInner(e, t, n, r) {
            var i, s;
            if (uc(t, n, "create or update"), t.hasNullId(n)) return this.createInner(e, t, n, !0);
            const a = null === (s = (i = t.upsert).getArguments) || void 0 === s ? void 0 : s.call(i, n);
            return e.executeQueryRaw(t.upsert.sql, null == a ? void 0 : a.toArray()).andThen((e, r) => {
                const i = t.getIdFromRecord(n),
                    s = t.getIdAttribute().type,
                    a = Yu.convertToModelDataType(s),
                    o = new(ic.getType(a))();
                return o.idOut = i, o;
            });
        }
        createOrUpdateAll(e, t) {
            return this.getDatabase().then(n => n.executeTransaction(n => oc.ForceCreateOrUpdateAllMethod === rc.Bulk || oc.ForceCreateOrUpdateAllMethod === rc.Auto && 0 === e.attributes.filter(e => e.type === Ft.DBDataType.BINARY_DATA).length ? this.createOrUpdateAllBulk(n, e, t) : this.createOrUpdateAllSingle(n, e, t)).then(Zu));
        }
        createOrUpdateAllBulk(e, t, n) {
            var r, i, s, a;
            const o = [],
                l = (e, t) => o.push(n => n.executeQueryRaw(e, t)),
                u = Math.floor(oc.MaxQueryParameters / t.attributes.length);
            if (0 === u) return this.createOrUpdateAllSingle(e, t, n);
            const c = Math.ceil(n.length / u);
            for (let e = 0; e < c; e++) {
                let o = [],
                    c = 0;
                for (; c < u;) {
                    const s = e * u + c;
                    if (s === n.length) break;
                    const a = n.getItem(s);
                    uc(t, a, "create or update"), o = o.concat(null === (i = (r = t.upsert).getArguments) || void 0 === i ? void 0 : i.call(r, a).toArray()), c++;
                }
                l(null === (a = (s = t.upsert).getBulkSql) || void 0 === a ? void 0 : a.call(s, c), o);
            }
            return e.feed(null).andThenAll(() => o);
        }
        createOrUpdateAllSingle(e, t, n) {
            const r = [],
                i = e => r.push(n => this.createOrUpdateInner(n, t, e, !1));
            for (let e = 0; e < n.length; e++) {
                i(n.getItem(e));
            }
            return e.feed(null).andThenAll(() => r);
        }
        get(e, t) {
            const n = e.getIdAttribute(),
                r = new dc();
            return r.add(n.name, n.type, t), this.rawExecuteQuery(e.select.sql, e.dbRecordToRecord, r).then(n => {
                if (0 === n.length) throw new st.DataBaseException("", `${e.name} with id ${t} was not found`); {
                    const e = new(sc.getType(n[0].constructor))();
                    return e.recordOut = n[0], e;
                }
            });
        }
        delete(e, t) {
            const n = e.getIdAttribute(),
                r = new dc();
            return r.add(n.name, n.type, t), this.executeNonQuery(e.delete.sql, r);
        }
        deleteAll(e) {
            return this.executeNonQuery(e.deleteAll.sql);
        }
        getBinary(e, t, n) {
            const r = e.getIdAttribute(),
                i = r.name,
                s = r.type,
                a = `SELECT "${t}" FROM "${e.tableName}" WHERE "${i}" = ?`,
                o = new dc();
            return o.add(i, s, n), Yu.deserializeLazyBinaryFromDB(() => this.getDatabase().then(e => e.executeReadTransaction(e => e.executeScalar(a, o.toArray()))));
        }
        replaceEntityReferencesInOrderBy(e, t, n) {
            let r = Yt(e = e.trim(), '(^|\\s|\\.)(\\[|"|)(ossys_|osltm_|oslog_|osevt_|osusr_|osext_)', !0);
            if (r.length > 0) {
                const e = r[0];
                throw new st.DataBaseException("", `'${e.groups[2] + e.groups[3]}' found in 'Order By' parameter is a reserved prefix`);
            }
            if ("" !== e && (r = Yt(e, "((((\\{\\w+\\})|(\\w+)).)?((\\[\\w+\\])|(\\w+))(( )+(desc|asc))?)(( )*,( )*(((\\{\\w+\\})|(\\w+)).)?((\\[\\w+\\])|(\\w+))(( )+(desc|asc))?)*", !0), 1 !== r.length || r[0].value !== e)) throw new st.DataBaseException("", "Invalid syntax in 'Order By' parameter.");
            let i = Xt(e, "(\\{\\w+\\}|\\w+\\.)", !1, e => this.replaceEntityNameInOrderBy(e, t, n));
            return i = Xt(i, "(\\[\\w+\\])", !1, e => this.replaceAttributeName(e)), i;
        }
        replaceEntityNameInOrderBy(e, t, n) {
            let r = "";
            const i = this.getEntityNameFromMatch(e);
            let s = !1;
            for (let e = 0; e < t.length; e++)
                if (t[e].toLowerCase() === i.toLowerCase()) {
                    s = !0, r = '"' + n[e] + '"';
                    break;
                }
            if (!s) throw new st.DataBaseException("", `'${i}' found in 'Order By' parameter is an invalid Entity`);
            return "." === e.value.charAt(e.value.length - 1) ? r + "." : r;
        }
        replaceAttributeName(e) {
            const t = e.value.substr(1, e.value.length - 2);
            return t ? ('"' === t.charAt(0) ? "" : '"') + t + ('"' === t.charAt(t.length - 1) ? "" : '"') : "";
        }
        getEntityNameFromMatch(e) {
            return "." === e.value.charAt(e.value.length - 1) ? e.value.substr(0, e.value.length - 1) : e.value.substr(1, e.value.length - 2);
        }
        getOrderByColumnsWithoutDuplicates(e) {
            return this.filterDuplicateOrderByColumns(e).join(", ");
        }
        filterDuplicateOrderByColumns(e) {
            const t = new Array(),
                n = {};
            return e.forEach(e => {
                const r = e.trim();
                if ("" !== r) {
                    const e = r.replace(new RegExp("\b((ASC)|(DESC))$", "im"), "").replace('"', "").replace("[", "").replace("]", "").trim().toLowerCase();
                    !0 !== n[e] && (t.push(r), n[e] = !0);
                }
            }), t;
        }
    }
    oc.MaxQueryParameters = 500, oc.ForceCreateOrUpdateAllMethod = rc.Auto;
    const lc = new oc();

    function uc(e, t, n) {
        const r = e.getAllAttributesFromRecord(t).toArray();
        for (let t = 0; t < e.attributes.length; t++) {
            const i = e.attributes[t];
            cc(r[t], i, `${n} '${e.name}.${i.name}'`);
        }
    }

    function cc(e, t, n) {
        if (t.type === Ft.DBDataType.TEXT) {
            if (null === e || void 0 === t.length) return;
            const r = e.length - t.length;
            if (r > 0) throw new st.DataBaseException("", `Unable to ${n} because it exceeds the maximum allowed length by ${r} characters.`);
        } else if (t.type === Ft.DBDataType.DECIMAL && void 0 !== t.length && void 0 !== t.decimals) {
            const r = e.split(".")[0].length - (t.length - t.decimals);
            if (r > 0) throw new st.DataBaseException("", `Unable to ${n} because it exceeds the maximum allowed length by ${r} characters.`);
        }
    }
    class dc {
        constructor(e) {
            this.skipConversion = e, this.argumentList = [], this.existingArguments = {};
        }
        add(e, t, n, r, i, s) {
            if (!this.existingArguments[e])
                if (this.existingArguments[e] = !0, void 0 === n) this.argumentList.push(null);
                else {
                    let e;
                    e = this.skipConversion ? n : Yu.serializeToDB(n, {
                        type: t,
                        length: r,
                        decimals: i,
                        isEntityReference: s
                    }), this.argumentList.push(e);
                }
        }
        toArray() {
            return this.argumentList;
        }
    }
    var hc = _exports.Entities = Object.freeze({
        __proto__: null,
        BACKUP_TABLE_PREFIX: Qu,
        Entity: class {
            constructor(e, t, n) {
                this.storage = e, this.info = t, this.moduleKey = n, this.getBinary = (e, t, n) => n.hasContent() ? n : this.storage.getBinary(this.info, e, t);
            }
            getStorage() {
                return this.storage;
            }
            getInfo() {
                return this.info;
            }
            create(e) {
                return this.storage.create(this.info, e);
            }
            createOrUpdate(e) {
                return this.storage.createOrUpdate(this.info, e);
            }
            createOrUpdateAll(e) {
                return this.storage.createOrUpdateAll(this.info, e);
            }
            update(e) {
                return this.storage.update(this.info, e);
            }
            get(e) {
                return this.storage.get(this.info, e);
            }
            delete(e) {
                return this.storage.delete(this.info, e);
            }
            deleteAll() {
                return this.storage.deleteAll(this.info);
            }
        },
        get PersistentKeyValue() {
            return tc;
        },
        QueryArgumentsList: dc,
        get Upgrades() {
            return nc;
        },
        WebSQLStorage: oc,
        webSQLStorageInstance: lc
    });
    const gc = "_error.html",
        pc = {
            errorCode: "UNHANDLED"
        },
        fc = {
            errorCode: "IGNORED"
        },
        mc = "ErrorHandling",
        vc = {
            errorPageMessage: new Ze(Pe.Session, "ErrorPageMessage", ""),
            errorPageExtraMessage: new Ze(Pe.Session, "ErrorPageExtraMessage", ""),
            errorPageExceptionInfo: new Ze(Pe.Session, "ErrorPageExceptionInfo")
        };

    function yc(t) {
        let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        let i = arguments.length > 3 ? arguments[3] : undefined;
        var s, a;
        if (!rr() && (t && (Ac(t) ? Nc(t) : vi(null !== (s = t.category) && void 0 !== s ? s : mc, t.message || "Navigating to Error page", null !== (a = t.errorCode) && void 0 !== a ? a : "OS-CLRT-00000", t, _loggerJs.Visibility.External)), jn(i))) {
            const e = Nr.getVersionedUrl(gc);
            vc.errorPageMessage.set(n), vc.errorPageExtraMessage.set(r), t ? vc.errorPageExceptionInfo.set(ut(t)) : vc.errorPageExceptionInfo.remove(), ir(e);
        }
    }

    function bc(e, t) {
        var n;
        const r = ce();
        yc(e, (null === (n = null == r ? void 0 : r.messages) || void 0 === n ? void 0 : n.incompatibleProducer) || e.message, void 0, t);
    }

    function Tc(e) {
        var t;
        const n = ce();
        yc(void 0, (null === (t = null == n ? void 0 : n.messages) || void 0 === t ? void 0 : t.appOffline) || "This application is temporarily unavailable. Try reloading or contact the administrator.", void 0, e);
    }

    function wc(t, n) {
        pi(mc, "Error thrown by the application: " + t, _loggerJs.Visibility.Client), ht(t) ? Tc(n) : at(t, st.IncompatibleProducerException) ? bc(t, n) : yc(t, void 0, void 0, n);
    }

    function Ec(e, t) {
        return !!at(e, st.IgnorableSystemException) || !!ht(e) && (Tc(t), !0);
    }

    function Ic(e) {
        return e === pc || e === fc;
    }

    function Ac(e) {
        return e && "string" == typeof e.requireType;
    }

    function Nc(t) {
        var n;
        let r = "OS-CLRT-RJS-00000",
            i = _loggerJs.Visibility.Internal;
        if ("timeout" === t.requireType) r = "OS-CLRT-RJS-00005";
        else if ("mismatch" === t.requireType) r = -1 !== t.message.indexOf("anonymous define()") ? "OS-CLRT-RJS-00004" : "OS-CLRT-RJS-00003", i = _loggerJs.Visibility.External;
        else if ("scripterror" === t.requireType) {
            r = /Script error for.*?, needed by:.*/gm.test(t.message) ? "OS-CLRT-RJS-00002" : "OS-CLRT-RJS-00001", i = _loggerJs.Visibility.External;
        }
        vi(mc, null !== (n = t.message) && void 0 !== n ? n : "Error loading script by RequireJS", r, t, i);
    }
    var Sc = _exports.ErrorHandling = Object.freeze({
        __proto__: null,
        ERROR_PAGE_HTML: gc,
        ErrorHandlingStorage: vc,
        IGNORED_ERROR_RESULT: fc,
        UNHANDLED_ERROR_RESULT: pc,
        defaultErrorHandler: function(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (e, t) => wc(e, t);
            let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (e, t) => Ec(e, t);
            return ot(e) && mi(mc, ot(e)), e instanceof st.NotRegisteredException ? (Ur({
                callbackUrl: fe()
            }), pc) : r(e, t) ? fc : (n(e, t), pc);
        },
        handleError: wc,
        ignoreError: Ec,
        isRequireJSError: Ac,
        isSpecialHandleErrorResult: Ic,
        navigateToAppOffline: Tc,
        navigateToErrorPage: yc,
        navigateToIncompatibleProducer: bc,
        reportRequireJSError: Nc
    });
    let Dc,
        Rc,
        Cc = !0;

    function xc(e) {
        Cc = e;
    }

    function Lc(e, t) {
        let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
        let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
        let s = arguments.length > 5 ? arguments[5] : undefined;
        if (!Cc) return;
        const a = () => Dc.showMessage(e, t, n, r, i, s);
        Dc ? a() : Rc = a;
    }

    function Oc() {
        if (!Cc) return;
        Dc ? Dc.closeMessage() : Rc = null;
    }
    var _c,
        Mc,
        Uc,
        Fc,
        $c = _exports.FeedbackMessageService = Object.freeze({
            __proto__: null,
            closeFeedbackMessage: Oc,
            registerFeedbackMessageService: function(e) {
                Dc = e, Rc && (Rc(), Rc = null);
            },
            setEnabled: xc,
            showFeedbackMessage: Lc
        });
    class Pc {
        constructor() {
            _c.set(this, 0);
        }
        create() {
            return w(this, _c, T(this, _c, "f") + 1, "f"), T(this, _c, "f");
        }
        shouldAbort(e) {
            return e !== T(this, _c, "f");
        }
    }

    function Vc(e, t, n) {
        var _this2 = this;
        return function() {
            for (var _len12 = arguments.length, r = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
                r[_key12] = arguments[_key12];
            }
            return b(_this2, void 0, void 0, function*() {
                ! function(e, t, n) {
                    const {
                        responseHandler: r
                    } = n[0];
                    n[0].responseHandler = function() {
                        e.shouldAbort(t) || null == r || r(...arguments);
                    };
                }(e, t, r);
                try {
                    if (e.shouldAbort(t)) return {
                        completed: !1
                    };
                    const i = yield n(...r);
                    return e.shouldAbort(t) ? {
                        completed: !1
                    } : {
                        completed: !0,
                        data: i
                    };
                } catch (n) {
                    if (e.shouldAbort(t)) return {
                        completed: !1
                    };
                    throw n;
                }
            });
        };
    }
    _c = new WeakMap();
    class Bc {
        constructor() {
            Mc.add(this), Uc.set(this, new Map());
        }
        create(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : xo;
            const n = T(this, Mc, "m", Fc).call(this, e),
                r = n.create();
            return {
                ref: r,
                post: Vc(n, r, t)
            };
        }
    }
    Uc = new WeakMap(), Mc = new WeakSet(), Fc = function(e) {
        let t = T(this, Uc, "f").get(e);
        return t || (t = new Pc(), T(this, Uc, "f").set(e, t)), t;
    };
    const kc = "ResourceCache";
    class zc {
        constructor() {
            this.isCaching = !1, this.errorMessages = [], this.onFinishListeners = [], this.onErrorListeners = [], this.onProgressListeners = [];
        }
        onFinish() {
            this.isCaching = !1, this.onFinishListeners.forEach(e => e()), this.onFinishListeners = [], this.onErrorListeners = [], this.onProgressListeners = [];
        }
        onError(e) {
            this.errorMessages.push(e), this.onErrorListeners.forEach(t => t(e));
        }
        onProgress(e, t) {
            this.onProgressListeners.forEach(n => n(e, t));
        }
        listen(e, t, n) {
            this.errorMessages.length > 0 && t && t(this.errorMessages.join("\n")), !this.isCaching && e && e(), this.isCaching && (e && this.onFinishListeners.push(e), t && this.onErrorListeners.push(t), n && this.onProgressListeners.push(n));
        }
        start(e) {
            return new Promise((t, n) => {
                if (!this.isCaching) try {
                    this.isCaching = !0, this.errorMessages = [], this.innerStart(e);
                } catch (e) {
                    return this.onError(e.message), void n(e.message);
                }
                const r = {
                    finished: !1
                };
                this.listen(() => {
                    r.finished || (r.finished = !0, t());
                }, e => {
                    r.finished || (r.finished = !0, n(e));
                }, null);
            });
        }
        switch (e) {
            this.innerSwitch(e);
        }
    }
    class Hc extends zc {
        constructor() {
            super(), this.isNativeReady = !1, this.isCacheAvailable = !1, Nn().then(() => {
                this.isNativeReady = !0, this.isCacheAvailable = "undefined" != typeof OSCache, this.isCacheAvailable ? (OSCache.addEventListener("onfinish", e => this.onFinish()), OSCache.addEventListener("onerror", e => this.onError(e.message)), OSCache.addEventListener("onprogress", e => this.onProgress(e.loaded, e.total))) : console.error(kc, Hc.OSCacheNotFoundMessage);
            }, e => {
                console.error(kc, "OSCache was not initialized because Cordova was not loaded.", e);
            });
        }
        checkOSCacheAndDeferCall(e, t) {
            return this.isNativeReady ? !!this.isCacheAvailable || (e && this.onError(Hc.OSCacheNotFoundMessage), !1) : (Nn().then(t), !1);
        }
        getCacheName() {
            return "Native Cache";
        }
        innerStart(e) {
            if (!this.checkOSCacheAndDeferCall(!0, () => this.innerStart(e))) return;
            const t = fe(),
                n = `/${Y()}/`,
                r = [];
            for (const i of Object.getOwnPropertyNames(e.urlVersions)) r.push(en(Zt(i, n, t), e.urlVersions[i]));
            OSCache.startCaching(e.versionToken, r, e.urlMappings, e.urlMappingsNoCache);
        }
        innerSwitch(e) {
            if (this.checkOSCacheAndDeferCall(!1, () => this.innerSwitch(e))) try {
                OSCache.switchToVersion(e);
            } catch (e) {
                console.error(kc, e);
            }
        }
    }
    Hc.OSCacheNotFoundMessage = "OSCache not found (is a native plugin missing?)";
    class jc extends zc {
        constructor() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : No;
            super(), this.requested = 0, this.resourceQueue = [], this.count = 0, this.total = 0, this.getMethod = e;
        }
        getCacheName() {
            return "Preloader";
        }
        innerStart(e) {
            if (this.isOngoing()) return;
            if (this.count = this.requested = this.total = 0, this.resources = e.urlVersions, !this.resources) return;
            if (this.resourceQueue = Object.getOwnPropertyNames(this.resources), this.total = this.resourceQueue.length, this.resourceQueue.length <= 0) return;
            const t = `/${Y()}/`;
            for (let e = 0; e < jc.DefaultWindowSize; ++e) this.prefetchNext(t, "");
        }
        innerSwitch(e) {}
        isOngoing() {
            return this.requested > 0 || this.resourceQueue.length > 0;
        }
        request(e, t, n) {
            return b(this, void 0, void 0, function*() {
                try {
                    yield this.getMethod({
                        url: e,
                        timeout: jc.DefaultResourceTimeout,
                        responseType: "none"
                    });
                } catch (t) {
                    this.onError && this.onError(`Failed to load resource '${e}'.`);
                }
                this.onProgress && this.onProgress(++this.count, this.total), this.requested--, 0 === this.resourceQueue.length && 0 === this.requested ? this.onFinish && this.onFinish() : this.resourceQueue.length > 0 && this.prefetchNext(t, n);
            });
        }
        prefetchNext(e, t) {
            const n = this.resourceQueue.pop();
            if (!n) throw new Error("No resource to fetch next.");
            const r = en(Zt(n, e, t), this.resources[n]);
            this.request(r, e, t), this.requested++;
        }
    }
    jc.DefaultWindowSize = 2, jc.DefaultResourceTimeout = 2e4;
    class qc extends zc {
        getCacheName() {
            return "Dummy";
        }
        innerStart(e) {
            this.onFinish();
        }
        innerSwitch(e) {}
    }
    let Gc = "undefined" == typeof document ? new qc() : bn() ? new Hc() : new jc();
    var Wc, Kc;
    ! function(e) {
        e[e.TransitionStart = 0] = "TransitionStart", e[e.TransitionEnd = 1] = "TransitionEnd", e[e.NavigationStart = 2] = "NavigationStart";
    }(Wc || (Wc = {})),
    function(e) {
        e[e.Success = 0] = "Success", e[e.Failure = 1] = "Failure";
    }(Kc || (Kc = {}));
    let Jc = 0;
    const Yc = (() => {
        const e = [],
            t = Object.keys(Wc).length / 2;
        for (let n = 0; n < t; n++) e.push({});
        return e;
    })();
    var Xc;
    ! function(e) {
        function t(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            const r = "_" + Jc++;
            return Yc[e][r] = {
                listenOnce: n,
                callback: t
            }, {
                type: e,
                id: r
            };
        }

        function n(e, t) {
            return delete Yc[e][t];
        }
        e.listen = t, e.listenOnce = function(e, n) {
            return t(e, n, !0);
        }, e.unregister = function(e) {
            return e && n(e.type, e.id);
        }, e.dispatch = function(e) {
            let t;
            const r = Yc[e.type];
            for (const i in r) {
                const s = r[i];
                s.listenOnce && n(e.type, i);
                const a = s.callback(e.args);
                void 0 !== a && (t = a);
            }
            return t;
        };
    }(Xc || (Xc = {}));
    var Qc = _exports.EventDispatcher = Object.freeze({
        __proto__: null,
        get EventDispatcher() {
            return Xc;
        },
        get EventType() {
            return Wc;
        },
        get TransitionEndResult() {
            return Kc;
        }
    });

    function Zc(e) {
        return "name" in e && "registerInitializer" in e && "initialize" in e && "initializerCleanup" in e && "testConnection" in e && "close" in e && "executeReadTransaction" in e && "executeTransaction" in e && "executeUpgradeTransaction" in e;
    }
    class ed extends Error {
        constructor(_ref13) {
            let {
                message: e,
                errorCode: t,
                category: n
            } = _ref13;
            super(e), this.errorCode = t, this.category = n;
        }
    }
    const td = "moduleservices",
        nd = `${td}/moduleinfo`,
        rd = `${td}/moduleversioninfo`;
    class id {
        constructor() {
            let {
                getBasePath: e = () => fe(),
                getMethod: t = No,
                prefetchedVersion: n
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.getBasePath = null != e ? e : () => fe(), this.getMethod = t, this.prefetchedVersion = n;
        }
        init() {
            return b(this, void 0, void 0, function*() {
                try {
                    this.prefetchedVersion = yield this.getLatestVersion();
                } catch (e) {
                    pi("ManifestLoader", `Failed to prefetch latest version. ${e}`);
                }
            });
        }
        getVersionTokenParameter(e) {
            return e ? `?${e}` : "";
        }
        getPrefetchedVersion() {
            return this.prefetchedVersion;
        }
        getLatestManifest(e, t) {
            return this.getManifest(e, t);
        }
        getCachedManifest(e) {
            return this.getManifest("cached", e);
        }
        getManifest(e) {
            return b(this, arguments, void 0, function(e) {
                var _this3 = this;
                let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : gn.resolve(pn.UnauthenticatedHttpClient);
                return function*() {
                    var n;
                    const r = `${nd}${_this3.getVersionTokenParameter(e)}`;
                    return null !== (n = yield _this3.getMethod({
                        url: r,
                        timeout: 1e4,
                        baseURL: _this3.getBasePath(),
                        httpClient: t
                    })) && void 0 !== n ? n : {};
                }();
            });
        }
        getLatestVersion() {
            return b(this, arguments, void 0, function() {
                var _this4 = this;
                let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getTime().toString();
                let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : gn.resolve(pn.HttpClient);
                return function*() {
                    var n;
                    const r = `${rd}?${e}`;
                    return null !== (n = yield _this4.getMethod({
                        url: r,
                        timeout: 1e4,
                        baseURL: _this4.getBasePath(),
                        httpClient: t
                    })) && void 0 !== n ? n : {};
                }();
            });
        }
    }

    function sd() {
        return b(this, void 0, void 0, function*() {
            const e = yield function() {
                return b(this, void 0, void 0, function*() {
                    try {
                        return yield Nn(), on(window) ? window.OutSystemsNative.Prebundle : null;
                    } catch (e) {
                        return null;
                    }
                });
            }();
            return e ? new Promise((t, n) => {
                e.getManifest(t, n);
            }) : null;
        });
    }
    const ad = "undefined" != typeof __PERFORMANCE;

    function od(e) {
        ad && __PERFORMANCE.start(e);
    }

    function ld(e) {
        ad && __PERFORMANCE.end(e);
    }
    var ud = _exports.Performance = Object.freeze({
        __proto__: null,
        clear: function() {
            if (ad) return __PERFORMANCE.clear();
        },
        dump: function() {
            if (ad) return __PERFORMANCE.dump();
        },
        end: ld,
        start: od
    });
    const cd = "VersionsManager",
        dd = "__";
    var hd, gd;
    ! function(e) {
        e[e.Generic = 0] = "Generic", e[e.Resources = 1] = "Resources", e[e.DataModel = 2] = "DataModel";
    }(hd || (hd = {})),
    function(e) {
        e[e.Idle = 0] = "Idle", e[e.Upgrading = 1] = "Upgrading", e[e.UpgradeSuccess = 2] = "UpgradeSuccess", e[e.UpgradeFailed = 3] = "UpgradeFailed";
    }(gd || (gd = {}));
    const pd = {
            applicationInfo: new Ze(Pe.Persistent, "ApplicationInfo"),
            upgradeStatus: new Ze(Pe.Session, "UpgradeStatus", 0)
        },
        fd = e => {
            const t = e.lastIndexOf(dd);
            return -1 !== t ? e.substring(0, t) : e.replace(".js", "");
        },
        md = (e, t) => `/${t}/${e}`,
        vd = (e, t, n) => n ? n[md(e, t)] : void 0,
        yd = function(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            const r = ((e, t) => {
                    let n = e.replace(/(.*)(\?[^?]+)$/, "$1").replace(/(.*)(\.[^.]+)$/, "$1");
                    return t && (n = n.replace(/(.*)(__[^_]+)$/, "$1")), n;
                })(e, n),
                i = Qt(r),
                s = Qt((e => {
                    const t = e.indexOf("?"),
                        n = e.substring(0, t >= 0 ? t : void 0);
                    return n.substring(n.lastIndexOf("."));
                })(e)),
                a = Qt(dd),
                o = new RegExp(`${i}${a}.*${s}$`),
                l = t ? Object.keys(t).find(e => o.exec(e)) : void 0;
            return l ? {
                matchedUrlVersion: l,
                relativeUrlWithoutHashAndExtension: r
            } : n ? {} : yd(e, t, !0);
        },
        bd = function(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Y;
            let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : fe;
            const s = r(),
                a = i(),
                o = ((e, t, n) => {
                    const {
                        matchedUrlVersion: r,
                        relativeUrlWithoutHashAndExtension: i
                    } = yd(e, t);
                    if (n && r && i) {
                        const e = r.lastIndexOf(dd);
                        return `${i}${r.substring(e)}`;
                    }
                    return e;
                })(e, t, n),
                l = vd(o, s, t);
            if (l) {
                const e = en(md(o, s), null != l ? l : "");
                return Zt(e, `/${s}/`, a);
            }
            return o;
        };
    class Td {
        constructor() {
            let {
                manifestLoader: e = new id()
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this._isAutoUpgradeEnabled = !0, this.checkedCachedInfoConsistency = !1, this.manifestLoader = e;
        }
        get cachedAppInfo() {
            let e = pd.applicationInfo.get();
            if (e && !this.checkedCachedInfoConsistency) {
                try {
                    Td.validateApplicationInfo(e);
                } catch (t) {
                    e = void 0, pd.applicationInfo.remove();
                }
                this.checkedCachedInfoConsistency = !0;
            }
            return e;
        }
        set cachedAppInfo(e) {
            pd.applicationInfo.set(e);
        }
        get currentAppInfo() {
            var e, t;
            return null !== (t = null === (e = this.fetchedApplicationInfo) || void 0 === e ? void 0 : e.manifest) && void 0 !== t ? t : this.cachedAppInfo;
        }
        get upgradeStatus() {
            return pd.upgradeStatus.get();
        }
        set upgradeStatus(e) {
            pd.upgradeStatus.set(e);
        }
        initializeManifestLoader() {
            return this.manifestLoader.init();
        }
        initialize() {
            return b(this, void 0, void 0, function*() {
                pi(cd, "Initializing VersionsManager"), this.initialUpgradeStatus = this.upgradeStatus;
                if (!Y()) return Promise.reject(Error("Home module not defined!"));
                this.enableBackgroundCheckForNewVersions(), this.fetchedApplicationInfo = yield this.fetchApplicationManifest();
            });
        }
        upgradeVersion(t, n) {
            return b(this, void 0, void 0, function*() {
                this.onVersionReady = n.onVersionReady || (() => {}), this.onUpgradeFinished = n.onUpgradeFinished || (e => {}), this.onNewVersionDetected = !this.isUpgradeDisabled && n.onNewVersionDetected || (e => Promise.resolve());
                const r = n.onAppInfoReady || (e => {}),
                    i = this.fetchedApplicationInfo.manifest,
                    s = this.fetchedApplicationInfo.isFromPrebundle;
                if (r(i), Ce(function(e, t) {
                        let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Y;
                        let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : fe;
                        const i = `/${n()}/`,
                            s = r();
                        return Object.keys(e).filter(e => /\.js$/i.test(e)).reduce((t, n) => {
                            const r = e[n],
                                a = Zt(n, i, s),
                                o = a.split("/"),
                                l = fd(o[o.length - 1]);
                            return t.hasOwnProperty(l) || (t[l] = en(a, r)), t;
                        }, {});
                    }(i.manifest.urlVersions, i.manifest.versionToken)), this.isNewVersion(i.manifest, s)) {
                    if (!this.isUpgradeDisabled && this.usingStaleIndex(i)) return lr(!0), fi(cd, "Reloading application - index.html was changed in the server", _loggerJs.Visibility.Internal), !1;
                    yield this.upgrade(i, t);
                } else this.initDataModel(t);
                return !0;
            });
        }
        initDataModel(e) {
            pi(cd, "Initializing data model"), e.then(e => this.upgradeDataModel(e).then(() => this.switchDataModel(e)).then(() => {
                this.onVersionReady();
            })).then(() => this.setUpgradeStatus(0)).catch(e => this.handleInitError(e));
        }
        cacheResourcesInBackground(e) {
            return pi(cd, "Caching resources in the background..."), this.fetchApplicationManifest(!1).then(_ref14 => {
                let {
                    manifest: t,
                    isFromPrebundle: n
                } = _ref14;
                const r = this.usingStaleIndex(t);
                if (e && e(r), Xn(r), this.isNewVersion(t.manifest, n)) return this.upgradeResources(t);
            }).catch(e => mi(cd, `Error caching resources for new version in the background: ${e}`));
        }
        getResourceVersionToken(e, t) {
            if (this.currentAppInfo) return vd(e, t, this.currentAppInfo.manifest.urlVersions);
        }
        isNewVersion(e, t) {
            const n = e.versionToken,
                r = this.getLastApplicationVersionToken(),
                i = n !== r;
            if (this.canDisableNativeAutoUpgrade) {
                const e = this.isAutoUpgradeEnabled,
                    s = i && (e || t);
                return pi(cd, () => i ? `Version check found a new version '${n}' from ${t ? "prebundle" : "server"} with auto-upgrade ${e ? "enabled" : "disabled"} and decided it is ${s ? "" : "not "}upgradable. Current version has token '${r}'` : `Version check found the same version '${n}'.`), s;
            }
            return i;
        }
        getLastApplicationVersionToken() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            var t;
            if (e && (null === (t = this.fetchedApplicationInfo) || void 0 === t ? void 0 : t.manifest)) return this.fetchedApplicationInfo.manifest.manifest.versionToken;
            const n = this.cachedAppInfo;
            return n ? n.manifest.versionToken : "";
        }
        getVersionToken(e, t) {
            return this.getResourceVersionToken(e, t);
        }
        getVersionedUrl(e) {
            var t, n;
            return bd(e, null === (t = this.currentAppInfo) || void 0 === t ? void 0 : t.manifest.urlVersions, null === (n = this.currentAppInfo) || void 0 === n ? void 0 : n.manifest.cdnUrlVersioning);
        }
        static getJSONParseErrorMessage() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            return "Error parsing manifest JSON " + (e ? `, missing or invalid field: ${e}.` : ".");
        }
        static validateApplicationInfo(e) {
            if (!e) throw Error(this.getJSONParseErrorMessage());
            if (!e.manifest) throw Error(this.getJSONParseErrorMessage("manifest"));
            const t = e.manifest;
            if (!t.versionToken || "string" != typeof t.versionToken) throw Error(this.getJSONParseErrorMessage("manifest.versionToken"));
            if (!t.urlVersions || "object" != typeof t.urlVersions) throw Error(this.getJSONParseErrorMessage("manifest.urlVersions"));
            if (!t.urlMappings || "object" != typeof t.urlMappings) throw Error(this.getJSONParseErrorMessage("manifest.urlMappings"));
            if (!t.urlMappingsNoCache || "object" != typeof t.urlMappingsNoCache) throw Error(this.getJSONParseErrorMessage("manifest.urlMappingsNoCache"));
            if (!e.data) throw Error(this.getJSONParseErrorMessage("data"));
            const n = e.data;
            if (!n.modules || "object" != typeof n.modules) throw Error(this.getJSONParseErrorMessage("data.modules"));
        }
        getLatestVersionFromServer() {
            return b(this, arguments, void 0, function() {
                var _this5 = this;
                let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                return function*() {
                    var t;
                    const n = yield e && _this5.manifestLoader.getPrefetchedVersion() || _this5.manifestLoader.getLatestVersion();
                    return _this5.canDisableNativeAutoUpgrade && (_this5._isAutoUpgradeEnabled = null !== (t = n.isAutoUpgradeEnabled) && void 0 !== t && t), n.versionToken || vi(cd, "Error retrieving version token from module version info.", "OS-CLRT-60301"), n;
                }();
            });
        }
        checkForNewVersion() {
            this.isUpgradeDisabled || this.isUpgradingVersion || !pd.applicationInfo.isDefined() || this.getLatestVersionFromServer(!1).then(e => {
                this.getLastApplicationVersionToken() !== e.versionToken && this.isAutoUpgradeEnabled && this.onNewVersionDetected(!1, this.isAutoUpgradeEnabled);
            }, e => {
                mi(cd, `Error checking for new version: ${e}`);
            });
        }
        upgrade(e, t) {
            return b(this, void 0, void 0, function*() {
                pi(cd, "New application version detected, starting upgrade..."), this.setUpgradeStatus(1);
                const n = this.supportsResourceCache().then(t => t ? this.upgradeResources(e).catch(e => this.handleUpgradeError(e, 1, Promise.resolve(void 0))) : Promise.resolve()),
                    r = t.then(e => this.upgradeDataModel(e)).catch(e => this.handleUpgradeError(e, 2, n));
                yield Promise.all([n, r]).then(() => {
                    1 === this.upgradeStatus && this.commitNewVersion(e, t).then(e => {
                        e && this.onVersionReady();
                    });
                }).catch(e => this.handleUpgradeError(e));
            });
        }
        supportsResourceCache() {
            return b(this, void 0, void 0, function*() {
                var e;
                if (de()) {
                    const t = !!(null === (e = Q()) || void 0 === e ? void 0 : e.splashScreenName);
                    return pi(cd, "Web app - Resource pre-caching is " + (t ? "enabled" : "disabled")), t;
                } {
                    const e = yield this.serviceWorkerIsAvailable(),
                        t = bn() || !e;
                    return pi(cd, "Mobile app - Pre-caching resources with " + (t ? "Resource Cache" : "Service Worker")), t;
                }
            });
        }
        serviceWorkerIsAvailable() {
            return b(this, void 0, void 0, function*() {
                try {
                    if (!("serviceWorker" in navigator)) return !1;
                    return null !== (yield navigator.serviceWorker.getRegistrations());
                } catch (e) {
                    return !1;
                }
            });
        }
        commitNewVersion(e, t) {
            return t.then(e => this.switchDataModel(e)).then(() => this.switchResourcesVersion(e.manifest.versionToken)).then(() => {
                const t = !this.cachedAppInfo;
                return this.cachedAppInfo = e, this.setUpgradeStatus(t ? 0 : 2), !0;
            });
        }
        setManifestLoader(e) {
            this.manifestLoader = e;
        }
        upgradeResources(e) {
            return od("VersionsManager upgradeResources"), Dt(() => Gc.start(e.manifest), () => ld("VersionsManager upgradeResources"));
        }
        upgradeDataModel(e) {
            return od("VersionsManager upgradeDataModel"), Zc(e) ? (pi(cd, `Initializing data model on ${e.engineName} database.`), Dt(() => b(this, void 0, void 0, function*() {
                const t = yield this.getAllEntityModules(),
                    n = gn.resolve(pn.EntityService);
                for (const e of t) n.registerInitializer(e.getEntityInfos());
                yield e.initialize();
            }), () => ld("VersionsManager upgradeDataModel"))) : (pi(cd, "Initializing data model on SQLite/WebSQL database."), Dt(() => this.doForEachClientEntitiesModule(e, (e, t) => t.init(e)), () => ld("VersionsManager upgradeDataModel")));
        }
        getAllEntityModules() {
            const e = [],
                t = W(),
                n = t ? [t] : G();
            if (n)
                for (const t of n) pi(cd, `Fetching entity module '${t}'.`), e.push(new Promise((e, n) => {
                    Re([t], t => e(t), n);
                }));
            return Promise.all(e);
        }
        doForEachClientEntitiesModule(e, t) {
            return e.isMock ? Promise.resolve() : this.getAllEntityModules().then(n => e.executeTransaction(e => e.feed(null).andThenAll(() => n.map(e => n => t(n, e)))));
        }
        switchResourcesVersion(e) {
            Gc.switch(e);
        }
        switchDataModel(e) {
            return Zc(e) ? (pi(cd, "Finishing initialization of data model on IndexedDB database."), e.initializerCleanup()) : (pi(cd, "Finishing initialization of data model on SQLite/WebSQL database."), this.doForEachClientEntitiesModule(e, (e, t) => t.switch(e)));
        }
        handleInitError(t) {
            const n = this.isUpgradeDisabled ? "Upgrade failed and rollback isn't possible at this time" : "Unable to load the data model";
            vi(cd, n, "OS-CLRT-60303", t, _loggerJs.Visibility.External), wc(t);
        }
        handleUpgradeError(t) {
            let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Promise.resolve(void 0);
            return at(t, st.OpenDatabaseException) ? (vi(cd, "Upgrade failed - unable to open the database.", "OS-CLRT-60302", t), wc(t), Promise.resolve(void 0)) : rr() || 3 === this.initialUpgradeStatus ? 3 === this.initialUpgradeStatus ? (wc(t), Promise.resolve(void 0)) : (mi(cd, "Upgrade failed - ignoring error due to concurrent navigation."), 3 !== this.upgradeStatus && this.setUpgradeStatus(0), Promise.resolve(void 0)) : (vi(cd, "Upgrade failed - rolling back to previous application version.", "OS-CLRT-60302", t, _loggerJs.Visibility.External), this.rollBackApplicationVersion(n, r));
        }
        get isUpgradingVersion() {
            return 1 === this.upgradeStatus;
        }
        setUpgradeStatus(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return this.upgradeStatus = e, pi(cd, "Upgrade status changed to: " + e), 2 === e ? this.onUpgradeFinished(!0) : 3 === e ? this.onUpgradeFinished(!1, t) : void 0;
        }
        rollBackApplicationVersion(e, t) {
            return this.loadCachedManifest().then(_ref15 => {
                let {
                    manifest: n
                } = _ref15;
                if (this.setUpgradeStatus(3, e), 1 !== e) return t.then(() => Gc.start(n.manifest));
            }).then(() => {
                or(!1);
            }).catch(e => {
                wc(e);
            });
        }
        get isUpgradeDisabled() {
            return 3 === this.upgradeStatus;
        }
        get isAutoUpgradeEnabled() {
            return this._isAutoUpgradeEnabled;
        }
        get canDisableNativeAutoUpgrade() {
            return gn.resolve(pn.SettingsManager).readBool("CanDisableAutoUpgrade") && bn() && this.isRunningCachedIndex();
        }
        isRunningCachedIndex() {
            const e = OSManifestLoader.indexVersionToken,
                t = this.getIndexVersion(this.cachedAppInfo);
            return !!t && e === t;
        }
        usingStaleIndex(e) {
            if (sr()) return !1;
            return (OSManifestLoader.indexVersionToken || this.getIndexVersion(this.cachedAppInfo)) !== this.getIndexVersion(e);
        }
        getIndexVersion(e) {
            if (!e) return "";
            const t = vd("index.html", Y(), e.manifest.urlVersions);
            return t ? t.substr(1) : "";
        }
        loadCachedManifest() {
            return b(this, void 0, void 0, function*() {
                var e;
                if (this.canDisableNativeAutoUpgrade) {
                    const t = this.innerLoadPrebundledManifest(),
                        n = this.innerLoadCachedManifest();
                    let r = null,
                        i = null,
                        s = null;
                    try {
                        r = yield t;
                    } catch (t) {
                        mi(cd, `Error loading prebundled manifest: ${null !== (e = null == t ? void 0 : t.message) && void 0 !== e ? e : t}`);
                    }
                    try {
                        i = yield n;
                    } catch (e) {
                        s = e;
                    }
                    try {
                        i = yield this.innerLoadCachedManifest();
                    } catch (e) {
                        s = e;
                    }
                    if (!(null == r ? void 0 : r.manifest.versionSequence)) {
                        if (i) return {
                            manifest: i,
                            isFromPrebundle: !1
                        };
                        throw s;
                    }
                    return i && i.manifest.versionSequence >= r.manifest.versionSequence ? {
                        manifest: i,
                        isFromPrebundle: !1
                    } : {
                        manifest: r,
                        isFromPrebundle: !0
                    };
                }
                return {
                    manifest: yield this.innerLoadCachedManifest(),
                    isFromPrebundle: !1
                };
            });
        }
        innerLoadCachedManifest() {
            return b(this, void 0, void 0, function*() {
                if (yield this.ensureCachedManifest(), this.cachedAppInfo) return this.cachedAppInfo; {
                    const e = yield this.manifestLoader.getCachedManifest();
                    return Td.validateApplicationInfo(e), e;
                }
            });
        }
        innerLoadPrebundledManifest() {
            return sd();
        }
        ensureCachedManifest() {
            if (bn() || this.cachedAppInfo) return Promise.resolve(void 0); {
                this.setUpgradeStatus(0);
                const e = new ed({
                    message: "No cached manifest found. It's not possible to rollback to a previous version.",
                    errorCode: "OS-CLRT-60304"
                });
                return Promise.reject(e);
            }
        }
        getLatestManifestFromServer(e) {
            return this.manifestLoader.getLatestManifest(e).then(e => (Td.validateApplicationInfo(e), {
                manifest: e,
                isFromPrebundle: !1
            }));
        }
        fetchApplicationManifest() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
            return od("VersionsManager fetchApplicationManifest"), this.isUpgradeDisabled ? this.loadCachedManifest() : this.getLatestVersionFromServer(e).then(e => this.isNewVersion(e, !1) ? this.getLatestManifestFromServer(e.versionToken) : this.loadCachedManifest()).catch(() => this.loadCachedManifest()).then(e => (ld("VersionsManager fetchApplicationManifest"), e));
        }
        enableBackgroundCheckForNewVersions() {
            let e = !1;
            Xc.listen(Wc.NavigationStart, () => e = !0), Xc.listen(Wc.TransitionEnd, () => {
                e = !1, setTimeout(() => {
                    e || this.checkForNewVersion();
                }, 1e3);
            });
        }
    }
    const wd = new Td();

    function Ed(e, t) {
        fi("Public", `'${e}' is deprecated and will be removed on the next version. Consider using '${t}' instead.`);
    }
    const Id = $u;
    var Ad, Nd;
    ! function(e) {
        e[e.Info = 0] = "Info", e[e.Success = 1] = "Success", e[e.Warning = 2] = "Warning", e[e.Error = 3] = "Error";
    }(Ad || (Ad = {})),
    function(e) {
        e.showFeedbackMessage = function(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
            let r = arguments.length > 3 ? arguments[3] : undefined;
            let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
            let s = arguments.length > 5 ? arguments[5] : undefined;
            return Lc(e, function(e) {
                switch (e) {
                    case Ad.Info:
                        return 0;
                    case Ad.Success:
                        return 1;
                    case Ad.Warning:
                        return 2;
                    case Ad.Error:
                        return 3;
                    default:
                        throw new Error("Don't know how to convert " + e);
                }
            }(t), n, r, i, s);
        }, e.closeFeedbackMessage = function() {
            return Oc();
        };
    }(Nd || (Nd = {}));
    let Sd = class {
        constructor(e) {
            this._model = e;
        }
        setWidgetAsInvalid(e, t) {
            var n;
            const r = null === (n = this._model) || void 0 === n ? void 0 : n.widgets.get(e);
            r.validAttr = !1, r.validationMessageAttr = t;
        }
        setWidgetAsValid(e) {
            var t;
            const n = null === (t = this._model) || void 0 === t ? void 0 : t.widgets.get(e);
            n.validAttr = !0, n.validationMessageAttr = "";
        }
        isWidgetValid(e) {
            var t;
            return !0 === (null === (t = this._model) || void 0 === t ? void 0 : t.widgets.get(e)).validAttr;
        }
    };
    var Dd, Rd, Cd;
    ! function(e) {
        e.whenReady = function() {
            return An();
        };
    }(Dd || (Dd = {})),
    function(e) {
        e.isUpgradingVersion = function() {
            return wd.isUpgradingVersion;
        }, e.listen = function(e) {
            pi("ApplicationLifecycle", "Registering listeners for the application load process."), e && (e.onLoadComplete && $p.waitForAppReady().then(() => {
                var t;
                return null === (t = e.onLoadComplete) || void 0 === t ? void 0 : t.call(e);
            }), e.onUpgradeProgress && Gc.listen(null, null, (t, n) => {
                var r;
                return null === (r = e.onUpgradeProgress) || void 0 === r ? void 0 : r.call(e, t, n);
            }));
        };
    }(Rd || (Rd = {}));
    class xd {
        constructor(e) {
            this._context = e;
        }
        navigateTo(e, t, n) {
            vr(e, this.getTransitionObject(t, O), this._context, !1, n);
        }
        navigateBack(e) {
            yr(this.getTransitionObject(e), this._context, !1);
        }
        navigateForward(e) {
            br(this.getTransitionObject(e), this._context, !1);
        }
        navigatedFromHistory() {
            return (Zd.activeScreen ? Zd.activeScreen.modelContext : {
                viewName: "",
                navigatedFromHistory: !1,
                viewWasRestoredFromCache: !1
            }).navigatedFromHistory;
        }
        registerBackNavigationHandler(e) {
            return ur(e);
        }
        unregisterBackNavigationHandler(e) {
            cr(e);
        }
        registerNavigationHandler(e) {
            return dr(e);
        }
        getTransitionObject(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            return M(e, t);
        }
    }! function(t) {
        t.log = function(t, n) {
            fi(t, n, _loggerJs.Visibility.Client);
        }, t.error = function(t, n, r) {
            vi(t, n, void 0, r, _loggerJs.Visibility.Client);
        };
    }(Cd || (Cd = {}));
    class Ld {
        constructor(e) {
            this._model = e;
        }
        static get ActiveScreenCssClass() {
            return "active-screen";
        }
        getCurrentScreenRootElement() {
            return document.querySelector("." + Ld.ActiveScreenCssClass);
        }
        render() {
            return new Promise(e => {
                requestAnimationFrame(() => {
                    setTimeout(e, 1);
                });
            });
        }
        wasCurrentViewRestoredFromCache() {
            return !!this._model && this._model.context.viewWasRestoredFromCache;
        }
        registerDeviceClassGetter(e) {
            return dn(pn.DeviceHelperClassProvider, () => e);
        }
    }
    class Od {
        static getCurrentContext() {
            const e = th();
            return {
                applicationKey: V() || "",
                applicationName: B() || "",
                screenKey: e ? e.screenKey : "",
                screenName: e ? e.screenName : "",
                isReady: $p.isReady
            };
        }
    }
    class _d {
        static get Instance() {
            return _d;
        }
        static get isUpgradingVersion() {
            return Ed("ApplicationLoad.isUpgradingVersion", "ApplicationLifecycle.isUpgradingVersion()"), Rd.isUpgradingVersion();
        }
        static listen(e) {
            Ed("ApplicationLoad.listen()", "ApplicationLifecycle.listen()"), Rd.listen(e);
        }
    }
    var Md,
        Ud = _exports.Public = Object.freeze({
            __proto__: null,
            ApplicationContext: Od,
            get ApplicationLifecycle() {
                return Rd;
            },
            ApplicationLoad: _d,
            BuiltinFunctions: Id,
            get Device() {
                return Dd;
            },
            get FeedbackMessage() {
                return Nd;
            },
            get FeedbackMessageType() {
                return Ad;
            },
            get Logger() {
                return Cd;
            },
            Navigation: xd,
            Validation: Sd,
            View: Ld
        });
    class Fd {
        constructor(e, t) {
            this._model = e, this._navigationContext = t;
        }
        get BuiltinFunctions() {
            return $u;
        }
        get Validation() {
            return this._validation || (this._validation = new Sd(this._model)), this._validation;
        }
        get FeedbackMessage() {
            return Nd;
        }
        get Device() {
            return Dd;
        }
        get ApplicationLifecycle() {
            return Rd;
        }
        get ApplicationContext() {
            return Od;
        }
        get ApplicationLoad() {
            return _d;
        }
        get Navigation() {
            return this._navigation || (this._navigation = new xd(this._navigationContext)), this._navigation;
        }
        get Logger() {
            return Cd;
        }
        get View() {
            return this._view || (this._view = new Ld(this._model)), this._view;
        }
    }! function(e) {
        e[e.Block = 0] = "Block", e[e.IteratorItem = 1] = "IteratorItem", e[e.None = 2] = "None";
    }(Md || (Md = {}));
    const $d = "-";
    class Pd {
        constructor(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Md.None;
            let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            switch (this._ownerService = e, n) {
                case Md.Block:
                    this._namespace = "b";
                    break;
                case Md.IteratorItem:
                    this._namespace = "l";
                    break;
                default:
                    this._namespace = "";
            }
            if (this._namespace += t, e) {
                const t = r ? r + $d : "";
                this._namespace = e.namespace + this._namespace + $d + t;
            } else this._namespace && (this._namespace = this._namespace + $d);
        }
        getId(e) {
            return e ? this.namespace + e : null;
        }
        static nameFromId(e) {
            return e.substring(e.lastIndexOf($d) + 1);
        }
        get namespace() {
            return this._namespace;
        }
        get ownerService() {
            return this._ownerService;
        }
    }
    var Vd = _exports.WidgetNaming = Object.freeze({
        __proto__: null,
        get NamespaceKind() {
            return Md;
        },
        WidgetIdService: Pd
    });
    class Bd {
        constructor(e, t) {
            this.model = e, this.messagesProvider = t, this.updatingValidations = !1, this.disposed = !1, e.hasValidationWidgets && (this.widgets = {}, this.widgetChildren = {}, this.oldModelWidgets = this.model.widgets, this.model.subscribeWrites(() => {
                this.updatingValidations || this.oldModelWidgets === this.model.widgets || this.recalculateAggregatorsState(""), this.oldModelWidgets = this.model.widgets;
            }, !0));
        }
        getWidgetRecord(e) {
            return this.model.widgets.get(e);
        }
        updateWidgetValidationsProperties(e, t, n) {
            const r = this.updatingValidations;
            this.updatingValidations = !0;
            try {
                if (e.isWebBlockInstance) {
                    e.valid = t;
                } else {
                    const r = this.getWidgetRecord(e.getId());
                    r.validAttr !== t && (r.validAttr = t), void 0 !== n && r.validationMessageAttr !== n && (r.validationMessageAttr = n);
                }
            } finally {
                this.updatingValidations = r;
            }
        }
        validateWidget(e) {
            let t = !0;
            for (const n in this.widgetChildren[e]) !0 !== this.validateWidget(n) && (t = !1);
            const n = this.widgets[e];
            if (n) {
                let e;
                n.isValidationAggregator ? e = new kd(t) : n.validate && (e = n.validate()), e && (this.updateWidgetValidationsProperties(n, e.valid, e.validationMessage), e.valid || (t = !1));
            }
            return t;
        }
        recalculateAggregatorsState(e) {
            let t = !0;
            for (const n in this.widgetChildren[e]) this.recalculateAggregatorsState(n) || (t = !1);
            const n = this.widgets[e];
            if (n) {
                if (n.isWebBlockInstance) return n.valid;
                if (!n.isValidationAggregator) return this.getWidgetRecord(e).validAttr;
                this.updateWidgetValidationsProperties(n, t);
            }
            return t;
        }
        register(e) {
            if (this.model.hasValidationWidgets && e) {
                const t = e.getId();
                if (t) {
                    this.widgets[t] = e;
                    const n = e.validationParentId || "";
                    let r = this.widgetChildren[n];
                    if (r || (r = {}, this.widgetChildren[n] = r), r[t] = 1, !e.isWebBlockInstance) {
                        const n = e,
                            r = this.model.widgets.create(t);
                        r.generationNode = n.generationNode, this.model.widgets.add(r);
                    }
                }
            }
        }
        unregister(e) {
            if (!e || this.disposed || !this.model.hasValidationWidgets) return;
            const t = this.widgets[e],
                n = (t ? t.validationParentId : null) || "";
            delete this.widgets[e], delete this.widgetChildren[n][e], t && this.model.widgets.remove(e);
        }
        isRegistered(e) {
            return !!this.widgets && void 0 !== this.widgets[e];
        }
        validate(e) {
            if (!this.model.hasValidationWidgets) return !0;
            let t = this.validateWidget(e || "");
            return e && (t = this.recalculateAggregatorsState("")), this.model.flush(), t;
        }
        getMandatoryValueMessage() {
            return this.messagesProvider.getMandatoryValueMessage();
        }
        getInvalidValueMessage(e) {
            return this.messagesProvider.getInvalidValueMessage(e);
        }
        getNameById(e) {
            return Pd.nameFromId(e);
        }
        getWidgetChildren() {
            return this.widgetChildren;
        }
        dispose() {
            this.disposed = !0;
        }
    }
    class kd {
        constructor(e, t) {
            this.valid = e, this.validationMessage = t;
        }
        get valid() {
            return this._valid;
        }
        set valid(e) {
            this._valid = null == e || e;
        }
        get validationMessage() {
            return this._validationMessage;
        }
        set validationMessage(e) {
            this._validationMessage = e || "";
        }
    }
    var zd = _exports.Validation = Object.freeze({
        __proto__: null,
        ValidationResult: kd,
        ValidationService: Bd
    });
    const Hd = () => {};
    class jd {
        constructor(e, t) {
            this.controllerClass = e, this.messagesProvider = t;
        }
        create(e, t) {
            return new this.controllerClass(e, this.messagesProvider, t);
        }
        static executeWithNavigationCallbacks(e, t, n) {
            Gn(t);
            return Dt(e, () => {
                t.dispose(n), Kn();
            });
        }
        initialize(e, t, n, r, i, s) {
            return b(this, void 0, void 0, function*() {
                const a = Zd.activeScreen,
                    o = a ? a.callContext() : n.callContext();
                try {
                    kr() && (yield new Promise(e => {
                        new Fd(null, null).ApplicationLifecycle.listen({
                            onLoadComplete: e
                        });
                    }), yield Kr()), this.controllerClass.checkPermissions();
                } catch (e) {
                    const t = {
                        permissionsOk: !1
                    };
                    return jd.executeWithNavigationCallbacks(() => n.handleError(e, o), r, o).then(() => t, e => t);
                }
                const l = t.create(e),
                    u = this.create(l, new Pd(null));
                u.setAsActiveScreen();
                const c = jd.executeWithNavigationCallbacks(() => u.fireInitialize({
                        rootSpan: s
                    }), i, u.callContext()),
                    d = {
                        permissionsOk: !0,
                        controller: u,
                        model: l
                    };
                return c.then(() => d, e => at(e, st.UnhandledOrIgnoredErrorInEventException) && e.handleErrorResult === pc ? {
                    permissionsOk: !0
                } : d);
            });
        }
        get activeScreenController() {
            return Zd.activeScreen;
        }
    }
    class qd {
        constructor() {
            this._iterationContext = new Gd(), this._id = ++qd.currentId;
        }
        get id() {
            return this._id;
        }
        get viewName() {
            return this._viewName;
        }
        get timeout() {
            return this._timeout;
        }
        get iterationContext() {
            return this._iterationContext;
        }
        set iterationContext(e) {
            this._iterationContext = e;
        }
        withViewName(e) {
            return this._viewName !== e ? this.innerClone({
                _viewName: {
                    value: e
                }
            }) : this;
        }
        withTimeout(e) {
            return this._timeout !== e ? this.innerClone({
                _timeout: {
                    value: e
                }
            }) : this;
        }
        clone() {
            const e = this.innerClone();
            return e._id = ++qd.currentId, e;
        }
        innerClone(e) {
            const t = Object.create(this, null != e ? e : {});
            return t.iterationContext = this.iterationContext.clone(), t;
        }
        get isOutOfContext() {
            return !!Zd.activeScreen && this.viewName !== Zd.activeScreen.viewName;
        }
    }
    qd.currentId = 0;
    class Gd {
        getCurrentRowNumber(e) {
            const t = this.getIterator(e);
            return t ? t.currentRowNumber : 0;
        }
        setCurrentRowNumber(e, t) {
            this.getIteratorForSet(e).currentRowNumber = t;
        }
        isBeingIterated(e) {
            const t = this.getIterator(e);
            return !!t && t.isBeingIterated;
        }
        registerIterationStart(e) {
            const t = this.getIteratorForSet(e);
            if (t.isBeingIterated) throw new Error("List is already being iterated in this context");
            t.currentRowNumber = e.length - 1, t.isBeingIterated = !0;
        }
        registerIterationEnd(e) {
            const t = this.getIteratorForSet(e);
            if (!t.isBeingIterated) throw new Error("List was redefined while being iterated");
            t.isBeingIterated = !1;
        }
        getIterator(e) {
            return this.iterators ? this.iterators.get(e.modelId) : null;
        }
        getIteratorForSet(e) {
            this.iterators || (this.iterators = new Map());
            let t = this.getIterator(e);
            return t || (t = {
                currentRowNumber: 0,
                isBeingIterated: !1
            }, this.iterators.set(e.modelId, t)), t;
        }
        clone() {
            const e = new Gd();
            return this.iterators && (e.iterators = function(e, t) {
                const n = new Map();
                return e.forEach((e, r) => {
                    const i = t(e);
                    n.set(r, i);
                }), n;
            }(this.iterators, e => Object.create(e))), e;
        }
    }
    const Wd = new bl(),
        Kd = new El("Data", "dataOut"),
        Jd = new El("List", "listOut", [{
            name: "Count",
            attrName: "countOut",
            mandatory: !0,
            dataType: Po.LongInteger,
            defaultValue: () => bo.defaultValue
        }]),
        Yd = "BaseController";
    class Xd {
        constructor(e) {
            if (this.isExecutingJSNode = !1, this.localeChangeHandler = e => {
                    var t;
                    const n = gn.resolve(pn.TranslationsService),
                        r = gn.resolve(pn.LocaleService);
                    if (n) {
                        (null !== (t = e.localeFamily) && void 0 !== t ? t : [e.localeCode]).forEach(e => {
                            var t, i;
                            this.translationResources[e] ? (pi(Yd, `Adding translations for ${e} locale.`), n.add(null !== (t = this.translationResources[e].translations) && void 0 !== t ? t : {}), r.setCurrentLocaleRTL(null !== (i = this.translationResources[e].isRTL) && void 0 !== i && i)) : pi(Yd, `No translations found for ${e} locale.`);
                        });
                    }
                }, this.translationResources = null != e ? e : this.translationResources, this.translationResources) {
                const e = gn.resolve(pn.LocaleService);
                if (e) {
                    const t = e.getCurrentLocale(),
                        n = e.getCurrentLocaleFamily();
                    this.localeChangeHandler({
                        localeCode: t,
                        localeFamily: n
                    }), pi(Yd, "Subscribing handler for locale service."), e.subscribe(this.localeChangeHandler);
                }
            }
        }
        get publicApiHelper() {
            return this._publicApiHelper || (this._publicApiHelper = this.createPublicApiHelper()), this._publicApiHelper;
        }
        getDefaultTimeout() {
            throw new Error("Controllers must implement getDefaultTimeout");
        }
        createPublicApiHelper() {
            return new Fd(null, this.callContext());
        }
        get default() {
            return this;
        }
        get controller() {
            return this;
        }
        callContext() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new qd();
            return e;
        }
        safeExecuteJSNode(e, t, n, r, i, s, a) {
            let o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !1;
            const l = e => {
                    const r = `Check the JavaScript node '${t}' of the action '${n}'.`;
                    throw ((e = e || new Error(r)) instanceof st.NumberOverflowException || e instanceof st.InvalidJavascriptType) && (e.message = e.message + " " + r), e;
                },
                u = this.isExecutingJSNode,
                c = (r ? [r] : []).concat(s, a, this.publicApiHelper);
            e = e.bind(null, ...c);
            try {
                if (this.isExecutingJSNode = !0, o) return e().then(() => i(r)).catch(l);
                try {
                    return e(), i(r);
                } catch (e) {
                    l(e);
                }
            } finally {
                this.isExecutingJSNode = u;
            }
        }
        safeExecuteAsyncJSNode(e, t, n, r, i, s, a) {
            return this.safeExecuteJSNode(e, t, n, r, i, s, a, !0);
        }
        executeActionInsideJSNode(t, n) {
            let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Hd;
            let i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Hd;
            let s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            const a = e => {
                if (!Ec(e, n)) throw e;
            };
            try {
                if (s) try {
                    this.ensureControllerAlive(s);
                } catch (t) {
                    throw vi("Controller", `Invalid call of action '${s}'`, "OS-CLRT-60801", t, _loggerJs.Visibility.External), t;
                }
                const o = t(n);
                return o instanceof Promise ? o.then(e => (i(), r(e))).catch(e => {
                    i(), a(e);
                }) : r(o);
            } catch (e) {
                a(e);
            } finally {
                this.isExecutingJSNode || i();
            }
        }
        getInitialPayloadObject(e, t) {
            return {
                versionInfo: {
                    moduleVersion: wd.getLastApplicationVersionToken(!0),
                    apiVersion: t
                },
                viewName: e.viewName ? e.viewName : "*"
            };
        }
        getEffectiveTimeoutForServerCall(e) {
            const t = oe();
            return (null != e ? e : 0) || (null != t ? t : 0) || this.getDefaultTimeout();
        }
        callServerAction(e, t, n, r, i, s, a) {
            let o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !1;
            return this.innerCallServerAction(e, t, n, r, i, s, a, o);
        }
        innerCallServerAction(e, t, n, r, i, s, a) {
            let o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !1;
            const l = this.getEffectiveTimeoutForServerCall(i.timeout),
                u = this.getInitialPayloadObject(i, n);
            u.inputParameters = r;
            const c = "The timeout of " + l + "s was reached while executing this server action.";
            return xo({
                url: t,
                payload: u,
                timeout: l,
                timeoutHandler: () => Promise.resolve((() => {
                    throw mi(e, c), new st.Exception(c, e);
                })()),
                responseHandler: Xd.createPostResponseHandler(a),
                headers: s,
                useLocaleInfo: o,
                actionOrAggregateName: e
            }).then(e => e || {}).catch(t => {
                throw t.extraStack = e, t;
            });
        }
        static checkPermissions() {
            throw new Error("Screen Controllers must implement checkPermissions");
        }
        static handlePostResponse(e) {
            const t = gn.resolve(pn.ClientVariablesService);
            t && t.checkSessionExpires();
            const n = gn.resolve(pn.SettingsManager);
            if (n && void 0 !== e.clientSettingsHash && null !== e.clientSettingsHash) {
                n.update(e.clientSettingsHash), wi(n.readLogLevel());
                const t = n.readNumber("LoggerSchedulerTimeInterval");
                t > 0 && Ei(t);
            }
        }
        static createPostResponseHandler(e) {
            return _ref16 => {
                let {
                    data: t,
                    responseHeaders: n
                } = _ref16;
                Xd.handlePostResponse(t), e && e(t, n);
            };
        }
        executeClientAggregate(e, t) {
            return It(() => e()).then(e => {
                const n = t();
                n.listOut = e.list, n.countOut = e.count;
            });
        }
        ensureControllerAlive(e) {}
        static getJSONDeserializeOutputType(e) {
            return Kd.getType(e);
        }
        static getAggregateOutputType(e) {
            return Jd.getType(e);
        }
        static registerVariableGroupType(e, t) {
            Wd.registerTypeDefinition(e, t);
        }
        static getVariableGroupType(e) {
            return Wd.getType(e);
        }
    }
    const Qd = "BaseViewController";
    class Zd extends Xd {
        fireEvent(e) {
            return It(() => {
                if (e) return e.call(this, this.callContext());
            }).then(e => {
                if (Ic(e)) throw st.UnhandledOrIgnoredErrorInEventException.create(e);
            });
        }
        fireEventAndForget(e) {
            this.fireEvent(e).catch(st.UnhandledOrIgnoredErrorInEventException.ignore);
        }
        constructor(e, t, n, r) {
            super(r), this.model = e, this.messagesProvider = t, this._idService = n, this.instanceId = Zd.globalInstanceId++, this.isDisposed = !1, this.shouldSendClientVarsToDataSources = !1, this.fetchReadySources = e => {
                const t = [];
                (void 0 === e ? this.dataFetchActionNames : this.dataFetchDependentsGraph[e]).forEach(n => {
                    e && this.dataFetchDependencies[n]--, 0 === this.dataFetchDependencies[n] && t.push(n);
                }), t.forEach(e => {
                    this.remainingFetchesCount++, this.dataFetchDependencies[e] = -1, this.executeDataFetchAction(e).then(() => this.fetchReadySources(e));
                });
            }, this.clientVariablesHandler = e => {
                this.model.clientVariablesGeneration++, this.model.scheduleFlush();
            }, this.localeDependencyHandler = e => {
                this.model.currentLocale = e.localeCode, this.model.scheduleFlush();
            };
            const i = gn.resolve(pn.LocaleService);
            this.linearRequest = new Bc(), i && this.translationResources && (this.model.currentLocale = i.getCurrentLocale()), this.validationServiceInstance = new Bd(e, t);
        }
        createPublicApiHelper() {
            return new Fd(this.model, this.callContext());
        }
        static get activeScreen() {
            return Zd.activeScreenInstance;
        }
        setAsActiveScreen() {
            Zd.activeScreenInstance = this;
        }
        callContext(e) {
            return super.callContext(e).withViewName(this.viewName);
        }
        get validationService() {
            return this.validationServiceInstance;
        }
        get viewName() {
            var e;
            return null === (e = this.modelContext) || void 0 === e ? void 0 : e.viewName;
        }
        fetchData() {
            let e = !1;
            pi(Qd, "Using Improved data fetching with dependencies"), e = this.innerFetchDataWithDependencies(), e && this.model.flush();
        }
        executeDataFetchAction(e) {
            return pi(Qd, "Fetching " + e), It(() => this[e]()).then(() => {
                this.remainingFetchesCount--, clearTimeout(this.flushTimeoutHandle), pi(Qd, "Fetched " + e), this.remainingFetchesCount > 0 ? this.flushTimeoutHandle = window.setTimeout(() => this.model.flush(), 50) : this.model.flush();
            }, e => {
                this.remainingFetchesCount--, this.model.flush(), this.handleError(e);
            });
        }
        innerFetchDataWithDependencies() {
            return !(!this.dataFetchActionNames || 0 === this.dataFetchActionNames.length) && (this.dataFetchDependencies = Object.assign({}, this.dataFetchDependenciesOriginal), this.flushTimeoutHandle = 0, this.remainingFetchesCount = 0, this.fetchReadySources(), !0);
        }
        get idService() {
            return this._idService;
        }
        fireInitialize() {
            return b(this, arguments, void 0, function() {
                var _this6 = this;
                let {
                    rootSpan: t,
                    startActiveSpan: n = Ii,
                    setAttributeToSpan: r = this.setAttributesToSpan
                } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return function*() {
                    const i = gn.resolve(pn.ClientVariablesService);
                    i && i.subscribe(_this6.clientVariablesHandler);
                    const s = gn.resolve(pn.LocaleService);
                    if (s && s.subscribe(_this6.localeDependencyHandler), !t) return yield _this6.fireEvent(_this6.onInitializeEventHandler), void _this6.fetchData();
                    const a = t.getContext().attributes;
                    yield n(`${t.getSpanInformation().name}__initialize`, e => b(_this6, void 0, void 0, function*() {
                        try {
                            r(e, a), yield this.fireEvent(this.onInitializeEventHandler);
                        } finally {
                            null == e || e.end();
                        }
                        this.fetchData();
                    }), _loggerJs.Visibility.Internal, t);
                }();
            });
        }
        setAttributesToSpan(e, t) {
            var n, r, i;
            e && t && (e.setAttribute("code.function", t["code.function"]), e.setAttribute("outsystems.function.key", null !== (n = t["outsystems.function.key"]) && void 0 !== n ? n : ""), e.setAttribute("outsystems.function.owner.name", null !== (r = t["outsystems.function.owner.name"]) && void 0 !== r ? r : ""), e.setAttribute("outsystems.function.owner.key", null !== (i = t["outsystems.function.owner.key"]) && void 0 !== i ? i : ""), e.setAttribute("outsystems.function.type", t["outsystems.function.type"]), t.screen && e.setAttribute("outsystems.runtime.screen", t["outsystems.runtime.screen"]));
        }
        fireAfterViewReady() {
            this.fireEvent(this.onReadyEventHandler).then(() => this.fireEvent(this.onRenderEventHandler)).catch(st.UnhandledOrIgnoredErrorInEventException.ignore);
        }
        fireAfterInputsChanged() {
            this.fireEventAndForget(this.onParametersChangedEventHandler);
        }
        fireAfterViewRender() {
            let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            if (this.onRenderEventHandler) return this.fireEvent(n => {
                if (!t) return this.onRenderEventHandler(n);
                vi("View", `Render loop avoided. This is likely due to the model of the screen/block '${this.viewName}' being changed inside its 'On Render' client action. Avoid changes to the model inside 'On Render' client actions.`, "OS-CLRT-60800", void 0, _loggerJs.Visibility.External);
            });
        }
        fireAfterViewDestroy() {
            let {
                clientVariablesService: e = gn.resolve(pn.ClientVariablesService),
                localeService: t = gn.resolve(pn.LocaleService)
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            e && e.unsubscribe(this.clientVariablesHandler), t && t.unsubscribe(this.localeDependencyHandler), this.fireEventAndForget(this.onDestroyEventHandler);
        }
        registerClientAction(e, t) {
            this[e] = t;
        }
        innerCallAggregate(e, t, n, r, i, s, a, o, l, u, c, d) {
            let h = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : !1;
            const g = this.getEffectiveTimeoutForServerCall(o);
            return pi(Qd, `Calling ${e} aggregate with start index endpoint`), this.callServerDataSource(e, t, n, s, a, e => {
                e.inputParameters = {
                    StartIndex: i,
                    MaxRecords: r
                };
            }, g, l, u, c, d, h);
        }
        callAggregateWithStartIndexAndClientVars(e, t, n, r, i, s, a, o, l, u, c, d) {
            let h = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : !1;
            return this.innerCallAggregate(e, t, n, r, i, s, a, o, l, u, c, d, h);
        }
        callAggregateWithStartIndex(e, t, n, r, i, s, a, o, l, u, c) {
            return this.innerCallAggregate(e, t, n, r, i, s, a, o, l, u, c);
        }
        callAggregate(e, t, n, r, i, s, a, o, l, u) {
            return this.innerCallAggregate(e, t, n, r, 0, i, s, a, o, l, u);
        }
        callDataAction(e, t, n, r, i, s, a, o, l, u) {
            let c = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : !1;
            return this.innerCallDataAction(e, t, n, r, i, s, a, o, l, u, c);
        }
        innerCallDataAction(e, t, n, r, i, s, a, o, l, u) {
            let c = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : !1;
            const d = this.getEffectiveTimeoutForServerCall(s);
            return this.callServerDataSource(e, t, n, r, i, void 0, d, a, o, l, u, c);
        }
        callServerDataSource(e, t, n, r, i) {
            let s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : void 0;
            let a = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
            let o = arguments.length > 7 ? arguments[7] : undefined;
            let l = arguments.length > 8 ? arguments[8] : undefined;
            let u = arguments.length > 9 ? arguments[9] : undefined;
            let c = arguments.length > 10 ? arguments[10] : undefined;
            let d = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : !1;
            const h = this.getInitialPayloadObject(this.callContext(), n);
            pi(Qd, `Calling ${e} data source with optimized on payload`), h.screenData = {
                variables: Gu.to(this.model.variables, u, !0)
            }, s && s(h), this.shouldSendClientVarsToDataSources && c && (h.clientVariables = c.serialize()), r(0);
            return Tt((n, s) => this.linearRequest.create(e).post({
                url: t,
                payload: h,
                timeout: a,
                timeoutHandler: () => Promise.resolve((() => {
                    const t = `The timeout of ${a}s was reached while fetching this screen data.`;
                    throw mi(e, t), new st.Exception(t);
                })()),
                responseHandler: Xd.createPostResponseHandler(l),
                headers: o,
                useLocaleInfo: d
            }).then(e => this.handleServerDataSourceResponse({
                res: e,
                reject: s,
                resolve: n,
                setDataFromJS: i,
                setDataFetchStatus: r
            })).catch(e => {
                const t = at(e, st.ViewHasChangedException) || at(e, st.AbortedRequestException);
                if (!this.isDisposed) return t || r(2), s(e);
            }));
        }
        handleServerDataSourceResponse(_ref17) {
            let {
                res: e,
                reject: t,
                resolve: n,
                setDataFromJS: r,
                setDataFetchStatus: i
            } = _ref17;
            if (!this.isDisposed) {
                if (e.completed) {
                    return r(e.data), i(1), n();
                }
                return t(new st.AbortedRequestException());
            }
        }
        handleError(e) {
            throw new Error("@abstract");
        }
        safeExecuteAsyncJSNode(e, t, n, r, i, s, a) {
            return this.model.flush(), super.safeExecuteAsyncJSNode(e, t, n, r, i, s, a);
        }
        executeActionInsideJSNode(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Hd;
            let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Hd;
            let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "UNKNOWN";
            return super.executeActionInsideJSNode(e, t, n, () => {
                r(), this.model.flush();
            }, i);
        }
        dispose() {
            this.validationService.dispose(), this.isDisposed = !0;
        }
        ensureControllerAlive(e) {
            if (this.isDisposed) {
                const t = new st.ControllerDisposedException(`Invalid call of the '${e}' client action of the '${this.viewName}' since the latter is not currently active. This is likely due to a platform's client action being used as an event handler or in a setTimeout function. Consider removing this call by using the 'On Destroy' event of the screen/block or moving your logic to a global client action.`);
                throw mi("Controller", t.message), t;
            }
        }
        safeExecuteClientAction(e, t) {
            for (var _len13 = arguments.length, n = new Array(_len13 > 2 ? _len13 - 2 : 0), _key13 = 2; _key13 < _len13; _key13++) {
                n[_key13 - 2] = arguments[_key13];
            }
            return Nt(() => e.apply(this, n.concat(this.callContext(t))), e => this.handleError(e), () => this.model.flush());
        }
        get modelContext() {
            return this.model.context;
        }
        executeScreenClientAggregate(e, t, n) {
            return It(() => (t().dataFetchStatusAttr = 0, e())).then(e => {
                if (!this.isDisposed) return t().bulkSet(e.list, 1, e.count), It(n);
            }, e => {
                if (!this.isDisposed) throw t().dataFetchStatusAttr = 2, e;
            });
        }
        static downloadBinary(e, t) {
            const n = e.toBlob() || new Blob([]),
                r = document.createElement("a");
            r.style.display = "none", document.body.appendChild(r), n.type && (r.type = n.type);
            const i = window.URL.createObjectURL(n);
            r.href = i, r.download = t, r.click(), setTimeout(() => window.URL.revokeObjectURL(i), 500), r.remove();
        }
    }
    Zd.globalInstanceId = 0;
    var eh = _exports.Controller = Object.freeze({
        __proto__: null,
        BaseController: Xd,
        BaseModuleController: class extends Xd {
            constructor() {
                super(...arguments), this.fireApplicationResumeSingletonCallback = this.fireApplicationResume.bind(this);
            }
            registerEventHandler(e, t, n) {
                n(() => new Promise((t, n) => {
                    Re([e], t, n);
                }).then(() => {
                    const e = this[t],
                        r = () => Promise.resolve().then(() => e.call(this));
                    return n(r), r();
                }));
            }
            registerOnApplicationReadyHandler(e, t) {
                this.registerEventHandler(e, t, e => this.onApplicationReadyHandler = e);
            }
            registerOnApplicationResumeHandler(e, t) {
                this.registerEventHandler(e, t, e => this.onApplicationResumeHandler = e);
            }
            fireApplicationReady() {
                return this.onApplicationReadyHandler ? this.onApplicationReadyHandler().then(() => this.setupOnApplicationResumeListener()) : (this.setupOnApplicationResumeListener(), Promise.resolve(void 0));
            }
            setupOnApplicationResumeListener() {
                this.onApplicationResumeHandler && Sn("resume", this.fireApplicationResumeSingletonCallback);
            }
            fireApplicationResume() {
                return this.onApplicationResumeHandler ? this.onApplicationResumeHandler() : Promise.resolve(void 0);
            }
        },
        BaseViewController: Zd,
        CallContext: qd,
        ControllerFactory: jd,
        IterationContext: Gd
    });
    const th = () => {
            const e = Zd.activeScreen;
            if (e) {
                const t = j(X());
                if (t) return Z(t, e.viewName);
            }
            return null;
        },
        nh = () => {
            var e;
            const t = th();
            return null !== (e = null == t ? void 0 : t.screenName.split(".").pop()) && void 0 !== e ? e : "";
        },
        rh = function() {
            for (var _len14 = arguments.length, e = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
                e[_key14] = arguments[_key14];
            }
            return b(void 0, [...e], void 0, function() {
                let {
                    application: e = $p,
                    initType: t = 0,
                    executeRequiredScripts: n
                } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return function*() {
                    if (yield gi({
                            version: wd.getLastApplicationVersionToken(),
                            getCurrentScreenName: nh
                        }), 1 === t) return !0;
                    const r = e.initializeDatabase();
                    let i = !1,
                        s = () => {
                            i = !0;
                        };
                    const a = new Promise(e => {
                            if (i) e();
                            else {
                                const t = s;
                                s = () => {
                                    t(), e();
                                };
                            }
                        }),
                        o = a.then(() => e.triggerApplicationReadyEvent()),
                        l = {
                            onVersionReady: () => {
                                r.then(t => e.onDatabaseReady(t)).then(() => a).then(() => o).then(() => e.onApplicationReady());
                            },
                            onUpgradeFinished: (t, n) => e.onUpgradeFinished(t, n),
                            onNewVersionDetected: (t, n) => e.onNewVersionDetected(t, n),
                            onAppInfoReady: t => e.onAppInfoReady(t)
                        };
                    return yield e.tryUpgrade(r, l, s, n);
                }();
            });
        };
    _exports.runPostInitialization = rh;

    function ih() {
        return b(this, void 0, void 0, function*() {
            try {
                return yield Nn(), on(window) ? window.OutSystemsNative.Http : null;
            } catch (e) {
                return null;
            }
        });
    }

    function sh() {
        return b(this, void 0, void 0, function*() {
            const e = yield ih(),
                t = gn.resolve(pn.SettingsManager);
            return !(null == t ? void 0 : t.readBool("ForceXhrCommunication")) && !!e;
        });
    }

    function ah() {
        var e;
        if (!gn.resolve(pn.SettingsManager).readBool("EnableOpenTelemetryTraces")) return;
        const t = gn.resolve(pn.InstrumentationFactory);
        if (!t) return;
        const n = t.getActiveSpan();
        if (!n) return;
        const r = n.getContext();
        if (!r) return;
        const i = Object.keys(null !== (e = r.attributes) && void 0 !== e ? e : {}).reduce((e, t) => {
            var n;
            return "function" == typeof(null === (n = r.attributes[t]) || void 0 === n ? void 0 : n.toString) && (e[t] = r.attributes[t].toString()), e;
        }, {});
        return {
            spanId: r.spanId,
            traceId: r.traceId,
            attributes: i,
            sampled: r.sampled
        };
    }
    const oh = To + "locale";

    function lh() {
        const e = hn(pn.LocaleService);
        if (e) return e.getCurrentLocale();
    }

    function uh(e) {
        const t = hn(pn.LocaleService);
        t && t.setCurrentLocale(e);
    }
    const ch = {
            isHealthy: !0,
            healthCheckIntervalInSeconds: Number.POSITIVE_INFINITY,
            healthCheckEndpoint: "/moduleservices/ping",
            healingTimeoutDelayInSeconds: 30
        },
        dh = (e, t, n) => {
            const r = t ? new _communicationJs.PathFilter({
                acceptionRules: [t, /^[^/]/],
                rejectionRules: [/^[a-z0-9]+:\/\//i]
            }) : void 0;
            return new _communicationJs.HttpClientWithHealthCheck(e, Object.assign(Object.assign({}, ch), {
                healthCheckNeededPathFilter: r,
                logger: n
            }));
        };
    class hh {
        static getHttpClientLogger() {
            let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Li;
            return {
                setActiveSpanAsNonAggregable: () => t.setActiveSpanAsNonAggregable(),
                debug: _ref18 => {
                    let {
                        category: e,
                        message: n
                    } = _ref18;
                    return t.debug(null != e ? e : "", null != n ? n : "");
                },
                error: _ref19 => {
                    let {
                        category: n,
                        message: r,
                        errorCode: i,
                        error: s
                    } = _ref19;
                    return t.error(null != n ? n : "", null != r ? r : "", null != i ? i : _communicationJs.ErrorCodes.Communication_Default, s, _loggerJs.Visibility.Internal);
                },
                clientError: _ref20 => {
                    let {
                        category: e,
                        clientMessage: n,
                        internalMessage: r,
                        errorCode: i,
                        error: s
                    } = _ref20;
                    return t.clientError({
                        category: null != e ? e : "",
                        clientMessage: null != n ? n : "",
                        internalMessage: null != r ? r : "",
                        errorCode: null != i ? i : _communicationJs.ErrorCodes.Communication_Default,
                        errorObj: s
                    });
                },
                startActiveClientSpan: (n, r) => t.startActiveSpan(n, r, _loggerJs.Visibility.Internal, void 0, _loggerJs.SpanKind.Client)
            };
        }
        static build() {
            return b(this, arguments, void 0, function() {
                let {
                    baseUrl: e,
                    headers: t,
                    localeHeader: n,
                    getLocale: r,
                    setLocale: i,
                    logger: o = this.getHttpClientLogger(),
                    usesNativeHttpPlugin: l = sh,
                    getNativeHttpPluginInstance: u = ih,
                    loadTrace: c = ah,
                    getToken: d,
                    withHealthCheck: p = !1,
                    healthCheckPathScope: f
                } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return function*() {
                    let m;
                    if (!_settingsJs.FeaturesManager.isEnabled(_settingsJs.FeatureKeys.WebHttpClientForNative) && (yield l())) {
                        const s = yield u();
                        if (!s) {
                            const e = new Error("Unable to get native http plugin instance.");
                            throw null == o || o.error({
                                category: "HttpClientFactory",
                                message: e.message,
                                error: e
                            }), e;
                        }
                        m = new _communicationJs.NativeHttpClient({
                            baseUrl: e,
                            headers: t,
                            localeHeader: n,
                            getLocale: r,
                            setLocale: i,
                            logger: o,
                            httpClientInstance: s,
                            loadTrace: c,
                            getToken: d
                        });
                    } else m = new _communicationJs.HttpClient({
                        baseUrl: e,
                        headers: t,
                        localeHeader: n,
                        getLocale: r,
                        setLocale: i,
                        logger: o,
                        loadTrace: c,
                        getToken: d
                    });
                    return p ? dh(m, f, o) : m;
                }();
            });
        }
        static buildWithDebugger(_ref21) {
            let {
                alternateHttpClient: e,
                appUrl: t,
                localeHeader: n,
                getLocale: r,
                setLocale: i,
                logger: s = {
                    setActiveSpanAsNonAggregable: () => Ai(),
                    debug: _ref22 => {
                        let {
                            category: e,
                            message: t
                        } = _ref22;
                        return pi(null != e ? e : "", null != t ? t : "");
                    },
                    error: _ref23 => {
                        let {
                            category: e,
                            message: t,
                            error: n
                        } = _ref23;
                        return vi(null != e ? e : "", null != t ? t : "", "OS-CLRT-00000", n);
                    }
                },
                getToken: a,
                withHealthCheck: o = !1,
                healthCheckPathScope: l
            } = _ref21;
            if (t) {
                const u = new _communicationJs.DebuggerHttpClient({
                    appUrl: t,
                    localeHeader: n,
                    getLocale: r,
                    setLocale: i,
                    logger: s,
                    alternateHttpClientInstance: e,
                    getToken: a
                });
                return o ? dh(u, l, s) : u;
            }
            return e;
        }
        static buildLoggerHttpClient() {
            let {
                baseUrl: e,
                headers: t,
                localeHeader: n,
                getLocale: r,
                setLocale: i,
                loadTrace: s = ah,
                getToken: a
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return new _communicationJs.LoggerHttpClient({
                baseUrl: e,
                headers: t,
                localeHeader: n,
                getLocale: r,
                setLocale: i,
                loadTrace: s,
                getToken: a
            });
        }
        static updateHealthCheckConfig(e) {
            let {
                healthCheckIntervalInSeconds: t
            } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            if (e instanceof _communicationJs.HttpClientWithHealthCheck) {
                const n = void 0 === t || t < 0 ? Number.POSITIVE_INFINITY : t;
                e.setHealthCheckInterval(n);
            }
        }
    }
    const gh = (e, t) => b(void 0, [e, t], void 0, function(e, _ref24) {
        let {
            applicationDefinition: t,
            application: n = $p
        } = _ref24;
        return function*() {
            wr(), t.useESM || function() {
                let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : globalThis;
                try {
                    ! function(e) {
                        const t = e.requirejs,
                            n = e.define;
                        if (!t || "function" != typeof n) return;
                        const r = "OutSystems/ClientRuntime/Main",
                            i = "@outsystems/runtime-core-js";
                        t.defined(r) || (n(r, [i], function(e) {
                            return e;
                        }), t([r]));
                    }(e);
                } catch (e) {
                    console.error("Failed to apply RequireJS fix", e);
                }
            }(), n.setApplicationDefinition(t), yield hi(), yield(e => b(void 0, void 0, void 0, function*() {
                const t = yield hh.build({
                    withHealthCheck: !0,
                    healthCheckPathScope: fe()
                });
                e.register(pn.UnauthenticatedHttpClient, () => t);
                const n = yield hh.build({
                    baseUrl: fe(),
                    getToken: Up,
                    getLocale: () => {
                        var e;
                        return null !== (e = lh()) && void 0 !== e ? e : null;
                    },
                    setLocale: e => uh(e),
                    localeHeader: oh,
                    withHealthCheck: !0,
                    healthCheckPathScope: fe()
                });
                if (e.register(pn.HttpClient, () => n), te() && ne()) {
                    const t = hh.buildWithDebugger({
                        alternateHttpClient: n,
                        appUrl: me(),
                        getToken: Up,
                        getLocale: () => {
                            var e;
                            return null !== (e = lh()) && void 0 !== e ? e : null;
                        },
                        setLocale: e => uh(e),
                        localeHeader: oh,
                        withHealthCheck: !0
                    });
                    e.register(pn.DebuggerHttpClient, () => t), e.register(pn.NonDebuggerHttpClient, () => n);
                    const r = e.resolve(pn.Debugger);
                    (null == r ? void 0 : r.isSessionActive()) && e.register(pn.HttpClient, () => e.resolve(pn.DebuggerHttpClient));
                }
                const r = hh.buildLoggerHttpClient({
                    baseUrl: fe(),
                    getToken: e => Up(e, !1),
                    getLocale: () => {
                        var e;
                        return null !== (e = lh()) && void 0 !== e ? e : null;
                    },
                    setLocale: e => uh(e),
                    localeHeader: oh
                });
                e.register(pn.LoggerHttpClient, () => r);
            }))(e);
        }();
    });
    _exports.runPreInitialization = gh;
    class ph {
        static addKey(e) {
            this.cache[e] = {
                components: {}
            }, this.cacheKeys.push(e);
            const t = this.cacheKeys.length - ph.MaxCacheSize;
            if (t > 0)
                for (let e = 0; e < t; e++) this.removeKey(this.cacheKeys[e]);
        }
        static removeKey(e) {
            delete this.cache[e], this.cacheKeys.splice(this.cacheKeys.indexOf(e), 1);
        }
        static save(e, t, n, r) {
            this.cache[e] || this.addKey(e), this.cache[e].components[t] = {
                state: n,
                customProperties: r
            };
        }
        static load(e, t) {
            const n = ph.loadScreenCache(e);
            return n ? n.components[t] : null;
        }
        static loadScreenCache(e) {
            return this.cache[e] || void 0;
        }
        static clear(e) {
            e ? this.cache[e] && this.removeKey(e) : (this.cache = {}, this.cacheKeys = []);
        }
    }
    ph.MaxCacheSize = 20, ph.cache = {}, ph.cacheKeys = [];
    var fh = _exports.ScreenStateCache = Object.freeze({
        __proto__: null,
        ScreenStateCache: ph
    });
    const mh = "ServiceWorker",
        vh = e => "log" === e.kind,
        yh = e => window.location.origin === e,
        bh = _ref25 => {
            let {
                log: t,
                loggerMethods: n
            } = _ref25;
            if ("error" === t.severity) n.error(mh, t.message, t.errorCode, t.error, _loggerJs.Visibility.External);
            else if ("info" === t.severity) n.info(mh, t.message, _loggerJs.Visibility.External);
            else {
                (0, n[t.severity])(mh, t.message);
            }
        },
        Th = "Argument 'handler' cannot be null or undefined";
    class wh {
        constructor(e, t) {
            this.moduleName = e, this.context = t, this.subscribers = [];
        }
        subscribe(e) {
            if (!e) throw new Error(Th);
            for (let t = 0; t < this.subscribers.length; t++)
                if (this.subscribers[t] === e) return !1;
            return this.subscribers.push(e), pi(this.moduleName, `Subscribing handler for ${this.context}`), !0;
        }
        unsubscribe(e) {
            if (!e) throw new Error(Th);
            for (let t = 0; t < this.subscribers.length; t++)
                if (this.subscribers[t] === e) return this.subscribers.splice(t, 1), pi(this.moduleName, `Unsubscribing handler for ${this.context}`), !0;
            return !1;
        }
        publish(e) {
            for (const t of this.subscribers) t(e);
            pi(this.moduleName, `Notifying subscribers for ${this.context}`);
        }
    }
    const Eh = "true",
        Ih = "false";

    function Ah(e) {
        return `Unsupported data type (${e}) for client variable`;
    }

    function Nh(e, t) {
        if (null == e) throw new TypeError(`Value ${e} is not a valid value for a client variable.`);
        if (! function(e, t) {
                switch (t) {
                    case Po.Integer:
                        return Il.isValidInteger(e);
                    case Po.LongInteger:
                        return Il.isValidLongInteger(e);
                    case Po.Decimal:
                    case Po.Currency:
                        return Il.isValidDecimal(e);
                    case Po.Boolean:
                        return Il.isBoolean(e);
                    case Po.Text:
                    case Po.PhoneNumber:
                    case Po.Email:
                        return Il.isText(e);
                    case Po.Date:
                        return Il.isValidDate(e);
                    case Po.DateTime:
                        return Il.isValidDateTime(e);
                    case Po.Time:
                        return Il.isValidTime(e);
                    default:
                        const n = Ah(Vo(t));
                        throw new TypeError(n);
                }
            }(e, t)) {
            const n = Vo(t);
            throw new TypeError(`Value ${e} is not a valid value for a client variable of the specified type (${n}).`);
        }
        switch (t) {
            case Po.Integer:
            case Po.LongInteger:
            case Po.Decimal:
            case Po.Currency:
                return e.toString();
            case Po.Boolean:
                return e ? Eh : Ih;
            case Po.Text:
            case Po.PhoneNumber:
            case Po.Email:
                return e;
            case Po.Date:
                return e.toISODate();
            case Po.DateTime:
                return e.toString();
            case Po.Time:
                return e.toISOTime();
            default:
                throw new TypeError(Ah(`${t}`));
        }
    }
    const Sh = "Client Variables",
        Dh = "$SESSION_USER_ID";

    function Rh(e) {
        return null == e;
    }
    class Ch {
        constructor(e) {
            this.namespace = e, this.publisher = new wh(Sh, e), this.fullKeyMatcher = new RegExp(`^${Qt(Be)}${Qt(this.namespace)}\\$[^$]*\\$ClientVars\\$`), this.checkSessionExpires(), this.innerSetVariable(Dh, "", Po.Text, Br());
        }
        subscribe(e) {
            return this.publisher.subscribe(e);
        }
        unsubscribe(e) {
            return this.publisher.unsubscribe(e);
        }
        getFullKey(e, t) {
            return `${Be}${this.namespace}$${t}$ClientVars$${e}`;
        }
        getVariable(e, t, n, r) {
            return this.checkSessionExpires(), this.innerGetVariable(e, t, n, r);
        }
        innerGetVariable(e, t, n, r) {
            const i = window.localStorage.getItem(this.getFullKey(e, t));
            return pi(Sh, `Reading Client Variable ${e} of module ${t} for ${this.namespace}`), Rh(i) ? Rh(r) ? Wo(n) : r : function(e, t) {
                switch (t) {
                    case Po.Integer:
                        const t = Number(e);
                        return Il.isValidInteger(t) && Il.isWithinIntegerRange(t) ? t : zo.DEFAULT_INTEGER;
                    case Po.LongInteger:
                        if (!e) return zo.DEFAULT_LONGINTEGER;
                        const n = bo.fromString(e);
                        return Il.isValidLongInteger(n) ? n : zo.DEFAULT_LONGINTEGER;
                    case Po.Decimal:
                        if (!e) return zo.DEFAULT_DECIMAL;
                        const r = new Ma(e);
                        return Il.isValidDecimal(r) && Il.isWithinDecimalRange(r) ? r : zo.DEFAULT_DECIMAL;
                    case Po.Currency:
                        if (!e) return zo.DEFAULT_CURRENCY;
                        const i = new Ma(e);
                        return Il.isValidDecimal(i) && Il.isWithinDecimalRange(i) ? i : zo.DEFAULT_CURRENCY;
                    case Po.Boolean:
                        return e === Eh || e !== Ih && zo.DEFAULT_BOOLEAN;
                    case Po.Text:
                        return Il.isText(e) ? e : zo.DEFAULT_TEXT;
                    case Po.PhoneNumber:
                        return Il.isText(e) ? e : zo.DEFAULT_PHONENUMBER;
                    case Po.Email:
                        return Il.isText(e) ? e : zo.DEFAULT_EMAIL;
                    case Po.Date:
                        const s = ko.fromISODate(e);
                        return Il.isValidDate(s) ? s : zo.DEFAULT_DATE;
                    case Po.DateTime:
                        const a = ko.fromISODateTime(e);
                        return Il.isValidDateTime(a) ? a : zo.DEFAULT_DATETIME;
                    case Po.Time:
                        const o = ko.fromISOTime(e);
                        return Il.isValidTime(o) ? o : zo.DEFAULT_TIME;
                    case Po.Record:
                        throw new TypeError(Ah("Record"));
                    case Po.RecordList:
                        throw new TypeError(Ah("List"));
                    case Po.BinaryData:
                        throw new TypeError(Ah("Binary Data"));
                    case Po.Object:
                        throw new TypeError(Ah("Object"));
                    default:
                        throw new TypeError(Ah(`Unknown: ${e}`));
                }
            }(i, n);
        }
        setVariable(e, t, n, r) {
            this.checkSessionExpires(), this.innerSetVariable(e, t, n, r), this.publisher.publish({
                key: e,
                module: t,
                value: r
            });
        }
        innerSetVariable(e, t, n, r) {
            window.localStorage.setItem(this.getFullKey(e, t), Nh(r, n)), pi(Sh, `Set Client Variable ${e} of module ${t} for ${this.namespace}`);
        }
        removeAllVariables() {
            const e = [];
            for (let t = 0; t < window.localStorage.length; t++) {
                const n = window.localStorage.key(t);
                n && this.fullKeyMatcher.test(n) && e.push(n);
            }
            if (e.length > 0) {
                for (const t of e) window.localStorage.removeItem(t);
                this.publisher.publish();
            }
        }
        checkSessionExpires() {
            const e = this.innerGetVariable(Dh, "", Po.Text);
            Br() !== e && ("" !== e && (pi(Sh, `Removing all Client Variables for user provider ${this.namespace}`), this.removeAllVariables()), this.innerSetVariable(Dh, "", Po.Text, Br()));
        }
    }
    const xh = "BACKUP_",
        Lh = "OSSYS_ENTITY";

    function Oh(e) {
        return e ? e.toUpperCase() : e;
    }

    function _h(e, t) {
        var n;
        return null !== (n = e.attributes.filter(e => (null == e ? void 0 : e.name) === t.name)[0]) && void 0 !== n ? n : null;
    }

    function Mh(e) {
        var t;
        return null !== (t = Uh(e)[0]) && void 0 !== t ? t : null;
    }

    function Uh(e) {
        return e.attributes.filter(e => null == e ? void 0 : e.isPrimaryKey);
    }

    function Fh(e) {
        const t = Uh(e);
        return t.length > 0 ? t.map(e => {
            var t;
            return null !== (t = null == e ? void 0 : e.columnName) && void 0 !== t ? t : null;
        }) : null;
    }

    function $h(e, t) {
        const n = Mh(e);
        return n && t.getAttributes().filter(e => e.name === n.name)[0] || null;
    }

    function Ph(e, t) {
        const n = Mh(e);
        if (!n) return null;
        const r = t.getAttributes().filter(e => e.name === n.name)[0];
        return r ? t[r.attrName] : null;
    }
    var Vh = _exports.TableInfoUtils = Object.freeze({
        __proto__: null,
        BACKUP_TABLE_PREFIX: xh,
        METADATA_TABLE_NAME: Lh,
        formatObjectName: Oh,
        getIdentifierAttribute: $h,
        getIdentifierColumn: Mh,
        getIdentifierColumnNames: Fh,
        getIdentifierColumns: Uh,
        getIdentifierValue: Ph,
        getMatchingColumn: _h,
        hasNullIdentifier: function(e, t) {
            const n = Mh(e);
            if (!n) return !0;
            const r = t.getAttributes().filter(e => e.name === n.name)[0];
            return !r || Go(t[r.attrName], Wo(r.dataType));
        }
    });
    const Bh = {
            tableName: Lh,
            idIsAutoNumber: Mt.No,
            attributes: [{
                name: "Key",
                columnName: "KEY",
                type: Vt.TEXT,
                isPrimaryKey: !0
            }, {
                name: "ModuleKey",
                columnName: "MODULEKEY",
                type: Vt.TEXT,
                isPrimaryKey: !0
            }, {
                name: "UpgradeStatus",
                columnName: "UPGRADESTATUS",
                type: Vt.INTEGER
            }, {
                name: "Name",
                columnName: "NAME",
                type: Vt.TEXT
            }, {
                name: "TableName",
                columnName: "TABLENAME",
                type: Vt.TEXT
            }, {
                name: "Hash",
                columnName: "HASH",
                type: Vt.TEXT
            }, {
                name: "ExtraInfo",
                columnName: "EXTRAINFO",
                type: Vt.TEXT
            }]
        },
        kh = Object.assign(Object.assign({}, Bh), {
            tableName: `${xh}${Lh}`
        }),
        zh = "MetadataTableInitializer",
        Hh = {
            isNeeded: e => b(void 0, void 0, void 0, function*() {
                return !(yield e.existsTable(Bh));
            }),
            run: e => b(void 0, void 0, void 0, function*() {
                pi(zh, "Running initializer for entity meta info table."), yield e.createTable(Bh), yield e.createTable(kh), pi(zh, "Initializer for entity meta info table ran successfully.");
            })
        };
    var jh;
    ! function(e) {
        e[e.Unchanged = 0] = "Unchanged", e[e.Deleted = 1] = "Deleted", e[e.Recreated = 2] = "Recreated", e[e.New = 3] = "New";
    }(jh || (jh = {}));
    var qh = jh;

    function Gh(e, t, n) {
        for (const r of t.getAttributes()) Wh(t[r.attrName], _h(e, r), `${n} '${e.tableName}.${r.name}'`);
    }

    function Wh(e, t, n) {
        if (t.type === Vt.TEXT && void 0 !== t.length) {
            if (!e) return;
            const r = e.length - t.length;
            if (r > 0) throw new st.DataBaseException("", `Unable to ${n} because it exceeds the maximum allowed length by ${r} characters.`);
        } else if (t.type === Vt.DECIMAL && void 0 !== t.length && void 0 !== t.decimals) {
            const r = e.trunc().abs().toString().length - (t.length - t.decimals);
            if (r > 0) throw new st.DataBaseException("", `Unable to ${n} because it exceeds the maximum allowed length by ${r} characters.`);
        }
    }
    const Kh = "EntityModelUtils";

    function Jh(e) {
        return e[0];
    }

    function Yh(e, t) {
        return b(this, void 0, void 0, function*() {
            return yield e.findRecords(Bh, {
                MODULEKEY: t
            });
        });
    }

    function Xh(e, t, n, r) {
        return b(this, void 0, void 0, function*() {
            var i;
            let s;
            pi(Kh, `Checking the status of table ${t.tableName} (${t.name})`);
            let a = {};
            if (n && (s = n.HASH, a = JSON.parse(null !== (i = n.EXTRAINFO) && void 0 !== i ? i : "{}")), s) {
                if (s !== t.hash) return function(e, t) {
                    if (t.idIsAutoNumber !== e.idIsAutoNumber) return !0;
                    const n = function(e, t) {
                        var n, r;
                        const i = {};
                        for (const t of e.attributes) {
                            const e = t.columnName;
                            i[e] = {}, i[e].entityAttr = t;
                        }
                        for (const e of Object.keys(null !== (n = t.attrs) && void 0 !== n ? n : {})) i[e] = i[e] || {}, i[e].metadataAttr = null === (r = t.attrs) || void 0 === r ? void 0 : r[e];
                        return Object.keys(i).map(e => i[e]);
                    }(e, t);
                    return n.some(e => !e.entityAttr || (e.metadataAttr ? function(e, t) {
                        return function(e, t) {
                            return e.type !== t.type || t.length !== e.length || t.decimals !== e.decimals || !!t.isEntityReference != !!e.isEntityReference && !e.isPrimaryKey;
                        }(e, t) || !t.isPrimaryKey != !e.isPrimaryKey;
                    }(e.entityAttr, e.metadataAttr) : e.entityAttr.isPrimaryKey));
                }(t, a) ? (pi(Kh, `Table ${t.tableName} (${t.name}) exists and will be fully upgraded`), lg(e, t, a, r)) : (pi(Kh, `Table ${t.tableName} (${t.name}) exists and will be incrementally upgraded`), function(e, t, n, r) {
                    return b(this, void 0, void 0, function*() {
                        var i;
                        const s = t.attributes.filter(e => {
                            var t;
                            return !Object.keys(null !== (t = n.attrs) && void 0 !== t ? t : {}).some(t => t === e.columnName);
                        });
                        pi(Kh, `Upgrading table ${t.tableName} (${t.name}) with new attributes (${JSON.stringify(s)}) and new hash (${t.hash})`);
                        for (const n of s) {
                            const s = r.serialize(null !== (i = n.default) && void 0 !== i ? i : Vu(n.type), n);
                            yield e.addColumn(t, Object.assign(Object.assign({}, n), {
                                serializedDefault: s
                            }));
                        }
                        yield og(e, t);
                    });
                }(e, t, a, r));
                pi(Kh, `Table ${t.tableName} (${t.name}) exists and is up to date`);
            } else pi(Kh, `Table ${t.tableName} (${t.name}) does not exist and will be created`), yield ag(e, t, r), yield function(e, t) {
                return b(this, void 0, void 0, function*() {
                    const n = hg(t);
                    n.UPGRADESTATUS = qh.New, pi(Kh, `Creating metadata for table ${t.tableName} (${t.name})`), yield e.insertRecord(Bh, n);
                });
            }(e, t);
        });
    }

    function Qh(e, t, n) {
        return b(this, void 0, void 0, function*() {
            return tg(e, e => (pi(Kh, `Recovering table ${e} from backup`), t => function(e, t) {
                return b(this, void 0, void 0, function*() {
                    yield rg(e, t);
                    (yield e.existsTable(sg(t))) && (yield ig(e, sg(t), t, t, qh.Unchanged)), yield dg(e, t, !0);
                });
            }(t, e)), n, e => e.UPGRADESTATUS !== qh.Unchanged);
        });
    }

    function Zh(e, t, n) {
        return b(this, void 0, void 0, function*() {
            return tg(e, e => (pi(Kh, `Dropping inconsistent table ${e} (same key, different physical table name)`), t => function(e, t) {
                return b(this, void 0, void 0, function*() {
                    yield rg(e, t);
                    const n = Jh(yield e.findRecords(Bh, {
                        TABLENAME: t
                    }));
                    n && (yield e.removeRecord(Bh, [n.KEY, n.MODULEKEY]));
                });
            }(t, e)), n, e => {
                const n = e.UPGRADESTATUS === qh.Unchanged,
                    r = t.some(t => t.key === e.KEY),
                    i = !t.some(t => t.tableName === e.TABLENAME),
                    s = 0 === t.length || r && i;
                return n && s;
            });
        });
    }

    function eg(e, t) {
        return tg(e, e => (pi(Kh, `Dropping backup table for ${e}`), t => function(e, t) {
            return b(this, void 0, void 0, function*() {
                yield rg(e, sg(t));
                const n = Jh(yield e.findRecords(Bh, {
                    TABLENAME: t
                }));
                n && (n.UPGRADESTATUS === qh.Deleted ? yield e.removeRecord(Bh, [n.KEY, n.MODULEKEY]): (n.UPGRADESTATUS = qh.Unchanged, yield e.updateRecord(Bh, n)));
                const r = Jh(yield e.findRecords(kh, {
                    TABLENAME: t
                }));
                r && (yield e.removeRecord(kh, [r.KEY, r.MODULEKEY]));
            });
        }(t, e)), t, e => e.UPGRADESTATUS !== qh.Unchanged);
    }

    function tg(e, t, n, r) {
        return b(this, void 0, void 0, function*() {
            const i = yield e.findRecords(Bh, {
                MODULEKEY: n
            });
            let s = [];
            if (r)
                for (const e of i) r(e) && s.push(e);
            else s = i;
            for (const n of s) yield t(n.TABLENAME)(e);
        });
    }

    function ng(e, t, n) {
        return b(this, void 0, void 0, function*() {
            return pi(Kh, `Backing up table '${t}'`), yield dg(e, t, !1), yield rg(e, sg(t)), ig(e, t, sg(t), t, n);
        });
    }

    function rg(e, t) {
        return e.deleteTableIfExists(t);
    }

    function ig(e, t, n, r, i) {
        return b(this, void 0, void 0, function*() {
            return pi(Kh, `Renaming table '${t}' to '${n}' and setting status to ${qh[i]}`), yield function(e, t, n) {
                    return e.renameTable(t, n);
                }(e, t, n),
                function(e, t, n) {
                    return b(this, void 0, void 0, function*() {
                        const r = Jh(yield e.findRecords(Bh, {
                            TABLENAME: t
                        }));
                        return r.UPGRADESTATUS = n, e.updateRecord(Bh, r);
                    });
                }(e, r, i);
        });
    }

    function sg(e) {
        return `${xh}${e}`;
    }

    function ag(e, t, n) {
        return b(this, void 0, void 0, function*() {
            return pi(Kh, `Creating table ${t.tableName} (${t.name})`), e.createTable(Object.assign(Object.assign({}, t), {
                attributes: [...t.attributes.map(e => {
                    var t;
                    return Object.assign(Object.assign({}, e), {
                        serializedDefault: n.serialize(null !== (t = e.default) && void 0 !== t ? t : Vu(e.type), e)
                    });
                })]
            }));
        });
    }

    function og(e, t) {
        return b(this, void 0, void 0, function*() {
            pi(Kh, `Updating metadata for table ${t.tableName} (${t.name})`);
            const n = yield e.getRecord(Bh, [t.key, t.moduleKey]),
                r = hg(t);
            r.UPGRADESTATUS = n.UPGRADESTATUS, r.LASTIDENTIFIER = n.LASTIDENTIFIER, yield e.updateRecord(Bh, r);
        });
    }

    function lg(e, t, n, r) {
        return b(this, void 0, void 0, function*() {
            try {
                const i = yield e.getAllRecords(t);
                yield ng(e, t.tableName, qh.Recreated), yield ag(e, t, r);
                for (const s of i) {
                    const i = ug(s, t, n, r);
                    yield e.insertRecord(t, i);
                }
                yield og(e, t);
            } catch (e) {
                const n = `Unable to upgrade the definition of entity '${t.name}':\n${ot(e)}`;
                throw mi(Kh, n), new st.DataBaseException("", n);
            }
        });
    }

    function ug(e, t, n, r) {
        const i = {};
        for (const s of t.attributes) try {
            const t = s.columnName,
                a = e[t];
            i[t] = cg(a, s, n, r);
        } catch (e) {
            throw new st.DataBaseException("", `Unable to upgrade attribute '${s.name}' data type to '${ku(s.type)}':\n${ot(e)}`);
        }
        return function(e, t, n) {
            var r;
            for (const i of t.attributes) {
                const t = i.columnName;
                if (void 0 === e[t]) {
                    const s = null !== (r = i.default) && void 0 !== r ? r : Vu(i.type);
                    e[t] = n.serialize(s, i);
                }
            }
        }(i, t, r), i;
    }

    function cg(e, t, n, r) {
        var i;
        const s = null === (i = n.attrs) || void 0 === i ? void 0 : i[t.columnName];
        return s ? function(e, t, n, r) {
            if (r.isConversionNeeded(t, n)) {
                const i = r.deserialize(e, t),
                    s = Bu(n.type),
                    a = function(e, t) {
                        const n = Po[Bu(e.type)],
                            r = Po[Bu(t.type)];
                        return `convert column '${t.name}' from type ${n} to ${r}`;
                    }(t, n);
                if (Wu.isConvertibleTo(i, s)) {
                    const e = Wu.convertTo(i, s);
                    Wh(e, n, a);
                    return r.serialize(e, n);
                }
                throw new st.DataBaseException("", `Unable to ${a}.`);
            }
            return e;
        }(e, s, t, r) : e;
    }

    function dg(e, t, n) {
        return b(this, void 0, void 0, function*() {
            const r = n ? kh : Bh,
                i = n ? Bh : kh,
                s = Jh(yield e.findRecords(i, {
                    TABLENAME: t
                }));
            s && (yield e.removeRecord(i, [s.KEY, s.MODULEKEY]));
            const a = Jh(yield e.findRecords(r, {
                TABLENAME: t
            }));
            if (a && (yield e.insertRecord(i, a)), n) {
                const n = Jh(yield e.findRecords(r, {
                    TABLENAME: t
                }));
                n && (yield e.removeRecord(r, [n.KEY, n.MODULEKEY]));
            }
        });
    }

    function hg(e) {
        const t = function(e) {
                const t = {};
                return e.attributes.forEach(e => {
                    t[e.columnName] = {
                        type: e.type,
                        isPrimaryKey: e.isPrimaryKey,
                        length: e.length,
                        decimals: e.decimals,
                        isEntityReference: e.isEntityReference
                    };
                }), {
                    v: 2,
                    idIsAutoNumber: e.idIsAutoNumber,
                    attrs: t
                };
            }(e),
            n = Mh(e),
            r = (null == n ? void 0 : n.type) === Vt.INTEGER ? 0 : "0";
        return {
            KEY: e.key,
            MODULEKEY: e.moduleKey,
            UPGRADESTATUS: qh.Unchanged,
            NAME: e.name,
            TABLENAME: e.tableName,
            HASH: e.hash,
            LASTIDENTIFIER: n && e.idIsAutoNumber !== Mt.No ? r : void 0,
            EXTRAINFO: JSON.stringify(t)
        };
    }
    const gg = "EntityModelInitializer";
    class pg {
        constructor(e, t) {
            this.entityInfos = e, this.serializer = t;
        }
        isNeeded(e) {
            return b(this, void 0, void 0, function*() {
                if (this.hasEntityInfos()) {
                    if (!(yield e.existsTable(Bh))) return !0;
                    const t = Jh(this.entityInfos).moduleKey,
                        n = yield Yh(e, t);
                    for (const e of this.entityInfos) {
                        const t = Jh(n.filter(t => t.KEY === e.key));
                        if (!t || t.HASH !== e.hash || t.UPGRADESTATUS !== qh.Unchanged || t.TABLENAME !== e.tableName) return !0;
                    }
                    for (const e of n)
                        if (!this.entityInfos.some(t => t.key === e.KEY)) return !0;
                }
                return !1;
            });
        }
        run(e) {
            return b(this, void 0, void 0, function*() {
                if (!this.hasEntityInfos()) return;
                const t = Jh(this.entityInfos).moduleKey;
                pi(gg, `Running initializer for entities of module '${t}'.`), yield Qh(e, this.entityInfos, t), this.entityInfos.length > 0 && (yield Zh(e, this.entityInfos, t)), yield function(e, t, n) {
                    return b(this, void 0, void 0, function*() {
                        return tg(e, e => (pi(Kh, `Backing up table ${e} before deletion`), t => ng(t, e, qh.Deleted)), n, e => e.UPGRADESTATUS === qh.Unchanged && !t.some(t => t.tableName === e.TABLENAME));
                    });
                }(e, this.entityInfos, t);
                const n = yield Yh(e, t);
                for (const t of this.entityInfos) {
                    const r = t,
                        i = Jh(n.filter(e => e.KEY === r.key));
                    yield Xh(e, r, i, this.serializer);
                }
                pi(gg, `Initializer for entities of module '${t}' ran successfully.`);
            });
        }
        cleanup(e) {
            return b(this, void 0, void 0, function*() {
                if (!this.hasEntityInfos()) return;
                const t = Jh(this.entityInfos).moduleKey;
                pi(gg, `Running initializer cleanup for entities of module '${t}'.`), yield eg(e, t), pi(gg, `Initializer cleanup for entities of module '${t}' ran successfully.`);
            });
        }
        hasEntityInfos() {
            return this.entityInfos && this.entityInfos.length > 0;
        }
    }
    const fg = new wl("Id", "idOut"),
        mg = new El("Record", "recordOut"),
        vg = "EntityService";
    class yg {
        constructor(e) {
            this._serializer = e;
        }
        get database() {
            return this._database;
        }
        get serializer() {
            return this._serializer;
        }
        setDatabase(e) {
            pi(vg, "Registering initializer for entity meta info table."), this._database = e, this._database.registerInitializer(Hh);
        }
        getDatabase() {
            return this.databasePromise || (this.databasePromise = new Promise(e => {
                this.releaseDatabaseForUse = () => e(this.database);
            })), this.databasePromise;
        }
        registerInitializer(e) {
            if (e && e.length > 0) {
                pi(vg, `Registering initializer for entities of module '${e[0].moduleKey}'.`);
                const t = new pg(e, this.serializer);
                this.database.registerInitializer(t);
            }
        }
        setReady() {
            pi(vg, "Releasing the database as ready for use."), this.databasePromise ? this.releaseDatabaseForUse() : this.databasePromise = Promise.resolve(this.database);
        }
        static wrap(e, t) {
            const n = t.getAttributes()[0],
                r = new t();
            return r[n.attrName] = e, r;
        }
        static unwrap(e) {
            const t = e.getAttributes()[0];
            return e[t.attrName];
        }
        static getWrappedType(e) {
            return e.getAttributes()[0].complexType;
        }
        create(e, t) {
            return b(this, void 0, void 0, function*() {
                const n = yield this.getDatabase(),
                    r = yg.unwrap(t);
                let i;
                Gh(e, r, "create");
                try {
                    i = yield n.executeTransaction(t => this.innerCreate(t, e, r), !0, [Bh, e]);
                } catch (e) {
                    throw new st.DataBaseException("", e.message, e.stack);
                }
                if (null === i) return null;
                const s = $h(e, r),
                    a = new(fg.getType(s.dataType))();
                return a.idOut = i, a;
            });
        }
        innerCreate(e, t, n) {
            return b(this, void 0, void 0, function*() {
                const r = yield e.insertRecord(t, this.serializer.serialize(n, t)),
                    i = Mh(t);
                return i ? this.serializer.deserialize(r, i) : null;
            });
        }
        update(e, t) {
            return b(this, void 0, void 0, function*() {
                const n = yield this.getDatabase(),
                    r = yg.unwrap(t);
                Gh(e, r, "update");
                try {
                    yield n.executeTransaction(t => this.innerUpdate(t, e, r), !0, [Bh, e]);
                } catch (e) {
                    throw new st.DataBaseException("", e.message, e.stack);
                }
            });
        }
        innerUpdate(e, t, n) {
            return b(this, void 0, void 0, function*() {
                return e.updateRecord(t, this.serializer.serialize(n, t));
            });
        }
        createOrUpdate(e, t) {
            return b(this, void 0, void 0, function*() {
                const n = yield this.getDatabase(),
                    r = yg.unwrap(t);
                let i;
                Gh(e, r, "create or update");
                try {
                    i = yield n.executeTransaction(t => this.innerCreateOrUpdate(t, e, r), !0, [Bh, e]);
                } catch (e) {
                    throw new st.DataBaseException("", e.message, e.stack);
                }
                const s = $h(e, r),
                    a = new(fg.getType(s.dataType))();
                return a.idOut = i, a;
            });
        }
        innerCreateOrUpdate(e, t, n) {
            return b(this, void 0, void 0, function*() {
                const r = yield e.upsertRecord(t, this.serializer.serialize(n, t)),
                    i = Mh(t);
                return i ? this.serializer.deserialize(r, i) : null;
            });
        }
        createOrUpdateAll(e, t) {
            return b(this, void 0, void 0, function*() {
                const n = yield this.getDatabase(),
                    r = [];
                for (let n = 0; n < t.length; n++) {
                    const i = t.getItem(n),
                        s = yg.unwrap(i);
                    Gh(e, s, "create or update"), r.push(s);
                }
                try {
                    yield n.executeTransaction(t => b(this, void 0, void 0, function*() {
                        return this.innerCreateOrUpdateAll(t, e, r);
                    }), !0, [Bh, e]);
                } catch (e) {
                    throw new st.DataBaseException("", e.message, e.stack);
                }
            });
        }
        innerCreateOrUpdateAll(e, t, n) {
            return b(this, void 0, void 0, function*() {
                return e.upsertAllRecords(t, n.map(e => this.serializer.serialize(e, t)));
            });
        }
        get(e, t) {
            return b(this, void 0, void 0, function*() {
                const n = yield this.getDatabase();
                let r = null;
                try {
                    r = yield n.executeReadTransaction(n => b(this, void 0, void 0, function*() {
                        return this.innerGet(n, e, t);
                    }), !0, [e]);
                } catch (e) {
                    throw new st.DataBaseException("", e.message, e.stack);
                }
                if (r) {
                    const t = new(mg.getType(e.implicitAnonymousType))();
                    return t.recordOut = yg.wrap(r, e.implicitAnonymousType), t;
                }
                throw new st.DataBaseException("", `${e.tableName} with id ${t} was not found`);
            });
        }
        innerGet(e, t, n) {
            return b(this, void 0, void 0, function*() {
                const r = Mh(t),
                    i = yield e.getRecord(t, this.serializer.serialize(n, r));
                return i ? this.serializer.deserialize(i, t, yg.getWrappedType(t.implicitAnonymousType)) : null;
            });
        }
        delete(e, t) {
            return b(this, void 0, void 0, function*() {
                const n = yield this.getDatabase();
                try {
                    yield n.executeTransaction(n => this.innerDelete(n, e, t), !0, [Bh, e]);
                } catch (e) {
                    throw new st.DataBaseException("", e.message, e.stack);
                }
            });
        }
        innerDelete(e, t, n) {
            return b(this, void 0, void 0, function*() {
                const r = Mh(t);
                return e.removeRecord(t, this.serializer.serialize(n, r));
            });
        }
        deleteAll(e) {
            return b(this, void 0, void 0, function*() {
                const t = yield this.getDatabase();
                try {
                    yield t.executeTransaction(t => this.innerDeleteAll(t, e), !0, [Bh, e]);
                } catch (e) {
                    throw new st.DataBaseException("", e.message, e.stack);
                }
            });
        }
        innerDeleteAll(e, t) {
            return b(this, void 0, void 0, function*() {
                return e.removeAllRecords(t);
            });
        }
    }
    const bg = "1900-01-01 00:00:00",
        Tg = "Serializer";
    class wg {
        static get NULLDATE_IN_DB() {
            return bg;
        }
        static maskValue(e, t) {
            const n = t.length,
                r = e.toString();
            return t.substr(0, Math.max(0, n - r.length)) + r;
        }
        static maskFourZeroes(e) {
            return wg.maskValue(e, "0000");
        }
        static maskTwoZeroes(e) {
            return wg.maskValue(e, "00");
        }
        constructor() {
            this.serializers = new Map(), this.deserializers = new Map(), this.serializers.set(Vt.BINARY_DATA, (e, t) => this.serializeBinaryData(e, t)), this.serializers.set(Vt.BOOLEAN, (e, t) => this.serializeBoolean(e, t)), this.serializers.set(Vt.DATE, (e, t) => this.serializeDate(e, t)), this.serializers.set(Vt.DATE_TIME, (e, t) => this.serializeDateTime(e, t)), this.serializers.set(Vt.DECIMAL, (e, t) => this.serializeDecimal(e, t)), this.serializers.set(Vt.INTEGER, (e, t) => this.serializeInteger(e, t)), this.serializers.set(Vt.LONGINTEGER, (e, t) => this.serializeLongInteger(e, t)), this.serializers.set(Vt.TEXT, (e, t) => this.serializeText(e, t)), this.serializers.set(Vt.TIME, (e, t) => this.serializeTime(e, t)), this.deserializers.set(Vt.BINARY_DATA, (e, t) => this.deserializeBinaryData(e, t)), this.deserializers.set(Vt.BOOLEAN, (e, t) => this.deserializeBoolean(e, t)), this.deserializers.set(Vt.DATE, (e, t) => this.deserializeDate(e, t)), this.deserializers.set(Vt.DATE_TIME, (e, t) => this.deserializeDateTime(e, t)), this.deserializers.set(Vt.DECIMAL, (e, t) => this.deserializeDecimal(e, t)), this.deserializers.set(Vt.INTEGER, (e, t) => this.deserializeInteger(e, t)), this.deserializers.set(Vt.LONGINTEGER, (e, t) => this.deserializeLongInteger(e, t)), this.deserializers.set(Vt.TEXT, (e, t) => this.deserializeText(e, t)), this.deserializers.set(Vt.TIME, (e, t) => this.deserializeTime(e, t));
        }
        serialize(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Mt.No;
            return e instanceof Zo ? this.serializeRecord(e, t) : this.serializeBasicType(e, t, n);
        }
        serializeRecord(e, t) {
            pi(Tg, "Starting to serialize a record");
            const n = {};
            return e.getAttributes().forEach(r => {
                const i = _h(t, r);
                n[i.columnName] = this.serializeBasicType(e[r.attrName], i, i.isPrimaryKey ? t.idIsAutoNumber : Mt.No);
            }), pi(Tg, "Finished serializing a record"), n;
        }
        serializeInteger(e, t) {
            return null != e ? e : 0;
        }
        serializeText(e, t) {
            return null != e ? e : "";
        }
        serializeBoolean(e, t) {
            return e ? 1 : 0;
        }
        serializeLongInteger(e, t) {
            return e ? e.toString() : "0";
        }
        serializeDecimal(e, t) {
            return t.decimals ? e.toFixed(t.decimals) : e.toString();
        }
        serializeDate(e, t) {
            const n = e.toNative();
            return wg.maskFourZeroes(n.getFullYear()) + "-" + wg.maskTwoZeroes(n.getMonth() + 1) + "-" + wg.maskTwoZeroes(n.getDate());
        }
        serializeTime(e, t) {
            const n = e.toNative();
            return wg.maskTwoZeroes(n.getHours()) + ":" + wg.maskTwoZeroes(n.getMinutes()) + ":" + wg.maskTwoZeroes(n.getSeconds());
        }
        serializeDateTime(e, t) {
            if (e.eq(ko.defaultValue)) return bg;
            const n = e.toNative();
            return wg.maskFourZeroes(n.getUTCFullYear()) + "-" + wg.maskTwoZeroes(n.getUTCMonth() + 1) + "-" + wg.maskTwoZeroes(n.getUTCDate()) + " " + wg.maskTwoZeroes(n.getUTCHours()) + ":" + wg.maskTwoZeroes(n.getUTCMinutes()) + ":" + wg.maskTwoZeroes(n.getUTCSeconds());
        }
        innerSerializeBasicType(e, t, n) {}
        serializeBasicType(e, t, n) {
            if (pi(Tg, `Serializing a value of type ${t.type}`), !this.serializers.has(t.type)) throw new st.DataBaseException("", `Unable to serialize ${t.type} to a database value.`);
            const r = this.innerSerializeBasicType(e, t, n);
            if (void 0 !== r) return r;
            return this.serializers.get(t.type)(e, t);
        }
        deserialize(e, t, n) {
            return n ? this.deserializeRecord(e, t, n) : this.deserializeBasicType(e, t);
        }
        deserializeRecord(e, t, n) {
            const r = new n();
            return n.getAttributes().forEach(n => {
                const i = _h(t, n);
                r[n.attrName] = this.deserializeBasicType(e[i.columnName], i);
            }), r;
        }
        deserializeInteger(e, t) {
            return e;
        }
        deserializeLongInteger(e, t) {
            return bo.fromValue(e);
        }
        deserializeDecimal(e, t) {
            return new Ma(e);
        }
        deserializeText(e, t) {
            return e;
        }
        deserializeBoolean(e, t) {
            return 0 !== e;
        }
        deserializeDateTime(e, t) {
            if (e === bg) return ko.defaultValue;
            const n = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/.exec(e),
                r = new Date();
            return r.setUTCFullYear(parseInt(n[1], 10), parseInt(n[2], 10) - 1, parseInt(n[3], 10)), r.setUTCHours(parseInt(n[4], 10) || 0, parseInt(n[5], 10) || 0, parseInt(n[6], 10) || 0, 0), new ko(r);
        }
        deserializeDate(e, t) {
            const n = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e),
                r = new Date();
            return r.setFullYear(parseInt(n[1], 10), parseInt(n[2], 10) - 1, parseInt(n[3], 10)), r.setHours(0, 0, 0, 0), new ko(r);
        }
        deserializeTime(e, t) {
            const n = /^(\d{2}):(\d{2}):(\d{2})$/.exec(e),
                r = new Date();
            return r.setFullYear(1900, 0, 1), r.setHours(parseInt(n[1], 10) || 0, parseInt(n[2], 10) || 0, parseInt(n[3], 10) || 0, 0), new ko(r);
        }
        innerDeserializeBasicType(e, t) {}
        deserializeBasicType(e, t) {
            if (!this.deserializers.has(t.type)) throw new st.DataBaseException("", `Unable to deserialize ${t} to a runtime value.`);
            const n = this.innerDeserializeBasicType(e, t);
            if (void 0 !== n) return n;
            if (null === e) return Vu(t.type);
            return this.deserializers.get(t.type)(e, t);
        }
    }
    class Eg extends wg {
        serializeBinaryData(e, t) {
            return e.toArrayBuffer() || null;
        }
        deserializeBinaryData(e, t) {
            const n = e instanceof ArrayBuffer ? new Blob([e]) : e;
            return new Bo(n);
        }
        isConversionNeeded(e, t) {
            return !!this.isConversionNeededBetweenDBDataTypes(e.type, t.type) || !!e.isEntityReference != !!t.isEntityReference || void 0 !== e.length && void 0 !== t.length && (void 0 !== e.decimals && void 0 !== t.decimals ? e.length - e.decimals > t.length - t.decimals : e.length > t.length);
        }
        isConversionNeededBetweenDBDataTypes(e, t) {
            if (void 0 === e) return !0;
            if (e === t) return !1;
            switch (e) {
                case Vt.BOOLEAN:
                    return t !== Vt.INTEGER;
                case Vt.LONGINTEGER:
                    return t !== Vt.TEXT;
                default:
                    return !0;
            }
        }
    }
    var Ig = _exports.IndexedDBSerializer = Object.freeze({
        __proto__: null,
        default: Eg
    });
    const Ag = "IndexedDBMetadataV2Upgrader";
    class Ng {
        constructor(e, t) {
            this.entityInfos = e, this.serializer = t, this.VERSION = 2;
        }
        isNeeded(e) {
            return b(this, void 0, void 0, function*() {
                var t, n;
                if (this.hasEntityInfos()) {
                    if (!(yield e.existsTable(Bh))) return !1;
                    const r = Jh(this.entityInfos).moduleKey,
                        i = yield Yh(e, r);
                    for (const e of this.entityInfos) {
                        const r = Jh(i.filter(t => t.KEY === e.key));
                        if (r && (null !== (n = JSON.parse(null !== (t = r.EXTRAINFO) && void 0 !== t ? t : "{}").v) && void 0 !== n ? n : 0) < this.VERSION) return !0;
                    }
                }
                return !1;
            });
        }
        run(e) {
            return b(this, void 0, void 0, function*() {
                var t;
                if (!this.hasEntityInfos()) return;
                const n = Jh(this.entityInfos).moduleKey,
                    r = yield Yh(e, n);
                for (const i of this.entityInfos) {
                    pi(Ag, `Running initializer for entities of module '${n}'.`);
                    const s = Jh(r.filter(e => e.KEY === i.key));
                    let a = {},
                        o = !0,
                        l = !0;
                    s && (a = JSON.parse(null !== (t = s.EXTRAINFO) && void 0 !== t ? t : "{}"), o = s.UPGRADESTATUS === qh.Unchanged, l = s.UPGRADESTATUS === qh.Recreated), o ? (pi(this, `Table ${i.tableName} (${i.name}) exists and will be fully upgraded`), yield lg(e, i, a, this.serializer)) : pi(Ag, `Table ${i.tableName} (${i.name}) exists and will be skipped`), (l || o) && i.attributes.some(e => e.isEntityReference) ? (pi(this, `Table ${i.tableName} (${i.name}) exists and have its defaults upgraded`), yield this.upgradeDefaults(e, i, a, this.serializer)) : pi(Ag, `Table ${i.tableName} (${i.name}) wasn't upgraded`);
                }
            });
        }
        cleanup(e) {
            return b(this, void 0, void 0, function*() {
                if (!this.hasEntityInfos()) return;
                const t = Jh(this.entityInfos).moduleKey;
                pi(Ag, `Running initializer cleanup for entities of module '${t}'.`), yield eg(e, t), pi(Ag, `Initializer cleanup for entities of module '${t}' ran successfully.`);
            });
        }
        upgradeDefaults(e, t, n, r) {
            return b(this, void 0, void 0, function*() {
                try {
                    const n = yield e.getAllRecords(t);
                    for (const e of n) this.fillWithDefaultsIfNull(e, t, r);
                    yield e.upsertAllRecords(t, n);
                } catch (e) {
                    const n = `Unable to upgrade the definition of entity '${t.name}':\n${ot(e)}`;
                    throw mi(Ag, n), new st.DataBaseException("", n);
                }
            });
        }
        fillWithDefaultsIfNull(e, t, n) {
            var r;
            for (const i of t.attributes) {
                const t = i.columnName;
                if (i.isEntityReference && null === e[t]) {
                    const s = null !== (r = i.default) && void 0 !== r ? r : Vu(i.type);
                    e[t] = n.serialize(s, i);
                }
            }
        }
        hasEntityInfos() {
            return this.entityInfos && this.entityInfos.length > 0;
        }
    }
    class Sg extends yg {
        constructor() {
            super(new Eg());
        }
        executeAggregate(e, t) {
            return b(this, void 0, void 0, function*() {
                const n = yield this.getDatabase();
                try {
                    return yield n.executeQuery(e, !0, t);
                } catch (e) {
                    throw new st.DataBaseException("", e.message, e.stack);
                }
            });
        }
        innerCreate(e, t, n) {
            return b(this, void 0, void 0, function*() {
                const r = yield this.getMetadataRecord(e, t),
                    i = $h(t, n),
                    s = n.clone();
                if (t.idIsAutoNumber === Mt.YesIfEmpty) {
                    const a = this.getRecordIdAndUpdateLastIdentifier(r, t, n);
                    yield this.updateMetadataTable(e, r), s[i.attrName] = a;
                }
                return yield e.insertRecord(t, this.serializer.serialize(s, t)), i ? s[i.attrName] : null;
            });
        }
        getRecordIdAndUpdateLastIdentifier(e, t, n) {
            const r = Mh(t),
                i = $h(t, n);
            let s = Ph(t, n);
            if (t.idIsAutoNumber === Mt.YesIfEmpty) {
                let t = void 0 !== e.LASTIDENTIFIER ? this.serializer.deserialize(e.LASTIDENTIFIER, r) : Wo(i.dataType);
                Go(s, Wo(i.dataType)) ? (t instanceof bo ? t = t.add(1) : "number" == typeof t && (t += 1), s = t, e.LASTIDENTIFIER = this.serializer.serialize(s, r)) : qo(s, t) > 0 && (e.LASTIDENTIFIER = this.serializer.serialize(s, r));
            }
            return s;
        }
        innerCreateOrUpdate(e, t, n) {
            return b(this, void 0, void 0, function*() {
                const r = n.clone();
                if (t.idIsAutoNumber === Mt.YesIfEmpty) {
                    const i = yield this.getMetadataRecord(e, t),
                        s = this.getRecordIdAndUpdateLastIdentifier(i, t, n);
                    yield this.updateMetadataTable(e, i);
                    r[$h(t, n).attrName] = s;
                }
                const i = yield e.upsertRecord(t, this.serializer.serialize(r, t)),
                    s = Mh(t);
                return s ? this.serializer.deserialize(i, s) : null;
            });
        }
        innerCreateOrUpdateAll(e, t, n) {
            return b(this, void 0, void 0, function*() {
                const r = yield this.getMetadataRecord(e, t);
                let i;
                const s = n.map(e => {
                    i = null != i ? i : $h(t, e);
                    const n = e.clone();
                    if (t.idIsAutoNumber === Mt.YesIfEmpty) {
                        const s = this.getRecordIdAndUpdateLastIdentifier(r, t, e);
                        n[i.attrName] = s;
                    }
                    return this.serializer.serialize(n, t);
                });
                return yield this.updateMetadataTable(e, r), e.upsertAllRecords(t, s);
            });
        }
        registerInitializer(e) {
            if (super.registerInitializer(e), e && e.length > 0) {
                pi("IndexedDBEntityService", `Registering V2 upgrader for entities of module '${e[0].moduleKey}'.`);
                const t = new Ng(e, this.serializer);
                this.database.registerInitializer(t);
            }
        }
        getMetadataRecord(e, t) {
            return b(this, void 0, void 0, function*() {
                const n = yield e.getRecord(Bh, [t.key, t.moduleKey]);
                if (!n) throw new Error(`Unable to fetch record with key ${t.key} and moduleKey ${t.moduleKey} from \n                metadata table ${Bh.tableName}.`);
                return n;
            });
        }
        updateMetadataTable(e, t) {
            return b(this, void 0, void 0, function*() {
                if (void 0 !== t.LASTIDENTIFIER) return e.updateRecord(Bh, t);
            });
        }
    }
    const Dg = {
            tableName: Lh,
            idIsAutoNumber: Mt.No,
            attributes: [{
                name: "SS_Key",
                columnName: "SS_Key",
                type: Vt.TEXT
            }, {
                name: "Module_SS_Key",
                columnName: "Module_SS_Key",
                type: Vt.TEXT
            }, {
                name: "Name",
                columnName: "Name",
                type: Vt.TEXT
            }, {
                name: "Physical_Table_name",
                columnName: "Physical_Table_name",
                type: Vt.TEXT
            }, {
                name: "Hash",
                columnName: "Hash",
                type: Vt.TEXT
            }, {
                name: "Extra_Info",
                columnName: "Extra_Info",
                type: Vt.TEXT
            }, {
                name: "Upgrade_Status",
                columnName: "Upgrade_Status",
                type: Vt.INTEGER
            }]
        },
        Rg = Object.assign(Object.assign({}, Dg), {
            tableName: `${xh}${Lh}`
        });

    function Cg(e, t, n) {
        return b(this, void 0, void 0, function*() {
            const r = (yield e.getAllRecords(t)).map(e => function(e) {
                const t = JSON.parse(e.Extra_Info),
                    n = {
                        v: 2,
                        idIsAutoNumber: t.idIsAutoNumber,
                        attrs: Object.keys(t.attrs).reduce((e, n) => (e[n.toUpperCase()] = t.attrs[n], e), {})
                    };
                return {
                    KEY: e.SS_Key,
                    MODULEKEY: e.Module_SS_Key,
                    UPGRADESTATUS: e.Upgrade_Status,
                    NAME: e.Name,
                    TABLENAME: e.Physical_Table_name,
                    HASH: e.Hash,
                    EXTRAINFO: JSON.stringify(n)
                };
            }(e));
            yield e.deleteTableIfExists(t), yield e.createTable(n), yield e.upsertAllRecords(n, r);
        });
    }
    const xg = {
        isNeeded: e => b(void 0, void 0, void 0, function*() {
            const t = e;
            let n = !1;
            return (yield e.existsTable(Dg)) && (n = yield t.executeQuery(e => {
                var t, n, r, i;
                return n = e, r = Dg.tableName, i = null === (t = Dg.attributes[0]) || void 0 === t ? void 0 : t.columnName, new Promise(e => {
                    n.executeSql(`SELECT "${r}"."${i}" FROM "${r}" LIMIT 1`, void 0, () => {
                        e(!0);
                    }, () => (e(!1), !1));
                });
            })), n;
        }),
        run: e => b(void 0, void 0, void 0, function*() {
            const t = [{
                v0TableInfo: Dg,
                v2TableInfo: Bh
            }, {
                v0TableInfo: Rg,
                v2TableInfo: kh
            }].map(_ref26 => {
                let {
                    v0TableInfo: t,
                    v2TableInfo: n
                } = _ref26;
                return Cg(e, t, n);
            });
            yield Promise.all(t);
        }),
        cleanup: e => b(void 0, void 0, void 0, function*() {
            yield e.deleteTableIfExists(Dg), yield e.deleteTableIfExists(Rg), yield e.renameTable(`${Bh.tableName}_V2`, Bh.tableName), yield e.renameTable(`${kh.tableName}_V2`, kh.tableName);
        })
    };
    class Lg {
        constructor() {
            Lg.lastUpgraderRegistered = this;
        }
        isNeeded(e) {
            return b(this, void 0, void 0, function*() {
                let t = !1;
                return Lg.lastUpgraderRegistered === this && (t = yield xg.isNeeded(e)), t;
            });
        }
        run(e) {
            return b(this, void 0, void 0, function*() {
                const t = [{
                    v2TableInfo: Bh,
                    v0TableInfo: Dg
                }, {
                    v2TableInfo: kh,
                    v0TableInfo: Rg
                }].map(_ref27 => {
                    let {
                        v2TableInfo: t,
                        v0TableInfo: n
                    } = _ref27;
                    return this.migrateToV0(e, t, n);
                });
                yield Promise.all(t);
            });
        }
        migrateToV0(e, t, n) {
            return b(this, void 0, void 0, function*() {
                const r = (yield e.getAllRecords(t)).map(e => function(e) {
                    const t = JSON.parse(e.EXTRAINFO),
                        n = {
                            v: 0,
                            idIsAutoNumber: t.idIsAutoNumber,
                            attrs: Object.keys(t.attrs).reduce((e, n) => (e[n.toLowerCase()] = t.attrs[n], e), {})
                        };
                    return {
                        SS_Key: e.KEY,
                        Module_SS_Key: e.MODULEKEY,
                        Name: e.NAME,
                        Physical_Table_name: e.TABLENAME,
                        Hash: e.HASH,
                        Extra_Info: JSON.stringify(n),
                        Upgrade_Status: e.UPGRADESTATUS
                    };
                }(e));
                yield e.deleteTableIfExists(`${t.tableName}_V2`), yield e.renameTable(t.tableName, `${t.tableName}_V2`), yield e.createTable(n), yield e.upsertAllRecords(n, r);
            });
        }
        cleanup() {
            return b(this, void 0, void 0, function*() {
                Lg.lastUpgraderRegistered = null;
            });
        }
    }
    class Og extends wg {
        constructor() {
            super(...arguments), this.fromMethodCache = new Map(), this.attributeReaderImplementation = (e, t, n, r) => {
                const i = {
                    type: zu(r)
                };
                return this.deserialize(e["o" + t], i);
            }, this.namedAttributeReaderImplementation = (e, t, n, r) => {
                const i = {
                    type: zu(r)
                };
                return this.deserialize(e[n], i);
            }, this.deserializeAggregate = (e, t, n, r) => {
                var i;
                if (this.isGenericRecordType(t)) {
                    const i = e,
                        s = t,
                        a = n;
                    let o = this.fromMethodCache.get(s);
                    if (!o) {
                        const e = s.getAttributes();
                        o = this.makeConverterFunction({
                            attributes: e,
                            fromLocalStorage: this.deserializeAggregate,
                            dataType: t
                        }), this.fromMethodCache.set(s, o);
                    }
                    return o(i, a, this.getAttributeReaderImplementation(t), r);
                }
                if (this.isGenericRecordListType(t)) {
                    const r = new t(),
                        i = e,
                        s = n,
                        a = [];
                    for (let e = 0; e < i.length; e++) a.push(r.newItem(s(null, i.item(e))));
                    return r.pushAll(a), r;
                } {
                    const e = t;
                    throw new Error(`Unable to read data from Local Storage. Unknown type ${null !== (i = null == e ? void 0 : e.name) && void 0 !== i ? i : e}`);
                }
            };
        }
        isGenericRecordType(e) {
            return !!e.isGenericRecordType;
        }
        isGenericRecordListType(e) {
            return !!e.isGenericRecordListType;
        }
        getAttributeReaderImplementation(e) {
            return e.isAnonymousRecord() ? this.namedAttributeReaderImplementation : this.attributeReaderImplementation;
        }
        makeAttributesDeclaration(e, t) {
            t.forEach(t => {
                t.dataType !== Po.RecordList && (e[t.attrName] = null);
            });
        }
        makeDeserializerForEachAttribute(_ref28) {
            let {
                data: e,
                attributes: t,
                dataType: n,
                row: r,
                indexRef: i,
                readerImplementation: s,
                fromLocalStorage: a
            } = _ref28;
            t.forEach((o, l) => {
                o.dataType !== Po.RecordList && (o.dataType === Po.Record && n.isAnonymousRecord() ? e[o.attrName] = a(r, o.complexType, i) : e[o.attrName] = s(r, i.value++, t[l].name, t[l].dataType));
            });
        }
        makeConverterFunction(_ref29) {
            let {
                attributes: e,
                fromLocalStorage: t,
                dataType: n
            } = _ref29;
            return (r, i, s, a) => {
                const o = {};
                return a && a.length > 0 ? (this.makeAttributesDeclaration(o, e), a.forEach(n => {
                    const a = e.filter(function(e) {
                        return e.attrName === n;
                    })[0];
                    a.complexType ? o[n] = t(r, a.complexType, i) : o[n] = s(r, i.value++, a.name, a.dataType);
                })) : this.makeDeserializerForEachAttribute({
                    data: o,
                    attributes: e,
                    dataType: n,
                    row: r,
                    indexRef: i,
                    readerImplementation: s,
                    fromLocalStorage: t
                }), new n.RecordClass(o);
            };
        }
        serializeDateTime(e, t) {
            if (e.eq(ko.defaultValue)) return wg.NULLDATE_IN_DB;
            const n = e.toNative();
            return wg.maskFourZeroes(n.getUTCFullYear()) + "-" + wg.maskTwoZeroes(n.getUTCMonth() + 1) + "-" + wg.maskTwoZeroes(n.getUTCDate()) + " " + wg.maskTwoZeroes(n.getUTCHours()) + ":" + wg.maskTwoZeroes(n.getUTCMinutes()) + ":" + wg.maskTwoZeroes(n.getUTCSeconds());
        }
        serializeBinaryData(e, t) {
            return void 0 === e.content ? null : e.content;
        }
        deserializeDateTime(e, t) {
            if (e === wg.NULLDATE_IN_DB) return ko.defaultValue;
            const n = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/.exec(e),
                r = new Date();
            return r.setUTCFullYear(parseInt(n[1], 10), parseInt(n[2], 10) - 1, parseInt(n[3], 10)), r.setUTCHours(parseInt(n[4], 10) || 0, parseInt(n[5], 10) || 0, parseInt(n[6], 10) || 0, 0), new ko(r);
        }
        deserializeBinaryData(e, t) {
            return new Bo(e);
        }
        isConversionNeeded(e, t) {
            return !!this.isConversionNeededBetweenDBDataTypes(e.type, t.type) || !!e.isEntityReference != !!t.isEntityReference || void 0 !== e.length && void 0 !== t.length && (void 0 !== e.decimals && void 0 !== t.decimals ? e.length - e.decimals > t.length - t.decimals : e.length > t.length);
        }
        isConversionNeededBetweenDBDataTypes(e, t) {
            if (void 0 === e) return !0;
            if (e === t) return !1;
            switch (e) {
                case Vt.BOOLEAN:
                    return t !== Vt.INTEGER && t !== Vt.LONGINTEGER;
                case Vt.INTEGER:
                    return t !== Vt.LONGINTEGER && t !== Vt.TEXT;
                case Vt.LONGINTEGER:
                    return t !== Vt.TEXT;
                default:
                    return !0;
            }
        }
        innerSerializeBasicType(e, t, n) {
            return pi("WebSQLSerializer", `WebSQL serializing a value of type ${t.type}`), t.isPrimaryKey && n === Mt.YesIfEmpty && Go(e, Vu(t.type)) || t.isEntityReference && Go(e, Vu(t.type)) ? null : void 0;
        }
    }
    var _g = _exports.WebSQLSerializer = Object.freeze({
        __proto__: null,
        default: Og
    });
    class Mg extends yg {
        constructor() {
            super(new Og()), this.isMetadataV2UpgraderRegistered = !1;
        }
        registerInitializer(e) {
            this.isMetadataV2UpgraderRegistered || (this.database.registerInitializer(xg), this.isMetadataV2UpgraderRegistered = !0), super.registerInitializer(e), this.database.registerInitializer(new Lg());
        }
        executeAggregate(e) {
            return b(this, void 0, void 0, function*() {
                const t = yield this.getDatabase();
                try {
                    return yield t.executeQuery(e);
                } catch (e) {
                    throw new st.DataBaseException("", e.message, e.stack);
                }
            });
        }
    }
    class Ug {
        constructor() {
            let {
                onNewVersionHandler: e
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.onNewVersionHandler = e;
        }
        setOnNewVersionHandler(e) {
            this.onNewVersionHandler = e;
        }
        onNewVersion(e, t) {
            return b(this, void 0, void 0, function*() {
                this.onNewVersionHandler ? this.onNewVersionHandler(e, t) : mi("LifecycleHandlers", "onNewVersion triggered without handler defined.");
            });
        }
    }
    const Fg = "en-US",
        $g = !1,
        Pg = /^[A-z]{2,3}([_-]([A-z]{4}|[\d]{3}))?([_-]([A-z]{2}|[\d]{3}))?$/;
    class Vg {
        constructor(e) {
            this.currentLocaleStorage = new Ze(Pe.Persistent, "CurrentLocale", void 0, ee), this.publisher = new wh("Locale Service", e);
        }
        subscribe(e) {
            return this.publisher.subscribe(e);
        }
        unsubscribe(e) {
            return this.publisher.unsubscribe(e);
        }
        getCurrentLocale() {
            var e, t;
            return null !== (t = null === (e = this.currentLocaleStorage.get()) || void 0 === e ? void 0 : e.localeCode) && void 0 !== t ? t : Fg;
        }
        setCurrentLocale(e) {
            const t = hn(pn.TranslationsService);
            if (t && t.clear(), !this.isValidLocale(e)) throw new Error(`Value '${e}' isn't a valid locale.`); {
                const t = {
                    localeCode: e,
                    isRTL: $g
                };
                this.currentLocaleStorage.set(t);
            }
            const n = this.getCurrentLocaleFamily();
            this.publisher.publish({
                localeCode: e,
                localeFamily: n
            });
        }
        getCurrentLocaleFamily() {
            var e;
            const t = [],
                n = null !== (e = this.getCurrentLocale()) && void 0 !== e ? e : "";
            return n.indexOf("-") > 0 && t.push(n.split("-")[0]), t.push(n), t;
        }
        isValidLocale(e) {
            return Pg.test(e);
        }
        isCurrentLocaleRTL() {
            var e, t;
            return null !== (t = null === (e = this.currentLocaleStorage.get()) || void 0 === e ? void 0 : e.isRTL) && void 0 !== t ? t : $g;
        }
        setCurrentLocaleRTL(e) {
            var t;
            const n = null !== (t = this.currentLocaleStorage.get()) && void 0 !== t ? t : {
                localeCode: Fg,
                isRTL: $g
            };
            n.isRTL = e, this.currentLocaleStorage.set(n);
        }
    }
    var Bg = _exports.LocaleService = Object.freeze({
        __proto__: null,
        default: Vg
    });
    const kg = "MappingWithDefaultService";
    class zg {
        constructor() {
            this.messages = {};
        }
        getMessage(e, t) {
            pi(kg, `Getting message for key ${e} with default message ${t}`);
            const n = this.messages[e];
            return null != n ? n : t;
        }
        setMessage(e, t) {
            pi(kg, `Setting message for key ${e} with value ${t}`), this.messages[e] = t;
        }
        add(e) {
            if (!e) throw new Error("Messages cannot either null or undefined");
            const t = Object.keys(e);
            pi(kg, `Adding ${t.length} messages`), t.forEach(t => this.setMessage(t, e[t]));
        }
        clear() {
            pi(kg, "Clearing cached messages"), this.messages = {};
        }
    }
    const Hg = "Application",
        jg = function(e) {
            for (var _len15 = arguments.length, t = new Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
                t[_key15 - 1] = arguments[_key15];
            }
            return b(void 0, [e, ...t], void 0, function(e) {
                let {
                    dateTimeFormat: t,
                    numberFormat: n,
                    application: r = $p
                } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return function*() {
                    He(V());
                    const i = Wg();
                    (function() {
                        let {
                            serviceWorker: e = navigator.serviceWorker,
                            loggerMethods: t = {
                                debug: pi,
                                info: fi,
                                warning: mi,
                                error: vi
                            }
                        } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        e ? e.addEventListener("message", e => {
                            yh(e.origin) ? vh(e.data) && bh({
                                log: e.data,
                                loggerMethods: t
                            }) : pi(mh, "The received message is not from a secure Service Worker and will be ignored");
                        }) : mi(mh, "Service Worker API is not available");
                    })(), pi(Hg, "Initializing Application"), e.register(pn.LifecycleEventsManager, () => new Ug({
                        onNewVersionHandler: (e, t) => r.onNewVersionDetected(e, t)
                    })), De(e => {
                        if (wd.isUpgradingVersion && !dt(e)) return mi(Hg, "RequireJS error during upgrade, treating as an upgrade error."), void wd.handleUpgradeError(e, 1);
                        wc(e);
                    }), ph.clear(), _(ue()), qg(t, n), yield i, e.register(pn.ClientVariablesService, () => new Ch(ee())), Kg(e), e.register(pn.TranslationsService, () => new zg()), e.register(pn.LocaleService, () => new Vg(Y())), Gg();
                }();
            });
        },
        qg = (e, t) => {
            e && (zo.FORMAT.dateTimeFormat = e), t && (zo.FORMAT.numberFormat = t);
        },
        Gg = () => {
            const e = Kt();
            e && (Object.defineProperty(e, "OutSystemsApp", {
                value: {
                    get public() {
                        var e;
                        return new Fd(null, null === (e = Zd.activeScreen) || void 0 === e ? void 0 : e.callContext());
                    }
                },
                configurable: !0
            }), e.dispatchEvent(new Event("ospublicapiready")));
        },
        Wg = () => b(void 0, void 0, void 0, function*() {
            (yield sh()) && (yield ih());
        }),
        Kg = e => {
            bn() ? e.register(pn.EntityService, () => new Mg()) : e.register(pn.EntityService, () => new Sg());
        },
        Jg = "/moduleservices/auth/configs",
        Yg = "AuthConfigsManager",
        Xg = "os-runtime-authconfigs";
    _exports.useBaseApplication = jg;
    class Qg {
        constructor() {
            let {
                httpClient: e = gn.resolve(pn.UnauthenticatedHttpClient),
                initialConfigs: t,
                getBasePath: n = () => fe(),
                cacheName: r = "os-builtin-authconfigs",
                cacheStorage: i = localStorage
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var s;
            this.isOnlineListenerRegistered = !1, this.httpClient = e, this.getBasePath = n, this.cacheStorage = i, ((e, t, n) => {
                const r = e.getItem(t);
                r && (e.setItem(n, r), e.removeItem(t));
            })(this.cacheStorage, r, Xg), this.cacheName = Xg, this.authConfigs = null !== (s = null != t ? t : this.fetchCachedConfigs()) && void 0 !== s ? s : [];
        }
        cacheConfigs(e) {
            this.cacheStorage.setItem(this.cacheName, JSON.stringify(e));
        }
        fetchCachedConfigs() {
            try {
                const e = this.cacheStorage.getItem(this.cacheName);
                if (e) return JSON.parse(e);
                mi(Yg, "No auth configs stored in cache");
            } catch (e) {
                vi(Yg, "Error retrieving auth configs from cache", "OS-CLRT-40100", e);
            }
        }
        update() {
            return b(this, arguments, void 0, function() {
                var _this7 = this;
                let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ni;
                let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : gn.resolve(pn.Auth);
                return function*() {
                    var n;
                    try {
                        const e = yield _this7.httpClient.get({
                                url: Jg,
                                baseURL: _this7.getBasePath()
                            }),
                            r = null == e ? void 0 : e.authConfigurations;
                        if (!Array.isArray(r)) throw new Error("Did not receive an array of configurations");
                        if (_this7.authConfigs = r, _this7.cacheConfigs(_this7.authConfigs), !(null === (n = t.getInstance()) || void 0 === n ? void 0 : n.isAuthenticated())) {
                            const [e] = _this7.readAuthConfigs(ii);
                            e && t.updateConfig(e.configs);
                        }
                    } catch (t) {
                        vi(Yg, "Error while fetching auth configs", "OS-CLRT-40100", t), _this7.isOnlineListenerRegistered || (e(() => b(_this7, void 0, void 0, function*() {
                            return this.update();
                        })), _this7.isOnlineListenerRegistered = !0);
                    }
                }();
            });
        }
        readAuthConfigs(t) {
            let {
                suppressExternalWarnings: n = !1
            } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            try {
                t !== ii || this.authConfigs.find(e => e.type === ii) || (mi(Yg, `${ii} not available, fallback to cognito`), t = "cognito");
                const r = t ? this.authConfigs.filter(e => e.type === t) : this.authConfigs;
                if (r.length < 1) {
                    return mi(Jg, `No identity provider configurations found${t ? ` for type "${t}"` : ""}.`, n ? _loggerJs.Visibility.Internal : _loggerJs.Visibility.External), [];
                }
                return r.map(e => {
                    var t, n, r, i, s, a, o, l, u, c, d, h, g;
                    return {
                        key: e.key,
                        type: e.type,
                        kc_hint: null !== (t = e.kc_hint) && void 0 !== t ? t : "cognito",
                        configs: {
                            identityProvider: null !== (n = e.kc_hint) && void 0 !== n ? n : e.type,
                            scope: "openid",
                            clientId: null !== (r = e.configs.amplifyClientId) && void 0 !== r ? r : e.configs.clientId,
                            poolId: e.configs.poolId,
                            region: e.configs.region,
                            tenantId: e.configs.tenantId,
                            passwordComplexityPolicy: {
                                minimumLength: null !== (s = null === (i = e.configs.passwordPolicy) || void 0 === i ? void 0 : i.minimumLength) && void 0 !== s ? s : 12,
                                lowerCaseLetterRequired: null === (o = null === (a = e.configs.passwordPolicy) || void 0 === a ? void 0 : a.requireLowercase) || void 0 === o || o,
                                upperCaseLetterRequired: null === (u = null === (l = e.configs.passwordPolicy) || void 0 === l ? void 0 : l.requireUppercase) || void 0 === u || u,
                                numberRequired: null === (d = null === (c = e.configs.passwordPolicy) || void 0 === c ? void 0 : c.requireNumbers) || void 0 === d || d,
                                specialCharacterRequired: null === (g = null === (h = e.configs.passwordPolicy) || void 0 === h ? void 0 : h.requireSymbols) || void 0 === g || g
                            }
                        }
                    };
                });
            } catch (e) {
                return mi(Yg, "Couldn't read auth configurations"), [];
            }
        }
    }
    const Zg = {
            info: _ref30 => {
                let {
                    category: t,
                    message: n
                } = _ref30;
                fi(null != t ? t : "", null != n ? n : "", _loggerJs.Visibility.Internal);
            },
            error: _ref31 => {
                let {
                    category: e,
                    message: t,
                    error: n,
                    code: r,
                    visibility: i
                } = _ref31;
                var s;
                vi(null != e ? e : "", null != t ? t : "", null !== (s = r) && void 0 !== s ? s : "OS-CLRT-40100", n, i);
            },
            warning: _ref32 => {
                let {
                    category: e,
                    message: t
                } = _ref32;
                mi(null != e ? e : "", null != t ? t : "");
            },
            debug: _ref33 => {
                let {
                    category: e,
                    message: t
                } = _ref33;
                pi(null != e ? e : "", null != t ? t : "");
            }
        },
        ep = e => b(void 0, void 0, void 0, function*() {
            e.register(pn.AuthConfigsManager, () => new Qg());
            const t = e.resolve(pn.AuthConfigsManager),
                [n] = t.readAuthConfigs(ii, {
                    suppressExternalWarnings: !0
                });
            e.register(pn.Auth, () => {
                var t;
                return new _authJs.AuthFactory({
                    appKey: V(),
                    appUrl: fe(),
                    region: null == n ? void 0 : n.configs.region,
                    poolId: null == n ? void 0 : n.configs.poolId,
                    clientId: null == n ? void 0 : n.configs.clientId,
                    scope: "openid",
                    identityProvider: null !== (t = null == n ? void 0 : n.kc_hint) && void 0 !== t ? t : null == n ? void 0 : n.type,
                    passwordComplexityPolicy: null == n ? void 0 : n.configs.passwordComplexityPolicy,
                    logger: Zg,
                    httpClient: e.resolve(pn.UnauthenticatedHttpClient),
                    isOnline: () => ti()
                });
            }), yield t.update();
        });
    _exports.useAuthConfigsManager = ep;
    class tp {
        constructor(e, t) {
            this.databaseName = e, this.databaseEngineName = t, this.isInitialized = !1, this.allInitializers = [], this.initializersToRun = [];
        }
        get name() {
            return this.databaseName;
        }
        get engineName() {
            var e;
            return null !== (e = this.databaseEngineName) && void 0 !== e ? e : "Unknown";
        }
        registerInitializer(e) {
            if (this.isInitialized) throw new st.DataBaseException("", `Cannot register a database initializer on the already initialized database '${this.name}'`);
            this.allInitializers.push(e);
        }
        initialize() {
            return b(this, void 0, void 0, function*() {
                if (this.isInitialized) throw new st.DataBaseException("", `Cannot initialize the already initialized database '${this.name}'`);
                this.markInitialized(), yield this.identifyNeededInitializers(), yield this.runNeededInitializers();
            });
        }
        initializerCleanup() {
            return b(this, void 0, void 0, function*() {
                if (!this.isInitialized) throw new st.DataBaseException("", `Cannot perform database initializer cleanup on the non-initialized database '${this.name}'`);
                yield this.cleanupNeededInitializers();
            });
        }
        identifyNeededInitializers() {
            return b(this, void 0, void 0, function*() {
                this.allInitializers && this.allInitializers.length > 0 && (yield this.executeReadTransaction(e => b(this, void 0, void 0, function*() {
                    for (const t of this.allInitializers)(yield t.isNeeded(e)) && this.initializersToRun.push(t);
                }))), this.releaseUnneededInitializers();
            });
        }
        runNeededInitializers() {
            return b(this, void 0, void 0, function*() {
                this.initializersToRun.length > 0 && (yield this.executeUpgradeTransaction(e => b(this, void 0, void 0, function*() {
                    for (const t of this.initializersToRun) yield t.run(e);
                })));
            });
        }
        cleanupNeededInitializers() {
            return b(this, void 0, void 0, function*() {
                this.initializersToRun.length > 0 && (yield this.executeUpgradeTransaction(e => b(this, void 0, void 0, function*() {
                    for (const t of this.initializersToRun) t.cleanup && (yield t.cleanup(e));
                })), this.releaseNeededInitializers());
            });
        }
        markInitialized() {
            this.isInitialized = !0;
        }
        releaseUnneededInitializers() {
            this.allInitializers = [];
        }
        releaseNeededInitializers() {
            this.initializersToRun = [];
        }
    }

    function np(e, t) {
        if (null !== t) return t;
    }

    function rp(e) {
        const t = e.replace(/(?:"([^\\"]|\\.)*")|(?:'([^\\']|\\.)*')|(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(\w+)\s*:/g, function(e, t, n, r, i) {
            return r ? '"' + r + '"' : n ? '"' + e.substring(1, e.length - 1) + '"' : i ? '"' + i + '":' : e;
        });
        return JSON.parse(t);
    }

    function ip(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
        let n = arguments.length > 2 ? arguments[2] : undefined;
        let r = arguments.length > 3 ? arguments[3] : undefined;
        let i = arguments.length > 4 ? arguments[4] : undefined;
        n = null != n ? n : sp, t = isNaN(+t) ? 1 : t;
        const s = new WeakMap();
        return JSON.stringify(function e(t, r, a, o, l) {
            var u;
            return t && "object" == typeof t ? (l = s.has(t), s.set(t, !0), o = Array.isArray(t), l ? a = null !== (u = null == i ? void 0 : i(t)) && void 0 !== u ? u : null : JSON.stringify(t, function(i, s) {
                if (o || r > 0) {
                    if (n && (s = n(i, s)), !i) return o = Array.isArray(s), t = s;
                    (a = a || (o ? [] : {}))[i] = e(s, o ? r : r - 1);
                }
            }), void 0 === a ? o ? [] : "(...)" : a) : t;
        }(e, t), null, r);
    }

    function sp(e, t) {
        if ("" === e) {
            if (Array.isArray(t)) {
                let e = t;
                return e.length >= 10 && (e = e.slice(0, 9), e.push("(...)")), e;
            }
            const e = function(e, t) {
                let n = 0,
                    r = !1;
                const i = Object.keys(e).reduce(function(i, s) {
                    return n++, n <= t ? i[s] = e[s] : r = !0, i;
                }, {});
                r && (i["..."] = "(...)");
                return i;
            }(t, 10);
            return e;
        }
        if ("string" == typeof t) {
            const e = t;
            return e.length > 25 ? e.substring(0, 19) + " (...)" : e;
        }
        return t;
    }
    var ap = _exports.JSONUtils = Object.freeze({
        __proto__: null,
        deserializeFromJSON: function(e, t, n) {
            try {
                let r;
                return e && (r = rp(e)), Ju.from(r, t, n);
            } catch (e) {
                throw "Failed to deserialize JSON to " + t.name + ": " + e.message;
            }
        },
        filterJSONValues: np,
        mergeJS: function e(t, n) {
            let r, i, s, a;
            for (const o in n) {
                r = t[o], i = n[o];
                i && r && ("object" == typeof i || (s = Array.isArray(i))) ? (s ? (s = !1, a = Array.isArray(r) ? r : []) : a = "object" == typeof r ? r : {}, t[o] = e(a, i)) : void 0 !== i && (t[o] = i);
            }
            return t;
        },
        parseJSON: rp,
        serializeObjectForLog: ip,
        serializeToJSON: function(e, t, n, r) {
            const i = Ju.to({
                value: e,
                serializeDefaultValues: t,
                useUnixDateFormat: n,
                dataType: r,
                enforceDefaultValueSerializationAtThisLevel: !0
            });
            return JSON.stringify(i, np);
        }
    });
    const op = "IndexedDBTransactionWithoutObjectStores";
    class lp {
        constructor(e, t) {
            this.allowTraces = e, this.database = t, this.allowTraces && pi(op, `Starting transaction ${this.transactionId} over ${t.objectStoreNames.length} store(s)`);
        }
        createTable(e) {
            return new Promise(t => {
                var n, r, i;
                this.debug(`Creating table '${e.tableName}'`);
                const s = Fh(e),
                    a = this.database.createObjectStore(e.tableName, {
                        autoIncrement: !s,
                        keyPath: s
                    });
                this.debug(`Creating columns for '${e.tableName}' table`);
                for (let t = 0; t < e.attributes.length; t++) this.debug(`Creating column '${null === (n = e.attributes[t]) || void 0 === n ? void 0 : n.name}'`), a.createIndex(null === (r = e.attributes[t]) || void 0 === r ? void 0 : r.columnName, null === (i = e.attributes[t]) || void 0 === i ? void 0 : i.columnName);
                t();
            });
        }
        deleteTableIfExists(e) {
            let t;
            return t = "string" == typeof e ? e : e.tableName, new Promise((e, n) => {
                if (this.debug(`Deleting table '${t}'`), !this.database.objectStoreNames.contains(t)) return this.debug(`Table '${t}' does not exist`), e();
                try {
                    this.database.deleteObjectStore(t), this.debug(`Table '${t}' deleted successfuly`);
                } catch (e) {
                    return this.warning(`Error deleting table '${t}'`, e), n(e);
                }
                e();
            });
        }
        existsTable(e) {
            const t = "string" == typeof e ? e : e.tableName;
            return Promise.resolve(this.database.objectStoreNames.contains(t));
        }
        renameTable(e, t) {
            throw new Error("You can't execute this method on a database without object stores.");
        }
        addColumn(e, t) {
            throw new Error("You can't execute this method on a database without object stores.");
        }
        existsColumn(e, t) {
            return b(this, void 0, void 0, function*() {
                throw new Error("You can't execute this method on a database without object stores.");
            });
        }
        getRecord(e, t) {
            throw new Error("You can't execute this method on a database without object stores.");
        }
        insertRecord(e, t) {
            throw new Error("You can't execute this method on a database without object stores.");
        }
        updateRecord(e, t) {
            throw new Error("You can't execute this method on a database without object stores.");
        }
        upsertRecord(e, t) {
            throw new Error("You can't execute this method on a database without object stores.");
        }
        upsertAllRecords(e, t) {
            throw new Error("You can't execute this method on a database without object stores.");
        }
        removeRecord(e, t) {
            throw new Error("You can't execute this method on a database without object stores.");
        }
        removeAllRecords(e) {
            throw new Error("You can't execute this method on a database without object stores.");
        }
        findRecords(e, t) {
            throw new Error("You can't execute this method on a database without object stores.");
        }
        getAllRecords(e) {
            throw new Error("You can't execute this method on a database without object stores.");
        }
        debug(t) {
            this.allowTraces && pi(op, `${t} on transaction ${this.transactionId}`, _loggerJs.Visibility.Client);
        }
        warning(t, n) {
            mi(op, `${t} on transaction ${this.transactionId}${n ? `: ${n.message}` : ""}`, _loggerJs.Visibility.Client);
        }
    }

    function up(e, t) {
        const n = e.trim();
        if ("" === n) return []; {
            const e = Yt(n, "((((\\{\\w+\\})|(\\w+)).)?((\\[\\w+\\])|(\\w+))(( )+(desc|asc))?)(( )*,( )*(((\\{\\w+\\})|(\\w+)).)?((\\[\\w+\\])|(\\w+))(( )+(desc|asc))?)*", !0);
            if (1 !== e.length || e[0].value !== n) throw new st.DataBaseException("", "Invalid syntax in 'Order By' parameter.");
        }
        let r = Xt(n, "(\\{\\w+\\}|\\w+\\.)", !1, e => function(e, t) {
            const n = function(e) {
                    return "." === e.value.charAt(e.value.length - 1) ? e.value.substr(0, e.value.length - 1) : e.value.substr(1, e.value.length - 2);
                }(e),
                r = t.some(e => e.toLowerCase() === n.toLowerCase()) ? n : "";
            if ("" === r) throw new st.DataBaseException("", `'${n}' found in 'Order By' parameter is an invalid Entity`);
            return "." === e.value.charAt(e.value.length - 1) ? r + "." : r;
        }(e, t));
        r = Xt(r, "(\\[\\w+\\])", !1, e => e.value.substr(1, e.value.length - 2));
        return r.split(/, ?/).map(e => {
            const t = e.trim().split(" "),
                n = 2 !== t.length || "asc" === t[1].toLowerCase();
            return {
                attributeParts: t[0].split("."),
                isAscending: n
            };
        });
    }

    function cp(e) {
        e.stopPropagation(), e.preventDefault();
    }

    function dp(e) {
        return b(this, void 0, void 0, function*() {
            if (e instanceof el)
                for (let t = 0; t < e.length; t++) {
                    const n = e.getItem(t);
                    yield hp(n);
                } else e instanceof Zo && (yield hp(e));
        });
    }

    function hp(e) {
        return b(this, void 0, void 0, function*() {
            const t = e.getAttributes().map(t => b(this, void 0, void 0, function*() {
                const n = e[t.attrName];
                if (t.dataType === Po.Record) yield hp(n);
                else if (t.dataType === Po.BinaryData) {
                    const e = n;
                    yield e.loadContent();
                }
            }));
            yield Promise.all(t);
        });
    }
    var gp = _exports.IndexedDBUtils = Object.freeze({
        __proto__: null,
        getDynamicSortsObjGenerator: function(e, t) {
            const n = up(e, t);
            return e => n.map(t => {
                let n = e;
                for (let e = 0; e < t.attributeParts.length; e++) {
                    const i = (r = t.attributeParts[e], r.charAt(0).toLowerCase() + r.substr(1) + "Attr").toLowerCase(),
                        s = n.getAttributes().filter(e => e.attrName.toLowerCase() === i);
                    if (0 === s.length) throw new st.DataBaseException("", `Invalid attribute in 'Order By' parameter: ${t.attributeParts.join(".")}`);
                    n = n[s[0].attrName];
                }
                var r;
                return {
                    value: n,
                    isAscending: t.isAscending
                };
            });
        },
        loadBinaryDataContent: dp,
        markEventAsHandled: cp
    });
    const pp = "IndexedDBTransaction";
    class fp extends lp {
        set onComplete(e) {
            this.transaction.oncomplete = () => (this.allowTraces && pi(pp, `Committing transaction ${this.transactionId}`), e());
        }
        set onAbort(e) {
            this.transaction.onabort = () => (mi(pp, `Aborting transaction ${this.transactionId}: ${this.transaction.error}`), e(this.transaction.error));
        }
        executeQuery(e) {
            return e(this.transaction);
        }
        constructor(e, t, n) {
            super(e, n), this.transaction = t, fp.lastTransactionId = (fp.lastTransactionId + 1) % 1e12, this.transactionId = fp.lastTransactionId + 1;
        }
        renameTable(e, t) {
            return b(this, void 0, void 0, function*() {
                this.transaction.objectStore(e).name = t;
            });
        }
        getRecord(e, t) {
            return new Promise((n, r) => {
                this.debug(`Getting record with keys '${t}' from table '${e.tableName}'`);
                const i = this.transaction.objectStore(e.tableName).get(fp.wrapKeyIfNeeded(t, e));
                i.onsuccess = () => {
                    this.debug(`Retrieved record with keys '${t}' from table '${e.tableName}' successfully`), n(i.result || null);
                }, i.onerror = n => {
                    this.warning(`Error retrieving record with keys '${t}' from table '${e.tableName}'`, this.transaction.error), cp(n), r(this.transaction.error);
                };
            });
        }
        removeRecord(e, t) {
            return new Promise((n, r) => {
                this.debug(`Deleting record with key '${t}' from table '${e.tableName}'`);
                const i = this.transaction.objectStore(e.tableName).delete(fp.wrapKeyIfNeeded(t, e));
                i.onsuccess = () => {
                    this.debug(`Deleted record with key '${t}' from table '${e.tableName}' successfully`), n();
                }, i.onerror = n => {
                    this.warning(`Error deleting record with key '${t}' from table '${e.tableName}'`, i.error), cp(n), r(i.error);
                };
            });
        }
        removeAllRecords(e) {
            return new Promise((t, n) => {
                this.debug(`Deleting all records from table '${e.tableName}'`);
                const r = this.transaction.objectStore(e.tableName).clear();
                r.onsuccess = () => {
                    this.debug(`Deleted all records from table '${e.tableName}' successfully`), t();
                }, r.onerror = t => {
                    this.warning(`Error deleting all records from table '${e.tableName}'`, r.error), cp(t), n(r.error);
                };
            });
        }
        insertRecord(e, t) {
            return new Promise((n, r) => {
                this.debug(`Inserting record on table '${e.tableName}'`);
                const i = this.transaction.objectStore(e.tableName).add(t);
                i.onsuccess = () => {
                    this.debug(`Inserted record on table '${e.tableName}' successfully`), n(fp.unwrapKeyIfNeeded(i));
                }, i.onerror = t => {
                    this.warning(`Error inserting record on table '${e.tableName}'`, i.error), cp(t), r(i.error);
                };
            });
        }
        upsertRecord(e, t) {
            return new Promise((n, r) => {
                this.debug(`Adding/Updating record on table '${e.tableName}'`);
                const i = this.transaction.objectStore(e.tableName).put(t);
                i.onsuccess = () => {
                    this.debug(`Added/Updated record on table '${e.tableName}' successfully`), n(fp.unwrapKeyIfNeeded(i));
                }, i.onerror = t => {
                    this.warning(`Error adding/updating record on table '${e.tableName}'`, i.error), cp(t), r(i.error);
                };
            });
        }
        upsertAllRecords(e, t) {
            return b(this, void 0, void 0, function*() {
                this.debug(`Adding/updating ${null == t ? void 0 : t.length} record(s) on table '${e.tableName}'`);
                try {
                    for (const n of t) yield this.upsertRecord(e, n);
                    this.debug(`Added/updated ${null == t ? void 0 : t.length} record(s) on table '${e.tableName}' successfully`);
                } catch (n) {
                    throw this.warning(`Error adding/updating ${null == t ? void 0 : t.length} record(s) on table '${e.tableName}'`, n), n;
                }
            });
        }
        updateRecord(e, t) {
            return b(this, void 0, void 0, function*() {
                return new Promise((n, r) => {
                    const i = Fh(e);
                    if (0 === (null == i ? void 0 : i.length)) {
                        const t = new Error(`Cannot perform an update on table '${e.tableName}' since it has no primary key column`);
                        return this.warning(t.message), r(t);
                    }
                    this.debug(`Checking if record exists on table '${e.tableName}'`);
                    const s = this.transaction.objectStore(e.tableName).get(null == i ? void 0 : i.map(e => t[e]));
                    s.onsuccess = () => {
                        try {
                            if (!s.result) {
                                const t = new Error(`Record to update does not exist on table '${e.tableName}'`);
                                return this.warning(t.message), r(t);
                            }
                            this.debug(`Updating record on table '${e.tableName}'`);
                            const i = this.transaction.objectStore(e.tableName).put(t);
                            i.onsuccess = () => {
                                this.debug(`Updated record on table '${e.tableName}' successfully`), n();
                            }, i.onerror = t => {
                                this.warning(`Error updating record on table '${e.tableName}'`, i.error), cp(t), r(i.error);
                            };
                        } catch (t) {
                            this.warning(`Error updating record on table '${e.tableName}'`, t), r(t);
                        }
                    }, s.onerror = t => {
                        this.warning(`Error checking if record exists on table '${e.tableName}'`, s.error), cp(t), r(s.error);
                    };
                });
            });
        }
        addColumn(e, t) {
            return b(this, void 0, void 0, function*() {
                yield new Promise((n, r) => {
                    this.debug(`Adding column '${ip(t)}' on table '${e.tableName}'`);
                    try {
                        this.transaction.objectStore(e.tableName).createIndex(t.columnName, t.columnName), n();
                    } catch (n) {
                        this.warning(`Error adding column '${ip(t)}' on table '${e.tableName}'`, n), r(n);
                    }
                });
                const n = yield this.getAllRecords(e);
                for (const r of n) r[t.columnName] = t.serializedDefault, yield this.upsertRecord(e, r);
            });
        }
        existsColumn(e, t) {
            return b(this, void 0, void 0, function*() {
                return new Promise((n, r) => {
                    this.debug(`Checking if column '${t}' exists on table '${e}'`);
                    try {
                        n(this.transaction.objectStoreNames.contains(e) && this.transaction.objectStore(e).indexNames.contains(t));
                    } catch (n) {
                        this.warning(`Error checking if column '${t}' exists on table '${e}'`, n), r(n);
                    }
                });
            });
        }
        findRecords(e, t) {
            return new Promise((n, r) => {
                this.debug(`Searching for all records on table '${e.tableName}' that match the specified criteria.`);
                const i = [],
                    s = Uh(e).length > 0,
                    a = this.transaction.objectStore(e.tableName).openCursor();
                a.onsuccess = () => {
                    const r = a.result;
                    if (r) {
                        let e = r.value;
                        s || (e = Object.assign(Object.assign({}, e), {
                            $KEY: r.primaryKey
                        }));
                        Object.keys(t).reduce((n, r) => n && t.hasOwnProperty(r) && e[Oh(r)] === t[r], !0) && i.push(e), r.continue();
                    } else this.debug(`Search on table '${e.tableName}' found ${i.length} record(s) matching the specified criteria.`), n(i);
                }, a.onerror = t => {
                    this.warning(`Error searching for records on table '${e.tableName}'`, a.error), cp(t), r(a.error);
                };
            });
        }
        getAllRecords(e) {
            return new Promise((t, n) => {
                this.debug(`Getting all records from table '${e.tableName}'`);
                const r = this.transaction.objectStore(e.tableName).getAll();
                r.onsuccess = () => {
                    this.debug(`Retrieved all the records from table '${e.tableName}'`), t(r.result);
                }, r.onerror = t => {
                    this.warning(`Error retrieving all the records from table '${e.tableName}'`, r.error), cp(t), n(r.error);
                };
            });
        }
        static wrapKeyIfNeeded(e, t) {
            return Uh(t).length > 0 ? e instanceof Array ? e : [e] : e;
        }
        static unwrapKeyIfNeeded(e) {
            return e.result instanceof Array ? e.result[0] : e.result;
        }
    }
    fp.lastTransactionId = 0;
    const mp = "IndexedDBDatabase";
    class vp extends tp {
        static asSafeDbName(e) {
            return e || "";
        }
        static executeTransactionPromiseWithRetry(e) {
            return b(this, arguments, void 0, function(e) {
                let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
                return function*() {
                    let n,
                        r = !0,
                        i = 0;
                    for (; r;) {
                        i++;
                        try {
                            n = yield new Promise(e), r = !1;
                        } catch (e) {
                            if (!/the transaction is inactive or finished/i.test(e.message) || i >= t) throw e;
                        }
                    }
                    return n;
                }();
            });
        }
        static open(e, t) {
            return e = this.asSafeDbName(e), new Promise((n, r) => {
                if (this.cache[e]) n(this.cache[e]);
                else {
                    if ("undefined" == typeof window) return r(new st.SystemException("Database is only available in the browser/web view"));
                    if (!("indexedDB" in window)) return pi(mp, "This browser doesn't support IndexedDB"), r(new st.SystemException("This browser doesn't support IndexedDB"));
                    if (i = navigator.userAgent, /^((?!chrome|android).)*safari/i.test(i) && function(e) {
                            try {
                                return e.self !== e.top;
                            } catch (e) {
                                return !0;
                            }
                        }(window)) {
                        const e = "Your app requires native access to a Local Storage database that is not available in your browser while using an iframe.\nPlease test your app in your mobile device or use Google Chrome";
                        return alert(e), r(new st.SystemException(e));
                    }
                    pi(mp, `Opening database '${e}' on IndexedDB`);
                    const s = window.indexedDB.open(e);
                    s.onsuccess = () => {
                        pi(mp, `Database '${e}' opened successfully with version '${s.result.version}'`);
                        const r = s.result;
                        this.cache[e] = new vp(e, r, t), n(this.cache[e]);
                    }, s.onerror = () => {
                        mi(mp, `Error opening database '${e}'`), r(new st.OpenDatabaseException(`Could not open database '${e}'`));
                    };
                }
                var i;
            });
        }
        constructor(e, t, n) {
            super(e, "IndexedDB"), this.databaseImplementation = t, this.onNewDatabaseVersionDetected = n, this.setOnVersionChangeEvent();
        }
        setOnVersionChangeEvent() {
            this.databaseImplementation.onversionchange = () => {
                this.databaseImplementation.close(), this.onNewDatabaseVersionDetected && this.onNewDatabaseVersionDetected();
            };
        }
        close() {
            return pi(mp, `Closing database ${this.name} with version '${this.databaseImplementation.version}'`), this.databaseImplementation.close(), delete vp.cache[this.name], Promise.resolve();
        }
        testConnection() {
            return Promise.resolve();
        }
        executeQuery(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            let n = arguments.length > 2 ? arguments[2] : undefined;
            return this.executeReadTransaction(t => t.executeQuery(e), t, n);
        }
        executeTransaction(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            let n = arguments.length > 2 ? arguments[2] : undefined;
            return this.innerExecuteDMLTransaction(e, t, "readwrite", n);
        }
        executeReadTransaction(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            let n = arguments.length > 2 ? arguments[2] : undefined;
            return this.innerExecuteDMLTransaction(e, t, "readonly", n);
        }
        innerExecuteDMLTransaction(e, t, n, r) {
            return 0 === this.databaseImplementation.objectStoreNames.length ? this.innerExecuteIDBTransactionWithoutObjectStores(e, t) : this.innerExecuteIDBTransaction(e, t, n, r);
        }
        innerExecuteIDBTransaction(e, t, n, r) {
            return vp.executeTransactionPromiseWithRetry((i, s) => b(this, void 0, void 0, function*() {
                let a = null,
                    o = null;
                const l = r ? r.map(e => e.tableName) : [];
                if (0 === l.length)
                    for (let e = 0; e < this.databaseImplementation.objectStoreNames.length; e++) l.push(this.databaseImplementation.objectStoreNames.item(e));
                const u = this.databaseImplementation.transaction(l, n),
                    c = new fp(t, u, this.databaseImplementation);
                c.onComplete = () => b(this, void 0, void 0, function*() {
                    yield dp(a), i(a);
                }), c.onAbort = e => s(null != o ? o : e);
                try {
                    a = yield e(c);
                } catch (e) {
                    o = e, null == u || u.abort();
                }
            }));
        }
        innerExecuteIDBTransactionWithoutObjectStores(e, t) {
            return e(new lp(t, this.databaseImplementation));
        }
        executeUpgradeTransaction(e) {
            return b(this, arguments, void 0, function(e) {
                var _this8 = this;
                let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                return function*() {
                    return new Promise((n, r) => {
                        let i = null,
                            s = null;
                        const a = _this8.databaseImplementation.version;
                        _this8.databaseImplementation.close();
                        const o = window.indexedDB.open(_this8.name, a + 1);
                        o.onsuccess = () => (_this8.debug(`Database '${_this8.name}' opened successfully with version '${a + 1}'`, t), _this8.databaseImplementation = o.result, _this8.setOnVersionChangeEvent(), n(i)), o.onerror = () => (mi(mp, `Error opening '${_this8.name}' database with version '${a + 1}'`), r(null != s ? s : o.error)), o.onupgradeneeded = () => {
                            _this8.debug(`Upgrading database '${_this8.name}' with version '${a + 1}'`, t), _this8.databaseImplementation = o.result;
                            const n = new fp(t, o.transaction, o.result);
                            n.onAbort = e => s = null != s ? s : e, e(n).then(e => i = e).catch(e => {
                                var t;
                                s = e, null === (t = o.transaction) || void 0 === t || t.abort();
                            });
                        };
                    });
                }();
            });
        }
        debug(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            t && pi(mp, e);
        }
    }
    var yp;
    vp.cache = {},
        function(e) {
            e[e.Read = 0] = "Read", e[e.Write = 1] = "Write", e[e.Upgrade = 2] = "Upgrade";
        }(yp || (yp = {}));
    var bp = yp;
    const Tp = new Map();

    function wp(e) {
        var t;
        return null !== (t = Tp.get(e)) && void 0 !== t ? t : "";
    }
    Tp.set(Vt.BINARY_DATA, "BLOB"), Tp.set(Vt.BOOLEAN, "BOOLEAN"), Tp.set(Vt.DATE, "DATE"), Tp.set(Vt.DATE_TIME, "DATETIME"), Tp.set(Vt.DECIMAL, "REAL"), Tp.set(Vt.INTEGER, "INTEGER"), Tp.set(Vt.LONGINTEGER, "BIGINT"), Tp.set(Vt.TEXT, "TEXT"), Tp.set(Vt.TIME, "TIME");
    const Ep = "The transaction is read-only",
        Ip = "The database is not running a version change transaction",
        Ap = "WebSQLTransaction";
    class Np {
        get transactionId() {
            return this._transactionId;
        }
        constructor(e, t, n) {
            this.allowTraces = e, this.transaction = t, this.mode = n, Np.lastTransactionId = (Np.lastTransactionId + 1) % 1e12, this._transactionId = Np.lastTransactionId + 1, this.allowTraces && pi(Ap, `Starting transaction ${this.transactionId}`);
        }
        executeQuery(e) {
            return e(this.transaction);
        }
        getColumnDeclaration(e, t) {
            let n,
                r = `${wp(t.type)}`;
            if (t.isPrimaryKey) {
                if (e.idIsAutoNumber === Mt.YesIfEmpty || e.idIsAutoNumber === Mt.Yes) return t.type === Vt.LONGINTEGER && (r = `${wp(Vt.INTEGER)}`), r += " PRIMARY KEY AUTOINCREMENT NOT NULL", {
                    declaration: `"${t.columnName}" ${r}`
                };
                n = `"${t.columnName}"`;
            }
            if (t.length && (r += `(${t.length}${t.decimals ? "," + t.decimals : ""})`), void 0 !== t.serializedDefault) {
                let e = t.serializedDefault;
                "string" == typeof e && (e = `'${e.replace("'", "''")}'`), r += ` DEFAULT ${e}`;
            }
            return {
                declaration: `"${t.columnName}" ${r}`,
                primaryKeyDeclaration: n
            };
        }
        createTable(e) {
            return new Promise((t, n) => {
                if (this.debug(`Creating table '${e.tableName}'`), this.mode < bp.Upgrade) {
                    const t = new Error(Ip);
                    return this.warning(`Error creating table '${e.tableName}'`, t), n(t);
                }
                const r = e.attributes.map(t => this.getColumnDeclaration(e, t)),
                    i = r.filter(e => !!e.primaryKeyDeclaration).map(e => e.primaryKeyDeclaration),
                    s = r.map(e => e.declaration);
                i.length > 0 && s.push(`PRIMARY KEY (${i.join(",")})`), this.transaction.executeSql(`CREATE TABLE "${e.tableName}" (${s.join(",")})`, void 0, (n, r) => {
                    this.debug(`Table '${e.tableName}' created with success`), t();
                }, (t, r) => {
                    const i = new Error(r.message.toString());
                    return this.warning(`Error creating table '${e.tableName}'`, i), n(i), !1;
                });
            });
        }
        deleteTableIfExists(e) {
            let t;
            return t = "string" == typeof e ? e : e.tableName, new Promise((e, n) => {
                if (this.debug(`Deleting table '${t}'`), this.mode < bp.Upgrade) {
                    const e = new Error(Ip);
                    return this.warning(`Error deleting table '${t}'`, e), n(e);
                }
                this.transaction.executeSql(`DROP TABLE IF EXISTS "${t}"`, void 0, (n, r) => {
                    this.debug(`Table '${t}' deleted with success`), e();
                }, (e, r) => {
                    const i = new Error(r.message.toString());
                    return this.warning(`Error deleting table '${t}'`, i), n(i), !1;
                });
            });
        }
        renameTable(e, t) {
            return new Promise((n, r) => b(this, void 0, void 0, function*() {
                if (this.debug(`Renaming table '${e}'`), this.mode < bp.Upgrade) {
                    const t = new Error(Ip);
                    return this.warning(`Error renaming table '${e}'`, t), r(t);
                }
                this.transaction.executeSql(`ALTER TABLE "${e}" RENAME TO "${t}"`, void 0, (r, i) => {
                    this.debug(`Table '${e}' renamed to '${t}' with success`), n();
                }, (t, n) => {
                    const i = new Error(n.message.toString());
                    return this.warning(`Error renaming table '${e}'`, i), r(i), !1;
                });
            }));
        }
        existsTable(e) {
            let t;
            return t = "string" == typeof e ? e : e.tableName, new Promise((e, n) => {
                this.debug(`Checking if table '${t}' exists`);
                this.transaction.executeSql(`SELECT * FROM sqlite_master WHERE type = 'table' AND UPPER(name) = UPPER("${t}")`, void 0, (n, r) => {
                    this.debug(`Table '${t}' checked with success`), e(r.rows.length > 0);
                }, (e, r) => {
                    const i = new Error(r.message.toString());
                    return this.warning(`Error checking if table '${t}' exists`, i), n(i), !1;
                });
            });
        }
        addColumn(e, t) {
            return new Promise((n, r) => b(this, void 0, void 0, function*() {
                const i = ip(t);
                if (this.debug(`Adding column '${i}' on table '${e.tableName}'`), this.mode < bp.Upgrade) {
                    const e = new Error(Ip);
                    return this.warning(`Error adding column '${i}'`, e), r(e);
                }
                const s = (e, t) => {
                        this.debug(`Column '${i}' added with success`), n();
                    },
                    a = (e, t) => {
                        const n = new Error(t.message.toString());
                        return this.warning(`Error adding column '${i}'`, n), r(n), !1;
                    };
                this.transaction.executeSql(`ALTER TABLE "${e.tableName}" ADD ${this.getColumnDeclaration(e, t).declaration}`, void 0, (n, r) => {
                    n.executeSql(`UPDATE "${e.tableName}" SET "${t.columnName}" = ?`, [t.serializedDefault], s, a);
                }, a);
            }));
        }
        existsColumn(e, t) {
            return new Promise(n => {
                this.debug(`Checking if column '${t}' exists on table '${e}'`);
                this.transaction.executeSql(`SELECT "${e}"."${t}" FROM "${e}" LIMIT 0`, void 0, () => {
                    this.debug(`Column '${t}' exists on table '${e}'`), n(!0);
                }, () => (this.debug(`Column '${t}' does not exist on table '${e}'`), n(!1), !1));
            });
        }
        getRecord(e, t) {
            return new Promise((n, r) => {
                this.debug(`Getting record with keys '${t}' from table '${e.tableName}'`);
                const i = Np.wrapKeyIfNeeded(t),
                    s = e.attributes.map(e => `"${null == e ? void 0 : e.columnName}"`).join(", "),
                    a = `"${e.tableName}"`,
                    o = [...i],
                    l = e.attributes.filter(e => null == e ? void 0 : e.isPrimaryKey).map(e => `"${null == e ? void 0 : e.columnName}" = ?`).join(" and ");
                this.transaction.executeSql(`SELECT ${s} FROM ${a} WHERE ${l}`, o, (r, i) => {
                    this.debug(`Retrieved record with keys '${t}' from table '${e.tableName}' successfully`);
                    const s = Np.convertSQLResultSetToDatabaseRecord(e, i);
                    n(s.length > 0 ? s[0] : null);
                }, (n, i) => {
                    const s = new Error(i.message.toString());
                    return this.warning(`Error retrieving record with keys '${t}' from table '${e.tableName}'`, s), r(s), !1;
                });
            });
        }
        insertRecord(e, t) {
            return new Promise((n, r) => {
                if (this.debug(`Inserting record on table '${e.tableName}'`), this.mode < bp.Write) {
                    const t = new Error(Ep);
                    return this.warning(`Error inserting record on table '${e.tableName}'`, t), r(t);
                }
                const i = e.attributes.filter(e => null == e ? void 0 : e.isPrimaryKey),
                    s = e.attributes.map(e => `"${null == e ? void 0 : e.columnName}"`).join(", "),
                    a = Np.concatenateMultipleTimes("?", e.attributes.length, ", "),
                    o = `"${e.tableName}"`,
                    l = e.attributes.map(e => void 0 === t[null == e ? void 0 : e.columnName] ? null : t[null == e ? void 0 : e.columnName]);
                this.transaction.executeSql(`INSERT INTO ${o} (${s}) VALUES (${a})`, l, (r, s) => {
                    var a, o;
                    let l;
                    this.debug(`Inserted record on table '${e.tableName}' successfully`), l = e.idIsAutoNumber === Mt.No || e.idIsAutoNumber === Mt.YesIfEmpty && null !== t[null === (a = i[0]) || void 0 === a ? void 0 : a.columnName] ? t[null === (o = i[0]) || void 0 === o ? void 0 : o.columnName] : s.insertId, n(l);
                }, (t, n) => {
                    const i = new Error(n.message.toString());
                    return this.warning(`Error inserting record on table '${e.tableName}'`, i), r(i), !1;
                });
            });
        }
        updateRecord(e, t) {
            return new Promise((n, r) => {
                if (this.debug(`Updating record on table '${e.tableName}'`), this.mode < bp.Write) {
                    const t = new Error(Ep);
                    return this.warning(`Error updating record on table '${e.tableName}'`, t), r(t);
                }
                const i = e.attributes.filter(e => !(null == e ? void 0 : e.isPrimaryKey)),
                    s = e.attributes.filter(e => null == e ? void 0 : e.isPrimaryKey),
                    a = i.map(e => `"${null == e ? void 0 : e.columnName}" = ?`).join(", "),
                    o = s.map(e => `"${null == e ? void 0 : e.columnName}" = ?`).join(" and "),
                    l = `"${e.tableName}"`,
                    u = [];
                i.forEach(e => u.push(t[null == e ? void 0 : e.columnName])), s.forEach(e => u.push(t[null == e ? void 0 : e.columnName]));
                this.transaction.executeSql(`UPDATE ${l} SET ${a} WHERE ${o}`, u, (t, r) => {
                    0 === r.rowsAffected ? this.debug(`Record to update does not exist on table '${e.tableName}'`) : this.debug(`Updated record on table '${e.tableName}' successfully`), n();
                }, (t, n) => {
                    const i = new Error(n.message.toString());
                    return this.warning(`Error updating record on table '${e.tableName}'`, i), r(i), !1;
                });
            });
        }
        upsertRecord(e, t) {
            return new Promise((n, r) => {
                if (this.debug(`Adding/updating record on table '${e.tableName}'`), this.mode < bp.Write) {
                    const t = new Error(Ep);
                    return this.warning(`Error adding/updating record on table '${e.tableName}'`, t), r(t);
                }
                const i = e.attributes.filter(e => null == e ? void 0 : e.isPrimaryKey),
                    s = e.attributes.map(e => `"${null == e ? void 0 : e.columnName}"`).join(", "),
                    a = Np.concatenateMultipleTimes("?", e.attributes.length, ", "),
                    o = `"${e.tableName}"`,
                    l = e.attributes.map(e => t[null == e ? void 0 : e.columnName]);
                this.transaction.executeSql(`INSERT OR REPLACE INTO ${o} (${s}) VALUES (${a})`, l, (r, s) => {
                    var a, o;
                    let l;
                    this.debug(`Added/updated record on table '${e.tableName}' successfully`), l = e.idIsAutoNumber === Mt.No || e.idIsAutoNumber === Mt.YesIfEmpty && null !== t[null === (a = i[0]) || void 0 === a ? void 0 : a.columnName] ? t[null === (o = i[0]) || void 0 === o ? void 0 : o.columnName] : s.insertId, n(l);
                }, (t, n) => {
                    const i = new Error(n.message.toString());
                    return this.warning(`Error adding/updating record on table '${e.tableName}'`, i), r(i), !1;
                });
            });
        }
        upsertAllRecords(e, t) {
            return b(this, void 0, void 0, function*() {
                if (this.debug(`Adding/updating ${null == t ? void 0 : t.length} record(s) on table '${e.tableName}'`), this.mode < bp.Write) {
                    const t = new Error(Ep);
                    throw this.warning(`Error adding/updating records on table '${e.tableName}'`, t), t;
                }
                try {
                    e.attributes.some(e => (null == e ? void 0 : e.type) === Vt.BINARY_DATA) ? yield this.innerUpsertAllSingle(e, t): yield this.innerUpsertAllBulk(e, t), this.debug(`Added/updated ${null == t ? void 0 : t.length} record(s) on table '${e.tableName}' successfully`);
                } catch (n) {
                    throw this.warning(`Error adding/updating ${null == t ? void 0 : t.length} record(s) on table '${e.tableName}'`, n), n;
                }
            });
        }
        innerUpsertAllSingle(e, t) {
            return b(this, void 0, void 0, function*() {
                this.debug(`Adding/updating ${null == t ? void 0 : t.length} record(s) on table '${e.tableName}' one by one`);
                for (const n of t) yield this.upsertRecord(e, n);
            });
        }
        innerUpsertAllBulk(e, t) {
            return b(this, void 0, void 0, function*() {
                const n = Math.floor(Np.MaxQueryParameters / e.attributes.length);
                if (0 === n) return this.innerUpsertAllSingle(e, t);
                const r = [],
                    i = Math.ceil(t.length / n);
                this.debug(`Adding/updating ${null == t ? void 0 : t.length} record(s) on table '${e.tableName}' in ${i} chunk(s) of ${n} record(s) each`);
                for (let s = 0; s < i; s++) {
                    const i = [];
                    let a = 0;
                    for (; a < n;) {
                        const r = s * n + a;
                        if (r === t.length) break;
                        const o = t[r];
                        e.attributes.forEach(e => i.push(o[null == e ? void 0 : e.columnName])), a++;
                    }
                    const o = this.createUpsertBulkQuery(e, a);
                    r.push({
                        query: o,
                        argList: i
                    });
                }
                let s = 0;
                for (const t of r) this.debug(`Adding/updating chunk ${++s} of ${i} on table '${e.tableName}'`), yield this.wrapExecuteSqlOnPromise(t, e);
            });
        }
        wrapExecuteSqlOnPromise(e, t) {
            return new Promise((n, r) => {
                this.transaction.executeSql(e.query, e.argList, (e, r) => {
                    this.debug(`Added/Updated bulk of records on table '${t.tableName}' successfully`), n();
                }, (e, n) => {
                    const i = new Error(n.message.toString());
                    return this.warning(`Error adding/updating bulk of records on table '${t.tableName}'`, i), r(i), !1;
                });
            });
        }
        createUpsertBulkQuery(e, t) {
            const n = e.attributes.map(e => `"${null == e ? void 0 : e.columnName}"`).join(", "),
                r = `"${e.tableName}"`,
                i = `(${Np.concatenateMultipleTimes("?", e.attributes.length, ", ")})`;
            return `INSERT OR REPLACE INTO ${r} (${n}) VALUES ${Np.concatenateMultipleTimes(i, t, ", ")}`;
        }
        removeRecord(e, t) {
            return new Promise((n, r) => {
                if (this.debug(`Deleting record with key '${t}' from table '${e.tableName}'`), this.mode < bp.Write) {
                    const t = new Error(Ep);
                    return this.warning(`Error deleting record from table '${e.tableName}'`, t), r(t);
                }
                const i = Np.wrapKeyIfNeeded(t),
                    s = `"${e.tableName}"`,
                    a = [...i],
                    o = e.attributes.filter(e => null == e ? void 0 : e.isPrimaryKey).map(e => `"${null == e ? void 0 : e.columnName}" = ?`).join(" AND ");
                this.transaction.executeSql(`DELETE FROM ${s} WHERE ${"" === o ? "ROWID = ?" : o}`, a, (r, i) => {
                    this.debug(`Deleted record with key '${t}' from table '${e.tableName}' successfully`), n();
                }, (n, i) => {
                    const s = new Error(i.message.toString());
                    return this.warning(`Error deleting record with key '${t}' from table '${e.tableName}'`, s), r(s), !1;
                });
            });
        }
        removeAllRecords(e) {
            return new Promise((t, n) => {
                if (this.debug(`Deleting all records from table '${e.tableName}'`), this.mode < bp.Write) {
                    const t = new Error(Ep);
                    return this.warning(`Error deleting all records from table '${e.tableName}'`, t), n(t);
                }
                const r = `"${e.tableName}"`;
                this.transaction.executeSql(`DELETE FROM ${r}`, void 0, (n, r) => {
                    this.debug(`Deleted all records from table '${e.tableName}' successfully`), t();
                }, (t, r) => {
                    const i = new Error(r.message.toString());
                    return this.warning(`Error deleting all records from table '${e.tableName}'`, i), n(i), !1;
                });
            });
        }
        findRecords(e, t) {
            return new Promise((n, r) => {
                this.debug(`Searching for all records on table '${e.tableName}' that match the specified criteria`);
                const i = (Uh(e).length > 0 ? "" : '"rowid" AS "ROWID", ') + e.attributes.map(e => `"${null == e ? void 0 : e.columnName}"`).join(", "),
                    s = `"${e.tableName}"`;
                let a = "";
                const o = [];
                for (const e in t)
                    if (t.hasOwnProperty(e)) {
                        a += `${a.length > 0 ? " AND " : ""}"${Oh(e)}" = ?`, o.push(t[e]);
                    }
                this.transaction.executeSql(`SELECT ${i} FROM ${s} WHERE ${a}`, o, (t, r) => {
                    this.debug(`Search on table '${e.tableName}' found ${r.rows.length} record(s) matching the specified criteria`);
                    const i = Np.convertSQLResultSetToDatabaseRecord(e, r);
                    n(i);
                }, (t, n) => {
                    const i = new Error(n.message.toString());
                    return this.warning(`Error searching for records on table '${e.tableName}'\r\n${i}`, i), r(i), !1;
                });
            });
        }
        getAllRecords(e) {
            return new Promise((t, n) => {
                this.debug(`Getting all records on table '${e.tableName}'`);
                const r = (Uh(e).length > 0 ? "" : '"rowid" AS "ROWID", ') + e.attributes.map(e => `"${null == e ? void 0 : e.columnName}"`).join(", "),
                    i = `"${e.tableName}"`;
                this.transaction.executeSql(`SELECT ${r} FROM ${i}`, void 0, (n, r) => {
                    this.debug(`Retrieved all records from table '${e.tableName}' successfully`);
                    const i = Np.convertSQLResultSetToDatabaseRecord(e, r);
                    t(i);
                }, (t, r) => {
                    const i = new Error(r.message.toString());
                    return this.warning(`Error retrieving all records from table '${e.tableName}'`, i), n(i), !1;
                });
            });
        }
        debug(e) {
            this.allowTraces && pi(Ap, `${e} on transaction ${this.transactionId}`);
        }
        warning(t, n) {
            mi(Ap, `${t} on transaction ${this.transactionId}${n ? `: ${n.message}` : ""}`, _loggerJs.Visibility.Client);
        }
        static wrapKeyIfNeeded(e) {
            return e instanceof Array ? e : [e];
        }
        static convertSQLResultSetToDatabaseRecord(e, t) {
            const n = Uh(e).length > 0,
                r = [];
            if (t.rows.length > 0)
                for (let i = 0; i < t.rows.length; i++) {
                    const s = t.rows.item(i),
                        a = {};
                    n || (a.$KEY = s.ROWID), e.attributes.forEach(e => {
                        a[null == e ? void 0 : e.columnName] = s[null == e ? void 0 : e.columnName];
                    }), r.push(a);
                }
            return r;
        }
        static concatenateMultipleTimes(e, t, n) {
            return Array.apply(null, new Array(t)).map(() => e).join(`${n}`);
        }
    }
    Np.MaxQueryParameters = 500, Np.lastTransactionId = 0;
    const Sp = "Could not open database",
        Dp = "WebSQLDatabase";
    class Rp extends tp {
        static open(e) {
            return b(this, void 0, void 0, function*() {
                return this.cache[e] || (this.cache[e] = yield Rp.innerOpen(e)), this.cache[e];
            });
        }
        static innerOpen(e) {
            return b(this, void 0, void 0, function*() {
                if ("undefined" == typeof window) throw new st.SystemException("Database is only available in the browser/web view");
                return bn() ? Rp.openPluginDatabase(e) : Rp.isWebSQLSupported() ? Rp.openWebSQLDatabase(e) : void Rp.throwDatabaseRequiredError();
            });
        }
        static openPluginDatabase(e) {
            return b(this, void 0, void 0, function*() {
                yield Nn();
                const t = window;
                if (t.sqlitePlugin) return pi(Rp, `Opening database '${e}'`), new Promise((n, r) => {
                    try {
                        t.sqlitePlugin.openDatabase({
                            name: e,
                            location: "default"
                        }, t => {
                            t ? (pi(Rp, `Database '${e}' opened successfully`), n(new Rp(e, t))) : (mi(Dp, `Error opening database '${e}'`), r(new st.OpenDatabaseException(`${Sp} '${e}'`)));
                        }, t => {
                            mi(Dp, `Error opening database '${e}' ${t.message}`), r(new st.OpenDatabaseException(`${Sp} '${e}': ${t.message.toString()}`));
                        });
                    } catch (t) {
                        r(new st.OpenDatabaseException(`${Sp} '${e}': ${t.message.toString()}`));
                    }
                });
                throw new st.OpenDatabaseException("No database driver available");
            });
        }
        static openWebSQLDatabase(e) {
            const t = window;
            let n;
            try {
                pi(Rp, `Opening database '${e}'`), n = t.openDatabase(e, "1.0", e, 5242880);
            } catch (t) {
                throw new st.OpenDatabaseException(`${Sp} '${e}': ${t.message.toString()}`);
            }
            if (n) return pi(Rp, `Database '${e}' opened successfully`), new Rp(e, n);
            throw mi(Dp, `Error opening database '${e}'`), new st.OpenDatabaseException(`${Sp} '${e}'`);
        }
        static isWebSQLSupported() {
            return !!window.openDatabase;
        }
        static throwDatabaseRequiredError() {
            const e = "Your app requires native access to a Local Storage database that is not available in your browser.\n\nPlease test your app in your mobile device" + (!!window.chrome ? "" : ", or use Google Chrome web browser") + ".";
            throw alert(e), new st.SystemException(e);
        }
        constructor(e, t) {
            super(e, "WebSQL"), this.databaseImplementation = t;
        }
        testConnection() {
            return b(this, void 0, void 0, function*() {
                let t = 0;
                fi(Dp, "Starting to test on database connections. Performing #5 test queries.", _loggerJs.Visibility.Internal), yield Promise.all(Array.apply(null, new Array(5)).map(() => new Promise(e => b(this, void 0, void 0, function*() {
                    try {
                        yield this.executeTransaction(e => e.executeQuery(e => new Promise((t, n) => {
                            e.executeSql("SELECT 1", void 0, () => t(), (e, t) => (n(new Error(t.message.toString())), !1));
                        })));
                    } catch (e) {
                        t++, vi("WebSQLDatabase", "Failed to execute canary query (probably due to zombie transaction)", "OS-CLRT-60407", e);
                    } finally {
                        e();
                    }
                })))), fi(Dp, `Finished tests on database connections. #${5 - t} out of #5 successfull queries.`, _loggerJs.Visibility.Internal);
            });
        }
        close() {
            return this.databaseImplementation = null, delete Rp.cache[this.name], Promise.resolve();
        }
        executeQuery(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            return this.executeReadTransaction(t => t.executeQuery(e), t);
        }
        executeTransaction(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            let n = arguments.length > 2 ? arguments[2] : undefined;
            return this.innerExecuteTransaction(e, bp.Write, t, n);
        }
        executeReadTransaction(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            let n = arguments.length > 2 ? arguments[2] : undefined;
            return this.innerExecuteTransaction(e, bp.Read, t, n);
        }
        executeUpgradeTransaction(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            return this.innerExecuteTransaction(e, bp.Upgrade, t);
        }
        innerExecuteTransaction(t, n) {
            let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
            let i = arguments.length > 3 ? arguments[3] : undefined;
            return new Promise((i, s) => {
                let a, o, l;
                this.innerExecuteTransactionInMode(n === bp.Read, e => b(this, void 0, void 0, function*() {
                    a = new Np(r, e, n);
                    try {
                        o = yield t(a);
                    } catch (t) {
                        l = t, e.executeSql("ABORT_TRANSACTION", void 0, () => {}, () => !0);
                    }
                }), t => {
                    const n = null != l ? l : new Error(t.message.toString());
                    r && mi(Dp, `Aborting transaction ${null == a ? void 0 : a.transactionId}: ${n}`, _loggerJs.Visibility.Client), s(n);
                }, () => {
                    this.debug(`Committing transaction ${null == a ? void 0 : a.transactionId}`, r), i(o);
                });
            });
        }
        innerExecuteTransactionInMode(e, t, n, r) {
            var i, s;
            e ? null === (i = this.databaseImplementation) || void 0 === i || i.readTransaction(t, n, r) : null === (s = this.databaseImplementation) || void 0 === s || s.transaction(t, n, r);
        }
        debug(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            t && pi(Dp, e);
        }
    }
    Rp.cache = {};
    const Cp = function() {
            for (var _len16 = arguments.length, e = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
                e[_key16] = arguments[_key16];
            }
            return b(void 0, [...e], void 0, function() {
                let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : wd;
                return function*() {
                    yield e.initializeManifestLoader(), yield e.initialize();
                }();
            });
        },
        xp = function(e) {
            for (var _len17 = arguments.length, t = new Array(_len17 > 1 ? _len17 - 1 : 0), _key17 = 1; _key17 < _len17; _key17++) {
                t[_key17 - 1] = arguments[_key17];
            }
            return b(void 0, [e, ...t], void 0, function(e) {
                let {
                    onSettingsUpdated: t
                } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return function*() {
                    e.register(pn.SettingsManager, () => new di({
                        onSettingsUpdated: t
                    }));
                    const n = e.resolve(pn.SettingsManager);
                    yield n.update();
                }();
            });
        };
    _exports.useSettingsManager = xp;
    _exports.useVersionsManager = Cp;
    var Lp, Op;
    const _p = "Application",
        Mp = {
            hasRenderedSplashInSession: new Ze(Pe.Session, "HasRenderedSplashInSession", !1),
            pendingUpgradeFeedback: new Ze(Pe.Session, "PendingUpgradeFeedback")
        },
        Up = (e, t, n) => b(void 0, void 0, void 0, function*() {
            var r;
            if (void 0 === n && (n = null === (r = gn.resolve(pn.Auth)) || void 0 === r ? void 0 : r.getInstance()), n) return yield n.getValidAccessToken(e, t);
        });
    class Fp {
        constructor() {
            Lp.add(this), this.showingSplashScreen = !1, this.isApplicationReady = !1;
        }
        setApplicationDefinition(t) {
            P(t), J(t.applicationKey), bn() && function(t) {
                b(this, arguments, void 0, function(_ref34) {
                    let {
                        version: t,
                        ensureReady: n = Nn,
                        getNativeAppInfo: r = Dr
                    } = _ref34;
                    return function*() {
                        yield n();
                        const i = r();
                        if ("function" == typeof(null == i ? void 0 : i.setOSApplicationVersion)) try {
                            i.setOSApplicationVersion(t);
                        } catch (t) {
                            yield fi("Native", "Failed to set app version", _loggerJs.Visibility.Internal);
                        }
                    }();
                });
            }({
                version: t.appVersion
            });
        }
        tryUpgrade(e, t, n, r) {
            return b(this, void 0, void 0, function*() {
                const i = yield wd.upgradeVersion(e, t);
                return i && (yield null == r ? void 0 : r(), n()), i;
            });
        }
        processInitializationError(e, t) {
            if (0 !== e) throw t;
            this.handleError(t);
        }
        initialize(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            let n = arguments.length > 2 ? arguments[2] : undefined;
            let r = arguments.length > 3 ? arguments[3] : undefined;
            let i = arguments.length > 4 ? arguments[4] : undefined;
            return od("Application initialize"), Nt(() => b(this, void 0, void 0, function*() {
                yield gh(gn, {
                    applicationDefinition: e,
                    application: this
                });
                const s = jg(gn, {
                        dateTimeFormat: n,
                        numberFormat: r
                    }),
                    a = xp(gn, {
                        onSettingsUpdated: T(this, Lp, "m", Op)
                    }),
                    o = ep(gn),
                    l = Cp();
                return yield Promise.all([s, a, o, l]), yield rh({
                    initType: t,
                    executeRequiredScripts: i,
                    application: this
                });
            }), e => this.processInitializationError(t, e), () => ld("Application initialize"));
        }
        triggerApplicationReadyEvent() {
            var e;
            const t = null !== (e = ie()) && void 0 !== e ? e : re();
            if (t) return pi(_p, "Calling application ready event handler for " + Y()), new Promise((e, n) => {
                Re([t], e, n);
            }).then(e => e.default.fireApplicationReady()).catch(e => {
                this.handleError(e);
            });
        }
        initializeDatabase() {
            return b(this, void 0, void 0, function*() {
                let e;
                pi(_p, "Initializing application database.");
                const t = de(),
                    n = bn();
                if (t || "28f21196-030a-4be2-8241-5a4888fb3ca5" === X()) pi(_p, "Initializing database mock for NativeAppBuilder."), e = Hi.mockDb(k());
                else {
                    let t;
                    n ? (pi(_p, "Initializing WebSQL database service."), t = Rp.open(k())) : (pi(_p, "Initializing IndexDB database service."), t = vp.open(k(), () => this.onNewVersionDetected(!0))), e = t.then(e => b(this, void 0, void 0, function*() {
                        pi(_p, "Initializing entity service");
                        return gn.resolve(pn.EntityService).setDatabase(e), e;
                    }));
                }
                return e;
            });
        }
        onDatabaseReady(e) {
            if (Zc(e)) {
                gn.resolve(pn.EntityService).setReady();
            } else lc.initDb(e);
            pi(_p, "Database initialized successfully");
        }
        onNewVersionDetected(e, t) {
            const n = (null != t ? t : wd.isAutoUpgradeEnabled) || !bn();
            pi(_p, "New version detected, currentViewHasChanged = " + e);
            let r = !0;
            if (e && n) {
                this.disableDocument();
                const e = () => ir(Ar(), r, !0),
                    t = e => e.getApplicationUpgradeRequiredMessage(this.canLoseDataInUpgrade());
                this.showFeedbackMessage(t, 2, "upgrade-required", e).then(() => xc(!1));
            }
            return n ? wd.cacheResourcesInBackground(e => {
                r = e;
            }) : Promise.resolve();
        }
        onAppInfoReady(e) {
            try {
                od("Application onAppInfoReady"), this.updateServerRequestTimeoutOverrideInSeconds(e), this.updateApplicationInfo(e), this.updateClientInfo();
            } finally {
                ld("Application onAppInfoReady");
            }
        }
        updateServerRequestTimeoutOverrideInSeconds(e) {
            var t;
            le(null === (t = e.data) || void 0 === t ? void 0 : t.serverRequestTimeoutOverrideInSeconds);
        }
        updateApplicationInfo(e) {
            var t, n;
            z(null === (t = e.data) || void 0 === t ? void 0 : t.modules), K(null === (n = e.data) || void 0 === n ? void 0 : n.entityModuleNames);
        }
        updateClientInfo() {
            Nn().then(() => function() {
                const e = window.device;
                if (e) {
                    const t = new nt(new rt(e.platform, e.version, e.manufacturer, e.model, e.uuid, e.serial, e.cordova, e.isVirtual));
                    it.set(et.serializeClientInfo(t));
                }
            }()).catch(e => mi(_p, `Client info update failed: ${e}`));
        }
        shouldRenderSplashScreen() {
            const e = Q();
            return !!((null == e ? void 0 : e.splashScreenName) && e.splashScreenName.length > 0) && !Mp.hasRenderedSplashInSession.get();
        }
        disableDocument() {
            const e = document.createElement("div");
            e.classList.add("background-backdrop"), document.body.classList.add("disable-scroll"), document.body.appendChild(e);
        }
        canLoseDataInUpgrade() {
            return document.getElementsByTagName("form").length > 0;
        }
        onUpgradeFinished(e, t) {
            e ? pi(_p, "Upgrade finished successfully") : mi(_p, `Upgrade failed with reason: ${t}`);
            const n = {
                success: e,
                failReason: t
            };
            e && !this.isShowingSplashScreen ? this.showUpgradeFeedback(n) : Mp.pendingUpgradeFeedback.set(n);
        }
        waitForAppReady() {
            return this.isApplicationReady ? Promise.resolve(void 0) : (this.appReadyPromise || (this.appReadyPromise = new Promise(e => {
                this.onReady = () => e();
            })), this.appReadyPromise);
        }
        onApplicationReady() {
            pi(_p, "Application ready"), ld("Application ready"), bi(), this.isApplicationReady = !0, this.onReady && (this.onReady(), this.onReady = null);
        }
        showUpgradeFeedback(e) {
            let t, n, r;
            if (e.success) n = 0, t = e => e.getApplicationUpgradeCompleteMessage(), r = "upgrade-success";
            else switch (n = 2, r = "upgrade-error", e.failReason) {
                case 1:
                    t = e => e.getApplicationUpgradeFailedOnResourcesMessage();
                    break;
                case 2:
                    t = e => e.getApplicationUpgradeFailedOnDataModelMessage();
                    break;
                default:
                    t = e => e.getApplicationUpgradeFailedUnknownMessage();
            }
            this.showFeedbackMessage(t, n, r);
        }
        showFeedbackMessage(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
            let r = arguments.length > 3 ? arguments[3] : undefined;
            return new Promise(i => {
                var s;
                Re([null !== (s = ae()) && void 0 !== s ? s : se()], s => {
                    const a = e(s);
                    a && Lc(a, t, !0, n, !0, r), i();
                });
            });
        }
        get isReady() {
            return this.isApplicationReady;
        }
        get isShowingSplashScreen() {
            return this.showingSplashScreen;
        }
        set isShowingSplashScreen(e) {
            e && Mp.hasRenderedSplashInSession.set(!0), this.showingSplashScreen = e;
        }
        handleError(e, t) {
            wc(e, t);
        }
        exit() {
            return !bn() || Dn();
        }
        registerDefaultErrorHandler(e) {
            return gn.register(pn.GlobalExceptionHandler, e);
        }
    }
    Lp = new WeakSet(), Op = function(e) {
        const t = e.readNumber("HealthCheckInterval");
        [gn.resolve(pn.HttpClient), gn.resolve(pn.UnauthenticatedHttpClient), gn.resolve(pn.DebuggerHttpClient), gn.resolve(pn.NonDebuggerHttpClient)].forEach(e => hh.updateHealthCheckConfig(e, {
            healthCheckIntervalInSeconds: t
        }));
    };
    const $p = new Fp();
    Nr.setUrlVersionProvider(wd.getVersionedUrl.bind(wd));
    var Pp = _exports.Application = Object.freeze({
        __proto__: null,
        Application: Fp,
        ApplicationStorage: Mp,
        default: $p,
        getToken: Up
    });
    const Vp = "There was an error processing your request.",
        Bp = "",
        kp = "RELOAD",
        zp = "#error-screen-message-text",
        Hp = "#error-screen-message-text-extra",
        jp = "#error-screen-message-reload-button",
        qp = "#error-screen-spinner",
        Gp = "#exception-detail",
        Wp = "#error-screen-show-detail-button",
        Kp = "#error-screen-exception-message",
        Jp = "#error-screen-exception-stack",
        Yp = "#exception-detail-text";

    function Xp(e) {
        var t, n, r;
        const i = vc.errorPageMessage.get(),
            s = vc.errorPageExtraMessage.get(),
            a = vc.errorPageExceptionInfo.get();
        if (a) {
            let n = a.message;
            const r = lt(a);
            if (r && (n += "\n" + r), console.error(n), "undefined" != typeof document && document.querySelector) {
                document.querySelector(Kp).innerHTML = null !== (t = a.message) && void 0 !== t ? t : "";
                document.querySelector(Jp).innerHTML = r;
                if (document.querySelector(Wp).addEventListener("click", () => function() {
                        if ("undefined" != typeof document && document.querySelector) {
                            const e = document.querySelector(Wp),
                                t = document.querySelector(Yp);
                            t.hidden ? (e.innerHTML = "Hide Detail", t.hidden = !1) : (e.innerHTML = "Show Detail", t.hidden = !0);
                        }
                    }()), null == e ? void 0 : e.showExceptionStack) {
                    document.querySelector(Gp).style.display = "block";
                }
            }
        }
        if ("undefined" != typeof document && document.querySelector) {
            const t = null === (n = null == e ? void 0 : e.messages) || void 0 === n ? void 0 : n.defaultMessage,
                a = null == e ? void 0 : e.extraMessage;
            document.querySelector(zp).innerHTML = i || t || Vp;
            document.querySelector(Hp).innerHTML = s || a || Bp;
            const o = document.querySelector(jp);
            o.innerHTML = null !== (r = null == e ? void 0 : e.reloadLabel) && void 0 !== r ? r : kp, o.addEventListener("click", () => function() {
                if ("undefined" != typeof document && document.querySelector) {
                    document.querySelector(jp).style.display = "none";
                    document.querySelector(qp).style.display = "inline-block";
                }
                setTimeout(() => {
                    or();
                }, 2e3);
            }());
        }
    }
    var Qp = _exports.ErrorScreen = Object.freeze({
        __proto__: null,
        initializeErrorPage: function(t, n) {
            let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Xp;
            return Promise.resolve().then(() => n.initialize(t, 1).then(() => {
                var n;
                r(t.errorPageConfig);
                try {
                    const t = vc.errorPageExceptionInfo.get(),
                        r = t ? t.message : vc.errorPageMessage.get();
                    vi("ErrorScreen", `${r}`, null !== (n = null == t ? void 0 : t.errorCode) && void 0 !== n ? n : "OS-CLRT-00000", void 0, _loggerJs.Visibility.Client);
                } catch (e) {
                    vi("ErrorScreen", "Unable to retrieve error details", "OS-CLRT-00000");
                }
                bi();
            }).catch(e => {
                console.error(e);
            }));
        }
    });
    const Zp = "BaseMessagesProvider";
    var ef;
    ! function(e) {
        e.MandatoryValue = "Validation.Mandatory", e.InvalidValuePrefix = "Validation.", e.UpgradeComplete = "UpgradeComplete", e.UpgradeRequiredDataLoss = "UpgradeRequiredDataLoss", e.UpgradeRequired = "UpgradeRequired", e.UpgradeFailedOnResources = "AppInitError.Resources", e.UpgradeFailedOnDataModel = "AppInitError.DataModel", e.UpgradeFailed = "AppInitError.Generic";
    }(ef || (ef = {}));
    var tf = _exports.LanguageResources = Object.freeze({
        __proto__: null,
        BaseMessagesProvider: class {
            constructor(e) {
                if (this.messages = {}, this.localeChangeHandler = e => {
                        var t;
                        const n = gn.resolve(pn.TranslationsService),
                            r = gn.resolve(pn.LocaleService);
                        if (n) {
                            (null !== (t = e.localeFamily) && void 0 !== t ? t : [e.localeCode]).forEach(e => {
                                var t, i;
                                this.translationResources[e] ? (pi(Zp, `Adding translations for ${e} locale.`), n.add(null !== (t = this.translationResources[e].translations) && void 0 !== t ? t : {}), r.setCurrentLocaleRTL(null !== (i = this.translationResources[e].isRTL) && void 0 !== i && i)) : pi(Zp, `No translations found for ${e} locale.`);
                            });
                        }
                    }, this.translationResources = null != e ? e : this.translationResources, this.translationResources) {
                    const e = gn.resolve(pn.LocaleService);
                    if (e) {
                        const t = e.getCurrentLocale(),
                            n = e.getCurrentLocaleFamily();
                        this.localeChangeHandler({
                            localeCode: t,
                            localeFamily: n
                        }), pi(Zp, "Subscribing handler for locale service."), e.subscribe(this.localeChangeHandler);
                    }
                }
            }
            getMandatoryValueMessage() {
                return this.getMessage(ef.MandatoryValue, "Required Value!");
            }
            getInvalidValueMessage(e) {
                return this.getMessage(ef.InvalidValuePrefix + Po[e], "Invalid Value!");
            }
            getApplicationUpgradeCompleteMessage() {
                return this.getMessage(ef.UpgradeComplete, "");
            }
            getApplicationUpgradeRequiredMessage(e) {
                return e ? this.getMessage(ef.UpgradeRequiredDataLoss, "") : this.getMessage(ef.UpgradeRequired, "");
            }
            getApplicationUpgradeFailedOnResourcesMessage() {
                return this.getMessage(ef.UpgradeFailedOnResources, "");
            }
            getApplicationUpgradeFailedOnDataModelMessage() {
                return this.getMessage(ef.UpgradeFailedOnDataModel, "");
            }
            getApplicationUpgradeFailedUnknownMessage() {
                return this.getMessage(ef.UpgradeFailed, "");
            }
            getMessage(e, t) {
                var n;
                const r = null !== (n = this.messages[e]) && void 0 !== n ? n : t,
                    i = gn.resolve(pn.TranslationsService);
                return i ? i.getMessage(e, r) : r;
            }
            setMessage(e, t) {
                this.messages[e] = t;
            }
        },
        get ModuleMessageKeys() {
            return ef;
        }
    });
    const nf = "idAttr",
        rf = "nameAttr",
        sf = "validAttr",
        af = "validationMessageAttr";
    class of {
        constructor(e, t, n, r) {
            this.type = e, this._value = t, this.setter = n, this.model = r;
        }
        get value() {
            return this._value;
        }
        set value(e) {
            const t = Wu.convertTo(e, this.type);
            this.setter(t), this.model.flush();
        }
        isAcceptable(e) {
            return Wu.isConvertibleTo(e, this.type);
        }
        fastEquals(e) {
            return e && this.constructor === e.constructor && this.value === e.value;
        }
        equals(e) {
            return e && this.constructor === e.constructor && Go(this.value, e.value);
        }
    }
    class lf extends Yo {
        constructor(e) {
            super(e);
        }
        get idAttr() {
            return this.getBasicProperty(nf);
        }
        set idAttr(e) {
            this.setBasicProperty(nf, e, Po.Text);
        }
        get nameAttr() {
            return this.getBasicProperty(rf);
        }
        set nameAttr(e) {
            this.setBasicProperty(rf, e, Po.Text);
        }
        get generationNode() {
            return this.getBasicProperty(lf.WidgetGenerationNodeAttributeName);
        }
        set generationNode(e) {
            this.setBasicProperty(lf.WidgetGenerationNodeAttributeName, e, Po.Object);
        }
        asReadOnly() {
            return {
                idAttr: this.idAttr,
                nameAttr: this.nameAttr
            };
        }
        refreshGeneration() {
            this.generationNode && (this.generationNode.generation = mf.currentGeneration);
        }
    }
    lf.WidgetGenerationNodeAttributeName = "widgetGenerationNode", lf.RecordClass = Yo.defineRecordClass({
        idAttr: "",
        nameAttr: "",
        widgetGenerationNode: null
    });
    class uf extends lf {
        constructor(e) {
            super(e);
        }
        get validAttr() {
            return this.getBasicProperty(sf);
        }
        set validAttr(e) {
            this.setBasicProperty(sf, e, Po.Boolean);
        }
        get validationMessageAttr() {
            return this.getBasicProperty(af);
        }
        set validationMessageAttr(e) {
            this.setBasicProperty(af, e, Po.Text);
        }
        onPropertyValueChanged(e) {
            e !== sf && e !== af || this.refreshGeneration();
        }
        asReadOnly() {
            return {
                idAttr: (e = this.data).get(nf),
                nameAttr: e.get(rf),
                validAttr: e.get(sf),
                validationMessageAttr: e.get(af)
            };
            var e;
        }
    }
    uf.RecordClass = (() => {
        const e = new lf.RecordClass().toJS();
        return e.validAttr = !0, e.validationMessageAttr = "", Yo.defineRecordClass(e);
    })();
    class cf extends Yo {
        constructor(e) {
            super(e), this.widgetsIdToRecord = this.data.get(cf.WidgetRecordsAttribute), this.widgetsIdToRecordDataCache = this.data.get(cf.WidgetRecordsDataCacheAttribute);
        }
        static createDefaultData() {
            return new cf.RecordClass({
                records: new Map(),
                recordsCache: new Map()
            });
        }
        static getWidgetsType() {
            return {};
        }
        getWidgetsType() {
            return this.constructor.getWidgetsType();
        }
        getWidgetRecordType(e) {
            return this.getWidgetsType()[e] || lf;
        }
        get(e) {
            let t = this.widgetsIdToRecord.get(e);
            return t || (t = this.create(e), this.add(t), t);
        }
        set(e, t) {
            this.widgetsIdToRecord.set(e, t), this.widgetsIdToRecordDataCache.delete(e), this.writePropagate(this.data, null);
        }
        internalSet(e, t) {
            this.widgetsIdToRecord.delete(e), this.widgetsIdToRecordDataCache.set(e, t), this.writePropagate(this.data, null);
        }
        create(e) {
            const t = Pd.nameFromId(e),
                n = new(this.getWidgetRecordType(t))(this.widgetsIdToRecordDataCache.get(e));
            return n.idAttr = e, n.nameAttr = t, n;
        }
        add(e) {
            cf.setPropagationHandler(e, this, e.idAttr, this.internalSet), this.widgetsIdToRecordDataCache.delete(e.idAttr), this.widgetsIdToRecord.set(e.idAttr, e);
        }
        remove(e) {
            this.widgetsIdToRecord.delete(e), this.widgetsIdToRecordDataCache.delete(e), this.writePropagate(this.data, null);
        }
    }
    cf.WidgetRecordsAttribute = "records", cf.WidgetRecordsDataCacheAttribute = "recordsCache", cf.RecordClass = Yo.defineRecordClass({
        records: null,
        recordsCache: null
    });
    class df extends Zo {
        get dataFetchStatusAttr() {
            return this.getBasicProperty(df.DataFetchStatusAttributeName);
        }
        set dataFetchStatusAttr(e) {
            this.setBasicProperty(df.DataFetchStatusAttributeName, e, Po.Integer);
        }
        get isDataFetchedAttr() {
            return 1 === this.dataFetchStatusAttr;
        }
        get hasFetchErrorAttr() {
            return 2 === this.dataFetchStatusAttr;
        }
        static attributesToDeclare() {
            return [Zo.attr("DataFetchStatus", df.DataFetchStatusAttributeName, "", !0, !1, Po.Integer, () => 0)].concat(super.attributesToDeclare());
        }
        replaceWith(e) {
            const t = new this.constructor(Yo.getData(e));
            t.dataFetchStatusAttr = this.dataFetchStatusAttr, this.writePropagate(Yo.getData(t), new Ho());
        }
    }
    df.DataFetchStatusAttributeName = "dataFetchStatusAttr";
    class hf extends df {
        get listOut() {
            return this.getComplexProperty(hf.ListOutAttributeName, this.getRecordListType());
        }
        set listOut(e) {
            this.setComplexProperty(hf.ListOutAttributeName, e, Po.RecordList, this.getRecordListType());
        }
        get countOut() {
            return this.getBasicProperty(hf.CountOutAttributeName);
        }
        set countOut(e) {
            this.setBasicProperty(hf.CountOutAttributeName, e, Po.LongInteger);
        }
        bulkSet(e, t, n) {
            const r = [{
                name: hf.ListOutAttributeName,
                value: e,
                isBasicType: !1
            }, {
                name: df.DataFetchStatusAttributeName,
                value: t,
                isBasicType: !0
            }];
            void 0 !== n && r.push({
                name: hf.CountOutAttributeName,
                value: n,
                isBasicType: !0
            }), this.setProperties(r);
        }
        getRecordListType() {
            return this.constructor.RecordListType;
        }
        static attributesToDeclare() {
            return [Zo.attr("List", hf.ListOutAttributeName, "List", !0, !1, Po.RecordList, () => !1, !0, this.RecordListType), Zo.attr("Count", hf.CountOutAttributeName, "Count", !0, !1, Po.LongInteger, () => bo.defaultValue)].concat(super.attributesToDeclare());
        }
        static init() {
            if (!this.RecordListType) throw new TypeError("AggregateRecords must define a RecordListType");
            super.init();
        }
    }
    hf.ListOutAttributeName = "listOut", hf.CountOutAttributeName = "countOut";
    class gf extends Yo {
        constructor(e) {
            super(), this._context = e, this.writeSubscriptions = [], this.cachedValues = {}, this.modified = !1;
        }
        static createDefaultData() {
            const e = this.newVariablesRecord(),
                t = this.newWidgetsRecord();
            return new gf.RecordClass({
                variables: Yo.getData(e),
                widgets: Yo.getData(t),
                clientVariablesGeneration: 0,
                currentLocale: null
            });
        }
        onDefaultWritePropagate(e) {
            super.onDefaultWritePropagate(e), this.modified = !0, this.innerFlush(!0);
        }
        cloneCache() {
            return this.cache;
        }
        get isModified() {
            return this.modified;
        }
        scheduleFlush() {
            this.pendingFlush || (this.pendingFlush = window.setTimeout(() => this.flush(), 0));
        }
        flush() {
            this.pendingFlush && (clearTimeout(this.pendingFlush), this.pendingFlush = void 0), this.modified && (this.modified = !1, mf.currentGeneration++, this.innerFlush(!1), pi("BaseViewModel", "Flushing model"));
        }
        innerFlush(e) {
            for (let t = 0; t < this.writeSubscriptions.length; t++) {
                const n = this.writeSubscriptions[t];
                n.immediate === e && n.handler(this);
            }
        }
        subscribeWrites(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            return !(!this.hasVariables && !this.hasValidationWidgets && null === this.currentLocale && void 0 === this.currentLocale || !e) && (this.writeSubscriptions.push({
                handler: e,
                immediate: t
            }), !0);
        }
        unsubscribeWrites(e) {
            if (e) {
                let t = -1;
                for (let n = 0, r = this.writeSubscriptions.length; n < r; n++)
                    if (this.writeSubscriptions[n].handler === e) {
                        t = n;
                        break;
                    }
                if (t >= 0) return this.writeSubscriptions.splice(t, 1), !0;
            }
            return !1;
        }
        clearSubscriptions() {
            this.writeSubscriptions = [];
        }
        static get hasVariables() {
            return !0;
        }
        get hasVariables() {
            return this.constructor.hasVariables;
        }
        static getVariablesRecordConstructor() {
            throw new Error("@abstract");
        }
        static newVariablesRecord(e) {
            return this.hasVariables ? new(this.getVariablesRecordConstructor())(e) : void 0;
        }
        getVariables() {
            const e = this.constructor;
            if (this.hasVariables) return this.getComplexProperty(gf.VariablesPropertyName, e.getVariablesRecordConstructor());
            throw new Error("Model does not contain variables");
        }
        get variables() {
            return this.getVariables();
        }
        set variables(e) {
            const t = this.constructor;
            this.setComplexProperty(gf.VariablesPropertyName, e, Po.Record, t.getVariablesRecordConstructor());
        }
        get clientVariablesGeneration() {
            return this.getBasicProperty(gf.ClientVariablesGenerationPropertyName);
        }
        set clientVariablesGeneration(e) {
            this.setBasicProperty(gf.ClientVariablesGenerationPropertyName, e, Po.Integer);
        }
        static get hasValidationWidgets() {
            return !0;
        }
        get hasValidationWidgets() {
            return this.constructor.hasValidationWidgets;
        }
        get currentLocale() {
            return this.getBasicProperty(gf.CurrentLocalePropertyName);
        }
        set currentLocale(e) {
            this.currentLocale !== e && this.clearCachedValues(), this.setBasicProperty(gf.CurrentLocalePropertyName, e, Po.Text);
        }
        static getWidgetsRecordConstructor() {
            throw new Error("@abstract");
        }
        static newWidgetsRecord(e) {
            return this.hasValidationWidgets ? new(this.getWidgetsRecordConstructor())(e) : void 0;
        }
        getWidgets() {
            const e = this.constructor;
            if (this.hasValidationWidgets) return this.getComplexProperty(gf.WidgetsPropertyName, e.getWidgetsRecordConstructor());
            throw new Error("Model does not contain validation widgets");
        }
        get widgets() {
            return this.getWidgets();
        }
        set widgets(e) {
            this.setComplexProperty(gf.WidgetsPropertyName, e, Po.Object);
        }
        hasCachedValue(e) {
            return this.cachedValues.hasOwnProperty(e);
        }
        getCachedValue(e, t) {
            let r = this.cachedValues[e];
            for (var _len18 = arguments.length, n = new Array(_len18 > 2 ? _len18 - 2 : 0), _key18 = 2; _key18 < _len18; _key18++) {
                n[_key18 - 2] = arguments[_key18];
            }
            const i = n.map((e, t) => {
                try {
                    return e();
                } catch (e) {
                    return gf.InvalidValue;
                }
            });
            return void 0 !== r && n.length === r.args.length && i.every((e, t) => e === r.args[t]) || (r = {
                args: i,
                value: t()
            }, this.cachedValues[e] = r), r.value;
        }
        clearCachedValues() {
            this.cachedValues = {};
        }
        createVariable(e, t, n) {
            return new of (e, t, n, this);
        }
        fromOther(e) {
            this.fromImmutableData(e.data);
        }
        toImmutableData() {
            return this.data;
        }
        fromImmutableData(e) {
            this.data = e, this.writePropagate(this.data, this.cache), this.cache.invalidate();
        }
        setInputs(e) {
            throw new Error("@abstract");
        }
        get widgetsGenerationsTree() {
            return this._widgetsGenerationsTree || (this._widgetsGenerationsTree = new mf()), this._widgetsGenerationsTree;
        }
        getReadOnlyWidgetRecord(e) {
            return this.widgets.get(e).asReadOnly();
        }
        get context() {
            return this._context;
        }
        sanitize(e) {
            let t = e;
            if (this.hasVariables) {
                if (e.constructor !== this.data.constructor) throw new Error("Expected data to be the same type of this model data");
                const n = this.variables.getNonSerializableAttributes();
                if (n.length > 0) {
                    let e = t.get(gf.VariablesPropertyName);
                    n.forEach(t => e = e.set(t, null)), t = t.set(gf.VariablesPropertyName, e);
                }
            }
            return t;
        }
    }
    gf.VariablesPropertyName = "variables", gf.WidgetsPropertyName = "widgets", gf.ClientVariablesGenerationPropertyName = "clientVariablesGeneration", gf.CurrentLocalePropertyName = "currentLocale", gf.InvalidValue = new Object(), gf.RecordClass = Yo.defineRecordClass({
        variables: null,
        widgets: null,
        clientVariablesGeneration: 0,
        currentLocale: null
    });
    class pf extends gf {
        static get hasVariables() {
            return !1;
        }
        static get hasValidationWidgets() {
            return !1;
        }
        setInputs() {}
        static create(e, t, n) {
            return new pf({
                viewName: e,
                navigatedFromHistory: t,
                viewWasRestoredFromCache: n
            });
        }
    }
    class ff {
        constructor(e) {
            this._parent = e, this._generation = e ? e.generation : 0;
        }
        get parent() {
            return this._parent;
        }
        get generation() {
            return this._generation;
        }
        set generation(e) {
            this.generation < e && (this._generation = e, this.parent && (this.parent.generation = e));
        }
        addChild() {
            return new ff(this);
        }
    }
    class mf {
        constructor() {
            this._root = new ff(null), this._root.generation = mf.currentGeneration, mf.currentGeneration++;
        }
        get root() {
            return this._root;
        }
        static get currentGeneration() {
            return mf.generation;
        }
        static set currentGeneration(e) {
            mf.generation = e;
        }
    }
    mf.generation = 0;
    var vf = _exports.Model = Object.freeze({
        __proto__: null,
        AggregateRecord: hf,
        BaseViewModel: gf,
        BaseWidgetRecordMap: cf,
        DataSourceRecord: df,
        DummyViewModel: pf,
        ModelFactory: class {
            constructor(e) {
                this.modelClass = e;
            }
            create(e) {
                return this.modelClass.hasVariables || this.modelClass.hasValidationWidgets ? new this.modelClass(e) : new pf(e);
            }
            get hasValidationWidgets() {
                return this.modelClass.hasValidationWidgets;
            }
        },
        ValidationWidgetRecord: uf,
        Variable: of ,
        VariablelessViewModel: class extends gf {
            static get hasVariables() {
                return !1;
            }
            setInputs() {}
        },
        WidgetRecord: lf,
        calculateDataFetchStatus: function() {
            let t = 1;
            for (var _len19 = arguments.length, e = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
                e[_key19] = arguments[_key19];
            }
            for (const n of e) switch (n) {
                case 2:
                    return 2;
                case 0:
                    t = 0;
            }
            return t;
        }
    });

    function yf(e) {
        const t = e.trim().split(" ")[0].split(".");
        return t[t.length - 1].replace(/["]+/g, "");
    }
    var bf = _exports.WebSQLUtils = Object.freeze({
        __proto__: null,
        getAttributeFromOrderBy: yf,
        getOrderByColumnsWithoutDuplicates: function(e) {
            return function(e) {
                const t = [],
                    n = {};
                return e.forEach(e => {
                    const r = e.trim();
                    if ("" !== r) {
                        const e = r.replace(new RegExp("\b((ASC)|(DESC))$", "im"), "").replace('"', "").replace("[", "").replace("]", "").trim().toLowerCase();
                        !0 !== n[e] && (t.push(r), n[e] = !0);
                    }
                }), t;
            }(e).join(", ");
        },
        replaceEntityReferencesInOrderBy: function(e, t, n) {
            let r = Yt(e = e.trim(), '(^|\\s|\\.)(\\[|"|)(ossys_|osltm_|oslog_|osevt_|osusr_|osext_)', !0);
            if (r.length > 0) {
                const e = r[0];
                throw new st.DataBaseException("", `'${e.groups[2] + e.groups[3]}' found in 'Order By' parameter is a reserved prefix`);
            }
            if ("" !== e && (r = Yt(e, "((((\\{\\w+\\})|(\\w+)).)?((\\[\\w+\\])|(\\w+))(( )+(desc|asc))?)(( )*,( )*(((\\{\\w+\\})|(\\w+)).)?((\\[\\w+\\])|(\\w+))(( )+(desc|asc))?)*", !0), 1 !== r.length || r[0].value !== e)) throw new st.DataBaseException("", "Invalid syntax in 'Order By' parameter.");
            let i = Xt(e, "(\\{\\w+\\}|\\w+\\.)", !1, e => function(e, t, n) {
                let r = "";
                const i = function(e) {
                    return "." === e.value.charAt(e.value.length - 1) ? e.value.substr(0, e.value.length - 1) : e.value.substr(1, e.value.length - 2);
                }(e);
                let s = !1;
                for (let e = 0; e < t.length; e++)
                    if (t[e].toLowerCase() === i.toLowerCase()) {
                        s = !0, r = '"' + n[e] + '"';
                        break;
                    }
                if (!s) throw new st.DataBaseException("", `'${i}' found in 'Order By' parameter is an invalid Entity`);
                return "." === e.value.charAt(e.value.length - 1) ? r + "." : r;
            }(e, t, n));
            return i = Xt(i, "(\\[\\w+\\])", !1, e => function(e) {
                const t = e.value.substr(1, e.value.length - 2);
                return t ? ('"' === t.charAt(0) ? "" : '"') + t + ('"' === t.charAt(t.length - 1) ? "" : '"') : "";
            }(e)), i;
        },
        validateQueryOrderBy: function(e, t) {
            return t.forEach(t => {
                const n = yf(t);
                for (let t = 0; t < e.length; t++) {
                    if (e[t].attributes.some(e => e.name.toLowerCase() === n.toLowerCase())) return !0;
                }
                throw new st.DataBaseException("", `Invalid attribute in 'Order By' parameter: ${t}`);
            }), !0;
        }
    });

    function Tf() {
        return !0;
    }

    function wf(e, t) {
        return e && t && (n = e, !Il.isBasicType(n) || (null == n ? void 0 : n.equals) instanceof Function) ? e.fastEquals instanceof Function ? e.fastEquals(t) : Go(e, t) : e === t;
        var n;
    }
    var Ef = _exports.ObjectExtensions = Object.freeze({
        __proto__: null,
        arrayShallowEquals: function(e, t) {
            if (e === t) return !0;
            if (!(null !== e && null !== t && e instanceof Array && t instanceof Array)) return !1;
            if (e.length !== t.length) return !1;
            for (let n = 0; n < e.length; n++)
                if (!wf(e[n], t[n])) return !1;
            return !0;
        },
        assign: function(e) {
            if (null == e) throw new TypeError("ObjectHelper.assign target cannot be null or undefined");
            const n = Object(e),
                r = Object.prototype.hasOwnProperty;
            for (var _len20 = arguments.length, t = new Array(_len20 > 1 ? _len20 - 1 : 0), _key20 = 1; _key20 < _len20; _key20++) {
                t[_key20 - 1] = arguments[_key20];
            }
            for (const e of t) {
                if (null == e) continue;
                const t = Object(e);
                for (const e in t) r.call(t, e) && (n[e] = t[e]);
            }
            return n;
        },
        concatenateMultipleTimes: function(e, t, n) {
            let r = e;
            for (let e = 0; e < n; e++) r += t;
            return r;
        },
        getHashCode: function(e) {
            let t = 0;
            const n = e.length;
            if (0 === n) return t;
            for (let r = 0; r < n; r++) {
                t = (t << 5) - t + e.charCodeAt(r), t |= 0;
            }
            return t;
        },
        isEmptyObject: function(e) {
            return !e || 0 === Object.keys(e).length;
        },
        roughSizeOf: function(e) {
            const t = [],
                n = [e];
            let r = 0;
            for (; n.length;) {
                const e = n.pop();
                switch (typeof e) {
                    case "boolean":
                        r += 4;
                        break;
                    case "number":
                        r += 8;
                        break;
                    case "string":
                        r += 2 * e.length;
                        break;
                    case "object":
                        if (-1 !== t.indexOf(e)) continue;
                        t.push(e), Array.isArray(e) || (r += 2 * Object.keys(e).length);
                        for (const t in e) {
                            let r = null;
                            try {
                                r = e[t];
                            } catch (e) {}
                            r && n.push(r);
                        }
                }
            }
            return r;
        },
        shallowEquals: function(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Tf;
            if (e === t) return !0;
            if (null === e || null === t || "object" != typeof e || "object" != typeof t) return !1;
            const r = Object.keys(e),
                i = Object.keys(t);
            if (r.length !== i.length) return !1;
            const s = Object.prototype.hasOwnProperty.bind(t);
            for (let i = 0; i < r.length; i++) {
                const a = r[i];
                if (n(e, a)) {
                    if (!s(a)) return !1;
                    if (!wf(e[a], t[a])) return !1;
                }
            }
            return !0;
        }
    });
    let If = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("PasswordComplexityPolicyFailed", "passwordComplexityPolicyFailedAttr", "passwordComplexityPolicyFailed", !0, !1, Po.Boolean, () => !1), this.attr("InvalidCredentials", "invalidCredentialsAttr", "invalidCredentials", !0, !1, Po.Boolean, () => !1), this.attr("TooManyFailedAttempts", "tooManyFailedAttemptsAttr", "tooManyFailedAttempts", !0, !1, Po.Boolean, () => !1)].concat(super.attributesToDeclare());
        }
    };
    If = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], If);
    let Af = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Success", "successAttr", "success", !0, !1, Po.Boolean, () => Wo(Po.Boolean)), this.attr("ChangePasswordFailureReason", "changePasswordFailureReasonAttr", "changePasswordFailureReason", !0, !1, Po.Record, () => Jo.getData(new If()), If)].concat(super.attributesToDeclare());
        }
    };
    Af = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Af);
    let Nf = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("PasswordComplexityPolicyFailed", "passwordComplexityPolicyFailedAttr", "passwordComplexityPolicyFailed", !0, !1, Po.Boolean, () => !1), this.attr("InvalidVerificationCode", "invalidVerificationCodeAttr", "invalidVerificationCode", !0, !1, Po.Boolean, () => !1), this.attr("InvalidEmail", "invalidEmailAttr", "invalidEmail", !0, !1, Po.Boolean, () => !1)].concat(super.attributesToDeclare());
        }
    };
    Nf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Nf);
    let Sf = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("MinimumLength", "minimumLengthAttr", "minimumLength", !0, !1, Po.Integer, () => Wo(Po.Integer)), this.attr("UpperCaseLetterRequired", "upperCaseLetterRequiredAttr", "upperCaseLetterRequired", !0, !1, Po.Boolean, () => Wo(Po.Boolean)), this.attr("LowerCaseLetterRequired", "lowerCaseLetterRequiredAttr", "lowerCaseLetterRequired", !0, !1, Po.Boolean, () => Wo(Po.Boolean)), this.attr("NumberRequired", "numberRequiredAttr", "numberRequired", !0, !1, Po.Boolean, () => Wo(Po.Boolean)), this.attr("SpecialCharacterRequired", "specialCharacterRequiredAttr", "specialCharacterRequired", !0, !1, Po.Boolean, () => Wo(Po.Boolean))].concat(super.attributesToDeclare());
        }
    };
    Sf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Sf);
    let Df = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("IsValid", "isValidAttr", "isValid", !0, !1, Po.Boolean, () => Wo(Po.Boolean)), this.attr("MissingMinimumLength", "missingMinimumLengthAttr", "missingMinimumLength", !0, !1, Po.Boolean, () => Wo(Po.Boolean)), this.attr("MissingUpperCaseLetter", "missingUpperCaseLetterAttr", "missingUpperCaseLetter", !0, !1, Po.Boolean, () => Wo(Po.Boolean)), this.attr("MissingLowerCaseLetter", "missingLowerCaseLetterAttr", "missingLowerCaseLetter", !0, !1, Po.Boolean, () => Wo(Po.Boolean)), this.attr("MissingNumber", "missingNumberAttr", "missingNumber", !0, !1, Po.Boolean, () => Wo(Po.Boolean)), this.attr("MissingSpecialCharacter", "missingSpecialCharacterAttr", "missingSpecialCharacter", !0, !1, Po.Boolean, () => Wo(Po.Boolean))].concat(super.attributesToDeclare());
        }
    };
    Df = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Df);
    let Rf = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Success", "successAttr", "success", !0, !1, Po.Boolean, () => Wo(Po.Boolean)), this.attr("UserId", "userIdAttr", "userId", !0, !1, Po.Text, () => Wo(Po.Text)), this.attr("finishUserRegistrationFailureReason", "finishUserRegistrationFailureReasonAttr", "finishUserRegistrationFailureReason", !0, !1, Po.Record, () => Jo.getData(new Nf()), Nf)].concat(super.attributesToDeclare());
        }
    };
    Rf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Rf);
    let Cf = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("InvalidCredentials", "invalidCredentialsAttr", "invalidCredentials", !0, !1, Po.Boolean, () => !1), this.attr("InvalidName", "invalidNameAttr", "invalidName", !0, !1, Po.Boolean, () => !1), this.attr("InvalidPhotoURL", "invalidPhotoURLAttr", "invalidPhotoURL", !0, !1, Po.Boolean, () => !1)].concat(super.attributesToDeclare());
        }
    };
    Cf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Cf);
    let xf = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Success", "successAttr", "success", !0, !1, Po.Boolean, () => Wo(Po.Boolean)), this.attr("UpdateUserFailureReason", "updateUserFailureReasonAttr", "updateUserFailureReason", !0, !1, Po.Record, () => Jo.getData(new Cf()), Cf)].concat(super.attributesToDeclare());
        }
    };
    xf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], xf);
    let Lf = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Email", "emailAttr", "email", !0, !1, Po.Email, () => Wo(Po.Email)), this.attr("Name", "nameAttr", "name", !0, !1, Po.Text, () => Wo(Po.Text)), this.attr("PhotoURL", "photoURLAttr", "photoURL", !0, !1, Po.Text, () => Wo(Po.Text))].concat(super.attributesToDeclare());
        }
    };
    Lf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Lf);
    let Of = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("InvalidCredentials", "invalidCredentialsAttr", "invalidCredentials", !0, !1, Po.Boolean, () => !1), this.attr("TooManyFailedLoginAttempts", "tooManyFailedLoginAttemptsAttr", "tooManyFailedLoginAttempts", !0, !1, Po.Boolean, () => !1)].concat(super.attributesToDeclare());
        }
    };
    Of = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Of);
    let _f = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Success", "successAttr", "success", !0, !1, Po.Boolean, () => Wo(Po.Boolean)), this.attr("UserId", "userIdAttr", "userId", !0, !1, Po.Text, () => Wo(Po.Text)), this.attr("UserLoginFailureReason", "userLoginFailureReasonAttr", "userLoginFailureReason", !0, !1, Po.Record, () => Jo.getData(new Of()), Of), this.attr("retryAfterSeconds", "retryAfterSecondsAttr", "retryAfterSeconds", !0, !1, Po.Integer, () => Wo(Po.Integer))].concat(super.attributesToDeclare());
        }
    };
    _f = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], _f);
    let Mf = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("InvalidEmail", "invalidEmailAttr", "invalidEmail", !0, !1, Po.Boolean, () => !1), this.attr("InvalidName", "invalidNameAttr", "invalidName", !0, !1, Po.Boolean, () => !1), this.attr("UsernameAlreadyExists", "usernameAlreadyExistsAttr", "usernameAlreadyExists", !0, !1, Po.Boolean, () => !1), this.attr("UserAlreadyRegistered", "userAlreadyRegisteredAttr", "userAlreadyRegistered", !0, !1, Po.Boolean, () => !1)].concat(super.attributesToDeclare());
        }
    };
    Mf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Mf);
    let Uf = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Success", "successAttr", "success", !0, !1, Po.Boolean, () => Wo(Po.Boolean)), this.attr("StartUserRegistrationFailureReason", "startUserRegistrationFailureReasonAttr", "startUserRegistrationFailureReason", !0, !1, Po.Record, () => Jo.getData(new Mf()), Mf), this.attr("TemporaryPassword", "temporaryPasswordAttr", "temporaryPassword", !0, !1, Po.Text, () => Wo(Po.Text)), this.attr("UserId", "userIdAttr", "userId", !0, !1, Po.Text, () => Wo(Po.Text)), this.attr("VerificationCode", "verificationCodeAttr", "verificationCode", !0, !1, Po.Text, () => Wo(Po.Text))].concat(super.attributesToDeclare());
        }
    };
    Uf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Uf);
    let Ff = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Name", "nameAttr", "name", !0, !1, Po.Text, () => Wo(Po.Text)), this.attr("PhotoURL", "photoURLAttr", "photoURL", !0, !1, Po.Text, () => Wo(Po.Text))].concat(super.attributesToDeclare());
        }
    };
    Ff = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Ff);
    let $f = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("HasRole", "hasRoleOut", "hasRole", !0, !1, Po.Boolean, () => Wo(Po.Boolean))].concat(super.attributesToDeclare());
        }
    };
    $f = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], $f);
    let Pf = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("PasswordComplexityPolicyFailed", "passwordComplexityPolicyFailedAttr", "passwordComplexityPolicyFailed", !0, !1, Po.Boolean, () => !1), this.attr("InvalidVerificationCode", "invalidVerificationCodeAttr", "invalidVerificationCode", !0, !1, Po.Boolean, () => !1), this.attr("InvalidEmail", "invalidEmailAttr", "invalidEmail", !0, !1, Po.Boolean, () => !1)].concat(super.attributesToDeclare());
        }
    };
    Pf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Pf);
    let Vf = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Success", "successAttr", "success", !0, !1, Po.Boolean, () => Wo(Po.Boolean)), this.attr("FinishResetPasswordFailureReason", "finishResetPasswordFailureReasonAttr", "finishResetPasswordFailureReason", !0, !1, Po.Record, () => Jo.getData(new Pf()), Pf)].concat(super.attributesToDeclare());
        }
    };
    Vf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Vf);
    let Bf = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Success", "successAttr", "success", !0, !1, Po.Boolean, () => Wo(Po.Boolean)), this.attr("VerificationCode", "verificationCodeAttr", "verificationCode", !0, !1, Po.Text, () => Wo(Po.Text))].concat(super.attributesToDeclare());
        }
    };
    var kf;
    Bf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Bf);
    let zf = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("FileName", "fileNameAttr", "FileName", !1, !1, Po.Text, () => Wo(Po.Text)), this.attr("FileContent", "fileContentAttr", "FileContent", !1, !1, Po.BinaryData, () => Wo(Po.BinaryData)), this.attr("MimeType", "mimeTypeAttr", "MimeType", !1, !1, Po.Text, () => Wo(Po.Text))].concat(super.attributesToDeclare());
        }
    };
    zf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], zf);
    let Hf = kf = class extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Attachment", "attachmentAttr", "Attachment", !1, !1, Po.Record, () => Jo.getData(new zf()), zf)].concat(Zo.attributesToDeclare());
        }
    };
    Hf._isAnonymousRecord = !0, Hf.fromStructure = function(e) {
        return new kf(new kf.RecordClass({
            attachmentAttr: Jo.getData(e)
        }));
    }, Hf = kf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Hf);
    class jf extends nl {
        constructor(e) {
            super(e);
        }
    }
    jf.itemType = zf;
    class qf extends nl {
        constructor(e) {
            super(e);
        }
    }
    qf.itemType = Hf;
    var Gf = _exports.SystemStructures = Object.freeze({
        __proto__: null,
        AttachmentList: jf,
        get AttachmentRec() {
            return zf;
        },
        get AttachmentRecord() {
            return Hf;
        },
        AttachmentRecordList: qf,
        get ChangePasswordFailureReasonRec() {
            return If;
        },
        get ChangePasswordResultRec() {
            return Af;
        },
        get FinishResetPasswordFailureReasonRec() {
            return Pf;
        },
        get FinishResetPasswordResultRec() {
            return Vf;
        },
        get FinishUserRegistrationFailureReasonRec() {
            return Nf;
        },
        get FinishUserRegistrationResultRec() {
            return Rf;
        },
        get HasRoleResultRec() {
            return $f;
        },
        get PasswordComplexityPolicyRec() {
            return Sf;
        },
        get PasswordValidationResultRec() {
            return Df;
        },
        get StartResetPasswordResultRec() {
            return Bf;
        },
        get StartUserRegistrationFailureReasonRec() {
            return Mf;
        },
        get StartUserRegistrationResultRec() {
            return Uf;
        },
        get UpdateUserFailureReasonRec() {
            return Cf;
        },
        get UpdateUserResultRec() {
            return xf;
        },
        get UserInfoRec() {
            return Lf;
        },
        get UserLoginFailureReasonRec() {
            return Of;
        },
        get UserLoginResultRec() {
            return _f;
        },
        get UserUpdateInfoRec() {
            return Ff;
        }
    });
    const Wf = "data-os-finished",
        Kf = "ScriptsManager",
        Jf = new Map();
    let Yf = !1,
        Xf = null;

    function Qf(e) {
        return e.replace(/.*\//, "").replace(/(.*)__.*/, "$1");
    }

    function Zf(e, t) {
        const n = Qf(e),
            r = Ni(n, void 0, t);
        null == r || r.setAttribute("code.function", n), null == r || r.setAttribute("outsystems.function.type", "REQUIRED_SCRIPT");
        const i = null == t ? void 0 : t.getContext().attributes["outsystems.function.key"];
        i && (null == r || r.setAttribute("outsystems.function.owner.key", i));
        const s = null == t ? void 0 : t.getContext().attributes["code.function"];
        return s && (null == r || r.setAttribute("outsystems.function.owner.name", s)), r;
    }

    function em(e) {
        let {
            parentSpan: t,
            dom: n = document
        } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        tm("Adding script", e),
            function() {
                if (Yf) return;
                Yf = !0, Object.defineProperty(define, "amd", {
                    get: nm.bind(this, define.amd),
                    configurable: !0
                });
            }();
        const r = Jf.get(e);
        if (r) return tm("Script already added", e), r.promise;
        const i = Zf(e, t),
            s = n.createElement("script");
        s.async = !1, s.setAttribute("src", e), s.setAttribute(Wf, "false");
        const a = new Promise((t, r) => {
            const a = () => {
                s.setAttribute(Wf, "true"), null == i || i.end();
            };
            s.onerror = s.onabort = t => {
                a(), r(`Error adding script '${e}' to document '${n.baseURI}'`);
            }, s.onload = n => {
                tm("Script added", e), a(), t(n);
            };
        });
        return (null == Xf ? void 0 : Xf.domElement.parentNode) ? Xf.domElement.parentNode.insertBefore(s, Xf.domElement.nextSibling) : n.head.appendChild(s), null == i || i.activate(), Jf.set(e, {
            promise: a,
            domElement: s
        }), Xf = Jf.get(e), a;
    }

    function tm(e, t) {
        const n = sn(document.baseURI);
        pi(Kf, `${e} '${t}' : document '${n}'`);
    }

    function nm(e) {
        const t = document.currentScript;
        if (!(null == t ? void 0 : t.hasAttribute(Wf))) return e;
    }
    var rm = _exports.ScriptsManager = Object.freeze({
        __proto__: null,
        addScript: em,
        clearScripts: function() {
            Jf.clear(), Xf = null;
        },
        createScriptSpan: Zf,
        getScriptName: Qf,
        scheduleCustomJsLoading: function(e, t) {
            let {
                parentSpan: n,
                dom: r = document
            } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            return Promise.all(e.map(e => em(e, {
                parentSpan: n,
                dom: r
            }).catch(t)));
        }
    });
    const im = new El("DuplicatedList", "duplicatedListOut"),
        sm = new El("FilteredList", "filteredListOut"),
        am = new El("DistinctList", "distinctListOut"),
        om = new wl("ExternalLoginURL", "externalLoginURLOut"),
        lm = new El("UserLoginResult", "userLoginResultOut"),
        um = new wl("ExternalLogoutURL", "externalLogoutURLOut"),
        cm = new El("PasswordComplexityPolicy", "passwordComplexityPolicyOut"),
        dm = new El("PasswordValidationResult", "passwordValidationResultOut");
    new El("ResetPasswordResult", "resetPasswordResultOut");
    const hm = new wl("IsExternalUser", "isExternalUserOut"),
        gm = new El("RegistrationResult", "registrationResultOut"),
        pm = new El("ChangePasswordResult", "changePasswordResultOut");
    new El("UpdateUserResult", "updateUserResultOut");
    const fm = new El("UserInfo", "userInfoOut"),
        mm = new El("FinishResetPasswordResult", "finishResetPasswordResultOut");
    class vm {
        constructor() {}
        getCurrentRowNumber(e) {
            return 0;
        }
        setCurrentRowNumber(e, t) {}
        isBeingIterated(e) {
            return !1;
        }
        registerIterationStart(e) {}
        registerIterationEnd(e) {}
        getIterator(e) {
            return null;
        }
        clone() {
            return this;
        }
    }

    function ym(e, t, n) {
        if (t.isBeingIterated(e)) throw new Error("List is being iterated: " + n + " is not allowed");
    }

    function bm(e, t, n, r) {
        ym(e, t, n);
        try {
            return t.registerIterationStart(e), r();
        } finally {
            t.registerIterationEnd(e);
        }
    }

    function Tm(e) {
        return e ? e.iterationContext : new vm();
    }
    class wm extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Result", "resultOut", "resultOut", !0, !0, Po.Boolean, () => {})].concat(super.attributesToDeclare());
        }
    }
    wm._constructor = void wm.init();
    class Em extends Zo {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Position", "positionOut", "positionOut", !0, !0, Po.Integer, () => {})].concat(super.attributesToDeclare());
        }
    }

    function Im(t) {
        const n = lt(t),
            r = sn(t.message);
        switch (vi("Login SystemAction", r, t.errorCode, t, _loggerJs.Visibility.Internal), t.errorCode) {
            case "OS-CLRT-40109":
                return new st.InvalidLoginException("Identity provider configurations missing.", n);
            case "OS-ID-BIZ-40021":
                return new st.InvalidLoginException("Error retrieving token from identity provider.", n);
            default:
                return new st.InvalidLoginException("Login Failed.", n);
        }
    }

    function Am(e, t) {
        const n = e instanceof Error ? e.message : e;
        xi({
            category: "SystemAction",
            clientMessage: `Error in ${t}: ${"string" == typeof n ? n : "Unknown error"}`,
            internalMessage: `Error in ${t}`,
            errorCode: "OS-CLRT-00000",
            errorObj: e instanceof Error ? e : void 0
        });
    }

    function Nm(t, n, r) {
        const i = Ni(t, _loggerJs.Visibility.External);
        null == i || i.setAttribute("code.function", t), null == i || i.setAttribute("outsystems.function.key", n), null == i || i.setAttribute("outsystems.function.owner.name", "(System)"), null == i || i.setAttribute("outsystems.function.owner.key", "478870b9-2d60-4f73-9eb3-7cd8b994a737"), null == i || i.setAttribute("outsystems.function.type", "CLIENT_SYSTEM_ACTION");
        try {
            return r(i);
        } finally {
            null == i || i.end();
        }
    }
    Em._constructor = void Em.init();
    var Sm = _exports.SystemActions = Object.freeze({
        __proto__: null,
        changePassword: function(e, t, n, r) {
            return b(this, arguments, void 0, function(e, t, n, r) {
                var _this9 = this;
                let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Wr;
                return function*() {
                    return Nm("ChangePassword", "b17b5077-e564-4145-b640-9fcb359cbb07", () => b(_this9, void 0, void 0, function*() {
                        const r = new(pm.getType(Af))();
                        try {
                            yield i({
                                username: e,
                                oldPassword: n,
                                newPassword: t
                            }), r.changePasswordResultOut.successAttr = !0;
                        } catch (e) {
                            const t = e;
                            r.changePasswordResultOut.successAttr = !1, t.name === _authJs.FailureReasons.PasswordComplexityPolicyFailed ? r.changePasswordResultOut.changePasswordFailureReasonAttr.passwordComplexityPolicyFailedAttr = !0 : t.name === _authJs.FailureReasons.InvalidCredentials ? r.changePasswordResultOut.changePasswordFailureReasonAttr.invalidCredentialsAttr = !0 : t.name === _authJs.FailureReasons.TooManyFailedAttempts && (r.changePasswordResultOut.changePasswordFailureReasonAttr.tooManyFailedAttemptsAttr = !0);
                        }
                        return r;
                    }));
                }();
            });
        },
        finishResetPassword: function(e, t, n, r) {
            return b(this, arguments, void 0, function(e, t, n, r) {
                var _this10 = this;
                let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : jr;
                return function*() {
                    return Nm("FinishResetPassword", "4c9a2d55-1e48-4a73-b6dd-197773173c84", () => b(_this10, void 0, void 0, function*() {
                        const r = new(mm.getType(Vf))();
                        if (!t) return r.finishResetPasswordResultOut.successAttr = !1, r.finishResetPasswordResultOut.finishResetPasswordFailureReasonAttr.invalidVerificationCodeAttr = !0, r;
                        if (!e) return r.finishResetPasswordResultOut.successAttr = !1, r.finishResetPasswordResultOut.finishResetPasswordFailureReasonAttr.invalidEmailAttr = !0, r;
                        try {
                            yield i({
                                username: e,
                                resetToken: t,
                                newPassword: n
                            }), r.finishResetPasswordResultOut.successAttr = !0;
                        } catch (e) {
                            const t = e;
                            r.finishResetPasswordResultOut.successAttr = !1;
                            const n = r.finishResetPasswordResultOut.finishResetPasswordFailureReasonAttr;
                            t.name === _authJs.FailureReasons.PasswordComplexityPolicyFailed ? n.passwordComplexityPolicyFailedAttr = !0 : t.name === _authJs.FailureReasons.InvalidToken ? n.invalidVerificationCodeAttr = !0 : t.name === _authJs.FailureReasons.InvalidCredentials && (n.invalidEmailAttr = !0);
                        }
                        return r;
                    }));
                }();
            });
        },
        finishUserRegistration: function(e, t, n, r) {
            return b(this, arguments, void 0, function(e, t, n, r) {
                var _this11 = this;
                let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Gr;
                let s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Br;
                return function*() {
                    return Nm("FinishUserRegistration", "44a8850b-2e2d-4f19-9ea4-e5f40a050b5b", () => b(_this11, void 0, void 0, function*() {
                        const r = new(gm.getType(Rf))();
                        if (!n) return r.registrationResultOut.successAttr = !1, r.registrationResultOut.finishUserRegistrationFailureReasonAttr.invalidVerificationCodeAttr = !0, r;
                        if (!e) return r.registrationResultOut.successAttr = !1, r.registrationResultOut.finishUserRegistrationFailureReasonAttr.invalidEmailAttr = !0, r;
                        try {
                            yield i({
                                username: e,
                                password: t,
                                temporaryPassword: n
                            }), r.registrationResultOut.successAttr = !0, r.registrationResultOut.userIdAttr = s();
                        } catch (e) {
                            const t = e;
                            r.registrationResultOut.successAttr = !1, t.name === _authJs.FailureReasons.PasswordComplexityPolicyFailed ? r.registrationResultOut.finishUserRegistrationFailureReasonAttr.passwordComplexityPolicyFailedAttr = !0 : t.name === _authJs.FailureReasons.InvalidToken ? r.registrationResultOut.finishUserRegistrationFailureReasonAttr.invalidVerificationCodeAttr = !0 : t.name === _authJs.FailureReasons.InvalidCredentials && (r.registrationResultOut.finishUserRegistrationFailureReasonAttr.invalidEmailAttr = !0);
                        }
                        return r;
                    }));
                }();
            });
        },
        getExternalLoginURL: function(e, t, n) {
            return b(this, arguments, void 0, function(e, t, n) {
                var _this12 = this;
                let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Mr;
                let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : gn.resolve(pn.AuthConfigsManager);
                return function*() {
                    return Nm("GetExternalLoginURL", "da6adf2c-ff63-4d63-a90e-a58819b503eb", () => b(_this12, void 0, void 0, function*() {
                        const n = "" === e ? void 0 : e,
                            s = new(om.getType(Po.Text))(),
                            [a] = i.readAuthConfigs(t);
                        if (!a) {
                            const e = new Error(`The given identity provider '${t}' does not exist.`);
                            throw Am(e, "getExternalLoginURL"), e;
                        }
                        return s.externalLoginURLOut = yield r({
                            callbackUrl: n,
                            authConfigs: t ? Object.assign(Object.assign({}, a.configs), {
                                identityProvider: a.kc_hint
                            }) : void 0
                        }), s;
                    }));
                }();
            });
        },
        getExternalLogoutURL: function(e, t) {
            return b(this, arguments, void 0, function(e, t) {
                var _this13 = this;
                let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Pr;
                return function*() {
                    return Nm("GetExternalLogoutURL", "c5bd52b6-817c-4268-9d9b-7d2bfe7228fe", () => b(_this13, void 0, void 0, function*() {
                        const t = "" === e ? void 0 : e,
                            r = new(um.getType(Po.Text))();
                        return r.externalLogoutURLOut = yield n({
                            callbackUrl: t
                        }), r;
                    }));
                }();
            });
        },
        getPasswordComplexityPolicy: function(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : zr;
            return Nm("GetPasswordComplexityPolicy", "dc6941b3-7f13-4266-92a7-afc438918f3f", () => {
                const e = new(cm.getType(Sf))(),
                    n = t();
                return e.passwordComplexityPolicyOut.minimumLengthAttr = n.minimumLength, e.passwordComplexityPolicyOut.lowerCaseLetterRequiredAttr = n.lowerCaseLetterRequired, e.passwordComplexityPolicyOut.upperCaseLetterRequiredAttr = n.upperCaseLetterRequired, e.passwordComplexityPolicyOut.numberRequiredAttr = n.numberRequired, e.passwordComplexityPolicyOut.specialCharacterRequiredAttr = n.specialCharacterRequired, e;
            });
        },
        getUserProfile: function(e) {
            return b(this, arguments, void 0, function(e) {
                var _this14 = this;
                let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Kr;
                return function*() {
                    return Nm("GetUserProfile", "a4d7f4ef-399a-4294-8ab4-cf1437699fe3", () => b(_this14, void 0, void 0, function*() {
                        const e = new(fm.getType(Lf))(),
                            n = yield t();
                        return e.userInfoOut.emailAttr = n.username, e.userInfoOut.nameAttr = n.name, e.userInfoOut.photoURLAttr = n.pictureUrl, e;
                    }));
                }();
            });
        },
        isExternalUser: function(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : qr;
            return Nm("IsExternalUser", "5365bc0e-70f6-4e7f-90bf-6c6e12da81bb", () => {
                const e = new(hm.getType(Po.Boolean))();
                return e.isExternalUserOut = t(), e;
            });
        },
        listAll: function(e, t, n) {
            return Nm("ListAll", "22f2c626-25d5-4457-bbe7-94261470862e", () => {
                try {
                    const r = Tm(n);
                    return bm(e, r, "all", () => {
                        const n = new wm();
                        return n.resultOut = e.all(t), n;
                    });
                } catch (e) {
                    throw Am(e, "listAll"), e;
                }
            });
        },
        listAny: function(e, t, n) {
            return Nm("ListAny", "d562e8a9-e680-48d3-8274-1e7e5437e4f8", () => {
                try {
                    const r = Tm(n);
                    return bm(e, r, "any", () => {
                        const n = new wm();
                        return n.resultOut = e.any(t), n;
                    });
                } catch (e) {
                    throw Am(e, "listAny"), e;
                }
            });
        },
        listAppend: function(e, t, n) {
            return Nm("ListAppend", "aa5b021e-e937-4b80-a2b3-c95b4339a11d", () => {
                try {
                    const r = Tm(n);
                    ym(e, r, "append"), e.append(t);
                } catch (e) {
                    throw Am(e, "listAppend"), e;
                }
            });
        },
        listAppendAll: function(e, t, n) {
            return Nm("ListAppendAll", "cfed0293-97ed-42f7-8d5a-5a2582ecb1da", () => {
                try {
                    const r = Tm(n);
                    ym(e, r, "appendAll"), e.appendAll(t);
                } catch (e) {
                    throw Am(e, "listAppendAll"), e;
                }
            });
        },
        listClear: function(e, t) {
            return Nm("ListClear", "c534e5bd-7032-4d4c-97e1-abbf1dee3fbf", () => {
                try {
                    const n = Tm(t);
                    ym(e, n, "clear"), e.clear(), n.setCurrentRowNumber(e, 0);
                } catch (e) {
                    throw Am(e, "listClear"), e;
                }
            });
        },
        listDistinct: function(e, t) {
            return Nm("ListDistinct", "b54c6849-3ce4-455a-af15-ad7a37c9899f", () => {
                try {
                    const n = Tm(t);
                    return bm(e, n, "distinct", () => {
                        const t = new(am.getType(e.constructor))();
                        return t.distinctListOut = e.distinct(), t;
                    });
                } catch (e) {
                    throw Am(e, "listDistinct"), e;
                }
            });
        },
        listDuplicate: function(e, t) {
            return Nm("ListDuplicate", "dbe15950-87da-4517-88b4-14c83bbe7d94", () => {
                try {
                    const n = Tm(t);
                    ym(e, n, "duplicate");
                    const r = new(im.getType(e.constructor))();
                    return r.duplicatedListOut = e.clone(), r;
                } catch (e) {
                    throw Am(e, "listDuplicate"), e;
                }
            });
        },
        listFilter: function(e, t, n) {
            return Nm("ListFilter", "5137c152-4d59-48f6-b86e-b6b8e7b1e160", () => {
                try {
                    const r = Tm(n);
                    return bm(e, r, "filter", () => {
                        const n = new(sm.getType(e.constructor))();
                        return n.filteredListOut = e.filter(t), n;
                    });
                } catch (e) {
                    throw Am(e, "listFilter"), e;
                }
            });
        },
        listIndexOf: function(e, t, n) {
            return Nm("ListIndexOf", "763a5d96-a42e-49b6-8129-b46525912667", () => {
                try {
                    const r = Tm(n);
                    return bm(e, r, "indexOf", () => {
                        const n = new Em();
                        return n.positionOut = e.indexOf(t), n;
                    });
                } catch (e) {
                    throw Am(e, "listIndexOf"), e;
                }
            });
        },
        listInsert: function(e, t, n, r) {
            return Nm("ListInsert", "6c6663d0-5b99-492d-80a5-284def1ceb8c", () => {
                try {
                    const i = Tm(r);
                    ym(e, i, "insert"), e.insert(n, t);
                    const s = i.getCurrentRowNumber(e);
                    e.length > 1 && n <= s && i.setCurrentRowNumber(e, s + 1);
                } catch (e) {
                    throw Am(e, "listInsert"), e;
                }
            });
        },
        listRemove: function(e, t, n) {
            return Nm("ListRemove", "9a0ebe10-cdee-4774-9179-e3c439bb0d3a", () => {
                try {
                    const r = Tm(n);
                    ym(e, r, "remove");
                    const i = 1 === e.length;
                    let s;
                    i && (s = e.getItem(0)), e.remove(t), i && (e.emptyListItem = s);
                    const a = r.getCurrentRowNumber(e);
                    t < a ? r.setCurrentRowNumber(e, a - 1) : t === e.length && r.setCurrentRowNumber(e, Math.max(0, e.length - 1));
                } catch (e) {
                    throw Am(e, "listRemove"), e;
                }
            });
        },
        listSort: function(e, t, n, r) {
            return Nm("ListSort", "c7db4ad0-51cc-44e5-aa36-50546face388", () => {
                try {
                    const i = Tm(r);
                    return bm(e, i, "sort", () => {
                        e.sort(t, n);
                    });
                } catch (e) {
                    throw Am(e, "listSort"), e;
                }
            });
        },
        logMessage: function(t, n, r) {
            return Nm("LogMessage", "8c126211-5b78-442b-8a4d-fc2f72d10ef2", () => {
                fi(n, t, _loggerJs.Visibility.Client);
            });
        },
        login: function(e, t, n, r) {
            return b(this, arguments, void 0, function(e, t, n, r) {
                var _this15 = this;
                let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Fr;
                return function*() {
                    return Nm("Login", "477c9f29-36c5-42a9-b910-3e5d70c7427e", () => b(_this15, void 0, void 0, function*() {
                        const r = new(lm.getType(_f))();
                        try {
                            r.userLoginResultOut.userIdAttr = yield i({
                                username: e,
                                password: t,
                                persistLogin: n
                            }), r.userLoginResultOut.successAttr = !0;
                        } catch (e) {
                            const t = e;
                            if (r.userLoginResultOut.userIdAttr = "", r.userLoginResultOut.successAttr = !1, r.userLoginResultOut.retryAfterSecondsAttr = 10, t.name === _authJs.FailureReasons.InvalidCredentials) r.userLoginResultOut.userLoginFailureReasonAttr.invalidCredentialsAttr = !0;
                            else {
                                if (t.name !== _authJs.FailureReasons.TooManyFailedAttempts) throw Im(t);
                                r.userLoginResultOut.userLoginFailureReasonAttr.tooManyFailedLoginAttemptsAttr = !0;
                            }
                        }
                        return r;
                    }));
                }();
            });
        },
        logout: function(e, t) {
            return b(this, arguments, void 0, function(e, t) {
                let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : $r;
                return function*() {
                    return Nm("Logout", "41ac3c1a-dffd-4b4f-acc0-fa439a975601", () => n({
                        callbackUrl: "string" == typeof e ? e : ""
                    }));
                }();
            });
        },
        requireScript: function(e, t) {
            return Nm("RequireScript", "388d4655-dd1c-4c5c-8d46-f420d0fe02a1", t => {
                try {
                    return em(Nr.getVersionedUrl(e), {
                        parentSpan: t
                    });
                } catch (e) {
                    throw Am(e, "requireScript"), e;
                }
            });
        },
        setCurrentLocale: function(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : gn;
            return Nm("SetCurrentLocale", "f2708145-60c0-49dc-9a1a-8b0f1fae5dce", () => {
                try {
                    const t = n.resolve(pn.LocaleService);
                    if (!t) {
                        const e = new Error("Undefined locale service: can't set current locale.");
                        throw Am(e, "setCurrentLocale"), e;
                    }
                    t.setCurrentLocale(e);
                } catch (e) {
                    throw Am(e, "setCurrentLocale"), e;
                }
            });
        },
        validatePasswordComplexity: function(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Hr;
            return Nm("ValidatePasswordComplexity", "e11739ec-bce8-4f6c-a952-886e102ecac5", () => {
                const t = new(dm.getType(Df))(),
                    r = n({
                        password: e
                    });
                return t.passwordValidationResultOut.isValidAttr = r.isValid, t.passwordValidationResultOut.missingMinimumLengthAttr = r.missingMinimumLength, t.passwordValidationResultOut.missingUpperCaseLetterAttr = r.missingUpperCaseLetter, t.passwordValidationResultOut.missingLowerCaseLetterAttr = r.missingLowerCaseLetter, t.passwordValidationResultOut.missingNumberAttr = r.missingNumber, t.passwordValidationResultOut.missingSpecialCharacterAttr = r.missingSpecialCharacter, t;
            });
        }
    });
    var Dm,
        Rm = _exports.StringUtils = Object.freeze({
            __proto__: null,
            StringUtils: class {
                static safeParseInt(e) {
                    let t = e;
                    return e && !isNaN(Number(e)) && (t = parseInt(e, 10)), t;
                }
            }
        }),
        Cm = _exports.MappingWithDefaultService = Object.freeze({
            __proto__: null
        });
    ! function(e) {
        e[e.Normal = 0] = "Normal", e[e.AtFunctionReturn = 1] = "AtFunctionReturn", e[e.BetweenAssignments = 2] = "BetweenAssignments";
    }(Dm || (Dm = {}));
    const xm = "ccid",
        Lm = "dbg-stop",
        Om = "dbg-bkp";
    var _m, Mm;
    ! function(e) {
        e[e.StepOver = 0] = "StepOver", e[e.StepInto = 1] = "StepInto", e[e.StepOut = 2] = "StepOut", e[e.Continue = 3] = "Continue", e[e.ContinueToHere = 4] = "ContinueToHere", e[e.None = 5] = "None";
    }(_m || (_m = {})),
    function(e) {
        e[e.Unprepared = 0] = "Unprepared", e[e.WaitingForClient = 1] = "WaitingForClient", e[e.Prepared = 2] = "Prepared";
    }(Mm || (Mm = {}));
    class Um {
        constructor() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            this.moduleKey = e, this.objectKey = t, this.compoundKey = n, this.debuggerHash = r;
        }
        init(e) {
            if (!e) return;
            const t = e.split(Um.SeparatorChar);
            this.moduleKey = t[0], this.objectKey = t[1], this.compoundKey = t.length > 2 && t[2] ? t[2] : null, this.debuggerHash = t.length > 3 && t[3] ? t[3] : null;
        }
        static parse(e) {
            if (!e) return null;
            try {
                const t = new Um();
                return t.init(e), t;
            } catch (e) {
                return null;
            }
        }
        equals(e) {
            return !!e && e.moduleKey === this.moduleKey && e.objectKey === this.objectKey;
        }
        toString() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            var t;
            return e ? this.moduleKey + Um.SeparatorChar + (this.objectKey || "") + Um.SeparatorChar + (this.compoundKey || "") + Um.SeparatorChar + (this.debuggerHash || "") : this.moduleKey + Um.SeparatorChar + (null !== (t = this.objectKey) && void 0 !== t ? t : "");
        }
    }
    Um.SeparatorChar = ":";
    class Fm {
        constructor() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _m.None;
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
            this._commandType = e, this._stackLevel = t;
        }
        resetCommandState() {
            this._commandType = _m.None, this._stackLevel = -1;
        }
        get commandType() {
            return this._commandType;
        }
        set commandType(e) {
            this._commandType = e;
        }
        get stackLevel() {
            return this._stackLevel;
        }
        set stackLevel(e) {
            this._stackLevel = e;
        }
    }
    class $m {
        constructor(e, t, n, r, i) {
            this.elementKey = e, this.moduleName = t, this.elementName = n, this.elementType = r, this.varBag = i, this.currentBreakpoint = null, this.previousBreakpoint = null, this.breakpointType = null, this.extraInfo = null, this.functionLeft = "";
        }
        refreshLocalState(e, t, n) {
            this.previousBreakpoint = this.currentBreakpoint, this.currentBreakpoint = e, this.breakpointType = t, this.extraInfo = n;
        }
    }
    class Pm {
        constructor() {
            this.callStack = new Array(), this._command = new Fm(), this._continueToHereBreakpoint = void 0, this._stopImmediately = !1;
        }
        pushCallOnStack(e, t, n, r, i) {
            this.callStack.push(new $m(e, t, n, r, i));
        }
        popCallOnStack() {
            const e = this.callStack.pop(),
                t = this.peekLastCallOnStack();
            return this.callStack.length > 0 && t && (t.functionLeft = null == e ? void 0 : e.elementName), e;
        }
        peekLastCallOnStack() {
            if (!(this.callStack.length <= 0)) return this.callStack[this.callStack.length - 1];
        }
        getCallOnStack(e) {
            if (!(e < 0 || e >= this.callStack.length)) return this.callStack[e];
            Vm("The received stack level is not valid. Received '" + e + "', current thread stack length '" + this.callStack.length + "'");
        }
        refreshLastCallOnStack(e, t, n) {
            var r;
            null === (r = this.peekLastCallOnStack()) || void 0 === r || r.refreshLocalState(e, t, n);
        }
        set command(e) {
            this._command = e;
        }
        get command() {
            return this._command;
        }
        get stackLevel() {
            return this.callStack.length;
        }
        get stopImmediately() {
            return this._stopImmediately;
        }
        set stopImmediately(e) {
            this._stopImmediately = e || !1;
        }
        get continueToBreakpoint() {
            return this._continueToHereBreakpoint;
        }
        set continueToBreakpoint(e) {
            this._continueToHereBreakpoint = e;
        }
        get threadStartName() {
            return this._threadStartName || "";
        }
        set threadStartName(e) {
            this._threadStartName = e;
        }
        getThreadStack() {
            return this.callStack.map(e => {
                var t;
                return {
                    currentBreakpoint: null !== e.currentBreakpoint && void 0 !== e.currentBreakpoint ? e.currentBreakpoint.toString(!0) : null,
                    previousBreakpoint: null !== e.previousBreakpoint && void 0 !== e.previousBreakpoint ? e.previousBreakpoint.toString(!0) : null,
                    breakpointType: null !== (t = e.breakpointType) && void 0 !== t ? t : Dm.Normal,
                    extraInfo: e.extraInfo,
                    elementKey: null !== e.elementKey && void 0 !== e.elementKey ? e.elementKey.toString(!0) : null,
                    elementName: e.elementName,
                    elementType: e.elementType,
                    functionLeft: e.functionLeft,
                    moduleName: e.moduleName
                };
            });
        }
    }

    function Vm(e, t) {
        pi("Debugger", e, t);
    }
    const Bm = /^([0-9]+)$/,
        km = /\[[^\]]*[^0-9\]]+[^\]]*\]/;
    class zm {
        constructor() {
            this.isInSession = !1, this.breakpoints = new Map(), this.callContexts = new Map(), this.initializationStatus = Mm.Unprepared, this._pauseOnAllExceptions = !1, this.exceptionsMap = new Map(), this.pausedOnAnException = !1, this.allowedModules = new Map();
        }
        get BreakpointType() {
            return Dm;
        }
        isPausedOnException() {
            return this.pausedOnAnException;
        }
        get version() {
            return 3;
        }
        isSessionActive() {
            return this.isInSession;
        }
        startSession() {
            if (this.isInSession) return void Vm("Debugger is already in session");
            this.pendingInitializationHandler && (this.initializationStatus = Mm.Prepared, this.pendingInitializationHandler(), this.pendingInitializationHandler = null), this.isInSession = !0;
            const e = gn.resolve(pn.DebuggerHttpClient);
            e && gn.register(pn.HttpClient, () => e);
        }
        endSession() {
            if (!this.isInSession) return void Vm("Can't end an nonexisting session");
            this.isInSession = !1;
            const e = gn.resolve(pn.NonDebuggerHttpClient);
            e && gn.register(pn.HttpClient, () => e);
        }
        addBreakpoint(e) {
            null !== Um.parse(e) ? this.breakpoints.get(e) ? Vm(`Breakpoint with id '${e}' already registered`) : this.breakpoints.set(e, !0) : Vm(`Cannot convert '${e}' to a BreakpointId`);
        }
        addBreakpoints(e) {
            e.forEach(e => this.addBreakpoint(e));
        }
        allowBreakpointsFromModule(e) {
            this.allowedModules.get(e) ? Vm(`Application with key '${e}' is already allowed`) : this.allowedModules.set(e, !0);
        }
        removeBreakpoint(e) {
            null !== Um.parse(e) ? this.breakpoints.delete(e) || Vm(`Breakpoint with id '${e}'  isn't registered`) : Vm(`Cannot convert '${e}' to a BreakpointId`);
        }
        clearBreakpoints() {
            this.breakpoints.clear();
        }
        push(e, t, n, r, i, s) {
            if (!this.isInSession) return;
            const a = Um.parse(e);
            if (!a) return void Vm(`Error when parsing breakpointId '${e}'`);
            let o = this.callContexts.get(i);
            o || (o = new Pm(), this.callContexts.set(i, o)), o.pushCallOnStack(a, t, n, r, s);
        }
        pop(e, t) {
            if (!this.isInSession) return;
            const n = Um.parse(e);
            if (!n) return void Vm(`Error when parsing breakpointId '${e}'`);
            const r = this.callContexts.get(t);
            if (!r) return void Vm(`There is no action to end to callContextId '${t.toString()}'`);
            const i = r.peekLastCallOnStack();
            (null == i ? void 0 : i.elementKey.equals(n)) ? (r.popCallOnStack(), r.stackLevel <= 0 && (this.callContexts.delete(t), this.exceptionsMap.delete(t))) : Vm(`Action to end didn't match to current running action. Running action key: '${null == i ? void 0 : i.elementKey.toString()}', tried to end: '${n.toString()}'`);
        }
        stepInto(e) {
            this.fillCommandByCallContextId(e, _m.StepInto);
        }
        stepOver(e) {
            this.fillCommandByCallContextId(e, _m.StepOver);
        }
        stepOut(e) {
            this.fillCommandByCallContextId(e, _m.StepOut);
        }
        continue (e) {
            this.fillCommandByCallContextId(e, _m.Continue);
        }
        continueToHere(e, t) {
            const n = Um.parse(e);
            if (!n) return void Vm(`Error when parsing breakpointId '${e}'`);
            this.fillCommandByCallContextId(t, _m.ContinueToHere);
            const r = this.callContexts.get(t);
            r && (r.continueToBreakpoint = n);
        }
        pauseOnAllExceptions(e) {
            this._pauseOnAllExceptions = e;
        }
        fillCommandByCallContextId(e, t) {
            if (!this.isInSession) return void Vm("Cannot preform debug actions out of a session context");
            const n = this.callContexts.get(e);
            n ? (n.command.commandType = t, n.command.stackLevel = n.stackLevel) : Vm(`No match for callContextId '${e}'`);
        }
        handleFunctionCall(e, t, n) {
            var r;
            const i = e();
            if (!this.isInSession) return i;
            const s = this.callContexts.get(n);
            if (!s) return Vm(`There is no callContext registered with Id '${n}'`), i;
            const a = s.getCallOnStack(s.stackLevel - 1),
                o = null !== (r = null == a ? void 0 : a.currentBreakpoint) && void 0 !== r ? r : null == a ? void 0 : a.elementKey;
            return o && this.handleBreakpoint(o.toString(!0), n, Dm.AtFunctionReturn, Hm.to(i, null == a ? void 0 : a.varBag.callContext, null, null, t)), i;
        }
        handleBreakpoint(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Dm.Normal;
            let r = arguments.length > 3 ? arguments[3] : undefined;
            if (!this.isInSession) return !0;
            const i = Um.parse(e);
            if (!i) return Vm(`Error when parsing breakpointId '${e}'`), !0;
            const s = this.callContexts.get(t);
            if (!s) return Vm(`Trying to handle breakpoint with id '${e}', \n                but there is no callContext registered with Id '${t}'`), !0;
            if (s.refreshLastCallOnStack(i, n, r), !this.allowedModules.get(i.moduleKey)) return pi("Debugger", `Skipping breakpoint '${e}' because breakpoints from app with key '${i.moduleKey}' are to be ignored.`), !0;
            if (s.stopImmediately || this.breakpoints.get(e) && s.command.commandType !== _m.ContinueToHere && n === Dm.Normal) return s.stopImmediately = !1, this.resetStateAndCallDebugger(s, t), !0;
            switch (s.command.commandType) {
                case _m.StepInto:
                    this.resetStateAndCallDebugger(s, t);
                    break;
                case _m.StepOut:
                    s.stackLevel < s.command.stackLevel && this.resetStateAndCallDebugger(s, t);
                    break;
                case _m.StepOver:
                    s.stackLevel <= s.command.stackLevel && n === Dm.Normal && this.resetStateAndCallDebugger(s, t);
                    break;
                case _m.ContinueToHere:
                    i.equals(s.continueToBreakpoint) && n === Dm.Normal && (s.continueToBreakpoint = void 0, this.resetStateAndCallDebugger(s, t));
            }
            return !0;
        }
        resetStateAndCallDebugger(e, t) {
            e.command.resetCommandState(), this.callDebugger(t);
        }
        handleException(t, n) {
            if (!this.isInSession) return;
            if (dt(t)) return;
            const r = this.callContexts.get(n),
                i = ot(t);
            if (!r) return void Vm(`Trying to handle Exception with message '${i}', but there is no callContext registered with Id '${n}'`, _loggerJs.Visibility.Client);
            if (t !== this.exceptionsMap.get(n) && (this.exceptionsMap.set(n, t), this._pauseOnAllExceptions)) {
                this.pausedOnAnException = !0;
                try {
                    this.callDebugger(n);
                } finally {
                    this.pausedOnAnException = !1;
                }
            }
        }
        getExceptionMessage(e) {
            if (!this.getThreadState(e)) return;
            const t = this.exceptionsMap.get(e);
            if (void 0 !== t) return ot(t);
            Vm(`There is no Exception associated to callContext with Id '${e}'`);
        }
        getThreadState(e) {
            if (!this.isInSession) return void Vm("Cannot perform debug actions out of a session context");
            const t = this.callContexts.get(e);
            if (t) return t;
            Vm(`There is no callContext registered with Id '${e}'`);
        }
        getThreadStack(e) {
            const t = this.getThreadState(e);
            if (t) return t.getThreadStack();
        }
        parse(e) {
            return Um.parse(e);
        }
        initialize(e) {
            switch (this.initializationStatus) {
                case Mm.WaitingForClient:
                    return Promise.reject("Debugger already waiting for client initialization");
                case Mm.Prepared:
                    return Promise.reject("Debugger already initialized");
            }
            return void 0 === e && (e = !!Zn("_waitForClient")), gn.register(pn.Debugger, () => this), new Promise((t, n) => {
                e && !this.isInSession ? (this.initializationStatus = Mm.WaitingForClient, this.pendingInitializationHandler = t) : (this.initializationStatus = Mm.Prepared, t());
            });
        }
        registerMetaInfo(e) {
            this.metaInfoMap || (this.metaInfoMap = new Map());
            for (const t in e) e.hasOwnProperty(t) && !this.metaInfoMap.get(t) && this.metaInfoMap.set(t, e[t]);
        }
        getRuntimeExpression(e, t) {
            if (!this.metaInfoMap) return void Vm("MetaInfo not registered yet.");
            const n = this.metaInfoMap.get(e);
            if (n) return n;
            Vm(`There is no mapping defined for variable with the key '${e}', that was evaluated in the context of the action with the key '${t}'.`);
        }
        innerEvaluateVariable(e, t, n, r) {
            const i = this.getThreadState(e);
            if (!i) return;
            const s = i.getCallOnStack(t);
            if (!s) return;
            const a = this.getRuntimeExpression(r, n);
            if (!a) return void Vm(`Failed to get runtime variable expression. CallContextId '${e}', stackLevel '${t}'`);
            let o;
            try {
                o = a.getter(s.varBag, s.varBag.idService);
            } catch (e) {} finally {
                void 0 === o && Vm(`Couldn't evaluate variable with key '${r}', that was evaluated in the context of the action with key: '${n}' stackLevel: '${t}' callContextId: '${e}'.`);
            }
            return o;
        }
        splitPath(e) {
            if (!km.test(e)) return e ? e.split(/[.\[\]]/).filter(e => "" !== e).slice(1) : void 0;
        }
        evaluateVariable(e, t, n, r, i, s) {
            if ("" === r && "$return" === i) {
                const n = this.getThreadState(e);
                if (!n) return;
                const r = n.getCallOnStack(t);
                if (!r) return;
                return r.extraInfo;
            }
            const a = this.innerEvaluateVariable(e, t, n, r);
            if (void 0 === a) return;
            if (km.test(i)) return;
            const o = this.callContexts.get(e),
                l = null == o ? void 0 : o.getCallOnStack(t),
                u = this.getRuntimeExpression(r, n),
                c = this.splitPath(i);
            return Hm.to(a, null == l ? void 0 : l.varBag.callContext, c, s, null == u ? void 0 : u.dataType);
        }
        getRequestHeaders(e) {
            if (!this.isInSession) return;
            const t = this.callContexts.get(e);
            if (!t) return void Vm(`There is no callContext registered with Id '${e}'`);
            const n = {};
            n[xm] = String(e);
            const r = t.command;
            return r && r.commandType === _m.StepInto ? n[Lm] = "true" : t.continueToBreakpoint && r.commandType === _m.ContinueToHere && (n[Om] = String(t.continueToBreakpoint)), n;
        }
        lookupCaseInsensitive(e, t) {
            const n = t.toLowerCase(),
                r = Object.keys(e).find(e => e.toLowerCase() === n);
            return r ? e[r] : void 0;
        }
        processResponseHeaders(e, t) {
            if (!this.isInSession) return;
            const n = this.getThreadState(e);
            if (t && n)
                if ("true" === (this.lookupCaseInsensitive(t, Lm) || "").toLowerCase()) n.stopImmediately = !0;
                else if (this.lookupCaseInsensitive(t, Om)) {
                const e = this.lookupCaseInsensitive(t, Om);
                n.command.commandType = _m.ContinueToHere, n.continueToBreakpoint = Um.parse(e);
            } else n.command.commandType === _m.StepInto && (n.command.commandType = _m.Continue);
        }
        getThreadStartName(e) {
            var t;
            return null === (t = this.getThreadState(e)) || void 0 === t ? void 0 : t.threadStartName;
        }
        setThreadStartName(e, t) {
            if (!this.isInSession) return;
            if (!this.callContexts) return void Vm("No call context dictionary initialized yet");
            if (!this.callContexts.get(e)) return void Vm("No thread state for this context id");
            const n = this.callContexts.get(e);
            n && (n.threadStartName = t);
        }
    }
    var Hm;
    ! function(e) {
        function t(e, t) {
            return void 0 === e && (e = null), {
                value: e,
                type: Po[t]
            };
        }
        e.to = function e(n, r, i) {
            let s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
            let a = arguments.length > 4 ? arguments[4] : undefined;
            const o = Math.max(-1, (null != s ? s : 0) - 1);
            if (n instanceof Zo) {
                const a = n;
                let l = a.getAttributes();
                if (i && i.length > 0) {
                    const t = i[0];
                    if (i = i.slice(1), n instanceof df) {
                        const a = n;
                        if ("HasFetchError" === t) return e(a.hasFetchErrorAttr, r, i, s, Po.Boolean);
                        if ("IsDataFetched" === t) return e(a.isDataFetchedAttr, r, i, s, Po.Boolean);
                    }
                    if (l = l.filter(e => e.name === t), 0 === l.length) return void Vm(`No attribute matching the given path '${t}'.`); {
                        const t = l[0];
                        return e(a[t.attrName], r, i, s, t.dataType);
                    }
                }
                if (0 === s) return t(null, Po.Record);
                const u = {};
                for (const t of l) u[t.name] = e(a[t.attrName], r, i, o, t.dataType);
                if (n instanceof df) {
                    const t = n;
                    delete u.DataFetchStatus, u.IsDataFetched = e(t.isDataFetchedAttr, r, i, s, Po.Boolean), u.HasFetchError = e(t.hasFetchErrorAttr, r, i, s, Po.Boolean);
                }
                return t(u, Po.Record);
            }
            if (n instanceof el) {
                const a = n;
                let l;
                a.constructor.getItemType && (l = a.constructor.getItemType());
                const u = r.iterationContext.getCurrentRowNumber(a);
                if (i && i.length > 0) {
                    const t = i[0];
                    if (i = i.slice(1), "CurrentRowNumber" === t) return e(u, r, i, s, Po.Integer);
                    if ("Current" === t) return e(a.isEmpty ? a.emptyListItem : a.getItem(u), r, i, s, l);
                    if ("Empty" === t) return e(a.isEmpty, r, i, s, Po.Boolean);
                    if ("Length" === t) return e(a.length, r, i, s, Po.Integer); {
                        const n = Bm.exec(t);
                        if (n) {
                            const t = parseInt(n[1], 10);
                            return t >= 0 && t < a.length ? e(a.getItem(t), r, i, s, l) : void Vm(`Index out of bounds '${t}'.`);
                        }
                        return void Vm(`No '${t}' attribute on Type 'List'.`);
                    }
                }
                if (0 === s) return t(null, Po.RecordList);
                const c = {
                    CurrentRowNumber: e(u, r, i, o, Po.Integer),
                    Current: e(a.isEmpty ? a.emptyListItem : a.getItem(u), r, i, o, l),
                    Empty: e(a.isEmpty, r, i, o, Po.Boolean),
                    Length: e(a.length, r, i, o, Po.Integer)
                };
                for (let t = 0; t < a.length; t++) c["[" + t + "]"] = e(a.getItem(t), r, i, o, l);
                return t(c, Po.RecordList);
            }
            if (n instanceof lf) {
                if (0 === s) return t(null, Po.Record);
                const a = n;
                if (i && i.length > 0) {
                    const t = i[0];
                    if (i = i.slice(1), "Id" === t) return e(a.idAttr, r, i, s, Po.Text);
                    if (a instanceof uf) {
                        if ("Valid" === t) return e(a.validAttr, r, i, s, Po.Boolean);
                        if ("ValidationMessage" === t) return e(a.validationMessageAttr, r, i, s, Po.Text);
                    }
                    return void Vm(`No attribute matching the given path '${t}'.`);
                }
                const l = {
                    Id: e(a.idAttr, r, i, o, Po.Text)
                };
                return a instanceof uf && (l.Valid = e(a.validAttr, r, i, o, Po.Boolean), l.ValidationMessage = e(a.validationMessageAttr, r, i, o, Po.Text)), t(l, Po.Record);
            }
            return void 0 !== a ? i && i.length > 0 ? void Vm(`Cannot perform a inner evaluation to a Basic Type. Trying to evaluate '${i[0]}' for a variable of type '${Po[a]}'.`) : function(e, n) {
                switch (n) {
                    case Po.Integer:
                    case Po.Text:
                    case Po.PhoneNumber:
                    case Po.Email:
                    case Po.Boolean:
                        return t(e, n);
                    case Po.LongInteger:
                    case Po.Decimal:
                    case Po.Currency:
                        return t(e.toString(), n);
                    case Po.Date:
                        return t(e.toISODate(), n);
                    case Po.DateTime:
                        return t(e.toString(), n);
                    case Po.Time:
                        return t(e.toISOTime(), n);
                    case Po.BinaryData:
                        return t(e.length, n);
                    case Po.Object:
                        return t(null, n);
                    case Po.Record:
                        return void Vm("Record is not a basic type");
                    case Po.RecordList:
                        return void Vm("RecordList is not a basic type");
                    default:
                        return void Vm(`Unknown data type ${n}`);
                }
            }(n, a) : void Vm("Variable Type didn't match any case. " + typeof n);
        };
    }(Hm || (Hm = {}));
    const jm = "6.20.2";
    Me("client-runtime-core", jm);
    ("undefined" != typeof window ? window : global).OutSystemsDebugger = new class extends zm {
        callDebugger(e) {
            const t = Kt(),
                n = t.callContextId;
            try {
                t.callContextId = e;
                debugger;
            } finally {
                t.callContextId = n;
            }
        }
    }();
    var qm = _exports.DebuggerBase = Object.freeze({
            __proto__: null,
            BreakpointId: Um,
            get CommandType() {
                return _m;
            },
            DebugCommand: Fm,
            DebuggerBase: zm,
            get DebuggerDataConverter() {
                return Hm;
            },
            get InitializationStatus() {
                return Mm;
            },
            LocalState: $m,
            ThreadState: Pm,
            Version: jm
        }),
        Gm = _exports.ClientVariables = Object.freeze({
            __proto__: null
        }),
        Wm = _exports.DebuggerAPI = Object.freeze({
            __proto__: null
        });
    Ne();
    const Km = _exports.Version = "6.20.2";
    Me("client-runtime-core", Km);
});