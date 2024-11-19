(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("@outsystems/auth-js", ["exports", "@outsystems/communication-js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@outsystems/communication-js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.communicationJs);
    global.outsystemsAuthJs = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _communicationJs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Version = _exports.FailureReasons = _exports.ExternalAuth = _exports.BuiltinAuth = _exports.AuthType = _exports.AuthFactory = _exports.AuthErrorCode = _exports.AuthError = void 0;
  var i = function (e, t) {
    return i = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }, i(e, t);
  };
  function o(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    function n() {
      this.constructor = e;
    }
    i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
  }
  var s = function () {
    return s = Object.assign || function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      return e;
    }, s.apply(this, arguments);
  };
  function a(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
      var i = 0;
      for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    }
    return n;
  }
  function u(e, t, n, r) {
    var i,
      o = arguments.length,
      s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
    return o > 3 && s && Object.defineProperty(t, n, s), s;
  }
  function c(e, t) {
    return function (n, r) {
      t(n, r, e);
    };
  }
  function l(e, t) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
  }
  function h(e, t, n, r) {
    return new (n || (n = Promise))(function (i, o) {
      function s(e) {
        try {
          u(r.next(e));
        } catch (e) {
          o(e);
        }
      }
      function a(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          o(e);
        }
      }
      function u(e) {
        var t;
        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(s, a);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function f(e, t) {
    var n,
      r,
      i,
      o,
      s = {
        label: 0,
        sent: function () {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      };
    return o = {
      next: a(0),
      throw: a(1),
      return: a(2)
    }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
      return this;
    }), o;
    function a(a) {
      return function (u) {
        return function (a) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; o && (o = 0, a[0] && (s = 0)), s;) try {
            if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
            switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
              case 0:
              case 1:
                i = a;
                break;
              case 4:
                return s.label++, {
                  value: a[1],
                  done: !1
                };
              case 5:
                s.label++, r = a[1], a = [0];
                continue;
              case 7:
                a = s.ops.pop(), s.trys.pop();
                continue;
              default:
                if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                  s = 0;
                  continue;
                }
                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                  s.label = a[1];
                  break;
                }
                if (6 === a[0] && s.label < i[1]) {
                  s.label = i[1], i = a;
                  break;
                }
                if (i && s.label < i[2]) {
                  s.label = i[2], s.ops.push(a);
                  break;
                }
                i[2] && s.ops.pop(), s.trys.pop();
                continue;
            }
            a = t.call(e, s);
          } catch (e) {
            a = [6, e], r = 0;
          } finally {
            n = i = 0;
          }
          if (5 & a[0]) throw a[1];
          return {
            value: a[0] ? a[1] : void 0,
            done: !0
          };
        }([a, u]);
      };
    }
  }
  var d = Object.create ? function (e, t, n, r) {
    void 0 === r && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
      enumerable: !0,
      get: function () {
        return t[n];
      }
    }), Object.defineProperty(e, r, i);
  } : function (e, t, n, r) {
    void 0 === r && (r = n), e[r] = t[n];
  };
  function p(e, t) {
    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || d(t, e, n);
  }
  function g(e) {
    var t = "function" == typeof Symbol && Symbol.iterator,
      n = t && e[t],
      r = 0;
    if (n) return n.call(e);
    if (e && "number" == typeof e.length) return {
      next: function () {
        return e && r >= e.length && (e = void 0), {
          value: e && e[r++],
          done: !e
        };
      }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function y(e, t) {
    var n = "function" == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
      i,
      o = n.call(e),
      s = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value);
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (n = o.return) && n.call(o);
      } finally {
        if (i) throw i.error;
      }
    }
    return s;
  }
  function v() {
    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(y(arguments[t]));
    return e;
  }
  function m() {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
    var r = Array(e),
      i = 0;
    for (t = 0; t < n; t++) for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
    return r;
  }
  function w(e, t, n) {
    if (n || 2 === arguments.length) for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
    return e.concat(r || Array.prototype.slice.call(t));
  }
  function b(e) {
    return this instanceof b ? (this.v = e, this) : new b(e);
  }
  function _(e, t, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r,
      i = n.apply(e, t || []),
      o = [];
    return r = {}, s("next"), s("throw"), s("return", function (e) {
      return function (t) {
        return Promise.resolve(t).then(e, c);
      };
    }), r[Symbol.asyncIterator] = function () {
      return this;
    }, r;
    function s(e, t) {
      i[e] && (r[e] = function (t) {
        return new Promise(function (n, r) {
          o.push([e, t, n, r]) > 1 || a(e, t);
        });
      }, t && (r[e] = t(r[e])));
    }
    function a(e, t) {
      try {
        !function (e) {
          e.value instanceof b ? Promise.resolve(e.value.v).then(u, c) : l(o[0][2], e);
        }(i[e](t));
      } catch (e) {
        l(o[0][3], e);
      }
    }
    function u(e) {
      a("next", e);
    }
    function c(e) {
      a("throw", e);
    }
    function l(e, t) {
      e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
    }
  }
  function S(e) {
    var t, n;
    return t = {}, r("next"), r("throw", function (e) {
      throw e;
    }), r("return"), t[Symbol.iterator] = function () {
      return this;
    }, t;
    function r(r, i) {
      t[r] = e[r] ? function (t) {
        return (n = !n) ? {
          value: b(e[r](t)),
          done: !1
        } : i ? i(t) : t;
      } : i;
    }
  }
  function A(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t,
      n = e[Symbol.asyncIterator];
    return n ? n.call(e) : (e = g(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function () {
      return this;
    }, t);
    function r(n) {
      t[n] = e[n] && function (t) {
        return new Promise(function (r, i) {
          (function (e, t, n, r) {
            Promise.resolve(r).then(function (t) {
              e({
                value: t,
                done: n
              });
            }, t);
          })(r, i, (t = e[n](t)).done, t.value);
        });
      };
    }
  }
  function I(e, t) {
    return Object.defineProperty ? Object.defineProperty(e, "raw", {
      value: t
    }) : e.raw = t, e;
  }
  var C = Object.create ? function (e, t) {
    Object.defineProperty(e, "default", {
      enumerable: !0,
      value: t
    });
  } : function (e, t) {
    e.default = t;
  };
  function E(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && d(t, e, n);
    return C(t, e), t;
  }
  function T(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  function U(e, t, n, r) {
    if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
    if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
  }
  function k(e, t, n, r, i) {
    if ("m" === r) throw new TypeError("Private method is not writable");
    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
  }
  function P(e, t) {
    if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
    return "function" == typeof e ? t === e : e.has(t);
  }
  function O(e, t, n) {
    if (null != t) {
      if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
      var r, i;
      if (n) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        r = t[Symbol.asyncDispose];
      }
      if (void 0 === r) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        r = t[Symbol.dispose], n && (i = r);
      }
      if ("function" != typeof r) throw new TypeError("Object not disposable.");
      i && (r = function () {
        try {
          i.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      }), e.stack.push({
        value: t,
        dispose: r,
        async: n
      });
    } else n && e.stack.push({
      async: !0
    });
    return t;
  }
  var R = "function" == typeof SuppressedError ? SuppressedError : function (e, t, n) {
    var r = new Error(n);
    return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
  };
  function D(e) {
    function t(t) {
      e.error = e.hasError ? new R(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
    }
    return function n() {
      for (; e.stack.length;) {
        var r = e.stack.pop();
        try {
          var i = r.dispose && r.dispose.call(r.value);
          if (r.async) return Promise.resolve(i).then(n, function (e) {
            return t(e), n();
          });
        } catch (e) {
          t(e);
        }
      }
      if (e.hasError) throw e.error;
    }();
  }
  var x,
    F,
    M,
    j = {
      __extends: o,
      __assign: s,
      __rest: a,
      __decorate: u,
      __param: c,
      __metadata: l,
      __awaiter: h,
      __generator: f,
      __createBinding: d,
      __exportStar: p,
      __values: g,
      __read: y,
      __spread: v,
      __spreadArrays: m,
      __spreadArray: w,
      __await: b,
      __asyncGenerator: _,
      __asyncDelegator: S,
      __asyncValues: A,
      __makeTemplateObject: I,
      __importStar: E,
      __importDefault: T,
      __classPrivateFieldGet: U,
      __classPrivateFieldSet: k,
      __classPrivateFieldIn: P,
      __addDisposableResource: O,
      __disposeResources: D
    },
    N = Object.freeze({
      __proto__: null,
      __addDisposableResource: O,
      get __assign() {
        return s;
      },
      __asyncDelegator: S,
      __asyncGenerator: _,
      __asyncValues: A,
      __await: b,
      __awaiter: h,
      __classPrivateFieldGet: U,
      __classPrivateFieldIn: P,
      __classPrivateFieldSet: k,
      __createBinding: d,
      __decorate: u,
      __disposeResources: D,
      __esDecorate: function (e, t, n, r, i, o) {
        function s(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e;
        }
        for (var a, u = r.kind, c = "getter" === u ? "get" : "setter" === u ? "set" : "value", l = !t && e ? r.static ? e : e.prototype : null, h = t || (l ? Object.getOwnPropertyDescriptor(l, r.name) : {}), f = !1, d = n.length - 1; d >= 0; d--) {
          var p = {};
          for (var g in r) p[g] = "access" === g ? {} : r[g];
          for (var g in r.access) p.access[g] = r.access[g];
          p.addInitializer = function (e) {
            if (f) throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(s(e || null));
          };
          var y = (0, n[d])("accessor" === u ? {
            get: h.get,
            set: h.set
          } : h[c], p);
          if ("accessor" === u) {
            if (void 0 === y) continue;
            if (null === y || "object" != typeof y) throw new TypeError("Object expected");
            (a = s(y.get)) && (h.get = a), (a = s(y.set)) && (h.set = a), (a = s(y.init)) && i.unshift(a);
          } else (a = s(y)) && ("field" === u ? i.unshift(a) : h[c] = a);
        }
        l && Object.defineProperty(l, r.name, h), f = !0;
      },
      __exportStar: p,
      __extends: o,
      __generator: f,
      __importDefault: T,
      __importStar: E,
      __makeTemplateObject: I,
      __metadata: l,
      __param: c,
      __propKey: function (e) {
        return "symbol" == typeof e ? e : "".concat(e);
      },
      __read: y,
      __rest: a,
      __runInitializers: function (e, t, n) {
        for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
        return r ? n : void 0;
      },
      __setFunctionName: function (e, t, n) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: n ? "".concat(n, " ", t) : t
        });
      },
      __spread: v,
      __spreadArray: w,
      __spreadArrays: m,
      __values: g,
      default: j
    });
  function L(e) {
    return e && !!["provider"].find(function (t) {
      return e.hasOwnProperty(t);
    });
  }
  function B(e) {
    return void 0 !== e.redirectSignIn;
  }
  !function (e) {
    e.Cognito = "COGNITO", e.Google = "Google", e.Facebook = "Facebook", e.Amazon = "LoginWithAmazon", e.Apple = "SignInWithApple";
  }(x || (x = {})), function (e) {
    e.NoConfig = "noConfig", e.MissingAuthConfig = "missingAuthConfig", e.EmptyUsername = "emptyUsername", e.InvalidUsername = "invalidUsername", e.EmptyPassword = "emptyPassword", e.EmptyCode = "emptyCode", e.SignUpError = "signUpError", e.NoMFA = "noMFA", e.InvalidMFA = "invalidMFA", e.EmptyChallengeResponse = "emptyChallengeResponse", e.NoUserSession = "noUserSession", e.Default = "default", e.DeviceConfig = "deviceConfig", e.NetworkError = "networkError", e.AutoSignInError = "autoSignInError";
  }(F || (F = {})), function (e) {
    e.API_KEY = "API_KEY", e.AWS_IAM = "AWS_IAM", e.OPENID_CONNECT = "OPENID_CONNECT", e.AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS", e.AWS_LAMBDA = "AWS_LAMBDA";
  }(M || (M = {}));
  var V,
    K = void 0 && (void 0).__values || function (e) {
      var t = "function" == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0;
      if (n) return n.call(e);
      if (e && "number" == typeof e.length) return {
        next: function () {
          return e && r >= e.length && (e = void 0), {
            value: e && e[r++],
            done: !e
          };
        }
      };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    q = void 0 && (void 0).__read || function (e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        i,
        o = n.call(e),
        s = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value);
      } catch (e) {
        i = {
          error: e
        };
      } finally {
        try {
          r && !r.done && (n = o.return) && n.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      return s;
    },
    W = void 0 && (void 0).__spreadArray || function (e, t, n) {
      if (n || 2 === arguments.length) for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
      return e.concat(r || Array.prototype.slice.call(t));
    },
    G = {
      VERBOSE: 1,
      DEBUG: 2,
      INFO: 3,
      WARN: 4,
      ERROR: 5
    };
  !function (e) {
    e.DEBUG = "DEBUG", e.ERROR = "ERROR", e.INFO = "INFO", e.WARN = "WARN", e.VERBOSE = "VERBOSE";
  }(V || (V = {}));
  var H,
    z,
    J,
    $,
    Y,
    Z,
    X,
    Q,
    ee,
    te,
    ne,
    re,
    ie,
    oe = function () {
      function e(e, t) {
        void 0 === t && (t = V.WARN), this.name = e, this.level = t, this._pluggables = [];
      }
      return e.prototype._padding = function (e) {
        return e < 10 ? "0" + e : "" + e;
      }, e.prototype._ts = function () {
        var e = new Date();
        return [this._padding(e.getMinutes()), this._padding(e.getSeconds())].join(":") + "." + e.getMilliseconds();
      }, e.prototype.configure = function (e) {
        return e ? (this._config = e, this._config) : this._config;
      }, e.prototype._log = function (t) {
        for (var n, r, i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
        var s = this.level;
        if (e.LOG_LEVEL && (s = e.LOG_LEVEL), "undefined" != typeof window && window.LOG_LEVEL && (s = window.LOG_LEVEL), G[t] >= G[s]) {
          var a = console.log.bind(console);
          t === V.ERROR && console.error && (a = console.error.bind(console)), t === V.WARN && console.warn && (a = console.warn.bind(console));
          var u = "[".concat(t, "] ").concat(this._ts(), " ").concat(this.name),
            c = "";
          if (1 === i.length && "string" == typeof i[0]) a(c = "".concat(u, " - ").concat(i[0]));else if (1 === i.length) c = "".concat(u, " ").concat(i[0]), a(u, i[0]);else if ("string" == typeof i[0]) {
            var l = i.slice(1);
            1 === l.length && (l = l[0]), c = "".concat(u, " - ").concat(i[0], " ").concat(l), a("".concat(u, " - ").concat(i[0]), l);
          } else c = "".concat(u, " ").concat(i), a(u, i);
          try {
            for (var h = K(this._pluggables), f = h.next(); !f.done; f = h.next()) {
              var d = f.value,
                p = {
                  message: c,
                  timestamp: Date.now()
                };
              d.pushLogs([p]);
            }
          } catch (e) {
            n = {
              error: e
            };
          } finally {
            try {
              f && !f.done && (r = h.return) && r.call(h);
            } finally {
              if (n) throw n.error;
            }
          }
        }
      }, e.prototype.log = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._log.apply(this, W([V.INFO], q(e), !1));
      }, e.prototype.info = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._log.apply(this, W([V.INFO], q(e), !1));
      }, e.prototype.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._log.apply(this, W([V.WARN], q(e), !1));
      }, e.prototype.error = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._log.apply(this, W([V.ERROR], q(e), !1));
      }, e.prototype.debug = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._log.apply(this, W([V.DEBUG], q(e), !1));
      }, e.prototype.verbose = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._log.apply(this, W([V.VERBOSE], q(e), !1));
      }, e.prototype.addPluggable = function (e) {
        e && "Logging" === e.getCategoryName() && (this._pluggables.push(e), e.configure(this._config));
      }, e.prototype.listPluggables = function () {
        return this._pluggables;
      }, e.LOG_LEVEL = null, e;
    }(),
    se = void 0 && (void 0).__read || function (e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        i,
        o = n.call(e),
        s = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value);
      } catch (e) {
        i = {
          error: e
        };
      } finally {
        try {
          r && !r.done && (n = o.return) && n.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      return s;
    },
    ae = new oe("Amplify"),
    ue = new (function () {
      function e() {
        this._components = [], this._config = {}, this._modules = {}, this.Auth = null, this.Analytics = null, this.API = null, this.Credentials = null, this.Storage = null, this.I18n = null, this.Cache = null, this.PubSub = null, this.Interactions = null, this.Pushnotification = null, this.UI = null, this.XR = null, this.Predictions = null, this.DataStore = null, this.Geo = null, this.Notifications = null, this.Logger = oe, this.ServiceWorker = null;
      }
      return e.prototype.register = function (e) {
        ae.debug("component registered in amplify", e), this._components.push(e), "function" == typeof e.getModuleName ? (this._modules[e.getModuleName()] = e, this[e.getModuleName()] = e) : ae.debug("no getModuleName method for component", e), e.configure(this._config);
      }, e.prototype.configure = function (e) {
        var t = this;
        return e ? (this._config = Object.assign(this._config, e), ae.debug("amplify config", this._config), Object.entries(this._modules).forEach(function (e) {
          var n = se(e, 2);
          n[0];
          var r = n[1];
          Object.keys(r).forEach(function (e) {
            t._modules[e] && (r[e] = t._modules[e]);
          });
        }), this._components.map(function (e) {
          e.configure(t._config);
        }), this._config) : this._config;
      }, e.prototype.addPluggable = function (e) {
        e && e.getCategory && "function" == typeof e.getCategory && this._components.map(function (t) {
          t.addPluggable && "function" == typeof t.addPluggable && t.addPluggable(e);
        });
      }, e;
    }())();
  !function (e) {
    e.WebUnknown = "0", e.React = "1", e.NextJs = "2", e.Angular = "3", e.VueJs = "4", e.Nuxt = "5", e.Svelte = "6", e.ServerSideUnknown = "100", e.ReactSSR = "101", e.NextJsSSR = "102", e.AngularSSR = "103", e.VueJsSSR = "104", e.NuxtSSR = "105", e.SvelteSSR = "106", e.ReactNative = "201", e.Expo = "202";
  }(H || (H = {})), function (e) {
    e.API = "api", e.Auth = "auth", e.Analytics = "analytics", e.DataStore = "datastore", e.Geo = "geo", e.InAppMessaging = "inappmessaging", e.Interactions = "interactions", e.Predictions = "predictions", e.PubSub = "pubsub", e.PushNotification = "pushnotification", e.Storage = "storage";
  }(z || (z = {})), function (e) {
    e.Record = "1", e.UpdateEndpoint = "2";
  }(J || (J = {})), function (e) {
    e.GraphQl = "1", e.Get = "2", e.Post = "3", e.Put = "4", e.Patch = "5", e.Del = "6", e.Head = "7";
  }($ || ($ = {})), function (e) {
    e.FederatedSignIn = "30";
  }(Y || (Y = {})), function (e) {
    e.Subscribe = "1", e.GraphQl = "2";
  }(Z || (Z = {})), function (e) {
    e.None = "0";
  }(X || (X = {})), function (e) {
    e.None = "0";
  }(Q || (Q = {})), function (e) {
    e.None = "0";
  }(ee || (ee = {})), function (e) {
    e.Convert = "1", e.Identify = "2", e.Interpret = "3";
  }(te || (te = {})), function (e) {
    e.Subscribe = "1";
  }(ne || (ne = {})), function (e) {
    e.None = "0";
  }(re || (re = {})), function (e) {
    e.Put = "1", e.Get = "2", e.List = "3", e.Copy = "4", e.Remove = "5", e.GetProperties = "6";
  }(ie || (ie = {}));
  var ce = "5.3.11",
    le = function () {
      return "undefined" != typeof global;
    },
    he = function () {
      return "undefined" != typeof window;
    },
    fe = function () {
      return "undefined" != typeof document;
    },
    de = function () {
      return "undefined" != typeof process;
    },
    pe = function (e, t) {
      return !!Object.keys(e).find(function (e) {
        return e.startsWith(t);
      });
    };
  var ge,
    ye = [{
      platform: H.Expo,
      detectionMethod: function () {
        return le() && void 0 !== global.expo;
      }
    }, {
      platform: H.ReactNative,
      detectionMethod: function () {
        return "undefined" != typeof navigator && void 0 !== navigator.product && "ReactNative" === navigator.product;
      }
    }, {
      platform: H.NextJs,
      detectionMethod: function () {
        return he() && window.next && "object" == typeof window.next;
      }
    }, {
      platform: H.Nuxt,
      detectionMethod: function () {
        return he() && (void 0 !== window.__NUXT__ || void 0 !== window.$nuxt);
      }
    }, {
      platform: H.Angular,
      detectionMethod: function () {
        var e = Boolean(fe() && document.querySelector("[ng-version]")),
          t = Boolean(he() && void 0 !== window.ng);
        return e || t;
      }
    }, {
      platform: H.React,
      detectionMethod: function () {
        var e = function (e) {
          return e.startsWith("_react") || e.startsWith("__react");
        };
        return fe() && Array.from(document.querySelectorAll("[id]")).some(function (t) {
          return Object.keys(t).find(e);
        });
      }
    }, {
      platform: H.VueJs,
      detectionMethod: function () {
        return he() && pe(window, "__VUE");
      }
    }, {
      platform: H.Svelte,
      detectionMethod: function () {
        return he() && pe(window, "__SVELTE");
      }
    }, {
      platform: H.WebUnknown,
      detectionMethod: function () {
        return he();
      }
    }, {
      platform: H.NextJsSSR,
      detectionMethod: function () {
        return le() && (pe(global, "__next") || pe(global, "__NEXT"));
      }
    }, {
      platform: H.NuxtSSR,
      detectionMethod: function () {
        return le() && void 0 !== global.__NUXT_PATHS__;
      }
    }, {
      platform: H.ReactSSR,
      detectionMethod: function () {
        return de() && void 0 !== process.env && !!Object.keys(process.env).find(function (e) {
          return e.includes("react");
        });
      }
    }, {
      platform: H.VueJsSSR,
      detectionMethod: function () {
        return le() && pe(global, "__VUE");
      }
    }, {
      platform: H.AngularSSR,
      detectionMethod: function () {
        var e;
        return de() && "object" == typeof process.env && (null === (e = process.env.npm_lifecycle_script) || void 0 === e ? void 0 : e.startsWith("ng ")) || !1;
      }
    }, {
      platform: H.SvelteSSR,
      detectionMethod: function () {
        return de() && void 0 !== process.env && !!Object.keys(process.env).find(function (e) {
          return e.includes("svelte");
        });
      }
    }];
  var ve = [],
    me = !1,
    we = function () {
      if (!ge) {
        if (ge = (null === (e = ye.find(function (e) {
          return e.detectionMethod();
        })) || void 0 === e ? void 0 : e.platform) || H.ServerSideUnknown, me) for (; ve.length;) ve.pop()();else ve.forEach(function (e) {
          return e();
        });
        _e(H.ServerSideUnknown, 10), _e(H.WebUnknown, 10);
      }
      var e;
      return ge;
    },
    be = function (e) {
      me || ve.push(e);
    };
  function _e(e, t) {
    ge !== e || me || setTimeout(function () {
      ge = void 0, me = !0, setTimeout(we, 1e3);
    }, t);
  }
  var Se = void 0 && (void 0).__read || function (e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        i,
        o = n.call(e),
        s = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value);
      } catch (e) {
        i = {
          error: e
        };
      } finally {
        try {
          r && !r.done && (n = o.return) && n.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      return s;
    },
    Ae = "aws-amplify",
    Ie = new (function () {
      function e() {
        this.userAgent = "".concat(Ae, "/").concat(ce);
      }
      return Object.defineProperty(e.prototype, "framework", {
        get: function () {
          return we();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "isReactNative", {
        get: function () {
          return this.framework === H.ReactNative || this.framework === H.Expo;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.observeFrameworkChanges = function (e) {
        be(e);
      }, e;
    }())(),
    Ce = function (e) {
      return function (e) {
        var t = void 0 === e ? {} : e,
          n = t.category,
          r = t.action;
        t.framework;
        var i = [[Ae, ce]];
        return n && i.push([n, r]), i.push(["framework", we()]), i;
      }(e).map(function (e) {
        var t = Se(e, 2),
          n = t[0],
          r = t[1];
        return "".concat(n, "/").concat(r);
      }).join(" ");
    },
    Ee = void 0 && (void 0).__assign || function () {
      return Ee = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }, Ee.apply(this, arguments);
    },
    Te = void 0 && (void 0).__read || function (e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        i,
        o = n.call(e),
        s = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value);
      } catch (e) {
        i = {
          error: e
        };
      } finally {
        try {
          r && !r.done && (n = o.return) && n.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      return s;
    },
    Ue = void 0 && (void 0).__spreadArray || function (e, t, n) {
      if (n || 2 === arguments.length) for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
      return e.concat(r || Array.prototype.slice.call(t));
    },
    ke = new oe("Hub"),
    Pe = "undefined" != typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("amplify_default") : "@@amplify_default";
  var Oe = function () {
      function e(e) {
        this.listeners = [], this.patterns = [], this.protectedChannels = ["core", "auth", "api", "analytics", "interactions", "pubsub", "storage", "ui", "xr"], this.name = e;
      }
      return e.prototype._remove = function (e, t) {
        if (e instanceof RegExp) {
          var n = this.patterns.find(function (t) {
            return t.pattern.source === e.source;
          });
          if (!n) return void ke.warn("No listeners for ".concat(e));
          this.patterns = Ue([], Te(this.patterns.filter(function (e) {
            return e !== n;
          })), !1);
        } else {
          var r = this.listeners[e];
          if (!r) return void ke.warn("No listeners for ".concat(e));
          this.listeners[e] = Ue([], Te(r.filter(function (e) {
            return e.callback !== t;
          })), !1);
        }
      }, e.prototype.remove = function (e, t) {
        this._remove(e, t);
      }, e.prototype.dispatch = function (e, t, n, r) {
        (void 0 === n && (n = ""), this.protectedChannels.indexOf(e) > -1) && (r === Pe || ke.warn("WARNING: ".concat(e, " is protected and dispatching on it can have unintended consequences")));
        var i = {
          channel: e,
          payload: Ee({}, t),
          source: n,
          patternInfo: []
        };
        try {
          this._toListeners(i);
        } catch (e) {
          ke.error(e);
        }
      }, e.prototype.listen = function (e, t, n) {
        var r,
          i = this;
        if (void 0 === n && (n = "noname"), function (e) {
          return void 0 !== e.onHubCapsule;
        }(t)) ke.warn("WARNING onHubCapsule is Deprecated. Please pass in a callback."), r = t.onHubCapsule.bind(t);else {
          if ("function" != typeof t) throw new Error("No callback supplied to Hub");
          r = t;
        }
        if (e instanceof RegExp) this.patterns.push({
          pattern: e,
          callback: r
        });else {
          var o = this.listeners[e];
          o || (o = [], this.listeners[e] = o), o.push({
            name: n,
            callback: r
          });
        }
        return function () {
          i._remove(e, r);
        };
      }, e.prototype._toListeners = function (e) {
        var t = e.channel,
          n = e.payload,
          r = this.listeners[t];
        if (r && r.forEach(function (r) {
          ke.debug("Dispatching to ".concat(t, " with "), n);
          try {
            r.callback(e);
          } catch (e) {
            ke.error(e);
          }
        }), this.patterns.length > 0) {
          if (!n.message) return void ke.warn("Cannot perform pattern matching without a message key");
          var i = n.message;
          this.patterns.forEach(function (t) {
            var n = i.match(t.pattern);
            if (n) {
              var r = Te(n).slice(1),
                o = Ee(Ee({}, e), {
                  patternInfo: r
                });
              try {
                t.callback(o);
              } catch (e) {
                ke.error(e);
              }
            }
          });
        }
      }, e;
    }(),
    Re = new Oe("__default__"),
    De = function () {
      return {
        isBrowser: "undefined" != typeof window && void 0 !== window.document,
        isNode: "undefined" != typeof process && null != process.versions && null != process.versions.node
      };
    },
    xe = void 0 && (void 0).__extends || function () {
      var e = function (t, n) {
        return e = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }, e(t, n);
      };
      return function (t, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
        function r() {
          this.constructor = t;
        }
        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
      };
    }(),
    Fe = void 0 && (void 0).__awaiter || function (e, t, n, r) {
      return new (n || (n = Promise))(function (i, o) {
        function s(e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function u(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(s, a);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
    Me = void 0 && (void 0).__generator || function (e, t) {
      var n,
        r,
        i,
        o,
        s = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: []
        };
      return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;
      function a(a) {
        return function (u) {
          return function (a) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
              if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
              switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                case 0:
                case 1:
                  i = a;
                  break;
                case 4:
                  return s.label++, {
                    value: a[1],
                    done: !1
                  };
                case 5:
                  s.label++, r = a[1], a = [0];
                  continue;
                case 7:
                  a = s.ops.pop(), s.trys.pop();
                  continue;
                default:
                  if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    s.label = a[1];
                    break;
                  }
                  if (6 === a[0] && s.label < i[1]) {
                    s.label = i[1], i = a;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2], s.ops.push(a);
                    break;
                  }
                  i[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              a = t.call(e, s);
            } catch (e) {
              a = [6, e], r = 0;
            } finally {
              n = i = 0;
            }
            if (5 & a[0]) throw a[1];
            return {
              value: a[0] ? a[1] : void 0,
              done: !0
            };
          }([a, u]);
        };
      }
    },
    je = void 0 && (void 0).__read || function (e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        i,
        o = n.call(e),
        s = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value);
      } catch (e) {
        i = {
          error: e
        };
      } finally {
        try {
          r && !r.done && (n = o.return) && n.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      return s;
    },
    Ne = void 0 && (void 0).__spreadArray || function (e, t, n) {
      if (n || 2 === arguments.length) for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
      return e.concat(r || Array.prototype.slice.call(t));
    },
    Le = new oe("Util"),
    Be = function (e) {
      function t(t) {
        var n = e.call(this, t) || this;
        return n.nonRetryable = !0, n;
      }
      return xe(t, e), t;
    }(Error);
  function Ve(e) {
    void 0 === e && (e = 3e5);
    return function (t) {
      var n = 100 * Math.pow(2, t) + 100 * Math.random();
      return !(n > e) && n;
    };
  }
  var Ke = function (e, t, n, r) {
      return function (e, t, n, r) {
        return Fe(this, void 0, void 0, function () {
          var r = this;
          return Me(this, function (i) {
            if ("function" != typeof e) throw Error("functionToRetry must be a function");
            return [2, new Promise(function (i, o) {
              return Fe(r, void 0, void 0, function () {
                var r, s, a, u, c, l;
                return Me(this, function (h) {
                  switch (h.label) {
                    case 0:
                      r = 0, s = !1, a = function () {}, c = function () {
                        var c, l, h, f;
                        return Me(this, function (d) {
                          switch (d.label) {
                            case 0:
                              r++, Le.debug("".concat(e.name, " attempt #").concat(r, " with this vars: ").concat(JSON.stringify(t))), d.label = 1;
                            case 1:
                              return d.trys.push([1, 3,, 7]), c = {}, l = i, [4, e.apply(void 0, Ne([], je(t), !1))];
                            case 2:
                              return [2, (c.value = l.apply(void 0, [d.sent()]), c)];
                            case 3:
                              return h = d.sent(), u = h, Le.debug("error on ".concat(e.name), h), (p = h) && p.nonRetryable ? (Le.debug("".concat(e.name, " non retryable error"), h), [2, {
                                value: o(h)
                              }]) : (f = n(r, t, h), Le.debug("".concat(e.name, " retrying in ").concat(f, " ms")), !1 === f || s ? [2, {
                                value: o(h)
                              }] : [3, 4]);
                            case 4:
                              return [4, new Promise(function (e) {
                                a = e, setTimeout(a, f);
                              })];
                            case 5:
                              d.sent(), d.label = 6;
                            case 6:
                              return [3, 7];
                            case 7:
                              return [2];
                          }
                          var p;
                        });
                      }, h.label = 1;
                    case 1:
                      return s ? [3, 3] : [5, c()];
                    case 2:
                      return "object" == typeof (l = h.sent()) ? [2, l.value] : [3, 1];
                    case 3:
                      return o(u), [2];
                  }
                });
              });
            })];
          });
        });
      }(e, t, Ve(n));
    },
    qe = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  function We(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  function Ge(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if ("function" == typeof t) {
      var n = function e() {
        return this instanceof e ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      n.prototype = t.prototype;
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.keys(e).forEach(function (t) {
      var r = Object.getOwnPropertyDescriptor(e, t);
      Object.defineProperty(n, t, r.get ? r : {
        enumerable: !0,
        get: function () {
          return e[t];
        }
      });
    }), n;
  }
  var He = {},
    ze = Ge(N),
    Je = {},
    $e = {};
  Object.defineProperty($e, "__esModule", {
    value: !0
  }), $e.MAX_HASHABLE_LENGTH = $e.INIT = $e.KEY = $e.DIGEST_LENGTH = $e.BLOCK_SIZE = void 0, $e.BLOCK_SIZE = 64, $e.DIGEST_LENGTH = 32, $e.KEY = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), $e.INIT = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], $e.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
  var Ye = {};
  Object.defineProperty(Ye, "__esModule", {
    value: !0
  }), Ye.RawSha256 = void 0;
  var Ze = $e,
    Xe = function () {
      function e() {
        this.state = Int32Array.from(Ze.INIT), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1;
      }
      return e.prototype.update = function (e) {
        if (this.finished) throw new Error("Attempted to update an already finished hash.");
        var t = 0,
          n = e.byteLength;
        if (this.bytesHashed += n, 8 * this.bytesHashed > Ze.MAX_HASHABLE_LENGTH) throw new Error("Cannot hash more than 2^53 - 1 bits");
        for (; n > 0;) this.buffer[this.bufferLength++] = e[t++], n--, this.bufferLength === Ze.BLOCK_SIZE && (this.hashBuffer(), this.bufferLength = 0);
      }, e.prototype.digest = function () {
        if (!this.finished) {
          var e = 8 * this.bytesHashed,
            t = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength),
            n = this.bufferLength;
          if (t.setUint8(this.bufferLength++, 128), n % Ze.BLOCK_SIZE >= Ze.BLOCK_SIZE - 8) {
            for (var r = this.bufferLength; r < Ze.BLOCK_SIZE; r++) t.setUint8(r, 0);
            this.hashBuffer(), this.bufferLength = 0;
          }
          for (r = this.bufferLength; r < Ze.BLOCK_SIZE - 8; r++) t.setUint8(r, 0);
          t.setUint32(Ze.BLOCK_SIZE - 8, Math.floor(e / 4294967296), !0), t.setUint32(Ze.BLOCK_SIZE - 4, e), this.hashBuffer(), this.finished = !0;
        }
        var i = new Uint8Array(Ze.DIGEST_LENGTH);
        for (r = 0; r < 8; r++) i[4 * r] = this.state[r] >>> 24 & 255, i[4 * r + 1] = this.state[r] >>> 16 & 255, i[4 * r + 2] = this.state[r] >>> 8 & 255, i[4 * r + 3] = this.state[r] >>> 0 & 255;
        return i;
      }, e.prototype.hashBuffer = function () {
        for (var e = this.buffer, t = this.state, n = t[0], r = t[1], i = t[2], o = t[3], s = t[4], a = t[5], u = t[6], c = t[7], l = 0; l < Ze.BLOCK_SIZE; l++) {
          if (l < 16) this.temp[l] = (255 & e[4 * l]) << 24 | (255 & e[4 * l + 1]) << 16 | (255 & e[4 * l + 2]) << 8 | 255 & e[4 * l + 3];else {
            var h = this.temp[l - 2],
              f = (h >>> 17 | h << 15) ^ (h >>> 19 | h << 13) ^ h >>> 10,
              d = ((h = this.temp[l - 15]) >>> 7 | h << 25) ^ (h >>> 18 | h << 14) ^ h >>> 3;
            this.temp[l] = (f + this.temp[l - 7] | 0) + (d + this.temp[l - 16] | 0);
          }
          var p = (((s >>> 6 | s << 26) ^ (s >>> 11 | s << 21) ^ (s >>> 25 | s << 7)) + (s & a ^ ~s & u) | 0) + (c + (Ze.KEY[l] + this.temp[l] | 0) | 0) | 0,
            g = ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + (n & r ^ n & i ^ r & i) | 0;
          c = u, u = a, a = s, s = o + p | 0, o = i, i = r, r = n, n = p + g | 0;
        }
        t[0] += n, t[1] += r, t[2] += i, t[3] += o, t[4] += s, t[5] += a, t[6] += u, t[7] += c;
      }, e;
    }();
  Ye.RawSha256 = Xe;
  var Qe = {},
    et = {};
  var tt = Object.freeze({
      __proto__: null,
      fromUtf8: e => "function" == typeof TextEncoder ? function (e) {
        return new TextEncoder().encode(e);
      }(e) : (e => {
        const t = [];
        for (let n = 0, r = e.length; n < r; n++) {
          const r = e.charCodeAt(n);
          if (r < 128) t.push(r);else if (r < 2048) t.push(r >> 6 | 192, 63 & r | 128);else if (n + 1 < e.length && 55296 == (64512 & r) && 56320 == (64512 & e.charCodeAt(n + 1))) {
            const i = 65536 + ((1023 & r) << 10) + (1023 & e.charCodeAt(++n));
            t.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128);
          } else t.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
        }
        return Uint8Array.from(t);
      })(e),
      toUtf8: e => "function" == typeof TextDecoder ? function (e) {
        return new TextDecoder("utf-8").decode(e);
      }(e) : (e => {
        let t = "";
        for (let n = 0, r = e.length; n < r; n++) {
          const r = e[n];
          if (r < 128) t += String.fromCharCode(r);else if (192 <= r && r < 224) {
            const i = e[++n];
            t += String.fromCharCode((31 & r) << 6 | 63 & i);
          } else if (240 <= r && r < 365) {
            const i = "%" + [r, e[++n], e[++n], e[++n]].map(e => e.toString(16)).join("%");
            t += decodeURIComponent(i);
          } else t += String.fromCharCode((15 & r) << 12 | (63 & e[++n]) << 6 | 63 & e[++n]);
        }
        return t;
      })(e)
    }),
    nt = Ge(tt);
  Object.defineProperty(et, "__esModule", {
    value: !0
  }), et.convertToBuffer = void 0;
  var rt = nt,
    it = "undefined" != typeof Buffer && Buffer.from ? function (e) {
      return Buffer.from(e, "utf8");
    } : rt.fromUtf8;
  et.convertToBuffer = function (e) {
    return e instanceof Uint8Array ? e : "string" == typeof e ? it(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e);
  };
  var ot = {};
  Object.defineProperty(ot, "__esModule", {
    value: !0
  }), ot.isEmptyData = void 0, ot.isEmptyData = function (e) {
    return "string" == typeof e ? 0 === e.length : 0 === e.byteLength;
  };
  var st = {};
  Object.defineProperty(st, "__esModule", {
    value: !0
  }), st.numToUint8 = void 0, st.numToUint8 = function (e) {
    return new Uint8Array([(4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e]);
  };
  var at = {};
  Object.defineProperty(at, "__esModule", {
    value: !0
  }), at.uint32ArrayFrom = void 0, at.uint32ArrayFrom = function (e) {
    if (!Array.from) {
      for (var t = new Uint32Array(e.length); 0 < e.length;) t[0] = e[0];
      return t;
    }
    return Uint32Array.from(e);
  }, function (e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.uint32ArrayFrom = e.numToUint8 = e.isEmptyData = e.convertToBuffer = void 0;
    var t = et;
    Object.defineProperty(e, "convertToBuffer", {
      enumerable: !0,
      get: function () {
        return t.convertToBuffer;
      }
    });
    var n = ot;
    Object.defineProperty(e, "isEmptyData", {
      enumerable: !0,
      get: function () {
        return n.isEmptyData;
      }
    });
    var r = st;
    Object.defineProperty(e, "numToUint8", {
      enumerable: !0,
      get: function () {
        return r.numToUint8;
      }
    });
    var i = at;
    Object.defineProperty(e, "uint32ArrayFrom", {
      enumerable: !0,
      get: function () {
        return i.uint32ArrayFrom;
      }
    });
  }(Qe), Object.defineProperty(Je, "__esModule", {
    value: !0
  }), Je.Sha256 = void 0;
  var ut,
    ct = ze,
    lt = $e,
    ht = Ye,
    ft = Qe,
    dt = function () {
      function e(e) {
        if (this.hash = new ht.RawSha256(), e) {
          this.outer = new ht.RawSha256();
          var t = function (e) {
              var t = (0, ft.convertToBuffer)(e);
              if (t.byteLength > lt.BLOCK_SIZE) {
                var n = new ht.RawSha256();
                n.update(t), t = n.digest();
              }
              var r = new Uint8Array(lt.BLOCK_SIZE);
              return r.set(t), r;
            }(e),
            n = new Uint8Array(lt.BLOCK_SIZE);
          n.set(t);
          for (var r = 0; r < lt.BLOCK_SIZE; r++) t[r] ^= 54, n[r] ^= 92;
          this.hash.update(t), this.outer.update(n);
          for (r = 0; r < t.byteLength; r++) t[r] = 0;
        }
      }
      return e.prototype.update = function (e) {
        if (!(0, ft.isEmptyData)(e) && !this.error) try {
          this.hash.update((0, ft.convertToBuffer)(e));
        } catch (e) {
          this.error = e;
        }
      }, e.prototype.digestSync = function () {
        if (this.error) throw this.error;
        return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest();
      }, e.prototype.digest = function () {
        return (0, ct.__awaiter)(this, void 0, void 0, function () {
          return (0, ct.__generator)(this, function (e) {
            return [2, this.digestSync()];
          });
        });
      }, e;
    }();
  Je.Sha256 = dt, ut = He, Object.defineProperty(ut, "__esModule", {
    value: !0
  }), (0, ze.__exportStar)(Je, ut);
  var pt = void 0 && (void 0).__assign || function () {
      return pt = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }, pt.apply(this, arguments);
    },
    gt = new oe("Parser"),
    yt = function (e) {
      var t,
        n = {};
      if (e.aws_mobile_analytics_app_id) {
        var r = {
          AWSPinpoint: {
            appId: e.aws_mobile_analytics_app_id,
            region: e.aws_mobile_analytics_app_region
          }
        };
        n.Analytics = r;
      }
      return (e.aws_cognito_identity_pool_id || e.aws_user_pools_id) && (n.Auth = {
        userPoolId: e.aws_user_pools_id,
        userPoolWebClientId: e.aws_user_pools_web_client_id,
        region: e.aws_cognito_region,
        identityPoolId: e.aws_cognito_identity_pool_id,
        identityPoolRegion: e.aws_cognito_region,
        mandatorySignIn: "enable" === e.aws_mandatory_sign_in,
        signUpVerificationMethod: e.aws_cognito_sign_up_verification_method || "code"
      }), t = e.aws_user_files_s3_bucket ? {
        AWSS3: {
          bucket: e.aws_user_files_s3_bucket,
          region: e.aws_user_files_s3_bucket_region,
          dangerouslyConnectToHttpEndpointForTesting: e.aws_user_files_s3_dangerously_connect_to_http_endpoint_for_testing
        }
      } : e ? e.Storage || e : {}, e.Logging && (n.Logging = pt(pt({}, e.Logging), {
        region: e.aws_project_region
      })), e.geo && (n.Geo = Object.assign({}, e.geo), e.geo.amazon_location_service && (n.Geo = {
        AmazonLocationService: e.geo.amazon_location_service
      })), n.Analytics = Object.assign({}, n.Analytics, e.Analytics), n.Auth = Object.assign({}, n.Auth, e.Auth), n.Storage = Object.assign({}, t), n.Logging = Object.assign({}, n.Logging, e.Logging), gt.debug("parse config", e, "to amplifyconfig", n), n;
    },
    vt = void 0 && (void 0).__awaiter || function (e, t, n, r) {
      return new (n || (n = Promise))(function (i, o) {
        function s(e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function u(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(s, a);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
    mt = void 0 && (void 0).__generator || function (e, t) {
      var n,
        r,
        i,
        o,
        s = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: []
        };
      return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;
      function a(a) {
        return function (u) {
          return function (a) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
              if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
              switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                case 0:
                case 1:
                  i = a;
                  break;
                case 4:
                  return s.label++, {
                    value: a[1],
                    done: !1
                  };
                case 5:
                  s.label++, r = a[1], a = [0];
                  continue;
                case 7:
                  a = s.ops.pop(), s.trys.pop();
                  continue;
                default:
                  if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    s.label = a[1];
                    break;
                  }
                  if (6 === a[0] && s.label < i[1]) {
                    s.label = i[1], i = a;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2], s.ops.push(a);
                    break;
                  }
                  i[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              a = t.call(e, s);
            } catch (e) {
              a = [6, e], r = 0;
            } finally {
              n = i = 0;
            }
            if (5 & a[0]) throw a[1];
            return {
              value: a[0] ? a[1] : void 0,
              done: !0
            };
          }([a, u]);
        };
      }
    },
    wt = new oe("CognitoCredentials"),
    bt = new Promise(function (e, t) {
      return De().isBrowser ? (window.gapi && window.gapi.auth2 ? window.gapi.auth2 : null) ? (wt.debug("google api already loaded"), e()) : void setTimeout(function () {
        return e();
      }, 2e3) : (wt.debug("not in the browser, directly resolved"), e());
    }),
    _t = function () {
      function e() {
        this.initialized = !1, this.refreshGoogleToken = this.refreshGoogleToken.bind(this), this._refreshGoogleTokenImpl = this._refreshGoogleTokenImpl.bind(this);
      }
      return e.prototype.refreshGoogleToken = function () {
        return vt(this, void 0, void 0, function () {
          return mt(this, function (e) {
            switch (e.label) {
              case 0:
                return this.initialized ? [3, 2] : (wt.debug("need to wait for the Google SDK loaded"), [4, bt]);
              case 1:
                e.sent(), this.initialized = !0, wt.debug("finish waiting"), e.label = 2;
              case 2:
                return [2, this._refreshGoogleTokenImpl()];
            }
          });
        });
      }, e.prototype._refreshGoogleTokenImpl = function () {
        var e = null;
        return De().isBrowser && (e = window.gapi && window.gapi.auth2 ? window.gapi.auth2 : null), e ? new Promise(function (t, n) {
          e.getAuthInstance().then(function (e) {
            e || (wt.debug("google Auth undefined"), n(new Be("google Auth undefined")));
            var r = e.currentUser.get();
            r.isSignedIn() ? (wt.debug("refreshing the google access token"), r.reloadAuthResponse().then(function (e) {
              var n = e.id_token,
                r = e.expires_at;
              t({
                token: n,
                expires_at: r
              });
            }).catch(function (e) {
              e && "network_error" === e.error ? n("Network error reloading google auth response") : n(new Be("Failed to reload google auth response"));
            })) : n(new Be("User is not signed in with Google"));
          }).catch(function (e) {
            wt.debug("Failed to refresh google token", e), n(new Be("Failed to refresh google token"));
          });
        }) : (wt.debug("no gapi auth2 available"), Promise.reject("no gapi auth2 available"));
      }, e;
    }(),
    St = void 0 && (void 0).__awaiter || function (e, t, n, r) {
      return new (n || (n = Promise))(function (i, o) {
        function s(e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function u(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(s, a);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
    At = void 0 && (void 0).__generator || function (e, t) {
      var n,
        r,
        i,
        o,
        s = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: []
        };
      return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;
      function a(a) {
        return function (u) {
          return function (a) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
              if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
              switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                case 0:
                case 1:
                  i = a;
                  break;
                case 4:
                  return s.label++, {
                    value: a[1],
                    done: !1
                  };
                case 5:
                  s.label++, r = a[1], a = [0];
                  continue;
                case 7:
                  a = s.ops.pop(), s.trys.pop();
                  continue;
                default:
                  if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    s.label = a[1];
                    break;
                  }
                  if (6 === a[0] && s.label < i[1]) {
                    s.label = i[1], i = a;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2], s.ops.push(a);
                    break;
                  }
                  i[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              a = t.call(e, s);
            } catch (e) {
              a = [6, e], r = 0;
            } finally {
              n = i = 0;
            }
            if (5 & a[0]) throw a[1];
            return {
              value: a[0] ? a[1] : void 0,
              done: !0
            };
          }([a, u]);
        };
      }
    },
    It = new oe("CognitoCredentials"),
    Ct = new Promise(function (e, t) {
      return De().isBrowser ? window.FB ? (It.debug("FB SDK already loaded"), e()) : void setTimeout(function () {
        return e();
      }, 2e3) : (It.debug("not in the browser, directly resolved"), e());
    }),
    Et = function () {
      function e() {
        this.initialized = !1, this.refreshFacebookToken = this.refreshFacebookToken.bind(this), this._refreshFacebookTokenImpl = this._refreshFacebookTokenImpl.bind(this);
      }
      return e.prototype.refreshFacebookToken = function () {
        return St(this, void 0, void 0, function () {
          return At(this, function (e) {
            switch (e.label) {
              case 0:
                return this.initialized ? [3, 2] : (It.debug("need to wait for the Facebook SDK loaded"), [4, Ct]);
              case 1:
                e.sent(), this.initialized = !0, It.debug("finish waiting"), e.label = 2;
              case 2:
                return [2, this._refreshFacebookTokenImpl()];
            }
          });
        });
      }, e.prototype._refreshFacebookTokenImpl = function () {
        var e = null;
        if (De().isBrowser && (e = window.FB), !e) {
          var t = "no fb sdk available";
          return It.debug(t), Promise.reject(new Be(t));
        }
        return new Promise(function (t, n) {
          e.getLoginStatus(function (e) {
            if (e && e.authResponse) {
              var r = e.authResponse,
                i = r.accessToken,
                o = 1e3 * r.expiresIn + new Date().getTime();
              if (!i) {
                s = "the jwtToken is undefined";
                It.debug(s), n(new Be(s));
              }
              t({
                token: i,
                expires_at: o
              });
            } else {
              var s = "no response from facebook when refreshing the jwt token";
              It.debug(s), n(new Be(s));
            }
          }, {
            scope: "public_profile,email"
          });
        });
      }, e;
    }(),
    Tt = new _t(),
    Ut = new Et(),
    kt = {},
    Pt = function () {
      function e() {}
      return e.setItem = function (e, t) {
        return kt[e] = t, kt[e];
      }, e.getItem = function (e) {
        return Object.prototype.hasOwnProperty.call(kt, e) ? kt[e] : void 0;
      }, e.removeItem = function (e) {
        return delete kt[e];
      }, e.clear = function () {
        return kt = {};
      }, e;
    }(),
    Ot = function () {
      function e() {
        try {
          this.storageWindow = window.localStorage, this.storageWindow.setItem("aws.amplify.test-ls", 1), this.storageWindow.removeItem("aws.amplify.test-ls");
        } catch (e) {
          this.storageWindow = Pt;
        }
      }
      return e.prototype.getStorage = function () {
        return this.storageWindow;
      }, e;
    }(),
    Rt = {
      id: "aws",
      outputs: {
        dnsSuffix: "amazonaws.com"
      },
      regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
      regions: ["aws-global"]
    },
    Dt = {
      partitions: [Rt, {
        id: "aws-cn",
        outputs: {
          dnsSuffix: "amazonaws.com.cn"
        },
        regionRegex: "^cn\\-\\w+\\-\\d+$",
        regions: ["aws-cn-global"]
      }]
    },
    xt = void 0 && (void 0).__values || function (e) {
      var t = "function" == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0;
      if (n) return n.call(e);
      if (e && "number" == typeof e.length) return {
        next: function () {
          return e && r >= e.length && (e = void 0), {
            value: e && e[r++],
            done: !e
          };
        }
      };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    Ft = function (e) {
      var t,
        n,
        r = Dt.partitions;
      try {
        for (var i = xt(r), o = i.next(); !o.done; o = i.next()) {
          var s = o.value,
            a = s.regions,
            u = s.outputs,
            c = s.regionRegex,
            l = new RegExp(c);
          if (a.includes(e) || l.test(e)) return u.dnsSuffix;
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          o && !o.done && (n = i.return) && n.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
      return Rt.outputs.dnsSuffix;
    };
  var Mt = Object.freeze({
      __proto__: null,
      default: function (e, t) {
        return t = t || {}, new Promise(function (n, r) {
          var i = new XMLHttpRequest(),
            o = [],
            s = [],
            a = {},
            u = function () {
              return {
                ok: 2 == (i.status / 100 | 0),
                statusText: i.statusText,
                status: i.status,
                url: i.responseURL,
                text: function () {
                  return Promise.resolve(i.responseText);
                },
                json: function () {
                  return Promise.resolve(i.responseText).then(JSON.parse);
                },
                blob: function () {
                  return Promise.resolve(new Blob([i.response]));
                },
                clone: u,
                headers: {
                  keys: function () {
                    return o;
                  },
                  entries: function () {
                    return s;
                  },
                  get: function (e) {
                    return a[e.toLowerCase()];
                  },
                  has: function (e) {
                    return e.toLowerCase() in a;
                  }
                }
              };
            };
          for (var c in i.open(t.method || "get", e, !0), i.onload = function () {
            i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (e, t, n) {
              o.push(t = t.toLowerCase()), s.push([t, n]), a[t] = a[t] ? a[t] + "," + n : n;
            }), n(u());
          }, i.onerror = r, i.withCredentials = "include" == t.credentials, t.headers) i.setRequestHeader(c, t.headers[c]);
          i.send(t.body || null);
        });
      }
    }),
    jt = Ge(Mt);
  self.fetch || (self.fetch = jt.default || jt);
  var Nt,
    Lt = function (e) {
      var t;
      return function () {
        return t || (t = e()), t;
      };
    },
    Bt = void 0 && (void 0).__assign || function () {
      return Bt = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }, Bt.apply(this, arguments);
    },
    Vt = void 0 && (void 0).__awaiter || function (e, t, n, r) {
      return new (n || (n = Promise))(function (i, o) {
        function s(e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function u(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(s, a);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
    Kt = void 0 && (void 0).__generator || function (e, t) {
      var n,
        r,
        i,
        o,
        s = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: []
        };
      return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;
      function a(a) {
        return function (u) {
          return function (a) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
              if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
              switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                case 0:
                case 1:
                  i = a;
                  break;
                case 4:
                  return s.label++, {
                    value: a[1],
                    done: !1
                  };
                case 5:
                  s.label++, r = a[1], a = [0];
                  continue;
                case 7:
                  a = s.ops.pop(), s.trys.pop();
                  continue;
                default:
                  if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    s.label = a[1];
                    break;
                  }
                  if (6 === a[0] && s.label < i[1]) {
                    s.label = i[1], i = a;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2], s.ops.push(a);
                    break;
                  }
                  i[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              a = t.call(e, s);
            } catch (e) {
              a = [6, e], r = 0;
            } finally {
              n = i = 0;
            }
            if (5 & a[0]) throw a[1];
            return {
              value: a[0] ? a[1] : void 0,
              done: !0
            };
          }([a, u]);
        };
      }
    },
    qt = function (e) {
      return !["HEAD", "GET", "DELETE"].includes(e.toUpperCase());
    },
    Wt = void 0 && (void 0).__assign || function () {
      return Wt = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }, Wt.apply(this, arguments);
    },
    Gt = void 0 && (void 0).__awaiter || function (e, t, n, r) {
      return new (n || (n = Promise))(function (i, o) {
        function s(e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function u(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(s, a);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
    Ht = void 0 && (void 0).__generator || function (e, t) {
      var n,
        r,
        i,
        o,
        s = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: []
        };
      return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;
      function a(a) {
        return function (u) {
          return function (a) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
              if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
              switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                case 0:
                case 1:
                  i = a;
                  break;
                case 4:
                  return s.label++, {
                    value: a[1],
                    done: !1
                  };
                case 5:
                  s.label++, r = a[1], a = [0];
                  continue;
                case 7:
                  a = s.ops.pop(), s.trys.pop();
                  continue;
                default:
                  if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    s.label = a[1];
                    break;
                  }
                  if (6 === a[0] && s.label < i[1]) {
                    s.label = i[1], i = a;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2], s.ops.push(a);
                    break;
                  }
                  i[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              a = t.call(e, s);
            } catch (e) {
              a = [6, e], r = 0;
            } finally {
              n = i = 0;
            }
            if (5 & a[0]) throw a[1];
            return {
              value: a[0] ? a[1] : void 0,
              done: !0
            };
          }([a, u]);
        };
      }
    },
    zt = function (e, t) {
      if (null == t ? void 0 : t.aborted) return Promise.resolve();
      var n,
        r,
        i = new Promise(function (t) {
          r = t, n = setTimeout(t, e);
        });
      return null == t || t.addEventListener("abort", function e(i) {
        clearTimeout(n), null == t || t.removeEventListener("abort", e), r();
      }), i;
    },
    Jt = function (e, t) {
      var n;
      "[object Object]" === Object.prototype.toString.call(e) && (e.$metadata = Wt(Wt({}, null !== (n = e.$metadata) && void 0 !== n ? n : {}), {
        attempts: t
      }));
    },
    $t = 3e5,
    Yt = ["AuthFailure", "InvalidSignatureException", "RequestExpired", "RequestInTheFuture", "RequestTimeTooSkewed", "SignatureDoesNotMatch", "BadRequestException"],
    Zt = function (e) {
      return Yt.includes(e);
    },
    Xt = void 0 && (void 0).__awaiter || function (e, t, n, r) {
      return new (n || (n = Promise))(function (i, o) {
        function s(e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function u(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(s, a);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
    Qt = void 0 && (void 0).__generator || function (e, t) {
      var n,
        r,
        i,
        o,
        s = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: []
        };
      return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;
      function a(a) {
        return function (u) {
          return function (a) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
              if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
              switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                case 0:
                case 1:
                  i = a;
                  break;
                case 4:
                  return s.label++, {
                    value: a[1],
                    done: !1
                  };
                case 5:
                  s.label++, r = a[1], a = [0];
                  continue;
                case 7:
                  a = s.ops.pop(), s.trys.pop();
                  continue;
                default:
                  if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    s.label = a[1];
                    break;
                  }
                  if (6 === a[0] && s.label < i[1]) {
                    s.label = i[1], i = a;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2], s.ops.push(a);
                    break;
                  }
                  i[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              a = t.call(e, s);
            } catch (e) {
              a = [6, e], r = 0;
            } finally {
              n = i = 0;
            }
            if (5 & a[0]) throw a[1];
            return {
              value: a[0] ? a[1] : void 0,
              done: !0
            };
          }([a, u]);
        };
      }
    },
    en = ["BandwidthLimitExceeded", "EC2ThrottledException", "LimitExceededException", "PriorRequestNotComplete", "ProvisionedThroughputExceededException", "RequestLimitExceeded", "RequestThrottled", "RequestThrottledException", "SlowDown", "ThrottledException", "Throttling", "ThrottlingException", "TooManyRequestsException"],
    tn = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"],
    nn = function (e, t) {
      return 429 === e || en.includes(t);
    },
    rn = function (e) {
      return "Network error" === (null == e ? void 0 : e.name);
    },
    on = function (e, t) {
      return [500, 502, 503, 504].includes(e) || tn.includes(t);
    },
    sn = void 0 && (void 0).__awaiter || function (e, t, n, r) {
      return new (n || (n = Promise))(function (i, o) {
        function s(e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function u(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(s, a);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
    an = void 0 && (void 0).__generator || function (e, t) {
      var n,
        r,
        i,
        o,
        s = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: []
        };
      return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;
      function a(a) {
        return function (u) {
          return function (a) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
              if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
              switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                case 0:
                case 1:
                  i = a;
                  break;
                case 4:
                  return s.label++, {
                    value: a[1],
                    done: !1
                  };
                case 5:
                  s.label++, r = a[1], a = [0];
                  continue;
                case 7:
                  a = s.ops.pop(), s.trys.pop();
                  continue;
                default:
                  if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    s.label = a[1];
                    break;
                  }
                  if (6 === a[0] && s.label < i[1]) {
                    s.label = i[1], i = a;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2], s.ops.push(a);
                    break;
                  }
                  i[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              a = t.call(e, s);
            } catch (e) {
              a = [6, e], r = 0;
            } finally {
              n = i = 0;
            }
            if (5 & a[0]) throw a[1];
            return {
              value: a[0] ? a[1] : void 0,
              done: !0
            };
          }([a, u]);
        };
      }
    },
    un = function (e, t) {
      return function (n, r) {
        for (var i = {}, o = function (t) {
            return e(t, r);
          }, s = t.length - 1; s >= 0; s--) {
          o = (0, t[s])(r)(o, i);
        }
        return o(n);
      };
    },
    cn = un(function (e, t) {
      var n = e.url,
        r = e.method,
        i = e.headers,
        o = e.body,
        s = t.abortSignal;
      return Vt(void 0, void 0, void 0, function () {
        var e, t, a, u, c, l, h;
        return Kt(this, function (f) {
          switch (f.label) {
            case 0:
              return f.trys.push([0, 2,, 3]), [4, fetch(n, {
                method: r,
                headers: i,
                body: qt(r) ? o : void 0,
                signal: s
              })];
            case 1:
              return e = f.sent(), [3, 3];
            case 2:
              if ((t = f.sent()) instanceof TypeError) throw new Error("Network error");
              throw t;
            case 3:
              return a = {}, null === (l = e.headers) || void 0 === l || l.forEach(function (e, t) {
                a[t.toLowerCase()] = e;
              }), u = {
                statusCode: e.status,
                headers: a,
                body: null
              }, c = Object.assign(null !== (h = e.body) && void 0 !== h ? h : {}, {
                text: Lt(function () {
                  return e.text();
                }),
                blob: Lt(function () {
                  return e.blob();
                }),
                json: Lt(function () {
                  return e.json();
                })
              }), [2, Bt(Bt({}, u), {
                body: c
              })];
          }
        });
      });
    }, [function (e) {
      var t = e.userAgentHeader,
        n = void 0 === t ? "x-amz-user-agent" : t,
        r = e.userAgentValue,
        i = void 0 === r ? "" : r;
      return function (e) {
        return function (t) {
          return sn(this, void 0, void 0, function () {
            var r;
            return an(this, function (o) {
              switch (o.label) {
                case 0:
                  return 0 !== i.trim().length ? [3, 2] : [4, e(t)];
                case 1:
                  return [2, o.sent()];
                case 2:
                  return r = n.toLowerCase(), t.headers[r] = t.headers[r] ? "".concat(t.headers[r], " ").concat(i) : i, [4, e(t)];
                case 3:
                  return [2, o.sent()];
              }
            });
          });
        };
      };
    }, function (e) {
      var t = e.maxAttempts,
        n = void 0 === t ? 3 : t,
        r = e.retryDecider,
        i = e.computeDelay,
        o = e.abortSignal;
      if (n < 1) throw new Error("maxAttempts must be greater than 0");
      return function (e, t) {
        return function (s) {
          var a;
          return Gt(this, void 0, void 0, function () {
            var u, c, l, h, f, d;
            return Ht(this, function (p) {
              switch (p.label) {
                case 0:
                  c = null !== (a = t.attemptsCount) && void 0 !== a ? a : 0, h = function () {
                    if (l) return Jt(l, c), l;
                    throw Jt(u, c), u;
                  }, p.label = 1;
                case 1:
                  if ((null == o ? void 0 : o.aborted) || !(c < n)) return [3, 11];
                  p.label = 2;
                case 2:
                  return p.trys.push([2, 4,, 5]), [4, e(s)];
                case 3:
                  return l = p.sent(), u = void 0, [3, 5];
                case 4:
                  return f = p.sent(), u = f, l = void 0, [3, 5];
                case 5:
                  return c = t.attemptsCount > c ? t.attemptsCount : c + 1, t.attemptsCount = c, [4, r(l, u)];
                case 6:
                  return p.sent() ? !(null == o ? void 0 : o.aborted) && c < n ? (d = i(c), [4, zt(d, o)]) : [3, 8] : [3, 9];
                case 7:
                  p.sent(), p.label = 8;
                case 8:
                  return [3, 1];
                case 9:
                  return [2, h()];
                case 10:
                  return [3, 1];
                case 11:
                  if (null == o ? void 0 : o.aborted) throw new Error("Request aborted.");
                  return [2, h()];
              }
            });
          });
        };
      };
    }]),
    ln = void 0 && (void 0).__assign || function () {
      return ln = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }, ln.apply(this, arguments);
    },
    hn = function (e) {
      var t,
        n,
        r = e.headers,
        i = e.statusCode;
      return ln(ln({}, fn(e) ? e.$metadata : {}), {
        httpStatusCode: i,
        requestId: null !== (n = null !== (t = r["x-amzn-requestid"]) && void 0 !== t ? t : r["x-amzn-request-id"]) && void 0 !== n ? n : r["x-amz-request-id"],
        extendedRequestId: r["x-amz-id-2"],
        cfId: r["x-amz-cf-id"]
      });
    },
    fn = function (e) {
      return "object" == typeof (null == e ? void 0 : e.$metadata);
    },
    dn = void 0 && (void 0).__awaiter || function (e, t, n, r) {
      return new (n || (n = Promise))(function (i, o) {
        function s(e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function u(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(s, a);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
    pn = void 0 && (void 0).__generator || function (e, t) {
      var n,
        r,
        i,
        o,
        s = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: []
        };
      return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;
      function a(a) {
        return function (u) {
          return function (a) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
              if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
              switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                case 0:
                case 1:
                  i = a;
                  break;
                case 4:
                  return s.label++, {
                    value: a[1],
                    done: !1
                  };
                case 5:
                  s.label++, r = a[1], a = [0];
                  continue;
                case 7:
                  a = s.ops.pop(), s.trys.pop();
                  continue;
                default:
                  if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    s.label = a[1];
                    break;
                  }
                  if (6 === a[0] && s.label < i[1]) {
                    s.label = i[1], i = a;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2], s.ops.push(a);
                    break;
                  }
                  i[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              a = t.call(e, s);
            } catch (e) {
              a = [6, e], r = 0;
            } finally {
              n = i = 0;
            }
            if (5 & a[0]) throw a[1];
            return {
              value: a[0] ? a[1] : void 0,
              done: !0
            };
          }([a, u]);
        };
      }
    },
    gn = void 0 && (void 0).__read || function (e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        i,
        o = n.call(e),
        s = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value);
      } catch (e) {
        i = {
          error: e
        };
      } finally {
        try {
          r && !r.done && (n = o.return) && n.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      return s;
    },
    yn = function (e) {
      return dn(void 0, void 0, void 0, function () {
        var t, n, r, i, o, s, a, u, c;
        return pn(this, function (l) {
          switch (l.label) {
            case 0:
              return !e || e.statusCode < 300 ? [2] : [4, vn(e)];
            case 1:
              return t = l.sent(), n = function (e) {
                var t = gn(e.toString().split(/[\,\:]+/), 1)[0];
                return t.includes("#") ? t.split("#")[1] : t;
              }(null !== (a = null !== (s = null !== (o = e.headers["x-amzn-errortype"]) && void 0 !== o ? o : t.code) && void 0 !== s ? s : t.__type) && void 0 !== a ? a : "UnknownError"), r = null !== (c = null !== (u = t.message) && void 0 !== u ? u : t.Message) && void 0 !== c ? c : "Unknown error", i = new Error(r), [2, Object.assign(i, {
                name: n,
                $metadata: hn(e)
              })];
          }
        });
      });
    },
    vn = function (e) {
      return dn(void 0, void 0, void 0, function () {
        var t;
        return pn(this, function (n) {
          switch (n.label) {
            case 0:
              if (!e.body) throw new Error("Missing response payload");
              return [4, e.body.json()];
            case 1:
              return t = n.sent(), [2, Object.assign(t, {
                $metadata: hn(e)
              })];
          }
        });
      });
    },
    mn = void 0 && (void 0).__awaiter || function (e, t, n, r) {
      return new (n || (n = Promise))(function (i, o) {
        function s(e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function u(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(s, a);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
    wn = void 0 && (void 0).__generator || function (e, t) {
      var n,
        r,
        i,
        o,
        s = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: []
        };
      return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;
      function a(a) {
        return function (u) {
          return function (a) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
              if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
              switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                case 0:
                case 1:
                  i = a;
                  break;
                case 4:
                  return s.label++, {
                    value: a[1],
                    done: !1
                  };
                case 5:
                  s.label++, r = a[1], a = [0];
                  continue;
                case 7:
                  a = s.ops.pop(), s.trys.pop();
                  continue;
                default:
                  if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    s.label = a[1];
                    break;
                  }
                  if (6 === a[0] && s.label < i[1]) {
                    s.label = i[1], i = a;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2], s.ops.push(a);
                    break;
                  }
                  i[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              a = t.call(e, s);
            } catch (e) {
              a = [6, e], r = 0;
            } finally {
              n = i = 0;
            }
            if (5 & a[0]) throw a[1];
            return {
              value: a[0] ? a[1] : void 0,
              done: !0
            };
          }([a, u]);
        };
      }
    },
    bn = un(cn, [function () {
      return function (e, t) {
        return function (t) {
          return mn(this, void 0, void 0, function () {
            return wn(this, function (n) {
              return t.headers["cache-control"] = "no-store", [2, e(t)];
            });
          });
        };
      };
    }]),
    _n = {
      service: "cognito-identity",
      endpointResolver: function (e) {
        var t = e.region;
        return {
          url: new URL("https://cognito-identity.".concat(t, ".").concat(Ft(t)))
        };
      },
      retryDecider: (Nt = yn, function (e, t) {
        return Xt(void 0, void 0, void 0, function () {
          var n, r, i, o;
          return Qt(this, function (s) {
            switch (s.label) {
              case 0:
                return null == t ? [3, 1] : (r = t, [3, 3]);
              case 1:
                return [4, Nt(e)];
              case 2:
                r = s.sent(), s.label = 3;
              case 3:
                return n = (null !== (o = r) && void 0 !== o ? o : {}).name, i = null == e ? void 0 : e.statusCode, [2, rn(t) || nn(i, n) || Zt(n) || on(i, n)];
            }
          });
        });
      }),
      computeDelay: function (e) {
        var t = Ve($t)(e);
        return !1 === t ? $t : t;
      },
      userAgentValue: Ce()
    };
  be(function () {
    _n.userAgentValue = Ce();
  });
  var Sn = function (e) {
      return {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCognitoIdentityService.".concat(e)
      };
    },
    An = function (e, t, n) {
      return {
        headers: t,
        url: e.url,
        body: n,
        method: "POST"
      };
    },
    In = void 0 && (void 0).__assign || function () {
      return In = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }, In.apply(this, arguments);
    },
    Cn = void 0 && (void 0).__awaiter || function (e, t, n, r) {
      return new (n || (n = Promise))(function (i, o) {
        function s(e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function u(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(s, a);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
    En = void 0 && (void 0).__generator || function (e, t) {
      var n,
        r,
        i,
        o,
        s = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: []
        };
      return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;
      function a(a) {
        return function (u) {
          return function (a) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
              if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
              switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                case 0:
                case 1:
                  i = a;
                  break;
                case 4:
                  return s.label++, {
                    value: a[1],
                    done: !1
                  };
                case 5:
                  s.label++, r = a[1], a = [0];
                  continue;
                case 7:
                  a = s.ops.pop(), s.trys.pop();
                  continue;
                default:
                  if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    s.label = a[1];
                    break;
                  }
                  if (6 === a[0] && s.label < i[1]) {
                    s.label = i[1], i = a;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2], s.ops.push(a);
                    break;
                  }
                  i[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              a = t.call(e, s);
            } catch (e) {
              a = [6, e], r = 0;
            } finally {
              n = i = 0;
            }
            if (5 & a[0]) throw a[1];
            return {
              value: a[0] ? a[1] : void 0,
              done: !0
            };
          }([a, u]);
        };
      }
    },
    Tn = function (e, t, n, r) {
      return function (i, o) {
        return Cn(void 0, void 0, void 0, function () {
          var s, a, u, c;
          return En(this, function (l) {
            switch (l.label) {
              case 0:
                return [4, (s = In(In({}, r), i)).endpointResolver(s, o)];
              case 1:
                return a = l.sent(), [4, t(o, a)];
              case 2:
                return u = l.sent(), [4, e(u, In({}, s))];
              case 3:
                return c = l.sent(), [4, n(c)];
              case 4:
                return [2, l.sent()];
            }
          });
        });
      };
    },
    Un = void 0 && (void 0).__awaiter || function (e, t, n, r) {
      return new (n || (n = Promise))(function (i, o) {
        function s(e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function u(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(s, a);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
    kn = void 0 && (void 0).__generator || function (e, t) {
      var n,
        r,
        i,
        o,
        s = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: []
        };
      return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;
      function a(a) {
        return function (u) {
          return function (a) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
              if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
              switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                case 0:
                case 1:
                  i = a;
                  break;
                case 4:
                  return s.label++, {
                    value: a[1],
                    done: !1
                  };
                case 5:
                  s.label++, r = a[1], a = [0];
                  continue;
                case 7:
                  a = s.ops.pop(), s.trys.pop();
                  continue;
                default:
                  if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    s.label = a[1];
                    break;
                  }
                  if (6 === a[0] && s.label < i[1]) {
                    s.label = i[1], i = a;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2], s.ops.push(a);
                    break;
                  }
                  i[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              a = t.call(e, s);
            } catch (e) {
              a = [6, e], r = 0;
            } finally {
              n = i = 0;
            }
            if (5 & a[0]) throw a[1];
            return {
              value: a[0] ? a[1] : void 0,
              done: !0
            };
          }([a, u]);
        };
      }
    },
    Pn = Tn(bn, function (e, t) {
      var n = Sn("GetId"),
        r = JSON.stringify(e);
      return An(t, n, r);
    }, function (e) {
      return Un(void 0, void 0, void 0, function () {
        return kn(this, function (t) {
          switch (t.label) {
            case 0:
              return e.statusCode >= 300 ? [4, yn(e)] : [3, 2];
            case 1:
              throw t.sent();
            case 2:
              return [4, vn(e)];
            case 3:
              return [2, {
                IdentityId: t.sent().IdentityId,
                $metadata: hn(e)
              }];
          }
        });
      });
    }, _n),
    On = void 0 && (void 0).__awaiter || function (e, t, n, r) {
      return new (n || (n = Promise))(function (i, o) {
        function s(e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function u(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(s, a);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
    Rn = void 0 && (void 0).__generator || function (e, t) {
      var n,
        r,
        i,
        o,
        s = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: []
        };
      return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;
      function a(a) {
        return function (u) {
          return function (a) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
              if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
              switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                case 0:
                case 1:
                  i = a;
                  break;
                case 4:
                  return s.label++, {
                    value: a[1],
                    done: !1
                  };
                case 5:
                  s.label++, r = a[1], a = [0];
                  continue;
                case 7:
                  a = s.ops.pop(), s.trys.pop();
                  continue;
                default:
                  if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    s.label = a[1];
                    break;
                  }
                  if (6 === a[0] && s.label < i[1]) {
                    s.label = i[1], i = a;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2], s.ops.push(a);
                    break;
                  }
                  i[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              a = t.call(e, s);
            } catch (e) {
              a = [6, e], r = 0;
            } finally {
              n = i = 0;
            }
            if (5 & a[0]) throw a[1];
            return {
              value: a[0] ? a[1] : void 0,
              done: !0
            };
          }([a, u]);
        };
      }
    },
    Dn = function (e) {
      return void 0 === e && (e = {}), {
        AccessKeyId: e.AccessKeyId,
        SecretKey: e.SecretKey,
        SessionToken: e.SessionToken,
        Expiration: new Date(1e3 * e.Expiration)
      };
    },
    xn = Tn(bn, function (e, t) {
      var n = Sn("GetCredentialsForIdentity"),
        r = JSON.stringify(e);
      return An(t, n, r);
    }, function (e) {
      return On(void 0, void 0, void 0, function () {
        var t;
        return Rn(this, function (n) {
          switch (n.label) {
            case 0:
              return e.statusCode >= 300 ? [4, yn(e)] : [3, 2];
            case 1:
              throw n.sent();
            case 2:
              return [4, vn(e)];
            case 3:
              return [2, {
                IdentityId: (t = n.sent()).IdentityId,
                Credentials: Dn(t.Credentials),
                $metadata: hn(e)
              }];
          }
        });
      });
    }, _n),
    Fn = void 0 && (void 0).__assign || function () {
      return Fn = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }, Fn.apply(this, arguments);
    },
    Mn = void 0 && (void 0).__awaiter || function (e, t, n, r) {
      return new (n || (n = Promise))(function (i, o) {
        function s(e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function u(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(s, a);
        }
        u((r = r.apply(e, t || [])).next());
      });
    },
    jn = void 0 && (void 0).__generator || function (e, t) {
      var n,
        r,
        i,
        o,
        s = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: []
        };
      return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;
      function a(a) {
        return function (u) {
          return function (a) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
              if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
              switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                case 0:
                case 1:
                  i = a;
                  break;
                case 4:
                  return s.label++, {
                    value: a[1],
                    done: !1
                  };
                case 5:
                  s.label++, r = a[1], a = [0];
                  continue;
                case 7:
                  a = s.ops.pop(), s.trys.pop();
                  continue;
                default:
                  if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    s.label = a[1];
                    break;
                  }
                  if (6 === a[0] && s.label < i[1]) {
                    s.label = i[1], i = a;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2], s.ops.push(a);
                    break;
                  }
                  i[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              a = t.call(e, s);
            } catch (e) {
              a = [6, e], r = 0;
            } finally {
              n = i = 0;
            }
            if (5 & a[0]) throw a[1];
            return {
              value: a[0] ? a[1] : void 0,
              done: !0
            };
          }([a, u]);
        };
      }
    },
    Nn = new oe("Credentials"),
    Ln = "undefined" != typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("amplify_default") : "@@amplify_default",
    Bn = function () {
      function e(e) {
        this._gettingCredPromise = null, this._refreshHandlers = {}, this.Auth = void 0, this.configure(e), this._refreshHandlers.google = Tt.refreshGoogleToken, this._refreshHandlers.facebook = Ut.refreshFacebookToken;
      }
      return e.prototype.getModuleName = function () {
        return "Credentials";
      }, e.prototype.getCredSource = function () {
        return this._credentials_source;
      }, e.prototype.configure = function (e) {
        if (!e) return this._config || {};
        this._config = Object.assign({}, this._config, e);
        var t,
          n,
          r,
          i = this._config.refreshHandlers;
        return i && (this._refreshHandlers = Fn(Fn({}, this._refreshHandlers), i)), this._storage = this._config.storage, this._storage || (this._storage = new Ot().getStorage()), this._storageSync = Promise.resolve(), "function" == typeof this._storage.sync && (this._storageSync = this._storage.sync()), t = "credentials_configured", n = null, r = "Credentials has been configured successfully", Re.dispatch("core", {
          event: t,
          data: n,
          message: r
        }, "Credentials", Ln), this._config;
      }, e.prototype.get = function () {
        return Nn.debug("getting credentials"), this._pickupCredentials();
      }, e.prototype._getCognitoIdentityIdStorageKey = function (e) {
        return "".concat("CognitoIdentityId-").concat(e);
      }, e.prototype._pickupCredentials = function () {
        return Nn.debug("picking up credentials"), this._gettingCredPromise && this._gettingCredPromise.isPending() ? Nn.debug("getting old cred promise") : (Nn.debug("getting new cred promise"), this._gettingCredPromise = function (e) {
          if (e.isResolved) return e;
          var t = !0,
            n = !1,
            r = !1,
            i = e.then(function (e) {
              return r = !0, t = !1, e;
            }, function (e) {
              throw n = !0, t = !1, e;
            });
          return i.isFullfilled = function () {
            return r;
          }, i.isPending = function () {
            return t;
          }, i.isRejected = function () {
            return n;
          }, i;
        }(this._keepAlive())), this._gettingCredPromise;
      }, e.prototype._keepAlive = function () {
        return Mn(this, void 0, void 0, function () {
          var e, t, n, r, i, o, s;
          return jn(this, function (a) {
            switch (a.label) {
              case 0:
                if (Nn.debug("checking if credentials exists and not expired"), (e = this._credentials) && !this._isExpired(e) && !this._isPastTTL()) return Nn.debug("credentials not changed and not expired, directly return"), [2, Promise.resolve(e)];
                if (Nn.debug("need to get a new credential or refresh the existing one"), t = this.Auth, !(n = void 0 === t ? ue.Auth : t) || "function" != typeof n.currentUserCredentials) return [2, this._setCredentialsForGuest()];
                if (this._isExpired(e) || !this._isPastTTL()) return [3, 6];
                Nn.debug("ttl has passed but token is not yet expired"), a.label = 1;
              case 1:
                return a.trys.push([1, 5,, 6]), [4, n.currentUserPoolUser()];
              case 2:
                return r = a.sent(), [4, n.currentSession()];
              case 3:
                return i = a.sent(), o = i.refreshToken, [4, new Promise(function (e, t) {
                  r.refreshSession(o, function (n, r) {
                    return n ? t(n) : e(r);
                  });
                })];
              case 4:
                return a.sent(), [3, 6];
              case 5:
                return s = a.sent(), Nn.debug("Error attempting to refreshing the session", s), [3, 6];
              case 6:
                return [2, n.currentUserCredentials()];
            }
          });
        });
      }, e.prototype.refreshFederatedToken = function (e) {
        Nn.debug("Getting federated credentials");
        var t = e.provider,
          n = e.user,
          r = e.token,
          i = e.identity_id,
          o = e.expires_at;
        o = 1970 === new Date(o).getFullYear() ? 1e3 * o : o;
        var s = this;
        return Nn.debug("checking if federated jwt token expired"), o > new Date().getTime() ? (Nn.debug("token not expired"), this._setCredentialsFromFederation({
          provider: t,
          token: r,
          user: n,
          identity_id: i,
          expires_at: o
        })) : s._refreshHandlers[t] && "function" == typeof s._refreshHandlers[t] ? (Nn.debug("getting refreshed jwt token from federation provider"), this._providerRefreshWithRetry({
          refreshHandler: s._refreshHandlers[t],
          provider: t,
          user: n
        })) : (Nn.debug("no refresh handler for provider:", t), this.clear(), Promise.reject("no refresh handler for provider"));
      }, e.prototype._providerRefreshWithRetry = function (e) {
        var t = this,
          n = e.refreshHandler,
          r = e.provider,
          i = e.user;
        return Ke(n, [], 1e4).then(function (e) {
          return Nn.debug("refresh federated token sucessfully", e), t._setCredentialsFromFederation({
            provider: r,
            token: e.token,
            user: i,
            identity_id: e.identity_id,
            expires_at: e.expires_at
          });
        }).catch(function (e) {
          return "string" == typeof e && 0 === e.toLowerCase().lastIndexOf("network error", e.length) || t.clear(), Nn.debug("refresh federated token failed", e), Promise.reject("refreshing federation token failed: " + e);
        });
      }, e.prototype._isExpired = function (e) {
        if (!e) return Nn.debug("no credentials for expiration check"), !0;
        Nn.debug("are these credentials expired?", e);
        var t = Date.now();
        return e.expiration.getTime() <= t;
      }, e.prototype._isPastTTL = function () {
        return this._nextCredentialsRefresh <= Date.now();
      }, e.prototype._setCredentialsForGuest = function () {
        var e;
        return Mn(this, void 0, void 0, function () {
          var t,
            n,
            r,
            i,
            o,
            s,
            a,
            u,
            c,
            l,
            h = this;
          return jn(this, function (f) {
            switch (f.label) {
              case 0:
                return Nn.debug("setting credentials for guest"), (null === (e = this._config) || void 0 === e ? void 0 : e.identityPoolId) || (this._config = Object.assign({}, this._config, yt(this._config || {}).Auth)), t = this._config, n = t.identityPoolId, r = t.region, i = t.mandatorySignIn, o = t.identityPoolRegion, i ? [2, Promise.reject("cannot get guest credentials when mandatory signin enabled")] : n ? o || r ? (a = this, [4, this._getGuestIdentityId()]) : (Nn.debug("region is not configured for getting the credentials"), [2, Promise.reject("region is not configured for getting the credentials")]) : (Nn.debug("No Cognito Identity pool provided for unauthenticated access"), [2, Promise.reject("No Cognito Identity pool provided for unauthenticated access")]);
              case 1:
                return s = a._identityId = f.sent(), u = {
                  region: null != o ? o : r
                }, c = function () {
                  return Mn(h, void 0, void 0, function () {
                    var e, t;
                    return jn(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return s ? [3, 2] : [4, Pn(u, {
                            IdentityPoolId: n
                          })];
                        case 1:
                          e = r.sent().IdentityId, this._identityId = e, r.label = 2;
                        case 2:
                          return [4, xn(u, {
                            IdentityId: this._identityId
                          })];
                        case 3:
                          return t = r.sent().Credentials, [2, {
                            identityId: this._identityId,
                            accessKeyId: t.AccessKeyId,
                            secretAccessKey: t.SecretKey,
                            sessionToken: t.SessionToken,
                            expiration: t.Expiration
                          }];
                      }
                    });
                  });
                }, l = c().catch(function (e) {
                  return Mn(h, void 0, void 0, function () {
                    return jn(this, function (t) {
                      throw e;
                    });
                  });
                }), [2, this._loadCredentials(l, "guest", !1, null).then(function (e) {
                  return e;
                }).catch(function (e) {
                  return Mn(h, void 0, void 0, function () {
                    var t,
                      r = this;
                    return jn(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return "ResourceNotFoundException" !== e.name || e.message !== "Identity '".concat(s, "' not found.") ? [3, 2] : (Nn.debug("Failed to load guest credentials"), [4, this._removeGuestIdentityId()]);
                        case 1:
                          return i.sent(), t = function () {
                            return Mn(r, void 0, void 0, function () {
                              var e, t;
                              return jn(this, function (r) {
                                switch (r.label) {
                                  case 0:
                                    return [4, Pn(u, {
                                      IdentityPoolId: n
                                    })];
                                  case 1:
                                    return e = r.sent().IdentityId, this._identityId = e, [4, xn(u, {
                                      IdentityId: e
                                    })];
                                  case 2:
                                    return t = r.sent().Credentials, [2, {
                                      identityId: e,
                                      accessKeyId: t.AccessKeyId,
                                      secretAccessKey: t.SecretKey,
                                      sessionToken: t.SessionToken,
                                      expiration: t.Expiration
                                    }];
                                }
                              });
                            });
                          }, l = t().catch(function (e) {
                            return Mn(r, void 0, void 0, function () {
                              return jn(this, function (t) {
                                throw e;
                              });
                            });
                          }), [2, this._loadCredentials(l, "guest", !1, null)];
                        case 2:
                          return [2, e];
                      }
                    });
                  });
                })];
            }
          });
        });
      }, e.prototype._setCredentialsFromFederation = function (e) {
        var t = this,
          n = e.provider,
          r = e.token,
          i = e.identity_id,
          o = {
            google: "accounts.google.com",
            facebook: "graph.facebook.com",
            amazon: "www.amazon.com",
            developer: "cognito-identity.amazonaws.com"
          }[n] || n;
        if (!o) return Promise.reject("You must specify a federated provider");
        var s = {};
        s[o] = r;
        var a = this._config,
          u = a.identityPoolId,
          c = a.region,
          l = a.identityPoolRegion;
        if (!u) return Nn.debug("No Cognito Federated Identity pool provided"), Promise.reject("No Cognito Federated Identity pool provided");
        if (!l && !c) return Nn.debug("region is not configured for getting the credentials"), Promise.reject("region is not configured for getting the credentials");
        var h = {
            region: null != l ? l : c
          },
          f = Mn(t, void 0, void 0, function () {
            var e, t;
            return jn(this, function (n) {
              switch (n.label) {
                case 0:
                  return i ? [3, 2] : [4, Pn(h, {
                    IdentityPoolId: u,
                    Logins: s
                  })];
                case 1:
                  e = n.sent().IdentityId, i = e, n.label = 2;
                case 2:
                  return [4, xn(h, {
                    IdentityId: i,
                    Logins: s
                  })];
                case 3:
                  return t = n.sent().Credentials, [2, {
                    identityId: i,
                    accessKeyId: t.AccessKeyId,
                    secretAccessKey: t.SecretKey,
                    sessionToken: t.SessionToken,
                    expiration: t.Expiration
                  }];
              }
            });
          }).catch(function (e) {
            return Mn(t, void 0, void 0, function () {
              return jn(this, function (t) {
                throw e;
              });
            });
          });
        return this._loadCredentials(f, "federated", !0, e);
      }, e.prototype._setCredentialsFromSession = function (e) {
        var t = this;
        Nn.debug("set credentials from session");
        var n = e.getIdToken().getJwtToken(),
          r = this._config,
          i = r.region,
          o = r.userPoolId,
          s = r.identityPoolId,
          a = r.identityPoolRegion;
        if (!s) return Nn.debug("No Cognito Federated Identity pool provided"), Promise.reject("No Cognito Federated Identity pool provided");
        if (!a && !i) return Nn.debug("region is not configured for getting the credentials"), Promise.reject("region is not configured for getting the credentials");
        var u = {};
        u["cognito-idp." + i + ".amazonaws.com/" + o] = n;
        var c = {
            region: null != a ? a : i
          },
          l = Mn(t, void 0, void 0, function () {
            var e, t, n, r, i, o, a, l, h, f;
            return jn(this, function (d) {
              switch (d.label) {
                case 0:
                  return [4, this._getGuestIdentityId()];
                case 1:
                  return (e = d.sent()) ? [3, 3] : [4, Pn(c, {
                    IdentityPoolId: s,
                    Logins: u
                  })];
                case 2:
                  n = d.sent().IdentityId, t = n, d.label = 3;
                case 3:
                  return [4, xn(c, {
                    IdentityId: e || t,
                    Logins: u
                  })];
                case 4:
                  return r = d.sent(), i = r.Credentials, o = i.AccessKeyId, a = i.Expiration, l = i.SecretKey, h = i.SessionToken, f = r.IdentityId, this._identityId = f, e ? (Nn.debug("The guest identity ".concat(e, " has been successfully linked to the logins")), e === f && Nn.debug("The guest identity ".concat(e, " has become the primary identity")), [4, this._removeGuestIdentityId()]) : [3, 6];
                case 5:
                  d.sent(), d.label = 6;
                case 6:
                  return [2, {
                    accessKeyId: o,
                    secretAccessKey: l,
                    sessionToken: h,
                    expiration: a,
                    identityId: f
                  }];
              }
            });
          }).catch(function (e) {
            return Mn(t, void 0, void 0, function () {
              return jn(this, function (t) {
                throw e;
              });
            });
          });
        return this._loadCredentials(l, "userPool", !0, null);
      }, e.prototype._loadCredentials = function (e, t, n, r) {
        var i = this,
          o = this;
        return new Promise(function (s, a) {
          e.then(function (e) {
            return Mn(i, void 0, void 0, function () {
              var i, a, u, c, l;
              return jn(this, function (h) {
                switch (h.label) {
                  case 0:
                    if (Nn.debug("Load credentials successfully", e), this._identityId && !e.identityId && (e.identityId = this._identityId), o._credentials = e, o._credentials.authenticated = n, o._credentials_source = t, o._nextCredentialsRefresh = new Date().getTime() + 3e6, "federated" === t) {
                      i = Object.assign({
                        id: this._credentials.identityId
                      }, r.user), a = r.provider, u = r.token, c = r.expires_at, l = r.identity_id;
                      try {
                        this._storage.setItem("aws-amplify-federatedInfo", JSON.stringify({
                          provider: a,
                          token: u,
                          user: i,
                          expires_at: c,
                          identity_id: l
                        }));
                      } catch (e) {
                        Nn.debug("Failed to put federated info into auth storage", e);
                      }
                    }
                    return "guest" !== t ? [3, 2] : [4, this._setGuestIdentityId(e.identityId)];
                  case 1:
                    h.sent(), h.label = 2;
                  case 2:
                    return s(o._credentials), [2];
                }
              });
            });
          }).catch(function (t) {
            if (t) return Nn.debug("Failed to load credentials", e), Nn.debug("Error loading credentials", t), void a(t);
          });
        });
      }, e.prototype.set = function (e, t) {
        return "session" === t ? this._setCredentialsFromSession(e) : "federation" === t ? this._setCredentialsFromFederation(e) : "guest" === t ? this._setCredentialsForGuest() : (Nn.debug("no source specified for setting credentials"), Promise.reject("invalid source"));
      }, e.prototype.clear = function () {
        return Mn(this, void 0, void 0, function () {
          return jn(this, function (e) {
            return this._credentials = null, this._credentials_source = null, Nn.debug("removing aws-amplify-federatedInfo from storage"), this._storage.removeItem("aws-amplify-federatedInfo"), [2];
          });
        });
      }, e.prototype._getGuestIdentityId = function () {
        return Mn(this, void 0, void 0, function () {
          var e, t;
          return jn(this, function (n) {
            switch (n.label) {
              case 0:
                e = this._config.identityPoolId, n.label = 1;
              case 1:
                return n.trys.push([1, 3,, 4]), [4, this._storageSync];
              case 2:
                return n.sent(), [2, this._storage.getItem(this._getCognitoIdentityIdStorageKey(e))];
              case 3:
                return t = n.sent(), Nn.debug("Failed to get the cached guest identityId", t), [3, 4];
              case 4:
                return [2];
            }
          });
        });
      }, e.prototype._setGuestIdentityId = function (e) {
        return Mn(this, void 0, void 0, function () {
          var t, n;
          return jn(this, function (r) {
            switch (r.label) {
              case 0:
                t = this._config.identityPoolId, r.label = 1;
              case 1:
                return r.trys.push([1, 3,, 4]), [4, this._storageSync];
              case 2:
                return r.sent(), this._storage.setItem(this._getCognitoIdentityIdStorageKey(t), e), [3, 4];
              case 3:
                return n = r.sent(), Nn.debug("Failed to cache guest identityId", n), [3, 4];
              case 4:
                return [2];
            }
          });
        });
      }, e.prototype._removeGuestIdentityId = function () {
        return Mn(this, void 0, void 0, function () {
          var e;
          return jn(this, function (t) {
            return e = this._config.identityPoolId, Nn.debug("removing ".concat(this._getCognitoIdentityIdStorageKey(e), " from storage")), this._storage.removeItem(this._getCognitoIdentityIdStorageKey(e)), [2];
          });
        });
      }, e.prototype.shear = function (e) {
        return {
          accessKeyId: e.accessKeyId,
          sessionToken: e.sessionToken,
          secretAccessKey: e.secretAccessKey,
          identityId: e.identityId,
          authenticated: e.authenticated
        };
      }, e;
    }(),
    Vn = new Bn(null);
  ue.register(Vn);
  /*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   */
  var Kn = function (e, t) {
      if ("string" != typeof e) throw new TypeError("argument str must be a string");
      for (var n = {}, r = t || {}, i = e.split(";"), o = r.decode || Wn, s = 0; s < i.length; s++) {
        var a = i[s],
          u = a.indexOf("=");
        if (!(u < 0)) {
          var c = a.substring(0, u).trim();
          if (null == n[c]) {
            var l = a.substring(u + 1, a.length).trim();
            '"' === l[0] && (l = l.slice(1, -1)), n[c] = zn(l, o);
          }
        }
      }
      return n;
    },
    qn = function (e, t, n) {
      var r = n || {},
        i = r.encode || Gn;
      if ("function" != typeof i) throw new TypeError("option encode is invalid");
      if (!Hn.test(e)) throw new TypeError("argument name is invalid");
      var o = i(t);
      if (o && !Hn.test(o)) throw new TypeError("argument val is invalid");
      var s = e + "=" + o;
      if (null != r.maxAge) {
        var a = r.maxAge - 0;
        if (isNaN(a) || !isFinite(a)) throw new TypeError("option maxAge is invalid");
        s += "; Max-Age=" + Math.floor(a);
      }
      if (r.domain) {
        if (!Hn.test(r.domain)) throw new TypeError("option domain is invalid");
        s += "; Domain=" + r.domain;
      }
      if (r.path) {
        if (!Hn.test(r.path)) throw new TypeError("option path is invalid");
        s += "; Path=" + r.path;
      }
      if (r.expires) {
        if ("function" != typeof r.expires.toUTCString) throw new TypeError("option expires is invalid");
        s += "; Expires=" + r.expires.toUTCString();
      }
      r.httpOnly && (s += "; HttpOnly");
      r.secure && (s += "; Secure");
      if (r.sameSite) {
        switch ("string" == typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite) {
          case !0:
            s += "; SameSite=Strict";
            break;
          case "lax":
            s += "; SameSite=Lax";
            break;
          case "strict":
            s += "; SameSite=Strict";
            break;
          case "none":
            s += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return s;
    },
    Wn = decodeURIComponent,
    Gn = encodeURIComponent,
    Hn = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function zn(e, t) {
    try {
      return t(e);
    } catch (t) {
      return e;
    }
  }
  function Jn(e, t) {
    void 0 === t && (t = {});
    var n = function (e) {
      if (e && "j" === e[0] && ":" === e[1]) return e.substr(2);
      return e;
    }(e);
    if (function (e, t) {
      return void 0 === t && (t = !e || "{" !== e[0] && "[" !== e[0] && '"' !== e[0]), !t;
    }(n, t.doNotParse)) try {
      return JSON.parse(n);
    } catch (e) {}
    return e;
  }
  for (var $n = void 0 && (void 0).__assign || function () {
      return $n = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }, $n.apply(this, arguments);
    }, Yn = function () {
      function e(e, t) {
        var n = this;
        this.changeListeners = [], this.HAS_DOCUMENT_COOKIE = !1, this.cookies = function (e, t) {
          return "string" == typeof e ? Kn(e, t) : "object" == typeof e && null !== e ? e : {};
        }(e, t), new Promise(function () {
          n.HAS_DOCUMENT_COOKIE = "object" == typeof document && "string" == typeof document.cookie;
        }).catch(function () {});
      }
      return e.prototype._updateBrowserValues = function (e) {
        this.HAS_DOCUMENT_COOKIE && (this.cookies = Kn(document.cookie, e));
      }, e.prototype._emitChange = function (e) {
        for (var t = 0; t < this.changeListeners.length; ++t) this.changeListeners[t](e);
      }, e.prototype.get = function (e, t, n) {
        return void 0 === t && (t = {}), this._updateBrowserValues(n), Jn(this.cookies[e], t);
      }, e.prototype.getAll = function (e, t) {
        void 0 === e && (e = {}), this._updateBrowserValues(t);
        var n = {};
        for (var r in this.cookies) n[r] = Jn(this.cookies[r], e);
        return n;
      }, e.prototype.set = function (e, t, n) {
        var r;
        "object" == typeof t && (t = JSON.stringify(t)), this.cookies = $n($n({}, this.cookies), ((r = {})[e] = t, r)), this.HAS_DOCUMENT_COOKIE && (document.cookie = qn(e, t, n)), this._emitChange({
          name: e,
          value: t,
          options: n
        });
      }, e.prototype.remove = function (e, t) {
        var n = t = $n($n({}, t), {
          expires: new Date(1970, 1, 1, 0, 0, 1),
          maxAge: 0
        });
        this.cookies = $n({}, this.cookies), delete this.cookies[e], this.HAS_DOCUMENT_COOKIE && (document.cookie = qn(e, "", n)), this._emitChange({
          name: e,
          value: void 0,
          options: t
        });
      }, e.prototype.addChangeListener = function (e) {
        this.changeListeners.push(e);
      }, e.prototype.removeChangeListener = function (e) {
        var t = this.changeListeners.indexOf(e);
        t >= 0 && this.changeListeners.splice(t, 1);
      }, e;
    }(), Zn = void 0 && (void 0).__assign || function () {
      return Zn = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }, Zn.apply(this, arguments);
    }, Xn = De().isBrowser, Qn = function () {
      function e(e) {
        void 0 === e && (e = {}), this.cookies = new Yn(), this.store = Xn ? window.localStorage : Object.create(null), this.cookies = e.req ? new Yn(decodeURIComponent(e.req.headers.cookie)) : new Yn(), Object.assign(this.store, this.cookies.getAll());
      }
      return Object.defineProperty(e.prototype, "length", {
        get: function () {
          return Object.entries(this.store).length;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.clear = function () {
        var e = this;
        Array.from(new Array(this.length)).map(function (t, n) {
          return e.key(n);
        }).forEach(function (t) {
          return e.removeItem(t);
        });
      }, e.prototype.getItem = function (e) {
        return this.getLocalItem(e);
      }, e.prototype.getLocalItem = function (e) {
        return Object.prototype.hasOwnProperty.call(this.store, e) ? this.store[e] : null;
      }, e.prototype.getUniversalItem = function (e) {
        return this.cookies.get(e);
      }, e.prototype.key = function (e) {
        return Object.keys(this.store)[e];
      }, e.prototype.removeItem = function (e) {
        this.removeLocalItem(e), this.removeUniversalItem(e);
      }, e.prototype.removeLocalItem = function (e) {
        delete this.store[e];
      }, e.prototype.removeUniversalItem = function (e) {
        this.cookies.remove(e, {
          path: "/"
        });
      }, e.prototype.setItem = function (e, t) {
        this.setLocalItem(e, t);
        var n = e.split(".").pop();
        ["LastAuthUser", "accessToken", "refreshToken", "idToken"].includes(null != n ? n : "") && this.setUniversalItem(e, t, {
          expires: new Date(Date.now() + 31536e6)
        });
      }, e.prototype.setLocalItem = function (e, t) {
        this.store[e] = t;
      }, e.prototype.setUniversalItem = function (e, t, n) {
        void 0 === n && (n = {}), this.cookies.set(e, t, Zn(Zn({}, n), {
          path: "/",
          sameSite: !0,
          secure: !Xn || "localhost" !== window.location.hostname
        }));
      }, e;
    }(), er = function () {
      function e(e) {
        var t = e || {},
          n = t.ValidationData,
          r = t.Username,
          i = t.Password,
          o = t.AuthParameters,
          s = t.ClientMetadata;
        this.validationData = n || {}, this.authParameters = o || {}, this.clientMetadata = s || {}, this.username = r, this.password = i;
      }
      var t = e.prototype;
      return t.getUsername = function () {
        return this.username;
      }, t.getPassword = function () {
        return this.password;
      }, t.getValidationData = function () {
        return this.validationData;
      }, t.getAuthParameters = function () {
        return this.authParameters;
      }, t.getClientMetadata = function () {
        return this.clientMetadata;
      }, e;
    }(), tr = {}, nr = {
      byteLength: function (e) {
        var t = ur(e),
          n = t[0],
          r = t[1];
        return 3 * (n + r) / 4 - r;
      },
      toByteArray: function (e) {
        var t,
          n,
          r = ur(e),
          i = r[0],
          o = r[1],
          s = new or(function (e, t, n) {
            return 3 * (t + n) / 4 - n;
          }(0, i, o)),
          a = 0,
          u = o > 0 ? i - 4 : i;
        for (n = 0; n < u; n += 4) t = ir[e.charCodeAt(n)] << 18 | ir[e.charCodeAt(n + 1)] << 12 | ir[e.charCodeAt(n + 2)] << 6 | ir[e.charCodeAt(n + 3)], s[a++] = t >> 16 & 255, s[a++] = t >> 8 & 255, s[a++] = 255 & t;
        2 === o && (t = ir[e.charCodeAt(n)] << 2 | ir[e.charCodeAt(n + 1)] >> 4, s[a++] = 255 & t);
        1 === o && (t = ir[e.charCodeAt(n)] << 10 | ir[e.charCodeAt(n + 1)] << 4 | ir[e.charCodeAt(n + 2)] >> 2, s[a++] = t >> 8 & 255, s[a++] = 255 & t);
        return s;
      },
      fromByteArray: function (e) {
        for (var t, n = e.length, r = n % 3, i = [], o = 16383, s = 0, a = n - r; s < a; s += o) i.push(cr(e, s, s + o > a ? a : s + o));
        1 === r ? (t = e[n - 1], i.push(rr[t >> 2] + rr[t << 4 & 63] + "==")) : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], i.push(rr[t >> 10] + rr[t >> 4 & 63] + rr[t << 2 & 63] + "="));
        return i.join("");
      }
    }, rr = [], ir = [], or = "undefined" != typeof Uint8Array ? Uint8Array : Array, sr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ar = 0; ar < 64; ++ar) rr[ar] = sr[ar], ir[sr.charCodeAt(ar)] = ar;
  function ur(e) {
    var t = e.length;
    if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var n = e.indexOf("=");
    return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4];
  }
  function cr(e, t, n) {
    for (var r, i, o = [], s = t; s < n; s += 3) r = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), o.push(rr[(i = r) >> 18 & 63] + rr[i >> 12 & 63] + rr[i >> 6 & 63] + rr[63 & i]);
    return o.join("");
  }
  ir["-".charCodeAt(0)] = 62, ir["_".charCodeAt(0)] = 63;
  var lr,
    hr = {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
      read: function (e, t, n, r, i) {
        var o,
          s,
          a = 8 * i - r - 1,
          u = (1 << a) - 1,
          c = u >> 1,
          l = -7,
          h = n ? i - 1 : 0,
          f = n ? -1 : 1,
          d = e[t + h];
        for (h += f, o = d & (1 << -l) - 1, d >>= -l, l += a; l > 0; o = 256 * o + e[t + h], h += f, l -= 8);
        for (s = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; s = 256 * s + e[t + h], h += f, l -= 8);
        if (0 === o) o = 1 - c;else {
          if (o === u) return s ? NaN : 1 / 0 * (d ? -1 : 1);
          s += Math.pow(2, r), o -= c;
        }
        return (d ? -1 : 1) * s * Math.pow(2, o - r);
      },
      write: function (e, t, n, r, i, o) {
        var s,
          a,
          u,
          c = 8 * o - i - 1,
          l = (1 << c) - 1,
          h = l >> 1,
          f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          d = r ? 0 : o - 1,
          p = r ? 1 : -1,
          g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t += s + h >= 1 ? f / u : f * Math.pow(2, 1 - h)) * u >= 2 && (s++, u /= 2), s + h >= l ? (a = 0, s = l) : s + h >= 1 ? (a = (t * u - 1) * Math.pow(2, i), s += h) : (a = t * Math.pow(2, h - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + d] = 255 & a, d += p, a /= 256, i -= 8);
        for (s = s << i | a, c += i; c > 0; e[n + d] = 255 & s, d += p, s /= 256, c -= 8);
        e[n + d - p] |= 128 * g;
      }
    },
    fr = {}.toString,
    dr = Array.isArray || function (e) {
      return "[object Array]" == fr.call(e);
    };
  if (
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <http://feross.org>
   * @license  MIT
   */
  function (e) {
    var t = nr,
      n = hr,
      r = dr;
    function i() {
      return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }
    function o(e, t) {
      if (i() < t) throw new RangeError("Invalid typed array length");
      return s.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = s.prototype : (null === e && (e = new s(t)), e.length = t), e;
    }
    function s(e, t, n) {
      if (!(s.TYPED_ARRAY_SUPPORT || this instanceof s)) return new s(e, t, n);
      if ("number" == typeof e) {
        if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
        return c(this, e);
      }
      return a(this, e, t, n);
    }
    function a(e, t, n, i) {
      if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
      return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, n, r) {
        if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
        if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
        t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
        s.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = s.prototype : e = l(e, t);
        return e;
      }(e, t, n, i) : "string" == typeof t ? function (e, t, n) {
        "string" == typeof n && "" !== n || (n = "utf8");
        if (!s.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
        var r = 0 | f(t, n);
        e = o(e, r);
        var i = e.write(t, n);
        i !== r && (e = e.slice(0, i));
        return e;
      }(e, t, n) : function (e, t) {
        if (s.isBuffer(t)) {
          var n = 0 | h(t.length);
          return 0 === (e = o(e, n)).length || t.copy(e, 0, 0, n), e;
        }
        if (t) {
          if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (i = t.length) != i ? o(e, 0) : l(e, t);
          if ("Buffer" === t.type && r(t.data)) return l(e, t.data);
        }
        var i;
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
      }(e, t);
    }
    function u(e) {
      if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
      if (e < 0) throw new RangeError('"size" argument must not be negative');
    }
    function c(e, t) {
      if (u(t), e = o(e, t < 0 ? 0 : 0 | h(t)), !s.TYPED_ARRAY_SUPPORT) for (var n = 0; n < t; ++n) e[n] = 0;
      return e;
    }
    function l(e, t) {
      var n = t.length < 0 ? 0 : 0 | h(t.length);
      e = o(e, n);
      for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
      return e;
    }
    function h(e) {
      if (e >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
      return 0 | e;
    }
    function f(e, t) {
      if (s.isBuffer(e)) return e.length;
      if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
      "string" != typeof e && (e = "" + e);
      var n = e.length;
      if (0 === n) return 0;
      for (var r = !1;;) switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return n;
        case "utf8":
        case "utf-8":
        case void 0:
          return L(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return 2 * n;
        case "hex":
          return n >>> 1;
        case "base64":
          return B(e).length;
        default:
          if (r) return L(e).length;
          t = ("" + t).toLowerCase(), r = !0;
      }
    }
    function d(e, t, n) {
      var r = !1;
      if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
      if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
      if ((n >>>= 0) <= (t >>>= 0)) return "";
      for (e || (e = "utf8");;) switch (e) {
        case "hex":
          return U(this, t, n);
        case "utf8":
        case "utf-8":
          return I(this, t, n);
        case "ascii":
          return E(this, t, n);
        case "latin1":
        case "binary":
          return T(this, t, n);
        case "base64":
          return A(this, t, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return k(this, t, n);
        default:
          if (r) throw new TypeError("Unknown encoding: " + e);
          e = (e + "").toLowerCase(), r = !0;
      }
    }
    function p(e, t, n) {
      var r = e[t];
      e[t] = e[n], e[n] = r;
    }
    function g(e, t, n, r, i) {
      if (0 === e.length) return -1;
      if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
        if (i) return -1;
        n = e.length - 1;
      } else if (n < 0) {
        if (!i) return -1;
        n = 0;
      }
      if ("string" == typeof t && (t = s.from(t, r)), s.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, n, r, i);
      if ("number" == typeof t) return t &= 255, s.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : y(e, [t], n, r, i);
      throw new TypeError("val must be string, number or Buffer");
    }
    function y(e, t, n, r, i) {
      var o,
        s = 1,
        a = e.length,
        u = t.length;
      if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
        if (e.length < 2 || t.length < 2) return -1;
        s = 2, a /= 2, u /= 2, n /= 2;
      }
      function c(e, t) {
        return 1 === s ? e[t] : e.readUInt16BE(t * s);
      }
      if (i) {
        var l = -1;
        for (o = n; o < a; o++) if (c(e, o) === c(t, -1 === l ? 0 : o - l)) {
          if (-1 === l && (l = o), o - l + 1 === u) return l * s;
        } else -1 !== l && (o -= o - l), l = -1;
      } else for (n + u > a && (n = a - u), o = n; o >= 0; o--) {
        for (var h = !0, f = 0; f < u; f++) if (c(e, o + f) !== c(t, f)) {
          h = !1;
          break;
        }
        if (h) return o;
      }
      return -1;
    }
    function v(e, t, n, r) {
      n = Number(n) || 0;
      var i = e.length - n;
      r ? (r = Number(r)) > i && (r = i) : r = i;
      var o = t.length;
      if (o % 2 != 0) throw new TypeError("Invalid hex string");
      r > o / 2 && (r = o / 2);
      for (var s = 0; s < r; ++s) {
        var a = parseInt(t.substr(2 * s, 2), 16);
        if (isNaN(a)) return s;
        e[n + s] = a;
      }
      return s;
    }
    function m(e, t, n, r) {
      return V(L(t, e.length - n), e, n, r);
    }
    function w(e, t, n, r) {
      return V(function (e) {
        for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
        return t;
      }(t), e, n, r);
    }
    function b(e, t, n, r) {
      return w(e, t, n, r);
    }
    function _(e, t, n, r) {
      return V(B(t), e, n, r);
    }
    function S(e, t, n, r) {
      return V(function (e, t) {
        for (var n, r, i, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) r = (n = e.charCodeAt(s)) >> 8, i = n % 256, o.push(i), o.push(r);
        return o;
      }(t, e.length - n), e, n, r);
    }
    function A(e, n, r) {
      return 0 === n && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
    }
    function I(e, t, n) {
      n = Math.min(e.length, n);
      for (var r = [], i = t; i < n;) {
        var o,
          s,
          a,
          u,
          c = e[i],
          l = null,
          h = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
        if (i + h <= n) switch (h) {
          case 1:
            c < 128 && (l = c);
            break;
          case 2:
            128 == (192 & (o = e[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (l = u);
            break;
          case 3:
            o = e[i + 1], s = e[i + 2], 128 == (192 & o) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (l = u);
            break;
          case 4:
            o = e[i + 1], s = e[i + 2], a = e[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u);
        }
        null === l ? (l = 65533, h = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), i += h;
      }
      return function (e) {
        var t = e.length;
        if (t <= C) return String.fromCharCode.apply(String, e);
        var n = "",
          r = 0;
        for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += C));
        return n;
      }(r);
    }
    e.Buffer = s, e.SlowBuffer = function (e) {
      +e != e && (e = 0);
      return s.alloc(+e);
    }, e.INSPECT_MAX_BYTES = 50, s.TYPED_ARRAY_SUPPORT = void 0 !== qe.TYPED_ARRAY_SUPPORT ? qe.TYPED_ARRAY_SUPPORT : function () {
      try {
        var e = new Uint8Array(1);
        return e.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function () {
            return 42;
          }
        }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength;
      } catch (e) {
        return !1;
      }
    }(), e.kMaxLength = i(), s.poolSize = 8192, s._augment = function (e) {
      return e.__proto__ = s.prototype, e;
    }, s.from = function (e, t, n) {
      return a(null, e, t, n);
    }, s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
      value: null,
      configurable: !0
    })), s.alloc = function (e, t, n) {
      return function (e, t, n, r) {
        return u(t), t <= 0 ? o(e, t) : void 0 !== n ? "string" == typeof r ? o(e, t).fill(n, r) : o(e, t).fill(n) : o(e, t);
      }(null, e, t, n);
    }, s.allocUnsafe = function (e) {
      return c(null, e);
    }, s.allocUnsafeSlow = function (e) {
      return c(null, e);
    }, s.isBuffer = function (e) {
      return !(null == e || !e._isBuffer);
    }, s.compare = function (e, t) {
      if (!s.isBuffer(e) || !s.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
      if (e === t) return 0;
      for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i) if (e[i] !== t[i]) {
        n = e[i], r = t[i];
        break;
      }
      return n < r ? -1 : r < n ? 1 : 0;
    }, s.isEncoding = function (e) {
      switch (String(e).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }, s.concat = function (e, t) {
      if (!r(e)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === e.length) return s.alloc(0);
      var n;
      if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
      var i = s.allocUnsafe(t),
        o = 0;
      for (n = 0; n < e.length; ++n) {
        var a = e[n];
        if (!s.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
        a.copy(i, o), o += a.length;
      }
      return i;
    }, s.byteLength = f, s.prototype._isBuffer = !0, s.prototype.swap16 = function () {
      var e = this.length;
      if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var t = 0; t < e; t += 2) p(this, t, t + 1);
      return this;
    }, s.prototype.swap32 = function () {
      var e = this.length;
      if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);
      return this;
    }, s.prototype.swap64 = function () {
      var e = this.length;
      if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var t = 0; t < e; t += 8) p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
      return this;
    }, s.prototype.toString = function () {
      var e = 0 | this.length;
      return 0 === e ? "" : 0 === arguments.length ? I(this, 0, e) : d.apply(this, arguments);
    }, s.prototype.equals = function (e) {
      if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
      return this === e || 0 === s.compare(this, e);
    }, s.prototype.inspect = function () {
      var t = "",
        n = e.INSPECT_MAX_BYTES;
      return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">";
    }, s.prototype.compare = function (e, t, n, r, i) {
      if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
      if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
      if (r >= i && t >= n) return 0;
      if (r >= i) return -1;
      if (t >= n) return 1;
      if (this === e) return 0;
      for (var o = (i >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (t >>>= 0), u = Math.min(o, a), c = this.slice(r, i), l = e.slice(t, n), h = 0; h < u; ++h) if (c[h] !== l[h]) {
        o = c[h], a = l[h];
        break;
      }
      return o < a ? -1 : a < o ? 1 : 0;
    }, s.prototype.includes = function (e, t, n) {
      return -1 !== this.indexOf(e, t, n);
    }, s.prototype.indexOf = function (e, t, n) {
      return g(this, e, t, n, !0);
    }, s.prototype.lastIndexOf = function (e, t, n) {
      return g(this, e, t, n, !1);
    }, s.prototype.write = function (e, t, n, r) {
      if (void 0 === t) r = "utf8", n = this.length, t = 0;else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;else {
        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
      }
      var i = this.length - t;
      if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      r || (r = "utf8");
      for (var o = !1;;) switch (r) {
        case "hex":
          return v(this, e, t, n);
        case "utf8":
        case "utf-8":
          return m(this, e, t, n);
        case "ascii":
          return w(this, e, t, n);
        case "latin1":
        case "binary":
          return b(this, e, t, n);
        case "base64":
          return _(this, e, t, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return S(this, e, t, n);
        default:
          if (o) throw new TypeError("Unknown encoding: " + r);
          r = ("" + r).toLowerCase(), o = !0;
      }
    }, s.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    var C = 4096;
    function E(e, t, n) {
      var r = "";
      n = Math.min(e.length, n);
      for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
      return r;
    }
    function T(e, t, n) {
      var r = "";
      n = Math.min(e.length, n);
      for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
      return r;
    }
    function U(e, t, n) {
      var r = e.length;
      (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
      for (var i = "", o = t; o < n; ++o) i += N(e[o]);
      return i;
    }
    function k(e, t, n) {
      for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
      return i;
    }
    function P(e, t, n) {
      if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
      if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
    }
    function O(e, t, n, r, i, o) {
      if (!s.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
      if (n + r > e.length) throw new RangeError("Index out of range");
    }
    function R(e, t, n, r) {
      t < 0 && (t = 65535 + t + 1);
      for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i);
    }
    function D(e, t, n, r) {
      t < 0 && (t = 4294967295 + t + 1);
      for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255;
    }
    function x(e, t, n, r, i, o) {
      if (n + r > e.length) throw new RangeError("Index out of range");
      if (n < 0) throw new RangeError("Index out of range");
    }
    function F(e, t, r, i, o) {
      return o || x(e, 0, r, 4), n.write(e, t, r, i, 23, 4), r + 4;
    }
    function M(e, t, r, i, o) {
      return o || x(e, 0, r, 8), n.write(e, t, r, i, 52, 8), r + 8;
    }
    s.prototype.slice = function (e, t) {
      var n,
        r = this.length;
      if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), s.TYPED_ARRAY_SUPPORT) (n = this.subarray(e, t)).__proto__ = s.prototype;else {
        var i = t - e;
        n = new s(i, void 0);
        for (var o = 0; o < i; ++o) n[o] = this[o + e];
      }
      return n;
    }, s.prototype.readUIntLE = function (e, t, n) {
      e |= 0, t |= 0, n || P(e, t, this.length);
      for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
      return r;
    }, s.prototype.readUIntBE = function (e, t, n) {
      e |= 0, t |= 0, n || P(e, t, this.length);
      for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
      return r;
    }, s.prototype.readUInt8 = function (e, t) {
      return t || P(e, 1, this.length), this[e];
    }, s.prototype.readUInt16LE = function (e, t) {
      return t || P(e, 2, this.length), this[e] | this[e + 1] << 8;
    }, s.prototype.readUInt16BE = function (e, t) {
      return t || P(e, 2, this.length), this[e] << 8 | this[e + 1];
    }, s.prototype.readUInt32LE = function (e, t) {
      return t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
    }, s.prototype.readUInt32BE = function (e, t) {
      return t || P(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
    }, s.prototype.readIntLE = function (e, t, n) {
      e |= 0, t |= 0, n || P(e, t, this.length);
      for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
      return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
    }, s.prototype.readIntBE = function (e, t, n) {
      e |= 0, t |= 0, n || P(e, t, this.length);
      for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) o += this[e + --r] * i;
      return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
    }, s.prototype.readInt8 = function (e, t) {
      return t || P(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
    }, s.prototype.readInt16LE = function (e, t) {
      t || P(e, 2, this.length);
      var n = this[e] | this[e + 1] << 8;
      return 32768 & n ? 4294901760 | n : n;
    }, s.prototype.readInt16BE = function (e, t) {
      t || P(e, 2, this.length);
      var n = this[e + 1] | this[e] << 8;
      return 32768 & n ? 4294901760 | n : n;
    }, s.prototype.readInt32LE = function (e, t) {
      return t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
    }, s.prototype.readInt32BE = function (e, t) {
      return t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
    }, s.prototype.readFloatLE = function (e, t) {
      return t || P(e, 4, this.length), n.read(this, e, !0, 23, 4);
    }, s.prototype.readFloatBE = function (e, t) {
      return t || P(e, 4, this.length), n.read(this, e, !1, 23, 4);
    }, s.prototype.readDoubleLE = function (e, t) {
      return t || P(e, 8, this.length), n.read(this, e, !0, 52, 8);
    }, s.prototype.readDoubleBE = function (e, t) {
      return t || P(e, 8, this.length), n.read(this, e, !1, 52, 8);
    }, s.prototype.writeUIntLE = function (e, t, n, r) {
      (e = +e, t |= 0, n |= 0, r) || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
      var i = 1,
        o = 0;
      for (this[t] = 255 & e; ++o < n && (i *= 256);) this[t + o] = e / i & 255;
      return t + n;
    }, s.prototype.writeUIntBE = function (e, t, n, r) {
      (e = +e, t |= 0, n |= 0, r) || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
      var i = n - 1,
        o = 1;
      for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
      return t + n;
    }, s.prototype.writeUInt8 = function (e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 1, 255, 0), s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1;
    }, s.prototype.writeUInt16LE = function (e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2;
    }, s.prototype.writeUInt16BE = function (e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2;
    }, s.prototype.writeUInt32LE = function (e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : D(this, e, t, !0), t + 4;
    }, s.prototype.writeUInt32BE = function (e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : D(this, e, t, !1), t + 4;
    }, s.prototype.writeIntLE = function (e, t, n, r) {
      if (e = +e, t |= 0, !r) {
        var i = Math.pow(2, 8 * n - 1);
        O(this, e, t, n, i - 1, -i);
      }
      var o = 0,
        s = 1,
        a = 0;
      for (this[t] = 255 & e; ++o < n && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
      return t + n;
    }, s.prototype.writeIntBE = function (e, t, n, r) {
      if (e = +e, t |= 0, !r) {
        var i = Math.pow(2, 8 * n - 1);
        O(this, e, t, n, i - 1, -i);
      }
      var o = n - 1,
        s = 1,
        a = 0;
      for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
      return t + n;
    }, s.prototype.writeInt8 = function (e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 1, 127, -128), s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
    }, s.prototype.writeInt16LE = function (e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2;
    }, s.prototype.writeInt16BE = function (e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : R(this, e, t, !1), t + 2;
    }, s.prototype.writeInt32LE = function (e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : D(this, e, t, !0), t + 4;
    }, s.prototype.writeInt32BE = function (e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : D(this, e, t, !1), t + 4;
    }, s.prototype.writeFloatLE = function (e, t, n) {
      return F(this, e, t, !0, n);
    }, s.prototype.writeFloatBE = function (e, t, n) {
      return F(this, e, t, !1, n);
    }, s.prototype.writeDoubleLE = function (e, t, n) {
      return M(this, e, t, !0, n);
    }, s.prototype.writeDoubleBE = function (e, t, n) {
      return M(this, e, t, !1, n);
    }, s.prototype.copy = function (e, t, n, r) {
      if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
      if (0 === e.length || 0 === this.length) return 0;
      if (t < 0) throw new RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
      if (r < 0) throw new RangeError("sourceEnd out of bounds");
      r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
      var i,
        o = r - n;
      if (this === e && n < t && t < r) for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];else if (o < 1e3 || !s.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) e[i + t] = this[i + n];else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
      return o;
    }, s.prototype.fill = function (e, t, n, r) {
      if ("string" == typeof e) {
        if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
          var i = e.charCodeAt(0);
          i < 256 && (e = i);
        }
        if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
        if ("string" == typeof r && !s.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
      } else "number" == typeof e && (e &= 255);
      if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
      if (n <= t) return this;
      var o;
      if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e) for (o = t; o < n; ++o) this[o] = e;else {
        var a = s.isBuffer(e) ? e : L(new s(e, r).toString()),
          u = a.length;
        for (o = 0; o < n - t; ++o) this[o + t] = a[o % u];
      }
      return this;
    };
    var j = /[^+\/0-9A-Za-z-_]/g;
    function N(e) {
      return e < 16 ? "0" + e.toString(16) : e.toString(16);
    }
    function L(e, t) {
      var n;
      t = t || 1 / 0;
      for (var r = e.length, i = null, o = [], s = 0; s < r; ++s) {
        if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
          if (!i) {
            if (n > 56319) {
              (t -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }
            if (s + 1 === r) {
              (t -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }
            i = n;
            continue;
          }
          if (n < 56320) {
            (t -= 3) > -1 && o.push(239, 191, 189), i = n;
            continue;
          }
          n = 65536 + (i - 55296 << 10 | n - 56320);
        } else i && (t -= 3) > -1 && o.push(239, 191, 189);
        if (i = null, n < 128) {
          if ((t -= 1) < 0) break;
          o.push(n);
        } else if (n < 2048) {
          if ((t -= 2) < 0) break;
          o.push(n >> 6 | 192, 63 & n | 128);
        } else if (n < 65536) {
          if ((t -= 3) < 0) break;
          o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
        } else {
          if (!(n < 1114112)) throw new Error("Invalid code point");
          if ((t -= 4) < 0) break;
          o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
        }
      }
      return o;
    }
    function B(e) {
      return t.toByteArray(function (e) {
        if ((e = function (e) {
          return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
        }(e).replace(j, "")).length < 2) return "";
        for (; e.length % 4 != 0;) e += "=";
        return e;
      }(e));
    }
    function V(e, t, n, r) {
      for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
      return i;
    }
  }(tr), "undefined" != typeof window && window.crypto && (lr = window.crypto), !lr && "undefined" != typeof window && window.msCrypto && (lr = window.msCrypto), !lr && "undefined" != typeof global && global.crypto && (lr = global.crypto), !lr && "function" == typeof require) try {
    lr = require("crypto");
  } catch (e) {}
  function pr() {
    if (lr) {
      if ("function" == typeof lr.getRandomValues) try {
        return lr.getRandomValues(new Uint32Array(1))[0];
      } catch (e) {}
      if ("function" == typeof lr.randomBytes) try {
        return lr.randomBytes(4).readInt32LE();
      } catch (e) {}
    }
    throw new Error("Native crypto module could not be used to get secure random number.");
  }
  var gr,
    yr = function () {
      function e(e, t) {
        e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;
      }
      var t = e.prototype;
      return t.random = function (t) {
        for (var n = [], r = 0; r < t; r += 4) n.push(pr());
        return new e(n, t);
      }, t.toString = function () {
        return function (e) {
          for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
            var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
            r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16));
          }
          return r.join("");
        }(this);
      }, e;
    }();
  function vr(e, t) {
    null != e && this.fromString(e, t);
  }
  function mr() {
    return new vr(null);
  }
  var wr = "undefined" != typeof navigator;
  wr && "Microsoft Internet Explorer" == navigator.appName ? (vr.prototype.am = function (e, t, n, r, i, o) {
    for (var s = 32767 & t, a = t >> 15; --o >= 0;) {
      var u = 32767 & this[e],
        c = this[e++] >> 15,
        l = a * u + c * s;
      i = ((u = s * u + ((32767 & l) << 15) + n[r] + (1073741823 & i)) >>> 30) + (l >>> 15) + a * c + (i >>> 30), n[r++] = 1073741823 & u;
    }
    return i;
  }, gr = 30) : wr && "Netscape" != navigator.appName ? (vr.prototype.am = function (e, t, n, r, i, o) {
    for (; --o >= 0;) {
      var s = t * this[e++] + n[r] + i;
      i = Math.floor(s / 67108864), n[r++] = 67108863 & s;
    }
    return i;
  }, gr = 26) : (vr.prototype.am = function (e, t, n, r, i, o) {
    for (var s = 16383 & t, a = t >> 14; --o >= 0;) {
      var u = 16383 & this[e],
        c = this[e++] >> 14,
        l = a * u + c * s;
      i = ((u = s * u + ((16383 & l) << 14) + n[r] + i) >> 28) + (l >> 14) + a * c, n[r++] = 268435455 & u;
    }
    return i;
  }, gr = 28), vr.prototype.DB = gr, vr.prototype.DM = (1 << gr) - 1, vr.prototype.DV = 1 << gr;
  vr.prototype.FV = Math.pow(2, 52), vr.prototype.F1 = 52 - gr, vr.prototype.F2 = 2 * gr - 52;
  var br,
    _r,
    Sr = "0123456789abcdefghijklmnopqrstuvwxyz",
    Ar = new Array();
  for (br = "0".charCodeAt(0), _r = 0; _r <= 9; ++_r) Ar[br++] = _r;
  for (br = "a".charCodeAt(0), _r = 10; _r < 36; ++_r) Ar[br++] = _r;
  for (br = "A".charCodeAt(0), _r = 10; _r < 36; ++_r) Ar[br++] = _r;
  function Ir(e) {
    return Sr.charAt(e);
  }
  function Cr(e, t) {
    var n = Ar[e.charCodeAt(t)];
    return null == n ? -1 : n;
  }
  function Er(e) {
    var t = mr();
    return t.fromInt(e), t;
  }
  function Tr(e) {
    var t,
      n = 1;
    return 0 != (t = e >>> 16) && (e = t, n += 16), 0 != (t = e >> 8) && (e = t, n += 8), 0 != (t = e >> 4) && (e = t, n += 4), 0 != (t = e >> 2) && (e = t, n += 2), 0 != (t = e >> 1) && (e = t, n += 1), n;
  }
  function Ur(e) {
    this.m = e, this.mp = e.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t;
  }
  /*!
   * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
   * SPDX-License-Identifier: Apache-2.0
   */
  function kr(e) {
    return tr.Buffer.from(new yr().random(e).toString(), "hex");
  }
  Ur.prototype.convert = function (e) {
    var t = mr();
    return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && t.compareTo(vr.ZERO) > 0 && this.m.subTo(t, t), t;
  }, Ur.prototype.revert = function (e) {
    var t = mr();
    return e.copyTo(t), this.reduce(t), t;
  }, Ur.prototype.reduce = function (e) {
    for (; e.t <= this.mt2;) e[e.t++] = 0;
    for (var t = 0; t < this.m.t; ++t) {
      var n = 32767 & e[t],
        r = n * this.mpl + ((n * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
      for (e[n = t + this.m.t] += this.m.am(0, r, e, t, 0, this.m.t); e[n] >= e.DV;) e[n] -= e.DV, e[++n]++;
    }
    e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
  }, Ur.prototype.mulTo = function (e, t, n) {
    e.multiplyTo(t, n), this.reduce(n);
  }, Ur.prototype.sqrTo = function (e, t) {
    e.squareTo(t), this.reduce(t);
  }, vr.prototype.copyTo = function (e) {
    for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
    e.t = this.t, e.s = this.s;
  }, vr.prototype.fromInt = function (e) {
    this.t = 1, this.s = e < 0 ? -1 : 0, e > 0 ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0;
  }, vr.prototype.fromString = function (e, t) {
    var n;
    if (16 == t) n = 4;else if (8 == t) n = 3;else if (2 == t) n = 1;else if (32 == t) n = 5;else {
      if (4 != t) throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
      n = 2;
    }
    this.t = 0, this.s = 0;
    for (var r = e.length, i = !1, o = 0; --r >= 0;) {
      var s = Cr(e, r);
      s < 0 ? "-" == e.charAt(r) && (i = !0) : (i = !1, 0 == o ? this[this.t++] = s : o + n > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - o) - 1) << o, this[this.t++] = s >> this.DB - o) : this[this.t - 1] |= s << o, (o += n) >= this.DB && (o -= this.DB));
    }
    this.clamp(), i && vr.ZERO.subTo(this, this);
  }, vr.prototype.clamp = function () {
    for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e;) --this.t;
  }, vr.prototype.dlShiftTo = function (e, t) {
    var n;
    for (n = this.t - 1; n >= 0; --n) t[n + e] = this[n];
    for (n = e - 1; n >= 0; --n) t[n] = 0;
    t.t = this.t + e, t.s = this.s;
  }, vr.prototype.drShiftTo = function (e, t) {
    for (var n = e; n < this.t; ++n) t[n - e] = this[n];
    t.t = Math.max(this.t - e, 0), t.s = this.s;
  }, vr.prototype.lShiftTo = function (e, t) {
    var n,
      r = e % this.DB,
      i = this.DB - r,
      o = (1 << i) - 1,
      s = Math.floor(e / this.DB),
      a = this.s << r & this.DM;
    for (n = this.t - 1; n >= 0; --n) t[n + s + 1] = this[n] >> i | a, a = (this[n] & o) << r;
    for (n = s - 1; n >= 0; --n) t[n] = 0;
    t[s] = a, t.t = this.t + s + 1, t.s = this.s, t.clamp();
  }, vr.prototype.rShiftTo = function (e, t) {
    t.s = this.s;
    var n = Math.floor(e / this.DB);
    if (n >= this.t) t.t = 0;else {
      var r = e % this.DB,
        i = this.DB - r,
        o = (1 << r) - 1;
      t[0] = this[n] >> r;
      for (var s = n + 1; s < this.t; ++s) t[s - n - 1] |= (this[s] & o) << i, t[s - n] = this[s] >> r;
      r > 0 && (t[this.t - n - 1] |= (this.s & o) << i), t.t = this.t - n, t.clamp();
    }
  }, vr.prototype.subTo = function (e, t) {
    for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i;) r += this[n] - e[n], t[n++] = r & this.DM, r >>= this.DB;
    if (e.t < this.t) {
      for (r -= e.s; n < this.t;) r += this[n], t[n++] = r & this.DM, r >>= this.DB;
      r += this.s;
    } else {
      for (r += this.s; n < e.t;) r -= e[n], t[n++] = r & this.DM, r >>= this.DB;
      r -= e.s;
    }
    t.s = r < 0 ? -1 : 0, r < -1 ? t[n++] = this.DV + r : r > 0 && (t[n++] = r), t.t = n, t.clamp();
  }, vr.prototype.multiplyTo = function (e, t) {
    var n = this.abs(),
      r = e.abs(),
      i = n.t;
    for (t.t = i + r.t; --i >= 0;) t[i] = 0;
    for (i = 0; i < r.t; ++i) t[i + n.t] = n.am(0, r[i], t, i, 0, n.t);
    t.s = 0, t.clamp(), this.s != e.s && vr.ZERO.subTo(t, t);
  }, vr.prototype.squareTo = function (e) {
    for (var t = this.abs(), n = e.t = 2 * t.t; --n >= 0;) e[n] = 0;
    for (n = 0; n < t.t - 1; ++n) {
      var r = t.am(n, t[n], e, 2 * n, 0, 1);
      (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, r, t.t - n - 1)) >= t.DV && (e[n + t.t] -= t.DV, e[n + t.t + 1] = 1);
    }
    e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)), e.s = 0, e.clamp();
  }, vr.prototype.divRemTo = function (e, t, n) {
    var r = e.abs();
    if (!(r.t <= 0)) {
      var i = this.abs();
      if (i.t < r.t) return null != t && t.fromInt(0), void (null != n && this.copyTo(n));
      null == n && (n = mr());
      var o = mr(),
        s = this.s,
        a = e.s,
        u = this.DB - Tr(r[r.t - 1]);
      u > 0 ? (r.lShiftTo(u, o), i.lShiftTo(u, n)) : (r.copyTo(o), i.copyTo(n));
      var c = o.t,
        l = o[c - 1];
      if (0 != l) {
        var h = l * (1 << this.F1) + (c > 1 ? o[c - 2] >> this.F2 : 0),
          f = this.FV / h,
          d = (1 << this.F1) / h,
          p = 1 << this.F2,
          g = n.t,
          y = g - c,
          v = null == t ? mr() : t;
        for (o.dlShiftTo(y, v), n.compareTo(v) >= 0 && (n[n.t++] = 1, n.subTo(v, n)), vr.ONE.dlShiftTo(c, v), v.subTo(o, o); o.t < c;) o[o.t++] = 0;
        for (; --y >= 0;) {
          var m = n[--g] == l ? this.DM : Math.floor(n[g] * f + (n[g - 1] + p) * d);
          if ((n[g] += o.am(0, m, n, y, 0, c)) < m) for (o.dlShiftTo(y, v), n.subTo(v, n); n[g] < --m;) n.subTo(v, n);
        }
        null != t && (n.drShiftTo(c, t), s != a && vr.ZERO.subTo(t, t)), n.t = c, n.clamp(), u > 0 && n.rShiftTo(u, n), s < 0 && vr.ZERO.subTo(n, n);
      }
    }
  }, vr.prototype.invDigit = function () {
    if (this.t < 1) return 0;
    var e = this[0];
    if (0 == (1 & e)) return 0;
    var t = 3 & e;
    return (t = (t = (t = (t = t * (2 - (15 & e) * t) & 15) * (2 - (255 & e) * t) & 255) * (2 - ((65535 & e) * t & 65535)) & 65535) * (2 - e * t % this.DV) % this.DV) > 0 ? this.DV - t : -t;
  }, vr.prototype.addTo = function (e, t) {
    for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i;) r += this[n] + e[n], t[n++] = r & this.DM, r >>= this.DB;
    if (e.t < this.t) {
      for (r += e.s; n < this.t;) r += this[n], t[n++] = r & this.DM, r >>= this.DB;
      r += this.s;
    } else {
      for (r += this.s; n < e.t;) r += e[n], t[n++] = r & this.DM, r >>= this.DB;
      r += e.s;
    }
    t.s = r < 0 ? -1 : 0, r > 0 ? t[n++] = r : r < -1 && (t[n++] = this.DV + r), t.t = n, t.clamp();
  }, vr.prototype.toString = function (e) {
    if (this.s < 0) return "-" + this.negate().toString(e);
    var t;
    if (16 == e) t = 4;else if (8 == e) t = 3;else if (2 == e) t = 1;else if (32 == e) t = 5;else {
      if (4 != e) throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
      t = 2;
    }
    var n,
      r = (1 << t) - 1,
      i = !1,
      o = "",
      s = this.t,
      a = this.DB - s * this.DB % t;
    if (s-- > 0) for (a < this.DB && (n = this[s] >> a) > 0 && (i = !0, o = Ir(n)); s >= 0;) a < t ? (n = (this[s] & (1 << a) - 1) << t - a, n |= this[--s] >> (a += this.DB - t)) : (n = this[s] >> (a -= t) & r, a <= 0 && (a += this.DB, --s)), n > 0 && (i = !0), i && (o += Ir(n));
    return i ? o : "0";
  }, vr.prototype.negate = function () {
    var e = mr();
    return vr.ZERO.subTo(this, e), e;
  }, vr.prototype.abs = function () {
    return this.s < 0 ? this.negate() : this;
  }, vr.prototype.compareTo = function (e) {
    var t = this.s - e.s;
    if (0 != t) return t;
    var n = this.t;
    if (0 != (t = n - e.t)) return this.s < 0 ? -t : t;
    for (; --n >= 0;) if (0 != (t = this[n] - e[n])) return t;
    return 0;
  }, vr.prototype.bitLength = function () {
    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + Tr(this[this.t - 1] ^ this.s & this.DM);
  }, vr.prototype.mod = function (e) {
    var t = mr();
    return this.abs().divRemTo(e, null, t), this.s < 0 && t.compareTo(vr.ZERO) > 0 && e.subTo(t, t), t;
  }, vr.prototype.equals = function (e) {
    return 0 == this.compareTo(e);
  }, vr.prototype.add = function (e) {
    var t = mr();
    return this.addTo(e, t), t;
  }, vr.prototype.subtract = function (e) {
    var t = mr();
    return this.subTo(e, t), t;
  }, vr.prototype.multiply = function (e) {
    var t = mr();
    return this.multiplyTo(e, t), t;
  }, vr.prototype.divide = function (e) {
    var t = mr();
    return this.divRemTo(e, t, null), t;
  }, vr.prototype.modPow = function (e, t, n) {
    var r,
      i = e.bitLength(),
      o = Er(1),
      s = new Ur(t);
    if (i <= 0) return o;
    r = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6;
    var a = new Array(),
      u = 3,
      c = r - 1,
      l = (1 << r) - 1;
    if (a[1] = s.convert(this), r > 1) {
      var h = mr();
      for (s.sqrTo(a[1], h); u <= l;) a[u] = mr(), s.mulTo(h, a[u - 2], a[u]), u += 2;
    }
    var f,
      d,
      p = e.t - 1,
      g = !0,
      y = mr();
    for (i = Tr(e[p]) - 1; p >= 0;) {
      for (i >= c ? f = e[p] >> i - c & l : (f = (e[p] & (1 << i + 1) - 1) << c - i, p > 0 && (f |= e[p - 1] >> this.DB + i - c)), u = r; 0 == (1 & f);) f >>= 1, --u;
      if ((i -= u) < 0 && (i += this.DB, --p), g) a[f].copyTo(o), g = !1;else {
        for (; u > 1;) s.sqrTo(o, y), s.sqrTo(y, o), u -= 2;
        u > 0 ? s.sqrTo(o, y) : (d = o, o = y, y = d), s.mulTo(y, a[f], o);
      }
      for (; p >= 0 && 0 == (e[p] & 1 << i);) s.sqrTo(o, y), d = o, o = y, y = d, --i < 0 && (i = this.DB - 1, --p);
    }
    var v = s.revert(o);
    return n(null, v), v;
  }, vr.ZERO = Er(0), vr.ONE = Er(1);
  var Pr = /^[89a-f]/i,
    Or = function () {
      function e(e) {
        this.N = new vr("FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF", 16), this.g = new vr("2", 16), this.k = new vr(this.hexHash("" + this.padHex(this.N) + this.padHex(this.g)), 16), this.smallAValue = this.generateRandomSmallA(), this.getLargeAValue(function () {}), this.infoBits = tr.Buffer.from("Caldera Derived Key", "utf8"), this.poolName = e;
      }
      var t = e.prototype;
      return t.getSmallAValue = function () {
        return this.smallAValue;
      }, t.getLargeAValue = function (e) {
        var t = this;
        this.largeAValue ? e(null, this.largeAValue) : this.calculateA(this.smallAValue, function (n, r) {
          n && e(n, null), t.largeAValue = r, e(null, t.largeAValue);
        });
      }, t.generateRandomSmallA = function () {
        return new vr(kr(128).toString("hex"), 16);
      }, t.generateRandomString = function () {
        return kr(40).toString("base64");
      }, t.getRandomPassword = function () {
        return this.randomPassword;
      }, t.getSaltDevices = function () {
        return this.SaltToHashDevices;
      }, t.getVerifierDevices = function () {
        return this.verifierDevices;
      }, t.generateHashDevice = function (e, t, n) {
        var r = this;
        this.randomPassword = this.generateRandomString();
        var i = "" + e + t + ":" + this.randomPassword,
          o = this.hash(i),
          s = kr(16).toString("hex");
        this.SaltToHashDevices = this.padHex(new vr(s, 16)), this.g.modPow(new vr(this.hexHash(this.SaltToHashDevices + o), 16), this.N, function (e, t) {
          e && n(e, null), r.verifierDevices = r.padHex(t), n(null, null);
        });
      }, t.calculateA = function (e, t) {
        var n = this;
        this.g.modPow(e, this.N, function (e, r) {
          e && t(e, null), r.mod(n.N).equals(vr.ZERO) && t(new Error("Illegal paramater. A mod N cannot be 0."), null), t(null, r);
        });
      }, t.calculateU = function (e, t) {
        return this.UHexHash = this.hexHash(this.padHex(e) + this.padHex(t)), new vr(this.UHexHash, 16);
      }, t.hash = function (e) {
        var t = new He.Sha256();
        t.update(e);
        var n = t.digestSync(),
          r = tr.Buffer.from(n).toString("hex");
        return new Array(64 - r.length).join("0") + r;
      }, t.hexHash = function (e) {
        return this.hash(tr.Buffer.from(e, "hex"));
      }, t.computehkdf = function (e, t) {
        var n = tr.Buffer.concat([this.infoBits, tr.Buffer.from(String.fromCharCode(1), "utf8")]),
          r = new He.Sha256(t);
        r.update(e);
        var i = r.digestSync(),
          o = new He.Sha256(i);
        return o.update(n), o.digestSync().slice(0, 16);
      }, t.getPasswordAuthenticationKey = function (e, t, n, r, i) {
        var o = this;
        if (n.mod(this.N).equals(vr.ZERO)) throw new Error("B cannot be zero.");
        if (this.UValue = this.calculateU(this.largeAValue, n), this.UValue.equals(vr.ZERO)) throw new Error("U cannot be zero.");
        var s = "" + this.poolName + e + ":" + t,
          a = this.hash(s),
          u = new vr(this.hexHash(this.padHex(r) + a), 16);
        this.calculateS(u, n, function (e, t) {
          e && i(e, null);
          var n = o.computehkdf(tr.Buffer.from(o.padHex(t), "hex"), tr.Buffer.from(o.padHex(o.UValue), "hex"));
          i(null, n);
        });
      }, t.calculateS = function (e, t, n) {
        var r = this;
        this.g.modPow(e, this.N, function (i, o) {
          i && n(i, null), t.subtract(r.k.multiply(o)).modPow(r.smallAValue.add(r.UValue.multiply(e)), r.N, function (e, t) {
            e && n(e, null), n(null, t.mod(r.N));
          });
        });
      }, t.getNewPasswordRequiredChallengeUserAttributePrefix = function () {
        return "userAttributes.";
      }, t.padHex = function (e) {
        if (!(e instanceof vr)) throw new Error("Not a BigInteger");
        var t = e.compareTo(vr.ZERO) < 0,
          n = e.abs().toString(16);
        if (n = n.length % 2 != 0 ? "0" + n : n, n = Pr.test(n) ? "00" + n : n, t) {
          var r = n.split("").map(function (e) {
            var t = 15 & ~parseInt(e, 16);
            return "0123456789ABCDEF".charAt(t);
          }).join("");
          (n = new vr(r, 16).add(vr.ONE).toString(16)).toUpperCase().startsWith("FF8") && (n = n.substring(2));
        }
        return n;
      }, e;
    }(),
    Rr = function () {
      function e(e) {
        this.jwtToken = e || "", this.payload = this.decodePayload();
      }
      var t = e.prototype;
      return t.getJwtToken = function () {
        return this.jwtToken;
      }, t.getExpiration = function () {
        return this.payload.exp;
      }, t.getIssuedAt = function () {
        return this.payload.iat;
      }, t.decodePayload = function () {
        var e = this.jwtToken.split(".")[1];
        try {
          return JSON.parse(tr.Buffer.from(e, "base64").toString("utf8"));
        } catch (e) {
          return {};
        }
      }, e;
    }();
  function Dr(e, t) {
    return Dr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      return e.__proto__ = t, e;
    }, Dr(e, t);
  }
  var xr = function (e) {
    var t, n;
    function r(t) {
      var n = (void 0 === t ? {} : t).AccessToken;
      return e.call(this, n || "") || this;
    }
    return n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, Dr(t, n), r;
  }(Rr);
  function Fr(e, t) {
    return Fr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      return e.__proto__ = t, e;
    }, Fr(e, t);
  }
  var Mr = function (e) {
      var t, n;
      function r(t) {
        var n = (void 0 === t ? {} : t).IdToken;
        return e.call(this, n || "") || this;
      }
      return n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, Fr(t, n), r;
    }(Rr),
    jr = function () {
      function e(e) {
        var t = (void 0 === e ? {} : e).RefreshToken;
        this.token = t || "";
      }
      return e.prototype.getToken = function () {
        return this.token;
      }, e;
    }(),
    Nr = {
      userAgent: "aws-amplify/5.0.4",
      isReactNative: "undefined" != typeof navigator && "ReactNative" === navigator.product
    },
    Lr = function () {
      function e(e) {
        var t = void 0 === e ? {} : e,
          n = t.IdToken,
          r = t.RefreshToken,
          i = t.AccessToken,
          o = t.ClockDrift;
        if (null == i || null == n) throw new Error("Id token and Access Token must be present.");
        this.idToken = n, this.refreshToken = r, this.accessToken = i, this.clockDrift = void 0 === o ? this.calculateClockDrift() : o;
      }
      var t = e.prototype;
      return t.getIdToken = function () {
        return this.idToken;
      }, t.getRefreshToken = function () {
        return this.refreshToken;
      }, t.getAccessToken = function () {
        return this.accessToken;
      }, t.getClockDrift = function () {
        return this.clockDrift;
      }, t.calculateClockDrift = function () {
        return Math.floor(new Date() / 1e3) - Math.min(this.accessToken.getIssuedAt(), this.idToken.getIssuedAt());
      }, t.isValid = function () {
        var e = Math.floor(new Date() / 1e3) - this.clockDrift;
        return e < this.accessToken.getExpiration() && e < this.idToken.getExpiration();
      }, e;
    }(),
    Br = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    Vr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    Kr = function () {
      function e() {}
      return e.prototype.getNowString = function () {
        var e = new Date(),
          t = Vr[e.getUTCDay()],
          n = Br[e.getUTCMonth()],
          r = e.getUTCDate(),
          i = e.getUTCHours();
        i < 10 && (i = "0" + i);
        var o = e.getUTCMinutes();
        o < 10 && (o = "0" + o);
        var s = e.getUTCSeconds();
        return s < 10 && (s = "0" + s), t + " " + n + " " + r + " " + i + ":" + o + ":" + s + " UTC " + e.getUTCFullYear();
      }, e;
    }(),
    qr = function () {
      function e(e) {
        var t = void 0 === e ? {} : e,
          n = t.Name,
          r = t.Value;
        this.Name = n || "", this.Value = r || "";
      }
      var t = e.prototype;
      return t.getValue = function () {
        return this.Value;
      }, t.setValue = function (e) {
        return this.Value = e, this;
      }, t.getName = function () {
        return this.Name;
      }, t.setName = function (e) {
        return this.Name = e, this;
      }, t.toString = function () {
        return JSON.stringify(this);
      }, t.toJSON = function () {
        return {
          Name: this.Name,
          Value: this.Value
        };
      }, e;
    }(),
    Wr = {},
    Gr = function () {
      function e() {}
      return e.setItem = function (e, t) {
        return Wr[e] = t, Wr[e];
      }, e.getItem = function (e) {
        return Object.prototype.hasOwnProperty.call(Wr, e) ? Wr[e] : void 0;
      }, e.removeItem = function (e) {
        return delete Wr[e];
      }, e.clear = function () {
        return Wr = {};
      }, e;
    }(),
    Hr = function () {
      function e() {
        try {
          this.storageWindow = window.localStorage, this.storageWindow.setItem("aws.cognito.test-ls", 1), this.storageWindow.removeItem("aws.cognito.test-ls");
        } catch (e) {
          this.storageWindow = Gr;
        }
      }
      return e.prototype.getStorage = function () {
        return this.storageWindow;
      }, e;
    }(),
    zr = "undefined" != typeof navigator ? Nr.isReactNative ? "react-native" : navigator.userAgent : "nodejs",
    Jr = function () {
      function e(e) {
        if (null == e || null == e.Username || null == e.Pool) throw new Error("Username and Pool information are required.");
        this.username = e.Username || "", this.pool = e.Pool, this.Session = null, this.client = e.Pool.client, this.signInUserSession = null, this.authenticationFlowType = "USER_SRP_AUTH", this.storage = e.Storage || new Hr().getStorage(), this.keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId(), this.userDataKey = this.keyPrefix + "." + this.username + ".userData";
      }
      var t = e.prototype;
      return t.setSignInUserSession = function (e) {
        this.clearCachedUserData(), this.signInUserSession = e, this.cacheTokens();
      }, t.getSignInUserSession = function () {
        return this.signInUserSession;
      }, t.getUsername = function () {
        return this.username;
      }, t.getAuthenticationFlowType = function () {
        return this.authenticationFlowType;
      }, t.setAuthenticationFlowType = function (e) {
        this.authenticationFlowType = e;
      }, t.initiateAuth = function (e, t) {
        var n = this,
          r = e.getAuthParameters();
        r.USERNAME = this.username;
        var i = 0 !== Object.keys(e.getValidationData()).length ? e.getValidationData() : e.getClientMetadata(),
          o = {
            AuthFlow: "CUSTOM_AUTH",
            ClientId: this.pool.getClientId(),
            AuthParameters: r,
            ClientMetadata: i
          };
        this.getUserContextData() && (o.UserContextData = this.getUserContextData()), this.client.request("InitiateAuth", o, function (e, r) {
          if (e) return t.onFailure(e);
          var i = r.ChallengeName,
            o = r.ChallengeParameters;
          return "CUSTOM_CHALLENGE" === i ? (n.Session = r.Session, t.customChallenge(o)) : (n.signInUserSession = n.getCognitoUserSession(r.AuthenticationResult), n.cacheTokens(), t.onSuccess(n.signInUserSession));
        });
      }, t.authenticateUser = function (e, t) {
        return "USER_PASSWORD_AUTH" === this.authenticationFlowType ? this.authenticateUserPlainUsernamePassword(e, t) : "USER_SRP_AUTH" === this.authenticationFlowType || "CUSTOM_AUTH" === this.authenticationFlowType ? this.authenticateUserDefaultAuth(e, t) : t.onFailure(new Error("Authentication flow type is invalid."));
      }, t.authenticateUserDefaultAuth = function (e, t) {
        var n,
          r,
          i = this,
          o = new Or(this.pool.getUserPoolName()),
          s = new Kr(),
          a = {};
        null != this.deviceKey && (a.DEVICE_KEY = this.deviceKey), a.USERNAME = this.username, o.getLargeAValue(function (u, c) {
          u && t.onFailure(u), a.SRP_A = c.toString(16), "CUSTOM_AUTH" === i.authenticationFlowType && (a.CHALLENGE_NAME = "SRP_A");
          var l = 0 !== Object.keys(e.getValidationData()).length ? e.getValidationData() : e.getClientMetadata(),
            h = {
              AuthFlow: i.authenticationFlowType,
              ClientId: i.pool.getClientId(),
              AuthParameters: a,
              ClientMetadata: l
            };
          i.getUserContextData(i.username) && (h.UserContextData = i.getUserContextData(i.username)), i.client.request("InitiateAuth", h, function (a, u) {
            if (a) return t.onFailure(a);
            var c = u.ChallengeParameters;
            i.username = c.USER_ID_FOR_SRP, i.userDataKey = i.keyPrefix + "." + i.username + ".userData", n = new vr(c.SRP_B, 16), r = new vr(c.SALT, 16), i.getCachedDeviceKeyAndPassword(), o.getPasswordAuthenticationKey(i.username, e.getPassword(), n, r, function (e, n) {
              e && t.onFailure(e);
              var r = s.getNowString(),
                a = tr.Buffer.concat([tr.Buffer.from(i.pool.getUserPoolName(), "utf8"), tr.Buffer.from(i.username, "utf8"), tr.Buffer.from(c.SECRET_BLOCK, "base64"), tr.Buffer.from(r, "utf8")]),
                h = new He.Sha256(n);
              h.update(a);
              var f = h.digestSync(),
                d = tr.Buffer.from(f).toString("base64"),
                p = {};
              p.USERNAME = i.username, p.PASSWORD_CLAIM_SECRET_BLOCK = c.SECRET_BLOCK, p.TIMESTAMP = r, p.PASSWORD_CLAIM_SIGNATURE = d, null != i.deviceKey && (p.DEVICE_KEY = i.deviceKey);
              var g = {
                ChallengeName: "PASSWORD_VERIFIER",
                ClientId: i.pool.getClientId(),
                ChallengeResponses: p,
                Session: u.Session,
                ClientMetadata: l
              };
              i.getUserContextData() && (g.UserContextData = i.getUserContextData()), function e(t, n) {
                return i.client.request("RespondToAuthChallenge", t, function (r, o) {
                  return r && "ResourceNotFoundException" === r.code && -1 !== r.message.toLowerCase().indexOf("device") ? (p.DEVICE_KEY = null, i.deviceKey = null, i.randomPassword = null, i.deviceGroupKey = null, i.clearCachedDeviceKeyAndPassword(), e(t, n)) : n(r, o);
                });
              }(g, function (e, n) {
                return e ? t.onFailure(e) : i.authenticateUserInternal(n, o, t);
              });
            });
          });
        });
      }, t.authenticateUserPlainUsernamePassword = function (e, t) {
        var n = this,
          r = {};
        if (r.USERNAME = this.username, r.PASSWORD = e.getPassword(), r.PASSWORD) {
          var i = new Or(this.pool.getUserPoolName());
          this.getCachedDeviceKeyAndPassword(), null != this.deviceKey && (r.DEVICE_KEY = this.deviceKey);
          var o = 0 !== Object.keys(e.getValidationData()).length ? e.getValidationData() : e.getClientMetadata(),
            s = {
              AuthFlow: "USER_PASSWORD_AUTH",
              ClientId: this.pool.getClientId(),
              AuthParameters: r,
              ClientMetadata: o
            };
          this.getUserContextData(this.username) && (s.UserContextData = this.getUserContextData(this.username)), this.client.request("InitiateAuth", s, function (e, r) {
            return e ? t.onFailure(e) : n.authenticateUserInternal(r, i, t);
          });
        } else t.onFailure(new Error("PASSWORD parameter is required"));
      }, t.authenticateUserInternal = function (e, t, n) {
        var r = this,
          i = e.ChallengeName,
          o = e.ChallengeParameters;
        if ("SMS_MFA" === i) return this.Session = e.Session, n.mfaRequired(i, o);
        if ("SELECT_MFA_TYPE" === i) return this.Session = e.Session, n.selectMFAType(i, o);
        if ("MFA_SETUP" === i) return this.Session = e.Session, n.mfaSetup(i, o);
        if ("SOFTWARE_TOKEN_MFA" === i) return this.Session = e.Session, n.totpRequired(i, o);
        if ("CUSTOM_CHALLENGE" === i) return this.Session = e.Session, n.customChallenge(o);
        if ("NEW_PASSWORD_REQUIRED" === i) {
          this.Session = e.Session;
          var s = null,
            a = null,
            u = [],
            c = t.getNewPasswordRequiredChallengeUserAttributePrefix();
          if (o && (s = JSON.parse(e.ChallengeParameters.userAttributes), a = JSON.parse(e.ChallengeParameters.requiredAttributes)), a) for (var l = 0; l < a.length; l++) u[l] = a[l].substr(c.length);
          return n.newPasswordRequired(s, u);
        }
        if ("DEVICE_SRP_AUTH" === i) return this.Session = e.Session, void this.getDeviceResponse(n);
        this.signInUserSession = this.getCognitoUserSession(e.AuthenticationResult), this.challengeName = i, this.cacheTokens();
        var h = e.AuthenticationResult.NewDeviceMetadata;
        if (null == h) return n.onSuccess(this.signInUserSession);
        t.generateHashDevice(e.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, e.AuthenticationResult.NewDeviceMetadata.DeviceKey, function (i) {
          if (i) return n.onFailure(i);
          var o = {
            Salt: tr.Buffer.from(t.getSaltDevices(), "hex").toString("base64"),
            PasswordVerifier: tr.Buffer.from(t.getVerifierDevices(), "hex").toString("base64")
          };
          r.verifierDevices = o.PasswordVerifier, r.deviceGroupKey = h.DeviceGroupKey, r.randomPassword = t.getRandomPassword(), r.client.request("ConfirmDevice", {
            DeviceKey: h.DeviceKey,
            AccessToken: r.signInUserSession.getAccessToken().getJwtToken(),
            DeviceSecretVerifierConfig: o,
            DeviceName: zr
          }, function (t, i) {
            return t ? n.onFailure(t) : (r.deviceKey = e.AuthenticationResult.NewDeviceMetadata.DeviceKey, r.cacheDeviceKeyAndPassword(), !0 === i.UserConfirmationNecessary ? n.onSuccess(r.signInUserSession, i.UserConfirmationNecessary) : n.onSuccess(r.signInUserSession));
          });
        });
      }, t.completeNewPasswordChallenge = function (e, t, n, r) {
        var i = this;
        if (!e) return n.onFailure(new Error("New password is required."));
        var o = new Or(this.pool.getUserPoolName()),
          s = o.getNewPasswordRequiredChallengeUserAttributePrefix(),
          a = {};
        t && Object.keys(t).forEach(function (e) {
          a[s + e] = t[e];
        }), a.NEW_PASSWORD = e, a.USERNAME = this.username;
        var u = {
          ChallengeName: "NEW_PASSWORD_REQUIRED",
          ClientId: this.pool.getClientId(),
          ChallengeResponses: a,
          Session: this.Session,
          ClientMetadata: r
        };
        this.getUserContextData() && (u.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", u, function (e, t) {
          return e ? n.onFailure(e) : i.authenticateUserInternal(t, o, n);
        });
      }, t.getDeviceResponse = function (e, t) {
        var n = this,
          r = new Or(this.deviceGroupKey),
          i = new Kr(),
          o = {};
        o.USERNAME = this.username, o.DEVICE_KEY = this.deviceKey, r.getLargeAValue(function (s, a) {
          s && e.onFailure(s), o.SRP_A = a.toString(16);
          var u = {
            ChallengeName: "DEVICE_SRP_AUTH",
            ClientId: n.pool.getClientId(),
            ChallengeResponses: o,
            ClientMetadata: t,
            Session: n.Session
          };
          n.getUserContextData() && (u.UserContextData = n.getUserContextData()), n.client.request("RespondToAuthChallenge", u, function (t, o) {
            if (t) return e.onFailure(t);
            var s = o.ChallengeParameters,
              a = new vr(s.SRP_B, 16),
              u = new vr(s.SALT, 16);
            r.getPasswordAuthenticationKey(n.deviceKey, n.randomPassword, a, u, function (t, r) {
              if (t) return e.onFailure(t);
              var a = i.getNowString(),
                u = tr.Buffer.concat([tr.Buffer.from(n.deviceGroupKey, "utf8"), tr.Buffer.from(n.deviceKey, "utf8"), tr.Buffer.from(s.SECRET_BLOCK, "base64"), tr.Buffer.from(a, "utf8")]),
                c = new He.Sha256(r);
              c.update(u);
              var l = c.digestSync(),
                h = tr.Buffer.from(l).toString("base64"),
                f = {};
              f.USERNAME = n.username, f.PASSWORD_CLAIM_SECRET_BLOCK = s.SECRET_BLOCK, f.TIMESTAMP = a, f.PASSWORD_CLAIM_SIGNATURE = h, f.DEVICE_KEY = n.deviceKey;
              var d = {
                ChallengeName: "DEVICE_PASSWORD_VERIFIER",
                ClientId: n.pool.getClientId(),
                ChallengeResponses: f,
                Session: o.Session
              };
              n.getUserContextData() && (d.UserContextData = n.getUserContextData()), n.client.request("RespondToAuthChallenge", d, function (t, r) {
                return t ? e.onFailure(t) : (n.signInUserSession = n.getCognitoUserSession(r.AuthenticationResult), n.cacheTokens(), e.onSuccess(n.signInUserSession));
              });
            });
          });
        });
      }, t.confirmRegistration = function (e, t, n, r) {
        var i = {
          ClientId: this.pool.getClientId(),
          ConfirmationCode: e,
          Username: this.username,
          ForceAliasCreation: t,
          ClientMetadata: r
        };
        this.getUserContextData() && (i.UserContextData = this.getUserContextData()), this.client.request("ConfirmSignUp", i, function (e) {
          return e ? n(e, null) : n(null, "SUCCESS");
        });
      }, t.sendCustomChallengeAnswer = function (e, t, n) {
        var r = this,
          i = {};
        i.USERNAME = this.username, i.ANSWER = e;
        var o = new Or(this.pool.getUserPoolName());
        this.getCachedDeviceKeyAndPassword(), null != this.deviceKey && (i.DEVICE_KEY = this.deviceKey);
        var s = {
          ChallengeName: "CUSTOM_CHALLENGE",
          ChallengeResponses: i,
          ClientId: this.pool.getClientId(),
          Session: this.Session,
          ClientMetadata: n
        };
        this.getUserContextData() && (s.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", s, function (e, n) {
          return e ? t.onFailure(e) : r.authenticateUserInternal(n, o, t);
        });
      }, t.sendMFACode = function (e, t, n, r) {
        var i = this,
          o = {};
        o.USERNAME = this.username, o.SMS_MFA_CODE = e;
        var s = n || "SMS_MFA";
        "SOFTWARE_TOKEN_MFA" === s && (o.SOFTWARE_TOKEN_MFA_CODE = e), null != this.deviceKey && (o.DEVICE_KEY = this.deviceKey);
        var a = {
          ChallengeName: s,
          ChallengeResponses: o,
          ClientId: this.pool.getClientId(),
          Session: this.Session,
          ClientMetadata: r
        };
        this.getUserContextData() && (a.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", a, function (e, n) {
          if (e) return t.onFailure(e);
          if ("DEVICE_SRP_AUTH" !== n.ChallengeName) {
            if (i.signInUserSession = i.getCognitoUserSession(n.AuthenticationResult), i.cacheTokens(), null == n.AuthenticationResult.NewDeviceMetadata) return t.onSuccess(i.signInUserSession);
            var r = new Or(i.pool.getUserPoolName());
            r.generateHashDevice(n.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, n.AuthenticationResult.NewDeviceMetadata.DeviceKey, function (e) {
              if (e) return t.onFailure(e);
              var o = {
                Salt: tr.Buffer.from(r.getSaltDevices(), "hex").toString("base64"),
                PasswordVerifier: tr.Buffer.from(r.getVerifierDevices(), "hex").toString("base64")
              };
              i.verifierDevices = o.PasswordVerifier, i.deviceGroupKey = n.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, i.randomPassword = r.getRandomPassword(), i.client.request("ConfirmDevice", {
                DeviceKey: n.AuthenticationResult.NewDeviceMetadata.DeviceKey,
                AccessToken: i.signInUserSession.getAccessToken().getJwtToken(),
                DeviceSecretVerifierConfig: o,
                DeviceName: zr
              }, function (e, r) {
                return e ? t.onFailure(e) : (i.deviceKey = n.AuthenticationResult.NewDeviceMetadata.DeviceKey, i.cacheDeviceKeyAndPassword(), !0 === r.UserConfirmationNecessary ? t.onSuccess(i.signInUserSession, r.UserConfirmationNecessary) : t.onSuccess(i.signInUserSession));
              });
            });
          } else i.getDeviceResponse(t);
        });
      }, t.changePassword = function (e, t, n, r) {
        if (null == this.signInUserSession || !this.signInUserSession.isValid()) return n(new Error("User is not authenticated"), null);
        this.client.request("ChangePassword", {
          PreviousPassword: e,
          ProposedPassword: t,
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
          ClientMetadata: r
        }, function (e) {
          return e ? n(e, null) : n(null, "SUCCESS");
        });
      }, t.enableMFA = function (e) {
        if (null == this.signInUserSession || !this.signInUserSession.isValid()) return e(new Error("User is not authenticated"), null);
        var t = [];
        t.push({
          DeliveryMedium: "SMS",
          AttributeName: "phone_number"
        }), this.client.request("SetUserSettings", {
          MFAOptions: t,
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
        }, function (t) {
          return t ? e(t, null) : e(null, "SUCCESS");
        });
      }, t.setUserMfaPreference = function (e, t, n) {
        if (null == this.signInUserSession || !this.signInUserSession.isValid()) return n(new Error("User is not authenticated"), null);
        this.client.request("SetUserMFAPreference", {
          SMSMfaSettings: e,
          SoftwareTokenMfaSettings: t,
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
        }, function (e) {
          return e ? n(e, null) : n(null, "SUCCESS");
        });
      }, t.disableMFA = function (e) {
        if (null == this.signInUserSession || !this.signInUserSession.isValid()) return e(new Error("User is not authenticated"), null);
        this.client.request("SetUserSettings", {
          MFAOptions: [],
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
        }, function (t) {
          return t ? e(t, null) : e(null, "SUCCESS");
        });
      }, t.deleteUser = function (e, t) {
        var n = this;
        if (null == this.signInUserSession || !this.signInUserSession.isValid()) return e(new Error("User is not authenticated"), null);
        this.client.request("DeleteUser", {
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
          ClientMetadata: t
        }, function (t) {
          return t ? e(t, null) : (n.clearCachedUser(), e(null, "SUCCESS"));
        });
      }, t.updateAttributes = function (e, t, n) {
        var r = this;
        if (null == this.signInUserSession || !this.signInUserSession.isValid()) return t(new Error("User is not authenticated"), null);
        this.client.request("UpdateUserAttributes", {
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
          UserAttributes: e,
          ClientMetadata: n
        }, function (e, n) {
          return e ? t(e, null) : r.getUserData(function () {
            return t(null, "SUCCESS", n);
          }, {
            bypassCache: !0
          });
        });
      }, t.getUserAttributes = function (e) {
        if (null == this.signInUserSession || !this.signInUserSession.isValid()) return e(new Error("User is not authenticated"), null);
        this.client.request("GetUser", {
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
        }, function (t, n) {
          if (t) return e(t, null);
          for (var r = [], i = 0; i < n.UserAttributes.length; i++) {
            var o = {
                Name: n.UserAttributes[i].Name,
                Value: n.UserAttributes[i].Value
              },
              s = new qr(o);
            r.push(s);
          }
          return e(null, r);
        });
      }, t.getMFAOptions = function (e) {
        if (null == this.signInUserSession || !this.signInUserSession.isValid()) return e(new Error("User is not authenticated"), null);
        this.client.request("GetUser", {
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
        }, function (t, n) {
          return t ? e(t, null) : e(null, n.MFAOptions);
        });
      }, t.createGetUserRequest = function () {
        return this.client.promisifyRequest("GetUser", {
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
        });
      }, t.refreshSessionIfPossible = function (e) {
        var t = this;
        return void 0 === e && (e = {}), new Promise(function (n) {
          var r = t.signInUserSession.getRefreshToken();
          r && r.getToken() ? t.refreshSession(r, n, e.clientMetadata) : n();
        });
      }, t.getUserData = function (e, t) {
        var n = this;
        if (null == this.signInUserSession || !this.signInUserSession.isValid()) return this.clearCachedUserData(), e(new Error("User is not authenticated"), null);
        var r = this.getUserDataFromCache();
        if (r) {
          if (this.isFetchUserDataAndTokenRequired(t)) this.fetchUserData().then(function (e) {
            return n.refreshSessionIfPossible(t).then(function () {
              return e;
            });
          }).then(function (t) {
            return e(null, t);
          }).catch(e);else try {
            return void e(null, JSON.parse(r));
          } catch (t) {
            return this.clearCachedUserData(), void e(t, null);
          }
        } else this.fetchUserData().then(function (t) {
          e(null, t);
        }).catch(e);
      }, t.getUserDataFromCache = function () {
        return this.storage.getItem(this.userDataKey);
      }, t.isFetchUserDataAndTokenRequired = function (e) {
        var t = (e || {}).bypassCache;
        return void 0 !== t && t;
      }, t.fetchUserData = function () {
        var e = this;
        return this.createGetUserRequest().then(function (t) {
          return e.cacheUserData(t), t;
        });
      }, t.deleteAttributes = function (e, t) {
        var n = this;
        if (null == this.signInUserSession || !this.signInUserSession.isValid()) return t(new Error("User is not authenticated"), null);
        this.client.request("DeleteUserAttributes", {
          UserAttributeNames: e,
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
        }, function (e) {
          return e ? t(e, null) : n.getUserData(function () {
            return t(null, "SUCCESS");
          }, {
            bypassCache: !0
          });
        });
      }, t.resendConfirmationCode = function (e, t) {
        var n = {
          ClientId: this.pool.getClientId(),
          Username: this.username,
          ClientMetadata: t
        };
        this.client.request("ResendConfirmationCode", n, function (t, n) {
          return t ? e(t, null) : e(null, n);
        });
      }, t.getSession = function (e, t) {
        if (void 0 === t && (t = {}), null == this.username) return e(new Error("Username is null. Cannot retrieve a new session"), null);
        if (null != this.signInUserSession && this.signInUserSession.isValid()) return e(null, this.signInUserSession);
        var n = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username,
          r = n + ".idToken",
          i = n + ".accessToken",
          o = n + ".refreshToken",
          s = n + ".clockDrift";
        if (this.storage.getItem(r)) {
          var a = new Mr({
              IdToken: this.storage.getItem(r)
            }),
            u = new xr({
              AccessToken: this.storage.getItem(i)
            }),
            c = new jr({
              RefreshToken: this.storage.getItem(o)
            }),
            l = parseInt(this.storage.getItem(s), 0) || 0,
            h = new Lr({
              IdToken: a,
              AccessToken: u,
              RefreshToken: c,
              ClockDrift: l
            });
          if (h.isValid()) return this.signInUserSession = h, e(null, this.signInUserSession);
          if (!c.getToken()) return e(new Error("Cannot retrieve a new session. Please authenticate."), null);
          this.refreshSession(c, e, t.clientMetadata);
        } else e(new Error("Local storage is missing an ID Token, Please authenticate"), null);
      }, t.refreshSession = function (e, t, n) {
        var r = this,
          i = this.pool.wrapRefreshSessionCallback ? this.pool.wrapRefreshSessionCallback(t) : t,
          o = {};
        o.REFRESH_TOKEN = e.getToken();
        var s = "CognitoIdentityServiceProvider." + this.pool.getClientId(),
          a = s + ".LastAuthUser";
        if (this.storage.getItem(a)) {
          this.username = this.storage.getItem(a);
          var u = s + "." + this.username + ".deviceKey";
          this.deviceKey = this.storage.getItem(u), o.DEVICE_KEY = this.deviceKey;
        }
        var c = {
          ClientId: this.pool.getClientId(),
          AuthFlow: "REFRESH_TOKEN_AUTH",
          AuthParameters: o,
          ClientMetadata: n
        };
        this.getUserContextData() && (c.UserContextData = this.getUserContextData()), this.client.request("InitiateAuth", c, function (t, n) {
          if (t) return "NotAuthorizedException" === t.code && r.clearCachedUser(), i(t, null);
          if (n) {
            var o = n.AuthenticationResult;
            return Object.prototype.hasOwnProperty.call(o, "RefreshToken") || (o.RefreshToken = e.getToken()), r.signInUserSession = r.getCognitoUserSession(o), r.cacheTokens(), i(null, r.signInUserSession);
          }
        });
      }, t.cacheTokens = function () {
        var e = "CognitoIdentityServiceProvider." + this.pool.getClientId(),
          t = e + "." + this.username + ".idToken",
          n = e + "." + this.username + ".accessToken",
          r = e + "." + this.username + ".refreshToken",
          i = e + "." + this.username + ".clockDrift",
          o = e + ".LastAuthUser";
        this.storage.setItem(t, this.signInUserSession.getIdToken().getJwtToken()), this.storage.setItem(n, this.signInUserSession.getAccessToken().getJwtToken()), this.storage.setItem(r, this.signInUserSession.getRefreshToken().getToken()), this.storage.setItem(i, "" + this.signInUserSession.getClockDrift()), this.storage.setItem(o, this.username);
      }, t.cacheUserData = function (e) {
        this.storage.setItem(this.userDataKey, JSON.stringify(e));
      }, t.clearCachedUserData = function () {
        this.storage.removeItem(this.userDataKey);
      }, t.clearCachedUser = function () {
        this.clearCachedTokens(), this.clearCachedUserData();
      }, t.cacheDeviceKeyAndPassword = function () {
        var e = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username,
          t = e + ".deviceKey",
          n = e + ".randomPasswordKey",
          r = e + ".deviceGroupKey";
        this.storage.setItem(t, this.deviceKey), this.storage.setItem(n, this.randomPassword), this.storage.setItem(r, this.deviceGroupKey);
      }, t.getCachedDeviceKeyAndPassword = function () {
        var e = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username,
          t = e + ".deviceKey",
          n = e + ".randomPasswordKey",
          r = e + ".deviceGroupKey";
        this.storage.getItem(t) && (this.deviceKey = this.storage.getItem(t), this.randomPassword = this.storage.getItem(n), this.deviceGroupKey = this.storage.getItem(r));
      }, t.clearCachedDeviceKeyAndPassword = function () {
        var e = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username,
          t = e + ".deviceKey",
          n = e + ".randomPasswordKey",
          r = e + ".deviceGroupKey";
        this.storage.removeItem(t), this.storage.removeItem(n), this.storage.removeItem(r);
      }, t.clearCachedTokens = function () {
        var e = "CognitoIdentityServiceProvider." + this.pool.getClientId(),
          t = e + "." + this.username + ".idToken",
          n = e + "." + this.username + ".accessToken",
          r = e + "." + this.username + ".refreshToken",
          i = e + ".LastAuthUser",
          o = e + "." + this.username + ".clockDrift";
        this.storage.removeItem(t), this.storage.removeItem(n), this.storage.removeItem(r), this.storage.removeItem(i), this.storage.removeItem(o);
      }, t.getCognitoUserSession = function (e) {
        var t = new Mr(e),
          n = new xr(e),
          r = new jr(e);
        return new Lr({
          IdToken: t,
          AccessToken: n,
          RefreshToken: r
        });
      }, t.forgotPassword = function (e, t) {
        var n = {
          ClientId: this.pool.getClientId(),
          Username: this.username,
          ClientMetadata: t
        };
        this.getUserContextData() && (n.UserContextData = this.getUserContextData()), this.client.request("ForgotPassword", n, function (t, n) {
          return t ? e.onFailure(t) : "function" == typeof e.inputVerificationCode ? e.inputVerificationCode(n) : e.onSuccess(n);
        });
      }, t.confirmPassword = function (e, t, n, r) {
        var i = {
          ClientId: this.pool.getClientId(),
          Username: this.username,
          ConfirmationCode: e,
          Password: t,
          ClientMetadata: r
        };
        this.getUserContextData() && (i.UserContextData = this.getUserContextData()), this.client.request("ConfirmForgotPassword", i, function (e) {
          return e ? n.onFailure(e) : n.onSuccess("SUCCESS");
        });
      }, t.getAttributeVerificationCode = function (e, t, n) {
        if (null == this.signInUserSession || !this.signInUserSession.isValid()) return t.onFailure(new Error("User is not authenticated"));
        this.client.request("GetUserAttributeVerificationCode", {
          AttributeName: e,
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
          ClientMetadata: n
        }, function (e, n) {
          return e ? t.onFailure(e) : "function" == typeof t.inputVerificationCode ? t.inputVerificationCode(n) : t.onSuccess("SUCCESS");
        });
      }, t.verifyAttribute = function (e, t, n) {
        if (null == this.signInUserSession || !this.signInUserSession.isValid()) return n.onFailure(new Error("User is not authenticated"));
        this.client.request("VerifyUserAttribute", {
          AttributeName: e,
          Code: t,
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
        }, function (e) {
          return e ? n.onFailure(e) : n.onSuccess("SUCCESS");
        });
      }, t.getDevice = function (e) {
        if (null == this.signInUserSession || !this.signInUserSession.isValid()) return e.onFailure(new Error("User is not authenticated"));
        this.client.request("GetDevice", {
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
          DeviceKey: this.deviceKey
        }, function (t, n) {
          return t ? e.onFailure(t) : e.onSuccess(n);
        });
      }, t.forgetSpecificDevice = function (e, t) {
        if (null == this.signInUserSession || !this.signInUserSession.isValid()) return t.onFailure(new Error("User is not authenticated"));
        this.client.request("ForgetDevice", {
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
          DeviceKey: e
        }, function (e) {
          return e ? t.onFailure(e) : t.onSuccess("SUCCESS");
        });
      }, t.forgetDevice = function (e) {
        var t = this;
        this.forgetSpecificDevice(this.deviceKey, {
          onFailure: e.onFailure,
          onSuccess: function (n) {
            return t.deviceKey = null, t.deviceGroupKey = null, t.randomPassword = null, t.clearCachedDeviceKeyAndPassword(), e.onSuccess(n);
          }
        });
      }, t.setDeviceStatusRemembered = function (e) {
        if (null == this.signInUserSession || !this.signInUserSession.isValid()) return e.onFailure(new Error("User is not authenticated"));
        this.client.request("UpdateDeviceStatus", {
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
          DeviceKey: this.deviceKey,
          DeviceRememberedStatus: "remembered"
        }, function (t) {
          return t ? e.onFailure(t) : e.onSuccess("SUCCESS");
        });
      }, t.setDeviceStatusNotRemembered = function (e) {
        if (null == this.signInUserSession || !this.signInUserSession.isValid()) return e.onFailure(new Error("User is not authenticated"));
        this.client.request("UpdateDeviceStatus", {
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
          DeviceKey: this.deviceKey,
          DeviceRememberedStatus: "not_remembered"
        }, function (t) {
          return t ? e.onFailure(t) : e.onSuccess("SUCCESS");
        });
      }, t.listDevices = function (e, t, n) {
        if (null == this.signInUserSession || !this.signInUserSession.isValid()) return n.onFailure(new Error("User is not authenticated"));
        var r = {
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
          Limit: e
        };
        t && (r.PaginationToken = t), this.client.request("ListDevices", r, function (e, t) {
          return e ? n.onFailure(e) : n.onSuccess(t);
        });
      }, t.globalSignOut = function (e) {
        var t = this;
        if (null == this.signInUserSession || !this.signInUserSession.isValid()) return e.onFailure(new Error("User is not authenticated"));
        this.client.request("GlobalSignOut", {
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
        }, function (n) {
          return n ? e.onFailure(n) : (t.clearCachedUser(), e.onSuccess("SUCCESS"));
        });
      }, t.signOut = function (e) {
        var t = this;
        e && "function" == typeof e ? this.getSession(function (n, r) {
          if (n) return e(n);
          t.revokeTokens(function (n) {
            t.cleanClientData(), e(n);
          });
        }) : this.cleanClientData();
      }, t.revokeTokens = function (e) {
        if (void 0 === e && (e = function () {}), "function" != typeof e) throw new Error("Invalid revokeTokenCallback. It should be a function.");
        if (!this.signInUserSession) return e(new Error("User is not authenticated"));
        if (!this.signInUserSession.getAccessToken()) return e(new Error("No Access token available"));
        var t = this.signInUserSession.getRefreshToken().getToken(),
          n = this.signInUserSession.getAccessToken();
        if (this.isSessionRevocable(n) && t) return this.revokeToken({
          token: t,
          callback: e
        });
        e();
      }, t.isSessionRevocable = function (e) {
        if (e && "function" == typeof e.decodePayload) try {
          return !!e.decodePayload().origin_jti;
        } catch (e) {}
        return !1;
      }, t.cleanClientData = function () {
        this.signInUserSession = null, this.clearCachedUser();
      }, t.revokeToken = function (e) {
        var t = e.token,
          n = e.callback;
        this.client.requestWithRetry("RevokeToken", {
          Token: t,
          ClientId: this.pool.getClientId()
        }, function (e) {
          if (e) return n(e);
          n();
        });
      }, t.sendMFASelectionAnswer = function (e, t) {
        var n = this,
          r = {};
        r.USERNAME = this.username, r.ANSWER = e;
        var i = {
          ChallengeName: "SELECT_MFA_TYPE",
          ChallengeResponses: r,
          ClientId: this.pool.getClientId(),
          Session: this.Session
        };
        this.getUserContextData() && (i.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", i, function (r, i) {
          return r ? t.onFailure(r) : (n.Session = i.Session, "SMS_MFA" === e ? t.mfaRequired(i.ChallengeName, i.ChallengeParameters) : "SOFTWARE_TOKEN_MFA" === e ? t.totpRequired(i.ChallengeName, i.ChallengeParameters) : void 0);
        });
      }, t.getUserContextData = function () {
        return this.pool.getUserContextData(this.username);
      }, t.associateSoftwareToken = function (e) {
        var t = this;
        null != this.signInUserSession && this.signInUserSession.isValid() ? this.client.request("AssociateSoftwareToken", {
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
        }, function (t, n) {
          return t ? e.onFailure(t) : e.associateSecretCode(n.SecretCode);
        }) : this.client.request("AssociateSoftwareToken", {
          Session: this.Session
        }, function (n, r) {
          return n ? e.onFailure(n) : (t.Session = r.Session, e.associateSecretCode(r.SecretCode));
        });
      }, t.verifySoftwareToken = function (e, t, n) {
        var r = this;
        null != this.signInUserSession && this.signInUserSession.isValid() ? this.client.request("VerifySoftwareToken", {
          AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
          UserCode: e,
          FriendlyDeviceName: t
        }, function (e, t) {
          return e ? n.onFailure(e) : n.onSuccess(t);
        }) : this.client.request("VerifySoftwareToken", {
          Session: this.Session,
          UserCode: e,
          FriendlyDeviceName: t
        }, function (e, t) {
          if (e) return n.onFailure(e);
          r.Session = t.Session;
          var i = {};
          i.USERNAME = r.username;
          var o = {
            ChallengeName: "MFA_SETUP",
            ClientId: r.pool.getClientId(),
            ChallengeResponses: i,
            Session: r.Session
          };
          r.getUserContextData() && (o.UserContextData = r.getUserContextData()), r.client.request("RespondToAuthChallenge", o, function (e, t) {
            return e ? n.onFailure(e) : (r.signInUserSession = r.getCognitoUserSession(t.AuthenticationResult), r.cacheTokens(), n.onSuccess(r.signInUserSession));
          });
        });
      }, e;
    }();
  /*!
   * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
   * SPDX-License-Identifier: Apache-2.0
   */
  function $r() {}
  $r.prototype.userAgent = Nr.userAgent;
  var Yr = function (e) {
    $r.framework = e;
  };
  function Zr(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return Zr = function (e) {
      if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
      var n;
      if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, r);
      }
      function r() {
        return Xr(e, arguments, ei(this).constructor);
      }
      return r.prototype = Object.create(e.prototype, {
        constructor: {
          value: r,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), Qr(r, e);
    }, Zr(e);
  }
  function Xr(e, t, n) {
    return Xr = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }() ? Reflect.construct.bind() : function (e, t, n) {
      var r = [null];
      r.push.apply(r, t);
      var i = new (Function.bind.apply(e, r))();
      return n && Qr(i, n.prototype), i;
    }, Xr.apply(null, arguments);
  }
  function Qr(e, t) {
    return Qr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      return e.__proto__ = t, e;
    }, Qr(e, t);
  }
  function ei(e) {
    return ei = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, ei(e);
  }
  var ti = function (e) {
      var t, n;
      function r(t, n, r, i) {
        var o;
        return (o = e.call(this, t) || this).code = n, o.name = r, o.statusCode = i, o;
      }
      return n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, Qr(t, n), r;
    }(Zr(Error)),
    ni = function () {
      function e(e, t, n) {
        this.endpoint = t || "https://cognito-idp." + e + ".amazonaws.com/";
        var r = (n || {}).credentials;
        this.fetchOptions = r ? {
          credentials: r
        } : {};
      }
      var t = e.prototype;
      return t.promisifyRequest = function (e, t) {
        var n = this;
        return new Promise(function (r, i) {
          n.request(e, t, function (e, t) {
            e ? i(new ti(e.message, e.code, e.name, e.statusCode)) : r(t);
          });
        });
      }, t.requestWithRetry = function (e, t, n) {
        var r,
          i,
          o,
          s = this;
        (r = function (t) {
          return new Promise(function (n, r) {
            s.request(e, t, function (e, t) {
              e ? r(e) : n(t);
            });
          });
        }, i = [t], o = 5e3, oi(r, i, function (e) {
          var t = 100,
            n = 100;
          return function (r) {
            var i = Math.pow(2, r) * t + n * Math.random();
            return !(i > e) && i;
          };
        }(o))).then(function (e) {
          return n(null, e);
        }).catch(function (e) {
          return n(e);
        });
      }, t.request = function (e, t, n) {
        var r,
          i,
          o,
          s = {
            "Content-Type": "application/x-amz-json-1.1",
            "X-Amz-Target": "AWSCognitoIdentityProviderService." + e,
            "X-Amz-User-Agent": (r = $r.category ? " " + $r.category : "", i = $r.framework ? " framework/" + $r.framework : "", "" + $r.prototype.userAgent + r + i),
            "Cache-Control": "no-store"
          },
          a = Object.assign({}, this.fetchOptions, {
            headers: s,
            method: "POST",
            mode: "cors",
            body: JSON.stringify(t)
          });
        fetch(this.endpoint, a).then(function (e) {
          return o = e, e;
        }, function (e) {
          if (e instanceof TypeError) throw new Error("Network error");
          throw e;
        }).then(function (e) {
          return e.json().catch(function () {
            return {};
          });
        }).then(function (e) {
          if (o.ok) return n(null, e);
          var t = (e.__type || e.code).split("#").pop(),
            r = new Error(e.message || e.Message || null);
          return r.name = t, r.code = t, n(r);
        }).catch(function (e) {
          if (o && o.headers && o.headers.get("x-amzn-errortype")) try {
            var t = o.headers.get("x-amzn-errortype").split(":")[0],
              r = new Error(o.status ? o.status.toString() : null);
            return r.code = t, r.name = t, r.statusCode = o.status, n(r);
          } catch (t) {
            return n(e);
          } else e instanceof Error && "Network error" === e.message && (e.code = "NetworkError");
          return n(e);
        });
      }, e;
    }(),
    ri = {
      debug: function () {}
    },
    ii = function (e) {
      return e && e.nonRetryable;
    };
  function oi(e, t, n, r) {
    if (void 0 === r && (r = 1), "function" != typeof e) throw Error("functionToRetry must be a function");
    return ri.debug(e.name + " attempt #" + r + " with args: " + JSON.stringify(t)), e.apply(void 0, t).catch(function (i) {
      if (ri.debug("error on " + e.name, i), ii(i)) throw ri.debug(e.name + " non retryable error", i), i;
      var o = n(r, t, i);
      if (ri.debug(e.name + " retrying in " + o + " ms"), !1 !== o) return new Promise(function (e) {
        return setTimeout(e, o);
      }).then(function () {
        return oi(e, t, n, r + 1);
      });
      throw i;
    });
  }
  /*!
   * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
   * SPDX-License-Identifier: Apache-2.0
   */
  var si,
    ai = function () {
      function e(e, t) {
        var n = e || {},
          r = n.UserPoolId,
          i = n.ClientId,
          o = n.endpoint,
          s = n.fetchOptions,
          a = n.AdvancedSecurityDataCollectionFlag;
        if (!r || !i) throw new Error("Both UserPoolId and ClientId are required.");
        if (r.length > 55 || !/^[\w-]+_[0-9a-zA-Z]+$/.test(r)) throw new Error("Invalid UserPoolId format.");
        var u = r.split("_")[0];
        this.userPoolId = r, this.clientId = i, this.client = new ni(u, o, s), this.advancedSecurityDataCollectionFlag = !1 !== a, this.storage = e.Storage || new Hr().getStorage(), t && (this.wrapRefreshSessionCallback = t);
      }
      var t = e.prototype;
      return t.getUserPoolId = function () {
        return this.userPoolId;
      }, t.getUserPoolName = function () {
        return this.getUserPoolId().split("_")[1];
      }, t.getClientId = function () {
        return this.clientId;
      }, t.signUp = function (e, t, n, r, i, o) {
        var s = this,
          a = {
            ClientId: this.clientId,
            Username: e,
            Password: t,
            UserAttributes: n,
            ValidationData: r,
            ClientMetadata: o
          };
        this.getUserContextData(e) && (a.UserContextData = this.getUserContextData(e)), this.client.request("SignUp", a, function (t, n) {
          if (t) return i(t, null);
          var r = {
              Username: e,
              Pool: s,
              Storage: s.storage
            },
            o = {
              user: new Jr(r),
              userConfirmed: n.UserConfirmed,
              userSub: n.UserSub,
              codeDeliveryDetails: n.CodeDeliveryDetails
            };
          return i(null, o);
        });
      }, t.getCurrentUser = function () {
        var e = "CognitoIdentityServiceProvider." + this.clientId + ".LastAuthUser",
          t = this.storage.getItem(e);
        if (t) {
          var n = {
            Username: t,
            Pool: this,
            Storage: this.storage
          };
          return new Jr(n);
        }
        return null;
      }, t.getUserContextData = function (e) {
        if ("undefined" != typeof AmazonCognitoAdvancedSecurityData) {
          var t = AmazonCognitoAdvancedSecurityData;
          if (this.advancedSecurityDataCollectionFlag) {
            var n = t.getData(e, this.userPoolId, this.clientId);
            if (n) return {
              EncodedData: n
            };
          }
          return {};
        }
      }, e;
    }(),
    ui = {
      exports: {}
    };
  si = function () {
    function e() {
      for (var e = 0, t = {}; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) t[r] = n[r];
      }
      return t;
    }
    function t(e) {
      return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    return function n(r) {
      function i() {}
      function o(t, n, o) {
        if ("undefined" != typeof document) {
          "number" == typeof (o = e({
            path: "/"
          }, i.defaults, o)).expires && (o.expires = new Date(1 * new Date() + 864e5 * o.expires)), o.expires = o.expires ? o.expires.toUTCString() : "";
          try {
            var s = JSON.stringify(n);
            /^[\{\[]/.test(s) && (n = s);
          } catch (e) {}
          n = r.write ? r.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var a = "";
          for (var u in o) o[u] && (a += "; " + u, !0 !== o[u] && (a += "=" + o[u].split(";")[0]));
          return document.cookie = t + "=" + n + a;
        }
      }
      function s(e, n) {
        if ("undefined" != typeof document) {
          for (var i = {}, o = document.cookie ? document.cookie.split("; ") : [], s = 0; s < o.length; s++) {
            var a = o[s].split("="),
              u = a.slice(1).join("=");
            n || '"' !== u.charAt(0) || (u = u.slice(1, -1));
            try {
              var c = t(a[0]);
              if (u = (r.read || r)(u, c) || t(u), n) try {
                u = JSON.parse(u);
              } catch (e) {}
              if (i[c] = u, e === c) break;
            } catch (e) {}
          }
          return e ? i[e] : i;
        }
      }
      return i.set = o, i.get = function (e) {
        return s(e, !1);
      }, i.getJSON = function (e) {
        return s(e, !0);
      }, i.remove = function (t, n) {
        o(t, "", e(n, {
          expires: -1
        }));
      }, i.defaults = {}, i.withConverter = n, i;
    }(function () {});
  };
  var ci = ui.exports = si(),
    li = function () {
      function e(e) {
        if (void 0 === e && (e = {}), e.domain && (this.domain = e.domain), e.path ? this.path = e.path : this.path = "/", Object.prototype.hasOwnProperty.call(e, "expires") ? this.expires = e.expires : this.expires = 365, Object.prototype.hasOwnProperty.call(e, "secure") ? this.secure = e.secure : this.secure = !0, Object.prototype.hasOwnProperty.call(e, "sameSite")) {
          if (!["strict", "lax", "none"].includes(e.sameSite)) throw new Error('The sameSite value of cookieStorage must be "lax", "strict" or "none".');
          if ("none" === e.sameSite && !this.secure) throw new Error("sameSite = None requires the Secure attribute in latest browser versions.");
          this.sameSite = e.sameSite;
        } else this.sameSite = null;
      }
      var t = e.prototype;
      return t.setItem = function (e, t) {
        var n = {
          path: this.path,
          expires: this.expires,
          domain: this.domain,
          secure: this.secure
        };
        return this.sameSite && (n.sameSite = this.sameSite), ci.set(e, t, n), ci.get(e);
      }, t.getItem = function (e) {
        return ci.get(e);
      }, t.removeItem = function (e) {
        var t = {
          path: this.path,
          expires: this.expires,
          domain: this.domain,
          secure: this.secure
        };
        return this.sameSite && (t.sameSite = this.sameSite), ci.remove(e, t);
      }, t.clear = function () {
        for (var e = ci.get(), t = Object.keys(e).length, n = 0; n < t; ++n) this.removeItem(Object.keys(e)[n]);
        return {};
      }, e;
    }(),
    hi = {
      exports: {}
    };
  !function (e, t) {
    !function (n) {
      var r = t && !t.nodeType && t,
        i = e && !e.nodeType && e,
        o = "object" == typeof qe && qe;
      o.global !== o && o.window !== o && o.self !== o || (n = o);
      var s,
        a,
        u = 2147483647,
        c = 36,
        l = 1,
        h = 26,
        f = 38,
        d = 700,
        p = 72,
        g = 128,
        y = "-",
        v = /^xn--/,
        m = /[^\x20-\x7E]/,
        w = /[\x2E\u3002\uFF0E\uFF61]/g,
        b = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input"
        },
        _ = c - l,
        S = Math.floor,
        A = String.fromCharCode;
      function I(e) {
        throw RangeError(b[e]);
      }
      function C(e, t) {
        for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
        return r;
      }
      function E(e, t) {
        var n = e.split("@"),
          r = "";
        return n.length > 1 && (r = n[0] + "@", e = n[1]), r + C((e = e.replace(w, ".")).split("."), t).join(".");
      }
      function T(e) {
        for (var t, n, r = [], i = 0, o = e.length; i < o;) (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o ? 56320 == (64512 & (n = e.charCodeAt(i++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--) : r.push(t);
        return r;
      }
      function U(e) {
        return C(e, function (e) {
          var t = "";
          return e > 65535 && (t += A((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += A(e);
        }).join("");
      }
      function k(e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
      }
      function P(e, t, n) {
        var r = 0;
        for (e = n ? S(e / d) : e >> 1, e += S(e / t); e > _ * h >> 1; r += c) e = S(e / _);
        return S(r + (_ + 1) * e / (e + f));
      }
      function O(e) {
        var t,
          n,
          r,
          i,
          o,
          s,
          a,
          f,
          d,
          v,
          m,
          w = [],
          b = e.length,
          _ = 0,
          A = g,
          C = p;
        for ((n = e.lastIndexOf(y)) < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && I("not-basic"), w.push(e.charCodeAt(r));
        for (i = n > 0 ? n + 1 : 0; i < b;) {
          for (o = _, s = 1, a = c; i >= b && I("invalid-input"), ((f = (m = e.charCodeAt(i++)) - 48 < 10 ? m - 22 : m - 65 < 26 ? m - 65 : m - 97 < 26 ? m - 97 : c) >= c || f > S((u - _) / s)) && I("overflow"), _ += f * s, !(f < (d = a <= C ? l : a >= C + h ? h : a - C)); a += c) s > S(u / (v = c - d)) && I("overflow"), s *= v;
          C = P(_ - o, t = w.length + 1, 0 == o), S(_ / t) > u - A && I("overflow"), A += S(_ / t), _ %= t, w.splice(_++, 0, A);
        }
        return U(w);
      }
      function R(e) {
        var t,
          n,
          r,
          i,
          o,
          s,
          a,
          f,
          d,
          v,
          m,
          w,
          b,
          _,
          C,
          E = [];
        for (w = (e = T(e)).length, t = g, n = 0, o = p, s = 0; s < w; ++s) (m = e[s]) < 128 && E.push(A(m));
        for (r = i = E.length, i && E.push(y); r < w;) {
          for (a = u, s = 0; s < w; ++s) (m = e[s]) >= t && m < a && (a = m);
          for (a - t > S((u - n) / (b = r + 1)) && I("overflow"), n += (a - t) * b, t = a, s = 0; s < w; ++s) if ((m = e[s]) < t && ++n > u && I("overflow"), m == t) {
            for (f = n, d = c; !(f < (v = d <= o ? l : d >= o + h ? h : d - o)); d += c) C = f - v, _ = c - v, E.push(A(k(v + C % _, 0))), f = S(C / _);
            E.push(A(k(f, 0))), o = P(n, b, r == i), n = 0, ++r;
          }
          ++n, ++t;
        }
        return E.join("");
      }
      if (s = {
        version: "1.3.2",
        ucs2: {
          decode: T,
          encode: U
        },
        decode: O,
        encode: R,
        toASCII: function (e) {
          return E(e, function (e) {
            return m.test(e) ? "xn--" + R(e) : e;
          });
        },
        toUnicode: function (e) {
          return E(e, function (e) {
            return v.test(e) ? O(e.slice(4).toLowerCase()) : e;
          });
        }
      }, r && i) {
        if (e.exports == r) i.exports = s;else for (a in s) s.hasOwnProperty(a) && (r[a] = s[a]);
      } else n.punycode = s;
    }(qe);
  }(hi, hi.exports);
  var fi = hi.exports,
    di = {};
  function pi(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  var gi = function (e) {
    switch (typeof e) {
      case "string":
        return e;
      case "boolean":
        return e ? "true" : "false";
      case "number":
        return isFinite(e) ? e : "";
      default:
        return "";
    }
  };
  di.decode = di.parse = function (e, t, n, r) {
    t = t || "&", n = n || "=";
    var i = {};
    if ("string" != typeof e || 0 === e.length) return i;
    var o = /\+/g;
    e = e.split(t);
    var s = 1e3;
    r && "number" == typeof r.maxKeys && (s = r.maxKeys);
    var a = e.length;
    s > 0 && a > s && (a = s);
    for (var u = 0; u < a; ++u) {
      var c,
        l,
        h,
        f,
        d = e[u].replace(o, "%20"),
        p = d.indexOf(n);
      p >= 0 ? (c = d.substr(0, p), l = d.substr(p + 1)) : (c = d, l = ""), h = decodeURIComponent(c), f = decodeURIComponent(l), pi(i, h) ? Array.isArray(i[h]) ? i[h].push(f) : i[h] = [i[h], f] : i[h] = f;
    }
    return i;
  }, di.encode = di.stringify = function (e, t, n, r) {
    return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? Object.keys(e).map(function (r) {
      var i = encodeURIComponent(gi(r)) + n;
      return Array.isArray(e[r]) ? e[r].map(function (e) {
        return i + encodeURIComponent(gi(e));
      }).join(t) : i + encodeURIComponent(gi(e[r]));
    }).join(t) : r ? encodeURIComponent(gi(r)) + n + encodeURIComponent(gi(e)) : "";
  };
  var yi = fi,
    vi = {
      isString: function (e) {
        return "string" == typeof e;
      },
      isObject: function (e) {
        return "object" == typeof e && null !== e;
      },
      isNull: function (e) {
        return null === e;
      },
      isNullOrUndefined: function (e) {
        return null == e;
      }
    },
    mi = Di;
  function wi() {
    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
  }
  var bi = /^([a-z0-9.+-]+:)/i,
    _i = /:[0-9]*$/,
    Si = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    Ai = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
    Ii = ["'"].concat(Ai),
    Ci = ["%", "/", "?", ";", "#"].concat(Ii),
    Ei = ["/", "?", "#"],
    Ti = /^[+a-z0-9A-Z_-]{0,63}$/,
    Ui = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    ki = {
      javascript: !0,
      "javascript:": !0
    },
    Pi = {
      javascript: !0,
      "javascript:": !0
    },
    Oi = {
      http: !0,
      https: !0,
      ftp: !0,
      gopher: !0,
      file: !0,
      "http:": !0,
      "https:": !0,
      "ftp:": !0,
      "gopher:": !0,
      "file:": !0
    },
    Ri = di;
  function Di(e, t, n) {
    if (e && vi.isObject(e) && e instanceof wi) return e;
    var r = new wi();
    return r.parse(e, t, n), r;
  }
  wi.prototype.parse = function (e, t, n) {
    if (!vi.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
    var r = e.indexOf("?"),
      i = -1 !== r && r < e.indexOf("#") ? "?" : "#",
      o = e.split(i);
    o[0] = o[0].replace(/\\/g, "/");
    var s = e = o.join(i);
    if (s = s.trim(), !n && 1 === e.split("#").length) {
      var a = Si.exec(s);
      if (a) return this.path = s, this.href = s, this.pathname = a[1], a[2] ? (this.search = a[2], this.query = t ? Ri.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this;
    }
    var u = bi.exec(s);
    if (u) {
      var c = (u = u[0]).toLowerCase();
      this.protocol = c, s = s.substr(u.length);
    }
    if (n || u || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var l = "//" === s.substr(0, 2);
      !l || u && Pi[u] || (s = s.substr(2), this.slashes = !0);
    }
    if (!Pi[u] && (l || u && !Oi[u])) {
      for (var h, f, d = -1, p = 0; p < Ei.length; p++) {
        -1 !== (g = s.indexOf(Ei[p])) && (-1 === d || g < d) && (d = g);
      }
      -1 !== (f = -1 === d ? s.lastIndexOf("@") : s.lastIndexOf("@", d)) && (h = s.slice(0, f), s = s.slice(f + 1), this.auth = decodeURIComponent(h)), d = -1;
      for (p = 0; p < Ci.length; p++) {
        var g;
        -1 !== (g = s.indexOf(Ci[p])) && (-1 === d || g < d) && (d = g);
      }
      -1 === d && (d = s.length), this.host = s.slice(0, d), s = s.slice(d), this.parseHost(), this.hostname = this.hostname || "";
      var y = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
      if (!y) for (var v = this.hostname.split(/\./), m = (p = 0, v.length); p < m; p++) {
        var w = v[p];
        if (w && !w.match(Ti)) {
          for (var b = "", _ = 0, S = w.length; _ < S; _++) w.charCodeAt(_) > 127 ? b += "x" : b += w[_];
          if (!b.match(Ti)) {
            var A = v.slice(0, p),
              I = v.slice(p + 1),
              C = w.match(Ui);
            C && (A.push(C[1]), I.unshift(C[2])), I.length && (s = "/" + I.join(".") + s), this.hostname = A.join(".");
            break;
          }
        }
      }
      this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), y || (this.hostname = yi.toASCII(this.hostname));
      var E = this.port ? ":" + this.port : "",
        T = this.hostname || "";
      this.host = T + E, this.href += this.host, y && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== s[0] && (s = "/" + s));
    }
    if (!ki[c]) for (p = 0, m = Ii.length; p < m; p++) {
      var U = Ii[p];
      if (-1 !== s.indexOf(U)) {
        var k = encodeURIComponent(U);
        k === U && (k = escape(U)), s = s.split(U).join(k);
      }
    }
    var P = s.indexOf("#");
    -1 !== P && (this.hash = s.substr(P), s = s.slice(0, P));
    var O = s.indexOf("?");
    if (-1 !== O ? (this.search = s.substr(O), this.query = s.substr(O + 1), t && (this.query = Ri.parse(this.query)), s = s.slice(0, O)) : t && (this.search = "", this.query = {}), s && (this.pathname = s), Oi[c] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
      E = this.pathname || "";
      var R = this.search || "";
      this.path = E + R;
    }
    return this.href = this.format(), this;
  }, wi.prototype.format = function () {
    var e = this.auth || "";
    e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
    var t = this.protocol || "",
      n = this.pathname || "",
      r = this.hash || "",
      i = !1,
      o = "";
    this.host ? i = e + this.host : this.hostname && (i = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && vi.isObject(this.query) && Object.keys(this.query).length && (o = Ri.stringify(this.query));
    var s = this.search || o && "?" + o || "";
    return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || Oi[t]) && !1 !== i ? (i = "//" + (i || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : i || (i = ""), r && "#" !== r.charAt(0) && (r = "#" + r), s && "?" !== s.charAt(0) && (s = "?" + s), t + i + (n = n.replace(/[?#]/g, function (e) {
      return encodeURIComponent(e);
    })) + (s = s.replace("#", "%23")) + r;
  }, wi.prototype.resolve = function (e) {
    return this.resolveObject(Di(e, !1, !0)).format();
  }, wi.prototype.resolveObject = function (e) {
    if (vi.isString(e)) {
      var t = new wi();
      t.parse(e, !1, !0), e = t;
    }
    for (var n = new wi(), r = Object.keys(this), i = 0; i < r.length; i++) {
      var o = r[i];
      n[o] = this[o];
    }
    if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
    if (e.slashes && !e.protocol) {
      for (var s = Object.keys(e), a = 0; a < s.length; a++) {
        var u = s[a];
        "protocol" !== u && (n[u] = e[u]);
      }
      return Oi[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n;
    }
    if (e.protocol && e.protocol !== n.protocol) {
      if (!Oi[e.protocol]) {
        for (var c = Object.keys(e), l = 0; l < c.length; l++) {
          var h = c[l];
          n[h] = e[h];
        }
        return n.href = n.format(), n;
      }
      if (n.protocol = e.protocol, e.host || Pi[e.protocol]) n.pathname = e.pathname;else {
        for (var f = (e.pathname || "").split("/"); f.length && !(e.host = f.shift()););
        e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== f[0] && f.unshift(""), f.length < 2 && f.unshift(""), n.pathname = f.join("/");
      }
      if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
        var d = n.pathname || "",
          p = n.search || "";
        n.path = d + p;
      }
      return n.slashes = n.slashes || e.slashes, n.href = n.format(), n;
    }
    var g = n.pathname && "/" === n.pathname.charAt(0),
      y = e.host || e.pathname && "/" === e.pathname.charAt(0),
      v = y || g || n.host && e.pathname,
      m = v,
      w = n.pathname && n.pathname.split("/") || [],
      b = (f = e.pathname && e.pathname.split("/") || [], n.protocol && !Oi[n.protocol]);
    if (b && (n.hostname = "", n.port = null, n.host && ("" === w[0] ? w[0] = n.host : w.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === f[0] ? f[0] = e.host : f.unshift(e.host)), e.host = null), v = v && ("" === f[0] || "" === w[0])), y) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, w = f;else if (f.length) w || (w = []), w.pop(), w = w.concat(f), n.search = e.search, n.query = e.query;else if (!vi.isNullOrUndefined(e.search)) {
      if (b) n.hostname = n.host = w.shift(), (C = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = C.shift(), n.host = n.hostname = C.shift());
      return n.search = e.search, n.query = e.query, vi.isNull(n.pathname) && vi.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
    }
    if (!w.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
    for (var _ = w.slice(-1)[0], S = (n.host || e.host || w.length > 1) && ("." === _ || ".." === _) || "" === _, A = 0, I = w.length; I >= 0; I--) "." === (_ = w[I]) ? w.splice(I, 1) : ".." === _ ? (w.splice(I, 1), A++) : A && (w.splice(I, 1), A--);
    if (!v && !m) for (; A--; A) w.unshift("..");
    !v || "" === w[0] || w[0] && "/" === w[0].charAt(0) || w.unshift(""), S && "/" !== w.join("/").substr(-1) && w.push("");
    var C,
      E = "" === w[0] || w[0] && "/" === w[0].charAt(0);
    b && (n.hostname = n.host = E ? "" : w.length ? w.shift() : "", (C = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = C.shift(), n.host = n.hostname = C.shift()));
    return (v = v || n.host && w.length) && !E && w.unshift(""), w.length ? n.pathname = w.join("/") : (n.pathname = null, n.path = null), vi.isNull(n.pathname) && vi.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n;
  }, wi.prototype.parseHost = function () {
    var e = this.host,
      t = _i.exec(e);
    t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
  };
  var xi,
    Fi = function (e) {
      var t = window.open(e, "_self");
      return t ? Promise.resolve(t) : Promise.reject();
    },
    Mi = "undefined" != typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("amplify_default") : "@@amplify_default",
    ji = function (e, t, n) {
      Re.dispatch("auth", {
        event: e,
        data: t,
        message: n
      }, "Auth", Mi);
    },
    Ni = new oe("OAuth"),
    Li = function () {
      function e(e) {
        var t = e.config,
          n = e.cognitoClientId,
          r = e.scopes,
          i = void 0 === r ? [] : r;
        if (this._urlOpener = t.urlOpener || Fi, this._config = t, this._cognitoClientId = n, !this.isValidScopes(i)) throw Error("scopes must be a String Array");
        this._scopes = i;
      }
      return e.prototype.isValidScopes = function (e) {
        return Array.isArray(e) && e.every(function (e) {
          return "string" == typeof e;
        });
      }, e.prototype.oauthSignIn = function (e, t, n, r, i, o) {
        void 0 === e && (e = "code"), void 0 === i && (i = x.Cognito);
        var a = this._generateState(32),
          u = o ? a + "-" + o.split("").map(function (e) {
            return e.charCodeAt(0).toString(16).padStart(2, "0");
          }).join("") : a;
        !function (e) {
          window.sessionStorage.setItem("oauth_state", e);
        }(u);
        var c,
          l = this._generateRandom(128);
        c = l, window.sessionStorage.setItem("ouath_pkce_key", c);
        var h = this._generateChallenge(l),
          f = this._scopes.join(" "),
          d = "https://" + t + "/oauth2/authorize?" + Object.entries(s(s({
            redirect_uri: n,
            response_type: e,
            client_id: r,
            identity_provider: i,
            scope: f,
            state: u
          }, "code" === e ? {
            code_challenge: h
          } : {}), "code" === e ? {
            code_challenge_method: "S256"
          } : {})).map(function (e) {
            var t = y(e, 2),
              n = t[0],
              r = t[1];
            return encodeURIComponent(n) + "=" + encodeURIComponent(r);
          }).join("&");
        Ni.debug("Redirecting to " + d), this._urlOpener(d, n);
      }, e.prototype._handleCodeFlow = function (e) {
        return h(this, void 0, void 0, function () {
          var t, n, r, i, o, a, u, c, l, h, d, p, g, v, m, w;
          return f(this, function (f) {
            switch (f.label) {
              case 0:
                return t = (mi(e).query || "").split("&").map(function (e) {
                  return e.split("=");
                }).reduce(function (e, t) {
                  var n,
                    r = y(t, 2),
                    i = r[0],
                    o = r[1];
                  return s(s({}, e), ((n = {})[i] = o, n));
                }, {
                  code: void 0
                }).code, n = mi(e).pathname || "/", r = mi(this._config.redirectSignIn).pathname || "/", t && n === r ? (i = "https://" + this._config.domain + "/oauth2/token", ji("codeFlow", {}, "Retrieving tokens from " + i), o = B(this._config) ? this._cognitoClientId : this._config.clientID, a = B(this._config) ? this._config.redirectSignIn : this._config.redirectUri, b = window.sessionStorage.getItem("ouath_pkce_key"), window.sessionStorage.removeItem("ouath_pkce_key"), c = s({
                  grant_type: "authorization_code",
                  code: t,
                  client_id: o,
                  redirect_uri: a
                }, (u = b) ? {
                  code_verifier: u
                } : {}), Ni.debug("Calling token endpoint: " + i + " with", c), l = Object.entries(c).map(function (e) {
                  var t = y(e, 2),
                    n = t[0],
                    r = t[1];
                  return encodeURIComponent(n) + "=" + encodeURIComponent(r);
                }).join("&"), h = {
                  category: z.Auth,
                  action: Y.FederatedSignIn
                }, [4, fetch(i, {
                  method: "POST",
                  headers: (w = {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }, w["x-amz-user-agent"] = Ce(h), w),
                  body: l
                })]) : [2];
              case 1:
                return [4, f.sent().json()];
              case 2:
                if (d = f.sent(), p = d.access_token, g = d.refresh_token, v = d.id_token, m = d.error) throw new Error(m);
                return [2, {
                  accessToken: p,
                  refreshToken: g,
                  idToken: v
                }];
            }
            var b;
          });
        });
      }, e.prototype._handleImplicitFlow = function (e) {
        return h(this, void 0, void 0, function () {
          var t, n, r;
          return f(this, function (i) {
            return t = (mi(e).hash || "#").substr(1).split("&").map(function (e) {
              return e.split("=");
            }).reduce(function (e, t) {
              var n,
                r = y(t, 2),
                i = r[0],
                o = r[1];
              return s(s({}, e), ((n = {})[i] = o, n));
            }, {
              id_token: void 0,
              access_token: void 0
            }), n = t.id_token, r = t.access_token, ji("implicitFlow", {}, "Got tokens from " + e), Ni.debug("Retrieving implicit tokens from " + e + " with"), [2, {
              accessToken: r,
              idToken: n,
              refreshToken: null
            }];
          });
        });
      }, e.prototype.handleAuthResponse = function (e) {
        return h(this, void 0, void 0, function () {
          var t, n, r, i, o, a, u;
          return f(this, function (c) {
            switch (c.label) {
              case 0:
                if (c.trys.push([0, 5,, 6]), t = e ? s(s({}, (mi(e).hash || "#").substr(1).split("&").map(function (e) {
                  return e.split("=");
                }).reduce(function (e, t) {
                  var n = y(t, 2),
                    r = n[0],
                    i = n[1];
                  return e[r] = i, e;
                }, {})), (mi(e).query || "").split("&").map(function (e) {
                  return e.split("=");
                }).reduce(function (e, t) {
                  var n = y(t, 2),
                    r = n[0],
                    i = n[1];
                  return e[r] = i, e;
                }, {})) : {}, n = t.error, r = t.error_description, n) throw new Error(r);
                return i = this._validateState(t), Ni.debug("Starting " + this._config.responseType + " flow with " + e), "code" !== this._config.responseType ? [3, 2] : (o = [{}], [4, this._handleCodeFlow(e)]);
              case 1:
                return [2, s.apply(void 0, [s.apply(void 0, o.concat([c.sent()])), {
                  state: i
                }])];
              case 2:
                return a = [{}], [4, this._handleImplicitFlow(e)];
              case 3:
                return [2, s.apply(void 0, [s.apply(void 0, a.concat([c.sent()])), {
                  state: i
                }])];
              case 4:
                return [3, 6];
              case 5:
                throw u = c.sent(), Ni.debug("Error handling auth response.", u), u;
              case 6:
                return [2];
            }
          });
        });
      }, e.prototype._validateState = function (e) {
        if (e) {
          var t,
            n = (t = window.sessionStorage.getItem("oauth_state"), window.sessionStorage.removeItem("oauth_state"), t),
            r = e.state;
          if (n && n !== r) throw new Error("Invalid state in OAuth flow");
          return r;
        }
      }, e.prototype.signOut = function () {
        return h(this, void 0, void 0, function () {
          var e, t, n;
          return f(this, function (r) {
            return e = "https://" + this._config.domain + "/logout?", t = B(this._config) ? this._cognitoClientId : this._config.oauth.clientID, n = B(this._config) ? this._config.redirectSignOut : this._config.returnTo, e += Object.entries({
              client_id: t,
              logout_uri: encodeURIComponent(n)
            }).map(function (e) {
              var t = y(e, 2);
              return t[0] + "=" + t[1];
            }).join("&"), ji("oAuthSignOut", {
              oAuth: "signOut"
            }, "Signing out from " + e), Ni.debug("Signing out from " + e), [2, this._urlOpener(e, n)];
          });
        });
      }, e.prototype._generateState = function (e) {
        for (var t = "", n = e, r = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; n > 0; --n) t += r[Math.round(61 * Math.random())];
        return t;
      }, e.prototype._generateChallenge = function (e) {
        var t = new He.Sha256();
        t.update(e);
        var n = t.digestSync(),
          r = tr.Buffer.from(n).toString("base64");
        return this._base64URL(r);
      }, e.prototype._base64URL = function (e) {
        return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
      }, e.prototype._generateRandom = function (e) {
        var t = new Uint8Array(e);
        if ("undefined" != typeof window && window.crypto) window.crypto.getRandomValues(t);else for (var n = 0; n < e; n += 1) t[n] = 66 * Math.random() | 0;
        return this._bufferToString(t);
      }, e.prototype._bufferToString = function (e) {
        for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = [], r = 0; r < e.byteLength; r += 1) {
          var i = e[r] % 62;
          n.push(t[i]);
        }
        return n.join("");
      }, e;
    }();
  !function (e) {
    e.DEFAULT_MSG = "Authentication Error", e.EMPTY_EMAIL = "Email cannot be empty", e.EMPTY_PHONE = "Phone number cannot be empty", e.EMPTY_USERNAME = "Username cannot be empty", e.INVALID_USERNAME = "The username should either be a string or one of the sign in types", e.EMPTY_PASSWORD = "Password cannot be empty", e.EMPTY_CODE = "Confirmation code cannot be empty", e.SIGN_UP_ERROR = "Error creating account", e.NO_MFA = "No valid MFA method provided", e.INVALID_MFA = "Invalid MFA type", e.EMPTY_CHALLENGE = "Challenge response cannot be empty", e.NO_USER_SESSION = "Failed to get the session because the user is empty", e.NETWORK_ERROR = "Network Error", e.DEVICE_CONFIG = "Device tracking has not been configured in this User Pool", e.AUTOSIGNIN_ERROR = "Please use your credentials to sign in";
  }(xi || (xi = {}));
  var Bi = new oe("AuthError"),
    Vi = function (e) {
      function t(n) {
        var r = this,
          i = qi[n],
          o = i.message,
          s = i.log;
        return (r = e.call(this, o) || this).constructor = t, Object.setPrototypeOf(r, t.prototype), r.name = "AuthError", r.log = s || o, Bi.error(r.log), r;
      }
      return o(t, e), t;
    }(Error),
    Ki = function (e) {
      function t(n) {
        var r = e.call(this, n) || this;
        return r.constructor = t, Object.setPrototypeOf(r, t.prototype), r.name = "NoUserPoolError", r;
      }
      return o(t, e), t;
    }(Vi),
    qi = {
      noConfig: {
        message: xi.DEFAULT_MSG,
        log: "\n            Error: Amplify has not been configured correctly.\n            This error is typically caused by one of the following scenarios:\n\n            1. Make sure you're passing the awsconfig object to Amplify.configure() in your app's entry point\n                See https://aws-amplify.github.io/docs/js/authentication#configure-your-app for more information\n            \n            2. There might be multiple conflicting versions of amplify packages in your node_modules.\n\t\t\t\tRefer to our docs site for help upgrading Amplify packages (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js)\n        "
      },
      missingAuthConfig: {
        message: xi.DEFAULT_MSG,
        log: "\n            Error: Amplify has not been configured correctly. \n            The configuration object is missing required auth properties.\n            This error is typically caused by one of the following scenarios:\n\n            1. Did you run `amplify push` after adding auth via `amplify add auth`?\n                See https://aws-amplify.github.io/docs/js/authentication#amplify-project-setup for more information\n\n            2. This could also be caused by multiple conflicting versions of amplify packages, see (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js) for help upgrading Amplify packages.\n        "
      },
      emptyUsername: {
        message: xi.EMPTY_USERNAME
      },
      invalidUsername: {
        message: xi.INVALID_USERNAME
      },
      emptyPassword: {
        message: xi.EMPTY_PASSWORD
      },
      emptyCode: {
        message: xi.EMPTY_CODE
      },
      signUpError: {
        message: xi.SIGN_UP_ERROR,
        log: "The first parameter should either be non-null string or object"
      },
      noMFA: {
        message: xi.NO_MFA
      },
      invalidMFA: {
        message: xi.INVALID_MFA
      },
      emptyChallengeResponse: {
        message: xi.EMPTY_CHALLENGE
      },
      noUserSession: {
        message: xi.NO_USER_SESSION
      },
      deviceConfig: {
        message: xi.DEVICE_CONFIG
      },
      networkError: {
        message: xi.NETWORK_ERROR
      },
      autoSignInError: {
        message: xi.AUTOSIGNIN_ERROR
      },
      default: {
        message: xi.DEFAULT_MSG
      }
    },
    Wi = new oe("AuthClass"),
    Gi = "aws.cognito.signin.user.admin",
    Hi = "undefined" != typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("amplify_default") : "@@amplify_default",
    zi = function (e, t, n) {
      Re.dispatch("auth", {
        event: e,
        data: t,
        message: n
      }, "Auth", Hi);
    },
    Ji = function () {
      function e(e) {
        var t = this;
        this.userPool = null, this.user = null, this.oAuthFlowInProgress = !1, this.autoSignInInitiated = !1, this.inflightSessionPromise = null, this.inflightSessionPromiseCounter = 0, this.Credentials = Vn, this.wrapRefreshSessionCallback = function (e) {
          return function (t, n) {
            return n ? zi("tokenRefresh", void 0, "New token retrieved") : zi("tokenRefresh_failure", t, "Failed to retrieve new token"), e(t, n);
          };
        }, this.configure(e), this.currentCredentials = this.currentCredentials.bind(this), this.currentUserCredentials = this.currentUserCredentials.bind(this), Re.listen("auth", function (e) {
          switch (e.payload.event) {
            case "verify":
            case "signIn":
              t._storage.setItem("amplify-signin-with-hostedUI", "false");
              break;
            case "signOut":
              t._storage.removeItem("amplify-signin-with-hostedUI");
              break;
            case "cognitoHostedUI":
              t._storage.setItem("amplify-signin-with-hostedUI", "true");
          }
        }), $r.category = "auth", Yr(Ie.framework), Ie.observeFrameworkChanges(function () {
          Yr(Ie.framework);
        });
      }
      return e.prototype.getModuleName = function () {
        return "Auth";
      }, e.prototype.configure = function (e) {
        var t = this;
        if (!e) return this._config || {};
        Wi.debug("configure Auth");
        var n = Object.assign({}, this._config, yt(e).Auth, e);
        this._config = n;
        var r = this._config,
          i = r.userPoolId,
          o = r.userPoolWebClientId,
          s = r.cookieStorage,
          a = r.oauth,
          u = r.region,
          c = r.identityPoolId,
          l = r.mandatorySignIn,
          h = r.refreshHandlers,
          f = r.identityPoolRegion,
          d = r.clientMetadata,
          p = r.endpoint,
          g = r.storage;
        if (g) {
          if (!this._isValidAuthStorage(g)) throw Wi.error("The storage in the Auth config is not valid!"), new Error("Empty storage object");
          this._storage = g;
        } else this._storage = s ? new li(s) : e.ssr ? new Qn() : new Ot().getStorage();
        if (this._storageSync = Promise.resolve(), "function" == typeof this._storage.sync && (this._storageSync = this._storage.sync()), i) {
          var y = {
            UserPoolId: i,
            ClientId: o,
            endpoint: p
          };
          y.Storage = this._storage, this.userPool = new ai(y, this.wrapRefreshSessionCallback);
        }
        this.Credentials.configure({
          mandatorySignIn: l,
          region: u,
          userPoolId: i,
          identityPoolId: c,
          refreshHandlers: h,
          storage: this._storage,
          identityPoolRegion: f
        });
        var v = a ? B(this._config.oauth) ? a : a.awsCognito : void 0;
        if (v) {
          var m = Object.assign({
            cognitoClientId: o,
            UserPoolId: i,
            domain: v.domain,
            scopes: v.scope,
            redirectSignIn: v.redirectSignIn,
            redirectSignOut: v.redirectSignOut,
            responseType: v.responseType,
            Storage: this._storage,
            urlOpener: v.urlOpener,
            clientMetadata: d
          }, v.options);
          this._oAuthHandler = new Li({
            scopes: m.scopes,
            config: m,
            cognitoClientId: m.cognitoClientId
          });
          var w = {};
          !function (e) {
            if (De().isBrowser && window.location) e({
              url: window.location.href
            });else if (!De().isNode) throw new Error("Not supported");
          }(function (e) {
            var n = e.url;
            w[n] || (w[n] = !0, t._handleAuthResponse(n));
          });
        }
        (zi("configured", null, "The Auth category has been configured successfully"), this.autoSignInInitiated || "function" != typeof this._storage.getItem) || (this.isTrueStorageValue("amplify-polling-started") && (zi("autoSignIn_failure", null, F.AutoSignInError), this._storage.removeItem("amplify-auto-sign-in")), this._storage.removeItem("amplify-polling-started"));
        return this._config;
      }, e.prototype.signUp = function (e) {
        for (var t, n, r, i = this, o = [], s = 1; s < arguments.length; s++) o[s - 1] = arguments[s];
        if (!this.userPool) return this.rejectNoUserPool();
        var a,
          u = null,
          c = null,
          l = [],
          h = null,
          f = {
            enabled: !1
          },
          d = {},
          p = {};
        if (e && "string" == typeof e) {
          u = e, c = o ? o[0] : null;
          var g = o ? o[1] : null,
            y = o ? o[2] : null;
          g && l.push(new qr({
            Name: "email",
            Value: g
          })), y && l.push(new qr({
            Name: "phone_number",
            Value: y
          }));
        } else {
          if (!e || "object" != typeof e) return this.rejectAuthError(F.SignUpError);
          u = e.username, c = e.password, e && e.clientMetadata ? a = e.clientMetadata : this._config.clientMetadata && (a = this._config.clientMetadata);
          var v = e.attributes;
          v && Object.keys(v).map(function (e) {
            l.push(new qr({
              Name: e,
              Value: v[e]
            }));
          });
          var m = e.validationData;
          m && (h = [], Object.keys(m).map(function (e) {
            h.push(new qr({
              Name: e,
              Value: m[e]
            }));
          })), (f = null !== (t = e.autoSignIn) && void 0 !== t ? t : {
            enabled: !1
          }).enabled && (this._storage.setItem("amplify-auto-sign-in", "true"), d = null !== (n = f.validationData) && void 0 !== n ? n : {}, p = null !== (r = f.clientMetaData) && void 0 !== r ? r : {});
        }
        return u ? c ? (Wi.debug("signUp attrs:", l), Wi.debug("signUp validation data:", h), new Promise(function (e, t) {
          i.userPool.signUp(u, c, l, h, function (n, r) {
            n ? (zi("signUp_failure", n, u + " failed to signup"), t(n)) : (zi("signUp", r, u + " has signed up successfully"), f.enabled && i.handleAutoSignIn(u, c, d, p, r), e(r));
          }, a);
        })) : this.rejectAuthError(F.EmptyPassword) : this.rejectAuthError(F.EmptyUsername);
      }, e.prototype.handleAutoSignIn = function (e, t, n, r, i) {
        this.autoSignInInitiated = !0;
        var o = new er({
          Username: e,
          Password: t,
          ValidationData: n,
          ClientMetadata: r
        });
        i.userConfirmed ? this.signInAfterUserConfirmed(o) : "link" === this._config.signUpVerificationMethod ? this.handleLinkAutoSignIn(o) : this.handleCodeAutoSignIn(o);
      }, e.prototype.handleCodeAutoSignIn = function (e) {
        var t = this,
          n = function (r) {
            "confirmSignUp" === r.payload.event && t.signInAfterUserConfirmed(e, n);
          };
        Re.listen("auth", n);
      }, e.prototype.handleLinkAutoSignIn = function (e) {
        var t = this;
        this._storage.setItem("amplify-polling-started", "true");
        var n = Date.now(),
          r = setInterval(function () {
            Date.now() - n > 18e4 ? (clearInterval(r), zi("autoSignIn_failure", null, "Please confirm your account and use your credentials to sign in."), t._storage.removeItem("amplify-auto-sign-in")) : t.signInAfterUserConfirmed(e, null, r);
          }, 5e3);
      }, e.prototype.signInAfterUserConfirmed = function (e, t, n) {
        return h(this, void 0, void 0, function () {
          var r,
            i,
            o = this;
          return f(this, function (s) {
            switch (s.label) {
              case 0:
                r = this.createCognitoUser(e.getUsername()), s.label = 1;
              case 1:
                return s.trys.push([1, 3,, 4]), [4, r.authenticateUser(e, this.authCallbacks(r, function (r) {
                  zi("autoSignIn", r, e.getUsername() + " has signed in successfully"), t && Re.remove("auth", t), n && (clearInterval(n), o._storage.removeItem("amplify-polling-started")), o._storage.removeItem("amplify-auto-sign-in");
                }, function (e) {
                  Wi.error(e), o._storage.removeItem("amplify-auto-sign-in");
                }))];
              case 2:
                return s.sent(), [3, 4];
              case 3:
                return i = s.sent(), Wi.error(i), [3, 4];
              case 4:
                return [2];
            }
          });
        });
      }, e.prototype.confirmSignUp = function (e, t, n) {
        var r = this;
        if (!this.userPool) return this.rejectNoUserPool();
        if (!e) return this.rejectAuthError(F.EmptyUsername);
        if (!t) return this.rejectAuthError(F.EmptyCode);
        var i,
          o = this.createCognitoUser(e),
          s = !n || "boolean" != typeof n.forceAliasCreation || n.forceAliasCreation;
        return n && n.clientMetadata ? i = n.clientMetadata : this._config.clientMetadata && (i = this._config.clientMetadata), new Promise(function (n, a) {
          o.confirmRegistration(t, s, function (t, i) {
            t ? a(t) : (zi("confirmSignUp", i, e + " has been confirmed successfully"), r.isTrueStorageValue("amplify-auto-sign-in") && !r.autoSignInInitiated && (zi("autoSignIn_failure", null, F.AutoSignInError), r._storage.removeItem("amplify-auto-sign-in")), n(i));
          }, i);
        });
      }, e.prototype.isTrueStorageValue = function (e) {
        var t = this._storage.getItem(e);
        return !!t && "true" === t;
      }, e.prototype.resendSignUp = function (e, t) {
        if (void 0 === t && (t = this._config.clientMetadata), !this.userPool) return this.rejectNoUserPool();
        if (!e) return this.rejectAuthError(F.EmptyUsername);
        var n = this.createCognitoUser(e);
        return new Promise(function (e, r) {
          n.resendConfirmationCode(function (t, n) {
            t ? r(t) : e(n);
          }, t);
        });
      }, e.prototype.signIn = function (e, t, n) {
        if (void 0 === n && (n = this._config.clientMetadata), !this.userPool) return this.rejectNoUserPool();
        var r = null,
          i = null,
          o = {};
        if ("string" == typeof e) r = e, i = t;else {
          if (!e.username) return this.rejectAuthError(F.InvalidUsername);
          void 0 !== t && Wi.warn("The password should be defined under the first parameter object!"), r = e.username, i = e.password, o = e.validationData;
        }
        if (!r) return this.rejectAuthError(F.EmptyUsername);
        var s = new er({
          Username: r,
          Password: i,
          ValidationData: o,
          ClientMetadata: n
        });
        return i ? this.signInWithPassword(s) : this.signInWithoutPassword(s);
      }, e.prototype.authCallbacks = function (e, t, n) {
        var r = this,
          i = this;
        return {
          onSuccess: function (o) {
            return h(r, void 0, void 0, function () {
              var r, s, a, u;
              return f(this, function (c) {
                switch (c.label) {
                  case 0:
                    Wi.debug(o), delete e.challengeName, delete e.challengeParam, c.label = 1;
                  case 1:
                    return c.trys.push([1, 4, 5, 9]), [4, this.Credentials.clear()];
                  case 2:
                    return c.sent(), [4, this.Credentials.set(o, "session")];
                  case 3:
                    return r = c.sent(), Wi.debug("succeed to get cognito credentials", r), [3, 9];
                  case 4:
                    return s = c.sent(), Wi.debug("cannot get cognito credentials", s), [3, 9];
                  case 5:
                    return c.trys.push([5, 7,, 8]), [4, this.currentUserPoolUser()];
                  case 6:
                    return a = c.sent(), i.user = a, zi("signIn", a, "A user " + e.getUsername() + " has been signed in"), t(a), [3, 8];
                  case 7:
                    return u = c.sent(), Wi.error("Failed to get the signed in user", u), n(u), [3, 8];
                  case 8:
                    return [7];
                  case 9:
                    return [2];
                }
              });
            });
          },
          onFailure: function (t) {
            Wi.debug("signIn failure", t), zi("signIn_failure", t, e.getUsername() + " failed to signin"), n(t);
          },
          customChallenge: function (n) {
            Wi.debug("signIn custom challenge answer required"), e.challengeName = "CUSTOM_CHALLENGE", e.challengeParam = n, t(e);
          },
          mfaRequired: function (n, r) {
            Wi.debug("signIn MFA required"), e.challengeName = n, e.challengeParam = r, t(e);
          },
          mfaSetup: function (n, r) {
            Wi.debug("signIn mfa setup", n), e.challengeName = n, e.challengeParam = r, t(e);
          },
          newPasswordRequired: function (n, r) {
            Wi.debug("signIn new password"), e.challengeName = "NEW_PASSWORD_REQUIRED", e.challengeParam = {
              userAttributes: n,
              requiredAttributes: r
            }, t(e);
          },
          totpRequired: function (n, r) {
            Wi.debug("signIn totpRequired"), e.challengeName = n, e.challengeParam = r, t(e);
          },
          selectMFAType: function (n, r) {
            Wi.debug("signIn selectMFAType", n), e.challengeName = n, e.challengeParam = r, t(e);
          }
        };
      }, e.prototype.signInWithPassword = function (e) {
        var t = this;
        if (this.pendingSignIn) throw new Error("Pending sign-in attempt already in progress");
        var n = this.createCognitoUser(e.getUsername());
        return this.pendingSignIn = new Promise(function (r, i) {
          n.authenticateUser(e, t.authCallbacks(n, function (e) {
            t.pendingSignIn = null, r(e);
          }, function (e) {
            t.pendingSignIn = null, i(e);
          }));
        }), this.pendingSignIn;
      }, e.prototype.signInWithoutPassword = function (e) {
        var t = this,
          n = this.createCognitoUser(e.getUsername());
        return n.setAuthenticationFlowType("CUSTOM_AUTH"), new Promise(function (r, i) {
          n.initiateAuth(e, t.authCallbacks(n, r, i));
        });
      }, e.prototype.getMFAOptions = function (e) {
        return new Promise(function (t, n) {
          e.getMFAOptions(function (e, r) {
            if (e) return Wi.debug("get MFA Options failed", e), void n(e);
            Wi.debug("get MFA options success", r), t(r);
          });
        });
      }, e.prototype.getPreferredMFA = function (e, t) {
        var n = this,
          r = this;
        return new Promise(function (i, o) {
          var s = n._config.clientMetadata,
            a = !!t && t.bypassCache;
          e.getUserData(function (t, s) {
            return h(n, void 0, void 0, function () {
              var n, a;
              return f(this, function (u) {
                switch (u.label) {
                  case 0:
                    if (!t) return [3, 5];
                    if (Wi.debug("getting preferred mfa failed", t), !this.isSessionInvalid(t)) return [3, 4];
                    u.label = 1;
                  case 1:
                    return u.trys.push([1, 3,, 4]), [4, this.cleanUpInvalidSession(e)];
                  case 2:
                    return u.sent(), [3, 4];
                  case 3:
                    return n = u.sent(), o(new Error("Session is invalid due to: " + t.message + " and failed to clean up invalid session: " + n.message)), [2];
                  case 4:
                    return o(t), [2];
                  case 5:
                    return (a = r._getMfaTypeFromUserData(s)) ? (i(a), [2]) : (o("invalid MFA Type"), [2]);
                }
              });
            });
          }, {
            bypassCache: a,
            clientMetadata: s
          });
        });
      }, e.prototype._getMfaTypeFromUserData = function (e) {
        var t = null,
          n = e.PreferredMfaSetting;
        if (n) t = n;else {
          var r = e.UserMFASettingList;
          if (r) 0 === r.length ? t = "NOMFA" : Wi.debug("invalid case for getPreferredMFA", e);else t = e.MFAOptions ? "SMS_MFA" : "NOMFA";
        }
        return t;
      }, e.prototype._getUserData = function (e, t) {
        var n = this;
        return new Promise(function (r, i) {
          e.getUserData(function (t, o) {
            return h(n, void 0, void 0, function () {
              var n;
              return f(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (!t) return [3, 5];
                    if (Wi.debug("getting user data failed", t), !this.isSessionInvalid(t)) return [3, 4];
                    s.label = 1;
                  case 1:
                    return s.trys.push([1, 3,, 4]), [4, this.cleanUpInvalidSession(e)];
                  case 2:
                    return s.sent(), [3, 4];
                  case 3:
                    return n = s.sent(), i(new Error("Session is invalid due to: " + t.message + " and failed to clean up invalid session: " + n.message)), [2];
                  case 4:
                    return i(t), [2];
                  case 5:
                    r(o), s.label = 6;
                  case 6:
                    return [2];
                }
              });
            });
          }, t);
        });
      }, e.prototype.setPreferredMFA = function (e, t) {
        return h(this, void 0, void 0, function () {
          var n,
            r,
            i,
            o,
            s,
            a,
            u = this;
          return f(this, function (c) {
            switch (c.label) {
              case 0:
                return n = this._config.clientMetadata, [4, this._getUserData(e, {
                  bypassCache: !0,
                  clientMetadata: n
                })];
              case 1:
                switch (r = c.sent(), i = null, o = null, t) {
                  case "TOTP":
                  case "SOFTWARE_TOKEN_MFA":
                    return [3, 2];
                  case "SMS":
                  case "SMS_MFA":
                    return [3, 3];
                  case "NOMFA":
                    return [3, 4];
                }
                return [3, 6];
              case 2:
                return o = {
                  PreferredMfa: !0,
                  Enabled: !0
                }, [3, 7];
              case 3:
                return i = {
                  PreferredMfa: !0,
                  Enabled: !0
                }, [3, 7];
              case 4:
                return s = r.UserMFASettingList, [4, this._getMfaTypeFromUserData(r)];
              case 5:
                if ("NOMFA" === (a = c.sent())) return [2, Promise.resolve("No change for mfa type")];
                if ("SMS_MFA" === a) i = {
                  PreferredMfa: !1,
                  Enabled: !1
                };else {
                  if ("SOFTWARE_TOKEN_MFA" !== a) return [2, this.rejectAuthError(F.InvalidMFA)];
                  o = {
                    PreferredMfa: !1,
                    Enabled: !1
                  };
                }
                return s && 0 !== s.length && s.forEach(function (e) {
                  "SMS_MFA" === e ? i = {
                    PreferredMfa: !1,
                    Enabled: !1
                  } : "SOFTWARE_TOKEN_MFA" === e && (o = {
                    PreferredMfa: !1,
                    Enabled: !1
                  });
                }), [3, 7];
              case 6:
                return Wi.debug("no validmfa method provided"), [2, this.rejectAuthError(F.NoMFA)];
              case 7:
                return [2, new Promise(function (t, r) {
                  e.setUserMfaPreference(i, o, function (i, o) {
                    if (i) return Wi.debug("Set user mfa preference error", i), r(i);
                    Wi.debug("Set user mfa success", o), Wi.debug("Caching the latest user data into local"), e.getUserData(function (n, i) {
                      return h(u, void 0, void 0, function () {
                        var i;
                        return f(this, function (s) {
                          switch (s.label) {
                            case 0:
                              if (!n) return [3, 5];
                              if (Wi.debug("getting user data failed", n), !this.isSessionInvalid(n)) return [3, 4];
                              s.label = 1;
                            case 1:
                              return s.trys.push([1, 3,, 4]), [4, this.cleanUpInvalidSession(e)];
                            case 2:
                              return s.sent(), [3, 4];
                            case 3:
                              return i = s.sent(), r(new Error("Session is invalid due to: " + n.message + " and failed to clean up invalid session: " + i.message)), [2];
                            case 4:
                              return [2, r(n)];
                            case 5:
                              return [2, t(o)];
                          }
                        });
                      });
                    }, {
                      bypassCache: !0,
                      clientMetadata: n
                    });
                  });
                })];
            }
          });
        });
      }, e.prototype.disableSMS = function (e) {
        return new Promise(function (t, n) {
          e.disableMFA(function (e, r) {
            if (e) return Wi.debug("disable mfa failed", e), void n(e);
            Wi.debug("disable mfa succeed", r), t(r);
          });
        });
      }, e.prototype.enableSMS = function (e) {
        return new Promise(function (t, n) {
          e.enableMFA(function (e, r) {
            if (e) return Wi.debug("enable mfa failed", e), void n(e);
            Wi.debug("enable mfa succeed", r), t(r);
          });
        });
      }, e.prototype.setupTOTP = function (e) {
        return new Promise(function (t, n) {
          e.associateSoftwareToken({
            onFailure: function (e) {
              Wi.debug("associateSoftwareToken failed", e), n(e);
            },
            associateSecretCode: function (e) {
              Wi.debug("associateSoftwareToken success", e), t(e);
            }
          });
        });
      }, e.prototype.verifyTotpToken = function (e, t) {
        var n;
        Wi.debug("verification totp token", e, t), e && "function" == typeof e.getSignInUserSession && (n = e.getSignInUserSession());
        var r = null == n ? void 0 : n.isValid();
        return new Promise(function (n, i) {
          e.verifySoftwareToken(t, "My TOTP device", {
            onFailure: function (e) {
              Wi.debug("verifyTotpToken failed", e), i(e);
            },
            onSuccess: function (t) {
              r || zi("signIn", e, "A user " + e.getUsername() + " has been signed in"), zi("verify", e, "A user " + e.getUsername() + " has been verified"), Wi.debug("verifyTotpToken success", t), n(t);
            }
          });
        });
      }, e.prototype.confirmSignIn = function (e, t, n, r) {
        var i = this;
        if (void 0 === r && (r = this._config.clientMetadata), !t) return this.rejectAuthError(F.EmptyCode);
        var o = this;
        return new Promise(function (s, a) {
          e.sendMFACode(t, {
            onSuccess: function (t) {
              return h(i, void 0, void 0, function () {
                var n, r, i, a;
                return f(this, function (u) {
                  switch (u.label) {
                    case 0:
                      Wi.debug(t), u.label = 1;
                    case 1:
                      return u.trys.push([1, 4, 5, 10]), [4, this.Credentials.clear()];
                    case 2:
                      return u.sent(), [4, this.Credentials.set(t, "session")];
                    case 3:
                      return n = u.sent(), Wi.debug("succeed to get cognito credentials", n), [3, 10];
                    case 4:
                      return r = u.sent(), Wi.debug("cannot get cognito credentials", r), [3, 10];
                    case 5:
                      o.user = e, u.label = 6;
                    case 6:
                      return u.trys.push([6, 8,, 9]), [4, this.currentUserPoolUser()];
                    case 7:
                      return i = u.sent(), e.attributes = i.attributes, [3, 9];
                    case 8:
                      return a = u.sent(), Wi.debug("cannot get updated Cognito User", a), [3, 9];
                    case 9:
                      return zi("signIn", e, "A user " + e.getUsername() + " has been signed in"), s(e), [7];
                    case 10:
                      return [2];
                  }
                });
              });
            },
            onFailure: function (e) {
              Wi.debug("confirm signIn failure", e), a(e);
            }
          }, n, r);
        });
      }, e.prototype.completeNewPassword = function (e, t, n, r) {
        var i = this;
        if (void 0 === n && (n = {}), void 0 === r && (r = this._config.clientMetadata), !t) return this.rejectAuthError(F.EmptyPassword);
        var o = this;
        return new Promise(function (s, a) {
          e.completeNewPasswordChallenge(t, n, {
            onSuccess: function (t) {
              return h(i, void 0, void 0, function () {
                var n, r;
                return f(this, function (i) {
                  switch (i.label) {
                    case 0:
                      Wi.debug(t), i.label = 1;
                    case 1:
                      return i.trys.push([1, 4, 5, 6]), [4, this.Credentials.clear()];
                    case 2:
                      return i.sent(), [4, this.Credentials.set(t, "session")];
                    case 3:
                      return n = i.sent(), Wi.debug("succeed to get cognito credentials", n), [3, 6];
                    case 4:
                      return r = i.sent(), Wi.debug("cannot get cognito credentials", r), [3, 6];
                    case 5:
                      return o.user = e, zi("signIn", e, "A user " + e.getUsername() + " has been signed in"), s(e), [7];
                    case 6:
                      return [2];
                  }
                });
              });
            },
            onFailure: function (e) {
              Wi.debug("completeNewPassword failure", e), zi("completeNewPassword_failure", e, i.user + " failed to complete the new password flow"), a(e);
            },
            mfaRequired: function (t, n) {
              Wi.debug("signIn MFA required"), e.challengeName = t, e.challengeParam = n, s(e);
            },
            mfaSetup: function (t, n) {
              Wi.debug("signIn mfa setup", t), e.challengeName = t, e.challengeParam = n, s(e);
            },
            totpRequired: function (t, n) {
              Wi.debug("signIn mfa setup", t), e.challengeName = t, e.challengeParam = n, s(e);
            }
          }, r);
        });
      }, e.prototype.sendCustomChallengeAnswer = function (e, t, n) {
        var r = this;
        return void 0 === n && (n = this._config.clientMetadata), this.userPool ? t ? new Promise(function (i, o) {
          e.sendCustomChallengeAnswer(t, r.authCallbacks(e, i, o), n);
        }) : this.rejectAuthError(F.EmptyChallengeResponse) : this.rejectNoUserPool();
      }, e.prototype.deleteUserAttributes = function (e, t) {
        var n = this;
        return new Promise(function (r, i) {
          n.userSession(e).then(function (n) {
            e.deleteAttributes(t, function (e, t) {
              return e ? i(e) : r(t);
            });
          });
        });
      }, e.prototype.deleteUser = function () {
        return h(this, void 0, void 0, function () {
          var e,
            t,
            n = this;
          return f(this, function (r) {
            switch (r.label) {
              case 0:
                return r.trys.push([0, 2,, 3]), [4, this._storageSync];
              case 1:
                return r.sent(), [3, 3];
              case 2:
                throw e = r.sent(), Wi.debug("Failed to sync cache info into memory", e), new Error(e);
              case 3:
                return t = this._oAuthHandler && "true" === this._storage.getItem("amplify-signin-with-hostedUI"), [2, new Promise(function (e, r) {
                  return h(n, void 0, void 0, function () {
                    var n,
                      i = this;
                    return f(this, function (o) {
                      if (this.userPool) {
                        if (!(n = this.userPool.getCurrentUser())) return Wi.debug("Failed to get user from user pool"), [2, r(new Error("No current user."))];
                        n.getSession(function (o, s) {
                          return h(i, void 0, void 0, function () {
                            var i,
                              s = this;
                            return f(this, function (a) {
                              switch (a.label) {
                                case 0:
                                  if (!o) return [3, 5];
                                  if (Wi.debug("Failed to get the user session", o), !this.isSessionInvalid(o)) return [3, 4];
                                  a.label = 1;
                                case 1:
                                  return a.trys.push([1, 3,, 4]), [4, this.cleanUpInvalidSession(n)];
                                case 2:
                                  return a.sent(), [3, 4];
                                case 3:
                                  return i = a.sent(), r(new Error("Session is invalid due to: " + o.message + " and failed to clean up invalid session: " + i.message)), [2];
                                case 4:
                                  return [2, r(o)];
                                case 5:
                                  n.deleteUser(function (i, o) {
                                    if (i) r(i);else {
                                      zi("userDeleted", o, "The authenticated user has been deleted."), n.signOut(), s.user = null;
                                      try {
                                        s.cleanCachedItems();
                                      } catch (e) {
                                        Wi.debug("failed to clear cached items");
                                      }
                                      t ? s.oAuthSignOutRedirect(e, r) : (zi("signOut", s.user, "A user has been signed out"), e(o));
                                    }
                                  }), a.label = 6;
                                case 6:
                                  return [2];
                              }
                            });
                          });
                        });
                      } else Wi.debug("no Congito User pool"), r(new Error("Cognito User pool does not exist"));
                      return [2];
                    });
                  });
                })];
            }
          });
        });
      }, e.prototype.updateUserAttributes = function (e, t, n) {
        var r = this;
        void 0 === n && (n = this._config.clientMetadata);
        var i = [],
          o = this;
        return new Promise(function (s, a) {
          o.userSession(e).then(function (o) {
            for (var u in t) if ("sub" !== u && u.indexOf("_verified") < 0) {
              var c = {
                Name: u,
                Value: t[u]
              };
              i.push(c);
            }
            e.updateAttributes(i, function (e, n, i) {
              if (e) return zi("updateUserAttributes_failure", e, "Failed to update attributes"), a(e);
              var o = r.createUpdateAttributesResultList(t, null == i ? void 0 : i.CodeDeliveryDetailsList);
              return zi("updateUserAttributes", o, "Attributes successfully updated"), s(n);
            }, n);
          });
        });
      }, e.prototype.createUpdateAttributesResultList = function (e, t) {
        var n = {};
        return Object.keys(e).forEach(function (e) {
          n[e] = {
            isUpdated: !0
          };
          var r = null == t ? void 0 : t.find(function (t) {
            return t.AttributeName === e;
          });
          r && (n[e].isUpdated = !1, n[e].codeDeliveryDetails = r);
        }), n;
      }, e.prototype.userAttributes = function (e) {
        var t = this;
        return new Promise(function (n, r) {
          t.userSession(e).then(function (t) {
            e.getUserAttributes(function (e, t) {
              e ? r(e) : n(t);
            });
          });
        });
      }, e.prototype.verifiedContact = function (e) {
        var t = this;
        return this.userAttributes(e).then(function (e) {
          var n = t.attributesToObject(e),
            r = {},
            i = {};
          return n.email && (n.email_verified ? i.email = n.email : r.email = n.email), n.phone_number && (n.phone_number_verified ? i.phone_number = n.phone_number : r.phone_number = n.phone_number), {
            verified: i,
            unverified: r
          };
        });
      }, e.prototype.isErrorWithMessage = function (e) {
        return "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "message");
      }, e.prototype.isTokenRevokedError = function (e) {
        return this.isErrorWithMessage(e) && "Access Token has been revoked" === e.message;
      }, e.prototype.isRefreshTokenRevokedError = function (e) {
        return this.isErrorWithMessage(e) && "Refresh Token has been revoked" === e.message;
      }, e.prototype.isUserDisabledError = function (e) {
        return this.isErrorWithMessage(e) && "User is disabled." === e.message;
      }, e.prototype.isUserDoesNotExistError = function (e) {
        return this.isErrorWithMessage(e) && "User does not exist." === e.message;
      }, e.prototype.isRefreshTokenExpiredError = function (e) {
        return this.isErrorWithMessage(e) && "Refresh Token has expired" === e.message;
      }, e.prototype.isPasswordResetRequiredError = function (e) {
        return this.isErrorWithMessage(e) && "Password reset required for the user" === e.message;
      }, e.prototype.isSignedInHostedUI = function () {
        return this._oAuthHandler && "true" === this._storage.getItem("amplify-signin-with-hostedUI");
      }, e.prototype.isSessionInvalid = function (e) {
        return this.isUserDisabledError(e) || this.isUserDoesNotExistError(e) || this.isTokenRevokedError(e) || this.isRefreshTokenRevokedError(e) || this.isRefreshTokenExpiredError(e) || this.isPasswordResetRequiredError(e);
      }, e.prototype.cleanUpInvalidSession = function (e) {
        return h(this, void 0, void 0, function () {
          var t = this;
          return f(this, function (n) {
            switch (n.label) {
              case 0:
                e.signOut(), this.user = null, n.label = 1;
              case 1:
                return n.trys.push([1, 3,, 4]), [4, this.cleanCachedItems()];
              case 2:
                return n.sent(), [3, 4];
              case 3:
                return n.sent(), Wi.debug("failed to clear cached items"), [3, 4];
              case 4:
                return this.isSignedInHostedUI() ? [2, new Promise(function (e, n) {
                  t.oAuthSignOutRedirect(e, n);
                })] : (zi("signOut", this.user, "A user has been signed out"), [2]);
            }
          });
        });
      }, e.prototype.currentUserPoolUser = function (e) {
        var t = this;
        return this.userPool ? new Promise(function (n, r) {
          t._storageSync.then(function () {
            return h(t, void 0, void 0, function () {
              var t,
                i,
                o,
                s,
                a,
                u,
                c = this;
              return f(this, function (l) {
                switch (l.label) {
                  case 0:
                    return this.isOAuthInProgress() ? (Wi.debug("OAuth signIn in progress, waiting for resolution..."), [4, new Promise(function (e) {
                      var t = setTimeout(function () {
                        Wi.debug("OAuth signIn in progress timeout"), Re.remove("auth", n), e();
                      }, 1e4);
                      function n(r) {
                        var i = r.payload.event;
                        "cognitoHostedUI" !== i && "cognitoHostedUI_failure" !== i || (Wi.debug("OAuth signIn resolved: " + i), clearTimeout(t), Re.remove("auth", n), e());
                      }
                      Re.listen("auth", n);
                    })]) : [3, 2];
                  case 1:
                    l.sent(), l.label = 2;
                  case 2:
                    if (!(t = this.userPool.getCurrentUser())) return Wi.debug("Failed to get user from user pool"), r("No current user"), [2];
                    l.label = 3;
                  case 3:
                    return l.trys.push([3, 7,, 8]), [4, this._userSession(t)];
                  case 4:
                    return i = l.sent(), (o = !!e && e.bypassCache) ? [4, this.Credentials.clear()] : [3, 6];
                  case 5:
                    l.sent(), l.label = 6;
                  case 6:
                    return s = this._config.clientMetadata, a = i.getAccessToken().decodePayload().scope, (void 0 === a ? "" : a).split(" ").includes(Gi) ? (t.getUserData(function (e, i) {
                      return h(c, void 0, void 0, function () {
                        var o, s, a, u, c, l, h;
                        return f(this, function (f) {
                          switch (f.label) {
                            case 0:
                              if (!e) return [3, 7];
                              if (Wi.debug("getting user data failed", e), !this.isSessionInvalid(e)) return [3, 5];
                              f.label = 1;
                            case 1:
                              return f.trys.push([1, 3,, 4]), [4, this.cleanUpInvalidSession(t)];
                            case 2:
                              return f.sent(), [3, 4];
                            case 3:
                              return o = f.sent(), r(new Error("Session is invalid due to: " + e.message + " and failed to clean up invalid session: " + o.message)), [2];
                            case 4:
                              return r(e), [3, 6];
                            case 5:
                              n(t), f.label = 6;
                            case 6:
                              return [2];
                            case 7:
                              for (s = i.PreferredMfaSetting || "NOMFA", a = [], u = 0; u < i.UserAttributes.length; u++) c = {
                                Name: i.UserAttributes[u].Name,
                                Value: i.UserAttributes[u].Value
                              }, l = new qr(c), a.push(l);
                              return h = this.attributesToObject(a), Object.assign(t, {
                                attributes: h,
                                preferredMFA: s
                              }), [2, n(t)];
                          }
                        });
                      });
                    }, {
                      bypassCache: o,
                      clientMetadata: s
                    }), [3, 8]) : (Wi.debug("Unable to get the user data because the " + Gi + " is not in the scopes of the access token"), [2, n(t)]);
                  case 7:
                    return u = l.sent(), r(u), [3, 8];
                  case 8:
                    return [2];
                }
              });
            });
          }).catch(function (e) {
            return Wi.debug("Failed to sync cache info into memory", e), r(e);
          });
        }) : this.rejectNoUserPool();
      }, e.prototype.isOAuthInProgress = function () {
        return this.oAuthFlowInProgress;
      }, e.prototype.currentAuthenticatedUser = function (e) {
        return h(this, void 0, void 0, function () {
          var t, n, r, i, o;
          return f(this, function (a) {
            switch (a.label) {
              case 0:
                Wi.debug("getting current authenticated user"), t = null, a.label = 1;
              case 1:
                return a.trys.push([1, 3,, 4]), [4, this._storageSync];
              case 2:
                return a.sent(), [3, 4];
              case 3:
                throw n = a.sent(), Wi.debug("Failed to sync cache info into memory", n), n;
              case 4:
                try {
                  (r = JSON.parse(this._storage.getItem("aws-amplify-federatedInfo"))) && (t = s(s({}, r.user), {
                    token: r.token
                  }));
                } catch (e) {
                  Wi.debug("cannot load federated user from auth storage");
                }
                return t ? (this.user = t, Wi.debug("get current authenticated federated user", this.user), [2, this.user]) : [3, 5];
              case 5:
                Wi.debug("get current authenticated userpool user"), i = null, a.label = 6;
              case 6:
                return a.trys.push([6, 8,, 9]), [4, this.currentUserPoolUser(e)];
              case 7:
                return i = a.sent(), [3, 9];
              case 8:
                return "No userPool" === (o = a.sent()) && Wi.error("Cannot get the current user because the user pool is missing. Please make sure the Auth module is configured with a valid Cognito User Pool ID"), Wi.debug("The user is not authenticated by the error", o), [2, Promise.reject("The user is not authenticated")];
              case 9:
                return this.user = i, [2, this.user];
            }
          });
        });
      }, e.prototype.currentSession = function () {
        var e = this;
        return Wi.debug("Getting current session"), this.userPool ? new Promise(function (t, n) {
          e.currentUserPoolUser().then(function (r) {
            e.userSession(r).then(function (e) {
              t(e);
            }).catch(function (e) {
              Wi.debug("Failed to get the current session", e), n(e);
            });
          }).catch(function (e) {
            Wi.debug("Failed to get the current user", e), n(e);
          });
        }) : Promise.reject(new Error("No User Pool in the configuration."));
      }, e.prototype._userSession = function (e) {
        return h(this, void 0, void 0, function () {
          var t,
            n,
            r = this;
          return f(this, function (i) {
            switch (i.label) {
              case 0:
                if (!e) return Wi.debug("the user is null"), [2, this.rejectAuthError(F.NoUserSession)];
                t = this._config.clientMetadata, 0 === this.inflightSessionPromiseCounter && (this.inflightSessionPromise = new Promise(function (n, i) {
                  e.getSession(function (t, o) {
                    return h(r, void 0, void 0, function () {
                      var r;
                      return f(this, function (s) {
                        switch (s.label) {
                          case 0:
                            if (!t) return [3, 5];
                            if (Wi.debug("Failed to get the session from user", e), !this.isSessionInvalid(t)) return [3, 4];
                            s.label = 1;
                          case 1:
                            return s.trys.push([1, 3,, 4]), [4, this.cleanUpInvalidSession(e)];
                          case 2:
                            return s.sent(), [3, 4];
                          case 3:
                            return r = s.sent(), i(new Error("Session is invalid due to: " + t.message + " and failed to clean up invalid session: " + r.message)), [2];
                          case 4:
                            return i(t), [2];
                          case 5:
                            return Wi.debug("Succeed to get the user session", o), n(o), [2];
                        }
                      });
                    });
                  }, {
                    clientMetadata: t
                  });
                })), this.inflightSessionPromiseCounter++, i.label = 1;
              case 1:
                return i.trys.push([1,, 3, 4]), [4, this.inflightSessionPromise];
              case 2:
                return n = i.sent(), e.signInUserSession = n, [2, n];
              case 3:
                return this.inflightSessionPromiseCounter--, [7];
              case 4:
                return [2];
            }
          });
        });
      }, e.prototype.userSession = function (e) {
        return this._userSession(e);
      }, e.prototype.currentUserCredentials = function () {
        return h(this, void 0, void 0, function () {
          var e,
            t,
            n = this;
          return f(this, function (r) {
            switch (r.label) {
              case 0:
                Wi.debug("Getting current user credentials"), r.label = 1;
              case 1:
                return r.trys.push([1, 3,, 4]), [4, this._storageSync];
              case 2:
                return r.sent(), [3, 4];
              case 3:
                throw e = r.sent(), Wi.debug("Failed to sync cache info into memory", e), e;
              case 4:
                t = null;
                try {
                  t = JSON.parse(this._storage.getItem("aws-amplify-federatedInfo"));
                } catch (e) {
                  Wi.debug("failed to get or parse item aws-amplify-federatedInfo", e);
                }
                return t ? [2, this.Credentials.refreshFederatedToken(t)] : [2, this.currentSession().then(function (e) {
                  return Wi.debug("getting session success", e), n.Credentials.set(e, "session");
                }).catch(function () {
                  return Wi.debug("getting guest credentials"), n.Credentials.set(null, "guest");
                })];
            }
          });
        });
      }, e.prototype.currentCredentials = function () {
        return Wi.debug("getting current credentials"), this.Credentials.get();
      }, e.prototype.verifyUserAttribute = function (e, t, n) {
        return void 0 === n && (n = this._config.clientMetadata), new Promise(function (r, i) {
          e.getAttributeVerificationCode(t, {
            onSuccess: function (e) {
              return r(e);
            },
            onFailure: function (e) {
              return i(e);
            }
          }, n);
        });
      }, e.prototype.verifyUserAttributeSubmit = function (e, t, n) {
        return n ? new Promise(function (r, i) {
          e.verifyAttribute(t, n, {
            onSuccess: function (e) {
              r(e);
            },
            onFailure: function (e) {
              i(e);
            }
          });
        }) : this.rejectAuthError(F.EmptyCode);
      }, e.prototype.verifyCurrentUserAttribute = function (e) {
        var t = this;
        return t.currentUserPoolUser().then(function (n) {
          return t.verifyUserAttribute(n, e);
        });
      }, e.prototype.verifyCurrentUserAttributeSubmit = function (e, t) {
        var n = this;
        return n.currentUserPoolUser().then(function (r) {
          return n.verifyUserAttributeSubmit(r, e, t);
        });
      }, e.prototype.cognitoIdentitySignOut = function (e, t) {
        return h(this, void 0, void 0, function () {
          var n,
            r,
            i = this;
          return f(this, function (o) {
            switch (o.label) {
              case 0:
                return o.trys.push([0, 2,, 3]), [4, this._storageSync];
              case 1:
                return o.sent(), [3, 3];
              case 2:
                throw n = o.sent(), Wi.debug("Failed to sync cache info into memory", n), n;
              case 3:
                return r = this._oAuthHandler && "true" === this._storage.getItem("amplify-signin-with-hostedUI"), [2, new Promise(function (n, o) {
                  if (e && e.global) {
                    Wi.debug("user global sign out", t);
                    var s = i._config.clientMetadata;
                    t.getSession(function (e, s) {
                      return h(i, void 0, void 0, function () {
                        var i,
                          s = this;
                        return f(this, function (a) {
                          switch (a.label) {
                            case 0:
                              if (!e) return [3, 5];
                              if (Wi.debug("failed to get the user session", e), !this.isSessionInvalid(e)) return [3, 4];
                              a.label = 1;
                            case 1:
                              return a.trys.push([1, 3,, 4]), [4, this.cleanUpInvalidSession(t)];
                            case 2:
                              return a.sent(), [3, 4];
                            case 3:
                              return i = a.sent(), o(new Error("Session is invalid due to: " + e.message + " and failed to clean up invalid session: " + i.message)), [2];
                            case 4:
                              return [2, o(e)];
                            case 5:
                              return t.globalSignOut({
                                onSuccess: function (e) {
                                  if (Wi.debug("global sign out success"), !r) return n();
                                  s.oAuthSignOutRedirect(n, o);
                                },
                                onFailure: function (e) {
                                  return Wi.debug("global sign out failed", e), o(e);
                                }
                              }), [2];
                          }
                        });
                      });
                    }, {
                      clientMetadata: s
                    });
                  } else Wi.debug("user sign out", t), t.signOut(function () {
                    if (!r) return n();
                    i.oAuthSignOutRedirect(n, o);
                  });
                })];
            }
          });
        });
      }, e.prototype.oAuthSignOutRedirect = function (e, t) {
        De().isBrowser ? this.oAuthSignOutRedirectOrReject(t) : this.oAuthSignOutAndResolve(e);
      }, e.prototype.oAuthSignOutAndResolve = function (e) {
        this._oAuthHandler.signOut(), e();
      }, e.prototype.oAuthSignOutRedirectOrReject = function (e) {
        this._oAuthHandler.signOut(), setTimeout(function () {
          return e(Error("Signout timeout fail"));
        }, 3e3);
      }, e.prototype.signOut = function (e) {
        return h(this, void 0, void 0, function () {
          var t;
          return f(this, function (n) {
            switch (n.label) {
              case 0:
                return n.trys.push([0, 2,, 3]), [4, this.cleanCachedItems()];
              case 1:
                return n.sent(), [3, 3];
              case 2:
                return n.sent(), Wi.debug("failed to clear cached items"), [3, 3];
              case 3:
                return this.userPool ? (t = this.userPool.getCurrentUser()) ? [4, this.cognitoIdentitySignOut(e, t)] : [3, 5] : [3, 7];
              case 4:
                return n.sent(), [3, 6];
              case 5:
                Wi.debug("no current Cognito user"), n.label = 6;
              case 6:
                return [3, 8];
              case 7:
                Wi.debug("no Cognito User pool"), n.label = 8;
              case 8:
                return zi("signOut", this.user, "A user has been signed out"), this.user = null, [2];
            }
          });
        });
      }, e.prototype.cleanCachedItems = function () {
        return h(this, void 0, void 0, function () {
          return f(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.Credentials.clear()];
              case 1:
                return e.sent(), [2];
            }
          });
        });
      }, e.prototype.changePassword = function (e, t, n, r) {
        var i = this;
        return void 0 === r && (r = this._config.clientMetadata), new Promise(function (o, s) {
          i.userSession(e).then(function (i) {
            e.changePassword(t, n, function (e, t) {
              return e ? (Wi.debug("change password failure", e), s(e)) : o(t);
            }, r);
          });
        });
      }, e.prototype.forgotPassword = function (e, t) {
        if (void 0 === t && (t = this._config.clientMetadata), !this.userPool) return this.rejectNoUserPool();
        if (!e) return this.rejectAuthError(F.EmptyUsername);
        var n = this.createCognitoUser(e);
        return new Promise(function (r, i) {
          n.forgotPassword({
            onSuccess: function () {
              r();
            },
            onFailure: function (t) {
              Wi.debug("forgot password failure", t), zi("forgotPassword_failure", t, e + " forgotPassword failed"), i(t);
            },
            inputVerificationCode: function (t) {
              zi("forgotPassword", n, e + " has initiated forgot password flow"), r(t);
            }
          }, t);
        });
      }, e.prototype.forgotPasswordSubmit = function (e, t, n, r) {
        if (void 0 === r && (r = this._config.clientMetadata), !this.userPool) return this.rejectNoUserPool();
        if (!e) return this.rejectAuthError(F.EmptyUsername);
        if (!t) return this.rejectAuthError(F.EmptyCode);
        if (!n) return this.rejectAuthError(F.EmptyPassword);
        var i = this.createCognitoUser(e);
        return new Promise(function (o, s) {
          i.confirmPassword(t, n, {
            onSuccess: function (t) {
              zi("forgotPasswordSubmit", i, e + " forgotPasswordSubmit successful"), o(t);
            },
            onFailure: function (t) {
              zi("forgotPasswordSubmit_failure", t, e + " forgotPasswordSubmit failed"), s(t);
            }
          }, r);
        });
      }, e.prototype.currentUserInfo = function () {
        return h(this, void 0, void 0, function () {
          var e, t, n, r, i, o, s;
          return f(this, function (a) {
            switch (a.label) {
              case 0:
                return (e = this.Credentials.getCredSource()) && "aws" !== e && "userPool" !== e ? [3, 9] : [4, this.currentUserPoolUser().catch(function (e) {
                  return Wi.error(e);
                })];
              case 1:
                if (!(s = a.sent())) return [2, null];
                a.label = 2;
              case 2:
                return a.trys.push([2, 8,, 9]), [4, this.userAttributes(s)];
              case 3:
                t = a.sent(), n = this.attributesToObject(t), r = null, a.label = 4;
              case 4:
                return a.trys.push([4, 6,, 7]), [4, this.currentCredentials()];
              case 5:
                return r = a.sent(), [3, 7];
              case 6:
                return i = a.sent(), Wi.debug("Failed to retrieve credentials while getting current user info", i), [3, 7];
              case 7:
                return [2, {
                  id: r ? r.identityId : void 0,
                  username: s.getUsername(),
                  attributes: n
                }];
              case 8:
                return o = a.sent(), Wi.error("currentUserInfo error", o), [2, {}];
              case 9:
                return "federated" === e ? [2, (s = this.user) || {}] : [2];
            }
          });
        });
      }, e.prototype.federatedSignIn = function (e, t, n) {
        return h(this, void 0, void 0, function () {
          var r, i, o, s, a, u, c, l, h, d, p;
          return f(this, function (f) {
            switch (f.label) {
              case 0:
                if (!this._config.identityPoolId && !this._config.userPoolId) throw new Error("Federation requires either a User Pool or Identity Pool in config");
                if (void 0 === e && this._config.identityPoolId && !this._config.userPoolId) throw new Error("Federation with Identity Pools requires tokens passed as arguments");
                return L(e) || (g = e) && ["customProvider"].find(function (e) {
                  return g.hasOwnProperty(e);
                }) || function (e) {
                  return e && !!["customState"].find(function (t) {
                    return e.hasOwnProperty(t);
                  });
                }(e) || void 0 === e ? (r = e || {
                  provider: x.Cognito
                }, a = L(r) ? r.provider : r.customProvider, L(r), i = r.customState, this._config.userPoolId && (o = B(this._config.oauth) ? this._config.userPoolWebClientId : this._config.oauth.clientID, s = B(this._config.oauth) ? this._config.oauth.redirectSignIn : this._config.oauth.redirectUri, this._oAuthHandler.oauthSignIn(this._config.oauth.responseType, this._config.oauth.domain, s, o, a, i)), [3, 4]) : [3, 1];
              case 1:
                a = e;
                try {
                  (u = JSON.stringify(JSON.parse(this._storage.getItem("aws-amplify-federatedInfo")).user)) && Wi.warn("There is already a signed in user: " + u + " in your app.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tYou should not call Auth.federatedSignIn method again as it may cause unexpected behavior.");
                } catch (e) {}
                return c = t.token, l = t.identity_id, h = t.expires_at, [4, this.Credentials.set({
                  provider: a,
                  token: c,
                  identity_id: l,
                  user: n,
                  expires_at: h
                }, "federation")];
              case 2:
                return d = f.sent(), [4, this.currentAuthenticatedUser()];
              case 3:
                return p = f.sent(), zi("signIn", p, "A user " + p.username + " has been signed in"), Wi.debug("federated sign in credentials", d), [2, d];
              case 4:
                return [2];
            }
            var g;
          });
        });
      }, e.prototype._handleAuthResponse = function (e) {
        return h(this, void 0, void 0, function () {
          var t, n, r, i, o, s, a, u, c, l, h, d, p, g;
          return f(this, function (f) {
            switch (f.label) {
              case 0:
                if (this.oAuthFlowInProgress) return Wi.debug("Skipping URL " + e + " current flow in progress"), [2];
                f.label = 1;
              case 1:
                if (f.trys.push([1,, 8, 9]), this.oAuthFlowInProgress = !0, !this._config.userPoolId) throw new Error("OAuth responses require a User Pool defined in config");
                if (zi("parsingCallbackUrl", {
                  url: e
                }, "The callback url is being parsed"), t = e || (De().isBrowser ? window.location.href : ""), n = !!(mi(t).query || "").split("&").map(function (e) {
                  return e.split("=");
                }).find(function (e) {
                  var t = y(e, 1)[0];
                  return "code" === t || "error" === t;
                }), r = !!(mi(t).hash || "#").substr(1).split("&").map(function (e) {
                  return e.split("=");
                }).find(function (e) {
                  var t = y(e, 1)[0];
                  return "access_token" === t || "error" === t;
                }), !n && !r) return [3, 7];
                this._storage.setItem("amplify-redirected-from-hosted-ui", "true"), f.label = 2;
              case 2:
                return f.trys.push([2, 6,, 7]), [4, this._oAuthHandler.handleAuthResponse(t)];
              case 3:
                return i = f.sent(), o = i.accessToken, s = i.idToken, a = i.refreshToken, u = i.state, c = new Lr({
                  IdToken: new Mr({
                    IdToken: s
                  }),
                  RefreshToken: new jr({
                    RefreshToken: a
                  }),
                  AccessToken: new xr({
                    AccessToken: o
                  })
                }), l = void 0, this._config.identityPoolId ? [4, this.Credentials.set(c, "session")] : [3, 5];
              case 4:
                l = f.sent(), Wi.debug("AWS credentials", l), f.label = 5;
              case 5:
                return h = /-/.test(u), (d = this.createCognitoUser(c.getIdToken().decodePayload()["cognito:username"])).setSignInUserSession(c), window && void 0 !== window.history && window.history.replaceState({}, null, this._config.oauth.redirectSignIn), zi("signIn", d, "A user " + d.getUsername() + " has been signed in"), zi("cognitoHostedUI", d, "A user " + d.getUsername() + " has been signed in via Cognito Hosted UI"), h && (p = u.split("-").splice(1).join("-"), zi("customOAuthState", p.match(/.{2}/g).map(function (e) {
                  return String.fromCharCode(parseInt(e, 16));
                }).join(""), "State for user " + d.getUsername())), [2, l];
              case 6:
                return g = f.sent(), Wi.debug("Error in cognito hosted auth response", g), window && void 0 !== window.history && window.history.replaceState({}, null, this._config.oauth.redirectSignIn), zi("signIn_failure", g, "The OAuth response flow failed"), zi("cognitoHostedUI_failure", g, "A failure occurred when returning to the Cognito Hosted UI"), zi("customState_failure", g, "A failure occurred when returning state"), [3, 7];
              case 7:
                return [3, 9];
              case 8:
                return this.oAuthFlowInProgress = !1, [7];
              case 9:
                return [2];
            }
          });
        });
      }, e.prototype.essentialCredentials = function (e) {
        return {
          accessKeyId: e.accessKeyId,
          sessionToken: e.sessionToken,
          secretAccessKey: e.secretAccessKey,
          identityId: e.identityId,
          authenticated: e.authenticated
        };
      }, e.prototype.attributesToObject = function (e) {
        var t = this,
          n = {};
        return e && e.map(function (e) {
          "email_verified" === e.Name || "phone_number_verified" === e.Name ? n[e.Name] = t.isTruthyString(e.Value) || !0 === e.Value : n[e.Name] = e.Value;
        }), n;
      }, e.prototype.isTruthyString = function (e) {
        return "function" == typeof e.toLowerCase && "true" === e.toLowerCase();
      }, e.prototype.createCognitoUser = function (e) {
        var t = {
          Username: e,
          Pool: this.userPool
        };
        t.Storage = this._storage;
        var n = this._config.authenticationFlowType,
          r = new Jr(t);
        return n && r.setAuthenticationFlowType(n), r;
      }, e.prototype._isValidAuthStorage = function (e) {
        return !!e && "function" == typeof e.getItem && "function" == typeof e.setItem && "function" == typeof e.removeItem && "function" == typeof e.clear;
      }, e.prototype.noUserPoolErrorHandler = function (e) {
        return !e || e.userPoolId && e.identityPoolId ? F.NoConfig : F.MissingAuthConfig;
      }, e.prototype.rejectAuthError = function (e) {
        return Promise.reject(new Vi(e));
      }, e.prototype.rejectNoUserPool = function () {
        var e = this.noUserPoolErrorHandler(this._config);
        return Promise.reject(new Ki(e));
      }, e.prototype.rememberDevice = function () {
        return h(this, void 0, void 0, function () {
          var e, t;
          return f(this, function (n) {
            switch (n.label) {
              case 0:
                return n.trys.push([0, 2,, 3]), [4, this.currentUserPoolUser()];
              case 1:
                return e = n.sent(), [3, 3];
              case 2:
                return t = n.sent(), Wi.debug("The user is not authenticated by the error", t), [2, Promise.reject("The user is not authenticated")];
              case 3:
                return e.getCachedDeviceKeyAndPassword(), [2, new Promise(function (t, n) {
                  e.setDeviceStatusRemembered({
                    onSuccess: function (e) {
                      t(e);
                    },
                    onFailure: function (e) {
                      "InvalidParameterException" === e.code ? n(new Vi(F.DeviceConfig)) : "NetworkError" === e.code ? n(new Vi(F.NetworkError)) : n(e);
                    }
                  });
                })];
            }
          });
        });
      }, e.prototype.forgetDevice = function () {
        return h(this, void 0, void 0, function () {
          var e, t;
          return f(this, function (n) {
            switch (n.label) {
              case 0:
                return n.trys.push([0, 2,, 3]), [4, this.currentUserPoolUser()];
              case 1:
                return e = n.sent(), [3, 3];
              case 2:
                return t = n.sent(), Wi.debug("The user is not authenticated by the error", t), [2, Promise.reject("The user is not authenticated")];
              case 3:
                return e.getCachedDeviceKeyAndPassword(), [2, new Promise(function (t, n) {
                  e.forgetDevice({
                    onSuccess: function (e) {
                      t(e);
                    },
                    onFailure: function (e) {
                      "InvalidParameterException" === e.code ? n(new Vi(F.DeviceConfig)) : "NetworkError" === e.code ? n(new Vi(F.NetworkError)) : n(e);
                    }
                  });
                })];
            }
          });
        });
      }, e.prototype.fetchDevices = function () {
        return h(this, void 0, void 0, function () {
          var e, t;
          return f(this, function (n) {
            switch (n.label) {
              case 0:
                return n.trys.push([0, 2,, 3]), [4, this.currentUserPoolUser()];
              case 1:
                return e = n.sent(), [3, 3];
              case 2:
                throw t = n.sent(), Wi.debug("The user is not authenticated by the error", t), new Error("The user is not authenticated");
              case 3:
                return e.getCachedDeviceKeyAndPassword(), [2, new Promise(function (t, n) {
                  var r = {
                    onSuccess: function (e) {
                      var n = e.Devices.map(function (e) {
                        var t = e.DeviceAttributes.find(function (e) {
                          return "device_name" === e.Name;
                        }) || {};
                        return {
                          id: e.DeviceKey,
                          name: t.Value
                        };
                      });
                      t(n);
                    },
                    onFailure: function (e) {
                      "InvalidParameterException" === e.code ? n(new Vi(F.DeviceConfig)) : "NetworkError" === e.code ? n(new Vi(F.NetworkError)) : n(e);
                    }
                  };
                  e.listDevices(60, null, r);
                })];
            }
          });
        });
      }, e;
    }(),
    $i = new Ji(null);
  ue.register($i);
  const Yi = "client_runtime";
  var Zi, Xi, Qi, eo, to, no, ro;
  class io {
    constructor(e) {
      Zi.set(this, void 0), k(this, Zi, null != e ? e : [], "f");
    }
    readFirst() {
      let e = null;
      for (const t of U(this, Zi, "f")) if (e = localStorage.getItem(t), e) break;
      return e;
    }
    writeAll(e) {
      U(this, Zi, "f").forEach(t => {
        localStorage.setItem(t, e);
      });
    }
    clearAll() {
      U(this, Zi, "f").forEach(e => {
        localStorage.removeItem(e);
      });
    }
  }
  Zi = new WeakMap();
  class oo {
    constructor() {
      let {
        prefix: e = ["os-runtime", "os-builtin", ""],
        localEndpointKey: t = "identity-endpoints",
        tokenKey: n = "token",
        currentAuthTypeKey: r = "currentAuthType",
        currentAuthConfigKey: i = "currentAuthConfig"
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Xi.set(this, void 0), Qi.set(this, void 0), eo.set(this, void 0), to.set(this, void 0), no.set(this, (e, t) => e.map(e => `${e}-${t}`)), k(this, Xi, new io(U(this, no, "f").call(this, e, t)), "f"), k(this, Qi, new io(U(this, no, "f").call(this, e, n)), "f"), k(this, eo, new io(U(this, no, "f").call(this, e, r)), "f"), k(this, to, new io(U(this, no, "f").call(this, e, i)), "f");
    }
    storeEndpoints(e) {
      U(this, Xi, "f").writeAll(JSON.stringify(e));
    }
    readEndpoints() {
      const e = U(this, Xi, "f").readFirst();
      return e ? JSON.parse(e) : null;
    }
    storeToken(e) {
      U(this, Qi, "f").writeAll(JSON.stringify(e));
    }
    readToken() {
      const e = U(this, Qi, "f").readFirst();
      return e ? JSON.parse(e) : null;
    }
    readAccessToken() {
      var e;
      const t = this.readToken();
      return null !== (e = null == t ? void 0 : t.access_token) && void 0 !== e ? e : null;
    }
    readRefreshToken() {
      var e;
      const t = this.readToken();
      return null !== (e = null == t ? void 0 : t.refresh_token) && void 0 !== e ? e : null;
    }
    readIdToken() {
      var e;
      const t = this.readToken();
      return null !== (e = null == t ? void 0 : t.id_token) && void 0 !== e ? e : null;
    }
    storeCurrentAuthType(e) {
      U(this, eo, "f").writeAll(e);
    }
    readCurrentAuthType() {
      var e;
      return null !== (e = U(this, eo, "f").readFirst()) && void 0 !== e ? e : null;
    }
    storeCurrentAuthConfig(e) {
      U(this, to, "f").writeAll(JSON.stringify(e));
    }
    readCurrentAuthConfig() {
      const e = U(this, to, "f").readFirst();
      return e ? JSON.parse(e) : null;
    }
    clearAuthData() {
      U(this, Xi, "f").clearAll(), U(this, Qi, "f").clearAll(), U(this, eo, "f").clearAll();
    }
  }
  Xi = new WeakMap(), Qi = new WeakMap(), eo = new WeakMap(), to = new WeakMap(), no = new WeakMap(), function (e) {
    e.InvalidCredentials = "InvalidCredentials", e.TooManyFailedAttempts = "TooManyFailedAttempts", e.UnknownFailure = "UnknownFailure", e.PasswordComplexityPolicyFailed = "PasswordComplexityPolicyFailed", e.InvalidToken = "InvalidToken", e.IdentityTokenEndpointFailed = "IdentityTokenEndpointFailed";
  }(ro || (ro = {}));
  var so = _exports.FailureReasons = ro;
  class ao extends Error {
    constructor(e, t) {
      super(t), this.errorCode = e;
    }
  }
  _exports.AuthError = ao;
  class uo {
    static create(_ref) {
      let {
        name: e,
        message: t,
        code: n = "OS-CLRT-40100"
      } = _ref;
      const r = new ao(n, t);
      return r.name = e, r;
    }
  }
  function co(e) {
    this.message = e;
  }
  co.prototype = new Error(), co.prototype.name = "InvalidCharacterError";
  var lo = "undefined" != typeof window && window.atob && window.atob.bind(window) || function (e) {
    var t = String(e).replace(/=+$/, "");
    if (t.length % 4 == 1) throw new co("'atob' failed: The string to be decoded is not correctly encoded.");
    for (var n, r, i = 0, o = 0, s = ""; r = t.charAt(o++); ~r && (n = i % 4 ? 64 * n + r : r, i++ % 4) ? s += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0) r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);
    return s;
  };
  function ho(e) {
    var t = e.replace(/-/g, "+").replace(/_/g, "/");
    switch (t.length % 4) {
      case 0:
        break;
      case 2:
        t += "==";
        break;
      case 3:
        t += "=";
        break;
      default:
        throw "Illegal base64url string!";
    }
    try {
      return function (e) {
        return decodeURIComponent(lo(e).replace(/(.)/g, function (e, t) {
          var n = t.charCodeAt(0).toString(16).toUpperCase();
          return n.length < 2 && (n = "0" + n), "%" + n;
        }));
      }(t);
    } catch (e) {
      return lo(t);
    }
  }
  function fo(e) {
    this.message = e;
  }
  function po(e, t) {
    if ("string" != typeof e) throw new fo("Invalid token specified");
    var n = !0 === (t = t || {}).header ? 0 : 1;
    try {
      return JSON.parse(ho(e.split(".")[n]));
    } catch (e) {
      throw new fo("Invalid token specified: " + e.message);
    }
  }
  fo.prototype = new Error(), fo.prototype.name = "InvalidTokenError";
  const go = function (e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : po;
      return t(e);
    },
    yo = e => e ? `${e.token_type} ${e.access_token}` : null,
    vo = _ref2 => {
      let {
        token: e,
        now: t = Date.now,
        tokenDecoder: n,
        logger: r
      } = _ref2;
      if (!e) return !1;
      try {
        const r = 1e3 * n(e).exp - 1e4;
        return t() < r;
      } catch (e) {
        return null == r || r.error({
          category: "JWT_DECODING",
          message: "Issue validating token",
          error: e
        }), !1;
      }
    };
  var mo = {
    exports: {}
  };
  !function (e, t) {
    var n = "__lodash_hash_undefined__",
      r = 1,
      i = 2,
      o = 9007199254740991,
      s = "[object Arguments]",
      a = "[object Array]",
      u = "[object AsyncFunction]",
      c = "[object Boolean]",
      l = "[object Date]",
      h = "[object Error]",
      f = "[object Function]",
      d = "[object GeneratorFunction]",
      p = "[object Map]",
      g = "[object Number]",
      y = "[object Null]",
      v = "[object Object]",
      m = "[object Promise]",
      w = "[object Proxy]",
      b = "[object RegExp]",
      _ = "[object Set]",
      S = "[object String]",
      A = "[object Symbol]",
      I = "[object Undefined]",
      C = "[object WeakMap]",
      E = "[object ArrayBuffer]",
      T = "[object DataView]",
      U = /^\[object .+?Constructor\]$/,
      k = /^(?:0|[1-9]\d*)$/,
      P = {};
    P["[object Float32Array]"] = P["[object Float64Array]"] = P["[object Int8Array]"] = P["[object Int16Array]"] = P["[object Int32Array]"] = P["[object Uint8Array]"] = P["[object Uint8ClampedArray]"] = P["[object Uint16Array]"] = P["[object Uint32Array]"] = !0, P[s] = P[a] = P[E] = P[c] = P[T] = P[l] = P[h] = P[f] = P[p] = P[g] = P[v] = P[b] = P[_] = P[S] = P[C] = !1;
    var O = "object" == typeof qe && qe && qe.Object === Object && qe,
      R = "object" == typeof self && self && self.Object === Object && self,
      D = O || R || Function("return this")(),
      x = t && !t.nodeType && t,
      F = x && e && !e.nodeType && e,
      M = F && F.exports === x,
      j = M && O.process,
      N = function () {
        try {
          return j && j.binding && j.binding("util");
        } catch (e) {}
      }(),
      L = N && N.isTypedArray;
    function B(e, t) {
      for (var n = -1, r = null == e ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
      return !1;
    }
    function V(e) {
      var t = -1,
        n = Array(e.size);
      return e.forEach(function (e, r) {
        n[++t] = [r, e];
      }), n;
    }
    function K(e) {
      var t = -1,
        n = Array(e.size);
      return e.forEach(function (e) {
        n[++t] = e;
      }), n;
    }
    var q,
      W,
      G,
      H = Array.prototype,
      z = Function.prototype,
      J = Object.prototype,
      $ = D["__core-js_shared__"],
      Y = z.toString,
      Z = J.hasOwnProperty,
      X = (q = /[^.]+$/.exec($ && $.keys && $.keys.IE_PROTO || "")) ? "Symbol(src)_1." + q : "",
      Q = J.toString,
      ee = RegExp("^" + Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      te = M ? D.Buffer : void 0,
      ne = D.Symbol,
      re = D.Uint8Array,
      ie = J.propertyIsEnumerable,
      oe = H.splice,
      se = ne ? ne.toStringTag : void 0,
      ae = Object.getOwnPropertySymbols,
      ue = te ? te.isBuffer : void 0,
      ce = (W = Object.keys, G = Object, function (e) {
        return W(G(e));
      }),
      le = Ne(D, "DataView"),
      he = Ne(D, "Map"),
      fe = Ne(D, "Promise"),
      de = Ne(D, "Set"),
      pe = Ne(D, "WeakMap"),
      ge = Ne(Object, "create"),
      ye = Ke(le),
      ve = Ke(he),
      me = Ke(fe),
      we = Ke(de),
      be = Ke(pe),
      _e = ne ? ne.prototype : void 0,
      Se = _e ? _e.valueOf : void 0;
    function Ae(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    function Ie(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    function Ce(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    function Ee(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.__data__ = new Ce(); ++t < n;) this.add(e[t]);
    }
    function Te(e) {
      var t = this.__data__ = new Ie(e);
      this.size = t.size;
    }
    function Ue(e, t) {
      var n = He(e),
        r = !n && Ge(e),
        i = !n && !r && ze(e),
        o = !n && !r && !i && Xe(e),
        s = n || r || i || o,
        a = s ? function (e, t) {
          for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
          return r;
        }(e.length, String) : [],
        u = a.length;
      for (var c in e) !Z.call(e, c) || s && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Ve(c, u)) || a.push(c);
      return a;
    }
    function ke(e, t) {
      for (var n = e.length; n--;) if (We(e[n][0], t)) return n;
      return -1;
    }
    function Pe(e) {
      return null == e ? void 0 === e ? I : y : se && se in Object(e) ? function (e) {
        var t = Z.call(e, se),
          n = e[se];
        try {
          e[se] = void 0;
          var r = !0;
        } catch (e) {}
        var i = Q.call(e);
        r && (t ? e[se] = n : delete e[se]);
        return i;
      }(e) : function (e) {
        return Q.call(e);
      }(e);
    }
    function Oe(e) {
      return Ze(e) && Pe(e) == s;
    }
    function Re(e, t, n, o, u) {
      return e === t || (null == e || null == t || !Ze(e) && !Ze(t) ? e != e && t != t : function (e, t, n, o, u, f) {
        var d = He(e),
          y = He(t),
          m = d ? a : Be(e),
          w = y ? a : Be(t),
          I = (m = m == s ? v : m) == v,
          C = (w = w == s ? v : w) == v,
          U = m == w;
        if (U && ze(e)) {
          if (!ze(t)) return !1;
          d = !0, I = !1;
        }
        if (U && !I) return f || (f = new Te()), d || Xe(e) ? Fe(e, t, n, o, u, f) : function (e, t, n, o, s, a, u) {
          switch (n) {
            case T:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
              e = e.buffer, t = t.buffer;
            case E:
              return !(e.byteLength != t.byteLength || !a(new re(e), new re(t)));
            case c:
            case l:
            case g:
              return We(+e, +t);
            case h:
              return e.name == t.name && e.message == t.message;
            case b:
            case S:
              return e == t + "";
            case p:
              var f = V;
            case _:
              var d = o & r;
              if (f || (f = K), e.size != t.size && !d) return !1;
              var y = u.get(e);
              if (y) return y == t;
              o |= i, u.set(e, t);
              var v = Fe(f(e), f(t), o, s, a, u);
              return u.delete(e), v;
            case A:
              if (Se) return Se.call(e) == Se.call(t);
          }
          return !1;
        }(e, t, m, n, o, u, f);
        if (!(n & r)) {
          var k = I && Z.call(e, "__wrapped__"),
            P = C && Z.call(t, "__wrapped__");
          if (k || P) {
            var O = k ? e.value() : e,
              R = P ? t.value() : t;
            return f || (f = new Te()), u(O, R, n, o, f);
          }
        }
        if (!U) return !1;
        return f || (f = new Te()), function (e, t, n, i, o, s) {
          var a = n & r,
            u = Me(e),
            c = u.length,
            l = Me(t),
            h = l.length;
          if (c != h && !a) return !1;
          var f = c;
          for (; f--;) {
            var d = u[f];
            if (!(a ? d in t : Z.call(t, d))) return !1;
          }
          var p = s.get(e);
          if (p && s.get(t)) return p == t;
          var g = !0;
          s.set(e, t), s.set(t, e);
          var y = a;
          for (; ++f < c;) {
            var v = e[d = u[f]],
              m = t[d];
            if (i) var w = a ? i(m, v, d, t, e, s) : i(v, m, d, e, t, s);
            if (!(void 0 === w ? v === m || o(v, m, n, i, s) : w)) {
              g = !1;
              break;
            }
            y || (y = "constructor" == d);
          }
          if (g && !y) {
            var b = e.constructor,
              _ = t.constructor;
            b == _ || !("constructor" in e) || !("constructor" in t) || "function" == typeof b && b instanceof b && "function" == typeof _ && _ instanceof _ || (g = !1);
          }
          return s.delete(e), s.delete(t), g;
        }(e, t, n, o, u, f);
      }(e, t, n, o, Re, u));
    }
    function De(e) {
      return !(!Ye(e) || function (e) {
        return !!X && X in e;
      }(e)) && (Je(e) ? ee : U).test(Ke(e));
    }
    function xe(e) {
      if (n = (t = e) && t.constructor, r = "function" == typeof n && n.prototype || J, t !== r) return ce(e);
      var t,
        n,
        r,
        i = [];
      for (var o in Object(e)) Z.call(e, o) && "constructor" != o && i.push(o);
      return i;
    }
    function Fe(e, t, n, o, s, a) {
      var u = n & r,
        c = e.length,
        l = t.length;
      if (c != l && !(u && l > c)) return !1;
      var h = a.get(e);
      if (h && a.get(t)) return h == t;
      var f = -1,
        d = !0,
        p = n & i ? new Ee() : void 0;
      for (a.set(e, t), a.set(t, e); ++f < c;) {
        var g = e[f],
          y = t[f];
        if (o) var v = u ? o(y, g, f, t, e, a) : o(g, y, f, e, t, a);
        if (void 0 !== v) {
          if (v) continue;
          d = !1;
          break;
        }
        if (p) {
          if (!B(t, function (e, t) {
            if (r = t, !p.has(r) && (g === e || s(g, e, n, o, a))) return p.push(t);
            var r;
          })) {
            d = !1;
            break;
          }
        } else if (g !== y && !s(g, y, n, o, a)) {
          d = !1;
          break;
        }
      }
      return a.delete(e), a.delete(t), d;
    }
    function Me(e) {
      return function (e, t, n) {
        var r = t(e);
        return He(e) ? r : function (e, t) {
          for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
          return e;
        }(r, n(e));
      }(e, Qe, Le);
    }
    function je(e, t) {
      var n,
        r,
        i = e.__data__;
      return ("string" == (r = typeof (n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? i["string" == typeof t ? "string" : "hash"] : i.map;
    }
    function Ne(e, t) {
      var n = function (e, t) {
        return null == e ? void 0 : e[t];
      }(e, t);
      return De(n) ? n : void 0;
    }
    Ae.prototype.clear = function () {
      this.__data__ = ge ? ge(null) : {}, this.size = 0;
    }, Ae.prototype.delete = function (e) {
      var t = this.has(e) && delete this.__data__[e];
      return this.size -= t ? 1 : 0, t;
    }, Ae.prototype.get = function (e) {
      var t = this.__data__;
      if (ge) {
        var r = t[e];
        return r === n ? void 0 : r;
      }
      return Z.call(t, e) ? t[e] : void 0;
    }, Ae.prototype.has = function (e) {
      var t = this.__data__;
      return ge ? void 0 !== t[e] : Z.call(t, e);
    }, Ae.prototype.set = function (e, t) {
      var r = this.__data__;
      return this.size += this.has(e) ? 0 : 1, r[e] = ge && void 0 === t ? n : t, this;
    }, Ie.prototype.clear = function () {
      this.__data__ = [], this.size = 0;
    }, Ie.prototype.delete = function (e) {
      var t = this.__data__,
        n = ke(t, e);
      return !(n < 0) && (n == t.length - 1 ? t.pop() : oe.call(t, n, 1), --this.size, !0);
    }, Ie.prototype.get = function (e) {
      var t = this.__data__,
        n = ke(t, e);
      return n < 0 ? void 0 : t[n][1];
    }, Ie.prototype.has = function (e) {
      return ke(this.__data__, e) > -1;
    }, Ie.prototype.set = function (e, t) {
      var n = this.__data__,
        r = ke(n, e);
      return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
    }, Ce.prototype.clear = function () {
      this.size = 0, this.__data__ = {
        hash: new Ae(),
        map: new (he || Ie)(),
        string: new Ae()
      };
    }, Ce.prototype.delete = function (e) {
      var t = je(this, e).delete(e);
      return this.size -= t ? 1 : 0, t;
    }, Ce.prototype.get = function (e) {
      return je(this, e).get(e);
    }, Ce.prototype.has = function (e) {
      return je(this, e).has(e);
    }, Ce.prototype.set = function (e, t) {
      var n = je(this, e),
        r = n.size;
      return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
    }, Ee.prototype.add = Ee.prototype.push = function (e) {
      return this.__data__.set(e, n), this;
    }, Ee.prototype.has = function (e) {
      return this.__data__.has(e);
    }, Te.prototype.clear = function () {
      this.__data__ = new Ie(), this.size = 0;
    }, Te.prototype.delete = function (e) {
      var t = this.__data__,
        n = t.delete(e);
      return this.size = t.size, n;
    }, Te.prototype.get = function (e) {
      return this.__data__.get(e);
    }, Te.prototype.has = function (e) {
      return this.__data__.has(e);
    }, Te.prototype.set = function (e, t) {
      var n = this.__data__;
      if (n instanceof Ie) {
        var r = n.__data__;
        if (!he || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
        n = this.__data__ = new Ce(r);
      }
      return n.set(e, t), this.size = n.size, this;
    };
    var Le = ae ? function (e) {
        return null == e ? [] : (e = Object(e), function (e, t) {
          for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) {
            var s = e[n];
            t(s, n, e) && (o[i++] = s);
          }
          return o;
        }(ae(e), function (t) {
          return ie.call(e, t);
        }));
      } : function () {
        return [];
      },
      Be = Pe;
    function Ve(e, t) {
      return !!(t = null == t ? o : t) && ("number" == typeof e || k.test(e)) && e > -1 && e % 1 == 0 && e < t;
    }
    function Ke(e) {
      if (null != e) {
        try {
          return Y.call(e);
        } catch (e) {}
        try {
          return e + "";
        } catch (e) {}
      }
      return "";
    }
    function We(e, t) {
      return e === t || e != e && t != t;
    }
    (le && Be(new le(new ArrayBuffer(1))) != T || he && Be(new he()) != p || fe && Be(fe.resolve()) != m || de && Be(new de()) != _ || pe && Be(new pe()) != C) && (Be = function (e) {
      var t = Pe(e),
        n = t == v ? e.constructor : void 0,
        r = n ? Ke(n) : "";
      if (r) switch (r) {
        case ye:
          return T;
        case ve:
          return p;
        case me:
          return m;
        case we:
          return _;
        case be:
          return C;
      }
      return t;
    });
    var Ge = Oe(function () {
        return arguments;
      }()) ? Oe : function (e) {
        return Ze(e) && Z.call(e, "callee") && !ie.call(e, "callee");
      },
      He = Array.isArray;
    var ze = ue || function () {
      return !1;
    };
    function Je(e) {
      if (!Ye(e)) return !1;
      var t = Pe(e);
      return t == f || t == d || t == u || t == w;
    }
    function $e(e) {
      return "number" == typeof e && e > -1 && e % 1 == 0 && e <= o;
    }
    function Ye(e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    }
    function Ze(e) {
      return null != e && "object" == typeof e;
    }
    var Xe = L ? function (e) {
      return function (t) {
        return e(t);
      };
    }(L) : function (e) {
      return Ze(e) && $e(e.length) && !!P[Pe(e)];
    };
    function Qe(e) {
      return null != (t = e) && $e(t.length) && !Je(t) ? Ue(e) : xe(e);
      var t;
    }
    e.exports = function (e, t) {
      return Re(e, t);
    };
  }(mo, mo.exports);
  var wo,
    bo,
    _o,
    So,
    Ao,
    Io,
    Co,
    Eo,
    To,
    Uo,
    ko,
    Po,
    Oo,
    Ro,
    Do,
    xo,
    Fo,
    Mo = We(mo.exports);
  class jo {
    serialize(e) {
      if (null != e) return JSON.stringify(e);
    }
    deserialize(e) {
      if (null != e) return JSON.parse(e);
    }
  }
  class No {
    get validityKey() {
      return `${U(this, _o, "f")}__expires`;
    }
    constructor(_ref3) {
      let {
        storage: e = localStorage,
        key: t,
        timespan: n = 0,
        canFetch: r,
        fetch: i,
        serializer: o = new jo(),
        serialize: s = !0,
        validate: a = () => !0
      } = _ref3;
      wo.add(this), bo.set(this, void 0), _o.set(this, void 0), So.set(this, void 0), Ao.set(this, void 0), Io.set(this, void 0), Co.set(this, void 0), Eo.set(this, void 0), To.set(this, void 0), k(this, bo, e, "f"), k(this, _o, t, "f"), k(this, So, n, "f"), k(this, Ao, r, "f"), k(this, Io, i, "f"), k(this, Co, o, "f"), k(this, Eo, s, "f"), k(this, To, a, "f");
    }
    get() {
      return h(this, void 0, void 0, function* () {
        const [e, t] = yield U(this, wo, "m", Ro).call(this);
        if (e) return t;
        const n = yield U(this, Io, "f").call(this);
        return void 0 === n ? t : (U(this, wo, "m", Uo).call(this, n), U(this, wo, "m", Oo).call(this), n);
      });
    }
    invalidate() {
      U(this, bo, "f").removeItem(this.validityKey);
    }
    getCached() {
      return U(this, wo, "m", xo).call(this)[1];
    }
    clear() {
      U(this, bo, "f").removeItem(U(this, _o, "f")), U(this, bo, "f").removeItem(this.validityKey);
    }
  }
  function Lo(_ref4) {
    let {
      fetchEndpoints: e,
      getAccessToken: t,
      logger: n,
      httpClient: r,
      canFetch: i,
      key: o = "user_info",
      timespan: s = 3e5
    } = _ref4;
    return new No({
      fetch: () => h(this, void 0, void 0, function* () {
        try {
          const n = yield function (e) {
            return h(this, arguments, void 0, function (_ref5) {
              let {
                fetchEndpoints: e,
                getAccessToken: t,
                httpClient: n
              } = _ref5;
              return function* () {
                const r = (yield e()).userinfo_endpoint;
                if (!r) throw new Error("Missing user info endpoint");
                const i = yield t();
                if (!i) throw new Error("Missing access token");
                const o = yield n.get({
                  url: r,
                  headers: {
                    Authorization: i
                  }
                });
                if (void 0 === o) throw new Error("Couldn't get any response from server while fetching user info.");
                return o;
              }();
            });
          }({
            fetchEndpoints: e,
            getAccessToken: t,
            httpClient: r
          });
          return function (e) {
            return Object.assign(Object.assign({}, e), {
              os_access: "string" == typeof e.os_access ? JSON.parse(e.os_access) : {
                userId: "",
                roles: []
              }
            });
          }(n);
        } catch (e) {
          return void (null == n || n.error({
            message: "Failed to load user info",
            error: e instanceof Error ? e : new Error("Unknown error"),
            category: "UserInfoCache"
          }));
        }
      }),
      canFetch: i,
      key: o,
      timespan: s
    });
  }
  bo = new WeakMap(), _o = new WeakMap(), So = new WeakMap(), Ao = new WeakMap(), Io = new WeakMap(), Co = new WeakMap(), Eo = new WeakMap(), To = new WeakMap(), wo = new WeakSet(), Uo = function (e) {
    const t = U(this, wo, "m", Po).call(this, e);
    "string" == typeof t ? U(this, bo, "f").setItem(U(this, _o, "f"), t) : U(this, bo, "f").removeItem(U(this, _o, "f"));
  }, ko = function (e) {
    return U(this, Eo, "f") ? U(this, Co, "f").deserialize(e) : e;
  }, Po = function (e) {
    return U(this, Eo, "f") ? U(this, Co, "f").serialize(e) : e;
  }, Oo = function () {
    if (0 === U(this, So, "f")) return void U(this, bo, "f").setItem(this.validityKey, "0");
    const e = (new Date().getTime() + U(this, So, "f")).toString();
    U(this, bo, "f").setItem(this.validityKey, e);
  }, Ro = function () {
    return h(this, void 0, void 0, function* () {
      const [e, t] = U(this, wo, "m", xo).call(this);
      if (!U(this, Ao, "f").call(this)) return [!0, t];
      if (void 0 === e) return [!1, void 0];
      if (U(this, wo, "m", Do).call(this)) return [!1, t];
      if ("function" == typeof U(this, To, "f")) {
        return [yield U(this, To, "f").call(this, t), t];
      }
      return [!0, t];
    });
  }, Do = function () {
    const e = U(this, bo, "f").getItem(this.validityKey),
      t = parseInt(null != e ? e : "", 10);
    return !!(isNaN(t) || t < 0) || t > 0 && t <= new Date().getTime();
  }, xo = function () {
    var e;
    const t = null !== (e = U(this, bo, "f").getItem(U(this, _o, "f"))) && void 0 !== e ? e : void 0;
    return [t, U(this, wo, "m", ko).call(this, t)];
  }, function (e) {
    e[e.Internal = 0] = "Internal", e[e.External = 1] = "External", e[e.Client = 2] = "Client";
  }(Fo || (Fo = {}));
  var Bo,
    Vo,
    Ko,
    qo,
    Wo,
    Go,
    Ho,
    zo = Fo;
  class Jo {
    constructor(_ref6) {
      let {
        synchronize: e,
        logger: t,
        setTimeoutOverride: n = setTimeout,
        clearTimeoutOverride: r = clearTimeout,
        timeout: i,
        start: o = !0
      } = _ref6;
      Bo.add(this), Vo.set(this, void 0), Ko.set(this, void 0), qo.set(this, void 0), Wo.set(this, void 0), Go.set(this, void 0), k(this, Vo, e, "f"), k(this, Ko, t, "f"), k(this, Wo, n, "f"), k(this, Go, r, "f"), k(this, qo, i, "f"), o && U(this, Bo, "m", Ho).call(this);
    }
    trySynchronize() {
      return h(this, void 0, void 0, function* () {
        var e;
        U(this, qo, "f") && U(this, Go, "f").call(this, U(this, qo, "f"));
        try {
          yield U(this, Vo, "f").call(this);
        } catch (t) {
          null === (e = U(this, Ko, "f")) || void 0 === e || e.error({
            category: "AuthenticationSynchronizer",
            message: "Error while synchronizing information.",
            error: t,
            code: "OS-CLRT-40300"
          }), U(this, Bo, "m", Ho).call(this);
        }
      });
    }
  }
  var $o, Yo, Zo, Xo, Qo, es, ts, ns, rs, is, os;
  Vo = new WeakMap(), Ko = new WeakMap(), qo = new WeakMap(), Wo = new WeakMap(), Go = new WeakMap(), Bo = new WeakSet(), Ho = function () {
    k(this, qo, U(this, Wo, "f").call(this, () => this.trySynchronize(), 6e4), "f");
  };
  const ss = "authentication-token-handler";
  class as {
    constructor(_ref7) {
      let {
        authData: e,
        decodeJwt: t = go,
        logger: n,
        tokenValidator: r = vo
      } = _ref7;
      $o.add(this), Yo.set(this, void 0), Zo.set(this, void 0), Xo.set(this, void 0), Qo.set(this, void 0), es.set(this, void 0), ts.set(this, void 0), k(this, Yo, e, "f"), k(this, Qo, t, "f"), k(this, ts, n, "f"), k(this, es, r, "f");
    }
    invalidateAccessToken(e) {
      "string" == typeof e && e.length > 0 && k(this, Zo, e, "f");
    }
    isAccessTokenValid(e, t) {
      return "string" == typeof e && e !== U(this, Zo, "f") && (null != t ? t : U(this, es, "f"))({
        token: e,
        tokenDecoder: U(this, Qo, "f")
      });
    }
    isRefreshTokenValid(e, t) {
      const n = null != e ? e : U(this, Yo, "f").readRefreshToken();
      return "string" == typeof n && n !== U(this, Xo, "f") && (null != t ? t : U(this, es, "f"))({
        token: n,
        tokenDecoder: U(this, Qo, "f")
      });
    }
    refreshToken(e) {
      return h(this, arguments, void 0, function (_ref8) {
        var _this = this;
        let {
          refreshEndpoint: e,
          client: t,
          scope: n,
          clientId: r,
          timeoutHandler: i
        } = _ref8;
        return function* () {
          var o, s, a;
          _this.invalidateAccessToken(null !== (o = U(_this, Yo, "f").readAccessToken()) && void 0 !== o ? o : "");
          const u = U(_this, Yo, "f").readRefreshToken();
          if (!u) return "[]" !== U(_this, Xo, "f") && (null === (s = U(_this, ts, "f")) || void 0 === s || s.info({
            category: ss,
            message: "No refresh token stored. Could not refresh the tokens.",
            visibility: zo.Internal
          }), k(_this, Xo, "[]", "f")), {
            type: "invalid-state"
          };
          if (!_this.isRefreshTokenValid(u)) return u === U(_this, Xo, "f") ? {
            type: "invalid-state"
          } : {
            type: "error",
            error: U(_this, $o, "m", ns).call(_this, u)
          };
          try {
            const o = yield t.post({
              url: e,
              payload: {
                grant_type: "refresh_token",
                refresh_token: u,
                client_id: r,
                scope: n
              },
              timeoutHandler: i
            });
            if (void 0 === o) {
              const e = new Error("Couldn't get any response from server while refreshing tokens.");
              throw null === (a = U(_this, ts, "f")) || void 0 === a || a.error({
                category: ss,
                code: "OS-CLRT-40100",
                error: e,
                visibility: zo.Internal
              }), e;
            }
            return k(_this, Xo, u, "f"), U(_this, $o, "m", os).call(_this, o), {
              type: "success",
              token: o
            };
          } catch (e) {
            const t = U(_this, $o, "m", rs).call(_this, e);
            return "OS-CLRT-40112" !== t.errorCode && k(_this, Xo, u, "f"), {
              type: "error",
              error: t
            };
          }
        }();
      });
    }
  }
  Yo = new WeakMap(), Zo = new WeakMap(), Xo = new WeakMap(), Qo = new WeakMap(), es = new WeakMap(), ts = new WeakMap(), $o = new WeakSet(), ns = function (e) {
    var t;
    k(this, Xo, e, "f");
    const n = new ao("OS-CLRT-40103", "Refresh token not valid.");
    return null === (t = U(this, ts, "f")) || void 0 === t || t.error({
      error: n,
      category: ss,
      code: n.errorCode
    }), n;
  }, rs = function (e) {
    var t;
    const n = "string" == typeof (r = e) ? new Error(r) : r instanceof Error ? r : new Error("Unknown error");
    var r;
    if (n instanceof ao) return n;
    const i = U(this, $o, "m", is).call(this, n),
      o = `Failed to call refresh token endpoint: ${n.message}`;
    return null === (t = U(this, ts, "f")) || void 0 === t || t.error({
      error: n,
      category: ss,
      code: i,
      message: o
    }), new ao(i, o);
  }, is = function (n) {
    return n instanceof _communicationJs.CommunicationError ? (0, _communicationJs.isNetworkOrServerError)(n) ? "OS-CLRT-40112" : "OS-CLRT-40100" : "OS-CLRT-40112";
  }, os = function (e) {
    var t, n;
    e.access_token !== U(this, Zo, "f") ? k(this, Zo, void 0, "f") : null === (t = U(this, ts, "f")) || void 0 === t || t.warning({
      category: ss,
      message: "Access token already invalidated."
    }), e.refresh_token !== U(this, Xo, "f") ? k(this, Xo, void 0, "f") : null === (n = U(this, ts, "f")) || void 0 === n || n.warning({
      category: ss,
      message: "Refresh token already invalidated."
    });
  };
  const us = "/moduleservices/users/userinfosync";
  var cs, ls, hs, fs, ds, ps, gs, ys;
  !function (e) {
    e.Authorization = "authorization_endpoint", e.Token = "token_endpoint", e.Logout = "end_session_endpoint", e.Refresh = "token_endpoint", e.UserInfo = "userinfo_endpoint";
  }(cs || (cs = {}));
  const vs = "Authentication";
  class ms {
    constructor(_ref9) {
      let {
        scope: e = "",
        identityEndpoint: t = "/identity/.well-known/openid-configuration",
        appUrl: n,
        appSyncEndpoint: r = us,
        authData: i,
        httpClient: o,
        decodeJwt: s = go,
        logger: a,
        validator: u = vo,
        tokenHandler: c = new as({
          authData: i,
          decodeJwt: s,
          logger: a,
          tokenValidator: u
        }),
        synchronizer: l,
        userInfo: h,
        isOnline: f = () => !0
      } = _ref9;
      ls.add(this), hs.set(this, void 0), fs.set(this, void 0), ds.set(this, void 0), this.scope = e, k(this, hs, t, "f"), this.appUrl = n, this.appSyncEndpoint = r, this.authData = i, this.httpClient = o, this.decodeJwt = s, this.logger = a, this.tokenHandler = c, this.isOnline = f, k(this, fs, null != l ? l : new Jo({
        synchronize: () => this.synchronizeUserInfo(),
        logger: a
      }), "f"), this.userInfo = null != h ? h : Lo({
        canFetch: () => this.isAuthenticated() && f(),
        fetchEndpoints: () => this.fetchEndpoints(),
        getAccessToken: () => this.getValidAccessToken(),
        httpClient: o,
        logger: a
      });
    }
    getValidAccessToken() {
      return h(this, arguments, void 0, function () {
        var _this2 = this;
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        return function* () {
          var n, r;
          const i = t ? _this2.logger : void 0;
          return _this2.isOnline() ? _this2.authData.readToken() ? (!e && _this2.isAccessTokenValid() || (null == i || i.debug({
            category: vs,
            message: "Refreshing tokens."
          }), yield _this2.refreshTokens()), null !== (r = _this2.getAccessToken()) && void 0 !== r ? r : void 0) : void (null == i || i.info({
            category: vs,
            message: "Cannot get access token because there is no token stored."
          })) : (null == i || i.info({
            category: vs,
            message: "Device is offline, using last known access token."
          }), null !== (n = _this2.getAccessToken()) && void 0 !== n ? n : void 0);
        }();
      });
    }
    fetchEndpoints() {
      return h(this, void 0, void 0, function* () {
        var e;
        const t = this.authData.readEndpoints();
        if (t) return t;
        {
          const t = yield this.httpClient.get({
            url: U(this, hs, "f")
          });
          if (void 0 === t) {
            const t = new Error("Couldn't get any response from server while fetching tokens.");
            throw null === (e = this.logger) || void 0 === e || e.error({
              category: vs,
              code: "OS-CLRT-40100",
              error: t
            }), t;
          }
          return this.authData.storeEndpoints(t), t;
        }
      });
    }
    getUserId() {
      var e, t;
      if (!this.isAuthenticated()) return null;
      const n = this.userInfo.getCached();
      return null !== (t = null === (e = null == n ? void 0 : n.os_access) || void 0 === e ? void 0 : e.userId) && void 0 !== t ? t : null;
    }
    isAuthenticated() {
      const e = this.authData.readToken();
      return !!(null == e ? void 0 : e.access_token) && !!(null == e ? void 0 : e.refresh_token) && !!(null == e ? void 0 : e.id_token);
    }
    getAccessToken() {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : yo;
      return e(this.authData.readToken());
    }
    isAccessTokenValid() {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : vo;
      const t = this.getAccessToken();
      return this.tokenHandler.isAccessTokenValid(null != t ? t : "", e);
    }
    isRefreshTokenValid() {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : vo;
      const t = this.authData.readRefreshToken();
      return this.tokenHandler.isRefreshTokenValid(null != t ? t : "", e);
    }
    refreshTokens() {
      return U(this, ds, "f") || k(this, ds, U(this, ls, "m", ps).call(this), "f"), U(this, ds, "f");
    }
    logout(e) {
      return h(this, arguments, void 0, function (_ref10) {
        var _this3 = this;
        let {
          redirectUri: e,
          authSignOut: t = () => $i.signOut()
        } = _ref10;
        return function* () {
          var n, r, i;
          const o = yield _this3.fetchEndpoints(),
            s = _this3.authData.readIdToken();
          if (_this3.authData.clearAuthData(), _this3.userInfo.clear(), !s) return void (null === (n = _this3.logger) || void 0 === n || n.info({
            category: vs,
            message: "No id token stored. Logout not completed.",
            visibility: zo.Internal
          }));
          try {
            yield t();
          } catch (e) {
            null === (r = _this3.logger) || void 0 === r || r.error({
              category: vs,
              message: "Error calling the auth signout",
              error: e,
              code: "OS-CLRT-40108"
            });
          }
          const a = {
            id_token_hint: s,
            post_logout_redirect_uri: e
          };
          try {
            yield _this3.httpClient.post({
              url: o.end_session_endpoint,
              payload: a
            });
          } catch (e) {
            null === (i = _this3.logger) || void 0 === i || i.error({
              category: vs,
              message: "Error calling the logout endpoint",
              error: e,
              code: "OS-CLRT-40108"
            });
          }
        }();
      });
    }
    clearAuthenticationData() {
      k(this, ds, void 0, "f"), this.authData.clearAuthData(), this.userInfo.clear();
    }
    hasRole(e) {
      var t, n, r;
      const i = this.userInfo.getCached();
      return null !== (r = null === (n = null === (t = null == i ? void 0 : i.os_access) || void 0 === t ? void 0 : t.roles) || void 0 === n ? void 0 : n.includes(e)) && void 0 !== r && r;
    }
    buildUrl(e) {
      return `/${this.appUrl}/${e}`.replace(/\/(\/)+/gm, "/");
    }
    getUserSyncUrl() {
      return this.buildUrl(this.appSyncEndpoint);
    }
    storeTokenInfo(e) {
      return h(this, void 0, void 0, function* () {
        var t, n;
        const r = this.authData.readToken();
        this.authData.storeToken(e);
        const i = this.userInfo.getCached();
        this.userInfo.invalidate();
        const o = yield U(this, ls, "m", ys).call(this);
        if ("error" === o.type) {
          const e = o.error instanceof Error ? o.error.message : "Unknown error";
          throw new ao("OS-CLRT-40113", e);
        }
        const s = null === (n = null === (t = o.user) || void 0 === t ? void 0 : t.os_access) || void 0 === n ? void 0 : n.userId;
        if (!s) throw new ao("OS-CLRT-40111", "User ID is missing.");
        return r && Mo(i, o.user) || U(this, fs, "f").trySynchronize(), s;
      });
    }
    synchronizeUserInfo() {
      return h(this, void 0, void 0, function* () {
        if (this.isOnline() && this.isAuthenticated()) {
          const e = yield this.getValidAccessToken();
          if (!e) throw new Error("No token available to synchronize user info.");
          yield this.httpClient.post({
            url: this.getUserSyncUrl(),
            headers: {
              Authorization: e
            }
          });
        }
      });
    }
    getUserInfo() {
      return h(this, void 0, void 0, function* () {
        var e, t, n;
        const r = yield this.userInfo.get();
        return {
          username: null !== (e = null == r ? void 0 : r.email) && void 0 !== e ? e : "",
          name: null !== (t = null == r ? void 0 : r.name) && void 0 !== t ? t : "",
          pictureUrl: null !== (n = null == r ? void 0 : r.picture) && void 0 !== n ? n : ""
        };
      });
    }
    isAuthEndpoint(e) {
      var t;
      const [n] = e.split("?"),
        r = null !== (t = this.authData.readEndpoints()) && void 0 !== t ? t : {};
      for (const e of Object.values(r)) if (n === e) return !0;
      return !1;
    }
  }
  var ws;
  hs = new WeakMap(), fs = new WeakMap(), ds = new WeakMap(), ls = new WeakSet(), ps = function () {
    return h(this, void 0, void 0, function* () {
      try {
        const e = yield this.fetchEndpoints(),
          t = yield this.tokenHandler.refreshToken({
            refreshEndpoint: e.token_endpoint,
            client: this.httpClient,
            clientId: Yi,
            scope: this.scope
          });
        switch (t.type) {
          case "success":
            yield this.storeTokenInfo(t.token);
            break;
          case "error":
            throw t.error;
          case "invalid-state":
            this.clearAuthenticationData();
        }
      } catch (e) {
        throw U(this, ls, "m", gs).call(this, e) && this.clearAuthenticationData(), e;
      } finally {
        k(this, ds, void 0, "f");
      }
    });
  }, gs = function (e) {
    return e instanceof ao && "OS-CLRT-40112" !== e.errorCode;
  }, ys = function () {
    return h(this, void 0, void 0, function* () {
      var e;
      try {
        const e = yield this.userInfo.get();
        if (!e) throw new Error("User info is missing.");
        return {
          type: "success",
          user: e
        };
      } catch (t) {
        return null === (e = this.logger) || void 0 === e || e.error({
          category: vs,
          message: "Error getting user info",
          error: t instanceof Error ? t : new Error("Unknown error"),
          code: "OS-CLRT-40100",
          visibility: zo.Internal
        }), {
          type: "error",
          error: t
        };
      }
    });
  };
  class bs extends ms {
    constructor(_ref11) {
      let {
        appKey: e,
        identityProvider: t,
        appUrl: r,
        baseUrl: i,
        region: o,
        poolId: s,
        clientId: a,
        scope: u = "",
        identityEndpoint: c,
        httpClient: l = new _communicationJs.HttpClient({
          baseUrl: i
        }),
        appSyncEndpoint: h = us,
        authData: f = new oo(),
        decodeJwt: d = go,
        configureAmplify: p = e => ue.configure(e),
        logger: g,
        validator: y,
        tokenHandler: v,
        synchronizer: m,
        isOnline: w,
        userInfo: b
      } = _ref11;
      var _;
      if (super({
        scope: u,
        identityEndpoint: c,
        appUrl: r,
        appSyncEndpoint: h,
        authData: f,
        httpClient: l,
        decodeJwt: d,
        logger: g,
        validator: y,
        tokenHandler: v,
        synchronizer: m,
        isOnline: w,
        userInfo: b
      }), ws.set(this, void 0), k(this, ws, t, "f"), o && s && a) try {
        p({
          Auth: {
            region: o,
            userPoolId: s,
            userPoolWebClientId: a
          }
        });
      } catch (e) {
        null === (_ = this.logger) || void 0 === _ || _.error({
          category: vs,
          message: "Error while configuring Amplify",
          error: e,
          code: "OS-CLRT-40110"
        });
      }
    }
    isExternalUser() {
      return !0;
    }
    getLoginUrl(e) {
      return h(this, arguments, void 0, function (_ref12) {
        var _this4 = this;
        let {
          redirectUri: e,
          callbackUrl: t
        } = _ref12;
        return function* () {
          const n = yield _this4.fetchEndpoints(),
            r = new URLSearchParams(t ? {
              callback_url: t
            } : {}).toString(),
            i = {
              client_id: Yi,
              scope: _this4.scope,
              redirect_uri: r ? `${e}?${r}` : e,
              response_type: "code",
              kc_idp_hint: U(_this4, ws, "f")
            },
            o = new URLSearchParams(i).toString();
          return `${n.authorization_endpoint}?${o}`;
        }();
      });
    }
    login(e) {
      return h(this, arguments, void 0, function (_ref13) {
        var _this5 = this;
        let {
          redirectUri: e,
          callbackUrl: t,
          navigationHandler: n = e => window.location.replace(e)
        } = _ref13;
        return function* () {
          n(yield _this5.getLoginUrl({
            redirectUri: e,
            callbackUrl: t
          }));
        }();
      });
    }
    resumeLogin(e) {
      return h(this, arguments, void 0, function (_ref14) {
        var _this6 = this;
        let {
          url: e,
          redirectUri: t
        } = _ref14;
        return function* () {
          const n = yield _this6.fetchEndpoints(),
            r = new URL(e).searchParams,
            i = r.get("code"),
            o = r.get("callback_url"),
            s = new URLSearchParams(o ? {
              callback_url: o
            } : {}).toString();
          if (!i) throw _this6.authData.clearAuthData(), _this6.userInfo.clear(), Error(`Missing mandatory parameters to continue the login: authz_code: ${i}`);
          try {
            const e = s ? `${t}?${s}` : t,
              r = yield _this6.requestToken(n.token_endpoint, e, i);
            yield _this6.storeTokenInfo(r);
          } catch (e) {
            throw _this6.authData.clearAuthData(), _this6.userInfo.clear(), e;
          }
          return o;
        }();
      });
    }
    requestToken(e, t, n) {
      return h(this, void 0, void 0, function* () {
        var r;
        try {
          const i = yield this.httpClient.post({
            url: e,
            payload: {
              grant_type: "authorization_code",
              code: n,
              redirect_uri: t,
              client_id: Yi
            }
          });
          if (void 0 === i) {
            const e = new Error("Couldn't get any response from server while getting tokens.");
            throw null === (r = this.logger) || void 0 === r || r.error({
              category: vs,
              code: "OS-CLRT-40100",
              error: e
            }), e;
          }
          return i;
        } catch (e) {
          throw uo.create({
            name: so.IdentityTokenEndpointFailed,
            message: "Error calling the external auth token endpoint",
            code: "OS-ID-BIZ-40021"
          });
        }
      });
    }
    getLogoutUrl(e) {
      return h(this, arguments, void 0, function (_ref15) {
        var _this7 = this;
        let {
          redirectUri: e,
          callbackUrl: t
        } = _ref15;
        return function* () {
          const n = yield _this7.fetchEndpoints(),
            r = _this7.authData.readIdToken();
          if (!r) throw new Error("No id token stored. Could not logout.");
          const i = new URLSearchParams(t ? {
              callback_url: t
            } : {}).toString(),
            o = new URLSearchParams({
              id_token_hint: r,
              post_logout_redirect_uri: i ? `${e}?${i}` : e
            }).toString();
          return `${n.end_session_endpoint}?${o}`;
        }();
      });
    }
    resumeLogout(e) {
      return h(this, arguments, void 0, function (_ref16) {
        var _this8 = this;
        let {
          url: e,
          authSignOut: t = () => $i.signOut()
        } = _ref16;
        return function* () {
          var n;
          const r = new URL(e).searchParams.get("callback_url");
          try {
            yield t();
          } catch (e) {
            throw null === (n = _this8.logger) || void 0 === n || n.error({
              category: vs,
              message: "Error calling the external auth signout",
              error: e,
              code: "OS-CLRT-40108"
            }), e;
          }
          return _this8.authData.clearAuthData(), _this8.userInfo.clear(), r ? decodeURIComponent(r) : null;
        }();
      });
    }
  }
  _exports.ExternalAuth = bs;
  ws = new WeakMap();
  var _s = {
    exports: {}
  };
  !function (e, t) {
    var n = 9007199254740991,
      r = "[object Arguments]",
      i = "[object Function]",
      o = "[object GeneratorFunction]",
      s = "[object Map]",
      a = "[object Promise]",
      u = "[object Set]",
      c = "[object WeakMap]",
      l = "[object DataView]",
      h = /^\[object .+?Constructor\]$/,
      f = "object" == typeof qe && qe && qe.Object === Object && qe,
      d = "object" == typeof self && self && self.Object === Object && self,
      p = f || d || Function("return this")(),
      g = t && !t.nodeType && t,
      y = g && e && !e.nodeType && e,
      v = y && y.exports === g;
    var m,
      w,
      b,
      _ = Function.prototype,
      S = Object.prototype,
      A = p["__core-js_shared__"],
      I = (m = /[^.]+$/.exec(A && A.keys && A.keys.IE_PROTO || "")) ? "Symbol(src)_1." + m : "",
      C = _.toString,
      E = S.hasOwnProperty,
      T = S.toString,
      U = RegExp("^" + C.call(E).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      k = v ? p.Buffer : void 0,
      P = S.propertyIsEnumerable,
      O = k ? k.isBuffer : void 0,
      R = (w = Object.keys, b = Object, function (e) {
        return w(b(e));
      }),
      D = G(p, "DataView"),
      x = G(p, "Map"),
      F = G(p, "Promise"),
      M = G(p, "Set"),
      j = G(p, "WeakMap"),
      N = !P.call({
        valueOf: 1
      }, "valueOf"),
      L = z(D),
      B = z(x),
      V = z(F),
      K = z(M),
      q = z(j);
    function W(e) {
      if (!Q(e) || function (e) {
        return !!I && I in e;
      }(e)) return !1;
      var t = X(e) || function (e) {
        var t = !1;
        if (null != e && "function" != typeof e.toString) try {
          t = !!(e + "");
        } catch (e) {}
        return t;
      }(e) ? U : h;
      return t.test(z(e));
    }
    function G(e, t) {
      var n = function (e, t) {
        return null == e ? void 0 : e[t];
      }(e, t);
      return W(n) ? n : void 0;
    }
    var H = function (e) {
      return T.call(e);
    };
    function z(e) {
      if (null != e) {
        try {
          return C.call(e);
        } catch (e) {}
        try {
          return e + "";
        } catch (e) {}
      }
      return "";
    }
    function J(e) {
      return function (e) {
        return function (e) {
          return !!e && "object" == typeof e;
        }(e) && Y(e);
      }(e) && E.call(e, "callee") && (!P.call(e, "callee") || T.call(e) == r);
    }
    (D && H(new D(new ArrayBuffer(1))) != l || x && H(new x()) != s || F && H(F.resolve()) != a || M && H(new M()) != u || j && H(new j()) != c) && (H = function (e) {
      var t = T.call(e),
        n = "[object Object]" == t ? e.constructor : void 0,
        r = n ? z(n) : void 0;
      if (r) switch (r) {
        case L:
          return l;
        case B:
          return s;
        case V:
          return a;
        case K:
          return u;
        case q:
          return c;
      }
      return t;
    });
    var $ = Array.isArray;
    function Y(e) {
      return null != e && function (e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n;
      }(e.length) && !X(e);
    }
    var Z = O || function () {
      return !1;
    };
    function X(e) {
      var t = Q(e) ? T.call(e) : "";
      return t == i || t == o;
    }
    function Q(e) {
      var t = typeof e;
      return !!e && ("object" == t || "function" == t);
    }
    e.exports = function (e) {
      if (Y(e) && ($(e) || "string" == typeof e || "function" == typeof e.splice || Z(e) || J(e))) return !e.length;
      var t = H(e);
      if (t == s || t == u) return !e.size;
      if (N || function (e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || S);
      }(e)) return !R(e).length;
      for (var n in e) if (E.call(e, n)) return !1;
      return !0;
    };
  }(_s, _s.exports);
  var Ss = We(_s.exports),
    As = {
      exports: {}
    };
  !function (e, t) {
    var n = "__lodash_hash_undefined__",
      r = 1,
      i = 2,
      o = 1 / 0,
      s = 9007199254740991,
      a = "[object Arguments]",
      u = "[object Array]",
      c = "[object Boolean]",
      l = "[object Date]",
      h = "[object Error]",
      f = "[object Function]",
      d = "[object GeneratorFunction]",
      p = "[object Map]",
      g = "[object Number]",
      y = "[object Object]",
      v = "[object Promise]",
      m = "[object RegExp]",
      w = "[object Set]",
      b = "[object String]",
      _ = "[object Symbol]",
      S = "[object WeakMap]",
      A = "[object ArrayBuffer]",
      I = "[object DataView]",
      C = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      E = /^\w*$/,
      T = /^\./,
      U = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      k = /\\(\\)?/g,
      P = /^\[object .+?Constructor\]$/,
      O = /^(?:0|[1-9]\d*)$/,
      R = {};
    R["[object Float32Array]"] = R["[object Float64Array]"] = R["[object Int8Array]"] = R["[object Int16Array]"] = R["[object Int32Array]"] = R["[object Uint8Array]"] = R["[object Uint8ClampedArray]"] = R["[object Uint16Array]"] = R["[object Uint32Array]"] = !0, R[a] = R[u] = R[A] = R[c] = R[I] = R[l] = R[h] = R[f] = R[p] = R[g] = R[y] = R[m] = R[w] = R[b] = R[S] = !1;
    var D = "object" == typeof qe && qe && qe.Object === Object && qe,
      x = "object" == typeof self && self && self.Object === Object && self,
      F = D || x || Function("return this")(),
      M = t && !t.nodeType && t,
      j = M && e && !e.nodeType && e,
      N = j && j.exports === M && D.process,
      L = function () {
        try {
          return N && N.binding("util");
        } catch (e) {}
      }(),
      B = L && L.isTypedArray;
    function V(e, t) {
      for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
      return e;
    }
    function K(e, t) {
      for (var n = -1, r = e ? e.length : 0; ++n < r;) if (t(e[n], n, e)) return !0;
      return !1;
    }
    function q(e) {
      var t = !1;
      if (null != e && "function" != typeof e.toString) try {
        t = !!(e + "");
      } catch (e) {}
      return t;
    }
    function W(e) {
      var t = -1,
        n = Array(e.size);
      return e.forEach(function (e, r) {
        n[++t] = [r, e];
      }), n;
    }
    function G(e, t) {
      return function (n) {
        return e(t(n));
      };
    }
    function H(e) {
      var t = -1,
        n = Array(e.size);
      return e.forEach(function (e) {
        n[++t] = e;
      }), n;
    }
    var z,
      J = Array.prototype,
      $ = Function.prototype,
      Y = Object.prototype,
      Z = F["__core-js_shared__"],
      X = (z = /[^.]+$/.exec(Z && Z.keys && Z.keys.IE_PROTO || "")) ? "Symbol(src)_1." + z : "",
      Q = $.toString,
      ee = Y.hasOwnProperty,
      te = Y.toString,
      ne = RegExp("^" + Q.call(ee).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      re = F.Symbol,
      ie = F.Uint8Array,
      oe = G(Object.getPrototypeOf, Object),
      se = Y.propertyIsEnumerable,
      ae = J.splice,
      ue = Object.getOwnPropertySymbols,
      ce = G(Object.keys, Object),
      le = Ve(F, "DataView"),
      he = Ve(F, "Map"),
      fe = Ve(F, "Promise"),
      de = Ve(F, "Set"),
      pe = Ve(F, "WeakMap"),
      ge = Ve(Object, "create"),
      ye = Qe(le),
      ve = Qe(he),
      me = Qe(fe),
      we = Qe(de),
      be = Qe(pe),
      _e = re ? re.prototype : void 0,
      Se = _e ? _e.valueOf : void 0,
      Ae = _e ? _e.toString : void 0;
    function Ie(e) {
      var t = -1,
        n = e ? e.length : 0;
      for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    function Ce(e) {
      var t = -1,
        n = e ? e.length : 0;
      for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    function Ee(e) {
      var t = -1,
        n = e ? e.length : 0;
      for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    function Te(e) {
      var t = -1,
        n = e ? e.length : 0;
      for (this.__data__ = new Ee(); ++t < n;) this.add(e[t]);
    }
    function Ue(e) {
      this.__data__ = new Ce(e);
    }
    function ke(e, t) {
      var n = rt(e) || nt(e) ? function (e, t) {
          for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
          return r;
        }(e.length, String) : [],
        r = n.length,
        i = !!r;
      for (var o in e) !t && !ee.call(e, o) || i && ("length" == o || He(o, r)) || n.push(o);
      return n;
    }
    function Pe(e, t) {
      for (var n = e.length; n--;) if (tt(e[n][0], t)) return n;
      return -1;
    }
    function Oe(e, t) {
      for (var n = 0, r = (t = ze(t, e) ? [t] : je(t)).length; null != e && n < r;) e = e[Xe(t[n++])];
      return n && n == r ? e : void 0;
    }
    function Re(e, t) {
      return null != e && t in Object(e);
    }
    function De(e, t, n, o, s) {
      return e === t || (null == e || null == t || !at(e) && !ut(t) ? e != e && t != t : function (e, t, n, o, s, f) {
        var d = rt(e),
          v = rt(t),
          S = u,
          C = u;
        d || (S = (S = Ge(e)) == a ? y : S);
        v || (C = (C = Ge(t)) == a ? y : C);
        var E = S == y && !q(e),
          T = C == y && !q(t),
          U = S == C;
        if (U && !E) return f || (f = new Ue()), d || ht(e) ? Ne(e, t, n, o, s, f) : function (e, t, n, o, s, a, u) {
          switch (n) {
            case I:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
              e = e.buffer, t = t.buffer;
            case A:
              return !(e.byteLength != t.byteLength || !o(new ie(e), new ie(t)));
            case c:
            case l:
            case g:
              return tt(+e, +t);
            case h:
              return e.name == t.name && e.message == t.message;
            case m:
            case b:
              return e == t + "";
            case p:
              var f = W;
            case w:
              var d = a & i;
              if (f || (f = H), e.size != t.size && !d) return !1;
              var y = u.get(e);
              if (y) return y == t;
              a |= r, u.set(e, t);
              var v = Ne(f(e), f(t), o, s, a, u);
              return u.delete(e), v;
            case _:
              if (Se) return Se.call(e) == Se.call(t);
          }
          return !1;
        }(e, t, S, n, o, s, f);
        if (!(s & i)) {
          var k = E && ee.call(e, "__wrapped__"),
            P = T && ee.call(t, "__wrapped__");
          if (k || P) {
            var O = k ? e.value() : e,
              R = P ? t.value() : t;
            return f || (f = new Ue()), n(O, R, o, s, f);
          }
        }
        if (!U) return !1;
        return f || (f = new Ue()), function (e, t, n, r, o, s) {
          var a = o & i,
            u = ft(e),
            c = u.length,
            l = ft(t),
            h = l.length;
          if (c != h && !a) return !1;
          var f = c;
          for (; f--;) {
            var d = u[f];
            if (!(a ? d in t : ee.call(t, d))) return !1;
          }
          var p = s.get(e);
          if (p && s.get(t)) return p == t;
          var g = !0;
          s.set(e, t), s.set(t, e);
          var y = a;
          for (; ++f < c;) {
            var v = e[d = u[f]],
              m = t[d];
            if (r) var w = a ? r(m, v, d, t, e, s) : r(v, m, d, e, t, s);
            if (!(void 0 === w ? v === m || n(v, m, r, o, s) : w)) {
              g = !1;
              break;
            }
            y || (y = "constructor" == d);
          }
          if (g && !y) {
            var b = e.constructor,
              _ = t.constructor;
            b == _ || !("constructor" in e) || !("constructor" in t) || "function" == typeof b && b instanceof b && "function" == typeof _ && _ instanceof _ || (g = !1);
          }
          return s.delete(e), s.delete(t), g;
        }(e, t, n, o, s, f);
      }(e, t, De, n, o, s));
    }
    function xe(e) {
      return !(!at(e) || (t = e, X && X in t)) && (ot(e) || q(e) ? ne : P).test(Qe(e));
      var t;
    }
    function Fe(e) {
      return "function" == typeof e ? e : null == e ? pt : "object" == typeof e ? rt(e) ? function (e, t) {
        if (ze(e) && $e(t)) return Ye(Xe(e), t);
        return function (n) {
          var o = function (e, t, n) {
            var r = null == e ? void 0 : Oe(e, t);
            return void 0 === r ? n : r;
          }(n, e);
          return void 0 === o && o === t ? function (e, t) {
            return null != e && function (e, t, n) {
              t = ze(t, e) ? [t] : je(t);
              var r,
                i = -1,
                o = t.length;
              for (; ++i < o;) {
                var s = Xe(t[i]);
                if (!(r = null != e && n(e, s))) break;
                e = e[s];
              }
              if (r) return r;
              o = e ? e.length : 0;
              return !!o && st(o) && He(s, o) && (rt(e) || nt(e));
            }(e, t, Re);
          }(n, e) : De(t, o, void 0, r | i);
        };
      }(e[0], e[1]) : function (e) {
        var t = function (e) {
          var t = ft(e),
            n = t.length;
          for (; n--;) {
            var r = t[n],
              i = e[r];
            t[n] = [r, i, $e(i)];
          }
          return t;
        }(e);
        if (1 == t.length && t[0][2]) return Ye(t[0][0], t[0][1]);
        return function (n) {
          return n === e || function (e, t, n, o) {
            var s = n.length,
              a = s;
            if (null == e) return !a;
            for (e = Object(e); s--;) {
              var u = n[s];
              if (u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
            }
            for (; ++s < a;) {
              var c = (u = n[s])[0],
                l = e[c],
                h = u[1];
              if (u[2]) {
                if (void 0 === l && !(c in e)) return !1;
              } else {
                var f = new Ue();
                if (!De(h, l, o, r | i, f)) return !1;
              }
            }
            return !0;
          }(n, 0, t);
        };
      }(e) : ze(t = e) ? (n = Xe(t), function (e) {
        return null == e ? void 0 : e[n];
      }) : function (e) {
        return function (t) {
          return Oe(t, e);
        };
      }(t);
      var t, n;
    }
    function Me(e) {
      if (!at(e)) return function (e) {
        var t = [];
        if (null != e) for (var n in Object(e)) t.push(n);
        return t;
      }(e);
      var t = Je(e),
        n = [];
      for (var r in e) ("constructor" != r || !t && ee.call(e, r)) && n.push(r);
      return n;
    }
    function je(e) {
      return rt(e) ? e : Ze(e);
    }
    function Ne(e, t, n, o, s, a) {
      var u = s & i,
        c = e.length,
        l = t.length;
      if (c != l && !(u && l > c)) return !1;
      var h = a.get(e);
      if (h && a.get(t)) return h == t;
      var f = -1,
        d = !0,
        p = s & r ? new Te() : void 0;
      for (a.set(e, t), a.set(t, e); ++f < c;) {
        var g = e[f],
          y = t[f];
        if (o) var v = u ? o(y, g, f, t, e, a) : o(g, y, f, e, t, a);
        if (void 0 !== v) {
          if (v) continue;
          d = !1;
          break;
        }
        if (p) {
          if (!K(t, function (e, t) {
            if (!p.has(t) && (g === e || n(g, e, o, s, a))) return p.add(t);
          })) {
            d = !1;
            break;
          }
        } else if (g !== y && !n(g, y, o, s, a)) {
          d = !1;
          break;
        }
      }
      return a.delete(e), a.delete(t), d;
    }
    function Le(e) {
      return function (e, t, n) {
        var r = t(e);
        return rt(e) ? r : V(r, n(e));
      }(e, dt, We);
    }
    function Be(e, t) {
      var n,
        r,
        i = e.__data__;
      return ("string" == (r = typeof (n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? i["string" == typeof t ? "string" : "hash"] : i.map;
    }
    function Ve(e, t) {
      var n = function (e, t) {
        return null == e ? void 0 : e[t];
      }(e, t);
      return xe(n) ? n : void 0;
    }
    Ie.prototype.clear = function () {
      this.__data__ = ge ? ge(null) : {};
    }, Ie.prototype.delete = function (e) {
      return this.has(e) && delete this.__data__[e];
    }, Ie.prototype.get = function (e) {
      var t = this.__data__;
      if (ge) {
        var r = t[e];
        return r === n ? void 0 : r;
      }
      return ee.call(t, e) ? t[e] : void 0;
    }, Ie.prototype.has = function (e) {
      var t = this.__data__;
      return ge ? void 0 !== t[e] : ee.call(t, e);
    }, Ie.prototype.set = function (e, t) {
      return this.__data__[e] = ge && void 0 === t ? n : t, this;
    }, Ce.prototype.clear = function () {
      this.__data__ = [];
    }, Ce.prototype.delete = function (e) {
      var t = this.__data__,
        n = Pe(t, e);
      return !(n < 0) && (n == t.length - 1 ? t.pop() : ae.call(t, n, 1), !0);
    }, Ce.prototype.get = function (e) {
      var t = this.__data__,
        n = Pe(t, e);
      return n < 0 ? void 0 : t[n][1];
    }, Ce.prototype.has = function (e) {
      return Pe(this.__data__, e) > -1;
    }, Ce.prototype.set = function (e, t) {
      var n = this.__data__,
        r = Pe(n, e);
      return r < 0 ? n.push([e, t]) : n[r][1] = t, this;
    }, Ee.prototype.clear = function () {
      this.__data__ = {
        hash: new Ie(),
        map: new (he || Ce)(),
        string: new Ie()
      };
    }, Ee.prototype.delete = function (e) {
      return Be(this, e).delete(e);
    }, Ee.prototype.get = function (e) {
      return Be(this, e).get(e);
    }, Ee.prototype.has = function (e) {
      return Be(this, e).has(e);
    }, Ee.prototype.set = function (e, t) {
      return Be(this, e).set(e, t), this;
    }, Te.prototype.add = Te.prototype.push = function (e) {
      return this.__data__.set(e, n), this;
    }, Te.prototype.has = function (e) {
      return this.__data__.has(e);
    }, Ue.prototype.clear = function () {
      this.__data__ = new Ce();
    }, Ue.prototype.delete = function (e) {
      return this.__data__.delete(e);
    }, Ue.prototype.get = function (e) {
      return this.__data__.get(e);
    }, Ue.prototype.has = function (e) {
      return this.__data__.has(e);
    }, Ue.prototype.set = function (e, t) {
      var n = this.__data__;
      if (n instanceof Ce) {
        var r = n.__data__;
        if (!he || r.length < 199) return r.push([e, t]), this;
        n = this.__data__ = new Ee(r);
      }
      return n.set(e, t), this;
    };
    var Ke = ue ? G(ue, Object) : gt,
      We = ue ? function (e) {
        for (var t = []; e;) V(t, Ke(e)), e = oe(e);
        return t;
      } : gt,
      Ge = function (e) {
        return te.call(e);
      };
    function He(e, t) {
      return !!(t = null == t ? s : t) && ("number" == typeof e || O.test(e)) && e > -1 && e % 1 == 0 && e < t;
    }
    function ze(e, t) {
      if (rt(e)) return !1;
      var n = typeof e;
      return !("number" != n && "symbol" != n && "boolean" != n && null != e && !ct(e)) || E.test(e) || !C.test(e) || null != t && e in Object(t);
    }
    function Je(e) {
      var t = e && e.constructor;
      return e === ("function" == typeof t && t.prototype || Y);
    }
    function $e(e) {
      return e == e && !at(e);
    }
    function Ye(e, t) {
      return function (n) {
        return null != n && n[e] === t && (void 0 !== t || e in Object(n));
      };
    }
    (le && Ge(new le(new ArrayBuffer(1))) != I || he && Ge(new he()) != p || fe && Ge(fe.resolve()) != v || de && Ge(new de()) != w || pe && Ge(new pe()) != S) && (Ge = function (e) {
      var t = te.call(e),
        n = t == y ? e.constructor : void 0,
        r = n ? Qe(n) : void 0;
      if (r) switch (r) {
        case ye:
          return I;
        case ve:
          return p;
        case me:
          return v;
        case we:
          return w;
        case be:
          return S;
      }
      return t;
    });
    var Ze = et(function (e) {
      var t;
      e = null == (t = e) ? "" : function (e) {
        if ("string" == typeof e) return e;
        if (ct(e)) return Ae ? Ae.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -o ? "-0" : t;
      }(t);
      var n = [];
      return T.test(e) && n.push(""), e.replace(U, function (e, t, r, i) {
        n.push(r ? i.replace(k, "$1") : t || e);
      }), n;
    });
    function Xe(e) {
      if ("string" == typeof e || ct(e)) return e;
      var t = e + "";
      return "0" == t && 1 / e == -o ? "-0" : t;
    }
    function Qe(e) {
      if (null != e) {
        try {
          return Q.call(e);
        } catch (e) {}
        try {
          return e + "";
        } catch (e) {}
      }
      return "";
    }
    function et(e, t) {
      if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
      var n = function () {
        var r = arguments,
          i = t ? t.apply(this, r) : r[0],
          o = n.cache;
        if (o.has(i)) return o.get(i);
        var s = e.apply(this, r);
        return n.cache = o.set(i, s), s;
      };
      return n.cache = new (et.Cache || Ee)(), n;
    }
    function tt(e, t) {
      return e === t || e != e && t != t;
    }
    function nt(e) {
      return function (e) {
        return ut(e) && it(e);
      }(e) && ee.call(e, "callee") && (!se.call(e, "callee") || te.call(e) == a);
    }
    et.Cache = Ee;
    var rt = Array.isArray;
    function it(e) {
      return null != e && st(e.length) && !ot(e);
    }
    function ot(e) {
      var t = at(e) ? te.call(e) : "";
      return t == f || t == d;
    }
    function st(e) {
      return "number" == typeof e && e > -1 && e % 1 == 0 && e <= s;
    }
    function at(e) {
      var t = typeof e;
      return !!e && ("object" == t || "function" == t);
    }
    function ut(e) {
      return !!e && "object" == typeof e;
    }
    function ct(e) {
      return "symbol" == typeof e || ut(e) && te.call(e) == _;
    }
    var lt,
      ht = B ? (lt = B, function (e) {
        return lt(e);
      }) : function (e) {
        return ut(e) && st(e.length) && !!R[te.call(e)];
      };
    function ft(e) {
      return it(e) ? ke(e) : function (e) {
        if (!Je(e)) return ce(e);
        var t = [];
        for (var n in Object(e)) ee.call(e, n) && "constructor" != n && t.push(n);
        return t;
      }(e);
    }
    function dt(e) {
      return it(e) ? ke(e, !0) : Me(e);
    }
    function pt(e) {
      return e;
    }
    function gt() {
      return [];
    }
    e.exports = function (e, t) {
      return null == e ? {} : function (e, t, n) {
        for (var r = -1, i = t.length, o = {}; ++r < i;) {
          var s = t[r],
            a = e[s];
          n(a, s) && (o[s] = a);
        }
        return o;
      }(e, Le(e), Fe(t));
    };
  }(As, As.exports);
  var Is,
    Cs,
    Es,
    Ts,
    Us,
    ks,
    Ps,
    Os,
    Rs,
    Ds,
    xs,
    Fs,
    Ms,
    js,
    Ns,
    Ls,
    Bs,
    Vs = We(As.exports);
  const Ks = {
      minimumLength: 12,
      upperCaseLetterRequired: !0,
      lowerCaseLetterRequired: !0,
      numberRequired: !0,
      specialCharacterRequired: !0
    },
    qs = ["OS-ID-BIZ-40001", "OS-ID-BIZ-40051", "OS-ID-BIZ-50047", "OS-ID-BIZ-40415", "OS-ID-BIZ-40052"],
    Ws = ["OS-ID-BIZ-40401"];
  class Gs extends ms {
    constructor(_ref17) {
      let {
        appKey: e,
        identityProvider: t,
        region: r,
        poolId: i,
        clientId: o,
        appUrl: s,
        baseUrl: a,
        scope: u,
        appSyncEndpoint: c = us,
        passwordComplexityPolicy: l = Ks,
        authData: h = new oo(),
        httpClient: f = new _communicationJs.HttpClient({
          baseUrl: a
        }),
        decodeJwt: d = go,
        configureAmplify: p = e => ue.configure(e),
        logger: g,
        persistentStorage: y = localStorage,
        temporaryStorage: v = sessionStorage,
        endpointRegistration: m = "/moduleservices/users/registration",
        endpointResetPass: w = "/moduleservices/users/passwordrecovery",
        synchronizer: b,
        isOnline: _,
        userInfo: S
      } = _ref17;
      var A;
      super({
        authData: h,
        httpClient: f,
        appUrl: s,
        appSyncEndpoint: c,
        scope: u,
        decodeJwt: d,
        logger: g,
        synchronizer: b,
        isOnline: _,
        userInfo: S
      }), Is.add(this), Cs.set(this, void 0), Es.set(this, void 0), Ts.set(this, void 0), Us.set(this, void 0), ks.set(this, void 0), Ps.set(this, void 0), Os.set(this, void 0), k(this, Us, y, "f"), k(this, ks, v, "f"), k(this, Ts, t, "f"), k(this, Es, o, "f"), k(this, Cs, l, "f"), k(this, Ps, m, "f"), k(this, Os, w, "f");
      try {
        p({
          Auth: {
            region: r,
            userPoolId: i,
            userPoolWebClientId: o
          }
        });
      } catch (e) {
        null === (A = this.logger) || void 0 === A || A.error({
          category: vs,
          message: "Error while configuring Amplify",
          error: e,
          code: "OS-CLRT-40110"
        });
      }
    }
    login(e) {
      return h(this, arguments, void 0, function (_ref18) {
        var _this9 = this;
        let {
          username: e,
          password: t,
          newPassword: n,
          redirectUri: i = `${window.location.protocol}//${window.location.host}/identity`,
          persistLogin: o = !0,
          configureAuth: s = e => $i.configure(e),
          authSignIn: a = (e, t) => $i.signIn(e, t),
          completeNewPassword: u = (e, t) => $i.completeNewPassword(e, t),
          changePassword: c = (e, t, n) => $i.changePassword(e, t, n)
        } = _ref18;
        return function* () {
          var l, h, f, d, p;
          try {
            if ("" === t || "" === e) throw uo.create({
              name: so.InvalidCredentials,
              message: ("" === e ? "Username" : "Password") + " cannot be empty.",
              code: "OS-CLRT-40104"
            });
            const g = U(_this9, Is, "m", Ms).call(_this9, i);
            s({
              storage: U(_this9, o ? Us : ks, "f")
            });
            const y = yield _this9.fetchEndpoints(),
              v = yield U(_this9, Is, "m", xs).call(_this9, y.authorization_endpoint, g),
              m = new URL(v).searchParams;
            let w = m.get("code");
            const b = yield a(e, t);
            if ("NEW_PASSWORD_REQUIRED" === (null == b ? void 0 : b.challengeName) && n ? yield u(b, n) : n && (yield c(b, t, n)), !w) {
              const e = null == b ? void 0 : b.getSignInUserSession();
              if (!e) {
                const e = new Error("Couldn't find current user session.");
                throw null === (l = _this9.logger) || void 0 === l || l.error({
                  category: vs,
                  code: "OS-CLRT-40101",
                  error: e,
                  visibility: zo.Internal
                }), e;
              }
              const t = yield _this9.httpClient.post({
                url: U(_this9, Is, "m", Ds).call(_this9),
                payload: {
                  clientId: U(_this9, Es, "f"),
                  idToken: e.getIdToken().getJwtToken(),
                  accessToken: e.getAccessToken().getJwtToken(),
                  refreshToken: e.getRefreshToken().getToken()
                },
                contentType: _communicationJs.ContentType.Json
              });
              if (void 0 === t) {
                const e = new Error("Couldn't get any response from server while exchanging tokens.");
                throw null === (h = _this9.logger) || void 0 === h || h.error({
                  category: vs,
                  code: "OS-CLRT-40100",
                  error: e
                }), e;
              }
              const n = t.authCode,
                i = null !== (f = m.get("redirect_uri")) && void 0 !== f ? f : "",
                o = null !== (d = m.get("state")) && void 0 !== d ? d : "",
                s = yield U(_this9, Is, "m", Fs).call(_this9, i, n, o);
              w = null !== (p = new URL(s).searchParams.get("code")) && void 0 !== p ? p : "";
            }
            const _ = yield U(_this9, Is, "m", Ls).call(_this9, y.token_endpoint, w, g);
            return yield _this9.storeTokenInfo(_);
          } catch (e) {
            throw _this9.authData.clearAuthData(), _this9.userInfo.clear(), U(_this9, Is, "m", Rs).call(_this9, e);
          }
        }();
      });
    }
    sendResetPasswordEmail(e) {
      return h(this, arguments, void 0, function (_ref19) {
        let {
          username: e,
          authForgotPassword: t = e => $i.forgotPassword(e)
        } = _ref19;
        return function* () {
          return t(e);
        }();
      });
    }
    confirmRegistration(e) {
      return h(this, arguments, void 0, function (_ref20) {
        var _this10 = this;
        let {
          username: e,
          password: t,
          code: n
        } = _ref20;
        return function* () {
          var r;
          if (!_this10.validatePasswordComplexityPolicy(t).isValid) throw uo.create({
            name: so.PasswordComplexityPolicyFailed,
            message: "Password complexity policy failed.",
            code: "OS-CLRT-40106"
          });
          const i = yield U(_this10, Is, "m", Ns).call(_this10, {
            email: e,
            verificationCode: n
          }, "REGISTRATION");
          try {
            yield _this10.login({
              username: e,
              password: i,
              newPassword: t
            });
          } catch (e) {
            const t = e;
            throw null === (r = _this10.logger) || void 0 === r || r.error({
              category: vs,
              message: "Error confirming user registration",
              error: t,
              code: "OS-CLRT-40100",
              visibility: zo.External
            }), t.name === so.InvalidCredentials || t.name === so.TooManyFailedAttempts ? uo.create({
              name: so.InvalidToken,
              message: "Invalid temporary password.",
              code: "OS-CLRT-40107"
            }) : t;
          }
        }();
      });
    }
    changePassword(e) {
      return h(this, arguments, void 0, function (_ref21) {
        var _this11 = this;
        let {
          username: e,
          oldPassword: t,
          newPassword: n,
          authCurrentAuthenticatedUser: r = () => $i.currentAuthenticatedUser(),
          authChangePassword: i = (e, t, n) => $i.changePassword(e, t, n)
        } = _ref21;
        return function* () {
          var o, s, a;
          let u = null;
          try {
            u = yield r();
          } catch (e) {
            null === (o = _this11.logger) || void 0 === o || o.error({
              category: vs,
              message: "Error in current authenticated user",
              error: e,
              code: "OS-CLRT-40101"
            });
          }
          if (!u || e !== (null === (s = null == u ? void 0 : u.attributes) || void 0 === s ? void 0 : s.preferred_username)) throw uo.create({
            name: so.InvalidCredentials,
            message: "Invalid credentials",
            code: "OS-CLRT-40104"
          });
          const c = _this11.validatePasswordComplexityPolicy(n);
          if (!n || !c.isValid) throw uo.create({
            name: so.PasswordComplexityPolicyFailed,
            message: "Password complexity policy failed.",
            code: "OS-CLRT-40106"
          });
          try {
            yield i(u, t, n);
          } catch (e) {
            const t = U(_this11, Is, "m", Rs).call(_this11, e);
            throw null === (a = _this11.logger) || void 0 === a || a.error({
              category: vs,
              message: "Error changing password",
              error: t,
              code: t.errorCode,
              visibility: zo.External
            }), t;
          }
        }();
      });
    }
    finishResetPassword(e) {
      return h(this, arguments, void 0, function (_ref22) {
        var _this12 = this;
        let {
          username: e,
          resetToken: t,
          newPassword: n,
          changePassword: r = (e, t, n) => this.login({
            username: e,
            password: t,
            newPassword: n
          })
        } = _ref22;
        return function* () {
          var i;
          const o = _this12.validatePasswordComplexityPolicy(n);
          if (!n || !o.isValid) throw uo.create({
            name: so.PasswordComplexityPolicyFailed,
            message: "Password complexity policy failed.",
            code: "OS-CLRT-40106"
          });
          const s = yield U(_this12, Is, "m", Ns).call(_this12, {
            email: e,
            verificationCode: t
          }, "RESET_PASSWORD");
          try {
            yield r(e, s, n);
          } catch (e) {
            throw null === (i = _this12.logger) || void 0 === i || i.error({
              category: vs,
              message: "Error resetting password",
              error: e,
              code: "OS-CLRT-40107",
              visibility: zo.External
            }), uo.create({
              name: so.InvalidToken,
              message: "Invalid password reset token.",
              code: "OS-CLRT-40107"
            });
          }
        }();
      });
    }
    resetPassword(e) {
      return h(this, arguments, void 0, function (_ref23) {
        var _this13 = this;
        let {
          username: e,
          resetToken: t,
          newPassword: n,
          authForgotPassword: r = (e, t, n) => $i.forgotPasswordSubmit(e, t, n)
        } = _ref23;
        return function* () {
          var i;
          const o = _this13.validatePasswordComplexityPolicy(n);
          if (!n || !o.isValid) throw uo.create({
            name: so.PasswordComplexityPolicyFailed,
            message: "Password complexity policy failed.",
            code: "OS-CLRT-40106"
          });
          try {
            yield r(e, t, n);
          } catch (e) {
            throw null === (i = _this13.logger) || void 0 === i || i.error({
              category: vs,
              message: "Error resetting password",
              error: e,
              code: "OS-CLRT-40107",
              visibility: zo.External
            }), uo.create({
              name: so.InvalidToken,
              message: "Invalid password reset token.",
              code: "OS-CLRT-40107"
            });
          }
        }();
      });
    }
    getPasswordComplexityPolicy() {
      return U(this, Cs, "f");
    }
    validatePasswordComplexityPolicy() {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      const t = e.length < U(this, Cs, "f").minimumLength,
        n = U(this, Cs, "f").upperCaseLetterRequired && !/[A-Z]/.test(e),
        r = U(this, Cs, "f").lowerCaseLetterRequired && !/[a-z]/.test(e),
        i = U(this, Cs, "f").numberRequired && !/\d/.test(e),
        o = U(this, Cs, "f").specialCharacterRequired && !/[\^$*.[\]{}()?"!@#%&/\\,><':;|_~`=+\- ]/.test(e);
      return {
        isValid: !(t || n || r || i || i || o),
        missingMinimumLength: t,
        missingUpperCaseLetter: n,
        missingLowerCaseLetter: r,
        missingNumber: i,
        missingSpecialCharacter: o
      };
    }
    updateUser(e) {
      return h(this, arguments, void 0, function (_ref24) {
        var _this14 = this;
        let {
          username: e,
          name: t,
          pictureUrl: n,
          authCurrentAuthenticatedUser: r = () => $i.currentAuthenticatedUser(),
          authUpdateUserAttributes: i = (e, t) => $i.updateUserAttributes(e, t)
        } = _ref24;
        return function* () {
          var o, s, a;
          let u = null;
          try {
            u = yield r();
          } catch (e) {
            null === (o = _this14.logger) || void 0 === o || o.error({
              category: vs,
              message: "Error in current authenticated user",
              error: e,
              code: "OS-CLRT-40101"
            });
          }
          if (!u || e !== (null === (s = null == u ? void 0 : u.attributes) || void 0 === s ? void 0 : s.preferred_username)) throw uo.create({
            name: so.InvalidCredentials,
            message: "Invalid credentials",
            code: "OS-CLRT-40104"
          });
          try {
            const e = Vs({
              name: null != t ? t : void 0,
              given_name: null != t ? t : void 0,
              family_name: t ? " " : void 0,
              picture: null != n ? n : void 0
            }, e => void 0 !== e);
            Ss(e) || (yield i(u, e), _this14.synchronizeUserInfo());
          } catch (e) {
            throw null === (a = _this14.logger) || void 0 === a || a.error({
              category: vs,
              message: "Error updating user",
              error: e,
              code: "OS-CLRT-40100",
              visibility: zo.External
            }), uo.create({
              name: so.UnknownFailure,
              message: "Unknown failure!",
              code: "OS-CLRT-40100"
            });
          }
        }();
      });
    }
    isExternalUser() {
      return !1;
    }
  }
  _exports.BuiltinAuth = Gs;
  var Hs;
  Cs = new WeakMap(), Es = new WeakMap(), Ts = new WeakMap(), Us = new WeakMap(), ks = new WeakMap(), Ps = new WeakMap(), Os = new WeakMap(), Is = new WeakSet(), Rs = function (e) {
    var t, n, r;
    const i = e;
    let o = null !== (t = i.name) && void 0 !== t ? t : so.UnknownFailure,
      s = !i.errorCode || i.errorCode.startsWith("OS-CLRT-6") ? "OS-CLRT-40100" : i.errorCode;
    return "NotAuthorizedException" === i.name ? (null === (n = i.message) || void 0 === n ? void 0 : n.includes("Incorrect username or password")) ? (o = so.InvalidCredentials, s = "OS-CLRT-40104") : (null === (r = i.message) || void 0 === r ? void 0 : r.includes("Password attempts exceeded")) && (o = so.TooManyFailedAttempts, s = "OS-CLRT-40105") : "LimitExceededException" === i.name && (o = so.TooManyFailedAttempts, s = "OS-CLRT-40105"), uo.create({
      name: o,
      message: i.message,
      code: s
    });
  }, Ds = function () {
    return "/identityapi/v1alpha1/oidc/store-token";
  }, xs = function (e, t) {
    return h(this, void 0, void 0, function* () {
      const n = {
        client_id: Yi,
        scope: this.scope,
        redirect_uri: null != t ? t : "",
        response_type: "code",
        kc_idp_hint: U(this, Ts, "f")
      };
      return this.httpClient.getResponseUrl({
        url: e,
        params: n
      });
    });
  }, Fs = function (e, t, n) {
    return h(this, void 0, void 0, function* () {
      const r = {
        code: t,
        state: n
      };
      return this.httpClient.getResponseUrl({
        url: e,
        params: r
      });
    });
  }, Ms = function (e) {
    return e.replace("outsystems://", "https://");
  }, js = function (e) {
    return e && qs.includes(e) ? so.InvalidToken : e && Ws.includes(e) ? so.InvalidCredentials : so.UnknownFailure;
  }, Ns = function (e, t) {
    return h(this, void 0, void 0, function* () {
      var n, i, o, s, a, u, c;
      try {
        const i = "REGISTRATION" === t ? this.buildUrl(U(this, Ps, "f")) : this.buildUrl(U(this, Os, "f")),
          o = yield this.httpClient.post({
            url: i,
            payload: e,
            contentType: _communicationJs.ContentType.Json
          });
        if (void 0 === o) {
          const e = new Error("Couldn't get any response from server while getting temporary password.");
          throw null === (n = this.logger) || void 0 === n || n.error({
            category: vs,
            code: "OS-CLRT-40100",
            error: e
          }), e;
        }
        return o.registrationToken;
      } catch (e) {
        const n = e,
          r = null === (i = n.response) || void 0 === i ? void 0 : i.detail,
          l = "Error getting temporary password";
        throw null === (o = this.logger) || void 0 === o || o.error({
          category: vs,
          error: n,
          message: `${l}: ${null != r ? r : ""}`,
          visibility: zo.Client
        }), null === (s = this.logger) || void 0 === s || s.error({
          category: vs,
          error: new Error(`[${t}]${l}: code = ${null !== (u = null === (a = n.response) || void 0 === a ? void 0 : a.errorCode) && void 0 !== u ? u : "UNKNOWN"}`),
          visibility: zo.Internal
        }), uo.create({
          name: U(this, Is, "m", js).call(this, null === (c = n.response) || void 0 === c ? void 0 : c.errorCode),
          message: l
        });
      }
    });
  }, Ls = function (e, t, n) {
    return h(this, void 0, void 0, function* () {
      var r;
      try {
        const i = yield this.httpClient.post({
          url: e,
          payload: {
            grant_type: "authorization_code",
            code: t,
            client_id: Yi,
            redirect_uri: n
          }
        });
        if (void 0 === i) {
          const e = new Error("Couldn't get any response from server while getting tokens.");
          throw null === (r = this.logger) || void 0 === r || r.error({
            category: vs,
            code: "OS-CLRT-40100",
            error: e
          }), e;
        }
        return i;
      } catch (e) {
        throw U(this, Is, "m", Bs).call(this, e);
      }
    });
  }, Bs = function (e) {
    var t;
    let n = e instanceof Error ? `[Token endpoint] ${e.message}` : "Token endpoint call failed";
    const r = null === (t = null == e ? void 0 : e.response) || void 0 === t ? void 0 : t.error_description;
    return r && (n += `: ${r}`), uo.create({
      name: so.IdentityTokenEndpointFailed,
      code: "OS-ID-BIZ-40021",
      message: n
    });
  }, function (e) {
    e.External = "external", e.Builtin = "builtin";
  }(Hs || (Hs = {}));
  var zs,
    Js,
    $s,
    Ys,
    Zs,
    Xs,
    Qs,
    ea,
    ta,
    na,
    ra,
    ia,
    oa,
    sa,
    aa,
    ua,
    ca,
    la,
    ha,
    fa,
    da,
    pa,
    ga,
    ya,
    va,
    ma = _exports.AuthType = Hs;
  class wa {
    constructor(_ref25) {
      let {
        info: e,
        data: t = new oo()
      } = _ref25;
      zs.add(this), Js.set(this, void 0), $s.set(this, void 0), Ys.set(this, ""), k(this, Js, e, "f"), k(this, $s, t, "f");
    }
    setAuthInfo(e, t) {
      k(this, Js, e, "f"), k(this, $s, new oo(), "f");
      U(this, zs, "m", na).call(this, e) !== U(this, Ys, "f") && (k(this, Ys, "", "f"), U(this, $s, "f").clearAuthData()), t && k(this, zs, t, "a", Xs);
    }
    getBuiltinAuthInfo() {
      const e = U(this, zs, "m", Qs).call(this);
      if (U(this, zs, "m", ea).call(this, e)) return e;
    }
    getExternalAuthInfo(e) {
      const t = U(this, zs, "m", Qs).call(this, e, !0);
      if (U(this, zs, "m", ta).call(this, t)) return t;
    }
    saveConfig(e, t) {
      const n = U(this, zs, "m", ra).call(this, t);
      n && U(this, $s, "f").storeCurrentAuthConfig(n), k(this, zs, e, "a", Xs), k(this, Ys, U(this, zs, "m", na).call(this, t), "f");
    }
    getAuthType() {
      return U(this, zs, "a", Zs);
    }
    hasChanges(e, t) {
      if (e && e !== U(this, zs, "a", Zs)) return !0;
      const n = U(this, zs, "a", Zs) === ma.Builtin ? U(this, zs, "m", Qs).call(this) : U(this, zs, "m", Qs).call(this, t, !0);
      return U(this, Ys, "f") !== U(this, zs, "m", na).call(this, n);
    }
  }
  Js = new WeakMap(), $s = new WeakMap(), Ys = new WeakMap(), zs = new WeakSet(), Zs = function () {
    var e;
    return null !== (e = U(this, $s, "f").readCurrentAuthType()) && void 0 !== e ? e : void 0;
  }, Xs = function (e) {
    e && U(this, $s, "f").storeCurrentAuthType(e);
  }, Qs = function (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var n;
    let r = e;
    return t && void 0 === r && (r = null !== (n = U(this, $s, "f").readCurrentAuthConfig()) && void 0 !== n ? n : void 0), Object.assign(Object.assign({}, U(this, Js, "f")), null != r ? r : {});
  }, ea = function (e) {
    return void 0 !== e.region && void 0 !== e.poolId && void 0 !== e.clientId && void 0 !== e.identityProvider;
  }, ta = function (e) {
    return void 0 !== e.clientId && void 0 !== e.identityProvider;
  }, na = function (e) {
    const {
        identityProvider: t,
        clientId: n,
        passwordComplexityPolicy: r,
        poolId: i,
        region: o
      } = e,
      {
        lowerCaseLetterRequired: s,
        minimumLength: a,
        numberRequired: u,
        specialCharacterRequired: c,
        upperCaseLetterRequired: l
      } = null != r ? r : {};
    return `${t}|${n}|${`${s}${a}|${u}|${c}|${l}`}|${i}|${o}`;
  }, ra = function (e) {
    const {
      region: t,
      poolId: n,
      clientId: r,
      identityProvider: i
    } = e;
    if (r && i) return {
      region: t,
      poolId: n,
      clientId: r,
      identityProvider: i
    };
  };
  class ba {
    constructor(_ref26) {
      let {
        appKey: e,
        identityProvider: t,
        appUrl: n,
        region: r,
        poolId: i,
        clientId: o,
        scope: s = "",
        passwordComplexityPolicy: a,
        authData: u = new oo(),
        authInstance: c,
        logger: l,
        httpClient: h,
        configHandler: f = new wa({
          info: {
            identityProvider: t,
            clientId: o,
            passwordComplexityPolicy: a,
            poolId: i,
            region: r,
            scope: s
          },
          data: u
        }),
        isOnline: d
      } = _ref26;
      ia.add(this), oa.set(this, void 0), sa.set(this, void 0), aa.set(this, void 0), ua.set(this, void 0), ca.set(this, void 0), la.set(this, void 0), ha.set(this, void 0), k(this, oa, e, "f"), k(this, sa, n, "f"), k(this, aa, c, "f"), k(this, ua, l, "f"), k(this, ca, h, "f"), k(this, la, f, "f"), k(this, ha, d, "f");
    }
    getInstance(e, t) {
      var n;
      const r = null != e ? e : U(this, la, "f").getAuthType(),
        i = U(this, la, "f").hasChanges(e, t),
        o = !!(null === (n = U(this, aa, "f")) || void 0 === n ? void 0 : n.isAuthenticated());
      if (!U(this, aa, "f") && r) U(this, ia, "m", fa).call(this, r, t);else if (!o && r && i) U(this, ia, "m", fa).call(this, r, t);else if (o && i) throw new Error("Error getting new instance of auth because a user is already authenticated using another mechanism");
      return U(this, aa, "f");
    }
    updateConfig(e, t) {
      U(this, la, "f").setAuthInfo(e, t);
    }
  }
  _exports.AuthFactory = ba;
  oa = new WeakMap(), sa = new WeakMap(), aa = new WeakMap(), ua = new WeakMap(), ca = new WeakMap(), la = new WeakMap(), ha = new WeakMap(), ia = new WeakSet(), fa = function (e, t) {
    switch (e) {
      case ma.External:
        return U(this, ia, "m", pa).call(this, t);
      case ma.Builtin:
        return U(this, ia, "m", ga).call(this);
      default:
        throw new Error(`Invalid new auth type: ${e}`);
    }
  }, da = function (e, t, n) {
    k(this, aa, e, "f"), U(this, la, "f").saveConfig(t, n);
  }, pa = function (e) {
    const t = U(this, la, "f").getExternalAuthInfo(e);
    U(this, ia, "m", ya).call(this, t);
    const n = new bs({
      appKey: U(this, oa, "f"),
      appUrl: U(this, sa, "f"),
      scope: t.scope,
      region: t.region,
      poolId: t.poolId,
      clientId: t.clientId,
      identityProvider: t.identityProvider,
      logger: U(this, ua, "f"),
      httpClient: U(this, ca, "f"),
      isOnline: U(this, ha, "f")
    });
    U(this, ia, "m", da).call(this, n, ma.External, t);
  }, ga = function () {
    const e = U(this, la, "f").getBuiltinAuthInfo();
    U(this, ia, "m", ya).call(this, e);
    const t = new Gs({
      appKey: U(this, oa, "f"),
      appUrl: U(this, sa, "f"),
      scope: e.scope,
      region: e.region,
      poolId: e.poolId,
      clientId: e.clientId,
      identityProvider: e.identityProvider,
      passwordComplexityPolicy: e.passwordComplexityPolicy,
      logger: U(this, ua, "f"),
      httpClient: U(this, ca, "f"),
      isOnline: U(this, ha, "f")
    });
    U(this, ia, "m", da).call(this, t, ma.Builtin, e);
  }, ya = function (e) {
    var t;
    if (!e) {
      const e = uo.create({
        name: "Error loading auth configuration",
        message: "Identity provider configurations missing.",
        code: "OS-CLRT-40109"
      });
      throw null === (t = U(this, ua, "f")) || void 0 === t || t.error({
        category: vs,
        message: e.message,
        error: e,
        code: e.errorCode,
        visibility: zo.External
      }), e;
    }
  }, function (e) {
    e.Auth_Default = "OS-CLRT-40100", e.Auth_No_Login = "OS-CLRT-40101", e.Auth_Invalid_Mechanism = "OS-CLRT-40102", e.Auth_Invalid_RefreshToken = "OS-CLRT-40103", e.Auth_Invalid_Credentials = "OS-CLRT-40104", e.Auth_Login_Attempts = "OS-CLRT-40105", e.Auth_Password_Policy = "OS-CLRT-40106", e.Auth_Invalid_Inputs = "OS-CLRT-40107", e.Auth_Logout_Failed = "OS-CLRT-40108", e.Auth_No_Configuration = "OS-CLRT-40109", e.Auth_Configuration_Failed = "OS-CLRT-40110", e.Auth_UserIdMissing = "OS-CLRT-40111", e.Auth_RefreshToken_Unavailable = "OS-CLRT-40112", e.Auth_FailedToGetUserInfo = "OS-CLRT-40113", e.AuthZ_Default = "OS-CLRT-40300", e.AuthZ_Screen_No_Roles = "OS-CLRT-40301", e.AuthZ_No_Permissions = "OS-CLRT-40302", e.AuthZ_Not_Registered = "OS-CLRT-40303", e.IdentityTokenFailure = "OS-ID-BIZ-40021";
  }(va || (va = {}));
  var _a = _exports.AuthErrorCode = va;
  const Sa = _exports.Version = "1.4.1";
});
