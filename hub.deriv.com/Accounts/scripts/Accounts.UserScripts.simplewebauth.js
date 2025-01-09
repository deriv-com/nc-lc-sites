/* [@simplewebauthn/browser@8.3.7] */ ! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).SimpleWebAuthnBrowser = {})
}(this, (function(e) {
    "use strict";
    var t = function(e, r) {
        return t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }, t(e, r)
    };
    var r = function() {
        return r = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }, r.apply(this, arguments)
    };

    function n(e, t, r, n) {
        return new(r || (r = Promise))((function(o, i) {
            function a(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                    e(t)
                }))).then(a, s)
            }
            c((n = n.apply(e, t || [])).next())
        }))
    }

    function o(e, t) {
        var r, n, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function s(s) {
            return function(c) {
                return function(s) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i && (i = 0, s[0] && (a = 0)), a;) try {
                        if (r = 1, n && (o = 2 & s[0] ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done) return o;
                        switch (n = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                            case 0:
                            case 1:
                                o = s;
                                break;
                            case 4:
                                return a.label++, {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = s[1], s = [0];
                                continue;
                            case 7:
                                s = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                    a.label = s[1];
                                    break
                                }
                                if (6 === s[0] && a.label < o[1]) {
                                    a.label = o[1], o = s;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(s);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        s = t.call(e, a)
                    } catch (e) {
                        s = [6, e], n = 0
                    } finally {
                        r = o = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, c])
            }
        }
    }

    function i(e) {
        var t, r, n = new Uint8Array(e),
            o = "";
        try {
            for (var i = function(e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                        r = t && e[t],
                        n = 0;
                    if (r) return r.call(e);
                    if (e && "number" == typeof e.length) return {
                        next: function() {
                            return e && n >= e.length && (e = void 0), {
                                value: e && e[n++],
                                done: !e
                            }
                        }
                    };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }(n), a = i.next(); !a.done; a = i.next()) {
                var s = a.value;
                o += String.fromCharCode(s)
            }
        } catch (e) {
            t = {
                error: e
            }
        } finally {
            try {
                a && !a.done && (r = i.return) && r.call(i)
            } finally {
                if (t) throw t.error
            }
        }
        return btoa(o).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
    }

    function a(e) {
        for (var t = e.replace(/-/g, "+").replace(/_/g, "/"), r = (4 - t.length % 4) % 4, n = t.padEnd(t.length + r, "="), o = atob(n), i = new ArrayBuffer(o.length), a = new Uint8Array(i), s = 0; s < o.length; s++) a[s] = o.charCodeAt(s);
        return i
    }

    function s() {
        return void 0 !== (null === window || void 0 === window ? void 0 : window.PublicKeyCredential) && "function" == typeof window.PublicKeyCredential
    }

    function c(e) {
        var t = e.id;
        return r(r({}, e), {
            id: a(t),
            transports: e.transports
        })
    }

    function u(e) {
        return "localhost" === e || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)
    }
    "function" == typeof SuppressedError && SuppressedError;
    var l = function(e) {
        function r(t) {
            var r = t.message,
                n = t.code,
                o = t.cause,
                i = t.name,
                a = e.call(this, r, {
                    cause: o
                }) || this;
            return a.name = null != i ? i : o.name, a.code = n, a
        }
        return function(e, r) {
            if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

            function n() {
                this.constructor = e
            }
            t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
        }(r, e), r
    }(Error);
    var d = new(function() {
            function e() {}
            return e.prototype.createNewAbortSignal = function() {
                if (this.controller) {
                    var e = new Error("Cancelling existing WebAuthn API call for new one");
                    e.name = "AbortError", this.controller.abort(e)
                }
                var t = new AbortController;
                return this.controller = t, t.signal
            }, e.prototype.cancelCeremony = function() {
                if (this.controller) {
                    var e = new Error("Manually cancelling existing WebAuthn API call");
                    e.name = "AbortError", this.controller.abort(e), this.controller = void 0
                }
            }, e
        }()),
        f = ["cross-platform", "platform"];

    function p(e) {
        if (e && !(f.indexOf(e) < 0)) return e
    }

    function h(e, t) {
        console.warn("The browser extension that intercepted this WebAuthn API call incorrectly implemented ".concat(e, ". You should report this error to them.\n"), t)
    }

    function w() {
        var e = window.PublicKeyCredential;
        return void 0 === e.isConditionalMediationAvailable ? new Promise((function(e) {
            return e(!1)
        })) : e.isConditionalMediationAvailable()
    }
    e.WebAuthnAbortService = d, e.WebAuthnError = l, e.base64URLStringToBuffer = a, e.browserSupportsWebAuthn = s, e.browserSupportsWebAuthnAutofill = w, e.bufferToBase64URLString = i, e.platformAuthenticatorIsAvailable = function() {
        return s() ? PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable() : new Promise((function(e) {
            return e(!1)
        }))
    }, e.startAuthentication = function(e, t) {
        var f, h;
        return void 0 === t && (t = !1), n(this, void 0, void 0, (function() {
            var n, b, y, R, g, E, A, m, v;
            return o(this, (function(o) {
                switch (o.label) {
                    case 0:
                        if (!s()) throw new Error("WebAuthn is not supported in this browser");
                        return 0 !== (null === (f = e.allowCredentials) || void 0 === f ? void 0 : f.length) && (n = null === (h = e.allowCredentials) || void 0 === h ? void 0 : h.map(c)), b = r(r({}, e), {
                            challenge: a(e.challenge),
                            allowCredentials: n
                        }), y = {}, t ? [4, w()] : [3, 2];
                    case 1:
                        if (!o.sent()) throw Error("Browser does not support WebAuthn autofill");
                        if (document.querySelectorAll("input[autocomplete$='webauthn']").length < 1) throw Error('No <input> with "webauthn" as the only or last value in its `autocomplete` attribute was detected');
                        y.mediation = "conditional", b.allowCredentials = [], o.label = 2;
                    case 2:
                        y.publicKey = b, y.signal = d.createNewAbortSignal(), o.label = 3;
                    case 3:
                        return o.trys.push([3, 5, , 6]), [4, navigator.credentials.get(y)];
                    case 4:
                        return R = o.sent(), [3, 6];
                    case 5:
                        throw function(e) {
                            var t = e.error,
                                r = e.options,
                                n = r.publicKey;
                            if (!n) throw Error("options was missing required publicKey property");
                            if ("AbortError" === t.name) {
                                if (r.signal instanceof AbortSignal) return new l({
                                    message: "Authentication ceremony was sent an abort signal",
                                    code: "ERROR_CEREMONY_ABORTED",
                                    cause: t
                                })
                            } else {
                                if ("NotAllowedError" === t.name) return new l({
                                    message: t.message,
                                    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                                    cause: t
                                });
                                if ("SecurityError" === t.name) {
                                    var o = window.location.hostname;
                                    if (!u(o)) return new l({
                                        message: "".concat(window.location.hostname, " is an invalid domain"),
                                        code: "ERROR_INVALID_DOMAIN",
                                        cause: t
                                    });
                                    if (n.rpId !== o) return new l({
                                        message: 'The RP ID "'.concat(n.rpId, '" is invalid for this domain'),
                                        code: "ERROR_INVALID_RP_ID",
                                        cause: t
                                    })
                                } else if ("UnknownError" === t.name) return new l({
                                    message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
                                    code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
                                    cause: t
                                })
                            }
                            return t
                        }({
                            error: o.sent(),
                            options: y
                        });
                    case 6:
                        if (!R) throw new Error("Authentication was not completed");
                        return g = R.id, E = R.rawId, A = R.response, m = R.type, v = void 0, A.userHandle && (_ = A.userHandle, v = new TextDecoder("utf-8").decode(_)), [2, {
                            id: g,
                            rawId: i(E),
                            response: {
                                authenticatorData: i(A.authenticatorData),
                                clientDataJSON: i(A.clientDataJSON),
                                signature: i(A.signature),
                                userHandle: v
                            },
                            type: m,
                            clientExtensionResults: R.getClientExtensionResults(),
                            authenticatorAttachment: p(R.authenticatorAttachment)
                        }]
                }
                var _
            }))
        }))
    }, e.startRegistration = function(e) {
        var t;
        return n(this, void 0, void 0, (function() {
            var n, f, w, b, y, R, g, E, A, m, v, _;
            return o(this, (function(o) {
                switch (o.label) {
                    case 0:
                        if (!s()) throw new Error("WebAuthn is not supported in this browser");
                        n = r(r({}, e), {
                            challenge: a(e.challenge),
                            user: r(r({}, e.user), {
                                id: (O = e.user.id, (new TextEncoder).encode(O))
                            }),
                            excludeCredentials: null === (t = e.excludeCredentials) || void 0 === t ? void 0 : t.map(c)
                        }), (f = {
                            publicKey: n
                        }).signal = d.createNewAbortSignal(), o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]), [4, navigator.credentials.create(f)];
                    case 2:
                        return w = o.sent(), [3, 4];
                    case 3:
                        throw function(e) {
                            var t, r, n = e.error,
                                o = e.options,
                                i = o.publicKey;
                            if (!i) throw Error("options was missing required publicKey property");
                            if ("AbortError" === n.name) {
                                if (o.signal instanceof AbortSignal) return new l({
                                    message: "Registration ceremony was sent an abort signal",
                                    code: "ERROR_CEREMONY_ABORTED",
                                    cause: n
                                })
                            } else if ("ConstraintError" === n.name) {
                                if (!0 === (null === (t = i.authenticatorSelection) || void 0 === t ? void 0 : t.requireResidentKey)) return new l({
                                    message: "Discoverable credentials were required but no available authenticator supported it",
                                    code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
                                    cause: n
                                });
                                if ("required" === (null === (r = i.authenticatorSelection) || void 0 === r ? void 0 : r.userVerification)) return new l({
                                    message: "User verification was required but no available authenticator supported it",
                                    code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
                                    cause: n
                                })
                            } else {
                                if ("InvalidStateError" === n.name) return new l({
                                    message: "The authenticator was previously registered",
                                    code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
                                    cause: n
                                });
                                if ("NotAllowedError" === n.name) return new l({
                                    message: n.message,
                                    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                                    cause: n
                                });
                                if ("NotSupportedError" === n.name) return 0 === i.pubKeyCredParams.filter((function(e) {
                                    return "public-key" === e.type
                                })).length ? new l({
                                    message: 'No entry in pubKeyCredParams was of type "public-key"',
                                    code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
                                    cause: n
                                }) : new l({
                                    message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
                                    code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
                                    cause: n
                                });
                                if ("SecurityError" === n.name) {
                                    var a = window.location.hostname;
                                    if (!u(a)) return new l({
                                        message: "".concat(window.location.hostname, " is an invalid domain"),
                                        code: "ERROR_INVALID_DOMAIN",
                                        cause: n
                                    });
                                    if (i.rp.id !== a) return new l({
                                        message: 'The RP ID "'.concat(i.rp.id, '" is invalid for this domain'),
                                        code: "ERROR_INVALID_RP_ID",
                                        cause: n
                                    })
                                } else if ("TypeError" === n.name) {
                                    if (i.user.id.byteLength < 1 || i.user.id.byteLength > 64) return new l({
                                        message: "User ID was not between 1 and 64 characters",
                                        code: "ERROR_INVALID_USER_ID_LENGTH",
                                        cause: n
                                    })
                                } else if ("UnknownError" === n.name) return new l({
                                    message: "The authenticator was unable to process the specified options, or could not create a new credential",
                                    code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
                                    cause: n
                                })
                            }
                            return n
                        }({
                            error: o.sent(),
                            options: f
                        });
                    case 4:
                        if (!w) throw new Error("Registration was not completed");
                        if (b = w.id, y = w.rawId, R = w.response, g = w.type, E = void 0, "function" == typeof R.getTransports && (E = R.getTransports()), A = void 0, "function" == typeof R.getPublicKeyAlgorithm) try {
                            A = R.getPublicKeyAlgorithm()
                        } catch (e) {
                            h("getPublicKeyAlgorithm()", e)
                        }
                        if (m = void 0, "function" == typeof R.getPublicKey) try {
                            null !== (v = R.getPublicKey()) && (m = i(v))
                        } catch (e) {
                            h("getPublicKey()", e)
                        }
                        if ("function" == typeof R.getAuthenticatorData) try {
                            _ = i(R.getAuthenticatorData())
                        } catch (e) {
                            h("getAuthenticatorData()", e)
                        }
                        return [2, {
                            id: b,
                            rawId: i(y),
                            response: {
                                attestationObject: i(R.attestationObject),
                                clientDataJSON: i(R.clientDataJSON),
                                transports: E,
                                publicKeyAlgorithm: A,
                                publicKey: m,
                                authenticatorData: _
                            },
                            type: g,
                            clientExtensionResults: w.getClientExtensionResults(),
                            authenticatorAttachment: p(w.authenticatorAttachment)
                        }]
                }
                var O
            }))
        }))
    }, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}));