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
        environmentKey: F,
        environmentName: F,
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
        showWatermark: !1,
        buildServiceVersion: F,
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
        return null !== (e = $.showWatermark) && void 0 !== e && e;
    }

    function ge() {
        var e;
        return null !== (e = $.buildServiceVersion) && void 0 !== e ? e : F;
    }

    function pe() {
        var e;
        return null !== (e = $.clientRuntimeVersion) && void 0 !== e ? e : F;
    }

    function fe() {
        var e;
        return null !== (e = $.useESM) && void 0 !== e && e;
    }

    function me() {
        let {
            applicationHomeModule: e = Y
        } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t, n;
        return `/${null !== (n = null === (t = ("undefined" != typeof window ? window : globalThis).OutSystemsApp) || void 0 === t ? void 0 : t.basePath) && void 0 !== n ? n : e()}/`.replace(/\/(\/)+/gm, "/");
    }

    function ve() {
        let {
            windowLocation: e = window.location,
            applicationHomeModule: t = Y
        } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return `${e.protocol}//${e.host}${me({
      applicationHomeModule: t
    })}`;
    }

    function ye() {
        return $.appVersion;
    }
    var be = _exports.ApplicationInfo = Object.freeze({
        __proto__: null,
        debugUseWebSockets: ne,
        getAppUrl: ve,
        getAppVersion: ye,
        getApplicationKey: V,
        getApplicationName: B,
        getBasePath: me,
        getBuildServiceVersion: ge,
        getClientEntitiesModuleImporter: W,
        getClientEntitiesModules: G,
        getClientRuntimeVersion: pe,
        getDatabaseName: k,
        getDefaultModuleHomeScreenURL: function() {
            const e = Q(),
                t = q(e);
            return t ? `/${null == e ? void 0 : e.moduleName}/${t.screenUrl}` : null;
        },
        getDefaultTransition: ue,
        getEnvironmentKey: function() {
            return $.environmentKey;
        },
        getEnvironmentName: function() {
            return $.environmentName;
        },
        getErrorPageConfig: ce,
        getHomeModuleControllerImporter: ie,
        getHomeModuleControllerName: re,
        getHomeModuleDefinition: Q,
        getHomeModuleImporter: function() {
            return $.homeModuleImporter;
        },
        getHomeModuleKey: X,
        getHomeModuleLanguageResourcesImporter: ae,
        getHomeModuleLanguageResourcesName: se,
        getHomeModuleName: Y,
        getHomeScreen: q,
        getModuleFromKey: j,
        getModules: H,
        getScreenDefinition: function(e, t) {
            for (const n of e.screens)
                if (n.screenUrl === t) return n;
            return null;
        },
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
        showWatermark: he,
        useESM: fe
    });

    function Te(e) {
        if ("undefined" == typeof require) throw new Error("requirejs is not defined");
        return require;
    }

    function we(e) {
        return Te().defined(e);
    }
    const Ee = new Proxy({}, {
            get: (e, t) => {
                var n, r;
                return null === (r = null === (n = Te()) || void 0 === n ? void 0 : n.s) || void 0 === r ? void 0 : r[t];
            }
        }),
        Ie = "$";

    function Ae(e) {
        return e.filter(e => "string" == typeof e).length === e.length;
    }
    const Ne = new class {
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
                        if (Ae(e)) n = e.map(e => {
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

    function Se() {
        fe() || De();
    }

    function De() {
        ! function() {
            var e;
            const t = null !== (e = Ee.contexts) && void 0 !== e ? e : {};
            Object.keys(t).forEach(e => {
                const n = t[e];
                if (!n._osNameToUrlPatched) {
                    const e = n.nameToUrl;
                    n.nameToUrl = function(t, r, i) {
                        return t.indexOf(Ie) > 0 && -1 === t.indexOf("?") && (t = t.split(Ie, 2)[0]), e.apply(n, [t, r, i]);
                    }, n._osNameToUrlPatched = !0;
                }
            });
        }();
    }

    function Re(e) {
        fe() ? Ne.setErrorHandler(e) : function(e) {
            Te().onError = e;
        }(e);
    }

    function Ce(e, t, n) {
        let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : require;
        let i = arguments.length > 4 ? arguments[4] : undefined;
        var s;
        if (fe()) Ne.loadModule(e, t, n, i);
        else if (Ae(e)) r(e, t, n);
        else {
            const e = new Error("A list of module names is required when ESM is switched off. The list of modules to load contains other type of elements.");
            null === (s = null != n ? n : Te().onError) || void 0 === s || s(e);
        }
    }

    function xe(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "scripts";
        if (fe()) Ne.configure(e, t);
        else {
            const r = {
                baseUrl: t,
                paths: {},
                waitSeconds: 30
            };
            if (e) {
                for (const t in e) n = t, (Te().specified(n) || we(t)) && delete e[t];
                r.paths = e;
            }! function(e) {
                Te().config(e);
            }(r), De();
        }
        var n;
    }
    var Le = _exports.RequireManager = Object.freeze({
        __proto__: null,
        configure: xe,
        initialize: Se,
        loadModule: Ce,
        setErrorHandler: Re
    });
    const Oe = new Map(),
        _e = "Client Runtime Packages";
    let Me;

    function Ue(e, t) {
        Me = null, Oe.set(e, t);
    }
    const Fe = _ref => {
        let {
            versionsMap: e = Oe,
            packageKey: t
        } = _ref;
        var n;
        return null !== (n = null == e ? void 0 : e.get(t)) && void 0 !== n ? n : null;
    };
    var $e,
        Pe = _exports.VersionDefinition = Object.freeze({
            __proto__: null,
            clientRuntimeKey: _e,
            getPackageVersion: Fe,
            registerPackage: Ue,
            toObject: function() {
                if (!Me) {
                    const e = {
                        "Client Runtime Packages": ""
                    };
                    Oe.forEach((t, n) => {
                        t && n && (e[_e] += `${n}= ${t};`);
                    }), Me = e;
                }
                return Me;
            }
        });
    ! function(e) {
        e[e.Persistent = 0] = "Persistent", e[e.Session = 1] = "Session";
    }($e || ($e = {}));
    var Ve = $e;
    class Be {
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
    const ke = "$OS_";
    let ze = "OS";

    function He() {
        return ze;
    }

    function je(e) {
        ze = e;
    }
    const qe = "undefined" == typeof window ? void 0 : window.localStorage,
        Ge = "undefined" == typeof window ? void 0 : window.sessionStorage,
        We = e => e === Ve.Persistent ? qe : Ge;
    let Ke = Ye(Ve.Persistent) ? We(Ve.Persistent) : new Be(),
        Je = Ye(Ve.Session) ? We(Ve.Session) : new Be();

    function Ye(e) {
        const t = ke + "test";
        try {
            const n = We(e);
            n.setItem(t, "1");
            const r = "1" === n.getItem(t);
            return n.removeItem(t), r;
        } catch (e) {
            return !1;
        }
    }

    function Xe() {
        return Ke;
    }

    function Qe() {
        return Je;
    }
    const Ze = Object.freeze(Object());
    class et {
        constructor(e, t, n, r) {
            this.storageType = e, this.key = t, this.defaultValue = n, this.getStorageName = () => He(), this.clearCache(), r && (this.getStorageName = r);
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
            return ke + this.getStorageName() + "$" + this.key;
        }
        get storage() {
            return this.storageType === Ve.Persistent ? Xe() : Qe();
        }
        getValue() {
            return this.cachedValue === Ze && (this.cachedValue = this.getValueFromStorage()), this.cachedValue;
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
                if (!((i = this.storageType) === Ve.Persistent && Ke !== qe ? (console.warn("The localStorage is full... Proceding with a static Javascript object"), Ke = new Be(Ke), 1) : i === Ve.Session && Je !== Ge && (console.warn("The sessionStorage is full... Proceding with a static Javascript object"), Je = new Be(Je), 1))) throw e;
                this.storage.setItem(t, n);
            }
            var i;
        }
        clearCache() {
            this.cachedValue = Ze;
        }
    }
    var tt,
        nt = _exports.StorageProvider = Object.freeze({
            __proto__: null,
            DummyStorage: Be,
            StorageObject: et,
            StorageType: Ve,
            getDefaultStorageNamespace: He,
            getPersistentStorage: Xe,
            getSessionStorage: Qe,
            setCustomPersistentStorage: function(e) {
                Ke = e;
            },
            setCustomSessionStorage: function(e) {
                Je = e;
            },
            setDefaultStorageNamespace: je
        });
    class rt {
        constructor(e) {
            this._device = e;
        }
        get device() {
            return this._device;
        }
    }
    class it {
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
                return new rt(function(e) {
                    if (!e) return;
                    return new it("string" == typeof e.platform ? e.platform : void 0, "string" == typeof e.version ? e.version : void 0, "string" == typeof e.manufacturer ? e.manufacturer : void 0, "string" == typeof e.model ? e.model : void 0, "string" == typeof e.uuid ? e.uuid : void 0, "string" == typeof e.serial ? e.serial : void 0, "string" == typeof e.cordova ? e.cordova : void 0, "boolean" == typeof e.isVirtual ? e.isVirtual : void 0);
                }(e.device));
            }(t);
        };
    }(tt || (tt = {}));
    const st = new et(Ve.Persistent, "ClientInfo");
    var at;

    function ot(e, t) {
        let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        return t === at.Exception || e instanceof t && ("" === n || !!e.specificType && e.specificType === n);
    }

    function lt(e) {
        if (void 0 === e) return "";
        if (e instanceof Error) return e.message; {
            const t = e.toString();
            return "[object SQLError]" === t ? e.message.toString() : t;
        }
    }

    function ut(e) {
        return (void 0 !== e.extraStack ? e.extraStack + "\r\n " : "") + (e.stack || "") || "";
    }

    function ct(e) {
        var t, n, r;
        return {
            name: e.name,
            message: lt(e),
            stack: ut(e),
            extraStack: null !== (t = e.extraStack) && void 0 !== t ? t : void 0,
            errorCode: null !== (n = e.errorCode) && void 0 !== n ? n : "OS-CLRT-00000",
            category: null !== (r = e.category) && void 0 !== r ? r : void 0
        };
    }

    function dt(e) {
        return e.name ? e.specificType ? new at[e.name](e.specificType, e.message, e.extraStack, e.errorCode, e.category) : new at[e.name](e.message, e.extraStack, e.errorCode, e.category) : new at.Exception(e.message, e.extraStack, e.errorCode, e.category);
    }

    function ht(e) {
        return ot(e, at.SystemException);
    }

    function gt(e) {
        return ot(e, at.LicensingException);
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
                if (!ot(e, a)) throw e;
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
    }(at || (at = {}));
    var pt = _exports.Exceptions = Object.freeze({
        __proto__: null,
        get Exceptions() {
            return at;
        },
        getException: dt,
        getExceptionInfo: ct,
        getMessage: lt,
        getStack: ut,
        isApplicationOffline: gt,
        isInstanceOf: ot,
        isSystem: ht
    });
    class ft {
        constructor(e) {
            this.returnValue = e;
        }
    }
    const mt = new Object(),
        vt = new Object();

    function yt(e) {
        const t = e;
        return t && "function" == typeof t.then && "function" == typeof t.catch;
    }

    function bt(e, t) {
        switch (t) {
            case vt:
                return e();
            case mt:
                return;
            default:
                return Promise.reject(t);
        }
    }

    function Tt(e) {
        return e() ? Promise.resolve(void 0) : It();
    }

    function wt(e) {
        return new Promise(e);
    }

    function Et(e) {
        return Promise.resolve(e);
    }

    function It() {
        return Promise.reject(mt);
    }

    function At(e) {
        return Nt(e);
    }

    function Nt(e, t) {
        let n, r;
        const i = () => {
                throw r;
            },
            s = () => {
                clearTimeout(t), t = window.setTimeout(i, 0);
            };

        function a(e, a) {
            return r ? a ? (clearTimeout(t), Nt(() => a(r))) : (s(), Nt(i, t)) : Nt(e ? () => e(n) : () => n);
        }
        try {
            n = e();
        } catch (e) {
            r = e, s();
        }
        return yt(n) ? n : {
            then: function(e, t) {
                return a(e, t);
            },
            catch: function(e) {
                return a(void 0, e);
            }
        };
    }

    function St(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e => Promise.reject(e);
        let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : () => Promise.resolve(void 0);
        return At(e).catch(t).then(e => At(n).then(t => null != t ? t : e), e => At(n).then(() => Promise.reject(e)));
    }

    function Dt(e, t) {
        return St(e, t, void 0);
    }

    function Rt(e, t) {
        return St(e, void 0, t);
    }

    function Ct(e, t) {
        return function n() {
            return Tt(e).then(t).then(n, bt.bind(null, n));
        }();
    }
    const xt = Ct.bind(null, () => !0);

    function Lt(e) {
        return e instanceof ft ? e.returnValue : Promise.reject(e);
    }
    var Ot,
        _t = _exports.Flow = Object.freeze({
            __proto__: null,
            breakAsync: It,
            continueAsync: function() {
                return Promise.reject(vt);
            },
            doWhileAsync: function(e, t) {
                function n() {
                    return Tt(e).then(r, bt.bind(null, r));
                }

                function r() {
                    return At(t).then(() => Tt(e)).then(r, bt.bind(null, n));
                }
                return r();
            },
            executeAsyncFlow: function() {
                let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
                return At(e).catch(Lt);
            },
            executeSequence: At,
            forEachAsync: function(e, t) {
                let n = 0;
                return Ct(() => n < e.length, () => {
                    const r = e[n++];
                    return t(r);
                });
            },
            isPromiseCompatible: yt,
            promise: wt,
            resolve: Et,
            returnAsync: function(e) {
                return Promise.reject(new ft(e));
            },
            throwAsync: function(e) {
                return Promise.reject(e);
            },
            tryCatch: Dt,
            tryCatchFinally: St,
            tryFinally: Rt,
            whileAsync: Ct,
            whileTrueAsync: xt
        });
    ! function(e) {
        e[e.No = 0] = "No", e[e.Yes = 1] = "Yes", e[e.YesIfEmpty = 2] = "YesIfEmpty";
    }(Ot || (Ot = {}));
    var Mt,
        Ut = Ot;
    ! function(e) {
        e[e.TEXT = 0] = "TEXT", e[e.BINARY_DATA = 1] = "BINARY_DATA", e[e.BOOLEAN = 2] = "BOOLEAN", e[e.INTEGER = 3] = "INTEGER", e[e.LONGINTEGER = 4] = "LONGINTEGER", e[e.DECIMAL = 5] = "DECIMAL", e[e.DATE_TIME = 6] = "DATE_TIME", e[e.DATE = 7] = "DATE", e[e.TIME = 8] = "TIME", e[e.UNKNOWN = 9] = "UNKNOWN";
    }(Mt || (Mt = {}));
    var Ft,
        $t,
        Pt,
        Vt,
        Bt = Mt;
    ! function(e) {
        var t;
        (t = e.InitializationType || (e.InitializationType = {}))[t.Full = 0] = "Full", t[t.Minimal = 1] = "Minimal";
    }(Ft || (Ft = {})),
    function(e) {
        e.AutoNumber = Ut, e.DBDataType = Bt;
    }($t || ($t = {})),
    function(e) {
        var t;
        (t = e.DataFetchStatus || (e.DataFetchStatus = {}))[t.Fetching = 0] = "Fetching", t[t.Fetched = 1] = "Fetched", t[t.Error = 2] = "Error";
    }(Pt || (Pt = {})),
    function(e) {
        ! function(e) {
            e[e.Info = 0] = "Info", e[e.Success = 1] = "Success", e[e.Warning = 2] = "Warning", e[e.Error = 3] = "Error";
        }(e.FeedbackMessageType || (e.FeedbackMessageType = {}));
    }(Vt || (Vt = {}));
    var kt = _exports.Interfaces = Object.freeze({
        __proto__: null,
        get Application() {
            return Ft;
        },
        get ClientDB() {
            return $t;
        },
        get FeedbackMessage() {
            return Vt;
        },
        get Model() {
            return Pt;
        }
    });

    function zt(e, t) {
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
                }(n) ? "[^".concat(jt(a), "]+?") : "(?:(?!".concat(jt(n), ")[^").concat(jt(a), "])+?");
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

    function Ht(e, t) {
        return function(e, t) {
            void 0 === t && (t = {});
            var n = qt(t),
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
        }(zt(e, t), t);
    }

    function jt(e) {
        return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }

    function qt(e) {
        return e && e.sensitive ? "" : "i";
    }

    function Gt(e, t, n) {
        return function(e, t, n) {
            void 0 === n && (n = {});
            for (var r = n.strict, i = void 0 !== r && r, s = n.start, a = void 0 === s || s, o = n.end, l = void 0 === o || o, u = n.encode, c = void 0 === u ? function(e) {
                    return e;
                } : u, d = n.delimiter, h = void 0 === d ? "/#?" : d, g = n.endsWith, p = "[".concat(jt(void 0 === g ? "" : g), "]|$"), f = "[".concat(jt(h), "]"), m = a ? "^" : "", v = 0, y = e; v < y.length; v++) {
                var b = y[v];
                if ("string" == typeof b) m += jt(c(b));
                else {
                    var T = jt(c(b.prefix)),
                        w = jt(c(b.suffix));
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
            return new RegExp(m, qt(n));
        }(zt(e, n), 0, n);
    }

    function Wt(e, t, n) {
        return e instanceof RegExp ? function(e) {
            return e;
        }(e) : Array.isArray(e) ? function(e, t, n) {
            var r = e.map(function(e) {
                return Wt(e, t, n).source;
            });
            return new RegExp("(?:".concat(r.join("|"), ")"), qt(n));
        }(e, t, n) : Gt(e, 0, n);
    }
    const Kt = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator;
            var t;
            return null !== (t = null == e ? void 0 : e.userAgent) && void 0 !== t ? t : "";
        },
        Jt = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalThis;
            return null != e ? e : t;
        };
    class Yt {
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

    function Xt(e, t) {
        let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        const r = [],
            i = new RegExp(t, "g" + (n ? "i" : ""));
        let s = i.exec(e);
        for (; s;) r.push(new Yt(s, i.lastIndex)), s = i.exec(e);
        return r;
    }

    function Qt(e, t) {
        let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        let r = arguments.length > 3 ? arguments[3] : undefined;
        const i = Xt(e, t, n);
        let s = e,
            a = 0;
        for (let e = 0; e < i.length; e++) {
            const t = i[e],
                n = r(t);
            s = s.substr(0, t.index + a) + n + s.substr(a + t.index + t.length), a += n.length - t.length;
        }
        return s;
    }

    function Zt(e) {
        return e ? e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") : e;
    }
    const en = (e, t, n) => {
            if (t.toLowerCase() === n.toLowerCase()) return e;
            const r = new RegExp(`^${Zt(t)}`, "i");
            return e.replace(r, n);
        },
        tn = (e, t) => `${e}${t}`,
        nn = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
            var t, n;
            return null !== (n = null === (t = null == e ? void 0 : e.location) || void 0 === t ? void 0 : t.href) && void 0 !== n ? n : "";
        },
        rn = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
            var t, n, r;
            return null !== (r = null === (n = null === (t = null == e ? void 0 : e.location) || void 0 === t ? void 0 : t.protocol) || void 0 === n ? void 0 : n.replace(/:/g, "")) && void 0 !== r ? r : "";
        },
        sn = e => e.replace(/([^:]\/)\/+/g, "$1"),
        an = e => e.replace(/((outsystems|https|http):\/\/[^ ]*?)\?[^ ]*/g, "$1");
    var on = _exports.UrlUtils = Object.freeze({
        __proto__: null,
        buildURLFromVersionedResource: tn,
        getCurrentUrl: nn,
        getHttpScheme: rn,
        removeQueryParametersFromUrls: an,
        replaceBasePath: en,
        sanitizeUrl: sn
    });

    function ln(e) {
        return !!(null == e ? void 0 : e.OutSystemsNative);
    }
    const un = "Injector",
        cn = {},
        dn = {};

    function hn(e, t) {
        try {
            fi(un, `Registering ${e} service`);
            const n = t();
            return cn[e] = n, e in dn && dn[e].forEach(t => t(e, n)), !0;
        } catch (t) {
            return vi(un, `Failed to initialize ${e} service: ${t}`), !1;
        }
    }

    function gn(e) {
        return cn[e];
    }
    const pn = _exports.Injector = {
        register: hn,
        unregister: function(e) {
            delete cn[e];
        },
        resolve: gn,
        addRegistrationListener: function(e, t) {
            e in dn ? dn[e].push(t) : dn[e] = [t];
        },
        removeRegistrationListener: function(e, t) {
            e in dn && (dn[e] = dn[e].filter(e => e !== t));
        }
    };
    var fn;
    ! function(e) {
        e.DeviceHelperClassProvider = "DeviceHelperClassProvider", e.ClientVariablesService = "ClientVariablesService", e.TranslationsService = "TranslationsService", e.LocaleService = "LocaleService", e.EntityService = "EntityService", e.GlobalExceptionHandler = "GlobalExceptionHandler", e.SettingsManager = "SettingsManager", e.AuthConfigsManager = "AuthConfigsManager", e.Auth = "Auth", e.HttpClient = "HttpClient", e.UnauthenticatedHttpClient = "UnauthenticatedHttpClient", e.DebuggerHttpClient = "DebuggerHttpClient", e.NonDebuggerHttpClient = "NonDebuggerHttpClient", e.LoggerHttpClient = "LoggerHttpClient", e.NativeStatus = "NativeStatus", e.LifecycleEventsManager = "LifecycleEventsManager", e.Debugger = "Debugger", e.InstrumentationFactory = "InstrumentationFactory";
    }(fn || (_exports.ServiceNames = fn = {}));
    const mn = "NativeStatus";
    class vn {
        constructor() {
            let {
                win: e = window,
                isRunningOnNativeFn: t = Tn,
                deviceReadyPromise: n = Nn
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.cachedReadyValue = null, this.win = e, this.isRunningOnNativeFn = t, this.deviceReadyPromise = n;
        }
        raiseCordovaNotLoadedError() {
            const t = "Running on native but cordova wasn't loaded";
            throw yi(mn, t, "OS-CLRT-00000", void 0, _loggerJs.Visibility.External), new Error(t);
        }
        ensureIsReady() {
            return b(this, void 0, void 0, function*() {
                return null === this.cachedReadyValue ? (fi(mn, "Waiting for 'deviceready' event"), this.isRunningOnNativeFn() ? void 0 === this.win.cordova ? (this.cachedReadyValue = !1, this.raiseCordovaNotLoadedError()) : (yield this.deviceReadyPromise(), this.cachedReadyValue = !0, !0) : (fi(mn, "'deviceready' event wait ignored"), this.cachedReadyValue = !0, !0)) : !!this.cachedReadyValue || this.raiseCordovaNotLoadedError();
            });
        }
    }
    const yn = "Android",
        bn = "iOS",
        Tn = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator;
            return !(!e || !new RegExp("OutSystemsApp", "i").test(e.userAgent));
        },
        wn = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
            var t;
            return null === (t = null == e ? void 0 : e.device) || void 0 === t ? void 0 : t.platform;
        },
        En = function(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Tn;
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;
            return t() && wn(n) === e;
        },
        In = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Tn;
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
            return En(yn, e, t);
        },
        An = function(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
            return !!(null == n ? void 0 : n.addEventListener) && (n.addEventListener(e, t), !0);
        },
        Nn = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
            return new Promise((t, n) => {
                An("deviceready", () => t(), e) || t();
            });
        },
        Sn = () => {
            let e = pn.resolve(fn.NativeStatus);
            return e || (pn.register(fn.NativeStatus, () => new vn()), e = pn.resolve(fn.NativeStatus)), e.ensureIsReady();
        },
        Dn = function(e, t) {
            for (var _len = arguments.length, n = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                n[_key - 2] = arguments[_key];
            }
            return b(void 0, [e, t, ...n], void 0, function(e, t) {
                let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Sn;
                let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : An;
                return function*() {
                    yield n(), r(e, t);
                }();
            });
        },
        Rn = function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : In;
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : navigator;
            return !!e() && (t.app.exitApp(), !0);
        },
        Cn = function() {
            for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                e[_key2] = arguments[_key2];
            }
            return b(void 0, [...e], void 0, function() {
                let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Sn;
                let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : xn;
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
        xn = () => window;
    var Ln = _exports.NativeHelper = Object.freeze({
        __proto__: null,
        addNativeEventListener: Dn,
        ensureNativeReady: Sn,
        exitApp: Rn,
        getNativeOTLogger: Cn,
        getPlatformName: wn,
        isAndroid: In,
        isIOS: function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Tn;
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
            return En(bn, e, t);
        },
        isRunningOnNative: Tn,
        whenDeviceReady: Nn
    });
    const On = e => b(void 0, [e], void 0, function(_ref2) {
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
                        awaitNative: t = Sn
                    } = _ref3;
                    return function*() {
                        if (yield t(), ln(e) && e.OutSystemsNative.Auth) return e.OutSystemsNative.Auth;
                        throw new Error("Could not find the OSAuth plugin.");
                    }();
                }))({
                    w: n,
                    awaitNative: r
                });
                try {
                    return yield s.startFlow(e, t);
                } catch (e) {
                    throw yi("NativeAuthPlugin", null !== (i = e.message) && void 0 !== i ? i : "Error starting the external auth flow", "OS-CLRT-40100", e instanceof Error ? e : void 0), new Error("Error starting the external auth flow");
                }
            }();
        }),
        _n = "Navigation",
        Mn = new RegExp("/([^/]*)"),
        Un = new RegExp(/\/(\/)+/gm),
        Fn = 10,
        $n = 1e3,
        Pn = ["localhost", "10.0.2.2"],
        Vn = "POP",
        Bn = [],
        kn = [],
        zn = new class {
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
    let Hn;

    function jn(e) {
        if (!qn(e)) throw new at.OutOfContextException();
    }

    function qn(e) {
        return !e || !e.isOutOfContext;
    }

    function Gn(e) {
        if (e) throw new at.RedirectOccurredException();
    }

    function Wn(e) {
        kn.push(e);
    }

    function Kn() {
        return kn[kn.length - 1];
    }

    function Jn() {
        return kn.pop();
    }
    let Yn = !1,
        Xn = !1;

    function Qn() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        fi(_n, "Next navigation will force a reload..."), Yn = !0, Xn = e;
    }
    let Zn = () => {
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
    const er = e => {
        if (void 0 === e) return null;
        return pr(window.location.search.substr(1))[e];
    };
    let tr = function(e) {
            let {
                getLocation: t = Zn,
                getBasePath: n = me
            } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            if (!("http:" === e.protocol || "https:" === e.protocol || "outsystems:" === e.protocol)) return !1;
            const r = t().hostname;
            if (r !== ("" !== e.hostname ? e.hostname : r)) return !1;
            const i = Mn.exec(e.pathname);
            if (!i || i.length < 2) return !1;
            return new RegExp(`^${Zt(n())}`, "i").test(`${e.pathname}/`);
        },
        nr = function(e) {
            const t = document.createElement("a");
            return t.href = e, t;
        },
        rr = !1;

    function ir() {
        return rr;
    }
    let sr = function(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Jt();
        t && (e = or(e));
        const i = an(e);
        fi(_n, `Reloading application with url: '${i}' (replace = ${n})`);
        const s = () => {
            n ? r.location.replace(e) : r.location.href = e;
        };
        return rr = !0, wi().then(s).catch(s);
    };

    function ar() {
        return "undefined" != typeof window && window.location.search.indexOf("_ts") >= 0;
    }

    function or(e) {
        const t = `${e.indexOf("?") < 0 ? "?" : "&"}_ts=${new Date().valueOf()}`,
            n = e.indexOf("#");
        return n >= 0 ? [e.slice(0, n), t, e.slice(n)].join("") : `${e}${t}`;
    }

    function lr() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        const t = Nr();
        sr(t, e);
    }

    function ur() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        sr(Zn().href, e, !0);
    }

    function cr(e) {
        return zn.push(e);
    }

    function dr(e) {
        zn.remove(e);
    }

    function hr(e) {
        Hn = e;
    }
    const gr = function(e) {
        let t,
            n = !1,
            r = "",
            i = e;
        const s = -1 !== e.indexOf(":") || 0 === e.indexOf("/"),
            a = i.indexOf("#"); -
        1 !== a && (t = i.substr(a + 1).trim(), i = i.substr(0, a));
        const o = i.indexOf("?");
        if (-1 !== o && (r = i.substr(o + 1).trim(), i = i.substr(0, o)), s) {
            const e = nr(i);
            n = tr(e), n && (i = e.pathname);
        } else i = function(e) {
            return Nr(me(), e);
        }(i), n = !0;
        return {
            url: e,
            isInternal: n,
            path: i,
            queryParams: pr(r),
            hash: t
        };
    };

    function pr(e) {
        const t = {};
        return e.length > 0 && e.split("&").forEach(e => {
            const n = e.split("=");
            if (2 === n.length) {
                const e = fr(n[0]),
                    r = fr(n[1]);
                t[e] = r;
            }
        }), t;
    }

    function fr(e) {
        return decodeURIComponent(e.replace(/\+/g, " "));
    }

    function mr(e, t, n) {
        return t.replace(/\/$/, "") === e || n.screens.some(n => Wt(Nr(t, n.screenUrl)).test(e));
    }

    function vr() {
        de() && window.stop && "complete" === document.readyState && (fi(_n, "Stopping all currently pending resources."), window.stop());
    }

    function yr(t, n) {
        let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        let i = arguments.length > 3 ? arguments[3] : undefined;
        let s = arguments.length > 4 ? arguments[4] : undefined;
        if (jn(r), function(t) {
                const n = new Date().getTime(),
                    r = n - $n;
                for (; Bn.length > 0 && Bn[0].timestamp < r;) Bn.shift();
                if (Bn.reduce(function(e, n) {
                        return n.url === t ? e + 1 : e;
                    }, 0) < Fn) return Bn.push({
                    timestamp: n,
                    url: t
                }), !1; {
                    const n = an(t);
                    return mi(_n, `Identified a recursive navigation to '${n}'.`, _loggerJs.Visibility.Internal), !0;
                }
            }(t)) throw Error("Too many redirects.");
        i || vr();
        const a = gr(t);
        if (kn && Kn().goTo && a.isInternal) Kn().goTo(a, n, s);
        else {
            if (Tn() && Yr({
                    url: t
                })) return function(e) {
                return b(this, void 0, void 0, function*() {
                    var t, n, r;
                    const i = null !== (t = e.queryParams.redirect_uri) && void 0 !== t ? t : e.queryParams.post_logout_redirect_uri;
                    if (!i) throw new Error("Can't perform an external login without a redirect URI");
                    const s = yield On({
                            url: e.url,
                            redirectUri: i
                        }),
                        [a] = i.split("?"),
                        o = me(),
                        l = null !== (r = null === (n = a.match(new RegExp(`${o}.*`))) || void 0 === n ? void 0 : n[0]) && void 0 !== r ? r : "";
                    sr(s ? `${l}?${s}` : l);
                });
            }(a);
            sr(t);
        }
        Gn(i);
    }

    function br(e, t, n) {
        jn(t), n || vr(), kn && Kn().goBack ? Kn().goBack(e) : window.history.back(), Gn(n);
    }

    function Tr(e, t, n) {
        jn(t), n || vr(), kn && Kn().goForward ? Kn().goForward(e) : window.history.forward(), Gn(n);
    }

    function wr(e, t, n) {
        return n + e.substring(t.length);
    }

    function Er() {
        const e = Zn();
        if ("http:" === e.protocol.toLocaleLowerCase()) {
            const t = e.hostname.toLocaleLowerCase();
            if (!Pn.includes(t)) {
                const t = wr(e.href, e.protocol, "https:");
                return sr(t, !1, !0), !0;
            }
            console.warn(_n, `Accessing through http://${t} is not supported. Please access the application using the hostname instead.`);
        }
        return !1;
    }

    function Ir(e) {
        return e.action.toUpperCase() === Vn;
    }

    function Ar(e) {
        return "" === e || null == e;
    }

    function Nr() {
        for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            e[_key3] = arguments[_key3];
        }
        return (0 === e.length ? me() : "/" + e.join("/")).replace(Un, "/");
    }
    var Sr;
    ! function(e) {
        let t = e => e;
        e.setUrlVersionProvider = function(e) {
            t = e;
        }, e.getVersionedUrl = function(e) {
            return t(e);
        };
    }(Sr || (Sr = {}));
    var Dr = _exports.Navigation = Object.freeze({
        __proto__: null,
        NAVIGATE_FROM_HISTORY_ACTION: Vn,
        NAVIGATE_TO_URL_ACTION: "PUSH",
        SCREEN_URL_PART_SEPARATOR: "-",
        get VersionedURL() {
            return Sr;
        },
        addInvalidationSuffixToUrl: or,
        buildApplicationRelativeUrl: Nr,
        changeWindowLocation: sr,
        currentLocationHasTimestamp: ar,
        ensureRequestSecurity: Er,
        forceReloadOnNextNavigation: Qn,
        generateScreenURL: function(e, t, n) {
            let r,
                i = e,
                s = e;
            return "string" == typeof t ? (s = t, r = function(e, t, n) {
                const r = function(e, t) {
                        const n = zt(t);
                        return Object.keys(e).filter(e => !n.some(t => "string" != typeof t && t.name === e)).reduce((t, n) => (t[n] = e[n], t), {});
                    }(null != n ? n : {}, t),
                    i = (s = null != n ? n : {}, a = r, Object.keys(s).filter(e => "" !== s[e] && !(e in a)).reduce((e, t) => (e[t] = s[t], e), {}));
                var s, a;
                return function(e, t) {
                        const n = zt(t),
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
                            if (s && !Ar(e.value)) throw new Error(`Error processing optional parameters on path ${t}. The parameter ${i.name} has an empty value while ${e.name} has a non-empty value. All optional parameters before ${e.name} must have a value when ${e.name} has a value.`);
                            Ar(e.value) && (i = e, s = !0);
                        });
                    }(i, t),
                    function(e, t, n, r) {
                        const i = Object.keys(r).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(r[e])}`).join("&");
                        try {
                            const r = Ht(t, {
                                encode: e => encodeURIComponent(e),
                                validate: !1
                            })(n);
                            return function(e, t) {
                                const n = me(),
                                    r = t.replace(/^\//, ""),
                                    i = Y();
                                return e === i ? `${n}${r}` : `/${e}/${r}`;
                            }(e, `${r}${i.length > 0 ? `?${i}` : ""}`);
                        } catch (n) {
                            const r = new RegExp('^Expected "(.*)" to be a string$', "g").exec(n.message);
                            if (r) {
                                const i = r[1];
                                return void Li({
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
        getCurrentLocation: Zn,
        getLocationFromUrl: nr,
        getNavigationCallbacks: Kn,
        getSearchParameterValue: er,
        getUrlInfo: gr,
        hasPendingReload: ir,
        isValidContext: qn,
        locationReachedFromHistory: Ir,
        navigateBack: br,
        navigateForward: Tr,
        navigateTo: yr,
        onBeforeNavigate: function(e, t) {
            if (! function(e) {
                    var t;
                    if (e && Hn) try {
                        const n = (e, t, n) => yr(e, M(t, O), null, !1, n);
                        return null !== (t = Hn(e, n)) && void 0 !== t && t;
                    } catch (e) {
                        const t = "Error while executing navigation callback";
                        return Li({
                            category: Y(),
                            errorCode: "OS-CLRT-00000",
                            clientMessage: t,
                            internalMessage: t,
                            errorObj: e instanceof Error ? e : void 0
                        }), !1;
                    }
                    return !0;
                }(e.pathname + e.search)) return !1;
            const n = Yn;
            if (Yn && (Yn = !1), t && !zn.isEmpty) {
                return Dt(zn.pop(), e => {
                    yi(Y(), "Error while navigating back without an empty stack", "OS-CLRT-00000", e);
                }), !1;
            }
            const r = Ir(e);
            if (r || n) {
                const t = gr(e.pathname),
                    i = H(),
                    s = me();
                let a;
                if (t.isInternal) {
                    a = !0;
                    for (const e in i)
                        if (i.hasOwnProperty(e)) {
                            const n = t.url.replace(/\/$/, ""),
                                r = i[e];
                            if (mr(n, Nr(s), r) || r.moduleName !== Y() && r.moduleName && mr(n, r.moduleName, r)) {
                                a = !1;
                                break;
                            }
                        }
                } else a = !1;
                if (n || a) {
                    let t;
                    if (a) t = Nr();
                    else {
                        const n = e.search || "";
                        t = s === e.pathname && "" === n ? /\/$/.test(e.pathname) ? e.pathname : `${e.pathname}/` : e.pathname + n;
                    }
                    return sr(t, Xn, r), !a;
                }
            }
            return zn.clear(), !0;
        },
        registerBackNavigationHandler: cr,
        registerNavigationHandler: hr,
        reloadApplication: lr,
        reloadCurrentLocation: ur,
        removeNavigationCallbacks: Jn,
        resetReloadState: function() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            Yn = e, Xn = t;
        },
        setNavigationCallbacks: Wn,
        switchUrlProtocol: wr,
        throwRedirectOccurredExceptionIfNeeded: Gn,
        unregisterBackNavigationHandler: dr,
        urlBelongsToCurrentApplication: tr,
        urlBelongsToPrefix: mr,
        validateContext: jn,
        willReloadInNextNavigation: function() {
            return Yn;
        }
    });

    function Rr() {
        var e;
        const t = window;
        if (null === (e = null == t ? void 0 : t.OutSystemsNative) || void 0 === e ? void 0 : e.ApplicationInfo) return t.OutSystemsNative.ApplicationInfo;
    }
    const Cr = "Authentication",
        xr = "_RedirectLogin",
        Lr = "_RedirectLogout",
        Or = e => b(void 0, [e], void 0, function(_ref4) {
            let {
                path: e,
                params: t = {
                    isRunningOnNative: Tn,
                    getAppUrl: ve,
                    getHost: () => {
                        var e;
                        return null === (e = null === window || void 0 === window ? void 0 : window.location) || void 0 === e ? void 0 : e.host;
                    },
                    getPlatform: () => wn(),
                    getPackageId: () => b(void 0, void 0, void 0, function*() {
                        return (yield function() {
                            for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                                e[_key4] = arguments[_key4];
                            }
                            return b(void 0, [...e], void 0, function() {
                                let {
                                    nativeReady: e = Sn,
                                    nativeApplicationInfo: t = Rr
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
                    getBasePath: me
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
                    return sn(`${a}://${o}/${l}/${u}/${e}`);
                } {
                    const n = null === (a = t.getAppUrl) || void 0 === a ? void 0 : a.call(t);
                    if (!n) throw new Error("Could not get the application url");
                    return sn(`${n}/${e}`);
                }
            }();
        }),
        _r = e => b(void 0, void 0, void 0, function*() {
            return Or({
                path: xr,
                params: e
            });
        }),
        Mr = e => b(void 0, void 0, void 0, function*() {
            return Or({
                path: Lr,
                params: e
            });
        }),
        Ur = e => b(void 0, void 0, void 0, function*() {
            var t, {
                callbackUrl: n = "",
                redirectUrlParams: r,
                redirectUri: i = _r(r),
                authConfigs: s,
                auth: a = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.External, s),
                actionName: l = "getExternalLoginUrl"
            } = void 0 === e ? {} : e;
            try {
                if (fi(Cr, "Retrieving the external login url."), !a) throw Xr(l);
                const e = Qr(l, a),
                    t = yield i;
                return e.getLoginUrl({
                    redirectUri: t,
                    callbackUrl: n
                });
            } catch (e) {
                throw yi(Cr, "Error retrieving the external login url.", "OS-CLRT-40100", e), e;
            }
        }),
        Fr = e => b(void 0, void 0, void 0, function*() {
            var t, {
                callbackUrl: n = "",
                redirectUrlParams: r,
                redirectUri: i = _r(r),
                auth: s = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.External),
                actionName: a = "externalLogin"
            } = void 0 === e ? {} : e;
            try {
                if (fi(Cr, "External login flow started."), !s) throw Xr(a);
                const e = Qr(a, s),
                    t = yield i;
                yield e.login({
                    redirectUri: t,
                    callbackUrl: n,
                    navigationHandler: yr
                });
            } catch (e) {
                throw yi(Cr, "Error in the external login flow.", "OS-CLRT-40100", e), new at.InvalidLoginException("Login Failed", ut(e));
            }
        }),
        $r = e => b(void 0, void 0, void 0, function*() {
            var t,
                n, {
                    username: r,
                    password: i,
                    persistLogin: s,
                    auth: a = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.Builtin),
                    actionName: l = "builtinLogin"
                } = e;
            try {
                if (fi(Cr, "Builtin login flow started."), !a) throw Xr(l);
                return yield Zr(l, a).login({
                    username: r,
                    password: i,
                    persistLogin: s
                });
            } catch (e) {
                throw yi(Cr, "Error in the builtin login flow.", null !== (n = e.errorCode) && void 0 !== n ? n : "OS-CLRT-40100", e), e;
            }
        }),
        Pr = e => b(void 0, void 0, void 0, function*() {
            var t, {
                callbackUrl: n = "",
                redirectUrlParams: r,
                redirectUri: i = Mr(r),
                auth: s = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance(),
                actionName: a = "logout"
            } = void 0 === e ? {} : e;
            try {
                if (fi(Cr, "Logout flow started."), !s) throw Xr(a);
                const e = yield i;
                yield Zr(a, s, "Use GetExternalLogoutURL instead.").logout({
                    redirectUri: e
                });
            } catch (e) {
                throw yi(Cr, "Error in the logout flow.", "OS-CLRT-40100", e), e;
            }
        }),
        Vr = e => b(void 0, void 0, void 0, function*() {
            var t, {
                callbackUrl: n = "",
                redirectUrlParams: r,
                redirectUri: i = Mr(r),
                auth: s = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.External),
                actionName: a = "getExternalLogoutUrl"
            } = void 0 === e ? {} : e;
            try {
                if (fi(Cr, "Retrieving the external logout url."), !s) throw Xr(a);
                const e = yield i;
                return yield Qr(a, s).getLogoutUrl({
                    redirectUri: e,
                    callbackUrl: n
                });
            } catch (e) {
                throw yi(Cr, "Error retrieving the external logout url.", "OS-CLRT-40100", e), e;
            }
        }),
        Br = e => b(void 0, void 0, void 0, function*() {
            var t, {
                auth: n = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance()
            } = void 0 === e ? {} : e;
            try {
                if (fi(Cr, "Refresh flow started."), !n) throw Xr("refreshTokens");
                yield n.refreshTokens();
            } catch (e) {
                throw yi(Cr, "Error in the refresh flow.", "OS-CLRT-40103", e), e;
            }
        }),
        kr = e => {
            var t,
                n, {
                    auth: r = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance()
                } = void 0 === e ? {} : e;
            return null !== (n = null == r ? void 0 : r.getUserId()) && void 0 !== n ? n : "";
        },
        zr = e => {
            var t,
                n, {
                    auth: r = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance()
                } = void 0 === e ? {} : e;
            return null !== (n = null == r ? void 0 : r.isAuthenticated()) && void 0 !== n && n;
        },
        Hr = e => {
            var t, {
                auth: n = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.Builtin),
                actionName: r = "getPasswordComplexityPolicy"
            } = void 0 === e ? {} : e;
            try {
                if (!n) throw Xr(r);
                return Zr(r, n).getPasswordComplexityPolicy();
            } catch (e) {
                throw yi(Cr, "Error getting the password complexity policy", "OS-CLRT-40100", e), e;
            }
        },
        jr = e => {
            var t, {
                password: n,
                auth: r = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.Builtin),
                actionName: i = "validatePasswordComplexity"
            } = e;
            try {
                if (!r) throw Xr("validatePasswordComplexity");
                return Zr(i, r).validatePasswordComplexityPolicy(n);
            } catch (e) {
                throw yi(Cr, "Error validating the password complexity", "OS-CLRT-40100", e), e;
            }
        },
        qr = e => b(void 0, void 0, void 0, function*() {
            var t, {
                username: n,
                resetToken: r,
                newPassword: i,
                auth: s = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.Builtin),
                actionName: a = "finishResetPassword"
            } = e;
            try {
                if (!s) throw Xr(a);
                return yield Zr(a, s).finishResetPassword({
                    username: n,
                    resetToken: r,
                    newPassword: i
                });
            } catch (e) {
                throw yi(Cr, "Error finishing reset password", "OS-CLRT-40100", e), e;
            }
        }),
        Gr = e => {
            var t, {
                auth: n = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance(),
                actionName: r = "isExternalUser"
            } = void 0 === e ? {} : e;
            try {
                if (!n) throw Xr(r);
                return n.isExternalUser();
            } catch (e) {
                throw yi(Cr, "Error determining if user is external", "OS-CLRT-40100", e), e;
            }
        },
        Wr = e => b(void 0, void 0, void 0, function*() {
            var t, {
                username: n,
                password: r,
                temporaryPassword: i,
                auth: s = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.Builtin),
                actionName: a = "finishUserRegistration"
            } = e;
            try {
                if (!s) throw Xr(a);
                return yield Zr(a, s).confirmRegistration({
                    username: n,
                    password: r,
                    code: i
                });
            } catch (e) {
                throw yi(Cr, "Error completing user registration", "OS-CLRT-40100", e), e;
            }
        }),
        Kr = e => b(void 0, void 0, void 0, function*() {
            var t, {
                username: n,
                oldPassword: r,
                newPassword: i,
                auth: s = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.Builtin),
                actionName: a = "changePassword"
            } = e;
            try {
                if (!s) throw Xr("changePassword");
                return yield Zr(a, s).changePassword({
                    username: n,
                    oldPassword: r,
                    newPassword: i
                });
            } catch (e) {
                throw yi(Cr, "Error changing password", "OS-CLRT-40100", e), e;
            }
        }),
        Jr = e => b(void 0, void 0, void 0, function*() {
            var t, {
                auth: n = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance(),
                actionName: r = "getUserProfile"
            } = void 0 === e ? {} : e;
            try {
                if (!n) throw Xr(r);
                return yield n.getUserInfo();
            } catch (e) {
                throw yi(Cr, "Error getting user profile", "OS-CLRT-40100", e), e;
            }
        }),
        Yr = e => {
            var t,
                n, {
                    url: r,
                    auth: i = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance(),
                    actionName: s = "isAuthEndpoint"
                } = e;
            try {
                return null !== (n = null == i ? void 0 : i.isAuthEndpoint(r)) && void 0 !== n && n;
            } catch (e) {
                throw yi(Cr, "Error checking if a url corresponds to an auth endpoint", "OS-CLRT-40100", e), e;
            }
        },
        Xr = t => {
            const n = `Error '${t}': User is not authenticated.`,
                r = new Error(n);
            return yi(Cr, n, "OS-CLRT-40100", r, _loggerJs.Visibility.External), r;
        },
        Qr = (t, n, r) => {
            if (!(e => void 0 !== e.resumeLogin)(n)) {
                const n = `Error '${t}': only supported for external authentication. ${r}`,
                    i = new Error(n);
                throw yi(Cr, n, "OS-CLRT-40100", i, _loggerJs.Visibility.External), i;
            }
            return n;
        },
        Zr = (t, n, r) => {
            if (!(e => void 0 !== e.finishResetPassword)(n)) {
                const n = `Error '${t}': only supported for builtin authentication. ${r}`,
                    i = new Error(n);
                throw yi(Cr, n, "OS-CLRT-40100", i, _loggerJs.Visibility.External), i;
            }
            return n;
        };
    var ei,
        ti = _exports.Authentication = Object.freeze({
            __proto__: null,
            LOGIN_REDIRECT_PATH: xr,
            LOGOUT_REDIRECT_PATH: Lr,
            builtinLogin: $r,
            changePassword: Kr,
            externalLogin: Fr,
            finishResetPassword: qr,
            finishUserRegistration: Wr,
            getExternalLoginUrl: Ur,
            getExternalLogoutUrl: Vr,
            getPasswordComplexityPolicy: Hr,
            getUserId: kr,
            getUserProfile: Jr,
            isAuthEndpoint: Yr,
            isAuthenticated: zr,
            isExternalUser: Gr,
            logout: Pr,
            refreshTokens: Br,
            resetPassword: e => b(void 0, void 0, void 0, function*() {
                var t, {
                    username: n,
                    resetToken: r,
                    newPassword: i,
                    auth: s = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.Builtin),
                    actionName: a = "resetPassword"
                } = e;
                try {
                    if (!s) throw Xr(a);
                    return yield Zr(a, s).resetPassword({
                        username: n,
                        resetToken: r,
                        newPassword: i
                    });
                } catch (e) {
                    throw yi(Cr, "Error resetting password", "OS-CLRT-40100", e), e;
                }
            }),
            resumeLogin: e => b(void 0, void 0, void 0, function*() {
                var t, {
                    url: n,
                    redirectUrlParams: r,
                    redirectUri: i = _r(r),
                    auth: s = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.External),
                    actionName: a = "resumeLogin"
                } = e;
                try {
                    if (fi(Cr, "Login flow resumed."), !s) throw Xr(a);
                    const e = yield i;
                    return yield Qr(a, s).resumeLogin({
                        url: n,
                        redirectUri: e
                    });
                } catch (e) {
                    throw yi(Cr, "Error while resuming login.", "OS-CLRT-40100", e), new at.InvalidLoginException("Login Failed", ut(e));
                }
            }),
            resumeLogout: e => b(void 0, void 0, void 0, function*() {
                var t, {
                    url: n,
                    auth: r = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.External),
                    actionName: i = "resumeLogout"
                } = e;
                try {
                    if (fi(Cr, "Logout flow resumed."), !r) throw Xr("resumeLogout");
                    return yield Qr(i, r).resumeLogout({
                        url: n
                    });
                } catch (e) {
                    throw yi(Cr, "Error while resuming logout.", "OS-CLRT-40100", e), new at.InvalidLoginException("Logout Failed", ut(e));
                }
            }),
            sendResetPasswordEmail: e => b(void 0, void 0, void 0, function*() {
                var t, {
                    username: n,
                    auth: r = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.Builtin),
                    actionName: i = "sendResetPasswordEmail"
                } = e;
                try {
                    if (!r) throw Xr(i);
                    return yield Zr(i, r).sendResetPasswordEmail({
                        username: n
                    });
                } catch (e) {
                    throw yi(Cr, "Error sending reset password email", "OS-CLRT-40100", e), e;
                }
            }),
            updateUser: e => b(void 0, void 0, void 0, function*() {
                var t, {
                    username: n,
                    name: r,
                    pictureUrl: i,
                    auth: s = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance(_authJs.AuthType.Builtin),
                    actionName: a = "updateUser"
                } = e;
                try {
                    if (!s) throw Xr(a);
                    return yield Zr(a, s).updateUser({
                        username: n,
                        name: r,
                        pictureUrl: i
                    });
                } catch (e) {
                    throw yi(Cr, "Error updating user", "OS-CLRT-40100", e), e;
                }
            }),
            validatePasswordComplexity: jr
        });

    function ni() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Jt;
        var t;
        const n = e();
        return (null == n ? void 0 : n.cordova) && (null === (t = null == n ? void 0 : n.navigator) || void 0 === t ? void 0 : t.connection) ? "none" !== n.navigator.connection.type : n.navigator.onLine;
    }

    function ri(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
        t.addEventListener("online", e);
    }! function(e) {
        e.AuthNConfigs = "AuthNConfigs", e.ForceXhrCommunication = "ForceXhrCommunication", e.CanDisableAutoUpgrade = "CanDisableAutoUpgrade", e.LogLevel = "LogLevel", e.EnvironmentKey = "EnvironmentKey", e.TenantID = "TenantID", e.LoggerApiKey = "LoggerApiKey", e.LoggingTagID = "LoggingTagID", e.LoggerSchedulerTimeInterval = "LoggerSchedulerTimeInterval", e.EnableOpenTelemetryTraces = "EnableOpenTelemetryTraces", e.EnableSpanAggregation = "EnableSpanAggregation", e.HealthCheckInterval = "HealthCheckInterval";
    }(ei || (_exports.SettingsNames = ei = {}));
    const ii = {
            HealthCheckInterval: "1800",
            LogLevel: "Information"
        },
        si = "os_default_id",
        ai = "DEV_";

    function oi(e, t) {
        const n = function(e) {
            return Object.entries(e).reduce((e, _ref5) => {
                let [t, n] = _ref5;
                return t.startsWith(ai) && "string" == typeof n && (e[t.replace(ai, "")] = n), e;
            }, {});
        }(t);
        return Object.assign(Object.assign({}, e), n);
    }
    var li;
    const ui = "SettingsManager",
        ci = !1,
        di = {
            Debug: _loggerJs.LogType.Debug,
            Information: _loggerJs.LogType.Info,
            Warning: _loggerJs.LogType.Warning,
            Error: _loggerJs.LogType.Error
        };
    class hi {
        constructor() {
            let {
                getBasePath: e,
                httpClient: t = pn.resolve(fn.UnauthenticatedHttpClient),
                getAppKey: n = V,
                initialSettings: r = ii,
                settingsHash: i = "",
                overrideStorage: s = sessionStorage,
                cacheName: a = `${n()}-clientsettings`,
                cacheStorage: o = localStorage,
                onSettingsUpdated: l
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            li.set(this, void 0), this.getBasePath = null != e ? e : () => me(), this.httpClient = t, this.settingsValue = oi(r, s), this.settingsHash = i, this.overrideStorage = s, this.cacheName = a, this.cacheStorage = o, w(this, li, l, "f");
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
                            const i = oi(r, this.overrideStorage);
                            this.settingsValue = Object.assign(Object.assign({}, this.settingsValue), i), this.cacheSettings(r), null === (n = T(this, li, "f")) || void 0 === n || n.call(this, this);
                        } else this.fetchCachedSettings();
                    }
                } catch (e) {
                    yi(ui, `Error retrieving settings from endpoint: ${e.message}`, "OS-CLRT-61001"), this.fetchCachedSettings();
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
                    fi(ui, "Loading client settings from cache");
                    const t = oi(JSON.parse(e), this.overrideStorage);
                    this.settingsValue = Object.assign(Object.assign({}, this.settingsValue), t);
                } else vi(ui, "No settings stored in cache, keeping previous values");
            } catch (e) {
                yi(ui, "Error retrieving settings from cache, keeping previous values", "OS-CLRT-61000", e);
            }
        }
        readString(e) {
            var t;
            return this.settingExists(e) ? null !== (t = this.settingsValue[e]) && void 0 !== t ? t : "" : (fi(ui, `Value for setting ${e} was not found.`), "");
        }
        readNumber(e) {
            var t;
            return this.settingExists(e) ? null !== (t = Number(this.settingsValue[e])) && void 0 !== t ? t : 0 : (fi(ui, `Value for setting ${e} was not found.`), 0);
        }
        readBool(e) {
            var t;
            return this.settingExists(e) ? "true" === (null !== (t = this.settingsValue[e]) && void 0 !== t ? t : "false").toLowerCase() : (fi(ui, `Value for setting ${e} was not found.`), ci);
        }
        readLogLevel() {
            const e = this.settingsValue.LogLevel,
                n = di[e];
            return null != n ? n : _loggerJs.LogType.Info;
        }
    }
    li = new WeakMap();
    const gi = function() {
            for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                e[_key5] = arguments[_key5];
            }
            return b(void 0, [...e], void 0, function() {
                let {
                    isRunningOnNative: e = Tn(),
                    basePath: t = me,
                    buildServiceVersion: n = ge,
                    getUserId: i = kr,
                    getLibVersion: s = Fe,
                    getHttpScheme: a = rn,
                    getUserAgent: o = Kt,
                    getCurrentUrl: l = nn,
                    getNativeLogger: u = Cn,
                    getDatabaseSuffix: c = V,
                    isOnlineMethod: d = ni,
                    httpClient: h = pn.resolve(fn.LoggerHttpClient)
                } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return function*() {
                    try {
                        const g = Object.assign(Object.assign({}, Di(i, s, n)), {
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
                        pn.register(fn.InstrumentationFactory, () => p), yield p.init();
                        const f = di[ii.LogLevel];
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
                            httpClient: h,
                            formatVersion: "v2"
                        });
                        p.useConsoleLoggerTransport(f);
                    } catch (e) {
                        console.error("Error while initializing the logger.", e);
                    }
                }();
            });
        },
        pi = e => b(void 0, [e], void 0, function(_ref6) {
            let {
                version: e,
                getCurrentScreenName: t = () => "",
                applicationName: n = B,
                applicationKey: r = V,
                clientRuntimeVersion: i = pe,
                basePath: o = me,
                getAppVersionMethod: l = ye,
                isWebApplication: u = de,
                usePwaServiceWorkerTracer: c = _settingsJs.FeaturesManager.isEnabled(_settingsJs.FeatureKeys.ServiceWorkerTraces),
                serviceWorkerContainer: d = navigator.serviceWorker,
                settingsManager: h = pn.resolve(fn.SettingsManager),
                instrumentationFactory: g = pn.resolve(fn.InstrumentationFactory),
                httpClient: p = pn.resolve(fn.LoggerHttpClient)
            } = _ref6;
            return function*() {
                try {
                    g || (yield gi(), g = pn.resolve(fn.InstrumentationFactory)), g.setAggregateSpansStatus(null == h ? void 0 : h.readBool("EnableSpanAggregation")), g.setLogLevel(null == h ? void 0 : h.readLogLevel());
                    const f = (null == h ? void 0 : h.readString("LoggingTagID")) || (null == h ? void 0 : h.readString("LoggerApiKey"));
                    g.setTagId(f), g.getTracer().addBaseSpanAttributes({
                        "outsystems.runtime.screen": t
                    });
                    const m = _settingsJs.FeaturesManager.isEnabled(_settingsJs.FeatureKeys.EnableOTLV2TraceFormat) ? "v2" : "v1",
                        v = {
                            "service.name": "ClientRuntime",
                            "service.version": i(),
                            "outsystems.app.name": n(),
                            "outsystems.app.versiontoken": e,
                            "outsystems.app.key": r(),
                            "outsystems.env.key": null == h ? void 0 : h.readString("EnvironmentKey"),
                            "outsystems.tenant.key": null == h ? void 0 : h.readString("TenantID"),
                            "outsystems.app.version": l()
                        };
                    g.setResourceAttributes(v), u() && (null == h ? void 0 : h.readBool("EnableOpenTelemetryTraces")) && (c && void 0 !== d ? g.useServiceWorkerTracerTransport({
                        resourceAttributes: v,
                        collectorBaseUrl: o(),
                        tagId: f,
                        enabled: !0,
                        aggregateSpans: null == h ? void 0 : h.readBool("EnableSpanAggregation"),
                        formatVersion: m
                    }) : g.useOpenTelemetryTracerTransport({
                        resourceAttributes: v,
                        collectorBaseUrl: o(),
                        tagId: f,
                        enabled: !0,
                        httpClient: p,
                        formatVersion: m
                    }));
                    const y = null == h ? void 0 : h.readNumber("LoggerSchedulerTimeInterval");
                    y > 0 && Ii(y, g);
                } catch (e) {
                    console.error("Error while updating the logger configurations.", e);
                }
            }();
        }),
        fi = function(e, t, n, r) {
            for (var _len6 = arguments.length, i = new Array(_len6 > 4 ? _len6 - 4 : 0), _key6 = 4; _key6 < _len6; _key6++) {
                i[_key6 - 4] = arguments[_key6];
            }
            return b(void 0, [e, t, n, r, ...i], void 0, function(e, t, n, r) {
                let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : pn.resolve(fn.InstrumentationFactory);
                return function*() {
                    const s = Ri(e),
                        a = Ci(t);
                    bi(i, null == i ? void 0 : i.logDebug, null != s ? s : "", null != a ? a : "") || (yield null == i ? void 0 : i.logDebug({
                        category: s,
                        message: Ci(t),
                        visibility: n,
                        attributes: r
                    }));
                }();
            });
        },
        mi = function(e, t, n, r) {
            for (var _len7 = arguments.length, i = new Array(_len7 > 4 ? _len7 - 4 : 0), _key7 = 4; _key7 < _len7; _key7++) {
                i[_key7 - 4] = arguments[_key7];
            }
            return b(void 0, [e, t, n, r, ...i], void 0, function(e, t, n, r) {
                let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : pn.resolve(fn.InstrumentationFactory);
                return function*() {
                    bi(i, null == i ? void 0 : i.logInfo, e, t) || (yield null == i ? void 0 : i.logInfo({
                        category: e,
                        message: t,
                        visibility: n,
                        attributes: r
                    }));
                }();
            });
        },
        vi = function(e, t, n, r) {
            for (var _len8 = arguments.length, i = new Array(_len8 > 4 ? _len8 - 4 : 0), _key8 = 4; _key8 < _len8; _key8++) {
                i[_key8 - 4] = arguments[_key8];
            }
            return b(void 0, [e, t, n, r, ...i], void 0, function(e, t, n, r) {
                let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : pn.resolve(fn.InstrumentationFactory);
                return function*() {
                    bi(i, null == i ? void 0 : i.logWarning, e, t) || (yield null == i ? void 0 : i.logWarning({
                        category: e,
                        message: t,
                        visibility: n,
                        attributes: r
                    }));
                }();
            });
        },
        yi = function(t, n, r, i, s, a) {
            for (var _len9 = arguments.length, o = new Array(_len9 > 6 ? _len9 - 6 : 0), _key9 = 6; _key9 < _len9; _key9++) {
                o[_key9 - 6] = arguments[_key9];
            }
            return b(void 0, [t, n, r, i, s, a, ...o], void 0, function(t, n, r, i, s, a) {
                let o = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : pn.resolve(fn.InstrumentationFactory);
                return function*() {
                    var l;
                    const {
                        error: u,
                        message: c
                    } = xi(n, i);
                    if (!bi(o, null == o ? void 0 : o.logError, t, null != c ? c : "")) {
                        const n = ("OS-CLRT-00000" === r || null == r) && null !== (l = u.errorCode) && void 0 !== l ? l : r;
                        t = null != t ? t : u.category, ot(u, at.UserException) && (s = _loggerJs.Visibility.Client), yield null == o ? void 0 : o.logError({
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
        bi = (e, t, n, r) => (!e && _settingsJs.FeaturesManager.isEnabled(_settingsJs.FeatureKeys.NoInstrumentationFactoryLogs) ? console.warn(`No instrumentation factory: ${n} - ${r}`) : !t && _settingsJs.FeaturesManager.isEnabled(_settingsJs.FeatureKeys.NoInstrumentationFactoryLogs) && console.warn(`Factory function not defined: ${n} - ${r}`), !e || !t),
        Ti = function() {
            for (var _len10 = arguments.length, e = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
                e[_key10] = arguments[_key10];
            }
            return b(void 0, [...e], void 0, function() {
                let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : pn.resolve(fn.InstrumentationFactory);
                return function*() {
                    yield null == e ? void 0 : e.flushInstrumentationData();
                }();
            });
        },
        wi = function() {
            for (var _len11 = arguments.length, e = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
                e[_key11] = arguments[_key11];
            }
            return b(void 0, [...e], void 0, function() {
                let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : pn.resolve(fn.InstrumentationFactory);
                return function*() {
                    yield null == e ? void 0 : e.flushLogs();
                }();
            });
        },
        Ei = function(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : pn.resolve(fn.InstrumentationFactory);
            null == t || t.setLogLevel(e);
        },
        Ii = function(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : pn.resolve(fn.InstrumentationFactory);
            null == t || t.setSchedulerTimerInterval(e);
        };

    function Ai(e, t, n, r, i) {
        let s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : pn.resolve(fn.InstrumentationFactory);
        return s ? s.startActiveSpan(e, t, n, r, i) : t(void 0);
    }

    function Ni() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : pn.resolve(fn.InstrumentationFactory);
        const t = null == e ? void 0 : e.getActiveSpan();
        null == t || t.setAttribute(_loggerJs.KnownAttributes.IsNonAggregable, "true");
    }

    function Si(e, t, n, r) {
        let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : pn.resolve(fn.InstrumentationFactory);
        return null == i ? void 0 : i.startSpan(e, t, n, r);
    }
    const Di = (e, t, n) => ({
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
        Ri = e => {
            if (e) {
                if ("string" == typeof e) return e; {
                    const t = e.constructor.name;
                    return "Function" === t ? e.name : t;
                }
            }
        },
        Ci = e => {
            if (e) return "string" == typeof e ? e : e();
        },
        xi = (e, t) => {
            const n = null != t ? t : "string" == typeof e ? new Error(e) : e;
            let r = t && "string" == typeof e ? e : void 0;
            return n.message === r && (r = void 0), {
                error: n,
                message: r
            };
        },
        Li = _ref7 => {
            let {
                category: t,
                errorCode: n,
                clientMessage: r,
                internalMessage: i,
                instrumentationFactory: s = pn.resolve(fn.InstrumentationFactory),
                errorObj: a,
                attributes: o
            } = _ref7;
            return Promise.all([yi(t, r, n, a, _loggerJs.Visibility.Client, o, s), yi(t, i, n, void 0, _loggerJs.Visibility.Internal, o, s)]);
        };
    var Oi = _exports.Logger = Object.freeze({
        __proto__: null,
        clientError: Li,
        debug: fi,
        error: yi,
        flush: Ti,
        flushLogs: wi,
        log: mi,
        registerInstrumentationFactory: gi,
        setActiveSpanAsNonAggregable: Ni,
        setLogLevel: Ei,
        setSchedulerTimerInterval: Ii,
        startActiveSpan: Ai,
        startSpan: Si,
        updateInstrumentationFactory: pi,
        warning: vi
    });
    class _i {
        constructor(e) {
            this.callback = e;
        }
    }
    class Mi extends _i {
        constructor(e) {
            super(e), this.callback = e;
        }
    }
    class Ui extends _i {
        constructor(e) {
            super(e), this.callback = e;
        }
    }
    const Fi = "TxExecutor";
    class $i {
        constructor(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            this.tx = e, this.allowTraces = t, this.chain = [], this.pendingResult = null, this.hasPendingResult = !1, this.pendingError = null, this.hasPendingError = !1, this.parent = null;
        }
        cloneForNext() {
            const e = new $i(this.tx, this.allowTraces);
            return e.parent = this, e;
        }
        andThen(e) {
            return this.hasPendingError || (this.chain.push(new Mi(e)), this.triggerPendingResults()), this;
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
            throw new at.DataBaseException("", `Invalid use of 'extractScalar': the row should have a single column, but found '${t.join("', '")}'`);
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
            const n = $i.queryCount++,
                r = null != t ? t : [];
            return this.traceQuery(n, e, r), this.tx.executeSql(e, t, (e, t) => {
                try {
                    this.continueWithNext(t);
                } catch (t) {
                    this.abortExplicitly(e, t);
                }
            }, (e, t) => (vi(Fi, `SQL command #${n} failed with error ${t.message}`), this.abort(t))), this;
        }
        feed(e) {
            return this.hasPendingResult = !0, this.pendingResult = e, this;
        }
        onError(e) {
            return this.chain.push(new Ui(e)), this.triggerPendingError(), this;
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
            return this.nextCallback(e => e instanceof Ui);
        }
        hasErrorCallback() {
            return this.chain.some(e => e instanceof Ui);
        }
        nextSuccessCallback() {
            return this.nextCallback(e => e instanceof Mi);
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
            if (this.hasPendingResult = !1, e instanceof $i) e.andThen((e, t) => {
                this.continueWithNext(t);
            });
            else if (e instanceof Array && 0 !== e.length && e[0] instanceof $i) {
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
            this.allowTraces && fi(Fi, () => {
                const e = (r || []).map(e => String(e).substring(0, 80));
                return `Executing SQL command #${t}: ${n} with arguments ${e}`;
            }, _loggerJs.Visibility.Client);
        }
        static
        for (e) {
            return new $i(e);
        }
    }
    $i.queryCount = 0;
    const Pi = "SqlDatabase";
    class Vi {
        constructor(e, t) {
            this.dbName = e, this.db = t, this.txCount = 0, this.setDispose();
        }
        setDispose() {
            const e = this.db;
            window && e && e.close && window.addEventListener("unload", () => {
                this.debug(`Closing database ${this.name}`), e.close(() => this.debug(`Database ${this.name} closed successfully`), e => yi("SqlDatabase", `Database ${this.name} failed to close`, "OS-CLRT-60400", e));
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
            return wt((t, a) => {
                let o, l;
                this.debug(`Opening local storage ${r} transaction #${s} on database ${this.name}`, n), i.call(this.db, t => {
                    this.debug(`Executing local storage ${r} transaction #${s} on database ${this.name}`, n);
                    let i = $i.for(t).feed(void 0);
                    return i = n ? i.andThen(e) : i.withoutTraces(e), i.andThen((e, t) => o = t).onError((e, t) => {
                        l = e, t();
                    });
                }, e => {
                    l = l || e;
                    const t = (null == l ? void 0 : l.message) ? l : new Error(l),
                        i = `Rolled back local storage ${r} transaction #${s} on database ${this.name}: ${t.message}`;
                    return n && vi(Pi, i), a(new at.DataBaseException("", t.message.toString())), !0;
                }, () => {
                    this.debug(`Committed local storage ${r} transaction #${s} on database ${this.name}`, n), t(o);
                });
            });
        }
        testConnection() {
            let t = 0;
            return mi(Pi, "Starting to test on database connections. Performing #5 test queries.", _loggerJs.Visibility.Internal), Promise.all(Array.apply(null, {
                length: 5
            }).map((e, n) => new Promise(e => {
                this.executeTransaction(e => e.executeQueryRaw("SELECT 1").onError((e, n) => {
                    ki(e), t++;
                })).catch(e => {
                    ki(e), t++;
                }).then(() => {
                    e();
                });
            }))).then(() => {
                mi(Pi, `Finished tests on database connections. #${5 - t} out of #5 successfull queries.`, _loggerJs.Visibility.Internal);
            });
        }
        debug(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            t && fi(Pi, e);
        }
    }
    class Bi {
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
            return Et();
        }
        executeReadTransaction(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            return Et();
        }
        testConnection() {
            return Promise.resolve();
        }
    }

    function ki(e) {
        yi("Database", "Failed to execute canary query (probably due to zombie transaction)", "OS-CLRT-60407"), "undefined" != typeof SQLError && e instanceof SQLError ? yi("Database", `SQLError ${e.code}: ${e.message}`, "OS-CLRT-60407") : yi("Database", "Error while executing a transaction", "OS-CLRT-60400", e);
    }
    const zi = "Could not open database",
        Hi = "SqlDbProviderClass";
    const ji = new class {
        constructor() {
            this.dbCache = {};
        }
        debug(e) {
            fi(Hi, e);
        }
        asSafeDbName(e) {
            return e || "";
        }
        openDb(e) {
            return e = this.asSafeDbName(e), wt((t, n) => {
                this.dbCache[e] ? t(this.dbCache[e]) : Sn().then(() => {
                    if ("undefined" == typeof window) return n(new at.SystemException("Database is only available in the browser/web view"));
                    const r = window;
                    if (Tn()) {
                        if (r.sqlitePlugin) {
                            this.debug(`Opening database '${e}'`);
                            try {
                                r.sqlitePlugin.openDatabase({
                                    name: e,
                                    location: "default"
                                }, r => {
                                    r ? (this.debug(`Database '${e}' opened successfully`), this.dbCache[e] = new Vi(e, r), t(this.dbCache[e])) : (vi(Hi, `Error opening database '${e}'`), n(new at.OpenDatabaseException(`${zi} '${e}'`)));
                                }, t => {
                                    vi(Hi, `Error opening database '${e}' : ${t.message}`), n(new at.OpenDatabaseException(`${zi} '${e}': ${t.message.toString()}`));
                                });
                            } catch (t) {
                                n(new at.OpenDatabaseException(`${zi} '${e}': ${t.message.toString()}`));
                            }
                        } else n(new at.OpenDatabaseException("No database driver available"));
                    } else if (r.openDatabase) try {
                        this.debug(`Opening database '${e}'`);
                        const i = r.openDatabase(e, "1.0", e, 5242880);
                        i ? (this.debug(`Database '${e}' opened successfully`), this.dbCache[e] = new Vi(e, i), t(this.dbCache[e])) : (vi(Hi, `Error opening database '${e}'`), n(new at.OpenDatabaseException(`${zi} '${e}'`)));
                    } catch (t) {
                        n(new at.OpenDatabaseException(`${zi} '${e}': ${t.message.toString()}`));
                    } else {
                        const e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                            t = !!r.chrome,
                            i = "Your app requires native access to a Local Storage database that is not available in your browser.\n\nPlease test your app in your mobile device" + (e || t ? "" : ", or use Google Chrome or Safari web browsers") + ".";
                        alert(i), n(new at.SystemException(i));
                    }
                }).catch(n);
            });
        }
        mockDb(e) {
            return Et(new Bi(e));
        }
    }();
    var qi;
    ! function(e) {
        e[e.Full = 0] = "Full", e[e.Type = 1] = "Type", e[e.Length = 3] = "Length", e[e.Decimals = 5] = "Decimals";
    }(qi || (qi = {}));
    const Gi = new class {
        tableExists(e, t) {
            return e.executeReadTransaction(e => e.executeScalar("SELECT COUNT(*) FROM sqlite_master WHERE type = 'table' AND name = UPPER(?)", [t]).andThen((e, t) => 0 !== t));
        }
        columnExists(e, t, n) {
            return e.executeReadTransaction(e => e.executeScalar(`SELECT "${t}"."${n}" FROM "${t}" LIMIT 1`)).then(() => !0).catch(() => !1);
        }
        dbTypeFromSchemaType(e) {
            switch ((e = e || "").toUpperCase()) {
                case "INTEGER":
                    return $t.DBDataType.INTEGER;
                case "BIGINT":
                    return $t.DBDataType.LONGINTEGER;
                case "REAL":
                    return $t.DBDataType.DECIMAL;
                case "BOOLEAN":
                    return $t.DBDataType.BOOLEAN;
                case "TEXT":
                    return $t.DBDataType.TEXT;
                case "DATE":
                    return $t.DBDataType.DATE;
                case "TIME":
                    return $t.DBDataType.TIME;
                case "DATETIME":
                    return $t.DBDataType.DATE_TIME;
                case "BLOB":
                    return $t.DBDataType.BINARY_DATA;
                default:
                    return $t.DBDataType.UNKNOWN;
            }
        }
        pragmaToTableInfo(e, t, n) {
            return {
                tableName: e,
                idIsAutoNumber: (t = t || "").search(/INTEGER PRIMARY KEY AUTOINCREMENT/i) >= 0 ? $t.AutoNumber.YesIfEmpty : $t.AutoNumber.No,
                attributes: n.map(e => {
                    const t = Xt(e.type, "^([a-z]+)(\\(([0-9]+)(\\,([0-9]+))?\\))?$", !0).shift();
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
                case $t.DBDataType.INTEGER:
                case $t.DBDataType.LONGINTEGER:
                case $t.DBDataType.TEXT:
                    return !0;
                default:
                    return !1;
            }
        }
        introspectTableInfo(e, t) {
            if (!Tn()) return e.feed(null);
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
    var Wi,
        Ki,
        Ji = 9e15,
        Yi = 1e9,
        Xi = "0123456789abcdef",
        Qi = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
        Zi = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
        es = {
            precision: 20,
            rounding: 4,
            modulo: 1,
            toExpNeg: -7,
            toExpPos: 21,
            minE: -Ji,
            maxE: Ji,
            crypto: !1
        },
        ts = !0,
        ns = "[DecimalError] ",
        rs = ns + "Invalid argument: ",
        is = ns + "Precision limit exceeded",
        ss = ns + "crypto unavailable",
        as = "[object Decimal]",
        os = Math.floor,
        ls = Math.pow,
        us = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        cs = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        ds = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        hs = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        gs = 1e7,
        ps = 7,
        fs = Qi.length - 1,
        ms = Zi.length - 1,
        vs = {
            toStringTag: as
        };

    function ys(e) {
        var t,
            n,
            r,
            i = e.length - 1,
            s = "",
            a = e[0];
        if (i > 0) {
            for (s += a, t = 1; t < i; t++) r = e[t] + "", (n = ps - r.length) && (s += Cs(n)), s += r;
            a = e[t], (n = ps - (r = a + "").length) && (s += Cs(n));
        } else if (0 === a) return "0";
        for (; a % 10 == 0;) a /= 10;
        return s + a;
    }

    function bs(e, t, n) {
        if (e !== ~~e || e < t || e > n) throw Error(rs + e);
    }

    function Ts(e, t, n, r) {
        var i, s, a, o;
        for (s = e[0]; s >= 10; s /= 10) --t;
        return --t < 0 ? (t += ps, i = 0) : (i = Math.ceil((t + 1) / ps), t %= ps), s = ls(10, ps - t), o = e[i] % s | 0, null == r ? t < 3 ? (0 == t ? o = o / 100 | 0 : 1 == t && (o = o / 10 | 0), a = n < 4 && 99999 == o || n > 3 && 49999 == o || 5e4 == o || 0 == o) : a = (n < 4 && o + 1 == s || n > 3 && o + 1 == s / 2) && (e[i + 1] / s / 100 | 0) == ls(10, t - 2) - 1 || (o == s / 2 || 0 == o) && !(e[i + 1] / s / 100 | 0) : t < 4 ? (0 == t ? o = o / 1e3 | 0 : 1 == t ? o = o / 100 | 0 : 2 == t && (o = o / 10 | 0), a = (r || n < 4) && 9999 == o || !r && n > 3 && 4999 == o) : a = ((r || n < 4) && o + 1 == s || !r && n > 3 && o + 1 == s / 2) && (e[i + 1] / s / 1e3 | 0) == ls(10, t - 3) - 1, a;
    }

    function ws(e, t, n) {
        for (var r, i, s = [0], a = 0, o = e.length; a < o;) {
            for (i = s.length; i--;) s[i] *= t;
            for (s[0] += Xi.indexOf(e.charAt(a++)), r = 0; r < s.length; r++) s[r] > n - 1 && (void 0 === s[r + 1] && (s[r + 1] = 0), s[r + 1] += s[r] / n | 0, s[r] %= n);
        }
        return s.reverse();
    }
    vs.absoluteValue = vs.abs = function() {
        var e = new this.constructor(this);
        return e.s < 0 && (e.s = 1), Is(e);
    }, vs.ceil = function() {
        return Is(new this.constructor(this), this.e + 1, 2);
    }, vs.clampedTo = vs.clamp = function(e, t) {
        var n = this,
            r = n.constructor;
        if (e = new r(e), t = new r(t), !e.s || !t.s) return new r(NaN);
        if (e.gt(t)) throw Error(rs + t);
        return n.cmp(e) < 0 ? e : n.cmp(t) > 0 ? t : new r(n);
    }, vs.comparedTo = vs.cmp = function(e) {
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
    }, vs.cosine = vs.cos = function() {
        var e,
            t,
            n = this,
            r = n.constructor;
        return n.d ? n.d[0] ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + ps, r.rounding = 1, n = function(e, t) {
            var n, r, i;
            if (t.isZero()) return t;
            r = t.d.length, r < 32 ? i = (1 / Ps(4, n = Math.ceil(r / 3))).toString() : (n = 16, i = "2.3283064365386962890625e-10");
            e.precision += n, t = $s(e, 1, t.times(i), new e(1));
            for (var s = n; s--;) {
                var a = t.times(t);
                t = a.times(a).minus(a).times(8).plus(1);
            }
            return e.precision -= n, t;
        }(r, Vs(r, n)), r.precision = e, r.rounding = t, Is(2 == Ki || 3 == Ki ? n.neg() : n, e, t, !0)) : new r(1) : new r(NaN);
    }, vs.cubeRoot = vs.cbrt = function() {
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
        for (ts = !1, (s = c.s * ls(c.s * c, 1 / 3)) && Math.abs(s) != 1 / 0 ? r = new d(s.toString()) : (n = ys(c.d), (s = ((e = c.e) - n.length + 1) % 3) && (n += 1 == s || -2 == s ? "0" : "00"), s = ls(n, 1 / 3), e = os((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), (r = new d(n = s == 1 / 0 ? "5e" + e : (n = s.toExponential()).slice(0, n.indexOf("e") + 1) + e)).s = c.s), a = (e = d.precision) + 3;;)
            if (u = (l = (o = r).times(o).times(o)).plus(c), r = Es(u.plus(c).times(o), u.plus(l), a + 2, 1), ys(o.d).slice(0, a) === (n = ys(r.d)).slice(0, a)) {
                if ("9999" != (n = n.slice(a - 3, a + 1)) && (i || "4999" != n)) {
                    +n && (+n.slice(1) || "5" != n.charAt(0)) || (Is(r, e + 1, 1), t = !r.times(r).times(r).eq(c));
                    break;
                }
                if (!i && (Is(o, e + 1, 0), o.times(o).times(o).eq(c))) {
                    r = o;
                    break;
                }
                a += 4, i = 1;
            }
        return ts = !0, Is(r, e, d.rounding, t);
    }, vs.decimalPlaces = vs.dp = function() {
        var e,
            t = this.d,
            n = NaN;
        if (t) {
            if (n = ((e = t.length - 1) - os(this.e / ps)) * ps, e = t[e])
                for (; e % 10 == 0; e /= 10) n--;
            n < 0 && (n = 0);
        }
        return n;
    }, vs.dividedBy = vs.div = function(e) {
        return Es(this, new this.constructor(e));
    }, vs.dividedToIntegerBy = vs.divToInt = function(e) {
        var t = this.constructor;
        return Is(Es(this, new t(e), 0, 1, 1), t.precision, t.rounding);
    }, vs.equals = vs.eq = function(e) {
        return 0 === this.cmp(e);
    }, vs.floor = function() {
        return Is(new this.constructor(this), this.e + 1, 3);
    }, vs.greaterThan = vs.gt = function(e) {
        return this.cmp(e) > 0;
    }, vs.greaterThanOrEqualTo = vs.gte = function(e) {
        var t = this.cmp(e);
        return 1 == t || 0 === t;
    }, vs.hyperbolicCosine = vs.cosh = function() {
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
        n = a.precision, r = a.rounding, a.precision = n + Math.max(s.e, s.sd()) + 4, a.rounding = 1, (i = s.d.length) < 32 ? t = (1 / Ps(4, e = Math.ceil(i / 3))).toString() : (e = 16, t = "2.3283064365386962890625e-10"), s = $s(a, 1, s.times(t), new a(1), !0);
        for (var l, u = e, c = new a(8); u--;) l = s.times(s), s = o.minus(l.times(c.minus(l.times(c))));
        return Is(s, a.precision = n, a.rounding = r, !0);
    }, vs.hyperbolicSine = vs.sinh = function() {
        var e,
            t,
            n,
            r,
            i = this,
            s = i.constructor;
        if (!i.isFinite() || i.isZero()) return new s(i);
        if (t = s.precision, n = s.rounding, s.precision = t + Math.max(i.e, i.sd()) + 4, s.rounding = 1, (r = i.d.length) < 3) i = $s(s, 2, i, i, !0);
        else {
            e = (e = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | e, i = $s(s, 2, i = i.times(1 / Ps(5, e)), i, !0);
            for (var a, o = new s(5), l = new s(16), u = new s(20); e--;) a = i.times(i), i = i.times(o.plus(a.times(l.times(a).plus(u))));
        }
        return s.precision = t, s.rounding = n, Is(i, t, n, !0);
    }, vs.hyperbolicTangent = vs.tanh = function() {
        var e,
            t,
            n = this,
            r = n.constructor;
        return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 7, r.rounding = 1, Es(n.sinh(), n.cosh(), r.precision = e, r.rounding = t)) : new r(n.s);
    }, vs.inverseCosine = vs.acos = function() {
        var e,
            t = this,
            n = t.constructor,
            r = t.abs().cmp(1),
            i = n.precision,
            s = n.rounding;
        return -1 !== r ? 0 === r ? t.isNeg() ? Ds(n, i, s) : new n(0) : new n(NaN) : t.isZero() ? Ds(n, i + 4, s).times(.5) : (n.precision = i + 6, n.rounding = 1, t = t.asin(), e = Ds(n, i + 4, s).times(.5), n.precision = i, n.rounding = s, e.minus(t));
    }, vs.inverseHyperbolicCosine = vs.acosh = function() {
        var e,
            t,
            n = this,
            r = n.constructor;
        return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, ts = !1, n = n.times(n).minus(1).sqrt().plus(n), ts = !0, r.precision = e, r.rounding = t, n.ln()) : new r(n);
    }, vs.inverseHyperbolicSine = vs.asinh = function() {
        var e,
            t,
            n = this,
            r = n.constructor;
        return !n.isFinite() || n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, ts = !1, n = n.times(n).plus(1).sqrt().plus(n), ts = !0, r.precision = e, r.rounding = t, n.ln());
    }, vs.inverseHyperbolicTangent = vs.atanh = function() {
        var e,
            t,
            n,
            r,
            i = this,
            s = i.constructor;
        return i.isFinite() ? i.e >= 0 ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = s.precision, t = s.rounding, r = i.sd(), Math.max(r, e) < 2 * -i.e - 1 ? Is(new s(i), e, t, !0) : (s.precision = n = r - i.e, i = Es(i.plus(1), new s(1).minus(i), n + e, 1), s.precision = e + 4, s.rounding = 1, i = i.ln(), s.precision = e, s.rounding = t, i.times(.5))) : new s(NaN);
    }, vs.inverseSine = vs.asin = function() {
        var e,
            t,
            n,
            r,
            i = this,
            s = i.constructor;
        return i.isZero() ? new s(i) : (t = i.abs().cmp(1), n = s.precision, r = s.rounding, -1 !== t ? 0 === t ? ((e = Ds(s, n + 4, r).times(.5)).s = i.s, e) : new s(NaN) : (s.precision = n + 6, s.rounding = 1, i = i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan(), s.precision = n, s.rounding = r, i.times(2)));
    }, vs.inverseTangent = vs.atan = function() {
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
            if (u.abs().eq(1) && d + 4 <= ms) return (a = Ds(c, d + 4, h).times(.25)).s = u.s, a;
        } else {
            if (!u.s) return new c(NaN);
            if (d + 4 <= ms) return (a = Ds(c, d + 4, h).times(.5)).s = u.s, a;
        }
        for (c.precision = o = d + 10, c.rounding = 1, e = n = Math.min(28, o / ps + 2 | 0); e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
        for (ts = !1, t = Math.ceil(o / ps), r = 1, l = u.times(u), a = new c(u), i = u; - 1 !== e;)
            if (i = i.times(l), s = a.minus(i.div(r += 2)), i = i.times(l), void 0 !== (a = s.plus(i.div(r += 2))).d[t])
                for (e = t; a.d[e] === s.d[e] && e--;);
        return n && (a = a.times(2 << n - 1)), ts = !0, Is(a, c.precision = d, c.rounding = h, !0);
    }, vs.isFinite = function() {
        return !!this.d;
    }, vs.isInteger = vs.isInt = function() {
        return !!this.d && os(this.e / ps) > this.d.length - 2;
    }, vs.isNaN = function() {
        return !this.s;
    }, vs.isNegative = vs.isNeg = function() {
        return this.s < 0;
    }, vs.isPositive = vs.isPos = function() {
        return this.s > 0;
    }, vs.isZero = function() {
        return !!this.d && 0 === this.d[0];
    }, vs.lessThan = vs.lt = function(e) {
        return this.cmp(e) < 0;
    }, vs.lessThanOrEqualTo = vs.lte = function(e) {
        return this.cmp(e) < 1;
    }, vs.logarithm = vs.log = function(e) {
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
        if (ts = !1, a = Ms(u, o = d + 5), r = t ? Ss(c, o + 10) : Ms(e, o), Ts((l = Es(a, r, o, 1)).d, i = d, h))
            do {
                if (a = Ms(u, o += 10), r = t ? Ss(c, o + 10) : Ms(e, o), l = Es(a, r, o, 1), !s) {
                    +ys(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = Is(l, d + 1, 0));
                    break;
                }
            } while (Ts(l.d, i += 10, h));
        return ts = !0, Is(l, d, h);
    }, vs.minus = vs.sub = function(e) {
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
            return ts ? Is(e, o, l) : e;
        }
        if (n = os(e.e / ps), c = os(g.e / ps), u = u.slice(), s = c - n) {
            for ((d = s < 0) ? (t = u, s = -s, a = h.length) : (t = h, n = c, a = u.length), s > (r = Math.max(Math.ceil(o / ps), a) + 2) && (s = r, t.length = 1), t.reverse(), r = s; r--;) t.push(0);
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
                for (i = r; i && 0 === u[--i];) u[i] = gs - 1;
                --u[i], u[r] += gs;
            }
            u[r] -= h[r];
        }
        for (; 0 === u[--a];) u.pop();
        for (; 0 === u[0]; u.shift()) --n;
        return u[0] ? (e.d = u, e.e = Ns(u, n), ts ? Is(e, o, l) : e) : new p(3 === l ? -0 : 0);
    }, vs.modulo = vs.mod = function(e) {
        var t,
            n = this,
            r = n.constructor;
        return e = new r(e), !n.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || n.d && !n.d[0] ? Is(new r(n), r.precision, r.rounding) : (ts = !1, 9 == r.modulo ? (t = Es(n, e.abs(), 0, 3, 1)).s *= e.s : t = Es(n, e, 0, r.modulo, 1), t = t.times(e), ts = !0, n.minus(t));
    }, vs.naturalExponential = vs.exp = function() {
        return _s(this);
    }, vs.naturalLogarithm = vs.ln = function() {
        return Ms(this);
    }, vs.negated = vs.neg = function() {
        var e = new this.constructor(this);
        return e.s = -e.s, Is(e);
    }, vs.plus = vs.add = function(e) {
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
        if (u = d.d, c = e.d, o = h.precision, l = h.rounding, !u[0] || !c[0]) return c[0] || (e = new h(d)), ts ? Is(e, o, l) : e;
        if (s = os(d.e / ps), r = os(e.e / ps), u = u.slice(), i = s - r) {
            for (i < 0 ? (n = u, i = -i, a = c.length) : (n = c, r = s, a = u.length), i > (a = (s = Math.ceil(o / ps)) > a ? s + 1 : a + 1) && (i = a, n.length = 1), n.reverse(); i--;) n.push(0);
            n.reverse();
        }
        for ((a = u.length) - (i = c.length) < 0 && (i = a, n = c, c = u, u = n), t = 0; i;) t = (u[--i] = u[i] + c[i] + t) / gs | 0, u[i] %= gs;
        for (t && (u.unshift(t), ++r), a = u.length; 0 == u[--a];) u.pop();
        return e.d = u, e.e = Ns(u, r), ts ? Is(e, o, l) : e;
    }, vs.precision = vs.sd = function(e) {
        var t,
            n = this;
        if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e) throw Error(rs + e);
        return n.d ? (t = Rs(n.d), e && n.e + 1 > t && (t = n.e + 1)) : t = NaN, t;
    }, vs.round = function() {
        var e = this,
            t = e.constructor;
        return Is(new t(e), e.e + 1, t.rounding);
    }, vs.sine = vs.sin = function() {
        var e,
            t,
            n = this,
            r = n.constructor;
        return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + ps, r.rounding = 1, n = function(e, t) {
            var n,
                r = t.d.length;
            if (r < 3) return t.isZero() ? t : $s(e, 2, t, t);
            n = (n = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | n, t = t.times(1 / Ps(5, n)), t = $s(e, 2, t, t);
            for (var i, s = new e(5), a = new e(16), o = new e(20); n--;) i = t.times(t), t = t.times(s.plus(i.times(a.times(i).minus(o))));
            return t;
        }(r, Vs(r, n)), r.precision = e, r.rounding = t, Is(Ki > 2 ? n.neg() : n, e, t, !0)) : new r(NaN);
    }, vs.squareRoot = vs.sqrt = function() {
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
        for (ts = !1, 0 == (u = Math.sqrt(+a)) || u == 1 / 0 ? (((t = ys(o)).length + l) % 2 == 0 && (t += "0"), u = Math.sqrt(t), l = os((l + 1) / 2) - (l < 0 || l % 2), r = new c(t = u == 1 / 0 ? "5e" + l : (t = u.toExponential()).slice(0, t.indexOf("e") + 1) + l)) : r = new c(u.toString()), n = (l = c.precision) + 3;;)
            if (r = (s = r).plus(Es(a, s, n + 2, 1)).times(.5), ys(s.d).slice(0, n) === (t = ys(r.d)).slice(0, n)) {
                if ("9999" != (t = t.slice(n - 3, n + 1)) && (i || "4999" != t)) {
                    +t && (+t.slice(1) || "5" != t.charAt(0)) || (Is(r, l + 1, 1), e = !r.times(r).eq(a));
                    break;
                }
                if (!i && (Is(s, l + 1, 0), s.times(s).eq(a))) {
                    r = s;
                    break;
                }
                n += 4, i = 1;
            }
        return ts = !0, Is(r, l, c.rounding, e);
    }, vs.tangent = vs.tan = function() {
        var e,
            t,
            n = this,
            r = n.constructor;
        return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 10, r.rounding = 1, (n = n.sin()).s = 1, n = Es(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0), r.precision = e, r.rounding = t, Is(2 == Ki || 4 == Ki ? n.neg() : n, e, t, !0)) : new r(NaN);
    }, vs.times = vs.mul = function(e) {
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
        for (n = os(c.e / ps) + os(e.e / ps), (l = h.length) < (u = g.length) && (s = h, h = g, g = s, a = l, l = u, u = a), s = [], r = a = l + u; r--;) s.push(0);
        for (r = u; --r >= 0;) {
            for (t = 0, i = l + r; i > r;) o = s[i] + g[r] * h[i - r - 1] + t, s[i--] = o % gs | 0, t = o / gs | 0;
            s[i] = (s[i] + t) % gs | 0;
        }
        for (; !s[--a];) s.pop();
        return t ? ++n : s.shift(), e.d = s, e.e = Ns(s, n), ts ? Is(e, d.precision, d.rounding) : e;
    }, vs.toBinary = function(e, t) {
        return Bs(this, 2, e, t);
    }, vs.toDecimalPlaces = vs.toDP = function(e, t) {
        var n = this,
            r = n.constructor;
        return n = new r(n), void 0 === e ? n : (bs(e, 0, Yi), void 0 === t ? t = r.rounding : bs(t, 0, 8), Is(n, e + n.e + 1, t));
    }, vs.toExponential = function(e, t) {
        var n,
            r = this,
            i = r.constructor;
        return void 0 === e ? n = As(r, !0) : (bs(e, 0, Yi), void 0 === t ? t = i.rounding : bs(t, 0, 8), n = As(r = Is(new i(r), e + 1, t), !0, e + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
    }, vs.toFixed = function(e, t) {
        var n,
            r,
            i = this,
            s = i.constructor;
        return void 0 === e ? n = As(i) : (bs(e, 0, Yi), void 0 === t ? t = s.rounding : bs(t, 0, 8), n = As(r = Is(new s(i), e + i.e + 1, t), !1, e + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
    }, vs.toFraction = function(e) {
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
        if (u = n = new f(1), r = l = new f(0), a = (s = (t = new f(r)).e = Rs(p) - g.e - 1) % ps, t.d[0] = ls(10, a < 0 ? ps + a : a), null == e) e = s > 0 ? t : u;
        else {
            if (!(o = new f(e)).isInt() || o.lt(u)) throw Error(rs + o);
            e = o.gt(t) ? s > 0 ? t : u : o;
        }
        for (ts = !1, o = new f(ys(p)), c = f.precision, f.precision = s = p.length * ps * 2; d = Es(o, t, 0, 1, 1), 1 != (i = n.plus(d.times(r))).cmp(e);) n = r, r = i, i = u, u = l.plus(d.times(i)), l = i, i = t, t = o.minus(d.times(i)), o = i;
        return i = Es(e.minus(n), r, 0, 1, 1), l = l.plus(i.times(u)), n = n.plus(i.times(r)), l.s = u.s = g.s, h = Es(u, r, s, 1).minus(g).abs().cmp(Es(l, n, s, 1).minus(g).abs()) < 1 ? [u, r] : [l, n], f.precision = c, ts = !0, h;
    }, vs.toHexadecimal = vs.toHex = function(e, t) {
        return Bs(this, 16, e, t);
    }, vs.toNearest = function(e, t) {
        var n = this,
            r = n.constructor;
        if (n = new r(n), null == e) {
            if (!n.d) return n;
            e = new r(1), t = r.rounding;
        } else {
            if (e = new r(e), void 0 === t ? t = r.rounding : bs(t, 0, 8), !n.d) return e.s ? n : e;
            if (!e.d) return e.s && (e.s = n.s), e;
        }
        return e.d[0] ? (ts = !1, n = Es(n, e, 0, t, 1).times(e), ts = !0, Is(n)) : (e.s = n.s, n = e), n;
    }, vs.toNumber = function() {
        return +this;
    }, vs.toOctal = function(e, t) {
        return Bs(this, 8, e, t);
    }, vs.toPower = vs.pow = function(e) {
        var t,
            n,
            r,
            i,
            s,
            a,
            o = this,
            l = o.constructor,
            u = +(e = new l(e));
        if (!(o.d && e.d && o.d[0] && e.d[0])) return new l(ls(+o, u));
        if ((o = new l(o)).eq(1)) return o;
        if (r = l.precision, s = l.rounding, e.eq(1)) return Is(o, r, s);
        if ((t = os(e.e / ps)) >= e.d.length - 1 && (n = u < 0 ? -u : u) <= 9007199254740991) return i = xs(l, o, n, r), e.s < 0 ? new l(1).div(i) : Is(i, r, s);
        if ((a = o.s) < 0) {
            if (t < e.d.length - 1) return new l(NaN);
            if (1 & e.d[t] || (a = 1), 0 == o.e && 1 == o.d[0] && 1 == o.d.length) return o.s = a, o;
        }
        return (t = 0 != (n = ls(+o, u)) && isFinite(n) ? new l(n + "").e : os(u * (Math.log("0." + ys(o.d)) / Math.LN10 + o.e + 1))) > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? a / 0 : 0) : (ts = !1, l.rounding = o.s = 1, n = Math.min(12, (t + "").length), (i = _s(e.times(Ms(o, r + n)), r)).d && Ts((i = Is(i, r + 5, 1)).d, r, s) && (t = r + 10, +ys((i = Is(_s(e.times(Ms(o, t + n)), t), t + 5, 1)).d).slice(r + 1, r + 15) + 1 == 1e14 && (i = Is(i, r + 1, 0))), i.s = a, ts = !0, l.rounding = s, Is(i, r, s));
    }, vs.toPrecision = function(e, t) {
        var n,
            r = this,
            i = r.constructor;
        return void 0 === e ? n = As(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (bs(e, 1, Yi), void 0 === t ? t = i.rounding : bs(t, 0, 8), n = As(r = Is(new i(r), e, t), e <= r.e || r.e <= i.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + n : n;
    }, vs.toSignificantDigits = vs.toSD = function(e, t) {
        var n = this.constructor;
        return void 0 === e ? (e = n.precision, t = n.rounding) : (bs(e, 1, Yi), void 0 === t ? t = n.rounding : bs(t, 0, 8)), Is(new n(this), e, t);
    }, vs.toString = function() {
        var e = this,
            t = e.constructor,
            n = As(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
        return e.isNeg() && !e.isZero() ? "-" + n : n;
    }, vs.truncated = vs.trunc = function() {
        return Is(new this.constructor(this), this.e + 1, 1);
    }, vs.valueOf = vs.toJSON = function() {
        var e = this,
            t = e.constructor,
            n = As(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
        return e.isNeg() ? "-" + n : n;
    };
    var Es = function() {
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
            for (l ? (g = 1, c = r.e - i.e) : (l = gs, g = ps, c = os(r.e / g) - os(i.e / g)), D = O.length, N = L.length, y = (v = new C(x)).d = [], d = 0; O[d] == (L[d] || 0); d++);
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
            if (1 == g) v.e = c, Wi = p;
            else {
                for (d = 1, h = y[0]; h >= 10; h /= 10) d++;
                v.e = d + c * g - 1, Is(v, o ? s + v.e + 1 : s, a, p);
            }
            return v;
        };
    }();

    function Is(e, t, n, r) {
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
            if ((s = t - i) < 0) s += ps, a = t, l = (c = d[h = 0]) / ls(10, i - a - 1) % 10 | 0;
            else if ((h = Math.ceil((s + 1) / ps)) >= (o = d.length)) {
                if (!r) break e;
                for (; o++ <= h;) d.push(0);
                c = l = 0, i = 1, a = (s %= ps) - ps + 1;
            } else {
                for (c = o = d[h], i = 1; o >= 10; o /= 10) i++;
                l = (a = (s %= ps) - ps + i) < 0 ? 0 : c / ls(10, i - a - 1) % 10 | 0;
            }
            if (r = r || t < 0 || void 0 !== d[h + 1] || (a < 0 ? c : c % ls(10, i - a - 1)), u = n < 4 ? (l || r) && (0 == n || n == (e.s < 0 ? 3 : 2)) : l > 5 || 5 == l && (4 == n || r || 6 == n && (s > 0 ? a > 0 ? c / ls(10, i - a) : 0 : d[h - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !d[0]) return d.length = 0, u ? (t -= e.e + 1, d[0] = ls(10, (ps - t % ps) % ps), e.e = -t || 0) : d[0] = e.e = 0, e;
            if (0 == s ? (d.length = h, o = 1, h--) : (d.length = h + 1, o = ls(10, ps - s), d[h] = a > 0 ? (c / ls(10, i - a) % ls(10, a) | 0) * o : 0), u)
                for (;;) {
                    if (0 == h) {
                        for (s = 1, a = d[0]; a >= 10; a /= 10) s++;
                        for (a = d[0] += o, o = 1; a >= 10; a /= 10) o++;
                        s != o && (e.e++, d[0] == gs && (d[0] = 1));
                        break;
                    }
                    if (d[h] += o, d[h] != gs) break;
                    d[h--] = 0, o = 1;
                }
            for (s = d.length; 0 === d[--s];) d.pop();
        }
        return ts && (e.e > g.maxE ? (e.d = null, e.e = NaN) : e.e < g.minE && (e.e = 0, e.d = [0])), e;
    }

    function As(e, t, n) {
        if (!e.isFinite()) return Us(e);
        var r,
            i = e.e,
            s = ys(e.d),
            a = s.length;
        return t ? (n && (r = n - a) > 0 ? s = s.charAt(0) + "." + s.slice(1) + Cs(r) : a > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (s = "0." + Cs(-i - 1) + s, n && (r = n - a) > 0 && (s += Cs(r))) : i >= a ? (s += Cs(i + 1 - a), n && (r = n - i - 1) > 0 && (s = s + "." + Cs(r))) : ((r = i + 1) < a && (s = s.slice(0, r) + "." + s.slice(r)), n && (r = n - a) > 0 && (i + 1 === a && (s += "."), s += Cs(r))), s;
    }

    function Ns(e, t) {
        var n = e[0];
        for (t *= ps; n >= 10; n /= 10) t++;
        return t;
    }

    function Ss(e, t, n) {
        if (t > fs) throw ts = !0, n && (e.precision = n), Error(is);
        return Is(new e(Qi), t, 1, !0);
    }

    function Ds(e, t, n) {
        if (t > ms) throw Error(is);
        return Is(new e(Zi), t, n, !0);
    }

    function Rs(e) {
        var t = e.length - 1,
            n = t * ps + 1;
        if (t = e[t]) {
            for (; t % 10 == 0; t /= 10) n--;
            for (t = e[0]; t >= 10; t /= 10) n++;
        }
        return n;
    }

    function Cs(e) {
        for (var t = ""; e--;) t += "0";
        return t;
    }

    function xs(e, t, n, r) {
        var i,
            s = new e(1),
            a = Math.ceil(r / ps + 4);
        for (ts = !1;;) {
            if (n % 2 && ks((s = s.times(t)).d, a) && (i = !0), 0 === (n = os(n / 2))) {
                n = s.d.length - 1, i && 0 === s.d[n] && ++s.d[n];
                break;
            }
            ks((t = t.times(t)).d, a);
        }
        return ts = !0, s;
    }

    function Ls(e) {
        return 1 & e.d[e.d.length - 1];
    }

    function Os(e, t, n) {
        for (var r, i = new e(t[0]), s = 0; ++s < t.length;) {
            if (!(r = new e(t[s])).s) {
                i = r;
                break;
            }
            i[n](r) && (i = r);
        }
        return i;
    }

    function _s(e, t) {
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
        for (null == t ? (ts = !1, l = p) : l = t, o = new h(.03125); e.e > -2;) e = e.times(o), d += 5;
        for (l += r = Math.log(ls(2, d)) / Math.LN10 * 2 + 5 | 0, n = s = a = new h(1), h.precision = l;;) {
            if (s = Is(s.times(e), l, 1), n = n.times(++c), ys((o = a.plus(Es(s, n, l, 1))).d).slice(0, l) === ys(a.d).slice(0, l)) {
                for (i = d; i--;) a = Is(a.times(a), l, 1);
                if (null != t) return h.precision = p, a;
                if (!(u < 3 && Ts(a.d, l - r, g, u))) return Is(a, h.precision = p, g, ts = !0);
                h.precision = l += 10, n = s = o = new h(1), c = 0, u++;
            }
            a = o;
        }
    }

    function Ms(e, t) {
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
        if (null == t ? (ts = !1, c = y) : c = t, m.precision = c += 10, r = (n = ys(f)).charAt(0), !(Math.abs(s = p.e) < 15e14)) return u = Ss(m, c + 2, y).times(s + ""), p = Ms(new m(r + "." + n.slice(1)), c - 10).plus(u), m.precision = y, null == t ? Is(p, y, v, ts = !0) : p;
        for (; r < 7 && 1 != r || 1 == r && n.charAt(1) > 3;) r = (n = ys((p = p.times(e)).d)).charAt(0), g++;
        for (s = p.e, r > 1 ? (p = new m("0." + n), s++) : p = new m(r + "." + n.slice(1)), d = p, l = a = p = Es(p.minus(1), p.plus(1), c, 1), h = Is(p.times(p), c, 1), i = 3;;) {
            if (a = Is(a.times(h), c, 1), ys((u = l.plus(Es(a, new m(i), c, 1))).d).slice(0, c) === ys(l.d).slice(0, c)) {
                if (l = l.times(2), 0 !== s && (l = l.plus(Ss(m, c + 2, y).times(s + ""))), l = Es(l, new m(g), c, 1), null != t) return m.precision = y, l;
                if (!Ts(l.d, c - 10, v, o)) return Is(l, m.precision = y, v, ts = !0);
                m.precision = c += 10, u = a = p = Es(d.minus(1), d.plus(1), c, 1), h = Is(p.times(p), c, 1), i = o = 1;
            }
            l = u, i += 2;
        }
    }

    function Us(e) {
        return String(e.s * e.s / 0);
    }

    function Fs(e, t) {
        var n, r, i;
        for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; 48 === t.charCodeAt(r); r++);
        for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
        if (t = t.slice(r, i)) {
            if (i -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % ps, n < 0 && (r += ps), r < i) {
                for (r && e.d.push(+t.slice(0, r)), i -= ps; r < i;) e.d.push(+t.slice(r, r += ps));
                t = t.slice(r), r = ps - t.length;
            } else r -= i;
            for (; r--;) t += "0";
            e.d.push(+t), ts && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
        } else e.e = 0, e.d = [0];
        return e;
    }

    function $s(e, t, n, r, i) {
        var s,
            a,
            o,
            l,
            u = e.precision,
            c = Math.ceil(u / ps);
        for (ts = !1, l = n.times(n), o = new e(r);;) {
            if (a = Es(o.times(l), new e(t++ * t++), u, 1), o = i ? r.plus(a) : r.minus(a), r = Es(a.times(l), new e(t++ * t++), u, 1), void 0 !== (a = o.plus(r)).d[c]) {
                for (s = c; a.d[s] === o.d[s] && s--;);
                if (-1 == s) break;
            }
            s = o, o = r, r = a, a = s;
        }
        return ts = !0, a.d.length = c + 1, a;
    }

    function Ps(e, t) {
        for (var n = e; --t;) n *= e;
        return n;
    }

    function Vs(e, t) {
        var n,
            r = t.s < 0,
            i = Ds(e, e.precision, 1),
            s = i.times(.5);
        if ((t = t.abs()).lte(s)) return Ki = r ? 4 : 1, t;
        if ((n = t.divToInt(i)).isZero()) Ki = r ? 3 : 2;
        else {
            if ((t = t.minus(n.times(i))).lte(s)) return Ki = Ls(n) ? r ? 2 : 3 : r ? 4 : 1, t;
            Ki = Ls(n) ? r ? 1 : 4 : r ? 3 : 2;
        }
        return t.minus(i).abs();
    }

    function Bs(e, t, n, r) {
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
        if (p ? (bs(n, 1, Yi), void 0 === r ? r = g.rounding : bs(r, 0, 8)) : (n = g.precision, r = g.rounding), e.isFinite()) {
            for (p ? (i = 2, 16 == t ? n = 4 * n - 3 : 8 == t && (n = 3 * n - 2)) : i = t, (a = (c = As(e)).indexOf(".")) >= 0 && (c = c.replace(".", ""), (h = new g(1)).e = c.length - a, h.d = ws(As(h), 10, i), h.e = h.d.length), s = l = (d = ws(c, 10, i)).length; 0 == d[--l];) d.pop();
            if (d[0]) {
                if (a < 0 ? s-- : ((e = new g(e)).d = d, e.e = s, d = (e = Es(e, h, n, r, 0, i)).d, s = e.e, u = Wi), a = d[n], o = i / 2, u = u || void 0 !== d[n + 1], u = r < 4 ? (void 0 !== a || u) && (0 === r || r === (e.s < 0 ? 3 : 2)) : a > o || a === o && (4 === r || u || 6 === r && 1 & d[n - 1] || r === (e.s < 0 ? 8 : 7)), d.length = n, u)
                    for (; ++d[--n] > i - 1;) d[n] = 0, n || (++s, d.unshift(1));
                for (l = d.length; !d[l - 1]; --l);
                for (a = 0, c = ""; a < l; a++) c += Xi.charAt(d[a]);
                if (p) {
                    if (l > 1)
                        if (16 == t || 8 == t) {
                            for (a = 16 == t ? 4 : 3, --l; l % a; l++) c += "0";
                            for (l = (d = ws(c, i, t)).length; !d[l - 1]; --l);
                            for (a = 1, c = "1."; a < l; a++) c += Xi.charAt(d[a]);
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
        } else c = Us(e);
        return e.s < 0 ? "-" + c : c;
    }

    function ks(e, t) {
        if (e.length > t) return e.length = t, !0;
    }

    function zs(e) {
        return new this(e).abs();
    }

    function Hs(e) {
        return new this(e).acos();
    }

    function js(e) {
        return new this(e).acosh();
    }

    function qs(e, t) {
        return new this(e).plus(t);
    }

    function Gs(e) {
        return new this(e).asin();
    }

    function Ws(e) {
        return new this(e).asinh();
    }

    function Ks(e) {
        return new this(e).atan();
    }

    function Js(e) {
        return new this(e).atanh();
    }

    function Ys(e, t) {
        e = new this(e), t = new this(t);
        var n,
            r = this.precision,
            i = this.rounding,
            s = r + 4;
        return e.s && t.s ? e.d || t.d ? !t.d || e.isZero() ? (n = t.s < 0 ? Ds(this, r, i) : new this(0)).s = e.s : !e.d || t.isZero() ? (n = Ds(this, s, 1).times(.5)).s = e.s : t.s < 0 ? (this.precision = s, this.rounding = 1, n = this.atan(Es(e, t, s, 1)), t = Ds(this, s, 1), this.precision = r, this.rounding = i, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(Es(e, t, s, 1)) : (n = Ds(this, s, 1).times(t.s > 0 ? .25 : .75)).s = e.s : n = new this(NaN), n;
    }

    function Xs(e) {
        return new this(e).cbrt();
    }

    function Qs(e) {
        return Is(e = new this(e), e.e + 1, 2);
    }

    function Zs(e, t, n) {
        return new this(e).clamp(t, n);
    }

    function ea(e) {
        if (!e || "object" != typeof e) throw Error(ns + "Object expected");
        var t,
            n,
            r,
            i = !0 === e.defaults,
            s = ["precision", 1, Yi, "rounding", 0, 8, "toExpNeg", -Ji, 0, "toExpPos", 0, Ji, "maxE", 0, Ji, "minE", -Ji, 0, "modulo", 0, 9];
        for (t = 0; t < s.length; t += 3)
            if (n = s[t], i && (this[n] = es[n]), void 0 !== (r = e[n])) {
                if (!(os(r) === r && r >= s[t + 1] && r <= s[t + 2])) throw Error(rs + n + ": " + r);
                this[n] = r;
            }
        if (n = "crypto", i && (this[n] = es[n]), void 0 !== (r = e[n])) {
            if (!0 !== r && !1 !== r && 0 !== r && 1 !== r) throw Error(rs + n + ": " + r);
            if (r) {
                if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw Error(ss);
                this[n] = !0;
            } else this[n] = !1;
        }
        return this;
    }

    function ta(e) {
        return new this(e).cos();
    }

    function na(e) {
        return new this(e).cosh();
    }

    function ra(e, t) {
        return new this(e).div(t);
    }

    function ia(e) {
        return new this(e).exp();
    }

    function sa(e) {
        return Is(e = new this(e), e.e + 1, 3);
    }

    function aa() {
        var e,
            t,
            n = new this(0);
        for (ts = !1, e = 0; e < arguments.length;)
            if ((t = new this(arguments[e++])).d) n.d && (n = n.plus(t.times(t)));
            else {
                if (t.s) return ts = !0, new this(1 / 0);
                n = t;
            }
        return ts = !0, n.sqrt();
    }

    function oa(e) {
        return e instanceof Ra || e && e.toStringTag === as || !1;
    }

    function la(e) {
        return new this(e).ln();
    }

    function ua(e, t) {
        return new this(e).log(t);
    }

    function ca(e) {
        return new this(e).log(2);
    }

    function da(e) {
        return new this(e).log(10);
    }

    function ha() {
        return Os(this, arguments, "lt");
    }

    function ga() {
        return Os(this, arguments, "gt");
    }

    function pa(e, t) {
        return new this(e).mod(t);
    }

    function fa(e, t) {
        return new this(e).mul(t);
    }

    function ma(e, t) {
        return new this(e).pow(t);
    }

    function va(e) {
        var t,
            n,
            r,
            i,
            s = 0,
            a = new this(1),
            o = [];
        if (void 0 === e ? e = this.precision : bs(e, 1, Yi), r = Math.ceil(e / ps), this.crypto) {
            if (crypto.getRandomValues)
                for (t = crypto.getRandomValues(new Uint32Array(r)); s < r;)(i = t[s]) >= 429e7 ? t[s] = crypto.getRandomValues(new Uint32Array(1))[0] : o[s++] = i % 1e7;
            else {
                if (!crypto.randomBytes) throw Error(ss);
                for (t = crypto.randomBytes(r *= 4); s < r;)(i = t[s] + (t[s + 1] << 8) + (t[s + 2] << 16) + ((127 & t[s + 3]) << 24)) >= 214e7 ? crypto.randomBytes(4).copy(t, s) : (o.push(i % 1e7), s += 4);
                s = r / 4;
            }
        } else
            for (; s < r;) o[s++] = 1e7 * Math.random() | 0;
        for (r = o[--s], e %= ps, r && e && (i = ls(10, ps - e), o[s] = (r / i | 0) * i); 0 === o[s]; s--) o.pop();
        if (s < 0) n = 0, o = [0];
        else {
            for (n = -1; 0 === o[0]; n -= ps) o.shift();
            for (r = 1, i = o[0]; i >= 10; i /= 10) r++;
            r < ps && (n -= ps - r);
        }
        return a.e = n, a.d = o, a;
    }

    function ya(e) {
        return Is(e = new this(e), e.e + 1, this.rounding);
    }

    function ba(e) {
        return (e = new this(e)).d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }

    function Ta(e) {
        return new this(e).sin();
    }

    function wa(e) {
        return new this(e).sinh();
    }

    function Ea(e) {
        return new this(e).sqrt();
    }

    function Ia(e, t) {
        return new this(e).sub(t);
    }

    function Aa() {
        var e = 0,
            t = arguments,
            n = new this(t[e]);
        for (ts = !1; n.s && ++e < t.length;) n = n.plus(t[e]);
        return ts = !0, Is(n, this.precision, this.rounding);
    }

    function Na(e) {
        return new this(e).tan();
    }

    function Sa(e) {
        return new this(e).tanh();
    }

    function Da(e) {
        return Is(e = new this(e), e.e + 1, 1);
    }
    vs[Symbol.for("nodejs.util.inspect.custom")] = vs.toString, vs[Symbol.toStringTag] = "Decimal";
    var Ra = vs.constructor = function e(t) {
        var n, r, i;

        function s(e) {
            var t,
                n,
                r,
                i = this;
            if (!(i instanceof s)) return new s(e);
            if (i.constructor = s, oa(e)) return i.s = e.s, void(ts ? !e.d || e.e > s.maxE ? (i.e = NaN, i.d = null) : e.e < s.minE ? (i.e = 0, i.d = [0]) : (i.e = e.e, i.d = e.d.slice()) : (i.e = e.e, i.d = e.d ? e.d.slice() : e.d));
            if ("number" === (r = typeof e)) {
                if (0 === e) return i.s = 1 / e < 0 ? -1 : 1, i.e = 0, void(i.d = [0]);
                if (e < 0 ? (e = -e, i.s = -1) : i.s = 1, e === ~~e && e < 1e7) {
                    for (t = 0, n = e; n >= 10; n /= 10) t++;
                    return void(ts ? t > s.maxE ? (i.e = NaN, i.d = null) : t < s.minE ? (i.e = 0, i.d = [0]) : (i.e = t, i.d = [e]) : (i.e = t, i.d = [e]));
                }
                return 0 * e != 0 ? (e || (i.s = NaN), i.e = NaN, void(i.d = null)) : Fs(i, e.toString());
            }
            if ("string" !== r) throw Error(rs + e);
            return 45 === (n = e.charCodeAt(0)) ? (e = e.slice(1), i.s = -1) : (43 === n && (e = e.slice(1)), i.s = 1), hs.test(e) ? Fs(i, e) : function(e, t) {
                var n, r, i, s, a, o, l, u, c;
                if (t.indexOf("_") > -1) {
                    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), hs.test(t)) return Fs(e, t);
                } else if ("Infinity" === t || "NaN" === t) return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
                if (cs.test(t)) n = 16, t = t.toLowerCase();
                else if (us.test(t)) n = 2;
                else {
                    if (!ds.test(t)) throw Error(rs + t);
                    n = 8;
                }
                for ((s = t.search(/p/i)) > 0 ? (l = +t.slice(s + 1), t = t.substring(2, s)) : t = t.slice(2), a = (s = t.indexOf(".")) >= 0, r = e.constructor, a && (s = (o = (t = t.replace(".", "")).length) - s, i = xs(r, new r(n), s, 2 * s)), s = c = (u = ws(t, n, gs)).length - 1; 0 === u[s]; --s) u.pop();
                return s < 0 ? new r(0 * e.s) : (e.e = Ns(u, c), e.d = u, ts = !1, a && (e = Es(e, i, 4 * o)), l && (e = e.times(Math.abs(l) < 54 ? ls(2, l) : Ra.pow(2, l))), ts = !0, e);
            }(i, e);
        }
        if (s.prototype = vs, s.ROUND_UP = 0, s.ROUND_DOWN = 1, s.ROUND_CEIL = 2, s.ROUND_FLOOR = 3, s.ROUND_HALF_UP = 4, s.ROUND_HALF_DOWN = 5, s.ROUND_HALF_EVEN = 6, s.ROUND_HALF_CEIL = 7, s.ROUND_HALF_FLOOR = 8, s.EUCLID = 9, s.config = s.set = ea, s.clone = e, s.isDecimal = oa, s.abs = zs, s.acos = Hs, s.acosh = js, s.add = qs, s.asin = Gs, s.asinh = Ws, s.atan = Ks, s.atanh = Js, s.atan2 = Ys, s.cbrt = Xs, s.ceil = Qs, s.clamp = Zs, s.cos = ta, s.cosh = na, s.div = ra, s.exp = ia, s.floor = sa, s.hypot = aa, s.ln = la, s.log = ua, s.log10 = da, s.log2 = ca, s.max = ha, s.min = ga, s.mod = pa, s.mul = fa, s.pow = ma, s.random = va, s.round = ya, s.sign = ba, s.sin = Ta, s.sinh = wa, s.sqrt = Ea, s.sub = Ia, s.sum = Aa, s.tan = Na, s.tanh = Sa, s.trunc = Da, void 0 === t && (t = {}), t && !0 !== t.defaults)
            for (i = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < i.length;) t.hasOwnProperty(r = i[n++]) || (t[r] = this[r]);
        return s.config(t), s;
    }(es);
    Qi = new Ra(Qi), Zi = new Ra(Zi);
    var Ca = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function xa(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }
    var La,
        Oa,
        _a = {
            exports: {}
        };
    La = _a,
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
            La.exports ? La.exports = t : (e || (e = "undefined" != typeof self && self && self.self == self ? self : window), noConflict = e.toFormat, t.noConflict = function() {
                return e.toFormat = noConflict, t;
            }, e.toFormat = t);
        }(Ca), xa(_a.exports)(Ra),
        function(e) {
            e[e.roundUp = 0] = "roundUp", e[e.roundDown = 1] = "roundDown", e[e.roundCeil = 2] = "roundCeil", e[e.roundFloor = 3] = "roundFloor", e[e.roundHalfUp = 4] = "roundHalfUp", e[e.roundHalfDown = 5] = "roundHalfDown", e[e.roundHalfEven = 6] = "roundHalfEven", e[e.roundHalfCeil = 7] = "roundHalfCeil", e[e.roundHalfFloor = 8] = "roundHalfFloor";
        }(Oa || (Oa = {}));
    const Ma = Ra.config({
        precision: 30,
        toExpNeg: -1024,
        toExpPos: 1024,
        rounding: Ra.ROUND_HALF_EVEN
    });
    class Ua {
        constructor(e) {
            this.add = this.plus, this.sub = this.minus, this.eq = this.equals, this.lt = this.lessThan, this.lte = this.lessThanOrEqualTo, this.gt = this.greaterThan, this.gte = this.greaterThanOrEqualTo;
            const t = Ua.unwrapInputValue(e);
            this.internalValue = new Ma(t);
        }
        static unwrapInputValue(e) {
            return "string" == typeof e || "number" == typeof e ? e : "internalValue" in e ? e.internalValue : e;
        }
        static max(e, t) {
            const [n, r] = [Ua.unwrapInputValue(e), Ua.unwrapInputValue(t)],
            i = Ma.max(n, r);
            return new Ua(i);
        }
        static min(e, t) {
            const [n, r] = [Ua.unwrapInputValue(e), Ua.unwrapInputValue(t)],
            i = Ma.min(n, r);
            return new Ua(i);
        }
        abs() {
            const e = this.internalValue.abs();
            return new Ua(e);
        }
        neg() {
            const e = this.internalValue.neg();
            return new Ua(e);
        }
        sqrt() {
            const e = this.internalValue.sqrt();
            return new Ua(e);
        }
        trunc() {
            const e = this.internalValue.trunc();
            return new Ua(e);
        }
        round() {
            const e = this.internalValue.round();
            return new Ua(e);
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
            const t = Ua.unwrapInputValue(e),
                n = this.internalValue.plus(t);
            return new Ua(n);
        }
        minus(e) {
            const t = Ua.unwrapInputValue(e),
                n = this.internalValue.minus(t);
            return new Ua(n);
        }
        times(e) {
            const t = Ua.unwrapInputValue(e),
                n = this.internalValue.times(t);
            return new Ua(n);
        }
        div(e) {
            const t = Ua.unwrapInputValue(e),
                n = this.internalValue.div(t);
            return new Ua(n);
        }
        pow(e) {
            const t = Ua.unwrapInputValue(e),
                n = this.internalValue.pow(t);
            return new Ua(n);
        }
        mod(e) {
            const t = Ua.unwrapInputValue(e),
                n = this.internalValue.mod(t);
            return new Ua(n);
        }
        equals(e) {
            const t = Ua.unwrapInputValue(e);
            return this.internalValue.equals(t);
        }
        lessThan(e) {
            const t = Ua.unwrapInputValue(e);
            return this.internalValue.lessThan(t);
        }
        lessThanOrEqualTo(e) {
            const t = Ua.unwrapInputValue(e);
            return this.internalValue.lessThanOrEqualTo(t);
        }
        greaterThan(e) {
            const t = Ua.unwrapInputValue(e);
            return this.internalValue.greaterThan(t);
        }
        greaterThanOrEqualTo(e) {
            const t = Ua.unwrapInputValue(e);
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
            return new Ua(t);
        }
    }
    Ua.rounding = Ma.rounding, Ua.defaultValue = new Ua(0);
    const Fa = {};

    function $a(e, t) {
        const n = Fa[e];
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
        return a.regExp += "$", Fa[e] = a, a;
    }
    class Pa {
        static getDayName(e) {
            return Pa.DayNames[e];
        }
        static getShortDayName(e) {
            return Pa.DayNames[e].slice(0, 3);
        }
        static getMonthName(e) {
            return Pa.MonthNames[e - 1];
        }
        static getShortMonthName(e) {
            return Pa.MonthNames[e - 1].slice(0, 3);
        }
        static get12HourNotation(e) {
            return e < 12 ? "AM" : "PM";
        }
        static getTimezoneInformationFull(e) {
            return e = -e, Pa.getTimezoneSignal(e) + Pa.padLeadingZeros(Math.floor(e / 60).toString(), 2) + ":" + Pa.padLeadingZeros(Math.floor(e % 60).toString(), 2);
        }
        static getTimezoneInformationHoursFull(e) {
            return e = -e, Pa.getTimezoneSignal(e) + Pa.padLeadingZeros(Math.floor(e / 60).toString(), 2);
        }
        static getTimezoneInformationHoursShort(e) {
            return e = -e, Pa.getTimezoneSignal(e) + Math.floor(e / 60);
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
                return $a(e, ["y", "m", "d"]);
            }(e), this.timeFmt = function(e) {
                return $a(e, ["h", "m", "s"]);
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
    Pa.DayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], Pa.MonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    class Va {
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
    class Ba {
        constructor(e, t) {
            this.defaultDateTimeFormats = [new Pa("yyyy-MM-dd", "HH:mm:ss"), new Pa("yyyy-MM-dd", "HH:mm:ss"), new Pa("yyyy/MM/dd", "HH:mm:ss"), new Pa("yyyy.MM.dd", "HH:mm:ss")], this.defaultNumberFmt = t, this.currentNumberFmt = t, this.defaultDateTimeFormats[0] = e;
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
    var ka = _exports.Format = Object.freeze({
        __proto__: null,
        ApplicationFormatInfo: Ba,
        DateTimeFormatInfo: Pa,
        NumberFormatInfo: Va
    });

    function za(e) {
        let t = e.length;
        const n = new Array(t);
        for (; t-- > 0;) n[t] = e[t];
        return n;
    }

    function Ha(e) {
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
    const ja = 128;
    class qa {
        constructor(e, t) {
            if (void 0 !== t) this._values = e, this._lengths = t;
            else if (void 0 !== e) {
                const t = qa.fromJS(e);
                this._values = t._values, this._lengths = t._lengths;
            } else this._values = [], this._lengths = [];
        }
        clear() {
            return new qa();
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
            const i = za(this._values),
                s = this._lengths,
                a = s.length;
            for (; n < a && e >= 0;) {
                if (r < this._lengths[n]) return i[n] = za(i[n]), i[n][r] = t, new qa(i, s);
                r -= s[n], n++;
            }
        }
        push(e) {
            let t,
                n,
                r = this._values.length - 1;
            r < 0 ? (r = 0, t = [
                []
            ], n = [0]) : (t = za(this._values), n = za(this._lengths));
            const i = t[r];
            if (i.length < ja) {
                const s = i.length,
                    a = new Array(s + 1);
                let o = s;
                for (; o-- > 0;) a[o] = i[o];
                a[s] = e, t[r] = a, n[r]++;
            } else {
                const r = [e];
                t.push(r), n.push(1);
            }
            return new qa(t, n);
        }
        insert(e, t) {
            let n = 0,
                r = e;
            const i = za(this._values),
                s = za(this._lengths);
            let a = s.length;
            for (; n < a && r >= 0;) {
                if (r < s[n]) {
                    if (s[n] === ja) {
                        const e = 64,
                            t = ja - e;
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
                    return s[n]++, i[n] = l, new qa(i, s);
                }
                r -= s[n], n++;
            }
            return s.push(1), i.push([t]), new qa(i, s);
        }
        remove(e) {
            let t = 0,
                n = e;
            const r = za(this._lengths),
                i = za(this._values),
                s = r.length;
            for (; t < s && n >= 0;) {
                if (n < r[t]) {
                    const e = --r[t],
                        s = new Array(e);
                    let a = 0,
                        o = 0;
                    for (; a < e;) a === n && o++, s[a++] = i[t][o++];
                    return i[t] = s, 0 === r[t] && (r.splice(t, 1), i.splice(t, 1)), new qa(i, r);
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
            const t = new qa(e),
                n = this._values.concat(t._values),
                r = this._lengths.concat(t._lengths);
            return new qa(n, r);
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
            return new qa(n, t);
        }
        static fromJS(e) {
            const t = 0 | Math.ceil(e.length / ja),
                n = new Array(t),
                r = new Array(t);
            let i = 0,
                s = 0;
            for (let a = 0; a < t; a++) {
                s = e.length - i;
                const t = s > ja ? ja : s;
                r[a] = t, n[a] = new Array(t);
                for (let r = 0; r < t; r++) n[a][r] = e[i + r];
                i += t;
            }
            return new qa(n, r);
        }
    }
    var Ga = _exports.LightImmutable = Object.freeze({
            __proto__: null,
            ImmutableList: qa,
            defineRecordClass: Ha
        }),
        Wa = Ja,
        Ka = null;
    try {
        Ka = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
    } catch (e) {}

    function Ja(e, t, n) {
        this.low = 0 | e, this.high = 0 | t, this.unsigned = !!n;
    }

    function Ya(e) {
        return !0 === (e && e.__isLong__);
    }
    Ja.prototype.__isLong__, Object.defineProperty(Ja.prototype, "__isLong__", {
        value: !0
    }), Ja.isLong = Ya;
    var Xa = {},
        Qa = {};

    function Za(e, t) {
        var n, r, i;
        return t ? (i = 0 <= (e >>>= 0) && e < 256) && (r = Qa[e]) ? r : (n = to(e, (0 | e) < 0 ? -1 : 0, !0), i && (Qa[e] = n), n) : (i = -128 <= (e |= 0) && e < 128) && (r = Xa[e]) ? r : (n = to(e, e < 0 ? -1 : 0, !1), i && (Xa[e] = n), n);
    }

    function eo(e, t) {
        if (isNaN(e)) return t ? co : uo;
        if (t) {
            if (e < 0) return co;
            if (e >= ao) return mo;
        } else {
            if (e <= -oo) return vo;
            if (e + 1 >= oo) return fo;
        }
        return e < 0 ? eo(-e, t).neg() : to(e % so | 0, e / so | 0, t);
    }

    function to(e, t, n) {
        return new Ja(e, t, n);
    }
    Ja.fromInt = Za, Ja.fromNumber = eo, Ja.fromBits = to;
    var no = Math.pow;

    function ro(e, t, n) {
        if (0 === e.length) throw Error("empty string");
        if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return uo;
        if ("number" == typeof t ? (n = t, t = !1) : t = !!t, (n = n || 10) < 2 || 36 < n) throw RangeError("radix");
        var r;
        if ((r = e.indexOf("-")) > 0) throw Error("interior hyphen");
        if (0 === r) return ro(e.substring(1), t, n).neg();
        for (var i = eo(no(n, 8)), s = uo, a = 0; a < e.length; a += 8) {
            var o = Math.min(8, e.length - a),
                l = parseInt(e.substring(a, a + o), n);
            if (o < 8) {
                var u = eo(no(n, o));
                s = s.mul(u).add(eo(l));
            } else s = (s = s.mul(i)).add(eo(l));
        }
        return s.unsigned = t, s;
    }

    function io(e, t) {
        return "number" == typeof e ? eo(e, t) : "string" == typeof e ? ro(e, t) : to(e.low, e.high, "boolean" == typeof t ? t : e.unsigned);
    }
    Ja.fromString = ro, Ja.fromValue = io;
    var so = 4294967296,
        ao = so * so,
        oo = ao / 2,
        lo = Za(1 << 24),
        uo = Za(0);
    Ja.ZERO = uo;
    var co = Za(0, !0);
    Ja.UZERO = co;
    var ho = Za(1);
    Ja.ONE = ho;
    var go = Za(1, !0);
    Ja.UONE = go;
    var po = Za(-1);
    Ja.NEG_ONE = po;
    var fo = to(-1, 2147483647, !1);
    Ja.MAX_VALUE = fo;
    var mo = to(-1, -1, !0);
    Ja.MAX_UNSIGNED_VALUE = mo;
    var vo = to(0, -2147483648, !1);
    Ja.MIN_VALUE = vo;
    var yo = Ja.prototype;
    yo.toInt = function() {
        return this.unsigned ? this.low >>> 0 : this.low;
    }, yo.toNumber = function() {
        return this.unsigned ? (this.high >>> 0) * so + (this.low >>> 0) : this.high * so + (this.low >>> 0);
    }, yo.toString = function(e) {
        if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
        if (this.isZero()) return "0";
        if (this.isNegative()) {
            if (this.eq(vo)) {
                var t = eo(e),
                    n = this.div(t),
                    r = n.mul(t).sub(this);
                return n.toString(e) + r.toInt().toString(e);
            }
            return "-" + this.neg().toString(e);
        }
        for (var i = eo(no(e, 6), this.unsigned), s = this, a = "";;) {
            var o = s.div(i),
                l = (s.sub(o.mul(i)).toInt() >>> 0).toString(e);
            if ((s = o).isZero()) return l + a;
            for (; l.length < 6;) l = "0" + l;
            a = "" + l + a;
        }
    }, yo.getHighBits = function() {
        return this.high;
    }, yo.getHighBitsUnsigned = function() {
        return this.high >>> 0;
    }, yo.getLowBits = function() {
        return this.low;
    }, yo.getLowBitsUnsigned = function() {
        return this.low >>> 0;
    }, yo.getNumBitsAbs = function() {
        if (this.isNegative()) return this.eq(vo) ? 64 : this.neg().getNumBitsAbs();
        for (var e = 0 != this.high ? this.high : this.low, t = 31; t > 0 && !(e & 1 << t); t--);
        return 0 != this.high ? t + 33 : t + 1;
    }, yo.isZero = function() {
        return 0 === this.high && 0 === this.low;
    }, yo.eqz = yo.isZero, yo.isNegative = function() {
        return !this.unsigned && this.high < 0;
    }, yo.isPositive = function() {
        return this.unsigned || this.high >= 0;
    }, yo.isOdd = function() {
        return !(1 & ~this.low);
    }, yo.isEven = function() {
        return !(1 & this.low);
    }, yo.equals = function(e) {
        return Ya(e) || (e = io(e)), (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && this.high === e.high && this.low === e.low;
    }, yo.eq = yo.equals, yo.notEquals = function(e) {
        return !this.eq(e);
    }, yo.neq = yo.notEquals, yo.ne = yo.notEquals, yo.lessThan = function(e) {
        return this.comp(e) < 0;
    }, yo.lt = yo.lessThan, yo.lessThanOrEqual = function(e) {
        return this.comp(e) <= 0;
    }, yo.lte = yo.lessThanOrEqual, yo.le = yo.lessThanOrEqual, yo.greaterThan = function(e) {
        return this.comp(e) > 0;
    }, yo.gt = yo.greaterThan, yo.greaterThanOrEqual = function(e) {
        return this.comp(e) >= 0;
    }, yo.gte = yo.greaterThanOrEqual, yo.ge = yo.greaterThanOrEqual, yo.compare = function(e) {
        if (Ya(e) || (e = io(e)), this.eq(e)) return 0;
        var t = this.isNegative(),
            n = e.isNegative();
        return t && !n ? -1 : !t && n ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1;
    }, yo.comp = yo.compare, yo.negate = function() {
        return !this.unsigned && this.eq(vo) ? vo : this.not().add(ho);
    }, yo.neg = yo.negate, yo.add = function(e) {
        Ya(e) || (e = io(e));
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
        return c += (d += i + (65535 & e.low)) >>> 16, u += (c += r + o) >>> 16, l += (u += n + a) >>> 16, l += t + s, to((c &= 65535) << 16 | (d &= 65535), (l &= 65535) << 16 | (u &= 65535), this.unsigned);
    }, yo.subtract = function(e) {
        return Ya(e) || (e = io(e)), this.add(e.neg());
    }, yo.sub = yo.subtract, yo.multiply = function(e) {
        if (this.isZero()) return uo;
        if (Ya(e) || (e = io(e)), Ka) return to(Ka.mul(this.low, this.high, e.low, e.high), Ka.get_high(), this.unsigned);
        if (e.isZero()) return uo;
        if (this.eq(vo)) return e.isOdd() ? vo : uo;
        if (e.eq(vo)) return this.isOdd() ? vo : uo;
        if (this.isNegative()) return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
        if (e.isNegative()) return this.mul(e.neg()).neg();
        if (this.lt(lo) && e.lt(lo)) return eo(this.toNumber() * e.toNumber(), this.unsigned);
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
        return d += (h += i * l) >>> 16, c += (d += r * l) >>> 16, d &= 65535, c += (d += i * o) >>> 16, u += (c += n * l) >>> 16, c &= 65535, u += (c += r * o) >>> 16, c &= 65535, u += (c += i * a) >>> 16, u += t * l + n * o + r * a + i * s, to((d &= 65535) << 16 | (h &= 65535), (u &= 65535) << 16 | (c &= 65535), this.unsigned);
    }, yo.mul = yo.multiply, yo.divide = function(e) {
        if (Ya(e) || (e = io(e)), e.isZero()) throw Error("division by zero");
        var t, n, r;
        if (Ka) return this.unsigned || -2147483648 !== this.high || -1 !== e.low || -1 !== e.high ? to((this.unsigned ? Ka.div_u : Ka.div_s)(this.low, this.high, e.low, e.high), Ka.get_high(), this.unsigned) : this;
        if (this.isZero()) return this.unsigned ? co : uo;
        if (this.unsigned) {
            if (e.unsigned || (e = e.toUnsigned()), e.gt(this)) return co;
            if (e.gt(this.shru(1))) return go;
            r = co;
        } else {
            if (this.eq(vo)) return e.eq(ho) || e.eq(po) ? vo : e.eq(vo) ? ho : (t = this.shr(1).div(e).shl(1)).eq(uo) ? e.isNegative() ? ho : po : (n = this.sub(e.mul(t)), r = t.add(n.div(e)));
            if (e.eq(vo)) return this.unsigned ? co : uo;
            if (this.isNegative()) return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
            if (e.isNegative()) return this.div(e.neg()).neg();
            r = uo;
        }
        for (n = this; n.gte(e);) {
            t = Math.max(1, Math.floor(n.toNumber() / e.toNumber()));
            for (var i = Math.ceil(Math.log(t) / Math.LN2), s = i <= 48 ? 1 : no(2, i - 48), a = eo(t), o = a.mul(e); o.isNegative() || o.gt(n);) o = (a = eo(t -= s, this.unsigned)).mul(e);
            a.isZero() && (a = ho), r = r.add(a), n = n.sub(o);
        }
        return r;
    }, yo.div = yo.divide, yo.modulo = function(e) {
        return Ya(e) || (e = io(e)), Ka ? to((this.unsigned ? Ka.rem_u : Ka.rem_s)(this.low, this.high, e.low, e.high), Ka.get_high(), this.unsigned) : this.sub(this.div(e).mul(e));
    }, yo.mod = yo.modulo, yo.rem = yo.modulo, yo.not = function() {
        return to(~this.low, ~this.high, this.unsigned);
    }, yo.and = function(e) {
        return Ya(e) || (e = io(e)), to(this.low & e.low, this.high & e.high, this.unsigned);
    }, yo.or = function(e) {
        return Ya(e) || (e = io(e)), to(this.low | e.low, this.high | e.high, this.unsigned);
    }, yo.xor = function(e) {
        return Ya(e) || (e = io(e)), to(this.low ^ e.low, this.high ^ e.high, this.unsigned);
    }, yo.shiftLeft = function(e) {
        return Ya(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? to(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : to(0, this.low << e - 32, this.unsigned);
    }, yo.shl = yo.shiftLeft, yo.shiftRight = function(e) {
        return Ya(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? to(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : to(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned);
    }, yo.shr = yo.shiftRight, yo.shiftRightUnsigned = function(e) {
        if (Ya(e) && (e = e.toInt()), 0 === (e &= 63)) return this;
        var t = this.high;
        return e < 32 ? to(this.low >>> e | t << 32 - e, t >>> e, this.unsigned) : to(32 === e ? t : t >>> e - 32, 0, this.unsigned);
    }, yo.shru = yo.shiftRightUnsigned, yo.shr_u = yo.shiftRightUnsigned, yo.toSigned = function() {
        return this.unsigned ? to(this.low, this.high, !1) : this;
    }, yo.toUnsigned = function() {
        return this.unsigned ? this : to(this.low, this.high, !0);
    }, yo.toBytes = function(e) {
        return e ? this.toBytesLE() : this.toBytesBE();
    }, yo.toBytesLE = function() {
        var e = this.high,
            t = this.low;
        return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24];
    }, yo.toBytesBE = function() {
        var e = this.high,
            t = this.low;
        return [e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t];
    }, Ja.fromBytes = function(e, t, n) {
        return n ? Ja.fromBytesLE(e, t) : Ja.fromBytesBE(e, t);
    }, Ja.fromBytesLE = function(e, t) {
        return new Ja(e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24, e[4] | e[5] << 8 | e[6] << 16 | e[7] << 24, t);
    }, Ja.fromBytesBE = function(e, t) {
        return new Ja(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7], e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], t);
    };
    var bo = xa(Wa);
    class To {
        constructor(e, t, n) {
            this.neg = this.negate, this.eq = this.equals, this.lt = this.lessThan, this.lte = this.lessThanOrEqual, this.gt = this.greaterThan, this.gte = this.greaterThanOrEqual, this.internalValue = new bo(e, t, n);
        }
        static fromNumber(e) {
            const t = new To(0);
            return t.internalValue = bo.fromNumber(e), t;
        }
        static fromString(e) {
            const t = new To(0);
            return t.internalValue = bo.fromString(e), t;
        }
        static fromValue(e) {
            const t = "object" == typeof e ? e.internalValue : e,
                n = new To(0);
            return n.internalValue = bo.fromValue(t), n;
        }
        static fromObject(e) {
            const t = bo.fromValue(e);
            return To.fromString(t.toString());
        }
        static unwrapInputValue(e) {
            return "string" == typeof e || "number" == typeof e ? e : "internalValue" in e ? e.internalValue : e;
        }
        negate() {
            const e = this.internalValue.negate();
            return To.fromObject(e);
        }
        add(e) {
            const t = To.unwrapInputValue(e),
                n = this.internalValue.add(t);
            return To.fromObject(n);
        }
        sub(e) {
            const t = To.unwrapInputValue(e),
                n = this.internalValue.sub(t);
            return To.fromObject(n);
        }
        mul(e) {
            const t = To.unwrapInputValue(e),
                n = this.internalValue.mul(t);
            return To.fromObject(n);
        }
        div(e) {
            const t = To.unwrapInputValue(e),
                n = this.internalValue.div(t);
            return To.fromObject(n);
        }
        and(e) {
            const t = To.unwrapInputValue(e),
                n = this.internalValue.and(t);
            return To.fromObject(n);
        }
        equals(e) {
            const t = To.unwrapInputValue(e);
            return this.internalValue.equals(t);
        }
        lessThan(e) {
            const t = To.unwrapInputValue(e);
            return this.internalValue.lessThan(t);
        }
        lessThanOrEqual(e) {
            const t = To.unwrapInputValue(e);
            return this.internalValue.lessThanOrEqual(t);
        }
        greaterThan(e) {
            const t = To.unwrapInputValue(e);
            return this.internalValue.greaterThan(t);
        }
        greaterThanOrEqual(e) {
            const t = To.unwrapInputValue(e);
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
    To.defaultValue = To.fromObject(bo.ZERO), To.MIN_VALUE = To.fromObject(bo.MIN_VALUE), To.MAX_VALUE = To.fromObject(bo.MAX_VALUE);
    const wo = "outsystems-";

    function Eo(e, t) {
        if (t = null != t ? t : wo, "object" != typeof e || null === e) return;
        const n = {};
        for (const [r, i] of Object.entries(e)) n[t + r] = i;
        return n;
    }

    function Io(e, t) {
        const n = (t = null != t ? t : wo).toLowerCase();
        if ("object" != typeof e || null === e) return {};
        const r = {};
        for (const [i, s] of Object.entries(e)) i.toLowerCase().startsWith(n) && (r[i.substring(t.length)] = s);
        return r;
    }
    var Ao = _exports.CommunicationHeaders = Object.freeze({
        __proto__: null,
        buildCustomHeaders: Eo,
        extractCustomHeaders: Io
    });
    const No = "Communication",
        So = e => b(void 0, [e], void 0, function(_ref8) {
            let {
                url: e,
                params: t,
                headers: n,
                responseType: r,
                useLocaleInfo: i,
                timeout: s,
                timeoutHandler: a,
                baseURL: o,
                httpClient: l = pn.resolve(fn.HttpClient)
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
                    throw _o(e);
                }
            }();
        }),
        Do = e => Co(e) || xo(e),
        Ro = e => null !== e && "object" == typeof e && "boolean" == typeof e.hasApiVersionChanged && "boolean" == typeof e.hasModuleVersionChanged,
        Co = e => null !== e && "object" == typeof e && (!e.hasOwnProperty("exception") || void 0 === e.exception) && "string" == typeof e.clientSettingsHash && "boolean" == typeof e.shouldRefreshToken && Ro(e.versionInfo),
        xo = e => null !== e && "object" == typeof e && "object" == typeof e.exception && "string" == typeof e.clientSettingsHash && ("number" == typeof e.status || void 0 === e.status) && "boolean" == typeof e.shouldRefreshToken && Ro(e.versionInfo),
        Lo = e => b(void 0, [e], void 0, function(_ref9) {
            let {
                url: e,
                payload: t,
                params: n,
                headers: r,
                contentType: i,
                timeout: s,
                timeoutHandler: a,
                useLocaleInfo: o,
                baseURL: l,
                responseHandler: u,
                refreshAuthTokens: h = Br,
                httpClient: g = pn.resolve(fn.HttpClient),
                lifecycleEventsManager: p = pn.resolve(fn.LifecycleEventsManager),
                actionOrAggregateName: f
            } = _ref9;
            return function*() {
                if (!g) throw new Error("Could not resolve the http client instance.");
                const m = Eo(r),
                    v = Object.assign(Object.assign({}, m), {
                        "content-type": "application/json; charset=UTF-8"
                    });
                let y = [];
                try {
                    const r = yield g.post({
                        url: e,
                        payload: t,
                        params: n,
                        headers: v,
                        contentType: null != i ? i : _communicationJs.ContentType.Json,
                        timeout: s,
                        timeoutHandler: a,
                        useLocaleInfo: o,
                        baseURL: l,
                        responseHandler: Oo(u)
                    });
                    if ((null == r ? void 0 : r.shouldRefreshToken) && (yield h()), y = (e => {
                            const t = [];
                            if (Do(e) && !e.versionInfo.hasModuleVersionChanged && e.versionInfo.hasApiVersionChanged) {
                                const e = "The application was unable to make a request to the server - the API version changed, but the module version did not.";
                                t.push({
                                    clientMessage: e,
                                    internalMessage: e
                                });
                            }
                            return t;
                        })(r), Do(r) && Mo(r, (e, t) => null == p ? void 0 : p.onNewVersion(e, t)), xo(r)) throw Uo(r, f);
                    return null == r ? void 0 : r.data;
                } catch (e) {
                    throw _o(e);
                } finally {
                    for (const {
                            clientMessage: e,
                            internalMessage: t
                        } of y) Li({
                        category: No,
                        clientMessage: e,
                        internalMessage: t,
                        errorCode: _communicationJs.ErrorCodes.Communication_Internal_Server_Error
                    });
                }
            }();
        }),
        Oo = e => {
            if ("function" == typeof e) return _ref10 => {
                let {
                    data: t,
                    responseHeaders: n
                } = _ref10;
                const r = Io(n);
                e({
                    data: t,
                    responseHeaders: r
                });
            };
        },
        _o = t => {
            var n, r, i, s, a, o;
            if ("OS-CLRT-40103" === t.errorCode) throw yi(No, "User is not logged in", t.errorCode, t, _loggerJs.Visibility.Internal), new at.SecurityException("Not authorized", ut(t));
            if ((o = t.errorCode) && Object.values(_communicationJs.ErrorCodes).includes(o)) {
                const e = null !== (r = null === (n = t.response) || void 0 === n ? void 0 : n.exception) && void 0 !== r ? r : t;
                throw new at.CommunicationException(`CommunicationException: ${null !== (i = e.message) && void 0 !== i ? i : t.message}`, ut(e), t.errorCode, t.category);
            }
            return t.errorCode = null !== (s = t.errorCode) && void 0 !== s ? s : _communicationJs.ErrorCodes.Communication_Default, t.category = null !== (a = t.category) && void 0 !== a ? a : No, t;
        },
        Mo = (e, t) => {
            if (e.versionInfo.hasModuleVersionChanged) {
                if (e.versionInfo.hasApiVersionChanged) throw t(!0, !!e.versionInfo.isAutoUpgradeEnabled), new at.ViewHasChangedException("View has changed.");
                t(!1, !!e.versionInfo.isAutoUpgradeEnabled);
            }
        },
        Uo = (t, n) => {
            var r, i;
            const s = dt(t.exception),
                a = `Post request ${n ? `issued by '${n}' ` : ""}failed: ${s.message}`,
                o = "Post request failed",
                l = {};
            return t.status && (l["http.status_code"] = t.status), 250 === t.status ? yi(No, o, null !== (r = s.errorCode) && void 0 !== r ? r : _communicationJs.ErrorCodes.Communication_Default, void 0, _loggerJs.Visibility.Internal, l) : Li({
                category: No,
                clientMessage: a,
                internalMessage: o,
                errorCode: null !== (i = s.errorCode) && void 0 !== i ? i : _communicationJs.ErrorCodes.Communication_Default,
                errorObj: s,
                attributes: l
            }), s;
        };
    var Fo = _exports.Communication = Object.freeze({
        __proto__: null,
        SCREEN_SERVICES_EXCEPTION_HTTP_STATUS_CODE: 250,
        get: So,
        getResponseUrl: e => b(void 0, [e], void 0, function(_ref11) {
            let {
                url: e,
                params: t,
                headers: n,
                useLocaleInfo: r,
                timeout: i,
                timeoutHandler: s,
                baseURL: a,
                httpClient: o = pn.resolve(fn.HttpClient)
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
        post: Lo
    });
    const $o = "__cache";

    function Po(e, t) {
        return null == e ? t : e;
    }
    var Vo;
    ! function(e) {
        e[e.Integer = 0] = "Integer", e[e.LongInteger = 1] = "LongInteger", e[e.Decimal = 2] = "Decimal", e[e.Currency = 3] = "Currency", e[e.Text = 4] = "Text", e[e.PhoneNumber = 5] = "PhoneNumber", e[e.Email = 6] = "Email", e[e.Boolean = 7] = "Boolean", e[e.Date = 8] = "Date", e[e.DateTime = 9] = "DateTime", e[e.Time = 10] = "Time", e[e.Record = 11] = "Record", e[e.RecordList = 12] = "RecordList", e[e.BinaryData = 13] = "BinaryData", e[e.Object = 14] = "Object";
    }(Vo || (Vo = {}));
    const Bo = e => {
        switch (e) {
            case Vo.Integer:
                return "Integer";
            case Vo.LongInteger:
                return "Long Integer";
            case Vo.Decimal:
                return "Decimal";
            case Vo.Currency:
                return "Currency";
            case Vo.Text:
                return "Text";
            case Vo.PhoneNumber:
                return "Phone Number";
            case Vo.Email:
                return "Email";
            case Vo.Boolean:
                return "Boolean";
            case Vo.Date:
                return "Date";
            case Vo.DateTime:
                return "Date Time";
            case Vo.Time:
                return "Time";
            case Vo.Record:
                return "Record";
            case Vo.RecordList:
                return "List";
            case Vo.BinaryData:
                return "Binary Data";
            case Vo.Object:
                return "Object";
            default:
                return `Unknown: ${e}`;
        }
    };
    class ko {
        constructor(e, t, n) {
            this._url = t, this.getOfflineContent = n, this._cachedBlob = null, this.authenticatedUrlsRegex = [/screenservices\/.*\/_BinaryContent\/.*/], "undefined" != typeof Blob && e instanceof Blob ? (this._cachedBlob = e, this.getOfflineContent = () => this._content ? Promise.resolve(this._content) : ko.blobToBase64(this._cachedBlob)) : this._content = e || null;
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
                const t = yield So({
                    url: null !== (e = this._url) && void 0 !== e ? e : "",
                    responseType: "blob"
                });
                return null != t ? t : new Blob();
            });
        }
        loadContent() {
            return b(this, void 0, void 0, function*() {
                return this.needsAuthentication() ? this.loadBlobData().then(e => (this._cachedBlob = e, Promise.resolve(this))) : this.getOfflineContent ? this.getOfflineContent().then(e => (this.content = e, Promise.resolve(this))) : At(() => this);
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
                this._cachedBlob = ko.base64toBlob(this._content, t);
            }
            return this._cachedBlob;
        }
        toArrayBuffer() {
            return this._content ? ko.base64ToArrayBuffer(this._content) : null;
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
    ko.defaultValue = new ko();
    class zo {
        static get defaultValue() {
            return zo.defaultValueField;
        }
        constructor(e, t, n, r, i, s, a) {
            if (0 === arguments.length) this.date = new Date(1900, 0, 1, 0, 0, 0, 0);
            else if (1 === arguments.length) {
                if (e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)) {
                    const t = e.getTime();
                    isNaN(t) ? this.date = new Date(1900, 0, 1, 0, 0, 0, 0) : this.date = new Date(t);
                } else this.date = new Date(e);
            } else Po(e, 1900) < 100 ? (this.date = new Date(100, 0, 1, 0, 0, 0, 0), this.date.setFullYear(Po(e, 1900)), this.date.setMonth(Po(t, 1) - 1), this.date.setDate(Po(n, 1)), this.date.setHours(Po(r, 0)), this.date.setMinutes(Po(i, 0)), this.date.setSeconds(Po(s, 0)), this.date.setMilliseconds(Po(a, 0))) : this.date = new Date(Po(e, 1900), Po(t, 1) - 1, Po(n, 1), Po(r, 0), Po(i, 0), Po(s, 0), Po(a, 0));
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
            const t = new zo(this.year + e, this.month, this.day, this.hours, this.minutes, this.seconds, this.milliseconds);
            return 2 === this.month && 29 === this.day && 3 === t.month ? new zo(t.year, 2, 28, t.hours, t.minutes, t.seconds, t.milliseconds) : t;
        }
        daysInMonth(e, t) {
            return new Date(t, e, 0).getDate();
        }
        addMonths(e) {
            const t = new zo(this.year, this.month + e, this.day, this.hours, this.minutes, this.seconds, this.milliseconds);
            return t.day === this.day ? t : new zo(t.year, t.month - 1, this.daysInMonth(t.month - 1, t.year), t.hours, t.minutes, t.seconds, t.milliseconds);
        }
        addDays(e) {
            return new zo(this.year, this.month, this.day + e, this.hours, this.minutes, this.seconds, this.milliseconds);
        }
        addHours(e) {
            return new zo(this.year, this.month, this.day, this.hours + e, this.minutes, this.seconds, this.milliseconds);
        }
        addMinutes(e) {
            return new zo(this.year, this.month, this.day, this.hours, this.minutes + e, this.seconds, this.milliseconds);
        }
        addSeconds(e) {
            return new zo(this.year, this.month, this.day, this.hours, this.minutes, this.seconds + e, this.milliseconds);
        }
        addMilliseconds(e) {
            return new zo(this.year, this.month, this.day, this.hours, this.minutes, this.seconds, this.milliseconds + e);
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
            return Ho.RFC3339_DATEPART.test(e) ? zo.internalFromUTCWithoutConversion(e + "T00:00:00Z") : zo.defaultValue;
        }
        toISODate() {
            return this.toString(Ho.RFC3339_DATEPART_FORMAT);
        }
        static fromISOTime(e) {
            return Ho.RFC3339_TIMEPART.test(e) ? zo.internalFromUTCWithoutConversion("1900-01-01T" + e + "Z") : zo.defaultValue;
        }
        toISOTime() {
            return this.toString(Ho.RFC3339_TIMEPART_FORMAT);
        }
        static fromISODateTime(e) {
            if ("" === (e = e || "") || e.indexOf("1900-01-01") >= 0 && e.indexOf("00:00:00") >= 0) return zo.defaultValue;
            if (e.indexOf("T") > 0 && !/([+\-]\d{2}((:\d{2})|(\d{2})?)|Z)$/.test(e)) return zo.internalFromUTCWithoutConversion(e.trim() + "Z");
            e = e.replace(/([+-]\d{2})$/, function(e) {
                return e + "00";
            });
            const t = Date.parse(e);
            return isNaN(t) ? zo.defaultValue : new zo(t);
        }
        static internalFromUTCWithoutConversion(e) {
            const t = Date.parse(e);
            if (!isNaN(t)) {
                const e = new Date(t);
                return new zo(e.getUTCFullYear(), e.getUTCMonth() + 1, e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds());
            }
            return zo.defaultValue;
        }
        getMillisecondsString() {
            return (this.milliseconds / 1e3).toFixed(3).substring(2, 5);
        }
        toString(e) {
            return void 0 === e ? this.equals(zo.defaultValue) ? "1900-01-01T00:00:00" : this.date.toISOString() : e.replace(/(\\.)|dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|ff?f?|FF?F?|\.FF?F?|tt?|zz?z?/g, e => {
                if (0 === e.indexOf("\\")) return e.substring(1);
                switch (e) {
                    case "hh":
                    case "h":
                        const t = this.hours < 13 ? this.hours : this.hours - 12;
                        return Pa.padLeadingZeros((0 === this.hours ? 12 : t).toString(), e.length);
                    case "HH":
                    case "H":
                        return Pa.padLeadingZeros(this.hours.toString(), e.length);
                    case "mm":
                    case "m":
                        return Pa.padLeadingZeros(this.minutes.toString(), e.length);
                    case "ss":
                    case "s":
                        return Pa.padLeadingZeros(this.seconds.toString(), e.length);
                    case "fff":
                        return this.getMillisecondsString();
                    case "ff":
                        return this.getMillisecondsString().substring(0, 2);
                    case "f":
                        return this.getMillisecondsString().substring(0, 1);
                    case ".FFF":
                    case ".FF":
                    case ".F":
                        return 0 === this.milliseconds ? "" : "." + Pa.removeTrailingZeros(this.getMillisecondsString());
                    case "FFF":
                        return Pa.removeTrailingZeros(this.getMillisecondsString());
                    case "FF":
                        return Pa.removeTrailingZeros(this.getMillisecondsString()).substring(0, 2);
                    case "F":
                        return Pa.removeTrailingZeros(this.getMillisecondsString()).substring(0, 1);
                    case "yyyy":
                    case "yyy":
                        const n = this.year.toString();
                        return "0" === n.charAt(0) ? this.year.toString().substring(1) : n;
                    case "yy":
                        return this.year.toString().substring(2, 4);
                    case "y":
                        return Number(this.year.toString().substring(2, 4)).toString();
                    case "dddd":
                        return Pa.getDayName(this.weekDay);
                    case "ddd":
                        return Pa.getShortDayName(this.weekDay);
                    case "dd":
                    case "d":
                        return Pa.padLeadingZeros(this.day.toString(), e.length);
                    case "MMMM":
                        return Pa.getMonthName(this.month);
                    case "MMM":
                        return Pa.getShortMonthName(this.month);
                    case "MM":
                    case "M":
                        return Pa.padLeadingZeros(this.month.toString(), e.length);
                    case "t":
                        return Pa.get12HourNotation(this.hours).substring(0, 1);
                    case "tt":
                        return Pa.get12HourNotation(this.hours);
                    case "zzz":
                        return Pa.getTimezoneInformationFull(this.date.getTimezoneOffset());
                    case "zz":
                        return Pa.getTimezoneInformationHoursFull(this.date.getTimezoneOffset());
                    case "z":
                        return Pa.getTimezoneInformationHoursShort(this.date.getTimezoneOffset());
                    default:
                        return e;
                }
            });
        }
    }
    var Ho;
    zo.defaultValueField = new zo(),
        function(e) {
            e.RFC3339_TIMEPART = /^([01][0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9](\.\d+)?)?$/, e.RFC3339_DATEPART = /^\d{4,}-(0\d|1[012])-([0-2]\d|3[01])$/, e.RFC3339_TIMEPART_FORMAT = "HH:mm:ss", e.RFC3339_DATEPART_FORMAT = "yyyy-MM-dd", e.MIN_INTEGER_VALUE = -2147483648, e.MAX_INTEGER_VALUE = 2147483647, e.MIN_LONGINTEGER_VALUE = To.MIN_VALUE, e.MAX_LONGINTEGER_VALUE = To.MAX_VALUE, e.MIN_DECIMAL_VALUE = new Ua("2").pow(96).neg(), e.MAX_DECIMAL_VALUE = new Ua("2").pow(96).minus(1), e.MIN_DATE_VALUE = new zo(1753, 1, 1), e.MAX_DATE_VALUE = new zo(9999, 12, 31), e.MIN_TIME_VALUE = zo.defaultValue, e.MAX_TIME_VALUE = zo.defaultValue.addHours(23).addMinutes(59).addSeconds(59), e.MIN_DATETIME_VALUE = new zo(1753, 1, 1, 0, 0, 0), e.MAX_DATETIME_VALUE = new zo(9999, 12, 31, 23, 59, 59), e.DEFAULT_INTEGER = 0, e.DEFAULT_LONGINTEGER = To.defaultValue, e.DEFAULT_DECIMAL = Ua.defaultValue, e.DEFAULT_CURRENCY = Ua.defaultValue, e.DEFAULT_TEXT = "", e.DEFAULT_PHONENUMBER = "", e.DEFAULT_EMAIL = "", e.DEFAULT_BOOLEAN = !1, e.DEFAULT_DATE = zo.defaultValue, e.DEFAULT_DATETIME = zo.defaultValue, e.DEFAULT_TIME = zo.defaultValue, e.DEFAULT_BINARYDATA = ko.defaultValue, e.DEFAULT_OBJECT = null, e.FORMAT = new Ba(new Pa("yyyy-MM-dd", "HH:mm:ss"), new Va(".", "")), e.ISO_DATE_FORMAT_REGEXP = /^\d{4,}-(0\d|1[012])-([0-2]\d|3[01])([T ]\d{2}:\d{2}(:\d{2}(\.\d+)?(([+\-]\d{2}((:\d{2})|(\d{2})?))|Z)?)?)?$/i;
        }(Ho || (Ho = {}));
    class jo {
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
            const e = new jo();
            for (const t in this.map) e.setItem(t, this.map[t]);
            return e;
        }
    }
    class qo {
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

    function Go(e, t) {
        if ("string" == typeof e) {
            const n = t;
            return e.localeCompare(n);
        }
        return "number" == typeof e ? e - t : "boolean" == typeof e ? !e && t ? -1 : e && !t ? 1 : 0 : e.lessThan(t) ? -1 : e.greaterThan(t) ? 1 : 0;
    }

    function Wo(e, t) {
        return e && t && t.equals instanceof Function ? t.equals(e) : t === e;
    }

    function Ko(e) {
        switch (e) {
            case Vo.Integer:
                return Ho.DEFAULT_INTEGER;
            case Vo.LongInteger:
                return Ho.DEFAULT_LONGINTEGER;
            case Vo.Decimal:
                return Ho.DEFAULT_DECIMAL;
            case Vo.Currency:
                return Ho.DEFAULT_CURRENCY;
            case Vo.Text:
                return Ho.DEFAULT_TEXT;
            case Vo.PhoneNumber:
                return Ho.DEFAULT_PHONENUMBER;
            case Vo.Email:
                return Ho.DEFAULT_EMAIL;
            case Vo.Date:
                return Ho.DEFAULT_DATE;
            case Vo.DateTime:
                return Ho.DEFAULT_DATETIME;
            case Vo.Time:
                return Ho.DEFAULT_TIME;
            case Vo.Boolean:
                return Ho.DEFAULT_BOOLEAN;
            case Vo.BinaryData:
                return Ho.DEFAULT_BINARYDATA;
            case Vo.Object:
                return Ho.DEFAULT_OBJECT;
            default:
                throw new TypeError("Records and Record lists are not basic types");
        }
    }
    class Jo {
        constructor(e, t, n, r, i) {
            if (this.emptyListItem = e, this.data = null != t ? t : new qa(), this.itemIds = null != n ? n : new qa(), this._itemIdSeed = null != r ? r : 0, this._modelId = i || Jo.nextModelId++, t && !n)
                for (let e = 0, t = this.data.count(); e < t; e++) this.itemIds = this.itemIds.push(this._itemIdSeed), this._itemIdSeed = this._itemIdSeed + 1 | 0;
        }
        get modelId() {
            return this._modelId;
        }
        push(e) {
            return new Jo(this.emptyListItem, this.data.push(e), this.itemIds.push(this._itemIdSeed), this._itemIdSeed + 1 | 0, this._modelId);
        }
        addFromOther(e) {
            return new Jo(this.emptyListItem, this.data.addFromOther(e.data), this.itemIds.pushAll(e.data.map(() => this._itemIdSeed++)), this._itemIdSeed, this._modelId);
        }
        pushAll(e) {
            return new Jo(this.emptyListItem, this.data.pushAll(e), this.itemIds.pushAll(e.map(() => this._itemIdSeed++)), this._itemIdSeed, this._modelId);
        }
        remove(e) {
            return new Jo(this.emptyListItem, this.data.remove(e), this.itemIds.remove(e), this._itemIdSeed, this._modelId);
        }
        insert(e, t) {
            return new Jo(this.emptyListItem, this.data.insert(e, t), this.itemIds.insert(e, this._itemIdSeed), this._itemIdSeed + 1 | 0, this._modelId);
        }
        sort(e, t, n) {
            const r = this.data.map((n, r) => ({
                    item: e(r),
                    itemId: this.itemIds.get(r),
                    by: t(e(r))
                })),
                i = n ? 1 : -1;
            r.sort((e, t) => i * Go(e.by, t.by));
            const s = qa.fromJS(r.map(e => e.item)),
                a = qa.fromJS(r.map(e => e.itemId));
            return new Jo(this.emptyListItem, s, a, this._itemIdSeed, this._modelId);
        }
        getEmptyListItem() {
            return this.emptyListItem;
        }
        setEmptyListItem(e) {
            return new Jo(e, this.data, this.itemIds, this._itemIdSeed, this._modelId);
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
            return new Jo(this.emptyListItem, this.data.set(e, t), this.itemIds, this._itemIdSeed, this._modelId);
        }
        clear() {
            return new Jo(this.emptyListItem, this.data.clear(), this.itemIds.clear(), this._itemIdSeed, this._modelId);
        }
        forEach(e) {
            this.data.forEach(e);
        }
        reduce(e, t) {
            return this.data.reduce(e, t);
        }
        static fromJS(e, t) {
            return new Jo(t, qa.fromJS(e));
        }
        static fromJSON(e, t) {
            return new Jo(t, qa.fromJS(e));
        }
        clone() {
            return new Jo(this.emptyListItem, this.data.clone(), this.itemIds.clone(), this._itemIdSeed);
        }
    }
    Jo.nextModelId = 1;
    class Yo {
        constructor() {
            this.writePropagateHandler = this.defaultWritePropagate, this.propagationParent = this;
        }
        static getData(e) {
            if (void 0 !== e && e.constructor !== Jo) return e.data;
        }
        static setPropagationHandler(e, t, n, r) {
            e.writePropagateHandler = r, Yo.setPropagationParent(e, t), Yo.setPropagationKey(e, n);
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
    class Xo extends Yo {
        constructor(e, t) {
            super(), this.cache = null != t ? t : new jo(), this.data = e || this.constructor.createDefaultData();
        }
        static createDefaultData() {
            const e = this.RecordClass;
            if (e) return new e();
        }
        getBasicProperty(e) {
            return this.data.get(e);
        }
        setBasicProperty(e, t, n, r) {
            this.data.get(e) !== t && (Xo.checkType(n, t, r), this.writePropagate(this.data.set(e, t), this.cache), this.onPropertyValueChanged(e));
        }
        onPropertyValueChanged(e) {}
        getComplexProperty(e, t) {
            let n = this.cache.getItem(e);
            if (n) return Xo.setPropagationParent(n, this), n;
            const r = this.data.get(e),
                i = this.cache.getItem(e + $o);
            return n = new t(r, i || null), this.cache.setItem(e, n), i && this.cache.invalidate(e + $o), Xo.setPropagationHandler(n, this, e, this.internalSetComplexProperty), n;
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
                const e = null !== (t = Xo.getData(r.value)) && void 0 !== t ? t : r.value;
                this.data.get(r.name) !== e && (void 0 !== r.expectedType && Xo.checkType(r.expectedType, r.value, r.valueType), n.push({
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
            for (const i of e) n = n.set(i.name, i.value), i.isBasicType || (r.invalidate(i.name), r.invalidate(i.name + $o), t && r.setItem(i.name + $o, t));
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
                case Vo.Integer:
                    Xo.ensureValidInteger(t);
                    break;
                case Vo.LongInteger:
                    Xo.ensureValidLongInteger(t);
                    break;
                case Vo.Decimal:
                case Vo.Currency:
                    Xo.ensureValidDecimal(t);
                    break;
                case Vo.Text:
                case Vo.PhoneNumber:
                    Xo.ensureValidText(t);
                    break;
                case Vo.Email:
                    Xo.ensureValidEmail(t);
                    break;
                case Vo.Boolean:
                    Xo.ensureValidBoolean(t);
                    break;
                case Vo.Date:
                    Xo.ensureValidDate(t);
                    break;
                case Vo.Time:
                    Xo.ensureValidTime(t);
                    break;
                case Vo.DateTime:
                    Xo.ensureValidDateTime(t);
                    break;
                case Vo.Record:
                case Vo.RecordList:
                    Xo.ensureValidComplexType(t, n);
                    break;
                case Vo.BinaryData:
                    Xo.ensureValidBinaryData(t);
                    break;
                case Vo.Object:
                    break;
                default:
                    throw new TypeError("Unexpected data type: " + e);
            }
        }
        static ensureValidBinaryData(e) {
            if (!("string" == typeof e || e instanceof ko)) throw new TypeError("Expecting a Binary Data, found: " + e);
        }
        static ensureValidInteger(e) {
            if ("number" != typeof e || isNaN(e) || e % 1 != 0) throw new TypeError("Expecting an Integer, found: " + e);
            if (e < Ho.MIN_INTEGER_VALUE) throw new TypeError("Integers must be greater than " + Ho.MIN_INTEGER_VALUE + ", found: " + e);
            if (e > Ho.MAX_INTEGER_VALUE) throw new TypeError("Integers must be lower than " + Ho.MAX_INTEGER_VALUE + ", found: " + e);
        }
        static ensureValidLongInteger(e) {
            if (!e || e.constructor !== To) throw new TypeError("Expecting a LongInteger, found: " + e);
            if (e.lessThan(Ho.MIN_LONGINTEGER_VALUE)) throw new TypeError("Long Integers must be greater than " + Ho.MIN_LONGINTEGER_VALUE.toString() + ", found: " + e.toString());
            if (e.greaterThan(Ho.MAX_LONGINTEGER_VALUE)) throw new TypeError("Long Integers must be lower than " + Ho.MAX_LONGINTEGER_VALUE.toString() + ", found: " + e.toString());
        }
        static ensureValidDecimal(e) {
            if (!e || e.constructor !== Ua) throw new TypeError(`Expecting a Decimal, found: ${e}`);
            if (e.lessThan(Ho.MIN_DECIMAL_VALUE)) throw new TypeError("Decimals must be greater than " + Ho.MIN_DECIMAL_VALUE.toString() + ", found: " + e.toString());
            if (e.greaterThan(Ho.MAX_DECIMAL_VALUE)) throw new TypeError("Decimals must be lower than " + Ho.MAX_DECIMAL_VALUE.toString() + ", found: " + e.toString());
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
            if (!e || e.constructor !== zo) throw new TypeError(`Expecting a Date, found: ${e}`);
        }
        static ensureValidTime(e) {
            if (!e || e.constructor !== zo) throw new TypeError(`Expecting a Time, found: ${e}`);
        }
        static ensureValidDateTime(e) {
            if (!e || e.constructor !== zo) throw new TypeError(`Expecting a DateTime, found: ${e}`);
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
            const t = Xo.getData(e);
            this.writePropagate(t, new jo());
        }
        fastEquals(e) {
            return this === e;
        }
        equals(e) {
            return !(!e || this.constructor !== e.constructor);
        }
        static defineRecordClass(e) {
            return Ha(e);
        }
        clone() {
            return new(0, this.constructor)(this.data, this.cloneCache());
        }
    }
    class Qo {
        constructor(e, t, n, r, i, s, a, o, l) {
            this.name = e, this.attrName = t, this.nameForJson = n, this.mandatory = r, this.ignoreForServer = i, this.dataType = s, this.optimizeList = o, this.complexType = l, this.defaultValue = a();
        }
    }
    class Zo {
        constructor(e, t, n, r, i, s, a, o, l) {
            this.name = e, this.attrName = t, this.nameForJson = n, this.mandatory = r, this.ignoreForServer = i, this.dataType = s, this.defaultValueGetter = a, this.optimizeList = o, this.complexType = l;
        }
        get defaultValue() {
            return this.defaultValueGetter();
        }
    }
    class el extends Xo {
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
            return "boolean" != typeof o ? (l = o, u = !0) : u = o, s === Vo.DateTime || s === Vo.Date || s === Vo.Time ? new Zo(e, t, n, r, i, s, a, u, l) : new Qo(e, t, n, r, i, s, a, u, l);
        }
        static attributesToDeclare() {
            return [];
        }
        static init() {
            const e = this,
                t = e.attributesToDeclare();
            e.Attributes = t, t.forEach(t => {
                t.attrName in e.prototype || (t.dataType === Vo.Record || t.dataType === Vo.RecordList ? e.defineComplexProperty(t.attrName, t.dataType, t.complexType) : e.defineBasicProperty(t.attrName, t.dataType));
            }), e.RecordClass = Xo.defineRecordClass(t.reduce((e, t) => (e[t.attrName] = null, e), {})), e.prototype.equals = function(e) {
                let n = el.prototype.equals.call(this, e);
                return t.forEach(t => {
                    var r;
                    (r = t.dataType) === Vo.Record || r === Vo.RecordList || r === Vo.LongInteger || r === Vo.Decimal || r === Vo.Currency || r === Vo.DateTime || r === Vo.Time || r === Vo.Date ? n && (n = this[t.attrName].equals(e[t.attrName])) : n && (n = this[t.attrName] === e[t.attrName]);
                }), n;
            };
        }
        static createDefaultData() {
            const e = this,
                t = e.RecordClass;
            if (t) {
                const n = {};
                for (const t of e.Attributes) t.dataType === Vo.Record || t.dataType === Vo.RecordList ? n[t.attrName] = Xo.getData(t.defaultValue) : n[t.attrName] = t.defaultValue;
                return new t(n);
            }
        }
        static defineBasicProperty(e, t) {
            Object.defineProperty(this.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return this.getBasicProperty(e);
                },
                set: function(n) {
                    this.setBasicProperty(e, n, t);
                }
            });
        }
        static defineComplexProperty(e, t, n) {
            Object.defineProperty(this.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return this.getComplexProperty(e, n);
                },
                set: function(r) {
                    this.setComplexProperty(e, r, t, n);
                }
            });
        }
        static isCompatibleWith(e) {
            return this === e || this.isAnonymousRecord() && e.isAnonymousRecord() && this.UniqueId === e.UniqueId;
        }
        isCompatibleWith(e) {
            return e.prototype instanceof el && this.constructor.isCompatibleWith(e);
        }
        getNonSerializableAttributes() {
            return this.getAttributes().filter(e => e.dataType === Vo.Object).map(e => e.attrName);
        }
    }
    el.UniqueId = "", el._isAnonymousRecord = !1;
    class tl extends Yo {
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
                    if (Wo(r, this.getItem(t[e]))) {
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
            n.sort((t, n) => r * Go(e(t), e(n))), this.clear(), this.pushAll(n);
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
                return Wo(this.emptyListItem, e.emptyListItem);
            }
            for (let t = 0; t < this.length; t++) {
                if (!Wo(this.getItem(t), e.getItem(t))) return !1;
            }
            return !0;
        }
    }
    class nl extends tl {
        constructor(e) {
            super(), this.data = e || new Jo(this.newItem());
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
    class rl extends tl {
        constructor(e, t) {
            if (super(), this._recordType = this.constructor.getItemType(), !this._recordType) throw new TypeError("GenericRecordLists must define a RecordType");
            this.data = e || new Jo(el.getData(this.newItem())), this.cache = null != t ? t : new qo();
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
            this.data = this.data.setEmptyListItem(el.getData(this.newItem()));
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
            this.isEmpty && this.cache.invalidate(0), super.append(el.getData(e)), this.cache.append(void 0);
        }
        appendAll(e) {
            this.isEmpty && this.cache.invalidate(0), super.appendAll(e), this.cache.appendMultiple(e.length);
        }
        pushAll(e) {
            this.isEmpty && this.cache.invalidate(0), super.pushAll(e.map(e => Xo.getData(e))), this.cache.appendMultiple(e.length);
        }
        insert(e, t) {
            this.checkIndex(e, !0), this.isEmpty && this.cache.invalidate(0), super.insert(e, el.getData(t)), this.cache.insert(e, void 0);
        }
        getItem(e) {
            return this.internalGetItem(e, !1);
        }
        internalGetItem(e, t) {
            t || this.checkIndex(e);
            let n = this.cache.getItem(e);
            return n ? (rl.setPropagationParent(n, this), rl.setPropagationKey(n, e), n) : (t ? (n = this.newItem(this.data.getEmptyListItem()), rl.setPropagationHandler(n, this, e, this.internalSetEmptyListItem)) : (n = this.newItem(this.data.get(e)), rl.setPropagationHandler(n, this, e, this.internalSetItem)), this.cache.setItem(e, n), n);
        }
        setItem(e, t) {
            this.internalSetItem(e, t);
        }
        internalSetItem(e, t, n) {
            var r;
            const i = null !== (r = el.getData(t)) && void 0 !== r ? r : t;
            this.checkIndex(e), this.data.get(e) !== i && (this.writePropagate(this.data.set(e, i), this.cache), this.cache.setItem(e, void 0));
        }
        internalSetEmptyListItem(e, t, n) {
            var r;
            const i = null !== (r = el.getData(t)) && void 0 !== r ? r : t;
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
            return e.prototype instanceof rl && this.constructor.isCompatibleWith(e);
        }
    }
    class il extends nl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return Ho.DEFAULT_INTEGER;
        }
    }
    il.itemType = Vo.Integer;
    class sl extends nl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return Ho.DEFAULT_LONGINTEGER;
        }
    }
    sl.itemType = Vo.LongInteger;
    class al extends nl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return Ho.DEFAULT_DATE;
        }
    }
    al.itemType = Vo.Date;
    class ol extends nl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return Ho.DEFAULT_DATETIME;
        }
    }
    ol.itemType = Vo.DateTime;
    class ll extends nl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return Ho.DEFAULT_TIME;
        }
    }
    ll.itemType = Vo.Time;
    class ul extends nl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return Ho.DEFAULT_DECIMAL;
        }
    }
    ul.itemType = Vo.Decimal;
    class cl extends nl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return Ho.DEFAULT_CURRENCY;
        }
    }
    cl.itemType = Vo.Currency;
    class dl extends nl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return Ho.DEFAULT_EMAIL;
        }
    }
    dl.itemType = Vo.Email;
    class hl extends nl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return Ho.DEFAULT_PHONENUMBER;
        }
    }
    hl.itemType = Vo.PhoneNumber;
    class gl extends nl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return Ho.DEFAULT_BOOLEAN;
        }
    }
    gl.itemType = Vo.Boolean;
    class pl extends nl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return Ho.DEFAULT_BINARYDATA;
        }
    }
    pl.itemType = Vo.BinaryData;
    class fl extends nl {
        constructor(e) {
            super(e);
        }
        static getTypeDefaultValue() {
            return Ho.DEFAULT_TEXT;
        }
    }
    fl.itemType = Vo.Text;
    class ml {
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

    function vl() {
        return e => {
            const t = e;
            void 0 !== t.init && t.init();
        };
    }
    let yl = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("JSON", "jSONOut", "jSONOut", !0, !0, Vo.Text, () => Ko(Vo.Text))].concat(super.attributesToDeclare());
        }
    };
    yl = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], yl);
    let bl = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("ExceptionMessage", "exceptionMessageAttr", "exceptionMessageAttr", !0, !0, Vo.Text, () => Ko(Vo.Text))].concat(super.attributesToDeclare());
        }
    };
    bl = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], bl);
    class Tl {
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
            let r = class extends el {
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
    class wl extends Tl {
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
    class El extends wl {
        constructor(e, t, n) {
            super(e, t, n);
        }
        getDataType(e) {
            return e;
        }
        getDefaultValue(e) {
            return () => Ko(e);
        }
        getComplexType(e) {}
    }
    class Il extends wl {
        constructor(e, t, n) {
            super(e, t, n);
        }
        getDataType(e) {
            return Vo.Record;
        }
        getDefaultValue(e) {
            return () => Yo.getData(new e());
        }
        getComplexType(e) {
            return e;
        }
    }
    var Al;
    ! function(e) {
        function t(e) {
            return e && e.constructor === Ua;
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
            return e && e.constructor === To;
        }

        function o(e) {
            return e instanceof zo;
        }

        function l(e) {
            return o(e) && !isNaN(e.getTime());
        }

        function u(e) {
            return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
        }
        e.isDecimal = t, e.isBinaryData = function(e) {
            var t;
            return (null === (t = null == e ? void 0 : e.value) || void 0 === t ? void 0 : t.constructor) === ko;
        }, e.isValidDecimal = function(e) {
            return t(e) && !e.isNaN();
        }, e.isWithinDecimalRange = function(e) {
            return Ho.MIN_DECIMAL_VALUE.lessThanOrEqualTo(e) && Ho.MAX_DECIMAL_VALUE.greaterThanOrEqualTo(e);
        }, e.isText = n, e.isBoolean = r, e.isBasicType = function(e) {
            return n(e) || s(e) || r(e) || o(e) || a(e) || t(e);
        }, e.isValidInteger = function(e) {
            return i(e) && e % 1 == 0;
        }, e.isValidJsNumber = i, e.isJsNumber = s, e.isWithinIntegerRange = function(e) {
            return e >= Ho.MIN_INTEGER_VALUE && e <= Ho.MAX_INTEGER_VALUE;
        }, e.isValidLongInteger = function(e) {
            return a(e);
        }, e.isLongInteger = a, e.isValidDate = function(e) {
            return l(e) && e.hours === Ho.DEFAULT_DATE.hours && e.minutes === Ho.DEFAULT_DATE.minutes && e.seconds === Ho.DEFAULT_DATE.seconds;
        }, e.isValidTime = function(e) {
            return l(e) && e.year === Ho.DEFAULT_TIME.year && e.month === Ho.DEFAULT_TIME.month && e.day === Ho.DEFAULT_TIME.day;
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
            throw new at.NumberOverflowException(r);
        }, e.ensureNumberPrecision = function(e) {
            if (e.decimalPlaces() > 16) {
                const t = `Unable to convert ${e.toString()} to the Javascript Number type because it will lead to precision loss. The maximum safe number of digits after the decimal point is 16.`;
                throw new at.NumberOverflowException(t);
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
            throw new at.NumberOverflowException(function(e, t, n, r) {
                return `Unable to convert ${e} to the ${t} type since it exceeds the ${n} value allowed which is ${r}.`;
            }(e.toString(), r, i, s));
        }
        e.ensureIntegerInsideBounds = function(e) {
            g(e, Ho.MIN_INTEGER_VALUE, Ho.MAX_INTEGER_VALUE, "Integer");
        }, e.ensureLongIntegerInsideBounds = function(e) {
            g(e, Ho.MIN_LONGINTEGER_VALUE.toNumber(), Ho.MAX_LONGINTEGER_VALUE.toNumber(), "Long Integer");
        }, e.ensureDecimalInsideBounds = function(e) {
            g(e, Ho.MIN_DECIMAL_VALUE.toNumber(), Ho.MAX_DECIMAL_VALUE.toNumber(), "Decimal");
        };
    }(Al || (Al = {}));
    var Nl = _exports.DataTypes = Object.freeze({
        __proto__: null,
        BasicTypeKeyedTypeFactory: El,
        BasicTypeList: nl,
        BasicVariableHolder: ml,
        BinaryData: ko,
        BinaryDataList: pl,
        BooleanList: gl,
        Cache: jo,
        ComplexTypeKeyedTypeFactory: Il,
        get Constants() {
            return Ho;
        },
        CurrencyList: cl,
        get DataTypes() {
            return Vo;
        },
        DateList: al,
        DateTime: zo,
        DateTimeList: ol,
        Decimal: Ua,
        DecimalList: ul,
        EmailList: dl,
        get ErrorHandlerOutputType() {
            return bl;
        },
        GenericRecord: el,
        GenericRecordList: rl,
        ImmutableBase: Yo,
        ImmutableListWithTracking: Jo,
        IntegerList: il,
        get JSONSerializeOutputType() {
            return yl;
        },
        List: tl,
        ListCache: qo,
        LongInteger: To,
        LongIntegerList: sl,
        PhoneNumberList: hl,
        Record: Xo,
        RecordTypeFactory: Tl,
        RecordWithStaticConstructor: vl,
        TextList: fl,
        TimeList: ll,
        TypeKeyedTypeFactory: wl,
        get TypeValidations() {
            return Al;
        },
        VariableHolder: class extends ml {
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
        compare: Go,
        defaultForType: Ko,
        equals: Wo,
        mapDataTypeToName: Bo
    });
    const Sl = "Authorization";
    var Dl = _exports.Authorization = Object.freeze({
        __proto__: null,
        ensureUserHasRole: e => {
            var t,
                n,
                r, {
                    roles: i,
                    auth: s = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance()
                } = e;
            if (!(null == s ? void 0 : s.isAuthenticated())) throw fi(Sl, "Not authorized: User is not logged in"), new at.SecurityException("Not authorized", "User is not logged in");
            if (!i.find(e => !!e && s.hasRole(e.roleKey))) throw fi(Sl, "Not authorized: No roles found on current user"), null !== (r = null === (n = i[i.length - 1]) || void 0 === n ? void 0 : n.roleException) && void 0 !== r ? r : new at.SecurityException("Not authorized", "User doesn't have the required role");
        },
        hasRole: e => {
            var t, {
                roleKey: n,
                auth: r = null === (t = pn.resolve(fn.Auth)) || void 0 === t ? void 0 : t.getInstance()
            } = e;
            return (null == r ? void 0 : r.isAuthenticated()) ? r.hasRole(n) : (fi(Sl, "Not authorized: User is not logged in"), !1);
        }
    });

    function Rl() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Ho.FORMAT.defaultDateTimeFormat;
        return {
            year: parseInt(RegExp["$" + (e.yearIndexForDate + 1)], 10),
            month: parseInt(RegExp["$" + (e.monthIndexForDate + 1)], 10),
            day: parseInt(RegExp["$" + (e.dayIndexForDate + 1)], 10)
        };
    }

    function Cl() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Ho.FORMAT.defaultDateTimeFormat;
        const t = parseInt(RegExp["$" + (e.secondsIndexForTime + 1)], 10);
        return {
            hours: parseInt(RegExp["$" + (e.hoursIndexForTime + 1)], 10),
            minutes: parseInt(RegExp["$" + (e.minutesIndexForTime + 1)], 10),
            seconds: isNaN(t) ? 0 : t
        };
    }

    function xl() {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Ho.FORMAT.defaultDateTimeFormat;
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
    const Ll = `[${String.fromCharCode(55296)}-${String.fromCharCode(56319)}]`,
        Ol = new RegExp(Ll, "g");

    function _l(e) {
        const t = e.match(Ol);
        return e.length - (t ? t.length : 0);
    }

    function Ml(e, t, n) {
        var r;
        let i = _l(e);
        if (!(t >= 0 && n > 0 && i > t)) return Ho.DEFAULT_TEXT;
        i = Math.min(i - t, n);
        const s = e.match(Ol) ? null === (r = e.match(new RegExp("(" + Ll + ".|.){" + t + "}((" + Ll + ".|.){" + i + "})"))) || void 0 === r ? void 0 : r[2] : e.substring(t, t + i);
        return null != s ? s : "";
    }

    function Ul(e) {
        const t = new Date(e.getTime());
        return t.setMinutes(e.getMinutes() - e.getTimezoneOffset()), t.getTime();
    }

    function Fl(e, t, n) {
        let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
        const i = n <= 36e5,
            s = n <= 6e4,
            a = n <= 1e3,
            o = $l(e, i, s, a).toNative(),
            l = $l(t, i, s, a).toNative(),
            u = Date.UTC(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate(), o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), 0),
            c = Date.UTC(l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate(), l.getUTCHours(), l.getUTCMinutes(), l.getUTCSeconds(), 0),
            d = r ? Ul(l) - Ul(o) : c - u;
        return Math.floor(d / n);
    }

    function $l(e, t, n, r) {
        return new zo(e.year, e.month, e.day, t ? e.hours : 0, n ? e.minutes : 0, r ? e.seconds : 0);
    }

    function Pl(e, t, n) {
        const r = new zo(1900, 1, 1, e, t, n);
        return r.hours === e && r.minutes === t && r.seconds === n;
    }

    function Vl(e, t, n, r, i, s) {
        const a = new zo(e, t, n, r, i, s);
        return a.year === e && a.month === t && a.day === n && a.hours === r && a.minutes === i && a.seconds === s;
    }

    function Bl(e) {
        return e ? 1 : 0;
    }

    function kl(e) {
        return e ? To.fromNumber(1) : To.fromNumber(0);
    }

    function zl(e) {
        return new Ua(e ? 1 : 0);
    }

    function Hl(e) {
        return !0 === e ? "True" : !1 === e ? "False" : Ho.DEFAULT_TEXT;
    }

    function jl(e) {
        return new zo(e.year, e.month, e.day);
    }

    function ql(e) {
        return new zo(1900, 1, 1, e.hours, e.minutes, e.seconds);
    }

    function Gl(e) {
        return e.toString(Ho.FORMAT.defaultDateTimeFormat.dateTimeFormat);
    }

    function Wl(e) {
        return e.toString(Ho.FORMAT.defaultDateTimeFormat.dateFormat);
    }

    function Kl(e) {
        return Al.isValidDecimal(e) ? e.toString() : Ho.DEFAULT_TEXT;
    }

    function Jl(e) {
        return e.gte(Ho.MIN_INTEGER_VALUE) && e.lte(Ho.MAX_INTEGER_VALUE);
    }

    function Yl(e) {
        return Jl(e) ? e.round().toNumber() : Ho.DEFAULT_INTEGER;
    }

    function Xl(e) {
        return e.gte(Ho.MIN_LONGINTEGER_VALUE.toString()) && e.lte(Ho.MAX_LONGINTEGER_VALUE.toString());
    }

    function Ql(e) {
        return Xl(e) ? To.fromString(e.round().toString()) : Ho.DEFAULT_LONGINTEGER;
    }

    function Zl(e) {
        return Al.isWithinIntegerRange(e.toNumber());
    }

    function eu(e) {
        return Al.isValidLongInteger(e) ? e.toString() : Ho.DEFAULT_TEXT;
    }

    function tu(e) {
        return Al.isValidInteger(e) ? e.toString() : Ho.DEFAULT_TEXT;
    }

    function nu(e, t) {
        let n = t.getRegExpForDate().test(e);
        if (n) {
            const e = Rl(t),
                r = new zo(e.year, e.month, e.day);
            n = r.year === e.year && r.month === e.month && r.day === e.day;
        }
        return n;
    }

    function ru(e, t) {
        if (!nu(e, t)) return zo.defaultValue;
        const n = Rl(t);
        return new zo(n.year, n.month, n.day);
    }

    function iu(e, t) {
        let n = t.getRegExpForDateTime().test(e);
        if (n) {
            const e = xl(t);
            n = Vl(e.year, e.month, e.day, e.hours, e.minutes, e.seconds);
        }
        return n;
    }

    function su(e, t) {
        if (!iu(e, t)) return zo.defaultValue;
        const n = xl(t);
        return new zo(n.year, n.month, n.day, n.hours, n.minutes, n.seconds);
    }

    function au(e) {
        return -1 !== e.toUpperCase().indexOf("T");
    }

    function ou(e) {
        return -1 !== e.indexOf(" ");
    }

    function lu(e) {
        const t = e.toUpperCase().search("T| ");
        return -1 !== t && (e = e.substring(0, t)), e;
    }

    function uu(e) {
        const t = Ho.FORMAT.dateTimeFormats;
        e = lu(e);
        for (let n = 0; n < t.length; ++n)
            if (nu(e, t[n])) return !0;
        return !1;
    }

    function cu(e) {
        const t = Ho.FORMAT.dateTimeFormats;
        e = lu(e);
        for (let n = 0; n < t.length; ++n) {
            const r = ru(e, t[n]);
            if (!r.eq(zo.defaultValue)) return r;
        }
        return zo.defaultValue;
    }

    function du(e) {
        return !au(e) || !isNaN(Date.parse(e));
    }

    function hu(e) {
        const t = Ho.FORMAT.dateTimeFormats;
        if (au(e)) return du(e);
        ou(e) || (e += " 00:00:00");
        for (let n = 0; n < t.length; ++n)
            if (iu(e, t[n])) return !0;
        return !1;
    }

    function gu(e) {
        const t = Ho.FORMAT.dateTimeFormats;
        if (au(e)) return zo.fromISODateTime(e);
        ou(e) || (e += " 00:00:00");
        for (let n = 0; n < t.length; ++n) {
            const r = su(e, t[n]);
            if (!r.eq(zo.defaultValue)) return r;
        }
        return zo.defaultValue;
    }

    function pu(e) {
        const t = e.indexOf(" ");
        return -1 !== t && (e = e.substring(t + 1, e.length)), e;
    }

    function fu(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Ho.FORMAT.defaultDateTimeFormat;
        if (au(e)) return du(e);
        ou(e) && (e = pu(e));
        let n = t.getRegExpForTime().test(e);
        if (n) {
            const e = Cl(t);
            n = Pl(e.hours, e.minutes, e.seconds);
        }
        return n;
    }

    function mu(e) {
        if (au(e)) {
            const t = zo.fromISODateTime(e);
            return new zo(1900, 1, 1, t.hours, t.minutes, t.seconds, t.milliseconds);
        }
        return ou(e) && (e = pu(e)),
            function(e, t) {
                if (!fu(e, t)) return zo.defaultValue;
                const n = Cl(t);
                return new zo(1900, 1, 1, n.hours, n.minutes, n.seconds);
            }(e, Ho.FORMAT.defaultDateTimeFormat);
    }

    function vu(e) {
        return e.toString(Ho.FORMAT.defaultDateTimeFormat.timeFormat);
    }

    function yu(e) {
        if (Ho.FORMAT.numberFormat.getRegExpForInteger().test(e)) {
            const t = parseInt(e, 10);
            if (!isNaN(t) && t >= Ho.MIN_INTEGER_VALUE && t <= Ho.MAX_INTEGER_VALUE) return t;
        }
        return null;
    }

    function bu(e) {
        if (Ho.FORMAT.numberFormat.getRegExpForDecimal().test(e)) {
            const t = new Ua(e);
            if (!t.isNaN() && t.gte(Ho.MIN_DECIMAL_VALUE) && t.lte(Ho.MAX_DECIMAL_VALUE)) return t;
        }
        return null;
    }

    function Tu(e) {
        if (!Ho.FORMAT.numberFormat.getRegExpForInteger().test(e)) return null;
        const t = "-" === e.charAt(0);
        if (t && e.length < Ho.MIN_LONGINTEGER_VALUE.toString().length || !t && e.length < Ho.MAX_LONGINTEGER_VALUE.toString().length || Xl(new Ua(e))) try {
            return To.fromString(e);
        } catch (e) {}
        return null;
    }

    function wu(e) {
        return null !== bu(e);
    }

    function Eu(e) {
        return null === bu(e) ? Ho.DEFAULT_DECIMAL : new Ua(e);
    }

    function Iu(e) {
        return null !== yu(e);
    }

    function Au(e) {
        const t = yu(e);
        return null === t ? Ho.DEFAULT_INTEGER : t;
    }

    function Nu(e) {
        return null !== Tu(e);
    }

    function Su(e) {
        const t = Tu(e);
        return null === t ? Ho.DEFAULT_LONGINTEGER : t;
    }

    function Du(e) {
        return "true" === e.toLowerCase();
    }

    function Ru(e) {
        if ("number" == typeof e || Al.isLongInteger(e) || Al.isDecimal(e)) return new Ua(e.toString()).round().toNumber();
        throw new TypeError("Cannot convert type '" + typeof e + "' to 'Integer'");
    }

    function Cu(e) {
        if ("number" == typeof e || Al.isLongInteger(e) || Al.isDecimal(e)) return To.fromString(new Ua(e.toString()).round().toString());
        throw new TypeError("Cannot convert type '" + typeof e + "' to 'LongInteger'");
    }

    function xu(e) {
        if ("number" == typeof e || Al.isLongInteger(e) || Al.isDecimal(e)) return new Ua(e.toString());
        throw new TypeError("Cannot convert type '" + typeof e + "' to 'Decimal'");
    }

    function Lu(e, t, n) {
        if (e instanceof zo || "[object Date]" === Object.prototype.toString.call(e)) {
            const r = new zo(e.getTime()),
                i = t ? r.year : 1900,
                s = t ? r.month : 1,
                a = t ? r.day : 1,
                o = n ? r.hours : 0,
                l = n ? r.minutes : 0,
                u = n ? r.seconds : 0;
            return new zo(i, s, a, o, l, u);
        }
        throw new TypeError("Cannot convert type '" + typeof e + "' to 'DateTime'");
    }

    function Ou(e, t, n, r) {
        return t < 0 ? Ho.DEFAULT_TEXT : (n.length > 1 && (n = n.substr(0, 1)), r.length > 1 && (r = r.substr(0, 1)), e.toFormat(t, Ua.rounding, {
            decimalSeparator: n,
            groupSeparator: r
        }));
    }
    const _u = "[a-zA-Z0-9.!#$%&'*+\\-/=?^_`{|}~]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*",
        Mu = "([0-9a-zA-Z\\\\= ]*|=\\?([^?]*)\\?([qQbB])\\?([^?]*)\\?=)",
        Uu = new RegExp("^" + _u + "$"),
        Fu = new RegExp("^" + Mu + "[ ]*<" + _u + ">$"),
        $u = new RegExp('^\\"' + Mu + '\\"[ ]*<' + _u + ">$");
    var Pu = _exports.BuiltinFunctions = Object.freeze({
        __proto__: null,
        abs: function(e) {
            const t = e.abs();
            return t.isNaN() ? Ho.DEFAULT_DECIMAL : t;
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
        booleanToDecimal: zl,
        booleanToInteger: Bl,
        booleanToLongInteger: kl,
        booleanToText: Hl,
        buildDateTime: function(e, t) {
            return new zo(e.year, e.month, e.day, t.hours, t.minutes, t.seconds, t.milliseconds);
        },
        chr: function(e) {
            return e >= 0 && e <= 65535 ? String.fromCharCode(e) : Ho.DEFAULT_TEXT;
        },
        concat: function(e, t) {
            return (e || "") + (t || "");
        },
        currDate: function() {
            const e = new zo(new Date());
            return new zo(e.year, e.month, e.day);
        },
        currDateTime: function() {
            return new zo(new Date());
        },
        currTime: function() {
            const e = new zo(new Date());
            return new zo(1900, 1, 1, e.hours, e.minutes, e.seconds);
        },
        dateTimeToDate: jl,
        dateTimeToText: Gl,
        dateTimeToTime: ql,
        dateToDateTime: function(e) {
            return e;
        },
        dateToText: Wl,
        day: function(e) {
            return e.day;
        },
        dayOfWeek: function(e) {
            return e.weekDay;
        },
        decimalToBoolean: function(e) {
            return !e.eq(new Ua(0));
        },
        decimalToInteger: Yl,
        decimalToIntegerValidate: Jl,
        decimalToLongInteger: Ql,
        decimalToLongIntegerValidate: Xl,
        decimalToText: Kl,
        diffDays: function(e, t) {
            return Fl(e, t, 864e5, !0);
        },
        diffHours: function(e, t) {
            return Fl(e, t, 36e5);
        },
        diffMinutes: function(e, t) {
            return Fl(e, t, 6e4);
        },
        diffSeconds: function(e, t) {
            return Fl(e, t, 1e3);
        },
        emailAddressValidate: function(e) {
            return "" === e || !/\.@/.test(e) && (Uu.test(e) || Fu.test(e) || $u.test(e));
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
            const s = Ou(e, n, r, i);
            return s === Ho.DEFAULT_TEXT ? Ho.DEFAULT_TEXT : t + s;
        },
        formatDateTime: function(e, t) {
            return e.toString(t);
        },
        formatDecimal: Ou,
        formatPercent: function(e, t, n) {
            try {
                return t < 0 ? "" : (n.length > 1 && (n = n.substr(0, 1)), e.times(100).toFormat(t, Ua.rounding, {
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
                const s = _l(e);
                if (s < t) {
                    i = Ml(i, 0, 1);
                    let n = t - s;
                    for (; n-- > 0;) r ? e = i + e : e += i;
                    return e;
                }
                return s > n ? Ml(e, r ? s - n : 0, n) : e;
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
                localeService: e = gn(fn.LocaleService)
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return e ? e.getCurrentLocale() : Ho.DEFAULT_TEXT;
        },
        getOwnerURLPath: function() {
            return Nr();
        },
        getUserAgent: function() {
            return navigator.userAgent;
        },
        getUserId: function() {
            const e = kr();
            return fi("RolesInfo", `Checking User's ID: ${e}`), e;
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
                if (0 === t.length || n < 0 || n > _l(e)) return -1;
                let a;
                i && (e = e.toLocaleLowerCase(), t = t.toLocaleLowerCase()), n && n > 0 && (a = null === (s = e.match(new RegExp("(" + Ll + ".|.){" + n + "}"))) || void 0 === s ? void 0 : s[0].length);
                const o = r ? e.lastIndexOf(t, a || e.length) : e.indexOf(t, a || 0);
                return o < 0 ? -1 : _l(e.substr(0, o));
            } catch (e) {
                return -1;
            }
        },
        integerToBoolean: function(e) {
            return 0 !== e;
        },
        integerToDecimal: function(e) {
            return new Ua(e);
        },
        integerToIdentifier: function(e) {
            return e;
        },
        integerToLongInteger: function(e) {
            return To.fromNumber(e);
        },
        integerToText: tu,
        length: _l,
        like: function(e, t) {
            if (!t) return !1;
            const n = t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&").replace(/%/g, ".*").replace(/_/g, ".");
            return RegExp(`^${n}$`, "gi").test(e);
        },
        longIntegerToDecimal: function(e) {
            return new Ua(e.toString());
        },
        longIntegerToIdentifier: function(e) {
            return e;
        },
        longIntegerToInteger: function(e) {
            const t = e.toNumber();
            return Al.isWithinIntegerRange(t) ? t : Ho.DEFAULT_INTEGER;
        },
        longIntegerToIntegerValidate: Zl,
        longIntegerToText: eu,
        max: function(e, t) {
            const n = Ua.max(e, t);
            return n.isNaN() ? Ho.DEFAULT_DECIMAL : n;
        },
        min: function(e, t) {
            const n = Ua.min(e, t);
            return n.isNaN() ? Ho.DEFAULT_DECIMAL : n;
        },
        minute: function(e) {
            return e.minutes;
        },
        mod: function(e, t) {
            const n = e.mod(t);
            return n.isNaN() ? Ho.DEFAULT_DECIMAL : n;
        },
        month: function(e) {
            return e.month;
        },
        newDate: function(e, t, n) {
            return Vl(e, t, n, 0, 0, 0) ? new zo(e, t, n) : Ho.DEFAULT_DATE;
        },
        newDateTime: function(e, t, n, r, i, s) {
            return Vl(e, t, n, r, i, s) ? new zo(e, t, n, r, i, s) : Ho.DEFAULT_DATETIME;
        },
        newTime: function(e, t, n) {
            return Pl(e, t, n) ? new zo(1900, 1, 1, e, t, n) : Ho.DEFAULT_TIME;
        },
        nullBinary: function() {
            return Ho.DEFAULT_BINARYDATA;
        },
        nullDate: function() {
            return Ho.DEFAULT_DATE;
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
            return Lu(e, !0, !1);
        },
        objectToDateTime: function(e) {
            return Lu(e, !0, !0);
        },
        objectToDecimal: xu,
        objectToInteger: Ru,
        objectToLongInteger: Cu,
        objectToText: function(e) {
            if ("string" == typeof e) return e;
            throw new TypeError("Cannot convert type '" + typeof e + "' to 'Text'");
        },
        objectToTime: function(e) {
            return Lu(e, !1, !0);
        },
        power: function(e, t) {
            const n = e.pow(t);
            return n.isNaN() ? Ho.DEFAULT_DECIMAL : n;
        },
        replace: function(e, t, n) {
            const r = t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
            return e.replace(new RegExp(r, "g"), n);
        },
        round: function(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            const n = e.toDecimalPlaces(t);
            return n.isNaN() ? Ho.DEFAULT_DECIMAL : n;
        },
        second: function(e) {
            return e.seconds;
        },
        sign: function(e) {
            const t = new Ua(0);
            return e.eq(t) || e.isNaN() ? Ho.DEFAULT_INTEGER : e > t ? 1 : -1;
        },
        sqrt: function(e) {
            try {
                const t = e.sqrt();
                return t.isNaN() ? Ho.DEFAULT_DECIMAL : t;
            } catch (e) {
                return Ho.DEFAULT_DECIMAL;
            }
        },
        substr: Ml,
        textToBoolean: Du,
        textToDate: cu,
        textToDateTime: gu,
        textToDateTimeValidate: hu,
        textToDateValidate: uu,
        textToDecimal: Eu,
        textToDecimalValidate: wu,
        textToIdentifier: function(e) {
            return e;
        },
        textToInteger: Au,
        textToIntegerValidate: Iu,
        textToLongInteger: Su,
        textToLongIntegerValidate: Nu,
        textToTime: mu,
        textToTimeValidate: fu,
        timeToText: vu,
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
            return t.isNaN() ? Ho.DEFAULT_DECIMAL : t;
        },
        year: function(e) {
            return e.year;
        }
    });
    const Vu = {
        [Vo.Integer]: Bt.INTEGER,
        [Vo.LongInteger]: Bt.LONGINTEGER,
        [Vo.Decimal]: Bt.DECIMAL,
        [Vo.Currency]: Bt.DECIMAL,
        [Vo.Text]: Bt.TEXT,
        [Vo.PhoneNumber]: Bt.TEXT,
        [Vo.Email]: Bt.TEXT,
        [Vo.Boolean]: Bt.BOOLEAN,
        [Vo.Date]: Bt.DATE,
        [Vo.DateTime]: Bt.DATE_TIME,
        [Vo.Time]: Bt.TIME,
        [Vo.Record]: Bt.UNKNOWN,
        [Vo.RecordList]: Bt.UNKNOWN,
        [Vo.BinaryData]: Bt.BINARY_DATA,
        [Vo.Object]: Bt.UNKNOWN
    };

    function Bu(e) {
        switch (e) {
            case Bt.INTEGER:
            case Bt.LONGINTEGER:
            case Bt.DECIMAL:
            case Bt.TEXT:
            case Bt.BOOLEAN:
            case Bt.DATE:
            case Bt.DATE_TIME:
            case Bt.TIME:
            case Bt.BINARY_DATA:
                return Ko(ku(e));
            default:
                throw new at.DataBaseException("", `Unable to determine default value for type ${zu(e)}`);
        }
    }

    function ku(e) {
        switch (e) {
            case Bt.TEXT:
                return Vo.Text;
            case Bt.BINARY_DATA:
                return Vo.BinaryData;
            case Bt.BOOLEAN:
                return Vo.Boolean;
            case Bt.DATE:
                return Vo.Date;
            case Bt.DATE_TIME:
                return Vo.DateTime;
            case Bt.TIME:
                return Vo.Time;
            case Bt.DECIMAL:
                return Vo.Decimal;
            case Bt.INTEGER:
                return Vo.Integer;
            case Bt.LONGINTEGER:
                return Vo.LongInteger;
            default:
                throw new Error(`Missing case for conversion of DB data type '${e}' to a model data type.`);
        }
    }

    function zu(e) {
        const t = ku(e);
        return Vo[t];
    }

    function Hu(e) {
        const t = Vu[e];
        return null != t ? t : Bt.UNKNOWN;
    }

    function ju(e) {
        return !!e.isGenericRecordType;
    }

    function qu(e) {
        return !!e.isGenericRecordListType;
    }

    function Gu(e) {
        return !!e.isBasicTypeListType;
    }
    var Wu, Ku, Ju, Yu, Xu;
    ! function(e) {
        const t = new Map(),
            n = new Map();

        function r(e, t) {
            switch (t) {
                case Vo.Integer:
                    return e;
                case Vo.LongInteger:
                    return eu(e);
                case Vo.Decimal:
                case Vo.Currency:
                    return Kl(e);
                case Vo.Text:
                case Vo.PhoneNumber:
                case Vo.Email:
                    return e;
                case Vo.Date:
                    return e.toISODate();
                case Vo.DateTime:
                    return e.toString();
                case Vo.Time:
                    return e.toISOTime();
                case Vo.Boolean:
                    return e;
                case Vo.Record:
                case Vo.RecordList:
                    throw new TypeError("Records and Record lists are not basic types");
                case Vo.BinaryData:
                    return "string" == typeof e ? e : e.content;
                case Vo.Object:
                default:
                    return e;
            }
        }

        function i(e, t) {
            switch (t) {
                case Vo.Integer:
                    return Al.ensureIntegerInsideBounds(e), 0 | e;
                case Vo.LongInteger:
                    return "string" == typeof e ? To.fromString(e) : To.fromNumber(e);
                case Vo.Decimal:
                case Vo.Currency:
                    return new Ua(e || "0");
                case Vo.Boolean:
                    return "string" == typeof e ? Du(e) : e;
                case Vo.Text:
                case Vo.PhoneNumber:
                case Vo.Email:
                    return void 0 === e ? "" : e + "";
                case Vo.Date:
                    return e instanceof Date ? new zo(e) : zo.fromISODate(e);
                case Vo.DateTime:
                    return e instanceof Date ? new zo(e) : zo.fromISODateTime(e);
                case Vo.Time:
                    return e instanceof Date ? new zo(e) : zo.fromISOTime(e);
                case Vo.Record:
                case Vo.RecordList:
                    throw new TypeError("Records and Record lists are not basic types");
                case Vo.BinaryData:
                    return Al.hasBinaryDataInterface(e) ? new ko(e.content, e.url) : new ko(e);
                case Vo.Object:
                default:
                    return e;
            }
        }
        e.to = function e(n) {
            let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Vo.Record;
            let s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            let a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
            if (null == n) return;
            let o,
                l = Vo.Record;
            if ("number" != typeof i ? (a = !0 === s, o = i, l = Vo.Record) : (l = i, "boolean" != typeof s && (o = s)), n instanceof el) {
                const i = n,
                    s = i.constructor;
                let l = t.get(s);
                if (!l) {
                    const n = i.getAttributes();
                    l = (t, i, s) => n.reduce((a, o, l) => (o.ignoreForServer || (o.dataType === Vo.Record || o.dataType === Vo.RecordList ? a[o.name] = e(t[o.attrName], i, o.optimizeList && s) : o.dataType !== Vo.Object && (a[o.name] = r(t[o.attrName], n[l].dataType))), a), {}), t.set(s, l);
                }
                return l(n, o, a);
            }
            if (n instanceof tl) {
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
            return l !== Vo.Object ? r(n, l) : void 0;
        }, e.from = function e(t, r) {
            if (ju(r)) {
                const s = r;
                let a = n.get(s);
                if (!a) {
                    const t = s.getAttributes();
                    a = n => {
                        null != n || (n = {});
                        const r = t.reduce((r, s, a) => (s.dataType === Vo.Record || s.dataType === Vo.RecordList ? r[s.attrName] = el.getData(e(n[s.name], t[a].complexType)) : s.dataType === Vo.BinaryData ? r[s.attrName] = i({
                            content: n[s.name],
                            url: n[`_${s.name}URL`]
                        }, t[a].dataType) : r[s.attrName] = i(n[s.name], t[a].dataType), r), {});
                        return new s(new s.RecordClass(r));
                    }, n.set(s, a);
                }
                return a(t);
            }
            if (qu(r) || Gu(r)) {
                if (void 0 === r.getItemType() || null === r.getItemType()) throw Error("A List can only be deserialized if its ItemType is defined.");
                const n = new r();
                return 0 === t.List.length ? n.emptyListItem = e(t.EmptyListItem, r.getItemType()) : n.pushAll(t.List.map(t => e(t, r.getItemType()))), n;
            }
            return i(t, r);
        };
    }(Wu || (Wu = {})),
    function(e) {
        function t(e) {
            return !!(Al.isValidJsNumber(e) && e >= Ho.MIN_INTEGER_VALUE && e <= Ho.MAX_INTEGER_VALUE) || (Al.isLongInteger(e) ? Zl(e) : Al.isDecimal(e) ? Jl(e) : Al.isText(e) ? Iu(e) : !!Al.isBoolean(e));
        }

        function n(e) {
            return !!Al.isValidJsNumber(e) || !!Al.isValidLongInteger(e) || (Al.isValidDecimal(e) ? Xl(e) : Al.isText(e) ? Nu(e) : !!Al.isBoolean(e));
        }

        function r(e) {
            return !!Al.isValidJsNumber(e) || !!(Al.isValidDecimal(e) && Ho.MIN_DECIMAL_VALUE.lte(e) && Ho.MAX_DECIMAL_VALUE.gte(e)) || !!Al.isValidLongInteger(e) || (Al.isText(e) ? wu(e) : !!Al.isBoolean(e));
        }

        function i(e) {
            return Al.isJsNumber(e) ? Al.isValidJsNumber(e) : Al.isLongInteger(e) ? Al.isValidLongInteger(e) : Al.isDecimal(e) ? Al.isValidDecimal(e) : !!Al.isText(e) || !!Al.isBoolean(e) || (Al.isDateTime(e) ? Al.isValidDateTime(e) : !!Al.isJsDate(e) && Al.isValidJsDate(e));
        }

        function s(e) {
            return i(e);
        }

        function a(e) {
            return Al.isJsNumber(e) ? Al.isValidJsNumber(e) : Al.isLongInteger(e) ? Al.isValidLongInteger(e) : Al.isDecimal(e) ? Al.isValidDecimal(e) : Al.isText(e) ? /^(true|false)$/gi.test(e) : !!Al.isBoolean(e);
        }

        function o(e) {
            if (Al.isValidDateTime(e) && e.gte(Ho.MIN_DATE_VALUE) && e.lte(Ho.MAX_DATE_VALUE)) return !0;
            if (Al.isValidJsDate(e) && new zo(e).gte(Ho.MIN_DATE_VALUE) && new zo(e).lte(Ho.MAX_DATE_VALUE)) return !0;
            if (Al.isText(e)) {
                if (Ho.ISO_DATE_FORMAT_REGEXP.test(e)) {
                    const t = new zo(new Date(e));
                    return t.gte(Ho.MIN_DATE_VALUE) && t.lte(Ho.MAX_DATE_VALUE);
                }
                if (uu(e)) {
                    const t = cu(e);
                    return t.gte(Ho.MIN_DATE_VALUE) && t.lte(Ho.MAX_DATE_VALUE);
                }
                return !1;
            }
            return !1;
        }

        function l(e) {
            return !!Al.isValidDateTime(e) || !!Al.isValidJsDate(e) || !!Al.isText(e) && (!(!Ho.RFC3339_TIMEPART.test(e) && !Ho.ISO_DATE_FORMAT_REGEXP.test(e)) || fu(e));
        }

        function u(e) {
            if (Al.isValidDateTime(e) && e.gte(Ho.MIN_DATETIME_VALUE) && e.lte(Ho.MAX_DATETIME_VALUE)) return !0;
            if (Al.isValidJsDate(e) && new zo(e).gte(Ho.MIN_DATETIME_VALUE) && new zo(e).lte(Ho.MAX_DATETIME_VALUE)) return !0;
            if (Al.isText(e)) {
                if (Ho.ISO_DATE_FORMAT_REGEXP.test(e)) {
                    const t = new zo(new Date(e));
                    return t.gte(Ho.MIN_DATETIME_VALUE) && t.lte(Ho.MAX_DATETIME_VALUE);
                }
                if (hu(e)) {
                    const t = gu(e);
                    return t.gte(Ho.MIN_DATETIME_VALUE) && t.lte(Ho.MAX_DATETIME_VALUE);
                }
                return !1;
            }
            return !1;
        }

        function c(e) {
            if (r(e)) {
                if (Al.isJsNumber(e)) return xu(e);
                if (Al.isLongInteger(e)) return xu(e);
                if (Al.isDecimal(e)) return xu(e);
                if (Al.isText(e) && "" !== e) return Eu(e);
                if (Al.isBoolean(e)) return zl(e);
            }
            return Ho.DEFAULT_DECIMAL;
        }

        function d(e) {
            if (i(e)) {
                if (Al.isJsNumber(e)) return Al.isValidInteger(e) ? tu(e) : Kl(new Ua(e));
                if (Al.isLongInteger(e)) return eu(e);
                if (Al.isDecimal(e)) return Kl(e);
                if (Al.isText(e)) return e;
                if (Al.isBoolean(e)) return Hl(e);
                if (Al.isValidDate(e)) return Wl(e);
                if (Al.isValidTime(e)) return vu(e);
                if (Al.isDateTime(e)) return Gl(e);
                if (Al.isJsDate(e)) {
                    const t = new zo(e);
                    return Al.isValidDate(t) ? Wl(t) : Al.isValidTime(t) ? vu(t) : Gl(t);
                }
            }
            return Ho.DEFAULT_TEXT;
        }
        e.isConvertibleTo = function(e, c) {
            switch (c) {
                case Vo.Integer:
                    return t(e);
                case Vo.LongInteger:
                    return n(e);
                case Vo.Decimal:
                    return r(e);
                case Vo.Currency:
                    return function(e) {
                        return r(e);
                    }(e);
                case Vo.Text:
                    return i(e);
                case Vo.PhoneNumber:
                    return function(e) {
                        return i(e);
                    }(e);
                case Vo.Email:
                    return s(e);
                case Vo.Boolean:
                    return a(e);
                case Vo.Date:
                    return o(e);
                case Vo.Time:
                    return l(e);
                case Vo.DateTime:
                    return u(e);
                case Vo.BinaryData:
                    return function(e) {
                        return Al.isBinaryData(e);
                    }(e);
                default:
                    return !1;
            }
        }, e.isDefault = function(e) {
            return Al.isValidJsNumber(e) && e === Ho.DEFAULT_INTEGER || Al.isValidLongInteger(e) && e.equals(Ho.DEFAULT_LONGINTEGER) || Al.isValidDecimal(e) && e.equals(Ho.DEFAULT_DECIMAL) || Al.isText(e) && e === Ho.DEFAULT_TEXT || Al.isBoolean(e) && e === Ho.DEFAULT_BOOLEAN || Al.isValidDateTime(e) && e.equals(Ho.DEFAULT_DATETIME);
        }, e.convertTo = function(e, r) {
            switch (r) {
                case Vo.Integer:
                    return function(e) {
                        if (t(e)) {
                            if (Al.isJsNumber(e)) return Ru(e);
                            if (Al.isLongInteger(e)) return Ru(e);
                            if (Al.isDecimal(e)) return Ru(e);
                            if (Al.isText(e) && "" !== e) return Au(e);
                            if (Al.isBoolean(e)) return Bl(e);
                        }
                        return Ho.DEFAULT_INTEGER;
                    }(e);
                case Vo.LongInteger:
                    return function(e) {
                        if (n(e)) {
                            if (Al.isJsNumber(e)) return Cu(e);
                            if (Al.isLongInteger(e)) return Cu(e);
                            if (Al.isDecimal(e)) return Cu(e);
                            if (Al.isText(e) && "" !== e) return Su(e);
                            if (Al.isBoolean(e)) return kl(e);
                        }
                        return Ho.DEFAULT_LONGINTEGER;
                    }(e);
                case Vo.Decimal:
                    return c(e);
                case Vo.Currency:
                    return function(e) {
                        return c(e);
                    }(e);
                case Vo.Text:
                    return d(e);
                case Vo.PhoneNumber:
                    return function(e) {
                        return d(e);
                    }(e);
                case Vo.Email:
                    return function(e) {
                        return s(e) && Al.isText(e) ? e : Ho.DEFAULT_EMAIL;
                    }(e);
                case Vo.Boolean:
                    return function(e) {
                        if (a(e)) {
                            if (Al.isJsNumber(e)) return 0 !== e;
                            if (Al.isLongInteger(e)) return !e.eq(0);
                            if (Al.isDecimal(e)) return !e.eq(0);
                            if (Al.isText(e) && "" !== e) return !/^(false)$/gi.test(e);
                            if (Al.isBoolean(e)) return e;
                        }
                        return Ho.DEFAULT_BOOLEAN;
                    }(e);
                case Vo.Date:
                    return function(e) {
                        if (o(e)) {
                            if (Al.isDateTime(e)) {
                                const t = e;
                                return new zo(t.year, t.month, t.day);
                            }
                            if (Al.isJsDate(e)) {
                                const t = e;
                                return new zo(t.getFullYear(), t.getMonth() + 1, t.getDate());
                            }
                            if (Al.isText(e) && "" !== e) return Ho.RFC3339_DATEPART.test(e) ? zo.fromISODate(e) : Ho.ISO_DATE_FORMAT_REGEXP.test(e) ? jl(zo.fromISODateTime(e)) : cu(e);
                        }
                        return Ho.DEFAULT_DATE;
                    }(e);
                case Vo.Time:
                    return function(e) {
                        if (l(e)) {
                            if (Al.isDateTime(e)) {
                                const t = e;
                                return new zo(null, null, null, t.hours, t.minutes, t.seconds, t.milliseconds);
                            }
                            if (Al.isJsDate(e)) {
                                const t = e;
                                return new zo(null, null, null, t.getHours(), t.getMinutes(), t.getSeconds());
                            }
                            if (Al.isText(e) && "" !== e) return Ho.RFC3339_TIMEPART.test(e) ? zo.fromISOTime(e) : Ho.ISO_DATE_FORMAT_REGEXP.test(e) ? ql(zo.fromISODateTime(e)) : mu(e);
                        }
                        return Ho.DEFAULT_TIME;
                    }(e);
                case Vo.DateTime:
                    return function(e) {
                        if (u(e)) {
                            if (Al.isDateTime(e)) {
                                const t = e;
                                return new zo(t.year, t.month, t.day, t.hours, t.minutes, t.seconds, t.milliseconds);
                            }
                            if (Al.isJsDate(e)) return new zo(e);
                            if (Al.isText(e) && "" !== e) return Ho.ISO_DATE_FORMAT_REGEXP.test(e) ? zo.fromISODateTime(e) : gu(e);
                        }
                        return Ho.DEFAULT_DATETIME;
                    }(e);
                case Vo.BinaryData:
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
    }(Ku || (Ku = {})),
    function(e) {
        function t(e) {
            return e - e % 1;
        }
        e.to = function(e, t) {
            return function(e, t) {
                switch (t) {
                    case Vo.Integer:
                        return e;
                    case Vo.LongInteger:
                        const t = e;
                        return Al.ensureNumberInsideBounds(t), t.toNumber();
                    case Vo.Decimal:
                    case Vo.Currency:
                        const n = e;
                        return Al.ensureNumberPrecision(n), Al.ensureNumberInsideBounds(n), n.toNumber();
                    case Vo.Text:
                    case Vo.PhoneNumber:
                    case Vo.Email:
                        return e;
                    case Vo.Date:
                    case Vo.DateTime:
                    case Vo.Time:
                        return e.toNative();
                    case Vo.Boolean:
                        return e;
                    case Vo.Record:
                    case Vo.RecordList:
                        throw new TypeError("Records and Record lists are not basic types");
                    case Vo.BinaryData:
                        return "string" == typeof e ? e : e.content;
                    case Vo.Object:
                    default:
                        return e;
                }
            }(e, t);
        }, e.from = function(e, n) {
            return function(e, n) {
                switch (n) {
                    case Vo.Integer:
                        if (Al.isValidJsNumber(e)) return Al.ensureIntegerInsideBounds(e), t(e);
                        break;
                    case Vo.LongInteger:
                        if (Al.isValidJsNumber(e)) return Al.ensureLongIntegerInsideBounds(e), To.fromNumber(t(e));
                        break;
                    case Vo.Decimal:
                    case Vo.Currency:
                        if (Al.isValidJsNumber(e)) return Al.ensureDecimalInsideBounds(e), new Ua(e);
                        break;
                    case Vo.Boolean:
                        if (Al.isBoolean(e)) return e;
                        break;
                    case Vo.Text:
                    case Vo.PhoneNumber:
                    case Vo.Email:
                        if (Al.isText(e)) return e;
                        if (Al.isValidJsNumber(e)) return Al.ensureDecimalInsideBounds(e), Kl(new Ua(e));
                        if (Al.isBoolean(e)) return Hl(e);
                        break;
                    case Vo.Date:
                        if (Al.isValidJsDate(e)) {
                            const t = e;
                            return new zo(t.getFullYear(), t.getMonth() + 1, t.getDate());
                        }
                        break;
                    case Vo.DateTime:
                        if (Al.isValidJsDate(e)) return new zo(e);
                        break;
                    case Vo.Time:
                        if (Al.isValidJsDate(e)) {
                            const t = e;
                            return new zo(null, null, null, t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds());
                        }
                        break;
                    case Vo.BinaryData:
                        return Al.hasBinaryDataInterface(e) ? new ko(e.content, e.url) : new ko(e);
                    case Vo.Object:
                        return e;
                }
                throw new at.InvalidJavascriptType(`Cannot assign a JavaScript ${typeof e} with value ${null == e ? JSON.stringify(e) : e.toString()} to an output parameter of type ${Vo[n]}`);
            }(e, n);
        };
    }(Ju || (Ju = {})),
    function(e) {
        const t = new Map();

        function n(e, t, n) {
            let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
            let i = arguments.length > 4 ? arguments[4] : undefined;
            let s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
            if (!1 !== r || s || !Wo(e, n)) switch (t) {
                case Vo.Time:
                    return e.toISOTime();
                case Vo.Date:
                    return e.toISODate();
                case Vo.DateTime:
                    return !0 === i ? "" + Math.floor(e.getTime() / 1e3) : e.toString().replace(/\.\d+/, "");
                case Vo.LongInteger:
                    const t = e;
                    return Al.ensureNumberInsideBounds(t), t.toNumber();
                case Vo.Decimal:
                case Vo.Currency:
                    const n = e;
                    return Al.ensureNumberPrecision(n), Al.ensureNumberInsideBounds(n), n.toNumber();
                case Vo.Record:
                case Vo.RecordList:
                    throw new TypeError("Records and Record lists are not basic types");
                case Vo.BinaryData:
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
                dataType: s = Vo.Record,
                defaultValue: a,
                enforceDefaultValueSerializationAtThisLevel: o = !1
            } = _ref12;
            if (null != e) return e instanceof el ? function(e, t, i) {
                let s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
                const a = e.getAttributes().reduce((s, a) => {
                    if (a.dataType === Vo.Record || a.dataType === Vo.RecordList) {
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
            }(e, null != t && t, null != i && i, o) : e instanceof tl ? function(e, t, n) {
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
            }(e, null != t && t, null != i && i, o) : n(e, s, null != a ? a : Ko(s), t, i, o);
        }

        function i(e, t, n, r) {
            if (null == e) return n;
            switch (t) {
                case Vo.Integer:
                    return function(e) {
                        let t;
                        Ho.FORMAT.numberFormat.getRegExpForInteger().test(e) ? t = new Ua(e) : Ho.FORMAT.numberFormat.getRegExpForJSNumber().test(e) && (t = new Ua(+e));
                        if (void 0 === t || !t.isInteger() || !Jl(t)) throw new at.Exception("Could not convert '" + e + "' to Integer");
                        return Yl(t);
                    }(e);
                case Vo.LongInteger:
                    return function(e) {
                        let t;
                        Ho.FORMAT.numberFormat.getRegExpForInteger().test(e) ? t = new Ua(e) : Ho.FORMAT.numberFormat.getRegExpForJSNumber().test(e) && (t = new Ua(+e));
                        if (void 0 === t || !t.isInteger() || !Xl(t)) throw new at.Exception("Could not convert '" + e + "' to Long Integer");
                        return Ql(t);
                    }(e);
                case Vo.Currency:
                case Vo.Decimal:
                    return function(e) {
                        let t;
                        Ho.FORMAT.numberFormat.getRegExpForInteger().test(e) ? t = new Ua(e) : Ho.FORMAT.numberFormat.getRegExpForJSNumber().test(e) && (t = new Ua(+e));
                        if (void 0 === t || t.lt(Ho.MIN_DECIMAL_VALUE) || t.gt(Ho.MAX_DECIMAL_VALUE)) throw new at.Exception("Could not convert '" + e + "' to Decimal");
                        return t;
                    }(e);
                case Vo.DateTime:
                    return function(e, t) {
                        if (!t) {
                            if (!Ku.isConvertibleTo(e, Vo.DateTime)) throw new at.Exception("Could not convert '" + e + "' to DateTime");
                            return Wu.from(e, Vo.DateTime);
                        }
                        e instanceof Date && (e = new zo(e.getTime()));
                        try {
                            return new zo(1e3 * +e);
                        } catch (t) {
                            throw new at.Exception("Could not convert '" + e + "' to DateTime");
                        }
                    }(e, r);
                default:
                    return Wu.from(e, t);
            }
        }
        e.to = r, e.from = function e(n, r, s, a) {
            if (ju(r)) {
                const a = r;
                let o = t.get(a);
                if (!o) {
                    const n = a.getAttributes();
                    o = (t, s) => {
                        null != t || (t = {});
                        const a = n.reduce((r, a, o) => ("" !== a.nameForJson && (a.dataType === Vo.Record || a.dataType === Vo.RecordList ? r[a.attrName] = el.getData(e(t[a.nameForJson], n[o].complexType, s)) : r[a.attrName] = i(t[a.nameForJson], n[o].dataType, n[o].defaultValue, s)), r), {});
                        return new r(new r.RecordClass(a));
                    }, t.set(a, o);
                }
                return o(n, s);
            }
            if (qu(r) || Gu(r)) {
                if (void 0 === r.getItemType() || null === r.getItemType()) throw Error("A List can only be deserialized if its ItemType is defined.");
                let t = n;
                if (null == t && (t = []), t.constructor !== Array) throw new TypeError("Could not convert '" + t + "' to List");
                const i = new r();
                return i.pushAll(t.map(t => e(t, r.getItemType(), s))), i;
            }
            return i(n, r, void 0 === a ? Ko(r) : a, s);
        };
    }(Yu || (Yu = {})),
    function(e) {
        e.typeDefaultValue = Bu, e.convertToModelDataType = ku, e.typeDisplayName = zu;
        const t = "1900-01-01 00:00:00",
            n = new Map();

        function r(e) {
            const t = Vu[e];
            return void 0 === t ? $t.DBDataType.UNKNOWN : t;
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
            if (ju(r)) {
                const l = t,
                    u = r,
                    c = a;
                let d = n.get(u);
                if (!d) {
                    const t = u.getAttributes();
                    d = (n, i, s, a) => {
                        const o = {};
                        return a && a.length > 0 ? (t.forEach(e => {
                            e.dataType !== Vo.RecordList && (o[e.attrName] = null);
                        }), a.forEach(r => {
                            const a = t.filter(e => e.attrName === r)[0];
                            a.complexType ? o[r] = e(n, a.complexType, i) : o[r] = s(n, i.value++, a.name, a.dataType);
                        })) : t.forEach((a, l) => {
                            a.dataType !== Vo.RecordList && (a.dataType === Vo.Record && r.isAnonymousRecord() ? o[a.attrName] = e(n, t[l].complexType, i) : o[a.attrName] = s(n, i.value++, t[l].name, t[l].dataType));
                        }), new r.RecordClass(o);
                    }, n.set(u, d);
                }
                return d(l, c, r.isAnonymousRecord() ? s : i, o);
            }
            if (qu(r)) {
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
            if (r.isEntityReference && Wo(n, e.typeDefaultValue(r.type))) return null;
            switch (r.type) {
                case $t.DBDataType.INTEGER:
                    return n;
                case $t.DBDataType.LONGINTEGER:
                    return n ? n.toString() : null;
                case $t.DBDataType.DECIMAL:
                    const e = n;
                    return r.decimals ? e.toFixed(r.decimals) : e.toString();
                case $t.DBDataType.TEXT:
                    return n;
                case $t.DBDataType.BOOLEAN:
                    return n ? 1 : 0;
                case $t.DBDataType.DATE_TIME:
                    let i = n.toNative();
                    return n.eq(zo.defaultValue) ? t : (i = n.toNative(), a(i.getUTCFullYear(), "0000") + "-" + a(i.getUTCMonth() + 1, "00") + "-" + a(i.getUTCDate(), "00") + " " + a(i.getUTCHours(), "00") + ":" + a(i.getUTCMinutes(), "00") + ":" + a(i.getUTCSeconds(), "00"));
                case $t.DBDataType.DATE:
                    const s = n.toNative();
                    return a(s.getFullYear(), "0000") + "-" + a(s.getMonth() + 1, "00") + "-" + a(s.getDate(), "00");
                case $t.DBDataType.TIME:
                    const o = n.toNative();
                    return "1900-01-01 " + a(o.getHours(), "00") + ":" + a(o.getMinutes(), "00") + ":" + a(o.getSeconds(), "00");
                case $t.DBDataType.BINARY_DATA:
                    const l = n;
                    return void 0 === l.content ? null : l.content;
                default:
                    throw new at.DataBaseException("", `Unable to serialize ${n} to a database value.`);
            }
        }, e.deserializeFromDB = function(n, r) {
            if (null === n) return e.typeDefaultValue(r);
            switch (r) {
                case $t.DBDataType.INTEGER:
                    return n;
                case $t.DBDataType.LONGINTEGER:
                    return To.fromValue(n);
                case $t.DBDataType.DECIMAL:
                    return new Ua(n);
                case $t.DBDataType.TEXT:
                    return n;
                case $t.DBDataType.BOOLEAN:
                    return 0 !== n;
                case $t.DBDataType.DATE_TIME:
                case $t.DBDataType.DATE:
                case $t.DBDataType.TIME:
                    const e = /^((\d{4})-(\d{2})-(\d{2}))?\s?((\d{2}):(\d{2}):(\d{2}))?$/.exec(n),
                        i = new Date();
                    switch (r) {
                        case $t.DBDataType.DATE_TIME:
                            if (n === t) return zo.defaultValue;
                            i.setUTCFullYear(parseInt(e[2], 10), parseInt(e[3], 10) - 1, parseInt(e[4], 10)), i.setUTCHours(parseInt(e[6], 10) || 0, parseInt(e[7], 10) || 0, parseInt(e[8], 10) || 0, 0);
                            break;
                        case $t.DBDataType.DATE:
                            i.setFullYear(parseInt(e[2], 10), parseInt(e[3], 10) - 1, parseInt(e[4], 10)), i.setHours(0, 0, 0, 0);
                            break;
                        case $t.DBDataType.TIME:
                            i.setFullYear(1900, 0, 1), i.setHours(parseInt(e[6], 10) || 0, parseInt(e[7], 10) || 0, parseInt(e[8], 10) || 0, 0);
                    }
                    return new zo(i);
                case $t.DBDataType.BINARY_DATA:
                    return new ko(n);
                default:
                    throw new at.DataBaseException("", "Unable to deserialize " + n + " to a runtime value.");
            }
        }, e.deserializeLazyBinaryFromDB = function(e) {
            return new ko(void 0, void 0, e);
        };
    }(Xu || (Xu = {}));
    var Qu = _exports.DataConversion = Object.freeze({
        __proto__: null,
        get JSConversions() {
            return Ku;
        },
        get JSNodeParamConverter() {
            return Ju;
        },
        get JSONConverter() {
            return Yu;
        },
        get LocalStorageConverter() {
            return Xu;
        },
        get ServerDataConverter() {
            return Wu;
        }
    });
    const Zu = "BACKUP_";

    function ec(e) {}
    var tc, nc, rc, ic;
    ! function(e) {
        e[e.Unchanged = 0] = "Unchanged", e[e.Deleted = 1] = "Deleted", e[e.Recreated = 2] = "Recreated", e[e.New = 3] = "New";
    }(tc || (tc = {})),
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
    }(nc || (nc = {})),
    function(e) {
        const t = "Metamodel";

        function n(e, t) {
            return !! function(e, t) {
                if (void 0 === e) return !0;
                if (e === t) return !1;
                switch (e) {
                    case $t.DBDataType.BOOLEAN:
                        return t !== $t.DBDataType.INTEGER && t !== $t.DBDataType.LONGINTEGER;
                    case $t.DBDataType.INTEGER:
                        return t !== $t.DBDataType.LONGINTEGER && t !== $t.DBDataType.TEXT;
                    case $t.DBDataType.LONGINTEGER:
                        return t !== $t.DBDataType.TEXT;
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
                    if (i && (null == s ? void 0 : s.type) === $t.DBDataType.DATE_TIME) {
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
            return r && t.type === $t.DBDataType.DATE_TIME && (s = r), i = e.isPrimaryKey && s.isPrimaryKey && n ? !!($t.DBDataType.INTEGER !== e.type && $t.DBDataType.LONGINTEGER !== e.type || $t.DBDataType.INTEGER !== s.type && $t.DBDataType.LONGINTEGER !== s.type) : e.type !== s.type, i || s.type !== $t.DBDataType.DECIMAL && s.length !== e.length || s.type !== $t.DBDataType.DECIMAL && s.decimals !== e.decimals || !s.isEntityReference != !e.isEntityReference && !e.isPrimaryKey;
        }! function(e) {
            const n = "OSSYS_ENTITY",
                r = `${Zu}${n}`,
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
                fi(t, `Extracting metadata for table ${e.tableName} (${e.name})`);
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
                return a(e, n).andThen(e => a(e, `${Zu}${n}`));
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
                fi(t, `Updating metadata for table ${r.tableName} (${r.name})`);
                const a = new hc();
                return a.add("Hash", $t.DBDataType.TEXT, r.hash), a.add("Name", $t.DBDataType.TEXT, r.name), a.add("Physical_Table_name", $t.DBDataType.TEXT, r.tableName), a.add("Extra_Info", $t.DBDataType.TEXT, JSON.stringify(s)), a.add("Key", $t.DBDataType.TEXT, r.key), a.add("ModuleKey", $t.DBDataType.TEXT, i), e.executeNonQuery(`UPDATE ${n} SET Hash = ?, Name = ?, Physical_Table_name = ?, Extra_Info = ? WHERE SS_Key = ? AND Module_SS_Key = ?`, a.toArray());
            }, e.insertEntity = function(e, t, r) {
                const i = c(t),
                    s = new hc();
                return s.add("Key", $t.DBDataType.TEXT, t.key), s.add("ModuleKey", $t.DBDataType.TEXT, r), s.add("Name", $t.DBDataType.TEXT, t.name), s.add("TableName", $t.DBDataType.TEXT, t.tableName), s.add("Hash", $t.DBDataType.TEXT, t.hash), s.add("Extra_Info", $t.DBDataType.TEXT, JSON.stringify(i)), s.add("Upgrade_Status", $t.DBDataType.TEXT, 3), e.executeNonQuery(`INSERT INTO ${n}(SS_Key, Module_SS_Key, Name, Physical_Table_name, Hash, Extra_Info, Upgrade_Status) VALUES (?, ?, ?, ?, ?, ?, ?)`, s.toArray());
            };
        }(e.Metamodel || (e.Metamodel = {})), e.upgradeDbValue = function(e, t, r) {
            if (n(t, r)) {
                const n = Xu.deserializeFromDB(e, t.type),
                    i = Xu.convertToModelDataType(r.type),
                    s = function(e, t, n, r) {
                        let i = e,
                            s = t;
                        const a = function(e) {
                                switch (e) {
                                    case $t.DBDataType.TEXT:
                                        return "Text";
                                    case $t.DBDataType.BINARY_DATA:
                                        return "Binary Data";
                                    case $t.DBDataType.BOOLEAN:
                                        return "Boolean";
                                    case $t.DBDataType.INTEGER:
                                        return "Integer";
                                    case $t.DBDataType.LONGINTEGER:
                                        return "Long Integer";
                                    case $t.DBDataType.DECIMAL:
                                        return "Decimal";
                                    case $t.DBDataType.DATE_TIME:
                                        return "DateTime";
                                    case $t.DBDataType.DATE:
                                        return "Date";
                                    case $t.DBDataType.TIME:
                                        return "Time";
                                    default:
                                        return "Unknown";
                                }
                            }(n),
                            o = Vo[r];
                        "string" == typeof e && e && (i = e.substr(0, 50) + ` (length:${e.length})`);
                        if (Al.isText(t)) {
                            const e = t;
                            s = e.substr(0, 50) + ` (length:${e.length})`;
                        }
                        if (t instanceof ko) {
                            const e = t.content;
                            s = e.substr(0, 50) + ` (length:${e.length})`;
                        }
                        return `convert databaseValue:'${i}'/deserializedValue:'${s}' from type ${a} to ${o}`;
                    }(e, n, t.type, i);
                if (Ku.isConvertibleTo(n, i)) {
                    const e = Ku.convertTo(n, i),
                        t = Xu.serializeToDB(e, r);
                    return dc(t, r, s), t;
                }
                throw new at.DataBaseException("", `Unable to ${s}.`);
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
                        const i = null !== (n = r.default) && void 0 !== n ? n : Xu.typeDefaultValue(r.type);
                        e[t] = Xu.serializeToDB(i, r);
                    }
                }
            }(s, t);
            const a = {};
            for (const e of t.attributes) try {
                const t = e.name.toLowerCase(),
                    o = s[t];
                a[t] = r(o, e, n, i);
            } catch (t) {
                throw new at.DataBaseException("", `Unable to upgrade attribute '${e.name}' data type to '${Xu.typeDisplayName(e.type)}':\n${lt(t)}`);
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
            }(e.entityAttribute, e.dbAttribute, e.dbMetaAttribute, r !== $t.AutoNumber.No) : e.entityAttribute.isPrimaryKey));
        };
    }(rc || (rc = {})),
    function(e) {
        e[e.Auto = 0] = "Auto", e[e.Single = 1] = "Single", e[e.Bulk = 2] = "Bulk";
    }(ic || (ic = {}));
    const sc = new El("Id", "idOut"),
        ac = new Il("Record", "recordOut"),
        oc = "WebSQLStorage";
    class lc {
        constructor() {}
        getDatabase() {
            return this._db ? Promise.resolve(this._db) : (this.dbReadyPromise || (this.dbReadyPromise = new Promise(e => {
                this.onDbInit = () => e(this._db);
            })), this.dbReadyPromise);
        }
        initDb(e) {
            fi(oc, `Setting platform database to '${e ? e.name : "none"}'`), this._db = e, this.onDbInit && (this.onDbInit(), this.onDbInit = null);
        }
        clearDb() {
            this._db = null;
        }
        initModule(e, t, n) {
            return this.recoverBackupTables(t, e, n).andThen(t => 0 === e.length ? t.feed(null) : this.dropInconsistentTables(t, e, n)).andThen(t => this.backupDeletedTables(t, e, n)).andThen(e => {
                const t = new hc();
                return t.add("ModuleKey", $t.DBDataType.TEXT, n), e.executeQuery("SELECT SS_Key, Hash, Extra_Info FROM OSSYS_ENTITY WHERE Module_SS_Key = ?", e => ({
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
            return rc.Metamodel.create(e).andThen(e => rc.Metamodel.verifyColumns(e)).andThen((e, t) => {
                if (!t) return rc.Metamodel.addMissingColumns(e);
            });
        }
        createOrUpgradeTable(e, t, n, r) {
            fi(oc, `Checking the status of table ${t.tableName} (${t.name})`), n || (n = {
                hash: null,
                extraInfo: rc.Metamodel.getDefaultMetaData()
            });
            const {
                hash: i,
                extraInfo: s
            } = n;
            return i ? i !== t.hash ? Gi.introspectTableInfo(e, t.tableName).andThen((e, n) => rc.requiresFullUpgrade(t, n, s) ? (fi(oc, `Table ${t.tableName} (${t.name}) exists and will be fully upgraded`), this.recreateTable(e, t, n, r, s)) : (fi(this, `Table ${t.tableName} (${t.name}) exists and will be incrementally upgraded`), this.upgradeTable(e, t, n, r, s))) : (fi(oc, `Table ${t.tableName} (${t.name}) exists and is up to date`), null) : (fi(oc, `Table ${t.tableName} (${t.name}) does not exist and will be created`), this.createTable(e, t, r).andThen(e => rc.Metamodel.insertEntity(e, t, r)));
        }
        recreateTable(e, t, n, r, i) {
            return e.executeQuery(`SELECT * FROM "${t.tableName}"`, e => e).onError(e => {
                throw vi(oc, `Unable to upgrade the definition of entity '${t.name}':\n${lt(e)}`), new at.DataBaseException("", `Unable to upgrade the definition of entity '${t.name}':\n${lt(e)}`);
            }).andThen((e, s) => this.backupTable(e, t.tableName, 2).andThen(e => this.createTable(e, t, r)).andThenAll(() => s.map(e => {
                const r = rc.upgradeDbRecord(e, t, n, i),
                    s = new hc(!0);
                for (const e of t.attributes) s.add(e.name, e.type, r[e.name.toLowerCase()]);
                return e => e.executeNonQuery(t.insert.sql, s.toArray());
            }))).andThen(e => rc.Metamodel.updateEntity(e, t, r));
        }
        upgradeTable(e, t, n, r, i) {
            let s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            return e.feed(null).andThenAll(() => {
                const e = t.attributes.filter(e => n ? !n.attributes.some(t => e.name === t.name) : !Object.keys(i.attrs).some(t => t === e.name.toLowerCase()));
                return fi(this, `Entity '${t.name}' - newAttributes - ${JSON.stringify(e)} - hash - ${s} - info.hash - ${t.hash}`), e.map(e => n => {
                    let r = n.executeNonQuery(e.addColumn.sql);
                    if (void 0 !== e.default) {
                        const n = new hc();
                        n.add("value", e.type, e.default), r = r.andThen(r => r.executeNonQuery(`UPDATE "${t.tableName}" SET "${e.name}" = ?`, n.toArray()));
                    }
                    return r;
                });
            }).andThen(e => rc.Metamodel.updateEntity(e, t, r));
        }
        switchModule(e, t) {
            return this.dropBackupTables(e, t);
        }
        recoverBackupTables(e, t, n) {
            return this.doForEachTable(e, e => (fi(oc, `Recovering table ${e}`), t.filter(t => t.tableName === e), t => this.recoverBackupTable(t, e)), n, "Upgrade_Status <> 0");
        }
        dropInconsistentTables(e, t, n) {
            return this.doForEachTable(e, e => (fi(this, `Dropping inconsistent table ${e} (same key, different physical table name)`), t => this.dropTableIfExists(t, e).andThen(t => t.executeNonQuery(`DELETE FROM OSSYS_ENTITY WHERE upper(Physical_Table_name) = '${e}'`))), n, "Upgrade_Status = 0" + (0 === t.length ? "" : ` AND SS_Key IN (${t.map(e => "'" + e.key + "'").join(", ")}) AND Physical_Table_name NOT IN (${t.map(e => "'" + e.tableName + "'").join(", ")})`));
        }
        dropBackupTables(e, t) {
            return this.doForEachTable(e, e => (fi(oc, `Dropping table ${e}`), t => this.dropBackupTable(t, e)), t, "Upgrade_Status <> 0");
        }
        backupDeletedTables(e, t, n) {
            return this.doForEachTable(e, e => (fi(oc, `Backing up old table ${e}`), t => this.backupTable(t, e, 1)), n, "Upgrade_Status = 0" + (0 === t.length ? "" : ` AND Physical_Table_name NOT IN (${t.map(e => "'" + e.tableName + "'").join(", ")})`));
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
            return fi(oc, `createTable '${t.createTable.sql}'`), e.executeNonQuery(t.createTable.sql);
        }
        backupTable(e, t, n) {
            return fi(oc, `backupTable '${t}'`), rc.Metamodel.copyMetaInfo(e, t, !1).andThen(e => this.dropTableIfExists(e, this.getBackupTableName(t))).andThen(e => this.renameTableAndSetStatus(e, t, this.getBackupTableName(t), t, n));
        }
        recoverBackupTable(e, t) {
            let n = !0;
            return this.dropTableIfExists(e, t).andThen(e => e.executeScalar(`SELECT 1 FROM ${this.getBackupTableName(t)}`)).onError(e => {
                e && (n = !1);
            }).andThen(e => {
                if (n) return this.renameTableAndSetStatus(e, this.getBackupTableName(t), t, t, 0);
            }).andThen(e => rc.Metamodel.copyMetaInfo(e, t, !0));
        }
        dropBackupTable(e, t) {
            return this.dropTableIfExists(e, this.getBackupTableName(t)).andThen(e => e.executeScalar(`SELECT Upgrade_Status FROM OSSYS_ENTITY WHERE upper(Physical_Table_name) = '${t}'`)).andThen((e, n) => e.executeNonQuery(1 === n ? `DELETE FROM OSSYS_ENTITY WHERE upper(Physical_Table_name) = '${t}'` : `UPDATE OSSYS_ENTITY SET Upgrade_Status = 0 WHERE upper(Physical_Table_name) = '${t}'`)).andThen(e => e.executeNonQuery(`DELETE FROM ${Zu}OSSYS_ENTITY WHERE Physical_Table_name = ?`, [t]));
        }
        renameTableAndSetStatus(e, t, n, r, i) {
            return fi(oc, `renameTableAndSetStatus '${r} to ${n}'`), this.renameTable(e, t, n).andThen(e => this.setTableUpgradeStatus(e, r, i));
        }
        renameTable(e, t, n) {
            return e.executeNonQuery(`ALTER TABLE "${t}" RENAME TO "${n}"`);
        }
        setTableUpgradeStatus(e, t, n) {
            return e.executeNonQuery(`UPDATE OSSYS_ENTITY SET Upgrade_Status = ${n} WHERE upper(Physical_Table_name) = '${t}'`);
        }
        getBackupTableName(e) {
            return Zu + e;
        }
        executeNonQuery(e, t) {
            return this.getDatabase().then(n => n.executeTransaction(n => n.executeNonQuery(e, null == t ? void 0 : t.toArray())));
        }
        executeQuery(e, t, n, r) {
            return this.getDatabase().then(i => i.executeReadTransaction(i => i.executeQueryRaw(e, null == r ? void 0 : r.toArray()).andThen((e, r) => Xu.from(r.rows, t, n))));
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
            return this.getDatabase().then(n => n.executeReadTransaction(n => n.executeScalar(e, null == t ? void 0 : t.toArray()).andThen((e, t) => Xu.deserializeFromDB(t, $t.DBDataType.LONGINTEGER))));
        }
        rawExecuteScalar(e, t) {
            return this.getDatabase().then(n => n.executeReadTransaction(n => n.executeQueryRaw(e, null == t ? void 0 : t.toArray()).andThen((e, t) => 0 === t.rows.length ? null : function(e) {
                for (const t in e)
                    if (e.hasOwnProperty(t)) return e[t];
                return null;
            }(t.rows.item(0)))));
        }
        create(e, t) {
            return cc(e, t, "create"), this.getDatabase().then(n => n.executeTransaction(n => this.createInner(n, e, t, !0)));
        }
        createInner(e, t, n, r) {
            var i, s;
            const a = null === (s = (i = t.insert).getArguments) || void 0 === s ? void 0 : s.call(i, n);
            return e.executeQueryRaw(t.insert.sql, null == a ? void 0 : a.toArray()).andThen((e, i) => {
                if (null === t.getIdAttribute()) return null;
                (t.idIsAutoNumber === $t.AutoNumber.No || t.idIsAutoNumber === $t.AutoNumber.YesIfEmpty && !t.hasNullId(n)) && (r = !1);
                const s = t.getIdAttribute().type,
                    a = Xu.convertToModelDataType(s),
                    o = new(sc.getType(a))();
                let l;
                return l = r ? Xu.deserializeFromDB(i.insertId, s) : t.getIdFromRecord(n), o.idOut = l, o;
            });
        }
        update(e, t) {
            var n, r;
            cc(e, t, "update");
            const i = null === (r = (n = e.update).getArguments) || void 0 === r ? void 0 : r.call(n, t);
            return this.executeNonQuery(e.update.sql, i);
        }
        createOrUpdate(e, t) {
            return this.getDatabase().then(n => n.executeTransaction(n => this.createOrUpdateInner(n, e, t, !0)));
        }
        createOrUpdateInner(e, t, n, r) {
            var i, s;
            if (cc(t, n, "create or update"), t.hasNullId(n)) return this.createInner(e, t, n, !0);
            const a = null === (s = (i = t.upsert).getArguments) || void 0 === s ? void 0 : s.call(i, n);
            return e.executeQueryRaw(t.upsert.sql, null == a ? void 0 : a.toArray()).andThen((e, r) => {
                const i = t.getIdFromRecord(n),
                    s = t.getIdAttribute().type,
                    a = Xu.convertToModelDataType(s),
                    o = new(sc.getType(a))();
                return o.idOut = i, o;
            });
        }
        createOrUpdateAll(e, t) {
            return this.getDatabase().then(n => n.executeTransaction(n => lc.ForceCreateOrUpdateAllMethod === ic.Bulk || lc.ForceCreateOrUpdateAllMethod === ic.Auto && 0 === e.attributes.filter(e => e.type === $t.DBDataType.BINARY_DATA).length ? this.createOrUpdateAllBulk(n, e, t) : this.createOrUpdateAllSingle(n, e, t)).then(ec));
        }
        createOrUpdateAllBulk(e, t, n) {
            var r, i, s, a;
            const o = [],
                l = (e, t) => o.push(n => n.executeQueryRaw(e, t)),
                u = Math.floor(lc.MaxQueryParameters / t.attributes.length);
            if (0 === u) return this.createOrUpdateAllSingle(e, t, n);
            const c = Math.ceil(n.length / u);
            for (let e = 0; e < c; e++) {
                let o = [],
                    c = 0;
                for (; c < u;) {
                    const s = e * u + c;
                    if (s === n.length) break;
                    const a = n.getItem(s);
                    cc(t, a, "create or update"), o = o.concat(null === (i = (r = t.upsert).getArguments) || void 0 === i ? void 0 : i.call(r, a).toArray()), c++;
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
                r = new hc();
            return r.add(n.name, n.type, t), this.rawExecuteQuery(e.select.sql, e.dbRecordToRecord, r).then(n => {
                if (0 === n.length) throw new at.DataBaseException("", `${e.name} with id ${t} was not found`); {
                    const e = new(ac.getType(n[0].constructor))();
                    return e.recordOut = n[0], e;
                }
            });
        }
        delete(e, t) {
            const n = e.getIdAttribute(),
                r = new hc();
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
                o = new hc();
            return o.add(i, s, n), Xu.deserializeLazyBinaryFromDB(() => this.getDatabase().then(e => e.executeReadTransaction(e => e.executeScalar(a, o.toArray()))));
        }
        replaceEntityReferencesInOrderBy(e, t, n) {
            let r = Xt(e = e.trim(), '(^|\\s|\\.)(\\[|"|)(ossys_|osltm_|oslog_|osevt_|osusr_|osext_)', !0);
            if (r.length > 0) {
                const e = r[0];
                throw new at.DataBaseException("", `'${e.groups[2] + e.groups[3]}' found in 'Order By' parameter is a reserved prefix`);
            }
            if ("" !== e && (r = Xt(e, "((((\\{\\w+\\})|(\\w+)).)?((\\[\\w+\\])|(\\w+))(( )+(desc|asc))?)(( )*,( )*(((\\{\\w+\\})|(\\w+)).)?((\\[\\w+\\])|(\\w+))(( )+(desc|asc))?)*", !0), 1 !== r.length || r[0].value !== e)) throw new at.DataBaseException("", "Invalid syntax in 'Order By' parameter.");
            let i = Qt(e, "(\\{\\w+\\}|\\w+\\.)", !1, e => this.replaceEntityNameInOrderBy(e, t, n));
            return i = Qt(i, "(\\[\\w+\\])", !1, e => this.replaceAttributeName(e)), i;
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
            if (!s) throw new at.DataBaseException("", `'${i}' found in 'Order By' parameter is an invalid Entity`);
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
    lc.MaxQueryParameters = 500, lc.ForceCreateOrUpdateAllMethod = ic.Auto;
    const uc = new lc();

    function cc(e, t, n) {
        const r = e.getAllAttributesFromRecord(t).toArray();
        for (let t = 0; t < e.attributes.length; t++) {
            const i = e.attributes[t];
            dc(r[t], i, `${n} '${e.name}.${i.name}'`);
        }
    }

    function dc(e, t, n) {
        if (t.type === $t.DBDataType.TEXT) {
            if (null === e || void 0 === t.length) return;
            const r = e.length - t.length;
            if (r > 0) throw new at.DataBaseException("", `Unable to ${n} because it exceeds the maximum allowed length by ${r} characters.`);
        } else if (t.type === $t.DBDataType.DECIMAL && void 0 !== t.length && void 0 !== t.decimals) {
            const r = e.split(".")[0].length - (t.length - t.decimals);
            if (r > 0) throw new at.DataBaseException("", `Unable to ${n} because it exceeds the maximum allowed length by ${r} characters.`);
        }
    }
    class hc {
        constructor(e) {
            this.skipConversion = e, this.argumentList = [], this.existingArguments = {};
        }
        add(e, t, n, r, i, s) {
            if (!this.existingArguments[e])
                if (this.existingArguments[e] = !0, void 0 === n) this.argumentList.push(null);
                else {
                    let e;
                    e = this.skipConversion ? n : Xu.serializeToDB(n, {
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
    var gc = _exports.Entities = Object.freeze({
        __proto__: null,
        BACKUP_TABLE_PREFIX: Zu,
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
            return nc;
        },
        QueryArgumentsList: hc,
        get Upgrades() {
            return rc;
        },
        WebSQLStorage: lc,
        webSQLStorageInstance: uc
    });
    const pc = "_error.html",
        fc = {
            errorCode: "UNHANDLED"
        },
        mc = {
            errorCode: "IGNORED"
        },
        vc = "ErrorHandling",
        yc = {
            errorPageMessage: new et(Ve.Session, "ErrorPageMessage", ""),
            errorPageExtraMessage: new et(Ve.Session, "ErrorPageExtraMessage", ""),
            errorPageExceptionInfo: new et(Ve.Session, "ErrorPageExceptionInfo")
        };

    function bc(t) {
        let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        let i = arguments.length > 3 ? arguments[3] : undefined;
        var s, a;
        if (!ir() && (t && (Nc(t) ? Sc(t) : yi(null !== (s = t.category) && void 0 !== s ? s : vc, t.message || "Navigating to Error page", null !== (a = t.errorCode) && void 0 !== a ? a : "OS-CLRT-00000", t, _loggerJs.Visibility.External)), qn(i))) {
            const e = Sr.getVersionedUrl(pc);
            yc.errorPageMessage.set(n), yc.errorPageExtraMessage.set(r), t ? yc.errorPageExceptionInfo.set(ct(t)) : yc.errorPageExceptionInfo.remove(), sr(e);
        }
    }

    function Tc(e, t) {
        var n;
        const r = ce();
        bc(e, (null === (n = null == r ? void 0 : r.messages) || void 0 === n ? void 0 : n.incompatibleProducer) || e.message, void 0, t);
    }

    function wc(e) {
        var t;
        const n = ce();
        bc(void 0, (null === (t = null == n ? void 0 : n.messages) || void 0 === t ? void 0 : t.appOffline) || "This application is temporarily unavailable. Try reloading or contact the administrator.", void 0, e);
    }

    function Ec(t, n) {
        fi(vc, "Error thrown by the application: " + t, _loggerJs.Visibility.Client), gt(t) ? wc(n) : ot(t, at.IncompatibleProducerException) ? Tc(t, n) : bc(t, void 0, void 0, n);
    }

    function Ic(e, t) {
        return !!ot(e, at.IgnorableSystemException) || !!gt(e) && (wc(t), !0);
    }

    function Ac(e) {
        return e === fc || e === mc;
    }

    function Nc(e) {
        return e && "string" == typeof e.requireType;
    }

    function Sc(t) {
        var n;
        let r = "OS-CLRT-RJS-00000",
            i = _loggerJs.Visibility.Internal;
        if ("timeout" === t.requireType) r = "OS-CLRT-RJS-00005";
        else if ("mismatch" === t.requireType) r = -1 !== t.message.indexOf("anonymous define()") ? "OS-CLRT-RJS-00004" : "OS-CLRT-RJS-00003", i = _loggerJs.Visibility.External;
        else if ("scripterror" === t.requireType) {
            r = /Script error for.*?, needed by:.*/gm.test(t.message) ? "OS-CLRT-RJS-00002" : "OS-CLRT-RJS-00001", i = _loggerJs.Visibility.External;
        }
        yi(vc, null !== (n = t.message) && void 0 !== n ? n : "Error loading script by RequireJS", r, t, i);
    }
    var Dc = _exports.ErrorHandling = Object.freeze({
        __proto__: null,
        ERROR_PAGE_HTML: pc,
        ErrorHandlingStorage: yc,
        IGNORED_ERROR_RESULT: mc,
        UNHANDLED_ERROR_RESULT: fc,
        defaultErrorHandler: function(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (e, t) => Ec(e, t);
            let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (e, t) => Ic(e, t);
            return lt(e) && vi(vc, lt(e)), e instanceof at.NotRegisteredException ? (Fr({
                callbackUrl: me()
            }), fc) : r(e, t) ? mc : (n(e, t), fc);
        },
        handleError: Ec,
        ignoreError: Ic,
        isRequireJSError: Nc,
        isSpecialHandleErrorResult: Ac,
        navigateToAppOffline: wc,
        navigateToErrorPage: bc,
        navigateToIncompatibleProducer: Tc,
        reportRequireJSError: Sc
    });
    let Rc,
        Cc,
        xc = !0;

    function Lc(e) {
        xc = e;
    }

    function Oc(e, t) {
        let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
        let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
        let s = arguments.length > 5 ? arguments[5] : undefined;
        if (!xc) return;
        const a = () => Rc.showMessage(e, t, n, r, i, s);
        Rc ? a() : Cc = a;
    }

    function _c() {
        if (!xc) return;
        Rc ? Rc.closeMessage() : Cc = null;
    }
    var Mc,
        Uc,
        Fc,
        $c,
        Pc = _exports.FeedbackMessageService = Object.freeze({
            __proto__: null,
            closeFeedbackMessage: _c,
            registerFeedbackMessageService: function(e) {
                Rc = e, Cc && (Cc(), Cc = null);
            },
            setEnabled: Lc,
            showFeedbackMessage: Oc
        });
    class Vc {
        constructor() {
            Mc.set(this, 0);
        }
        create() {
            return w(this, Mc, T(this, Mc, "f") + 1, "f"), T(this, Mc, "f");
        }
        shouldAbort(e) {
            return e !== T(this, Mc, "f");
        }
    }

    function Bc(e, t, n) {
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
    Mc = new WeakMap();
    class kc {
        constructor() {
            Uc.add(this), Fc.set(this, new Map());
        }
        create(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Lo;
            const n = T(this, Uc, "m", $c).call(this, e),
                r = n.create();
            return {
                ref: r,
                post: Bc(n, r, t)
            };
        }
    }
    Fc = new WeakMap(), Uc = new WeakSet(), $c = function(e) {
        let t = T(this, Fc, "f").get(e);
        return t || (t = new Vc(), T(this, Fc, "f").set(e, t)), t;
    };
    const zc = "ResourceCache";
    class Hc {
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
    class jc extends Hc {
        constructor() {
            super(), this.isNativeReady = !1, this.isCacheAvailable = !1, Sn().then(() => {
                this.isNativeReady = !0, this.isCacheAvailable = "undefined" != typeof OSCache, this.isCacheAvailable ? (OSCache.addEventListener("onfinish", e => this.onFinish()), OSCache.addEventListener("onerror", e => this.onError(e.message)), OSCache.addEventListener("onprogress", e => this.onProgress(e.loaded, e.total))) : console.error(zc, jc.OSCacheNotFoundMessage);
            }, e => {
                console.error(zc, "OSCache was not initialized because Cordova was not loaded.", e);
            });
        }
        checkOSCacheAndDeferCall(e, t) {
            return this.isNativeReady ? !!this.isCacheAvailable || (e && this.onError(jc.OSCacheNotFoundMessage), !1) : (Sn().then(t), !1);
        }
        getCacheName() {
            return "Native Cache";
        }
        innerStart(e) {
            if (!this.checkOSCacheAndDeferCall(!0, () => this.innerStart(e))) return;
            const t = me(),
                n = `/${Y()}/`,
                r = [];
            for (const i of Object.getOwnPropertyNames(e.urlVersions)) r.push(tn(en(i, n, t), e.urlVersions[i]));
            OSCache.startCaching(e.versionToken, r, e.urlMappings, e.urlMappingsNoCache);
        }
        innerSwitch(e) {
            if (this.checkOSCacheAndDeferCall(!1, () => this.innerSwitch(e))) try {
                OSCache.switchToVersion(e);
            } catch (e) {
                console.error(zc, e);
            }
        }
    }
    jc.OSCacheNotFoundMessage = "OSCache not found (is a native plugin missing?)";
    class qc extends Hc {
        constructor() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : So;
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
            for (let e = 0; e < qc.DefaultWindowSize; ++e) this.prefetchNext(t, "");
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
                        timeout: qc.DefaultResourceTimeout,
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
            const r = tn(en(n, e, t), this.resources[n]);
            this.request(r, e, t), this.requested++;
        }
    }
    qc.DefaultWindowSize = 2, qc.DefaultResourceTimeout = 2e4;
    class Gc extends Hc {
        getCacheName() {
            return "Dummy";
        }
        innerStart(e) {
            this.onFinish();
        }
        innerSwitch(e) {}
    }
    let Wc = "undefined" == typeof document ? new Gc() : Tn() ? new jc() : new qc();
    var Kc, Jc;
    ! function(e) {
        e[e.TransitionStart = 0] = "TransitionStart", e[e.TransitionEnd = 1] = "TransitionEnd", e[e.NavigationStart = 2] = "NavigationStart";
    }(Kc || (Kc = {})),
    function(e) {
        e[e.Success = 0] = "Success", e[e.Failure = 1] = "Failure";
    }(Jc || (Jc = {}));
    let Yc = 0;
    const Xc = (() => {
        const e = [],
            t = Object.keys(Kc).length / 2;
        for (let n = 0; n < t; n++) e.push({});
        return e;
    })();
    var Qc;
    ! function(e) {
        function t(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            const r = "_" + Yc++;
            return Xc[e][r] = {
                listenOnce: n,
                callback: t
            }, {
                type: e,
                id: r
            };
        }

        function n(e, t) {
            return delete Xc[e][t];
        }
        e.listen = t, e.listenOnce = function(e, n) {
            return t(e, n, !0);
        }, e.unregister = function(e) {
            return e && n(e.type, e.id);
        }, e.dispatch = function(e) {
            let t;
            const r = Xc[e.type];
            for (const i in r) {
                const s = r[i];
                s.listenOnce && n(e.type, i);
                const a = s.callback(e.args);
                void 0 !== a && (t = a);
            }
            return t;
        };
    }(Qc || (Qc = {}));
    var Zc = _exports.EventDispatcher = Object.freeze({
        __proto__: null,
        get EventDispatcher() {
            return Qc;
        },
        get EventType() {
            return Kc;
        },
        get TransitionEndResult() {
            return Jc;
        }
    });

    function ed(e) {
        return "name" in e && "registerInitializer" in e && "initialize" in e && "initializerCleanup" in e && "testConnection" in e && "close" in e && "executeReadTransaction" in e && "executeTransaction" in e && "executeUpgradeTransaction" in e;
    }
    class td extends Error {
        constructor(_ref13) {
            let {
                message: e,
                errorCode: t,
                category: n
            } = _ref13;
            super(e), this.errorCode = t, this.category = n;
        }
    }
    const nd = "moduleservices",
        rd = `${nd}/moduleinfo`,
        id = `${nd}/moduleversioninfo`;
    class sd {
        constructor() {
            let {
                getBasePath: e = () => me(),
                getMethod: t = So,
                prefetchedVersion: n
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.getBasePath = null != e ? e : () => me(), this.getMethod = t, this.prefetchedVersion = n;
        }
        init() {
            return b(this, void 0, void 0, function*() {
                try {
                    this.prefetchedVersion = yield this.getLatestVersion();
                } catch (e) {
                    fi("ManifestLoader", `Failed to prefetch latest version. ${e}`);
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
                let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : pn.resolve(fn.UnauthenticatedHttpClient);
                return function*() {
                    var n;
                    const r = `${rd}${_this3.getVersionTokenParameter(e)}`;
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
                let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : pn.resolve(fn.HttpClient);
                return function*() {
                    var n;
                    const r = `${id}?${e}`;
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

    function ad() {
        return b(this, void 0, void 0, function*() {
            const e = yield function() {
                return b(this, void 0, void 0, function*() {
                    try {
                        return yield Sn(), ln(window) ? window.OutSystemsNative.Prebundle : null;
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
    const od = "undefined" != typeof __PERFORMANCE;

    function ld(e) {
        od && __PERFORMANCE.start(e);
    }

    function ud(e) {
        od && __PERFORMANCE.end(e);
    }
    var cd = _exports.Performance = Object.freeze({
        __proto__: null,
        clear: function() {
            if (od) return __PERFORMANCE.clear();
        },
        dump: function() {
            if (od) return __PERFORMANCE.dump();
        },
        end: ud,
        start: ld
    });
    const dd = "VersionsManager",
        hd = "__";
    var gd, pd;
    ! function(e) {
        e[e.Generic = 0] = "Generic", e[e.Resources = 1] = "Resources", e[e.DataModel = 2] = "DataModel";
    }(gd || (gd = {})),
    function(e) {
        e[e.Idle = 0] = "Idle", e[e.Upgrading = 1] = "Upgrading", e[e.UpgradeSuccess = 2] = "UpgradeSuccess", e[e.UpgradeFailed = 3] = "UpgradeFailed";
    }(pd || (pd = {}));
    const fd = {
            applicationInfo: new et(Ve.Persistent, "ApplicationInfo"),
            upgradeStatus: new et(Ve.Session, "UpgradeStatus", 0)
        },
        md = e => {
            const t = e.lastIndexOf(hd);
            return -1 !== t ? e.substring(0, t) : e.replace(".js", "");
        },
        vd = (e, t) => `/${t}/${e}`,
        yd = (e, t, n) => n ? n[vd(e, t)] : void 0,
        bd = function(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            const r = ((e, t) => {
                    let n = e.replace(/(.*)(\?[^?]+)$/, "$1").replace(/(.*)(\.[^.]+)$/, "$1");
                    return t && (n = n.replace(/(.*)(__[^_]+)$/, "$1")), n;
                })(e, n),
                i = Zt(r),
                s = Zt((e => {
                    const t = e.indexOf("?"),
                        n = e.substring(0, t >= 0 ? t : void 0);
                    return n.substring(n.lastIndexOf("."));
                })(e)),
                a = Zt(hd),
                o = new RegExp(`${i}${a}.*${s}$`),
                l = t ? Object.keys(t).find(e => o.exec(e)) : void 0;
            return l ? {
                matchedUrlVersion: l,
                relativeUrlWithoutHashAndExtension: r
            } : n ? {} : bd(e, t, !0);
        },
        Td = function(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Y;
            let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : me;
            const s = r(),
                a = i(),
                o = ((e, t, n) => {
                    const {
                        matchedUrlVersion: r,
                        relativeUrlWithoutHashAndExtension: i
                    } = bd(e, t);
                    if (n && r && i) {
                        const e = r.lastIndexOf(hd);
                        return `${i}${r.substring(e)}`;
                    }
                    return e;
                })(e, t, n),
                l = yd(o, s, t);
            if (l) {
                const e = tn(vd(o, s), null != l ? l : "");
                return en(e, `/${s}/`, a);
            }
            return o;
        };
    class wd {
        constructor() {
            let {
                manifestLoader: e = new sd()
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this._isAutoUpgradeEnabled = !0, this.checkedCachedInfoConsistency = !1, this.manifestLoader = e;
        }
        get cachedAppInfo() {
            let e = fd.applicationInfo.get();
            if (e && !this.checkedCachedInfoConsistency) {
                try {
                    wd.validateApplicationInfo(e);
                } catch (t) {
                    e = void 0, fd.applicationInfo.remove();
                }
                this.checkedCachedInfoConsistency = !0;
            }
            return e;
        }
        set cachedAppInfo(e) {
            fd.applicationInfo.set(e);
        }
        get currentAppInfo() {
            var e, t;
            return null !== (t = null === (e = this.fetchedApplicationInfo) || void 0 === e ? void 0 : e.manifest) && void 0 !== t ? t : this.cachedAppInfo;
        }
        get upgradeStatus() {
            return fd.upgradeStatus.get();
        }
        set upgradeStatus(e) {
            fd.upgradeStatus.set(e);
        }
        initializeManifestLoader() {
            return this.manifestLoader.init();
        }
        initialize() {
            return b(this, void 0, void 0, function*() {
                fi(dd, "Initializing VersionsManager"), this.initialUpgradeStatus = this.upgradeStatus;
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
                if (r(i), xe(function(e, t) {
                        let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Y;
                        let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : me;
                        const i = `/${n()}/`,
                            s = r();
                        return Object.keys(e).filter(e => /\.js$/i.test(e)).reduce((t, n) => {
                            const r = e[n],
                                a = en(n, i, s),
                                o = a.split("/"),
                                l = md(o[o.length - 1]);
                            return t.hasOwnProperty(l) || (t[l] = tn(a, r)), t;
                        }, {});
                    }(i.manifest.urlVersions, i.manifest.versionToken)), this.isNewVersion(i.manifest, s)) {
                    if (!this.isUpgradeDisabled && this.usingStaleIndex(i)) return ur(!0), mi(dd, "Reloading application - index.html was changed in the server", _loggerJs.Visibility.Internal), !1;
                    yield this.upgrade(i, t);
                } else this.initDataModel(t);
                return !0;
            });
        }
        initDataModel(e) {
            fi(dd, "Initializing data model"), e.then(e => this.upgradeDataModel(e).then(() => this.switchDataModel(e)).then(() => {
                this.onVersionReady();
            })).then(() => this.setUpgradeStatus(0)).catch(e => this.handleInitError(e));
        }
        cacheResourcesInBackground(e) {
            return fi(dd, "Caching resources in the background..."), this.fetchApplicationManifest(!1).then(_ref14 => {
                let {
                    manifest: t,
                    isFromPrebundle: n
                } = _ref14;
                const r = this.usingStaleIndex(t);
                if (e && e(r), Qn(r), this.isNewVersion(t.manifest, n)) return this.upgradeResources(t);
            }).catch(e => vi(dd, `Error caching resources for new version in the background: ${e}`));
        }
        getResourceVersionToken(e, t) {
            if (this.currentAppInfo) return yd(e, t, this.currentAppInfo.manifest.urlVersions);
        }
        isNewVersion(e, t) {
            const n = e.versionToken,
                r = this.getLastApplicationVersionToken(),
                i = n !== r;
            if (this.canDisableNativeAutoUpgrade) {
                const e = this.isAutoUpgradeEnabled,
                    s = i && (e || t);
                return fi(dd, () => i ? `Version check found a new version '${n}' from ${t ? "prebundle" : "server"} with auto-upgrade ${e ? "enabled" : "disabled"} and decided it is ${s ? "" : "not "}upgradable. Current version has token '${r}'` : `Version check found the same version '${n}'.`), s;
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
            return Td(e, null === (t = this.currentAppInfo) || void 0 === t ? void 0 : t.manifest.urlVersions, null === (n = this.currentAppInfo) || void 0 === n ? void 0 : n.manifest.cdnUrlVersioning);
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
                    return _this5.canDisableNativeAutoUpgrade && (_this5._isAutoUpgradeEnabled = null !== (t = n.isAutoUpgradeEnabled) && void 0 !== t && t), n.versionToken || yi(dd, "Error retrieving version token from module version info.", "OS-CLRT-60301"), n;
                }();
            });
        }
        checkForNewVersion() {
            this.isUpgradeDisabled || this.isUpgradingVersion || !fd.applicationInfo.isDefined() || this.getLatestVersionFromServer(!1).then(e => {
                this.getLastApplicationVersionToken() !== e.versionToken && this.isAutoUpgradeEnabled && this.onNewVersionDetected(!1, this.isAutoUpgradeEnabled);
            }, e => {
                vi(dd, `Error checking for new version: ${e}`);
            });
        }
        upgrade(e, t) {
            return b(this, void 0, void 0, function*() {
                fi(dd, "New application version detected, starting upgrade..."), this.setUpgradeStatus(1);
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
                    return fi(dd, "Web app - Resource pre-caching is " + (t ? "enabled" : "disabled")), t;
                } {
                    const e = yield this.serviceWorkerIsAvailable(),
                        t = Tn() || !e;
                    return fi(dd, "Mobile app - Pre-caching resources with " + (t ? "Resource Cache" : "Service Worker")), t;
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
            return ld("VersionsManager upgradeResources"), Rt(() => Wc.start(e.manifest), () => ud("VersionsManager upgradeResources"));
        }
        upgradeDataModel(e) {
            return ld("VersionsManager upgradeDataModel"), ed(e) ? (fi(dd, `Initializing data model on ${e.engineName} database.`), Rt(() => b(this, void 0, void 0, function*() {
                const t = yield this.getAllEntityModules(),
                    n = pn.resolve(fn.EntityService);
                for (const e of t) n.registerInitializer(e.getEntityInfos());
                yield e.initialize();
            }), () => ud("VersionsManager upgradeDataModel"))) : (fi(dd, "Initializing data model on SQLite/WebSQL database."), Rt(() => this.doForEachClientEntitiesModule(e, (e, t) => t.init(e)), () => ud("VersionsManager upgradeDataModel")));
        }
        getAllEntityModules() {
            const e = [],
                t = W(),
                n = t ? [t] : G();
            if (n)
                for (const t of n) fi(dd, `Fetching entity module '${t}'.`), e.push(new Promise((e, n) => {
                    Ce([t], t => e(t), n);
                }));
            return Promise.all(e);
        }
        doForEachClientEntitiesModule(e, t) {
            return e.isMock ? Promise.resolve() : this.getAllEntityModules().then(n => e.executeTransaction(e => e.feed(null).andThenAll(() => n.map(e => n => t(n, e)))));
        }
        switchResourcesVersion(e) {
            Wc.switch(e);
        }
        switchDataModel(e) {
            return ed(e) ? (fi(dd, "Finishing initialization of data model on IndexedDB database."), e.initializerCleanup()) : (fi(dd, "Finishing initialization of data model on SQLite/WebSQL database."), this.doForEachClientEntitiesModule(e, (e, t) => t.switch(e)));
        }
        handleInitError(t) {
            const n = this.isUpgradeDisabled ? "Upgrade failed and rollback isn't possible at this time" : "Unable to load the data model";
            yi(dd, n, "OS-CLRT-60303", t, _loggerJs.Visibility.External), Ec(t);
        }
        handleUpgradeError(t) {
            let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Promise.resolve(void 0);
            return ot(t, at.OpenDatabaseException) ? (yi(dd, "Upgrade failed - unable to open the database.", "OS-CLRT-60302", t), Ec(t), Promise.resolve(void 0)) : ir() || 3 === this.initialUpgradeStatus ? 3 === this.initialUpgradeStatus ? (Ec(t), Promise.resolve(void 0)) : (vi(dd, "Upgrade failed - ignoring error due to concurrent navigation."), 3 !== this.upgradeStatus && this.setUpgradeStatus(0), Promise.resolve(void 0)) : (yi(dd, "Upgrade failed - rolling back to previous application version.", "OS-CLRT-60302", t, _loggerJs.Visibility.External), this.rollBackApplicationVersion(n, r));
        }
        get isUpgradingVersion() {
            return 1 === this.upgradeStatus;
        }
        setUpgradeStatus(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return this.upgradeStatus = e, fi(dd, "Upgrade status changed to: " + e), 2 === e ? this.onUpgradeFinished(!0) : 3 === e ? this.onUpgradeFinished(!1, t) : void 0;
        }
        rollBackApplicationVersion(e, t) {
            return this.loadCachedManifest().then(_ref15 => {
                let {
                    manifest: n
                } = _ref15;
                if (this.setUpgradeStatus(3, e), 1 !== e) return t.then(() => Wc.start(n.manifest));
            }).then(() => {
                lr(!1);
            }).catch(e => {
                Ec(e);
            });
        }
        get isUpgradeDisabled() {
            return 3 === this.upgradeStatus;
        }
        get isAutoUpgradeEnabled() {
            return this._isAutoUpgradeEnabled;
        }
        get canDisableNativeAutoUpgrade() {
            return pn.resolve(fn.SettingsManager).readBool("CanDisableAutoUpgrade") && Tn() && this.isRunningCachedIndex();
        }
        isRunningCachedIndex() {
            const e = OSManifestLoader.indexVersionToken,
                t = this.getIndexVersion(this.cachedAppInfo);
            return !!t && e === t;
        }
        usingStaleIndex(e) {
            if (ar()) return !1;
            return (OSManifestLoader.indexVersionToken || this.getIndexVersion(this.cachedAppInfo)) !== this.getIndexVersion(e);
        }
        getIndexVersion(e) {
            if (!e) return "";
            const t = yd("index.html", Y(), e.manifest.urlVersions);
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
                        vi(dd, `Error loading prebundled manifest: ${null !== (e = null == t ? void 0 : t.message) && void 0 !== e ? e : t}`);
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
                    return wd.validateApplicationInfo(e), e;
                }
            });
        }
        innerLoadPrebundledManifest() {
            return ad();
        }
        ensureCachedManifest() {
            if (Tn() || this.cachedAppInfo) return Promise.resolve(void 0); {
                this.setUpgradeStatus(0);
                const e = new td({
                    message: "No cached manifest found. It's not possible to rollback to a previous version.",
                    errorCode: "OS-CLRT-60304"
                });
                return Promise.reject(e);
            }
        }
        getLatestManifestFromServer(e) {
            return this.manifestLoader.getLatestManifest(e).then(e => (wd.validateApplicationInfo(e), {
                manifest: e,
                isFromPrebundle: !1
            }));
        }
        fetchApplicationManifest() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
            return ld("VersionsManager fetchApplicationManifest"), this.isUpgradeDisabled ? this.loadCachedManifest() : this.getLatestVersionFromServer(e).then(e => this.isNewVersion(e, !1) ? this.getLatestManifestFromServer(e.versionToken) : this.loadCachedManifest()).catch(() => this.loadCachedManifest()).then(e => (ud("VersionsManager fetchApplicationManifest"), e));
        }
        enableBackgroundCheckForNewVersions() {
            let e = !1;
            Qc.listen(Kc.NavigationStart, () => e = !0), Qc.listen(Kc.TransitionEnd, () => {
                e = !1, setTimeout(() => {
                    e || this.checkForNewVersion();
                }, 1e3);
            });
        }
    }
    const Ed = new wd();

    function Id(e, t) {
        mi("Public", `'${e}' is deprecated and will be removed on the next version. Consider using '${t}' instead.`);
    }
    const Ad = Pu;
    var Nd, Sd;
    ! function(e) {
        e[e.Info = 0] = "Info", e[e.Success = 1] = "Success", e[e.Warning = 2] = "Warning", e[e.Error = 3] = "Error";
    }(Nd || (Nd = {})),
    function(e) {
        e.showFeedbackMessage = function(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
            let r = arguments.length > 3 ? arguments[3] : undefined;
            let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
            let s = arguments.length > 5 ? arguments[5] : undefined;
            return Oc(e, function(e) {
                switch (e) {
                    case Nd.Info:
                        return 0;
                    case Nd.Success:
                        return 1;
                    case Nd.Warning:
                        return 2;
                    case Nd.Error:
                        return 3;
                    default:
                        throw new Error("Don't know how to convert " + e);
                }
            }(t), n, r, i, s);
        }, e.closeFeedbackMessage = function() {
            return _c();
        };
    }(Sd || (Sd = {}));
    let Dd = class {
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
    var Rd, Cd, xd, Ld;
    ! function(e) {
        e.whenReady = function() {
            return Nn();
        };
    }(Rd || (Rd = {})),
    function(e) {
        e.isUpgradingVersion = function() {
            return Ed.isUpgradingVersion;
        }, e.listen = function(e) {
            fi("ApplicationLifecycle", "Registering listeners for the application load process."), e && (e.onLoadComplete && Vp.waitForAppReady().then(() => {
                var t;
                return null === (t = e.onLoadComplete) || void 0 === t ? void 0 : t.call(e);
            }), e.onUpgradeProgress && Wc.listen(null, null, (t, n) => {
                var r;
                return null === (r = e.onUpgradeProgress) || void 0 === r ? void 0 : r.call(e, t, n);
            }));
        };
    }(Cd || (Cd = {}));
    class Od {
        constructor(e) {
            this._context = e;
        }
        navigateTo(e, t, n) {
            yr(e, this.getTransitionObject(t, O), this._context, !1, n);
        }
        navigateBack(e) {
            br(this.getTransitionObject(e), this._context, !1);
        }
        navigateForward(e) {
            Tr(this.getTransitionObject(e), this._context, !1);
        }
        navigatedFromHistory() {
            return (th.activeScreen ? th.activeScreen.modelContext : {
                viewName: "",
                navigatedFromHistory: !1,
                viewWasRestoredFromCache: !1
            }).navigatedFromHistory;
        }
        registerBackNavigationHandler(e) {
            return cr(e);
        }
        unregisterBackNavigationHandler(e) {
            dr(e);
        }
        registerNavigationHandler(e) {
            return hr(e);
        }
        getTransitionObject(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            return M(e, t);
        }
    }! function(t) {
        t.log = function(t, n) {
            mi(t, n, _loggerJs.Visibility.Client);
        }, t.error = function(t, n, r) {
            yi(t, n, void 0, r, _loggerJs.Visibility.Client);
        };
    }(xd || (xd = {}));
    class _d {
        constructor(e) {
            this._model = e;
        }
        static get ActiveScreenCssClass() {
            return "active-screen";
        }
        getCurrentScreenRootElement() {
            return document.querySelector("." + _d.ActiveScreenCssClass);
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
            return hn(fn.DeviceHelperClassProvider, () => e);
        }
    }
    class Md {
        static getCurrentContext() {
            const e = rh();
            return {
                applicationKey: V() || "",
                applicationName: B() || "",
                screenKey: e ? e.screenKey : "",
                screenName: e ? e.screenName : "",
                isReady: Vp.isReady
            };
        }
    }
    class Ud {
        static get Instance() {
            return Ud;
        }
        static get isUpgradingVersion() {
            return Id("ApplicationLoad.isUpgradingVersion", "ApplicationLifecycle.isUpgradingVersion()"), Cd.isUpgradingVersion();
        }
        static listen(e) {
            Id("ApplicationLoad.listen()", "ApplicationLifecycle.listen()"), Cd.listen(e);
        }
    }! function(e) {
        e.showOutSystemsWatermark = function() {
            return he();
        };
    }(Ld || (Ld = {}));
    var Fd,
        $d = _exports.Public = Object.freeze({
            __proto__: null,
            ApplicationContext: Md,
            get ApplicationLifecycle() {
                return Cd;
            },
            ApplicationLoad: Ud,
            get Branding() {
                return Ld;
            },
            BuiltinFunctions: Ad,
            get Device() {
                return Rd;
            },
            get FeedbackMessage() {
                return Sd;
            },
            get FeedbackMessageType() {
                return Nd;
            },
            get Logger() {
                return xd;
            },
            Navigation: Od,
            Validation: Dd,
            View: _d
        });
    class Pd {
        constructor(e, t) {
            this._model = e, this._navigationContext = t;
        }
        get BuiltinFunctions() {
            return Pu;
        }
        get Validation() {
            return this._validation || (this._validation = new Dd(this._model)), this._validation;
        }
        get FeedbackMessage() {
            return Sd;
        }
        get Device() {
            return Rd;
        }
        get ApplicationLifecycle() {
            return Cd;
        }
        get ApplicationContext() {
            return Md;
        }
        get ApplicationLoad() {
            return Ud;
        }
        get Navigation() {
            return this._navigation || (this._navigation = new Od(this._navigationContext)), this._navigation;
        }
        get Logger() {
            return xd;
        }
        get View() {
            return this._view || (this._view = new _d(this._model)), this._view;
        }
        get Branding() {
            return Ld;
        }
    }! function(e) {
        e[e.Block = 0] = "Block", e[e.IteratorItem = 1] = "IteratorItem", e[e.None = 2] = "None";
    }(Fd || (Fd = {}));
    const Vd = "-";
    class Bd {
        constructor(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Fd.None;
            let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            switch (this._ownerService = e, n) {
                case Fd.Block:
                    this._namespace = "b";
                    break;
                case Fd.IteratorItem:
                    this._namespace = "l";
                    break;
                default:
                    this._namespace = "";
            }
            if (this._namespace += t, e) {
                const t = r ? r + Vd : "";
                this._namespace = e.namespace + this._namespace + Vd + t;
            } else this._namespace && (this._namespace = this._namespace + Vd);
        }
        getId(e) {
            return e ? this.namespace + e : null;
        }
        static nameFromId(e) {
            return e.substring(e.lastIndexOf(Vd) + 1);
        }
        get namespace() {
            return this._namespace;
        }
        get ownerService() {
            return this._ownerService;
        }
    }
    var kd = _exports.WidgetNaming = Object.freeze({
        __proto__: null,
        get NamespaceKind() {
            return Fd;
        },
        WidgetIdService: Bd
    });
    class zd {
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
                n.isValidationAggregator ? e = new Hd(t) : n.validate && (e = n.validate()), e && (this.updateWidgetValidationsProperties(n, e.valid, e.validationMessage), e.valid || (t = !1));
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
            return Bd.nameFromId(e);
        }
        getWidgetChildren() {
            return this.widgetChildren;
        }
        dispose() {
            this.disposed = !0;
        }
    }
    class Hd {
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
    var jd = _exports.Validation = Object.freeze({
        __proto__: null,
        ValidationResult: Hd,
        ValidationService: zd
    });
    const qd = () => {};
    class Gd {
        constructor(e, t) {
            this.controllerClass = e, this.messagesProvider = t;
        }
        create(e, t) {
            return new this.controllerClass(e, this.messagesProvider, t);
        }
        static executeWithNavigationCallbacks(e, t, n) {
            Wn(t);
            return Rt(e, () => {
                t.dispose(n), Jn();
            });
        }
        initialize(e, t, n, r, i, s) {
            return b(this, void 0, void 0, function*() {
                const a = th.activeScreen,
                    o = a ? a.callContext() : n.callContext();
                try {
                    zr() && (yield new Promise(e => {
                        new Pd(null, null).ApplicationLifecycle.listen({
                            onLoadComplete: e
                        });
                    }), yield Jr()), this.controllerClass.checkPermissions();
                } catch (e) {
                    const t = {
                        permissionsOk: !1
                    };
                    return Gd.executeWithNavigationCallbacks(() => n.handleError(e, o), r, o).then(() => t, e => t);
                }
                const l = t.create(e),
                    u = this.create(l, new Bd(null));
                u.setAsActiveScreen();
                const c = Gd.executeWithNavigationCallbacks(() => u.fireInitialize({
                        rootSpan: s
                    }), i, u.callContext()),
                    d = {
                        permissionsOk: !0,
                        controller: u,
                        model: l
                    };
                return c.then(() => d, e => ot(e, at.UnhandledOrIgnoredErrorInEventException) && e.handleErrorResult === fc ? {
                    permissionsOk: !0
                } : d);
            });
        }
        get activeScreenController() {
            return th.activeScreen;
        }
    }
    class Wd {
        constructor() {
            this._iterationContext = new Kd(), this._id = ++Wd.currentId;
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
            return e._id = ++Wd.currentId, e;
        }
        innerClone(e) {
            const t = Object.create(this, null != e ? e : {});
            return t.iterationContext = this.iterationContext.clone(), t;
        }
        get isOutOfContext() {
            return !!th.activeScreen && this.viewName !== th.activeScreen.viewName;
        }
    }
    Wd.currentId = 0;
    class Kd {
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
            const e = new Kd();
            return this.iterators && (e.iterators = function(e, t) {
                const n = new Map();
                return e.forEach((e, r) => {
                    const i = t(e);
                    n.set(r, i);
                }), n;
            }(this.iterators, e => Object.create(e))), e;
        }
    }
    const Jd = new Tl(),
        Yd = new Il("Data", "dataOut"),
        Xd = new Il("List", "listOut", [{
            name: "Count",
            attrName: "countOut",
            mandatory: !0,
            dataType: Vo.LongInteger,
            defaultValue: () => To.defaultValue
        }]),
        Qd = "BaseController";
    class Zd {
        constructor(e) {
            if (this.isExecutingJSNode = !1, this.localeChangeHandler = e => {
                    var t;
                    const n = pn.resolve(fn.TranslationsService),
                        r = pn.resolve(fn.LocaleService);
                    if (n) {
                        (null !== (t = e.localeFamily) && void 0 !== t ? t : [e.localeCode]).forEach(e => {
                            var t, i;
                            this.translationResources[e] ? (fi(Qd, `Adding translations for ${e} locale.`), n.add(null !== (t = this.translationResources[e].translations) && void 0 !== t ? t : {}), r.setCurrentLocaleRTL(null !== (i = this.translationResources[e].isRTL) && void 0 !== i && i)) : fi(Qd, `No translations found for ${e} locale.`);
                        });
                    }
                }, this.translationResources = null != e ? e : this.translationResources, this.translationResources) {
                const e = pn.resolve(fn.LocaleService);
                if (e) {
                    const t = e.getCurrentLocale(),
                        n = e.getCurrentLocaleFamily();
                    this.localeChangeHandler({
                        localeCode: t,
                        localeFamily: n
                    }), fi(Qd, "Subscribing handler for locale service."), e.subscribe(this.localeChangeHandler);
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
            return new Pd(null, this.callContext());
        }
        get default() {
            return this;
        }
        get controller() {
            return this;
        }
        callContext() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Wd();
            return e;
        }
        safeExecuteJSNode(e, t, n, r, i, s, a) {
            let o = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !1;
            const l = e => {
                    const r = `Check the JavaScript node '${t}' of the action '${n}'.`;
                    throw ((e = e || new Error(r)) instanceof at.NumberOverflowException || e instanceof at.InvalidJavascriptType) && (e.message = e.message + " " + r), e;
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
            let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : qd;
            let i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : qd;
            let s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            const a = e => {
                if (!Ic(e, n)) throw e;
            };
            try {
                if (s) try {
                    this.ensureControllerAlive(s);
                } catch (t) {
                    throw yi("Controller", `Invalid call of action '${s}'`, "OS-CLRT-60801", t, _loggerJs.Visibility.External), t;
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
                    moduleVersion: Ed.getLastApplicationVersionToken(!0),
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
            return Lo({
                url: t,
                payload: u,
                timeout: l,
                timeoutHandler: () => Promise.resolve((() => {
                    throw vi(e, c), new at.Exception(c, e);
                })()),
                responseHandler: Zd.createPostResponseHandler(a),
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
            const t = pn.resolve(fn.ClientVariablesService);
            t && t.checkSessionExpires();
            const n = pn.resolve(fn.SettingsManager);
            if (n && void 0 !== e.clientSettingsHash && null !== e.clientSettingsHash) {
                n.update(e.clientSettingsHash), Ei(n.readLogLevel());
                const t = n.readNumber("LoggerSchedulerTimeInterval");
                t > 0 && Ii(t);
            }
        }
        static createPostResponseHandler(e) {
            return _ref16 => {
                let {
                    data: t,
                    responseHeaders: n
                } = _ref16;
                Zd.handlePostResponse(t), e && e(t, n);
            };
        }
        executeClientAggregate(e, t) {
            return At(() => e()).then(e => {
                const n = t();
                n.listOut = e.list, n.countOut = e.count;
            });
        }
        ensureControllerAlive(e) {}
        static getJSONDeserializeOutputType(e) {
            return Yd.getType(e);
        }
        static getAggregateOutputType(e) {
            return Xd.getType(e);
        }
        static registerVariableGroupType(e, t) {
            Jd.registerTypeDefinition(e, t);
        }
        static getVariableGroupType(e) {
            return Jd.getType(e);
        }
    }
    const eh = "BaseViewController";
    class th extends Zd {
        fireEvent(e) {
            return At(() => {
                if (e) return e.call(this, this.callContext());
            }).then(e => {
                if (Ac(e)) throw at.UnhandledOrIgnoredErrorInEventException.create(e);
            });
        }
        fireEventAndForget(e) {
            this.fireEvent(e).catch(at.UnhandledOrIgnoredErrorInEventException.ignore);
        }
        constructor(e, t, n, r) {
            super(r), this.model = e, this.messagesProvider = t, this._idService = n, this.instanceId = th.globalInstanceId++, this.isDisposed = !1, this.shouldSendClientVarsToDataSources = !1, this.fetchReadySources = e => {
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
            const i = pn.resolve(fn.LocaleService);
            this.linearRequest = new kc(), i && this.translationResources && (this.model.currentLocale = i.getCurrentLocale()), this.validationServiceInstance = new zd(e, t);
        }
        createPublicApiHelper() {
            return new Pd(this.model, this.callContext());
        }
        static get activeScreen() {
            return th.activeScreenInstance;
        }
        setAsActiveScreen() {
            th.activeScreenInstance = this;
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
            fi(eh, "Using Improved data fetching with dependencies"), e = this.innerFetchDataWithDependencies(), e && this.model.flush();
        }
        executeDataFetchAction(e) {
            return fi(eh, "Fetching " + e), At(() => this[e]()).then(() => {
                this.remainingFetchesCount--, clearTimeout(this.flushTimeoutHandle), fi(eh, "Fetched " + e), this.remainingFetchesCount > 0 ? this.flushTimeoutHandle = window.setTimeout(() => this.model.flush(), 50) : this.model.flush();
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
                    startActiveSpan: n = Ai,
                    setAttributeToSpan: r = this.setAttributesToSpan
                } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return function*() {
                    const i = pn.resolve(fn.ClientVariablesService);
                    i && i.subscribe(_this6.clientVariablesHandler);
                    const s = pn.resolve(fn.LocaleService);
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
            this.fireEvent(this.onReadyEventHandler).then(() => this.fireEvent(this.onRenderEventHandler)).catch(at.UnhandledOrIgnoredErrorInEventException.ignore);
        }
        fireAfterInputsChanged() {
            this.fireEventAndForget(this.onParametersChangedEventHandler);
        }
        fireAfterViewRender() {
            let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
            if (this.onRenderEventHandler) return this.fireEvent(n => {
                if (!t) return this.onRenderEventHandler(n);
                yi("View", `Render loop avoided. This is likely due to the model of the screen/block '${this.viewName}' being changed inside its 'On Render' client action. Avoid changes to the model inside 'On Render' client actions.`, "OS-CLRT-60800", void 0, _loggerJs.Visibility.External);
            });
        }
        fireAfterViewDestroy() {
            let {
                clientVariablesService: e = pn.resolve(fn.ClientVariablesService),
                localeService: t = pn.resolve(fn.LocaleService)
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            e && e.unsubscribe(this.clientVariablesHandler), t && t.unsubscribe(this.localeDependencyHandler), this.fireEventAndForget(this.onDestroyEventHandler);
        }
        registerClientAction(e, t) {
            this[e] = t;
        }
        innerCallAggregate(e, t, n, r, i, s, a, o, l, u, c, d) {
            let h = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : !1;
            const g = this.getEffectiveTimeoutForServerCall(o);
            return fi(eh, `Calling ${e} aggregate with start index endpoint`), this.callServerDataSource(e, t, n, s, a, e => {
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
            fi(eh, `Calling ${e} data source with optimized on payload`), h.screenData = {
                variables: Wu.to(this.model.variables, u, !0)
            }, s && s(h), this.shouldSendClientVarsToDataSources && c && (h.clientVariables = c.serialize()), r(0);
            return wt((n, s) => this.linearRequest.create(e).post({
                url: t,
                payload: h,
                timeout: a,
                timeoutHandler: () => Promise.resolve((() => {
                    const t = `The timeout of ${a}s was reached while fetching this screen data.`;
                    throw vi(e, t), new at.Exception(t);
                })()),
                responseHandler: Zd.createPostResponseHandler(l),
                headers: o,
                useLocaleInfo: d
            }).then(e => this.handleServerDataSourceResponse({
                res: e,
                reject: s,
                resolve: n,
                setDataFromJS: i,
                setDataFetchStatus: r
            })).catch(e => {
                const t = ot(e, at.ViewHasChangedException) || ot(e, at.AbortedRequestException);
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
                return t(new at.AbortedRequestException());
            }
        }
        handleError(e) {
            throw new Error("@abstract");
        }
        safeExecuteAsyncJSNode(e, t, n, r, i, s, a) {
            return this.model.flush(), super.safeExecuteAsyncJSNode(e, t, n, r, i, s, a);
        }
        executeActionInsideJSNode(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : qd;
            let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : qd;
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
                const t = new at.ControllerDisposedException(`Invalid call of the '${e}' client action of the '${this.viewName}' since the latter is not currently active. This is likely due to a platform's client action being used as an event handler or in a setTimeout function. Consider removing this call by using the 'On Destroy' event of the screen/block or moving your logic to a global client action.`);
                throw vi("Controller", t.message), t;
            }
        }
        safeExecuteClientAction(e, t) {
            for (var _len13 = arguments.length, n = new Array(_len13 > 2 ? _len13 - 2 : 0), _key13 = 2; _key13 < _len13; _key13++) {
                n[_key13 - 2] = arguments[_key13];
            }
            return St(() => e.apply(this, n.concat(this.callContext(t))), e => this.handleError(e), () => this.model.flush());
        }
        get modelContext() {
            return this.model.context;
        }
        executeScreenClientAggregate(e, t, n) {
            return At(() => (t().dataFetchStatusAttr = 0, e())).then(e => {
                if (!this.isDisposed) return t().bulkSet(e.list, 1, e.count), At(n);
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
    th.globalInstanceId = 0;
    var nh = _exports.Controller = Object.freeze({
        __proto__: null,
        BaseController: Zd,
        BaseModuleController: class extends Zd {
            constructor() {
                super(...arguments), this.fireApplicationResumeSingletonCallback = this.fireApplicationResume.bind(this);
            }
            registerEventHandler(e, t, n) {
                n(() => new Promise((t, n) => {
                    Ce([e], t, n);
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
                this.onApplicationResumeHandler && Dn("resume", this.fireApplicationResumeSingletonCallback);
            }
            fireApplicationResume() {
                return this.onApplicationResumeHandler ? this.onApplicationResumeHandler() : Promise.resolve(void 0);
            }
        },
        BaseViewController: th,
        CallContext: Wd,
        ControllerFactory: Gd,
        IterationContext: Kd
    });
    const rh = () => {
            const e = th.activeScreen;
            if (e) {
                const t = j(X());
                if (t) return Z(t, e.viewName);
            }
            return null;
        },
        ih = () => {
            var e;
            const t = rh();
            return null !== (e = null == t ? void 0 : t.screenName.split(".").pop()) && void 0 !== e ? e : "";
        },
        sh = function() {
            for (var _len14 = arguments.length, e = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
                e[_key14] = arguments[_key14];
            }
            return b(void 0, [...e], void 0, function() {
                let {
                    application: e = Vp,
                    initType: t = 0,
                    executeRequiredScripts: n
                } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return function*() {
                    if (yield pi({
                            version: Ed.getLastApplicationVersionToken(),
                            getCurrentScreenName: ih
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
    _exports.runPostInitialization = sh;

    function ah() {
        return b(this, void 0, void 0, function*() {
            try {
                return yield Sn(), ln(window) ? window.OutSystemsNative.Http : null;
            } catch (e) {
                return null;
            }
        });
    }

    function oh() {
        return b(this, void 0, void 0, function*() {
            const e = yield ah(),
                t = pn.resolve(fn.SettingsManager);
            return !(null == t ? void 0 : t.readBool("ForceXhrCommunication")) && !!e;
        });
    }

    function lh() {
        var e;
        if (!pn.resolve(fn.SettingsManager).readBool("EnableOpenTelemetryTraces")) return;
        const t = pn.resolve(fn.InstrumentationFactory);
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
    const uh = wo + "locale";

    function ch() {
        const e = gn(fn.LocaleService);
        if (e) return e.getCurrentLocale();
    }

    function dh(e) {
        const t = gn(fn.LocaleService);
        t && t.setCurrentLocale(e);
    }
    const hh = {
            isHealthy: !0,
            healthCheckIntervalInSeconds: Number.POSITIVE_INFINITY,
            healthCheckEndpoint: "/moduleservices/ping",
            healingTimeoutDelayInSeconds: 30
        },
        gh = (e, t, n) => {
            const r = t ? new _communicationJs.PathFilter({
                acceptionRules: [t, /^[^/]/],
                rejectionRules: [/^[a-z0-9]+:\/\//i]
            }) : void 0;
            return new _communicationJs.HttpClientWithHealthCheck(e, Object.assign(Object.assign({}, hh), {
                healthCheckNeededPathFilter: r,
                logger: n
            }));
        };
    class ph {
        static getHttpClientLogger() {
            let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Oi;
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
                    usesNativeHttpPlugin: l = oh,
                    getNativeHttpPluginInstance: u = ah,
                    loadTrace: c = lh,
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
                    return p ? gh(m, f, o) : m;
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
                    setActiveSpanAsNonAggregable: () => Ni(),
                    debug: _ref22 => {
                        let {
                            category: e,
                            message: t
                        } = _ref22;
                        return fi(null != e ? e : "", null != t ? t : "");
                    },
                    error: _ref23 => {
                        let {
                            category: e,
                            message: t,
                            error: n
                        } = _ref23;
                        return yi(null != e ? e : "", null != t ? t : "", "OS-CLRT-00000", n);
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
                return o ? gh(u, l, s) : u;
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
                loadTrace: s = lh,
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
    const fh = (e, t) => b(void 0, [e, t], void 0, function(e, _ref24) {
        let {
            applicationDefinition: t,
            application: n = Vp
        } = _ref24;
        return function*() {
            Er(), t.useESM || function() {
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
            }(), n.setApplicationDefinition(t), yield gi(), yield(e => b(void 0, void 0, void 0, function*() {
                const t = yield ph.build({
                    withHealthCheck: !0,
                    healthCheckPathScope: me()
                });
                e.register(fn.UnauthenticatedHttpClient, () => t);
                const n = yield ph.build({
                    baseUrl: me(),
                    getToken: $p,
                    getLocale: () => {
                        var e;
                        return null !== (e = ch()) && void 0 !== e ? e : null;
                    },
                    setLocale: e => dh(e),
                    localeHeader: uh,
                    withHealthCheck: !0,
                    healthCheckPathScope: me()
                });
                if (e.register(fn.HttpClient, () => n), te() && ne()) {
                    const t = ph.buildWithDebugger({
                        alternateHttpClient: n,
                        appUrl: ve(),
                        getToken: $p,
                        getLocale: () => {
                            var e;
                            return null !== (e = ch()) && void 0 !== e ? e : null;
                        },
                        setLocale: e => dh(e),
                        localeHeader: uh,
                        withHealthCheck: !0
                    });
                    e.register(fn.DebuggerHttpClient, () => t), e.register(fn.NonDebuggerHttpClient, () => n);
                    const r = e.resolve(fn.Debugger);
                    (null == r ? void 0 : r.isSessionActive()) && e.register(fn.HttpClient, () => e.resolve(fn.DebuggerHttpClient));
                }
                const r = ph.buildLoggerHttpClient({
                    baseUrl: me(),
                    getToken: e => $p(e, !1),
                    getLocale: () => {
                        var e;
                        return null !== (e = ch()) && void 0 !== e ? e : null;
                    },
                    setLocale: e => dh(e),
                    localeHeader: uh
                });
                e.register(fn.LoggerHttpClient, () => r);
            }))(e);
        }();
    });
    _exports.runPreInitialization = fh;
    class mh {
        static addKey(e) {
            this.cache[e] = {
                components: {}
            }, this.cacheKeys.push(e);
            const t = this.cacheKeys.length - mh.MaxCacheSize;
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
            const n = mh.loadScreenCache(e);
            return n ? n.components[t] : null;
        }
        static loadScreenCache(e) {
            return this.cache[e] || void 0;
        }
        static clear(e) {
            e ? this.cache[e] && this.removeKey(e) : (this.cache = {}, this.cacheKeys = []);
        }
    }
    mh.MaxCacheSize = 20, mh.cache = {}, mh.cacheKeys = [];
    var vh = _exports.ScreenStateCache = Object.freeze({
        __proto__: null,
        ScreenStateCache: mh
    });
    const yh = "ServiceWorker",
        bh = e => "log" === e.kind,
        Th = e => window.location.origin === e,
        wh = _ref25 => {
            let {
                log: t,
                loggerMethods: n
            } = _ref25;
            if ("error" === t.severity) n.error(yh, t.message, t.errorCode, t.error, _loggerJs.Visibility.External);
            else if ("info" === t.severity) n.info(yh, t.message, _loggerJs.Visibility.External);
            else {
                (0, n[t.severity])(yh, t.message);
            }
        },
        Eh = "Argument 'handler' cannot be null or undefined";
    class Ih {
        constructor(e, t) {
            this.moduleName = e, this.context = t, this.subscribers = [];
        }
        subscribe(e) {
            if (!e) throw new Error(Eh);
            for (let t = 0; t < this.subscribers.length; t++)
                if (this.subscribers[t] === e) return !1;
            return this.subscribers.push(e), fi(this.moduleName, `Subscribing handler for ${this.context}`), !0;
        }
        unsubscribe(e) {
            if (!e) throw new Error(Eh);
            for (let t = 0; t < this.subscribers.length; t++)
                if (this.subscribers[t] === e) return this.subscribers.splice(t, 1), fi(this.moduleName, `Unsubscribing handler for ${this.context}`), !0;
            return !1;
        }
        publish(e) {
            for (const t of this.subscribers) t(e);
            fi(this.moduleName, `Notifying subscribers for ${this.context}`);
        }
    }
    const Ah = "true",
        Nh = "false";

    function Sh(e) {
        return `Unsupported data type (${e}) for client variable`;
    }

    function Dh(e, t) {
        if (null == e) throw new TypeError(`Value ${e} is not a valid value for a client variable.`);
        if (! function(e, t) {
                switch (t) {
                    case Vo.Integer:
                        return Al.isValidInteger(e);
                    case Vo.LongInteger:
                        return Al.isValidLongInteger(e);
                    case Vo.Decimal:
                    case Vo.Currency:
                        return Al.isValidDecimal(e);
                    case Vo.Boolean:
                        return Al.isBoolean(e);
                    case Vo.Text:
                    case Vo.PhoneNumber:
                    case Vo.Email:
                        return Al.isText(e);
                    case Vo.Date:
                        return Al.isValidDate(e);
                    case Vo.DateTime:
                        return Al.isValidDateTime(e);
                    case Vo.Time:
                        return Al.isValidTime(e);
                    default:
                        const n = Sh(Bo(t));
                        throw new TypeError(n);
                }
            }(e, t)) {
            const n = Bo(t);
            throw new TypeError(`Value ${e} is not a valid value for a client variable of the specified type (${n}).`);
        }
        switch (t) {
            case Vo.Integer:
            case Vo.LongInteger:
            case Vo.Decimal:
            case Vo.Currency:
                return e.toString();
            case Vo.Boolean:
                return e ? Ah : Nh;
            case Vo.Text:
            case Vo.PhoneNumber:
            case Vo.Email:
                return e;
            case Vo.Date:
                return e.toISODate();
            case Vo.DateTime:
                return e.toString();
            case Vo.Time:
                return e.toISOTime();
            default:
                throw new TypeError(Sh(`${t}`));
        }
    }
    const Rh = "Client Variables",
        Ch = "$SESSION_USER_ID";

    function xh(e) {
        return null == e;
    }
    class Lh {
        constructor(e) {
            this.namespace = e, this.publisher = new Ih(Rh, e), this.fullKeyMatcher = new RegExp(`^${Zt(ke)}${Zt(this.namespace)}\\$[^$]*\\$ClientVars\\$`), this.checkSessionExpires(), this.innerSetVariable(Ch, "", Vo.Text, kr());
        }
        subscribe(e) {
            return this.publisher.subscribe(e);
        }
        unsubscribe(e) {
            return this.publisher.unsubscribe(e);
        }
        getFullKey(e, t) {
            return `${ke}${this.namespace}$${t}$ClientVars$${e}`;
        }
        getVariable(e, t, n, r) {
            return this.checkSessionExpires(), this.innerGetVariable(e, t, n, r);
        }
        innerGetVariable(e, t, n, r) {
            const i = window.localStorage.getItem(this.getFullKey(e, t));
            return fi(Rh, `Reading Client Variable ${e} of module ${t} for ${this.namespace}`), xh(i) ? xh(r) ? Ko(n) : r : function(e, t) {
                switch (t) {
                    case Vo.Integer:
                        const t = Number(e);
                        return Al.isValidInteger(t) && Al.isWithinIntegerRange(t) ? t : Ho.DEFAULT_INTEGER;
                    case Vo.LongInteger:
                        if (!e) return Ho.DEFAULT_LONGINTEGER;
                        const n = To.fromString(e);
                        return Al.isValidLongInteger(n) ? n : Ho.DEFAULT_LONGINTEGER;
                    case Vo.Decimal:
                        if (!e) return Ho.DEFAULT_DECIMAL;
                        const r = new Ua(e);
                        return Al.isValidDecimal(r) && Al.isWithinDecimalRange(r) ? r : Ho.DEFAULT_DECIMAL;
                    case Vo.Currency:
                        if (!e) return Ho.DEFAULT_CURRENCY;
                        const i = new Ua(e);
                        return Al.isValidDecimal(i) && Al.isWithinDecimalRange(i) ? i : Ho.DEFAULT_CURRENCY;
                    case Vo.Boolean:
                        return e === Ah || e !== Nh && Ho.DEFAULT_BOOLEAN;
                    case Vo.Text:
                        return Al.isText(e) ? e : Ho.DEFAULT_TEXT;
                    case Vo.PhoneNumber:
                        return Al.isText(e) ? e : Ho.DEFAULT_PHONENUMBER;
                    case Vo.Email:
                        return Al.isText(e) ? e : Ho.DEFAULT_EMAIL;
                    case Vo.Date:
                        const s = zo.fromISODate(e);
                        return Al.isValidDate(s) ? s : Ho.DEFAULT_DATE;
                    case Vo.DateTime:
                        const a = zo.fromISODateTime(e);
                        return Al.isValidDateTime(a) ? a : Ho.DEFAULT_DATETIME;
                    case Vo.Time:
                        const o = zo.fromISOTime(e);
                        return Al.isValidTime(o) ? o : Ho.DEFAULT_TIME;
                    case Vo.Record:
                        throw new TypeError(Sh("Record"));
                    case Vo.RecordList:
                        throw new TypeError(Sh("List"));
                    case Vo.BinaryData:
                        throw new TypeError(Sh("Binary Data"));
                    case Vo.Object:
                        throw new TypeError(Sh("Object"));
                    default:
                        throw new TypeError(Sh(`Unknown: ${e}`));
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
            window.localStorage.setItem(this.getFullKey(e, t), Dh(r, n)), fi(Rh, `Set Client Variable ${e} of module ${t} for ${this.namespace}`);
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
            const e = this.innerGetVariable(Ch, "", Vo.Text);
            kr() !== e && ("" !== e && (fi(Rh, `Removing all Client Variables for user provider ${this.namespace}`), this.removeAllVariables()), this.innerSetVariable(Ch, "", Vo.Text, kr()));
        }
    }
    const Oh = "BACKUP_",
        _h = "OSSYS_ENTITY";

    function Mh(e) {
        return e ? e.toUpperCase() : e;
    }

    function Uh(e, t) {
        var n;
        return null !== (n = e.attributes.filter(e => (null == e ? void 0 : e.name) === t.name)[0]) && void 0 !== n ? n : null;
    }

    function Fh(e) {
        var t;
        return null !== (t = $h(e)[0]) && void 0 !== t ? t : null;
    }

    function $h(e) {
        return e.attributes.filter(e => null == e ? void 0 : e.isPrimaryKey);
    }

    function Ph(e) {
        const t = $h(e);
        return t.length > 0 ? t.map(e => {
            var t;
            return null !== (t = null == e ? void 0 : e.columnName) && void 0 !== t ? t : null;
        }) : null;
    }

    function Vh(e, t) {
        const n = Fh(e);
        return n && t.getAttributes().filter(e => e.name === n.name)[0] || null;
    }

    function Bh(e, t) {
        const n = Fh(e);
        if (!n) return null;
        const r = t.getAttributes().filter(e => e.name === n.name)[0];
        return r ? t[r.attrName] : null;
    }
    var kh = _exports.TableInfoUtils = Object.freeze({
        __proto__: null,
        BACKUP_TABLE_PREFIX: Oh,
        METADATA_TABLE_NAME: _h,
        formatObjectName: Mh,
        getIdentifierAttribute: Vh,
        getIdentifierColumn: Fh,
        getIdentifierColumnNames: Ph,
        getIdentifierColumns: $h,
        getIdentifierValue: Bh,
        getMatchingColumn: Uh,
        hasNullIdentifier: function(e, t) {
            const n = Fh(e);
            if (!n) return !0;
            const r = t.getAttributes().filter(e => e.name === n.name)[0];
            return !r || Wo(t[r.attrName], Ko(r.dataType));
        }
    });
    const zh = {
            tableName: _h,
            idIsAutoNumber: Ut.No,
            attributes: [{
                name: "Key",
                columnName: "KEY",
                type: Bt.TEXT,
                isPrimaryKey: !0
            }, {
                name: "ModuleKey",
                columnName: "MODULEKEY",
                type: Bt.TEXT,
                isPrimaryKey: !0
            }, {
                name: "UpgradeStatus",
                columnName: "UPGRADESTATUS",
                type: Bt.INTEGER
            }, {
                name: "Name",
                columnName: "NAME",
                type: Bt.TEXT
            }, {
                name: "TableName",
                columnName: "TABLENAME",
                type: Bt.TEXT
            }, {
                name: "Hash",
                columnName: "HASH",
                type: Bt.TEXT
            }, {
                name: "ExtraInfo",
                columnName: "EXTRAINFO",
                type: Bt.TEXT
            }]
        },
        Hh = Object.assign(Object.assign({}, zh), {
            tableName: `${Oh}${_h}`
        }),
        jh = "MetadataTableInitializer",
        qh = {
            isNeeded: e => b(void 0, void 0, void 0, function*() {
                return !(yield e.existsTable(zh));
            }),
            run: e => b(void 0, void 0, void 0, function*() {
                fi(jh, "Running initializer for entity meta info table."), yield e.createTable(zh), yield e.createTable(Hh), fi(jh, "Initializer for entity meta info table ran successfully.");
            })
        };
    var Gh;
    ! function(e) {
        e[e.Unchanged = 0] = "Unchanged", e[e.Deleted = 1] = "Deleted", e[e.Recreated = 2] = "Recreated", e[e.New = 3] = "New";
    }(Gh || (Gh = {}));
    var Wh = Gh;

    function Kh(e, t, n) {
        for (const r of t.getAttributes()) Jh(t[r.attrName], Uh(e, r), `${n} '${e.tableName}.${r.name}'`);
    }

    function Jh(e, t, n) {
        if (t.type === Bt.TEXT && void 0 !== t.length) {
            if (!e) return;
            const r = e.length - t.length;
            if (r > 0) throw new at.DataBaseException("", `Unable to ${n} because it exceeds the maximum allowed length by ${r} characters.`);
        } else if (t.type === Bt.DECIMAL && void 0 !== t.length && void 0 !== t.decimals) {
            const r = e.trunc().abs().toString().length - (t.length - t.decimals);
            if (r > 0) throw new at.DataBaseException("", `Unable to ${n} because it exceeds the maximum allowed length by ${r} characters.`);
        }
    }
    const Yh = "EntityModelUtils";

    function Xh(e) {
        return e[0];
    }

    function Qh(e, t) {
        return b(this, void 0, void 0, function*() {
            return yield e.findRecords(zh, {
                MODULEKEY: t
            });
        });
    }

    function Zh(e, t, n, r) {
        return b(this, void 0, void 0, function*() {
            var i;
            let s;
            fi(Yh, `Checking the status of table ${t.tableName} (${t.name})`);
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
                }(t, a) ? (fi(Yh, `Table ${t.tableName} (${t.name}) exists and will be fully upgraded`), cg(e, t, a, r)) : (fi(Yh, `Table ${t.tableName} (${t.name}) exists and will be incrementally upgraded`), function(e, t, n, r) {
                    return b(this, void 0, void 0, function*() {
                        var i;
                        const s = t.attributes.filter(e => {
                            var t;
                            return !Object.keys(null !== (t = n.attrs) && void 0 !== t ? t : {}).some(t => t === e.columnName);
                        });
                        fi(Yh, `Upgrading table ${t.tableName} (${t.name}) with new attributes (${JSON.stringify(s)}) and new hash (${t.hash})`);
                        for (const n of s) {
                            const s = r.serialize(null !== (i = n.default) && void 0 !== i ? i : Bu(n.type), n);
                            yield e.addColumn(t, Object.assign(Object.assign({}, n), {
                                serializedDefault: s
                            }));
                        }
                        yield ug(e, t);
                    });
                }(e, t, a, r));
                fi(Yh, `Table ${t.tableName} (${t.name}) exists and is up to date`);
            } else fi(Yh, `Table ${t.tableName} (${t.name}) does not exist and will be created`), yield lg(e, t, r), yield function(e, t) {
                return b(this, void 0, void 0, function*() {
                    const n = pg(t);
                    n.UPGRADESTATUS = Wh.New, fi(Yh, `Creating metadata for table ${t.tableName} (${t.name})`), yield e.insertRecord(zh, n);
                });
            }(e, t);
        });
    }

    function eg(e, t, n) {
        return b(this, void 0, void 0, function*() {
            return rg(e, e => (fi(Yh, `Recovering table ${e} from backup`), t => function(e, t) {
                return b(this, void 0, void 0, function*() {
                    yield sg(e, t);
                    (yield e.existsTable(og(t))) && (yield ag(e, og(t), t, t, Wh.Unchanged)), yield gg(e, t, !0);
                });
            }(t, e)), n, e => e.UPGRADESTATUS !== Wh.Unchanged);
        });
    }

    function tg(e, t, n) {
        return b(this, void 0, void 0, function*() {
            return rg(e, e => (fi(Yh, `Dropping inconsistent table ${e} (same key, different physical table name)`), t => function(e, t) {
                return b(this, void 0, void 0, function*() {
                    yield sg(e, t);
                    const n = Xh(yield e.findRecords(zh, {
                        TABLENAME: t
                    }));
                    n && (yield e.removeRecord(zh, [n.KEY, n.MODULEKEY]));
                });
            }(t, e)), n, e => {
                const n = e.UPGRADESTATUS === Wh.Unchanged,
                    r = t.some(t => t.key === e.KEY),
                    i = !t.some(t => t.tableName === e.TABLENAME),
                    s = 0 === t.length || r && i;
                return n && s;
            });
        });
    }

    function ng(e, t) {
        return rg(e, e => (fi(Yh, `Dropping backup table for ${e}`), t => function(e, t) {
            return b(this, void 0, void 0, function*() {
                yield sg(e, og(t));
                const n = Xh(yield e.findRecords(zh, {
                    TABLENAME: t
                }));
                n && (n.UPGRADESTATUS === Wh.Deleted ? yield e.removeRecord(zh, [n.KEY, n.MODULEKEY]): (n.UPGRADESTATUS = Wh.Unchanged, yield e.updateRecord(zh, n)));
                const r = Xh(yield e.findRecords(Hh, {
                    TABLENAME: t
                }));
                r && (yield e.removeRecord(Hh, [r.KEY, r.MODULEKEY]));
            });
        }(t, e)), t, e => e.UPGRADESTATUS !== Wh.Unchanged);
    }

    function rg(e, t, n, r) {
        return b(this, void 0, void 0, function*() {
            const i = yield e.findRecords(zh, {
                MODULEKEY: n
            });
            let s = [];
            if (r)
                for (const e of i) r(e) && s.push(e);
            else s = i;
            for (const n of s) yield t(n.TABLENAME)(e);
        });
    }

    function ig(e, t, n) {
        return b(this, void 0, void 0, function*() {
            return fi(Yh, `Backing up table '${t}'`), yield gg(e, t, !1), yield sg(e, og(t)), ag(e, t, og(t), t, n);
        });
    }

    function sg(e, t) {
        return e.deleteTableIfExists(t);
    }

    function ag(e, t, n, r, i) {
        return b(this, void 0, void 0, function*() {
            return fi(Yh, `Renaming table '${t}' to '${n}' and setting status to ${Wh[i]}`), yield function(e, t, n) {
                    return e.renameTable(t, n);
                }(e, t, n),
                function(e, t, n) {
                    return b(this, void 0, void 0, function*() {
                        const r = Xh(yield e.findRecords(zh, {
                            TABLENAME: t
                        }));
                        return r.UPGRADESTATUS = n, e.updateRecord(zh, r);
                    });
                }(e, r, i);
        });
    }

    function og(e) {
        return `${Oh}${e}`;
    }

    function lg(e, t, n) {
        return b(this, void 0, void 0, function*() {
            return fi(Yh, `Creating table ${t.tableName} (${t.name})`), e.createTable(Object.assign(Object.assign({}, t), {
                attributes: [...t.attributes.map(e => {
                    var t;
                    return Object.assign(Object.assign({}, e), {
                        serializedDefault: n.serialize(null !== (t = e.default) && void 0 !== t ? t : Bu(e.type), e)
                    });
                })]
            }));
        });
    }

    function ug(e, t) {
        return b(this, void 0, void 0, function*() {
            fi(Yh, `Updating metadata for table ${t.tableName} (${t.name})`);
            const n = yield e.getRecord(zh, [t.key, t.moduleKey]),
                r = pg(t);
            r.UPGRADESTATUS = n.UPGRADESTATUS, r.LASTIDENTIFIER = n.LASTIDENTIFIER, yield e.updateRecord(zh, r);
        });
    }

    function cg(e, t, n, r) {
        return b(this, void 0, void 0, function*() {
            try {
                const i = yield e.getAllRecords(t);
                yield ig(e, t.tableName, Wh.Recreated), yield lg(e, t, r);
                for (const s of i) {
                    const i = dg(s, t, n, r);
                    yield e.insertRecord(t, i);
                }
                yield ug(e, t);
            } catch (e) {
                const n = `Unable to upgrade the definition of entity '${t.name}':\n${lt(e)}`;
                throw vi(Yh, n), new at.DataBaseException("", n);
            }
        });
    }

    function dg(e, t, n, r) {
        const i = {};
        for (const s of t.attributes) try {
            const t = s.columnName,
                a = e[t];
            i[t] = hg(a, s, n, r);
        } catch (e) {
            throw new at.DataBaseException("", `Unable to upgrade attribute '${s.name}' data type to '${zu(s.type)}':\n${lt(e)}`);
        }
        return function(e, t, n) {
            var r;
            for (const i of t.attributes) {
                const t = i.columnName;
                if (void 0 === e[t]) {
                    const s = null !== (r = i.default) && void 0 !== r ? r : Bu(i.type);
                    e[t] = n.serialize(s, i);
                }
            }
        }(i, t, r), i;
    }

    function hg(e, t, n, r) {
        var i;
        const s = null === (i = n.attrs) || void 0 === i ? void 0 : i[t.columnName];
        return s ? function(e, t, n, r) {
            if (r.isConversionNeeded(t, n)) {
                const i = r.deserialize(e, t),
                    s = ku(n.type),
                    a = function(e, t) {
                        const n = Vo[ku(e.type)],
                            r = Vo[ku(t.type)];
                        return `convert column '${t.name}' from type ${n} to ${r}`;
                    }(t, n);
                if (Ku.isConvertibleTo(i, s)) {
                    const e = Ku.convertTo(i, s);
                    Jh(e, n, a);
                    return r.serialize(e, n);
                }
                throw new at.DataBaseException("", `Unable to ${a}.`);
            }
            return e;
        }(e, s, t, r) : e;
    }

    function gg(e, t, n) {
        return b(this, void 0, void 0, function*() {
            const r = n ? Hh : zh,
                i = n ? zh : Hh,
                s = Xh(yield e.findRecords(i, {
                    TABLENAME: t
                }));
            s && (yield e.removeRecord(i, [s.KEY, s.MODULEKEY]));
            const a = Xh(yield e.findRecords(r, {
                TABLENAME: t
            }));
            if (a && (yield e.insertRecord(i, a)), n) {
                const n = Xh(yield e.findRecords(r, {
                    TABLENAME: t
                }));
                n && (yield e.removeRecord(r, [n.KEY, n.MODULEKEY]));
            }
        });
    }

    function pg(e) {
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
            n = Fh(e),
            r = (null == n ? void 0 : n.type) === Bt.INTEGER ? 0 : "0";
        return {
            KEY: e.key,
            MODULEKEY: e.moduleKey,
            UPGRADESTATUS: Wh.Unchanged,
            NAME: e.name,
            TABLENAME: e.tableName,
            HASH: e.hash,
            LASTIDENTIFIER: n && e.idIsAutoNumber !== Ut.No ? r : void 0,
            EXTRAINFO: JSON.stringify(t)
        };
    }
    const fg = "EntityModelInitializer";
    class mg {
        constructor(e, t) {
            this.entityInfos = e, this.serializer = t;
        }
        isNeeded(e) {
            return b(this, void 0, void 0, function*() {
                if (this.hasEntityInfos()) {
                    if (!(yield e.existsTable(zh))) return !0;
                    const t = Xh(this.entityInfos).moduleKey,
                        n = yield Qh(e, t);
                    for (const e of this.entityInfos) {
                        const t = Xh(n.filter(t => t.KEY === e.key));
                        if (!t || t.HASH !== e.hash || t.UPGRADESTATUS !== Wh.Unchanged || t.TABLENAME !== e.tableName) return !0;
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
                const t = Xh(this.entityInfos).moduleKey;
                fi(fg, `Running initializer for entities of module '${t}'.`), yield eg(e, this.entityInfos, t), this.entityInfos.length > 0 && (yield tg(e, this.entityInfos, t)), yield function(e, t, n) {
                    return b(this, void 0, void 0, function*() {
                        return rg(e, e => (fi(Yh, `Backing up table ${e} before deletion`), t => ig(t, e, Wh.Deleted)), n, e => e.UPGRADESTATUS === Wh.Unchanged && !t.some(t => t.tableName === e.TABLENAME));
                    });
                }(e, this.entityInfos, t);
                const n = yield Qh(e, t);
                for (const t of this.entityInfos) {
                    const r = t,
                        i = Xh(n.filter(e => e.KEY === r.key));
                    yield Zh(e, r, i, this.serializer);
                }
                fi(fg, `Initializer for entities of module '${t}' ran successfully.`);
            });
        }
        cleanup(e) {
            return b(this, void 0, void 0, function*() {
                if (!this.hasEntityInfos()) return;
                const t = Xh(this.entityInfos).moduleKey;
                fi(fg, `Running initializer cleanup for entities of module '${t}'.`), yield ng(e, t), fi(fg, `Initializer cleanup for entities of module '${t}' ran successfully.`);
            });
        }
        hasEntityInfos() {
            return this.entityInfos && this.entityInfos.length > 0;
        }
    }
    const vg = new El("Id", "idOut"),
        yg = new Il("Record", "recordOut"),
        bg = "EntityService";
    class Tg {
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
            fi(bg, "Registering initializer for entity meta info table."), this._database = e, this._database.registerInitializer(qh);
        }
        getDatabase() {
            return this.databasePromise || (this.databasePromise = new Promise(e => {
                this.releaseDatabaseForUse = () => e(this.database);
            })), this.databasePromise;
        }
        registerInitializer(e) {
            if (e && e.length > 0) {
                fi(bg, `Registering initializer for entities of module '${e[0].moduleKey}'.`);
                const t = new mg(e, this.serializer);
                this.database.registerInitializer(t);
            }
        }
        setReady() {
            fi(bg, "Releasing the database as ready for use."), this.databasePromise ? this.releaseDatabaseForUse() : this.databasePromise = Promise.resolve(this.database);
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
                    r = Tg.unwrap(t);
                let i;
                Kh(e, r, "create");
                try {
                    i = yield n.executeTransaction(t => this.innerCreate(t, e, r), !0, [zh, e]);
                } catch (e) {
                    throw new at.DataBaseException("", e.message, e.stack);
                }
                if (null === i) return null;
                const s = Vh(e, r),
                    a = new(vg.getType(s.dataType))();
                return a.idOut = i, a;
            });
        }
        innerCreate(e, t, n) {
            return b(this, void 0, void 0, function*() {
                const r = yield e.insertRecord(t, this.serializer.serialize(n, t)),
                    i = Fh(t);
                return i ? this.serializer.deserialize(r, i) : null;
            });
        }
        update(e, t) {
            return b(this, void 0, void 0, function*() {
                const n = yield this.getDatabase(),
                    r = Tg.unwrap(t);
                Kh(e, r, "update");
                try {
                    yield n.executeTransaction(t => this.innerUpdate(t, e, r), !0, [zh, e]);
                } catch (e) {
                    throw new at.DataBaseException("", e.message, e.stack);
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
                    r = Tg.unwrap(t);
                let i;
                Kh(e, r, "create or update");
                try {
                    i = yield n.executeTransaction(t => this.innerCreateOrUpdate(t, e, r), !0, [zh, e]);
                } catch (e) {
                    throw new at.DataBaseException("", e.message, e.stack);
                }
                const s = Vh(e, r),
                    a = new(vg.getType(s.dataType))();
                return a.idOut = i, a;
            });
        }
        innerCreateOrUpdate(e, t, n) {
            return b(this, void 0, void 0, function*() {
                const r = yield e.upsertRecord(t, this.serializer.serialize(n, t)),
                    i = Fh(t);
                return i ? this.serializer.deserialize(r, i) : null;
            });
        }
        createOrUpdateAll(e, t) {
            return b(this, void 0, void 0, function*() {
                const n = yield this.getDatabase(),
                    r = [];
                for (let n = 0; n < t.length; n++) {
                    const i = t.getItem(n),
                        s = Tg.unwrap(i);
                    Kh(e, s, "create or update"), r.push(s);
                }
                try {
                    yield n.executeTransaction(t => b(this, void 0, void 0, function*() {
                        return this.innerCreateOrUpdateAll(t, e, r);
                    }), !0, [zh, e]);
                } catch (e) {
                    throw new at.DataBaseException("", e.message, e.stack);
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
                    throw new at.DataBaseException("", e.message, e.stack);
                }
                if (r) {
                    const t = new(yg.getType(e.implicitAnonymousType))();
                    return t.recordOut = Tg.wrap(r, e.implicitAnonymousType), t;
                }
                throw new at.DataBaseException("", `${e.tableName} with id ${t} was not found`);
            });
        }
        innerGet(e, t, n) {
            return b(this, void 0, void 0, function*() {
                const r = Fh(t),
                    i = yield e.getRecord(t, this.serializer.serialize(n, r));
                return i ? this.serializer.deserialize(i, t, Tg.getWrappedType(t.implicitAnonymousType)) : null;
            });
        }
        delete(e, t) {
            return b(this, void 0, void 0, function*() {
                const n = yield this.getDatabase();
                try {
                    yield n.executeTransaction(n => this.innerDelete(n, e, t), !0, [zh, e]);
                } catch (e) {
                    throw new at.DataBaseException("", e.message, e.stack);
                }
            });
        }
        innerDelete(e, t, n) {
            return b(this, void 0, void 0, function*() {
                const r = Fh(t);
                return e.removeRecord(t, this.serializer.serialize(n, r));
            });
        }
        deleteAll(e) {
            return b(this, void 0, void 0, function*() {
                const t = yield this.getDatabase();
                try {
                    yield t.executeTransaction(t => this.innerDeleteAll(t, e), !0, [zh, e]);
                } catch (e) {
                    throw new at.DataBaseException("", e.message, e.stack);
                }
            });
        }
        innerDeleteAll(e, t) {
            return b(this, void 0, void 0, function*() {
                return e.removeAllRecords(t);
            });
        }
    }
    const wg = "1900-01-01 00:00:00",
        Eg = "Serializer";
    class Ig {
        static get NULLDATE_IN_DB() {
            return wg;
        }
        static maskValue(e, t) {
            const n = t.length,
                r = e.toString();
            return t.substr(0, Math.max(0, n - r.length)) + r;
        }
        static maskFourZeroes(e) {
            return Ig.maskValue(e, "0000");
        }
        static maskTwoZeroes(e) {
            return Ig.maskValue(e, "00");
        }
        constructor() {
            this.serializers = new Map(), this.deserializers = new Map(), this.serializers.set(Bt.BINARY_DATA, (e, t) => this.serializeBinaryData(e, t)), this.serializers.set(Bt.BOOLEAN, (e, t) => this.serializeBoolean(e, t)), this.serializers.set(Bt.DATE, (e, t) => this.serializeDate(e, t)), this.serializers.set(Bt.DATE_TIME, (e, t) => this.serializeDateTime(e, t)), this.serializers.set(Bt.DECIMAL, (e, t) => this.serializeDecimal(e, t)), this.serializers.set(Bt.INTEGER, (e, t) => this.serializeInteger(e, t)), this.serializers.set(Bt.LONGINTEGER, (e, t) => this.serializeLongInteger(e, t)), this.serializers.set(Bt.TEXT, (e, t) => this.serializeText(e, t)), this.serializers.set(Bt.TIME, (e, t) => this.serializeTime(e, t)), this.deserializers.set(Bt.BINARY_DATA, (e, t) => this.deserializeBinaryData(e, t)), this.deserializers.set(Bt.BOOLEAN, (e, t) => this.deserializeBoolean(e, t)), this.deserializers.set(Bt.DATE, (e, t) => this.deserializeDate(e, t)), this.deserializers.set(Bt.DATE_TIME, (e, t) => this.deserializeDateTime(e, t)), this.deserializers.set(Bt.DECIMAL, (e, t) => this.deserializeDecimal(e, t)), this.deserializers.set(Bt.INTEGER, (e, t) => this.deserializeInteger(e, t)), this.deserializers.set(Bt.LONGINTEGER, (e, t) => this.deserializeLongInteger(e, t)), this.deserializers.set(Bt.TEXT, (e, t) => this.deserializeText(e, t)), this.deserializers.set(Bt.TIME, (e, t) => this.deserializeTime(e, t));
        }
        serialize(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Ut.No;
            return e instanceof el ? this.serializeRecord(e, t) : this.serializeBasicType(e, t, n);
        }
        serializeRecord(e, t) {
            fi(Eg, "Starting to serialize a record");
            const n = {};
            return e.getAttributes().forEach(r => {
                const i = Uh(t, r);
                n[i.columnName] = this.serializeBasicType(e[r.attrName], i, i.isPrimaryKey ? t.idIsAutoNumber : Ut.No);
            }), fi(Eg, "Finished serializing a record"), n;
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
            return Ig.maskFourZeroes(n.getFullYear()) + "-" + Ig.maskTwoZeroes(n.getMonth() + 1) + "-" + Ig.maskTwoZeroes(n.getDate());
        }
        serializeTime(e, t) {
            const n = e.toNative();
            return Ig.maskTwoZeroes(n.getHours()) + ":" + Ig.maskTwoZeroes(n.getMinutes()) + ":" + Ig.maskTwoZeroes(n.getSeconds());
        }
        serializeDateTime(e, t) {
            if (e.eq(zo.defaultValue)) return wg;
            const n = e.toNative();
            return Ig.maskFourZeroes(n.getUTCFullYear()) + "-" + Ig.maskTwoZeroes(n.getUTCMonth() + 1) + "-" + Ig.maskTwoZeroes(n.getUTCDate()) + " " + Ig.maskTwoZeroes(n.getUTCHours()) + ":" + Ig.maskTwoZeroes(n.getUTCMinutes()) + ":" + Ig.maskTwoZeroes(n.getUTCSeconds());
        }
        innerSerializeBasicType(e, t, n) {}
        serializeBasicType(e, t, n) {
            if (fi(Eg, `Serializing a value of type ${t.type}`), !this.serializers.has(t.type)) throw new at.DataBaseException("", `Unable to serialize ${t.type} to a database value.`);
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
                const i = Uh(t, n);
                r[n.attrName] = this.deserializeBasicType(e[i.columnName], i);
            }), r;
        }
        deserializeInteger(e, t) {
            return e;
        }
        deserializeLongInteger(e, t) {
            return To.fromValue(e);
        }
        deserializeDecimal(e, t) {
            return new Ua(e);
        }
        deserializeText(e, t) {
            return e;
        }
        deserializeBoolean(e, t) {
            return 0 !== e;
        }
        deserializeDateTime(e, t) {
            if (e === wg) return zo.defaultValue;
            const n = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/.exec(e),
                r = new Date();
            return r.setUTCFullYear(parseInt(n[1], 10), parseInt(n[2], 10) - 1, parseInt(n[3], 10)), r.setUTCHours(parseInt(n[4], 10) || 0, parseInt(n[5], 10) || 0, parseInt(n[6], 10) || 0, 0), new zo(r);
        }
        deserializeDate(e, t) {
            const n = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e),
                r = new Date();
            return r.setFullYear(parseInt(n[1], 10), parseInt(n[2], 10) - 1, parseInt(n[3], 10)), r.setHours(0, 0, 0, 0), new zo(r);
        }
        deserializeTime(e, t) {
            const n = /^(\d{2}):(\d{2}):(\d{2})$/.exec(e),
                r = new Date();
            return r.setFullYear(1900, 0, 1), r.setHours(parseInt(n[1], 10) || 0, parseInt(n[2], 10) || 0, parseInt(n[3], 10) || 0, 0), new zo(r);
        }
        innerDeserializeBasicType(e, t) {}
        deserializeBasicType(e, t) {
            if (!this.deserializers.has(t.type)) throw new at.DataBaseException("", `Unable to deserialize ${t} to a runtime value.`);
            const n = this.innerDeserializeBasicType(e, t);
            if (void 0 !== n) return n;
            if (null === e) return Bu(t.type);
            return this.deserializers.get(t.type)(e, t);
        }
    }
    class Ag extends Ig {
        serializeBinaryData(e, t) {
            return e.toArrayBuffer() || null;
        }
        deserializeBinaryData(e, t) {
            const n = e instanceof ArrayBuffer ? new Blob([e]) : e;
            return new ko(n);
        }
        isConversionNeeded(e, t) {
            return !!this.isConversionNeededBetweenDBDataTypes(e.type, t.type) || !!e.isEntityReference != !!t.isEntityReference || void 0 !== e.length && void 0 !== t.length && (void 0 !== e.decimals && void 0 !== t.decimals ? e.length - e.decimals > t.length - t.decimals : e.length > t.length);
        }
        isConversionNeededBetweenDBDataTypes(e, t) {
            if (void 0 === e) return !0;
            if (e === t) return !1;
            switch (e) {
                case Bt.BOOLEAN:
                    return t !== Bt.INTEGER;
                case Bt.LONGINTEGER:
                    return t !== Bt.TEXT;
                default:
                    return !0;
            }
        }
    }
    var Ng = _exports.IndexedDBSerializer = Object.freeze({
        __proto__: null,
        default: Ag
    });
    const Sg = "IndexedDBMetadataV2Upgrader";
    class Dg {
        constructor(e, t) {
            this.entityInfos = e, this.serializer = t, this.VERSION = 2;
        }
        isNeeded(e) {
            return b(this, void 0, void 0, function*() {
                var t, n;
                if (this.hasEntityInfos()) {
                    if (!(yield e.existsTable(zh))) return !1;
                    const r = Xh(this.entityInfos).moduleKey,
                        i = yield Qh(e, r);
                    for (const e of this.entityInfos) {
                        const r = Xh(i.filter(t => t.KEY === e.key));
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
                const n = Xh(this.entityInfos).moduleKey,
                    r = yield Qh(e, n);
                for (const i of this.entityInfos) {
                    fi(Sg, `Running initializer for entities of module '${n}'.`);
                    const s = Xh(r.filter(e => e.KEY === i.key));
                    let a = {},
                        o = !0,
                        l = !0;
                    s && (a = JSON.parse(null !== (t = s.EXTRAINFO) && void 0 !== t ? t : "{}"), o = s.UPGRADESTATUS === Wh.Unchanged, l = s.UPGRADESTATUS === Wh.Recreated), o ? (fi(this, `Table ${i.tableName} (${i.name}) exists and will be fully upgraded`), yield cg(e, i, a, this.serializer)) : fi(Sg, `Table ${i.tableName} (${i.name}) exists and will be skipped`), (l || o) && i.attributes.some(e => e.isEntityReference) ? (fi(this, `Table ${i.tableName} (${i.name}) exists and have its defaults upgraded`), yield this.upgradeDefaults(e, i, a, this.serializer)) : fi(Sg, `Table ${i.tableName} (${i.name}) wasn't upgraded`);
                }
            });
        }
        cleanup(e) {
            return b(this, void 0, void 0, function*() {
                if (!this.hasEntityInfos()) return;
                const t = Xh(this.entityInfos).moduleKey;
                fi(Sg, `Running initializer cleanup for entities of module '${t}'.`), yield ng(e, t), fi(Sg, `Initializer cleanup for entities of module '${t}' ran successfully.`);
            });
        }
        upgradeDefaults(e, t, n, r) {
            return b(this, void 0, void 0, function*() {
                try {
                    const n = yield e.getAllRecords(t);
                    for (const e of n) this.fillWithDefaultsIfNull(e, t, r);
                    yield e.upsertAllRecords(t, n);
                } catch (e) {
                    const n = `Unable to upgrade the definition of entity '${t.name}':\n${lt(e)}`;
                    throw vi(Sg, n), new at.DataBaseException("", n);
                }
            });
        }
        fillWithDefaultsIfNull(e, t, n) {
            var r;
            for (const i of t.attributes) {
                const t = i.columnName;
                if (i.isEntityReference && null === e[t]) {
                    const s = null !== (r = i.default) && void 0 !== r ? r : Bu(i.type);
                    e[t] = n.serialize(s, i);
                }
            }
        }
        hasEntityInfos() {
            return this.entityInfos && this.entityInfos.length > 0;
        }
    }
    class Rg extends Tg {
        constructor() {
            super(new Ag());
        }
        executeAggregate(e, t) {
            return b(this, void 0, void 0, function*() {
                const n = yield this.getDatabase();
                try {
                    return yield n.executeQuery(e, !0, t);
                } catch (e) {
                    throw new at.DataBaseException("", e.message, e.stack);
                }
            });
        }
        innerCreate(e, t, n) {
            return b(this, void 0, void 0, function*() {
                const r = yield this.getMetadataRecord(e, t),
                    i = Vh(t, n),
                    s = n.clone();
                if (t.idIsAutoNumber === Ut.YesIfEmpty) {
                    const a = this.getRecordIdAndUpdateLastIdentifier(r, t, n);
                    yield this.updateMetadataTable(e, r), s[i.attrName] = a;
                }
                return yield e.insertRecord(t, this.serializer.serialize(s, t)), i ? s[i.attrName] : null;
            });
        }
        getRecordIdAndUpdateLastIdentifier(e, t, n) {
            const r = Fh(t),
                i = Vh(t, n);
            let s = Bh(t, n);
            if (t.idIsAutoNumber === Ut.YesIfEmpty) {
                let t = void 0 !== e.LASTIDENTIFIER ? this.serializer.deserialize(e.LASTIDENTIFIER, r) : Ko(i.dataType);
                Wo(s, Ko(i.dataType)) ? (t instanceof To ? t = t.add(1) : "number" == typeof t && (t += 1), s = t, e.LASTIDENTIFIER = this.serializer.serialize(s, r)) : Go(s, t) > 0 && (e.LASTIDENTIFIER = this.serializer.serialize(s, r));
            }
            return s;
        }
        innerCreateOrUpdate(e, t, n) {
            return b(this, void 0, void 0, function*() {
                const r = n.clone();
                if (t.idIsAutoNumber === Ut.YesIfEmpty) {
                    const i = yield this.getMetadataRecord(e, t),
                        s = this.getRecordIdAndUpdateLastIdentifier(i, t, n);
                    yield this.updateMetadataTable(e, i);
                    r[Vh(t, n).attrName] = s;
                }
                const i = yield e.upsertRecord(t, this.serializer.serialize(r, t)),
                    s = Fh(t);
                return s ? this.serializer.deserialize(i, s) : null;
            });
        }
        innerCreateOrUpdateAll(e, t, n) {
            return b(this, void 0, void 0, function*() {
                const r = yield this.getMetadataRecord(e, t);
                let i;
                const s = n.map(e => {
                    i = null != i ? i : Vh(t, e);
                    const n = e.clone();
                    if (t.idIsAutoNumber === Ut.YesIfEmpty) {
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
                fi("IndexedDBEntityService", `Registering V2 upgrader for entities of module '${e[0].moduleKey}'.`);
                const t = new Dg(e, this.serializer);
                this.database.registerInitializer(t);
            }
        }
        getMetadataRecord(e, t) {
            return b(this, void 0, void 0, function*() {
                const n = yield e.getRecord(zh, [t.key, t.moduleKey]);
                if (!n) throw new Error(`Unable to fetch record with key ${t.key} and moduleKey ${t.moduleKey} from \n                metadata table ${zh.tableName}.`);
                return n;
            });
        }
        updateMetadataTable(e, t) {
            return b(this, void 0, void 0, function*() {
                if (void 0 !== t.LASTIDENTIFIER) return e.updateRecord(zh, t);
            });
        }
    }
    const Cg = {
            tableName: _h,
            idIsAutoNumber: Ut.No,
            attributes: [{
                name: "SS_Key",
                columnName: "SS_Key",
                type: Bt.TEXT
            }, {
                name: "Module_SS_Key",
                columnName: "Module_SS_Key",
                type: Bt.TEXT
            }, {
                name: "Name",
                columnName: "Name",
                type: Bt.TEXT
            }, {
                name: "Physical_Table_name",
                columnName: "Physical_Table_name",
                type: Bt.TEXT
            }, {
                name: "Hash",
                columnName: "Hash",
                type: Bt.TEXT
            }, {
                name: "Extra_Info",
                columnName: "Extra_Info",
                type: Bt.TEXT
            }, {
                name: "Upgrade_Status",
                columnName: "Upgrade_Status",
                type: Bt.INTEGER
            }]
        },
        xg = Object.assign(Object.assign({}, Cg), {
            tableName: `${Oh}${_h}`
        });

    function Lg(e, t, n) {
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
    const Og = {
        isNeeded: e => b(void 0, void 0, void 0, function*() {
            const t = e;
            let n = !1;
            return (yield e.existsTable(Cg)) && (n = yield t.executeQuery(e => {
                var t, n, r, i;
                return n = e, r = Cg.tableName, i = null === (t = Cg.attributes[0]) || void 0 === t ? void 0 : t.columnName, new Promise(e => {
                    n.executeSql(`SELECT "${r}"."${i}" FROM "${r}" LIMIT 1`, void 0, () => {
                        e(!0);
                    }, () => (e(!1), !1));
                });
            })), n;
        }),
        run: e => b(void 0, void 0, void 0, function*() {
            const t = [{
                v0TableInfo: Cg,
                v2TableInfo: zh
            }, {
                v0TableInfo: xg,
                v2TableInfo: Hh
            }].map(_ref26 => {
                let {
                    v0TableInfo: t,
                    v2TableInfo: n
                } = _ref26;
                return Lg(e, t, n);
            });
            yield Promise.all(t);
        }),
        cleanup: e => b(void 0, void 0, void 0, function*() {
            yield e.deleteTableIfExists(Cg), yield e.deleteTableIfExists(xg), yield e.renameTable(`${zh.tableName}_V2`, zh.tableName), yield e.renameTable(`${Hh.tableName}_V2`, Hh.tableName);
        })
    };
    class _g {
        constructor() {
            _g.lastUpgraderRegistered = this;
        }
        isNeeded(e) {
            return b(this, void 0, void 0, function*() {
                let t = !1;
                return _g.lastUpgraderRegistered === this && (t = yield Og.isNeeded(e)), t;
            });
        }
        run(e) {
            return b(this, void 0, void 0, function*() {
                const t = [{
                    v2TableInfo: zh,
                    v0TableInfo: Cg
                }, {
                    v2TableInfo: Hh,
                    v0TableInfo: xg
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
                _g.lastUpgraderRegistered = null;
            });
        }
    }
    class Mg extends Ig {
        constructor() {
            super(...arguments), this.fromMethodCache = new Map(), this.attributeReaderImplementation = (e, t, n, r) => {
                const i = {
                    type: Hu(r)
                };
                return this.deserialize(e["o" + t], i);
            }, this.namedAttributeReaderImplementation = (e, t, n, r) => {
                const i = {
                    type: Hu(r)
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
                t.dataType !== Vo.RecordList && (e[t.attrName] = null);
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
                o.dataType !== Vo.RecordList && (o.dataType === Vo.Record && n.isAnonymousRecord() ? e[o.attrName] = a(r, o.complexType, i) : e[o.attrName] = s(r, i.value++, t[l].name, t[l].dataType));
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
            if (e.eq(zo.defaultValue)) return Ig.NULLDATE_IN_DB;
            const n = e.toNative();
            return Ig.maskFourZeroes(n.getUTCFullYear()) + "-" + Ig.maskTwoZeroes(n.getUTCMonth() + 1) + "-" + Ig.maskTwoZeroes(n.getUTCDate()) + " " + Ig.maskTwoZeroes(n.getUTCHours()) + ":" + Ig.maskTwoZeroes(n.getUTCMinutes()) + ":" + Ig.maskTwoZeroes(n.getUTCSeconds());
        }
        serializeBinaryData(e, t) {
            return void 0 === e.content ? null : e.content;
        }
        deserializeDateTime(e, t) {
            if (e === Ig.NULLDATE_IN_DB) return zo.defaultValue;
            const n = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/.exec(e),
                r = new Date();
            return r.setUTCFullYear(parseInt(n[1], 10), parseInt(n[2], 10) - 1, parseInt(n[3], 10)), r.setUTCHours(parseInt(n[4], 10) || 0, parseInt(n[5], 10) || 0, parseInt(n[6], 10) || 0, 0), new zo(r);
        }
        deserializeBinaryData(e, t) {
            return new ko(e);
        }
        isConversionNeeded(e, t) {
            return !!this.isConversionNeededBetweenDBDataTypes(e.type, t.type) || !!e.isEntityReference != !!t.isEntityReference || void 0 !== e.length && void 0 !== t.length && (void 0 !== e.decimals && void 0 !== t.decimals ? e.length - e.decimals > t.length - t.decimals : e.length > t.length);
        }
        isConversionNeededBetweenDBDataTypes(e, t) {
            if (void 0 === e) return !0;
            if (e === t) return !1;
            switch (e) {
                case Bt.BOOLEAN:
                    return t !== Bt.INTEGER && t !== Bt.LONGINTEGER;
                case Bt.INTEGER:
                    return t !== Bt.LONGINTEGER && t !== Bt.TEXT;
                case Bt.LONGINTEGER:
                    return t !== Bt.TEXT;
                default:
                    return !0;
            }
        }
        innerSerializeBasicType(e, t, n) {
            return fi("WebSQLSerializer", `WebSQL serializing a value of type ${t.type}`), t.isPrimaryKey && n === Ut.YesIfEmpty && Wo(e, Bu(t.type)) || t.isEntityReference && Wo(e, Bu(t.type)) ? null : void 0;
        }
    }
    var Ug = _exports.WebSQLSerializer = Object.freeze({
        __proto__: null,
        default: Mg
    });
    class Fg extends Tg {
        constructor() {
            super(new Mg()), this.isMetadataV2UpgraderRegistered = !1;
        }
        registerInitializer(e) {
            this.isMetadataV2UpgraderRegistered || (this.database.registerInitializer(Og), this.isMetadataV2UpgraderRegistered = !0), super.registerInitializer(e), this.database.registerInitializer(new _g());
        }
        executeAggregate(e) {
            return b(this, void 0, void 0, function*() {
                const t = yield this.getDatabase();
                try {
                    return yield t.executeQuery(e);
                } catch (e) {
                    throw new at.DataBaseException("", e.message, e.stack);
                }
            });
        }
    }
    class $g {
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
                this.onNewVersionHandler ? this.onNewVersionHandler(e, t) : vi("LifecycleHandlers", "onNewVersion triggered without handler defined.");
            });
        }
    }
    const Pg = "en-US",
        Vg = !1,
        Bg = /^[A-z]{2,3}([_-]([A-z]{4}|[\d]{3}))?([_-]([A-z]{2}|[\d]{3}))?$/;
    class kg {
        constructor(e) {
            this.currentLocaleStorage = new et(Ve.Persistent, "CurrentLocale", void 0, ee), this.publisher = new Ih("Locale Service", e);
        }
        subscribe(e) {
            return this.publisher.subscribe(e);
        }
        unsubscribe(e) {
            return this.publisher.unsubscribe(e);
        }
        getCurrentLocale() {
            var e, t;
            return null !== (t = null === (e = this.currentLocaleStorage.get()) || void 0 === e ? void 0 : e.localeCode) && void 0 !== t ? t : Pg;
        }
        setCurrentLocale(e) {
            const t = gn(fn.TranslationsService);
            if (t && t.clear(), !this.isValidLocale(e)) throw new Error(`Value '${e}' isn't a valid locale.`); {
                const t = {
                    localeCode: e,
                    isRTL: Vg
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
            return Bg.test(e);
        }
        isCurrentLocaleRTL() {
            var e, t;
            return null !== (t = null === (e = this.currentLocaleStorage.get()) || void 0 === e ? void 0 : e.isRTL) && void 0 !== t ? t : Vg;
        }
        setCurrentLocaleRTL(e) {
            var t;
            const n = null !== (t = this.currentLocaleStorage.get()) && void 0 !== t ? t : {
                localeCode: Pg,
                isRTL: Vg
            };
            n.isRTL = e, this.currentLocaleStorage.set(n);
        }
    }
    var zg = _exports.LocaleService = Object.freeze({
        __proto__: null,
        default: kg
    });
    const Hg = "MappingWithDefaultService";
    class jg {
        constructor() {
            this.messages = {};
        }
        getMessage(e, t) {
            fi(Hg, `Getting message for key ${e} with default message ${t}`);
            const n = this.messages[e];
            return null != n ? n : t;
        }
        setMessage(e, t) {
            fi(Hg, `Setting message for key ${e} with value ${t}`), this.messages[e] = t;
        }
        add(e) {
            if (!e) throw new Error("Messages cannot either null or undefined");
            const t = Object.keys(e);
            fi(Hg, `Adding ${t.length} messages`), t.forEach(t => this.setMessage(t, e[t]));
        }
        clear() {
            fi(Hg, "Clearing cached messages"), this.messages = {};
        }
    }
    const qg = "Application",
        Gg = function(e) {
            for (var _len15 = arguments.length, t = new Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
                t[_key15 - 1] = arguments[_key15];
            }
            return b(void 0, [e, ...t], void 0, function(e) {
                let {
                    dateTimeFormat: t,
                    numberFormat: n,
                    application: r = Vp
                } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return function*() {
                    je(V());
                    const i = Jg();
                    (function() {
                        let {
                            serviceWorker: e = navigator.serviceWorker,
                            loggerMethods: t = {
                                debug: fi,
                                info: mi,
                                warning: vi,
                                error: yi
                            }
                        } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        e ? e.addEventListener("message", e => {
                            Th(e.origin) ? bh(e.data) && wh({
                                log: e.data,
                                loggerMethods: t
                            }) : fi(yh, "The received message is not from a secure Service Worker and will be ignored");
                        }) : vi(yh, "Service Worker API is not available");
                    })(), fi(qg, "Initializing Application"), e.register(fn.LifecycleEventsManager, () => new $g({
                        onNewVersionHandler: (e, t) => r.onNewVersionDetected(e, t)
                    })), Re(e => {
                        if (Ed.isUpgradingVersion && !ht(e)) return vi(qg, "RequireJS error during upgrade, treating as an upgrade error."), void Ed.handleUpgradeError(e, 1);
                        Ec(e);
                    }), mh.clear(), _(ue()), Wg(t, n), yield i, e.register(fn.ClientVariablesService, () => new Lh(ee())), Yg(e), e.register(fn.TranslationsService, () => new jg()), e.register(fn.LocaleService, () => new kg(Y())), Kg();
                }();
            });
        },
        Wg = (e, t) => {
            e && (Ho.FORMAT.dateTimeFormat = e), t && (Ho.FORMAT.numberFormat = t);
        },
        Kg = () => {
            const e = Jt();
            e && (Object.defineProperty(e, "OutSystemsApp", {
                value: {
                    get public() {
                        var e;
                        return new Pd(null, null === (e = th.activeScreen) || void 0 === e ? void 0 : e.callContext());
                    }
                },
                configurable: !0
            }), e.dispatchEvent(new Event("ospublicapiready")));
        },
        Jg = () => b(void 0, void 0, void 0, function*() {
            (yield oh()) && (yield ah());
        }),
        Yg = e => {
            Tn() ? e.register(fn.EntityService, () => new Fg()) : e.register(fn.EntityService, () => new Rg());
        },
        Xg = "/moduleservices/auth/configs",
        Qg = "AuthConfigsManager",
        Zg = "os-runtime-authconfigs";
    _exports.useBaseApplication = Gg;
    class ep {
        constructor() {
            let {
                httpClient: e = pn.resolve(fn.UnauthenticatedHttpClient),
                initialConfigs: t,
                getBasePath: n = () => me(),
                cacheName: r = "os-builtin-authconfigs",
                cacheStorage: i = localStorage
            } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var s;
            this.isOnlineListenerRegistered = !1, this.httpClient = e, this.getBasePath = n, this.cacheStorage = i, ((e, t, n) => {
                const r = e.getItem(t);
                r && (e.setItem(n, r), e.removeItem(t));
            })(this.cacheStorage, r, Zg), this.cacheName = Zg, this.authConfigs = null !== (s = null != t ? t : this.fetchCachedConfigs()) && void 0 !== s ? s : [];
        }
        cacheConfigs(e) {
            this.cacheStorage.setItem(this.cacheName, JSON.stringify(e));
        }
        fetchCachedConfigs() {
            try {
                const e = this.cacheStorage.getItem(this.cacheName);
                if (e) return JSON.parse(e);
                vi(Qg, "No auth configs stored in cache");
            } catch (e) {
                yi(Qg, "Error retrieving auth configs from cache", "OS-CLRT-40100", e);
            }
        }
        update() {
            return b(this, arguments, void 0, function() {
                var _this7 = this;
                let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ri;
                let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : pn.resolve(fn.Auth);
                return function*() {
                    var n;
                    try {
                        const e = yield _this7.httpClient.get({
                                url: Xg,
                                baseURL: _this7.getBasePath()
                            }),
                            r = null == e ? void 0 : e.authConfigurations;
                        if (!Array.isArray(r)) throw new Error("Did not receive an array of configurations");
                        if (_this7.authConfigs = r, _this7.cacheConfigs(_this7.authConfigs), !(null === (n = t.getInstance()) || void 0 === n ? void 0 : n.isAuthenticated())) {
                            const [e] = _this7.readAuthConfigs(si);
                            e && t.updateConfig(e.configs);
                        }
                    } catch (t) {
                        yi(Qg, "Error while fetching auth configs", "OS-CLRT-40100", t), _this7.isOnlineListenerRegistered || (e(() => b(_this7, void 0, void 0, function*() {
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
                t !== si || this.authConfigs.find(e => e.type === si) || (vi(Qg, `${si} not available, fallback to cognito`), t = "cognito");
                const r = t ? this.authConfigs.filter(e => e.type === t) : this.authConfigs;
                if (r.length < 1) {
                    return vi(Xg, `No identity provider configurations found${t ? ` for type "${t}"` : ""}.`, n ? _loggerJs.Visibility.Internal : _loggerJs.Visibility.External), [];
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
                return vi(Qg, "Couldn't read auth configurations"), [];
            }
        }
    }
    const tp = {
            info: _ref30 => {
                let {
                    category: t,
                    message: n
                } = _ref30;
                mi(null != t ? t : "", null != n ? n : "", _loggerJs.Visibility.Internal);
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
                yi(null != e ? e : "", null != t ? t : "", null !== (s = r) && void 0 !== s ? s : "OS-CLRT-40100", n, i);
            },
            warning: _ref32 => {
                let {
                    category: e,
                    message: t
                } = _ref32;
                vi(null != e ? e : "", null != t ? t : "");
            },
            debug: _ref33 => {
                let {
                    category: e,
                    message: t
                } = _ref33;
                fi(null != e ? e : "", null != t ? t : "");
            }
        },
        np = e => b(void 0, void 0, void 0, function*() {
            e.register(fn.AuthConfigsManager, () => new ep());
            const t = e.resolve(fn.AuthConfigsManager),
                [n] = t.readAuthConfigs(si, {
                    suppressExternalWarnings: !0
                });
            e.register(fn.Auth, () => {
                var t;
                return new _authJs.AuthFactory({
                    appKey: V(),
                    appUrl: me(),
                    region: null == n ? void 0 : n.configs.region,
                    poolId: null == n ? void 0 : n.configs.poolId,
                    clientId: null == n ? void 0 : n.configs.clientId,
                    scope: "openid",
                    identityProvider: null !== (t = null == n ? void 0 : n.kc_hint) && void 0 !== t ? t : null == n ? void 0 : n.type,
                    passwordComplexityPolicy: null == n ? void 0 : n.configs.passwordComplexityPolicy,
                    logger: tp,
                    httpClient: e.resolve(fn.UnauthenticatedHttpClient),
                    isOnline: () => ni()
                });
            }), yield t.update();
        });
    _exports.useAuthConfigsManager = np;
    class rp {
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
            if (this.isInitialized) throw new at.DataBaseException("", `Cannot register a database initializer on the already initialized database '${this.name}'`);
            this.allInitializers.push(e);
        }
        initialize() {
            return b(this, void 0, void 0, function*() {
                if (this.isInitialized) throw new at.DataBaseException("", `Cannot initialize the already initialized database '${this.name}'`);
                this.markInitialized(), yield this.identifyNeededInitializers(), yield this.runNeededInitializers();
            });
        }
        initializerCleanup() {
            return b(this, void 0, void 0, function*() {
                if (!this.isInitialized) throw new at.DataBaseException("", `Cannot perform database initializer cleanup on the non-initialized database '${this.name}'`);
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

    function ip(e, t) {
        if (null !== t) return t;
    }

    function sp(e) {
        const t = e.replace(/(?:"([^\\"]|\\.)*")|(?:'([^\\']|\\.)*')|(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(\w+)\s*:/g, function(e, t, n, r, i) {
            return r ? '"' + r + '"' : n ? '"' + e.substring(1, e.length - 1) + '"' : i ? '"' + i + '":' : e;
        });
        return JSON.parse(t);
    }

    function ap(e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
        let n = arguments.length > 2 ? arguments[2] : undefined;
        let r = arguments.length > 3 ? arguments[3] : undefined;
        let i = arguments.length > 4 ? arguments[4] : undefined;
        n = null != n ? n : op, t = isNaN(+t) ? 1 : t;
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

    function op(e, t) {
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
    var lp = _exports.JSONUtils = Object.freeze({
        __proto__: null,
        deserializeFromJSON: function(e, t, n) {
            try {
                let r;
                return e && (r = sp(e)), Yu.from(r, t, n);
            } catch (e) {
                throw "Failed to deserialize JSON to " + t.name + ": " + e.message;
            }
        },
        filterJSONValues: ip,
        mergeJS: function e(t, n) {
            let r, i, s, a;
            for (const o in n) {
                r = t[o], i = n[o];
                i && r && ("object" == typeof i || (s = Array.isArray(i))) ? (s ? (s = !1, a = Array.isArray(r) ? r : []) : a = "object" == typeof r ? r : {}, t[o] = e(a, i)) : void 0 !== i && (t[o] = i);
            }
            return t;
        },
        parseJSON: sp,
        serializeObjectForLog: ap,
        serializeToJSON: function(e, t, n, r) {
            const i = Yu.to({
                value: e,
                serializeDefaultValues: t,
                useUnixDateFormat: n,
                dataType: r,
                enforceDefaultValueSerializationAtThisLevel: !0
            });
            return JSON.stringify(i, ip);
        }
    });
    const up = "IndexedDBTransactionWithoutObjectStores";
    class cp {
        constructor(e, t) {
            this.allowTraces = e, this.database = t, this.allowTraces && fi(up, `Starting transaction ${this.transactionId} over ${t.objectStoreNames.length} store(s)`);
        }
        createTable(e) {
            return new Promise(t => {
                var n, r, i;
                this.debug(`Creating table '${e.tableName}'`);
                const s = Ph(e),
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
            this.allowTraces && fi(up, `${t} on transaction ${this.transactionId}`, _loggerJs.Visibility.Client);
        }
        warning(t, n) {
            vi(up, `${t} on transaction ${this.transactionId}${n ? `: ${n.message}` : ""}`, _loggerJs.Visibility.Client);
        }
    }

    function dp(e, t) {
        const n = e.trim();
        if ("" === n) return []; {
            const e = Xt(n, "((((\\{\\w+\\})|(\\w+)).)?((\\[\\w+\\])|(\\w+))(( )+(desc|asc))?)(( )*,( )*(((\\{\\w+\\})|(\\w+)).)?((\\[\\w+\\])|(\\w+))(( )+(desc|asc))?)*", !0);
            if (1 !== e.length || e[0].value !== n) throw new at.DataBaseException("", "Invalid syntax in 'Order By' parameter.");
        }
        let r = Qt(n, "(\\{\\w+\\}|\\w+\\.)", !1, e => function(e, t) {
            const n = function(e) {
                    return "." === e.value.charAt(e.value.length - 1) ? e.value.substr(0, e.value.length - 1) : e.value.substr(1, e.value.length - 2);
                }(e),
                r = t.some(e => e.toLowerCase() === n.toLowerCase()) ? n : "";
            if ("" === r) throw new at.DataBaseException("", `'${n}' found in 'Order By' parameter is an invalid Entity`);
            return "." === e.value.charAt(e.value.length - 1) ? r + "." : r;
        }(e, t));
        r = Qt(r, "(\\[\\w+\\])", !1, e => e.value.substr(1, e.value.length - 2));
        return r.split(/, ?/).map(e => {
            const t = e.trim().split(" "),
                n = 2 !== t.length || "asc" === t[1].toLowerCase();
            return {
                attributeParts: t[0].split("."),
                isAscending: n
            };
        });
    }

    function hp(e) {
        e.stopPropagation(), e.preventDefault();
    }

    function gp(e) {
        return b(this, void 0, void 0, function*() {
            if (e instanceof tl)
                for (let t = 0; t < e.length; t++) {
                    const n = e.getItem(t);
                    yield pp(n);
                } else e instanceof el && (yield pp(e));
        });
    }

    function pp(e) {
        return b(this, void 0, void 0, function*() {
            const t = e.getAttributes().map(t => b(this, void 0, void 0, function*() {
                const n = e[t.attrName];
                if (t.dataType === Vo.Record) yield pp(n);
                else if (t.dataType === Vo.BinaryData) {
                    const e = n;
                    yield e.loadContent();
                }
            }));
            yield Promise.all(t);
        });
    }
    var fp = _exports.IndexedDBUtils = Object.freeze({
        __proto__: null,
        getDynamicSortsObjGenerator: function(e, t) {
            const n = dp(e, t);
            return e => n.map(t => {
                let n = e;
                for (let e = 0; e < t.attributeParts.length; e++) {
                    const i = (r = t.attributeParts[e], r.charAt(0).toLowerCase() + r.substr(1) + "Attr").toLowerCase(),
                        s = n.getAttributes().filter(e => e.attrName.toLowerCase() === i);
                    if (0 === s.length) throw new at.DataBaseException("", `Invalid attribute in 'Order By' parameter: ${t.attributeParts.join(".")}`);
                    n = n[s[0].attrName];
                }
                var r;
                return {
                    value: n,
                    isAscending: t.isAscending
                };
            });
        },
        loadBinaryDataContent: gp,
        markEventAsHandled: hp
    });
    const mp = "IndexedDBTransaction";
    class vp extends cp {
        set onComplete(e) {
            this.transaction.oncomplete = () => (this.allowTraces && fi(mp, `Committing transaction ${this.transactionId}`), e());
        }
        set onAbort(e) {
            this.transaction.onabort = () => (vi(mp, `Aborting transaction ${this.transactionId}: ${this.transaction.error}`), e(this.transaction.error));
        }
        executeQuery(e) {
            return e(this.transaction);
        }
        constructor(e, t, n) {
            super(e, n), this.transaction = t, vp.lastTransactionId = (vp.lastTransactionId + 1) % 1e12, this.transactionId = vp.lastTransactionId + 1;
        }
        renameTable(e, t) {
            return b(this, void 0, void 0, function*() {
                this.transaction.objectStore(e).name = t;
            });
        }
        getRecord(e, t) {
            return new Promise((n, r) => {
                this.debug(`Getting record with keys '${t}' from table '${e.tableName}'`);
                const i = this.transaction.objectStore(e.tableName).get(vp.wrapKeyIfNeeded(t, e));
                i.onsuccess = () => {
                    this.debug(`Retrieved record with keys '${t}' from table '${e.tableName}' successfully`), n(i.result || null);
                }, i.onerror = n => {
                    this.warning(`Error retrieving record with keys '${t}' from table '${e.tableName}'`, this.transaction.error), hp(n), r(this.transaction.error);
                };
            });
        }
        removeRecord(e, t) {
            return new Promise((n, r) => {
                this.debug(`Deleting record with key '${t}' from table '${e.tableName}'`);
                const i = this.transaction.objectStore(e.tableName).delete(vp.wrapKeyIfNeeded(t, e));
                i.onsuccess = () => {
                    this.debug(`Deleted record with key '${t}' from table '${e.tableName}' successfully`), n();
                }, i.onerror = n => {
                    this.warning(`Error deleting record with key '${t}' from table '${e.tableName}'`, i.error), hp(n), r(i.error);
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
                    this.warning(`Error deleting all records from table '${e.tableName}'`, r.error), hp(t), n(r.error);
                };
            });
        }
        insertRecord(e, t) {
            return new Promise((n, r) => {
                this.debug(`Inserting record on table '${e.tableName}'`);
                const i = this.transaction.objectStore(e.tableName).add(t);
                i.onsuccess = () => {
                    this.debug(`Inserted record on table '${e.tableName}' successfully`), n(vp.unwrapKeyIfNeeded(i));
                }, i.onerror = t => {
                    this.warning(`Error inserting record on table '${e.tableName}'`, i.error), hp(t), r(i.error);
                };
            });
        }
        upsertRecord(e, t) {
            return new Promise((n, r) => {
                this.debug(`Adding/Updating record on table '${e.tableName}'`);
                const i = this.transaction.objectStore(e.tableName).put(t);
                i.onsuccess = () => {
                    this.debug(`Added/Updated record on table '${e.tableName}' successfully`), n(vp.unwrapKeyIfNeeded(i));
                }, i.onerror = t => {
                    this.warning(`Error adding/updating record on table '${e.tableName}'`, i.error), hp(t), r(i.error);
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
                    const i = Ph(e);
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
                                this.warning(`Error updating record on table '${e.tableName}'`, i.error), hp(t), r(i.error);
                            };
                        } catch (t) {
                            this.warning(`Error updating record on table '${e.tableName}'`, t), r(t);
                        }
                    }, s.onerror = t => {
                        this.warning(`Error checking if record exists on table '${e.tableName}'`, s.error), hp(t), r(s.error);
                    };
                });
            });
        }
        addColumn(e, t) {
            return b(this, void 0, void 0, function*() {
                yield new Promise((n, r) => {
                    this.debug(`Adding column '${ap(t)}' on table '${e.tableName}'`);
                    try {
                        this.transaction.objectStore(e.tableName).createIndex(t.columnName, t.columnName), n();
                    } catch (n) {
                        this.warning(`Error adding column '${ap(t)}' on table '${e.tableName}'`, n), r(n);
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
                    s = $h(e).length > 0,
                    a = this.transaction.objectStore(e.tableName).openCursor();
                a.onsuccess = () => {
                    const r = a.result;
                    if (r) {
                        let e = r.value;
                        s || (e = Object.assign(Object.assign({}, e), {
                            $KEY: r.primaryKey
                        }));
                        Object.keys(t).reduce((n, r) => n && t.hasOwnProperty(r) && e[Mh(r)] === t[r], !0) && i.push(e), r.continue();
                    } else this.debug(`Search on table '${e.tableName}' found ${i.length} record(s) matching the specified criteria.`), n(i);
                }, a.onerror = t => {
                    this.warning(`Error searching for records on table '${e.tableName}'`, a.error), hp(t), r(a.error);
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
                    this.warning(`Error retrieving all the records from table '${e.tableName}'`, r.error), hp(t), n(r.error);
                };
            });
        }
        static wrapKeyIfNeeded(e, t) {
            return $h(t).length > 0 ? e instanceof Array ? e : [e] : e;
        }
        static unwrapKeyIfNeeded(e) {
            return e.result instanceof Array ? e.result[0] : e.result;
        }
    }
    vp.lastTransactionId = 0;
    const yp = "IndexedDBDatabase";
    class bp extends rp {
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
                    if ("undefined" == typeof window) return r(new at.SystemException("Database is only available in the browser/web view"));
                    if (!("indexedDB" in window)) return fi(yp, "This browser doesn't support IndexedDB"), r(new at.SystemException("This browser doesn't support IndexedDB"));
                    if (i = navigator.userAgent, /^((?!chrome|android).)*safari/i.test(i) && function(e) {
                            try {
                                return e.self !== e.top;
                            } catch (e) {
                                return !0;
                            }
                        }(window)) {
                        const e = "Your app requires native access to a Local Storage database that is not available in your browser while using an iframe.\nPlease test your app in your mobile device or use Google Chrome";
                        return alert(e), r(new at.SystemException(e));
                    }
                    fi(yp, `Opening database '${e}' on IndexedDB`);
                    const s = window.indexedDB.open(e);
                    s.onsuccess = () => {
                        fi(yp, `Database '${e}' opened successfully with version '${s.result.version}'`);
                        const r = s.result;
                        this.cache[e] = new bp(e, r, t), n(this.cache[e]);
                    }, s.onerror = () => {
                        vi(yp, `Error opening database '${e}'`), r(new at.OpenDatabaseException(`Could not open database '${e}'`));
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
            return fi(yp, `Closing database ${this.name} with version '${this.databaseImplementation.version}'`), this.databaseImplementation.close(), delete bp.cache[this.name], Promise.resolve();
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
            return bp.executeTransactionPromiseWithRetry((i, s) => b(this, void 0, void 0, function*() {
                let a = null,
                    o = null;
                const l = r ? r.map(e => e.tableName) : [];
                if (0 === l.length)
                    for (let e = 0; e < this.databaseImplementation.objectStoreNames.length; e++) l.push(this.databaseImplementation.objectStoreNames.item(e));
                const u = this.databaseImplementation.transaction(l, n),
                    c = new vp(t, u, this.databaseImplementation);
                c.onComplete = () => b(this, void 0, void 0, function*() {
                    yield gp(a), i(a);
                }), c.onAbort = e => s(null != o ? o : e);
                try {
                    a = yield e(c);
                } catch (e) {
                    o = e, null == u || u.abort();
                }
            }));
        }
        innerExecuteIDBTransactionWithoutObjectStores(e, t) {
            return e(new cp(t, this.databaseImplementation));
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
                        o.onsuccess = () => (_this8.debug(`Database '${_this8.name}' opened successfully with version '${a + 1}'`, t), _this8.databaseImplementation = o.result, _this8.setOnVersionChangeEvent(), n(i)), o.onerror = () => (vi(yp, `Error opening '${_this8.name}' database with version '${a + 1}'`), r(null != s ? s : o.error)), o.onupgradeneeded = () => {
                            _this8.debug(`Upgrading database '${_this8.name}' with version '${a + 1}'`, t), _this8.databaseImplementation = o.result;
                            const n = new vp(t, o.transaction, o.result);
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
            t && fi(yp, e);
        }
    }
    var Tp;
    bp.cache = {},
        function(e) {
            e[e.Read = 0] = "Read", e[e.Write = 1] = "Write", e[e.Upgrade = 2] = "Upgrade";
        }(Tp || (Tp = {}));
    var wp = Tp;
    const Ep = new Map();

    function Ip(e) {
        var t;
        return null !== (t = Ep.get(e)) && void 0 !== t ? t : "";
    }
    Ep.set(Bt.BINARY_DATA, "BLOB"), Ep.set(Bt.BOOLEAN, "BOOLEAN"), Ep.set(Bt.DATE, "DATE"), Ep.set(Bt.DATE_TIME, "DATETIME"), Ep.set(Bt.DECIMAL, "REAL"), Ep.set(Bt.INTEGER, "INTEGER"), Ep.set(Bt.LONGINTEGER, "BIGINT"), Ep.set(Bt.TEXT, "TEXT"), Ep.set(Bt.TIME, "TIME");
    const Ap = "The transaction is read-only",
        Np = "The database is not running a version change transaction",
        Sp = "WebSQLTransaction";
    class Dp {
        get transactionId() {
            return this._transactionId;
        }
        constructor(e, t, n) {
            this.allowTraces = e, this.transaction = t, this.mode = n, Dp.lastTransactionId = (Dp.lastTransactionId + 1) % 1e12, this._transactionId = Dp.lastTransactionId + 1, this.allowTraces && fi(Sp, `Starting transaction ${this.transactionId}`);
        }
        executeQuery(e) {
            return e(this.transaction);
        }
        getColumnDeclaration(e, t) {
            let n,
                r = `${Ip(t.type)}`;
            if (t.isPrimaryKey) {
                if (e.idIsAutoNumber === Ut.YesIfEmpty || e.idIsAutoNumber === Ut.Yes) return t.type === Bt.LONGINTEGER && (r = `${Ip(Bt.INTEGER)}`), r += " PRIMARY KEY AUTOINCREMENT NOT NULL", {
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
                if (this.debug(`Creating table '${e.tableName}'`), this.mode < wp.Upgrade) {
                    const t = new Error(Np);
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
                if (this.debug(`Deleting table '${t}'`), this.mode < wp.Upgrade) {
                    const e = new Error(Np);
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
                if (this.debug(`Renaming table '${e}'`), this.mode < wp.Upgrade) {
                    const t = new Error(Np);
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
                const i = ap(t);
                if (this.debug(`Adding column '${i}' on table '${e.tableName}'`), this.mode < wp.Upgrade) {
                    const e = new Error(Np);
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
                const i = Dp.wrapKeyIfNeeded(t),
                    s = e.attributes.map(e => `"${null == e ? void 0 : e.columnName}"`).join(", "),
                    a = `"${e.tableName}"`,
                    o = [...i],
                    l = e.attributes.filter(e => null == e ? void 0 : e.isPrimaryKey).map(e => `"${null == e ? void 0 : e.columnName}" = ?`).join(" and ");
                this.transaction.executeSql(`SELECT ${s} FROM ${a} WHERE ${l}`, o, (r, i) => {
                    this.debug(`Retrieved record with keys '${t}' from table '${e.tableName}' successfully`);
                    const s = Dp.convertSQLResultSetToDatabaseRecord(e, i);
                    n(s.length > 0 ? s[0] : null);
                }, (n, i) => {
                    const s = new Error(i.message.toString());
                    return this.warning(`Error retrieving record with keys '${t}' from table '${e.tableName}'`, s), r(s), !1;
                });
            });
        }
        insertRecord(e, t) {
            return new Promise((n, r) => {
                if (this.debug(`Inserting record on table '${e.tableName}'`), this.mode < wp.Write) {
                    const t = new Error(Ap);
                    return this.warning(`Error inserting record on table '${e.tableName}'`, t), r(t);
                }
                const i = e.attributes.filter(e => null == e ? void 0 : e.isPrimaryKey),
                    s = e.attributes.map(e => `"${null == e ? void 0 : e.columnName}"`).join(", "),
                    a = Dp.concatenateMultipleTimes("?", e.attributes.length, ", "),
                    o = `"${e.tableName}"`,
                    l = e.attributes.map(e => void 0 === t[null == e ? void 0 : e.columnName] ? null : t[null == e ? void 0 : e.columnName]);
                this.transaction.executeSql(`INSERT INTO ${o} (${s}) VALUES (${a})`, l, (r, s) => {
                    var a, o;
                    let l;
                    this.debug(`Inserted record on table '${e.tableName}' successfully`), l = e.idIsAutoNumber === Ut.No || e.idIsAutoNumber === Ut.YesIfEmpty && null !== t[null === (a = i[0]) || void 0 === a ? void 0 : a.columnName] ? t[null === (o = i[0]) || void 0 === o ? void 0 : o.columnName] : s.insertId, n(l);
                }, (t, n) => {
                    const i = new Error(n.message.toString());
                    return this.warning(`Error inserting record on table '${e.tableName}'`, i), r(i), !1;
                });
            });
        }
        updateRecord(e, t) {
            return new Promise((n, r) => {
                if (this.debug(`Updating record on table '${e.tableName}'`), this.mode < wp.Write) {
                    const t = new Error(Ap);
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
                if (this.debug(`Adding/updating record on table '${e.tableName}'`), this.mode < wp.Write) {
                    const t = new Error(Ap);
                    return this.warning(`Error adding/updating record on table '${e.tableName}'`, t), r(t);
                }
                const i = e.attributes.filter(e => null == e ? void 0 : e.isPrimaryKey),
                    s = e.attributes.map(e => `"${null == e ? void 0 : e.columnName}"`).join(", "),
                    a = Dp.concatenateMultipleTimes("?", e.attributes.length, ", "),
                    o = `"${e.tableName}"`,
                    l = e.attributes.map(e => t[null == e ? void 0 : e.columnName]);
                this.transaction.executeSql(`INSERT OR REPLACE INTO ${o} (${s}) VALUES (${a})`, l, (r, s) => {
                    var a, o;
                    let l;
                    this.debug(`Added/updated record on table '${e.tableName}' successfully`), l = e.idIsAutoNumber === Ut.No || e.idIsAutoNumber === Ut.YesIfEmpty && null !== t[null === (a = i[0]) || void 0 === a ? void 0 : a.columnName] ? t[null === (o = i[0]) || void 0 === o ? void 0 : o.columnName] : s.insertId, n(l);
                }, (t, n) => {
                    const i = new Error(n.message.toString());
                    return this.warning(`Error adding/updating record on table '${e.tableName}'`, i), r(i), !1;
                });
            });
        }
        upsertAllRecords(e, t) {
            return b(this, void 0, void 0, function*() {
                if (this.debug(`Adding/updating ${null == t ? void 0 : t.length} record(s) on table '${e.tableName}'`), this.mode < wp.Write) {
                    const t = new Error(Ap);
                    throw this.warning(`Error adding/updating records on table '${e.tableName}'`, t), t;
                }
                try {
                    e.attributes.some(e => (null == e ? void 0 : e.type) === Bt.BINARY_DATA) ? yield this.innerUpsertAllSingle(e, t): yield this.innerUpsertAllBulk(e, t), this.debug(`Added/updated ${null == t ? void 0 : t.length} record(s) on table '${e.tableName}' successfully`);
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
                const n = Math.floor(Dp.MaxQueryParameters / e.attributes.length);
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
                i = `(${Dp.concatenateMultipleTimes("?", e.attributes.length, ", ")})`;
            return `INSERT OR REPLACE INTO ${r} (${n}) VALUES ${Dp.concatenateMultipleTimes(i, t, ", ")}`;
        }
        removeRecord(e, t) {
            return new Promise((n, r) => {
                if (this.debug(`Deleting record with key '${t}' from table '${e.tableName}'`), this.mode < wp.Write) {
                    const t = new Error(Ap);
                    return this.warning(`Error deleting record from table '${e.tableName}'`, t), r(t);
                }
                const i = Dp.wrapKeyIfNeeded(t),
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
                if (this.debug(`Deleting all records from table '${e.tableName}'`), this.mode < wp.Write) {
                    const t = new Error(Ap);
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
                const i = ($h(e).length > 0 ? "" : '"rowid" AS "ROWID", ') + e.attributes.map(e => `"${null == e ? void 0 : e.columnName}"`).join(", "),
                    s = `"${e.tableName}"`;
                let a = "";
                const o = [];
                for (const e in t)
                    if (t.hasOwnProperty(e)) {
                        a += `${a.length > 0 ? " AND " : ""}"${Mh(e)}" = ?`, o.push(t[e]);
                    }
                this.transaction.executeSql(`SELECT ${i} FROM ${s} WHERE ${a}`, o, (t, r) => {
                    this.debug(`Search on table '${e.tableName}' found ${r.rows.length} record(s) matching the specified criteria`);
                    const i = Dp.convertSQLResultSetToDatabaseRecord(e, r);
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
                const r = ($h(e).length > 0 ? "" : '"rowid" AS "ROWID", ') + e.attributes.map(e => `"${null == e ? void 0 : e.columnName}"`).join(", "),
                    i = `"${e.tableName}"`;
                this.transaction.executeSql(`SELECT ${r} FROM ${i}`, void 0, (n, r) => {
                    this.debug(`Retrieved all records from table '${e.tableName}' successfully`);
                    const i = Dp.convertSQLResultSetToDatabaseRecord(e, r);
                    t(i);
                }, (t, r) => {
                    const i = new Error(r.message.toString());
                    return this.warning(`Error retrieving all records from table '${e.tableName}'`, i), n(i), !1;
                });
            });
        }
        debug(e) {
            this.allowTraces && fi(Sp, `${e} on transaction ${this.transactionId}`);
        }
        warning(t, n) {
            vi(Sp, `${t} on transaction ${this.transactionId}${n ? `: ${n.message}` : ""}`, _loggerJs.Visibility.Client);
        }
        static wrapKeyIfNeeded(e) {
            return e instanceof Array ? e : [e];
        }
        static convertSQLResultSetToDatabaseRecord(e, t) {
            const n = $h(e).length > 0,
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
    Dp.MaxQueryParameters = 500, Dp.lastTransactionId = 0;
    const Rp = "Could not open database",
        Cp = "WebSQLDatabase";
    class xp extends rp {
        static open(e) {
            return b(this, void 0, void 0, function*() {
                return this.cache[e] || (this.cache[e] = yield xp.innerOpen(e)), this.cache[e];
            });
        }
        static innerOpen(e) {
            return b(this, void 0, void 0, function*() {
                if ("undefined" == typeof window) throw new at.SystemException("Database is only available in the browser/web view");
                return Tn() ? xp.openPluginDatabase(e) : xp.isWebSQLSupported() ? xp.openWebSQLDatabase(e) : void xp.throwDatabaseRequiredError();
            });
        }
        static openPluginDatabase(e) {
            return b(this, void 0, void 0, function*() {
                yield Sn();
                const t = window;
                if (t.sqlitePlugin) return fi(xp, `Opening database '${e}'`), new Promise((n, r) => {
                    try {
                        t.sqlitePlugin.openDatabase({
                            name: e,
                            location: "default"
                        }, t => {
                            t ? (fi(xp, `Database '${e}' opened successfully`), n(new xp(e, t))) : (vi(Cp, `Error opening database '${e}'`), r(new at.OpenDatabaseException(`${Rp} '${e}'`)));
                        }, t => {
                            vi(Cp, `Error opening database '${e}' ${t.message}`), r(new at.OpenDatabaseException(`${Rp} '${e}': ${t.message.toString()}`));
                        });
                    } catch (t) {
                        r(new at.OpenDatabaseException(`${Rp} '${e}': ${t.message.toString()}`));
                    }
                });
                throw new at.OpenDatabaseException("No database driver available");
            });
        }
        static openWebSQLDatabase(e) {
            const t = window;
            let n;
            try {
                fi(xp, `Opening database '${e}'`), n = t.openDatabase(e, "1.0", e, 5242880);
            } catch (t) {
                throw new at.OpenDatabaseException(`${Rp} '${e}': ${t.message.toString()}`);
            }
            if (n) return fi(xp, `Database '${e}' opened successfully`), new xp(e, n);
            throw vi(Cp, `Error opening database '${e}'`), new at.OpenDatabaseException(`${Rp} '${e}'`);
        }
        static isWebSQLSupported() {
            return !!window.openDatabase;
        }
        static throwDatabaseRequiredError() {
            const e = "Your app requires native access to a Local Storage database that is not available in your browser.\n\nPlease test your app in your mobile device" + (!!window.chrome ? "" : ", or use Google Chrome web browser") + ".";
            throw alert(e), new at.SystemException(e);
        }
        constructor(e, t) {
            super(e, "WebSQL"), this.databaseImplementation = t;
        }
        testConnection() {
            return b(this, void 0, void 0, function*() {
                let t = 0;
                mi(Cp, "Starting to test on database connections. Performing #5 test queries.", _loggerJs.Visibility.Internal), yield Promise.all(Array.apply(null, new Array(5)).map(() => new Promise(e => b(this, void 0, void 0, function*() {
                    try {
                        yield this.executeTransaction(e => e.executeQuery(e => new Promise((t, n) => {
                            e.executeSql("SELECT 1", void 0, () => t(), (e, t) => (n(new Error(t.message.toString())), !1));
                        })));
                    } catch (e) {
                        t++, yi("WebSQLDatabase", "Failed to execute canary query (probably due to zombie transaction)", "OS-CLRT-60407", e);
                    } finally {
                        e();
                    }
                })))), mi(Cp, `Finished tests on database connections. #${5 - t} out of #5 successfull queries.`, _loggerJs.Visibility.Internal);
            });
        }
        close() {
            return this.databaseImplementation = null, delete xp.cache[this.name], Promise.resolve();
        }
        executeQuery(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            return this.executeReadTransaction(t => t.executeQuery(e), t);
        }
        executeTransaction(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            let n = arguments.length > 2 ? arguments[2] : undefined;
            return this.innerExecuteTransaction(e, wp.Write, t, n);
        }
        executeReadTransaction(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            let n = arguments.length > 2 ? arguments[2] : undefined;
            return this.innerExecuteTransaction(e, wp.Read, t, n);
        }
        executeUpgradeTransaction(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            return this.innerExecuteTransaction(e, wp.Upgrade, t);
        }
        innerExecuteTransaction(t, n) {
            let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
            let i = arguments.length > 3 ? arguments[3] : undefined;
            return new Promise((i, s) => {
                let a, o, l;
                this.innerExecuteTransactionInMode(n === wp.Read, e => b(this, void 0, void 0, function*() {
                    a = new Dp(r, e, n);
                    try {
                        o = yield t(a);
                    } catch (t) {
                        l = t, e.executeSql("ABORT_TRANSACTION", void 0, () => {}, () => !0);
                    }
                }), t => {
                    const n = null != l ? l : new Error(t.message.toString());
                    r && vi(Cp, `Aborting transaction ${null == a ? void 0 : a.transactionId}: ${n}`, _loggerJs.Visibility.Client), s(n);
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
            t && fi(Cp, e);
        }
    }
    xp.cache = {};
    const Lp = function() {
            for (var _len16 = arguments.length, e = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
                e[_key16] = arguments[_key16];
            }
            return b(void 0, [...e], void 0, function() {
                let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Ed;
                return function*() {
                    yield e.initializeManifestLoader(), yield e.initialize();
                }();
            });
        },
        Op = function(e) {
            for (var _len17 = arguments.length, t = new Array(_len17 > 1 ? _len17 - 1 : 0), _key17 = 1; _key17 < _len17; _key17++) {
                t[_key17 - 1] = arguments[_key17];
            }
            return b(void 0, [e, ...t], void 0, function(e) {
                let {
                    onSettingsUpdated: t
                } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return function*() {
                    e.register(fn.SettingsManager, () => new hi({
                        onSettingsUpdated: t
                    }));
                    const n = e.resolve(fn.SettingsManager);
                    yield n.update();
                }();
            });
        };
    _exports.useSettingsManager = Op;
    _exports.useVersionsManager = Lp;
    var _p, Mp;
    const Up = "Application",
        Fp = {
            hasRenderedSplashInSession: new et(Ve.Session, "HasRenderedSplashInSession", !1),
            pendingUpgradeFeedback: new et(Ve.Session, "PendingUpgradeFeedback")
        },
        $p = (e, t, n) => b(void 0, void 0, void 0, function*() {
            var r;
            if (void 0 === n && (n = null === (r = pn.resolve(fn.Auth)) || void 0 === r ? void 0 : r.getInstance()), n) return yield n.getValidAccessToken(e, t);
        });
    class Pp {
        constructor() {
            _p.add(this), this.showingSplashScreen = !1, this.isApplicationReady = !1;
        }
        setApplicationDefinition(t) {
            P(t), J(t.applicationKey), Tn() && function(t) {
                b(this, arguments, void 0, function(_ref34) {
                    let {
                        version: t,
                        ensureReady: n = Sn,
                        getNativeAppInfo: r = Rr
                    } = _ref34;
                    return function*() {
                        yield n();
                        const i = r();
                        if ("function" == typeof(null == i ? void 0 : i.setOSApplicationVersion)) try {
                            i.setOSApplicationVersion(t);
                        } catch (t) {
                            yield mi("Native", "Failed to set app version", _loggerJs.Visibility.Internal);
                        }
                    }();
                });
            }({
                version: t.appVersion
            });
        }
        tryUpgrade(e, t, n, r) {
            return b(this, void 0, void 0, function*() {
                const i = yield Ed.upgradeVersion(e, t);
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
            return ld("Application initialize"), St(() => b(this, void 0, void 0, function*() {
                yield fh(pn, {
                    applicationDefinition: e,
                    application: this
                });
                const s = Gg(pn, {
                        dateTimeFormat: n,
                        numberFormat: r
                    }),
                    a = Op(pn, {
                        onSettingsUpdated: T(this, _p, "m", Mp)
                    }),
                    o = np(pn),
                    l = Lp();
                return yield Promise.all([s, a, o, l]), yield sh({
                    initType: t,
                    executeRequiredScripts: i,
                    application: this
                });
            }), e => this.processInitializationError(t, e), () => ud("Application initialize"));
        }
        triggerApplicationReadyEvent() {
            var e;
            const t = null !== (e = ie()) && void 0 !== e ? e : re();
            if (t) return fi(Up, "Calling application ready event handler for " + Y()), new Promise((e, n) => {
                Ce([t], e, n);
            }).then(e => e.default.fireApplicationReady()).catch(e => {
                this.handleError(e);
            });
        }
        initializeDatabase() {
            return b(this, void 0, void 0, function*() {
                let e;
                fi(Up, "Initializing application database.");
                const t = de(),
                    n = Tn();
                if (t || "28f21196-030a-4be2-8241-5a4888fb3ca5" === X()) fi(Up, "Initializing database mock for NativeAppBuilder."), e = ji.mockDb(k());
                else {
                    let t;
                    n ? (fi(Up, "Initializing WebSQL database service."), t = xp.open(k())) : (fi(Up, "Initializing IndexDB database service."), t = bp.open(k(), () => this.onNewVersionDetected(!0))), e = t.then(e => b(this, void 0, void 0, function*() {
                        fi(Up, "Initializing entity service");
                        return pn.resolve(fn.EntityService).setDatabase(e), e;
                    }));
                }
                return e;
            });
        }
        onDatabaseReady(e) {
            if (ed(e)) {
                pn.resolve(fn.EntityService).setReady();
            } else uc.initDb(e);
            fi(Up, "Database initialized successfully");
        }
        onNewVersionDetected(e, t) {
            const n = (null != t ? t : Ed.isAutoUpgradeEnabled) || !Tn();
            fi(Up, "New version detected, currentViewHasChanged = " + e);
            let r = !0;
            if (e && n) {
                this.disableDocument();
                const e = () => sr(Nr(), r, !0),
                    t = e => e.getApplicationUpgradeRequiredMessage(this.canLoseDataInUpgrade());
                this.showFeedbackMessage(t, 2, "upgrade-required", e).then(() => Lc(!1));
            }
            return n ? Ed.cacheResourcesInBackground(e => {
                r = e;
            }) : Promise.resolve();
        }
        onAppInfoReady(e) {
            try {
                ld("Application onAppInfoReady"), this.updateServerRequestTimeoutOverrideInSeconds(e), this.updateApplicationInfo(e), this.updateClientInfo();
            } finally {
                ud("Application onAppInfoReady");
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
            Sn().then(() => function() {
                const e = window.device;
                if (e) {
                    const t = new rt(new it(e.platform, e.version, e.manufacturer, e.model, e.uuid, e.serial, e.cordova, e.isVirtual));
                    st.set(tt.serializeClientInfo(t));
                }
            }()).catch(e => vi(Up, `Client info update failed: ${e}`));
        }
        shouldRenderSplashScreen() {
            const e = Q();
            return !!((null == e ? void 0 : e.splashScreenName) && e.splashScreenName.length > 0) && !Fp.hasRenderedSplashInSession.get();
        }
        disableDocument() {
            const e = document.createElement("div");
            e.classList.add("background-backdrop"), document.body.classList.add("disable-scroll"), document.body.appendChild(e);
        }
        canLoseDataInUpgrade() {
            return document.getElementsByTagName("form").length > 0;
        }
        onUpgradeFinished(e, t) {
            e ? fi(Up, "Upgrade finished successfully") : vi(Up, `Upgrade failed with reason: ${t}`);
            const n = {
                success: e,
                failReason: t
            };
            e && !this.isShowingSplashScreen ? this.showUpgradeFeedback(n) : Fp.pendingUpgradeFeedback.set(n);
        }
        waitForAppReady() {
            return this.isApplicationReady ? Promise.resolve(void 0) : (this.appReadyPromise || (this.appReadyPromise = new Promise(e => {
                this.onReady = () => e();
            })), this.appReadyPromise);
        }
        onApplicationReady() {
            fi(Up, "Application ready"), ud("Application ready"), Ti(), this.isApplicationReady = !0, this.onReady && (this.onReady(), this.onReady = null);
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
                Ce([null !== (s = ae()) && void 0 !== s ? s : se()], s => {
                    const a = e(s);
                    a && Oc(a, t, !0, n, !0, r), i();
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
            e && Fp.hasRenderedSplashInSession.set(!0), this.showingSplashScreen = e;
        }
        handleError(e, t) {
            Ec(e, t);
        }
        exit() {
            return !Tn() || Rn();
        }
        registerDefaultErrorHandler(e) {
            return pn.register(fn.GlobalExceptionHandler, e);
        }
    }
    _p = new WeakSet(), Mp = function(e) {
        const t = e.readNumber("HealthCheckInterval");
        [pn.resolve(fn.HttpClient), pn.resolve(fn.UnauthenticatedHttpClient), pn.resolve(fn.DebuggerHttpClient), pn.resolve(fn.NonDebuggerHttpClient)].forEach(e => ph.updateHealthCheckConfig(e, {
            healthCheckIntervalInSeconds: t
        }));
    };
    var Vp = new Pp();
    Sr.setUrlVersionProvider(Ed.getVersionedUrl.bind(Ed));
    var Bp = _exports.Application = Object.freeze({
        __proto__: null,
        Application: Pp,
        ApplicationStorage: Fp,
        default: Vp,
        getToken: $p
    });
    const kp = "There was an error processing your request.",
        zp = "",
        Hp = "RELOAD",
        jp = "#error-screen-message-text",
        qp = "#error-screen-message-text-extra",
        Gp = "#error-screen-message-reload-button",
        Wp = "#error-screen-spinner",
        Kp = "#exception-detail",
        Jp = "#error-screen-show-detail-button",
        Yp = "#error-screen-exception-message",
        Xp = "#error-screen-exception-stack",
        Qp = "#exception-detail-text";

    function Zp(e) {
        var t, n, r;
        const i = yc.errorPageMessage.get(),
            s = yc.errorPageExtraMessage.get(),
            a = yc.errorPageExceptionInfo.get();
        if (a) {
            let n = a.message;
            const r = ut(a);
            if (r && (n += "\n" + r), console.error(n), "undefined" != typeof document && document.querySelector) {
                document.querySelector(Yp).innerHTML = null !== (t = a.message) && void 0 !== t ? t : "";
                document.querySelector(Xp).innerHTML = r;
                if (document.querySelector(Jp).addEventListener("click", () => function() {
                        if ("undefined" != typeof document && document.querySelector) {
                            const e = document.querySelector(Jp),
                                t = document.querySelector(Qp);
                            t.hidden ? (e.innerHTML = "Hide Detail", t.hidden = !1) : (e.innerHTML = "Show Detail", t.hidden = !0);
                        }
                    }()), null == e ? void 0 : e.showExceptionStack) {
                    document.querySelector(Kp).style.display = "block";
                }
            }
        }
        if ("undefined" != typeof document && document.querySelector) {
            const t = null === (n = null == e ? void 0 : e.messages) || void 0 === n ? void 0 : n.defaultMessage,
                a = null == e ? void 0 : e.extraMessage;
            document.querySelector(jp).innerHTML = i || t || kp;
            document.querySelector(qp).innerHTML = s || a || zp;
            const o = document.querySelector(Gp);
            o.innerHTML = null !== (r = null == e ? void 0 : e.reloadLabel) && void 0 !== r ? r : Hp, o.addEventListener("click", () => function() {
                if ("undefined" != typeof document && document.querySelector) {
                    document.querySelector(Gp).style.display = "none";
                    document.querySelector(Wp).style.display = "inline-block";
                }
                setTimeout(() => {
                    lr();
                }, 2e3);
            }());
        }
    }
    var ef = _exports.ErrorScreen = Object.freeze({
        __proto__: null,
        initializeErrorPage: function(t, n) {
            let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Zp;
            return Promise.resolve().then(() => n.initialize(t, 1).then(() => {
                var n;
                r(t.errorPageConfig);
                try {
                    const t = yc.errorPageExceptionInfo.get(),
                        r = t ? t.message : yc.errorPageMessage.get();
                    yi("ErrorScreen", `${r}`, null !== (n = null == t ? void 0 : t.errorCode) && void 0 !== n ? n : "OS-CLRT-00000", void 0, _loggerJs.Visibility.Client);
                } catch (e) {
                    yi("ErrorScreen", "Unable to retrieve error details", "OS-CLRT-00000");
                }
                Ti();
            }).catch(e => {
                console.error(e);
            }));
        }
    });
    const tf = "BaseMessagesProvider";
    var nf;
    ! function(e) {
        e.MandatoryValue = "Validation.Mandatory", e.InvalidValuePrefix = "Validation.", e.UpgradeComplete = "UpgradeComplete", e.UpgradeRequiredDataLoss = "UpgradeRequiredDataLoss", e.UpgradeRequired = "UpgradeRequired", e.UpgradeFailedOnResources = "AppInitError.Resources", e.UpgradeFailedOnDataModel = "AppInitError.DataModel", e.UpgradeFailed = "AppInitError.Generic";
    }(nf || (nf = {}));
    var rf = _exports.LanguageResources = Object.freeze({
        __proto__: null,
        BaseMessagesProvider: class {
            constructor(e) {
                if (this.messages = {}, this.localeChangeHandler = e => {
                        var t;
                        const n = pn.resolve(fn.TranslationsService),
                            r = pn.resolve(fn.LocaleService);
                        if (n) {
                            (null !== (t = e.localeFamily) && void 0 !== t ? t : [e.localeCode]).forEach(e => {
                                var t, i;
                                this.translationResources[e] ? (fi(tf, `Adding translations for ${e} locale.`), n.add(null !== (t = this.translationResources[e].translations) && void 0 !== t ? t : {}), r.setCurrentLocaleRTL(null !== (i = this.translationResources[e].isRTL) && void 0 !== i && i)) : fi(tf, `No translations found for ${e} locale.`);
                            });
                        }
                    }, this.translationResources = null != e ? e : this.translationResources, this.translationResources) {
                    const e = pn.resolve(fn.LocaleService);
                    if (e) {
                        const t = e.getCurrentLocale(),
                            n = e.getCurrentLocaleFamily();
                        this.localeChangeHandler({
                            localeCode: t,
                            localeFamily: n
                        }), fi(tf, "Subscribing handler for locale service."), e.subscribe(this.localeChangeHandler);
                    }
                }
            }
            getMandatoryValueMessage() {
                return this.getMessage(nf.MandatoryValue, "Required Value!");
            }
            getInvalidValueMessage(e) {
                return this.getMessage(nf.InvalidValuePrefix + Vo[e], "Invalid Value!");
            }
            getApplicationUpgradeCompleteMessage() {
                return this.getMessage(nf.UpgradeComplete, "");
            }
            getApplicationUpgradeRequiredMessage(e) {
                return e ? this.getMessage(nf.UpgradeRequiredDataLoss, "") : this.getMessage(nf.UpgradeRequired, "");
            }
            getApplicationUpgradeFailedOnResourcesMessage() {
                return this.getMessage(nf.UpgradeFailedOnResources, "");
            }
            getApplicationUpgradeFailedOnDataModelMessage() {
                return this.getMessage(nf.UpgradeFailedOnDataModel, "");
            }
            getApplicationUpgradeFailedUnknownMessage() {
                return this.getMessage(nf.UpgradeFailed, "");
            }
            getMessage(e, t) {
                var n;
                const r = null !== (n = this.messages[e]) && void 0 !== n ? n : t,
                    i = pn.resolve(fn.TranslationsService);
                return i ? i.getMessage(e, r) : r;
            }
            setMessage(e, t) {
                this.messages[e] = t;
            }
        },
        get ModuleMessageKeys() {
            return nf;
        }
    });
    const sf = "idAttr",
        af = "nameAttr",
        of = "validAttr",
        lf = "validationMessageAttr";
    class uf {
        constructor(e, t, n, r) {
            this.type = e, this._value = t, this.setter = n, this.model = r;
        }
        get value() {
            return this._value;
        }
        set value(e) {
            const t = Ku.convertTo(e, this.type);
            this.setter(t), this.model.flush();
        }
        isAcceptable(e) {
            return Ku.isConvertibleTo(e, this.type);
        }
        fastEquals(e) {
            return e && this.constructor === e.constructor && this.value === e.value;
        }
        equals(e) {
            return e && this.constructor === e.constructor && Wo(this.value, e.value);
        }
    }
    class cf extends Xo {
        constructor(e) {
            super(e);
        }
        get idAttr() {
            return this.getBasicProperty(sf);
        }
        set idAttr(e) {
            this.setBasicProperty(sf, e, Vo.Text);
        }
        get nameAttr() {
            return this.getBasicProperty(af);
        }
        set nameAttr(e) {
            this.setBasicProperty(af, e, Vo.Text);
        }
        get generationNode() {
            return this.getBasicProperty(cf.WidgetGenerationNodeAttributeName);
        }
        set generationNode(e) {
            this.setBasicProperty(cf.WidgetGenerationNodeAttributeName, e, Vo.Object);
        }
        asReadOnly() {
            return {
                idAttr: this.idAttr,
                nameAttr: this.nameAttr
            };
        }
        refreshGeneration() {
            this.generationNode && (this.generationNode.generation = yf.currentGeneration);
        }
    }
    cf.WidgetGenerationNodeAttributeName = "widgetGenerationNode", cf.RecordClass = Xo.defineRecordClass({
        idAttr: "",
        nameAttr: "",
        widgetGenerationNode: null
    });
    class df extends cf {
        constructor(e) {
            super(e);
        }
        get validAttr() {
            return this.getBasicProperty( of );
        }
        set validAttr(e) {
            this.setBasicProperty( of , e, Vo.Boolean);
        }
        get validationMessageAttr() {
            return this.getBasicProperty(lf);
        }
        set validationMessageAttr(e) {
            this.setBasicProperty(lf, e, Vo.Text);
        }
        onPropertyValueChanged(e) {
            e !== of && e !== lf || this.refreshGeneration();
        }
        asReadOnly() {
            return {
                idAttr: (e = this.data).get(sf),
                nameAttr: e.get(af),
                validAttr: e.get( of ),
                validationMessageAttr: e.get(lf)
            };
            var e;
        }
    }
    df.RecordClass = (() => {
        const e = new cf.RecordClass().toJS();
        return e.validAttr = !0, e.validationMessageAttr = "", Xo.defineRecordClass(e);
    })();
    class hf extends Xo {
        constructor(e) {
            super(e), this.widgetsIdToRecord = this.data.get(hf.WidgetRecordsAttribute), this.widgetsIdToRecordDataCache = this.data.get(hf.WidgetRecordsDataCacheAttribute);
        }
        static createDefaultData() {
            return new hf.RecordClass({
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
            return this.getWidgetsType()[e] || cf;
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
            const t = Bd.nameFromId(e),
                n = new(this.getWidgetRecordType(t))(this.widgetsIdToRecordDataCache.get(e));
            return n.idAttr = e, n.nameAttr = t, n;
        }
        add(e) {
            hf.setPropagationHandler(e, this, e.idAttr, this.internalSet), this.widgetsIdToRecordDataCache.delete(e.idAttr), this.widgetsIdToRecord.set(e.idAttr, e);
        }
        remove(e) {
            this.widgetsIdToRecord.delete(e), this.widgetsIdToRecordDataCache.delete(e), this.writePropagate(this.data, null);
        }
    }
    hf.WidgetRecordsAttribute = "records", hf.WidgetRecordsDataCacheAttribute = "recordsCache", hf.RecordClass = Xo.defineRecordClass({
        records: null,
        recordsCache: null
    });
    class gf extends el {
        get dataFetchStatusAttr() {
            return this.getBasicProperty(gf.DataFetchStatusAttributeName);
        }
        set dataFetchStatusAttr(e) {
            this.setBasicProperty(gf.DataFetchStatusAttributeName, e, Vo.Integer);
        }
        get isDataFetchedAttr() {
            return 1 === this.dataFetchStatusAttr;
        }
        get hasFetchErrorAttr() {
            return 2 === this.dataFetchStatusAttr;
        }
        static attributesToDeclare() {
            return [el.attr("DataFetchStatus", gf.DataFetchStatusAttributeName, "", !0, !1, Vo.Integer, () => 0)].concat(super.attributesToDeclare());
        }
        replaceWith(e) {
            const t = new this.constructor(Xo.getData(e));
            t.dataFetchStatusAttr = this.dataFetchStatusAttr, this.writePropagate(Xo.getData(t), new jo());
        }
    }
    gf.DataFetchStatusAttributeName = "dataFetchStatusAttr";
    class pf extends gf {
        get listOut() {
            return this.getComplexProperty(pf.ListOutAttributeName, this.getRecordListType());
        }
        set listOut(e) {
            this.setComplexProperty(pf.ListOutAttributeName, e, Vo.RecordList, this.getRecordListType());
        }
        get countOut() {
            return this.getBasicProperty(pf.CountOutAttributeName);
        }
        set countOut(e) {
            this.setBasicProperty(pf.CountOutAttributeName, e, Vo.LongInteger);
        }
        bulkSet(e, t, n) {
            const r = [{
                name: pf.ListOutAttributeName,
                value: e,
                isBasicType: !1
            }, {
                name: gf.DataFetchStatusAttributeName,
                value: t,
                isBasicType: !0
            }];
            void 0 !== n && r.push({
                name: pf.CountOutAttributeName,
                value: n,
                isBasicType: !0
            }), this.setProperties(r);
        }
        getRecordListType() {
            return this.constructor.RecordListType;
        }
        static attributesToDeclare() {
            return [el.attr("List", pf.ListOutAttributeName, "List", !0, !1, Vo.RecordList, () => !1, !0, this.RecordListType), el.attr("Count", pf.CountOutAttributeName, "Count", !0, !1, Vo.LongInteger, () => To.defaultValue)].concat(super.attributesToDeclare());
        }
        static init() {
            if (!this.RecordListType) throw new TypeError("AggregateRecords must define a RecordListType");
            super.init();
        }
    }
    pf.ListOutAttributeName = "listOut", pf.CountOutAttributeName = "countOut";
    class ff extends Xo {
        constructor(e) {
            super(), this._context = e, this.writeSubscriptions = [], this.cachedValues = {}, this.modified = !1;
        }
        static createDefaultData() {
            const e = this.newVariablesRecord(),
                t = this.newWidgetsRecord();
            return new ff.RecordClass({
                variables: Xo.getData(e),
                widgets: Xo.getData(t),
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
            this.pendingFlush && (clearTimeout(this.pendingFlush), this.pendingFlush = void 0), this.modified && (this.modified = !1, yf.currentGeneration++, this.innerFlush(!1), fi("BaseViewModel", "Flushing model"));
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
            if (this.hasVariables) return this.getComplexProperty(ff.VariablesPropertyName, e.getVariablesRecordConstructor());
            throw new Error("Model does not contain variables");
        }
        get variables() {
            return this.getVariables();
        }
        set variables(e) {
            const t = this.constructor;
            this.setComplexProperty(ff.VariablesPropertyName, e, Vo.Record, t.getVariablesRecordConstructor());
        }
        get clientVariablesGeneration() {
            return this.getBasicProperty(ff.ClientVariablesGenerationPropertyName);
        }
        set clientVariablesGeneration(e) {
            this.setBasicProperty(ff.ClientVariablesGenerationPropertyName, e, Vo.Integer);
        }
        static get hasValidationWidgets() {
            return !0;
        }
        get hasValidationWidgets() {
            return this.constructor.hasValidationWidgets;
        }
        get currentLocale() {
            return this.getBasicProperty(ff.CurrentLocalePropertyName);
        }
        set currentLocale(e) {
            this.currentLocale !== e && this.clearCachedValues(), this.setBasicProperty(ff.CurrentLocalePropertyName, e, Vo.Text);
        }
        static getWidgetsRecordConstructor() {
            throw new Error("@abstract");
        }
        static newWidgetsRecord(e) {
            return this.hasValidationWidgets ? new(this.getWidgetsRecordConstructor())(e) : void 0;
        }
        getWidgets() {
            const e = this.constructor;
            if (this.hasValidationWidgets) return this.getComplexProperty(ff.WidgetsPropertyName, e.getWidgetsRecordConstructor());
            throw new Error("Model does not contain validation widgets");
        }
        get widgets() {
            return this.getWidgets();
        }
        set widgets(e) {
            this.setComplexProperty(ff.WidgetsPropertyName, e, Vo.Object);
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
                    return ff.InvalidValue;
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
            return new uf(e, t, n, this);
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
            return this._widgetsGenerationsTree || (this._widgetsGenerationsTree = new yf()), this._widgetsGenerationsTree;
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
                    let e = t.get(ff.VariablesPropertyName);
                    n.forEach(t => e = e.set(t, null)), t = t.set(ff.VariablesPropertyName, e);
                }
            }
            return t;
        }
    }
    ff.VariablesPropertyName = "variables", ff.WidgetsPropertyName = "widgets", ff.ClientVariablesGenerationPropertyName = "clientVariablesGeneration", ff.CurrentLocalePropertyName = "currentLocale", ff.InvalidValue = new Object(), ff.RecordClass = Xo.defineRecordClass({
        variables: null,
        widgets: null,
        clientVariablesGeneration: 0,
        currentLocale: null
    });
    class mf extends ff {
        static get hasVariables() {
            return !1;
        }
        static get hasValidationWidgets() {
            return !1;
        }
        setInputs() {}
        static create(e, t, n) {
            return new mf({
                viewName: e,
                navigatedFromHistory: t,
                viewWasRestoredFromCache: n
            });
        }
    }
    class vf {
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
            return new vf(this);
        }
    }
    class yf {
        constructor() {
            this._root = new vf(null), this._root.generation = yf.currentGeneration, yf.currentGeneration++;
        }
        get root() {
            return this._root;
        }
        static get currentGeneration() {
            return yf.generation;
        }
        static set currentGeneration(e) {
            yf.generation = e;
        }
    }
    yf.generation = 0;
    var bf = _exports.Model = Object.freeze({
        __proto__: null,
        AggregateRecord: pf,
        BaseViewModel: ff,
        BaseWidgetRecordMap: hf,
        DataSourceRecord: gf,
        DummyViewModel: mf,
        ModelFactory: class {
            constructor(e) {
                this.modelClass = e;
            }
            create(e) {
                return this.modelClass.hasVariables || this.modelClass.hasValidationWidgets ? new this.modelClass(e) : new mf(e);
            }
            get hasValidationWidgets() {
                return this.modelClass.hasValidationWidgets;
            }
        },
        ValidationWidgetRecord: df,
        Variable: uf,
        VariablelessViewModel: class extends ff {
            static get hasVariables() {
                return !1;
            }
            setInputs() {}
        },
        WidgetRecord: cf,
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

    function Tf(e) {
        const t = e.trim().split(" ")[0].split(".");
        return t[t.length - 1].replace(/["]+/g, "");
    }
    var wf = _exports.WebSQLUtils = Object.freeze({
        __proto__: null,
        getAttributeFromOrderBy: Tf,
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
            let r = Xt(e = e.trim(), '(^|\\s|\\.)(\\[|"|)(ossys_|osltm_|oslog_|osevt_|osusr_|osext_)', !0);
            if (r.length > 0) {
                const e = r[0];
                throw new at.DataBaseException("", `'${e.groups[2] + e.groups[3]}' found in 'Order By' parameter is a reserved prefix`);
            }
            if ("" !== e && (r = Xt(e, "((((\\{\\w+\\})|(\\w+)).)?((\\[\\w+\\])|(\\w+))(( )+(desc|asc))?)(( )*,( )*(((\\{\\w+\\})|(\\w+)).)?((\\[\\w+\\])|(\\w+))(( )+(desc|asc))?)*", !0), 1 !== r.length || r[0].value !== e)) throw new at.DataBaseException("", "Invalid syntax in 'Order By' parameter.");
            let i = Qt(e, "(\\{\\w+\\}|\\w+\\.)", !1, e => function(e, t, n) {
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
                if (!s) throw new at.DataBaseException("", `'${i}' found in 'Order By' parameter is an invalid Entity`);
                return "." === e.value.charAt(e.value.length - 1) ? r + "." : r;
            }(e, t, n));
            return i = Qt(i, "(\\[\\w+\\])", !1, e => function(e) {
                const t = e.value.substr(1, e.value.length - 2);
                return t ? ('"' === t.charAt(0) ? "" : '"') + t + ('"' === t.charAt(t.length - 1) ? "" : '"') : "";
            }(e)), i;
        },
        validateQueryOrderBy: function(e, t) {
            return t.forEach(t => {
                const n = Tf(t);
                for (let t = 0; t < e.length; t++) {
                    if (e[t].attributes.some(e => e.name.toLowerCase() === n.toLowerCase())) return !0;
                }
                throw new at.DataBaseException("", `Invalid attribute in 'Order By' parameter: ${t}`);
            }), !0;
        }
    });

    function Ef() {
        return !0;
    }

    function If(e, t) {
        return e && t && !Al.isBasicType(e) ? e.fastEquals instanceof Function ? e.fastEquals(t) : Wo(e, t) : e === t;
    }
    var Af = _exports.ObjectExtensions = Object.freeze({
        __proto__: null,
        arrayShallowEquals: function(e, t) {
            if (e === t) return !0;
            if (!(null !== e && null !== t && e instanceof Array && t instanceof Array)) return !1;
            if (e.length !== t.length) return !1;
            for (let n = 0; n < e.length; n++)
                if (!If(e[n], t[n])) return !1;
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
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Ef;
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
                    if (!If(e[a], t[a])) return !1;
                }
            }
            return !0;
        }
    });
    let Nf = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("PasswordComplexityPolicyFailed", "passwordComplexityPolicyFailedAttr", "passwordComplexityPolicyFailed", !0, !1, Vo.Boolean, () => !1), this.attr("InvalidCredentials", "invalidCredentialsAttr", "invalidCredentials", !0, !1, Vo.Boolean, () => !1), this.attr("TooManyFailedAttempts", "tooManyFailedAttemptsAttr", "tooManyFailedAttempts", !0, !1, Vo.Boolean, () => !1)].concat(super.attributesToDeclare());
        }
    };
    Nf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Nf);
    let Sf = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Success", "successAttr", "success", !0, !1, Vo.Boolean, () => Ko(Vo.Boolean)), this.attr("ChangePasswordFailureReason", "changePasswordFailureReasonAttr", "changePasswordFailureReason", !0, !1, Vo.Record, () => Yo.getData(new Nf()), Nf)].concat(super.attributesToDeclare());
        }
    };
    Sf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Sf);
    let Df = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("PasswordComplexityPolicyFailed", "passwordComplexityPolicyFailedAttr", "passwordComplexityPolicyFailed", !0, !1, Vo.Boolean, () => !1), this.attr("InvalidVerificationCode", "invalidVerificationCodeAttr", "invalidVerificationCode", !0, !1, Vo.Boolean, () => !1), this.attr("InvalidEmail", "invalidEmailAttr", "invalidEmail", !0, !1, Vo.Boolean, () => !1)].concat(super.attributesToDeclare());
        }
    };
    Df = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Df);
    let Rf = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("MinimumLength", "minimumLengthAttr", "minimumLength", !0, !1, Vo.Integer, () => Ko(Vo.Integer)), this.attr("UpperCaseLetterRequired", "upperCaseLetterRequiredAttr", "upperCaseLetterRequired", !0, !1, Vo.Boolean, () => Ko(Vo.Boolean)), this.attr("LowerCaseLetterRequired", "lowerCaseLetterRequiredAttr", "lowerCaseLetterRequired", !0, !1, Vo.Boolean, () => Ko(Vo.Boolean)), this.attr("NumberRequired", "numberRequiredAttr", "numberRequired", !0, !1, Vo.Boolean, () => Ko(Vo.Boolean)), this.attr("SpecialCharacterRequired", "specialCharacterRequiredAttr", "specialCharacterRequired", !0, !1, Vo.Boolean, () => Ko(Vo.Boolean))].concat(super.attributesToDeclare());
        }
    };
    Rf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Rf);
    let Cf = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("IsValid", "isValidAttr", "isValid", !0, !1, Vo.Boolean, () => Ko(Vo.Boolean)), this.attr("MissingMinimumLength", "missingMinimumLengthAttr", "missingMinimumLength", !0, !1, Vo.Boolean, () => Ko(Vo.Boolean)), this.attr("MissingUpperCaseLetter", "missingUpperCaseLetterAttr", "missingUpperCaseLetter", !0, !1, Vo.Boolean, () => Ko(Vo.Boolean)), this.attr("MissingLowerCaseLetter", "missingLowerCaseLetterAttr", "missingLowerCaseLetter", !0, !1, Vo.Boolean, () => Ko(Vo.Boolean)), this.attr("MissingNumber", "missingNumberAttr", "missingNumber", !0, !1, Vo.Boolean, () => Ko(Vo.Boolean)), this.attr("MissingSpecialCharacter", "missingSpecialCharacterAttr", "missingSpecialCharacter", !0, !1, Vo.Boolean, () => Ko(Vo.Boolean))].concat(super.attributesToDeclare());
        }
    };
    Cf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Cf);
    let xf = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Success", "successAttr", "success", !0, !1, Vo.Boolean, () => Ko(Vo.Boolean)), this.attr("UserId", "userIdAttr", "userId", !0, !1, Vo.Text, () => Ko(Vo.Text)), this.attr("finishUserRegistrationFailureReason", "finishUserRegistrationFailureReasonAttr", "finishUserRegistrationFailureReason", !0, !1, Vo.Record, () => Yo.getData(new Df()), Df)].concat(super.attributesToDeclare());
        }
    };
    xf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], xf);
    let Lf = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("InvalidCredentials", "invalidCredentialsAttr", "invalidCredentials", !0, !1, Vo.Boolean, () => !1), this.attr("InvalidName", "invalidNameAttr", "invalidName", !0, !1, Vo.Boolean, () => !1), this.attr("InvalidPhotoURL", "invalidPhotoURLAttr", "invalidPhotoURL", !0, !1, Vo.Boolean, () => !1)].concat(super.attributesToDeclare());
        }
    };
    Lf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Lf);
    let Of = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Success", "successAttr", "success", !0, !1, Vo.Boolean, () => Ko(Vo.Boolean)), this.attr("UpdateUserFailureReason", "updateUserFailureReasonAttr", "updateUserFailureReason", !0, !1, Vo.Record, () => Yo.getData(new Lf()), Lf)].concat(super.attributesToDeclare());
        }
    };
    Of = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Of);
    let _f = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Email", "emailAttr", "email", !0, !1, Vo.Email, () => Ko(Vo.Email)), this.attr("Name", "nameAttr", "name", !0, !1, Vo.Text, () => Ko(Vo.Text)), this.attr("PhotoURL", "photoURLAttr", "photoURL", !0, !1, Vo.Text, () => Ko(Vo.Text))].concat(super.attributesToDeclare());
        }
    };
    _f = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], _f);
    let Mf = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("InvalidCredentials", "invalidCredentialsAttr", "invalidCredentials", !0, !1, Vo.Boolean, () => !1), this.attr("TooManyFailedLoginAttempts", "tooManyFailedLoginAttemptsAttr", "tooManyFailedLoginAttempts", !0, !1, Vo.Boolean, () => !1)].concat(super.attributesToDeclare());
        }
    };
    Mf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Mf);
    let Uf = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Success", "successAttr", "success", !0, !1, Vo.Boolean, () => Ko(Vo.Boolean)), this.attr("UserId", "userIdAttr", "userId", !0, !1, Vo.Text, () => Ko(Vo.Text)), this.attr("UserLoginFailureReason", "userLoginFailureReasonAttr", "userLoginFailureReason", !0, !1, Vo.Record, () => Yo.getData(new Mf()), Mf), this.attr("retryAfterSeconds", "retryAfterSecondsAttr", "retryAfterSeconds", !0, !1, Vo.Integer, () => Ko(Vo.Integer))].concat(super.attributesToDeclare());
        }
    };
    Uf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Uf);
    let Ff = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("InvalidEmail", "invalidEmailAttr", "invalidEmail", !0, !1, Vo.Boolean, () => !1), this.attr("InvalidName", "invalidNameAttr", "invalidName", !0, !1, Vo.Boolean, () => !1), this.attr("UsernameAlreadyExists", "usernameAlreadyExistsAttr", "usernameAlreadyExists", !0, !1, Vo.Boolean, () => !1), this.attr("UserAlreadyRegistered", "userAlreadyRegisteredAttr", "userAlreadyRegistered", !0, !1, Vo.Boolean, () => !1)].concat(super.attributesToDeclare());
        }
    };
    Ff = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Ff);
    let $f = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Success", "successAttr", "success", !0, !1, Vo.Boolean, () => Ko(Vo.Boolean)), this.attr("StartUserRegistrationFailureReason", "startUserRegistrationFailureReasonAttr", "startUserRegistrationFailureReason", !0, !1, Vo.Record, () => Yo.getData(new Ff()), Ff), this.attr("TemporaryPassword", "temporaryPasswordAttr", "temporaryPassword", !0, !1, Vo.Text, () => Ko(Vo.Text)), this.attr("UserId", "userIdAttr", "userId", !0, !1, Vo.Text, () => Ko(Vo.Text)), this.attr("VerificationCode", "verificationCodeAttr", "verificationCode", !0, !1, Vo.Text, () => Ko(Vo.Text))].concat(super.attributesToDeclare());
        }
    };
    $f = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], $f);
    let Pf = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Name", "nameAttr", "name", !0, !1, Vo.Text, () => Ko(Vo.Text)), this.attr("PhotoURL", "photoURLAttr", "photoURL", !0, !1, Vo.Text, () => Ko(Vo.Text))].concat(super.attributesToDeclare());
        }
    };
    Pf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Pf);
    let Vf = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("HasRole", "hasRoleOut", "hasRole", !0, !1, Vo.Boolean, () => Ko(Vo.Boolean))].concat(super.attributesToDeclare());
        }
    };
    Vf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Vf);
    let Bf = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("PasswordComplexityPolicyFailed", "passwordComplexityPolicyFailedAttr", "passwordComplexityPolicyFailed", !0, !1, Vo.Boolean, () => !1), this.attr("InvalidVerificationCode", "invalidVerificationCodeAttr", "invalidVerificationCode", !0, !1, Vo.Boolean, () => !1), this.attr("InvalidEmail", "invalidEmailAttr", "invalidEmail", !0, !1, Vo.Boolean, () => !1)].concat(super.attributesToDeclare());
        }
    };
    Bf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], Bf);
    let kf = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Success", "successAttr", "success", !0, !1, Vo.Boolean, () => Ko(Vo.Boolean)), this.attr("FinishResetPasswordFailureReason", "finishResetPasswordFailureReasonAttr", "finishResetPasswordFailureReason", !0, !1, Vo.Record, () => Yo.getData(new Bf()), Bf)].concat(super.attributesToDeclare());
        }
    };
    kf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], kf);
    let zf = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Success", "successAttr", "success", !0, !1, Vo.Boolean, () => Ko(Vo.Boolean)), this.attr("VerificationCode", "verificationCodeAttr", "verificationCode", !0, !1, Vo.Text, () => Ko(Vo.Text))].concat(super.attributesToDeclare());
        }
    };
    var Hf;
    zf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], zf);
    let jf = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("FileName", "fileNameAttr", "FileName", !1, !1, Vo.Text, () => Ko(Vo.Text)), this.attr("FileContent", "fileContentAttr", "FileContent", !1, !1, Vo.BinaryData, () => Ko(Vo.BinaryData)), this.attr("MimeType", "mimeTypeAttr", "MimeType", !1, !1, Vo.Text, () => Ko(Vo.Text))].concat(super.attributesToDeclare());
        }
    };
    jf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], jf);
    let qf = Hf = class extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Attachment", "attachmentAttr", "Attachment", !1, !1, Vo.Record, () => Yo.getData(new jf()), jf)].concat(el.attributesToDeclare());
        }
    };
    qf._isAnonymousRecord = !0, qf.fromStructure = function(e) {
        return new Hf(new Hf.RecordClass({
            attachmentAttr: Yo.getData(e)
        }));
    }, qf = Hf = y([e => {
        const t = e;
        void 0 !== t.init && t.init();
    }], qf);
    class Gf extends rl {
        constructor(e) {
            super(e);
        }
    }
    Gf.itemType = jf;
    class Wf extends rl {
        constructor(e) {
            super(e);
        }
    }
    Wf.itemType = qf;
    var Kf = _exports.SystemStructures = Object.freeze({
        __proto__: null,
        AttachmentList: Gf,
        get AttachmentRec() {
            return jf;
        },
        get AttachmentRecord() {
            return qf;
        },
        AttachmentRecordList: Wf,
        get ChangePasswordFailureReasonRec() {
            return Nf;
        },
        get ChangePasswordResultRec() {
            return Sf;
        },
        get FinishResetPasswordFailureReasonRec() {
            return Bf;
        },
        get FinishResetPasswordResultRec() {
            return kf;
        },
        get FinishUserRegistrationFailureReasonRec() {
            return Df;
        },
        get FinishUserRegistrationResultRec() {
            return xf;
        },
        get HasRoleResultRec() {
            return Vf;
        },
        get PasswordComplexityPolicyRec() {
            return Rf;
        },
        get PasswordValidationResultRec() {
            return Cf;
        },
        get StartResetPasswordResultRec() {
            return zf;
        },
        get StartUserRegistrationFailureReasonRec() {
            return Ff;
        },
        get StartUserRegistrationResultRec() {
            return $f;
        },
        get UpdateUserFailureReasonRec() {
            return Lf;
        },
        get UpdateUserResultRec() {
            return Of;
        },
        get UserInfoRec() {
            return _f;
        },
        get UserLoginFailureReasonRec() {
            return Mf;
        },
        get UserLoginResultRec() {
            return Uf;
        },
        get UserUpdateInfoRec() {
            return Pf;
        }
    });
    const Jf = "data-os-finished",
        Yf = "ScriptsManager",
        Xf = new Map();
    let Qf = !1,
        Zf = null;

    function em(e) {
        return e.replace(/.*\//, "").replace(/(.*)__.*/, "$1");
    }

    function tm(e, t) {
        const n = em(e),
            r = Si(n, void 0, t);
        null == r || r.setAttribute("code.function", n), null == r || r.setAttribute("outsystems.function.type", "REQUIRED_SCRIPT");
        const i = null == t ? void 0 : t.getContext().attributes["outsystems.function.key"];
        i && (null == r || r.setAttribute("outsystems.function.owner.key", i));
        const s = null == t ? void 0 : t.getContext().attributes["code.function"];
        return s && (null == r || r.setAttribute("outsystems.function.owner.name", s)), r;
    }

    function nm(e) {
        let {
            parentSpan: t,
            dom: n = document
        } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        rm("Adding script", e),
            function() {
                if (Qf) return;
                Qf = !0, Object.defineProperty(define, "amd", {
                    get: im.bind(this, define.amd),
                    configurable: !0
                });
            }();
        const r = Xf.get(e);
        if (r) return rm("Script already added", e), r.promise;
        const i = tm(e, t),
            s = n.createElement("script");
        s.async = !1, s.setAttribute("src", e), s.setAttribute(Jf, "false");
        const a = new Promise((t, r) => {
            const a = () => {
                s.setAttribute(Jf, "true"), null == i || i.end();
            };
            s.onerror = s.onabort = t => {
                a(), r(`Error adding script '${e}' to document '${n.baseURI}'`);
            }, s.onload = n => {
                rm("Script added", e), a(), t(n);
            };
        });
        return (null == Zf ? void 0 : Zf.domElement.parentNode) ? Zf.domElement.parentNode.insertBefore(s, Zf.domElement.nextSibling) : n.head.appendChild(s), null == i || i.activate(), Xf.set(e, {
            promise: a,
            domElement: s
        }), Zf = Xf.get(e), a;
    }

    function rm(e, t) {
        const n = an(document.baseURI);
        fi(Yf, `${e} '${t}' : document '${n}'`);
    }

    function im(e) {
        const t = document.currentScript;
        if (!(null == t ? void 0 : t.hasAttribute(Jf))) return e;
    }
    var sm = _exports.ScriptsManager = Object.freeze({
        __proto__: null,
        addScript: nm,
        clearScripts: function() {
            Xf.clear(), Zf = null;
        },
        createScriptSpan: tm,
        getScriptName: em,
        scheduleCustomJsLoading: function(e, t) {
            let {
                parentSpan: n,
                dom: r = document
            } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            return Promise.all(e.map(e => nm(e, {
                parentSpan: n,
                dom: r
            }).catch(t)));
        }
    });
    const am = new Il("DuplicatedList", "duplicatedListOut"),
        om = new Il("FilteredList", "filteredListOut"),
        lm = new Il("DistinctList", "distinctListOut"),
        um = new El("ExternalLoginURL", "externalLoginURLOut"),
        cm = new Il("UserLoginResult", "userLoginResultOut"),
        dm = new El("ExternalLogoutURL", "externalLogoutURLOut"),
        hm = new Il("PasswordComplexityPolicy", "passwordComplexityPolicyOut"),
        gm = new Il("PasswordValidationResult", "passwordValidationResultOut");
    new Il("ResetPasswordResult", "resetPasswordResultOut");
    const pm = new El("IsExternalUser", "isExternalUserOut"),
        fm = new Il("RegistrationResult", "registrationResultOut"),
        mm = new Il("ChangePasswordResult", "changePasswordResultOut");
    new Il("UpdateUserResult", "updateUserResultOut");
    const vm = new Il("UserInfo", "userInfoOut"),
        ym = new Il("FinishResetPasswordResult", "finishResetPasswordResultOut");
    class bm {
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

    function Tm(e, t, n) {
        if (t.isBeingIterated(e)) throw new Error("List is being iterated: " + n + " is not allowed");
    }

    function wm(e, t, n, r) {
        Tm(e, t, n);
        try {
            return t.registerIterationStart(e), r();
        } finally {
            t.registerIterationEnd(e);
        }
    }

    function Em(e) {
        return e ? e.iterationContext : new bm();
    }
    class Im extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Result", "resultOut", "resultOut", !0, !0, Vo.Boolean, () => {})].concat(super.attributesToDeclare());
        }
    }
    Im._constructor = void Im.init();
    class Am extends el {
        constructor(e, t) {
            super(e, t);
        }
        static attributesToDeclare() {
            return [this.attr("Position", "positionOut", "positionOut", !0, !0, Vo.Integer, () => {})].concat(super.attributesToDeclare());
        }
    }

    function Nm(t) {
        const n = ut(t),
            r = an(t.message);
        switch (yi("Login SystemAction", r, t.errorCode, t, _loggerJs.Visibility.Internal), t.errorCode) {
            case "OS-CLRT-40109":
                return new at.InvalidLoginException("Identity provider configurations missing.", n);
            case "OS-ID-BIZ-40021":
                return new at.InvalidLoginException("Error retrieving token from identity provider.", n);
            default:
                return new at.InvalidLoginException("Login Failed.", n);
        }
    }

    function Sm(e, t) {
        const n = e instanceof Error ? e.message : e;
        Li({
            category: "SystemAction",
            clientMessage: `Error in ${t}: ${"string" == typeof n ? n : "Unknown error"}`,
            internalMessage: `Error in ${t}`,
            errorCode: "OS-CLRT-00000",
            errorObj: e instanceof Error ? e : void 0
        });
    }

    function Dm(t, n, r) {
        const i = Si(t, _loggerJs.Visibility.External);
        null == i || i.setAttribute("code.function", t), null == i || i.setAttribute("outsystems.function.key", n), null == i || i.setAttribute("outsystems.function.owner.name", "(System)"), null == i || i.setAttribute("outsystems.function.owner.key", "478870b9-2d60-4f73-9eb3-7cd8b994a737"), null == i || i.setAttribute("outsystems.function.type", "CLIENT_SYSTEM_ACTION");
        try {
            return r(i);
        } finally {
            null == i || i.end();
        }
    }
    Am._constructor = void Am.init();
    var Rm = _exports.SystemActions = Object.freeze({
        __proto__: null,
        changePassword: function(e, t, n, r) {
            return b(this, arguments, void 0, function(e, t, n, r) {
                var _this9 = this;
                let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Kr;
                return function*() {
                    return Dm("ChangePassword", "b17b5077-e564-4145-b640-9fcb359cbb07", () => b(_this9, void 0, void 0, function*() {
                        const r = new(mm.getType(Sf))();
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
                let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : qr;
                return function*() {
                    return Dm("FinishResetPassword", "4c9a2d55-1e48-4a73-b6dd-197773173c84", () => b(_this10, void 0, void 0, function*() {
                        const r = new(ym.getType(kf))();
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
                let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Wr;
                let s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : kr;
                return function*() {
                    return Dm("FinishUserRegistration", "44a8850b-2e2d-4f19-9ea4-e5f40a050b5b", () => b(_this11, void 0, void 0, function*() {
                        const r = new(fm.getType(xf))();
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
                let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Ur;
                let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : pn.resolve(fn.AuthConfigsManager);
                return function*() {
                    return Dm("GetExternalLoginURL", "da6adf2c-ff63-4d63-a90e-a58819b503eb", () => b(_this12, void 0, void 0, function*() {
                        const n = "" === e ? void 0 : e,
                            s = new(um.getType(Vo.Text))(),
                            [a] = i.readAuthConfigs(t);
                        if (!a) {
                            const e = new Error(`The given identity provider '${t}' does not exist.`);
                            throw Sm(e, "getExternalLoginURL"), e;
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
                let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Vr;
                return function*() {
                    return Dm("GetExternalLogoutURL", "c5bd52b6-817c-4268-9d9b-7d2bfe7228fe", () => b(_this13, void 0, void 0, function*() {
                        const t = "" === e ? void 0 : e,
                            r = new(dm.getType(Vo.Text))();
                        return r.externalLogoutURLOut = yield n({
                            callbackUrl: t
                        }), r;
                    }));
                }();
            });
        },
        getPasswordComplexityPolicy: function(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Hr;
            return Dm("GetPasswordComplexityPolicy", "dc6941b3-7f13-4266-92a7-afc438918f3f", () => {
                const e = new(hm.getType(Rf))(),
                    n = t();
                return e.passwordComplexityPolicyOut.minimumLengthAttr = n.minimumLength, e.passwordComplexityPolicyOut.lowerCaseLetterRequiredAttr = n.lowerCaseLetterRequired, e.passwordComplexityPolicyOut.upperCaseLetterRequiredAttr = n.upperCaseLetterRequired, e.passwordComplexityPolicyOut.numberRequiredAttr = n.numberRequired, e.passwordComplexityPolicyOut.specialCharacterRequiredAttr = n.specialCharacterRequired, e;
            });
        },
        getUserProfile: function(e) {
            return b(this, arguments, void 0, function(e) {
                var _this14 = this;
                let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Jr;
                return function*() {
                    return Dm("GetUserProfile", "a4d7f4ef-399a-4294-8ab4-cf1437699fe3", () => b(_this14, void 0, void 0, function*() {
                        const e = new(vm.getType(_f))(),
                            n = yield t();
                        return e.userInfoOut.emailAttr = n.username, e.userInfoOut.nameAttr = n.name, e.userInfoOut.photoURLAttr = n.pictureUrl, e;
                    }));
                }();
            });
        },
        isExternalUser: function(e) {
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Gr;
            return Dm("IsExternalUser", "5365bc0e-70f6-4e7f-90bf-6c6e12da81bb", () => {
                const e = new(pm.getType(Vo.Boolean))();
                return e.isExternalUserOut = t(), e;
            });
        },
        listAll: function(e, t, n) {
            return Dm("ListAll", "22f2c626-25d5-4457-bbe7-94261470862e", () => {
                try {
                    const r = Em(n);
                    return wm(e, r, "all", () => {
                        const n = new Im();
                        return n.resultOut = e.all(t), n;
                    });
                } catch (e) {
                    throw Sm(e, "listAll"), e;
                }
            });
        },
        listAny: function(e, t, n) {
            return Dm("ListAny", "d562e8a9-e680-48d3-8274-1e7e5437e4f8", () => {
                try {
                    const r = Em(n);
                    return wm(e, r, "any", () => {
                        const n = new Im();
                        return n.resultOut = e.any(t), n;
                    });
                } catch (e) {
                    throw Sm(e, "listAny"), e;
                }
            });
        },
        listAppend: function(e, t, n) {
            return Dm("ListAppend", "aa5b021e-e937-4b80-a2b3-c95b4339a11d", () => {
                try {
                    const r = Em(n);
                    Tm(e, r, "append"), e.append(t);
                } catch (e) {
                    throw Sm(e, "listAppend"), e;
                }
            });
        },
        listAppendAll: function(e, t, n) {
            return Dm("ListAppendAll", "cfed0293-97ed-42f7-8d5a-5a2582ecb1da", () => {
                try {
                    const r = Em(n);
                    Tm(e, r, "appendAll"), e.appendAll(t);
                } catch (e) {
                    throw Sm(e, "listAppendAll"), e;
                }
            });
        },
        listClear: function(e, t) {
            return Dm("ListClear", "c534e5bd-7032-4d4c-97e1-abbf1dee3fbf", () => {
                try {
                    const n = Em(t);
                    Tm(e, n, "clear"), e.clear(), n.setCurrentRowNumber(e, 0);
                } catch (e) {
                    throw Sm(e, "listClear"), e;
                }
            });
        },
        listDistinct: function(e, t) {
            return Dm("ListDistinct", "b54c6849-3ce4-455a-af15-ad7a37c9899f", () => {
                try {
                    const n = Em(t);
                    return wm(e, n, "distinct", () => {
                        const t = new(lm.getType(e.constructor))();
                        return t.distinctListOut = e.distinct(), t;
                    });
                } catch (e) {
                    throw Sm(e, "listDistinct"), e;
                }
            });
        },
        listDuplicate: function(e, t) {
            return Dm("ListDuplicate", "dbe15950-87da-4517-88b4-14c83bbe7d94", () => {
                try {
                    const n = Em(t);
                    Tm(e, n, "duplicate");
                    const r = new(am.getType(e.constructor))();
                    return r.duplicatedListOut = e.clone(), r;
                } catch (e) {
                    throw Sm(e, "listDuplicate"), e;
                }
            });
        },
        listFilter: function(e, t, n) {
            return Dm("ListFilter", "5137c152-4d59-48f6-b86e-b6b8e7b1e160", () => {
                try {
                    const r = Em(n);
                    return wm(e, r, "filter", () => {
                        const n = new(om.getType(e.constructor))();
                        return n.filteredListOut = e.filter(t), n;
                    });
                } catch (e) {
                    throw Sm(e, "listFilter"), e;
                }
            });
        },
        listIndexOf: function(e, t, n) {
            return Dm("ListIndexOf", "763a5d96-a42e-49b6-8129-b46525912667", () => {
                try {
                    const r = Em(n);
                    return wm(e, r, "indexOf", () => {
                        const n = new Am();
                        return n.positionOut = e.indexOf(t), n;
                    });
                } catch (e) {
                    throw Sm(e, "listIndexOf"), e;
                }
            });
        },
        listInsert: function(e, t, n, r) {
            return Dm("ListInsert", "6c6663d0-5b99-492d-80a5-284def1ceb8c", () => {
                try {
                    const i = Em(r);
                    Tm(e, i, "insert"), e.insert(n, t);
                    const s = i.getCurrentRowNumber(e);
                    e.length > 1 && n <= s && i.setCurrentRowNumber(e, s + 1);
                } catch (e) {
                    throw Sm(e, "listInsert"), e;
                }
            });
        },
        listRemove: function(e, t, n) {
            return Dm("ListRemove", "9a0ebe10-cdee-4774-9179-e3c439bb0d3a", () => {
                try {
                    const r = Em(n);
                    Tm(e, r, "remove");
                    const i = 1 === e.length;
                    let s;
                    i && (s = e.getItem(0)), e.remove(t), i && (e.emptyListItem = s);
                    const a = r.getCurrentRowNumber(e);
                    t < a ? r.setCurrentRowNumber(e, a - 1) : t === e.length && r.setCurrentRowNumber(e, Math.max(0, e.length - 1));
                } catch (e) {
                    throw Sm(e, "listRemove"), e;
                }
            });
        },
        listSort: function(e, t, n, r) {
            return Dm("ListSort", "c7db4ad0-51cc-44e5-aa36-50546face388", () => {
                try {
                    const i = Em(r);
                    return wm(e, i, "sort", () => {
                        e.sort(t, n);
                    });
                } catch (e) {
                    throw Sm(e, "listSort"), e;
                }
            });
        },
        logMessage: function(t, n, r) {
            return Dm("LogMessage", "8c126211-5b78-442b-8a4d-fc2f72d10ef2", () => {
                mi(n, t, _loggerJs.Visibility.Client);
            });
        },
        login: function(e, t, n, r) {
            return b(this, arguments, void 0, function(e, t, n, r) {
                var _this15 = this;
                let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : $r;
                return function*() {
                    return Dm("Login", "477c9f29-36c5-42a9-b910-3e5d70c7427e", () => b(_this15, void 0, void 0, function*() {
                        const r = new(cm.getType(Uf))();
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
                                if (t.name !== _authJs.FailureReasons.TooManyFailedAttempts) throw Nm(t);
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
                let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Pr;
                return function*() {
                    return Dm("Logout", "41ac3c1a-dffd-4b4f-acc0-fa439a975601", () => n({
                        callbackUrl: "string" == typeof e ? e : ""
                    }));
                }();
            });
        },
        requireScript: function(e, t) {
            return Dm("RequireScript", "388d4655-dd1c-4c5c-8d46-f420d0fe02a1", t => {
                try {
                    return nm(Sr.getVersionedUrl(e), {
                        parentSpan: t
                    });
                } catch (e) {
                    throw Sm(e, "requireScript"), e;
                }
            });
        },
        setCurrentLocale: function(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : pn;
            return Dm("SetCurrentLocale", "f2708145-60c0-49dc-9a1a-8b0f1fae5dce", () => {
                try {
                    const t = n.resolve(fn.LocaleService);
                    if (!t) {
                        const e = new Error("Undefined locale service: can't set current locale.");
                        throw Sm(e, "setCurrentLocale"), e;
                    }
                    t.setCurrentLocale(e);
                } catch (e) {
                    throw Sm(e, "setCurrentLocale"), e;
                }
            });
        },
        validatePasswordComplexity: function(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : jr;
            return Dm("ValidatePasswordComplexity", "e11739ec-bce8-4f6c-a952-886e102ecac5", () => {
                const t = new(gm.getType(Cf))(),
                    r = n({
                        password: e
                    });
                return t.passwordValidationResultOut.isValidAttr = r.isValid, t.passwordValidationResultOut.missingMinimumLengthAttr = r.missingMinimumLength, t.passwordValidationResultOut.missingUpperCaseLetterAttr = r.missingUpperCaseLetter, t.passwordValidationResultOut.missingLowerCaseLetterAttr = r.missingLowerCaseLetter, t.passwordValidationResultOut.missingNumberAttr = r.missingNumber, t.passwordValidationResultOut.missingSpecialCharacterAttr = r.missingSpecialCharacter, t;
            });
        }
    });
    var Cm,
        xm = _exports.StringUtils = Object.freeze({
            __proto__: null,
            StringUtils: class {
                static safeParseInt(e) {
                    let t = e;
                    return e && !isNaN(Number(e)) && (t = parseInt(e, 10)), t;
                }
            }
        }),
        Lm = _exports.MappingWithDefaultService = Object.freeze({
            __proto__: null
        });
    ! function(e) {
        e[e.Normal = 0] = "Normal", e[e.AtFunctionReturn = 1] = "AtFunctionReturn", e[e.BetweenAssignments = 2] = "BetweenAssignments";
    }(Cm || (Cm = {}));
    const Om = "ccid",
        _m = "dbg-stop",
        Mm = "dbg-bkp";
    var Um, Fm;
    ! function(e) {
        e[e.StepOver = 0] = "StepOver", e[e.StepInto = 1] = "StepInto", e[e.StepOut = 2] = "StepOut", e[e.Continue = 3] = "Continue", e[e.ContinueToHere = 4] = "ContinueToHere", e[e.None = 5] = "None";
    }(Um || (Um = {})),
    function(e) {
        e[e.Unprepared = 0] = "Unprepared", e[e.WaitingForClient = 1] = "WaitingForClient", e[e.Prepared = 2] = "Prepared";
    }(Fm || (Fm = {}));
    class $m {
        constructor() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            this.moduleKey = e, this.objectKey = t, this.compoundKey = n, this.debuggerHash = r;
        }
        init(e) {
            if (!e) return;
            const t = e.split($m.SeparatorChar);
            this.moduleKey = t[0], this.objectKey = t[1], this.compoundKey = t.length > 2 && t[2] ? t[2] : null, this.debuggerHash = t.length > 3 && t[3] ? t[3] : null;
        }
        static parse(e) {
            if (!e) return null;
            try {
                const t = new $m();
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
            return e ? this.moduleKey + $m.SeparatorChar + (this.objectKey || "") + $m.SeparatorChar + (this.compoundKey || "") + $m.SeparatorChar + (this.debuggerHash || "") : this.moduleKey + $m.SeparatorChar + (null !== (t = this.objectKey) && void 0 !== t ? t : "");
        }
    }
    $m.SeparatorChar = ":";
    class Pm {
        constructor() {
            let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Um.None;
            let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
            this._commandType = e, this._stackLevel = t;
        }
        resetCommandState() {
            this._commandType = Um.None, this._stackLevel = -1;
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
    class Vm {
        constructor(e, t, n, r, i) {
            this.elementKey = e, this.moduleName = t, this.elementName = n, this.elementType = r, this.varBag = i, this.currentBreakpoint = null, this.previousBreakpoint = null, this.breakpointType = null, this.extraInfo = null, this.functionLeft = "";
        }
        refreshLocalState(e, t, n) {
            this.previousBreakpoint = this.currentBreakpoint, this.currentBreakpoint = e, this.breakpointType = t, this.extraInfo = n;
        }
    }
    class Bm {
        constructor() {
            this.callStack = new Array(), this._command = new Pm(), this._continueToHereBreakpoint = void 0, this._stopImmediately = !1;
        }
        pushCallOnStack(e, t, n, r, i) {
            this.callStack.push(new Vm(e, t, n, r, i));
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
            km("The received stack level is not valid. Received '" + e + "', current thread stack length '" + this.callStack.length + "'");
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
                    breakpointType: null !== (t = e.breakpointType) && void 0 !== t ? t : Cm.Normal,
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

    function km(e, t) {
        fi("Debugger", e, t);
    }
    const zm = /^([0-9]+)$/,
        Hm = /\[[^\]]*[^0-9\]]+[^\]]*\]/;
    class jm {
        constructor() {
            this.isInSession = !1, this.breakpoints = new Map(), this.callContexts = new Map(), this.initializationStatus = Fm.Unprepared, this._pauseOnAllExceptions = !1, this.exceptionsMap = new Map(), this.pausedOnAnException = !1, this.allowedModules = new Map();
        }
        get BreakpointType() {
            return Cm;
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
            if (this.isInSession) return void km("Debugger is already in session");
            this.pendingInitializationHandler && (this.initializationStatus = Fm.Prepared, this.pendingInitializationHandler(), this.pendingInitializationHandler = null), this.isInSession = !0;
            const e = pn.resolve(fn.DebuggerHttpClient);
            e && pn.register(fn.HttpClient, () => e);
        }
        endSession() {
            if (!this.isInSession) return void km("Can't end an nonexisting session");
            this.isInSession = !1;
            const e = pn.resolve(fn.NonDebuggerHttpClient);
            e && pn.register(fn.HttpClient, () => e);
        }
        addBreakpoint(e) {
            null !== $m.parse(e) ? this.breakpoints.get(e) ? km(`Breakpoint with id '${e}' already registered`) : this.breakpoints.set(e, !0) : km(`Cannot convert '${e}' to a BreakpointId`);
        }
        addBreakpoints(e) {
            e.forEach(e => this.addBreakpoint(e));
        }
        allowBreakpointsFromModule(e) {
            this.allowedModules.get(e) ? km(`Application with key '${e}' is already allowed`) : this.allowedModules.set(e, !0);
        }
        removeBreakpoint(e) {
            null !== $m.parse(e) ? this.breakpoints.delete(e) || km(`Breakpoint with id '${e}'  isn't registered`) : km(`Cannot convert '${e}' to a BreakpointId`);
        }
        clearBreakpoints() {
            this.breakpoints.clear();
        }
        push(e, t, n, r, i, s) {
            if (!this.isInSession) return;
            const a = $m.parse(e);
            if (!a) return void km(`Error when parsing breakpointId '${e}'`);
            let o = this.callContexts.get(i);
            o || (o = new Bm(), this.callContexts.set(i, o)), o.pushCallOnStack(a, t, n, r, s);
        }
        pop(e, t) {
            if (!this.isInSession) return;
            const n = $m.parse(e);
            if (!n) return void km(`Error when parsing breakpointId '${e}'`);
            const r = this.callContexts.get(t);
            if (!r) return void km(`There is no action to end to callContextId '${t.toString()}'`);
            const i = r.peekLastCallOnStack();
            (null == i ? void 0 : i.elementKey.equals(n)) ? (r.popCallOnStack(), r.stackLevel <= 0 && (this.callContexts.delete(t), this.exceptionsMap.delete(t))) : km(`Action to end didn't match to current running action. Running action key: '${null == i ? void 0 : i.elementKey.toString()}', tried to end: '${n.toString()}'`);
        }
        stepInto(e) {
            this.fillCommandByCallContextId(e, Um.StepInto);
        }
        stepOver(e) {
            this.fillCommandByCallContextId(e, Um.StepOver);
        }
        stepOut(e) {
            this.fillCommandByCallContextId(e, Um.StepOut);
        }
        continue (e) {
            this.fillCommandByCallContextId(e, Um.Continue);
        }
        continueToHere(e, t) {
            const n = $m.parse(e);
            if (!n) return void km(`Error when parsing breakpointId '${e}'`);
            this.fillCommandByCallContextId(t, Um.ContinueToHere);
            const r = this.callContexts.get(t);
            r && (r.continueToBreakpoint = n);
        }
        pauseOnAllExceptions(e) {
            this._pauseOnAllExceptions = e;
        }
        fillCommandByCallContextId(e, t) {
            if (!this.isInSession) return void km("Cannot preform debug actions out of a session context");
            const n = this.callContexts.get(e);
            n ? (n.command.commandType = t, n.command.stackLevel = n.stackLevel) : km(`No match for callContextId '${e}'`);
        }
        handleFunctionCall(e, t, n) {
            var r;
            const i = e();
            if (!this.isInSession) return i;
            const s = this.callContexts.get(n);
            if (!s) return km(`There is no callContext registered with Id '${n}'`), i;
            const a = s.getCallOnStack(s.stackLevel - 1),
                o = null !== (r = null == a ? void 0 : a.currentBreakpoint) && void 0 !== r ? r : null == a ? void 0 : a.elementKey;
            return o && this.handleBreakpoint(o.toString(!0), n, Cm.AtFunctionReturn, qm.to(i, null == a ? void 0 : a.varBag.callContext, null, null, t)), i;
        }
        handleBreakpoint(e, t) {
            let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Cm.Normal;
            let r = arguments.length > 3 ? arguments[3] : undefined;
            if (!this.isInSession) return !0;
            const i = $m.parse(e);
            if (!i) return km(`Error when parsing breakpointId '${e}'`), !0;
            const s = this.callContexts.get(t);
            if (!s) return km(`Trying to handle breakpoint with id '${e}', \n                but there is no callContext registered with Id '${t}'`), !0;
            if (s.refreshLastCallOnStack(i, n, r), !this.allowedModules.get(i.moduleKey)) return fi("Debugger", `Skipping breakpoint '${e}' because breakpoints from app with key '${i.moduleKey}' are to be ignored.`), !0;
            if (s.stopImmediately || this.breakpoints.get(e) && s.command.commandType !== Um.ContinueToHere && n === Cm.Normal) return s.stopImmediately = !1, this.resetStateAndCallDebugger(s, t), !0;
            switch (s.command.commandType) {
                case Um.StepInto:
                    this.resetStateAndCallDebugger(s, t);
                    break;
                case Um.StepOut:
                    s.stackLevel < s.command.stackLevel && this.resetStateAndCallDebugger(s, t);
                    break;
                case Um.StepOver:
                    s.stackLevel <= s.command.stackLevel && n === Cm.Normal && this.resetStateAndCallDebugger(s, t);
                    break;
                case Um.ContinueToHere:
                    i.equals(s.continueToBreakpoint) && n === Cm.Normal && (s.continueToBreakpoint = void 0, this.resetStateAndCallDebugger(s, t));
            }
            return !0;
        }
        resetStateAndCallDebugger(e, t) {
            e.command.resetCommandState(), this.callDebugger(t);
        }
        handleException(t, n) {
            if (!this.isInSession) return;
            if (ht(t)) return;
            const r = this.callContexts.get(n),
                i = lt(t);
            if (!r) return void km(`Trying to handle Exception with message '${i}', but there is no callContext registered with Id '${n}'`, _loggerJs.Visibility.Client);
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
            if (void 0 !== t) return lt(t);
            km(`There is no Exception associated to callContext with Id '${e}'`);
        }
        getThreadState(e) {
            if (!this.isInSession) return void km("Cannot perform debug actions out of a session context");
            const t = this.callContexts.get(e);
            if (t) return t;
            km(`There is no callContext registered with Id '${e}'`);
        }
        getThreadStack(e) {
            const t = this.getThreadState(e);
            if (t) return t.getThreadStack();
        }
        parse(e) {
            return $m.parse(e);
        }
        initialize(e) {
            switch (this.initializationStatus) {
                case Fm.WaitingForClient:
                    return Promise.reject("Debugger already waiting for client initialization");
                case Fm.Prepared:
                    return Promise.reject("Debugger already initialized");
            }
            return void 0 === e && (e = !!er("_waitForClient")), pn.register(fn.Debugger, () => this), new Promise((t, n) => {
                e && !this.isInSession ? (this.initializationStatus = Fm.WaitingForClient, this.pendingInitializationHandler = t) : (this.initializationStatus = Fm.Prepared, t());
            });
        }
        registerMetaInfo(e) {
            this.metaInfoMap || (this.metaInfoMap = new Map());
            for (const t in e) e.hasOwnProperty(t) && !this.metaInfoMap.get(t) && this.metaInfoMap.set(t, e[t]);
        }
        getRuntimeExpression(e, t) {
            if (!this.metaInfoMap) return void km("MetaInfo not registered yet.");
            const n = this.metaInfoMap.get(e);
            if (n) return n;
            km(`There is no mapping defined for variable with the key '${e}', that was evaluated in the context of the action with the key '${t}'.`);
        }
        innerEvaluateVariable(e, t, n, r) {
            const i = this.getThreadState(e);
            if (!i) return;
            const s = i.getCallOnStack(t);
            if (!s) return;
            const a = this.getRuntimeExpression(r, n);
            if (!a) return void km(`Failed to get runtime variable expression. CallContextId '${e}', stackLevel '${t}'`);
            let o;
            try {
                o = a.getter(s.varBag, s.varBag.idService);
            } catch (e) {} finally {
                void 0 === o && km(`Couldn't evaluate variable with key '${r}', that was evaluated in the context of the action with key: '${n}' stackLevel: '${t}' callContextId: '${e}'.`);
            }
            return o;
        }
        splitPath(e) {
            if (!Hm.test(e)) return e ? e.split(/[.\[\]]/).filter(e => "" !== e).slice(1) : void 0;
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
            if (Hm.test(i)) return;
            const o = this.callContexts.get(e),
                l = null == o ? void 0 : o.getCallOnStack(t),
                u = this.getRuntimeExpression(r, n),
                c = this.splitPath(i);
            return qm.to(a, null == l ? void 0 : l.varBag.callContext, c, s, null == u ? void 0 : u.dataType);
        }
        getRequestHeaders(e) {
            if (!this.isInSession) return;
            const t = this.callContexts.get(e);
            if (!t) return void km(`There is no callContext registered with Id '${e}'`);
            const n = {};
            n[Om] = String(e);
            const r = t.command;
            return r && r.commandType === Um.StepInto ? n[_m] = "true" : t.continueToBreakpoint && r.commandType === Um.ContinueToHere && (n[Mm] = String(t.continueToBreakpoint)), n;
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
                if ("true" === (this.lookupCaseInsensitive(t, _m) || "").toLowerCase()) n.stopImmediately = !0;
                else if (this.lookupCaseInsensitive(t, Mm)) {
                const e = this.lookupCaseInsensitive(t, Mm);
                n.command.commandType = Um.ContinueToHere, n.continueToBreakpoint = $m.parse(e);
            } else n.command.commandType === Um.StepInto && (n.command.commandType = Um.Continue);
        }
        getThreadStartName(e) {
            var t;
            return null === (t = this.getThreadState(e)) || void 0 === t ? void 0 : t.threadStartName;
        }
        setThreadStartName(e, t) {
            if (!this.isInSession) return;
            if (!this.callContexts) return void km("No call context dictionary initialized yet");
            if (!this.callContexts.get(e)) return void km("No thread state for this context id");
            const n = this.callContexts.get(e);
            n && (n.threadStartName = t);
        }
    }
    var qm;
    ! function(e) {
        function t(e, t) {
            return void 0 === e && (e = null), {
                value: e,
                type: Vo[t]
            };
        }
        e.to = function e(n, r, i) {
            let s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
            let a = arguments.length > 4 ? arguments[4] : undefined;
            const o = Math.max(-1, (null != s ? s : 0) - 1);
            if (n instanceof el) {
                const a = n;
                let l = a.getAttributes();
                if (i && i.length > 0) {
                    const t = i[0];
                    if (i = i.slice(1), n instanceof gf) {
                        const a = n;
                        if ("HasFetchError" === t) return e(a.hasFetchErrorAttr, r, i, s, Vo.Boolean);
                        if ("IsDataFetched" === t) return e(a.isDataFetchedAttr, r, i, s, Vo.Boolean);
                    }
                    if (l = l.filter(e => e.name === t), 0 === l.length) return void km(`No attribute matching the given path '${t}'.`); {
                        const t = l[0];
                        return e(a[t.attrName], r, i, s, t.dataType);
                    }
                }
                if (0 === s) return t(null, Vo.Record);
                const u = {};
                for (const t of l) u[t.name] = e(a[t.attrName], r, i, o, t.dataType);
                if (n instanceof gf) {
                    const t = n;
                    delete u.DataFetchStatus, u.IsDataFetched = e(t.isDataFetchedAttr, r, i, s, Vo.Boolean), u.HasFetchError = e(t.hasFetchErrorAttr, r, i, s, Vo.Boolean);
                }
                return t(u, Vo.Record);
            }
            if (n instanceof tl) {
                const a = n;
                let l;
                a.constructor.getItemType && (l = a.constructor.getItemType());
                const u = r.iterationContext.getCurrentRowNumber(a);
                if (i && i.length > 0) {
                    const t = i[0];
                    if (i = i.slice(1), "CurrentRowNumber" === t) return e(u, r, i, s, Vo.Integer);
                    if ("Current" === t) return e(a.isEmpty ? a.emptyListItem : a.getItem(u), r, i, s, l);
                    if ("Empty" === t) return e(a.isEmpty, r, i, s, Vo.Boolean);
                    if ("Length" === t) return e(a.length, r, i, s, Vo.Integer); {
                        const n = zm.exec(t);
                        if (n) {
                            const t = parseInt(n[1], 10);
                            return t >= 0 && t < a.length ? e(a.getItem(t), r, i, s, l) : void km(`Index out of bounds '${t}'.`);
                        }
                        return void km(`No '${t}' attribute on Type 'List'.`);
                    }
                }
                if (0 === s) return t(null, Vo.RecordList);
                const c = {
                    CurrentRowNumber: e(u, r, i, o, Vo.Integer),
                    Current: e(a.isEmpty ? a.emptyListItem : a.getItem(u), r, i, o, l),
                    Empty: e(a.isEmpty, r, i, o, Vo.Boolean),
                    Length: e(a.length, r, i, o, Vo.Integer)
                };
                for (let t = 0; t < a.length; t++) c["[" + t + "]"] = e(a.getItem(t), r, i, o, l);
                return t(c, Vo.RecordList);
            }
            if (n instanceof cf) {
                if (0 === s) return t(null, Vo.Record);
                const a = n;
                if (i && i.length > 0) {
                    const t = i[0];
                    if (i = i.slice(1), "Id" === t) return e(a.idAttr, r, i, s, Vo.Text);
                    if (a instanceof df) {
                        if ("Valid" === t) return e(a.validAttr, r, i, s, Vo.Boolean);
                        if ("ValidationMessage" === t) return e(a.validationMessageAttr, r, i, s, Vo.Text);
                    }
                    return void km(`No attribute matching the given path '${t}'.`);
                }
                const l = {
                    Id: e(a.idAttr, r, i, o, Vo.Text)
                };
                return a instanceof df && (l.Valid = e(a.validAttr, r, i, o, Vo.Boolean), l.ValidationMessage = e(a.validationMessageAttr, r, i, o, Vo.Text)), t(l, Vo.Record);
            }
            return void 0 !== a ? i && i.length > 0 ? void km(`Cannot perform a inner evaluation to a Basic Type. Trying to evaluate '${i[0]}' for a variable of type '${Vo[a]}'.`) : function(e, n) {
                switch (n) {
                    case Vo.Integer:
                    case Vo.Text:
                    case Vo.PhoneNumber:
                    case Vo.Email:
                    case Vo.Boolean:
                        return t(e, n);
                    case Vo.LongInteger:
                    case Vo.Decimal:
                    case Vo.Currency:
                        return t(e.toString(), n);
                    case Vo.Date:
                        return t(e.toISODate(), n);
                    case Vo.DateTime:
                        return t(e.toString(), n);
                    case Vo.Time:
                        return t(e.toISOTime(), n);
                    case Vo.BinaryData:
                        return t(e.length, n);
                    case Vo.Object:
                        return t(null, n);
                    case Vo.Record:
                        return void km("Record is not a basic type");
                    case Vo.RecordList:
                        return void km("RecordList is not a basic type");
                    default:
                        return void km(`Unknown data type ${n}`);
                }
            }(n, a) : void km("Variable Type didn't match any case. " + typeof n);
        };
    }(qm || (qm = {}));
    const Gm = "6.19.3";
    Ue("client-runtime-core", Gm);
    ("undefined" != typeof window ? window : global).OutSystemsDebugger = new class extends jm {
        callDebugger(e) {
            const t = Jt(),
                n = t.callContextId;
            try {
                t.callContextId = e;
                debugger;
            } finally {
                t.callContextId = n;
            }
        }
    }();
    var Wm = _exports.DebuggerBase = Object.freeze({
            __proto__: null,
            BreakpointId: $m,
            get CommandType() {
                return Um;
            },
            DebugCommand: Pm,
            DebuggerBase: jm,
            get DebuggerDataConverter() {
                return qm;
            },
            get InitializationStatus() {
                return Fm;
            },
            LocalState: Vm,
            ThreadState: Bm,
            Version: Gm
        }),
        Km = _exports.ClientVariables = Object.freeze({
            __proto__: null
        }),
        Jm = _exports.DebuggerAPI = Object.freeze({
            __proto__: null
        });
    Se();
    const Ym = _exports.Version = "6.19.3";
    Ue("client-runtime-core", Ym);
});